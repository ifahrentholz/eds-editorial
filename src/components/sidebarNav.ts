import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

interface MenuItem {
    navTitle: string,
    path?: string,
    items?: MenuItem[]
}

@customElement('sidebar-nav')
export class SidebarNav extends LitElement {
    private siteMap: any;
    private menuItems: MenuItem[];

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    async connectedCallback() {
        super.connectedCallback();
        const sitemap = await this.fetchSitemap();
        this.mapSitemapToMenuItems(sitemap);
    }

    render() {
        return html`
            <nav id="menu">
                <header class="major">
                    <h2>Menu</h2>
                </header>
                ${this.renderMenuItems()}
            </nav>`
    }

    private renderMenuItems() {
        /*{
      "path": "/",
      "title": "Hi, I’m Editorial by HTML5 UP",
      "description": "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas ...",
      "lastModified": "1707127911",
      "image": "/media_18fca17b5770aad624cc462619b04b3c9236b61f0.png?width=1200&format=pjpg&optimize=medium",
      "imagealt": "",
      "navtitle":"xy",
      "imageAlt": ""
    },*/

        const menuItems: MenuItem = [
            {navTitle: 'Homepage', path: '/'},
            {navTitle: 'posts', items: [{navTitle: 'post 1', path: '/posts/post1'}]}
        ]
        return html`
            <ul>
                <li><a href="index.html">Homepage</a></li>
                <li><a href="generic.html">Generic</a></li>
                <li><a href="elements.html">Elements</a></li>
                <li>
                    <span class="opener">Submenu</span>
                    <ul>
                        <li><a href="#">Lorem Dolor</a></li>
                        <li><a href="#">Ipsum Adipiscing</a></li>
                        <li><a href="#">Tempus Magna</a></li>
                        <li><a href="#">Feugiat Veroeros</a></li>
                    </ul>
                </li>
                <li><a href="#">Etiam Dolore</a></li>
                <li><a href="#">Adipiscing</a></li>
                <li>
                    <span class="opener">Another Submenu</span>
                    <ul>
                        <li><a href="#">Lorem Dolor</a></li>
                        <li><a href="#">Ipsum Adipiscing</a></li>
                        <li><a href="#">Tempus Magna</a></li>
                        <li><a href="#">Feugiat Veroeros</a></li>
                    </ul>
                </li>
                <li><a href="#">Maximus Erat</a></li>
                <li><a href="#">Sapien Mauris</a></li>
                <li><a href="#">Amet Lacinia</a></li>
            </ul>`
    }

    private async fetchSitemap() {
        const response = await fetch(`${window.hlx.codeBasePath}/query-index.json`);
        this.siteMap = await response.json();
    }

    private mapSitemapToMenuItems(sitemap: { data: [] }) {
        const menuItems: MenuItem = [
            {navTitle: 'Homepage', path: '/'},
            {navTitle: 'posts', items: [{navTitle: 'post 1', path: '/posts/post1'}]}
        ]

        this.menuItems = sitemap.data.map(item => {
            const pathFragments = item.path.split('/');

            if (pathFragments.length > 1) {
                return {navTitle: item.navTitle ? item.navTitle : pathFragments[1], items: [{navTitle: item.navTitle, path: item.path}]}
            }

            return {navTitle: item.navTitle, path: item.path};
        })
    }
}