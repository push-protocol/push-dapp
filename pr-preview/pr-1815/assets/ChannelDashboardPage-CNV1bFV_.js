import{b7 as y,gd as Nn,ge as Bc,gf as ve,aZ as t,gg as rt,gh as Qe,gi as Be,gj as at,cZ as ot,gk as Tc,cY as ne,gl as Jt,gm as Fn,gn as Sc,go as Vt,gp as Kt,gq as fe,gr as Gn,gs as st,gt as kc,gu as Mc,a_ as b,b1 as pe,cp as te,bU as Ne,bV as Fe,bP as Z,b5 as q,bC as me,d7 as lt,be as Ii,eN as Ei,cs as Te,b9 as Se,bf as Hn,bM as ge,cw as _c,bO as ct,cS as Xt,cR as Zt,bG as De,bd as Ae,bz as ee,bJ as Rc,gv as Qc,gw as dt,gx as Dc,bg as ke,b3 as Me,b2 as ht,ba as se,bW as Ge,bB as K,ca as He,cz as We,cA as ie,bE as ue,cg as Wn,ch as ji,gy as Bi,dS as Uc,gz as Pc,e2 as $e,d6 as $n,gA as qn,cT as _e,dI as Lc,eq as Ti,cc as pt,eA as zc,cd as ut,gB as Si,gC as Oc,dJ as Yn,cr as ki,bL as Nc,gD as Fc,gE as Gc,gF as Hc,gG as gt,dH as Jn,cx as Mi,b$ as _i,gH as Wc,bb as $c,gI as Vn,gJ as qc,eb as Yc,gK as Jc,bX as Kn,b8 as Xn,fB as ei,gL as Vc,gM as Kc,bR as Zn,eQ as Xc,fY as Zc,gN as ed,cP as ft,gO as er,co as tr,fq as td,gP as id,bF as nd,b4 as rd,bc as ad,gQ as od,cj as Ri,gR as sd,gS as ir,gT as nr,gU as ld,gV as cd,gW as dd,gX as hd,gY as pd,gZ as Qi,bA as qe,bD as ud,a$ as gd,__tla as fd}from"./index-D97yGUKh.js";import{S as xd,N as md,__tla as Ad}from"./RedCircle-TBOsXmxo.js";import{M as rr,g as ar,S as wd,F as Di,m as Ui,a as or,C as sr,b as lr,i as bd,c as vd,__tla as yd}from"./ChannelInfoList-Db3mbPrP.js";import{T as Cd,__tla as Id}from"./Tag-CODPxYyT.js";import{M as Ed,a as jd,__tla as Bd}from"./EmptyNotificationSettings-96WCCjBU.js";import{D as Td,__tla as Sd}from"./index-ClMaV7T9.js";import{D as kd,__tla as Md}from"./entry-B7Dry5LS.js";import{__tla as _d}from"./TransitionGroupContext-Cex_yKu-.js";import{__tla as Rd}from"./index.es-C8TnqREf.js";import"./browser-CeceZ__e.js";import{__tla as Qd}from"./index.esm-D9C76kSf.js";let cr,Dd=Promise.all([(()=>{try{return fd}catch{}})(),(()=>{try{return Ad}catch{}})(),(()=>{try{return yd}catch{}})(),(()=>{try{return Id}catch{}})(),(()=>{try{return Bd}catch{}})(),(()=>{try{return Sd}catch{}})(),(()=>{try{return Md}catch{}})(),(()=>{try{return _d}catch{}})(),(()=>{try{return Rd}catch{}})(),(()=>{try{return Qd}catch{}})()]).then(async()=>{const dr=e=>{const[n,i]=y.useState(!1),[r,s]=y.useState(null),h=y.useCallback(async(c,...o)=>{i(!0);try{const d=await c(...o);return i(!1),d}catch(d){throw i(!1),s(d),d}},[]),a=y.useCallback(async(...c)=>{try{return await h(e,...c)}catch(o){throw console.error(o),o}},[e,h]);return{loading:n,error:r,executeAsyncFunction:a}};function hr(e,n=0,i=1){return Bc(e,n,i)}function pr(e){e=e.slice(1);const n=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(n);return i&&i[0].length===1&&(i=i.map(r=>r+r)),i?`rgb${i.length===4?"a":""}(${i.map((r,s)=>s<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Pi(e){if(e.type)return e;if(e.charAt(0)==="#")return Pi(pr(e));const n=e.indexOf("("),i=e.substring(0,n);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(Nn(9,e));let r=e.substring(n+1,e.length-1),s;if(i==="color"){if(r=r.split(" "),s=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(Nn(10,s))}else r=r.split(",");return r=r.map(h=>parseFloat(h)),{type:i,values:r,colorSpace:s}}function ur(e){const{type:n,colorSpace:i}=e;let{values:r}=e;return n.indexOf("rgb")!==-1?r=r.map((s,h)=>h<3?parseInt(s,10):s):n.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),n.indexOf("color")!==-1?r=`${i} ${r.join(" ")}`:r=`${r.join(", ")}`,`${n}(${r})`}function gr(e,n){return e=Pi(e),n=hr(n),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${n}`:e.values[3]=n,ur(e)}const fr=y.createContext(),xr=()=>y.useContext(fr)??!1;function mr(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ar(e){return parseFloat(e)}function wr(e){const{className:n,classes:i,pulsate:r=!1,rippleX:s,rippleY:h,rippleSize:a,in:c,onExited:o,timeout:d}=e,[u,l]=y.useState(!1),f=ve(n,i.ripple,i.rippleVisible,r&&i.ripplePulsate),p={width:a,height:a,top:-(a/2)+h,left:-(a/2)+s},g=ve(i.child,u&&i.childLeaving,r&&i.childPulsate);return!c&&!u&&l(!0),y.useEffect(()=>{if(!c&&o!=null){const A=setTimeout(o,d);return()=>{clearTimeout(A)}}},[o,c,d]),t.jsx("span",{className:f,style:p,children:t.jsx("span",{className:g})})}const ye=rt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),br=["center","classes","className"];let xt=e=>e,Li,zi,Oi,Ni;const ti=550,vr=80,yr=Qe(Li||(Li=xt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Cr=Qe(zi||(zi=xt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Ir=Qe(Oi||(Oi=xt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Er=Be("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),jr=Be(wr,{name:"MuiTouchRipple",slot:"Ripple"})(Ni||(Ni=xt`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),ye.rippleVisible,yr,ti,({theme:e})=>e.transitions.easing.easeInOut,ye.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,ye.child,ye.childLeaving,Cr,ti,({theme:e})=>e.transitions.easing.easeInOut,ye.childPulsate,Ir,({theme:e})=>e.transitions.easing.easeInOut),Br=y.forwardRef(function(e,n){const i=at({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:h}=i,a=ot(i,br),[c,o]=y.useState([]),d=y.useRef(0),u=y.useRef(null);y.useEffect(()=>{u.current&&(u.current(),u.current=null)},[c]);const l=y.useRef(!1),f=Tc(),p=y.useRef(null),g=y.useRef(null),A=y.useCallback(v=>{const{pulsate:B,rippleX:T,rippleY:M,rippleSize:E,cb:j}=v;o(R=>[...R,t.jsx(jr,{classes:{ripple:ve(s.ripple,ye.ripple),rippleVisible:ve(s.rippleVisible,ye.rippleVisible),ripplePulsate:ve(s.ripplePulsate,ye.ripplePulsate),child:ve(s.child,ye.child),childLeaving:ve(s.childLeaving,ye.childLeaving),childPulsate:ve(s.childPulsate,ye.childPulsate)},timeout:ti,pulsate:B,rippleX:T,rippleY:M,rippleSize:E},d.current)]),d.current+=1,u.current=j},[s]),x=y.useCallback((v={},B={},T=()=>{})=>{const{pulsate:M=!1,center:E=r||B.pulsate,fakeElement:j=!1}=B;if((v==null?void 0:v.type)==="mousedown"&&l.current){l.current=!1;return}(v==null?void 0:v.type)==="touchstart"&&(l.current=!0);const R=j?null:g.current,D=R?R.getBoundingClientRect():{width:0,height:0,left:0,top:0};let _,P,U;if(E||v===void 0||v.clientX===0&&v.clientY===0||!v.clientX&&!v.touches)_=Math.round(D.width/2),P=Math.round(D.height/2);else{const{clientX:N,clientY:L}=v.touches&&v.touches.length>0?v.touches[0]:v;_=Math.round(N-D.left),P=Math.round(L-D.top)}if(E)U=Math.sqrt((2*D.width**2+D.height**2)/3),U%2===0&&(U+=1);else{const N=Math.max(Math.abs((R?R.clientWidth:0)-_),_)*2+2,L=Math.max(Math.abs((R?R.clientHeight:0)-P),P)*2+2;U=Math.sqrt(N**2+L**2)}v!=null&&v.touches?p.current===null&&(p.current=()=>{A({pulsate:M,rippleX:_,rippleY:P,rippleSize:U,cb:T})},f.start(vr,()=>{p.current&&(p.current(),p.current=null)})):A({pulsate:M,rippleX:_,rippleY:P,rippleSize:U,cb:T})},[r,A,f]),m=y.useCallback(()=>{x({},{pulsate:!0})},[x]),C=y.useCallback((v,B)=>{if(f.clear(),(v==null?void 0:v.type)==="touchend"&&p.current){p.current(),p.current=null,f.start(0,()=>{C(v,B)});return}p.current=null,o(T=>T.length>0?T.slice(1):T),u.current=B},[f]);return y.useImperativeHandle(n,()=>({pulsate:m,start:x,stop:C}),[m,x,C]),t.jsx(Er,ne({className:ve(ye.root,s.root,h),ref:g},a,{children:t.jsx(Cd,{component:null,exit:!0,children:c})}))});function Tr(e){return Jt("MuiButtonBase",e)}const Sr=rt("MuiButtonBase",["root","disabled","focusVisible"]),kr=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Mr=e=>{const{disabled:n,focusVisible:i,focusVisibleClassName:r,classes:s}=e,h=Kt({root:["root",n&&"disabled",i&&"focusVisible"]},Tr,s);return i&&r&&(h.root+=` ${r}`),h},_r=Be("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Sr.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Rr=y.forwardRef(function(e,n){const i=at({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:h,className:a,component:c="button",disabled:o=!1,disableRipple:d=!1,disableTouchRipple:u=!1,focusRipple:l=!1,LinkComponent:f="a",onBlur:p,onClick:g,onContextMenu:A,onDragLeave:x,onFocus:m,onFocusVisible:C,onKeyDown:v,onKeyUp:B,onMouseDown:T,onMouseLeave:M,onMouseUp:E,onTouchEnd:j,onTouchMove:R,onTouchStart:D,tabIndex:_=0,TouchRippleProps:P,touchRippleRef:U,type:N}=i,L=ot(i,kr),w=y.useRef(null),I=y.useRef(null),S=Fn(I,U),{isFocusVisibleRef:Q,onFocus:k,onBlur:F,ref:z}=Sc(),[O,H]=y.useState(!1);o&&O&&H(!1),y.useImperativeHandle(r,()=>({focusVisible:()=>{H(!0),w.current.focus()}}),[]);const[Y,ce]=y.useState(!1);y.useEffect(()=>{ce(!0)},[]);const re=Y&&!d&&!o;y.useEffect(()=>{O&&l&&!d&&Y&&I.current.pulsate()},[d,l,O,Y]);function X(G,Wt,$t=u){return Vt(qt=>(Wt&&Wt(qt),!$t&&I.current&&I.current[G](qt),!0))}const ae=X("start",T),$=X("stop",A),le=X("stop",x),W=X("stop",E),J=X("stop",G=>{O&&G.preventDefault(),M&&M(G)}),oe=X("start",D),Ce=X("stop",j),de=X("stop",R),Le=X("stop",G=>{F(G),Q.current===!1&&H(!1),p&&p(G)},!1),he=Vt(G=>{w.current||(w.current=G.currentTarget),k(G),Q.current===!0&&(H(!0),C&&C(G)),m&&m(G)}),xe=()=>{const G=w.current;return c&&c!=="button"&&!(G.tagName==="A"&&G.href)},Ie=y.useRef(!1),Ci=Vt(G=>{l&&!Ie.current&&O&&I.current&&G.key===" "&&(Ie.current=!0,I.current.stop(G,()=>{I.current.start(G)})),G.target===G.currentTarget&&xe()&&G.key===" "&&G.preventDefault(),v&&v(G),G.target===G.currentTarget&&xe()&&G.key==="Enter"&&!o&&(G.preventDefault(),g&&g(G))}),Ee=Vt(G=>{l&&G.key===" "&&I.current&&O&&!G.defaultPrevented&&(Ie.current=!1,I.current.stop(G,()=>{I.current.pulsate(G)})),B&&B(G),g&&G.target===G.currentTarget&&xe()&&G.key===" "&&!G.defaultPrevented&&g(G)});let ze=c;ze==="button"&&(L.href||L.to)&&(ze=f);const Oe={};ze==="button"?(Oe.type=N===void 0?"button":N,Oe.disabled=o):(!L.href&&!L.to&&(Oe.role="button"),o&&(Oe["aria-disabled"]=o));const V=Fn(n,z,w),be=ne({},i,{centerRipple:s,component:c,disabled:o,disableRipple:d,disableTouchRipple:u,focusRipple:l,tabIndex:_,focusVisible:O}),Ht=Mr(be);return t.jsxs(_r,ne({as:ze,className:ve(Ht.root,a),ownerState:be,onBlur:Le,onClick:g,onContextMenu:$,onFocus:he,onKeyDown:Ci,onKeyUp:Ee,onMouseDown:ae,onMouseLeave:J,onMouseUp:W,onDragLeave:le,onTouchEnd:Ce,onTouchMove:de,onTouchStart:oe,ref:V,tabIndex:o?-1:_,type:N},Oe,L,{children:[h,re?t.jsx(Br,ne({ref:S,center:s},P)):null]}))});function Qr(e){return Jt("MuiIconButton",e)}const Dr=rt("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Ur=["edge","children","className","color","disabled","disableFocusRipple","size"],Pr=e=>{const{classes:n,disabled:i,color:r,edge:s,size:h}=e,a={root:["root",i&&"disabled",r!=="default"&&`color${fe(r)}`,s&&`edge${fe(s)}`,`size${fe(h)}`]};return Kt(a,Qr,n)},Lr=Be(Rr,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,i.color!=="default"&&n[`color${fe(i.color)}`],i.edge&&n[`edge${fe(i.edge)}`],n[`size${fe(i.size)}`]]}})(({theme:e,ownerState:n})=>ne({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Gn(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.edge==="start"&&{marginLeft:n.size==="small"?-3:-12},n.edge==="end"&&{marginRight:n.size==="small"?-3:-12}),({theme:e,ownerState:n})=>{var i;const r=(i=(e.vars||e).palette)==null?void 0:i[n.color];return ne({},n.color==="inherit"&&{color:"inherit"},n.color!=="inherit"&&n.color!=="default"&&ne({color:r==null?void 0:r.main},!n.disableRipple&&{"&:hover":ne({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Gn(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),n.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},n.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Dr.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),zr=y.forwardRef(function(e,n){const i=at({props:e,name:"MuiIconButton"}),{edge:r=!1,children:s,className:h,color:a="default",disabled:c=!1,disableFocusRipple:o=!1,size:d="medium"}=i,u=ot(i,Ur),l=ne({},i,{edge:r,color:a,disabled:c,disableFocusRipple:o,size:d}),f=Pr(l);return t.jsx(Lr,ne({className:ve(f.root,h),centerRipple:!0,focusRipple:!o,disabled:c,ref:n},u,{ownerState:l,children:s}))});function Or(e){return Jt("MuiLinearProgress",e)}rt("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Nr=["className","color","value","valueBuffer","variant"];let Ye=e=>e,Fi,Gi,Hi,Wi,$i,qi;const ii=4,Fr=Qe(Fi||(Fi=Ye`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Gr=Qe(Gi||(Gi=Ye`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Hr=Qe(Hi||(Hi=Ye`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Wr=e=>{const{classes:n,variant:i,color:r}=e,s={root:["root",`color${fe(r)}`,i],dashed:["dashed",`dashedColor${fe(r)}`],bar1:["bar",`barColor${fe(r)}`,(i==="indeterminate"||i==="query")&&"bar1Indeterminate",i==="determinate"&&"bar1Determinate",i==="buffer"&&"bar1Buffer"],bar2:["bar",i!=="buffer"&&`barColor${fe(r)}`,i==="buffer"&&`color${fe(r)}`,(i==="indeterminate"||i==="query")&&"bar2Indeterminate",i==="buffer"&&"bar2Buffer"]};return Kt(s,Or,n)},ni=(e,n)=>n==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${n}Bg`]:e.palette.mode==="light"?kc(e.palette[n].main,.62):Mc(e.palette[n].main,.5),$r=Be("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,n[`color${fe(i.color)}`],n[i.variant]]}})(({ownerState:e,theme:n})=>ne({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:ni(n,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),qr=Be("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.dashed,n[`dashedColor${fe(i.color)}`]]}})(({ownerState:e,theme:n})=>{const i=ni(n,e.color);return ne({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${i} 0%, ${i} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},st(Wi||(Wi=Ye`
    animation: ${0} 3s infinite linear;
  `),Hr)),Yr=Be("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.bar,n[`barColor${fe(i.color)}`],(i.variant==="indeterminate"||i.variant==="query")&&n.bar1Indeterminate,i.variant==="determinate"&&n.bar1Determinate,i.variant==="buffer"&&n.bar1Buffer]}})(({ownerState:e,theme:n})=>ne({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(n.vars||n).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${ii}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${ii}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&st($i||($i=Ye`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Fr)),Jr=Be("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.bar,n[`barColor${fe(i.color)}`],(i.variant==="indeterminate"||i.variant==="query")&&n.bar2Indeterminate,i.variant==="buffer"&&n.bar2Buffer]}})(({ownerState:e,theme:n})=>ne({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(n.vars||n).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:ni(n,e.color),transition:`transform .${ii}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&st(qi||(qi=Ye`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Gr)),Vr=y.forwardRef(function(e,n){const i=at({props:e,name:"MuiLinearProgress"}),{className:r,color:s="primary",value:h,valueBuffer:a,variant:c="indeterminate"}=i,o=ot(i,Nr),d=ne({},i,{color:s,variant:c}),u=Wr(d),l=xr(),f={},p={bar1:{},bar2:{}};if((c==="determinate"||c==="buffer")&&h!==void 0){f["aria-valuenow"]=Math.round(h),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let g=h-100;l&&(g=-g),p.bar1.transform=`translateX(${g}%)`}if(c==="buffer"&&a!==void 0){let g=(a||0)-100;l&&(g=-g),p.bar2.transform=`translateX(${g}%)`}return t.jsxs($r,ne({className:ve(u.root,r),ownerState:d,role:"progressbar"},f,{ref:n},o,{children:[c==="buffer"?t.jsx(qr,{className:u.dashed,ownerState:d}):null,t.jsx(Yr,{className:u.bar1,ownerState:d,style:p.bar1}),c==="determinate"?null:t.jsx(Jr,{className:u.bar2,ownerState:d,style:p.bar2})]}))});function Kr(e){return Jt("MuiSkeleton",e)}rt("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Xr=["animation","className","component","height","style","variant","width"];let mt=e=>e,Yi,Ji,Vi,Ki;const Zr=e=>{const{classes:n,variant:i,animation:r,hasChildren:s,width:h,height:a}=e;return Kt({root:["root",i,r,s&&"withChildren",s&&!h&&"fitContent",s&&!a&&"heightAuto"]},Kr,n)},ea=Qe(Yi||(Yi=mt`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ta=Qe(Ji||(Ji=mt`
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
`)),ia=Be("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,n[i.variant],i.animation!==!1&&n[i.animation],i.hasChildren&&n.withChildren,i.hasChildren&&!i.width&&n.fitContent,i.hasChildren&&!i.height&&n.heightAuto]}})(({theme:e,ownerState:n})=>{const i=mr(e.shape.borderRadius)||"px",r=Ar(e.shape.borderRadius);return ne({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:gr(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},n.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${i}/${Math.round(r/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},n.variant==="circular"&&{borderRadius:"50%"},n.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&st(Vi||(Vi=mt`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),ea),({ownerState:e,theme:n})=>e.animation==="wave"&&st(Ki||(Ki=mt`
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
    `),ta,(n.vars||n).palette.action.hover)),At=y.forwardRef(function(e,n){const i=at({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:h="span",height:a,style:c,variant:o="text",width:d}=i,u=ot(i,Xr),l=ne({},i,{animation:r,component:h,variant:o,hasChildren:!!u.children}),f=Zr(l);return t.jsx(ia,ne({as:h,ref:n,className:ve(f.root,s),ownerState:l},u,{style:ne({width:d,height:a},c)}))}),Xi=()=>(pe(),t.jsxs(te,{children:[t.jsxs(na,{children:[t.jsxs(ra,{children:[t.jsx(At,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),t.jsxs(aa,{children:[t.jsx(At,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),t.jsx(At,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),t.jsx(At,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),t.jsx(te,{padding:"40px 0 40px 0",children:t.jsx(Ne,{type:Fe.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),na=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ra=b.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,aa=b.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,oa=()=>{var i,r;const e=pe(),{aliasDetails:{aliasChainId:n}}=Z(s=>s.admin);return t.jsxs(q,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(me,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(r=(i=lt[n])==null?void 0:i.label)==null?void 0:r.split(" ")[0]," Alias Network."]})," ",t.jsx(me,{textAlign:"center",margin:"5px 0px 60px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),t.jsxs(q,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[t.jsx(Ii,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(Ei,{margin:"auto 15px",textTransform:"none",color:e.color,size:"16px",weight:"600",children:"Processing"})]})]})},sa=()=>{var r;Te();const e=pe(),{switchChain:n}=Se(),{aliasDetails:{aliasChainId:i}}=Z(s=>s.admin);return t.jsxs(q,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(me,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",t.jsx(la,{children:(r=lt[i])==null?void 0:r.label})," to start ",t.jsx("br",{}),"verifying your Channel Alias."]}),t.jsx(Hn,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:t.jsx(ge,{variant:"primary",onClick:()=>n(i),size:"large",children:t.jsx(_c,{color:"white",children:"Change Network"})})})]})},la=b.b`
  color: #cf1c84;
`,ca=({aliasEthAccount:e,setAliasVerified:n})=>{const i=pe(),{account:r,provider:s,chainId:h}=Se(),a=s.getSigner(r),c=ct(),o=new Xt(lt[h].commAddress,Zt.epnsComm,a),[d,u]=y.useState(""),[l,f]=y.useState(!1),p=e,g={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"}},A=async()=>{p==e&&m()},x=async()=>{const{aliasVerified:C}=await Dc({account:r,chainId:h}).then(v=>v?(c(n(v.is_alias_verified)),{aliasVerified:v.is_alias_verified}):{aliasVerified:null});return{aliasVerified:C}},m=()=>{u("Processing"),o.verifyChannelAlias(p).then(async C=>{console.debug(C),u("Transaction Sent! It usually takes 5mins to verify."),await C.wait(1),setTimeout(()=>{u("Transaction Mined!")},2e3),setTimeout(()=>{u("Loading...")},2e3);const v=setInterval(async()=>{const{aliasVerified:B}=await x();B&&(setTimeout(()=>{f(!0)},1e3),clearInterval(v),c(dt(0)))},5e3)}).catch(()=>{u("There was an error"),setTimeout(()=>{u("")},2e3)})};return t.jsxs(q,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsx(De,{textAlign:"center",margin:"60px 0px 0px 0px",color:i.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),d===""&&t.jsx(me,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:r}),d===""&&Ae.appEnv!=="prod"&&t.jsxs(De,{padding:"10px",margin:"10px",borderRadius:ee.ADJUSTMENTS.RADIUS.SMALL,background:i.default.secondaryBg,color:i.default.secondaryColor,children:["You will need"," ",t.jsx(Rc,{href:g[h].url,target:"_blank",children:g[h].label})," ","to proceed."]}),!l&&(d?t.jsxs(q,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(Ii,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(me,{color:i.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:d})]}):t.jsx(q,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:t.jsx(ge,{variant:"primary",size:"medium",onClick:A,children:"Verify Alias Address"})})),l&&t.jsxs(q,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(Qc,{color:"#30CC8B",size:30}),t.jsx(me,{color:i.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},da=({aliasEthAccount:e,setAliasVerified:n})=>{const{processingState:i}=Z(r=>r.channelCreation);return t.jsxs(Me,{children:[t.jsxs(ha,{children:[t.jsxs(ai,{type:i>=1?"active":"inactive",active:i==1?"active":"inactive",children:[t.jsx("div",{children:"Waiting for Setup"}),t.jsx(ri,{type:i>=1?"active":"inactive"})]}),t.jsxs(ai,{type:i>=2?"active":"inactive",active:i==2?"active":"inactive",children:[t.jsx("div",{children:"Change Network"}),t.jsx(ri,{type:i>=2?"active":"inactive"})]}),t.jsxs(ai,{type:i>=3?"active":"inactive",active:i==3?"active":"inactive",children:[t.jsx("div",{children:"Verify Alias Network"}),t.jsx(ri,{type:i>=3?"active":"inactive"})]}),t.jsx(pa,{})]}),i===1&&t.jsx(oa,{}),i===2&&t.jsx(sa,{}),i===3&&t.jsx(ca,{aliasEthAccount:e,setAliasVerified:n})]})},ha=b.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 50px 0px 0px 0px;
  @media (max-width: 768px) {
    display: flex;
    margin: 0px 0px 0px 0px;
  }
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`,ri=b.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:e})=>e==="active"&&ke`
      background: #e20880;
    `};
`,pa=b.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,ai=b.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px;
  color: #657795;
  div {
    margin: 5px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 4px;
    div {
      font-weight: 500;
      font-size: 15px;
    }
  }

  ${({type:e})=>e==="active"&&ke`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:e})=>e==="active"&&ke`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:e})=>e==="inactive"&&ke`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,Zi=({heading:e,subHeading:n})=>{const i=pe();return t.jsx(ht,{theme:i,children:t.jsxs(ua,{children:[t.jsx(ga,{style:{color:i.default.color},children:e}),t.jsx(fa,{style:{color:i.modalMessageColor},children:n})]})})},ua=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,ga=b.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,fa=b.h4`
  text-shadow: none;
  width: 90%;
  color: ${e=>e.modalMessageColor||"#657795"};
  font-family: FK Grotesk Neu;
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
`,oi=se.forwardRef(({title:e},n)=>{const i=pe();return t.jsx(ht,{theme:i,children:t.jsxs(xa,{children:[t.jsx(ma,{style:{color:i.modalMessageColor},children:e}),t.jsx(Aa,{ref:n,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:i.modalMessageColor}})]})})}),xa=b.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,ma=b.h4`
  font-family: FK Grotesk Neu;
  font-size: ${e=>e.fontSize||"0.95rem"};
  font-weight: ${e=>e.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${e=>e.marginBottom||"3%"};
`,Aa=b(Ge)`
  box-sizing: border-box;
  width: 100%;
`,wa=({onConfirm:e,onClose:n,toastObject:i})=>{const r=se.useRef();pe();const[s,h]=se.useState(!1),a=()=>!s&&n(),c=se.useRef(null);He(c,()=>a());const o=()=>{var u;h(!0);const d=(u=r==null?void 0:r.current)==null?void 0:u.value;e(d).then(async l=>{console.debug(l),i.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:f=>t.jsx(We,{size:f,color:"green"})}),n()}).catch(l=>{console.error({err:l}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:f=>t.jsx(ie,{size:f,color:"red"})})}).finally(()=>{h(!1)})};return t.jsxs(ba,{ref:c,children:[t.jsx(Zi,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),t.jsx(oi,{ref:r,title:"Delegate Address"}),t.jsx(rr,{text:"Add Delegate",onClick:o,isLoading:s})]})},ba=b.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${K.laptop}){
    width:50vw;
  }
  @media(${K.mobileL}){
    width:95vw;
  }
`,va="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",en="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",ya=e=>y.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ca=({onClose:e,onConfirm:n,toastObject:i})=>{const r=se.useRef(),s=se.useRef(),[h,a]=se.useState(!1);pe();const c=()=>!h&&e(),o=se.useRef(null);He(o,()=>c());const d=()=>{var f,p;const u=(f=s==null?void 0:s.current)==null?void 0:f.value,l=(p=r==null?void 0:r.current)==null?void 0:p.value;if(a(!0),u==""||l==""){i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:g=>t.jsx(ie,{size:g,color:"red"})}),setTimeout(()=>{a(!1)},500);return}else if(parseInt(u)<60){i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:g=>t.jsx(ie,{size:g,color:"red"})}),setTimeout(()=>{a(!1)},500);return}n(u,l).then(async g=>{console.debug(g),i.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:A=>t.jsx(We,{size:A,color:"green"})}),e()}).catch(g=>{console.error(g),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:A=>t.jsx(ie,{size:A,color:"red"})})}).finally(()=>{a(!1)})};return t.jsxs(Ia,{ref:o,children:[t.jsx(Zi,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),t.jsx(oi,{ref:r,title:"Subgraph ID"}),t.jsx(oi,{ref:s,title:"Poll Time (in seconds)"}),t.jsx(rr,{text:"Add Subgraph",onClick:d,isLoading:h})]})},Ia=b.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${K.laptop}){
    width:50vw;
  }
  @media(${K.mobileL}){
    width:95vw;
  }
`,Ea=e=>y.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),y.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ja=e=>y.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ba=({onConfirm:e,onClose:n,toastObject:i})=>{const r=pe(),s=ct(),{channelDetails:h}=Z(f=>f.admin),{CHANNNEL_DEACTIVATED_STATE:a}=Z(f=>f.channels),[c,o]=se.useState(!1),d=()=>!c&&n(),u=se.useRef(null);He(u,()=>d());const l=()=>{o(!0),e().then(async f=>{console.debug(f),console.info("Transaction Sent!"),i.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:p=>t.jsx(ie,{size:p,color:"red"})}),await f.wait(1),console.info("Transaction Mined!"),s(Bi({...h,channelState:a})),o(!1),n()}).catch(f=>{console.error("!!!Error deactivateChannel() --> %o",f),console.error({err:f}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:p=>t.jsx(ie,{size:p,color:"red"})}),o(!1)})};return t.jsx(ht,{theme:r,children:t.jsx(Ta,{ref:u,children:c?t.jsxs(Sa,{children:[t.jsx(Wn,{size:42,color:ee.COLORS.PRIMARY_PINK,type:ji.PROCESSING}),t.jsx(ka,{children:"Verifying"})]}):t.jsxs(t.Fragment,{children:[t.jsx(Ma,{style:{color:r.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),t.jsxs(_a,{children:[t.jsx(Ea,{width:36,height:36,onClick:d}),t.jsx(Ra,{onClick:l,children:t.jsx(ja,{})})]})]})})})},Ta=b.div`
  width: 446px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;

  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
    flex-direction: column;
  }
`,Sa=b(ue)`
  flex-direction: row;
  //   margin-top:33px;
`,ka=b.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,Ma=b.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  margin-right: 40px;
  @media (max-width: 500px) {
    margin-right: 20px;
  }
  @media (max-width: 400px) {
    margin: 14px 6px 24px 6px;
  }
`;b.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;const _a=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,Ra=b.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;b.img`
  height: 36px;
  width: 17px;
`;const Qa="DD MMM, YYYY",Da=({onConfirm:e,onClose:n,toastObject:i})=>{const r=pe(),{chainId:s,account:h,provider:a}=Se(),c=ct(),{channelDetails:o,canVerify:d,aliasDetails:{isAliasVerified:u,aliasAddrFromContract:l}}=Z(L=>L.admin),{CHANNEL_ACTIVE_STATE:f,CHANNNEL_DEACTIVATED_STATE:p}=Z(L=>L.channels),[g,A]=y.useState("");let{channelState:x}=o;x||(x=o.activation_status);const m=x===f,C=x===p,[v,B]=y.useState(!1),[T,M]=y.useState(!1),[E,j]=y.useState(0),R=()=>!v&&n(),D=y.useRef(null);He(D,()=>R());const _=Ae.coreContractChain===s;$e(600),y.useEffect(()=>{!o||!_||async function(){const L=o.channelStartBlock.toString(),w=await new $n(Ae.coreRPC).getBlock(+L),I=qn(w.timestamp*1e3);A(I.format(Qa))}()},[o]),y.useEffect(()=>{!h||!a||async function(){const L=await ar({address:h,provider:a,contractAddress:_e.epnscore});j(parseInt(L));const w=parseInt(L);w>=50&&w!=0?M(!0):M(!1)}()},[h,a]);const P=async L=>{await Ui({noOfTokens:L,provider:a,account:h})},U=async()=>{if(B(!0),!a)return;const L=a.getSigner(h);i.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const w=await or({signer:L,contractAddress:_e.epnscore,amount:50-E});console.debug("response",w),w&&(j(50),M(!0),i.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:I=>t.jsx(We,{size:I,color:"green"})}),B(!1))}catch(w){console.error(w),w.code=="ACTION_REJECTED"?i.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:I=>t.jsx(ie,{size:I,color:"red"})}):(i.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:I=>t.jsx(ie,{size:I,color:"red"})}),console.error("Error --> %o",w),console.error({err:w}))}B(!1)},N=async()=>{B(!0);try{const L=Ti("50",18),w=await e(L);i.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:I=>t.jsx(We,{size:I,color:"green"})}),await w.wait(),console.info("Transaction Mined!"),i.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:I=>t.jsx(We,{size:I,color:"green"})}),c(Bi({...o,channelState:f})),n(),B(!1)}catch(L){console.error("Error reactivateChannel",{err:L}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:w=>t.jsx(ie,{size:w,color:"red"})}),B(!1)}};return t.jsx(ht,{theme:r,children:t.jsxs(Ua,{ref:D,children:[t.jsxs(Pa,{children:[t.jsx(La,{children:"Reactivate Channel"}),t.jsx(zr,{onClick:R,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:t.jsx(Lc,{size:"1.5rem",style:{color:r.modalIconColor}})})]}),t.jsxs(Oa,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(Na,{src:o.icon}),t.jsxs(tn,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(Ya,{children:[o.name,d&&t.jsx(Fa,{src:"/verify.png"})]}),t.jsxs(tn,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[_&&l&&!u||!_&&!u?t.jsx(Wa,{children:"Alias Network Setup Pending"}):t.jsxs(za,{justifyContent:"flex-start",children:[t.jsxs(Ga,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx($a,{children:o.subscriber_count})]}),t.jsx(Ha,{active:m,children:m?"Active":C?"Deactivated":"Blocked"})]}),g&&t.jsxs(qa,{children:["Created ",g]})]})]})]}),t.jsxs(Ja,{children:[t.jsx(Va,{children:"Channel reactivation fee"}),t.jsxs(te,{flex:"0",children:[T?t.jsx(Ka,{src:wd}):null,t.jsxs(Xa,{children:[50," PUSH"]})]})]}),t.jsx(Di,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:P}),v?t.jsxs(eo,{children:[t.jsx(Wn,{size:42,color:ee.COLORS.PRIMARY_PINK,type:ji.PROCESSING}),t.jsx(to,{children:"Verifying Transaction"})]}):t.jsx(Za,{children:E>=50?t.jsx(rn,{onClick:N,children:"Reactivate"}):t.jsx(rn,{onClick:U,children:"Approve PUSH"})})]})})},Ua=b.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${K.mobileL} {
    padding: 0.5rem;
  }
  @media (${K.laptop}) {
    width: 50vw;
  }
  @media (${K.mobileL}) {
    width: 95vw;
  }
