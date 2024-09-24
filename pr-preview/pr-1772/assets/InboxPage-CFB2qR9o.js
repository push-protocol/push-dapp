import{cs as p,cA as r,gd as W,h0 as Se,hN as at,gi as ye,cH as G,gp as le,gq as I,gN as Ee,cq as de,cD as K,hO as rt,cr as be,cv as e,cE as we,hP as nt,cx as X,cy as q,hQ as pe,hR as ot,hb as Y,hS as ct,hT as Te,hU as A,gm as y,hV as lt,h3 as dt,hW as Ae,hX as pt,hY as je,h7 as V,h9 as ht,hc as gt,ha as xt,cM as he,hZ as mt,cu as ge,gb as x,gc as F,gf as ut,cK as Z,h_ as ft,cN as ve,cO as St,cP as _e,h$ as yt,i0 as Et,i1 as bt,i2 as wt,i3 as Tt,i4 as At,cF as jt,gM as vt,cB as _t,__tla as Ot}from"./index-vm4l8-WA.js";import{W as Oe,S as Rt,__tla as Mt}from"./ChannelsModule-D5mBhrLA.js";import{D as Re,__tla as kt}from"./DisplayNotice-CJ3zxxhV.js";import{N as xe,__tla as Dt}from"./RedCircle-jfPIJPDF.js";import{__tla as It}from"./Skeleton-DFqUu7-t.js";import{__tla as Nt}from"./cloneDeep-Bu9kiH1h.js";import{__tla as $t}from"./index.esm-CXGtr10K.js";import{__tla as Lt}from"./ManageNotifSettingDropdown-C_c14MFk.js";import"./notifSetting-DrLKauYy.js";let Me,Ct=Promise.all([(()=>{try{return Ot}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Lt}catch{}})()]).then(async()=>{const ke=s=>p.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},p.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),De=({showFilter:s,setShowFilter:E,search:N,setSearch:b})=>{const d=le(),{userPushSDKInstance:c}=I(i=>i.user),u=p.useRef(null);Ee(u,()=>s&&E(!1));const{account:m,provider:j,chainId:w}=de(),{notifications:f,page:S,finishedFetching:v,toggle:J}=I(i=>i.notifications),R=K(),[$,L]=p.useState(null),z=()=>L(null),{run:C,welcomeNotifs:P}=I(i=>i.userJourney),[H,M]=p.useState(!1),[k,D]=p.useState(!1),{readOnlyWallet:ee}=p.useContext(rt),[te,se]=p.useState(!0),ie=be(),ae=()=>{ie("/snap")},B=({msg:i})=>e.jsx($e,{children:e.jsx(Le,{children:i})});p.useEffect(()=>{$&&z()},[$]);const re=async()=>{if(!(k||v||!c)){D(!0);try{const i=await c.notification.list("INBOX",{raw:!0,page:S,limit:10}),a=Y.utils.parseApiResponse(i);d(lt(a)),a.length===0&&d(Te())}catch(i){console.error(i)}finally{D(!1)}}},ne=async()=>{M(!0),D(!0);try{const i=await c.notification.list("INBOX",{raw:!0,page:1,limit:10});f.length||d(ot());const a=Y.utils.parseApiResponse(i),n=new Map,o=new Map;i.forEach(l=>{n.set(l.payload.data.sid,l.epoch),o.set(l.payload.data.sid,l.sender)}),a.forEach(l=>{l.date=n.get(l.sid),l.epoch=new Date(l.date).getTime()/1e3,l.channel=o.get(l.sid)}),d(ct({notifs:a,pageSize:10})),a.length===0&&d(Te())}catch(i){console.error(i)}finally{M(!1),D(!1)}};p.useEffect(()=>{(c==null?void 0:c.account)==ee||!c||ne()},[J,c]);const oe=async()=>{re()},t=i=>Number(i)===f.length-1&&!v&&!H,h=async({secret:i,title:a,message:n,image:o,cta:l})=>{try{let g=await A.decryptWithWalletRPCMethod(j,i,m);const T=await A.decryptWithAES(n,g);let _=await A.decryptWithAES(a,g),O=await A.decryptWithAES(o,g),U=await A.decryptWithAES(l,g);return{title:_,body:T,image:O,cta:U}}catch(g){g.code===4001?(console.error(g),y.dark(e.jsx(B,{msg:"User denied message decryption"}),{position:"bottom-right",type:y.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):g.code===-32601?(console.error(g),y.dark(e.jsx(B,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:y.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(g),y.dark(e.jsx(B,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:y.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:R,children:e.jsx(Ie,{children:e.jsxs(Ge,{children:[te&&e.jsx(e.Fragment,{children:e.jsxs(Ce,{flexWrap:"nowrap",children:[e.jsx(nt,{}),e.jsxs(Pe,{justifyContent:"space-between",children:[e.jsx(ye,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),e.jsxs(Ue,{onClick:ae,children:["Install Push Snap ",e.jsx(ke,{})," "]})]}),e.jsx(Be,{onClick:()=>{se(!1)}})]})}),(!C&&!f.length||C&&!P.length)&&!k&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(Re,{title:"You currently have no notifications, try subscribing to some channels."})}),f&&e.jsxs(Ne,{id:"scrollstyle-secondary",children:[H&&e.jsx(G,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})}),C&&P.map((i,a)=>{const{cta:n,title:o,message:l,app:g,icon:T,image:_,blockchain:O,url:U}=i;return e.jsx(me,{children:e.jsx(pe,{notificationTitle:o,notificationBody:l,cta:n,app:g,icon:T,image:_,theme:R.scheme,chainName:O,url:U})},`${l}+${o}`)}),f.map((i,a)=>{const{cta:n,title:o,message:l,app:g,icon:T,image:_,secret:O,notification:U,blockchain:ce,url:it}=i;if(!C)return e.jsxs(me,{children:[t(a)&&e.jsx(Oe,{onEnter:()=>oe()}),e.jsx(pe,{notificationTitle:o,notificationBody:l,cta:n,app:g,icon:T,image:_,isSecret:O!="",decryptFn:()=>h({secret:O,title:o,message:l,image:_,cta:n}),chainName:ce,theme:R.scheme,url:it})]},a)}),k&&!H&&e.jsx(G,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})})]}),$&&e.jsx(xe,{notification:$,clearToast:z})]})})})},Ie=r.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${W.tablet} {
    height: 74%;
  }
