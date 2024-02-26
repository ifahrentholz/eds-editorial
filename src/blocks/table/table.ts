import { html, render } from 'lit';
import { ConstructedElement, extractSidekickLibId } from '../../utils/extractSidekickLibId';
import { ifDefined } from 'lit-html/directives/if-defined.js';

interface TemplateArgs {
  headers: ConstructedElement[];
  data: ConstructedElement[][];
}

const template = (args: TemplateArgs) => {
  const { headers, data } = args;

  return html`
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            ${headers.map(
              (header) => html`
                <th
                  data-library-id="${ifDefined(header.id)}"
                  contenteditable="${ifDefined(header.id ? true : undefined)}"
                >
                  ${header.text}
                </th>
              `
            )}
          </tr>
        </thead>
        <tbody>
          ${data.map(
            (row) => html`
              <tr>
                ${row.map(
                  (cell) => html`
                    <td
                      data-library-id="${ifDefined(cell.id)}"
                      contenteditable="${ifDefined(cell.id ? true : undefined)}"
                    >
                      ${cell.text}
                    </td>
                  `
                )}
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  `;
};

export default function decorate(block: HTMLElement) {
  const headers: ConstructedElement[] = [];
  const data: ConstructedElement[][] = [];

  [...block.children].forEach((child, index) => {
    if (index === 0) {
      headers.push(
        ...Array.from(child.querySelectorAll<HTMLElement>('strong')).map((cell) => ({
          text: cell.textContent || '',
          id: extractSidekickLibId(cell).id,
        }))
      );
    } else {
      data.push(
        Array.from(child.querySelectorAll<HTMLElement>('strong')).map((cell) => ({
          text: cell.textContent || '',
          id: extractSidekickLibId(cell).id,
        }))
      );
    }
  });

  block.innerHTML = '';

  block.style.removeProperty('display');
  render(template({ headers, data }), block);
}
