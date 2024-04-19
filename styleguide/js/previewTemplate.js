import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const previewTemplate = (title, previewUrl) => {
  return html`
    <div class="ls-library theme-content-element">
      <h1>${title}</h1>
      <div class="theme-content-element-description">
        <div class="ls-example">
          <a class="ls-example__heading" href="${previewUrl}">Example</a>
          <div class="ls-example__body">
            <iframe src="${previewUrl}" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  `;
};
