export declare class FetchCache {
    private cache;
    set: (url: string, result: any) => void;
    get: (url: string) => Response | null;
    recordExists: (url: string) => boolean;
}
declare const _default: FetchCache;
export default _default;
