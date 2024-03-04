import { html } from 'lit';
import { IconName } from '../../icons.types.ts';

export const renderIcon = (icon: IconName, cssClasses?: string) => {
  return html`<icon-component
    class="icon-component${cssClasses ? ` ${cssClasses}` : ''}"
    name="${icon}"
  ></icon-component>`;
};
