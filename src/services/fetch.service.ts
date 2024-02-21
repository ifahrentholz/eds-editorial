import { RuntimeCache } from '../utils/RuntimeCache';

export interface FetchServiceCacheOptions {
  cacheType?: 'runtime'; // 'local' | 'session' | "request" can be added later
}

export interface FetchServiceOptions {
  fetchOptions?: RequestInit;
  cacheOptions?: FetchServiceCacheOptions;
}

class FetchService {
  private requestPipeline: Map<string, Promise<Response>> = new Map();

  private runtimeCache = new RuntimeCache();

  public async fetchJson<T>(url: string, options: FetchServiceOptions = {}): Promise<T> {
    const { cacheOptions } = options;

    const cachedData = this.getCachedData<T>(url, cacheOptions);
    if (cachedData !== null) return cachedData;

    const pipelinedRequest = this.requestPipeline.get(url);
    if (pipelinedRequest !== undefined) return this.getResponseJSON(await pipelinedRequest);

    const request = fetch(url, options.fetchOptions);
    this.requestPipeline.set(url, request);

    const response = await request;
    this.requestPipeline.delete(url);
    const responseJson = await this.getResponseJSON<T>(response);

    this.setCachedData(url, responseJson, cacheOptions);
    return responseJson;
  }

  public async fetchText(url: string, options: FetchServiceOptions = {}): Promise<string> {
    const { cacheOptions } = options;

    const cachedData = this.getCachedData<string>(url, cacheOptions);
    if (cachedData !== null) return cachedData;

    const pipelinedRequest = this.requestPipeline.get(url);
    if (pipelinedRequest !== undefined) return this.getResponseText(await pipelinedRequest);

    const request = fetch(url, options.fetchOptions);
    this.requestPipeline.set(url, request);

    const response = await request;
    this.requestPipeline.delete(url);
    const responseText = await this.getResponseText(response);

    this.setCachedData(url, responseText, cacheOptions);
    return responseText;
  }

  private async getResponseJSON<T>(response: Response): Promise<T> {
    const responseClone = response.clone();
    const responseJson = await responseClone.json();
    return responseJson;
  }

  private async getResponseText(response: Response): Promise<string> {
    const responseClone = response.clone();
    const responseText = await responseClone.text();
    return responseText;
  }

  private getCachedData<T>(url: string, cacheOptions?: FetchServiceCacheOptions): T | null {
    if (cacheOptions?.cacheType === 'runtime') {
      return this.runtimeCache.get(url) ?? null;
    }
    return null;
  }

  private setCachedData<T>(url: string, data: T, cacheOptions?: FetchServiceCacheOptions): void {
    if (cacheOptions?.cacheType === 'runtime') {
      this.runtimeCache.set(url, data);
    }
  }
}

export default new FetchService();
