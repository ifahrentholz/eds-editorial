import { _ as i } from '../__chunks__/preload-helper.D7itGvJr.js';
import { j as s, x as e } from '../__chunks__/lit-element.CH8ciVnL.js';
import { r as n } from '../__chunks__/icon.template.3G0fuXUC.js';
const p = async (o, _, t) => {
    const { Toast: r } = await i(() => import('../__chunks__/toast.CVELdJDu.js'), __vite__mapDeps([0, 1, 2])),
      c = new r();
    return (c.message = o), (c.duration = _), (c.className = `toast-component ${t ?? ''}`), c;
  },
  u = (o) => e`<span class="icon-label">${o}</span>`,
  a = (o, _, t) =>
    e`<button type="button" class="icon-container" @click="${() => v(o, _, t)}">${n(o)} ${u(o)}</button>`,
  l = async (o, _) => s(await p(o, _), document.body),
  v = async (o, _, t) => {
    await navigator.clipboard.writeText(o), await l(_, t);
  },
  E = async () =>
    Object.keys(
      Object.assign({
        '/public/icons/angle-down.svg': () =>
          i(() => import('../__chunks__/angle-down.Oj3TiBgj.js'), __vite__mapDeps([])),
        '/public/icons/angle-left.svg': () =>
          i(() => import('../__chunks__/angle-left.DXfKTdnw.js'), __vite__mapDeps([])),
        '/public/icons/angle-right.svg': () =>
          i(() => import('../__chunks__/angle-right.PP9yoSHP.js'), __vite__mapDeps([])),
        '/public/icons/angle-small-down.svg': () =>
          i(() => import('../__chunks__/angle-small-down.BvvBnAgh.js'), __vite__mapDeps([])),
        '/public/icons/angle-small-left.svg': () =>
          i(() => import('../__chunks__/angle-small-left.D-QNGbds.js'), __vite__mapDeps([])),
        '/public/icons/angle-small-right.svg': () =>
          i(() => import('../__chunks__/angle-small-right.hxpyXjnC.js'), __vite__mapDeps([])),
        '/public/icons/angle-up.svg': () => i(() => import('../__chunks__/angle-up.DwKqCUdj.js'), __vite__mapDeps([])),
        '/public/icons/bolt.svg': () => i(() => import('../__chunks__/bolt.C_gHHA9y.js'), __vite__mapDeps([])),
        '/public/icons/building-storefront.svg': () =>
          i(() => import('../__chunks__/building-storefront.JqqbgJ1h.js'), __vite__mapDeps([])),
        '/public/icons/chat-bubble-left-right.svg': () =>
          i(() => import('../__chunks__/chat-bubble-left-right.DJdAEW6O.js'), __vite__mapDeps([])),
        '/public/icons/check.svg': () => i(() => import('../__chunks__/check.tBpHKVHK.js'), __vite__mapDeps([])),
        '/public/icons/chevron-down.svg': () =>
          i(() => import('../__chunks__/chevron-down.CsALxgbV.js'), __vite__mapDeps([])),
        '/public/icons/clip.svg': () => i(() => import('../__chunks__/clip.CI7iGOE7.js'), __vite__mapDeps([])),
        '/public/icons/clock.svg': () => i(() => import('../__chunks__/clock.CFvMINR5.js'), __vite__mapDeps([])),
        '/public/icons/cpu-chip.svg': () => i(() => import('../__chunks__/cpu-chip.70rPFd-9.js'), __vite__mapDeps([])),
        '/public/icons/cross.svg': () => i(() => import('../__chunks__/cross.tdOSvU_9.js'), __vite__mapDeps([])),
        '/public/icons/cursor-arrow-ripple.svg': () =>
          i(() => import('../__chunks__/cursor-arrow-ripple.BKZQNXY-.js'), __vite__mapDeps([])),
        '/public/icons/download.svg': () => i(() => import('../__chunks__/download.D0P1O3mw.js'), __vite__mapDeps([])),
        '/public/icons/envelope.svg': () => i(() => import('../__chunks__/envelope.CanLUPbv.js'), __vite__mapDeps([])),
        '/public/icons/eye-crossed.svg': () =>
          i(() => import('../__chunks__/eye-crossed.BuwdBbiU.js'), __vite__mapDeps([])),
        '/public/icons/eye.svg': () => i(() => import('../__chunks__/eye.BiVxUQA0.js'), __vite__mapDeps([])),
        '/public/icons/facebook.svg': () => i(() => import('../__chunks__/facebook.CXLf4imL.js'), __vite__mapDeps([])),
        '/public/icons/globe.svg': () => i(() => import('../__chunks__/globe.CL8EEqDs.js'), __vite__mapDeps([])),
        '/public/icons/hamburger.svg': () =>
          i(() => import('../__chunks__/hamburger.CMM0Z5X3.js'), __vite__mapDeps([])),
        '/public/icons/heart.svg': () => i(() => import('../__chunks__/heart.BO6Jws27.js'), __vite__mapDeps([])),
        '/public/icons/home.svg': () => i(() => import('../__chunks__/home.AgyN8zLU.js'), __vite__mapDeps([])),
        '/public/icons/instagram.svg': () =>
          i(() => import('../__chunks__/instagram.CJ4vqDdO.js'), __vite__mapDeps([])),
        '/public/icons/medium.svg': () => i(() => import('../__chunks__/medium.B-CLk_58.js'), __vite__mapDeps([])),
        '/public/icons/menu-burger.svg': () =>
          i(() => import('../__chunks__/menu-burger.C9jSCA0w.js'), __vite__mapDeps([])),
        '/public/icons/paper-plane.svg': () =>
          i(() => import('../__chunks__/paper-plane.CCWsmezZ.js'), __vite__mapDeps([])),
        '/public/icons/plus.svg': () => i(() => import('../__chunks__/plus.QDn7Esyk.js'), __vite__mapDeps([])),
        '/public/icons/rocket-lunch.svg': () =>
          i(() => import('../__chunks__/rocket-lunch.CXpzJq6K.js'), __vite__mapDeps([])),
        '/public/icons/search.svg': () => i(() => import('../__chunks__/search.DT5AcGiH.js'), __vite__mapDeps([])),
        '/public/icons/share.svg': () => i(() => import('../__chunks__/share.CjoNvcxO.js'), __vite__mapDeps([])),
        '/public/icons/snapchat.svg': () => i(() => import('../__chunks__/snapchat.Dpqrb3zu.js'), __vite__mapDeps([])),
        '/public/icons/social-network.svg': () =>
          i(() => import('../__chunks__/social-network.Dm-JGi74.js'), __vite__mapDeps([])),
        '/public/icons/trash.svg': () => i(() => import('../__chunks__/trash.u5-IQjNe.js'), __vite__mapDeps([])),
        '/public/icons/twitter.svg': () => i(() => import('../__chunks__/twitter.r3dS6WGA.js'), __vite__mapDeps([])),
        '/public/icons/user.svg': () => i(() => import('../__chunks__/user.B-MuBjEb.js'), __vite__mapDeps([])),
      })
    ).map((_) => _.replace(/^.*\/(.*?)\.svg$/, '$1')),
  m = (
    o,
    _,
    t
  ) => e`<p>This is a list of all icons in the project. If you click on an icon its name will be copied to the clipboard.</p><pre>
      <code> ${'<icon-component class="icon-component" name="my-icon-name"></icon-component>'} </code>
    </pre><div class="icons-overview__container">${i.map((r) => a(r, _, t))}</div>`,
  m = (i) => {
    const _ = i.children[0].children[0];
    return _ ? _.innerHTML : 'Icon name copied to clipboard!';
  },
  g = (i) => {
    const _ = i.children[0].children[2];
    return _ ? Number(_.innerHTML) : 2e3;
  },
  b = async (i) => {
    const _ = await E(),
      t = m(i),
      r = g(i);
    (i.innerHTML = ''), s(d(_, t, r), i);
  };
async function O(i) {
  await b(i);
}
export { O as default };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      '__chunks__/toast.CVELdJDu.js',
      '__chunks__/lit-element.CH8ciVnL.js',
      '__chunks__/property.Ds9fqW-T.js',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
//# sourceMappingURL=icons-overview.js.map
