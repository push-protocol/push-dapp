import{e7 as l,i0 as Va,iR as Ha,ib as Z,i2 as Re,el as z,ea as t,iS as Ie,iT as qt,ee as X,fS as V,ec as lt,ed as dt,ej as s,eQ as N,ei as K,eV as xe,g9 as ct,eF as Zt,ii as Ga,ga as he,e5 as ge,eb as Wa,ev as te,ep as Ka,fc as De,fD as Ya,fC as Ja,eW as me,en as se,eX as $,f0 as Xa,iU as qa,iV as Le,iW as Za,eg as _e,eq as Ve,ef as ze,hn as pt,fg as ue,e_ as S,gR as je,gc as q,fm as Qt,fn as xt,eT as Q,iX as ht,fi as Ae,fb as He,fj as Se,g3 as Qa,fP as fe,g8 as en,iY as tn,fE as Ge,iZ as er,hj as tr,i_ as nr,g0 as nn,iG as on,i$ as ir,fr as or,ek as an,gl as rn,hN as ar,fO as sn,e6 as rr,j0 as sr,j1 as lr,j2 as dr,j3 as gt,gf as mt,j4 as cr,e9 as pr,j5 as ln,j6 as xr,hx as hr,j7 as gr,j8 as mr,fA as ur,j9 as fr,iJ as wr,ja as Cr,jb as jr,jc as br,jd as yr,je as ut,jf as vr,eZ as be,eS as Tr,jg as Ar,f1 as Sr,__tla as Er}from"./index-DZCEXmT_.js";import{f as dn,c as kr,a as oe,g as We,u as Ke,b as Mr,s as Ne,d as ft,e as cn,h as Rr,i as Ye,j as wt,k as Ee,l as pn,__tla as Ir}from"./DefaultPropsProvider-CCDbQ5ZO.js";import{T as xn,E as Dr,__tla as Lr}from"./EPNSCoreHelper-CnmbyTVs.js";import{b as zr,g as hn,m as gn,c as mn,__tla as Nr}from"./StakingVariant-_Top8lzm.js";import{E as $r,M as Pr,A as Or,__tla as Br}from"./EmptyNotificationSettings-C7u5inOq.js";import{a as un,b as fn,__tla as Ur}from"./ValidationHelper-aZi-0Mnl.js";import{I as Fr,__tla as _r}from"./ImageClipper-CfCFQQEU.js";import{v as Vr,C as Hr,__tla as Gr}from"./CreateChannel-D2CFPzNY.js";import{__tla as Wr}from"./index.esm-CM2taf1h.js";import{__tla as Kr}from"./useGetPaymentDetails-CCxHHPBn.js";import{__tla as Yr}from"./Stepper-ZCmsAXDs.js";import{__tla as Jr}from"./ImportPushTokenMessage-5ksl_mcQ.js";import{__tla as Xr}from"./useGetChannelCategories-BsV9-qAg.js";import{__tla as qr}from"./index.esm-FiBdp-P4.js";import"./Common.form-NbJ1DVkQ.js";let wn,Zr=Promise.all([(()=>{try{return Er}catch{}})(),(()=>{try{return Ir}catch{}})(),(()=>{try{return Lr}catch{}})(),(()=>{try{return Nr}catch{}})(),(()=>{try{return Br}catch{}})(),(()=>{try{return Ur}catch{}})(),(()=>{try{return _r}catch{}})(),(()=>{try{return Gr}catch{}})(),(()=>{try{return Wr}catch{}})(),(()=>{try{return Kr}catch{}})(),(()=>{try{return Yr}catch{}})(),(()=>{try{return Jr}catch{}})(),(()=>{try{return Xr}catch{}})(),(()=>{try{return qr}catch{}})()]).then(async()=>{const Cn=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("circle",{cx:8,cy:8,r:8,fill:"#E93636"}));function jn(e,o=0,n=1){return kr(e,o,n)}function bn(e){e=e.slice(1);const o=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(o);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,a)=>a<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function Ct(e){if(e.type)return e;if(e.charAt(0)==="#")return Ct(bn(e));const o=e.indexOf("("),n=e.substring(0,o);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(dn(9,e));let i=e.substring(o+1,e.length-1),a;if(n==="color"){if(i=i.split(" "),a=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(dn(10,a))}else i=i.split(",");return i=i.map(r=>parseFloat(r)),{type:n,values:i,colorSpace:a}}function yn(e){const{type:o,colorSpace:n}=e;let{values:i}=e;return o.indexOf("rgb")!==-1?i=i.map((a,r)=>r<3?parseInt(a,10):a):o.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),o.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${o}(${i})`}function vn(e,o){return e=Ct(e),o=jn(o),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${o}`:e.values[3]=o,yn(e)}function Tn(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function An(e){return parseFloat(e)}function Je(e,o){var n=function(a){return o&&l.isValidElement(a)?o(a):a},i=Object.create(null);return e&&l.Children.map(e,function(a){return a}).forEach(function(a){i[a.key]=n(a)}),i}function Sn(e,o){e=e||{},o=o||{};function n(g){return g in o?o[g]:e[g]}var i=Object.create(null),a=[];for(var r in e)r in o?a.length&&(i[r]=a,a=[]):a.push(r);var p,c={};for(var d in o){if(i[d])for(p=0;p<i[d].length;p++){var h=i[d][p];c[i[d][p]]=n(h)}c[d]=n(d)}for(p=0;p<a.length;p++)c[a[p]]=n(a[p]);return c}function we(e,o,n){return n[o]!=null?n[o]:e.props[o]}function En(e,o){return Je(e.children,function(n){return l.cloneElement(n,{onExited:o.bind(null,n),in:!0,appear:we(n,"appear",e),enter:we(n,"enter",e),exit:we(n,"exit",e)})})}function kn(e,o,n){var i=Je(e.children),a=Sn(o,i);return Object.keys(a).forEach(function(r){var p=a[r];if(l.isValidElement(p)){var c=r in o,d=r in i,h=o[r],g=l.isValidElement(h)&&!h.props.in;d&&(!c||g)?a[r]=l.cloneElement(p,{onExited:n.bind(null,p),in:!0,exit:we(p,"exit",e),enter:we(p,"enter",e)}):!d&&c&&!g?a[r]=l.cloneElement(p,{in:!1}):d&&c&&l.isValidElement(h)&&(a[r]=l.cloneElement(p,{onExited:n.bind(null,p),in:h.props.in,exit:we(p,"exit",e),enter:we(p,"enter",e)}))}}),a}var Mn=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},Rn={component:"div",childFactory:function(e){return e}},Xe=function(e){Va(o,e);function o(i,a){var r;r=e.call(this,i,a)||this;var p=r.handleExited.bind(Ha(r));return r.state={contextValue:{isMounting:!0},handleExited:p,firstRender:!0},r}var n=o.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(i,a){var r=a.children,p=a.handleExited,c=a.firstRender;return{children:c?En(i,p):kn(i,r,p),firstRender:!1}},n.handleExited=function(i,a){var r=Je(this.props.children);i.key in r||(i.props.onExited&&i.props.onExited(a),this.mounted&&this.setState(function(p){var c=Z({},p.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,a=i.component,r=i.childFactory,p=Re(i,["component","childFactory"]),c=this.state.contextValue,d=Mn(this.state.children).map(r);return delete p.appear,delete p.enter,delete p.exit,a===null?z.createElement(xn.Provider,{value:c},d):z.createElement(xn.Provider,{value:c},z.createElement(a,p,d))},o}(z.Component);Xe.propTypes={},Xe.defaultProps=Rn;function In(e){const{className:o,classes:n,pulsate:i=!1,rippleX:a,rippleY:r,rippleSize:p,in:c,onExited:d,timeout:h}=e,[g,w]=l.useState(!1),m=oe(o,n.ripple,n.rippleVisible,i&&n.ripplePulsate),u={width:p,height:p,top:-(p/2)+r,left:-(p/2)+a},x=oe(n.child,g&&n.childLeaving,i&&n.childPulsate);return!c&&!g&&w(!0),l.useEffect(()=>{if(!c&&d!=null){const E=setTimeout(d,h);return()=>{clearTimeout(E)}}},[d,c,h]),t.jsx("span",{className:m,style:u,children:t.jsx("span",{className:x})})}const ie=We("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Dn=["center","classes","className"];let $e=e=>e,jt,bt,yt,vt;const qe=550,Ln=80,zn=Ie(jt||(jt=$e`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Nn=Ie(bt||(bt=$e`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),$n=Ie(yt||(yt=$e`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Pn=Ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),On=Ne(In,{name:"MuiTouchRipple",slot:"Ripple"})(vt||(vt=$e`
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
`),ie.rippleVisible,zn,qe,({theme:e})=>e.transitions.easing.easeInOut,ie.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,ie.child,ie.childLeaving,Nn,qe,({theme:e})=>e.transitions.easing.easeInOut,ie.childPulsate,$n,({theme:e})=>e.transitions.easing.easeInOut),Bn=l.forwardRef(function(e,o){const n=Ke({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:a={},className:r}=n,p=Re(n,Dn),[c,d]=l.useState([]),h=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[c]);const w=l.useRef(!1),m=Mr(),u=l.useRef(null),x=l.useRef(null),E=l.useCallback(j=>{const{pulsate:k,rippleX:T,rippleY:D,rippleSize:H,cb:G}=j;d(M=>[...M,t.jsx(On,{classes:{ripple:oe(a.ripple,ie.ripple),rippleVisible:oe(a.rippleVisible,ie.rippleVisible),ripplePulsate:oe(a.ripplePulsate,ie.ripplePulsate),child:oe(a.child,ie.child),childLeaving:oe(a.childLeaving,ie.childLeaving),childPulsate:oe(a.childPulsate,ie.childPulsate)},timeout:qe,pulsate:k,rippleX:T,rippleY:D,rippleSize:H},h.current)]),h.current+=1,g.current=G},[a]),L=l.useCallback((j={},k={},T=()=>{})=>{const{pulsate:D=!1,center:H=i||k.pulsate,fakeElement:G=!1}=k;if((j==null?void 0:j.type)==="mousedown"&&w.current){w.current=!1;return}(j==null?void 0:j.type)==="touchstart"&&(w.current=!0);const M=G?null:x.current,W=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let U,F,Y;if(H||j===void 0||j.clientX===0&&j.clientY===0||!j.clientX&&!j.touches)U=Math.round(W.width/2),F=Math.round(W.height/2);else{const{clientX:C,clientY:f}=j.touches&&j.touches.length>0?j.touches[0]:j;U=Math.round(C-W.left),F=Math.round(f-W.top)}if(H)Y=Math.sqrt((2*W.width**2+W.height**2)/3),Y%2===0&&(Y+=1);else{const C=Math.max(Math.abs((M?M.clientWidth:0)-U),U)*2+2,f=Math.max(Math.abs((M?M.clientHeight:0)-F),F)*2+2;Y=Math.sqrt(C**2+f**2)}j!=null&&j.touches?u.current===null&&(u.current=()=>{E({pulsate:D,rippleX:U,rippleY:F,rippleSize:Y,cb:T})},m.start(Ln,()=>{u.current&&(u.current(),u.current=null)})):E({pulsate:D,rippleX:U,rippleY:F,rippleSize:Y,cb:T})},[i,E,m]),P=l.useCallback(()=>{L({},{pulsate:!0})},[L]),B=l.useCallback((j,k)=>{if(m.clear(),(j==null?void 0:j.type)==="touchend"&&u.current){u.current(),u.current=null,m.start(0,()=>{B(j,k)});return}u.current=null,d(T=>T.length>0?T.slice(1):T),g.current=k},[m]);return l.useImperativeHandle(o,()=>({pulsate:P,start:L,stop:B}),[P,L,B]),t.jsx(Pn,Z({className:oe(ie.root,a.root,r),ref:x},p,{children:t.jsx(Xe,{component:null,exit:!0,children:c})}))});function Un(e){return ft("MuiButtonBase",e)}const Fn=We("MuiButtonBase",["root","disabled","focusVisible"]),_n=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Vn=e=>{const{disabled:o,focusVisible:n,focusVisibleClassName:i,classes:a}=e,r=wt({root:["root",o&&"disabled",n&&"focusVisible"]},Un,a);return n&&i&&(r.root+=` ${i}`),r},Hn=Ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Fn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Gn=l.forwardRef(function(e,o){const n=Ke({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:a=!1,children:r,className:p,component:c="button",disabled:d=!1,disableRipple:h=!1,disableTouchRipple:g=!1,focusRipple:w=!1,LinkComponent:m="a",onBlur:u,onClick:x,onContextMenu:E,onDragLeave:L,onFocus:P,onFocusVisible:B,onKeyDown:j,onKeyUp:k,onMouseDown:T,onMouseLeave:D,onMouseUp:H,onTouchEnd:G,onTouchMove:M,onTouchStart:W,tabIndex:U=0,TouchRippleProps:F,touchRippleRef:Y,type:C}=n,f=Re(n,_n),b=l.useRef(null),v=l.useRef(null),Ce=cn(v,Y),{isFocusVisibleRef:le,onFocus:pe,onBlur:ve,ref:de}=Rr(),[O,re]=l.useState(!1);d&&O&&re(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{re(!0),b.current.focus()}}),[]);const[_,ce]=l.useState(!1);l.useEffect(()=>{ce(!0)},[]);const ae=_&&!h&&!d;l.useEffect(()=>{O&&w&&!h&&_&&v.current.pulsate()},[h,w,O,_]);function J(y,Jt,_a=g){return Ye(Xt=>(Jt&&Jt(Xt),!_a&&v.current&&v.current[y](Xt),!0))}const Te=J("start",T),R=J("stop",E),ne=J("stop",L),A=J("stop",H),I=J("stop",y=>{O&&y.preventDefault(),D&&D(y)}),ee=J("start",W),ot=J("stop",G),at=J("stop",M),rt=J("stop",y=>{ve(y),le.current===!1&&re(!1),u&&u(y)},!1),Ue=Ye(y=>{b.current||(b.current=y.currentTarget),pe(y),le.current===!0&&(re(!0),B&&B(y)),P&&P(y)}),ke=()=>{const y=b.current;return c&&c!=="button"&&!(y.tagName==="A"&&y.href)},st=l.useRef(!1),Oa=Ye(y=>{w&&!st.current&&O&&v.current&&y.key===" "&&(st.current=!0,v.current.stop(y,()=>{v.current.start(y)})),y.target===y.currentTarget&&ke()&&y.key===" "&&y.preventDefault(),j&&j(y),y.target===y.currentTarget&&ke()&&y.key==="Enter"&&!d&&(y.preventDefault(),x&&x(y))}),Ba=Ye(y=>{w&&y.key===" "&&v.current&&O&&!y.defaultPrevented&&(st.current=!1,v.current.stop(y,()=>{v.current.pulsate(y)})),k&&k(y),x&&y.target===y.currentTarget&&ke()&&y.key===" "&&!y.defaultPrevented&&x(y)});let Fe=c;Fe==="button"&&(f.href||f.to)&&(Fe=m);const Me={};Fe==="button"?(Me.type=C===void 0?"button":C,Me.disabled=d):(!f.href&&!f.to&&(Me.role="button"),d&&(Me["aria-disabled"]=d));const Ua=cn(o,de,b),Yt=Z({},n,{centerRipple:a,component:c,disabled:d,disableRipple:h,disableTouchRipple:g,focusRipple:w,tabIndex:U,focusVisible:O}),Fa=Vn(Yt);return t.jsxs(Hn,Z({as:Fe,className:oe(Fa.root,p),ownerState:Yt,onBlur:rt,onClick:x,onContextMenu:R,onFocus:Ue,onKeyDown:Oa,onKeyUp:Ba,onMouseDown:Te,onMouseLeave:I,onMouseUp:A,onDragLeave:ne,onTouchEnd:ot,onTouchMove:at,onTouchStart:ee,ref:Ua,tabIndex:d?-1:U,type:C},Me,f,{children:[r,ae?t.jsx(Bn,Z({ref:Ce,center:a},F)):null]}))});function Wn(e){return ft("MuiIconButton",e)}const Kn=We("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Yn=["edge","children","className","color","disabled","disableFocusRipple","size"],Jn=e=>{const{classes:o,disabled:n,color:i,edge:a,size:r}=e,p={root:["root",n&&"disabled",i!=="default"&&`color${Ee(i)}`,a&&`edge${Ee(a)}`,`size${Ee(r)}`]};return wt(p,Wn,o)},Xn=Ne(Gn,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.color!=="default"&&o[`color${Ee(n.color)}`],n.edge&&o[`edge${Ee(n.edge)}`],o[`size${Ee(n.size)}`]]}})(({theme:e,ownerState:o})=>Z({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:pn(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var n;const i=(n=(e.vars||e).palette)==null?void 0:n[o.color];return Z({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&Z({color:i==null?void 0:i.main},!o.disableRipple&&{"&:hover":Z({},i&&{backgroundColor:e.vars?`rgba(${i.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:pn(i.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Kn.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),qn=l.forwardRef(function(e,o){const n=Ke({props:e,name:"MuiIconButton"}),{edge:i=!1,children:a,className:r,color:p="default",disabled:c=!1,disableFocusRipple:d=!1,size:h="medium"}=n,g=Re(n,Yn),w=Z({},n,{edge:i,color:p,disabled:c,disableFocusRipple:d,size:h}),m=Jn(w);return t.jsx(Xn,Z({className:oe(m.root,r),centerRipple:!0,focusRipple:!d,disabled:c,ref:o},g,{ownerState:w,children:a}))});function Zn(e){return ft("MuiSkeleton",e)}We("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Qn=["animation","className","component","height","style","variant","width"];let Pe=e=>e,Tt,At,St,Et;const ei=e=>{const{classes:o,variant:n,animation:i,hasChildren:a,width:r,height:p}=e;return wt({root:["root",n,i,a&&"withChildren",a&&!r&&"fitContent",a&&!p&&"heightAuto"]},Zn,o)},ti=Ie(Tt||(Tt=Pe`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ni=Ie(At||(At=Pe`
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
`)),ii=Ne("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],n.animation!==!1&&o[n.animation],n.hasChildren&&o.withChildren,n.hasChildren&&!n.width&&o.fitContent,n.hasChildren&&!n.height&&o.heightAuto]}})(({theme:e,ownerState:o})=>{const n=Tn(e.shape.borderRadius)||"px",i=An(e.shape.borderRadius);return Z({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:vn(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},o.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},o.variant==="circular"&&{borderRadius:"50%"},o.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},o.hasChildren&&{"& > *":{visibility:"hidden"}},o.hasChildren&&!o.width&&{maxWidth:"fit-content"},o.hasChildren&&!o.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&qt(St||(St=Pe`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),ti),({ownerState:e,theme:o})=>e.animation==="wave"&&qt(Et||(Et=Pe`
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
    `),ni,(o.vars||o).palette.action.hover)),Oe=l.forwardRef(function(e,o){const n=Ke({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:a,component:r="span",height:p,style:c,variant:d="text",width:h}=n,g=Re(n,Qn),w=Z({},n,{animation:i,component:r,variant:d,hasChildren:!!g.children}),m=ei(w);return t.jsx(ii,Z({as:r,ref:o,className:oe(m.root,a),ownerState:w},g,{style:Z({width:h,height:p},c)}))}),kt=()=>(X(),t.jsxs(V,{children:[t.jsxs(oi,{children:[t.jsxs(ai,{children:[t.jsx(Oe,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),t.jsxs(ri,{children:[t.jsx(Oe,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),t.jsx(Oe,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),t.jsx(Oe,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),t.jsx(V,{padding:"40px 0 40px 0",children:t.jsx(lt,{type:dt.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),oi=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ai=s.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,ri=s.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,si=()=>{var n,i;const e=X(),{aliasDetails:{aliasChainId:o}}=N(a=>a.admin);return t.jsxs(K,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(xe,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(i=(n=ct[o])==null?void 0:n.label)==null?void 0:i.split(" ")[0]," Alias Network."]})," ",t.jsx(xe,{textAlign:"center",margin:"5px 0px 60px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),t.jsxs(K,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[t.jsx(Zt,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(Ga,{margin:"auto 15px",textTransform:"none",color:e.color,size:"16px",weight:"600",children:"Processing"})]})]})},li=()=>{var i;he();const e=X(),{switchChain:o}=ge(),{aliasDetails:{aliasChainId:n}}=N(a=>a.admin);return t.jsxs(K,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(xe,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",t.jsx(di,{children:(i=ct[n])==null?void 0:i.label})," to start ",t.jsx("br",{}),"verifying your Channel Alias."]}),t.jsx(Wa,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:t.jsx(te,{variant:"primary",onClick:()=>o(n),size:"large",children:t.jsx(Ka,{color:"white",children:"Change Network"})})})]})},di=s.b`
  color: #cf1c84;
`,ci=({aliasEthAccount:e,setAliasVerified:o})=>{var B,j;const n=X(),{account:i,provider:a,chainId:r}=ge(),p=a.getSigner(i),c=De(),d=new Ya(ct[r].commAddress,Ja.epnsComm,p),[h,g]=l.useState(""),[w,m]=l.useState(!1),u=e,x={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"},84532:{label:"Base Sepolia",url:"https://www.alchemy.com/faucets/base-sepolia"},59141:{label:"Linea Sepolia",url:"https://www.infura.io/faucet/linea"}},E=async()=>{u==e&&P()},L=async()=>{const{aliasVerified:k}=await Za({account:i,chainId:r}).then(T=>T?(c(o(T.is_alias_verified)),{aliasVerified:T.is_alias_verified}):{aliasVerified:null});return{aliasVerified:k}},P=()=>{g("Processing"),d.verifyChannelAlias(u).then(async k=>{console.debug(k),g("Transaction Sent! It usually takes 5mins to verify."),await k.wait(1),setTimeout(()=>{g("Transaction Mined!")},2e3),setTimeout(()=>{g("Loading...")},2e3);const T=setInterval(async()=>{const{aliasVerified:D}=await L();D&&(setTimeout(()=>{m(!0)},1e3),clearInterval(T),c(Le(0)))},5e3)}).catch(()=>{g("There was an error"),setTimeout(()=>{g("")},2e3)})};return t.jsxs(K,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsx(me,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),h===""&&t.jsx(xe,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:i}),h===""&&se.appEnv!=="prod"&&t.jsxs(me,{padding:"10px",margin:"10px",borderRadius:$.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",t.jsx(Xa,{href:(B=x[r])==null?void 0:B.url,target:"_blank",children:(j=x[r])==null?void 0:j.label})," ","to proceed."]}),!w&&(h?t.jsxs(K,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(Zt,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(xe,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:h})]}):t.jsx(K,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:t.jsx(te,{variant:"primary",size:"medium",onClick:E,children:"Verify Alias Address"})})),w&&t.jsxs(K,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(qa,{color:"#30CC8B",size:30}),t.jsx(xe,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},pi=({aliasEthAccount:e,setAliasVerified:o})=>{const{processingState:n}=N(i=>i.channelCreation);return t.jsxs(_e,{children:[t.jsxs(xi,{children:[t.jsxs(Qe,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[t.jsx("div",{children:"Waiting for Setup"}),t.jsx(Ze,{type:n>=1?"active":"inactive"})]}),t.jsxs(Qe,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[t.jsx("div",{children:"Change Network"}),t.jsx(Ze,{type:n>=2?"active":"inactive"})]}),t.jsxs(Qe,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[t.jsx("div",{children:"Verify Alias Network"}),t.jsx(Ze,{type:n>=3?"active":"inactive"})]}),t.jsx(hi,{})]}),n===1&&t.jsx(si,{}),n===2&&t.jsx(li,{}),n===3&&t.jsx(ci,{aliasEthAccount:e,setAliasVerified:o})]})},xi=s.div`
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
`,Ze=s.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:e})=>e==="active"&&Ve`
      background: #e20880;
    `};
`,hi=s.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Qe=s.div`
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

  ${({type:e})=>e==="active"&&Ve`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:e})=>e==="active"&&Ve`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:e})=>e==="inactive"&&Ve`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,Mt=({heading:e,subHeading:o})=>{const n=X();return t.jsx(ze,{theme:n,children:t.jsxs(gi,{children:[t.jsx(mi,{style:{color:n.default.color},children:e}),t.jsx(ui,{style:{color:n.modalMessageColor},children:o})]})})},gi=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,mi=s.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,ui=s.h4`
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
`,et=z.forwardRef(({title:e},o)=>{const n=X();return t.jsx(ze,{theme:n,children:t.jsxs(fi,{children:[t.jsx(wi,{style:{color:n.modalMessageColor},children:e}),t.jsx(Ci,{ref:o,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),fi=s.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,wi=s.h4`
  font-family: FK Grotesk Neu;
  font-size: ${e=>e.fontSize||"0.95rem"};
  font-weight: ${e=>e.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${e=>e.marginBottom||"3%"};
`,Ci=s(pt)`
  box-sizing: border-box;
  width: 100%;
`,Rt=({text:e,onClick:o,isLoading:n,topMargin:i,loaderTitle:a})=>{const r=X();return t.jsx(ze,{theme:r,children:t.jsx(ji,{style:{marginTop:i||"55px"},children:n?t.jsx(bi,{children:t.jsx(lt,{type:dt.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:a??"",titleColor:"#fff"})}):t.jsx(te,{onClick:o,variant:"primary",size:"large",children:e})})})},ji=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 55px;
`,bi=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  color: #fff;
  box-sizing: border-box;
  background-color: #cf1c84;
  border-radius: 15px;
  // padding: 3% 8%;
  padding: 8px 16px;
`,yi=({onConfirm:e,onClose:o,toastObject:n})=>{const i=z.useRef();X();const[a,r]=z.useState(!1),p=()=>!a&&o(),c=z.useRef(null);ue(c,()=>p());const d=()=>{var g;r(!0);const h=(g=i==null?void 0:i.current)==null?void 0:g.value;e(h).then(async w=>{console.debug(w),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:m=>t.jsx(je,{size:m,color:"green"})}),o()}).catch(w=>{console.error({err:w}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:m=>t.jsx(q,{size:m,color:"red"})})}).finally(()=>{r(!1)})};return t.jsxs(vi,{ref:c,children:[t.jsx(Mt,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),t.jsx(et,{ref:i,title:"Delegate Address"}),t.jsx(Rt,{text:"Add Delegate",onClick:d,isLoading:a})]})},vi=s.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${S.laptop}){
    width:50vw;
  }
  @media(${S.mobileL}){
    width:95vw;
  }
`,Ti="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",Ai=e=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Si=({onClose:e,onConfirm:o,toastObject:n})=>{const i=z.useRef(),a=z.useRef(),[r,p]=z.useState(!1);X();const c=()=>!r&&e(),d=z.useRef(null);ue(d,()=>c());const h=()=>{var m,u;const g=(m=a==null?void 0:a.current)==null?void 0:m.value,w=(u=i==null?void 0:i.current)==null?void 0:u.value;if(p(!0),g==""||w==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:x=>t.jsx(q,{size:x,color:"red"})}),setTimeout(()=>{p(!1)},500);return}else if(parseInt(g)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:x=>t.jsx(q,{size:x,color:"red"})}),setTimeout(()=>{p(!1)},500);return}o(g,w).then(async x=>{console.debug(x),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:E=>t.jsx(je,{size:E,color:"green"})}),e()}).catch(x=>{console.error(x),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:E=>t.jsx(q,{size:E,color:"red"})})}).finally(()=>{p(!1)})};return t.jsxs(Ei,{ref:d,children:[t.jsx(Mt,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),t.jsx(et,{ref:i,title:"Subgraph ID"}),t.jsx(et,{ref:a,title:"Poll Time (in seconds)"}),t.jsx(Rt,{text:"Add Subgraph",onClick:h,isLoading:r})]})},Ei=s.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${S.laptop}){
    width:50vw;
  }
  @media(${S.mobileL}){
    width:95vw;
  }
`,ki=e=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Mi=e=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ri=({onConfirm:e,onClose:o,toastObject:n})=>{const i=X(),a=De(),{channelDetails:r}=N(m=>m.admin),{CHANNNEL_DEACTIVATED_STATE:p}=N(m=>m.channels),[c,d]=z.useState(!1),h=()=>!c&&o(),g=z.useRef(null);ue(g,()=>h());const w=()=>{d(!0),e().then(async m=>{console.debug(m),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:u=>t.jsx(q,{size:u,color:"red"})}),await m.wait(1),console.info("Transaction Mined!"),a(ht({...r,channelState:p})),d(!1),o()}).catch(m=>{console.error("!!!Error deactivateChannel() --> %o",m),console.error({err:m}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:u=>t.jsx(q,{size:u,color:"red"})}),d(!1)})};return t.jsx(ze,{theme:i,children:t.jsx(Ii,{ref:g,children:c?t.jsxs(Di,{children:[t.jsx(Qt,{size:42,color:$.COLORS.PRIMARY_PINK,type:xt.PROCESSING}),t.jsx(Li,{children:"Verifying"})]}):t.jsxs(t.Fragment,{children:[t.jsx(zi,{style:{color:i.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),t.jsxs(Ni,{children:[t.jsx(ki,{width:36,height:36,onClick:h}),t.jsx($i,{onClick:w,children:t.jsx(Mi,{})})]})]})})})},Ii=s.div`
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
`,Di=s(Q)`
  flex-direction: row;
  //   margin-top:33px;
`,Li=s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,zi=s.div`
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
`;s.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;const Ni=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,$i=s.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;s.img`
  height: 36px;
  width: 17px;
`;const Pi="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.8312%2012.3465L12.8975%208.28027L0.99987%208.28027'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.06626%201.00014L1%205.06641L12.8976%205.06641'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Dt=({onMintPushToken:e,noOfPushTokensToCheck:o,containerProps:n})=>{const{account:i,provider:a}=ge(),r=se.appEnv==="prod",[p,c]=l.useState(!1),d=async()=>{const w=await zr({address:i,provider:a,noOfPushTokensToCheck:o});c(!w)},{isModalOpen:h,ModalComponent:g}=Ae();return l.useEffect(()=>{(async()=>await d())()},[o]),t.jsxs(t.Fragment,{children:[t.jsx(Oi,{children:p?t.jsxs(Bi,{style:n,children:[t.jsx(Ui,{children:r?"You do not have sufficient PUSH Tokens. Swap to add more PUSH.":"Follow these steps to ensure you have enough Testnet Push to proceed."}),r?t.jsx(te,{leadingIcon:t.jsx(He,{width:"12px",height:"12px",margin:"0 0.5rem 0 0",src:Pi}),size:"extraSmall",children:"Swap Tokens for PUSH"}):t.jsxs(Fi,{children:[t.jsxs(_i,{href:"https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",target:"_blank",children:[t.jsx(Lt,{children:"1"}),t.jsx(zt,{children:"Sepolia ETH Faucet"})]}),t.jsxs(Vi,{onClick:async()=>{await e(1e3),await d()},children:[t.jsx(Lt,{children:"2"}),t.jsx(zt,{children:"Get Testnet PUSH"})]})]})]}):""}),h&&t.jsx(g,{InnerComponent:Qa,InnerComponentProps:{defaultPushTokenAmount:o},modalPadding:"0px",modalPosition:Se.ON_ROOT})]})},Oi=s.div`
  width: 100%;
  transform: translateY(-40px);
`,Bi=s.div`
  box-sizing: border-box;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #f4dcea;
  border-radius: 0px 0px 28px 28px;
  padding: 32px 32px 20px 32px;
  margin-top: 24px;
  margin-bottom: -40px;

  @media ${S.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 24px 16px 24px;
  }
`,Ui=s(me)`
    color:#D53A94;
    font-size:15px
    font-weight:400;
    line-height:21px;
    text-align: left;
    margin:0 2rem 0 0;
    max-width: 45%;
    @media ${S.laptop} {
        max-width: 55%;
    }
    @media ${S.tablet} {
        max-width: 100%;
        margin: 0;
        margin-bottom: 0.8rem;
    }
`,Fi=s.div`
  display: flex;
  flex-direction: row;
`,_i=s.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 1rem;
  @media ${S.laptop} {
    margin: 0 1.5rem 0 0;
  }
`,Lt=s(me)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border: 1.5px solid #d53a94;
  color: #cf1c84;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  max-width: 18px;
  max-height: 18px;
  margin-right: 0.6rem;
`,Vi=s.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  @media ${S.laptop} {
    margin: 0;
  }
`,zt=s.label`
  color: #fff;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`,Hi=e=>l.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1209 6.84638 16.2635 4.78216 14.7407 3.25932C13.2178 1.73648 11.1536 0.87913 9 0.875ZM12.8672 7.57812L8.28907 11.9531C8.17071 12.0645 8.01406 12.126 7.85157 12.125C7.77214 12.1261 7.69328 12.1115 7.61953 12.082C7.54578 12.0525 7.47861 12.0087 7.42188 11.9531L5.13282 9.76562C5.06933 9.71023 5.01769 9.64257 4.98102 9.56672C4.94434 9.49086 4.92338 9.40837 4.9194 9.32421C4.91542 9.24004 4.92849 9.15594 4.95784 9.07696C4.98719 8.99798 5.03221 8.92575 5.09019 8.86461C5.14816 8.80347 5.2179 8.75469 5.29522 8.72119C5.37253 8.68769 5.45582 8.67017 5.54007 8.66968C5.62433 8.66919 5.70781 8.68574 5.78551 8.71834C5.86321 8.75094 5.93351 8.79891 5.99219 8.85938L7.85157 10.6328L12.0078 6.67188C12.1293 6.56585 12.2871 6.51091 12.4482 6.51853C12.6093 6.52615 12.7612 6.59575 12.8722 6.71277C12.9832 6.8298 13.0446 6.98519 13.0437 7.14646C13.0428 7.30773 12.9795 7.4624 12.8672 7.57812Z",fill:"#D53893"})),Gi="DD MMM, YYYY",Wi=({onConfirm:e,onClose:o,toastObject:n})=>{const i=X(),{chainId:a,account:r,provider:p}=ge(),c=De(),{channelDetails:d,canVerify:h,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:w}}=N(f=>f.admin),{CHANNEL_ACTIVE_STATE:m,CHANNNEL_DEACTIVATED_STATE:u}=N(f=>f.channels),[x,E]=l.useState("");let{channelState:L}=d;L||(L=d.activation_status);const P=L===m,B=L===u,[j,k]=l.useState(!1),[T,D]=l.useState(!1),[H,G]=l.useState(0),M=()=>!j&&o(),W=l.useRef(null);ue(W,()=>M());const U=se.coreContractChain===a;fe(600),l.useEffect(()=>{!d||!U||async function(){const f=d.channelStartBlock.toString(),b=await new en(se.coreRPC).getBlock(+f),v=tn(b.timestamp*1e3);E(v.format(Gi))}()},[d]),l.useEffect(()=>{!r||!p||async function(){const f=await hn({address:r,provider:p,contractAddress:Ge.epnscore});G(parseInt(f));const b=parseInt(f);b>=50&&b!=0?D(!0):D(!1)}()},[r,p]);const F=async f=>{await gn({noOfTokens:f,provider:p,account:r})},Y=async()=>{if(k(!0),!p)return;const f=p.getSigner(r);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const b=await mn({signer:f,contractAddress:Ge.epnscore,amount:50-H});console.debug("response",b),b&&(G(50),D(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:v=>t.jsx(je,{size:v,color:"green"})}),k(!1))}catch(b){console.error(b),b.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:v=>t.jsx(q,{size:v,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:v=>t.jsx(q,{size:v,color:"red"})}),console.error("Error --> %o",b),console.error({err:b}))}k(!1)},C=async()=>{k(!0);try{const f=nn("50",18),b=await e(f);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:v=>t.jsx(je,{size:v,color:"green"})}),await b.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:v=>t.jsx(je,{size:v,color:"green"})}),c(ht({...d,channelState:m})),o(),k(!1)}catch(f){console.error("Error reactivateChannel",{err:f}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:b=>t.jsx(q,{size:b,color:"red"})}),k(!1)}};return t.jsx(ze,{theme:i,children:t.jsxs(Ki,{ref:W,children:[t.jsxs(Yi,{children:[t.jsx(Ji,{children:"Reactivate Channel"}),t.jsx(qn,{onClick:M,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:t.jsx(er,{size:"1.5rem",style:{color:i.modalIconColor}})})]}),t.jsxs(qi,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(Zi,{src:d.icon}),t.jsxs(Nt,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(ao,{children:[d.name,h&&t.jsx(Qi,{src:"/verify.png"})]}),t.jsxs(Nt,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[U&&w&&!g||!U&&!g?t.jsx(no,{children:"Alias Network Setup Pending"}):t.jsxs(Xi,{justifyContent:"flex-start",children:[t.jsxs(eo,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(io,{children:d.subscriber_count})]}),t.jsx(to,{active:P,children:P?"Active":B?"Deactivated":"Blocked"})]}),x&&t.jsxs(oo,{children:["Created ",x]})]})]})]}),t.jsxs(ro,{children:[t.jsx(so,{children:"Channel reactivation fee"}),t.jsxs(V,{flex:"0",children:[T?t.jsx(lo,{src:Hi}):null,t.jsxs(co,{children:[50," PUSH"]})]})]}),t.jsx(Dt,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:F}),j?t.jsxs(xo,{children:[t.jsx(Qt,{size:42,color:$.COLORS.PRIMARY_PINK,type:xt.PROCESSING}),t.jsx(ho,{children:"Verifying Transaction"})]}):t.jsx(po,{children:H>=50?t.jsx(Pt,{onClick:C,children:"Reactivate"}):t.jsx(Pt,{onClick:Y,children:"Approve PUSH"})})]})})},Ki=s.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${S.mobileL} {
    padding: 0.5rem;
  }
  @media (${S.laptop}) {
    width: 50vw;
  }
  @media (${S.mobileL}) {
    width: 95vw;
  }
`,Yi=s(V)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${S.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${S.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Ji=s(tr)`
  color: ${e=>e.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${S.laptop} {
    font-size: 1.2rem;
  }
  @media ${S.mobileL} {
    width: 85%;
  }
`,Nt=s(Q)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Xi=s(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,qi=s(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Zi=s.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${S.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${S.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Qi=s.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,eo=s.div`
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
  @media ${S.laptop} {
    width: 52px;
    height: 22px;
  }
`,$t=s.div`
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
  @media ${S.laptop} {
    padding: 1px 8px;
  }
`,to=s($t)`
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
`,no=s($t)`
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
`,io=s.span`
  font-weight: 400;
  font-size: 14px;
`,oo=s.div`
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
  @media ${S.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,ao=s.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${e=>e.theme.color};
  @media ${S.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,ro=s(V)`
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
  @media ${S.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,so=s.p`
  margin: 0px;
  color: ${e=>e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${S.mobileL} {
    width: 100%;
    text-align: center;
  }
`,lo=s.img``,co=s.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${S.mobileL} {
    width: 100%;
    text-align: center;
  }
`,po=s(V)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Pt=s(nr)`
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

  @media ${S.mobileL} {
    width: 80%;
  }
`,xo=s(Q)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,ho=s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,go=50,mo=se.coreContractChain;function uo({DropdownRef:e,isDropdownOpen:o,closeDropdown:n}){De();const{account:i,chainId:a}=ge(),{epnsWriteProvider:r,epnsCommWriteProvider:p}=N(_=>_.contracts),{channelDetails:c}=N(_=>_.admin),{CHANNNEL_DEACTIVATED_STATE:d,CHANNEL_BLOCKED_STATE:h}=N(_=>_.channels),{userPushSDKInstance:g}=N(_=>_.user),w=X(),{channelState:m}=c,u=mo===a,x=fe(425),{isModalOpen:E,showModal:L,ModalComponent:P}=Ae(),{isModalOpen:B,showModal:j,ModalComponent:k}=Ae(),{isModalOpen:T,showModal:D,ModalComponent:H}=Ae(),G=o&&!E&&!B&&!T;ue(e,()=>G&&n());const[M,W]=z.useState(!1),[U,F]=z.useState(go),[Y,C]=z.useState(0),f=m===d,b=m===h,v=b||f;z.useEffect(()=>{C(+Dr.formatBigNumberToMetric(c.poolContribution,!0))},[i,c.poolContribution]),he();const Ce=()=>{b||(f?j():L())},le=he(),pe=r.reactivateChannel,ve=he(),de=()=>r.deactivateChannel(),O=he(),re=async(_,ce)=>{if(!(_==""||ce=="")&&!(_<60))try{const ae=_+"+"+ce,J=on(ae);return r.addSubGraph(J)}catch(ae){console.error(ae)}};return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:t.jsx(fo,{background:w,children:t.jsxs(wo,{children:[se.appEnv!=="prod"&&t.jsx(Ot,{disabled:v,onClick:()=>!v&&D(),children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[t.jsx(Be,{src:Ti,alt:"cube"}),t.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),u&&t.jsx(Ot,{isChannelDeactivated:f,onClick:Ce,children:t.jsx(Co,{isChannelBlocked:b,isChannelDeactivated:f,children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[b?t.jsx(Be,{src:It,alt:"red-bell"}):f?t.jsx(Be,{src:Ai,alt:"green-bell"}):t.jsx(Be,{src:It,alt:"red-bell"}),t.jsx("div",{style:{width:"10px"}}),b?"Channel Blocked":f?"Activate Channel":"Deactivate Channel"]})})})]})})}),t.jsx(P,{InnerComponent:Ri,onConfirm:de,toastObject:ve,modalPosition:Se.ON_ROOT}),t.jsx(k,{InnerComponent:Wi,onConfirm:pe,toastObject:le,modalMargin:x?"10rem 1rem 0 1rem":"",modalPosition:Se.ON_ROOT}),t.jsx(H,{InnerComponent:Si,onConfirm:re,toastObject:O,modalPosition:Se.ON_ROOT})]})}const fo=s.div`
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
`,wo=s.div`
  flex-direction: column;
  gap: 20px;
  display: ${e=>e.inactive?"none":"flex"};
`;s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,s.div`
  margin: 0px 10px;
`,s.div`
  text-decoration: underline;
  color: ${e=>e.isChannelDeactivated?"#674C9F":"#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;const Ot=s.button`
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
`,Co=s.div`
  color: ${e=>e.isChannelBlocked?"red":e.isChannelDeactivated?"#30CC8B":"red "};
`,Be=s.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function Bt(){const e=z.useRef(null),[o,n]=z.useState(!1);X();const i=()=>{n(r=>!r)},a=()=>{n(!1)};return t.jsxs(V,{flex:"0",ref:e,children:[t.jsx(jo,{active:o,onClick:i}),o&&t.jsx(uo,{DropdownRef:e,isDropdownOpen:o,closeDropdown:a})]})}s.div`
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
`;const jo=s(ir)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${e=>e.active?"rotateZ(90deg)":"none"};
`,Ut=({title:e,description:o,Button:n,style:i})=>{const a=X(),r=fe(700);return t.jsxs(vo,{style:i,children:[t.jsxs(K,{align:"flex-start",children:[t.jsx(bo,{style:{color:a.color},children:e}),!r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"4px"}}),t.jsx(yo,{children:o})]})]}),n]})},bo=s.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.color};
`,yo=s.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${e=>e.theme.default.secondaryColor};
`,vo=s(or)`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 20px 24px;

  @media ${S.tablet} {
    padding: 20px 12px;
    flex: 0;
  }
`;function To(e){return an({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function Ao(e){return an({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}const So=({delegateAddress:e,maxWidth:o})=>{const[n,i]=l.useState(e),[a,r]=l.useState(!1),p=fe(1200);return l.useEffect(()=>{if(!p)i(e);else{const c=rn(e,5);i(c)}},[p]),t.jsx(Ro,{onMouseLeave:()=>r(!1),minWidth:p?"120px":"350px",children:t.jsx(Eo,{addressText:n,isCopied:a,setIsCopied:r,delegateAddress:e})})},Eo=({addressText:e,isCopied:o,setIsCopied:n,delegateAddress:i})=>{const a=fe(1e3),[r,p]=l.useState(!1),c=h=>{p(!1)},d=h=>{p(!0)};return t.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},onMouseEnter:d,onMouseLeave:c,children:[t.jsx(Io,{children:rn(e,7,7)}),r&&t.jsx(ko,{isMobile:a?"10px":"50px",onClick:()=>{navigator.clipboard.writeText(i),n(!0)},children:o?t.jsx(To,{size:18,color:"white",style:{paddingTop:6}}):t.jsx(Ao,{size:18,color:"white",style:{paddingTop:6}})})]})},ko=s.div`
  cursor: pointer;
  margin-left: ${e=>e.isMobile||""};
`,Mo=s.span`
  flex: 3;
  // margin-right: 30px;
  // margin-left: 10px;
  padding: 0px 15px;
  max-height: 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: ${e=>e.maxWidth||"fit-content"};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 164%;
  border-radius: 13px;

  &:active {
    opacity: 0.75;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 4px 8px;
  }
`,Ro=s(Mo)`
  color: ${e=>e.theme.color};

  &:hover {
    background: rgb(226, 8, 128);
    background: linear-gradient(
      107deg,
      rgba(226, 8, 128, 1) 30%,
      rgba(103, 76, 159, 1) 70%,
      rgba(53, 197, 243, 1) 100%
    );
    opacity: 0.9;
    color: #fff;
    cursor: pointer;
    pointer: hand;
  }
`,Io=s.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`,Ft=({options:e,item:o})=>{const[n,i]=l.useState(!1),a=l.useRef();return ue(a,()=>i(!1)),t.jsxs("div",{children:[t.jsx(Do,{onClick:()=>i(!0)}),n&&t.jsx(Lo,{onMouseLeave:()=>i(!1),ref:a,children:e.map(({icon:r,onClick:p,text:c},d)=>t.jsxs(zo,{onClick:()=>p(o),index:d,children:[r,t.jsx(No,{children:c})]},d))})]})},Do=s(ar)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${e=>e.theme.default.color};
`,Lo=s.div`
  padding: 10px 6px;
  width: 119px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.default.border};
  position: absolute;
  top: 3px;
  right: 0px;
  background-color: ${e=>e.theme.default.bg};
  z-index: 2;
`,zo=s.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: ${e=>e.index===0?"0px":"16px"};
`,No=s.span`
  margin-left: 8px;
`,tt=({children:e})=>t.jsx($o,{children:e}),$o=s.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`,_t=e=>{const o=(n,i)=>n.toLowerCase()===i.toLowerCase();return t.jsx(Po,{style:e.style,isLoading:e.isLoading,children:t.jsx(K,{flex:"5",justify:"flex-start",align:"stretch",children:e.isLoading?t.jsx(Uo,{children:t.jsx(lt,{type:dt.SEAMLESS})}):t.jsxs(t.Fragment,{children:[e.items&&e.items.length>0&&e.items.map(n=>{var i,a;return t.jsxs("div",{children:[t.jsx(Bo,{}),t.jsxs(K,{direction:"row",justify:"space-between",padding:"9.5px 0px",children:[t.jsxs(K,{direction:"row",justify:"flex-start",margin:"0px 0px 0px -15px",children:[e.isAddress?t.jsx(Fo,{children:t.jsx(So,{delegateAddress:n,maxWidth:"200px"})}):t.jsxs(t.Fragment,{children:[t.jsx(Oo,{children:n.description}),n.type===2&&t.jsx(tt,{children:"Range"}),n.type===3&&t.jsx(tt,{children:"Multi-Range"})]}),e.isAddress&&o(e.account,n)&&t.jsx(tt,{children:"Creator"})]}),e.isAddress===!0&&((i=e.addressDropdownOptions)==null?void 0:i.length)>0&&!o(e.account,n)&&t.jsx(Ft,{options:e.addressDropdownOptions,item:n}),e.isAddress===!1&&((a=e.settingsDropdownOptions)==null?void 0:a.length)>0&&t.jsx(Ft,{options:e.settingsDropdownOptions,item:n})]})]},e.isAddress?n:n.description||n.index)}),e.items&&e.items.length===0&&e.isAddress===!1&&t.jsx($r,{title:"No settings added",description:"Add settings for users to customize their notification preferences.",onClick:e.onClickEmptyListButton,buttonTitle:e.emptyListButtonTitle})]})})})},Po=s.div`
  padding: ${e=>e.isLoading?"0px":"0px 24px 16px"};
  flex: 1;

  @media ${S.tablet} {
    flex: 0;
    padding: ${e=>e.isLoading?"0px":"0px 0px 10px"};
  }
`,Oo=s.span`
  margin-left: 15px;
  color: ${e=>e.theme.scheme==="light"?e.theme.default.color:e.theme.default.secondaryColor};
`,Bo=s.div`
  background-color: ${e=>e.theme.default.border};
  height: 1px;
`,Uo=s.div`
  height: 100px;
`,Fo=s.div`
  @media ${S.tablet} {
    margin: 0px 0px 0px 5px;
  }
`,_o="DD MMM, YYYY";function Vo({isChannelExpired:e,setIsChannelExpired:o,showEditChannel:n,destroyChannel:i}){var ae,J,Te;const{account:a,chainId:r,wallet:p}=ge(),{delegatees:c,channelDetails:d,canVerify:h,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:w}}=N(R=>R.admin),{channelSettings:m}=N(R=>R.channels),{userPushSDKInstance:u}=N(R=>R.user),{handleConnectWalletAndEnableProfile:x}=l.useContext(sn),{CHANNEL_ACTIVE_STATE:E,CHANNNEL_DEACTIVATED_STATE:L}=N(R=>R.channels),{processingState:P}=N(R=>R.channelCreation),[B,j]=l.useState([]),[k,T]=l.useState("");let{channelState:D}=d;D||(D=d.activation_status);const H=D===E,G=D===L,M=se.coreContractChain===r,W=fe(600),[U,F]=l.useState([a]),[Y,C]=l.useState(void 0),{epnsCommWriteProvider:f}=N(R=>R.contracts),b=rr(),{showModal:v,ModalComponent:Ce}=Ae(),le=he(),pe=async()=>{u.signer||await x({wallet:p}),v()},ve=async R=>u.channel.delegate.add(mt(R,r)),de=d.expiryTime?sr(((ae=d.expiryTime)==null?void 0:ae.toString())*1e3):"",O=d.expiryTime?lr(((J=d.expiryTime)==null?void 0:J.toString())*1e3):!0,re=d.expiryTime?dr(((Te=d.expiryTime)==null?void 0:Te.toString())*1e3,14):"";l.useEffect(()=>{d.channelType==gt.TIMEBOUND&&(O||o(!0))},[O]),l.useEffect(()=>{},[d,h]),l.useEffect(()=>{!d||!M||async function(){const R=d.channelStartBlock.toString(),ne=await new en(se.coreRPC).getBlock(+R),A=tn(ne.timestamp*1e3);T(A.format(_o))}()},[d]),l.useEffect(()=>{a&&(!c||!c.length?C(a):C(M?c[0].channel:c[0].alias_address))},[c,a]),l.useEffect(()=>{a&&(async()=>{try{const R=mt(a,r),ne=await u.channel.delegate.get({channel:R});if(ne){const A=ne.map(I=>I);A.unshift(a),F(A)}}catch(R){console.error(R)}})()},[a,r]);const _=async R=>{let ne=u;if(!(!ne.signer&&(ne=await x({wallet:p}),!ne)))return ne.channel.delegate.remove(mt(R,r))},ce=()=>{b(pr.ChannelSettings)};return t.jsxs(Q,{children:[t.jsxs(Go,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(Wo,{src:d.icon}),t.jsxs(nt,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(na,{children:[d.name,h&&t.jsx(Ko,{src:"/verify.png"})]}),t.jsxs(nt,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[M&&w&&!g||!M&&!g?t.jsx(Zo,{children:"Alias Network Setup Pending"}):t.jsxs(Ho,{justifyContent:"flex-start",children:[t.jsxs(Xo,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(Qo,{children:d.subscriber_count})]}),t.jsxs(qo,{active:H,children:[G&&t.jsx(He,{width:"12px",src:Cn,margin:"0 5px 2px 0px",height:"30px"}),H?"Active":G?"Deactivated":"Blocked"]}),d.channelType==gt.TIMEBOUND&&!e&&t.jsxs(V,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(He,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(me,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",de]})]}),d.channelType==gt.TIMEBOUND&&e&&t.jsxs(V,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(He,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(me,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",de]})]})]}),k&&t.jsxs(ea,{children:["Created ",k]})]})]})]}),W&&t.jsxs(V,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!e&&M&&t.jsx(te,{onClick:n,size:"small",variant:"outline",children:"Edit Channel"}),!e&&t.jsx(Bt,{}),e&&M&&t.jsx(te,{onClick:i,size:"small",variant:"danger",children:"Delete Channel"})]}),e&&t.jsx(Q,{alignItems:"flex-start",children:t.jsxs(Ht,{margin:"25px 0 0 0",children:[t.jsx(me,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",t.jsx(me,{fontWeight:"600",children:re})]})}),t.jsx(Q,{alignItems:"flex-start",children:t.jsx(Ht,{children:d.info})}),h&&t.jsx(nt,{alignItems:"flex-start",padding:"5px 0px",children:t.jsx(ia,{children:t.jsxs(ta,{children:[t.jsx("span",{children:"verified by:"}),t.jsx(Yo,{src:B.icon}),t.jsx(Jo,{children:B.name})]})})}),P===0&&t.jsxs(Q,{children:[t.jsx(_e,{children:t.jsxs(Gt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(Ut,{title:"Notification Settings",description:"Customize notification preferences for users",Button:t.jsx(Pr,{onClick:ce})}),t.jsx(_t,{account:a,isAddress:!1,items:m[a],isLoading:!1,onClickEmptyListButton:ce,emptyListButtonTitle:"Add Setting"})]})}),t.jsx(_e,{children:t.jsxs(Gt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(Ut,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:t.jsx(Or,{onClick:pe})}),t.jsx(_t,{account:a,isAddress:!0,items:U,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:_,icon:t.jsx(cr,{})}]})]})})]}),t.jsx(Ce,{InnerComponent:yi,onConfirm:ve,toastObject:le,modalPosition:Se.ON_ROOT})]})}const nt=s(Q)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Ho=s(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Go=s(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Wo=s.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${S.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Ko=s.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Yo=s.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,Jo=s.div``,Xo=s.div`
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
`,Vt=s.div`
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
`,qo=s(Vt)`
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
`,Zo=s(Vt)`
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
`,Qo=s.span`
  font-weight: 400;
  font-size: 14px;
`;s.div`
  display: flex;
  flex-direction: column;
  @media ${S.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const ea=s.div`
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
`,ta=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,na=s.div`
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
`,ia=s.div`
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
`,Ht=s.div`
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
`,Gt=s(ln)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
`,oa=({channelName:e,setChannelName:o,channelInfo:n,setChannelInfo:i,channelURL:a,setChannelURL:r,editChannel:p,errorInfo:c,setErrorInfo:d})=>{const h=X(),g=({message:m})=>t.jsxs(K,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[t.jsx(gr,{color:"red",size:"20"}),t.jsx(xe,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:m})]}),w=m=>{const u=m.target.value;un(u)?(d(""),r(u)):(d(x=>({...x,url:"Channel URL is invalid! Please enter a valid url!"})),r(u))};return t.jsx(aa,{children:t.jsx(ra,{onSubmit:p,children:t.jsxs(sa,{children:[t.jsxs(K,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(it,{style:{color:h.editChannelPrimaryText},children:"Channel Name"}),t.jsx(K,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:t.jsx(pt,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",height:"25px",value:e,onChange:m=>{o(m.target.value)}})})]}),(c==null?void 0:c.name)&&t.jsx(g,{message:c==null?void 0:c.name}),t.jsxs(K,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[t.jsxs(K,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(it,{style:{color:h.editChannelPrimaryText},children:"Channel Description"}),t.jsx(xe,{color:h.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-n.length})]}),t.jsx(xr,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,value:n,onChange:m=>{i(m.target.value.slice(0,250))},autocomplete:"off"})]}),(c==null?void 0:c.description)&&t.jsx(g,{message:c==null?void 0:c.description}),t.jsxs(K,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(it,{style:{color:h.editChannelPrimaryText},children:"Channel Website URL"}),t.jsx(pt,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",value:a,onChange:m=>{w(m)}})]}),(c==null?void 0:c.url)&&t.jsx(g,{message:c==null?void 0:c.url})]})})})},aa=s(_e)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,ra=s(hr)`
  height: inherit;
`,it=s.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,sa=s(K)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,la="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",da=({onClose:e,InnerComponentProps:o})=>{const{setChannelLogo:n,croppedImage:i,setCroppedImage:a,imageSrc:r,setImageSrc:p,imageType:c,setImageType:d}=o,h=l.useRef(),g=l.useRef(null);ue(g,()=>{e()});const w=x=>{x.preventDefault()},m=x=>{x.preventDefault(),x.stopPropagation(),u(x.dataTransfer,"transfer",x)},u=async(x,E,L)=>{if(L.preventDefault(),a(void 0),x==null?void 0:x.files[0]){var P=new FileReader;P.readAsDataURL(x==null?void 0:x.files[0]),P.onloadend=function(B){var j;p(P.result),d((j=x==null?void 0:x.files[0])==null?void 0:j.type)}}};return t.jsxs(ca,{ref:g,children:[t.jsx(ha,{children:t.jsx(ga,{onClick:e})}),t.jsxs(pa,{children:[t.jsx(xa,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),t.jsx(fa,{className:"",children:t.jsx("div",{onDragOver:x=>w(x),onDrop:x=>m(x),className:"bordered",children:t.jsxs("div",{className:"inner",children:[t.jsx("div",{className:"crop-div",children:i?t.jsx("div",{className:"crop-innderdiv",children:t.jsx("div",{children:t.jsx("img",{alt:"Cropped Img",src:i,className:"croppedImage"})})}):t.jsx("div",{className:"crop-innderdiv",children:t.jsx(Fr,{className:"cropper",imageSrc:r,imageType:c,onImageCropped:x=>a(x),width:"128px",height:"128px",ref:h})})}),t.jsxs(ma,{children:[t.jsx("p",{className:"text-below",children:"Drag and Drop or"}),t.jsx("div",{className:"text-div",children:t.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[t.jsx("div",{children:"Browse to Choose"}),t.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:x=>u(x.target,"target",x),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),t.jsx(ua,{children:i?t.jsx(t.Fragment,{children:t.jsx(te,{variant:"primary",size:"medium",onClick:()=>{n(i),e()},children:"Upload Image"})}):t.jsx(t.Fragment,{children:t.jsx(te,{variant:"primary",size:"medium",onClick:()=>{h.current.showCroppedImage()},children:"Crop Image"})})})]})]})},ca=s.div``,pa=s.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,xa=s.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${e=>e.theme.modalTextColor};
`,ha=s.div`
  text-align: end;
  width: 100%;
`,ga=s(mr)`
  cursor: pointer;
  font-size: 20px;
  color: ${e=>e.theme.modalTextColor};
`,ma=s(ln)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,ua=s(Q)``,fa=s.div`
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
`,ye=e=>e.trim().length==0;function wa(e,o){var n=new XMLHttpRequest;n.onload=function(){var i=new FileReader;i.onloadend=function(){o(i.result)},i.readAsDataURL(n.response)},n.open("GET",e),n.responseType="blob",n.send()}const Ca=e=>{var o=Vr,n=e.split(";base64,").pop(),i=ur.from(n,"base64"),a=o(i);return a.width>128||a.height>128?(console.error("Image size check failed... returning"),{success:0,info:"Image size check failed, Image should be 128X128PX"}):(console.debug("Image verification",n.charAt(0)),n.charAt(0)==="/"?{success:1,info:"Image checks passed"}:n.charAt(0)==="i"?{success:1,info:"Image checks passed"}:{success:0,info:"Image extension should be jpg or png"})};function ja({closeEditChannel:e,UploadLogoComponent:o,displayUplaodLogoModal:n}){const{account:i,provider:a}=ge(),{channelDetails:r,aliasDetails:{isAliasVerified:p,aliasAddrFromContract:c}}=N(A=>A.admin),{epnsReadProvider:d,epnsWriteProvider:h}=N(A=>A.contracts),g=50,[w,m]=l.useState(r==null?void 0:r.name),[u,x]=l.useState(r==null?void 0:r.info),[E,L]=l.useState(r==null?void 0:r.url),[P,B]=l.useState(r==null?void 0:r.icon),[j,k]=l.useState(r==null?void 0:r.icon),[T,D]=l.useState(r==null?void 0:r.icon),[H,G]=l.useState(T),[M,W]=l.useState(null),[U,F]=l.useState(!1),[Y,C]=l.useState({name:"",description:"",address:"",url:""}),[f,b]=l.useState(!1),[v,Ce]=l.useState(0),[le,pe]=l.useState(0),[ve,de]=l.useState(!1),O=he();l.useEffect(()=>{i&&async function(){const A=await d.channelUpdateCounter(i);Ce(g*(Number(A)+1))}()},[i]),l.useEffect(()=>{!i||!a||async function(){const A=await hn({address:i,provider:a,contractAddress:Ge.epnscore});pe(parseInt(A));const I=parseInt(A);I>=v&&I!=0?F(!0):F(!1)}()},[i,a]);const re=async()=>{if(b(!0),!a)return;const A=a.getSigner(i);O.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const I=await mn({signer:A,contractAddress:Ge.epnscore,amount:v-le});console.debug("response",I),I&&(b(!1),pe(v),F(!0),O.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:ee=>t.jsx(je,{size:ee,color:"green"})}))}catch(I){console.error(I),I.code=="ACTION_REJECTED"?O.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:ee=>t.jsx(q,{size:ee,color:"red"})}):(O.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:ee=>t.jsx(q,{size:ee,color:"red"})}),console.error("Error --> %o",I),console.error({err:I}))}b(!1)},_=()=>{de(!1)},ce=fe(600),ae=l.useRef(null);ue(ae,()=>{_()});const J=()=>(C(""),ye(w)||ye(u)||ye(E)?(ye(w)&&C(A=>({...A,name:"Please, enter the channel name."})),ye(u)&&C(A=>({...A,description:"Please, enter the channel description"})),ye(E)&&C(A=>({...A,url:"Please, enter the channel url"})),!1):fn(w,125)?fn(E,125)?un(E)?!0:(C(A=>({...A,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(C(A=>({...A,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(C(A=>({...A,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Te=()=>!(w!==(r==null?void 0:r.name)||u!==(r==null?void 0:r.info)||E!==(r==null?void 0:r.url)||j!==(r==null?void 0:r.icon)),R=async A=>{try{if(!J())return;b(!0);const I=JSON.stringify({name:w,info:u,url:E,icon:j,aliasDetails:r.aliasDetails||fr({chainId:parseInt(r.chain_id),address:r.address})});console.debug(I);const ee=await wr(I);console.debug("IPFS storagePointer:",ee);const ot="1+"+ee,at=on(ot),rt=nn(v.toString(),18);O.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Ue=await h.updateChannelMeta(i,at,rt,{gasLimit:1e6});console.debug(Ue),await Ue.wait(),b(!1),O.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:ke=>t.jsx(je,{size:ke,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(I){b(!1),console.error(I.message),I.code=="ACTION_REJECTED"?O.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:ee=>t.jsx(q,{size:ee,color:"red"})}):(O.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:ee=>t.jsx(q,{size:ee,color:"red"})}),console.error("Error --> %o",I),console.error({err:I}))}},ne=async A=>{await gn({noOfTokens:A,provider:a,account:i})};return l.useEffect(()=>{T&&(console.debug("Image cropped",T),wa(T,function(A){const I=Ca(A);console.debug("response",I),I.success&&(console.debug("Cropped Image....",T),k(T))}))},[T]),t.jsxs(ba,{ref:ae,children:[t.jsx(o,{InnerComponent:da,InnerComponentProps:{setChannelLogo:B,channelLogo:P,croppedImage:T,setCroppedImage:D,setChannelFile:k,imageSrc:H,setImageSrc:G,imageType:M,setImageType:W,errorInfo:Y,setErrorInfo:C},modalPosition:Se.ON_PARENT}),t.jsxs(ya,{children:[t.jsxs(Ta,{children:[t.jsx(Aa,{src:P}),t.jsx(te,{variant:"secondary",onClick:()=>{n(),de(!0)},children:"Upload Logo"})]}),!ce&&t.jsx(Sa,{}),t.jsx(oa,{channelName:w,setChannelName:m,channelInfo:u,setChannelInfo:x,channelURL:E,setChannelURL:L,editChannel:R,errorInfo:Y,setErrorInfo:C})]}),t.jsxs(Ea,{children:[t.jsxs("div",{children:[t.jsx(ka,{children:"Channel edit fee"}),t.jsx(Ma,{children:"Editing channel details requires fees to be deposited"})]}),t.jsxs(V,{flex:"0",children:[U?t.jsx(va,{src:la}):null,t.jsxs(Ra,{children:[v," PUSH"]})]})]}),t.jsx(Dt,{noOfPushTokensToCheck:v,containerProps:{width:"100%"},onMintPushToken:ne}),f?t.jsx(t.Fragment,{children:t.jsxs(Ia,{children:[t.jsx(Spinner,{size:42,color:$.COLORS.PRIMARY_PINK,type:xt.PROCESSING}),t.jsx(Da,{children:"Verifying Transaction"})]})}):t.jsx(t.Fragment,{children:t.jsxs(La,{children:[t.jsx(te,{onClick:e,variant:"outline",size:"large",children:"Cancel"}),le>=v?t.jsx(te,{disabled:Te(),onClick:R,size:"large",children:"Save Changes"}):t.jsx(te,{onClick:re,size:"large",children:"Approve PUSH"})]})})]})}const ba=s(Q)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,ya=s(Q)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,va=s.img``,Ta=s(V)`
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
`,Aa=s.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${S.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Sa=s.div`
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
`,Ea=s(Q)`
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
`,ka=s.p`
  margin: 0px;
  color: ${e=>e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ma=s.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${e=>e.theme.editChannelSecondaryText};
`,Ra=s.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ia=s(Q)`
  flex-direction: row;
  margin-top: 33px;
`,Da=s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,La=s(V)`
  justify-content: end;
  margin-top: 35px;
  gap: 14px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,za=10;let Wt=null;const Na=()=>{X();const{account:e,chainId:o}=ge(),{channelDetails:n,delegatees:i,aliasDetails:{aliasAddr:a,aliasEthAddr:r,isAliasVerified:p,aliasAddrFromContract:c}}=N(C=>C.admin),{processingState:d}=N(C=>C.channelCreation),{epnsWriteProvider:h}=N(C=>C.contracts),{userPushSDKInstance:g}=N(C=>C.user),{handleConnectWalletAndEnableProfile:w}=l.useContext(sn),m=n&&n!=="unfetched",u=he(),x=De(),[E,L]=l.useState(!1),[P,B]=l.useState(!0),[j,k]=l.useState(!1),T=se.coreContractChain===o,D=fe(600);l.useEffect(()=>{if(!T||!n||c||n==="unfetched")return;const C=Cr(n);if(C){const{address:f,chainId:b}=C;x(jr(f)),x(br(b))}else x(Le(0))},[n,c]);const H=async C=>{let{alias_address:f=null,is_alias_verified:b=null}=await vr({userPushSDKInstance:g,address:C}).then(v=>v);return f=="NULL"&&(f=null),{aliasAddress:f,aliasVerified:b}};l.useEffect(()=>{!T||!c||d===0||(Wt=setInterval(async()=>{const{aliasAddress:C,aliasVerified:f}=await H(e);C?(x(yr(C)),f?(x(ut(!0)),x(Le(0))):(x(Le(2)),x(ut(!1)))):d!=0&&d!=1&&x(Le(1))},za*1e3))},[c]),a!==null&&clearInterval(Wt);const G=async()=>{try{u.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await h.destroyTimeBoundChannel(e,{gasLimit:1e6});console.debug(C),console.debug("Check: "+e),await C.wait(),u.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:f=>t.jsx(q,{size:f,color:"green"})}),x(ht(null))}catch(C){console.error(C),C.code=="ACTION_REJECTED"?u.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:f=>t.jsx(q,{size:f,color:"red"})}):u.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:f=>t.jsx(q,{size:f,color:"red"})})}},M=()=>{k(!0)},W=()=>{k(!1)},{isModalOpen:U,showModal:F,ModalComponent:Y}=Ae();return t.jsxs(V,{children:[(n==="unfetched"||d===null)&&t.jsx(kt,{}),n!=="unfetched"&&t.jsxs(Q,{justifyContent:d===0&&"flex-start",height:"fit-content",children:[!n&&d===0&&t.jsx(Hr,{}),m&&d!==null&&t.jsx($a,{children:j?t.jsx(ja,{closeEditChannel:W,UploadLogoComponent:Y,displayUplaodLogoModal:F,isUploadLogoModalOpen:U}):t.jsxs(t.Fragment,{children:[n&&!D&&t.jsxs(V,{zIndex:"1",gap:"8px",children:[!E&&T&&t.jsx(te,{onClick:M,size:"small",variant:"outline",children:"Edit Channel"}),!E&&t.jsx(Bt,{}),E&&T&&t.jsx(te,{onClick:G,size:"small",variant:"danger",children:"Delete Channel"})]}),n?t.jsx(Vo,{isChannelExpired:E,setIsChannelExpired:L,showEditChannel:M,destroyChannel:G}):""]})}),d!==0&&d!==null&&m&&!j&&t.jsx(t.Fragment,{children:t.jsx(pi,{aliasEthAccount:r,setAliasVerified:ut})})]})]})},$a=s(Q)`
  align-items: center;
  align-self: center;
  background: ${e=>e.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${$.ADJUSTMENTS.RADIUS.LARGE} ${$.ADJUSTMENTS.RADIUS.LARGE}
    ${$.ADJUSTMENTS.RADIUS.LARGE} ${$.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${be.MINI_MODULES.DESKTOP.RIGHT} - ${be.MINI_MODULES.DESKTOP.LEFT} -
      ${$.ADJUSTMENTS.PADDING.HUGE} - ${$.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${$.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${$.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${S.laptop} {
    margin: ${$.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${$.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${be.MINI_MODULES.TABLET.RIGHT} - ${be.MINI_MODULES.TABLET.LEFT} -
        ${$.ADJUSTMENTS.PADDING.BIG} - ${$.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${S.mobileL} {
    margin: ${$.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${$.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${be.MINI_MODULES.MOBILE.RIGHT} - ${be.MINI_MODULES.MOBILE.LEFT} -
        ${$.ADJUSTMENTS.PADDING.DEFAULT} - ${$.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${$.CONSTANTS.HEADER_HEIGHT}px - ${be.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${$.ADJUSTMENTS.RADIUS.LARGE} ${$.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;se.coreContractChain;function Pa(){Tr.pageview("/channel_dashboard");const[e,o]=z.useState(!0),[n,i]=z.useState(null),a=()=>i(null);return z.useEffect(()=>{n&&a()},[n]),t.jsxs(t.Fragment,{children:[e?t.jsx(Na,{}):t.jsx(kt,{}),n&&t.jsx(Ar,{notification:n,clearToast:a})]})}s.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Kt;wn=()=>t.jsx(Kt,{children:t.jsx(Pa,{})}),Kt=s(Sr)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Zr as __tla,wn as default};
