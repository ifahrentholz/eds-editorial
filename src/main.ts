import './components/icon/icon.ts';
import { BlockService } from './services/block.service.ts';
import { SectionService } from './services/section.service.ts';
import { MainService } from './services/main.service.ts';
import HLX from './app/index.ts';

//console.time('APP execution time: ');

// export const App = new HLX({
//   beforeInit: () => {
//     console.log('beforeInit');
//   },
//   afterInit: () => {
//     console.log('afterInit');
//   },
//   beforeLoadEager: () => {
//     console.log('beforeLoadEager');
//   },
//   loadEager: () => {
//     console.log('loadEager');
//   },
//   afterLoadEager: () => {
//     console.log('afterLoadEager');
//   },
//   beforeLoadLazy: () => {
//     console.log('beforeLoadLazy');
//   },
//   loadLazy: () => {
//     console.log('loadLazy');
//   },
//   afterLoadLazy: () => {
//     console.log('afterLoadLazy');
//   },
//   beforeLoadDelayed: () => {
//     console.log('beforeLoadDelayed');
//   },
//   loadDelayed: () => {
//     console.log('loadDelayed');
//   },
//   afterLoadDelayed: () => {
//     console.log('afterLoadDelayed');
//   },
// });

// export const App = HLX; // init -> loadEager (3s)

HLX.initialized().then(() => {
  console.log('INITIALIZED');
});

HLX.loadDelayed().then(() => {
  console.log('LOAD DELAYED 2');
});

HLX.loadDelayed().then(() => {
  console.log('LOAD DELAYED 3');
});

HLX.loadDelayed().then(() => {
  console.log('LOAD DELAYED 1');
});

HLX.beforeLoadEager().then(() => {
  console.log('BEFORE LOAD EAGER');
});

HLX.loadEager().then(() => {
  console.log('LOAD EAGER');
});

HLX.loadLazy().then(() => {
  console.log('LOAD LAZY');
});

HLX.beforeLoadDelayed().then(() => {
  console.log('BEFORE LOAD DELAYED');
});

HLX.beforeLoadLazy().then(() => {
  console.log('BEFORE LOAD LAZY');
});

// eager, lazy, delayed

//console.timeEnd('HLX execution time: ');
(async function () {
  try {
    //await App.initialized();

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