`,me=r.div`
  margin: 25px 0px;
`,Ne=r.div`
  align-self: stretch;
  flex: 1;
`,$e=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,Le=r.div`
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

  @media ${W.tablet} {
    gap: 9px;
    margin-right: 10px;
  }

  @media (max-width: 525px) {
    padding: 8px 12px;
  }
`,Pe=r(Se)`
  @media ${W.tablet} {
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
`,Ge=r(G)`
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
`,Q=10,He=({showFilter:s,setShowFilter:E,search:N,setSearch:b})=>{const d=le(),{userPushSDKInstance:c}=I(t=>t.user),u=p.useRef(null);Ee(u,()=>s&&E(!1));const{account:m,chainId:j,provider:w}=de(),{subscriptionStatus:f}=I(t=>t.channels),S=K(),[v,J]=p.useState(null),R=()=>J(null),{run:$}=I(t=>t.userJourney),{notifications:L,page:z,finishedFetching:C}=I(t=>t.spam),[P,H]=p.useState(!1),[M,k]=p.useState(!1),D=({msg:t})=>e.jsx(ze,{children:e.jsx(Ke,{children:t})});p.useEffect(()=>{v&&R()},[v]);const ee={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},te=async()=>{if(!(M||C||$||!c)){k(!0);try{const t=await c.notification.list("SPAM",{limit:Q,page:z,raw:!0});let h=Y.utils.parseApiResponse(t);h.forEach((a,n)=>{a.date=t[n].epoch,a.epoch=new Date(a.date).getTime()/1e3});const i=t.map(async(a,n)=>{a.channel=t[n].sender;let o=t[n].sender;return{...a}});h=await Promise.all(i),d(mt(h)),h.length===0&&d(je())}catch(t){console.error(t)}finally{k(!1)}}},se=async()=>{if(!(M||P||$)){H(!0),k(!0);try{const t=await c.notification.list("SPAM",{limit:Q,page:1,raw:!0});L.length||d(Ae());let h=Y.utils.parseApiResponse(t);h.forEach((a,n)=>{a.date=t[n].epoch,a.epoch=new Date(a.date).getTime()/1e3});const i=h.map(async(a,n)=>{a.channel=t[n].sender;let o=t[n].sender;return{...a}});h=await Promise.all(i),d(pt({notifs:h,pageSize:Q})),h.length===0&&d(je())}catch(t){console.error(t)}finally{H(!1),k(!1)}}};p.useEffect(()=>{c&&se()},[c]);const ie=async()=>{te(),d(Ae())},ae=t=>Number(t)===L.length-1&&!C&&!P,B=dt(),re=async(t,h)=>{if(!t)return;let i=t;if(!i)return;console.debug(i),B.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(w,m);const a=await w.getSigner(m);console.debug(a),console.debug({signer:a,channelAddress:V(t,ee[h]),userAddress:V(m,j)}),await Y.channels.subscribe({signer:a,channelAddress:V(t,j),userAddress:V(m,j),onSuccess:()=>{B.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:n=>e.jsx(ht,{size:n,color:"green"})}),d(gt({channelAddress:t,status:!0}))},onError:n=>{console.error(n),B.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:o=>e.jsx(xt,{size:o,color:"red"})})},env:he.pushNodesEnv})},ne=t=>f[t],oe=async({secret:t,title:h,message:i,image:a,cta:n})=>{try{let o=await A.decryptWithWalletRPCMethod(w,t,m);const l=await A.decryptWithAES(i,o);let g=await A.decryptWithAES(h,o),T=await A.decryptWithAES(a,o),_=await A.decryptWithAES(n,o);return{title:g,body:l,image:T,cta:_}}catch(o){o.code===4001?(console.error(o),y.dark(e.jsx(D,{msg:"User denied message decryption"}),{position:"bottom-right",type:y.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):o.code===-32601?(console.error(o),y.dark(e.jsx(D,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:y.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(o),y.dark(e.jsx(D,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:y.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:S,children:e.jsx(Je,{children:e.jsxs(Rt,{children:[L&&e.jsxs(Fe,{id:"scrollstyle-secondary",children:[P&&e.jsx(G,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})}),L.map((t,h)=>{const{cta:i,title:a,message:n,app:o,icon:l,image:g,secret:T,notification:_,channel:O,blockchain:U,url:ce}=t;return e.jsxs(Ye,{children:[ae(h)&&!M&&e.jsx(Oe,{onEnter:ie}),e.jsx(pe,{notificationTitle:a,notificationBody:n,cta:i,app:o,icon:l,image:g,theme:S.scheme,subscribeFn:()=>re(O,U),isSpam:!0,isSubscribedFn:async()=>ne(O),isSecret:T!="",decryptFn:()=>oe({secret:T,title:a,message:n,image:g,cta:i}),chainName:U,url:ce})]},h)}),M&&!P&&e.jsx(X,{type:q.SEAMLESS})]}),!L.length&&!M&&e.jsx(We,{children:e.jsx(Re,{title:"You currently have no spam notifications."})}),v&&e.jsx(xe,{notification:v,clearToast:R})]})})})},We=r.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Fe=r.div`
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
  @media ${W.tablet} {
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
`,Xe=({isSpam:s})=>{const[E,N]=p.useState(!s),[b,d]=p.useState(!1),[c,u]=p.useState("");K();const m=be(),j=()=>N(f=>!f),w=f=>{j(),d(!1),u(""),m(f)};return e.jsxs(qe,{children:[e.jsx(Ve,{children:e.jsxs(Ze,{children:[e.jsx(ue,{isActive:E,onClick:()=>w(ge.Inbox),children:"Inbox"}),e.jsx(ue,{isActive:!E,onClick:()=>w(ge.Spam),children:"Spam"})]})}),E?e.jsx(De,{showFilter:b,setShowFilter:d,search:c,setSearch:u}):e.jsx(He,{showFilter:b,setShowFilter:d,search:c,setSearch:u})]})},qe=r.div`
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
`;r(G)`
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
`,r(G)`
  cursor: pointer;
`,r(G)`
  cursor: pointer;
  transform: rotate(90deg);
`;const Qe=he.coreContractChain,et=({isSpam:s})=>{ut.pageview(ge.Inbox);const E=le(),{account:N,chainId:b,provider:d}=de(),{epnsReadProvider:c,epnsCommReadProvider:u}=I(S=>S.contracts),[m,j]=Z.useState(null),w=()=>j(null);K();const f=Qe===b;return Z.useEffect(()=>{m&&w()},[m]),Z.useEffect(()=>{b&&async function(){const S=f?d:new ft(he.coreRPC),v=new ve(St.epnscore,_e.epnscore,S),J=yt[b].commAddress,R=new ve(J,_e.epnsComm,d);E(Et(R)),E(bt(v))}()},[N,b]),Z.useEffect(()=>{!c||!u||(c.pushChannelAdmin().then(S=>{E(wt(S))}).catch(S=>{console.error({err:S})}),c!=null&&u!=null&&(Tt.getInstance().init(N,c,u),At.getInstance().init(N,c,u,b)))},[c,u]),e.jsx(tt,{children:e.jsxs(st,{children:[e.jsx("div",{className:"joyride"}),e.jsx(Xe,{isSpam:s}),m&&e.jsx(xe,{notification:m,clearToast:w})]})})},tt=r(jt)`
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

  @media ${W.laptop} {
    margin: ${x.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${x.CONSTANTS.HEADER_HEIGHT}px - ${F.BIG_MODULES.TABLET.TOP} -
        ${F.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE}
      ${x.ADJUSTMENTS.RADIUS.LARGE} ${x.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${W.mobileL} {
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
`;let fe;Me=()=>{const s=vt();return e.jsx(fe,{children:e.jsx(et,{isSpam:s.pathname==="/spam"})})},fe=r(_t)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Ct as __tla,Me as default};
