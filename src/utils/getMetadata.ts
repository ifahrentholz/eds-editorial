/**
 * Retrieves the content of a specified metadata tag from the document head.
 *
 * @param {string} name - The name or property attribute value of the metadata tag.
 * @param {Document} [doc=document] - The document to search for the metadata tag (default is the current document).
 * @returns {string} - The content of the metadata tag, if found; otherwise, an empty string.
 *
 @example
* // Example 1:
* const metaContent1 = getMetadata('description');
* console.log(metaContent1);
* // Output: 'This is a sample description.'
*
* // Example 2:
* const metaContent2 = getMetadata('og:title', anotherDocument);
* console.log(metaContent2);
* // Output: 'Open Graph Title'
*/
export function getMetadata(name: string, doc: Document = document): string {
  const attr: 'property' | 'name' = name && name.includes(':') ? 'property' : 'name';
  const metaTags: HTMLMetaElement[] =
    ([...doc.head.querySelectorAll(`meta[${attr}="${name}"]`)] as HTMLMetaElement[]) || [];
  const meta: string = metaTags.map((metaElement: HTMLMetaElement) => metaElement.content).join(', ');
  return meta.length ? meta : '';
}
