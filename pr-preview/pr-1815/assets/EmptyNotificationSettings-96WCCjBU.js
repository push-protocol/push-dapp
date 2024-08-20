import{aZ as e,bM as i,b_ as d,a_ as l,b$ as j,c0 as C,__tla as u}from"./index-D97yGUKh.js";import{F as y,__tla as b}from"./index.esm-D9C76kSf.js";let x,m,h,p,k=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let a,n,r,s,c;p=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(d,{}),onClick:t,size:"small",variant:"tertiary",children:"Add Delegate"}),h=({onClick:t})=>e.jsx(i,{leadingIcon:e.jsx(y,{}),onClick:t,size:"small",variant:"tertiary",children:"Manage Settings"}),a=({onClick:t,title:o})=>e.jsx(i,{variant:"outline",size:"small",onClick:t,children:o||"Modify Settings"}),x=({onClick:t})=>e.jsx(i,{onClick:t,size:"small",leadingIcon:e.jsx(d,{}),variant:"tertiary",children:"Add Setting"}),m=({description:t,onClick:o,title:g,buttonTitle:f,showTopBorder:_=!0})=>e.jsxs(n,{showTopBorder:_,children:[e.jsx(c,{src:C,alt:"No Settings",width:"24px",height:"24px"}),e.jsx(r,{children:g}),e.jsx(s,{children:t}),e.jsx(a,{onClick:o,title:f})]}),n=l.div`
  border-top: ${t=>t.showTopBorder&&`1px solid ${t.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`,r=l.div`
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
`,c=l(j)`
  color: ${t=>t.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`});export{x as A,m as E,h as M,k as __tla,p as a};
