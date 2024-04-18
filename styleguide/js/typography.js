import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const typographyTemplate = () => {
  return html`
    <div class="ls-library theme-content-element" id="typography">
      <h1>Typography</h1>
      <div class="theme-content-element-description">
        <div class="ls-example">
          <h5 class="ls-example__heading">Example</h5>
          <div class="ls-example__body">
            <p>Link Text</p>
          </div>
        </div>
        <h2>STL Typography</h2>
        <div class="ls-example">
          <h5 class="ls-example__heading">Example</h5>
          <div class="ls-example__body">
            <h1 class="stl--bold">HERO</h1>
            <h1>H1 light</h1>

            <h2>H2 light</h2>
            <h2 class="stl--bold">H2 semibold</h2>

            <h3>H3 light</h3>
            <h3 class="stl--bold">H3 semibold</h3>

            <h4>H4 light</h4>
            <h4 class="stl--bold">H4 semibold</h4>

            <h5>H5 light</h5>
            <h5 class="stl--bold">H5 semibold</h5>

            <h6>H6 light</h6>
            <h6 class="stl--bold">H6 light</h6>

            <p>paragraph/light</p>
            <p class="stl--bold">paragraph/bold</p>

            <span> span/light </span>
            <span class="stl--bold "> span/bold </span>
          </div>
        </div>
      </div>
    </div>
  `;
};
