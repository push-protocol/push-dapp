import{gr as xe,ee as ge,gy as ue,gz as fe,ea as a,f6 as U,gA as P,dY as A,fh as D,d_ as c,dZ as z,fg as R,gB as B,gC as G,e1 as e,gD as me,gp as Se,eQ as h,fy as be,g7 as we,e5 as je,eV as v,gE as ye,fp as _e,gF as Ee,fq as Te,eT as T,gw as H,gG as Me,gH as $e,e3 as Oe,e4 as Ie,eo as ve,gI as Ae,eX as De,eO as g,eP as $,eZ as Ne,__tla as Ce}from"./index-BkrD57_A.js";import{c as ke,__tla as Le}from"./cloneDeep-CFw7On-N.js";import{E as Ue,__tla as Pe}from"./EmptyNotificationSettings-hPQD5mbM.js";import{L as ze,__tla as Re}from"./LoaderSpinner-syMnsAD1.js";import{__tla as Be}from"./index.esm-udDmJ-bd.js";let J,Ge=Promise.all([(()=>{try{return Ce}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Be}catch{}})()]).then(async()=>{const F=async({channel:t})=>{try{return await xe.channels.getChannel({channel:t,env:ge.appEnv})}catch(u){throw console.error(u),new Error(u.message)}},W=async({userCaipAddress:t})=>{var d,l;const u=fe.userSubscriptions(t);try{return(l=(d=await ue(u))==null?void 0:d.data)==null?void 0:l.subscriptions}catch(f){throw new Error(f.message)}},q=()=>{const{account:t,chainId:u}=A(),{subscriptionStatus:d,userSettings:l}=D(i=>i.channels),[f,m]=c.useState([]),[M,w]=c.useState(!0),O=z(),y=R(),_=()=>{O("/channels")},E=async i=>{const s=await F({channel:i});if(s)return{channel:i,id:s.id,icon:s.icon,name:s.name,channel_settings:s.channel_settings}},S=async i=>{const s=await Promise.all(Object.keys(i).map(async p=>{const n=await E(p);if(n)return n}));m(s)};c.useEffect(()=>{t&&async function(){if(w(!0),Object.keys(d).length===0){const i=Se(t,u),s=await W({userCaipAddress:i}),p={},n={};s.map(({channel:o,user_settings:b})=>{p[o]=!0,n[o]=b?JSON.parse(b):null}),y(B(p)),y(G(n)),await S(p)}else await S(d);w(!1)}()},[t]);const j=c.useMemo(()=>ke(l),[l]);return e.jsx(e.Fragment,{children:M?e.jsx(e.Fragment,{children:e.jsx(N,{children:e.jsx(ze,{})})}):e.jsx(e.Fragment,{children:f.length>0?f.map((i,s)=>e.jsx(e.Fragment,{children:i&&e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsxs(X,{children:[e.jsx(Y,{src:i.icon}),e.jsx(Z,{children:i.name})]}),e.jsx(me,{userSetting:j[i.channel],centerOnMobile:!1,channelDetail:i,onSuccessOptout:()=>{m(p=>p.filter(n=>(n==null?void 0:n.id)!==i.id))},children:e.jsx(Q,{})})]},i.id),s!==f.length-1&&e.jsx(V,{})]})})):e.jsx(N,{children:e.jsx(Ue,{title:"No Channel Opt-ins",description:"Opt-in channels to manage your notification preferences",buttonTitle:"Go to Channels",onClick:_,showTopBorder:!1})})})})},K=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`,X=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Y=a(U)`
  border: 1px solid ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`,Z=a.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
`,Q=a(P)`
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
`,V=a.span`
  background-color: ${t=>t.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`,N=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`,ee=()=>{const{account:t,isWalletConnected:u,connect:d}=A(),l=je(),[f,m]=c.useState(!1),[M,w]=c.useState(!1),[O,y]=c.useState(!1),[_,E]=c.useState({enabled:!1,hrsLeft:0}),[S,j]=c.useState(!1),i="npm:@pushprotocol/snap";async function s(){const r=await window.ethereum.request({method:"wallet_getSnaps"});console.debug("Snaps installed",r),Object.keys(r).forEach(x=>{x=="npm:@pushprotocol/snap"&&j(!0)})}async function p(){var x;const r=await((x=window.ethereum)==null?void 0:x.request({method:"wallet_invokeSnap",params:{snapId:i,request:{method:"pushproto_getaddresses"}}}));console.debug(t),console.debug(f),r.includes(t)?y(!0):y(!1)}c.useEffect(()=>{s(),p()},[t,f]);async function n(){var I;let r=i,x={};await((I=window.ethereum)==null?void 0:I.request({method:"wallet_requestSnaps",params:{[r]:x}})),console.info("Snap Installed")}async function o(){w(!0);try{u||await d(),S||(await n(),j(!0)),w(!1)}catch(r){w(!1),console.error("Error",r)}}console.info("snapInstalled",S);const b=()=>{const{isModalOpen:r,showModal:x,ModalComponent:I}=_e();return e.jsxs(te,{children:[e.jsx(I,{InnerComponent:Ee,modalPadding:"0px",modalPosition:Te.ON_ROOT}),e.jsx(T,{children:e.jsx(H,{src:Me,width:"276px",height:"202px"})}),e.jsxs(T,{gap:"24px",children:[e.jsxs(T,{gap:"12px",children:[e.jsxs(T,{children:[e.jsx($e,{fontSize:"34px",fontWeight:"500",color:l.snapPrimaryText,letterSpacing:"normal",children:"Push Snap"}),e.jsx(v,{fontSize:"12px",fontWeight:"400",color:l.modalIconColor,children:"powered by MetaMask"})]}),e.jsx(T,{children:e.jsx(v,{fontSize:"14px",fontWeight:"400",color:l.snapSecondaryText,children:"You\u2019re about to install Push Snap which allows you to receive notifications from Push directly on MetaMask!"})})]}),e.jsx(T,{children:M?e.jsx(Oe,{type:Ie.SEAMLESS,spinnerSize:44}):e.jsx(ve,{onClick:()=>o(),children:!S&&"Connect Snap"})}),e.jsxs(ne,{gap:"7px",onClick:x,children:[e.jsx(H,{src:Ae,width:16}),e.jsx(v,{color:l.modalIconColor,fontSize:"14px",fontWeight:"400",children:"About this Snap"})]})]})]})};return e.jsx(e.Fragment,{children:S?e.jsxs(e.Fragment,{children:[e.jsx(v,{fontWeight:"500",fontSize:"22px",color:l.modalMessageColor,flex:"1",padding:"0px 0px 0px 9px",children:"Snap Settings"}),e.jsx(ye,{snoozeDuration:_,setSnoozeDuration:E})]}):e.jsx(b,{})})},te=a(be)`
  width: 438px;
  height: 423px;
  border-radius: 32px;
  background: #fff;
  background: ${t=>t.theme.default.bg};
  margin: auto;
  @media ${h.mobileL} {
    width: 330px;
  }
