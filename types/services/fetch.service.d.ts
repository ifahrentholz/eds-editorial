declare class FetchService {
    private responseMap;
    private fetchData;
    fetchJson<T>(endpoint: string, init?: RequestInit): Promise<T>;
    fetchText(endpoint: string, init?: RequestInit): Promise<string>;
    private getUrl;
}
declare const _default: FetchService;
export default _default;
