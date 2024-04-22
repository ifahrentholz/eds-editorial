import { BlockMapping } from '../app.types';
import { loadCSS } from './loadCSS';

export async function loadBlockStyles(block: BlockMapping) {
  try {
    await loadCSS(`dist/${block.name}/${block.name}.css`);
  } catch (error) {
    //do nothing
  }
}
