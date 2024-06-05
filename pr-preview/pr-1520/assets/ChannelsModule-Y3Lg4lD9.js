import{b0 as p,dK as ao,aV as s,aY as he,a_ as ee,a$ as ze,b4 as t,b5 as Z,bL as H,bE as et,ca as tt,cW as te,bf as so,aZ as k,b7 as F,bR as ue,cX as X,be as Yt,dL as lo,dM as co,cj as Re,dN as O,bP as Se,bF as N,bK as nt,c4 as po,bg as P,bJ as qt,dO as ho,ba as Y,bb as q,dP as uo,ds as xo,ci as it,dB as fo,dQ as mo,bU as Pe,bV as Ee,bZ as Ce,dR as Qt,b$ as en,cc as tn,dS as Ue,dT as go,b3 as bo,dU as wo,co as We,dV as ot,bG as He,dW as rt,ch as yo,di as vo,cl as at,dX as nn,dq as jo,dY as So,dZ as on,d_ as rn,d$ as an,e0 as sn,e1 as ln,e2 as Eo,e3 as Co,e4 as ko,e5 as st,e6 as To,aW as T,aX as xe,bi as Ao,__tla as Bo}from"./index-DuGW398W.js";import{D as cn,__tla as _o}from"./DisplayNotice-CDqxm-jl.js";import{S as V,__tla as $o}from"./Skeleton-D8HN0xpR.js";import{c as Do,__tla as Mo}from"./cloneDeep-DkHmGjDl.js";import{G as dn,__tla as Fo}from"./index.esm-BPZJ4gmP.js";import{S as Oo,N as Lo,__tla as Io}from"./RedCircle-CuHmeja1.js";import{D as No,n as zo,g as Ro,u as Po,M as Uo,__tla as Wo}from"./ManageNotifSettingDropdown-DHe_j7rP.js";import{I as Ho,R as Vo,__tla as Go}from"./RangeSlider-CMhxatI7.js";let pn,lt,U,Jo=Promise.all([(()=>{try{return Bo}catch{}})(),(()=>{try{return _o}catch{}})(),(()=>{try{return $o}catch{}})(),(()=>{try{return Mo}catch{}})(),(()=>{try{return Fo}catch{}})(),(()=>{try{return Io}catch{}})(),(()=>{try{return Wo}catch{}})(),(()=>{try{return Go}catch{}})()]).then(async()=>{const hn=e=>p.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M27 16H5",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M14 7L5 16L14 25",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),un=(e,r)=>{if(!("serviceWorker"in navigator)||!e)return;const a=ct();a==="notValid"?alert("This browser does not support desktop notification"):a==="pending"&&Notification.requestPermission().then(async n=>{n==="granted"&&await ao(e),r&&r()})},ct=()=>{if("Notification"in window){if(Notification.permission==="granted")return"granted";if(Notification.permission!=="denied")return"pending"}else return"notValid";return"denied"},xn=({onModalClose:e})=>{const r=ee(),{account:a}=ze();return t.jsx(fn,{theme:r,children:t.jsxs(Z,{gap:"16px",children:[t.jsxs(Z,{gap:"10px",alignItems:"start",children:[t.jsx(H,{fontSize:"20px",fontWeight:"500",color:r.default.color,children:"Allow Notifications"}),t.jsx(H,{fontSize:"14px",fontWeigth:"400",maxWidth:"264px",textAlign:"left",color:r.default.descriptionTextColor,children:"We recommend enabling notifications for receiving updates from subscribed channels for a seamless experience."})]}),t.jsxs(et,{width:"100%",justifyContent:"space-between",children:[t.jsx(tt,{padding:"14px 0px",background:"#D53A94",maxWidth:"110px",color:"#fff",borderRadius:"8px",onClick:()=>{un(a,e)},children:"Allow"}),t.jsx(tt,{padding:"14px 0px",background:r.modalContentBackground,color:r.default.descriptionTextColor,borderRadius:"8px",maxWidth:"110px",hoverBackground:"none",onClick:()=>e(),children:"Skip"})]})]})})},fn=s.div`
  display: flex;
  flex-direction: column;
  right: 20px;
  bottom: 20px;
  position: fixed;
  z-index: 99999999999;
  width: 340px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${e=>e.theme.modalContentBackground};
  padding: 16px 20px;

  @media (${he.mobileL}) {
    width: calc(100% - 80px);
  }
`;function Ve({externalIcon:e=null,internalIcon:r=null,text:a,bgColor:n,onClick:o=()=>{},onMouseEnter:l=()=>{},onMouseLeave:c=()=>{},padding:h,color:w}){return t.jsx(mn,{bg:n,margin:"0 8px",radius:"25px",maxWidth:"fit-content",onMouseEnter:l,onMouseLeave:c,padding:h,children:t.jsx(gn,{hoverBG:"transparent",onClick:o,children:t.jsxs(k,{color:w,children:[e&&t.jsx(te,{children:e}),r&&t.jsx(bn,{children:r}),t.jsx(te,{children:a})]})})})}const mn=s(te)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`,gn=s(so)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  max-width: fit-content;

  & > Span {
    gap: 5px;
    font-weight: 500;
    display: flex;
    font-size: 14px;
    transition: 300ms;

  }
  & > Span:hover {
    white-space: pre;
    cursor:${e=>e.onClick?"pointer":"default"};

  }
`,bn=s(k)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`,fe={ens:{maintainer:"0x983110309620D911731Ac0932219af06091b6744",userjourneyyoutube:"https://www.youtube.com/embed/AmalyHBJ5Gw?controls=0&autoplay=1",userjourneyshort:"ens",article:"https://medium.com/ethereum-push-notification-service/epns-to-add-push-notifications-to-ens-decentralized-domain-name-services-a20f001a7234"},coindesk:{maintainer:"0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",userjourneyyoutube:"https://www.youtube.com/embed/z_RZgoYNH_Y?controls=0&autoplay=1",userjourneyshort:"coindesk",article:"https://medium.com/ethereum-push-notification-service/epns-and-coindesk-announce-media-push-notifications-1707b12884d"},snapshot:{maintainer:"0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c",userjourneyyoutube:"https://www.youtube.com/embed/AYy42D5oG20?controls=0&autoplay=1",userjourneyshort:"snapshot",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-snapshot-to-deliver-notifications-to-improve-community-governance-5730559cb84b"},makerdao:{maintainer:"0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",userjourneyyoutube:"https://www.youtube.com/embed/OxZ5H2vRnRc?controls=0&autoplay=1",userjourneyshort:"makerdao",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-makerdao-development-and-ux-core-unit-to-enable-push-notifications-for-protocol-53f777957d26"},cvi:{maintainer:"0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8",userjourneyyoutube:"https://www.youtube.com/embed/r_wXWfEWSM0?controls=0&autoplay=1",userjourneyshort:"cvi",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-cvi-crypto-volatility-index-to-enable-push-notifications-for-their-5ea662ee73a3"},bancor:{maintainer:"0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",userjourneyyoutube:"https://www.youtube.com/embed/SmoOX2JXx_4?controls=0&autoplay=1",userjourneyshort:"bancor",article:"https://medium.com/ethereum-push-notification-service/epns-integrates-with-bancor-network-to-facilitate-decentralized-push-notifications-d35b5e27d4a9"},oasisapp:{maintainer:"0x12b3eE60Df8ea26D03b8035Ec90434a38A82C4C7",userjourneyyoutube:"https://www.youtube.com/embed/7PPc6a3XUo4?controls=0&autoplay=1",userjourneyshort:"oasisapp",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-arrive-at-defi-on-oasis-app-770ae7ed1b"},mover:{maintainer:"0xb754601d2C8C1389E6633b1449B84CcE57788566",userjourneyyoutube:"https://www.youtube.com/embed/TX1acRPGovA?controls=0&autoplay=1",userjourneyshort:"mover",article:"https://medium.com/ethereum-push-notification-service/mover-integrates-with-epns-to-deliver-yield-harvesting-notifications-ab3bc9a6b26e"},poh:{maintainer:"0x327a29fcE0a6490E4236240Be176dAA282EcCfdF",userjourneyyoutube:"https://www.youtube.com/embed/_Urc35obsOQ?controls=0&autoplay=1",userjourneyshort:"poh",article:"https://medium.com/ethereum-push-notification-service/epns-joins-proof-of-humanity-to-enhance-the-user-experience-of-decentralized-self-sovereign-e734780c9840"},kyber:{maintainer:"0x91c9D4373B077eF8082F468C7c97f2c499e36F5b",userjourneyyoutube:"https://www.youtube.com/embed/EpTYdJMQxoU?controls=0&autoplay=1",userjourneyshort:"kyber",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-to-support-kybers-frictionless-liquidity-pools-4fe65746b39"},fabwelt:{maintainer:"0x361Cb6BE977d0113A33914A8f952Ced95747F793",userjourneyyoutube:"https://www.youtube.com/embed/kLyZ0DT?controls=0&autoplay=1",userjourneyshort:"fabwelt",article:"https://medium.com/ethereum-push-notification-service/fabwelt-partners-with-epns-to-bring-push-notifications-to-crypto-gaming-c247e70bb627"},banklessfr:{maintainer:"0xA8aF754379d8ae406dFbDD0D6c46324aD647243E",userjourneyyoutube:"https://www.youtube.com/embed/1mnLTslK_sY?controls=0&autoplay=1",userjourneyshort:"banklessfr",article:null},angle:{maintainer:"0xA2dEe32662F6243dA539bf6A8613F9A9e39843D3",userjourneyyoutube:null,userjourneyshort:"angle",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-angle-protocol-to-facilitate-push-notifications-for-users-af77cf4d3e2b"},mstable:{maintainer:"0xC30CE8F08BD8F667E65185310807Db937A5d6E53",userjourneyyoutube:null,userjourneyshort:"mstable",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-mstable-to-facilitate-decentralized-notifications-for-users-a3e6be14eecc"},aragon:{maintainer:"0x187a34c86aA6378333cE9033Aa34718D2CEdEd2C",userjourneyyoutube:"https://www.youtube.com/embed/PT90Zyi9A0g?controls=0&autoplay=1",userjourneyshort:"aragon",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-aragon-voice-to-power-unstoppable-decentralized-governance-56182b9d9aa0"},cryptomanga:{maintainer:"0x0B430A1651E6A64510afC97195040359941d0b23",userjourneyyoutube:null,userjourneyshort:"cryptomanga",article:"https://medium.com/ethereum-push-notification-service/epns-x-cryptomanga-decentralized-communication-for-decentralized-gaming-d296956afdeb"},dydx:{maintainer:"0x23c6b8fB0557FD5e6696BceF3fD4855E0d7018C0",userjourneyyoutube:"https://www.youtube.com/embed/oXgNlebVUAo?controls=0&autoplay=1",userjourneyshort:"dydx",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-dydx-foundation-to-enable-notifications-for-governance-updates-5794a5e22c4d"},idle:{maintainer:"0xFb3bD022D5DAcF95eE28a6B07825D4Ff9C5b3814",userjourneyyoutube:"https://www.youtube.com/embed/08bBRIzRcok?controls=0&autoplay=1",userjourneyshort:"idle",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-idle-to-enable-push-notifications-for-governance-updates-32e142ed2f33"},tracerdao:{maintainer:"0x8bf25240402C126bb236d26D391b782c5c893D32",userjourneyyoutube:"https://www.youtube.com/embed/Pw5zjKmQLFg?controls=0&autoplay=1",userjourneyshort:"tracerdao",article:"https://medium.com/ethereum-push-notification-service/epns-brings-push-notifs-to-tracer-dao-governance-91f7b9a9ddcc"},armor:{maintainer:"0x5aFeDeF166bd626B3043cb1D53e16EA9BF863E06",userjourneyyoutube:"https://www.youtube.com/embed/AMW9Xf0Rc2Y?controls=0&autoplay=1",userjourneyshort:"armor",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-armor-to-enable-push-notifications-for-its-users-daa70b4f172d"},pods:{maintainer:"0xb4F88Ad000A53638F203dcA2C39828a58057d53c",userjourneyyoutube:"https://www.youtube.com/embed/Ink21CE_RzM?controls=0&autoplay=1",userjourneyshort:"pods",article:"https://medium.com/ethereum-push-notification-service/epns-inks-partnership-with-options-protocol-pods-finance-e5adcd2d5821"},ooki:{maintainer:"0x9B43a385E08EE3e4b402D4312dABD11296d09E93",userjourneyyoutube:"https://www.youtube.com/embed/vGu--SUV4l4?controls=0&autoplay=1",userjourneyshort:"ooki",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-bzx-to-deliver-crucial-margin-trading-push-notifications-to-wallets-a2f52e4fcefe"},pushgov:{maintainer:"0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08",userjourneyyoutube:"https://www.youtube.com/embed/vvDlJttgQgQ?controls=0&autoplay=1",userjourneyshort:"pushgov",article:"https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4"},symphony:{maintainer:"0xd32908F63713F514aDDBE3962A2dE7112fdCD4A7",userjourneyyoutube:"https://www.youtube.com/embed/FtadeuLSPmE?controls=0&autoplay=1",userjourneyshort:"symphony",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-symphony-finance-to-facilitate-push-notifications-for-limit-order-c6f27bf8e02a"},ethtracker:{maintainer:"0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethtracker",article:null},ethpricetracker:{maintainer:"0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethpricetracker",article:null},btctracker:{maintainer:"0x03EAAAa48ea78d1E66eA3458364d553AD981871E",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"btctracker",article:null},aave:{maintainer:"0xAA940b3501176af328423d975C350d0d1BaAae50",userjourneyyoutube:"https://www.youtube.com/embed/YKflQ8eADFg?controls=0&autoplay=1",userjourneyshort:"aave",article:"https://medium.com/ethereum-push-notification-service/epns-x-aave-protection-against-asset-liquidation-f33be395ef87"},gro:{maintainer:"0x3c1F2E6Ec3De7811E2daa2B8E132CdCd8e39851c",userjourneyyoutube:null,userjourneyshort:"gro",article:"https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-4371ef89bc91"},flipside:{maintainer:"0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F",userjourneyyoutube:null,userjourneyshort:"flipside",article:"https://medium.com/ethereum-push-notification-service/epns-and-flipside-crypto-join-forces-to-facilitate-push-notifications-for-users-58df98b7aba7"},thedefiant:{maintainer:"0x46b676303ebC5699BF47e416677A57A89c70a015",userjourneyyoutube:null,userjourneyshort:"thedefiant",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-the-defiant-to-bring-defi-news-directly-to-users-wallets-8b4896d674bb"}},wn=e=>{let r=!1;return Object.entries(fe).forEach(([a,n])=>{if(fe[a].maintainer===e){r=!0;return}}),r},yn=({addr:e,bgColor:r,loadTeaser:a,playTeaser:n})=>{const o=ee(),[l,c]=ue.useState(!1),h=(w=>{let d=null;return Object.entries(fe).forEach(([f,b])=>{if(fe[f].maintainer===w){d=fe[f];return}}),d})(e);return t.jsxs(F,{flex:"initial",onMouseEnter:()=>{c(!0),console.debug("enter")},onMouseLeave:()=>{c(!1),console.debug("exit")},zIndex:"9",children:[l&&t.jsx(F,{position:"absolute",width:"280px",bottom:"0px",padding:"0px 0px 40px 0px",children:t.jsxs(vn,{bg:o.backgroundBG,padding:"10px",border:`1px solid ${o.borderBg}`,children:[h.userjourneyshort&&t.jsxs(F,{children:[t.jsx(k,{bg:o.viewChannelTutsTitleBg,color:"#fff",padding:"4px 10px",margin:"0px 0px 10px 0px",self:"flex-end",spacing:"0.1em",textTransform:"uppercase",size:"bold",children:"Opt-in to enable"}),t.jsx(X,{src:`./tuts/${h.userjourneyshort}/${h.userjourneyshort}_${o.scheme}.png`,srcSet:`./tuts/${h.userjourneyshort}/${h.userjourneyshort}_${o.scheme}@2x.png 2x, ./tuts/${h.userjourneyshort}/${h.userjourneyshort}_${o.scheme}@3x.png 3x`,alt:`${h.alt}`})]}),t.jsxs(te,{padding:"10px 0px 0px 0px",justify:"space-between",self:"stretch",children:[h.userjourneyyoutube&&t.jsxs(Yt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{c(!1),a(h.userjourneyyoutube),n(!0)},children:[t.jsx(k,{margin:"0px 5px 0px 0px",weight:"bold",color:"#fff",children:"User Journey"}),t.jsx(lo,{size:"20px"})]}),h.article&&t.jsx(Yt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{c(!1),window.open(`${h.article}`,"_blank")},children:t.jsx(co,{size:"20px"})})]})]})}),t.jsx(Ve,{internalIcon:t.jsx(Re,{filter:o.snackbarBorderIcon,width:"fit-content",src:O("svg/view-tutorial-icon.svg")}),text:"Tutorial",bgColor:r,color:o.viewChannelPrimaryText,padding:"6px 16px"})]})},vn=s(F)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`,dt="data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.25%2011.25H8.75V6.75H7.25V11.25ZM8%205.25C8.2125%205.25%208.39075%205.178%208.53475%205.034C8.67825%204.8905%208.75%204.7125%208.75%204.5C8.75%204.2875%208.67825%204.10925%208.53475%203.96525C8.39075%203.82175%208.2125%203.75%208%203.75C7.7875%203.75%207.6095%203.82175%207.466%203.96525C7.322%204.10925%207.25%204.2875%207.25%204.5C7.25%204.7125%207.322%204.8905%207.466%205.034C7.6095%205.178%207.7875%205.25%208%205.25ZM8%2015C6.9625%2015%205.9875%2014.803%205.075%2014.409C4.1625%2014.0155%203.36875%2013.4813%202.69375%2012.8063C2.01875%2012.1313%201.4845%2011.3375%201.091%2010.425C0.697%209.5125%200.5%208.5375%200.5%207.5C0.5%206.4625%200.697%205.4875%201.091%204.575C1.4845%203.6625%202.01875%202.86875%202.69375%202.19375C3.36875%201.51875%204.1625%200.98425%205.075%200.59025C5.9875%200.19675%206.9625%200%208%200C9.0375%200%2010.0125%200.19675%2010.925%200.59025C11.8375%200.98425%2012.6313%201.51875%2013.3063%202.19375C13.9813%202.86875%2014.5155%203.6625%2014.909%204.575C15.303%205.4875%2015.5%206.4625%2015.5%207.5C15.5%208.5375%2015.303%209.5125%2014.909%2010.425C14.5155%2011.3375%2013.9813%2012.1313%2013.3063%2012.8063C12.6313%2013.4813%2011.8375%2014.0155%2010.925%2014.409C10.0125%2014.803%209.0375%2015%208%2015Z'%20fill='%23BAC4D6'/%3e%3c/svg%3e",jn=({settings:e,optInHandler:r})=>{const[a,n]=p.useState([...e]),[o,l]=p.useState(!1),c=ee(),h=(d,f)=>{const b=[...a];b[d].default=f,n(b)},w=d=>{const f=[...a];if(f[d].type===1){const b=f[d];b.default=!b.default}else{const b=f[d];b.enabled=!b.enabled}n(f)};return t.jsxs(En,{children:[a.map((d,f)=>t.jsxs(Cn,{hasBottomBorder:f!==e.length-1,children:[t.jsxs(kn,{children:[t.jsx(H,{color:c.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:d.description}),t.jsx(ho,{onChange:()=>w(f),checked:d.type===1?d.default:d.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),d.type===2&&d.enabled===!0&&t.jsxs(pt,{children:[t.jsx(H,{color:c.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:d.default}),t.jsx(Ho,{val:d.default,max:d.upperLimit,min:d.lowerLimit,step:d.ticker||1,defaultVal:d.default,onChange:({x:b})=>h(f,b)})]}),d.type===3&&d.enabled===!0&&t.jsxs(pt,{children:[t.jsxs(H,{color:c.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[d.default.lower," - ",d.default.upper]}),t.jsx(Vo,{startVal:d.default.lower,endVal:d.default.upper,max:d.upperLimit,min:d.lowerLimit,step:d.ticker||1,defaultStartVal:d.default.lower,defaultEndVal:d.default.upper,onChange:({startVal:b,endVal:v})=>h(f,{lower:b,upper:v})})]})]},f)),t.jsxs(Tn,{children:[t.jsx(H,{color:c.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(An,{onClick:()=>r({channelSettings:a,setLoading:l}),children:[o&&t.jsx(Y,{type:q.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&t.jsx(Bn,{hideIt:o,children:"Opt-in"})]})]})]})},Sn=e=>{const{children:r,channelDetail:a,setLoading:n,onSuccessOptin:o}=e,{chainId:l,provider:c,account:h,wallet:w}=ze();N(A=>A.user);const[d,f]=p.useState(!1),b=nt(),{handleConnectWallet:v,connectWallet:S}=p.useContext(po),B=l===P.coreContractChain,D=p.useMemo(()=>a&&(a!=null&&a.channel_settings)?JSON.parse(a==null?void 0:a.channel_settings):null,[a]),m=()=>{f(!d)},L=()=>{f(!1)},E=qt(),W=async({channelSettings:A,setLoading:I})=>{var re;const _=I||e&&e.setLoading||(()=>{});_(!0);let z=h,G=c;if(!(((re=w==null?void 0:w.accounts)==null?void 0:re.length)>0)){const i=await S();z=i.accounts[0].address,G=new uo(i.provider,"any")}try{let i=a.channel;B||(i=a.alias_address),E.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const J=await(G==null?void 0:G.getSigner(z)),ae=zo({settings:A}),Q=Ro(ae);await xo.channels.subscribeV2({signer:J,channelAddress:it(i,l),userAddress:it(z,l),settings:Q,onSuccess:()=>{b(fo({channelAddress:i,status:!0})),b(mo({channelAddress:i,settings:Po({channelSetting:A})})),o(),E.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:j=>t.jsx(Pe,{size:j,color:"green"})})},onError:()=>{console.error("opt in error"),E.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:j=>t.jsx(Ee,{size:j,color:"red"})})},env:P.pushNodesEnv})}catch(i){E.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${i.message} )`,toastType:"ERROR",getToastIcon:J=>t.jsx(Ee,{size:J,color:"red"})}),console.error(i)}finally{_(!1)}};return D&&D.length?t.jsx(No,{centerOnMobile:!0,showDropdown:d,toggleDropdown:m,closeDropdown:L,renderDropdownContainer:t.jsx(jn,{settings:D,optInHandler:W}),containerPadding:"0px 16px 16px 16px",children:r}):t.jsx(H,{onClick:W,children:r})},En=s.div`
  min-width: 300px;
`,Cn=s.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&Se`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,kn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Tn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,An=s.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  min-width: 90px;
  justify-content: center;
  margin: 0px 0px 0px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  background: #e20880;
  border-radius: 8px;
  padding: 9px 20px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${e=>e.disabled&&Se`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`,pt=s.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,Bn=s.span`
  ${e=>e.hideIt&&Se`
      visibility: hidden;
    `};
`,ht=({channelName:e,channelDescription:r,channelLogoSrc:a,height:n})=>t.jsxs(_n,{style:{borderRadius:n<250?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx($n,{children:"Channel was recently updated"}),t.jsx(Dn,{children:"Previously"}),t.jsxs(Mn,{children:[t.jsx(Fn,{children:t.jsx(On,{src:a})}),t.jsxs(Ln,{children:[t.jsx(In,{children:e}),t.jsx(Nn,{children:r})]})]})]}),_n=s(Z)`
  box-sizing: border-box;
  width: 18.75rem;
  // height: 7.5rem;
  // max-height: 7.5rem;
  background: ${e=>e.theme.default.bg};
  // border-radius: 0.125rem 1rem 1rem 1rem;
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.25rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width:400px){
    width:16.75rem;
  }


`,$n=s(Ce)`
  color: ${e=>e.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Dn=s(Ce)`
  color: ${e=>e.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`,Mn=s(et)`
  align-items: center;
  margin-top:8px;
`,Fn=s(et)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`,On=s(Re)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${e=>`0.5px solid ${e.theme.tooltipIconBorderClr}`};
`,Ln=s(Z)`
  align-items: flex-start;
`,In=s(Ce)`
  color: ${e=>e.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`,Nn=s(Ce)`
  color: ${e=>e.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`,ut=({verifierIcon:e,verifierName:r,height:a})=>{const n=(r==null?void 0:r.length)>15?r.substring(0,15)+"...":r;return t.jsxs(zn,{style:{width:212+(n&&n.length*2)+"px",borderRadius:a<160?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(xt,{children:"Verified By:"}),t.jsx(Rn,{src:e}),t.jsx(xt,{children:n})]})},zn=s(Z)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`,xt=s(Ce)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`,Rn=s.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;function ft({channelObjectProp:e,loadTeaser:r,playTeaser:a,minimal:n,profileType:o}){var Zt,Xt;const l=nt(),c=ee();N(u=>u.userJourney);const{userPushSDKInstance:h}=N(u=>u.user),{epnsReadProvider:w,epnsWriteProvider:d,epnsCommReadProvider:f,pushAdminAddress:b,ZERO_ADDRESS:v}=N(u=>u.contracts),{canVerify:S,channelDetails:B,coreChannelAdmin:D}=N(u=>u.admin),{isAllowNotifModalVisible:m}=N(u=>u.modal),{channelsCache:L,CHANNEL_BLACKLIST:E,CHANNEL_ACTIVE_STATE:W,subscriptionStatus:A,userSettings:I}=N(u=>u.channels),{account:_,provider:z,chainId:G}=ze(),re=G===P.coreContractChain,[i,J]=p.useState(e),[ae,Q]=p.useState(!1),[j,De]=p.useState(!1),[Ye,we]=p.useState(0),[se,x]=p.useState(!1),[y,$]=p.useState(!1),[le,ye]=p.useState(!1),[ce,Wi]=p.useState(!1),[Hi,Ko]=p.useState(!1),[M,Vt]=p.useState(null),[Vi,qe]=p.useState(i.channel),[K,Gi]=p.useState(0),[Me,Zo]=p.useState({}),[R,Ji]=p.useState({}),[Gt,Ki]=p.useState(!1),Fe=i.verified_status,Zi=i.blocked,Qe=en(600),Jt=en(500),ve=i.activation_status,je=tn(),Xi=E.includes(i.channel),[Oe,Yi]=p.useState(null),Kt=()=>Yi(null);p.useEffect(()=>{Q(A[i.channel])},[A]),p.useEffect(()=>{m&&setTimeout(()=>{l(Ue({flag:!1}))},1e4)},[m]),p.useEffect(()=>{x(b==_)},[b,_]);const qi=async()=>{try{return await yo.getInstance().getChannelJsonStartBlockAsync(i.channel)}catch(u){console.error(u)}};p.useEffect(()=>{i.channel&&async function(){const u=await qi();u&&Ji(u)}()},[i.channel]),p.useEffect(()=>{if(Me&&R){if(Object.keys(Me).length==0||Object.keys(R).length==0)return;let u=!1;["name","icon","info"].forEach(g=>{Me[g]!=R[g]&&(u=!0)}),Ki(u)}},[Me,R]),p.useEffect(()=>{!i||!i.channel||!h||async function(){var u;if(we(i.subscriber_count),!i.verified_status)De(!1);else try{let g=null;if(g=(await w.channels(i.channel)).verifiedBy,L[g])Vt(L[g]);else{let C={};go((u=bo)==null?void 0:u.pushChannelAdmin,g)?C={name:"Push Admin",icon:"./logo192.png"}:C=await h.channel.info(it(g,P.coreContractChain)),l(wo({address:g,meta:C})),Vt(C)}}catch(g){console.error("Error fetching channel information:",g)}finally{De(!1)}}()},[_,i,h]);let de;re?de=i.channel==_:de=i.alias_address==_,p.useEffect(()=>{Oe&&Kt()},[Oe]),f==null||f.address;const pe=qt(),Qi=p.useMemo(()=>Do(I),[I]),eo=u=>u.length>40?`${vo(u,4,6)}`:u,to=()=>{$(!0),d.verifyChannel(i.channel).then(async u=>{console.debug(u),console.info("Transaction Sent!"),pe.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:g=>t.jsx(Pe,{size:g,color:"green"})}),await u.wait(1),console.info("Transaction Mined!"),setIsVerified(!0)}).catch(u=>{console.error("!!!Error verifyChannel() --> %o",u),pe.showMessageToast({toastTitle:"Error",toastMessage:"There was an error verifying the channel",toastType:"ERROR",getToastIcon:g=>t.jsx(Ee,{size:g,color:"red"})})}).finally(()=>{$(!1)})},no=()=>{$(!0),d.unverifyChannel(i.channel).then(async u=>{console.debug(u),console.info("Transaction Sent!"),pe.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:g=>t.jsx(Pe,{size:g,color:"green"})}),await u.wait(1),console.info("Transaction Mined!"),setIsVerified(!1)}).catch(u=>{console.error("!!!Error handleSendMessage() --> %o",u),pe.showMessageToast({toastTitle:"Error",toastMessage:"There was an error unverifying the channel",toastType:"ERROR",getToastIcon:g=>t.jsx(Ee,{size:g,color:"red"})})}),$(!1)},io=()=>{ye(!0),d.blockChannel(i.channel).then(async u=>{console.debug(u),console.info("Transaction Sent!"),pe.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:g=>t.jsx(Pe,{size:g,color:"green"})}),await u.wait(1),console.info("Transaction Mined!")}).catch(u=>{console.error("!!!Error handleSendMessage() --> %o",u),pe.showMessageToast({toastTitle:"Error",toastMessage:"There was an error blocking the channel",toastType:"ERROR",getToastIcon:g=>t.jsx(Ee,{size:g,color:"red"})})}).finally(()=>{ye(!1),setIsBlocked(!0)})},oo=u=>{const g=Le(u,!0);if(navigator&&navigator.clipboard)navigator.clipboard.writeText(g);else{const C=document.createElement("textarea");C.value=g,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C)}},Le=(u,g)=>{let C=`${at.Channels}/${u}`;if(g){let Ne=window.location.hostname;Ne==="localhost"&&(Ne=Ne+":3000"),C=`${Ne}${C}`}return C};if(Zi)return t.jsx(t.Fragment,{});if(Xi)return t.jsx(t.Fragment,{});const Ie=u=>{var C;const g=(C=document.getElementById(i==null?void 0:i.channel))==null?void 0:C.getBoundingClientRect();Gi(g==null?void 0:g.top)},ro=()=>{if(ct()==="pending"){let u=localStorage.getItem(nn),g=new Date().getTime()+1*24*60*60*1e3;u?(u=parseInt(u),u>=g&&l(Ue({flag:!0}))):l(Ue({flag:!0})),localStorage.setItem(nn,g)}};return t.jsxs(Un,{id:i.channel,minimal:n,border:o=="Profile"?"none":`1px solid ${n?"transparent":c.default.border}`,children:[Qe&&t.jsxs(Wn,{children:[t.jsx(wt,{minimal:n,children:t.jsx(bt,{children:t.jsx(gt,{minimal:n,children:j?t.jsx(V,{color:c.interfaceSkeleton,height:"100%"}):t.jsx(mt,{src:`${i.iconV2?i.iconV2:i.icon}`})})})}),!n&&t.jsx(vt,{children:j?t.jsx(V,{color:c.interfaceSkeleton,width:"50%",height:24}):t.jsx(jt,{children:t.jsxs(Vn,{children:[t.jsxs(k,{children:[Gt&&t.jsx(We,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:K<250?{background:"none",top:"20px",left:Jt?"-100px":"5px"}:{background:"none",bottom:"25px",left:Jt?"-100px":"5px"},tooltipContent:t.jsx(ht,{height:K,channelName:R.name,channelDescription:R.info,channelLogoSrc:R.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ie(i.channel)},children:t.jsx(yt,{src:dt})})}),t.jsx(k,{onClick:()=>{je(Le(i.channel,!1))},children:i.name})]}),Fe==1&&t.jsxs(k,{margin:"3px 5px 0px",style:{display:"flex"},children:[t.jsx(We,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:K<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(ut,{height:K,verifierIcon:M==null?void 0:M.icon,verifierName:M==null?void 0:M.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ie(i.channel)},children:t.jsx(dn,{size:18,color:c.viewChannelVerifiedBadge})})}),i&&(i==null?void 0:i.channel)&&t.jsx(k,{padding:"0 0 0 5px",children:t.jsx(X,{src:O("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),i&&(i==null?void 0:i.alias_address)!=null&&(i==null?void 0:i.alias_address)!="NULL"&&P.allowedNetworks.includes(+(i==null?void 0:i.alias_blockchain_id))&&!ot[+(i==null?void 0:i.alias_blockchain_id)][i==null?void 0:i.channel]&&t.jsx(k,{padding:"0 0 0 5px",children:t.jsx(X,{src:O(`svg/${(Xt=(Zt=He[+i.alias_blockchain_id])==null?void 0:Zt.label)==null?void 0:Xt.split(" ")[0]}.svg`),alt:"Polygon",width:"20px",height:"20px"})})]})]})})})]}),!Qe&&t.jsx(t.Fragment,{children:t.jsx(wt,{minimal:n,onClick:()=>{je(Le(i.channel,!1))},children:t.jsx(bt,{children:t.jsx(gt,{children:j?t.jsx(V,{color:c.interfaceSkeleton,height:"100%"}):t.jsx(mt,{src:`${i.iconV2?i.iconV2:i.icon}`})})})})}),!n&&t.jsxs(Hn,{children:[!Qe&&t.jsx(vt,{children:j?t.jsx(V,{color:c.interfaceSkeleton,width:"50%",height:24}):t.jsx(jt,{children:t.jsxs(k,{style:{display:"flex",alignItems:"center"},children:[Gt&&t.jsx(We,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:K<250?{background:"none",top:"20px",left:"5px"}:{background:"none",bottom:"25px",left:"5px"},tooltipContent:t.jsx(ht,{height:K,channelName:R.name,channelDescription:R.info,channelLogoSrc:R.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ie(i.channel)},style:{cursor:"pointer"},children:t.jsx(yt,{src:dt})})}),t.jsx(k,{onClick:()=>{je(Le(i.channel,!1))},children:i.name}),Fe==1&&t.jsx(k,{margin:"3px 5px 0px",style:{display:"flex"},children:t.jsx(We,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:K<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(ut,{height:K,verifierIcon:M==null?void 0:M.icon,verifierName:M==null?void 0:M.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ie(i.channel)},children:t.jsx(dn,{size:18,color:c.viewChannelVerifiedBadge})})})}),i&&(i==null?void 0:i.channel)&&t.jsx(k,{padding:"0 0 0 5px",children:t.jsx(X,{src:O("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),i&&(i==null?void 0:i.alias_address)!=null&&(i==null?void 0:i.alias_address)!="NULL"&&P.allowedNetworks.includes(+(i==null?void 0:i.alias_blockchain_id))&&!ot[+(i==null?void 0:i.alias_blockchain_id)][i==null?void 0:i.channel]&&t.jsx(k,{padding:"0 0 0 5px",children:t.jsx(X,{src:O(`svg/${rt[+i.alias_blockchain_id]}`),alt:"Alias Chain Logo",width:"20px",height:"20px"})})]})})}),t.jsx(Gn,{children:j?t.jsxs(t.Fragment,{children:[t.jsx(ke,{atH:5,atW:100,children:t.jsx(V,{color:c.interfaceSkeleton,width:"100%",height:5})}),t.jsx(ke,{atH:5,atW:100,children:t.jsx(V,{color:c.interfaceSkeleton,width:"100%",height:5})}),t.jsx(ke,{atH:5,atW:100,children:t.jsx(V,{color:c.interfaceSkeleton,width:"40%",height:5})})]}):t.jsx(Jn,{children:i.info})}),t.jsx(Kn,{children:j?t.jsx(t.Fragment,{children:t.jsx(ke,{atH:10,atW:30,marginBottom:"0",children:t.jsx(V,{color:c.interfaceSkeleton})})}):t.jsx(te,{align:"center",justify:"flex-start",margin:"0px -5px",children:t.jsxs(Zn,{children:[t.jsx(Ve,{externalIcon:t.jsx(X,{src:O("svg/users.svg"),alt:"users",width:"14px",height:"14px"}),internalIcon:null,text:Ye,padding:"5.3px 10px",bgColor:c.viewChannelSecondaryBG,color:c.viewChannelSecondaryText}),t.jsx(Ve,{text:eo(Vi),bgColor:c.viewChannelSearchBg,padding:"6px 16px",color:c.viewChannelPrimaryText,onClick:()=>{oo(i.channel),qe("copied")},onMouseEnter:()=>{qe("click to copy")},onMouseLeave:()=>{qe(i.channel)}}),o==="Profile"&&t.jsxs(ei,{active:ve,children:[ve===0&&t.jsx(Re,{width:"12px",src:Oo,margin:"0 5px 2px 0px",height:"30px"}),ve===1?"Active":"Deactivated"]}),wn(i.channel)&&t.jsx(yn,{addr:i.channel,bgColor:c.viewChannelSearchBg,loadTeaser:r,playTeaser:a})]})})})]}),!!_&&!!z&&!n&&t.jsxs(t.Fragment,{children:[t.jsx(Xn,{}),t.jsxs(Yn,{children:[j&&t.jsx(qn,{children:t.jsx(V,{color:c.interfaceSkeleton})}),!j&&se&&o=="Channel"&&t.jsxs(Ge,{onClick:io,disabled:le,children:[le&&t.jsx(ge,{children:t.jsx(Y,{type:q.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:le,children:"Block channel"})]}),!j&&(se||S)&&!Fe&&o=="Channel"&&t.jsxs(Ge,{onClick:to,disabled:y,children:[y&&t.jsx(ge,{children:t.jsx(Y,{type:q.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:y,children:"Verify Channel"})]}),!j&&(se||Hi)&&Fe&&o=="Channel"&&t.jsxs(Et,{onClick:no,disabled:y,children:[y&&t.jsx(ge,{children:t.jsx(Y,{type:q.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:y,children:"Unverify Channel"})]}),!j&&!ae&&t.jsxs(t.Fragment,{children:[de&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(kt,{onClick:()=>je("/dashboard"),children:"Go To Dashboard"}):t.jsx(Ct,{disabled:!0,children:"Owner"})}),!de&&ve!==0&&t.jsx(Sn,{channelDetail:i,setLoading:Wi,onSuccessOptin:()=>{ro()},children:t.jsxs(Ge,{onClick:()=>{},disabled:ce,className:"optin",children:[ce&&t.jsx(ge,{children:t.jsx(Y,{type:q.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:ce,children:"Opt-In"})]})})]}),!j&&ae&&ve!==0&&t.jsxs(t.Fragment,{children:[de&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(kt,{onClick:()=>je("/dashboard"),children:"Go To Dashboard"}):t.jsx(Ct,{disabled:!0,children:"Owner"})}),!de&&t.jsx(Uo,{centerOnMobile:!0,channelDetail:i,setSubscribed:Q,userSetting:Qi[i.channel],setSubscriberCount:we,onSuccessOptout:()=>{Q(!1),we(u=>u-1)},children:t.jsxs(Et,{onClick:()=>{},disabled:ce,children:[ce&&t.jsx(ge,{children:t.jsx(Y,{type:q.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:ce,children:"Manage"}),t.jsx(Re,{alt:"arrow",src:O("svg/arrow.svg"),height:"10px",width:"12px"})]})})]})]})]}),Oe&&t.jsx(Lo,{notification:Oe,clearToast:Kt}),m&&t.jsx(xn,{onModalClose:()=>l(Ue({flag:!1}))})]},i.channel)}const Pn=s.div`
  display: flex;
`;s(Pn)`
  flex-direction: column;
`;const Un=s.div`
  // flex: 1;
  display: flex;
  flex-wrap: nowrap;
  border: ${e=>e.border};
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0px 5px;
  justify-content: center;
  padding: ${e=>e.minimal?"5px 0px":"25px 10px"};
  align-self: stretch;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${e=>e.minimal?"transparent":e.theme.default.border};
    border-top: none;
    border-left: none;
    border-right: none;
  }
`,ke=s.div`
  overflow: hidden;
  width: ${e=>e.atW+"%"||"100%"};
  height: ${e=>e.atH}px;
  border-radius: ${e=>e.borderRadius||10}px;
  margin-bottom: ${e=>e.marginBottom||5}px;
  margin-right: ${e=>e.marginRight||0}px;
`,mt=s.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`,gt=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: ${e=>e.minimal?"10px":"20px"};
  display: flex;
  justify-content: center;
  align-items: center;
`,bt=s.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
`,wt=s(tt)`
  max-width: 100px;
  min-width: 48px;
  flex: 1;
  margin: 5px;
  padding: ${e=>e.minimal?"5px":"10px"};
  border: 1px solid ${e=>e.theme.viewChannelIconBorder};
  background: transparent;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    min-width: ${e=>e.minimal?"48px":"100px"};
    max-width: ${e=>e.minimal?"48px":"100px"};
    min-height: ${e=>e.minimal?"48px":"100px"};
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`,Wn=s.div`
  display: flex;
`,yt=s.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,Hn=s.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 240px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;

  @media (max-width: 480px) {
    min-width: 210px;
  }
`;s.div`
  word-break: break-word;

  @media (max-width: 768px) {
    text-align: center;
  }
`;const vt=s(te)`
  padding: 5px 10px 5px 0px;
  position: relative;
  justify-content: flex-start;
  margin: 0;
  flex: initial;
  align-items: center;
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    flex: 5;
    padding-left: 5px;
  }
`,jt=s.a`
  text-decoration: none;
  display: flex;
  flex: inherit;
  align-item: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }

  & > span > span {
    font-weight: 500;
    color: ${e=>e.theme.viewChannelLink};
    font-size: 18px;
    cursor: pointer;
  }

  & > span > span {
    vertical-align: middle;
  }
`,Vn=s(k)`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    align-items: baseline;
    flex-direction: column;
  }
  & > span > span {
    font-weight: 500;
    color: ${e=>e.theme.viewChannelLink};
    font-size: 18px;
    cursor: pointer;
  }
`;s.span`
  color: #ec008c;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`,s.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 4px;
`,s.span`
  font-weight: 400;
  color: ${e=>e.theme.color};
  font-size: 16px;
  letter-spacing: 0em;
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;const Gn=s.div`
  flex: 1;
  display: flex;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.75);
  padding: 5px 0px 10px 0px;
  font-weight: 400;
  flex-direction: column;
  color: ${e=>e.theme.color};
  @media (max-width: 768px) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 600px) {
    align-self: flex-start;
    text-align: left;
  }
`,Jn=s.label`
  flex: 1;
  line-height: 165%;
  color: ${e=>e.theme.viewChannelPrimaryTextColor};
`,Kn=s.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,Zn=s.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
    justify-content: center;
  }
`,St=s.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  display: flex;
  border-radius: 10px;
  font-size: 11px;
  gap: 3px;
`;s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${Qt.laptopL} {
    padding-top: 1rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-self: center;
    text-align: center;
    align-items: center;
  }
`,s(St)`
  background: ${e=>e.theme.viewChannelSecondaryBG};
  transition: 300ms;
`,s.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,s(St)`
  background: #674c9f;
`;const Xn=s.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${Qt.tablet} {
    display: block;
  }
`,Yn=s.div`
  margin: 5px;
  flex: 0;
  // max-width: 250px;
  display: flex;
  justify-content: center;
  // justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,Te=s.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${e=>e.disabled&&Se`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`,me=s.span`
  font-weight: 500;
  font-size: 14px;

  ${e=>e.hideit&&Se`
      visibility: hidden;
    `};
`,ge=s.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,qn=s.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Ge=s(Te)`
  background: #e20880;
  color: #fff;
  border-radius: 8px;
  padding: 0px;
  min-height: 36px;
  min-width: 108px;
`,Et=s(Te)`
  background: transparent;
  color: ${e=>e.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`,Ct=s(Te)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`,kt=s(Te)`
  background: #e20880;
  border-radius: 8px;
  padding: 7px 14px;
  min-height: 36px;
  min-width: max-content;
`;s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,s.div`
  margin: 0px 10px;
`;const Qn=s.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: Strawford, Source Sans Pro;
`,ei=s(Qn)`
  color: #2dbd81;
  color: ${e=>e.active?"#2DBD81":"#E93636"};
  background-color: ${e=>e.active?"#c6efd1":"#FFD8D8"};
  margin-left: 10px;
  ${e=>e.active&&`
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`,ti=20,ni=({channelID:e,loadTeaser:r,playTeaser:a,minimal:n,profileType:o})=>{const{userPushSDKInstance:l}=N(m=>m.user),c=ee(),[h,w]=p.useState(!0),[d,f]=p.useState(!0),[b,v]=p.useState([]),[S,B]=p.useState(null),D=tn();return p.useEffect(()=>{B(null),l&&(w(!0),(async()=>{try{const m=await l.channel.info(e);B(m),w(!1)}catch(m){console.log("Error",m),w(!1)}})())},[e,l]),p.useEffect(()=>(l&&(w(!0),l.channel.notifications(e,{page:1,limit:ti}).then(m=>{console.log(m),v(m.notifications),f(!1)}).catch(m=>{console.error("Error >>>>",m),f(!1)})),()=>{v([]),f(!0)}),[e,l]),t.jsxs(ii,{children:[t.jsx(oi,{flex:"initial",alignItems:"flex-start",padding:"0px",children:t.jsx(hn,{onClick:()=>{D(at.Channels)}})}),t.jsxs(t.Fragment,{children:[S&&!h&&t.jsx(ft,{channelObjectProp:S,loadTeaser:r,playTeaser:a,minimal:n,profileType:o}),!h&&t.jsxs(si,{children:[t.jsx(H,{fontSize:"20px",fontWeight:"500",color:c.color,children:"Recent Notifications"}),t.jsx(li,{color:c.color,children:"Showing preview of the latest non-encrypted notifications sent by the channel."})]}),t.jsxs(ai,{children:[d&&t.jsx(Y,{type:q.SEAMLESS,spinnerSize:40}),!b.length&&!d&&t.jsx("div",{style:{textAlign:"center"},children:t.jsx(cn,{title:"You currently have no notifications, try subscribing to some channels."})}),b.map((m,L)=>{const E=m.message.payload;return t.jsx(ri,{children:t.jsx(jo,{notificationTitle:E.title,notificationBody:E.body,cta:E.cta,image:E.embed,app:m.channel.name,icon:m.channel.icon,url:m.channel.url,chainName:m.source,theme:c.scheme})},`${m.payload_id}`)})]})]})]})},ii=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  margin: 20px 0px 0px 20px;

  @media ${he.tablet} {
    overflow-y: auto;
    margin: 20px 10px 0px 10px;
  }
`,oi=s(Z)`
  @media ${he.tablet} {
    position: absolute;
    z-index: 1;
    padding: 10px;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
  }
`,ri=s.div``,ai=s(Z)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: 0px 20px 10px 0px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${e=>e.theme.scrollBg};
    width: 6px;
  }

  @media ${he.tablet} {
    padding: 0px 20px;
    overflow-y: visible;

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
`,si=s(Z)`
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  align-items: baseline;
  margin: 7px 20px 24px 5px;
`,li=s(H)`
  font-size: 0.8em;
`;var ci=!!(typeof window<"u"&&window.document&&window.document.createElement);function di(){if(!ci||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var r=Object.defineProperty({},"passive",{get:function(){function n(){e=!0}return n}()}),a=function(){};window.addEventListener("testPassiveEventSupport",a,r),window.removeEventListener("testPassiveEventSupport",a,r)}catch{}return e}var Je=void 0;function pi(){return Je===void 0&&(Je=di()),Je}function hi(e){if(e)return pi()?e:!!e.capture}function ui(e){if(!e)return 0;if(e===!0)return 100;var r=e.capture<<0,a=e.passive<<1,n=e.once<<2;return r+a+n}function Tt(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function Ae(e){this.target=e,this.events={}}Ae.prototype.getEventHandlers=function(){function e(r,a){var n=String(r)+" "+String(ui(a));return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]}return e}(),Ae.prototype.handleEvent=function(){function e(r,a,n){var o=this.getEventHandlers(r,a);o.handlers=o.nextHandlers,o.handlers.forEach(function(l){l&&l(n)})}return e}(),Ae.prototype.add=function(){function e(r,a,n){var o=this,l=this.getEventHandlers(r,n);Tt(l),l.nextHandlers.length===0&&(l.handleEvent=this.handleEvent.bind(this,r,n),this.target.addEventListener(r,l.handleEvent,n)),l.nextHandlers.push(a);var c=!0,h=function(){function w(){if(c){c=!1,Tt(l);var d=l.nextHandlers.indexOf(a);l.nextHandlers.splice(d,1),l.nextHandlers.length===0&&(o.target&&o.target.removeEventListener(r,l.handleEvent,n),l.handleEvent=void 0)}}return w}();return h}return e}();var Ke="__consolidated_events_handlers__";function At(e,r,a,n){e[Ke]||(e[Ke]=new Ae(e));var o=hi(n);return e[Ke].add(r,a,o)}function xi(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function fi(e,r){for(var a=0;a<r.length;a++){var n=r[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function mi(e,r,a){return r&&fi(e.prototype,r),e}function gi(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&Ze(e,r)}function Be(e){return Be=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Be(e)}function Ze(e,r){return Ze=Object.setPrototypeOf||function(a,n){return a.__proto__=n,a},Ze(e,r)}function bi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function wi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yi(e,r){return r&&(typeof r=="object"||typeof r=="function")?r:wi(e)}function vi(e){var r=bi();return function(){var a=Be(e),n;if(r){var o=Be(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return yi(this,n)}}function ji(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function Si(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function Bt(e,r){var a=Si(e);if(typeof a=="number")return a;var n=ji(e);if(typeof n=="number")return n*r}var _e="above",ne="inside",$e="below",Xe="invisible";function _t(e){return typeof e.type=="string"}var Ei=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function Ci(e,r){if(e&&!_t(e)&&!r)throw new Error(Ei)}function ki(e){return e.viewportBottom-e.viewportTop===0?Xe:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?ne:e.viewportBottom<e.waypointTop?$e:e.waypointTop<e.viewportTop?_e:Xe}var ie,be=[];function $t(e){be.push(e),ie||(ie=setTimeout(function(){ie=null;for(var a;a=be.shift();)a()},0));var r=!0;return function(){if(r){r=!1;var a=be.indexOf(e);a!==-1&&(be.splice(a,1),!be.length&&ie&&(clearTimeout(ie),ie=null))}}}function Ti(e){return e==="window"?globalThis.window:e}let Dt;Dt={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},U=function(e){gi(a,e);var r=vi(a);function a(n){var o;return xi(this,a),o=r.call(this,n),o.refElement=function(l){o._ref=l},o}return mi(a,[{key:"componentDidMount",value:function(){var n=this;a.getWindow()&&(this.cancelOnNextTick=$t(function(){n.cancelOnNextTick=null;var o=n.props,l=o.children;o.debug,Ci(l,n._ref),n._handleScroll=n._handleScroll.bind(n),n.scrollableAncestor=n._findScrollableAncestor(),n.scrollEventListenerUnsubscribe=At(n.scrollableAncestor,"scroll",n._handleScroll,{passive:!0}),n.resizeEventListenerUnsubscribe=At(window,"resize",n._handleScroll,{passive:!0}),n._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var n=this;a.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=$t(function(){n.cancelOnNextTick=null,n._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){a.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var n=this.props,o=n.horizontal,l=n.scrollableAncestor;if(l)return Ti(l);for(var c=this._ref;c.parentNode;){if(c=c.parentNode,c===document.body)return window;var h=window.getComputedStyle(c),w=o?h.getPropertyValue("overflow-x"):h.getPropertyValue("overflow-y"),d=w||h.getPropertyValue("overflow");if(d==="auto"||d==="scroll"||d==="overlay")return c}return window}},{key:"_handleScroll",value:function(n){if(this._ref){var o=this._getBounds(),l=ki(o),c=this._previousPosition,h=this.props;h.debug;var w=h.onPositionChange,d=h.onEnter,f=h.onLeave,b=h.fireOnRapidScroll;if(this._previousPosition=l,c!==l){var v={currentPosition:l,previousPosition:c,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};w.call(this,v),l===ne?d.call(this,v):c===ne&&f.call(this,v);var S=c===$e&&l===_e,B=c===_e&&l===$e;b&&(S||B)&&(d.call(this,{currentPosition:ne,previousPosition:c,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),f.call(this,{currentPosition:l,previousPosition:ne,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}}},{key:"_getBounds",value:function(){var n=this.props,o=n.horizontal;n.debug;var l=this._ref.getBoundingClientRect(),c=l.left,h=l.top,w=l.right,d=l.bottom,f=o?c:h,b=o?w:d,v,S;this.scrollableAncestor===window?(v=o?window.innerWidth:window.innerHeight,S=0):(v=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,S=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var B=this.props,D=B.bottomOffset,m=B.topOffset,L=Bt(m,v),E=Bt(D,v),W=S+v;return{waypointTop:f,waypointBottom:b,viewportTop:S+L,viewportBottom:W-E}}},{key:"render",value:function(){var n=this,o=this.props.children;if(!o)return ue.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(_t(o)||So.isForwardRef(o)){var l=function(c){n.refElement(c),o.ref&&(typeof o.ref=="function"?o.ref(c):o.ref.current=c)};return ue.cloneElement(o,{ref:l})}return ue.cloneElement(o,{innerRef:this.refElement})}}]),a}(ue.PureComponent),U.above=_e,U.below=$e,U.inside=ne,U.invisible=Xe,U.getWindow=function(){if(typeof window<"u")return window},U.defaultProps=Dt,U.displayName="Waypoint";const Mt=({channelsNetworkId:e,setChannelsNetworkId:r})=>{var d;const a=ee(),n=p.useRef(null),o=p.useRef(null),[l,c]=p.useState(!1),[h,w]=p.useState([]);return on(n,o,()=>{c(!1)}),p.useEffect(()=>{const f=[];P.allowedNetworks.map(b=>{f.push({id:b,value:He[b].label,title:He[b].label,icon:O(`svg/${rt[b]}`),function:()=>{r(b),c(!1)}})}),w(f)},[P]),t.jsxs(Ai,{children:[t.jsxs(_i,{color:a.viewChannelSearchText,onClick:()=>c(!l),ref:n,children:[t.jsx(te,{padding:"0 8px 0 0",children:t.jsx(X,{src:O(`svg/${rt[e]}`),alt:"active chain",width:"32px",height:"32px"})}),t.jsx(F,{width:"max-content",className:"text",children:(d=He[e])==null?void 0:d.label}),t.jsx($i,{children:t.jsx("img",{alt:"arrow",className:`${l?"down":"up"}`,src:O("svg/arrow.svg")})})]}),l&&t.jsx(Bi,{ref:o,bg:a.default.secondaryBg,border:`1px solid ${a.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 20px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(rn,{dropdownValues:h})})]})},Ai=s.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  justify-content: flex-start;
  flex: 1;
  flex-direction: row;
  align-items: center;
  display: flex;
`,Bi=s(F)`
  background: ${e=>e.theme.default.secondaryBg};
  border: 1px solid;
  border-color: ${e=>e.theme.snackbarBorderColor};
  border-radius: 24px;
  align-items: flex-start;
  padding: 7px 20px 7px 14px;
  position: absoltue;
  top: 0rem;
  z-index: 10;
  right: -0.5rem;

  @media (max-width: 768px) {
    right: 0px;
  }
`,_i=s.span`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${e=>e.theme.faucetBorder};
  font-size: 15px;
  background: ${e=>e.theme.faucetBg};
  color: ${e=>e.theme.faucetText};
  border-radius: 20px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  @media (max-width: 768px) {
    border-radius: 37px;
    height: 45px;
    padding: 2px 10px;
  }
  .text {
    display: flex;
    color: ${e=>e.theme.faucetText};
    @media (max-width: 600px) {
      display: none;
    }
  }
`,$i=s.div`
  margin-left: 1rem;
  filter: ${e=>e.theme.faucetFilter};

  @media (max-width: 600px) {
    margin-left: 0rem;
  }

  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`,Di=()=>{const e=ee(),r=p.useRef(null),a=p.useRef(null),[n,o]=ue.useState(!1);on(r,a,()=>{o(!1)});const l=[{id:"11155111",value:"Sepolia",title:"Sepolia Faucet",function:()=>{},link:"https://sepoliafaucet.com/"},{id:"80002",value:"Polygon",title:"Amoy Faucet",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"97",value:"BNB",title:"BNB Faucet",function:()=>{},link:"https://testnet.bnbchain.org/faucet-smart"},{id:"11155420",value:"Optimism",title:"Optimism Sepolia Faucet",function:()=>{},link:"https://faucet.quicknode.com/optimism/sepolia"},{id:"2442",value:"Polygon zkEVM",title:"Polygon zkEVM Bridge",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"421614",value:"Arbitrum",title:"Arbitrum Testnet Faucet",function:()=>{},link:"https://faucet.quicknode.com/arbitrum/sepolia"},{id:"123",value:"Fuse",title:"Fuse Sparknet Faucet",function:()=>{},link:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},{id:"111557560",value:"Cyber",title:"Cyber Faucet",function:()=>{},link:"https://cyber-testnet.testnets.rollbridge.app/"}];return t.jsxs(Mi,{children:[t.jsxs(Oi,{color:e.viewChannelSearchText,onClick:()=>o(!n),ref:r,children:[t.jsx(Fi,{children:t.jsx(X,{src:O("svg/gasPump.svg"),alt:"faucet",width:"32px",height:"32px"})}),"Testnet Faucets",t.jsx(Li,{children:t.jsx("img",{alt:"arrow",className:`${n?"down":"up"}`,src:O("svg/arrow.svg")})})]}),n&&t.jsx(F,{ref:a,bg:e.default.secondaryBg,border:`1px solid ${e.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 14px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(rn,{dropdownValues:l})})]})},Mi=s.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  min-width: 230px;

  @media (max-width: 768px) {
    width: 100%;
    // padding: 0 0px 0px 0px;
  }
`,Fi=s.div`
  padding: 0 20px 0 0px;
`,Oi=s.div`
  margin: 0px 10px;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${e=>e.theme.faucetBorder};
  font-size: 15px;
  background: ${e=>e.theme.faucetBg};
  color: ${e=>e.theme.faucetText};
  border-radius: 20px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }

  @media (max-width: 768px) {
    border-radius: 37px;
    flex: 1;
    justify-content: flex-start;
  }
`,Li=s.div`
  margin-left: auto;
  filter: ${e=>e.theme.faucetFilter};
  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`,oe=10,Ii=5,Ni=500,Ft=10;function zi({loadTeaser:e,playTeaser:r,minimal:a}){const n=nt(),{userPushSDKInstance:o}=N(x=>x.user),{account:l,chainId:c}=ze(),{channels:h,page:w,ZERO_ADDRESS:d}=N(x=>x.channels),{run:f,stepIndex:b}=N(x=>x.userJourney),[v,S]=p.useState(!1),[B,D]=p.useState(!1),[m,L]=p.useState(""),[E,W]=p.useState(1),[A,I]=p.useState([]),[_,z]=p.useState(!1),[G,re]=p.useState(0),[i,J]=p.useState(c),ae=w*oe;p.useEffect(()=>{S(!h.length),o&&j()},[l,c,o]),p.useEffect(()=>{J(c),o&&j()},[c]);const Q=()=>{if(!(v||B)){if(D(!0),m&&o){Ye();return}n(an()),De(w+1)}},j=async()=>{try{let x={page:Math.ceil(ae/oe)||1,limit:oe};if(!h.length){const y=await o.channel.list({options:x});n(an()),n(sn(y==null?void 0:y.channels))}f&&b===3&&(n(ln()),n(ln())),S(!1)}catch(x){console.error(x)}},De=async x=>{const y=x*oe;try{const $=await o.channel.list({page:Math.ceil(y/oe)||1,limit:oe});n(sn([...h,...$==null?void 0:$.channels])),D(!1)}catch($){console.error($)}},Ye=async()=>{try{const x=await o.channel.search(m,{limit:Ft,page:E});x&&x.length>0&&(I([...A,...x]),W(y=>y+1)),D(!1)}catch(x){console.error(x)}},we=x=>m?Number(x)===A.length-1:Number(x)===h.length-1;p.useEffect(()=>{h.length&&I(h)},[h]);async function se(){if(o&&!_)if(m){z(!0),I([]);try{const x=await o.channel.search(m,{limit:Ft,page:E});I(x||[]),x&&x.length>0&&W(y=>y+1),z(!1)}catch(x){console.error(x),G<Ii?(re(y=>y+1),se()):(I(h),L(""),z(!1))}}else z(!1),L(""),I(h)}return p.useEffect(()=>{const x=setTimeout(se,Ni);return()=>{clearTimeout(x)}},[m]),p.useEffect(()=>{!l||!o||async function(){const x=await o.notification.subscriptions(),y={},$={};x.map(({channel:le,user_settings:ye})=>{y[le]=!0,$[le]=ye?JSON.parse(ye):null}),n(Eo(y)),n(Co($))}()},[l,o]),t.jsxs(Lt,{minimal:a,children:[!v&&!a&&t.jsxs(Ot,{children:[t.jsxs(Pi,{children:[t.jsxs(Pt,{flex:"1",children:[t.jsx(Ri,{type:"text",value:m,onChange:x=>{W(1),L(x.target.value)},className:"input",placeholder:`Search by Name or ${l==null?void 0:l.slice(0,6)}`}),t.jsx(F,{position:"absolute",top:"0",bottom:"0",left:"12px",children:t.jsx(ko,{size:20,style:{color:"#657795"}})})]}),st.isMainnet(c)&&t.jsx(F,{flex:"1",children:t.jsx(Mt,{channelsNetworkId:i,setChannelsNetworkId:J})})]}),t.jsxs(Ui,{children:[P.allowedNetworks.length>1&&!st.isMainnet(c)&&t.jsx(F,{flex:"1",children:t.jsx(Mt,{channelsNetworkId:i,setChannelsNetworkId:J})}),!st.isMainnet(c)&&t.jsx(Di,{})]})]}),t.jsxs(lt,{id:"scroll",minimal:a,children:[t.jsx("div",{children:(m?A:h).map((x,y)=>x&&x.channel!==d&&t.jsxs("div",{children:[t.jsx(Nt,{self:"stretch",children:!To[x.channel]&&x&&(i==P.coreContractChain||i==x.alias_blockchain_id&&!ot[i][x.channel])&&t.jsx(ft,{channelObjectProp:x,loadTeaser:e,playTeaser:r,minimal:a,profileType:Ut.CHANNEL})},x.channel),we(y)&&t.jsx(U,{onEnter:Q})]},x.channel))}),m&&!(A!=null&&A.length)&&!_&&t.jsx(zt,{children:t.jsx(cn,{title:"No channels match your query, please search for another name/address"})}),(B&&h.length||v||_)&&t.jsx(Rt,{children:t.jsx(Y,{type:q.SEAMLESS,spinnerSize:a?24:42})})]})]})}const Ri=s.input`
  width: 100%;
  padding: 13px 40px;
  border: 1px solid;
  border-color: ${e=>e.theme.viewChannelSearchBg};
  background: ${e=>e.theme.viewChannelSearchBg};
  color: ${e=>e.theme.viewChannelSearchText};
  box-sizing: border-box;
  border-radius: 99px;
  text-transform: none;
  font-size: 16px;
  font-weight: 400;

  input[type='reset'] {
    display: none;
  }
  &::placeholder {
    letter-spacing: -0.019em;
    color: #657795;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    border: 1px solid #ec008c;
  }
`,Pi=s.div`
  // width: 100%;
  width: -webkit-fill-available;
  padding: 10px 0px;
  display: flex;
  flex-direction: row important!;
  // justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 10px 4px 10px 10px;
  }
`,Ui=s.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding-right: 10px;
  }
`;s.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;let Ot,Lt,It,Nt,zt,Rt,Pt;Ot=s.div`
  padding: 5px 15px 10px 20px;
  // width: 100%;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px 0px 0px 0px;
  }
`,Lt=s.div`
  display: flex;
  flex: ${e=>e.minimal?0:1};
  flex-direction: column;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-height: 100vh;

  @media (max-width: 768px) {
    display: ${e=>e.minimal?"none":"flex"};
  }
`,It=s.div`
  padding: 20px;
`,Nt=s.div`
  align-self: stretch;
  // position: absolute;
  // top: 70px;
`,zt=s.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Rt=s(It)`
  width: fit-content;
  align-self: center;
`,lt=s(F)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: ${e=>e.minimal?"20px 10px":"0px 20px 10px 20px"};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${e=>e.theme.scrollBg};
    width: 6px;
  }

  @media (max-width: 768px) {
    padding: ${e=>e.minimal?"10px 5px":"0px"};

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
`,Pt=s(F)`
  width: 100%;
  margin-right: 10px;
`;var Ut=(e=>(e.CHANNEL="Channel",e.CHANNEL_PROFILE="Profile",e))(Ut||{});let Wt,Ht;pn=({channelID:e,loadTeaser:r,playTeaser:a})=>(Ao.pageview(at.Channels),t.jsx(Wt,{children:t.jsxs(Ht,{children:[t.jsx(zi,{loadTeaser:r,playTeaser:a,minimal:!!e}),e&&t.jsx(ni,{channelID:e,loadTeaser:r,playTeaser:a,minimal:!1,profileType:"Profile"})]})})),Wt=s.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  background: ${e=>e.theme.default.bg};
  border-top-left-radius: ${T.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${T.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${T.ADJUSTMENTS.MARGIN.BIG_MODULES.DESKTOP};
  height: calc(
    100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${xe.BIG_MODULES.DESKTOP.TOP} -
      ${xe.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${he.laptop} {
    margin: ${T.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${xe.BIG_MODULES.TABLET.TOP} -
        ${xe.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${T.ADJUSTMENTS.RADIUS.LARGE} ${T.ADJUSTMENTS.RADIUS.LARGE}
      ${T.ADJUSTMENTS.RADIUS.LARGE} ${T.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${he.mobileL} {
    margin: ${T.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${xe.BIG_MODULES.MOBILE.TOP} -
        ${xe.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${T.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${T.ADJUSTMENTS.RADIUS.LARGE} ${T.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Ht=s.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`});export{pn as C,lt as S,U as W,Jo as __tla};
