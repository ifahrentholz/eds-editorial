import{j as p,x as o}from"../__chunks__/lit-element.XkUWx5ik.js";import{e as s}from"../__chunks__/extractSidekickLibraryId.PnkvJE9z.js";import{o as n}from"../__chunks__/if-defined.JfW-uEqn.js";const m=r=>{const{headers:d,data:i}=r;return o`<div class="table-wrapper"><table><thead><tr>${d.map(t=>o`<th data-library-id="${n(t.id)}" contenteditable="${n(t.id?!0:void 0)}">${t.text}</th>`)}</tr></thead><tbody>${i.map(t=>o`<tr>${t.map(e=>o`<td data-library-id="${n(e.id)}" contenteditable="${n(e.id?!0:void 0)}">${e.text}</td>`)}</tr>`)}</tbody></table></div>`};function x(r){const d=[],i=[];[...r.children].forEach((t,e)=>{e===0?d.push(...Array.from(t.querySelectorAll("strong")).map(a=>({text:a.textContent||"",id:s(a).id}))):i.push(Array.from(t.querySelectorAll("strong")).map(a=>({text:a.textContent||"",id:s(a).id})))}),r.innerHTML="",r.style.removeProperty("display"),p(m({headers:d,data:i}),r)}export{x as default};
//# sourceMappingURL=table.js.map
