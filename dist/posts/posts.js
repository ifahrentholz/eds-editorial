import { j as f, x as i, T as h } from '../__chunks__/lit-element.XkUWx5ik.js';
import { F as u, c as y } from '../__chunks__/createOptimizedPicture.m3G7L1Pf.js';
const d = (t) => (t ? i`<h3>${t}</h3>` : h),
  x = (t) => (t ? (t.length > 200 ? i`<p>${t.slice(0, 200)}...</p>` : i`<p>${t}</p>`) : h),
  P = (t) => {
    const { postUrl: s, headline: a, text: e, picture: o, buttontext: p } = t;
    return i`<article><a href="${s}" class="image">${o}</a> ${d(a)} ${x(e)}<ul class="actions"><li><a href="${s}" class="button">${p || 'Goto Post'}</a></li></ul></article>`;
  },
  $ = (t) => t.map((s) => P(s)),
  g = (t) => {
    var a;
    return (a = Array.from(t.querySelectorAll('p')).find((e) => e.innerText.trim().length > 0)) == null
      ? void 0
      : a.innerText;
  };
async function q(t) {
  t.innerHTML = '';
  const s = new DOMParser(),
    e = (await u.fetchJson('/query-index.json')).data.filter((r) => r.path.includes('/posts')),
    m = (
      await Promise.all(e.map((r) => u.fetchText(`${r.path}.plain.html`, { cacheOptions: { cacheType: 'runtime' } })))
    )
      .map((r) => s.parseFromString(r, 'text/html'))
      .map((r, n) => {
        var c, l;
        return {
          postUrl: `${window.hlx.codeBasePath}${e[n].path}`,
          headline:
            ((c = r.querySelector('h1')) == null ? void 0 : c.innerText) ||
            ((l = r.querySelector('h2')) == null ? void 0 : l.innerText),
          text: g(r),
          buttontext: e[n].buttontext,
          picture: y({ src: e[n].image, alt: e[n].imagealt, width: 323, height: 199 }),
        };
      });
  t.style.removeProperty('display'), f($(m), t);
}
export { q as default };
//# sourceMappingURL=posts.js.map
