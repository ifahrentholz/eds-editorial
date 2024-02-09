import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

interface TemplateArgs {
  headline?: string;
  subline?: string;
  picture?: HTMLPictureElement;
  texts?: HTMLParagraphElement[];
  buttons?: HTMLAnchorElement[];
}

const template = (args: TemplateArgs) => {
  const { headline, subline, texts, buttons, picture } = args;
  return html`
    <div id="banner">
      <div class="content">
        <header>
          <h1>${headline}</h1>
          <p>${subline}</p>
        </header>
        ${texts?.map((text) => html`<p>${text.innerText}</p>`)}
        <ul class="actions">
          ${buttons?.map(
            (button) =>
              html`<li>
                <a href="${button.href}" class="button big">${button.innerText}</a>
              </li>`
          )}
        </ul>
      </div>
      <span class="image object"> ${picture ?? unsafeHTML(picture)} </span>
    </div>
  `;
};

export default function (block: HTMLElement) {
  console.log('banner block', block);
  const firstRow = block.querySelector('div');
  const secondRow = block.children[1];
  const headline = firstRow?.querySelector('h1')?.innerText;
  const subline = firstRow?.querySelector('h3')?.innerText;
  const texts = firstRow ? [...firstRow.querySelectorAll('p')] : [];
  console.log('secondRow', secondRow);
  const buttons = secondRow !== undefined ? [...secondRow.querySelectorAll('a')] : [];
  console.log('buttons', buttons);
  const picture = firstRow?.querySelector('picture') || undefined;
  const img = firstRow?.querySelector('img');
  img?.setAttribute('loading', 'eager');
  img?.setAttribute('fetchpriority', 'high');

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headline, subline, texts, buttons, picture }), block);
}
