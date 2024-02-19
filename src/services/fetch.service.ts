class FetchService {
  private responseMap = new Map<string, any>();
  private responsePromiseMap = new Map<string, Promise<Response>>();

  private async fetchData(endpoint: string, init?: RequestInit): Promise<Response> {
    const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${window.hlx.codeBasePath}${decoratedEndpoint}`;

    if (this.responseMap.has(url)) return this.responseMap.get(url)!;

    const response = await this.fetch(url, init);

    if (response.ok) {
      this.responseMap.set(url, response.clone());
    }

    return response;
  }

  public async fetchJson<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await this.fetchData(endpoint, init);
    return await response.json();
  }

  public async fetchText(endpoint: string, init?: RequestInit): Promise<string> {
    const response = await this.fetchData(endpoint, init);
    return response.text();
  }

  private fetch(endpoint: string, init?: RequestInit): Promise<Response> {
    if (this.responsePromiseMap.has(endpoint)) return this.responsePromiseMap.get(endpoint)!;

    const request = new Request(endpoint, init);
    const responsePromise = fetch(request);

    this.responsePromiseMap.set(endpoint, responsePromise);

    return this.responsePromiseMap.get(endpoint)!;
  }
}

export default new FetchService();
