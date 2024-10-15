import{d_ as l,e1 as e,ik as Se,fY as Pe,fX as Q,il as _t,e6 as o,e8 as Z,fD as V,e3 as Ka,e4 as Ya,f2 as P,ec as ee,eT as ce,gq as nt,ew as Pt,i3 as Xa,fG as de,dY as me,e2 as Ja,e$ as ne,er as qa,f1 as Me,em as Qa,eo as Za,eX as je,el as se,eQ as U,e_ as eo,im as to,io as Ee,ip as io,eq as Ue,ea as Oe,e9 as Fe,ej as H,fl as at,eS as D,fp as ue,fM as fe,fN as Y,eV as X,fv as Ut,fw as ot,iq as rt,h5 as no,ir as ao,gy as ke,gp as Ot,is as Ft,en as Ge,gN as oo,ep as Gt,fr as Re,fs as Ie,it as Vt,iu as ro,gO as Ht,fF as Wt,dZ as so,iv as lo,iw as co,ix as po,iy as st,fK as lt,f7 as ct,iz as xo,e0 as ho,fi as go,fm as mo,iA as uo,iB as fo,fR as wo,iC as yo,eR as we,iD as bo,iE as Co,iF as jo,iG as vo,iH as dt,iI as To,eU as Ao,e7 as So,__tla as Mo}from"./index-DXkSuLFr.js";import{f as Kt,c as Eo,a as ae,g as Ve,s as De,u as He,b as ko,d as pt,e as Yt,h as Ro,i as We,j as xt,k as ve,l as Xt,__tla as Io}from"./DefaultPropsProvider-DKkuI-_4.js";import{S as Do,N as Lo,__tla as No}from"./RedCircle-DNWEZDyd.js";import{M as Jt,S as zo,F as qt,C as Qt,a as Zt,__tla as $o}from"./ChannelInfoList-BwH6ViRd.js";import{a as Bo,__tla as _o}from"./Tag-ss72D0UW.js";import{E as Po,__tla as Uo}from"./EPNSCoreHelper-D-HQx3rJ.js";import{a as ei,m as ti,b as ii,__tla as Oo}from"./PushTokenContractHelper-DK6CeANG.js";import{M as Fo,a as Go,__tla as Vo}from"./EmptyNotificationSettings-CoLfX_jR.js";import{a as ni,b as ai,__tla as Ho}from"./ValidationHelper-BhrnkQun.js";import{I as Wo,__tla as Ko}from"./ImportPushTokenMessage-DR4Vhn2P.js";import{a as Yo,__tla as Xo}from"./IpfsHelper-BS5n-xJZ.js";import{v as Jo,C as qo,__tla as Qo}from"./CreateChannel-CKKTGmvJ.js";import{__tla as Zo}from"./TransitionGroupContext-wnbG9GWS.js";import{__tla as er}from"./index.esm-CfT1T7XS.js";import"./browser-Cr_ZWWON.js";import{__tla as tr}from"./Stepper-CRnwUsRW.js";import{__tla as ir}from"./StakingVariant-DDHb56bv.js";import{__tla as nr}from"./useMutation-DHZhFrd2.js";import{__tla as ar}from"./index.esm--exPDsDa.js";import"./Common.form-Ds5bAxK4.js";let oi,or=Promise.all([(()=>{try{return Mo}catch{}})(),(()=>{try{return Io}catch{}})(),(()=>{try{return No}catch{}})(),(()=>{try{return $o}catch{}})(),(()=>{try{return _o}catch{}})(),(()=>{try{return Uo}catch{}})(),(()=>{try{return Oo}catch{}})(),(()=>{try{return Vo}catch{}})(),(()=>{try{return Ho}catch{}})(),(()=>{try{return Ko}catch{}})(),(()=>{try{return Xo}catch{}})(),(()=>{try{return Qo}catch{}})(),(()=>{try{return Zo}catch{}})(),(()=>{try{return er}catch{}})(),(()=>{try{return tr}catch{}})(),(()=>{try{return ir}catch{}})(),(()=>{try{return nr}catch{}})(),(()=>{try{return ar}catch{}})()]).then(async()=>{function ri(t,a=0,i=1){return Eo(t,a,i)}function si(t){t=t.slice(1);const a=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let i=t.match(a);return i&&i[0].length===1&&(i=i.map(n=>n+n)),i?`rgb${i.length===4?"a":""}(${i.map((n,s)=>s<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function ht(t){if(t.type)return t;if(t.charAt(0)==="#")return ht(si(t));const a=t.indexOf("("),i=t.substring(0,a);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(Kt(9,t));let n=t.substring(a+1,t.length-1),s;if(i==="color"){if(n=n.split(" "),s=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(Kt(10,s))}else n=n.split(",");return n=n.map(r=>parseFloat(r)),{type:i,values:n,colorSpace:s}}function li(t){const{type:a,colorSpace:i}=t;let{values:n}=t;return a.indexOf("rgb")!==-1?n=n.map((s,r)=>r<3?parseInt(s,10):s):a.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),a.indexOf("color")!==-1?n=`${i} ${n.join(" ")}`:n=`${n.join(", ")}`,`${a}(${n})`}function ci(t,a){return t=ht(t),a=ri(a),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${a}`:t.values[3]=a,li(t)}function di(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function pi(t){return parseFloat(t)}function xi(t){const{className:a,classes:i,pulsate:n=!1,rippleX:s,rippleY:r,rippleSize:w,in:x,onExited:c,timeout:p}=t,[g,u]=l.useState(!1),h=ae(a,i.ripple,i.rippleVisible,n&&i.ripplePulsate),m={width:w,height:w,top:-(w/2)+r,left:-(w/2)+s},d=ae(i.child,g&&i.childLeaving,n&&i.childPulsate);return!x&&!g&&u(!0),l.useEffect(()=>{if(!x&&c!=null){const T=setTimeout(c,p);return()=>{clearTimeout(T)}}},[c,x,p]),e.jsx("span",{className:h,style:m,children:e.jsx("span",{className:d})})}const ie=Ve("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),hi=["center","classes","className"];let Le=t=>t,gt,mt,ut,ft;const Ke=550,gi=80,mi=Se(gt||(gt=Le`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ui=Se(mt||(mt=Le`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),fi=Se(ut||(ut=Le`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),wi=De("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),yi=De(xi,{name:"MuiTouchRipple",slot:"Ripple"})(ft||(ft=Le`
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
`),ie.rippleVisible,mi,Ke,({theme:t})=>t.transitions.easing.easeInOut,ie.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,ie.child,ie.childLeaving,ui,Ke,({theme:t})=>t.transitions.easing.easeInOut,ie.childPulsate,fi,({theme:t})=>t.transitions.easing.easeInOut),bi=l.forwardRef(function(t,a){const i=He({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:s={},className:r}=i,w=Pe(i,hi),[x,c]=l.useState([]),p=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[x]);const u=l.useRef(!1),h=ko(),m=l.useRef(null),d=l.useRef(null),T=l.useCallback(f=>{const{pulsate:S,rippleX:A,rippleY:L,rippleSize:G,cb:K}=f;c(R=>[...R,e.jsx(yi,{classes:{ripple:ae(s.ripple,ie.ripple),rippleVisible:ae(s.rippleVisible,ie.rippleVisible),ripplePulsate:ae(s.ripplePulsate,ie.ripplePulsate),child:ae(s.child,ie.child),childLeaving:ae(s.childLeaving,ie.childLeaving),childPulsate:ae(s.childPulsate,ie.childPulsate)},timeout:Ke,pulsate:S,rippleX:A,rippleY:L,rippleSize:G},p.current)]),p.current+=1,g.current=K},[s]),_=l.useCallback((f={},S={},A=()=>{})=>{const{pulsate:L=!1,center:G=n||S.pulsate,fakeElement:K=!1}=S;if((f==null?void 0:f.type)==="mousedown"&&u.current){u.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(u.current=!0);const R=K?null:d.current,B=R?R.getBoundingClientRect():{width:0,height:0,left:0,top:0};let N,y,E;if(G||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)N=Math.round(B.width/2),y=Math.round(B.height/2);else{const{clientX:k,clientY:C}=f.touches&&f.touches.length>0?f.touches[0]:f;N=Math.round(k-B.left),y=Math.round(C-B.top)}if(G)E=Math.sqrt((2*B.width**2+B.height**2)/3),E%2===0&&(E+=1);else{const k=Math.max(Math.abs((R?R.clientWidth:0)-N),N)*2+2,C=Math.max(Math.abs((R?R.clientHeight:0)-y),y)*2+2;E=Math.sqrt(k**2+C**2)}f!=null&&f.touches?m.current===null&&(m.current=()=>{T({pulsate:L,rippleX:N,rippleY:y,rippleSize:E,cb:A})},h.start(gi,()=>{m.current&&(m.current(),m.current=null)})):T({pulsate:L,rippleX:N,rippleY:y,rippleSize:E,cb:A})},[n,T,h]),$=l.useCallback(()=>{_({},{pulsate:!0})},[_]),O=l.useCallback((f,S)=>{if(h.clear(),(f==null?void 0:f.type)==="touchend"&&m.current){m.current(),m.current=null,h.start(0,()=>{O(f,S)});return}m.current=null,c(A=>A.length>0?A.slice(1):A),g.current=S},[h]);return l.useImperativeHandle(a,()=>({pulsate:$,start:_,stop:O}),[$,_,O]),e.jsx(wi,Q({className:ae(ie.root,s.root,r),ref:d},w,{children:e.jsx(Bo,{component:null,exit:!0,children:x})}))});function Ci(t){return pt("MuiButtonBase",t)}const ji=Ve("MuiButtonBase",["root","disabled","focusVisible"]),vi=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Ti=t=>{const{disabled:a,focusVisible:i,focusVisibleClassName:n,classes:s}=t,r=xt({root:["root",a&&"disabled",i&&"focusVisible"]},Ci,s);return i&&n&&(r.root+=` ${n}`),r},Ai=De("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ji.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Si=l.forwardRef(function(t,a){const i=He({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:s=!1,children:r,className:w,component:x="button",disabled:c=!1,disableRipple:p=!1,disableTouchRipple:g=!1,focusRipple:u=!1,LinkComponent:h="a",onBlur:m,onClick:d,onContextMenu:T,onDragLeave:_,onFocus:$,onFocusVisible:O,onKeyDown:f,onKeyUp:S,onMouseDown:A,onMouseLeave:L,onMouseUp:G,onTouchEnd:K,onTouchMove:R,onTouchStart:B,tabIndex:N=0,TouchRippleProps:y,touchRippleRef:E,type:k}=i,C=Pe(i,vi),M=l.useRef(null),j=l.useRef(null),pe=Yt(j,E),{isFocusVisibleRef:re,onFocus:W,onBlur:xe,ref:oe}=Ro(),[F,le]=l.useState(!1);c&&F&&le(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{le(!0),M.current.focus()}}),[]);const[he,be]=l.useState(!1);l.useEffect(()=>{be(!0)},[]);const ge=he&&!p&&!c;l.useEffect(()=>{F&&u&&!p&&he&&j.current.pulsate()},[p,u,F,he]);function J(b,$t,Wa=g){return We(Bt=>($t&&$t(Bt),!Wa&&j.current&&j.current[b](Bt),!0))}const Ce=J("start",A),I=J("stop",T),te=J("stop",_),v=J("stop",G),z=J("stop",b=>{F&&b.preventDefault(),L&&L(b)}),q=J("start",B),Ze=J("stop",K),et=J("stop",R),tt=J("stop",b=>{xe(b),re.current===!1&&le(!1),m&&m(b)},!1),Be=We(b=>{M.current||(M.current=b.currentTarget),W(b),re.current===!0&&(le(!0),O&&O(b)),$&&$(b)}),Te=()=>{const b=M.current;return x&&x!=="button"&&!(b.tagName==="A"&&b.href)},it=l.useRef(!1),Fa=We(b=>{u&&!it.current&&F&&j.current&&b.key===" "&&(it.current=!0,j.current.stop(b,()=>{j.current.start(b)})),b.target===b.currentTarget&&Te()&&b.key===" "&&b.preventDefault(),f&&f(b),b.target===b.currentTarget&&Te()&&b.key==="Enter"&&!c&&(b.preventDefault(),d&&d(b))}),Ga=We(b=>{u&&b.key===" "&&j.current&&F&&!b.defaultPrevented&&(it.current=!1,j.current.stop(b,()=>{j.current.pulsate(b)})),S&&S(b),d&&b.target===b.currentTarget&&Te()&&b.key===" "&&!b.defaultPrevented&&d(b)});let _e=x;_e==="button"&&(C.href||C.to)&&(_e=h);const Ae={};_e==="button"?(Ae.type=k===void 0?"button":k,Ae.disabled=c):(!C.href&&!C.to&&(Ae.role="button"),c&&(Ae["aria-disabled"]=c));const Va=Yt(a,oe,M),zt=Q({},i,{centerRipple:s,component:x,disabled:c,disableRipple:p,disableTouchRipple:g,focusRipple:u,tabIndex:N,focusVisible:F}),Ha=Ti(zt);return e.jsxs(Ai,Q({as:_e,className:ae(Ha.root,w),ownerState:zt,onBlur:tt,onClick:d,onContextMenu:I,onFocus:Be,onKeyDown:Fa,onKeyUp:Ga,onMouseDown:Ce,onMouseLeave:z,onMouseUp:v,onDragLeave:te,onTouchEnd:Ze,onTouchMove:et,onTouchStart:q,ref:Va,tabIndex:c?-1:N,type:k},Ae,C,{children:[r,ge?e.jsx(bi,Q({ref:pe,center:s},y)):null]}))});function Mi(t){return pt("MuiIconButton",t)}const Ei=Ve("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ki=["edge","children","className","color","disabled","disableFocusRipple","size"],Ri=t=>{const{classes:a,disabled:i,color:n,edge:s,size:r}=t,w={root:["root",i&&"disabled",n!=="default"&&`color${ve(n)}`,s&&`edge${ve(s)}`,`size${ve(r)}`]};return xt(w,Mi,a)},Ii=De(Si,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,i.color!=="default"&&a[`color${ve(i.color)}`],i.edge&&a[`edge${ve(i.edge)}`],a[`size${ve(i.size)}`]]}})(({theme:t,ownerState:a})=>Q({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Xt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:t,ownerState:a})=>{var i;const n=(i=(t.vars||t).palette)==null?void 0:i[a.color];return Q({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&Q({color:n==null?void 0:n.main},!a.disableRipple&&{"&:hover":Q({},n&&{backgroundColor:t.vars?`rgba(${n.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Xt(n.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Ei.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Di=l.forwardRef(function(t,a){const i=He({props:t,name:"MuiIconButton"}),{edge:n=!1,children:s,className:r,color:w="default",disabled:x=!1,disableFocusRipple:c=!1,size:p="medium"}=i,g=Pe(i,ki),u=Q({},i,{edge:n,color:w,disabled:x,disableFocusRipple:c,size:p}),h=Ri(u);return e.jsx(Ii,Q({className:ae(h.root,r),centerRipple:!0,focusRipple:!c,disabled:x,ref:a},g,{ownerState:u,children:s}))});function Li(t){return pt("MuiSkeleton",t)}Ve("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Ni=["animation","className","component","height","style","variant","width"];let Ne=t=>t,wt,yt,bt,Ct;const zi=t=>{const{classes:a,variant:i,animation:n,hasChildren:s,width:r,height:w}=t;return xt({root:["root",i,n,s&&"withChildren",s&&!r&&"fitContent",s&&!w&&"heightAuto"]},Li,a)},$i=Se(wt||(wt=Ne`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Bi=Se(yt||(yt=Ne`
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
`)),_i=De("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,a[i.variant],i.animation!==!1&&a[i.animation],i.hasChildren&&a.withChildren,i.hasChildren&&!i.width&&a.fitContent,i.hasChildren&&!i.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const i=di(t.shape.borderRadius)||"px",n=pi(t.shape.borderRadius);return Q({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ci(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${i}/${Math.round(n/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&_t(bt||(bt=Ne`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),$i),({ownerState:t,theme:a})=>t.animation==="wave"&&_t(Ct||(Ct=Ne`
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
    `),Bi,(a.vars||a).palette.action.hover)),ze=l.forwardRef(function(t,a){const i=He({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:s,component:r="span",height:w,style:x,variant:c="text",width:p}=i,g=Pe(i,Ni),u=Q({},i,{animation:n,component:r,variant:c,hasChildren:!!g.children}),h=zi(u);return e.jsx(_i,Q({as:r,ref:a,className:ae(h.root,s),ownerState:u},g,{style:Q({width:p,height:w},x)}))}),jt=()=>(Z(),e.jsxs(V,{children:[e.jsxs(Pi,{children:[e.jsxs(Ui,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),e.jsxs(Oi,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),e.jsx(V,{padding:"40px 0 40px 0",children:e.jsx(Ka,{type:Ya.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),Pi=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Ui=o.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Oi=o.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Fi=()=>{var i,n;const t=Z(),{aliasDetails:{aliasChainId:a}}=P(s=>s.admin);return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ce,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(n=(i=nt[a])==null?void 0:i.label)==null?void 0:n.split(" ")[0]," Alias Network."]})," ",e.jsx(ce,{textAlign:"center",margin:"5px 0px 60px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[e.jsx(Pt,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(Xa,{margin:"auto 15px",textTransform:"none",color:t.color,size:"16px",weight:"600",children:"Processing"})]})]})},Gi=()=>{var n;de();const t=Z(),{switchChain:a}=me(),{aliasDetails:{aliasChainId:i}}=P(s=>s.admin);return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ce,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",e.jsx(Vi,{children:(n=nt[i])==null?void 0:n.label})," to start ",e.jsx("br",{}),"verifying your Channel Alias."]}),e.jsx(Ja,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:e.jsx(ne,{variant:"primary",onClick:()=>a(i),size:"large",children:e.jsx(qa,{color:"white",children:"Change Network"})})})]})},Vi=o.b`
  color: #cf1c84;
`,Hi=({aliasEthAccount:t,setAliasVerified:a})=>{var O,f;const i=Z(),{account:n,provider:s,chainId:r}=me(),w=s.getSigner(n),x=Me(),c=new Qa(nt[r].commAddress,Za.epnsComm,w),[p,g]=l.useState(""),[u,h]=l.useState(!1),m=t,d={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"},84532:{label:"Base Sepolia",url:"https://www.alchemy.com/faucets/base-sepolia"},59141:{label:"Linea Sepolia",url:"https://www.infura.io/faucet/linea"}},T=async()=>{m==t&&$()},_=async()=>{const{aliasVerified:S}=await io({account:n,chainId:r}).then(A=>A?(x(a(A.is_alias_verified)),{aliasVerified:A.is_alias_verified}):{aliasVerified:null});return{aliasVerified:S}},$=()=>{g("Processing"),c.verifyChannelAlias(m).then(async S=>{console.debug(S),g("Transaction Sent! It usually takes 5mins to verify."),await S.wait(1),setTimeout(()=>{g("Transaction Mined!")},2e3),setTimeout(()=>{g("Loading...")},2e3);const A=setInterval(async()=>{const{aliasVerified:L}=await _();L&&(setTimeout(()=>{h(!0)},1e3),clearInterval(A),x(Ee(0)))},5e3)}).catch(()=>{g("There was an error"),setTimeout(()=>{g("")},2e3)})};return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsx(je,{textAlign:"center",margin:"60px 0px 0px 0px",color:i.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),p===""&&e.jsx(ce,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:n}),p===""&&se.appEnv!=="prod"&&e.jsxs(je,{padding:"10px",margin:"10px",borderRadius:U.ADJUSTMENTS.RADIUS.SMALL,background:i.default.secondaryBg,color:i.default.secondaryColor,children:["You will need"," ",e.jsx(eo,{href:(O=d[r])==null?void 0:O.url,target:"_blank",children:(f=d[r])==null?void 0:f.label})," ","to proceed."]}),!u&&(p?e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Pt,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ce,{color:i.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:p})]}):e.jsx(ee,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:e.jsx(ne,{variant:"primary",size:"medium",onClick:T,children:"Verify Alias Address"})})),u&&e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(to,{color:"#30CC8B",size:30}),e.jsx(ce,{color:i.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},Wi=({aliasEthAccount:t,setAliasVerified:a})=>{const{processingState:i}=P(n=>n.channelCreation);return e.jsxs(Oe,{children:[e.jsxs(Ki,{children:[e.jsxs(Xe,{type:i>=1?"active":"inactive",active:i==1?"active":"inactive",children:[e.jsx("div",{children:"Waiting for Setup"}),e.jsx(Ye,{type:i>=1?"active":"inactive"})]}),e.jsxs(Xe,{type:i>=2?"active":"inactive",active:i==2?"active":"inactive",children:[e.jsx("div",{children:"Change Network"}),e.jsx(Ye,{type:i>=2?"active":"inactive"})]}),e.jsxs(Xe,{type:i>=3?"active":"inactive",active:i==3?"active":"inactive",children:[e.jsx("div",{children:"Verify Alias Network"}),e.jsx(Ye,{type:i>=3?"active":"inactive"})]}),e.jsx(Yi,{})]}),i===1&&e.jsx(Fi,{}),i===2&&e.jsx(Gi,{}),i===3&&e.jsx(Hi,{aliasEthAccount:t,setAliasVerified:a})]})},Ki=o.div`
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
`,Ye=o.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:t})=>t==="active"&&Ue`
      background: #e20880;
    `};
`,Yi=o.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Xe=o.div`
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

  ${({type:t})=>t==="active"&&Ue`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:t})=>t==="active"&&Ue`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:t})=>t==="inactive"&&Ue`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,vt=({heading:t,subHeading:a})=>{const i=Z();return e.jsx(Fe,{theme:i,children:e.jsxs(Xi,{children:[e.jsx(Ji,{style:{color:i.default.color},children:t}),e.jsx(qi,{style:{color:i.modalMessageColor},children:a})]})})},Xi=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,Ji=o.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,qi=o.h4`
  text-shadow: none;
  width: 90%;
  color: ${t=>t.modalMessageColor||"#657795"};
  font-family: FK Grotesk Neu;
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
`,Je=H.forwardRef(({title:t},a)=>{const i=Z();return e.jsx(Fe,{theme:i,children:e.jsxs(Qi,{children:[e.jsx(Zi,{style:{color:i.modalMessageColor},children:t}),e.jsx(en,{ref:a,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:i.modalMessageColor}})]})})}),Qi=o.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,Zi=o.h4`
  font-family: FK Grotesk Neu;
  font-size: ${t=>t.fontSize||"0.95rem"};
  font-weight: ${t=>t.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${t=>t.marginBottom||"3%"};
`,en=o(at)`
  box-sizing: border-box;
  width: 100%;
`,tn=({onConfirm:t,onClose:a,toastObject:i})=>{const n=H.useRef();Z();const[s,r]=H.useState(!1),w=()=>!s&&a(),x=H.useRef(null);ue(x,()=>w());const c=()=>{var g;r(!0);const p=(g=n==null?void 0:n.current)==null?void 0:g.value;t(p).then(async u=>{console.debug(u),i.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:h=>e.jsx(fe,{size:h,color:"green"})}),a()}).catch(u=>{console.error({err:u}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:h=>e.jsx(Y,{size:h,color:"red"})})}).finally(()=>{r(!1)})};return e.jsxs(nn,{ref:x,children:[e.jsx(vt,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),e.jsx(Je,{ref:n,title:"Delegate Address"}),e.jsx(Jt,{text:"Add Delegate",onClick:c,isLoading:s})]})},nn=o.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${D.laptop}){
    width:50vw;
  }
  @media(${D.mobileL}){
    width:95vw;
  }
`,an="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",on=t=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),rn=({onClose:t,onConfirm:a,toastObject:i})=>{const n=H.useRef(),s=H.useRef(),[r,w]=H.useState(!1);Z();const x=()=>!r&&t(),c=H.useRef(null);ue(c,()=>x());const p=()=>{var h,m;const g=(h=s==null?void 0:s.current)==null?void 0:h.value,u=(m=n==null?void 0:n.current)==null?void 0:m.value;if(w(!0),g==""||u==""){i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:d=>e.jsx(Y,{size:d,color:"red"})}),setTimeout(()=>{w(!1)},500);return}else if(parseInt(g)<60){i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:d=>e.jsx(Y,{size:d,color:"red"})}),setTimeout(()=>{w(!1)},500);return}a(g,u).then(async d=>{console.debug(d),i.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:T=>e.jsx(fe,{size:T,color:"green"})}),t()}).catch(d=>{console.error(d),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:T=>e.jsx(Y,{size:T,color:"red"})})}).finally(()=>{w(!1)})};return e.jsxs(sn,{ref:c,children:[e.jsx(vt,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),e.jsx(Je,{ref:n,title:"Subgraph ID"}),e.jsx(Je,{ref:s,title:"Poll Time (in seconds)"}),e.jsx(Jt,{text:"Add Subgraph",onClick:p,isLoading:r})]})},sn=o.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${D.laptop}){
    width:50vw;
  }
  @media(${D.mobileL}){
    width:95vw;
  }
`,ln=t=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),cn=t=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),dn=({onConfirm:t,onClose:a,toastObject:i})=>{const n=Z(),s=Me(),{channelDetails:r}=P(h=>h.admin),{CHANNNEL_DEACTIVATED_STATE:w}=P(h=>h.channels),[x,c]=H.useState(!1),p=()=>!x&&a(),g=H.useRef(null);ue(g,()=>p());const u=()=>{c(!0),t().then(async h=>{console.debug(h),console.info("Transaction Sent!"),i.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:m=>e.jsx(Y,{size:m,color:"red"})}),await h.wait(1),console.info("Transaction Mined!"),s(rt({...r,channelState:w})),c(!1),a()}).catch(h=>{console.error("!!!Error deactivateChannel() --> %o",h),console.error({err:h}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:m=>e.jsx(Y,{size:m,color:"red"})}),c(!1)})};return e.jsx(Fe,{theme:n,children:e.jsx(pn,{ref:g,children:x?e.jsxs(xn,{children:[e.jsx(Ut,{size:42,color:U.COLORS.PRIMARY_PINK,type:ot.PROCESSING}),e.jsx(hn,{children:"Verifying"})]}):e.jsxs(e.Fragment,{children:[e.jsx(gn,{style:{color:n.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),e.jsxs(mn,{children:[e.jsx(ln,{width:36,height:36,onClick:p}),e.jsx(un,{onClick:u,children:e.jsx(cn,{})})]})]})})})},pn=o.div`
  width: 446px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;

  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
    flex-direction: column;
  }
`,xn=o(X)`
  flex-direction: row;
  //   margin-top:33px;
`,hn=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,gn=o.div`
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
`;o.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;const mn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,un=o.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;o.img`
  height: 36px;
  width: 17px;
`;const fn="DD MMM, YYYY",wn=({onConfirm:t,onClose:a,toastObject:i})=>{const n=Z(),{chainId:s,account:r,provider:w}=me(),x=Me(),{channelDetails:c,canVerify:p,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:u}}=P(C=>C.admin),{CHANNEL_ACTIVE_STATE:h,CHANNNEL_DEACTIVATED_STATE:m}=P(C=>C.channels),[d,T]=l.useState("");let{channelState:_}=c;_||(_=c.activation_status);const $=_===h,O=_===m,[f,S]=l.useState(!1),[A,L]=l.useState(!1),[G,K]=l.useState(0),R=()=>!f&&a(),B=l.useRef(null);ue(B,()=>R());const N=se.coreContractChain===s;ke(600),l.useEffect(()=>{!c||!N||async function(){const C=c.channelStartBlock.toString(),M=await new Ot(se.coreRPC).getBlock(+C),j=Ft(M.timestamp*1e3);T(j.format(fn))}()},[c]),l.useEffect(()=>{!r||!w||async function(){const C=await ei({address:r,provider:w,contractAddress:Ge.epnscore});K(parseInt(C));const M=parseInt(C);M>=50&&M!=0?L(!0):L(!1)}()},[r,w]);const y=async C=>{await ti({noOfTokens:C,provider:w,account:r})},E=async()=>{if(S(!0),!w)return;const C=w.getSigner(r);i.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const M=await ii({signer:C,contractAddress:Ge.epnscore,amount:50-G});console.debug("response",M),M&&(K(50),L(!0),i.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:j=>e.jsx(fe,{size:j,color:"green"})}),S(!1))}catch(M){console.error(M),M.code=="ACTION_REJECTED"?i.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:j=>e.jsx(Y,{size:j,color:"red"})}):(i.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:j=>e.jsx(Y,{size:j,color:"red"})}),console.error("Error --> %o",M),console.error({err:M}))}S(!1)},k=async()=>{S(!0);try{const C=Gt("50",18),M=await t(C);i.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:j=>e.jsx(fe,{size:j,color:"green"})}),await M.wait(),console.info("Transaction Mined!"),i.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:j=>e.jsx(fe,{size:j,color:"green"})}),x(rt({...c,channelState:h})),a(),S(!1)}catch(C){console.error("Error reactivateChannel",{err:C}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:M=>e.jsx(Y,{size:M,color:"red"})}),S(!1)}};return e.jsx(Fe,{theme:n,children:e.jsxs(yn,{ref:B,children:[e.jsxs(bn,{children:[e.jsx(Cn,{children:"Reactivate Channel"}),e.jsx(Di,{onClick:R,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(oo,{size:"1.5rem",style:{color:n.modalIconColor}})})]}),e.jsxs(vn,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Tn,{src:c.icon}),e.jsxs(At,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(In,{children:[c.name,p&&e.jsx(An,{src:"/verify.png"})]}),e.jsxs(At,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[N&&u&&!g||!N&&!g?e.jsx(En,{children:"Alias Network Setup Pending"}):e.jsxs(jn,{justifyContent:"flex-start",children:[e.jsxs(Sn,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(kn,{children:c.subscriber_count})]}),e.jsx(Mn,{active:$,children:$?"Active":O?"Deactivated":"Blocked"})]}),d&&e.jsxs(Rn,{children:["Created ",d]})]})]})]}),e.jsxs(Dn,{children:[e.jsx(Ln,{children:"Channel reactivation fee"}),e.jsxs(V,{flex:"0",children:[A?e.jsx(Nn,{src:zo}):null,e.jsxs(zn,{children:[50," PUSH"]})]})]}),e.jsx(qt,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:y}),f?e.jsxs(Bn,{children:[e.jsx(Ut,{size:42,color:U.COLORS.PRIMARY_PINK,type:ot.PROCESSING}),e.jsx(_n,{children:"Verifying Transaction"})]}):e.jsx($n,{children:G>=50?e.jsx(Mt,{onClick:k,children:"Reactivate"}):e.jsx(Mt,{onClick:E,children:"Approve PUSH"})})]})})},yn=o.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${D.mobileL} {
    padding: 0.5rem;
  }
  @media (${D.laptop}) {
    width: 50vw;
  }
  @media (${D.mobileL}) {
    width: 95vw;
  }
