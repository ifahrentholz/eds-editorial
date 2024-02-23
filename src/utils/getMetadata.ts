/**
 * Retrieves the content of a specified metadata tag from the document head.
 *
 * @param {string} name - The name or property attribute value of the metadata tag.
 * @param {Document} [doc=document] - The document to search for the metadata tag (default is the current document).
 * @returns {string} - The content of the metadata tag, if found; otherwise, an empty string.
 */
export function getMetadata(name: string, doc: Document = document): string {
  const attr: 'property' | 'name' = name && name.includes(':') ? 'property' : 'name';
  const metaTags: HTMLMetaElement[] =
    ([...doc.head.querySelectorAll(`meta[${attr}="${name}"]`)] as HTMLMetaElement[]) || [];
  const meta: string = metaTags.map((metaElement: HTMLMetaElement) => metaElement.content).join(', ');
  return meta.length ? meta : '';
}
