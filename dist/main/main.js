import{_ as w}from"../__chunks__/preload-helper.hlDPvxQM.js";import{s as v,x as d}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as C,t as y}from"../__chunks__/property.0daVBkvz.js";function h(s){return typeof s=="string"?s.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}const m=(s,e)=>{e.split(",").forEach(t=>{s.classList.add(h(t.trim()))})};function f(s,e=document){const t=s&&s.includes(":")?"property":"name",r=[...e.head.querySelectorAll(`meta[${t}="${s}"]`)].map(a=>a.content).join(", ");return r.length?r:""}function $(s){return h(s).replace(/-([a-z])/g,e=>e[1].toUpperCase())}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(s){return C({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(s,e){return(t,n,r)=>{const a=i=>{var c;return((c=i.renderRoot)==null?void 0:c.querySelector(s))??null};if(e){const{get:i,set:c}=typeof n=="object"?t:r??(()=>{const o=Symbol();return{get(){return this[o]},set(l){this[o]=l}}})();return g(t,n,{get(){let o=i.call(this);return o===void 0&&(o=a(this),(o!==null||this.hasUpdated)&&c.call(this,o)),o}})}return g(t,n,{get(){return a(this)}})}}var L=Object.defineProperty,P=Object.getOwnPropertyDescriptor,S=(s,e,t,n)=>{for(var r=n>1?void 0:n?P(e,t):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=(n?i(e,t,r):i(r))||r);return n&&r&&L(e,t,r),r};let u=class extends v{constructor(){super(...arguments),this.getSubmenuName=s=>s.path.split("/")[1],this.groupByFirstLevelPath=s=>{const e={};return s.forEach(n=>{const r=this.getSubmenuName(n);e[r]||(e[r]=[]),e[r].push({path:n.path,navtitle:this.getNavTitle(n)})}),Object.values(e).map(n=>n.length===1?n[0]:{navtitle:n[0].path.split("/")[1],path:n[0].path,children:n})}}createRenderRoot(){return this}async firstUpdated(){const s=await this.fetchSitemap();this.items=this.groupByFirstLevelPath(s)}render(){if(this.items)return d`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}renderSubMenu(s){return d`<span @click="${({target:e})=>e.classList.toggle("active")}" class="opener">${s.navtitle}</span><ul>${s.children.map(e=>d`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(s){return d`<li>${s.children!==void 0?this.renderSubMenu(s):d`<a href="${s.path}">${s.navtitle}</a>`}</li>`}renderMenuItems(){return d`<ul>${this.items.map(s=>this.renderMenuItem(s))}</ul>`}async fetchSitemap(){return(await(await fetch(`${window.hlx.codeBasePath}/query-index.json`)).json()).data}getNavTitle(s){return s.path==="/"?"Homepage":s.navtitle||s.title}};S([E()],u.prototype,"items",2);u=S([y("sidebar-nav")],u);var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,b=(s,e,t,n)=>{for(var r=n>1?void 0:n?M(e,t):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=(n?i(e,t,r):i(r))||r);return n&&r&&j(e,t,r),r};let p=class extends v{constructor(){super(...arguments),this.handleToggleClick=s=>{s.preventDefault(),console.log("this",this),this.classList.toggle("inactive")}}createRenderRoot(){return this}firstUpdated(){this.toggle.addEventListener("click",this.handleToggleClick),console.log("toggle",this)}render(){return d`<div class="inner"><sidebar-nav></sidebar-nav></div><a href="#sidebar" class="toggle hamburger-icon"><icon-component name="hamburger"></icon-component></a>`}};b([_(".toggle")],p.prototype,"toggle",2);p=b([y("sidebar-component")],p);class q{readBlockConfig(e){const t={};return e.querySelectorAll(":scope > div").forEach(n=>{if(n.children){const r=[...n.children];if(r[1]){const a=r[1],i=h(r[0].textContent??"");let c="";if(a.querySelector("a")){const o=[...a.querySelectorAll("a")];o.length===1?c=o[0].href:c=o.map(l=>l.href)}else if(a.querySelector("img")){const o=[...a.querySelectorAll("img")];o.length===1?c=o[0].src:c=o.map(l=>l.src)}else if(a.querySelector("p")){const o=[...a.querySelectorAll("p")];o.length===1?c=o[0].textContent:c=o.map(l=>l.textContent)}else c=n.children[1].textContent;t[i]=c}}}),t}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const t=e.classList[0];if(t){e.classList.add("block"),e.dataset.blockName=t;const n=e.parentElement;n==null||n.classList.add(`${t}-wrapper`);const r=e.closest(".section");r&&r.classList.add(`${t}-container`)}}}class x{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(t=>{this.adjustMarkup(t),this.processSectionMetaData(t)})}processSectionMetaData(e){const t=e.querySelector("div.section-metadata");if(t){const n=this.blockService.readBlockConfig(t);Object.keys(n).forEach(r=>{r==="style"?n.style.split(",").filter(i=>i).map(i=>h(i.trim())).forEach(i=>e.classList.add(i)):e.dataset[$(r)]=n[r]}),t.parentElement&&t.parentElement.remove()}}adjustMarkup(e){const t=[];let n=!1;[...e.children].forEach(r=>{if(r.tagName==="DIV"||!n){const a=document.createElement("div");t.push(a),n=r.tagName!=="DIV",n&&a.classList.add("default-content-wrapper")}t[t.length-1].append(r)}),t.forEach(r=>e.append(r)),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}}class A{constructor(e,t){this.sectionService=e,this.blockService=t,this.init=async()=>{this.setup(),await this.loadEager()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const r=document.querySelector("body");r&&(r.style.display="none")}const n=document.querySelector("main");n&&(n.setAttribute("id","main"),this.addSidebarContainer(n),this.sectionService.init(n),this.addInnerContainer(n),this.blockService.decorateBlocks(n),await this.loadComponents(),setTimeout(()=>{document.body.removeAttribute("style")},200))},this.loadComponents=async()=>{document.querySelectorAll(".section").forEach(r=>{const a=[],i=r.querySelectorAll("[data-block-name]");if(!i.length){r.style.removeProperty("display");return}i.forEach(c=>{c.style.display="none",a.push({name:c.dataset.blockName,element:c})}),a.length&&a.forEach(async c=>{const o=await w(()=>import(`${window.hlx.codeBasePath}/dist/${c.name}/${c.name}.js`),__vite__mapDeps([]));o.default&&await o.default(c.element)}),r.style.removeProperty("display")})}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(t){console.log(t)}}addSidebarContainer(e){const t=document.createElement("sidebar-component");t.setAttribute("id","sidebar"),e.after(t)}addInnerContainer(e){const t=e.innerHTML;e.innerHTML=`<div class="inner">${t}</div>`}decorateTemplateAndTheme(){const e=f("template");e&&m(document.body,e);const t=f("theme");t&&m(document.body,t)}}(async function(){const s=new q,e=new x(s);await new A(e,s).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
