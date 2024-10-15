import{d_ as p,e6 as r,eS as F,fD as Se,gd as it,eX as ye,ec as B,f1 as le,f2 as I,fp as Ee,dY as de,e8 as K,ge as rt,dZ as be,e1 as e,e9 as we,gf as ot,e3 as X,e4 as Z,gg as pe,gh as nt,fO as Y,gi as ct,gj as Te,et as S,gk as lt,fG as dt,gl as _e,gm as pt,gn as Ae,fK as q,fM as ht,fP as gt,fN as xt,el as he,go as mt,e0 as ge,eQ as x,eR as H,eU as ut,ej as Q,gp as ft,em as je,en as St,eo as ve,gq as yt,gr as Et,gs as bt,gt as wt,ea as Tt,fo as _t,e7 as At,__tla as jt}from"./index-BXVdUrm_.js";import{W as Oe,S as vt,__tla as Ot}from"./ChannelsModule-D2nx1fYd.js";import{C as T,__tla as Rt}from"./CryptoHelper-C49RAVl7.js";import{D as Re,__tla as Mt}from"./DisplayNotice-B4fmQkHK.js";import{N as xe,__tla as kt}from"./RedCircle-CR-6A9Zw.js";import{__tla as Dt}from"./Skeleton-BasLns87.js";import{__tla as It}from"./cloneDeep-C3AM43uD.js";import{__tla as Nt}from"./index.esm-BPJvlPVY.js";import{__tla as $t}from"./ManageNotifSettingDropdown-CFj87T_F.js";import"./notifSetting-DrLKauYy.js";import{__tla as Ct}from"./IpfsHelper-OgfbXSaX.js";import"./browser-Cr_ZWWON.js";import{__tla as Lt}from"./index-Bh_xV2SS.js";import{__tla as Pt}from"./js-Q9YJooDU.js";let Me,Ut=Promise.all([(()=>{try{return jt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Pt}catch{}})()]).then(async()=>{const ke=a=>p.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},p.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),De=({showFilter:a,setShowFilter:y,search:W,setSearch:_})=>{const d=le(),{userPushSDKInstance:l}=I(s=>s.user),E=p.useRef(null);Ee(E,()=>a&&y(!1));const{account:m,provider:A,chainId:b}=de(),{notifications:u,page:f,finishedFetching:j,toggle:J}=I(s=>s.notifications),R=K(),[N,$]=p.useState(null),z=()=>$(null),{run:C,welcomeNotifs:L}=I(s=>s.userJourney),[G,M]=p.useState(!1),[k,D]=p.useState(!1),{readOnlyWallet:ee}=p.useContext(rt),[te,ae]=p.useState(!0),se=be(),ie=()=>{se("/snap")},P=({msg:s})=>e.jsx($e,{children:e.jsx(Ce,{children:s})});p.useEffect(()=>{N&&z()},[N]);const re=async()=>{if(!(k||j||!l)){D(!0);try{const s=await l.notification.list("INBOX",{raw:!0,page:f,limit:10}),i=Y.utils.parseApiResponse(s);d(lt(i)),i.length===0&&d(Te())}catch(s){console.error(s)}finally{D(!1)}}},oe=async()=>{M(!0),D(!0);try{const s=await l.notification.list("INBOX",{raw:!0,page:1,limit:10});u.length||d(nt());const i=Y.utils.parseApiResponse(s),o=new Map,n=new Map;s.forEach(c=>{o.set(c.payload.data.sid,c.epoch),n.set(c.payload.data.sid,c.sender)}),i.forEach(c=>{c.date=o.get(c.sid),c.epoch=new Date(c.date).getTime()/1e3,c.channel=n.get(c.sid)}),d(ct({notifs:i,pageSize:10})),i.length===0&&d(Te())}catch(s){console.error(s)}finally{M(!1),D(!1)}};p.useEffect(()=>{(l==null?void 0:l.account)==ee||!l||oe()},[J,l]);const ne=async()=>{re()},t=s=>Number(s)===u.length-1&&!j&&!G,h=async({secret:s,title:i,message:o,image:n,cta:c})=>{try{let g=await T.decryptWithWalletRPCMethod(A,s,m);const w=await T.decryptWithAES(o,g);let v=await T.decryptWithAES(i,g),O=await T.decryptWithAES(n,g),U=await T.decryptWithAES(c,g);return{title:v,body:w,image:O,cta:U}}catch(g){g.code===4001?(console.error(g),S.dark(e.jsx(P,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):g.code===-32601?(console.error(g),S.dark(e.jsx(P,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(g),S.dark(e.jsx(P,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:R,children:e.jsx(Ie,{children:e.jsxs(Ge,{children:[te&&e.jsx(e.Fragment,{children:e.jsxs(Le,{flexWrap:"nowrap",children:[e.jsx(ot,{}),e.jsxs(Pe,{justifyContent:"space-between",children:[e.jsx(ye,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),e.jsxs(Be,{onClick:ie,children:["Install Push Snap ",e.jsx(ke,{})," "]})]}),e.jsx(Ue,{onClick:()=>{ae(!1)}})]})}),(!C&&!u.length||C&&!L.length)&&!k&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(Re,{title:"You currently have no notifications, try subscribing to some channels."})}),u&&e.jsxs(Ne,{id:"scrollstyle-secondary",children:[G&&e.jsx(B,{padding:"10px 20px",children:e.jsx(X,{type:Z.SEAMLESS})}),C&&L.map((s,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,blockchain:O,url:U}=s;return e.jsx(me,{children:e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,theme:R.scheme,chainName:O,url:U})},`${c}+${n}`)}),u.map((s,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,secret:O,notification:U,blockchain:ce,url:st}=s;if(!C)return e.jsxs(me,{children:[t(i)&&e.jsx(Oe,{onEnter:()=>ne()}),e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,isSecret:O!="",decryptFn:()=>h({secret:O,title:n,message:c,image:v,cta:o}),chainName:ce,theme:R.scheme,url:st})]},i)}),k&&!G&&e.jsx(B,{padding:"10px 20px",children:e.jsx(X,{type:Z.SEAMLESS})})]}),N&&e.jsx(xe,{notification:N,clearToast:z})]})})})},Ie=r.div`
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
`,Ne=r.div`
  align-self: stretch;
  flex: 1;
`,$e=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,Ce=r.div`
  margin: 0px 10px;
`,Le=r(Se)`
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid #d4dcea;
  background: #fff;
  border: 1px solid ${a=>a.theme.default.border};
  background: ${a=>a.theme.default.bg};
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
  padding: ${a=>a.minimal?"20px 10px":"0px 20px 10px 20px"};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${a=>a.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${a=>a.theme.scrollBg};
    width: 6px;
  }

  @media (max-width: 768px) {
    padding: ${a=>a.minimal?"10px 5px":"0px"};

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
`,V=10,Fe=({showFilter:a,setShowFilter:y,search:W,setSearch:_})=>{const d=le(),{userPushSDKInstance:l}=I(t=>t.user),E=p.useRef(null);Ee(E,()=>a&&y(!1));const{account:m,chainId:A,provider:b}=de(),{subscriptionStatus:u}=I(t=>t.channels),f=K(),[j,J]=p.useState(null),R=()=>J(null),{run:N}=I(t=>t.userJourney),{notifications:$,page:z,finishedFetching:C}=I(t=>t.spam),[L,G]=p.useState(!1),[M,k]=p.useState(!1),D=({msg:t})=>e.jsx(ze,{children:e.jsx(Ke,{children:t})});p.useEffect(()=>{j&&R()},[j]);const ee={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},te=async()=>{if(!(M||C||N||!l)){k(!0);try{const t=await l.notification.list("SPAM",{limit:V,page:z,raw:!0});let h=Y.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const s=t.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(s),d(mt(h)),h.length===0&&d(Ae())}catch(t){console.error(t)}finally{k(!1)}}},ae=async()=>{if(!(M||L||N)){G(!0),k(!0);try{const t=await l.notification.list("SPAM",{limit:V,page:1,raw:!0});$.length||d(_e());let h=Y.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const s=h.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(s),d(pt({notifs:h,pageSize:V})),h.length===0&&d(Ae())}catch(t){console.error(t)}finally{G(!1),k(!1)}}};p.useEffect(()=>{l&&ae()},[l]);const se=async()=>{te(),d(_e())},ie=t=>Number(t)===$.length-1&&!C&&!L,P=dt(),re=async(t,h)=>{if(!t)return;let s=t;if(!s)return;console.debug(s),P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(b,m);const i=await b.getSigner(m);console.debug(i),console.debug({signer:i,channelAddress:q(t,ee[h]),userAddress:q(m,A)}),await Y.channels.subscribe({signer:i,channelAddress:q(t,A),userAddress:q(m,A),onSuccess:()=>{P.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:o=>e.jsx(ht,{size:o,color:"green"})}),d(gt({channelAddress:t,status:!0}))},onError:o=>{console.error(o),P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:n=>e.jsx(xt,{size:n,color:"red"})})},env:he.pushNodesEnv})},oe=t=>u[t],ne=async({secret:t,title:h,message:s,image:i,cta:o})=>{try{let n=await T.decryptWithWalletRPCMethod(b,t,m);const c=await T.decryptWithAES(s,n);let g=await T.decryptWithAES(h,n),w=await T.decryptWithAES(i,n),v=await T.decryptWithAES(o,n);return{title:g,body:c,image:w,cta:v}}catch(n){n.code===4001?(console.error(n),S.dark(e.jsx(D,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n.code===-32601?(console.error(n),S.dark(e.jsx(D,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(n),S.dark(e.jsx(D,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:f,children:e.jsx(Je,{children:e.jsxs(vt,{children:[$&&e.jsxs(We,{id:"scrollstyle-secondary",children:[L&&e.jsx(B,{padding:"10px 20px",children:e.jsx(X,{type:Z.SEAMLESS})}),$.map((t,h)=>{const{cta:s,title:i,message:o,app:n,icon:c,image:g,secret:w,notification:v,channel:O,blockchain:U,url:ce}=t;return e.jsxs(Ye,{children:[ie(h)&&!M&&e.jsx(Oe,{onEnter:se}),e.jsx(pe,{notificationTitle:i,notificationBody:o,cta:s,app:n,icon:c,image:g,theme:f.scheme,subscribeFn:()=>re(O,U),isSpam:!0,isSubscribedFn:async()=>oe(O),isSecret:w!="",decryptFn:()=>ne({secret:w,title:i,message:o,image:g,cta:s}),chainName:U,url:ce})]},h)}),M&&!L&&e.jsx(X,{type:Z.SEAMLESS})]}),!$.length&&!M&&e.jsx(He,{children:e.jsx(Re,{title:"You currently have no spam notifications."})}),j&&e.jsx(xe,{notification:j,clearToast:R})]})})})},He=r.div`
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
`,Xe=({isSpam:a})=>{const[y,W]=p.useState(!a),[_,d]=p.useState(!1),[l,E]=p.useState("");K();const m=be(),A=()=>W(u=>!u),b=u=>{A(),d(!1),E(""),m(u)};return e.jsxs(Ze,{children:[e.jsx(qe,{children:e.jsxs(Qe,{children:[e.jsx(ue,{isActive:y,onClick:()=>b(ge.Inbox),children:"Inbox"}),e.jsx(ue,{isActive:!y,onClick:()=>b(ge.Spam),children:"Spam"})]})}),y?e.jsx(De,{showFilter:_,setShowFilter:d,search:l,setSearch:E}):e.jsx(Fe,{showFilter:_,setShowFilter:d,search:l,setSearch:E})]})},Ze=r.div`
  height: 100%;
  width: 100%;
`,qe=r.div`
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
    background-color: ${a=>a.theme.default.border};
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
  color: ${a=>a.isActive?"#CF1C84":a.theme.color};
  cursor: pointer;

  ${a=>a.isActive&&`&:after{
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
  background: ${a=>a.theme.viewChannelSearchBg};
  color: ${a=>a.theme.viewChannelSearchText};
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
`;const Ve=he.coreContractChain,et=({isSpam:a})=>{ut.pageview(ge.Inbox);const y=le(),{account:W,chainId:_,provider:d}=de(),{epnsReadProvider:l,epnsCommReadProvider:E}=I(f=>f.contracts),[m,A]=Q.useState(null),b=()=>A(null);K();const u=Ve===_;return Q.useEffect(()=>{m&&b()},[m]),Q.useEffect(()=>{_&&async function(){const f=u?d:new ft(he.coreRPC),j=new je(St.epnscore,ve.epnscore,f),J=yt[_].commAddress,R=new je(J,ve.epnsComm,d);y(Et(R)),y(bt(j))}()},[W,_]),Q.useEffect(()=>{!l||!E||l.pushChannelAdmin().then(f=>{y(wt(f))}).catch(f=>{console.error({err:f})})},[l,E]),e.jsx(tt,{children:e.jsxs(at,{children:[e.jsx("div",{className:"joyride"}),e.jsx(Xe,{isSpam:a}),m&&e.jsx(xe,{notification:m,clearToast:b})]})})},tt=r(Tt)`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  background: ${a=>a.theme.default.bg};
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
`,at=r.div`
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
`;let fe;Me=()=>{const a=_t();return e.jsx(fe,{children:e.jsx(et,{isSpam:a.pathname==="/spam"})})},fe=r(At)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Ut as __tla,Me as default};
