import { html, render } from 'lit';

interface TableCell {
  text: string;
  styles?: string;
}

interface TemplateArgs {
  headers: TableCell[];
  data: TableCell[][];
}

const template = (args: TemplateArgs) => {
  const { headers, data } = args;
  return html`
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            ${headers.map((header) => html`<th style="${header.styles || ''}">${header.text}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${data.map(
            (row) => html`
              <tr>
                ${row.map((cell) => html`<td style="${cell.styles || ''}">${cell.text}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  `;
};

export default function decorate(block: HTMLElement) {
  const headers: TableCell[] = [];
  const data: TableCell[][] = [];

  [...block.children].forEach((child, index) => {
    if (index === 0) {
      headers.push(
        ...Array.from(child.querySelectorAll('div')).map((cell) => ({
          text: cell.textContent || cell.innerText,
          styles: '',
        }))
      );
    } else {
      data.push(
        Array.from(child.querySelectorAll('div')).map((cell) => ({
          text: cell.innerText,
          styles: '',
        }))
      );
    }
  });

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headers, data }), block);
}
