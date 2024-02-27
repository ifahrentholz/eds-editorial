import { html, nothing } from 'lit';
import { Icons } from '../../icons.types.ts';

export const renderIcon = (icon: Icons, cssClasses?: string) => {
  return html`<icon-component class="icon ${cssClasses ?? nothing}" name="${icon}"></icon-component>`;
};
