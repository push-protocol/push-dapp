import{aV as u,bP as E,bE as xe,b0 as f,dT as fe,b4 as n,a$ as se,bF as oe,bK as re,bg as P,c4 as be,bJ as ae,a_ as ie,bL as j,gY as we,ba as le,bb as de,ci as $,gZ as Se,bU as ce,bV as z,cj as pe,ds as me,dB as ye,g_ as je,__tla as ve}from"./index-BFuqjQRj.js";import{I as Ce,R as Me,__tla as Te}from"./RangeSlider-aMuA_JUY.js";let k,ue,ge,he,A,De=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let B,V,O,W,w,I,U,F,H,J,K,N,Y,X,Z,q,L,G,Q,ee,te,R,ne;k=({children:e,renderDropdownContainer:r,showDropdown:s,toggleDropdown:a,closeDropdown:o,containerPadding:g,centerOnMobile:i})=>{const p=f.useRef(null),c=f.useRef(null);return fe(p,c,o),n.jsxs(B,{ref:p,onClick:a,children:[e,s&&n.jsx(V,{containerPadding:g,centerOnMobile:i,children:n.jsx("div",{ref:c,onClick:t=>t.stopPropagation(),children:r})})]})},B=u.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,V=u(xe)`
  background: ${e=>e.theme.settingsModalBackground};
  border: 1px solid;
  border-color: ${e=>e.theme.settingsModalBorderColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
  padding: ${e=>e.containerPadding?e.containerPadding:"7px 14px"};
  position: absolute;
  top: 0rem;
  z-index: 10000;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${e=>e.centerOnMobile&&E`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,O=e=>e.type===1,he=({settings:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({enabled:s.default}):r.push({value:s.default,enabled:s.enabled})),r},W=({settings:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({enabled:s.user}):r.push({value:s.user,enabled:s.enabled})),r},A=({channelSetting:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({...s,user:s.default}):r.push({...s,user:s.default})),r},w="-",I="+",U=3,F=2,H=1,ge=e=>{if(!e)return null;let r=0;const s=e.reduce((a,o,g)=>{var p,c;const i=o.enabled?1:0;return o.enabled&&r++,Object.keys(o).includes("value")?typeof o.value=="number"?a=a+F+w+i+w+o.value:a=a+U+w+i+w+((p=o.value)==null?void 0:p.lower)+w+((c=o.value)==null?void 0:c.upper):a=a+H+w+i,g!==e.length-1&&(a=a+I),a},"");return r+I+s},J=({settings:e,saveUserSettingHandler:r})=>{const[s,a]=f.useState([...e]),[o,g]=f.useState(!1),i=ie(),p=(t,d)=>{const l=[...s];l[t].user=d,a(l)},c=t=>{const d=[...s];if(d[t].type===1){const l=d[t];l.user=!l.user}else if(d[t].type===2){const l=d[t];l.enabled=!l.enabled}else{const l=d[t];l.enabled=!l.enabled}a(d)};return n.jsxs(N,{children:[s.map((t,d)=>n.jsxs(Y,{hasBottomBorder:d!==e.length-1,children:[n.jsxs(X,{children:[n.jsx(j,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:t.description}),n.jsx(we,{onChange:()=>c(d),checked:t.type===1?t.user:t.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),t.type===2&&t.enabled===!0&&n.jsxs(L,{children:[n.jsx(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:t.user||t.default}),n.jsx(Ce,{val:t.user,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultVal:t.default,onChange:({x:l})=>p(d,l)})]}),t.type===3&&t.enabled===!0&&n.jsxs(L,{children:[n.jsxs(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[t.user.lower||t.default.lower," - ",t.user.upper||t.default.upper]}),n.jsx(Me,{startVal:t.user.lower||t.default.lower,endVal:t.user.upper||t.default.upper,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultStartVal:t.default.lower,defaultEndVal:t.default.upper,onChange:({startVal:l,endVal:v})=>p(d,{lower:l,upper:v})})]})]},d)),n.jsxs(Z,{children:[n.jsx(j,{color:i.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(q,{onClick:()=>r({userSettings:s,setLoading:g}),children:[o&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&n.jsx(G,{hideIt:o,children:"Save"})]})]})]})},K=({children:e,centerOnMobile:r,channelDetail:s,channelSetting:a,userSetting:o,onSuccessSave:g})=>{const[i,p]=f.useState(!1),{chainId:c}=se(),{userPushSDKInstance:t}=oe(M=>M.user),d=re(),l=c===P.coreContractChain,v=()=>{p(!i)},_=()=>{p(!1)},{handleConnectWallet:C}=f.useContext(be),S=ae(),m=async({userSettings:M,setLoading:T})=>{const y=T||(()=>{}),x=g||(()=>{});y(!0);let b=t;if(!b.signer&&(b=await C(),!b)){y(!1);return}try{let h=s.channel;l||(h=s.alias_address),S.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await b.notification.subscribe($(h,c),{settings:W({settings:M}),onSuccess:()=>{x(),_(),d(Se({channelAddress:h,settings:o})),S.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:D=>n.jsx(ce,{size:D,color:"green"})})},onError:()=>{console.error("opt in error"),S.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:D=>n.jsx(z,{size:D,color:"red"})})}})}catch(h){S.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${h.message} )`,toastType:"ERROR",getToastIcon:D=>n.jsx(z,{size:D,color:"red"})}),console.error(h)}finally{y(!1)}};return n.jsx(k,{centerOnMobile:r,showDropdown:i,toggleDropdown:v,closeDropdown:_,renderDropdownContainer:n.jsx(J,{settings:o??A({channelSetting:a}),saveUserSettingHandler:m}),containerPadding:"0px 16px 16px 16px",children:e})},N=u.div`
  min-width: 300px;
`,Y=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&E`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,X=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Z=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,q=u.button`
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
  ${e=>e.disabled&&E`
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
`,L=u.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,G=u.span`
  ${e=>e.hideIt&&E`
      visibility: hidden;
    `};
`,Q=({centerOnMobile:e,optOutHandler:r,channelSetting:s,channelDetail:a,userSetting:o,closeDropdown:g})=>{const[i,p]=f.useState(!1),c=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(K,{centerOnMobile:e,channelDetail:a,userSetting:o,channelSetting:s,onSuccessSave:g,children:n.jsxs(R,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(j,{color:c.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(R,{flexDirection:"row",onClick:()=>r({setLoading:p}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(j,{color:c.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#000"}),!i&&n.jsx(ne,{hideIt:i,children:"Opt-out"})]})]})]})},ue=e=>{const{children:r,centerOnMobile:s,userSetting:a,channelDetail:o,onSuccessOptout:g}=e,[i,p]=f.useState(!1),{chainId:c,provider:t,account:d}=se();oe(T=>T.user);const l=re(),v=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),_=()=>{p(!i)},C=()=>{p(!1)},S=c===P.coreContractChain,m=ae(),M=async({setLoading:T})=>{const y=T||(()=>{});y(!0);try{let x=o.channel;S||(x=o.alias_address),m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const b=await t.getSigner(d);await me.channels.unsubscribe({signer:b,channelAddress:$(x,c),userAddress:$(d,c),onSuccess:()=>{l(ye({channelAddress:x,status:!1})),l(je(x)),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:h=>n.jsx(ce,{size:h,color:"green"})}),g(),C()},onError:()=>{console.error("opt out error"),m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:h=>n.jsx(z,{size:h,color:"red"})})},env:P.pushNodesEnv})}catch(x){m.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${x.message} )`,toastType:"ERROR",getToastIcon:b=>n.jsx(z,{size:b,color:"red"})}),console.error(x)}finally{y(!1)}};return n.jsx(k,{showDropdown:i,toggleDropdown:_,closeDropdown:C,renderDropdownContainer:n.jsx(Q,{centerOnMobile:s,userSetting:a,channelSetting:v,channelDetail:o,optOutHandler:M,closeDropdown:C}),containerPadding:"12px 16px",centerOnMobile:s,children:r})},ee=u.div`
  min-width: max-content;
  gap: 16px;
  display: flex;
  flex-direction: column;
`,te=u.div`
  display: flex;
  flex-direction: column;
`,R=u.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  cursor: pointer;
  gap: 8px;
`,ne=u.span`
  ${e=>e.hideIt&&E`
      visibility: hidden;
    `};
`});export{k as D,ue as M,De as __tla,ge as g,he as n,A as u};
