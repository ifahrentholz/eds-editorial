import { collectBlocks } from './collectBlocks';
import { loadBlockModules } from './loadBlockModules';
import { loadBlockStyles } from './loadBlockStyles';
import { config } from '../../../config';
import { showSection } from './showSection';
import { LcpCandidate } from '../app.types';

export async function waitForLCP() {
  const firstSection: HTMLElement | null = document.querySelector('.section');
  const { lcpBlocks } = config;

  if (firstSection) {
    const blocks = collectBlocks(firstSection);
    const blockPromises = blocks.map(async (block) => {
      const hasLCPBlock = lcpBlocks?.includes(block.name);
      if (hasLCPBlock) await Promise.all([loadBlockModules(block), loadBlockStyles(block)]);
    });

    await Promise.all(blockPromises);
    showSection(firstSection);
  }

  // @ts-ignore
  document.body.style.display = null;
  const lcpCandidate = document.querySelector<LcpCandidate>('main img');

  await new Promise<void>((resolve) => {
    if (lcpCandidate && !lcpCandidate.complete) {
      lcpCandidate.setAttribute('loading', 'eager');
      lcpCandidate.setAttribute('fetchpriority', 'high');
      lcpCandidate.addEventListener('load', () => resolve());
      lcpCandidate.addEventListener('error', () => resolve());
    } else {
      resolve();
    }
  });
}
