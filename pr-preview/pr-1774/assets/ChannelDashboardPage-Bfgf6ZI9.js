import{df as C,dg as dt,dh as ct,di as ht,dj as G,dk as ut,dl as x,dm as O,b0 as u,dn as mt,dp as ft,b2 as n,dq as pt,dr as gt,b6 as p,b9 as F,cX as I,b4 as St,b5 as _t,bL as s,bM as m,bN as J,bQ as P,aZ as At,bZ as E,da as xt,cV as Et,bY as Tt,bj as k,ds as bt,dt as Dt,du as It,dv as Mt,dw as T,dx as yt,dy as B,dz as wt,bP as $t,bh as M,b7 as Nt,__tla as vt}from"./index-KYtn_yK0.js";import{N as Ut,__tla as Lt}from"./NotificationToast-CIAD4JlI.js";import{C as Rt,__tla as jt}from"./ChannelDashboard-Bkzu_xkt.js";import{C as Ct,__tla as Gt}from"./CreateChannel-YEI4S3D5.js";import"./_Uint8Array-DoJxpxb2.js";import{__tla as Ot}from"./ErrorFilled-B080ZoJD.js";import{__tla as Ft}from"./ImportPushTokenMessage-o5md58Ru.js";import{__tla as Jt}from"./PushTokenContractHelper-v7mX8zRw.js";import{__tla as Pt}from"./useMutation-zwOs4oZV.js";import{__tla as kt}from"./index.esm-CM2Ev_hY.js";import"./Common.form-LPxQflxb.js";import{__tla as Bt}from"./Cross-BlHWvRUP.js";import{__tla as Ht}from"./Copy-CTuLyu6d.js";import{__tla as Vt}from"./Add-f_dV4RRM.js";import{__tla as Xt}from"./Stepper-OgRISvI2.js";let H,Kt=Promise.all([(()=>{try{return vt}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return Jt}catch{}})(),(()=>{try{return Pt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Ht}catch{}})(),(()=>{try{return Vt}catch{}})(),(()=>{try{return Xt}catch{}})()]).then(async()=>{function V(t,a=0,r=1){return dt(t,a,r)}function X(t){t=t.slice(1);const a=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let r=t.match(a);return r&&r[0].length===1&&(r=r.map(e=>e+e)),r?`rgb${r.length===4?"a":""}(${r.map((e,i)=>i<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function y(t){if(t.type)return t;if(t.charAt(0)==="#")return y(X(t));const a=t.indexOf("("),r=t.substring(0,a);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(C(9,t));let e=t.substring(a+1,t.length-1),i;if(r==="color"){if(e=e.split(" "),i=e.shift(),e.length===4&&e[3].charAt(0)==="/"&&(e[3]=e[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(C(10,i))}else e=e.split(",");return e=e.map(d=>parseFloat(d)),{type:r,values:e,colorSpace:i}}function K(t){const{type:a,colorSpace:r}=t;let{values:e}=t;return a.indexOf("rgb")!==-1?e=e.map((i,d)=>d<3?parseInt(i,10):i):a.indexOf("hsl")!==-1&&(e[1]=`${e[1]}%`,e[2]=`${e[2]}%`),a.indexOf("color")!==-1?e=`${r} ${e.join(" ")}`:e=`${e.join(", ")}`,`${a}(${e})`}function q(t,a){return t=y(t),a=V(a),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${a}`:t.values[3]=a,K(t)}function Z(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function z(t){return parseFloat(t)}function Q(t){return ct("MuiSkeleton",t)}ht("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const W=["animation","className","component","height","style","variant","width"];let S=t=>t,w,$,N,v;const Y=t=>{const{classes:a,variant:r,animation:e,hasChildren:i,width:d,height:A}=t;return gt({root:["root",r,e,i&&"withChildren",i&&!d&&"fitContent",i&&!A&&"heightAuto"]},Q,a)},tt=G(w||(w=S`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),et=G($||($=S`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),at=ut("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const r=Z(t.shape.borderRadius)||"px",e=z(t.shape.borderRadius);return x({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:q(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${r}/${Math.round(e/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&O(N||(N=S`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),tt),({ownerState:t,theme:a})=>t.animation==="wave"&&O(v||(v=S`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),et,(a.vars||a).palette.action.hover)),_=u.forwardRef(function(t,a){const r=mt({props:t,name:"MuiSkeleton"}),{animation:e="pulse",className:i,component:d="span",height:A,style:j,variant:f="text",width:c}=r,l=ft(r,W),g=x({},r,{animation:e,component:d,variant:f,hasChildren:!!l.children}),b=Y(g);return n.jsx(at,x({as:d,ref:a,className:pt(b.root,i),ownerState:g},l,{style:x({width:c,height:A},j)}))}),U=()=>(F(),n.jsxs(I,{children:[n.jsxs(rt,{children:[n.jsxs(nt,{children:[n.jsx(_,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),n.jsxs(it,{children:[n.jsx(_,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),n.jsx(_,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),n.jsx(_,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),n.jsx(I,{padding:"40px 0 40px 0",children:n.jsx(St,{type:_t.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),rt=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,nt=p.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,it=p.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,st=10;let L=null;const ot=()=>{F();const{account:t,chainId:a,wallet:r}=At(),{channelDetails:e,delegatees:i,aliasDetails:{aliasAddr:d,aliasEthAddr:A,isAliasVerified:j,aliasAddrFromContract:f}}=E(o=>o.admin),{processingState:c}=E(o=>o.channelCreation);E(o=>o.contracts),E(o=>o.user),u.useContext(xt),Et();const l=Tt();u.useState(!1),u.useState(!0),u.useState(!1);const g=k.coreContractChain===a;bt(600),u.useEffect(()=>{if(!g||!e||f||e==="unfetched")return;const o=Dt(e);if(o){const{address:h,chainId:D}=o;l(It(h)),l(Mt(D))}else l(T(0))},[e,f]);const b=async o=>{let{aliasAddress:h=null,isAliasVerified:D=null}=await wt.getInstance().getChannelDetailsFromAddress(o);return h=="NULL"&&(h=null),{aliasAddress:h,aliasVerified:D}};return u.useEffect(()=>{!g||!f||c===0||(L=setInterval(async()=>{const{aliasAddress:o,aliasVerified:h}=await b(t);o?(l(yt(o)),h?(l(B(!0)),l(T(0))):(l(T(2)),l(B(!1)))):c!=0&&c!=1&&l(T(1))},st*1e3))},[f]),d!==null&&clearInterval(L),n.jsxs(I,{children:[(e==="unfetched"||c===null)&&n.jsx(U,{}),e!=="unfetched"&&n.jsxs(P,{justifyContent:c===0&&"flex-start",height:"fit-content",children:[!e&&c===0&&n.jsx(Ct,{}),e&&n.jsx(Rt,{})]})]})};p(P)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${s.ADJUSTMENTS.RADIUS.LARGE} ${s.ADJUSTMENTS.RADIUS.LARGE}
    ${s.ADJUSTMENTS.RADIUS.LARGE} ${s.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${m.MINI_MODULES.DESKTOP.RIGHT} - ${m.MINI_MODULES.DESKTOP.LEFT} -
      ${s.ADJUSTMENTS.PADDING.HUGE} - ${s.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${s.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${s.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  @media ${J.laptop} {
    margin: ${s.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${s.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${m.MINI_MODULES.TABLET.RIGHT} - ${m.MINI_MODULES.TABLET.LEFT} -
        ${s.ADJUSTMENTS.PADDING.BIG} - ${s.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${J.mobileL} {
    margin: ${s.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${s.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${m.MINI_MODULES.MOBILE.RIGHT} - ${m.MINI_MODULES.MOBILE.LEFT} -
        ${s.ADJUSTMENTS.PADDING.DEFAULT} - ${s.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${s.CONSTANTS.HEADER_HEIGHT}px - ${m.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${s.ADJUSTMENTS.RADIUS.LARGE} ${s.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,k.coreContractChain;function lt(){$t.pageview("/channel_dashboard");const[t,a]=M.useState(!0),[r,e]=M.useState(null),i=()=>e(null);return M.useEffect(()=>{r&&i()},[r]),n.jsxs(n.Fragment,{children:[t?n.jsx(ot,{}):n.jsx(U,{}),r&&n.jsx(Ut,{notification:r,clearToast:i})]})}p.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let R;H=()=>n.jsx(R,{children:n.jsx(lt,{})}),R=p(Nt)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Kt as __tla,H as default};
