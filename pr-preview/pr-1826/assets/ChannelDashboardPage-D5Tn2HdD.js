import{fG as Pt,fH as Ya,a_ as l,fI as ie,b1 as e,fJ as Oe,fK as Se,fL as Me,fM as Ue,d3 as _e,fN as Ja,d2 as Q,fO as it,fP as Ot,fQ as Xa,fR as Fe,fS as at,fT as je,fU as Ut,fV as _t,b6 as o,b9 as Z,cz as G,b3 as qa,b4 as Qa,b$ as O,bd as ee,bP as ce,dk as ot,bs as Ft,f6 as Za,cC as de,aY as me,b2 as eo,bY as ae,bq as to,b_ as Ee,bj as no,bl as io,bT as ve,bi as se,bM as U,bW as ao,fW as oo,fX as ke,fY as ro,bp as Ge,bb as Ve,ba as We,bg as V,ch as rt,bO as D,cl as ue,cI as fe,cJ as Y,bR as J,cr as Gt,cs as st,fZ as lt,dO as so,f_ as lo,dG as Re,dj as Vt,f$ as Wt,bk as He,dt as co,bn as Ht,cn as Ie,eV as po,co as De,g0 as Kt,g1 as ho,du as Yt,cB as Jt,aZ as xo,g2 as go,g3 as mo,g4 as uo,g5 as ct,eq as Xt,cG as dt,c2 as pt,g6 as fo,b0 as bo,ce as Co,ci as yo,g7 as wo,g8 as jo,cY as vo,g9 as To,ga as Ao,bN as be,gb as So,gc as Mo,gd as Eo,ge as ko,gf as ht,bQ as Ro,b7 as Io,__tla as Do}from"./index-C8zcvIb_.js";import{S as No,N as Lo,__tla as zo}from"./RedCircle-CjlBJGk7.js";import{M as qt,S as $o,F as Qt,C as Zt,a as en,__tla as Bo}from"./ChannelInfoList-Brkmvtqk.js";import{a as Po,__tla as Oo}from"./Tag-CYfVKL9Q.js";import{a as tn,m as nn,b as an,__tla as Uo}from"./PushTokenContractHelper-ITveOoUx.js";import{M as _o,a as Fo,__tla as Go}from"./EmptyNotificationSettings-KH0bg2vA.js";import{a as on,b as rn,__tla as Vo}from"./ValidationHelper-CVNGmPQw.js";import{I as Wo,__tla as Ho}from"./ImportPushTokenMessage-DQBTG7wY.js";import{v as Ko,C as Yo,__tla as Jo}from"./CreateChannel-Bx-MvHwv.js";import{__tla as Xo}from"./TransitionGroupContext-B7lLSsJn.js";import{__tla as qo}from"./index.esm-t7f9Z3_C.js";import{__tla as Qo}from"./Stepper-BJqyBVrV.js";import{__tla as Zo}from"./StakingVariant-DTRg4AsT.js";import{__tla as er}from"./useMutation-DTNvpBJ1.js";import{__tla as tr}from"./formik.esm-DHT6dKlJ.js";import{__tla as nr}from"./index.esm-CO--rvf3.js";import"./Common.form-LPxQflxb.js";let sn,ir=Promise.all([(()=>{try{return Do}catch{}})(),(()=>{try{return zo}catch{}})(),(()=>{try{return Bo}catch{}})(),(()=>{try{return Oo}catch{}})(),(()=>{try{return Uo}catch{}})(),(()=>{try{return Go}catch{}})(),(()=>{try{return Vo}catch{}})(),(()=>{try{return Ho}catch{}})(),(()=>{try{return Jo}catch{}})(),(()=>{try{return Xo}catch{}})(),(()=>{try{return qo}catch{}})(),(()=>{try{return Qo}catch{}})(),(()=>{try{return Zo}catch{}})(),(()=>{try{return er}catch{}})(),(()=>{try{return tr}catch{}})(),(()=>{try{return nr}catch{}})()]).then(async()=>{function ln(t,a=0,n=1){return Ya(t,a,n)}function cn(t){t=t.slice(1);const a=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(a);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,s)=>s<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function xt(t){if(t.type)return t;if(t.charAt(0)==="#")return xt(cn(t));const a=t.indexOf("("),n=t.substring(0,a);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Pt(9,t));let i=t.substring(a+1,t.length-1),s;if(n==="color"){if(i=i.split(" "),s=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(Pt(10,s))}else i=i.split(",");return i=i.map(r=>parseFloat(r)),{type:n,values:i,colorSpace:s}}function dn(t){const{type:a,colorSpace:n}=t;let{values:i}=t;return a.indexOf("rgb")!==-1?i=i.map((s,r)=>r<3?parseInt(s,10):s):a.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),a.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${a}(${i})`}function pn(t,a){return t=xt(t),a=ln(a),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${a}`:t.values[3]=a,dn(t)}function hn(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function xn(t){return parseFloat(t)}function gn(t){const{className:a,classes:n,pulsate:i=!1,rippleX:s,rippleY:r,rippleSize:b,in:h,onExited:c,timeout:d}=t,[m,u]=l.useState(!1),x=ie(a,n.ripple,n.rippleVisible,i&&n.ripplePulsate),g={width:b,height:b,top:-(b/2)+r,left:-(b/2)+s},p=ie(n.child,m&&n.childLeaving,i&&n.childPulsate);return!h&&!m&&u(!0),l.useEffect(()=>{if(!h&&c!=null){const S=setTimeout(c,d);return()=>{clearTimeout(S)}}},[c,h,d]),e.jsx("span",{className:x,style:g,children:e.jsx("span",{className:p})})}const ne=Oe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),mn=["center","classes","className"];let Ne=t=>t,gt,mt,ut,ft;const Ke=550,un=80,fn=Se(gt||(gt=Ne`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),bn=Se(mt||(mt=Ne`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Cn=Se(ut||(ut=Ne`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yn=Me("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),wn=Me(gn,{name:"MuiTouchRipple",slot:"Ripple"})(ft||(ft=Ne`
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
`),ne.rippleVisible,fn,Ke,({theme:t})=>t.transitions.easing.easeInOut,ne.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,ne.child,ne.childLeaving,bn,Ke,({theme:t})=>t.transitions.easing.easeInOut,ne.childPulsate,Cn,({theme:t})=>t.transitions.easing.easeInOut),jn=l.forwardRef(function(t,a){const n=Ue({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:r}=n,b=_e(n,mn),[h,c]=l.useState([]),d=l.useRef(0),m=l.useRef(null);l.useEffect(()=>{m.current&&(m.current(),m.current=null)},[h]);const u=l.useRef(!1),x=Ja(),g=l.useRef(null),p=l.useRef(null),S=l.useCallback(f=>{const{pulsate:M,rippleX:E,rippleY:P,rippleSize:W,cb:K}=f;c(I=>[...I,e.jsx(wn,{classes:{ripple:ie(s.ripple,ne.ripple),rippleVisible:ie(s.rippleVisible,ne.rippleVisible),ripplePulsate:ie(s.ripplePulsate,ne.ripplePulsate),child:ie(s.child,ne.child),childLeaving:ie(s.childLeaving,ne.childLeaving),childPulsate:ie(s.childPulsate,ne.childPulsate)},timeout:Ke,pulsate:M,rippleX:E,rippleY:P,rippleSize:W},d.current)]),d.current+=1,m.current=K},[s]),L=l.useCallback((f={},M={},E=()=>{})=>{const{pulsate:P=!1,center:W=i||M.pulsate,fakeElement:K=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&u.current){u.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(u.current=!0);const I=K?null:p.current,$=I?I.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,v,F;if(W||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round($.width/2),v=Math.round($.height/2);else{const{clientX:B,clientY:T}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round(B-$.left),v=Math.round(T-$.top)}if(W)F=Math.sqrt((2*$.width**2+$.height**2)/3),F%2===0&&(F+=1);else{const B=Math.max(Math.abs((I?I.clientWidth:0)-C),C)*2+2,T=Math.max(Math.abs((I?I.clientHeight:0)-v),v)*2+2;F=Math.sqrt(B**2+T**2)}f!=null&&f.touches?g.current===null&&(g.current=()=>{S({pulsate:P,rippleX:C,rippleY:v,rippleSize:F,cb:E})},x.start(un,()=>{g.current&&(g.current(),g.current=null)})):S({pulsate:P,rippleX:C,rippleY:v,rippleSize:F,cb:E})},[i,S,x]),z=l.useCallback(()=>{L({},{pulsate:!0})},[L]),R=l.useCallback((f,M)=>{if(x.clear(),(f==null?void 0:f.type)==="touchend"&&g.current){g.current(),g.current=null,x.start(0,()=>{R(f,M)});return}g.current=null,c(E=>E.length>0?E.slice(1):E),m.current=M},[x]);return l.useImperativeHandle(a,()=>({pulsate:z,start:L,stop:R}),[z,L,R]),e.jsx(yn,Q({className:ie(ne.root,s.root,r),ref:p},b,{children:e.jsx(Po,{component:null,exit:!0,children:h})}))});function vn(t){return it("MuiButtonBase",t)}const Tn=Oe("MuiButtonBase",["root","disabled","focusVisible"]),An=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Sn=t=>{const{disabled:a,focusVisible:n,focusVisibleClassName:i,classes:s}=t,r=at({root:["root",a&&"disabled",n&&"focusVisible"]},vn,s);return n&&i&&(r.root+=` ${i}`),r},Mn=Me("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),En=l.forwardRef(function(t,a){const n=Ue({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:r,className:b,component:h="button",disabled:c=!1,disableRipple:d=!1,disableTouchRipple:m=!1,focusRipple:u=!1,LinkComponent:x="a",onBlur:g,onClick:p,onContextMenu:S,onDragLeave:L,onFocus:z,onFocusVisible:R,onKeyDown:f,onKeyUp:M,onMouseDown:E,onMouseLeave:P,onMouseUp:W,onTouchEnd:K,onTouchMove:I,onTouchStart:$,tabIndex:C=0,TouchRippleProps:v,touchRippleRef:F,type:B}=n,T=_e(n,An),A=l.useRef(null),w=l.useRef(null),pe=Ot(w,F),{isFocusVisibleRef:re,onFocus:H,onBlur:he,ref:oe}=Xa(),[_,le]=l.useState(!1);c&&_&&le(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{le(!0),A.current.focus()}}),[]);const[xe,ye]=l.useState(!1);l.useEffect(()=>{ye(!0)},[]);const ge=xe&&!d&&!c;l.useEffect(()=>{_&&u&&!d&&xe&&w.current.pulsate()},[d,u,_,xe]);function X(y,$t,Ka=m){return Fe(Bt=>($t&&$t(Bt),!Ka&&w.current&&w.current[y](Bt),!0))}const we=X("start",E),k=X("stop",S),te=X("stop",L),j=X("stop",W),N=X("stop",y=>{_&&y.preventDefault(),P&&P(y)}),q=X("start",$),Ze=X("stop",K),et=X("stop",I),tt=X("stop",y=>{he(y),re.current===!1&&le(!1),g&&g(y)},!1),Be=Fe(y=>{A.current||(A.current=y.currentTarget),H(y),re.current===!0&&(le(!0),R&&R(y)),z&&z(y)}),Te=()=>{const y=A.current;return h&&h!=="button"&&!(y.tagName==="A"&&y.href)},nt=l.useRef(!1),Ga=Fe(y=>{u&&!nt.current&&_&&w.current&&y.key===" "&&(nt.current=!0,w.current.stop(y,()=>{w.current.start(y)})),y.target===y.currentTarget&&Te()&&y.key===" "&&y.preventDefault(),f&&f(y),y.target===y.currentTarget&&Te()&&y.key==="Enter"&&!c&&(y.preventDefault(),p&&p(y))}),Va=Fe(y=>{u&&y.key===" "&&w.current&&_&&!y.defaultPrevented&&(nt.current=!1,w.current.stop(y,()=>{w.current.pulsate(y)})),M&&M(y),p&&y.target===y.currentTarget&&Te()&&y.key===" "&&!y.defaultPrevented&&p(y)});let Pe=h;Pe==="button"&&(T.href||T.to)&&(Pe=x);const Ae={};Pe==="button"?(Ae.type=B===void 0?"button":B,Ae.disabled=c):(!T.href&&!T.to&&(Ae.role="button"),c&&(Ae["aria-disabled"]=c));const Wa=Ot(a,oe,A),zt=Q({},n,{centerRipple:s,component:h,disabled:c,disableRipple:d,disableTouchRipple:m,focusRipple:u,tabIndex:C,focusVisible:_}),Ha=Sn(zt);return e.jsxs(Mn,Q({as:Pe,className:ie(Ha.root,b),ownerState:zt,onBlur:tt,onClick:p,onContextMenu:k,onFocus:Be,onKeyDown:Ga,onKeyUp:Va,onMouseDown:we,onMouseLeave:N,onMouseUp:j,onDragLeave:te,onTouchEnd:Ze,onTouchMove:et,onTouchStart:q,ref:Wa,tabIndex:c?-1:C,type:B},Ae,T,{children:[r,ge?e.jsx(jn,Q({ref:pe,center:s},v)):null]}))});function kn(t){return it("MuiIconButton",t)}const Rn=Oe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),In=["edge","children","className","color","disabled","disableFocusRipple","size"],Dn=t=>{const{classes:a,disabled:n,color:i,edge:s,size:r}=t,b={root:["root",n&&"disabled",i!=="default"&&`color${je(i)}`,s&&`edge${je(s)}`,`size${je(r)}`]};return at(b,kn,a)},Nn=Me(En,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,n.color!=="default"&&a[`color${je(n.color)}`],n.edge&&a[`edge${je(n.edge)}`],a[`size${je(n.size)}`]]}})(({theme:t,ownerState:a})=>Q({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Ut(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:t,ownerState:a})=>{var n;const i=(n=(t.vars||t).palette)==null?void 0:n[a.color];return Q({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&Q({color:i==null?void 0:i.main},!a.disableRipple&&{"&:hover":Q({},i&&{backgroundColor:t.vars?`rgba(${i.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Ut(i.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Rn.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Ln=l.forwardRef(function(t,a){const n=Ue({props:t,name:"MuiIconButton"}),{edge:i=!1,children:s,className:r,color:b="default",disabled:h=!1,disableFocusRipple:c=!1,size:d="medium"}=n,m=_e(n,In),u=Q({},n,{edge:i,color:b,disabled:h,disableFocusRipple:c,size:d}),x=Dn(u);return e.jsx(Nn,Q({className:ie(x.root,r),centerRipple:!0,focusRipple:!c,disabled:h,ref:a},m,{ownerState:u,children:s}))});function zn(t){return it("MuiSkeleton",t)}Oe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const $n=["animation","className","component","height","style","variant","width"];let Le=t=>t,bt,Ct,yt,wt;const Bn=t=>{const{classes:a,variant:n,animation:i,hasChildren:s,width:r,height:b}=t;return at({root:["root",n,i,s&&"withChildren",s&&!r&&"fitContent",s&&!b&&"heightAuto"]},zn,a)},Pn=Se(bt||(bt=Le`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),On=Se(Ct||(Ct=Le`
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
`)),Un=Me("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,a[n.variant],n.animation!==!1&&a[n.animation],n.hasChildren&&a.withChildren,n.hasChildren&&!n.width&&a.fitContent,n.hasChildren&&!n.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const n=hn(t.shape.borderRadius)||"px",i=xn(t.shape.borderRadius);return Q({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:pn(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&_t(yt||(yt=Le`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Pn),({ownerState:t,theme:a})=>t.animation==="wave"&&_t(wt||(wt=Le`
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
    `),On,(a.vars||a).palette.action.hover)),ze=l.forwardRef(function(t,a){const n=Ue({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:r="span",height:b,style:h,variant:c="text",width:d}=n,m=_e(n,$n),u=Q({},n,{animation:i,component:r,variant:c,hasChildren:!!m.children}),x=Bn(u);return e.jsx(Un,Q({as:r,ref:a,className:ie(x.root,s),ownerState:u},m,{style:Q({width:d,height:b},h)}))}),jt=()=>(Z(),e.jsxs(G,{children:[e.jsxs(_n,{children:[e.jsxs(Fn,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),e.jsxs(Gn,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),e.jsx(G,{padding:"40px 0 40px 0",children:e.jsx(qa,{type:Qa.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),_n=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Fn=o.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Gn=o.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Vn=()=>{var n,i;const t=Z(),{aliasDetails:{aliasChainId:a}}=O(s=>s.admin);return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ce,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(i=(n=ot[a])==null?void 0:n.label)==null?void 0:i.split(" ")[0]," Alias Network."]})," ",e.jsx(ce,{textAlign:"center",margin:"5px 0px 60px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[e.jsx(Ft,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(Za,{margin:"auto 15px",textTransform:"none",color:t.color,size:"16px",weight:"600",children:"Processing"})]})]})},Wn=()=>{var i;de();const t=Z(),{switchChain:a}=me(),{aliasDetails:{aliasChainId:n}}=O(s=>s.admin);return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ce,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",e.jsx(Hn,{children:(i=ot[n])==null?void 0:i.label})," to start ",e.jsx("br",{}),"verifying your Channel Alias."]}),e.jsx(eo,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:e.jsx(ae,{variant:"primary",onClick:()=>a(n),size:"large",children:e.jsx(to,{color:"white",children:"Change Network"})})})]})},Hn=o.b`
  color: #cf1c84;
`,Kn=({aliasEthAccount:t,setAliasVerified:a})=>{const n=Z(),{account:i,provider:s,chainId:r}=me(),b=s.getSigner(i),h=Ee(),c=new no(ot[r].commAddress,io.epnsComm,b),[d,m]=l.useState(""),[u,x]=l.useState(!1),g=t,p={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"}},S=async()=>{g==t&&z()},L=async()=>{const{aliasVerified:R}=await ro({account:i,chainId:r}).then(f=>f?(h(a(f.is_alias_verified)),{aliasVerified:f.is_alias_verified}):{aliasVerified:null});return{aliasVerified:R}},z=()=>{m("Processing"),c.verifyChannelAlias(g).then(async R=>{console.debug(R),m("Transaction Sent! It usually takes 5mins to verify."),await R.wait(1),setTimeout(()=>{m("Transaction Mined!")},2e3),setTimeout(()=>{m("Loading...")},2e3);const f=setInterval(async()=>{const{aliasVerified:M}=await L();M&&(setTimeout(()=>{x(!0)},1e3),clearInterval(f),h(ke(0)))},5e3)}).catch(()=>{m("There was an error"),setTimeout(()=>{m("")},2e3)})};return e.jsxs(ee,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsx(ve,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),d===""&&e.jsx(ce,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:i}),d===""&&se.appEnv!=="prod"&&e.jsxs(ve,{padding:"10px",margin:"10px",borderRadius:U.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",e.jsx(ao,{href:p[r].url,target:"_blank",children:p[r].label})," ","to proceed."]}),!u&&(d?e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Ft,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ce,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:d})]}):e.jsx(ee,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:e.jsx(ae,{variant:"primary",size:"medium",onClick:S,children:"Verify Alias Address"})})),u&&e.jsxs(ee,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(oo,{color:"#30CC8B",size:30}),e.jsx(ce,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},Yn=({aliasEthAccount:t,setAliasVerified:a})=>{const{processingState:n}=O(i=>i.channelCreation);return e.jsxs(Ve,{children:[e.jsxs(Jn,{children:[e.jsxs(Je,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[e.jsx("div",{children:"Waiting for Setup"}),e.jsx(Ye,{type:n>=1?"active":"inactive"})]}),e.jsxs(Je,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[e.jsx("div",{children:"Change Network"}),e.jsx(Ye,{type:n>=2?"active":"inactive"})]}),e.jsxs(Je,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[e.jsx("div",{children:"Verify Alias Network"}),e.jsx(Ye,{type:n>=3?"active":"inactive"})]}),e.jsx(Xn,{})]}),n===1&&e.jsx(Vn,{}),n===2&&e.jsx(Wn,{}),n===3&&e.jsx(Kn,{aliasEthAccount:t,setAliasVerified:a})]})},Jn=o.div`
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
`,Xn=o.div`
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
`,vt=({heading:t,subHeading:a})=>{const n=Z();return e.jsx(We,{theme:n,children:e.jsxs(qn,{children:[e.jsx(Qn,{style:{color:n.default.color},children:t}),e.jsx(Zn,{style:{color:n.modalMessageColor},children:a})]})})},qn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,Qn=o.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,Zn=o.h4`
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
`,Xe=V.forwardRef(({title:t},a)=>{const n=Z();return e.jsx(We,{theme:n,children:e.jsxs(ei,{children:[e.jsx(ti,{style:{color:n.modalMessageColor},children:t}),e.jsx(ni,{ref:a,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),ei=o.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,ti=o.h4`
  font-family: FK Grotesk Neu;
  font-size: ${t=>t.fontSize||"0.95rem"};
  font-weight: ${t=>t.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${t=>t.marginBottom||"3%"};
`,ni=o(rt)`
  box-sizing: border-box;
  width: 100%;
`,ii=({onConfirm:t,onClose:a,toastObject:n})=>{const i=V.useRef();Z();const[s,r]=V.useState(!1),b=()=>!s&&a(),h=V.useRef(null);ue(h,()=>b());const c=()=>{var m;r(!0);const d=(m=i==null?void 0:i.current)==null?void 0:m.value;t(d).then(async u=>{console.debug(u),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:x=>e.jsx(fe,{size:x,color:"green"})}),a()}).catch(u=>{console.error({err:u}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:x=>e.jsx(Y,{size:x,color:"red"})})}).finally(()=>{r(!1)})};return e.jsxs(ai,{ref:h,children:[e.jsx(vt,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),e.jsx(Xe,{ref:i,title:"Delegate Address"}),e.jsx(qt,{text:"Add Delegate",onClick:c,isLoading:s})]})},ai=o.div`
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
`,oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",ri=t=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),si=({onClose:t,onConfirm:a,toastObject:n})=>{const i=V.useRef(),s=V.useRef(),[r,b]=V.useState(!1);Z();const h=()=>!r&&t(),c=V.useRef(null);ue(c,()=>h());const d=()=>{var x,g;const m=(x=s==null?void 0:s.current)==null?void 0:x.value,u=(g=i==null?void 0:i.current)==null?void 0:g.value;if(b(!0),m==""||u==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:p=>e.jsx(Y,{size:p,color:"red"})}),setTimeout(()=>{b(!1)},500);return}else if(parseInt(m)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:p=>e.jsx(Y,{size:p,color:"red"})}),setTimeout(()=>{b(!1)},500);return}a(m,u).then(async p=>{console.debug(p),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:S=>e.jsx(fe,{size:S,color:"green"})}),t()}).catch(p=>{console.error(p),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:S=>e.jsx(Y,{size:S,color:"red"})})}).finally(()=>{b(!1)})};return e.jsxs(li,{ref:c,children:[e.jsx(vt,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),e.jsx(Xe,{ref:i,title:"Subgraph ID"}),e.jsx(Xe,{ref:s,title:"Poll Time (in seconds)"}),e.jsx(qt,{text:"Add Subgraph",onClick:d,isLoading:r})]})},li=o.div`
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
`,ci=t=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),di=t=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),pi=({onConfirm:t,onClose:a,toastObject:n})=>{const i=Z(),s=Ee(),{channelDetails:r}=O(x=>x.admin),{CHANNNEL_DEACTIVATED_STATE:b}=O(x=>x.channels),[h,c]=V.useState(!1),d=()=>!h&&a(),m=V.useRef(null);ue(m,()=>d());const u=()=>{c(!0),t().then(async x=>{console.debug(x),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:g=>e.jsx(Y,{size:g,color:"red"})}),await x.wait(1),console.info("Transaction Mined!"),s(lt({...r,channelState:b})),c(!1),a()}).catch(x=>{console.error("!!!Error deactivateChannel() --> %o",x),console.error({err:x}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:g=>e.jsx(Y,{size:g,color:"red"})}),c(!1)})};return e.jsx(We,{theme:i,children:e.jsx(hi,{ref:m,children:h?e.jsxs(xi,{children:[e.jsx(Gt,{size:42,color:U.COLORS.PRIMARY_PINK,type:st.PROCESSING}),e.jsx(gi,{children:"Verifying"})]}):e.jsxs(e.Fragment,{children:[e.jsx(mi,{style:{color:i.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),e.jsxs(ui,{children:[e.jsx(ci,{width:36,height:36,onClick:d}),e.jsx(fi,{onClick:u,children:e.jsx(di,{})})]})]})})})},hi=o.div`
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
`,gi=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,mi=o.div`
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
`;const ui=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,fi=o.div`
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
`;const bi="DD MMM, YYYY",Ci=({onConfirm:t,onClose:a,toastObject:n})=>{const i=Z(),{chainId:s,account:r,provider:b}=me(),h=Ee(),{channelDetails:c,canVerify:d,aliasDetails:{isAliasVerified:m,aliasAddrFromContract:u}}=O(T=>T.admin),{CHANNEL_ACTIVE_STATE:x,CHANNNEL_DEACTIVATED_STATE:g}=O(T=>T.channels),[p,S]=l.useState("");let{channelState:L}=c;L||(L=c.activation_status);const z=L===x,R=L===g,[f,M]=l.useState(!1),[E,P]=l.useState(!1),[W,K]=l.useState(0),I=()=>!f&&a(),$=l.useRef(null);ue($,()=>I());const C=se.coreContractChain===s;Re(600),l.useEffect(()=>{!c||!C||async function(){const T=c.channelStartBlock.toString(),A=await new Vt(se.coreRPC).getBlock(+T),w=Wt(A.timestamp*1e3);S(w.format(bi))}()},[c]),l.useEffect(()=>{!r||!b||async function(){const T=await tn({address:r,provider:b,contractAddress:He.epnscore});K(parseInt(T));const A=parseInt(T);A>=50&&A!=0?P(!0):P(!1)}()},[r,b]);const v=async T=>{await nn({noOfTokens:T,provider:b,account:r})},F=async()=>{if(M(!0),!b)return;const T=b.getSigner(r);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const A=await an({signer:T,contractAddress:He.epnscore,amount:50-W});console.debug("response",A),A&&(K(50),P(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:w=>e.jsx(fe,{size:w,color:"green"})}),M(!1))}catch(A){console.error(A),A.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:w=>e.jsx(Y,{size:w,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:w=>e.jsx(Y,{size:w,color:"red"})}),console.error("Error --> %o",A),console.error({err:A}))}M(!1)},B=async()=>{M(!0);try{const T=Ht("50",18),A=await t(T);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:w=>e.jsx(fe,{size:w,color:"green"})}),await A.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:w=>e.jsx(fe,{size:w,color:"green"})}),h(lt({...c,channelState:x})),a(),M(!1)}catch(T){console.error("Error reactivateChannel",{err:T}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:A=>e.jsx(Y,{size:A,color:"red"})}),M(!1)}};return e.jsx(We,{theme:i,children:e.jsxs(yi,{ref:$,children:[e.jsxs(wi,{children:[e.jsx(ji,{children:"Reactivate Channel"}),e.jsx(Ln,{onClick:I,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(co,{size:"1.5rem",style:{color:i.modalIconColor}})})]}),e.jsxs(Ti,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Ai,{src:c.icon}),e.jsxs(At,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(Di,{children:[c.name,d&&e.jsx(Si,{src:"/verify.png"})]}),e.jsxs(At,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[C&&u&&!m||!C&&!m?e.jsx(ki,{children:"Alias Network Setup Pending"}):e.jsxs(vi,{justifyContent:"flex-start",children:[e.jsxs(Mi,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(Ri,{children:c.subscriber_count})]}),e.jsx(Ei,{active:z,children:z?"Active":R?"Deactivated":"Blocked"})]}),p&&e.jsxs(Ii,{children:["Created ",p]})]})]})]}),e.jsxs(Ni,{children:[e.jsx(Li,{children:"Channel reactivation fee"}),e.jsxs(G,{flex:"0",children:[E?e.jsx(zi,{src:$o}):null,e.jsxs($i,{children:[50," PUSH"]})]})]}),e.jsx(Qt,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:v}),f?e.jsxs(Pi,{children:[e.jsx(Gt,{size:42,color:U.COLORS.PRIMARY_PINK,type:st.PROCESSING}),e.jsx(Oi,{children:"Verifying Transaction"})]}):e.jsx(Bi,{children:W>=50?e.jsx(Mt,{onClick:B,children:"Reactivate"}):e.jsx(Mt,{onClick:F,children:"Approve PUSH"})})]})})},yi=o.div`
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
`,wi=o(G)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${D.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${D.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,ji=o(so)`
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
`,vi=o(G)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Ti=o(G)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Ai=o.img`
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
`,Si=o.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Mi=o.div`
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
`,Ei=o(St)`
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
`,ki=o(St)`
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
`,Ri=o.span`
  font-weight: 400;
  font-size: 14px;
`,Ii=o.div`
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
`,Di=o.div`
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
`,Ni=o(G)`
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
`,zi=o.img``,$i=o.p`
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
`,Bi=o(G)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Mt=o(lo)`
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
`,Pi=o(J)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,Oi=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Ui=50,_i=se.coreContractChain;function Fi({DropdownRef:t,isDropdownOpen:a,closeDropdown:n}){Ee();const{account:i,chainId:s}=me(),{epnsWriteProvider:r,epnsCommWriteProvider:b}=O(H=>H.contracts),{channelDetails:h}=O(H=>H.admin),{CHANNNEL_DEACTIVATED_STATE:c,CHANNEL_BLOCKED_STATE:d}=O(H=>H.channels);O(H=>H.user);const m=Z(),{channelState:u}=h,x=_i===s,g=Re(425),{isModalOpen:p,showModal:S,ModalComponent:L}=Ie(),{isModalOpen:z,showModal:R,ModalComponent:f}=Ie(),{isModalOpen:M,showModal:E,ModalComponent:P}=Ie(),W=a&&!p&&!z&&!M;ue(t,()=>W&&n()),V.useState(!1),V.useState(Ui);const[K,I]=V.useState(0),$=u===c,C=u===d,v=C||$;V.useEffect(()=>{I(+po.formatBigNumberToMetric(h.poolContribution,!0))},[i,h.poolContribution]),de();const F=()=>{C||($?R():S())},B=de(),T=r.reactivateChannel,A=de(),w=()=>r.deactivateChannel(),pe=de(),re=async(H,he)=>{if(!(H==""||he=="")&&!(H<60))try{const oe=H+"+"+he,_=Kt(oe);return r.addSubGraph(_)}catch(oe){console.error(oe)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Gi,{background:m,children:e.jsxs(Vi,{children:[se.appEnv!=="prod"&&e.jsx(Et,{disabled:v,onClick:()=>!v&&E(),children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx($e,{src:oi,alt:"cube"}),e.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),x&&e.jsx(Et,{isChannelDeactivated:$,onClick:F,children:e.jsx(Wi,{isChannelBlocked:C,isChannelDeactivated:$,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[C?e.jsx($e,{src:Tt,alt:"red-bell"}):$?e.jsx($e,{src:ri,alt:"green-bell"}):e.jsx($e,{src:Tt,alt:"red-bell"}),e.jsx("div",{style:{width:"10px"}}),C?"Channel Blocked":$?"Activate Channel":"Deactivate Channel"]})})})]})})}),e.jsx(L,{InnerComponent:pi,onConfirm:w,toastObject:A,modalPosition:De.ON_ROOT}),e.jsx(f,{InnerComponent:Ci,onConfirm:T,toastObject:B,modalMargin:g?"10rem 1rem 0 1rem":"",modalPosition:De.ON_ROOT}),e.jsx(P,{InnerComponent:si,onConfirm:re,toastObject:pe,modalPosition:De.ON_ROOT})]})}const Gi=o.div`
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
`,Vi=o.div`
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
`,Wi=o.div`
  color: ${t=>t.isChannelBlocked?"red":t.isChannelDeactivated?"#30CC8B":"red "};
`,$e=o.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function kt(){const t=V.useRef(null),[a,n]=V.useState(!1);Z();const i=()=>{n(r=>!r)},s=()=>{n(!1)};return e.jsxs(G,{flex:"0",ref:t,children:[e.jsx(Hi,{active:a,onClick:i}),a&&e.jsx(Fi,{DropdownRef:t,isDropdownOpen:a,closeDropdown:s})]})}o.div`
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
`;const Hi=o(ho)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${t=>t.active?"rotateZ(90deg)":"none"};
`,Ki="DD MMM, YYYY";function Yi({isChannelExpired:t,setIsChannelExpired:a,showEditChannel:n,destroyChannel:i}){var ge,X,we;const{account:s,chainId:r,wallet:b}=me(),{delegatees:h,channelDetails:c,canVerify:d,aliasDetails:{isAliasVerified:m,aliasAddrFromContract:u}}=O(k=>k.admin),{channelSettings:x}=O(k=>k.channels),{userPushSDKInstance:g}=O(k=>k.user),{handleConnectWalletAndEnableProfile:p}=l.useContext(Jt),{CHANNEL_ACTIVE_STATE:S,CHANNNEL_DEACTIVATED_STATE:L}=O(k=>k.channels),{processingState:z}=O(k=>k.channelCreation),[R,f]=l.useState([]),[M,E]=l.useState("");let{channelState:P}=c;P||(P=c.activation_status);const W=P===S,K=P===L,I=se.coreContractChain===r,$=Re(600),[C,v]=l.useState([s]),[F,B]=l.useState(void 0);O(k=>k.contracts);const T=xo(),{isModalOpen:A,showModal:w,ModalComponent:pe}=Ie(),re=de(),H=async()=>{g.signer||await p({wallet:b}),w()},he=async k=>g.channel.delegate.add(dt(k,r)),oe=c.expiryTime?go(((ge=c.expiryTime)==null?void 0:ge.toString())*1e3):"",_=c.expiryTime?mo(((X=c.expiryTime)==null?void 0:X.toString())*1e3):!0,le=c.expiryTime?uo(((we=c.expiryTime)==null?void 0:we.toString())*1e3,14):"";l.useEffect(()=>{c.channelType==ct.TIMEBOUND&&(_||a(!0))},[_]),l.useEffect(()=>{!c||!d||async function(){let k=await Xt.getInstance().getChannelJsonAsync(c.verifiedBy);f(k)}()},[c,d]),l.useEffect(()=>{!c||!I||async function(){const k=c.channelStartBlock.toString(),te=await new Vt(se.coreRPC).getBlock(+k),j=Wt(te.timestamp*1e3);E(j.format(Ki))}()},[c]),l.useEffect(()=>{s&&(!h||!h.length?B(s):B(I?h[0].channel:h[0].alias_address))},[h,s]),l.useEffect(()=>{s&&(async()=>{try{const k=dt(s,r),te=await g.channel.delegate.get({channel:k});if(te){const j=te.map(N=>N);j.unshift(s),v(j)}}catch(k){console.error(k)}})()},[s,r]);const xe=async k=>{let te=g;if(!(!te.signer&&(te=await p({wallet:b}),!te)))return te.channel.delegate.remove(dt(k,r))},ye=()=>{T(bo.ChannelSettings)};return e.jsxs(J,{children:[e.jsxs(Xi,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(qi,{src:c.icon}),e.jsxs(qe,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(sa,{children:[c.name,d&&e.jsx(Qi,{src:"/verify.png"})]}),e.jsxs(qe,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[I&&u&&!m||!I&&!m?e.jsx(ia,{children:"Alias Network Setup Pending"}):e.jsxs(Ji,{justifyContent:"flex-start",children:[e.jsxs(ta,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(aa,{children:c.subscriber_count})]}),e.jsxs(na,{active:W,children:[K&&e.jsx(pt,{width:"12px",src:No,margin:"0 5px 2px 0px",height:"30px"}),W?"Active":K?"Deactivated":"Blocked"]}),c.channelType==ct.TIMEBOUND&&!t&&e.jsxs(G,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(pt,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(ve,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",oe]})]}),c.channelType==ct.TIMEBOUND&&t&&e.jsxs(G,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(pt,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(ve,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",oe]})]})]}),M&&e.jsxs(oa,{children:["Created ",M]})]})]})]}),$&&e.jsxs(G,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!t&&I&&e.jsx(ae,{onClick:n,size:"small",variant:"outline",children:"Edit Channel"}),!t&&e.jsx(kt,{}),t&&I&&e.jsx(ae,{onClick:i,size:"small",variant:"danger",children:"Delete Channel"})]}),t&&e.jsx(J,{alignItems:"flex-start",children:e.jsxs(It,{margin:"25px 0 0 0",children:[e.jsx(ve,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",e.jsx(ve,{fontWeight:"600",children:le})]})}),e.jsx(J,{alignItems:"flex-start",children:e.jsx(It,{children:c.info})}),d&&e.jsx(qe,{alignItems:"flex-start",padding:"5px 0px",children:e.jsx(la,{children:e.jsxs(ra,{children:[e.jsx("span",{children:"verified by:"}),e.jsx(Zi,{src:R.icon}),e.jsx(ea,{children:R.name})]})})}),z===0&&e.jsxs(J,{children:[e.jsx(Ve,{children:e.jsxs(Dt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Zt,{title:"Notification Settings",description:"Customize notification preferences for users",Button:e.jsx(_o,{onClick:ye})}),e.jsx(en,{account:s,isAddress:!1,items:x[s],isLoading:!1,onClickEmptyListButton:ye,emptyListButtonTitle:"Add Setting"})]})}),e.jsx(Ve,{children:e.jsxs(Dt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Zt,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:e.jsx(Fo,{onClick:H})}),e.jsx(en,{account:s,isAddress:!0,items:C,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:xe,icon:e.jsx(fo,{})}]})]})})]}),e.jsx(pe,{InnerComponent:ii,onConfirm:he,toastObject:re,modalPosition:De.ON_ROOT})]})}const qe=o(J)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Ji=o(G)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Xi=o(G)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,qi=o.img`
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
`,Qi=o.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Zi=o.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,ea=o.div``,ta=o.div`
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
`,na=o(Rt)`
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
`,aa=o.span`
  font-weight: 400;
  font-size: 14px;
`;o.div`
  display: flex;
  flex-direction: column;
  @media ${D.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const oa=o.div`
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
`,ra=o.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,sa=o.div`
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
`,la=o.div`
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
`,ca=({channelName:t,setChannelName:a,channelInfo:n,setChannelInfo:i,channelURL:s,setChannelURL:r,editChannel:b,errorInfo:h,setErrorInfo:c})=>{const d=Z(),m=({message:x})=>e.jsxs(ee,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[e.jsx(wo,{color:"red",size:"20"}),e.jsx(ce,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:x})]}),u=x=>{const g=x.target.value;on(g)?(c(""),r(g)):(c(p=>({...p,url:"Channel URL is invalid! Please enter a valid url!"})),r(g))};return e.jsx(da,{children:e.jsx(pa,{onSubmit:b,children:e.jsxs(ha,{children:[e.jsxs(ee,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:d.editChannelPrimaryText},children:"Channel Name"}),e.jsx(ee,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:e.jsx(rt,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:d.editChannelInputbg,color:d.editChannelPrimaryText,border:d.textAreaBorderColor,focusBorder:d.textAreaFocusBorder,radius:"12px",height:"25px",value:t,onChange:x=>{a(x.target.value)}})})]}),(h==null?void 0:h.name)&&e.jsx(m,{message:h==null?void 0:h.name}),e.jsxs(ee,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(ee,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(Qe,{style:{color:d.editChannelPrimaryText},children:"Channel Description"}),e.jsx(ce,{color:d.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-n.length})]}),e.jsx(yo,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:d.textAreaBorderColor,focusBorder:d.textAreaFocusBorder,radius:"12px",bg:d.editChannelInputbg,color:d.editChannelPrimaryText,value:n,onChange:x=>{i(x.target.value.slice(0,250))},autocomplete:"off"})]}),(h==null?void 0:h.description)&&e.jsx(m,{message:h==null?void 0:h.description}),e.jsxs(ee,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:d.editChannelPrimaryText},children:"Channel Website URL"}),e.jsx(rt,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:d.editChannelInputbg,color:d.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:d.textAreaBorderColor,focusBorder:d.textAreaFocusBorder,radius:"12px",value:s,onChange:x=>{u(x)}})]}),(h==null?void 0:h.url)&&e.jsx(m,{message:h==null?void 0:h.url})]})})})},da=o(Ve)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,pa=o(Co)`
  height: inherit;
`,Qe=o.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,ha=o(ee)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,xa="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",ga=({onClose:t,InnerComponentProps:a})=>{const{setChannelLogo:n,croppedImage:i,setCroppedImage:s,imageSrc:r,setImageSrc:b,imageType:h,setImageType:c}=a,d=l.useRef(),m=l.useRef(null);ue(m,()=>{t()});const u=p=>{p.preventDefault()},x=p=>{p.preventDefault(),p.stopPropagation(),g(p.dataTransfer,"transfer",p)},g=async(p,S,L)=>{if(L.preventDefault(),s(void 0),p==null?void 0:p.files[0]){var z=new FileReader;z.readAsDataURL(p==null?void 0:p.files[0]),z.onloadend=function(R){var f;b(z.result),c((f=p==null?void 0:p.files[0])==null?void 0:f.type)}}};return e.jsxs(ma,{ref:m,children:[e.jsx(ba,{children:e.jsx(Ca,{onClick:t})}),e.jsxs(ua,{children:[e.jsx(fa,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),e.jsx(ja,{className:"",children:e.jsx("div",{onDragOver:p=>u(p),onDrop:p=>x(p),className:"bordered",children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"crop-div",children:i?e.jsx("div",{className:"crop-innderdiv",children:e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:i,className:"croppedImage"})})}):e.jsx("div",{className:"crop-innderdiv",children:e.jsx(Wo,{className:"cropper",imageSrc:r,imageType:h,onImageCropped:p=>s(p),width:"128px",height:"128px",ref:d})})}),e.jsxs(ya,{children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:p=>g(p.target,"target",p),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),e.jsx(wa,{children:i?e.jsx(e.Fragment,{children:e.jsx(ae,{variant:"primary",size:"medium",onClick:()=>{n(i),t()},children:"Upload Image"})}):e.jsx(e.Fragment,{children:e.jsx(ae,{variant:"primary",size:"medium",onClick:()=>{d.current.showCroppedImage()},children:"Crop Image"})})})]})]})},ma=o.div``,ua=o.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,fa=o.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${t=>t.theme.modalTextColor};
`,ba=o.div`
  text-align: end;
  width: 100%;
