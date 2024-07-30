import{b6 as ze,a_ as h,aZ as e,bD as k,dj as Ge,bY as se,b7 as l,b1 as Fe,ce as Je,bT as Ve,dk as E,bE as He,dl as qe,dm as Ke,bG as le,c$ as de,b9 as pe,cZ as ce,cI as ue,ck as Ze,bB as f,cl as We,bO as X,dn as xe,d0 as H,bd as he,bR as ee,bQ as Ye,de as Qe,cg as Xe,bN as et,ch as tt,dp as rt,bC as z,bF as nt,ba as ge,b3 as it,a$ as at,__tla as ot}from"./index-x4yuoUxs.js";import{__tla as st}from"./Tag-mBP3xzQw.js";import{I as lt,__tla as dt}from"./index.esm-C8Mzqt7T.js";import{M as pt,g as ct,S as ut,F as xt,m as ht,a as gt,C as mt,b as ft,__tla as bt}from"./ChannelInfoList-D1A48hLI.js";import{I as St,__tla as yt}from"./SendNotifications-wVZ-OElM.js";import{A as wt,__tla as Nt}from"./EmptyNotificationSettings-Df-mWEJ1.js";import{__tla as jt}from"./TransitionGroupContext-BBf81mK4.js";import{__tla as Tt}from"./index.es-CaYPdWH4.js";import"./browser-CeceZ__e.js";import{__tla as Et}from"./index-3NDeyD0x.js";import{__tla as Ct}from"./index.esm-HWxC3P6i.js";let me,vt=Promise.all([(()=>{try{return ot}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Ct}catch{}})()]).then(async()=>{function fe(r){return ze({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(r)}const M=r=>r.trim().length==0,be=({setErrorInfo:r,lowerLimit:x,upperLimit:S,type:y,settingName:i,defaultValue:o,sliderStep:w})=>{r(void 0);let d=!1;return M(i)&&(r(a=>({...a,settingName:"Setting Name is required"})),d=!0),(y===2||y===3)&&(M(x)&&(r(a=>({...a,lowerLimit:"Minimum range is required"})),d=!0),M(S)&&(r(a=>({...a,upperLimit:"Maximum range is required"})),d=!0),(typeof o=="string"?M(o):M(o.lower)||M(o.upper))&&(typeof o=="string"?r(a=>({...a,default:"Default value is required"})):(M(o.lower)&&r(a=>({...a,defaultStart:"Default start value is required"})),M(o.upper)&&r(a=>({...a,defaultEnd:"Default end value is required"}))),d=!0),M(w)&&(r(a=>({...a,sliderStep:"Slider step is required"})),d=!0),!M(x)&&!M(S)&&!M(w)&&(Number(x)<0&&(r(a=>({...a,lowerLimit:"Minimum range should be greater than 0"})),d=!0),Number(S)<0&&(r(a=>({...a,upperLimit:"Maximum range should be greater than 0"})),d=!0),Number(x)>Number(S)&&(r(a=>({...a,lowerLimit:"Minimum range should be less than maximum range"})),d=!0),typeof o=="string"?(Number(o)<Number(x)||Number(o)>Number(S))&&(r(a=>({...a,default:"Default value not in range"})),d=!0):((Number(o.lower)<Number(x)||Number(o.lower)>Number(S))&&(r(a=>({...a,defaultStart:"Default value not in range"})),d=!0),(Number(o.upper)<Number(x)||Number(o.upper)>Number(S)||Number(o.lower)>Number(o.upper))&&(r(a=>({...a,defaultEnd:"Default value not in range"})),d=!0)),Number(w)<=0&&(r(a=>({...a,sliderStep:"Slider step should be greater than 0"})),d=!0),Number(w)>Number(S)-Number(x)&&(r(a=>({...a,sliderStep:"Slider step should be less than range"})),d=!0))),!d},Se=({checked:r,onChange:x})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:r,onChange:x}),ye=h.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,te=({checked:r,onChange:x,label:S,description:y})=>e.jsx(E,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(E,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:S}),e.jsx(re,{children:y})]}),e.jsx(St,{checked:r,onChange:x})]})}),we=({onConfirm:r,onClose:x,toastObject:S,InnerComponentProps:y})=>{const i=(y==null?void 0:y.settingToEdit)||void 0,[o,w]=l.useState(!1),[d,a]=l.useState(i?i.description:""),[C,B]=l.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[g,$]=l.useState(!!(i&&(i.type===2||i.type===3))),[u,I]=l.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[b,N]=l.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[c,_]=l.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[T,F]=l.useState(!!(i&&i.type===3)),[L,P]=l.useState(i&&i.type===2?i.default.toString():""),[K,R]=l.useState(i&&i.type===2?i.default:0),[v,Z]=l.useState(i&&i.type===3?i.default.lower.toString():""),[D,W]=l.useState(i&&i.type===3?i.default.upper.toString():""),[Y,J]=l.useState(i&&i.type===3?i.default.lower:0),[Q,V]=l.useState(i&&i.type===3?i.default.upper:0),[n,p]=l.useState(),t=Fe(),A=()=>!o&&x(),oe=l.useRef(null);Je(oe,()=>A());const Be=s=>{if(s.preventDefault(),w(!0),be({setErrorInfo:p,defaultValue:T?{lower:v,upper:D}:L,settingName:d,lowerLimit:u,type:g?T?3:2:1,upperLimit:b,sliderStep:c})){const m=i?i.index:Math.floor(Math.random()*1e6),Oe=g?T?{type:3,default:{lower:Number(v),upper:Number(D)},enabled:C,description:d,index:m,lowerLimit:Number(u),upperLimit:Number(b),ticker:Number(c)}:{type:2,default:Number(L),enabled:C,description:d,index:m,lowerLimit:Number(u),upperLimit:Number(b),ticker:Number(c)}:{type:1,default:C,description:d,index:m};r(Oe),x()}w(!1)},O=s=>s!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(s),Pe=l.useMemo(()=>u!==""&&b!==""&&(T?v!==""&&D!=="":L!=="")&&c!==""&&Number(u)<=Number(b)&&Number(c)>0&&Number(c)<=Number(b)-Number(u)&&(T?Number(v)>=Number(u)&&Number(D)<=Number(b)&&Number(D)>Number(v):Number(L)>=Number(u)&&Number(L)<=Number(b)),[u,b,L,c,v,D,T]);return e.jsx(Te,{ref:oe,children:e.jsxs(Ve,{onSubmit:Be,children:[e.jsx(Ne,{onClick:A}),e.jsxs(je,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(E,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(He,{color:t.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-d.length})]}),e.jsx(q,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:d,onChange:s=>{a(s.target.value.slice(0,50)),p(m=>({...m,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(U,{children:n==null?void 0:n.settingName})]}),e.jsx(te,{checked:C,onChange:()=>B(s=>!s),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(te,{checked:g,onChange:()=>$(s=>!s),label:"Range",description:"Set a range for this setting e.g. 1-10"}),g&&e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:u,onChange:s=>{p(m=>({...m,lowerLimit:void 0})),!O(s.target.value)&&I(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:b,onChange:s=>{p(m=>({...m,upperLimit:void 0})),!O(s.target.value)&&N(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(U,{children:n==null?void 0:n.lowerLimit}),e.jsx(U,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(E,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:T,onChange:()=>F(!T)}),e.jsxs(E,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(re,{children:"User can select a range of values in the slider"})]})]}),!T&&e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(q,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:L,onChange:s=>{p(m=>({...m,default:void 0})),!O(s.target.value)&&(P(s.target.value),R(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(U,{children:n==null?void 0:n.default})]}),T&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:v,onChange:s=>{p(m=>({...m,defaultStart:void 0})),!O(s.target.value)&&(Z(s.target.value),J(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:D,onChange:s=>{p(m=>({...m,defaultEnd:void 0})),!O(s.target.value)&&(W(s.target.value),V(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(U,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(q,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:c,onChange:s=>{p(m=>({...m,sliderStep:void 0})),_(s.target.value),R(u===""?0:Number(u))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(U,{children:n==null?void 0:n.sliderStep})]}),Pe&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!T&&e.jsxs(ne,{children:[e.jsx(j,{children:u}),e.jsx(qe,{val:K,min:Number(u),max:Number(b),step:Number(c),defaultVal:Number(L),onChange:({x:s})=>R(s),preview:!0}),e.jsx(j,{children:b})]}),T&&e.jsxs(ne,{children:[e.jsx(j,{children:u}),e.jsx(Ke,{startVal:Y,endVal:Q,min:Number(u),max:Number(b),step:Number(c),defaultStartVal:Number(v),defaultEndVal:Number(D),onChange:({startVal:s,endVal:m})=>{J(s),V(m)},preview:!0}),e.jsx(j,{children:b})]})]})]}),e.jsx(pt,{text:"Save Setting",isLoading:o,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=h(Ge)`
  align-self: flex-end;
  color: ${r=>r.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,je=h.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${r=>r.theme.default.color};
`,Te=h.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${r=>r.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${k.laptop}) {
    width: 50vw;
  }
  @media (${k.mobileL}) {
    width: 95vw;
  }
`,j=h.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${r=>r.theme.default.color};
  padding: ${r=>r.padding||"0px"};
`,Ee=h(j)`
  color: ${r=>r.theme.default.secondaryColor};
`,re=h.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${r=>r.theme.default.secondaryColor};
`,G=h(se)`
  max-width: 108px;
  flex: 1;
  border: ${r=>r.hasError?`1px solid ${r.theme.nfsError}`:`1px solid ${r.theme.default.borderColor}`};
`,q=h(se)`
  flex: 1;
  border: ${r=>r.hasError?`1px solid ${r.theme.nfsError}`:`1px solid ${r.theme.default.borderColor}`};
`,U=h.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${r=>r.theme.nfsError};
  margin-top: 4px;
`,ne=h.div`
  display: flex;
  padding: 12px;
  gap: 16px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${r=>r.theme.nfsTickerPreviewBg};
`,Ce=({title:r,description:x,onCancel:S,disabled:y,onClick:i,feeRequired:o})=>{const{account:w,provider:d}=pe(),[a,C]=l.useState(0),[B,g]=l.useState(!1),[$,u]=l.useState(!1),I=ce();l.useEffect(()=>{!w||!d||async function(){const N=await ct({address:w,provider:d,contractAddress:ue.epnscore});C(parseInt(N));const c=parseInt(N);c>=o&&c!=0?g(!0):g(!1)}()},[w,d]);const b=async()=>{if(u(!0),!d)return;const N=d.getSigner(w);I.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const c=await gt({signer:N,contractAddress:ue.epnscore,amount:o-a});console.debug("response",c),c&&(u(!1),C(o),g(!0),I.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:_=>e.jsx(xe,{size:_,color:"green"})}))}catch(c){console.error(c),c.code=="ACTION_REJECTED"?I.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:_=>e.jsx(H,{size:_,color:"red"})}):(I.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:_=>e.jsx(H,{size:_,color:"red"})}),console.error("Error --> %o",c),console.error({err:c}))}u(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(Me,{children:r}),e.jsx(Le,{children:x})]}),e.jsxs(de,{flex:"0",children:[B?e.jsx(ve,{src:ut}):null,e.jsxs(De,{children:[o," PUSH"]})]})]}),e.jsx(xt,{noOfPushTokensToCheck:o,containerProps:{width:"100%"},onMintPushToken:async N=>{await ht({noOfTokens:N,provider:d,account:w})}}),$?e.jsx(e.Fragment,{children:e.jsxs(Ie,{children:[e.jsx(Ze,{size:42,color:f.COLORS.PRIMARY_PINK,type:We.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(X,{onClick:S,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),a>=o?e.jsx(X,{onClick:i,disabled:y,size:"large",children:"Save Changes"}):e.jsx(X,{onClick:b,size:"large",disabled:y,children:"Approve PUSH"})]})})]})},ve=h.img``,Ae=h(le)`
  background: ${r=>r.theme.editFooterBg};
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

  @media ${k.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${k.mobileL} {
    margin: 0px;
  }
`,Me=h.p`
  margin: 0px;
  color: ${r=>r.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Le=h.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${r=>r.theme.editChannelSecondaryText};
`,De=h.p`
  margin: 0px 0px 0px 5px;
  color: ${r=>r.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ie=h(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${k.tablet} {
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
  color: ${r=>r.theme.editChannelPrimaryText};
`,$e=h(de)`
  justify-content: end;
  margin-top: 24px;
  gap: 14px;
  @media ${k.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,ke=he.coreContractChain;function Re(){const{account:r,chainId:x,wallet:S}=pe(),{coreChannelAdmin:y,delegatees:i}=ee(n=>n.admin),{channelSettings:o}=ee(n=>n.channels),w=Ye(),d=ke===x,a=50,[C,B]=l.useState(""),[g,$]=l.useState([]),[u,I]=l.useState(),[b,N]=l.useState(!1),[c,_]=l.useState(!0),{handleConnectWalletAndEnableProfile:T}=l.useContext(Qe),{userPushSDKInstance:F}=ee(n=>n.user),{isModalOpen:L,showModal:P,ModalComponent:K}=Xe(),R=()=>{const n=window.location.origin;window.location.replace(`${n}/channels`)};l.useEffect(()=>{(async()=>{if(N(!0),!!r){try{await F.channel.info(r)||R()}catch{R()}y&&y!==r&&R(),N(!1)}})()},[r,y]),l.useEffect(()=>{L===!1&&I(void 0)},[L]),l.useEffect(()=>{r&&(!i||!i.length?B(r):B(d?i[0].channel:i[0].alias_address))},[i,r]),l.useEffect(()=>{C&&o[C]&&($(o[C]||[]),_(!1))},[C,o]);const v=ce(5e3),Z=et(),D=()=>{Z("/dashboard",{replace:!0})},W=n=>{const p=g.findIndex(t=>t.index===n.index);if(p===-1)$([...g,n]);else{const t=[...g];t[p]=n,$(t)}},Y=n=>{I(n),P()},J=n=>{$(p=>p.filter(t=>t.index!==n.index))},Q=async()=>{try{N(!0);let n=F;if(!n.signer&&(n=await T({wallet:S}),!n)){N(!1);return}v.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const p=g.map(t=>{if(t.type===1)return{type:t.type,description:t.description,default:t.default?1:0};if(t.type===2)return console.info({type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}}),{type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}};if(t.type===3)return console.info({type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}}),{type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}}});console.info(p),await n.channel.setting(p),w(rt({channelAddress:C,settings:g})),N(!1),v.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:t=>e.jsx(xe,{size:t,color:"green"})}),setTimeout(()=>D(),2e3)}catch(n){N(!1),n.code=="ACTION_REJECTED"?v.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:p=>e.jsx(H,{size:p,color:"red"})}):(v.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:p=>e.jsx(H,{size:p,color:"red"})}),console.error("Error --> %o",n))}},V=l.useMemo(()=>{if(!g||!o[r])return!1;if(g.length!==o[r].length)return!0;let n=!0;for(let p=0;p<g.length;p++){const t=g[p],A=o[r][p];t.type===1?n=n&&t.type===A.type&&t.description===A.description&&t.default===A.default:t.type===2&&(n=n&&t.type===A.type&&t.description===A.description&&t.default===A.default&&t.enabled===A.enabled&&t.lowerLimit===A.lowerLimit&&t.upperLimit===A.upperLimit&&t.ticker===A.ticker)}return n===!1},[g,o[r]]);return e.jsxs(e.Fragment,{children:[e.jsx(mt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(wt,{onClick:P})}),e.jsx(ft,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:r,isAddress:!1,isLoading:c,items:g,onClickEmptyListButton:P,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:Y,text:"Edit"},{icon:e.jsx(lt,{}),onClick:J,text:"Delete"}]}),e.jsx(Ce,{feeRequired:a,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:D,disabled:!V||b,onClick:Q}),e.jsx(K,{modalPosition:tt.ON_PARENT,InnerComponent:we,onConfirm:W,InnerComponentProps:{settingToEdit:u}})]})}he.coreContractChain;function Ue(){nt.pageview("/channel/settings");const[r,x]=ge.useState(null),S=()=>x(null);return ge.useEffect(()=>{r&&S()},[r]),e.jsx(ie,{children:e.jsx(Re,{})})}let ie,ae;ie=h(it)`
  align-items: center;
  align-self: center;
  background: ${r=>r.theme.default.bg};
  border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE}
    ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${f.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${z.MINI_MODULES.DESKTOP.RIGHT} - ${z.MINI_MODULES.DESKTOP.LEFT} -
      ${f.ADJUSTMENTS.PADDING.BIG} - ${f.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${f.ADJUSTMENTS.PADDING.BIG};

  @media ${k.laptop} {
    margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${f.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${k.mobileL} {
    margin: ${f.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${f.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${z.MINI_MODULES.MOBILE.RIGHT} - ${z.MINI_MODULES.MOBILE.LEFT} -
        ${f.ADJUSTMENTS.PADDING.DEFAULT} - ${f.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${f.CONSTANTS.HEADER_HEIGHT}px - ${z.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,me=()=>e.jsx(ae,{children:e.jsx(Ue,{})}),ae=h(at)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{vt as __tla,me as default};
