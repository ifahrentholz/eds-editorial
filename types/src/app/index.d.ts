declare class HLX {
    private beforeEagerPromise;
    private eagerPromise;
    private beforeLazyPromise;
    private lazyPromise;
    private beforeDelayedPromise;
    private delayedPromise;
    private initializedPromise;
    constructor();
    private init;
    beforeLoadEager(): Promise<void>;
    loadEager(): Promise<void>;
    beforeLoadLazy(): Promise<void>;
    loadLazy(): Promise<void>;
    beforeLoadDelayed(): Promise<void>;
    loadDelayed(): Promise<void>;
    initialized(): Promise<void>;
}
declare const _default: HLX;
export default _default;
