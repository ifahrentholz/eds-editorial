import { html, render } from 'lit';

interface TemplateArgs {
  text?: HTMLParagraphElement;
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

const template = ({ text, description, price, input, sum }: TemplateArgs) => {
  return html`
    <table>
      <thead>
        <tr>
          <th>${text}</th>
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
  `;
};

export default function (block: HTMLElement) {
  const firstRow = block.querySelector('div');

  const text = firstRow?.querySelector('.table div div:first-child');
  const description = firstRow?.querySelector('div:nth-child(2) strong');
  const price = firstRow?.querySelector('.table div div:last-child strong');

  const input: Input[] = Array.from(document.querySelectorAll('.table > div:not(:first-child)')).map((item) => {
    return {
      tableName: item.querySelector('div:first-child')?.innerHTML as string,
      tableDescription: item.querySelector('div:nth-child(2)')?.innerHTML as string,
      tablePrice: item.querySelector('div:last-child')?.innerHTML as string,
    };
  });

  const result = input.reduce((total, item) => total + parseFloat(item.tablePrice), 0);
  const sum = parseFloat(result.toFixed(2));

  block.innerHTML = '';
  block.style.removeProperty('display');
  render(template({ text, description, price, input, sum }), block);
}
