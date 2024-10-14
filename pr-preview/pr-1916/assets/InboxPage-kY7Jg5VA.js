import{d$ as p,e7 as r,eT as H,fE as Se,ge as it,eY as ye,ed as B,f2 as le,f3 as I,fq as Ee,dZ as de,e9 as K,gf as rt,d_ as be,e2 as e,ea as we,gg as ot,e4 as X,e5 as q,gh as pe,gi as nt,fP as Y,gj as ct,gk as Te,eu as S,gl as lt,fH as dt,gm as _e,gn as pt,go as Ae,fL as V,fN as ht,fQ as gt,fO as xt,em as he,gp as mt,e1 as ge,eR as x,eS as F,eV as ut,ek as Z,gq as ft,en as je,eo as St,ep as ve,gr as yt,gs as Et,gt as bt,gu as wt,eb as Tt,fp as _t,e8 as At,__tla as jt}from"./index-BI8iCxJK.js";import{W as Oe,S as vt,__tla as Ot}from"./ChannelsModule-DDnYPTK9.js";import{C as T,__tla as Rt}from"./CryptoHelper-DfCJLa3n.js";import{D as Re,__tla as Mt}from"./DisplayNotice-BtmMJJJD.js";import{N as xe,__tla as kt}from"./RedCircle-BE1ql3eT.js";import{__tla as Dt}from"./Skeleton-CxkEklVG.js";import{__tla as It}from"./cloneDeep-D6RaBNp4.js";import{__tla as $t}from"./index.esm-DUiheffn.js";import{__tla as Lt}from"./ManageNotifSettingDropdown-s2f7z5hr.js";import"./notifSetting-DrLKauYy.js";import{__tla as Nt}from"./IpfsHelper-CM3z4qlt.js";import"./browser-Cr_ZWWON.js";import{__tla as Ct}from"./index-SRf3EVZV.js";import{__tla as Pt}from"./js-Dke-fFLj.js";let Me,Ut=Promise.all([(()=>{try{return jt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Pt}catch{}})()]).then(async()=>{const ke=a=>p.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},p.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),De=({showFilter:a,setShowFilter:y,search:W,setSearch:_})=>{const d=le(),{userPushSDKInstance:l}=I(s=>s.user),E=p.useRef(null);Ee(E,()=>a&&y(!1));const{account:m,provider:A,chainId:b}=de(),{notifications:u,page:f,finishedFetching:j,toggle:J}=I(s=>s.notifications),R=K(),[$,L]=p.useState(null),z=()=>L(null),{run:N,welcomeNotifs:C}=I(s=>s.userJourney),[G,M]=p.useState(!1),[k,D]=p.useState(!1),{readOnlyWallet:ee}=p.useContext(rt),[te,ae]=p.useState(!0),se=be(),ie=()=>{se("/snap")},P=({msg:s})=>e.jsx(Le,{children:e.jsx(Ne,{children:s})});p.useEffect(()=>{$&&z()},[$]);const re=async()=>{if(!(k||j||!l)){D(!0);try{const s=await l.notification.list("INBOX",{raw:!0,page:f,limit:10}),i=Y.utils.parseApiResponse(s);d(lt(i)),i.length===0&&d(Te())}catch(s){console.error(s)}finally{D(!1)}}},oe=async()=>{M(!0),D(!0);try{const s=await l.notification.list("INBOX",{raw:!0,page:1,limit:10});u.length||d(nt());const i=Y.utils.parseApiResponse(s),o=new Map,n=new Map;s.forEach(c=>{o.set(c.payload.data.sid,c.epoch),n.set(c.payload.data.sid,c.sender)}),i.forEach(c=>{c.date=o.get(c.sid),c.epoch=new Date(c.date).getTime()/1e3,c.channel=n.get(c.sid)}),d(ct({notifs:i,pageSize:10})),i.length===0&&d(Te())}catch(s){console.error(s)}finally{M(!1),D(!1)}};p.useEffect(()=>{(l==null?void 0:l.account)==ee||!l||oe()},[J,l]);const ne=async()=>{re()},t=s=>Number(s)===u.length-1&&!j&&!G,h=async({secret:s,title:i,message:o,image:n,cta:c})=>{try{let g=await T.decryptWithWalletRPCMethod(A,s,m);const w=await T.decryptWithAES(o,g);let v=await T.decryptWithAES(i,g),O=await T.decryptWithAES(n,g),U=await T.decryptWithAES(c,g);return{title:v,body:w,image:O,cta:U}}catch(g){g.code===4001?(console.error(g),S.dark(e.jsx(P,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):g.code===-32601?(console.error(g),S.dark(e.jsx(P,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(g),S.dark(e.jsx(P,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:R,children:e.jsx(Ie,{children:e.jsxs(Ge,{children:[te&&e.jsx(e.Fragment,{children:e.jsxs(Ce,{flexWrap:"nowrap",children:[e.jsx(ot,{}),e.jsxs(Pe,{justifyContent:"space-between",children:[e.jsx(ye,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),e.jsxs(Be,{onClick:ie,children:["Install Push Snap ",e.jsx(ke,{})," "]})]}),e.jsx(Ue,{onClick:()=>{ae(!1)}})]})}),(!N&&!u.length||N&&!C.length)&&!k&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(Re,{title:"You currently have no notifications, try subscribing to some channels."})}),u&&e.jsxs($e,{id:"scrollstyle-secondary",children:[G&&e.jsx(B,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})}),N&&C.map((s,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,blockchain:O,url:U}=s;return e.jsx(me,{children:e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,theme:R.scheme,chainName:O,url:U})},`${c}+${n}`)}),u.map((s,i)=>{const{cta:o,title:n,message:c,app:g,icon:w,image:v,secret:O,notification:U,blockchain:ce,url:st}=s;if(!N)return e.jsxs(me,{children:[t(i)&&e.jsx(Oe,{onEnter:()=>ne()}),e.jsx(pe,{notificationTitle:n,notificationBody:c,cta:o,app:g,icon:w,image:v,isSecret:O!="",decryptFn:()=>h({secret:O,title:n,message:c,image:v,cta:o}),chainName:ce,theme:R.scheme,url:st})]},i)}),k&&!G&&e.jsx(B,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})})]}),$&&e.jsx(xe,{notification:$,clearToast:z})]})})})},Ie=r.div`
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
  border: 1px solid ${a=>a.theme.default.border};
  background: ${a=>a.theme.default.bg};
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
`,Q=10,He=({showFilter:a,setShowFilter:y,search:W,setSearch:_})=>{const d=le(),{userPushSDKInstance:l}=I(t=>t.user),E=p.useRef(null);Ee(E,()=>a&&y(!1));const{account:m,chainId:A,provider:b}=de(),{subscriptionStatus:u}=I(t=>t.channels),f=K(),[j,J]=p.useState(null),R=()=>J(null),{run:$}=I(t=>t.userJourney),{notifications:L,page:z,finishedFetching:N}=I(t=>t.spam),[C,G]=p.useState(!1),[M,k]=p.useState(!1),D=({msg:t})=>e.jsx(ze,{children:e.jsx(Ke,{children:t})});p.useEffect(()=>{j&&R()},[j]);const ee={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},te=async()=>{if(!(M||N||$||!l)){k(!0);try{const t=await l.notification.list("SPAM",{limit:Q,page:z,raw:!0});let h=Y.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const s=t.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(s),d(mt(h)),h.length===0&&d(Ae())}catch(t){console.error(t)}finally{k(!1)}}},ae=async()=>{if(!(M||C||$)){G(!0),k(!0);try{const t=await l.notification.list("SPAM",{limit:Q,page:1,raw:!0});L.length||d(_e());let h=Y.utils.parseApiResponse(t);h.forEach((i,o)=>{i.date=t[o].epoch,i.epoch=new Date(i.date).getTime()/1e3});const s=h.map(async(i,o)=>{i.channel=t[o].sender;let n=t[o].sender;return{...i}});h=await Promise.all(s),d(pt({notifs:h,pageSize:Q})),h.length===0&&d(Ae())}catch(t){console.error(t)}finally{G(!1),k(!1)}}};p.useEffect(()=>{l&&ae()},[l]);const se=async()=>{te(),d(_e())},ie=t=>Number(t)===L.length-1&&!N&&!C,P=dt(),re=async(t,h)=>{if(!t)return;let s=t;if(!s)return;console.debug(s),P.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(b,m);const i=await b.getSigner(m);console.debug(i),console.debug({signer:i,channelAddress:V(t,ee[h]),userAddress:V(m,A)}),await Y.channels.subscribe({signer:i,channelAddress:V(t,A),userAddress:V(m,A),onSuccess:()=>{P.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:o=>e.jsx(ht,{size:o,color:"green"})}),d(gt({channelAddress:t,status:!0}))},onError:o=>{console.error(o),P.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:n=>e.jsx(xt,{size:n,color:"red"})})},env:he.pushNodesEnv})},oe=t=>u[t],ne=async({secret:t,title:h,message:s,image:i,cta:o})=>{try{let n=await T.decryptWithWalletRPCMethod(b,t,m);const c=await T.decryptWithAES(s,n);let g=await T.decryptWithAES(h,n),w=await T.decryptWithAES(i,n),v=await T.decryptWithAES(o,n);return{title:g,body:c,image:w,cta:v}}catch(n){n.code===4001?(console.error(n),S.dark(e.jsx(D,{msg:"User denied message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n.code===-32601?(console.error(n),S.dark(e.jsx(D,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(n),S.dark(e.jsx(D,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:S.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return e.jsx(we,{theme:f,children:e.jsx(Je,{children:e.jsxs(vt,{children:[L&&e.jsxs(We,{id:"scrollstyle-secondary",children:[C&&e.jsx(B,{padding:"10px 20px",children:e.jsx(X,{type:q.SEAMLESS})}),L.map((t,h)=>{const{cta:s,title:i,message:o,app:n,icon:c,image:g,secret:w,notification:v,channel:O,blockchain:U,url:ce}=t;return e.jsxs(Ye,{children:[ie(h)&&!M&&e.jsx(Oe,{onEnter:se}),e.jsx(pe,{notificationTitle:i,notificationBody:o,cta:s,app:n,icon:c,image:g,theme:f.scheme,subscribeFn:()=>re(O,U),isSpam:!0,isSubscribedFn:async()=>oe(O),isSecret:w!="",decryptFn:()=>ne({secret:w,title:i,message:o,image:g,cta:s}),chainName:U,url:ce})]},h)}),M&&!C&&e.jsx(X,{type:q.SEAMLESS})]}),!L.length&&!M&&e.jsx(Fe,{children:e.jsx(Re,{title:"You currently have no spam notifications."})}),j&&e.jsx(xe,{notification:j,clearToast:R})]})})})},Fe=r.div`
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
  @media ${H.tablet} {
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
`,Xe=({isSpam:a})=>{const[y,W]=p.useState(!a),[_,d]=p.useState(!1),[l,E]=p.useState("");K();const m=be(),A=()=>W(u=>!u),b=u=>{A(),d(!1),E(""),m(u)};return e.jsxs(qe,{children:[e.jsx(Ve,{children:e.jsxs(Ze,{children:[e.jsx(ue,{isActive:y,onClick:()=>b(ge.Inbox),children:"Inbox"}),e.jsx(ue,{isActive:!y,onClick:()=>b(ge.Spam),children:"Spam"})]})}),y?e.jsx(De,{showFilter:_,setShowFilter:d,search:l,setSearch:E}):e.jsx(He,{showFilter:_,setShowFilter:d,search:l,setSearch:E})]})},qe=r.div`
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
    background-color: ${a=>a.theme.default.border};
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
`;const Qe=he.coreContractChain,et=({isSpam:a})=>{ut.pageview(ge.Inbox);const y=le(),{account:W,chainId:_,provider:d}=de(),{epnsReadProvider:l,epnsCommReadProvider:E}=I(f=>f.contracts),[m,A]=Z.useState(null),b=()=>A(null);K();const u=Qe===_;return Z.useEffect(()=>{m&&b()},[m]),Z.useEffect(()=>{_&&async function(){const f=u?d:new ft(he.coreRPC),j=new je(St.epnscore,ve.epnscore,f),J=yt[_].commAddress,R=new je(J,ve.epnsComm,d);y(Et(R)),y(bt(j))}()},[W,_]),Z.useEffect(()=>{!l||!E||l.pushChannelAdmin().then(f=>{y(wt(f))}).catch(f=>{console.error({err:f})})},[l,E]),e.jsx(tt,{children:e.jsxs(at,{children:[e.jsx("div",{className:"joyride"}),e.jsx(Xe,{isSpam:a}),m&&e.jsx(xe,{notification:m,clearToast:b})]})})},tt=r(Tt)`
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
