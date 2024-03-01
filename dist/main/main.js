import { T as l, s as p, x as i } from '../__chunks__/lit-element.XkUWx5ik.js';
import { n as k, f as D, t as m, _ as j } from '../__chunks__/icon.jjSd6ARB.js';
import { e as E, o as M } from '../__chunks__/unsafe-html.U1vgpvJh.js';
import { F as g, c as I } from '../__chunks__/createOptimizedPicture.m3G7L1Pf.js';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function v(t) {
  return j({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const F = () => new z();
class z {}
const w = new WeakMap(),
  N = R(
    class extends E {
      render(t) {
        return l;
      }
      update(t, [e]) {
        var a;
        const s = e !== this.Y;
        return (
          s && this.Y !== void 0 && this.rt(void 0),
          (s || this.lt !== this.ct) &&
            ((this.Y = e), (this.ht = (a = t.options) == null ? void 0 : a.host), this.rt((this.ct = t.element))),
          l
        );
      }
      rt(t) {
        if (typeof this.Y == 'function') {
          const e = this.ht ?? globalThis;
          let s = w.get(e);
          s === void 0 && ((s = new WeakMap()), w.set(e, s)),
            s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            s.set(this.Y, t),
            t !== void 0 && this.Y.call(this.ht, t);
        } else this.Y.value = t;
      }
      get lt() {
        var t, e;
        return typeof this.Y == 'function'
          ? (t = w.get(this.ht ?? globalThis)) == null
            ? void 0
            : t.get(this.Y)
          : (e = this.Y) == null
            ? void 0
            : e.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    }
  );
var Y = Object.defineProperty,
  U = Object.getOwnPropertyDescriptor,
  k = (t, e, s, a) => {
    for (var r = a > 1 ? void 0 : a ? U(e, s) : e, n = t.length - 1, o; n >= 0; n--)
      (o = t[n]) && (r = (a ? o(e, s, r) : o(r)) || r);
    return a && r && Y(e, s, r), r;
  };
let b = class extends p {
  constructor() {
    super(...arguments),
      (this.getSubmenuName = (t) => t.path.split('/')[1]),
      (this.groupByFirstLevelPath = async () => {
        const t = {};
        return (
          (await g.fetchJson('/query-index.json')).data.forEach((a) => {
            const r = this.getSubmenuName(a);
            t[r] || (t[r] = []), t[r].push({ path: a.path, navtitle: this.getNavTitle(a) });
          }),
          Object.values(t).map((a) =>
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
  toggleSubmenu({ currentTarget: t }) {
    !(t instanceof HTMLElement) || !t.classList.contains('opener') || t.classList.toggle('active');
  }
  renderSubMenu(t) {
    return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map((e) => i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`;
  }
  renderMenuItem(t) {
    return i`<li>${t.children !== void 0 ? this.renderSubMenu(t) : i`<a href="${t.path}">${t.navtitle}</a>`}</li>`;
  }
  renderMenuItems() {
    return i`<ul>${this.items.map((t) => this.renderMenuItem(t))}</ul>`;
  }
  getNavTitle(t) {
    return t.path === '/' ? 'Homepage' : t.navtitle || t.title;
  }
};
k([v()], b.prototype, 'items', 2);
b = k([m('sidebar-nav')], b);
var W = Object.defineProperty,
  J = Object.getOwnPropertyDescriptor,
  A = (t, e, s, a) => {
    for (var r = a > 1 ? void 0 : a ? J(e, s) : e, n = t.length - 1, o; n >= 0; n--)
      (o = t[n]) && (r = (a ? o(e, s, r) : o(r)) || r);
    return a && r && W(e, s, r), r;
  };
let $ = class extends p {
  async connectedCallback() {
    super.connectedCallback();
    const t = await this.fetchContactsHtml();
    this.getContactTemplateArgs(t);
  }
  async fetchContactsHtml() {
    const t = new DOMParser(),
      e = await g.fetchText('contact.plain.html', { cacheOptions: { cacheType: 'runtime' } });
    return t.parseFromString(e, 'text/html');
  }
  renderHeader(t) {
    return t ? i`<header class="major"><h2>${t}</h2></header>` : l;
  }
  renderText(t) {
    return t ? i`<p>${t}</p>` : l;
  }
  render() {
    if (!this.contactTemplateArgs) return l;
    const { headline: t, text: e, contacts: s } = this.contactTemplateArgs;
    return i`<section>${this.renderHeader(t)} ${this.renderText(e)} ${this.renderContacts(s)}</section>`;
  }
  createRenderRoot() {
    return this;
  }
  renderContact(t) {
    const { icon: e, markup: s } = t;
    return !e && !s ? l : i`<li class="icon solid">${this.renderIcon(e)} ${this.renderContactMarkup(s)}</li>`;
  }
  getContactsArgs(t) {
    const e = t.querySelectorAll('.contact > div:not(:first-child)');
    return Array.from(e).map((a) => ({ icon: a.querySelector('div'), markup: a.querySelector('div:last-child') }));
  }
  getContactTemplateArgs(t) {
    const e = t.querySelector('h2'),
      s = t.querySelector('p'),
      a = this.getContactsArgs(t);
    this.contactTemplateArgs = { headline: e, text: s, contacts: a };
  }
  renderContacts(t) {
    return t.length === 0 ? l : i`<ul class="contact">${t.map((e) => this.renderContact(e))}</ul>`;
  }
  renderIcon(t) {
    return t ? i`<icon-component class="icon-component" name="${t.innerHTML}"></icon-component>` : l;
  }
  renderContactMarkup(t) {
    return t ? B(t.innerHTML) : l;
  }
};
A([v()], $.prototype, 'contactTemplateArgs', 2);
$ = A([m('sidebar-contact')], $);
var V = Object.defineProperty,
  K = Object.getOwnPropertyDescriptor,
  O = (t, e, s, a) => {
    for (var r = a > 1 ? void 0 : a ? K(e, s) : e, n = t.length - 1, o; n >= 0; n--)
      (o = t[n]) && (r = (a ? o(e, s, r) : o(r)) || r);
    return a && r && V(e, s, r), r;
  };
let P = class extends p {
  constructor() {
    super();
  }
  async connectedCallback() {
    super.connectedCallback();
    const t = await this.getPosts();
    this.lastTreePosts = this.getLastThreePosts(t);
  }
  render() {
    if (this.lastTreePosts)
      return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map((t) => this.renderPost(t))}</div>`;
  }
  createRenderRoot() {
    return this;
  }
  getLastThreePosts(t) {
    return (
      t.sort((e, s) => (e.lastModified > s.lastModified ? -1 : e.lastModified < s.lastModified ? 1 : 0)), t.slice(0, 3)
    );
  }
  renderPost(t) {
    return i`<article><a href="${t.path}" class="image">${H({ src: t.image, alt: t.imagealt, width: 336, height: 224 })}</a><p>${t.description}</p></article>`;
  }
  async getPosts() {
    return (await g.fetchJson('/query-index.json')).data.filter((e) => e.path.startsWith('/posts'));
  }
};
O([v()], P.prototype, 'lastTreePosts', 2);
P = O([m('sidebar-posts')], P);
var G = Object.defineProperty,
  Q = Object.getOwnPropertyDescriptor,
  q = (t, e, s, a) => {
    for (var r = a > 1 ? void 0 : a ? Q(e, s) : e, n = t.length - 1, o; n >= 0; n--)
      (o = t[n]) && (r = (a ? o(e, s, r) : o(r)) || r);
    return a && r && G(e, s, r), r;
  };
let C = class extends p {
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchFooterData();
  }
  async fetchFooterData() {
    const t = await g.fetchText('footer.plain.html', { cacheOptions: { cacheType: 'runtime' } }),
      e = document.createElement('div');
    (e.innerHTML = t),
      (this.footerMarkup = e.querySelector('p')),
      this.footerMarkup && this.footerMarkup.classList.add('copyright');
  }
  render() {
    if (this.footerMarkup) return i`${this.footerMarkup}`;
  }
};
q([v()], C.prototype, 'footerMarkup', 2);
C = q([m('sidebar-footer')], C);
var X = Object.defineProperty,
  Z = Object.getOwnPropertyDescriptor,
  ee = (t, e, s, a) => {
    for (var r = a > 1 ? void 0 : a ? Z(e, s) : e, n = t.length - 1, o; n >= 0; n--)
      (o = t[n]) && (r = (a ? o(e, s, r) : o(r)) || r);
    return a && r && X(e, s, r), r;
  };
let _ = class extends p {
  constructor() {
    super(...arguments),
      (this.toggleRef = F()),
      (this.handleToggleClick = (t) => {
        t.preventDefault(), this.classList.toggle('active');
      });
  }
  createRenderRoot() {
    return this;
  }
  firstUpdated() {
    this.toggleRef.value.addEventListener('click', this.handleToggleClick), this.classList.add('activate-animations');
  }
  render() {
    return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${N(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`;
  }
};
_ = ee([m('sidebar-component')], _);
function te({ input: t, specifier: e, htmlTag: s }) {
  return t
    .split(e)
    .map((a, r) => (r % 2 === 1 ? `<${s}>${a}</${s}>` : a))
    .join('');
}
var se = Object.defineProperty,
  ae = Object.getOwnPropertyDescriptor,
  D = (t, e, s, a) => {
    for (var r = a > 1 ? void 0 : a ? ae(e, s) : e, n = t.length - 1, o; n >= 0; n--)
      (o = t[n]) && (r = (a ? o(e, s, r) : o(r)) || r);
    return a && r && se(e, s, r), r;
  };
let L = class extends p {
  createRenderRoot() {
    return this;
  }
  async firstUpdated(t) {
    await this.fetchHeaderData();
  }
  async fetchHeaderData() {
    try {
      const t = await g.fetchJson('header.json', { cacheOptions: { cacheType: 'runtime' } });
      this.headerData = { leftCol: t.leftCol.data[0], rightCol: t.rightCol.data };
    } catch (t) {
      console.error('HeaderComponent: ', t);
    }
  }
  render() {
    if (!this.headerData) return;
    const { leftCol: t, rightCol: e } = this.headerData,
      s = te({ input: t.logoText, htmlTag: 'strong', specifier: ':::' }),
      a = B(s);
    return i`<a href="${t.logoLink}" class="logo">${a}</a><ul class="icons">${e.map((r) => i`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}"><icon-component class="header-icon" name="${r.socialIcon}"></icon-component><span class="label">${r.socialLabel}</span></a></li>`)}</ul>`;
  }
};
D([v()], L.prototype, 'headerData', 2);
L = D([m('header-component')], L);
function y(t) {
  return t
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
class re {
  readBlockConfig(e) {
    const s = {};
    return (
      e.querySelectorAll(':scope > div').forEach((a) => {
        if (a.children) {
          const r = [...a.children];
          if (r[1]) {
            const n = r[1],
              o = y(r[0].textContent ?? '');
            let d = '';
            if (n.querySelector('a')) {
              const c = [...n.querySelectorAll('a')];
              c.length === 1 ? (d = c[0].href) : (d = c.map((f) => f.href));
            } else if (n.querySelector('img')) {
              const c = [...n.querySelectorAll('img')];
              c.length === 1 ? (d = c[0].src) : (d = c.map((f) => f.src));
            } else if (n.querySelector('p')) {
              const c = [...n.querySelectorAll('p')];
              c.length === 1 ? (d = c[0].textContent) : (d = c.map((f) => f.textContent));
            } else d = a.children[1].textContent;
            s[o] = d;
          }
        }
      }),
      s
    );
  }
  decorateBlocks(e) {
    e.querySelectorAll('div.section > div > div').forEach(this.decorateBlock);
  }
  decorateBlock(e) {
    const s = e.classList[0];
    if (s) {
      e.classList.add('block'), (e.dataset.blockName = s);
      const a = e.parentElement;
      a == null || a.classList.add(`${s}-wrapper`);
      const r = e.closest('.section');
      r && r.classList.add(`${s}-container`);
    }
  }
}
function ne(t) {
  return y(t).replace(/-([a-z])/g, (e) => e[1].toUpperCase());
}
class oe {
  constructor(e) {
    this.blockService = e;
  }
  init(e) {
    this.transformSection(e);
  }
  transformSection(e) {
    e.querySelectorAll(':scope > div').forEach((s) => {
      this.adjustMarkup(s), this.processSectionMetaData(s);
    });
  }
  processSectionMetaData(e) {
    const s = e.querySelector('div.section-metadata');
    if (s) {
      const a = this.blockService.readBlockConfig(s);
      Object.keys(a).forEach((r) => {
        r === 'style'
          ? a.style
              .split(',')
              .filter((o) => o)
              .map((o) => y(o.trim()))
              .forEach((o) => e.classList.add(o))
          : (e.dataset[ne(r)] = a[r]);
      }),
        s.parentElement && s.parentElement.remove();
    }
  }
  adjustMarkup(e) {
    const s = [];
    let a = !1;
    [...e.children].forEach((r) => {
      if (r.tagName === 'DIV' || !a) {
        const n = document.createElement('div');
        s.push(n), (a = r.tagName !== 'DIV'), a && n.classList.add('default-content-wrapper');
      }
      s[s.length - 1].append(r);
    }),
      s.forEach((r) => e.append(r)),
      this.decorateImages(),
      e.classList.add('section'),
      (e.dataset.sectionStatus = 'initialized'),
      (e.style.display = 'none');
  }
  decorateImages() {
    document.querySelectorAll('.default-content-wrapper picture').forEach((s) => {
      const a = s.parentElement;
      a && a.classList.add('image', 'main');
    });
  }
}
const T = (t, e) => {
  e.split(',').forEach((s) => {
    t.classList.add(y(s.trim()));
  });
};
function M(t, e = document) {
  const s = t && t.includes(':') ? 'property' : 'name',
    r = [...e.head.querySelectorAll(`meta[${s}="${t}"]`)].map((n) => n.content).join(', ');
  return r.length ? r : '';
}
const ie = {
  mainTsPath: 'src/main.ts',
  mainScssPath: 'src/styles/sass/main.scss',
  fontsScssPath: 'src/styles/sass/fonts.scss',
  lazyStylesScssPath: 'src/styles/sass/lazy-styles.scss',
};
function x() {
  return S() ? window.parent.location : window.location;
}
const u = class u {};
(u.unloaded = 'unloaded'), (u.loading = 'loading'), (u.loaded = 'loaded'), (u.error = 'error');
let h = u;
class ce {
  constructor(e, s) {
    (this.sectionService = e),
      (this.blockService = s),
      (this.lcpBlocks = ['banner']),
      (this.init = async () => {
        this.setup(), await this.loadEager(), await this.loadLazy();
      }),
      (this.loadEager = async () => {
        (document.documentElement.lang = 'en'), this.decorateTemplateAndTheme();
        const a = document.querySelector('main');
        if (a) {
          a.setAttribute('id', 'main'),
            this.addSidebarContainer(a),
            this.sectionService.init(a),
            this.addInnerContainer(a),
            this.blockService.decorateBlocks(a),
            setTimeout(() => {
              document.body.classList.add('show');
            }, 100),
            await this.waitForLCP();
          try {
            (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) && (await this.loadFonts());
          } catch {}
        }
      }),
      (this.loadLazy = async () => {
        const { lazyStylesScssPath: a, fontsScssPath: r } = ie;
        try {
          a && (await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`)),
            r && (await this.loadFonts()),
            await this.loadBlocks();
        } catch (n) {
          console.error('Load lazy error: ', n);
        }
      }),
      (this.loadBlocks = async () => {
        const r = [...document.querySelectorAll('.section')].map((n) => this.loadBlock(n));
        await Promise.all(r);
      });
  }
  setup() {
    (window.hlx = window.hlx || {}),
      (window.hlx.RUM_MASK_URL = 'full'),
      (window.hlx.codeBasePath = ''),
      (window.hlx.lighthouse = new URLSearchParams(x().search).get('lighthouse') === 'on');
    const e = document.querySelector('script[src$="/scripts/scripts.js"]');
    if (e)
      try {
        [window.hlx.codeBasePath] = new URL(e.src).pathname.split('/scripts/scripts.js');
      } catch (s) {
        console.log(s);
      }
  }
  addSidebarContainer(e) {
    if (S()) return;
    const s = document.createElement('sidebar-component');
    s.setAttribute('id', 'sidebar'),
      window.innerWidth <= 1280 ? s.classList.remove('active') : s.classList.add('active'),
      window.innerWidth <= 1280 ? s.classList.remove('active') : s.classList.add('active'),
      e.after(s);
  }
  addInnerContainer(e) {
    const s = e.innerHTML;
    e.innerHTML = `<div class="inner">${S() ? '' : '<header-component id="header"></header-component>'}${s}</div>`;
  }
  decorateTemplateAndTheme() {
    const e = M('template');
    e && T(document.body, e);
    const s = M('theme');
    s && T(document.body, s);
  }
  collectBlocks(e) {
    const s = [];
    return (
      e.querySelectorAll('[data-block-name]').forEach((r) => {
        s.push({ name: r.dataset.blockName, element: r });
      }),
      s
    );
  }
  async loadBlockModules(e) {
    if ((e.element.dataset.blockStatus ?? h.unloaded) === h.unloaded) {
      e.element.dataset.blockStatus = h.loading;
      try {
        const a = await I(() => import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`), __vite__mapDeps([]));
        a.default && (await a.default(e.element)), (e.element.dataset.blockStatus = h.loaded);
      } catch (a) {
        (e.element.dataset.blockStatus = h.error), console.error('An error occurred during module import:', a);
      }
    }
  }
  async loadBlockStyles(e) {
    try {
      await this.loadCSS(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.css`);
    } catch {
      console.error(`problem with block '${e.name}' loading styles`);
    }
  }
  showSection(e) {
    e.style.removeProperty('display');
  }
  async loadFonts() {
    await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);
    try {
      x().hostname.includes('localhost') || sessionStorage.setItem('fonts-loaded', 'true');
    } catch {}
  }
  async loadCSS(e) {
    return new Promise((s, a) => {
      if (document.querySelector(`head > link[href="${e}"]`)) s(!0);
      else {
        const r = document.createElement('link');
        (r.rel = 'stylesheet'), (r.href = e), (r.onload = s), (r.onerror = a), document.head.append(r);
      }
    });
  }
  async waitForLCP() {
    const e = document.querySelector('.section');
    if (e) {
      const r = this.collectBlocks(e).map(async (n) => {
        this.lcpBlocks.includes(n.name) && (await this.loadBlockModules(n));
      });
      await Promise.all(r), this.showSection(e);
    }
    document.body.style.display = null;
    const s = document.querySelector('main img');
    await new Promise((a) => {
      s && !s.complete
        ? (s.setAttribute('loading', 'eager'),
          s.setAttribute('fetchpriority', 'high'),
          s.addEventListener('load', () => a()),
          s.addEventListener('error', () => a()))
        : a();
    });
  }
  async loadBlock(e) {
    const s = this.collectBlocks(e);
    if (!s.length) {
      this.showSection(e);
      return;
    }
    for (const a of s) await this.loadBlockModules(a), await this.loadBlockStyles(a);
    this.showSection(e);
  }
}
(async function () {
  const t = new re(),
    e = new oe(t);
  await new ce(e, t).init();
})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
//# sourceMappingURL=main.js.map
