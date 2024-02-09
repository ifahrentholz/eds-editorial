import fetchCache from './FetchCache.ts';

const fetchData = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${window.hlx.codeBasePath}${decoratedEndpoint}`;

  return await fetch(url, init);
};

export const fetchText = async (endpoint: string, init?: RequestInit): Promise<string> => {
  if (fetchCache.has(endpoint)) return fetchCache.get(endpoint);
  const response = await fetchData(endpoint, init);
  const text = response.text();

  fetchCache.set(endpoint, text);

  return text;
};

export const fetchJson = async <T>(endpoint: string, init?: RequestInit): Promise<T> => {
  if (fetchCache.has(endpoint)) return fetchCache.get(endpoint);
  const response = await fetchData(endpoint, init);
  const json = response.json();

  fetchCache.set(endpoint, json);

  return json;
};