`,bn=o(V)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${D.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${D.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Cn=o(no)`
  color: ${t=>t.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${D.laptop} {
    font-size: 1.2rem;
  }
  @media ${D.mobileL} {
    width: 85%;
  }
`,At=o(X)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,jn=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,vn=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Tn=o.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${D.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${D.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,An=o.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Sn=o.div`
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
  @media ${D.laptop} {
    width: 52px;
    height: 22px;
  }
`,St=o.div`
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
  @media ${D.laptop} {
    padding: 1px 8px;
  }
`,Mn=o(St)`
  color: #2dbd81;
  color: ${t=>t.active?"#2DBD81":"red"};
  background-color: #c6efd1;
  margin-left: 10px;
  margin-bottom: 10px;
  ${t=>t.active&&`
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
`,En=o(St)`
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
`,kn=o.span`
  font-weight: 400;
  font-size: 14px;
`,Rn=o.div`
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
  @media ${D.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,In=o.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${t=>t.theme.color};
  @media ${D.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,Dn=o(V)`
  background: ${t=>t.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 16px;
  }
  @media ${D.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,Ln=o.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${D.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Nn=o.img``,zn=o.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${D.mobileL} {
    width: 100%;
    text-align: center;
  }
`,$n=o(V)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Mt=o(ao)`
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

  @media ${D.mobileL} {
    width: 80%;
  }
`,Bn=o(X)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,_n=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Pn=50,Un=se.coreContractChain;function On({DropdownRef:t,isDropdownOpen:a,closeDropdown:i}){Me();const{account:n,chainId:s}=me(),{epnsWriteProvider:r,epnsCommWriteProvider:w}=P(W=>W.contracts),{channelDetails:x}=P(W=>W.admin),{CHANNNEL_DEACTIVATED_STATE:c,CHANNEL_BLOCKED_STATE:p}=P(W=>W.channels);P(W=>W.user);const g=Z(),{channelState:u}=x,h=Un===s,m=ke(425),{isModalOpen:d,showModal:T,ModalComponent:_}=Re(),{isModalOpen:$,showModal:O,ModalComponent:f}=Re(),{isModalOpen:S,showModal:A,ModalComponent:L}=Re(),G=a&&!d&&!$&&!S;ue(t,()=>G&&i()),H.useState(!1),H.useState(Pn);const[K,R]=H.useState(0),B=u===c,N=u===p,y=N||B;H.useEffect(()=>{R(+Po.formatBigNumberToMetric(x.poolContribution,!0))},[n,x.poolContribution]),de();const E=()=>{N||(B?O():T())},k=de(),C=r.reactivateChannel,M=de(),j=()=>r.deactivateChannel(),pe=de(),re=async(W,xe)=>{if(!(W==""||xe=="")&&!(W<60))try{const oe=W+"+"+xe,F=Vt(oe);return r.addSubGraph(F)}catch(oe){console.error(oe)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Fn,{background:g,children:e.jsxs(Gn,{children:[se.appEnv!=="prod"&&e.jsx(Et,{disabled:y,onClick:()=>!y&&A(),children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx($e,{src:an,alt:"cube"}),e.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),h&&e.jsx(Et,{isChannelDeactivated:B,onClick:E,children:e.jsx(Vn,{isChannelBlocked:N,isChannelDeactivated:B,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[N?e.jsx($e,{src:Tt,alt:"red-bell"}):B?e.jsx($e,{src:on,alt:"green-bell"}):e.jsx($e,{src:Tt,alt:"red-bell"}),e.jsx("div",{style:{width:"10px"}}),N?"Channel Blocked":B?"Activate Channel":"Deactivate Channel"]})})})]})})}),e.jsx(_,{InnerComponent:dn,onConfirm:j,toastObject:M,modalPosition:Ie.ON_ROOT}),e.jsx(f,{InnerComponent:wn,onConfirm:C,toastObject:k,modalMargin:m?"10rem 1rem 0 1rem":"",modalPosition:Ie.ON_ROOT}),e.jsx(L,{InnerComponent:rn,onConfirm:re,toastObject:pe,modalPosition:Ie.ON_ROOT})]})}const Fn=o.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 240px;
  padding: 16px 4px 24px 4px;
  background: ${t=>t.background.backgroundBG};
  box-sizing: border-box;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e8f7;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 16px;
  justify-content: space-between;

  @media (max-width: 600px) {
    left: -90px;
    top: 24px;
  }
`,Gn=o.div`
  flex-direction: column;
  gap: 20px;
  display: ${t=>t.inactive?"none":"flex"};
`;o.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,o.div`
  margin: 0px 10px;
`,o.div`
  text-decoration: underline;
  color: ${t=>t.isChannelDeactivated?"#674C9F":"#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;const Et=o.button`
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 5px;
  position: relative;
  background: ${t=>t.theme.backgroundBG};
  color: ${t=>t.theme.dropdownTextColor};
  height: 23px;
  font-family: 'monospace, monospace';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 141%;
  align-items: center;
  &:hover {
    opacity: ${t=>t.disabled?.5:.9};
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    pointer: hand;
  }
  &:active {
    opacity: ${t=>t.disabled?.5:.75};
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    pointer: hand;
  }
  opacity: ${t=>t.disabled?.5:1};
`,Vn=o.div`
  color: ${t=>t.isChannelBlocked?"red":t.isChannelDeactivated?"#30CC8B":"red "};
`,$e=o.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function kt(){const t=H.useRef(null),[a,i]=H.useState(!1);Z();const n=()=>{i(r=>!r)},s=()=>{i(!1)};return e.jsxs(V,{flex:"0",ref:t,children:[e.jsx(Hn,{active:a,onClick:n}),a&&e.jsx(On,{DropdownRef:t,isDropdownOpen:a,closeDropdown:s})]})}o.div`
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
`;const Hn=o(ro)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${t=>t.active?"rotateZ(90deg)":"none"};
`,Wn="DD MMM, YYYY";function Kn({isChannelExpired:t,setIsChannelExpired:a,showEditChannel:i,destroyChannel:n}){var ge,J,Ce;const{account:s,chainId:r,wallet:w}=me(),{delegatees:x,channelDetails:c,canVerify:p,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:u}}=P(I=>I.admin),{channelSettings:h}=P(I=>I.channels),{userPushSDKInstance:m}=P(I=>I.user),{handleConnectWalletAndEnableProfile:d}=l.useContext(Wt),{CHANNEL_ACTIVE_STATE:T,CHANNNEL_DEACTIVATED_STATE:_}=P(I=>I.channels),{processingState:$}=P(I=>I.channelCreation),[O,f]=l.useState([]),[S,A]=l.useState("");let{channelState:L}=c;L||(L=c.activation_status);const G=L===T,K=L===_,R=se.coreContractChain===r,B=ke(600),[N,y]=l.useState([s]),[E,k]=l.useState(void 0);P(I=>I.contracts);const C=so(),{isModalOpen:M,showModal:j,ModalComponent:pe}=Re(),re=de(),W=async()=>{m.signer||await d({wallet:w}),j()},xe=async I=>m.channel.delegate.add(lt(I,r)),oe=c.expiryTime?lo(((ge=c.expiryTime)==null?void 0:ge.toString())*1e3):"",F=c.expiryTime?co(((J=c.expiryTime)==null?void 0:J.toString())*1e3):!0,le=c.expiryTime?po(((Ce=c.expiryTime)==null?void 0:Ce.toString())*1e3,14):"";l.useEffect(()=>{c.channelType==st.TIMEBOUND&&(F||a(!0))},[F]),l.useEffect(()=>{},[c,p]),l.useEffect(()=>{!c||!R||async function(){const I=c.channelStartBlock.toString(),te=await new Ot(se.coreRPC).getBlock(+I),v=Ft(te.timestamp*1e3);A(v.format(Wn))}()},[c]),l.useEffect(()=>{s&&(!x||!x.length?k(s):k(R?x[0].channel:x[0].alias_address))},[x,s]),l.useEffect(()=>{s&&(async()=>{try{const I=lt(s,r),te=await m.channel.delegate.get({channel:I});if(te){const v=te.map(z=>z);v.unshift(s),y(v)}}catch(I){console.error(I)}})()},[s,r]);const he=async I=>{let te=m;if(!(!te.signer&&(te=await d({wallet:w}),!te)))return te.channel.delegate.remove(lt(I,r))},be=()=>{C(ho.ChannelSettings)};return e.jsxs(X,{children:[e.jsxs(Xn,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Jn,{src:c.icon}),e.jsxs(qe,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(ra,{children:[c.name,p&&e.jsx(qn,{src:"/verify.png"})]}),e.jsxs(qe,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[R&&u&&!g||!R&&!g?e.jsx(ia,{children:"Alias Network Setup Pending"}):e.jsxs(Yn,{justifyContent:"flex-start",children:[e.jsxs(ea,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(na,{children:c.subscriber_count})]}),e.jsxs(ta,{active:G,children:[K&&e.jsx(ct,{width:"12px",src:Do,margin:"0 5px 2px 0px",height:"30px"}),G?"Active":K?"Deactivated":"Blocked"]}),c.channelType==st.TIMEBOUND&&!t&&e.jsxs(V,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(ct,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(je,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",oe]})]}),c.channelType==st.TIMEBOUND&&t&&e.jsxs(V,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(ct,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(je,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",oe]})]})]}),S&&e.jsxs(aa,{children:["Created ",S]})]})]})]}),B&&e.jsxs(V,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!t&&R&&e.jsx(ne,{onClick:i,size:"small",variant:"outline",children:"Edit Channel"}),!t&&e.jsx(kt,{}),t&&R&&e.jsx(ne,{onClick:n,size:"small",variant:"danger",children:"Delete Channel"})]}),t&&e.jsx(X,{alignItems:"flex-start",children:e.jsxs(It,{margin:"25px 0 0 0",children:[e.jsx(je,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",e.jsx(je,{fontWeight:"600",children:le})]})}),e.jsx(X,{alignItems:"flex-start",children:e.jsx(It,{children:c.info})}),p&&e.jsx(qe,{alignItems:"flex-start",padding:"5px 0px",children:e.jsx(sa,{children:e.jsxs(oa,{children:[e.jsx("span",{children:"verified by:"}),e.jsx(Qn,{src:O.icon}),e.jsx(Zn,{children:O.name})]})})}),$===0&&e.jsxs(X,{children:[e.jsx(Oe,{children:e.jsxs(Dt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Qt,{title:"Notification Settings",description:"Customize notification preferences for users",Button:e.jsx(Fo,{onClick:be})}),e.jsx(Zt,{account:s,isAddress:!1,items:h[s],isLoading:!1,onClickEmptyListButton:be,emptyListButtonTitle:"Add Setting"})]})}),e.jsx(Oe,{children:e.jsxs(Dt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Qt,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:e.jsx(Go,{onClick:W})}),e.jsx(Zt,{account:s,isAddress:!0,items:N,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:he,icon:e.jsx(xo,{})}]})]})})]}),e.jsx(pe,{InnerComponent:tn,onConfirm:xe,toastObject:re,modalPosition:Ie.ON_ROOT})]})}const qe=o(X)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Yn=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Xn=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Jn=o.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${D.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,qn=o.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Qn=o.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,Zn=o.div``,ea=o.div`
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
`,Rt=o.div`
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
`,ta=o(Rt)`
  color: #2dbd81;
  color: ${t=>t.active?"#2DBD81":"#E93636"};
  background-color: ${t=>t.active?"#c6efd1":"#FFD8D8"};
  margin-left: 10px;
  ${t=>t.active&&`
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
`,ia=o(Rt)`
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
`,na=o.span`
  font-weight: 400;
  font-size: 14px;
`;o.div`
  display: flex;
  flex-direction: column;
  @media ${D.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const aa=o.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  // color: #657795;
  color: ${t=>t.theme.default.secondaryColor};
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
`,oa=o.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,ra=o.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  text-align: center;
  color: ${t=>t.theme.color};
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
  }
`,sa=o.div`
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
`,It=o.div`
  text-transform: none;
  font-family: FK Grotesk Neu, Source Sans Pro;
  // color: #657795;
  color: ${t=>t.theme.default.secondaryColor};
  margin: ${t=>t.margin?t.margin:"24px 0px"};
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
`,Dt=o(Ht)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
`,la=({channelName:t,setChannelName:a,channelInfo:i,setChannelInfo:n,channelURL:s,setChannelURL:r,editChannel:w,errorInfo:x,setErrorInfo:c})=>{const p=Z(),g=({message:h})=>e.jsxs(ee,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[e.jsx(uo,{color:"red",size:"20"}),e.jsx(ce,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:h})]}),u=h=>{const m=h.target.value;ni(m)?(c(""),r(m)):(c(d=>({...d,url:"Channel URL is invalid! Please enter a valid url!"})),r(m))};return e.jsx(ca,{children:e.jsx(da,{onSubmit:w,children:e.jsxs(pa,{children:[e.jsxs(ee,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:p.editChannelPrimaryText},children:"Channel Name"}),e.jsx(ee,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:e.jsx(at,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:p.editChannelInputbg,color:p.editChannelPrimaryText,border:p.textAreaBorderColor,focusBorder:p.textAreaFocusBorder,radius:"12px",height:"25px",value:t,onChange:h=>{a(h.target.value)}})})]}),(x==null?void 0:x.name)&&e.jsx(g,{message:x==null?void 0:x.name}),e.jsxs(ee,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(ee,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(Qe,{style:{color:p.editChannelPrimaryText},children:"Channel Description"}),e.jsx(ce,{color:p.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-i.length})]}),e.jsx(mo,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:p.textAreaBorderColor,focusBorder:p.textAreaFocusBorder,radius:"12px",bg:p.editChannelInputbg,color:p.editChannelPrimaryText,value:i,onChange:h=>{n(h.target.value.slice(0,250))},autocomplete:"off"})]}),(x==null?void 0:x.description)&&e.jsx(g,{message:x==null?void 0:x.description}),e.jsxs(ee,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:p.editChannelPrimaryText},children:"Channel Website URL"}),e.jsx(at,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:p.editChannelInputbg,color:p.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:p.textAreaBorderColor,focusBorder:p.textAreaFocusBorder,radius:"12px",value:s,onChange:h=>{u(h)}})]}),(x==null?void 0:x.url)&&e.jsx(g,{message:x==null?void 0:x.url})]})})})},ca=o(Oe)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,da=o(go)`
  height: inherit;
`,Qe=o.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,pa=o(ee)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,xa="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",ha=({onClose:t,InnerComponentProps:a})=>{const{setChannelLogo:i,croppedImage:n,setCroppedImage:s,imageSrc:r,setImageSrc:w,imageType:x,setImageType:c}=a,p=l.useRef(),g=l.useRef(null);ue(g,()=>{t()});const u=d=>{d.preventDefault()},h=d=>{d.preventDefault(),d.stopPropagation(),m(d.dataTransfer,"transfer",d)},m=async(d,T,_)=>{if(_.preventDefault(),s(void 0),d==null?void 0:d.files[0]){var $=new FileReader;$.readAsDataURL(d==null?void 0:d.files[0]),$.onloadend=function(O){var f;w($.result),c((f=d==null?void 0:d.files[0])==null?void 0:f.type)}}};return e.jsxs(ga,{ref:g,children:[e.jsx(fa,{children:e.jsx(wa,{onClick:t})}),e.jsxs(ma,{children:[e.jsx(ua,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),e.jsx(Ca,{className:"",children:e.jsx("div",{onDragOver:d=>u(d),onDrop:d=>h(d),className:"bordered",children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"crop-div",children:n?e.jsx("div",{className:"crop-innderdiv",children:e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:n,className:"croppedImage"})})}):e.jsx("div",{className:"crop-innderdiv",children:e.jsx(Wo,{className:"cropper",imageSrc:r,imageType:x,onImageCropped:d=>s(d),width:"128px",height:"128px",ref:p})})}),e.jsxs(ya,{children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:d=>m(d.target,"target",d),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),e.jsx(ba,{children:n?e.jsx(e.Fragment,{children:e.jsx(ne,{variant:"primary",size:"medium",onClick:()=>{i(n),t()},children:"Upload Image"})}):e.jsx(e.Fragment,{children:e.jsx(ne,{variant:"primary",size:"medium",onClick:()=>{p.current.showCroppedImage()},children:"Crop Image"})})})]})]})},ga=o.div``,ma=o.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,ua=o.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${t=>t.theme.modalTextColor};
`,fa=o.div`
  text-align: end;
  width: 100%;
