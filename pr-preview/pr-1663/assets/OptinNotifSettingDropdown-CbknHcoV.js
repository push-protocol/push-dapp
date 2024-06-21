import{aV as l,bP as v,a$ as K,bF as Z,b0 as g,bK as q,c4 as G,bg as O,bJ as Q,b4 as t,bL as u,a_ as X,gY as ee,ba as te,bb as ne,g$ as se,ds as ae,ci as R,dB as oe,gZ as re,bU as ie,bV as W,__tla as le}from"./index-C5SW-GWn.js";import{D as ce,n as de,g as pe,u as he,__tla as ge}from"./ManageNotifSettingDropdown-DJygICWB.js";import{I as ue,R as fe,__tla as xe}from"./RangeSlider-fSK2vwid.js";let $,me=Promise.all([(()=>{try{return le}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return xe}catch{}})()]).then(async()=>{let T,M,L,A,E,z,w,I;T=({settings:o,optInHandler:c})=>{const[n,y]=g.useState([...o]),[i,p]=g.useState(!1),d=X(),f=(e,s)=>{const a=[...n];a[e].default=s,y(a)},h=e=>{const s=[...n];if(s[e].type===1){const a=s[e];a.default=!a.default}else{const a=s[e];a.enabled=!a.enabled}y(s)};return t.jsxs(M,{children:[n.map((e,s)=>t.jsxs(L,{hasBottomBorder:s!==o.length-1,children:[t.jsxs(A,{children:[t.jsx(u,{color:d.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),t.jsx(ee,{onChange:()=>h(s),checked:e.type===1?e.default:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&t.jsxs(w,{children:[t.jsx(u,{color:d.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.default}),t.jsx(ue,{val:e.default,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:a})=>f(s,a)})]}),e.type===3&&e.enabled===!0&&t.jsxs(w,{children:[t.jsxs(u,{color:d.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.default.lower," - ",e.default.upper]}),t.jsx(fe,{startVal:e.default.lower,endVal:e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:a,endVal:V})=>f(s,{lower:a,upper:V})})]})]},s)),t.jsxs(E,{children:[t.jsx(u,{color:d.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(z,{onClick:()=>c({channelSettings:n,setLoading:p}),children:[i&&t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!i&&t.jsx(I,{hideIt:i,children:"Opt-in"})]})]})]})},$=o=>{const{children:c,channelDetail:n,setLoading:y,onSuccessOptin:i}=o,{chainId:p,provider:d,account:f,wallet:h}=K();Z(m=>m.user);const[e,s]=g.useState(!1),a=q(),{handleConnectWallet:V,connectWallet:F}=g.useContext(G),P=p===O.coreContractChain,S=g.useMemo(()=>n&&(n!=null&&n.channel_settings)?JSON.parse(n==null?void 0:n.channel_settings):null,[n]),H=()=>{s(!e)},J=()=>{s(!1)},x=Q(),k=async({channelSettings:m,setLoading:N})=>{var D;const B=N||o&&o.setLoading||(()=>{});B(!0);let j=f,b=d;if(!(((D=h==null?void 0:h.accounts)==null?void 0:D.length)>0)){const r=await F();j=r.accounts[0].address,b=new se(r.provider,"any")}try{let r=n.channel;P||(r=n.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const _=await(b==null?void 0:b.getSigner(j)),U=de({settings:m}),Y=pe(U);await ae.channels.subscribeV2({signer:_,channelAddress:R(r,p),userAddress:R(j,p),settings:Y,onSuccess:()=>{a(oe({channelAddress:r,status:!0})),a(re({channelAddress:r,settings:he({channelSetting:m})})),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:C=>t.jsx(ie,{size:C,color:"green"})}),i==null||i()},onError:()=>{console.error("opt in error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:C=>t.jsx(W,{size:C,color:"red"})})},env:O.pushNodesEnv})}catch(r){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${r.message} )`,toastType:"ERROR",getToastIcon:_=>t.jsx(W,{size:_,color:"red"})}),console.error(r)}finally{B(!1)}};return S&&S.length?t.jsx(ce,{centerOnMobile:!0,showDropdown:e,toggleDropdown:H,closeDropdown:J,renderDropdownContainer:t.jsx(T,{settings:S,optInHandler:k}),containerPadding:"0px 16px 16px 16px",children:c}):t.jsx(u,{onClick:k,children:c})},M=l.div`
  min-width: 300px;
`,L=l.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${o=>o.hasBottomBorder&&v`
      border-bottom: 1px solid ${c=>c.theme.settingsModalBorderBottomColor};
    `}
`,A=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,E=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,z=l.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  min-width: 90px;
  justify-content: center;
  margin: 0px 0px 0px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  background: #e20880;
  border-radius: 8px;
  padding: 9px 20px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${o=>o.disabled&&v`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`,w=l.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,I=l.span`
  ${o=>o.hideIt&&v`
      visibility: hidden;
    `};
`});export{$ as O,me as __tla};
