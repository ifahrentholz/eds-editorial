import { isSidekickLibraryActive } from 'Helpers/sidekick/isSidekickLibraryActive';

export function addInnerContainer() {
  const main = document.getElementById('main');
  if (!main) return;
  const children = main.innerHTML;
  main.innerHTML = `<div class="inner">${isSidekickLibraryActive() ? `` : `<header-component id="header"></header-component>`}${children}</div>`;
}
