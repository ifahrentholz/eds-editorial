interface FetchDataOptions {
  endpoint: string;
  getJson?: boolean;
  init?: RequestInit | undefined;
}

export const fetchData = async <T>(options: FetchDataOptions): Promise<T> => {
  const { endpoint, getJson = false, init } = options;
  const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  const response = await fetch(`${window.hlx.codeBasePath}${decoratedEndpoint}`, init);

  if (getJson) {
    return await response.json();
  }
  return (await response.text()) as unknown as T;
};
