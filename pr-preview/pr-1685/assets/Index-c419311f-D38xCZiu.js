import{bw as M,bx as R,by as S,bz as _,bT as ct,bD as k,bG as $,bH as N,bI as z,bJ as O,bK as w,bL as J,ae as Yt,af as te,bM as D,bA as g,bC as y,c4 as ee,bO as E,bB as L,cA as H,bP as K,bE as x,bF as T,c2 as dt,cJ as ne,cK as oe,cL as ie,c7 as re,co as ae,ca as se,cq as le,bQ as V,ci as Q,cl as ce,cM as de,cN as ft,cp as fe,c3 as ve,cO as vt,cP as G,c0 as q,cb as pt,bU as pe,ap as ut,cQ as ue,bN as yt,cR as bt,cS as mt,bS as F,cT as ht,b_ as I,c6 as B,cU as gt,b as ye,cV as xt,cW as P,bZ as be,cr as Z,bv as me,__tla as he}from"./index-6oYpAvpx.js";let kt,ge=Promise.all([(()=>{try{return he}catch{}})()]).then(async()=>{function $t(o,{from:t,to:e},n={}){const i=getComputedStyle(o),r=i.transform==="none"?"":i.transform,[d,s]=i.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*d/e.width-(e.left+d),a=t.top+t.height*s/e.height-(e.top+s),{delay:c=0,duration:f=v=>Math.sqrt(v)*120,easing:p=ft}=n;return{delay:c,duration:ve(f)?f(Math.sqrt(l*l+a*a)):f,easing:p,css:(v,m)=>{const u=m*l,b=m*a,C=v+m*t.width/e.width,j=v+m*t.height/e.height;return`transform: ${r} translate(${u}px, ${b}px) scale(${C}, ${j});`}}}function wt(o){_(o,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function Ct(o){let t,e;return{c(){t=g("div"),y(t,"class","border svelte-13cuwwo"),y(t,"style",e=`
    width: ${o[2]-o[3]*2}px; 
    height: ${o[2]-o[3]*2}px; 
    border-color: var(${o[1]}); 
    padding: ${o[3]}px; 
    background-color: ${o[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)},m(n,i){k(n,t,i),t.innerHTML=o[0]},p(n,[i]){i&1&&(t.innerHTML=n[0]),i&30&&e!==(e=`
    width: ${n[2]-n[3]*2}px; 
    height: ${n[2]-n[3]*2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)&&y(t,"style",e)},i:F,o:F,d(n){n&&w(t)}}}function zt(o,t,e){let{icon:n}=t,{borderColorVar:i}=t,{size:r}=t,{padding:d=0}=t,{background:s="transparent"}=t;return o.$$set=l=>{"icon"in l&&e(0,n=l.icon),"borderColorVar"in l&&e(1,i=l.borderColorVar),"size"in l&&e(2,r=l.size),"padding"in l&&e(3,d=l.padding),"background"in l&&e(4,s=l.background)},[n,i,r,d,s]}class jt extends M{constructor(t){super(),R(this,t,zt,Ct,S,{icon:0,borderColorVar:1,size:2,padding:3,background:4},wt)}}function Lt(o){_(o,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function U(o){let t,e,n,i,r=P[o[1].type].eventIcon+"",d,s,l,a=!o[1].id.includes("customNotification")&&!o[1].id.includes("preflight"),c,f=o[1].type==="pending"&&W(),p=a&&X(o);return{c(){t=g("div"),f&&f.c(),e=L(),n=g("div"),i=g("div"),l=L(),p&&p.c(),y(i,"class",d=H(`notification-icon flex items-center justify-center ${o[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"),y(n,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),y(n,"style",s=`background:${P[o[1].type].backgroundColor}; color: ${P[o[1].type].iconColor||""}; ${o[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[o[1].type].borderColor}`}; `),y(t,"class","relative")},m(v,m){k(v,t,m),f&&f.m(t,null),x(t,e),x(t,n),x(n,i),i.innerHTML=r,x(t,l),p&&p.m(t,null),c=!0},p(v,m){v[1].type==="pending"?f||(f=W(),f.c(),f.m(t,e)):f&&(f.d(1),f=null),(!c||m&2)&&r!==(r=P[v[1].type].eventIcon+"")&&(i.innerHTML=r),(!c||m&2&&d!==(d=H(`notification-icon flex items-center justify-center ${v[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"))&&y(i,"class",d),(!c||m&2&&s!==(s=`background:${P[v[1].type].backgroundColor}; color: ${P[v[1].type].iconColor||""}; ${v[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[v[1].type].borderColor}`}; `))&&y(n,"style",s),m&2&&(a=!v[1].id.includes("customNotification")&&!v[1].id.includes("preflight")),a?p?(p.p(v,m),m&2&&$(p,1)):(p=X(v),p.c(),$(p,1),p.m(t,null)):p&&(N(),z(p,1,1,()=>{p=null}),O())},i(v){c||($(p),c=!0)},o(v){z(p),c=!1},d(v){v&&w(t),f&&f.d(),p&&p.d()}}}function W(o){let t;return{c(){t=g("div"),y(t,"class","border-action absolute svelte-jvic9v")},m(e,n){k(e,t,n)},d(e){e&&w(t)}}}function X(o){let t,e,n;return e=new jt({props:{icon:o[0].icon,size:16,background:o[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){t=g("div"),E(e.$$.fragment),y(t,"class","absolute chain-icon-container svelte-jvic9v")},m(i,r){k(i,t,r),K(e,t,null),n=!0},p(i,r){const d={};r&1&&(d.icon=i[0].icon),r&1&&(d.background=i[0].color),e.$set(d)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){z(e.$$.fragment,i),n=!1},d(i){i&&w(t),V(e)}}}function Pt(o){let t,e,n=o[1].type&&U(o);return{c(){n&&n.c(),t=ct()},m(i,r){n&&n.m(i,r),k(i,t,r),e=!0},p(i,[r]){i[1].type?n?(n.p(i,r),r&2&&$(n,1)):(n=U(i),n.c(),$(n,1),n.m(t.parentNode,t)):n&&(N(),z(n,1,1,()=>{n=null}),O())},i(i){e||($(n),e=!0)},o(i){z(n),e=!1},d(i){n&&n.d(i),i&&w(t)}}}function Tt(o,t,e){let{chainStyles:n=be}=t,{notification:i}=t;return o.$$set=r=>{"chainStyles"in r&&e(0,n=r.chainStyles),"notification"in r&&e(1,i=r.notification)},[n,i]}class Mt extends M{constructor(t){super(),R(this,t,Tt,Pt,S,{chainStyles:0,notification:1},Lt)}}function Rt(o){_(o,"svelte-pm7idu",`div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`)}function Y(o){let t,e,n=o[2](o[1]-o[0])+"",i,r;return{c(){t=I(`-
    `),e=g("span"),i=I(n),r=I(`
    ago`),y(e,"class","svelte-pm7idu")},m(d,s){k(d,t,s),k(d,e,s),x(e,i),k(d,r,s)},p(d,s){s&3&&n!==(n=d[2](d[1]-d[0])+"")&&B(i,n)},d(d){d&&w(t),d&&w(e),d&&w(r)}}}function St(o){let t,e=o[0]&&Y(o);return{c(){t=g("div"),e&&e.c(),y(t,"class","time svelte-pm7idu")},m(n,i){k(n,t,i),e&&e.m(t,null)},p(n,[i]){n[0]?e?e.p(n,i):(e=Y(n),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:F,o:F,d(n){n&&w(t),e&&e.d()}}}function _t(o,t,e){let n,i;D(o,ut,a=>e(3,n=a)),D(o,me,a=>e(4,i=a));let{startTime:r}=t;function d(a){const c=Math.floor(a/1e3),f=c<0?0:c;return f>=60?`${Math.floor(f/60).toLocaleString(i)} ${n("notify.time.minutes")}`:`${f.toLocaleString(i)} ${n("notify.time.seconds")}`}let s=Date.now();const l=setInterval(()=>{e(1,s=Date.now())},1e3);return yt(()=>{clearInterval(l)}),o.$$set=a=>{"startTime"in a&&e(0,r=a.startTime)},[r,s,d]}class Ft extends M{constructor(t){super(),R(this,t,_t,St,S,{startTime:0},Rt)}}function It(o){_(o,"svelte-1otz6tt",`div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`)}function tt(o){let t,e,n,i;function r(l,a){return l[0].link?Ot:Nt}let d=r(o),s=d(o);return n=new Ft({props:{startTime:o[0].startTime}}),{c(){t=g("span"),s.c(),e=L(),E(n.$$.fragment),y(t,"class","hash-time svelte-1otz6tt")},m(l,a){k(l,t,a),s.m(t,null),x(t,e),K(n,t,null),i=!0},p(l,a){d===(d=r(l))&&s?s.p(l,a):(s.d(1),s=d(l),s&&(s.c(),s.m(t,e)));const c={};a&1&&(c.startTime=l[0].startTime),n.$set(c)},i(l){i||($(n.$$.fragment,l),i=!0)},o(l){z(n.$$.fragment,l),i=!1},d(l){l&&w(t),s.d(),V(n)}}}function Nt(o){let t,e=Z(o[0].id)+"",n;return{c(){t=g("div"),n=I(e),y(t,"class","address-hash svelte-1otz6tt")},m(i,r){k(i,t,r),x(t,n)},p(i,r){r&1&&e!==(e=Z(i[0].id)+"")&&B(n,e)},d(i){i&&w(t)}}}function Ot(o){let t,e=Z(o[0].id)+"",n,i;return{c(){t=g("a"),n=I(e),y(t,"class","address-hash svelte-1otz6tt"),y(t,"href",i=o[0].link),y(t,"target","_blank"),y(t,"rel","noreferrer noopener")},m(r,d){k(r,t,d),x(t,n)},p(r,d){d&1&&e!==(e=Z(r[0].id)+"")&&B(n,e),d&1&&i!==(i=r[0].link)&&y(t,"href",i)},d(r){r&&w(t)}}}function Dt(o){let t,e,n=o[0].message+"",i,r,d=o[0].id&&!o[0].id.includes("customNotification")&&!o[0].id.includes("preflight"),s,l=d&&tt(o);return{c(){t=g("div"),e=g("span"),i=I(n),r=L(),l&&l.c(),y(e,"class","transaction-status svelte-1otz6tt"),y(t,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(a,c){k(a,t,c),x(t,e),x(e,i),x(t,r),l&&l.m(t,null),s=!0},p(a,[c]){(!s||c&1)&&n!==(n=a[0].message+"")&&B(i,n),c&1&&(d=a[0].id&&!a[0].id.includes("customNotification")&&!a[0].id.includes("preflight")),d?l?(l.p(a,c),c&1&&$(l,1)):(l=tt(a),l.c(),$(l,1),l.m(t,null)):l&&(N(),z(l,1,1,()=>{l=null}),O())},i(a){s||($(l),s=!0)},o(a){z(l),s=!1},d(a){a&&w(t),l&&l.d()}}}function Et(o,t,e){let{notification:n}=t;return o.$$set=i=>{"notification"in i&&e(0,n=i.notification)},[n]}class Kt extends M{constructor(t){super(),R(this,t,Et,Dt,S,{notification:0},It)}}var Vt=`
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;const Ht=["txPool"],Gt=["main","matic-main"],qt=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],et=o=>Ht.includes(o),nt=o=>Gt.includes(o),ot=o=>o&&qt.includes(o.label);async function it({type:o,wallet:t,transaction:e}){const{from:n,input:i,value:r,to:d,nonce:s,gas:l,network:a}=e,c=G[a],{gasPriceProbability:f}=J.get().notify.replacement,{gas:p,apiKey:v}=Q;if(!p)return;const[m]=await p.get({chains:[G[a]],endpoint:"blockPrices",apiKey:v}),{maxFeePerGas:u,maxPriorityFeePerGas:b}=m.blockPrices[0].estimatedPrices.find(({confidence:A})=>A===(o==="speedup"?f==null?void 0:f.speedup:f==null?void 0:f.cancel))||{};if(!u||!b)return;const C=gt(u),j=gt(b),h=i==="0x"?{}:{data:i};return t.provider.request({method:"eth_sendTransaction",params:[Object.assign({type:"0x2",from:n,to:o==="cancel"?n:d,chainId:parseInt(c),value:ye(BigInt(r)),nonce:xt(s),gasLimit:xt(l),maxFeePerGas:C,maxPriorityFeePerGas:j},h)]})}function Bt(o){_(o,"svelte-ftkynd",`.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`)}function rt(o){let t,e,n,i,r,d;return{c(){t=g("div"),e=g("button"),e.textContent="Cancel",n=L(),i=g("button"),i.textContent="Speed-up",y(e,"class","dropdown-button svelte-ftkynd"),y(i,"class","dropdown-button svelte-ftkynd"),y(t,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(s,l){k(s,t,l),x(t,e),x(t,n),x(t,i),r||(d=[T(e,"click",o[10]),T(i,"click",o[11])],r=!0)},p:F,d(s){s&&w(t),r=!1,pt(d)}}}function Zt(o){let t,e,n,i,r,d,s,l,a,c,f,p,v,m;n=new Mt({props:{notification:o[0],chainStyles:vt[G[o[0].network]]}}),r=new Kt({props:{notification:o[0]}});let u=o[0].eventCode==="txPool"&&rt(o);return{c(){t=g("div"),e=g("div"),E(n.$$.fragment),i=L(),E(r.$$.fragment),d=L(),s=g("div"),l=g("div"),a=L(),c=g("div"),u&&u.c(),y(l,"class","flex items-center close-icon svelte-ftkynd"),y(s,"class","notify-close-btn notify-close-btn-"+o[4].type+" pointer flex svelte-ftkynd"),y(e,"class","flex bn-notify-notification-inner svelte-ftkynd"),y(c,"class","dropdown svelte-ftkynd"),q(c,"dropdown-visible",o[2]&&o[5]&&et(o[0].eventCode)&&nt(o[0].network)&&ot(o[7])),y(t,"class",f="bn-notify-notification bn-notify-notification-"+o[0].type+"} svelte-ftkynd"),q(t,"bn-notify-clickable",o[0].onClick)},m(b,C){k(b,t,C),x(t,e),K(n,e,null),x(e,i),K(r,e,null),x(e,d),x(e,s),x(s,l),l.innerHTML=Vt,x(t,a),x(t,c),u&&u.m(c,null),p=!0,v||(m=[T(s,"click",dt(o[9])),T(t,"mouseenter",o[12]),T(t,"mouseleave",o[13]),T(t,"click",o[8])],v=!0)},p(b,[C]){const j={};C&1&&(j.notification=b[0]),C&1&&(j.chainStyles=vt[G[b[0].network]]),n.$set(j);const h={};C&1&&(h.notification=b[0]),r.$set(h),b[0].eventCode==="txPool"?u?u.p(b,C):(u=rt(b),u.c(),u.m(c,null)):u&&(u.d(1),u=null),(!p||C&165)&&q(c,"dropdown-visible",b[2]&&b[5]&&et(b[0].eventCode)&&nt(b[0].network)&&ot(b[7])),(!p||C&1&&f!==(f="bn-notify-notification bn-notify-notification-"+b[0].type+"} svelte-ftkynd"))&&y(t,"class",f),(!p||C&1)&&q(t,"bn-notify-clickable",b[0].onClick)},i(b){p||($(n.$$.fragment,b),$(r.$$.fragment,b),p=!0)},o(b){z(n.$$.fragment,b),z(r.$$.fragment,b),p=!1},d(b){b&&w(t),V(n),V(r),u&&u.d(),v=!1,pt(m)}}}function At(o,t,e){let n,i;D(o,pe,h=>e(15,n=h)),D(o,ut,h=>e(3,i=h));const{device:r,gas:d}=Q;let{notification:s}=t,{updateParentOnRemove:l}=t,a,c=!1;const f=ue.getValue().find(({hash:h})=>h===s.id),p=f&&n.find(({accounts:h})=>!!h.find(({address:A})=>A.toLowerCase()===f.from.toLowerCase()));function v(h){s!=null&&s.onClick&&s.onClick(h)}yt(()=>{clearTimeout(a)});const m=()=>{bt(s.id),mt(s.id),l()},u=async()=>{try{await it({type:"cancel",wallet:p,transaction:f})}catch{const h=`${f.hash.slice(0,9)}:txReplaceError${f.hash.slice(-5)}`;ht({id:h,type:"hint",eventCode:"txError",message:i("notify.transaction.txReplaceError"),key:h,autoDismiss:4e3})}},b=async()=>{try{await it({type:"speedup",wallet:p,transaction:f})}catch{const h=`${f.hash.slice(0,9)}:txReplaceError${f.hash.slice(-5)}`;ht({id:h,type:"hint",eventCode:"txError",message:i("notify.transaction.txReplaceError"),key:h,autoDismiss:4e3})}},C=()=>e(2,c=!0),j=()=>e(2,c=!1);return o.$$set=h=>{"notification"in h&&e(0,s=h.notification),"updateParentOnRemove"in h&&e(1,l=h.updateParentOnRemove)},o.$$.update=()=>{o.$$.dirty&1&&s.autoDismiss&&(a=setTimeout(()=>{bt(s.id),mt(s.id)},s.autoDismiss))},[s,l,c,i,r,d,f,p,v,m,u,b,C,j]}class Jt extends M{constructor(t){super(),R(this,t,At,Zt,S,{notification:0,updateParentOnRemove:1},Bt)}}function Qt(o){_(o,"svelte-1h8mmo3",`ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`)}function at(o,t,e){const n=o.slice();return n[12]=t[e],n}function st(o){let t,e=[],n=new Map,i,r,d,s=o[2];const l=a=>a[12].key;for(let a=0;a<s.length;a+=1){let c=at(o,s,a),f=l(c);n.set(f,e[a]=lt(f,c))}return{c(){t=g("ul");for(let a=0;a<e.length;a+=1)e[a].c();y(t,"class",i="bn-notify-"+o[0]+" "+o[5]+" svelte-1h8mmo3"),y(t,"style",r=`${o[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${o[6].expanded?"412px":o[1]&&o[7].type!=="mobile"?"82px":!o[1]&&o[7].type==="mobile"?"108px":"24px"})`)},m(a,c){k(a,t,c);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(t,null);d=!0},p(a,c){if(c&517){s=a[2],N();for(let f=0;f<e.length;f+=1)e[f].r();e=ee(e,c,l,1,a,s,n,t,de,lt,null,at);for(let f=0;f<e.length;f+=1)e[f].a();O()}(!d||c&33&&i!==(i="bn-notify-"+a[0]+" "+a[5]+" svelte-1h8mmo3"))&&y(t,"class",i),(!d||c&67&&r!==(r=`${a[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${a[6].expanded?"412px":a[1]&&a[7].type!=="mobile"?"82px":!a[1]&&a[7].type==="mobile"?"108px":"24px"})`))&&y(t,"style",r)},i(a){if(!d){for(let c=0;c<s.length;c+=1)$(e[c]);d=!0}},o(a){for(let c=0;c<e.length;c+=1)z(e[c]);d=!1},d(a){a&&w(t);for(let c=0;c<e.length;c+=1)e[c].d()}}}function lt(o,t){let e,n,i,r,d,s,l,a=F,c,f,p;return n=new Jt({props:{notification:t[12],updateParentOnRemove:t[9]}}),{key:o,first:null,c(){e=g("li"),E(n.$$.fragment),i=L(),y(e,"class",r=H(`bn-notify-li-${t[0]} ${t[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"),this.first=e},m(v,m){k(v,e,m),K(n,e,null),x(e,i),c=!0,f||(p=T(e,"click",dt(t[10])),f=!0)},p(v,m){t=v;const u={};m&4&&(u.notification=t[12]),n.$set(u),(!c||m&1&&r!==(r=H(`bn-notify-li-${t[0]} ${t[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"))&&y(e,"class",r)},r(){l=e.getBoundingClientRect()},f(){ne(e),a(),oe(e,l)},a(){a(),a=ie(e,l,$t,{duration:500})},i(v){c||($(n.$$.fragment,v),v&&re(()=>{c&&(s&&s.end(1),d=ae(e,se,{duration:1200,delay:300,x:t[3],y:t[4],easing:Wt}),d.start())}),c=!0)},o(v){z(n.$$.fragment,v),d&&d.invalidate(),s=le(e,fe,{duration:300,easing:ft}),c=!1},d(v){v&&w(e),V(n),v&&s&&s.end(),f=!1,p()}}}function Ut(o){let t,e,n=o[2].length&&st(o);return{c(){n&&n.c(),t=ct()},m(i,r){n&&n.m(i,r),k(i,t,r),e=!0},p(i,[r]){i[2].length?n?(n.p(i,r),r&4&&$(n,1)):(n=st(i),n.c(),$(n,1),n.m(t.parentNode,t)):n&&(N(),z(n,1,1,()=>{n=null}),O())},i(i){e||($(n),e=!0)},o(i){z(n),e=!1},d(i){n&&n.d(i),i&&w(t)}}}function Wt(o){return Math.sin(-13*(o+1)*Math.PI/2)*Math.pow(2,-35*o)+1}function Xt(o,t,e){let n;const{device:i}=Q,r=J.select("accountCenter").pipe(Yt(J.get().accountCenter),te(1));D(o,r,u=>e(6,n=u));let{position:d}=t,{sharedContainer:s}=t,{notifications:l}=t,a,c;a=0,c=0;let f="y-scroll";const p=()=>{f!=="y-visible"&&e(5,f="y-visible"),v(function(){e(5,f="y-scroll")},1e3)},v=function(){let u=null;return(b,C)=>{clearTimeout(u),u=setTimeout(b,C)}}();function m(u){ce.call(this,o,u)}return o.$$set=u=>{"position"in u&&e(0,d=u.position),"sharedContainer"in u&&e(1,s=u.sharedContainer),"notifications"in u&&e(2,l=u.notifications)},o.$$.update=()=>{o.$$.dirty&1&&(d.includes("top")?e(4,c=-50):e(4,c=50))},[d,s,l,a,c,f,n,i,r,p,m]}kt=class extends M{constructor(o){super(),R(this,o,Xt,Ut,S,{position:0,sharedContainer:1,notifications:2},Qt)}}});export{ge as __tla,kt as default};
