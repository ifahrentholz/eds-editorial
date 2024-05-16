import { html } from 'lit';

export const template = () => {
  return html`
    <h3>Grid-Item-Container</h3>
    <p>
      Where <code>M</code> equals the Mediaquery/Breakpoint (ie. s - xxl) this rule is applied from and
      <code>W</code> equals the number of columns it will span (full width equals 12).
    </p>
    <table class="table">
      <thead>
        <tr>
          <th><span style="color: #000;">Breakpoint</span></th>
          <th><span style="color: #000;">Viewport width</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>S</td>
          <td>0 - 767px</td>
        </tr>
        <tr>
          <td>M</td>
          <td>768px - 1023px</td>
        </tr>
        <tr>
          <td>L</td>
          <td>1024px - 1439px</td>
        </tr>
        <tr>
          <td>XL</td>
          <td>1440px - 1919px</td>
        </tr>
        <tr>
          <td>XLL</td>
          <td>1920px - 2559px</td>
        </tr>
        <tr>
          <td>MAX</td>
          <td>2560px and up</td>
        </tr>
      </tbody>
    </table>
  `;
};
