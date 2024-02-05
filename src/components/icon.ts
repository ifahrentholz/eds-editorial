import { customElement } from 'lit/decorators.js';

@customElement('icon-component')
export class Icon extends HTMLElement {
  get name() {
    const srcValue = this.getAttribute('name');
    if (!srcValue) {
      throw new Error('Icon must have a name attribute');
    }
    return srcValue;
  }

  connectedCallback() {
    console.log('RENDER ICON');
    this.render();
  }

  async render() {
    const svg = await this.fetchIcon();
    console.log('render icon here', svg);
    return `<style>:host{display:inline-block;width:50px;height:50px;}svg{display:inline-block;width:100%;height:100%;fill:currentColor;}</style>${svg}`;
  }

  async fetchIcon() {
    const response = await fetch(`${window.hlx.codeBasePath}/dist/icons/${this.name}.svg`);
    const textResponse = await response.text();
    return textResponse;
  }
}
