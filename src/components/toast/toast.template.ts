import { html } from 'lit';
import { Toast } from './toast.ts';

export const renderToast = (message: string, duration: number, cssClasses?: string) => {
  return html`<toast-component
    class="toast-component ${cssClasses ?? ''}"
    message="${message}"
    duration="${duration}"
  ></toast-component>`;
};

export const createToast = (message: string, duration: number, cssClasses?: string) => {
  const toast = new Toast();
  toast.message = message;
  toast.duration = duration;
  toast.className = `toast-component ${cssClasses ?? ''}`;
  return toast;
};
