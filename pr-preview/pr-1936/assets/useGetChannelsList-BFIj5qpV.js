import{u as p,__tla as _}from"./InfiniteScroll-AM6N34jK.js";import{e_ as c,ee as u,fm as h,__tla as y}from"./index-CmH6Fbak.js";let n,d=Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let i,g;i=e=>e,g=({page:e,pageSize:r,order:o,sort:l,chain:t,tag:a})=>c({method:"GET",url:`${u.apiUrl}/v1/channels`,params:{page:e,limit:r,order:o,sort:l,...t?{filter:t}:{},...a?{tag:a}:{}}}).then(s=>i(s.data)),n=({order:e,pageSize:r,sort:o,chain:l,tag:t})=>p({queryKey:[h,l,t],initialPageParam:1,queryFn:({pageParam:a})=>g({order:e,sort:o,pageSize:r,page:a,chain:l,tag:t}),getNextPageParam:({itemcount:a},s,m)=>r*(m+1)>=a?null:m+1})});export{d as __tla,n as u};
