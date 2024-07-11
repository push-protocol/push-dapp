import{r as o,h3 as En,h4 as Fo,h5 as xe,m as e,h6 as Qe,h7 as Ie,h8 as je,h9 as Ze,ec as et,ha as Oo,eb as Q,hb as ut,hc as Mn,hd as Uo,he as ft,hf as wt,hg as oe,hh as In,hi as tt,hj as _o,hk as Go,q as r,X as te,eI as V,dj as ze,dk as $e,de as _,I as M,d2 as ee,eF as nt,_ as Pt,gh as Bt,eG as Te,x as Se,d8 as We,dd as it,e5 as bt,e4 as yt,d6 as Re,z as le,c$ as G,d9 as Vo,hl as Wo,hm as rt,hn as Ko,D as Ae,n as ke,L as at,R as Z,dl as Le,d1 as L,dD as Pe,eX as Be,eJ as X,d4 as ne,dJ as Rn,dK as Ft,ho as Ot,fg as Ho,dq as De,f7 as Fe,eE as Dn,hp as Nn,e6 as Ee,f2 as Yo,fZ as Ut,ew as Ct,dF as ot,g4 as Jo,dG as st,f$ as _t,hq as qo,dE as zn,f3 as $n,db as Xo,hr as Qo,hs as Zo,ht as es,g0 as lt,f1 as Ln,er as Gt,ds as Vt,hu as ts,A as ns,hv as Pn,hw as is,fz as rs,hx as as,dm as Bn,hy as os,dg as Fn,gk as ss,d5 as ls,o as ds,y as cs,hz as ps,dM as Wt,fT as xs,hA as On,f_ as Un,hB as hs,hC as gs,hD as ms,hE as us,hF as fs,hG as Kt,d0 as Oe,d3 as ws,S as bs,__tla as ys}from"./index-CAoYq-L-.js";import{S as Cs,N as vs,__tla as js}from"./RedCircle-RtGMdwfG.js";import{M as _n,S as Ts,F as Ht,C as Gn,a as Vn,__tla as Ss}from"./ChannelInfoList-ROXlyyXo.js";import{a as As,__tla as ks}from"./Tag-CHfM4ATy.js";import{g as Wn,m as Yt,a as Kn,i as Es,c as Ms,__tla as Is}from"./UniswapWidget-D9dfjcNJ.js";import{M as Rs,a as Ds,__tla as Ns}from"./EmptyNotificationSettings-Db95DOqj.js";import{D as zs,__tla as $s}from"./index-6EcYLEoh.js";import{D as Ls,__tla as Ps}from"./entry-BO_EgjDc.js";import{I as Hn,t as Yn,h as Jn,__tla as Bs}from"./LogoSizeHelper-CkFd--hF.js";import{__tla as Fs}from"./TransitionGroupContext-CPCiKQ4e.js";import{__tla as Os}from"./slicedToArray-C_DoOpUZ.js";import{__tla as Us}from"./index.es-C0cAJ-Ub.js";import"./browser-CeceZ__e.js";import{__tla as _s}from"./index.esm-BKLGm-qa.js";let qn,Gs=Promise.all([(()=>{try{return ys}catch{}})(),(()=>{try{return js}catch{}})(),(()=>{try{return Ss}catch{}})(),(()=>{try{return ks}catch{}})(),(()=>{try{return Is}catch{}})(),(()=>{try{return Ns}catch{}})(),(()=>{try{return $s}catch{}})(),(()=>{try{return Ps}catch{}})(),(()=>{try{return Bs}catch{}})(),(()=>{try{return Fs}catch{}})(),(()=>{try{return Os}catch{}})(),(()=>{try{return Us}catch{}})(),(()=>{try{return _s}catch{}})()]).then(async()=>{const Xn=t=>{const[i,n]=o.useState(!1),[a,d]=o.useState(null),s=o.useCallback(async(l,...p)=>{n(!0);try{const h=await l(...p);return n(!1),h}catch(h){throw n(!1),d(h),h}},[]),c=o.useCallback(async(...l)=>{try{return await s(t,...l)}catch(p){throw console.error(p),p}},[t,s]);return{loading:i,error:a,executeAsyncFunction:c}};function Qn(t,i=0,n=1){return Fo(t,i,n)}function Zn(t){t=t.slice(1);const i=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(i);return n&&n[0].length===1&&(n=n.map(a=>a+a)),n?`rgb${n.length===4?"a":""}(${n.map((a,d)=>d<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function Jt(t){if(t.type)return t;if(t.charAt(0)==="#")return Jt(Zn(t));const i=t.indexOf("("),n=t.substring(0,i);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(En(9,t));let a=t.substring(i+1,t.length-1),d;if(n==="color"){if(a=a.split(" "),d=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(d)===-1)throw new Error(En(10,d))}else a=a.split(",");return a=a.map(s=>parseFloat(s)),{type:n,values:a,colorSpace:d}}function ei(t){const{type:i,colorSpace:n}=t;let{values:a}=t;return i.indexOf("rgb")!==-1?a=a.map((d,s)=>s<3?parseInt(d,10):d):i.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),i.indexOf("color")!==-1?a=`${n} ${a.join(" ")}`:a=`${a.join(", ")}`,`${i}(${a})`}function ti(t,i){return t=Jt(t),i=Qn(i),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${i}`:t.values[3]=i,ei(t)}const ni=o.createContext(),ii=()=>o.useContext(ni)??!1;function ri(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ai(t){return parseFloat(t)}function oi(t){const{className:i,classes:n,pulsate:a=!1,rippleX:d,rippleY:s,rippleSize:c,in:l,onExited:p,timeout:h}=t,[m,u]=o.useState(!1),x=xe(i,n.ripple,n.rippleVisible,a&&n.ripplePulsate),f={width:c,height:c,top:-(c/2)+s,left:-(c/2)+d},g=xe(n.child,m&&n.childLeaving,a&&n.childPulsate);return!l&&!m&&u(!0),o.useEffect(()=>{if(!l&&p!=null){const T=setTimeout(p,h);return()=>{clearTimeout(T)}}},[p,l,h]),e.jsx("span",{className:x,style:f,children:e.jsx("span",{className:g})})}const he=Qe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),si=["center","classes","className"];let dt=t=>t,qt,Xt,Qt,Zt;const vt=550,li=80,di=Ie(qt||(qt=dt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ci=Ie(Xt||(Xt=dt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),pi=Ie(Qt||(Qt=dt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),xi=je("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),hi=je(oi,{name:"MuiTouchRipple",slot:"Ripple"})(Zt||(Zt=dt`
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
`),he.rippleVisible,di,vt,({theme:t})=>t.transitions.easing.easeInOut,he.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,he.child,he.childLeaving,ci,vt,({theme:t})=>t.transitions.easing.easeInOut,he.childPulsate,pi,({theme:t})=>t.transitions.easing.easeInOut),gi=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiTouchRipple"}),{center:a=!1,classes:d={},className:s}=n,c=et(n,si),[l,p]=o.useState([]),h=o.useRef(0),m=o.useRef(null);o.useEffect(()=>{m.current&&(m.current(),m.current=null)},[l]);const u=o.useRef(!1),x=Oo(),f=o.useRef(null),g=o.useRef(null),T=o.useCallback(b=>{const{pulsate:A,rippleX:S,rippleY:P,rippleSize:k,cb:W}=b;p(B=>[...B,e.jsx(hi,{classes:{ripple:xe(d.ripple,he.ripple),rippleVisible:xe(d.rippleVisible,he.rippleVisible),ripplePulsate:xe(d.ripplePulsate,he.ripplePulsate),child:xe(d.child,he.child),childLeaving:xe(d.childLeaving,he.childLeaving),childPulsate:xe(d.childPulsate,he.childPulsate)},timeout:vt,pulsate:A,rippleX:S,rippleY:P,rippleSize:k},h.current)]),h.current+=1,m.current=W},[d]),w=o.useCallback((b={},A={},S=()=>{})=>{const{pulsate:P=!1,center:k=a||A.pulsate,fakeElement:W=!1}=A;if((b==null?void 0:b.type)==="mousedown"&&u.current){u.current=!1;return}(b==null?void 0:b.type)==="touchstart"&&(u.current=!0);const B=W?null:g.current,C=B?B.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,K,J;if(k||b===void 0||b.clientX===0&&b.clientY===0||!b.clientX&&!b.touches)v=Math.round(C.width/2),K=Math.round(C.height/2);else{const{clientX:F,clientY:I}=b.touches&&b.touches.length>0?b.touches[0]:b;v=Math.round(F-C.left),K=Math.round(I-C.top)}if(k)J=Math.sqrt((2*C.width**2+C.height**2)/3),J%2===0&&(J+=1);else{const F=Math.max(Math.abs((B?B.clientWidth:0)-v),v)*2+2,I=Math.max(Math.abs((B?B.clientHeight:0)-K),K)*2+2;J=Math.sqrt(F**2+I**2)}b!=null&&b.touches?f.current===null&&(f.current=()=>{T({pulsate:P,rippleX:v,rippleY:K,rippleSize:J,cb:S})},x.start(li,()=>{f.current&&(f.current(),f.current=null)})):T({pulsate:P,rippleX:v,rippleY:K,rippleSize:J,cb:S})},[a,T,x]),y=o.useCallback(()=>{w({},{pulsate:!0})},[w]),N=o.useCallback((b,A)=>{if(x.clear(),(b==null?void 0:b.type)==="touchend"&&f.current){f.current(),f.current=null,x.start(0,()=>{N(b,A)});return}f.current=null,p(S=>S.length>0?S.slice(1):S),m.current=A},[x]);return o.useImperativeHandle(i,()=>({pulsate:y,start:w,stop:N}),[y,w,N]),e.jsx(xi,Q({className:xe(he.root,d.root,s),ref:g},c,{children:e.jsx(As,{component:null,exit:!0,children:l})}))});function mi(t){return ut("MuiButtonBase",t)}const ui=Qe("MuiButtonBase",["root","disabled","focusVisible"]),fi=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],wi=t=>{const{disabled:i,focusVisible:n,focusVisibleClassName:a,classes:d}=t,s=wt({root:["root",i&&"disabled",n&&"focusVisible"]},mi,d);return n&&a&&(s.root+=` ${a}`),s},bi=je("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,i)=>i.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ui.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),yi=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiButtonBase"}),{action:a,centerRipple:d=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:h=!1,disableTouchRipple:m=!1,focusRipple:u=!1,LinkComponent:x="a",onBlur:f,onClick:g,onContextMenu:T,onDragLeave:w,onFocus:y,onFocusVisible:N,onKeyDown:b,onKeyUp:A,onMouseDown:S,onMouseLeave:P,onMouseUp:k,onTouchEnd:W,onTouchMove:B,onTouchStart:C,tabIndex:v=0,TouchRippleProps:K,touchRippleRef:J,type:F}=n,I=et(n,fi),R=o.useRef(null),E=o.useRef(null),ve=Mn(E,J),{isFocusVisibleRef:ue,onFocus:q,onBlur:we,ref:H}=Uo(),[Y,se]=o.useState(!1);p&&Y&&se(!1),o.useImperativeHandle(a,()=>({focusVisible:()=>{se(!0),R.current.focus()}}),[]);const[be,Me]=o.useState(!1);o.useEffect(()=>{Me(!0)},[]);const de=be&&!h&&!p;o.useEffect(()=>{Y&&u&&!h&&be&&E.current.pulsate()},[h,u,Y,be]);function U(j,Xe,Lt=m){return ft(pe=>(Xe&&Xe(pe),!Lt&&E.current&&E.current[j](pe),!0))}const $=U("start",S),ie=U("stop",T),ye=U("stop",w),z=U("stop",k),O=U("stop",j=>{Y&&j.preventDefault(),P&&P(j)}),re=U("start",C),fe=U("stop",W),He=U("stop",B),ae=U("stop",j=>{we(j),ue.current===!1&&se(!1),f&&f(j)},!1),ce=ft(j=>{R.current||(R.current=j.currentTarget),q(j),ue.current===!0&&(se(!0),N&&N(j)),y&&y(j)}),ge=()=>{const j=R.current;return l&&l!=="button"&&!(j.tagName==="A"&&j.href)},Ye=o.useRef(!1),Ce=ft(j=>{u&&!Ye.current&&Y&&E.current&&j.key===" "&&(Ye.current=!0,E.current.stop(j,()=>{E.current.start(j)})),j.target===j.currentTarget&&ge()&&j.key===" "&&j.preventDefault(),b&&b(j),j.target===j.currentTarget&&ge()&&j.key==="Enter"&&!p&&(j.preventDefault(),g&&g(j))}),gt=ft(j=>{u&&j.key===" "&&E.current&&Y&&!j.defaultPrevented&&(Ye.current=!1,E.current.stop(j,()=>{E.current.pulsate(j)})),A&&A(j),g&&j.target===j.currentTarget&&ge()&&j.key===" "&&!j.defaultPrevented&&g(j)});let Ge=l;Ge==="button"&&(I.href||I.to)&&(Ge=x);const D={};Ge==="button"?(D.type=F===void 0?"button":F,D.disabled=p):(!I.href&&!I.to&&(D.role="button"),p&&(D["aria-disabled"]=p));const me=Mn(i,H,R),Je=Q({},n,{centerRipple:d,component:l,disabled:p,disableRipple:h,disableTouchRipple:m,focusRipple:u,tabIndex:v,focusVisible:Y}),qe=wi(Je);return e.jsxs(bi,Q({as:Ge,className:xe(qe.root,c),ownerState:Je,onBlur:ae,onClick:g,onContextMenu:ie,onFocus:ce,onKeyDown:Ce,onKeyUp:gt,onMouseDown:$,onMouseLeave:O,onMouseUp:z,onDragLeave:ye,onTouchEnd:fe,onTouchMove:He,onTouchStart:re,ref:me,tabIndex:p?-1:v,type:F},D,I,{children:[s,de?e.jsx(gi,Q({ref:ve,center:d},K)):null]}))});function Ci(t){return ut("MuiIconButton",t)}const vi=Qe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ji=["edge","children","className","color","disabled","disableFocusRipple","size"],Ti=t=>{const{classes:i,disabled:n,color:a,edge:d,size:s}=t,c={root:["root",n&&"disabled",a!=="default"&&`color${oe(a)}`,d&&`edge${oe(d)}`,`size${oe(s)}`]};return wt(c,Ci,i)},Si=je(yi,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,n.color!=="default"&&i[`color${oe(n.color)}`],n.edge&&i[`edge${oe(n.edge)}`],i[`size${oe(n.size)}`]]}})(({theme:t,ownerState:i})=>Q({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:In(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},i.edge==="start"&&{marginLeft:i.size==="small"?-3:-12},i.edge==="end"&&{marginRight:i.size==="small"?-3:-12}),({theme:t,ownerState:i})=>{var n;const a=(n=(t.vars||t).palette)==null?void 0:n[i.color];return Q({},i.color==="inherit"&&{color:"inherit"},i.color!=="inherit"&&i.color!=="default"&&Q({color:a==null?void 0:a.main},!i.disableRipple&&{"&:hover":Q({},a&&{backgroundColor:t.vars?`rgba(${a.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:In(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),i.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},i.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${vi.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Ai=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiIconButton"}),{edge:a=!1,children:d,className:s,color:c="default",disabled:l=!1,disableFocusRipple:p=!1,size:h="medium"}=n,m=et(n,ji),u=Q({},n,{edge:a,color:c,disabled:l,disableFocusRipple:p,size:h}),x=Ti(u);return e.jsx(Si,Q({className:xe(x.root,s),centerRipple:!0,focusRipple:!p,disabled:l,ref:i},m,{ownerState:u,children:d}))});function ki(t){return ut("MuiLinearProgress",t)}Qe("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Ei=["className","color","value","valueBuffer","variant"];let Ue=t=>t,en,tn,nn,rn,an,on;const jt=4,Mi=Ie(en||(en=Ue`
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
`)),Ii=Ie(tn||(tn=Ue`
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
`)),Ri=Ie(nn||(nn=Ue`
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
`)),Di=t=>{const{classes:i,variant:n,color:a}=t,d={root:["root",`color${oe(a)}`,n],dashed:["dashed",`dashedColor${oe(a)}`],bar1:["bar",`barColor${oe(a)}`,(n==="indeterminate"||n==="query")&&"bar1Indeterminate",n==="determinate"&&"bar1Determinate",n==="buffer"&&"bar1Buffer"],bar2:["bar",n!=="buffer"&&`barColor${oe(a)}`,n==="buffer"&&`color${oe(a)}`,(n==="indeterminate"||n==="query")&&"bar2Indeterminate",n==="buffer"&&"bar2Buffer"]};return wt(d,ki,i)},Tt=(t,i)=>i==="inherit"?"currentColor":t.vars?t.vars.palette.LinearProgress[`${i}Bg`]:t.palette.mode==="light"?_o(t.palette[i].main,.62):Go(t.palette[i].main,.5),Ni=je("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,i[`color${oe(n.color)}`],i[n.variant]]}})(({ownerState:t,theme:i})=>Q({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:Tt(i,t.color)},t.color==="inherit"&&t.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},t.variant==="buffer"&&{backgroundColor:"transparent"},t.variant==="query"&&{transform:"rotate(180deg)"})),zi=je("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.dashed,i[`dashedColor${oe(n.color)}`]]}})(({ownerState:t,theme:i})=>{const n=Tt(i,t.color);return Q({position:"absolute",marginTop:0,height:"100%",width:"100%"},t.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},tt(rn||(rn=Ue`
    animation: ${0} 3s infinite linear;
  `),Ri)),$i=je("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.bar,i[`barColor${oe(n.color)}`],(n.variant==="indeterminate"||n.variant==="query")&&i.bar1Indeterminate,n.variant==="determinate"&&i.bar1Determinate,n.variant==="buffer"&&i.bar1Buffer]}})(({ownerState:t,theme:i})=>Q({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:t.color==="inherit"?"currentColor":(i.vars||i).palette[t.color].main},t.variant==="determinate"&&{transition:`transform .${jt}s linear`},t.variant==="buffer"&&{zIndex:1,transition:`transform .${jt}s linear`}),({ownerState:t})=>(t.variant==="indeterminate"||t.variant==="query")&&tt(an||(an=Ue`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Mi)),Li=je("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.bar,i[`barColor${oe(n.color)}`],(n.variant==="indeterminate"||n.variant==="query")&&i.bar2Indeterminate,n.variant==="buffer"&&i.bar2Buffer]}})(({ownerState:t,theme:i})=>Q({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},t.variant!=="buffer"&&{backgroundColor:t.color==="inherit"?"currentColor":(i.vars||i).palette[t.color].main},t.color==="inherit"&&{opacity:.3},t.variant==="buffer"&&{backgroundColor:Tt(i,t.color),transition:`transform .${jt}s linear`}),({ownerState:t})=>(t.variant==="indeterminate"||t.variant==="query")&&tt(on||(on=Ue`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Ii)),Pi=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiLinearProgress"}),{className:a,color:d="primary",value:s,valueBuffer:c,variant:l="indeterminate"}=n,p=et(n,Ei),h=Q({},n,{color:d,variant:l}),m=Di(h),u=ii(),x={},f={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&s!==void 0){x["aria-valuenow"]=Math.round(s),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let g=s-100;u&&(g=-g),f.bar1.transform=`translateX(${g}%)`}if(l==="buffer"&&c!==void 0){let g=(c||0)-100;u&&(g=-g),f.bar2.transform=`translateX(${g}%)`}return e.jsxs(Ni,Q({className:xe(m.root,a),ownerState:h,role:"progressbar"},x,{ref:i},p,{children:[l==="buffer"?e.jsx(zi,{className:m.dashed,ownerState:h}):null,e.jsx($i,{className:m.bar1,ownerState:h,style:f.bar1}),l==="determinate"?null:e.jsx(Li,{className:m.bar2,ownerState:h,style:f.bar2})]}))});function Bi(t){return ut("MuiSkeleton",t)}Qe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Fi=["animation","className","component","height","style","variant","width"];let ct=t=>t,sn,ln,dn,cn;const Oi=t=>{const{classes:i,variant:n,animation:a,hasChildren:d,width:s,height:c}=t;return wt({root:["root",n,a,d&&"withChildren",d&&!s&&"fitContent",d&&!c&&"heightAuto"]},Bi,i)},Ui=Ie(sn||(sn=ct`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),_i=Ie(ln||(ln=ct`
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
`)),Gi=je("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,i[n.variant],n.animation!==!1&&i[n.animation],n.hasChildren&&i.withChildren,n.hasChildren&&!n.width&&i.fitContent,n.hasChildren&&!n.height&&i.heightAuto]}})(({theme:t,ownerState:i})=>{const n=ri(t.shape.borderRadius)||"px",a=ai(t.shape.borderRadius);return Q({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ti(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},i.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},i.variant==="circular"&&{borderRadius:"50%"},i.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},i.hasChildren&&{"& > *":{visibility:"hidden"}},i.hasChildren&&!i.width&&{maxWidth:"fit-content"},i.hasChildren&&!i.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&tt(dn||(dn=ct`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Ui),({ownerState:t,theme:i})=>t.animation==="wave"&&tt(cn||(cn=ct`
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
    `),_i,(i.vars||i).palette.action.hover)),pt=o.forwardRef(function(t,i){const n=Ze({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:d,component:s="span",height:c,style:l,variant:p="text",width:h}=n,m=et(n,Fi),u=Q({},n,{animation:a,component:s,variant:p,hasChildren:!!m.children}),x=Oi(u);return e.jsx(Gi,Q({as:s,ref:i,className:xe(x.root,d),ownerState:u},m,{style:Q({width:h,height:c},l)}))}),pn=()=>(te(),e.jsxs(V,{children:[e.jsxs(Vi,{children:[e.jsxs(Wi,{children:[e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),e.jsxs(Ki,{children:[e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),e.jsx(pt,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),e.jsx(V,{padding:"40px 0 40px 0",children:e.jsx(ze,{type:$e.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),Vi=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Wi=r.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Ki=r.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Hi=()=>{var n,a;const t=te(),{aliasDetails:{aliasChainId:i}}=_(d=>d.admin);return e.jsxs(M,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ee,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(a=(n=nt[i])==null?void 0:n.label)==null?void 0:a.split(" ")[0]," Alias Network."]})," ",e.jsx(ee,{textAlign:"center",margin:"5px 0px 60px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[e.jsx(Pt,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(Bt,{margin:"auto 15px",textTransform:"none",color:t.color,size:"16px",weight:"600",children:"Processing"})]})]})},Yi=()=>{var a;Te();const t=te(),{switchChain:i}=Se(),{aliasDetails:{aliasChainId:n}}=_(d=>d.admin);return e.jsxs(M,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ee,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",e.jsx(Ji,{children:(a=nt[n])==null?void 0:a.label})," to start ",e.jsx("br",{}),"verifying your Channel Alias."]}),e.jsx(M,{width:"12.2em",self:"center",align:"center",margin:"100px auto 50px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",radius:"15px",padding:"20px 20px",onClick:()=>i(n),children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Change Network"})})})]})},Ji=r.b`
  color: #cf1c84;
`,qi=({aliasEthAccount:t,setAliasVerified:i})=>{const n=te(),{account:a,provider:d,chainId:s}=Se(),c=d.getSigner(a),l=it(),p=new bt(nt[s].commAddress,yt.epnsComm,c),[h,m]=o.useState(""),[u,x]=o.useState(!1),f=t,g={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"}},T=async()=>{f==t&&y()},w=async()=>{const{aliasVerified:N}=await Ko({account:a,chainId:s}).then(b=>b?(l(i(b.is_alias_verified)),{aliasVerified:b.is_alias_verified}):{aliasVerified:null});return{aliasVerified:N}},y=()=>{m("Processing"),p.verifyChannelAlias(f).then(async N=>{console.debug(N),m("Transaction Sent! It usually takes 5mins to verify."),await N.wait(1),setTimeout(()=>{m("Transaction Mined!")},2e3),setTimeout(()=>{m("Loading...")},2e3);const b=setInterval(async()=>{const{aliasVerified:A}=await w();A&&(setTimeout(()=>{x(!0)},1e3),clearInterval(b),l(rt(0)))},5e3)}).catch(()=>{m("There was an error"),setTimeout(()=>{m("")},2e3)})};return e.jsxs(M,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsx(Re,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),h===""&&e.jsx(ee,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:a}),h===""&&le.appEnv!=="prod"&&e.jsxs(Re,{padding:"10px",margin:"10px",borderRadius:G.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",e.jsx(Vo,{href:g[s].url,target:"_blank",children:g[s].label})," ","to proceed."]}),!u&&(h?e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Pt,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ee,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:h})]}):e.jsx(M,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",radius:"15px",padding:"20px 10px",onClick:T,children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Verify Alias Address"})})})),u&&e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Wo,{color:"#30CC8B",size:30}),e.jsx(ee,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},Xi=({aliasEthAccount:t,setAliasVerified:i})=>{const{processingState:n}=_(a=>a.channelCreation);return e.jsxs(ke,{children:[e.jsxs(Qi,{children:[e.jsxs(At,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[e.jsx("div",{children:"Waiting for Setup"}),e.jsx(St,{type:n>=1?"active":"inactive"})]}),e.jsxs(At,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[e.jsx("div",{children:"Change Network"}),e.jsx(St,{type:n>=2?"active":"inactive"})]}),e.jsxs(At,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[e.jsx("div",{children:"Verify Alias Network"}),e.jsx(St,{type:n>=3?"active":"inactive"})]}),e.jsx(Zi,{})]}),n===1&&e.jsx(Hi,{}),n===2&&e.jsx(Yi,{}),n===3&&e.jsx(qi,{aliasEthAccount:t,setAliasVerified:i})]})},Qi=r.div`
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
`,Zi=r.div`
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
`,xn=({heading:t,subHeading:i})=>{const n=te();return e.jsx(at,{theme:n,children:e.jsxs(er,{children:[e.jsx(tr,{style:{color:n.default.color},children:t}),e.jsx(nr,{style:{color:n.modalMessageColor},children:i})]})})},er=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,tr=r.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,nr=r.h4`
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
`,kt=Z.forwardRef(({title:t},i)=>{const n=te();return e.jsx(at,{theme:n,children:e.jsxs(ir,{children:[e.jsx(rr,{style:{color:n.modalMessageColor},children:t}),e.jsx(ar,{ref:i,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),ir=r.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,rr=r.h4`
  font-family: FK Grotesk Neu;
  font-size: ${t=>t.fontSize||"0.95rem"};
  font-weight: ${t=>t.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${t=>t.marginBottom||"3%"};
`,ar=r(Le)`
  box-sizing: border-box;
  width: 100%;
`,or=({onConfirm:t,onClose:i,toastObject:n})=>{const a=Z.useRef();te();const[d,s]=Z.useState(!1),c=()=>!d&&i(),l=Z.useRef(null);Pe(l,()=>c());const p=()=>{var m;s(!0);const h=(m=a==null?void 0:a.current)==null?void 0:m.value;t(h).then(async u=>{console.debug(u),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:x=>e.jsx(Be,{size:x,color:"green"})}),i()}).catch(u=>{console.error({err:u}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:x=>e.jsx(X,{size:x,color:"red"})})}).finally(()=>{s(!1)})};return e.jsxs(sr,{ref:l,children:[e.jsx(xn,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),e.jsx(kt,{ref:a,title:"Delegate Address"}),e.jsx(_n,{text:"Add Delegate",onClick:p,isLoading:d})]})},sr=r.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${L.laptop}){
    width:50vw;
  }
  @media(${L.mobileL}){
    width:95vw;
  }
`,lr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",dr=t=>o.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),cr=({onClose:t,onConfirm:i,toastObject:n})=>{const a=Z.useRef(),d=Z.useRef(),[s,c]=Z.useState(!1);te();const l=()=>!s&&t(),p=Z.useRef(null);Pe(p,()=>l());const h=()=>{var x,f;const m=(x=d==null?void 0:d.current)==null?void 0:x.value,u=(f=a==null?void 0:a.current)==null?void 0:f.value;if(c(!0),m==""||u==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:g=>e.jsx(X,{size:g,color:"red"})}),setTimeout(()=>{c(!1)},500);return}else if(parseInt(m)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:g=>e.jsx(X,{size:g,color:"red"})}),setTimeout(()=>{c(!1)},500);return}i(m,u).then(async g=>{console.debug(g),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:T=>e.jsx(Be,{size:T,color:"green"})}),t()}).catch(g=>{console.error(g),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:T=>e.jsx(X,{size:T,color:"red"})})}).finally(()=>{c(!1)})};return e.jsxs(pr,{ref:p,children:[e.jsx(xn,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),e.jsx(kt,{ref:a,title:"Subgraph ID"}),e.jsx(kt,{ref:d,title:"Poll Time (in seconds)"}),e.jsx(_n,{text:"Add Subgraph",onClick:h,isLoading:s})]})},pr=r.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${L.laptop}){
    width:50vw;
  }
  @media(${L.mobileL}){
    width:95vw;
  }
`,xr=t=>o.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),o.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),hr=t=>o.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),gr=({onConfirm:t,onClose:i,toastObject:n})=>{const a=te(),d=it(),{channelDetails:s}=_(x=>x.admin),{CHANNNEL_DEACTIVATED_STATE:c}=_(x=>x.channels),[l,p]=Z.useState(!1),h=()=>!l&&i(),m=Z.useRef(null);Pe(m,()=>h());const u=()=>{p(!0),t().then(async x=>{console.debug(x),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:f=>e.jsx(X,{size:f,color:"red"})}),await x.wait(1),console.info("Transaction Mined!"),d(Ot({...s,channelState:c})),p(!1),i()}).catch(x=>{console.error("!!!Error deactivateChannel() --> %o",x),console.error({err:x}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:f=>e.jsx(X,{size:f,color:"red"})}),p(!1)})};return e.jsx(at,{theme:a,children:e.jsx(mr,{ref:m,children:l?e.jsxs(ur,{children:[e.jsx(Rn,{size:42,color:G.COLORS.PRIMARY_PINK,type:Ft.PROCESSING}),e.jsx(fr,{children:"Verifying"})]}):e.jsxs(e.Fragment,{children:[e.jsx(wr,{style:{color:a.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),e.jsxs(br,{children:[e.jsx(xr,{width:36,height:36,onClick:h}),e.jsx(yr,{onClick:u,children:e.jsx(hr,{})})]})]})})})},mr=r.div`
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
`,ur=r(ne)`
  flex-direction: row;
  //   margin-top:33px;
`,fr=r.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,wr=r.div`
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
`;const br=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,yr=r.div`
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
`;const Cr="DD MMM, YYYY",vr=({onConfirm:t,onClose:i,toastObject:n})=>{const a=te(),{chainId:d,account:s,provider:c}=Se(),l=it(),{channelDetails:p,canVerify:h,aliasDetails:{isAliasVerified:m,aliasAddrFromContract:u}}=_(I=>I.admin),{CHANNEL_ACTIVE_STATE:x,CHANNNEL_DEACTIVATED_STATE:f}=_(I=>I.channels),[g,T]=o.useState("");let{channelState:w}=p;w||(w=p.activation_status);const y=w===x,N=w===f,[b,A]=o.useState(!1),[S,P]=o.useState(!1),[k,W]=o.useState(0),B=()=>!b&&i(),C=o.useRef(null);Pe(C,()=>B());const v=le.coreContractChain===d;Fe(600),o.useEffect(()=>{!p||!v||async function(){const I=p.channelStartBlock.toString(),R=await new Dn(le.coreRPC).getBlock(+I),E=Nn(R.timestamp*1e3);T(E.format(Cr))}()},[p]),o.useEffect(()=>{!s||!c||async function(){const I=await Wn({address:s,provider:c,contractAddress:Ee.epnscore});W(parseInt(I));const R=parseInt(I);R>=50&&R!=0?P(!0):P(!1)}()},[s,c]);const K=async I=>{await Yt({noOfTokens:I,provider:c,account:s})},J=async()=>{if(A(!0),!c)return;const I=c.getSigner(s);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const R=await Kn({signer:I,contractAddress:Ee.epnscore,amount:50-k});console.debug("response",R),R&&(W(50),P(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Be,{size:E,color:"green"})}),A(!1))}catch(R){console.error(R),R.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:E=>e.jsx(X,{size:E,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:E=>e.jsx(X,{size:E,color:"red"})}),console.error("Error --> %o",R),console.error({err:R}))}A(!1)},F=async()=>{A(!0);try{const I=Ut("50",18),R=await t(I);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Be,{size:E,color:"green"})}),await R.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:E=>e.jsx(Be,{size:E,color:"green"})}),l(Ot({...p,channelState:x})),i(),A(!1)}catch(I){console.error("Error reactivateChannel",{err:I}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:R=>e.jsx(X,{size:R,color:"red"})}),A(!1)}};return e.jsx(at,{theme:a,children:e.jsxs(jr,{ref:C,children:[e.jsxs(Tr,{children:[e.jsx(Sr,{children:"Reactivate Channel"}),e.jsx(Ai,{onClick:B,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(Yo,{size:"1.5rem",style:{color:a.modalIconColor}})})]}),e.jsxs(kr,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Er,{src:p.icon}),e.jsxs(gn,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs($r,{children:[p.name,h&&e.jsx(Mr,{src:"/verify.png"})]}),e.jsxs(gn,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[v&&u&&!m||!v&&!m?e.jsx(Dr,{children:"Alias Network Setup Pending"}):e.jsxs(Ar,{justifyContent:"flex-start",children:[e.jsxs(Ir,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(Nr,{children:p.subscriber_count})]}),e.jsx(Rr,{active:y,children:y?"Active":N?"Deactivated":"Blocked"})]}),g&&e.jsxs(zr,{children:["Created ",g]})]})]})]}),e.jsxs(Lr,{children:[e.jsx(Pr,{children:"Channel reactivation fee"}),e.jsxs(V,{flex:"0",children:[S?e.jsx(Br,{src:Ts}):null,e.jsxs(Fr,{children:[50," PUSH"]})]})]}),e.jsx(Ht,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:K}),b?e.jsxs(Ur,{children:[e.jsx(Rn,{size:42,color:G.COLORS.PRIMARY_PINK,type:Ft.PROCESSING}),e.jsx(_r,{children:"Verifying Transaction"})]}):e.jsx(Or,{children:k>=50?e.jsx(un,{onClick:F,children:"Reactivate"}):e.jsx(un,{onClick:J,children:"Approve PUSH"})})]})})},jr=r.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${L.mobileL} {
    padding: 0.5rem;
  }
  @media (${L.laptop}) {
    width: 50vw;
  }
  @media (${L.mobileL}) {
    width: 95vw;
  }
`,Tr=r(V)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${L.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${L.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Sr=r(Ho)`
  color: ${t=>t.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${L.laptop} {
    font-size: 1.2rem;
  }
  @media ${L.mobileL} {
    width: 85%;
  }
`,gn=r(ne)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Ar=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,kr=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Er=r.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${L.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${L.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Mr=r.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Ir=r.div`
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
  @media ${L.laptop} {
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
  @media ${L.laptop} {
    padding: 1px 8px;
  }
`,Rr=r(mn)`
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
`,Dr=r(mn)`
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
`,Nr=r.span`
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
  @media ${L.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,$r=r.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${t=>t.theme.color};
  @media ${L.laptop} {
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
  @media ${L.mobileL} {
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
  @media ${L.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Br=r.img``,Fr=r.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${L.mobileL} {
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

  @media ${L.mobileL} {
    width: 80%;
  }
`,Ur=r(ne)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,_r=r.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Gr=50,Vr=le.coreContractChain;function Wr({DropdownRef:t,isDropdownOpen:i,closeDropdown:n}){it();const{account:a,chainId:d}=Se(),{epnsWriteProvider:s,epnsCommWriteProvider:c}=_(q=>q.contracts),{channelDetails:l}=_(q=>q.admin),{CHANNNEL_DEACTIVATED_STATE:p,CHANNEL_BLOCKED_STATE:h}=_(q=>q.channels);_(q=>q.user),Z.useContext(Ct);const m=te(),{channelState:u}=l,x=Vr===d,f=Fe(425),{isModalOpen:g,showModal:T,ModalComponent:w}=ot(),{isModalOpen:y,showModal:N,ModalComponent:b}=ot(),{isModalOpen:A,showModal:S,ModalComponent:P}=ot(),k=i&&!g&&!y&&!A;Pe(t,()=>k&&n()),Z.useState(!1),Z.useState(Gr);const[W,B]=Z.useState(0),C=u===p,v=u===h,K=v||C;Z.useEffect(()=>{B(+Jo.formatBigNumberToMetric(l.poolContribution,!0))},[a,l.poolContribution]),Te();const J=()=>{v||(C?N():T())},F=Te(),I=s.reactivateChannel,R=Te(),E=()=>s.deactivateChannel(),ve=Te(),ue=async(q,we)=>{if(!(q==""||we=="")&&!(q<60))try{const H=q+"+"+we,Y=_t(H);return s.addSubGraph(Y)}catch(H){console.error(H)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Kr,{background:m,children:e.jsxs(Hr,{children:[le.appEnv!=="prod"&&e.jsx(fn,{disabled:K,onClick:()=>!K&&S(),children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(xt,{src:lr,alt:"cube"}),e.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),x&&e.jsx(fn,{isChannelDeactivated:C,onClick:J,children:e.jsx(Yr,{isChannelBlocked:v,isChannelDeactivated:C,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[v?e.jsx(xt,{src:hn,alt:"red-bell"}):C?e.jsx(xt,{src:dr,alt:"green-bell"}):e.jsx(xt,{src:hn,alt:"red-bell"}),e.jsx("div",{style:{width:"10px"}}),v?"Channel Blocked":C?"Activate Channel":"Deactivate Channel"]})})})]})})}),e.jsx(w,{InnerComponent:gr,onConfirm:E,toastObject:R,modalPosition:st.ON_ROOT}),e.jsx(b,{InnerComponent:vr,onConfirm:I,toastObject:F,modalMargin:f?"10rem 1rem 0 1rem":"",modalPosition:st.ON_ROOT}),e.jsx(P,{InnerComponent:cr,onConfirm:ue,toastObject:ve,modalPosition:st.ON_ROOT})]})}const Kr=r.div`
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
`,Yr=r.div`
  color: ${t=>t.isChannelBlocked?"red":t.isChannelDeactivated?"#30CC8B":"red "};
`,xt=r.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function wn(){const t=Z.useRef(null),[i,n]=Z.useState(!1);te();const a=()=>{n(s=>!s)},d=()=>{n(!1)};return e.jsxs(V,{flex:"0",ref:t,children:[e.jsx(Jr,{active:i,onClick:a}),i&&e.jsx(Wr,{DropdownRef:t,isDropdownOpen:i,closeDropdown:d})]})}r.div`
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
`;const Jr=r(qo)`
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
`;const qr="DD MMM, YYYY";function Xr({isChannelExpired:t,setIsChannelExpired:i,showEditChannel:n,destroyChannel:a}){var Me,de,U;const{account:d,chainId:s}=Se(),{delegatees:c,channelDetails:l,canVerify:p,aliasDetails:{isAliasVerified:h,aliasAddrFromContract:m}}=_($=>$.admin),{channelSettings:u}=_($=>$.channels),{userPushSDKInstance:x}=_($=>$.user),{handleConnectWallet:f}=o.useContext(Ct),{CHANNEL_ACTIVE_STATE:g,CHANNNEL_DEACTIVATED_STATE:T}=_($=>$.channels),{processingState:w}=_($=>$.channelCreation),[y,N]=o.useState([]),[b,A]=o.useState("");let{channelState:S}=l;S||(S=l.activation_status);const P=S===g,k=S===T,W=le.coreContractChain===s,B=Fe(600),[C,v]=o.useState([d]),[K,J]=o.useState(void 0);_($=>$.contracts);const F=Xo(),{isModalOpen:I,showModal:R,ModalComponent:E}=ot(),ve=Te(),ue=async()=>{x.signer||await f(),R()},q=async $=>x.channel.delegate.add(Gt($,s)),we=l.expiryTime?Qo(((Me=l.expiryTime)==null?void 0:Me.toString())*1e3):"",H=l.expiryTime?Zo(((de=l.expiryTime)==null?void 0:de.toString())*1e3):!0,Y=l.expiryTime?es(((U=l.expiryTime)==null?void 0:U.toString())*1e3,14):"";o.useEffect(()=>{l.channelType==lt.TIMEBOUND&&(H||i(!0))},[H]),o.useEffect(()=>{!l||!p||async function(){let $=await Ln.getInstance().getChannelJsonAsync(l.verifiedBy);N($)}()},[l,p]),o.useEffect(()=>{!l||!W||async function(){const $=l.channelStartBlock.toString(),ie=await new Dn(le.coreRPC).getBlock(+$),ye=Nn(ie.timestamp*1e3);A(ye.format(qr))}()},[l]),o.useEffect(()=>{d&&(!c||!c.length?J(d):J(W?c[0].channel:c[0].alias_address))},[c,d]),o.useEffect(()=>{d&&(async()=>{try{const $=Gt(d,s),ie=await x.channel.delegate.get({channel:$});if(ie){const ye=ie.map(z=>z);ye.unshift(d),v(ye)}}catch($){console.error($)}})()},[d,s]);const se=async $=>{let ie=x;if(!(!ie.signer&&(ie=await f(),!ie)))return ie.channel.delegate.remove(Gt($,s))},be=()=>{F(ns.ChannelSettings)};return e.jsxs(ne,{children:[e.jsxs(ea,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(ta,{src:l.icon}),e.jsxs(Et,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(pa,{children:[l.name,p&&e.jsx(na,{src:"/verify.png"})]}),e.jsxs(Et,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[W&&m&&!h||!W&&!h?e.jsx(sa,{children:"Alias Network Setup Pending"}):e.jsxs(Zr,{justifyContent:"flex-start",children:[e.jsxs(aa,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(la,{children:l.subscriber_count})]}),e.jsxs(oa,{active:P,children:[k&&e.jsx(Vt,{width:"12px",src:Cs,margin:"0 5px 2px 0px",height:"30px"}),P?"Active":k?"Deactivated":"Blocked"]}),l.channelType==lt.TIMEBOUND&&!t&&e.jsxs(V,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(Vt,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(Re,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",we]})]}),l.channelType==lt.TIMEBOUND&&t&&e.jsxs(V,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(Vt,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(Re,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",we]})]})]}),b&&e.jsxs(da,{children:["Created ",b]})]})]})]}),B&&e.jsxs(V,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",children:[!t&&W&&e.jsx(ha,{onClick:n,children:"Edit Channel"}),!t&&e.jsx(wn,{}),t&&W&&e.jsx(Qr,{onClick:a,background:"#E93636",color:"#fff",height:"36px",width:"123px",borderRadius:"8px",fontSize:"14px",children:"Delete Channel"})]}),t&&e.jsx(ne,{alignItems:"flex-start",children:e.jsxs(yn,{margin:"25px 0 0 0",children:[e.jsx(Re,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",e.jsx(Re,{fontWeight:"600",children:Y})]})}),e.jsx(ne,{alignItems:"flex-start",children:e.jsx(yn,{children:l.info})}),p&&e.jsx(Et,{alignItems:"flex-start",padding:"5px 0px",children:e.jsx(xa,{children:e.jsxs(ca,{children:[e.jsx("span",{children:"verified by:"}),e.jsx(ia,{src:y.icon}),e.jsx(ra,{children:y.name})]})})}),w===0&&e.jsxs(ne,{children:[e.jsx(ke,{children:e.jsxs(Cn,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Gn,{title:"Notification Settings",description:"Customize notification preferences for users",Button:e.jsx(Rs,{onClick:be})}),e.jsx(Vn,{account:d,isAddress:!1,items:u[d],isLoading:!1,onClickEmptyListButton:be,emptyListButtonTitle:"Add Setting"})]})}),e.jsx(ke,{children:e.jsxs(Cn,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(Gn,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:e.jsx(Ds,{onClick:ue})}),e.jsx(Vn,{account:d,isAddress:!0,items:C,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:se,icon:e.jsx(ts,{})}]})]})})]}),e.jsx(E,{InnerComponent:or,onConfirm:q,toastObject:ve,modalPosition:st.ON_ROOT})]})}const Et=r(ne)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Qr=r(zn)`
  height: ${t=>t.height||"100%"};
  width: ${t=>t.width||"100%"};
`,Zr=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,ea=r(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,ta=r.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${L.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,na=r.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,ia=r.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,ra=r.div``,aa=r.div`
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
`,oa=r(bn)`
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
`,sa=r(bn)`
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
`,la=r.span`
  font-weight: 400;
  font-size: 14px;
`;r.div`
  display: flex;
  flex-direction: column;
  @media ${L.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const da=r.div`
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
`,ca=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,pa=r.div`
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
`,xa=r.div`
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
`,ha=r(De)`
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
`,Cn=r($n)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
`,ga=({isToggleOn:t,onToggle:i})=>e.jsxs(ma,{children:[e.jsx(ua,{id:"toggle-switch",type:"checkbox",defaultChecked:t,onClick:i}),e.jsx(vn,{htmlFor:"toggle-switch"})]}),ma=r.div`
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
`,ua=r.input`
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
`,Ke=({message:t})=>e.jsxs(V,{display:"flex",alignItems:"center",alignSelf:"flex-start",flexDirection:"row",margin:"7px 0px",children:[e.jsx(Pn,{color:"red",size:"20"}),e.jsx(Re,{fontSize:"14px",fontWeight:"400",margin:"0px 5px",color:"red",children:t})]}),Mt=le.coreContractChain,fa=le.allowedNetworks.map(t=>({label:nt[t].label,value:t})),wa=({channelName:t,channelExpiryDate:i,channelAlias:n,channelInfo:a,channelURL:d,chainDetails:s,errorInfo:c,setChannelAlias:l,setChainDetails:p,setChannelInfo:h,setChannelName:m,setChannelExpiryDate:u,setChannelURL:x,setStepFlow:f,setChannelInfoDone:g,setTxStatus:T,isAllFilledAndValid:w})=>{const y=te(),N=Fe(769),b=is(new Date("2023-02-01T00:00:00.000"),90),[A,S]=o.useState(!0),P=k=>k.trim().length==0;return o.useEffect(()=>(P(t)||P(a)||P(d)?S(!0):S(!1),()=>S(!0)),[t,a,d]),e.jsx(ke,{children:e.jsxs(ba,{children:[e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",height:"fit-content","min-height":"fit-content",children:[e.jsx(Ne,{style:{color:y.color},children:"Channel Name"}),e.jsxs(ya,{children:[e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",height:"fit-content",children:[e.jsx(Le,{required:!0,maxlength:"40",flex:"1",self:"stretch",align:"stretch",padding:"12px",height:"25px",weight:"400",size:"16px",bg:"white",radius:"12px",border:"1px solid #BAC4D6",value:t,onChange:k=>{m(k.target.value)}}),(c==null?void 0:c.name)&&e.jsx(Ke,{message:c==null?void 0:c.name})]}),e.jsx(rs,{tooltipContent:"Timebound channels will be deleted after expiry",placementProps:N?{bottom:"-42px",transform:"translateX(6%)",padding:"8px 16px",background:y.default.bg,border:"1px solid rgba(173, 176, 190, 0.2)",color:y.tooltipTopSubHeading}:{bottom:"-63px",transform:"translateX(16%)",padding:"8px 16px",background:y.default.bg,border:"1px solid rgba(173, 176, 190, 0.2)",color:y.tooltipTopSubHeading},children:e.jsxs(Ca,{children:[e.jsxs(V,{style:{justifyContent:"flex-start",maxWidth:"100%"},children:[e.jsx(Ne,{style:{color:y.color},children:"Time Bound"}),b&&e.jsx(as,{})]}),e.jsx(ga,{isToggleOn:i!==void 0,onToggle:()=>{if(i===void 0)return u(null);u(void 0)}})]})})]})]}),i!==void 0&&e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",margin:"30px 0px 0px 0px",children:[e.jsx(Ne,{style:{color:y.color},children:"Channel Expiry Date"}),e.jsx(va,{children:e.jsx(ja,{className:"date",value:i,onChange:u})}),(c==null?void 0:c.channelExpiryDate)&&e.jsx(Ke,{message:c==null?void 0:c.channelExpiryDate})]}),e.jsxs(M,{flex:"1",self:"stretch",align:"stretch",margin:"30px 0px 0px 0px",children:[e.jsx(Ne,{style:{color:y.color},children:"Network"}),e.jsx(Ta,{children:e.jsx(Sa,{options:fa,onChange:k=>{p(k.value)},value:nt[s].label})})]}),s!=Mt?e.jsxs(M,{margin:"30px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Ne,{style:{color:y.color},children:"Channel Alias address"}),e.jsx(Le,{required:!0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",bg:"white",height:"25px",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6",focusBorder:"1px solid #657795",radius:"12px",disabled:s===""||s===Mt,visibility:s===Mt?"hidden":"visible",value:n,onChange:k=>{l(k.target.value)}}),e.jsx(ee,{size:"13px",margin:"7px 0px 0px 0px",color:y.default.secondaryColor,children:"Make sure you own this address as verification will take place."}),(c==null?void 0:c.address)&&e.jsx(Ke,{message:c==null?void 0:c.address})]}):null,e.jsxs(M,{margin:"30px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",style:{marginTop:"30px",position:"relative"},children:[e.jsxs(M,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(Ne,{style:{color:y.color},children:"Channel Description"}),e.jsx(ee,{color:y.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:250-a.length})]}),e.jsx(Bn,{required:!0,rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6",focusBorder:"1px solid #657795",radius:"12px",bg:"#fff",value:a,onChange:k=>{h(k.target.value.slice(0,250))},autocomplete:"off"}),e.jsx(ee,{size:"13px",margin:"7px 0px 0px 0px",color:y.default.secondaryColor,children:"Brief description of your channel."})]}),(c==null?void 0:c.description)&&e.jsx(Ke,{message:c==null?void 0:c.description}),e.jsxs(M,{margin:"30px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Ne,{style:{color:y.color},children:"Channel Website URL"}),e.jsx(Le,{required:!0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",bg:"white",height:"25px",margin:"7px 0px 0px 0px",border:"1px solid #BAC4D6;",focusBorder:"1px solid #657795",radius:"12px",value:d,onChange:k=>{x(k.target.value)}})]}),(c==null?void 0:c.url)&&e.jsx(Ke,{message:c==null?void 0:c.url}),e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:"70px auto 50px auto",children:e.jsx(We,{bg:A?"#F4DCEA":"#CF1C84",color:A?"#CF1C84":"#fff",flex:"1",radius:"15px",padding:"20px 10px",onClick:()=>{w()&&(T(2),g(!0),f(1))},children:e.jsx(ee,{color:A?"#CF1C84":"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Next"})})})]})})},ba=r(M)`
  align-items: 'flex-start';
  padding: 40px 13% 0 13%;
  @media (max-width: 1350px) {
    padding: 40px 9% 0 9%;
  }
  @media (max-width: 1250px) {
    padding: 40px 4% 0 4%;
  }
  @media ${L.laptop} {
    padding: 20px 0 0 0;
  }
`,ya=r(V)`
  align-items: flex-start;
  height: fit-content;
  margin-top: 7px;
  @media ${L.tablet} {
    flex-direction: column;
  }
`,Ne=r.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: normal;
  color: #1e1e1e;
`,Ca=r(V)`
  margin-left: 1.3rem;
  padding: 12px 18px;
  cursor: pointer;
  flex: 1;
  align-items: center;
  border-radius: 15px;
  background: ${t=>t.theme.toggleContainerBG};
  @media ${L.tablet} {
    margin-left: 0;
    margin-top: 1.25rem;
  }
`,va=r.div`
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
`,ja=r(Ls)`
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
`,Ta=r.div`
  margin-top: 7px;
  flex: 1;
  .is-open {
    margin-bottom: 110px;
  }
`,Sa=r(zs)`
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
`,Aa=({progress:t,processingInfo:i,progressInfo:n})=>{const a=te();return e.jsxs(ke,{children:[e.jsx(ka,{children:e.jsx(Ea,{children:n})}),e.jsx(Pi,{sx:{width:"30em",margin:"50px auto",color:"#cf1c84",height:"6px",borderRadius:"20px","@media (max-width:600px)":{width:"100%"}},color:"inherit",variant:"determinate",value:t}),e.jsxs(M,{display:"flex",direction:"row",align:"center",margin:"0px 0px",children:[e.jsx(Pt,{color:"#cf1c84",loading:!0,height:13,width:2.5}),e.jsx(Bt,{margin:"auto 15px",textTransform:"none",color:a.color,size:"16px",weight:"500",children:i})]})]})},ka=r.div`
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
`,Ea=r.div`
  padding: 0px 0px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 768px) and (max-width: 1700px) {
    padding: 10px 40px;
  }
`,Ma=({channelStakeFees:t,setStakeFeesChoosen:i,setProcessingInfo:n,handleCreateChannel:a})=>{const{loading:d,error:s,executeAsyncFunction:c}=Xn(Es),{provider:l,account:p}=Se(),[h,m]=o.useState(0),[u,x]=o.useState(!1),f=Fe(600),g=async y=>{x(!0);const N=await Yt({noOfTokens:y,provider:l,account:p});n(N+"PUSH Tokens minted successfully!"),x(!1),m(N)},T=async()=>{const y=await Ms({address:p,provider:l});m(y)},w=async()=>{await c({provider:l})};return o.useEffect(()=>{T()},[h]),e.jsx(o.Fragment,{children:e.jsxs($a,{children:[e.jsxs(M,{self:"center",maxWidth:"800px",width:"100%",margin:"60px 0px 0px 0px",children:[e.jsxs(Ia,{children:[e.jsx("p",{children:"Amount for Staking"}),e.jsxs(Ra,{children:[e.jsxs("b",{children:[t," PUSH"]}),e.jsxs(Da,{children:["Balance: ",h]})]})]}),u?e.jsx(ze,{type:$e.SEAMLESS}):e.jsx(Ht,{onMintPushToken:g,noOfPushTokensToCheck:50}),e.jsxs(Na,{children:["Don't see Push token in your wallet?",e.jsx(za,{onClick:w,children:"Import Token "}),d&&e.jsx("span",{children:e.jsx(ze,{type:$e.SEAMLESS,spinnerSize:20})})]})]}),e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:f?"70px auto 50px auto":"100px auto 50px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",flex:"1",radius:"15px",padding:"20px 10px",onClick:()=>{i(!0),a()},children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Create Channel"})})})]})})},Ia=r.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-radius: 20px;
  background-color: #f4f5fa;
  align-items: center;
  z-index: 1;

  @media ${L.tablet} {
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
`,Ra=r.div`
  display: flex;
  flex-direction: column;
`,Da=r.div`
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
`,Na=r.div`
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
`,$a=r(M)`
  padding: 5px 0 0 0;
  self: stretch;
  align: flex-start;
  justify: center;
  width: 100%;
`,La=({croppedImage:t,view:i,imageSrc:n,imageType:a,processing:d,setCroppedImage:s,setView:c,setImageSrc:l,setImageType:p,setProcessingInfo:h,logoInfo:m,setStepFlow:u})=>{const x=o.useRef(),f=w=>{w.preventDefault()},g=w=>{w.preventDefault(),w.stopPropagation(),T(w.dataTransfer)},T=async(w,y)=>{if(s(void 0),c(!0),w==null?void 0:w.files[0]){var N=new FileReader;N.readAsDataURL(w==null?void 0:w.files[0]),N.onloadend=function(b){var A;l(N.result),p((A=w==null?void 0:w.files[0])==null?void 0:A.type)}}else return"Nothing...."};return e.jsxs(Ba,{children:[e.jsx(M,{align:"center",children:e.jsx(Bt,{color:" #657795",margin:"20px 0px",textTransform:"none",weight:"300",size:"15px",spacing:"normal",textAlign:"center",children:"Please upload a PNG, JPG. Crop the image to resize to 128px."})}),e.jsx(Fa,{className:"",children:e.jsx("div",{children:e.jsx("div",{onDragOver:w=>f(w),onDrop:w=>g(w),className:"bordered",children:e.jsxs("div",{className:"inner",children:[i?e.jsx("div",{className:"crop-div",children:t?e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:t,className:"croppedImage"})}):e.jsx(Hn,{className:"cropper",imageSrc:n,imageType:a,onImageCropped:w=>s(w),ref:x})}):e.jsx(os,{size:100,color:"#8C99B0",style:{marginTop:"30px"}}),e.jsxs(M,{display:"flex",direction:"row",align:"center",children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:w=>T(w.target),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})})}),(m==null?void 0:m.length)>0&&e.jsx(M,{margin:"30px 0px 30px 0px",flex:"1",padding:"10px 5px",radius:"10px",bg:"#F5F5FA",children:e.jsx("div",{style:{color:"#CF1C84"},children:m})}),i&&(t?e.jsx(Fn,{flex:"1",direction:"column",margin:"0px",justify:"center",size:"1.1rem",onSubmit:w=>{w.preventDefault(),u(2)},children:e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:"100px auto 50px auto",children:e.jsxs(We,{bg:"#e20880",color:"#fff",flex:"1",radius:"15px",padding:"20px 10px",disabled:d==1,children:[d==1&&e.jsx(ze,{type:$e.SEAMLESS,spinnerSize:24,spinnerColor:"#fff"}),d!=1&&e.jsx(Le,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",line:"22px",size:"16px",type:"submit",value:"Next"})]})})}):e.jsx(M,{width:"12.2em",self:"stretch",align:"stretch",margin:"100px auto 50px auto",children:e.jsx(We,{bg:"#e20880",color:"#fff",flex:"1",radius:"15px",padding:"20px 10px",onClick:()=>{x.current.showCroppedImage()},children:e.jsx(ee,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Crop Image"})})}))]})};r.div`
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
`;const Ba=r.div`
  margin: 50px auto 0px auto;
  width: 55%;
  @media (max-width: 768px) {
    min-width: 100%;
    margin: 10px auto 0px auto;
  }
  @media (max-width: 1224px) {
    width: 75%;
  }
`,Fa=r.div`
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
`,ht=(t,i,n)=>(n=n??1,t.length>=n&&t.length<=i),It=t=>{var i=new RegExp("^((?:https|http):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!i.test(t)},Oa=t=>ss(t),Ua=50,Rt=le.coreContractChain,jn=le.coreContractChain;function _a(){const{account:t,provider:i,chainId:n}=Se(),{userPushSDKInstance:a}=_(D=>D.user),{handleConnectWallet:d}=o.useContext(Ct),s=te(),c=jn===n,[l,p]=o.useState(0),[h,m]=o.useState(""),[u,x]=o.useState(!1),[f,g]=o.useState(!1),[T,w]=o.useState(!1),[y,N]=o.useState(jn),[b,A]=o.useState(""),[S,P]=o.useState(void 0),[k,W]=o.useState(""),[B,C]=o.useState(""),[v,K]=o.useState(""),[J,F]=o.useState(void 0),[I,R]=o.useState(Ua),[E,ve]=o.useState(""),[ue,q]=o.useState(2),[we,H]=o.useState(0),[Y,se]=o.useState(""),[be,Me]=o.useState(""),[de,U]=o.useState({name:"",description:"",address:"",url:""}),[$,ie]=o.useState(!1),[ye,z]=o.useState(void 0),[O,re]=o.useState(null),[fe,He]=o.useState(void 0),[ae,ce]=o.useState(0),ge=Te();o.useEffect(()=>{c&&(async()=>{let D=await new bt(Ee.pushToken,yt.pushToken,i).allowance(t,Ee.epnscore);D=D==null?void 0:D.toString();const me=xs(D);ve(me)})()},[]);const Ye=()=>{ce(3),p(0),x(!0)},Ce=D=>D.trim().length==0,gt=()=>(U(""),Ce(b)||Ce(B)||Ce(v)||Ce(k)&&y!==Rt?(Ce(b)&&U(D=>({...D,name:"Please, enter the channel name."})),Ce(B)&&U(D=>({...D,description:"Please, enter the channel description"})),Ce(v)&&U(D=>({...D,url:"Please, enter the channel url"})),Ce(k)&&y!==Rt&&U(D=>({...D,address:"Please, enter the channel address"})),!1):ht(b,125)?ht(v,125)?y!==Rt&&!Oa(k)?(U(D=>({...D,address:"Channel Alias address is invalid! Please enter a valid address!"})),!1):It(v)?!0:(U(D=>({...D,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(U(D=>({...D,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(U(D=>({...D,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Ge=async D=>{if(!a.signer){d();return}if(!gt())return ge.showMessageToast({toastTitle:"Error",toastMessage:`${de.name||de.description||de.address||de.url||"Please enter the channel details"}`,toastType:"ERROR",getToastIcon:pe=>e.jsx(X,{size:pe,color:"red"})}),!1;if(!J)return Me("Please upload logo of the channel"),ge.showMessageToast({toastTitle:"Error",toastMessage:"Please upload logo of the channel",toastType:"ERROR",getToastIcon:pe=>e.jsx(X,{size:pe,color:"red"})}),!1;w(!0),Ye(),p(1);let me={name:b,info:B,url:v,icon:J,aliasDetails:On({chainId:y,address:k})};console.debug(me),me=JSON.stringify(me),H(0),console.debug(`input is ${me}`),m("Loading..."),se("Please wait, payload is getting uploaded to IPFS."),H(5);let Je=await Un(me);console.debug("IPFS storagePointer:",Je),ge.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),m("Payload Uploaded"),se("Please complete the transaction in your wallet to continue."),H(10);var qe=i.getSigner(t);console.debug(qe);let j=new bt(Ee.pushToken,yt.pushToken,qe);const Xe=Ut(I.toString(),18);try{if(E<50){var Lt=j.approve(Ee.epnscore,Xe);const mt=await Lt;console.debug(mt),console.debug("waiting for tx to finish"),H(30),await i.waitForTransaction(mt.hash)}let pe=new bt(Ee.epnscore,yt.epnscore,qe),Ve=lt.GENERAL;const Po="1+"+Je,Bo=_t(Po);H(50);let An=0;S&&(An=S.getTime()/1e3,Ve=lt.TIMEBOUND);const kn=await pe.createChannelWithPUSH(Ve,Bo,Xe,An,{gasLimit:6e5});console.debug(kn),console.debug("Check: "+t),(await i.waitForTransaction(kn.hash)).status===0?(ge.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in creating the channel",toastType:"ERROR",getToastIcon:mt=>e.jsx(X,{size:mt,color:"red"})}),p(3),q(0),ce(1),w(!1),x(!1),setTimeout(()=>{p(0)},500)):(p(3),H(60),se("Please wait while we confirm the transaction."),m("Transaction Confirmed"),setTimeout(()=>{H(80),se("Creating your channel, Aligning pixels, adjusting padding... This may take some time."),m("Redirecting... Please do not refresh"),H(90)},2e3),setTimeout(()=>{H(100),window.location.reload()},2e3))}catch(pe){pe.code===4001||pe.code==="ACTION_REJECTED"?(ge.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:Ve=>e.jsx(X,{size:Ve,color:"red"})}),ce(2),p(0),x(!1)):(ge.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in creating the channel",toastType:"ERROR",getToastIcon:Ve=>e.jsx(X,{size:Ve,color:"red"})}),console.error("Error --> %o",pe),console.error({err:pe}),p(3),H(0),se("There was an error in creating the Channel"),m("Kindly Contact support@epns.io to resolve the issue."))}};return o.useEffect(()=>{fe&&(console.debug("Image cropped",fe),Yn(fe,function(D){const me=Jn(D);console.debug("response",me),me.success&&(console.debug("Cropped Image....",fe),F(fe))}))},[fe]),e.jsx(at,{theme:s,children:e.jsxs(Ga,{children:[e.jsx(Va,{children:e.jsxs(ds,{className:"content",children:[e.jsxs(M,{align:"center",className:"center",children:[e.jsx(Wa,{children:e.jsx(ee,{className:"text",children:"Create Your Channel"})}),e.jsx(ee,{className:"body-text",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]}),ue===0&&e.jsxs(Xa,{children:[e.jsx("div",{children:"Transaction failed due to one of the following reasons:"}),e.jsx("p",{children:"1. There is not enough PUSH in your wallet."}),e.jsx("p",{children:"2. Gas price increased due to network congestion. Adjust gas limit manually."})]})]})}),c?e.jsxs(e.Fragment,{children:[!(l===1||l===3)&&e.jsx(ke,{children:e.jsxs(qa,{children:[e.jsxs(Nt,{type:ae>=0?"active":"inactive",active:ae==0?"active":"inactive",onClick:()=>ce(0),children:[e.jsx("div",{children:"Channel Info"}),e.jsx(Dt,{type:ae>=0?"active":"inactive"})]}),e.jsxs(Nt,{type:ae>=1?"active":"inactive",active:ae==1?"active":"inactive",onClick:()=>ce(1),children:[e.jsx("div",{children:"Upload Logo"}),e.jsx(Dt,{type:ae>=1?"active":"inactive"})]}),e.jsxs(Nt,{type:ae>=2?"active":"inactive",active:ae==2?"active":"inactive",onClick:()=>ce(2),children:[e.jsx("div",{children:"Staking Info"}),e.jsx(Dt,{type:ae>=2?"active":"inactive"})]}),e.jsx(Ka,{})]})}),ae===0&&e.jsxs(ne,{children:[e.jsx(wa,{setStepFlow:ce,channelName:b,channelExpiryDate:S,channelAlias:k,channelInfo:B,channelURL:v,chainDetails:y,setChannelAlias:W,setChainDetails:N,setChannelInfo:C,setChannelName:A,setChannelExpiryDate:P,setChannelURL:K,setChannelInfoDone:w,setTxStatus:q,errorInfo:de,isAllFilledAndValid:gt}),l===1?e.jsx(ze,{type:$e.STANDALONE,overlay:Wt.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),ae===1&&e.jsxs(ne,{children:[e.jsx(La,{croppedImage:fe,view:$,imageSrc:ye,imageType:O,processing:l,setCroppedImage:He,setView:ie,setImageSrc:z,setImageType:re,setProcessingInfo:m,logoInfo:be,setStepFlow:ce}),l===1?e.jsx(ze,{type:$e.STANDALONE,overlay:Wt.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),ae===2&&e.jsxs(ne,{children:[e.jsx(Ma,{channelStakeFees:I,setStakeFeesChoosen:g,setProcessingInfo:m,handleCreateChannel:Ge}),l===1?e.jsx(ze,{type:$e.STANDALONE,overlay:Wt.ONTOP,blur:5,title:"Channel Creation in Progress",completed:!1}):null]}),(l===1||l===3)&&e.jsx(Aa,{progress:we,progressInfo:Y,processingInfo:h})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ha,{children:e.jsxs("p",{children:["Please select ",cs[le.coreContractChain]," Network in your Wallet to create a channel."]})}),e.jsxs(Ya,{"text-align":"center",children:["You will be asked to change your network to the Alias Network after ",e.jsx("br",{}),"channel creation is complete."]}),e.jsxs(Ja,{href:"https://docs.epns.io/developers/developer-zone/create-your-notif-channel/alias-on-polygon-network",target:"_blank",children:[e.jsx("p",{children:"What is an Alias Network?"}),e.jsx(ps,{})]})]})]})})}const Dt=r.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:t})=>t==="active"&&Ae`
      background: #e20880;
    `};

  ${({type:t})=>t==="inactive"&&Ae``};
`,Ga=r.div`
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
`;const Va=r(ke)`
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
`,Wa=r(ls)`
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
`,Ka=r.div`
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
`,Ya=r.p`
  text-transform: none;
  margin-top: 60px;
  color: #657795;
  line-height: 21px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`,Ja=r.a`
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
`,Nt=r.div`
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
`,qa=r.div`
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
`,Xa=r.div`
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
`,Qa=({channelName:t,setChannelName:i,channelInfo:n,setChannelInfo:a,channelURL:d,setChannelURL:s,editChannel:c,errorInfo:l,setErrorInfo:p})=>{const h=te(),m=({message:x})=>e.jsxs(M,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[e.jsx(Pn,{color:"red",size:"20"}),e.jsx(ee,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:x})]}),u=x=>{const f=x.target.value;It(f)?(p(""),s(f)):(p(g=>({...g,url:"Channel URL is invalid! Please enter a valid url!"})),s(f))};return e.jsx(Za,{children:e.jsx(eo,{onSubmit:c,children:e.jsxs(to,{children:[e.jsxs(M,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(zt,{style:{color:h.editChannelPrimaryText},children:"Channel Name"}),e.jsx(M,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:e.jsx(Le,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",height:"25px",value:t,onChange:x=>{i(x.target.value)}})})]}),(l==null?void 0:l.name)&&e.jsx(m,{message:l==null?void 0:l.name}),e.jsxs(M,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(M,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(zt,{style:{color:h.editChannelPrimaryText},children:"Channel Description"}),e.jsx(ee,{color:h.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-n.length})]}),e.jsx(Bn,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,value:n,onChange:x=>{a(x.target.value.slice(0,250))},autocomplete:"off"})]}),(l==null?void 0:l.description)&&e.jsx(m,{message:l==null?void 0:l.description}),e.jsxs(M,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(zt,{style:{color:h.editChannelPrimaryText},children:"Channel Website URL"}),e.jsx(Le,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",value:d,onChange:x=>{u(x)}})]}),(l==null?void 0:l.url)&&e.jsx(m,{message:l==null?void 0:l.url})]})})})},Za=r(ke)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,eo=r(Fn)`
  height: inherit;
`,zt=r.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,to=r(M)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,no="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",io=({onClose:t,InnerComponentProps:i})=>{const{setChannelLogo:n,croppedImage:a,setCroppedImage:d,imageSrc:s,setImageSrc:c,imageType:l,setImageType:p}=i,h=o.useRef(),m=o.useRef(null);Pe(m,()=>{t()});const u=g=>{g.preventDefault()},x=g=>{g.preventDefault(),g.stopPropagation(),f(g.dataTransfer,"transfer",g)},f=async(g,T,w)=>{if(w.preventDefault(),d(void 0),g==null?void 0:g.files[0]){var y=new FileReader;y.readAsDataURL(g==null?void 0:g.files[0]),y.onloadend=function(N){var b;c(y.result),p((b=g==null?void 0:g.files[0])==null?void 0:b.type)}}};return e.jsxs(ro,{ref:m,children:[e.jsx(so,{children:e.jsx(lo,{onClick:t})}),e.jsxs(ao,{children:[e.jsx(oo,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),e.jsx(go,{className:"",children:e.jsx("div",{onDragOver:g=>u(g),onDrop:g=>x(g),className:"bordered",children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"crop-div",children:a?e.jsx("div",{className:"crop-innderdiv",children:e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:a,className:"croppedImage"})})}):e.jsx("div",{className:"crop-innderdiv",children:e.jsx(Hn,{className:"cropper",imageSrc:s,imageType:l,onImageCropped:g=>d(g),width:"128px",height:"128px",ref:h})})}),e.jsxs(co,{children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:g=>f(g.target,"target",g),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),e.jsx(po,{children:a?e.jsx(e.Fragment,{children:e.jsx(ho,{onClick:()=>{n(a),t()},children:"Upload Image"})}):e.jsx(e.Fragment,{children:e.jsx(xo,{onClick:()=>{h.current.showCroppedImage()},children:"Crop Image"})})})]})]})},ro=r.div``,ao=r.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,oo=r.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${t=>t.theme.modalTextColor};
`,so=r.div`
  text-align: end;
  width: 100%;
`,lo=r(hs)`
  cursor: pointer;
  font-size: 20px;
  color: ${t=>t.theme.modalTextColor};
`,co=r($n)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,po=r(ne)``,xo=r(De)`
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
`,ho=r(De)`
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
`,go=r.div`
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
`,_e=t=>t.trim().length==0;function mo({closeEditChannel:t,UploadLogoComponent:i,displayUplaodLogoModal:n}){const{account:a,provider:d}=Se(),{channelDetails:s,aliasDetails:{isAliasVerified:c,aliasAddrFromContract:l}}=_(z=>z.admin),{epnsReadProvider:p,epnsWriteProvider:h}=_(z=>z.contracts),m=50,[u,x]=o.useState(s==null?void 0:s.name),[f,g]=o.useState(s==null?void 0:s.info),[T,w]=o.useState(s==null?void 0:s.url),[y,N]=o.useState(s==null?void 0:s.icon),[b,A]=o.useState(s==null?void 0:s.icon),[S,P]=o.useState(s==null?void 0:s.icon),[k,W]=o.useState(S),[B,C]=o.useState(null),[v,K]=o.useState(!1),[J,F]=o.useState({name:"",description:"",address:"",url:""}),[I,R]=o.useState(!1),[E,ve]=o.useState(0),[ue,q]=o.useState(0),[we,H]=o.useState(!1),Y=Te();o.useEffect(()=>{a&&async function(){const z=await p.channelUpdateCounter(a);ve(m*(Number(z)+1))}()},[a]),o.useEffect(()=>{!a||!d||async function(){const z=await Wn({address:a,provider:d,contractAddress:Ee.epnscore});q(parseInt(z));const O=parseInt(z);O>=E&&O!=0?K(!0):K(!1)}()},[a,d]);const se=async()=>{if(R(!0),!d)return;const z=d.getSigner(a);Y.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const O=await Kn({signer:z,contractAddress:Ee.epnscore,amount:E-ue});console.debug("response",O),O&&(R(!1),q(E),K(!0),Y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:re=>e.jsx(Be,{size:re,color:"green"})}))}catch(O){console.error(O),O.code=="ACTION_REJECTED"?Y.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}):(Y.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}),console.error("Error --> %o",O),console.error({err:O}))}R(!1)},be=()=>{H(!1)},Me=Fe(600),de=o.useRef(null);Pe(de,()=>{be()});const U=()=>(F(""),_e(u)||_e(f)||_e(T)?(_e(u)&&F(z=>({...z,name:"Please, enter the channel name."})),_e(f)&&F(z=>({...z,description:"Please, enter the channel description"})),_e(T)&&F(z=>({...z,url:"Please, enter the channel url"})),!1):ht(u,125)?ht(T,125)?It(T)?!0:(F(z=>({...z,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(F(z=>({...z,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(F(z=>({...z,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),$=()=>!(u!==(s==null?void 0:s.name)||f!==(s==null?void 0:s.info)||T!==(s==null?void 0:s.url)||b!==(s==null?void 0:s.icon)),ie=async z=>{try{if(!U())return;R(!0);const O=JSON.stringify({name:u,info:f,url:T,icon:b,aliasDetails:s.aliasDetails||On({chainId:parseInt(s.chain_id),address:s.address})});console.debug(O);const re=await Un(O);console.debug("IPFS storagePointer:",re);const fe="1+"+re,He=_t(fe),ae=Ut(E.toString(),18);Y.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const ce=await h.updateChannelMeta(a,He,ae,{gasLimit:1e6});console.debug(ce),await ce.wait(),R(!1),Y.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:ge=>e.jsx(Be,{size:ge,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(O){R(!1),console.error(O.message),O.code=="ACTION_REJECTED"?Y.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}):(Y.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:re=>e.jsx(X,{size:re,color:"red"})}),console.error("Error --> %o",O),console.error({err:O}))}},ye=async z=>{await Yt({noOfTokens:z,provider:d,account:a})};return o.useEffect(()=>{S&&(console.debug("Image cropped",S),Yn(S,function(z){const O=Jn(z);console.debug("response",O),O.success&&(console.debug("Cropped Image....",S),A(S))}))},[S]),e.jsxs(uo,{ref:de,children:[e.jsx(i,{InnerComponent:io,InnerComponentProps:{setChannelLogo:N,channelLogo:y,croppedImage:S,setCroppedImage:P,setChannelFile:A,imageSrc:k,setImageSrc:W,imageType:B,setImageType:C,errorInfo:J,setErrorInfo:F},modalPosition:st.ON_PARENT}),e.jsxs(fo,{children:[e.jsxs(yo,{children:[e.jsx(Co,{src:y}),e.jsx(wo,{onClick:()=>{n(),H(!0)},children:"Upload Logo"})]}),!Me&&e.jsx(vo,{}),e.jsx(Qa,{channelName:u,setChannelName:x,channelInfo:f,setChannelInfo:g,channelURL:T,setChannelURL:w,editChannel:ie,errorInfo:J,setErrorInfo:F})]}),e.jsxs(jo,{children:[e.jsxs("div",{children:[e.jsx(To,{children:"Channel edit fee"}),e.jsx(So,{children:"Editing channel details requires fees to be deposited"})]}),e.jsxs(V,{flex:"0",children:[v?e.jsx(bo,{src:no}):null,e.jsxs(Ao,{children:[E," PUSH"]})]})]}),e.jsx(Ht,{noOfPushTokensToCheck:E,containerProps:{width:"100%"},onMintPushToken:ye}),I?e.jsx(e.Fragment,{children:e.jsxs(ko,{children:[e.jsx(Spinner,{size:42,color:G.COLORS.PRIMARY_PINK,type:Ft.PROCESSING}),e.jsx(Eo,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Mo,{children:[e.jsx(Io,{onClick:t,children:"Cancel"}),ue>=E?e.jsx($t,{disabled:$(),style:{background:$()?" #F4DCEA":"#CF1C84"},onClick:ie,children:"Save Changes"}):e.jsx($t,{onClick:se,children:"Approve PUSH"})]})})]})}const uo=r(ne)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,fo=r(ne)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,wo=r(De)`
  border-radius: 8px;
  background: ${t=>t.theme.logoBtnBg};
  color: ${t=>t.theme.logoBtnColor};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 12px;
`,bo=r.img``,yo=r(V)`
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
`,Co=r.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${L.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,vo=r.div`
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
`,jo=r(ne)`
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
`,To=r.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,So=r.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Ao=r.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,ko=r(ne)`
  flex-direction: row;
  margin-top: 33px;
`,Eo=r.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Mo=r(V)`
  justify-content: end;
  margin-top: 35px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,$t=r(De)`
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
`,Io=r($t)`
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
`,Ro=10;let Tn=null;const Do=()=>{te();const{account:t,chainId:i}=Se(),{channelDetails:n,delegatees:a,aliasDetails:{aliasAddr:d,aliasEthAddr:s,isAliasVerified:c,aliasAddrFromContract:l}}=_(C=>C.admin),{processingState:p}=_(C=>C.channelCreation),{epnsWriteProvider:h}=_(C=>C.contracts);_(C=>C.user),o.useContext(Ct);const m=n&&n!=="unfetched",u=Te(),x=it(),[f,g]=o.useState(!1);o.useState(!0);const[T,w]=o.useState(!1),y=le.coreContractChain===i,N=Fe(600);o.useEffect(()=>{if(!y||!n||l||n==="unfetched")return;const{address:C,chainId:v}=gs(n);C?(x(ms(C)),x(us(v))):x(rt(0))},[n,l]);const b=async C=>{let{aliasAddress:v=null,isAliasVerified:K=null}=await Ln.getInstance().getChannelDetailsFromAddress(C);return v=="NULL"&&(v=null),{aliasAddress:v,aliasVerified:K}};o.useEffect(()=>{!y||!l||p===0||(Tn=setInterval(async()=>{const{aliasAddress:C,aliasVerified:v}=await b(t);C?(x(fs(C)),v?(x(Kt(!0)),x(rt(0))):(x(rt(2)),x(Kt(!1)))):p!=0&&p!=1&&x(rt(1))},Ro*1e3))},[l]),d!==null&&clearInterval(Tn);const A=async()=>{try{u.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await h.destroyTimeBoundChannel(t,{gasLimit:1e6});console.debug(C),console.debug("Check: "+t),await C.wait(),u.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:v=>e.jsx(X,{size:v,color:"green"})}),x(Ot(null))}catch(C){console.error(C),C.code=="ACTION_REJECTED"?u.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:v=>e.jsx(X,{size:v,color:"red"})}):u.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:v=>e.jsx(X,{size:v,color:"red"})})}},S=()=>{w(!0)},P=()=>{w(!1)},{isModalOpen:k,showModal:W,ModalComponent:B}=ot();return e.jsxs(V,{children:[(n==="unfetched"||p===null)&&e.jsx(pn,{}),n!=="unfetched"&&e.jsxs(ne,{justifyContent:p===0&&"flex-start",height:"fit-content",children:[!n&&p===0&&e.jsx(_a,{}),m&&p!==null&&e.jsx(e.Fragment,{children:T?e.jsx(mo,{closeEditChannel:P,UploadLogoComponent:B,displayUplaodLogoModal:W,isUploadLogoModalOpen:k}):e.jsxs(e.Fragment,{children:[n&&!N&&e.jsxs(V,{position:"absolute",top:"0",right:"0",zIndex:"1",children:[!f&&y&&e.jsx(zo,{onClick:S,children:"Edit Channel"}),!f&&e.jsx(wn,{}),f&&y&&e.jsx(No,{onClick:A,background:"#E93636",color:"#fff",height:"36px",width:"123px",borderRadius:"8px",fontSize:"14px",children:"Delete Channel"})]}),n?e.jsx(Xr,{isChannelExpired:f,setIsChannelExpired:g,showEditChannel:S,destroyChannel:A}):""]})}),p!==0&&p!==null&&m&&!T&&e.jsx(e.Fragment,{children:e.jsx(Xi,{aliasEthAccount:s,setAliasVerified:Kt})})]})]})},No=r(zn)`
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
`;le.coreContractChain;function $o(){ws.pageview("/channel_dashboard");const[t,i]=Z.useState(!0),[n,a]=Z.useState(null),d=()=>a(null);return Z.useEffect(()=>{n&&d()},[n]),e.jsxs(Lo,{children:[t?e.jsx(Do,{}):e.jsx(pn,{}),n&&e.jsx(vs,{notification:n,clearToast:d})]})}const Lo=r(ke)`
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
    100% - ${Oe.MINI_MODULES.DESKTOP.RIGHT} - ${Oe.MINI_MODULES.DESKTOP.LEFT} -
      ${G.ADJUSTMENTS.PADDING.HUGE} - ${G.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${G.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${G.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${L.laptop} {
    margin: ${G.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${G.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${Oe.MINI_MODULES.TABLET.RIGHT} - ${Oe.MINI_MODULES.TABLET.LEFT} -
        ${G.ADJUSTMENTS.PADDING.BIG} - ${G.ADJUSTMENTS.PADDING.BIG}
    );
  }

  @media ${L.mobileL} {
    margin: ${G.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${G.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${Oe.MINI_MODULES.MOBILE.RIGHT} - ${Oe.MINI_MODULES.MOBILE.LEFT} -
        ${G.ADJUSTMENTS.PADDING.DEFAULT} - ${G.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${G.CONSTANTS.HEADER_HEIGHT}px - ${Oe.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${G.ADJUSTMENTS.RADIUS.LARGE} ${G.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;r.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Sn;qn=()=>e.jsx(Sn,{children:e.jsx($o,{})}),Sn=r(bs)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Gs as __tla,qn as default};
