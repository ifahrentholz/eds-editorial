import { waitFor } from '@kluntje/js-utils/lib/dom-helpers';

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
    await this.beforeInit();
    this.setupHlxWindowObject();
    await this.loadEager();
    await this.loadLazy();
    await this.loadDelayed();
    await this.afterInit();
  }

  private setupHlxWindowObject() {
    // Implementation of setupHlxWindowObject
  }

  private async loadEager() {
    await this.beforeLoadEager();
    await waitFor(300);
    await this.afterLoadEager();
  }

  private async loadLazy() {
    await this.beforeLoadLazy();
    await waitFor(300);
    await this.afterLoadLazy();
  }

  private async loadDelayed() {
    await this.beforeLoadDelayed();
    await waitFor(300);
    await this.afterLoadDelayed();
  }
}

export default App;
