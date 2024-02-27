import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import FetchService from '../../services/fetch.service.ts';

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
    const response = await FetchService.fetchText('footer.plain.html', {
      cacheOptions: { cacheType: 'runtime' },
    });
    const responseMarkup = document.createElement('div');
    responseMarkup.innerHTML = response;
    this.footerMarkup = responseMarkup.querySelector('p');
    if (this.footerMarkup) this.footerMarkup.classList.add('copyright');
  }

  render() {
    if (!this.footerMarkup) return;
    return html`${this.footerMarkup}`;
  }
}
