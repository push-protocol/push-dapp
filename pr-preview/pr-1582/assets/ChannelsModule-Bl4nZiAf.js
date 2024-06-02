import{b0 as h,bP as pe,aV as s,b4 as t,cW as ie,bf as co,aZ as $,b7 as L,a_ as he,bR as ue,cX as ee,be as Yt,dK as po,dL as ho,cj as Pe,dM as O,a$ as et,bF as U,bK as tt,c4 as uo,bg as W,bJ as Zt,bL as oe,dN as xo,ba as te,bb as ne,dO as fo,ds as mo,ci as nt,dB as go,dP as bo,bU as ze,bV as Ee,b5 as xe,bZ as Ce,bE as Xt,ca as wo,b$ as Qt,cc as qt,dQ as yo,b3 as vo,dR as jo,co as Ue,dS as it,bG as We,dT as ot,ch as So,di as Eo,cl as rt,aY as Te,dq as Co,dU as To,dV as en,dW as tn,dX as nn,dY as on,dZ as rn,d_ as ko,d$ as $o,e0 as Ao,e1 as at,e2 as Bo,aW as A,aX as fe,bi as _o,__tla as Do}from"./index-CKDK9Hy0.js";import{D as an,__tla as Mo}from"./DisplayNotice-L-VVfY-g.js";import{S as K,__tla as Fo}from"./Skeleton-BTKnQ2yD.js";import{c as Lo,__tla as Oo}from"./cloneDeep-DwLPaFHQ.js";import{G as sn,__tla as No}from"./index.esm-Cb1M0sRD.js";import{S as Io,N as Ro,__tla as Po}from"./RedCircle-BeX9ncMy.js";import{D as zo,n as Uo,g as Wo,u as Ho,M as Go,__tla as Vo}from"./ManageNotifSettingDropdown-Be5M4ga9.js";import{I as Jo,R as Ko,__tla as Yo}from"./RangeSlider-KGBEqSFu.js";let ln,st,H,Zo=Promise.all([(()=>{try{return Do}catch{}})(),(()=>{try{return Mo}catch{}})(),(()=>{try{return Fo}catch{}})(),(()=>{try{return Oo}catch{}})(),(()=>{try{return No}catch{}})(),(()=>{try{return Po}catch{}})(),(()=>{try{return Vo}catch{}})(),(()=>{try{return Yo}catch{}})()]).then(async()=>{const cn=e=>h.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M27 16H5",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{d:"M14 7L5 16L14 25",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Y={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},G={mobileS:`(max-width: ${Y.mobileS})`,mobileM:`(max-width: ${Y.mobileM})`,mobileL:`(max-width: ${Y.mobileL})`,tablet:`(max-width: ${Y.tablet})`,laptop:`(max-width: ${Y.laptop})`,laptopL:`(max-width: ${Y.laptopL})`,desktop:`(max-width: ${Y.desktop})`},dn={initial:"",ms:"mobileS",mm:"mobileM",ml:"mobileL",tb:"tablet",lp:"laptop",ll:"laptopL",dp:"desktop"},He=(e,i)=>e==="padding"||e==="margin"?`var(--${i})`:i,pn=e=>parseFloat(e.replace("px","")),hn=(e,i)=>e.reduce((r,n)=>r+pn(n),0)+"px",un=e=>{const i=Object.entries(e).filter(([n,o])=>o);if(!i.length)return"";const r=`@media ${G[i[0][0]]} { 
    ${i[0][1]} 
  }`;return i.length===1?r:`${r}`+i.map(([n,o],c)=>{if(c){const l=i[c-1][0],p=`@media (min-width: ${hn([Y[l],"1px"])})`,b=n,d=G!=null&&G[b]?`and ${G==null?void 0:G[b]}`:"";return`${p} ${d} { ${o} }`}else return""}).join(";")},xn=e=>{let i="";const r={mobileS:"",mobileM:"",mobileL:"",tablet:"",laptop:"",laptopL:"",desktop:""};return e.forEach(({prop:n,propName:o})=>{typeof n=="object"?Object.entries(n).forEach(([c,l])=>{const p=dn[c];p?r[p]+=`${o}: ${He(o,l)};`:i+=`${o}: ${He(o,l)};`}):n&&(i+=`${o}: ${He(o,n)};`)}),pe`
    ${i}
    ${un(r)}
  `},fn=e=>[{propName:"align-items",prop:e.alignItems},{propName:"display",prop:e.display},{propName:"flex-direction",prop:e.direction},{propName:"height",prop:e.height},{propName:"justify-content",prop:e.justifyContent},{propName:"margin",prop:e.m},{propName:"max-height",prop:e.maxH},{propName:"min-height",prop:e.minH},{propName:"max-width",prop:e.maxW},{propName:"min-width",prop:e.minW},{propName:"padding",prop:e.p},{propName:"width",prop:e.width}],mn=e=>{const i=fn(e);return xn(i)},gn=["border","borderRadius","bg","color","cursor","position","shadow","alignItems","display","direction","height","justifyContent","m","maxH","minH","maxW","minW","p","width"],bn=s.div.withConfig({shouldForwardProp:(e,i)=>!gn.includes(e)&&i(e)})`
  /* Responsive props */
  ${e=>mn(e)}

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
`,wn=h.forwardRef(({as:e="div",...i},r)=>t.jsx(bn,{as:e,ref:r,...i}));wn.displayName="Box";function Ge({externalIcon:e=null,internalIcon:i=null,text:r,bgColor:n,onClick:o=()=>{},onMouseEnter:c=()=>{},onMouseLeave:l=()=>{},padding:p,color:b}){return t.jsx(yn,{bg:n,margin:"0 8px",radius:"25px",maxWidth:"fit-content",onMouseEnter:c,onMouseLeave:l,padding:p,children:t.jsx(vn,{hoverBG:"transparent",onClick:o,children:t.jsxs($,{color:b,children:[e&&t.jsx(ie,{children:e}),i&&t.jsx(jn,{children:i}),t.jsx(ie,{children:r})]})})})}const yn=s(ie)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`,vn=s(co)`
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
`,jn=s($)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`,me={ens:{maintainer:"0x983110309620D911731Ac0932219af06091b6744",userjourneyyoutube:"https://www.youtube.com/embed/AmalyHBJ5Gw?controls=0&autoplay=1",userjourneyshort:"ens",article:"https://medium.com/ethereum-push-notification-service/epns-to-add-push-notifications-to-ens-decentralized-domain-name-services-a20f001a7234"},coindesk:{maintainer:"0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",userjourneyyoutube:"https://www.youtube.com/embed/z_RZgoYNH_Y?controls=0&autoplay=1",userjourneyshort:"coindesk",article:"https://medium.com/ethereum-push-notification-service/epns-and-coindesk-announce-media-push-notifications-1707b12884d"},snapshot:{maintainer:"0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c",userjourneyyoutube:"https://www.youtube.com/embed/AYy42D5oG20?controls=0&autoplay=1",userjourneyshort:"snapshot",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-snapshot-to-deliver-notifications-to-improve-community-governance-5730559cb84b"},makerdao:{maintainer:"0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",userjourneyyoutube:"https://www.youtube.com/embed/OxZ5H2vRnRc?controls=0&autoplay=1",userjourneyshort:"makerdao",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-makerdao-development-and-ux-core-unit-to-enable-push-notifications-for-protocol-53f777957d26"},cvi:{maintainer:"0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8",userjourneyyoutube:"https://www.youtube.com/embed/r_wXWfEWSM0?controls=0&autoplay=1",userjourneyshort:"cvi",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-cvi-crypto-volatility-index-to-enable-push-notifications-for-their-5ea662ee73a3"},bancor:{maintainer:"0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",userjourneyyoutube:"https://www.youtube.com/embed/SmoOX2JXx_4?controls=0&autoplay=1",userjourneyshort:"bancor",article:"https://medium.com/ethereum-push-notification-service/epns-integrates-with-bancor-network-to-facilitate-decentralized-push-notifications-d35b5e27d4a9"},oasisapp:{maintainer:"0x12b3eE60Df8ea26D03b8035Ec90434a38A82C4C7",userjourneyyoutube:"https://www.youtube.com/embed/7PPc6a3XUo4?controls=0&autoplay=1",userjourneyshort:"oasisapp",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-arrive-at-defi-on-oasis-app-770ae7ed1b"},mover:{maintainer:"0xb754601d2C8C1389E6633b1449B84CcE57788566",userjourneyyoutube:"https://www.youtube.com/embed/TX1acRPGovA?controls=0&autoplay=1",userjourneyshort:"mover",article:"https://medium.com/ethereum-push-notification-service/mover-integrates-with-epns-to-deliver-yield-harvesting-notifications-ab3bc9a6b26e"},poh:{maintainer:"0x327a29fcE0a6490E4236240Be176dAA282EcCfdF",userjourneyyoutube:"https://www.youtube.com/embed/_Urc35obsOQ?controls=0&autoplay=1",userjourneyshort:"poh",article:"https://medium.com/ethereum-push-notification-service/epns-joins-proof-of-humanity-to-enhance-the-user-experience-of-decentralized-self-sovereign-e734780c9840"},kyber:{maintainer:"0x91c9D4373B077eF8082F468C7c97f2c499e36F5b",userjourneyyoutube:"https://www.youtube.com/embed/EpTYdJMQxoU?controls=0&autoplay=1",userjourneyshort:"kyber",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-to-support-kybers-frictionless-liquidity-pools-4fe65746b39"},fabwelt:{maintainer:"0x361Cb6BE977d0113A33914A8f952Ced95747F793",userjourneyyoutube:"https://www.youtube.com/embed/kLyZ0DT?controls=0&autoplay=1",userjourneyshort:"fabwelt",article:"https://medium.com/ethereum-push-notification-service/fabwelt-partners-with-epns-to-bring-push-notifications-to-crypto-gaming-c247e70bb627"},banklessfr:{maintainer:"0xA8aF754379d8ae406dFbDD0D6c46324aD647243E",userjourneyyoutube:"https://www.youtube.com/embed/1mnLTslK_sY?controls=0&autoplay=1",userjourneyshort:"banklessfr",article:null},angle:{maintainer:"0xA2dEe32662F6243dA539bf6A8613F9A9e39843D3",userjourneyyoutube:null,userjourneyshort:"angle",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-angle-protocol-to-facilitate-push-notifications-for-users-af77cf4d3e2b"},mstable:{maintainer:"0xC30CE8F08BD8F667E65185310807Db937A5d6E53",userjourneyyoutube:null,userjourneyshort:"mstable",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-mstable-to-facilitate-decentralized-notifications-for-users-a3e6be14eecc"},aragon:{maintainer:"0x187a34c86aA6378333cE9033Aa34718D2CEdEd2C",userjourneyyoutube:"https://www.youtube.com/embed/PT90Zyi9A0g?controls=0&autoplay=1",userjourneyshort:"aragon",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-aragon-voice-to-power-unstoppable-decentralized-governance-56182b9d9aa0"},cryptomanga:{maintainer:"0x0B430A1651E6A64510afC97195040359941d0b23",userjourneyyoutube:null,userjourneyshort:"cryptomanga",article:"https://medium.com/ethereum-push-notification-service/epns-x-cryptomanga-decentralized-communication-for-decentralized-gaming-d296956afdeb"},dydx:{maintainer:"0x23c6b8fB0557FD5e6696BceF3fD4855E0d7018C0",userjourneyyoutube:"https://www.youtube.com/embed/oXgNlebVUAo?controls=0&autoplay=1",userjourneyshort:"dydx",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-dydx-foundation-to-enable-notifications-for-governance-updates-5794a5e22c4d"},idle:{maintainer:"0xFb3bD022D5DAcF95eE28a6B07825D4Ff9C5b3814",userjourneyyoutube:"https://www.youtube.com/embed/08bBRIzRcok?controls=0&autoplay=1",userjourneyshort:"idle",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-idle-to-enable-push-notifications-for-governance-updates-32e142ed2f33"},tracerdao:{maintainer:"0x8bf25240402C126bb236d26D391b782c5c893D32",userjourneyyoutube:"https://www.youtube.com/embed/Pw5zjKmQLFg?controls=0&autoplay=1",userjourneyshort:"tracerdao",article:"https://medium.com/ethereum-push-notification-service/epns-brings-push-notifs-to-tracer-dao-governance-91f7b9a9ddcc"},armor:{maintainer:"0x5aFeDeF166bd626B3043cb1D53e16EA9BF863E06",userjourneyyoutube:"https://www.youtube.com/embed/AMW9Xf0Rc2Y?controls=0&autoplay=1",userjourneyshort:"armor",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-armor-to-enable-push-notifications-for-its-users-daa70b4f172d"},pods:{maintainer:"0xb4F88Ad000A53638F203dcA2C39828a58057d53c",userjourneyyoutube:"https://www.youtube.com/embed/Ink21CE_RzM?controls=0&autoplay=1",userjourneyshort:"pods",article:"https://medium.com/ethereum-push-notification-service/epns-inks-partnership-with-options-protocol-pods-finance-e5adcd2d5821"},ooki:{maintainer:"0x9B43a385E08EE3e4b402D4312dABD11296d09E93",userjourneyyoutube:"https://www.youtube.com/embed/vGu--SUV4l4?controls=0&autoplay=1",userjourneyshort:"ooki",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-bzx-to-deliver-crucial-margin-trading-push-notifications-to-wallets-a2f52e4fcefe"},pushgov:{maintainer:"0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08",userjourneyyoutube:"https://www.youtube.com/embed/vvDlJttgQgQ?controls=0&autoplay=1",userjourneyshort:"pushgov",article:"https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4"},symphony:{maintainer:"0xd32908F63713F514aDDBE3962A2dE7112fdCD4A7",userjourneyyoutube:"https://www.youtube.com/embed/FtadeuLSPmE?controls=0&autoplay=1",userjourneyshort:"symphony",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-symphony-finance-to-facilitate-push-notifications-for-limit-order-c6f27bf8e02a"},ethtracker:{maintainer:"0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethtracker",article:null},ethpricetracker:{maintainer:"0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethpricetracker",article:null},btctracker:{maintainer:"0x03EAAAa48ea78d1E66eA3458364d553AD981871E",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"btctracker",article:null},aave:{maintainer:"0xAA940b3501176af328423d975C350d0d1BaAae50",userjourneyyoutube:"https://www.youtube.com/embed/YKflQ8eADFg?controls=0&autoplay=1",userjourneyshort:"aave",article:"https://medium.com/ethereum-push-notification-service/epns-x-aave-protection-against-asset-liquidation-f33be395ef87"},gro:{maintainer:"0x3c1F2E6Ec3De7811E2daa2B8E132CdCd8e39851c",userjourneyyoutube:null,userjourneyshort:"gro",article:"https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-4371ef89bc91"},flipside:{maintainer:"0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F",userjourneyyoutube:null,userjourneyshort:"flipside",article:"https://medium.com/ethereum-push-notification-service/epns-and-flipside-crypto-join-forces-to-facilitate-push-notifications-for-users-58df98b7aba7"},thedefiant:{maintainer:"0x46b676303ebC5699BF47e416677A57A89c70a015",userjourneyyoutube:null,userjourneyshort:"thedefiant",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-the-defiant-to-bring-defi-news-directly-to-users-wallets-8b4896d674bb"}},Sn=e=>{let i=!1;return Object.entries(me).forEach(([r,n])=>{if(me[r].maintainer===e){i=!0;return}}),i},En=({addr:e,bgColor:i,loadTeaser:r,playTeaser:n})=>{const o=he(),[c,l]=ue.useState(!1),p=(b=>{let d=null;return Object.entries(me).forEach(([f,m])=>{if(me[f].maintainer===b){d=me[f];return}}),d})(e);return t.jsxs(L,{flex:"initial",onMouseEnter:()=>{l(!0),console.debug("enter")},onMouseLeave:()=>{l(!1),console.debug("exit")},zIndex:"9",children:[c&&t.jsx(L,{position:"absolute",width:"280px",bottom:"0px",padding:"0px 0px 40px 0px",children:t.jsxs(Cn,{bg:o.backgroundBG,padding:"10px",border:`1px solid ${o.borderBg}`,children:[p.userjourneyshort&&t.jsxs(L,{children:[t.jsx($,{bg:o.viewChannelTutsTitleBg,color:"#fff",padding:"4px 10px",margin:"0px 0px 10px 0px",self:"flex-end",spacing:"0.1em",textTransform:"uppercase",size:"bold",children:"Opt-in to enable"}),t.jsx(ee,{src:`./tuts/${p.userjourneyshort}/${p.userjourneyshort}_${o.scheme}.png`,srcSet:`./tuts/${p.userjourneyshort}/${p.userjourneyshort}_${o.scheme}@2x.png 2x, ./tuts/${p.userjourneyshort}/${p.userjourneyshort}_${o.scheme}@3x.png 3x`,alt:`${p.alt}`})]}),t.jsxs(ie,{padding:"10px 0px 0px 0px",justify:"space-between",self:"stretch",children:[p.userjourneyyoutube&&t.jsxs(Yt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{l(!1),r(p.userjourneyyoutube),n(!0)},children:[t.jsx($,{margin:"0px 5px 0px 0px",weight:"bold",color:"#fff",children:"User Journey"}),t.jsx(po,{size:"20px"})]}),p.article&&t.jsx(Yt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{l(!1),window.open(`${p.article}`,"_blank")},children:t.jsx(ho,{size:"20px"})})]})]})}),t.jsx(Ge,{internalIcon:t.jsx(Pe,{filter:o.snackbarBorderIcon,width:"fit-content",src:O("svg/view-tutorial-icon.svg")}),text:"Tutorial",bgColor:i,color:o.viewChannelPrimaryText,padding:"6px 16px"})]})},Cn=s(L)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`,lt="data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.25%2011.25H8.75V6.75H7.25V11.25ZM8%205.25C8.2125%205.25%208.39075%205.178%208.53475%205.034C8.67825%204.8905%208.75%204.7125%208.75%204.5C8.75%204.2875%208.67825%204.10925%208.53475%203.96525C8.39075%203.82175%208.2125%203.75%208%203.75C7.7875%203.75%207.6095%203.82175%207.466%203.96525C7.322%204.10925%207.25%204.2875%207.25%204.5C7.25%204.7125%207.322%204.8905%207.466%205.034C7.6095%205.178%207.7875%205.25%208%205.25ZM8%2015C6.9625%2015%205.9875%2014.803%205.075%2014.409C4.1625%2014.0155%203.36875%2013.4813%202.69375%2012.8063C2.01875%2012.1313%201.4845%2011.3375%201.091%2010.425C0.697%209.5125%200.5%208.5375%200.5%207.5C0.5%206.4625%200.697%205.4875%201.091%204.575C1.4845%203.6625%202.01875%202.86875%202.69375%202.19375C3.36875%201.51875%204.1625%200.98425%205.075%200.59025C5.9875%200.19675%206.9625%200%208%200C9.0375%200%2010.0125%200.19675%2010.925%200.59025C11.8375%200.98425%2012.6313%201.51875%2013.3063%202.19375C13.9813%202.86875%2014.5155%203.6625%2014.909%204.575C15.303%205.4875%2015.5%206.4625%2015.5%207.5C15.5%208.5375%2015.303%209.5125%2014.909%2010.425C14.5155%2011.3375%2013.9813%2012.1313%2013.3063%2012.8063C12.6313%2013.4813%2011.8375%2014.0155%2010.925%2014.409C10.0125%2014.803%209.0375%2015%208%2015Z'%20fill='%23BAC4D6'/%3e%3c/svg%3e",Tn=({settings:e,optInHandler:i})=>{const[r,n]=h.useState([...e]),[o,c]=h.useState(!1),l=he(),p=(d,f)=>{const m=[...r];m[d].default=f,n(m)},b=d=>{const f=[...r];if(f[d].type===1){const m=f[d];m.default=!m.default}else{const m=f[d];m.enabled=!m.enabled}n(f)};return t.jsxs($n,{children:[r.map((d,f)=>t.jsxs(An,{hasBottomBorder:f!==e.length-1,children:[t.jsxs(Bn,{children:[t.jsx(oe,{color:l.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:d.description}),t.jsx(xo,{onChange:()=>b(f),checked:d.type===1?d.default:d.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),d.type===2&&d.enabled===!0&&t.jsxs(ct,{children:[t.jsx(oe,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:d.default}),t.jsx(Jo,{val:d.default,max:d.upperLimit,min:d.lowerLimit,step:d.ticker||1,defaultVal:d.default,onChange:({x:m})=>p(f,m)})]}),d.type===3&&d.enabled===!0&&t.jsxs(ct,{children:[t.jsxs(oe,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[d.default.lower," - ",d.default.upper]}),t.jsx(Ko,{startVal:d.default.lower,endVal:d.default.upper,max:d.upperLimit,min:d.lowerLimit,step:d.ticker||1,defaultStartVal:d.default.lower,defaultEndVal:d.default.upper,onChange:({startVal:m,endVal:v})=>p(f,{lower:m,upper:v})})]})]},f)),t.jsxs(_n,{children:[t.jsx(oe,{color:l.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(Dn,{onClick:()=>i({channelSettings:r,setLoading:c}),children:[o&&t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&t.jsx(Mn,{hideIt:o,children:"Opt-in"})]})]})]})},kn=e=>{const{children:i,channelDetail:r,setLoading:n,onSuccessOptin:o}=e,{chainId:c,provider:l,account:p,wallet:b}=et();U(B=>B.user);const[d,f]=h.useState(!1),m=tt(),{handleConnectWallet:v,connectWallet:S}=h.useContext(uo),_=c===W.coreContractChain,D=h.useMemo(()=>r&&(r!=null&&r.channel_settings)?JSON.parse(r==null?void 0:r.channel_settings):null,[r]),g=()=>{f(!d)},I=()=>{f(!1)},T=Zt(),N=async({channelSettings:B,setLoading:k})=>{var a;const Z=k||e&&e.setLoading||(()=>{});Z(!0);let R=p,X=l;if(!(((a=b==null?void 0:b.accounts)==null?void 0:a.length)>0)){const j=await S();R=j.accounts[0].address,X=new fo(j.provider,"any")}try{let j=r.channel;_||(j=r.alias_address),T.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const P=await(X==null?void 0:X.getSigner(R)),Q=Uo({settings:B}),E=Wo(Q);await mo.channels.subscribeV2({signer:P,channelAddress:nt(j,c),userAddress:nt(R,c),settings:E,onSuccess:()=>{m(go({channelAddress:j,status:!0})),m(bo({channelAddress:j,settings:Ho({channelSetting:B})})),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:V=>t.jsx(ze,{size:V,color:"green"})})},onError:()=>{console.error("opt in error"),T.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:V=>t.jsx(Ee,{size:V,color:"red"})})},env:W.pushNodesEnv})}catch(j){T.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${j.message} )`,toastType:"ERROR",getToastIcon:P=>t.jsx(Ee,{size:P,color:"red"})}),console.error(j)}finally{Z(!1)}};return D&&D.length?t.jsx(zo,{centerOnMobile:!0,showDropdown:d,toggleDropdown:g,closeDropdown:I,renderDropdownContainer:t.jsx(Tn,{settings:D,optInHandler:N}),containerPadding:"0px 16px 16px 16px",children:i}):t.jsx(oe,{onClick:N,children:i})},$n=s.div`
  min-width: 300px;
`,An=s.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&pe`
      border-bottom: 1px solid ${i=>i.theme.settingsModalBorderBottomColor};
    `}
`,Bn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,_n=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Dn=s.button`
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
  ${e=>e.disabled&&pe`
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
`,ct=s.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,Mn=s.span`
  ${e=>e.hideIt&&pe`
      visibility: hidden;
    `};
`,dt=({channelName:e,channelDescription:i,channelLogoSrc:r,height:n})=>t.jsxs(Fn,{style:{borderRadius:n<250?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(Ln,{children:"Channel was recently updated"}),t.jsx(On,{children:"Previously"}),t.jsxs(Nn,{children:[t.jsx(In,{children:t.jsx(Rn,{src:r})}),t.jsxs(Pn,{children:[t.jsx(zn,{children:e}),t.jsx(Un,{children:i})]})]})]}),Fn=s(xe)`
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


`,Ln=s(Ce)`
  color: ${e=>e.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,On=s(Ce)`
  color: ${e=>e.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`,Nn=s(Xt)`
  align-items: center;
  margin-top:8px;
`,In=s(Xt)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`,Rn=s(Pe)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${e=>`0.5px solid ${e.theme.tooltipIconBorderClr}`};
`,Pn=s(xe)`
  align-items: flex-start;
`,zn=s(Ce)`
  color: ${e=>e.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`,Un=s(Ce)`
  color: ${e=>e.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`,pt=({verifierIcon:e,verifierName:i,height:r})=>{const n=(i==null?void 0:i.length)>15?i.substring(0,15)+"...":i;return t.jsxs(Wn,{style:{width:212+(n&&n.length*2)+"px",borderRadius:r<160?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(ht,{children:"Verified By:"}),t.jsx(Hn,{src:e}),t.jsx(ht,{children:n})]})},Wn=s(xe)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`,ht=s(Ce)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`,Hn=s.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;function ut({channelObjectProp:e,loadTeaser:i,playTeaser:r,minimal:n,profileType:o}){var Jt,Kt;const c=tt(),l=he();U(x=>x.userJourney);const{userPushSDKInstance:p}=U(x=>x.user),{epnsReadProvider:b,epnsWriteProvider:d,epnsCommReadProvider:f,pushAdminAddress:m,ZERO_ADDRESS:v}=U(x=>x.contracts),{canVerify:S,channelDetails:_,coreChannelAdmin:D}=U(x=>x.admin),{channelsCache:g,CHANNEL_BLACKLIST:I,CHANNEL_ACTIVE_STATE:T,subscriptionStatus:N,userSettings:B}=U(x=>x.channels),{account:k,provider:Z,chainId:R}=et(),X=R===W.coreContractChain,[a,j]=h.useState(e),[P,Q]=h.useState(!1),[E,V]=h.useState(!1),[Xe,le]=h.useState(0),[ye,Me]=h.useState(!1),[u,y]=h.useState(!1),[M,ve]=h.useState(!1),[J,Ji]=h.useState(!1),[Ki,Xo]=h.useState(!1),[F,Wt]=h.useState(null),[Yi,Qe]=h.useState(a.channel),[q,Zi]=h.useState(0),[Fe,Qo]=h.useState({}),[z,Xi]=h.useState({}),[Ht,Qi]=h.useState(!1),Le=a.verified_status,qi=a.blocked,qe=Qt(600),Gt=Qt(500),je=a.activation_status,Se=qt(),eo=I.includes(a.channel),[Oe,to]=h.useState(null),Vt=()=>to(null);h.useEffect(()=>{Q(N[a.channel])},[N]),h.useEffect(()=>{Me(m==k)},[m,k]);const no=async()=>{try{return await So.getInstance().getChannelJsonStartBlockAsync(a.channel)}catch(x){console.error(x)}};h.useEffect(()=>{a.channel&&async function(){const x=await no();x&&Xi(x)}()},[a.channel]),h.useEffect(()=>{if(Fe&&z){if(Object.keys(Fe).length==0||Object.keys(z).length==0)return;let x=!1;["name","icon","info"].forEach(w=>{Fe[w]!=z[w]&&(x=!0)}),Qi(x)}},[Fe,z]),h.useEffect(()=>{!a||!a.channel||!p||async function(){var x;if(le(a.subscriber_count),!a.verified_status)V(!1);else try{let w=null;if(w=(await b.channels(a.channel)).verifiedBy,g[w])Wt(g[w]);else{let C={};yo((x=vo)==null?void 0:x.pushChannelAdmin,w)?C={name:"Push Admin",icon:"./logo192.png"}:C=await p.channel.info(nt(w,W.coreContractChain)),c(jo({address:w,meta:C})),Wt(C)}}catch(w){console.error("Error fetching channel information:",w)}finally{V(!1)}}()},[k,a,p]);let ce;X?ce=a.channel==k:ce=a.alias_address==k,h.useEffect(()=>{Oe&&Vt()},[Oe]),f==null||f.address;const de=Zt(),io=h.useMemo(()=>Lo(B),[B]),oo=x=>x.length>40?`${Eo(x,4,6)}`:x,ro=()=>{y(!0),d.verifyChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),de.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:w=>t.jsx(ze,{size:w,color:"green"})}),await x.wait(1),console.info("Transaction Mined!"),setIsVerified(!0)}).catch(x=>{console.error("!!!Error verifyChannel() --> %o",x),de.showMessageToast({toastTitle:"Error",toastMessage:"There was an error verifying the channel",toastType:"ERROR",getToastIcon:w=>t.jsx(Ee,{size:w,color:"red"})})}).finally(()=>{y(!1)})},ao=()=>{y(!0),d.unverifyChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),de.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:w=>t.jsx(ze,{size:w,color:"green"})}),await x.wait(1),console.info("Transaction Mined!"),setIsVerified(!1)}).catch(x=>{console.error("!!!Error handleSendMessage() --> %o",x),de.showMessageToast({toastTitle:"Error",toastMessage:"There was an error unverifying the channel",toastType:"ERROR",getToastIcon:w=>t.jsx(Ee,{size:w,color:"red"})})}),y(!1)},so=()=>{ve(!0),d.blockChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),de.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:w=>t.jsx(ze,{size:w,color:"green"})}),await x.wait(1),console.info("Transaction Mined!")}).catch(x=>{console.error("!!!Error handleSendMessage() --> %o",x),de.showMessageToast({toastTitle:"Error",toastMessage:"There was an error blocking the channel",toastType:"ERROR",getToastIcon:w=>t.jsx(Ee,{size:w,color:"red"})})}).finally(()=>{ve(!1),setIsBlocked(!0)})},lo=x=>{const w=Ne(x,!0);if(navigator&&navigator.clipboard)navigator.clipboard.writeText(w);else{const C=document.createElement("textarea");C.value=w,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C)}},Ne=(x,w)=>{let C=`${rt.Channels}/${x}`;if(w){let Re=window.location.hostname;Re==="localhost"&&(Re=Re+":3000"),C=`${Re}${C}`}return C};if(qi)return t.jsx(t.Fragment,{});if(eo)return t.jsx(t.Fragment,{});const Ie=x=>{var C;const w=(C=document.getElementById(a==null?void 0:a.channel))==null?void 0:C.getBoundingClientRect();Zi(w==null?void 0:w.top)};return t.jsxs(Vn,{id:a.channel,minimal:n,border:o=="Profile"?"none":`1px solid ${n?"transparent":l.default.border}`,children:[qe&&t.jsxs(Jn,{children:[t.jsx(gt,{minimal:n,children:t.jsx(mt,{children:t.jsx(ft,{minimal:n,children:E?t.jsx(K,{color:l.interfaceSkeleton,height:"100%"}):t.jsx(xt,{src:`${a.iconV2?a.iconV2:a.icon}`})})})}),!n&&t.jsx(wt,{children:E?t.jsx(K,{color:l.interfaceSkeleton,width:"50%",height:24}):t.jsx(yt,{children:t.jsxs(Yn,{children:[t.jsxs($,{children:[Ht&&t.jsx(Ue,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:q<250?{background:"none",top:"20px",left:Gt?"-100px":"5px"}:{background:"none",bottom:"25px",left:Gt?"-100px":"5px"},tooltipContent:t.jsx(dt,{height:q,channelName:z.name,channelDescription:z.info,channelLogoSrc:z.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ie(a.channel)},children:t.jsx(bt,{src:lt})})}),t.jsx($,{onClick:()=>{Se(Ne(a.channel,!1))},children:a.name})]}),Le==1&&t.jsxs($,{margin:"3px 5px 0px",style:{display:"flex"},children:[t.jsx(Ue,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:q<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(pt,{height:q,verifierIcon:F==null?void 0:F.icon,verifierName:F==null?void 0:F.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ie(a.channel)},children:t.jsx(sn,{size:18,color:l.viewChannelVerifiedBadge})})}),a&&(a==null?void 0:a.channel)&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(ee,{src:O("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),a&&(a==null?void 0:a.alias_address)!=null&&(a==null?void 0:a.alias_address)!="NULL"&&W.allowedNetworks.includes(+(a==null?void 0:a.alias_blockchain_id))&&!it[+(a==null?void 0:a.alias_blockchain_id)][a==null?void 0:a.channel]&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(ee,{src:O(`svg/${(Kt=(Jt=We[+a.alias_blockchain_id])==null?void 0:Jt.label)==null?void 0:Kt.split(" ")[0]}.svg`),alt:"Polygon",width:"20px",height:"20px"})})]})]})})})]}),!qe&&t.jsx(t.Fragment,{children:t.jsx(gt,{minimal:n,onClick:()=>{Se(Ne(a.channel,!1))},children:t.jsx(mt,{children:t.jsx(ft,{children:E?t.jsx(K,{color:l.interfaceSkeleton,height:"100%"}):t.jsx(xt,{src:`${a.iconV2?a.iconV2:a.icon}`})})})})}),!n&&t.jsxs(Kn,{children:[!qe&&t.jsx(wt,{children:E?t.jsx(K,{color:l.interfaceSkeleton,width:"50%",height:24}):t.jsx(yt,{children:t.jsxs($,{style:{display:"flex",alignItems:"center"},children:[Ht&&t.jsx(Ue,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:q<250?{background:"none",top:"20px",left:"5px"}:{background:"none",bottom:"25px",left:"5px"},tooltipContent:t.jsx(dt,{height:q,channelName:z.name,channelDescription:z.info,channelLogoSrc:z.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ie(a.channel)},style:{cursor:"pointer"},children:t.jsx(bt,{src:lt})})}),t.jsx($,{onClick:()=>{Se(Ne(a.channel,!1))},children:a.name}),Le==1&&t.jsx($,{margin:"3px 5px 0px",style:{display:"flex"},children:t.jsx(Ue,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:q<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(pt,{height:q,verifierIcon:F==null?void 0:F.icon,verifierName:F==null?void 0:F.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ie(a.channel)},children:t.jsx(sn,{size:18,color:l.viewChannelVerifiedBadge})})})}),a&&(a==null?void 0:a.channel)&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(ee,{src:O("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),a&&(a==null?void 0:a.alias_address)!=null&&(a==null?void 0:a.alias_address)!="NULL"&&W.allowedNetworks.includes(+(a==null?void 0:a.alias_blockchain_id))&&!it[+(a==null?void 0:a.alias_blockchain_id)][a==null?void 0:a.channel]&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(ee,{src:O(`svg/${ot[+a.alias_blockchain_id]}`),alt:"Alias Chain Logo",width:"20px",height:"20px"})})]})})}),t.jsx(Zn,{children:E?t.jsxs(t.Fragment,{children:[t.jsx(ke,{atH:5,atW:100,children:t.jsx(K,{color:l.interfaceSkeleton,width:"100%",height:5})}),t.jsx(ke,{atH:5,atW:100,children:t.jsx(K,{color:l.interfaceSkeleton,width:"100%",height:5})}),t.jsx(ke,{atH:5,atW:100,children:t.jsx(K,{color:l.interfaceSkeleton,width:"40%",height:5})})]}):t.jsx(Xn,{children:a.info})}),t.jsx(Qn,{children:E?t.jsx(t.Fragment,{children:t.jsx(ke,{atH:10,atW:30,marginBottom:"0",children:t.jsx(K,{color:l.interfaceSkeleton})})}):t.jsx(ie,{align:"center",justify:"flex-start",margin:"0px -5px",children:t.jsxs(qn,{children:[t.jsx(Ge,{externalIcon:t.jsx(ee,{src:O("svg/users.svg"),alt:"users",width:"14px",height:"14px"}),internalIcon:null,text:Xe,padding:"5.3px 10px",bgColor:l.viewChannelSecondaryBG,color:l.viewChannelSecondaryText}),t.jsx(Ge,{text:oo(Yi),bgColor:l.viewChannelSearchBg,padding:"6px 16px",color:l.viewChannelPrimaryText,onClick:()=>{lo(a.channel),Qe("copied")},onMouseEnter:()=>{Qe("click to copy")},onMouseLeave:()=>{Qe(a.channel)}}),o==="Profile"&&t.jsxs(oi,{active:je,children:[je===0&&t.jsx(Pe,{width:"12px",src:Io,margin:"0 5px 2px 0px",height:"30px"}),je===1?"Active":"Deactivated"]}),Sn(a.channel)&&t.jsx(En,{addr:a.channel,bgColor:l.viewChannelSearchBg,loadTeaser:i,playTeaser:r})]})})})]}),!!k&&!!Z&&!n&&t.jsxs(t.Fragment,{children:[t.jsx(ei,{}),t.jsxs(ti,{children:[E&&t.jsx(ni,{children:t.jsx(K,{color:l.interfaceSkeleton})}),!E&&ye&&o=="Channel"&&t.jsxs(Ve,{onClick:so,disabled:M,children:[M&&t.jsx(be,{children:t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:M,children:"Block channel"})]}),!E&&(ye||S)&&!Le&&o=="Channel"&&t.jsxs(Ve,{onClick:ro,disabled:u,children:[u&&t.jsx(be,{children:t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:u,children:"Verify Channel"})]}),!E&&(ye||Ki)&&Le&&o=="Channel"&&t.jsxs(jt,{onClick:ao,disabled:u,children:[u&&t.jsx(be,{children:t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:u,children:"Unverify Channel"})]}),!E&&!P&&t.jsxs(t.Fragment,{children:[ce&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(Et,{onClick:()=>Se("/dashboard"),children:"Go To Dashboard"}):t.jsx(St,{disabled:!0,children:"Owner"})}),!ce&&je!==0&&t.jsx(kn,{channelDetail:a,setLoading:Ji,onSuccessOptin:()=>{Q(!0),le(x=>x+1)},children:t.jsxs(Ve,{onClick:()=>{},disabled:J,className:"optin",children:[J&&t.jsx(be,{children:t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:J,children:"Opt-In"})]})})]}),!E&&P&&je!==0&&t.jsxs(t.Fragment,{children:[ce&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(Et,{onClick:()=>Se("/dashboard"),children:"Go To Dashboard"}):t.jsx(St,{disabled:!0,children:"Owner"})}),!ce&&t.jsx(Go,{centerOnMobile:!0,channelDetail:a,setSubscribed:Q,userSetting:io[a.channel],setSubscriberCount:le,onSuccessOptout:()=>{Q(!1),le(x=>x-1)},children:t.jsxs(jt,{onClick:()=>{},disabled:J,children:[J&&t.jsx(be,{children:t.jsx(te,{type:ne.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(ge,{hideit:J,children:"Manage"}),t.jsx(Pe,{alt:"arrow",src:O("svg/arrow.svg"),height:"10px",width:"12px"})]})})]})]})]}),Oe&&t.jsx(Ro,{notification:Oe,clearToast:Vt})]},a.channel)}const Gn=s.div`
  display: flex;
`;s(Gn)`
  flex-direction: column;
`;const Vn=s.div`
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
`,xt=s.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`,ft=s.div`
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
`,mt=s.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
`,gt=s(wo)`
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
`,Jn=s.div`
  display: flex;
`,bt=s.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,Kn=s.div`
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
`;const wt=s(ie)`
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
`,yt=s.a`
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
`,Yn=s($)`
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
`;const Zn=s.div`
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
`,Xn=s.label`
  flex: 1;
  line-height: 165%;
  color: ${e=>e.theme.viewChannelPrimaryTextColor};
`,Qn=s.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,qn=s.div`
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
`,vt=s.label`
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
  @media ${G.laptopL} {
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
`,s(vt)`
  background: ${e=>e.theme.viewChannelSecondaryBG};
  transition: 300ms;
`,s.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,s(vt)`
  background: #674c9f;
`;const ei=s.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${G.tablet} {
    display: block;
  }
