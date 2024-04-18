import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const tableTemplate = () => {
  return html`
    <div class="ls-library theme-content-element" id="table">
      <h1>Table</h1>
      <div class="theme-content-element-description">
        <div class="ls-example">
          <h5 class="ls-example__heading">Example</h5>
          <div class="ls-example__body">
            <div class="table-wrapper">
              <div class="table block" data-block-name="table" data-block-status="loaded">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
