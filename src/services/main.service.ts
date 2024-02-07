import { addClasses } from '../utils/addClasses';
import { getMetadata } from '../utils/getMetadata';
import { BlockService } from './block.service';
import { SectionService } from './section.service';

interface BlockMapping {
  name: string;
  element: HTMLDivElement;
}

export class MainService {
  constructor(
    private sectionService: SectionService,
    private blockService: BlockService
  ) {}

  public async initialize() {
    this.setupEnvironment();
    await this.loadContent();
  }

  private setupEnvironment() {
    this.setupHlxGlobals();
    this.extractCodeBasePath();
  }

  private setupHlxGlobals() {
    window.hlx = window.hlx || {};
    window.hlx.RUM_MASK_URL = 'full';
    window.hlx.codeBasePath = '';
    window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on';
  }

  private extractCodeBasePath() {
    const scriptEl = document.querySelector('script[src$="/scripts/scripts.js"]') as HTMLScriptElement;
    if (scriptEl) {
      try {
        [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split('/scripts/scripts.js');
      } catch (error) {
        console.error('Error extracting code base path:', error);
      }
    }
  }

  private async loadContent() {
    document.documentElement.lang = 'en';
    this.decorateTemplateAndTheme();
    this.hideBody();
    const main = document.querySelector('main');
    if (main) {
      this.configureMainElement(main);
      this.initializeServices(main);
      await this.loadBlocks(main);
      this.revealBody();
    }
  }

  private decorateTemplateAndTheme() {
    const template = getMetadata('template');
    if (template) addClasses(document.body, template);
    const theme = getMetadata('theme');
    if (theme) addClasses(document.body, theme);
  }

  private hideBody() {
    const body = document.querySelector('body');
    if (body) {
      body.style.display = 'none';
    }
  }

  private configureMainElement(main: HTMLElement) {
    main.setAttribute('id', 'main');
    this.addSidebarContainer(main);
    this.addInnerContainer(main);
  }

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

  private initializeServices(main: HTMLElement) {
    this.sectionService.init(main);
    this.blockService.decorateBlocks(main);
  }

  private async loadBlocks(main: HTMLElement) {
    const sections = main.querySelectorAll<HTMLElement>('.section');
    for (const section of sections) {
      await this.loadSectionBlocks(section);
    }
  }

  private async loadSectionBlocks(section: HTMLElement) {
    const blocks: BlockMapping[] = this.collectBlocks(section);
    if (blocks.length === 0) {
      this.showSection(section);
      return;
    }
    await this.loadBlockModules(blocks);
    this.showSection(section);
  }

  private collectBlocks(section: HTMLElement): BlockMapping[] {
    const blocks: BlockMapping[] = [];
    const blockElements = section.querySelectorAll<HTMLDivElement>('[data-block-name]');
    blockElements.forEach((block) => {
      block.style.display = 'none';
      blocks.push({
        name: block.dataset['blockName'] as string,
        element: block,
      });
    });
    return blocks;
  }

  private async loadBlockModules(blocks: BlockMapping[]) {
    for (const block of blocks) {
      try {
        const blockModule = await import(`${window.hlx.codeBasePath}/dist/${block.name}/${block.name}.js`);
        if (blockModule.default) {
          await blockModule.default(block.element);
        }
      } catch (error) {
        console.error(`Error loading block module ${block.name}:`, error);
      }
    }
  }

  private showSection(section: HTMLElement) {
    section.style.removeProperty('display');
  }

  private revealBody() {
    document.body.removeAttribute('style');
  }
}
