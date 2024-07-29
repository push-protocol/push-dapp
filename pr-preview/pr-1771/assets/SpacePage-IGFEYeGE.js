import{b0 as s,d2 as ie,d3 as n,d4 as ne,d5 as K,d6 as T,cu as re,b7 as r,bN as m,d7 as de,aZ as Z,d8 as ce,d9 as F,ba as le,da as pe,a_ as Ee,b2 as a,bQ as q,ce as he,db as xe,dc as Se,bL as S,bM as I,dd as ue,b5 as fe,bh as ge,aY as Te,b8 as me,__tla as Ie}from"./index-Deq-LGKx.js";import{L as Ce,__tla as ke}from"./LoaderSpinner-BpkzqBUu.js";let Q,Me=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let w,k,M,D,b,N,_,O,v,L,j,V,U,$,R,y,H;w=({account:t,env:l,chainId:u,socketType:E})=>{const[e,f]=s.useState(null),[d,p]=s.useState(e==null?void 0:e.connected),[c,h]=s.useState(""),[g,A]=s.useState(""),{videoCallData:C,incomingCall:X,connectWrapper:ee,requestWrapper:te,acceptRequestWrapper:ae,isVideoCallInitiator:P}=s.useContext(ie),se=()=>{e==null||e.on(n.EVENTS.CONNECT,()=>{p(!0)}),e==null||e.on(n.EVENTS.DISCONNECT,()=>{p(!1)}),e==null||e.on(n.EVENTS.USER_FEEDS,x=>{var B,G,W,z,J,Y;try{const{payload:i}=x||{};if(Object.keys(i).length>0)if(((G=(B=i==null?void 0:i.data)==null?void 0:B.additionalMeta)==null?void 0:G.type)===`${K.ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){const o=JSON.parse(i.data.additionalMeta.data);console.debug("RECIEVED VIDEO DATA",o),o.status===T.VideoCallStatus.INITIALIZED?X(o):o.status===T.VideoCallStatus.RECEIVED||o.status===T.VideoCallStatus.RETRY_RECEIVED?ee(o):o.status===T.VideoCallStatus.DISCONNECTED?window.location.reload():o.status===T.VideoCallStatus.RETRY_INITIALIZED&&P()?te({senderAddress:o.recipientAddress,recipientAddress:o.senderAddress,chatId:o.chatId,retry:!0}):o.status===T.VideoCallStatus.RETRY_INITIALIZED&&!P()&&ae({signalData:o.signalData,senderAddress:o.recipientAddress,recipientAddress:o.senderAddress,chatId:o.chatId,retry:!0})}else((z=(W=i==null?void 0:i.data)==null?void 0:W.additionalMeta)==null?void 0:z.data)==="PUSH SPACE META MESSAGE"||((Y=(J=i==null?void 0:i.data)==null?void 0:J.additionalMeta)==null?void 0:Y.type)===`${K.ADDITIONAL_META_TYPE.PUSH_SPACE}+1`||re(i)}catch(i){console.error("DAPP Error while diplaying received Notification: ",i)}}),e==null||e.on(n.EVENTS.CHAT_RECEIVED_MESSAGE,x=>{h(x)}),e==null||e.on(n.EVENTS.CHAT_GROUPS,x=>{console.info(x),A(x)})},oe=()=>{e==null||e.off(n.EVENTS.CONNECT),e==null||e.off(n.EVENTS.DISCONNECT),e==null||e.off(n.EVENTS.USER_FEEDS),e==null||e.off(n.EVENTS.CHAT_GROUPS),e==null||e.off(n.EVENTS.CHAT_RECEIVED_MESSAGE)};return s.useEffect(()=>(e&&se(),()=>{e&&oe()}),[e]),s.useEffect(()=>{if(t&&u&&l){e&&(e==null||e.disconnect());const x=n.createSocketConnection({user:E=="chat"?t:ne(t,u),socketType:E,env:l});f(x)}},[t,u,l]),{epnsSDKSocket:e,isSDKSocketConnected:d,messagesSinceLastConnection:c,groupInformationSinceLastConnection:g}},k="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58697%2010.5215V15.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.1957%203.91268V22.0868'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.21688L15.8047%2018.7822'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4132%2010.5215L22.4132%2015.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58594%2010.5215V15.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.19531%203.91309V22.0872'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.2168L15.8047%2018.7822'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4141%2010.5215L22.4141%2015.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",D=t=>s.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"#D53A94"}),s.createElement("path",{d:"M15.75 23.999H32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M24.0039 15.75V32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),b=({spaceid:t})=>{const{SpaceFeedComponent:l,SpaceInvitesComponent:u,CreateSpaceComponent:E}=s.useContext(de),{account:e}=Z(),{setSpaceId:f,spaceInvites:d}=s.useContext(ce),{connectedUser:p}=s.useContext(F),c=le(),h=pe(m.mobileL);s.useEffect(()=>{t&&f(t)},[t]);let g=Ee();const A=C=>{f(C),g(`/spaces/${C}`)};return a.jsxs(N,{children:[a.jsxs(_,{children:[a.jsx(q,{width:"48px",maxWidth:"48px",borderRadius:"100%",overflow:"hidden",margin:"0 5px 0 0",children:a.jsx(he,{alt:"Profile",src:p==null?void 0:p.profilePicture})}),a.jsx(O,{children:xe(e,6)}),a.jsx(v,{children:h?a.jsx(E,{children:a.jsx(D,{})}):a.jsx(E,{})}),a.jsx(u,{children:a.jsxs(j,{children:[a.jsx(Se,{src:(c==null?void 0:c.scheme)=="light"?k:M,srcSet:(c==null?void 0:c.scheme)=="light"?k:M,width:"30px"}),d>0&&a.jsx(L,{children:d})]})})]}),a.jsx(V,{children:a.jsx(l,{showTabs:!0,orientation:"vertical",width:h?360:"100%",height:"100%",onBannerClickHandler:C=>{A(C)}})})]})},N=r.div`
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
`,_=r.div`
  border: 1px solid ${({theme:t})=>t.default.borderColor};
  background: ${({theme:t})=>t.chat.sendMesageBg};
  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,O=r.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: normal;
  margin-left: 10px;
  color: ${({theme:t})=>t.spaceHostTextColor};
`,v=r.div`
  margin: 0px 14px 0px auto;

  @media ${m.mobileL} {
    padding-top: 5px;
  }
`,L=r.div`
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
`,U=({spaceid:t})=>{const{account:l,chainId:u}=Z(),[E,e]=s.useState(!0),{getUser:f,connectedUser:d,setConnectedUser:p}=s.useContext(F);w({account:l,chainId:u,env:ge.appEnv}),s.useEffect(()=>{e(!0),p(null)},[l]),s.useEffect(()=>{E&&(p(d),c())},[d]);const c=async()=>{var g;const h=ue({account:l});((g=d==null?void 0:d.wallets)==null?void 0:g.toLowerCase())!==(h==null?void 0:h.toLowerCase())&&await f(),e(!1)};return a.jsx($,{children:E?a.jsx(y,{children:a.jsx(q,{children:a.jsx(Ce,{type:fe.SEAMLESS,spinnerSize:24})})}):a.jsx(b,{spaceid:t})})},$=r.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  // background: ${t=>t.theme.default.bg};
  // border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE};
  // box-shadow: ${S.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  // flex: initial;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // padding: 13px 13px 13px 0px;
  margin: 0px 0px 17px 14px;

  // margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  max-height: calc(
    100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${I.MINI_MODULES.DESKTOP.TOP} -
      ${I.MINI_MODULES.DESKTOP.BOTTOM}
  );

  @media ${m.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(
      100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${I.MINI_MODULES.TABLET.TOP} -
        ${I.MINI_MODULES.TABLET.BOTTOM}
    );
  }

  @media ${m.mobileL} {
    margin: ${S.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${I.BIG_MODULES.MOBILE.TOP} -
        ${I.BIG_MODULES.MOBILE.BOTTOM}
    );
  }
`,R=r.div`
  padding: 20px;
`,y=r(R)`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,Q=()=>{let{spaceid:t}=Te();return a.jsx(H,{children:a.jsx(U,{spaceid:t})})},H=r(me)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Me as __tla,Q as default};
