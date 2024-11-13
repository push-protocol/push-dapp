import{go as xe,eb as ue,gv as ge,gw as fe,e7 as a,f6 as U,gx as P,dV as I,f1 as A,dX as l,dW as z,f0 as R,gy as B,gz as G,d_ as e,gA as me,gm as Se,eN as u,fv as we,g4 as be,e2 as je,d$ as ye,eh as Ee,gB as _e,fm as Te,gC as $e,fn as Me,eQ as $,gt as H,gD as ve,gE as Oe,eS as D,gF as Ie,e0 as Ae,e1 as De,el as Ne,gG as ke,eU as Ce,eL as f,eM as M,eW as Le,__tla as Ue}from"./index-9Rpns__7.js";import{c as Pe,__tla as ze}from"./cloneDeep-DgUoTaOI.js";import{E as Re,__tla as Be}from"./EmptyNotificationSettings-DUsCZo7i.js";import{L as Ge,__tla as He}from"./LoaderSpinner-DU5Q_cEB.js";import{__tla as Je}from"./index.esm-DEe9ygq2.js";let J,We=Promise.all([(()=>{try{return Ue}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{const W=async({channel:t})=>{try{return await xe.channels.getChannel({channel:t,env:ue.appEnv})}catch(c){throw console.error(c),new Error(c.message)}},F=async({userCaipAddress:t})=>{var p,d;const c=fe.userSubscriptions(t);try{return(d=(p=await ge(c))==null?void 0:p.data)==null?void 0:d.subscriptions}catch(w){throw new Error(w.message)}},q=()=>{const{account:t,chainId:c}=I(),{subscriptionStatus:p,userSettings:d}=A(i=>i.channels),[w,h]=l.useState([]),[v,y]=l.useState(!0),E=z(),b=R(),_=()=>{E("/channels")},T=async i=>{const r=await W({channel:i});if(r)return{channel:i,id:r.id,icon:r.icon,name:r.name,channel_settings:r.channel_settings}},m=async i=>{const r=await Promise.all(Object.keys(i).map(async x=>{const n=await T(x);if(n)return n}));h(r)};l.useEffect(()=>{t&&async function(){if(y(!0),Object.keys(p).length===0){const i=Se(t,c),r=await F({userCaipAddress:i}),x={},n={};r.map(({channel:s,user_settings:S})=>{x[s]=!0,n[s]=S?JSON.parse(S):null}),b(B(x)),b(G(n)),await m(x)}else await m(p);y(!1)}()},[t]);const j=l.useMemo(()=>Pe(d),[d]);return e.jsx(e.Fragment,{children:v?e.jsx(e.Fragment,{children:e.jsx(N,{children:e.jsx(Ge,{})})}):e.jsx(e.Fragment,{children:w.length>0?w.map((i,r)=>e.jsx(e.Fragment,{children:i&&e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsxs(X,{children:[e.jsx(Q,{src:i.icon}),e.jsx(V,{children:i.name})]}),e.jsx(me,{userSetting:j[i.channel],centerOnMobile:!1,channelDetail:i,onSuccessOptout:()=>{h(x=>x.filter(n=>(n==null?void 0:n.id)!==i.id))},children:e.jsx(Y,{})})]},i.id),r!==w.length-1&&e.jsx(Z,{})]})})):e.jsx(N,{children:e.jsx(Re,{title:"No Channel Opt-ins",description:"Opt-in channels to manage your notification preferences",buttonTitle:"Go to Channels",onClick:_,showTopBorder:!1})})})})},K=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`,X=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Q=a(U)`
  border: 1px solid ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`,V=a.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
`,Y=a(P)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${t=>t.theme.default.color};
`,Z=a.span`
  background-color: ${t=>t.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`,N=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`,ee=()=>{const{account:t,isWalletConnected:c,connect:p}=I(),d=je(),[w,h]=l.useState(!1),[v,y]=l.useState(!1),[E,b]=l.useState(null),[_,T]=l.useState({enabled:!1,hrsLeft:0}),[m,j]=l.useState(!1),i="npm:@pushprotocol/snap";async function r(){if(!c){b("Connect your metamask wallet to install Snap"),j(!1);return}b("");const o=await window.ethereum.request({method:"wallet_getSnaps"});console.debug("Snaps installed",o),Object.keys(o).forEach(g=>{g=="npm:@pushprotocol/snap"&&j(!0)})}async function x(){var g;const o=await((g=window.ethereum)==null?void 0:g.request({method:"wallet_invokeSnap",params:{snapId:i,request:{method:"pushproto_getaddresses"}}}));console.debug(t),o.includes(t)?y(!0):y(!1)}l.useEffect(()=>{r(),x()},[t,c,m]);async function n(){var O;if(!c)return;let o=i,g={};await((O=window.ethereum)==null?void 0:O.request({method:"wallet_requestSnaps",params:{[o]:g}})),console.info("Snap Installed"),j(!0)}async function s(){if(!c){b("Connect your metamask wallet to install Snap");return}b(""),h(!0);try{c||await p(),m||await n(),h(!1)}catch(o){h(!1),console.error("Error",o)}}const S=()=>{const{isModalOpen:o,showModal:g,ModalComponent:O}=Te();return e.jsxs(te,{children:[e.jsx(O,{InnerComponent:$e,modalPadding:"0px",modalPosition:Me.ON_ROOT}),e.jsx($,{children:e.jsx(H,{src:ve,width:"276px",height:"202px"})}),e.jsxs($,{gap:"24px",children:[e.jsxs($,{gap:"12px",children:[e.jsxs($,{children:[e.jsx(Oe,{fontSize:"34px",fontWeight:"500",color:d.snapPrimaryText,letterSpacing:"normal",children:"Push Snap"}),e.jsx(D,{fontSize:"12px",fontWeight:"400",color:d.modalIconColor,children:"powered by MetaMask"})]}),e.jsx($,{children:e.jsx(D,{fontSize:"14px",fontWeight:"400",color:d.snapSecondaryText,children:"You\u2019re about to install Push Snap which allows you to receive notifications from Push directly on MetaMask!"})})]}),E&&e.jsx(Ie,{variant:"error",heading:E,showIcon:!0}),e.jsx($,{children:w?e.jsx(Ae,{type:De.SEAMLESS,spinnerSize:44}):e.jsx(Ne,{onClick:()=>s(),children:!m&&"Connect Snap"})}),e.jsxs(ne,{gap:"7px",onClick:g,children:[e.jsx(H,{src:ke,width:16}),e.jsx(D,{color:d.modalIconColor,fontSize:"14px",fontWeight:"400",children:"About this Snap"})]})]})]})};return e.jsx(e.Fragment,{children:m?e.jsx(e.Fragment,{children:e.jsxs(ye,{display:"flex",flexDirection:"column",padding:"spacing-none spacing-none spacing-none spacing-xxs",children:[e.jsx(Ee,{variant:"h4-semibold",children:"Push Snap Settings"}),e.jsx(_e,{snoozeDuration:_,setSnoozeDuration:T})]})}):e.jsx(S,{})})},te=a(we)`
  width: 438px;
  height: 423px;
  border-radius: 32px;
  background: #fff;
  background: ${t=>t.theme.default.bg};
  margin: auto;
  @media ${u.mobileL} {
    width: 330px;
  }
`,ne=a(be)`
  cursor: pointer;
`;function ae(){var r,x;const{account:t,chainId:c}=I(),{userPushSDKInstance:p}=A(n=>n.user),{subscriptionStatus:d,userSettings:w}=A(n=>n.channels),[h,v]=l.useState(0),[y,E]=l.useState([]),[b,_]=l.useState(!0);z();const T=R(),m=async n=>{const s=await p.channel.info(n);if(s)return{channel:n,id:s.id,icon:s.icon,name:s.name,channel_settings:s.channel_settings}},j=async n=>{const s=[];await Promise.all(Object.keys(n).map(async S=>{const o=await m(S);o&&s.push(o)})),E(s)};l.useEffect(()=>{!t||!p||async function(){if(_(!0),Object.keys(d).length===0){const n=await p.notification.subscriptions(),s={},S={};n.map(({channel:o,user_settings:g})=>{s[o]=!0,S[o]=g?JSON.parse(g):null}),T(B(s)),T(G(S)),await j(s)}else await j(d);_(!1)}()},[t,p]);const i=[{value:0,label:"Notification Settings",title:"Notification Settings"},{value:1,label:"Push Snap",title:""}];return e.jsxs(ie,{children:[e.jsx(se,{children:"Settings"}),e.jsx(re,{children:"Customize your Push profile or manage your notification preferences"}),e.jsxs(oe,{children:[e.jsx(le,{children:i.map(n=>e.jsx(ce,{onClick:()=>v(n.value),isSelected:n.value===h,children:n.label},n.value))}),e.jsx(de,{children:e.jsxs(pe,{children:[((r=i[h])==null?void 0:r.title)&&e.jsx(he,{children:(x=i[h])==null?void 0:x.title}),h===0&&e.jsx(q,{}),h===1&&e.jsx(ee,{})]})})]})]})}const ie=a.div`
  padding: 32px 24px;
  flex: 1;

  @media ${u.tablet} {
    padding: 24px 12px;
  }
`,se=a.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.color};

  @media ${u.tablet} {
    text-align: center;
    margin-top: 24px;
  }
