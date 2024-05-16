import { html } from 'lit';

export const template = () => {
  return html`
    <p><strong>Generic image element.</strong></p>

    <div class="box alt">
      <div class="row gtr-50 gtr-uniform">
        <div class="col-4">
          <span class="image fit"><img src="/__template__/images/pic01.jpg" alt="" /></span>
        </div>
        <div class="col-4">
          <span class="image fit"><img src="/__template__/images/pic02.jpg" alt="" /></span>
        </div>
        <div class="col-4">
          <span class="image fit"><img src="/__template__/images/pic08.jpg" alt="" /></span>
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
  `;
};
