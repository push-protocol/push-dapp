import{ea as h,f8 as u,fZ as _,d_ as t,d$ as r,e2 as c,ep as p,__tla as x}from"./index-CY4ytu15.js";import{C as g,__tla as f}from"./ContentLayout-Dnb0oBMP.js";import{D as y,__tla as j}from"./Discord-kcYWjuvg.js";import{u as b,__tla as w}from"./useDiscordSession-CMfX6qN7.js";let d,C=Promise.all([(()=>{try{return x}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return w}catch{}})()]).then(async()=>{let s,o,i,l;s=e=>e,o=e=>h({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),i=e=>u({queryKey:[_,e],queryFn:()=>o(e),enabled:!!e}),l=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");b();const a=localStorage.getItem("access_token"),{data:n}=i(a),m=()=>{n&&(localStorage.setItem("username",n.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[t.jsx(y,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(c,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),t.jsx(c,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),t.jsx(p,{onClick:m,children:"Continue"})]})})},d=()=>t.jsx(g,{children:t.jsx(l,{})})});export{C as __tla,d as default};
