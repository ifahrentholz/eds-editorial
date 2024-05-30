import { t as I, r as f } from '../__chunks__/state.CJfvw0Ck.js';
import { i as R } from '../__chunks__/isSidekickLibraryActive.U-fJCMMj.js';
import { g as se, m as p, F as L } from '../__chunks__/fetch.service.yiMnp1FM.js';
import { _ as n } from '../__chunks__/preload-helper.D7itGvJr.js';
import { T as m, s as v, x as l, w as X, i as pe } from '../__chunks__/lit-element.CH8ciVnL.js';
import { t as y, n as fe } from '../__chunks__/property.Ds9fqW-T.js';
import { i as me, t as _e, e as j, o as oe, a as ge } from '../__chunks__/unsafe-html.C_rT9aKG.js';
import { r as x } from '../__chunks__/icon.template.3G0fuXUC.js';
import { P as g, c as ve } from '../__chunks__/createOptimizedPicture.DLZ8Nghn.js';
const K = (e, t) => {
  t.split(',').forEach((r) => {
    e.classList.add(I(r.trim()));
  });
};
function V(e, t = document) {
  const r = e && e.includes(':') ? 'property' : 'name',
    o = [...t.head.querySelectorAll(`meta[${r}="${e}"]`)].map((i) => i.content).join(', ');
  return o.length ? o : '';
}
function ye() {
  const e = V('template');
  e && K(document.body, e);
  const t = V('theme');
  t && K(document.body, t);
}
function be(e) {
  e.querySelectorAll('a').forEach((t) => {
    if (((t.title = t.title || t.textContent), t.href !== t.textContent)) {
      const r = t.parentElement,
        s = t.parentElement.parentElement;
      t.querySelector('img') ||
        (r.childNodes.length === 1 &&
          (r.tagName === 'P' || r.tagName === 'DIV') &&
          ((t.className = 'button'), r.classList.add('button-container')),
        r.childNodes.length === 1 &&
          r.tagName === 'STRONG' &&
          s.childNodes.length === 1 &&
          s.tagName === 'P' &&
          ((t.className = 'button primary'), s.classList.add('button-container')),
        r.childNodes.length === 1 &&
          r.tagName === 'EM' &&
          s.childNodes.length === 1 &&
          s.tagName === 'P' &&
          ((t.className = 'button secondary'), s.classList.add('button-container')));
    }
  });
}
function Pe(e) {
  return e.trim() === '' ? void 0 : e;
}
function we() {
  const e = V('language');
  document.documentElement.lang = Pe(e) || 'en';
}
function Le() {
  return R() ? window.parent.location : window.location;
}
async function E(e) {
  return new Promise((t, r) => {
    const { href: s } = se(e);
    if (document.querySelector(`head > link[href="${s}"]`)) t();
    else {
      const o = document.createElement('link');
      (o.rel = 'stylesheet'), (o.href = s), (o.onload = () => t()), (o.onerror = r), document.head.append(o);
    }
  });
}
const H = {
  mainTsPath: './src/main.ts',
  mainScssPath: './src/styles/sass/main.scss',
  iconsDirPath: './public/icons',
  iconsTypesPath: './src/types/icons.types.ts',
  fontsScssPath: './src/styles/sass/fonts.scss',
  fontsCssPath: './dist/fonts/fonts.css',
  lazyStylesScssPath: './src/styles/sass/lazy-styles.scss',
  lazyStylesCssPath: './dist/lazyStyles/lazyStyles.css',
  sidekickLibraryStylesScssPath: './src/styles/sass/sidekick-library-styles.scss',
  sidekickLibraryStylesCssPath: './dist/sidekickLibraryStyles/sidekickLibraryStyles.css',
  lcpBlocks: ['banner'],
};
async function W() {
  const { fontsCssPath: e } = H;
  if (e) {
    await E(e);
    try {
      Le().hostname.includes('localhost') || sessionStorage.setItem('fonts-loaded', 'true');
    } catch (t) {
      p.error('loadFonts: Error setting fonts-loaded in session storage', t);
    }
  }
}
function c(e, t = {}) {
  c.defer = c.defer || [];
  const r = (s) => {
    c[s] = c[s] || ((...o) => c.defer.push({ fnname: s, args: o }));
  };
  (c.drain =
    c.drain ||
    ((s, o) => {
      (c[s] = o), c.defer.filter(({ fnname: i }) => s === i).forEach(({ fnname: i, args: a }) => c[i](...a));
    })),
    (c.always = c.always || []),
    (c.always.on = (s, o) => {
      c.always[s] = o;
    }),
    (c.on = (s, o) => {
      c.cases[s] = o;
    }),
    r('observe'),
    r('cwv');
  try {
    if (((window.hlx = window.hlx || {}), !window.hlx.rum)) {
      const d = new URLSearchParams(window.location.search).get('rum') === 'on' ? 1 : 100,
        h = Array.from({ length: 75 }, (Z, ue) => String.fromCharCode(48 + ue))
          .filter((Z) => /\d|[A-Z]/i.test(Z))
          .filter(() => Math.random() * 75 > 70)
          .join(''),
        _ = Math.random(),
        u = _ * d < 1,
        b = Date.now(),
        he = {
          full: () => window.location.href,
          origin: () => window.location.origin,
          path: () => window.location.href.replace(/\?.*$/, ''),
        };
      window.hlx.rum = {
        weight: d,
        id: h,
        random: _,
        isSelected: u,
        firstReadTime: b,
        sampleRUM: c,
        sanitizeURL: he[window.hlx.RUM_MASK_URL || 'path'],
      };
    }
    const { weight: s, id: o, firstReadTime: i } = window.hlx.rum;
    if (window.hlx && window.hlx.rum && window.hlx.rum.isSelected) {
      const a = ['weight', 'id', 'referer', 'checkpoint', 't', 'source', 'target', 'cwv', 'CLS', 'FID', 'LCP', 'INP'],
        d = (h = t) => {
          const _ = JSON.stringify(
              { weight: s, id: o, referer: window.hlx.rum.sanitizeURL(), checkpoint: e, t: Date.now() - i, ...t },
              a
            ),
            u = `https://rum.hlx.page/.rum/${s}`;
          navigator.sendBeacon(u, _), console.debug(`ping:${e}`, h);
        };
      (c.cases = c.cases || {
        cwv: () => c.cwv(t) || !0,
        lazy: () => {
          const h = document.createElement('script');
          return (
            (h.src = 'https://rum.hlx.page/.rum/@adobe/helix-rum-enhancer@^1/src/index.js'),
            document.head.appendChild(h),
            !0
          );
        },
      }),
        d(t),
        c.cases[e] && c.cases[e]();
    }
    c.always[e] && c.always[e](t);
  } catch {}
}
function $e(e = '/dist/main/main.js') {
  (window.hlx = window.hlx || {}),
    (window.hlx.RUM_MASK_URL = 'full'),
    (window.hlx.codeBasePath = ''),
    (window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on');
  const t = document.querySelector(`script[src$="${e}"]`);
  if (t)
    try {
      [window.hlx.codeBasePath] = new URL(t.src).pathname.split(e);
    } catch (r) {
      p.log('setupHlxObj: Could not set codeBasePath.', r);
    }
}
function Ee() {
  $e(),
    c('top'),
    window.addEventListener('load', () => c('load')),
    window.addEventListener('unhandledrejection', (e) => {
      c('error', { source: e.reason.sourceURL, target: e.reason.line });
    }),
    window.addEventListener('error', (e) => {
      c('error', { source: e.filename, target: e.lineno });
    });
}
function ie(e) {
  const t = [];
  return (
    e.querySelectorAll('[data-block-name]').forEach((s) => {
      t.push({ name: s.dataset.blockName, element: s });
    }),
    t
  );
}
async function ae(e) {
  if ((e.element.dataset.blockStatus ?? 'unloaded') === 'unloaded')
    try {
      e.element.dataset.blockStatus = 'loading';
      const { href: r } = se(`dist/${e.name}/${e.name}.js`),
        s = await n(() => import(r), __vite__mapDeps([]));
      s.default && (await s.default(e.element)), (e.element.dataset.blockStatus = 'loaded');
    } catch (r) {
      (e.element.dataset.blockStatus = 'error'), p.error('loadBlockModules:', r);
    }
}
async function ne(e) {
  try {
    await E(`dist/${e.name}/${e.name}.css`);
  } catch (t) {
    p.error('loadBlockStyles: Could not load css styles.', t);
  }
}
function N(e) {
  e.style.removeProperty('display');
}
async function Ce(e) {
  const t = ie(e);
  if (!t.length) {
    N(e);
    return;
  }
  const r = [];
  for (const s of t) r.push(Promise.all([ae(s), ne(s)]));
  await Promise.all(r), N(e);
}
async function Se() {
  const t = [...document.querySelectorAll('.section')].map((r) => Ce(r));
  await Promise.all(t);
}
function Te() {
  document.querySelectorAll('.default-content-wrapper picture').forEach((t) => {
    const r = t.parentElement;
    r && r.classList.add('image', 'main');
  });
}
function Ae(e) {
  const t = [];
  let r = !1;
  [...e.children].forEach((s) => {
    if (s.tagName === 'DIV' || !r) {
      const o = document.createElement('div');
      t.push(o), (r = s.tagName !== 'DIV'), r && o.classList.add('default-content-wrapper');
    }
    t[t.length - 1].append(s);
  }),
    t.forEach((s) => e.append(s)),
    Te(),
    e.classList.add('section'),
    (e.dataset.sectionStatus = 'initialized'),
    (e.style.display = 'none');
}
function De(e) {
  return /^[a-z][A-Za-z0-9]*$/.test(e)
    ? e
    : /^[A-Z][A-Za-z0-9]*$/.test(e)
      ? e.charAt(0).toLowerCase() + e.slice(1)
      : I(e).replace(/-([a-z])/g, (t) => t[1].toUpperCase());
}
function Oe(e) {
  const t = {};
  return (
    e.querySelectorAll(':scope > div').forEach((r) => {
      if (r.children) {
        const s = [...r.children];
        if (s[1]) {
          const o = s[1],
            i = I(s[0].textContent ?? '');
          let a = '';
          if (o.querySelector('a')) {
            const d = [...o.querySelectorAll('a')];
            d.length === 1 ? (a = d[0].href) : (a = d.map((h) => h.href));
          } else if (o.querySelector('img')) {
            const d = [...o.querySelectorAll('img')];
            d.length === 1 ? (a = d[0].src) : (a = d.map((h) => h.src));
          } else if (o.querySelector('p')) {
            const d = [...o.querySelectorAll('p')];
            d.length === 1 ? (a = d[0].textContent) : (a = d.map((h) => h.textContent));
          } else a = r.children[1].textContent;
          t[i] = a;
        }
      }
    }),
    t
  );
}
function ke(e) {
  const t = e.querySelector('div.section-metadata');
  if (t) {
    const r = Oe(t);
    Object.keys(r).forEach((s) => {
      s === 'style'
        ? r.style
            .split(',')
            .filter((i) => i)
            .map((i) => I(i.trim()))
            .forEach((i) => e.classList.add(i))
        : (e.dataset[De(s)] = r[s]);
    }),
      t.parentElement && t.parentElement.remove();
  }
}
function Ie(e) {
  e.querySelectorAll(':scope > div').forEach((t) => {
    Ae(t), ke(t);
  });
}
function Re(e) {
  e.querySelectorAll('div.section > div > div').forEach((t) => {
    const r = t.classList[0];
    if (r) {
      t.classList.add('block'), (t.dataset.blockName = r);
      const s = t.parentElement;
      s == null || s.classList.add(`${r}-wrapper`);
      const o = t.closest('.section');
      o && o.classList.add(`${r}-container`);
    }
  });
}
async function xe() {
  const e = document.querySelector('.section'),
    { lcpBlocks: t } = H;
  if (e) {
    const o = ie(e).map(async (i) => {
      (t == null ? void 0 : t.includes(i.name)) && (await Promise.all([ae(i), ne(i)]));
    });
    await Promise.all(o), N(e);
  }
  document.body.style.display = null;
  const r = document.querySelector('main img');
  await new Promise((s) => {
    r && !r.complete
      ? (r.setAttribute('loading', 'eager'),
        r.setAttribute('fetchpriority', 'high'),
        r.addEventListener('load', () => s()),
        r.addEventListener('error', () => s()))
      : s();
  });
}
class ze {
  constructor() {
    (this.beforeEagerCallbacks = []),
      (this.loadEagerCallbacks = []),
      (this.beforeLoadLazyCallbacks = []),
      (this.loadLazyCallbacks = []),
      (this.beforeLoadDelayedCallbacks = []),
      (this.loadDelayedCallbacks = []),
      (this.initializedCallbacks = []);
  }
  get beforeEager() {
    return (
      this.beforeEagerPromise === void 0 && (this.beforeEagerPromise = this.beforeLoadEager()), this.beforeEagerPromise
    );
  }
  get loadEager() {
    return this.eagerPromise === void 0 && (this.eagerPromise = this.loadEagerPromise()), this.eagerPromise;
  }
  get beforeLoadLazy() {
    return (
      this.beforeLazyPromise === void 0 && (this.beforeLazyPromise = this.beforeLoadLazyPromise()),
      this.beforeLazyPromise
    );
  }
  get loadLazy() {
    return this.lazyPromise === void 0 && (this.lazyPromise = this.loadLazyPromise()), this.lazyPromise;
  }
  get beforeLoadDelayed() {
    return (
      this.beforeDelayedPromise === void 0 && (this.beforeDelayedPromise = this.beforeLoadDelayedPromise()),
      this.beforeDelayedPromise
    );
  }
  get loadDelayed() {
    return this.delayedPromise === void 0 && (this.delayedPromise = this.loadDelayedPromise()), this.delayedPromise;
  }
  get initialized() {
    return (
      this.initializedPromise === void 0 && (this.initializedPromise = this.getInitializedPromise()),
      this.initializedPromise
    );
  }
  addBeforeEagerTask(t) {
    this.beforeEagerCallbacks.push(t);
  }
  addLoadEagerTask(t) {
    this.loadEagerCallbacks.push(t);
  }
  addBeforeLoadLazyTask(t) {
    this.beforeLoadLazyCallbacks.push(t);
  }
  addLoadLazyTask(t) {
    this.loadLazyCallbacks.push(t);
  }
  addBeforeLoadDelayedTask(t) {
    this.beforeLoadDelayedCallbacks.push(t);
  }
  addLoadDelayedTask(t) {
    this.loadDelayedCallbacks.push(t);
  }
  addInitializedTask(t) {
    this.initializedCallbacks.push(t);
  }
  async init() {
    await this.beforeEager,
      await this.loadEager,
      await this.beforeLoadLazy,
      await this.loadLazy,
      await this.beforeLoadDelayed,
      await this.loadDelayed,
      await this.initialized;
  }
  async beforeLoadEager() {
    const t = new Promise((r) => {
      Ee(), ye(), we(), r();
    });
    await Promise.all([...this.beforeEagerCallbacks.map((r) => r()), t]);
  }
  async loadEagerPromise() {
    const t = new Promise(async (r) => {
      try {
        const s = document.querySelector('main');
        be(s),
          Ie(s),
          Re(s),
          setTimeout(() => {
            document.body.classList.add('show'), r();
          }, 100),
          (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) && (await W());
      } catch (s) {
        p.error('index: could not load fonts', s);
      }
    });
    await Promise.all([...this.loadEagerCallbacks.map((r) => r()), t, xe()]);
  }
  async beforeLoadLazyPromise() {
    const t = new Promise((r) => r());
    await Promise.all([...this.beforeLoadLazyCallbacks.map((r) => r()), t]);
  }
  async loadLazyPromise() {
    const t = new Promise(async (r) => {
      try {
        const {
          lazyStylesScssPath: s,
          sidekickLibraryStylesScssPath: o,
          fontsScssPath: i,
          lazyStylesCssPath: a,
          sidekickLibraryStylesCssPath: d,
        } = H;
        await Se();
        const { hash: h } = window.location,
          _ = h ? document.getElementById(h.substring(1)) : !1;
        h && _ && _.scrollIntoView(),
          s && a && (await E(a)),
          o && d && R() && (await E(d)),
          i && (await W()),
          c('lazy');
        const u = document.querySelector('main');
        c.observe(u.querySelectorAll('div[data-block-name]')), c.observe(u.querySelectorAll('picture > img'));
      } catch (s) {
        p.error('LoadLazyTask: ', s);
      }
      r();
    });
    await Promise.all([...this.loadLazyCallbacks.map((r) => r()), t]);
  }
  async beforeLoadDelayedPromise() {
    const t = new Promise((r) => r());
    await Promise.all([...this.beforeLoadDelayedCallbacks.map((r) => r()), t]);
  }
  async loadDelayedPromise() {
    const t = new Promise((r) => {
      setTimeout(() => {
        r();
      }, 3e3);
    });
    await Promise.all([...this.loadDelayedCallbacks.map((r) => r()), t]);
  }
  async getInitializedPromise() {
    const t = new Promise((r) => r());
    await Promise.all([...this.initializedCallbacks.map((r) => r()), t]);
  }
}
const C = new ze();
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Me = (e) => e === null || (typeof e != 'object' && typeof e != 'function'),
  Ve = (e) => e.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const P = (e, t) => {
    var s;
    const r = e._$AN;
    if (r === void 0) return !1;
    for (const o of r) (s = o._$AO) == null || s.call(o, t, !1), P(o, t);
    return !0;
  },
  S = (e) => {
    let t, r;
    do {
      if ((t = e._$AM) === void 0) break;
      (r = t._$AN), r.delete(e), (e = t);
    } while ((r == null ? void 0 : r.size) === 0);
  },
  ce = (e) => {
    for (let t; (t = e._$AM); e = t) {
      let r = t._$AN;
      if (r === void 0) t._$AN = r = new Set();
      else if (r.has(e)) break;
      r.add(e), je(t);
    }
  };
function Ne(e) {
  this._$AN !== void 0 ? (S(this), (this._$AM = e), ce(this)) : (this._$AM = e);
}
function qe(e, t = !1, r = 0) {
  const s = this._$AH,
    o = this._$AN;
  if (o !== void 0 && o.size !== 0)
    if (t)
      if (Array.isArray(s)) for (let i = r; i < s.length; i++) P(s[i], !1), S(s[i]);
      else s != null && (P(s, !1), S(s));
    else P(this, e);
}
const je = (e) => {
  e.type == _e.CHILD && (e._$AP ?? (e._$AP = qe), e._$AQ ?? (e._$AQ = Ne));
};
class le extends me {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(t, r, s) {
    super._$AT(t, r, s), ce(this), (this.isConnected = t._$AU);
  }
  _$AO(t, r = !0) {
    var s, o;
    t !== this.isConnected &&
      ((this.isConnected = t),
      t ? (s = this.reconnected) == null || s.call(this) : (o = this.disconnected) == null || o.call(this)),
      r && (P(this, t), S(this));
  }
  setValue(t) {
    if (Ve(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const r = [...this._$Ct._$AH];
      (r[this._$Ci] = t), this._$Ct._$AI(r, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const He = () => new Be();
let Be = class {};
const M = new WeakMap(),
  Ue = j(
    class extends le {
      render(e) {
        return m;
      }
      update(e, [t]) {
        var s;
        const r = t !== this.Y;
        return (
          r && this.Y !== void 0 && this.rt(void 0),
          (r || this.lt !== this.ct) &&
            ((this.Y = t), (this.ht = (s = e.options) == null ? void 0 : s.host), this.rt((this.ct = e.element))),
          m
        );
      }
      rt(e) {
        if (typeof this.Y == 'function') {
          const t = this.ht ?? globalThis;
          let r = M.get(t);
          r === void 0 && ((r = new WeakMap()), M.set(t, r)),
            r.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            r.set(this.Y, e),
            e !== void 0 && this.Y.call(this.ht, e);
        } else this.Y.value = e;
      }
      get lt() {
        var e, t;
        return typeof this.Y == 'function'
          ? (e = M.get(this.ht ?? globalThis)) == null
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
var Fe = Object.defineProperty,
  Ye = Object.getOwnPropertyDescriptor,
  B = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? Ye(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && Fe(t, r, o), o;
  };
let T = class extends v {
  constructor() {
    super(...arguments), (this.error = null), (this.getSubmenuName = (e) => e.path.split('/')[1]);
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated() {
    this.items = await this.groupByFirstLevelPath();
  }
  async getPlaceholder(e) {
    return await g.getPlaceHolder(e);
  }
  render() {
    if (this.error) return l`<div class="error">${this.error}</div>`;
    if (this.items)
      return l`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.items.length === 0 ? this.getPlaceholder('no menu items') : this.renderMenuItems()}</nav>`;
  }
  toggleSubmenu({ currentTarget: e }) {
    !(e instanceof HTMLElement) || !e.classList.contains('opener') || e.classList.toggle('active');
  }
  renderSubMenu(e) {
    return l`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${e.navtitle} </span>${x('chevron-down', 'submenu__icon')}</span><ul>${e.children.map((t) => l`<li><a href="${t.path}">${t.navtitle}</a></li>`)}</ul>`;
  }
  renderMenuItem(e) {
    return e.error
      ? l`<p>${e.error}</p>`
      : l`<li>${e.children !== void 0 ? this.renderSubMenu(e) : l`<a href="${e.path}">${e.navtitle}</a>`}</li>`;
  }
  renderMenuItems() {
    return l`<ul>${this.items.map((e) => this.renderMenuItem(e))}</ul>`;
  }
  getNavTitle(e) {
    return e.path === '/' ? 'Homepage' : e.navtitle || e.title;
  }
  filterNavigation(e, t) {
    return e
      .filter((r) => t.every((s) => !r.path.includes(s)))
      .map((r) => ({ path: r.path, navtitle: this.getNavTitle(r) }));
  }
  groupItemsByFirstLevelPath(e) {
    const t = {};
    return (
      e.forEach((r) => {
        const s = this.getSubmenuName(r);
        t[s] || (t[s] = []), t[s].push({ path: r.path, navtitle: this.getNavTitle(r) });
      }),
      t
    );
  }
  async groupByFirstLevelPath() {
    const e = '/query-index.json',
      t = ['sidekick', 'sidekick-library', 'tools', 'development', 'dev-', '__'];
    try {
      const r = await L.fetchJson(e);
      this.error = null;
      const s = this.filterNavigation(r.data, t),
        o = this.groupItemsByFirstLevelPath(s);
      return Object.values(o).map((a) =>
        a.length === 1 ? a[0] : { navtitle: a[0].path.split('/')[1], path: a[0].path, children: a }
      );
    } catch (r) {
      return (
        p.error(`SidebarNav Component: Error while fetching ${e}`, r),
        (this.error = await g.getPlaceHolder('error')),
        []
      );
    }
  }
};
B([f()], T.prototype, 'items', 2);
B([f()], T.prototype, 'error', 2);
T = B([y('sidebar-nav')], T);
var Ze = Object.defineProperty,
  Xe = Object.getOwnPropertyDescriptor,
  U = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? Xe(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && Ze(t, r, o), o;
  };
let A = class extends v {
  constructor() {
    super(...arguments), (this.error = null);
  }
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.fetchContactsHtml();
    e !== null && this.getContactTemplateArgs(e);
  }
  async fetchContactsHtml() {
    const e = new DOMParser(),
      t = 'contact.plain.html';
    try {
      const r = await L.fetchText(t, { cacheOptions: { cacheType: 'runtime' } });
      return (this.error = null), e.parseFromString(r, 'text/html');
    } catch (r) {
      return (
        p.error(`SidebarContacts Component: Error while fetching ${t}`, r),
        (this.error = await g.getPlaceHolder('error')),
        null
      );
    }
  }
  renderHeader(e) {
    return e ? l`<header class="major"><h2>${e}</h2></header>` : m;
  }
  renderText(e) {
    return e ? l`<p>${e}</p>` : m;
  }
  render() {
    if (this.error) return l`<div class="error">${this.error}</div>`;
    if (!this.contactTemplateArgs) return m;
    const { headline: e, text: t, contacts: r } = this.contactTemplateArgs;
    return l`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(r)}</section>`;
  }
  createRenderRoot() {
    return this;
  }
  renderContact(e) {
    const { icon: t, markup: r } = e;
    return !t && !r ? m : l`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(r)}</li>`;
  }
  getContactsArgs(e) {
    const t = e.querySelectorAll('.contact > div:not(:first-child)');
    return Array.from(t).map((s) => ({ icon: s.querySelector('div'), markup: s.querySelector('div:last-child') }));
  }
  getContactTemplateArgs(e) {
    const t = e.querySelector('h2'),
      r = e.querySelector('p'),
      s = this.getContactsArgs(e);
    this.contactTemplateArgs = { headline: t, text: r, contacts: s };
  }
  renderContacts(e) {
    return e.length === 0 ? m : l`<ul class="contact">${e.map((t) => this.renderContact(t))}</ul>`;
  }
  renderIcon(e) {
    return e ? x(e.innerHTML) : m;
  }
  renderContactMarkup(e) {
    return e ? oe(e.innerHTML) : m;
  }
};
U([f()], A.prototype, 'contactTemplateArgs', 2);
U([f()], A.prototype, 'error', 2);
A = U([y('sidebar-contact')], A);
var Ke = Object.defineProperty,
  We = Object.getOwnPropertyDescriptor,
  z = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? We(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && Ke(t, r, o), o;
  };
let w = class extends v {
  constructor() {
    super(...arguments), (this.error = null);
  }
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.getPosts();
    (this.lastTreePosts = this.getLastThreePosts(e)), (this.noPostsPlaceholder = await g.getPlaceHolder('no posts'));
  }
  render() {
    if (this.lastTreePosts) return l`${this.renderHeader()} ${this.renderPosts()}`;
  }
  createRenderRoot() {
    return this;
  }
  getLastThreePosts(e) {
    return (
      e.sort((t, r) => (t.lastModified > r.lastModified ? -1 : t.lastModified < r.lastModified ? 1 : 0)), e.slice(0, 3)
    );
  }
  renderPicture(e) {
    const t = ve({ src: e.image, alt: e.imagealt, width: 336, height: 224 });
    return t ? l`<a href="${e.path}" class="image">${t}</a>` : m;
  }
  renderPost(e) {
    return l`<article>${this.renderPicture(e)}<p>${e.description}</p></article>`;
  }
  async getPosts() {
    const e = '/query-index.json';
    try {
      return (this.error = null), (await L.fetchJson(e)).data.filter((r) => r.path.startsWith('/posts'));
    } catch (t) {
      return (
        p.error(`SidebarPost Component: Error while fetching ${e}`, t),
        (this.error = await g.getPlaceHolder('error')),
        []
      );
    }
  }
  renderPosts() {
    return this.error
      ? l`<div class="error">${this.error}</div>`
      : this.lastTreePosts.length === 0
        ? l`<div>${this.noPostsPlaceholder}</div>`
        : l`<div class="mini-posts">${this.lastTreePosts.map((e) => this.renderPost(e))}</div>`;
  }
  renderHeader() {
    return l`<header class="major"><h2>Newest Posts</h2></header>`;
  }
};
z([f()], w.prototype, 'lastTreePosts', 2);
z([f()], w.prototype, 'error', 2);
z([f()], w.prototype, 'noPostsPlaceholder', 2);
w = z([y('sidebar-posts')], w);
var Je = Object.defineProperty,
  Ge = Object.getOwnPropertyDescriptor,
  F = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? Ge(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && Je(t, r, o), o;
  };
let D = class extends v {
  constructor() {
    super(...arguments), (this.error = null);
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchFooterData();
  }
  async fetchFooterData() {
    const e = 'footer.plain.html';
    try {
      const t = await L.fetchText(e, { cacheOptions: { cacheType: 'runtime' } });
      this.error = null;
      const r = document.createElement('div');
      (r.innerHTML = t),
        (this.footerMarkup = r.querySelector('p')),
        this.footerMarkup && this.footerMarkup.classList.add('copyright');
    } catch (t) {
      p.error(`SidebarFooter Component: Error while fetching ${e}`, t), (this.error = await g.getPlaceHolder('error'));
    }
  }
  render() {
    if (this.error) return l`<div class="error">${this.error}</div>`;
    if (this.footerMarkup) return l`${this.footerMarkup}`;
  }
};
F([f()], D.prototype, 'footerMarkup', 2);
F([f()], D.prototype, 'error', 2);
D = F([y('sidebar-footer')], D);
var Qe = Object.defineProperty,
  et = Object.getOwnPropertyDescriptor,
  tt = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? et(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && Qe(t, r, o), o;
  };
let J = class extends v {
  constructor() {
    super(...arguments),
      (this.toggleRef = He()),
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
    return l`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${Ue(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle">${x('hamburger')}</a>`;
  }
};
J = tt([y('sidebar-component')], J);
const rt = () => {
  if (R()) return;
  const e = document.createElement('sidebar-component');
  e.setAttribute('id', 'sidebar'),
    window.innerWidth <= 1280 ? e.classList.remove('active') : e.classList.add('active'),
    window.innerWidth <= 1280 ? e.classList.remove('active') : e.classList.add('active');
  const t = document.getElementById('main');
  t == null || t.after(e);
};
C.addLoadEagerTask(() => (rt(), Promise.resolve()));
function st() {
  const e = document.getElementById('main');
  if (!e) return;
  const t = e.innerHTML;
  e.innerHTML = `<div class="inner">${R() ? '' : '<header-component id="header"></header-component>'}${t}</div>`;
}
C.addLoadEagerTask(() => (st(), Promise.resolve()));
function ot({ input: e, specifier: t, htmlTag: r }) {
  return t === '' || r === ''
    ? e
    : e
        .split(t)
        .map((s, o) => (o % 2 === 1 ? `<${r}>${s}</${r}>` : s))
        .join('');
}
var it = Object.defineProperty,
  at = Object.getOwnPropertyDescriptor,
  Y = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? at(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && it(t, r, o), o;
  };
let O = class extends v {
  constructor() {
    super(...arguments), (this.error = null);
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated(e) {
    await this.fetchHeaderData();
  }
  async fetchHeaderData() {
    try {
      const e = await L.fetchJson('header.json', { cacheOptions: { cacheType: 'runtime' } });
      (this.headerData = { leftCol: e.leftCol.data[0], rightCol: e.rightCol.data }), (this.error = null);
    } catch (e) {
      p.error('Header Component: Error while fetching header.json', e), (this.error = await g.getPlaceHolder('error'));
    }
  }
  render() {
    if (this.error) return l`<div class="error">${this.error}</div>`;
    if (!this.headerData) return;
    const { leftCol: e, rightCol: t } = this.headerData,
      r = ot({ input: e.logoText, htmlTag: 'strong', specifier: ':::' }),
      s = oe(r);
    return l`<a href="${e.logoLink}" class="logo">${s}</a><ul class="icons">${t.map((o) => l`<li><a href="${o.socialLink}" class="icon brands" aria-label="${o.socialLabel}">${x(o.socialIcon, 'header-icon')} <span class="label">${o.socialLabel}</span></a></li>`)}</ul>`;
  }
};
Y([f()], O.prototype, 'headerData', 2);
Y([f()], O.prototype, 'error', 2);
O = Y([y('header-component')], O);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class q extends ge {}
(q.directiveName = 'unsafeSVG'), (q.resultType = 2);
const nt = j(q);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class ct {
  constructor(t) {
    this.Y = t;
  }
  disconnect() {
    this.Y = void 0;
  }
  reconnect(t) {
    this.Y = t;
  }
  deref() {
    return this.Y;
  }
}
class lt {
  constructor() {
    (this.Z = void 0), (this.q = void 0);
  }
  get() {
    return this.Z;
  }
  pause() {
    this.Z ?? (this.Z = new Promise((t) => (this.q = t)));
  }
  resume() {
    var t;
    (t = this.q) == null || t.call(this), (this.Z = this.q = void 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const G = (e) => !Me(e) && typeof e.then == 'function',
  Q = 1073741823;
class dt extends le {
  constructor() {
    super(...arguments), (this._$Cwt = Q), (this._$Cbt = []), (this._$CK = new ct(this)), (this._$CX = new lt());
  }
  render(...t) {
    return t.find((r) => !G(r)) ?? X;
  }
  update(t, r) {
    const s = this._$Cbt;
    let o = s.length;
    this._$Cbt = r;
    const i = this._$CK,
      a = this._$CX;
    this.isConnected || this.disconnected();
    for (let d = 0; d < r.length && !(d > this._$Cwt); d++) {
      const h = r[d];
      if (!G(h)) return (this._$Cwt = d), h;
      (d < o && h === s[d]) ||
        ((this._$Cwt = Q),
        (o = 0),
        Promise.resolve(h).then(async (_) => {
          for (; a.get(); ) await a.get();
          const u = i.deref();
          if (u !== void 0) {
            const b = u._$Cbt.indexOf(h);
            b > -1 && b < u._$Cwt && ((u._$Cwt = b), u.setValue(_));
          }
        }));
    }
    return X;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
}
const ht = j(dt),
  ee = '/public/icons';
var ut = Object.defineProperty,
  pt = Object.getOwnPropertyDescriptor,
  de = (e, t, r, s) => {
    for (var o = s > 1 ? void 0 : s ? pt(t, r) : t, i = e.length - 1, a; i >= 0; i--)
      (a = e[i]) && (o = (s ? a(t, r, o) : a(o)) || o);
    return s && o && ut(t, r, o), o;
  };
const te = Object.assign({
  '/public/icons/angle-down.svg': () =>
    n(() => import('../__chunks__/angle-down.CYLyXUSW.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/angle-left.svg': () =>
    n(() => import('../__chunks__/angle-left.CuEqyOC8.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/angle-right.svg': () =>
    n(() => import('../__chunks__/angle-right.Ke48OV-s.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/angle-small-down.svg': () =>
    n(() => import('../__chunks__/angle-small-down.SNJn5nFt.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/angle-small-left.svg': () =>
    n(() => import('../__chunks__/angle-small-left.Bq32-m-s.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/angle-small-right.svg': () =>
    n(() => import('../__chunks__/angle-small-right.FYreGgDf.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/angle-up.svg': () =>
    n(() => import('../__chunks__/angle-up.D0S_oJnp.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/bolt.svg': () =>
    n(() => import('../__chunks__/bolt.BAJn0zD8.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/building-storefront.svg': () =>
    n(() => import('../__chunks__/building-storefront.Pww5r_Sc.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/chat-bubble-left-right.svg': () =>
    n(() => import('../__chunks__/chat-bubble-left-right.0PedyEPm.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/check.svg': () =>
    n(() => import('../__chunks__/check.BHPURAzV.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/chevron-down.svg': () =>
    n(() => import('../__chunks__/chevron-down.D5xOlW7p.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/clip.svg': () =>
    n(() => import('../__chunks__/clip.DAiKYXCc.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/clock.svg': () =>
    n(() => import('../__chunks__/clock.CQWyiDNK.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/cpu-chip.svg': () =>
    n(() => import('../__chunks__/cpu-chip.DbktS35z.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/cross.svg': () =>
    n(() => import('../__chunks__/cross.DjCq6kb8.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/cursor-arrow-ripple.svg': () =>
    n(() => import('../__chunks__/cursor-arrow-ripple.DHyr9er2.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/download.svg': () =>
    n(() => import('../__chunks__/download.BlSXR9C9.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/envelope.svg': () =>
    n(() => import('../__chunks__/envelope.Cc7Mhg2-.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/eye-crossed.svg': () =>
    n(() => import('../__chunks__/eye-crossed.C49v3GRJ.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/eye.svg': () =>
    n(() => import('../__chunks__/eye.Cm2FxO9V.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/facebook.svg': () =>
    n(() => import('../__chunks__/facebook.3ENFaNKU.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/globe.svg': () =>
    n(() => import('../__chunks__/globe.DIrN3GJL.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/hamburger.svg': () =>
    n(() => import('../__chunks__/hamburger.DXUzfmtf.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/heart.svg': () =>
    n(() => import('../__chunks__/heart.DSQJkyzj.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/home.svg': () =>
    n(() => import('../__chunks__/home.CfzaHiPS.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/instagram.svg': () =>
    n(() => import('../__chunks__/instagram.BBx5qXGF.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/medium.svg': () =>
    n(() => import('../__chunks__/medium.BPaQEP4K.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/menu-burger.svg': () =>
    n(() => import('../__chunks__/menu-burger.DyVjSQ0K.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/paper-plane.svg': () =>
    n(() => import('../__chunks__/paper-plane.CLiFs3FL.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/plus.svg': () =>
    n(() => import('../__chunks__/plus.DuBm-jVv.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/rocket-lunch.svg': () =>
    n(() => import('../__chunks__/rocket-lunch.C6eRDqkd.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/search.svg': () =>
    n(() => import('../__chunks__/search.CtsY1mRN.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/share.svg': () =>
    n(() => import('../__chunks__/share.D_3XZuic.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/snapchat.svg': () =>
    n(() => import('../__chunks__/snapchat.Bct5wLOa.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/social-network.svg': () =>
    n(() => import('../__chunks__/social-network.B-lhER-M.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/trash.svg': () =>
    n(() => import('../__chunks__/trash.D1jfdnTM.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/twitter.svg': () =>
    n(() => import('../__chunks__/twitter.d5w0828a.js'), __vite__mapDeps([])).then((e) => e.default),
  '/public/icons/user.svg': () =>
    n(() => import('../__chunks__/user.X8OGz61Z.js'), __vite__mapDeps([])).then((e) => e.default),
});
let k = class extends v {
  constructor() {
    super(...arguments), (this.name = '');
  }
  async getSvg(e) {
    const r = te[`${ee}/${e}.svg`] ?? te[`${ee}/cross.svg`];
    try {
      const s = await r();
      return nt(s);
    } catch (s) {
      p.error(`Icon Component: SVG icon: ${s.message}`, s);
      return;
    }
  }
  render() {
    const e = this.getSvg(this.name);
    return l`${ht(e)}`;
  }
};
k.styles = pe`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;
de([fe({ type: String })], k.prototype, 'name', 2);
k = de([y('icon-component')], k);
const $ = { interactive: 'interactive', complete: 'complete' };
function re() {
  C.addBeforeEagerTask(() => (document.getElementsByTagName('main')[0].setAttribute('id', 'main'), Promise.resolve())),
    C.init();
}
function ft() {
  document.readyState === $.interactive || document.readyState === $.complete
    ? re()
    : document.addEventListener('readystatechange', () => {
        const e = document.readyState;
        (e === $.interactive || e === $.complete) && re();
      });
}
ft();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
//# sourceMappingURL=main.js.map
