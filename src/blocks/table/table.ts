import { html, render } from 'lit';

const tableTemplate = (headers: string[], data: string[][]) => {
  return html`
    <table>
      <thead>
        <tr>
          ${headers.map((header) => html`<th>${header}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${data.map(
          (rowData) => html`
            <tr>
              ${rowData.map((data) => html`<td>${data}</td>`)}
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
};

const template = (tables: { headers: string[]; data: string[][] }[]) => {
  return tables.map((table) => tableTemplate(table.headers, table.data));
};

export default async function renderTables(block: HTMLElement) {
  block.innerHTML = '';

  try {
    const req = await fetch(`${window.hlx.codeBasePath}/query-index.json`);
    if (!req.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await req.json();

    const tablesData = response.data.filter((item: any) => item.path.includes('/generic'));

    const tables = await Promise.all(
      tablesData.map(async (table: any) => {
        const tableReq = await fetch(`${window.hlx.codeBasePath}${table.path}.plain.html`);
        if (!tableReq.ok) {
          throw new Error(`Failed to fetch data for ${table.path}`);
        }
        const tableContent = await tableReq.text();
        const parser = new DOMParser();
        const tableDoc = parser.parseFromString(tableContent, 'text/html');

        const tableRows = Array.from(tableDoc.querySelectorAll('.table div'));
        const headers = Array.from(tableRows[0].querySelectorAll('div')).map((cell) => cell.innerText);

        const data: string[][] = [];
        for (let i = 1; i < tableRows.length; i++) {
          const rowData = Array.from(tableRows[i].querySelectorAll('div')).map((cell) => cell.innerText);
          console.log(tableRows[i]);
          data.push(rowData);
        }

        return { headers, data };
      })
    );

    block.style.removeProperty('display');
    render(template(tables), block);
  } catch (error) {
    console.error('Error rendering tables:', error);
  }
}
