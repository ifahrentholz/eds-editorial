import './components/sidebar/sidebar.ts';
import './components/header.ts';
/**
 * log RUM (Real User Usage)if part of the sample.
 * @param {string} checkpoint identifies the checkpoint in funnel
 * @param {Object} data additional data for RUM sample
 * @param {string} data.source DOM node that is the source of a checkpoint event,
 * identified by #id or .classname
 * @param {string} data.target subject of the checkpoint event,
 * for instance the href of a link, or a search term
 */
declare function sampleRUM(checkpoint: any, data?: {}): void;
/**
 * Setup block utils.
 */
declare function setup(): void;
/**
 * Sanitizes a string for use as class name.
 * @param {string} name The unsanitized string
 * @returns {string} The class name
 */
declare function toClassName(name: any): string;
/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
declare function toCamelCase(name: any): string;
/**
 * Extracts the config from a block.
 * @param {Element} block The block element
 * @returns {object} The block config
 */
declare function readBlockConfig(block: any): {};
/**
 * Loads a CSS file.
 * @param {string} href URL to the CSS file
 */
declare function loadCSS(href: any): Promise<unknown>;
/**
 * Loads a non module JS file.
 * @param {string} src URL to the JS file
 * @param {Object} attrs additional optional attributes
 */
declare function loadScript(src: any, attrs: any): Promise<unknown>;
/**
 * Retrieves the content of metadata tags.
 * @param {string} name The metadata name (or property)
 * @param {Document} doc Document object to query for metadata. Defaults to the window's document
 * @returns {string} The metadata value(s)
 */
declare function getMetadata(name: any, doc?: Document): string;
/**
 * Returns a picture element with webp and fallbacks
 * @param {string} src The image URL
 * @param {string} [alt] The image alternative text
 * @param {boolean} [eager] Set loading attribute to eager
 * @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
 * @returns {Element} The picture element
 */
declare function createOptimizedPicture(src: any, alt?: string, eager?: boolean, breakpoints?: ({
    media: string;
    width: string;
} | {
    width: string;
    media?: undefined;
})[]): HTMLPictureElement;
/**
 * Set template (page structure) and theme (page styles).
 */
declare function decorateTemplateAndTheme(): void;
/**
 * Decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */
declare function decorateButtons(element: any): void;
/**
 * Add <img> for icons, prefixed with codeBasePath and optional prefix.
 * @param {Element} [element] Element containing icons
 * @param {string} [prefix] prefix to be added to icon the src
 */
declare function decorateIcons(element: any, prefix?: string): void;
/**
 * Decorates all sections in a container element.
 * @param {Element} main The container element
 */
declare function decorateSections(main: any): void;
/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {object} Window placeholders object
 */
declare function fetchPlaceholders(prefix?: string): Promise<any>;
/**
 * Updates all section status in a container element.
 * @param {Element} main The container element
 */
declare function updateSectionsStatus(main: any): void;
/**
 * Builds a block DOM Element from a two dimensional array, string, or object
 * @param {string} blockName name of the block
 * @param {*} content two dimensional array or string or object of content
 */
declare function buildBlock(blockName: any, content: any): HTMLDivElement;
/**
 * Loads JS and CSS for a block.
 * @param {Element} block The block element
 */
declare function loadBlock(block: any): Promise<any>;
/**
 * Loads JS and CSS for all blocks in a container element.
 * @param {Element} main The container element
 */
declare function loadBlocks(main: any): Promise<void>;
/**
 * Decorates a block.
 * @param {Element} block The block element
 */
declare function decorateBlock(block: any): void;
/**
 * Decorates all blocks in a container element.
 * @param {Element} main The container element
 */
declare function decorateBlocks(main: any): void;
/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
declare function loadHeader(header: any): Promise<any>;
/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
declare function loadFooter(footer: any): Promise<any>;
/**
 * Load LCP block and/or wait for LCP in default content.
 * @param {Array} lcpBlocks Array of blocks
 */
declare function waitForLCP(lcpBlocks: any): Promise<void>;
export { buildBlock, createOptimizedPicture, decorateBlock, decorateBlocks, decorateButtons, decorateIcons, decorateSections, decorateTemplateAndTheme, fetchPlaceholders, getMetadata, loadBlock, loadBlocks, loadCSS, loadFooter, loadHeader, loadScript, readBlockConfig, sampleRUM, setup, toCamelCase, toClassName, updateSectionsStatus, waitForLCP, };
