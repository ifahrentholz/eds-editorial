import{T as l,s as p,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{t as m}from"../__chunks__/property.0daVBkvz.js";import{f as j,_ as E}from"../__chunks__/icon.vh7VrxK3.js";import{e as I,o as x}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{r as y,t as S}from"../__chunks__/toClassName.o2_BLIQs.js";import{F as g}from"../__chunks__/fetch.service.MWvor5vW.js";import{c as R}from"../__chunks__/createOptimizedPicture.lBh_4LJd.js";import{i as v}from"../__chunks__/isSidekickLibraryActive.iN4ARc8o.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=()=>new F;class F{}const w=new WeakMap,N=I(class extends j{render(t){return l}update(t,[e]){var r;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),l}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let s=w.get(e);s===void 0&&(s=new WeakMap,w.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=w.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Y=Object.defineProperty,z=Object.getOwnPropertyDescriptor,B=(t,e,s,r)=>{for(var a=r>1?void 0:r?z(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&Y(e,s,a),a};let b=class extends p{constructor(){super(...arguments),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const t={};return(await g.fetchJson("/query-index.json")).data.forEach(r=>{const a=this.getSubmenuName(r);t[a]||(t[a]=[]),t[a].push({path:r.path,navtitle:this.getNavTitle(r)})}),Object.values(t).map(r=>r.length===1?r[0]:{navtitle:r[0].path.split("/")[1],path:r[0].path,children:r})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return i`<li>${t.children!==void 0?this.renderSubMenu(t):i`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}};B([y()],b.prototype,"items",2);b=B([m("sidebar-nav")],b);var U=Object.defineProperty,W=Object.getOwnPropertyDescriptor,A=(t,e,s,r)=>{for(var a=r>1?void 0:r?W(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&U(e,s,a),a};let P=class extends p{async connectedCallback(){super.connectedCallback();const t=await this.fetchContactsHtml();this.getContactTemplateArgs(t)}async fetchContactsHtml(){const t=new DOMParser,e=await g.fetchText("contact.plain.html",{cacheOptions:{cacheType:"runtime"}});return t.parseFromString(e,"text/html")}renderHeader(t){return t?i`<header class="major"><h2>${t}</h2></header>`:l}renderText(t){return t?i`<p>${t}</p>`:l}render(){if(!this.contactTemplateArgs)return l;const{headline:t,text:e,contacts:s}=this.contactTemplateArgs;return i`<section>${this.renderHeader(t)} ${this.renderText(e)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(t){const{icon:e,markup:s}=t;return!e&&!s?l:i`<li class="icon solid">${this.renderIcon(e)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(t){const e=t.querySelectorAll(".contact > div:not(:first-child)");return Array.from(e).map(r=>({icon:r.querySelector("div"),markup:r.querySelector("div:last-child")}))}getContactTemplateArgs(t){const e=t.querySelector("h2"),s=t.querySelector("p"),r=this.getContactsArgs(t);this.contactTemplateArgs={headline:e,text:s,contacts:r}}renderContacts(t){return t.length===0?l:i`<ul class="contact">${t.map(e=>this.renderContact(e))}</ul>`}renderIcon(t){return t?i`<icon-component class="icon-component" name="${t.innerHTML}"></icon-component>`:l}renderContactMarkup(t){return t?x(t.innerHTML):l}};A([y()],P.prototype,"contactTemplateArgs",2);P=A([m("sidebar-contact")],P);var J=Object.defineProperty,V=Object.getOwnPropertyDescriptor,O=(t,e,s,r)=>{for(var a=r>1?void 0:r?V(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&J(e,s,a),a};let $=class extends p{constructor(){super()}async connectedCallback(){super.connectedCallback();const t=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(t)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,s)=>e.lastModified>s.lastModified?-1:e.lastModified<s.lastModified?1:0),t.slice(0,3)}renderPicture(t){const e=R({src:t.image,alt:t.imagealt,width:336,height:224});return e?i`<a href="${t.path}" class="image">${e}</a>`:l}renderPost(t){return i`<article>${this.renderPicture(t)}<p>${t.description}</p></article>`}async getPosts(){return(await g.fetchJson("/query-index.json")).data.filter(e=>e.path.startsWith("/posts"))}};O([y()],$.prototype,"lastTreePosts",2);$=O([m("sidebar-posts")],$);var K=Object.defineProperty,G=Object.getOwnPropertyDescriptor,q=(t,e,s,r)=>{for(var a=r>1?void 0:r?G(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&K(e,s,a),a};let C=class extends p{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const t=await g.fetchText("footer.plain.html",{cacheOptions:{cacheType:"runtime"}}),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};q([y()],C.prototype,"footerMarkup",2);C=q([m("sidebar-footer")],C);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Z=(t,e,s,r)=>{for(var a=r>1?void 0:r?X(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&Q(e,s,a),a};let _=class extends p{constructor(){super(...arguments),this.toggleRef=H(),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${N(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};_=Z([m("sidebar-component")],_);function ee({input:t,specifier:e,htmlTag:s}){return t.split(e).map((r,a)=>a%2===1?`<${s}>${r}</${s}>`:r).join("")}var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,D=(t,e,s,r)=>{for(var a=r>1?void 0:r?se(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&te(e,s,a),a};let L=class extends p{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await g.fetchJson("header.json",{cacheOptions:{cacheType:"runtime"}});this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,s=ee({input:t.logoText,htmlTag:"strong",specifier:":::"}),r=x(s);return i`<a href="${t.logoLink}" class="logo">${r}</a><ul class="icons">${e.map(a=>i`<li><a href="${a.socialLink}" class="icon brands" aria-label="${a.socialLabel}"><icon-component class="header-icon" name="${a.socialIcon}"></icon-component><span class="label">${a.socialLabel}</span></a></li>`)}</ul>`}};D([y()],L.prototype,"headerData",2);L=D([m("header-component")],L);class re{readBlockConfig(e){const s={};return e.querySelectorAll(":scope > div").forEach(r=>{if(r.children){const a=[...r.children];if(a[1]){const o=a[1],n=S(a[0].textContent??"");let d="";if(o.querySelector("a")){const c=[...o.querySelectorAll("a")];c.length===1?d=c[0].href:d=c.map(f=>f.href)}else if(o.querySelector("img")){const c=[...o.querySelectorAll("img")];c.length===1?d=c[0].src:d=c.map(f=>f.src)}else if(o.querySelector("p")){const c=[...o.querySelectorAll("p")];c.length===1?d=c[0].textContent:d=c.map(f=>f.textContent)}else d=r.children[1].textContent;s[n]=d}}}),s}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const s=e.classList[0];if(s){e.classList.add("block"),e.dataset.blockName=s;const r=e.parentElement;r==null||r.classList.add(`${s}-wrapper`);const a=e.closest(".section");a&&a.classList.add(`${s}-container`)}}}function ae(t){return S(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class oe{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(e){const s=e.querySelector("div.section-metadata");if(s){const r=this.blockService.readBlockConfig(s);Object.keys(r).forEach(a=>{a==="style"?r.style.split(",").filter(n=>n).map(n=>S(n.trim())).forEach(n=>e.classList.add(n)):e.dataset[ae(a)]=r[a]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(e){const s=[];let r=!1;[...e.children].forEach(a=>{if(a.tagName==="DIV"||!r){const o=document.createElement("div");s.push(o),r=a.tagName!=="DIV",r&&o.classList.add("default-content-wrapper")}s[s.length-1].append(a)}),s.forEach(a=>e.append(a)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const r=s.parentElement;r&&r.classList.add("image","main")})}}const T=(t,e)=>{e.split(",").forEach(s=>{t.classList.add(S(s.trim()))})};function k(t,e=document){const s=t&&t.includes(":")?"property":"name",a=[...e.head.querySelectorAll(`meta[${s}="${t}"]`)].map(o=>o.content).join(", ");return a.length?a:""}const ne={mainTsPath:"src/main.ts",mainScssPath:"src/styles/sass/main.scss",fontsScssPath:"src/styles/sass/fonts.scss",lazyStylesScssPath:"src/styles/sass/lazy-styles.scss",sidekickLibraryStylesScssPath:"src/styles/sass/sidekick-library-styles.scss"};function M(){return v()?window.parent.location:window.location}const u=class u{};u.unloaded="unloaded",u.loading="loading",u.loaded="loaded",u.error="error";let h=u;class ie{constructor(e,s){this.sectionService=e,this.blockService=s,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const r=document.querySelector("main");if(r){r.setAttribute("id","main"),this.addSidebarContainer(r),this.sectionService.init(r),this.addInnerContainer(r),this.blockService.decorateBlocks(r),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{const{lazyStylesScssPath:r,sidekickLibraryStylesScssPath:a,fontsScssPath:o}=ne;try{r&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`),a&&v()&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/sidekickLibraryStyles/sidekickLibraryStyles.css`),o&&await this.loadFonts(),await this.loadBlocks()}catch(n){console.error("Load lazy error: ",n)}},this.loadBlocks=async()=>{const a=[...document.querySelectorAll(".section")].map(o=>this.loadBlock(o));await Promise.all(a)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(M().search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(e){if(v())return;const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),e.after(s)}addInnerContainer(e){const s=e.innerHTML;e.innerHTML=`<div class="inner">${v()?"":'<header-component id="header"></header-component>'}${s}</div>`}decorateTemplateAndTheme(){const e=k("template");e&&T(document.body,e);const s=k("theme");s&&T(document.body,s)}collectBlocks(e){const s=[];return e.querySelectorAll("[data-block-name]").forEach(a=>{s.push({name:a.dataset.blockName,element:a})}),s}async loadBlockModules(e){if((e.element.dataset.blockStatus??h.unloaded)===h.unloaded){e.element.dataset.blockStatus=h.loading;try{const r=await E(()=>import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`),__vite__mapDeps([]));r.default&&await r.default(e.element),e.element.dataset.blockStatus=h.loaded}catch(r){e.element.dataset.blockStatus=h.error,console.error("An error occurred during module import:",r)}}}async loadBlockStyles(e){try{await this.loadCSS(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.css`)}catch{console.error(`problem with block '${e.name}' loading styles`)}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{M().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e){return new Promise((s,r)=>{if(document.querySelector(`head > link[href="${e}"]`))s(!0);else{const a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onload=s,a.onerror=r,document.head.append(a)}})}async waitForLCP(){const e=document.querySelector(".section");if(e){const a=this.collectBlocks(e).map(async o=>{this.lcpBlocks.includes(o.name)&&await Promise.all([this.loadBlockModules(o),this.loadBlockStyles(o)])});await Promise.all(a),this.showSection(e)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(r=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>r()),s.addEventListener("error",()=>r())):r()})}async loadBlock(e){const s=this.collectBlocks(e);if(!s.length){this.showSection(e);return}for(const r of s)Promise.all([this.loadBlockModules(r),this.loadBlockStyles(r)]);this.showSection(e)}}(async function(){const t=new re,e=new oe(t);await new ie(e,t).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
