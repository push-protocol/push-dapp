import{gK as En,gL as Bo,r as o,gM as xe,m as e,gN as Qe,gO as Ie,gP as je,gQ as Ze,e3 as et,gR as Oo,e2 as Q,gS as ut,gT as Mn,gU as Fo,gV as ft,gW as wt,gX as oe,gY as In,gZ as tt,g_ as Uo,g$ as _o,q as r,X as te,eu as V,di as Ne,dj as Le,dd as _,I as M,d1 as ee,er as nt,_ as $t,g7 as Bt,es as Te,x as Se,d7 as We,dc as it,dY as bt,dX as yt,d5 as Re,z as le,c_ as G,d8 as Go,h0 as Vo,h1 as rt,h2 as Wo,D as Ae,n as ke,L as at,R as Z,dk as Pe,d0 as P,du as $e,eJ as Be,ev as X,d3 as ne,dA as Rn,dB as Ot,h3 as Ft,fg as Ho,dp as De,f7 as Oe,eq as Dn,h4 as zn,dZ as Ee,eQ as Ko,gh as Ut,eh as Ct,dw as ot,fW as Yo,dx as st,h5 as _t,h6 as Jo,dv as Nn,eR as Ln,da as qo,h7 as Xo,h8 as Qo,h9 as Zo,ha as lt,eP as Pn,ec as Gt,dr as Vt,hb as es,A as ts,hc as $n,hd as ns,fB as is,he as rs,dl as Bn,hf as as,df as On,ga as os,d4 as ss,o as ls,y as ds,hg as cs,dD as Wt,gf as ps,hh as Fn,hi as Un,hj as xs,hk as hs,hl as gs,hm as ms,hn as us,ho as Ht,c$ as Fe,d2 as fs,S as ws,__tla as bs}from"./index-mlEuGbHv.js";import{S as ys,N as Cs,__tla as vs}from"./RedCircle-BPwsp-YB.js";import{M as _n,S as js,F as Kt,C as Gn,a as Vn,__tla as Ts}from"./ChannelInfoList-BYF1MWvq.js";import{a as Ss,__tla as As}from"./Tag-DUeTRhx2.js";import{g as Wn,m as Yt,a as Hn,i as ks,c as Es,__tla as Ms}from"./UniswapWidget-lh0kHGJ7.js";import{M as Is,a as Rs,__tla as Ds}from"./EmptyNotificationSettings-DlK0ysdn.js";import{D as zs,__tla as Ns}from"./index-D_IPwkph.js";import{D as Ls,__tla as Ps}from"./entry-DJq7MNHM.js";import{u as $s,I as Kn,t as Yn,h as Jn,__tla as Bs}from"./LogoSizeHelper-CjHf-U09.js";import{__tla as Os}from"./TransitionGroupContext-Cw4_aSLc.js";import{__tla as Fs}from"./slicedToArray-B66lTA9Z.js";import{__tla as Us}from"./index.es-3VPqQJNg.js";import"./browser-CeceZ__e.js";import{__tla as _s}from"./index.esm-nxE-aNr6.js";let qn,Gs=Promise.all([(()=>{try{return bs}catch{}})(),(()=>{try{return vs}catch{}})(),(()=>{try{return Ts}catch{}})(),(()=>{try{return As}catch{}})(),(()=>{try{return Ms}catch{}})(),(()=>{try{return Ds}catch{}})(),(()=>{try{return Ns}catch{}})(),(()=>{try{return Ps}catch{}})(),(()=>{try{return Bs}catch{}})(),(()=>{try{return Os}catch{}})(),(()=>{try{return Fs}catch{}})(),(()=>{try{return Us}catch{}})(),(()=>{try{return _s}catch{}})()]).then(async()=>{function Xn(t,i=0,n=1){return Bo(t,i,n)}function Qn(t){t=t.slice(1);const i=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(i);return n&&n[0].length===1&&(n=n.map(a=>a+a)),n?`rgb${n.length===4?"a":""}(${n.map((a,d)=>d<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function Jt(t){if(t.type)return t;if(t.charAt(0)==="#")return Jt(Qn(t));const i=t.indexOf("("),n=t.substring(0,i);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(En(9,t));let a=t.substring(i+1,t.length-1),d;if(n==="color"){if(a=a.split(" "),d=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(d)===-1)throw new Error(En(10,d))}else a=a.split(",");return a=a.map(s=>parseFloat(s)),{type:n,values:a,colorSpace:d}}function Zn(t){const{type:i,colorSpace:n}=t;let{values:a}=t;return i.indexOf("rgb")!==-1?a=a.map((d,s)=>s<3?parseInt(d,10):d):i.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),i.indexOf("color")!==-1?a=`${n} ${a.join(" ")}`:a=`${a.join(", ")}`,`${i}(${a})`}function ei(t,i){return t=Jt(t),i=Xn(i),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${i}`:t.values[3]=i,Zn(t)}const ti=o.createContext(),ni=()=>o.useContext(ti)??!1;function ii(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ri(t){return parseFloat(t)}function ai(t){const{className:i,classes:n,pulsate:a=!1,rippleX:d,rippleY:s,rippleSize:c,in:l,onExited:x,timeout:m}=t,[g,u]=o.useState(!1),p=xe(i,n.ripple,n.rippleVisible,a&&n.ripplePulsate),f={width:c,height:c,top:-(c/2)+s,left:-(c/2)+d},h=xe(n.child,g&&n.childLeaving,a&&n.childPulsate);return!l&&!g&&u(!0),o.useEffect(()=>{if(!l&&x!=null){const T=setTimeout(x,m);return()=>{clearTimeout(T)}}},[x,l,m]),e.jsx("span",{className:p,style:f,children:e.jsx("span",{className:h})})}const he=Qe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),oi=["center","classes","className"];let dt=t=>t,qt,Xt,Qt,Zt;const vt=550,si=80,li=Ie(qt||(qt=dt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),di=Ie(Xt||(Xt=dt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ci=Ie(Qt||(Qt=dt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),pi=je("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xi=je(ai,{name:"MuiTouchRipple",slot:"Ripple"})(Zt||(Zt=dt`
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
`),he.rippleVisible,li,vt,({theme:t})=>t.transitions.easing.easeInOut,he.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,he.child,he.childLeaving,di,vt,({theme:t})=>t.transitions.easing.easeInOut,he.childPulsate,ci,({theme:t})=>t.transitions.easing.easeInOut),hi=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiTouchRipple"}),{center:a=!1,classes:d={},className:s}=n,c=et(n,oi),[l,x]=o.useState([]),m=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const u=o.useRef(!1),p=Oo(),f=o.useRef(null),h=o.useRef(null),T=o.useCallback(b=>{const{pulsate:A,rippleX:S,rippleY:$,rippleSize:k,cb:W}=b;x(B=>[...B,e.jsx(xi,{classes:{ripple:xe(d.ripple,he.ripple),rippleVisible:xe(d.rippleVisible,he.rippleVisible),ripplePulsate:xe(d.ripplePulsate,he.ripplePulsate),child:xe(d.child,he.child),childLeaving:xe(d.childLeaving,he.childLeaving),childPulsate:xe(d.childPulsate,he.childPulsate)},timeout:vt,pulsate:A,rippleX:S,rippleY:$,rippleSize:k},m.current)]),m.current+=1,g.current=W},[d]),w=o.useCallback((b={},A={},S=()=>{})=>{const{pulsate:$=!1,center:k=a||A.pulsate,fakeElement:W=!1}=A;if((b==null?void 0:b.type)==="mousedown"&&u.current){u.current=!1;return}(b==null?void 0:b.type)==="touchstart"&&(u.current=!0);const B=W?null:h.current,C=B?B.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,H,J;if(k||b===void 0||b.clientX===0&&b.clientY===0||!b.clientX&&!b.touches)v=Math.round(C.width/2),H=Math.round(C.height/2);else{const{clientX:O,clientY:I}=b.touches&&b.touches.length>0?b.touches[0]:b;v=Math.round(O-C.left),H=Math.round(I-C.top)}if(k)J=Math.sqrt((2*C.width**2+C.height**2)/3),J%2===0&&(J+=1);else{const O=Math.max(Math.abs((B?B.clientWidth:0)-v),v)*2+2,I=Math.max(Math.abs((B?B.clientHeight:0)-H),H)*2+2;J=Math.sqrt(O**2+I**2)}b!=null&&b.touches?f.current===null&&(f.current=()=>{T({pulsate:$,rippleX:v,rippleY:H,rippleSize:J,cb:S})},p.start(si,()=>{f.current&&(f.current(),f.current=null)})):T({pulsate:$,rippleX:v,rippleY:H,rippleSize:J,cb:S})},[a,T,p]),y=o.useCallback(()=>{w({},{pulsate:!0})},[w]),z=o.useCallback((b,A)=>{if(p.clear(),(b==null?void 0:b.type)==="touchend"&&f.current){f.current(),f.current=null,p.start(0,()=>{z(b,A)});return}f.current=null,x(S=>S.length>0?S.slice(1):S),g.current=A},[p]);return o.useImperativeHandle(i,()=>({pulsate:y,start:w,stop:z}),[y,w,z]),e.jsx(pi,Q({className:xe(he.root,d.root,s),ref:h},c,{children:e.jsx(Ss,{component:null,exit:!0,children:l})}))});function gi(t){return ut("MuiButtonBase",t)}const mi=Qe("MuiButtonBase",["root","disabled","focusVisible"]),ui=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],fi=t=>{const{disabled:i,focusVisible:n,focusVisibleClassName:a,classes:d}=t,s=wt({root:["root",i&&"disabled",n&&"focusVisible"]},gi,d);return n&&a&&(s.root+=` ${a}`),s},wi=je("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,i)=>i.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${mi.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),bi=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiButtonBase"}),{action:a,centerRipple:d=!1,children:s,className:c,component:l="button",disabled:x=!1,disableRipple:m=!1,disableTouchRipple:g=!1,focusRipple:u=!1,LinkComponent:p="a",onBlur:f,onClick:h,onContextMenu:T,onDragLeave:w,onFocus:y,onFocusVisible:z,onKeyDown:b,onKeyUp:A,onMouseDown:S,onMouseLeave:$,onMouseUp:k,onTouchEnd:W,onTouchMove:B,onTouchStart:C,tabIndex:v=0,TouchRippleProps:H,touchRippleRef:J,type:O}=n,I=et(n,ui),R=o.useRef(null),E=o.useRef(null),ve=Mn(E,J),{isFocusVisibleRef:ue,onFocus:q,onBlur:we,ref:K}=Fo(),[Y,se]=o.useState(!1);x&&Y&&se(!1),o.useImperativeHandle(a,()=>({focusVisible:()=>{se(!0),R.current.focus()}}),[]);const[be,Me]=o.useState(!1);o.useEffect(()=>{Me(!0)},[]);const de=be&&!m&&!x;o.useEffect(()=>{Y&&u&&!m&&be&&E.current.pulsate()},[m,u,Y,be]);function U(j,Xe,Pt=g){return ft(pe=>(Xe&&Xe(pe),!Pt&&E.current&&E.current[j](pe),!0))}const L=U("start",S),ie=U("stop",T),ye=U("stop",w),N=U("stop",k),F=U("stop",j=>{Y&&j.preventDefault(),$&&$(j)}),re=U("start",C),fe=U("stop",W),Ke=U("stop",B),ae=U("stop",j=>{we(j),ue.current===!1&&se(!1),f&&f(j)},!1),ce=ft(j=>{R.current||(R.current=j.currentTarget),q(j),ue.current===!0&&(se(!0),z&&z(j)),y&&y(j)}),ge=()=>{const j=R.current;return l&&l!=="button"&&!(j.tagName==="A"&&j.href)},Ye=o.useRef(!1),Ce=ft(j=>{u&&!Ye.current&&Y&&E.current&&j.key===" "&&(Ye.current=!0,E.current.stop(j,()=>{E.current.start(j)})),j.target===j.currentTarget&&ge()&&j.key===" "&&j.preventDefault(),b&&b(j),j.target===j.currentTarget&&ge()&&j.key==="Enter"&&!x&&(j.preventDefault(),h&&h(j))}),gt=ft(j=>{u&&j.key===" "&&E.current&&Y&&!j.defaultPrevented&&(Ye.current=!1,E.current.stop(j,()=>{E.current.pulsate(j)})),A&&A(j),h&&j.target===j.currentTarget&&ge()&&j.key===" "&&!j.defaultPrevented&&h(j)});let Ge=l;Ge==="button"&&(I.href||I.to)&&(Ge=p);const D={};Ge==="button"?(D.type=O===void 0?"button":O,D.disabled=x):(!I.href&&!I.to&&(D.role="button"),x&&(D["aria-disabled"]=x));const me=Mn(i,K,R),Je=Q({},n,{centerRipple:d,component:l,disabled:x,disableRipple:m,disableTouchRipple:g,focusRipple:u,tabIndex:v,focusVisible:Y}),qe=fi(Je);return e.jsxs(wi,Q({as:Ge,className:xe(qe.root,c),ownerState:Je,onBlur:ae,onClick:h,onContextMenu:ie,onFocus:ce,onKeyDown:Ce,onKeyUp:gt,onMouseDown:L,onMouseLeave:F,onMouseUp:N,onDragLeave:ye,onTouchEnd:fe,onTouchMove:Ke,onTouchStart:re,ref:me,tabIndex:x?-1:v,type:O},D,I,{children:[s,de?e.jsx(hi,Q({ref:ve,center:d},H)):null]}))});function yi(t){return ut("MuiIconButton",t)}const Ci=Qe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),vi=["edge","children","className","color","disabled","disableFocusRipple","size"],ji=t=>{const{classes:i,disabled:n,color:a,edge:d,size:s}=t,c={root:["root",n&&"disabled",a!=="default"&&`color${oe(a)}`,d&&`edge${oe(d)}`,`size${oe(s)}`]};return wt(c,yi,i)},Ti=je(bi,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,n.color!=="default"&&i[`color${oe(n.color)}`],n.edge&&i[`edge${oe(n.edge)}`],i[`size${oe(n.size)}`]]}})(({theme:t,ownerState:i})=>Q({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:In(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},i.edge==="start"&&{marginLeft:i.size==="small"?-3:-12},i.edge==="end"&&{marginRight:i.size==="small"?-3:-12}),({theme:t,ownerState:i})=>{var n;const a=(n=(t.vars||t).palette)==null?void 0:n[i.color];return Q({},i.color==="inherit"&&{color:"inherit"},i.color!=="inherit"&&i.color!=="default"&&Q({color:a==null?void 0:a.main},!i.disableRipple&&{"&:hover":Q({},a&&{backgroundColor:t.vars?`rgba(${a.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:In(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),i.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},i.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Ci.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Si=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiIconButton"}),{edge:a=!1,children:d,className:s,color:c="default",disabled:l=!1,disableFocusRipple:x=!1,size:m="medium"}=n,g=et(n,vi),u=Q({},n,{edge:a,color:c,disabled:l,disableFocusRipple:x,size:m}),p=ji(u);return e.jsx(Ti,Q({className:xe(p.root,s),centerRipple:!0,focusRipple:!x,disabled:l,ref:i},g,{ownerState:u,children:d}))});function Ai(t){return ut("MuiLinearProgress",t)}Qe("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const ki=["className","color","value","valueBuffer","variant"];let Ue=t=>t,en,tn,nn,rn,an,on;const jt=4,Ei=Ie(en||(en=Ue`
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
`)),Mi=Ie(tn||(tn=Ue`
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
`)),Ii=Ie(nn||(nn=Ue`
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
`)),Ri=t=>{const{classes:i,variant:n,color:a}=t,d={root:["root",`color${oe(a)}`,n],dashed:["dashed",`dashedColor${oe(a)}`],bar1:["bar",`barColor${oe(a)}`,(n==="indeterminate"||n==="query")&&"bar1Indeterminate",n==="determinate"&&"bar1Determinate",n==="buffer"&&"bar1Buffer"],bar2:["bar",n!=="buffer"&&`barColor${oe(a)}`,n==="buffer"&&`color${oe(a)}`,(n==="indeterminate"||n==="query")&&"bar2Indeterminate",n==="buffer"&&"bar2Buffer"]};return wt(d,Ai,i)},Tt=(t,i)=>i==="inherit"?"currentColor":t.vars?t.vars.palette.LinearProgress[`${i}Bg`]:t.palette.mode==="light"?Uo(t.palette[i].main,.62):_o(t.palette[i].main,.5),Di=je("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,i[`color${oe(n.color)}`],i[n.variant]]}})(({ownerState:t,theme:i})=>Q({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:Tt(i,t.color)},t.color==="inherit"&&t.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},t.variant==="buffer"&&{backgroundColor:"transparent"},t.variant==="query"&&{transform:"rotate(180deg)"})),zi=je("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.dashed,i[`dashedColor${oe(n.color)}`]]}})(({ownerState:t,theme:i})=>{const n=Tt(i,t.color);return Q({position:"absolute",marginTop:0,height:"100%",width:"100%"},t.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},tt(rn||(rn=Ue`
    animation: ${0} 3s infinite linear;
  `),Ii)),Ni=je("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.bar,i[`barColor${oe(n.color)}`],(n.variant==="indeterminate"||n.variant==="query")&&i.bar1Indeterminate,n.variant==="determinate"&&i.bar1Determinate,n.variant==="buffer"&&i.bar1Buffer]}})(({ownerState:t,theme:i})=>Q({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:t.color==="inherit"?"currentColor":(i.vars||i).palette[t.color].main},t.variant==="determinate"&&{transition:`transform .${jt}s linear`},t.variant==="buffer"&&{zIndex:1,transition:`transform .${jt}s linear`}),({ownerState:t})=>(t.variant==="indeterminate"||t.variant==="query")&&tt(an||(an=Ue`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Ei)),Li=je("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.bar,i[`barColor${oe(n.color)}`],(n.variant==="indeterminate"||n.variant==="query")&&i.bar2Indeterminate,n.variant==="buffer"&&i.bar2Buffer]}})(({ownerState:t,theme:i})=>Q({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},t.variant!=="buffer"&&{backgroundColor:t.color==="inherit"?"currentColor":(i.vars||i).palette[t.color].main},t.color==="inherit"&&{opacity:.3},t.variant==="buffer"&&{backgroundColor:Tt(i,t.color),transition:`transform .${jt}s linear`}),({ownerState:t})=>(t.variant==="indeterminate"||t.variant==="query")&&tt(on||(on=Ue`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Mi)),Pi=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiLinearProgress"}),{className:a,color:d="primary",value:s,valueBuffer:c,variant:l="indeterminate"}=n,x=et(n,ki),m=Q({},n,{color:d,variant:l}),g=Ri(m),u=ni(),p={},f={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&s!==void 0){p["aria-valuenow"]=Math.round(s),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let h=s-100;u&&(h=-h),f.bar1.transform=`translateX(${h}%)`}if(l==="buffer"&&c!==void 0){let h=(c||0)-100;u&&(h=-h),f.bar2.transform=`translateX(${h}%)`}return e.jsxs(Di,Q({className:xe(g.root,a),ownerState:m,role:"progressbar"},p,{ref:i},x,{children:[l==="buffer"?e.jsx(zi,{className:g.dashed,ownerState:m}):null,e.jsx(Ni,{className:g.bar1,ownerState:m,style:f.bar1}),l==="determinate"?null:e.jsx(Li,{className:g.bar2,ownerState:m,style:f.bar2})]}))});function $i(t){return ut("MuiSkeleton",t)}Qe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Bi=["animation","className","component","height","style","variant","width"];let ct=t=>t,sn,ln,dn,cn;const Oi=t=>{const{classes:i,variant:n,animation:a,hasChildren:d,width:s,height:c}=t;return wt({root:["root",n,a,d&&"withChildren",d&&!s&&"fitContent",d&&!c&&"heightAuto"]},$i,i)},Fi=Ie(sn||(sn=ct`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Ui=Ie(ln||(ln=ct`
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
`)),_i=je("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,i[n.variant],n.animation!==!1&&i[n.animation],n.hasChildren&&i.withChildren,n.hasChildren&&!n.width&&i.fitContent,n.hasChildren&&!n.height&&i.heightAuto]}})(({theme:t,ownerState:i})=>{const n=ii(t.shape.borderRadius)||"px",a=ri(t.shape.borderRadius);return Q({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ei(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},i.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},i.variant==="circular"&&{borderRadius:"50%"},i.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},i.hasChildren&&{"& > *":{visibility:"hidden"}},i.hasChildren&&!i.width&&{maxWidth:"fit-content"},i.hasChildren&&!i.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&tt(dn||(dn=ct`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Fi),({ownerState:t,theme:i})=>t.animation==="wave"&&tt(cn||(cn=ct`
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
    `),Ui,(i.vars||i).palette.action.hover)),pt=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:d,component:s="span",height:c,style:l,variant:x="text",width:m}=n,g=et(n,Bi),u=Q({},n,{animation:a,component:s,variant:x,hasChildren:!!g.children}),p=Oi(u);return e.jsx(_i,Q({as:s,ref:i,className:xe(p.root,d),ownerState:u},g,{style:Q({width:m,height:c},l)}))}),pn=()=>(te(),e.jsxs(V,{children:[e.jsxs(Gi,{children:[e.jsxs(Vi,{children:[e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),e.jsxs(Wi,{children:[e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),e.jsx(V,{padding:"40px 0 40px 0",children:e.jsx(Ne,{type:Le.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),Gi=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Vi=r.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Wi=r.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Hi=()=>{var n,a;const t=te(),{aliasDetails:{aliasChainId:i}}=_(d=>d.admin);return e.jsxs(M,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ee,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(a=(n=nt[i])==null?void 0:n.label)==null?void 0:a.split(" ")[0]," Alias Network."]})," ",e.jsx(ee,{textAlign:"center",margin:"5px 0px 60px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[e.jsx($t,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(Bt,{margin:"auto 15px",textTransform:"none",color:t.color,size:"16px",weight:"600",children:"Processing"})]})]})},Ki=()=>{var a;Te();const t=te(),{switchChain:i}=Se(),{aliasDetails:{aliasChainId:n}}=_(d=>d.admin);return e.jsxs(M,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ee,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",e.jsx(Yi,{children:(a=nt[n])==null?void 0:a.label})," to start ",e.jsx("br",{}),"verifying your Channel Alias."]}),e.jsx(M,{width:"12.2em",self:"center",align:"center",margin:"100px auto 50px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",radius:"15px",padding:"20px 20px",onClick:()=>i(n),children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Change Network"})})})]})},Yi=r.b`
  color: #cf1c84;
`,Ji=({aliasEthAccount:t,setAliasVerified:i})=>{const n=te(),{account:a,provider:d,chainId:s}=Se(),c=d.getSigner(a),l=it(),x=new bt(nt[s].commAddress,yt.epnsComm,c),[m,g]=o.useState(""),[u,p]=o.useState(!1),f=t,h={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"}},T=async()=>{f==t&&y()},w=async()=>{const{aliasVerified:z}=await Wo({account:a,chainId:s}).then(b=>b?(l(i(b.is_alias_verified)),{aliasVerified:b.is_alias_verified}):{aliasVerified:null});return{aliasVerified:z}},y=()=>{g("Processing"),x.verifyChannelAlias(f).then(async z=>{console.debug(z),g("Transaction Sent! It usually takes 5mins to verify."),await z.wait(1),setTimeout(()=>{g("Transaction Mined!")},2e3),setTimeout(()=>{g("Loading...")},2e3);const b=setInterval(async()=>{const{aliasVerified:A}=await w();A&&(setTimeout(()=>{p(!0)},1e3),clearInterval(b),l(rt(0)))},5e3)}).catch(()=>{g("There was an error"),setTimeout(()=>{g("")},2e3)})};return e.jsxs(M,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsx(Re,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),m===""&&e.jsx(ee,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:a}),m===""&&le.appEnv!=="prod"&&e.jsxs(Re,{padding:"10px",margin:"10px",borderRadius:G.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",e.jsx(Go,{href:h[s].url,target:"_blank",children:h[s].label})," ","to proceed."]}),!u&&(m?e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx($t,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ee,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:m})]}):e.jsx(M,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",radius:"15px",padding:"20px 10px",onClick:T,children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Verify Alias Address"})})})),u&&e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Vo,{color:"#30CC8B",size:30}),e.jsx(ee,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},qi=({aliasEthAccount:t,setAliasVerified:i})=>{const{processingState:n}=_(a=>a.channelCreation);return e.jsxs(ke,{children:[e.jsxs(Xi,{children:[e.jsxs(At,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[e.jsx("div",{children:"Waiting for Setup"}),e.jsx(St,{type:n>=1?"active":"inactive"})]}),e.jsxs(At,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[e.jsx("div",{children:"Change Network"}),e.jsx(St,{type:n>=2?"active":"inactive"})]}),e.jsxs(At,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[e.jsx("div",{children:"Verify Alias Network"}),e.jsx(St,{type:n>=3?"active":"inactive"})]}),e.jsx(Qi,{})]}),n===1&&e.jsx(Hi,{}),n===2&&e.jsx(Ki,{}),n===3&&e.jsx(Ji,{aliasEthAccount:t,setAliasVerified:i})]})},Xi=r.div`
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
`,St=r.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:t})=>t==="active"&&Ae`
      background: #e20880;
    `};
`,Qi=r.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,At=r.div`
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

  ${({type:t})=>t==="active"&&Ae`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:t})=>t==="active"&&Ae`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:t})=>t==="inactive"&&Ae`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,xn=({heading:t,subHeading:i})=>{const n=te();return e.jsx(at,{theme:n,children:e.jsxs(Zi,{children:[e.jsx(er,{style:{color:n.default.color},children:t}),e.jsx(tr,{style:{color:n.modalMessageColor},children:i})]})})},Zi=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,er=r.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,tr=r.h4`
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
`,kt=Z.forwardRef(({title:t},i)=>{const n=te();return e.jsx(at,{theme:n,children:e.jsxs(nr,{children:[e.jsx(ir,{style:{color:n.modalMessageColor},children:t}),e.jsx(rr,{ref:i,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),nr=r.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,ir=r.h4`
  font-family: FK Grotesk Neu;
  font-size: ${t=>t.fontSize||"0.95rem"};
  font-weight: ${t=>t.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${t=>t.marginBottom||"3%"};
`,rr=r(Pe)`
  box-sizing: border-box;
  width: 100%;
`,ar=({onConfirm:t,onClose:i,toastObject:n})=>{const a=Z.useRef();te();const[d,s]=Z.useState(!1),c=()=>!d&&i(),l=Z.useRef(null);$e(l,()=>c());const x=()=>{var g;s(!0);const m=(g=a==null?void 0:a.current)==null?void 0:g.value;t(m).then(async u=>{console.debug(u),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:p=>e.jsx(Be,{size:p,color:"green"})}),i()}).catch(u=>{console.error({err:u}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:p=>e.jsx(X,{size:p,color:"red"})})}).finally(()=>{s(!1)})};return e.jsxs(or,{ref:l,children:[e.jsx(xn,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),e.jsx(kt,{ref:a,title:"Delegate Address"}),e.jsx(_n,{text:"Add Delegate",onClick:x,isLoading:d})]})},or=r.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${P.laptop}){
    width:50vw;
  }
  @media(${P.mobileL}){
    width:95vw;
  }
`,sr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",lr=t=>o.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),dr=({onClose:t,onConfirm:i,toastObject:n})=>{const a=Z.useRef(),d=Z.useRef(),[s,c]=Z.useState(!1);te();const l=()=>!s&&t(),x=Z.useRef(null);$e(x,()=>l());const m=()=>{var p,f;const g=(p=d==null?void 0:d.current)==null?void 0:p.value,u=(f=a==null?void 0:a.current)==null?void 0:f.value;if(c(!0),g==""||u==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:h=>e.jsx(X,{size:h,color:"red"})}),setTimeout(()=>{c(!1)},500);return}else if(parseInt(g)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:h=>e.jsx(X,{size:h,color:"red"})}),setTimeout(()=>{c(!1)},500);return}i(g,u).then(async h=>{console.debug(h),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:T=>e.jsx(Be,{size:T,color:"green"})}),t()}).catch(h=>{console.error(h),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:T=>e.jsx(X,{size:T,color:"red"})})}).finally(()=>{c(!1)})};return e.jsxs(cr,{ref:x,children:[e.jsx(xn,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),e.jsx(kt,{ref:a,title:"Subgraph ID"}),e.jsx(kt,{ref:d,title:"Poll Time (in seconds)"}),e.jsx(_n,{text:"Add Subgraph",onClick:m,isLoading:s})]})},cr=r.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${P.laptop}){
    width:50vw;
  }
  @media(${P.mobileL}){
    width:95vw;
  }
`,pr=t=>o.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),o.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),xr=t=>o.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),hr=({onConfirm:t,onClose:i,toastObject:n})=>{const a=te(),d=it(),{channelDetails:s}=_(p=>p.admin),{CHANNNEL_DEACTIVATED_STATE:c}=_(p=>p.channels),[l,x]=Z.useState(!1),m=()=>!l&&i(),g=Z.useRef(null);$e(g,()=>m());const u=()=>{x(!0),t().then(async p=>{console.debug(p),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:f=>e.jsx(X,{size:f,color:"red"})}),await p.wait(1),console.info("Transaction Mined!"),d(Ft({...s,channelState:c})),x(!1),i()}).catch(p=>{console.error("!!!Error deactivateChannel() --> %o",p),console.error({err:p}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:f=>e.jsx(X,{size:f,color:"red"})}),x(!1)})};return e.jsx(at,{theme:a,children:e.jsx(gr,{ref:g,children:l?e.jsxs(mr,{children:[e.jsx(Rn,{size:42,color:G.COLORS.PRIMARY_PINK,type:Ot.PROCESSING}),e.jsx(ur,{children:"Verifying"})]}):e.jsxs(e.Fragment,{children:[e.jsx(fr,{style:{color:a.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),e.jsxs(wr,{children:[e.jsx(pr,{width:36,height:36,onClick:m}),e.jsx(br,{onClick:u,children:e.jsx(xr,{})})]})]})})})},gr=r.div`
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
`,mr=r(ne)`
  flex-direction: row;
  //   margin-top:33px;
`,ur=r.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,fr=r.div`
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
`;r.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;const wr=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,br=r.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;r.img`
  height: 36px;
  width: 17px;
`;const yr="DD MMM, YYYY",Cr=({onConfirm:t,onClose:i,toastObject:n})=>{const a=te(),{chainId:d,account:s,provider:c}=Se(),l=it(),{channelDetails:x,canVerify:m,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:u}}=_(I=>I.admin),{CHANNEL_ACTIVE_STATE:p,CHANNNEL_DEACTIVATED_STATE:f}=_(I=>I.channels),[h,T]=o.useState("");let{channelState:w}=x;w||(w=x.activation_status);const y=w===p,z=w===f,[b,A]=o.useState(!1),[S,$]=o.useState(!1),[k,W]=o.useState(0),B=()=>!b&&i(),C=o.useRef(null);$e(C,()=>B());const v=le.coreContractChain===d;Oe(600),o.useEffect(()=>{!x||!v||async function(){const I=x.channelStartBlock.toString(),R=await new Dn(le.coreRPC).getBlock(+I),E=zn(R.timestamp*1e3);T(E.format(yr))}()},[x]),o.useEffect(()=>{!s||!c||async function(){const I=await Wn({address:s,provider:c,contractAddress:Ee.epnscore});W(parseInt(I));const R=parseInt(I);R>=50&&R!=0?$(!0):$(!1)}()},[s,c]);const H=async I=>{await Yt({noOfTokens:I,provider:c,account:s})},J=async()=>{if(A(!0),!c)return;const I=c.getSigner(s);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const R=await Hn({signer:I,contractAddress:Ee.epnscore,amount:50-k});console.debug("response",R),R&&(W(50),$(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Be,{size:E,color:"green"})}),A(!1))}catch(R){console.error(R),R.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:E=>e.jsx(X,{size:E,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:E=>e.jsx(X,{size:E,color:"red"})}),console.error("Error --> %o",R),console.error({err:R}))}A(!1)},O=async()=>{A(!0);try{const I=Ut("50",18),R=await t(I);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Be,{size:E,color:"green"})}),await R.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Be,{size:E,color:"green"})}),l(Ft({...x,channelState:p})),i(),A(!1)}catch(I){console.error("Error reactivateChannel",{err:I}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:R=>e.jsx(X,{size:R,color:"red"})}),A(!1)}};return e.jsx(at,{theme:a,children:e.jsxs(vr,{ref:C,children:[e.jsxs(jr,{children:[e.jsx(Tr,{children:"Reactivate Channel"}),e.jsx(Si,{onClick:B,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(Ko,{size:"1.5rem",style:{color:a.modalIconColor}})})]}),e.jsxs(Ar,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(kr,{src:x.icon}),e.jsxs(gn,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(Nr,{children:[x.name,m&&e.jsx(Er,{src:"/verify.png"})]}),e.jsxs(gn,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[v&&u&&!g||!v&&!g?e.jsx(Rr,{children:"Alias Network Setup Pending"}):e.jsxs(Sr,{justifyContent:"flex-start",children:[e.jsxs(Mr,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(Dr,{children:x.subscriber_count})]}),e.jsx(Ir,{active:y,children:y?"Active":z?"Deactivated":"Blocked"})]}),h&&e.jsxs(zr,{children:["Created ",h]})]})]})]}),e.jsxs(Lr,{children:[e.jsx(Pr,{children:"Channel reactivation fee"}),e.jsxs(V,{flex:"0",children:[S?e.jsx($r,{src:js}):null,e.jsxs(Br,{children:[50," PUSH"]})]})]}),e.jsx(Kt,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:H}),b?e.jsxs(Fr,{children:[e.jsx(Rn,{size:42,color:G.COLORS.PRIMARY_PINK,type:Ot.PROCESSING}),e.jsx(Ur,{children:"Verifying Transaction"})]}):e.jsx(Or,{children:k>=50?e.jsx(un,{onClick:O,children:"Reactivate"}):e.jsx(un,{onClick:J,children:"Approve PUSH"})})]})})},vr=r.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${P.mobileL} {
    padding: 0.5rem;
  }
  @media (${P.laptop}) {
    width: 50vw;
  }
  @media (${P.mobileL}) {
    width: 95vw;
  }
