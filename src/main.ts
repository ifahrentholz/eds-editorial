// const LCP_BLOCKS: string[] = []; // add your LCP blocks to the list

import './components/sidebar/sidebar.ts';
import './components/header.ts';
import './components/icon/icon.ts';
import './services/fetch.service.ts';
import { BlockService } from './services/block.service.ts';
import { SectionService } from './services/section.service.ts';
import { MainService } from './services/main.service.ts';

// function preloadLcpImageCandidate() {
//   const lcpCandidate = document.querySelector('main img') as HTMLImageElement | null;
//   const linkTag = document.createElement('link');
//   linkTag.rel = 'preload';
//   linkTag.as = 'image';
//   linkTag.href = lcpCandidate?.src || '';
//   // linkTag.type = getLinkTypeFromImageExt(lcpCandidate?.src);
//   document.head.appendChild(linkTag);
// }

(async function () {
  // preloadLcpImageCandidate();
  const blockService = new BlockService();
  const sectionService = new SectionService(blockService);
  const main = new MainService(sectionService, blockService);
  await main.init();
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
