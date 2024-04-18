import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const linkTemplate = () => {
  return html`
    <div class="i-library theme-content-element" id="link">
      <h1 class="display-4 theme-content-element-title">Link</h1>
      <div class="theme-content-element-description">
        <div class="i-example">
          <h5 class="i-example__heading">Example</h5>
          <div class="i-example__body">
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
