import { html, nothing } from 'lit';
import { IconName } from '../../icons.types.ts';

export const renderIcon = (icon: IconName, cssClasses?: string) => {
  return html`<icon-component class="icon ${cssClasses ?? nothing}" name="${icon}"></icon-component>`;
};
