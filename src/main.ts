// const LCP_BLOCKS: string[] = []; // add your LCP blocks to the list

import './components/sidebar/sidebar.ts';
import './components/header.ts';
import './components/icon/icon.ts';
import { BlockService } from './services/block.service.ts';
import { SectionService } from './services/section.service.ts';
import { MainService } from './services/main.service.ts';
import HLX from './app/index.ts';

(async function () {
  const blockService = new BlockService();
  const sectionService = new SectionService(blockService);
  const main = new MainService(sectionService, blockService);
  await main.init();
})();

console.time('APP execution time: ');

export const App = new HLX({
  beforeInit: () => {
    console.log('beforeInit');
  },
  afterInit: () => {
    console.log('afterInit');
  },
  beforeLoadEager: () => {
    console.log('beforeLoadEager');
  },
  afterLoadEager: () => {
    console.log('afterLoadEager');
  },
  beforeLoadLazy: () => {
    console.log('beforeLoadLazy');
  },
  afterLoadLazy: () => {
    console.log('afterLoadLazy');
  },
  beforeLoadDelayed: () => {
    console.log('beforeLoadDelayed');
  },
  afterLoadDelayed: () => {
    console.log('afterLoadDelayed');
  },
});

console.timeEnd('APP execution time: ');

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
  }
}
