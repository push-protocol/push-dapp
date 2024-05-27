import{aV as d,bP as C,bE as le,b0 as f,dV as ce,b4 as t,a$ as Q,bF as Z,bK as ee,bg as R,c4 as de,bJ as te,a_ as ne,bL as y,dN as pe,ba as se,bb as oe,ci as k,dP as he,bU as re,bV as D,cj as ae,ds as ge,dB as ue,gq as xe,__tla as fe}from"./index-BlQK2zRG.js";import{I as be,R as we,__tla as Se}from"./RangeSlider-e6blqciO.js";let E,ie,P,me=Promise.all([(()=>{try{return fe}catch{}})(),(()=>{try{return Se}catch{}})()]).then(async()=>{let $,A,O,B,V,W,F,U,H,N,J,_,K,q,X,Y,z,G;E=({children:n,renderDropdownContainer:r,showDropdown:s,toggleDropdown:g,closeDropdown:o,containerPadding:u,centerOnMobile:l})=>{const c=f.useRef(null),p=f.useRef(null);return ce(c,p,o),t.jsxs($,{ref:c,onClick:g,children:[n,s&&t.jsx(A,{containerPadding:u,centerOnMobile:l,children:t.jsx("div",{ref:p,onClick:e=>e.stopPropagation(),children:r})})]})},$=d.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,A=d(le)`
  background: ${n=>n.theme.settingsModalBackground};
  border: 1px solid;
  border-color: ${n=>n.theme.settingsModalBorderColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
  padding: ${n=>n.containerPadding?n.containerPadding:"7px 14px"};
  position: absolute;
  top: 0rem;
  z-index: 10;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${n=>n.centerOnMobile&&C`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,O=n=>n.type===1,B=({settings:n})=>{let r=[];return n&&n.forEach(s=>O(s)?r.push({enabled:s.user}):r.push({value:s.user,enabled:s.enabled})),r},P=({channelSetting:n})=>{let r=[];return n&&n.forEach(s=>O(s)?r.push({...s,user:s.default}):r.push({...s,user:s.default})),r},V=({settings:n,saveUserSettingHandler:r})=>{const[s,g]=f.useState([...n]),[o,u]=f.useState(!1),l=ne(),c=(e,a)=>{const i=[...s];i[e].user=a,g(i)},p=e=>{const a=[...s];if(a[e].type===1){const i=a[e];i.user=!i.user}else if(a[e].type===2){const i=a[e];i.enabled=!i.enabled}else{const i=a[e];i.enabled=!i.enabled}g(a)};return t.jsxs(F,{children:[s.map((e,a)=>t.jsxs(U,{hasBottomBorder:a!==n.length-1,children:[t.jsxs(H,{children:[t.jsx(y,{color:l.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),t.jsx(pe,{onChange:()=>p(a),checked:e.type===1?e.user:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&t.jsxs(_,{children:[t.jsx(y,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.user||e.default}),t.jsx(be,{val:e.user,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:i})=>c(a,i)})]}),e.type===3&&e.enabled===!0&&t.jsxs(_,{children:[t.jsxs(y,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.user.lower||e.default.lower," - ",e.user.upper||e.default.upper]}),t.jsx(we,{startVal:e.user.lower||e.default.lower,endVal:e.user.upper||e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:i,endVal:j})=>c(a,{lower:i,upper:j})})]})]},a)),t.jsxs(N,{children:[t.jsx(y,{color:l.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(J,{onClick:()=>r({userSettings:s,setLoading:u}),children:[o&&t.jsx(se,{type:oe.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&t.jsx(K,{hideIt:o,children:"Save"})]})]})]})},W=({children:n,centerOnMobile:r,channelDetail:s,channelSetting:g,userSetting:o,onSuccessSave:u})=>{const[l,c]=f.useState(!1),{chainId:p}=Q(),{userPushSDKInstance:e}=Z(w=>w.user),a=ee(),i=p===R.coreContractChain,j=()=>{c(!l)},S=()=>{c(!1)},{handleConnectWallet:I}=f.useContext(de),x=te(),L=async({userSettings:w,setLoading:T})=>{const h=T||(()=>{}),v=u||(()=>{});h(!0);let b=e;if(!b.signer&&(b=await I(),!b)){h(!1);return}try{let m=s.channel;i||(m=s.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await b.notification.subscribe(k(m,p),{settings:B({settings:w}),onSuccess:()=>{v(),S(),a(he({channelAddress:m,settings:o})),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:M=>t.jsx(re,{size:M,color:"green"})})},onError:()=>{console.error("opt in error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:M=>t.jsx(D,{size:M,color:"red"})})}})}catch(m){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${m.message} )`,toastType:"ERROR",getToastIcon:M=>t.jsx(D,{size:M,color:"red"})}),console.error(m)}finally{h(!1)}};return t.jsx(E,{centerOnMobile:r,showDropdown:l,toggleDropdown:j,closeDropdown:S,renderDropdownContainer:t.jsx(V,{settings:o??P({channelSetting:g}),saveUserSettingHandler:L}),containerPadding:"0px 16px 16px 16px",children:n})},F=d.div`
  min-width: 300px;
`,U=d.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${n=>n.hasBottomBorder&&C`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,H=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,N=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,J=d.button`
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
  ${n=>n.disabled&&C`
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
`,_=d.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,K=d.span`
  ${n=>n.hideIt&&C`
      visibility: hidden;
    `};
`,q=({centerOnMobile:n,optOutHandler:r,channelSetting:s,channelDetail:g,userSetting:o,closeDropdown:u})=>{const[l,c]=f.useState(!1),p=ne();return t.jsxs(X,{children:[s&&s.length!=0&&t.jsx(Y,{children:t.jsx(W,{centerOnMobile:n,channelDetail:g,userSetting:o,channelSetting:s,onSuccessSave:u,children:t.jsxs(z,{flexDirection:"row",children:[t.jsx(ae,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),t.jsx(y,{color:p.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),t.jsxs(z,{flexDirection:"row",onClick:()=>r({setLoading:c}),children:[t.jsx(ae,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),t.jsxs(y,{color:p.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[l&&t.jsx(se,{type:oe.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!l&&t.jsx(G,{hideIt:l,children:"Opt-out"})]})]})]})},ie=n=>{const{children:r,centerOnMobile:s,userSetting:g,channelDetail:o}=n,[u,l]=f.useState(!1),{chainId:c,provider:p,account:e}=Q();Z(w=>w.user);const a=ee(),i=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),j=()=>{l(!u)},S=()=>{l(!1)},I=c===R.coreContractChain,x=te(),L=async({setLoading:w})=>{const T=w||(()=>{});T(!0);try{let h=o.channel;I||(h=o.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const v=await p.getSigner(e);await ge.channels.unsubscribe({signer:v,channelAddress:k(h,c),userAddress:k(e,c),onSuccess:()=>{a(ue({channelAddress:h,status:!1})),a(xe(h)),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:b=>t.jsx(re,{size:b,color:"green"})}),S()},onError:()=>{console.error("opt out error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:b=>t.jsx(D,{size:b,color:"red"})})},env:R.pushNodesEnv})}catch(h){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${h.message} )`,toastType:"ERROR",getToastIcon:v=>t.jsx(D,{size:v,color:"red"})}),console.error(h)}finally{T(!1)}};return t.jsx(E,{showDropdown:u,toggleDropdown:j,closeDropdown:S,renderDropdownContainer:t.jsx(q,{centerOnMobile:s,userSetting:g,channelSetting:i,channelDetail:o,optOutHandler:L,closeDropdown:S}),containerPadding:"12px 16px",centerOnMobile:s,children:r})},X=d.div`
  min-width: max-content;
  gap: 16px;
  display: flex;
  flex-direction: column;
`,Y=d.div`
  display: flex;
  flex-direction: column;
`,z=d.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  cursor: pointer;
  gap: 8px;
`,G=d.span`
  ${n=>n.hideIt&&C`
      visibility: hidden;
    `};
`});export{E as D,ie as M,me as __tla,P as u};