`,ne=a(we)`
  cursor: pointer;
`;function ae(){var s,p;const{account:t,chainId:u}=A(),{userPushSDKInstance:d}=D(n=>n.user),{subscriptionStatus:l,userSettings:f}=D(n=>n.channels),[m,M]=c.useState(0),[w,O]=c.useState([]),[y,_]=c.useState(!0);z();const E=R(),S=async n=>{const o=await d.channel.info(n);if(o)return{channel:n,id:o.id,icon:o.icon,name:o.name,channel_settings:o.channel_settings}},j=async n=>{const o=[];await Promise.all(Object.keys(n).map(async b=>{const r=await S(b);r&&o.push(r)})),O(o)};c.useEffect(()=>{!t||!d||async function(){if(_(!0),Object.keys(l).length===0){const n=await d.notification.subscriptions(),o={},b={};n.map(({channel:r,user_settings:x})=>{o[r]=!0,b[r]=x?JSON.parse(x):null}),E(B(o)),E(G(b)),await j(o)}else await j(l);_(!1)}()},[t,d]);const i=[{value:0,label:"Notification Settings",title:"Notification Settings"},{value:1,label:"Push Snap",title:""}];return e.jsxs(ie,{children:[e.jsx(oe,{children:"Settings"}),e.jsx(se,{children:"Customize your Push profile or manage your notification preferences"}),e.jsxs(re,{children:[e.jsx(le,{children:i.map(n=>e.jsx(ce,{onClick:()=>M(n.value),isSelected:n.value===m,children:n.label},n.value))}),e.jsx(de,{children:e.jsxs(pe,{children:[((s=i[m])==null?void 0:s.title)&&e.jsx(he,{children:(p=i[m])==null?void 0:p.title}),m===0&&e.jsx(q,{}),m===1&&e.jsx(ee,{})]})})]})]})}const ie=a.div`
  padding: 32px 24px;
  flex: 1;

  @media ${h.tablet} {
    padding: 24px 12px;
  }
`,oe=a.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.color};

  @media ${h.tablet} {
    text-align: center;
    margin-top: 24px;
  }
`,se=a.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
  margin-bottom: 40px;

  @media ${h.tablet} {
    text-align: center;
    margin-bottom: 8px;
  }
`,re=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${h.tablet} {
    flex-direction: column;
  }
`,le=a.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;

  @media ${h.tablet} {
    margin-right: 0px;
    flex-direction: row;
    overflow-x: scroll;
    justify-content: center;
  }
`,ce=a(De)`
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

  @media ${h.tablet} {
    padding: 12px;
    max-width: fit-content;
  }
`,de=a.div`
  border: 1px solid ${t=>t.theme.default.borderColor};
  padding: 12px;
  border-radius: 16px;
  flex-grow: 1;

  @media ${h.tablet} {
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

  @media ${h.tablet} {
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

  @media ${h.tablet} {
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
`;let C,k,L;C=()=>e.jsx(k,{children:e.jsx(ae,{})}),k=a.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${t=>t.theme.default.bg};
	border-radius: ${g.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${g.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${g.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${g.CONSTANTS.HEADER_HEIGHT}px - ${$.MINI_MODULES.DESKTOP.TOP} - ${$.MINI_MODULES.DESKTOP.BOTTOM});
  
  @media ${h.laptop} {
    margin: ${g.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${g.CONSTANTS.HEADER_HEIGHT}px - ${$.MINI_MODULES.TABLET.TOP} - ${$.MINI_MODULES.TABLET.BOTTOM});
  }

  @media ${h.mobileL} {
    margin: ${g.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${g.CONSTANTS.HEADER_HEIGHT}px - ${$.MINI_MODULES.MOBILE.TOP});
    border: ${g.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${g.ADJUSTMENTS.RADIUS.LARGE} ${g.ADJUSTMENTS.RADIUS.LARGE} 0 0;
`,J=()=>e.jsx(L,{children:e.jsx(C,{})}),L=a(Ne)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Ge as __tla,J as default};
