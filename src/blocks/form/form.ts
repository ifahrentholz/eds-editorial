import { html, render } from 'lit';
import '../../components/form/form.ts';

export default async function decorate(block: HTMLElement) {
  const formLink = block.querySelector<HTMLElement>('a[href$=".json"]')?.innerText;
  if (!formLink) return;

  const { pathname } = new URL(formLink);
  block.innerHTML = '';
  render(html`<form-component pathname="${pathname}"></form-component>`, block);
  block.style.display = 'block';
}
