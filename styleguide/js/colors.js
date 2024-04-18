import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const colorsTemplate = () => {
  return html`
    <div class="theme-content-category" id="colors">
      <div class="ls-library theme-content-element">
        <h1>Colors</h1>
        <div class="theme-content-element-description">
          <p><strong>Colors used in this project.</strong></p>
          <div class="ls-example">
            <div class="lsg-colors">
              <h3>Primary</h3>
              <div class="lsg-colors__colors">
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #394d45; "></div>
                  <p>living-green</p>
                </div>
                <div class="lsg-colors__color">
                  <div style="background: #637a77; /* --bm-primary-teal */"></div>
                  <p>teal</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #dcd8c0; /* --bm-primary-moss */"></div>
                  <p>moss</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #e7cfb9; /* --bm-primary-blush */"></div>
                  <p>blush</p>
                </div>
              </div>
            </div>
            <div class="lsg-colors">
              <h3>Neutral</h3>
              <div class="lsg-colors__colors">
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #fff;"></div>
                  <p>neutral-0</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #f7f7f7;"></div>
                  <p>neutral-10</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #ebeced;"></div>
                  <p>neutral-20</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #cfcfcf;"></div>
                  <p>neutral-30</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #a5a5a5;"></div>
                  <p>neutral-40</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #727272;"></div>
                  <p>neutral-50</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #4f4f4f;"></div>
                  <p>neutral-60</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #232323;"></div>
                  <p>neutral-80</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #040404;"></div>
                  <p class="bm-lsg-colors__colors-name">neutral-90</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #000;"></div>
                  <p>neutral-100</p>
                </div>
                <div class="lsg-colors__color">
                  <div class="lsg-colors__color-tile" style="background: #040404;"></div>
                  <p>black</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
