import { html } from 'lit';

export const template = () => {
  return html`
    <div class="table">
      <!---->
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <!--?lit$6034900447$--><!---->
              <th><!--?lit$6034900447$--><strong>Cell Header</strong></th>
              <!----><!---->
              <th><!--?lit$6034900447$--><strong>Cell Header 2</strong></th>
              <!---->
            </tr>
          </thead>
          <tbody>
            <!--?lit$6034900447$--><!---->
            <tr>
              <!--?lit$6034900447$--><!---->
              <td><!--?lit$6034900447$-->Content 1 <strong>strong</strong></td>
              <!----><!---->
              <td><!--?lit$6034900447$-->Content 2</td>
              <!---->
            </tr>
            <!----><!---->
            <tr>
              <!--?lit$6034900447$--><!---->
              <td>
                <!--?lit$6034900447$-->
                <p><em>Content 3</em></p>
                <p><strong>Content 4</strong></p>
                <p>Content 5</p>
              </td>
              <!----><!---->
              <td><!--?lit$6034900447$--><!--?--></td>
              <!---->
            </tr>
            <!---->
          </tbody>
        </table>
      </div>
    </div>
  `;
};
