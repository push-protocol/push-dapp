import{d$ as p,e7 as r,eU as F,fF as Se,ge as it,eZ as ye,ee as B,f3 as le,f4 as D,fr as Ee,dZ as de,ea as K,gf as rt,d_ as be,e2 as e,eb as we,gg as ot,e4 as q,e5 as X,gh as pe,gi as nt,fQ as Y,gj as ct,gk as Te,gl as T,ev as S,gm as lt,fI as dt,gn as Ae,go as pt,gp as je,fM as Z,fO as ht,fR as gt,fP as xt,en as he,gq as mt,e1 as ge,eS as x,eT as W,eW as ut,el as Q,gr as ft,eo as _e,ep as St,eq as ve,gs as yt,gt as Et,gu as bt,gv as wt,ec as Tt,fq as At,e8 as jt,__tla as _t}from"./index-DSj8kGdz.js";import{W as Oe,S as vt,__tla as Ot}from"./ChannelsModule-C1JxlrGf.js";import{D as Re,__tla as Rt}from"./DisplayNotice-B-Wunqxc.js";import{N as xe,__tla as Mt}from"./RedCircle-BM9ycmuZ.js";import{__tla as kt}from"./Skeleton-CZQXqZQO.js";import{__tla as It}from"./cloneDeep-CX0M3g_3.js";import{__tla as Dt}from"./index.esm-8Pbzt45O.js";import{__tla as $t}from"./ManageNotifSettingDropdown-DQcB3NaQ.js";import"./notifSetting-DrLKauYy.js";import{__tla as Lt}from"./IpfsHelper-DhpfEMK-.js";import"./browser-Cr_ZWWON.js";let Me,Nt=Promise.all([(()=>{try{return _t}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Lt}catch{}})()]).then(async()=>{const ke=s=>p.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},p.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ie=({showFilter:s,setShowFilter:y,search:H,setSearch:A})=>{const d=le(),{userPushSDKInstance:l}=D(a=>a.user),E=p.useRef(null);Ee(E,()=>s&&y(!1));const{account:m,provider:j,chainId:b}=de(),{notifications:u,page:f,finishedFetching:_,toggle:J}=D(a=>a.notifications),R=K(),[$,L]=p.useState(null),z=()=>L(null),{run:N,welcomeNotifs:C}=D(a=>a.userJourney),[G,M]=p.useState(!1),[k,I]=p.useState(!1),{readOnlyWallet:ee}=p.useContext(rt),[te,se]=p.useState(!0),ae=be(),ie=()=>{ae("/snap")},P=({msg:a})=>e.jsx(Le,{children:e.jsx(Ne,{children:a})});p.useEffect(()=>{$&&z()},[$]);const re=async()=>{if(!(k||_||!l)){I(!0);try{const a=await l.notification.list("INBOX",{raw:!0,page:f,limit:10}),i=Y.utils.parseApiResponse(a);d(lt(i)),i.length===0&&d(Te())}catch(a){console.error(a)}finally{I(!1)}}},oe=async()=>{M(!0),I(!0);try{const a=await l.notification.list("INBOX",{raw:!0,page:1,limit:10});u.length||d(nt());const i=Y.utils.parseApiResponse(a),o=new Map,n=new Map;a.forEach(c=>{o.set(c.payload.data.sid,c.epoch),n.set(c.payload.data.sid,c.sender)}),i.forEach(c=>{c.date=o.get(c.sid),c.epoch=new Date(c.date).getTime()/1e3,c.channel=n.get(c.sid)}),d(ct({notifs:i,pageSize:10})),i.length===0&&d(Te())}catch(a){console.error(a)}finally{M(!1),I(!1)}};p.useEffect(()=>{(l==null?void 0:l.account)==ee||!l||oe()},[J,l]);const ne=async()=>{re()},t=a=>Number(a)===u.length-1&&!_&&!G,h=async({secret:a,title:i,message:o,image:n,cta:c})=>{try{let g=await T.decryptWithWalletRPCMethod(j,a,m);const w=await T.decryptWithAES(o,g);let v=await T.decryptWithAES(i,g),O=await T.decryptWithAES(n,g),U=await T.decryptWithAES(c,g);return{title:v,body:w,image:O,cta:U}}catch(g){g.code===4001?(console.error(g),S.dark(e.jsx(P,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):g.code===-32601?(console.error(g),S.dark(e.jsx(P,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(g),S.dark(e.jsx(P,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:R,children:e.jsx(De,{children:e.jsxs(Ge,{children:[te&&e.jsx(e.Fragment,{children:e.jsxs(Ce,{flexWrap:"nowrap",children:[e.jsx(ot,{}),e.jsxs(Pe,{justifyContent:"space-between",children:[e.jsx(ye,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),e.jsxs(Be,{onClick:ie,children:["Install Push Snap ",e.jsx(ke,{})," "]})]}),e.jsx(Ue,{onClick:()=>{se(!1)}})]})}),(!N&&!u.length||N&&!C.length)&&!k&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(Re,{title:"You currently have no notifications, try subscribing to some channels."})}),u&&e.jsxs($e,{id:"scrollstyle-secondary",children:[G&&e.jsx(B,{padding:"10px 20px",children:e.jsx(q,{type:X.SEAMLESS})}),N&&C.map((a,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,blockchain:O,url:U}=a;return e.jsx(me,{children:e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,theme:R.scheme,chainName:O,url:U})},`${c}+${n}`)}),u.map((a,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,secret:O,notification:U,blockchain:ce,url:at}=a;if(!N)return e.jsxs(me,{children:[t(i)&&e.jsx(Oe,{onEnter:()=>ne()}),e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,isSecret:O!="",decryptFn:()=>h({secret:O,title:n,message:c,image:v,cta:o}),chainName:ce,theme:R.scheme,url:at})]},i)}),k&&!G&&e.jsx(B,{padding:"10px 20px",children:e.jsx(q,{type:X.SEAMLESS})})]}),$&&e.jsx(xe,{notification:$,clearToast:z})]})})})},De=r.div`
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
`,Ue=r(it)`
  cursor: pointer;
  height: 20px;
  width: 20px;
`,Be=r(ye)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #d53a94;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`,Ge=r(B)`
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
`,V=10,Fe=({showFilter:s,setShowFilter:y,search:H,setSearch:A})=>{const d=le(),{userPushSDKInstance:l}=D(t=>t.user),E=p.useRef(null);Ee(E,()=>s&&y(!1));const{account:m,chainId:j,provider:b}=de(),{subscriptionStatus:u}=D(t=>t.channels),f=K(),[_,J]=p.useState(null),R=()=>J(null),{run:$}=D(t=>t.userJourney),{notifications:L,page:z,finishedFetching:N}=D(t=>t.spam),[C,G]=p.useState(!1),[M,k]=p.useState(!1),I=({msg:t})=>e.jsx(ze,{children:e.jsx(Ke,{children:t})});p.useEffect(()=>{_&&R()},[_]);const ee={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},te=async()=>{if(!(M||N||$||!l)){k(!0);try{const t=await l.notification.list("SPAM",{limit:V,page:z,raw:!0});let h=Y.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const a=t.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(a),d(mt(h)),h.length===0&&d(je())}catch(t){console.error(t)}finally{k(!1)}}},se=async()=>{if(!(M||C||$)){G(!0),k(!0);try{const t=await l.notification.list("SPAM",{limit:V,page:1,raw:!0});L.length||d(Ae());let h=Y.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const a=h.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(a),d(pt({notifs:h,pageSize:V})),h.length===0&&d(je())}catch(t){console.error(t)}finally{G(!1),k(!1)}}};p.useEffect(()=>{l&&se()},[l]);const ae=async()=>{te(),d(Ae())},ie=t=>Number(t)===L.length-1&&!N&&!C,P=dt(),re=async(t,h)=>{if(!t)return;let a=t;if(!a)return;console.debug(a),P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(b,m);const i=await b.getSigner(m);console.debug(i),console.debug({signer:i,channelAddress:Z(t,ee[h]),userAddress:Z(m,j)}),await Y.channels.subscribe({signer:i,channelAddress:Z(t,j),userAddress:Z(m,j),onSuccess:()=>{P.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:o=>e.jsx(ht,{size:o,color:"green"})}),d(gt({channelAddress:t,status:!0}))},onError:o=>{console.error(o),P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:n=>e.jsx(xt,{size:n,color:"red"})})},env:he.pushNodesEnv})},oe=t=>u[t],ne=async({secret:t,title:h,message:a,image:i,cta:o})=>{try{let n=await T.decryptWithWalletRPCMethod(b,t,m);const c=await T.decryptWithAES(a,n);let g=await T.decryptWithAES(h,n),w=await T.decryptWithAES(i,n),v=await T.decryptWithAES(o,n);return{title:g,body:c,image:w,cta:v}}catch(n){n.code===4001?(console.error(n),S.dark(e.jsx(I,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n.code===-32601?(console.error(n),S.dark(e.jsx(I,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(n),S.dark(e.jsx(I,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:f,children:e.jsx(Je,{children:e.jsxs(vt,{children:[L&&e.jsxs(He,{id:"scrollstyle-secondary",children:[C&&e.jsx(B,{padding:"10px 20px",children:e.jsx(q,{type:X.SEAMLESS})}),L.map((t,h)=>{const{cta:a,title:i,message:o,app:n,icon:c,image:g,secret:w,notification:v,channel:O,blockchain:U,url:ce}=t;return e.jsxs(Ye,{children:[ie(h)&&!M&&e.jsx(Oe,{onEnter:ae}),e.jsx(pe,{notificationTitle:i,notificationBody:o,cta:a,app:n,icon:c,image:g,theme:f.scheme,subscribeFn:()=>re(O,U),isSpam:!0,isSubscribedFn:async()=>oe(O),isSecret:w!="",decryptFn:()=>ne({secret:w,title:i,message:o,image:g,cta:a}),chainName:U,url:ce})]},h)}),M&&!C&&e.jsx(q,{type:X.SEAMLESS})]}),!L.length&&!M&&e.jsx(We,{children:e.jsx(Re,{title:"You currently have no spam notifications."})}),_&&e.jsx(xe,{notification:_,clearToast:R})]})})})},We=r.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,He=r.div`
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
`,qe=({isSpam:s})=>{const[y,H]=p.useState(!s),[A,d]=p.useState(!1),[l,E]=p.useState("");K();const m=be(),j=()=>H(u=>!u),b=u=>{j(),d(!1),E(""),m(u)};return e.jsxs(Xe,{children:[e.jsx(Ze,{children:e.jsxs(Qe,{children:[e.jsx(ue,{isActive:y,onClick:()=>b(ge.Inbox),children:"Inbox"}),e.jsx(ue,{isActive:!y,onClick:()=>b(ge.Spam),children:"Spam"})]})}),y?e.jsx(Ie,{showFilter:A,setShowFilter:d,search:l,setSearch:E}):e.jsx(Fe,{showFilter:A,setShowFilter:d,search:l,setSearch:E})]})},Xe=r.div`
  height: 100%;
  width: 100%;
