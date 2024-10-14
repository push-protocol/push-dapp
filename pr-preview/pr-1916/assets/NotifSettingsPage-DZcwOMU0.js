import{eh as Be,e6 as m,eS as R,gN as Oe,fl as oe,d_ as p,e8 as ze,fp as Ge,e1 as e,fi as Fe,gO as _,eT as Je,fI as Ve,fJ as He,eV as le,fD as de,dY as pe,fG as ce,en as ue,fv as qe,eQ as b,fw as Ke,e$ as ee,fM as xe,fN as W,el as ge,f2 as te,f1 as We,fF as Ze,gP as Qe,fr as Ye,dZ as Xe,fs as et,e0 as tt,gQ as rt,eR as F,eU as at,ej as me,ea as it,e7 as nt,__tla as st}from"./index-CusvOvpa.js";import{__tla as ot}from"./Tag-B2EgRazx.js";import{I as lt,__tla as dt}from"./index.esm-B_gHgmIo.js";import{M as pt,S as ct,F as ut,C as xt,a as gt,__tla as mt}from"./ChannelInfoList-FYi9Jxs3.js";import{I as ht,__tla as ft}from"./SendNotifications-BRzh5p9a.js";import{C as bt,__tla as St}from"./Checkbox-BmsNGWYp.js";import{A as yt,__tla as wt}from"./EmptyNotificationSettings-BWdc6rIT.js";import{a as Nt,m as Et,b as jt,__tla as Ct}from"./PushTokenContractHelper--fu1nSWh.js";import{__tla as _t}from"./TransitionGroupContext-DKLjz2CR.js";import{__tla as Tt}from"./index-DFd50MJd.js";import{__tla as vt}from"./useIsFocusVisible-DxP2zUWG.js";import{__tla as At}from"./useEventCallback-UclKjQWc.js";import{__tla as Mt}from"./index.esm-j0zUNvCt.js";let he,Lt=Promise.all([(()=>{try{return st}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Mt}catch{}})()]).then(async()=>{function fe(t){return Be({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const A=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:h,upperLimit:y,type:w,settingName:a,defaultValue:l,sliderStep:N})=>{t(void 0);let c=!1;return A(a)&&(t(o=>({...o,settingName:"Setting Name is required"})),c=!0),(w===2||w===3)&&(A(h)&&(t(o=>({...o,lowerLimit:"Minimum range is required"})),c=!0),A(y)&&(t(o=>({...o,upperLimit:"Maximum range is required"})),c=!0),(typeof l=="string"?A(l):A(l.lower)||A(l.upper))&&(typeof l=="string"?t(o=>({...o,default:"Default value is required"})):(A(l.lower)&&t(o=>({...o,defaultStart:"Default start value is required"})),A(l.upper)&&t(o=>({...o,defaultEnd:"Default end value is required"}))),c=!0),A(N)&&(t(o=>({...o,sliderStep:"Slider step is required"})),c=!0),!A(h)&&!A(y)&&!A(N)&&(Number(h)<0&&(t(o=>({...o,lowerLimit:"Minimum range should be greater than 0"})),c=!0),Number(y)<0&&(t(o=>({...o,upperLimit:"Maximum range should be greater than 0"})),c=!0),Number(h)>Number(y)&&(t(o=>({...o,lowerLimit:"Minimum range should be less than maximum range"})),c=!0),typeof l=="string"?(Number(l)<Number(h)||Number(l)>Number(y))&&(t(o=>({...o,default:"Default value not in range"})),c=!0):((Number(l.lower)<Number(h)||Number(l.lower)>Number(y))&&(t(o=>({...o,defaultStart:"Default value not in range"})),c=!0),(Number(l.upper)<Number(h)||Number(l.upper)>Number(y)||Number(l.lower)>Number(l.upper))&&(t(o=>({...o,defaultEnd:"Default value not in range"})),c=!0)),Number(N)<=0&&(t(o=>({...o,sliderStep:"Slider step should be greater than 0"})),c=!0),Number(N)>Number(y)-Number(h)&&(t(o=>({...o,sliderStep:"Slider step should be less than range"})),c=!0))),!c},re=({checked:t,onChange:h,label:y,description:w})=>e.jsx(_,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(_,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(_,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:y}),e.jsx(ae,{children:w})]}),e.jsx(ht,{checked:t,onChange:h})]})}),Se=({onConfirm:t,onClose:h,toastObject:y,InnerComponentProps:w})=>{const a=(w==null?void 0:w.settingToEdit)||void 0,[l,N]=p.useState(!1),[c,o]=p.useState(a?a.description:""),[T,P]=p.useState(a?a.type===1&&a.default||a.type===2&&a.enabled||a.type===3&&a.enabled:!0),[g,U]=p.useState(!!(a&&(a.type===2||a.type===3))),[x,I]=p.useState(a&&(a.type===2||a.type===3)?a.lowerLimit.toString():""),[S,E]=p.useState(a&&(a.type===2||a.type===3)?a.upperLimit.toString():""),[u,$]=p.useState(a&&(a.type===2||a.type===3)&&a.ticker?a.ticker.toString():"1"),[C,Q]=p.useState(!!(a&&a.type===3)),[L,V]=p.useState(a&&a.type===2?a.default.toString():""),[O,z]=p.useState(a&&a.type===2?a.default:0),[M,B]=p.useState(a&&a.type===3?a.default.lower.toString():""),[D,H]=p.useState(a&&a.type===3?a.default.upper.toString():""),[Y,q]=p.useState(a&&a.type===3?a.default.lower:0),[X,K]=p.useState(a&&a.type===3?a.default.upper:0),[n,s]=p.useState(),i=ze(),r=()=>!l&&h(),v=p.useRef(null);Ge(v,()=>r());const Re=d=>{if(d.preventDefault(),N(!0),be({setErrorInfo:s,defaultValue:C?{lower:M,upper:D}:L,settingName:c,lowerLimit:x,type:g?C?3:2:1,upperLimit:S,sliderStep:u})){const f=a?a.index:Math.floor(Math.random()*1e6),Pe=g?C?{type:3,default:{lower:Number(M),upper:Number(D)},enabled:T,description:c,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:2,default:Number(L),enabled:T,description:c,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:1,default:T,description:c,index:f};t(Pe),h()}N(!1)},G=d=>d!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(d),ke=p.useMemo(()=>x!==""&&S!==""&&(C?M!==""&&D!=="":L!=="")&&u!==""&&Number(x)<=Number(S)&&Number(u)>0&&Number(u)<=Number(S)-Number(x)&&(C?Number(M)>=Number(x)&&Number(D)<=Number(S)&&Number(D)>Number(M):Number(L)>=Number(x)&&Number(L)<=Number(S)),[x,S,L,u,M,D,C]);return e.jsx(Ne,{ref:v,children:e.jsxs(Fe,{onSubmit:Re,children:[e.jsx(ye,{onClick:r}),e.jsxs(we,{children:[a?"Edit ":"Add a "," Setting"]}),e.jsxs(_,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(_,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(Je,{color:i.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-c.length})]}),e.jsx(Z,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:c,onChange:d=>{o(d.target.value.slice(0,50)),s(f=>({...f,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(k,{children:n==null?void 0:n.settingName})]}),e.jsx(re,{checked:T,onChange:()=>P(d=>!d),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(re,{checked:g,onChange:()=>U(d=>!d),label:"Range",description:"Set a range for this setting e.g. 1-10"}),g&&e.jsxs(e.Fragment,{children:[e.jsxs(_,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(_,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:x,onChange:d=>{s(f=>({...f,lowerLimit:void 0})),!G(d.target.value)&&I(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:S,onChange:d=>{s(f=>({...f,upperLimit:void 0})),!G(d.target.value)&&E(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(k,{children:n==null?void 0:n.lowerLimit}),e.jsx(k,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(_,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(bt,{checked:C,onChange:()=>Q(!C)}),e.jsxs(_,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(ae,{children:"User can select a range of values in the slider"})]})]}),!C&&e.jsxs(_,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:L,onChange:d=>{s(f=>({...f,default:void 0})),!G(d.target.value)&&(V(d.target.value),z(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(k,{children:n==null?void 0:n.default})]}),C&&e.jsxs(_,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(_,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:M,onChange:d=>{s(f=>({...f,defaultStart:void 0})),!G(d.target.value)&&(B(d.target.value),q(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:D,onChange:d=>{s(f=>({...f,defaultEnd:void 0})),!G(d.target.value)&&(H(d.target.value),K(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(k,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(_,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:i.textAreaBorderColor,focusBorder:i.textAreaFocusBorder,radius:"12px",bg:i.editChannelInputbg,color:i.editChannelPrimaryText,value:u,onChange:d=>{s(f=>({...f,sliderStep:void 0})),$(d.target.value),z(x===""?0:Number(x))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(k,{children:n==null?void 0:n.sliderStep})]}),ke&&e.jsxs(_,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!C&&e.jsxs(ie,{children:[e.jsx(j,{children:x}),e.jsx(Ve,{val:O,min:Number(x),max:Number(S),step:Number(u),defaultVal:Number(L),onChange:({x:d})=>z(d),preview:!0}),e.jsx(j,{children:S})]}),C&&e.jsxs(ie,{children:[e.jsx(j,{children:x}),e.jsx(He,{startVal:Y,endVal:X,min:Number(x),max:Number(S),step:Number(u),defaultStartVal:Number(M),defaultEndVal:Number(D),onChange:({startVal:d,endVal:f})=>{q(d),K(f)},preview:!0}),e.jsx(j,{children:S})]})]})]}),e.jsx(pt,{text:"Save Setting",isLoading:l,topMargin:"20px",padding:"14.5px 26.5px"})]})})},ye=m(Oe)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,we=m.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,Ne=m.div`
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
`,j=m.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ee=m(j)`
  color: ${t=>t.theme.default.secondaryColor};
`,ae=m.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,J=m(oe)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,Z=m(oe)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,k=m.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,ie=m.div`
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
`,je=({title:t,description:h,onCancel:y,disabled:w,onClick:a,feeRequired:l})=>{const{account:N,provider:c}=pe(),[o,T]=p.useState(0),[P,g]=p.useState(!1),[U,x]=p.useState(!1),I=ce();p.useEffect(()=>{!N||!c||async function(){const E=await Nt({address:N,provider:c,contractAddress:ue.epnscore});T(parseInt(E));const u=parseInt(E);u>=l&&u!=0?g(!0):g(!1)}()},[N,c]);const S=async()=>{if(x(!0),!c)return;const E=c.getSigner(N);I.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const u=await jt({signer:E,contractAddress:ue.epnscore,amount:l-o});console.debug("response",u),u&&(x(!1),T(l),g(!0),I.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(u){console.error(u),u.code=="ACTION_REJECTED"?I.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(W,{size:$,color:"red"})}):(I.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(W,{size:$,color:"red"})}),console.error("Error --> %o",u),console.error({err:u}))}x(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(_e,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:t}),e.jsx(ve,{children:h})]}),e.jsxs(de,{flex:"0",children:[P?e.jsx(Ce,{src:ct}):null,e.jsxs(Ae,{children:[l," PUSH"]})]})]}),e.jsx(ut,{noOfPushTokensToCheck:l,containerProps:{width:"100%"},onMintPushToken:async E=>{await Et({noOfTokens:E,provider:c,account:N})}}),U?e.jsx(e.Fragment,{children:e.jsxs(Me,{children:[e.jsx(qe,{size:42,color:b.COLORS.PRIMARY_PINK,type:Ke.PROCESSING}),e.jsx(Le,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(De,{children:[e.jsx(ee,{onClick:y,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),o>=l?e.jsx(ee,{onClick:a,disabled:w,size:"large",children:"Save Changes"}):e.jsx(ee,{onClick:S,size:"large",disabled:w,children:"Approve PUSH"})]})})]})},Ce=m.img``,_e=m(le)`
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
`,Te=m.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,ve=m.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Ae=m.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Me=m(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${R.tablet} {
    flex: 0;
  }
`,Le=m.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,De=m(de)`
  justify-content: end;
  margin-top: 24px;
  gap: 14px;
  @media ${R.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,Ie=ge.coreContractChain;function $e(){const{account:t,chainId:h,wallet:y}=pe(),{coreChannelAdmin:w,delegatees:a}=te(s=>s.admin),{channelSettings:l}=te(s=>s.channels),N=We(),c=Ie===h,o=50,[T,P]=p.useState(""),[g,U]=p.useState([]),[x,I]=p.useState(),[S,E]=p.useState(!1),[u,$]=p.useState(!0),{handleConnectWalletAndEnableProfile:C}=p.useContext(Ze),{refetch:Q}=Qe(t),{userPushSDKInstance:L}=te(s=>s.user),{isModalOpen:V,showModal:O,ModalComponent:z}=Ye(),M=()=>{const s=window.location.origin;window.location.replace(`${s}/channels`)};p.useEffect(()=>{(async()=>{if(E(!0),!!t){try{await L.channel.info(t)||M()}catch{M()}w&&w!==t&&M(),E(!1)}})()},[t,w]),p.useEffect(()=>{V===!1&&I(void 0)},[V]),p.useEffect(()=>{t&&(!a||!a.length?P(t):P(c?a[0].channel:a[0].alias_address))},[a,t]),p.useEffect(()=>{T&&l[T]&&(U(l[T]||[]),$(!1))},[T,l]);const B=ce(5e3),D=Xe(),H=()=>{D(`${tt.ChannelDashboard}/${t}`,{replace:!0})},Y=s=>{const i=g.findIndex(r=>r.index===s.index);if(i===-1)U([...g,s]);else{const r=[...g];r[i]=s,U(r)}},q=s=>{I(s),O()},X=s=>{U(i=>i.filter(r=>r.index!==s.index))},K=async()=>{try{E(!0);let s=L;if(!s.signer&&(s=await C({wallet:y}),!s)){E(!1);return}B.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const i=g.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(i),await s.channel.setting(i),N(rt({channelAddress:T,settings:g})),E(!1),B.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),Q(),setTimeout(()=>H(),2e3)}catch(s){E(!1),s.code=="ACTION_REJECTED"?B.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:i=>e.jsx(W,{size:i,color:"red"})}):(B.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:i=>e.jsx(W,{size:i,color:"red"})}),console.error("Error --> %o",s))}},n=p.useMemo(()=>{if(!g||!l[t])return!1;if(g.length!==l[t].length)return!0;let s=!0;for(let i=0;i<g.length;i++){const r=g[i],v=l[t][i];r.type===1?s=s&&r.type===v.type&&r.description===v.description&&r.default===v.default:r.type===2&&(s=s&&r.type===v.type&&r.description===v.description&&r.default===v.default&&r.enabled===v.enabled&&r.lowerLimit===v.lowerLimit&&r.upperLimit===v.upperLimit&&r.ticker===v.ticker)}return s===!1},[g,l[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(xt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(yt,{onClick:O})}),e.jsx(gt,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:u,items:g,onClickEmptyListButton:O,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:q,text:"Edit"},{icon:e.jsx(lt,{}),onClick:X,text:"Delete"}]}),e.jsx(je,{feeRequired:o,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:H,disabled:!n||S,onClick:K}),e.jsx(z,{modalPosition:et.ON_PARENT,InnerComponent:Se,onConfirm:Y,InnerComponentProps:{settingToEdit:x}})]})}ge.coreContractChain;function Ue(){at.pageview("/channel/settings");const[t,h]=me.useState(null),y=()=>h(null);return me.useEffect(()=>{t&&y()},[t]),e.jsx(ne,{children:e.jsx($e,{})})}let ne,se;ne=m(it)`
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
`,he=()=>e.jsx(se,{children:e.jsx(Ue,{})}),se=m(nt)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Lt as __tla,he as default};
