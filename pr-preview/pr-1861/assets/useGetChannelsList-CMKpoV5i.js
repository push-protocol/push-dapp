import{u,__tla as i}from"./InfiniteScroll-BFib1IrS.js";import{fc as _,ff as g,__tla as m}from"./index-BZicNVPu.js";let c,p=Promise.all([(()=>{try{return i}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let n,o;n=t=>t,o=({userPushSDKInstance:t,page:r,pageSize:s,order:e,sort:a})=>t.channel.list({limit:s,page:r,order:e,sort:a}).then(n),c=({order:t,pageSize:r,sort:s})=>{const{userPushSDKInstance:e}=_(a=>a.user);return u({queryKey:[g,e==null?void 0:e.account],initialPageParam:1,enabled:!!(e!=null&&e.account),queryFn:({pageParam:a})=>o({order:t,sort:s,pageSize:r,page:a,userPushSDKInstance:e}),getNextPageParam:({itemcount:a},h,l)=>r*(l+1)>=a?null:l+1})}});export{p as __tla,c as u};
