import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const colorsTemplate = () => {
  return html`
    <div class="theme-content-category" id="colors">
      <div class="i-library theme-content-element">
        <h1 class="display-4 theme-content-element-title">Colors</h1>
        <div class="theme-content-element-description">
          <p><strong>Colors used in this project.</strong></p>
          <div class="i-example">
            <div class="bm-lsg-colors">
              <div class="bm-lsg-colors__group">
                <h3 class="bm-lsg-colors__group-headline">Primary</h3>
                <div class="bm-lsg-colors__colors">
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #394d45; "></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">living-green</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #637a77; /* --bm-primary-teal */"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">teal</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #dcd8c0; /* --bm-primary-moss */"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">moss</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #e7cfb9; /* --bm-primary-blush */"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">blush</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bm-lsg-colors__group">
                <h3 class="bm-lsg-colors__group-headline">Neutral</h3>
                <div class="bm-lsg-colors__colors">
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #fff;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-0</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #f7f7f7;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-10</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #ebeced;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-20</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #cfcfcf;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-30</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #a5a5a5;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-40</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #727272;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-50</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #4f4f4f;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-60</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #232323;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-80</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #040404;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-90</p>
                    </div>
                  </div>
                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #000;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">neutral-100</p>
                    </div>
                  </div>

                  <div class="bm-lsg-colors__color">
                    <div class="bm-lsg-colors__color-tile" style="background: #040404;"></div>
                    <div class="bm-lsg-colors__color-description">
                      <p class="bm-lsg-colors__colors-name">black</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
