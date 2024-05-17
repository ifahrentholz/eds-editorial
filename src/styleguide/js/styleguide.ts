import { render, html } from 'lit';
import { previewTemplate } from '../components/previewTemplate.js';
import { navTemplate } from '../components/nav.ts';

const appTemplate = () => {
  return html`
    ${navTemplate()} <a id="button">${previewTemplate('Buttons', 'preview.html?template=buttons')}</a>
    <a id="colors">${previewTemplate('Colors', 'preview.html?template=colors')}</a>
    <a id="grid">${previewTemplate('Grid', 'preview.html?template=grid')}</a>
    <a id="icons">${previewTemplate('Icons', 'preview.html?template=icons')}</a>
    <a id="typhography">${previewTemplate('Typography', 'preview.html?template=typography')}</a>
    <a id="image">${previewTemplate('Image', 'preview.html?template=image')}</a>
    <a id="link"> ${previewTemplate('Link', 'preview.html?template=link')}</a>
    <a id="media">${previewTemplate('Media', 'preview.html?template=media')}</a>
    <a id="footnote">${previewTemplate('Footnote', 'preview.html?template=footnote')}</a>
    <a id="banner">${previewTemplate('Banners', 'preview.html?template=banners')}</a>
    <a id="features">${previewTemplate('Features', 'preview.html?template=features')}</a>
    <a id="posts">${previewTemplate('Posts', 'preview.html?template=posts')}</a>
    <a id="form">${previewTemplate('Form', 'preview.html?template=form')}</a>
    <a id="table">${previewTemplate('Table', 'preview.html?template=table')}</a>
  `;
};

const app = document.getElementById('app')!;

render(appTemplate(), app);
