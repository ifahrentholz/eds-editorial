export class FetchCache {
  private cache = new Map();

  public set = (url: string, result: any): void => {
    if (!this.recordExists(url)) {
      this.cache.set(
        url,
        result,
      );
    }
  };

  public get = (url: string): Response | null  => {
    if (this.recordExists(url)) {
      return this.cache.get(url);
    }

    return null;
  };

  public recordExists = (url: string): boolean => {
    return this.cache.has(url);
  };
}

export default new FetchCache();
