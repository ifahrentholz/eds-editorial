import { j as m, x as o } from '../__chunks__/lit-element.XkUWx5ik.js';
import { o as h } from '../__chunks__/unsafe-html.dKgBHtsI.js';
const y = (t) => {
  const { headline: i, subline: e, texts: n, buttons: a, picture: l } = t;
  return o`<div id="banner"><div class="content"><header><h1>Samu: ${i}</h1><p>${e}</p></header>${n == null ? void 0 : n.map((r) => o`<p>${r.innerText}</p>`)}<ul class="actions">${a == null ? void 0 : a.map((r) => o`<li><a href="${r.href}" class="button big">${r.innerText}</a></li>`)}</ul></div><span class="image object">${l ?? h(l)}</span></div>`;
};
function q(t) {
  var u, p;
  const i = t.querySelector('img');
  i && i.setAttribute('loading', 'eager');
  const e = t.querySelector('div'),
    n = t.children[1],
    a = (u = e == null ? void 0 : e.querySelector('h1')) == null ? void 0 : u.innerText,
    l = (p = e == null ? void 0 : e.querySelector('h3')) == null ? void 0 : p.innerText,
    r = e ? [...e.querySelectorAll('p')] : [],
    d = [...(n == null ? void 0 : n.querySelectorAll('a'))],
    c = (e == null ? void 0 : e.querySelector('picture')) || void 0,
    s = c == null ? void 0 : c.querySelector('img');
  s == null || s.setAttribute('loading', 'eager'),
    (t.innerHTML = ''),
    t.style.removeProperty('display'),
    m(y({ headline: a, subline: l, texts: r, buttons: d, picture: c }), t);
}
export { q as default };
//# sourceMappingURL=banner.js.map