`,jr=r(V)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${P.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${P.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Tr=r(Ho)`
  color: ${t=>t.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${P.laptop} {
    font-size: 1.2rem;
  }
  @media ${P.mobileL} {
    width: 85%;
  }
`,gn=r(ne)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Sr=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Ar=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,kr=r.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${P.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${P.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Er=r.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Mr=r.div`
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
  @media ${P.laptop} {
    width: 52px;
    height: 22px;
  }
`,mn=r.div`
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
  @media ${P.laptop} {
    padding: 1px 8px;
  }
`,Ir=r(mn)`
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
`,Rr=r(mn)`
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
`,Dr=r.span`
  font-weight: 400;
  font-size: 14px;
`,zr=r.div`
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
  @media ${P.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,Nr=r.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${t=>t.theme.color};
  @media ${P.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,Lr=r(V)`
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
  @media ${P.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,Pr=r.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${P.mobileL} {
    width: 100%;
    text-align: center;
  }
`,$r=r.img``,Br=r.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${P.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Or=r(V)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,un=r(De)`
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

  @media ${P.mobileL} {
    width: 80%;
  }
`,Fr=r(ne)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,Ur=r.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,_r=50,Gr=le.coreContractChain;function Vr({DropdownRef:t,isDropdownOpen:i,closeDropdown:n}){it();const{account:a,chainId:d}=Se(),{epnsWriteProvider:s,epnsCommWriteProvider:c}=_(q=>q.contracts),{channelDetails:l}=_(q=>q.admin),{CHANNNEL_DEACTIVATED_STATE:x,CHANNEL_BLOCKED_STATE:m}=_(q=>q.channels);_(q=>q.user),Z.useContext(Ct);const g=te(),{channelState:u}=l,p=Gr===d,f=Oe(425),{isModalOpen:h,showModal:T,ModalComponent:w}=ot(),{isModalOpen:y,showModal:z,ModalComponent:b}=ot(),{isModalOpen:A,showModal:S,ModalComponent:$}=ot(),k=i&&!h&&!y&&!A;$e(t,()=>k&&n()),Z.useState(!1),Z.useState(_r);const[W,B]=Z.useState(0),C=u===x,v=u===m,H=v||C;Z.useEffect(()=>{B(+Yo.formatBigNumberToMetric(l.poolContribution,!0))},[a,l.poolContribution]),Te();const J=()=>{v||(C?z():T())},O=Te(),I=s.reactivateChannel,R=Te(),E=()=>s.deactivateChannel(),ve=Te(),ue=async(q,we)=>{if(!(q==""||we=="")&&!(q<60))try{const K=q+"+"+we,Y=_t(K);return s.addSubGraph(Y)}catch(K){console.error(K)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Wr,{background:g,children:e.jsxs(Hr,{children:[le.appEnv!=="prod"&&e.jsx(fn,{disabled:H,onClick:()=>!H&&S(),children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(xt,{src:sr,alt:"cube"}),e.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),p&&e.jsx(fn,{isChannelDeactivated:C,onClick:J,children:e.jsx(Kr,{isChannelBlocked:v,isChannelDeactivated:C,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[v?e.jsx(xt,{src:hn,alt:"red-bell"}):C?e.jsx(xt,{src:lr,alt:"green-bell"}):e.jsx(xt,{src:hn,alt:"red-bell"}),e.jsx("div",{style:{width:"10px"}}),v?"Channel Blocked":C?"Activate Channel":"Deactivate Channel"]})})})]})})}),e.jsx(w,{InnerComponent:hr,onConfirm:E,toastObject:R,modalPosition:st.ON_ROOT}),e.jsx(b,{InnerComponent:Cr,onConfirm:I,toastObject:O,modalMargin:f?"10rem 1rem 0 1rem":"",modalPosition:st.ON_ROOT}),e.jsx($,{InnerComponent:dr,onConfirm:ue,toastObject:ve,modalPosition:st.ON_ROOT})]})}const Wr=r.div`
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
`,Hr=r.div`
  flex-direction: column;
  gap: 20px;
  display: ${t=>t.inactive?"none":"flex"};
`;r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,r.div`
  margin: 0px 10px;
`,r.div`
  text-decoration: underline;
  color: ${t=>t.isChannelDeactivated?"#674C9F":"#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;const fn=r.button`
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
`,Kr=r.div`
  color: ${t=>t.isChannelBlocked?"red":t.isChannelDeactivated?"#30CC8B":"red "};
