import{cE as m,cF as u,cG as p,aZ as a,bf as r,cH as n,bL as x,__tla as _}from"./index-Dblrw9xq.js";import{C as g,__tla as f}from"./ContentLayout-CKGz0smm.js";import{u as y,D as b,__tla as j}from"./useDiscordSession-D05RFdfG.js";let d,w=Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{let s,i,o,c;s=e=>e,i=e=>m({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(t=>s(t.data)),o=e=>u({queryKey:[p,e],queryFn:()=>i(e),enabled:!!e}),c=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");y();const t=localStorage.getItem("access_token"),{data:l}=o(t),h=()=>{l&&(localStorage.setItem("username",l.username),window.close())};return e||window.close(),a.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:a.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[a.jsx(b,{width:48,height:48}),a.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[a.jsx(n,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),a.jsx(n,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),a.jsx(x,{onClick:h,children:"Continue"})]})})},d=()=>a.jsx(g,{children:a.jsx(c,{})})});export{w as __tla,d as default};
