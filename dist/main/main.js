import{_ as A}from"../__chunks__/icon.PS61ZRz5.js";import{s as u,x as l}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as R,t as p}from"../__chunks__/property.0daVBkvz.js";import{o as j}from"../__chunks__/unsafe-html.dKgBHtsI.js";import{c as I}from"../__chunks__/createOptimizedPicture.F94eikeI.js";function m(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}const _=(t,e)=>{e.split(",").forEach(r=>{t.classList.add(m(r.trim()))})};function C(t,e=document){const r=t&&t.includes(":")?"property":"name",n=[...e.head.querySelectorAll(`meta[${r}="${t}"]`)].map(a=>a.content).join(", ");return n.length?n:""}function B(t){return m(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(t){return R({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t,e){return(r,s,n)=>{const a=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(t))??null};if(e){const{get:o,set:c}=typeof s=="object"?r:n??(()=>{const i=Symbol();return{get(){return this[i]},set(d){this[i]=d}}})();return L(r,s,{get(){let i=o.call(this);return i===void 0&&(i=a(this),(i!==null||this.hasUpdated)&&c.call(this,i)),i}})}return L(r,s,{get(){return a(this)}})}}var g={},T;function M(t){return function(...e){return function(r,s,n){return Object.assign(Object.assign({},n),{value:t(n.value,...e)})}}}Object.defineProperty(g,"__esModule",{value:!0});const N=M(function(t,e=0){let r=-1;const s=function(...n){clearTimeout(r),r=window.setTimeout(()=>{t.call(this,...n)},e)};return s.cancel=function(){clearTimeout(r)},s}),U=M(function(t,e=0){let r,s=[];const n=function(...a){s=a,r===void 0&&(r=window.setTimeout(()=>{r=void 0,t.call(this,...s)},e))};return n.cancel=function(){clearTimeout(r),r=void 0},n});T=g.debounce=N,g.throttle=U;var V=Object.defineProperty,k=Object.getOwnPropertyDescriptor,O=(t,e,r,s)=>{for(var n=s>1?void 0:s?k(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(n=(s?o(e,r,n):o(n))||n);return s&&n&&V(e,r,n),n};let b=class extends u{constructor(){super(...arguments),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=t=>{const e={};return t.forEach(s=>{const n=this.getSubmenuName(s);e[n]||(e[n]=[]),e[n].push({path:s.path,navtitle:this.getNavTitle(s)})}),Object.values(e).map(s=>s.length===1?s[0]:{navtitle:s[0].path.split("/")[1],path:s[0].path,children:s})}}createRenderRoot(){return this}async firstUpdated(){const t=await this.fetchSitemap();this.items=this.groupByFirstLevelPath(t)}render(){if(this.items)return l`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return l`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>l`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return l`<li>${t.children!==void 0?this.renderSubMenu(t):l`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return l`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}async fetchSitemap(){return(await(await fetch(`${window.hlx.codeBasePath}/query-index.json`)).json()).data}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}};O([h()],b.prototype,"items",2);b=O([p("sidebar-nav")],b);const v=async t=>{const{endpoint:e,getJson:r=!1,init:s}=t,n=e.startsWith("/")?e:`/${e}`,a=await fetch(`${window.hlx.codeBasePath}${n}`,s);return r?await a.json():await a.text()};var z=Object.defineProperty,F=Object.getOwnPropertyDescriptor,D=(t,e,r,s)=>{for(var n=s>1?void 0:s?F(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(n=(s?o(e,r,n):o(n))||n);return s&&n&&z(e,r,n),n};let y=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchContactData()}async fetchContactData(){const t=await v({endpoint:"contact.plain.html"}),e=document.createElement("div");e.innerHTML=t,this.contactTemplateArgs={headline:e.querySelector("h2"),text:e.querySelector("p"),contacts:Array.from(e.querySelectorAll(".contact > div:not(:first-child)")).map(r=>{var s,n;return{contactIcon:(s=r.querySelector("div"))==null?void 0:s.innerText,contactMarkup:(n=r.querySelector("div:last-child"))==null?void 0:n.innerHTML}})}}render(){if(!this.contactTemplateArgs)return;const{headline:t,text:e,contacts:r}=this.contactTemplateArgs;return l`<section><header class="major">${t}</header>${e}<ul class="contact">${r.map(s=>l`<li class="icon solid"><icon-component name="${s.contactIcon}"></icon-component>${j(s.contactMarkup)}</li>`)}</ul></section>`}};D([h()],y.prototype,"contactTemplateArgs",2);y=D([p("sidebar-contact")],y);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,x=(t,e,r,s)=>{for(var n=s>1?void 0:s?K(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(n=(s?o(e,r,n):o(n))||n);return s&&n&&J(e,r,n),n};let w=class extends u{async connectedCallback(){super.connectedCallback();const t=await this.fetchSitemap(),e=this.getPosts(t);this.lastThreePosts=this.getLastThreePosts(e)}render(){if(this.lastThreePosts)return l`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastThreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,r)=>e.lastModified>r.lastModified?-1:e.lastModified<r.lastModified?1:0),t.slice(0,3)}async fetchSitemap(){return(await v({endpoint:"/query-index.json",getJson:!0})).data}renderPost(t){return l`<article><a href="${t.path}" class="image">${I({src:t.image,alt:t.imagealt})}</a><p>${t.description}</p></article>`}getPosts(t){return t.filter(e=>e.path.includes("/posts"))}};x([h()],w.prototype,"lastThreePosts",2);w=x([p("sidebar-posts")],w);var W=Object.defineProperty,G=Object.getOwnPropertyDescriptor,q=(t,e,r,s)=>{for(var n=s>1?void 0:s?G(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(n=(s?o(e,r,n):o(n))||n);return s&&n&&W(e,r,n),n};let $=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){var r;const t=await v({endpoint:"footer.plain.html"}),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),(r=this.footerMarkup)==null||r.classList.add("copyright")}render(){if(this.footerMarkup)return l`${this.footerMarkup}`}};q([h()],$.prototype,"footerMarkup",2);$=q([p("sidebar-footer")],$);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,P=(t,e,r,s)=>{for(var n=s>1?void 0:s?X(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(n=(s?o(e,r,n):o(n))||n);return s&&n&&Q(e,r,n),n};let f=class extends u{constructor(){super(...arguments),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("inactive")}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setInitialVisibility(),window.addEventListener("resize",this.setInitialVisibility.bind(this))}setInitialVisibility(){window.innerWidth<=1280?this.classList.add("inactive"):this.classList.remove("inactive")}firstUpdated(){this.toggle.addEventListener("click",this.handleToggleClick)}render(){return l`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component name="hamburger"></icon-component></a>`}};P([H(".toggle")],f.prototype,"toggle",2);P([T(100)],f.prototype,"setInitialVisibility",1);f=P([p("sidebar-component")],f);function Y({input:t,specifier:e,htmlTag:r}){return t.split(e).map((s,n)=>n%2===1?`<${r}>${s}</${r}>`:s).join("")}var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,E=(t,e,r,s)=>{for(var n=s>1?void 0:s?ee(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(n=(s?o(e,r,n):o(n))||n);return s&&n&&Z(e,r,n),n};let S=class extends u{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await v({endpoint:"header.json",getJson:!0});this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,r=Y({input:t.logoText,htmlTag:"strong",specifier:":::"}),s=j(r);return l`<a href="${t.logoLink}" class="logo">${s}</a><ul class="icons">${e.map(n=>l`<li><a href="${n.socialLink}" class="icon brands" aria-label="${n.socialLabel}"><icon-component class="header-icon" name="${n.socialIcon}"></icon-component><span class="label">${n.socialLabel}</span></a></li>`)}</ul>`}};E([h()],S.prototype,"headerData",2);S=E([p("header-component")],S);class te{readBlockConfig(e){const r={};return e.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const n=[...s.children];if(n[1]){const a=n[1],o=m(n[0].textContent??"");let c="";if(a.querySelector("a")){const i=[...a.querySelectorAll("a")];i.length===1?c=i[0].href:c=i.map(d=>d.href)}else if(a.querySelector("img")){const i=[...a.querySelectorAll("img")];i.length===1?c=i[0].src:c=i.map(d=>d.src)}else if(a.querySelector("p")){const i=[...a.querySelectorAll("p")];i.length===1?c=i[0].textContent:c=i.map(d=>d.textContent)}else c=s.children[1].textContent;r[o]=c}}}),r}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const r=e.classList[0];if(r){e.classList.add("block"),e.dataset.blockName=r;const s=e.parentElement;s==null||s.classList.add(`${r}-wrapper`);const n=e.closest(".section");n&&n.classList.add(`${r}-container`)}}}class re{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(r=>{this.adjustMarkup(r),this.processSectionMetaData(r)})}processSectionMetaData(e){const r=e.querySelector("div.section-metadata");if(r){const s=this.blockService.readBlockConfig(r);Object.keys(s).forEach(n=>{n==="style"?s.style.split(",").filter(o=>o).map(o=>m(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[B(n)]=s[n]}),r.parentElement&&r.parentElement.remove()}}adjustMarkup(e){const r=[];let s=!1;[...e.children].forEach(n=>{if(n.tagName==="DIV"||!s){const a=document.createElement("div");r.push(a),s=n.tagName!=="DIV",s&&a.classList.add("default-content-wrapper")}r[r.length-1].append(n)}),r.forEach(n=>e.append(n)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(r=>{var s;(s=r.parentElement)==null||s.classList.add("image","main")})}}class ne{constructor(e,r){this.sectionService=e,this.blockService=r,this.init=async()=>{this.setup(),await this.loadEager()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const n=document.querySelector("body");n&&(n.style.display="none")}const s=document.querySelector("main");s&&(s.setAttribute("id","main"),this.addSidebarContainer(s),this.sectionService.init(s),this.addInnerContainer(s),this.blockService.decorateBlocks(s),await this.loadComponents(),setTimeout(()=>{document.body.removeAttribute("style")},200))},this.loadComponents=async()=>{document.querySelectorAll(".section").forEach(n=>{const a=[],o=n.querySelectorAll("[data-block-name]");if(!o.length){n.style.removeProperty("display");return}o.forEach(c=>{c.style.display="none",a.push({name:c.dataset.blockName,element:c})}),a.length&&a.forEach(async c=>{const i=await A(()=>import(`${window.hlx.codeBasePath}/dist/${c.name}/${c.name}.js`),__vite__mapDeps([]));i.default&&await i.default(c.element)}),n.style.removeProperty("display")})}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(r){console.log(r)}}addSidebarContainer(e){const r=document.createElement("sidebar-component");r.setAttribute("id","sidebar"),e.after(r)}addInnerContainer(e){const r=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${r}</div>`}decorateTemplateAndTheme(){const e=C("template");e&&_(document.body,e);const r=C("theme");r&&_(document.body,r)}}(async function(){const t=new te,e=new re(t);await new ne(e,t).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
