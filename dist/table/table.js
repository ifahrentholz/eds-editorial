import{j as p,x as o}from"../__chunks__/lit-element.XkUWx5ik.js";import{e as s,o as n}from"../__chunks__/extractSidekickLibId.OeXrEmpc.js";const m=e=>{const{headers:d,data:i}=e;return o`<div class="table-wrapper"><table><thead><tr>${d.map(t=>o`<th data-library-id="${n(t.id)}" contenteditable="${n(t.id?!0:void 0)}">${t.text}</th>`)}</tr></thead><tbody>${i.map(t=>o`<tr>${t.map(r=>o`<td data-library-id="${n(r.id)}" contenteditable="${n(r.id?!0:void 0)}">${r.text}</td>`)}</tr>`)}</tbody></table></div>`};function x(e){const d=[],i=[];[...e.children].forEach((t,r)=>{r===0?d.push(...Array.from(t.querySelectorAll("strong")).map(a=>({text:a.textContent||"",id:s(a).id}))):i.push(Array.from(t.querySelectorAll("strong")).map(a=>({text:a.textContent||"",id:s(a).id})))}),e.innerHTML="",e.style.removeProperty("display"),p(m({headers:d,data:i}),e)}export{x as default};
//# sourceMappingURL=table.js.map
