import{k8 as Pt,k9 as Wa,cs as l,ka as ie,cv as e,kb as Ue,kc as Se,kd as ke,ke as Oe,hy as _e,kf as Ya,hx as Q,kg as it,kh as Ut,ki as Ja,kj as Fe,kk as at,kl as je,km as Ot,kn as _t,cA as o,cD as Z,h2 as V,cx as Xa,cy as qa,gs as U,cH as ee,gg as ce,i0 as ot,cY as Ft,jU as Qa,h5 as de,cq as me,cw as Za,gp as ae,cW as eo,gr as Ee,cR as to,cT as no,gk as ve,cQ as se,gd as O,gn as io,ko as ao,kp as Me,kq as oo,cV as Ge,cF as Ve,cE as He,cO as H,gx as rt,gf as D,gP as ue,hb as fe,hc as Y,gi as J,gV as Gt,gW as st,kr as lt,iC as ro,ks as so,iu as Re,h$ as Vt,kt as Ht,cS as Ke,ig as lo,cU as Kt,gR as Ie,gS as De,ku as Wt,kv as co,ih as Yt,h4 as Jt,cr as po,kw as xo,kx as ho,ky as go,kz as ct,h9 as dt,gE as pt,kA as mo,cu as uo,gu as fo,gy as wo,kB as yo,kC as bo,hr as Co,kD as jo,ge as we,kE as vo,kF as To,kG as Ao,kH as So,kI as xt,kJ as ko,gh as Eo,cB as Mo,__tla as Ro}from"./index-C8uskVBT.js";import{S as Io,N as Do,__tla as Lo}from"./RedCircle-BME0SN4A.js";import{M as Xt,S as No,F as qt,C as Qt,a as Zt,__tla as zo}from"./ChannelInfoList-DmyPfTHo.js";import{a as $o,__tla as Bo}from"./Tag-DaPpKXzG.js";import{E as Po,__tla as Uo}from"./EPNSCoreHelper-Cv_PAXcK.js";import{a as en,m as tn,b as nn,__tla as Oo}from"./PushTokenContractHelper-Cc1y9MAp.js";import{M as _o,a as Fo,__tla as Go}from"./EmptyNotificationSettings-Bi1unUvl.js";import{a as an,b as on,__tla as Vo}from"./ValidationHelper-DrXrqkzp.js";import{I as Ho,__tla as Ko}from"./ImportPushTokenMessage-rrspMzYe.js";import{a as Wo,__tla as Yo}from"./IpfsHelper-DrcCPwO9.js";import{v as Jo,C as Xo,__tla as qo}from"./CreateChannel-CikVEBlM.js";import{__tla as Qo}from"./TransitionGroupContext-Bb-YBAQe.js";import{__tla as Zo}from"./index.esm-D_NfES-H.js";import"./browser-Cr_ZWWON.js";import{__tla as er}from"./Stepper-DjnkOYC_.js";import{__tla as tr}from"./StakingVariant-B0LN8TW6.js";import{__tla as nr}from"./useMutation-CEj9URYZ.js";import{__tla as ir}from"./index.esm-CD9TIMnF.js";import"./Common.form-iMV6nXze.js";let rn,ar=Promise.all([(()=>{try{return Ro}catch{}})(),(()=>{try{return Lo}catch{}})(),(()=>{try{return zo}catch{}})(),(()=>{try{return Bo}catch{}})(),(()=>{try{return Uo}catch{}})(),(()=>{try{return Oo}catch{}})(),(()=>{try{return Go}catch{}})(),(()=>{try{return Vo}catch{}})(),(()=>{try{return Ko}catch{}})(),(()=>{try{return Yo}catch{}})(),(()=>{try{return qo}catch{}})(),(()=>{try{return Qo}catch{}})(),(()=>{try{return Zo}catch{}})(),(()=>{try{return er}catch{}})(),(()=>{try{return tr}catch{}})(),(()=>{try{return nr}catch{}})(),(()=>{try{return ir}catch{}})()]).then(async()=>{function sn(t,a=0,n=1){return Wa(t,a,n)}function ln(t){t=t.slice(1);const a=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(a);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,s)=>s<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function ht(t){if(t.type)return t;if(t.charAt(0)==="#")return ht(ln(t));const a=t.indexOf("("),n=t.substring(0,a);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Pt(9,t));let i=t.substring(a+1,t.length-1),s;if(n==="color"){if(i=i.split(" "),s=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(Pt(10,s))}else i=i.split(",");return i=i.map(r=>parseFloat(r)),{type:n,values:i,colorSpace:s}}function cn(t){const{type:a,colorSpace:n}=t;let{values:i}=t;return a.indexOf("rgb")!==-1?i=i.map((s,r)=>r<3?parseInt(s,10):s):a.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),a.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${a}(${i})`}function dn(t,a){return t=ht(t),a=sn(a),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${a}`:t.values[3]=a,cn(t)}function pn(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function xn(t){return parseFloat(t)}function hn(t){const{className:a,classes:n,pulsate:i=!1,rippleX:s,rippleY:r,rippleSize:w,in:x,onExited:c,timeout:p}=t,[g,u]=l.useState(!1),h=ie(a,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m={width:w,height:w,top:-(w/2)+r,left:-(w/2)+s},d=ie(n.child,g&&n.childLeaving,i&&n.childPulsate);return!x&&!g&&u(!0),l.useEffect(()=>{if(!x&&c!=null){const T=setTimeout(c,p);return()=>{clearTimeout(T)}}},[c,x,p]),e.jsx("span",{className:h,style:m,children:e.jsx("span",{className:d})})}const ne=Ue("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),gn=["center","classes","className"];let Le=t=>t,gt,mt,ut,ft;const We=550,mn=80,un=Se(gt||(gt=Le`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),fn=Se(mt||(mt=Le`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),wn=Se(ut||(ut=Le`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yn=ke("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),bn=ke(hn,{name:"MuiTouchRipple",slot:"Ripple"})(ft||(ft=Le`
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
`),ne.rippleVisible,un,We,({theme:t})=>t.transitions.easing.easeInOut,ne.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,ne.child,ne.childLeaving,fn,We,({theme:t})=>t.transitions.easing.easeInOut,ne.childPulsate,wn,({theme:t})=>t.transitions.easing.easeInOut),Cn=l.forwardRef(function(t,a){const n=Oe({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:r}=n,w=_e(n,gn),[x,c]=l.useState([]),p=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[x]);const u=l.useRef(!1),h=Ya(),m=l.useRef(null),d=l.useRef(null),T=l.useCallback(f=>{const{pulsate:S,rippleX:A,rippleY:L,rippleSize:G,cb:W}=f;c(R=>[...R,e.jsx(bn,{classes:{ripple:ie(s.ripple,ne.ripple),rippleVisible:ie(s.rippleVisible,ne.rippleVisible),ripplePulsate:ie(s.ripplePulsate,ne.ripplePulsate),child:ie(s.child,ne.child),childLeaving:ie(s.childLeaving,ne.childLeaving),childPulsate:ie(s.childPulsate,ne.childPulsate)},timeout:We,pulsate:S,rippleX:A,rippleY:L,rippleSize:G},p.current)]),p.current+=1,g.current=W},[s]),P=l.useCallback((f={},S={},A=()=>{})=>{const{pulsate:L=!1,center:G=i||S.pulsate,fakeElement:W=!1}=S;if((f==null?void 0:f.type)==="mousedown"&&u.current){u.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(u.current=!0);const R=W?null:d.current,B=R?R.getBoundingClientRect():{width:0,height:0,left:0,top:0};let N,y,E;if(G||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)N=Math.round(B.width/2),y=Math.round(B.height/2);else{const{clientX:M,clientY:C}=f.touches&&f.touches.length>0?f.touches[0]:f;N=Math.round(M-B.left),y=Math.round(C-B.top)}if(G)E=Math.sqrt((2*B.width**2+B.height**2)/3),E%2===0&&(E+=1);else{const M=Math.max(Math.abs((R?R.clientWidth:0)-N),N)*2+2,C=Math.max(Math.abs((R?R.clientHeight:0)-y),y)*2+2;E=Math.sqrt(M**2+C**2)}f!=null&&f.touches?m.current===null&&(m.current=()=>{T({pulsate:L,rippleX:N,rippleY:y,rippleSize:E,cb:A})},h.start(mn,()=>{m.current&&(m.current(),m.current=null)})):T({pulsate:L,rippleX:N,rippleY:y,rippleSize:E,cb:A})},[i,T,h]),$=l.useCallback(()=>{P({},{pulsate:!0})},[P]),_=l.useCallback((f,S)=>{if(h.clear(),(f==null?void 0:f.type)==="touchend"&&m.current){m.current(),m.current=null,h.start(0,()=>{_(f,S)});return}m.current=null,c(A=>A.length>0?A.slice(1):A),g.current=S},[h]);return l.useImperativeHandle(a,()=>({pulsate:$,start:P,stop:_}),[$,P,_]),e.jsx(yn,Q({className:ie(ne.root,s.root,r),ref:d},w,{children:e.jsx($o,{component:null,exit:!0,children:x})}))});function jn(t){return it("MuiButtonBase",t)}const vn=Ue("MuiButtonBase",["root","disabled","focusVisible"]),Tn=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],An=t=>{const{disabled:a,focusVisible:n,focusVisibleClassName:i,classes:s}=t,r=at({root:["root",a&&"disabled",n&&"focusVisible"]},jn,s);return n&&i&&(r.root+=` ${i}`),r},Sn=ke("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${vn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),kn=l.forwardRef(function(t,a){const n=Oe({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:r,className:w,component:x="button",disabled:c=!1,disableRipple:p=!1,disableTouchRipple:g=!1,focusRipple:u=!1,LinkComponent:h="a",onBlur:m,onClick:d,onContextMenu:T,onDragLeave:P,onFocus:$,onFocusVisible:_,onKeyDown:f,onKeyUp:S,onMouseDown:A,onMouseLeave:L,onMouseUp:G,onTouchEnd:W,onTouchMove:R,onTouchStart:B,tabIndex:N=0,TouchRippleProps:y,touchRippleRef:E,type:M}=n,C=_e(n,Tn),k=l.useRef(null),j=l.useRef(null),pe=Ut(j,E),{isFocusVisibleRef:re,onFocus:K,onBlur:xe,ref:oe}=Ja(),[F,le]=l.useState(!1);c&&F&&le(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{le(!0),k.current.focus()}}),[]);const[he,be]=l.useState(!1);l.useEffect(()=>{be(!0)},[]);const ge=he&&!p&&!c;l.useEffect(()=>{F&&u&&!p&&he&&j.current.pulsate()},[p,u,F,he]);function X(b,$t,Ka=g){return Fe(Bt=>($t&&$t(Bt),!Ka&&j.current&&j.current[b](Bt),!0))}const Ce=X("start",A),I=X("stop",T),te=X("stop",P),v=X("stop",G),z=X("stop",b=>{F&&b.preventDefault(),L&&L(b)}),q=X("start",B),Ze=X("stop",W),et=X("stop",R),tt=X("stop",b=>{xe(b),re.current===!1&&le(!1),m&&m(b)},!1),Be=Fe(b=>{k.current||(k.current=b.currentTarget),K(b),re.current===!0&&(le(!0),_&&_(b)),$&&$(b)}),Te=()=>{const b=k.current;return x&&x!=="button"&&!(b.tagName==="A"&&b.href)},nt=l.useRef(!1),Fa=Fe(b=>{u&&!nt.current&&F&&j.current&&b.key===" "&&(nt.current=!0,j.current.stop(b,()=>{j.current.start(b)})),b.target===b.currentTarget&&Te()&&b.key===" "&&b.preventDefault(),f&&f(b),b.target===b.currentTarget&&Te()&&b.key==="Enter"&&!c&&(b.preventDefault(),d&&d(b))}),Ga=Fe(b=>{u&&b.key===" "&&j.current&&F&&!b.defaultPrevented&&(nt.current=!1,j.current.stop(b,()=>{j.current.pulsate(b)})),S&&S(b),d&&b.target===b.currentTarget&&Te()&&b.key===" "&&!b.defaultPrevented&&d(b)});let Pe=x;Pe==="button"&&(C.href||C.to)&&(Pe=h);const Ae={};Pe==="button"?(Ae.type=M===void 0?"button":M,Ae.disabled=c):(!C.href&&!C.to&&(Ae.role="button"),c&&(Ae["aria-disabled"]=c));const Va=Ut(a,oe,k),zt=Q({},n,{centerRipple:s,component:x,disabled:c,disableRipple:p,disableTouchRipple:g,focusRipple:u,tabIndex:N,focusVisible:F}),Ha=An(zt);return e.jsxs(Sn,Q({as:Pe,className:ie(Ha.root,w),ownerState:zt,onBlur:tt,onClick:d,onContextMenu:I,onFocus:Be,onKeyDown:Fa,onKeyUp:Ga,onMouseDown:Ce,onMouseLeave:z,onMouseUp:v,onDragLeave:te,onTouchEnd:Ze,onTouchMove:et,onTouchStart:q,ref:Va,tabIndex:c?-1:N,type:M},Ae,C,{children:[r,ge?e.jsx(Cn,Q({ref:pe,center:s},y)):null]}))});function En(t){return it("MuiIconButton",t)}const Mn=Ue("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Rn=["edge","children","className","color","disabled","disableFocusRipple","size"],In=t=>{const{classes:a,disabled:n,color:i,edge:s,size:r}=t,w={root:["root",n&&"disabled",i!=="default"&&`color${je(i)}`,s&&`edge${je(s)}`,`size${je(r)}`]};return at(w,En,a)},Dn=ke(kn,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,n.color!=="default"&&a[`color${je(n.color)}`],n.edge&&a[`edge${je(n.edge)}`],a[`size${je(n.size)}`]]}})(({theme:t,ownerState:a})=>Q({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Ot(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:t,ownerState:a})=>{var n;const i=(n=(t.vars||t).palette)==null?void 0:n[a.color];return Q({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&Q({color:i==null?void 0:i.main},!a.disableRipple&&{"&:hover":Q({},i&&{backgroundColor:t.vars?`rgba(${i.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Ot(i.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Mn.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Ln=l.forwardRef(function(t,a){const n=Oe({props:t,name:"MuiIconButton"}),{edge:i=!1,children:s,className:r,color:w="default",disabled:x=!1,disableFocusRipple:c=!1,size:p="medium"}=n,g=_e(n,Rn),u=Q({},n,{edge:i,color:w,disabled:x,disableFocusRipple:c,size:p}),h=In(u);return e.jsx(Dn,Q({className:ie(h.root,r),centerRipple:!0,focusRipple:!c,disabled:x,ref:a},g,{ownerState:u,children:s}))});function Nn(t){return it("MuiSkeleton",t)}Ue("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const zn=["animation","className","component","height","style","variant","width"];let Ne=t=>t,wt,yt,bt,Ct;const $n=t=>{const{classes:a,variant:n,animation:i,hasChildren:s,width:r,height:w}=t;return at({root:["root",n,i,s&&"withChildren",s&&!r&&"fitContent",s&&!w&&"heightAuto"]},Nn,a)},Bn=Se(wt||(wt=Ne`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Pn=Se(yt||(yt=Ne`
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
`)),Un=ke("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,a[n.variant],n.animation!==!1&&a[n.animation],n.hasChildren&&a.withChildren,n.hasChildren&&!n.width&&a.fitContent,n.hasChildren&&!n.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const n=pn(t.shape.borderRadius)||"px",i=xn(t.shape.borderRadius);return Q({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:dn(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&_t(bt||(bt=Ne`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Bn),({ownerState:t,theme:a})=>t.animation==="wave"&&_t(Ct||(Ct=Ne`
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
    `),Pn,(a.vars||a).palette.action.hover)),ze=l.forwardRef(function(t,a){const n=Oe({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:r="span",height:w,style:x,variant:c="text",width:p}=n,g=_e(n,zn),u=Q({},n,{animation:i,component:r,variant:c,hasChildren:!!g.children}),h=$n(u);return e.jsx(Un,Q({as:r,ref:a,className:ie(h.root,s),ownerState:u},g,{style:Q({width:p,height:w},x)}))}),jt=()=>(Z(),e.jsxs(V,{children:[e.jsxs(On,{children:[e.jsxs(_n,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),e.jsxs(Fn,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),e.jsx(V,{padding:"40px 0 40px 0",children:e.jsx(Xa,{type:qa.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),On=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,_n=o.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Fn=o.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Gn=()=>{var n,i;const t=Z(),{aliasDetails:{aliasChainId:a}}=U(s=>s.admin);return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ce,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(i=(n=ot[a])==null?void 0:n.label)==null?void 0:i.split(" ")[0]," Alias Network."]})," ",e.jsx(ce,{textAlign:"center",margin:"5px 0px 60px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[e.jsx(Ft,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(Qa,{margin:"auto 15px",textTransform:"none",color:t.color,size:"16px",weight:"600",children:"Processing"})]})]})},Vn=()=>{var i;de();const t=Z(),{switchChain:a}=me(),{aliasDetails:{aliasChainId:n}}=U(s=>s.admin);return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ce,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",e.jsx(Hn,{children:(i=ot[n])==null?void 0:i.label})," to start ",e.jsx("br",{}),"verifying your Channel Alias."]}),e.jsx(Za,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:e.jsx(ae,{variant:"primary",onClick:()=>a(n),size:"large",children:e.jsx(eo,{color:"white",children:"Change Network"})})})]})},Hn=o.b`
  color: #cf1c84;
`,Kn=({aliasEthAccount:t,setAliasVerified:a})=>{var _,f;const n=Z(),{account:i,provider:s,chainId:r}=me(),w=s.getSigner(i),x=Ee(),c=new to(ot[r].commAddress,no.epnsComm,w),[p,g]=l.useState(""),[u,h]=l.useState(!1),m=t,d={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"},84532:{label:"Base Sepolia",url:"https://www.alchemy.com/faucets/base-sepolia"},59141:{label:"Linea Sepolia",url:"https://www.infura.io/faucet/linea"}},T=async()=>{m==t&&$()},P=async()=>{const{aliasVerified:S}=await oo({account:i,chainId:r}).then(A=>A?(x(a(A.is_alias_verified)),{aliasVerified:A.is_alias_verified}):{aliasVerified:null});return{aliasVerified:S}},$=()=>{g("Processing"),c.verifyChannelAlias(m).then(async S=>{console.debug(S),g("Transaction Sent! It usually takes 5mins to verify."),await S.wait(1),setTimeout(()=>{g("Transaction Mined!")},2e3),setTimeout(()=>{g("Loading...")},2e3);const A=setInterval(async()=>{const{aliasVerified:L}=await P();L&&(setTimeout(()=>{h(!0)},1e3),clearInterval(A),x(Me(0)))},5e3)}).catch(()=>{g("There was an error"),setTimeout(()=>{g("")},2e3)})};return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsx(ve,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),p===""&&e.jsx(ce,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:i}),p===""&&se.appEnv!=="prod"&&e.jsxs(ve,{padding:"10px",margin:"10px",borderRadius:O.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",e.jsx(io,{href:(_=d[r])==null?void 0:_.url,target:"_blank",children:(f=d[r])==null?void 0:f.label})," ","to proceed."]}),!u&&(p?e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Ft,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ce,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:p})]}):e.jsx(ee,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:e.jsx(ae,{variant:"primary",size:"medium",onClick:T,children:"Verify Alias Address"})})),u&&e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(ao,{color:"#30CC8B",size:30}),e.jsx(ce,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},Wn=({aliasEthAccount:t,setAliasVerified:a})=>{const{processingState:n}=U(i=>i.channelCreation);return e.jsxs(Ve,{children:[e.jsxs(Yn,{children:[e.jsxs(Je,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[e.jsx("div",{children:"Waiting for Setup"}),e.jsx(Ye,{type:n>=1?"active":"inactive"})]}),e.jsxs(Je,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[e.jsx("div",{children:"Change Network"}),e.jsx(Ye,{type:n>=2?"active":"inactive"})]}),e.jsxs(Je,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[e.jsx("div",{children:"Verify Alias Network"}),e.jsx(Ye,{type:n>=3?"active":"inactive"})]}),e.jsx(Jn,{})]}),n===1&&e.jsx(Gn,{}),n===2&&e.jsx(Vn,{}),n===3&&e.jsx(Kn,{aliasEthAccount:t,setAliasVerified:a})]})},Yn=o.div`
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

  ${({type:t})=>t==="active"&&Ge`
      background: #e20880;
    `};
`,Jn=o.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Je=o.div`
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

  ${({type:t})=>t==="active"&&Ge`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:t})=>t==="active"&&Ge`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:t})=>t==="inactive"&&Ge`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,vt=({heading:t,subHeading:a})=>{const n=Z();return e.jsx(He,{theme:n,children:e.jsxs(Xn,{children:[e.jsx(qn,{style:{color:n.default.color},children:t}),e.jsx(Qn,{style:{color:n.modalMessageColor},children:a})]})})},Xn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,qn=o.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,Qn=o.h4`
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
`,Xe=H.forwardRef(({title:t},a)=>{const n=Z();return e.jsx(He,{theme:n,children:e.jsxs(Zn,{children:[e.jsx(ei,{style:{color:n.modalMessageColor},children:t}),e.jsx(ti,{ref:a,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),Zn=o.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,ei=o.h4`
  font-family: FK Grotesk Neu;
  font-size: ${t=>t.fontSize||"0.95rem"};
  font-weight: ${t=>t.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${t=>t.marginBottom||"3%"};
`,ti=o(rt)`
  box-sizing: border-box;
  width: 100%;
`,ni=({onConfirm:t,onClose:a,toastObject:n})=>{const i=H.useRef();Z();const[s,r]=H.useState(!1),w=()=>!s&&a(),x=H.useRef(null);ue(x,()=>w());const c=()=>{var g;r(!0);const p=(g=i==null?void 0:i.current)==null?void 0:g.value;t(p).then(async u=>{console.debug(u),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:h=>e.jsx(fe,{size:h,color:"green"})}),a()}).catch(u=>{console.error({err:u}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:h=>e.jsx(Y,{size:h,color:"red"})})}).finally(()=>{r(!1)})};return e.jsxs(ii,{ref:x,children:[e.jsx(vt,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),e.jsx(Xe,{ref:i,title:"Delegate Address"}),e.jsx(Xt,{text:"Add Delegate",onClick:c,isLoading:s})]})},ii=o.div`
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
`,ai="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",oi=t=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ri=({onClose:t,onConfirm:a,toastObject:n})=>{const i=H.useRef(),s=H.useRef(),[r,w]=H.useState(!1);Z();const x=()=>!r&&t(),c=H.useRef(null);ue(c,()=>x());const p=()=>{var h,m;const g=(h=s==null?void 0:s.current)==null?void 0:h.value,u=(m=i==null?void 0:i.current)==null?void 0:m.value;if(w(!0),g==""||u==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:d=>e.jsx(Y,{size:d,color:"red"})}),setTimeout(()=>{w(!1)},500);return}else if(parseInt(g)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:d=>e.jsx(Y,{size:d,color:"red"})}),setTimeout(()=>{w(!1)},500);return}a(g,u).then(async d=>{console.debug(d),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:T=>e.jsx(fe,{size:T,color:"green"})}),t()}).catch(d=>{console.error(d),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:T=>e.jsx(Y,{size:T,color:"red"})})}).finally(()=>{w(!1)})};return e.jsxs(si,{ref:c,children:[e.jsx(vt,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),e.jsx(Xe,{ref:i,title:"Subgraph ID"}),e.jsx(Xe,{ref:s,title:"Poll Time (in seconds)"}),e.jsx(Xt,{text:"Add Subgraph",onClick:p,isLoading:r})]})},si=o.div`
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
`,li=t=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ci=t=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),di=({onConfirm:t,onClose:a,toastObject:n})=>{const i=Z(),s=Ee(),{channelDetails:r}=U(h=>h.admin),{CHANNNEL_DEACTIVATED_STATE:w}=U(h=>h.channels),[x,c]=H.useState(!1),p=()=>!x&&a(),g=H.useRef(null);ue(g,()=>p());const u=()=>{c(!0),t().then(async h=>{console.debug(h),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:m=>e.jsx(Y,{size:m,color:"red"})}),await h.wait(1),console.info("Transaction Mined!"),s(lt({...r,channelState:w})),c(!1),a()}).catch(h=>{console.error("!!!Error deactivateChannel() --> %o",h),console.error({err:h}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:m=>e.jsx(Y,{size:m,color:"red"})}),c(!1)})};return e.jsx(He,{theme:i,children:e.jsx(pi,{ref:g,children:x?e.jsxs(xi,{children:[e.jsx(Gt,{size:42,color:O.COLORS.PRIMARY_PINK,type:st.PROCESSING}),e.jsx(hi,{children:"Verifying"})]}):e.jsxs(e.Fragment,{children:[e.jsx(gi,{style:{color:i.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),e.jsxs(mi,{children:[e.jsx(li,{width:36,height:36,onClick:p}),e.jsx(ui,{onClick:u,children:e.jsx(ci,{})})]})]})})})},pi=o.div`
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
`,xi=o(J)`
  flex-direction: row;
  //   margin-top:33px;
`,hi=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,gi=o.div`
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
`;const mi=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,ui=o.div`
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
`;const fi="DD MMM, YYYY",wi=({onConfirm:t,onClose:a,toastObject:n})=>{const i=Z(),{chainId:s,account:r,provider:w}=me(),x=Ee(),{channelDetails:c,canVerify:p,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:u}}=U(C=>C.admin),{CHANNEL_ACTIVE_STATE:h,CHANNNEL_DEACTIVATED_STATE:m}=U(C=>C.channels),[d,T]=l.useState("");let{channelState:P}=c;P||(P=c.activation_status);const $=P===h,_=P===m,[f,S]=l.useState(!1),[A,L]=l.useState(!1),[G,W]=l.useState(0),R=()=>!f&&a(),B=l.useRef(null);ue(B,()=>R());const N=se.coreContractChain===s;Re(600),l.useEffect(()=>{!c||!N||async function(){const C=c.channelStartBlock.toString(),k=await new Vt(se.coreRPC).getBlock(+C),j=Ht(k.timestamp*1e3);T(j.format(fi))}()},[c]),l.useEffect(()=>{!r||!w||async function(){const C=await en({address:r,provider:w,contractAddress:Ke.epnscore});W(parseInt(C));const k=parseInt(C);k>=50&&k!=0?L(!0):L(!1)}()},[r,w]);const y=async C=>{await tn({noOfTokens:C,provider:w,account:r})},E=async()=>{if(S(!0),!w)return;const C=w.getSigner(r);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const k=await nn({signer:C,contractAddress:Ke.epnscore,amount:50-G});console.debug("response",k),k&&(W(50),L(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:j=>e.jsx(fe,{size:j,color:"green"})}),S(!1))}catch(k){console.error(k),k.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:j=>e.jsx(Y,{size:j,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:j=>e.jsx(Y,{size:j,color:"red"})}),console.error("Error --> %o",k),console.error({err:k}))}S(!1)},M=async()=>{S(!0);try{const C=Kt("50",18),k=await t(C);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:j=>e.jsx(fe,{size:j,color:"green"})}),await k.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:j=>e.jsx(fe,{size:j,color:"green"})}),x(lt({...c,channelState:h})),a(),S(!1)}catch(C){console.error("Error reactivateChannel",{err:C}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:k=>e.jsx(Y,{size:k,color:"red"})}),S(!1)}};return e.jsx(He,{theme:i,children:e.jsxs(yi,{ref:B,children:[e.jsxs(bi,{children:[e.jsx(Ci,{children:"Reactivate Channel"}),e.jsx(Ln,{onClick:R,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(lo,{size:"1.5rem",style:{color:i.modalIconColor}})})]}),e.jsxs(vi,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Ti,{src:c.icon}),e.jsxs(At,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(Ii,{children:[c.name,p&&e.jsx(Ai,{src:"/verify.png"})]}),e.jsxs(At,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[N&&u&&!g||!N&&!g?e.jsx(Ei,{children:"Alias Network Setup Pending"}):e.jsxs(ji,{justifyContent:"flex-start",children:[e.jsxs(Si,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(Mi,{children:c.subscriber_count})]}),e.jsx(ki,{active:$,children:$?"Active":_?"Deactivated":"Blocked"})]}),d&&e.jsxs(Ri,{children:["Created ",d]})]})]})]}),e.jsxs(Di,{children:[e.jsx(Li,{children:"Channel reactivation fee"}),e.jsxs(V,{flex:"0",children:[A?e.jsx(Ni,{src:No}):null,e.jsxs(zi,{children:[50," PUSH"]})]})]}),e.jsx(qt,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:y}),f?e.jsxs(Bi,{children:[e.jsx(Gt,{size:42,color:O.COLORS.PRIMARY_PINK,type:st.PROCESSING}),e.jsx(Pi,{children:"Verifying Transaction"})]}):e.jsx($i,{children:G>=50?e.jsx(kt,{onClick:M,children:"Reactivate"}):e.jsx(kt,{onClick:E,children:"Approve PUSH"})})]})})},yi=o.div`
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
`,bi=o(V)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${D.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${D.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Ci=o(ro)`
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
`,At=o(J)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,ji=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,vi=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Ti=o.img`
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
`,Ai=o.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Si=o.div`
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
`,ki=o(St)`
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
`,Ei=o(St)`
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
`,Mi=o.span`
  font-weight: 400;
  font-size: 14px;
`,Ri=o.div`
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
`,Ii=o.div`
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
`,Di=o(V)`
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
`,Li=o.p`
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
`,Ni=o.img``,zi=o.p`
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
`,$i=o(V)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,kt=o(so)`
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
`,Bi=o(J)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,Pi=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Ui=50,Oi=se.coreContractChain;function _i({DropdownRef:t,isDropdownOpen:a,closeDropdown:n}){Ee();const{account:i,chainId:s}=me(),{epnsWriteProvider:r,epnsCommWriteProvider:w}=U(K=>K.contracts),{channelDetails:x}=U(K=>K.admin),{CHANNNEL_DEACTIVATED_STATE:c,CHANNEL_BLOCKED_STATE:p}=U(K=>K.channels);U(K=>K.user);const g=Z(),{channelState:u}=x,h=Oi===s,m=Re(425),{isModalOpen:d,showModal:T,ModalComponent:P}=Ie(),{isModalOpen:$,showModal:_,ModalComponent:f}=Ie(),{isModalOpen:S,showModal:A,ModalComponent:L}=Ie(),G=a&&!d&&!$&&!S;ue(t,()=>G&&n()),H.useState(!1),H.useState(Ui);const[W,R]=H.useState(0),B=u===c,N=u===p,y=N||B;H.useEffect(()=>{R(+Po.formatBigNumberToMetric(x.poolContribution,!0))},[i,x.poolContribution]),de();const E=()=>{N||(B?_():T())},M=de(),C=r.reactivateChannel,k=de(),j=()=>r.deactivateChannel(),pe=de(),re=async(K,xe)=>{if(!(K==""||xe=="")&&!(K<60))try{const oe=K+"+"+xe,F=Wt(oe);return r.addSubGraph(F)}catch(oe){console.error(oe)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Fi,{background:g,children:e.jsxs(Gi,{children:[se.appEnv!=="prod"&&e.jsx(Et,{disabled:y,onClick:()=>!y&&A(),children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx($e,{src:ai,alt:"cube"}),e.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),h&&e.jsx(Et,{isChannelDeactivated:B,onClick:E,children:e.jsx(Vi,{isChannelBlocked:N,isChannelDeactivated:B,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[N?e.jsx($e,{src:Tt,alt:"red-bell"}):B?e.jsx($e,{src:oi,alt:"green-bell"}):e.jsx($e,{src:Tt,alt:"red-bell"}),e.jsx("div",{style:{width:"10px"}}),N?"Channel Blocked":B?"Activate Channel":"Deactivate Channel"]})})})]})})}),e.jsx(P,{InnerComponent:di,onConfirm:j,toastObject:k,modalPosition:De.ON_ROOT}),e.jsx(f,{InnerComponent:wi,onConfirm:C,toastObject:M,modalMargin:m?"10rem 1rem 0 1rem":"",modalPosition:De.ON_ROOT}),e.jsx(L,{InnerComponent:ri,onConfirm:re,toastObject:pe,modalPosition:De.ON_ROOT})]})}const Fi=o.div`
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
`,Gi=o.div`
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
`,Vi=o.div`
  color: ${t=>t.isChannelBlocked?"red":t.isChannelDeactivated?"#30CC8B":"red "};
`,$e=o.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function Mt(){const t=H.useRef(null),[a,n]=H.useState(!1);Z();const i=()=>{n(r=>!r)},s=()=>{n(!1)};return e.jsxs(V,{flex:"0",ref:t,children:[e.jsx(Hi,{active:a,onClick:i}),a&&e.jsx(_i,{DropdownRef:t,isDropdownOpen:a,closeDropdown:s})]})}o.div`
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
`;const Hi=o(co)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${t=>t.active?"rotateZ(90deg)":"none"};
`,Ki="DD MMM, YYYY";function Wi({isChannelExpired:t,setIsChannelExpired:a,showEditChannel:n,destroyChannel:i}){var ge,X,Ce;const{account:s,chainId:r,wallet:w}=me(),{delegatees:x,channelDetails:c,canVerify:p,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:u}}=U(I=>I.admin),{channelSettings:h}=U(I=>I.channels),{userPushSDKInstance:m}=U(I=>I.user),{handleConnectWalletAndEnableProfile:d}=l.useContext(Jt),{CHANNEL_ACTIVE_STATE:T,CHANNNEL_DEACTIVATED_STATE:P}=U(I=>I.channels),{processingState:$}=U(I=>I.channelCreation),[_,f]=l.useState([]),[S,A]=l.useState("");let{channelState:L}=c;L||(L=c.activation_status);const G=L===T,W=L===P,R=se.coreContractChain===r,B=Re(600),[N,y]=l.useState([s]),[E,M]=l.useState(void 0);U(I=>I.contracts);const C=po(),{isModalOpen:k,showModal:j,ModalComponent:pe}=Ie(),re=de(),K=async()=>{m.signer||await d({wallet:w}),j()},xe=async I=>m.channel.delegate.add(dt(I,r)),oe=c.expiryTime?xo(((ge=c.expiryTime)==null?void 0:ge.toString())*1e3):"",F=c.expiryTime?ho(((X=c.expiryTime)==null?void 0:X.toString())*1e3):!0,le=c.expiryTime?go(((Ce=c.expiryTime)==null?void 0:Ce.toString())*1e3,14):"";l.useEffect(()=>{c.channelType==ct.TIMEBOUND&&(F||a(!0))},[F]),l.useEffect(()=>{},[c,p]),l.useEffect(()=>{!c||!R||async function(){const I=c.channelStartBlock.toString(),te=await new Vt(se.coreRPC).getBlock(+I),v=Ht(te.timestamp*1e3);A(v.format(Ki))}()},[c]),l.useEffect(()=>{s&&(!x||!x.length?M(s):M(R?x[0].channel:x[0].alias_address))},[x,s]),l.useEffect(()=>{s&&(async()=>{try{const I=dt(s,r),te=await m.channel.delegate.get({channel:I});if(te){const v=te.map(z=>z);v.unshift(s),y(v)}}catch(I){console.error(I)}})()},[s,r]);const he=async I=>{let te=m;if(!(!te.signer&&(te=await d({wallet:w}),!te)))return te.channel.delegate.remove(dt(I,r))},be=()=>{C(uo.ChannelSettings)};return e.jsxs(J,{children:[e.jsxs(Ji,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Xi,{src:c.icon}),e.jsxs(qe,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(ra,{children:[c.name,p&&e.jsx(qi,{src:"/verify.png"})]}),e.jsxs(qe,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[R&&u&&!g||!R&&!g?e.jsx(na,{children:"Alias Network Setup Pending"}):e.jsxs(Yi,{justifyContent:"flex-start",children:[e.jsxs(ea,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(ia,{children:c.subscriber_count})]}),e.jsxs(ta,{active:G,children:[W&&e.jsx(pt,{width:"12px",src:Io,margin:"0 5px 2px 0px",height:"30px"}),G?"Active":W?"Deactivated":"Blocked"]}),c.channelType==ct.TIMEBOUND&&!t&&e.jsxs(V,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(pt,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(ve,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",oe]})]}),c.channelType==ct.TIMEBOUND&&t&&e.jsxs(V,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(pt,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(ve,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",oe]})]})]}),S&&e.jsxs(aa,{children:["Created ",S]})]})]})]}),B&&e.jsxs(V,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!t&&R&&e.jsx(ae,{onClick:n,size:"small",variant:"outline",children:"Edit Channel"}),!t&&e.jsx(Mt,{}),t&&R&&e.jsx(ae,{onClick:i,size:"small",variant:"danger",children:"Delete Channel"})]}),t&&e.jsx(J,{alignItems:"flex-start",children:e.jsxs(It,{margin:"25px 0 0 0",children:[e.jsx(ve,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",e.jsx(ve,{fontWeight:"600",children:le})]})}),e.jsx(J,{alignItems:"flex-start",children:e.jsx(It,{children:c.info})}),p&&e.jsx(qe,{alignItems:"flex-start",padding:"5px 0px",children:e.jsx(sa,{children:e.jsxs(oa,{children:[e.jsx("span",{children:"verified by:"}),e.jsx(Qi,{src:_.icon}),e.jsx(Zi,{children:_.name})]})})}),$===0&&e.jsxs(J,{children:[e.jsx(Ve,{children:e.jsxs(Dt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Qt,{title:"Notification Settings",description:"Customize notification preferences for users",Button:e.jsx(_o,{onClick:be})}),e.jsx(Zt,{account:s,isAddress:!1,items:h[s],isLoading:!1,onClickEmptyListButton:be,emptyListButtonTitle:"Add Setting"})]})}),e.jsx(Ve,{children:e.jsxs(Dt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Qt,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:e.jsx(Fo,{onClick:K})}),e.jsx(Zt,{account:s,isAddress:!0,items:N,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:he,icon:e.jsx(mo,{})}]})]})})]}),e.jsx(pe,{InnerComponent:ni,onConfirm:xe,toastObject:re,modalPosition:De.ON_ROOT})]})}const qe=o(J)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Yi=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Ji=o(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Xi=o.img`
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
`,qi=o.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Qi=o.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,Zi=o.div``,ea=o.div`
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
`,na=o(Rt)`
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
`,ia=o.span`
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
`,Dt=o(Yt)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
`,la=({channelName:t,setChannelName:a,channelInfo:n,setChannelInfo:i,channelURL:s,setChannelURL:r,editChannel:w,errorInfo:x,setErrorInfo:c})=>{const p=Z(),g=({message:h})=>e.jsxs(ee,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[e.jsx(yo,{color:"red",size:"20"}),e.jsx(ce,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:h})]}),u=h=>{const m=h.target.value;an(m)?(c(""),r(m)):(c(d=>({...d,url:"Channel URL is invalid! Please enter a valid url!"})),r(m))};return e.jsx(ca,{children:e.jsx(da,{onSubmit:w,children:e.jsxs(pa,{children:[e.jsxs(ee,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:p.editChannelPrimaryText},children:"Channel Name"}),e.jsx(ee,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:e.jsx(rt,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:p.editChannelInputbg,color:p.editChannelPrimaryText,border:p.textAreaBorderColor,focusBorder:p.textAreaFocusBorder,radius:"12px",height:"25px",value:t,onChange:h=>{a(h.target.value)}})})]}),(x==null?void 0:x.name)&&e.jsx(g,{message:x==null?void 0:x.name}),e.jsxs(ee,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(ee,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(Qe,{style:{color:p.editChannelPrimaryText},children:"Channel Description"}),e.jsx(ce,{color:p.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-n.length})]}),e.jsx(wo,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:p.textAreaBorderColor,focusBorder:p.textAreaFocusBorder,radius:"12px",bg:p.editChannelInputbg,color:p.editChannelPrimaryText,value:n,onChange:h=>{i(h.target.value.slice(0,250))},autocomplete:"off"})]}),(x==null?void 0:x.description)&&e.jsx(g,{message:x==null?void 0:x.description}),e.jsxs(ee,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:p.editChannelPrimaryText},children:"Channel Website URL"}),e.jsx(rt,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:p.editChannelInputbg,color:p.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:p.textAreaBorderColor,focusBorder:p.textAreaFocusBorder,radius:"12px",value:s,onChange:h=>{u(h)}})]}),(x==null?void 0:x.url)&&e.jsx(g,{message:x==null?void 0:x.url})]})})})},ca=o(Ve)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,da=o(fo)`
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
`,xa="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",ha=({onClose:t,InnerComponentProps:a})=>{const{setChannelLogo:n,croppedImage:i,setCroppedImage:s,imageSrc:r,setImageSrc:w,imageType:x,setImageType:c}=a,p=l.useRef(),g=l.useRef(null);ue(g,()=>{t()});const u=d=>{d.preventDefault()},h=d=>{d.preventDefault(),d.stopPropagation(),m(d.dataTransfer,"transfer",d)},m=async(d,T,P)=>{if(P.preventDefault(),s(void 0),d==null?void 0:d.files[0]){var $=new FileReader;$.readAsDataURL(d==null?void 0:d.files[0]),$.onloadend=function(_){var f;w($.result),c((f=d==null?void 0:d.files[0])==null?void 0:f.type)}}};return e.jsxs(ga,{ref:g,children:[e.jsx(fa,{children:e.jsx(wa,{onClick:t})}),e.jsxs(ma,{children:[e.jsx(ua,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),e.jsx(Ca,{className:"",children:e.jsx("div",{onDragOver:d=>u(d),onDrop:d=>h(d),className:"bordered",children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"crop-div",children:i?e.jsx("div",{className:"crop-innderdiv",children:e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:i,className:"croppedImage"})})}):e.jsx("div",{className:"crop-innderdiv",children:e.jsx(Ho,{className:"cropper",imageSrc:r,imageType:x,onImageCropped:d=>s(d),width:"128px",height:"128px",ref:p})})}),e.jsxs(ya,{children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:d=>m(d.target,"target",d),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),e.jsx(ba,{children:i?e.jsx(e.Fragment,{children:e.jsx(ae,{variant:"primary",size:"medium",onClick:()=>{n(i),t()},children:"Upload Image"})}):e.jsx(e.Fragment,{children:e.jsx(ae,{variant:"primary",size:"medium",onClick:()=>{p.current.showCroppedImage()},children:"Crop Image"})})})]})]})},ga=o.div``,ma=o.div`
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
`,wa=o(bo)`
  cursor: pointer;
  font-size: 20px;
  color: ${t=>t.theme.modalTextColor};
`,ya=o(Yt)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,ba=o(J)``,Ca=o.div`
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
`,ye=t=>t.trim().length==0;function ja(t,a){var n=new XMLHttpRequest;n.onload=function(){var i=new FileReader;i.onloadend=function(){a(i.result)},i.readAsDataURL(n.response)},n.open("GET",t),n.responseType="blob",n.send()}const va=t=>{var a=Jo,n=t.split(";base64,").pop(),i=Co.from(n,"base64"),s=a(i);return s.width>128||s.height>128?(console.error("Image size check failed... returning"),{success:0,info:"Image size check failed, Image should be 128X128PX"}):(console.debug("Image verification",n.charAt(0)),n.charAt(0)==="/"?{success:1,info:"Image checks passed"}:n.charAt(0)==="i"?{success:1,info:"Image checks passed"}:{success:0,info:"Image extension should be jpg or png"})};function Ta({closeEditChannel:t,UploadLogoComponent:a,displayUplaodLogoModal:n}){const{account:i,provider:s}=me(),{channelDetails:r,aliasDetails:{isAliasVerified:w,aliasAddrFromContract:x}}=U(v=>v.admin),{epnsReadProvider:c,epnsWriteProvider:p}=U(v=>v.contracts),g=50,[u,h]=l.useState(r==null?void 0:r.name),[m,d]=l.useState(r==null?void 0:r.info),[T,P]=l.useState(r==null?void 0:r.url),[$,_]=l.useState(r==null?void 0:r.icon),[f,S]=l.useState(r==null?void 0:r.icon),[A,L]=l.useState(r==null?void 0:r.icon),[G,W]=l.useState(A),[R,B]=l.useState(null),[N,y]=l.useState(!1),[E,M]=l.useState({name:"",description:"",address:"",url:""}),[C,k]=l.useState(!1),[j,pe]=l.useState(0),[re,K]=l.useState(0),[xe,oe]=l.useState(!1),F=de();l.useEffect(()=>{i&&async function(){const v=await c.channelUpdateCounter(i);pe(g*(Number(v)+1))}()},[i]),l.useEffect(()=>{!i||!s||async function(){const v=await en({address:i,provider:s,contractAddress:Ke.epnscore});K(parseInt(v));const z=parseInt(v);z>=j&&z!=0?y(!0):y(!1)}()},[i,s]);const le=async()=>{if(k(!0),!s)return;const v=s.getSigner(i);F.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const z=await nn({signer:v,contractAddress:Ke.epnscore,amount:j-re});console.debug("response",z),z&&(k(!1),K(j),y(!0),F.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:q=>e.jsx(fe,{size:q,color:"green"})}))}catch(z){console.error(z),z.code=="ACTION_REJECTED"?F.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}):(F.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}),console.error("Error --> %o",z),console.error({err:z}))}k(!1)},he=()=>{oe(!1)},be=Re(600),ge=l.useRef(null);ue(ge,()=>{he()});const X=()=>(M(""),ye(u)||ye(m)||ye(T)?(ye(u)&&M(v=>({...v,name:"Please, enter the channel name."})),ye(m)&&M(v=>({...v,description:"Please, enter the channel description"})),ye(T)&&M(v=>({...v,url:"Please, enter the channel url"})),!1):on(u,125)?on(T,125)?an(T)?!0:(M(v=>({...v,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(M(v=>({...v,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(M(v=>({...v,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Ce=()=>!(u!==(r==null?void 0:r.name)||m!==(r==null?void 0:r.info)||T!==(r==null?void 0:r.url)||f!==(r==null?void 0:r.icon)),I=async v=>{try{if(!X())return;k(!0);const z=JSON.stringify({name:u,info:m,url:T,icon:f,aliasDetails:r.aliasDetails||jo({chainId:parseInt(r.chain_id),address:r.address})});console.debug(z);const q=await Wo(z);console.debug("IPFS storagePointer:",q);const Ze="1+"+q,et=Wt(Ze),tt=Kt(j.toString(),18);F.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Be=await p.updateChannelMeta(i,et,tt,{gasLimit:1e6});console.debug(Be),await Be.wait(),k(!1),F.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:Te=>e.jsx(fe,{size:Te,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(z){k(!1),console.error(z.message),z.code=="ACTION_REJECTED"?F.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}):(F.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}),console.error("Error --> %o",z),console.error({err:z}))}},te=async v=>{await tn({noOfTokens:v,provider:s,account:i})};return l.useEffect(()=>{A&&(console.debug("Image cropped",A),ja(A,function(v){const z=va(v);console.debug("response",z),z.success&&(console.debug("Cropped Image....",A),S(A))}))},[A]),e.jsxs(Aa,{ref:ge,children:[e.jsx(a,{InnerComponent:ha,InnerComponentProps:{setChannelLogo:_,channelLogo:$,croppedImage:A,setCroppedImage:L,setChannelFile:S,imageSrc:G,setImageSrc:W,imageType:R,setImageType:B,errorInfo:E,setErrorInfo:M},modalPosition:De.ON_PARENT}),e.jsxs(Sa,{children:[e.jsxs(Ea,{children:[e.jsx(Ma,{src:$}),e.jsx(ae,{variant:"secondary",onClick:()=>{n(),oe(!0)},children:"Upload Logo"})]}),!be&&e.jsx(Ra,{}),e.jsx(la,{channelName:u,setChannelName:h,channelInfo:m,setChannelInfo:d,channelURL:T,setChannelURL:P,editChannel:I,errorInfo:E,setErrorInfo:M})]}),e.jsxs(Ia,{children:[e.jsxs("div",{children:[e.jsx(Da,{children:"Channel edit fee"}),e.jsx(La,{children:"Editing channel details requires fees to be deposited"})]}),e.jsxs(V,{flex:"0",children:[N?e.jsx(ka,{src:xa}):null,e.jsxs(Na,{children:[j," PUSH"]})]})]}),e.jsx(qt,{noOfPushTokensToCheck:j,containerProps:{width:"100%"},onMintPushToken:te}),C?e.jsx(e.Fragment,{children:e.jsxs(za,{children:[e.jsx(Spinner,{size:42,color:O.COLORS.PRIMARY_PINK,type:st.PROCESSING}),e.jsx($a,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Ba,{children:[e.jsx(ae,{onClick:t,variant:"outline",size:"large",children:"Cancel"}),re>=j?e.jsx(ae,{disabled:Ce(),onClick:I,size:"large",children:"Save Changes"}):e.jsx(ae,{onClick:le,size:"large",children:"Approve PUSH"})]})})]})}const Aa=o(J)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,Sa=o(J)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,ka=o.img``,Ea=o(V)`
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
`,Ma=o.img`
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
`,Ia=o(J)`
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
`,za=o(J)`
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
`,Pa=10;let Lt=null;const Ua=()=>{Z();const{account:t,chainId:a,wallet:n}=me(),{channelDetails:i,delegatees:s,aliasDetails:{aliasAddr:r,aliasEthAddr:w,isAliasVerified:x,aliasAddrFromContract:c}}=U(y=>y.admin),{processingState:p}=U(y=>y.channelCreation),{epnsWriteProvider:g}=U(y=>y.contracts),{userPushSDKInstance:u}=U(y=>y.user);l.useContext(Jt);const h=i&&i!=="unfetched",m=de(),d=Ee(),[T,P]=l.useState(!1);l.useState(!0);const[$,_]=l.useState(!1),f=se.coreContractChain===a,S=Re(600);l.useEffect(()=>{if(!f||!i||c||i==="unfetched")return;const y=vo(i);if(y){const{address:E,chainId:M}=y;d(To(E)),d(Ao(M))}else d(Me(0))},[i,c]);const A=async y=>{let{alias_address:E=null,is_alias_verified:M=null}=await ko({userPushSDKInstance:u,address:y}).then(C=>C);return E=="NULL"&&(E=null),{aliasAddress:E,aliasVerified:M}};l.useEffect(()=>{!f||!c||p===0||(Lt=setInterval(async()=>{const{aliasAddress:y,aliasVerified:E}=await A(t);y?(d(So(y)),E?(d(xt(!0)),d(Me(0))):(d(Me(2)),d(xt(!1)))):p!=0&&p!=1&&d(Me(1))},Pa*1e3))},[c]),r!==null&&clearInterval(Lt);const L=async()=>{try{m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const y=await g.destroyTimeBoundChannel(t,{gasLimit:1e6});console.debug(y),console.debug("Check: "+t),await y.wait(),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Y,{size:E,color:"green"})}),d(lt(null))}catch(y){console.error(y),y.code=="ACTION_REJECTED"?m.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:E=>e.jsx(Y,{size:E,color:"red"})}):m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:E=>e.jsx(Y,{size:E,color:"red"})})}},G=()=>{_(!0)},W=()=>{_(!1)},{isModalOpen:R,showModal:B,ModalComponent:N}=Ie();return e.jsxs(V,{children:[(i==="unfetched"||p===null)&&e.jsx(jt,{}),i!=="unfetched"&&e.jsxs(J,{justifyContent:p===0&&"flex-start",height:"fit-content",children:[!i&&p===0&&e.jsx(Xo,{}),h&&p!==null&&e.jsx(Oa,{children:$?e.jsx(Ta,{closeEditChannel:W,UploadLogoComponent:N,displayUplaodLogoModal:B,isUploadLogoModalOpen:R}):e.jsxs(e.Fragment,{children:[i&&!S&&e.jsxs(V,{zIndex:"1",gap:"8px",children:[!T&&f&&e.jsx(ae,{onClick:G,size:"small",variant:"outline",children:"Edit Channel"}),!T&&e.jsx(Mt,{}),T&&f&&e.jsx(ae,{onClick:L,size:"small",variant:"danger",children:"Delete Channel"})]}),i?e.jsx(Wi,{isChannelExpired:T,setIsChannelExpired:P,showEditChannel:G,destroyChannel:L}):""]})}),p!==0&&p!==null&&h&&!$&&e.jsx(e.Fragment,{children:e.jsx(Wn,{aliasEthAccount:w,setAliasVerified:xt})})]})]})},Oa=o(J)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${O.ADJUSTMENTS.RADIUS.LARGE} ${O.ADJUSTMENTS.RADIUS.LARGE}
    ${O.ADJUSTMENTS.RADIUS.LARGE} ${O.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${we.MINI_MODULES.DESKTOP.RIGHT} - ${we.MINI_MODULES.DESKTOP.LEFT} -
      ${O.ADJUSTMENTS.PADDING.HUGE} - ${O.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${O.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${O.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${D.laptop} {
    margin: ${O.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${O.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${we.MINI_MODULES.TABLET.RIGHT} - ${we.MINI_MODULES.TABLET.LEFT} -
        ${O.ADJUSTMENTS.PADDING.BIG} - ${O.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${D.mobileL} {
    margin: ${O.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${O.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${we.MINI_MODULES.MOBILE.RIGHT} - ${we.MINI_MODULES.MOBILE.LEFT} -
        ${O.ADJUSTMENTS.PADDING.DEFAULT} - ${O.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${O.CONSTANTS.HEADER_HEIGHT}px - ${we.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${O.ADJUSTMENTS.RADIUS.LARGE} ${O.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;se.coreContractChain;function _a(){Eo.pageview("/channel_dashboard");const[t,a]=H.useState(!0),[n,i]=H.useState(null),s=()=>i(null);return H.useEffect(()=>{n&&s()},[n]),e.jsxs(e.Fragment,{children:[t?e.jsx(Ua,{}):e.jsx(jt,{}),n&&e.jsx(Do,{notification:n,clearToast:s})]})}o.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Nt;rn=()=>e.jsx(Nt,{children:e.jsx(_a,{})}),Nt=o(Mo)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{ar as __tla,rn as default};
