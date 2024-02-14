import{s as u,x as i,T as h}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as q,t as p}from"../__chunks__/property.0daVBkvz.js";import{_ as x}from"../__chunks__/icon.PS61ZRz5.js";import{S as _,f as L,c as B,a as E}from"../__chunks__/createOptimizedPicture.FL3x6PMT.js";import{o as M}from"../__chunks__/unsafe-html.dKgBHtsI.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return q({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t,e){return(r,a,s)=>{const n=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:o,set:l}=typeof a=="object"?r:s??(()=>{const c=Symbol();return{get(){return this[c]},set(d){this[c]=d}}})();return C(r,a,{get(){let c=o.call(this);return c===void 0&&(c=n(this),(c!==null||this.hasUpdated)&&l.call(this,c)),c}})}return C(r,a,{get(){return n(this)}})}}var H=Object.defineProperty,I=Object.getOwnPropertyDescriptor,T=(t,e,r,a)=>{for(var s=a>1?void 0:a?I(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(a?o(e,r,s):o(s))||s);return a&&s&&H(e,r,s),s};let g=class extends u{constructor(){super(...arguments),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const t={};return(await _.getSiteMap()).forEach(a=>{const s=this.getSubmenuName(a);t[s]||(t[s]=[]),t[s].push({path:a.path,navtitle:this.getNavTitle(a)})}),Object.values(t).map(a=>a.length===1?a[0]:{navtitle:a[0].path.split("/")[1],path:a[0].path,children:a})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return i`<li>${t.children!==void 0?this.renderSubMenu(t):i`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}};T([m()],g.prototype,"items",2);g=T([p("sidebar-nav")],g);var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,A=(t,e,r,a)=>{for(var s=a>1?void 0:a?F(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(a?o(e,r,s):o(s))||s);return a&&s&&N(e,r,s),s};let v=class extends u{async connectedCallback(){super.connectedCallback();const t=await this.fetchContactsHtml();this.getContactTemplateArgs(t)}async fetchContactsHtml(){const t=new DOMParser,e=await L("contact.plain.html");return t.parseFromString(e,"text/html")}renderHeader(t){return t?i`<header class="major"><h2>${t}</h2></header>`:h}renderText(t){return t?i`<p>${t}</p>`:h}render(){if(!this.contactTemplateArgs)return h;const{headline:t,text:e,contacts:r}=this.contactTemplateArgs;return i`<section>${this.renderHeader(t)} ${this.renderText(e)} ${this.renderContacts(r)}</section>`}createRenderRoot(){return this}renderContact(t){const{icon:e,markup:r}=t;return!e&&!r?h:i`<li class="icon solid">${this.renderIcon(e)} ${this.renderContactMarkup(r)}</li>`}getContactsArgs(t){const e=t.querySelectorAll(".contact > div:not(:first-child)");return Array.from(e).map(a=>({icon:a.querySelector("div"),markup:a.querySelector("div:last-child")}))}getContactTemplateArgs(t){const e=t.querySelector("h2"),r=t.querySelector("p"),a=this.getContactsArgs(t);this.contactTemplateArgs={headline:e,text:r,contacts:a}}renderContacts(t){return t.length===0?h:i`<ul class="contact">${t.map(e=>this.renderContact(e))}</ul>`}renderIcon(t){return t?i`<icon-component class="icon-component" name="${t.innerHTML}"></icon-component>`:h}renderContactMarkup(t){return t?M(t.innerHTML):h}};A([m()],v.prototype,"contactTemplateArgs",2);v=A([p("sidebar-contact")],v);var U=Object.defineProperty,z=Object.getOwnPropertyDescriptor,O=(t,e,r,a)=>{for(var s=a>1?void 0:a?z(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(a?o(e,r,s):o(s))||s);return a&&s&&U(e,r,s),s};let b=class extends u{constructor(){super()}async connectedCallback(){super.connectedCallback();const t=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(t)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,r)=>e.lastModified>r.lastModified?-1:e.lastModified<r.lastModified?1:0),t.slice(0,3)}renderPost(t){return i`<article><a href="${t.path}" class="image">${B({src:t.image,alt:t.imagealt,width:"336",height:"224"})}</a><p>${t.description}</p></article>`}async getPosts(){return(await _.getSiteMap()).filter(e=>e.path.includes("/posts"))}};O([m()],b.prototype,"lastTreePosts",2);b=O([p("sidebar-posts")],b);var V=Object.defineProperty,K=Object.getOwnPropertyDescriptor,k=(t,e,r,a)=>{for(var s=a>1?void 0:a?K(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(a?o(e,r,s):o(s))||s);return a&&s&&V(e,r,s),s};let y=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const t=await L("footer.plain.html"),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};k([m()],y.prototype,"footerMarkup",2);y=k([p("sidebar-footer")],y);var J=Object.defineProperty,W=Object.getOwnPropertyDescriptor,D=(t,e,r,a)=>{for(var s=a>1?void 0:a?W(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(a?o(e,r,s):o(s))||s);return a&&s&&J(e,r,s),s};let w=class extends u{constructor(){super(...arguments),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}firstUpdated(){this.toggle.addEventListener("click",this.handleToggleClick)}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};D([R(".toggle")],w.prototype,"toggle",2);w=D([p("sidebar-component")],w);function G({input:t,specifier:e,htmlTag:r}){return t.split(e).map((a,s)=>s%2===1?`<${r}>${a}</${r}>`:a).join("")}var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,j=(t,e,r,a)=>{for(var s=a>1?void 0:a?X(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(a?o(e,r,s):o(s))||s);return a&&s&&Q(e,r,s),s};let S=class extends u{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await E("header.json");this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,r=G({input:t.logoText,htmlTag:"strong",specifier:":::"}),a=M(r);return i`<a href="${t.logoLink}" class="logo">${a}</a><ul class="icons">${e.map(s=>i`<li><a href="${s.socialLink}" class="icon brands" aria-label="${s.socialLabel}"><a href="${s.socialLink}" class="icon brands"><icon-component class="header-icon" name="${s.socialIcon}"></icon-component><span class="label">${s.socialLabel}</span></a></a></li>`)}</ul>`}};j([m()],S.prototype,"headerData",2);S=j([p("header-component")],S);function f(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class Y{readBlockConfig(e){const r={};return e.querySelectorAll(":scope > div").forEach(a=>{if(a.children){const s=[...a.children];if(s[1]){const n=s[1],o=f(s[0].textContent??"");let l="";if(n.querySelector("a")){const c=[...n.querySelectorAll("a")];c.length===1?l=c[0].href:l=c.map(d=>d.href)}else if(n.querySelector("img")){const c=[...n.querySelectorAll("img")];c.length===1?l=c[0].src:l=c.map(d=>d.src)}else if(n.querySelector("p")){const c=[...n.querySelectorAll("p")];c.length===1?l=c[0].textContent:l=c.map(d=>d.textContent)}else l=a.children[1].textContent;r[o]=l}}}),r}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const r=e.classList[0];if(r){e.classList.add("block"),e.dataset.blockName=r;const a=e.parentElement;a==null||a.classList.add(`${r}-wrapper`);const s=e.closest(".section");s&&s.classList.add(`${r}-container`)}}}function Z(t){return f(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class ee{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(r=>{this.adjustMarkup(r),this.processSectionMetaData(r)})}processSectionMetaData(e){const r=e.querySelector("div.section-metadata");if(r){const a=this.blockService.readBlockConfig(r);Object.keys(a).forEach(s=>{s==="style"?a.style.split(",").filter(o=>o).map(o=>f(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[Z(s)]=a[s]}),r.parentElement&&r.parentElement.remove()}}adjustMarkup(e){const r=[];let a=!1;[...e.children].forEach(s=>{if(s.tagName==="DIV"||!a){const n=document.createElement("div");r.push(n),a=s.tagName!=="DIV",a&&n.classList.add("default-content-wrapper")}r[r.length-1].append(s)}),r.forEach(s=>e.append(s)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(r=>{const a=r.parentElement;a&&a.classList.add("image","main")})}}const $=(t,e)=>{e.split(",").forEach(r=>{t.classList.add(f(r.trim()))})};function P(t,e=document){const r=t&&t.includes(":")?"property":"name",s=[...e.head.querySelectorAll(`meta[${r}="${t}"]`)].map(n=>n.content).join(", ");return s.length?s:""}const te=["banner"];class re{constructor(e,r){this.sectionService=e,this.blockService=r,this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const s=document.querySelector("body");s&&(s.style.display="none")}const a=document.querySelector("main");if(a){a.setAttribute("id","main"),this.addSidebarContainer(a),this.sectionService.init(a),this.addInnerContainer(a),this.blockService.decorateBlocks(a),setTimeout(()=>{document.body.removeAttribute("style")},200),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&this.loadFonts()}catch{}}},this.loadLazy=async()=>{await this.loadFonts(),await this.loadBlocks()},this.loadBlocks=async()=>{const s=[...document.querySelectorAll(".section")].map(n=>this.loadBlock(n));await Promise.all(s)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(r){console.log(r)}}addSidebarContainer(e){const r=document.createElement("sidebar-component");r.setAttribute("id","sidebar"),window.innerWidth<=1280?r.classList.add("inactive"):r.classList.remove("inactive"),e.after(r)}addInnerContainer(e){const r=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${r}</div>`}decorateTemplateAndTheme(){const e=P("template");e&&$(document.body,e);const r=P("theme");r&&$(document.body,r)}collectBlocks(e){const r=[];return e.querySelectorAll("[data-block-name]").forEach(s=>{r.push({name:s.dataset.blockName,element:s})}),r}async loadBlockModules(e){for(const r of e){const a=await x(()=>import(`${window.hlx.codeBasePath}/dist/${r.name}/${r.name}.js`),__vite__mapDeps([]));a.default&&await a.default(r.element)}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e){return new Promise((r,a)=>{if(document.querySelector(`head > link[href="${e}"]`))r(!0);else{const s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=r,s.onerror=a,document.head.append(s)}})}async waitForLCP(){const e=document.querySelector(".block");e&&te.includes(e==null?void 0:e.dataset.blockName)&&await this.loadBlock(e),document.body.style.display=null;const a=document.querySelector("main img");await new Promise(s=>{a&&!a.complete?(a.setAttribute("loading","eager"),a.setAttribute("fetchpriority","high"),a.addEventListener("load",()=>s()),a.addEventListener("error",()=>s())):s()})}async loadBlock(e){const r=this.collectBlocks(e);if(!r.length){this.showSection(e);return}await this.loadBlockModules(r),this.showSection(e)}}(async function(){const t=new Y,e=new ee(t);await new re(e,t).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
