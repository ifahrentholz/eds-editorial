import HLX from '../../app/index.ts';
import { addInnerContainer } from './innerContainer.ts';

HLX.addLoadEagerTask(() => {
  addInnerContainer();
  return Promise.resolve();
});
