import { addClasses } from '../utils/addClasses';
import { getMetadata } from '../utils/getMetadata';
import { BlockService } from './block.service';
import { SectionService } from './section.service';

type BlockMapping = {
  name: string;
  element: HTMLDivElement;
};

interface Block extends HTMLElement {
  dataset: {
    blockName: string;
  };
}

interface LcpCandidate extends HTMLElement {
  complete: boolean;
}

const LCP_BLOCKS = ['banner'];

export class MainService {
  constructor(
    private sectionService: SectionService,
    private blockService: BlockService
  ) {}

  init = async () => {
    this.setup();
    await this.loadEager();
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
      await this.waitForLCP();
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

  // private loadLazy = async () => {};

  private decorateTemplateAndTheme() {
    const template = getMetadata('template');
    if (template) addClasses(document.body, template);
    const theme = getMetadata('theme');
    if (theme) addClasses(document.body, theme);
  }

  private loadBlocks = async () => {
    const sections = document.querySelectorAll<HTMLElement>('.section');

    sections.forEach((section) => this.loadBlock(section));
  };

  private collectBlocks(section: HTMLElement): BlockMapping[] {
    const blockMap: BlockMapping[] = [];
    const blocksElements = section.querySelectorAll<HTMLDivElement>('[data-block-name]');

    blocksElements.forEach((block: HTMLDivElement) => {
      block.style.display = 'none';
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

  private async waitForLCP() {
    const block = document.querySelector<Block>('.block');
    const hasLCPBlock = block && LCP_BLOCKS.includes(block?.dataset.blockName);
    if (hasLCPBlock) await this.loadBlock(block);

    // @ts-ignore
    document.body.style.display = null;
    const lcpCandidate = document.querySelector<LcpCandidate>('main img');

    await new Promise<void>((resolve) => {
      if (lcpCandidate && !lcpCandidate.complete) {
        lcpCandidate.setAttribute('loading', 'eager');
        lcpCandidate.setAttribute('fetchpriority', 'high');
        lcpCandidate.addEventListener('load', () =>  resolve());
        lcpCandidate.addEventListener('error',() =>  resolve());
      } else {
        resolve();
      }
    });
  }

  private async loadBlock(section: HTMLElement) {
      const blocks: BlockMapping[] = this.collectBlocks(section);
      if (!blocks.length) {
        this.showSection(section);
        return;
      }

      await this.loadBlockModules(blocks);
      this.showSection(section);
  }
}
