import{ee as U,hr as qt,d_ as u,e7 as t,eQ as V,fB as re,hs as ei,eV as Ue,ed as A,fb as je,fc as H,fg as He,dY as ke,e9 as oe,ht as ti,dZ as Fe,e1 as o,ea as Ge,hu as ii,e3 as ae,e4 as se,gX as $e,hv as ni,fM as Z,hw as ri,hx as We,hy as B,ef as $,hz as oi,gc as Ye,eY as ai,eR as Je,el as le,eT as Ae,gU as q,f1 as si,hA as Ke,fh as li,fE as ci,hB as Ve,hC as di,hD as Xe,fI as ce,fK as pi,fN as xi,fL as hi,ej as Oe,hE as fi,e0 as Be,eO as T,eP as X,eS as gi,gB as mi,g1 as Qe,g2 as ui,g0 as Ze,gC as wi,hF as bi,hG as vi,hH as yi,hI as Si,hJ as Ei,eb as Ti,fe as ji,e8 as ki,__tla as $i}from"./index-BZicNVPu.js";import{D as qe,__tla as Ai}from"./DisplayNotice-DPCWMFrb.js";import{N as _e,__tla as Oi}from"./NotificationToast-D63WHNfY.js";import{__tla as Bi}from"./Skeleton-BS-n64XT.js";import"./_baseClone-CYpWxhj9.js";import{__tla as _i}from"./ManageNotifSettingDropdown-BgVtMh7k.js";import"./notifSetting-DrLKauYy.js";let et,Ri=Promise.all([(()=>{try{return $i}catch{}})(),(()=>{try{return Ai}catch{}})(),(()=>{try{return Oi}catch{}})(),(()=>{try{return Bi}catch{}})(),(()=>{try{return _i}catch{}})()]).then(async()=>{var tt=!!(typeof window<"u"&&window.document&&window.document.createElement);function it(){if(!tt||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var r=Object.defineProperty({},"passive",{get:function(){function i(){e=!0}return i}()}),s=function(){};window.addEventListener("testPassiveEventSupport",s,r),window.removeEventListener("testPassiveEventSupport",s,r)}catch{}return e}var de=void 0;function nt(){return de===void 0&&(de=it()),de}function rt(e){if(e)return nt()?e:!!e.capture}function ot(e){if(!e)return 0;if(e===!0)return 100;var r=e.capture<<0,s=e.passive<<1,i=e.once<<2;return r+s+i}function Re(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function ee(e){this.target=e,this.events={}}ee.prototype.getEventHandlers=function(){function e(r,s){var i=String(r)+" "+String(ot(s));return this.events[i]||(this.events[i]={handlers:[],handleEvent:void 0},this.events[i].nextHandlers=this.events[i].handlers),this.events[i]}return e}(),ee.prototype.handleEvent=function(){function e(r,s,i){var n=this.getEventHandlers(r,s);n.handlers=n.nextHandlers,n.handlers.forEach(function(a){a&&a(i)})}return e}(),ee.prototype.add=function(){function e(r,s,i){var n=this,a=this.getEventHandlers(r,i);Re(a),a.nextHandlers.length===0&&(a.handleEvent=this.handleEvent.bind(this,r,i),this.target.addEventListener(r,a.handleEvent,i)),a.nextHandlers.push(s);var c=!0,x=function(){function S(){if(c){c=!1,Re(a);var m=a.nextHandlers.indexOf(s);a.nextHandlers.splice(m,1),a.nextHandlers.length===0&&(n.target&&n.target.removeEventListener(r,a.handleEvent,i),a.handleEvent=void 0)}}return S}();return x}return e}();var pe="__consolidated_events_handlers__";function Ce(e,r,s,i){e[pe]||(e[pe]=new ee(e));var n=rt(i);return e[pe].add(r,s,n)}function at(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function st(e,r){for(var s=0;s<r.length;s++){var i=r[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function lt(e,r,s){return r&&st(e.prototype,r),e}function ct(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&xe(e,r)}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},te(e)}function xe(e,r){return xe=Object.setPrototypeOf||function(s,i){return s.__proto__=i,s},xe(e,r)}function dt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function pt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xt(e,r){return r&&(typeof r=="object"||typeof r=="function")?r:pt(e)}function ht(e){var r=dt();return function(){var s=te(e),i;if(r){var n=te(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return xt(this,i)}}function ft(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function gt(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function Pe(e,r){var s=gt(e);if(typeof s=="number")return s;var i=ft(e);if(typeof i=="number")return i*r}var ie="above",W="inside",ne="below",he="invisible";function De(e){return typeof e.type=="string"}var mt=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function ut(e,r){if(e&&!De(e)&&!r)throw new Error(mt)}function wt(e){return e.viewportBottom-e.viewportTop===0?he:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?W:e.viewportBottom<e.waypointTop?ne:e.waypointTop<e.viewportTop?ie:he}var Y,Q=[];function Le(e){Q.push(e),Y||(Y=setTimeout(function(){Y=null;for(var s;s=Q.shift();)s()},0));var r=!0;return function(){if(r){r=!1;var s=Q.indexOf(e);s!==-1&&(Q.splice(s,1),!Q.length&&Y&&(clearTimeout(Y),Y=null))}}}function bt(e){return e==="window"?globalThis.window:e}var vt={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},_=function(e){ct(s,e);var r=ht(s);function s(i){var n;return at(this,s),n=r.call(this,i),n.refElement=function(a){n._ref=a},n}return lt(s,[{key:"componentDidMount",value:function(){var i=this;s.getWindow()&&(this.cancelOnNextTick=Le(function(){i.cancelOnNextTick=null;var n=i.props,a=n.children;n.debug,ut(a,i._ref),i._handleScroll=i._handleScroll.bind(i),i.scrollableAncestor=i._findScrollableAncestor(),i.scrollEventListenerUnsubscribe=Ce(i.scrollableAncestor,"scroll",i._handleScroll,{passive:!0}),i.resizeEventListenerUnsubscribe=Ce(window,"resize",i._handleScroll,{passive:!0}),i._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var i=this;s.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=Le(function(){i.cancelOnNextTick=null,i._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){s.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var i=this.props,n=i.horizontal,a=i.scrollableAncestor;if(a)return bt(a);for(var c=this._ref;c.parentNode;){if(c=c.parentNode,c===document.body)return window;var x=window.getComputedStyle(c),S=n?x.getPropertyValue("overflow-x"):x.getPropertyValue("overflow-y"),m=S||x.getPropertyValue("overflow");if(m==="auto"||m==="scroll"||m==="overlay")return c}return window}},{key:"_handleScroll",value:function(i){if(this._ref){var n=this._getBounds(),a=wt(n),c=this._previousPosition,x=this.props;x.debug;var S=x.onPositionChange,m=x.onEnter,y=x.onLeave,E=x.fireOnRapidScroll;if(this._previousPosition=a,c!==a){var w={currentPosition:a,previousPosition:c,event:i,waypointTop:n.waypointTop,waypointBottom:n.waypointBottom,viewportTop:n.viewportTop,viewportBottom:n.viewportBottom};S.call(this,w),a===W?m.call(this,w):c===W&&y.call(this,w);var k=c===ne&&a===ie,j=c===ie&&a===ne;E&&(k||j)&&(m.call(this,{currentPosition:W,previousPosition:c,event:i,waypointTop:n.waypointTop,waypointBottom:n.waypointBottom,viewportTop:n.viewportTop,viewportBottom:n.viewportBottom}),y.call(this,{currentPosition:a,previousPosition:W,event:i,waypointTop:n.waypointTop,waypointBottom:n.waypointBottom,viewportTop:n.viewportTop,viewportBottom:n.viewportBottom}))}}}},{key:"_getBounds",value:function(){var i=this.props,n=i.horizontal;i.debug;var a=this._ref.getBoundingClientRect(),c=a.left,x=a.top,S=a.right,m=a.bottom,y=n?c:x,E=n?S:m,w,k;this.scrollableAncestor===window?(w=n?window.innerWidth:window.innerHeight,k=0):(w=n?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,k=n?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var j=this.props,R=j.bottomOffset,C=j.topOffset,J=Pe(C,w),P=Pe(R,w),D=k+w;return{waypointTop:y,waypointBottom:E,viewportTop:k+J,viewportBottom:D-P}}},{key:"render",value:function(){var i=this,n=this.props.children;if(!n)return U.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(De(n)||qt.isForwardRef(n)){var a=function(c){i.refElement(c),n.ref&&(typeof n.ref=="function"?n.ref(c):n.ref.current=c)};return U.cloneElement(n,{ref:a})}return U.cloneElement(n,{innerRef:this.refElement})}}]),s}(U.PureComponent);_.above=ie,_.below=ne,_.inside=W,_.invisible=he,_.getWindow=function(){if(typeof window<"u")return window},_.defaultProps=vt,_.displayName="Waypoint";const yt=e=>u.createElement("svg",{width:9,height:8,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M7.99999 5.95L7.99918 0.750812L2.79999 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),u.createElement("path",{d:"M1.5 7.25L8 0.75",stroke:"#D53A94",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),fe=10,St=({showFilter:e,setShowFilter:r,search:s,setSearch:i})=>{const n=je(),{userPushSDKInstance:a}=H(d=>d.user),c=u.useRef(null);He(c,()=>e&&r(!1));const{account:x,provider:S,chainId:m}=ke(),{notifications:y,page:E,finishedFetching:w,toggle:k}=H(d=>d.notifications),j=oe(),[R,C]=u.useState(null),J=()=>C(null),{run:P,welcomeNotifs:D}=H(d=>d.userJourney),[K,N]=u.useState(!1),[I,z]=u.useState(!1),{readOnlyWallet:me}=u.useContext(ti),[ue,we]=u.useState(!0),be=Fe(),ve=()=>{be("/snap")},F=({msg:d})=>o.jsx(jt,{children:o.jsx(kt,{children:d})});u.useEffect(()=>{R&&J()},[R]);const ye=async()=>{if(!(I||w||!a)){z(!0);try{const d=await a.notification.list("INBOX",{raw:!0,page:E,limit:fe}),p=Z.utils.parseApiResponse(d);n(oi(p)),p.length===0&&n(We())}catch(d){console.error(d)}finally{z(!1)}}},Se=async()=>{N(!0),z(!0);try{const d=await a.notification.list("INBOX",{raw:!0,page:1,limit:fe});y.length||n(ni());const p=Z.utils.parseApiResponse(d),h=new Map,f=new Map;d.forEach(g=>{h.set(g.payload.data.sid,g.epoch),f.set(g.payload.data.sid,g.sender)}),p.forEach(g=>{g.date=h.get(g.sid),g.epoch=new Date(g.date).getTime()/1e3,g.channel=f.get(g.sid)}),n(ri({notifs:p,pageSize:fe})),p.length===0&&n(We())}catch(d){console.error(d)}finally{N(!1),z(!1)}};u.useEffect(()=>{(a==null?void 0:a.account)==me||!a||Se()},[k,a]);const Ee=async()=>{ye()},l=d=>Number(d)===y.length-1&&!w&&!K,b=async({secret:d,title:p,message:h,image:f,cta:g})=>{try{let v=await B.decryptWithWalletRPCMethod(S,d,x);const O=await B.decryptWithAES(h,v);let L=await B.decryptWithAES(p,v),M=await B.decryptWithAES(f,v),G=await B.decryptWithAES(g,v);return{title:L,body:O,image:M,cta:G}}catch(v){v.code===4001?(console.error(v),$.dark(o.jsx(F,{msg:"User denied message decryption"}),{position:"bottom-right",type:$.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):v.code===-32601?(console.error(v),$.dark(o.jsx(F,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:$.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(v),$.dark(o.jsx(F,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:$.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return o.jsx(Ge,{theme:j,children:o.jsx(Et,{children:o.jsxs(_t,{children:[ue&&o.jsx(o.Fragment,{children:o.jsxs($t,{flexWrap:"nowrap",children:[o.jsx(ii,{}),o.jsxs(At,{justifyContent:"space-between",children:[o.jsx(Ue,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),o.jsxs(Bt,{onClick:ve,children:["Install Push Snap ",o.jsx(yt,{})," "]})]}),o.jsx(Ot,{onClick:()=>{we(!1)}})]})}),(!P&&!y.length||P&&!D.length)&&!I&&o.jsx("div",{style:{textAlign:"center"},children:o.jsx(qe,{title:"You currently have no notifications, try subscribing to some channels."})}),y&&o.jsxs(Tt,{id:"scrollstyle-secondary",children:[K&&o.jsx(A,{padding:"10px 20px",children:o.jsx(ae,{type:se.SEAMLESS})}),P&&D.map((d,p)=>{const{cta:h,title:f,message:g,app:v,icon:O,image:L,blockchain:M,url:G}=d;return o.jsx(Me,{children:o.jsx($e,{notificationTitle:f,notificationBody:g,cta:h,app:v,icon:O,image:L,theme:j.scheme,chainName:M,url:G})},`${g}+${f}`)}),y.map((d,p)=>{const{cta:h,title:f,message:g,app:v,icon:O,image:L,secret:M,notification:G,blockchain:Te,url:Zt}=d;if(!P)return o.jsxs(Me,{children:[l(p)&&o.jsx(_,{onEnter:()=>Ee()}),o.jsx($e,{notificationTitle:f,notificationBody:g,cta:h,app:v,icon:O,image:L,isSecret:M!="",decryptFn:()=>b({secret:M,title:f,message:g,image:L,cta:h}),chainName:Te,theme:j.scheme,url:Zt})]},p)}),I&&!K&&o.jsx(A,{padding:"10px 20px",children:o.jsx(ae,{type:se.SEAMLESS})})]}),R&&o.jsx(_e,{notification:R,clearToast:J})]})})})},Et=t.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${V.tablet} {
    height: 74%;
  }
`,Me=t.div`
  margin: 25px 0px;
`,Tt=t.div`
  align-self: stretch;
  flex: 1;
`,jt=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,kt=t.div`
  margin: 0px 10px;
`,$t=t(re)`
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid #d4dcea;
  background: #fff;
  border: 1px solid ${e=>e.theme.default.border};
  background: ${e=>e.theme.default.bg};
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  max-height: 50px;

  @media ${V.tablet} {
    gap: 9px;
    margin-right: 10px;
  }

  @media (max-width: 525px) {
    padding: 8px 12px;
  }
`,At=t(re)`
  @media ${V.tablet} {
    flex-direction: column;
    align-items: baseline;
    display: block;
    align-self: auto;
  }
`,Ot=t(ei)`
  cursor: pointer;
  height: 20px;
  width: 20px;
`,Bt=t(Ue)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #d53a94;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`,_t=t(A)`
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
`;t.button`
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
`,t(A)`
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
`,t.span`
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
`,t.div`
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
`,t.button`
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
`,t.div`
  padding: 0 5px 0 0px;
`,t.div`
  margin: 0px 10px;
  padding: 5px 15px 5px 10px;
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
`,t.div`
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
`,t(Ye)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`,t(ai)`
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
`,t(Je)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`,t(A)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`,t.div`
  min-width: 300px;
`,t.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&le`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,t.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,t.span`
  ${e=>e.hideIt&&le`
      visibility: hidden;
    `};
`,t(Ae)`
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


`,t(q)`
  color: ${e=>e.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,t(q)`
  color: ${e=>e.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`,t(re)`
  align-items: center;
  margin-top:8px;
`,t(re)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`,t(si)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${e=>`0.5px solid ${e.theme.tooltipIconBorderClr}`};
`,t(Ae)`
  align-items: flex-start;
`,t(q)`
  color: ${e=>e.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`,t(q)`
  color: ${e=>e.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`,t(Ae)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`,t(q)`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`,t.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;const Rt=t.div`
  display: flex;
`;t(Rt)`
  flex-direction: column;
`,t.div`
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
`,t.div`
  overflow: hidden;
  width: ${e=>e.atW+"%"||"100%"};
  height: ${e=>e.atH}px;
  border-radius: ${e=>e.borderRadius||10}px;
  margin-bottom: ${e=>e.marginBottom||5}px;
  margin-right: ${e=>e.marginRight||0}px;
`,t.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`,t.div`
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
`,t.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
`,t(li)`
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
`,t.div`
  display: flex;
`,t.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,t.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 240px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;

  @media (max-width: 480px) {
    min-width: 210px;
  }
`,t.div`
  word-break: break-word;

  @media (max-width: 768px) {
    text-align: center;
  }
`,t(Ye)`
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
`,t.a`
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
`,t(Je)`
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
`,t.span`
  color: #ec008c;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: normal;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`,t.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 4px;
`,t.span`
  font-weight: 400;
  color: ${e=>e.theme.color};
  font-size: 16px;
  letter-spacing:normal;
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`,t.div`
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
`,t.label`
  flex: 1;
  line-height: 165%;
  color: ${e=>e.theme.viewChannelPrimaryTextColor};
`,t.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,t.div`
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
`;const Ne=t.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  display: flex;
  border-radius: 10px;
  font-size: 11px;
  gap: 3px;
`;t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${Ke.laptopL} {
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
`,t(Ne)`
  background: ${e=>e.theme.viewChannelSecondaryBG};
  transition: 300ms;
`,t.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,t(Ne)`
  background: #674c9f;
`,t.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${Ke.tablet} {
    display: block;
  }
`,t.div`
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
`;const Ct=t.button`
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
  ${e=>e.disabled&&le`
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
`;t.span`
  font-weight: 500;
  font-size: 14px;

  ${e=>e.hideit&&le`
      visibility: hidden;
    `};
`,t.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,t.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,t(Ct)`
  background: transparent;
  color: ${e=>e.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`,t.div`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`,t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,t.div`
  margin: 0px 10px;
`;const Pt=t.div`
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
  font-family: FK Grotesk Neu, Source Sans Pro;
`;t(Pt)`
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
`,t.input`
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
    letter-spacing: normal;
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
`,t.div`
  // width: 100%;
  width: -webkit-fill-available;
  padding: 10px 0px;
  display: flex;
  flex-direction: row important!;
  // justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 10px 4px 10px 10px;
  }
`,t.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding-right: 10px;
  }
`,t.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,t.div`
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
`,t.div`
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
`;const Dt=t.div`
  padding: 20px;
`;t.div`
  align-self: stretch;
  // position: absolute;
  // top: 70px;
`,t.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,t(Dt)`
  width: fit-content;
  align-self: center;
`;const Lt=t(A)`
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
`;t(A)`
  width: 100%;
  margin-right: 10px;
`;const ge=10,Mt=({showFilter:e,setShowFilter:r,search:s,setSearch:i})=>{const n=je(),{userPushSDKInstance:a}=H(l=>l.user),c=u.useRef(null);He(c,()=>e&&r(!1));const{account:x,chainId:S,provider:m}=ke(),{subscriptionStatus:y}=H(l=>l.channels),E=oe(),[w,k]=u.useState(null),j=()=>k(null),{run:R}=H(l=>l.userJourney),{notifications:C,page:J,finishedFetching:P}=H(l=>l.spam),[D,K]=u.useState(!1),[N,I]=u.useState(!1),z=({msg:l})=>o.jsx(Ht,{children:o.jsx(Ft,{children:l})});u.useEffect(()=>{w&&j()},[w]);const me={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},ue=async()=>{if(!(N||P||R||!a)){I(!0);try{const l=await a.notification.list("SPAM",{limit:ge,page:J,raw:!0});let b=Z.utils.parseApiResponse(l);b.forEach((p,h)=>{p.date=l[h].epoch,p.epoch=new Date(p.date).getTime()/1e3});const d=l.map(async(p,h)=>{p.channel=l[h].sender;let f=l[h].sender;return{...p}});b=await Promise.all(d),n(fi(b)),b.length===0&&n(Xe())}catch(l){console.error(l)}finally{I(!1)}}},we=async()=>{if(!(N||D||R)){K(!0),I(!0);try{const l=await a.notification.list("SPAM",{limit:ge,page:1,raw:!0});C.length||n(Ve());let b=Z.utils.parseApiResponse(l);b.forEach((p,h)=>{p.date=l[h].epoch,p.epoch=new Date(p.date).getTime()/1e3});const d=b.map(async(p,h)=>{p.channel=l[h].sender;let f=l[h].sender;return{...p}});b=await Promise.all(d),n(di({notifs:b,pageSize:ge})),b.length===0&&n(Xe())}catch(l){console.error(l)}finally{K(!1),I(!1)}}};u.useEffect(()=>{a&&we()},[a]);const be=async()=>{ue(),n(Ve())},ve=l=>Number(l)===C.length-1&&!P&&!D,F=ci(),ye=async(l,b)=>{if(!l)return;let d=l;if(!d)return;console.debug(d),F.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(m,x);const p=await m.getSigner(x);console.debug(p),console.debug({signer:p,channelAddress:ce(l,me[b]),userAddress:ce(x,S)}),await Z.channels.subscribe({signer:p,channelAddress:ce(l,S),userAddress:ce(x,S),onSuccess:()=>{F.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:h=>o.jsx(pi,{size:h,color:"green"})}),n(xi({channelAddress:l,status:!0}))},onError:h=>{console.error(h),F.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:f=>o.jsx(hi,{size:f,color:"red"})})},env:Oe.pushNodesEnv})},Se=l=>y[l],Ee=async({secret:l,title:b,message:d,image:p,cta:h})=>{try{let f=await B.decryptWithWalletRPCMethod(m,l,x);const g=await B.decryptWithAES(d,f);let v=await B.decryptWithAES(b,f),O=await B.decryptWithAES(p,f),L=await B.decryptWithAES(h,f);return{title:v,body:g,image:O,cta:L}}catch(f){f.code===4001?(console.error(f),$.dark(o.jsx(z,{msg:"User denied message decryption"}),{position:"bottom-right",type:$.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):f.code===-32601?(console.error(f),$.dark(o.jsx(z,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:$.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(f),$.dark(o.jsx(z,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:$.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return o.jsx(Ge,{theme:E,children:o.jsx(zt,{children:o.jsxs(Lt,{children:[C&&o.jsxs(It,{id:"scrollstyle-secondary",children:[D&&o.jsx(A,{padding:"10px 20px",children:o.jsx(ae,{type:se.SEAMLESS})}),C.map((l,b)=>{const{cta:d,title:p,message:h,app:f,icon:g,image:v,secret:O,notification:L,channel:M,blockchain:G,url:Te}=l;return o.jsxs(Ut,{children:[ve(b)&&!N&&o.jsx(_,{onEnter:be}),o.jsx($e,{notificationTitle:p,notificationBody:h,cta:d,app:f,icon:g,image:v,theme:E.scheme,subscribeFn:()=>ye(M,G),isSpam:!0,isSubscribedFn:async()=>Se(M),isSecret:O!="",decryptFn:()=>Ee({secret:O,title:p,message:h,image:v,cta:d}),chainName:G,url:Te})]},b)}),N&&!D&&o.jsx(ae,{type:se.SEAMLESS})]}),!C.length&&!N&&o.jsx(Nt,{children:o.jsx(qe,{title:"You currently have no spam notifications."})}),w&&o.jsx(_e,{notification:w,clearToast:j})]})})})},Nt=t.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,It=t.div`
  align-self: stretch;
  flex: 1;
`,zt=t.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${V.tablet} {
    height: 74%;
  }
`,Ut=t.div`
  margin: 25px 0px;
`,Ht=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 10px;
`,Ft=t.div`
  margin: 0px 10px;
`,Gt=({isSpam:e})=>{const[r,s]=u.useState(!e),[i,n]=u.useState(!1),[a,c]=u.useState("");oe();const x=Fe(),S=()=>s(y=>!y),m=y=>{S(),n(!1),c(""),x(y)};return o.jsxs(Wt,{children:[o.jsx(Yt,{children:o.jsxs(Jt,{children:[o.jsx(Ie,{isActive:r,onClick:()=>m(Be.Inbox),children:"Inbox"}),o.jsx(Ie,{isActive:!r,onClick:()=>m(Be.Spam),children:"Spam"})]})}),r?o.jsx(St,{showFilter:i,setShowFilter:n,search:a,setSearch:c}):o.jsx(Mt,{showFilter:i,setShowFilter:n,search:a,setSearch:c})]})},Wt=t.div`
  height: 100%;
  width: 100%;
`,Yt=t.div`
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
    background-color: ${e=>e.theme.default.border};
  }
`,Jt=t.div`
  display: flex;
  align-self: flex-end;
  padding-bottom: 15px;
  padding-top: 0px;

  @media (max-width: 768px) {
    align-self: flex-start;
    padding-top: 15px;
  }
`,Ie=t.div`
  width: 48;
  height: 25px;
  padding: 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${e=>e.isActive?"#CF1C84":e.theme.color};
  cursor: pointer;

  ${e=>e.isActive&&`&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -15px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`;t(A)`
  position: relative;
  max-width: 496px;
  min-width: 320px;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,t.input`
  width: 100%;
  height: 44px;
  padding-left: 50px;
  border-radius: 99px;
  border: none;
  background: ${e=>e.theme.viewChannelSearchBg};
  color: ${e=>e.theme.viewChannelSearchText};
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
`,t(A)`
  cursor: pointer;
`,t(A)`
  cursor: pointer;
  transform: rotate(90deg);
`;const Kt=Oe.coreContractChain,Vt=({isSpam:e})=>{gi.pageview(Be.Inbox);const r=je(),{account:s,chainId:i,provider:n}=ke(),{epnsReadProvider:a,epnsCommReadProvider:c}=H(E=>E.contracts),[x,S]=U.useState(null),m=()=>S(null);oe();const y=Kt===i;return U.useEffect(()=>{x&&m()},[x]),U.useEffect(()=>{i&&async function(){const E=y?n:new mi(Oe.coreRPC),w=new Qe(ui.epnscore,Ze.epnscore,E),k=wi[i].commAddress,j=new Qe(k,Ze.epnsComm,n);r(bi(j)),r(vi(w))}()},[s,i]),U.useEffect(()=>{!a||!c||(a.pushChannelAdmin().then(E=>{r(yi(E))}).catch(E=>{console.error({err:E})}),a!=null&&c!=null&&(Si.getInstance().init(s,a,c),Ei.getInstance().init(s,a,c,i)))},[a,c]),o.jsx(Xt,{children:o.jsxs(Qt,{children:[o.jsx("div",{className:"joyride"}),o.jsx(Gt,{isSpam:e}),x&&o.jsx(_e,{notification:x,clearToast:m})]})})},Xt=t(Ti)`
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
    100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${X.BIG_MODULES.DESKTOP.TOP} -
      ${X.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${V.laptop} {
    margin: ${T.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${X.BIG_MODULES.TABLET.TOP} -
        ${X.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${T.ADJUSTMENTS.RADIUS.LARGE} ${T.ADJUSTMENTS.RADIUS.LARGE}
      ${T.ADJUSTMENTS.RADIUS.LARGE} ${T.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${V.mobileL} {
    margin: ${T.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${X.BIG_MODULES.MOBILE.TOP} -
        ${X.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${T.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${T.ADJUSTMENTS.RADIUS.LARGE} ${T.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Qt=t.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,t.div`
  margin: 0px 10px;
`;let ze;et=()=>{const e=ji();return o.jsx(ze,{children:o.jsx(Vt,{isSpam:e.pathname==="/spam"})})},ze=t(ki)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Ri as __tla,et as default};
