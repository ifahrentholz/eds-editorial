import{T as u,s as v,x as c,w as N,i as te}from"../__chunks__/lit-element.CH8ciVnL.js";import{t as g,n as re}from"../__chunks__/property.Ds9fqW-T.js";import{i as se,t as oe,e as x,o as J,a as ie}from"../__chunks__/unsafe-html.C_rT9aKG.js";import{r as h,t as D}from"../__chunks__/toClassName.D9HYXfPD.js";import{F as w,m as p}from"../__chunks__/fetch.service.BJrVXlm4.js";import{P as m,c as ne}from"../__chunks__/createOptimizedPicture.3CzJ7gJ_.js";import{r as I}from"../__chunks__/icon.template.3G0fuXUC.js";import{_ as a}from"../__chunks__/preload-helper.D7itGvJr.js";import{i as S}from"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=e=>e===null||typeof e!="object"&&typeof e!="function",ce=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(e,t)=>{var s;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(s=o._$AO)==null||s.call(o,t,!1),b(o,t);return!0},E=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},G=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),he(t)}};function le(e){this._$AN!==void 0?(E(this),this._$AM=e,G(this)):this._$AM=e}function de(e,t=!1,r=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(s))for(let i=r;i<s.length;i++)b(s[i],!1),E(s[i]);else s!=null&&(b(s,!1),E(s));else b(this,e)}const he=e=>{e.type==oe.CHILD&&(e._$AP??(e._$AP=de),e._$AQ??(e._$AQ=le))};class Q extends se{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),G(this),this.isConnected=t._$AU}_$AO(t,r=!0){var s,o;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(o=this.disconnected)==null||o.call(this)),r&&(b(this,t),E(this))}setValue(t){if(ce(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>new pe;let pe=class{};const M=new WeakMap,_e=x(class extends Q{render(e){return u}update(e,[t]){var s;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=e.options)==null?void 0:s.host,this.rt(this.ct=e.element)),u}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let r=M.get(t);r===void 0&&(r=new WeakMap,M.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=M.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,B=(e,t,r,s)=>{for(var o=s>1?void 0:s?me(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&fe(t,r,o),o};let A=class extends v{constructor(){super(...arguments),this.error=null,this.getSubmenuName=e=>e.path.split("/")[1]}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}async getPlaceholder(e){return await m.getPlaceHolder(e)}render(){if(this.error)return c`<div class="error">${this.error}</div>`;if(this.items)return c`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.items.length===0?this.getPlaceholder("no menu items"):this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:e}){!(e instanceof HTMLElement)||!e.classList.contains("opener")||e.classList.toggle("active")}renderSubMenu(e){return c`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${e.navtitle} </span>${I("chevron-down","submenu__icon")}</span><ul>${e.children.map(t=>c`<li><a href="${t.path}">${t.navtitle}</a></li>`)}</ul>`}renderMenuItem(e){return e.error?c`<p>${e.error}</p>`:c`<li>${e.children!==void 0?this.renderSubMenu(e):c`<a href="${e.path}">${e.navtitle}</a>`}</li>`}renderMenuItems(){return c`<ul>${this.items.map(e=>this.renderMenuItem(e))}</ul>`}getNavTitle(e){return e.path==="/"?"Homepage":e.navtitle||e.title}filterNavigation(e,t){return e.filter(r=>t.every(s=>!r.path.includes(s))).map(r=>({path:r.path,navtitle:this.getNavTitle(r)}))}groupItemsByFirstLevelPath(e){const t={};return e.forEach(r=>{const s=this.getSubmenuName(r);t[s]||(t[s]=[]),t[s].push({path:r.path,navtitle:this.getNavTitle(r)})}),t}async groupByFirstLevelPath(){const e="/query-index.json",t=["sidekick","sidekick-library","tools","development","dev-","__"];try{const r=await w.fetchJson(e);this.error=null;const s=this.filterNavigation(r.data,t),o=this.groupItemsByFirstLevelPath(s);return Object.values(o).map(n=>n.length===1?n[0]:{navtitle:n[0].path.split("/")[1],path:n[0].path,children:n})}catch(r){return p.error(`SidebarNav Component: Error while fetching ${e}`,r),this.error=await m.getPlaceHolder("error"),[]}}};B([h()],A.prototype,"items",2);B([h()],A.prototype,"error",2);A=B([g("sidebar-nav")],A);var ve=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,q=(e,t,r,s)=>{for(var o=s>1?void 0:s?ge(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&ve(t,r,o),o};let C=class extends v{constructor(){super(...arguments),this.error=null}async connectedCallback(){super.connectedCallback();const e=await this.fetchContactsHtml();e!==null&&this.getContactTemplateArgs(e)}async fetchContactsHtml(){const e=new DOMParser,t="contact.plain.html";try{const r=await w.fetchText(t,{cacheOptions:{cacheType:"runtime"}});return this.error=null,e.parseFromString(r,"text/html")}catch(r){return p.error(`SidebarContacts Component: Error while fetching ${t}`,r),this.error=await m.getPlaceHolder("error"),null}}renderHeader(e){return e?c`<header class="major"><h2>${e}</h2></header>`:u}renderText(e){return e?c`<p>${e}</p>`:u}render(){if(this.error)return c`<div class="error">${this.error}</div>`;if(!this.contactTemplateArgs)return u;const{headline:e,text:t,contacts:r}=this.contactTemplateArgs;return c`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(r)}</section>`}createRenderRoot(){return this}renderContact(e){const{icon:t,markup:r}=e;return!t&&!r?u:c`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(r)}</li>`}getContactsArgs(e){const t=e.querySelectorAll(".contact > div:not(:first-child)");return Array.from(t).map(s=>({icon:s.querySelector("div"),markup:s.querySelector("div:last-child")}))}getContactTemplateArgs(e){const t=e.querySelector("h2"),r=e.querySelector("p"),s=this.getContactsArgs(e);this.contactTemplateArgs={headline:t,text:r,contacts:s}}renderContacts(e){return e.length===0?u:c`<ul class="contact">${e.map(t=>this.renderContact(t))}</ul>`}renderIcon(e){return e?I(e.innerHTML):u}renderContactMarkup(e){return e?J(e.innerHTML):u}};q([h()],C.prototype,"contactTemplateArgs",2);q([h()],C.prototype,"error",2);C=q([g("sidebar-contact")],C);var $e=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,R=(e,t,r,s)=>{for(var o=s>1?void 0:s?ye(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&$e(t,r,o),o};let P=class extends v{constructor(){super(...arguments),this.error=null}async connectedCallback(){super.connectedCallback();const e=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(e),this.noPostsPlaceholder=await m.getPlaceHolder("no posts")}render(){if(this.lastTreePosts)return c`${this.renderHeader()} ${this.renderPosts()}`}createRenderRoot(){return this}getLastThreePosts(e){return e.sort((t,r)=>t.lastModified>r.lastModified?-1:t.lastModified<r.lastModified?1:0),e.slice(0,3)}renderPicture(e){const t=ne({src:e.image,alt:e.imagealt,width:336,height:224});return t?c`<a href="${e.path}" class="image">${t}</a>`:u}renderPost(e){return c`<article>${this.renderPicture(e)}<p>${e.description}</p></article>`}async getPosts(){const e="/query-index.json";try{return this.error=null,(await w.fetchJson(e)).data.filter(r=>r.path.startsWith("/posts"))}catch(t){return p.error(`SidebarPost Component: Error while fetching ${e}`,t),this.error=await m.getPlaceHolder("error"),[]}}renderPosts(){return this.error?c`<div class="error">${this.error}</div>`:this.lastTreePosts.length===0?c`<div>${this.noPostsPlaceholder}</div>`:c`<div class="mini-posts">${this.lastTreePosts.map(e=>this.renderPost(e))}</div>`}renderHeader(){return c`<header class="major"><h2>Newest Posts</h2></header>`}};R([h()],P.prototype,"lastTreePosts",2);R([h()],P.prototype,"error",2);R([h()],P.prototype,"noPostsPlaceholder",2);P=R([g("sidebar-posts")],P);var be=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,j=(e,t,r,s)=>{for(var o=s>1?void 0:s?Pe(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&be(t,r,o),o};let L=class extends v{constructor(){super(...arguments),this.error=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const e="footer.plain.html";try{const t=await w.fetchText(e,{cacheOptions:{cacheType:"runtime"}});this.error=null;const r=document.createElement("div");r.innerHTML=t,this.footerMarkup=r.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}catch(t){p.error(`SidebarFooter Component: Error while fetching ${e}`,t),this.error=await m.getPlaceHolder("error")}}render(){if(this.error)return c`<div class="error">${this.error}</div>`;if(this.footerMarkup)return c`${this.footerMarkup}`}};j([h()],L.prototype,"footerMarkup",2);j([h()],L.prototype,"error",2);L=j([g("sidebar-footer")],L);var we=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Ee=(e,t,r,s)=>{for(var o=s>1?void 0:s?Se(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&we(t,r,o),o};let z=class extends v{constructor(){super(...arguments),this.toggleRef=ue(),this.handleToggleClick=e=>{e.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return c`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${_e(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle">${I("hamburger")}</a>`}};z=Ee([g("sidebar-component")],z);function Ae({input:e,specifier:t,htmlTag:r}){return t===""||r===""?e:e.split(t).map((s,o)=>o%2===1?`<${r}>${s}</${r}>`:s).join("")}var Ce=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,H=(e,t,r,s)=>{for(var o=s>1?void 0:s?Le(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&Ce(t,r,o),o};let T=class extends v{constructor(){super(...arguments),this.error=null}createRenderRoot(){return this}async firstUpdated(e){await this.fetchHeaderData()}async fetchHeaderData(){try{const e=await w.fetchJson("header.json",{cacheOptions:{cacheType:"runtime"}});this.headerData={leftCol:e.leftCol.data[0],rightCol:e.rightCol.data},this.error=null}catch(e){p.error("Header Component: Error while fetching header.json",e),this.error=await m.getPlaceHolder("error")}}render(){if(this.error)return c`<div class="error">${this.error}</div>`;if(!this.headerData)return;const{leftCol:e,rightCol:t}=this.headerData,r=Ae({input:e.logoText,htmlTag:"strong",specifier:":::"}),s=J(r);return c`<a href="${e.logoLink}" class="logo">${s}</a><ul class="icons">${t.map(o=>c`<li><a href="${o.socialLink}" class="icon brands" aria-label="${o.socialLabel}">${I(o.socialIcon,"header-icon")} <span class="label">${o.socialLabel}</span></a></li>`)}</ul>`}};H([h()],T.prototype,"headerData",2);H([h()],T.prototype,"error",2);T=H([g("header-component")],T);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V extends ie{}V.directiveName="unsafeSVG",V.resultType=2;const Te=x(V);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oe{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class De{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=e=>!ae(e)&&typeof e.then=="function",Y=1073741823;class Ie extends Q{constructor(){super(...arguments),this._$Cwt=Y,this._$Cbt=[],this._$CK=new Oe(this),this._$CX=new De}render(...t){return t.find(r=>!F(r))??N}update(t,r){const s=this._$Cbt;let o=s.length;this._$Cbt=r;const i=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<r.length&&!(d>this._$Cwt);d++){const l=r[d];if(!F(l))return this._$Cwt=d,l;d<o&&l===s[d]||(this._$Cwt=Y,o=0,Promise.resolve(l).then(async _=>{for(;n.get();)await n.get();const y=i.deref();if(y!==void 0){const k=y._$Cbt.indexOf(l);k>-1&&k<y._$Cwt&&(y._$Cwt=k,y.setValue(_))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Re=x(Ie),U="/public/icons";var ke=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,ee=(e,t,r,s)=>{for(var o=s>1?void 0:s?Me(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&ke(t,r,o),o};const Z=Object.assign({"/public/icons/angle-down.svg":()=>a(()=>import("../__chunks__/angle-down.CYLyXUSW.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-left.svg":()=>a(()=>import("../__chunks__/angle-left.CuEqyOC8.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-right.svg":()=>a(()=>import("../__chunks__/angle-right.Ke48OV-s.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-down.svg":()=>a(()=>import("../__chunks__/angle-small-down.SNJn5nFt.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-left.svg":()=>a(()=>import("../__chunks__/angle-small-left.Bq32-m-s.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-small-right.svg":()=>a(()=>import("../__chunks__/angle-small-right.FYreGgDf.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/angle-up.svg":()=>a(()=>import("../__chunks__/angle-up.D0S_oJnp.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/bolt.svg":()=>a(()=>import("../__chunks__/bolt.BAJn0zD8.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/building-storefront.svg":()=>a(()=>import("../__chunks__/building-storefront.Pww5r_Sc.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/chat-bubble-left-right.svg":()=>a(()=>import("../__chunks__/chat-bubble-left-right.0PedyEPm.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/check.svg":()=>a(()=>import("../__chunks__/check.BHPURAzV.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/chevron-down.svg":()=>a(()=>import("../__chunks__/chevron-down.D5xOlW7p.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/clip.svg":()=>a(()=>import("../__chunks__/clip.DAiKYXCc.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/clock.svg":()=>a(()=>import("../__chunks__/clock.CQWyiDNK.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cpu-chip.svg":()=>a(()=>import("../__chunks__/cpu-chip.DbktS35z.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cross.svg":()=>a(()=>import("../__chunks__/cross.DjCq6kb8.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/cursor-arrow-ripple.svg":()=>a(()=>import("../__chunks__/cursor-arrow-ripple.DHyr9er2.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/download.svg":()=>a(()=>import("../__chunks__/download.BlSXR9C9.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/envelope.svg":()=>a(()=>import("../__chunks__/envelope.Cc7Mhg2-.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/eye-crossed.svg":()=>a(()=>import("../__chunks__/eye-crossed.C49v3GRJ.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/eye.svg":()=>a(()=>import("../__chunks__/eye.Cm2FxO9V.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/facebook.svg":()=>a(()=>import("../__chunks__/facebook.3ENFaNKU.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/globe.svg":()=>a(()=>import("../__chunks__/globe.DIrN3GJL.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/hamburger.svg":()=>a(()=>import("../__chunks__/hamburger.DXUzfmtf.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/heart.svg":()=>a(()=>import("../__chunks__/heart.DSQJkyzj.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/home.svg":()=>a(()=>import("../__chunks__/home.CfzaHiPS.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/instagram.svg":()=>a(()=>import("../__chunks__/instagram.BBx5qXGF.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/medium.svg":()=>a(()=>import("../__chunks__/medium.BPaQEP4K.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/menu-burger.svg":()=>a(()=>import("../__chunks__/menu-burger.DyVjSQ0K.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/paper-plane.svg":()=>a(()=>import("../__chunks__/paper-plane.CLiFs3FL.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/plus.svg":()=>a(()=>import("../__chunks__/plus.DuBm-jVv.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/rocket-lunch.svg":()=>a(()=>import("../__chunks__/rocket-lunch.C6eRDqkd.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/search.svg":()=>a(()=>import("../__chunks__/search.CtsY1mRN.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/share.svg":()=>a(()=>import("../__chunks__/share.D_3XZuic.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/snapchat.svg":()=>a(()=>import("../__chunks__/snapchat.Bct5wLOa.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/social-network.svg":()=>a(()=>import("../__chunks__/social-network.B-lhER-M.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/trash.svg":()=>a(()=>import("../__chunks__/trash.D1jfdnTM.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/twitter.svg":()=>a(()=>import("../__chunks__/twitter.d5w0828a.js"),__vite__mapDeps([])).then(e=>e.default),"/public/icons/user.svg":()=>a(()=>import("../__chunks__/user.X8OGz61Z.js"),__vite__mapDeps([])).then(e=>e.default)});let O=class extends v{constructor(){super(...arguments),this.name=""}async getSvg(e){const r=Z[`${U}/${e}.svg`]??Z[`${U}/cross.svg`];try{const s=await r();return Te(s)}catch(s){p.error(`Icon Component: SVG icon: ${s.message}`,s);return}}render(){const e=this.getSvg(this.name);return c`${Re(e)}`}};O.styles=te`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;ee([re({type:String})],O.prototype,"name",2);O=ee([g("icon-component")],O);class Ve{readBlockConfig(t){const r={};return t.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const o=[...s.children];if(o[1]){const i=o[1],n=D(o[0].textContent??"");let d="";if(i.querySelector("a")){const l=[...i.querySelectorAll("a")];l.length===1?d=l[0].href:d=l.map(_=>_.href)}else if(i.querySelector("img")){const l=[...i.querySelectorAll("img")];l.length===1?d=l[0].src:d=l.map(_=>_.src)}else if(i.querySelector("p")){const l=[...i.querySelectorAll("p")];l.length===1?d=l[0].textContent:d=l.map(_=>_.textContent)}else d=s.children[1].textContent;r[n]=d}}}),r}decorateBlocks(t){t.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(t){const r=t.classList[0];if(r){t.classList.add("block"),t.dataset.blockName=r;const s=t.parentElement;s==null||s.classList.add(`${r}-wrapper`);const o=t.closest(".section");o&&o.classList.add(`${r}-container`)}}}function xe(e){return/^[a-z][A-Za-z0-9]*$/.test(e)?e:/^[A-Z][A-Za-z0-9]*$/.test(e)?e.charAt(0).toLowerCase()+e.slice(1):D(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}class Be{constructor(t){this.blockService=t}init(t){this.transformSection(t)}transformSection(t){t.querySelectorAll(":scope > div").forEach(r=>{this.adjustMarkup(r),this.processSectionMetaData(r)})}processSectionMetaData(t){const r=t.querySelector("div.section-metadata");if(r){const s=this.blockService.readBlockConfig(r);Object.keys(s).forEach(o=>{o==="style"?s.style.split(",").filter(n=>n).map(n=>D(n.trim())).forEach(n=>t.classList.add(n)):t.dataset[xe(o)]=s[o]}),r.parentElement&&r.parentElement.remove()}}adjustMarkup(t){const r=[];let s=!1;[...t.children].forEach(o=>{if(o.tagName==="DIV"||!s){const i=document.createElement("div");r.push(i),s=o.tagName!=="DIV",s&&i.classList.add("default-content-wrapper")}r[r.length-1].append(o)}),r.forEach(o=>t.append(o)),this.decorateImages(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(r=>{const s=r.parentElement;s&&s.classList.add("image","main")})}}function K(){return S()?window.parent.location:window.location}const W=(e,t)=>{t.split(",").forEach(r=>{e.classList.add(D(r.trim()))})};function X(e,t=document){const r=e&&e.includes(":")?"property":"name",o=[...t.head.querySelectorAll(`meta[${r}="${e}"]`)].map(i=>i.content).join(", ");return o.length?o:""}const qe={mainTsPath:"src/main.ts",mainScssPath:"src/styles/sass/main.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/types/icons.types.ts",fontsScssPath:"src/styles/sass/fonts.scss",lazyStylesScssPath:"src/styles/sass/lazy-styles.scss",sidekickLibraryStylesScssPath:"src/styles/sass/sidekick-library-styles.scss"},$=class ${};$.unloaded="unloaded",$.loading="loading",$.loaded="loaded",$.error="error";let f=$;class je{constructor(t,r){this.sectionService=t,this.blockService=r,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const s=document.querySelector("main");if(s){s.setAttribute("id","main"),this.addSidebarContainer(s),this.sectionService.init(s),this.addInnerContainer(s),this.blockService.decorateBlocks(s),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{const{lazyStylesScssPath:s,sidekickLibraryStylesScssPath:o,fontsScssPath:i}=qe;try{s&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`),o&&S()&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/sidekickLibraryStyles/sidekickLibraryStyles.css`),i&&await this.loadFonts(),await this.loadBlocks()}catch(n){p.error("MainService: Load lazy error: ",n)}},this.loadBlocks=async()=>{const o=[...document.querySelectorAll(".section")].map(i=>this.loadBlock(i));await Promise.all(o)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(K().search).get("lighthouse")==="on";const t=document.querySelector('script[src$="/scripts/scripts.js"]');if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split("/scripts/scripts.js")}catch(r){p.error("MainService: Error initializing codeBasePath.",r)}}addSidebarContainer(t){if(S())return;const r=document.createElement("sidebar-component");r.setAttribute("id","sidebar"),window.innerWidth<=1280?r.classList.remove("active"):r.classList.add("active"),t.after(r)}addInnerContainer(t){const r=t.innerHTML;t.innerHTML=`<div class="inner">${S()?"":'<header-component id="header"></header-component>'}${r}</div>`}decorateTemplateAndTheme(){const t=X("template");t&&W(document.body,t);const r=X("theme");r&&W(document.body,r)}collectBlocks(t){const r=[];return t.querySelectorAll("[data-block-name]").forEach(o=>{r.push({name:o.dataset.blockName,element:o})}),r}async loadBlockModules(t){if((t.element.dataset.blockStatus??f.unloaded)===f.unloaded){t.element.dataset.blockStatus=f.loading;try{const s=await a(()=>import(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.js`),__vite__mapDeps([]));s.default&&await s.default(t.element),t.element.dataset.blockStatus=f.loaded}catch(s){t.element.dataset.blockStatus=f.error,p.error("MainService: An error occurred during module import:",s)}}}async loadBlockStyles(t){try{await this.loadCSS(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.css`)}catch{}}showSection(t){t.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{K().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(t){return new Promise((r,s)=>{if(document.querySelector(`head > link[href="${t}"]`))r(!0);else{const o=document.createElement("link");o.rel="stylesheet",o.href=t,o.onload=r,o.onerror=s,document.head.append(o)}})}async waitForLCP(){const t=document.querySelector(".section");if(t){const o=this.collectBlocks(t).map(async i=>{this.lcpBlocks.includes(i.name)&&await Promise.all([this.loadBlockModules(i),this.loadBlockStyles(i)])});await Promise.all(o),this.showSection(t)}document.body.style.display=null;const r=document.querySelector("main img");await new Promise(s=>{r&&!r.complete?(r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r.addEventListener("load",()=>s()),r.addEventListener("error",()=>s())):s()})}loadBlock(t){const r=this.collectBlocks(t);if(!r.length){this.showSection(t);return}for(const s of r)Promise.all([this.loadBlockModules(s),this.loadBlockStyles(s)]);this.showSection(t)}}(async function(){const e=new Ve,t=new Be(e);await new je(t,e).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
