import { addClasses } from '../utils/addClasses';
import { getMetadata } from '../utils/getMetadata';
import { BlockService } from './block.service';
import { SectionService } from './section.service';

type BlockMapping = {
  name: string;
  element: HTMLDivElement;
};

export class MainService {
  constructor(
    private sectionService: SectionService,
    private blockService: BlockService
  ) {}

  init = async () => {
    this.setup();
    await this.loadEager();
    this.loadLazy();
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
      await this.loadBlocks();
      // TODO: Performace adjustment
      setTimeout(() => {
        document.body.removeAttribute('style');
      }, 200);

      // await this.waitForLCP(LCP_BLOCKS);

      try {
        /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
        if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
          this.loadFonts();
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

  private loadLazy = () => {
    this.loadFonts();
  };

  private decorateTemplateAndTheme() {
    const template = getMetadata('template');
    if (template) addClasses(document.body, template);
    const theme = getMetadata('theme');
    if (theme) addClasses(document.body, theme);
  }

  private loadBlocks = async () => {
    const sections = document.querySelectorAll<HTMLElement>('.section');

    sections.forEach(async (section) => {
      const blocks: BlockMapping[] = this.collectBlocks(section);
      if (!blocks.length) {
        this.showSection(section);
        return;
      }

      await this.loadBlockModules(blocks);
      this.showSection(section);
    });
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

  private async loadBlockModules(blocks: BlockMapping[]) {
    for (const block of blocks) {
      const blockModule = await import(`${window.hlx.codeBasePath}/dist/${block.name}/${block.name}.js`);

      if (blockModule.default) {
        await blockModule.default(block.element);
      }
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
}
