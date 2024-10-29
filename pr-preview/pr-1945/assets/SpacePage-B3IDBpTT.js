import{d_ as a,gn as ie,go as n,gp as ne,gq as Z,gr as T,ea as r,eQ as m,gs as re,dY as K,gt as de,g9 as q,e5 as ce,gu as le,dZ as pe,e1 as s,eT as F,f6 as Ee,gv as he,gw as xe,eO as u,eP as I,g4 as ue,e4 as Se,ee as ge,gx as fe,eZ as Te,__tla as me}from"./index-CtHIn1vx.js";import{L as Ie,__tla as Ce}from"./LoaderSpinner-NX73EiyG.js";import{s as ke,__tla as we}from"./toastController-rpPFm55V.js";let Q,Ae=Promise.all([(()=>{try{return me}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return we}catch{}})()]).then(async()=>{let M,k,w,D,_,N,O,v,L,b,j,V,U,$,y,R,P;M=({account:t,env:l,chainId:S,socketType:E})=>{const[e,g]=a.useState(null),[d,p]=a.useState(e==null?void 0:e.connected),[c,h]=a.useState(""),[f,A]=a.useState(""),{videoCallData:C,incomingCall:X,connectWrapper:ee,requestWrapper:te,acceptRequestWrapper:se,isVideoCallInitiator:H}=a.useContext(ie),ae=()=>{e==null||e.on(n.EVENTS.CONNECT,()=>{p(!0)}),e==null||e.on(n.EVENTS.DISCONNECT,()=>{p(!1)}),e==null||e.on(n.EVENTS.USER_FEEDS,x=>{var B,G,W,z,J,Y;try{const{payload:i}=x||{};if(Object.keys(i).length>0)if(((G=(B=i==null?void 0:i.data)==null?void 0:B.additionalMeta)==null?void 0:G.type)===`${Z.ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){const o=JSON.parse(i.data.additionalMeta.data);console.debug("RECIEVED VIDEO DATA",o),o.status===T.VideoCallStatus.INITIALIZED?X(o):o.status===T.VideoCallStatus.RECEIVED||o.status===T.VideoCallStatus.RETRY_RECEIVED?ee(o):o.status===T.VideoCallStatus.DISCONNECTED?window.location.reload():o.status===T.VideoCallStatus.RETRY_INITIALIZED&&H()?te({senderAddress:o.recipientAddress,recipientAddress:o.senderAddress,chatId:o.chatId,retry:!0}):o.status===T.VideoCallStatus.RETRY_INITIALIZED&&!H()&&se({signalData:o.signalData,senderAddress:o.recipientAddress,recipientAddress:o.senderAddress,chatId:o.chatId,retry:!0})}else((z=(W=i==null?void 0:i.data)==null?void 0:W.additionalMeta)==null?void 0:z.data)==="PUSH SPACE META MESSAGE"||((Y=(J=i==null?void 0:i.data)==null?void 0:J.additionalMeta)==null?void 0:Y.type)===`${Z.ADDITIONAL_META_TYPE.PUSH_SPACE}+1`||ke(i)}catch(i){console.error("DAPP Error while diplaying received Notification: ",i)}}),e==null||e.on(n.EVENTS.CHAT_RECEIVED_MESSAGE,x=>{h(x)}),e==null||e.on(n.EVENTS.CHAT_GROUPS,x=>{console.info(x),A(x)})},oe=()=>{e==null||e.off(n.EVENTS.CONNECT),e==null||e.off(n.EVENTS.DISCONNECT),e==null||e.off(n.EVENTS.USER_FEEDS),e==null||e.off(n.EVENTS.CHAT_GROUPS),e==null||e.off(n.EVENTS.CHAT_RECEIVED_MESSAGE)};return a.useEffect(()=>(e&&ae(),()=>{e&&oe()}),[e]),a.useEffect(()=>{if(t&&S&&l){e&&(e==null||e.disconnect());const x=n.createSocketConnection({user:E=="chat"?t:ne(t,S),socketType:E,env:l});g(x)}},[t,S,l]),{epnsSDKSocket:e,isSDKSocketConnected:d,messagesSinceLastConnection:c,groupInformationSinceLastConnection:f}},k="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58697%2010.5215V15.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.1957%203.91268V22.0868'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.21688L15.8047%2018.7822'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4132%2010.5215L22.4132%2015.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58594%2010.5215V15.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.19531%203.91309V22.0872'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.2168L15.8047%2018.7822'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4141%2010.5215L22.4141%2015.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",D=t=>a.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"#D53A94"}),a.createElement("path",{d:"M15.75 23.999H32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M24.0039 15.75V32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_=({spaceid:t})=>{const{SpaceFeedComponent:l,SpaceInvitesComponent:S,CreateSpaceComponent:E}=a.useContext(re),{account:e}=K(),{setSpaceId:g,spaceInvites:d}=a.useContext(de),{connectedUser:p}=a.useContext(q),c=ce(),h=le(m.mobileL);a.useEffect(()=>{t&&g(t)},[t]);let f=pe();const A=C=>{g(C),f(`/spaces/${C}`)};return s.jsxs(N,{children:[s.jsxs(O,{children:[s.jsx(F,{width:"48px",maxWidth:"48px",borderRadius:"100%",overflow:"hidden",margin:"0 5px 0 0",children:s.jsx(Ee,{alt:"Profile",src:p==null?void 0:p.profilePicture})}),s.jsx(v,{children:he(e,6)}),s.jsx(L,{children:h?s.jsx(E,{children:s.jsx(D,{})}):s.jsx(E,{})}),s.jsx(S,{children:s.jsxs(j,{children:[s.jsx(xe,{src:(c==null?void 0:c.scheme)=="light"?k:w,srcSet:(c==null?void 0:c.scheme)=="light"?k:w,width:"30px"}),d>0&&s.jsx(b,{children:d})]})})]}),s.jsx(V,{children:s.jsx(l,{showTabs:!0,orientation:"vertical",width:h?360:"100%",height:"100%",onBannerClickHandler:C=>{A(C)}})})]})},N=r.div`
  background: ${({theme:t})=>t.default.bg};
  height: 100%;
  width: calc(100% - 440px);
  border-radius: 32px !important;
  padding: 20px !important;

  box-sizing: border-box !important;

  @media ${m.laptop} {
    width: 100%;
  }

  @media ${m.mobileL} {
    padding: 5px !important;
    border-radius: 15px !important;
  }
`,O=r.div`
  border: 1px solid ${({theme:t})=>t.default.borderColor};
  background: ${({theme:t})=>t.chat.sendMesageBg};
  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,v=r.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: normal;
  margin-left: 10px;
  color: ${({theme:t})=>t.spaceHostTextColor};
`,L=r.div`
  margin: 0px 14px 0px auto;

  @media ${m.mobileL} {
    padding-top: 5px;
  }
`,b=r.div`
  position: absolute;
  top: 15px;
  left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 19px;
  width: 20px;
  border-radius: 8px;
  background: #d53a94;
  color: #ffffff;
`,j=r.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
`,V=r.div`
  margin-top: 30px;
  overflow-y: scroll;
  max-height: 100%; //overflow for feed items itself
  // max-height: 500px; //overflow for feed items itself
  // margin-bottom: 70px;
  box-sizing: border-box !important;
`,U=({spaceid:t})=>{const{account:l,chainId:S}=K(),[E,e]=a.useState(!0),{getUser:g,connectedUser:d,setConnectedUser:p}=a.useContext(q);M({account:l,chainId:S,env:ge.appEnv}),a.useEffect(()=>{e(!0),p(null)},[l]),a.useEffect(()=>{E&&(p(d),c())},[d]);const c=async()=>{var f;const h=ue({account:l});((f=d==null?void 0:d.wallets)==null?void 0:f.toLowerCase())!==(h==null?void 0:h.toLowerCase())&&await g(),e(!1)};return s.jsx($,{children:E?s.jsx(R,{children:s.jsx(F,{children:s.jsx(Ie,{type:Se.SEAMLESS,spinnerSize:24})})}):s.jsx(_,{spaceid:t})})},$=r.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  // background: ${t=>t.theme.default.bg};
  // border-radius: ${u.ADJUSTMENTS.RADIUS.LARGE};
  // box-shadow: ${u.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  // flex: initial;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // padding: 13px 13px 13px 0px;
  margin: 0px 0px 17px 14px;

  // margin: ${u.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  max-height: calc(
    100vh - ${u.CONSTANTS.HEADER_HEIGHT}px - ${I.MINI_MODULES.DESKTOP.TOP} -
      ${I.MINI_MODULES.DESKTOP.BOTTOM}
  );

  @media ${m.laptop} {
    margin: ${u.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(
      100vh - ${u.CONSTANTS.HEADER_HEIGHT}px - ${I.MINI_MODULES.TABLET.TOP} -
        ${I.MINI_MODULES.TABLET.BOTTOM}
    );
  }

  @media ${m.mobileL} {
    margin: ${u.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${u.CONSTANTS.HEADER_HEIGHT}px - ${I.BIG_MODULES.MOBILE.TOP} -
        ${I.BIG_MODULES.MOBILE.BOTTOM}
    );
  }
`,y=r.div`
  padding: 20px;
`,R=r(y)`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,Q=()=>{let{spaceid:t}=fe();return s.jsx(P,{children:s.jsx(U,{spaceid:t})})},P=r(Te)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Ae as __tla,Q as default};
