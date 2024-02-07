// const LCP_BLOCKS: string[] = []; // add your LCP blocks to the list

import './components/sidebar/sidebar.ts';
import './components/header.ts';
import { BlockService } from './services/block.service.ts';
import { SectionService } from './services/section.service.ts';
import { MainService } from './services/main.service.ts';

(async function () {
  const blockService = new BlockService();
  const sectionService = new SectionService(blockService);
  const main = new MainService(sectionService, blockService);
  await main.initialize();
})();

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
  }
}
