/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the ancestor origin + the path query param is returned.
 * @returns {String} The href of the current page or the href of the block running in the library
 *
 * @example
 * const url = new URL(src, getHref());
 *
 * @remarks
 * Needs to be used when the Sidekick Library Plugin is in use.
 */
export declare function getHref(): string;
