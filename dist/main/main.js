import{s as u,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as A,t as h}from"../__chunks__/property.0daVBkvz.js";import{_ as B}from"../__chunks__/icon.PS61ZRz5.js";import{o as M}from"../__chunks__/unsafe-html.dKgBHtsI.js";import{c as R}from"../__chunks__/createOptimizedPicture.F94eikeI.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(s){return A({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(s,e){return(t,r,n)=>{const a=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(s))??null};if(e){const{get:o,set:l}=typeof r=="object"?t:n??(()=>{const c=Symbol();return{get(){return this[c]},set(d){this[c]=d}}})();return P(t,r,{get(){let c=o.call(this);return c===void 0&&(c=a(this),(c!==null||this.hasUpdated)&&l.call(this,c)),c}})}return P(t,r,{get(){return a(this)}})}}var b={},j;function T(s){return function(...e){return function(t,r,n){return Object.assign(Object.assign({},n),{value:s(n.value,...e)})}}}Object.defineProperty(b,"__esModule",{value:!0});const I=T(function(s,e=0){let t=-1;const r=function(...n){clearTimeout(t),t=window.setTimeout(()=>{s.call(this,...n)},e)};return r.cancel=function(){clearTimeout(t)},r}),H=T(function(s,e=0){let t,r=[];const n=function(...a){r=a,t===void 0&&(t=window.setTimeout(()=>{t=void 0,s.call(this,...r)},e))};return n.cancel=function(){clearTimeout(t),t=void 0},n});j=b.debounce=I,b.throttle=H;var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,O=(s,e,t,r)=>{for(var n=r>1?void 0:r?U(e,t):e,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&N(e,t,n),n};let g=class extends u{constructor(){super(...arguments),this.getSubmenuName=s=>s.path.split("/")[1],this.groupByFirstLevelPath=s=>{const e={};return s.forEach(r=>{const n=this.getSubmenuName(r);e[n]||(e[n]=[]),e[n].push({path:r.path,navtitle:this.getNavTitle(r)})}),Object.values(e).map(r=>r.length===1?r[0]:{navtitle:r[0].path.split("/")[1],path:r[0].path,children:r})}}createRenderRoot(){return this}async firstUpdated(){const s=await this.fetchSitemap();this.items=this.groupByFirstLevelPath(s)}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:s}){!(s instanceof HTMLElement)||!s.classList.contains("opener")||s.classList.toggle("active")}renderSubMenu(s){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${s.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${s.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(s){return i`<li>${s.children!==void 0?this.renderSubMenu(s):i`<a href="${s.path}">${s.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(s=>this.renderMenuItem(s))}</ul>`}async fetchSitemap(){return(await(await fetch(`${window.hlx.codeBasePath}/query-index.json`)).json()).data}getNavTitle(s){return s.path==="/"?"Homepage":s.navtitle||s.title}};O([p()],g.prototype,"items",2);g=O([h("sidebar-nav")],g);const m=async s=>{const{endpoint:e,getJson:t=!1,init:r}=s,n=e.startsWith("/")?e:`/${e}`,a=await fetch(`${window.hlx.codeBasePath}${n}`,r);return t?await a.json():await a.text()};var V=Object.defineProperty,z=Object.getOwnPropertyDescriptor,D=(s,e,t,r)=>{for(var n=r>1?void 0:r?z(e,t):e,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&V(e,t,n),n};let y=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchContactData()}async fetchContactData(){const s=await m({endpoint:"contact.plain.html"}),e=document.createElement("div");e.innerHTML=s,this.contactTemplateArgs={headline:e.querySelector("h2"),text:e.querySelector("p"),contacts:Array.from(e.querySelectorAll(".contact > div:not(:first-child)")).map(t=>{var r,n;return{contactIcon:(r=t.querySelector("div"))==null?void 0:r.innerText,contactMarkup:(n=t.querySelector("div:last-child"))==null?void 0:n.innerHTML}})}}render(){if(!this.contactTemplateArgs)return;const{headline:s,text:e,contacts:t}=this.contactTemplateArgs;return i`<section><header class="major">${s}</header>${e}<ul class="contact">${t.map(r=>i`<li class="icon solid"><icon-component name="${r.contactIcon}"></icon-component>${M(r.contactMarkup)}</li>`)}</ul></section>`}};D([p()],y.prototype,"contactTemplateArgs",2);y=D([h("sidebar-contact")],y);var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,x=(s,e,t,r)=>{for(var n=r>1?void 0:r?J(e,t):e,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&F(e,t,n),n};let w=class extends u{async connectedCallback(){super.connectedCallback();const s=await this.fetchSitemap(),e=this.getPosts(s);this.lastThreePosts=this.getLastThreePosts(e)}render(){if(this.lastThreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastThreePosts.map(s=>this.renderPost(s))}</div>`}createRenderRoot(){return this}getLastThreePosts(s){return s.sort((e,t)=>e.lastModified>t.lastModified?-1:e.lastModified<t.lastModified?1:0),s.slice(0,3)}async fetchSitemap(){return(await m({endpoint:"/query-index.json",getJson:!0})).data}renderPost(s){return i`<article><a href="${s.path}" class="image">${R({src:s.image,alt:s.imagealt})}</a><p>${s.description}</p></article>`}getPosts(s){return s.filter(e=>e.path.includes("/posts"))}};x([p()],w.prototype,"lastThreePosts",2);w=x([h("sidebar-posts")],w);var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,E=(s,e,t,r)=>{for(var n=r>1?void 0:r?K(e,t):e,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&W(e,t,n),n};let S=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const s=await m({endpoint:"footer.plain.html"}),e=document.createElement("div");e.innerHTML=s,this.footerMarkup=e.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};E([p()],S.prototype,"footerMarkup",2);S=E([h("sidebar-footer")],S);var G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,_=(s,e,t,r)=>{for(var n=r>1?void 0:r?Q(e,t):e,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&G(e,t,n),n};let f=class extends u{constructor(){super(...arguments),this.handleToggleClick=s=>{s.preventDefault(),this.classList.toggle("inactive")}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.setInitialVisibility.bind(this))}setInitialVisibility(){window.innerWidth<=1280?this.classList.add("inactive"):this.classList.remove("inactive")}firstUpdated(){this.toggle.addEventListener("click",this.handleToggleClick)}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};_([k(".toggle")],f.prototype,"toggle",2);_([j(100)],f.prototype,"setInitialVisibility",1);f=_([h("sidebar-component")],f);function X({input:s,specifier:e,htmlTag:t}){return s.split(e).map((r,n)=>n%2===1?`<${t}>${r}</${t}>`:r).join("")}var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,q=(s,e,t,r)=>{for(var n=r>1?void 0:r?Z(e,t):e,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Y(e,t,n),n};let $=class extends u{createRenderRoot(){return this}async firstUpdated(s){await this.fetchHeaderData()}async fetchHeaderData(){try{const s=await m({endpoint:"header.json",getJson:!0});this.headerData={leftCol:s.leftCol.data[0],rightCol:s.rightCol.data}}catch(s){console.error("HeaderComponent: ",s)}}render(){if(!this.headerData)return;const{leftCol:s,rightCol:e}=this.headerData,t=X({input:s.logoText,htmlTag:"strong",specifier:":::"}),r=M(t);return i`<a href="${s.logoLink}" class="logo">${r}</a><ul class="icons">${e.map(n=>i`<li><a href="${n.socialLink}" class="icon brands" aria-label="${n.socialLabel}"><icon-component class="header-icon" name="${n.socialIcon}"></icon-component><span class="label">${n.socialLabel}</span></a></li>`)}</ul>`}};q([p()],$.prototype,"headerData",2);$=q([h("header-component")],$);function v(s){return typeof s=="string"?s.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class ee{readBlockConfig(e){const t={};return e.querySelectorAll(":scope > div").forEach(r=>{if(r.children){const n=[...r.children];if(n[1]){const a=n[1],o=v(n[0].textContent??"");let l="";if(a.querySelector("a")){const c=[...a.querySelectorAll("a")];c.length===1?l=c[0].href:l=c.map(d=>d.href)}else if(a.querySelector("img")){const c=[...a.querySelectorAll("img")];c.length===1?l=c[0].src:l=c.map(d=>d.src)}else if(a.querySelector("p")){const c=[...a.querySelectorAll("p")];c.length===1?l=c[0].textContent:l=c.map(d=>d.textContent)}else l=r.children[1].textContent;t[o]=l}}}),t}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const t=e.classList[0];if(t){e.classList.add("block"),e.dataset.blockName=t;const r=e.parentElement;r==null||r.classList.add(`${t}-wrapper`);const n=e.closest(".section");n&&n.classList.add(`${t}-container`)}}}function te(s){return v(s).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class se{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(t=>{this.adjustMarkup(t),this.processSectionMetaData(t)})}processSectionMetaData(e){const t=e.querySelector("div.section-metadata");if(t){const r=this.blockService.readBlockConfig(t);Object.keys(r).forEach(n=>{n==="style"?r.style.split(",").filter(o=>o).map(o=>v(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[te(n)]=r[n]}),t.parentElement&&t.parentElement.remove()}}adjustMarkup(e){const t=[];let r=!1;[...e.children].forEach(n=>{if(n.tagName==="DIV"||!r){const a=document.createElement("div");t.push(a),r=n.tagName!=="DIV",r&&a.classList.add("default-content-wrapper")}t[t.length-1].append(n)}),t.forEach(n=>e.append(n)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(t=>{const r=t.parentElement;r&&r.classList.add("image","main")})}}const C=(s,e)=>{e.split(",").forEach(t=>{s.classList.add(v(t.trim()))})};function L(s,e=document){const t=s&&s.includes(":")?"property":"name",n=[...e.head.querySelectorAll(`meta[${t}="${s}"]`)].map(a=>a.content).join(", ");return n.length?n:""}class ne{constructor(e,t){this.sectionService=e,this.blockService=t,this.init=async()=>{this.setup(),await this.loadEager()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const n=document.querySelector("body");n&&(n.style.display="none")}const r=document.querySelector("main");r&&(r.setAttribute("id","main"),this.addSidebarContainer(r),this.sectionService.init(r),this.addInnerContainer(r),this.blockService.decorateBlocks(r),await this.loadBlocks(),setTimeout(()=>{document.body.removeAttribute("style")},200))},this.loadBlocks=async()=>{document.querySelectorAll(".section").forEach(async n=>{const a=this.collectBlocks(n);if(!a.length){this.showSection(n);return}await this.loadBlockModules(a),this.showSection(n)})}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(t){console.log(t)}}addSidebarContainer(e){const t=document.createElement("sidebar-component");t.setAttribute("id","sidebar"),window.innerWidth<=1280?t.classList.add("inactive"):t.classList.remove("inactive"),e.after(t)}addInnerContainer(e){const t=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${t}</div>`}decorateTemplateAndTheme(){const e=L("template");e&&C(document.body,e);const t=L("theme");t&&C(document.body,t)}collectBlocks(e){const t=[];return e.querySelectorAll("[data-block-name]").forEach(n=>{t.push({name:n.dataset.blockName,element:n})}),t}async loadBlockModules(e){for(const t of e){const r=await B(()=>import(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.js`),__vite__mapDeps([]));r.default&&await r.default(t.element)}}showSection(e){e.style.removeProperty("display")}}(async function(){const s=new ee,e=new se(s);await new ne(e,s).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
