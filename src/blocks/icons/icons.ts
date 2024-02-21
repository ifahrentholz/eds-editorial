import { html, render } from 'lit';

/**
 * Vite runs on build time and finds all svg files in icons directory
 */
const icons = import.meta.glob('../../icons/*.svg');
const iconNames = Object.keys(icons).map((iconPath) => iconPath.replace(/^.*\/(.*?)\.svg$/, '$1'));

const renderIcon = (icon: string) => {
  return html`<span class="icon"><icon-component class="icon-wc" name="${icon}"></icon-component></span>`;
};

const template = (icons: string[]) => {
  return html`${icons.map((icon) => renderIcon(icon))}`;
};

export default function decorate(block: HTMLElement) {
  console.log(iconNames);
  render(template(iconNames), block);
}
