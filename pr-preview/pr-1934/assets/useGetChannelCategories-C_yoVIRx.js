import{e_ as g,ee as o,fk as u,fl as c,__tla as h}from"./index-CCSq7fiT.js";let _,m=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{let t,l;t=a=>{var s,e,r;return{tags:((s=a==null?void 0:a.tags)==null?void 0:s.tags)||[],selectFieldTags:((r=(e=a==null?void 0:a.tags)==null?void 0:e.tags)==null?void 0:r.map(n=>({label:n,value:n})))||[]}},l=()=>g({method:"GET",url:`${o.apiUrl}/v1/channels/tags/all`}).then(a=>t(a.data)),_=()=>u({queryKey:[c],queryFn:()=>l()})});export{m as __tla,_ as u};
