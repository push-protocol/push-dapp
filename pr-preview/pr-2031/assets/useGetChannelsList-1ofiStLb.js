import{u as g,__tla as _}from"./InfiniteScroll-D8vP3vvJ.js";import{eO as m,eP as P,__tla as h}from"./index-C29vdlfD.js";let o,p=Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let i;i=({userPushSDKInstance:c,page:t,pageSize:n,order:s,sort:u,chain:r,tag:a,subscribed:e})=>c.channel.list({page:t,limit:n,order:s,sort:u,...e?{user_subscribed:e}:{},...r?{filter:Number(r)}:{},...a?{tag:a}:{}}),o=({order:c,pageSize:t,sort:n,chain:s,tag:u,subscribed:r})=>{const{userPushSDKInstance:a}=m(e=>e.user);return g({queryKey:[P,a==null?void 0:a.account,s,u,r],initialPageParam:1,queryFn:({pageParam:e})=>i({userPushSDKInstance:a,order:c,sort:n,pageSize:t,page:e,chain:s,tag:u,subscribed:r}),getNextPageParam:({itemcount:e},b,l)=>t*(l+1)>=e?null:l+1})}});export{p as __tla,o as u};
