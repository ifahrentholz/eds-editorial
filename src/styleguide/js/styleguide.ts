import { render, html } from 'lit';
import { previewTemplate } from '../components/previewTemplate.js';
import { navTemplate } from '../components/nav.ts';

const appTemplate = () => {
  return html`
    ${navTemplate()}
    <div id="button">${previewTemplate('Buttons', 'preview.html?template=buttons')}</div>
    <div id="colors">${previewTemplate('Colors', 'preview.html?template=colors')}</div>
    <div id="grid">${previewTemplate('Grid', 'preview.html?template=grid')}</div>
    <div id="icons">${previewTemplate('Icons', 'preview.html?template=icons')}</div>
    <div id="typhography">${previewTemplate('Typography', 'preview.html?template=typography')}</div>
    <div id="image">${previewTemplate('Image', 'preview.html?template=image')}</div>
    <div id="link">${previewTemplate('Link', 'preview.html?template=link')}</div>
    <div id="media">${previewTemplate('Media', 'preview.html?template=media')}</div>
    <div id="footnote">${previewTemplate('Footnote', 'preview.html?template=footnote')}</div>
    <div id="banner">${previewTemplate('Banners', 'preview.html?template=banners')}</div>
    <div id="features">${previewTemplate('Features', 'preview.html?template=features')}</div>
    <div id="posts">${previewTemplate('Posts', 'preview.html?template=posts')}</div>
    <div id="form">${previewTemplate('Form', 'preview.html?template=form')}</div>
    <div id="table">${previewTemplate('Table', 'preview.html?template=table')}</div>
  `;
};

const app = document.getElementById('app')!;

render(appTemplate(), app);
