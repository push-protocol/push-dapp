import{b0 as p,bP as de,aV as s,b4 as t,cW as ne,bf as so,aZ as $,b7 as L,a_ as pe,bR as he,cX as Q,be as Zt,dK as lo,dL as co,cj as Re,dM as O,a$ as et,bF as U,bK as tt,c4 as po,bg as H,bJ as Xt,bL as ie,dN as ho,ba as q,bb as ee,dO as uo,ds as xo,ci as nt,dB as fo,dP as mo,bU as Pe,bV as Se,b5 as ue,bZ as Ee,bE as Yt,ca as go,b$ as Qt,cc as qt,dQ as bo,b3 as wo,dR as yo,co as ze,dS as it,bG as Ue,dT as ot,ch as vo,di as jo,cl as rt,aY as Ce,dq as So,dU as Eo,dV as en,dW as tn,dX as nn,dY as on,dZ as rn,d_ as Co,d$ as ko,e0 as To,e1 as at,e2 as $o,aW as A,aX as xe,bi as Ao,__tla as Bo}from"./index-1nokc7wt.js";import{D as an,__tla as _o}from"./DisplayNotice-DGjrl4cx.js";import{S as J,__tla as Do}from"./Skeleton-CpFW-lL_.js";import{c as Mo,__tla as Fo}from"./cloneDeep-ZnvEi2fP.js";import{G as sn,__tla as Lo}from"./index.esm-Cu2uhXqd.js";import{S as Oo,N as No,__tla as Io}from"./RedCircle-hPC1Og9Y.js";import{D as Ro,n as Po,g as zo,u as Uo,M as Ho,__tla as Wo}from"./ManageNotifSettingDropdown-Di7_4gyM.js";import{I as Go,R as Vo,__tla as Jo}from"./RangeSlider-BQVJlpRa.js";let ln,st,W,Ko=Promise.all([(()=>{try{return Bo}catch{}})(),(()=>{try{return _o}catch{}})(),(()=>{try{return Do}catch{}})(),(()=>{try{return Fo}catch{}})(),(()=>{try{return Lo}catch{}})(),(()=>{try{return Io}catch{}})(),(()=>{try{return Wo}catch{}})(),(()=>{try{return Jo}catch{}})()]).then(async()=>{const cn=e=>p.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M27 16H5",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M14 7L5 16L14 25",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),te={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},He={mobileS:`(max-width: ${te.mobileS})`,mobileM:`(max-width: ${te.mobileM})`,mobileL:`(max-width: ${te.mobileL})`,tablet:`(max-width: ${te.tablet})`,laptop:`(max-width: ${te.laptop})`,laptopL:`(max-width: ${te.laptopL})`,desktop:`(max-width: ${te.desktop})`},dn={initial:"",ms:"mobileS",mm:"mobileM",ml:"mobileL",tb:"tablet",lp:"laptop",ll:"laptopL",dp:"desktop"},pn=e=>Object.entries(e).filter(([i,r])=>r).map(([i,r])=>`@media ${He[i]} { ${r} }`).join(";"),We=(e,i)=>e==="padding"||e==="margin"?`var(--${i})`:i,hn=e=>{let i="";const r={mobileS:"",mobileM:"",mobileL:"",tablet:"",laptop:"",laptopL:"",desktop:""};return e.forEach(({prop:n,propName:o})=>{typeof n=="object"?Object.entries(n).forEach(([c,l])=>{const h=dn[c];h?r[h]+=`${o}: ${We(o,l)};`:i+=`${o}: ${We(o,l)};`}):n&&(i+=`${o}: ${We(o,n)};`)}),de`
    ${i}
    ${pn(r)}
  `},un=e=>[{propName:"align-items",prop:e.alignItems},{propName:"display",prop:e.display},{propName:"height",prop:e.height},{propName:"justify-content",prop:e.justifyContent},{propName:"margin",prop:e.m},{propName:"max-height",prop:e.maxH},{propName:"min-height",prop:e.minH},{propName:"max-width",prop:e.maxW},{propName:"min-width",prop:e.minW},{propName:"padding",prop:e.p},{propName:"width",prop:e.width}],xn=e=>{const i=un(e);return hn(i)},fn=["border","borderRadius","bg","color","cursor","position","shadow","alignItems","display","height","justifyContent","m","maxH","minH","maxW","minW","p","width"],mn=s.div.withConfig({shouldForwardProp:(e,i)=>!fn.includes(e)&&i(e)})`
  /* Responsive props */
  ${e=>xn(e)}

  /* Extra CSS props */
  ${e=>e.css||""}

  /* Non-responsive props */
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
  box-shadow: ${e=>e.shadow};
  border-radius: ${e=>e.borderRadius};
  cursor: ${e=>e.cursor};
  border: ${e=>e.border};
  position: ${e=>e.position};
`,gn=p.forwardRef(({as:e="div",...i},r)=>t.jsx(mn,{as:e,ref:r,...i}));gn.displayName="Box";function Ge({externalIcon:e=null,internalIcon:i=null,text:r,bgColor:n,onClick:o=()=>{},onMouseEnter:c=()=>{},onMouseLeave:l=()=>{},padding:h,color:w}){return t.jsx(bn,{bg:n,margin:"0 8px",radius:"25px",maxWidth:"fit-content",onMouseEnter:c,onMouseLeave:l,padding:h,children:t.jsx(wn,{hoverBG:"transparent",onClick:o,children:t.jsxs($,{color:w,children:[e&&t.jsx(ne,{children:e}),i&&t.jsx(yn,{children:i}),t.jsx(ne,{children:r})]})})})}const bn=s(ne)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`,wn=s(so)`
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
`,yn=s($)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`,fe={ens:{maintainer:"0x983110309620D911731Ac0932219af06091b6744",userjourneyyoutube:"https://www.youtube.com/embed/AmalyHBJ5Gw?controls=0&autoplay=1",userjourneyshort:"ens",article:"https://medium.com/ethereum-push-notification-service/epns-to-add-push-notifications-to-ens-decentralized-domain-name-services-a20f001a7234"},coindesk:{maintainer:"0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",userjourneyyoutube:"https://www.youtube.com/embed/z_RZgoYNH_Y?controls=0&autoplay=1",userjourneyshort:"coindesk",article:"https://medium.com/ethereum-push-notification-service/epns-and-coindesk-announce-media-push-notifications-1707b12884d"},snapshot:{maintainer:"0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c",userjourneyyoutube:"https://www.youtube.com/embed/AYy42D5oG20?controls=0&autoplay=1",userjourneyshort:"snapshot",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-snapshot-to-deliver-notifications-to-improve-community-governance-5730559cb84b"},makerdao:{maintainer:"0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",userjourneyyoutube:"https://www.youtube.com/embed/OxZ5H2vRnRc?controls=0&autoplay=1",userjourneyshort:"makerdao",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-makerdao-development-and-ux-core-unit-to-enable-push-notifications-for-protocol-53f777957d26"},cvi:{maintainer:"0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8",userjourneyyoutube:"https://www.youtube.com/embed/r_wXWfEWSM0?controls=0&autoplay=1",userjourneyshort:"cvi",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-cvi-crypto-volatility-index-to-enable-push-notifications-for-their-5ea662ee73a3"},bancor:{maintainer:"0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",userjourneyyoutube:"https://www.youtube.com/embed/SmoOX2JXx_4?controls=0&autoplay=1",userjourneyshort:"bancor",article:"https://medium.com/ethereum-push-notification-service/epns-integrates-with-bancor-network-to-facilitate-decentralized-push-notifications-d35b5e27d4a9"},oasisapp:{maintainer:"0x12b3eE60Df8ea26D03b8035Ec90434a38A82C4C7",userjourneyyoutube:"https://www.youtube.com/embed/7PPc6a3XUo4?controls=0&autoplay=1",userjourneyshort:"oasisapp",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-arrive-at-defi-on-oasis-app-770ae7ed1b"},mover:{maintainer:"0xb754601d2C8C1389E6633b1449B84CcE57788566",userjourneyyoutube:"https://www.youtube.com/embed/TX1acRPGovA?controls=0&autoplay=1",userjourneyshort:"mover",article:"https://medium.com/ethereum-push-notification-service/mover-integrates-with-epns-to-deliver-yield-harvesting-notifications-ab3bc9a6b26e"},poh:{maintainer:"0x327a29fcE0a6490E4236240Be176dAA282EcCfdF",userjourneyyoutube:"https://www.youtube.com/embed/_Urc35obsOQ?controls=0&autoplay=1",userjourneyshort:"poh",article:"https://medium.com/ethereum-push-notification-service/epns-joins-proof-of-humanity-to-enhance-the-user-experience-of-decentralized-self-sovereign-e734780c9840"},kyber:{maintainer:"0x91c9D4373B077eF8082F468C7c97f2c499e36F5b",userjourneyyoutube:"https://www.youtube.com/embed/EpTYdJMQxoU?controls=0&autoplay=1",userjourneyshort:"kyber",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-to-support-kybers-frictionless-liquidity-pools-4fe65746b39"},fabwelt:{maintainer:"0x361Cb6BE977d0113A33914A8f952Ced95747F793",userjourneyyoutube:"https://www.youtube.com/embed/kLyZ0DT?controls=0&autoplay=1",userjourneyshort:"fabwelt",article:"https://medium.com/ethereum-push-notification-service/fabwelt-partners-with-epns-to-bring-push-notifications-to-crypto-gaming-c247e70bb627"},banklessfr:{maintainer:"0xA8aF754379d8ae406dFbDD0D6c46324aD647243E",userjourneyyoutube:"https://www.youtube.com/embed/1mnLTslK_sY?controls=0&autoplay=1",userjourneyshort:"banklessfr",article:null},angle:{maintainer:"0xA2dEe32662F6243dA539bf6A8613F9A9e39843D3",userjourneyyoutube:null,userjourneyshort:"angle",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-angle-protocol-to-facilitate-push-notifications-for-users-af77cf4d3e2b"},mstable:{maintainer:"0xC30CE8F08BD8F667E65185310807Db937A5d6E53",userjourneyyoutube:null,userjourneyshort:"mstable",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-mstable-to-facilitate-decentralized-notifications-for-users-a3e6be14eecc"},aragon:{maintainer:"0x187a34c86aA6378333cE9033Aa34718D2CEdEd2C",userjourneyyoutube:"https://www.youtube.com/embed/PT90Zyi9A0g?controls=0&autoplay=1",userjourneyshort:"aragon",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-aragon-voice-to-power-unstoppable-decentralized-governance-56182b9d9aa0"},cryptomanga:{maintainer:"0x0B430A1651E6A64510afC97195040359941d0b23",userjourneyyoutube:null,userjourneyshort:"cryptomanga",article:"https://medium.com/ethereum-push-notification-service/epns-x-cryptomanga-decentralized-communication-for-decentralized-gaming-d296956afdeb"},dydx:{maintainer:"0x23c6b8fB0557FD5e6696BceF3fD4855E0d7018C0",userjourneyyoutube:"https://www.youtube.com/embed/oXgNlebVUAo?controls=0&autoplay=1",userjourneyshort:"dydx",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-dydx-foundation-to-enable-notifications-for-governance-updates-5794a5e22c4d"},idle:{maintainer:"0xFb3bD022D5DAcF95eE28a6B07825D4Ff9C5b3814",userjourneyyoutube:"https://www.youtube.com/embed/08bBRIzRcok?controls=0&autoplay=1",userjourneyshort:"idle",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-idle-to-enable-push-notifications-for-governance-updates-32e142ed2f33"},tracerdao:{maintainer:"0x8bf25240402C126bb236d26D391b782c5c893D32",userjourneyyoutube:"https://www.youtube.com/embed/Pw5zjKmQLFg?controls=0&autoplay=1",userjourneyshort:"tracerdao",article:"https://medium.com/ethereum-push-notification-service/epns-brings-push-notifs-to-tracer-dao-governance-91f7b9a9ddcc"},armor:{maintainer:"0x5aFeDeF166bd626B3043cb1D53e16EA9BF863E06",userjourneyyoutube:"https://www.youtube.com/embed/AMW9Xf0Rc2Y?controls=0&autoplay=1",userjourneyshort:"armor",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-armor-to-enable-push-notifications-for-its-users-daa70b4f172d"},pods:{maintainer:"0xb4F88Ad000A53638F203dcA2C39828a58057d53c",userjourneyyoutube:"https://www.youtube.com/embed/Ink21CE_RzM?controls=0&autoplay=1",userjourneyshort:"pods",article:"https://medium.com/ethereum-push-notification-service/epns-inks-partnership-with-options-protocol-pods-finance-e5adcd2d5821"},ooki:{maintainer:"0x9B43a385E08EE3e4b402D4312dABD11296d09E93",userjourneyyoutube:"https://www.youtube.com/embed/vGu--SUV4l4?controls=0&autoplay=1",userjourneyshort:"ooki",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-bzx-to-deliver-crucial-margin-trading-push-notifications-to-wallets-a2f52e4fcefe"},pushgov:{maintainer:"0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08",userjourneyyoutube:"https://www.youtube.com/embed/vvDlJttgQgQ?controls=0&autoplay=1",userjourneyshort:"pushgov",article:"https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4"},symphony:{maintainer:"0xd32908F63713F514aDDBE3962A2dE7112fdCD4A7",userjourneyyoutube:"https://www.youtube.com/embed/FtadeuLSPmE?controls=0&autoplay=1",userjourneyshort:"symphony",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-symphony-finance-to-facilitate-push-notifications-for-limit-order-c6f27bf8e02a"},ethtracker:{maintainer:"0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethtracker",article:null},ethpricetracker:{maintainer:"0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethpricetracker",article:null},btctracker:{maintainer:"0x03EAAAa48ea78d1E66eA3458364d553AD981871E",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"btctracker",article:null},aave:{maintainer:"0xAA940b3501176af328423d975C350d0d1BaAae50",userjourneyyoutube:"https://www.youtube.com/embed/YKflQ8eADFg?controls=0&autoplay=1",userjourneyshort:"aave",article:"https://medium.com/ethereum-push-notification-service/epns-x-aave-protection-against-asset-liquidation-f33be395ef87"},gro:{maintainer:"0x3c1F2E6Ec3De7811E2daa2B8E132CdCd8e39851c",userjourneyyoutube:null,userjourneyshort:"gro",article:"https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-4371ef89bc91"},flipside:{maintainer:"0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F",userjourneyyoutube:null,userjourneyshort:"flipside",article:"https://medium.com/ethereum-push-notification-service/epns-and-flipside-crypto-join-forces-to-facilitate-push-notifications-for-users-58df98b7aba7"},thedefiant:{maintainer:"0x46b676303ebC5699BF47e416677A57A89c70a015",userjourneyyoutube:null,userjourneyshort:"thedefiant",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-the-defiant-to-bring-defi-news-directly-to-users-wallets-8b4896d674bb"}},vn=e=>{let i=!1;return Object.entries(fe).forEach(([r,n])=>{if(fe[r].maintainer===e){i=!0;return}}),i},jn=({addr:e,bgColor:i,loadTeaser:r,playTeaser:n})=>{const o=pe(),[c,l]=he.useState(!1),h=(w=>{let d=null;return Object.entries(fe).forEach(([f,m])=>{if(fe[f].maintainer===w){d=fe[f];return}}),d})(e);return t.jsxs(L,{flex:"initial",onMouseEnter:()=>{l(!0),console.debug("enter")},onMouseLeave:()=>{l(!1),console.debug("exit")},zIndex:"9",children:[c&&t.jsx(L,{position:"absolute",width:"280px",bottom:"0px",padding:"0px 0px 40px 0px",children:t.jsxs(Sn,{bg:o.backgroundBG,padding:"10px",border:`1px solid ${o.borderBg}`,children:[h.userjourneyshort&&t.jsxs(L,{children:[t.jsx($,{bg:o.viewChannelTutsTitleBg,color:"#fff",padding:"4px 10px",margin:"0px 0px 10px 0px",self:"flex-end",spacing:"0.1em",textTransform:"uppercase",size:"bold",children:"Opt-in to enable"}),t.jsx(Q,{src:`./tuts/${h.userjourneyshort}/${h.userjourneyshort}_${o.scheme}.png`,srcSet:`./tuts/${h.userjourneyshort}/${h.userjourneyshort}_${o.scheme}@2x.png 2x, ./tuts/${h.userjourneyshort}/${h.userjourneyshort}_${o.scheme}@3x.png 3x`,alt:`${h.alt}`})]}),t.jsxs(ne,{padding:"10px 0px 0px 0px",justify:"space-between",self:"stretch",children:[h.userjourneyyoutube&&t.jsxs(Zt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{l(!1),r(h.userjourneyyoutube),n(!0)},children:[t.jsx($,{margin:"0px 5px 0px 0px",weight:"bold",color:"#fff",children:"User Journey"}),t.jsx(lo,{size:"20px"})]}),h.article&&t.jsx(Zt,{bg:o.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{l(!1),window.open(`${h.article}`,"_blank")},children:t.jsx(co,{size:"20px"})})]})]})}),t.jsx(Ge,{internalIcon:t.jsx(Re,{filter:o.snackbarBorderIcon,width:"fit-content",src:O("svg/view-tutorial-icon.svg")}),text:"Tutorial",bgColor:i,color:o.viewChannelPrimaryText,padding:"6px 16px"})]})},Sn=s(L)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`,lt="data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.25%2011.25H8.75V6.75H7.25V11.25ZM8%205.25C8.2125%205.25%208.39075%205.178%208.53475%205.034C8.67825%204.8905%208.75%204.7125%208.75%204.5C8.75%204.2875%208.67825%204.10925%208.53475%203.96525C8.39075%203.82175%208.2125%203.75%208%203.75C7.7875%203.75%207.6095%203.82175%207.466%203.96525C7.322%204.10925%207.25%204.2875%207.25%204.5C7.25%204.7125%207.322%204.8905%207.466%205.034C7.6095%205.178%207.7875%205.25%208%205.25ZM8%2015C6.9625%2015%205.9875%2014.803%205.075%2014.409C4.1625%2014.0155%203.36875%2013.4813%202.69375%2012.8063C2.01875%2012.1313%201.4845%2011.3375%201.091%2010.425C0.697%209.5125%200.5%208.5375%200.5%207.5C0.5%206.4625%200.697%205.4875%201.091%204.575C1.4845%203.6625%202.01875%202.86875%202.69375%202.19375C3.36875%201.51875%204.1625%200.98425%205.075%200.59025C5.9875%200.19675%206.9625%200%208%200C9.0375%200%2010.0125%200.19675%2010.925%200.59025C11.8375%200.98425%2012.6313%201.51875%2013.3063%202.19375C13.9813%202.86875%2014.5155%203.6625%2014.909%204.575C15.303%205.4875%2015.5%206.4625%2015.5%207.5C15.5%208.5375%2015.303%209.5125%2014.909%2010.425C14.5155%2011.3375%2013.9813%2012.1313%2013.3063%2012.8063C12.6313%2013.4813%2011.8375%2014.0155%2010.925%2014.409C10.0125%2014.803%209.0375%2015%208%2015Z'%20fill='%23BAC4D6'/%3e%3c/svg%3e",En=({settings:e,optInHandler:i})=>{const[r,n]=p.useState([...e]),[o,c]=p.useState(!1),l=pe(),h=(d,f)=>{const m=[...r];m[d].default=f,n(m)},w=d=>{const f=[...r];if(f[d].type===1){const m=f[d];m.default=!m.default}else{const m=f[d];m.enabled=!m.enabled}n(f)};return t.jsxs(kn,{children:[r.map((d,f)=>t.jsxs(Tn,{hasBottomBorder:f!==e.length-1,children:[t.jsxs($n,{children:[t.jsx(ie,{color:l.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:d.description}),t.jsx(ho,{onChange:()=>w(f),checked:d.type===1?d.default:d.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),d.type===2&&d.enabled===!0&&t.jsxs(ct,{children:[t.jsx(ie,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:d.default}),t.jsx(Go,{val:d.default,max:d.upperLimit,min:d.lowerLimit,step:d.ticker||1,defaultVal:d.default,onChange:({x:m})=>h(f,m)})]}),d.type===3&&d.enabled===!0&&t.jsxs(ct,{children:[t.jsxs(ie,{color:l.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[d.default.lower," - ",d.default.upper]}),t.jsx(Vo,{startVal:d.default.lower,endVal:d.default.upper,max:d.upperLimit,min:d.lowerLimit,step:d.ticker||1,defaultStartVal:d.default.lower,defaultEndVal:d.default.upper,onChange:({startVal:m,endVal:v})=>h(f,{lower:m,upper:v})})]})]},f)),t.jsxs(An,{children:[t.jsx(ie,{color:l.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),t.jsxs(Bn,{onClick:()=>i({channelSettings:r,setLoading:c}),children:[o&&t.jsx(q,{type:ee.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&t.jsx(_n,{hideIt:o,children:"Opt-in"})]})]})]})},Cn=e=>{const{children:i,channelDetail:r,setLoading:n,onSuccessOptin:o}=e,{chainId:c,provider:l,account:h,wallet:w}=et();U(B=>B.user);const[d,f]=p.useState(!1),m=tt(),{handleConnectWallet:v,connectWallet:S}=p.useContext(po),_=c===H.coreContractChain,D=p.useMemo(()=>r&&(r!=null&&r.channel_settings)?JSON.parse(r==null?void 0:r.channel_settings):null,[r]),g=()=>{f(!d)},I=()=>{f(!1)},k=Xt(),N=async({channelSettings:B,setLoading:T})=>{var a;const K=T||e&&e.setLoading||(()=>{});K(!0);let R=h,Z=l;if(!(((a=w==null?void 0:w.accounts)==null?void 0:a.length)>0)){const j=await S();R=j.accounts[0].address,Z=new uo(j.provider,"any")}try{let j=r.channel;_||(j=r.alias_address),k.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const P=await(Z==null?void 0:Z.getSigner(R)),X=Po({settings:B}),E=zo(X);await xo.channels.subscribeV2({signer:P,channelAddress:nt(j,c),userAddress:nt(R,c),settings:E,onSuccess:()=>{m(fo({channelAddress:j,status:!0})),m(mo({channelAddress:j,settings:Uo({channelSetting:B})})),k.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:G=>t.jsx(Pe,{size:G,color:"green"})})},onError:()=>{console.error("opt in error"),k.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:G=>t.jsx(Se,{size:G,color:"red"})})},env:H.pushNodesEnv})}catch(j){k.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${j.message} )`,toastType:"ERROR",getToastIcon:P=>t.jsx(Se,{size:P,color:"red"})}),console.error(j)}finally{K(!1)}};return D&&D.length?t.jsx(Ro,{centerOnMobile:!0,showDropdown:d,toggleDropdown:g,closeDropdown:I,renderDropdownContainer:t.jsx(En,{settings:D,optInHandler:N}),containerPadding:"0px 16px 16px 16px",children:i}):t.jsx(ie,{onClick:N,children:i})},kn=s.div`
  min-width: 300px;
`,Tn=s.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&de`
      border-bottom: 1px solid ${i=>i.theme.settingsModalBorderBottomColor};
    `}
`,$n=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,An=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Bn=s.button`
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
  ${e=>e.disabled&&de`
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
`,_n=s.span`
  ${e=>e.hideIt&&de`
      visibility: hidden;
    `};
`,dt=({channelName:e,channelDescription:i,channelLogoSrc:r,height:n})=>t.jsxs(Dn,{style:{borderRadius:n<250?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(Mn,{children:"Channel was recently updated"}),t.jsx(Fn,{children:"Previously"}),t.jsxs(Ln,{children:[t.jsx(On,{children:t.jsx(Nn,{src:r})}),t.jsxs(In,{children:[t.jsx(Rn,{children:e}),t.jsx(Pn,{children:i})]})]})]}),Dn=s(ue)`
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


`,Mn=s(Ee)`
  color: ${e=>e.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Fn=s(Ee)`
  color: ${e=>e.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`,Ln=s(Yt)`
  align-items: center;
  margin-top:8px;
`,On=s(Yt)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`,Nn=s(Re)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${e=>`0.5px solid ${e.theme.tooltipIconBorderClr}`};
`,In=s(ue)`
  align-items: flex-start;
`,Rn=s(Ee)`
  color: ${e=>e.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`,Pn=s(Ee)`
  color: ${e=>e.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`,pt=({verifierIcon:e,verifierName:i,height:r})=>{const n=(i==null?void 0:i.length)>15?i.substring(0,15)+"...":i;return t.jsxs(zn,{style:{width:212+(n&&n.length*2)+"px",borderRadius:r<160?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[t.jsx(ht,{children:"Verified By:"}),t.jsx(Un,{src:e}),t.jsx(ht,{children:n})]})},zn=s(ue)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`,ht=s(Ee)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`,Un=s.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;function ut({channelObjectProp:e,loadTeaser:i,playTeaser:r,minimal:n,profileType:o}){var Jt,Kt;const c=tt(),l=pe();U(x=>x.userJourney);const{userPushSDKInstance:h}=U(x=>x.user),{epnsReadProvider:w,epnsWriteProvider:d,epnsCommReadProvider:f,pushAdminAddress:m,ZERO_ADDRESS:v}=U(x=>x.contracts),{canVerify:S,channelDetails:_,coreChannelAdmin:D}=U(x=>x.admin),{channelsCache:g,CHANNEL_BLACKLIST:I,CHANNEL_ACTIVE_STATE:k,subscriptionStatus:N,userSettings:B}=U(x=>x.channels),{account:T,provider:K,chainId:R}=et(),Z=R===H.coreContractChain,[a,j]=p.useState(e),[P,X]=p.useState(!1),[E,G]=p.useState(!1),[Ye,se]=p.useState(0),[we,De]=p.useState(!1),[u,y]=p.useState(!1),[M,ye]=p.useState(!1),[V,Gi]=p.useState(!1),[Vi,Zo]=p.useState(!1),[F,Ht]=p.useState(null),[Ji,Qe]=p.useState(a.channel),[Y,Ki]=p.useState(0),[Me,Xo]=p.useState({}),[z,Zi]=p.useState({}),[Wt,Xi]=p.useState(!1),Fe=a.verified_status,Yi=a.blocked,qe=Qt(600),Gt=Qt(500),ve=a.activation_status,je=qt(),Qi=I.includes(a.channel),[Le,qi]=p.useState(null),Vt=()=>qi(null);p.useEffect(()=>{X(N[a.channel])},[N]),p.useEffect(()=>{De(m==T)},[m,T]);const eo=async()=>{try{return await vo.getInstance().getChannelJsonStartBlockAsync(a.channel)}catch(x){console.error(x)}};p.useEffect(()=>{a.channel&&async function(){const x=await eo();x&&Zi(x)}()},[a.channel]),p.useEffect(()=>{if(Me&&z){if(Object.keys(Me).length==0||Object.keys(z).length==0)return;let x=!1;["name","icon","info"].forEach(b=>{Me[b]!=z[b]&&(x=!0)}),Xi(x)}},[Me,z]),p.useEffect(()=>{!a||!a.channel||!h||async function(){var x;if(se(a.subscriber_count),!a.verified_status)G(!1);else try{let b=null;if(b=(await w.channels(a.channel)).verifiedBy,g[b])Ht(g[b]);else{let C={};bo((x=wo)==null?void 0:x.pushChannelAdmin,b)?C={name:"Push Admin",icon:"./logo192.png"}:C=await h.channel.info(nt(b,H.coreContractChain)),c(yo({address:b,meta:C})),Ht(C)}}catch(b){console.error("Error fetching channel information:",b)}finally{G(!1)}}()},[T,a,h]);let le;Z?le=a.channel==T:le=a.alias_address==T,p.useEffect(()=>{Le&&Vt()},[Le]),f==null||f.address;const ce=Xt(),to=p.useMemo(()=>Mo(B),[B]),no=x=>x.length>40?`${jo(x,4,6)}`:x,io=()=>{y(!0),d.verifyChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),ce.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:b=>t.jsx(Pe,{size:b,color:"green"})}),await x.wait(1),console.info("Transaction Mined!"),setIsVerified(!0)}).catch(x=>{console.error("!!!Error verifyChannel() --> %o",x),ce.showMessageToast({toastTitle:"Error",toastMessage:"There was an error verifying the channel",toastType:"ERROR",getToastIcon:b=>t.jsx(Se,{size:b,color:"red"})})}).finally(()=>{y(!1)})},oo=()=>{y(!0),d.unverifyChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),ce.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:b=>t.jsx(Pe,{size:b,color:"green"})}),await x.wait(1),console.info("Transaction Mined!"),setIsVerified(!1)}).catch(x=>{console.error("!!!Error handleSendMessage() --> %o",x),ce.showMessageToast({toastTitle:"Error",toastMessage:"There was an error unverifying the channel",toastType:"ERROR",getToastIcon:b=>t.jsx(Se,{size:b,color:"red"})})}),y(!1)},ro=()=>{ye(!0),d.blockChannel(a.channel).then(async x=>{console.debug(x),console.info("Transaction Sent!"),ce.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:b=>t.jsx(Pe,{size:b,color:"green"})}),await x.wait(1),console.info("Transaction Mined!")}).catch(x=>{console.error("!!!Error handleSendMessage() --> %o",x),ce.showMessageToast({toastTitle:"Error",toastMessage:"There was an error blocking the channel",toastType:"ERROR",getToastIcon:b=>t.jsx(Se,{size:b,color:"red"})})}).finally(()=>{ye(!1),setIsBlocked(!0)})},ao=x=>{const b=Oe(x,!0);if(navigator&&navigator.clipboard)navigator.clipboard.writeText(b);else{const C=document.createElement("textarea");C.value=b,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C)}},Oe=(x,b)=>{let C=`${rt.Channels}/${x}`;if(b){let Ie=window.location.hostname;Ie==="localhost"&&(Ie=Ie+":3000"),C=`${Ie}${C}`}return C};if(Yi)return t.jsx(t.Fragment,{});if(Qi)return t.jsx(t.Fragment,{});const Ne=x=>{var C;const b=(C=document.getElementById(a==null?void 0:a.channel))==null?void 0:C.getBoundingClientRect();Ki(b==null?void 0:b.top)};return t.jsxs(Wn,{id:a.channel,minimal:n,border:o=="Profile"?"none":`1px solid ${n?"transparent":l.default.border}`,children:[qe&&t.jsxs(Gn,{children:[t.jsx(gt,{minimal:n,children:t.jsx(mt,{children:t.jsx(ft,{minimal:n,children:E?t.jsx(J,{color:l.interfaceSkeleton,height:"100%"}):t.jsx(xt,{src:`${a.iconV2?a.iconV2:a.icon}`})})})}),!n&&t.jsx(wt,{children:E?t.jsx(J,{color:l.interfaceSkeleton,width:"50%",height:24}):t.jsx(yt,{children:t.jsxs(Jn,{children:[t.jsxs($,{children:[Wt&&t.jsx(ze,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Y<250?{background:"none",top:"20px",left:Gt?"-100px":"5px"}:{background:"none",bottom:"25px",left:Gt?"-100px":"5px"},tooltipContent:t.jsx(dt,{height:Y,channelName:z.name,channelDescription:z.info,channelLogoSrc:z.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ne(a.channel)},children:t.jsx(bt,{src:lt})})}),t.jsx($,{onClick:()=>{je(Oe(a.channel,!1))},children:a.name})]}),Fe==1&&t.jsxs($,{margin:"3px 5px 0px",style:{display:"flex"},children:[t.jsx(ze,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Y<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(pt,{height:Y,verifierIcon:F==null?void 0:F.icon,verifierName:F==null?void 0:F.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ne(a.channel)},children:t.jsx(sn,{size:18,color:l.viewChannelVerifiedBadge})})}),a&&(a==null?void 0:a.channel)&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(Q,{src:O("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),a&&(a==null?void 0:a.alias_address)!=null&&(a==null?void 0:a.alias_address)!="NULL"&&H.allowedNetworks.includes(+(a==null?void 0:a.alias_blockchain_id))&&!it[+(a==null?void 0:a.alias_blockchain_id)][a==null?void 0:a.channel]&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(Q,{src:O(`svg/${(Kt=(Jt=Ue[+a.alias_blockchain_id])==null?void 0:Jt.label)==null?void 0:Kt.split(" ")[0]}.svg`),alt:"Polygon",width:"20px",height:"20px"})})]})]})})})]}),!qe&&t.jsx(t.Fragment,{children:t.jsx(gt,{minimal:n,onClick:()=>{je(Oe(a.channel,!1))},children:t.jsx(mt,{children:t.jsx(ft,{children:E?t.jsx(J,{color:l.interfaceSkeleton,height:"100%"}):t.jsx(xt,{src:`${a.iconV2?a.iconV2:a.icon}`})})})})}),!n&&t.jsxs(Vn,{children:[!qe&&t.jsx(wt,{children:E?t.jsx(J,{color:l.interfaceSkeleton,width:"50%",height:24}):t.jsx(yt,{children:t.jsxs($,{style:{display:"flex",alignItems:"center"},children:[Wt&&t.jsx(ze,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Y<250?{background:"none",top:"20px",left:"5px"}:{background:"none",bottom:"25px",left:"5px"},tooltipContent:t.jsx(dt,{height:Y,channelName:z.name,channelDescription:z.info,channelLogoSrc:z.icon}),children:t.jsx("div",{onMouseEnter:()=>{Ne(a.channel)},style:{cursor:"pointer"},children:t.jsx(bt,{src:lt})})}),t.jsx($,{onClick:()=>{je(Oe(a.channel,!1))},children:a.name}),Fe==1&&t.jsx($,{margin:"3px 5px 0px",style:{display:"flex"},children:t.jsx(ze,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:Y<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:t.jsx(pt,{height:Y,verifierIcon:F==null?void 0:F.icon,verifierName:F==null?void 0:F.name}),children:t.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{Ne(a.channel)},children:t.jsx(sn,{size:18,color:l.viewChannelVerifiedBadge})})})}),a&&(a==null?void 0:a.channel)&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(Q,{src:O("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),a&&(a==null?void 0:a.alias_address)!=null&&(a==null?void 0:a.alias_address)!="NULL"&&H.allowedNetworks.includes(+(a==null?void 0:a.alias_blockchain_id))&&!it[+(a==null?void 0:a.alias_blockchain_id)][a==null?void 0:a.channel]&&t.jsx($,{padding:"0 0 0 5px",children:t.jsx(Q,{src:O(`svg/${ot[+a.alias_blockchain_id]}`),alt:"Alias Chain Logo",width:"20px",height:"20px"})})]})})}),t.jsx(Kn,{children:E?t.jsxs(t.Fragment,{children:[t.jsx(ke,{atH:5,atW:100,children:t.jsx(J,{color:l.interfaceSkeleton,width:"100%",height:5})}),t.jsx(ke,{atH:5,atW:100,children:t.jsx(J,{color:l.interfaceSkeleton,width:"100%",height:5})}),t.jsx(ke,{atH:5,atW:100,children:t.jsx(J,{color:l.interfaceSkeleton,width:"40%",height:5})})]}):t.jsx(Zn,{children:a.info})}),t.jsx(Xn,{children:E?t.jsx(t.Fragment,{children:t.jsx(ke,{atH:10,atW:30,marginBottom:"0",children:t.jsx(J,{color:l.interfaceSkeleton})})}):t.jsx(ne,{align:"center",justify:"flex-start",margin:"0px -5px",children:t.jsxs(Yn,{children:[t.jsx(Ge,{externalIcon:t.jsx(Q,{src:O("svg/users.svg"),alt:"users",width:"14px",height:"14px"}),internalIcon:null,text:Ye,padding:"5.3px 10px",bgColor:l.viewChannelSecondaryBG,color:l.viewChannelSecondaryText}),t.jsx(Ge,{text:no(Ji),bgColor:l.viewChannelSearchBg,padding:"6px 16px",color:l.viewChannelPrimaryText,onClick:()=>{ao(a.channel),Qe("copied")},onMouseEnter:()=>{Qe("click to copy")},onMouseLeave:()=>{Qe(a.channel)}}),o==="Profile"&&t.jsxs(ni,{active:ve,children:[ve===0&&t.jsx(Re,{width:"12px",src:Oo,margin:"0 5px 2px 0px",height:"30px"}),ve===1?"Active":"Deactivated"]}),vn(a.channel)&&t.jsx(jn,{addr:a.channel,bgColor:l.viewChannelSearchBg,loadTeaser:i,playTeaser:r})]})})})]}),!!T&&!!K&&!n&&t.jsxs(t.Fragment,{children:[t.jsx(Qn,{}),t.jsxs(qn,{children:[E&&t.jsx(ei,{children:t.jsx(J,{color:l.interfaceSkeleton})}),!E&&we&&o=="Channel"&&t.jsxs(Ve,{onClick:ro,disabled:M,children:[M&&t.jsx(ge,{children:t.jsx(q,{type:ee.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:M,children:"Block channel"})]}),!E&&(we||S)&&!Fe&&o=="Channel"&&t.jsxs(Ve,{onClick:io,disabled:u,children:[u&&t.jsx(ge,{children:t.jsx(q,{type:ee.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:u,children:"Verify Channel"})]}),!E&&(we||Vi)&&Fe&&o=="Channel"&&t.jsxs(jt,{onClick:oo,disabled:u,children:[u&&t.jsx(ge,{children:t.jsx(q,{type:ee.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:u,children:"Unverify Channel"})]}),!E&&!P&&t.jsxs(t.Fragment,{children:[le&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(Et,{onClick:()=>je("/dashboard"),children:"Go To Dashboard"}):t.jsx(St,{disabled:!0,children:"Owner"})}),!le&&ve!==0&&t.jsx(Cn,{channelDetail:a,setLoading:Gi,onSuccessOptin:()=>{X(!0),se(x=>x+1)},children:t.jsxs(Ve,{onClick:()=>{},disabled:V,className:"optin",children:[V&&t.jsx(ge,{children:t.jsx(q,{type:ee.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:V,children:"Opt-In"})]})})]}),!E&&P&&ve!==0&&t.jsxs(t.Fragment,{children:[le&&t.jsx(t.Fragment,{children:o=="Profile"?t.jsx(Et,{onClick:()=>je("/dashboard"),children:"Go To Dashboard"}):t.jsx(St,{disabled:!0,children:"Owner"})}),!le&&t.jsx(Ho,{centerOnMobile:!0,channelDetail:a,setSubscribed:X,userSetting:to[a.channel],setSubscriberCount:se,onSuccessOptout:()=>{X(!1),se(x=>x-1)},children:t.jsxs(jt,{onClick:()=>{},disabled:V,children:[V&&t.jsx(ge,{children:t.jsx(q,{type:ee.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),t.jsx(me,{hideit:V,children:"Manage"}),t.jsx(Re,{alt:"arrow",src:O("svg/arrow.svg"),height:"10px",width:"12px"})]})})]})]})]}),Le&&t.jsx(No,{notification:Le,clearToast:Vt})]},a.channel)}const Hn=s.div`
  display: flex;
`;s(Hn)`
  flex-direction: column;
`;const Wn=s.div`
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
`,gt=s(go)`
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
`,Gn=s.div`
  display: flex;
`,bt=s.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,Vn=s.div`
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
`;const wt=s(ne)`
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
`,Jn=s($)`
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
`;const Kn=s.div`
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
`,Zn=s.label`
  flex: 1;
  line-height: 165%;
  color: ${e=>e.theme.viewChannelPrimaryTextColor};
`,Xn=s.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,Yn=s.div`
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
  @media ${He.laptopL} {
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
`;const Qn=s.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${He.tablet} {
    display: block;
  }
`,qn=s.div`
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
  ${e=>e.disabled&&de`
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

  ${e=>e.hideit&&de`
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
`,ei=s.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Ve=s(Te)`
  background: #e20880;
  color: #fff;
  border-radius: 8px;
  padding: 0px;
  min-height: 36px;
  min-width: 108px;
`,jt=s(Te)`
  background: transparent;
  color: ${e=>e.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`,St=s(Te)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`,Et=s(Te)`
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
`;const ti=s.div`
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
`,ni=s(ti)`
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
`,ii=20,oi=({channelID:e,loadTeaser:i,playTeaser:r,minimal:n,profileType:o})=>{const{userPushSDKInstance:c}=U(g=>g.user),l=pe(),[h,w]=p.useState(!0),[d,f]=p.useState(!0),[m,v]=p.useState([]),[S,_]=p.useState(null),D=qt();return p.useEffect(()=>{_(null),c&&(w(!0),(async()=>{try{const g=await c.channel.info(e);_(g),w(!1)}catch(g){console.log("Error",g),w(!1)}})())},[e,c]),p.useEffect(()=>(c&&(w(!0),c.channel.notifications(e,{page:1,limit:ii}).then(g=>{console.log(g),v(g.notifications),f(!1)}).catch(g=>{console.error("Error >>>>",g),f(!1)})),()=>{v([]),f(!0)}),[e,c]),t.jsxs(ri,{children:[t.jsx(ai,{flex:"initial",alignItems:"flex-start",padding:"0px",children:t.jsx(cn,{onClick:()=>{D(rt.Channels)}})}),t.jsxs(t.Fragment,{children:[S&&!h&&t.jsx(ut,{channelObjectProp:S,loadTeaser:i,playTeaser:r,minimal:n,profileType:o}),!h&&t.jsxs(ci,{children:[t.jsx(ie,{fontSize:"20px",fontWeight:"500",color:l.color,children:"Recent Notifications"}),t.jsx(di,{color:l.color,children:"Showing preview of the latest non-encrypted notifications sent by the channel."})]}),t.jsxs(li,{children:[d&&t.jsx(q,{type:ee.SEAMLESS,spinnerSize:40}),!m.length&&!d&&t.jsx("div",{style:{textAlign:"center"},children:t.jsx(an,{title:"You currently have no notifications, try subscribing to some channels."})}),m.map((g,I)=>{const k=g.message.payload;return t.jsx(si,{children:t.jsx(So,{notificationTitle:k.title,notificationBody:k.body,cta:k.cta,image:k.embed,app:g.channel.name,icon:g.channel.icon,url:g.channel.url,chainName:g.source,theme:l.scheme})},`${g.payload_id}`)})]})]})]})},ri=s.div`
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
`,ai=s(ue)`
  @media ${Ce.tablet} {
    position: absolute;
    z-index: 1;
    padding: 10px;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
  }
`,si=s.div``,li=s(ue)`
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
`,ci=s(ue)`
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  align-items: baseline;
  margin: 7px 20px 24px 5px;
`,di=s(ie)`
  font-size: 0.8em;
`;var pi=!!(typeof window<"u"&&window.document&&window.document.createElement);function hi(){if(!pi||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){function n(){e=!0}return n}()}),r=function(){};window.addEventListener("testPassiveEventSupport",r,i),window.removeEventListener("testPassiveEventSupport",r,i)}catch{}return e}var Je=void 0;function ui(){return Je===void 0&&(Je=hi()),Je}function xi(e){if(e)return ui()?e:!!e.capture}function fi(e){if(!e)return 0;if(e===!0)return 100;var i=e.capture<<0,r=e.passive<<1,n=e.once<<2;return i+r+n}function Ct(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function $e(e){this.target=e,this.events={}}$e.prototype.getEventHandlers=function(){function e(i,r){var n=String(i)+" "+String(fi(r));return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]}return e}(),$e.prototype.handleEvent=function(){function e(i,r,n){var o=this.getEventHandlers(i,r);o.handlers=o.nextHandlers,o.handlers.forEach(function(c){c&&c(n)})}return e}(),$e.prototype.add=function(){function e(i,r,n){var o=this,c=this.getEventHandlers(i,n);Ct(c),c.nextHandlers.length===0&&(c.handleEvent=this.handleEvent.bind(this,i,n),this.target.addEventListener(i,c.handleEvent,n)),c.nextHandlers.push(r);var l=!0,h=function(){function w(){if(l){l=!1,Ct(c);var d=c.nextHandlers.indexOf(r);c.nextHandlers.splice(d,1),c.nextHandlers.length===0&&(o.target&&o.target.removeEventListener(i,c.handleEvent,n),c.handleEvent=void 0)}}return w}();return h}return e}();var Ke="__consolidated_events_handlers__";function kt(e,i,r,n){e[Ke]||(e[Ke]=new $e(e));var o=xi(n);return e[Ke].add(i,r,o)}function mi(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function gi(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function bi(e,i,r){return i&&gi(e.prototype,i),e}function wi(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&Ze(e,i)}function Ae(e){return Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},Ae(e)}function Ze(e,i){return Ze=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},Ze(e,i)}function yi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function vi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ji(e,i){return i&&(typeof i=="object"||typeof i=="function")?i:vi(e)}function Si(e){var i=yi();return function(){var r=Ae(e),n;if(i){var o=Ae(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ji(this,n)}}function Ei(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function Ci(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function Tt(e,i){var r=Ci(e);if(typeof r=="number")return r;var n=Ei(e);if(typeof n=="number")return n*i}var Be="above",oe="inside",_e="below",Xe="invisible";function $t(e){return typeof e.type=="string"}var ki=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function Ti(e,i){if(e&&!$t(e)&&!i)throw new Error(ki)}function $i(e){return e.viewportBottom-e.viewportTop===0?Xe:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?oe:e.viewportBottom<e.waypointTop?_e:e.waypointTop<e.viewportTop?Be:Xe}var re,be=[];function At(e){be.push(e),re||(re=setTimeout(function(){re=null;for(var r;r=be.shift();)r()},0));var i=!0;return function(){if(i){i=!1;var r=be.indexOf(e);r!==-1&&(be.splice(r,1),!be.length&&re&&(clearTimeout(re),re=null))}}}function Ai(e){return e==="window"?globalThis.window:e}let Bt;Bt={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},W=function(e){wi(r,e);var i=Si(r);function r(n){var o;return mi(this,r),o=i.call(this,n),o.refElement=function(c){o._ref=c},o}return bi(r,[{key:"componentDidMount",value:function(){var n=this;r.getWindow()&&(this.cancelOnNextTick=At(function(){n.cancelOnNextTick=null;var o=n.props,c=o.children;o.debug,Ti(c,n._ref),n._handleScroll=n._handleScroll.bind(n),n.scrollableAncestor=n._findScrollableAncestor(),n.scrollEventListenerUnsubscribe=kt(n.scrollableAncestor,"scroll",n._handleScroll,{passive:!0}),n.resizeEventListenerUnsubscribe=kt(window,"resize",n._handleScroll,{passive:!0}),n._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var n=this;r.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=At(function(){n.cancelOnNextTick=null,n._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){r.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var n=this.props,o=n.horizontal,c=n.scrollableAncestor;if(c)return Ai(c);for(var l=this._ref;l.parentNode;){if(l=l.parentNode,l===document.body)return window;var h=window.getComputedStyle(l),w=o?h.getPropertyValue("overflow-x"):h.getPropertyValue("overflow-y"),d=w||h.getPropertyValue("overflow");if(d==="auto"||d==="scroll"||d==="overlay")return l}return window}},{key:"_handleScroll",value:function(n){if(this._ref){var o=this._getBounds(),c=$i(o),l=this._previousPosition,h=this.props;h.debug;var w=h.onPositionChange,d=h.onEnter,f=h.onLeave,m=h.fireOnRapidScroll;if(this._previousPosition=c,l!==c){var v={currentPosition:c,previousPosition:l,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};w.call(this,v),c===oe?d.call(this,v):l===oe&&f.call(this,v);var S=l===_e&&c===Be,_=l===Be&&c===_e;m&&(S||_)&&(d.call(this,{currentPosition:oe,previousPosition:l,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),f.call(this,{currentPosition:c,previousPosition:oe,event:n,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}}},{key:"_getBounds",value:function(){var n=this.props,o=n.horizontal;n.debug;var c=this._ref.getBoundingClientRect(),l=c.left,h=c.top,w=c.right,d=c.bottom,f=o?l:h,m=o?w:d,v,S;this.scrollableAncestor===window?(v=o?window.innerWidth:window.innerHeight,S=0):(v=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,S=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var _=this.props,D=_.bottomOffset,g=_.topOffset,I=Tt(g,v),k=Tt(D,v),N=S+v;return{waypointTop:f,waypointBottom:m,viewportTop:S+I,viewportBottom:N-k}}},{key:"render",value:function(){var n=this,o=this.props.children;if(!o)return he.createElement("span",{ref:this.refElement,style:{fontSize:0}});if($t(o)||Eo.isForwardRef(o)){var c=function(l){n.refElement(l),o.ref&&(typeof o.ref=="function"?o.ref(l):o.ref.current=l)};return he.cloneElement(o,{ref:c})}return he.cloneElement(o,{innerRef:this.refElement})}}]),r}(he.PureComponent),W.above=Be,W.below=_e,W.inside=oe,W.invisible=Xe,W.getWindow=function(){if(typeof window<"u")return window},W.defaultProps=Bt,W.displayName="Waypoint";const _t=({channelsNetworkId:e,setChannelsNetworkId:i})=>{var d;const r=pe(),n=p.useRef(null),o=p.useRef(null),[c,l]=p.useState(!1),[h,w]=p.useState([]);return en(n,o,()=>{l(!1)}),p.useEffect(()=>{const f=[];H.allowedNetworks.map(m=>{f.push({id:m,value:Ue[m].label,title:Ue[m].label,icon:O(`svg/${ot[m]}`),function:()=>{i(m),l(!1)}})}),w(f)},[H]),t.jsxs(Bi,{children:[t.jsxs(Di,{color:r.viewChannelSearchText,onClick:()=>l(!c),ref:n,children:[t.jsx(ne,{padding:"0 8px 0 0",children:t.jsx(Q,{src:O(`svg/${ot[e]}`),alt:"active chain",width:"32px",height:"32px"})}),t.jsx(L,{width:"max-content",className:"text",children:(d=Ue[e])==null?void 0:d.label}),t.jsx(Mi,{children:t.jsx("img",{alt:"arrow",className:`${c?"down":"up"}`,src:O("svg/arrow.svg")})})]}),c&&t.jsx(_i,{ref:o,bg:r.default.secondaryBg,border:`1px solid ${r.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 20px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(tn,{dropdownValues:h})})]})},Bi=s.button`
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
`,_i=s(L)`
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
`,Di=s.span`
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
`,Mi=s.div`
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
`,Fi=()=>{const e=pe(),i=p.useRef(null),r=p.useRef(null),[n,o]=he.useState(!1);en(i,r,()=>{o(!1)});const c=[{id:"11155111",value:"Sepolia",title:"Sepolia Faucet",function:()=>{},link:"https://sepoliafaucet.com/"},{id:"80002",value:"Polygon",title:"Amoy Faucet",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"97",value:"BNB",title:"BNB Faucet",function:()=>{},link:"https://testnet.bnbchain.org/faucet-smart"},{id:"11155420",value:"Optimism",title:"Optimism Sepolia Faucet",function:()=>{},link:"https://faucet.quicknode.com/optimism/sepolia"},{id:"2442",value:"Polygon zkEVM",title:"Polygon zkEVM Bridge",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"421614",value:"Arbitrum",title:"Arbitrum Testnet Faucet",function:()=>{},link:"https://faucet.quicknode.com/arbitrum/sepolia"},{id:"123",value:"Fuse",title:"Fuse Sparknet Faucet",function:()=>{},link:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},{id:"111557560",value:"Cyber",title:"Cyber Faucet",function:()=>{},link:"https://cyber-testnet.testnets.rollbridge.app/"}];return t.jsxs(Li,{children:[t.jsxs(Ni,{color:e.viewChannelSearchText,onClick:()=>o(!n),ref:i,children:[t.jsx(Oi,{children:t.jsx(Q,{src:O("svg/gasPump.svg"),alt:"faucet",width:"32px",height:"32px"})}),"Testnet Faucets",t.jsx(Ii,{children:t.jsx("img",{alt:"arrow",className:`${n?"down":"up"}`,src:O("svg/arrow.svg")})})]}),n&&t.jsx(L,{ref:r,bg:e.default.secondaryBg,border:`1px solid ${e.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 14px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:t.jsx(tn,{dropdownValues:c})})]})},Li=s.button`
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
`,Oi=s.div`
  padding: 0 20px 0 0px;
`,Ni=s.div`
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
`,Ii=s.div`
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
`,ae=10,Ri=5,Pi=500,Dt=10;function zi({loadTeaser:e,playTeaser:i,minimal:r}){const n=tt(),{userPushSDKInstance:o}=U(u=>u.user),{account:c,chainId:l}=et(),{channels:h,page:w,ZERO_ADDRESS:d}=U(u=>u.channels),{run:f,stepIndex:m}=U(u=>u.userJourney),[v,S]=p.useState(!1),[_,D]=p.useState(!1),[g,I]=p.useState(""),[k,N]=p.useState(1),[B,T]=p.useState([]),[K,R]=p.useState(!1),[Z,a]=p.useState(0),[j,P]=p.useState(l),X=w*ae;p.useEffect(()=>{S(!h.length),o&&G()},[c,l,o]),p.useEffect(()=>{P(l),o&&G()},[l]);const E=()=>{if(!(v||_)){if(D(!0),g&&o){se();return}n(nn()),Ye(w+1)}},G=async()=>{try{let u={page:Math.ceil(X/ae)||1,limit:ae};if(!h.length){const y=await o.channel.list({options:u});n(nn()),n(on(y==null?void 0:y.channels))}f&&m===3&&(n(rn()),n(rn())),S(!1)}catch(u){console.error(u)}},Ye=async u=>{const y=u*ae;try{const M=await o.channel.list({page:Math.ceil(y/ae)||1,limit:ae});n(on([...h,...M==null?void 0:M.channels])),D(!1)}catch(M){console.error(M)}},se=async()=>{try{const u=await o.channel.search(g,{limit:Dt,page:k});u&&u.length>0&&(T([...B,...u]),N(y=>y+1)),D(!1)}catch(u){console.error(u)}},we=u=>g?Number(u)===B.length-1:Number(u)===h.length-1;p.useEffect(()=>{h.length&&T(h)},[h]);async function De(){if(o&&!K)if(g){R(!0),T([]);try{const u=await o.channel.search(g,{limit:Dt,page:k});T(u||[]),u&&u.length>0&&N(y=>y+1),R(!1)}catch(u){console.error(u),Z<Ri?(a(y=>y+1),De()):(T(h),I(""),R(!1))}}else R(!1),I(""),T(h)}return p.useEffect(()=>{const u=setTimeout(De,Pi);return()=>{clearTimeout(u)}},[g]),p.useEffect(()=>{!c||!o||async function(){const u=await o.notification.subscriptions(),y={},M={};u.map(({channel:ye,user_settings:V})=>{y[ye]=!0,M[ye]=V?JSON.parse(V):null}),n(Co(y)),n(ko(M))}()},[c,o]),t.jsxs(Ft,{minimal:r,children:[!v&&!r&&t.jsxs(Mt,{children:[t.jsxs(Hi,{children:[t.jsxs(Rt,{flex:"1",children:[t.jsx(Ui,{type:"text",value:g,onChange:u=>{N(1),I(u.target.value)},className:"input",placeholder:`Search by Name or ${c==null?void 0:c.slice(0,6)}`}),t.jsx(L,{position:"absolute",top:"0",bottom:"0",left:"12px",children:t.jsx(To,{size:20,style:{color:"#657795"}})})]}),at.isMainnet(l)&&t.jsx(L,{flex:"1",children:t.jsx(_t,{channelsNetworkId:j,setChannelsNetworkId:P})})]}),t.jsxs(Wi,{children:[H.allowedNetworks.length>1&&!at.isMainnet(l)&&t.jsx(L,{flex:"1",children:t.jsx(_t,{channelsNetworkId:j,setChannelsNetworkId:P})}),!at.isMainnet(l)&&t.jsx(Fi,{})]})]}),t.jsxs(st,{id:"scroll",minimal:r,children:[t.jsx("div",{children:(g?B:h).map((u,y)=>u&&u.channel!==d&&t.jsxs("div",{children:[t.jsx(Ot,{self:"stretch",children:!$o[u.channel]&&u&&(j==H.coreContractChain||j==u.alias_blockchain_id&&!it[j][u.channel])&&t.jsx(ut,{channelObjectProp:u,loadTeaser:e,playTeaser:i,minimal:r,profileType:Pt.CHANNEL})},u.channel),we(y)&&t.jsx(W,{onEnter:E})]},u.channel))}),g&&!(B!=null&&B.length)&&!K&&t.jsx(Nt,{children:t.jsx(an,{title:"No channels match your query, please search for another name/address"})}),(_&&h.length||v||K)&&t.jsx(It,{children:t.jsx(q,{type:ee.SEAMLESS,spinnerSize:r?24:42})})]})]})}const Ui=s.input`
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
`,Hi=s.div`
  // width: 100%;
  width: -webkit-fill-available;
  padding: 10px 0px;
  display: flex;
  flex-direction: row important!;
  // justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 10px 4px 10px 10px;
  }
`,Wi=s.div`
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
`;var Pt=(e=>(e.CHANNEL="Channel",e.CHANNEL_PROFILE="Profile",e))(Pt||{});let zt,Ut;ln=({channelID:e,loadTeaser:i,playTeaser:r})=>(Ao.pageview(rt.Channels),t.jsx(zt,{children:t.jsxs(Ut,{children:[t.jsx(zi,{loadTeaser:i,playTeaser:r,minimal:!!e}),e&&t.jsx(oi,{channelID:e,loadTeaser:i,playTeaser:r,minimal:!1,profileType:"Profile"})]})})),zt=s.div`
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
    100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${xe.BIG_MODULES.DESKTOP.TOP} -
      ${xe.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${Ce.laptop} {
    margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${xe.BIG_MODULES.TABLET.TOP} -
        ${xe.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE}
      ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${Ce.mobileL} {
    margin: ${A.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${A.CONSTANTS.HEADER_HEIGHT}px - ${xe.BIG_MODULES.MOBILE.TOP} -
        ${xe.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${A.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${A.ADJUSTMENTS.RADIUS.LARGE} ${A.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Ut=s.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`});export{ln as C,st as S,W,Ko as __tla};
