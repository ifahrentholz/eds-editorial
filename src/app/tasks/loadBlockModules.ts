import { DebuggerService } from '@kluntje/services';
import { BlockMapping } from '../app.types';
import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';

export async function loadBlockModules(block: BlockMapping) {
  const status = block.element.dataset.blockStatus ?? 'unloaded';

  if (status === 'unloaded') {
    block.element.dataset.blockStatus = 'loading';

    try {
      const { href } = getUrlForEndpoint(`dist/${block.name}/${block.name}.js`);
      const blockModule = await import(href);

      if (blockModule.default) {
        await blockModule.default(block.element);
      }

      block.element.dataset.blockStatus = 'loaded';
    } catch (error) {
      block.element.dataset.blockStatus = 'error';
      DebuggerService.error('laodBloackModules:', error);
    }
  }
}
