interface CacheEntry {
  url: string;
  result: Response;
}

type Cache = CacheEntry[];

export class FetchCache {
  private static instance: FetchCache;
  private cache: Cache = [];

  constructor() {
    if (!!FetchCache.instance) {
      return FetchCache.instance;
    }

    FetchCache.instance = this;

    return this;
  }

  public set = (url: string, result: any): void => {
    if (!this.recordExists(url)) {
      this.cache.push({
        url,
        result,
      });
    }
  };

  public get = (url: string): Response | null => {
    const cacheRecord = this.cache.find((cacheEntry) => cacheEntry.url === url);

    if (cacheRecord) {
      return cacheRecord.result;
    }

    return null;
  };

  public recordExists = (url: string): boolean => {
    return !!this.get(url);
  };
}

export const fetchCache = new FetchCache();
