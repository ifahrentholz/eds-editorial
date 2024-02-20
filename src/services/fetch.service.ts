class FetchService {
  private responseMap = new Map<string, Promise<Response>>();

  private async fetchData(endpoint: string, init?: RequestInit): Promise<Response> {
    const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${window.hlx.codeBasePath}${decoratedEndpoint}`;

    if (this.responseMap.has(url)) {
      return await this.responseMap.get(url)!;
    }

    const fetchPromise = fetch(url, init);
    this.responseMap.set(url, fetchPromise);

    try {
      const response = await fetchPromise;
      if (response.ok) {
        return response;
      }
      //TODO: Error logging
      return response;
    } finally {
      this.responseMap.delete(url);
    }
  }

  public async fetchJson<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await this.fetchData(endpoint, init);
    return await response.clone().json();
  }

  public async fetchText(endpoint: string, init?: RequestInit): Promise<string> {
    const response = await this.fetchData(endpoint, init);
    return response.clone().text();
  }
}

export default new FetchService();
