import { waitFor } from '@kluntje/js-utils/lib/dom-helpers';
import setupHlxObj from './setupHlxObj';
import { decorateBodyTag } from './decorateBodyTag';
import { setDocLanguage } from './setDocLanguage';

type LifecycleCallback = () => void | Promise<void>;

interface LifecycleCallbacks {
  beforeInit?: LifecycleCallback;
  afterInit?: LifecycleCallback;
  beforeLoadEager?: LifecycleCallback;
  loadEager?: LifecycleCallback;
  afterLoadEager?: LifecycleCallback;
  beforeLoadLazy?: LifecycleCallback;
  loadLazy?: LifecycleCallback;
  afterLoadLazy?: LifecycleCallback;
  beforeLoadDelayed?: LifecycleCallback;
  loadDelayed?: LifecycleCallback;
  afterLoadDelayed?: LifecycleCallback;
}

class HLX {
  private beforeInit: LifecycleCallback;
  private afterInit: LifecycleCallback;
  private beforeLoadEager: LifecycleCallback;
  private loadEager: LifecycleCallback;
  private afterLoadEager: LifecycleCallback;
  private beforeLoadLazy: LifecycleCallback;
  private loadLazy: LifecycleCallback;
  private afterLoadLazy: LifecycleCallback;
  private beforeLoadDelayed: LifecycleCallback;
  private loadDelayed: LifecycleCallback;
  private afterLoadDelayed: LifecycleCallback;
  private initializedPromise: Promise<void>;

  constructor({
    beforeInit = () => {},
    afterInit = () => {},
    beforeLoadEager = () => {},
    loadEager = () => {},
    afterLoadEager = () => {},
    beforeLoadLazy = () => {},
    loadLazy = () => {},
    afterLoadLazy = () => {},
    beforeLoadDelayed = () => {},
    loadDelayed = () => {},
    afterLoadDelayed = () => {},
  }: LifecycleCallbacks = {}) {
    this.beforeInit = beforeInit;
    this.afterInit = afterInit;
    this.beforeLoadEager = beforeLoadEager;
    this.loadEager = loadEager;
    this.afterLoadEager = afterLoadEager;
    this.beforeLoadLazy = beforeLoadLazy;
    this.loadLazy = loadLazy;
    this.afterLoadLazy = afterLoadLazy;
    this.beforeLoadDelayed = beforeLoadDelayed;
    this.loadDelayed = loadDelayed;
    this.afterLoadDelayed = afterLoadDelayed;
    this.initializedPromise = this.init();
  }

  private async init() {
    try {
      console.time('init execution time: ');
      await this.beforeInit();
      await this._loadEager();
      await this._loadLazy();
      await this._loadDelayed();
      await this.afterInit();
      console.timeEnd('init execution time: ');
    } catch (error) {
      console.error('Error initializing HLX:', error);
      throw error;
    }
  }

  private async _loadEager() {
    await this.beforeLoadEager();
    console.time('loadEager execution time: ');
    setupHlxObj();
    decorateBodyTag();
    setDocLanguage();
    await this.loadEager();
    await waitFor(300);
    console.timeEnd('loadEager execution time: ');
    await this.afterLoadEager();
  }

  private async _loadLazy() {
    await this.beforeLoadLazy();
    console.time('loadLazy execution time: ');
    await this.loadLazy();
    await waitFor(300);
    console.timeEnd('loadLazy execution time: ');
    await this.afterLoadLazy();
  }

  private async _loadDelayed() {
    console.time('loadDelayed execution time: ');
    await this.beforeLoadDelayed();
    await this.loadDelayed();
    await waitFor(300);
    await this.afterLoadDelayed();
    console.timeEnd('loadDelayed execution time: ');
  }

  public async initialized(): Promise<void> {
    return this.initializedPromise;
  }
}

export default HLX;
