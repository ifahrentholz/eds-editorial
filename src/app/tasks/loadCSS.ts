import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';

export async function loadCSS(endpoint: string) {
  return new Promise((resolve, reject) => {
    const { href } = getUrlForEndpoint(endpoint);

    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.append(link);
    } else {
      resolve(true);
    }
  });
}
