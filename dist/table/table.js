import { j as s, x as o } from '../__chunks__/lit-element.CH8ciVnL.js';
import { o as n } from '../__chunks__/unsafe-html.C_rT9aKG.js';
const m = (r) => {
  const { headers: e, data: a } = r;
  return o`<div class="table-wrapper"><table><thead><tr>${e.map((t) => o`<th>${n(t)}</th>`)}</tr></thead><tbody>${a.map((t) => o`<tr>${t.map((d) => o`<td>${n(d)}</td>`)}</tr>`)}</tbody></table></div>`;
};
function h(r) {
  const e = [],
    a = [];
  [...r.children].forEach((t, d) => {
    d === 0
      ? e.push(...Array.from(t.querySelectorAll('div')).map((p) => p.innerHTML))
      : a.push(Array.from(t.querySelectorAll('div')).map((p) => p.innerHTML));
  }),
    (r.innerHTML = ''),
    r.style.removeProperty('display'),
    s(m({ headers: e, data: a }), r);
}
export { h as default };
//# sourceMappingURL=table.js.map
