import { fetchCache } from './FetchCache.ts';

const fetchData = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${window.hlx.codeBasePath}${decoratedEndpoint}`;
  const cache = fetchCache.get(url);

  if (cache !== null) {
    return  cache;
  }

  const response = await fetch(url, init);
  fetchCache.set(url, response);

  return response;
};

export const fetchText = async (endpoint: string, init?: RequestInit): Promise<string> => {
  return await (await fetchData(endpoint, init)).text();
};

export const fetchJson = async <T>(endpoint: string, init?: RequestInit): Promise<T> => {
  return await (await fetchData(endpoint, init)).json();
};
