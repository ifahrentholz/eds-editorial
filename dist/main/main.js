import { T as l, s as h, x as i } from '../__chunks__/lit-element.XkUWx5ik.js';
import { n as x, t as p } from '../__chunks__/property.0daVBkvz.js';
import { f as E, _ as j } from '../__chunks__/icon.vh7VrxK3.js';
import { e as q, o as _ } from '../__chunks__/unsafe-html.U1vgpvJh.js';
import { S as k, f as M, a as B, c as R, b as H } from '../__chunks__/createOptimizedPicture.pKR_EfYz.js';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function f(e) {
  return x({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const I = () => new N();
class N {}
const v = new WeakMap(),
  Y = q(
    class extends E {
      render(e) {
        return l;
      }
      update(e, [t]) {
        var a;
        const s = t !== this.Y;
        return (
          s && this.Y !== void 0 && this.rt(void 0),
          (s || this.lt !== this.ct) &&
            ((this.Y = t), (this.ht = (a = e.options) == null ? void 0 : a.host), this.rt((this.ct = e.element))),
          l
        );
      }
      rt(e) {
        if (typeof this.Y == 'function') {
          const t = this.ht ?? globalThis;
          let s = v.get(t);
          s === void 0 && ((s = new WeakMap()), v.set(t, s)),
            s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            s.set(this.Y, e),
            e !== void 0 && this.Y.call(this.ht, e);
        } else this.Y.value = e;
      }
      get lt() {
        var e, t;
        return typeof this.Y == 'function'
          ? (e = v.get(this.ht ?? globalThis)) == null
            ? void 0
            : e.get(this.Y)
          : (t = this.Y) == null
            ? void 0
            : t.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    }
  );
var F = Object.defineProperty,
  U = Object.getOwnPropertyDescriptor,
  L = (e, t, s, a) => {
    for (var r = a > 1 ? void 0 : a ? U(t, s) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (r = (a ? o(t, s, r) : o(r)) || r);
    return a && r && F(t, s, r), r;
  };
let g = class extends h {
  constructor() {
    super(...arguments),
      (this.getSubmenuName = (e) => e.path.split('/')[1]),
      (this.groupByFirstLevelPath = async () => {
        const e = {};
        return (
          (await k.getSiteMap()).forEach((a) => {
            const r = this.getSubmenuName(a);
            e[r] || (e[r] = []), e[r].push({ path: a.path, navtitle: this.getNavTitle(a) });
          }),
          Object.values(e).map((a) =>
            a.length === 1 ? a[0] : { navtitle: a[0].path.split('/')[1], path: a[0].path, children: a }
          )
        );
      });
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated() {
    this.items = await this.groupByFirstLevelPath();
  }
  render() {
    if (this.items)
      return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`;
  }
  toggleSubmenu({ currentTarget: e }) {
    !(e instanceof HTMLElement) || !e.classList.contains('opener') || e.classList.toggle('active');
  }
  renderSubMenu(e) {
    return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${e.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${e.children.map((t) => i`<li><a href="${t.path}">${t.navtitle}</a></li>`)}</ul>`;
  }
  renderMenuItem(e) {
    return i`<li>${e.children !== void 0 ? this.renderSubMenu(e) : i`<a href="${e.path}">${e.navtitle}</a>`}</li>`;
  }
  renderMenuItems() {
    return i`<ul>${this.items.map((e) => this.renderMenuItem(e))}</ul>`;
  }
  getNavTitle(e) {
    return e.path === '/' ? 'Homepage' : e.navtitle || e.title;
  }
};
L([f()], g.prototype, 'items', 2);
g = L([p('sidebar-nav')], g);
var z = Object.defineProperty,
  V = Object.getOwnPropertyDescriptor,
  T = (e, t, s, a) => {
    for (var r = a > 1 ? void 0 : a ? V(t, s) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (r = (a ? o(t, s, r) : o(r)) || r);
    return a && r && z(t, s, r), r;
  };
let b = class extends h {
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.fetchContactsHtml();
    this.getContactTemplateArgs(e);
  }
  async fetchContactsHtml() {
    const e = new DOMParser(),
      t = await M('contact.plain.html');
    return e.parseFromString(t, 'text/html');
  }
  renderHeader(e) {
    return e ? i`<header class="major"><h2>${e}</h2></header>` : l;
  }
  renderText(e) {
    return e ? i`<p>${e}</p>` : l;
  }
  render() {
    if (!this.contactTemplateArgs) return l;
    const { headline: e, text: t, contacts: s } = this.contactTemplateArgs;
    return i`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(s)}</section>`;
  }
  createRenderRoot() {
    return this;
  }
  renderContact(e) {
    const { icon: t, markup: s } = e;
    return !t && !s ? l : i`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(s)}</li>`;
  }
  getContactsArgs(e) {
    const t = e.querySelectorAll('.contact > div:not(:first-child)');
    return Array.from(t).map((a) => ({ icon: a.querySelector('div'), markup: a.querySelector('div:last-child') }));
  }
  getContactTemplateArgs(e) {
    const t = e.querySelector('h2'),
      s = e.querySelector('p'),
      a = this.getContactsArgs(e);
    this.contactTemplateArgs = { headline: t, text: s, contacts: a };
  }
  renderContacts(e) {
    return e.length === 0 ? l : i`<ul class="contact">${e.map((t) => this.renderContact(t))}</ul>`;
  }
  renderIcon(e) {
    return e ? i`<icon-component class="icon-component" name="${e.innerHTML}"></icon-component>` : l;
  }
  renderContactMarkup(e) {
    return e ? _(e.innerHTML) : l;
  }
};
T([f()], b.prototype, 'contactTemplateArgs', 2);
b = T([p('sidebar-contact')], b);
var W = Object.defineProperty,
  J = Object.getOwnPropertyDescriptor,
  A = (e, t, s, a) => {
    for (var r = a > 1 ? void 0 : a ? J(t, s) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (r = (a ? o(t, s, r) : o(r)) || r);
    return a && r && W(t, s, r), r;
  };
let S = class extends h {
  constructor() {
    super(), (this.sheetService = new B());
  }
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.getPosts();
    this.lastTreePosts = this.getLastThreePosts(e);
  }
  render() {
    if (this.lastTreePosts)
      return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map((e) => this.renderPost(e))}</div>`;
  }
  createRenderRoot() {
    return this;
  }
  getLastThreePosts(e) {
    return (
      e.sort((t, s) => (t.lastModified > s.lastModified ? -1 : t.lastModified < s.lastModified ? 1 : 0)), e.slice(0, 3)
    );
  }
  renderPost(e) {
    return i`<article><a href="${e.path}" class="image">${R({ src: e.image, alt: e.imagealt, width: '336', height: '224' })}</a><p>${e.description}</p></article>`;
  }
  async getPosts() {
    return (await this.sheetService.getSiteMap()).filter((t) => t.path.includes('/posts'));
  }
};
A([f()], S.prototype, 'lastTreePosts', 2);
S = A([p('sidebar-posts')], S);
var K = Object.defineProperty,
  G = Object.getOwnPropertyDescriptor,
  D = (e, t, s, a) => {
    for (var r = a > 1 ? void 0 : a ? G(t, s) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (r = (a ? o(t, s, r) : o(r)) || r);
    return a && r && K(t, s, r), r;
  };
let y = class extends h {
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchFooterData();
  }
  async fetchFooterData() {
    const e = await M('footer.plain.html'),
      t = document.createElement('div');
    (t.innerHTML = e),
      (this.footerMarkup = t.querySelector('p')),
      this.footerMarkup && this.footerMarkup.classList.add('copyright');
  }
  render() {
    if (this.footerMarkup) return i`${this.footerMarkup}`;
  }
};
D([f()], y.prototype, 'footerMarkup', 2);
y = D([p('sidebar-footer')], y);
var Q = Object.defineProperty,
  X = Object.getOwnPropertyDescriptor,
  Z = (e, t, s, a) => {
    for (var r = a > 1 ? void 0 : a ? X(t, s) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (r = (a ? o(t, s, r) : o(r)) || r);
    return a && r && Q(t, s, r), r;
  };
let $ = class extends h {
  constructor() {
    super(...arguments),
      (this.toggleRef = I()),
      (this.handleToggleClick = (e) => {
        e.preventDefault(), this.classList.toggle('active');
      });
  }
  createRenderRoot() {
    return this;
  }
  firstUpdated() {
    this.toggleRef.value.addEventListener('click', this.handleToggleClick), this.classList.add('activate-animations');
  }
  render() {
    return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${Y(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`;
  }
};
$ = Z([p('sidebar-component')], $);
function ee({ input: e, specifier: t, htmlTag: s }) {
  return e
    .split(t)
    .map((a, r) => (r % 2 === 1 ? `<${s}>${a}</${s}>` : a))
    .join('');
}
var te = Object.defineProperty,
  se = Object.getOwnPropertyDescriptor,
  O = (e, t, s, a) => {
    for (var r = a > 1 ? void 0 : a ? se(t, s) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (r = (a ? o(t, s, r) : o(r)) || r);
    return a && r && te(t, s, r), r;
  };
let w = class extends h {
  createRenderRoot() {
    return this;
  }
  async firstUpdated(e) {
    await this.fetchHeaderData();
  }
  async fetchHeaderData() {
    try {
      const e = await H('header.json');
      this.headerData = { leftCol: e.leftCol.data[0], rightCol: e.rightCol.data };
    } catch (e) {
      console.error('HeaderComponent: ', e);
    }
  }
  render() {
    if (!this.headerData) return;
    const { leftCol: e, rightCol: t } = this.headerData,
      s = ee({ input: e.logoText, htmlTag: 'strong', specifier: ':::' }),
      a = _(s);
    return i`<a href="${e.logoLink}" class="logo">${a}</a><ul class="icons">${t.map((r) => i`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}"><icon-component class="header-icon" name="${r.socialIcon}"></icon-component><span class="label">${r.socialLabel}</span></a></li>`)}</ul>`;
  }
};
O([f()], w.prototype, 'headerData', 2);
w = O([p('header-component')], w);
function m(e) {
  return typeof e == 'string'
    ? e
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
    : '';
}
class re {
  readBlockConfig(t) {
    const s = {};
    return (
      t.querySelectorAll(':scope > div').forEach((a) => {
        if (a.children) {
          const r = [...a.children];
          if (r[1]) {
            const n = r[1],
              o = m(r[0].textContent ?? '');
            let d = '';
            if (n.querySelector('a')) {
              const c = [...n.querySelectorAll('a')];
              c.length === 1 ? (d = c[0].href) : (d = c.map((u) => u.href));
            } else if (n.querySelector('img')) {
              const c = [...n.querySelectorAll('img')];
              c.length === 1 ? (d = c[0].src) : (d = c.map((u) => u.src));
            } else if (n.querySelector('p')) {
              const c = [...n.querySelectorAll('p')];
              c.length === 1 ? (d = c[0].textContent) : (d = c.map((u) => u.textContent));
            } else d = a.children[1].textContent;
            s[o] = d;
          }
        }
      }),
      s
    );
  }
  decorateBlocks(t) {
    t.querySelectorAll('div.section > div > div').forEach(this.decorateBlock);
  }
  decorateBlock(t) {
    const s = t.classList[0];
    if (s) {
      t.classList.add('block'), (t.dataset.blockName = s);
      const a = t.parentElement;
      a == null || a.classList.add(`${s}-wrapper`);
      const r = t.closest('.section');
      r && r.classList.add(`${s}-container`);
    }
  }
}
function ae(e) {
  return m(e).replace(/-([a-z])/g, (t) => t[1].toUpperCase());
}
class ne {
  constructor(t) {
    this.blockService = t;
  }
  init(t) {
    this.transformSection(t);
  }
  transformSection(t) {
    t.querySelectorAll(':scope > div').forEach((s) => {
      this.adjustMarkup(s), this.processSectionMetaData(s);
    });
  }
  processSectionMetaData(t) {
    const s = t.querySelector('div.section-metadata');
    if (s) {
      const a = this.blockService.readBlockConfig(s);
      Object.keys(a).forEach((r) => {
        r === 'style'
          ? a.style
              .split(',')
              .filter((o) => o)
              .map((o) => m(o.trim()))
              .forEach((o) => t.classList.add(o))
          : (t.dataset[ae(r)] = a[r]);
      }),
        s.parentElement && s.parentElement.remove();
    }
  }
  adjustMarkup(t) {
    const s = [];
    let a = !1;
    [...t.children].forEach((r) => {
      if (r.tagName === 'DIV' || !a) {
        const n = document.createElement('div');
        s.push(n), (a = r.tagName !== 'DIV'), a && n.classList.add('default-content-wrapper');
      }
      s[s.length - 1].append(r);
    }),
      s.forEach((r) => t.append(r)),
      this.decorateImages(),
      t.classList.add('section'),
      (t.dataset.sectionStatus = 'initialized'),
      (t.style.display = 'none');
  }
  decorateImages() {
    document.querySelectorAll('.default-content-wrapper picture').forEach((s) => {
      const a = s.parentElement;
      a && a.classList.add('image', 'main');
    });
  }
}
const C = (e, t) => {
  t.split(',').forEach((s) => {
    e.classList.add(m(s.trim()));
  });
};
function P(e, t = document) {
  const s = e && e.includes(':') ? 'property' : 'name',
    r = [...t.head.querySelectorAll(`meta[${s}="${e}"]`)].map((n) => n.content).join(', ');
  return r.length ? r : '';
}
class oe {
  constructor(t, s) {
    (this.sectionService = t),
      (this.blockService = s),
      (this.init = async () => {
        this.setup(), await this.loadEager(), this.loadLazy();
      }),
      (this.loadEager = async () => {
        if (((document.documentElement.lang = 'en'), this.decorateTemplateAndTheme(), document)) {
          const r = document.querySelector('body');
          r && (r.style.display = 'none');
        }
        const a = document.querySelector('main');
        if (a) {
          a.setAttribute('id', 'main'),
            this.addSidebarContainer(a),
            this.sectionService.init(a),
            this.addInnerContainer(a),
            this.blockService.decorateBlocks(a),
            await this.loadBlocks(),
            setTimeout(() => {
              document.body.removeAttribute('style');
            }, 100);
          try {
            (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) && this.loadFonts();
          } catch {}
        }
      }),
      (this.loadLazy = () => {
        this.loadFonts();
      }),
      (this.loadBlocks = async () => {
        document.querySelectorAll('.section').forEach(async (r) => {
          const n = this.collectBlocks(r);
          if (!n.length) {
            this.showSection(r);
            return;
          }
          await this.loadBlockModules(n), this.showSection(r);
        });
      });
  }
  setup() {
    (window.hlx = window.hlx || {}),
      (window.hlx.RUM_MASK_URL = 'full'),
      (window.hlx.codeBasePath = ''),
      (window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on');
    const t = document.querySelector('script[src$="/scripts/scripts.js"]');
    if (t)
      try {
        [window.hlx.codeBasePath] = new URL(t.src).pathname.split('/scripts/scripts.js');
      } catch (s) {
        console.log(s);
      }
  }
  addSidebarContainer(t) {
    const s = document.createElement('sidebar-component');
    s.setAttribute('id', 'sidebar'),
      window.innerWidth <= 1280 ? s.classList.remove('active') : s.classList.add('active'),
      t.after(s);
  }
  addInnerContainer(t) {
    const s = t.innerHTML;
    t.innerHTML = `<div class="inner"><header-component id="header"></header-component>${s}</div>`;
  }
  decorateTemplateAndTheme() {
    const t = P('template');
    t && C(document.body, t);
    const s = P('theme');
    s && C(document.body, s);
  }
  collectBlocks(t) {
    const s = [];
    return (
      t.querySelectorAll('[data-block-name]').forEach((r) => {
        s.push({ name: r.dataset.blockName, element: r });
      }),
      s
    );
  }
  async loadBlockModules(t) {
    for (const s of t) {
      const a = await j(() => import(`${window.hlx.codeBasePath}/dist/${s.name}/${s.name}.js`), __vite__mapDeps([]));
      a.default && (await a.default(s.element));
    }
  }
  showSection(t) {
    t.style.removeProperty('display');
  }
  async loadFonts() {
    await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);
    try {
      window.location.hostname.includes('localhost') || sessionStorage.setItem('fonts-loaded', 'true');
    } catch {}
  }
  async loadCSS(t) {
    return new Promise((s, a) => {
      if (document.querySelector(`head > link[href="${t}"]`)) s(!0);
      else {
        const r = document.createElement('link');
        (r.rel = 'stylesheet'), (r.href = t), (r.onload = s), (r.onerror = a), document.head.append(r);
      }
    });
  }
}
(async function () {
  const e = new re(),
    t = new ne(e);
  await new oe(t, e).init();
})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
//# sourceMappingURL=main.js.map
