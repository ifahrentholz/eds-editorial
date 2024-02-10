/*import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../utils/fetchData';

interface TableState {
  headline?: HTMLHeadingElement;
  name?: HTMLParagraphElement;
  description?: HTMLParagraphElement;
  price?: HTMLParagraphElement;
  input?: Input[];
  sum?: number;
}

interface Input {
  tableName?: string;
  tableDescription?: string;
  tablePrice?: string;
}

@customElement('table-component')
export class Table extends LitElement {
  @state()
  private tableState: TableState = {};

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
    this.createViewModel(responseMarkup);
  }

  createViewModel(responseMarkup: HTMLDivElement) {
    const input: Input[] = Array.from(responseMarkup.querySelectorAll('.table > div:not(:first-child)')).map((item) => {
      return {
        tableName: item.querySelector('div:first-child')?.innerHTML as string,
        tableDescription: item.querySelector('div:nth-child(2)')?.innerHTML as string,
        tablePrice: item.querySelector('div:last-child')?.innerHTML as string,
      };
    });

    const sum = input.reduce((total, item) => total + parseFloat(item.tablePrice), 0);
    const roundedSum = parseFloat(sum.toFixed(2));

    this.tableState = {
      headline: responseMarkup.querySelector('h2') as HTMLHeadingElement,
      name: responseMarkup.querySelector('.table div div:first-child ') as HTMLParagraphElement,
      description: responseMarkup.querySelector('.table div div:nth-child(2)') as HTMLParagraphElement,
      price: responseMarkup.querySelector('.table div div:last-child') as HTMLParagraphElement,
      input,
      sum: roundedSum,
    };
  }

  render() {
    const { headline, name, description, price, input, sum } = this.tableState;
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
            <tbody>
              ${input?.map((item) => {
                return html`
                  <tr>
                    <td>${item.tableName}</td>
                    <td>${item.tableDescription}</td>
                    <td>${item.tablePrice}</td>
                  </tr>
                `;
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td>${sum}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    `;
  }
}
*/
