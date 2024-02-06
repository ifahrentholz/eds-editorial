import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../../utils/fetchData';

@customElement('sidebar-footer')
export class SidebarFooter extends LitElement {
  @state()
  footerMarkup: HTMLParagraphElement | null;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchFooterData();
  }

  async fetchFooterData() {
    const response = await fetchData<string>({ endpoint: 'footer.plain.html' });
    const responseMarkup = document.createElement('div');
    responseMarkup.innerHTML = response;
    this.footerMarkup = responseMarkup.querySelector('p');
    this.footerMarkup?.classList.add('copyright');
  }

  render() {
    if (!this.footerMarkup) return;
    return html`${this.footerMarkup}`;
  }
}
