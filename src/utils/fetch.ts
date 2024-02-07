export const fetchData = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  return await fetch(`${window.hlx.codeBasePath}${decoratedEndpoint}`, init);
};

export const fetchText = async (endpoint: string, init?: RequestInit ): Promise<string> => {
  return await (await fetchData(endpoint, init)).text();
};

export const fetchJson = async <T>(endpoint: string, init?: RequestInit): Promise<T> => {
  return await (await fetchData(endpoint, init)).json();
};
