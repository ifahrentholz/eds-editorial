import{u as b,f as O,w as m,i as T,s as I,x as D}from"./lit-element.XkUWx5ik.js";import{i as L,t as R,a as V,e as w}from"./unsafe-html.U1vgpvJh.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:O},k=(t=M,e,s)=>{const{kind:n,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),n==="accessor"){const{name:i}=s;return{set(c){const h=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,h,t)},init(c){return c!==void 0&&this.P(i,void 0,t),c}}}if(n==="setter"){const{name:i}=s;return function(c){const h=this[i];e.call(this,c),this.requestUpdate(i,h,t)}}throw Error("Unsupported decorator location: "+n)};function N(t){return(e,s)=>typeof s=="object"?k(t,e,s):((n,r,o)=>{const i=r.hasOwnProperty(o);return r.constructor.createProperty(o,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=t=>t===null||typeof t!="object"&&typeof t!="function",q=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const r of s)(n=r._$AO)==null||n.call(r,e,!1),u(r,e);return!0},f=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},P=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),K(e)}};function j(t){this._$AN!==void 0?(f(this),this._$AM=t,P(this)):this._$AM=t}function U(t,e=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)u(n[o],!1),f(n[o]);else n!=null&&(u(n,!1),f(n));else u(this,t)}const K=t=>{t.type==R.CHILD&&(t._$AP??(t._$AP=U),t._$AQ??(t._$AQ=j))};class X extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),P(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),s&&(u(this,e),f(this))}setValue(e){if(q(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const Y="modulepreload",Z=function(t){return"/"+t},g={},l=function(e,s,n){let r=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName("link");r=Promise.all(s.map(i=>{if(i=Z(i),i in g)return;g[i]=!0;const c=i.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const d=o[_];if(d.href===i&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${h}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":Y,c||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),c)return new Promise((_,d)=>{a.addEventListener("load",_),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends V{}v.directiveName="unsafeSVG",v.resultType=2;const z=w(v);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class B{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class H{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=t=>!x(t)&&typeof t.then=="function",C=1073741823;class F extends X{constructor(){super(...arguments),this._$Cwt=C,this._$Cbt=[],this._$CK=new B(this),this._$CX=new H}render(...e){return e.find(s=>!A(s))??m}update(e,s){const n=this._$Cbt;let r=n.length;this._$Cbt=s;const o=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const h=s[c];if(!A(h))return this._$Cwt=c,h;c<r&&h===n[c]||(this._$Cwt=C,r=0,Promise.resolve(h).then(async p=>{for(;i.get();)await i.get();const a=o.deref();if(a!==void 0){const _=a._$Cbt.indexOf(h);_>-1&&_<a._$Cwt&&(a._$Cwt=_,a.setValue(p))}}))}return m}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const G=w(F);var Q=Object.defineProperty,W=Object.getOwnPropertyDescriptor,y=(t,e,s,n)=>{for(var r=n>1?void 0:n?W(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(n?i(e,s,r):i(r))||r);return n&&r&&Q(e,s,r),r};const E=Object.assign({"/src/icons/building-storefront.svg":()=>l(()=>import("./building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chat-bubble-left-right.svg":()=>l(()=>import("./chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/chevron-down.svg":()=>l(()=>import("./chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cpu-chip.svg":()=>l(()=>import("./cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/cursor-arrow-ripple.svg":()=>l(()=>import("./cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/facebook.svg":()=>l(()=>import("./facebook.c3qibejz.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/hamburger.svg":()=>l(()=>import("./hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/instagram.svg":()=>l(()=>import("./instagram.5pWYJ5CZ.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/medium.svg":()=>l(()=>import("./medium.5st6qfsR.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/snapchat.svg":()=>l(()=>import("./snapchat.NWq1a8YO.js"),__vite__mapDeps([])).then(t=>t.default),"/src/icons/twitter.svg":()=>l(()=>import("./twitter.GXPPGxo3.js"),__vite__mapDeps([])).then(t=>t.default)});let $=class extends I{constructor(){super(...arguments),this.name=""}async getSvg(t){const e=E[`/src/icons/${t}.svg`],n=await(e!==void 0?e:E["/src/icons/cross.svg"])().catch(r=>console.error(`SVG icon: ${r.message}`));return z(n)}render(){const t=this.getSvg(this.name);return D`${G(t)}`}};$.styles=T`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;y([N({type:String})],$.prototype,"name",2);$=y([S("icon-component")],$);export{l as _,X as f,N as n,S as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icon.jjSd6ARB.js.map
