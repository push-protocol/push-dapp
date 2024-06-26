import{q as l,B as v,x as q,D as K,r as x,E as Q,F as X,z as O,H as G,m as t,J as u,X as Z,K as ee,M as te,N as ne,W as ae,O as se,Q as R,T as oe,U as re,V as ie,Y as W,__tla as le}from"./index-jHipGTpH.js";import{D as ce,n as de,g as pe,u as he,__tla as xe}from"./ManageNotifSettingDropdown-CgvbgHU3.js";import{I as ue,R as fe,__tla as ge}from"./RangeSlider-DbMV25sN.js";let $,me=Promise.all([(()=>{try{return le}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return ge}catch{}})()]).then(async()=>{let T,M,E,z,A,L,y,D;T=({settings:o,optInHandler:c})=>{const[n,S]=x.useState([...o]),[i,p]=x.useState(!1),d=Z(),f=(e,a)=>{const s=[...n];s[e].default=a,S(s)},h=e=>{const a=[...n];if(a[e].type===1){const s=a[e];s.default=!s.default}else{const s=a[e];s.enabled=!s.enabled}S(a)};return t.jsxs(M,{children:[n.map((e,a)=>t.jsxs(E,{hasBottomBorder:a!==o.length-1,children:[t.jsxs(z,{children:[t.jsx(u,{color:d.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),t.jsx(ee,{onChange:()=>h(a),checked:e.type===1?e.default:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&t.jsxs(y,{children:[t.jsx(u,{color:d.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.default}),t.jsx(ue,{val:e.default,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:s})=>f(a,s)})]}),e.type===3&&e.enabled===!0&&t.jsxs(y,{children:[t.jsxs(u,{color:d.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.default.lower," - ",e.default.upper]}),t.jsx(fe,{startVal:e.default.lower,endVal:e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:s,endVal:I})=>f(a,{lower:s,upper:I})})]})]},a)),t.jsxs(A,{children:[t.jsx(u,{color:d.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(L,{onClick:()=>c({channelSettings:n,setLoading:p}),children:[i&&t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!i&&t.jsx(D,{hideIt:i,children:"Opt-in"})]})]})]})},$=o=>{const{children:c,channelDetail:n,setLoading:S,onSuccessOptin:i}=o,{chainId:p,provider:d,account:f,wallet:h}=q();K(m=>m.user);const[e,a]=x.useState(!1),s=Q(),{handleConnectWallet:I,connectWallet:F}=x.useContext(X),H=p===O.coreContractChain,j=x.useMemo(()=>n&&(n!=null&&n.channel_settings)?JSON.parse(n==null?void 0:n.channel_settings):null,[n]),N=()=>{a(!e)},P=()=>{a(!1)},g=G(),V=async({channelSettings:m,setLoading:J})=>{var B;const k=J||o&&o.setLoading||(()=>{});k(!0);let C=f,w=d;if(!(((B=h==null?void 0:h.accounts)==null?void 0:B.length)>0)){const r=await F();C=r.accounts[0].address,w=new ae(r.provider,"any")}try{let r=n.channel;H||(r=n.alias_address),g.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const _=await(w==null?void 0:w.getSigner(C)),U=de({settings:m}),Y=pe(U);await se.channels.subscribeV2({signer:_,channelAddress:R(r,p),userAddress:R(C,p),settings:Y,onSuccess:()=>{s(oe({channelAddress:r,status:!0})),s(re({channelAddress:r,settings:he({channelSetting:m})})),g.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:b=>t.jsx(ie,{size:b,color:"green"})}),i==null||i()},onError:()=>{console.error("opt in error"),g.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:b=>t.jsx(W,{size:b,color:"red"})})},env:O.pushNodesEnv})}catch(r){g.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${r.message} )`,toastType:"ERROR",getToastIcon:_=>t.jsx(W,{size:_,color:"red"})}),console.error(r)}finally{k(!1)}};return j&&j.length?t.jsx(ce,{centerOnMobile:!0,showDropdown:e,toggleDropdown:N,closeDropdown:P,renderDropdownContainer:t.jsx(T,{settings:j,optInHandler:V}),containerPadding:"0px 16px 16px 16px",children:c}):t.jsx(u,{onClick:V,children:c})},M=l.div`
  min-width: 300px;
`,E=l.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${o=>o.hasBottomBorder&&v`
      border-bottom: 1px solid ${c=>c.theme.settingsModalBorderBottomColor};
    `}
`,z=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,A=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,L=l.button`
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
`,y=l.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,D=l.span`
  ${o=>o.hideIt&&v`
      visibility: hidden;
    `};
`});export{$ as O,me as __tla};
