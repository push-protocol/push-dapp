import{m as e,db as i,dq as d,q as l,dr as C,ds as _,__tla as u}from"./index-CdfHCPiZ.js";import{F as y,__tla as k}from"./index.esm-DWjNOnRe.js";let x,m,h,p,b=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{let a,r,n,s,c;p=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(d,{}),onClick:t,size:"small",variant:"tertiary",children:"Add Delegate"}),h=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(y,{}),onClick:t,size:"small",variant:"tertiary",children:"Manage Settings"}),a=({onClick:t,title:o})=>e.jsx(i,{variant:"outline",size:"small",onClick:t,children:o||"Modify Settings"}),x=({onClick:t})=>e.jsx(i,{onClick:t,size:"small",leadingIcon:e.jsx(d,{}),variant:"tertiary",children:"Add Setting"}),m=({description:t,onClick:o,title:g,buttonTitle:f,showTopBorder:j=!0})=>e.jsxs(r,{showTopBorder:j,children:[e.jsx(c,{src:_,alt:"No Settings",width:"24px",height:"24px"}),e.jsx(n,{children:g}),e.jsx(s,{children:t}),e.jsx(a,{onClick:o,title:f})]}),r=l.div`
  border-top: ${t=>t.showTopBorder&&`1px solid ${t.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`,n=l.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.color};
`,s=l.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${t=>t.theme.default.secondaryColor};
`,c=l(C)`
  color: ${t=>t.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`});export{x as A,m as E,h as M,b as __tla,p as a};
