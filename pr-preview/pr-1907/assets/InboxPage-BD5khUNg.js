import{cs as p,cA as r,gf as F,h2 as Se,hO as at,gk as ye,cH as U,gr as le,gs as I,gP as Ee,cq as de,cD as K,hP as rt,cr as be,cv as e,cE as we,hQ as ot,cx as X,cy as Q,hR as pe,hS as nt,hd as Y,hT as ct,hU as Te,hV as T,go as S,hW as lt,h5 as dt,hX as Ae,hY as pt,hZ as je,h9 as V,hb as ht,he as gt,hc as xt,cQ as he,h_ as mt,cu as ge,gd as x,ge as H,gh as ut,cO as Z,h$ as ft,cR as _e,cS as St,cT as ve,i0 as yt,i1 as Et,i2 as bt,i3 as wt,cF as Tt,gO as At,cB as jt,__tla as _t}from"./index-C8uskVBT.js";import{W as Oe,S as vt,__tla as Ot}from"./ChannelsModule-r0-YXO4v.js";import{D as Re,__tla as Rt}from"./DisplayNotice-CYhZ9bL5.js";import{N as xe,__tla as Mt}from"./RedCircle-BME0SN4A.js";import{__tla as kt}from"./Skeleton-CkZZ-9Ce.js";import{__tla as Dt}from"./cloneDeep-D4q2qPqd.js";import{__tla as It}from"./index.esm-BRHJv0ok.js";import{__tla as $t}from"./ManageNotifSettingDropdown-BHB6L43e.js";import"./notifSetting-DrLKauYy.js";import{__tla as Lt}from"./IpfsHelper-DrcCPwO9.js";import"./browser-Cr_ZWWON.js";let Me,Nt=Promise.all([(()=>{try{return _t}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Lt}catch{}})()]).then(async()=>{const ke=s=>p.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},p.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),De=({showFilter:s,setShowFilter:y,search:W,setSearch:A})=>{const d=le(),{userPushSDKInstance:l}=I(i=>i.user),E=p.useRef(null);Ee(E,()=>s&&y(!1));const{account:m,provider:j,chainId:b}=de(),{notifications:u,page:f,finishedFetching:_,toggle:J}=I(i=>i.notifications),R=K(),[$,L]=p.useState(null),z=()=>L(null),{run:N,welcomeNotifs:C}=I(i=>i.userJourney),[G,M]=p.useState(!1),[k,D]=p.useState(!1),{readOnlyWallet:ee}=p.useContext(rt),[te,se]=p.useState(!0),ie=be(),ae=()=>{ie("/snap")},P=({msg:i})=>e.jsx(Le,{children:e.jsx(Ne,{children:i})});p.useEffect(()=>{$&&z()},[$]);const re=async()=>{if(!(k||_||!l)){D(!0);try{const i=await l.notification.list("INBOX",{raw:!0,page:f,limit:10}),a=Y.utils.parseApiResponse(i);d(lt(a)),a.length===0&&d(Te())}catch(i){console.error(i)}finally{D(!1)}}},oe=async()=>{M(!0),D(!0);try{const i=await l.notification.list("INBOX",{raw:!0,page:1,limit:10});u.length||d(nt());const a=Y.utils.parseApiResponse(i),o=new Map,n=new Map;i.forEach(c=>{o.set(c.payload.data.sid,c.epoch),n.set(c.payload.data.sid,c.sender)}),a.forEach(c=>{c.date=o.get(c.sid),c.epoch=new Date(c.date).getTime()/1e3,c.channel=n.get(c.sid)}),d(ct({notifs:a,pageSize:10})),a.length===0&&d(Te())}catch(i){console.error(i)}finally{M(!1),D(!1)}};p.useEffect(()=>{(l==null?void 0:l.account)==ee||!l||oe()},[J,l]);const ne=async()=>{re()},t=i=>Number(i)===u.length-1&&!_&&!G,h=async({secret:i,title:a,message:o,image:n,cta:c})=>{try{let g=await T.decryptWithWalletRPCMethod(j,i,m);const w=await T.decryptWithAES(o,g);let v=await T.decryptWithAES(a,g),O=await T.decryptWithAES(n,g),B=await T.decryptWithAES(c,g);return{title:v,body:w,image:O,cta:B}}catch(g){g.code===4001?(console.error(g),S.dark(e.jsx(P,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):g.code===-32601?(console.error(g),S.dark(e.jsx(P,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(g),S.dark(e.jsx(P,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:R,children:e.jsx(Ie,{children:e.jsxs(Ge,{children:[te&&e.jsx(e.Fragment,{children:e.jsxs(Ce,{flexWrap:"nowrap",children:[e.jsx(ot,{}),e.jsxs(Pe,{justifyContent:"space-between",children:[e.jsx(ye,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),e.jsxs(Ue,{onClick:ae,children:["Install Push Snap ",e.jsx(ke,{})," "]})]}),e.jsx(Be,{onClick:()=>{se(!1)}})]})}),(!N&&!u.length||N&&!C.length)&&!k&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(Re,{title:"You currently have no notifications, try subscribing to some channels."})}),u&&e.jsxs($e,{id:"scrollstyle-secondary",children:[G&&e.jsx(U,{padding:"10px 20px",children:e.jsx(X,{type:Q.SEAMLESS})}),N&&C.map((i,a)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,blockchain:O,url:B}=i;return e.jsx(me,{children:e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,theme:R.scheme,chainName:O,url:B})},`${c}+${n}`)}),u.map((i,a)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,secret:O,notification:B,blockchain:ce,url:it}=i;if(!N)return e.jsxs(me,{children:[t(a)&&e.jsx(Oe,{onEnter:()=>ne()}),e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,isSecret:O!="",decryptFn:()=>h({secret:O,title:n,message:c,image:v,cta:o}),chainName:ce,theme:R.scheme,url:it})]},a)}),k&&!G&&e.jsx(U,{padding:"10px 20px",children:e.jsx(X,{type:Q.SEAMLESS})})]}),$&&e.jsx(xe,{notification:$,clearToast:z})]})})})},Ie=r.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${F.tablet} {
    height: 74%;
  }
