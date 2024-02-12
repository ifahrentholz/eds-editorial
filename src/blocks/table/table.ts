import { html, render } from 'lit-html';

interface TemplateArgs {
  text?: string;
  description?: string;
  price?: string;
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

  const text = firstRow?.querySelector('.table div div:first-child')?.textContent || '';
  const description = firstRow?.querySelector('div:nth-child(2) strong')?.textContent || '';
  const price = firstRow?.querySelector('.table div div:last-child strong')?.textContent || '';

  const input: Input[] = Array.from(document.querySelectorAll('.table > div:not(:first-child)')).map((item) => {
    return {
      tableName: item.querySelector('div:first-child')?.textContent || '',
      tableDescription: item.querySelector('div:nth-child(2)')?.textContent || '',
      tablePrice: item.querySelector('div:last-child')?.textContent || '',
    };
  });

  const result = input.reduce((total, item) => {
    const price = item.tablePrice ? parseFloat(item.tablePrice) : 0;
    return total + price;
  }, 0);

  const sum = parseFloat(result.toFixed(2));

  block.innerHTML = '';
  block.style.removeProperty('display');
  render(template({ text, description, price, input, sum }), block);
}
