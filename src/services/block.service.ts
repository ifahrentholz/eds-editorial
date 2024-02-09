import { toClassName } from '../utils/toClassName';

export class BlockService {
  //TODO: Provider for fetch data
  /**
   * Extracts the config from a block.
   * @param {Element} block The block element
   * @returns {object} The block config
   */
  readBlockConfig(block: Element): Record<string, any> {
    const config: Record<any, any> = {};
    block.querySelectorAll(':scope > div').forEach((row) => {
      if (row.children) {
        const cols = [...row.children];
        if (cols[1]) {
          const col = cols[1];
          const name = toClassName(cols[0].textContent ?? '');
          let value: any = '';
          if (col.querySelector('a')) {
            const as = [...col.querySelectorAll('a')];
            if (as.length === 1) {
              value = as[0].href;
            } else {
              value = as.map((a) => a.href);
            }
          } else if (col.querySelector('img')) {
            const imgs = [...col.querySelectorAll('img')];
            if (imgs.length === 1) {
              value = imgs[0].src;
            } else {
              value = imgs.map((img) => img.src);
            }
          } else if (col.querySelector('p')) {
            const ps = [...col.querySelectorAll('p')];
            if (ps.length === 1) {
              value = ps[0].textContent;
            } else {
              value = ps.map((p) => p.textContent);
            }
          } else value = row.children[1].textContent;
          config[name] = value;
        }
      }
    });
    return config;
  }

  /**
   * Decorates all blocks in a container element.
   * @param {Element} main The container element
   */
  decorateBlocks(main: HTMLElement) {
    main.querySelectorAll<HTMLDivElement>('div.section > div > div').forEach(this.decorateBlock);
  }

  /**
   * Decorates a block.
   * @param {Element} block The block element
   */
  private decorateBlock(block: HTMLElement) {
    const shortBlockName = block.classList[0];
    if (shortBlockName) {
      block.classList.add('block');
      block.dataset.blockName = shortBlockName;
      const blockWrapper = block.parentElement;
      blockWrapper?.classList.add(`${shortBlockName}-wrapper`);
      const section = block.closest('.section');
      if (section) section.classList.add(`${shortBlockName}-container`);
    }
  }

  async loadCSS(href) {
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

  updateSectionsStatus(main) {
    const sections = [...main.querySelectorAll(':scope .section')];
    for (let i = 0; i < sections.length; i += 1) {
      const section = sections[i];
      const status = section.dataset.sectionStatus;
      if (status !== 'loaded') {
        const loadingBlock = section.querySelector(
          '.block[data-block-status="initialized"], .block[data-block-status="loading"]'
        );
        if (loadingBlock) {
          section.dataset.sectionStatus = 'loading';
          break;
        } else {
          section.dataset.sectionStatus = 'loaded';
          section.style.display = null;
        }
      }
    }
  }

  async loadBlock(block) {
    const status = block.dataset.blockStatus;
    if (status !== 'loading' && status !== 'loaded') {
      block.dataset.blockStatus = 'loading';
      const { blockName } = block.dataset;
      try {
        //const cssLoaded = this.loadCSS(`${window.hlx.codeBasePath}/dist/${blockName}/${blockName}.css`);
        const decorationComplete = new Promise((resolve) => {
          (async () => {
            try {
              const mod = await import(`${window.hlx.codeBasePath}/dist/${blockName}/${blockName}.js`);
              if (mod.default) {
                await mod.default(block);
              }
            } catch (error) {
              // eslint-disable-next-line no-console
              console.log(`failed to load module for ${blockName}`, error);
            }
            resolve(true);
          })();
        });
        //await Promise.all([cssLoaded, decorationComplete]);
        await decorationComplete;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`failed to load block ${blockName}`, error);
      }
      block.dataset.blockStatus = 'loaded';
    }
    return block;
  }

  async loadBlocks(main) {
    this.updateSectionsStatus(main);
    const blocks = [...main.querySelectorAll('div.block')];
    for (let i = 0; i < blocks.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await this.loadBlock(blocks[i]);
      this.updateSectionsStatus(main);
    }
  }
}
