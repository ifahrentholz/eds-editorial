import{s as u,x as i,T as h}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as j,t as p}from"../__chunks__/property.0daVBkvz.js";import{_ as E}from"../__chunks__/icon.PS61ZRz5.js";import{S as _,f as L,c as q,a as x}from"../__chunks__/createOptimizedPicture.pmVXgrKr.js";import{o as M}from"../__chunks__/unsafe-html.dKgBHtsI.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return j({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t,e){return(s,a,r)=>{const n=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:o,set:l}=typeof a=="object"?s:r??(()=>{const c=Symbol();return{get(){return this[c]},set(d){this[c]=d}}})();return C(s,a,{get(){let c=o.call(this);return c===void 0&&(c=n(this),(c!==null||this.hasUpdated)&&l.call(this,c)),c}})}return C(s,a,{get(){return n(this)}})}}var I=Object.defineProperty,H=Object.getOwnPropertyDescriptor,T=(t,e,s,a)=>{for(var r=a>1?void 0:a?H(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&I(e,s,r),r};let g=class extends u{constructor(){super(...arguments),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const t={};return(await _.getSiteMap()).forEach(a=>{const r=this.getSubmenuName(a);t[r]||(t[r]=[]),t[r].push({path:a.path,navtitle:this.getNavTitle(a)})}),Object.values(t).map(a=>a.length===1?a[0]:{navtitle:a[0].path.split("/")[1],path:a[0].path,children:a})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return i`<li>${t.children!==void 0?this.renderSubMenu(t):i`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}};T([m()],g.prototype,"items",2);g=T([p("sidebar-nav")],g);var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,A=(t,e,s,a)=>{for(var r=a>1?void 0:a?F(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&N(e,s,r),r};let v=class extends u{async connectedCallback(){super.connectedCallback();const t=await this.fetchContactsHtml();this.getContactTemplateArgs(t)}async fetchContactsHtml(){const t=new DOMParser,e=await L("contact.plain.html");return t.parseFromString(e,"text/html")}renderHeader(t){return t?i`<header class="major"><h2>${t}</h2></header>`:h}renderText(t){return t?i`<p>${t}</p>`:h}render(){if(!this.contactTemplateArgs)return h;const{headline:t,text:e,contacts:s}=this.contactTemplateArgs;return i`<section>${this.renderHeader(t)} ${this.renderText(e)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(t){const{icon:e,markup:s}=t;return!e&&!s?h:i`<li class="icon solid">${this.renderIcon(e)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(t){const e=t.querySelectorAll(".contact > div:not(:first-child)");return Array.from(e).map(a=>({icon:a.querySelector("div"),markup:a.querySelector("div:last-child")}))}getContactTemplateArgs(t){const e=t.querySelector("h2"),s=t.querySelector("p"),a=this.getContactsArgs(t);this.contactTemplateArgs={headline:e,text:s,contacts:a}}renderContacts(t){return t.length===0?h:i`<ul class="contact">${t.map(e=>this.renderContact(e))}</ul>`}renderIcon(t){return t?i`<icon-component class="icon-component" name="${t.innerHTML}"></icon-component>`:h}renderContactMarkup(t){return t?M(t.innerHTML):h}};A([m()],v.prototype,"contactTemplateArgs",2);v=A([p("sidebar-contact")],v);var U=Object.defineProperty,z=Object.getOwnPropertyDescriptor,k=(t,e,s,a)=>{for(var r=a>1?void 0:a?z(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&U(e,s,r),r};let b=class extends u{constructor(){super()}async connectedCallback(){super.connectedCallback();const t=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(t)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,s)=>e.lastModified>s.lastModified?-1:e.lastModified<s.lastModified?1:0),t.slice(0,3)}renderPost(t){return i`<article><a href="${t.path}" class="image">${q({src:t.image,alt:t.imagealt,width:"336",height:"224"})}</a><p>${t.description}</p></article>`}async getPosts(){return(await _.getSiteMap()).filter(e=>e.path.includes("/posts"))}};k([m()],b.prototype,"lastTreePosts",2);b=k([p("sidebar-posts")],b);var V=Object.defineProperty,J=Object.getOwnPropertyDescriptor,B=(t,e,s,a)=>{for(var r=a>1?void 0:a?J(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&V(e,s,r),r};let y=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const t=await L("footer.plain.html"),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};B([m()],y.prototype,"footerMarkup",2);y=B([p("sidebar-footer")],y);var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,O=(t,e,s,a)=>{for(var r=a>1?void 0:a?W(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&K(e,s,r),r};let S=class extends u{constructor(){super(...arguments),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}firstUpdated(){this.toggle.addEventListener("click",this.handleToggleClick)}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};O([R(".toggle")],S.prototype,"toggle",2);S=O([p("sidebar-component")],S);function G({input:t,specifier:e,htmlTag:s}){return t.split(e).map((a,r)=>r%2===1?`<${s}>${a}</${s}>`:a).join("")}var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,D=(t,e,s,a)=>{for(var r=a>1?void 0:a?X(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&Q(e,s,r),r};let w=class extends u{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await x("header.json");this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,s=G({input:t.logoText,htmlTag:"strong",specifier:":::"}),a=M(s);return i`<a href="${t.logoLink}" class="logo">${a}</a><ul class="icons">${e.map(r=>i`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}"><a href="${r.socialLink}" class="icon brands"><icon-component class="header-icon" name="${r.socialIcon}"></icon-component><span class="label">${r.socialLabel}</span></a></a></li>`)}</ul>`}};D([m()],w.prototype,"headerData",2);w=D([p("header-component")],w);function f(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class Y{readBlockConfig(e){const s={};return e.querySelectorAll(":scope > div").forEach(a=>{if(a.children){const r=[...a.children];if(r[1]){const n=r[1],o=f(r[0].textContent??"");let l="";if(n.querySelector("a")){const c=[...n.querySelectorAll("a")];c.length===1?l=c[0].href:l=c.map(d=>d.href)}else if(n.querySelector("img")){const c=[...n.querySelectorAll("img")];c.length===1?l=c[0].src:l=c.map(d=>d.src)}else if(n.querySelector("p")){const c=[...n.querySelectorAll("p")];c.length===1?l=c[0].textContent:l=c.map(d=>d.textContent)}else l=a.children[1].textContent;s[o]=l}}}),s}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const s=e.classList[0];if(s){e.classList.add("block"),e.dataset.blockName=s;const a=e.parentElement;a==null||a.classList.add(`${s}-wrapper`);const r=e.closest(".section");r&&r.classList.add(`${s}-container`)}}}function Z(t){return f(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class ee{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(e){const s=e.querySelector("div.section-metadata");if(s){const a=this.blockService.readBlockConfig(s);Object.keys(a).forEach(r=>{r==="style"?a.style.split(",").filter(o=>o).map(o=>f(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[Z(r)]=a[r]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(e){const s=[];let a=!1;[...e.children].forEach(r=>{if(r.tagName==="DIV"||!a){const n=document.createElement("div");s.push(n),a=r.tagName!=="DIV",a&&n.classList.add("default-content-wrapper")}s[s.length-1].append(r)}),s.forEach(r=>e.append(r)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const a=s.parentElement;a&&a.classList.add("image","main")})}}const $=(t,e)=>{e.split(",").forEach(s=>{t.classList.add(f(s.trim()))})};function P(t,e=document){const s=t&&t.includes(":")?"property":"name",r=[...e.head.querySelectorAll(`meta[${s}="${t}"]`)].map(n=>n.content).join(", ");return r.length?r:""}class te{constructor(e,s){this.sectionService=e,this.blockService=s,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const r=document.querySelector("body");r&&(r.style.display="none")}const a=document.querySelector("main");if(a){a.setAttribute("id","main"),this.addSidebarContainer(a),this.sectionService.init(a),this.addInnerContainer(a),this.blockService.decorateBlocks(a),setTimeout(()=>{document.body.removeAttribute("style")},200),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{await this.loadFonts(),await this.loadBlocks()},this.loadBlocks=async()=>{const r=[...document.querySelectorAll(".section")].map(n=>this.loadBlock(n));await Promise.all(r)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(e){const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.add("inactive"):s.classList.remove("inactive"),e.after(s)}addInnerContainer(e){const s=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${s}</div>`}decorateTemplateAndTheme(){const e=P("template");e&&$(document.body,e);const s=P("theme");s&&$(document.body,s)}collectBlocks(e){const s=[];return e.querySelectorAll("[data-block-name]").forEach(r=>{s.push({name:r.dataset.blockName,element:r})}),s}async loadBlockModules(e){const s=e.element.dataset.blockStatus;if(s!=="loading"&&s!=="loaded"){e.element.dataset.blockStatus="loading";const a=await E(()=>import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`),__vite__mapDeps([]));a.default&&await a.default(e.element),e.element.dataset.blockStatus="loaded"}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e){return new Promise((s,a)=>{if(document.querySelector(`head > link[href="${e}"]`))s(!0);else{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=s,r.onerror=a,document.head.append(r)}})}async waitForLCP(){const e=document.querySelector(".section");if(e){const r=this.collectBlocks(e).map(async n=>{this.lcpBlocks.includes(n.name)&&await this.loadBlockModules(n)});await Promise.all(r),this.showSection(e)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(a=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>a()),s.addEventListener("error",()=>a())):a()})}async loadBlock(e){const s=this.collectBlocks(e);if(!s.length){this.showSection(e);return}for(const a of s)await this.loadBlockModules(a);this.showSection(e)}}(async function(){const t=new Y,e=new ee(t);await new te(e,t).init(),console.log("TEst CI")})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
