import{d_ as p,e6 as r,eT as H,fE as Se,gd as it,eY as Ee,ed as U,f2 as le,f3 as I,fq as ye,dY as de,e9 as K,ge as rt,dZ as be,e1 as e,ea as we,gf as ot,e3 as X,e4 as q,gg as pe,gh as nt,fP as J,gi as ct,gj as Te,gk as T,eu as S,gl as lt,fH as dt,gm as Ae,gn as pt,go as je,fL as V,fN as ht,fQ as gt,fO as xt,em as he,gp as mt,e0 as ge,eR as x,eS as F,eV as ut,ek as Z,gq as ft,en as _e,eo as St,ep as ve,gr as Et,gs as yt,gt as bt,gu as wt,eb as Tt,fp as At,e7 as jt,__tla as _t}from"./index-ClFky8uL.js";import{W as Oe,S as vt,__tla as Ot}from"./ChannelsModule-Dtl1LB_d.js";import{D as Re,__tla as Rt}from"./DisplayNotice-BuQ8UUNA.js";import{N as xe,__tla as Mt}from"./RedCircle-Br7qstXM.js";import{__tla as kt}from"./Skeleton-DrRSnw5i.js";import{__tla as Dt}from"./cloneDeep-BNMekosy.js";import{__tla as It}from"./index.esm-Dgl9ecTf.js";import{__tla as Lt}from"./ManageNotifSettingDropdown-CkSiOF-w.js";import"./notifSetting-DrLKauYy.js";import{__tla as Nt}from"./IpfsHelper-C2OHfXqE.js";import"./browser-Cr_ZWWON.js";let Me,$t=Promise.all([(()=>{try{return _t}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Nt}catch{}})()]).then(async()=>{const ke=s=>p.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},p.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),De=({showFilter:s,setShowFilter:E,search:W,setSearch:A})=>{const d=le(),{userPushSDKInstance:l}=I(a=>a.user),y=p.useRef(null);ye(y,()=>s&&E(!1));const{account:m,provider:j,chainId:b}=de(),{notifications:u,page:f,finishedFetching:_,toggle:Y}=I(a=>a.notifications),R=K(),[L,N]=p.useState(null),z=()=>N(null),{run:$,welcomeNotifs:C}=I(a=>a.userJourney),[G,M]=p.useState(!1),[k,D]=p.useState(!1),{readOnlyWallet:ee}=p.useContext(rt),[te,se]=p.useState(!0),ae=be(),ie=()=>{ae("/snap")},P=({msg:a})=>e.jsx(Ne,{children:e.jsx($e,{children:a})});p.useEffect(()=>{L&&z()},[L]);const re=async()=>{if(!(k||_||!l)){D(!0);try{const a=await l.notification.list("INBOX",{raw:!0,page:f,limit:10}),i=J.utils.parseApiResponse(a);d(lt(i)),i.length===0&&d(Te())}catch(a){console.error(a)}finally{D(!1)}}},oe=async()=>{M(!0),D(!0);try{const a=await l.notification.list("INBOX",{raw:!0,page:1,limit:10});u.length||d(nt());const i=J.utils.parseApiResponse(a),o=new Map,n=new Map;a.forEach(c=>{o.set(c.payload.data.sid,c.epoch),n.set(c.payload.data.sid,c.sender)}),i.forEach(c=>{c.date=o.get(c.sid),c.epoch=new Date(c.date).getTime()/1e3,c.channel=n.get(c.sid)}),d(ct({notifs:i,pageSize:10})),i.length===0&&d(Te())}catch(a){console.error(a)}finally{M(!1),D(!1)}};p.useEffect(()=>{(l==null?void 0:l.account)==ee||!l||oe()},[Y,l]);const ne=async()=>{re()},t=a=>Number(a)===u.length-1&&!_&&!G,h=async({secret:a,title:i,message:o,image:n,cta:c})=>{try{let g=await T.decryptWithWalletRPCMethod(j,a,m);const w=await T.decryptWithAES(o,g);let v=await T.decryptWithAES(i,g),O=await T.decryptWithAES(n,g),B=await T.decryptWithAES(c,g);return{title:v,body:w,image:O,cta:B}}catch(g){g.code===4001?(console.error(g),S.dark(e.jsx(P,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):g.code===-32601?(console.error(g),S.dark(e.jsx(P,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(g),S.dark(e.jsx(P,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:R,children:e.jsx(Ie,{children:e.jsxs(Ge,{children:[te&&e.jsx(e.Fragment,{children:e.jsxs(Ce,{flexWrap:"nowrap",children:[e.jsx(ot,{}),e.jsxs(Pe,{justifyContent:"space-between",children:[e.jsx(Ee,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),e.jsxs(Ue,{onClick:ie,children:["Install Push Snap ",e.jsx(ke,{})," "]})]}),e.jsx(Be,{onClick:()=>{se(!1)}})]})}),(!$&&!u.length||$&&!C.length)&&!k&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(Re,{title:"You currently have no notifications, try subscribing to some channels."})}),u&&e.jsxs(Le,{id:"scrollstyle-secondary",children:[G&&e.jsx(U,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})}),$&&C.map((a,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,blockchain:O,url:B}=a;return e.jsx(me,{children:e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,theme:R.scheme,chainName:O,url:B})},`${c}+${n}`)}),u.map((a,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,secret:O,notification:B,blockchain:ce,url:at}=a;if(!$)return e.jsxs(me,{children:[t(i)&&e.jsx(Oe,{onEnter:()=>ne()}),e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,isSecret:O!="",decryptFn:()=>h({secret:O,title:n,message:c,image:v,cta:o}),chainName:ce,theme:R.scheme,url:at})]},i)}),k&&!G&&e.jsx(U,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})})]}),L&&e.jsx(xe,{notification:L,clearToast:z})]})})})},Ie=r.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${H.tablet} {
    height: 74%;
  }
