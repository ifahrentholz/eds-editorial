import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { until } from 'lit/directives/until.js';

const modules = import.meta.glob('/src/icons/*.svg', { as: 'raw' });

@customElement('icon-component')
export class Icon extends LitElement {
  @property({ type: String })
  name: string = '';

  async getSvg(name: string) {
    const key = modules[`/src/icons/${name}.svg`];
    const iconMarkupFunc = key !== undefined ? key : modules[`/src/icons/cross.svg`];
    const iconMarkup = await iconMarkupFunc().catch((e: Error) => console.error(`SVG icon: ${e.message}`));
    return unsafeSVG(iconMarkup as string);
  }

  render() {
    const svg = this.getSvg(this.name);
    return html`${until(svg)}`;
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
    }

    svg {
      width: 100%;
      height: auto;
    }
  `;
}
