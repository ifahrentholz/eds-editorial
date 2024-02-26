import { isSidekickLibraryActive } from './extractSidekickLibraryId';

/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the ancestor origin is returned.
 * @returns {String} The true origin
 */
export function getOrigin(): string {
  return isSidekickLibraryActive ? window.parent.location.origin : window.location.origin;
}

/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the ancestor origin + the path query param is returned.
 * @returns {String} The href of the current page or the href of the block running in the library
 */
export function getHref(): string {
  if (!isSidekickLibraryActive) return window.location.href;

  const { location: parentLocation } = window.parent;
  const urlParams = new URLSearchParams(parentLocation.search);
  return `${parentLocation.origin}${urlParams.get('path')}`;
}

/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the query param is returned.
 * @returns {String} The query param of the current page or the query param of the block running in the library
 */
export function getLocation(): Location {
  return isSidekickLibraryActive ? window.parent.location : window.location;
}
