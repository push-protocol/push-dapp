import{eZ as _,ed as o,fi as u,fj as c,__tla as h}from"./index-BSQmVLhw.js";let g,i=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{let t,l;t=a=>{var s,r,e;return{tags:((s=a==null?void 0:a.tags)==null?void 0:s.tags)||[],selectFieldTags:((e=(r=a==null?void 0:a.tags)==null?void 0:r.tags)==null?void 0:e.map(n=>({label:n,value:n})))||[]}},l=()=>_({method:"GET",url:`${o.apiUrl}/v1/channels/tags/all`}).then(a=>t(a.data)),g=()=>u({queryKey:[c],queryFn:()=>l()})});export{i as __tla,g as u};
