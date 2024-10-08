import{cM as Pe,cA as h,gf as R,ig as Oe,gx as oe,cs as p,cD as ze,gP as Ge,cv as e,gu as Fe,ih as v,gg as Je,h7 as Ve,h8 as He,gi as le,h2 as de,cq as pe,h5 as ce,cS as ue,gV as qe,gd as b,gW as We,gp as ee,hb as xe,hc as K,cQ as ge,gs as te,gr as Ke,h4 as Ze,ii as Xe,gR as Ye,cr as Qe,gS as et,cu as tt,ij as rt,ge as F,gh as it,cO as he,cF as at,cB as nt,__tla as st}from"./index-D9kGLRwp.js";import{__tla as ot}from"./Tag-sa_ioXWX.js";import{I as lt,__tla as dt}from"./index.esm-DCF6VBMR.js";import{M as pt,S as ct,F as ut,C as xt,a as gt,__tla as ht}from"./ChannelInfoList-DtZcCwlj.js";import{I as mt,__tla as ft}from"./SendNotifications-BrSVcPmM.js";import{C as bt,__tla as St}from"./Checkbox-DvUY9UUN.js";import{A as yt,__tla as wt}from"./EmptyNotificationSettings-BWKz-OAM.js";import{a as Nt,m as Et,b as jt,__tla as Ct}from"./PushTokenContractHelper-pYu1mc9O.js";import{__tla as vt}from"./TransitionGroupContext-DSLw4RKt.js";import{__tla as Tt}from"./index-CkX0HDmG.js";import{__tla as At}from"./index.esm-B8VZzxQn.js";let me,Mt=Promise.all([(()=>{try{return st}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return At}catch{}})()]).then(async()=>{function fe(t){return Pe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const M=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:m,upperLimit:y,type:w,settingName:i,defaultValue:l,sliderStep:N})=>{t(void 0);let c=!1;return M(i)&&(t(o=>({...o,settingName:"Setting Name is required"})),c=!0),(w===2||w===3)&&(M(m)&&(t(o=>({...o,lowerLimit:"Minimum range is required"})),c=!0),M(y)&&(t(o=>({...o,upperLimit:"Maximum range is required"})),c=!0),(typeof l=="string"?M(l):M(l.lower)||M(l.upper))&&(typeof l=="string"?t(o=>({...o,default:"Default value is required"})):(M(l.lower)&&t(o=>({...o,defaultStart:"Default start value is required"})),M(l.upper)&&t(o=>({...o,defaultEnd:"Default end value is required"}))),c=!0),M(N)&&(t(o=>({...o,sliderStep:"Slider step is required"})),c=!0),!M(m)&&!M(y)&&!M(N)&&(Number(m)<0&&(t(o=>({...o,lowerLimit:"Minimum range should be greater than 0"})),c=!0),Number(y)<0&&(t(o=>({...o,upperLimit:"Maximum range should be greater than 0"})),c=!0),Number(m)>Number(y)&&(t(o=>({...o,lowerLimit:"Minimum range should be less than maximum range"})),c=!0),typeof l=="string"?(Number(l)<Number(m)||Number(l)>Number(y))&&(t(o=>({...o,default:"Default value not in range"})),c=!0):((Number(l.lower)<Number(m)||Number(l.lower)>Number(y))&&(t(o=>({...o,defaultStart:"Default value not in range"})),c=!0),(Number(l.upper)<Number(m)||Number(l.upper)>Number(y)||Number(l.lower)>Number(l.upper))&&(t(o=>({...o,defaultEnd:"Default value not in range"})),c=!0)),Number(N)<=0&&(t(o=>({...o,sliderStep:"Slider step should be greater than 0"})),c=!0),Number(N)>Number(y)-Number(m)&&(t(o=>({...o,sliderStep:"Slider step should be less than range"})),c=!0))),!c},re=({checked:t,onChange:m,label:y,description:w})=>e.jsx(v,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(v,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(v,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:y}),e.jsx(ie,{children:w})]}),e.jsx(mt,{checked:t,onChange:m})]})}),Se=({onConfirm:t,onClose:m,toastObject:y,InnerComponentProps:w})=>{const i=(w==null?void 0:w.settingToEdit)||void 0,[l,N]=p.useState(!1),[c,o]=p.useState(i?i.description:""),[T,B]=p.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[g,U]=p.useState(!!(i&&(i.type===2||i.type===3))),[x,I]=p.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[S,E]=p.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[u,$]=p.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[C,X]=p.useState(!!(i&&i.type===3)),[_,V]=p.useState(i&&i.type===2?i.default.toString():""),[O,z]=p.useState(i&&i.type===2?i.default:0),[L,P]=p.useState(i&&i.type===3?i.default.lower.toString():""),[D,H]=p.useState(i&&i.type===3?i.default.upper.toString():""),[Y,q]=p.useState(i&&i.type===3?i.default.lower:0),[Q,W]=p.useState(i&&i.type===3?i.default.upper:0),[n,s]=p.useState(),a=ze(),r=()=>!l&&m(),A=p.useRef(null);Ge(A,()=>r());const Re=d=>{if(d.preventDefault(),N(!0),be({setErrorInfo:s,defaultValue:C?{lower:L,upper:D}:_,settingName:c,lowerLimit:x,type:g?C?3:2:1,upperLimit:S,sliderStep:u})){const f=i?i.index:Math.floor(Math.random()*1e6),Be=g?C?{type:3,default:{lower:Number(L),upper:Number(D)},enabled:T,description:c,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:2,default:Number(_),enabled:T,description:c,index:f,lowerLimit:Number(x),upperLimit:Number(S),ticker:Number(u)}:{type:1,default:T,description:c,index:f};t(Be),m()}N(!1)},G=d=>d!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(d),ke=p.useMemo(()=>x!==""&&S!==""&&(C?L!==""&&D!=="":_!=="")&&u!==""&&Number(x)<=Number(S)&&Number(u)>0&&Number(u)<=Number(S)-Number(x)&&(C?Number(L)>=Number(x)&&Number(D)<=Number(S)&&Number(D)>Number(L):Number(_)>=Number(x)&&Number(_)<=Number(S)),[x,S,_,u,L,D,C]);return e.jsx(Ne,{ref:A,children:e.jsxs(Fe,{onSubmit:Re,children:[e.jsx(ye,{onClick:r}),e.jsxs(we,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(v,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(v,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(Je,{color:a.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-c.length})]}),e.jsx(Z,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:c,onChange:d=>{o(d.target.value.slice(0,50)),s(f=>({...f,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(k,{children:n==null?void 0:n.settingName})]}),e.jsx(re,{checked:T,onChange:()=>B(d=>!d),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(re,{checked:g,onChange:()=>U(d=>!d),label:"Range",description:"Set a range for this setting e.g. 1-10"}),g&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(v,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:x,onChange:d=>{s(f=>({...f,lowerLimit:void 0})),!G(d.target.value)&&I(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:S,onChange:d=>{s(f=>({...f,upperLimit:void 0})),!G(d.target.value)&&E(d.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(k,{children:n==null?void 0:n.lowerLimit}),e.jsx(k,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(v,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(bt,{checked:C,onChange:()=>X(!C)}),e.jsxs(v,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(ie,{children:"User can select a range of values in the slider"})]})]}),!C&&e.jsxs(v,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:_,onChange:d=>{s(f=>({...f,default:void 0})),!G(d.target.value)&&(V(d.target.value),z(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(k,{children:n==null?void 0:n.default})]}),C&&e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(v,{direction:"row",children:[e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:L,onChange:d=>{s(f=>({...f,defaultStart:void 0})),!G(d.target.value)&&(P(d.target.value),q(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(J,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:D,onChange:d=>{s(f=>({...f,defaultEnd:void 0})),!G(d.target.value)&&(H(d.target.value),W(Number(d.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(k,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(v,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(Z,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:a.textAreaBorderColor,focusBorder:a.textAreaFocusBorder,radius:"12px",bg:a.editChannelInputbg,color:a.editChannelPrimaryText,value:u,onChange:d=>{s(f=>({...f,sliderStep:void 0})),$(d.target.value),z(x===""?0:Number(x))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(k,{children:n==null?void 0:n.sliderStep})]}),ke&&e.jsxs(v,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!C&&e.jsxs(ae,{children:[e.jsx(j,{children:x}),e.jsx(Ve,{val:O,min:Number(x),max:Number(S),step:Number(u),defaultVal:Number(_),onChange:({x:d})=>z(d),preview:!0}),e.jsx(j,{children:S})]}),C&&e.jsxs(ae,{children:[e.jsx(j,{children:x}),e.jsx(He,{startVal:Y,endVal:Q,min:Number(x),max:Number(S),step:Number(u),defaultStartVal:Number(L),defaultEndVal:Number(D),onChange:({startVal:d,endVal:f})=>{q(d),W(f)},preview:!0}),e.jsx(j,{children:S})]})]})]}),e.jsx(pt,{text:"Save Setting",isLoading:l,topMargin:"20px",padding:"14.5px 26.5px"})]})})},ye=h(Oe)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,we=h.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,Ne=h.div`
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
`,j=h.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ee=h(j)`
  color: ${t=>t.theme.default.secondaryColor};
`,ie=h.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,J=h(oe)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,Z=h(oe)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,k=h.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,ae=h.div`
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
`,je=({title:t,description:m,onCancel:y,disabled:w,onClick:i,feeRequired:l})=>{const{account:N,provider:c}=pe(),[o,T]=p.useState(0),[B,g]=p.useState(!1),[U,x]=p.useState(!1),I=ce();p.useEffect(()=>{!N||!c||async function(){const E=await Nt({address:N,provider:c,contractAddress:ue.epnscore});T(parseInt(E));const u=parseInt(E);u>=l&&u!=0?g(!0):g(!1)}()},[N,c]);const S=async()=>{if(x(!0),!c)return;const E=c.getSigner(N);I.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const u=await jt({signer:E,contractAddress:ue.epnscore,amount:l-o});console.debug("response",u),u&&(x(!1),T(l),g(!0),I.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(u){console.error(u),u.code=="ACTION_REJECTED"?I.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(K,{size:$,color:"red"})}):(I.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(K,{size:$,color:"red"})}),console.error("Error --> %o",u),console.error({err:u}))}x(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(ve,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:t}),e.jsx(Ae,{children:m})]}),e.jsxs(de,{flex:"0",children:[B?e.jsx(Ce,{src:ct}):null,e.jsxs(Me,{children:[l," PUSH"]})]})]}),e.jsx(ut,{noOfPushTokensToCheck:l,containerProps:{width:"100%"},onMintPushToken:async E=>{await Et({noOfTokens:E,provider:c,account:N})}}),U?e.jsx(e.Fragment,{children:e.jsxs(Le,{children:[e.jsx(qe,{size:42,color:b.COLORS.PRIMARY_PINK,type:We.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(De,{children:[e.jsx(ee,{onClick:y,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),o>=l?e.jsx(ee,{onClick:i,disabled:w,size:"large",children:"Save Changes"}):e.jsx(ee,{onClick:S,size:"large",disabled:w,children:"Approve PUSH"})]})})]})},Ce=h.img``,ve=h(le)`
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
`,Te=h.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ae=h.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Me=h.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Le=h(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${R.tablet} {
    flex: 0;
  }
`,_e=h.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,De=h(de)`
  justify-content: end;
  margin-top: 24px;
  gap: 14px;
  @media ${R.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,Ie=ge.coreContractChain;function $e(){const{account:t,chainId:m,wallet:y}=pe(),{coreChannelAdmin:w,delegatees:i}=te(s=>s.admin),{channelSettings:l}=te(s=>s.channels),N=Ke(),c=Ie===m,o=50,[T,B]=p.useState(""),[g,U]=p.useState([]),[x,I]=p.useState(),[S,E]=p.useState(!1),[u,$]=p.useState(!0),{handleConnectWalletAndEnableProfile:C}=p.useContext(Ze),{refetch:X}=Xe(t),{userPushSDKInstance:_}=te(s=>s.user),{isModalOpen:V,showModal:O,ModalComponent:z}=Ye(),L=()=>{const s=window.location.origin;window.location.replace(`${s}/channels`)};p.useEffect(()=>{(async()=>{if(E(!0),!!t){try{await _.channel.info(t)||L()}catch{L()}w&&w!==t&&L(),E(!1)}})()},[t,w]),p.useEffect(()=>{V===!1&&I(void 0)},[V]),p.useEffect(()=>{t&&(!i||!i.length?B(t):B(c?i[0].channel:i[0].alias_address))},[i,t]),p.useEffect(()=>{T&&l[T]&&(U(l[T]||[]),$(!1))},[T,l]);const P=ce(5e3),D=Qe(),H=()=>{D(`${tt.ChannelDashboard}/${t}`,{replace:!0})},Y=s=>{const a=g.findIndex(r=>r.index===s.index);if(a===-1)U([...g,s]);else{const r=[...g];r[a]=s,U(r)}},q=s=>{I(s),O()},Q=s=>{U(a=>a.filter(r=>r.index!==s.index))},W=async()=>{try{E(!0);let s=_;if(!s.signer&&(s=await C({wallet:y}),!s)){E(!1);return}P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const a=g.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(a),await s.channel.setting(a),N(rt({channelAddress:T,settings:g})),E(!1),P.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),X(),setTimeout(()=>H(),2e3)}catch(s){E(!1),s.code=="ACTION_REJECTED"?P.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:a=>e.jsx(K,{size:a,color:"red"})}):(P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:a=>e.jsx(K,{size:a,color:"red"})}),console.error("Error --> %o",s))}},n=p.useMemo(()=>{if(!g||!l[t])return!1;if(g.length!==l[t].length)return!0;let s=!0;for(let a=0;a<g.length;a++){const r=g[a],A=l[t][a];r.type===1?s=s&&r.type===A.type&&r.description===A.description&&r.default===A.default:r.type===2&&(s=s&&r.type===A.type&&r.description===A.description&&r.default===A.default&&r.enabled===A.enabled&&r.lowerLimit===A.lowerLimit&&r.upperLimit===A.upperLimit&&r.ticker===A.ticker)}return s===!1},[g,l[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(xt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(yt,{onClick:O})}),e.jsx(gt,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:u,items:g,onClickEmptyListButton:O,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:q,text:"Edit"},{icon:e.jsx(lt,{}),onClick:Q,text:"Delete"}]}),e.jsx(je,{feeRequired:o,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:H,disabled:!n||S,onClick:W}),e.jsx(z,{modalPosition:et.ON_PARENT,InnerComponent:Se,onConfirm:Y,InnerComponentProps:{settingToEdit:x}})]})}ge.coreContractChain;function Ue(){it.pageview("/channel/settings");const[t,m]=he.useState(null),y=()=>m(null);return he.useEffect(()=>{t&&y()},[t]),e.jsx(ne,{children:e.jsx($e,{})})}let ne,se;ne=h(at)`
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
`,me=()=>e.jsx(se,{children:e.jsx(Ue,{})}),se=h(nt)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Mt as __tla,me as default};
