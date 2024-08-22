import{b6 as u,bp as I,cS as xe,a_ as f,cT as fe,b1 as n,aY as se,bZ as oe,bY as ae,bi as A,cU as be,cV as re,b9 as ie,bR as D,cW as we,cX as Se,cY as me,bq as je,bW as ye,b3 as le,b4 as ce,cZ as $,c_ as ve,c$ as de,d0 as R,c0 as pe,d1 as Te,d2 as Ce,d3 as Me,__tla as De}from"./index-COtUxmek.js";let z,ue,he,ge,W,Ee=Promise.all([(()=>{try{return De}catch{}})()]).then(async()=>{let E,B,w,k,V,U,H,Y,F,N,X,Z,q,J,K,L,G,Q,ee,te,P,ne;E=t=>t.type===1,ge=({settings:t})=>{let a=[];return t&&t.forEach(s=>E(s)?a.push({enabled:s.default}):a.push({value:s.default,enabled:s.enabled})),a},B=({settings:t})=>{let a=[];return t&&t.forEach(s=>E(s)?a.push({enabled:s.user}):a.push({value:s.user,enabled:s.enabled})),a},W=({channelSetting:t})=>{let a=[];return t&&t.forEach(s=>E(s)?a.push({...s,user:s.default}):a.push({...s,user:s.default})),a},w="-",k="+",V=3,U=2,H=1,he=t=>{if(!t)return null;let a=0;const s=t.reduce((r,o,h)=>{var p,d;const i=o.enabled?1:0;return o.enabled&&a++,Object.keys(o).includes("value")?typeof o.value=="number"?r=r+U+w+i+w+o.value:r=r+V+w+i+w+((p=o.value)==null?void 0:p.lower)+w+((d=o.value)==null?void 0:d.upper):r=r+H+w+i,h!==t.length-1&&(r=r+k),r},"");return a+k+s},z=({children:t,renderDropdownContainer:a,showDropdown:s,toggleDropdown:r,closeDropdown:o,containerPadding:h,centerOnMobile:i})=>{const p=f.useRef(null),d=f.useRef(null);return fe(p,d,o),n.jsxs(Y,{ref:p,onClick:r,children:[t,s&&n.jsx(F,{containerPadding:h,centerOnMobile:i,children:n.jsx("div",{ref:d,onClick:e=>e.stopPropagation(),children:a})})]})},Y=u.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,F=u(xe)`
  background: ${t=>t.theme.settingsModalBackground};
  border: 1px solid;
  border-color: ${t=>t.theme.settingsModalBorderColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
  padding: ${t=>t.containerPadding?t.containerPadding:"7px 14px"};
  position: absolute;
  top: 0rem;
  z-index: 10000;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${t=>t.centerOnMobile&&I`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,N=({settings:t,saveUserSettingHandler:a})=>{const[s,r]=f.useState([...t]),[o,h]=f.useState(!1),i=ie(),p=(e,l)=>{const c=[...s];c[e].user=l,r(c)},d=e=>{const l=[...s];if(l[e].type===1){const c=l[e];c.user=!c.user}else if(l[e].type===2){const c=l[e];c.enabled=!c.enabled}else{const c=l[e];c.enabled=!c.enabled}r(l)};return n.jsxs(Z,{children:[s.map((e,l)=>n.jsxs(q,{hasBottomBorder:l!==t.length-1,children:[n.jsxs(J,{children:[n.jsx(D,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),n.jsx(we,{onChange:()=>d(l),checked:e.type===1?e.user:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&n.jsxs(L,{children:[n.jsx(D,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.user||e.default}),n.jsx(Se,{val:e.user,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:c})=>p(l,c)})]}),e.type===3&&e.enabled===!0&&n.jsxs(L,{children:[n.jsxs(D,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.user.lower||e.default.lower," - ",e.user.upper||e.default.upper]}),n.jsx(me,{startVal:e.user.lower||e.default.lower,endVal:e.user.upper||e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:c,endVal:S})=>p(l,{lower:c,upper:S})})]})]},l)),n.jsxs(K,{children:[n.jsx(je,{variant:"bs-semibold",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(ye,{variant:"primary",size:"extraSmall",onClick:()=>a({userSettings:s,setLoading:h}),children:[o&&n.jsx(le,{type:ce.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&n.jsx(G,{hideIt:o,children:"Save"})]})]})]})},X=({children:t,centerOnMobile:a,channelDetail:s,channelSetting:r,userSetting:o,onSuccessSave:h})=>{const[i,p]=f.useState(!1),{chainId:d,wallet:e}=se(),{userPushSDKInstance:l}=oe(T=>T.user),c=ae(),S=d===A.coreContractChain,_=()=>{p(!i)},O=()=>{p(!1)},{handleConnectWalletAndEnableProfile:v}=f.useContext(be),m=re(),j=async({userSettings:T,setLoading:C})=>{const y=C||(()=>{}),x=h||(()=>{});y(!0);let b=l;if(!b.signer&&(b=await v({wallet:e}),!b)){y(!1);return}try{let g=s.channel;S||(g=s.alias_address),m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await b.notification.subscribe($(g,d),{settings:B({settings:T}),onSuccess:()=>{x(),O(),c(ve({channelAddress:g,settings:o})),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:M=>n.jsx(de,{size:M,color:"green"})})},onError:()=>{console.error("opt in error"),m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:M=>n.jsx(R,{size:M,color:"red"})})}})}catch(g){m.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${g.message} )`,toastType:"ERROR",getToastIcon:M=>n.jsx(R,{size:M,color:"red"})}),console.error(g)}finally{y(!1)}};return n.jsx(z,{centerOnMobile:a,showDropdown:i,toggleDropdown:_,closeDropdown:O,renderDropdownContainer:n.jsx(N,{settings:o??W({channelSetting:r}),saveUserSettingHandler:j}),containerPadding:"0px 16px 16px 16px",children:t})},Z=u.div`
  min-width: 300px;
`,q=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${t=>t.hasBottomBorder&&I`
      border-bottom: 1px solid ${a=>a.theme.settingsModalBorderBottomColor};
    `}
`,J=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,K=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,L=u.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,G=u.span`
  ${t=>t.hideIt&&I`
      visibility: hidden;
    `};
`,Q=({centerOnMobile:t,optOutHandler:a,channelSetting:s,channelDetail:r,userSetting:o,closeDropdown:h})=>{const[i,p]=f.useState(!1),d=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(X,{centerOnMobile:t,channelDetail:r,userSetting:o,channelSetting:s,onSuccessSave:h,children:n.jsxs(P,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(D,{color:d.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(P,{flexDirection:"row",onClick:()=>a({setLoading:p}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(D,{color:d.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&n.jsx(le,{type:ce.SEAMLESS,spinnerSize:16,spinnerColor:"#000"}),!i&&n.jsx(ne,{hideIt:i,children:"Opt-out"})]})]})]})},ue=t=>{const{children:a,centerOnMobile:s,userSetting:r,channelDetail:o,onSuccessOptout:h}=t,[i,p]=f.useState(!1),{chainId:d,provider:e,account:l,wallet:c}=se();oe(C=>C.user);const S=ae(),_=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),O=()=>{p(!i)},v=()=>{p(!1)},m=d===A.coreContractChain,j=re(),T=async({setLoading:C})=>{const y=C||(()=>{});y(!0);try{let x=o.channel;m||(x=o.alias_address),j.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const b=await e.getSigner(l);await Te.channels.unsubscribe({signer:b,channelAddress:$(x,d),userAddress:$(l,d),onSuccess:()=>{S(Ce({channelAddress:x,status:!1})),S(Me(x)),j.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:g=>n.jsx(de,{size:g,color:"green"})}),h(),v()},onError:()=>{console.error("opt out error"),j.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:g=>n.jsx(R,{size:g,color:"red"})})},env:A.pushNodesEnv})}catch(x){j.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${x.message} )`,toastType:"ERROR",getToastIcon:b=>n.jsx(R,{size:b,color:"red"})}),console.error(x)}finally{y(!1)}};return n.jsx(z,{showDropdown:i,toggleDropdown:O,closeDropdown:v,renderDropdownContainer:n.jsx(Q,{centerOnMobile:s,userSetting:r,channelSetting:_,channelDetail:o,optOutHandler:T,closeDropdown:v}),containerPadding:"12px 16px",centerOnMobile:s,children:a})},ee=u.div`
  min-width: max-content;
  gap: 16px;
  display: flex;
  flex-direction: column;
`,te=u.div`
  display: flex;
  flex-direction: column;
`,P=u.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  cursor: pointer;
  gap: 8px;
`,ne=u.span`
  ${t=>t.hideIt&&I`
      visibility: hidden;
    `};
`});export{z as D,ue as M,Ee as __tla,he as g,ge as n,W as u};
