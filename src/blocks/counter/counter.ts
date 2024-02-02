import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-counter')
export class LitCounter extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  firstUpdated(): void {
    console.log('first updated');
  }

  render() {
    return html`
      <div class="card">
        <h3>Lit Counter</h3>
        <button @click=${this._onClick} part="button">count is ${this.count}</button>
      </div>
    `;
  }

  private _onClick() {
    this.count++;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #bada55;
      color: #333;
      cursor: pointer;
      transition: border-color 0.25s;
      width: 100%;
    }
    button:hover {
      background-color: #1a1a1a;
      color: #f9f9f9;
    }
  `;
}

export default function (block: HTMLElement) {
  const org_content = block.innerHTML;
  block.innerHTML = `<lit-counter>${org_content}</lit-counter>`;
  block.style.removeProperty('display');
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-counter': LitCounter;
  }
}
