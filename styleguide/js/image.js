import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const imageTemplate = () => {
  return html`
    <div class="i-library theme-content-element" id="image">
      <h1 class="display-4 theme-content-element-title">Image</h1>
      <div class="theme-content-element-description">
        <p><strong>Generic image element.</strong></p>
        <div class="i-example">
          <h5 class="i-example__heading">Example</h5>
          <div class="i-example__body">
            <div class="box alt">
              <div class="row gtr-50 gtr-uniform">
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic01.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic02.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/mages/pic08.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic03.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic01.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic02.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic02.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic03.jpg" alt="" /></span>
                </div>
                <div class="col-4">
                  <span class="image fit"><img src="/__template__/images/pic01.jpg" alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
