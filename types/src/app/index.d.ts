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
declare class HLX {
    private beforeInit;
    private afterInit;
    private beforeLoadEager;
    private loadEager;
    private afterLoadEager;
    private beforeLoadLazy;
    private loadLazy;
    private afterLoadLazy;
    private beforeLoadDelayed;
    private loadDelayed;
    private afterLoadDelayed;
    constructor({ beforeInit, afterInit, beforeLoadEager, loadEager, afterLoadEager, beforeLoadLazy, loadLazy, afterLoadLazy, beforeLoadDelayed, loadDelayed, afterLoadDelayed, }?: LifecycleCallbacks);
    private init;
    private _loadEager;
    private _loadLazy;
    private _loadDelayed;
}
export default HLX;
