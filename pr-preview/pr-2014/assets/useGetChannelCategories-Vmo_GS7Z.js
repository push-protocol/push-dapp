import{f0 as _,ed as c,fc as o,fd as u,__tla as d}from"./index-CkSVaTQg.js";let g,h=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{let t,l;t=a=>{var s,r,e;return{tags:((s=a==null?void 0:a.tags)==null?void 0:s.tags)||[],selectFieldTags:((e=(r=a==null?void 0:a.tags)==null?void 0:r.tags)==null?void 0:e.map(n=>({label:n,value:n})))||[]}},l=()=>_({method:"GET",url:`${c.apiUrl}/v1/channels/tags/all`}).then(a=>t(a.data)),g=()=>o({queryKey:[u],queryFn:()=>l()})});export{h as __tla,g as u};
