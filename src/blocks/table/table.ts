import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './table.scss';

interface TemplateArgs {
  headers: string[];
  data: string[][];
}

const template = (args: TemplateArgs) => {
  const { headers, data } = args;
  return html`
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            ${headers.map((header) => html`<th>${unsafeHTML(header)}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${data.map(
            (row) => html`
              <tr>
                ${row.map((cell) => html`<td>${unsafeHTML(cell)}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  `;
};

export default function decorate(block: HTMLElement) {
  const headers: string[] = [];
  const data: string[][] = [];

  [...block.children].forEach((child, index) => {
    if (index === 0) {
      headers.push(...Array.from(child.querySelectorAll('div')).map((cell) => cell.innerHTML));
    } else {
      data.push(Array.from(child.querySelectorAll('div')).map((cell) => cell.innerHTML));
    }
  });

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headers, data }), block);
}
