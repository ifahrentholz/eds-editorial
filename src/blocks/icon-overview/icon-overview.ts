import { html, render } from 'lit';

/**
 * Vite runs on build time and finds all svg files in icons directory
 */
const iconOverview = import.meta.glob('../../icons/*.svg');
const iconNames = Object.keys(iconOverview).map((iconPath) => iconPath.replace(/^.*\/(.*?)\.svg$/, '$1'));

const renderIcon = (icon: string) => {
  return html`
    <div class="icon-container">
      <icon-component @click="${() => copyNameToClipboard(icon)}" class="icon" name="${icon}"></icon-component>
    </div>
  `;
};

const copyNameToClipboard = async (name) => {
  await navigator.clipboard.writeText(name);
  addToastNotification();
};

const addToastNotification = () => {
  const toast = document.createElement('div');
  toast.classList.add('icons-toast');
  toast.innerText = 'Icon name copied to clipboard!';
  document.body.append(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
};

const template = (icons: string[]) => {
  return html` <div class="icons-overview">${icons.map((icon) => renderIcon(icon))}</div>`;
};

export default function decorate(block: HTMLElement) {
  block.innerHTML = '';
  render(template(iconNames), block);
}
