import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';
import { previewTemplate } from './previewTemplate.js';
import { navTemplate } from './nav.js';

const appTemplate = () => {
  return html`
    ${navTemplate()} ${previewTemplate('Colors', 'preview.html?template=colors')}
    ${previewTemplate('Grid', 'preview.html?template=grid')} ${previewTemplate('Table', 'preview.html?template=table')}
  `;
};

const app = document.getElementById('app');

render(appTemplate(), app);
