/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the query param is returned.
 * @returns {String} The query param of the current page or the query param of the block running in the library
 */
export declare function getLocation(): Location;
