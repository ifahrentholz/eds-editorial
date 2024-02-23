import{T as l,s as h,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as k,t as u}from"../__chunks__/property.0daVBkvz.js";import{f as D,_ as O}from"../__chunks__/icon.vh7VrxK3.js";import{e as j,o as M}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{F as f,c as E,g as C}from"../__chunks__/createOptimizedPicture.VF-L56J3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return k({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=()=>new R;class R{}const v=new WeakMap,H=j(class extends D{render(t){return l}update(t,[e]){var r;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),l}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let s=v.get(e);s===void 0&&(s=new WeakMap,v.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=v.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var F=Object.defineProperty,N=Object.getOwnPropertyDescriptor,T=(t,e,s,r)=>{for(var a=r>1?void 0:r?N(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(r?o(e,s,a):o(a))||a);return r&&a&&F(e,s,a),a};let y=class extends h{constructor(){super(...arguments),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const t={};return(await f.fetchJson("/query-index.json")).data.forEach(r=>{const a=this.getSubmenuName(r);t[a]||(t[a]=[]),t[a].push({path:r.path,navtitle:this.getNavTitle(r)})}),Object.values(t).map(r=>r.length===1?r[0]:{navtitle:r[0].path.split("/")[1],path:r[0].path,children:r})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return i`<li>${t.children!==void 0?this.renderSubMenu(t):i`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}};T([m()],y.prototype,"items",2);y=T([u("sidebar-nav")],y);var Y=Object.defineProperty,U=Object.getOwnPropertyDescriptor,x=(t,e,s,r)=>{for(var a=r>1?void 0:r?U(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(r?o(e,s,a):o(a))||a);return r&&a&&Y(e,s,a),a};let w=class extends h{async connectedCallback(){super.connectedCallback();const t=await this.fetchContactsHtml();this.getContactTemplateArgs(t)}async fetchContactsHtml(){const t=new DOMParser,e=await f.fetchText("contact.plain.html");return t.parseFromString(e,"text/html")}renderHeader(t){return t?i`<header class="major"><h2>${t}</h2></header>`:l}renderText(t){return t?i`<p>${t}</p>`:l}render(){if(!this.contactTemplateArgs)return l;const{headline:t,text:e,contacts:s}=this.contactTemplateArgs;return i`<section>${this.renderHeader(t)} ${this.renderText(e)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(t){const{icon:e,markup:s}=t;return!e&&!s?l:i`<li class="icon solid">${this.renderIcon(e)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(t){const e=t.querySelectorAll(".contact > div:not(:first-child)");return Array.from(e).map(r=>({icon:r.querySelector("div"),markup:r.querySelector("div:last-child")}))}getContactTemplateArgs(t){const e=t.querySelector("h2"),s=t.querySelector("p"),r=this.getContactsArgs(t);this.contactTemplateArgs={headline:e,text:s,contacts:r}}renderContacts(t){return t.length===0?l:i`<ul class="contact">${t.map(e=>this.renderContact(e))}</ul>`}renderIcon(t){return t?i`<icon-component class="icon-component" name="${t.innerHTML}"></icon-component>`:l}renderContactMarkup(t){return t?M(t.innerHTML):l}};x([m()],w.prototype,"contactTemplateArgs",2);w=x([u("sidebar-contact")],w);var z=Object.defineProperty,W=Object.getOwnPropertyDescriptor,q=(t,e,s,r)=>{for(var a=r>1?void 0:r?W(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(r?o(e,s,a):o(a))||a);return r&&a&&z(e,s,a),a};let b=class extends h{constructor(){super()}async connectedCallback(){super.connectedCallback();const t=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(t)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,s)=>e.lastModified>s.lastModified?-1:e.lastModified<s.lastModified?1:0),t.slice(0,3)}renderPost(t){return i`<article><a href="${t.path}" class="image">${E({src:t.image,alt:t.imagealt,width:"336",height:"224"})}</a><p>${t.description}</p></article>`}async getPosts(){return(await f.fetchJson("/query-index.json")).data.filter(e=>e.path.includes("/posts"))}};q([m()],b.prototype,"lastTreePosts",2);b=q([u("sidebar-posts")],b);var J=Object.defineProperty,V=Object.getOwnPropertyDescriptor,A=(t,e,s,r)=>{for(var a=r>1?void 0:r?V(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(r?o(e,s,a):o(a))||a);return r&&a&&J(e,s,a),a};let S=class extends h{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const t=await f.fetchText("footer.plain.html"),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};A([m()],S.prototype,"footerMarkup",2);S=A([u("sidebar-footer")],S);var K=Object.defineProperty,G=Object.getOwnPropertyDescriptor,Q=(t,e,s,r)=>{for(var a=r>1?void 0:r?G(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(r?o(e,s,a):o(a))||a);return r&&a&&K(e,s,a),a};let P=class extends h{constructor(){super(...arguments),this.toggleRef=I(),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${H(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};P=Q([u("sidebar-component")],P);function X({input:t,specifier:e,htmlTag:s}){return t.split(e).map((r,a)=>a%2===1?`<${s}>${r}</${s}>`:r).join("")}var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,B=(t,e,s,r)=>{for(var a=r>1?void 0:r?ee(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(r?o(e,s,a):o(a))||a);return r&&a&&Z(e,s,a),a};let $=class extends h{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await f.fetchJson("header.json");this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,s=X({input:t.logoText,htmlTag:"strong",specifier:":::"}),r=M(s);return i`<a href="${t.logoLink}" class="logo">${r}</a><ul class="icons">${e.map(a=>i`<li><a href="${a.socialLink}" class="icon brands" aria-label="${a.socialLabel}"><icon-component class="header-icon" name="${a.socialIcon}"></icon-component><span class="label">${a.socialLabel}</span></a></li>`)}</ul>`}};B([m()],$.prototype,"headerData",2);$=B([u("header-component")],$);function g(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class te{readBlockConfig(e){const s={};return e.querySelectorAll(":scope > div").forEach(r=>{if(r.children){const a=[...r.children];if(a[1]){const n=a[1],o=g(a[0].textContent??"");let d="";if(n.querySelector("a")){const c=[...n.querySelectorAll("a")];c.length===1?d=c[0].href:d=c.map(p=>p.href)}else if(n.querySelector("img")){const c=[...n.querySelectorAll("img")];c.length===1?d=c[0].src:d=c.map(p=>p.src)}else if(n.querySelector("p")){const c=[...n.querySelectorAll("p")];c.length===1?d=c[0].textContent:d=c.map(p=>p.textContent)}else d=r.children[1].textContent;s[o]=d}}}),s}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const s=e.classList[0];if(s){e.classList.add("block"),e.dataset.blockName=s;const r=e.parentElement;r==null||r.classList.add(`${s}-wrapper`);const a=e.closest(".section");a&&a.classList.add(`${s}-container`)}}}function se(t){return g(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class re{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(e){const s=e.querySelector("div.section-metadata");if(s){const r=this.blockService.readBlockConfig(s);Object.keys(r).forEach(a=>{a==="style"?r.style.split(",").filter(o=>o).map(o=>g(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[se(a)]=r[a]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(e){const s=[];let r=!1;[...e.children].forEach(a=>{if(a.tagName==="DIV"||!r){const n=document.createElement("div");s.push(n),r=a.tagName!=="DIV",r&&n.classList.add("default-content-wrapper")}s[s.length-1].append(a)}),s.forEach(a=>e.append(a)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const r=s.parentElement;r&&r.classList.add("image","main")})}}const _=(t,e)=>{e.split(",").forEach(s=>{t.classList.add(g(s.trim()))})};function L(t,e=document){const s=t&&t.includes(":")?"property":"name",a=[...e.head.querySelectorAll(`meta[${s}="${t}"]`)].map(n=>n.content).join(", ");return a.length?a:""}class ae{constructor(e,s){this.sectionService=e,this.blockService=s,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const r=document.querySelector("main");if(r){r.setAttribute("id","main"),this.addSidebarContainer(r),this.sectionService.init(r),this.addInnerContainer(r),this.blockService.decorateBlocks(r),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{await this.loadFonts(),await this.loadBlocks()},this.loadBlocks=async()=>{const a=[...document.querySelectorAll(".section")].map(n=>this.loadBlock(n));await Promise.all(a)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(C().search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(e){const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),e.after(s)}addInnerContainer(e){const s=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${s}</div>`}decorateTemplateAndTheme(){const e=L("template");e&&_(document.body,e);const s=L("theme");s&&_(document.body,s)}collectBlocks(e){const s=[];return e.querySelectorAll("[data-block-name]").forEach(a=>{s.push({name:a.dataset.blockName,element:a})}),s}async loadBlockModules(e){const s=e.element.dataset.blockStatus;if(s!=="loading"&&s!=="loaded"){e.element.dataset.blockStatus="loading";const r=await O(()=>import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`),__vite__mapDeps([]));r.default&&await r.default(e.element),e.element.dataset.blockStatus="loaded"}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{C().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e){return new Promise((s,r)=>{if(document.querySelector(`head > link[href="${e}"]`))s(!0);else{const a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onload=s,a.onerror=r,document.head.append(a)}})}async waitForLCP(){const e=document.querySelector(".section");if(e){const a=this.collectBlocks(e).map(async n=>{this.lcpBlocks.includes(n.name)&&await this.loadBlockModules(n)});await Promise.all(a),this.showSection(e)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(r=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>r()),s.addEventListener("error",()=>r())):r()})}async loadBlock(e){const s=this.collectBlocks(e);if(!s.length){this.showSection(e);return}for(const r of s)await this.loadBlockModules(r);this.showSection(e)}}(async function(){const t=new te,e=new re(t);await new ae(e,t).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