`,wa=o(fo)`
  cursor: pointer;
  font-size: 20px;
  color: ${t=>t.theme.modalTextColor};
`,ya=o(Ht)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,ba=o(X)``,Ca=o.div`
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
    background: ${t=>t.theme.modalbackgroundColor};
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
          background: ${t=>t.theme.modalImageBgColor};
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
        color: ${t=>t.theme.modalTextColor};
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
`,ye=t=>t.trim().length==0;function ja(t,a){var i=new XMLHttpRequest;i.onload=function(){var n=new FileReader;n.onloadend=function(){a(n.result)},n.readAsDataURL(i.response)},i.open("GET",t),i.responseType="blob",i.send()}const va=t=>{var a=Jo,i=t.split(";base64,").pop(),n=wo.from(i,"base64"),s=a(n);return s.width>128||s.height>128?(console.error("Image size check failed... returning"),{success:0,info:"Image size check failed, Image should be 128X128PX"}):(console.debug("Image verification",i.charAt(0)),i.charAt(0)==="/"?{success:1,info:"Image checks passed"}:i.charAt(0)==="i"?{success:1,info:"Image checks passed"}:{success:0,info:"Image extension should be jpg or png"})};function Ta({closeEditChannel:t,UploadLogoComponent:a,displayUplaodLogoModal:i}){const{account:n,provider:s}=me(),{channelDetails:r,aliasDetails:{isAliasVerified:w,aliasAddrFromContract:x}}=P(v=>v.admin),{epnsReadProvider:c,epnsWriteProvider:p}=P(v=>v.contracts),g=50,[u,h]=l.useState(r==null?void 0:r.name),[m,d]=l.useState(r==null?void 0:r.info),[T,_]=l.useState(r==null?void 0:r.url),[$,O]=l.useState(r==null?void 0:r.icon),[f,S]=l.useState(r==null?void 0:r.icon),[A,L]=l.useState(r==null?void 0:r.icon),[G,K]=l.useState(A),[R,B]=l.useState(null),[N,y]=l.useState(!1),[E,k]=l.useState({name:"",description:"",address:"",url:""}),[C,M]=l.useState(!1),[j,pe]=l.useState(0),[re,W]=l.useState(0),[xe,oe]=l.useState(!1),F=de();l.useEffect(()=>{n&&async function(){const v=await c.channelUpdateCounter(n);pe(g*(Number(v)+1))}()},[n]),l.useEffect(()=>{!n||!s||async function(){const v=await ei({address:n,provider:s,contractAddress:Ge.epnscore});W(parseInt(v));const z=parseInt(v);z>=j&&z!=0?y(!0):y(!1)}()},[n,s]);const le=async()=>{if(M(!0),!s)return;const v=s.getSigner(n);F.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const z=await ii({signer:v,contractAddress:Ge.epnscore,amount:j-re});console.debug("response",z),z&&(M(!1),W(j),y(!0),F.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:q=>e.jsx(fe,{size:q,color:"green"})}))}catch(z){console.error(z),z.code=="ACTION_REJECTED"?F.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}):(F.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}),console.error("Error --> %o",z),console.error({err:z}))}M(!1)},he=()=>{oe(!1)},be=ke(600),ge=l.useRef(null);ue(ge,()=>{he()});const J=()=>(k(""),ye(u)||ye(m)||ye(T)?(ye(u)&&k(v=>({...v,name:"Please, enter the channel name."})),ye(m)&&k(v=>({...v,description:"Please, enter the channel description"})),ye(T)&&k(v=>({...v,url:"Please, enter the channel url"})),!1):ai(u,125)?ai(T,125)?ni(T)?!0:(k(v=>({...v,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(k(v=>({...v,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(k(v=>({...v,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Ce=()=>!(u!==(r==null?void 0:r.name)||m!==(r==null?void 0:r.info)||T!==(r==null?void 0:r.url)||f!==(r==null?void 0:r.icon)),I=async v=>{try{if(!J())return;M(!0);const z=JSON.stringify({name:u,info:m,url:T,icon:f,aliasDetails:r.aliasDetails||yo({chainId:parseInt(r.chain_id),address:r.address})});console.debug(z);const q=await Yo(z);console.debug("IPFS storagePointer:",q);const Ze="1+"+q,et=Vt(Ze),tt=Gt(j.toString(),18);F.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Be=await p.updateChannelMeta(n,et,tt,{gasLimit:1e6});console.debug(Be),await Be.wait(),M(!1),F.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:Te=>e.jsx(fe,{size:Te,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(z){M(!1),console.error(z.message),z.code=="ACTION_REJECTED"?F.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}):(F.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}),console.error("Error --> %o",z),console.error({err:z}))}},te=async v=>{await ti({noOfTokens:v,provider:s,account:n})};return l.useEffect(()=>{A&&(console.debug("Image cropped",A),ja(A,function(v){const z=va(v);console.debug("response",z),z.success&&(console.debug("Cropped Image....",A),S(A))}))},[A]),e.jsxs(Aa,{ref:ge,children:[e.jsx(a,{InnerComponent:ha,InnerComponentProps:{setChannelLogo:O,channelLogo:$,croppedImage:A,setCroppedImage:L,setChannelFile:S,imageSrc:G,setImageSrc:K,imageType:R,setImageType:B,errorInfo:E,setErrorInfo:k},modalPosition:Ie.ON_PARENT}),e.jsxs(Sa,{children:[e.jsxs(Ea,{children:[e.jsx(ka,{src:$}),e.jsx(ne,{variant:"secondary",onClick:()=>{i(),oe(!0)},children:"Upload Logo"})]}),!be&&e.jsx(Ra,{}),e.jsx(la,{channelName:u,setChannelName:h,channelInfo:m,setChannelInfo:d,channelURL:T,setChannelURL:_,editChannel:I,errorInfo:E,setErrorInfo:k})]}),e.jsxs(Ia,{children:[e.jsxs("div",{children:[e.jsx(Da,{children:"Channel edit fee"}),e.jsx(La,{children:"Editing channel details requires fees to be deposited"})]}),e.jsxs(V,{flex:"0",children:[N?e.jsx(Ma,{src:xa}):null,e.jsxs(Na,{children:[j," PUSH"]})]})]}),e.jsx(qt,{noOfPushTokensToCheck:j,containerProps:{width:"100%"},onMintPushToken:te}),C?e.jsx(e.Fragment,{children:e.jsxs(za,{children:[e.jsx(Spinner,{size:42,color:U.COLORS.PRIMARY_PINK,type:ot.PROCESSING}),e.jsx($a,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Ba,{children:[e.jsx(ne,{onClick:t,variant:"outline",size:"large",children:"Cancel"}),re>=j?e.jsx(ne,{disabled:Ce(),onClick:I,size:"large",children:"Save Changes"}):e.jsx(ne,{onClick:le,size:"large",children:"Approve PUSH"})]})})]})}const Aa=o(X)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,Sa=o(X)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,Ma=o.img``,Ea=o(V)`
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
`,ka=o.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${D.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Ra=o.div`
  height: 21.5rem;
  width: 2px;
  background: ${t=>t.theme.verticalLineColor};
  margin: 0px 68px;
  @media (min-width: 993px) and (max-width: 1240px) {
    margin: 0px 68px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    margin: 0px 68px;
  }
