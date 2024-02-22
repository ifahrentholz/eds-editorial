import { html, render } from 'lit';
import { Toast } from '../../components/toast.ts';

const renderIcon = (icon: string, message: string, duration: number) => {
  return html`
    <div class="icon-container">
      <icon-component
        @click="${() => copyNameToClipboard(icon, message, duration)}"
        class="icon"
        name="${icon}"
      ></icon-component>
    </div>
  `;
};

const showToast = (message: string, duration: number) => {
  const toast = new Toast();
  toast.message = message;
  toast.duration = duration;
  render(toast, document.body);
};
const copyNameToClipboard = async (name: string, message: string, duration: number) => {
  await navigator.clipboard.writeText(name);
  showToast(message, duration);
};

const template = (iconNames: string[], message: string, duration: number) => {
  return html` <div class="icons-overview">${iconNames.map((icon) => renderIcon(icon, message, duration))}</div>`;
};

const getMessage = (block: HTMLElement) => {
  const text = block.children[0].children[0];
  if (!text) return 'Icon name copied to clipboard!';
  return text.innerHTML;
};

const getDuration = (block: HTMLElement) => {
  const duration = block.children[0].children[2];
  if (!duration) return 2000;
  return Number(duration.innerHTML);
};

export default function decorate(block: HTMLElement) {
  // Vite runs on build time and finds all svg files in icons directory
  const iconOverview = import.meta.glob('../../icons/*.svg');
  const iconNames = Object.keys(iconOverview).map((iconPath) => iconPath.replace(/^.*\/(.*?)\.svg$/, '$1'));
  const message = getMessage(block);
  const duration = getDuration(block);

  block.innerHTML = '';

  render(template(iconNames, message, duration), block);
}
