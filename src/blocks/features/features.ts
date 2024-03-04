import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './features.scss';
import { renderIcon } from '../../components/icon/icon.template';
import { IconName } from '../../icons.types';

interface Feature {
  icon: IconName;
  textBlock: string;
}

type TemplateArgs = Feature[];

const template = (features: TemplateArgs) => {
  return html`
    ${features.map(
      (feature) => html`
        <article>
          <span class="icon">${renderIcon(feature.icon, 'icon-wc')}</span>
          <div class="content">${unsafeHTML(feature.textBlock)}</div>
        </article>
      `
    )}
  `;
};

export default function (block: HTMLElement) {
  const rows = block.querySelectorAll(':scope > div');
  let features: Feature[] = [];
  [...rows].forEach((row) => {
    const icon = row.children[0].innerHTML as IconName;
    const textBlock = row.children[1].innerHTML;
    features.push({ icon, textBlock });
  });

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template(features), block);
}