`,Ia=o(X)`
  background: ${t=>t.theme.editFooterBg};
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
`,Da=o.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,La=o.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Na=o.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,za=o(X)`
  flex-direction: row;
  margin-top: 33px;
`,$a=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Ba=o(V)`
  justify-content: end;
  margin-top: 35px;
  gap: 14px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,_a=10;let Lt=null;const Pa=()=>{Z();const{account:t,chainId:a,wallet:i}=me(),{channelDetails:n,delegatees:s,aliasDetails:{aliasAddr:r,aliasEthAddr:w,isAliasVerified:x,aliasAddrFromContract:c}}=P(y=>y.admin),{processingState:p}=P(y=>y.channelCreation),{epnsWriteProvider:g}=P(y=>y.contracts),{userPushSDKInstance:u}=P(y=>y.user);l.useContext(Wt);const h=n&&n!=="unfetched",m=de(),d=Me(),[T,_]=l.useState(!1);l.useState(!0);const[$,O]=l.useState(!1),f=se.coreContractChain===a,S=ke(600);l.useEffect(()=>{if(!f||!n||c||n==="unfetched")return;const y=bo(n);if(y){const{address:E,chainId:k}=y;d(Co(E)),d(jo(k))}else d(Ee(0))},[n,c]);const A=async y=>{let{alias_address:E=null,is_alias_verified:k=null}=await To({userPushSDKInstance:u,address:y}).then(C=>C);return E=="NULL"&&(E=null),{aliasAddress:E,aliasVerified:k}};l.useEffect(()=>{!f||!c||p===0||(Lt=setInterval(async()=>{const{aliasAddress:y,aliasVerified:E}=await A(t);y?(d(vo(y)),E?(d(dt(!0)),d(Ee(0))):(d(Ee(2)),d(dt(!1)))):p!=0&&p!=1&&d(Ee(1))},_a*1e3))},[c]),r!==null&&clearInterval(Lt);const L=async()=>{try{m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const y=await g.destroyTimeBoundChannel(t,{gasLimit:1e6});console.debug(y),console.debug("Check: "+t),await y.wait(),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Y,{size:E,color:"green"})}),d(rt(null))}catch(y){console.error(y),y.code=="ACTION_REJECTED"?m.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:E=>e.jsx(Y,{size:E,color:"red"})}):m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:E=>e.jsx(Y,{size:E,color:"red"})})}},G=()=>{O(!0)},K=()=>{O(!1)},{isModalOpen:R,showModal:B,ModalComponent:N}=Re();return e.jsxs(V,{children:[(n==="unfetched"||p===null)&&e.jsx(jt,{}),n!=="unfetched"&&e.jsxs(X,{justifyContent:p===0&&"flex-start",height:"fit-content",children:[!n&&p===0&&e.jsx(qo,{}),h&&p!==null&&e.jsx(Ua,{children:$?e.jsx(Ta,{closeEditChannel:K,UploadLogoComponent:N,displayUplaodLogoModal:B,isUploadLogoModalOpen:R}):e.jsxs(e.Fragment,{children:[n&&!S&&e.jsxs(V,{zIndex:"1",gap:"8px",children:[!T&&f&&e.jsx(ne,{onClick:G,size:"small",variant:"outline",children:"Edit Channel"}),!T&&e.jsx(kt,{}),T&&f&&e.jsx(ne,{onClick:L,size:"small",variant:"danger",children:"Delete Channel"})]}),n?e.jsx(Kn,{isChannelExpired:T,setIsChannelExpired:_,showEditChannel:G,destroyChannel:L}):""]})}),p!==0&&p!==null&&h&&!$&&e.jsx(e.Fragment,{children:e.jsx(Wi,{aliasEthAccount:w,setAliasVerified:dt})})]})]})},Ua=o(X)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${U.ADJUSTMENTS.RADIUS.LARGE} ${U.ADJUSTMENTS.RADIUS.LARGE}
    ${U.ADJUSTMENTS.RADIUS.LARGE} ${U.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${we.MINI_MODULES.DESKTOP.RIGHT} - ${we.MINI_MODULES.DESKTOP.LEFT} -
      ${U.ADJUSTMENTS.PADDING.HUGE} - ${U.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${U.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${D.laptop} {
    margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${U.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${we.MINI_MODULES.TABLET.RIGHT} - ${we.MINI_MODULES.TABLET.LEFT} -
        ${U.ADJUSTMENTS.PADDING.BIG} - ${U.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${D.mobileL} {
    margin: ${U.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${U.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${we.MINI_MODULES.MOBILE.RIGHT} - ${we.MINI_MODULES.MOBILE.LEFT} -
        ${U.ADJUSTMENTS.PADDING.DEFAULT} - ${U.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${U.CONSTANTS.HEADER_HEIGHT}px - ${we.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${U.ADJUSTMENTS.RADIUS.LARGE} ${U.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;se.coreContractChain;function Oa(){Ao.pageview("/channel_dashboard");const[t,a]=H.useState(!0),[i,n]=H.useState(null),s=()=>n(null);return H.useEffect(()=>{i&&s()},[i]),e.jsxs(e.Fragment,{children:[t?e.jsx(Pa,{}):e.jsx(jt,{}),i&&e.jsx(Lo,{notification:i,clearToast:s})]})}o.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Nt;oi=()=>e.jsx(Nt,{children:e.jsx(Oa,{})}),Nt=o(So)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{or as __tla,oi as default};
