import{e_ as m,fk as u,fZ as p,e1 as t,e2 as r,ek as c,eo as x,__tla as _}from"./index-Di-5xBRn.js";import{C as g,__tla as f}from"./ContentLayout-C8xxgXwC.js";import{u as y,D as b,__tla as j}from"./useDiscordSession-CoOEnCZ0.js";let d,k=Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{let s,o,i,l;s=e=>e,o=e=>m({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),i=e=>u({queryKey:[p,e],queryFn:()=>o(e),enabled:!!e}),l=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");y();const a=localStorage.getItem("access_token"),{data:n}=i(a),h=()=>{n&&(localStorage.setItem("username",n.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[t.jsx(b,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(c,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),t.jsx(c,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),t.jsx(x,{onClick:h,children:"Continue"})]})})},d=()=>t.jsx(g,{children:t.jsx(l,{})})});export{k as __tla,d as default};