`,Ca=o(jo)`
  cursor: pointer;
  font-size: 20px;
  color: ${t=>t.theme.modalTextColor};
`,ya=o(Yt)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,wa=o(J)``,ja=o.div`
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
`,Ce=t=>t.trim().length==0;function va(t,a){var n=new XMLHttpRequest;n.onload=function(){var i=new FileReader;i.onloadend=function(){a(i.result)},i.readAsDataURL(n.response)},n.open("GET",t),n.responseType="blob",n.send()}const Ta=t=>{var a=Ko,n=t.split(";base64,").pop(),i=vo.from(n,"base64"),s=a(i);return s.width>128||s.height>128?(console.error("Image size check failed... returning"),{success:0,info:"Image size check failed, Image should be 128X128PX"}):(console.debug("Image verification",n.charAt(0)),n.charAt(0)==="/"?{success:1,info:"Image checks passed"}:n.charAt(0)==="i"?{success:1,info:"Image checks passed"}:{success:0,info:"Image extension should be jpg or png"})};function Aa({closeEditChannel:t,UploadLogoComponent:a,displayUplaodLogoModal:n}){const{account:i,provider:s}=me(),{channelDetails:r,aliasDetails:{isAliasVerified:b,aliasAddrFromContract:h}}=O(j=>j.admin),{epnsReadProvider:c,epnsWriteProvider:d}=O(j=>j.contracts),m=50,[u,x]=l.useState(r==null?void 0:r.name),[g,p]=l.useState(r==null?void 0:r.info),[S,L]=l.useState(r==null?void 0:r.url),[z,R]=l.useState(r==null?void 0:r.icon),[f,M]=l.useState(r==null?void 0:r.icon),[E,P]=l.useState(r==null?void 0:r.icon),[W,K]=l.useState(E),[I,$]=l.useState(null),[C,v]=l.useState(!1),[F,B]=l.useState({name:"",description:"",address:"",url:""}),[T,A]=l.useState(!1),[w,pe]=l.useState(0),[re,H]=l.useState(0),[he,oe]=l.useState(!1),_=de();l.useEffect(()=>{i&&async function(){const j=await c.channelUpdateCounter(i);pe(m*(Number(j)+1))}()},[i]),l.useEffect(()=>{!i||!s||async function(){const j=await tn({address:i,provider:s,contractAddress:He.epnscore});H(parseInt(j));const N=parseInt(j);N>=w&&N!=0?v(!0):v(!1)}()},[i,s]);const le=async()=>{if(A(!0),!s)return;const j=s.getSigner(i);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const N=await an({signer:j,contractAddress:He.epnscore,amount:w-re});console.debug("response",N),N&&(A(!1),H(w),v(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:q=>e.jsx(fe,{size:q,color:"green"})}))}catch(N){console.error(N),N.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}),console.error("Error --> %o",N),console.error({err:N}))}A(!1)},xe=()=>{oe(!1)},ye=Re(600),ge=l.useRef(null);ue(ge,()=>{xe()});const X=()=>(B(""),Ce(u)||Ce(g)||Ce(S)?(Ce(u)&&B(j=>({...j,name:"Please, enter the channel name."})),Ce(g)&&B(j=>({...j,description:"Please, enter the channel description"})),Ce(S)&&B(j=>({...j,url:"Please, enter the channel url"})),!1):rn(u,125)?rn(S,125)?on(S)?!0:(B(j=>({...j,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(B(j=>({...j,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(B(j=>({...j,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),we=()=>!(u!==(r==null?void 0:r.name)||g!==(r==null?void 0:r.info)||S!==(r==null?void 0:r.url)||f!==(r==null?void 0:r.icon)),k=async j=>{try{if(!X())return;A(!0);const N=JSON.stringify({name:u,info:g,url:S,icon:f,aliasDetails:r.aliasDetails||To({chainId:parseInt(r.chain_id),address:r.address})});console.debug(N);const q=await Ao(N);console.debug("IPFS storagePointer:",q);const Ze="1+"+q,et=Kt(Ze),tt=Ht(w.toString(),18);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Be=await d.updateChannelMeta(i,et,tt,{gasLimit:1e6});console.debug(Be),await Be.wait(),A(!1),_.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:Te=>e.jsx(fe,{size:Te,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(N){A(!1),console.error(N.message),N.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:q=>e.jsx(Y,{size:q,color:"red"})}),console.error("Error --> %o",N),console.error({err:N}))}},te=async j=>{await nn({noOfTokens:j,provider:s,account:i})};return l.useEffect(()=>{E&&(console.debug("Image cropped",E),va(E,function(j){const N=Ta(j);console.debug("response",N),N.success&&(console.debug("Cropped Image....",E),M(E))}))},[E]),e.jsxs(Sa,{ref:ge,children:[e.jsx(a,{InnerComponent:ga,InnerComponentProps:{setChannelLogo:R,channelLogo:z,croppedImage:E,setCroppedImage:P,setChannelFile:M,imageSrc:W,setImageSrc:K,imageType:I,setImageType:$,errorInfo:F,setErrorInfo:B},modalPosition:De.ON_PARENT}),e.jsxs(Ma,{children:[e.jsxs(ka,{children:[e.jsx(Ra,{src:z}),e.jsx(ae,{variant:"secondary",onClick:()=>{n(),oe(!0)},children:"Upload Logo"})]}),!ye&&e.jsx(Ia,{}),e.jsx(ca,{channelName:u,setChannelName:x,channelInfo:g,setChannelInfo:p,channelURL:S,setChannelURL:L,editChannel:k,errorInfo:F,setErrorInfo:B})]}),e.jsxs(Da,{children:[e.jsxs("div",{children:[e.jsx(Na,{children:"Channel edit fee"}),e.jsx(La,{children:"Editing channel details requires fees to be deposited"})]}),e.jsxs(G,{flex:"0",children:[C?e.jsx(Ea,{src:xa}):null,e.jsxs(za,{children:[w," PUSH"]})]})]}),e.jsx(Qt,{noOfPushTokensToCheck:w,containerProps:{width:"100%"},onMintPushToken:te}),T?e.jsx(e.Fragment,{children:e.jsxs($a,{children:[e.jsx(Spinner,{size:42,color:U.COLORS.PRIMARY_PINK,type:st.PROCESSING}),e.jsx(Ba,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Pa,{children:[e.jsx(ae,{onClick:t,variant:"outline",size:"large",children:"Cancel"}),re>=w?e.jsx(ae,{disabled:we(),onClick:k,size:"large",children:"Save Changes"}):e.jsx(ae,{onClick:le,size:"large",children:"Approve PUSH"})]})})]})}const Sa=o(J)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,Ma=o(J)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,Ea=o.img``,ka=o(G)`
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
`,Ra=o.img`
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
`,Ia=o.div`
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
`,Da=o(J)`
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
`,Na=o.p`
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
`,za=o.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,$a=o(J)`
  flex-direction: row;
  margin-top: 33px;
