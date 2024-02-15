import { addClasses } from '../utils/addClasses';
import { getMetadata } from '../utils/getMetadata';
import { BlockService } from './block.service';
import { SectionService } from './section.service';

type BlockMapping = {
  name: string;
  element: HTMLDivElement;
};

interface LcpCandidate extends HTMLElement {
  complete: boolean;
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
    window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on';

    const scriptEl = document.querySelector('script[src$="/scripts/scripts.js"]') as HTMLScriptElement;
    if (scriptEl) {
      try {
        [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split('/scripts/scripts.js');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }

  private loadEager = async () => {
    // TODO: how to support different languages here
    document.documentElement.lang = 'en';
    this.decorateTemplateAndTheme();
    if (document) {
      const body = document.querySelector('body');
      if (body) {
        body.style.display = 'none';
      }
    }
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('id', 'main');
      this.addSidebarContainer(main);
      this.sectionService.init(main);
      this.addInnerContainer(main); // TODO refactor initializing
      this.blockService.decorateBlocks(main);

      // TODO: Performance adjustment
      setTimeout(() => {
        document.body.removeAttribute('style');
      }, 200);

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
    const sidebarContainer = document.createElement('sidebar-component');
    sidebarContainer.setAttribute('id', 'sidebar');
    window.innerWidth <= 1280
      ? sidebarContainer.classList.add('inactive')
      : sidebarContainer.classList.remove('inactive');
    main.after(sidebarContainer);
  }

  private addInnerContainer(main: HTMLElement) {
    const children = main.innerHTML;
    main.innerHTML = `<div class="inner"><header-component id="header"></header-component>${children}</div>`;
  }

  private loadLazy = async () => {
    await this.loadFonts();
    await this.loadBlocks();
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
    const status = block.element.dataset.blockStatus;

    if (status !== 'loading' && status !== 'loaded') {
      block.element.dataset.blockStatus = 'loading';

      const blockModule = await import(`${window.hlx.codeBasePath}/dist/${block.name}/${block.name}.js`);

      if (blockModule.default) {
        await blockModule.default(block.element);
      }

      block.element.dataset.blockStatus = 'loaded';
    }
  }

  private showSection(section: HTMLElement) {
    section.style.removeProperty('display');
  }

  private async loadFonts() {
    await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);
    try {
      if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
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
        if (hasLCPBlock) await this.loadBlockModules(block);
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
      await this.loadBlockModules(block);
    }

    this.showSection(section);
  }
}
