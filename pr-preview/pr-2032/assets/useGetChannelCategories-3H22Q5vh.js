import{ea as _,eh as h,f8 as o,f9 as u,__tla as c}from"./index-SVBZTWc1.js";let g,m=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{let t,l;t=a=>{var s,r,e;return{tags:((s=a==null?void 0:a.tags)==null?void 0:s.tags)||[],selectFieldTags:((e=(r=a==null?void 0:a.tags)==null?void 0:r.tags)==null?void 0:e.map(n=>({label:n,value:n})))||[]}},l=()=>_({method:"GET",url:`${h.apiUrl}/v1/channels/tags/all`}).then(a=>t(a.data)),g=()=>o({queryKey:[u],queryFn:()=>l()})});export{m as __tla,g as u};
