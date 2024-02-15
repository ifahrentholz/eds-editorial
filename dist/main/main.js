import { s as u, x as i, T as h } from '../__chunks__/lit-element.XkUWx5ik.js';
import { n as x, t as p } from '../__chunks__/property.0daVBkvz.js';
import { _ as E } from '../__chunks__/icon.PS61ZRz5.js';
import { S as q, f as _, a as k, c as B, b as R } from '../__chunks__/createOptimizedPicture.pKR_EfYz.js';
import { o as M } from '../__chunks__/unsafe-html.dKgBHtsI.js';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function f(e) {
  return x({ ...e, state: !0, attribute: !1 });
}
/**
 */ function f(e) {
  return x({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ = (e, t, r) => (
  (r.configurable = !0),
  (r.enumerable = !0),
  Reflect.decorate && typeof t != 'object' && Object.defineProperty(e, t, r),
  r
);
/**
 */ const $ = (e, t, r) => (
  (r.configurable = !0),
  (r.enumerable = !0),
  Reflect.decorate && typeof t != 'object' && Object.defineProperty(e, t, r),
  r
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function H(e, t) {
  return (r, a, s) => {
    const n = (o) => {
      var l;
      return ((l = o.renderRoot) == null ? void 0 : l.querySelector(e)) ?? null;
    };
    if (t) {
      const { get: o, set: l } =
        typeof a == 'object'
          ? r
          : s ??
            (() => {
              const c = Symbol();
              return {
                get() {
                  return this[c];
                },
                set(d) {
                  this[c] = d;
                },
              };
            })();
      return $(r, a, {
        get() {
          let c = o.call(this);
          return c === void 0 && ((c = n(this)), (c !== null || this.hasUpdated) && l.call(this, c)), c;
        },
      });
    }
    return $(r, a, {
      get() {
        return n(this);
      },
    });
  };
}
var I = Object.defineProperty,
  N = Object.getOwnPropertyDescriptor,
  L = (e, t, r, a) => {
    for (var s = a > 1 ? void 0 : a ? N(t, r) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (s = (a ? o(t, r, s) : o(s)) || s);
    return a && s && I(t, r, s), s;
  };
let g = class extends u {
  constructor() {
    super(...arguments),
      (this.getSubmenuName = (e) => e.path.split('/')[1]),
      (this.groupByFirstLevelPath = async () => {
        const e = {};
        return (
          (await q.getSiteMap()).forEach((a) => {
            const s = this.getSubmenuName(a);
            e[s] || (e[s] = []), e[s].push({ path: a.path, navtitle: this.getNavTitle(a) });
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
var F = Object.defineProperty,
  U = Object.getOwnPropertyDescriptor,
  T = (e, t, r, a) => {
    for (var s = a > 1 ? void 0 : a ? U(t, r) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (s = (a ? o(t, r, s) : o(s)) || s);
    return a && s && F(t, r, s), s;
  };
let v = class extends u {
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.fetchContactsHtml();
    this.getContactTemplateArgs(e);
  }
  async fetchContactsHtml() {
    const e = new DOMParser(),
      t = await _('contact.plain.html');
    return e.parseFromString(t, 'text/html');
  }
  renderHeader(e) {
    return e ? i`<header class="major"><h2>${e}</h2></header>` : h;
  }
  renderText(e) {
    return e ? i`<p>${e}</p>` : h;
  }
  render() {
    if (!this.contactTemplateArgs) return h;
    const { headline: e, text: t, contacts: r } = this.contactTemplateArgs;
    return i`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(r)}</section>`;
  }
  createRenderRoot() {
    return this;
  }
  renderContact(e) {
    const { icon: t, markup: r } = e;
    return !t && !r ? h : i`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(r)}</li>`;
  }
  getContactsArgs(e) {
    const t = e.querySelectorAll('.contact > div:not(:first-child)');
    return Array.from(t).map((a) => ({ icon: a.querySelector('div'), markup: a.querySelector('div:last-child') }));
  }
  getContactTemplateArgs(e) {
    const t = e.querySelector('h2'),
      r = e.querySelector('p'),
      a = this.getContactsArgs(e);
    this.contactTemplateArgs = { headline: t, text: r, contacts: a };
  }
  renderContacts(e) {
    return e.length === 0 ? h : i`<ul class="contact">${e.map((t) => this.renderContact(t))}</ul>`;
  }
  renderIcon(e) {
    return e ? i`<icon-component class="icon-component" name="${e.innerHTML}"></icon-component>` : h;
  }
  renderContactMarkup(e) {
    return e ? M(e.innerHTML) : h;
  }
};
T([f()], v.prototype, 'contactTemplateArgs', 2);
v = T([p('sidebar-contact')], v);
var z = Object.defineProperty,
  V = Object.getOwnPropertyDescriptor,
  O = (e, t, r, a) => {
    for (var s = a > 1 ? void 0 : a ? V(t, r) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (s = (a ? o(t, r, s) : o(s)) || s);
    return a && s && z(t, r, s), s;
  };
let b = class extends u {
  constructor() {
    super(), (this.sheetService = new k());
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
      e.sort((t, r) => (t.lastModified > r.lastModified ? -1 : t.lastModified < r.lastModified ? 1 : 0)), e.slice(0, 3)
    );
  }
  renderPost(e) {
    return i`<article><a href="${e.path}" class="image">${B({ src: e.image, alt: e.imagealt, width: '336', height: '224' })}</a><p>${e.description}</p></article>`;
  }
  async getPosts() {
    return (await this.sheetService.getSiteMap()).filter((t) => t.path.includes('/posts'));
  }
};
O([f()], b.prototype, 'lastTreePosts', 2);
b = O([p('sidebar-posts')], b);
var J = Object.defineProperty,
  K = Object.getOwnPropertyDescriptor,
  A = (e, t, r, a) => {
    for (var s = a > 1 ? void 0 : a ? K(t, r) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (s = (a ? o(t, r, s) : o(s)) || s);
    return a && s && J(t, r, s), s;
  };
let y = class extends u {
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchFooterData();
  }
  async fetchFooterData() {
    const e = await _('footer.plain.html'),
      t = document.createElement('div');
    (t.innerHTML = e),
      (this.footerMarkup = t.querySelector('p')),
      this.footerMarkup && this.footerMarkup.classList.add('copyright');
  }
  render() {
    if (this.footerMarkup) return i`${this.footerMarkup}`;
  }
};
A([f()], y.prototype, 'footerMarkup', 2);
y = A([p('sidebar-footer')], y);
var W = Object.defineProperty,
  G = Object.getOwnPropertyDescriptor,
  D = (e, t, r, a) => {
    for (var s = a > 1 ? void 0 : a ? G(t, r) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (s = (a ? o(t, r, s) : o(s)) || s);
    return a && s && W(t, r, s), s;
  };
let S = class extends u {
  constructor() {
    super(...arguments),
      (this.handleToggleClick = (e) => {
        e.preventDefault(), this.classList.toggle('active');
      });
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    this.toggle.addEventListener('click', this.handleToggleClick);
  }
  render() {
    return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`;
  }
};
D([H('.toggle')], S.prototype, 'toggle', 2);
S = D([p('sidebar-component')], S);
function Q({ input: e, specifier: t, htmlTag: r }) {
  return e
    .split(t)
    .map((a, s) => (s % 2 === 1 ? `<${r}>${a}</${r}>` : a))
    .join('');
}
var X = Object.defineProperty,
  Y = Object.getOwnPropertyDescriptor,
  j = (e, t, r, a) => {
    for (var s = a > 1 ? void 0 : a ? Y(t, r) : t, n = e.length - 1, o; n >= 0; n--)
      (o = e[n]) && (s = (a ? o(t, r, s) : o(s)) || s);
    return a && s && X(t, r, s), s;
  };
let w = class extends u {
  createRenderRoot() {
    return this;
  }
  async firstUpdated(e) {
    await this.fetchHeaderData();
  }
  async fetchHeaderData() {
    try {
      const e = await R('header.json');
      this.headerData = { leftCol: e.leftCol.data[0], rightCol: e.rightCol.data };
    } catch (e) {
      console.error('HeaderComponent: ', e);
    }
  }
  render() {
    if (!this.headerData) return;
    const { leftCol: e, rightCol: t } = this.headerData,
      r = Q({ input: e.logoText, htmlTag: 'strong', specifier: ':::' }),
      a = M(r);
    return i`<a href="${e.logoLink}" class="logo">${a}</a><ul class="icons">${t.map((s) => i`<li><a href="${s.socialLink}" class="icon brands" aria-label="${s.socialLabel}"><icon-component class="header-icon" name="${s.socialIcon}"></icon-component><span class="label">${s.socialLabel}</span></a></li>`)}</ul>`;
  }
};
j([f()], w.prototype, 'headerData', 2);
w = j([p('header-component')], w);
function m(e) {
  return typeof e == 'string'
    ? e
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
    : '';
}
class Z {
  readBlockConfig(t) {
    const r = {};
    return (
      t.querySelectorAll(':scope > div').forEach((a) => {
        if (a.children) {
          const s = [...a.children];
          if (s[1]) {
            const n = s[1],
              o = m(s[0].textContent ?? '');
            let l = '';
            if (n.querySelector('a')) {
              const c = [...n.querySelectorAll('a')];
              c.length === 1 ? (l = c[0].href) : (l = c.map((d) => d.href));
            } else if (n.querySelector('img')) {
              const c = [...n.querySelectorAll('img')];
              c.length === 1 ? (l = c[0].src) : (l = c.map((d) => d.src));
            } else if (n.querySelector('p')) {
              const c = [...n.querySelectorAll('p')];
              c.length === 1 ? (l = c[0].textContent) : (l = c.map((d) => d.textContent));
            } else l = a.children[1].textContent;
            r[o] = l;
          }
        }
      }),
      r
    );
  }
  decorateBlocks(t) {
    t.querySelectorAll('div.section > div > div').forEach(this.decorateBlock);
  }
  decorateBlock(t) {
    const r = t.classList[0];
    if (r) {
      t.classList.add('block'), (t.dataset.blockName = r);
      const a = t.parentElement;
      a == null || a.classList.add(`${r}-wrapper`);
      const s = t.closest('.section');
      s && s.classList.add(`${r}-container`);
    }
  }
}
function ee(e) {
  return m(e).replace(/-([a-z])/g, (t) => t[1].toUpperCase());
}
class te {
  constructor(t) {
    this.blockService = t;
  }
  init(t) {
    this.transformSection(t);
  }
  transformSection(t) {
    t.querySelectorAll(':scope > div').forEach((r) => {
      this.adjustMarkup(r), this.processSectionMetaData(r);
    });
  }
  processSectionMetaData(t) {
    const r = t.querySelector('div.section-metadata');
    if (r) {
      const a = this.blockService.readBlockConfig(r);
      Object.keys(a).forEach((s) => {
        s === 'style'
          ? a.style
              .split(',')
              .filter((o) => o)
              .map((o) => m(o.trim()))
              .forEach((o) => t.classList.add(o))
          : (t.dataset[ee(s)] = a[s]);
      }),
        r.parentElement && r.parentElement.remove();
    }
  }
  adjustMarkup(t) {
    const r = [];
    let a = !1;
    [...t.children].forEach((s) => {
      if (s.tagName === 'DIV' || !a) {
        const n = document.createElement('div');
        r.push(n), (a = s.tagName !== 'DIV'), a && n.classList.add('default-content-wrapper');
      }
      r[r.length - 1].append(s);
    }),
      r.forEach((s) => t.append(s)),
      this.decorateImages(),
      t.classList.add('section'),
      (t.dataset.sectionStatus = 'initialized'),
      (t.style.display = 'none');
  }
  decorateImages() {
    document.querySelectorAll('.default-content-wrapper picture').forEach((r) => {
      const a = r.parentElement;
      a && a.classList.add('image', 'main');
    });
  }
}
const C = (e, t) => {
  t.split(',').forEach((r) => {
    e.classList.add(m(r.trim()));
  });
};
function P(e, t = document) {
  const r = e && e.includes(':') ? 'property' : 'name',
    s = [...t.head.querySelectorAll(`meta[${r}="${e}"]`)].map((n) => n.content).join(', ');
  return s.length ? s : '';
}
class re {
  constructor(t, r) {
    (this.sectionService = t),
      (this.blockService = r),
      (this.init = async () => {
        this.setup(), await this.loadEager(), this.loadLazy();
      }),
      (this.loadEager = async () => {
        if (((document.documentElement.lang = 'en'), this.decorateTemplateAndTheme(), document)) {
          const s = document.querySelector('body');
          s && (s.style.display = 'none');
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
            }, 200);
          try {
            (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) && this.loadFonts();
          } catch {}
        }
      }),
      (this.loadLazy = () => {
        this.loadFonts();
      }),
      (this.loadBlocks = async () => {
        document.querySelectorAll('.section').forEach(async (s) => {
          const n = this.collectBlocks(s);
          if (!n.length) {
            this.showSection(s);
            return;
          }
          await this.loadBlockModules(n), this.showSection(s);
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
      } catch (r) {
        console.log(r);
      }
  }
  addSidebarContainer(t) {
    const r = document.createElement('sidebar-component');
    r.setAttribute('id', 'sidebar'),
      window.innerWidth <= 1280 ? r.classList.add('inactive') : r.classList.remove('inactive'),
      t.after(r);
  }
  addInnerContainer(t) {
    const r = t.innerHTML;
    t.innerHTML = `<div class="inner"><header-component id="header"></header-component>${r}</div>`;
  }
  decorateTemplateAndTheme() {
    const t = P('template');
    t && C(document.body, t);
    const r = P('theme');
    r && C(document.body, r);
  }
  collectBlocks(t) {
    const r = [];
    return (
      t.querySelectorAll('[data-block-name]').forEach((s) => {
        r.push({ name: s.dataset.blockName, element: s });
      }),
      r
    );
  }
  async loadBlockModules(t) {
    for (const r of t) {
      const a = await E(() => import(`${window.hlx.codeBasePath}/dist/${r.name}/${r.name}.js`), __vite__mapDeps([]));
      a.default && (await a.default(r.element));
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
    return new Promise((r, a) => {
      if (document.querySelector(`head > link[href="${t}"]`)) r(!0);
      else {
        const s = document.createElement('link');
        (s.rel = 'stylesheet'), (s.href = t), (s.onload = r), (s.onerror = a), document.head.append(s);
      }
    });
  }
}
(async function () {
  const e = new Z(),
    t = new te(e);
  await new re(t, e).init();
})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
//# sourceMappingURL=main.js.map
