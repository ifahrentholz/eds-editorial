import { render, html } from 'lit';
import { previewTemplate } from '../components/previewTemplate.js';
import { navTemplate } from '../components/nav.ts';

const appTemplate = () => {
  return html`
    ${navTemplate()} ${previewTemplate('Buttons', 'preview.html?template=buttons')}
    ${previewTemplate('Colors', 'preview.html?template=colors')}
    ${previewTemplate('Grid', 'preview.html?template=grid')} ${previewTemplate('Icons', 'preview.html?template=icons')}
    ${previewTemplate('Typography', 'preview.html?template=typography')}
    ${previewTemplate('Image', 'preview.html?template=image')} ${previewTemplate('Link', 'preview.html?template=link')}
    ${previewTemplate('Media', 'preview.html?template=media')}
    ${previewTemplate('Footnote', 'preview.html?template=footnote')}
    ${previewTemplate('Banners', 'preview.html?template=banners')}
    ${previewTemplate('Features', 'preview.html?template=features')}
    ${previewTemplate('Posts', 'preview.html?template=posts')} ${previewTemplate('Form', 'preview.html?template=form')}
    ${previewTemplate('Table', 'preview.html?template=table')}
  `;
};

const app = document.getElementById('app')!;

render(appTemplate(), app);
