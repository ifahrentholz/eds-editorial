export function getMetadata(name: string, doc = document) {
  const attr = name && name.includes(':') ? 'property' : 'name';
  const metaTags: HTMLMetaElement[] =
    ([...doc.head.querySelectorAll(`meta[${attr}="${name}"]`)] as HTMLMetaElement[]) || [];
  const meta = metaTags
    .map((m) => {
      return m.content;
    })
    .join(', ');
  return meta.length ? meta : '';
}
