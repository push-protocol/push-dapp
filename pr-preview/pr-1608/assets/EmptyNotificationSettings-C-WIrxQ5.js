import{bK as o,cP as k,hr as _,bV as t,d8 as y,hs as w,__tla as $}from"./index-DxXVDKDy.js";import{a as z,__tla as T}from"./index.esm-Rg6XGH-7.js";let m,g,f,u,B=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return T}catch{}})()]).then(async()=>{let s,i,a,r,d,n,x,c,p,h;m=({onClick:e})=>t.jsxs(i,{onClick:e,children:[t.jsx(n,{}),t.jsx(r,{children:"Add Delegate"})]}),f=({onClick:e})=>t.jsxs(i,{onClick:e,children:[t.jsx(z,{}),t.jsx(r,{children:"Manage Settings"})]}),s=({onClick:e,title:l})=>t.jsx(a,{onClick:e,children:t.jsx(d,{children:l||"Modify Settings"})}),u=({onClick:e})=>t.jsxs(i,{onClick:e,children:[t.jsx(n,{}),t.jsx(r,{children:"Add Setting"})]}),i=o(k)`
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
`,n=o(_)`
  font-size: 16px;
`,g=({description:e,onClick:l,title:j,buttonTitle:b,showTopBorder:C=!0})=>t.jsxs(x,{showTopBorder:C,children:[t.jsx(h,{src:w,alt:"No Settings",width:"24px",height:"24px"}),t.jsx(c,{children:j}),t.jsx(p,{children:e}),t.jsx(s,{onClick:l,title:b})]}),x=o.div`
  border-top: ${e=>e.showTopBorder&&`1px solid ${e.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`,c=o.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${e=>e.theme.default.color};
`,p=o.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${e=>e.theme.default.secondaryColor};
`,h=o(y)`
  color: ${e=>e.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`});export{m as A,g as E,f as M,B as __tla,u as a};