import { addClasses } from '../utils/addClasses';
import { getMetadata } from '../utils/getMetadata';
import { BlockService } from './block.service';
import { SectionService } from './section.service';

type ComponentMapping = {
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
      await this.loadComponents();
      // TODO: Performace adjustment
      setTimeout(() => {
        document.body.removeAttribute('style');
      }, 200);

      // await this.waitForLCP(LCP_BLOCKS);
    }
  };

  private addSidebarContainer(main: HTMLElement) {
    const sidebarContainer = document.createElement('sidebar-component');
    sidebarContainer.setAttribute('id', 'sidebar');
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

  private loadComponents = async () => {
    const sections = document.querySelectorAll<HTMLElement>('.section');

    sections.forEach(async (section) => {
      const components: ComponentMapping[] = this.collectComponents(section);
      if (!components.length) {
        this.showSection(section);
        return;
      }

      await this.loadComponentModules(components);
      this.showSection(section);
    });
  };

  private collectComponents(section: HTMLElement): ComponentMapping[] {
    const components: ComponentMapping[] = [];
    const blocks = section.querySelectorAll<HTMLDivElement>('[data-block-name]');

    blocks.forEach((block: HTMLDivElement) => {
      block.style.display = 'none';
      components.push({
        name: block.dataset['blockName'] as string,
        element: block,
      });
    });

    return components;
  }

  private async loadComponentModules(components: ComponentMapping[]) {
    for (const component of components) {
      const componentModule = await import(`${window.hlx.codeBasePath}/dist/${component.name}/${component.name}.js`);

      if (componentModule.default) {
        await componentModule.default(component.element);
      }
    }
  }

  private showSection(section: HTMLElement) {
    section.style.removeProperty('display');
  }
}