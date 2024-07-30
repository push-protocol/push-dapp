import{bf as re,b6 as o,b9 as ie,b2 as e,ba as zt,b4 as fe,b5 as be,bW as H,bN as T,eH as Pt,ce as we,b0 as p,ci as je,cb as Ot,eI as L,bO as Rt,eJ as Ut,eK as Bt,cu as Ht,ds as ne,bd as W,dc as Se,dC as Vt,bS as Ce,aZ as oe,bj as ae,ck as ye,c8 as Ft,dY as Gt,cl as Te,bQ as ve,cX as Ee,cV as Ne,bl as Le,co as Jt,bL as S,cp as Zt,dN as Me,cY as K,bZ as se,bY as qt,da as Wt,a_ as Kt,a$ as Yt,b1 as Xt,eL as Qt,bM as V,bP as er,bh as Ae,bb as tr,b7 as rr,__tla as ir}from"./index-KYtn_yK0.js";import{I as nr,T as le,__tla as or}from"./SendNotifications-CdcuZnST.js";import{I as ar,__tla as sr}from"./index.esm-BmcSZCj0.js";import{E as lr,A as dr,__tla as pr}from"./EmptyNotificationSettings-ByZUJ3of.js";import{a as cr,b as xr,m as hr,c as ur,__tla as gr}from"./PushTokenContractHelper-v7mX8zRw.js";import{__tla as mr}from"./index-Cxw6lRVM.js";import{__tla as fr}from"./TransitionGroupContext-CMmIsdhm.js";let ke,br=Promise.all([(()=>{try{return ir}catch{}})(),(()=>{try{return or}catch{}})(),(()=>{try{return sr}catch{}})(),(()=>{try{return pr}catch{}})(),(()=>{try{return gr}catch{}})(),(()=>{try{return mr}catch{}})(),(()=>{try{return fr}catch{}})()]).then(async()=>{function $e(t){return re({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const De=({text:t,onClick:h,isLoading:d,topMargin:u,loaderTitle:r})=>{const n=ie();return e.jsx(zt,{theme:n,children:e.jsx(Ie,{style:{marginTop:u||"55px"},children:d?e.jsx(_e,{children:e.jsx(fe,{type:be.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:r??"",titleColor:"#fff"})}):e.jsx(H,{onClick:h,variant:"primary",size:"large",children:t})})})},Ie=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 55px;
`,_e=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  color: #fff;
  box-sizing: border-box;
  background-color: #cf1c84;
  border-radius: 15px;
  // padding: 3% 8%;
  padding: 8px 16px;
`,k=t=>t.trim().length==0,ze=({setErrorInfo:t,lowerLimit:h,upperLimit:d,type:u,settingName:r,defaultValue:n,sliderStep:m})=>{t(void 0);let c=!1;return k(r)&&(t(s=>({...s,settingName:"Setting Name is required"})),c=!0),(u===2||u===3)&&(k(h)&&(t(s=>({...s,lowerLimit:"Minimum range is required"})),c=!0),k(d)&&(t(s=>({...s,upperLimit:"Maximum range is required"})),c=!0),(typeof n=="string"?k(n):k(n.lower)||k(n.upper))&&(typeof n=="string"?t(s=>({...s,default:"Default value is required"})):(k(n.lower)&&t(s=>({...s,defaultStart:"Default start value is required"})),k(n.upper)&&t(s=>({...s,defaultEnd:"Default end value is required"}))),c=!0),k(m)&&(t(s=>({...s,sliderStep:"Slider step is required"})),c=!0),!k(h)&&!k(d)&&!k(m)&&(Number(h)<0&&(t(s=>({...s,lowerLimit:"Minimum range should be greater than 0"})),c=!0),Number(d)<0&&(t(s=>({...s,upperLimit:"Maximum range should be greater than 0"})),c=!0),Number(h)>Number(d)&&(t(s=>({...s,lowerLimit:"Minimum range should be less than maximum range"})),c=!0),typeof n=="string"?(Number(n)<Number(h)||Number(n)>Number(d))&&(t(s=>({...s,default:"Default value not in range"})),c=!0):((Number(n.lower)<Number(h)||Number(n.lower)>Number(d))&&(t(s=>({...s,defaultStart:"Default value not in range"})),c=!0),(Number(n.upper)<Number(h)||Number(n.upper)>Number(d)||Number(n.lower)>Number(n.upper))&&(t(s=>({...s,defaultEnd:"Default value not in range"})),c=!0)),Number(m)<=0&&(t(s=>({...s,sliderStep:"Slider step should be greater than 0"})),c=!0),Number(m)>Number(d)-Number(h)&&(t(s=>({...s,sliderStep:"Slider step should be less than range"})),c=!0))),!c},Pe=({checked:t,onChange:h})=>e.jsx(Oe,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:h}),Oe=o.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,de=({checked:t,onChange:h,label:d,description:u})=>e.jsx(L,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(L,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(L,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(E,{children:d}),e.jsx(pe,{children:u})]}),e.jsx(nr,{checked:t,onChange:h})]})}),Re=({onConfirm:t,onClose:h,toastObject:d,InnerComponentProps:u})=>{const r=(u==null?void 0:u.settingToEdit)||void 0,[n,m]=p.useState(!1),[c,s]=p.useState(r?r.description:""),[y,P]=p.useState(r?r.type===1&&r.default||r.type===2&&r.enabled||r.type===3&&r.enabled:!0),[b,D]=p.useState(!!(r&&(r.type===2||r.type===3))),[w,_]=p.useState(r&&(r.type===2||r.type===3)?r.lowerLimit.toString():""),[C,v]=p.useState(r&&(r.type===2||r.type===3)?r.upperLimit.toString():""),[f,z]=p.useState(r&&(r.type===2||r.type===3)&&r.ticker?r.ticker.toString():"1"),[N,G]=p.useState(!!(r&&r.type===3)),[$,U]=p.useState(r&&r.type===2?r.default.toString():""),[X,O]=p.useState(r&&r.type===2?r.default:0),[M,Q]=p.useState(r&&r.type===3?r.default.lower.toString():""),[I,J]=p.useState(r&&r.type===3?r.default.upper.toString():""),[ee,Z]=p.useState(r&&r.type===3?r.default.lower:0),[te,q]=p.useState(r&&r.type===3?r.default.upper:0),[l,x]=p.useState(),a=ie(),i=()=>!n&&h(),A=p.useRef(null);je(A,()=>i());const Dt=g=>{if(g.preventDefault(),m(!0),ze({setErrorInfo:x,defaultValue:N?{lower:M,upper:I}:$,settingName:c,lowerLimit:w,type:b?N?3:2:1,upperLimit:C,sliderStep:f})){const j=r?r.index:Math.floor(Math.random()*1e6),_t=b?N?{type:3,default:{lower:Number(M),upper:Number(I)},enabled:y,description:c,index:j,lowerLimit:Number(w),upperLimit:Number(C),ticker:Number(f)}:{type:2,default:Number($),enabled:y,description:c,index:j,lowerLimit:Number(w),upperLimit:Number(C),ticker:Number(f)}:{type:1,default:y,description:c,index:j};t(_t),h()}m(!1)},B=g=>g!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(g),It=p.useMemo(()=>w!==""&&C!==""&&(N?M!==""&&I!=="":$!=="")&&f!==""&&Number(w)<=Number(C)&&Number(f)>0&&Number(f)<=Number(C)-Number(w)&&(N?Number(M)>=Number(w)&&Number(I)<=Number(C)&&Number(I)>Number(M):Number($)>=Number(w)&&Number($)<=Number(C)),[w,C,$,f,M,I,N]);return e.jsx(He,{ref:A,children:e.jsxs(Ot,{onSubmit:Dt,children:[e.jsx(Ue,{onClick:i}),e.jsxs(Be,{children:[r?"Edit ":"Add a "," Setting"]}),e.jsxs(L,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(L,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(E,{children:"Setting Name"}),e.jsx(Rt,{color:a.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-c.length})]}),e.jsx(Y,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:c,onChange:g=>{s(g.target.value.slice(0,50)),x(j=>({...j,settingName:void 0}))},autocomplete:"off",hasError:!!(l!=null&&l.settingName)}),e.jsx(R,{children:l==null?void 0:l.settingName})]}),e.jsx(de,{checked:y,onChange:()=>P(g=>!g),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(de,{checked:b,onChange:()=>D(g=>!g),label:"Range",description:"Set a range for this setting e.g. 1-10"}),b&&e.jsxs(e.Fragment,{children:[e.jsxs(L,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(E,{children:"Range Values"}),e.jsxs(L,{direction:"row",children:[e.jsx(F,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:w,onChange:g=>{x(j=>({...j,lowerLimit:void 0})),!B(g.target.value)&&_(g.target.value)},autocomplete:"off",hasError:!!(l!=null&&l.lowerLimit)}),e.jsx(E,{padding:"0px 16px",children:"to"}),e.jsx(F,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:C,onChange:g=>{x(j=>({...j,upperLimit:void 0})),!B(g.target.value)&&v(g.target.value)},autocomplete:"off",hasError:!!(l!=null&&l.upperLimit)})]}),e.jsx(R,{children:l==null?void 0:l.lowerLimit}),e.jsx(R,{children:l==null?void 0:l.upperLimit})]}),e.jsxs(L,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Pe,{checked:N,onChange:()=>G(!N)}),e.jsxs(L,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(E,{children:"Enable Multi Range Slider"}),e.jsx(pe,{children:"User can select a range of values in the slider"})]})]}),!N&&e.jsxs(L,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(E,{children:"Default Value"}),e.jsx(Y,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:$,onChange:g=>{x(j=>({...j,default:void 0})),!B(g.target.value)&&(U(g.target.value),O(Number(g.target.value)))},autocomplete:"off",hasError:!!(l!=null&&l.default)}),e.jsx(R,{children:l==null?void 0:l.default})]}),N&&e.jsxs(L,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(E,{children:"Default Values"}),e.jsxs(L,{direction:"row",children:[e.jsx(F,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:M,onChange:g=>{x(j=>({...j,defaultStart:void 0})),!B(g.target.value)&&(Q(g.target.value),Z(Number(g.target.value)))},autocomplete:"off",hasError:!!(l!=null&&l.defaultStart)}),e.jsx(E,{padding:"0px 16px",children:"to"}),e.jsx(F,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:I,onChange:g=>{x(j=>({...j,defaultEnd:void 0})),!B(g.target.value)&&(J(g.target.value),q(Number(g.target.value)))},autocomplete:"off",hasError:!!(l!=null&&l.defaultEnd)})]}),e.jsx(R,{children:(l==null?void 0:l.defaultStart)||(l==null?void 0:l.defaultEnd)})]}),e.jsxs(L,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(E,{children:"Slider Step Value"}),e.jsx(Y,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:f,onChange:g=>{x(j=>({...j,sliderStep:void 0})),z(g.target.value),O(w===""?0:Number(w))},autocomplete:"off",hasError:!!(l!=null&&l.sliderStep)}),e.jsx(R,{children:l==null?void 0:l.sliderStep})]}),It&&e.jsxs(L,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ve,{children:"Preview"}),!N&&e.jsxs(ce,{children:[e.jsx(E,{children:w}),e.jsx(Ut,{val:X,min:Number(w),max:Number(C),step:Number(f),defaultVal:Number($),onChange:({x:g})=>O(g),preview:!0}),e.jsx(E,{children:C})]}),N&&e.jsxs(ce,{children:[e.jsx(E,{children:w}),e.jsx(Bt,{startVal:ee,endVal:te,min:Number(w),max:Number(C),step:Number(f),defaultStartVal:Number(M),defaultEndVal:Number(I),onChange:({startVal:g,endVal:j})=>{Z(g),q(j)},preview:!0}),e.jsx(E,{children:C})]})]})]}),e.jsx(De,{text:"Save Setting",isLoading:n,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ue=o(Pt)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,Be=o.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,He=o.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${T.laptop}) {
    width: 50vw;
  }
  @media (${T.mobileL}) {
    width: 95vw;
  }
`,E=o.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ve=o(E)`
  color: ${t=>t.theme.default.secondaryColor};
`,pe=o.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,F=o(we)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,Y=o(we)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,R=o.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,ce=o.div`
  display: flex;
  padding: 12px;
  gap: 16px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${t=>t.theme.nfsTickerPreviewBg};
`,Fe=({title:t,description:h,Button:d,style:u})=>{const r=ie(),n=ne(700);return e.jsxs(Ze,{style:u,children:[e.jsxs(W,{align:"flex-start",children:[e.jsx(Ge,{style:{color:r.color},children:t}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"4px"}}),e.jsx(Je,{children:h})]})]}),d]})},Ge=o.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${t=>t.theme.color};
`,Je=o.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${t=>t.theme.default.secondaryColor};
`,Ze=o(Ht)`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 20px 24px;

  @media ${T.tablet} {
    padding: 20px 12px;
    flex: 0;
  }
`;function qe(t){return re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(t)}function We(t){return re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(t)}const Ke=({delegateAddress:t,maxWidth:h})=>{const[d,u]=p.useState(t),[r,n]=p.useState(!1),m=ne(1200);return p.useEffect(()=>{if(!m)u(t);else{const c=Se(t,5);u(c)}},[m]),e.jsx(et,{onMouseLeave:()=>n(!1),minWidth:m?"120px":"350px",children:e.jsx(Ye,{addressText:d,isCopied:r,setIsCopied:n,delegateAddress:t})})},Ye=({addressText:t,isCopied:h,setIsCopied:d,delegateAddress:u})=>{const r=ne(1e3),[n,m]=p.useState(!1),c=y=>{m(!1)},s=y=>{m(!0)};return e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},onMouseEnter:s,onMouseLeave:c,children:[e.jsx(tt,{children:Se(t,7,7)}),n&&e.jsx(Xe,{isMobile:r?"10px":"50px",onClick:()=>{navigator.clipboard.writeText(u),d(!0)},children:h?e.jsx(qe,{size:18,color:"white",style:{paddingTop:6}}):e.jsx(We,{size:18,color:"white",style:{paddingTop:6}})})]})},Xe=o.div`
  cursor: pointer;
  margin-left: ${t=>t.isMobile||""};
`,Qe=o.span`
  flex: 3;
  // margin-right: 30px;
  // margin-left: 10px;
  padding: 0px 15px;
  max-height: 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: ${t=>t.maxWidth||"fit-content"};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 164%;
  border-radius: 13px;

  &:active {
    opacity: 0.75;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 4px 8px;
  }
`,et=o(Qe)`
  color: ${t=>t.theme.color};

  &:hover {
    background: rgb(226, 8, 128);
    background: linear-gradient(
      107deg,
      rgba(226, 8, 128, 1) 30%,
      rgba(103, 76, 159, 1) 70%,
      rgba(53, 197, 243, 1) 100%
    );
    opacity: 0.9;
    color: #fff;
    cursor: pointer;
    pointer: hand;
  }
`,tt=o.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`,xe=({options:t,item:h})=>{const[d,u]=p.useState(!1),r=p.useRef();return je(r,()=>u(!1)),e.jsxs("div",{children:[e.jsx(rt,{onClick:()=>u(!0)}),d&&e.jsx(it,{onMouseLeave:()=>u(!1),ref:r,children:t.map(({icon:n,onClick:m,text:c},s)=>e.jsxs(nt,{onClick:()=>m(h),index:s,children:[n,e.jsx(ot,{children:c})]},s))})]})},rt=o(Vt)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${t=>t.theme.default.color};
`,it=o.div`
  padding: 10px 6px;
  width: 119px;
  border-radius: 8px;
  border: 1px solid ${t=>t.theme.default.border};
  position: absolute;
  top: 3px;
  right: 0px;
  background-color: ${t=>t.theme.default.bg};
  z-index: 2;
`,nt=o.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: ${t=>t.index===0?"0px":"16px"};
`,ot=o.span`
  margin-left: 8px;
`,at=t=>{const h=(d,u)=>d.toLowerCase()===u.toLowerCase();return e.jsx(st,{style:t.style,isLoading:t.isLoading,children:e.jsx(W,{flex:"5",justify:"flex-start",align:"stretch",children:t.isLoading?e.jsx(pt,{children:e.jsx(fe,{type:be.SEAMLESS})}):e.jsxs(e.Fragment,{children:[t.items&&t.items.length>0&&t.items.map(d=>{var u,r;return e.jsxs("div",{children:[e.jsx(dt,{}),e.jsxs(W,{direction:"row",justify:"space-between",padding:"9.5px 0px",children:[e.jsxs(W,{direction:"row",justify:"flex-start",margin:"0px 0px 0px -15px",children:[t.isAddress?e.jsx(ct,{children:e.jsx(Ke,{delegateAddress:d,maxWidth:"200px"})}):e.jsxs(e.Fragment,{children:[e.jsx(lt,{children:d.description}),d.type===2&&e.jsx(le,{children:"Range"}),d.type===3&&e.jsx(le,{children:"Multi-Range"})]}),t.isAddress&&h(t.account,d)&&e.jsx(le,{children:"Creator"})]}),t.isAddress===!0&&((u=t.addressDropdownOptions)==null?void 0:u.length)>0&&!h(t.account,d)&&e.jsx(xe,{options:t.addressDropdownOptions,item:d}),t.isAddress===!1&&((r=t.settingsDropdownOptions)==null?void 0:r.length)>0&&e.jsx(xe,{options:t.settingsDropdownOptions,item:d})]})]},t.isAddress?d:d.description||d.index)}),t.items&&t.items.length===0&&t.isAddress===!1&&e.jsx(lr,{title:"No settings added",description:"Add settings for users to customize their notification preferences.",onClick:t.onClickEmptyListButton,buttonTitle:t.emptyListButtonTitle})]})})})},st=o.div`
  padding: ${t=>t.isLoading?"0px":"0px 24px 16px"};
  flex: 1;

  @media ${T.tablet} {
    flex: 0;
    padding: ${t=>t.isLoading?"0px":"0px 0px 10px"};
  }
`,lt=o.span`
  margin-left: 15px;
  color: ${t=>t.theme.scheme==="light"?t.theme.default.color:t.theme.default.secondaryColor};
`,dt=o.div`
  background-color: ${t=>t.theme.default.border};
  height: 1px;
`,pt=o.div`
  height: 100px;
`,ct=o.div`
  @media ${T.tablet} {
    margin: 0px 0px 0px 5px;
  }
`,xt="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.8312%2012.3465L12.8975%208.28027L0.99987%208.28027'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.06626%201.00014L1%205.06641L12.8976%205.06641'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ht=({onMintPushToken:t,noOfPushTokensToCheck:h,containerProps:d})=>{const{account:u,provider:r}=oe(),n=ae.appEnv==="prod",[m,c]=p.useState(!1),s=async()=>{const D=await cr({address:u,provider:r,noOfPushTokensToCheck:h});c(!D)},{isModalOpen:y,showModal:P,ModalComponent:b}=ye();return p.useEffect(()=>{(async()=>await s())()},[h]),e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:m?e.jsxs(gt,{style:d,children:[e.jsx(mt,{children:n?"You do not have sufficient PUSH Tokens. Swap to add more PUSH.":"Follow these steps to ensure you have enough Testnet Push to proceed."}),n?e.jsx(H,{leadingIcon:e.jsx(Ft,{width:"12px",height:"12px",margin:"0 0.5rem 0 0",src:xt}),size:"extraSmall",children:"Swap Tokens for PUSH"}):e.jsxs(ft,{children:[e.jsxs(bt,{href:"https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",target:"_blank",children:[e.jsx(he,{children:"1"}),e.jsx(ue,{children:"Sepolia ETH Faucet"})]}),e.jsxs(wt,{onClick:async()=>{await t(1e3),await s()},children:[e.jsx(he,{children:"2"}),e.jsx(ue,{children:"Get Testnet PUSH"})]})]})]}):""}),y&&e.jsx(b,{InnerComponent:Gt,InnerComponentProps:{defaultPushTokenAmount:h},modalPadding:"0px",modalPosition:Te.ON_ROOT})]})},ut=o.div`
  width: 100%;
  transform: translateY(-40px);
`,gt=o.div`
  box-sizing: border-box;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #f4dcea;
  border-radius: 0px 0px 28px 28px;
  padding: 32px 32px 20px 32px;
  margin-top: 24px;
  margin-bottom: -40px;

  @media ${T.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 24px 16px 24px;
  }
`,mt=o(Ce)`
    color:#D53A94;
    font-size:15px
    font-weight:400;
    line-height:21px;
    text-align: left;
    margin:0 2rem 0 0;
    max-width: 45%;
    @media ${T.laptop} {
        max-width: 55%;
    }
    @media ${T.tablet} {
        max-width: 100%;
        margin: 0;
        margin-bottom: 0.8rem;
    }
`,ft=o.div`
  display: flex;
  flex-direction: row;
`,bt=o.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 1rem;
  @media ${T.laptop} {
    margin: 0 1.5rem 0 0;
  }
`,he=o(Ce)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border: 1.5px solid #d53a94;
  color: #cf1c84;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  max-width: 18px;
  max-height: 18px;
  margin-right: 0.6rem;
`,wt=o.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  @media ${T.laptop} {
    margin: 0;
  }
`,ue=o.label`
  color: #fff;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`,jt=t=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("path",{d:"M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1209 6.84638 16.2635 4.78216 14.7407 3.25932C13.2178 1.73648 11.1536 0.87913 9 0.875ZM12.8672 7.57812L8.28907 11.9531C8.17071 12.0645 8.01406 12.126 7.85157 12.125C7.77214 12.1261 7.69328 12.1115 7.61953 12.082C7.54578 12.0525 7.47861 12.0087 7.42188 11.9531L5.13282 9.76562C5.06933 9.71023 5.01769 9.64257 4.98102 9.56672C4.94434 9.49086 4.92338 9.40837 4.9194 9.32421C4.91542 9.24004 4.92849 9.15594 4.95784 9.07696C4.98719 8.99798 5.03221 8.92575 5.09019 8.86461C5.14816 8.80347 5.2179 8.75469 5.29522 8.72119C5.37253 8.68769 5.45582 8.67017 5.54007 8.66968C5.62433 8.66919 5.70781 8.68574 5.78551 8.71834C5.86321 8.75094 5.93351 8.79891 5.99219 8.85938L7.85157 10.6328L12.0078 6.67188C12.1293 6.56585 12.2871 6.51091 12.4482 6.51853C12.6093 6.52615 12.7612 6.59575 12.8722 6.71277C12.9832 6.8298 13.0446 6.98519 13.0437 7.14646C13.0428 7.30773 12.9795 7.4624 12.8672 7.57812Z",fill:"#D53893"})),St=({title:t,description:h,onCancel:d,disabled:u,onClick:r,feeRequired:n})=>{const{account:m,provider:c}=oe(),[s,y]=p.useState(0),[P,b]=p.useState(!1),[D,w]=p.useState(!1),_=Ne();p.useEffect(()=>{!m||!c||async function(){const v=await xr({address:m,provider:c,contractAddress:Le.epnscore});y(parseInt(v));const f=parseInt(v);f>=n&&f!=0?b(!0):b(!1)}()},[m,c]);const C=async()=>{if(w(!0),!c)return;const v=c.getSigner(m);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const f=await ur({signer:v,contractAddress:Le.epnscore,amount:n-s});console.debug("response",f),f&&(w(!1),y(n),b(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:z=>e.jsx(Me,{size:z,color:"green"})}))}catch(f){console.error(f),f.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:z=>e.jsx(K,{size:z,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:z=>e.jsx(K,{size:z,color:"red"})}),console.error("Error --> %o",f),console.error({err:f}))}w(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(yt,{children:[e.jsxs("div",{children:[e.jsx(Tt,{children:t}),e.jsx(vt,{children:h})]}),e.jsxs(Ee,{flex:"0",children:[P?e.jsx(Ct,{src:jt}):null,e.jsxs(Et,{children:[n," PUSH"]})]})]}),e.jsx(ht,{noOfPushTokensToCheck:n,containerProps:{width:"100%"},onMintPushToken:async v=>{await hr({noOfTokens:v,provider:c,account:m})}}),D?e.jsx(e.Fragment,{children:e.jsxs(Nt,{children:[e.jsx(Jt,{size:42,color:S.COLORS.PRIMARY_PINK,type:Zt.PROCESSING}),e.jsx(Lt,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Mt,{children:[e.jsx(H,{onClick:d,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),s>=n?e.jsx(H,{onClick:r,disabled:u,size:"large",children:"Save Changes"}):e.jsx(H,{onClick:C,size:"large",disabled:u,children:"Approve PUSH"})]})})]})},Ct=o.img``,yt=o(ve)`
  background: ${t=>t.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  height: 100px;
  align-items: center;
  z-index: 1;

  @media ${T.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${T.mobileL} {
    margin: 0px;
  }
`,Tt=o.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,vt=o.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Et=o.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Nt=o(ve)`
  flex-direction: row;
  margin-top: 33px;

  @media ${T.tablet} {
    flex: 0;
  }
`,Lt=o.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Mt=o(Ee)`
  justify-content: end;
  margin-top: 24px;
  gap: 14px;
  @media ${T.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,At=ae.coreContractChain;function kt(){const{account:t,chainId:h,wallet:d}=oe(),{coreChannelAdmin:u,delegatees:r}=se(x=>x.admin),{channelSettings:n}=se(x=>x.channels),m=qt(),c=At===h,s=50,[y,P]=p.useState(""),[b,D]=p.useState([]),[w,_]=p.useState(),[C,v]=p.useState(!1),[f,z]=p.useState(!0),{handleConnectWalletAndEnableProfile:N}=p.useContext(Wt),{userPushSDKInstance:G}=se(x=>x.user),{isModalOpen:$,showModal:U,ModalComponent:X}=ye(),O=()=>{const x=window.location.origin;window.location.replace(`${x}/channels`)};p.useEffect(()=>{(async()=>{if(v(!0),!!t){try{await G.channel.info(t)||O()}catch{O()}u&&u!==t&&O(),v(!1)}})()},[t,u]),p.useEffect(()=>{$===!1&&_(void 0)},[$]),p.useEffect(()=>{t&&(!r||!r.length?P(t):P(c?r[0].channel:r[0].alias_address))},[r,t]),p.useEffect(()=>{y&&n[y]&&(D(n[y]||[]),z(!1))},[y,n]);const M=Ne(5e3),Q=Kt(),{refetch:I}=Yt(t),J=()=>{Q(`${Xt.ChannelDashboard}/${t}`,{replace:!0})},ee=x=>{const a=b.findIndex(i=>i.index===x.index);if(a===-1)D([...b,x]);else{const i=[...b];i[a]=x,D(i)}},Z=x=>{_(x),U()},te=x=>{D(a=>a.filter(i=>i.index!==x.index))},q=async()=>{try{v(!0);let x=G;if(!x.signer&&(x=await N({wallet:d}),!x)){v(!1);return}M.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const a=b.map(i=>{if(i.type===1)return{type:i.type,description:i.description,default:i.default?1:0};if(i.type===2)return console.info({type:i.type,description:i.description,default:i.default,data:{lower:i.lowerLimit,upper:i.upperLimit,ticker:i.ticker,enabled:i.enabled}}),{type:i.type,description:i.description,default:i.default,data:{lower:i.lowerLimit,upper:i.upperLimit,ticker:i.ticker,enabled:i.enabled}};if(i.type===3)return console.info({type:i.type,description:i.description,default:i.default,data:{lower:i.lowerLimit,upper:i.upperLimit,ticker:i.ticker,enabled:i.enabled}}),{type:i.type,description:i.description,default:i.default,data:{lower:i.lowerLimit,upper:i.upperLimit,ticker:i.ticker,enabled:i.enabled}}});console.info(a),await x.channel.setting(a),m(Qt({channelAddress:y,settings:b})),v(!1),M.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:i=>e.jsx(Me,{size:i,color:"green"})}),I(),setTimeout(()=>J(),2e3)}catch(x){v(!1),x.code=="ACTION_REJECTED"?M.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:a=>e.jsx(K,{size:a,color:"red"})}):(M.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:a=>e.jsx(K,{size:a,color:"red"})}),console.error("Error --> %o",x))}},l=p.useMemo(()=>{if(!b||!n[t])return!1;if(b.length!==n[t].length)return!0;let x=!0;for(let a=0;a<b.length;a++){const i=b[a],A=n[t][a];i.type===1?x=x&&i.type===A.type&&i.description===A.description&&i.default===A.default:i.type===2&&(x=x&&i.type===A.type&&i.description===A.description&&i.default===A.default&&i.enabled===A.enabled&&i.lowerLimit===A.lowerLimit&&i.upperLimit===A.upperLimit&&i.ticker===A.ticker)}return x===!1},[b,n[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(dr,{onClick:U})}),e.jsx(at,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:f,items:b,onClickEmptyListButton:U,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx($e,{}),onClick:Z,text:"Edit"},{icon:e.jsx(ar,{}),onClick:te,text:"Delete"}]}),e.jsx(St,{feeRequired:s,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:J,disabled:!l||C,onClick:q}),e.jsx(X,{modalPosition:Te.ON_PARENT,InnerComponent:Re,onConfirm:ee,InnerComponentProps:{settingToEdit:w}})]})}ae.coreContractChain;function $t(){er.pageview("/channel/settings");const[t,h]=Ae.useState(null),d=()=>h(null);return Ae.useEffect(()=>{t&&d()},[t]),e.jsx(ge,{children:e.jsx(kt,{})})}let ge,me;ge=o(tr)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE}
    ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${S.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${V.MINI_MODULES.DESKTOP.RIGHT} - ${V.MINI_MODULES.DESKTOP.LEFT} -
      ${S.ADJUSTMENTS.PADDING.BIG} - ${S.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${S.ADJUSTMENTS.PADDING.BIG};

  @media ${T.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${T.mobileL} {
    margin: ${S.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${V.MINI_MODULES.MOBILE.RIGHT} - ${V.MINI_MODULES.MOBILE.LEFT} -
        ${S.ADJUSTMENTS.PADDING.DEFAULT} - ${S.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${V.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,ke=()=>e.jsx(me,{children:e.jsx($t,{})}),me=o(rr)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{br as __tla,ke as default};
