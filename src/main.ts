import './components/icon/icon.ts';
import HLX from './app/index.ts';

HLX.addBeforeEagerTask(() => {
  const main = document.getElementsByTagName('main')[0];
  main.setAttribute('id', 'main');
  return Promise.resolve();
});

HLX.init();

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
  }
}
