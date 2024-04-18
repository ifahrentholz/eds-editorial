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

const navContainer = document.getElementById('nav-container');
if (navContainer) {
  render(navTemplate(), navContainer);
}

const buttonsContainer = document.getElementById('buttons-container');
if (buttonsContainer) {
  render(buttonsTemplate(), buttonsContainer);
}

const colorsContainer = document.getElementById('colors-container');
if (colorsContainer) {
  render(colorsTemplate(), colorsContainer);
}

const gridContainer = document.getElementById('grid-container');
if (gridContainer) {
  render(gridTemplate(), gridContainer);
}

const iconsContainer = document.getElementById('icons-container');
if (iconsContainer) {
  render(iconsTemplate(), iconsContainer);
}

const typographyContainer = document.getElementById('typography-container');
if (typographyContainer) {
  render(typographyTemplate(), typographyContainer);
}

const imageContainer = document.getElementById('image-container');
if (imageContainer) {
  render(imageTemplate(), imageContainer);
}

const linkContainer = document.getElementById('link-container');
if (linkContainer) {
  render(linkTemplate(), linkContainer);
}

const mediaContainer = document.getElementById('media-container');
if (mediaContainer) {
  render(mediaTemplate(), mediaContainer);
}

const footnoteContainer = document.getElementById('footnote-container');
if (footnoteContainer) {
  render(footnoteTemplate(), footnoteContainer);
}

const bannersContainer = document.getElementById('banners-container');
if (bannersContainer) {
  render(bannersTemplate(), bannersContainer);
}

const featuresContainer = document.getElementById('features-container');
if (featuresContainer) {
  render(featuresTemplate(), featuresContainer);
}

const postsContainer = document.getElementById('posts-container');
if (postsContainer) {
  render(postsTemplate(), postsContainer);
}

const formContainer = document.getElementById('form-container');
if (formContainer) {
  render(formTemplate(), formContainer);
}

const tableContainer = document.getElementById('table-container');
if (tableContainer) {
  render(tableTemplate(), tableContainer);
}
