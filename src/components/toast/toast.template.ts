import { html, nothing } from 'lit';

export const renderToast = async (message: string, duration: number, cssClasses?: string) => {
  return html`<toast-component
    class="toast-component ${cssClasses ?? nothing}"
    message="${message}"
    duration="${duration}"
  ></toast-component>`;
};
