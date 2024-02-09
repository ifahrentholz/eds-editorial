// const LCP_BLOCKS: string[] = []; // add your LCP blocks to the list

import './components/sidebar/sidebar.ts';
import './components/header.ts';
import { BlockService } from './services/block.service.ts';
import { SectionService } from './services/section.service.ts';
import { MainService } from './services/main.service.ts';

(async function () {
  preloadLcpImageCandidate();
  const blockService = new BlockService();
  const sectionService = new SectionService(blockService);
  const main = new MainService(sectionService, blockService);
  await main.init();
})();

function preloadLcpImageCandidate() {
  const lcpCandidate = document.querySelector('main img') as HTMLImageElement | null;
  const linkTag = document.createElement('link');
  linkTag.rel = 'preload';
  linkTag.as = 'image';
  linkTag.href = lcpCandidate?.src || '';
  // linkTag.type = getLinkTypeFromImageExt(lcpCandidate?.src);
  document.head.appendChild(linkTag);

  // <link rel="preload" fetchpriority="high" as="image" href="/path/to/hero-image.webp" type="image/webp">
}

// function getLinkTypeFromImageExt(src: string | undefined) {
//   if (src) {
//     const ext = src.split('.').pop();
//     if (ext === 'webp') {
//       return 'image/webp';
//     }
//     if (ext === 'jpg' || ext === 'jpeg') {
//       return 'image/jpeg';
//     }
//     if (ext === 'png') {
//       return 'image/png';
//     }
//   }
//   return '';
// }

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
  }
}
