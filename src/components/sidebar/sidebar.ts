import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { debounce } from '@kluntje/js-utils/lib/function-helpers/decorators';

import './sidebarNav.ts';
import './sidebarContact.ts';
import './sidebarPosts.ts';
import './sidebarFooter.ts';

@customElement('sidebar-component')
export class SidebarComponent extends LitElement {
  @query('.toggle')
  toggle: HTMLAnchorElement;

  connectedCallback(): void {
    super.connectedCallback();
    this.setInitialVisibility();
    window.addEventListener('resize', this.setInitialVisibility.bind(this));
  }

  firstUpdated(): void {
    this.toggle.addEventListener('click', this.handleToggleClick);
  }

  handleToggleClick = (e: Event) => {
    e.preventDefault();
    this.classList.toggle('inactive');
  };

  render() {
    return html`
      <div class="inner">
        <sidebar-nav></sidebar-nav>
        <sidebar-posts></sidebar-posts>
        <sidebar-contact></sidebar-contact>
        <sidebar-footer id="footer"></sidebar-footer>
      </div>
      <a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"
        ><icon-component name="hamburger"></icon-component
      ></a>
    `;
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @debounce(100)
  private setInitialVisibility() {
    window.innerWidth <= 1280 ? this.classList.add('inactive') : this.classList.remove('inactive');
  }
}
