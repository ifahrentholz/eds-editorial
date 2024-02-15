import { j as h, x as i, T as m } from '../__chunks__/lit-element.XkUWx5ik.js';
import { S as f, f as P, c as $ } from '../__chunks__/createOptimizedPicture.pKR_EfYz.js';
const g = (t) => (t ? i`<h3>${t}</h3>` : m),
  w = (t) => (t ? (t.length > 200 ? i`<p>${t.slice(0, 200)}...</p>` : i`<p>${t}</p>`) : m),
  y = (t) => {
    const { postUrl: a, headline: s, text: e, picture: p, buttontext: o } = t;
    return i`<article><a href="${a}" class="image">${p}</a> ${g(s)} ${w(e)}<ul class="actions"><li><a href="${a}" class="button">${o || 'Goto Post'}</a></li></ul></article>`;
  },
  x = (t) => t.map((a) => y(a)),
  T = (t) => {
    var s;
    return (s = Array.from(t.querySelectorAll('p')).find((e) => e.innerText.trim().length > 0)) == null
      ? void 0
      : s.innerText;
  };
async function v(t) {
  t.innerHTML = '';
  const a = new DOMParser(),
    e = (await f.getSiteMap()).filter((r) => r.path.includes('/posts')),
    u = (await Promise.all(e.map(async (r) => await P(`${r.path}.plain.html`))))
      .map((r) => a.parseFromString(r, 'text/html'))
      .map((r, n) => {
        var l, c;
        return {
          postUrl: `${window.hlx.codeBasePath}${e[n].path}`,
          headline:
            ((l = r.querySelector('h1')) == null ? void 0 : l.innerText) ||
            ((c = r.querySelector('h2')) == null ? void 0 : c.innerText),
          text: T(r),
          buttontext: e[n].buttontext,
          picture: $({ src: e[n].image, alt: e[n].imagealt, width: '323', height: '199' }),
        };
      });
  t.style.removeProperty('display'), h(x(u), t);
}
export { v as default };
//# sourceMappingURL=posts.js.map
