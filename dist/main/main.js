import{T as h,s as _,x as c,w as R,i as G}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as N,t as f}from"../__chunks__/property.0daVBkvz.js";import{i as Q,t as ee,e as I,o as H,a as te}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{F as b,c as se}from"../__chunks__/createOptimizedPicture.m3G7L1Pf.js";import{r as Y,_ as i}from"../__chunks__/preload-helper.tte_Lfgc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(e){return N({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=e=>e===null||typeof e!="object"&&typeof e!="function",re=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=(e,t)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const r of s)(o=r._$AO)==null||o.call(r,t,!1),g(r,t);return!0},y=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},F=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ae(t)}};function ne(e){this._$AN!==void 0?(y(this),this._$AM=e,F(this)):this._$AM=e}function ie(e,t=!1,s=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let n=s;n<o.length;n++)g(o[n],!1),y(o[n]);else o!=null&&(g(o,!1),y(o));else g(this,e)}const ae=e=>{e.type==ee.CHILD&&(e._$AP??(e._$AP=ie),e._$AQ??(e._$AQ=ne))};class z extends Q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),F(this),this.isConnected=t._$AU}_$AO(t,s=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),s&&(g(this,t),y(this))}setValue(t){if(re(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=()=>new le;let le=class{};const A=new WeakMap,de=I(class extends z{render(e){return h}update(e,[t]){var o;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),h}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let s=A.get(t);s===void 0&&(s=new WeakMap,A.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=A.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var he=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,U=(e,t,s,o)=>{for(var r=o>1?void 0:o?ue(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&he(t,s,r),r};let S=class extends _{constructor(){super(...arguments),this.getSubmenuName=e=>e.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const e={};return(await b.fetchJson("/query-index.json")).data.forEach(o=>{const r=this.getSubmenuName(o);e[r]||(e[r]=[]),e[r].push({path:o.path,navtitle:this.getNavTitle(o)})}),Object.values(e).map(o=>o.length===1?o[0]:{navtitle:o[0].path.split("/")[1],path:o[0].path,children:o})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return c`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:e}){!(e instanceof HTMLElement)||!e.classList.contains("opener")||e.classList.toggle("active")}renderSubMenu(e){return c`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${e.navtitle} </span>${Y("chevron-down","submenu__icon")}<icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${e.children.map(t=>c`<li><a href="${t.path}">${t.navtitle}</a></li>`)}</ul>`}renderMenuItem(e){return c`<li>${e.children!==void 0?this.renderSubMenu(e):c`<a href="${e.path}">${e.navtitle}</a>`}</li>`}renderMenuItems(){return c`<ul>${this.items.map(e=>this.renderMenuItem(e))}</ul>`}getNavTitle(e){return e.path==="/"?"Homepage":e.navtitle||e.title}};U([$()],S.prototype,"items",2);S=U([f("sidebar-nav")],S);var pe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,K=(e,t,s,o)=>{for(var r=o>1?void 0:o?_e(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&pe(t,s,r),r};let C=class extends _{async connectedCallback(){super.connectedCallback();const e=await this.fetchContactsHtml();this.getContactTemplateArgs(e)}async fetchContactsHtml(){const e=new DOMParser,t=await b.fetchText("contact.plain.html",{cacheOptions:{cacheType:"runtime"}});return e.parseFromString(t,"text/html")}renderHeader(e){return e?c`<header class="major"><h2>${e}</h2></header>`:h}renderText(e){return e?c`<p>${e}</p>`:h}render(){if(!this.contactTemplateArgs)return h;const{headline:e,text:t,contacts:s}=this.contactTemplateArgs;return c`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(e){const{icon:t,markup:s}=e;return!t&&!s?h:c`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(e){const t=e.querySelectorAll(".contact > div:not(:first-child)");return Array.from(t).map(o=>({icon:o.querySelector("div"),markup:o.querySelector("div:last-child")}))}getContactTemplateArgs(e){const t=e.querySelector("h2"),s=e.querySelector("p"),o=this.getContactsArgs(e);this.contactTemplateArgs={headline:t,text:s,contacts:o}}renderContacts(e){return e.length===0?h:c`<ul class="contact">${e.map(t=>this.renderContact(t))}</ul>`}renderIcon(e){return e?c`<icon-component class="icon-component" name="${e.innerHTML}"></icon-component>`:h}renderContactMarkup(e){return e?H(e.innerHTML):h}};K([$()],C.prototype,"contactTemplateArgs",2);C=K([f("sidebar-contact")],C);var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,W=(e,t,s,o)=>{for(var r=o>1?void 0:o?me(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&fe(t,s,r),r};let L=class extends _{constructor(){super()}async connectedCallback(){super.connectedCallback();const e=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(e)}render(){if(this.lastTreePosts)return c`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(e=>this.renderPost(e))}</div>`}createRenderRoot(){return this}getLastThreePosts(e){return e.sort((t,s)=>t.lastModified>s.lastModified?-1:t.lastModified<s.lastModified?1:0),e.slice(0,3)}renderPost(e){return c`<article><a href="${e.path}" class="image">${se({src:e.image,alt:e.imagealt,width:336,height:224})}</a><p>${e.description}</p></article>`}async getPosts(){return(await b.fetchJson("/query-index.json")).data.filter(t=>t.path.includes("/posts"))}};W([$()],L.prototype,"lastTreePosts",2);L=W([f("sidebar-posts")],L);var ve=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,X=(e,t,s,o)=>{for(var r=o>1?void 0:o?ge(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&ve(t,s,r),r};let T=class extends _{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const e=await b.fetchText("footer.plain.html",{cacheOptions:{cacheType:"runtime"}}),t=document.createElement("div");t.innerHTML=e,this.footerMarkup=t.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return c`${this.footerMarkup}`}};X([$()],T.prototype,"footerMarkup",2);T=X([f("sidebar-footer")],T);var be=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,ye=(e,t,s,o)=>{for(var r=o>1?void 0:o?$e(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&be(t,s,r),r};let M=class extends _{constructor(){super(...arguments),this.toggleRef=ce(),this.handleToggleClick=e=>{e.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return c`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${de(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};M=ye([f("sidebar-component")],M);function we({input:e,specifier:t,htmlTag:s}){return e.split(t).map((o,r)=>r%2===1?`<${s}>${o}</${s}>`:o).join("")}var Pe=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Z=(e,t,s,o)=>{for(var r=o>1?void 0:o?Ee(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&Pe(t,s,r),r};let O=class extends _{createRenderRoot(){return this}async firstUpdated(e){await this.fetchHeaderData()}async fetchHeaderData(){try{const e=await b.fetchJson("header.json",{cacheOptions:{cacheType:"runtime"}});this.headerData={leftCol:e.leftCol.data[0],rightCol:e.rightCol.data}}catch(e){console.error("HeaderComponent: ",e)}}render(){if(!this.headerData)return;const{leftCol:e,rightCol:t}=this.headerData,s=we({input:e.logoText,htmlTag:"strong",specifier:":::"}),o=H(s);return c`<a href="${e.logoLink}" class="logo">${o}</a><ul class="icons">${t.map(r=>c`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}">${Y(r.socialIcon,"header-icon")} <span class="label">${r.socialLabel}</span></a></li>`)}</ul>`}};Z([$()],O.prototype,"headerData",2);O=Z([f("header-component")],O);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends te{}D.directiveName="unsafeSVG",D.resultType=2;const Ae=I(D);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Se{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Ce{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>!oe(e)&&typeof e.then=="function",x=1073741823;class Le extends z{constructor(){super(...arguments),this._$Cwt=x,this._$Cbt=[],this._$CK=new Se(this),this._$CX=new Ce}render(...t){return t.find(s=>!V(s))??R}update(t,s){const o=this._$Cbt;let r=o.length;this._$Cbt=s;const n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<s.length&&!(d>this._$Cwt);d++){const l=s[d];if(!V(l))return this._$Cwt=d,l;d<r&&l===o[d]||(this._$Cwt=x,r=0,Promise.resolve(l).then(async u=>{for(;a.get();)await a.get();const v=n.deref();if(v!==void 0){const E=v._$Cbt.indexOf(l);E>-1&&E<v._$Cwt&&(v._$Cwt=E,v.setValue(u))}}))}return R}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Te=I(Le),k="/public/icons";var Oe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,J=(e,t,s,o)=>{for(var r=o>1?void 0:o?De(t,s):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(r=(o?a(t,s,r):a(r))||r);return o&&r&&Oe(t,s,r),r};const q=Object.assign({"/public/icons/angle-down.svg":()=>i(()=>import("../__chunks__/angle-down.5esjXxP-.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-left.svg":()=>i(()=>import("../__chunks__/angle-left.dr7Xu0RC.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-right.svg":()=>i(()=>import("../__chunks__/angle-right.Rj8AtGXw.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-down.svg":()=>i(()=>import("../__chunks__/angle-small-down.oEzquexh.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-left.svg":()=>i(()=>import("../__chunks__/angle-small-left.cxGN9pv5.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-right.svg":()=>i(()=>import("../__chunks__/angle-small-right.LS9EKJBq.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-up.svg":()=>i(()=>import("../__chunks__/angle-up.g-feOcvJ.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/bolt.svg":()=>i(()=>import("../__chunks__/bolt.PnEWKVnb.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/building-storefront.svg":()=>i(()=>import("../__chunks__/building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/chat-bubble-left-right.svg":()=>i(()=>import("../__chunks__/chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/check.svg":()=>i(()=>import("../__chunks__/check.ONmxdGyi.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/chevron-down.svg":()=>i(()=>import("../__chunks__/chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/clip.svg":()=>i(()=>import("../__chunks__/clip.1-V-JgpE.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/clock.svg":()=>i(()=>import("../__chunks__/clock.N7bzRHoT.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cpu-chip.svg":()=>i(()=>import("../__chunks__/cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cross.svg":()=>i(()=>import("../__chunks__/cross.Ecp_q9qo.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cursor-arrow-ripple.svg":()=>i(()=>import("../__chunks__/cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/download.svg":()=>i(()=>import("../__chunks__/download.iCsj4v5J.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/envelope.svg":()=>i(()=>import("../__chunks__/envelope.66HM1aqA.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/eye-crossed.svg":()=>i(()=>import("../__chunks__/eye-crossed.1JYAZg64.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/eye.svg":()=>i(()=>import("../__chunks__/eye.ZvfjYldO.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/facebook.svg":()=>i(()=>import("../__chunks__/facebook.c3qibejz.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/globe.svg":()=>i(()=>import("../__chunks__/globe.hkQq1p_V.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/hamburger.svg":()=>i(()=>import("../__chunks__/hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/heart.svg":()=>i(()=>import("../__chunks__/heart.24ZrrNLN.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/home.svg":()=>i(()=>import("../__chunks__/home.2bMff0eF.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/instagram.svg":()=>i(()=>import("../__chunks__/instagram.5pWYJ5CZ.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/medium.svg":()=>i(()=>import("../__chunks__/medium.5st6qfsR.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/menu-burger.svg":()=>i(()=>import("../__chunks__/menu-burger.auW6Yw_g.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/paper-plane.svg":()=>i(()=>import("../__chunks__/paper-plane.UhTHS8zr.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/plus.svg":()=>i(()=>import("../__chunks__/plus.D4TTlTMK.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/rocket-lunch.svg":()=>i(()=>import("../__chunks__/rocket-lunch.vETo1ecq.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/search.svg":()=>i(()=>import("../__chunks__/search.856UhSOk.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/share.svg":()=>i(()=>import("../__chunks__/share.mHYfP02m.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/snapchat.svg":()=>i(()=>import("../__chunks__/snapchat.NWq1a8YO.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/social-network.svg":()=>i(()=>import("../__chunks__/social-network.H4AA173E.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/trash.svg":()=>i(()=>import("../__chunks__/trash.FVFLJKyS.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/twitter.svg":()=>i(()=>import("../__chunks__/twitter.GXPPGxo3.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/user.svg":()=>i(()=>import("../__chunks__/user.rTzEWhIx.js"),__vite__mapDeps([])).then(e=>e.default)});let w=class extends _{constructor(){super(...arguments),this.name=""}async getSvg(e){const t=q[`${k}/${e}.svg`],o=await(t!==void 0?t:q[`${k}/cross.svg`])().catch(r=>console.error(`SVG icon: ${r.message}`));return Ae(o)}render(){const e=this.getSvg(this.name);return c`${Te(e)}`}};w.styles=G`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;J([N({type:String})],w.prototype,"name",2);w=J([f("icon-component")],w);function P(e){return e.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}class Ie{readBlockConfig(t){const s={};return t.querySelectorAll(":scope > div").forEach(o=>{if(o.children){const r=[...o.children];if(r[1]){const n=r[1],a=P(r[0].textContent??"");let d="";if(n.querySelector("a")){const l=[...n.querySelectorAll("a")];l.length===1?d=l[0].href:d=l.map(u=>u.href)}else if(n.querySelector("img")){const l=[...n.querySelectorAll("img")];l.length===1?d=l[0].src:d=l.map(u=>u.src)}else if(n.querySelector("p")){const l=[...n.querySelectorAll("p")];l.length===1?d=l[0].textContent:d=l.map(u=>u.textContent)}else d=o.children[1].textContent;s[a]=d}}}),s}decorateBlocks(t){t.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(t){const s=t.classList[0];if(s){t.classList.add("block"),t.dataset.blockName=s;const o=t.parentElement;o==null||o.classList.add(`${s}-wrapper`);const r=t.closest(".section");r&&r.classList.add(`${s}-container`)}}}function Re(e){return P(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}class Me{constructor(t){this.blockService=t}init(t){this.transformSection(t)}transformSection(t){t.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(t){const s=t.querySelector("div.section-metadata");if(s){const o=this.blockService.readBlockConfig(s);Object.keys(o).forEach(r=>{r==="style"?o.style.split(",").filter(a=>a).map(a=>P(a.trim())).forEach(a=>t.classList.add(a)):t.dataset[Re(r)]=o[r]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(t){const s=[];let o=!1;[...t.children].forEach(r=>{if(r.tagName==="DIV"||!o){const n=document.createElement("div");s.push(n),o=r.tagName!=="DIV",o&&n.classList.add("default-content-wrapper")}s[s.length-1].append(r)}),s.forEach(r=>t.append(r)),this.decorateImages(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const o=s.parentElement;o&&o.classList.add("image","main")})}}const B=(e,t)=>{t.split(",").forEach(s=>{e.classList.add(P(s.trim()))})};function j(e,t=document){const s=e&&e.includes(":")?"property":"name",r=[...t.head.querySelectorAll(`meta[${s}="${e}"]`)].map(n=>n.content).join(", ");return r.length?r:""}const Ve={mainTsPath:"src/main.ts",mainScssPath:"src/styles/sass/main.scss",fontsScssPath:"src/styles/sass/fonts.scss",lazyStylesScssPath:"src/styles/sass/lazy-styles.scss"},m=class m{};m.unloaded="unloaded",m.loading="loading",m.loaded="loaded",m.error="error";let p=m;class xe{constructor(t,s){this.sectionService=t,this.blockService=s,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const o=document.querySelector("main");if(o){o.setAttribute("id","main"),this.addSidebarContainer(o),this.sectionService.init(o),this.addInnerContainer(o),this.blockService.decorateBlocks(o),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{const{lazyStylesScssPath:o,fontsScssPath:r}=Ve;try{o&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`),r&&await this.loadFonts(),await this.loadBlocks()}catch(n){console.error("Load lazy error: ",n)}},this.loadBlocks=async()=>{const r=[...document.querySelectorAll(".section")].map(n=>this.loadBlock(n));await Promise.all(r)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const t=document.querySelector('script[src$="/scripts/scripts.js"]');if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(t){const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),t.after(s)}addInnerContainer(t){const s=t.innerHTML;t.innerHTML=`<div class="inner"><header-component id="header"></header-component>${s}</div>`}decorateTemplateAndTheme(){const t=j("template");t&&B(document.body,t);const s=j("theme");s&&B(document.body,s)}collectBlocks(t){const s=[];return t.querySelectorAll("[data-block-name]").forEach(r=>{s.push({name:r.dataset.blockName,element:r})}),s}async loadBlockModules(t){if((t.element.dataset.blockStatus??p.unloaded)===p.unloaded){t.element.dataset.blockStatus=p.loading;try{const o=await i(()=>import(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.js`),__vite__mapDeps([]));o.default&&await o.default(t.element),t.element.dataset.blockStatus=p.loaded}catch(o){t.element.dataset.blockStatus=p.error,console.error("An error occurred during module import:",o)}}}async loadBlockStyles(t){try{await this.loadCSS(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.css`)}catch{console.error(`problem with block '${t.name}' loading styles`)}}showSection(t){t.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(t){return new Promise((s,o)=>{if(document.querySelector(`head > link[href="${t}"]`))s(!0);else{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=s,r.onerror=o,document.head.append(r)}})}async waitForLCP(){const t=document.querySelector(".section");if(t){const r=this.collectBlocks(t).map(async n=>{this.lcpBlocks.includes(n.name)&&await this.loadBlockModules(n)});await Promise.all(r),this.showSection(t)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(o=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>o()),s.addEventListener("error",()=>o())):o()})}async loadBlock(t){const s=this.collectBlocks(t);if(!s.length){this.showSection(t);return}for(const o of s)await this.loadBlockModules(o),await this.loadBlockStyles(o);this.showSection(t)}}(async function(){const e=new Ie,t=new Me(e);await new xe(t,e).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
