import{b0 as u,bP as ee,aV as l,b4 as t,cW as oe,bf as xo,aZ as $,b7 as F,a_ as ue,bR as he,cX as te,be as Xt,dK as fo,dL as mo,cj as Ie,dM as L,a$ as tt,bF as R,bK as nt,c4 as go,bg as P,bJ as Yt,bL as re,dN as bo,ba as ne,bb as ie,dO as yo,ds as wo,ci as it,dB as vo,dP as So,bU as Re,bV as Te,b5 as xe,bZ as Ee,bE as qt,ca as jo,b$ as Qt,cc as en,dQ as To,b3 as Eo,dR as Co,co as Pe,dS as ot,bG as Ue,dT as rt,ch as ko,di as $o,cl as at,aY as Ce,dq as Ao,dU as Bo,dV as tn,dW as nn,dX as on,dY as rn,dZ as an,d_ as _o,d$ as zo,e0 as Do,e1 as lt,e2 as Mo,aW as A,aX as fe,bi as Fo,__tla as Lo}from"./index-uy2iomRf.js";import{D as ln,__tla as Oo}from"./DisplayNotice-BXjHGSgy.js";import{S as K,__tla as Ho}from"./Skeleton-BttMRE3D.js";import{c as No,__tla as Wo}from"./cloneDeep-ChQUrh8p.js";import{G as sn,__tla as Io}from"./index.esm-C6dq9Dwx.js";import{S as Ro,N as Po,__tla as Uo}from"./RedCircle-DXLgm3Gp.js";import{D as Vo,n as Go,g as Jo,u as Ko,M as Zo,__tla as Xo}from"./ManageNotifSettingDropdown-DY8uvrEg.js";import{I as Yo,R as qo,__tla as Qo}from"./RangeSlider-CwdJdZW5.js";let cn,st,U,er=Promise.all([(()=>{try{return Lo}catch{}})(),(()=>{try{return Oo}catch{}})(),(()=>{try{return Ho}catch{}})(),(()=>{try{return Wo}catch{}})(),(()=>{try{return Io}catch{}})(),(()=>{try{return Uo}catch{}})(),(()=>{try{return Xo}catch{}})(),(()=>{try{return Qo}catch{}})()]).then(async()=>{const pn=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M27 16H5",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),u.createElement("path",{d:"M14 7L5 16L14 25",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Z={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},V={mobileS:`(max-width: ${Z.mobileS})`,mobileM:`(max-width: ${Z.mobileM})`,mobileL:`(max-width: ${Z.mobileL})`,tablet:`(max-width: ${Z.tablet})`,laptop:`(max-width: ${Z.laptop})`,laptopL:`(max-width: ${Z.laptopL})`,desktop:`(max-width: ${Z.desktop})`},dn={initial:"",ms:"mobileS",mm:"mobileM",ml:"mobileL",tb:"tablet",lp:"laptop",ll:"laptopL",dp:"desktop"},Ve=(e,n)=>e==="padding"||e==="margin"?`var(--${n})`:n,un=e=>parseFloat(e.replace("px","")),hn=(e,n)=>e.reduce((r,i)=>r+un(i),0)+"px",xn=e=>{const n=Object.entries(e).filter(([i,o])=>o);if(!n.length)return"";const r=`@media ${V[n[0][0]]} { 
    ${n[0][1]} 
  }`;return n.length===1?r:`${r}`+n.map(([i,o],c)=>{if(c){const s=n[c-1][0],d=`@media (min-width: ${hn([Z[s],"1px"])})`,b=i,p=V!=null&&V[b]?`and ${V==null?void 0:V[b]}`:"";return`${d} ${p} { ${o} }`}else return""}).join(";")},fn=e=>{let n="";const r={mobileS:"",mobileM:"",mobileL:"",tablet:"",laptop:"",laptopL:"",desktop:""};return e.forEach(({prop:i,propName:o})=>{typeof i=="object"?Object.entries(i).forEach(([c,s])=>{const d=dn[c];d?r[d]+=`${o}: ${Ve(o,s)};`:n+=`${o}: ${Ve(o,s)};`}):i&&(n+=`${o}: ${Ve(o,i)};`)}),ee`
    ${n}
    ${xn(r)}
  `},mn=e=>[{propName:"align-items",prop:e.alignItems},{propName:"display",prop:e.display},{propName:"flex-direction",prop:e.direction},{propName:"height",prop:e.height},{propName:"justify-content",prop:e.justifyContent},{propName:"margin",prop:e.m},{propName:"max-height",prop:e.maxH},{propName:"min-height",prop:e.minH},{propName:"max-width",prop:e.maxW},{propName:"min-width",prop:e.minW},{propName:"padding",prop:e.p},{propName:"width",prop:e.width}],gn=e=>{const n=mn(e);return fn(n)},bn=["border","borderRadius","bg","color","cursor","position","shadow","alignItems","display","direction","height","justifyContent","m","maxH","minH","maxW","minW","p","width"],yn=l.div.withConfig({shouldForwardProp:(e,n)=>!bn.includes(e)&&n(e)})`
  /* Responsive props */
  ${e=>gn(e)}

  /* Non-responsive props */
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
  box-shadow: ${e=>e.shadow};
  border-radius: ${e=>e.borderRadius};
  cursor: ${e=>e.cursor};
  border: ${e=>e.border};
  position: ${e=>e.position};

  /* Extra CSS prop */
  ${e=>e.css||""}
`,wn=u.forwardRef(({as:e="div",...n},r)=>t.jsx(yn,{as:e,ref:r,...n}));wn.displayName="Box";const ke={"dl-bold":{fontSize:"72px",fontStyle:null,fontWeight:"700",lineHeight:"92.16px",letterSpacing:"-1.5px",textTransform:null},"dl-semibold":{fontSize:"72px",fontStyle:null,fontWeight:"500",lineHeight:"92.16px",letterSpacing:"-1.5px",textTransform:null},"dl-regular":{fontSize:"72px",fontStyle:null,fontWeight:"400",lineHeight:"92.16px",letterSpacing:"-1.5px",textTransform:null},"ds-bold":{fontSize:"58px",fontStyle:null,fontWeight:"700",lineHeight:"74.24px",letterSpacing:"-0.5px",textTransform:null},"ds-semibold":{fontSize:"58px",fontStyle:null,fontWeight:"500",lineHeight:"74.24px",letterSpacing:"-0.5px",textTransform:null},"ds-regular":{fontSize:"58px",fontStyle:null,fontWeight:"400",lineHeight:"74.24px",letterSpacing:"-0.5px",textTransform:null},"h1-bold":{fontSize:"48px",fontStyle:null,fontWeight:"700",lineHeight:"62px",letterSpacing:null,textTransform:null},"h2-bold":{fontSize:"34px",fontStyle:null,fontWeight:"700",lineHeight:"48px",letterSpacing:null,textTransform:null},"h3-bold":{fontSize:"26px",fontStyle:null,fontWeight:"700",lineHeight:"36px",letterSpacing:null,textTransform:null},"h4-bold":{fontSize:"20px",fontStyle:null,fontWeight:"700",lineHeight:"30px",letterSpacing:null,textTransform:null},"h5-bold":{fontSize:"16px",fontStyle:null,fontWeight:"700",lineHeight:"23px",letterSpacing:null,textTransform:null},"h6-bold":{fontSize:"14px",fontStyle:null,fontWeight:"700",lineHeight:"21px",letterSpacing:null,textTransform:null},"h1-semibold":{fontSize:"48px",fontStyle:null,fontWeight:"500",lineHeight:"62px",letterSpacing:null,textTransform:null},"h2-semibold":{fontSize:"34px",fontStyle:null,fontWeight:"500",lineHeight:"48px",letterSpacing:null,textTransform:null},"h3-semibold":{fontSize:"26px",fontStyle:null,fontWeight:"500",lineHeight:"36px",letterSpacing:null,textTransform:null},"h4-semibold":{fontSize:"20px",fontStyle:null,fontWeight:"500",lineHeight:"30px",letterSpacing:null,textTransform:null},"h5-semibold":{fontSize:"16px",fontStyle:null,fontWeight:"500",lineHeight:"23px",letterSpacing:null,textTransform:null},"h6-semibold":{fontSize:"14px",fontStyle:null,fontWeight:"500",lineHeight:"21px",letterSpacing:null,textTransform:null},"h1-regular":{fontSize:"48px",fontStyle:null,fontWeight:"400",lineHeight:"62px",letterSpacing:null,textTransform:null},"h2-regular":{fontSize:"34px",fontStyle:null,fontWeight:"400",lineHeight:"48px",letterSpacing:null,textTransform:null},"h3-regular":{fontSize:"26px",fontStyle:null,fontWeight:"400",lineHeight:"36px",letterSpacing:null,textTransform:null},"h4-regular":{fontSize:"20px",fontStyle:null,fontWeight:"400",lineHeight:"30px",letterSpacing:null,textTransform:null},"h5-regular":{fontSize:"16px",fontStyle:null,fontWeight:"400",lineHeight:"23px",letterSpacing:null,textTransform:null},"h6-regular":{fontSize:"14px",fontStyle:null,fontWeight:"400",lineHeight:"21px",letterSpacing:null,textTransform:null},"bl-bold":{fontSize:"18px",fontStyle:null,fontWeight:"700",lineHeight:"27px",letterSpacing:"0.5px",textTransform:null},"bl-semibold":{fontSize:"18px",fontStyle:null,fontWeight:"500",lineHeight:"27px",letterSpacing:null,textTransform:null},"bl-regular":{fontSize:"18px",fontStyle:null,fontWeight:"400",lineHeight:"27px",letterSpacing:null,textTransform:null},"bl-bold-italic":{fontSize:"18px",fontStyle:"italic",fontWeight:"400",lineHeight:"27px",letterSpacing:null,textTransform:null},"bm-bold":{fontSize:"16px",fontStyle:null,fontWeight:"700",lineHeight:"22px",letterSpacing:null,textTransform:null},"bm-semibold":{fontSize:"16px",fontStyle:null,fontWeight:"500",lineHeight:"22px",letterSpacing:null,textTransform:null},"bm-regular":{fontSize:"16px",fontStyle:null,fontWeight:"400",lineHeight:"22px",letterSpacing:null,textTransform:null},"bm-regular-italic":{fontSize:"16px",fontStyle:"italic",fontWeight:"400",lineHeight:"22px",letterSpacing:null,textTransform:null},"bs-bold":{fontSize:"14px",fontStyle:null,fontWeight:"700",lineHeight:"20px",letterSpacing:null,textTransform:null},"bs-semibold":{fontSize:"14px",fontStyle:null,fontWeight:"500",lineHeight:"20px",letterSpacing:null,textTransform:null},"bs-regular":{fontSize:"14px",fontStyle:null,fontWeight:"400",lineHeight:"20px",letterSpacing:null,textTransform:null},"bs-regular-italic":{fontSize:"14px",fontStyle:"italic",fontWeight:"400",lineHeight:"20px",letterSpacing:null,textTransform:null},"bes-bold":{fontSize:"12px",fontStyle:null,fontWeight:"700",lineHeight:"18px",letterSpacing:null,textTransform:null},"bes-semibold":{fontSize:"12px",fontStyle:null,fontWeight:"500",lineHeight:"18px",letterSpacing:null,textTransform:null},"bes-regular":{fontSize:"12px",fontStyle:null,fontWeight:"400",lineHeight:"18px",letterSpacing:null,textTransform:null},"bes-regular-italic":{fontSize:"12px",fontStyle:"italic",fontWeight:"400",lineHeight:"18px",letterSpacing:null,textTransform:null},"ol-bold":{fontSize:"12px",fontStyle:null,fontWeight:"700",lineHeight:"16px",letterSpacing:null,textTransform:"uppercase"},"ol-regular":{fontSize:"12px",fontStyle:null,fontWeight:"500",lineHeight:"16px",letterSpacing:null,textTransform:"uppercase"},"os-bold":{fontSize:"10px",fontStyle:null,fontWeight:"700",lineHeight:"14px",letterSpacing:null,textTransform:"uppercase"},"os-regular":{fontSize:"10px",fontStyle:null,fontWeight:"500",lineHeight:"14px",letterSpacing:null,textTransform:"uppercase"},"c-bold":{fontSize:"12px",fontStyle:null,fontWeight:"700",lineHeight:"16px",letterSpacing:null,textTransform:null},"c-regular":{fontSize:"12px",fontStyle:null,fontWeight:"400",lineHeight:"16px",letterSpacing:null,textTransform:null}},vn=e=>{if(e){const n=ke[e];return ee`
      font-size: ${n.fontSize};
      ${n.fontStyle?`font-style: ${n.fontStyle};`:""}
      font-weight: ${n.fontWeight};
      line-height: ${n.lineHeight};
      ${n.letterSpacing?`letter-spacing: ${n.letterSpacing};`:""}
      ${n.textTransform?`text-transform: ${n.textTransform};`:""}
    `}return ee`
    font-size: ${ke["bes-regular"].fontSize};
    line-height: ${ke["bes-regular"].lineHeight};
    font-weight: ${ke["bes-regular"].fontWeight};
  `},Sn=l.p`
  /* Variant CSS */
  ${({variant:e})=>vn(e)}

  color: ${({color:e})=>e};
  font-family: 'Strawford', 'Source Sans Pro', Helvetica, sans-serif;
  margin: 0px;
  text-align: ${({align:e})=>e};
  text-transform: ${({transform:e})=>e};

  /* Ellipsis for single line overflow */
  ${({ellipsis:e})=>e&&`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}

  /* Text wrapping */
  ${({wrap:e})=>e&&`
    white-space: normal;
    word-wrap: break-word;
  `}

  /* Limit number of lines */
  ${({numberOfLines:e})=>e&&`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Full width of parent container */
  width: ${({fullWidth:e})=>e?"100%":"auto"};

  /* Extra CSS props */
  ${e=>e.css||""}
`,jn=u.forwardRef(({as:e="p",...n},r)=>t.jsx(Sn,{as:e,ref:r,...n}));jn.displayName="Text";function Ge({externalIcon:e=null,internalIcon:n=null,text:r,bgColor:i,onClick:o=()=>{},onMouseEnter:c=()=>{},onMouseLeave:s=()=>{},padding:d,color:b}){return t.jsx(Tn,{bg:i,margin:"0 8px",radius:"25px",maxWidth:"fit-content",onMouseEnter:c,onMouseLeave:s,padding:d,children:t.jsx(En,{hoverBG:"transparent",onClick:o,children:t.jsxs($,{color:b,children:[e&&t.jsx(oe,{children:e}),n&&t.jsx(Cn,{children:n}),t.jsx(oe,{children:r})]})})})}const Tn=l(oe)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`,En=l(xo)`
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
`,Cn=l($)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`,me={ens:{maintainer:"0x983110309620D911731Ac0932219af06091b6744",userjourneyyoutube:"https://www.youtube.com/embed/AmalyHBJ5Gw?controls=0&autoplay=1",userjourneyshort:"ens",article:"https://medium.com/ethereum-push-notification-service/epns-to-add-push-notifications-to-ens-decentralized-domain-name-services-a20f001a7234"},coindesk:{maintainer:"0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",userjourneyyoutube:"https://www.youtube.com/embed/z_RZgoYNH_Y?controls=0&autoplay=1",userjourneyshort:"coindesk",article:"https://medium.com/ethereum-push-notification-service/epns-and-coindesk-announce-media-push-notifications-1707b12884d"},snapshot:{maintainer:"0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c",userjourneyyoutube:"https://www.youtube.com/embed/AYy42D5oG20?controls=0&autoplay=1",userjourneyshort:"snapshot",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-snapshot-to-deliver-notifications-to-improve-community-governance-5730559cb84b"},makerdao:{maintainer:"0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",userjourneyyoutube:"https://www.youtube.com/embed/OxZ5H2vRnRc?controls=0&autoplay=1",userjourneyshort:"makerdao",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-makerdao-development-and-ux-core-unit-to-enable-push-notifications-for-protocol-53f777957d26"},cvi:{maintainer:"0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8",userjourneyyoutube:"https://www.youtube.com/embed/r_wXWfEWSM0?controls=0&autoplay=1",userjourneyshort:"cvi",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-cvi-crypto-volatility-index-to-enable-push-notifications-for-their-5ea662ee73a3"},bancor:{maintainer:"0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",userjourneyyoutube:"https://www.youtube.com/embed/SmoOX2JXx_4?controls=0&autoplay=1",userjourneyshort:"bancor",article:"https://medium.com/ethereum-push-notification-service/epns-integrates-with-bancor-network-to-facilitate-decentralized-push-notifications-d35b5e27d4a9"},oasisapp:{maintainer:"0x12b3eE60Df8ea26D03b8035Ec90434a38A82C4C7",userjourneyyoutube:"https://www.youtube.com/embed/7PPc6a3XUo4?controls=0&autoplay=1",userjourneyshort:"oasisapp",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-arrive-at-defi-on-oasis-app-770ae7ed1b"},mover:{maintainer:"0xb754601d2C8C1389E6633b1449B84CcE57788566",userjourneyyoutube:"https://www.youtube.com/embed/TX1acRPGovA?controls=0&autoplay=1",userjourneyshort:"mover",article:"https://medium.com/ethereum-push-notification-service/mover-integrates-with-epns-to-deliver-yield-harvesting-notifications-ab3bc9a6b26e"},poh:{maintainer:"0x327a29fcE0a6490E4236240Be176dAA282EcCfdF",userjourneyyoutube:"https://www.youtube.com/embed/_Urc35obsOQ?controls=0&autoplay=1",userjourneyshort:"poh",article:"https://medium.com/ethereum-push-notification-service/epns-joins-proof-of-humanity-to-enhance-the-user-experience-of-decentralized-self-sovereign-e734780c9840"},kyber:{maintainer:"0x91c9D4373B077eF8082F468C7c97f2c499e36F5b",userjourneyyoutube:"https://www.youtube.com/embed/EpTYdJMQxoU?controls=0&autoplay=1",userjourneyshort:"kyber",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-to-support-kybers-frictionless-liquidity-pools-4fe65746b39"},fabwelt:{maintainer:"0x361Cb6BE977d0113A33914A8f952Ced95747F793",userjourneyyoutube:"https://www.youtube.com/embed/kLyZ0DT?controls=0&autoplay=1",userjourneyshort:"fabwelt",article:"https://medium.com/ethereum-push-notification-service/fabwelt-partners-with-epns-to-bring-push-notifications-to-crypto-gaming-c247e70bb627"},banklessfr:{maintainer:"0xA8aF754379d8ae406dFbDD0D6c46324aD647243E",userjourneyyoutube:"https://www.youtube.com/embed/1mnLTslK_sY?controls=0&autoplay=1",userjourneyshort:"banklessfr",article:null},angle:{maintainer:"0xA2dEe32662F6243dA539bf6A8613F9A9e39843D3",userjourneyyoutube:null,userjourneyshort:"angle",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-angle-protocol-to-facilitate-push-notifications-for-users-af77cf4d3e2b"},mstable:{maintainer:"0xC30CE8F08BD8F667E65185310807Db937A5d6E53",userjourneyyoutube:null,userjourneyshort:"mstable",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-mstable-to-facilitate-decentralized-notifications-for-users-a3e6be14eecc"},aragon:{maintainer:"0x187a34c86aA6378333cE9033Aa34718D2CEdEd2C",userjourneyyoutube:"https://www.youtube.com/embed/PT90Zyi9A0g?controls=0&autoplay=1",userjourneyshort:"aragon",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-aragon-voice-to-power-unstoppable-decentralized-governance-56182b9d9aa0"},cryptomanga:{maintainer:"0x0B430A1651E6A64510afC97195040359941d0b23",userjourneyyoutube:null,userjourneyshort:"cryptomanga",article:"https://medium.com/ethereum-push-notification-service/epns-x-cryptomanga-decentralized-communication-for-decentralized-gaming-d296956afdeb"},dydx:{maintainer:"0x23c6b8fB0557FD5e6696BceF3fD4855E0d7018C0",userjourneyyoutube:"https://www.youtube.com/embed/oXgNlebVUAo?controls=0&autoplay=1",userjourneyshort:"dydx",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-dydx-foundation-to-enable-notifications-for-governance-updates-5794a5e22c4d"},idle:{maintainer:"0xFb3bD022D5DAcF95eE28a6B07825D4Ff9C5b3814",userjourneyyoutube:"https://www.youtube.com/embed/08bBRIzRcok?controls=0&autoplay=1",userjourneyshort:"idle",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-idle-to-enable-push-notifications-for-governance-updates-32e142ed2f33"},tracerdao:{maintainer:"0x8bf25240402C126bb236d26D391b782c5c893D32",userjourneyyoutube:"https://www.youtube.com/embed/Pw5zjKmQLFg?controls=0&autoplay=1",userjourneyshort:"tracerdao",article:"https://medium.com/ethereum-push-notification-service/epns-brings-push-notifs-to-tracer-dao-governance-91f7b9a9ddcc"},armor:{maintainer:"0x5aFeDeF166bd626B3043cb1D53e16EA9BF863E06",userjourneyyoutube:"https://www.youtube.com/embed/AMW9Xf0Rc2Y?controls=0&autoplay=1",userjourneyshort:"armor",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-armor-to-enable-push-notifications-for-its-users-daa70b4f172d"},pods:{maintainer:"0xb4F88Ad000A53638F203dcA2C39828a58057d53c",userjourneyyoutube:"https://www.youtube.com/embed/Ink21CE_RzM?controls=0&autoplay=1",userjourneyshort:"pods",article:"https://medium.com/ethereum-push-notification-service/epns-inks-partnership-with-options-protocol-pods-finance-e5adcd2d5821"},ooki:{maintainer:"0x9B43a385E08EE3e4b402D4312dABD11296d09E93",userjourneyyoutube:"https://www.youtube.com/embed/vGu--SUV4l4?controls=0&autoplay=1",userjourneyshort:"ooki",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-bzx-to-deliver-crucial-margin-trading-push-notifications-to-wallets-a2f52e4fcefe"},pushgov:{maintainer:"0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08",userjourneyyoutube:"https://www.youtube.com/embed/vvDlJttgQgQ?controls=0&autoplay=1",userjourneyshort:"pushgov",article:"https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4"},symphony:{maintainer:"0xd32908F63713F514aDDBE3962A2dE7112fdCD4A7",userjourneyyoutube:"https://www.youtube.com/embed/FtadeuLSPmE?controls=0&autoplay=1",userjourneyshort:"symphony",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-symphony-finance-to-facilitate-push-notifications-for-limit-order-c6f27bf8e02a"},ethtracker:{maintainer:"0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethtracker",article:null},ethpricetracker:{maintainer:"0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethpricetracker",article:null},btctracker:{maintainer:"0x03EAAAa48ea78d1E66eA3458364d553AD981871E",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"btctracker",article:null},aave:{maintainer:"0xAA940b3501176af328423d975C350d0d1BaAae50",userjourneyyoutube:"https://www.youtube.com/embed/YKflQ8eADFg?controls=0&autoplay=1",userjourneyshort:"aave",article:"https://medium.com/ethereum-push-notification-service/epns-x-aave-protection-against-asset-liquidation-f33be395ef87"},gro:{maintainer:"0x3c1F2E6Ec3De7811E2daa2B8E132CdCd8e39851c",userjourneyyoutube:null,userjourneyshort:"gro",article:"https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-4371ef89bc91"},flipside:{maintainer:"0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F",userjourneyyoutube:null,userjourneyshort:"flipside",article:"https://medium.com/ethereum-push-notification-service/epns-and-flipside-crypto-join-forces-to-facilitate-push-notifications-for-users-58df98b7aba7"},thedefiant:{maintainer:"0x46b676303ebC5699BF47e416677A57A89c70a015",userjourneyyoutube:null,userjourneyshort:"thedefiant",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-the-defiant-to-bring-defi-news-directly-to-users-wallets-8b4896d674bb"}},kn=e=>{let n=!1;return Object.entries(me).forEach(([r,i])=>{if(me[r].maintainer===e){n=!0;return}}),n},$n=({addr:e,bgColor:n,loadTeaser:r,playTeaser:i})=>{const o=ue(),[c,s]=he.useState(!1),d=(b=>{let p=null;return Object.entries(me).forEach(([f,m])=>{if(me[f].maintainer===b){p=me[f];return}}),p})(e);return t.jsxs(F,{flex:"initial",onMouseEnter:()=>{s(!0),console.debug("enter")},onMouseLeave:()=>{s(!1),console.debug("exit")},zIndex:"9",children:[c&&t.jsx(F,{position:"absolute",width:"280px",bottom:"0px",padding:"0px 0px 40px 0px",children:t.jsxs(An,{bg:o.backgroundBG,padding:"10px",border:`1px solid ${o.borderBg}`,children:[d.userjourneyshort&&t.jsxs(F,{children:[t.jsx($,{bg:o.viewChannelTutsTitleBg,color:"#fff",padding:"4px 10px",margin:"0px 0px 10px 0px",self:"flex-end",spacing:"0.1em",textTransform:"uppercase",size:"bold",children:"Opt-in to enable"}),t.jsx(te,{src:`./tuts/${d.userjourneyshort}/${d.userjourneyshort}_${o.scheme}.png`,srcSet:`./tuts/${d.userjourneyshort}/${d.userjourneyshort}_${o.scheme}@2x.png 2x, ./tuts/${d.userjourneyshort}/${d.userjourneyshort}_${o.scheme}@3x.png 3x`,alt:`${d.alt}`})]}),t.jsxs(oe,{padding:"10px 0px 0px 0px",justify:"space-between",self:"stretch",children:[d.userjourneyyoutube&&t.jsxs(Xt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{s(!1),r(d.userjourneyyoutube),i(!0)},children:[t.jsx($,{margin:"0px 5px 0px 0px",weight:"bold",color:"#fff",children:"User Journey"}),t.jsx(fo,{size:"20px"})]}),d.article&&t.jsx(Xt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{s(!1),window.open(`${d.article}`,"_blank")},children:t.jsx(mo,{size:"20px"})})]})]})}),t.jsx(Ge,{internalIcon:t.jsx(Ie,{filter:o.snackbarBorderIcon,width:"fit-content",src:L("svg/view-tutorial-icon.svg")}),text:"Tutorial",bgColor:n,color:o.viewChannelPrimaryText,padding:"6px 16px"})]})},An=l(F)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`,ct="data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.25%2011.25H8.75V6.75H7.25V11.25ZM8%205.25C8.2125%205.25%208.39075%205.178%208.53475%205.034C8.67825%204.8905%208.75%204.7125%208.75%204.5C8.75%204.2875%208.67825%204.10925%208.53475%203.96525C8.39075%203.82175%208.2125%203.75%208%203.75C7.7875%203.75%207.6095%203.82175%207.466%203.96525C7.322%204.10925%207.25%204.2875%207.25%204.5C7.25%204.7125%207.322%204.8905%207.466%205.034C7.6095%205.178%207.7875%205.25%208%205.25ZM8%2015C6.9625%2015%205.9875%2014.803%205.075%2014.409C4.1625%2014.0155%203.36875%2013.4813%202.69375%2012.8063C2.01875%2012.1313%201.4845%2011.3375%201.091%2010.425C0.697%209.5125%200.5%208.5375%200.5%207.5C0.5%206.4625%200.697%205.4875%201.091%204.575C1.4845%203.6625%202.01875%202.86875%202.69375%202.19375C3.36875%201.51875%204.1625%200.98425%205.075%200.59025C5.9875%200.19675%206.9625%200%208%200C9.0375%200%2010.0125%200.19675%2010.925%200.59025C11.8375%200.98425%2012.6313%201.51875%2013.3063%202.19375C13.9813%202.86875%2014.5155%203.6625%2014.909%204.575C15.303%205.4875%2015.5%206.4625%2015.5%207.5C15.5%208.5375%2015.303%209.5125%2014.909%2010.425C14.5155%2011.3375%2013.9813%2012.1313%2013.3063%2012.8063C12.6313%2013.4813%2011.8375%2014.0155%2010.925%2014.409C10.0125%2014.803%209.0375%2015%208%2015Z'%20fill='%23BAC4D6'/%3e%3c/svg%3e",Bn=({settings:e,optInHandler:n})=>{const[r,i]=u.useState([...e]),[o,c]=u.useState(!1),s=ue(),d=(p,f)=>{const m=[...r];m[p].default=f,i(m)},b=p=>{const f=[...r];if(f[p].type===1){const m=f[p];m.default=!m.default}else{const m=f[p];m.enabled=!m.enabled}i(f)};return t.jsxs(zn,{children:[r.map((p,f)=>t.jsxs(Dn,{hasBottomBorder:f!==e.length-1,children:[t.jsxs(Mn,{children:[t.jsx(re,{color:s.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:p.description}),t.jsx(bo,{onChange:()=>b(f),checked:p.type===1?p.default:p.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),p.type===2&&p.enabled===!0&&t.jsxs(pt,{children:[t.jsx(re,{color:s.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:p.default}),t.jsx(Yo,{val:p.default,max:p.upperLimit,min:p.lowerLimit,step:p.ticker||1,defaultVal:p.default,onChange:({x:m})=>d(f,m)})]}),p.type===3&&p.enabled===!0&&t.jsxs(pt,{children:[t.jsxs(re,{color:s.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[p.default.lower," - ",p.default.upper]}),t.jsx(qo,{startVal:p.default.lower,endVal:p.default.upper,max:p.upperLimit,min:p.lowerLimit,step:p.ticker||1,defaultStartVal:p.default.lower,defaultEndVal:p.default.upper,onChange:({startVal:m,endVal:v})=>d(f,{lower:m,upper:v})})]})]},f)),t.jsxs(Fn,{children:[t.jsx(re,{color:s.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(Ln,{onClick:()=>n({channelSettings:r,setLoading:c}),children:[o&&t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&t.jsx(On,{hideIt:o,children:"Opt-in"})]})]})]})},_n=e=>{const{children:n,channelDetail:r,setLoading:i,onSuccessOptin:o}=e,{chainId:c,provider:s,account:d,wallet:b}=tt();R(B=>B.user);const[p,f]=u.useState(!1),m=nt(),{handleConnectWallet:v,connectWallet:j}=u.useContext(go),_=c===P.coreContractChain,z=u.useMemo(()=>r&&(r!=null&&r.channel_settings)?JSON.parse(r==null?void 0:r.channel_settings):null,[r]),g=()=>{f(!p)},H=()=>{f(!1)},C=Yt(),O=async({channelSettings:B,setLoading:k})=>{var a;const X=k||e&&e.setLoading||(()=>{});X(!0);let N=d,Y=s;if(!(((a=b==null?void 0:b.accounts)==null?void 0:a.length)>0)){const S=await j();N=S.accounts[0].address,Y=new yo(S.provider,"any")}try{let S=r.channel;_||(S=r.alias_address),C.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const W=await(Y==null?void 0:Y.getSigner(N)),q=Go({settings:B}),T=Jo(q);await wo.channels.subscribeV2({signer:W,channelAddress:it(S,c),userAddress:it(N,c),settings:T,onSuccess:()=>{m(vo({channelAddress:S,status:!0})),m(So({channelAddress:S,settings:Ko({channelSetting:B})})),C.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:G=>t.jsx(Re,{size:G,color:"green"})})},onError:()=>{console.error("opt in error"),C.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:G=>t.jsx(Te,{size:G,color:"red"})})},env:P.pushNodesEnv})}catch(S){C.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${S.message} )`,toastType:"ERROR",getToastIcon:W=>t.jsx(Te,{size:W,color:"red"})}),console.error(S)}finally{X(!1)}};return z&&z.length?t.jsx(Vo,{centerOnMobile:!0,showDropdown:p,toggleDropdown:g,closeDropdown:H,renderDropdownContainer:t.jsx(Bn,{settings:z,optInHandler:O}),containerPadding:"0px 16px 16px 16px",children:n}):t.jsx(re,{onClick:O,children:n})},zn=l.div`
  min-width: 300px;
`,Dn=l.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&ee`
      border-bottom: 1px solid ${n=>n.theme.settingsModalBorderBottomColor};
    `}
`,Mn=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Fn=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Ln=l.button`
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
  ${e=>e.disabled&&ee`
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
`,pt=l.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,On=l.span`
  ${e=>e.hideIt&&ee`
      visibility: hidden;
    `};
`,dt=({channelName:e,channelDescription:n,channelLogoSrc:r,height:i})=>t.jsxs(Hn,{style:{borderRadius:i<250?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(Nn,{children:"Channel was recently updated"}),t.jsx(Wn,{children:"Previously"}),t.jsxs(In,{children:[t.jsx(Rn,{children:t.jsx(Pn,{src:r})}),t.jsxs(Un,{children:[t.jsx(Vn,{children:e}),t.jsx(Gn,{children:n})]})]})]}),Hn=l(xe)`
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


`,Nn=l(Ee)`
  color: ${e=>e.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Wn=l(Ee)`
  color: ${e=>e.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`,In=l(qt)`
  align-items: center;
  margin-top:8px;
`,Rn=l(qt)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`,Pn=l(Ie)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${e=>`0.5px solid ${e.theme.tooltipIconBorderClr}`};
`,Un=l(xe)`
  align-items: flex-start;
`,Vn=l(Ee)`
  color: ${e=>e.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`,Gn=l(Ee)`
  color: ${e=>e.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`,ut=({verifierIcon:e,verifierName:n,height:r})=>{const i=(n==null?void 0:n.length)>15?n.substring(0,15)+"...":n;return t.jsxs(Jn,{style:{width:212+(i&&i.length*2)+"px",borderRadius:r<160?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(ht,{children:"Verified By:"}),t.jsx(Kn,{src:e}),t.jsx(ht,{children:i})]})},Jn=l(xe)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`,ht=l(Ee)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`,Kn=l.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;function xt({channelObjectProp:e,loadTeaser:n,playTeaser:r,minimal:i,profileType:o}){var Kt,Zt;const c=nt(),s=ue();R(x=>x.userJourney);const{userPushSDKInstance:d}=R(x=>x.user),{epnsReadProvider:b,epnsWriteProvider:p,epnsCommReadProvider:f,pushAdminAddress:m,ZERO_ADDRESS:v}=R(x=>x.contracts),{canVerify:j,channelDetails:_,coreChannelAdmin:z}=R(x=>x.admin),{channelsCache:g,CHANNEL_BLACKLIST:H,CHANNEL_ACTIVE_STATE:C,subscriptionStatus:O,userSettings:B}=R(x=>x.channels),{account:k,provider:X,chainId:N}=tt(),Y=N===P.coreContractChain,[a,S]=u.useState(e),[W,q]=u.useState(!1),[T,G]=u.useState(!1),[qe,ce]=u.useState(0),[we,Me]=u.useState(!1),[h,w]=u.useState(!1),[D,ve]=u.useState(!1),[J,Yi]=u.useState(!1),[qi,tr]=u.useState(!1),[M,Ut]=u.useState(null),[Qi,Qe]=u.useState(a.channel),[Q,eo]=u.useState(0),[Fe,nr]=u.useState({}),[I,to]=u.useState({}),[Vt,no]=u.useState(!1),Le=a.verified_status,io=a.blocked,et=Qt(600),Gt=Qt(500),Se=a.activation_status,je=en(),oo=H.includes(a.channel),[Oe,ro]=u.useState(null),Jt=()=>ro(null);u.useEffect(()=>{q(O[a.channel])},[O]),u.useEffect(()=>{Me(m==k)},[m,k]);const ao=async()=>{try{return await ko.getInstance().getChannelJsonStartBlockAsync(a.channel)}catch(x){console.error(x)}};u.useEffect(()=>{a.channel&&async function(){const x=await ao();x&&to(x)}()},[a.channel]),u.useEffect(()=>{if(Fe&&I){if(Object.keys(Fe).length==0||Object.keys(I).length==0)return;let x=!1;["name","icon","info"].forEach(y=>{Fe[y]!=I[y]&&(x=!0)}),no(x)}},[Fe,I]),u.useEffect(()=>{!a||!a.channel||!d||async function(){var x;if(ce(a.subscriber_count),!a.verified_status)G(!1);else try{let y=null;if(y=(await b.channels(a.channel)).verifiedBy,g[y])Ut(g[y]);else{let E={};To((x=Eo)==null?void 0:x.pushChannelAdmin,y)?E={name:"Push Admin",icon:"./logo192.png"}:E=await d.channel.info(it(y,P.coreContractChain)),c(Co({address:y,meta:E})),Ut(E)}}catch(y){console.error("Error fetching channel information:",y)}finally{G(!1)}}()},[k,a,d]);let pe;Y?pe=a.channel==k:pe=a.alias_address==k,u.useEffect(()=>{Oe&&Jt()},[Oe]),f==null||f.address;const de=Yt(),lo=u.useMemo(()=>No(B),[B]),so=x=>x.length>40?`${$o(x,4,6)}`:x,co=()=>{w(!0),p.verifyChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),de.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:y=>t.jsx(Re,{size:y,color:"green"})}),await x.wait(1),console.info("Transaction Mined!"),setIsVerified(!0)}).catch(x=>{console.error("!!!Error verifyChannel() --> %o",x),de.showMessageToast({toastTitle:"Error",toastMessage:"There was an error verifying the channel",toastType:"ERROR",getToastIcon:y=>t.jsx(Te,{size:y,color:"red"})})}).finally(()=>{w(!1)})},po=()=>{w(!0),p.unverifyChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),de.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:y=>t.jsx(Re,{size:y,color:"green"})}),await x.wait(1),console.info("Transaction Mined!"),setIsVerified(!1)}).catch(x=>{console.error("!!!Error handleSendMessage() --> %o",x),de.showMessageToast({toastTitle:"Error",toastMessage:"There was an error unverifying the channel",toastType:"ERROR",getToastIcon:y=>t.jsx(Te,{size:y,color:"red"})})}),w(!1)},uo=()=>{ve(!0),p.blockChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),de.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:y=>t.jsx(Re,{size:y,color:"green"})}),await x.wait(1),console.info("Transaction Mined!")}).catch(x=>{console.error("!!!Error handleSendMessage() --> %o",x),de.showMessageToast({toastTitle:"Error",toastMessage:"There was an error blocking the channel",toastType:"ERROR",getToastIcon:y=>t.jsx(Te,{size:y,color:"red"})})}).finally(()=>{ve(!1),setIsBlocked(!0)})},ho=x=>{const y=He(x,!0);if(navigator&&navigator.clipboard)navigator.clipboard.writeText(y);else{const E=document.createElement("textarea");E.value=y,document.body.appendChild(E),E.select(),document.execCommand("copy"),document.body.removeChild(E)}},He=(x,y)=>{let E=`${at.Channels}/${x}`;if(y){let We=window.location.hostname;We==="localhost"&&(We=We+":3000"),E=`${We}${E}`}return E};if(io)return t.jsx(t.Fragment,{});if(oo)return t.jsx(t.Fragment,{});const Ne=x=>{var E;const y=(E=document.getElementById(a==null?void 0:a.channel))==null?void 0:E.getBoundingClientRect();eo(y==null?void 0:y.top)};return t.jsxs(Xn,{id:a.channel,minimal:i,border:o=="Profile"?"none":`1px solid ${i?"transparent":s.default.border}`,children:[et&&t.jsxs(Yn,{children:[t.jsx(bt,{minimal:i,children:t.jsx(gt,{children:t.jsx(mt,{minimal:i,children:T?t.jsx(K,{color:s.interfaceSkeleton,height:"100%"}):t.jsx(ft,{src:`${a.iconV2?a.iconV2:a.icon}`})})})}),!i&&t.jsx(wt,{children:T?t.jsx(K,{color:s.interfaceSkeleton,width:"50%",height:24}):t.jsx(vt,{children:t.jsxs(Qn,{children:[t.jsxs($,{children:[Vt&&t.jsx(Pe,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Q<250?{background:"none",top:"20px",left:Gt?"-100px":"5px"}:{background:"none",bottom:"25px",left:Gt?"-100px":"5px"},tooltipContent:t.jsx(dt,{height:Q,channelName:I.name,channelDescription:I.info,channelLogoSrc:I.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ne(a.channel)},children:t.jsx(yt,{src:ct})})}),t.jsx($,{onClick:()=>{je(He(a.channel,!1))},children:a.name})]}),Le==1&&t.jsxs($,{margin:"3px 5px 0px",style:{display:"flex"},children:[t.jsx(Pe,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Q<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(ut,{height:Q,verifierIcon:M==null?void 0:M.icon,verifierName:M==null?void 0:M.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ne(a.channel)},children:t.jsx(sn,{size:18,color:s.viewChannelVerifiedBadge})})}),a&&(a==null?void 0:a.channel)&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(te,{src:L("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),a&&(a==null?void 0:a.alias_address)!=null&&(a==null?void 0:a.alias_address)!="NULL"&&P.allowedNetworks.includes(+(a==null?void 0:a.alias_blockchain_id))&&!ot[+(a==null?void 0:a.alias_blockchain_id)][a==null?void 0:a.channel]&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(te,{src:L(`svg/${(Zt=(Kt=Ue[+a.alias_blockchain_id])==null?void 0:Kt.label)==null?void 0:Zt.split(" ")[0]}.svg`),alt:"Polygon",width:"20px",height:"20px"})})]})]})})})]}),!et&&t.jsx(t.Fragment,{children:t.jsx(bt,{minimal:i,onClick:()=>{je(He(a.channel,!1))},children:t.jsx(gt,{children:t.jsx(mt,{children:T?t.jsx(K,{color:s.interfaceSkeleton,height:"100%"}):t.jsx(ft,{src:`${a.iconV2?a.iconV2:a.icon}`})})})})}),!i&&t.jsxs(qn,{children:[!et&&t.jsx(wt,{children:T?t.jsx(K,{color:s.interfaceSkeleton,width:"50%",height:24}):t.jsx(vt,{children:t.jsxs($,{style:{display:"flex",alignItems:"center"},children:[Vt&&t.jsx(Pe,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Q<250?{background:"none",top:"20px",left:"5px"}:{background:"none",bottom:"25px",left:"5px"},tooltipContent:t.jsx(dt,{height:Q,channelName:I.name,channelDescription:I.info,channelLogoSrc:I.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ne(a.channel)},style:{cursor:"pointer"},children:t.jsx(yt,{src:ct})})}),t.jsx($,{onClick:()=>{je(He(a.channel,!1))},children:a.name}),Le==1&&t.jsx($,{margin:"3px 5px 0px",style:{display:"flex"},children:t.jsx(Pe,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Q<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(ut,{height:Q,verifierIcon:M==null?void 0:M.icon,verifierName:M==null?void 0:M.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ne(a.channel)},children:t.jsx(sn,{size:18,color:s.viewChannelVerifiedBadge})})})}),a&&(a==null?void 0:a.channel)&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(te,{src:L("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),a&&(a==null?void 0:a.alias_address)!=null&&(a==null?void 0:a.alias_address)!="NULL"&&P.allowedNetworks.includes(+(a==null?void 0:a.alias_blockchain_id))&&!ot[+(a==null?void 0:a.alias_blockchain_id)][a==null?void 0:a.channel]&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(te,{src:L(`svg/${rt[+a.alias_blockchain_id]}`),alt:"Alias Chain Logo",width:"20px",height:"20px"})})]})})}),t.jsx(ei,{children:T?t.jsxs(t.Fragment,{children:[t.jsx($e,{atH:5,atW:100,children:t.jsx(K,{color:s.interfaceSkeleton,width:"100%",height:5})}),t.jsx($e,{atH:5,atW:100,children:t.jsx(K,{color:s.interfaceSkeleton,width:"100%",height:5})}),t.jsx($e,{atH:5,atW:100,children:t.jsx(K,{color:s.interfaceSkeleton,width:"40%",height:5})})]}):t.jsx(ti,{children:a.info})}),t.jsx(ni,{children:T?t.jsx(t.Fragment,{children:t.jsx($e,{atH:10,atW:30,marginBottom:"0",children:t.jsx(K,{color:s.interfaceSkeleton})})}):t.jsx(oe,{align:"center",justify:"flex-start",margin:"0px -5px",children:t.jsxs(ii,{children:[t.jsx(Ge,{externalIcon:t.jsx(te,{src:L("svg/users.svg"),alt:"users",width:"14px",height:"14px"}),internalIcon:null,text:qe,padding:"5.3px 10px",bgColor:s.viewChannelSecondaryBG,color:s.viewChannelSecondaryText}),t.jsx(Ge,{text:so(Qi),bgColor:s.viewChannelSearchBg,padding:"6px 16px",color:s.viewChannelPrimaryText,onClick:()=>{ho(a.channel),Qe("copied")},onMouseEnter:()=>{Qe("click to copy")},onMouseLeave:()=>{Qe(a.channel)}}),o==="Profile"&&t.jsxs(si,{active:Se,children:[Se===0&&t.jsx(Ie,{width:"12px",src:Ro,margin:"0 5px 2px 0px",height:"30px"}),Se===1?"Active":"Deactivated"]}),kn(a.channel)&&t.jsx($n,{addr:a.channel,bgColor:s.viewChannelSearchBg,loadTeaser:n,playTeaser:r})]})})})]}),!!k&&!!X&&!i&&t.jsxs(t.Fragment,{children:[t.jsx(oi,{}),t.jsxs(ri,{children:[T&&t.jsx(ai,{children:t.jsx(K,{color:s.interfaceSkeleton})}),!T&&we&&o=="Channel"&&t.jsxs(Je,{onClick:uo,disabled:D,children:[D&&t.jsx(be,{children:t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:D,children:"Block channel"})]}),!T&&(we||j)&&!Le&&o=="Channel"&&t.jsxs(Je,{onClick:co,disabled:h,children:[h&&t.jsx(be,{children:t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:h,children:"Verify Channel"})]}),!T&&(we||qi)&&Le&&o=="Channel"&&t.jsxs(jt,{onClick:po,disabled:h,children:[h&&t.jsx(be,{children:t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:h,children:"Unverify Channel"})]}),!T&&!W&&t.jsxs(t.Fragment,{children:[pe&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(Et,{onClick:()=>je("/dashboard"),children:"Go To Dashboard"}):t.jsx(Tt,{disabled:!0,children:"Owner"})}),!pe&&Se!==0&&t.jsx(_n,{channelDetail:a,setLoading:Yi,onSuccessOptin:()=>{q(!0),ce(x=>x+1)},children:t.jsxs(Je,{onClick:()=>{},disabled:J,className:"optin",children:[J&&t.jsx(be,{children:t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:J,children:"Opt-In"})]})})]}),!T&&W&&Se!==0&&t.jsxs(t.Fragment,{children:[pe&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(Et,{onClick:()=>je("/dashboard"),children:"Go To Dashboard"}):t.jsx(Tt,{disabled:!0,children:"Owner"})}),!pe&&t.jsx(Zo,{centerOnMobile:!0,channelDetail:a,setSubscribed:q,userSetting:lo[a.channel],setSubscriberCount:ce,onSuccessOptout:()=>{q(!1),ce(x=>x-1)},children:t.jsxs(jt,{onClick:()=>{},disabled:J,children:[J&&t.jsx(be,{children:t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:J,children:"Manage"}),t.jsx(Ie,{alt:"arrow",src:L("svg/arrow.svg"),height:"10px",width:"12px"})]})})]})]})]}),Oe&&t.jsx(Po,{notification:Oe,clearToast:Jt})]},a.channel)}const Zn=l.div`
  display: flex;
`;l(Zn)`
  flex-direction: column;
`;const Xn=l.div`
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
`,$e=l.div`
  overflow: hidden;
  width: ${e=>e.atW+"%"||"100%"};
  height: ${e=>e.atH}px;
  border-radius: ${e=>e.borderRadius||10}px;
  margin-bottom: ${e=>e.marginBottom||5}px;
  margin-right: ${e=>e.marginRight||0}px;
`,ft=l.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`,mt=l.div`
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
`,gt=l.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
`,bt=l(jo)`
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
`,Yn=l.div`
  display: flex;
`,yt=l.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,qn=l.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 240px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;

  @media (max-width: 480px) {
    min-width: 210px;
  }
