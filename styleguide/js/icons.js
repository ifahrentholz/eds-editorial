import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const iconsTemplate = () => {
  return html`
    <div class="i-library theme-content-element" id="icons">
      <h1 class="display-4 theme-content-element-title">Icons</h1>
      <div class="theme-content-element-description">
        <p><strong>This is a list of all icons used in project.</strong></p>
        <h2>Usage</h2>
        <div class="i-example">
          <h5 class="i-example__heading">Example</h5>
          <div class="i-example__body">
            <div class="bm-lsg-icon__container">
              <div class="bm-lsg-icon">
                <i href="#" class="icon brands fa-twitter "></i>
                <span class="">Twitter</span>
              </div>
              <div class="bm-lsg-icon">
                <i href="#" class="icon brands fa-facebook-f "></i>
                <span class="">Facebook</span>
              </div>
              <div class="bm-lsg-icon">
                <i href="#" class="icon brands fa-instagram "></i>
                <span class="label">Instagram</span>
              </div>
              <div class="bm-lsg-icon">
                <i href="#" class="icon brands fa-github "></i>
                <span class="label">Github</span>
              </div>
              <div class="bm-lsg-icon">
                <i href="#" class="icon brands fa-dribbble "></i>
                <span class="label">Dribbble</span>
              </div>
              <div class="bm-lsg-icon">
                <i href="#" class="icon brands fa-tumblr "></i>
                <span class="label">Tumblr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