`,xt=r.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function wn(){const t=Z.useRef(null),[i,n]=Z.useState(!1);te();const a=()=>{n(s=>!s)},d=()=>{n(!1)};return e.jsxs(V,{flex:"0",ref:t,children:[e.jsx(Yr,{active:i,onClick:a}),i&&e.jsx(Vr,{DropdownRef:t,isDropdownOpen:i,closeDropdown:d})]})}r.div`
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
`;const Yr=r(Jo)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${t=>t.active?"rotateZ(90deg)":"none"};
`;r(De)`
  width: 7rem;
  background: #cf1c84;
  color: #fff;
  z-index: 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 20px;
  border-radius: 8px;
  padding: 11px 10px;
  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 9px;
  }
`;const Jr="DD MMM, YYYY";function qr({isChannelExpired:t,setIsChannelExpired:i,showEditChannel:n,destroyChannel:a}){var Me,de,U;const{account:d,chainId:s}=Se(),{delegatees:c,channelDetails:l,canVerify:x,aliasDetails:{isAliasVerified:m,aliasAddrFromContract:g}}=_(L=>L.admin),{channelSettings:u}=_(L=>L.channels),{userPushSDKInstance:p}=_(L=>L.user),{handleConnectWallet:f}=o.useContext(Ct),{CHANNEL_ACTIVE_STATE:h,CHANNNEL_DEACTIVATED_STATE:T}=_(L=>L.channels),{processingState:w}=_(L=>L.channelCreation),[y,z]=o.useState([]),[b,A]=o.useState("");let{channelState:S}=l;S||(S=l.activation_status);const $=S===h,k=S===T,W=le.coreContractChain===s,B=Oe(600),[C,v]=o.useState([d]),[H,J]=o.useState(void 0);_(L=>L.contracts);const O=qo(),{isModalOpen:I,showModal:R,ModalComponent:E}=ot(),ve=Te(),ue=async()=>{p.signer||await f(),R()},q=async L=>p.channel.delegate.add(Gt(L,s)),we=l.expiryTime?Xo(((Me=l.expiryTime)==null?void 0:Me.toString())*1e3):"",K=l.expiryTime?Qo(((de=l.expiryTime)==null?void 0:de.toString())*1e3):!0,Y=l.expiryTime?Zo(((U=l.expiryTime)==null?void 0:U.toString())*1e3,14):"";o.useEffect(()=>{l.channelType==lt.TIMEBOUND&&(K||i(!0))},[K]),o.useEffect(()=>{!l||!x||async function(){let L=await Pn.getInstance().getChannelJsonAsync(l.verifiedBy);z(L)}()},[l,x]),o.useEffect(()=>{!l||!W||async function(){const L=l.channelStartBlock.toString(),ie=await new Dn(le.coreRPC).getBlock(+L),ye=zn(ie.timestamp*1e3);A(ye.format(Jr))}()},[l]),o.useEffect(()=>{d&&(!c||!c.length?J(d):J(W?c[0].channel:c[0].alias_address))},[c,d]),o.useEffect(()=>{d&&(async()=>{try{const L=Gt(d,s),ie=await p.channel.delegate.get({channel:L});if(ie){const ye=ie.map(N=>N);ye.unshift(d),v(ye)}}catch(L){console.error(L)}})()},[d,s]);const se=async L=>{let ie=p;if(!(!ie.signer&&(ie=await f(),!ie)))return ie.channel.delegate.remove(Gt(L,s))},be=()=>{O(ts.ChannelSettings)};return e.jsxs(ne,{children:[e.jsxs(Zr,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(ea,{src:l.icon}),e.jsxs(Et,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(ca,{children:[l.name,x&&e.jsx(ta,{src:"/verify.png"})]}),e.jsxs(Et,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[W&&g&&!m||!W&&!m?e.jsx(oa,{children:"Alias Network Setup Pending"}):e.jsxs(Qr,{justifyContent:"flex-start",children:[e.jsxs(ra,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(sa,{children:l.subscriber_count})]}),e.jsxs(aa,{active:$,children:[k&&e.jsx(Vt,{width:"12px",src:ys,margin:"0 5px 2px 0px",height:"30px"}),$?"Active":k?"Deactivated":"Blocked"]}),l.channelType==lt.TIMEBOUND&&!t&&e.jsxs(V,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(Vt,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(Re,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",we]})]}),l.channelType==lt.TIMEBOUND&&t&&e.jsxs(V,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(Vt,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(Re,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",we]})]})]}),b&&e.jsxs(la,{children:["Created ",b]})]})]})]}),B&&e.jsxs(V,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",children:[!t&&W&&e.jsx(xa,{onClick:n,children:"Edit Channel"}),!t&&e.jsx(wn,{}),t&&W&&e.jsx(Xr,{onClick:a,background:"#E93636",color:"#fff",height:"36px",width:"123px",borderRadius:"8px",fontSize:"14px",children:"Delete Channel"})]}),t&&e.jsx(ne,{alignItems:"flex-start",children:e.jsxs(yn,{margin:"25px 0 0 0",children:[e.jsx(Re,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",e.jsx(Re,{fontWeight:"600",children:Y})]})}),e.jsx(ne,{alignItems:"flex-start",children:e.jsx(yn,{children:l.info})}),x&&e.jsx(Et,{alignItems:"flex-start",padding:"5px 0px",children:e.jsx(pa,{children:e.jsxs(da,{children:[e.jsx("span",{children:"verified by:"}),e.jsx(na,{src:y.icon}),e.jsx(ia,{children:y.name})]})})}),w===0&&e.jsxs(ne,{children:[e.jsx(ke,{children:e.jsxs(Cn,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Gn,{title:"Notification Settings",description:"Customize notification preferences for users",Button:e.jsx(Is,{onClick:be})}),e.jsx(Vn,{account:d,isAddress:!1,items:u[d],isLoading:!1,onClickEmptyListButton:be,emptyListButtonTitle:"Add Setting"})]})}),e.jsx(ke,{children:e.jsxs(Cn,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Gn,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:e.jsx(Rs,{onClick:ue})}),e.jsx(Vn,{account:d,isAddress:!0,items:C,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:se,icon:e.jsx(es,{})}]})]})})]}),e.jsx(E,{InnerComponent:ar,onConfirm:q,toastObject:ve,modalPosition:st.ON_ROOT})]})}const Et=r(ne)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Xr=r(Nn)`
  height: ${t=>t.height||"100%"};
  width: ${t=>t.width||"100%"};
`,Qr=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Zr=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,ea=r.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${P.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,ta=r.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,na=r.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,ia=r.div``,ra=r.div`
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
`,bn=r.div`
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
`,aa=r(bn)`
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
`,oa=r(bn)`
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
`,sa=r.span`
  font-weight: 400;
  font-size: 14px;
`;r.div`
  display: flex;
  flex-direction: column;
  @media ${P.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const la=r.div`
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
`,da=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,ca=r.div`
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
`,pa=r.div`
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
`,yn=r.div`
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
`,xa=r(De)`
  width: fit-content;
  background: #d53a94;
  color: #fff;
  z-index: 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 9px;
  border-radius: 8px;
  padding: 10px 16px;
`,Cn=r(Ln)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
`,ha=({isToggleOn:t,onToggle:i})=>e.jsxs(ga,{children:[e.jsx(ma,{id:"toggle-switch",type:"checkbox",defaultChecked:t,onClick:i}),e.jsx(vn,{htmlFor:"toggle-switch"})]}),ga=r.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,vn=r.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 20px;
  border-radius: 15px;
  background: ${t=>t.theme.toggleInactiveBG};
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
`,ma=r.input`
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 20px;
  &:checked + ${vn} {
    background: ${t=>t.theme.toggleActiveBG};
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
`,He=({message:t})=>e.jsxs(V,{display:"flex",alignItems:"center",alignSelf:"flex-start",flexDirection:"row",margin:"7px 0px",children:[e.jsx($n,{color:"red",size:"20"}),e.jsx(Re,{fontSize:"14px",fontWeight:"400",margin:"0px 5px",color:"red",children:t})]}),Mt=le.coreContractChain,ua=le.allowedNetworks.map(t=>({label:nt[t].label,value:t})),fa=({channelName:t,channelExpiryDate:i,channelAlias:n,channelInfo:a,channelURL:d,chainDetails:s,errorInfo:c,setChannelAlias:l,setChainDetails:x,setChannelInfo:m,setChannelName:g,setChannelExpiryDate:u,setChannelURL:p,setStepFlow:f,setChannelInfoDone:h,setTxStatus:T,isAllFilledAndValid:w})=>{const y=te(),z=Oe(769),b=ns(new Date("2023-02-01T00:00:00.000"),90),[A,S]=o.useState(!0),$=k=>k.trim().length==0;return o.useEffect(()=>($(t)||$(a)||$(d)?S(!0):S(!1),()=>S(!0)),[t,a,d]),e.jsx(ke,{children:e.jsxs(wa,{children:[e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",height:"fit-content","min-height":"fit-content",children:[e.jsx(ze,{style:{color:y.color},children:"Channel Name"}),e.jsxs(ba,{children:[e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",height:"fit-content",children:[e.jsx(Pe,{required:!0,maxlength:"40",flex:"1",self:"stretch",align:"stretch",padding:"12px",height:"25px",weight:"400",size:"16px",bg:"white",radius:"12px",border:"1px solid #BAC4D6",value:t,onChange:k=>{g(k.target.value)}}),(c==null?void 0:c.name)&&e.jsx(He,{message:c==null?void 0:c.name})]}),e.jsx(is,{tooltipContent:"Timebound channels will be deleted after expiry",placementProps:z?{bottom:"-42px",transform:"translateX(6%)",padding:"8px 16px",background:y.default.bg,border:"1px solid rgba(173, 176, 190, 0.2)",color:y.tooltipTopSubHeading}:{bottom:"-63px",transform:"translateX(16%)",padding:"8px 16px",background:y.default.bg,border:"1px solid rgba(173, 176, 190, 0.2)",color:y.tooltipTopSubHeading},children:e.jsxs(ya,{children:[e.jsxs(V,{style:{justifyContent:"flex-start",maxWidth:"100%"},children:[e.jsx(ze,{style:{color:y.color},children:"Time Bound"}),b&&e.jsx(rs,{})]}),e.jsx(ha,{isToggleOn:i!==void 0,onToggle:()=>{if(i===void 0)return u(null);u(void 0)}})]})})]})]}),i!==void 0&&e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",margin:"30px 0px 0px 0px",children:[e.jsx(ze,{style:{color:y.color},children:"Channel Expiry Date"}),e.jsx(Ca,{children:e.jsx(va,{className:"date",value:i,onChange:u})}),(c==null?void 0:c.channelExpiryDate)&&e.jsx(He,{message:c==null?void 0:c.channelExpiryDate})]}),e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",margin:"30px 0px 0px 0px",children:[e.jsx(ze,{style:{color:y.color},children:"Network"}),e.jsx(ja,{children:e.jsx(Ta,{options:ua,onChange:k=>{x(k.value)},value:nt[s].label})})]}),s!=Mt?e.jsxs(M,{margin:"30px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(ze,{style:{color:y.color},children:"Channel Alias address"}),e.jsx(Pe,{required:!0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",bg:"white",height:"25px",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6",focusBorder:"1px solid #657795",radius:"12px",disabled:s===""||s===Mt,visibility:s===Mt?"hidden":"visible",value:n,onChange:k=>{l(k.target.value)}}),e.jsx(ee,{size:"13px",margin:"7px 0px 0px 0px",color:y.default.secondaryColor,children:"Make sure you own this address as verification will take place."}),(c==null?void 0:c.address)&&e.jsx(He,{message:c==null?void 0:c.address})]}):null,e.jsxs(M,{margin:"30px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",style:{marginTop:"30px",position:"relative"},children:[e.jsxs(M,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(ze,{style:{color:y.color},children:"Channel Description"}),e.jsx(ee,{color:y.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:250-a.length})]}),e.jsx(Bn,{required:!0,rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6",focusBorder:"1px solid #657795",radius:"12px",bg:"#fff",value:a,onChange:k=>{m(k.target.value.slice(0,250))},autocomplete:"off"}),e.jsx(ee,{size:"13px",margin:"7px 0px 0px 0px",color:y.default.secondaryColor,children:"Brief description of your channel."})]}),(c==null?void 0:c.description)&&e.jsx(He,{message:c==null?void 0:c.description}),e.jsxs(M,{margin:"30px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(ze,{style:{color:y.color},children:"Channel Website URL"}),e.jsx(Pe,{required:!0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",bg:"white",height:"25px",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6;",focusBorder:"1px solid #657795",radius:"12px",value:d,onChange:k=>{p(k.target.value)}})]}),(c==null?void 0:c.url)&&e.jsx(He,{message:c==null?void 0:c.url}),e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:"70px auto 50px auto",children:e.jsx(We,{bg:A?"#F4DCEA":"#CF1C84",color:A?"#CF1C84":"#fff",flex:"1",radius:"15px",padding:"20px 10px",onClick:()=>{w()&&(T(2),h(!0),f(1))},children:e.jsx(ee,{color:A?"#CF1C84":"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Next"})})})]})})},wa=r(M)`
  align-items: 'flex-start';
  padding: 40px 13% 0 13%;
  @media (max-width: 1350px) {
    padding: 40px 9% 0 9%;
  }
  @media (max-width: 1250px) {
    padding: 40px 4% 0 4%;
  }
  @media ${P.laptop} {
    padding: 20px 0 0 0;
  }
`,ba=r(V)`
  align-items: flex-start;
  height: fit-content;
  margin-top: 7px;
  @media ${P.tablet} {
    flex-direction: column;
  }
`,ze=r.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: normal;
  color: #1e1e1e;
`,ya=r(V)`
  margin-left: 1.3rem;
  padding: 12px 18px;
  cursor: pointer;
  flex: 1;
  align-items: center;
  border-radius: 15px;
  background: ${t=>t.theme.toggleContainerBG};
  @media ${P.tablet} {
    margin-left: 0;
    margin-top: 1.25rem;
  }
`,Ca=r.div`
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
  margin-top: ${t=>t.mttop?t.mttop:""};
  @media (max-width: 600px) {
    margin-top: ${t=>t.mtop?t.mtop:""};
  }
`,va=r(Ls)`
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
`,ja=r.div`
  margin-top: 7px;
  flex: 1;
  .is-open {
    margin-bottom: 110px;
  }
`,Ta=r(zs)`
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
`,Sa=({progress:t,processingInfo:i,progressInfo:n})=>{const a=te();return e.jsxs(ke,{children:[e.jsx(Aa,{children:e.jsx(ka,{children:n})}),e.jsx(Pi,{sx:{width:"30em",margin:"50px auto",color:"#cf1c84",height:"6px",borderRadius:"20px","@media (max-width:600px)":{width:"100%"}},color:"inherit",variant:"determinate",value:t}),e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"0px 0px",children:[e.jsx($t,{color:"#cf1c84",loading:!0,height:13,width:2.5}),e.jsx(Bt,{margin:"auto 15px",textTransform:"none",color:a.color,size:"16px",weight:"500",children:i})]})]})},Aa=r.div`
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
`,ka=r.div`
  padding: 0px 0px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 768px) and (max-width: 1700px) {
    padding: 10px 40px;
  }
`,Ea=({channelStakeFees:t,setStakeFeesChoosen:i,setProcessingInfo:n,handleCreateChannel:a})=>{const{loading:d,error:s,executeAsyncFunction:c}=$s(ks),{provider:l,account:x}=Se(),[m,g]=o.useState(0),[u,p]=o.useState(!1),f=Oe(600),h=async y=>{p(!0);const z=await Yt({noOfTokens:y,provider:l,account:x});n(z+"PUSH Tokens minted successfully!"),p(!1),g(z)},T=async()=>{const y=await Es({address:x,provider:l});g(y)},w=async()=>{await c({provider:l})};return o.useEffect(()=>{T()},[m]),e.jsx(o.Fragment,{children:e.jsxs(Na,{children:[e.jsxs(M,{self:"center",maxWidth:"800px",width:"100%",margin:"60px 0px 0px 0px",children:[e.jsxs(Ma,{children:[e.jsx("p",{children:"Amount for Staking"}),e.jsxs(Ia,{children:[e.jsxs("b",{children:[t," PUSH"]}),e.jsxs(Ra,{children:["Balance: ",m]})]})]}),u?e.jsx(Ne,{type:Le.SEAMLESS}):e.jsx(Kt,{onMintPushToken:h,noOfPushTokensToCheck:50}),e.jsxs(Da,{children:["Don't see Push token in your wallet?",e.jsx(za,{onClick:w,children:"Import Token "}),d&&e.jsx("span",{children:e.jsx(Ne,{type:Le.SEAMLESS,spinnerSize:20})})]})]}),e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:f?"70px auto 50px auto":"100px auto 50px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",flex:"1",radius:"15px",padding:"20px 10px",onClick:()=>{i(!0),a()},children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Create Channel"})})})]})})},Ma=r.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-radius: 20px;
  background-color: #f4f5fa;
  align-items: center;
  z-index: 1;

  @media ${P.tablet} {
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
`,Ia=r.div`
  display: flex;
  flex-direction: column;
`,Ra=r.div`
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
`,Da=r.div`
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
`,za=r(Re)`
  color: #d53a94;
  font-weight: 600;
  cursor: pointer;
  margin: 0px 5px;

  &:hover {
    text-decoration: underline;
  }
`,Na=r(M)`
  padding: 5px 0 0 0;
  self: stretch;
  align: flex-start;
  justify: center;
  width: 100%;
`,La=({croppedImage:t,view:i,imageSrc:n,imageType:a,processing:d,setCroppedImage:s,setView:c,setImageSrc:l,setImageType:x,setProcessingInfo:m,logoInfo:g,setStepFlow:u})=>{const p=o.useRef(),f=w=>{w.preventDefault()},h=w=>{w.preventDefault(),w.stopPropagation(),T(w.dataTransfer)},T=async(w,y)=>{if(s(void 0),c(!0),w==null?void 0:w.files[0]){var z=new FileReader;z.readAsDataURL(w==null?void 0:w.files[0]),z.onloadend=function(b){var A;l(z.result),x((A=w==null?void 0:w.files[0])==null?void 0:A.type)}}else return"Nothing...."};return e.jsxs($a,{children:[e.jsx(M,{align:"center",children:e.jsx(Bt,{color:" #657795",margin:"20px 0px",textTransform:"none",weight:"300",size:"15px",spacing:"normal",textAlign:"center",children:"Please upload a PNG, JPG. Crop the image to resize to 128px."})}),e.jsx(Ba,{className:"",children:e.jsx("div",{children:e.jsx("div",{onDragOver:w=>f(w),onDrop:w=>h(w),className:"bordered",children:e.jsxs("div",{className:"inner",children:[i?e.jsx("div",{className:"crop-div",children:t?e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:t,className:"croppedImage"})}):e.jsx(Kn,{className:"cropper",imageSrc:n,imageType:a,onImageCropped:w=>s(w),ref:p})}):e.jsx(as,{size:100,color:"#8C99B0",style:{marginTop:"30px"}}),e.jsxs(M,{display:"flex",direction:"row",align:"center",children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:w=>T(w.target),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})})}),(g==null?void 0:g.length)>0&&e.jsx(M,{margin:"30px 0px 30px 0px",flex:"1",padding:"10px 5px",radius:"10px",bg:"#F5F5FA",children:e.jsx("div",{style:{color:"#CF1C84"},children:g})}),i&&(t?e.jsx(On,{flex:"1",direction:"column",margin:"0px",justify:"center",size:"1.1rem",onSubmit:w=>{w.preventDefault(),u(2)},children:e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:"100px auto 50px auto",children:e.jsxs(We,{bg:"#e20880",color:"#fff",flex:"1",radius:"15px",padding:"20px 10px",disabled:d==1,children:[d==1&&e.jsx(Ne,{type:Le.SEAMLESS,spinnerSize:24,spinnerColor:"#fff"}),d!=1&&e.jsx(Pe,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",line:"22px",size:"16px",type:"submit",value:"Next"})]})})}):e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:"100px auto 50px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",flex:"1",radius:"15px",padding:"20px 10px",onClick:()=>{p.current.showCroppedImage()},children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Crop Image"})})}))]})};r.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;const Pa=r.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
`;r.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,r(Pa)`
  background: #e20880;
`,r.div`
  width: 40%;
  align-items: center;
  margin: 1rem auto;
`;const $a=r.div`
  margin: 50px auto 0px auto;
  width: 55%;
  @media (max-width: 768px) {
    min-width: 100%;
    margin: 10px auto 0px auto;
  }
  @media (max-width: 1224px) {
    width: 75%;
  }
`,Ba=r.div`
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
`,ht=(t,i,n)=>(n=n??1,t.length>=n&&t.length<=i),It=t=>{var i=new RegExp("^((?:https|http):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!i.test(t)},Oa=t=>os(t),Fa=50,Rt=le.coreContractChain,jn=le.coreContractChain;function Ua(){const{account:t,provider:i,chainId:n}=Se(),{userPushSDKInstance:a}=_(D=>D.user),{handleConnectWallet:d}=o.useContext(Ct),s=te(),c=jn===n,[l,x]=o.useState(0),[m,g]=o.useState(""),[u,p]=o.useState(!1),[f,h]=o.useState(!1),[T,w]=o.useState(!1),[y,z]=o.useState(jn),[b,A]=o.useState(""),[S,$]=o.useState(void 0),[k,W]=o.useState(""),[B,C]=o.useState(""),[v,H]=o.useState(""),[J,O]=o.useState(void 0),[I,R]=o.useState(Fa),[E,ve]=o.useState(""),[ue,q]=o.useState(2),[we,K]=o.useState(0),[Y,se]=o.useState(""),[be,Me]=o.useState(""),[de,U]=o.useState({name:"",description:"",address:"",url:""}),[L,ie]=o.useState(!1),[ye,N]=o.useState(void 0),[F,re]=o.useState(null),[fe,Ke]=o.useState(void 0),[ae,ce]=o.useState(0),ge=Te();o.useEffect(()=>{c&&(async()=>{let D=await new bt(Ee.pushToken,yt.pushToken,i).allowance(t,Ee.epnscore);D=D==null?void 0:D.toString();const me=ps(D);ve(me)})()},[]);const Ye=()=>{ce(3),x(0),p(!0)},Ce=D=>D.trim().length==0,gt=()=>(U(""),Ce(b)||Ce(B)||Ce(v)||Ce(k)&&y!==Rt?(Ce(b)&&U(D=>({...D,name:"Please, enter the channel name."})),Ce(B)&&U(D=>({...D,description:"Please, enter the channel description"})),Ce(v)&&U(D=>({...D,url:"Please, enter the channel url"})),Ce(k)&&y!==Rt&&U(D=>({...D,address:"Please, enter the channel address"})),!1):ht(b,125)?ht(v,125)?y!==Rt&&!Oa(k)?(U(D=>({...D,address:"Channel Alias address is invalid! Please enter a valid address!"})),!1):It(v)?!0:(U(D=>({...D,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(U(D=>({...D,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(U(D=>({...D,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Ge=async D=>{if(!a.signer){d();return}if(!gt())return ge.showMessageToast({toastTitle:"Error",toastMessage:`${de.name||de.description||de.address||de.url||"Please enter the channel details"}`,toastType:"ERROR",getToastIcon:pe=>e.jsx(X,{size:pe,color:"red"})}),!1;if(!J)return Me("Please upload logo of the channel"),ge.showMessageToast({toastTitle:"Error",toastMessage:"Please upload logo of the channel",toastType:"ERROR",getToastIcon:pe=>e.jsx(X,{size:pe,color:"red"})}),!1;w(!0),Ye(),x(1);let me={name:b,info:B,url:v,icon:J,aliasDetails:Fn({chainId:y,address:k})};console.debug(me),me=JSON.stringify(me),K(0),console.debug(`input is ${me}`),g("Loading..."),se("Please wait, payload is getting uploaded to IPFS."),K(5);let Je=await Un(me);console.debug("IPFS storagePointer:",Je),ge.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),g("Payload Uploaded"),se("Please complete the transaction in your wallet to continue."),K(10);var qe=i.getSigner(t);console.debug(qe);let j=new bt(Ee.pushToken,yt.pushToken,qe);const Xe=Ut(I.toString(),18);try{if(E<50){var Pt=j.approve(Ee.epnscore,Xe);const mt=await Pt;console.debug(mt),console.debug("waiting for tx to finish"),K(30),await i.waitForTransaction(mt.hash)}let pe=new bt(Ee.epnscore,yt.epnscore,qe),Ve=lt.GENERAL;const Po="1+"+Je,$o=_t(Po);K(50);let An=0;S&&(An=S.getTime()/1e3,Ve=lt.TIMEBOUND);const kn=await pe.createChannelWithPUSH(Ve,$o,Xe,An,{gasLimit:6e5});console.debug(kn),console.debug("Check: "+t),(await i.waitForTransaction(kn.hash)).status===0?(ge.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in creating the channel",toastType:"ERROR",getToastIcon:mt=>e.jsx(X,{size:mt,color:"red"})}),x(3),q(0),ce(1),w(!1),p(!1),setTimeout(()=>{x(0)},500)):(x(3),K(60),se("Please wait while we confirm the transaction."),g("Transaction Confirmed"),setTimeout(()=>{K(80),se("Creating your channel, Aligning pixels, adjusting padding... This may take some time."),g("Redirecting... Please do not refresh"),K(90)},2e3),setTimeout(()=>{K(100),window.location.reload()},2e3))}catch(pe){pe.code===4001||pe.code==="ACTION_REJECTED"?(ge.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:Ve=>e.jsx(X,{size:Ve,color:"red"})}),ce(2),x(0),p(!1)):(ge.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in creating the channel",toastType:"ERROR",getToastIcon:Ve=>e.jsx(X,{size:Ve,color:"red"})}),console.error("Error --> %o",pe),console.error({err:pe}),x(3),K(0),se("There was an error in creating the Channel"),g("Kindly Contact support@epns.io to resolve the issue."))}};return o.useEffect(()=>{fe&&(console.debug("Image cropped",fe),Yn(fe,function(D){const me=Jn(D);console.debug("response",me),me.success&&(console.debug("Cropped Image....",fe),O(fe))}))},[fe]),e.jsx(at,{theme:s,children:e.jsxs(_a,{children:[e.jsx(Ga,{children:e.jsxs(ls,{className:"content",children:[e.jsxs(M,{align:"center",className:"center",children:[e.jsx(Va,{children:e.jsx(ee,{className:"text",children:"Create Your Channel"})}),e.jsx(ee,{className:"body-text",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]}),ue===0&&e.jsxs(qa,{children:[e.jsx("div",{children:"Transaction failed due to one of the following reasons:"}),e.jsx("p",{children:"1. There is not enough PUSH in your wallet."}),e.jsx("p",{children:"2. Gas price increased due to network congestion. Adjust gas limit manually."})]})]})}),c?e.jsxs(e.Fragment,{children:[!(l===1||l===3)&&e.jsx(ke,{children:e.jsxs(Ja,{children:[e.jsxs(zt,{type:ae>=0?"active":"inactive",active:ae==0?"active":"inactive",onClick:()=>ce(0),children:[e.jsx("div",{children:"Channel Info"}),e.jsx(Dt,{type:ae>=0?"active":"inactive"})]}),e.jsxs(zt,{type:ae>=1?"active":"inactive",active:ae==1?"active":"inactive",onClick:()=>ce(1),children:[e.jsx("div",{children:"Upload Logo"}),e.jsx(Dt,{type:ae>=1?"active":"inactive"})]}),e.jsxs(zt,{type:ae>=2?"active":"inactive",active:ae==2?"active":"inactive",onClick:()=>ce(2),children:[e.jsx("div",{children:"Staking Info"}),e.jsx(Dt,{type:ae>=2?"active":"inactive"})]}),e.jsx(Wa,{})]})}),ae===0&&e.jsxs(ne,{children:[e.jsx(fa,{setStepFlow:ce,channelName:b,channelExpiryDate:S,channelAlias:k,channelInfo:B,channelURL:v,chainDetails:y,setChannelAlias:W,setChainDetails:z,setChannelInfo:C,setChannelName:A,setChannelExpiryDate:$,setChannelURL:H,setChannelInfoDone:w,setTxStatus:q,errorInfo:de,isAllFilledAndValid:gt}),l===1?e.jsx(Ne,{type:Le.STANDALONE,overlay:Wt.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),ae===1&&e.jsxs(ne,{children:[e.jsx(La,{croppedImage:fe,view:L,imageSrc:ye,imageType:F,processing:l,setCroppedImage:Ke,setView:ie,setImageSrc:N,setImageType:re,setProcessingInfo:g,logoInfo:be,setStepFlow:ce}),l===1?e.jsx(Ne,{type:Le.STANDALONE,overlay:Wt.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),ae===2&&e.jsxs(ne,{children:[e.jsx(Ea,{channelStakeFees:I,setStakeFeesChoosen:h,setProcessingInfo:g,handleCreateChannel:Ge}),l===1?e.jsx(Ne,{type:Le.STANDALONE,overlay:Wt.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),(l===1||l===3)&&e.jsx(Sa,{progress:we,progressInfo:Y,processingInfo:m})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ha,{children:e.jsxs("p",{children:["Please select ",ds[le.coreContractChain]," Network in your Wallet to create a channel."]})}),e.jsxs(Ka,{"text-align":"center",children:["You will be asked to change your network to the Alias Network after ",e.jsx("br",{}),"channel creation is complete."]}),e.jsxs(Ya,{href:"https://docs.epns.io/developers/developer-zone/create-your-notif-channel/alias-on-polygon-network",target:"_blank",children:[e.jsx("p",{children:"What is an Alias Network?"}),e.jsx(cs,{})]})]})]})})}const Dt=r.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:t})=>t==="active"&&Ae`
      background: #e20880;
    `};

  ${({type:t})=>t==="inactive"&&Ae``};
`,_a=r.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;r.div`
  color: white;
  text-align: center;
  background: #f22e2e;
  flex: 1;
  padding: 10px 10px;
  margin: 10px 0px;
  font-weight: 500;
  border-radius: 10px;
`,r.a`
  text-decoration: underline;
  color: white;
`;const Ga=r(ke)`
  margin: 0px 0px 40px;

  .content {
    padding: 10px 20px 10px;
    .center {
      .body-text {
        color: ${t=>t.theme.default.secondaryColor};
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
`,Va=r(ss)`
  text-transform: capitalize;
  margin: 20px 0px;

  .text {
    font-weight: 400;
    font-size: 32px;
    color: ${t=>t.theme.color};
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
`,Wa=r.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Ha=r.div`
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
`,Ka=r.p`
  text-transform: none;
  margin-top: 60px;
  color: #657795;
  line-height: 21px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`,Ya=r.a`
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
`,zt=r.div`
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

  ${({type:t})=>t==="active"&&Ae`
      color: #e20880;
      @media (max-width: 768px) {
        width: 100%;
      }
    `};

  ${({active:t})=>t==="active"&&Ae`
      color: #e20880;
      @media (max-width: 768px) {
        width: 100%;
      }
    `};

  ${({active:t})=>t==="inactive"&&Ae`
      @media (max-width: 768px) {
        width: 40%;
        div {
          font-size: 0px;
          @media (max-width: 768px) {
          }
        }
      }
    `};
`,Ja=r.div`
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
`,qa=r.div`
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
`,Xa=({channelName:t,setChannelName:i,channelInfo:n,setChannelInfo:a,channelURL:d,setChannelURL:s,editChannel:c,errorInfo:l,setErrorInfo:x})=>{const m=te(),g=({message:p})=>e.jsxs(M,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[e.jsx($n,{color:"red",size:"20"}),e.jsx(ee,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:p})]}),u=p=>{const f=p.target.value;It(f)?(x(""),s(f)):(x(h=>({...h,url:"Channel URL is invalid! Please enter a valid url!"})),s(f))};return e.jsx(Qa,{children:e.jsx(Za,{onSubmit:c,children:e.jsxs(eo,{children:[e.jsxs(M,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Nt,{style:{color:m.editChannelPrimaryText},children:"Channel Name"}),e.jsx(M,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:e.jsx(Pe,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:m.editChannelInputbg,color:m.editChannelPrimaryText,border:m.textAreaBorderColor,focusBorder:m.textAreaFocusBorder,radius:"12px",height:"25px",value:t,onChange:p=>{i(p.target.value)}})})]}),(l==null?void 0:l.name)&&e.jsx(g,{message:l==null?void 0:l.name}),e.jsxs(M,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(M,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(Nt,{style:{color:m.editChannelPrimaryText},children:"Channel Description"}),e.jsx(ee,{color:m.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-n.length})]}),e.jsx(Bn,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:m.textAreaBorderColor,focusBorder:m.textAreaFocusBorder,radius:"12px",bg:m.editChannelInputbg,color:m.editChannelPrimaryText,value:n,onChange:p=>{a(p.target.value.slice(0,250))},autocomplete:"off"})]}),(l==null?void 0:l.description)&&e.jsx(g,{message:l==null?void 0:l.description}),e.jsxs(M,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Nt,{style:{color:m.editChannelPrimaryText},children:"Channel Website URL"}),e.jsx(Pe,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:m.editChannelInputbg,color:m.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:m.textAreaBorderColor,focusBorder:m.textAreaFocusBorder,radius:"12px",value:d,onChange:p=>{u(p)}})]}),(l==null?void 0:l.url)&&e.jsx(g,{message:l==null?void 0:l.url})]})})})},Qa=r(ke)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,Za=r(On)`
  height: inherit;
`,Nt=r.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,eo=r(M)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,to="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",no=({onClose:t,InnerComponentProps:i})=>{const{setChannelLogo:n,croppedImage:a,setCroppedImage:d,imageSrc:s,setImageSrc:c,imageType:l,setImageType:x}=i,m=o.useRef(),g=o.useRef(null);$e(g,()=>{t()});const u=h=>{h.preventDefault()},p=h=>{h.preventDefault(),h.stopPropagation(),f(h.dataTransfer,"transfer",h)},f=async(h,T,w)=>{if(w.preventDefault(),d(void 0),h==null?void 0:h.files[0]){var y=new FileReader;y.readAsDataURL(h==null?void 0:h.files[0]),y.onloadend=function(z){var b;c(y.result),x((b=h==null?void 0:h.files[0])==null?void 0:b.type)}}};return e.jsxs(io,{ref:g,children:[e.jsx(oo,{children:e.jsx(so,{onClick:t})}),e.jsxs(ro,{children:[e.jsx(ao,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),e.jsx(ho,{className:"",children:e.jsx("div",{onDragOver:h=>u(h),onDrop:h=>p(h),className:"bordered",children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"crop-div",children:a?e.jsx("div",{className:"crop-innderdiv",children:e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:a,className:"croppedImage"})})}):e.jsx("div",{className:"crop-innderdiv",children:e.jsx(Kn,{className:"cropper",imageSrc:s,imageType:l,onImageCropped:h=>d(h),width:"128px",height:"128px",ref:m})})}),e.jsxs(lo,{children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:h=>f(h.target,"target",h),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),e.jsx(co,{children:a?e.jsx(e.Fragment,{children:e.jsx(xo,{onClick:()=>{n(a),t()},children:"Upload Image"})}):e.jsx(e.Fragment,{children:e.jsx(po,{onClick:()=>{m.current.showCroppedImage()},children:"Crop Image"})})})]})]})},io=r.div``,ro=r.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,ao=r.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${t=>t.theme.modalTextColor};
`,oo=r.div`
  text-align: end;
  width: 100%;
