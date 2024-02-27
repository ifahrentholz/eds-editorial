import{T as l,s as h,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as q,t as u}from"../__chunks__/property.0daVBkvz.js";import{f as A,_ as D}from"../__chunks__/icon.vh7VrxK3.js";import{e as O,o as L}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{F as f,c as j}from"../__chunks__/createOptimizedPicture.A4UouWLC.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return q({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=()=>new I;class I{}const v=new WeakMap,R=O(class extends A{render(t){return l}update(t,[e]){var a;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=(a=t.options)==null?void 0:a.host,this.rt(this.ct=t.element)),l}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let s=v.get(e);s===void 0&&(s=new WeakMap,v.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=v.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,M=(t,e,s,a)=>{for(var r=a>1?void 0:a?N(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&H(e,s,r),r};let w=class extends h{constructor(){super(...arguments),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=async()=>{let t=await f.fetchJson("/query-index.json");const e=["sidekick","sidekick-library","tools","development","dev-","__"],s=this.filterNavigation(t.data,e);t.data=s;const a=this.groupItemsByFirstLevelPath(t.data);return Object.values(a).map(n=>n.length===1?n[0]:{navtitle:n[0].path.split("/")[1],path:n[0].path,children:n})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return i`<li>${t.children!==void 0?this.renderSubMenu(t):i`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}filterNavigation(t,e){return t.filter(s=>e.every(a=>!s.path.includes(a))).map(s=>({path:s.path,navtitle:this.getNavTitle(s)}))}groupItemsByFirstLevelPath(t){const e={};return t.forEach(s=>{const a=this.getSubmenuName(s);e[a]||(e[a]=[]),e[a].push({path:s.path,navtitle:this.getNavTitle(s)})}),e}};M([m()],w.prototype,"items",2);w=M([u("sidebar-nav")],w);var F=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,T=(t,e,s,a)=>{for(var r=a>1?void 0:a?Y(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&F(e,s,r),r};let y=class extends h{async connectedCallback(){super.connectedCallback();const t=await this.fetchContactsHtml();this.getContactTemplateArgs(t)}async fetchContactsHtml(){const t=new DOMParser,e=await f.fetchText("contact.plain.html");return t.parseFromString(e,"text/html")}renderHeader(t){return t?i`<header class="major"><h2>${t}</h2></header>`:l}renderText(t){return t?i`<p>${t}</p>`:l}render(){if(!this.contactTemplateArgs)return l;const{headline:t,text:e,contacts:s}=this.contactTemplateArgs;return i`<section>${this.renderHeader(t)} ${this.renderText(e)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(t){const{icon:e,markup:s}=t;return!e&&!s?l:i`<li class="icon solid">${this.renderIcon(e)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(t){const e=t.querySelectorAll(".contact > div:not(:first-child)");return Array.from(e).map(a=>({icon:a.querySelector("div"),markup:a.querySelector("div:last-child")}))}getContactTemplateArgs(t){const e=t.querySelector("h2"),s=t.querySelector("p"),a=this.getContactsArgs(t);this.contactTemplateArgs={headline:e,text:s,contacts:a}}renderContacts(t){return t.length===0?l:i`<ul class="contact">${t.map(e=>this.renderContact(e))}</ul>`}renderIcon(t){return t?i`<icon-component class="icon-component" name="${t.innerHTML}"></icon-component>`:l}renderContactMarkup(t){return t?L(t.innerHTML):l}};T([m()],y.prototype,"contactTemplateArgs",2);y=T([u("sidebar-contact")],y);var U=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=(t,e,s,a)=>{for(var r=a>1?void 0:a?z(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&U(e,s,r),r};let b=class extends h{constructor(){super()}async connectedCallback(){super.connectedCallback();const t=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(t)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,s)=>e.lastModified>s.lastModified?-1:e.lastModified<s.lastModified?1:0),t.slice(0,3)}renderPost(t){return i`<article><a href="${t.path}" class="image">${j({src:t.image,alt:t.imagealt,width:"336",height:"224"})}</a><p>${t.description}</p></article>`}async getPosts(){return(await f.fetchJson("/query-index.json")).data.filter(e=>e.path.includes("/posts"))}};x([m()],b.prototype,"lastTreePosts",2);b=x([u("sidebar-posts")],b);var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,k=(t,e,s,a)=>{for(var r=a>1?void 0:a?W(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&V(e,s,r),r};let S=class extends h{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const t=await f.fetchText("footer.plain.html"),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};k([m()],S.prototype,"footerMarkup",2);S=k([u("sidebar-footer")],S);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,G=(t,e,s,a)=>{for(var r=a>1?void 0:a?K(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&J(e,s,r),r};let P=class extends h{constructor(){super(...arguments),this.toggleRef=E(),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${R(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};P=G([u("sidebar-component")],P);function Q({input:t,specifier:e,htmlTag:s}){return t.split(e).map((a,r)=>r%2===1?`<${s}>${a}</${s}>`:a).join("")}var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,B=(t,e,s,a)=>{for(var r=a>1?void 0:a?Z(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(a?o(e,s,r):o(r))||r);return a&&r&&X(e,s,r),r};let $=class extends h{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await f.fetchJson("header.json");this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,s=Q({input:t.logoText,htmlTag:"strong",specifier:":::"}),a=L(s);return i`<a href="${t.logoLink}" class="logo">${a}</a><ul class="icons">${e.map(r=>i`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}"><icon-component class="header-icon" name="${r.socialIcon}"></icon-component><span class="label">${r.socialLabel}</span></a></li>`)}</ul>`}};B([m()],$.prototype,"headerData",2);$=B([u("header-component")],$);function g(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class ee{readBlockConfig(e){const s={};return e.querySelectorAll(":scope > div").forEach(a=>{if(a.children){const r=[...a.children];if(r[1]){const n=r[1],o=g(r[0].textContent??"");let d="";if(n.querySelector("a")){const c=[...n.querySelectorAll("a")];c.length===1?d=c[0].href:d=c.map(p=>p.href)}else if(n.querySelector("img")){const c=[...n.querySelectorAll("img")];c.length===1?d=c[0].src:d=c.map(p=>p.src)}else if(n.querySelector("p")){const c=[...n.querySelectorAll("p")];c.length===1?d=c[0].textContent:d=c.map(p=>p.textContent)}else d=a.children[1].textContent;s[o]=d}}}),s}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const s=e.classList[0];if(s){e.classList.add("block"),e.dataset.blockName=s;const a=e.parentElement;a==null||a.classList.add(`${s}-wrapper`);const r=e.closest(".section");r&&r.classList.add(`${s}-container`)}}}function te(t){return g(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class se{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(e){const s=e.querySelector("div.section-metadata");if(s){const a=this.blockService.readBlockConfig(s);Object.keys(a).forEach(r=>{r==="style"?a.style.split(",").filter(o=>o).map(o=>g(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[te(r)]=a[r]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(e){const s=[];let a=!1;[...e.children].forEach(r=>{if(r.tagName==="DIV"||!a){const n=document.createElement("div");s.push(n),a=r.tagName!=="DIV",a&&n.classList.add("default-content-wrapper")}s[s.length-1].append(r)}),s.forEach(r=>e.append(r)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const a=s.parentElement;a&&a.classList.add("image","main")})}}const C=(t,e)=>{e.split(",").forEach(s=>{t.classList.add(g(s.trim()))})};function _(t,e=document){const s=t&&t.includes(":")?"property":"name",r=[...e.head.querySelectorAll(`meta[${s}="${t}"]`)].map(n=>n.content).join(", ");return r.length?r:""}class ae{constructor(e,s){this.sectionService=e,this.blockService=s,this.lcpBlocks=["banner"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const a=document.querySelector("main");if(a){a.setAttribute("id","main"),this.addSidebarContainer(a),this.sectionService.init(a),this.addInnerContainer(a),this.blockService.decorateBlocks(a),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{await this.loadFonts(),await this.loadBlocks()},this.loadBlocks=async()=>{const r=[...document.querySelectorAll(".section")].map(n=>this.loadBlock(n));await Promise.all(r)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(e){const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),e.after(s)}addInnerContainer(e){const s=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${s}</div>`}decorateTemplateAndTheme(){const e=_("template");e&&C(document.body,e);const s=_("theme");s&&C(document.body,s)}collectBlocks(e){const s=[];return e.querySelectorAll("[data-block-name]").forEach(r=>{s.push({name:r.dataset.blockName,element:r})}),s}async loadBlockModules(e){const s=e.element.dataset.blockStatus;if(s!=="loading"&&s!=="loaded"){e.element.dataset.blockStatus="loading";const a=await D(()=>import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`),__vite__mapDeps([]));a.default&&await a.default(e.element),e.element.dataset.blockStatus="loaded"}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e){return new Promise((s,a)=>{if(document.querySelector(`head > link[href="${e}"]`))s(!0);else{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=s,r.onerror=a,document.head.append(r)}})}async waitForLCP(){const e=document.querySelector(".section");if(e){const r=this.collectBlocks(e).map(async n=>{this.lcpBlocks.includes(n.name)&&await this.loadBlockModules(n)});await Promise.all(r),this.showSection(e)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(a=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>a()),s.addEventListener("error",()=>a())):a()})}async loadBlock(e){const s=this.collectBlocks(e);if(!s.length){this.showSection(e);return}for(const a of s)await this.loadBlockModules(a);this.showSection(e)}}(async function(){const t=new ee,e=new se(t);await new ae(e,t).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
