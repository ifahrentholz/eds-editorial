import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './test-block.scss';
import { extractSidekickLibraryId, SidekickElement } from 'Helpers/sidekick/extractSidekickLibraryId';
import { getSidekickLibraryId } from 'Directives/sidekickLibraryId.ts';

interface TemplateArgs {
  headline: SidekickElement;
  subline: SidekickElement;
  picture?: HTMLPictureElement;
  texts: SidekickElement[];
  buttons: SidekickElement[];
}

const template = (args: TemplateArgs) => {
  const { headline, subline, texts, buttons, picture } = args;
  return html`
    <div id="banner">
      <div class="content">
        <header>
          <h1 ${getSidekickLibraryId(headline)}>${headline.innerHTML}</h1>
          <p ${getSidekickLibraryId(subline)}>${subline.innerHTML}</p>
        </header>
        ${texts?.map((text) => html`<p ${getSidekickLibraryId(text)}>${text.innerHTML}</p>`)}
        <ul class="actions">
          ${buttons?.map(
            (button) =>
              html` <li>
                <a href="${button.href}" class="button big" ${getSidekickLibraryId(button)}>${button.innerHTML}</a>
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
  const headline = extractSidekickLibraryId(firstRow?.querySelector('h1'));
  const subline = extractSidekickLibraryId(firstRow?.querySelector('h3'));
  const texts = firstRow ? [...firstRow.querySelectorAll('p')].map((item) => extractSidekickLibraryId(item)) : [];
  const buttons = secondRow ? [...secondRow.querySelectorAll('a')].map((item) => extractSidekickLibraryId(item)) : [];
  const picture = firstRow?.querySelector('picture') || undefined;
  const img = picture?.querySelector('img');
  img?.setAttribute('loading', 'eager');

  block.innerHTML = '';
  block.style.removeProperty('display');
  render(template({ headline, subline, texts, buttons, picture }), block);
}
