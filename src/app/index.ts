import { waitFor } from '@kluntje/js-utils/lib/dom-helpers';
import setupHlxObj from './setupHlxObj';
import { decorateBodyTag } from './decorateBodyTag';
import { setDocLanguage } from './setDocLanguage';

type LifecycleCallback = () => void | Promise<void>;

interface LifecycleCallbacks {
  beforeInit?: LifecycleCallback;
  afterInit?: LifecycleCallback;
  beforeLoadEager?: LifecycleCallback;
  afterLoadEager?: LifecycleCallback;
  beforeLoadLazy?: LifecycleCallback;
  afterLoadLazy?: LifecycleCallback;
  beforeLoadDelayed?: LifecycleCallback;
  afterLoadDelayed?: LifecycleCallback;
}

class App {
  private beforeInit: LifecycleCallback;
  private afterInit: LifecycleCallback;
  private beforeLoadEager: LifecycleCallback;
  private afterLoadEager: LifecycleCallback;
  private beforeLoadLazy: LifecycleCallback;
  private afterLoadLazy: LifecycleCallback;
  private beforeLoadDelayed: LifecycleCallback;
  private afterLoadDelayed: LifecycleCallback;

  constructor({
    beforeInit = () => {},
    afterInit = () => {},
    beforeLoadEager = () => {},
    afterLoadEager = () => {},
    beforeLoadLazy = () => {},
    afterLoadLazy = () => {},
    beforeLoadDelayed = () => {},
    afterLoadDelayed = () => {},
  }: LifecycleCallbacks = {}) {
    this.beforeInit = beforeInit;
    this.afterInit = afterInit;
    this.beforeLoadEager = beforeLoadEager;
    this.afterLoadEager = afterLoadEager;
    this.beforeLoadLazy = beforeLoadLazy;
    this.afterLoadLazy = afterLoadLazy;
    this.beforeLoadDelayed = beforeLoadDelayed;
    this.afterLoadDelayed = afterLoadDelayed;
    this.init();
  }

  private async init() {
    console.time('init execution time: ');
    await this.beforeInit();
    await this.loadEager();
    await this.loadLazy();
    await this.loadDelayed();
    await this.afterInit();
    console.timeEnd('init execution time: ');
  }

  private async loadEager() {
    console.time('loadEager execution time: ');
    await this.beforeLoadEager();
    setupHlxObj();
    decorateBodyTag();
    setDocLanguage();

    await waitFor(300);
    await this.afterLoadEager();
    console.timeEnd('loadEager execution time: ');
  }

  private async loadLazy() {
    console.time('loadLazy execution time: ');
    await this.beforeLoadLazy();
    await waitFor(300);
    await this.afterLoadLazy();
    console.timeEnd('loadLazy execution time: ');
  }

  private async loadDelayed() {
    console.time('loadDelayed execution time: ');
    await this.beforeLoadDelayed();
    await waitFor(300);
    await this.afterLoadDelayed();
    console.timeEnd('loadDelayed execution time: ');
  }
}

export default App;
