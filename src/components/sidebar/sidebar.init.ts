import HLX from '../../app/index.ts';
import './sidebar.ts';
import { isSidekickLibraryActive } from 'Helpers/sidekick/isSidekickLibraryActive.ts';

const addSidebarContainer = () => {
  if (isSidekickLibraryActive()) return;

  const sidebarContainer = document.createElement('sidebar-component');
  sidebarContainer.setAttribute('id', 'sidebar');
  window.innerWidth <= 1280 ? sidebarContainer.classList.remove('active') : sidebarContainer.classList.add('active');
  window.innerWidth <= 1280 ? sidebarContainer.classList.remove('active') : sidebarContainer.classList.add('active');
  const main = document.getElementById('main');
  main?.after(sidebarContainer);
};

HLX.addLoadEagerTask(() => {
  addSidebarContainer();
  console.log('BEFORE EAGER SIDEBAR TS');
  return Promise.resolve();
});
