import setupHlxObj from './setupHlxObj';
import { decorateBodyTag } from './decorateBodyTag';
import { setDocLanguage } from './setDocLanguage';

// type LifecycleCallback = () => void | Promise<void>;

// interface LifecycleCallbacks {
//   beforeInit?: LifecycleCallback;
//   afterInit?: LifecycleCallback;
//   beforeLoadEager?: LifecycleCallback;
//   loadEager?: LifecycleCallback;
//   afterLoadEager?: LifecycleCallback;
//   beforeLoadLazy?: LifecycleCallback;
//   loadLazy?: LifecycleCallback;
//   afterLoadLazy?: LifecycleCallback;
//   beforeLoadDelayed?: LifecycleCallback;
//   loadDelayed?: LifecycleCallback;
//   afterLoadDelayed?: LifecycleCallback;
// }

// class HLX {
//   private beforeInit: LifecycleCallback;
//   private afterInit: LifecycleCallback;
//   private beforeLoadEager: LifecycleCallback;
//   private loadEager: LifecycleCallback;
//   private afterLoadEager: LifecycleCallback;
//   private beforeLoadLazy: LifecycleCallback;
//   private loadLazy: LifecycleCallback;
//   private afterLoadLazy: LifecycleCallback;
//   private beforeLoadDelayed: LifecycleCallback;
//   private loadDelayed: LifecycleCallback;
//   private afterLoadDelayed: LifecycleCallback;
//   private initializedPromise: Promise<void>;

//   private loadLazyPromise?: Promise<void>;

//   constructor({
//     beforeInit = () => {},
//     afterInit = () => {},
//     beforeLoadEager = () => {},
//     loadEager = () => {},
//     afterLoadEager = () => {},
//     beforeLoadLazy = () => {},
//     loadLazy = () => {},
//     afterLoadLazy = () => {},
//     beforeLoadDelayed = () => {},
//     loadDelayed = () => {},
//     afterLoadDelayed = () => {},
//   }: LifecycleCallbacks = {}) {
//     this.beforeInit = beforeInit;
//     this.afterInit = afterInit;
//     this.beforeLoadEager = beforeLoadEager;
//     this.loadEager = loadEager;
//     this.afterLoadEager = afterLoadEager;
//     this.beforeLoadLazy = beforeLoadLazy;
//     this.loadLazy = loadLazy;
//     this.afterLoadLazy = afterLoadLazy;
//     this.beforeLoadDelayed = beforeLoadDelayed;
//     this.loadDelayed = loadDelayed;
//     this.afterLoadDelayed = afterLoadDelayed;
//     this.initializedPromise = this.init();
//   }

//   private async init() {
//     try {
//       console.time('init execution time: ');
//       await this.beforeInit();
//       await this._loadEager();
//       await this._loadLazy();
//       await this._loadDelayed();
//       await this.afterInit();
//       console.timeEnd('init execution time: ');
//     } catch (error) {
//       console.error('Error initializing HLX:', error);
//       throw error;
//     }
//   }

//   private async _loadEager() {
//     await this.beforeLoadEager();
//     console.time('loadEager execution time: ');
//     setupHlxObj();
//     decorateBodyTag();
//     setDocLanguage();
//     await this.loadEager();
//     await waitFor(300);
//     console.timeEnd('loadEager execution time: ');
//     await this.afterLoadEager();
//   }

//   private async _loadLazy() {
//     await this.beforeLoadLazy();

//     console.time('loadLazy execution time: ');
//     await this.loadLazy();
//     await waitFor(300);

//     console.timeEnd('loadLazy execution time: ');
//     await this.afterLoadLazy();
//   }

//   private async _loadDelayed() {
//     console.time('loadDelayed execution time: ');
//     await this.beforeLoadDelayed();
//     await this.loadDelayed();
//     await waitFor(300);
//     await this.afterLoadDelayed();
//     console.timeEnd('loadDelayed execution time: ');
//   }

//   public async initialized(): Promise<void> {
//     return this.initializedPromise;
//   }

//   public async onLoadLazy(): Promise<void> {
//     if (!this.loadLazyPromise) {
//       this.loadLazyPromise = this._loadLazy();
//     }
//     return this.loadLazyPromise;
//   }
// }

// export default HLX;

class HLX {
  private beforeEagerPromise: Promise<void>;
  private eagerPromise: Promise<void>;
  private beforeLazyPromise: Promise<void>;
  private lazyPromise: Promise<void>;
  private beforeDelayedPromise: Promise<void>;
  private delayedPromise: Promise<void>;
  private initializedPromise: Promise<void>;

  constructor() {
    this.init();
  }

  private init() {
    this.beforeLoadEager();
    this.loadEager();
    this.beforeLoadLazy();
    this.loadLazy();
    this.beforeLoadDelayed();
    this.loadDelayed();
    this.initialized();
  }

  public async beforeLoadEager(): Promise<void> {
    if (this.beforeEagerPromise) return this.beforeEagerPromise;

    console.log(new Date().getTime(), 'beforeLoadEager');

    this.beforeEagerPromise = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    return this.beforeEagerPromise;
  }

  public async loadEager(): Promise<void> {
    if (this.eagerPromise) return this.eagerPromise;

    console.log(new Date().getTime(), 'loadEager');

    this.eagerPromise = new Promise((resolve) => {
      setupHlxObj();
      decorateBodyTag();
      setDocLanguage();
      setTimeout(() => {
        resolve();
      }, 4500);
    });
    return this.eagerPromise;
  }

  public async beforeLoadLazy(): Promise<void> {
    if (this.beforeLazyPromise) return this.beforeLazyPromise;

    console.log(new Date().getTime(), 'beforeLoadLazy');

    this.beforeLazyPromise = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 4000);
    });
    return this.beforeLazyPromise;
  }

  public async loadLazy(): Promise<void> {
    if (this.lazyPromise) return this.lazyPromise;

    console.log(new Date().getTime(), 'loadLazy');

    this.lazyPromise = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 3500);
    });
    return this.lazyPromise;
  }

  public async beforeLoadDelayed(): Promise<void> {
    if (this.beforeDelayedPromise) return this.beforeDelayedPromise;

    console.log(new Date().getTime(), 'beforeLoadDelayed');

    this.beforeDelayedPromise = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    return this.beforeDelayedPromise;
  }

  public async loadDelayed(): Promise<void> {
    if (this.delayedPromise) return this.delayedPromise;

    console.log(new Date().getTime(), 'loadDelayed');

    this.delayedPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
      // laodDelayed scripts
      // Resolve
    });
    return this.delayedPromise;
  }

  public async initialized(): Promise<void> {
    if (this.initializedPromise) return this.initializedPromise;

    console.log(new Date().getTime(), 'initialized');

    this.initializedPromise = new Promise((resolve) => {
      // Business Logic
      // Resolve
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return this.initializedPromise;
  }
}

export default new HLX();
