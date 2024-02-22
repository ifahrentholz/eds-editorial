/**
 * Represents the arguments for creating an optimized picture element.
 *
 * @interface CreateOptimizedPictureArgs
 * @property {string} src - The URL of the image.
 * @property {string} alt - The alternate text for the image.
 * @property {string} width - The width of the image in CSS pixels.
 * @property {string} height - The height of the image in CSS pixels.
 * @property {boolean} [eager] - Whether to load the image immediately.
 * @property {Array<Record<string, string>>} [breakpoints] - The breakpoints for responsive images.
 */
interface CreateOptimizedPictureArgs {
    src: string;
    alt: string;
    width: string;
    height: string;
    eager?: boolean;
    breakpoints?: Array<Record<string, string>>;
}
/**
 * Creates an optimized HTML picture element with responsive image sources and a fallback image.
 *
 * @param {CreateOptimizedPictureArgs} createOptimizedPictureArgs - The arguments for creating the picture element.
 * @returns {HTMLPictureElement} - The created HTML picture element.
 *
 * @example
 * const args = {
 *   src: 'image.jpg',
 *   alt: 'Example Image',
 *   width: '100%',
 *   height: 'auto',
 *   eager: true,
 *   breakpoints: [
 *     { media: '(min-width: 600px)', width: '800' },
 *     { media: '(min-width: 1200px)', width: '1600' }
 *   ]
 * };
 * const pictureElement = createOptimizedPicture(args);
 * document.body.appendChild(pictureElement);
 *
 * @remarks
 * The last breakpoint provided in the `breakpoints` array is used as the source for the fallback image.
 */
export declare function createOptimizedPicture(createOptimizedPictureArgs: CreateOptimizedPictureArgs): HTMLPictureElement;
export {};
