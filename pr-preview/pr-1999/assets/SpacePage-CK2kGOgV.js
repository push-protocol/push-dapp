import{dX as a,gf as ie,gg as n,gh as ne,gi as K,gj as T,e9 as r,eP as m,gk as re,dV as Z,gl as de,g1 as F,e4 as ce,gm as le,dW as pe,d_ as s,eS as q,f8 as Ee,gn as he,go as xe,eN as u,eO as I,fY as ue,e1 as Se,ed as ge,gp as fe,eY as Te,__tla as me}from"./index-D0jDe29v.js";import{L as Ie,__tla as ke}from"./LoaderSpinner-COnSBkKY.js";import{s as Ce,__tla as Ae}from"./toastController-DlA9fW85.js";let X,Me=Promise.all([(()=>{try{return me}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ae}catch{}})()]).then(async()=>{let w,C,A,D,_,N,O,v,L,b,j,V,U,$,y,R,P;w=({account:t,env:l,chainId:S,socketType:E})=>{const[e,g]=a.useState(null),[d,p]=a.useState(e==null?void 0:e.connected),[c,h]=a.useState(""),[f,M]=a.useState(""),{videoCallData:k,incomingCall:Q,connectWrapper:ee,requestWrapper:te,acceptRequestWrapper:se,isVideoCallInitiator:H}=a.useContext(ie),ae=()=>{e==null||e.on(n.EVENTS.CONNECT,()=>{p(!0)}),e==null||e.on(n.EVENTS.DISCONNECT,()=>{p(!1)}),e==null||e.on(n.EVENTS.USER_FEEDS,x=>{var B,G,W,Y,z,J;try{const{payload:i}=x||{};if(Object.keys(i).length>0)if(((G=(B=i==null?void 0:i.data)==null?void 0:B.additionalMeta)==null?void 0:G.type)===`${K.ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){const o=JSON.parse(i.data.additionalMeta.data);console.debug("RECIEVED VIDEO DATA",o),o.status===T.VideoCallStatus.INITIALIZED?Q(o):o.status===T.VideoCallStatus.RECEIVED||o.status===T.VideoCallStatus.RETRY_RECEIVED?ee(o):o.status===T.VideoCallStatus.DISCONNECTED?window.location.reload():o.status===T.VideoCallStatus.RETRY_INITIALIZED&&H()?te({senderAddress:o.recipientAddress,recipientAddress:o.senderAddress,chatId:o.chatId,retry:!0}):o.status===T.VideoCallStatus.RETRY_INITIALIZED&&!H()&&se({signalData:o.signalData,senderAddress:o.recipientAddress,recipientAddress:o.senderAddress,chatId:o.chatId,retry:!0})}else((Y=(W=i==null?void 0:i.data)==null?void 0:W.additionalMeta)==null?void 0:Y.data)==="PUSH SPACE META MESSAGE"||((J=(z=i==null?void 0:i.data)==null?void 0:z.additionalMeta)==null?void 0:J.type)===`${K.ADDITIONAL_META_TYPE.PUSH_SPACE}+1`||Ce(i)}catch(i){console.error("DAPP Error while diplaying received Notification: ",i)}}),e==null||e.on(n.EVENTS.CHAT_RECEIVED_MESSAGE,x=>{h(x)}),e==null||e.on(n.EVENTS.CHAT_GROUPS,x=>{console.info(x),M(x)})},oe=()=>{e==null||e.off(n.EVENTS.CONNECT),e==null||e.off(n.EVENTS.DISCONNECT),e==null||e.off(n.EVENTS.USER_FEEDS),e==null||e.off(n.EVENTS.CHAT_GROUPS),e==null||e.off(n.EVENTS.CHAT_RECEIVED_MESSAGE)};return a.useEffect(()=>(e&&ae(),()=>{e&&oe()}),[e]),a.useEffect(()=>{if(t&&S&&l){e&&(e==null||e.disconnect());const x=n.createSocketConnection({user:E=="chat"?t:ne(t,S),socketType:E,env:l});g(x)}},[t,S,l]),{epnsSDKSocket:e,isSDKSocketConnected:d,messagesSinceLastConnection:c,groupInformationSinceLastConnection:f}},C="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58697%2010.5215V15.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.1957%203.91268V22.0868'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.21688L15.8047%2018.7822'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4132%2010.5215L22.4132%2015.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58594%2010.5215V15.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.19531%203.91309V22.0872'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.2168L15.8047%2018.7822'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4141%2010.5215L22.4141%2015.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",D=t=>a.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"#D53A94"}),a.createElement("path",{d:"M15.75 23.999H32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M24.0039 15.75V32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_=({spaceid:t})=>{const{SpaceFeedComponent:l,SpaceInvitesComponent:S,CreateSpaceComponent:E}=a.useContext(re),{account:e}=Z(),{setSpaceId:g,spaceInvites:d}=a.useContext(de),{connectedUser:p}=a.useContext(F),c=ce(),h=le(m.mobileL);a.useEffect(()=>{t&&g(t)},[t]);let f=pe();const M=k=>{g(k),f(`/spaces/${k}`)};return s.jsxs(N,{children:[s.jsxs(O,{children:[s.jsx(q,{width:"48px",maxWidth:"48px",borderRadius:"100%",overflow:"hidden",margin:"0 5px 0 0",children:s.jsx(Ee,{alt:"Profile",src:p==null?void 0:p.profilePicture})}),s.jsx(v,{children:he(e,6)}),s.jsx(L,{children:h?s.jsx(E,{children:s.jsx(D,{})}):s.jsx(E,{})}),s.jsx(S,{children:s.jsxs(j,{children:[s.jsx(xe,{src:(c==null?void 0:c.scheme)=="light"?C:A,srcSet:(c==null?void 0:c.scheme)=="light"?C:A,width:"30px"}),d>0&&s.jsx(b,{children:d})]})})]}),s.jsx(V,{children:s.jsx(l,{showTabs:!0,orientation:"vertical",width:h?360:"100%",height:"100%",onBannerClickHandler:k=>{M(k)}})})]})},N=r.div`
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
`,U=({spaceid:t})=>{const{account:l,chainId:S}=Z(),[E,e]=a.useState(!0),{getUser:g,connectedUser:d,setConnectedUser:p}=a.useContext(F);w({account:l,chainId:S,env:ge.appEnv}),a.useEffect(()=>{e(!0),p(null)},[l]),a.useEffect(()=>{E&&(p(d),c())},[d]);const c=async()=>{var f;const h=ue({account:l});((f=d==null?void 0:d.wallets)==null?void 0:f.toLowerCase())!==(h==null?void 0:h.toLowerCase())&&await g(),e(!1)};return s.jsx($,{children:E?s.jsx(R,{children:s.jsx(q,{children:s.jsx(Ie,{type:Se.SEAMLESS,spinnerSize:24})})}):s.jsx(_,{spaceid:t})})},$=r.div`
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
`,X=()=>{let{spaceid:t}=fe();return s.jsx(P,{children:s.jsx(U,{spaceid:t})})},P=r(Te)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Me as __tla,X as default};
