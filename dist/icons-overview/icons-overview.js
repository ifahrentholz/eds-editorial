import{_ as o}from"../__chunks__/preload-helper.hlDPvxQM.js";import{x as c,T as v,i as d,s as m,j as u}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as l,t as g}from"../__chunks__/property.0daVBkvz.js";const E=(e,i)=>c`<icon-component class="icon ${i??v}" name="${e}"></icon-component>`;var b=Object.defineProperty,T=Object.getOwnPropertyDescriptor,a=(e,i,t,s)=>{for(var r=s>1?void 0:s?T(i,t):i,_=e.length-1,p;_>=0;_--)(p=e[_])&&(r=(s?p(i,t,r):p(r))||r);return s&&r&&b(i,t,r),r};let n=class extends m{constructor(){super(...arguments),this.message="Toast default message",this.duration=10}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.close()},this.duration)}close(){this.remove()}disconnectedCallback(){super.disconnectedCallback()}render(){if(this.message)return c`<div class="toast">${this.message}</div>`}};n.styles=d`.toast{position:fixed;top:30vh;right:50vw;background-color:#fff;transform:translateX(50%);display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;z-index:1000;padding:8px 16px;border-radius:4px;box-shadow:0 0 8px rgba(0,0,0,.2)}`;a([l({type:String})],n.prototype,"message",2);a([l({type:Number})],n.prototype,"duration",2);n=a([g("toast-component")],n);const O=(e,i,t)=>{const s=new n;return s.message=e,s.duration=i,s.className=`toast-component ${t??""}`,s},P=e=>c`<span class="icon-label">${e}</span>`,I=(e,i,t)=>c`<button class="icon-container" @click="${()=>D(e,i,t)}">${E(e)} ${P(e)}</button>`,L=(e,i)=>{u(O(e,i),document.body)},D=async(e,i,t)=>{await navigator.clipboard.writeText(e),L(i,t)},A=(e,i,t)=>c`<div class="icons-overview">${e.map(s=>I(s,i,t))}</div>`,R=e=>{const i=e.children[0].children[0];return i?i.innerHTML:"Icon name copied to clipboard!"},V=e=>{const i=e.children[0].children[2];return i?Number(i.innerHTML):2e3};function w(e){const t=Object.keys(Object.assign({"/public/icons/angle-down.svg":()=>o(()=>import("../__chunks__/angle-down.qJv0ujzB.js"),__vite__mapDeps([])),"/public/icons/angle-left.svg":()=>o(()=>import("../__chunks__/angle-left.aUU3sPqp.js"),__vite__mapDeps([])),"/public/icons/angle-right.svg":()=>o(()=>import("../__chunks__/angle-right.nyOTPHVz.js"),__vite__mapDeps([])),"/public/icons/angle-small-down.svg":()=>o(()=>import("../__chunks__/angle-small-down.Hozk91Eu.js"),__vite__mapDeps([])),"/public/icons/angle-small-left.svg":()=>o(()=>import("../__chunks__/angle-small-left.5mAwXDkV.js"),__vite__mapDeps([])),"/public/icons/angle-small-right.svg":()=>o(()=>import("../__chunks__/angle-small-right.m4l7nBIj.js"),__vite__mapDeps([])),"/public/icons/angle-up.svg":()=>o(()=>import("../__chunks__/angle-up.jCC5uMFX.js"),__vite__mapDeps([])),"/public/icons/bolt.svg":()=>o(()=>import("../__chunks__/bolt.XNsO2OfP.js"),__vite__mapDeps([])),"/public/icons/check.svg":()=>o(()=>import("../__chunks__/check.c6SlPohH.js"),__vite__mapDeps([])),"/public/icons/clip.svg":()=>o(()=>import("../__chunks__/clip._IjrP05r.js"),__vite__mapDeps([])),"/public/icons/clock.svg":()=>o(()=>import("../__chunks__/clock.T8i4ClLJ.js"),__vite__mapDeps([])),"/public/icons/cross.svg":()=>o(()=>import("../__chunks__/cross.6pSzH6bR.js"),__vite__mapDeps([])),"/public/icons/download.svg":()=>o(()=>import("../__chunks__/download.j_Jolaid.js"),__vite__mapDeps([])),"/public/icons/envelope.svg":()=>o(()=>import("../__chunks__/envelope.MHN2WzZs.js"),__vite__mapDeps([])),"/public/icons/eye-crossed.svg":()=>o(()=>import("../__chunks__/eye-crossed.xMGnl8_A.js"),__vite__mapDeps([])),"/public/icons/eye.svg":()=>o(()=>import("../__chunks__/eye.y5sW2yRw.js"),__vite__mapDeps([])),"/public/icons/globe.svg":()=>o(()=>import("../__chunks__/globe.ADep-1zd.js"),__vite__mapDeps([])),"/public/icons/heart.svg":()=>o(()=>import("../__chunks__/heart.9seZlRa5.js"),__vite__mapDeps([])),"/public/icons/home.svg":()=>o(()=>import("../__chunks__/home.Zh0zH3k_.js"),__vite__mapDeps([])),"/public/icons/menu-burger.svg":()=>o(()=>import("../__chunks__/menu-burger.eBrf7Bhn.js"),__vite__mapDeps([])),"/public/icons/paper-plane.svg":()=>o(()=>import("../__chunks__/paper-plane._k1stPWN.js"),__vite__mapDeps([])),"/public/icons/plus.svg":()=>o(()=>import("../__chunks__/plus.cP-rAJdZ.js"),__vite__mapDeps([])),"/public/icons/rocket-lunch.svg":()=>o(()=>import("../__chunks__/rocket-lunch.qlZDNv2Z.js"),__vite__mapDeps([])),"/public/icons/search.svg":()=>o(()=>import("../__chunks__/search.yFI2FYeH.js"),__vite__mapDeps([])),"/public/icons/share.svg":()=>o(()=>import("../__chunks__/share.OqVUwuCJ.js"),__vite__mapDeps([])),"/public/icons/social-network.svg":()=>o(()=>import("../__chunks__/social-network.LS-WmhAQ.js"),__vite__mapDeps([])),"/public/icons/trash.svg":()=>o(()=>import("../__chunks__/trash.1MzEgCQM.js"),__vite__mapDeps([])),"/public/icons/user.svg":()=>o(()=>import("../__chunks__/user.MFDeXcKK.js"),__vite__mapDeps([]))})).map(_=>_.replace(/^.*\/(.*?)\.svg$/,"$1")),s=R(e),r=V(e);e.innerHTML="",u(A(t,s,r),e)}export{w as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icons-overview.js.map
