import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import './sidebarNav.ts';

@customElement('sidebar-component')
export class SidebarComponent extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @query('.toggle')
  toggle: HTMLAnchorElement;

  firstUpdated(): void {
    this.toggle.addEventListener('click', this.handleToggleClick);
    console.log('toggle', this);
  }

  handleToggleClick = (e: Event) => {
    e.preventDefault();
    console.log('this', this);
    this.classList.toggle('inactive');
  };

  render() {
    return html`
      <div class="inner">
        <sidebar-nav></sidebar-nav>
      </div>
      <a href="#sidebar" class="toggle">Toggle</a>
    `;
  }
}