`,me=r.div`
  margin: 25px 0px;
`,Le=r.div`
  align-self: stretch;
  flex: 1;
`,Ne=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,$e=r.div`
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

  @media ${H.tablet} {
    gap: 9px;
    margin-right: 10px;
  }

  @media (max-width: 525px) {
    padding: 8px 12px;
  }
`,Pe=r(Se)`
  @media ${H.tablet} {
    flex-direction: column;
    align-items: baseline;
    display: block;
    align-self: auto;
  }
`,Be=r(it)`
  cursor: pointer;
  height: 20px;
  width: 20px;
`,Ue=r(Ee)`
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
`,Q=10,He=({showFilter:s,setShowFilter:E,search:W,setSearch:A})=>{const d=le(),{userPushSDKInstance:l}=I(t=>t.user),y=p.useRef(null);ye(y,()=>s&&E(!1));const{account:m,chainId:j,provider:b}=de(),{subscriptionStatus:u}=I(t=>t.channels),f=K(),[_,Y]=p.useState(null),R=()=>Y(null),{run:L}=I(t=>t.userJourney),{notifications:N,page:z,finishedFetching:$}=I(t=>t.spam),[C,G]=p.useState(!1),[M,k]=p.useState(!1),D=({msg:t})=>e.jsx(ze,{children:e.jsx(Ke,{children:t})});p.useEffect(()=>{_&&R()},[_]);const ee={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},te=async()=>{if(!(M||$||L||!l)){k(!0);try{const t=await l.notification.list("SPAM",{limit:Q,page:z,raw:!0});let h=J.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const a=t.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(a),d(mt(h)),h.length===0&&d(je())}catch(t){console.error(t)}finally{k(!1)}}},se=async()=>{if(!(M||C||L)){G(!0),k(!0);try{const t=await l.notification.list("SPAM",{limit:Q,page:1,raw:!0});N.length||d(Ae());let h=J.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const a=h.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(a),d(pt({notifs:h,pageSize:Q})),h.length===0&&d(je())}catch(t){console.error(t)}finally{G(!1),k(!1)}}};p.useEffect(()=>{l&&se()},[l]);const ae=async()=>{te(),d(Ae())},ie=t=>Number(t)===N.length-1&&!$&&!C,P=dt(),re=async(t,h)=>{if(!t)return;let a=t;if(!a)return;console.debug(a),P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(b,m);const i=await b.getSigner(m);console.debug(i),console.debug({signer:i,channelAddress:V(t,ee[h]),userAddress:V(m,j)}),await J.channels.subscribe({signer:i,channelAddress:V(t,j),userAddress:V(m,j),onSuccess:()=>{P.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:o=>e.jsx(ht,{size:o,color:"green"})}),d(gt({channelAddress:t,status:!0}))},onError:o=>{console.error(o),P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:n=>e.jsx(xt,{size:n,color:"red"})})},env:he.pushNodesEnv})},oe=t=>u[t],ne=async({secret:t,title:h,message:a,image:i,cta:o})=>{try{let n=await T.decryptWithWalletRPCMethod(b,t,m);const c=await T.decryptWithAES(a,n);let g=await T.decryptWithAES(h,n),w=await T.decryptWithAES(i,n),v=await T.decryptWithAES(o,n);return{title:g,body:c,image:w,cta:v}}catch(n){n.code===4001?(console.error(n),S.dark(e.jsx(D,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n.code===-32601?(console.error(n),S.dark(e.jsx(D,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(n),S.dark(e.jsx(D,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:f,children:e.jsx(Ye,{children:e.jsxs(vt,{children:[N&&e.jsxs(We,{id:"scrollstyle-secondary",children:[C&&e.jsx(U,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})}),N.map((t,h)=>{const{cta:a,title:i,message:o,app:n,icon:c,image:g,secret:w,notification:v,channel:O,blockchain:B,url:ce}=t;return e.jsxs(Je,{children:[ie(h)&&!M&&e.jsx(Oe,{onEnter:ae}),e.jsx(pe,{notificationTitle:i,notificationBody:o,cta:a,app:n,icon:c,image:g,theme:f.scheme,subscribeFn:()=>re(O,B),isSpam:!0,isSubscribedFn:async()=>oe(O),isSecret:w!="",decryptFn:()=>ne({secret:w,title:i,message:o,image:g,cta:a}),chainName:B,url:ce})]},h)}),M&&!C&&e.jsx(X,{type:q.SEAMLESS})]}),!N.length&&!M&&e.jsx(Fe,{children:e.jsx(Re,{title:"You currently have no spam notifications."})}),_&&e.jsx(xe,{notification:_,clearToast:R})]})})})},Fe=r.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,We=r.div`
  align-self: stretch;
  flex: 1;
