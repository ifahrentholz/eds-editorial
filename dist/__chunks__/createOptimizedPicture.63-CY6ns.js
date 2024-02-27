class p{constructor(){this.runtimeCache=new Map}get(e){return this.runtimeCache.get(e)}set(e,t){this.runtimeCache.set(e,t)}has(e){return this.runtimeCache.has(e)}delete(e){this.runtimeCache.delete(e)}}class w{constructor(){this.requestPipeline=new Map,this.runtimeCache=new p}fetchJson(e,t={}){return this.fetchData(e,t,this.getResponseJSON)}fetchText(e,t={}){return this.fetchData(e,t,this.getResponseText)}async fetchData(e,t,s){const{cacheOptions:o}=t,u=this.getCachedData(e,o);if(u!==null)return u;const a=this.requestPipeline.get(e);if(a!==void 0)return s(await a);const d=fetch(e,t.fetchOptions);this.requestPipeline.set(e,d);const c=await d;this.requestPipeline.delete(e);const n=await s(c);return this.setCachedData(e,n,o),n}async getResponseJSON(e){return await e.clone().json()}async getResponseText(e){return await e.clone().text()}getCachedData(e,t){return(t==null?void 0:t.cacheType)==="runtime"?this.runtimeCache.get(e)??null:null}setCachedData(e,t,s){(s==null?void 0:s.cacheType)==="runtime"&&this.runtimeCache.set(e,t)}}const f=new w;function g(m){const{src:e,alt:t,eager:s=!1,width:o,height:u,breakpoints:a=[{media:"(min-width: 600px)",width:2e3},{width:750}]}=m,d=new URL(e,window.location.href),c=document.createElement("picture"),{pathname:n}=d,l=n.substring(n.lastIndexOf(".")+1);return a.forEach(r=>{const h=document.createElement("source");r.media&&h.setAttribute("media",r.media),h.setAttribute("type","image/webp"),h.setAttribute("srcset",`${n}?width=${r.width}&format=webply&optimize=medium`),c.appendChild(h)}),a.forEach((r,h)=>{if(h<a.length-1){const i=document.createElement("source");r.media&&i.setAttribute("media",r.media),i.setAttribute("srcset",`${n}?width=${r.width}&format=${l}&optimize=medium`),c.appendChild(i)}else{const i=document.createElement("img");i.setAttribute("loading",s?"eager":"lazy"),i.setAttribute("alt",t),i.setAttribute("width",o.toString()),i.setAttribute("height",u.toString()),c.appendChild(i),i.setAttribute("src",`${n}?width=${r.width}&format=${l}&optimize=medium`)}}),c}export{f as F,g as c};
//# sourceMappingURL=createOptimizedPicture.63-CY6ns.js.map
