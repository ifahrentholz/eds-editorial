import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

interface TemplateArgs {
  headline?: string;
  subline?: string;
  picture?: HTMLPictureElement;
  texts?: HTMLParagraphElement[];
  buttons?: HTMLAnchorElement[];
}

const template = ({ headline, subline, texts, buttons, picture }: TemplateArgs) => {
  return html`
    <section id="banner">
      <div class="content">
        <header>
          <h1>${headline}</h1>
          <p>${subline}</p>
        </header>
        ${unsafeHTML(texts?.map((text) => text.innerHTML).join(''))}
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
    </section>
  `;
};

export default function (block: HTMLElement) {
  const firstRow = block.querySelector('div');
  const secondRow = block.children[1];
  const headline = firstRow?.querySelector('h1')?.innerText;
  const subline = firstRow?.querySelector('h3')?.innerText;
  const texts = firstRow ? [...firstRow.querySelectorAll('p')] : [];
  const buttons = [...secondRow?.querySelectorAll('a')];
  const picture = firstRow?.querySelector('picture') || undefined;

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headline, subline, texts, buttons, picture }), block);
}
