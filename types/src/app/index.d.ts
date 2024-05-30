declare class HLX {
    private beforeEagerCallbacks;
    private loadEagerCallbacks;
    private beforeLoadLazyCallbacks;
    private loadLazyCallbacks;
    private beforeLoadDelayedCallbacks;
    private loadDelayedCallbacks;
    private initializedCallbacks;
    private beforeEagerPromise?;
    private eagerPromise?;
    private beforeLazyPromise?;
    private lazyPromise?;
    private beforeDelayedPromise?;
    private delayedPromise?;
    private initializedPromise?;
    private get beforeEager();
    private get loadEager();
    private get beforeLoadLazy();
    private get loadLazy();
    private get beforeLoadDelayed();
    private get loadDelayed();
    private get initialized();
    addBeforeEagerTask(cb: () => Promise<void>): void;
    addLoadEagerTask(cb: () => Promise<void>): void;
    addBeforeLoadLazyTask(cb: () => Promise<void>): void;
    addLoadLazyTask(cb: () => Promise<void>): void;
    addBeforeLoadDelayedTask(cb: () => Promise<void>): void;
    addLoadDelayedTask(cb: () => Promise<void>): void;
    addInitializedTask(cb: () => Promise<void>): void;
    init(): Promise<void>;
    private beforeLoadEager;
    private loadEagerPromise;
    private beforeLoadLazyPromise;
    private loadLazyPromise;
    private beforeLoadDelayedPromise;
    private loadDelayedPromise;
    private getInitializedPromise;
}
declare const _default: HLX;
export default _default;
