import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForLCP,
  loadBlocks,
  loadCSS,
} from './aem.js';

import '../../dist/header/header.js';
import '../../dist/sidebar/sidebar.js';

const LCP_BLOCKS = []; // add your LCP blocks to the list

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

function preloadLcpImageCandidate() {
  const lcpCandidate = document.querySelector('main img');
  const linkTag = document.createElement('link');
  linkTag.rel = 'preload';
  linkTag.as = 'image';
  linkTag.href = lcpCandidate?.src || '';
  // linkTag.type = getLinkTypeFromImageExt(lcpCandidate?.src);
  document.head.appendChild(linkTag);

  // <link rel="preload" fetchpriority="high" as="image" href="/path/to/hero-image.webp" type="image/webp">
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    // buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  main.setAttribute('id', 'main');
  addSidebarContainer(main);
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  addInnerContainer(main);
  decorateBlocks(main);
}

function addSidebarContainer(main) {
  const sidebarContainer = document.createElement('sidebar-component');
  sidebarContainer.setAttribute('id', 'sidebar');
  window.innerWidth <= 1280
    ? sidebarContainer.classList.add('inactive')
    : sidebarContainer.classList.remove('inactive');
  main.after(sidebarContainer);
}

function addInnerContainer(main) {
  const children = main.innerHTML;
  main.innerHTML = `<div class="inner"><header-component id="header"></header-component>${children}</div>`;
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  preloadLcpImageCandidate();
  document.documentElement.lang = 'en'; // TODO: set language dynamically
  decorateTemplateAndTheme(); // set template and theme classes to the body from meta tags in head
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main); // build auto blocks and call all the decorate functions for decorating the main (blocks and compoenents)
    document.body.classList.add('appear');
    await waitForLCP(LCP_BLOCKS);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      //loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main); // load js and css for all the blocks in the main

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  // loadHeader(doc.querySelector('header'));
  // loadFooter(doc.querySelector('footer'));

  // loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  // loadFonts();

  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();
