import{G as Ge,q as g,m as e,d1 as A,eK as Je,dl as se,r as d,X as Fe,dD as Ve,dg as qe,eL as E,d2 as He,eM as Ke,eN as We,d4 as le,eI as de,dq as Xe,x as pe,eG as ce,e6 as ue,dJ as Ze,c$ as S,dK as Ye,eO as xe,eJ as q,z as he,de as Q,dd as Qe,ew as et,dF as tt,db as rt,dG as it,eP as nt,d0 as O,d3 as at,R as ge,n as ot,S as st,__tla as lt}from"./index-GxSltxDl.js";import{__tla as dt}from"./Tag-ChGB3z2h.js";import{I as pt,__tla as ct}from"./index.esm-a1zX_0-3.js";import{M as ut,g as xt,S as ht,F as gt,m as mt,a as ft,C as bt,b as St,__tla as yt}from"./ChannelInfoList-DAG28Xq2.js";import{I as wt,__tla as Nt}from"./SendNotifications-Bt4jgRED.js";import{A as jt,__tla as Tt}from"./EmptyNotificationSettings-DGJ9dKiw.js";import{__tla as Et}from"./TransitionGroupContext-DY0i5Y4V.js";import{__tla as Ct}from"./index.es-DnNj_1zu.js";import"./browser-CeceZ__e.js";import{__tla as vt}from"./index-YTyWNNjJ.js";import{__tla as Mt}from"./index.esm-DeF6csOf.js";let me,At=Promise.all([(()=>{try{return lt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return Mt}catch{}})()]).then(async()=>{function fe(t){return Ge({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const v=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:m,upperLimit:f,type:y,settingName:i,defaultValue:c,sliderStep:w})=>{t(void 0);let p=!1;return v(i)&&(t(a=>({...a,settingName:"Setting Name is required"})),p=!0),(y===2||y===3)&&(v(m)&&(t(a=>({...a,lowerLimit:"Minimum range is required"})),p=!0),v(f)&&(t(a=>({...a,upperLimit:"Maximum range is required"})),p=!0),(typeof c=="string"?v(c):v(c.lower)||v(c.upper))&&(typeof c=="string"?t(a=>({...a,default:"Default value is required"})):(v(c.lower)&&t(a=>({...a,defaultStart:"Default start value is required"})),v(c.upper)&&t(a=>({...a,defaultEnd:"Default end value is required"}))),p=!0),v(w)&&(t(a=>({...a,sliderStep:"Slider step is required"})),p=!0),!v(m)&&!v(f)&&!v(w)&&(Number(m)<0&&(t(a=>({...a,lowerLimit:"Minimum range should be greater than 0"})),p=!0),Number(f)<0&&(t(a=>({...a,upperLimit:"Maximum range should be greater than 0"})),p=!0),Number(m)>Number(f)&&(t(a=>({...a,lowerLimit:"Minimum range should be less than maximum range"})),p=!0),typeof c=="string"?(Number(c)<Number(m)||Number(c)>Number(f))&&(t(a=>({...a,default:"Default value not in range"})),p=!0):((Number(c.lower)<Number(m)||Number(c.lower)>Number(f))&&(t(a=>({...a,defaultStart:"Default value not in range"})),p=!0),(Number(c.upper)<Number(m)||Number(c.upper)>Number(f)||Number(c.lower)>Number(c.upper))&&(t(a=>({...a,defaultEnd:"Default value not in range"})),p=!0)),Number(w)<=0&&(t(a=>({...a,sliderStep:"Slider step should be greater than 0"})),p=!0),Number(w)>Number(f)-Number(m)&&(t(a=>({...a,sliderStep:"Slider step should be less than range"})),p=!0))),!p},Se=({checked:t,onChange:m})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:m}),ye=g.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,ee=({checked:t,onChange:m,label:f,description:y})=>e.jsx(E,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(E,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(T,{children:f}),e.jsx(te,{children:y})]}),e.jsx(wt,{checked:t,onChange:m})]})}),we=({onConfirm:t,onClose:m,toastObject:f,InnerComponentProps:y})=>{const i=(y==null?void 0:y.settingToEdit)||void 0,[c,w]=d.useState(!1),[p,a]=d.useState(i?i.description:""),[L,N]=d.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[C,B]=d.useState(!!(i&&(i.type===2||i.type===3))),[u,k]=d.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[x,I]=d.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[h,$]=d.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[j,J]=d.useState(!!(i&&i.type===3)),[M,W]=d.useState(i&&i.type===2?i.default.toString():""),[P,U]=d.useState(i&&i.type===2?i.default:0),[D,F]=d.useState(i&&i.type===3?i.default.lower.toString():""),[_,X]=d.useState(i&&i.type===3?i.default.upper.toString():""),[Z,V]=d.useState(i&&i.type===3?i.default.lower:0),[Y,l]=d.useState(i&&i.type===3?i.default.upper:0),[n,r]=d.useState(),o=Fe(),ae=()=>!c&&m(),oe=d.useRef(null);Ve(oe,()=>ae());const Pe=s=>{if(s.preventDefault(),w(!0),be({setErrorInfo:r,defaultValue:j?{lower:D,upper:_}:M,settingName:p,lowerLimit:u,type:C?j?3:2:1,upperLimit:x,sliderStep:h})){const b=i?i.index:Math.floor(Math.random()*1e6),Oe=C?j?{type:3,default:{lower:Number(D),upper:Number(_)},enabled:L,description:p,index:b,lowerLimit:Number(u),upperLimit:Number(x),ticker:Number(h)}:{type:2,default:Number(M),enabled:L,description:p,index:b,lowerLimit:Number(u),upperLimit:Number(x),ticker:Number(h)}:{type:1,default:L,description:p,index:b};t(Oe),m()}w(!1)},z=s=>s!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(s),ze=d.useMemo(()=>u!==""&&x!==""&&(j?D!==""&&_!=="":M!=="")&&h!==""&&Number(u)<=Number(x)&&Number(h)>0&&Number(h)<=Number(x)-Number(u)&&(j?Number(D)>=Number(u)&&Number(_)<=Number(x)&&Number(_)>Number(D):Number(M)>=Number(u)&&Number(M)<=Number(x)),[u,x,M,h,D,_,j]);return e.jsx(Te,{ref:oe,children:e.jsxs(qe,{onSubmit:Pe,children:[e.jsx(Ne,{onClick:ae}),e.jsxs(je,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(E,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(T,{children:"Setting Name"}),e.jsx(He,{color:o.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-p.length})]}),e.jsx(H,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:p,onChange:s=>{a(s.target.value.slice(0,50)),r(b=>({...b,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(R,{children:n==null?void 0:n.settingName})]}),e.jsx(ee,{checked:L,onChange:()=>N(s=>!s),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(ee,{checked:C,onChange:()=>B(s=>!s),label:"Range",description:"Set a range for this setting e.g. 1-10"}),C&&e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Range Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:u,onChange:s=>{r(b=>({...b,lowerLimit:void 0})),!z(s.target.value)&&k(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(T,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:x,onChange:s=>{r(b=>({...b,upperLimit:void 0})),!z(s.target.value)&&I(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(R,{children:n==null?void 0:n.lowerLimit}),e.jsx(R,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(E,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:j,onChange:()=>J(!j)}),e.jsxs(E,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(T,{children:"Enable Multi Range Slider"}),e.jsx(te,{children:"User can select a range of values in the slider"})]})]}),!j&&e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Default Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:M,onChange:s=>{r(b=>({...b,default:void 0})),!z(s.target.value)&&(W(s.target.value),U(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(R,{children:n==null?void 0:n.default})]}),j&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Default Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:D,onChange:s=>{r(b=>({...b,defaultStart:void 0})),!z(s.target.value)&&(F(s.target.value),V(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(T,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:_,onChange:s=>{r(b=>({...b,defaultEnd:void 0})),!z(s.target.value)&&(X(s.target.value),l(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(R,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Slider Step Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:h,onChange:s=>{r(b=>({...b,sliderStep:void 0})),$(s.target.value),U(u===""?0:Number(u))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(R,{children:n==null?void 0:n.sliderStep})]}),ze&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!j&&e.jsxs(re,{children:[e.jsx(T,{children:u}),e.jsx(Ke,{val:P,min:Number(u),max:Number(x),step:Number(h),defaultVal:Number(M),onChange:({x:s})=>U(s),preview:!0}),e.jsx(T,{children:x})]}),j&&e.jsxs(re,{children:[e.jsx(T,{children:u}),e.jsx(We,{startVal:Z,endVal:Y,min:Number(u),max:Number(x),step:Number(h),defaultStartVal:Number(D),defaultEndVal:Number(_),onChange:({startVal:s,endVal:b})=>{V(s),l(b)},preview:!0}),e.jsx(T,{children:x})]})]})]}),e.jsx(ut,{text:"Save Setting",isLoading:c,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=g(Je)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,je=g.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,Te=g.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${A.laptop}) {
    width: 50vw;
  }
  @media (${A.mobileL}) {
    width: 95vw;
  }
`,T=g.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ee=g(T)`
  color: ${t=>t.theme.default.secondaryColor};
`,te=g.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,G=g(se)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,H=g(se)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,R=g.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,re=g.div`
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
`,Ce=({title:t,description:m,onCancel:f,disabled:y,onClick:i,feeRequired:c})=>{const{account:w,provider:p}=pe(),[a,L]=d.useState(0),[N,C]=d.useState(!1),[B,u]=d.useState(!1),k=ce();d.useEffect(()=>{!w||!p||async function(){const I=await xt({address:w,provider:p,contractAddress:ue.epnscore});L(parseInt(I));const h=parseInt(I);h>=c&&h!=0?C(!0):C(!1)}()},[w,p]);const x=async()=>{if(u(!0),!p)return;const I=p.getSigner(w);k.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const h=await ft({signer:I,contractAddress:ue.epnscore,amount:c-a});console.debug("response",h),h&&(u(!1),L(c),C(!0),k.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(h){console.error(h),h.code=="ACTION_REJECTED"?k.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(q,{size:$,color:"red"})}):(k.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(q,{size:$,color:"red"})}),console.error("Error --> %o",h),console.error({err:h}))}u(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsxs("div",{children:[e.jsx(Ae,{children:t}),e.jsx(Le,{children:m})]}),e.jsxs(de,{flex:"0",children:[N?e.jsx(ve,{src:ht}):null,e.jsxs(Ie,{children:[c," PUSH"]})]})]}),e.jsx(gt,{noOfPushTokensToCheck:c,containerProps:{width:"100%"},onMintPushToken:async I=>{await mt({noOfTokens:I,provider:p,account:w})}}),B?e.jsx(e.Fragment,{children:e.jsxs(De,{children:[e.jsx(Ze,{size:42,color:S.COLORS.PRIMARY_PINK,type:Ye.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ke,{onClick:f,disabled:!1,children:"Cancel"}),a>=c?e.jsx(K,{disabled:y,onClick:i,children:"Save Changes"}):e.jsx(K,{disabled:y,onClick:x,children:"Approve PUSH"})]})})]})},ve=g.img``,Me=g(le)`
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

  @media ${A.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${A.mobileL} {
    margin: 0px;
  }
`,Ae=g.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Le=g.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Ie=g.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,De=g(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${A.tablet} {
    flex: 0;
  }
`,_e=g.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,$e=g(de)`
  justify-content: end;
  margin-top: 24px;
  @media ${A.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,K=g(Xe)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  background: ${t=>t.disabled?t.theme.nfsDisabled:t.theme.default.primaryPushThemeTextColor};
  color: ${t=>t.disabled?t.theme.nfsDisabledText:"white"};
  padding: 16px 27px;
  width: 12rem;

  @media ${A.tablet} {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${A.mobileL} {
    width: -webkit-fill-available;
  }
`,ke=g(K)`
  margin-right: 14px;
  background: ${t=>t.theme.default.bg};
  color: ${t=>t.theme.logoBtnColor};
  border: 1px solid
    ${t=>t.theme.scheme==="light"?t.theme.default.primaryPushThemeTextColor:t.theme.default.borderColor};

  @media ${A.mobileL} {
    margin-right: 0px;
    margin-top: 10px;
  }
`,Ue=he.coreContractChain;function Re(){const{account:t,chainId:m}=pe(),{coreChannelAdmin:f,delegatees:y}=Q(l=>l.admin),{channelSettings:i}=Q(l=>l.channels),c=Qe(),w=Ue===m,p=50,[a,L]=d.useState(""),[N,C]=d.useState([]),[B,u]=d.useState(),[k,x]=d.useState(!1),[I,h]=d.useState(!0),{handleConnectWallet:$}=d.useContext(et),{userPushSDKInstance:j}=Q(l=>l.user),{isModalOpen:J,showModal:M,ModalComponent:W}=tt(),P=()=>{const l=window.location.origin;window.location.replace(`${l}/channels`)};d.useEffect(()=>{(async()=>{if(x(!0),!!t){try{await j.channel.info(t)||P()}catch{P()}f&&f!==t&&P(),x(!1)}})()},[t,f]),d.useEffect(()=>{J===!1&&u(void 0)},[J]),d.useEffect(()=>{t&&(!y||!y.length?L(t):L(w?y[0].channel:y[0].alias_address))},[y,t]),d.useEffect(()=>{a&&i[a]&&(C(i[a]||[]),h(!1))},[a,i]);const U=ce(5e3),D=rt(),F=()=>{D("/dashboard",{replace:!0})},_=l=>{const n=N.findIndex(r=>r.index===l.index);if(n===-1)C([...N,l]);else{const r=[...N];r[n]=l,C(r)}},X=l=>{u(l),M()},Z=l=>{C(n=>n.filter(r=>r.index!==l.index))},V=async()=>{try{x(!0);let l=j;if(!l.signer&&(l=await $(),!l)){x(!1);return}U.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const n=N.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(n),await l.channel.setting(n),c(nt({channelAddress:a,settings:N})),x(!1),U.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),setTimeout(()=>F(),2e3)}catch(l){x(!1),l.code=="ACTION_REJECTED"?U.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:n=>e.jsx(q,{size:n,color:"red"})}):(U.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:n=>e.jsx(q,{size:n,color:"red"})}),console.error("Error --> %o",l))}},Y=d.useMemo(()=>{if(!N||!i[t])return!1;if(N.length!==i[t].length)return!0;let l=!0;for(let n=0;n<N.length;n++){const r=N[n],o=i[t][n];r.type===1?l=l&&r.type===o.type&&r.description===o.description&&r.default===o.default:r.type===2&&(l=l&&r.type===o.type&&r.description===o.description&&r.default===o.default&&r.enabled===o.enabled&&r.lowerLimit===o.lowerLimit&&r.upperLimit===o.upperLimit&&r.ticker===o.ticker)}return l===!1},[N,i[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(bt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(jt,{onClick:M})}),e.jsx(St,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:I,items:N,onClickEmptyListButton:M,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:X,text:"Edit"},{icon:e.jsx(pt,{}),onClick:Z,text:"Delete"}]}),e.jsx(Ce,{feeRequired:p,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:F,disabled:!Y||k,onClick:V}),e.jsx(W,{modalPosition:it.ON_PARENT,InnerComponent:we,onConfirm:_,InnerComponentProps:{settingToEdit:B}})]})}he.coreContractChain;function Be(){at.pageview("/channel/settings");const[t,m]=ge.useState(null),f=()=>m(null);return ge.useEffect(()=>{t&&f()},[t]),e.jsx(ie,{children:e.jsx(Re,{})})}let ie,ne;ie=g(ot)`
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
    100% - ${O.MINI_MODULES.DESKTOP.RIGHT} - ${O.MINI_MODULES.DESKTOP.LEFT} -
      ${S.ADJUSTMENTS.PADDING.BIG} - ${S.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${S.ADJUSTMENTS.PADDING.BIG};

  @media ${A.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${A.mobileL} {
    margin: ${S.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${O.MINI_MODULES.MOBILE.RIGHT} - ${O.MINI_MODULES.MOBILE.LEFT} -
        ${S.ADJUSTMENTS.PADDING.DEFAULT} - ${S.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${O.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,me=()=>e.jsx(ne,{children:e.jsx(Be,{})}),ne=g(st)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{At as __tla,me as default};
