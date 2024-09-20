import{d_ as o,gz as ie,gA as n,fI as ne,gB as K,fM as T,fr as re,e7 as r,eQ as m,gC as de,dY as Z,gD as ce,fD as F,e9 as le,gE as pe,dZ as Ee,e1 as s,eT as q,f1 as he,gF as xe,gG as Se,eO as S,eP as I,gH as ue,e4 as ge,ej as fe,e5 as Te,e8 as me,__tla as Ie}from"./index-CslCqxx-.js";import{L as Ce,__tla as ke}from"./LoaderSpinner-C7HYvzCo.js";let Q,Ae=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let D,k,A,w,N,O,_,v,L,b,j,V,U,$,R,y,H;D=({account:t,env:l,chainId:u,socketType:E})=>{const[e,g]=o.useState(null),[d,p]=o.useState(e==null?void 0:e.connected),[c,h]=o.useState(""),[f,M]=o.useState(""),{videoCallData:C,incomingCall:X,connectWrapper:ee,requestWrapper:te,acceptRequestWrapper:se,isVideoCallInitiator:P}=o.useContext(ie),oe=()=>{e==null||e.on(n.EVENTS.CONNECT,()=>{p(!0)}),e==null||e.on(n.EVENTS.DISCONNECT,()=>{p(!1)}),e==null||e.on(n.EVENTS.USER_FEEDS,x=>{var B,G,z,W,J,Y;try{const{payload:i}=x||{};if(Object.keys(i).length>0)if(((G=(B=i==null?void 0:i.data)==null?void 0:B.additionalMeta)==null?void 0:G.type)===`${K.ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){const a=JSON.parse(i.data.additionalMeta.data);console.debug("RECIEVED VIDEO DATA",a),a.status===T.VideoCallStatus.INITIALIZED?X(a):a.status===T.VideoCallStatus.RECEIVED||a.status===T.VideoCallStatus.RETRY_RECEIVED?ee(a):a.status===T.VideoCallStatus.DISCONNECTED?window.location.reload():a.status===T.VideoCallStatus.RETRY_INITIALIZED&&P()?te({senderAddress:a.recipientAddress,recipientAddress:a.senderAddress,chatId:a.chatId,retry:!0}):a.status===T.VideoCallStatus.RETRY_INITIALIZED&&!P()&&se({signalData:a.signalData,senderAddress:a.recipientAddress,recipientAddress:a.senderAddress,chatId:a.chatId,retry:!0})}else((W=(z=i==null?void 0:i.data)==null?void 0:z.additionalMeta)==null?void 0:W.data)==="PUSH SPACE META MESSAGE"||((Y=(J=i==null?void 0:i.data)==null?void 0:J.additionalMeta)==null?void 0:Y.type)===`${K.ADDITIONAL_META_TYPE.PUSH_SPACE}+1`||re(i)}catch(i){console.error("DAPP Error while diplaying received Notification: ",i)}}),e==null||e.on(n.EVENTS.CHAT_RECEIVED_MESSAGE,x=>{h(x)}),e==null||e.on(n.EVENTS.CHAT_GROUPS,x=>{console.info(x),M(x)})},ae=()=>{e==null||e.off(n.EVENTS.CONNECT),e==null||e.off(n.EVENTS.DISCONNECT),e==null||e.off(n.EVENTS.USER_FEEDS),e==null||e.off(n.EVENTS.CHAT_GROUPS),e==null||e.off(n.EVENTS.CHAT_RECEIVED_MESSAGE)};return o.useEffect(()=>(e&&oe(),()=>{e&&ae()}),[e]),o.useEffect(()=>{if(t&&u&&l){e&&(e==null||e.disconnect());const x=n.createSocketConnection({user:E=="chat"?t:ne(t,u),socketType:E,env:l});g(x)}},[t,u,l]),{epnsSDKSocket:e,isSDKSocketConnected:d,messagesSinceLastConnection:c,groupInformationSinceLastConnection:f}},k="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58697%2010.5215V15.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.1957%203.91268V22.0868'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.21688L15.8047%2018.7822'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4132%2010.5215L22.4132%2015.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58594%2010.5215V15.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.19531%203.91309V22.0872'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.2168L15.8047%2018.7822'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4141%2010.5215L22.4141%2015.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",w=t=>o.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"#D53A94"}),o.createElement("path",{d:"M15.75 23.999H32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M24.0039 15.75V32.2496",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),N=({spaceid:t})=>{const{SpaceFeedComponent:l,SpaceInvitesComponent:u,CreateSpaceComponent:E}=o.useContext(de),{account:e}=Z(),{setSpaceId:g,spaceInvites:d}=o.useContext(ce),{connectedUser:p}=o.useContext(F),c=le(),h=pe(m.mobileL);o.useEffect(()=>{t&&g(t)},[t]);let f=Ee();const M=C=>{g(C),f(`/spaces/${C}`)};return s.jsxs(O,{children:[s.jsxs(_,{children:[s.jsx(q,{width:"48px",maxWidth:"48px",borderRadius:"100%",overflow:"hidden",margin:"0 5px 0 0",children:s.jsx(he,{alt:"Profile",src:p==null?void 0:p.profilePicture})}),s.jsx(v,{children:xe(e,6)}),s.jsx(L,{children:h?s.jsx(E,{children:s.jsx(w,{})}):s.jsx(E,{})}),s.jsx(u,{children:s.jsxs(j,{children:[s.jsx(Se,{src:(c==null?void 0:c.scheme)=="light"?k:A,srcSet:(c==null?void 0:c.scheme)=="light"?k:A,width:"30px"}),d>0&&s.jsx(b,{children:d})]})})]}),s.jsx(V,{children:s.jsx(l,{showTabs:!0,orientation:"vertical",width:h?360:"100%",height:"100%",onBannerClickHandler:C=>{M(C)}})})]})},O=r.div`
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
`,U=({spaceid:t})=>{const{account:l,chainId:u}=Z(),[E,e]=o.useState(!0),{getUser:g,connectedUser:d,setConnectedUser:p}=o.useContext(F);D({account:l,chainId:u,env:fe.appEnv}),o.useEffect(()=>{e(!0),p(null)},[l]),o.useEffect(()=>{E&&(p(d),c())},[d]);const c=async()=>{var f;const h=ue({account:l});((f=d==null?void 0:d.wallets)==null?void 0:f.toLowerCase())!==(h==null?void 0:h.toLowerCase())&&await g(),e(!1)};return s.jsx($,{children:E?s.jsx(y,{children:s.jsx(q,{children:s.jsx(Ce,{type:ge.SEAMLESS,spinnerSize:24})})}):s.jsx(N,{spaceid:t})})},$=r.div`
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
`,Q=()=>{let{spaceid:t}=Te();return s.jsx(H,{children:s.jsx(U,{spaceid:t})})},H=r(me)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Ae as __tla,Q as default};
