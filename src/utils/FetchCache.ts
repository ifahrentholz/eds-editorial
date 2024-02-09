export class FetchCache {
  private cache = new Map();

  public set = (url: string, result: any): void => {
    if (!this.has(url)) {
      this.cache.set(url, result);
    }
  };

  public get = (url: string): any => {
    if (this.has(url)) {
      return this.cache.get(url);
    }

    throw new Error(`FetchCache: Cache value with url ${url} does not exists.`);
  };

  public has = (url: string): boolean => {
    return this.cache.has(url);
  };
}

export default new FetchCache();
