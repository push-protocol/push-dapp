import{d_ as e,em as i,f9 as f,e9 as o,fa as _,fb as j,__tla as u}from"./index-gxlitB_U.js";import{F as y,__tla as C}from"./index.esm-u6AakFhg.js";let d,m,x,b=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let r,a,n,s,c;d=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(f,{}),onClick:t,size:"small",variant:"tertiary",children:"Add Delegate"}),x=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(y,{}),onClick:t,size:"small",variant:"tertiary",children:"Manage Settings"}),r=({onClick:t,title:l})=>e.jsx(i,{variant:"outline",size:"small",onClick:t,children:l||"Modify Settings"}),m=({description:t,onClick:l,title:p,buttonTitle:h,showTopBorder:g=!0})=>e.jsxs(a,{showTopBorder:g,children:[e.jsx(c,{src:j,alt:"No Settings",width:"24px",height:"24px"}),e.jsx(n,{children:p}),e.jsx(s,{children:t}),e.jsx(r,{onClick:l,title:h})]}),a=o.div`
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
`});export{d as A,m as E,x as M,b as __tla};
