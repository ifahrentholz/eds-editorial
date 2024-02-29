import { getMetadata } from '../utils/getMetadata';
import { undefinedOnEmpty } from '../utils/undefinedOnEmpty';

/*
 * This function sets the language of the document
 */
export function setDocLanguage() {
  const lang = getMetadata('language');
  document.documentElement.lang = undefinedOnEmpty(lang) || 'en';
}
