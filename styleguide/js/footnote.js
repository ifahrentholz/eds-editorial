import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const footnoteTemplate = () => {
  return html`
    <div class="ls-library theme-content-element" id="footnote">
      <h1>Footnote</h1>
      <div class="theme-content-element-description">
        <div class="ls-example">
          <h5 class="ls-example__heading">Example</h5>
          <div class="ls-example__body">
            <div class="bm-e-footnote">
              <div class="bm-e-footnote__container">
                <div class="bm-e-footnote__text">
                  * Please note that installation of the Charging Dock is not included. If the car’s intelligent
                  navigation system is active, the pedal will vibrate when you approach a junction or a change in the
                  speed limit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
