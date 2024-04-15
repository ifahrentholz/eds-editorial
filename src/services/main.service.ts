import { isSidekickLibraryActive } from 'Helpers/sidekick/isSidekickLibraryActive';
import { addClasses } from '../utils/addClasses';
import { getMetadata } from '../utils/getMetadata';
import { BlockService } from './block.service';
import { SectionService } from './section.service';
import { config } from '../../config.ts';
import { DebuggerService } from '@kluntje/services';
import { getLocation } from 'Helpers/sidekick/getLocation.ts';

type BlockMapping = {
  name: string;
  element: HTMLDivElement;
};

interface LcpCandidate extends HTMLElement {
  complete: boolean;
}

class Status {
  static unloaded = 'unloaded';
  static loading = 'loading';
  static loaded = 'loaded';
  static error = 'error';
}

export class MainService {
  private lcpBlocks = ['banner'];

  constructor(
    private sectionService: SectionService,
    private blockService: BlockService
  ) {}

  init = async () => {
    this.setup();
    await this.loadEager();
    await this.loadLazy();
  };

  /**
   * Setup block utils.
   */
  private setup() {
    window.hlx = window.hlx || {};
    window.hlx.RUM_MASK_URL = 'full';
    window.hlx.codeBasePath = '';
    window.hlx.lighthouse = new URLSearchParams(getLocation().search).get('lighthouse') === 'on';

    const scriptEl = document.querySelector('script[src$="/scripts/scripts.js"]') as HTMLScriptElement;
    if (scriptEl) {
      try {
        [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split('/scripts/scripts.js');
      } catch (error) {
        DebuggerService.error('MainService: Error initializing codeBasePath.', error);
      }
    }
  }

  private loadEager = async () => {
    // TODO: how to support different languages here
    document.documentElement.lang = 'en';
    this.decorateTemplateAndTheme();
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('id', 'main');
      this.addSidebarContainer(main);
      this.sectionService.init(main);
      this.addInnerContainer(main); // TODO refactor initializing
      this.blockService.decorateBlocks(main);

      // TODO: Performance adjustment
      setTimeout(() => {
        document.body.classList.add('show');
      }, 100);

      await this.waitForLCP();

      try {
        /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
        if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
          await this.loadFonts();
        }
      } catch (e) {
        // do nothing
      }
    }
  };

  private addSidebarContainer(main: HTMLElement) {
    if (isSidekickLibraryActive()) return;

    const sidebarContainer = document.createElement('sidebar-component');
    sidebarContainer.setAttribute('id', 'sidebar');
    window.innerWidth <= 1280 ? sidebarContainer.classList.remove('active') : sidebarContainer.classList.add('active');
    window.innerWidth <= 1280 ? sidebarContainer.classList.remove('active') : sidebarContainer.classList.add('active');
    main.after(sidebarContainer);
  }

  private addInnerContainer(main: HTMLElement) {
    const children = main.innerHTML;
    main.innerHTML = `<div class="inner">${isSidekickLibraryActive() ? `` : `<header-component id="header"></header-component>`}${children}</div>`;
  }

  private loadLazy = async () => {
    const { lazyStylesScssPath, sidekickLibraryStylesScssPath, fontsScssPath } = config;
    try {
      if (lazyStylesScssPath) await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`);
      if (sidekickLibraryStylesScssPath && isSidekickLibraryActive()) {
        await this.loadCSS(`${window.hlx.codeBasePath}/dist/sidekickLibraryStyles/sidekickLibraryStyles.css`);
      }
      if (fontsScssPath) await this.loadFonts();
      await this.loadBlocks();
    } catch (error) {
      DebuggerService.error('MainService: Load lazy error: ', error);
    }
  };

  private decorateTemplateAndTheme() {
    const template = getMetadata('template');
    if (template) addClasses(document.body, template);
    const theme = getMetadata('theme');
    if (theme) addClasses(document.body, theme);
  }

  /**
   * Loads Blocks
   * by getting all sections and load every block in every section
   * and shows every section that is finished loading.
   */
  private loadBlocks = async () => {
    const sections = [...document.querySelectorAll<HTMLElement>('.section')];
    const SectionsPromises = sections.map((section) => this.loadBlock(section));

    await Promise.all(SectionsPromises);
  };

  private collectBlocks(section: HTMLElement): BlockMapping[] {
    const blockMap: BlockMapping[] = [];
    const blocksElements = section.querySelectorAll<HTMLDivElement>('[data-block-name]');

    blocksElements.forEach((block: HTMLDivElement) => {
      blockMap.push({
        name: block.dataset['blockName'] as string,
        element: block,
      });
    });

    return blockMap;
  }

  private async loadBlockModules(block: BlockMapping) {
    const status = block.element.dataset.blockStatus ?? Status.unloaded;

    if (status === Status.unloaded) {
      block.element.dataset.blockStatus = Status.loading;

      try {
        const blockModule = await import(`${window.hlx.codeBasePath}/dist/${block.name}/${block.name}.js`);

        if (blockModule.default) {
          await blockModule.default(block.element);
        }

        block.element.dataset.blockStatus = Status.loaded;
      } catch (error) {
        block.element.dataset.blockStatus = Status.error;
        DebuggerService.error('MainService: An error occurred during module import:', error);
      }
    }
  }

  async loadBlockStyles(block: BlockMapping) {
    try {
      await this.loadCSS(`${window.hlx.codeBasePath}/dist/${block.name}/${block.name}.css`);
    } catch (error) {
      //do nothing
    }
  }

  private showSection(section: HTMLElement) {
    section.style.removeProperty('display');
  }

  private async loadFonts() {
    await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);
    try {
      if (!getLocation().hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
    } catch (e) {
      // do nothing
    }
  }

  private async loadCSS(href: string) {
    return new Promise((resolve, reject) => {
      if (!document.querySelector(`head > link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.append(link);
      } else {
        resolve(true);
      }
    });
  }

  private async waitForLCP() {
    /* Js Chunks should be loaded
    Old logic only looks after the first block
    New logic looks in the first section after lcp candidates, 
    since we show ech section depending on if its blocks and modules are loaded */
    const firstSection: HTMLElement | null = document.querySelector('.section');

    if (firstSection) {
      const blocks = this.collectBlocks(firstSection);
      const blockPromises = blocks.map(async (block) => {
        const hasLCPBlock = this.lcpBlocks.includes(block.name);
        if (hasLCPBlock) await Promise.all([this.loadBlockModules(block), this.loadBlockStyles(block)]);
      });

      await Promise.all(blockPromises);
      this.showSection(firstSection);
    }

    // @ts-ignore
    document.body.style.display = null;
    const lcpCandidate = document.querySelector<LcpCandidate>('main img');

    await new Promise<void>((resolve) => {
      if (lcpCandidate && !lcpCandidate.complete) {
        lcpCandidate.setAttribute('loading', 'eager');
        lcpCandidate.setAttribute('fetchpriority', 'high');
        lcpCandidate.addEventListener('load', () => resolve());
        lcpCandidate.addEventListener('error', () => resolve());
      } else {
        resolve();
      }
    });
  }

  private async loadBlock(section: HTMLElement) {
    const sectionsBlocks: BlockMapping[] = this.collectBlocks(section);

    if (!sectionsBlocks.length) {
      this.showSection(section);
      return;
    }

    for (const block of sectionsBlocks) {
      Promise.all([this.loadBlockModules(block), this.loadBlockStyles(block)]);
    }

    this.showSection(section);
  }
}
