declare class FetchService {
    private responseMap;
    private responsePromiseMap;
    private fetchData;
    fetchJson<T>(endpoint: string, init?: RequestInit): Promise<T>;
    fetchText(endpoint: string, init?: RequestInit): Promise<string>;
    private fetch;
}
declare const _default: FetchService;
export default _default;
