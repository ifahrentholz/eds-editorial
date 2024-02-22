import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { ConstructedElement, extractSidekickLibId } from '../../utils/extractSidekickLibID';

interface TemplateArgs {
  headline: ConstructedElement;
  subline: ConstructedElement;
  picture?: HTMLPictureElement;
  texts: ConstructedElement[];
  buttons: ConstructedElement[];
}

const template = (args: TemplateArgs) => {
  const { headline, subline, texts, buttons, picture } = args;
  return html`
    <div id="banner">
      <div class="content">
        <header>
          <h1 data-library-id="${ifDefined(headline.id)}" contenteditable="${ifDefined(true)}">${headline.text}</h1>
          <p data-library-id="${ifDefined(subline.id)}" contenteditable="${ifDefined(true)}">${subline.text}</p>
        </header>
        ${texts?.map(
          (text) =>
            html`<p data-library-id="${ifDefined(text.id)}" contenteditable="${ifDefined(true)}">${text.text}</p>`
        )}
        <ul class="actions">
          ${buttons?.map(
            (button) =>
              html`<li>
                <a
                  href="${button.href}"
                  class="button big"
                  data-library-id="${ifDefined(button.id)}"
                  contenteditable="${ifDefined(true)}"
                  >${button.text}</a
                >
              </li>`
          )}
        </ul>
      </div>
      <span class="image object"> ${picture ?? unsafeHTML(picture)} </span>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const image = block.querySelector('img');
  if (image) {
    image.setAttribute('loading', 'eager');
  }
  const firstRow = block.querySelector('div');
  const secondRow = block.children[1];
  const headline = extractSidekickLibId(firstRow?.querySelector('h1'));
  const subline = extractSidekickLibId(firstRow?.querySelector('h3'));
  const texts = firstRow ? [...firstRow.querySelectorAll('p')].map((item) => extractSidekickLibId(item)) : [];
  const buttons = secondRow ? [...secondRow.querySelectorAll('a')].map((item) => extractSidekickLibId(item)) : [];
  const picture = firstRow?.querySelector('picture') || undefined;
  const img = picture?.querySelector('img');
  img?.setAttribute('loading', 'eager');

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headline, subline, texts, buttons, picture }), block);
}
