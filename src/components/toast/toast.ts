import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('toast-component')
export class Toast extends LitElement {
  @property({ type: String })
  message: string = 'Toast default message';
  @property({ type: Number })
  duration: number = 10;

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close() {
    this.remove();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    if (!this.message) return;
    return html`<div class="toast">${this.message}</div>`;
  }

  static styles = css`
    .toast {
      position: fixed;
      top: 30vh;
      right: 50vw;
      background-color: #ffffff;
      transform: translateX(50%);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      z-index: 1000;
      padding: 8px 16px;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
  `;
}
