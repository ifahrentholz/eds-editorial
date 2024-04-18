import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

export const buttonsTemplate = () => {
  return html`
    <div class="theme-content-category" id="buttons">
      <div class="ls-library theme-content-element">
        <h1>Buttons</h1>
        <div class="theme-content-element-description">
          <p>Button / Anchor element.</p>
          <p>Default button size is <strong>l</strong>. Default button type is <strong>secondary</strong>.</p>
          <p><strong>Button properties:</strong></p>
          <ul>
            <li><p>button-type: "primary" | "secondary"</p></li>
            <li><p>button-size: "s" | "l"</p></li>
            <li><p>button-class: string</p></li>
            <li><p>attributes: hash | string</p></li>
            <li><p>tag: "button" | "a"</p></li>
            <li><p>label: string</p></li>
          </ul>
          <div class="ls-example">
            <h5 class="ls-example__heading">Example</h5>
            <div class="ls-example__body">
              <ul class="actions">
                <li><a href="#" class="button primary">Default</a></li>
                <li><a href="#" class="button">Default</a></li>
              </ul>
              <ul class="actions">
                <li><a href="#" class="button primary small">Small</a></li>
                <li><a href="#" class="button small">Small</a></li>
              </ul>
              <div class="row">
                <div class="col-6 col-12-small">
                  <ul class="actions">
                    <li><a href="#" class="button primary">Default</a></li>
                    <li><a href="#" class="button">Default</a></li>
                  </ul>
                </div>
                <div class="col-6 col-12-small">
                  <ul class="actions">
                    <li><a href="#" class="button primary small">Small</a></li>
                    <li><a href="#" class="button small">Small</a></li>
                  </ul>
                </div>
                <div class="col-6 col-12-small">
                  <ul class="actions">
                    <li><a href="#" class="button primary fit">Default</a></li>
                    <li><a href="#" class="button fit">Default</a></li>
                  </ul>
                </div>
                <div class="col-6 col-12-small">
                  <ul class="actions">
                    <li><a href="#" class="button primary small fit">Small</a></li>
                    <li><a href="#" class="button small fit">Small</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
