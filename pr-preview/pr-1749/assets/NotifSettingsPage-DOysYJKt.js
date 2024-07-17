import{b6 as Ge,a_ as u,aZ as e,bA as I,dn as Fe,bU as se,b7 as l,b1 as Je,c1 as Ve,bP as qe,dp as C,bB as He,dq as Ke,dr as We,bD as le,d1 as de,bY as Ze,b9 as pe,c$ as ce,cw as ue,c7 as Ye,by as f,c8 as Qe,dg as xe,d2 as q,bd as he,bN as ee,bM as Xe,cQ as et,c3 as tt,bK as rt,c4 as nt,ds as it,bz as O,bC as at,ba as ge,b3 as ot,a$ as st,__tla as lt}from"./index-CaMWqIHB.js";import{__tla as dt}from"./Tag-Cp_Ik8SG.js";import{I as pt,__tla as ct}from"./index.esm-DmllQBGR.js";import{M as ut,g as xt,S as ht,F as gt,m as mt,a as ft,C as bt,b as St,__tla as yt}from"./ChannelInfoList-DIvDNXXv.js";import{I as wt,__tla as Nt}from"./SendNotifications-omCLQpbr.js";import{A as Tt,__tla as jt}from"./EmptyNotificationSettings-7ZmRJIyG.js";import{__tla as Ct}from"./TransitionGroupContext-F_Vm4hV4.js";import{__tla as Et}from"./index.es-C2M3AAr1.js";import"./browser-CeceZ__e.js";import{__tla as vt}from"./index-BSlrlY0F.js";import{__tla as At}from"./index.esm-DxTusMxS.js";let me,Mt=Promise.all([(()=>{try{return lt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return At}catch{}})()]).then(async()=>{function fe(t){return Ge({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const M=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:h,upperLimit:S,type:y,settingName:i,defaultValue:o,sliderStep:w})=>{t(void 0);let d=!1;return M(i)&&(t(a=>({...a,settingName:"Setting Name is required"})),d=!0),(y===2||y===3)&&(M(h)&&(t(a=>({...a,lowerLimit:"Minimum range is required"})),d=!0),M(S)&&(t(a=>({...a,upperLimit:"Maximum range is required"})),d=!0),(typeof o=="string"?M(o):M(o.lower)||M(o.upper))&&(typeof o=="string"?t(a=>({...a,default:"Default value is required"})):(M(o.lower)&&t(a=>({...a,defaultStart:"Default start value is required"})),M(o.upper)&&t(a=>({...a,defaultEnd:"Default end value is required"}))),d=!0),M(w)&&(t(a=>({...a,sliderStep:"Slider step is required"})),d=!0),!M(h)&&!M(S)&&!M(w)&&(Number(h)<0&&(t(a=>({...a,lowerLimit:"Minimum range should be greater than 0"})),d=!0),Number(S)<0&&(t(a=>({...a,upperLimit:"Maximum range should be greater than 0"})),d=!0),Number(h)>Number(S)&&(t(a=>({...a,lowerLimit:"Minimum range should be less than maximum range"})),d=!0),typeof o=="string"?(Number(o)<Number(h)||Number(o)>Number(S))&&(t(a=>({...a,default:"Default value not in range"})),d=!0):((Number(o.lower)<Number(h)||Number(o.lower)>Number(S))&&(t(a=>({...a,defaultStart:"Default value not in range"})),d=!0),(Number(o.upper)<Number(h)||Number(o.upper)>Number(S)||Number(o.lower)>Number(o.upper))&&(t(a=>({...a,defaultEnd:"Default value not in range"})),d=!0)),Number(w)<=0&&(t(a=>({...a,sliderStep:"Slider step should be greater than 0"})),d=!0),Number(w)>Number(S)-Number(h)&&(t(a=>({...a,sliderStep:"Slider step should be less than range"})),d=!0))),!d},Se=({checked:t,onChange:h})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:h}),ye=u.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,te=({checked:t,onChange:h,label:S,description:y})=>e.jsx(C,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(C,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(C,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(T,{children:S}),e.jsx(re,{children:y})]}),e.jsx(wt,{checked:t,onChange:h})]})}),we=({onConfirm:t,onClose:h,toastObject:S,InnerComponentProps:y})=>{const i=(y==null?void 0:y.settingToEdit)||void 0,[o,w]=l.useState(!1),[d,a]=l.useState(i?i.description:""),[E,B]=l.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[g,k]=l.useState(!!(i&&(i.type===2||i.type===3))),[x,_]=l.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[b,N]=l.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[c,$]=l.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[j,F]=l.useState(!!(i&&i.type===3)),[D,P]=l.useState(i&&i.type===2?i.default.toString():""),[W,U]=l.useState(i&&i.type===2?i.default:0),[v,Z]=l.useState(i&&i.type===3?i.default.lower.toString():""),[L,Y]=l.useState(i&&i.type===3?i.default.upper.toString():""),[Q,J]=l.useState(i&&i.type===3?i.default.lower:0),[X,V]=l.useState(i&&i.type===3?i.default.upper:0),[n,p]=l.useState(),r=Je(),A=()=>!o&&h(),oe=l.useRef(null);Ve(oe,()=>A());const Pe=s=>{if(s.preventDefault(),w(!0),be({setErrorInfo:p,defaultValue:j?{lower:v,upper:L}:D,settingName:d,lowerLimit:x,type:g?j?3:2:1,upperLimit:b,sliderStep:c})){const m=i?i.index:Math.floor(Math.random()*1e6),Oe=g?j?{type:3,default:{lower:Number(v),upper:Number(L)},enabled:E,description:d,index:m,lowerLimit:Number(x),upperLimit:Number(b),ticker:Number(c)}:{type:2,default:Number(D),enabled:E,description:d,index:m,lowerLimit:Number(x),upperLimit:Number(b),ticker:Number(c)}:{type:1,default:E,description:d,index:m};t(Oe),h()}w(!1)},z=s=>s!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(s),ze=l.useMemo(()=>x!==""&&b!==""&&(j?v!==""&&L!=="":D!=="")&&c!==""&&Number(x)<=Number(b)&&Number(c)>0&&Number(c)<=Number(b)-Number(x)&&(j?Number(v)>=Number(x)&&Number(L)<=Number(b)&&Number(L)>Number(v):Number(D)>=Number(x)&&Number(D)<=Number(b)),[x,b,D,c,v,L,j]);return e.jsx(je,{ref:oe,children:e.jsxs(qe,{onSubmit:Pe,children:[e.jsx(Ne,{onClick:A}),e.jsxs(Te,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(C,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(C,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(T,{children:"Setting Name"}),e.jsx(He,{color:r.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-d.length})]}),e.jsx(H,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:d,onChange:s=>{a(s.target.value.slice(0,50)),p(m=>({...m,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(R,{children:n==null?void 0:n.settingName})]}),e.jsx(te,{checked:E,onChange:()=>B(s=>!s),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(te,{checked:g,onChange:()=>k(s=>!s),label:"Range",description:"Set a range for this setting e.g. 1-10"}),g&&e.jsxs(e.Fragment,{children:[e.jsxs(C,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Range Values"}),e.jsxs(C,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:x,onChange:s=>{p(m=>({...m,lowerLimit:void 0})),!z(s.target.value)&&_(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(T,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:b,onChange:s=>{p(m=>({...m,upperLimit:void 0})),!z(s.target.value)&&N(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(R,{children:n==null?void 0:n.lowerLimit}),e.jsx(R,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(C,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:j,onChange:()=>F(!j)}),e.jsxs(C,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(T,{children:"Enable Multi Range Slider"}),e.jsx(re,{children:"User can select a range of values in the slider"})]})]}),!j&&e.jsxs(C,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Default Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:D,onChange:s=>{p(m=>({...m,default:void 0})),!z(s.target.value)&&(P(s.target.value),U(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(R,{children:n==null?void 0:n.default})]}),j&&e.jsxs(C,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Default Values"}),e.jsxs(C,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:v,onChange:s=>{p(m=>({...m,defaultStart:void 0})),!z(s.target.value)&&(Z(s.target.value),J(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(T,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:L,onChange:s=>{p(m=>({...m,defaultEnd:void 0})),!z(s.target.value)&&(Y(s.target.value),V(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(R,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(C,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Slider Step Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:r.textAreaBorderColor,focusBorder:r.textAreaFocusBorder,radius:"12px",bg:r.editChannelInputbg,color:r.editChannelPrimaryText,value:c,onChange:s=>{p(m=>({...m,sliderStep:void 0})),$(s.target.value),U(x===""?0:Number(x))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(R,{children:n==null?void 0:n.sliderStep})]}),ze&&e.jsxs(C,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ce,{children:"Preview"}),!j&&e.jsxs(ne,{children:[e.jsx(T,{children:x}),e.jsx(Ke,{val:W,min:Number(x),max:Number(b),step:Number(c),defaultVal:Number(D),onChange:({x:s})=>U(s),preview:!0}),e.jsx(T,{children:b})]}),j&&e.jsxs(ne,{children:[e.jsx(T,{children:x}),e.jsx(We,{startVal:Q,endVal:X,min:Number(x),max:Number(b),step:Number(c),defaultStartVal:Number(v),defaultEndVal:Number(L),onChange:({startVal:s,endVal:m})=>{J(s),V(m)},preview:!0}),e.jsx(T,{children:b})]})]})]}),e.jsx(ut,{text:"Save Setting",isLoading:o,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=u(Fe)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,Te=u.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,je=u.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${I.laptop}) {
    width: 50vw;
  }
  @media (${I.mobileL}) {
    width: 95vw;
  }
`,T=u.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ce=u(T)`
  color: ${t=>t.theme.default.secondaryColor};
`,re=u.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,G=u(se)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,H=u(se)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,R=u.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,ne=u.div`
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
`,Ee=({title:t,description:h,onCancel:S,disabled:y,onClick:i,feeRequired:o})=>{const{account:w,provider:d}=pe(),[a,E]=l.useState(0),[B,g]=l.useState(!1),[k,x]=l.useState(!1),_=ce();l.useEffect(()=>{!w||!d||async function(){const N=await xt({address:w,provider:d,contractAddress:ue.epnscore});E(parseInt(N));const c=parseInt(N);c>=o&&c!=0?g(!0):g(!1)}()},[w,d]);const b=async()=>{if(x(!0),!d)return;const N=d.getSigner(w);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const c=await ft({signer:N,contractAddress:ue.epnscore,amount:o-a});console.debug("response",c),c&&(x(!1),E(o),g(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(c){console.error(c),c.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(q,{size:$,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(q,{size:$,color:"red"})}),console.error("Error --> %o",c),console.error({err:c}))}x(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(Me,{children:t}),e.jsx(De,{children:h})]}),e.jsxs(de,{flex:"0",children:[B?e.jsx(ve,{src:ht}):null,e.jsxs(Le,{children:[o," PUSH"]})]})]}),e.jsx(gt,{noOfPushTokensToCheck:o,containerProps:{width:"100%"},onMintPushToken:async N=>{await mt({noOfTokens:N,provider:d,account:w})}}),k?e.jsx(e.Fragment,{children:e.jsxs(Ie,{children:[e.jsx(Ye,{size:42,color:f.COLORS.PRIMARY_PINK,type:Qe.PROCESSING}),e.jsx(_e,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ke,{onClick:S,disabled:!1,children:"Cancel"}),a>=o?e.jsx(K,{disabled:y,onClick:i,children:"Save Changes"}):e.jsx(K,{disabled:y,onClick:b,children:"Approve PUSH"})]})})]})},ve=u.img``,Ae=u(le)`
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

  @media ${I.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${I.mobileL} {
    margin: 0px;
  }
`,Me=u.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,De=u.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Le=u.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ie=u(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${I.tablet} {
    flex: 0;
  }
`,_e=u.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,$e=u(de)`
  justify-content: end;
  margin-top: 24px;
  @media ${I.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,K=u(Ze)`
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

  @media ${I.tablet} {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${I.mobileL} {
    width: -webkit-fill-available;
  }
`,ke=u(K)`
  margin-right: 14px;
  background: ${t=>t.theme.default.bg};
  color: ${t=>t.theme.logoBtnColor};
  border: 1px solid
    ${t=>t.theme.scheme==="light"?t.theme.default.primaryPushThemeTextColor:t.theme.default.borderColor};

  @media ${I.mobileL} {
    margin-right: 0px;
    margin-top: 10px;
  }
`,Ue=he.coreContractChain;function Re(){const{account:t,chainId:h,wallet:S}=pe(),{coreChannelAdmin:y,delegatees:i}=ee(n=>n.admin),{channelSettings:o}=ee(n=>n.channels),w=Xe(),d=Ue===h,a=50,[E,B]=l.useState(""),[g,k]=l.useState([]),[x,_]=l.useState(),[b,N]=l.useState(!1),[c,$]=l.useState(!0),{handleConnectWalletAndEnableProfile:j}=l.useContext(et),{userPushSDKInstance:F}=ee(n=>n.user),{isModalOpen:D,showModal:P,ModalComponent:W}=tt(),U=()=>{const n=window.location.origin;window.location.replace(`${n}/channels`)};l.useEffect(()=>{(async()=>{if(N(!0),!!t){try{await F.channel.info(t)||U()}catch{U()}y&&y!==t&&U(),N(!1)}})()},[t,y]),l.useEffect(()=>{D===!1&&_(void 0)},[D]),l.useEffect(()=>{t&&(!i||!i.length?B(t):B(d?i[0].channel:i[0].alias_address))},[i,t]),l.useEffect(()=>{E&&o[E]&&(k(o[E]||[]),$(!1))},[E,o]);const v=ce(5e3),Z=rt(),L=()=>{Z("/dashboard",{replace:!0})},Y=n=>{const p=g.findIndex(r=>r.index===n.index);if(p===-1)k([...g,n]);else{const r=[...g];r[p]=n,k(r)}},Q=n=>{_(n),P()},J=n=>{k(p=>p.filter(r=>r.index!==n.index))},X=async()=>{try{N(!0);let n=F;if(!n.signer&&(n=await j({wallet:S}),!n)){N(!1);return}v.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const p=g.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(p),await n.channel.setting(p),w(it({channelAddress:E,settings:g})),N(!1),v.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),setTimeout(()=>L(),2e3)}catch(n){N(!1),n.code=="ACTION_REJECTED"?v.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:p=>e.jsx(q,{size:p,color:"red"})}):(v.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:p=>e.jsx(q,{size:p,color:"red"})}),console.error("Error --> %o",n))}},V=l.useMemo(()=>{if(!g||!o[t])return!1;if(g.length!==o[t].length)return!0;let n=!0;for(let p=0;p<g.length;p++){const r=g[p],A=o[t][p];r.type===1?n=n&&r.type===A.type&&r.description===A.description&&r.default===A.default:r.type===2&&(n=n&&r.type===A.type&&r.description===A.description&&r.default===A.default&&r.enabled===A.enabled&&r.lowerLimit===A.lowerLimit&&r.upperLimit===A.upperLimit&&r.ticker===A.ticker)}return n===!1},[g,o[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(bt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(Tt,{onClick:P})}),e.jsx(St,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:c,items:g,onClickEmptyListButton:P,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:Q,text:"Edit"},{icon:e.jsx(pt,{}),onClick:J,text:"Delete"}]}),e.jsx(Ee,{feeRequired:a,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:L,disabled:!V||b,onClick:X}),e.jsx(W,{modalPosition:nt.ON_PARENT,InnerComponent:we,onConfirm:Y,InnerComponentProps:{settingToEdit:x}})]})}he.coreContractChain;function Be(){at.pageview("/channel/settings");const[t,h]=ge.useState(null),S=()=>h(null);return ge.useEffect(()=>{t&&S()},[t]),e.jsx(ie,{children:e.jsx(Re,{})})}let ie,ae;ie=u(ot)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE}
    ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${f.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${O.MINI_MODULES.DESKTOP.RIGHT} - ${O.MINI_MODULES.DESKTOP.LEFT} -
      ${f.ADJUSTMENTS.PADDING.BIG} - ${f.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${f.ADJUSTMENTS.PADDING.BIG};

  @media ${I.laptop} {
    margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${f.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${I.mobileL} {
    margin: ${f.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${f.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${O.MINI_MODULES.MOBILE.RIGHT} - ${O.MINI_MODULES.MOBILE.LEFT} -
        ${f.ADJUSTMENTS.PADDING.DEFAULT} - ${f.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${f.CONSTANTS.HEADER_HEIGHT}px - ${O.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,me=()=>e.jsx(ae,{children:e.jsx(Be,{})}),ae=u(st)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Mt as __tla,me as default};
