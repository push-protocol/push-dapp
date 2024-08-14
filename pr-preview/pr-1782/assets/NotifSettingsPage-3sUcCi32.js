import{be as Oe,b6 as g,b1 as e,bO as R,du as Ge,ch as oe,a_ as c,b9 as Fe,cl as Je,ce as Ve,dv as v,bP as He,cE as qe,cF as Ke,bR as le,cz as de,aY as ce,cC as pe,bk as ue,cr as We,bM as b,cs as Ze,bY as ee,cI as xe,cJ as W,bi as he,b$ as te,b_ as Ye,cB as Xe,dw as Qe,cn as et,aZ as tt,co as rt,b0 as it,dx as at,bN as F,bQ as nt,bg as ge,bb as st,b7 as ot,__tla as lt}from"./index-CxrF11iD.js";import{__tla as dt}from"./Tag-D0Q1CLHv.js";import{I as ct,__tla as pt}from"./index.esm-BZRrHAsL.js";import{M as ut,S as xt,F as ht,C as gt,a as mt,__tla as ft}from"./ChannelInfoList-B3cdYn14.js";import{I as bt,__tla as St}from"./SendNotifications-HZq8zWgd.js";import{A as yt,__tla as wt}from"./EmptyNotificationSettings-C3wQwWGS.js";import{g as Nt,m as Et,a as jt,__tla as Ct}from"./PushTokenContractHelper-Bu_5bI5r.js";import{__tla as vt}from"./TransitionGroupContext-50sJqvEW.js";import{__tla as Tt}from"./index-BpjI2frv.js";import{__tla as At}from"./index.esm-BXDILKhD.js";let me,Mt=Promise.all([(()=>{try{return lt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return At}catch{}})()]).then(async()=>{function fe(t){return Oe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const M=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:h,upperLimit:y,type:w,settingName:i,defaultValue:l,sliderStep:N})=>{t(void 0);let p=!1;return M(i)&&(t(o=>({...o,settingName:"Setting Name is required"})),p=!0),(w===2||w===3)&&(M(h)&&(t(o=>({...o,lowerLimit:"Minimum range is required"})),p=!0),M(y)&&(t(o=>({...o,upperLimit:"Maximum range is required"})),p=!0),(typeof l=="string"?M(l):M(l.lower)||M(l.upper))&&(typeof l=="string"?t(o=>({...o,default:"Default value is required"})):(M(l.lower)&&t(o=>({...o,defaultStart:"Default start value is required"})),M(l.upper)&&t(o=>({...o,defaultEnd:"Default end value is required"}))),p=!0),M(N)&&(t(o=>({...o,sliderStep:"Slider step is required"})),p=!0),!M(h)&&!M(y)&&!M(N)&&(Number(h)<0&&(t(o=>({...o,lowerLimit:"Minimum range should be greater than 0"})),p=!0),Number(y)<0&&(t(o=>({...o,upperLimit:"Maximum range should be greater than 0"})),p=!0),Number(h)>Number(y)&&(t(o=>({...o,lowerLimit:"Minimum range should be less than maximum range"})),p=!0),typeof l=="string"?(Number(l)<Number(h)||Number(l)>Number(y))&&(t(o=>({...o,default:"Default value not in range"})),p=!0):((Number(l.lower)<Number(h)||Number(l.lower)>Number(y))&&(t(o=>({...o,defaultStart:"Default value not in range"})),p=!0),(Number(l.upper)<Number(h)||Number(l.upper)>Number(y)||Number(l.lower)>Number(l.upper))&&(t(o=>({...o,defaultEnd:"Default value not in range"})),p=!0)),Number(N)<=0&&(t(o=>({...o,sliderStep:"Slider step should be greater than 0"})),p=!0),Number(N)>Number(y)-Number(h)&&(t(o=>({...o,sliderStep:"Slider step should be less than range"})),p=!0))),!p},Se=({checked:t,onChange:h})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:h}),ye=g.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,re=({checked:t,onChange:h,label:y,description:w})=>e.jsx(v,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(v,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(v,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:y}),e.jsx(ie,{children:w})]}),e.jsx(bt,{checked:t,onChange:h})]})}),we=({onConfirm:t,onClose:h,toastObject:y,InnerComponentProps:w})=>{const i=(w==null?void 0:w.settingToEdit)||void 0,[l,N]=c.useState(!1),[p,o]=c.useState(i?i.description:""),[T,P]=c.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[m,k]=c.useState(!!(i&&(i.type===2||i.type===3))),[x,_]=c.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[S,E]=c.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[u,$]=c.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[C,Y]=c.useState(!!(i&&i.type===3)),[I,V]=c.useState(i&&i.type===2?i.default.toString():""),[z,O]=c.useState(i&&i.type===2?i.default:0),[L,B]=c.useState(i&&i.type===3?i.default.lower.toString():""),[D,H]=c.useState(i&&i.type===3?i.default.upper.toString():""),[X,q]=c.useState(i&&i.type===3?i.default.lower:0),[Q,K]=c.useState(i&&i.type===3?i.default.upper:0),[n,s]=c.useState(),a=Fe(),r=()=>!l&&h(),A=c.useRef(null);Je(A,()=>r());const Pe=d=>{if(d.preventDefault(),N(!0),be({setErrorInfo:s,defaultValue:C?{lower:L,upper:D}:I,settingName:p,lowerLimit:x,type:m?C?3:2:1,upperLimit:S,sliderStep:u})){const f=i?i.index:Math.floor(Math.random()*1e6),ze=m?C?{type:3,default:{lower:Number(L),upper:Number(D)},enabled:T,description:p,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:2,default:Number(I),enabled:T,description:p,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:1,default:T,description:p,index:f};t(ze),h()}N(!1)},G=d=>d!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(d),Be=c.useMemo(()=>x!==""&&S!==""&&(C?L!==""&&D!=="":I!=="")&&u!==""&&Number(x)<=Number(S)&&Number(u)>0&&Number(u)<=Number(S)-Number(x)&&(C?Number(L)>=Number(x)&&Number(D)<=Number(S)&&Number(D)>Number(L):Number(I)>=Number(x)&&Number(I)<=Number(S)),[x,S,I,u,L,D,C]);return e.jsx(je,{ref:A,children:e.jsxs(Ve,{onSubmit:Pe,children:[e.jsx(Ne,{onClick:r}),e.jsxs(Ee,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(v,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(v,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(He,{color:a.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-p.length})]}),e.jsx(Z,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:p,onChange:d=>{o(d.target.value.slice(0,50)),s(f=>({...f,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(U,{children:n==null?void 0:n.settingName})]}),e.jsx(re,{checked:T,onChange:()=>P(d=>!d),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(re,{checked:m,onChange:()=>k(d=>!d),label:"Range",description:"Set a range for this setting e.g. 1-10"}),m&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(v,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:x,onChange:d=>{s(f=>({...f,lowerLimit:void 0})),!G(d.target.value)&&_(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:S,onChange:d=>{s(f=>({...f,upperLimit:void 0})),!G(d.target.value)&&E(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(U,{children:n==null?void 0:n.lowerLimit}),e.jsx(U,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(v,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:C,onChange:()=>Y(!C)}),e.jsxs(v,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(ie,{children:"User can select a range of values in the slider"})]})]}),!C&&e.jsxs(v,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:I,onChange:d=>{s(f=>({...f,default:void 0})),!G(d.target.value)&&(V(d.target.value),O(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(U,{children:n==null?void 0:n.default})]}),C&&e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(v,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:L,onChange:d=>{s(f=>({...f,defaultStart:void 0})),!G(d.target.value)&&(B(d.target.value),q(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:D,onChange:d=>{s(f=>({...f,defaultEnd:void 0})),!G(d.target.value)&&(H(d.target.value),K(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(U,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(v,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:u,onChange:d=>{s(f=>({...f,sliderStep:void 0})),$(d.target.value),O(x===""?0:Number(x))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(U,{children:n==null?void 0:n.sliderStep})]}),Be&&e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ce,{children:"Preview"}),!C&&e.jsxs(ae,{children:[e.jsx(j,{children:x}),e.jsx(qe,{val:z,min:Number(x),max:Number(S),step:Number(u),defaultVal:Number(I),onChange:({x:d})=>O(d),preview:!0}),e.jsx(j,{children:S})]}),C&&e.jsxs(ae,{children:[e.jsx(j,{children:x}),e.jsx(Ke,{startVal:X,endVal:Q,min:Number(x),max:Number(S),step:Number(u),defaultStartVal:Number(L),defaultEndVal:Number(D),onChange:({startVal:d,endVal:f})=>{q(d),K(f)},preview:!0}),e.jsx(j,{children:S})]})]})]}),e.jsx(ut,{text:"Save Setting",isLoading:l,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=g(Ge)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,Ee=g.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,je=g.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${R.laptop}) {
    width: 50vw;
  }
  @media (${R.mobileL}) {
    width: 95vw;
  }
`,j=g.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ce=g(j)`
  color: ${t=>t.theme.default.secondaryColor};
`,ie=g.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,J=g(oe)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,Z=g(oe)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,U=g.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,ae=g.div`
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
`,ve=({title:t,description:h,onCancel:y,disabled:w,onClick:i,feeRequired:l})=>{const{account:N,provider:p}=ce(),[o,T]=c.useState(0),[P,m]=c.useState(!1),[k,x]=c.useState(!1),_=pe();c.useEffect(()=>{!N||!p||async function(){const E=await Nt({address:N,provider:p,contractAddress:ue.epnscore});T(parseInt(E));const u=parseInt(E);u>=l&&u!=0?m(!0):m(!1)}()},[N,p]);const S=async()=>{if(x(!0),!p)return;const E=p.getSigner(N);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const u=await jt({signer:E,contractAddress:ue.epnscore,amount:l-o});console.debug("response",u),u&&(x(!1),T(l),m(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(u){console.error(u),u.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(W,{size:$,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(W,{size:$,color:"red"})}),console.error("Error --> %o",u),console.error({err:u}))}x(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(Me,{children:t}),e.jsx(Le,{children:h})]}),e.jsxs(de,{flex:"0",children:[P?e.jsx(Te,{src:xt}):null,e.jsxs(Ie,{children:[l," PUSH"]})]})]}),e.jsx(ht,{noOfPushTokensToCheck:l,containerProps:{width:"100%"},onMintPushToken:async E=>{await Et({noOfTokens:E,provider:p,account:N})}}),k?e.jsx(e.Fragment,{children:e.jsxs(De,{children:[e.jsx(We,{size:42,color:b.COLORS.PRIMARY_PINK,type:Ze.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ee,{onClick:y,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),o>=l?e.jsx(ee,{onClick:i,disabled:w,size:"large",children:"Save Changes"}):e.jsx(ee,{onClick:S,size:"large",disabled:w,children:"Approve PUSH"})]})})]})},Te=g.img``,Ae=g(le)`
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

  @media ${R.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${R.mobileL} {
    margin: 0px;
  }
`,Me=g.p`
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

  @media ${R.tablet} {
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
  gap: 14px;
  @media ${R.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,ke=he.coreContractChain;function Re(){const{account:t,chainId:h,wallet:y}=ce(),{coreChannelAdmin:w,delegatees:i}=te(s=>s.admin),{channelSettings:l}=te(s=>s.channels),N=Ye(),p=ke===h,o=50,[T,P]=c.useState(""),[m,k]=c.useState([]),[x,_]=c.useState(),[S,E]=c.useState(!1),[u,$]=c.useState(!0),{handleConnectWalletAndEnableProfile:C}=c.useContext(Xe),{refetch:Y}=Qe(t),{userPushSDKInstance:I}=te(s=>s.user),{isModalOpen:V,showModal:z,ModalComponent:O}=et(),L=()=>{const s=window.location.origin;window.location.replace(`${s}/channels`)};c.useEffect(()=>{(async()=>{if(E(!0),!!t){try{await I.channel.info(t)||L()}catch{L()}w&&w!==t&&L(),E(!1)}})()},[t,w]),c.useEffect(()=>{V===!1&&_(void 0)},[V]),c.useEffect(()=>{t&&(!i||!i.length?P(t):P(p?i[0].channel:i[0].alias_address))},[i,t]),c.useEffect(()=>{T&&l[T]&&(k(l[T]||[]),$(!1))},[T,l]);const B=pe(5e3),D=tt(),H=()=>{D(`${it.ChannelDashboard}/${t}`,{replace:!0})},X=s=>{const a=m.findIndex(r=>r.index===s.index);if(a===-1)k([...m,s]);else{const r=[...m];r[a]=s,k(r)}},q=s=>{_(s),z()},Q=s=>{k(a=>a.filter(r=>r.index!==s.index))},K=async()=>{try{E(!0);let s=I;if(!s.signer&&(s=await C({wallet:y}),!s)){E(!1);return}B.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const a=m.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(a),await s.channel.setting(a),N(at({channelAddress:T,settings:m})),E(!1),B.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),Y(),setTimeout(()=>H(),2e3)}catch(s){E(!1),s.code=="ACTION_REJECTED"?B.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:a=>e.jsx(W,{size:a,color:"red"})}):(B.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:a=>e.jsx(W,{size:a,color:"red"})}),console.error("Error --> %o",s))}},n=c.useMemo(()=>{if(!m||!l[t])return!1;if(m.length!==l[t].length)return!0;let s=!0;for(let a=0;a<m.length;a++){const r=m[a],A=l[t][a];r.type===1?s=s&&r.type===A.type&&r.description===A.description&&r.default===A.default:r.type===2&&(s=s&&r.type===A.type&&r.description===A.description&&r.default===A.default&&r.enabled===A.enabled&&r.lowerLimit===A.lowerLimit&&r.upperLimit===A.upperLimit&&r.ticker===A.ticker)}return s===!1},[m,l[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(gt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(yt,{onClick:z})}),e.jsx(mt,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:u,items:m,onClickEmptyListButton:z,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:q,text:"Edit"},{icon:e.jsx(ct,{}),onClick:Q,text:"Delete"}]}),e.jsx(ve,{feeRequired:o,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:H,disabled:!n||S,onClick:K}),e.jsx(O,{modalPosition:rt.ON_PARENT,InnerComponent:we,onConfirm:X,InnerComponentProps:{settingToEdit:x}})]})}he.coreContractChain;function Ue(){nt.pageview("/channel/settings");const[t,h]=ge.useState(null),y=()=>h(null);return ge.useEffect(()=>{t&&y()},[t]),e.jsx(ne,{children:e.jsx(Re,{})})}let ne,se;ne=g(st)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${b.ADJUSTMENTS.RADIUS.LARGE} ${b.ADJUSTMENTS.RADIUS.LARGE}
    ${b.ADJUSTMENTS.RADIUS.LARGE} ${b.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${b.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${F.MINI_MODULES.DESKTOP.RIGHT} - ${F.MINI_MODULES.DESKTOP.LEFT} -
      ${b.ADJUSTMENTS.PADDING.BIG} - ${b.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${b.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${b.ADJUSTMENTS.PADDING.BIG};

  @media ${R.laptop} {
    margin: ${b.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${b.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${R.mobileL} {
    margin: ${b.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${b.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${F.MINI_MODULES.MOBILE.RIGHT} - ${F.MINI_MODULES.MOBILE.LEFT} -
        ${b.ADJUSTMENTS.PADDING.DEFAULT} - ${b.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${b.CONSTANTS.HEADER_HEIGHT}px - ${F.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${b.ADJUSTMENTS.RADIUS.LARGE} ${b.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,me=()=>e.jsx(se,{children:e.jsx(Ue,{})}),se=g(ot)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Mt as __tla,me as default};
