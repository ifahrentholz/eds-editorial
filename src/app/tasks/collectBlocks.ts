import { BlockMapping } from '../app.types';

export function collectBlocks(section: HTMLElement): BlockMapping[] {
  const blockMap: BlockMapping[] = [];
  const blocksElements = section.querySelectorAll<HTMLDivElement>('[data-block-name]');

  blocksElements.forEach((block: HTMLDivElement) => {
    blockMap.push({
      name: block.dataset['blockName'] as string,
      element: block,
    });
  });

  return blockMap;
}