`,re=a.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
  margin-bottom: 40px;

  @media ${u.tablet} {
    text-align: center;
    margin-bottom: 8px;
  }
`,oe=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${u.tablet} {
    flex-direction: column;
  }
`,le=a.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;

  @media ${u.tablet} {
    margin-right: 0px;
    flex-direction: row;
    overflow-x: scroll;
    justify-content: center;
  }
`,ce=a(Ce)`
  background-color: ${t=>t.isSelected?t.theme.default.secondaryBg:"transparent"};
  color: ${t=>t.theme.default.secondaryColor};
  border-radius: 12px;
  width: 100%;
  padding: 14px;
  margin: 10px 0px;
  justify-content: flex-start;

  &:hover:after {
    background-color: ${t=>t.theme.default.secondaryBg};
  }

  @media ${u.tablet} {
    padding: 12px;
    max-width: fit-content;
  }
`,de=a.div`
  border: 1px solid ${t=>t.theme.default.borderColor};
  padding: 12px;
  border-radius: 16px;
  flex-grow: 1;

  @media ${u.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`,pe=a.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 55vh;
  padding: 12px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d53a94;
    border-radius: 99px;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  @media ${u.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`,he=a.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 20px;
  color: ${t=>t.theme.default.color};

  @media ${u.tablet} {
    text-align: center;
  }
`;a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`,a(U)`
  border: 1px solid ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`,a.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
`,a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,a.span`
  background-color: ${t=>t.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`,a(P)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${t=>t.theme.default.color};
`,a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;let k,C,L;k=()=>e.jsx(C,{children:e.jsx(ae,{})}),C=a.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${t=>t.theme.default.bg};
	border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${f.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${f.CONSTANTS.HEADER_HEIGHT}px - ${M.MINI_MODULES.DESKTOP.TOP} - ${M.MINI_MODULES.DESKTOP.BOTTOM});
  
  @media ${u.laptop} {
    margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${f.CONSTANTS.HEADER_HEIGHT}px - ${M.MINI_MODULES.TABLET.TOP} - ${M.MINI_MODULES.TABLET.BOTTOM});
  }

  @media ${u.mobileL} {
    margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${f.CONSTANTS.HEADER_HEIGHT}px - ${M.MINI_MODULES.MOBILE.TOP});
    border: ${f.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE} ${f.ADJUSTMENTS.RADIUS.LARGE} 0 0;
`,J=()=>e.jsx(L,{children:e.jsx(k,{})}),L=a(Le)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{We as __tla,J as default};
