import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';
import { typographyTemplate } from './typography.js';
import { imageTemplate } from './image.js';
import { buttonsTemplate } from './buttons.js';
import { colorsTemplate } from './colors.js';
import { featuresTemplate } from './features.js';
import { footnoteTemplate } from './footnote.js';
import { formTemplate } from './form.js';
import { gridTemplate } from './grid.js';
import { iconsTemplate } from './icons.js';
import { linkTemplate } from './link.js';
import { mediaTemplate } from './media.js';
import { postsTemplate } from './posts.js';
import { tableTemplate } from './table.js';
import { bannersTemplate } from './banners.js';
import { navTemplate } from './nav.js';

const appTemplate = () => {
  return html` ${footnoteTemplate()}`;
};

const app = document.getElementById('app');

render(appTemplate(), app);
