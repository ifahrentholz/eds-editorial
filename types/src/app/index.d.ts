type LifecycleCallback = () => void | Promise<void>;
interface LifecycleCallbacks {
    beforeInit?: LifecycleCallback;
    afterInit?: LifecycleCallback;
    beforeLoadEager?: LifecycleCallback;
    loadEager?: LifecycleCallback;
    afterLoadEager?: LifecycleCallback;
    beforeLoadLazy?: LifecycleCallback;
    afterLoadLazy?: LifecycleCallback;
    beforeLoadDelayed?: LifecycleCallback;
    afterLoadDelayed?: LifecycleCallback;
}
declare class HLX {
    private beforeInit;
    private afterInit;
    private beforeLoadEager;
    private loadEager;
    private afterLoadEager;
    private beforeLoadLazy;
    private afterLoadLazy;
    private beforeLoadDelayed;
    private afterLoadDelayed;
    constructor({ beforeInit, afterInit, beforeLoadEager, loadEager, afterLoadEager, beforeLoadLazy, afterLoadLazy, beforeLoadDelayed, afterLoadDelayed, }?: LifecycleCallbacks);
    private init;
    private _loadEager;
    private loadLazy;
    private loadDelayed;
}
export default HLX;
