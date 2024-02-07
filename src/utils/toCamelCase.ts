import { toClassName } from './toClassName';

/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
export function toCamelCase(name: string) {
  return toClassName(name).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
