class l{constructor(){this.responseMap=new Map}async fetchData(t,s){const i=this.getUrl(t);if(this.responseMap.has(i))return this.responseMap.get(i);const o=fetch(i,s);this.responseMap.set(i,o);const c=await o;return c.ok||(console.error(c.statusText),this.responseMap.delete(i)),c}async fetchJson(t,s){return await(await this.fetchData(t,s)).clone().json()}async fetchText(t,s){return(await this.fetchData(t,s)).clone().text()}getUrl(t){const s=t.startsWith("/")?t:`/${t}`;return`${window.hlx.codeBasePath}${s}`}}const w=new l;function f(u){const{src:t,alt:s,eager:i=!1,width:o,height:c,breakpoints:d=[{media:"(min-width: 600px)",width:"2000"},{width:"750"}]}=u,p=new URL(t,window.location.href),h=document.createElement("picture"),{pathname:n}=p,m=n.substring(n.lastIndexOf(".")+1);return d.forEach(r=>{const a=document.createElement("source");r.media&&a.setAttribute("media",r.media),a.setAttribute("type","image/webp"),a.setAttribute("srcset",`${n}?width=${r.width}&format=webply&optimize=medium`),h.appendChild(a)}),d.forEach((r,a)=>{if(a<d.length-1){const e=document.createElement("source");r.media&&e.setAttribute("media",r.media),e.setAttribute("srcset",`${n}?width=${r.width}&format=${m}&optimize=medium`),h.appendChild(e)}else{const e=document.createElement("img");e.setAttribute("loading",i?"eager":"lazy"),e.setAttribute("alt",s),e.setAttribute("width",o),e.setAttribute("height",c),h.appendChild(e),e.setAttribute("src",`${n}?width=${r.width}&format=${m}&optimize=medium`)}}),h}export{w as F,f as c};
//# sourceMappingURL=createOptimizedPicture.3VFajtAf.js.map