/**
 * @module SidebarComponent
 * @copyright diva-e (https://diva-e.com)
 */

import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import './sidebarNav.ts';
import './sidebarContact.ts';
import './sidebarPosts.ts';
import './sidebarFooter.ts';

@customElement('sidebar-component')
export class SidebarComponent extends LitElement {
  @query('.toggle')
  toggle: HTMLAnchorElement;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  firstUpdated(): void {
    this.toggle.addEventListener('click', this.handleToggleClick);
  }

  handleToggleClick = (e: Event) => {
    e.preventDefault();
    this.classList.toggle('active');
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
        ><icon-component class="icon-component" name="hamburger"></icon-component
      ></a>
    `;
  }
}
