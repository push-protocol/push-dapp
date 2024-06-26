import{q as u,B as E,eb as xe,r as f,ec as fe,m as n,x as se,D as oe,E as re,z as P,F as we,H as ae,X as ie,J as j,K as Se,M as le,N as de,Q as A,U as me,V as ce,Y as I,dz as pe,O as be,T as ye,ed as je,__tla as ve}from"./index-C1_cl0G3.js";import{I as Me,R as Ce,__tla as Te}from"./RangeSlider-Y6MPtG-U.js";let _,ue,he,ge,$,De=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let B,W,O,V,S,k,H,U,F,N,J,K,X,Y,q,Q,R,G,Z,ee,te,L,ne;_=({children:e,renderDropdownContainer:r,showDropdown:s,toggleDropdown:a,closeDropdown:o,containerPadding:h,centerOnMobile:i})=>{const p=f.useRef(null),c=f.useRef(null);return fe(p,c,o),n.jsxs(B,{ref:p,onClick:a,children:[e,s&&n.jsx(W,{containerPadding:h,centerOnMobile:i,children:n.jsx("div",{ref:c,onClick:t=>t.stopPropagation(),children:r})})]})},B=u.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,W=u(xe)`
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
`,O=e=>e.type===1,ge=({settings:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({enabled:s.default}):r.push({value:s.default,enabled:s.enabled})),r},V=({settings:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({enabled:s.user}):r.push({value:s.user,enabled:s.enabled})),r},$=({channelSetting:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({...s,user:s.default}):r.push({...s,user:s.default})),r},S="-",k="+",H=3,U=2,F=1,he=e=>{if(!e)return null;let r=0;const s=e.reduce((a,o,h)=>{var p,c;const i=o.enabled?1:0;return o.enabled&&r++,Object.keys(o).includes("value")?typeof o.value=="number"?a=a+U+S+i+S+o.value:a=a+H+S+i+S+((p=o.value)==null?void 0:p.lower)+S+((c=o.value)==null?void 0:c.upper):a=a+F+S+i,h!==e.length-1&&(a=a+k),a},"");return r+k+s},N=({settings:e,saveUserSettingHandler:r})=>{const[s,a]=f.useState([...e]),[o,h]=f.useState(!1),i=ie(),p=(t,d)=>{const l=[...s];l[t].user=d,a(l)},c=t=>{const d=[...s];if(d[t].type===1){const l=d[t];l.user=!l.user}else if(d[t].type===2){const l=d[t];l.enabled=!l.enabled}else{const l=d[t];l.enabled=!l.enabled}a(d)};return n.jsxs(K,{children:[s.map((t,d)=>n.jsxs(X,{hasBottomBorder:d!==e.length-1,children:[n.jsxs(Y,{children:[n.jsx(j,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:t.description}),n.jsx(Se,{onChange:()=>c(d),checked:t.type===1?t.user:t.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),t.type===2&&t.enabled===!0&&n.jsxs(R,{children:[n.jsx(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:t.user||t.default}),n.jsx(Me,{val:t.user,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultVal:t.default,onChange:({x:l})=>p(d,l)})]}),t.type===3&&t.enabled===!0&&n.jsxs(R,{children:[n.jsxs(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[t.user.lower||t.default.lower," - ",t.user.upper||t.default.upper]}),n.jsx(Ce,{startVal:t.user.lower||t.default.lower,endVal:t.user.upper||t.default.upper,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultStartVal:t.default.lower,defaultEndVal:t.default.upper,onChange:({startVal:l,endVal:v})=>p(d,{lower:l,upper:v})})]})]},d)),n.jsxs(q,{children:[n.jsx(j,{color:i.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(Q,{onClick:()=>r({userSettings:s,setLoading:h}),children:[o&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&n.jsx(G,{hideIt:o,children:"Save"})]})]})]})},J=({children:e,centerOnMobile:r,channelDetail:s,channelSetting:a,userSetting:o,onSuccessSave:h})=>{const[i,p]=f.useState(!1),{chainId:c}=se(),{userPushSDKInstance:t}=oe(C=>C.user),d=re(),l=c===P.coreContractChain,v=()=>{p(!i)},z=()=>{p(!1)},{handleConnectWallet:M}=f.useContext(we),m=ae(),b=async({userSettings:C,setLoading:T})=>{const y=T||(()=>{}),x=h||(()=>{});y(!0);let w=t;if(!w.signer&&(w=await M(),!w)){y(!1);return}try{let g=s.channel;l||(g=s.alias_address),m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await w.notification.subscribe(A(g,c),{settings:V({settings:C}),onSuccess:()=>{x(),z(),d(me({channelAddress:g,settings:o})),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:D=>n.jsx(ce,{size:D,color:"green"})})},onError:()=>{console.error("opt in error"),m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:D=>n.jsx(I,{size:D,color:"red"})})}})}catch(g){m.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${g.message} )`,toastType:"ERROR",getToastIcon:D=>n.jsx(I,{size:D,color:"red"})}),console.error(g)}finally{y(!1)}};return n.jsx(_,{centerOnMobile:r,showDropdown:i,toggleDropdown:v,closeDropdown:z,renderDropdownContainer:n.jsx(N,{settings:o??$({channelSetting:a}),saveUserSettingHandler:b}),containerPadding:"0px 16px 16px 16px",children:e})},K=u.div`
  min-width: 300px;
`,X=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&E`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,Y=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,q=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Q=u.button`
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
`,R=u.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,G=u.span`
  ${e=>e.hideIt&&E`
      visibility: hidden;
    `};
`,Z=({centerOnMobile:e,optOutHandler:r,channelSetting:s,channelDetail:a,userSetting:o,closeDropdown:h})=>{const[i,p]=f.useState(!1),c=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(J,{centerOnMobile:e,channelDetail:a,userSetting:o,channelSetting:s,onSuccessSave:h,children:n.jsxs(L,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(j,{color:c.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(L,{flexDirection:"row",onClick:()=>r({setLoading:p}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(j,{color:c.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#000"}),!i&&n.jsx(ne,{hideIt:i,children:"Opt-out"})]})]})]})},ue=e=>{const{children:r,centerOnMobile:s,userSetting:a,channelDetail:o,onSuccessOptout:h}=e,[i,p]=f.useState(!1),{chainId:c,provider:t,account:d}=se();oe(T=>T.user);const l=re(),v=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),z=()=>{p(!i)},M=()=>{p(!1)},m=c===P.coreContractChain,b=ae(),C=async({setLoading:T})=>{const y=T||(()=>{});y(!0);try{let x=o.channel;m||(x=o.alias_address),b.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const w=await t.getSigner(d);await be.channels.unsubscribe({signer:w,channelAddress:A(x,c),userAddress:A(d,c),onSuccess:()=>{l(ye({channelAddress:x,status:!1})),l(je(x)),b.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:g=>n.jsx(ce,{size:g,color:"green"})}),h(),M()},onError:()=>{console.error("opt out error"),b.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:g=>n.jsx(I,{size:g,color:"red"})})},env:P.pushNodesEnv})}catch(x){b.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${x.message} )`,toastType:"ERROR",getToastIcon:w=>n.jsx(I,{size:w,color:"red"})}),console.error(x)}finally{y(!1)}};return n.jsx(_,{showDropdown:i,toggleDropdown:z,closeDropdown:M,renderDropdownContainer:n.jsx(Z,{centerOnMobile:s,userSetting:a,channelSetting:v,channelDetail:o,optOutHandler:C,closeDropdown:M}),containerPadding:"12px 16px",centerOnMobile:s,children:r})},ee=u.div`
  min-width: max-content;
  gap: 16px;
  display: flex;
  flex-direction: column;
`,te=u.div`
  display: flex;
  flex-direction: column;
`,L=u.button`
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
`});export{_ as D,ue as M,De as __tla,he as g,ge as n,$ as u};
