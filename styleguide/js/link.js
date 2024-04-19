import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const template = () => {
  return html`
    <div class="ls-library theme-content-element" id="link">
      <h1>Link</h1>
      <div class="theme-content-element-description">
        <div class="ls-example">
          <h5 class="ls-example__heading">Example</h5>
          <div class="ls-example__body">
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
