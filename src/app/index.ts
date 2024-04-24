import { decorateTemplateAndTheme } from './tasks/decorateTemplateAndTheme';
import { decorateButtons } from './tasks/decorateButtons';
import { setDocLanguage } from './tasks/setDocLanguage';
import { waitForLCP } from './tasks/waitForLCP';
import { loadFonts } from './tasks/loadFonts';
import { initSampleRUM } from './tasks/initSampleRUM';
import { DebuggerService } from '@kluntje/services';
import { loadCSS } from './tasks/loadCSS';
import { isSidekickLibraryActive } from 'Helpers/sidekick/isSidekickLibraryActive';
import { config } from '../../config';
import { loadBlocks } from './tasks/loadBlocks';

class HLX {
  private beforeEagerCallbacks: Array<() => Promise<void>> = [];
  private loadEagerCallbacks: Array<() => Promise<void>> = [];
  private beforeLoadLazyCallbacks: Array<() => Promise<void>> = [];
  private loadLazyCallbacks: Array<() => Promise<void>> = [];
  private beforeLoadDelayedCallbacks: Array<() => Promise<void>> = [];
  private loadDelayedCallbacks: Array<() => Promise<void>> = [];
  private initializedCallbacks: Array<() => Promise<void>> = [];

  private beforeEagerPromise?: Promise<void>;
  private eagerPromise?: Promise<void>;
  private beforeLazyPromise?: Promise<void>;
  private lazyPromise?: Promise<void>;
  private beforeDelayedPromise?: Promise<void>;
  private delayedPromise?: Promise<void>;
  private initializedPromise?: Promise<void>;

  private get beforeEager() {
    if (this.beforeEagerPromise === undefined) {
      this.beforeEagerPromise = this.beforeLoadEager();
    }
    return this.beforeEagerPromise;
  }

  private get loadEager() {
    if (this.eagerPromise === undefined) {
      this.eagerPromise = this.loadEagerPromise();
    }
    return this.eagerPromise;
  }

  private get beforeLoadLazy() {
    if (this.beforeLazyPromise === undefined) {
      this.beforeLazyPromise = this.beforeLoadLazyPromise();
    }
    return this.beforeLazyPromise;
  }

  private get loadLazy() {
    if (this.lazyPromise === undefined) {
      this.lazyPromise = this.loadLazyPromise();
    }
    return this.lazyPromise;
  }

  private get beforeLoadDelayed() {
    if (this.beforeDelayedPromise === undefined) {
      this.beforeDelayedPromise = this.beforeLoadDelayedPromise();
    }
    return this.beforeDelayedPromise;
  }

  private get loadDelayed() {
    if (this.delayedPromise === undefined) {
      this.delayedPromise = this.loadDelayedPromise();
    }
    return this.delayedPromise;
  }

  private get initialized() {
    if (this.initializedPromise === undefined) {
      this.initializedPromise = this.getInitializedPromise();
    }
    return this.initializedPromise;
  }

  public addBeforeEagerTask(cb: () => Promise<void>) {
    this.beforeEagerCallbacks.push(cb);
  }

  public addLoadEagerTask(cb: () => Promise<void>) {
    this.loadEagerCallbacks.push(cb);
  }

  public addBeforeLoadLazyTask(cb: () => Promise<void>) {
    this.beforeLoadLazyCallbacks.push(cb);
  }

  public addLoadLazyTask(cb: () => Promise<void>) {
    this.loadLazyCallbacks.push(cb);
  }

  public addBeforeLoadDelayedTask(cb: () => Promise<void>) {
    this.beforeLoadDelayedCallbacks.push(cb);
  }

  public addLoadDelayedTask(cb: () => Promise<void>) {
    this.loadDelayedCallbacks.push(cb);
  }

  public addInitializedTask(cb: () => Promise<void>) {
    this.initializedCallbacks.push(cb);
  }

  public async init() {
    await this.beforeEager;
    await this.loadEager;
    await this.beforeLoadLazy;
    await this.loadLazy;
    await this.beforeLoadDelayed;
    await this.loadDelayed;
    await this.initialized;
  }

  private async beforeLoadEager(): Promise<void> {
    const beforeLoadEagerTask: Promise<void> = new Promise((resolve) => {
      initSampleRUM();
      decorateTemplateAndTheme();
      setDocLanguage();
      resolve();
    });

    await Promise.all([...this.beforeEagerCallbacks.map((cb) => cb()), beforeLoadEagerTask]);
  }

  private async loadEagerPromise(): Promise<void> {
    const loadEagerTask: Promise<void> = new Promise(async (resolve) => {
      const main = document.querySelector('main');
      decorateButtons(main);
      setTimeout(() => {
        document.body.classList.add('show');
        resolve();
      }, 100);

      await waitForLCP();

      try {
        /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
        if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
          await loadFonts();
        }
      } catch (e) {
        // do nothing
      }
    });

    await Promise.all([...this.loadEagerCallbacks.map((cb) => cb()), loadEagerTask]);
  }

  private async beforeLoadLazyPromise(): Promise<void> {
    const beforeLoadLazyTask: Promise<void> = new Promise((resolve) => resolve());

    await Promise.all([...this.beforeLoadLazyCallbacks.map((cb) => cb()), beforeLoadLazyTask]);
  }

  private async loadLazyPromise(): Promise<void> {
    const loadLazyTask: Promise<void> = new Promise(async (resolve) => {
      try {
        const {
          lazyStylesScssPath,
          sidekickLibraryStylesScssPath,
          fontsScssPath,
          lazyStylesCssPath,
          sidekickLibraryStylesCssPath,
        } = config;

        if (lazyStylesScssPath && lazyStylesCssPath) await loadCSS(lazyStylesCssPath);
        if (sidekickLibraryStylesScssPath && sidekickLibraryStylesCssPath && isSidekickLibraryActive()) {
          await loadCSS(sidekickLibraryStylesCssPath);
        }
        if (fontsScssPath) await loadFonts();
        await loadBlocks();
      } catch (error) {
        DebuggerService.error('Load lazy Task: ', error);
      }
      resolve();
    });

    await Promise.all([...this.loadLazyCallbacks.map((cb) => cb()), loadLazyTask]);
  }

  private async beforeLoadDelayedPromise(): Promise<void> {
    const defaultTask: Promise<void> = new Promise((resolve) => {
      resolve();
    });

    await Promise.all([...this.beforeLoadDelayedCallbacks.map((cb) => cb()), defaultTask]);
  }

  private async loadDelayedPromise(): Promise<void> {
    const loadDelayedTask: Promise<void> = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    await Promise.all([...this.loadDelayedCallbacks.map((cb) => cb()), loadDelayedTask]);
  }

  private async getInitializedPromise(): Promise<void> {
    const initializedTask: Promise<void> = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await Promise.all([...this.initializedCallbacks.map((cb) => cb()), initializedTask]);
  }
}

export default new HLX();
