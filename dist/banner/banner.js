import{T as o,w as T,j as $,x as u}from"../__chunks__/lit-element.XkUWx5ik.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_=r=>(...e)=>({_$litDirective$:r,values:e});class v{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class c extends v{constructor(e){if(super(e),this.it=o,e.type!==y.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o||e==null)return this._t=void 0,this.it=e;if(e===T)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const h=_(c),A=({headline:r,subline:e,texts:t,buttons:i,picture:s})=>u`<section id="banner"><div class="content"><header><h1>${r}</h1><p>${e}</p></header>${h(t==null?void 0:t.map(n=>n.innerHTML).join(""))}<ul class="actions">${i==null?void 0:i.map(n=>u`<li><a href="${n.href}" class="button big">${n.innerText}</a></li>`)}</ul></div><span class="image object">${s??h(s)}</span></section>`;function m(r){var a,l;const e=r.querySelector("div"),t=r.children[1],i=(a=e==null?void 0:e.querySelector("h1"))==null?void 0:a.innerText,s=(l=e==null?void 0:e.querySelector("h3"))==null?void 0:l.innerText,n=e?[...e.querySelectorAll("p")]:[],d=[...t==null?void 0:t.querySelectorAll("a")],p=(e==null?void 0:e.querySelector("picture"))||void 0;r.innerHTML="",r.style.removeProperty("display"),$(A({headline:i,subline:s,texts:n,buttons:d,picture:p}),r)}export{m as default};
//# sourceMappingURL=banner.js.map
