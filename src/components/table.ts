import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../utils/fetchData';

interface TableTemplateArgs {
  headline: HTMLHeadingElement;
  name: HTMLParagraphElement;
  description: HTMLParagraphElement;
  price: HTMLParagraphElement;
  input: Input[];
}

interface Input {
  tableName: string;
  tableDescription: string;
  tablePrice: string;
}

@customElement('table-component')
export class Table extends LitElement {
  @state()
  tableTemplateArgs: TableTemplateArgs;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchTableData();
  }

  async fetchTableData() {
    const response = await fetchData<string>({ endpoint: 'table.plain.html' });

    const responseMarkup = document.createElement('div');
    responseMarkup.innerHTML = response;
    this.tableTemplateArgs = {
      headline: responseMarkup.querySelector('h2') as HTMLHeadingElement,
      name: responseMarkup.querySelector('.table div div:first-child ') as HTMLParagraphElement,
      description: responseMarkup.querySelector('.table div div:nth-child(2)') as HTMLParagraphElement,
      price: responseMarkup.querySelector('.table div div:last-child') as HTMLParagraphElement,
      input: Array.from(responseMarkup.querySelectorAll('.table > div:not(:first-child)')).map((item) => {
        return {
          tableName: item.querySelector('div:first-child')?.innerHTML as string,
          tableDescription: item.querySelector('div:nth-child(2)')?.innerHTML as string,
          tablePrice: item.querySelector('div:last-child')?.innerHTML as string,
        };
      }),
    };
  }

  render() {
    const { headline, name, description, price, input } = this.tableTemplateArgs;
    const sum = input.reduce((total, item) => total + parseFloat(item.tablePrice), 0);
    const roundedSum = sum.toFixed(2);
    return html`
      <section>
        <header class="major">${headline}</header>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>${name}</th>
                <th>${description}</th>
                <th>${price}</th>
              </tr>
            </thead>
            ${input.map((item) => {
              return html` <tbody>
                <tr>
                  <td>${item.tableName}</td>
                  <td>${item.tableDescription}</td>
                  <td>${item.tablePrice}</td>
                </tr>
              </tbody>`;
            })}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td>${roundedSum}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    `;
  }
}
