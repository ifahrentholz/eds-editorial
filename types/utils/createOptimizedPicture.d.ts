/**
 * Returns a picture element with webp and fallbacks
 * @param {string} src The image URL
 * @param {string} [alt] The image alternative text
 * @param {boolean} [eager] Set loading attribute to eager
 * @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
 * @returns {Element} The picture element
 */
interface CreateOptimizedPictureArgs {
    src: string;
    alt: string;
    width: string;
    height: string;
    eager?: boolean;
    breakpoints?: Array<Record<string, string>>;
}
export declare function createOptimizedPicture(args: CreateOptimizedPictureArgs): HTMLPictureElement;
export {};
