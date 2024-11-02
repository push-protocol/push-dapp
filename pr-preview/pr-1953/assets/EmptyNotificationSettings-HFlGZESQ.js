import{e1 as e,eo as l,f5 as f,ea as o,f6 as _,f7 as j,__tla as u}from"./index-Di-5xBRn.js";import{F as y,__tla as C}from"./index.esm-DJ7EUYPp.js";let d,x,m,k=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let r,a,n,s,c;d=({onClick:t})=>e.jsx(l,{leadingIcon:e.jsx(f,{}),onClick:t,size:"small",variant:"tertiary",children:"Add Delegate"}),m=({onClick:t})=>e.jsx(l,{leadingIcon:e.jsx(y,{}),onClick:t,size:"small",variant:"tertiary",children:"Manage Settings"}),r=({onClick:t,title:i})=>e.jsx(l,{variant:"outline",size:"small",onClick:t,children:i||"Modify Settings"}),x=({description:t,onClick:i,title:p,buttonTitle:h,showTopBorder:g=!0})=>e.jsxs(a,{showTopBorder:g,children:[e.jsx(c,{src:j,alt:"No Settings",width:"24px",height:"24px"}),e.jsx(n,{children:p}),e.jsx(s,{children:t}),e.jsx(r,{onClick:i,title:h})]}),a=o.div`
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
