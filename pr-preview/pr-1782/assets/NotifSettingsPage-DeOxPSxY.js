import{be as Oe,b6 as g,b1 as e,bO as U,dl as Ge,ch as oe,a_ as p,b9 as Fe,cl as Je,ce as Ve,dm as v,bP as He,dn as qe,dp as Ke,bR as le,d1 as de,aY as pe,c$ as ce,bk as ue,cr as We,bM as b,cs as Ze,bY as ee,dq as xe,d2 as W,bi as he,b$ as te,b_ as Ye,dg as Xe,a$ as Qe,cn as et,aZ as tt,co as rt,b0 as it,dr as at,bN as F,bQ as nt,bg as ge,bb as st,b7 as ot,__tla as lt}from"./index-C8wFeCCA.js";import{__tla as dt}from"./Tag-B6cQJ72y.js";import{I as pt,__tla as ct}from"./index.esm-Bx3RJIsP.js";import{M as ut,S as xt,F as ht,C as gt,a as mt,__tla as ft}from"./ChannelInfoList-Dud_y8pE.js";import{I as bt,__tla as St}from"./SendNotifications-d0go2vCw.js";import{A as yt,__tla as wt}from"./EmptyNotificationSettings-Bso9a4pg.js";import{g as Nt,m as Et,a as jt,__tla as Ct}from"./PushTokenContractHelper-e-v4_mBw.js";import{__tla as vt}from"./TransitionGroupContext-BESobrmt.js";import{__tla as Tt}from"./index-CJ3oRkWV.js";import{__tla as At}from"./index.esm-cjt5XGlo.js";let me,Mt=Promise.all([(()=>{try{return lt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return At}catch{}})()]).then(async()=>{function fe(t){return Oe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const M=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:h,upperLimit:y,type:w,settingName:i,defaultValue:l,sliderStep:N})=>{t(void 0);let c=!1;return M(i)&&(t(o=>({...o,settingName:"Setting Name is required"})),c=!0),(w===2||w===3)&&(M(h)&&(t(o=>({...o,lowerLimit:"Minimum range is required"})),c=!0),M(y)&&(t(o=>({...o,upperLimit:"Maximum range is required"})),c=!0),(typeof l=="string"?M(l):M(l.lower)||M(l.upper))&&(typeof l=="string"?t(o=>({...o,default:"Default value is required"})):(M(l.lower)&&t(o=>({...o,defaultStart:"Default start value is required"})),M(l.upper)&&t(o=>({...o,defaultEnd:"Default end value is required"}))),c=!0),M(N)&&(t(o=>({...o,sliderStep:"Slider step is required"})),c=!0),!M(h)&&!M(y)&&!M(N)&&(Number(h)<0&&(t(o=>({...o,lowerLimit:"Minimum range should be greater than 0"})),c=!0),Number(y)<0&&(t(o=>({...o,upperLimit:"Maximum range should be greater than 0"})),c=!0),Number(h)>Number(y)&&(t(o=>({...o,lowerLimit:"Minimum range should be less than maximum range"})),c=!0),typeof l=="string"?(Number(l)<Number(h)||Number(l)>Number(y))&&(t(o=>({...o,default:"Default value not in range"})),c=!0):((Number(l.lower)<Number(h)||Number(l.lower)>Number(y))&&(t(o=>({...o,defaultStart:"Default value not in range"})),c=!0),(Number(l.upper)<Number(h)||Number(l.upper)>Number(y)||Number(l.lower)>Number(l.upper))&&(t(o=>({...o,defaultEnd:"Default value not in range"})),c=!0)),Number(N)<=0&&(t(o=>({...o,sliderStep:"Slider step should be greater than 0"})),c=!0),Number(N)>Number(y)-Number(h)&&(t(o=>({...o,sliderStep:"Slider step should be less than range"})),c=!0))),!c},Se=({checked:t,onChange:h})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:h}),ye=g.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,re=({checked:t,onChange:h,label:y,description:w})=>e.jsx(v,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(v,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(v,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:y}),e.jsx(ie,{children:w})]}),e.jsx(bt,{checked:t,onChange:h})]})}),we=({onConfirm:t,onClose:h,toastObject:y,InnerComponentProps:w})=>{const i=(w==null?void 0:w.settingToEdit)||void 0,[l,N]=p.useState(!1),[c,o]=p.useState(i?i.description:""),[T,B]=p.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[m,k]=p.useState(!!(i&&(i.type===2||i.type===3))),[x,_]=p.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[S,E]=p.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[u,$]=p.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[C,Y]=p.useState(!!(i&&i.type===3)),[D,V]=p.useState(i&&i.type===2?i.default.toString():""),[z,O]=p.useState(i&&i.type===2?i.default:0),[L,P]=p.useState(i&&i.type===3?i.default.lower.toString():""),[I,H]=p.useState(i&&i.type===3?i.default.upper.toString():""),[X,q]=p.useState(i&&i.type===3?i.default.lower:0),[Q,K]=p.useState(i&&i.type===3?i.default.upper:0),[n,s]=p.useState(),a=Fe(),r=()=>!l&&h(),A=p.useRef(null);Je(A,()=>r());const Be=d=>{if(d.preventDefault(),N(!0),be({setErrorInfo:s,defaultValue:C?{lower:L,upper:I}:D,settingName:c,lowerLimit:x,type:m?C?3:2:1,upperLimit:S,sliderStep:u})){const f=i?i.index:Math.floor(Math.random()*1e6),ze=m?C?{type:3,default:{lower:Number(L),upper:Number(I)},enabled:T,description:c,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:2,default:Number(D),enabled:T,description:c,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:1,default:T,description:c,index:f};t(ze),h()}N(!1)},G=d=>d!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(d),Pe=p.useMemo(()=>x!==""&&S!==""&&(C?L!==""&&I!=="":D!=="")&&u!==""&&Number(x)<=Number(S)&&Number(u)>0&&Number(u)<=Number(S)-Number(x)&&(C?Number(L)>=Number(x)&&Number(I)<=Number(S)&&Number(I)>Number(L):Number(D)>=Number(x)&&Number(D)<=Number(S)),[x,S,D,u,L,I,C]);return e.jsx(je,{ref:A,children:e.jsxs(Ve,{onSubmit:Be,children:[e.jsx(Ne,{onClick:r}),e.jsxs(Ee,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(v,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(v,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(He,{color:a.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-c.length})]}),e.jsx(Z,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:c,onChange:d=>{o(d.target.value.slice(0,50)),s(f=>({...f,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(R,{children:n==null?void 0:n.settingName})]}),e.jsx(re,{checked:T,onChange:()=>B(d=>!d),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(re,{checked:m,onChange:()=>k(d=>!d),label:"Range",description:"Set a range for this setting e.g. 1-10"}),m&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(v,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:x,onChange:d=>{s(f=>({...f,lowerLimit:void 0})),!G(d.target.value)&&_(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:S,onChange:d=>{s(f=>({...f,upperLimit:void 0})),!G(d.target.value)&&E(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(R,{children:n==null?void 0:n.lowerLimit}),e.jsx(R,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(v,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:C,onChange:()=>Y(!C)}),e.jsxs(v,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(ie,{children:"User can select a range of values in the slider"})]})]}),!C&&e.jsxs(v,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:D,onChange:d=>{s(f=>({...f,default:void 0})),!G(d.target.value)&&(V(d.target.value),O(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(R,{children:n==null?void 0:n.default})]}),C&&e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(v,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:L,onChange:d=>{s(f=>({...f,defaultStart:void 0})),!G(d.target.value)&&(P(d.target.value),q(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:I,onChange:d=>{s(f=>({...f,defaultEnd:void 0})),!G(d.target.value)&&(H(d.target.value),K(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(R,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(v,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:u,onChange:d=>{s(f=>({...f,sliderStep:void 0})),$(d.target.value),O(x===""?0:Number(x))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(R,{children:n==null?void 0:n.sliderStep})]}),Pe&&e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ce,{children:"Preview"}),!C&&e.jsxs(ae,{children:[e.jsx(j,{children:x}),e.jsx(qe,{val:z,min:Number(x),max:Number(S),step:Number(u),defaultVal:Number(D),onChange:({x:d})=>O(d),preview:!0}),e.jsx(j,{children:S})]}),C&&e.jsxs(ae,{children:[e.jsx(j,{children:x}),e.jsx(Ke,{startVal:X,endVal:Q,min:Number(x),max:Number(S),step:Number(u),defaultStartVal:Number(L),defaultEndVal:Number(I),onChange:({startVal:d,endVal:f})=>{q(d),K(f)},preview:!0}),e.jsx(j,{children:S})]})]})]}),e.jsx(ut,{text:"Save Setting",isLoading:l,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=g(Ge)`
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
  @media (${U.laptop}) {
    width: 50vw;
  }
  @media (${U.mobileL}) {
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
`,R=g.span`
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
`,ve=({title:t,description:h,onCancel:y,disabled:w,onClick:i,feeRequired:l})=>{const{account:N,provider:c}=pe(),[o,T]=p.useState(0),[B,m]=p.useState(!1),[k,x]=p.useState(!1),_=ce();p.useEffect(()=>{!N||!c||async function(){const E=await Nt({address:N,provider:c,contractAddress:ue.epnscore});T(parseInt(E));const u=parseInt(E);u>=l&&u!=0?m(!0):m(!1)}()},[N,c]);const S=async()=>{if(x(!0),!c)return;const E=c.getSigner(N);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const u=await jt({signer:E,contractAddress:ue.epnscore,amount:l-o});console.debug("response",u),u&&(x(!1),T(l),m(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(u){console.error(u),u.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(W,{size:$,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(W,{size:$,color:"red"})}),console.error("Error --> %o",u),console.error({err:u}))}x(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(Me,{children:t}),e.jsx(Le,{children:h})]}),e.jsxs(de,{flex:"0",children:[B?e.jsx(Te,{src:xt}):null,e.jsxs(De,{children:[l," PUSH"]})]})]}),e.jsx(ht,{noOfPushTokensToCheck:l,containerProps:{width:"100%"},onMintPushToken:async E=>{await Et({noOfTokens:E,provider:c,account:N})}}),k?e.jsx(e.Fragment,{children:e.jsxs(Ie,{children:[e.jsx(We,{size:42,color:b.COLORS.PRIMARY_PINK,type:Ze.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ee,{onClick:y,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),o>=l?e.jsx(ee,{onClick:i,disabled:w,size:"large",children:"Save Changes"}):e.jsx(ee,{onClick:S,size:"large",disabled:w,children:"Approve PUSH"})]})})]})},Te=g.img``,Ae=g(le)`
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

  @media ${U.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${U.mobileL} {
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
`,De=g.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ie=g(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${U.tablet} {
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
  @media ${U.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,ke=he.coreContractChain;function Ue(){const{account:t,chainId:h,wallet:y}=pe(),{coreChannelAdmin:w,delegatees:i}=te(s=>s.admin),{channelSettings:l}=te(s=>s.channels),N=Ye(),c=ke===h,o=50,[T,B]=p.useState(""),[m,k]=p.useState([]),[x,_]=p.useState(),[S,E]=p.useState(!1),[u,$]=p.useState(!0),{handleConnectWalletAndEnableProfile:C}=p.useContext(Xe),{refetch:Y}=Qe(t),{userPushSDKInstance:D}=te(s=>s.user),{isModalOpen:V,showModal:z,ModalComponent:O}=et(),L=()=>{const s=window.location.origin;window.location.replace(`${s}/channels`)};p.useEffect(()=>{(async()=>{if(E(!0),!!t){try{await D.channel.info(t)||L()}catch{L()}w&&w!==t&&L(),E(!1)}})()},[t,w]),p.useEffect(()=>{V===!1&&_(void 0)},[V]),p.useEffect(()=>{t&&(!i||!i.length?B(t):B(c?i[0].channel:i[0].alias_address))},[i,t]),p.useEffect(()=>{T&&l[T]&&(k(l[T]||[]),$(!1))},[T,l]);const P=ce(5e3),I=tt(),H=()=>{I(`${it.ChannelDashboard}/${t}`,{replace:!0})},X=s=>{const a=m.findIndex(r=>r.index===s.index);if(a===-1)k([...m,s]);else{const r=[...m];r[a]=s,k(r)}},q=s=>{_(s),z()},Q=s=>{k(a=>a.filter(r=>r.index!==s.index))},K=async()=>{try{E(!0);let s=D;if(!s.signer&&(s=await C({wallet:y}),!s)){E(!1);return}P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const a=m.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(a),await s.channel.setting(a),N(at({channelAddress:T,settings:m})),E(!1),P.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),Y(),setTimeout(()=>H(),2e3)}catch(s){E(!1),s.code=="ACTION_REJECTED"?P.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:a=>e.jsx(W,{size:a,color:"red"})}):(P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:a=>e.jsx(W,{size:a,color:"red"})}),console.error("Error --> %o",s))}},n=p.useMemo(()=>{if(!m||!l[t])return!1;if(m.length!==l[t].length)return!0;let s=!0;for(let a=0;a<m.length;a++){const r=m[a],A=l[t][a];r.type===1?s=s&&r.type===A.type&&r.description===A.description&&r.default===A.default:r.type===2&&(s=s&&r.type===A.type&&r.description===A.description&&r.default===A.default&&r.enabled===A.enabled&&r.lowerLimit===A.lowerLimit&&r.upperLimit===A.upperLimit&&r.ticker===A.ticker)}return s===!1},[m,l[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(gt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(yt,{onClick:z})}),e.jsx(mt,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:u,items:m,onClickEmptyListButton:z,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:q,text:"Edit"},{icon:e.jsx(pt,{}),onClick:Q,text:"Delete"}]}),e.jsx(ve,{feeRequired:o,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:H,disabled:!n||S,onClick:K}),e.jsx(O,{modalPosition:rt.ON_PARENT,InnerComponent:we,onConfirm:X,InnerComponentProps:{settingToEdit:x}})]})}he.coreContractChain;function Re(){nt.pageview("/channel/settings");const[t,h]=ge.useState(null),y=()=>h(null);return ge.useEffect(()=>{t&&y()},[t]),e.jsx(ne,{children:e.jsx(Ue,{})})}let ne,se;ne=g(st)`
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

  @media ${U.laptop} {
    margin: ${b.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${b.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${U.mobileL} {
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
`,me=()=>e.jsx(se,{children:e.jsx(Re,{})}),se=g(ot)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Mt as __tla,me as default};
