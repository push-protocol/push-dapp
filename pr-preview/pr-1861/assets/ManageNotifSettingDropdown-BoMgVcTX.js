import{ea as d,ek as O,fF as re,d_ as f,fG as ae,e1 as t,dY as G,ff as Q,fe as X,eg as k,fH as ie,fI as q,e5 as Z,eU as v,fJ as le,fK as ce,fL as de,el as pe,ep as ge,e3 as ee,e4 as te,fM as P,fN as he,fO as ne,fP as E,f4 as se,fQ as ue,fR as xe,fS as fe,__tla as we}from"./index-DnYMDEqQ.js";import{u as Se,n as me}from"./notifSetting-DrLKauYy.js";let oe,je=Promise.all([(()=>{try{return we}catch{}})()]).then(async()=>{let I,A,_,$,B,W,V,H,U,z,F,N,J,K,L,Y;I=({children:n,renderDropdownContainer:p,showDropdown:a,toggleDropdown:g,closeDropdown:s,containerPadding:u,centerOnMobile:i})=>{const c=f.useRef(null),l=f.useRef(null);return ae(c,l,s),t.jsxs(A,{ref:c,onClick:g,children:[n,a&&t.jsx(_,{containerPadding:u,centerOnMobile:i,children:t.jsx("div",{ref:l,onClick:e=>e.stopPropagation(),children:p})})]})},A=d.span`
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
    ${n=>n.centerOnMobile&&O`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,$=({settings:n,saveUserSettingHandler:p})=>{const[a,g]=f.useState([...n]),[s,u]=f.useState(!1),i=Z(),c=(e,o)=>{const r=[...a];r[e].user=o,g(r)},l=e=>{const o=[...a];if(o[e].type===1){const r=o[e];r.user=!r.user}else if(o[e].type===2){const r=o[e];r.enabled=!r.enabled}else{const r=o[e];r.enabled=!r.enabled}g(o)};return t.jsxs(W,{children:[a.map((e,o)=>t.jsxs(V,{hasBottomBorder:o!==n.length-1,children:[t.jsxs(H,{children:[t.jsx(v,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),t.jsx(le,{onChange:()=>l(o),checked:e.type===1?e.user:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&t.jsxs(z,{children:[t.jsx(v,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.user||e.default}),t.jsx(ce,{val:e.user,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:r})=>c(o,r)})]}),e.type===3&&e.enabled===!0&&t.jsxs(z,{children:[t.jsxs(v,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.user.lower||e.default.lower," - ",e.user.upper||e.default.upper]}),t.jsx(de,{startVal:e.user.lower||e.default.lower,endVal:e.user.upper||e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:r,endVal:S})=>c(o,{lower:r,upper:S})})]})]},o)),t.jsxs(U,{children:[t.jsx(pe,{variant:"bs-semibold",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(ge,{variant:"primary",size:"extraSmall",onClick:()=>p({userSettings:a,setLoading:u}),children:[s&&t.jsx(ee,{type:te.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!s&&t.jsx(F,{hideIt:s,children:"Save"})]})]})]})},B=({children:n,centerOnMobile:p,channelDetail:a,channelSetting:g,userSetting:s,onSuccessSave:u})=>{const[i,c]=f.useState(!1),{chainId:l,wallet:e}=G(),{userPushSDKInstance:o}=Q(C=>C.user),r=X(),S=l===k.coreContractChain,R=()=>{c(!i)},D=()=>{c(!1)},{handleConnectWalletAndEnableProfile:y}=f.useContext(ie),m=q(),j=async({userSettings:C,setLoading:M})=>{const b=M||(()=>{}),x=u||(()=>{});b(!0);let w=o;if(!w.signer&&(w=await y({wallet:e}),!w)){b(!1);return}try{let h=a.channel;S||(h=a.alias_address),m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await w.notification.subscribe(P(h,l),{settings:me({settings:C}),onSuccess:()=>{x(),D(),r(he({channelAddress:h,settings:s})),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:T=>t.jsx(ne,{size:T,color:"green"})})},onError:()=>{console.error("opt in error"),m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:T=>t.jsx(E,{size:T,color:"red"})})}})}catch(h){m.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${h.message} )`,toastType:"ERROR",getToastIcon:T=>t.jsx(E,{size:T,color:"red"})}),console.error(h)}finally{b(!1)}};return t.jsx(I,{centerOnMobile:p,showDropdown:i,toggleDropdown:R,closeDropdown:D,renderDropdownContainer:t.jsx($,{settings:s??Se({channelSetting:g}),saveUserSettingHandler:j}),containerPadding:"0px 16px 16px 16px",children:n})},W=d.div`
  min-width: 300px;
`,V=d.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${n=>n.hasBottomBorder&&O`
      border-bottom: 1px solid ${p=>p.theme.settingsModalBorderBottomColor};
    `}
`,H=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,U=d.div`
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
`,F=d.span`
  ${n=>n.hideIt&&O`
      visibility: hidden;
    `};
`,N=({centerOnMobile:n,optOutHandler:p,channelSetting:a,channelDetail:g,userSetting:s,closeDropdown:u})=>{const[i,c]=f.useState(!1),l=Z();return t.jsxs(J,{children:[a&&a.length!=0&&t.jsx(K,{children:t.jsx(B,{centerOnMobile:n,channelDetail:g,userSetting:s,channelSetting:a,onSuccessSave:u,children:t.jsxs(L,{flexDirection:"row",children:[t.jsx(se,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),t.jsx(v,{color:l.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),t.jsxs(L,{flexDirection:"row",onClick:()=>p({setLoading:c}),children:[t.jsx(se,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),t.jsxs(v,{color:l.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&t.jsx(ee,{type:te.SEAMLESS,spinnerSize:16,spinnerColor:"#000"}),!i&&t.jsx(Y,{hideIt:i,children:"Opt-out"})]})]})]})},oe=n=>{const{children:p,centerOnMobile:a,userSetting:g,channelDetail:s,onSuccessOptout:u}=n,[i,c]=f.useState(!1),{chainId:l,provider:e,account:o,wallet:r}=G();Q(M=>M.user);const S=X(),R=f.useMemo(()=>s&&(s!=null&&s.channel_settings)?JSON.parse(s==null?void 0:s.channel_settings):null,[s]),D=()=>{c(!i)},y=()=>{c(!1)},m=l===k.coreContractChain,j=q(),C=async({setLoading:M})=>{const b=M||(()=>{});b(!0);try{let x=s.channel;m||(x=s.alias_address),j.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const w=await e.getSigner(o);await ue.channels.unsubscribe({signer:w,channelAddress:P(x,l),userAddress:P(o,l),onSuccess:()=>{S(xe({channelAddress:x,status:!1})),S(fe(x)),j.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:h=>t.jsx(ne,{size:h,color:"green"})}),u(),y()},onError:()=>{console.error("opt out error"),j.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:h=>t.jsx(E,{size:h,color:"red"})})},env:k.pushNodesEnv})}catch(x){j.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${x.message} )`,toastType:"ERROR",getToastIcon:w=>t.jsx(E,{size:w,color:"red"})}),console.error(x)}finally{b(!1)}};return t.jsx(I,{showDropdown:i,toggleDropdown:D,closeDropdown:y,renderDropdownContainer:t.jsx(N,{centerOnMobile:a,userSetting:g,channelSetting:R,channelDetail:s,optOutHandler:C,closeDropdown:y}),containerPadding:"12px 16px",centerOnMobile:a,children:p})},J=d.div`
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
`,Y=d.span`
  ${n=>n.hideIt&&O`
      visibility: hidden;
    `};
`});export{oe as M,je as __tla};
