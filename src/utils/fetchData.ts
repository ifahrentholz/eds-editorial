export const fetchData = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  // TODO: Add Cache validation, or expiration otherwise its the browser default setting
  // Maybe start a Promise without waiting that Makes a fetch and compares the outcome
  // but the cached value is returned before the validation so there is no delay
  // By different the new response replaces the old one

  const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${window.hlx.codeBasePath}${decoratedEndpoint}`;

  const request = new Request(url, init);
  const cache = await caches.open('fetch-cache');
  const cachedResponse = await cache.match(request);

  if (cachedResponse) return cachedResponse;

  const response = await fetch(request);

  if (response.ok) {
    await cache.put(request, response.clone());
  }

  return response;
};