`,ti=s.div`
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
`,$e=s.button`
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
  ${e=>e.disabled&&pe`
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
`,ge=s.span`
  font-weight: 500;
  font-size: 14px;

  ${e=>e.hideit&&pe`
      visibility: hidden;
    `};
`,be=s.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,ni=s.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Ve=s($e)`
  background: #e20880;
  color: #fff;
  border-radius: 8px;
  padding: 0px;
  min-height: 36px;
  min-width: 108px;
`,jt=s($e)`
  background: transparent;
  color: ${e=>e.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`,St=s($e)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`,Et=s($e)`
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
`;const ii=s.div`
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
`,oi=s(ii)`
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
`,ri=20,ai=({channelID:e,loadTeaser:i,playTeaser:r,minimal:n,profileType:o})=>{const{userPushSDKInstance:c}=U(g=>g.user),l=he(),[p,b]=h.useState(!0),[d,f]=h.useState(!0),[m,v]=h.useState([]),[S,_]=h.useState(null),D=qt();return h.useEffect(()=>{_(null),c&&(b(!0),(async()=>{try{const g=await c.channel.info(e);_(g),b(!1)}catch(g){console.log("Error",g),b(!1)}})())},[e,c]),h.useEffect(()=>(c&&(b(!0),c.channel.notifications(e,{page:1,limit:ri}).then(g=>{console.log(g),v(g.notifications),f(!1)}).catch(g=>{console.error("Error >>>>",g),f(!1)})),()=>{v([]),f(!0)}),[e,c]),t.jsxs(si,{children:[t.jsx(li,{flex:"initial",alignItems:"flex-start",padding:"0px",children:t.jsx(cn,{onClick:()=>{D(rt.Channels)}})}),t.jsxs(t.Fragment,{children:[S&&!p&&t.jsx(ut,{channelObjectProp:S,loadTeaser:i,playTeaser:r,minimal:n,profileType:o}),!p&&t.jsxs(pi,{children:[t.jsx(oe,{fontSize:"20px",fontWeight:"500",color:l.color,children:"Recent Notifications"}),t.jsx(hi,{color:l.color,children:"Showing preview of the latest non-encrypted notifications sent by the channel."})]}),t.jsxs(di,{children:[d&&t.jsx(te,{type:ne.SEAMLESS,spinnerSize:40}),!m.length&&!d&&t.jsx("div",{style:{textAlign:"center"},children:t.jsx(an,{title:"You currently have no notifications, try subscribing to some channels."})}),m.map((g,I)=>{const T=g.message.payload;return t.jsx(ci,{children:t.jsx(Co,{notificationTitle:T.title,notificationBody:T.body,cta:T.cta,image:T.embed,app:g.channel.name,icon:g.channel.icon,url:g.channel.url,chainName:g.source,theme:l.scheme})},`${g.payload_id}`)})]})]})]})},si=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  margin: 20px 0px 0px 20px;

  @media ${Te.tablet} {
    overflow-y: auto;
    margin: 20px 10px 0px 10px;
  }
`,li=s(xe)`
  @media ${Te.tablet} {
    position: absolute;
    z-index: 1;
    padding: 10px;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
  }
`,ci=s.div``,di=s(xe)`
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

  @media ${Te.tablet} {
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
`,pi=s(xe)`
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  align-items: baseline;
  margin: 7px 20px 24px 5px;
`,hi=s(oe)`
  font-size: 0.8em;
`;var ui=!!(typeof window<"u"&&window.document&&window.document.createElement);function xi(){if(!ui||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){function n(){e=!0}return n}()}),r=function(){};window.addEventListener("testPassiveEventSupport",r,i),window.removeEventListener("testPassiveEventSupport",r,i)}catch{}return e}var Je=void 0;function fi(){return Je===void 0&&(Je=xi()),Je}function mi(e){if(e)return fi()?e:!!e.capture}function gi(e){if(!e)return 0;if(e===!0)return 100;var i=e.capture<<0,r=e.passive<<1,n=e.once<<2;return i+r+n}function Ct(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function Ae(e){this.target=e,this.events={}}Ae.prototype.getEventHandlers=function(){function e(i,r){var n=String(i)+" "+String(gi(r));return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]}return e}(),Ae.prototype.handleEvent=function(){function e(i,r,n){var o=this.getEventHandlers(i,r);o.handlers=o.nextHandlers,o.handlers.forEach(function(c){c&&c(n)})}return e}(),Ae.prototype.add=function(){function e(i,r,n){var o=this,c=this.getEventHandlers(i,n);Ct(c),c.nextHandlers.length===0&&(c.handleEvent=this.handleEvent.bind(this,i,n),this.target.addEventListener(i,c.handleEvent,n)),c.nextHandlers.push(r);var l=!0,p=function(){function b(){if(l){l=!1,Ct(c);var d=c.nextHandlers.indexOf(r);c.nextHandlers.splice(d,1),c.nextHandlers.length===0&&(o.target&&o.target.removeEventListener(i,c.handleEvent,n),c.handleEvent=void 0)}}return b}();return p}return e}();var Ke="__consolidated_events_handlers__";function Tt(e,i,r,n){e[Ke]||(e[Ke]=new Ae(e));var o=mi(n);return e[Ke].add(i,r,o)}function bi(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function wi(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function yi(e,i,r){return i&&wi(e.prototype,i),e}function vi(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&Ye(e,i)}function Be(e){return Be=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},Be(e)}function Ye(e,i){return Ye=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},Ye(e,i)}function ji(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Si(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ei(e,i){return i&&(typeof i=="object"||typeof i=="function")?i:Si(e)}function Ci(e){var i=ji();return function(){var r=Be(e),n;if(i){var o=Be(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ei(this,n)}}function Ti(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function ki(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function kt(e,i){var r=ki(e);if(typeof r=="number")return r;var n=Ti(e);if(typeof n=="number")return n*i}var _e="above",re="inside",De="below",Ze="invisible";function $t(e){return typeof e.type=="string"}var $i=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function Ai(e,i){if(e&&!$t(e)&&!i)throw new Error($i)}function Bi(e){return e.viewportBottom-e.viewportTop===0?Ze:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?re:e.viewportBottom<e.waypointTop?De:e.waypointTop<e.viewportTop?_e:Ze}var ae,we=[];function At(e){we.push(e),ae||(ae=setTimeout(function(){ae=null;for(var r;r=we.shift();)r()},0));var i=!0;return function(){if(i){i=!1;var r=we.indexOf(e);r!==-1&&(we.splice(r,1),!we.length&&ae&&(clearTimeout(ae),ae=null))}}}function _i(e){return e==="window"?globalThis.window:e}let Bt;Bt={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},H=function(e){vi(r,e);var i=Ci(r);function r(n){var o;return bi(this,r),o=i.call(this,n),o.refElement=function(c){o._ref=c},o}return yi(r,[{key:"componentDidMount",value:function(){var n=this;r.getWindow()&&(this.cancelOnNextTick=At(function(){n.cancelOnNextTick=null;var o=n.props,c=o.children;o.debug,Ai(c,n._ref),n._handleScroll=n._handleScroll.bind(n),n.scrollableAncestor=n._findScrollableAncestor(),n.scrollEventListenerUnsubscribe=Tt(n.scrollableAncestor,"scroll",n._handleScroll,{passive:!0}),n.resizeEventListenerUnsubscribe=Tt(window,"resize",n._handleScroll,{passive:!0}),n._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var n=this;r.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=At(function(){n.cancelOnNextTick=null,n._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){r.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var n=this.props,o=n.horizontal,c=n.scrollableAncestor;if(c)return _i(c);for(var l=this._ref;l.parentNode;){if(l=l.parentNode,l===document.body)return window;var p=window.getComputedStyle(l),b=o?p.getPropertyValue("overflow-x"):p.getPropertyValue("overflow-y"),d=b||p.getPropertyValue("overflow");if(d==="auto"||d==="scroll"||d==="overlay")return l}return window}},{key:"_handleScroll",value:function(n){if(this._ref){var o=this._getBounds(),c=Bi(o),l=this._previousPosition,p=this.props;p.debug;var b=p.onPositionChange,d=p.onEnter,f=p.onLeave,m=p.fireOnRapidScroll;if(this._previousPosition=c,l!==c){var v={currentPosition:c,previousPosition:l,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};b.call(this,v),c===re?d.call(this,v):l===re&&f.call(this,v);var S=l===De&&c===_e,_=l===_e&&c===De;m&&(S||_)&&(d.call(this,{currentPosition:re,previousPosition:l,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),f.call(this,{currentPosition:c,previousPosition:re,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}}},{key:"_getBounds",value:function(){var n=this.props,o=n.horizontal;n.debug;var c=this._ref.getBoundingClientRect(),l=c.left,p=c.top,b=c.right,d=c.bottom,f=o?l:p,m=o?b:d,v,S;this.scrollableAncestor===window?(v=o?window.innerWidth:window.innerHeight,S=0):(v=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,S=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var _=this.props,D=_.bottomOffset,g=_.topOffset,I=kt(g,v),T=kt(D,v),N=S+v;return{waypointTop:f,waypointBottom:m,viewportTop:S+I,viewportBottom:N-T}}},{key:"render",value:function(){var n=this,o=this.props.children;if(!o)return ue.createElement("span",{ref:this.refElement,style:{fontSize:0}});if($t(o)||To.isForwardRef(o)){var c=function(l){n.refElement(l),o.ref&&(typeof o.ref=="function"?o.ref(l):o.ref.current=l)};return ue.cloneElement(o,{ref:c})}return ue.cloneElement(o,{innerRef:this.refElement})}}]),r}(ue.PureComponent),H.above=_e,H.below=De,H.inside=re,H.invisible=Ze,H.getWindow=function(){if(typeof window<"u")return window},H.defaultProps=Bt,H.displayName="Waypoint";const _t=({channelsNetworkId:e,setChannelsNetworkId:i})=>{var d;const r=he(),n=h.useRef(null),o=h.useRef(null),[c,l]=h.useState(!1),[p,b]=h.useState([]);return en(n,o,()=>{l(!1)}),h.useEffect(()=>{const f=[];W.allowedNetworks.map(m=>{f.push({id:m,value:We[m].label,title:We[m].label,icon:O(`svg/${ot[m]}`),function:()=>{i(m),l(!1)}})}),b(f)},[W]),t.jsxs(Di,{children:[t.jsxs(Fi,{color:r.viewChannelSearchText,onClick:()=>l(!c),ref:n,children:[t.jsx(ie,{padding:"0 8px 0 0",children:t.jsx(ee,{src:O(`svg/${ot[e]}`),alt:"active chain",width:"32px",height:"32px"})}),t.jsx(L,{width:"max-content",className:"text",children:(d=We[e])==null?void 0:d.label}),t.jsx(Li,{children:t.jsx("img",{alt:"arrow",className:`${c?"down":"up"}`,src:O("svg/arrow.svg")})})]}),c&&t.jsx(Mi,{ref:o,bg:r.default.secondaryBg,border:`1px solid ${r.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 20px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(tn,{dropdownValues:p})})]})},Di=s.button`
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
`,Mi=s(L)`
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
`,Fi=s.span`
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
`,Li=s.div`
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
`,Oi=()=>{const e=he(),i=h.useRef(null),r=h.useRef(null),[n,o]=ue.useState(!1);en(i,r,()=>{o(!1)});const c=[{id:"11155111",value:"Sepolia",title:"Sepolia Faucet",function:()=>{},link:"https://sepoliafaucet.com/"},{id:"80002",value:"Polygon",title:"Amoy Faucet",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"97",value:"BNB",title:"BNB Faucet",function:()=>{},link:"https://testnet.bnbchain.org/faucet-smart"},{id:"11155420",value:"Optimism",title:"Optimism Sepolia Faucet",function:()=>{},link:"https://faucet.quicknode.com/optimism/sepolia"},{id:"2442",value:"Polygon zkEVM",title:"Polygon zkEVM Bridge",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"421614",value:"Arbitrum",title:"Arbitrum Testnet Faucet",function:()=>{},link:"https://faucet.quicknode.com/arbitrum/sepolia"},{id:"123",value:"Fuse",title:"Fuse Sparknet Faucet",function:()=>{},link:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},{id:"111557560",value:"Cyber",title:"Cyber Faucet",function:()=>{},link:"https://cyber-testnet.testnets.rollbridge.app/"}];return t.jsxs(Ni,{children:[t.jsxs(Ri,{color:e.viewChannelSearchText,onClick:()=>o(!n),ref:i,children:[t.jsx(Ii,{children:t.jsx(ee,{src:O("svg/gasPump.svg"),alt:"faucet",width:"32px",height:"32px"})}),"Testnet Faucets",t.jsx(Pi,{children:t.jsx("img",{alt:"arrow",className:`${n?"down":"up"}`,src:O("svg/arrow.svg")})})]}),n&&t.jsx(L,{ref:r,bg:e.default.secondaryBg,border:`1px solid ${e.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 14px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(tn,{dropdownValues:c})})]})},Ni=s.button`
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
`,Ii=s.div`
  padding: 0 20px 0 0px;
`,Ri=s.div`
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
`,Pi=s.div`
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
`,se=10,zi=5,Ui=500,Dt=10;function Wi({loadTeaser:e,playTeaser:i,minimal:r}){const n=tt(),{userPushSDKInstance:o}=U(u=>u.user),{account:c,chainId:l}=et(),{channels:p,page:b,ZERO_ADDRESS:d}=U(u=>u.channels),{run:f,stepIndex:m}=U(u=>u.userJourney),[v,S]=h.useState(!1),[_,D]=h.useState(!1),[g,I]=h.useState(""),[T,N]=h.useState(1),[B,k]=h.useState([]),[Z,R]=h.useState(!1),[X,a]=h.useState(0),[j,P]=h.useState(l),Q=b*se;h.useEffect(()=>{S(!p.length),o&&V()},[c,l,o]),h.useEffect(()=>{P(l),o&&V()},[l]);const E=()=>{if(!(v||_)){if(D(!0),g&&o){le();return}n(nn()),Xe(b+1)}},V=async()=>{try{let u={page:Math.ceil(Q/se)||1,limit:se};if(!p.length){const y=await o.channel.list({options:u});n(nn()),n(on(y==null?void 0:y.channels))}f&&m===3&&(n(rn()),n(rn())),S(!1)}catch(u){console.error(u)}},Xe=async u=>{const y=u*se;try{const M=await o.channel.list({page:Math.ceil(y/se)||1,limit:se});n(on([...p,...M==null?void 0:M.channels])),D(!1)}catch(M){console.error(M)}},le=async()=>{try{const u=await o.channel.search(g,{limit:Dt,page:T});u&&u.length>0&&(k([...B,...u]),N(y=>y+1)),D(!1)}catch(u){console.error(u)}},ye=u=>g?Number(u)===B.length-1:Number(u)===p.length-1;h.useEffect(()=>{p.length&&k(p)},[p]);async function Me(){if(o&&!Z)if(g){R(!0),k([]);try{const u=await o.channel.search(g,{limit:Dt,page:T});k(u||[]),u&&u.length>0&&N(y=>y+1),R(!1)}catch(u){console.error(u),X<zi?(a(y=>y+1),Me()):(k(p),I(""),R(!1))}}else R(!1),I(""),k(p)}return h.useEffect(()=>{const u=setTimeout(Me,Ui);return()=>{clearTimeout(u)}},[g]),h.useEffect(()=>{!c||!o||async function(){const u=await o.notification.subscriptions(),y={},M={};u.map(({channel:ve,user_settings:J})=>{y[ve]=!0,M[ve]=J?JSON.parse(J):null}),n(ko(y)),n($o(M))}()},[c,o]),t.jsxs(Ft,{minimal:r,children:[!v&&!r&&t.jsxs(Mt,{children:[t.jsxs(Gi,{children:[t.jsxs(Rt,{flex:"1",children:[t.jsx(Hi,{type:"text",value:g,onChange:u=>{N(1),I(u.target.value)},className:"input",placeholder:`Search by Name or ${c==null?void 0:c.slice(0,6)}`}),t.jsx(L,{position:"absolute",top:"0",bottom:"0",left:"12px",children:t.jsx(Ao,{size:20,style:{color:"#657795"}})})]}),at.isMainnet(l)&&t.jsx(L,{flex:"1",children:t.jsx(_t,{channelsNetworkId:j,setChannelsNetworkId:P})})]}),t.jsxs(Vi,{children:[W.allowedNetworks.length>1&&!at.isMainnet(l)&&t.jsx(L,{flex:"1",children:t.jsx(_t,{channelsNetworkId:j,setChannelsNetworkId:P})}),!at.isMainnet(l)&&t.jsx(Oi,{})]})]}),t.jsxs(st,{id:"scroll",minimal:r,children:[t.jsx("div",{children:(g?B:p).map((u,y)=>u&&u.channel!==d&&t.jsxs("div",{children:[t.jsx(Ot,{self:"stretch",children:!Bo[u.channel]&&u&&(j==W.coreContractChain||j==u.alias_blockchain_id&&!it[j][u.channel])&&t.jsx(ut,{channelObjectProp:u,loadTeaser:e,playTeaser:i,minimal:r,profileType:Pt.CHANNEL})},u.channel),ye(y)&&t.jsx(H,{onEnter:E})]},u.channel))}),g&&!(B!=null&&B.length)&&!Z&&t.jsx(Nt,{children:t.jsx(an,{title:"No channels match your query, please search for another name/address"})}),(_&&p.length||v||Z)&&t.jsx(It,{children:t.jsx(te,{type:ne.SEAMLESS,spinnerSize:r?24:42})})]})]})}const Hi=s.input`
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
`,Gi=s.div`
  // width: 100%;
  width: -webkit-fill-available;
  padding: 10px 0px;
  display: flex;
  flex-direction: row important!;
  // justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 10px 4px 10px 10px;
  }
`,Vi=s.div`
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
`;let Mt,Ft,Lt,Ot,Nt,It,Rt;Mt=s.div`
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
`,Ft=s.div`
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
`,Lt=s.div`
  padding: 20px;
`,Ot=s.div`
  align-self: stretch;
  // position: absolute;
  // top: 70px;
`,Nt=s.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,It=s(Lt)`
  width: fit-content;
  align-self: center;
`,st=s(L)`
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
`,Rt=s(L)`
  width: 100%;
  margin-right: 10px;
`;var Pt=(e=>(e.CHANNEL="Channel",e.CHANNEL_PROFILE="Profile",e))(Pt||{});let zt,Ut;ln=({channelID:e,loadTeaser:i,playTeaser:r})=>(_o.pageview(rt.Channels),t.jsx(zt,{children:t.jsxs(Ut,{children:[t.jsx(Wi,{loadTeaser:i,playTeaser:r,minimal:!!e}),e&&t.jsx(ai,{channelID:e,loadTeaser:i,playTeaser:r,minimal:!1,profileType:"Profile"})]})})),zt=s.div`
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

  @media ${Te.laptop} {
    margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${fe.BIG_MODULES.TABLET.TOP} -
        ${fe.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE}
      ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${Te.mobileL} {
    margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${fe.BIG_MODULES.MOBILE.TOP} -
        ${fe.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${A.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Ut=s.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`});export{ln as C,st as S,H as W,Zo as __tla};
