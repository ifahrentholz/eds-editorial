import{T as l,s as h,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as q,t as p}from"../__chunks__/property.0daVBkvz.js";import{f as k,_ as B}from"../__chunks__/icon.vh7VrxK3.js";import{e as I,o as L}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{S as R,f as M,a as H,c as N,b as Y}from"../__chunks__/createOptimizedPicture.pKR_EfYz.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(e){return q({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=()=>new F;class F{}const g=new WeakMap,z=I(class extends k{render(e){return l}update(e,[t]){var a;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(a=e.options)==null?void 0:a.host,this.rt(this.ct=e.element)),l}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let s=g.get(t);s===void 0&&(s=new WeakMap,g.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=g.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,T=(e,t,s,a)=>{for(var r=a>1?void 0:a?W(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&V(t,s,r),r};let v=class extends h{constructor(){super(...arguments),this.getSubmenuName=e=>e.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const e={};return(await R.getSiteMap()).forEach(a=>{const r=this.getSubmenuName(a);e[r]||(e[r]=[]),e[r].push({path:a.path,navtitle:this.getNavTitle(a)})}),Object.values(e).map(a=>a.length===1?a[0]:{navtitle:a[0].path.split("/")[1],path:a[0].path,children:a})}}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:e}){!(e instanceof HTMLElement)||!e.classList.contains("opener")||e.classList.toggle("active")}renderSubMenu(e){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${e.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${e.children.map(t=>i`<li><a href="${t.path}">${t.navtitle}</a></li>`)}</ul>`}renderMenuItem(e){return i`<li>${e.children!==void 0?this.renderSubMenu(e):i`<a href="${e.path}">${e.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(e=>this.renderMenuItem(e))}</ul>`}getNavTitle(e){return e.path==="/"?"Homepage":e.navtitle||e.title}};T([f()],v.prototype,"items",2);v=T([p("sidebar-nav")],v);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,D=(e,t,s,a)=>{for(var r=a>1?void 0:a?K(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&J(t,s,r),r};let b=class extends h{async connectedCallback(){super.connectedCallback();const e=await this.fetchContactsHtml();this.getContactTemplateArgs(e)}async fetchContactsHtml(){const e=new DOMParser,t=await M("contact.plain.html");return e.parseFromString(t,"text/html")}renderHeader(e){return e?i`<header class="major"><h2>${e}</h2></header>`:l}renderText(e){return e?i`<p>${e}</p>`:l}render(){if(!this.contactTemplateArgs)return l;const{headline:e,text:t,contacts:s}=this.contactTemplateArgs;return i`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(s)}</section>`}createRenderRoot(){return this}renderContact(e){const{icon:t,markup:s}=e;return!t&&!s?l:i`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(s)}</li>`}getContactsArgs(e){const t=e.querySelectorAll(".contact > div:not(:first-child)");return Array.from(t).map(a=>({icon:a.querySelector("div"),markup:a.querySelector("div:last-child")}))}getContactTemplateArgs(e){const t=e.querySelector("h2"),s=e.querySelector("p"),a=this.getContactsArgs(e);this.contactTemplateArgs={headline:t,text:s,contacts:a}}renderContacts(e){return e.length===0?l:i`<ul class="contact">${e.map(t=>this.renderContact(t))}</ul>`}renderIcon(e){return e?i`<icon-component class="icon-component" name="${e.innerHTML}"></icon-component>`:l}renderContactMarkup(e){return e?L(e.innerHTML):l}};D([f()],b.prototype,"contactTemplateArgs",2);b=D([p("sidebar-contact")],b);var G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,O=(e,t,s,a)=>{for(var r=a>1?void 0:a?Q(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&G(t,s,r),r};let S=class extends h{constructor(){super(),this.sheetService=new H}async connectedCallback(){super.connectedCallback();const e=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(e)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(e=>this.renderPost(e))}</div>`}createRenderRoot(){return this}getLastThreePosts(e){return e.sort((t,s)=>t.lastModified>s.lastModified?-1:t.lastModified<s.lastModified?1:0),e.slice(0,3)}renderPost(e){return i`<article><a href="${e.path}" class="image">${N({src:e.image,alt:e.imagealt,width:"336",height:"224"})}</a><p>${e.description}</p></article>`}async getPosts(){return(await this.sheetService.getSiteMap()).filter(t=>t.path.includes("/posts"))}};O([f()],S.prototype,"lastTreePosts",2);S=O([p("sidebar-posts")],S);var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,A=(e,t,s,a)=>{for(var r=a>1?void 0:a?Z(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&X(t,s,r),r};let y=class extends h{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){const e=await M("footer.plain.html"),t=document.createElement("div");t.innerHTML=e,this.footerMarkup=t.querySelector("p"),this.footerMarkup&&this.footerMarkup.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};A([f()],y.prototype,"footerMarkup",2);y=A([p("sidebar-footer")],y);var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,se=(e,t,s,a)=>{for(var r=a>1?void 0:a?te(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&ee(t,s,r),r};let $=class extends h{constructor(){super(...arguments),this.toggleRef=U(),this.handleToggleClick=e=>{e.preventDefault(),this.classList.toggle("active")}}createRenderRoot(){return this}firstUpdated(){this.toggleRef.value.addEventListener("click",this.handleToggleClick),this.classList.add("activate-animations")}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${z(this.toggleRef)} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component class="icon-component" name="hamburger"></icon-component></a>`}};$=se([p("sidebar-component")],$);function re({input:e,specifier:t,htmlTag:s}){return e.split(t).map((a,r)=>r%2===1?`<${s}>${a}</${s}>`:a).join("")}var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,E=(e,t,s,a)=>{for(var r=a>1?void 0:a?ne(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&ae(t,s,r),r};let w=class extends h{createRenderRoot(){return this}async firstUpdated(e){await this.fetchHeaderData()}async fetchHeaderData(){try{const e=await Y("header.json");this.headerData={leftCol:e.leftCol.data[0],rightCol:e.rightCol.data}}catch(e){console.error("HeaderComponent: ",e)}}render(){if(!this.headerData)return;const{leftCol:e,rightCol:t}=this.headerData,s=re({input:e.logoText,htmlTag:"strong",specifier:":::"}),a=L(s);return i`<a href="${e.logoLink}" class="logo">${a}</a><ul class="icons">${t.map(r=>i`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}"><icon-component class="header-icon" name="${r.socialIcon}"></icon-component><span class="label">${r.socialLabel}</span></a></li>`)}</ul>`}};E([f()],w.prototype,"headerData",2);w=E([p("header-component")],w);function m(e){return typeof e=="string"?e.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class oe{readBlockConfig(t){const s={};return t.querySelectorAll(":scope > div").forEach(a=>{if(a.children){const r=[...a.children];if(r[1]){const n=r[1],o=m(r[0].textContent??"");let d="";if(n.querySelector("a")){const c=[...n.querySelectorAll("a")];c.length===1?d=c[0].href:d=c.map(u=>u.href)}else if(n.querySelector("img")){const c=[...n.querySelectorAll("img")];c.length===1?d=c[0].src:d=c.map(u=>u.src)}else if(n.querySelector("p")){const c=[...n.querySelectorAll("p")];c.length===1?d=c[0].textContent:d=c.map(u=>u.textContent)}else d=a.children[1].textContent;s[o]=d}}}),s}decorateBlocks(t){t.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(t){const s=t.classList[0];if(s){t.classList.add("block"),t.dataset.blockName=s;const a=t.parentElement;a==null||a.classList.add(`${s}-wrapper`);const r=t.closest(".section");r&&r.classList.add(`${s}-container`)}}}function ie(e){return m(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}class ce{constructor(t){this.blockService=t}init(t){this.transformSection(t)}transformSection(t){t.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(t){const s=t.querySelector("div.section-metadata");if(s){const a=this.blockService.readBlockConfig(s);Object.keys(a).forEach(r=>{r==="style"?a.style.split(",").filter(o=>o).map(o=>m(o.trim())).forEach(o=>t.classList.add(o)):t.dataset[ie(r)]=a[r]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(t){const s=[];let a=!1;[...t.children].forEach(r=>{if(r.tagName==="DIV"||!a){const n=document.createElement("div");s.push(n),a=r.tagName!=="DIV",a&&n.classList.add("default-content-wrapper")}s[s.length-1].append(r)}),s.forEach(r=>t.append(r)),this.decorateImages(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const a=s.parentElement;a&&a.classList.add("image","main")})}}const C=(e,t)=>{t.split(",").forEach(s=>{e.classList.add(m(s.trim()))})};function _(e,t=document){const s=e&&e.includes(":")?"property":"name",r=[...t.head.querySelectorAll(`meta[${s}="${e}"]`)].map(n=>n.content).join(", ");return r.length?r:""}const x="loaded",j=!!sessionStorage.getItem(x),P=j?0:200;class le{constructor(t,s){this.sectionService=t,this.blockService=s,this.init=async()=>{this.setup(),await this.loadEager(),this.loadLazy()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const r=document.querySelector("body");r&&(r.style.display="none")}const a=document.querySelector("main");if(a){a.setAttribute("id","main"),this.addSidebarContainer(a),this.sectionService.init(a),this.addInnerContainer(a),this.blockService.decorateBlocks(a),await this.loadBlocks(),console.log("LOADED",j),console.log("LOAD_TIMEOUT",P),setTimeout(()=>{document.body.removeAttribute("style"),sessionStorage.setItem(x,"true")},P);try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&this.loadFonts()}catch{}}},this.loadLazy=()=>{this.loadFonts()},this.loadBlocks=async()=>{document.querySelectorAll(".section").forEach(async r=>{const n=this.collectBlocks(r);if(!n.length){this.showSection(r);return}await this.loadBlockModules(n),this.showSection(r)})}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const t=document.querySelector('script[src$="/scripts/scripts.js"]');if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(t){const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.remove("active"):s.classList.add("active"),t.after(s)}addInnerContainer(t){const s=t.innerHTML;t.innerHTML=`<div class="inner"><header-component id="header"></header-component>${s}</div>`}decorateTemplateAndTheme(){const t=_("template");t&&C(document.body,t);const s=_("theme");s&&C(document.body,s)}collectBlocks(t){const s=[];return t.querySelectorAll("[data-block-name]").forEach(r=>{s.push({name:r.dataset.blockName,element:r})}),s}async loadBlockModules(t){for(const s of t){const a=await B(()=>import(`${window.hlx.codeBasePath}/dist/${s.name}/${s.name}.js`),__vite__mapDeps([]));a.default&&await a.default(s.element)}}showSection(t){t.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(t){return new Promise((s,a)=>{if(document.querySelector(`head > link[href="${t}"]`))s(!0);else{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=s,r.onerror=a,document.head.append(r)}})}}(async function(){const e=new oe,t=new ce(e);await new le(t,e).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
