import{n as r}from"./property.0daVBkvz.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(t){return r({...t,state:!0,attribute:!1})}const f=async t=>{const{endpoint:n,getJson:a=!1,init:o}=t,s=n.startsWith("/")?n:`/${n}`,e=await fetch(`${window.hlx.codeBasePath}${s}`,o);return a?await e.json():await e.text()};export{f,c as r};
//# sourceMappingURL=fetchData.GCPqwStL.js.map
