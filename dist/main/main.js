import{T as u,s as _,x as h,w as N,i as fe}from"../__chunks__/lit-element.XkUWx5ik.js";import{t as g,n as me}from"../__chunks__/property.0daVBkvz.js";import{i as _e,t as ge,e as z,o as ee,a as ve}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{r as L,t as D}from"../__chunks__/toClassName.o2_BLIQs.js";import{F as E,g as H}from"../__chunks__/fetch.service.7cfQZ1Bx.js";import{r as O}from"../__chunks__/icon.template.6pvZO8OV.js";import{c as ye}from"../__chunks__/createOptimizedPicture.lBh_4LJd.js";import{_ as a}from"../__chunks__/preload-helper.hlDPvxQM.js";import{i as $}from"../__chunks__/isSidekickLibraryActive.iN4ARc8o.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=e=>e===null||typeof e!="object"&&typeof e!="function",we=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(e,t)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const n of s)(o=n._$AO)==null||o.call(n,t,!1),b(n,t);return!0},S=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},te=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),$e(t)}};function Le(e){this._$AN!==void 0?(S(this),this._$AM=e,te(this)):this._$AM=e}function Ee(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)b(o[i],!1),S(o[i]);else o!=null&&(b(o,!1),S(o));else b(this,e)}const $e=e=>{e.type==ge.CHILD&&(e._$AP??(e._$AP=Ee),e._$AQ??(e._$AQ=Le))};let se=class extends _e{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),te(this),this.isConnected=t._$AU}_$AO(t,s=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),s&&(b(this,t),S(this))}setValue(t){if(we(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=()=>new Se;let Se=class{};const I=new WeakMap,Ae=z(class extends se{render(e){return u}update(e,[t]){var o;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),u}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let s=I.get(t);s===void 0&&(s=new WeakMap,I.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=I.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ce=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,oe=(e,t,s,o)=>{for(var n=o>1?void 0:o?Te(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&Ce(t,s,n),n};let x=class extends _{constructor(){super(...arguments),this.getSubmenuName=e=>e.path.split("/")[1],this.groupByFirstLevelPath=async()=>{let e=await E.fetchJson("/query-index.json");const t=["sidekick","sidekick-library","tools","development","dev-","__"],s=this.filterNavigation(e.data,t);e.data=s;const o=this.groupItemsByFirstLevelPath(e.data);return Object.values(o).map(i=>i.length===1?i[0]:{navtitle:i[0].path.split("/")[1],path:i[0].path,children:i})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return h`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:e}){!(e instanceof HTMLElement)||!e.classList.contains("opener")||e.classList.toggle("active")}renderSubMenu(e){return h`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${e.navtitle} </span>${O("chevron-down","submenu__icon")}</span><ul>${e.children.map(t=>h`<li><a href="${t.path}">${t.navtitle}</a></li>`)}</ul>`}renderMenuItem(e){return h`<li>${e.children!==void 0?this.renderSubMenu(e):h`<a href="${e.path}">${e.navtitle}</a>`}</li>`}renderMenuItems(){return h`<ul>${this.items.map(e=>this.renderMenuItem(e))}</ul>`}getNavTitle(e){return e.path==="/"?"Homepage":e.navtitle||e.title}filterNavigation(e,t){return e.filter(s=>t.every(o=>!s.path.includes(o))).map(s=>({path:s.path,navtitle:this.getNavTitle(s)}))}groupItemsByFirstLevelPath(e){const t={};return e.forEach(s=>{const o=this.getSubmenuName(s);t[o]||(t[o]=[]),t[o].push({path:s.path,navtitle:this.getNavTitle(s)})}),t}};oe([L()],x.prototype,"items",2);x=oe([g("sidebar-nav")],x);var De=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,ne=(e,t,s,o)=>{for(var n=o>1?void 0:o?Oe(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&De(t,s,n),n};let k=class extends _{async connectedCallback(){super.connectedCallback();const e=await this.fetchContactsHtml();this.getContactTemplateArgs(e)}async fetchContactsHtml(){const e=new DOMParser,t=await E.fetchText("contact.plain.html",{cacheOptions:{cacheType:"runtime"}});return e.parseFromString(t,"text/html")}renderHeader(e){return e?h`<header class="major"><h2>${e}</h2></header>`:u}renderText(e){return e?h`<p>${e}</p>`:u}render(){if(!this.contactTemplateArgs)return u;const{headline:e,text:t,contacts:s}=this.contactTemplateArgs;return h`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(e){const{icon:t,markup:s}=e;return!t&&!s?u:h`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(e){const t=e.querySelectorAll(".contact > div:not(:first-child)");return Array.from(t).map(o=>({icon:o.querySelector("div"),markup:o.querySelector("div:last-child")}))}getContactTemplateArgs(e){const t=e.querySelector("h2"),s=e.querySelector("p"),o=this.getContactsArgs(e);this.contactTemplateArgs={headline:t,text:s,contacts:o}}renderContacts(e){return e.length===0?u:h`<ul class="contact">${e.map(t=>this.renderContact(t))}</ul>`}renderIcon(e){return e?O(e.innerHTML):u}renderContactMarkup(e){return e?ee(e.innerHTML):u}};ne([L()],k.prototype,"contactTemplateArgs",2);k=ne([g("sidebar-contact")],k);var Ie=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,ie=(e,t,s,o)=>{for(var n=o>1?void 0:o?Re(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&Ie(t,s,n),n};let V=class extends _{constructor(){super()}async connectedCallback(){super.connectedCallback();const e=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(e)}render(){if(this.lastTreePosts)return h`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(e=>this.renderPost(e))}</div>`}createRenderRoot(){return this}getLastThreePosts(e){return e.sort((t,s)=>t.lastModified>s.lastModified?-1:t.lastModified<s.lastModified?1:0),e.slice(0,3)}renderPicture(e){const t=ye({src:e.image,alt:e.imagealt,width:336,height:224});return t?h`<a href="${e.path}" class="image">${t}</a>`:u}renderPost(e){return h`<article>${this.renderPicture(e)}<p>${e.description}</p></article>`}async getPosts(){return(await E.fetchJson("/query-index.json")).data.filter(t=>t.path.startsWith("/posts"))}};ie([L()],V.prototype,"lastTreePosts",2);V=ie([g("sidebar-posts")],V);var Me=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,re=(e,t,s,o)=>{for(var n=o>1?void 0:o?xe(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&Me(t,s,n),n};let q=class extends _{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const e=await E.fetchText("footer.plain.html",{cacheOptions:{cacheType:"runtime"}}),t=document.createElement("div");t.innerHTML=e,this.footerMarkup=t.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return h`${this.footerMarkup}`}};re([L()],q.prototype,"footerMarkup",2);q=re([g("sidebar-footer")],q);var ke=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,qe=(e,t,s,o)=>{for(var n=o>1?void 0:o?Ve(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&ke(t,s,n),n};let F=class extends _{constructor(){super(...arguments),this.toggleRef=Pe(),this.handleToggleClick=e=>{e.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return h`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${Ae(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle">${O("hamburger")}</a>`}};F=qe([g("sidebar-component")],F);function Be({input:e,specifier:t,htmlTag:s}){return e.split(t).map((o,n)=>n%2===1?`<${s}>${o}</${s}>`:o).join("")}var je=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,ae=(e,t,s,o)=>{for(var n=o>1?void 0:o?ze(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&je(t,s,n),n};let B=class extends _{createRenderRoot(){return this}async firstUpdated(e){await this.fetchHeaderData()}async fetchHeaderData(){try{const e=await E.fetchJson("header.json",{cacheOptions:{cacheType:"runtime"}});this.headerData={leftCol:e.leftCol.data[0],rightCol:e.rightCol.data}}catch(e){console.error("HeaderComponent: ",e)}}render(){if(!this.headerData)return;const{leftCol:e,rightCol:t}=this.headerData,s=Be({input:e.logoText,htmlTag:"strong",specifier:":::"}),o=ee(s);return h`<a href="${e.logoLink}" class="logo">${o}</a><ul class="icons">${t.map(n=>h`<li><a href="${n.socialLink}" class="icon brands" aria-label="${n.socialLabel}">${O(n.socialIcon,"header-icon")} <span class="label">${n.socialLabel}</span></a></li>`)}</ul>`}};ae([L()],B.prototype,"headerData",2);B=ae([g("header-component")],B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j=class extends ve{};j.directiveName="unsafeSVG",j.resultType=2;const Ne=z(j);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let He=class{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}},Fe=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=e=>!be(e)&&typeof e.then=="function",U=1073741823;let Ye=class extends se{constructor(){super(...arguments),this._$Cwt=U,this._$Cbt=[],this._$CK=new He(this),this._$CX=new Fe}render(...t){return t.find(s=>!Y(s))??N}update(t,s){const o=this._$Cbt;let n=o.length;this._$Cbt=s;const i=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<s.length&&!(l>this._$Cwt);l++){const c=s[l];if(!Y(c))return this._$Cwt=l,c;l<n&&c===o[l]||(this._$Cwt=U,n=0,Promise.resolve(c).then(async p=>{for(;r.get();)await r.get();const f=i.deref();if(f!==void 0){const y=f._$Cbt.indexOf(c);y>-1&&y<f._$Cwt&&(f._$Cwt=y,f.setValue(p))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ue=z(Ye),W="/public/icons";var We=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,ce=(e,t,s,o)=>{for(var n=o>1?void 0:o?Ke(t,s):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&We(t,s,n),n};const K=Object.assign({"/public/icons/angle-down.svg":()=>a(()=>import("../__chunks__/angle-down.Cg2crR0u.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-left.svg":()=>a(()=>import("../__chunks__/angle-left.JVB4YxPb.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-right.svg":()=>a(()=>import("../__chunks__/angle-right.Ch8APWiw.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-down.svg":()=>a(()=>import("../__chunks__/angle-small-down.M5BptMXk.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-left.svg":()=>a(()=>import("../__chunks__/angle-small-left.OQUEL5J8.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-right.svg":()=>a(()=>import("../__chunks__/angle-small-right.GiHGG7ST.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-up.svg":()=>a(()=>import("../__chunks__/angle-up.Owt8YyvO.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/bolt.svg":()=>a(()=>import("../__chunks__/bolt.yed9FptR.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/building-storefront.svg":()=>a(()=>import("../__chunks__/building-storefront.GI5O3UY2.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/chat-bubble-left-right.svg":()=>a(()=>import("../__chunks__/chat-bubble-left-right.RdWapjj4.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/check.svg":()=>a(()=>import("../__chunks__/check.2BZxb2wx.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/chevron-down.svg":()=>a(()=>import("../__chunks__/chevron-down.6_gNiehw.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/clip.svg":()=>a(()=>import("../__chunks__/clip.B--gq6DA.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/clock.svg":()=>a(()=>import("../__chunks__/clock.tyy4_t8y.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cpu-chip.svg":()=>a(()=>import("../__chunks__/cpu-chip.e4997-9R.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cross.svg":()=>a(()=>import("../__chunks__/cross.8hUWLLSe.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cursor-arrow-ripple.svg":()=>a(()=>import("../__chunks__/cursor-arrow-ripple.5f05fUdo.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/download.svg":()=>a(()=>import("../__chunks__/download.Sjqs7ONH.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/envelope.svg":()=>a(()=>import("../__chunks__/envelope.AKeKbl-b.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/eye-crossed.svg":()=>a(()=>import("../__chunks__/eye-crossed.UP44bNSQ.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/eye.svg":()=>a(()=>import("../__chunks__/eye.Zi41FP8R.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/facebook.svg":()=>a(()=>import("../__chunks__/facebook.VERWvTTO.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/globe.svg":()=>a(()=>import("../__chunks__/globe.oRdjPaeW.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/hamburger.svg":()=>a(()=>import("../__chunks__/hamburger.B4eeRdlK.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/heart.svg":()=>a(()=>import("../__chunks__/heart.oHoUBEqr.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/home.svg":()=>a(()=>import("../__chunks__/home.SbACO0rp.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/instagram.svg":()=>a(()=>import("../__chunks__/instagram.b_ubI60M.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/medium.svg":()=>a(()=>import("../__chunks__/medium.qMY-y9mb.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/menu-burger.svg":()=>a(()=>import("../__chunks__/menu-burger.PVXazrxs.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/paper-plane.svg":()=>a(()=>import("../__chunks__/paper-plane.SNV5LRur.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/plus.svg":()=>a(()=>import("../__chunks__/plus.aaZDetv0.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/rocket-lunch.svg":()=>a(()=>import("../__chunks__/rocket-lunch.zdYOwJp4.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/search.svg":()=>a(()=>import("../__chunks__/search.v55h2U5v.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/share.svg":()=>a(()=>import("../__chunks__/share.b6IBiQcz.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/snapchat.svg":()=>a(()=>import("../__chunks__/snapchat.hyeXEF5A.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/social-network.svg":()=>a(()=>import("../__chunks__/social-network.XyFthY4r.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/trash.svg":()=>a(()=>import("../__chunks__/trash.Q02H3YPF.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/twitter.svg":()=>a(()=>import("../__chunks__/twitter.gWOZdFRk.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/user.svg":()=>a(()=>import("../__chunks__/user.I6JGjv2Y.js"),__vite__mapDeps([])).then(e=>e.default)});let A=class extends _{constructor(){super(...arguments),this.name=""}async getSvg(e){const t=K[`${W}/${e}.svg`],o=await(t!==void 0?t:K[`${W}/cross.svg`])().catch(n=>console.error(`SVG icon: ${n.message}`));return Ne(o)}render(){const e=this.getSvg(this.name);return h`${Ue(e)}`}};A.styles=fe`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;ce([me({type:String})],A.prototype,"name",2);A=ce([g("icon-component")],A);class Xe{readBlockConfig(t){const s={};return t.querySelectorAll(":scope > div").forEach(o=>{if(o.children){const n=[...o.children];if(n[1]){const i=n[1],r=D(n[0].textContent??"");let l="";if(i.querySelector("a")){const c=[...i.querySelectorAll("a")];c.length===1?l=c[0].href:l=c.map(p=>p.href)}else if(i.querySelector("img")){const c=[...i.querySelectorAll("img")];c.length===1?l=c[0].src:l=c.map(p=>p.src)}else if(i.querySelector("p")){const c=[...i.querySelectorAll("p")];c.length===1?l=c[0].textContent:l=c.map(p=>p.textContent)}else l=o.children[1].textContent;s[r]=l}}}),s}decorateBlocks(t){t.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(t){const s=t.classList[0];if(s){t.classList.add("block"),t.dataset.blockName=s;const o=t.parentElement;o==null||o.classList.add(`${s}-wrapper`);const n=t.closest(".section");n&&n.classList.add(`${s}-container`)}}}function Ze(e){return D(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}class Je{constructor(t){this.blockService=t}init(t){this.transformSection(t)}transformSection(t){t.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(t){const s=t.querySelector("div.section-metadata");if(s){const o=this.blockService.readBlockConfig(s);Object.keys(o).forEach(n=>{n==="style"?o.style.split(",").filter(r=>r).map(r=>D(r.trim())).forEach(r=>t.classList.add(r)):t.dataset[Ze(n)]=o[n]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(t){const s=[];let o=!1;[...t.children].forEach(n=>{if(n.tagName==="DIV"||!o){const i=document.createElement("div");s.push(i),o=n.tagName!=="DIV",o&&i.classList.add("default-content-wrapper")}s[s.length-1].append(n)}),s.forEach(n=>t.append(n)),this.decorateImages(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const o=s.parentElement;o&&o.classList.add("image","main")})}}const C=(e,t)=>{t.split(",").forEach(s=>{e.classList.add(D(s.trim()))})};function w(e,t=document){const s=e&&e.includes(":")?"property":"name",n=[...t.head.querySelectorAll(`meta[${s}="${e}"]`)].map(i=>i.content).join(", ");return n.length?n:""}const Ge={mainTsPath:"./src/main.ts",mainScssPath:"./src/styles/sass/main.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/icons.types.ts",fontsScssPath:"./src/styles/sass/fonts.scss",lazyStylesScssPath:"./src/styles/sass/lazy-styles.scss",sidekickLibraryStylesScssPath:"./src/styles/sass/sidekick-library-styles.scss"};function X(){return $()?window.parent.location:window.location}const v=class v{};v.unloaded="unloaded",v.loading="loading",v.loaded="loaded",v.error="error";let m=v;class Qe{constructor(t,s){this.sectionService=t,this.blockService=s,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const o=document.querySelector("main");if(o){o.setAttribute("id","main"),this.addSidebarContainer(o),this.sectionService.init(o),this.addInnerContainer(o),this.blockService.decorateBlocks(o),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{const{lazyStylesScssPath:o,sidekickLibraryStylesScssPath:n,fontsScssPath:i}=Ge;try{o&&await this.loadCSS("/dist/lazyStyles/lazyStyles.css"),n&&$()&&await this.loadCSS("/dist/sidekickLibraryStyles/sidekickLibraryStyles.css"),i&&await this.loadFonts(),await this.loadBlocks()}catch(r){console.error("Load lazy error: ",r)}},this.loadBlocks=async()=>{const n=[...document.querySelectorAll(".section")].map(i=>this.loadBlock(i));await Promise.all(n)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(X().search).get("lighthouse")==="on";const t=document.querySelector('script[src$="/scripts/scripts.js"]');if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(t){if($())return;const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),t.after(s)}addInnerContainer(t){const s=t.innerHTML;t.innerHTML=`<div class="inner">${$()?"":'<header-component id="header"></header-component>'}${s}</div>`}decorateTemplateAndTheme(){const t=w("template");t&&C(document.body,t);const s=w("theme");s&&C(document.body,s)}collectBlocks(t){const s=[];return t.querySelectorAll("[data-block-name]").forEach(n=>{s.push({name:n.dataset.blockName,element:n})}),s}async loadBlockModules(t){if((t.element.dataset.blockStatus??m.unloaded)===m.unloaded){t.element.dataset.blockStatus=m.loading;try{const{href:o}=H(`dist/${t.name}/${t.name}.js`),n=await a(()=>import(o),__vite__mapDeps([]));n.default&&await n.default(t.element),t.element.dataset.blockStatus=m.loaded}catch(o){t.element.dataset.blockStatus=m.error,console.error("An error occurred during module import:",o)}}}async loadBlockStyles(t){try{await this.loadCSS(`dist/${t.name}/${t.name}.css`)}catch{console.error(`problem with block '${t.name}' loading styles`)}}showSection(t){t.style.removeProperty("display")}async loadFonts(){await this.loadCSS("dist/fonts/fonts.css");try{X().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch(t){console.error("Error setting fonts-loaded in session storage",t)}}async loadCSS(t){return new Promise((s,o)=>{const{href:n}=H(t);if(document.querySelector(`head > link[href="${n}"]`))s(!0);else{const i=document.createElement("link");i.rel="stylesheet",i.href=n,i.onload=s,i.onerror=o,document.head.append(i)}})}async waitForLCP(){const t=document.querySelector(".section");if(t){const n=this.collectBlocks(t).map(async i=>{this.lcpBlocks.includes(i.name)&&await Promise.all([this.loadBlockModules(i),this.loadBlockStyles(i)])});await Promise.all(n),this.showSection(t)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(o=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>o()),s.addEventListener("error",()=>o())):o()})}async loadBlock(t){const s=this.collectBlocks(t);if(!s.length){this.showSection(t);return}for(const o of s)Promise.all([this.loadBlockModules(o),this.loadBlockStyles(o)]);this.showSection(t)}}var d={},P;Object.defineProperty(d,"__esModule",{value:!0});const le=(e,t)=>e===null?[]:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?Array.from(e.querySelectorAll(t)):Array.from(e.shadowRoot.querySelectorAll(t)),Z=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const s of e)s.classList.remove(...t)}},R=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const s of e)s.classList.add(...t)}},J=(e,t)=>e.classList.contains(t);function T(e){return Symbol.iterator in e}function de(e){return"length"in e?e.length>0:!e[Symbol.iterator]().next().done}const he=(e,t,s,o,n)=>{if(e==null||T(e)&&!de(e))return;if(T(e)&&!(e instanceof HTMLElement)){for(const r of e)he(r,t,s,o,n);return}let i;i=typeof t=="string"?t.trim().split(" "):t,i.forEach(r=>{const l=ue(e,r,s,o);if(!o.eventBindingMap[l]){const c=s.bind(o);return o.eventBindingMap[l]=c,e.addEventListener(r.trim(),c,n)}})};function ue(e,t,s,o){return`${M(e,o)}#
          ${t.trim()}#
          ${M(s,o)}#
          ${M(o,o)}`.replace(/\n/gm,"").replace(/\s/g,"")}function M(e,t){let s;if(t.eventIdMap.has(e))s=t.eventIdMap.get(e);else{const o="xxxxxxxx".replace(/x/g,et).toLowerCase();t.eventIdMap.set(e,o),s=o}return s}function et(){return(100*Math.random()%36|0).toString(36)}const pe=(e,t,s,o,n)=>{if(e==null||T(e)&&!de(e))return void console.warn("no target found");if(T(e)&&!(e instanceof HTMLElement)){for(const r of e)pe(r,t,s,o,n);return}let i;i=typeof t=="string"?t.trim().split(" "):t,i.forEach(r=>{const l=ue(e,r,s,o),c=o.eventBindingMap[l];c&&(delete o.eventBindingMap[l],e.removeEventListener(r,c,n))})},G=(e,t)=>{le(e,t).forEach(s=>e.removeChild(s))},Q=(e,t,s)=>new Promise(o=>{s!==void 0&&setTimeout(()=>o(),s),e.addEventListener(t,()=>o())});d.addClass=R,d.find=(e,t)=>e===null?null:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?e.querySelector(t):e.shadowRoot.querySelector(t),d.findAll=le,d.forEachNode=(e,t,s=window)=>{for(let o=0;o<e.length;o++)t.call(s,e[o],o,e)},d.getCurrentMQ=e=>{let t="";return e.forEach(s=>{!t.length&&window.matchMedia(s.query).matches&&(t=s.name)}),t},d.getInnerText=e=>e.innerText||e.textContent||"",d.getParent=(e,t)=>e.closest(t),d.getUniqueID=()=>Math.random().toString(36).substr(2,9),d.hasChild=(e,t)=>e.shadowRoot!==null&&e.shadowRoot!==void 0?e.shadowRoot.querySelector(t)!==null:e.querySelector(t)!==null,d.hasClass=J,d.inViewport=(e,t)=>{const s=e.getBoundingClientRect();let o={top:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight,left:0};return t!==void 0&&(o=t.getBoundingClientRect()),s.top>=o.top&&s.right<=o.right&&s.bottom<=o.bottom&&s.left>=o.left},d.isNodeList=e=>!(e instanceof HTMLElement||e instanceof Window),d.onEvent=he,d.removeChildren=G,d.removeChilds=G,d.removeClass=Z,d.removeEvent=pe,d.toggleClass=(e,t,s)=>{if(e!=null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const o of e)s===!0?R(o,t):J(o,t)||s===!1?Z(o,t):R(o,t)}},P=d.waitFor=e=>new Promise(t=>{setTimeout(()=>t(),e)}),d.waitForAnimationEnd=function(e,t){return new Promise((s,o)=>{e.addEventListener("animationend",function n(i){i.target===e&&(t&&i.animationName!==t||(e.removeEventListener("animationend",n),s(i)))})})},d.waitForEvent=Q,d.waitForInitialization=e=>{var t;return((t=e.state)===null||t===void 0?void 0:t.initialized)===!0?Promise.resolve():Q(e,"kl-component-initialized",3e3)},d.waitForTransitionEnd=function(e,t){return new Promise((s,o)=>{e.addEventListener("transitionend",function n(i){i.target===e&&(t&&i.propertyName!==t||(e.removeEventListener("transitionend",n),s(i)))})})};function tt(){const e=w("template");e&&C(document.body,e);const t=w("theme");t&&C(document.body,t)}function st(e){return e.trim()===""?void 0:e}function ot(){const e=w("language");document.documentElement.lang=st(e)||"en"}class nt{constructor({beforeInit:t=()=>{},afterInit:s=()=>{},beforeLoadEager:o=()=>{},loadEager:n=()=>{},afterLoadEager:i=()=>{},beforeLoadLazy:r=()=>{},loadLazy:l=()=>{},afterLoadLazy:c=()=>{},beforeLoadDelayed:p=()=>{},loadDelayed:f=()=>{},afterLoadDelayed:y=()=>{}}={}){this.beforeInit=t,this.afterInit=s,this.beforeLoadEager=o,this.loadEager=n,this.afterLoadEager=i,this.beforeLoadLazy=r,this.loadLazy=l,this.afterLoadLazy=c,this.beforeLoadDelayed=p,this.loadDelayed=f,this.afterLoadDelayed=y,this.init()}async init(){console.time("init execution time: "),await this.beforeInit(),await this._loadEager(),await this._loadLazy(),await this._loadDelayed(),await this.afterInit(),console.timeEnd("init execution time: ")}async _loadEager(){await this.beforeLoadEager(),console.time("loadEager execution time: "),tt(),ot(),await this.loadEager(),await P(300),console.timeEnd("loadEager execution time: "),await this.afterLoadEager()}async _loadLazy(){await this.beforeLoadLazy(),console.time("loadLazy execution time: "),await this.loadLazy(),await P(300),console.timeEnd("loadLazy execution time: "),await this.afterLoadLazy()}async _loadDelayed(){console.time("loadDelayed execution time: "),await this.beforeLoadDelayed(),await this.loadDelayed(),await P(300),await this.afterLoadDelayed(),console.timeEnd("loadDelayed execution time: ")}}(async function(){const e=new Xe,t=new Je(e);await new Qe(t,e).init()})();console.time("APP execution time: ");const bt=new nt({beforeInit:()=>{console.log("beforeInit")},afterInit:()=>{console.log("afterInit")},beforeLoadEager:()=>{console.log("beforeLoadEager")},loadEager:()=>{console.log("loadEager")},afterLoadEager:()=>{console.log("afterLoadEager")},beforeLoadLazy:()=>{console.log("beforeLoadLazy")},loadLazy:()=>{console.log("loadLazy")},afterLoadLazy:()=>{console.log("afterLoadLazy")},beforeLoadDelayed:()=>{console.log("beforeLoadDelayed")},loadDelayed:()=>{console.log("loadDelayed")},afterLoadDelayed:()=>{console.log("afterLoadDelayed")}});console.timeEnd("APP execution time: ");export{bt as App};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
