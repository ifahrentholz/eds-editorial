import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DebuggerService } from '@kluntje/services';

import FetchService from '../../services/fetch.service.ts';
import PlaceholderService from '../../services/placeholder.service.ts';

@customElement('sidebar-footer')
export class SidebarFooter extends LitElement {
  @state()
  footerMarkup: HTMLParagraphElement | null;

  @state()
  error: string | null = null;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchFooterData();
  }

  async fetchFooterData() {
    const endpoint = 'footer.plain.html';

    try {
      const response = await FetchService.fetchText(endpoint, {
        cacheOptions: { cacheType: 'runtime' },
      });
      this.error = null;
      const responseMarkup = document.createElement('div');
      responseMarkup.innerHTML = response;
      this.footerMarkup = responseMarkup.querySelector('p');
      if (this.footerMarkup) this.footerMarkup.classList.add('copyright');
    } catch (error) {
      DebuggerService.error(`SidebarFooter Component: Error while fetching ${endpoint}`, error);
      this.error = await PlaceholderService.getPlaceHolder('error');
    }
  }

  render() {
    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }
    if (!this.footerMarkup) return;
    return html`${this.footerMarkup}`;
  }
}
