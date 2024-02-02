import { j as d, x as i } from '../__chunks__/lit-element.XkUWx5ik.js';
import { o as h } from '../__chunks__/unsafe-html.tmuruS4o.js';
const u = ({ headline: n, subline: e, texts: r, buttons: a, picture: c }) =>
  i`<section id="banner"><div class="content"><header><h1>${n}</h1><p>${e}</p></header>${r == null ? void 0 : r.map((l) => i`<p>${l.innerText}</p>`)}<ul class="actions">${a == null ? void 0 : a.map((l) => i`<li><a href="${l.href}" class="button big">${l.innerText}</a></li>`)}</ul></div><span class="image object">${c ?? h(c)}</span></section>`;
function $(n) {
  var p, s;
  const e = n.querySelector('div'),
    r = n.children[1],
    a = (p = e == null ? void 0 : e.querySelector('h1')) == null ? void 0 : p.innerText,
    c = (s = e == null ? void 0 : e.querySelector('h3')) == null ? void 0 : s.innerText,
    l = e ? [...e.querySelectorAll('p')] : [],
    o = [...(r == null ? void 0 : r.querySelectorAll('a'))],
    t = (e == null ? void 0 : e.querySelector('picture')) || void 0;
  console.log({ headline: a, subline: c, texts: l, buttons: o, picture: t }),
    (n.innerHTML = ''),
    n.style.removeProperty('display'),
    d(u({ headline: a, subline: c, texts: l, buttons: o, picture: t }), n);
}
export { $ as default };
//# sourceMappingURL=banner.js.map
