import{ea as e,ev as i,f9 as f,fa as j,ej as o,fb as _,__tla as u}from"./index-DZCEXmT_.js";import{F as y,__tla as C}from"./index.esm-CM2taf1h.js";let d,x,m,k=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let a,r,n,s,c;d=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(f,{}),onClick:t,size:"small",variant:"tertiary",children:"Add Delegate"}),m=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(y,{}),onClick:t,size:"small",variant:"tertiary",children:"Manage Settings"}),a=({onClick:t,title:l})=>e.jsx(i,{variant:"outline",size:"small",onClick:t,children:l||"Modify Settings"}),x=({description:t,onClick:l,title:p,buttonTitle:h,showTopBorder:g=!0})=>e.jsxs(r,{showTopBorder:g,children:[e.jsx(c,{src:j,alt:"No Settings",width:"24px",height:"24px"}),e.jsx(n,{children:p}),e.jsx(s,{children:t}),e.jsx(a,{onClick:l,title:h})]}),r=o.div`
  border-top: ${t=>t.showTopBorder&&`1px solid ${t.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`,n=o.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.color};
`,s=o.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${t=>t.theme.default.secondaryColor};
`,c=o(_)`
  color: ${t=>t.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`});export{d as A,x as E,m as M,k as __tla};