`,Pa=b(te)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${K.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${K.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,La=b(Uc)`
  color: ${e=>e.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${K.laptop} {
    font-size: 1.2rem;
  }
  @media ${K.mobileL} {
    width: 85%;
  }
`,tn=b(ue)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,za=b(te)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Oa=b(te)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Na=b.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${K.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${K.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Fa=b.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Ga=b.div`
  width: 58px;
  height: 26px;
  margin-bottom: 10px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
  @media ${K.laptop} {
    width: 52px;
    height: 22px;
  }
`,nn=b.div`
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
  @media ${K.laptop} {
    padding: 1px 8px;
  }
`,Ha=b(nn)`
  color: #2dbd81;
  color: ${e=>e.active?"#2DBD81":"red"};
  background-color: #c6efd1;
  margin-left: 10px;
  margin-bottom: 10px;
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
`,Wa=b(nn)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`,$a=b.span`
  font-weight: 400;
  font-size: 14px;
`,qa=b.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  color: #657795;
  margin: 10px 0;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media ${K.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,Ya=b.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${e=>e.theme.color};
  @media ${K.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,Ja=b(te)`
  background: ${e=>e.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 16px;
  }
  @media ${K.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,Va=b.p`
  margin: 0px;
  color: ${e=>e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${K.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Ka=b.img``,Xa=b.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${K.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Za=b(te)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,rn=b(Pc)`
  margin: 0 auto;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  background: #cf1c84;
  color: #fff;
  padding: 16px 27px;
  width: 12rem;

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${K.mobileL} {
    width: 80%;
  }
`,eo=b(ue)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,to=b.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,io=50,no=Ae.coreContractChain;function ro({DropdownRef:e,isDropdownOpen:n,closeDropdown:i}){ct();const{account:r,chainId:s}=Se(),{epnsWriteProvider:h,epnsCommWriteProvider:a}=Z(k=>k.contracts),{channelDetails:c}=Z(k=>k.admin),{CHANNNEL_DEACTIVATED_STATE:o,CHANNEL_BLOCKED_STATE:d}=Z(k=>k.channels);Z(k=>k.user);const u=pe(),{channelState:l}=c,f=no===s,p=$e(425),{isModalOpen:g,showModal:A,ModalComponent:x}=pt(),{isModalOpen:m,showModal:C,ModalComponent:v}=pt(),{isModalOpen:B,showModal:T,ModalComponent:M}=pt(),E=n&&!g&&!m&&!B;He(e,()=>E&&i()),se.useState(!1),se.useState(io);const[j,R]=se.useState(0),D=l===o,_=l===d,P=_||D;se.useEffect(()=>{R(+zc.formatBigNumberToMetric(c.poolContribution,!0))},[r,c.poolContribution]),Te();const U=()=>{_||(D?C():A())},N=Te(),L=h.reactivateChannel,w=Te(),I=()=>h.deactivateChannel(),S=Te(),Q=async(k,F)=>{if(!(k==""||F=="")&&!(k<60))try{const z=k+"+"+F,O=Si(z);return h.addSubGraph(O)}catch(z){console.error(z)}};return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:t.jsx(ao,{background:u,children:t.jsxs(oo,{children:[Ae.appEnv!=="prod"&&t.jsx(an,{disabled:P,onClick:()=>!P&&T(),children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[t.jsx(wt,{src:va,alt:"cube"}),t.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),f&&t.jsx(an,{isChannelDeactivated:D,onClick:U,children:t.jsx(so,{isChannelBlocked:_,isChannelDeactivated:D,children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[_?t.jsx(wt,{src:en,alt:"red-bell"}):D?t.jsx(wt,{src:ya,alt:"green-bell"}):t.jsx(wt,{src:en,alt:"red-bell"}),t.jsx("div",{style:{width:"10px"}}),_?"Channel Blocked":D?"Activate Channel":"Deactivate Channel"]})})})]})})}),t.jsx(x,{InnerComponent:Ba,onConfirm:I,toastObject:w,modalPosition:ut.ON_ROOT}),t.jsx(v,{InnerComponent:Da,onConfirm:L,toastObject:N,modalMargin:p?"10rem 1rem 0 1rem":"",modalPosition:ut.ON_ROOT}),t.jsx(M,{InnerComponent:Ca,onConfirm:Q,toastObject:S,modalPosition:ut.ON_ROOT})]})}const ao=b.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 240px;
  padding: 16px 4px 24px 4px;
  background: ${e=>e.background.backgroundBG};
  box-sizing: border-box;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e8f7;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
  border-radius: 16px;
  justify-content: space-between;

  @media (max-width: 600px) {
    left: -90px;
    top: 24px;
  }
`,oo=b.div`
  flex-direction: column;
  gap: 20px;
  display: ${e=>e.inactive?"none":"flex"};
`;b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,b.div`
  margin: 0px 10px;
`,b.div`
  text-decoration: underline;
  color: ${e=>e.isChannelDeactivated?"#674C9F":"#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;const an=b.button`
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 5px;
  position: relative;
  background: ${e=>e.theme.backgroundBG};
  color: ${e=>e.theme.dropdownTextColor};
  height: 23px;
  font-family: 'monospace, monospace';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 141%;
  align-items: center;
  &:hover {
    opacity: ${e=>e.disabled?.5:.9};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    pointer: hand;
  }
  &:active {
    opacity: ${e=>e.disabled?.5:.75};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    pointer: hand;
  }
  opacity: ${e=>e.disabled?.5:1};
`,so=b.div`
  color: ${e=>e.isChannelBlocked?"red":e.isChannelDeactivated?"#30CC8B":"red "};
`,wt=b.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function on(){const e=se.useRef(null),[n,i]=se.useState(!1);pe();const r=()=>{i(h=>!h)},s=()=>{i(!1)};return t.jsxs(te,{flex:"0",ref:e,children:[t.jsx(lo,{active:n,onClick:r}),n&&t.jsx(ro,{DropdownRef:e,isDropdownOpen:n,closeDropdown:s})]})}b.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 70px;
  left: -50px;
  @media (max-width: 600px) {
    position: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;const lo=b(Oc)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${e=>e.active?"rotateZ(90deg)":"none"};
`,co="DD MMM, YYYY";function ho({isChannelExpired:e,setIsChannelExpired:n,showEditChannel:i,destroyChannel:r}){var re,X,ae;const{account:s,chainId:h,wallet:a}=Se(),{delegatees:c,channelDetails:o,canVerify:d,aliasDetails:{isAliasVerified:u,aliasAddrFromContract:l}}=Z($=>$.admin),{channelSettings:f}=Z($=>$.channels),{userPushSDKInstance:p}=Z($=>$.user),{handleConnectWalletAndEnableProfile:g}=y.useContext(ki),{CHANNEL_ACTIVE_STATE:A,CHANNNEL_DEACTIVATED_STATE:x}=Z($=>$.channels),{processingState:m}=Z($=>$.channelCreation),[C,v]=y.useState([]),[B,T]=y.useState("");let{channelState:M}=o;M||(M=o.activation_status);const E=M===A,j=M===x,R=Ae.coreContractChain===h,D=$e(600),[_,P]=y.useState([s]),[U,N]=y.useState(void 0);Z($=>$.contracts);const L=Nc(),{isModalOpen:w,showModal:I,ModalComponent:S}=pt(),Q=Te(),k=async()=>{p.signer||await g({wallet:a}),I()},F=async $=>p.channel.delegate.add(Mi($,h)),z=o.expiryTime?Fc(((re=o.expiryTime)==null?void 0:re.toString())*1e3):"",O=o.expiryTime?Gc(((X=o.expiryTime)==null?void 0:X.toString())*1e3):!0,H=o.expiryTime?Hc(((ae=o.expiryTime)==null?void 0:ae.toString())*1e3,14):"";y.useEffect(()=>{o.channelType==gt.TIMEBOUND&&(O||n(!0))},[O]),y.useEffect(()=>{!o||!d||async function(){let $=await Jn.getInstance().getChannelJsonAsync(o.verifiedBy);v($)}()},[o,d]),y.useEffect(()=>{!o||!R||async function(){const $=o.channelStartBlock.toString(),le=await new $n(Ae.coreRPC).getBlock(+$),W=qn(le.timestamp*1e3);T(W.format(co))}()},[o]),y.useEffect(()=>{s&&(!c||!c.length?N(s):N(R?c[0].channel:c[0].alias_address))},[c,s]),y.useEffect(()=>{s&&(async()=>{try{const $=Mi(s,h),le=await p.channel.delegate.get({channel:$});if(le){const W=le.map(J=>J);W.unshift(s),P(W)}}catch($){console.error($)}})()},[s,h]);const Y=async $=>{let le=p;if(!(!le.signer&&(le=await g({wallet:a}),!le)))return le.channel.delegate.remove(Mi($,h))},ce=()=>{L($c.ChannelSettings)};return t.jsxs(ue,{children:[t.jsxs(uo,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(go,{src:o.icon}),t.jsxs(si,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(Io,{children:[o.name,d&&t.jsx(fo,{src:"/verify.png"})]}),t.jsxs(si,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[R&&l&&!u||!R&&!u?t.jsx(bo,{children:"Alias Network Setup Pending"}):t.jsxs(po,{justifyContent:"flex-start",children:[t.jsxs(Ao,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(vo,{children:o.subscriber_count})]}),t.jsxs(wo,{active:E,children:[j&&t.jsx(_i,{width:"12px",src:xd,margin:"0 5px 2px 0px",height:"30px"}),E?"Active":j?"Deactivated":"Blocked"]}),o.channelType==gt.TIMEBOUND&&!e&&t.jsxs(te,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(_i,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(De,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",z]})]}),o.channelType==gt.TIMEBOUND&&e&&t.jsxs(te,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(_i,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(De,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",z]})]})]}),B&&t.jsxs(yo,{children:["Created ",B]})]})]})]}),D&&t.jsxs(te,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!e&&R&&t.jsx(ge,{onClick:i,size:"small",variant:"outline",children:"Edit Channel"}),!e&&t.jsx(on,{}),e&&R&&t.jsx(ge,{onClick:r,size:"small",variant:"danger",children:"Delete Channel"})]}),e&&t.jsx(ue,{alignItems:"flex-start",children:t.jsxs(ln,{margin:"25px 0 0 0",children:[t.jsx(De,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",t.jsx(De,{fontWeight:"600",children:H})]})}),t.jsx(ue,{alignItems:"flex-start",children:t.jsx(ln,{children:o.info})}),d&&t.jsx(si,{alignItems:"flex-start",padding:"5px 0px",children:t.jsx(Eo,{children:t.jsxs(Co,{children:[t.jsx("span",{children:"verified by:"}),t.jsx(xo,{src:C.icon}),t.jsx(mo,{children:C.name})]})})}),m===0&&t.jsxs(ue,{children:[t.jsx(Me,{children:t.jsxs(cn,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(sr,{title:"Notification Settings",description:"Customize notification preferences for users",Button:t.jsx(Ed,{onClick:ce})}),t.jsx(lr,{account:s,isAddress:!1,items:f[s],isLoading:!1,onClickEmptyListButton:ce,emptyListButtonTitle:"Add Setting"})]})}),t.jsx(Me,{children:t.jsxs(cn,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(sr,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:t.jsx(jd,{onClick:k})}),t.jsx(lr,{account:s,isAddress:!0,items:_,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:Y,icon:t.jsx(Wc,{})}]})]})})]}),t.jsx(S,{InnerComponent:wa,onConfirm:F,toastObject:Q,modalPosition:ut.ON_ROOT})]})}const si=b(ue)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,po=b(te)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,uo=b(te)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,go=b.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${K.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,fo=b.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,xo=b.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,mo=b.div``,Ao=b.div`
  width: 58px;
  height: 26px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
`,sn=b.div`
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
`,wo=b(sn)`
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
`,bo=b(sn)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`,vo=b.span`
  font-weight: 400;
  font-size: 14px;
`;b.div`
  display: flex;
  flex-direction: column;
  @media ${K.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const yo=b.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  // color: #657795;
  color: ${e=>e.theme.default.secondaryColor};
  margin-top: 10px;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,Co=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,Io=b.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  text-align: center;
  color: ${e=>e.theme.color};
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
  }
`,Eo=b.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: normal;
  text-transform: uppercase;
  margin-bottom: 18px;
`,ln=b.div`
  text-transform: none;
  font-family: FK Grotesk Neu, Source Sans Pro;
  // color: #657795;
  color: ${e=>e.theme.default.secondaryColor};
  margin: ${e=>e.margin?e.margin:"24px 0px"};
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
    font-weight: 300;
    margin-top: 10px;
    width: 100%;
    margin: 10px 0px 10px 0px;
    padding: 0 0 0 0;
  }
`,cn=b(Yn)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
`,jo=({isToggleOn:e,onToggle:n})=>t.jsxs(Bo,{children:[t.jsx(To,{id:"toggle-switch",type:"checkbox",defaultChecked:e,onClick:n}),t.jsx(dn,{htmlFor:"toggle-switch"})]}),Bo=b.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,dn=b.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 20px;
  border-radius: 15px;
  background: ${e=>e.theme.toggleInactiveBG};
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin: 5.5px 4px;
    background: #ffffff;
    transition: 0.2s;
  }
`,To=b.input`
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 20px;
  &:checked + ${dn} {
    background: ${e=>e.theme.toggleActiveBG};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      margin: 3.5px 0;
      margin-left: 16px;
      transition: 0.2s;
    }
  }
`,Xe=({message:e})=>t.jsxs(te,{display:"flex",alignItems:"center",alignSelf:"flex-start",flexDirection:"row",margin:"7px 0px",children:[t.jsx(Vn,{color:"red",size:"20"}),t.jsx(De,{fontSize:"14px",fontWeight:"400",margin:"0px 5px",color:"red",children:e})]}),li=Ae.coreContractChain,So=Ae.allowedNetworks.map(e=>({label:lt[e].label,value:e})),ko=({channelName:e,channelExpiryDate:n,channelAlias:i,channelInfo:r,channelURL:s,chainDetails:h,errorInfo:a,setChannelAlias:c,setChainDetails:o,setChannelInfo:d,setChannelName:u,setChannelExpiryDate:l,setChannelURL:f,setStepFlow:p,setChannelInfoDone:g,setTxStatus:A,isAllFilledAndValid:x})=>{const m=pe(),C=$e(769),v=qc(new Date("2023-02-01T00:00:00.000"),90),[B,T]=y.useState(!0),M=E=>E.trim().length==0;return y.useEffect(()=>(M(e)||M(r)||M(s)?T(!0):T(!1),()=>T(!0)),[e,r,s]),t.jsx(Me,{children:t.jsxs(Mo,{children:[t.jsxs(q,{flex:"1",self:"stretch",align:"stretch",height:"fit-content","min-height":"fit-content",children:[t.jsx(Ue,{style:{color:m.color},children:"Channel Name"}),t.jsxs(_o,{children:[t.jsxs(q,{flex:"1",self:"stretch",align:"stretch",height:"fit-content",children:[t.jsx(Ge,{required:!0,maxlength:"40",flex:"1",self:"stretch",align:"stretch",padding:"12px",height:"25px",weight:"400",size:"16px",bg:"white",radius:"12px",border:"1px solid #BAC4D6",value:e,onChange:E=>{u(E.target.value)}}),(a==null?void 0:a.name)&&t.jsx(Xe,{message:a==null?void 0:a.name})]}),t.jsx(Yc,{tooltipContent:"Timebound channels will be deleted after expiry",placementProps:C?{bottom:"-42px",transform:"translateX(6%)",padding:"8px 16px",background:m.default.bg,border:"1px solid rgba(173, 176, 190, 0.2)",color:m.tooltipTopSubHeading}:{bottom:"-63px",transform:"translateX(16%)",padding:"8px 16px",background:m.default.bg,border:"1px solid rgba(173, 176, 190, 0.2)",color:m.tooltipTopSubHeading},children:t.jsxs(Ro,{children:[t.jsxs(te,{style:{justifyContent:"flex-start",maxWidth:"100%"},children:[t.jsx(Ue,{style:{color:m.color},children:"Time Bound"}),v&&t.jsx(Jc,{})]}),t.jsx(jo,{isToggleOn:n!==void 0,onToggle:()=>{if(n===void 0)return l(null);l(void 0)}})]})})]})]}),n!==void 0&&t.jsxs(q,{flex:"1",self:"stretch",align:"stretch",margin:"30px 0px 0px 0px",children:[t.jsx(Ue,{style:{color:m.color},children:"Channel Expiry Date"}),t.jsx(Qo,{children:t.jsx(Do,{className:"date",value:n,onChange:l})}),(a==null?void 0:a.channelExpiryDate)&&t.jsx(Xe,{message:a==null?void 0:a.channelExpiryDate})]}),t.jsxs(q,{flex:"1",self:"stretch",align:"stretch",margin:"30px 0px 0px 0px",children:[t.jsx(Ue,{style:{color:m.color},children:"Network"}),t.jsx(Uo,{children:t.jsx(Po,{options:So,onChange:E=>{o(E.value)},value:lt[h].label})})]}),h!=li?t.jsxs(q,{margin:"30px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(Ue,{style:{color:m.color},children:"Channel Alias address"}),t.jsx(Ge,{required:!0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",bg:"white",height:"25px",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6",focusBorder:"1px solid #657795",radius:"12px",disabled:h===""||h===li,visibility:h===li?"hidden":"visible",value:i,onChange:E=>{c(E.target.value)}}),t.jsx(me,{size:"13px",margin:"7px 0px 0px 0px",color:m.default.secondaryColor,children:"Make sure you own this address as verification will take place."}),(a==null?void 0:a.address)&&t.jsx(Xe,{message:a==null?void 0:a.address})]}):null,t.jsxs(q,{margin:"30px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",style:{marginTop:"30px",position:"relative"},children:[t.jsxs(q,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(Ue,{style:{color:m.color},children:"Channel Description"}),t.jsx(me,{color:m.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:250-r.length})]}),t.jsx(Kn,{required:!0,rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6",focusBorder:"1px solid #657795",radius:"12px",bg:"#fff",value:r,onChange:E=>{d(E.target.value.slice(0,250))},autocomplete:"off"}),t.jsx(me,{size:"13px",margin:"7px 0px 0px 0px",color:m.default.secondaryColor,children:"Brief description of your channel."})]}),(a==null?void 0:a.description)&&t.jsx(Xe,{message:a==null?void 0:a.description}),t.jsxs(q,{margin:"30px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(Ue,{style:{color:m.color},children:"Channel Website URL"}),t.jsx(Ge,{required:!0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",bg:"white",height:"25px",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6;",focusBorder:"1px solid #657795",radius:"12px",value:s,onChange:E=>{f(E.target.value)}})]}),(a==null?void 0:a.url)&&t.jsx(Xe,{message:a==null?void 0:a.url}),t.jsx(Hn,{display:"flex",alignSelf:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:t.jsx(ge,{variant:"primary",disabled:!1,size:"large",onClick:()=>{x()&&(A(2),g(!0),p(1))},children:"Next"})})]})})},Mo=b(q)`
  align-items: 'flex-start';
  padding: 40px 13% 0 13%;
  @media (max-width: 1350px) {
    padding: 40px 9% 0 9%;
  }
  @media (max-width: 1250px) {
    padding: 40px 4% 0 4%;
  }
  @media ${K.laptop} {
    padding: 20px 0 0 0;
  }
`,_o=b(te)`
  align-items: flex-start;
  height: fit-content;
  margin-top: 7px;
  @media ${K.tablet} {
    flex-direction: column;
  }
`,Ue=b.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: normal;
  color: #1e1e1e;
`,Ro=b(te)`
  margin-left: 1.3rem;
  padding: 12px 18px;
  cursor: pointer;
  flex: 1;
  align-items: center;
  border-radius: 15px;
  background: ${e=>e.theme.toggleContainerBG};
  @media ${K.tablet} {
    margin-left: 0;
    margin-top: 1.25rem;
  }
`,Qo=b.div`
  margin-top: 7px;
  background-color: white;
  color: #000;
  border: 1px solid #bac4d6;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  /* margin-bottom: 28px; */

  position: relative;
  margin-top: ${e=>e.mttop?e.mttop:""};
  @media (max-width: 600px) {
    margin-top: ${e=>e.mtop?e.mtop:""};
  }
`,Do=b(kd)`
  padding-right: 4px;
  flex: 6;
  display: flex;
  align-items: center !important;
  font-family: FK Grotesk Neu, Source Sans Pro;
  .react-datetime-picker__wrapper {
    border: 0px !important;
    border-radius: 5px !important;
    height: 40px !important;
  }

  .react-datetime-picker__inputGroup {
    margin: 0px !important;
    margin-left: 12px !important;
    @media (max-width: 850px) {
      width: 4rem !important;
    }
  }

  .react-datetime-picker__inputGroup__input {
    font-weight: 500 !important;
  }
  .react-datetime-picker__inputGroup__input {
    font-weight: 500 !important;
    color: #000;
  }

  .react-datetime-picker__button svg {
    stroke: #000;
  }
  .react-datetime-picker__button {
    @media (max-width: 850px) {
      margin: 4px !important;
      padding: 0px !important;
    }
  }
  .react-datetime-picker__inputGroup__input--hasLeadingZero {
    font-weight: 500 !important;
  }
  .react-datetime-picker__inputGroup__minute {
    font-weight: 400 !important;
  }

  .react-datetime-picker__clock {
    display: none;
  }
  .react-datetime-picker__inputGroup__divider {
    font-weight: 400;
  }
`,Uo=b.div`
  margin-top: 7px;
  flex: 1;
  .is-open {
    margin-bottom: 110px;
  }
`,Po=b(Td)`
  .Dropdown-control {
    background-color: white;
    color: #000;
    border: 1px solid #bac4d6;
    border-radius: 12px;
    flex: 1;
    outline: none;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .Dropdown-arrow {
    top: 20px;
    bottom: 0;
    border-color: #f #000 #000;
  }
  .Dropdown-menu {
    border-color: #bac4d6;
    border-radius: 12px;
    padding: 0.5rem 0;
    .is-selected {
      background-color: #fff;
      color: #d00775;
    }
  }

  .Dropdown-option {
    background-color: #fff;
    color: #000;
    padding: 0.8rem 2rem;
  }
  .Dropdown-option:hover {
    background-color: #fff;
    color: #d00775;
  }
`,Lo=({progress:e,processingInfo:n,progressInfo:i})=>{const r=pe();return t.jsxs(Me,{children:[t.jsx(zo,{children:t.jsx(Oo,{children:i})}),t.jsx(Vr,{sx:{width:"30em",margin:"50px auto",color:"#cf1c84",height:"6px",borderRadius:"20px","@media (max-width:600px)":{width:"100%"}},color:"inherit",variant:"determinate",value:e}),t.jsxs(q,{display:"flex",direction:"row",align:"center",margin:"0px 0px",children:[t.jsx(Ii,{color:"#cf1c84",loading:!0,height:13,width:2.5}),t.jsx(Ei,{margin:"auto 15px",textTransform:"none",color:r.color,size:"16px",weight:"500",children:n})]})]})},zo=b.div`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 167px;
  border-radius: 20px;
  background-color: #f4f5fa;
  margin: 0 auto;
  text-transform: none;
  margin-top: 60px;
  color: #cf1c84;
  align-items: center;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;


  @media (max-width: 768px) {
    min-width: 100%;
    font-size: 12px;
    height: auto;
    text-align: center;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    width: 75%;
    text-align: center;
  }
`,Oo=b.div`
  padding: 0px 0px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 768px) and (max-width: 1700px) {
    padding: 10px 40px;
  }
`,No=({channelStakeFees:e,setStakeFeesChoosen:n,setProcessingInfo:i,handleCreateChannel:r})=>{const{loading:s,error:h,executeAsyncFunction:a}=dr(bd),{provider:c,account:o}=Se(),[d,u]=y.useState(0),[l,f]=y.useState(!1),p=$e(600),g=async m=>{f(!0);const C=await Ui({noOfTokens:m,provider:c,account:o});i(C+"PUSH Tokens minted successfully!"),f(!1),u(C)},A=async()=>{const m=await vd({address:o,provider:c});u(m)},x=async()=>{await a({provider:c})};return y.useEffect(()=>{A()},[d]),t.jsx(y.Fragment,{children:t.jsxs(qo,{children:[t.jsxs(q,{self:"center",maxWidth:"800px",width:"100%",margin:"60px 0px 0px 0px",children:[t.jsxs(Fo,{children:[t.jsx("p",{children:"Amount for Staking"}),t.jsxs(Go,{children:[t.jsxs("b",{children:[e," PUSH"]}),t.jsxs(Ho,{children:["Balance: ",d]})]})]}),l?t.jsx(Ne,{type:Fe.SEAMLESS}):t.jsx(Di,{onMintPushToken:g,noOfPushTokensToCheck:50}),t.jsxs(Wo,{children:["Don't see Push token in your wallet?",t.jsx($o,{onClick:x,children:"Import Token "}),s&&t.jsx("span",{children:t.jsx(Ne,{type:Fe.SEAMLESS,spinnerSize:20})})]})]}),t.jsx(q,{width:"12.2em",self:"stretch",align:"stretch",margin:p?"70px auto 50px auto":"100px auto 50px auto",children:t.jsx(ge,{onClick:()=>{n(!0),r()},variant:"primary",size:"large",children:"Create Channel"})})]})})},Fo=b.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-radius: 20px;
  background-color: #f4f5fa;
  align-items: center;
  z-index: 1;

  @media ${K.tablet} {
    width: 100%;
  }

  p {
    text-align: center;
    color: #1e1e1e;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: normal;
    margin-left: 50px;
    @media (max-width: 768px) {
      margin-left: 20px;
      font-size: 18px;
    }
  }
  b {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    text-align: right;
    letter-spacing: normal;
    color: #cf1c84;
    margin-right: 50px;
    @media (max-width: 758px) {
      margin-right: 20px;
      font-size: 26px;
    }
  }
`,Go=b.div`
  display: flex;
  flex-direction: column;
`,Ho=b.div`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #657795;
`,Wo=b.div`
  align-self: end;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #657795;
  margin: 10px 45px 10px 0px;
  display: flex;
  align-items: center;
`,$o=b(De)`
  color: #d53a94;
  font-weight: 600;
  cursor: pointer;
  margin: 0px 5px;

  &:hover {
    text-decoration: underline;
  }
`,qo=b(q)`
  padding: 5px 0 0 0;
  self: stretch;
  align: flex-start;
  justify: center;
  width: 100%;
`;var hn={exports:{}};(function(e,n){(function(i){e.exports=i()})(function(){return function(){function i(r,s,h){function a(d,u){if(!s[d]){if(!r[d]){var l=typeof ei=="function"&&ei;if(!u&&l)return l(d,!0);if(c)return c(d,!0);var f=new Error("Cannot find module '"+d+"'");throw f.code="MODULE_NOT_FOUND",f}var p=s[d]={exports:{}};r[d][0].call(p.exports,function(g){var A=r[d][1][g];return a(A||g)},p,p.exports,i,r,s,h)}return s[d].exports}for(var c=typeof ei=="function"&&ei,o=0;o<h.length;o++)a(h[o]);return a}return i}()({1:[function(i,r,s){var h=i("multimath"),a=i("./mm_unsharp_mask"),c=i("./mm_resize");function o(d){var u=d||[],l={js:u.indexOf("js")>=0,wasm:u.indexOf("wasm")>=0};h.call(this,l),this.features={js:l.js,wasm:l.wasm&&this.has_wasm()},this.use(a),this.use(c)}o.prototype=Object.create(h.prototype),o.prototype.constructor=o,o.prototype.resizeAndUnsharp=function(d,u){var l=this.resize(d,u);return d.unsharpAmount&&this.unsharp_mask(l,d.toWidth,d.toHeight,d.unsharpAmount,d.unsharpRadius,d.unsharpThreshold),l},r.exports=o},{"./mm_resize":4,"./mm_unsharp_mask":9,multimath:19}],2:[function(i,r,s){function h(l){return l<0?0:l>255?255:l}function a(l){return l>=0?l:0}function c(l,f,p,g,A,x){var m,C,v,B,T,M,E,j,R,D,_,P=0,U=0;for(R=0;R<g;R++){for(T=0,D=0;D<A;D++){for(M=x[T++],E=x[T++],j=P+M*4|0,m=C=v=B=0;E>0;E--)_=x[T++],B=B+_*l[j+3]|0,v=v+_*l[j+2]|0,C=C+_*l[j+1]|0,m=m+_*l[j]|0,j=j+4|0;f[U+3]=a(B>>7),f[U+2]=a(v>>7),f[U+1]=a(C>>7),f[U]=a(m>>7),U=U+g*4|0}U=(R+1)*4|0,P=(R+1)*p*4|0}}function o(l,f,p,g,A,x){var m,C,v,B,T,M,E,j,R,D,_,P=0,U=0;for(R=0;R<g;R++){for(T=0,D=0;D<A;D++){for(M=x[T++],E=x[T++],j=P+M*4|0,m=C=v=B=0;E>0;E--)_=x[T++],B=B+_*l[j+3]|0,v=v+_*l[j+2]|0,C=C+_*l[j+1]|0,m=m+_*l[j]|0,j=j+4|0;m>>=7,C>>=7,v>>=7,B>>=7,f[U+3]=h(B+8192>>14),f[U+2]=h(v+8192>>14),f[U+1]=h(C+8192>>14),f[U]=h(m+8192>>14),U=U+g*4|0}U=(R+1)*4|0,P=(R+1)*p*4|0}}function d(l,f,p,g,A,x){var m,C,v,B,T,M,E,j,R,D,_,P,U=0,N=0;for(D=0;D<g;D++){for(M=0,_=0;_<A;_++){for(E=x[M++],j=x[M++],R=U+E*4|0,m=C=v=B=0;j>0;j--)P=x[M++],T=l[R+3],B=B+P*T|0,v=v+P*l[R+2]*T|0,C=C+P*l[R+1]*T|0,m=m+P*l[R]*T|0,R=R+4|0;v=v/255|0,C=C/255|0,m=m/255|0,f[N+3]=a(B>>7),f[N+2]=a(v>>7),f[N+1]=a(C>>7),f[N]=a(m>>7),N=N+g*4|0}N=(D+1)*4|0,U=(D+1)*p*4|0}}function u(l,f,p,g,A,x){var m,C,v,B,T,M,E,j,R,D,_,P=0,U=0;for(R=0;R<g;R++){for(T=0,D=0;D<A;D++){for(M=x[T++],E=x[T++],j=P+M*4|0,m=C=v=B=0;E>0;E--)_=x[T++],B=B+_*l[j+3]|0,v=v+_*l[j+2]|0,C=C+_*l[j+1]|0,m=m+_*l[j]|0,j=j+4|0;m>>=7,C>>=7,v>>=7,B>>=7,B=h(B+8192>>14),B>0&&(m=m*255/B|0,C=C*255/B|0,v=v*255/B|0),f[U+3]=B,f[U+2]=h(v+8192>>14),f[U+1]=h(C+8192>>14),f[U]=h(m+8192>>14),U=U+g*4|0}U=(R+1)*4|0,P=(R+1)*p*4|0}}r.exports={convolveHor:c,convolveVert:o,convolveHorWithPre:d,convolveVertWithPre:u}},{}],3:[function(i,r,s){r.exports="AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEYA2AGf39/f39/AGAAAGAIf39/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBwYBAAAAAAIGBgF/AEEACweUAQgRX193YXNtX2NhbGxfY3RvcnMAAAtjb252b2x2ZUhvcgABDGNvbnZvbHZlVmVydAACEmNvbnZvbHZlSG9yV2l0aFByZQADE2NvbnZvbHZlVmVydFdpdGhQcmUABApjb252b2x2ZUhWAAUMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAKyA4GAwABC4wDARB/AkAgA0UNACAERQ0AIANBAnQhFQNAQQAhE0EAIQsDQCALQQJqIQcCfyALQQF0IAVqIgYuAQIiC0UEQEEAIQhBACEGQQAhCUEAIQogBwwBCyASIAYuAQBqIQhBACEJQQAhCiALIRRBACEOIAchBkEAIQ8DQCAFIAZBAXRqLgEAIhAgACAIQQJ0aigCACIRQRh2bCAPaiEPIBFB/wFxIBBsIAlqIQkgEUEQdkH/AXEgEGwgDmohDiARQQh2Qf8BcSAQbCAKaiEKIAhBAWohCCAGQQFqIQYgFEEBayIUDQALIAlBB3UhCCAKQQd1IQYgDkEHdSEJIA9BB3UhCiAHIAtqCyELIAEgDEEBdCIHaiAIQQAgCEEAShs7AQAgASAHQQJyaiAGQQAgBkEAShs7AQAgASAHQQRyaiAJQQAgCUEAShs7AQAgASAHQQZyaiAKQQAgCkEAShs7AQAgDCAVaiEMIBNBAWoiEyAERw0ACyANQQFqIg0gAmwhEiANQQJ0IQwgAyANRw0ACwsL2gMBD38CQCADRQ0AIARFDQAgAkECdCEUA0AgCyEMQQAhE0EAIQIDQCACQQJqIQYCfyACQQF0IAVqIgcuAQIiAkUEQEEAIQhBACEHQQAhCkEAIQkgBgwBCyAHLgEAQQJ0IBJqIQhBACEJIAIhCkEAIQ0gBiEHQQAhDkEAIQ8DQCAFIAdBAXRqLgEAIhAgACAIQQF0IhFqLwEAbCAJaiEJIAAgEUEGcmovAQAgEGwgDmohDiAAIBFBBHJqLwEAIBBsIA9qIQ8gACARQQJyai8BACAQbCANaiENIAhBBGohCCAHQQFqIQcgCkEBayIKDQALIAlBB3UhCCANQQd1IQcgDkEHdSEKIA9BB3UhCSACIAZqCyECIAEgDEECdGogB0GAQGtBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobQQh0QYD+A3EgCUGAQGtBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobQRB0QYCA/AdxIApBgEBrQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBgEBrQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG3I2AgAgAyAMaiEMIBNBAWoiEyAERw0ACyAUIAtBAWoiC2whEiADIAtHDQALCwuSAwEQfwJAIANFDQAgBEUNACADQQJ0IRUDQEEAIRNBACEGA0AgBkECaiEIAn8gBkEBdCAFaiIGLgECIgdFBEBBACEJQQAhDEEAIQ1BACEOIAgMAQsgEiAGLgEAaiEJQQAhDkEAIQ1BACEMIAchFEEAIQ8gCCEGA0AgBSAGQQF0ai4BACAAIAlBAnRqKAIAIhBBGHZsIhEgD2ohDyARIBBBEHZB/wFxbCAMaiEMIBEgEEEIdkH/AXFsIA1qIQ0gESAQQf8BcWwgDmohDiAJQQFqIQkgBkEBaiEGIBRBAWsiFA0ACyAPQQd1IQkgByAIagshBiABIApBAXQiCGogDkH/AW1BB3UiB0EAIAdBAEobOwEAIAEgCEECcmogDUH/AW1BB3UiB0EAIAdBAEobOwEAIAEgCEEEcmogDEH/AW1BB3UiB0EAIAdBAEobOwEAIAEgCEEGcmogCUEAIAlBAEobOwEAIAogFWohCiATQQFqIhMgBEcNAAsgC0EBaiILIAJsIRIgC0ECdCEKIAMgC0cNAAsLC4IEAQ9/AkAgA0UNACAERQ0AIAJBAnQhFANAIAshDEEAIRJBACEHA0AgB0ECaiEKAn8gB0EBdCAFaiICLgECIhNFBEBBACEIQQAhCUEAIQYgCiEHQQAMAQsgAi4BAEECdCARaiEJQQAhByATIQJBACENIAohBkEAIQ5BACEPA0AgBSAGQQF0ai4BACIIIAAgCUEBdCIQai8BAGwgB2ohByAAIBBBBnJqLwEAIAhsIA5qIQ4gACAQQQRyai8BACAIbCAPaiEPIAAgEEECcmovAQAgCGwgDWohDSAJQQRqIQkgBkEBaiEGIAJBAWsiAg0ACyAHQQd1IQggDUEHdSEJIA9BB3UhBiAKIBNqIQcgDkEHdQtBgEBrQQ51IgJB/wEgAkH/AUgbIgJBACACQQBKGyIKQf8BcQRAIAlB/wFsIAJtIQkgCEH/AWwgAm0hCCAGQf8BbCACbSEGCyABIAxBAnRqIAlBgEBrQQ51IgJB/wEgAkH/AUgbIgJBACACQQBKG0EIdEGA/gNxIAZBgEBrQQ51IgJB/wEgAkH/AUgbIgJBACACQQBKG0EQdEGAgPwHcSAKQRh0ciAIQYBAa0EOdSICQf8BIAJB/wFIGyICQQAgAkEAShtycjYCACADIAxqIQwgEkEBaiISIARHDQALIBQgC0EBaiILbCERIAMgC0cNAAsLC0AAIAcEQEEAIAIgAyAEIAUgABADIAJBACAEIAUgBiABEAQPC0EAIAIgAyAEIAUgABABIAJBACAEIAUgBiABEAIL"},{}],4:[function(i,r,s){r.exports={name:"resize",fn:i("./resize"),wasm_fn:i("./resize_wasm"),wasm_src:i("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(i,r,s){var h=i("./resize_filter_gen"),a=i("./convolve"),c=a.convolveHor,o=a.convolveVert,d=a.convolveHorWithPre,u=a.convolveVertWithPre;function l(p,g,A){for(var x=3,m=g*A*4|0;x<m;){if(p[x]!==255)return!0;x=x+4|0}return!1}function f(p,g,A){for(var x=3,m=g*A*4|0;x<m;)p[x]=255,x=x+4|0}r.exports=function(p){var g=p.src,A=p.width,x=p.height,m=p.toWidth,C=p.toHeight,v=p.scaleX||p.toWidth/p.width,B=p.scaleY||p.toHeight/p.height,T=p.offsetX||0,M=p.offsetY||0,E=p.dest||new Uint8Array(m*C*4),j=typeof p.filter>"u"?"mks2013":p.filter,R=h(j,A,m,v,T),D=h(j,x,C,B,M),_=new Uint16Array(m*x*4);return l(g,A,x)?(d(g,_,A,x,m,R),u(_,E,x,m,C,D)):(c(g,_,A,x,m,R),o(_,E,x,m,C,D),f(E,m,C)),E}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(i,r,s){var h=i("./resize_filter_info"),a=14;function c(o){return Math.round(o*((1<<a)-1))}r.exports=function(o,d,u,l,f){var p=h.filter[o].fn,g=1/l,A=Math.min(1,l),x=h.filter[o].win/A,m,C,v,B,T,M,E,j,R,D,_,P,U,N,L,w,I,S=Math.floor((x+1)*2),Q=new Int16Array((S+2)*u),k=0,F=!Q.subarray||!Q.set;for(m=0;m<u;m++){for(C=(m+.5)*g+f,v=Math.max(0,Math.floor(C-x)),B=Math.min(d-1,Math.ceil(C+x)),T=B-v+1,M=new Float32Array(T),E=new Int16Array(T),j=0,R=v,D=0;R<=B;R++,D++)_=p((R+.5-C)*A),j+=_,M[D]=_;for(P=0,D=0;D<M.length;D++)U=M[D]/j,P+=U,E[D]=c(U);for(E[u>>1]+=c(1-P),N=0;N<E.length&&E[N]===0;)N++;if(N<E.length){for(L=E.length-1;L>0&&E[L]===0;)L--;if(w=v+N,I=L-N+1,Q[k++]=w,Q[k++]=I,!F)Q.set(E.subarray(N,L+1),k),k+=I;else for(D=N;D<=L;D++)Q[k++]=E[D]}else Q[k++]=0,Q[k++]=0}return Q}},{"./resize_filter_info":7}],7:[function(i,r,s){var h={box:{win:.5,fn:function(a){return a<0&&(a=-a),a<.5?1:0}},hamming:{win:1,fn:function(a){if(a<0&&(a=-a),a>=1)return 0;if(a<11920929e-14)return 1;var c=a*Math.PI;return Math.sin(c)/c*(.54+.46*Math.cos(c/1))}},lanczos2:{win:2,fn:function(a){if(a<0&&(a=-a),a>=2)return 0;if(a<11920929e-14)return 1;var c=a*Math.PI;return Math.sin(c)/c*Math.sin(c/2)/(c/2)}},lanczos3:{win:3,fn:function(a){if(a<0&&(a=-a),a>=3)return 0;if(a<11920929e-14)return 1;var c=a*Math.PI;return Math.sin(c)/c*Math.sin(c/3)/(c/3)}},mks2013:{win:2.5,fn:function(a){return a<0&&(a=-a),a>=2.5?0:a>=1.5?-.125*(a-2.5)*(a-2.5):a>=.5?.25*(4*a*a-11*a+7):1.0625-1.75*a*a}}};r.exports={filter:h,f2q:{box:0,hamming:1,lanczos2:2,lanczos3:3},q2f:["box","hamming","lanczos2","lanczos3"]}},{}],8:[function(i,r,s){var h=i("./resize_filter_gen");function a(l,f,p){for(var g=3,A=f*p*4|0;g<A;){if(l[g]!==255)return!0;g=g+4|0}return!1}function c(l,f,p){for(var g=3,A=f*p*4|0;g<A;)l[g]=255,g=g+4|0}function o(l){return new Uint8Array(l.buffer,0,l.byteLength)}var d=!0;try{d=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1}catch{}function u(l,f,p){if(d){f.set(o(l),p);return}for(var g=p,A=0;A<l.length;A++){var x=l[A];f[g++]=x&255,f[g++]=x>>8&255}}r.exports=function(l){var f=l.src,p=l.width,g=l.height,A=l.toWidth,x=l.toHeight,m=l.scaleX||l.toWidth/l.width,C=l.scaleY||l.toHeight/l.height,v=l.offsetX||0,B=l.offsetY||0,T=l.dest||new Uint8Array(A*x*4),M=typeof l.filter>"u"?"mks2013":l.filter,E=h(M,p,A,m,v),j=h(M,g,x,C,B),R=0,D=Math.max(f.byteLength,T.byteLength),_=this.__align(R+D),P=g*A*4*2,U=this.__align(_+P),N=this.__align(U+E.byteLength),L=N+j.byteLength,w=this.__instance("resize",L),I=new Uint8Array(this.__memory.buffer),S=new Uint32Array(this.__memory.buffer),Q=new Uint32Array(f.buffer);S.set(Q),u(E,I,U),u(j,I,N);var k=w.exports.convolveHV||w.exports._convolveHV;a(f,p,g)?k(U,N,_,p,g,A,x,1):(k(U,N,_,p,g,A,x,0),c(T,A,x));var F=new Uint32Array(T.buffer);return F.set(new Uint32Array(this.__memory.buffer,0,x*A)),T}},{"./resize_filter_gen":6}],9:[function(i,r,s){r.exports={name:"unsharp_mask",fn:i("./unsharp_mask"),wasm_fn:i("./unsharp_mask_wasm"),wasm_src:i("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":10,"./unsharp_mask_wasm":11,"./unsharp_mask_wasm_base64":12}],10:[function(i,r,s){var h=i("glur/mono16");function a(c,o,d){for(var u=o*d,l=new Uint16Array(u),f,p,g,A,x=0;x<u;x++)f=c[4*x],p=c[4*x+1],g=c[4*x+2],A=f>=p&&f>=g?f:p>=g&&p>=f?p:g,l[x]=A<<8;return l}r.exports=function(c,o,d,u,l,f){var p,g,A,x,m;if(!(u===0||l<.5)){l>2&&(l=2);var C=a(c,o,d),v=new Uint16Array(C);h(v,o,d,l);for(var B=u/100*4096+.5|0,T=f<<8,M=o*d,E=0;E<M;E++)p=C[E],x=p-v[E],Math.abs(x)>=T&&(g=p+(B*x+2048>>12),g=g>65280?65280:g,g=g<0?0:g,p=p!==0?p:1,A=(g<<12)/p|0,m=E*4,c[m]=c[m]*A+2048>>12,c[m+1]=c[m+1]*A+2048>>12,c[m+2]=c[m+2]*A+2048>>12)}}},{"glur/mono16":18}],11:[function(i,r,s){r.exports=function(h,a,c,o,d,u){if(!(o===0||d<.5)){d>2&&(d=2);var l=a*c,f=l*4,p=l*2,g=l*2,A=Math.max(a,c)*4,x=8*4,m=0,C=f,v=C+p,B=v+g,T=B+g,M=T+A,E=this.__instance("unsharp_mask",f+p+g*2+A+x,{exp:Math.exp}),j=new Uint32Array(h.buffer),R=new Uint32Array(this.__memory.buffer);R.set(j);var D=E.exports.hsv_v16||E.exports._hsv_v16;D(m,C,a,c),D=E.exports.blurMono16||E.exports._blurMono16,D(C,v,B,T,M,a,c,d),D=E.exports.unsharp||E.exports._unsharp,D(m,m,C,v,a,c,o,u),j.set(new Uint32Array(this.__memory.buffer,0,l))}}},{}],12:[function(i,r,s){r.exports="AGFzbQEAAAAADAZkeWxpbmsAAAAAAAE0B2AAAGAEf39/fwBgBn9/f39/fwBgCH9/f39/f39/AGAIf39/f39/f30AYAJ9fwBgAXwBfAIZAgNlbnYDZXhwAAYDZW52Bm1lbW9yeQIAAAMHBgAFAgQBAwYGAX8AQQALB4oBCBFfX3dhc21fY2FsbF9jdG9ycwABFl9fYnVpbGRfZ2F1c3NpYW5fY29lZnMAAg5fX2dhdXNzMTZfbGluZQADCmJsdXJNb25vMTYABAdoc3ZfdjE2AAUHdW5zaGFycAAGDF9fZHNvX2hhbmRsZQMAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwABCsUMBgMAAQvWAQEHfCABRNuGukOCGvs/IAC7oyICRAAAAAAAAADAohAAIgW2jDgCFCABIAKaEAAiAyADoCIGtjgCECABRAAAAAAAAPA/IAOhIgQgBKIgAyACIAKgokQAAAAAAADwP6AgBaGjIgS2OAIAIAEgBSAEmqIiB7Y4AgwgASADIAJEAAAAAAAA8D+gIASioiIItjgCCCABIAMgAkQAAAAAAADwv6AgBKKiIgK2OAIEIAEgByAIoCAFRAAAAAAAAPA/IAahoCIDo7Y4AhwgASAEIAKgIAOjtjgCGAuGBQMGfwl8An0gAyoCDCEVIAMqAgghFiADKgIUuyERIAMqAhC7IRACQCAEQQFrIghBAEgiCQRAIAIhByAAIQYMAQsgAiAALwEAuCIPIAMqAhi7oiIMIBGiIg0gDCAQoiAPIAMqAgS7IhOiIhQgAyoCALsiEiAPoqCgoCIOtjgCACACQQRqIQcgAEECaiEGIAhFDQAgCEEBIAhBAUgbIgpBf3MhCwJ/IAQgCmtBAXFFBEAgDiENIAgMAQsgAiANIA4gEKIgFCASIAAvAQK4Ig+ioKCgIg22OAIEIAJBCGohByAAQQRqIQYgDiEMIARBAmsLIQIgC0EAIARrRg0AA0AgByAMIBGiIA0gEKIgDyAToiASIAYvAQC4Ig6ioKCgIgy2OAIAIAcgDSARoiAMIBCiIA4gE6IgEiAGLwECuCIPoqCgoCINtjgCBCAHQQhqIQcgBkEEaiEGIAJBAkohACACQQJrIQIgAA0ACwsCQCAJDQAgASAFIAhsQQF0aiIAAn8gBkECay8BACICuCINIBW7IhKiIA0gFrsiE6KgIA0gAyoCHLuiIgwgEKKgIAwgEaKgIg8gB0EEayIHKgIAu6AiDkQAAAAAAADwQWMgDkQAAAAAAAAAAGZxBEAgDqsMAQtBAAs7AQAgCEUNACAGQQRrIQZBACAFa0EBdCEBA0ACfyANIBKiIAJB//8DcbgiDSAToqAgDyIOIBCioCAMIBGioCIPIAdBBGsiByoCALugIgxEAAAAAAAA8EFjIAxEAAAAAAAAAABmcQRAIAyrDAELQQALIQMgBi8BACECIAAgAWoiACADOwEAIAZBAmshBiAIQQFKIQMgDiEMIAhBAWshCCADDQALCwvRAgIBfwd8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIglEAAAAAAAAAMCiEAAiDLaMOAIUIAQgCZoQACIKIAqgIg22OAIQIAREAAAAAAAA8D8gCqEiCyALoiAKIAkgCaCiRAAAAAAAAPA/oCAMoaMiC7Y4AgAgBCAMIAuaoiIOtjgCDCAEIAogCUQAAAAAAADwP6AgC6KiIg+2OAIIIAQgCiAJRAAAAAAAAPC/oCALoqIiCbY4AgQgBCAOIA+gIAxEAAAAAAAA8D8gDaGgIgqjtjgCHCAEIAsgCaAgCqO2OAIYIAYEQANAIAAgBSAIbEEBdGogAiAIQQF0aiADIAQgBSAGEAMgCEEBaiIIIAZHDQALCyAFRQ0AQQAhCANAIAIgBiAIbEEBdGogASAIQQF0aiADIAQgBiAFEAMgCEEBaiIIIAVHDQALCwtxAQN/IAIgA2wiBQRAA0AgASAAKAIAIgRBEHZB/wFxIgIgAiAEQQh2Qf8BcSIDIAMgBEH/AXEiBEkbIAIgA0sbIgYgBiAEIAIgBEsbIAMgBEsbQQh0OwEAIAFBAmohASAAQQRqIQAgBUEBayIFDQALCwuZAgIDfwF8IAQgBWwhBAJ/IAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6AiC5lEAAAAAAAA4EFjBEAgC6oMAQtBgICAgHgLIQUgBARAIAdBCHQhCUEAIQYDQCAJIAIgBkEBdCIHai8BACIBIAMgB2ovAQBrIgcgB0EfdSIIaiAIc00EQCAAIAZBAnQiCGoiCiAFIAdsQYAQakEMdSABaiIHQYD+AyAHQYD+A0gbIgdBACAHQQBKG0EMdCABQQEgARtuIgEgCi0AAGxBgBBqQQx2OgAAIAAgCEEBcmoiByABIActAABsQYAQakEMdjoAACAAIAhBAnJqIgcgASAHLQAAbEGAEGpBDHY6AAALIAZBAWoiBiAERw0ACwsL"},{}],13:[function(i,r,s){var h=100;function a(c,o){this.create=c,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=o||2e3}a.prototype.acquire=function(){var c=this,o;return this.available.length!==0?o=this.available.pop():(o=this.create(),o.id=this.lastId++,o.release=function(){return c.release(o)}),this.acquired[o.id]=o,o},a.prototype.release=function(c){var o=this;delete this.acquired[c.id],c.lastUsed=Date.now(),this.available.push(c),this.timeoutId===0&&(this.timeoutId=setTimeout(function(){return o.gc()},h))},a.prototype.gc=function(){var c=this,o=Date.now();this.available=this.available.filter(function(d){return o-d.lastUsed>c.idle?(d.destroy(),!1):!0}),this.available.length!==0?this.timeoutId=setTimeout(function(){return c.gc()},h):this.timeoutId=0},r.exports=a},{}],14:[function(i,r,s){var h=2;r.exports=function(a,c,o,d,u,l){var f=o/a,p=d/c,g=(2*l+h+1)/u;if(g>.5)return[[o,d]];var A=Math.ceil(Math.log(Math.min(f,p))/Math.log(g));if(A<=1)return[[o,d]];for(var x=[],m=0;m<A;m++){var C=Math.round(Math.pow(Math.pow(a,A-m-1)*Math.pow(o,m+1),1/A)),v=Math.round(Math.pow(Math.pow(c,A-m-1)*Math.pow(d,m+1),1/A));x.push([C,v])}return x}},{}],15:[function(i,r,s){var h=1e-5;function a(o){var d=Math.round(o);return Math.abs(o-d)<h?d:Math.floor(o)}function c(o){var d=Math.round(o);return Math.abs(o-d)<h?d:Math.ceil(o)}r.exports=function(o){var d=o.toWidth/o.width,u=o.toHeight/o.height,l=a(o.srcTileSize*d)-2*o.destTileBorder,f=a(o.srcTileSize*u)-2*o.destTileBorder;if(l<1||f<1)throw new Error("Internal error in pica: target tile width/height is too small.");var p,g,A,x,m,C,v=[],B;for(x=0;x<o.toHeight;x+=f)for(A=0;A<o.toWidth;A+=l)p=A-o.destTileBorder,p<0&&(p=0),m=A+l+o.destTileBorder-p,p+m>=o.toWidth&&(m=o.toWidth-p),g=x-o.destTileBorder,g<0&&(g=0),C=x+f+o.destTileBorder-g,g+C>=o.toHeight&&(C=o.toHeight-g),B={toX:p,toY:g,toWidth:m,toHeight:C,toInnerX:A,toInnerY:x,toInnerWidth:l,toInnerHeight:f,offsetX:p/d-a(p/d),offsetY:g/u-a(g/u),scaleX:d,scaleY:u,x:a(p/d),y:a(g/u),width:c(m/d),height:c(C/u)},v.push(B);return v}},{}],16:[function(i,r,s){function h(a){return Object.prototype.toString.call(a)}r.exports.isCanvas=function(a){var c=h(a);return c==="[object HTMLCanvasElement]"||c==="[object OffscreenCanvas]"||c==="[object Canvas]"},r.exports.isImage=function(a){return h(a)==="[object HTMLImageElement]"},r.exports.isImageBitmap=function(a){return h(a)==="[object ImageBitmap]"},r.exports.limiter=function(a){var c=0,o=[];function d(){c<a&&o.length&&(c++,o.shift()())}return function(u){return new Promise(function(l,f){o.push(function(){u().then(function(p){l(p),c--,d()},function(p){f(p),c--,d()})}),d()})}},r.exports.cib_quality_name=function(a){switch(a){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"},r.exports.cib_support=function(a){return Promise.resolve().then(function(){if(typeof createImageBitmap>"u")return!1;var c=a(100,100);return createImageBitmap(c,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then(function(o){var d=o.width===10;return o.close(),c=null,d})}).catch(function(){return!1})},r.exports.worker_offscreen_canvas_support=function(){return new Promise(function(a,c){if(typeof OffscreenCanvas>"u"){a(!1);return}function o(l){if(typeof createImageBitmap>"u"){l.postMessage(!1);return}Promise.resolve().then(function(){var f=new OffscreenCanvas(10,10),p=f.getContext("2d");return p.rect(0,0,1,1),createImageBitmap(f,0,0,1,1)}).then(function(){return l.postMessage(!0)},function(){return l.postMessage(!1)})}var d=btoa("(".concat(o.toString(),")(self);")),u=new Worker("data:text/javascript;base64,".concat(d));u.onmessage=function(l){return a(l.data)},u.onerror=c}).then(function(a){return a},function(){return!1})},r.exports.can_use_canvas=function(a){var c=!1;try{var o=a(2,1),d=o.getContext("2d"),u=d.createImageData(2,1);u.data[0]=12,u.data[1]=23,u.data[2]=34,u.data[3]=255,u.data[4]=45,u.data[5]=56,u.data[6]=67,u.data[7]=255,d.putImageData(u,0,0),u=null,u=d.getImageData(0,0,2,1),u.data[0]===12&&u.data[1]===23&&u.data[2]===34&&u.data[3]===255&&u.data[4]===45&&u.data[5]===56&&u.data[6]===67&&u.data[7]===255&&(c=!0)}catch{}return c},r.exports.cib_can_use_region=function(){return new Promise(function(a){if(typeof Image>"u"||typeof createImageBitmap>"u"){a(!1);return}var c=new Image;c.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z",c.onload=function(){createImageBitmap(c,0,0,c.width,c.height).then(function(o){o.width===c.width&&o.height===c.height?a(!0):a(!1)},function(){return a(!1)})},c.onerror=function(){return a(!1)}})}},{}],17:[function(i,r,s){r.exports=function(){var h=i("./mathlib"),a;onmessage=function(c){var o=c.data.opts;if(!o.src&&o.srcBitmap){var d=new OffscreenCanvas(o.width,o.height),u=d.getContext("2d");u.drawImage(o.srcBitmap,0,0),o.src=u.getImageData(0,0,o.width,o.height).data,d.width=d.height=0,d=null,o.srcBitmap.close(),o.srcBitmap=null}a||(a=new h(c.data.features));var l=a.resizeAndUnsharp(o);postMessage({data:l},[l.buffer])}}},{"./mathlib":1}],18:[function(i,r,s){var h,a,c,o,d,u,l,f;function p(x){x<.5&&(x=.5);var m=Math.exp(.726*.726)/x,C=Math.exp(-m),v=Math.exp(-2*m),B=(1-C)*(1-C)/(1+2*m*C-v);return h=B,a=B*(m-1)*C,c=B*(m+1)*C,o=-B*v,d=2*C,u=-v,l=(h+a)/(1-d-u),f=(c+o)/(1-d-u),new Float32Array([h,a,c,o,d,u,l,f])}function g(x,m,C,v,B,T){var M,E,j,R,D,_,P,U,N,L,w,I,S,Q;for(N=0;N<T;N++){for(_=N*B,P=N,U=0,M=x[_],D=M*v[6],R=D,w=v[0],I=v[1],S=v[4],Q=v[5],L=0;L<B;L++)E=x[_],j=E*w+M*I+R*S+D*Q,D=R,R=j,M=E,C[U]=R,U++,_++;for(_--,U--,P+=T*(B-1),M=x[_],D=M*v[7],R=D,E=M,w=v[2],I=v[3],L=B-1;L>=0;L--)j=E*w+M*I+R*S+D*Q,D=R,R=j,M=E,E=x[_],m[P]=C[U]+R,_--,U--,P-=T}}function A(x,m,C,v){if(v){var B=new Uint16Array(x.length),T=new Float32Array(Math.max(m,C)),M=p(v);g(x,B,T,M,m,C),g(B,x,T,M,C,m)}}r.exports=A},{}],19:[function(i,r,s){var h=i("object-assign"),a=i("./lib/base64decode"),c=i("./lib/wa_detect"),o={js:!0,wasm:!0};function d(u){if(!(this instanceof d))return new d(u);var l=h({},o,u||{});if(this.options=l,this.__cache={},this.__init_promise=null,this.__modules=l.modules||{},this.__memory=null,this.__wasm={},this.__isLE=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1,!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}d.prototype.has_wasm=c,d.prototype.use=function(u){return this.__modules[u.name]=u,this.options.wasm&&this.has_wasm()&&u.wasm_fn?this[u.name]=u.wasm_fn:this[u.name]=u.fn,this},d.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm())return Promise.reject(new Error(`mathlib: only "wasm" was enabled, but it's not supported`));var u=this;return this.__init_promise=Promise.all(Object.keys(u.__modules).map(function(l){var f=u.__modules[l];return!u.options.wasm||!u.has_wasm()||!f.wasm_fn||u.__wasm[l]?null:WebAssembly.compile(u.__base64decode(f.wasm_src)).then(function(p){u.__wasm[l]=p})})).then(function(){return u}),this.__init_promise},d.prototype.__base64decode=a,d.prototype.__reallocate=function(u){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(u/(64*1024))}),this.__memory;var l=this.__memory.buffer.byteLength;return l<u&&this.__memory.grow(Math.ceil((u-l)/(64*1024))),this.__memory},d.prototype.__instance=function(u,l,f){if(l&&this.__reallocate(l),!this.__wasm[u]){var p=this.__modules[u];this.__wasm[u]=new WebAssembly.Module(this.__base64decode(p.wasm_src))}if(!this.__cache[u]){var g={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[u]=new WebAssembly.Instance(this.__wasm[u],{env:h(g,f||{})})}return this.__cache[u]},d.prototype.__align=function(u,l){l=l||8;var f=u%l;return u+(f?l-f:0)},r.exports=d},{"./lib/base64decode":20,"./lib/wa_detect":21,"object-assign":22}],20:[function(i,r,s){var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";r.exports=function(a){for(var c=a.replace(/[\r\n=]/g,""),o=c.length,d=new Uint8Array(o*3>>2),u=0,l=0,f=0;f<o;f++)f%4===0&&f&&(d[l++]=u>>16&255,d[l++]=u>>8&255,d[l++]=u&255),u=u<<6|h.indexOf(c.charAt(f));var p=o%4*6;return p===0?(d[l++]=u>>16&255,d[l++]=u>>8&255,d[l++]=u&255):p===18?(d[l++]=u>>10&255,d[l++]=u>>2&255):p===12&&(d[l++]=u>>4&255),d}},{}],21:[function(i,r,s){var h;r.exports=function(){if(typeof h<"u"||(h=!1,typeof WebAssembly>"u"))return h;try{var a=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),c=new WebAssembly.Module(a),o=new WebAssembly.Instance(c,{});return o.exports.test(4)!==0&&(h=!0),h}catch{}return h}},{}],22:[function(i,r,s){var h=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(u){if(u==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(u)}function d(){try{if(!Object.assign)return!1;var u=new String("abc");if(u[5]="de",Object.getOwnPropertyNames(u)[0]==="5")return!1;for(var l={},f=0;f<10;f++)l["_"+String.fromCharCode(f)]=f;var p=Object.getOwnPropertyNames(l).map(function(A){return l[A]});if(p.join("")!=="0123456789")return!1;var g={};return"abcdefghijklmnopqrst".split("").forEach(function(A){g[A]=A}),Object.keys(Object.assign({},g)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}r.exports=d()?Object.assign:function(u,l){for(var f,p=o(u),g,A=1;A<arguments.length;A++){f=Object(arguments[A]);for(var x in f)a.call(f,x)&&(p[x]=f[x]);if(h){g=h(f);for(var m=0;m<g.length;m++)c.call(f,g[m])&&(p[g[m]]=f[g[m]])}}return p}},{}],23:[function(i,r,s){var h=arguments[3],a=arguments[4],c=arguments[5],o=JSON.stringify;r.exports=function(d,u){for(var l,f=Object.keys(c),p=0,g=f.length;p<g;p++){var A=f[p],x=c[A].exports;if(x===d||x&&x.default===d){l=A;break}}if(!l){l=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var m={},p=0,g=f.length;p<g;p++){var A=f[p];m[A]=A}a[l]=["function(require,module,exports){"+d+"(self); }",m]}var C=Math.floor(Math.pow(16,8)*Math.random()).toString(16),v={};v[l]=l,a[C]=["function(require,module,exports){var f = require("+o(l)+");(f.default ? f.default : f)(self);}",v];var B={};T(C);function T(_){B[_]=!0;for(var P in a[_][1]){var U=a[_][1][P];B[U]||T(U)}}var M="("+h+")({"+Object.keys(B).map(function(_){return o(_)+":["+a[_][0]+","+o(a[_][1])+"]"}).join(",")+"},{},["+o(C)+"])",E=window.URL||window.webkitURL||window.mozURL||window.msURL,j=new Blob([M],{type:"text/javascript"});if(u&&u.bare)return j;var R=E.createObjectURL(j),D=new Worker(R);return D.objectURL=R,D}},{}],"/index.js":[function(i,r,s){function h(w,I){return u(w)||d(w,I)||c(w,I)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(w,I){if(w){if(typeof w=="string")return o(w,I);var S=Object.prototype.toString.call(w).slice(8,-1);if(S==="Object"&&w.constructor&&(S=w.constructor.name),S==="Map"||S==="Set")return Array.from(w);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return o(w,I)}}function o(w,I){(I==null||I>w.length)&&(I=w.length);for(var S=0,Q=new Array(I);S<I;S++)Q[S]=w[S];return Q}function d(w,I){var S=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(S!=null){var Q=[],k=!0,F=!1,z,O;try{for(S=S.call(w);!(k=(z=S.next()).done)&&(Q.push(z.value),!(I&&Q.length===I));k=!0);}catch(H){F=!0,O=H}finally{try{!k&&S.return!=null&&S.return()}finally{if(F)throw O}}return Q}}function u(w){if(Array.isArray(w))return w}var l=i("object-assign"),f=i("webworkify"),p=i("./lib/mathlib"),g=i("./lib/pool"),A=i("./lib/utils"),x=i("./lib/worker"),m=i("./lib/stepper"),C=i("./lib/tiler"),v=i("./lib/mm_resize/resize_filter_info"),B={},T=!1;try{typeof navigator<"u"&&navigator.userAgent&&(T=navigator.userAgent.indexOf("Safari")>=0)}catch{}var M=1;typeof navigator<"u"&&(M=Math.min(navigator.hardwareConcurrency||1,4));var E={tile:1024,concurrency:M,features:["js","wasm","ww"],idle:2e3,createCanvas:function(w,I){var S=document.createElement("canvas");return S.width=w,S.height=I,S}},j={filter:"mks2013",unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0},R=!1,D=!1,_=!1,P=!1,U=!1;function N(){return{value:f(x),destroy:function(){if(this.value.terminate(),typeof window<"u"){var w=window.URL||window.webkitURL||window.mozURL||window.msURL;w&&w.revokeObjectURL&&this.value.objectURL&&w.revokeObjectURL(this.value.objectURL)}}}}function L(w){if(!(this instanceof L))return new L(w);this.options=l({},E,w||{});var I="lk_".concat(this.options.concurrency);this.__limit=B[I]||A.limiter(this.options.concurrency),B[I]||(B[I]=this.__limit),this.features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.__requested_features=[],this.__mathlib=null}L.prototype.init=function(){var w=this;if(this.__initPromise)return this.__initPromise;if(typeof ImageData<"u"&&typeof Uint8ClampedArray<"u")try{new ImageData(new Uint8ClampedArray(400),10,10),R=!0}catch{}typeof ImageBitmap<"u"&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?D=!0:this.debug("ImageBitmap does not support .close(), disabled"));var I=this.options.features.slice();if(I.indexOf("all")>=0&&(I=["cib","wasm","js","ww"]),this.__requested_features=I,this.__mathlib=new p(I),I.indexOf("ww")>=0&&typeof window<"u"&&"Worker"in window)try{var S=i("webworkify")(function(){});S.terminate(),this.features.ww=!0;var Q="wp_".concat(JSON.stringify(this.options));B[Q]?this.__workersPool=B[Q]:(this.__workersPool=new g(N,this.options.idle),B[Q]=this.__workersPool)}catch{}var k=this.__mathlib.init().then(function(H){l(w.features,H.features)}),F;D?F=A.cib_support(this.options.createCanvas).then(function(H){if(w.features.cib&&I.indexOf("cib")<0){w.debug("createImageBitmap() resize supported, but disabled by config");return}I.indexOf("cib")>=0&&(w.features.cib=H)}):F=Promise.resolve(!1),_=A.can_use_canvas(this.options.createCanvas);var z;D&&R&&I.indexOf("ww")!==-1?z=A.worker_offscreen_canvas_support():z=Promise.resolve(!1),z=z.then(function(H){P=H});var O=A.cib_can_use_region().then(function(H){U=H});return this.__initPromise=Promise.all([k,F,z,O]).then(function(){return w}),this.__initPromise},L.prototype.__invokeResize=function(w,I){var S=this;return I.__mathCache=I.__mathCache||{},Promise.resolve().then(function(){return S.features.ww?new Promise(function(Q,k){var F=S.__workersPool.acquire();I.cancelToken&&I.cancelToken.catch(function(O){return k(O)}),F.value.onmessage=function(O){F.release(),O.data.err?k(O.data.err):Q(O.data)};var z=[];w.src&&z.push(w.src.buffer),w.srcBitmap&&z.push(w.srcBitmap),F.value.postMessage({opts:w,features:S.__requested_features,preload:{wasm_nodule:S.__mathlib.__}},z)}):{data:S.__mathlib.resizeAndUnsharp(w,I.__mathCache)}})},L.prototype.__extractTileData=function(w,I,S,Q,k){if(this.features.ww&&P&&(A.isCanvas(I)||U))return this.debug("Create tile for OffscreenCanvas"),createImageBitmap(Q.srcImageBitmap||I,w.x,w.y,w.width,w.height).then(function(O){return k.srcBitmap=O,k});if(A.isCanvas(I))return Q.srcCtx||(Q.srcCtx=I.getContext("2d")),this.debug("Get tile pixel data"),k.src=Q.srcCtx.getImageData(w.x,w.y,w.width,w.height).data,k;this.debug("Draw tile imageBitmap/image to temporary canvas");var F=this.options.createCanvas(w.width,w.height),z=F.getContext("2d");return z.globalCompositeOperation="copy",z.drawImage(Q.srcImageBitmap||I,w.x,w.y,w.width,w.height,0,0,w.width,w.height),this.debug("Get tile pixel data"),k.src=z.getImageData(0,0,w.width,w.height).data,F.width=F.height=0,k},L.prototype.__landTileData=function(w,I,S){var Q;if(this.debug("Convert raw rgba tile result to ImageData"),I.bitmap)return S.toCtx.drawImage(I.bitmap,w.toX,w.toY),null;if(R)Q=new ImageData(new Uint8ClampedArray(I.data),w.toWidth,w.toHeight);else if(Q=S.toCtx.createImageData(w.toWidth,w.toHeight),Q.data.set)Q.data.set(I.data);else for(var k=Q.data.length-1;k>=0;k--)Q.data[k]=I.data[k];return this.debug("Draw tile"),T?S.toCtx.putImageData(Q,w.toX,w.toY,w.toInnerX-w.toX,w.toInnerY-w.toY,w.toInnerWidth+1e-5,w.toInnerHeight+1e-5):S.toCtx.putImageData(Q,w.toX,w.toY,w.toInnerX-w.toX,w.toInnerY-w.toY,w.toInnerWidth,w.toInnerHeight),null},L.prototype.__tileAndResize=function(w,I,S){var Q=this,k={srcCtx:null,srcImageBitmap:null,isImageBitmapReused:!1,toCtx:null},F=function(z){return Q.__limit(function(){if(S.canceled)return S.cancelToken;var O={width:z.width,height:z.height,toWidth:z.toWidth,toHeight:z.toHeight,scaleX:z.scaleX,scaleY:z.scaleY,offsetX:z.offsetX,offsetY:z.offsetY,filter:S.filter,unsharpAmount:S.unsharpAmount,unsharpRadius:S.unsharpRadius,unsharpThreshold:S.unsharpThreshold};return Q.debug("Invoke resize math"),Promise.resolve(O).then(function(H){return Q.__extractTileData(z,w,S,k,H)}).then(function(H){return Q.debug("Invoke resize math"),Q.__invokeResize(H,S)}).then(function(H){return S.canceled?S.cancelToken:(k.srcImageData=null,Q.__landTileData(z,H,k))})})};return Promise.resolve().then(function(){if(k.toCtx=I.getContext("2d"),A.isCanvas(w))return null;if(A.isImageBitmap(w))return k.srcImageBitmap=w,k.isImageBitmapReused=!0,null;if(A.isImage(w))return D?(Q.debug("Decode image via createImageBitmap"),createImageBitmap(w).then(function(z){k.srcImageBitmap=z}).catch(function(z){return null})):null;throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap')}).then(function(){if(S.canceled)return S.cancelToken;Q.debug("Calculate tiles");var z=C({width:S.width,height:S.height,srcTileSize:Q.options.tile,toWidth:S.toWidth,toHeight:S.toHeight,destTileBorder:S.__destTileBorder}),O=z.map(function(Y){return F(Y)});function H(Y){Y.srcImageBitmap&&(Y.isImageBitmapReused||Y.srcImageBitmap.close(),Y.srcImageBitmap=null)}return Q.debug("Process tiles"),Promise.all(O).then(function(){return Q.debug("Finished!"),H(k),I},function(Y){throw H(k),Y})})},L.prototype.__processStages=function(w,I,S,Q){var k=this;if(Q.canceled)return Q.cancelToken;var F=w.shift(),z=h(F,2),O=z[0],H=z[1],Y=w.length===0,ce;Y||v.q2f.indexOf(Q.filter)<0?ce=Q.filter:Q.filter==="box"?ce="box":ce="hamming",Q=l({},Q,{toWidth:O,toHeight:H,filter:ce});var re;return Y||(re=this.options.createCanvas(O,H)),this.__tileAndResize(I,Y?S:re,Q).then(function(){return Y?S:(Q.width=O,Q.height=H,k.__processStages(w,re,S,Q))}).then(function(X){return re&&(re.width=re.height=0),X})},L.prototype.__resizeViaCreateImageBitmap=function(w,I,S){var Q=this,k=I.getContext("2d");return this.debug("Resize via createImageBitmap()"),createImageBitmap(w,{resizeWidth:S.toWidth,resizeHeight:S.toHeight,resizeQuality:A.cib_quality_name(v.f2q[S.filter])}).then(function(F){if(S.canceled)return S.cancelToken;if(!S.unsharpAmount)return k.drawImage(F,0,0),F.close(),k=null,Q.debug("Finished!"),I;Q.debug("Unsharp result");var z=Q.options.createCanvas(S.toWidth,S.toHeight),O=z.getContext("2d");O.drawImage(F,0,0),F.close();var H=O.getImageData(0,0,S.toWidth,S.toHeight);return Q.__mathlib.unsharp_mask(H.data,S.toWidth,S.toHeight,S.unsharpAmount,S.unsharpRadius,S.unsharpThreshold),k.putImageData(H,0,0),z.width=z.height=0,H=O=z=k=null,Q.debug("Finished!"),I})},L.prototype.resize=function(w,I,S){var Q=this;this.debug("Start resize...");var k=l({},j);if(isNaN(S)?S&&(k=l(k,S)):k=l(k,{quality:S}),k.toWidth=I.width,k.toHeight=I.height,k.width=w.naturalWidth||w.width,k.height=w.naturalHeight||w.height,Object.prototype.hasOwnProperty.call(k,"quality")){if(k.quality<0||k.quality>3)throw new Error("Pica: .quality should be [0..3], got ".concat(k.quality));k.filter=v.q2f[k.quality]}if(I.width===0||I.height===0)return Promise.reject(new Error("Invalid output size: ".concat(I.width,"x").concat(I.height)));k.unsharpRadius>2&&(k.unsharpRadius=2),k.canceled=!1,k.cancelToken&&(k.cancelToken=k.cancelToken.then(function(z){throw k.canceled=!0,z},function(z){throw k.canceled=!0,z}));var F=3;return k.__destTileBorder=Math.ceil(Math.max(F,2.5*k.unsharpRadius|0)),this.init().then(function(){if(k.canceled)return k.cancelToken;if(Q.features.cib){if(v.q2f.indexOf(k.filter)>=0)return Q.__resizeViaCreateImageBitmap(w,I,k);Q.debug("cib is enabled, but not supports provided filter, fallback to manual math")}if(!_){var z=new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");throw z.code="ERR_GET_IMAGE_DATA",z}var O=m(k.width,k.height,k.toWidth,k.toHeight,Q.options.tile,k.__destTileBorder);return Q.__processStages(O,w,I,k)})},L.prototype.resizeBuffer=function(w){var I=this,S=l({},j,w);if(Object.prototype.hasOwnProperty.call(S,"quality")){if(S.quality<0||S.quality>3)throw new Error("Pica: .quality should be [0..3], got ".concat(S.quality));S.filter=v.q2f[S.quality]}return this.init().then(function(){return I.__mathlib.resizeAndUnsharp(S)})},L.prototype.toBlob=function(w,I,S){return I=I||"image/png",new Promise(function(Q){if(w.toBlob){w.toBlob(function(H){return Q(H)},I,S);return}if(w.convertToBlob){Q(w.convertToBlob({type:I,quality:S}));return}for(var k=atob(w.toDataURL(I,S).split(",")[1]),F=k.length,z=new Uint8Array(F),O=0;O<F;O++)z[O]=k.charCodeAt(O);Q(new Blob([z],{type:I}))})},L.prototype.debug=function(){},r.exports=L},{"./lib/mathlib":1,"./lib/mm_resize/resize_filter_info":7,"./lib/pool":13,"./lib/stepper":14,"./lib/tiler":15,"./lib/utils":16,"./lib/worker":17,"object-assign":22,webworkify:23}]},{},[])("/index.js")})})(hn);var Yo=hn.exports;const Jo=Xn(Yo);function pn(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,r)}return i}function bt(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?pn(Object(i),!0).forEach(function(r){Xo(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):pn(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Vo(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function un(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,gn(r.key),r)}}function Ko(e,n,i){return n&&un(e.prototype,n),i&&un(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xo(e,n,i){return n=gn(n),n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function vt(){return vt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},vt.apply(this,arguments)}function Zo(e,n){if(typeof e!="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function gn(e){var n=Zo(e,"string");return typeof n=="symbol"?n:String(n)}var fn={exports:{}};(function(e){typeof window>"u"||function(n){var i=n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype,r=n.Blob&&function(){try{return!!new Blob}catch{return!1}}(),s=r&&n.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),h=n.BlobBuilder||n.WebKitBlobBuilder||n.MozBlobBuilder||n.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(r||h)&&n.atob&&n.ArrayBuffer&&n.Uint8Array&&function(o){var d,u,l,f,p,g,A,x,m;if(d=o.match(a),!d)throw new Error("invalid data URI");for(u=d[2]?d[1]:"text/plain"+(d[3]||";charset=US-ASCII"),l=!!d[4],f=o.slice(d[0].length),l?p=atob(f):p=decodeURIComponent(f),g=new ArrayBuffer(p.length),A=new Uint8Array(g),x=0;x<p.length;x+=1)A[x]=p.charCodeAt(x);return r?new Blob([s?A:g],{type:u}):(m=new h,m.append(g),m.getBlob(u))};n.HTMLCanvasElement&&!i.toBlob&&(i.mozGetAsFile?i.toBlob=function(o,d,u){var l=this;setTimeout(function(){u&&i.toDataURL&&c?o(c(l.toDataURL(d,u))):o(l.mozGetAsFile("blob",d))})}:i.toDataURL&&c&&(i.msToBlob?i.toBlob=function(o,d,u){var l=this;setTimeout(function(){(d&&d!=="image/png"||u)&&i.toDataURL&&c?o(c(l.toDataURL(d,u))):o(l.msToBlob(d))})}:i.toBlob=function(o,d,u){var l=this;setTimeout(function(){o(c(l.toDataURL(d,u)))})})),e.exports?e.exports=c:n.dataURLtoBlob=c}(window)})(fn);var xn=fn.exports,es=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},mn={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},ts=typeof window<"u"&&typeof window.document<"u",Re=ts?window:{},yt=function(e){return e>0&&e<1/0},is=Array.prototype.slice;function ci(e){return Array.from?Array.from(e):is.call(e)}var ns=/^image\/.+$/;function di(e){return ns.test(e)}function rs(e){var n=di(e)?e.substr(6):"";return n==="jpeg"&&(n="jpg"),".".concat(n)}var An=String.fromCharCode;function as(e,n,i){var r="",s;for(i+=n,s=n;s<i;s+=1)r+=An(e.getUint8(s));return r}var os=Re.btoa;function wn(e,n){for(var i=[],r=8192,s=new Uint8Array(e);s.length>0;)i.push(An.apply(null,ci(s.subarray(0,r)))),s=s.subarray(r);return"data:".concat(n,";base64,").concat(os(i.join("")))}function ss(e){var n=new DataView(e),i;try{var r,s,h;if(n.getUint8(0)===255&&n.getUint8(1)===216)for(var a=n.byteLength,c=2;c+1<a;){if(n.getUint8(c)===255&&n.getUint8(c+1)===225){s=c;break}c+=1}if(s){var o=s+4,d=s+10;if(as(n,o,4)==="Exif"){var u=n.getUint16(d);if(r=u===18761,(r||u===19789)&&n.getUint16(d+2,r)===42){var l=n.getUint32(d+4,r);l>=8&&(h=d+l)}}}if(h){var f=n.getUint16(h,r),p,g;for(g=0;g<f;g+=1)if(p=h+g*12+2,n.getUint16(p,r)===274){p+=8,i=n.getUint16(p,r),n.setUint16(p,1,r);break}}}catch{i=1}return i}function ls(e){var n=0,i=1,r=1;switch(e){case 2:i=-1;break;case 3:n=-180;break;case 4:r=-1;break;case 5:n=90,r=-1;break;case 6:n=90;break;case 7:n=90,i=-1;break;case 8:n=-90;break}return{rotate:n,scaleX:i,scaleY:r}}var cs=/\.\d*(?:0|9){12}\d*$/;function bn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return cs.test(e)?Math.round(e*n)/n:e}function Ze(e){var n=e.aspectRatio,i=e.height,r=e.width,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",h=yt(r),a=yt(i);if(h&&a){var c=i*n;(s==="contain"||s==="none")&&c>r||s==="cover"&&c<r?i=r/n:r=i*n}else h?i=r/n:a&&(r=i*n);return{width:r,height:i}}function ds(e){for(var n=ci(new Uint8Array(e)),i=n.length,r=[],s=0;s+3<i;){var h=n[s],a=n[s+1];if(h===255&&a===218)break;if(h===255&&a===216)s+=2;else{var c=n[s+2]*256+n[s+3],o=s+c+2,d=n.slice(s,o);r.push(d),s=o}}return r.reduce(function(u,l){return l[0]===255&&l[1]===225?u.concat(l):u},[])}function hs(e,n){var i=ci(new Uint8Array(e));if(i[2]!==255||i[3]!==224)return e;var r=i[4]*256+i[5],s=[255,216].concat(n,i.slice(4+r));return new Uint8Array(s)}var ps=Re.ArrayBuffer,hi=Re.FileReader,Pe=Re.URL||Re.webkitURL,us=/\.\w+$/,gs=Re.Compressor,fs=function(){function e(n,i){Vo(this,e),this.file=n,this.exif=[],this.image=new Image,this.options=bt(bt({},mn),i),this.aborted=!1,this.result=null,this.init()}return Ko(e,[{key:"init",value:function(){var n=this,i=this.file,r=this.options;if(!es(i)){this.fail(new Error("The first argument must be a File or Blob object."));return}var s=i.type;if(!di(s)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!Pe||!hi){this.fail(new Error("The current browser does not support image compression."));return}ps||(r.checkOrientation=!1,r.retainExif=!1);var h=s==="image/jpeg",a=h&&r.checkOrientation,c=h&&r.retainExif;if(Pe&&!a&&!c)this.load({url:Pe.createObjectURL(i)});else{var o=new hi;this.reader=o,o.onload=function(d){var u=d.target,l=u.result,f={},p=1;a&&(p=ss(l),p>1&&vt(f,ls(p))),c&&(n.exif=ds(l)),a||c?!Pe||p>1?f.url=wn(l,s):f.url=Pe.createObjectURL(i):f.url=l,n.load(f)},o.onabort=function(){n.fail(new Error("Aborted to read the image with FileReader."))},o.onerror=function(){n.fail(new Error("Failed to read the image with FileReader."))},o.onloadend=function(){n.reader=null},a||c?o.readAsArrayBuffer(i):o.readAsDataURL(i)}}},{key:"load",value:function(n){var i=this,r=this.file,s=this.image;s.onload=function(){i.draw(bt(bt({},n),{},{naturalWidth:s.naturalWidth,naturalHeight:s.naturalHeight}))},s.onabort=function(){i.fail(new Error("Aborted to load the image."))},s.onerror=function(){i.fail(new Error("Failed to load the image."))},Re.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Re.navigator.userAgent)&&(s.crossOrigin="anonymous"),s.alt=r.name,s.src=n.url}},{key:"draw",value:function(n){var i=this,r=n.naturalWidth,s=n.naturalHeight,h=n.rotate,a=h===void 0?0:h,c=n.scaleX,o=c===void 0?1:c,d=n.scaleY,u=d===void 0?1:d,l=this.file,f=this.image,p=this.options,g=document.createElement("canvas"),A=g.getContext("2d"),x=Math.abs(a)%180===90,m=(p.resize==="contain"||p.resize==="cover")&&yt(p.width)&&yt(p.height),C=Math.max(p.maxWidth,0)||1/0,v=Math.max(p.maxHeight,0)||1/0,B=Math.max(p.minWidth,0)||0,T=Math.max(p.minHeight,0)||0,M=r/s,E=p.width,j=p.height;if(x){var R=[v,C];C=R[0],v=R[1];var D=[T,B];B=D[0],T=D[1];var _=[j,E];E=_[0],j=_[1]}m&&(M=E/j);var P=Ze({aspectRatio:M,width:C,height:v},"contain");C=P.width,v=P.height;var U=Ze({aspectRatio:M,width:B,height:T},"cover");if(B=U.width,T=U.height,m){var N=Ze({aspectRatio:M,width:E,height:j},p.resize);E=N.width,j=N.height}else{var L=Ze({aspectRatio:M,width:E,height:j}),w=L.width;E=w===void 0?r:w;var I=L.height;j=I===void 0?s:I}E=Math.floor(bn(Math.min(Math.max(E,B),C))),j=Math.floor(bn(Math.min(Math.max(j,T),v)));var S=-E/2,Q=-j/2,k=E,F=j,z=[];if(m){var O=0,H=0,Y=r,ce=s,re=Ze({aspectRatio:M,width:r,height:s},{contain:"cover",cover:"contain"}[p.resize]);Y=re.width,ce=re.height,O=(r-Y)/2,H=(s-ce)/2,z.push(O,H,Y,ce)}if(z.push(S,Q,k,F),x){var X=[j,E];E=X[0],j=X[1]}g.width=E,g.height=j,di(p.mimeType)||(p.mimeType=l.type);var ae="transparent";l.size>p.convertSize&&p.convertTypes.indexOf(p.mimeType)>=0&&(p.mimeType="image/jpeg");var $=p.mimeType==="image/jpeg";if($&&(ae="#fff"),A.fillStyle=ae,A.fillRect(0,0,E,j),p.beforeDraw&&p.beforeDraw.call(this,A,g),!this.aborted&&(A.save(),A.translate(E/2,j/2),A.rotate(a*Math.PI/180),A.scale(o,u),A.drawImage.apply(A,[f].concat(z)),A.restore(),p.drew&&p.drew.call(this,A,g),!this.aborted)){var le=function(W){if(!i.aborted){var J=function(de){return i.done({naturalWidth:r,naturalHeight:s,result:de})};if(W&&$&&p.retainExif&&i.exif&&i.exif.length>0){var oe=function(de){return J(xn(wn(hs(de,i.exif),p.mimeType)))};if(W.arrayBuffer)W.arrayBuffer().then(oe).catch(function(){i.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var Ce=new hi;i.reader=Ce,Ce.onload=function(de){var Le=de.target;oe(Le.result)},Ce.onabort=function(){i.fail(new Error("Aborted to read the compressed image with FileReader."))},Ce.onerror=function(){i.fail(new Error("Failed to read the compressed image with FileReader."))},Ce.onloadend=function(){i.reader=null},Ce.readAsArrayBuffer(W)}}else J(W)}};g.toBlob?g.toBlob(le,p.mimeType,p.quality):le(xn(g.toDataURL(p.mimeType,p.quality)))}}},{key:"done",value:function(n){var i=n.naturalWidth,r=n.naturalHeight,s=n.result,h=this.file,a=this.image,c=this.options;if(Pe&&a.src.indexOf("blob:")===0&&Pe.revokeObjectURL(a.src),s)if(c.strict&&!c.retainExif&&s.size>h.size&&c.mimeType===h.type&&!(c.width>i||c.height>r||c.minWidth>i||c.minHeight>r||c.maxWidth<i||c.maxHeight<r))s=h;else{var o=new Date;s.lastModified=o.getTime(),s.lastModifiedDate=o,s.name=h.name,s.name&&s.type!==h.type&&(s.name=s.name.replace(us,rs(s.type)))}else s=h;this.result=s,c.success&&c.success.call(this,s)}},{key:"fail",value:function(n){var i=this.options;if(i.error)i.error.call(this,n);else throw n}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=gs,e}},{key:"setDefaults",value:function(n){vt(mn,n)}}]),e}();function xs(){return window.navigator.brave!=null?window.navigator.brave.isBrave.name=="isBrave":!1}const vn=y.forwardRef((e,n)=>{const{imageSrc:i,imageType:r,onImageCropped:s,width:h,height:a}=e,[c,o]=y.useState({x:0,y:0}),[d,u]=y.useState(1),[l,f]=y.useState(null);y.useState(null);const p=y.useCallback((T,M)=>{f(M)},[]);y.useImperativeHandle(n,()=>({async showCroppedImage(){try{if(i){const T=await C(i,l),M=await x(T),E=xs()?await A(T):await g(M),j=await x(E);s(j)}else return"Nothing"}catch(T){console.error(T)}}}));async function g(T){const M=Jo();let E=await v(T);const j=document.createElement("canvas");return j.height=128,j.width=128,new Promise(R=>{R(M.resize(E,j,{unsharpAmount:100,unsharpRadius:.7,unsharpThreshold:2}).then(D=>M.toBlob(D,r,1)))})}async function A(T){return new Promise((M,E)=>{new fs(T,{quality:1,strict:!0,maxWidth:128,maxHeight:128,checkOrientation:!1,success:M,error:E})})}const x=async T=>await m(T),m=T=>new Promise((M,E)=>{const j=new FileReader;j.readAsDataURL(T),j.onload=()=>M(j.result),j.onerror=R=>E(R)});async function C(T,M){const E=await v(T),j=document.createElement("canvas");j.width=M.width,j.height=M.height;const R=j.getContext("2d"),D="none.jpg";return R.drawImage(E,M.x,M.y,M.width,M.height,0,0,M.width,M.height),new Promise((_,P)=>{j.toBlob(U=>{_(new File([U],D,{type:r,lastModified:Date.now()}))},r,1)})}const v=T=>new Promise((M,E)=>{const j=new Image;j.addEventListener("load",()=>M(j)),j.addEventListener("error",R=>E(R)),j.setAttribute("crossOrigin","anonymous"),j.src=T}),B=T=>{u(T)};return t.jsx(y.Fragment,{children:t.jsx(ms,{children:t.jsx(Vc,{image:i,crop:c,zoom:d,aspect:1,onCropChange:o,onCropComplete:p,onZoomChange:B,style:{containerStyle:{width:h||"250px",height:a||"250px",position:"relative",borderRadius:"20px"}}})})})}),ms=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,As=({croppedImage:e,view:n,imageSrc:i,imageType:r,processing:s,setCroppedImage:h,setView:a,setImageSrc:c,setImageType:o,setProcessingInfo:d,logoInfo:u,setStepFlow:l})=>{const f=y.useRef(),p=x=>{x.preventDefault()},g=x=>{x.preventDefault(),x.stopPropagation(),A(x.dataTransfer)},A=async(x,m)=>{if(h(void 0),a(!0),x==null?void 0:x.files[0]){var C=new FileReader;C.readAsDataURL(x==null?void 0:x.files[0]),C.onloadend=function(v){var B;c(C.result),o((B=x==null?void 0:x.files[0])==null?void 0:B.type)}}else return"Nothing...."};return t.jsxs(bs,{children:[t.jsx(q,{align:"center",children:t.jsx(Ei,{color:" #657795",margin:"20px 0px",textTransform:"none",weight:"300",size:"15px",spacing:"normal",textAlign:"center",children:"Please upload a PNG, JPG. Crop the image to resize to 128px."})}),t.jsx(vs,{className:"",children:t.jsx("div",{children:t.jsx("div",{onDragOver:x=>p(x),onDrop:x=>g(x),className:"bordered",children:t.jsxs("div",{className:"inner",children:[n?t.jsx("div",{className:"crop-div",children:e?t.jsx("div",{children:t.jsx("img",{alt:"Cropped Img",src:e,className:"croppedImage"})}):t.jsx(vn,{className:"cropper",imageSrc:i,imageType:r,onImageCropped:x=>h(x),ref:f})}):t.jsx(Kc,{size:100,color:"#8C99B0",style:{marginTop:"30px"}}),t.jsxs(q,{display:"flex",direction:"row",align:"center",children:[t.jsx("p",{className:"text-below",children:"Drag and Drop or"}),t.jsx("div",{className:"text-div",children:t.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[t.jsx("div",{children:"Browse to Choose"}),t.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:x=>A(x.target),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})})}),(u==null?void 0:u.length)>0&&t.jsx(q,{margin:"30px 0px 30px 0px",flex:"1",padding:"10px 5px",radius:"10px",bg:"#F5F5FA",children:t.jsx("div",{style:{color:"#CF1C84"},children:u})}),n&&(e?t.jsx(Zn,{flex:"1",direction:"column",margin:"0px",justify:"center",size:"1.1rem",onSubmit:x=>{x.preventDefault(),l(2)},children:t.jsx(q,{width:"12.2em",self:"stretch",align:"stretch",margin:"100px auto 50px auto",children:t.jsxs(ge,{size:"medium",variant:"primary",disabled:s==1,children:[s==1&&t.jsx(Ne,{type:Fe.SEAMLESS,spinnerSize:24,spinnerColor:"#fff"}),s!=1&&t.jsx(Ge,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",line:"22px",size:"16px",type:"submit",value:"Next"})]})})}):t.jsx(q,{width:"12.2em",self:"stretch",align:"stretch",margin:"100px auto 50px auto",children:t.jsx(ge,{variant:"primary",size:"medium",onClick:()=>{f.current.showCroppedImage()},children:t.jsx(me,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Crop Image"})})}))]})};b.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;const ws=b.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
`;b.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,b(ws)`
  background: #e20880;
`,b.div`
  width: 40%;
  align-items: center;
  margin: 1rem auto;
`;const bs=b.div`
  margin: 50px auto 0px auto;
  width: 55%;
  @media (max-width: 768px) {
    min-width: 100%;
    margin: 10px auto 0px auto;
  }
  @media (max-width: 1224px) {
    width: 75%;
  }
`,vs=b.div`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  .bordered {
    display: flex;
    justify-content: center;
    border: 1px dashed #8c99b0;
    align-items: flex-end;
    border-radius: 12px;
    padding: 6px;
    background-color: #f5f5fa;
    margin-top: 10px;
    .inner {
      margin-top: 0.25rem;
      text-align: center;
      padding: 20px 10px 10px 10px;
      width: 100%;
      .crop-div {
        width: 100%;
        display: flex;
        flex-direction: row;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        justify-content: space-evenly;
        align-items: center;
        margin-right: auto;
        div {
          .croppedImage {
            border-radius: 20px;
            @media (max-width: 768px) {
              margin-top: 1rem;
            }
          }
        }
        .cropper {
          border-radius: 20px;
          width: 250px;
          height: 250px;
        }
      }
      .check-space {
        .croppedImage {
          width: auto;
          height: auto;
          border-radius: 5px;
        }
        .button-space {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      .crop-button {
        display: flex;
        justify-content: center;
        width: 100%;
        @media (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      .svg {
        margin: 0px auto;
        height: 3rem;
        width: 3rem;
        color: #ccc;
      }
      .text-div {
        display: flex;
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: #ccc;
        justify-content: center;
        .labeled {
          position: relative;
          cursor: pointer;
          border-radius: 4px;
          color: #cf1c84;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .text-below {
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: #657795;
        margin-right: 0.3rem;
      }
    }
  }
  .image-error {
    font-size: 1rem;
    line-height: 1rem;
    color: red;
    margin-top: 0.5rem;
  }
  .image {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    .item {
      width: 4rem;
      height: auto;
      border-radius: 4px;
    }
    .image-border {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 2rem;
      .text {
        font-size: 1rem;
        line-height: 1rem;
        color: #ccc;
        margin-top: 1rem;
      }
    }
  }
`,Ct=(e,n,i)=>(i=i??1,e.length>=i&&e.length<=n),pi=e=>{var n=new RegExp("^((?:https|http):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!n.test(e)},ys=e=>Xc(e);var ui={exports:{}},gi={exports:{}},Cs=ed(),yn=Zc().EventEmitter;gi.exports=we,gi.exports.default=we;function we(e){if(!(this instanceof we))return new we(e);yn.call(this),e=e||{},this.concurrency=e.concurrency||1/0,this.timeout=e.timeout||0,this.autostart=e.autostart||!1,this.results=e.results||null,this.pending=0,this.session=0,this.running=!1,this.jobs=[],this.timers={}}Cs(we,yn);var Is=["pop","shift","indexOf","lastIndexOf"];Is.forEach(function(e){we.prototype[e]=function(){return Array.prototype[e].apply(this.jobs,arguments)}}),we.prototype.slice=function(e,n){return this.jobs=this.jobs.slice(e,n),this},we.prototype.reverse=function(){return this.jobs.reverse(),this};var Es=["push","unshift","splice"];Es.forEach(function(e){we.prototype[e]=function(){var n=Array.prototype[e].apply(this.jobs,arguments);return this.autostart&&this.start(),n}}),Object.defineProperty(we.prototype,"length",{get:function(){return this.pending+this.jobs.length}}),we.prototype.start=function(e){if(e&&Bs.call(this,e),this.running=!0,this.pending>=this.concurrency)return;if(this.jobs.length===0){this.pending===0&&fi.call(this);return}var n=this,i=this.jobs.shift(),r=!0,s=this.session,h=null,a=!1,c=null,o=i.timeout||this.timeout;function d(l,f){r&&n.session===s&&(r=!1,n.pending--,h!==null&&(delete n.timers[h],clearTimeout(h)),l?n.emit("error",l,i):a===!1&&(c!==null&&(n.results[c]=Array.prototype.slice.call(arguments,1)),n.emit("success",f,i)),n.session===s&&(n.pending===0&&n.jobs.length===0?fi.call(n):n.running&&n.start()))}o&&(h=setTimeout(function(){a=!0,n.listeners("timeout").length>0?n.emit("timeout",d,i):d()},o),this.timers[h]=h),this.results&&(c=this.results.length,this.results[c]=null),this.pending++,n.emit("start",i);var u=i(d);u&&u.then&&typeof u.then=="function"&&u.then(function(l){return d(null,l)}).catch(function(l){return d(l||!0)}),this.running&&this.jobs.length>0&&this.start()},we.prototype.stop=function(){this.running=!1},we.prototype.end=function(e){js.call(this),this.jobs.length=0,this.pending=0,fi.call(this,e)};function js(){for(var e in this.timers){var n=this.timers[e];delete this.timers[e],clearTimeout(n)}}function Bs(e){var n=this;this.on("error",i),this.on("end",r);function i(s){n.end(s)}function r(s){n.removeListener("error",i),n.removeListener("end",r),e(s,this.results)}}function fi(e){this.session++,this.running=!1,this.emit("end",e)}var Ts=gi.exports,et={},It={};Object.defineProperty(It,"__esModule",{value:!0}),It.BMP=void 0,It.BMP={validate(e){return e.toString("ascii",0,2)==="BM"},calculate(e){return{height:Math.abs(e.readInt32LE(22)),width:e.readUInt32LE(18)}}};var Et={},tt={};Object.defineProperty(tt,"__esModule",{value:!0}),tt.ICO=void 0;const Ss=1,ks=6,Ms=16;function Cn(e,n){const i=e.readUInt8(n);return i===0?256:i}function In(e,n){const i=ks+n*Ms;return{height:Cn(e,i+1),width:Cn(e,i)}}tt.ICO={validate(e){return e.readUInt16LE(0)!==0?!1:e.readUInt16LE(2)===Ss},calculate(e){const n=e.readUInt16LE(4),i=In(e,0);if(n===1)return i;const r=[i];for(let s=1;s<n;s+=1)r.push(In(e,s));return{height:i.height,images:r,width:i.width}}},Object.defineProperty(Et,"__esModule",{value:!0}),Et.CUR=void 0;const _s=tt,Rs=2;Et.CUR={validate(e){return e.readUInt16LE(0)!==0?!1:e.readUInt16LE(2)===Rs},calculate(e){return _s.ICO.calculate(e)}};var jt={};Object.defineProperty(jt,"__esModule",{value:!0}),jt.DDS=void 0,jt.DDS={validate(e){return e.readUInt32LE(0)===542327876},calculate(e){return{height:e.readUInt32LE(12),width:e.readUInt32LE(16)}}};var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.GIF=void 0;const Qs=/^GIF8[79]a/;Bt.GIF={validate(e){const n=e.toString("ascii",0,6);return Qs.test(n)},calculate(e){return{height:e.readUInt16LE(8),width:e.readUInt16LE(6)}}};var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.ICNS=void 0;const Ds=8,Us=4,Ps=4,Ls={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function En(e,n){const i=n+Ps;return[e.toString("ascii",n,i),e.readUInt32BE(i)]}function jn(e){const n=Ls[e];return{width:n,height:n,type:e}}Tt.ICNS={validate(e){return e.toString("ascii",0,4)==="icns"},calculate(e){const n=e.length,i=e.readUInt32BE(Us);let r=Ds,s=En(e,r),h=jn(s[0]);if(r+=s[1],r===i)return h;const a={height:h.height,images:[h],width:h.width};for(;r<i&&r<n;)s=En(e,r),h=jn(s[0]),r+=s[1],a.images.push(h);return a}};var St={};Object.defineProperty(St,"__esModule",{value:!0}),St.J2C=void 0,St.J2C={validate(e){return e.toString("hex",0,4)==="ff4fff51"},calculate(e){return{height:e.readUInt32BE(12),width:e.readUInt32BE(8)}}};var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.JP2=void 0;const Mt={ftyp:"66747970",ihdr:"69686472",jp2h:"6a703268",jp__:"6a502020",rreq:"72726571",xml_:"786d6c20"},zs=e=>{const n=e.readUInt8(0);let i=1+2*n;const r=e.readUInt16BE(i)*(2+n);i=i+2+r;const s=e.readUInt16BE(i)*(16+n);return i+2+s},Bn=e=>({height:e.readUInt32BE(4),width:e.readUInt32BE(8)});kt.JP2={validate(e){const n=e.toString("hex",4,8),i=e.readUInt32BE(0);if(n!==Mt.jp__||i<1)return!1;const r=i+4,s=e.readUInt32BE(i);return e.slice(r,r+s).toString("hex",0,4)===Mt.ftyp},calculate(e){const n=e.readUInt32BE(0),i=e.readUInt16BE(n+2);let r=n+4+i;switch(e.toString("hex",r,r+4)){case Mt.rreq:return r=r+4+4+zs(e.slice(r+4)),Bn(e.slice(r+8,r+24));case Mt.jp2h:return Bn(e.slice(r+8,r+24));default:throw new TypeError("Unsupported header found: "+e.toString("ascii",r,r+4))}}};var _t={},it={};Object.defineProperty(it,"__esModule",{value:!0}),it.readUInt=void 0;function Os(e,n,i,r){i=i||0;const s=r?"BE":"LE",h="readUInt"+n+s;return e[h].call(e,i)}it.readUInt=Os,Object.defineProperty(_t,"__esModule",{value:!0}),_t.JPG=void 0;const nt=it,Ns="45786966",Fs=2,xi=6,Gs=2,Hs="4d4d",Ws="4949",Tn=12,$s=2;function qs(e){return e.toString("hex",2,6)===Ns}function Ys(e,n){return{height:e.readUInt16BE(n),width:e.readUInt16BE(n+2)}}function Js(e,n){const i=xi+8,r=nt.readUInt(e,16,i,n);for(let s=0;s<r;s++){const h=i+$s+s*Tn,a=h+Tn;if(h>e.length)return;const c=e.slice(h,a);if(nt.readUInt(c,16,0,n)===274)return nt.readUInt(c,16,2,n)!==3||nt.readUInt(c,32,4,n)!==1?void 0:nt.readUInt(c,16,8,n)}}function Vs(e,n){const i=e.slice(Fs,n),r=i.toString("hex",xi,xi+Gs),s=r===Hs;if(s||r===Ws)return Js(i,s)}function Ks(e,n){if(n>e.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(e[n]!==255)throw new TypeError("Invalid JPG, marker table corrupted")}_t.JPG={validate(e){return e.toString("hex",0,2)==="ffd8"},calculate(e){e=e.slice(4);let n,i;for(;e.length;){const r=e.readUInt16BE(0);if(qs(e)&&(n=Vs(e,r)),Ks(e,r),i=e[r+1],i===192||i===193||i===194){const s=Ys(e,r+5);return n?{height:s.height,orientation:n,width:s.width}:s}e=e.slice(r+2)}throw new TypeError("Invalid JPG, no size found")}};var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0}),Rt.KTX=void 0;const Xs="KTX 11";Rt.KTX={validate(e){return Xs===e.toString("ascii",1,7)},calculate(e){return{height:e.readUInt32LE(40),width:e.readUInt32LE(36)}}};var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.PNG=void 0;const Zs=`PNG\r

`,el="IHDR",Sn="CgBI";Qt.PNG={validate(e){if(Zs===e.toString("ascii",1,8)){let n=e.toString("ascii",12,16);if(n===Sn&&(n=e.toString("ascii",28,32)),n!==el)throw new TypeError("Invalid PNG");return!0}return!1},calculate(e){return e.toString("ascii",12,16)===Sn?{height:e.readUInt32BE(36),width:e.readUInt32BE(32)}:{height:e.readUInt32BE(20),width:e.readUInt32BE(16)}}};var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0}),Dt.PNM=void 0;const kn={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},tl=Object.keys(kn),Mn={default:e=>{let n=[];for(;e.length>0;){const i=e.shift();if(i[0]!=="#"){n=i.split(" ");break}}if(n.length===2)return{height:parseInt(n[1],10),width:parseInt(n[0],10)};throw new TypeError("Invalid PNM")},pam:e=>{const n={};for(;e.length>0;){const i=e.shift();if(i.length>16||i.charCodeAt(0)>128)continue;const[r,s]=i.split(" ");if(r&&s&&(n[r.toLowerCase()]=parseInt(s,10)),n.height&&n.width)break}if(n.height&&n.width)return{height:n.height,width:n.width};throw new TypeError("Invalid PAM")}};Dt.PNM={validate(e){const n=e.toString("ascii",0,2);return tl.includes(n)},calculate(e){const n=e.toString("ascii",0,2),i=kn[n],r=e.toString("ascii",3).split(/[\r\n]+/);return(Mn[i]||Mn.default)(r)}};var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.PSD=void 0,Ut.PSD={validate(e){return e.toString("ascii",0,4)==="8BPS"},calculate(e){return{height:e.readUInt32BE(14),width:e.readUInt32BE(18)}}};var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.SVG=void 0;const _n=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,Lt={height:/\sheight=(['"])([^%]+?)\1/,root:_n,viewbox:/\sviewBox=(['"])(.+?)\1/,width:/\swidth=(['"])([^%]+?)\1/},mi=2.54,il={cm:96/mi,em:16,ex:8,m:96/mi*100,mm:96/mi/10,pc:96/72/12,pt:96/72};function zt(e){const n=/([0-9.]+)([a-z]*)/.exec(e);if(n)return Math.round(parseFloat(n[1])*(il[n[2]]||1))}function nl(e){const n=e.split(" ");return{height:zt(n[3]),width:zt(n[2])}}function rl(e){const n=e.match(Lt.width),i=e.match(Lt.height),r=e.match(Lt.viewbox);return{height:i&&zt(i[2]),viewbox:r&&nl(r[2]),width:n&&zt(n[2])}}function al(e){return{height:e.height,width:e.width}}function ol(e,n){const i=n.width/n.height;return e.width?{height:Math.floor(e.width/i),width:e.width}:e.height?{height:e.height,width:Math.floor(e.height*i)}:{height:n.height,width:n.width}}Pt.SVG={validate(e){const n=String(e);return _n.test(n)},calculate(e){const n=e.toString("utf8").match(Lt.root);if(n){const i=rl(n[0]);if(i.width&&i.height)return al(i);if(i.viewbox)return ol(i,i.viewbox)}throw new TypeError("Invalid SVG")}};var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.TIFF=void 0;const Nt=er,Je=it;function sl(e,n,i){const r=Je.readUInt(e,32,4,i);let s=1024;const h=Nt.statSync(n).size;r+s>h&&(s=h-r-10);const a=ft.alloc(s),c=Nt.openSync(n,"r");return Nt.readSync(c,a,0,s,r),Nt.closeSync(c),a.slice(2)}function ll(e,n){const i=Je.readUInt(e,16,8,n);return(Je.readUInt(e,16,10,n)<<16)+i}function cl(e){if(e.length>24)return e.slice(12)}function dl(e,n){const i={};let r=e;for(;r&&r.length;){const s=Je.readUInt(r,16,0,n),h=Je.readUInt(r,16,2,n),a=Je.readUInt(r,32,4,n);if(s===0)break;a===1&&(h===3||h===4)&&(i[s]=ll(r,n)),r=cl(r)}return i}function hl(e){const n=e.toString("ascii",0,2);if(n==="II")return"LE";if(n==="MM")return"BE"}const pl=["49492a00","4d4d002a"];Ot.TIFF={validate(e){return pl.includes(e.toString("hex",0,4))},calculate(e,n){if(!n)throw new TypeError("Tiff doesn't support buffer");const i=hl(e)==="BE",r=sl(e,n,i),s=dl(r,i),h=s[256],a=s[257];if(!h||!a)throw new TypeError("Invalid Tiff. Missing tags");return{height:a,width:h}}};var Ft={};Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.WEBP=void 0;function ul(e){return{height:1+e.readUIntLE(7,3),width:1+e.readUIntLE(4,3)}}function gl(e){return{height:1+((e[4]&15)<<10|e[3]<<2|(e[2]&192)>>6),width:1+((e[2]&63)<<8|e[1])}}function fl(e){return{height:e.readInt16LE(8)&16383,width:e.readInt16LE(6)&16383}}Ft.WEBP={validate(e){const n=e.toString("ascii",0,4)==="RIFF",i=e.toString("ascii",8,12)==="WEBP",r=e.toString("ascii",12,15)==="VP8";return n&&i&&r},calculate(e){const n=e.toString("ascii",12,16);if(e=e.slice(20,30),n==="VP8X"){const r=e[0],s=(r&192)===0,h=(r&1)===0;if(s&&h)return ul(e);throw new TypeError("Invalid WebP")}if(n==="VP8 "&&e[0]!==47)return fl(e);const i=e.toString("hex",3,6);if(n==="VP8L"&&i!=="9d012a")return gl(e);throw new TypeError("Invalid WebP")}},Object.defineProperty(et,"__esModule",{value:!0}),et.typeHandlers=void 0;const xl=It,ml=Et,Al=jt,wl=Bt,bl=Tt,vl=tt,yl=St,Cl=kt,Il=_t,El=Rt,jl=Qt,Bl=Dt,Tl=Ut,Sl=Pt,kl=Ot,Ml=Ft;et.typeHandlers={bmp:xl.BMP,cur:ml.CUR,dds:Al.DDS,gif:wl.GIF,icns:bl.ICNS,ico:vl.ICO,j2c:yl.J2C,jp2:Cl.JP2,jpg:Il.JPG,ktx:El.KTX,png:jl.PNG,pnm:Bl.PNM,psd:Tl.PSD,svg:Sl.SVG,tiff:kl.TIFF,webp:Ml.WEBP};var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.detector=void 0;const Ai=et,_l=Object.keys(Ai.typeHandlers),Rn={56:"psd",66:"bmp",68:"dds",71:"gif",73:"tiff",77:"tiff",82:"webp",105:"icns",137:"png",255:"jpg"};function Rl(e){const n=e[0];if(n in Rn){const r=Rn[n];if(Ai.typeHandlers[r].validate(e))return r}const i=r=>Ai.typeHandlers[r].validate(e);return _l.find(i)}Gt.detector=Rl,function(e,n){var i=tr&&tr.__awaiter||function(g,A,x,m){function C(v){return v instanceof x?v:new x(function(B){B(v)})}return new(x||(x=Promise))(function(v,B){function T(j){try{E(m.next(j))}catch(R){B(R)}}function M(j){try{E(m.throw(j))}catch(R){B(R)}}function E(j){j.done?v(j.value):C(j.value).then(T,M)}E((m=m.apply(g,A||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0}),n.types=n.setConcurrency=n.imageSize=void 0;const r=er,s=id,h=Ts,a=et,c=Gt,o=512*1024,d=new h.default({concurrency:100,autostart:!0});function u(g,A){const x=c.detector(g);if(x&&x in a.typeHandlers){const m=a.typeHandlers[x].calculate(g,A);if(m!==void 0)return m.type=x,m}throw new TypeError("unsupported file type: "+x+" (file: "+A+")")}function l(g){return i(this,void 0,void 0,function*(){const A=yield r.promises.open(g,"r"),{size:x}=yield A.stat();if(x<=0)throw yield A.close(),new Error("Empty file");const m=Math.min(x,o),C=ft.alloc(m);return yield A.read(C,0,m,0),yield A.close(),C})}function f(g){const A=r.openSync(g,"r"),{size:x}=r.fstatSync(A);if(x<=0)throw r.closeSync(A),new Error("Empty file");const m=Math.min(x,o),C=ft.alloc(m);return r.readSync(A,C,0,m,0),r.closeSync(A),C}e.exports=n=p,n.default=p;function p(g,A){if(ft.isBuffer(g))return u(g);if(typeof g!="string")throw new TypeError("invalid invocation");const x=s.resolve(g);if(typeof A=="function")d.push(()=>l(x).then(m=>td.nextTick(A,null,u(m,x))).catch(A));else{const m=f(x);return u(m,x)}}n.imageSize=p,n.setConcurrency=g=>{d.concurrency=g},n.types=Object.keys(a.typeHandlers)}(ui,ui.exports);var Ql=ui.exports;const Dl=Xn(Ql);function Qn(e,n){var i=new XMLHttpRequest;i.onload=function(){var r=new FileReader;r.onloadend=function(){n(r.result)},r.readAsDataURL(i.response)},i.open("GET",e),i.responseType="blob",i.send()}const Dn=e=>{var n=Dl,i=e.split(";base64,").pop(),r=ft.from(i,"base64"),s=n(r);return s.width>128||s.height>128?(console.error("Image size check failed... returning"),{success:0,info:"Image size check failed, Image should be 128X128PX"}):(console.debug("Image verification",i.charAt(0)),i.charAt(0)==="/"?{success:1,info:"Image checks passed"}:i.charAt(0)==="i"?{success:1,info:"Image checks passed"}:{success:0,info:"Image extension should be jpg or png"})},Ul=50,wi=Ae.coreContractChain,Un=Ae.coreContractChain;function Pl(){const{account:e,provider:n,chainId:i,wallet:r}=Se(),{userPushSDKInstance:s}=Z(V=>V.user),{handleConnectWalletAndEnableProfile:h}=y.useContext(ki),a=pe(),c=Un===i,[o,d]=y.useState(0),[u,l]=y.useState(""),[f,p]=y.useState(!1),[g,A]=y.useState(!1),[x,m]=y.useState(!1),[C,v]=y.useState(Un),[B,T]=y.useState(""),[M,E]=y.useState(void 0),[j,R]=y.useState(""),[D,_]=y.useState(""),[P,U]=y.useState(""),[N,L]=y.useState(void 0),[w,I]=y.useState(Ul),[S,Q]=y.useState(""),[k,F]=y.useState(2),[z,O]=y.useState(0),[H,Y]=y.useState(""),[ce,re]=y.useState(""),[X,ae]=y.useState({name:"",description:"",address:"",url:""}),[$,le]=y.useState(!1),[W,J]=y.useState(void 0),[oe,Ce]=y.useState(null),[de,Le]=y.useState(void 0),[he,xe]=y.useState(0),Ie=Te();y.useEffect(()=>{c&&(async()=>{let V=await new Xt(_e.pushToken,Zt.pushToken,n).allowance(e,_e.epnscore);V=V==null?void 0:V.toString();const be=sd(V);Q(be)})()},[]);const Ci=()=>{xe(3),d(0),p(!0)},Ee=V=>V.trim().length==0,ze=()=>(ae(""),Ee(B)||Ee(D)||Ee(P)||Ee(j)&&C!==wi?(Ee(B)&&ae(V=>({...V,name:"Please, enter the channel name."})),Ee(D)&&ae(V=>({...V,description:"Please, enter the channel description"})),Ee(P)&&ae(V=>({...V,url:"Please, enter the channel url"})),Ee(j)&&C!==wi&&ae(V=>({...V,address:"Please, enter the channel address"})),!1):Ct(B,125)?Ct(P,125)?C!==wi&&!ys(j)?(ae(V=>({...V,address:"Channel Alias address is invalid! Please enter a valid address!"})),!1):pi(P)?!0:(ae(V=>({...V,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(ae(V=>({...V,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(ae(V=>({...V,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Oe=async V=>{if(!s.signer){h({wallet:r});return}if(!ze())return Ie.showMessageToast({toastTitle:"Error",toastMessage:`${X.name||X.description||X.address||X.url||"Please enter the channel details"}`,toastType:"ERROR",getToastIcon:je=>t.jsx(ie,{size:je,color:"red"})}),!1;if(!N)return re("Please upload logo of the channel"),Ie.showMessageToast({toastTitle:"Error",toastMessage:"Please upload logo of the channel",toastType:"ERROR",getToastIcon:je=>t.jsx(ie,{size:je,color:"red"})}),!1;m(!0),Ci(),d(1);let be={name:B,info:D,url:P,icon:N,aliasDetails:ir({chainId:C,address:j})};console.debug(be),be=JSON.stringify(be),O(0),console.debug(`input is ${be}`),l("Loading..."),Y("Please wait, payload is getting uploaded to IPFS."),O(5);let Ht=await nr(be);console.debug("IPFS storagePointer:",Ht),Ie.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),l("Payload Uploaded"),Y("Please complete the transaction in your wallet to continue."),O(10);var G=n.getSigner(e);console.debug(G);let Wt=new Xt(_e.pushToken,Zt.pushToken,G);const $t=Ti(w.toString(),18);try{if(S<50){var qt=Wt.approve(_e.epnscore,$t);const Yt=await qt;console.debug(Yt),console.debug("waiting for tx to finish"),O(30),await n.waitForTransaction(Yt.hash)}let je=new Xt(_e.epnscore,Zt.epnscore,G),Ke=gt.GENERAL;const Ec="1+"+Ht,jc=Si(Ec);O(50);let zn=0;M&&(zn=M.getTime()/1e3,Ke=gt.TIMEBOUND);const On=await je.createChannelWithPUSH(Ke,jc,$t,zn,{gasLimit:6e5});console.debug(On),console.debug("Check: "+e),(await n.waitForTransaction(On.hash)).status===0?(Ie.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in creating the channel",toastType:"ERROR",getToastIcon:Yt=>t.jsx(ie,{size:Yt,color:"red"})}),d(3),F(0),xe(1),m(!1),p(!1),setTimeout(()=>{d(0)},500)):(d(3),O(60),Y("Please wait while we confirm the transaction."),l("Transaction Confirmed"),setTimeout(()=>{O(80),Y("Creating your channel, Aligning pixels, adjusting padding... This may take some time."),l("Redirecting... Please do not refresh"),O(90)},2e3),setTimeout(()=>{O(100),window.location.reload()},2e3))}catch(je){je.code===4001||je.code==="ACTION_REJECTED"?(Ie.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:Ke=>t.jsx(ie,{size:Ke,color:"red"})}),xe(2),d(0),p(!1)):(Ie.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in creating the channel",toastType:"ERROR",getToastIcon:Ke=>t.jsx(ie,{size:Ke,color:"red"})}),console.error("Error --> %o",je),console.error({err:je}),d(3),O(0),Y("There was an error in creating the Channel"),l("Kindly Contact support@epns.io to resolve the issue."))}};return y.useEffect(()=>{de&&(console.debug("Image cropped",de),Qn(de,function(V){const be=Dn(V);console.debug("response",be),be.success&&(console.debug("Cropped Image....",de),L(de))}))},[de]),t.jsx(ht,{theme:a,children:t.jsxs(Ll,{children:[t.jsx(zl,{children:t.jsxs(rd,{className:"content",children:[t.jsxs(q,{align:"center",className:"center",children:[t.jsx(Ol,{children:t.jsx(me,{className:"text",children:"Create Your Channel"})}),t.jsx(me,{className:"body-text",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]}),k===0&&t.jsxs($l,{children:[t.jsx("div",{children:"Transaction failed due to one of the following reasons:"}),t.jsx("p",{children:"1. There is not enough PUSH in your wallet."}),t.jsx("p",{children:"2. Gas price increased due to network congestion. Adjust gas limit manually."})]})]})}),c?t.jsxs(t.Fragment,{children:[!(o===1||o===3)&&t.jsx(Me,{children:t.jsxs(Wl,{children:[t.jsxs(vi,{type:he>=0?"active":"inactive",active:he==0?"active":"inactive",onClick:()=>xe(0),children:[t.jsx("div",{children:"Channel Info"}),t.jsx(bi,{type:he>=0?"active":"inactive"})]}),t.jsxs(vi,{type:he>=1?"active":"inactive",active:he==1?"active":"inactive",onClick:()=>xe(1),children:[t.jsx("div",{children:"Upload Logo"}),t.jsx(bi,{type:he>=1?"active":"inactive"})]}),t.jsxs(vi,{type:he>=2?"active":"inactive",active:he==2?"active":"inactive",onClick:()=>xe(2),children:[t.jsx("div",{children:"Staking Info"}),t.jsx(bi,{type:he>=2?"active":"inactive"})]}),t.jsx(Nl,{})]})}),he===0&&t.jsxs(ue,{children:[t.jsx(ko,{setStepFlow:xe,channelName:B,channelExpiryDate:M,channelAlias:j,channelInfo:D,channelURL:P,chainDetails:C,setChannelAlias:R,setChainDetails:v,setChannelInfo:_,setChannelName:T,setChannelExpiryDate:E,setChannelURL:U,setChannelInfoDone:m,setTxStatus:F,errorInfo:X,isAllFilledAndValid:ze}),o===1?t.jsx(Ne,{type:Fe.STANDALONE,overlay:Ri.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),he===1&&t.jsxs(ue,{children:[t.jsx(As,{croppedImage:de,view:$,imageSrc:W,imageType:oe,processing:o,setCroppedImage:Le,setView:le,setImageSrc:J,setImageType:Ce,setProcessingInfo:l,logoInfo:ce,setStepFlow:xe}),o===1?t.jsx(Ne,{type:Fe.STANDALONE,overlay:Ri.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),he===2&&t.jsxs(ue,{children:[t.jsx(No,{channelStakeFees:w,setStakeFeesChoosen:A,setProcessingInfo:l,handleCreateChannel:Oe}),o===1?t.jsx(Ne,{type:Fe.STANDALONE,overlay:Ri.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),(o===1||o===3)&&t.jsx(Lo,{progress:z,progressInfo:H,processingInfo:u})]}):t.jsxs(t.Fragment,{children:[t.jsx(Fl,{children:t.jsxs("p",{children:["Please select ",ad[Ae.coreContractChain]," Network in your Wallet to create a channel."]})}),t.jsxs(Gl,{"text-align":"center",children:["You will be asked to change your network to the Alias Network after ",t.jsx("br",{}),"channel creation is complete."]}),t.jsxs(Hl,{href:"https://docs.epns.io/developers/developer-zone/create-your-notif-channel/alias-on-polygon-network",target:"_blank",children:[t.jsx("p",{children:"What is an Alias Network?"}),t.jsx(od,{})]})]})]})})}const bi=b.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:e})=>e==="active"&&ke`
      background: #e20880;
    `};

  ${({type:e})=>e==="inactive"&&ke``};
`,Ll=b.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;b.div`
  color: white;
  text-align: center;
  background: #f22e2e;
  flex: 1;
  padding: 10px 10px;
  margin: 10px 0px;
  font-weight: 500;
  border-radius: 10px;
`,b.a`
  text-decoration: underline;
  color: white;
`;const zl=b(Me)`
  margin: 0px 0px 40px;

  .content {
    padding: 10px 20px 10px;
    .center {
      .body-text {
        color: ${e=>e.theme.default.secondaryColor};
        font-weight: 400;
        font-size: 16px;
        text-transform: none;
        text-align: center;
        letter-spacing: normal;
        margin: 0px 0px;

        @media (max-width: 768px) {
          font-weight: 300;
          font-size: 14px;
          text-align: center;
          letter-spacing: normal;
          line-height: 140%;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 0px 0px 0px;
    }
  }
  @media (max-width: 768px) {
    margin: 0px 0px 0px;
  }
`,Ol=b(nd)`
  text-transform: capitalize;
  margin: 20px 0px;

  .text {
    font-weight: 400;
    font-size: 32px;
    color: ${e=>e.theme.color};
    @media (max-width: 768px) {
      font-weight: 500;
      font-size: 26px;
      line-height: 141%;
    }
  }

  @media (max-width: 768px) {
    text-transform: capitalize;
    margin: 0px 0px 12px 0px;
  }
`,Nl=b.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Fl=b.div`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 167px;
  border-radius: 20px;
  background-color: #f4f5fa;
  margin: 0 auto;
  text-transform: none;
  margin-top: 60px;
  color: #cf1c84;
  align-items: center;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  p {
    padding: 0 200px;
    text-align: center;
    @media (max-width: 600px) {
      padding: 0 10px;
    }
    @media (max-width: 1224px) {
      padding: 0 50px;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
    height: auto;
  }
  @media (max-width: 1224px) {
    font-size: 16px;
  }
`,Gl=b.p`
  text-transform: none;
  margin-top: 60px;
  color: #657795;
  line-height: 21px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`,Hl=b.a`
  text-transform: none;
  margin-top: 30px;
  color: #cf1c84;
  line-height: 21px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,vi=b.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px;
  color: #657795;
  div {
    margin: 5px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 4px;
    div {
      font-weight: 500;
      font-size: 15px;
    }
  }

  ${({type:e})=>e==="active"&&ke`
      color: #e20880;
      @media (max-width: 768px) {
        width: 100%;
      }
    `};

  ${({active:e})=>e==="active"&&ke`
      color: #e20880;
      @media (max-width: 768px) {
        width: 100%;
      }
    `};

  ${({active:e})=>e==="inactive"&&ke`
      @media (max-width: 768px) {
        width: 40%;
        div {
          font-size: 0px;
          @media (max-width: 768px) {
          }
        }
      }
    `};
`,Wl=b.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: flex;
    margin-top: 20px;
  }
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`,$l=b.div`
  margin: 10px auto 0px auto;
  width: 55%;
  padding: 30px;
  background-color: #f5f5fa;
  border-radius: 20px;
  div {
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #657795;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #cf1c84;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
  @media (max-width: 1224px) {
    width: 75%;
  }
`,ql=({channelName:e,setChannelName:n,channelInfo:i,setChannelInfo:r,channelURL:s,setChannelURL:h,editChannel:a,errorInfo:c,setErrorInfo:o})=>{const d=pe(),u=({message:f})=>t.jsxs(q,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[t.jsx(Vn,{color:"red",size:"20"}),t.jsx(me,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:f})]}),l=f=>{const p=f.target.value;pi(p)?(o(""),h(p)):(o(g=>({...g,url:"Channel URL is invalid! Please enter a valid url!"})),h(p))};return t.jsx(Yl,{children:t.jsx(Jl,{onSubmit:a,children:t.jsxs(Vl,{children:[t.jsxs(q,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(yi,{style:{color:d.editChannelPrimaryText},children:"Channel Name"}),t.jsx(q,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:t.jsx(Ge,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:d.editChannelInputbg,color:d.editChannelPrimaryText,border:d.textAreaBorderColor,focusBorder:d.textAreaFocusBorder,radius:"12px",height:"25px",value:e,onChange:f=>{n(f.target.value)}})})]}),(c==null?void 0:c.name)&&t.jsx(u,{message:c==null?void 0:c.name}),t.jsxs(q,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[t.jsxs(q,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(yi,{style:{color:d.editChannelPrimaryText},children:"Channel Description"}),t.jsx(me,{color:d.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-i.length})]}),t.jsx(Kn,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:d.textAreaBorderColor,focusBorder:d.textAreaFocusBorder,radius:"12px",bg:d.editChannelInputbg,color:d.editChannelPrimaryText,value:i,onChange:f=>{r(f.target.value.slice(0,250))},autocomplete:"off"})]}),(c==null?void 0:c.description)&&t.jsx(u,{message:c==null?void 0:c.description}),t.jsxs(q,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(yi,{style:{color:d.editChannelPrimaryText},children:"Channel Website URL"}),t.jsx(Ge,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:d.editChannelInputbg,color:d.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:d.textAreaBorderColor,focusBorder:d.textAreaFocusBorder,radius:"12px",value:s,onChange:f=>{l(f)}})]}),(c==null?void 0:c.url)&&t.jsx(u,{message:c==null?void 0:c.url})]})})})},Yl=b(Me)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,Jl=b(Zn)`
  height: inherit;
`,yi=b.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,Vl=b(q)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,Kl="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",Xl=({onClose:e,InnerComponentProps:n})=>{const{setChannelLogo:i,croppedImage:r,setCroppedImage:s,imageSrc:h,setImageSrc:a,imageType:c,setImageType:o}=n,d=y.useRef(),u=y.useRef(null);He(u,()=>{e()});const l=g=>{g.preventDefault()},f=g=>{g.preventDefault(),g.stopPropagation(),p(g.dataTransfer,"transfer",g)},p=async(g,A,x)=>{if(x.preventDefault(),s(void 0),g==null?void 0:g.files[0]){var m=new FileReader;m.readAsDataURL(g==null?void 0:g.files[0]),m.onloadend=function(C){var v;a(m.result),o((v=g==null?void 0:g.files[0])==null?void 0:v.type)}}};return t.jsxs(Zl,{ref:u,children:[t.jsx(ic,{children:t.jsx(nc,{onClick:e})}),t.jsxs(ec,{children:[t.jsx(tc,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),t.jsx(oc,{className:"",children:t.jsx("div",{onDragOver:g=>l(g),onDrop:g=>f(g),className:"bordered",children:t.jsxs("div",{className:"inner",children:[t.jsx("div",{className:"crop-div",children:r?t.jsx("div",{className:"crop-innderdiv",children:t.jsx("div",{children:t.jsx("img",{alt:"Cropped Img",src:r,className:"croppedImage"})})}):t.jsx("div",{className:"crop-innderdiv",children:t.jsx(vn,{className:"cropper",imageSrc:h,imageType:c,onImageCropped:g=>s(g),width:"128px",height:"128px",ref:d})})}),t.jsxs(rc,{children:[t.jsx("p",{className:"text-below",children:"Drag and Drop or"}),t.jsx("div",{className:"text-div",children:t.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[t.jsx("div",{children:"Browse to Choose"}),t.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:g=>p(g.target,"target",g),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),t.jsx(ac,{children:r?t.jsx(t.Fragment,{children:t.jsx(ge,{variant:"primary",size:"medium",onClick:()=>{i(r),e()},children:"Upload Image"})}):t.jsx(t.Fragment,{children:t.jsx(ge,{variant:"primary",size:"medium",onClick:()=>{d.current.showCroppedImage()},children:"Crop Image"})})})]})]})},Zl=b.div``,ec=b.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,tc=b.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${e=>e.theme.modalTextColor};
`,ic=b.div`
  text-align: end;
  width: 100%;
`,nc=b(ld)`
  cursor: pointer;
  font-size: 20px;
  color: ${e=>e.theme.modalTextColor};
`,rc=b(Yn)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,ac=b(ue)``,oc=b.div`
  width: 100%;
  margin: 24px 0px 44px 0px;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  .bordered {
    display: flex;
    justify-content: center;
    border: 1px dashed #8c99b0;
    align-items: flex-end;
    border-radius: 12px;
    padding: 0px 50px 0px 50px;
    background: ${e=>e.theme.modalbackgroundColor};
    .inner {
      margin-top: 0.25rem;
      text-align: center;
      padding: 23px 15px 23px 15px;
      width: 100%;
      .crop-div {
        width: 100%;
        display: flex;
        flex-direction: row;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        justify-content: space-evenly;
        align-items: center;
        margin-right: auto;
        .crop-innderdiv {
          width: 100%;
          background: ${e=>e.theme.modalImageBgColor};
          border-radius: 20px;
          padding: 17px 100px 17px 100px;
          @media (max-width: 768px) {
            padding: 17px 2px 17px;
          }

          margin-bottom: 12px;
        }

        div {
          height: 128px;
          // width:128px;
          .croppedImage {
            border-radius: 20px;
            // @media (max-width: 768px) {
            //   margin-top: 1rem;
            // }
          }
        }
        .cropper {
          border-radius: 20px;
          width: 128px;
          height: 128px;
        }
      }
      .check-space {
        .croppedImage {
          width: auto;
          height: auto;
          border-radius: 5px;
        }
        .button-space {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      .crop-button {
        display: flex;
        justify-content: center;
        width: 100%;
        @media (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      .svg {
        margin: 0px auto;
        height: 3rem;
        width: 3rem;
        color: #ccc;
      }
      .text-div {
        display: flex;
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: #ccc;
        justify-content: center;
        .labeled {
          position: relative;
          cursor: pointer;
          border-radius: 4px;
          color: #cf1c84;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .text-below {
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: ${e=>e.theme.modalTextColor};
        margin: 0px 0.3rem 0px 0px;
      }
    }
  }
  .image-error {
    font-size: 1rem;
    line-height: 1rem;
    color: red;
    margin-top: 0.5rem;
  }
  .image {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    .item {
      width: 4rem;
      height: auto;
      border-radius: 4px;
    }
    .image-border {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 2rem;
      .text {
        font-size: 1rem;
        line-height: 1rem;
        color: #ccc;
        margin-top: 1rem;
      }
    }
  }
`,Ve=e=>e.trim().length==0;function sc({closeEditChannel:e,UploadLogoComponent:n,displayUplaodLogoModal:i}){const{account:r,provider:s}=Se(),{channelDetails:h,aliasDetails:{isAliasVerified:a,aliasAddrFromContract:c}}=Z(W=>W.admin),{epnsReadProvider:o,epnsWriteProvider:d}=Z(W=>W.contracts),u=50,[l,f]=y.useState(h==null?void 0:h.name),[p,g]=y.useState(h==null?void 0:h.info),[A,x]=y.useState(h==null?void 0:h.url),[m,C]=y.useState(h==null?void 0:h.icon),[v,B]=y.useState(h==null?void 0:h.icon),[T,M]=y.useState(h==null?void 0:h.icon),[E,j]=y.useState(T),[R,D]=y.useState(null),[_,P]=y.useState(!1),[U,N]=y.useState({name:"",description:"",address:"",url:""}),[L,w]=y.useState(!1),[I,S]=y.useState(0),[Q,k]=y.useState(0),[F,z]=y.useState(!1),O=Te();y.useEffect(()=>{r&&async function(){const W=await o.channelUpdateCounter(r);S(u*(Number(W)+1))}()},[r]),y.useEffect(()=>{!r||!s||async function(){const W=await ar({address:r,provider:s,contractAddress:_e.epnscore});k(parseInt(W));const J=parseInt(W);J>=I&&J!=0?P(!0):P(!1)}()},[r,s]);const H=async()=>{if(w(!0),!s)return;const W=s.getSigner(r);O.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const J=await or({signer:W,contractAddress:_e.epnscore,amount:I-Q});console.debug("response",J),J&&(w(!1),k(I),P(!0),O.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:oe=>t.jsx(We,{size:oe,color:"green"})}))}catch(J){console.error(J),J.code=="ACTION_REJECTED"?O.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:oe=>t.jsx(ie,{size:oe,color:"red"})}):(O.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:oe=>t.jsx(ie,{size:oe,color:"red"})}),console.error("Error --> %o",J),console.error({err:J}))}w(!1)},Y=()=>{z(!1)},ce=$e(600),re=y.useRef(null);He(re,()=>{Y()});const X=()=>(N(""),Ve(l)||Ve(p)||Ve(A)?(Ve(l)&&N(W=>({...W,name:"Please, enter the channel name."})),Ve(p)&&N(W=>({...W,description:"Please, enter the channel description"})),Ve(A)&&N(W=>({...W,url:"Please, enter the channel url"})),!1):Ct(l,125)?Ct(A,125)?pi(A)?!0:(N(W=>({...W,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(N(W=>({...W,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(N(W=>({...W,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),ae=()=>!(l!==(h==null?void 0:h.name)||p!==(h==null?void 0:h.info)||A!==(h==null?void 0:h.url)||v!==(h==null?void 0:h.icon)),$=async W=>{try{if(!X())return;w(!0);const J=JSON.stringify({name:l,info:p,url:A,icon:v,aliasDetails:h.aliasDetails||ir({chainId:parseInt(h.chain_id),address:h.address})});console.debug(J);const oe=await nr(J);console.debug("IPFS storagePointer:",oe);const Ce="1+"+oe,de=Si(Ce),Le=Ti(I.toString(),18);O.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const he=await d.updateChannelMeta(r,de,Le,{gasLimit:1e6});console.debug(he),await he.wait(),w(!1),O.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:xe=>t.jsx(We,{size:xe,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(J){w(!1),console.error(J.message),J.code=="ACTION_REJECTED"?O.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:oe=>t.jsx(ie,{size:oe,color:"red"})}):(O.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:oe=>t.jsx(ie,{size:oe,color:"red"})}),console.error("Error --> %o",J),console.error({err:J}))}},le=async W=>{await Ui({noOfTokens:W,provider:s,account:r})};return y.useEffect(()=>{T&&(console.debug("Image cropped",T),Qn(T,function(W){const J=Dn(W);console.debug("response",J),J.success&&(console.debug("Cropped Image....",T),B(T))}))},[T]),t.jsxs(lc,{ref:re,children:[t.jsx(n,{InnerComponent:Xl,InnerComponentProps:{setChannelLogo:C,channelLogo:m,croppedImage:T,setCroppedImage:M,setChannelFile:B,imageSrc:E,setImageSrc:j,imageType:R,setImageType:D,errorInfo:U,setErrorInfo:N},modalPosition:ut.ON_PARENT}),t.jsxs(cc,{children:[t.jsxs(hc,{children:[t.jsx(pc,{src:m}),t.jsx(ge,{variant:"secondary",onClick:()=>{i(),z(!0)},children:"Upload Logo"})]}),!ce&&t.jsx(uc,{}),t.jsx(ql,{channelName:l,setChannelName:f,channelInfo:p,setChannelInfo:g,channelURL:A,setChannelURL:x,editChannel:$,errorInfo:U,setErrorInfo:N})]}),t.jsxs(gc,{children:[t.jsxs("div",{children:[t.jsx(fc,{children:"Channel edit fee"}),t.jsx(xc,{children:"Editing channel details requires fees to be deposited"})]}),t.jsxs(te,{flex:"0",children:[_?t.jsx(dc,{src:Kl}):null,t.jsxs(mc,{children:[I," PUSH"]})]})]}),t.jsx(Di,{noOfPushTokensToCheck:I,containerProps:{width:"100%"},onMintPushToken:le}),L?t.jsx(t.Fragment,{children:t.jsxs(Ac,{children:[t.jsx(Spinner,{size:42,color:ee.COLORS.PRIMARY_PINK,type:ji.PROCESSING}),t.jsx(wc,{children:"Verifying Transaction"})]})}):t.jsx(t.Fragment,{children:t.jsxs(bc,{children:[t.jsx(ge,{onClick:e,variant:"outline",size:"large",children:"Cancel"}),Q>=I?t.jsx(ge,{disabled:ae(),onClick:$,size:"large",children:"Save Changes"}):t.jsx(ge,{onClick:H,size:"large",children:"Approve PUSH"})]})})]})}const lc=b(ue)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,cc=b(ue)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,dc=b.img``,hc=b(te)`
  flex: 0;
  align-items: center;
  align-self: baseline;
  justify-content: center;

  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`,pc=b.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${K.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,uc=b.div`
  height: 21.5rem;
  width: 2px;
  background: ${e=>e.theme.verticalLineColor};
  margin: 0px 68px;
  @media (min-width: 993px) and (max-width: 1240px) {
    margin: 0px 68px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    margin: 0px 68px;
  }
`,gc=b(ue)`
  background: ${e=>e.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  margin-top: 35px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 16px;
  }

  @media (max-width: 425px) {
    margin: 0px;
  }
`,fc=b.p`
  margin: 0px;
  color: ${e=>e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,xc=b.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${e=>e.theme.editChannelSecondaryText};
`,mc=b.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ac=b(ue)`
  flex-direction: row;
  margin-top: 33px;
`,wc=b.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,bc=b(te)`
  justify-content: end;
  margin-top: 35px;
  gap: 14px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,vc=10;let Pn=null;const yc=()=>{pe();const{account:e,chainId:n,wallet:i}=Se(),{channelDetails:r,delegatees:s,aliasDetails:{aliasAddr:h,aliasEthAddr:a,isAliasVerified:c,aliasAddrFromContract:o}}=Z(_=>_.admin),{processingState:d}=Z(_=>_.channelCreation),{epnsWriteProvider:u}=Z(_=>_.contracts);Z(_=>_.user),y.useContext(ki);const l=r&&r!=="unfetched",f=Te(),p=ct(),[g,A]=y.useState(!1);y.useState(!0);const[x,m]=y.useState(!1),C=Ae.coreContractChain===n,v=$e(600);y.useEffect(()=>{if(!C||!r||o||r==="unfetched")return;const _=cd(r);if(_){const{address:P,chainId:U}=_;p(dd(P)),p(hd(U))}else p(dt(0))},[r,o]);const B=async _=>{let{aliasAddress:P=null,isAliasVerified:U=null}=await Jn.getInstance().getChannelDetailsFromAddress(_);return P=="NULL"&&(P=null),{aliasAddress:P,aliasVerified:U}};y.useEffect(()=>{!C||!o||d===0||(Pn=setInterval(async()=>{const{aliasAddress:_,aliasVerified:P}=await B(e);_?(p(pd(_)),P?(p(Qi(!0)),p(dt(0))):(p(dt(2)),p(Qi(!1)))):d!=0&&d!=1&&p(dt(1))},vc*1e3))},[o]),h!==null&&clearInterval(Pn);const T=async()=>{try{f.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const _=await u.destroyTimeBoundChannel(e,{gasLimit:1e6});console.debug(_),console.debug("Check: "+e),await _.wait(),f.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:P=>t.jsx(ie,{size:P,color:"green"})}),p(Bi(null))}catch(_){console.error(_),_.code=="ACTION_REJECTED"?f.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:P=>t.jsx(ie,{size:P,color:"red"})}):f.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:P=>t.jsx(ie,{size:P,color:"red"})})}},M=()=>{m(!0)},E=()=>{m(!1)},{isModalOpen:j,showModal:R,ModalComponent:D}=pt();return t.jsxs(te,{children:[(r==="unfetched"||d===null)&&t.jsx(Xi,{}),r!=="unfetched"&&t.jsxs(ue,{justifyContent:d===0&&"flex-start",height:"fit-content",children:[!r&&d===0&&t.jsx(Pl,{}),l&&d!==null&&t.jsx(t.Fragment,{children:x?t.jsx(sc,{closeEditChannel:E,UploadLogoComponent:D,displayUplaodLogoModal:R,isUploadLogoModalOpen:j}):t.jsxs(t.Fragment,{children:[r&&!v&&t.jsxs(te,{position:"absolute",top:"0",right:"0",zIndex:"1",gap:"8px",children:[!g&&C&&t.jsx(ge,{onClick:M,size:"small",variant:"outline",children:"Edit Channel"}),!g&&t.jsx(on,{}),g&&C&&t.jsx(ge,{onClick:T,size:"small",variant:"danger",children:"Delete Channel"})]}),r?t.jsx(ho,{isChannelExpired:g,setIsChannelExpired:A,showEditChannel:M,destroyChannel:T}):""]})}),d!==0&&d!==null&&l&&!x&&t.jsx(t.Fragment,{children:t.jsx(da,{aliasEthAccount:a,setAliasVerified:Qi})})]})]})};Ae.coreContractChain;function Cc(){ud.pageview("/channel_dashboard");const[e,n]=se.useState(!0),[i,r]=se.useState(null),s=()=>r(null);return se.useEffect(()=>{i&&s()},[i]),t.jsxs(Ic,{children:[e?t.jsx(yc,{}):t.jsx(Xi,{}),i&&t.jsx(md,{notification:i,clearToast:s})]})}const Ic=b(Me)`
  align-items: center;
  align-self: center;
  background: ${e=>e.theme.default.bg};
  border-radius: ${ee.ADJUSTMENTS.RADIUS.LARGE} ${ee.ADJUSTMENTS.RADIUS.LARGE}
    ${ee.ADJUSTMENTS.RADIUS.LARGE} ${ee.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${ee.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${qe.MINI_MODULES.DESKTOP.RIGHT} - ${qe.MINI_MODULES.DESKTOP.LEFT} -
      ${ee.ADJUSTMENTS.PADDING.HUGE} - ${ee.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${ee.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${ee.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${K.laptop} {
    margin: ${ee.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${ee.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${qe.MINI_MODULES.TABLET.RIGHT} - ${qe.MINI_MODULES.TABLET.LEFT} -
        ${ee.ADJUSTMENTS.PADDING.BIG} - ${ee.ADJUSTMENTS.PADDING.BIG}
    );
  }

  @media ${K.mobileL} {
    margin: ${ee.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${ee.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${qe.MINI_MODULES.MOBILE.RIGHT} - ${qe.MINI_MODULES.MOBILE.LEFT} -
        ${ee.ADJUSTMENTS.PADDING.DEFAULT} - ${ee.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${ee.CONSTANTS.HEADER_HEIGHT}px - ${qe.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${ee.ADJUSTMENTS.RADIUS.LARGE} ${ee.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;b.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Ln;cr=()=>t.jsx(Ln,{children:t.jsx(Cc,{})}),Ln=b(gd)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Dd as __tla,cr as default};
