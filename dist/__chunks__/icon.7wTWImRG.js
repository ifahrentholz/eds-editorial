import{_ as o}from"./preload-helper.hlDPvxQM.js";import{w as v,i as O,s as P,x as b}from"./lit-element.XkUWx5ik.js";import{n as I,t as V}from"./property.0daVBkvz.js";import{i as y,t as D,a as T,e as A}from"./unsafe-html.U1vgpvJh.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=t=>t===null||typeof t!="object"&&typeof t!="function",R=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(t,s)=>{var i;const e=t._$AN;if(e===void 0)return!1;for(const n of e)(i=n._$AO)==null||i.call(n,s,!1),u(n,s);return!0},a=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while((e==null?void 0:e.size)===0)},C=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),M(s)}};function x(t){this._$AN!==void 0?(a(this),this._$AM=t,C(this)):this._$AM=t}function N(t,s=!1,e=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(s)if(Array.isArray(i))for(let r=e;r<i.length;r++)u(i[r],!1),a(i[r]);else i!=null&&(u(i,!1),a(i));else u(this,t)}const M=t=>{t.type==D.CHILD&&(t._$AP??(t._$AP=N),t._$AQ??(t._$AQ=x))};class S extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),C(this),this.isConnected=s._$AU}_$AO(s,e=!0){var i,n;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),e&&(u(this,s),a(this))}setValue(s){if(R(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends T{}f.directiveName="unsafeSVG",f.resultType=2;const j=A(f);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class q{constructor(s){this.Y=s}disconnect(){this.Y=void 0}reconnect(s){this.Y=s}deref(){return this.Y}}class K{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(s=>this.q=s))}resume(){var s;(s=this.q)==null||s.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=t=>!L(t)&&typeof t.then=="function",m=1073741823;class X extends S{constructor(){super(...arguments),this._$Cwt=m,this._$Cbt=[],this._$CK=new q(this),this._$CX=new K}render(...s){return s.find(e=>!p(e))??v}update(s,e){const i=this._$Cbt;let n=i.length;this._$Cbt=e;const r=this._$CK,_=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<e.length&&!(c>this._$Cwt);c++){const h=e[c];if(!p(h))return this._$Cwt=c,h;c<n&&h===i[c]||(this._$Cwt=m,n=0,Promise.resolve(h).then(async w=>{for(;_.get();)await _.get();const d=r.deref();if(d!==void 0){const l=d._$Cbt.indexOf(h);l>-1&&l<d._$Cwt&&(d._$Cwt=l,d.setValue(w))}}))}return v}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Y=A(X);var Z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,E=(t,s,e,i)=>{for(var n=i>1?void 0:i?H(s,e):s,r=t.length-1,_;r>=0;r--)(_=t[r])&&(n=(i?_(s,e,n):_(n))||n);return i&&n&&Z(s,e,n),n};const g=Object.assign({"/src/icons/building-storefront.svg":()=>o(()=>import("./building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chat-bubble-left-right.svg":()=>o(()=>import("./chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chevron-down.svg":()=>o(()=>import("./chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cpu-chip.svg":()=>o(()=>import("./cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cursor-arrow-ripple.svg":()=>o(()=>import("./cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/facebook.svg":()=>o(()=>import("./facebook.c3qibejz.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/hamburger.svg":()=>o(()=>import("./hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/instagram.svg":()=>o(()=>import("./instagram.5pWYJ5CZ.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/medium.svg":()=>o(()=>import("./medium.5st6qfsR.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/snapchat.svg":()=>o(()=>import("./snapchat.NWq1a8YO.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/twitter.svg":()=>o(()=>import("./twitter.GXPPGxo3.js"),__vite__mapDeps([])).then(t=>t.default)});let $=class extends P{constructor(){super(...arguments),this.name=""}async getSvg(t){const s=g[`/src/icons/${t}.svg`],i=await(s!==void 0?s:g["/src/icons/cross.svg"])().catch(n=>console.error(`SVG icon: ${n.message}`));return j(i)}render(){const t=this.getSvg(this.name);return b`${Y(t)}`}};$.styles=O`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;E([I({type:String})],$.prototype,"name",2);$=E([V("icon-component")],$);export{S as f};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icon.7wTWImRG.js.map
