import{_ as w,a as b}from"./tslib.es6.cver2Yc4.js";import{w as p,a as I,s as O}from"./private-ssr-support.uesIj2BQ.js";import{n as T,t as L}from"./property.1qlbxKtf.js";import{e as R,a as y,i as V,t as k}from"./unsafe-html.VQc1Wq6T.js";const D="modulepreload",S=function(t){return"/"+t},g={},h=function(e,s,n){let i=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link");i=Promise.all(s.map(o=>{if(o=S(o),o in g)return;g[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!n)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":D,c||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),c)return new Promise((a,u)=>{_.addEventListener("load",a),_.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends R{}v.directiveName="unsafeSVG",v.resultType=2;const N=y(v);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=t=>t===null||typeof t!="object"&&typeof t!="function",M=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),d(i,e);return!0},f=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},P=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),X(e)}};function q(t){this._$AN!==void 0?(f(this),this._$AM=t,P(this)):this._$AM=t}function K(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let r=s;r<n.length;r++)d(n[r],!1),f(n[r]);else n!=null&&(d(n,!1),f(n));else d(this,t)}const X=t=>{t.type==k.CHILD&&(t._$AP??(t._$AP=K),t._$AQ??(t._$AQ=q))};class Y extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),P(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(d(this,e),f(this))}setValue(e){if(M(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class B{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=t=>!x(t)&&typeof t.then=="function",C=1073741823;class H extends Y{constructor(){super(...arguments),this._$Cwt=C,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new B}render(...e){return e.find(s=>!A(s))??p}update(e,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const l=s[c];if(!A(l))return this._$Cwt=c,l;c<i&&l===n[c]||(this._$Cwt=C,i=0,Promise.resolve(l).then(async m=>{for(;o.get();)await o.get();const _=r.deref();if(_!==void 0){const a=_._$Cbt.indexOf(l);a>-1&&a<_._$Cwt&&(_._$Cwt=a,_.setValue(m))}}))}return p}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const U=y(H),E=Object.assign({"/src/icons/building-storefront.svg":()=>h(()=>import("./building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chat-bubble-left-right.svg":()=>h(()=>import("./chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chevron-down.svg":()=>h(()=>import("./chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cpu-chip.svg":()=>h(()=>import("./cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cursor-arrow-ripple.svg":()=>h(()=>import("./cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/facebook.svg":()=>h(()=>import("./facebook.c3qibejz.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/hamburger.svg":()=>h(()=>import("./hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/instagram.svg":()=>h(()=>import("./instagram.5pWYJ5CZ.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/medium.svg":()=>h(()=>import("./medium.5st6qfsR.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/snapchat.svg":()=>h(()=>import("./snapchat.NWq1a8YO.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/twitter.svg":()=>h(()=>import("./twitter.GXPPGxo3.js"),__vite__mapDeps([])).then(t=>t.default)}),j=t=>t,z={h:j`<?><!--?-->`,parts:[{type:2,index:0}]};let $=class extends O{constructor(){super(...arguments),this.name=""}getSvg(e){return b(this,void 0,void 0,function*(){const s=E[`/src/icons/${e}.svg`],i=yield(s!==void 0?s:E["/src/icons/cross.svg"])().catch(r=>console.error(`SVG icon: ${r.message}`));return N(i)})}render(){const e=this.getSvg(this.name);return{_$litType$:z,values:[U(e)]}}};$.styles=I`
    :host {
      display: flex;
      align-items: center;
    }

    svg {
      width: 100%;
      height: auto;
    }
  `;w([T({type:String})],$.prototype,"name",void 0);$=w([L("icon-component")],$);export{h as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icon.A7VK-a5B.js.map
