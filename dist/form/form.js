import{x as r,T as c,j as y}from"../__chunks__/lit-element.XkUWx5ik.js";import{F as h}from"../__chunks__/fetch.service.jKveWx8q.js";import{t as F}from"../__chunks__/toClassName.qNvfAQ6m.js";import{o as s}from"../__chunks__/if-defined.JfW-uEqn.js";const l=[],$=(e,a="")=>{const t=F(`form-${e.name}${a}`);l[t]=l[t]||0;const n=l[t]?`-${l[t]}`:"";return l[t]+=1,`${t}${n}`},x=e=>r`<legend>${e}</legend>`,q=e=>r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}"><fieldset class="row gtr-uniform" id="${s(e.id)}" name="${s(e.name)}">${e.label?x(e.label):c}</fieldset></div>`,w=e=>r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}">${e.class&&e.class.includes("sub-heading")?r`<h3 id="${s(e.id)}">${e.value||e.label}</h3>`:r`<h2 id="${s(e.id)}">${e.value||e.label}</h2>`}</div>`,u=(e,a)=>r`<label id="${e}" for="${a.id}">${a.label||a.name}</label>`,S=e=>r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}"><p id="${s(e.id)}">${e.value||e.label}</p></div>`,p=(e,a=!0)=>{const t=$(e,"-label");return r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}">${a?u(t,e):c} <input id="${s(e.id)}" name="${s(e.name)}" placeholder="${s(e.placeholder)}" value="${s(e.value)}" required="${s(e.required)}" type="${s(e.type)}" aria-labelledby="${t}"> ${a?c:u(t,e)}</div>`},g=e=>{const a=$(e,"-label");return r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}">${e.label?u(a,e):c} <textarea id="${s(e.id)}" name="${s(e.name)}" placeholder="${s(e.placeholder)}" required="${s(e.required)}" aria-labelledby="${a}"></textarea></div>`},E=e=>(e.value||(e.value="checked"),p(e,!1)),L=(e,a)=>{const t=e.trim(),n=e.trim().toLowerCase()??"";return r`<option selected="${s(n===a?"":void 0)}" value="${n}">${t}</option>`},I=e=>{const a=$(e,"-label");return r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}">${e.label?u(a,e):c} <select id="${s(e.id)}" name="${s(e.name)}" required="${s(e.required)}">${e.options.map(t=>L(t,e.value))}</select></div>`},C=e=>(e.value||(e.value=e.label||"on"),p(e,!1)),m=e=>r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}"><button class="${s(e.class)}" type="${s(e.type)}">${e.label||e.name}</button></div>`,D=e=>r`<div class="${s(e.class)}" data-fieldset="${s(e.fieldset)}"><input id="${s(e.id)}" name="${s(e.name)}" type="reset"></div>`,R={headline:w,plaintext:S,text:p,textarea:g,checkbox:E,select:I,radio:C,button:m,fieldset:q,reset:D,submit:m},T=e=>{e.id=e.id||$(e);const a=e.type;return(R[a]||p)(e)},k=e=>({class:e.class!==""?e.class:void 0,id:e.id!==""?e.id:void 0,name:e.name,label:e.label,fieldset:e.fieldset!==""?e.fieldset:void 0,value:e.value!==""?e.value:void 0,type:e.type.toLowerCase(),placeholder:e.placeholder||void 0,options:e.options?e.options.split(",").map(a=>a.trim()):[],required:e.required.toLowerCase()==="true"||e.required.toLowerCase()==="x"?!0:void 0}),N=async e=>(await h.fetchJson(e)).data.map(n=>k(n)),j=e=>e?r`<div><form method="post"><div class="row gtr-uniform">${e.map(a=>r`${T(a)}`)}</div></form></div>`:c;function A(e){const a={};return[...e.elements].forEach(t=>{t.name&&t.type!=="submit"&&!t.disabled&&(t.type==="radio"?t.checked&&(a[t.name]=t.value):t.type==="checkbox"?t.checked&&(a[t.name]=a[t.name]?`${a[t.name]},${t.value}`:t.value):a[t.name]=t.value)}),a}function P(e,a){console.error(a),e.querySelector('button[type="submit"]').disabled=!1}async function O(e){if(e.getAttribute("data-submitting")==="true")return;const a=e.querySelector('button[type="submit"]');try{e.setAttribute("data-submitting","true"),a&&(a.disabled=!0);const t=e.dataset.action??"",n=A(e),o=await fetch(t,{method:"POST",body:JSON.stringify({data:n}),headers:{"Content-Type":"application/json"}});if(o.ok)console.log(n),e.dataset.confirmation&&(window.location.href=e.dataset.confirmation);else{const d=await o.text();throw new Error(d)}}catch(t){P(e,t)}finally{e.setAttribute("data-submitting","false"),e.reset(),a&&(a.disabled=!1)}}async function B(e){var d;const a=(d=e.querySelector('a[href$=".json"]'))==null?void 0:d.innerText;if(!a)return;const{pathname:t}=new URL(a),n=await N(t);e.innerHTML="",e.style.removeProperty("display"),y(j(n),e);const o=e.querySelector("form");o&&(o.querySelectorAll("fieldset").forEach(i=>{o.querySelectorAll(`[data-fieldset="${i.name}"`).forEach(b=>{i.append(b)})}),o.dataset.action=t.split(".json")[0],o.addEventListener("submit",i=>{if(i.preventDefault(),o.checkValidity())O(o);else{const v=o.querySelector(":invalid:not(fieldset)");v&&(v.focus(),v.scrollIntoView({behavior:"smooth"}))}}))}export{B as default};
//# sourceMappingURL=form.js.map
