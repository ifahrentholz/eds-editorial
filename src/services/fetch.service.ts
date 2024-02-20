class FetchService {
  private responseMap = new Map<string, Promise<Response>>();

  private async fetchData(endpoint: string, init?: RequestInit): Promise<Response> {
    const url = this.getUrl(endpoint);

    if (this.responseMap.has(url)) return this.responseMap.get(url)!;

    const fetchPromise = fetch(url, init);

    this.responseMap.set(url, fetchPromise);

    const response = await fetchPromise;

    if (response.ok) return response;

    console.error(response.statusText);
    return response;
  }

  public async fetchJson<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await this.fetchData(endpoint, init);
    return await response.clone().json();
  }

  public async fetchText(endpoint: string, init?: RequestInit): Promise<string> {
    const response = await this.fetchData(endpoint, init);
    return response.clone().text();
  }

  private getUrl(endpoint: string) {
    const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${window.hlx.codeBasePath}${decoratedEndpoint}`;
  }
}

export default new FetchService();
