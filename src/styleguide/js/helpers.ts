import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export async function getSidekickBlockMarkup(blockName: string) {
  const markup = await fetch(`/tools/sidekick/blocks/${blockName}.plain.html`).then((response) => response.text());
  return html`${unsafeHTML(markup)}`;
}
