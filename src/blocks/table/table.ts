import { html, render } from 'lit';

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
            ${headers.map((header) => html`<th>${header}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${data.map(
            (row) => html`
              <tr>
                ${row.map((cell) => html`<td>${cell}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  `;
};

export default function decorate(block: HTMLElement) {
  const tableData = block.querySelector('.table div');

  if (!tableData) {
    return;
  }

  const headers = Array.from(tableData.querySelectorAll('div')).map((cell) => cell.innerText);
  const rows = Array.from(tableData.parentElement?.children || []).filter((row) => row !== tableData);
  const data = rows.map((row) => Array.from(row.querySelectorAll('div')).map((cell) => cell.innerText));

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headers, data }), block);
}
