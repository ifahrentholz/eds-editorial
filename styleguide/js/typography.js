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
            <h1 class="stl-hero">HERO</h1>
            <h1 class="stl-h1--light">H1 light</h1>
            <h1 class="stl-h1--semibold">H1 semibold</h1>
            <h1 class="stl-h1--upper-light">H1 upper-light</h1>
            <h1 class="stl-h1--upper-semibold">H1 upper-semibold</h1>
            <h2 class="stl-h2--light">H2 light</h2>
            <h2 class="stl-h2--semibold">H2 semibold</h2>
            <h2 class="stl-h2--upper-light">H2 upper-light</h2>
            <h2 class="stl-h2--upper-semibold">H2 upper-semibold</h2>
            <h3 class="stl-h3--light">H3 light</h3>
            <h3 class="stl-h3--semibold">H3 semibold</h3>
            <h3 class="stl-h3--upper-light">H3 upper-light</h3>
            <h3 class="stl-h3--upper-semibold">H3 upper-semibold</h3>
            <h4 class="stl-h4--light">H4 light</h4>
            <h4 class="stl-h4--semibold">H4 semibold</h4>
            <h4 class="stl-h4--upper-light">H4 upper-light</h4>
            <h4 class="stl-h4--upper-semibold">H4 upper-semibold</h4>
            <h5 class="stl-h5--light">H5 light</h5>
            <h5 class="stl-h5--semibold">H5 semibold</h5>
            <h5 class="stl-h5--upper-light">H5 upper-light</h5>
            <h5 class="stl-h5--upper-semibold">H5 upper-semibold</h5>
            <h6 class="stl-h6--light">H6 light</h6>
            <h6 class="stl-h6--semibold">H6 upper-light</h6>
            <h6 class="stl-h6--upper-light">H6 semibold</h6>
            <h6 class="stl-h6--upper-semibold">H6 upper-semibold</h6>
            <p class="stl-p--lg-light">paragraph/lg/light</p>
            <p class="stl-p--lg-regular">paragraph/lg/regular</p>
            <p class="stl-p--lg-semibold">paragraph/lg/semibold</p>
            <p class="stl-p--md-light">paragraph/md/light</p>
            <p class="stl-p--md-regular">paragraph/md/regular</p>
            <p class="stl-p--md-semibold">paragraph/md/semibold</p>
            <p class="stl-p--sm-light">paragraph/sm/light</p>
            <p class="stl-p--sm-regular">paragraph/sm/regular</p>
            <p class="stl-p--sm-semibold">paragraph/sm/semibold</p>
            <p class="stl-p--sx-light">paragraph/sx/light</p>
            <p class="stl-p--sx-regular">paragraph/sx/regular</p>
            <p class="stl-p--sx-semibold">paragraph/sx/semibold</p>
            <p class="stl-link--lg">link/lg</p>
            <p class="stl-link--sm">link/sm</p>
            <p class="stl-link--xs">link/xs</p>
            <span class="stl-button-large"> button/large </span>
            <span class="stl-button-medium"> button/medium </span>
          </div>
        </div>
      </div>
    </div>
  `;
};
