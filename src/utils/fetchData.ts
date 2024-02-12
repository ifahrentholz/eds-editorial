export const fetchData = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  const decoratedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${window.hlx.codeBasePath}${decoratedEndpoint}`;

  const request = new Request(url,init);
  const cache = await caches.open('fetch-cache');
  const cachedResponse = await cache.match(request);

  if (cachedResponse) return cachedResponse;

  const response = await fetch(request);

  if (response.ok) {
    await cache.put(request,response);
  }

  return response;
};
