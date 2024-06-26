import{q as u,B as D,eb as xe,r as f,ec as fe,m as n,x as se,D as oe,E as re,z as P,F as we,H as ae,X as ie,J as E,K as Se,ed as me,M as le,N as de,Q as A,U as be,V as ce,Y as k,dz as pe,O as ye,T as je,ee as ve,__tla as Ce}from"./index-jHipGTpH.js";import{I as Me,R as Te,__tla as De}from"./RangeSlider-DbMV25sN.js";let I,ue,he,ge,$,Ee=Promise.all([(()=>{try{return Ce}catch{}})(),(()=>{try{return De}catch{}})()]).then(async()=>{let B,V,O,W,S,_,H,U,F,N,J,K,X,Y,q,Q,R,G,Z,ee,te,L,ne;I=({children:e,renderDropdownContainer:r,showDropdown:s,toggleDropdown:a,closeDropdown:o,containerPadding:h,centerOnMobile:l})=>{const p=f.useRef(null),c=f.useRef(null);return fe(p,c,o),n.jsxs(B,{ref:p,onClick:a,children:[e,s&&n.jsx(V,{containerPadding:h,centerOnMobile:l,children:n.jsx("div",{ref:c,onClick:t=>t.stopPropagation(),children:r})})]})},B=u.span`
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
    ${e=>e.centerOnMobile&&D`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,O=e=>e.type===1,ge=({settings:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({enabled:s.default}):r.push({value:s.default,enabled:s.enabled})),r},W=({settings:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({enabled:s.user}):r.push({value:s.user,enabled:s.enabled})),r},$=({channelSetting:e})=>{let r=[];return e&&e.forEach(s=>O(s)?r.push({...s,user:s.default}):r.push({...s,user:s.default})),r},S="-",_="+",H=3,U=2,F=1,he=e=>{if(!e)return null;let r=0;const s=e.reduce((a,o,h)=>{var p,c;const l=o.enabled?1:0;return o.enabled&&r++,Object.keys(o).includes("value")?typeof o.value=="number"?a=a+U+S+l+S+o.value:a=a+H+S+l+S+((p=o.value)==null?void 0:p.lower)+S+((c=o.value)==null?void 0:c.upper):a=a+F+S+l,h!==e.length-1&&(a=a+_),a},"");return r+_+s},N=({settings:e,saveUserSettingHandler:r})=>{const[s,a]=f.useState([...e]),[o,h]=f.useState(!1),l=ie(),p=(t,d)=>{const i=[...s];i[t].user=d,a(i)},c=t=>{const d=[...s];if(d[t].type===1){const i=d[t];i.user=!i.user}else if(d[t].type===2){const i=d[t];i.enabled=!i.enabled}else{const i=d[t];i.enabled=!i.enabled}a(d)};return n.jsxs(K,{children:[s.map((t,d)=>n.jsxs(X,{hasBottomBorder:d!==e.length-1,children:[n.jsxs(Y,{children:[n.jsx(E,{color:l.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:t.description}),n.jsx(Se,{onChange:()=>c(d),checked:t.type===1?t.user:t.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),t.type===2&&t.enabled===!0&&n.jsxs(R,{children:[n.jsx(E,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:t.user||t.default}),n.jsx(Me,{val:t.user,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultVal:t.default,onChange:({x:i})=>p(d,i)})]}),t.type===3&&t.enabled===!0&&n.jsxs(R,{children:[n.jsxs(E,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[t.user.lower||t.default.lower," - ",t.user.upper||t.default.upper]}),n.jsx(Te,{startVal:t.user.lower||t.default.lower,endVal:t.user.upper||t.default.upper,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultStartVal:t.default.lower,defaultEndVal:t.default.upper,onChange:({startVal:i,endVal:j})=>p(d,{lower:i,upper:j})})]})]},d)),n.jsxs(q,{children:[n.jsx(me,{color:{light:"gray-1000",dark:"gray-400"},variant:"bs-semibold",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(Q,{onClick:()=>r({userSettings:s,setLoading:h}),children:[o&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&n.jsx(G,{hideIt:o,children:"Save"})]})]})]})},J=({children:e,centerOnMobile:r,channelDetail:s,channelSetting:a,userSetting:o,onSuccessSave:h})=>{const[l,p]=f.useState(!1),{chainId:c}=se(),{userPushSDKInstance:t}=oe(C=>C.user),d=re(),i=c===P.coreContractChain,j=()=>{p(!l)},z=()=>{p(!1)},{handleConnectWallet:v}=f.useContext(we),m=ae(),b=async({userSettings:C,setLoading:M})=>{const y=M||(()=>{}),x=h||(()=>{});y(!0);let w=t;if(!w.signer&&(w=await v(),!w)){y(!1);return}try{let g=s.channel;i||(g=s.alias_address),m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await w.notification.subscribe(A(g,c),{settings:W({settings:C}),onSuccess:()=>{x(),z(),d(be({channelAddress:g,settings:o})),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:T=>n.jsx(ce,{size:T,color:"green"})})},onError:()=>{console.error("opt in error"),m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:T=>n.jsx(k,{size:T,color:"red"})})}})}catch(g){m.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${g.message} )`,toastType:"ERROR",getToastIcon:T=>n.jsx(k,{size:T,color:"red"})}),console.error(g)}finally{y(!1)}};return n.jsx(I,{centerOnMobile:r,showDropdown:l,toggleDropdown:j,closeDropdown:z,renderDropdownContainer:n.jsx(N,{settings:o??$({channelSetting:a}),saveUserSettingHandler:b}),containerPadding:"0px 16px 16px 16px",children:e})},K=u.div`
  min-width: 300px;
`,X=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&D`
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
  ${e=>e.disabled&&D`
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
  ${e=>e.hideIt&&D`
      visibility: hidden;
    `};
`,Z=({centerOnMobile:e,optOutHandler:r,channelSetting:s,channelDetail:a,userSetting:o,closeDropdown:h})=>{const[l,p]=f.useState(!1),c=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(J,{centerOnMobile:e,channelDetail:a,userSetting:o,channelSetting:s,onSuccessSave:h,children:n.jsxs(L,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(E,{color:c.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(L,{flexDirection:"row",onClick:()=>r({setLoading:p}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(E,{color:c.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[l&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#000"}),!l&&n.jsx(ne,{hideIt:l,children:"Opt-out"})]})]})]})},ue=e=>{const{children:r,centerOnMobile:s,userSetting:a,channelDetail:o,onSuccessOptout:h}=e,[l,p]=f.useState(!1),{chainId:c,provider:t,account:d}=se();oe(M=>M.user);const i=re(),j=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),z=()=>{p(!l)},v=()=>{p(!1)},m=c===P.coreContractChain,b=ae(),C=async({setLoading:M})=>{const y=M||(()=>{});y(!0);try{let x=o.channel;m||(x=o.alias_address),b.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const w=await t.getSigner(d);await ye.channels.unsubscribe({signer:w,channelAddress:A(x,c),userAddress:A(d,c),onSuccess:()=>{i(je({channelAddress:x,status:!1})),i(ve(x)),b.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:g=>n.jsx(ce,{size:g,color:"green"})}),h(),v()},onError:()=>{console.error("opt out error"),b.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:g=>n.jsx(k,{size:g,color:"red"})})},env:P.pushNodesEnv})}catch(x){b.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${x.message} )`,toastType:"ERROR",getToastIcon:w=>n.jsx(k,{size:w,color:"red"})}),console.error(x)}finally{y(!1)}};return n.jsx(I,{showDropdown:l,toggleDropdown:z,closeDropdown:v,renderDropdownContainer:n.jsx(Z,{centerOnMobile:s,userSetting:a,channelSetting:j,channelDetail:o,optOutHandler:C,closeDropdown:v}),containerPadding:"12px 16px",centerOnMobile:s,children:r})},ee=u.div`
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
  ${e=>e.hideIt&&D`
      visibility: hidden;
    `};
`});export{I as D,ue as M,Ee as __tla,he as g,ge as n,$ as u};
