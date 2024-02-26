import { html, nothing } from 'lit';

export const renderIcon = (icon: string, cssClasses?: string) => {
  return html`<icon-component class="icon ${cssClasses ?? nothing}" name="${icon}"></icon-component>`;
};