`,me=r.div`
  margin: 25px 0px;
`,$e=r.div`
  align-self: stretch;
  flex: 1;
`,Le=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,Ne=r.div`
  margin: 0px 10px;
`,Ce=r(Se)`
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid #d4dcea;
  background: #fff;
  border: 1px solid ${s=>s.theme.default.border};
  background: ${s=>s.theme.default.bg};
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  max-height: 50px;

  @media ${F.tablet} {
    gap: 9px;
    margin-right: 10px;
  }

  @media (max-width: 525px) {
    padding: 8px 12px;
  }
`,Pe=r(Se)`
  @media ${F.tablet} {
    flex-direction: column;
    align-items: baseline;
    display: block;
    align-self: auto;
  }
`,Be=r(at)`
  cursor: pointer;
  height: 20px;
  width: 20px;
`,Ue=r(ye)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #d53a94;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`,Ge=r(U)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: ${s=>s.minimal?"20px 10px":"0px 20px 10px 20px"};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${s=>s.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${s=>s.theme.scrollBg};
    width: 6px;
  }

  @media (max-width: 768px) {
    padding: ${s=>s.minimal?"10px 5px":"0px"};

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
`,q=10,Fe=({showFilter:s,setShowFilter:y,search:W,setSearch:A})=>{const d=le(),{userPushSDKInstance:l}=I(t=>t.user),E=p.useRef(null);Ee(E,()=>s&&y(!1));const{account:m,chainId:j,provider:b}=de(),{subscriptionStatus:u}=I(t=>t.channels),f=K(),[_,J]=p.useState(null),R=()=>J(null),{run:$}=I(t=>t.userJourney),{notifications:L,page:z,finishedFetching:N}=I(t=>t.spam),[C,G]=p.useState(!1),[M,k]=p.useState(!1),D=({msg:t})=>e.jsx(ze,{children:e.jsx(Ke,{children:t})});p.useEffect(()=>{_&&R()},[_]);const ee={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},te=async()=>{if(!(M||N||$||!l)){k(!0);try{const t=await l.notification.list("SPAM",{limit:q,page:z,raw:!0});let h=Y.utils.parseApiResponse(t);h.forEach((a,o)=>{a.date=t[o].epoch,a.epoch=new Date(a.date).getTime()/1e3});const i=t.map(async(a,o)=>{a.channel=t[o].sender;let n=t[o].sender;return{...a}});h=await Promise.all(i),d(mt(h)),h.length===0&&d(je())}catch(t){console.error(t)}finally{k(!1)}}},se=async()=>{if(!(M||C||$)){G(!0),k(!0);try{const t=await l.notification.list("SPAM",{limit:q,page:1,raw:!0});L.length||d(Ae());let h=Y.utils.parseApiResponse(t);h.forEach((a,o)=>{a.date=t[o].epoch,a.epoch=new Date(a.date).getTime()/1e3});const i=h.map(async(a,o)=>{a.channel=t[o].sender;let n=t[o].sender;return{...a}});h=await Promise.all(i),d(pt({notifs:h,pageSize:q})),h.length===0&&d(je())}catch(t){console.error(t)}finally{G(!1),k(!1)}}};p.useEffect(()=>{l&&se()},[l]);const ie=async()=>{te(),d(Ae())},ae=t=>Number(t)===L.length-1&&!N&&!C,P=dt(),re=async(t,h)=>{if(!t)return;let i=t;if(!i)return;console.debug(i),P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(b,m);const a=await b.getSigner(m);console.debug(a),console.debug({signer:a,channelAddress:V(t,ee[h]),userAddress:V(m,j)}),await Y.channels.subscribe({signer:a,channelAddress:V(t,j),userAddress:V(m,j),onSuccess:()=>{P.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:o=>e.jsx(ht,{size:o,color:"green"})}),d(gt({channelAddress:t,status:!0}))},onError:o=>{console.error(o),P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:n=>e.jsx(xt,{size:n,color:"red"})})},env:he.pushNodesEnv})},oe=t=>u[t],ne=async({secret:t,title:h,message:i,image:a,cta:o})=>{try{let n=await T.decryptWithWalletRPCMethod(b,t,m);const c=await T.decryptWithAES(i,n);let g=await T.decryptWithAES(h,n),w=await T.decryptWithAES(a,n),v=await T.decryptWithAES(o,n);return{title:g,body:c,image:w,cta:v}}catch(n){n.code===4001?(console.error(n),S.dark(e.jsx(D,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n.code===-32601?(console.error(n),S.dark(e.jsx(D,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(n),S.dark(e.jsx(D,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:f,children:e.jsx(Je,{children:e.jsxs(vt,{children:[L&&e.jsxs(We,{id:"scrollstyle-secondary",children:[C&&e.jsx(U,{padding:"10px 20px",children:e.jsx(X,{type:Q.SEAMLESS})}),L.map((t,h)=>{const{cta:i,title:a,message:o,app:n,icon:c,image:g,secret:w,notification:v,channel:O,blockchain:B,url:ce}=t;return e.jsxs(Ye,{children:[ae(h)&&!M&&e.jsx(Oe,{onEnter:ie}),e.jsx(pe,{notificationTitle:a,notificationBody:o,cta:i,app:n,icon:c,image:g,theme:f.scheme,subscribeFn:()=>re(O,B),isSpam:!0,isSubscribedFn:async()=>oe(O),isSecret:w!="",decryptFn:()=>ne({secret:w,title:a,message:o,image:g,cta:i}),chainName:B,url:ce})]},h)}),M&&!C&&e.jsx(X,{type:Q.SEAMLESS})]}),!L.length&&!M&&e.jsx(He,{children:e.jsx(Re,{title:"You currently have no spam notifications."})}),_&&e.jsx(xe,{notification:_,clearToast:R})]})})})},He=r.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,We=r.div`
  align-self: stretch;
  flex: 1;
`,Je=r.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${F.tablet} {
    height: 74%;
  }
`,Ye=r.div`
  margin: 25px 0px;
`,ze=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 10px;
`,Ke=r.div`
  margin: 0px 10px;
`,Xe=({isSpam:s})=>{const[y,W]=p.useState(!s),[A,d]=p.useState(!1),[l,E]=p.useState("");K();const m=be(),j=()=>W(u=>!u),b=u=>{j(),d(!1),E(""),m(u)};return e.jsxs(Qe,{children:[e.jsx(Ve,{children:e.jsxs(Ze,{children:[e.jsx(ue,{isActive:y,onClick:()=>b(ge.Inbox),children:"Inbox"}),e.jsx(ue,{isActive:!y,onClick:()=>b(ge.Spam),children:"Spam"})]})}),y?e.jsx(De,{showFilter:A,setShowFilter:d,search:l,setSearch:E}):e.jsx(Fe,{showFilter:A,setShowFilter:d,search:l,setSearch:E})]})},Qe=r.div`
  height: 100%;
  width: 100%;
`,Ve=r.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  // height: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    margin: 40px 30px 20px 30px;
  }

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    background-color: ${s=>s.theme.default.border};
  }
`,Ze=r.div`
  display: flex;
  align-self: flex-end;
  padding-bottom: 15px;
  padding-top: 0px;

  @media (max-width: 768px) {
    align-self: flex-start;
    padding-top: 15px;
  }
`,ue=r.div`
  width: 48;
  height: 25px;
  padding: 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${s=>s.isActive?"#CF1C84":s.theme.color};
  cursor: pointer;

  ${s=>s.isActive&&`&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -15px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`;r(U)`
  position: relative;
  max-width: 496px;
  min-width: 320px;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,r.input`
  width: 100%;
  height: 44px;
  padding-left: 50px;
  border-radius: 99px;
  border: none;
  background: ${s=>s.theme.viewChannelSearchBg};
  color: ${s=>s.theme.viewChannelSearchText};
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  input[type='reset'] {
    display: none;
  }
  &::placeholder {
    color: #657795;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    // border: 1px solid #ec008c;
  }
`,r(U)`
  cursor: pointer;
`,r(U)`
  cursor: pointer;
  transform: rotate(90deg);
`;const qe=he.coreContractChain,et=({isSpam:s})=>{ut.pageview(ge.Inbox);const y=le(),{account:W,chainId:A,provider:d}=de(),{epnsReadProvider:l,epnsCommReadProvider:E}=I(f=>f.contracts),[m,j]=Z.useState(null),b=()=>j(null);K();const u=qe===A;return Z.useEffect(()=>{m&&b()},[m]),Z.useEffect(()=>{A&&async function(){const f=u?d:new ft(he.coreRPC),_=new _e(St.epnscore,ve.epnscore,f),J=yt[A].commAddress,R=new _e(J,ve.epnsComm,d);y(Et(R)),y(bt(_))}()},[W,A]),Z.useEffect(()=>{!l||!E||l.pushChannelAdmin().then(f=>{y(wt(f))}).catch(f=>{console.error({err:f})})},[l,E]),e.jsx(tt,{children:e.jsxs(st,{children:[e.jsx("div",{className:"joyride"}),e.jsx(Xe,{isSpam:s}),m&&e.jsx(xe,{notification:m,clearToast:b})]})})},tt=r(Tt)`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  background: ${s=>s.theme.default.bg};
  border-top-left-radius: ${x.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${x.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.DESKTOP};
  height: calc(
    100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${H.BIG_MODULES.DESKTOP.TOP} -
      ${H.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${F.laptop} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${H.BIG_MODULES.TABLET.TOP} -
        ${H.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE}
      ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${F.mobileL} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${H.BIG_MODULES.MOBILE.TOP} -
        ${H.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${x.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,st=r.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,r.div`
  margin: 0px 10px;
`;let fe;Me=()=>{const s=At();return e.jsx(fe,{children:e.jsx(et,{isSpam:s.pathname==="/spam"})})},fe=r(jt)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Nt as __tla,Me as default};