`,Ye=r.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${H.tablet} {
    height: 74%;
  }
`,Je=r.div`
  margin: 25px 0px;
`,ze=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 10px;
`,Ke=r.div`
  margin: 0px 10px;
`,Xe=({isSpam:s})=>{const[E,W]=p.useState(!s),[A,d]=p.useState(!1),[l,y]=p.useState("");K();const m=be(),j=()=>W(u=>!u),b=u=>{j(),d(!1),y(""),m(u)};return e.jsxs(qe,{children:[e.jsx(Ve,{children:e.jsxs(Ze,{children:[e.jsx(ue,{isActive:E,onClick:()=>b(ge.Inbox),children:"Inbox"}),e.jsx(ue,{isActive:!E,onClick:()=>b(ge.Spam),children:"Spam"})]})}),E?e.jsx(De,{showFilter:A,setShowFilter:d,search:l,setSearch:y}):e.jsx(He,{showFilter:A,setShowFilter:d,search:l,setSearch:y})]})},qe=r.div`
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
`;const Qe=he.coreContractChain,et=({isSpam:s})=>{ut.pageview(ge.Inbox);const E=le(),{account:W,chainId:A,provider:d}=de(),{epnsReadProvider:l,epnsCommReadProvider:y}=I(f=>f.contracts),[m,j]=Z.useState(null),b=()=>j(null);K();const u=Qe===A;return Z.useEffect(()=>{m&&b()},[m]),Z.useEffect(()=>{A&&async function(){const f=u?d:new ft(he.coreRPC),_=new _e(St.epnscore,ve.epnscore,f),Y=Et[A].commAddress,R=new _e(Y,ve.epnsComm,d);E(yt(R)),E(bt(_))}()},[W,A]),Z.useEffect(()=>{!l||!y||l.pushChannelAdmin().then(f=>{E(wt(f))}).catch(f=>{console.error({err:f})})},[l,y]),e.jsx(tt,{children:e.jsxs(st,{children:[e.jsx("div",{className:"joyride"}),e.jsx(Xe,{isSpam:s}),m&&e.jsx(xe,{notification:m,clearToast:b})]})})},tt=r(Tt)`
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
    100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${F.BIG_MODULES.DESKTOP.TOP} -
      ${F.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${H.laptop} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${F.BIG_MODULES.TABLET.TOP} -
        ${F.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE}
      ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${H.mobileL} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${F.BIG_MODULES.MOBILE.TOP} -
        ${F.BIG_MODULES.MOBILE.BOTTOM}
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
`});export{$t as __tla,Me as default};
