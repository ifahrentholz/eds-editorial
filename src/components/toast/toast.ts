import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('toast-component')
export class Toast extends LitElement {
  @property({ type: String })
  message: string = 'Your settings have been saved successfully!';
  @property({ type: Number })
  duration: number = 3000;

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close() {
    this.style.animation = 'fadeOut 0.3s ease-in-out forwards';
    setTimeout(() => {
      this.remove();
    }, 305);
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
      background-color: white;
      transform: translateX(50%);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      z-index: 1000;
      padding: 8px 16px;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
      animation: fadeIn 0.3s ease-in-out forwards; /* Apply fade-in animation */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `;
}