`,so=r(xs)`
  cursor: pointer;
  font-size: 20px;
  color: ${t=>t.theme.modalTextColor};
`,lo=r(Ln)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,co=r(ne)``,po=r(De)`
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
`,xo=r(De)`
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
  padding: 16px 18px;
  width: 12rem;
`,ho=r.div`
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
`,_e=t=>t.trim().length==0;function go({closeEditChannel:t,UploadLogoComponent:i,displayUplaodLogoModal:n}){const{account:a,provider:d}=Se(),{channelDetails:s,aliasDetails:{isAliasVerified:c,aliasAddrFromContract:l}}=_(N=>N.admin),{epnsReadProvider:x,epnsWriteProvider:m}=_(N=>N.contracts),g=50,[u,p]=o.useState(s==null?void 0:s.name),[f,h]=o.useState(s==null?void 0:s.info),[T,w]=o.useState(s==null?void 0:s.url),[y,z]=o.useState(s==null?void 0:s.icon),[b,A]=o.useState(s==null?void 0:s.icon),[S,$]=o.useState(s==null?void 0:s.icon),[k,W]=o.useState(S),[B,C]=o.useState(null),[v,H]=o.useState(!1),[J,O]=o.useState({name:"",description:"",address:"",url:""}),[I,R]=o.useState(!1),[E,ve]=o.useState(0),[ue,q]=o.useState(0),[we,K]=o.useState(!1),Y=Te();o.useEffect(()=>{a&&async function(){const N=await x.channelUpdateCounter(a);ve(g*(Number(N)+1))}()},[a]),o.useEffect(()=>{!a||!d||async function(){const N=await Wn({address:a,provider:d,contractAddress:Ee.epnscore});q(parseInt(N));const F=parseInt(N);F>=E&&F!=0?H(!0):H(!1)}()},[a,d]);const se=async()=>{if(R(!0),!d)return;const N=d.getSigner(a);Y.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const F=await Hn({signer:N,contractAddress:Ee.epnscore,amount:E-ue});console.debug("response",F),F&&(R(!1),q(E),H(!0),Y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:re=>e.jsx(Be,{size:re,color:"green"})}))}catch(F){console.error(F),F.code=="ACTION_REJECTED"?Y.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}):(Y.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}),console.error("Error --> %o",F),console.error({err:F}))}R(!1)},be=()=>{K(!1)},Me=Oe(600),de=o.useRef(null);$e(de,()=>{be()});const U=()=>(O(""),_e(u)||_e(f)||_e(T)?(_e(u)&&O(N=>({...N,name:"Please, enter the channel name."})),_e(f)&&O(N=>({...N,description:"Please, enter the channel description"})),_e(T)&&O(N=>({...N,url:"Please, enter the channel url"})),!1):ht(u,125)?ht(T,125)?It(T)?!0:(O(N=>({...N,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(O(N=>({...N,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(O(N=>({...N,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),L=()=>!(u!==(s==null?void 0:s.name)||f!==(s==null?void 0:s.info)||T!==(s==null?void 0:s.url)||b!==(s==null?void 0:s.icon)),ie=async N=>{try{if(!U())return;R(!0);const F=JSON.stringify({name:u,info:f,url:T,icon:b,aliasDetails:s.aliasDetails||Fn({chainId:parseInt(s.chain_id),address:s.address})});console.debug(F);const re=await Un(F);console.debug("IPFS storagePointer:",re);const fe="1+"+re,Ke=_t(fe),ae=Ut(E.toString(),18);Y.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const ce=await m.updateChannelMeta(a,Ke,ae,{gasLimit:1e6});console.debug(ce),await ce.wait(),R(!1),Y.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:ge=>e.jsx(Be,{size:ge,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(F){R(!1),console.error(F.message),F.code=="ACTION_REJECTED"?Y.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}):(Y.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}),console.error("Error --> %o",F),console.error({err:F}))}},ye=async N=>{await Yt({noOfTokens:N,provider:d,account:a})};return o.useEffect(()=>{S&&(console.debug("Image cropped",S),Yn(S,function(N){const F=Jn(N);console.debug("response",F),F.success&&(console.debug("Cropped Image....",S),A(S))}))},[S]),e.jsxs(mo,{ref:de,children:[e.jsx(i,{InnerComponent:no,InnerComponentProps:{setChannelLogo:z,channelLogo:y,croppedImage:S,setCroppedImage:$,setChannelFile:A,imageSrc:k,setImageSrc:W,imageType:B,setImageType:C,errorInfo:J,setErrorInfo:O},modalPosition:st.ON_PARENT}),e.jsxs(uo,{children:[e.jsxs(bo,{children:[e.jsx(yo,{src:y}),e.jsx(fo,{onClick:()=>{n(),K(!0)},children:"Upload Logo"})]}),!Me&&e.jsx(Co,{}),e.jsx(Xa,{channelName:u,setChannelName:p,channelInfo:f,setChannelInfo:h,channelURL:T,setChannelURL:w,editChannel:ie,errorInfo:J,setErrorInfo:O})]}),e.jsxs(vo,{children:[e.jsxs("div",{children:[e.jsx(jo,{children:"Channel edit fee"}),e.jsx(To,{children:"Editing channel details requires fees to be deposited"})]}),e.jsxs(V,{flex:"0",children:[v?e.jsx(wo,{src:to}):null,e.jsxs(So,{children:[E," PUSH"]})]})]}),e.jsx(Kt,{noOfPushTokensToCheck:E,containerProps:{width:"100%"},onMintPushToken:ye}),I?e.jsx(e.Fragment,{children:e.jsxs(Ao,{children:[e.jsx(Spinner,{size:42,color:G.COLORS.PRIMARY_PINK,type:Ot.PROCESSING}),e.jsx(ko,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Eo,{children:[e.jsx(Mo,{onClick:t,children:"Cancel"}),ue>=E?e.jsx(Lt,{disabled:L(),style:{background:L()?" #F4DCEA":"#CF1C84"},onClick:ie,children:"Save Changes"}):e.jsx(Lt,{onClick:se,children:"Approve PUSH"})]})})]})}const mo=r(ne)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,uo=r(ne)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,fo=r(De)`
  border-radius: 8px;
  background: ${t=>t.theme.logoBtnBg};
  color: ${t=>t.theme.logoBtnColor};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 12px;