`,Ze=r.div`
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
`,Qe=r.div`
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
`;r(B)`
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
`,r(B)`
  cursor: pointer;
`,r(B)`
  cursor: pointer;
  transform: rotate(90deg);
`;const Ve=he.coreContractChain,et=({isSpam:s})=>{ut.pageview(ge.Inbox);const y=le(),{account:H,chainId:A,provider:d}=de(),{epnsReadProvider:l,epnsCommReadProvider:E}=D(f=>f.contracts),[m,j]=Q.useState(null),b=()=>j(null);K();const u=Ve===A;return Q.useEffect(()=>{m&&b()},[m]),Q.useEffect(()=>{A&&async function(){const f=u?d:new ft(he.coreRPC),_=new _e(St.epnscore,ve.epnscore,f),J=yt[A].commAddress,R=new _e(J,ve.epnsComm,d);y(Et(R)),y(bt(_))}()},[H,A]),Q.useEffect(()=>{!l||!E||l.pushChannelAdmin().then(f=>{y(wt(f))}).catch(f=>{console.error({err:f})})},[l,E]),e.jsx(tt,{children:e.jsxs(st,{children:[e.jsx("div",{className:"joyride"}),e.jsx(qe,{isSpam:s}),m&&e.jsx(xe,{notification:m,clearToast:b})]})})},tt=r(Tt)`
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
    100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${W.BIG_MODULES.DESKTOP.TOP} -
      ${W.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${F.laptop} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${W.BIG_MODULES.TABLET.TOP} -
        ${W.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE}
      ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${F.mobileL} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${W.BIG_MODULES.MOBILE.TOP} -
        ${W.BIG_MODULES.MOBILE.BOTTOM}
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
