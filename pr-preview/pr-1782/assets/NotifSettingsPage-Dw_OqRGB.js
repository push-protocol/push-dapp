import{be as ze,b6 as h,b1 as e,bO as k,dp as Ge,ch as oe,a$ as l,b9 as Fe,cl as Je,ce as Ve,dq as E,bP as qe,dr as He,ds as Ke,bR as le,d1 as de,aY as pe,c$ as ce,bk as ue,cr as We,bM as f,cs as Ze,bY as X,dt as xe,d2 as q,bi as he,b$ as ee,b_ as Ye,dj as Qe,cn as Xe,aZ as et,co as tt,b0 as rt,du as nt,bN as z,bQ as at,bg as ge,bb as it,b7 as st,__tla as ot}from"./index-CS747C1E.js";import{__tla as lt}from"./Tag-DBBPssn7.js";import{I as dt,__tla as pt}from"./index.esm-BCcc1zd6.js";import{M as ct,S as ut,F as xt,C as ht,a as gt,__tla as mt}from"./ChannelInfoList-B1ierkX_.js";import{I as ft,__tla as bt}from"./SendNotifications-BUb5HbZm.js";import{A as St,__tla as yt}from"./EmptyNotificationSettings-CVxCfdEn.js";import{g as wt,m as Nt,a as jt,__tla as Tt}from"./PushTokenContractHelper-tAXu6Qqe.js";import{__tla as Et}from"./TransitionGroupContext-CM9yNyKp.js";import{__tla as Ct}from"./index-jX5_CNq_.js";import{__tla as vt}from"./index.esm-SH5Pg_Ly.js";let me,At=Promise.all([(()=>{try{return ot}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})()]).then(async()=>{function fe(r){return ze({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(r)}const M=r=>r.trim().length==0,be=({setErrorInfo:r,lowerLimit:x,upperLimit:S,type:y,settingName:a,defaultValue:s,sliderStep:w})=>{r(void 0);let d=!1;return M(a)&&(r(i=>({...i,settingName:"Setting Name is required"})),d=!0),(y===2||y===3)&&(M(x)&&(r(i=>({...i,lowerLimit:"Minimum range is required"})),d=!0),M(S)&&(r(i=>({...i,upperLimit:"Maximum range is required"})),d=!0),(typeof s=="string"?M(s):M(s.lower)||M(s.upper))&&(typeof s=="string"?r(i=>({...i,default:"Default value is required"})):(M(s.lower)&&r(i=>({...i,defaultStart:"Default start value is required"})),M(s.upper)&&r(i=>({...i,defaultEnd:"Default end value is required"}))),d=!0),M(w)&&(r(i=>({...i,sliderStep:"Slider step is required"})),d=!0),!M(x)&&!M(S)&&!M(w)&&(Number(x)<0&&(r(i=>({...i,lowerLimit:"Minimum range should be greater than 0"})),d=!0),Number(S)<0&&(r(i=>({...i,upperLimit:"Maximum range should be greater than 0"})),d=!0),Number(x)>Number(S)&&(r(i=>({...i,lowerLimit:"Minimum range should be less than maximum range"})),d=!0),typeof s=="string"?(Number(s)<Number(x)||Number(s)>Number(S))&&(r(i=>({...i,default:"Default value not in range"})),d=!0):((Number(s.lower)<Number(x)||Number(s.lower)>Number(S))&&(r(i=>({...i,defaultStart:"Default value not in range"})),d=!0),(Number(s.upper)<Number(x)||Number(s.upper)>Number(S)||Number(s.lower)>Number(s.upper))&&(r(i=>({...i,defaultEnd:"Default value not in range"})),d=!0)),Number(w)<=0&&(r(i=>({...i,sliderStep:"Slider step should be greater than 0"})),d=!0),Number(w)>Number(S)-Number(x)&&(r(i=>({...i,sliderStep:"Slider step should be less than range"})),d=!0))),!d},Se=({checked:r,onChange:x})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:r,onChange:x}),ye=h.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,te=({checked:r,onChange:x,label:S,description:y})=>e.jsx(E,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(E,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:S}),e.jsx(re,{children:y})]}),e.jsx(ft,{checked:r,onChange:x})]})}),we=({onConfirm:r,onClose:x,toastObject:S,InnerComponentProps:y})=>{const a=(y==null?void 0:y.settingToEdit)||void 0,[s,w]=l.useState(!1),[d,i]=l.useState(a?a.description:""),[C,B]=l.useState(a?a.type===1&&a.default||a.type===2&&a.enabled||a.type===3&&a.enabled:!0),[g,$]=l.useState(!!(a&&(a.type===2||a.type===3))),[u,I]=l.useState(a&&(a.type===2||a.type===3)?a.lowerLimit.toString():""),[b,N]=l.useState(a&&(a.type===2||a.type===3)?a.upperLimit.toString():""),[c,_]=l.useState(a&&(a.type===2||a.type===3)&&a.ticker?a.ticker.toString():"1"),[T,F]=l.useState(!!(a&&a.type===3)),[L,P]=l.useState(a&&a.type===2?a.default.toString():""),[K,R]=l.useState(a&&a.type===2?a.default:0),[v,W]=l.useState(a&&a.type===3?a.default.lower.toString():""),[D,Z]=l.useState(a&&a.type===3?a.default.upper.toString():""),[Y,J]=l.useState(a&&a.type===3?a.default.lower:0),[Q,V]=l.useState(a&&a.type===3?a.default.upper:0),[n,p]=l.useState(),t=Fe(),A=()=>!s&&x(),se=l.useRef(null);Je(se,()=>A());const Be=o=>{if(o.preventDefault(),w(!0),be({setErrorInfo:p,defaultValue:T?{lower:v,upper:D}:L,settingName:d,lowerLimit:u,type:g?T?3:2:1,upperLimit:b,sliderStep:c})){const m=a?a.index:Math.floor(Math.random()*1e6),Oe=g?T?{type:3,default:{lower:Number(v),upper:Number(D)},enabled:C,description:d,index:m,lowerLimit:Number(u),upperLimit:Number(b),ticker:Number(c)}:{type:2,default:Number(L),enabled:C,description:d,index:m,lowerLimit:Number(u),upperLimit:Number(b),ticker:Number(c)}:{type:1,default:C,description:d,index:m};r(Oe),x()}w(!1)},O=o=>o!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(o),Pe=l.useMemo(()=>u!==""&&b!==""&&(T?v!==""&&D!=="":L!=="")&&c!==""&&Number(u)<=Number(b)&&Number(c)>0&&Number(c)<=Number(b)-Number(u)&&(T?Number(v)>=Number(u)&&Number(D)<=Number(b)&&Number(D)>Number(v):Number(L)>=Number(u)&&Number(L)<=Number(b)),[u,b,L,c,v,D,T]);return e.jsx(Te,{ref:se,children:e.jsxs(Ve,{onSubmit:Be,children:[e.jsx(Ne,{onClick:A}),e.jsxs(je,{children:[a?"Edit ":"Add a "," Setting"]}),e.jsxs(E,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(qe,{color:t.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-d.length})]}),e.jsx(H,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:d,onChange:o=>{i(o.target.value.slice(0,50)),p(m=>({...m,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(U,{children:n==null?void 0:n.settingName})]}),e.jsx(te,{checked:C,onChange:()=>B(o=>!o),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(te,{checked:g,onChange:()=>$(o=>!o),label:"Range",description:"Set a range for this setting e.g. 1-10"}),g&&e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:u,onChange:o=>{p(m=>({...m,lowerLimit:void 0})),!O(o.target.value)&&I(o.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:b,onChange:o=>{p(m=>({...m,upperLimit:void 0})),!O(o.target.value)&&N(o.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(U,{children:n==null?void 0:n.lowerLimit}),e.jsx(U,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(E,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:T,onChange:()=>F(!T)}),e.jsxs(E,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(re,{children:"User can select a range of values in the slider"})]})]}),!T&&e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:L,onChange:o=>{p(m=>({...m,default:void 0})),!O(o.target.value)&&(P(o.target.value),R(Number(o.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(U,{children:n==null?void 0:n.default})]}),T&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:v,onChange:o=>{p(m=>({...m,defaultStart:void 0})),!O(o.target.value)&&(W(o.target.value),J(Number(o.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:D,onChange:o=>{p(m=>({...m,defaultEnd:void 0})),!O(o.target.value)&&(Z(o.target.value),V(Number(o.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(U,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:t.textAreaBorderColor,focusBorder:t.textAreaFocusBorder,radius:"12px",bg:t.editChannelInputbg,color:t.editChannelPrimaryText,value:c,onChange:o=>{p(m=>({...m,sliderStep:void 0})),_(o.target.value),R(u===""?0:Number(u))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(U,{children:n==null?void 0:n.sliderStep})]}),Pe&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!T&&e.jsxs(ne,{children:[e.jsx(j,{children:u}),e.jsx(He,{val:K,min:Number(u),max:Number(b),step:Number(c),defaultVal:Number(L),onChange:({x:o})=>R(o),preview:!0}),e.jsx(j,{children:b})]}),T&&e.jsxs(ne,{children:[e.jsx(j,{children:u}),e.jsx(Ke,{startVal:Y,endVal:Q,min:Number(u),max:Number(b),step:Number(c),defaultStartVal:Number(v),defaultEndVal:Number(D),onChange:({startVal:o,endVal:m})=>{J(o),V(m)},preview:!0}),e.jsx(j,{children:b})]})]})]}),e.jsx(ct,{text:"Save Setting",isLoading:s,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=h(Ge)`
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
`,G=h(oe)`
  max-width: 108px;
  flex: 1;
  border: ${r=>r.hasError?`1px solid ${r.theme.nfsError}`:`1px solid ${r.theme.default.borderColor}`};
`,H=h(oe)`
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
`,Ce=({title:r,description:x,onCancel:S,disabled:y,onClick:a,feeRequired:s})=>{const{account:w,provider:d}=pe(),[i,C]=l.useState(0),[B,g]=l.useState(!1),[$,u]=l.useState(!1),I=ce();l.useEffect(()=>{!w||!d||async function(){const N=await wt({address:w,provider:d,contractAddress:ue.epnscore});C(parseInt(N));const c=parseInt(N);c>=s&&c!=0?g(!0):g(!1)}()},[w,d]);const b=async()=>{if(u(!0),!d)return;const N=d.getSigner(w);I.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const c=await jt({signer:N,contractAddress:ue.epnscore,amount:s-i});console.debug("response",c),c&&(u(!1),C(s),g(!0),I.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:_=>e.jsx(xe,{size:_,color:"green"})}))}catch(c){console.error(c),c.code=="ACTION_REJECTED"?I.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:_=>e.jsx(q,{size:_,color:"red"})}):(I.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:_=>e.jsx(q,{size:_,color:"red"})}),console.error("Error --> %o",c),console.error({err:c}))}u(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(Me,{children:r}),e.jsx(Le,{children:x})]}),e.jsxs(de,{flex:"0",children:[B?e.jsx(ve,{src:ut}):null,e.jsxs(De,{children:[s," PUSH"]})]})]}),e.jsx(xt,{noOfPushTokensToCheck:s,containerProps:{width:"100%"},onMintPushToken:async N=>{await Nt({noOfTokens:N,provider:d,account:w})}}),$?e.jsx(e.Fragment,{children:e.jsxs(Ie,{children:[e.jsx(We,{size:42,color:f.COLORS.PRIMARY_PINK,type:Ze.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(X,{onClick:S,disabled:!1,variant:"outline",size:"large",children:"Cancel"}),i>=s?e.jsx(X,{onClick:a,disabled:y,size:"large",children:"Save Changes"}):e.jsx(X,{onClick:b,size:"large",disabled:y,children:"Approve PUSH"})]})})]})},ve=h.img``,Ae=h(le)`
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
`,ke=he.coreContractChain;function Re(){const{account:r,chainId:x,wallet:S}=pe(),{coreChannelAdmin:y,delegatees:a}=ee(n=>n.admin),{channelSettings:s}=ee(n=>n.channels),w=Ye(),d=ke===x,i=50,[C,B]=l.useState(""),[g,$]=l.useState([]),[u,I]=l.useState(),[b,N]=l.useState(!1),[c,_]=l.useState(!0),{handleConnectWalletAndEnableProfile:T}=l.useContext(Qe),{userPushSDKInstance:F}=ee(n=>n.user),{isModalOpen:L,showModal:P,ModalComponent:K}=Xe(),R=()=>{const n=window.location.origin;window.location.replace(`${n}/channels`)};l.useEffect(()=>{(async()=>{if(N(!0),!!r){try{await F.channel.info(r)||R()}catch{R()}y&&y!==r&&R(),N(!1)}})()},[r,y]),l.useEffect(()=>{L===!1&&I(void 0)},[L]),l.useEffect(()=>{r&&(!a||!a.length?B(r):B(d?a[0].channel:a[0].alias_address))},[a,r]),l.useEffect(()=>{C&&s[C]&&($(s[C]||[]),_(!1))},[C,s]);const v=ce(5e3),W=et(),D=()=>{W(`${rt.ChannelDashboard}/${r}`,{replace:!0})},Z=n=>{const p=g.findIndex(t=>t.index===n.index);if(p===-1)$([...g,n]);else{const t=[...g];t[p]=n,$(t)}},Y=n=>{I(n),P()},J=n=>{$(p=>p.filter(t=>t.index!==n.index))},Q=async()=>{try{N(!0);let n=F;if(!n.signer&&(n=await T({wallet:S}),!n)){N(!1);return}v.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const p=g.map(t=>{if(t.type===1)return{type:t.type,description:t.description,default:t.default?1:0};if(t.type===2)return console.info({type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}}),{type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}};if(t.type===3)return console.info({type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}}),{type:t.type,description:t.description,default:t.default,data:{lower:t.lowerLimit,upper:t.upperLimit,ticker:t.ticker,enabled:t.enabled}}});console.info(p),await n.channel.setting(p),w(nt({channelAddress:C,settings:g})),N(!1),v.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:t=>e.jsx(xe,{size:t,color:"green"})}),setTimeout(()=>D(),2e3)}catch(n){N(!1),n.code=="ACTION_REJECTED"?v.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:p=>e.jsx(q,{size:p,color:"red"})}):(v.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:p=>e.jsx(q,{size:p,color:"red"})}),console.error("Error --> %o",n))}},V=l.useMemo(()=>{if(!g||!s[r])return!1;if(g.length!==s[r].length)return!0;let n=!0;for(let p=0;p<g.length;p++){const t=g[p],A=s[r][p];t.type===1?n=n&&t.type===A.type&&t.description===A.description&&t.default===A.default:t.type===2&&(n=n&&t.type===A.type&&t.description===A.description&&t.default===A.default&&t.enabled===A.enabled&&t.lowerLimit===A.lowerLimit&&t.upperLimit===A.upperLimit&&t.ticker===A.ticker)}return n===!1},[g,s[r]]);return e.jsxs(e.Fragment,{children:[e.jsx(ht,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(St,{onClick:P})}),e.jsx(gt,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:r,isAddress:!1,isLoading:c,items:g,onClickEmptyListButton:P,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:Y,text:"Edit"},{icon:e.jsx(dt,{}),onClick:J,text:"Delete"}]}),e.jsx(Ce,{feeRequired:i,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:D,disabled:!V||b,onClick:Q}),e.jsx(K,{modalPosition:tt.ON_PARENT,InnerComponent:we,onConfirm:Z,InnerComponentProps:{settingToEdit:u}})]})}he.coreContractChain;function Ue(){at.pageview("/channel/settings");const[r,x]=ge.useState(null),S=()=>x(null);return ge.useEffect(()=>{r&&S()},[r]),e.jsx(ae,{children:e.jsx(Re,{})})}let ae,ie;ae=h(it)`
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
`,me=()=>e.jsx(ie,{children:e.jsx(Ue,{})}),ie=h(st)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{At as __tla,me as default};