`,Ba=o.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Pa=o(G)`
  justify-content: end;
  margin-top: 35px;
  gap: 14px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Oa=10;let Nt=null;const Ua=()=>{Z();const{account:t,chainId:a,wallet:n}=me(),{channelDetails:i,delegatees:s,aliasDetails:{aliasAddr:r,aliasEthAddr:b,isAliasVerified:h,aliasAddrFromContract:c}}=O(C=>C.admin),{processingState:d}=O(C=>C.channelCreation),{epnsWriteProvider:m}=O(C=>C.contracts);O(C=>C.user),l.useContext(Jt);const u=i&&i!=="unfetched",x=de(),g=Ee(),[p,S]=l.useState(!1);l.useState(!0);const[L,z]=l.useState(!1),R=se.coreContractChain===a,f=Re(600);l.useEffect(()=>{if(!R||!i||c||i==="unfetched")return;const C=So(i);if(C){const{address:v,chainId:F}=C;g(Mo(v)),g(Eo(F))}else g(ke(0))},[i,c]);const M=async C=>{let{aliasAddress:v=null,isAliasVerified:F=null}=await Xt.getInstance().getChannelDetailsFromAddress(C);return v=="NULL"&&(v=null),{aliasAddress:v,aliasVerified:F}};l.useEffect(()=>{!R||!c||d===0||(Nt=setInterval(async()=>{const{aliasAddress:C,aliasVerified:v}=await M(t);C?(g(ko(C)),v?(g(ht(!0)),g(ke(0))):(g(ke(2)),g(ht(!1)))):d!=0&&d!=1&&g(ke(1))},Oa*1e3))},[c]),r!==null&&clearInterval(Nt);const E=async()=>{try{x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await m.destroyTimeBoundChannel(t,{gasLimit:1e6});console.debug(C),console.debug("Check: "+t),await C.wait(),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:v=>e.jsx(Y,{size:v,color:"green"})}),g(lt(null))}catch(C){console.error(C),C.code=="ACTION_REJECTED"?x.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:v=>e.jsx(Y,{size:v,color:"red"})}):x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:v=>e.jsx(Y,{size:v,color:"red"})})}},P=()=>{z(!0)},W=()=>{z(!1)},{isModalOpen:K,showModal:I,ModalComponent:$}=Ie();return e.jsxs(G,{children:[(i==="unfetched"||d===null)&&e.jsx(jt,{}),i!=="unfetched"&&e.jsxs(J,{justifyContent:d===0&&"flex-start",height:"fit-content",children:[!i&&d===0&&e.jsx(Yo,{}),u&&d!==null&&e.jsx(_a,{children:L?e.jsx(Aa,{closeEditChannel:W,UploadLogoComponent:$,displayUplaodLogoModal:I,isUploadLogoModalOpen:K}):e.jsxs(e.Fragment,{children:[i&&!f&&e.jsxs(G,{zIndex:"1",gap:"8px",children:[!p&&R&&e.jsx(ae,{onClick:P,size:"small",variant:"outline",children:"Edit Channel"}),!p&&e.jsx(kt,{}),p&&R&&e.jsx(ae,{onClick:E,size:"small",variant:"danger",children:"Delete Channel"})]}),i?e.jsx(Yi,{isChannelExpired:p,setIsChannelExpired:S,showEditChannel:P,destroyChannel:E}):""]})}),d!==0&&d!==null&&u&&!L&&e.jsx(e.Fragment,{children:e.jsx(Yn,{aliasEthAccount:b,setAliasVerified:ht})})]})]})},_a=o(J)`
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
    100% - ${be.MINI_MODULES.DESKTOP.RIGHT} - ${be.MINI_MODULES.DESKTOP.LEFT} -
      ${U.ADJUSTMENTS.PADDING.HUGE} - ${U.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${U.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${D.laptop} {
    margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${U.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${be.MINI_MODULES.TABLET.RIGHT} - ${be.MINI_MODULES.TABLET.LEFT} -
        ${U.ADJUSTMENTS.PADDING.BIG} - ${U.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${D.mobileL} {
    margin: ${U.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${U.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${be.MINI_MODULES.MOBILE.RIGHT} - ${be.MINI_MODULES.MOBILE.LEFT} -
        ${U.ADJUSTMENTS.PADDING.DEFAULT} - ${U.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${U.CONSTANTS.HEADER_HEIGHT}px - ${be.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${U.ADJUSTMENTS.RADIUS.LARGE} ${U.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;se.coreContractChain;function Fa(){Ro.pageview("/channel_dashboard");const[t,a]=V.useState(!0),[n,i]=V.useState(null),s=()=>i(null);return V.useEffect(()=>{n&&s()},[n]),e.jsxs(e.Fragment,{children:[t?e.jsx(Ua,{}):e.jsx(jt,{}),n&&e.jsx(Lo,{notification:n,clearToast:s})]})}o.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Lt;sn=()=>e.jsx(Lt,{children:e.jsx(Fa,{})}),Lt=o(Io)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{ir as __tla,sn as default};