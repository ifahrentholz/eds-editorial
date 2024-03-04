/**
 * @module SidebarComponent
 * @copyright diva-e (https://diva-e.com)
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';

import './sidebarNav.ts';
import './sidebarContact.ts';
import './sidebarPosts.ts';
import './sidebarFooter.ts';
import { renderIcon } from '../icon/icon.template.ts';

@customElement('sidebar-component')
export class SidebarComponent extends LitElement {
  toggleRef: Ref<HTMLAnchorElement> = createRef();
  createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  firstUpdated(): void {
    this.toggleRef.value!.addEventListener('click', this.handleToggleClick);
    this.classList.add('activate-animations');
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
      <a ${ref(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle">
        ${renderIcon('hamburger')}
      </a>
    `;
  }
}
