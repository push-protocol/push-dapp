import{gn as h,go as u,gp as p,e1 as t,e2 as r,em as c,ep as x,__tla as g}from"./index-BZicNVPu.js";import{C as _,__tla as y}from"./ContentLayout-CyAlAJNG.js";import{u as f,D as b,__tla as j}from"./useDiscordSession-Bon4ETbg.js";let d,w=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{let s,o,i,n;s=e=>e,o=e=>h({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),i=e=>u({queryKey:[p,e],queryFn:()=>o(e),enabled:!!e}),n=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");f();const a=localStorage.getItem("access_token"),{data:l}=i(a),m=()=>{l&&(localStorage.setItem("username",l.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[t.jsx(b,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(c,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),t.jsx(c,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),t.jsx(x,{onClick:m,children:"Continue"})]})})},d=()=>t.jsx(_,{children:t.jsx(n,{})})});export{w as __tla,d as default};
