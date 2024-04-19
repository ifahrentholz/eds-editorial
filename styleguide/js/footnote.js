import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const template = () => {
  return html`
    <div class="bm-e-footnote">
      <div class="bm-e-footnote__container">
        <div class="bm-e-footnote__text">
          * Please note that installation of the Charging Dock is not included. If the car’s intelligent navigation
          system is active, the pedal will vibrate when you approach a junction or a change in the speed limit
        </div>
      </div>
    </div>
  `;
};