`,wo=r.img``,bo=r(V)`
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
`,yo=r.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${P.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Co=r.div`
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
`,vo=r(ne)`
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
`,jo=r.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,To=r.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,So=r.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ao=r(ne)`
  flex-direction: row;
  margin-top: 33px;
`,ko=r.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Eo=r(V)`
  justify-content: end;
  margin-top: 35px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Lt=r(De)`
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

  @media (max-width: 425px) {
    width: -webkit-fill-available;
  }
`,Mo=r(Lt)`
    margin-right:14px;
    background:${t=>t.theme.default.bg};
    color:${t=>t.theme.logoBtnColor};
    border:1px solid #CF1C84;

    @media (max-width:425px){
        margin-right:0px;
        margin-top:10px;
    }

    &:hover{
        color:#AC106C;
        border:border: 1px solid #AC106C;
        background:transparent;
        opacity:1;
    }

    &:after{
        background:white;
    }
`,Io=10;let Tn=null;const Ro=()=>{te();const{account:t,chainId:i}=Se(),{channelDetails:n,delegatees:a,aliasDetails:{aliasAddr:d,aliasEthAddr:s,isAliasVerified:c,aliasAddrFromContract:l}}=_(C=>C.admin),{processingState:x}=_(C=>C.channelCreation),{epnsWriteProvider:m}=_(C=>C.contracts);_(C=>C.user),o.useContext(Ct);const g=n&&n!=="unfetched",u=Te(),p=it(),[f,h]=o.useState(!1);o.useState(!0);const[T,w]=o.useState(!1),y=le.coreContractChain===i,z=Oe(600);o.useEffect(()=>{if(!y||!n||l||n==="unfetched")return;const{address:C,chainId:v}=hs(n);C?(p(gs(C)),p(ms(v))):p(rt(0))},[n,l]);const b=async C=>{let{aliasAddress:v=null,isAliasVerified:H=null}=await Pn.getInstance().getChannelDetailsFromAddress(C);return v=="NULL"&&(v=null),{aliasAddress:v,aliasVerified:H}};o.useEffect(()=>{!y||!l||x===0||(Tn=setInterval(async()=>{const{aliasAddress:C,aliasVerified:v}=await b(t);C?(p(us(C)),v?(p(Ht(!0)),p(rt(0))):(p(rt(2)),p(Ht(!1)))):x!=0&&x!=1&&p(rt(1))},Io*1e3))},[l]),d!==null&&clearInterval(Tn);const A=async()=>{try{u.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await m.destroyTimeBoundChannel(t,{gasLimit:1e6});console.debug(C),console.debug("Check: "+t),await C.wait(),u.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:v=>e.jsx(X,{size:v,color:"green"})}),p(Ft(null))}catch(C){console.error(C),C.code=="ACTION_REJECTED"?u.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:v=>e.jsx(X,{size:v,color:"red"})}):u.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:v=>e.jsx(X,{size:v,color:"red"})})}},S=()=>{w(!0)},$=()=>{w(!1)},{isModalOpen:k,showModal:W,ModalComponent:B}=ot();return e.jsxs(V,{children:[(n==="unfetched"||x===null)&&e.jsx(pn,{}),n!=="unfetched"&&e.jsxs(ne,{justifyContent:x===0&&"flex-start",height:"fit-content",children:[!n&&x===0&&e.jsx(Ua,{}),g&&x!==null&&e.jsx(e.Fragment,{children:T?e.jsx(go,{closeEditChannel:$,UploadLogoComponent:B,displayUplaodLogoModal:W,isUploadLogoModalOpen:k}):e.jsxs(e.Fragment,{children:[n&&!z&&e.jsxs(V,{position:"absolute",top:"0",right:"0",zIndex:"1",children:[!f&&y&&e.jsx(zo,{onClick:S,children:"Edit Channel"}),!f&&e.jsx(wn,{}),f&&y&&e.jsx(Do,{onClick:A,background:"#E93636",color:"#fff",height:"36px",width:"123px",borderRadius:"8px",fontSize:"14px",children:"Delete Channel"})]}),n?e.jsx(qr,{isChannelExpired:f,setIsChannelExpired:h,showEditChannel:S,destroyChannel:A}):""]})}),x!==0&&x!==null&&g&&!T&&e.jsx(e.Fragment,{children:e.jsx(qi,{aliasEthAccount:s,setAliasVerified:Ht})})]})]})},Do=r(Nn)`
  height: ${t=>t.height||"100%"};
  width: ${t=>t.width||"100%"};
`,zo=r(De)`
  width: 7rem;
  background: #cf1c84;
  color: #fff;
  z-index: 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 20px;
  border-radius: 8px;
  padding: 11px 10px;
  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 9px;
  }
`;le.coreContractChain;function No(){fs.pageview("/channel_dashboard");const[t,i]=Z.useState(!0),[n,a]=Z.useState(null),d=()=>a(null);return Z.useEffect(()=>{n&&d()},[n]),e.jsxs(Lo,{children:[t?e.jsx(Ro,{}):e.jsx(pn,{}),n&&e.jsx(Cs,{notification:n,clearToast:d})]})}const Lo=r(ke)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${G.ADJUSTMENTS.RADIUS.LARGE} ${G.ADJUSTMENTS.RADIUS.LARGE}
    ${G.ADJUSTMENTS.RADIUS.LARGE} ${G.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${G.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${Fe.MINI_MODULES.DESKTOP.RIGHT} - ${Fe.MINI_MODULES.DESKTOP.LEFT} -
      ${G.ADJUSTMENTS.PADDING.HUGE} - ${G.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${G.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${G.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${P.laptop} {
    margin: ${G.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${G.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${Fe.MINI_MODULES.TABLET.RIGHT} - ${Fe.MINI_MODULES.TABLET.LEFT} -
        ${G.ADJUSTMENTS.PADDING.BIG} - ${G.ADJUSTMENTS.PADDING.BIG}
    );
  }

  @media ${P.mobileL} {
    margin: ${G.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${G.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${Fe.MINI_MODULES.MOBILE.RIGHT} - ${Fe.MINI_MODULES.MOBILE.LEFT} -
        ${G.ADJUSTMENTS.PADDING.DEFAULT} - ${G.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${G.CONSTANTS.HEADER_HEIGHT}px - ${Fe.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${G.ADJUSTMENTS.RADIUS.LARGE} ${G.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;r.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Sn;qn=()=>e.jsx(Sn,{children:e.jsx(No,{})}),Sn=r(ws)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Gs as __tla,qn as default};
