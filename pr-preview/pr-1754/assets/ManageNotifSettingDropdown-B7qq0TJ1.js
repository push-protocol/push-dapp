import{b6 as d,bq as E,cz as re,a_ as f,cA as ae,b1 as t,aY as q,b$ as G,b_ as X,bi as R,cB as ie,cC as Q,b9 as Z,bT as v,cD as le,cE as ce,cF as de,bp as pe,bY as ge,b3 as ee,b4 as te,cG as k,cH as he,cI as ne,cJ as O,c2 as se,cK as xe,cL as ue,cM as fe,__tla as we}from"./index-BDlt8b4E.js";import{u as Se,n as me}from"./notifSetting-DrLKauYy.js";let I,oe,be=Promise.all([(()=>{try{return we}catch{}})()]).then(async()=>{let P,_,$,B,W,V,H,F,z,U,Y,J,K,L,N;I=({children:n,renderDropdownContainer:p,showDropdown:a,toggleDropdown:g,closeDropdown:s,containerPadding:x,centerOnMobile:i})=>{const c=f.useRef(null),l=f.useRef(null);return ae(c,l,s),t.jsxs(P,{ref:c,onClick:g,children:[n,a&&t.jsx(_,{containerPadding:x,centerOnMobile:i,children:t.jsx("div",{ref:l,onClick:e=>e.stopPropagation(),children:p})})]})},P=d.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,_=d(re)`
  background: ${n=>n.theme.settingsModalBackground};
  border: 1px solid;
  border-color: ${n=>n.theme.settingsModalBorderColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
  padding: ${n=>n.containerPadding?n.containerPadding:"7px 14px"};
  position: absolute;
  top: 0rem;
  z-index: 10000;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${n=>n.centerOnMobile&&E`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,$=({settings:n,saveUserSettingHandler:p})=>{const[a,g]=f.useState([...n]),[s,x]=f.useState(!1),i=Z(),c=(e,o)=>{const r=[...a];r[e].user=o,g(r)},l=e=>{const o=[...a];if(o[e].type===1){const r=o[e];r.user=!r.user}else if(o[e].type===2){const r=o[e];r.enabled=!r.enabled}else{const r=o[e];r.enabled=!r.enabled}g(o)};return t.jsxs(W,{children:[a.map((e,o)=>t.jsxs(V,{hasBottomBorder:o!==n.length-1,children:[t.jsxs(H,{children:[t.jsx(v,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),t.jsx(le,{onChange:()=>l(o),checked:e.type===1?e.user:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&t.jsxs(z,{children:[t.jsx(v,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.user||e.default}),t.jsx(ce,{val:e.user,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:r})=>c(o,r)})]}),e.type===3&&e.enabled===!0&&t.jsxs(z,{children:[t.jsxs(v,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.user.lower||e.default.lower," - ",e.user.upper||e.default.upper]}),t.jsx(de,{startVal:e.user.lower||e.default.lower,endVal:e.user.upper||e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:r,endVal:S})=>c(o,{lower:r,upper:S})})]})]},o)),t.jsxs(F,{children:[t.jsx(pe,{variant:"bs-semibold",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(ge,{variant:"primary",size:"extraSmall",onClick:()=>p({userSettings:a,setLoading:x}),children:[s&&t.jsx(ee,{type:te.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!s&&t.jsx(U,{hideIt:s,children:"Save"})]})]})]})},B=({children:n,centerOnMobile:p,channelDetail:a,channelSetting:g,userSetting:s,onSuccessSave:x})=>{const[i,c]=f.useState(!1),{chainId:l,wallet:e}=q(),{userPushSDKInstance:o}=G(C=>C.user),r=X(),S=l===R.coreContractChain,A=()=>{c(!i)},D=()=>{c(!1)},{handleConnectWalletAndEnableProfile:y}=f.useContext(ie),m=Q(),b=async({userSettings:C,setLoading:M})=>{const j=M||(()=>{}),u=x||(()=>{});j(!0);let w=o;if(!w.signer&&(w=await y({wallet:e}),!w)){j(!1);return}try{let h=a.channel;S||(h=a.alias_address),m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await w.notification.subscribe(k(h,l),{settings:me({settings:C}),onSuccess:()=>{u(),D(),r(he({channelAddress:h,settings:s})),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:T=>t.jsx(ne,{size:T,color:"green"})})},onError:()=>{console.error("opt in error"),m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:T=>t.jsx(O,{size:T,color:"red"})})}})}catch(h){m.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${h.message} )`,toastType:"ERROR",getToastIcon:T=>t.jsx(O,{size:T,color:"red"})}),console.error(h)}finally{j(!1)}};return t.jsx(I,{centerOnMobile:p,showDropdown:i,toggleDropdown:A,closeDropdown:D,renderDropdownContainer:t.jsx($,{settings:s??Se({channelSetting:g}),saveUserSettingHandler:b}),containerPadding:"0px 16px 16px 16px",children:n})},W=d.div`
  min-width: 300px;
`,V=d.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${n=>n.hasBottomBorder&&E`
      border-bottom: 1px solid ${p=>p.theme.settingsModalBorderBottomColor};
    `}
`,H=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,F=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,z=d.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,U=d.span`
  ${n=>n.hideIt&&E`
      visibility: hidden;
    `};
`,Y=({centerOnMobile:n,optOutHandler:p,channelSetting:a,channelDetail:g,userSetting:s,closeDropdown:x})=>{const[i,c]=f.useState(!1),l=Z();return t.jsxs(J,{children:[a&&a.length!=0&&t.jsx(K,{children:t.jsx(B,{centerOnMobile:n,channelDetail:g,userSetting:s,channelSetting:a,onSuccessSave:x,children:t.jsxs(L,{flexDirection:"row",children:[t.jsx(se,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),t.jsx(v,{color:l.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),t.jsxs(L,{flexDirection:"row",onClick:()=>p({setLoading:c}),children:[t.jsx(se,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),t.jsxs(v,{color:l.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&t.jsx(ee,{type:te.SEAMLESS,spinnerSize:16,spinnerColor:"#000"}),!i&&t.jsx(N,{hideIt:i,children:"Opt-out"})]})]})]})},oe=n=>{const{children:p,centerOnMobile:a,userSetting:g,channelDetail:s,onSuccessOptout:x}=n,[i,c]=f.useState(!1),{chainId:l,provider:e,account:o,wallet:r}=q();G(M=>M.user);const S=X(),A=f.useMemo(()=>s&&(s!=null&&s.channel_settings)?JSON.parse(s==null?void 0:s.channel_settings):null,[s]),D=()=>{c(!i)},y=()=>{c(!1)},m=l===R.coreContractChain,b=Q(),C=async({setLoading:M})=>{const j=M||(()=>{});j(!0);try{let u=s.channel;m||(u=s.alias_address),b.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const w=await e.getSigner(o);await xe.channels.unsubscribe({signer:w,channelAddress:k(u,l),userAddress:k(o,l),onSuccess:()=>{S(ue({channelAddress:u,status:!1})),S(fe(u)),b.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:h=>t.jsx(ne,{size:h,color:"green"})}),x(),y()},onError:()=>{console.error("opt out error"),b.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:h=>t.jsx(O,{size:h,color:"red"})})},env:R.pushNodesEnv})}catch(u){b.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${u.message} )`,toastType:"ERROR",getToastIcon:w=>t.jsx(O,{size:w,color:"red"})}),console.error(u)}finally{j(!1)}};return t.jsx(I,{showDropdown:i,toggleDropdown:D,closeDropdown:y,renderDropdownContainer:t.jsx(Y,{centerOnMobile:a,userSetting:g,channelSetting:A,channelDetail:s,optOutHandler:C,closeDropdown:y}),containerPadding:"12px 16px",centerOnMobile:a,children:p})},J=d.div`
  min-width: max-content;
  gap: 16px;
  display: flex;
  flex-direction: column;
`,K=d.div`
  display: flex;
  flex-direction: column;
`,L=d.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  cursor: pointer;
  gap: 8px;
`,N=d.span`
  ${n=>n.hideIt&&E`
      visibility: hidden;
    `};
`});export{I as D,oe as M,be as __tla};
