import{gj as m,gk as u,gl as p,e1 as t,e2 as r,eq as c,eY as x,__tla as g}from"./index-Pg68Md8O.js";import{C as _,__tla as y}from"./ContentLayout-CXrM2zDv.js";import{u as f,D as j,__tla as b}from"./useDiscordSession-By50Gduv.js";let d,w=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let s,i,o,l;s=e=>e,i=e=>m({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),o=e=>u({queryKey:[p,e],queryFn:()=>i(e),enabled:!!e}),l=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");f();const a=localStorage.getItem("access_token"),{data:n}=o(a),h=()=>{n&&(localStorage.setItem("username",n.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[t.jsx(j,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(c,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),t.jsx(c,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),t.jsx(x,{onClick:h,children:"Continue"})]})})},d=()=>t.jsx(_,{children:t.jsx(l,{})})});export{w as __tla,d as default};
