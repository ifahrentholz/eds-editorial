/**
 * Represents the constructed Element.
 *
 * @interface ConstructedElement
 * @property {string} dataLibraryId - The data library id generated by the Sidekick Library Plugin.
 * @property {string} innerHTML - The innerHTML of a provided element.
 * @property {number} href - The href of a provided anchor element.
 */
export type ConstructedElement = {
    dataLibraryId?: string;
    innerHTML: string;
    href?: string;
};
/**
 * Extracts the innerHTML, the href attribute (if defined) and
 * the data-library-id attribute (if the Sidekick Library Plugin is active) of a given HTML element.
 *
 * @param {HTMLElement | HTMLAnchorElement | null} element - The original HTMLElement or HTMLAnchorElement.
 * @returns {ConstructedElement} - A constructed element object.
 *
 * @example
 * const button = extractSidekickLibraryId(document.querySelector('a'));
 * <a
 *  href="${button.href}"
 *  data-library-id="${ifDefined(button.id)}"
 *  contenteditable="${ifDefined(button.id ? true : undefined)}">
 *    ${button.text}
 * </a>
 *
 * @remarks
 * The data-library-id is generated by the Sidekick Library Plugin
 * and is necessary to copy edited block content from the Sidekick Library.
 */
export declare const extractSidekickLibraryId: (element?: HTMLElement | HTMLAnchorElement | null) => ConstructedElement;
