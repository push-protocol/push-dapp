import{aV as u,bP as T,bE as xe,b0 as f,dV as fe,b4 as n,a$ as se,bF as oe,bK as re,bg as P,c4 as be,bJ as ae,a_ as ie,bL as j,dN as we,ba as le,bb as de,ci as $,dP as Se,bU as ce,bV as O,cj as pe,ds as me,dB as ye,gq as je,__tla as ve}from"./index-EM4OPpGL.js";import{I as Ce,R as Me,__tla as Te}from"./RangeSlider-Cyj7GK6-.js";let _,ue,he,ge,A,De=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let B,V,D,W,w,z,F,U,H,N,J,K,q,X,Y,G,I,Q,Z,ee,te,R,ne;_=({children:e,renderDropdownContainer:o,showDropdown:s,toggleDropdown:p,closeDropdown:r,containerPadding:c,centerOnMobile:a})=>{const d=f.useRef(null),h=f.useRef(null);return fe(d,h,r),n.jsxs(B,{ref:d,onClick:p,children:[e,s&&n.jsx(V,{containerPadding:c,centerOnMobile:a,children:n.jsx("div",{ref:h,onClick:t=>t.stopPropagation(),children:o})})]})},B=u.span`
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
  z-index: 10;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${e=>e.centerOnMobile&&T`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,D=e=>e.type===1,ge=({settings:e})=>{let o=[];return e&&e.forEach(s=>D(s)?o.push({enabled:s.default}):o.push({value:s.default,enabled:s.enabled})),o},W=({settings:e})=>{let o=[];return e&&e.forEach(s=>D(s)?o.push({enabled:s.user}):o.push({value:s.user,enabled:s.enabled})),o},A=({channelSetting:e})=>{let o=[];return e&&e.forEach(s=>D(s)?o.push({...s,user:s.default}):o.push({...s,user:s.default})),o},w="-",z="+",F=3,U=2,H=1,he=e=>{var p,r;if(!e)return null;let o="",s=0;for(let c=0;c<e.length;c++){const a=e[c],d=a.enabled?1:0;a.enabled&&s++,Object.keys(a).includes("value")?typeof a.value=="number"?o=o+U+w+d+w+a.value:o=o+F+w+d+w+((p=a.value)==null?void 0:p.lower)+w+((r=a.value)==null?void 0:r.upper):o=o+H+w+d,c!=e.length-1&&(o=o+z)}return s+z+o},N=({settings:e,saveUserSettingHandler:o})=>{const[s,p]=f.useState([...e]),[r,c]=f.useState(!1),a=ie(),d=(t,i)=>{const l=[...s];l[t].user=i,p(l)},h=t=>{const i=[...s];if(i[t].type===1){const l=i[t];l.user=!l.user}else if(i[t].type===2){const l=i[t];l.enabled=!l.enabled}else{const l=i[t];l.enabled=!l.enabled}p(i)};return n.jsxs(K,{children:[s.map((t,i)=>n.jsxs(q,{hasBottomBorder:i!==e.length-1,children:[n.jsxs(X,{children:[n.jsx(j,{color:a.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:t.description}),n.jsx(we,{onChange:()=>h(i),checked:t.type===1?t.user:t.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),t.type===2&&t.enabled===!0&&n.jsxs(I,{children:[n.jsx(j,{color:a.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:t.user||t.default}),n.jsx(Ce,{val:t.user,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultVal:t.default,onChange:({x:l})=>d(i,l)})]}),t.type===3&&t.enabled===!0&&n.jsxs(I,{children:[n.jsxs(j,{color:a.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[t.user.lower||t.default.lower," - ",t.user.upper||t.default.upper]}),n.jsx(Me,{startVal:t.user.lower||t.default.lower,endVal:t.user.upper||t.default.upper,max:t.upperLimit,min:t.lowerLimit,step:t.ticker||1,defaultStartVal:t.default.lower,defaultEndVal:t.default.upper,onChange:({startVal:l,endVal:v})=>d(i,{lower:l,upper:v})})]})]},i)),n.jsxs(Y,{children:[n.jsx(j,{color:a.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(G,{onClick:()=>o({userSettings:s,setLoading:c}),children:[r&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!r&&n.jsx(Q,{hideIt:r,children:"Save"})]})]})]})},J=({children:e,centerOnMobile:o,channelDetail:s,channelSetting:p,userSetting:r,onSuccessSave:c})=>{const[a,d]=f.useState(!1),{chainId:h}=se(),{userPushSDKInstance:t}=oe(S=>S.user),i=re(),l=h===P.coreContractChain,v=()=>{d(!a)},m=()=>{d(!1)},{handleConnectWallet:k}=f.useContext(be),x=ae(),L=async({userSettings:S,setLoading:E})=>{const g=E||(()=>{}),C=c||(()=>{});g(!0);let b=t;if(!b.signer&&(b=await k(),!b)){g(!1);return}try{let y=s.channel;l||(y=s.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await b.notification.subscribe($(y,h),{settings:W({settings:S}),onSuccess:()=>{C(),m(),i(Se({channelAddress:y,settings:r})),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:M=>n.jsx(ce,{size:M,color:"green"})})},onError:()=>{console.error("opt in error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:M=>n.jsx(O,{size:M,color:"red"})})}})}catch(y){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${y.message} )`,toastType:"ERROR",getToastIcon:M=>n.jsx(O,{size:M,color:"red"})}),console.error(y)}finally{g(!1)}};return n.jsx(_,{centerOnMobile:o,showDropdown:a,toggleDropdown:v,closeDropdown:m,renderDropdownContainer:n.jsx(N,{settings:r??A({channelSetting:p}),saveUserSettingHandler:L}),containerPadding:"0px 16px 16px 16px",children:e})},K=u.div`
  min-width: 300px;
`,q=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&T`
      border-bottom: 1px solid ${o=>o.theme.settingsModalBorderBottomColor};
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
  ${e=>e.disabled&&T`
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
  ${e=>e.hideIt&&T`
      visibility: hidden;
    `};
`,Z=({centerOnMobile:e,optOutHandler:o,channelSetting:s,channelDetail:p,userSetting:r,closeDropdown:c})=>{const[a,d]=f.useState(!1),h=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(J,{centerOnMobile:e,channelDetail:p,userSetting:r,channelSetting:s,onSuccessSave:c,children:n.jsxs(R,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(j,{color:h.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(R,{flexDirection:"row",onClick:()=>o({setLoading:d}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(j,{color:h.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[a&&n.jsx(le,{type:de.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!a&&n.jsx(ne,{hideIt:a,children:"Opt-out"})]})]})]})},ue=e=>{const{children:o,centerOnMobile:s,userSetting:p,channelDetail:r}=e,[c,a]=f.useState(!1),{chainId:d,provider:h,account:t}=se();oe(S=>S.user);const i=re(),l=f.useMemo(()=>r&&(r!=null&&r.channel_settings)?JSON.parse(r==null?void 0:r.channel_settings):null,[r]),v=()=>{a(!c)},m=()=>{a(!1)},k=d===P.coreContractChain,x=ae(),L=async({setLoading:S})=>{const E=S||(()=>{});E(!0);try{let g=r.channel;k||(g=r.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await h.getSigner(t);await me.channels.unsubscribe({signer:C,channelAddress:$(g,d),userAddress:$(t,d),onSuccess:()=>{i(ye({channelAddress:g,status:!1})),i(je(g)),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:b=>n.jsx(ce,{size:b,color:"green"})}),m()},onError:()=>{console.error("opt out error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:b=>n.jsx(O,{size:b,color:"red"})})},env:P.pushNodesEnv})}catch(g){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${g.message} )`,toastType:"ERROR",getToastIcon:C=>n.jsx(O,{size:C,color:"red"})}),console.error(g)}finally{E(!1)}};return n.jsx(_,{showDropdown:c,toggleDropdown:v,closeDropdown:m,renderDropdownContainer:n.jsx(Z,{centerOnMobile:s,userSetting:p,channelSetting:l,channelDetail:r,optOutHandler:L,closeDropdown:m}),containerPadding:"12px 16px",centerOnMobile:s,children:o})},ee=u.div`
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
  ${e=>e.hideIt&&T`
      visibility: hidden;
    `};
`});export{_ as D,ue as M,De as __tla,he as g,ge as n,A as u};
