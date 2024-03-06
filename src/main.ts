// const LCP_BLOCKS: string[] = []; // add your LCP blocks to the list

import './components/sidebar/sidebar.ts';
import './components/header.ts';
import './components/icon/icon.ts';
import { BlockService } from './services/block.service.ts';
import { SectionService } from './services/section.service.ts';
import { MainService } from './services/main.service.ts';
import HLX from './app/index.ts';

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
  loadEager: () => {
    console.log('loadEager');
  },
  afterLoadEager: () => {
    console.log('afterLoadEager');
  },
  beforeLoadLazy: () => {
    console.log('beforeLoadLazy');
  },
  loadLazy: () => {
    console.log('loadLazy');
  },
  afterLoadLazy: () => {
    console.log('afterLoadLazy');
  },
  beforeLoadDelayed: () => {
    console.log('beforeLoadDelayed');
  },
  loadDelayed: () => {
    console.log('loadDelayed');
  },
  afterLoadDelayed: () => {
    console.log('afterLoadDelayed');
  },
});

console.timeEnd('APP execution time: ');
(async function () {
  try {
    await App.initialized();

    const blockService = new BlockService();
    const sectionService = new SectionService(blockService);
    const main = new MainService(sectionService, blockService);
    await main.init();
  } catch (error) {}
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
