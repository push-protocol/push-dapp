import{aV as u,bP as T,bE as xe,b0 as f,dV as fe,b4 as n,a$ as se,bF as oe,bK as re,bg as P,c4 as be,bJ as ae,a_ as ie,bL as j,dN as we,ba as le,bb as de,ci as $,dP as Se,bU as ce,bV as O,cj as pe,ds as me,dB as ye,gq as je,__tla as ve}from"./index-nXi_mG_e.js";import{I as Ce,R as Me,__tla as Te}from"./RangeSlider-zwDda4h1.js";let _,ue,he,ge,A,De=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let B,V,D,W,w,z,F,U,H,N,J,K,q,X,Y,G,I,Q,Z,ee,te,R,ne;_=({children:t,renderDropdownContainer:r,showDropdown:s,toggleDropdown:a,closeDropdown:o,containerPadding:h,centerOnMobile:i})=>{const c=f.useRef(null),p=f.useRef(null);return fe(c,p,o),n.jsxs(B,{ref:c,onClick:a,children:[t,s&&n.jsx(V,{containerPadding:h,centerOnMobile:i,children:n.jsx("div",{ref:p,onClick:e=>e.stopPropagation(),children:r})})]})},B=u.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,V=u(xe)`
  background: ${t=>t.theme.settingsModalBackground};
  border: 1px solid;
  border-color: ${t=>t.theme.settingsModalBorderColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
  padding: ${t=>t.containerPadding?t.containerPadding:"7px 14px"};
  position: absolute;
  top: 0rem;
  z-index: 10;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${t=>t.centerOnMobile&&T`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,D=t=>t.type===1,ge=({settings:t})=>{let r=[];return t&&t.forEach(s=>D(s)?r.push({enabled:s.default}):r.push({value:s.default,enabled:s.enabled})),r},W=({settings:t})=>{let r=[];return t&&t.forEach(s=>D(s)?r.push({enabled:s.user}):r.push({value:s.user,enabled:s.enabled})),r},A=({channelSetting:t})=>{let r=[];return t&&t.forEach(s=>D(s)?r.push({...s,user:s.default}):r.push({...s,user:s.default})),r},w="-",z="+",F=3,U=2,H=1,he=t=>{if(!t)return null;let r=0;const s=t.reduce((a,o,h)=>{var c,p;const i=o.enabled?1:0;return o.enabled&&r++,Object.keys(o).includes("value")?typeof o.value=="number"?a=a+U+w+i+w+o.value:a=a+F+w+i+w+((c=o.value)==null?void 0:c.lower)+w+((p=o.value)==null?void 0:p.upper):a=a+H+w+i,h!==t.length-1&&(a=a+z),a},"");return r+z+s},N=({settings:t,saveUserSettingHandler:r})=>{const[s,a]=f.useState([...t]),[o,h]=f.useState(!1),i=ie(),c=(e,l)=>{const d=[...s];d[e].user=l,a(d)},p=e=>{const l=[...s];if(l[e].type===1){const d=l[e];d.user=!d.user}else if(l[e].type===2){const d=l[e];d.enabled=!d.enabled}else{const d=l[e];d.enabled=!d.enabled}a(l)};return n.jsxs(K,{children:[s.map((e,l)=>n.jsxs(q,{hasBottomBorder:l!==t.length-1,children:[n.jsxs(X,{children:[n.jsx(j,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),n.jsx(we,{onChange:()=>p(l),checked:e.type===1?e.user:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&n.jsxs(I,{children:[n.jsx(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.user||e.default}),n.jsx(Ce,{val:e.user,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:d})=>c(l,d)})]}),e.type===3&&e.enabled===!0&&n.jsxs(I,{children:[n.jsxs(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.user.lower||e.default.lower," - ",e.user.upper||e.default.upper]}),n.jsx(Me,{startVal:e.user.lower||e.default.lower,endVal:e.user.upper||e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:d,endVal:v})=>c(l,{lower:d,upper:v})})]})]},l)),n.jsxs(Y,{children:[n.jsx(j,{color:i.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(G,{onClick:()=>r({userSettings:s,setLoading:h}),children:[o&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&n.jsx(Q,{hideIt:o,children:"Save"})]})]})]})},J=({children:t,centerOnMobile:r,channelDetail:s,channelSetting:a,userSetting:o,onSuccessSave:h})=>{const[i,c]=f.useState(!1),{chainId:p}=se(),{userPushSDKInstance:e}=oe(S=>S.user),l=re(),d=p===P.coreContractChain,v=()=>{c(!i)},m=()=>{c(!1)},{handleConnectWallet:k}=f.useContext(be),x=ae(),L=async({userSettings:S,setLoading:E})=>{const g=E||(()=>{}),C=h||(()=>{});g(!0);let b=e;if(!b.signer&&(b=await k(),!b)){g(!1);return}try{let y=s.channel;d||(y=s.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await b.notification.subscribe($(y,p),{settings:W({settings:S}),onSuccess:()=>{C(),m(),l(Se({channelAddress:y,settings:o})),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:M=>n.jsx(ce,{size:M,color:"green"})})},onError:()=>{console.error("opt in error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:M=>n.jsx(O,{size:M,color:"red"})})}})}catch(y){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${y.message} )`,toastType:"ERROR",getToastIcon:M=>n.jsx(O,{size:M,color:"red"})}),console.error(y)}finally{g(!1)}};return n.jsx(_,{centerOnMobile:r,showDropdown:i,toggleDropdown:v,closeDropdown:m,renderDropdownContainer:n.jsx(N,{settings:o??A({channelSetting:a}),saveUserSettingHandler:L}),containerPadding:"0px 16px 16px 16px",children:t})},K=u.div`
  min-width: 300px;
`,q=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${t=>t.hasBottomBorder&&T`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,X=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Y=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,G=u.button`
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
  ${t=>t.disabled&&T`
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
`,I=u.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,Q=u.span`
  ${t=>t.hideIt&&T`
      visibility: hidden;
    `};
`,Z=({centerOnMobile:t,optOutHandler:r,channelSetting:s,channelDetail:a,userSetting:o,closeDropdown:h})=>{const[i,c]=f.useState(!1),p=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(J,{centerOnMobile:t,channelDetail:a,userSetting:o,channelSetting:s,onSuccessSave:h,children:n.jsxs(R,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(j,{color:p.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(R,{flexDirection:"row",onClick:()=>r({setLoading:c}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(j,{color:p.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!i&&n.jsx(ne,{hideIt:i,children:"Opt-out"})]})]})]})},ue=t=>{const{children:r,centerOnMobile:s,userSetting:a,channelDetail:o}=t,[h,i]=f.useState(!1),{chainId:c,provider:p,account:e}=se();oe(S=>S.user);const l=re(),d=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),v=()=>{i(!h)},m=()=>{i(!1)},k=c===P.coreContractChain,x=ae(),L=async({setLoading:S})=>{const E=S||(()=>{});E(!0);try{let g=o.channel;k||(g=o.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await p.getSigner(e);await me.channels.unsubscribe({signer:C,channelAddress:$(g,c),userAddress:$(e,c),onSuccess:()=>{l(ye({channelAddress:g,status:!1})),l(je(g)),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:b=>n.jsx(ce,{size:b,color:"green"})}),m()},onError:()=>{console.error("opt out error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:b=>n.jsx(O,{size:b,color:"red"})})},env:P.pushNodesEnv})}catch(g){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${g.message} )`,toastType:"ERROR",getToastIcon:C=>n.jsx(O,{size:C,color:"red"})}),console.error(g)}finally{E(!1)}};return n.jsx(_,{showDropdown:h,toggleDropdown:v,closeDropdown:m,renderDropdownContainer:n.jsx(Z,{centerOnMobile:s,userSetting:a,channelSetting:d,channelDetail:o,optOutHandler:L,closeDropdown:m}),containerPadding:"12px 16px",centerOnMobile:s,children:r})},ee=u.div`
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
  ${t=>t.hideIt&&T`
      visibility: hidden;
    `};
`});export{_ as D,ue as M,De as __tla,he as g,ge as n,A as u};
