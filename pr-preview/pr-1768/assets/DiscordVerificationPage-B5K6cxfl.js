import{cN as m,cO as u,cP as p,b2 as t,b3 as r,bq as n,bW as x,__tla as _}from"./index-DcdI-yAp.js";import{C as g,__tla as y}from"./ContentLayout-9mmmw5VM.js";import{u as f,D as b,__tla as j}from"./useDiscordSession-aUjhodf7.js";let d,w=Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{let s,i,o,c;s=e=>e,i=e=>m({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),o=e=>u({queryKey:[p,e],queryFn:()=>i(e),enabled:!!e}),c=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");f();const a=localStorage.getItem("access_token"),{data:l}=o(a),h=()=>{l&&(localStorage.setItem("username",l.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[t.jsx(b,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(n,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),t.jsx(n,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),t.jsx(x,{onClick:h,children:"Continue"})]})})},d=()=>t.jsx(g,{children:t.jsx(c,{})})});export{w as __tla,d as default};
