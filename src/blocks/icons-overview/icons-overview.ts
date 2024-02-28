import { html, render } from 'lit';
import { renderIcon } from '../../components/icon/icon.template.ts';
import { createToast } from '../../components/toast/toast.template.ts';
import { IconName } from '../../icons.types.ts';

const renderIconLabel = (icon: string) => html`<span class="icon-label">${icon}</span>`;

const renderIconContainer = (icon: IconName, message: string, duration: number) => {
  return html`
    <button type="button" class="icon-container" @click="${() => copyNameToClipboard(icon, message, duration)}">
      ${renderIcon(icon)} ${renderIconLabel(icon)}
    </button>
  `;
};

const showToast = (message: string, duration: number) => render(createToast(message, duration), document.body);

const copyNameToClipboard = async (name: string, message: string, duration: number) => {
  await navigator.clipboard.writeText(name);
  showToast(message, duration);
};

const fetchIconNames = async (): Promise<IconName[]> => {
  const iconOverview = import.meta.glob('/public/icons/*.svg');
  return Object.keys(iconOverview).map((iconPath) => iconPath.replace(/^.*\/(.*?)\.svg$/, '$1')) as IconName[];
};

const template = (iconNames: IconName[], message: string, duration: number) =>
  iconNames.map((icon: IconName) => renderIconContainer(icon, message, duration));

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

const renderIcons = async (block: HTMLElement) => {
  const iconNames = await fetchIconNames();
  const message = getMessage(block);
  const duration = getDuration(block);

  block.innerHTML = '';
  render(template(iconNames, message, duration), block);
};

export default async function decorate(block: HTMLElement) {
  await renderIcons(block);
}