`;l.div`
  word-break: break-word;

  @media (max-width: 768px) {
    text-align: center;
  }
`;const wt=l(oe)`
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
`,vt=l.a`
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
`,Qn=l($)`
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
`;l.span`
  color: #ec008c;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`,l.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 4px;
`,l.span`
  font-weight: 400;
  color: ${e=>e.theme.color};
  font-size: 16px;
  letter-spacing: 0em;
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;const ei=l.div`
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
`,ti=l.label`
  flex: 1;
  line-height: 165%;
  color: ${e=>e.theme.viewChannelPrimaryTextColor};
`,ni=l.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,ii=l.div`
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
`,St=l.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  display: flex;
  border-radius: 10px;
  font-size: 11px;
  gap: 3px;
`;l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${V.laptopL} {
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
`,l(St)`
  background: ${e=>e.theme.viewChannelSecondaryBG};
  transition: 300ms;
`,l.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,l(St)`
  background: #674c9f;
`;const oi=l.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${V.tablet} {
    display: block;
  }
`,ri=l.div`
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
`,Ae=l.button`
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
  ${e=>e.disabled&&ee`
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
`,ge=l.span`
  font-weight: 500;
  font-size: 14px;

  ${e=>e.hideit&&ee`
      visibility: hidden;
    `};
`,be=l.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,ai=l.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Je=l(Ae)`
  background: #e20880;
  color: #fff;
  border-radius: 8px;
  padding: 0px;
  min-height: 36px;
  min-width: 108px;
`,jt=l(Ae)`
  background: transparent;
  color: ${e=>e.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`,Tt=l(Ae)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`,Et=l(Ae)`
  background: #e20880;
  border-radius: 8px;
  padding: 7px 14px;
  min-height: 36px;
  min-width: max-content;
`;l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,l.div`
  margin: 0px 10px;
`;const li=l.div`
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
`,si=l(li)`
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
`,ci=20,pi=({channelID:e,loadTeaser:n,playTeaser:r,minimal:i,profileType:o})=>{const{userPushSDKInstance:c}=R(g=>g.user),s=ue(),[d,b]=u.useState(!0),[p,f]=u.useState(!0),[m,v]=u.useState([]),[j,_]=u.useState(null),z=en();return u.useEffect(()=>{_(null),c&&(b(!0),(async()=>{try{const g=await c.channel.info(e);_(g),b(!1)}catch(g){console.log("Error",g),b(!1)}})())},[e,c]),u.useEffect(()=>(c&&(b(!0),c.channel.notifications(e,{page:1,limit:ci}).then(g=>{console.log(g),v(g.notifications),f(!1)}).catch(g=>{console.error("Error >>>>",g),f(!1)})),()=>{v([]),f(!0)}),[e,c]),t.jsxs(di,{children:[t.jsx(ui,{flex:"initial",alignItems:"flex-start",padding:"0px",children:t.jsx(pn,{onClick:()=>{z(at.Channels)}})}),t.jsxs(t.Fragment,{children:[j&&!d&&t.jsx(xt,{channelObjectProp:j,loadTeaser:n,playTeaser:r,minimal:i,profileType:o}),!d&&t.jsxs(fi,{children:[t.jsx(re,{fontSize:"20px",fontWeight:"500",color:s.color,children:"Recent Notifications"}),t.jsx(mi,{color:s.color,children:"Showing preview of the latest non-encrypted notifications sent by the channel."})]}),t.jsxs(xi,{children:[p&&t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:40}),!m.length&&!p&&t.jsx("div",{style:{textAlign:"center"},children:t.jsx(ln,{title:"You currently have no notifications, try subscribing to some channels."})}),m.map((g,H)=>{const C=g.message.payload;return t.jsx(hi,{children:t.jsx(Ao,{notificationTitle:C.title,notificationBody:C.body,cta:C.cta,image:C.embed,app:g.channel.name,icon:g.channel.icon,url:g.channel.url,chainName:g.source,theme:s.scheme})},`${g.payload_id}`)})]})]})]})},di=l.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  margin: 20px 0px 0px 20px;

  @media ${Ce.tablet} {
    overflow-y: auto;
    margin: 20px 10px 0px 10px;
  }
`,ui=l(xe)`
  @media ${Ce.tablet} {
    position: absolute;
    z-index: 1;
    padding: 10px;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
  }
`,hi=l.div``,xi=l(xe)`
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

  @media ${Ce.tablet} {
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
`,fi=l(xe)`
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  align-items: baseline;
  margin: 7px 20px 24px 5px;
`,mi=l(re)`
  font-size: 0.8em;
`;var gi=!!(typeof window<"u"&&window.document&&window.document.createElement);function bi(){if(!gi||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){function i(){e=!0}return i}()}),r=function(){};window.addEventListener("testPassiveEventSupport",r,n),window.removeEventListener("testPassiveEventSupport",r,n)}catch{}return e}var Ke=void 0;function yi(){return Ke===void 0&&(Ke=bi()),Ke}function wi(e){if(e)return yi()?e:!!e.capture}function vi(e){if(!e)return 0;if(e===!0)return 100;var n=e.capture<<0,r=e.passive<<1,i=e.once<<2;return n+r+i}function Ct(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function Be(e){this.target=e,this.events={}}Be.prototype.getEventHandlers=function(){function e(n,r){var i=String(n)+" "+String(vi(r));return this.events[i]||(this.events[i]={handlers:[],handleEvent:void 0},this.events[i].nextHandlers=this.events[i].handlers),this.events[i]}return e}(),Be.prototype.handleEvent=function(){function e(n,r,i){var o=this.getEventHandlers(n,r);o.handlers=o.nextHandlers,o.handlers.forEach(function(c){c&&c(i)})}return e}(),Be.prototype.add=function(){function e(n,r,i){var o=this,c=this.getEventHandlers(n,i);Ct(c),c.nextHandlers.length===0&&(c.handleEvent=this.handleEvent.bind(this,n,i),this.target.addEventListener(n,c.handleEvent,i)),c.nextHandlers.push(r);var s=!0,d=function(){function b(){if(s){s=!1,Ct(c);var p=c.nextHandlers.indexOf(r);c.nextHandlers.splice(p,1),c.nextHandlers.length===0&&(o.target&&o.target.removeEventListener(n,c.handleEvent,i),c.handleEvent=void 0)}}return b}();return d}return e}();var Ze="__consolidated_events_handlers__";function kt(e,n,r,i){e[Ze]||(e[Ze]=new Be(e));var o=wi(i);return e[Ze].add(n,r,o)}function Si(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ji(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ti(e,n,r){return n&&ji(e.prototype,n),e}function Ei(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&Xe(e,n)}function _e(e){return _e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_e(e)}function Xe(e,n){return Xe=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Xe(e,n)}function Ci(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ki(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $i(e,n){return n&&(typeof n=="object"||typeof n=="function")?n:ki(e)}function Ai(e){var n=Ci();return function(){var r=_e(e),i;if(n){var o=_e(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return $i(this,i)}}function Bi(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function _i(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function $t(e,n){var r=_i(e);if(typeof r=="number")return r;var i=Bi(e);if(typeof i=="number")return i*n}var ze="above",ae="inside",De="below",Ye="invisible";function At(e){return typeof e.type=="string"}var zi=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function Di(e,n){if(e&&!At(e)&&!n)throw new Error(zi)}function Mi(e){return e.viewportBottom-e.viewportTop===0?Ye:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?ae:e.viewportBottom<e.waypointTop?De:e.waypointTop<e.viewportTop?ze:Ye}var le,ye=[];function Bt(e){ye.push(e),le||(le=setTimeout(function(){le=null;for(var r;r=ye.shift();)r()},0));var n=!0;return function(){if(n){n=!1;var r=ye.indexOf(e);r!==-1&&(ye.splice(r,1),!ye.length&&le&&(clearTimeout(le),le=null))}}}function Fi(e){return e==="window"?globalThis.window:e}let _t;_t={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},U=function(e){Ei(r,e);var n=Ai(r);function r(i){var o;return Si(this,r),o=n.call(this,i),o.refElement=function(c){o._ref=c},o}return Ti(r,[{key:"componentDidMount",value:function(){var i=this;r.getWindow()&&(this.cancelOnNextTick=Bt(function(){i.cancelOnNextTick=null;var o=i.props,c=o.children;o.debug,Di(c,i._ref),i._handleScroll=i._handleScroll.bind(i),i.scrollableAncestor=i._findScrollableAncestor(),i.scrollEventListenerUnsubscribe=kt(i.scrollableAncestor,"scroll",i._handleScroll,{passive:!0}),i.resizeEventListenerUnsubscribe=kt(window,"resize",i._handleScroll,{passive:!0}),i._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var i=this;r.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=Bt(function(){i.cancelOnNextTick=null,i._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){r.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var i=this.props,o=i.horizontal,c=i.scrollableAncestor;if(c)return Fi(c);for(var s=this._ref;s.parentNode;){if(s=s.parentNode,s===document.body)return window;var d=window.getComputedStyle(s),b=o?d.getPropertyValue("overflow-x"):d.getPropertyValue("overflow-y"),p=b||d.getPropertyValue("overflow");if(p==="auto"||p==="scroll"||p==="overlay")return s}return window}},{key:"_handleScroll",value:function(i){if(this._ref){var o=this._getBounds(),c=Mi(o),s=this._previousPosition,d=this.props;d.debug;var b=d.onPositionChange,p=d.onEnter,f=d.onLeave,m=d.fireOnRapidScroll;if(this._previousPosition=c,s!==c){var v={currentPosition:c,previousPosition:s,event:i,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};b.call(this,v),c===ae?p.call(this,v):s===ae&&f.call(this,v);var j=s===De&&c===ze,_=s===ze&&c===De;m&&(j||_)&&(p.call(this,{currentPosition:ae,previousPosition:s,event:i,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),f.call(this,{currentPosition:c,previousPosition:ae,event:i,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}}},{key:"_getBounds",value:function(){var i=this.props,o=i.horizontal;i.debug;var c=this._ref.getBoundingClientRect(),s=c.left,d=c.top,b=c.right,p=c.bottom,f=o?s:d,m=o?b:p,v,j;this.scrollableAncestor===window?(v=o?window.innerWidth:window.innerHeight,j=0):(v=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,j=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var _=this.props,z=_.bottomOffset,g=_.topOffset,H=$t(g,v),C=$t(z,v),O=j+v;return{waypointTop:f,waypointBottom:m,viewportTop:j+H,viewportBottom:O-C}}},{key:"render",value:function(){var i=this,o=this.props.children;if(!o)return he.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(At(o)||Bo.isForwardRef(o)){var c=function(s){i.refElement(s),o.ref&&(typeof o.ref=="function"?o.ref(s):o.ref.current=s)};return he.cloneElement(o,{ref:c})}return he.cloneElement(o,{innerRef:this.refElement})}}]),r}(he.PureComponent),U.above=ze,U.below=De,U.inside=ae,U.invisible=Ye,U.getWindow=function(){if(typeof window<"u")return window},U.defaultProps=_t,U.displayName="Waypoint";const zt=({channelsNetworkId:e,setChannelsNetworkId:n})=>{var p;const r=ue(),i=u.useRef(null),o=u.useRef(null),[c,s]=u.useState(!1),[d,b]=u.useState([]);return tn(i,o,()=>{s(!1)}),u.useEffect(()=>{const f=[];P.allowedNetworks.map(m=>{f.push({id:m,value:Ue[m].label,title:Ue[m].label,icon:L(`svg/${rt[m]}`),function:()=>{n(m),s(!1)}})}),b(f)},[P]),t.jsxs(Li,{children:[t.jsxs(Hi,{color:r.viewChannelSearchText,onClick:()=>s(!c),ref:i,children:[t.jsx(oe,{padding:"0 8px 0 0",children:t.jsx(te,{src:L(`svg/${rt[e]}`),alt:"active chain",width:"32px",height:"32px"})}),t.jsx(F,{width:"max-content",className:"text",children:(p=Ue[e])==null?void 0:p.label}),t.jsx(Ni,{children:t.jsx("img",{alt:"arrow",className:`${c?"down":"up"}`,src:L("svg/arrow.svg")})})]}),c&&t.jsx(Oi,{ref:o,bg:r.default.secondaryBg,border:`1px solid ${r.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 20px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(nn,{dropdownValues:d})})]})},Li=l.button`
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
`,Oi=l(F)`
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
`,Hi=l.span`
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
`,Ni=l.div`
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
`,Wi=()=>{const e=ue(),n=u.useRef(null),r=u.useRef(null),[i,o]=he.useState(!1);tn(n,r,()=>{o(!1)});const c=[{id:"11155111",value:"Sepolia",title:"Sepolia Faucet",function:()=>{},link:"https://sepoliafaucet.com/"},{id:"80002",value:"Polygon",title:"Amoy Faucet",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"97",value:"BNB",title:"BNB Faucet",function:()=>{},link:"https://testnet.bnbchain.org/faucet-smart"},{id:"11155420",value:"Optimism",title:"Optimism Sepolia Faucet",function:()=>{},link:"https://faucet.quicknode.com/optimism/sepolia"},{id:"2442",value:"Polygon zkEVM",title:"Polygon zkEVM Bridge",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"421614",value:"Arbitrum",title:"Arbitrum Testnet Faucet",function:()=>{},link:"https://faucet.quicknode.com/arbitrum/sepolia"},{id:"123",value:"Fuse",title:"Fuse Sparknet Faucet",function:()=>{},link:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},{id:"111557560",value:"Cyber",title:"Cyber Faucet",function:()=>{},link:"https://cyber-testnet.testnets.rollbridge.app/"}];return t.jsxs(Ii,{children:[t.jsxs(Pi,{color:e.viewChannelSearchText,onClick:()=>o(!i),ref:n,children:[t.jsx(Ri,{children:t.jsx(te,{src:L("svg/gasPump.svg"),alt:"faucet",width:"32px",height:"32px"})}),"Testnet Faucets",t.jsx(Ui,{children:t.jsx("img",{alt:"arrow",className:`${i?"down":"up"}`,src:L("svg/arrow.svg")})})]}),i&&t.jsx(F,{ref:r,bg:e.default.secondaryBg,border:`1px solid ${e.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 14px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(nn,{dropdownValues:c})})]})},Ii=l.button`
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
`,Ri=l.div`
  padding: 0 20px 0 0px;
`,Pi=l.div`
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
`,Ui=l.div`
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
`,se=10,Vi=5,Gi=500,Dt=10;function Ji({loadTeaser:e,playTeaser:n,minimal:r}){const i=nt(),{userPushSDKInstance:o}=R(h=>h.user),{account:c,chainId:s}=tt(),{channels:d,page:b,ZERO_ADDRESS:p}=R(h=>h.channels),{run:f,stepIndex:m}=R(h=>h.userJourney),[v,j]=u.useState(!1),[_,z]=u.useState(!1),[g,H]=u.useState(""),[C,O]=u.useState(1),[B,k]=u.useState([]),[X,N]=u.useState(!1),[Y,a]=u.useState(0),[S,W]=u.useState(s),q=b*se;u.useEffect(()=>{j(!d.length),o&&G()},[c,s,o]),u.useEffect(()=>{W(s),o&&G()},[s]);const T=()=>{if(!(v||_)){if(z(!0),g&&o){ce();return}i(on()),qe(b+1)}},G=async()=>{try{let h={page:Math.ceil(q/se)||1,limit:se};if(!d.length){const w=await o.channel.list({options:h});i(on()),i(rn(w==null?void 0:w.channels))}f&&m===3&&(i(an()),i(an())),j(!1)}catch(h){console.error(h)}},qe=async h=>{const w=h*se;try{const D=await o.channel.list({page:Math.ceil(w/se)||1,limit:se});i(rn([...d,...D==null?void 0:D.channels])),z(!1)}catch(D){console.error(D)}},ce=async()=>{try{const h=await o.channel.search(g,{limit:Dt,page:C});h&&h.length>0&&(k([...B,...h]),O(w=>w+1)),z(!1)}catch(h){console.error(h)}},we=h=>g?Number(h)===B.length-1:Number(h)===d.length-1;u.useEffect(()=>{d.length&&k(d)},[d]);async function Me(){if(o&&!X)if(g){N(!0),k([]);try{const h=await o.channel.search(g,{limit:Dt,page:C});k(h||[]),h&&h.length>0&&O(w=>w+1),N(!1)}catch(h){console.error(h),Y<Vi?(a(w=>w+1),Me()):(k(d),H(""),N(!1))}}else N(!1),H(""),k(d)}return u.useEffect(()=>{const h=setTimeout(Me,Gi);return()=>{clearTimeout(h)}},[g]),u.useEffect(()=>{!c||!o||async function(){const h=await o.notification.subscriptions(),w={},D={};h.map(({channel:ve,user_settings:J})=>{w[ve]=!0,D[ve]=J?JSON.parse(J):null}),i(_o(w)),i(zo(D))}()},[c,o]),t.jsxs(Ft,{minimal:r,children:[!v&&!r&&t.jsxs(Mt,{children:[t.jsxs(Zi,{children:[t.jsxs(Wt,{flex:"1",children:[t.jsx(Ki,{type:"text",value:g,onChange:h=>{O(1),H(h.target.value)},className:"input",placeholder:`Search by Name or ${c==null?void 0:c.slice(0,6)}`}),t.jsx(F,{position:"absolute",top:"0",bottom:"0",left:"12px",children:t.jsx(Do,{size:20,style:{color:"#657795"}})})]}),lt.isMainnet(s)&&t.jsx(F,{flex:"1",children:t.jsx(zt,{channelsNetworkId:S,setChannelsNetworkId:W})})]}),t.jsxs(Xi,{children:[P.allowedNetworks.length>1&&!lt.isMainnet(s)&&t.jsx(F,{flex:"1",children:t.jsx(zt,{channelsNetworkId:S,setChannelsNetworkId:W})}),!lt.isMainnet(s)&&t.jsx(Wi,{})]})]}),t.jsxs(st,{id:"scroll",minimal:r,children:[t.jsx("div",{children:(g?B:d).map((h,w)=>h&&h.channel!==p&&t.jsxs("div",{children:[t.jsx(Ot,{self:"stretch",children:!Mo[h.channel]&&h&&(S==P.coreContractChain||S==h.alias_blockchain_id&&!ot[S][h.channel])&&t.jsx(xt,{channelObjectProp:h,loadTeaser:e,playTeaser:n,minimal:r,profileType:It.CHANNEL})},h.channel),we(w)&&t.jsx(U,{onEnter:T})]},h.channel))}),g&&!(B!=null&&B.length)&&!X&&t.jsx(Ht,{children:t.jsx(ln,{title:"No channels match your query, please search for another name/address"})}),(_&&d.length||v||X)&&t.jsx(Nt,{children:t.jsx(ne,{type:ie.SEAMLESS,spinnerSize:r?24:42})})]})]})}const Ki=l.input`
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
`,Zi=l.div`
  // width: 100%;
  width: -webkit-fill-available;
  padding: 10px 0px;
  display: flex;
  flex-direction: row important!;
  // justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 10px 4px 10px 10px;
  }
`,Xi=l.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding-right: 10px;
  }
`;l.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;let Mt,Ft,Lt,Ot,Ht,Nt,Wt;Mt=l.div`
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
`,Ft=l.div`
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
`,Lt=l.div`
  padding: 20px;
`,Ot=l.div`
  align-self: stretch;
  // position: absolute;
  // top: 70px;
`,Ht=l.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Nt=l(Lt)`
  width: fit-content;
  align-self: center;
`,st=l(F)`
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
`,Wt=l(F)`
  width: 100%;
  margin-right: 10px;
`;var It=(e=>(e.CHANNEL="Channel",e.CHANNEL_PROFILE="Profile",e))(It||{});let Rt,Pt;cn=({channelID:e,loadTeaser:n,playTeaser:r})=>(Fo.pageview(at.Channels),t.jsx(Rt,{children:t.jsxs(Pt,{children:[t.jsx(Ji,{loadTeaser:n,playTeaser:r,minimal:!!e}),e&&t.jsx(pi,{channelID:e,loadTeaser:n,playTeaser:r,minimal:!1,profileType:"Profile"})]})})),Rt=l.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  background: ${e=>e.theme.default.bg};
  border-top-left-radius: ${A.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${A.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.DESKTOP};
  height: calc(
    100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${fe.BIG_MODULES.DESKTOP.TOP} -
      ${fe.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${Ce.laptop} {
    margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${fe.BIG_MODULES.TABLET.TOP} -
        ${fe.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE}
      ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${Ce.mobileL} {
    margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${fe.BIG_MODULES.MOBILE.TOP} -
        ${fe.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${A.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Pt=l.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`});export{cn as C,st as S,U as W,er as __tla};
