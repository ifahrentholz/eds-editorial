const icons = import.meta.glob('../../public/icons/*.svg');
const fileNames = Object.keys(icons).map((fileName) => fileName.replace('./src/files/', ''));

//const renderIcon = (icon: string) => {
//  return html`<span class="icon"><icon-component class="icon-wc" name="${icon}"></icon-component></span>`;
//};

//const template = (icons: string[]) => {
//  return html`${icons.map((icon) => renderIcon(icon))}`;
//};

export default function decorate(block: HTMLElement) {
  console.log(fileNames);
  console.log(block);
  // render(template(features), block);
}
