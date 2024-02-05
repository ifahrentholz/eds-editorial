import{w as g,i as b,s as O,x as I}from"./lit-element.XkUWx5ik.js";import{n as S,t as L}from"./property.0daVBkvz.js";import{e as R,a as y,i as T,t as V}from"./unsafe-html.dKgBHtsI.js";const D="modulepreload",N=function(t){return"/"+t},p={},_=function(e,s,n){let r=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName("link");r=Promise.all(s.map(i=>{if(i=N(i),i in p)return;p[i]=!0;const c=i.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(!!n)for(let l=o.length-1;l>=0;l--){const d=o[l];if(d.href===i&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":D,c||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),c)return new Promise((l,d)=>{h.addEventListener("load",l),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends R{}v.directiveName="unsafeSVG",v.resultType=2;const x=y(v);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=t=>t===null||typeof t!="object"&&typeof t!="function",M=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const r of s)(n=r._$AO)==null||n.call(r,e,!1),u(r,e);return!0},$=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},E=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),K(e)}};function q(t){this._$AN!==void 0?($(this),this._$AM=t,E(this)):this._$AM=t}function j(t,e=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)u(n[o],!1),$(n[o]);else n!=null&&(u(n,!1),$(n));else u(this,t)}const K=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=j),t._$AQ??(t._$AQ=q))};class X extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),E(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),s&&(u(this,e),$(this))}setValue(e){if(M(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Y{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class Z{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>!k(t)&&typeof t.then=="function",A=1073741823;class B extends X{constructor(){super(...arguments),this._$Cwt=A,this._$Cbt=[],this._$CK=new Y(this),this._$CX=new Z}render(...e){return e.find(s=>!C(s))??g}update(e,s){const n=this._$Cbt;let r=n.length;this._$Cbt=s;const o=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const a=s[c];if(!C(a))return this._$Cwt=c,a;c<r&&a===n[c]||(this._$Cwt=A,r=0,Promise.resolve(a).then(async m=>{for(;i.get();)await i.get();const h=o.deref();if(h!==void 0){const l=h._$Cbt.indexOf(a);l>-1&&l<h._$Cwt&&(h._$Cwt=l,h.setValue(m))}}))}return g}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const H=y(B);var U=Object.defineProperty,z=Object.getOwnPropertyDescriptor,P=(t,e,s,n)=>{for(var r=n>1?void 0:n?z(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(n?i(e,s,r):i(r))||r);return n&&r&&U(e,s,r),r};const w=Object.assign({"/src/icons/building-storefront.svg":()=>_(()=>import("./building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chat-bubble-left-right.svg":()=>_(()=>import("./chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chevron-down.svg":()=>_(()=>import("./chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cpu-chip.svg":()=>_(()=>import("./cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cursor-arrow-ripple.svg":()=>_(()=>import("./cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/hamburger.svg":()=>_(()=>import("./hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(t=>t.default)});let f=class extends O{constructor(){super(...arguments),this.name=""}async getSvg(t){const e=w[`/src/icons/${t}.svg`],s=e!==void 0?e:w["/src/icons/cross.svg"];console.log("🚀 ~ Icon ~ getSvg ~ key:",e);const n=await s().catch(r=>console.error(`SVG icon: ${r.message}`));return x(n)}render(){const t=this.getSvg(this.name);return I`${H(t)}`}};f.styles=b`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;P([S({type:String})],f.prototype,"name",2);f=P([L("icon-component")],f);export{_};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icon.tfEDDx5q.js.map
