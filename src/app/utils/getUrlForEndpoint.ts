export const getUrlForEndpoint = (endpoint: string): URL => {
  // TODO: do we really need to use window.hlx.codeBasePath here?
  const baseUrl = new URL(window.hlx.codeBasePath, window.location.origin);
  return new URL(endpoint, baseUrl);
};
