import{d4 as m,d5 as u,d6 as p,b1 as t,b2 as r,bq as c,bY as x,__tla as _}from"./index-BmsmMDF4.js";import{C as g,__tla as y}from"./ContentLayout-8oPd0x9X.js";import{u as f,D as b,__tla as j}from"./useDiscordSession-CF1OZuSA.js";let d,w=Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{let s,i,o,l;s=e=>e,i=e=>m({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),o=e=>u({queryKey:[p,e],queryFn:()=>i(e),enabled:!!e}),l=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");f();const a=localStorage.getItem("access_token"),{data:n}=o(a),h=()=>{n&&(localStorage.setItem("username",n.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"spacing-md",flexDirection:"column",alignItems:"center",width:"360px",gap:"spacing-xs",backgroundColor:"surface-primary",borderRadius:"radius-md",border:"border-sm solid stroke-secondary",children:[t.jsx(b,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(c,{variant:"h4-semibold",color:"text-primary",children:"Complete Verification"}),t.jsx(c,{variant:"bs-regular",color:"text-tertiary",children:"Continue to complete the verification process."})]}),t.jsx(x,{onClick:h,children:"Continue"})]})})},d=()=>t.jsx(g,{children:t.jsx(l,{})})});export{w as __tla,d as default};
