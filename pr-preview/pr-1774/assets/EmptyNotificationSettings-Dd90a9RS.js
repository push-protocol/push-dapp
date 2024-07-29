import{b2 as e,bW as c,c7 as g,b6 as o,c8 as f,c9 as j,__tla as b}from"./index-0q_PB2hm.js";let d,x,u=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{let l,r,n,a,s;l=({onClick:t,title:i})=>e.jsx(c,{variant:"outline",size:"small",onClick:t,children:i||"Modify Settings"}),d=({onClick:t})=>e.jsx(c,{onClick:t,size:"small",leadingIcon:e.jsx(g,{}),variant:"tertiary",children:"Add Setting"}),x=({description:t,onClick:i,title:p,buttonTitle:h,showTopBorder:m=!0})=>e.jsxs(r,{showTopBorder:m,children:[e.jsx(s,{src:j,alt:"No Settings",width:"24px",height:"24px"}),e.jsx(n,{children:p}),e.jsx(a,{children:t}),e.jsx(l,{onClick:i,title:h})]}),r=o.div`
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
`,a=o.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${t=>t.theme.default.secondaryColor};
`,s=o(f)`
  color: ${t=>t.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`});export{d as A,x as E,u as __tla};
