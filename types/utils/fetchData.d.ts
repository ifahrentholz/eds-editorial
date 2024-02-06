interface FetchDataOptions {
    endpoint: string;
    getJson?: boolean;
    init?: RequestInit | undefined;
}
export declare const fetchData: <T>(options: FetchDataOptions) => Promise<T>;
export {};
