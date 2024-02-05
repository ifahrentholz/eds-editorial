import{w as v,i as O,s as E,x as f,j as b}from"../__chunks__/lit-element.XkUWx5ik.js";import{e as T,a as C,i as x,t as I,o as L}from"../__chunks__/unsafe-html.dKgBHtsI.js";import{_ as h}from"../__chunks__/preload-helper.hlDPvxQM.js";import{n as M,t as V}from"../__chunks__/property.0daVBkvz.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends T{}p.directiveName="unsafeSVG",p.resultType=2;const D=C(p);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t===null||typeof t!="object"&&typeof t!="function",S=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(t,s)=>{var n;const e=t._$AN;if(e===void 0)return!1;for(const i of e)(n=i._$AO)==null||n.call(i,s,!1),d(i,s);return!0},u=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while((e==null?void 0:e.size)===0)},w=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),j(s)}};function H(t){this._$AN!==void 0?(u(this),this._$AM=t,w(this)):this._$AM=t}function R(t,s=!1,e=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(s)if(Array.isArray(n))for(let o=e;o<n.length;o++)d(n[o],!1),u(n[o]);else n!=null&&(d(n,!1),u(n));else d(this,t)}const j=t=>{t.type==I.CHILD&&(t._$AP??(t._$AP=R),t._$AQ??(t._$AQ=H))};class q extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,n){super._$AT(s,e,n),w(this),this.isConnected=s._$AU}_$AO(s,e=!0){var n,i;s!==this.isConnected&&(this.isConnected=s,s?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),e&&(d(this,s),u(this))}setValue(s){if(S(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class K{constructor(s){this.Y=s}disconnect(){this.Y=void 0}reconnect(s){this.Y=s}deref(){return this.Y}}class X{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(s=>this.q=s))}resume(){var s;(s=this.q)==null||s.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=t=>!N(t)&&typeof t.then=="function",g=1073741823;class Y extends q{constructor(){super(...arguments),this._$Cwt=g,this._$Cbt=[],this._$CK=new K(this),this._$CX=new X}render(...s){return s.find(e=>!m(e))??v}update(s,e){const n=this._$Cbt;let i=n.length;this._$Cbt=e;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let r=0;r<e.length&&!(r>this._$Cwt);r++){const _=e[r];if(!m(_))return this._$Cwt=r,_;r<i&&_===n[r]||(this._$Cwt=g,i=0,Promise.resolve(_).then(async P=>{for(;c.get();)await c.get();const a=o.deref();if(a!==void 0){const l=a._$Cbt.indexOf(_);l>-1&&l<a._$Cwt&&(a._$Cwt=l,a.setValue(P))}}))}return v}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Z=C(Y);var z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,y=(t,s,e,n)=>{for(var i=n>1?void 0:n?B(s,e):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(n?c(s,e,i):c(i))||i);return n&&i&&z(s,e,i),i};const A=Object.assign({"/src/icons/building-storefront.svg":()=>h(()=>import("../__chunks__/building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chat-bubble-left-right.svg":()=>h(()=>import("../__chunks__/chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chevron-down.svg":()=>h(()=>import("../__chunks__/chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cpu-chip.svg":()=>h(()=>import("../__chunks__/cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cursor-arrow-ripple.svg":()=>h(()=>import("../__chunks__/cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/hamburger.svg":()=>h(()=>import("../__chunks__/hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(t=>t.default)});let $=class extends E{constructor(){super(...arguments),this.name=""}async getSvg(t){const s=A[`/src/icons/${t}.svg`],n=await(s!==void 0?s:A["/src/icons/cross.svg"])().catch(i=>console.error(`SVG icon: ${i.message}`));return D(n)}render(){const t=this.getSvg(this.name);return f`${Z(t)}`}};$.styles=O`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;y([M({type:String})],$.prototype,"name",2);$=y([V("icon-component")],$);const F=t=>f`${t.map(s=>f`<article><span class="icon"><icon-component class="icon-wc" name="${s.icon}"></icon-component></span><div class="content">${L(s.textBlock)}</div></article>`)}`;function J(t){const s=t.querySelectorAll(":scope > div");let e=[];[...s].forEach(n=>{const i=n.children[0].innerHTML,o=n.children[1].innerHTML;e.push({icon:i,textBlock:o})}),t.innerHTML="",t.style.removeProperty("display"),b(F(e),t)}export{J as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=features.js.map
