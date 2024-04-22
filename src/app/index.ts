import setupHlxObj from './tasks/setupHlxObj';
import { decorateTemplateAndTheme } from './tasks/decorateTemplateAndTheme';
import { decorateButtons } from './tasks/decorateButtons';
import { setDocLanguage } from './tasks/setDocLanguage';
import { waitForLCP } from './tasks/waitForLCP';
import { loadFonts } from './tasks/loadFonts';

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
    const dummyDelay: Promise<void> = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        console.log(new Date().getTime(), 'beforeLoadEager');
        resolve();
      }, 5000);
    });

    await Promise.all([...this.beforeEagerCallbacks.map((cb) => cb()), dummyDelay]);
  }

  private async loadEagerPromise(): Promise<void> {
    const loadEagerTask: Promise<void> = new Promise(async (resolve) => {
      const main = document.querySelector('main');
      setupHlxObj();
      decorateTemplateAndTheme();
      setDocLanguage();
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
    const defaultTask: Promise<void> = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 4000);
    });

    await Promise.all([...this.beforeLoadLazyCallbacks.map((cb) => cb()), defaultTask]);
  }

  private async loadLazyPromise(): Promise<void> {
    const defaultTask: Promise<void> = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 3500);
    });

    await Promise.all([...this.loadLazyCallbacks.map((cb) => cb()), defaultTask]);
  }

  private async beforeLoadDelayedPromise(): Promise<void> {
    const defaultTask: Promise<void> = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
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
