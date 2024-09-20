import{iV as qt,iW as Ha,d_ as l,hZ as Ga,iX as Ka,ic as q,h$ as Re,ee as O,iY as oe,e1 as t,iZ as _e,i_ as Ie,i$ as De,j0 as Ve,j1 as Wa,j2 as lt,j3 as Zt,j4 as Ya,j5 as He,j6 as dt,j7 as Ae,j8 as Qt,j9 as ei,e7 as s,e9 as J,fB as H,e3 as ct,e4 as pt,fc as U,ed as W,eR as de,gC as xt,ew as ti,is as Ja,fE as ce,dY as pe,e2 as Xa,ep as te,em as qa,fb as Le,g1 as Za,g0 as Qa,eV as xe,ej as re,eO as F,eY as er,ja as tr,jb as Ne,jc as ir,el as Ge,eb as Ke,ea as ze,ge as ht,eQ as T,fg as he,fK as je,fL as X,eT as Z,fm as ii,fn as gt,jd as mt,fi as Se,f1 as We,gv as nr,fj as Ee,gU as or,je as ar,hO as ge,gB as ni,jf as oi,g2 as Ye,jg as rr,gs as ai,i2 as sr,iP as ri,jh as lr,fs as dr,eg as si,gK as li,gP as cr,ji as di,fD as ci,dZ as pr,jj as xr,jk as hr,jl as gr,jm as ut,hJ as pi,fI as ft,jn as mr,e0 as ur,gb as fr,gf as wr,jo as Cr,jp as jr,f_ as yr,jq as br,iU as vr,eP as ye,jr as Tr,js as Ar,jt as Sr,ju as Er,jv as wt,eS as Mr,e8 as kr,__tla as Rr}from"./index-BZicNVPu.js";import{N as Ir,__tla as Dr}from"./NotificationToast-D63WHNfY.js";import{b as Lr,a as xi,m as hi,c as gi,__tla as Nr}from"./StakingVariant-CMiUqJnV.js";import{T as mi,__tla as zr}from"./TransitionGroupContext-CDWt-Ipw.js";import{E as $r,M as Pr,A as Br,__tla as Or}from"./EmptyNotificationSettings-Bv03PoF3.js";import{a as ui,b as fi,__tla as Ur}from"./ValidationHelper-C0vzyjWO.js";import{a as Fr,__tla as _r}from"./ImportPushTokenMessage-C_l0wnOF.js";import{v as Vr,C as Hr,__tla as Gr}from"./CreateChannel-DTbBnyI6.js";import{__tla as Kr}from"./useMutation-Dr3R5gA_.js";import{__tla as Wr}from"./index.esm-CFvLa-Tn.js";import{__tla as Yr}from"./Stepper-wqlGRbF0.js";import{__tla as Jr}from"./index.esm-C2L4y7ia.js";import"./Common.form-iMV6nXze.js";let wi,Xr=Promise.all([(()=>{try{return Rr}catch{}})(),(()=>{try{return Dr}catch{}})(),(()=>{try{return Nr}catch{}})(),(()=>{try{return zr}catch{}})(),(()=>{try{return Or}catch{}})(),(()=>{try{return Ur}catch{}})(),(()=>{try{return _r}catch{}})(),(()=>{try{return Gr}catch{}})(),(()=>{try{return Kr}catch{}})(),(()=>{try{return Wr}catch{}})(),(()=>{try{return Yr}catch{}})(),(()=>{try{return Jr}catch{}})()]).then(async()=>{function Ci(e,o=0,i=1){return Ha(e,o,i)}function ji(e){e=e.slice(1);const o=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(o);return i&&i[0].length===1&&(i=i.map(n=>n+n)),i?`rgb${i.length===4?"a":""}(${i.map((n,a)=>a<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function Ct(e){if(e.type)return e;if(e.charAt(0)==="#")return Ct(ji(e));const o=e.indexOf("("),i=e.substring(0,o);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(qt(9,e));let n=e.substring(o+1,e.length-1),a;if(i==="color"){if(n=n.split(" "),a=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(qt(10,a))}else n=n.split(",");return n=n.map(r=>parseFloat(r)),{type:i,values:n,colorSpace:a}}function yi(e){const{type:o,colorSpace:i}=e;let{values:n}=e;return o.indexOf("rgb")!==-1?n=n.map((a,r)=>r<3?parseInt(a,10):a):o.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),o.indexOf("color")!==-1?n=`${i} ${n.join(" ")}`:n=`${n.join(", ")}`,`${o}(${n})`}function bi(e,o){return e=Ct(e),o=Ci(o),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${o}`:e.values[3]=o,yi(e)}function vi(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ti(e){return parseFloat(e)}function Je(e,o){var i=function(a){return o&&l.isValidElement(a)?o(a):a},n=Object.create(null);return e&&l.Children.map(e,function(a){return a}).forEach(function(a){n[a.key]=i(a)}),n}function Ai(e,o){e=e||{},o=o||{};function i(g){return g in o?o[g]:e[g]}var n=Object.create(null),a=[];for(var r in e)r in o?a.length&&(n[r]=a,a=[]):a.push(r);var c,p={};for(var d in o){if(n[d])for(c=0;c<n[d].length;c++){var x=n[d][c];p[n[d][c]]=i(x)}p[d]=i(d)}for(c=0;c<a.length;c++)p[a[c]]=i(a[c]);return p}function me(e,o,i){return i[o]!=null?i[o]:e.props[o]}function Si(e,o){return Je(e.children,function(i){return l.cloneElement(i,{onExited:o.bind(null,i),in:!0,appear:me(i,"appear",e),enter:me(i,"enter",e),exit:me(i,"exit",e)})})}function Ei(e,o,i){var n=Je(e.children),a=Ai(o,n);return Object.keys(a).forEach(function(r){var c=a[r];if(l.isValidElement(c)){var p=r in o,d=r in n,x=o[r],g=l.isValidElement(x)&&!x.props.in;d&&(!p||g)?a[r]=l.cloneElement(c,{onExited:i.bind(null,c),in:!0,exit:me(c,"exit",e),enter:me(c,"enter",e)}):!d&&p&&!g?a[r]=l.cloneElement(c,{in:!1}):d&&p&&l.isValidElement(x)&&(a[r]=l.cloneElement(c,{onExited:i.bind(null,c),in:x.props.in,exit:me(c,"exit",e),enter:me(c,"enter",e)}))}}),a}var Mi=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},ki={component:"div",childFactory:function(e){return e}},Xe=function(e){Ga(o,e);function o(n,a){var r;r=e.call(this,n,a)||this;var c=r.handleExited.bind(Ka(r));return r.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},r}var i=o.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,a){var r=a.children,c=a.handleExited,p=a.firstRender;return{children:p?Si(n,c):Ei(n,r,c),firstRender:!1}},i.handleExited=function(n,a){var r=Je(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(a),this.mounted&&this.setState(function(c){var p=q({},c.children);return delete p[n.key],{children:p}}))},i.render=function(){var n=this.props,a=n.component,r=n.childFactory,c=Re(n,["component","childFactory"]),p=this.state.contextValue,d=Mi(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,a===null?O.createElement(mi.Provider,{value:p},d):O.createElement(mi.Provider,{value:p},O.createElement(a,c,d))},o}(O.Component);Xe.propTypes={},Xe.defaultProps=ki;function Ri(e){const{className:o,classes:i,pulsate:n=!1,rippleX:a,rippleY:r,rippleSize:c,in:p,onExited:d,timeout:x}=e,[g,f]=l.useState(!1),m=oe(o,i.ripple,i.rippleVisible,n&&i.ripplePulsate),u={width:c,height:c,top:-(c/2)+r,left:-(c/2)+a},h=oe(i.child,g&&i.childLeaving,n&&i.childPulsate);return!p&&!g&&f(!0),l.useEffect(()=>{if(!p&&d!=null){const k=setTimeout(d,x);return()=>{clearTimeout(k)}}},[d,p,x]),t.jsx("span",{className:m,style:u,children:t.jsx("span",{className:h})})}const ne=_e("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ii=["center","classes","className"];let $e=e=>e,jt,yt,bt,vt;const qe=550,Di=80,Li=Ie(jt||(jt=$e`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ni=Ie(yt||(yt=$e`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),zi=Ie(bt||(bt=$e`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),$i=De("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Pi=De(Ri,{name:"MuiTouchRipple",slot:"Ripple"})(vt||(vt=$e`
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
`),ne.rippleVisible,Li,qe,({theme:e})=>e.transitions.easing.easeInOut,ne.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,ne.child,ne.childLeaving,Ni,qe,({theme:e})=>e.transitions.easing.easeInOut,ne.childPulsate,zi,({theme:e})=>e.transitions.easing.easeInOut),Bi=l.forwardRef(function(e,o){const i=Ve({props:e,name:"MuiTouchRipple"}),{center:n=!1,classes:a={},className:r}=i,c=Re(i,Ii),[p,d]=l.useState([]),x=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[p]);const f=l.useRef(!1),m=Wa(),u=l.useRef(null),h=l.useRef(null),k=l.useCallback(w=>{const{pulsate:S,rippleX:y,rippleY:D,rippleSize:G,cb:Y}=w;d(I=>[...I,t.jsx(Pi,{classes:{ripple:oe(a.ripple,ne.ripple),rippleVisible:oe(a.rippleVisible,ne.rippleVisible),ripplePulsate:oe(a.ripplePulsate,ne.ripplePulsate),child:oe(a.child,ne.child),childLeaving:oe(a.childLeaving,ne.childLeaving),childPulsate:oe(a.childPulsate,ne.childPulsate)},timeout:qe,pulsate:S,rippleX:y,rippleY:D,rippleSize:G},x.current)]),x.current+=1,g.current=Y},[a]),N=l.useCallback((w={},S={},y=()=>{})=>{const{pulsate:D=!1,center:G=n||S.pulsate,fakeElement:Y=!1}=S;if((w==null?void 0:w.type)==="mousedown"&&f.current){f.current=!1;return}(w==null?void 0:w.type)==="touchstart"&&(f.current=!0);const I=Y?null:h.current,P=I?I.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,A,V;if(G||w===void 0||w.clientX===0&&w.clientY===0||!w.clientX&&!w.touches)C=Math.round(P.width/2),A=Math.round(P.height/2);else{const{clientX:B,clientY:E}=w.touches&&w.touches.length>0?w.touches[0]:w;C=Math.round(B-P.left),A=Math.round(E-P.top)}if(G)V=Math.sqrt((2*P.width**2+P.height**2)/3),V%2===0&&(V+=1);else{const B=Math.max(Math.abs((I?I.clientWidth:0)-C),C)*2+2,E=Math.max(Math.abs((I?I.clientHeight:0)-A),A)*2+2;V=Math.sqrt(B**2+E**2)}w!=null&&w.touches?u.current===null&&(u.current=()=>{k({pulsate:D,rippleX:C,rippleY:A,rippleSize:V,cb:y})},m.start(Di,()=>{u.current&&(u.current(),u.current=null)})):k({pulsate:D,rippleX:C,rippleY:A,rippleSize:V,cb:y})},[n,k,m]),z=l.useCallback(()=>{N({},{pulsate:!0})},[N]),$=l.useCallback((w,S)=>{if(m.clear(),(w==null?void 0:w.type)==="touchend"&&u.current){u.current(),u.current=null,m.start(0,()=>{$(w,S)});return}u.current=null,d(y=>y.length>0?y.slice(1):y),g.current=S},[m]);return l.useImperativeHandle(o,()=>({pulsate:z,start:N,stop:$}),[z,N,$]),t.jsx($i,q({className:oe(ne.root,a.root,r),ref:h},c,{children:t.jsx(Xe,{component:null,exit:!0,children:p})}))});function Oi(e){return lt("MuiButtonBase",e)}const Ui=_e("MuiButtonBase",["root","disabled","focusVisible"]),Fi=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],_i=e=>{const{disabled:o,focusVisible:i,focusVisibleClassName:n,classes:a}=e,r=dt({root:["root",o&&"disabled",i&&"focusVisible"]},Oi,a);return i&&n&&(r.root+=` ${n}`),r},Vi=De("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ui.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Hi=l.forwardRef(function(e,o){const i=Ve({props:e,name:"MuiButtonBase"}),{action:n,centerRipple:a=!1,children:r,className:c,component:p="button",disabled:d=!1,disableRipple:x=!1,disableTouchRipple:g=!1,focusRipple:f=!1,LinkComponent:m="a",onBlur:u,onClick:h,onContextMenu:k,onDragLeave:N,onFocus:z,onFocusVisible:$,onKeyDown:w,onKeyUp:S,onMouseDown:y,onMouseLeave:D,onMouseUp:G,onTouchEnd:Y,onTouchMove:I,onTouchStart:P,tabIndex:C=0,TouchRippleProps:A,touchRippleRef:V,type:B}=i,E=Re(i,Fi),M=l.useRef(null),b=l.useRef(null),ue=Zt(b,V),{isFocusVisibleRef:se,onFocus:K,onBlur:fe,ref:ae}=Ya(),[_,le]=l.useState(!1);d&&_&&le(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{le(!0),M.current.focus()}}),[]);const[we,ve]=l.useState(!1);l.useEffect(()=>{ve(!0)},[]);const Ce=we&&!x&&!d;l.useEffect(()=>{_&&f&&!x&&we&&b.current.pulsate()},[x,f,_,we]);function Q(j,Jt,Va=g){return He(Xt=>(Jt&&Jt(Xt),!Va&&b.current&&b.current[j](Xt),!0))}const Te=Q("start",y),R=Q("stop",k),ie=Q("stop",N),v=Q("stop",G),L=Q("stop",j=>{_&&j.preventDefault(),D&&D(j)}),ee=Q("start",P),ot=Q("stop",Y),at=Q("stop",I),rt=Q("stop",j=>{fe(j),se.current===!1&&le(!1),u&&u(j)},!1),Ue=He(j=>{M.current||(M.current=j.currentTarget),K(j),se.current===!0&&(le(!0),$&&$(j)),z&&z(j)}),Me=()=>{const j=M.current;return p&&p!=="button"&&!(j.tagName==="A"&&j.href)},st=l.useRef(!1),Oa=He(j=>{f&&!st.current&&_&&b.current&&j.key===" "&&(st.current=!0,b.current.stop(j,()=>{b.current.start(j)})),j.target===j.currentTarget&&Me()&&j.key===" "&&j.preventDefault(),w&&w(j),j.target===j.currentTarget&&Me()&&j.key==="Enter"&&!d&&(j.preventDefault(),h&&h(j))}),Ua=He(j=>{f&&j.key===" "&&b.current&&_&&!j.defaultPrevented&&(st.current=!1,b.current.stop(j,()=>{b.current.pulsate(j)})),S&&S(j),h&&j.target===j.currentTarget&&Me()&&j.key===" "&&!j.defaultPrevented&&h(j)});let Fe=p;Fe==="button"&&(E.href||E.to)&&(Fe=m);const ke={};Fe==="button"?(ke.type=B===void 0?"button":B,ke.disabled=d):(!E.href&&!E.to&&(ke.role="button"),d&&(ke["aria-disabled"]=d));const Fa=Zt(o,ae,M),Yt=q({},i,{centerRipple:a,component:p,disabled:d,disableRipple:x,disableTouchRipple:g,focusRipple:f,tabIndex:C,focusVisible:_}),_a=_i(Yt);return t.jsxs(Vi,q({as:Fe,className:oe(_a.root,c),ownerState:Yt,onBlur:rt,onClick:h,onContextMenu:R,onFocus:Ue,onKeyDown:Oa,onKeyUp:Ua,onMouseDown:Te,onMouseLeave:L,onMouseUp:v,onDragLeave:ie,onTouchEnd:ot,onTouchMove:at,onTouchStart:ee,ref:Fa,tabIndex:d?-1:C,type:B},ke,E,{children:[r,Ce?t.jsx(Bi,q({ref:ue,center:a},A)):null]}))});function Gi(e){return lt("MuiIconButton",e)}const Ki=_e("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Wi=["edge","children","className","color","disabled","disableFocusRipple","size"],Yi=e=>{const{classes:o,disabled:i,color:n,edge:a,size:r}=e,c={root:["root",i&&"disabled",n!=="default"&&`color${Ae(n)}`,a&&`edge${Ae(a)}`,`size${Ae(r)}`]};return dt(c,Gi,o)},Ji=De(Hi,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:i}=e;return[o.root,i.color!=="default"&&o[`color${Ae(i.color)}`],i.edge&&o[`edge${Ae(i.edge)}`],o[`size${Ae(i.size)}`]]}})(({theme:e,ownerState:o})=>q({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Qt(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var i;const n=(i=(e.vars||e).palette)==null?void 0:i[o.color];return q({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&q({color:n==null?void 0:n.main},!o.disableRipple&&{"&:hover":q({},n&&{backgroundColor:e.vars?`rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Qt(n.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Ki.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Xi=l.forwardRef(function(e,o){const i=Ve({props:e,name:"MuiIconButton"}),{edge:n=!1,children:a,className:r,color:c="default",disabled:p=!1,disableFocusRipple:d=!1,size:x="medium"}=i,g=Re(i,Wi),f=q({},i,{edge:n,color:c,disabled:p,disableFocusRipple:d,size:x}),m=Yi(f);return t.jsx(Ji,q({className:oe(m.root,r),centerRipple:!0,focusRipple:!d,disabled:p,ref:o},g,{ownerState:f,children:a}))});function qi(e){return lt("MuiSkeleton",e)}_e("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Zi=["animation","className","component","height","style","variant","width"];let Pe=e=>e,Tt,At,St,Et;const Qi=e=>{const{classes:o,variant:i,animation:n,hasChildren:a,width:r,height:c}=e;return dt({root:["root",i,n,a&&"withChildren",a&&!r&&"fitContent",a&&!c&&"heightAuto"]},qi,o)},en=Ie(Tt||(Tt=Pe`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),tn=Ie(At||(At=Pe`
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
`)),nn=De("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:i}=e;return[o.root,o[i.variant],i.animation!==!1&&o[i.animation],i.hasChildren&&o.withChildren,i.hasChildren&&!i.width&&o.fitContent,i.hasChildren&&!i.height&&o.heightAuto]}})(({theme:e,ownerState:o})=>{const i=vi(e.shape.borderRadius)||"px",n=Ti(e.shape.borderRadius);return q({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:bi(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},o.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${i}/${Math.round(n/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},o.variant==="circular"&&{borderRadius:"50%"},o.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},o.hasChildren&&{"& > *":{visibility:"hidden"}},o.hasChildren&&!o.width&&{maxWidth:"fit-content"},o.hasChildren&&!o.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&ei(St||(St=Pe`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),en),({ownerState:e,theme:o})=>e.animation==="wave"&&ei(Et||(Et=Pe`
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
    `),tn,(o.vars||o).palette.action.hover)),Be=l.forwardRef(function(e,o){const i=Ve({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:a,component:r="span",height:c,style:p,variant:d="text",width:x}=i,g=Re(i,Zi),f=q({},i,{animation:n,component:r,variant:d,hasChildren:!!g.children}),m=Qi(f);return t.jsx(nn,q({as:r,ref:o,className:oe(m.root,a),ownerState:f},g,{style:q({width:x,height:c},p)}))}),Mt=()=>(J(),t.jsxs(H,{children:[t.jsxs(on,{children:[t.jsxs(an,{children:[t.jsx(Be,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),t.jsxs(rn,{children:[t.jsx(Be,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),t.jsx(Be,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),t.jsx(Be,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),t.jsx(H,{padding:"40px 0 40px 0",children:t.jsx(ct,{type:pt.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),on=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,an=s.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,rn=s.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,sn=()=>{var i,n;const e=J(),{aliasDetails:{aliasChainId:o}}=U(a=>a.admin);return t.jsxs(W,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(de,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(n=(i=xt[o])==null?void 0:i.label)==null?void 0:n.split(" ")[0]," Alias Network."]})," ",t.jsx(de,{textAlign:"center",margin:"5px 0px 60px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),t.jsxs(W,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[t.jsx(ti,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(Ja,{margin:"auto 15px",textTransform:"none",color:e.color,size:"16px",weight:"600",children:"Processing"})]})]})},ln=()=>{var n;ce();const e=J(),{switchChain:o}=pe(),{aliasDetails:{aliasChainId:i}}=U(a=>a.admin);return t.jsxs(W,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(de,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",t.jsx(dn,{children:(n=xt[i])==null?void 0:n.label})," to start ",t.jsx("br",{}),"verifying your Channel Alias."]}),t.jsx(Xa,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:t.jsx(te,{variant:"primary",onClick:()=>o(i),size:"large",children:t.jsx(qa,{color:"white",children:"Change Network"})})})]})},dn=s.b`
  color: #cf1c84;
`,cn=({aliasEthAccount:e,setAliasVerified:o})=>{var $,w;const i=J(),{account:n,provider:a,chainId:r}=pe(),c=a.getSigner(n),p=Le(),d=new Za(xt[r].commAddress,Qa.epnsComm,c),[x,g]=l.useState(""),[f,m]=l.useState(!1),u=e,h={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"},84532:{label:"Base Sepolia",url:"https://www.alchemy.com/faucets/base-sepolia"},59141:{label:"Linea Sepolia",url:"https://www.infura.io/faucet/linea"}},k=async()=>{u==e&&z()},N=async()=>{const{aliasVerified:S}=await ir({account:n,chainId:r}).then(y=>y?(p(o(y.is_alias_verified)),{aliasVerified:y.is_alias_verified}):{aliasVerified:null});return{aliasVerified:S}},z=()=>{g("Processing"),d.verifyChannelAlias(u).then(async S=>{console.debug(S),g("Transaction Sent! It usually takes 5mins to verify."),await S.wait(1),setTimeout(()=>{g("Transaction Mined!")},2e3),setTimeout(()=>{g("Loading...")},2e3);const y=setInterval(async()=>{const{aliasVerified:D}=await N();D&&(setTimeout(()=>{m(!0)},1e3),clearInterval(y),p(Ne(0)))},5e3)}).catch(()=>{g("There was an error"),setTimeout(()=>{g("")},2e3)})};return t.jsxs(W,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsx(xe,{textAlign:"center",margin:"60px 0px 0px 0px",color:i.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),x===""&&t.jsx(de,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:n}),x===""&&re.appEnv!=="prod"&&t.jsxs(xe,{padding:"10px",margin:"10px",borderRadius:F.ADJUSTMENTS.RADIUS.SMALL,background:i.default.secondaryBg,color:i.default.secondaryColor,children:["You will need"," ",t.jsx(er,{href:($=h[r])==null?void 0:$.url,target:"_blank",children:(w=h[r])==null?void 0:w.label})," ","to proceed."]}),!f&&(x?t.jsxs(W,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(ti,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(de,{color:i.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:x})]}):t.jsx(W,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:t.jsx(te,{variant:"primary",size:"medium",onClick:k,children:"Verify Alias Address"})})),f&&t.jsxs(W,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(tr,{color:"#30CC8B",size:30}),t.jsx(de,{color:i.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},pn=({aliasEthAccount:e,setAliasVerified:o})=>{const{processingState:i}=U(n=>n.channelCreation);return t.jsxs(Ke,{children:[t.jsxs(xn,{children:[t.jsxs(Qe,{type:i>=1?"active":"inactive",active:i==1?"active":"inactive",children:[t.jsx("div",{children:"Waiting for Setup"}),t.jsx(Ze,{type:i>=1?"active":"inactive"})]}),t.jsxs(Qe,{type:i>=2?"active":"inactive",active:i==2?"active":"inactive",children:[t.jsx("div",{children:"Change Network"}),t.jsx(Ze,{type:i>=2?"active":"inactive"})]}),t.jsxs(Qe,{type:i>=3?"active":"inactive",active:i==3?"active":"inactive",children:[t.jsx("div",{children:"Verify Alias Network"}),t.jsx(Ze,{type:i>=3?"active":"inactive"})]}),t.jsx(hn,{})]}),i===1&&t.jsx(sn,{}),i===2&&t.jsx(ln,{}),i===3&&t.jsx(cn,{aliasEthAccount:e,setAliasVerified:o})]})},xn=s.div`
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

  ${({type:e})=>e==="active"&&Ge`
      background: #e20880;
    `};
`,hn=s.div`
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

  ${({type:e})=>e==="active"&&Ge`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:e})=>e==="active"&&Ge`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:e})=>e==="inactive"&&Ge`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,gn=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("circle",{cx:8,cy:8,r:8,fill:"#E93636"})),kt=({heading:e,subHeading:o})=>{const i=J();return t.jsx(ze,{theme:i,children:t.jsxs(mn,{children:[t.jsx(un,{style:{color:i.default.color},children:e}),t.jsx(fn,{style:{color:i.modalMessageColor},children:o})]})})},mn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,un=s.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,fn=s.h4`
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
`,et=O.forwardRef(({title:e},o)=>{const i=J();return t.jsx(ze,{theme:i,children:t.jsxs(wn,{children:[t.jsx(Cn,{style:{color:i.modalMessageColor},children:e}),t.jsx(jn,{ref:o,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:i.modalMessageColor}})]})})}),wn=s.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,Cn=s.h4`
  font-family: FK Grotesk Neu;
  font-size: ${e=>e.fontSize||"0.95rem"};
  font-weight: ${e=>e.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${e=>e.marginBottom||"3%"};
`,jn=s(ht)`
  box-sizing: border-box;
  width: 100%;
`,Rt=({text:e,onClick:o,isLoading:i,topMargin:n,loaderTitle:a})=>{const r=J();return t.jsx(ze,{theme:r,children:t.jsx(yn,{style:{marginTop:n||"55px"},children:i?t.jsx(bn,{children:t.jsx(ct,{type:pt.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:a??"",titleColor:"#fff"})}):t.jsx(te,{onClick:o,variant:"primary",size:"large",children:e})})})},yn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 55px;
`,bn=s.div`
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
`,vn=({onConfirm:e,onClose:o,toastObject:i})=>{const n=O.useRef();J();const[a,r]=O.useState(!1),c=()=>!a&&o(),p=O.useRef(null);he(p,()=>c());const d=()=>{var g;r(!0);const x=(g=n==null?void 0:n.current)==null?void 0:g.value;e(x).then(async f=>{console.debug(f),i.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:m=>t.jsx(je,{size:m,color:"green"})}),o()}).catch(f=>{console.error({err:f}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:m=>t.jsx(X,{size:m,color:"red"})})}).finally(()=>{r(!1)})};return t.jsxs(Tn,{ref:p,children:[t.jsx(kt,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),t.jsx(et,{ref:n,title:"Delegate Address"}),t.jsx(Rt,{text:"Add Delegate",onClick:d,isLoading:a})]})},Tn=s.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${T.laptop}){
    width:50vw;
  }
  @media(${T.mobileL}){
    width:95vw;
  }
`,An="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",Sn=e=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),En=({onClose:e,onConfirm:o,toastObject:i})=>{const n=O.useRef(),a=O.useRef(),[r,c]=O.useState(!1);J();const p=()=>!r&&e(),d=O.useRef(null);he(d,()=>p());const x=()=>{var m,u;const g=(m=a==null?void 0:a.current)==null?void 0:m.value,f=(u=n==null?void 0:n.current)==null?void 0:u.value;if(c(!0),g==""||f==""){i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:h=>t.jsx(X,{size:h,color:"red"})}),setTimeout(()=>{c(!1)},500);return}else if(parseInt(g)<60){i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:h=>t.jsx(X,{size:h,color:"red"})}),setTimeout(()=>{c(!1)},500);return}o(g,f).then(async h=>{console.debug(h),i.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:k=>t.jsx(je,{size:k,color:"green"})}),e()}).catch(h=>{console.error(h),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:k=>t.jsx(X,{size:k,color:"red"})})}).finally(()=>{c(!1)})};return t.jsxs(Mn,{ref:d,children:[t.jsx(kt,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),t.jsx(et,{ref:n,title:"Subgraph ID"}),t.jsx(et,{ref:a,title:"Poll Time (in seconds)"}),t.jsx(Rt,{text:"Add Subgraph",onClick:x,isLoading:r})]})},Mn=s.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${T.laptop}){
    width:50vw;
  }
  @media(${T.mobileL}){
    width:95vw;
  }
`,kn=e=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Rn=e=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),In=({onConfirm:e,onClose:o,toastObject:i})=>{const n=J(),a=Le(),{channelDetails:r}=U(m=>m.admin),{CHANNNEL_DEACTIVATED_STATE:c}=U(m=>m.channels),[p,d]=O.useState(!1),x=()=>!p&&o(),g=O.useRef(null);he(g,()=>x());const f=()=>{d(!0),e().then(async m=>{console.debug(m),console.info("Transaction Sent!"),i.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:u=>t.jsx(X,{size:u,color:"red"})}),await m.wait(1),console.info("Transaction Mined!"),a(mt({...r,channelState:c})),d(!1),o()}).catch(m=>{console.error("!!!Error deactivateChannel() --> %o",m),console.error({err:m}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:u=>t.jsx(X,{size:u,color:"red"})}),d(!1)})};return t.jsx(ze,{theme:n,children:t.jsx(Dn,{ref:g,children:p?t.jsxs(Ln,{children:[t.jsx(ii,{size:42,color:F.COLORS.PRIMARY_PINK,type:gt.PROCESSING}),t.jsx(Nn,{children:"Verifying"})]}):t.jsxs(t.Fragment,{children:[t.jsx(zn,{style:{color:n.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),t.jsxs($n,{children:[t.jsx(kn,{width:36,height:36,onClick:x}),t.jsx(Pn,{onClick:f,children:t.jsx(Rn,{})})]})]})})})},Dn=s.div`
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
`,Ln=s(Z)`
  flex-direction: row;
  //   margin-top:33px;
`,Nn=s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,zn=s.div`
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
`;const $n=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,Pn=s.div`
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
`;const Bn="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.8312%2012.3465L12.8975%208.28027L0.99987%208.28027'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.06626%201.00014L1%205.06641L12.8976%205.06641'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Dt=({onMintPushToken:e,noOfPushTokensToCheck:o,containerProps:i})=>{const{account:n,provider:a}=pe(),r=re.appEnv==="prod",[c,p]=l.useState(!1),d=async()=>{const m=await Lr({address:n,provider:a,noOfPushTokensToCheck:o});p(!m)},{isModalOpen:x,showModal:g,ModalComponent:f}=Se();return l.useEffect(()=>{(async()=>await d())()},[o]),t.jsxs(t.Fragment,{children:[t.jsx(On,{children:c?t.jsxs(Un,{style:i,children:[t.jsx(Fn,{children:r?"You do not have sufficient PUSH Tokens. Swap to add more PUSH.":"Follow these steps to ensure you have enough Testnet Push to proceed."}),r?t.jsx(te,{leadingIcon:t.jsx(We,{width:"12px",height:"12px",margin:"0 0.5rem 0 0",src:Bn}),size:"extraSmall",children:"Swap Tokens for PUSH"}):t.jsxs(_n,{children:[t.jsxs(Vn,{href:"https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",target:"_blank",children:[t.jsx(Lt,{children:"1"}),t.jsx(Nt,{children:"Sepolia ETH Faucet"})]}),t.jsxs(Hn,{onClick:async()=>{await e(1e3),await d()},children:[t.jsx(Lt,{children:"2"}),t.jsx(Nt,{children:"Get Testnet PUSH"})]})]})]}):""}),x&&t.jsx(f,{InnerComponent:nr,InnerComponentProps:{defaultPushTokenAmount:o},modalPadding:"0px",modalPosition:Ee.ON_ROOT})]})},On=s.div`
  width: 100%;
  transform: translateY(-40px);
`,Un=s.div`
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

  @media ${T.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 24px 16px 24px;
  }
`,Fn=s(xe)`
    color:#D53A94;
    font-size:15px
    font-weight:400;
    line-height:21px;
    text-align: left;
    margin:0 2rem 0 0;
    max-width: 45%;
    @media ${T.laptop} {
        max-width: 55%;
    }
    @media ${T.tablet} {
        max-width: 100%;
        margin: 0;
        margin-bottom: 0.8rem;
    }
`,_n=s.div`
  display: flex;
  flex-direction: row;
`,Vn=s.a`
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
  @media ${T.laptop} {
    margin: 0 1.5rem 0 0;
  }
`,Lt=s(xe)`
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
`,Hn=s.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  @media ${T.laptop} {
    margin: 0;
  }
`,Nt=s.label`
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
`,Gn=e=>l.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1209 6.84638 16.2635 4.78216 14.7407 3.25932C13.2178 1.73648 11.1536 0.87913 9 0.875ZM12.8672 7.57812L8.28907 11.9531C8.17071 12.0645 8.01406 12.126 7.85157 12.125C7.77214 12.1261 7.69328 12.1115 7.61953 12.082C7.54578 12.0525 7.47861 12.0087 7.42188 11.9531L5.13282 9.76562C5.06933 9.71023 5.01769 9.64257 4.98102 9.56672C4.94434 9.49086 4.92338 9.40837 4.9194 9.32421C4.91542 9.24004 4.92849 9.15594 4.95784 9.07696C4.98719 8.99798 5.03221 8.92575 5.09019 8.86461C5.14816 8.80347 5.2179 8.75469 5.29522 8.72119C5.37253 8.68769 5.45582 8.67017 5.54007 8.66968C5.62433 8.66919 5.70781 8.68574 5.78551 8.71834C5.86321 8.75094 5.93351 8.79891 5.99219 8.85938L7.85157 10.6328L12.0078 6.67188C12.1293 6.56585 12.2871 6.51091 12.4482 6.51853C12.6093 6.52615 12.7612 6.59575 12.8722 6.71277C12.9832 6.8298 13.0446 6.98519 13.0437 7.14646C13.0428 7.30773 12.9795 7.4624 12.8672 7.57812Z",fill:"#D53893"})),Kn="DD MMM, YYYY",Wn=({onConfirm:e,onClose:o,toastObject:i})=>{const n=J(),{chainId:a,account:r,provider:c}=pe(),p=Le(),{channelDetails:d,canVerify:x,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:f}}=U(E=>E.admin),{CHANNEL_ACTIVE_STATE:m,CHANNNEL_DEACTIVATED_STATE:u}=U(E=>E.channels),[h,k]=l.useState("");let{channelState:N}=d;N||(N=d.activation_status);const z=N===m,$=N===u,[w,S]=l.useState(!1),[y,D]=l.useState(!1),[G,Y]=l.useState(0),I=()=>!w&&o(),P=l.useRef(null);he(P,()=>I());const C=re.coreContractChain===a;ge(600),l.useEffect(()=>{!d||!C||async function(){const E=d.channelStartBlock.toString(),M=await new ni(re.coreRPC).getBlock(+E),b=oi(M.timestamp*1e3);k(b.format(Kn))}()},[d]),l.useEffect(()=>{!r||!c||async function(){const E=await xi({address:r,provider:c,contractAddress:Ye.epnscore});Y(parseInt(E));const M=parseInt(E);M>=50&&M!=0?D(!0):D(!1)}()},[r,c]);const A=async E=>{await hi({noOfTokens:E,provider:c,account:r})},V=async()=>{if(S(!0),!c)return;const E=c.getSigner(r);i.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const M=await gi({signer:E,contractAddress:Ye.epnscore,amount:50-G});console.debug("response",M),M&&(Y(50),D(!0),i.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:b=>t.jsx(je,{size:b,color:"green"})}),S(!1))}catch(M){console.error(M),M.code=="ACTION_REJECTED"?i.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:b=>t.jsx(X,{size:b,color:"red"})}):(i.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:b=>t.jsx(X,{size:b,color:"red"})}),console.error("Error --> %o",M),console.error({err:M}))}S(!1)},B=async()=>{S(!0);try{const E=ai("50",18),M=await e(E);i.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:b=>t.jsx(je,{size:b,color:"green"})}),await M.wait(),console.info("Transaction Mined!"),i.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:b=>t.jsx(je,{size:b,color:"green"})}),p(mt({...d,channelState:m})),o(),S(!1)}catch(E){console.error("Error reactivateChannel",{err:E}),i.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:M=>t.jsx(X,{size:M,color:"red"})}),S(!1)}};return t.jsx(ze,{theme:n,children:t.jsxs(Yn,{ref:P,children:[t.jsxs(Jn,{children:[t.jsx(Xn,{children:"Reactivate Channel"}),t.jsx(Xi,{onClick:I,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:t.jsx(rr,{size:"1.5rem",style:{color:n.modalIconColor}})})]}),t.jsxs(Zn,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(Qn,{src:d.icon}),t.jsxs(zt,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(ro,{children:[d.name,x&&t.jsx(eo,{src:"/verify.png"})]}),t.jsxs(zt,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[C&&f&&!g||!C&&!g?t.jsx(no,{children:"Alias Network Setup Pending"}):t.jsxs(qn,{justifyContent:"flex-start",children:[t.jsxs(to,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(oo,{children:d.subscriber_count})]}),t.jsx(io,{active:z,children:z?"Active":$?"Deactivated":"Blocked"})]}),h&&t.jsxs(ao,{children:["Created ",h]})]})]})]}),t.jsxs(so,{children:[t.jsx(lo,{children:"Channel reactivation fee"}),t.jsxs(H,{flex:"0",children:[y?t.jsx(co,{src:Gn}):null,t.jsxs(po,{children:[50," PUSH"]})]})]}),t.jsx(Dt,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:A}),w?t.jsxs(ho,{children:[t.jsx(ii,{size:42,color:F.COLORS.PRIMARY_PINK,type:gt.PROCESSING}),t.jsx(go,{children:"Verifying Transaction"})]}):t.jsx(xo,{children:G>=50?t.jsx(Pt,{onClick:B,children:"Reactivate"}):t.jsx(Pt,{onClick:V,children:"Approve PUSH"})})]})})},Yn=s.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${T.mobileL} {
    padding: 0.5rem;
  }
  @media (${T.laptop}) {
    width: 50vw;
  }
  @media (${T.mobileL}) {
    width: 95vw;
  }
`,Jn=s(H)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${T.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${T.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Xn=s(or)`
  color: ${e=>e.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${T.laptop} {
    font-size: 1.2rem;
  }
  @media ${T.mobileL} {
    width: 85%;
  }
`,zt=s(Z)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,qn=s(H)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Zn=s(H)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Qn=s.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${T.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${T.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,eo=s.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,to=s.div`
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
  @media ${T.laptop} {
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
  @media ${T.laptop} {
    padding: 1px 8px;
  }
`,io=s($t)`
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
`,oo=s.span`
  font-weight: 400;
  font-size: 14px;
`,ao=s.div`
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
  @media ${T.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,ro=s.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${e=>e.theme.color};
  @media ${T.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,so=s(H)`
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
  @media ${T.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,lo=s.p`
  margin: 0px;
  color: ${e=>e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${T.mobileL} {
    width: 100%;
    text-align: center;
  }
`,co=s.img``,po=s.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${T.mobileL} {
    width: 100%;
    text-align: center;
  }
`,xo=s(H)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Pt=s(ar)`
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

  @media ${T.mobileL} {
    width: 80%;
  }
`,ho=s(Z)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,go=s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,mo=50,uo=re.coreContractChain;function fo({DropdownRef:e,isDropdownOpen:o,closeDropdown:i}){Le();const{account:n,chainId:a}=pe(),{epnsWriteProvider:r,epnsCommWriteProvider:c}=U(K=>K.contracts),{channelDetails:p}=U(K=>K.admin),{CHANNNEL_DEACTIVATED_STATE:d,CHANNEL_BLOCKED_STATE:x}=U(K=>K.channels);U(K=>K.user);const g=J(),{channelState:f}=p,m=uo===a,u=ge(425),{isModalOpen:h,showModal:k,ModalComponent:N}=Se(),{isModalOpen:z,showModal:$,ModalComponent:w}=Se(),{isModalOpen:S,showModal:y,ModalComponent:D}=Se(),G=o&&!h&&!z&&!S;he(e,()=>G&&i()),O.useState(!1),O.useState(mo);const[Y,I]=O.useState(0),P=f===d,C=f===x,A=C||P;O.useEffect(()=>{I(+sr.formatBigNumberToMetric(p.poolContribution,!0))},[n,p.poolContribution]),ce();const V=()=>{C||(P?$():k())},B=ce(),E=r.reactivateChannel,M=ce(),b=()=>r.deactivateChannel(),ue=ce(),se=async(K,fe)=>{if(!(K==""||fe=="")&&!(K<60))try{const ae=K+"+"+fe,_=ri(ae);return r.addSubGraph(_)}catch(ae){console.error(ae)}};return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:t.jsx(wo,{background:g,children:t.jsxs(Co,{children:[re.appEnv!=="prod"&&t.jsx(Bt,{disabled:A,onClick:()=>!A&&y(),children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[t.jsx(Oe,{src:An,alt:"cube"}),t.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),m&&t.jsx(Bt,{isChannelDeactivated:P,onClick:V,children:t.jsx(jo,{isChannelBlocked:C,isChannelDeactivated:P,children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[C?t.jsx(Oe,{src:It,alt:"red-bell"}):P?t.jsx(Oe,{src:Sn,alt:"green-bell"}):t.jsx(Oe,{src:It,alt:"red-bell"}),t.jsx("div",{style:{width:"10px"}}),C?"Channel Blocked":P?"Activate Channel":"Deactivate Channel"]})})})]})})}),t.jsx(N,{InnerComponent:In,onConfirm:b,toastObject:M,modalPosition:Ee.ON_ROOT}),t.jsx(w,{InnerComponent:Wn,onConfirm:E,toastObject:B,modalMargin:u?"10rem 1rem 0 1rem":"",modalPosition:Ee.ON_ROOT}),t.jsx(D,{InnerComponent:En,onConfirm:se,toastObject:ue,modalPosition:Ee.ON_ROOT})]})}const wo=s.div`
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
`,Co=s.div`
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
`;const Bt=s.button`
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
`,jo=s.div`
  color: ${e=>e.isChannelBlocked?"red":e.isChannelDeactivated?"#30CC8B":"red "};
`,Oe=s.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function Ot(){const e=O.useRef(null),[o,i]=O.useState(!1);J();const n=()=>{i(r=>!r)},a=()=>{i(!1)};return t.jsxs(H,{flex:"0",ref:e,children:[t.jsx(yo,{active:o,onClick:n}),o&&t.jsx(fo,{DropdownRef:e,isDropdownOpen:o,closeDropdown:a})]})}s.div`
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
`;const yo=s(lr)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${e=>e.active?"rotateZ(90deg)":"none"};
`,Ut=({title:e,description:o,Button:i,style:n})=>{const a=J(),r=ge(700);return t.jsxs(To,{style:n,children:[t.jsxs(W,{align:"flex-start",children:[t.jsx(bo,{style:{color:a.color},children:e}),!r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"4px"}}),t.jsx(vo,{children:o})]})]}),i]})},bo=s.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.color};
`,vo=s.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${e=>e.theme.default.secondaryColor};
`,To=s(dr)`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 20px 24px;

  @media ${T.tablet} {
    padding: 20px 12px;
    flex: 0;
  }
`;function Ao(e){return si({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function So(e){return si({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}const Eo=({delegateAddress:e,maxWidth:o})=>{const[i,n]=l.useState(e),[a,r]=l.useState(!1),c=ge(1200);return l.useEffect(()=>{if(!c)n(e);else{const p=li(e,5);n(p)}},[c]),t.jsx(Io,{onMouseLeave:()=>r(!1),minWidth:c?"120px":"350px",children:t.jsx(Mo,{addressText:i,isCopied:a,setIsCopied:r,delegateAddress:e})})},Mo=({addressText:e,isCopied:o,setIsCopied:i,delegateAddress:n})=>{const a=ge(1e3),[r,c]=l.useState(!1),p=x=>{c(!1)},d=x=>{c(!0)};return t.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},onMouseEnter:d,onMouseLeave:p,children:[t.jsx(Do,{children:li(e,7,7)}),r&&t.jsx(ko,{isMobile:a?"10px":"50px",onClick:()=>{navigator.clipboard.writeText(n),i(!0)},children:o?t.jsx(Ao,{size:18,color:"white",style:{paddingTop:6}}):t.jsx(So,{size:18,color:"white",style:{paddingTop:6}})})]})},ko=s.div`
  cursor: pointer;
  margin-left: ${e=>e.isMobile||""};
`,Ro=s.span`
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
`,Io=s(Ro)`
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
`,Do=s.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`,Ft=({options:e,item:o})=>{const[i,n]=l.useState(!1),a=l.useRef();return he(a,()=>n(!1)),t.jsxs("div",{children:[t.jsx(Lo,{onClick:()=>n(!0)}),i&&t.jsx(No,{onMouseLeave:()=>n(!1),ref:a,children:e.map(({icon:r,onClick:c,text:p},d)=>t.jsxs(zo,{onClick:()=>c(o),index:d,children:[r,t.jsx($o,{children:p})]},d))})]})},Lo=s(cr)`
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
`,No=s.div`
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
`,$o=s.span`
  margin-left: 8px;
`,tt=({children:e})=>t.jsx(Po,{children:e}),Po=s.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`,_t=e=>{const o=(i,n)=>i.toLowerCase()===n.toLowerCase();return t.jsx(Bo,{style:e.style,isLoading:e.isLoading,children:t.jsx(W,{flex:"5",justify:"flex-start",align:"stretch",children:e.isLoading?t.jsx(Fo,{children:t.jsx(ct,{type:pt.SEAMLESS})}):t.jsxs(t.Fragment,{children:[e.items&&e.items.length>0&&e.items.map(i=>{var n,a;return t.jsxs("div",{children:[t.jsx(Uo,{}),t.jsxs(W,{direction:"row",justify:"space-between",padding:"9.5px 0px",children:[t.jsxs(W,{direction:"row",justify:"flex-start",margin:"0px 0px 0px -15px",children:[e.isAddress?t.jsx(_o,{children:t.jsx(Eo,{delegateAddress:i,maxWidth:"200px"})}):t.jsxs(t.Fragment,{children:[t.jsx(Oo,{children:i.description}),i.type===2&&t.jsx(tt,{children:"Range"}),i.type===3&&t.jsx(tt,{children:"Multi-Range"})]}),e.isAddress&&o(e.account,i)&&t.jsx(tt,{children:"Creator"})]}),e.isAddress===!0&&((n=e.addressDropdownOptions)==null?void 0:n.length)>0&&!o(e.account,i)&&t.jsx(Ft,{options:e.addressDropdownOptions,item:i}),e.isAddress===!1&&((a=e.settingsDropdownOptions)==null?void 0:a.length)>0&&t.jsx(Ft,{options:e.settingsDropdownOptions,item:i})]})]},e.isAddress?i:i.description||i.index)}),e.items&&e.items.length===0&&e.isAddress===!1&&t.jsx($r,{title:"No settings added",description:"Add settings for users to customize their notification preferences.",onClick:e.onClickEmptyListButton,buttonTitle:e.emptyListButtonTitle})]})})})},Bo=s.div`
  padding: ${e=>e.isLoading?"0px":"0px 24px 16px"};
  flex: 1;

  @media ${T.tablet} {
    flex: 0;
    padding: ${e=>e.isLoading?"0px":"0px 0px 10px"};
  }
`,Oo=s.span`
  margin-left: 15px;
  color: ${e=>e.theme.scheme==="light"?e.theme.default.color:e.theme.default.secondaryColor};
`,Uo=s.div`
  background-color: ${e=>e.theme.default.border};
  height: 1px;
`,Fo=s.div`
  height: 100px;
`,_o=s.div`
  @media ${T.tablet} {
    margin: 0px 0px 0px 5px;
  }
`,Vo="DD MMM, YYYY";function Ho({isChannelExpired:e,setIsChannelExpired:o,showEditChannel:i,destroyChannel:n}){var Ce,Q,Te;const{account:a,chainId:r,wallet:c}=pe(),{delegatees:p,channelDetails:d,canVerify:x,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:f}}=U(R=>R.admin),{channelSettings:m}=U(R=>R.channels),{userPushSDKInstance:u}=U(R=>R.user),{handleConnectWalletAndEnableProfile:h}=l.useContext(ci),{CHANNEL_ACTIVE_STATE:k,CHANNNEL_DEACTIVATED_STATE:N}=U(R=>R.channels),{processingState:z}=U(R=>R.channelCreation),[$,w]=l.useState([]),[S,y]=l.useState("");let{channelState:D}=d;D||(D=d.activation_status);const G=D===k,Y=D===N,I=re.coreContractChain===r,P=ge(600),[C,A]=l.useState([a]),[V,B]=l.useState(void 0);U(R=>R.contracts);const E=pr(),{isModalOpen:M,showModal:b,ModalComponent:ue}=Se(),se=ce(),K=async()=>{u.signer||await h({wallet:c}),b()},fe=async R=>u.channel.delegate.add(ft(R,r)),ae=d.expiryTime?xr(((Ce=d.expiryTime)==null?void 0:Ce.toString())*1e3):"",_=d.expiryTime?hr(((Q=d.expiryTime)==null?void 0:Q.toString())*1e3):!0,le=d.expiryTime?gr(((Te=d.expiryTime)==null?void 0:Te.toString())*1e3,14):"";l.useEffect(()=>{d.channelType==ut.TIMEBOUND&&(_||o(!0))},[_]),l.useEffect(()=>{!d||!x||async function(){let R=await pi.getInstance().getChannelJsonAsync(d.verifiedBy);w(R)}()},[d,x]),l.useEffect(()=>{!d||!I||async function(){const R=d.channelStartBlock.toString(),ie=await new ni(re.coreRPC).getBlock(+R),v=oi(ie.timestamp*1e3);y(v.format(Vo))}()},[d]),l.useEffect(()=>{a&&(!p||!p.length?B(a):B(I?p[0].channel:p[0].alias_address))},[p,a]),l.useEffect(()=>{a&&(async()=>{try{const R=ft(a,r),ie=await u.channel.delegate.get({channel:R});if(ie){const v=ie.map(L=>L);v.unshift(a),A(v)}}catch(R){console.error(R)}})()},[a,r]);const we=async R=>{let ie=u;if(!(!ie.signer&&(ie=await h({wallet:c}),!ie)))return ie.channel.delegate.remove(ft(R,r))},ve=()=>{E(ur.ChannelSettings)};return t.jsxs(Z,{children:[t.jsxs(Ko,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(Wo,{src:d.icon}),t.jsxs(it,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(na,{children:[d.name,x&&t.jsx(Yo,{src:"/verify.png"})]}),t.jsxs(it,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[I&&f&&!g||!I&&!g?t.jsx(Qo,{children:"Alias Network Setup Pending"}):t.jsxs(Go,{justifyContent:"flex-start",children:[t.jsxs(qo,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(ea,{children:d.subscriber_count})]}),t.jsxs(Zo,{active:G,children:[Y&&t.jsx(We,{width:"12px",src:gn,margin:"0 5px 2px 0px",height:"30px"}),G?"Active":Y?"Deactivated":"Blocked"]}),d.channelType==ut.TIMEBOUND&&!e&&t.jsxs(H,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(We,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(xe,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",ae]})]}),d.channelType==ut.TIMEBOUND&&e&&t.jsxs(H,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(We,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(xe,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",ae]})]})]}),S&&t.jsxs(ta,{children:["Created ",S]})]})]})]}),P&&t.jsxs(H,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!e&&I&&t.jsx(te,{onClick:i,size:"small",variant:"outline",children:"Edit Channel"}),!e&&t.jsx(Ot,{}),e&&I&&t.jsx(te,{onClick:n,size:"small",variant:"danger",children:"Delete Channel"})]}),e&&t.jsx(Z,{alignItems:"flex-start",children:t.jsxs(Ht,{margin:"25px 0 0 0",children:[t.jsx(xe,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",t.jsx(xe,{fontWeight:"600",children:le})]})}),t.jsx(Z,{alignItems:"flex-start",children:t.jsx(Ht,{children:d.info})}),x&&t.jsx(it,{alignItems:"flex-start",padding:"5px 0px",children:t.jsx(oa,{children:t.jsxs(ia,{children:[t.jsx("span",{children:"verified by:"}),t.jsx(Jo,{src:$.icon}),t.jsx(Xo,{children:$.name})]})})}),z===0&&t.jsxs(Z,{children:[t.jsx(Ke,{children:t.jsxs(Gt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(Ut,{title:"Notification Settings",description:"Customize notification preferences for users",Button:t.jsx(Pr,{onClick:ve})}),t.jsx(_t,{account:a,isAddress:!1,items:m[a],isLoading:!1,onClickEmptyListButton:ve,emptyListButtonTitle:"Add Setting"})]})}),t.jsx(Ke,{children:t.jsxs(Gt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(Ut,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:t.jsx(Br,{onClick:K})}),t.jsx(_t,{account:a,isAddress:!0,items:C,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:we,icon:t.jsx(mr,{})}]})]})})]}),t.jsx(ue,{InnerComponent:vn,onConfirm:fe,toastObject:se,modalPosition:Ee.ON_ROOT})]})}const it=s(Z)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Go=s(H)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Ko=s(H)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Wo=s.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${T.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Yo=s.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Jo=s.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,Xo=s.div``,qo=s.div`
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
`,Zo=s(Vt)`
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
`,Qo=s(Vt)`
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
`,ea=s.span`
  font-weight: 400;
  font-size: 14px;
`;s.div`
  display: flex;
  flex-direction: column;
  @media ${T.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const ta=s.div`
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
`,ia=s.div`
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
`,oa=s.div`
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
`,Gt=s(di)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
`,aa=({channelName:e,setChannelName:o,channelInfo:i,setChannelInfo:n,channelURL:a,setChannelURL:r,editChannel:c,errorInfo:p,setErrorInfo:d})=>{const x=J(),g=({message:m})=>t.jsxs(W,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[t.jsx(Cr,{color:"red",size:"20"}),t.jsx(de,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:m})]}),f=m=>{const u=m.target.value;ui(u)?(d(""),r(u)):(d(h=>({...h,url:"Channel URL is invalid! Please enter a valid url!"})),r(u))};return t.jsx(ra,{children:t.jsx(sa,{onSubmit:c,children:t.jsxs(la,{children:[t.jsxs(W,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(nt,{style:{color:x.editChannelPrimaryText},children:"Channel Name"}),t.jsx(W,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:t.jsx(ht,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:x.editChannelInputbg,color:x.editChannelPrimaryText,border:x.textAreaBorderColor,focusBorder:x.textAreaFocusBorder,radius:"12px",height:"25px",value:e,onChange:m=>{o(m.target.value)}})})]}),(p==null?void 0:p.name)&&t.jsx(g,{message:p==null?void 0:p.name}),t.jsxs(W,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[t.jsxs(W,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(nt,{style:{color:x.editChannelPrimaryText},children:"Channel Description"}),t.jsx(de,{color:x.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-i.length})]}),t.jsx(wr,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:x.textAreaBorderColor,focusBorder:x.textAreaFocusBorder,radius:"12px",bg:x.editChannelInputbg,color:x.editChannelPrimaryText,value:i,onChange:m=>{n(m.target.value.slice(0,250))},autocomplete:"off"})]}),(p==null?void 0:p.description)&&t.jsx(g,{message:p==null?void 0:p.description}),t.jsxs(W,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[t.jsx(nt,{style:{color:x.editChannelPrimaryText},children:"Channel Website URL"}),t.jsx(ht,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:x.editChannelInputbg,color:x.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:x.textAreaBorderColor,focusBorder:x.textAreaFocusBorder,radius:"12px",value:a,onChange:m=>{f(m)}})]}),(p==null?void 0:p.url)&&t.jsx(g,{message:p==null?void 0:p.url})]})})})},ra=s(Ke)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,sa=s(fr)`
  height: inherit;
`,nt=s.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,la=s(W)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,da="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",ca=({onClose:e,InnerComponentProps:o})=>{const{setChannelLogo:i,croppedImage:n,setCroppedImage:a,imageSrc:r,setImageSrc:c,imageType:p,setImageType:d}=o,x=l.useRef(),g=l.useRef(null);he(g,()=>{e()});const f=h=>{h.preventDefault()},m=h=>{h.preventDefault(),h.stopPropagation(),u(h.dataTransfer,"transfer",h)},u=async(h,k,N)=>{if(N.preventDefault(),a(void 0),h==null?void 0:h.files[0]){var z=new FileReader;z.readAsDataURL(h==null?void 0:h.files[0]),z.onloadend=function($){var w;c(z.result),d((w=h==null?void 0:h.files[0])==null?void 0:w.type)}}};return t.jsxs(pa,{ref:g,children:[t.jsx(ga,{children:t.jsx(ma,{onClick:e})}),t.jsxs(xa,{children:[t.jsx(ha,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),t.jsx(wa,{className:"",children:t.jsx("div",{onDragOver:h=>f(h),onDrop:h=>m(h),className:"bordered",children:t.jsxs("div",{className:"inner",children:[t.jsx("div",{className:"crop-div",children:n?t.jsx("div",{className:"crop-innderdiv",children:t.jsx("div",{children:t.jsx("img",{alt:"Cropped Img",src:n,className:"croppedImage"})})}):t.jsx("div",{className:"crop-innderdiv",children:t.jsx(Fr,{className:"cropper",imageSrc:r,imageType:p,onImageCropped:h=>a(h),width:"128px",height:"128px",ref:x})})}),t.jsxs(ua,{children:[t.jsx("p",{className:"text-below",children:"Drag and Drop or"}),t.jsx("div",{className:"text-div",children:t.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[t.jsx("div",{children:"Browse to Choose"}),t.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:h=>u(h.target,"target",h),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),t.jsx(fa,{children:n?t.jsx(t.Fragment,{children:t.jsx(te,{variant:"primary",size:"medium",onClick:()=>{i(n),e()},children:"Upload Image"})}):t.jsx(t.Fragment,{children:t.jsx(te,{variant:"primary",size:"medium",onClick:()=>{x.current.showCroppedImage()},children:"Crop Image"})})})]})]})},pa=s.div``,xa=s.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,ha=s.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${e=>e.theme.modalTextColor};
`,ga=s.div`
  text-align: end;
  width: 100%;
`,ma=s(jr)`
  cursor: pointer;
  font-size: 20px;
  color: ${e=>e.theme.modalTextColor};
`,ua=s(di)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,fa=s(Z)``,wa=s.div`
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
`,be=e=>e.trim().length==0;function Ca(e,o){var i=new XMLHttpRequest;i.onload=function(){var n=new FileReader;n.onloadend=function(){o(n.result)},n.readAsDataURL(i.response)},i.open("GET",e),i.responseType="blob",i.send()}const ja=e=>{var o=Vr,i=e.split(";base64,").pop(),n=yr.from(i,"base64"),a=o(n);return a.width>128||a.height>128?(console.error("Image size check failed... returning"),{success:0,info:"Image size check failed, Image should be 128X128PX"}):(console.debug("Image verification",i.charAt(0)),i.charAt(0)==="/"?{success:1,info:"Image checks passed"}:i.charAt(0)==="i"?{success:1,info:"Image checks passed"}:{success:0,info:"Image extension should be jpg or png"})};function ya({closeEditChannel:e,UploadLogoComponent:o,displayUplaodLogoModal:i}){const{account:n,provider:a}=pe(),{channelDetails:r,aliasDetails:{isAliasVerified:c,aliasAddrFromContract:p}}=U(v=>v.admin),{epnsReadProvider:d,epnsWriteProvider:x}=U(v=>v.contracts),g=50,[f,m]=l.useState(r==null?void 0:r.name),[u,h]=l.useState(r==null?void 0:r.info),[k,N]=l.useState(r==null?void 0:r.url),[z,$]=l.useState(r==null?void 0:r.icon),[w,S]=l.useState(r==null?void 0:r.icon),[y,D]=l.useState(r==null?void 0:r.icon),[G,Y]=l.useState(y),[I,P]=l.useState(null),[C,A]=l.useState(!1),[V,B]=l.useState({name:"",description:"",address:"",url:""}),[E,M]=l.useState(!1),[b,ue]=l.useState(0),[se,K]=l.useState(0),[fe,ae]=l.useState(!1),_=ce();l.useEffect(()=>{n&&async function(){const v=await d.channelUpdateCounter(n);ue(g*(Number(v)+1))}()},[n]),l.useEffect(()=>{!n||!a||async function(){const v=await xi({address:n,provider:a,contractAddress:Ye.epnscore});K(parseInt(v));const L=parseInt(v);L>=b&&L!=0?A(!0):A(!1)}()},[n,a]);const le=async()=>{if(M(!0),!a)return;const v=a.getSigner(n);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const L=await gi({signer:v,contractAddress:Ye.epnscore,amount:b-se});console.debug("response",L),L&&(M(!1),K(b),A(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:ee=>t.jsx(je,{size:ee,color:"green"})}))}catch(L){console.error(L),L.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:ee=>t.jsx(X,{size:ee,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:ee=>t.jsx(X,{size:ee,color:"red"})}),console.error("Error --> %o",L),console.error({err:L}))}M(!1)},we=()=>{ae(!1)},ve=ge(600),Ce=l.useRef(null);he(Ce,()=>{we()});const Q=()=>(B(""),be(f)||be(u)||be(k)?(be(f)&&B(v=>({...v,name:"Please, enter the channel name."})),be(u)&&B(v=>({...v,description:"Please, enter the channel description"})),be(k)&&B(v=>({...v,url:"Please, enter the channel url"})),!1):fi(f,125)?fi(k,125)?ui(k)?!0:(B(v=>({...v,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(B(v=>({...v,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(B(v=>({...v,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),Te=()=>!(f!==(r==null?void 0:r.name)||u!==(r==null?void 0:r.info)||k!==(r==null?void 0:r.url)||w!==(r==null?void 0:r.icon)),R=async v=>{try{if(!Q())return;M(!0);const L=JSON.stringify({name:f,info:u,url:k,icon:w,aliasDetails:r.aliasDetails||br({chainId:parseInt(r.chain_id),address:r.address})});console.debug(L);const ee=await vr(L);console.debug("IPFS storagePointer:",ee);const ot="1+"+ee,at=ri(ot),rt=ai(b.toString(),18);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Ue=await x.updateChannelMeta(n,at,rt,{gasLimit:1e6});console.debug(Ue),await Ue.wait(),M(!1),_.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:Me=>t.jsx(je,{size:Me,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(L){M(!1),console.error(L.message),L.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:ee=>t.jsx(X,{size:ee,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:ee=>t.jsx(X,{size:ee,color:"red"})}),console.error("Error --> %o",L),console.error({err:L}))}},ie=async v=>{await hi({noOfTokens:v,provider:a,account:n})};return l.useEffect(()=>{y&&(console.debug("Image cropped",y),Ca(y,function(v){const L=ja(v);console.debug("response",L),L.success&&(console.debug("Cropped Image....",y),S(y))}))},[y]),t.jsxs(ba,{ref:Ce,children:[t.jsx(o,{InnerComponent:ca,InnerComponentProps:{setChannelLogo:$,channelLogo:z,croppedImage:y,setCroppedImage:D,setChannelFile:S,imageSrc:G,setImageSrc:Y,imageType:I,setImageType:P,errorInfo:V,setErrorInfo:B},modalPosition:Ee.ON_PARENT}),t.jsxs(va,{children:[t.jsxs(Aa,{children:[t.jsx(Sa,{src:z}),t.jsx(te,{variant:"secondary",onClick:()=>{i(),ae(!0)},children:"Upload Logo"})]}),!ve&&t.jsx(Ea,{}),t.jsx(aa,{channelName:f,setChannelName:m,channelInfo:u,setChannelInfo:h,channelURL:k,setChannelURL:N,editChannel:R,errorInfo:V,setErrorInfo:B})]}),t.jsxs(Ma,{children:[t.jsxs("div",{children:[t.jsx(ka,{children:"Channel edit fee"}),t.jsx(Ra,{children:"Editing channel details requires fees to be deposited"})]}),t.jsxs(H,{flex:"0",children:[C?t.jsx(Ta,{src:da}):null,t.jsxs(Ia,{children:[b," PUSH"]})]})]}),t.jsx(Dt,{noOfPushTokensToCheck:b,containerProps:{width:"100%"},onMintPushToken:ie}),E?t.jsx(t.Fragment,{children:t.jsxs(Da,{children:[t.jsx(Spinner,{size:42,color:F.COLORS.PRIMARY_PINK,type:gt.PROCESSING}),t.jsx(La,{children:"Verifying Transaction"})]})}):t.jsx(t.Fragment,{children:t.jsxs(Na,{children:[t.jsx(te,{onClick:e,variant:"outline",size:"large",children:"Cancel"}),se>=b?t.jsx(te,{disabled:Te(),onClick:R,size:"large",children:"Save Changes"}):t.jsx(te,{onClick:le,size:"large",children:"Approve PUSH"})]})})]})}const ba=s(Z)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,va=s(Z)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,Ta=s.img``,Aa=s(H)`
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
`,Sa=s.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${T.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Ea=s.div`
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
`,Ma=s(Z)`
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
`,Ra=s.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${e=>e.theme.editChannelSecondaryText};
`,Ia=s.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Da=s(Z)`
  flex-direction: row;
  margin-top: 33px;
`,La=s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,Na=s(H)`
  justify-content: end;
  margin-top: 35px;
  gap: 14px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,za=10;let Kt=null;const $a=()=>{J();const{account:e,chainId:o,wallet:i}=pe(),{channelDetails:n,delegatees:a,aliasDetails:{aliasAddr:r,aliasEthAddr:c,isAliasVerified:p,aliasAddrFromContract:d}}=U(C=>C.admin),{processingState:x}=U(C=>C.channelCreation),{epnsWriteProvider:g}=U(C=>C.contracts);U(C=>C.user),l.useContext(ci);const f=n&&n!=="unfetched",m=ce(),u=Le(),[h,k]=l.useState(!1);l.useState(!0);const[N,z]=l.useState(!1),$=re.coreContractChain===o,w=ge(600);l.useEffect(()=>{if(!$||!n||d||n==="unfetched")return;const C=Tr(n);if(C){const{address:A,chainId:V}=C;u(Ar(A)),u(Sr(V))}else u(Ne(0))},[n,d]);const S=async C=>{let{aliasAddress:A=null,isAliasVerified:V=null}=await pi.getInstance().getChannelDetailsFromAddress(C);return A=="NULL"&&(A=null),{aliasAddress:A,aliasVerified:V}};l.useEffect(()=>{!$||!d||x===0||(Kt=setInterval(async()=>{const{aliasAddress:C,aliasVerified:A}=await S(e);C?(u(Er(C)),A?(u(wt(!0)),u(Ne(0))):(u(Ne(2)),u(wt(!1)))):x!=0&&x!=1&&u(Ne(1))},za*1e3))},[d]),r!==null&&clearInterval(Kt);const y=async()=>{try{m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await g.destroyTimeBoundChannel(e,{gasLimit:1e6});console.debug(C),console.debug("Check: "+e),await C.wait(),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:A=>t.jsx(X,{size:A,color:"green"})}),u(mt(null))}catch(C){console.error(C),C.code=="ACTION_REJECTED"?m.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:A=>t.jsx(X,{size:A,color:"red"})}):m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:A=>t.jsx(X,{size:A,color:"red"})})}},D=()=>{z(!0)},G=()=>{z(!1)},{isModalOpen:Y,showModal:I,ModalComponent:P}=Se();return t.jsxs(H,{children:[(n==="unfetched"||x===null)&&t.jsx(Mt,{}),n!=="unfetched"&&t.jsxs(Z,{justifyContent:x===0&&"flex-start",height:"fit-content",children:[!n&&x===0&&t.jsx(Hr,{}),f&&x!==null&&t.jsx(Pa,{children:N?t.jsx(ya,{closeEditChannel:G,UploadLogoComponent:P,displayUplaodLogoModal:I,isUploadLogoModalOpen:Y}):t.jsxs(t.Fragment,{children:[n&&!w&&t.jsxs(H,{zIndex:"1",gap:"8px",children:[!h&&$&&t.jsx(te,{onClick:D,size:"small",variant:"outline",children:"Edit Channel"}),!h&&t.jsx(Ot,{}),h&&$&&t.jsx(te,{onClick:y,size:"small",variant:"danger",children:"Delete Channel"})]}),n?t.jsx(Ho,{isChannelExpired:h,setIsChannelExpired:k,showEditChannel:D,destroyChannel:y}):""]})}),x!==0&&x!==null&&f&&!N&&t.jsx(t.Fragment,{children:t.jsx(pn,{aliasEthAccount:c,setAliasVerified:wt})})]})]})},Pa=s(Z)`
  align-items: center;
  align-self: center;
  background: ${e=>e.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${F.ADJUSTMENTS.RADIUS.LARGE} ${F.ADJUSTMENTS.RADIUS.LARGE}
    ${F.ADJUSTMENTS.RADIUS.LARGE} ${F.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${ye.MINI_MODULES.DESKTOP.RIGHT} - ${ye.MINI_MODULES.DESKTOP.LEFT} -
      ${F.ADJUSTMENTS.PADDING.HUGE} - ${F.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${F.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${F.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${T.laptop} {
    margin: ${F.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${F.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${ye.MINI_MODULES.TABLET.RIGHT} - ${ye.MINI_MODULES.TABLET.LEFT} -
        ${F.ADJUSTMENTS.PADDING.BIG} - ${F.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${T.mobileL} {
    margin: ${F.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${F.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${ye.MINI_MODULES.MOBILE.RIGHT} - ${ye.MINI_MODULES.MOBILE.LEFT} -
        ${F.ADJUSTMENTS.PADDING.DEFAULT} - ${F.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${F.CONSTANTS.HEADER_HEIGHT}px - ${ye.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${F.ADJUSTMENTS.RADIUS.LARGE} ${F.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;re.coreContractChain;function Ba(){Mr.pageview("/channel_dashboard");const[e,o]=O.useState(!0),[i,n]=O.useState(null),a=()=>n(null);return O.useEffect(()=>{i&&a()},[i]),t.jsxs(t.Fragment,{children:[e?t.jsx($a,{}):t.jsx(Mt,{}),i&&t.jsx(Ir,{notification:i,clearToast:a})]})}s.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Wt;wi=()=>t.jsx(Wt,{children:t.jsx(Ba,{})}),Wt=s(kr)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Xr as __tla,wi as default};
