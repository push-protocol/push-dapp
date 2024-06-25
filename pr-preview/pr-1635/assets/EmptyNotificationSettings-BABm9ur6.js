import{q as o,dx as k,dy as y,m as t,dz as _,dA as w,__tla as $}from"./index-V3Ch6t70.js";import{F as z,__tla as T}from"./index.esm-DR8-2-it.js";let m,g,f,u,A=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return T}catch{}})()]).then(async()=>{let s,i,a,r,d,n,x,p,c,h;u=({onClick:e})=>t.jsxs(i,{onClick:e,children:[t.jsx(n,{}),t.jsx(r,{children:"Add Delegate"})]}),f=({onClick:e})=>t.jsxs(i,{onClick:e,children:[t.jsx(z,{}),t.jsx(r,{children:"Manage Settings"})]}),s=({onClick:e,title:l})=>t.jsx(a,{onClick:e,children:t.jsx(d,{children:l||"Modify Settings"})}),m=({onClick:e})=>t.jsxs(i,{onClick:e,children:[t.jsx(n,{}),t.jsx(r,{children:"Add Setting"})]}),i=o(k)`
  min-height: 36px;
  background: ${e=>e.theme.default.primaryPushThemeTextColor};
  color: #fff;
  z-index: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  padding: 4px 12px 4px 12px;
`,a=o.button`
  min-height: 36px;
  border: 1px solid ${e=>e.theme.default.borderColor};
  background: transparent;
  color: white;
  z-index: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  padding: 4px 12px 4px 12px;
  cursor: pointer;
`,r=o.span`
  margin-left: 8px;
`,d=o.span`
  color: ${e=>e.theme.default.color};
`,n=o(y)`
  font-size: 16px;
`,g=({description:e,onClick:l,title:j,buttonTitle:b,showTopBorder:C=!0})=>t.jsxs(x,{showTopBorder:C,children:[t.jsx(h,{src:w,alt:"No Settings",width:"24px",height:"24px"}),t.jsx(p,{children:j}),t.jsx(c,{children:e}),t.jsx(s,{onClick:l,title:b})]}),x=o.div`
  border-top: ${e=>e.showTopBorder&&`1px solid ${e.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`,p=o.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${e=>e.theme.default.color};
`,c=o.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${e=>e.theme.default.secondaryColor};
`,h=o(_)`
  color: ${e=>e.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`});export{m as A,g as E,f as M,A as __tla,u as a};
