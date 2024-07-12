import{gB as _t,gC as oa,r as l,gD as ie,m as e,gE as Pe,gF as Se,gG as Ee,gH as Ue,ec as Fe,gI as aa,eb as ee,gJ as ot,gK as Gt,gL as ra,gM as _e,gN as at,gO as je,gP as Vt,gQ as Kt,q as a,X as te,eI as V,dj as sa,dk as la,de as z,I as J,d2 as ae,eF as rt,_ as Ht,fQ as ca,eG as xe,x as ue,d8 as Wt,dd as Me,e5 as da,e4 as pa,d6 as ve,z as se,c$ as $,d9 as xa,gR as ha,gS as ke,gT as ga,E as Ge,n as Ve,L as Ke,R as G,dl as st,d1 as I,dD as fe,eO as be,eJ as Y,d4 as X,dJ as Yt,dK as lt,gU as ct,eZ as ma,dq as he,eQ as Re,eE as Jt,gV as Xt,e6 as He,eK as ua,f$ as qt,ew as dt,dF as Ie,fD as fa,dG as De,gW as Qt,gX as ba,dE as Zt,eL as en,db as wa,gY as ya,gZ as Ca,g_ as ja,g$ as pt,fl as tn,er as xt,ds as ht,h0 as va,A as Ta,dg as Aa,dm as Sa,h1 as Ea,h2 as Ma,h3 as ka,h4 as Ra,d0 as we,h5 as Ia,h6 as Da,h7 as Na,h8 as La,h9 as gt,d3 as za,S as $a,__tla as Ba}from"./index-C0sSRm4e.js";import{S as Oa,N as Pa,__tla as Ua}from"./RedCircle-DNuNuQLR.js";import{M as nn,S as Fa,F as on,C as an,a as rn,__tla as _a}from"./ChannelInfoList-BT0KXnSE.js";import{a as Ga,__tla as Va}from"./Tag-BRBKu3Rd.js";import{g as sn,m as ln,a as cn,__tla as Ka}from"./UniswapWidget-B28oZtwQ.js";import{M as Ha,a as Wa,__tla as Ya}from"./EmptyNotificationSettings-B-iPpxKv.js";import{I as Ja,t as Xa,h as qa,C as Qa,__tla as Za}from"./CreateChannel-DtKWldY0.js";import{__tla as er}from"./TransitionGroupContext-P8byheXY.js";import{__tla as tr}from"./slicedToArray-BXjxfsHg.js";import{__tla as nr}from"./index.es-C-ttKHtM.js";import"./browser-CeceZ__e.js";import{__tla as ir}from"./index.esm-Oji-Mdb_.js";import{__tla as or}from"./index.esm-BL24NrI2.js";import{__tla as ar}from"./ErrorFilled-Bku6kkcO.js";import{__tla as rr}from"./useMutation-eUWSa_Lo.js";let dn,sr=Promise.all([(()=>{try{return Ba}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Za}catch{}})(),(()=>{try{return er}catch{}})(),(()=>{try{return tr}catch{}})(),(()=>{try{return nr}catch{}})(),(()=>{try{return ir}catch{}})(),(()=>{try{return or}catch{}})(),(()=>{try{return ar}catch{}})(),(()=>{try{return rr}catch{}})()]).then(async()=>{function pn(t,i=0,n=1){return oa(t,i,n)}function xn(t){t=t.slice(1);const i=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(i);return n&&n[0].length===1&&(n=n.map(o=>o+o)),n?`rgb${n.length===4?"a":""}(${n.map((o,s)=>s<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function mt(t){if(t.type)return t;if(t.charAt(0)==="#")return mt(xn(t));const i=t.indexOf("("),n=t.substring(0,i);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(_t(9,t));let o=t.substring(i+1,t.length-1),s;if(n==="color"){if(o=o.split(" "),s=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(_t(10,s))}else o=o.split(",");return o=o.map(r=>parseFloat(r)),{type:n,values:o,colorSpace:s}}function hn(t){const{type:i,colorSpace:n}=t;let{values:o}=t;return i.indexOf("rgb")!==-1?o=o.map((s,r)=>r<3?parseInt(s,10):s):i.indexOf("hsl")!==-1&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),i.indexOf("color")!==-1?o=`${n} ${o.join(" ")}`:o=`${o.join(", ")}`,`${i}(${o})`}function gn(t,i){return t=mt(t),i=pn(i),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${i}`:t.values[3]=i,hn(t)}function mn(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function un(t){return parseFloat(t)}function fn(t){const{className:i,classes:n,pulsate:o=!1,rippleX:s,rippleY:r,rippleSize:b,in:c,onExited:p,timeout:h}=t,[g,m]=l.useState(!1),d=ie(i,n.ripple,n.rippleVisible,o&&n.ripplePulsate),u={width:b,height:b,top:-(b/2)+r,left:-(b/2)+s},x=ie(n.child,g&&n.childLeaving,o&&n.childPulsate);return!c&&!g&&m(!0),l.useEffect(()=>{if(!c&&p!=null){const T=setTimeout(p,h);return()=>{clearTimeout(T)}}},[p,c,h]),e.jsx("span",{className:d,style:u,children:e.jsx("span",{className:x})})}const ne=Pe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),bn=["center","classes","className"];let Ne=t=>t,ut,ft,bt,wt;const We=550,wn=80,yn=Se(ut||(ut=Ne`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Cn=Se(ft||(ft=Ne`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),jn=Se(bt||(bt=Ne`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),vn=Ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Tn=Ee(fn,{name:"MuiTouchRipple",slot:"Ripple"})(wt||(wt=Ne`
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
`),ne.rippleVisible,yn,We,({theme:t})=>t.transitions.easing.easeInOut,ne.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,ne.child,ne.childLeaving,Cn,We,({theme:t})=>t.transitions.easing.easeInOut,ne.childPulsate,jn,({theme:t})=>t.transitions.easing.easeInOut),An=l.forwardRef(function(t,i){const n=Ue({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:r}=n,b=Fe(n,bn),[c,p]=l.useState([]),h=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[c]);const m=l.useRef(!1),d=aa(),u=l.useRef(null),x=l.useRef(null),T=l.useCallback(f=>{const{pulsate:M,rippleX:A,rippleY:P,rippleSize:K,cb:U}=f;p(O=>[...O,e.jsx(Tn,{classes:{ripple:ie(s.ripple,ne.ripple),rippleVisible:ie(s.rippleVisible,ne.rippleVisible),ripplePulsate:ie(s.ripplePulsate,ne.ripplePulsate),child:ie(s.child,ne.child),childLeaving:ie(s.childLeaving,ne.childLeaving),childPulsate:ie(s.childPulsate,ne.childPulsate)},timeout:We,pulsate:M,rippleX:A,rippleY:P,rippleSize:K},h.current)]),h.current+=1,g.current=U},[s]),D=l.useCallback((f={},M={},A=()=>{})=>{const{pulsate:P=!1,center:K=o||M.pulsate,fakeElement:U=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&m.current){m.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(m.current=!0);const O=U?null:x.current,w=O?O.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,F,H;if(K||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round(w.width/2),F=Math.round(w.height/2);else{const{clientX:N,clientY:S}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round(N-w.left),F=Math.round(S-w.top)}if(K)H=Math.sqrt((2*w.width**2+w.height**2)/3),H%2===0&&(H+=1);else{const N=Math.max(Math.abs((O?O.clientWidth:0)-C),C)*2+2,S=Math.max(Math.abs((O?O.clientHeight:0)-F),F)*2+2;H=Math.sqrt(N**2+S**2)}f!=null&&f.touches?u.current===null&&(u.current=()=>{T({pulsate:P,rippleX:C,rippleY:F,rippleSize:H,cb:A})},d.start(wn,()=>{u.current&&(u.current(),u.current=null)})):T({pulsate:P,rippleX:C,rippleY:F,rippleSize:H,cb:A})},[o,T,d]),R=l.useCallback(()=>{D({},{pulsate:!0})},[D]),B=l.useCallback((f,M)=>{if(d.clear(),(f==null?void 0:f.type)==="touchend"&&u.current){u.current(),u.current=null,d.start(0,()=>{B(f,M)});return}u.current=null,p(A=>A.length>0?A.slice(1):A),g.current=M},[d]);return l.useImperativeHandle(i,()=>({pulsate:R,start:D,stop:B}),[R,D,B]),e.jsx(vn,ee({className:ie(ne.root,s.root,r),ref:x},b,{children:e.jsx(Ga,{component:null,exit:!0,children:c})}))});function Sn(t){return ot("MuiButtonBase",t)}const En=Pe("MuiButtonBase",["root","disabled","focusVisible"]),Mn=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],kn=t=>{const{disabled:i,focusVisible:n,focusVisibleClassName:o,classes:s}=t,r=at({root:["root",i&&"disabled",n&&"focusVisible"]},Sn,s);return n&&o&&(r.root+=` ${o}`),r},Rn=Ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,i)=>i.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${En.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),In=l.forwardRef(function(t,i){const n=Ue({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:r,className:b,component:c="button",disabled:p=!1,disableRipple:h=!1,disableTouchRipple:g=!1,focusRipple:m=!1,LinkComponent:d="a",onBlur:u,onClick:x,onContextMenu:T,onDragLeave:D,onFocus:R,onFocusVisible:B,onKeyDown:f,onKeyUp:M,onMouseDown:A,onMouseLeave:P,onMouseUp:K,onTouchEnd:U,onTouchMove:O,onTouchStart:w,tabIndex:C=0,TouchRippleProps:F,touchRippleRef:H,type:N}=n,S=Fe(n,Mn),v=l.useRef(null),j=l.useRef(null),ge=Gt(j,H),{isFocusVisibleRef:re,onFocus:W,onBlur:le,ref:oe}=ra(),[_,ce]=l.useState(!1);p&&_&&ce(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{ce(!0),v.current.focus()}}),[]);const[de,Ce]=l.useState(!1);l.useEffect(()=>{Ce(!0)},[]);const me=de&&!h&&!p;l.useEffect(()=>{_&&m&&!h&&de&&j.current.pulsate()},[h,m,_,de]);function q(y,Ut,ia=g){return _e(Ft=>(Ut&&Ut(Ft),!ia&&j.current&&j.current[y](Ft),!0))}const k=q("start",A),Q=q("stop",T),pe=q("stop",D),E=q("stop",K),L=q("stop",y=>{_&&y.preventDefault(),P&&P(y)}),Z=q("start",w),et=q("stop",U),tt=q("stop",O),nt=q("stop",y=>{le(y),re.current===!1&&ce(!1),u&&u(y)},!1),Be=_e(y=>{v.current||(v.current=y.currentTarget),W(y),re.current===!0&&(ce(!0),B&&B(y)),R&&R(y)}),Te=()=>{const y=v.current;return c&&c!=="button"&&!(y.tagName==="A"&&y.href)},it=l.useRef(!1),Zo=_e(y=>{m&&!it.current&&_&&j.current&&y.key===" "&&(it.current=!0,j.current.stop(y,()=>{j.current.start(y)})),y.target===y.currentTarget&&Te()&&y.key===" "&&y.preventDefault(),f&&f(y),y.target===y.currentTarget&&Te()&&y.key==="Enter"&&!p&&(y.preventDefault(),x&&x(y))}),ea=_e(y=>{m&&y.key===" "&&j.current&&_&&!y.defaultPrevented&&(it.current=!1,j.current.stop(y,()=>{j.current.pulsate(y)})),M&&M(y),x&&y.target===y.currentTarget&&Te()&&y.key===" "&&!y.defaultPrevented&&x(y)});let Oe=c;Oe==="button"&&(S.href||S.to)&&(Oe=d);const Ae={};Oe==="button"?(Ae.type=N===void 0?"button":N,Ae.disabled=p):(!S.href&&!S.to&&(Ae.role="button"),p&&(Ae["aria-disabled"]=p));const ta=Gt(i,oe,v),Pt=ee({},n,{centerRipple:s,component:c,disabled:p,disableRipple:h,disableTouchRipple:g,focusRipple:m,tabIndex:C,focusVisible:_}),na=kn(Pt);return e.jsxs(Rn,ee({as:Oe,className:ie(na.root,b),ownerState:Pt,onBlur:nt,onClick:x,onContextMenu:Q,onFocus:Be,onKeyDown:Zo,onKeyUp:ea,onMouseDown:k,onMouseLeave:L,onMouseUp:E,onDragLeave:pe,onTouchEnd:et,onTouchMove:tt,onTouchStart:Z,ref:ta,tabIndex:p?-1:C,type:N},Ae,S,{children:[r,me?e.jsx(An,ee({ref:ge,center:s},F)):null]}))});function Dn(t){return ot("MuiIconButton",t)}const Nn=Pe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Ln=["edge","children","className","color","disabled","disableFocusRipple","size"],zn=t=>{const{classes:i,disabled:n,color:o,edge:s,size:r}=t,b={root:["root",n&&"disabled",o!=="default"&&`color${je(o)}`,s&&`edge${je(s)}`,`size${je(r)}`]};return at(b,Dn,i)},$n=Ee(In,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,n.color!=="default"&&i[`color${je(n.color)}`],n.edge&&i[`edge${je(n.edge)}`],i[`size${je(n.size)}`]]}})(({theme:t,ownerState:i})=>ee({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Vt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},i.edge==="start"&&{marginLeft:i.size==="small"?-3:-12},i.edge==="end"&&{marginRight:i.size==="small"?-3:-12}),({theme:t,ownerState:i})=>{var n;const o=(n=(t.vars||t).palette)==null?void 0:n[i.color];return ee({},i.color==="inherit"&&{color:"inherit"},i.color!=="inherit"&&i.color!=="default"&&ee({color:o==null?void 0:o.main},!i.disableRipple&&{"&:hover":ee({},o&&{backgroundColor:t.vars?`rgba(${o.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Vt(o.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),i.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},i.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Nn.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Bn=l.forwardRef(function(t,i){const n=Ue({props:t,name:"MuiIconButton"}),{edge:o=!1,children:s,className:r,color:b="default",disabled:c=!1,disableFocusRipple:p=!1,size:h="medium"}=n,g=Fe(n,Ln),m=ee({},n,{edge:o,color:b,disabled:c,disableFocusRipple:p,size:h}),d=zn(m);return e.jsx($n,ee({className:ie(d.root,r),centerRipple:!0,focusRipple:!p,disabled:c,ref:i},g,{ownerState:m,children:s}))});function On(t){return ot("MuiSkeleton",t)}Pe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Pn=["animation","className","component","height","style","variant","width"];let Le=t=>t,yt,Ct,jt,vt;const Un=t=>{const{classes:i,variant:n,animation:o,hasChildren:s,width:r,height:b}=t;return at({root:["root",n,o,s&&"withChildren",s&&!r&&"fitContent",s&&!b&&"heightAuto"]},On,i)},Fn=Se(yt||(yt=Le`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),_n=Se(Ct||(Ct=Le`
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
`)),Gn=Ee("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:n}=t;return[i.root,i[n.variant],n.animation!==!1&&i[n.animation],n.hasChildren&&i.withChildren,n.hasChildren&&!n.width&&i.fitContent,n.hasChildren&&!n.height&&i.heightAuto]}})(({theme:t,ownerState:i})=>{const n=mn(t.shape.borderRadius)||"px",o=un(t.shape.borderRadius);return ee({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:gn(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},i.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},i.variant==="circular"&&{borderRadius:"50%"},i.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},i.hasChildren&&{"& > *":{visibility:"hidden"}},i.hasChildren&&!i.width&&{maxWidth:"fit-content"},i.hasChildren&&!i.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&Kt(jt||(jt=Le`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Fn),({ownerState:t,theme:i})=>t.animation==="wave"&&Kt(vt||(vt=Le`
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
    `),_n,(i.vars||i).palette.action.hover)),ze=l.forwardRef(function(t,i){const n=Ue({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:s,component:r="span",height:b,style:c,variant:p="text",width:h}=n,g=Fe(n,Pn),m=ee({},n,{animation:o,component:r,variant:p,hasChildren:!!g.children}),d=Un(m);return e.jsx(Gn,ee({as:r,ref:i,className:ie(d.root,s),ownerState:m},g,{style:ee({width:h,height:b},c)}))}),Tt=()=>(te(),e.jsxs(V,{children:[e.jsxs(Vn,{children:[e.jsxs(Kn,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),e.jsxs(Hn,{children:[e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),e.jsx(ze,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),e.jsx(V,{padding:"40px 0 40px 0",children:e.jsx(sa,{type:la.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),Vn=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Kn=a.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Hn=a.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Wn=()=>{var n,o;const t=te(),{aliasDetails:{aliasChainId:i}}=z(s=>s.admin);return e.jsxs(J,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ae,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(o=(n=rt[i])==null?void 0:n.label)==null?void 0:o.split(" ")[0]," Alias Network."]})," ",e.jsx(ae,{textAlign:"center",margin:"5px 0px 60px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),e.jsxs(J,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[e.jsx(Ht,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ca,{margin:"auto 15px",textTransform:"none",color:t.color,size:"16px",weight:"600",children:"Processing"})]})]})},Yn=()=>{var o;xe();const t=te(),{switchChain:i}=ue(),{aliasDetails:{aliasChainId:n}}=z(s=>s.admin);return e.jsxs(J,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsxs(ae,{textAlign:"center",margin:"30px 0px 0px 0px",color:t.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",e.jsx(Jn,{children:(o=rt[n])==null?void 0:o.label})," to start ",e.jsx("br",{}),"verifying your Channel Alias."]}),e.jsx(J,{width:"12.2em",self:"center",align:"center",margin:"100px auto 50px auto",children:e.jsx(Wt,{bg:"#e20880",color:"#fff",radius:"15px",padding:"20px 20px",onClick:()=>i(n),children:e.jsx(ae,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Change Network"})})})]})},Jn=a.b`
  color: #cf1c84;
`,Xn=({aliasEthAccount:t,setAliasVerified:i})=>{const n=te(),{account:o,provider:s,chainId:r}=ue(),b=s.getSigner(o),c=Me(),p=new da(rt[r].commAddress,pa.epnsComm,b),[h,g]=l.useState(""),[m,d]=l.useState(!1),u=t,x={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"}},T=async()=>{u==t&&R()},D=async()=>{const{aliasVerified:B}=await ga({account:o,chainId:r}).then(f=>f?(c(i(f.is_alias_verified)),{aliasVerified:f.is_alias_verified}):{aliasVerified:null});return{aliasVerified:B}},R=()=>{g("Processing"),p.verifyChannelAlias(u).then(async B=>{console.debug(B),g("Transaction Sent! It usually takes 5mins to verify."),await B.wait(1),setTimeout(()=>{g("Transaction Mined!")},2e3),setTimeout(()=>{g("Loading...")},2e3);const f=setInterval(async()=>{const{aliasVerified:M}=await D();M&&(setTimeout(()=>{d(!0)},1e3),clearInterval(f),c(ke(0)))},5e3)}).catch(()=>{g("There was an error"),setTimeout(()=>{g("")},2e3)})};return e.jsxs(J,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[e.jsx(ve,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),h===""&&e.jsx(ae,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:o}),h===""&&se.appEnv!=="prod"&&e.jsxs(ve,{padding:"10px",margin:"10px",borderRadius:$.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",e.jsx(xa,{href:x[r].url,target:"_blank",children:x[r].label})," ","to proceed."]}),!m&&(h?e.jsxs(J,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(Ht,{color:"#cf1c84",loading:!0,height:13,width:4}),e.jsx(ae,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:h})]}):e.jsx(J,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:e.jsx(Wt,{bg:"#e20880",color:"#fff",radius:"15px",padding:"20px 10px",onClick:T,children:e.jsx(ae,{color:"#fff",weight:"600",textTransform:"none",line:"22px",size:"16px",children:"Verify Alias Address"})})})),m&&e.jsxs(J,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[e.jsx(ha,{color:"#30CC8B",size:30}),e.jsx(ae,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},qn=({aliasEthAccount:t,setAliasVerified:i})=>{const{processingState:n}=z(o=>o.channelCreation);return e.jsxs(Ve,{children:[e.jsxs(Qn,{children:[e.jsxs(Je,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[e.jsx("div",{children:"Waiting for Setup"}),e.jsx(Ye,{type:n>=1?"active":"inactive"})]}),e.jsxs(Je,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[e.jsx("div",{children:"Change Network"}),e.jsx(Ye,{type:n>=2?"active":"inactive"})]}),e.jsxs(Je,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[e.jsx("div",{children:"Verify Alias Network"}),e.jsx(Ye,{type:n>=3?"active":"inactive"})]}),e.jsx(Zn,{})]}),n===1&&e.jsx(Wn,{}),n===2&&e.jsx(Yn,{}),n===3&&e.jsx(Xn,{aliasEthAccount:t,setAliasVerified:i})]})},Qn=a.div`
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
`,Ye=a.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:t})=>t==="active"&&Ge`
      background: #e20880;
    `};
`,Zn=a.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Je=a.div`
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
`,At=({heading:t,subHeading:i})=>{const n=te();return e.jsx(Ke,{theme:n,children:e.jsxs(ei,{children:[e.jsx(ti,{style:{color:n.default.color},children:t}),e.jsx(ni,{style:{color:n.modalMessageColor},children:i})]})})},ei=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,ti=a.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,ni=a.h4`
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
`,Xe=G.forwardRef(({title:t},i)=>{const n=te();return e.jsx(Ke,{theme:n,children:e.jsxs(ii,{children:[e.jsx(oi,{style:{color:n.modalMessageColor},children:t}),e.jsx(ai,{ref:i,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),ii=a.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,oi=a.h4`
  font-family: FK Grotesk Neu;
  font-size: ${t=>t.fontSize||"0.95rem"};
  font-weight: ${t=>t.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${t=>t.marginBottom||"3%"};
`,ai=a(st)`
  box-sizing: border-box;
  width: 100%;
`,ri=({onConfirm:t,onClose:i,toastObject:n})=>{const o=G.useRef();te();const[s,r]=G.useState(!1),b=()=>!s&&i(),c=G.useRef(null);fe(c,()=>b());const p=()=>{var g;r(!0);const h=(g=o==null?void 0:o.current)==null?void 0:g.value;t(h).then(async m=>{console.debug(m),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:d=>e.jsx(be,{size:d,color:"green"})}),i()}).catch(m=>{console.error({err:m}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:d=>e.jsx(Y,{size:d,color:"red"})})}).finally(()=>{r(!1)})};return e.jsxs(si,{ref:c,children:[e.jsx(At,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),e.jsx(Xe,{ref:o,title:"Delegate Address"}),e.jsx(nn,{text:"Add Delegate",onClick:p,isLoading:s})]})},si=a.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${I.laptop}){
    width:50vw;
  }
  @media(${I.mobileL}){
    width:95vw;
  }
`,li="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",ci=t=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),di=({onClose:t,onConfirm:i,toastObject:n})=>{const o=G.useRef(),s=G.useRef(),[r,b]=G.useState(!1);te();const c=()=>!r&&t(),p=G.useRef(null);fe(p,()=>c());const h=()=>{var d,u;const g=(d=s==null?void 0:s.current)==null?void 0:d.value,m=(u=o==null?void 0:o.current)==null?void 0:u.value;if(b(!0),g==""||m==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:x=>e.jsx(Y,{size:x,color:"red"})}),setTimeout(()=>{b(!1)},500);return}else if(parseInt(g)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:x=>e.jsx(Y,{size:x,color:"red"})}),setTimeout(()=>{b(!1)},500);return}i(g,m).then(async x=>{console.debug(x),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:T=>e.jsx(be,{size:T,color:"green"})}),t()}).catch(x=>{console.error(x),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:T=>e.jsx(Y,{size:T,color:"red"})})}).finally(()=>{b(!1)})};return e.jsxs(pi,{ref:p,children:[e.jsx(At,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),e.jsx(Xe,{ref:o,title:"Subgraph ID"}),e.jsx(Xe,{ref:s,title:"Poll Time (in seconds)"}),e.jsx(nn,{text:"Add Subgraph",onClick:h,isLoading:r})]})},pi=a.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${I.laptop}){
    width:50vw;
  }
  @media(${I.mobileL}){
    width:95vw;
  }
`,xi=t=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),hi=t=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),gi=({onConfirm:t,onClose:i,toastObject:n})=>{const o=te(),s=Me(),{channelDetails:r}=z(d=>d.admin),{CHANNNEL_DEACTIVATED_STATE:b}=z(d=>d.channels),[c,p]=G.useState(!1),h=()=>!c&&i(),g=G.useRef(null);fe(g,()=>h());const m=()=>{p(!0),t().then(async d=>{console.debug(d),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:u=>e.jsx(Y,{size:u,color:"red"})}),await d.wait(1),console.info("Transaction Mined!"),s(ct({...r,channelState:b})),p(!1),i()}).catch(d=>{console.error("!!!Error deactivateChannel() --> %o",d),console.error({err:d}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:u=>e.jsx(Y,{size:u,color:"red"})}),p(!1)})};return e.jsx(Ke,{theme:o,children:e.jsx(mi,{ref:g,children:c?e.jsxs(ui,{children:[e.jsx(Yt,{size:42,color:$.COLORS.PRIMARY_PINK,type:lt.PROCESSING}),e.jsx(fi,{children:"Verifying"})]}):e.jsxs(e.Fragment,{children:[e.jsx(bi,{style:{color:o.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),e.jsxs(wi,{children:[e.jsx(xi,{width:36,height:36,onClick:h}),e.jsx(yi,{onClick:m,children:e.jsx(hi,{})})]})]})})})},mi=a.div`
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
`,ui=a(X)`
  flex-direction: row;
  //   margin-top:33px;
`,fi=a.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,bi=a.div`
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
`;a.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;const wi=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,yi=a.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;a.img`
  height: 36px;
  width: 17px;
`;const Ci="DD MMM, YYYY",ji=({onConfirm:t,onClose:i,toastObject:n})=>{const o=te(),{chainId:s,account:r,provider:b}=ue(),c=Me(),{channelDetails:p,canVerify:h,aliasDetails:{isAliasVerified:g,aliasAddrFromContract:m}}=z(S=>S.admin),{CHANNEL_ACTIVE_STATE:d,CHANNNEL_DEACTIVATED_STATE:u}=z(S=>S.channels),[x,T]=l.useState("");let{channelState:D}=p;D||(D=p.activation_status);const R=D===d,B=D===u,[f,M]=l.useState(!1),[A,P]=l.useState(!1),[K,U]=l.useState(0),O=()=>!f&&i(),w=l.useRef(null);fe(w,()=>O());const C=se.coreContractChain===s;Re(600),l.useEffect(()=>{!p||!C||async function(){const S=p.channelStartBlock.toString(),v=await new Jt(se.coreRPC).getBlock(+S),j=Xt(v.timestamp*1e3);T(j.format(Ci))}()},[p]),l.useEffect(()=>{!r||!b||async function(){const S=await sn({address:r,provider:b,contractAddress:He.epnscore});U(parseInt(S));const v=parseInt(S);v>=50&&v!=0?P(!0):P(!1)}()},[r,b]);const F=async S=>{await ln({noOfTokens:S,provider:b,account:r})},H=async()=>{if(M(!0),!b)return;const S=b.getSigner(r);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const v=await cn({signer:S,contractAddress:He.epnscore,amount:50-K});console.debug("response",v),v&&(U(50),P(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:j=>e.jsx(be,{size:j,color:"green"})}),M(!1))}catch(v){console.error(v),v.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:j=>e.jsx(Y,{size:j,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:j=>e.jsx(Y,{size:j,color:"red"})}),console.error("Error --> %o",v),console.error({err:v}))}M(!1)},N=async()=>{M(!0);try{const S=qt("50",18),v=await t(S);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:j=>e.jsx(be,{size:j,color:"green"})}),await v.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:j=>e.jsx(be,{size:j,color:"green"})}),c(ct({...p,channelState:d})),i(),M(!1)}catch(S){console.error("Error reactivateChannel",{err:S}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:v=>e.jsx(Y,{size:v,color:"red"})}),M(!1)}};return e.jsx(Ke,{theme:o,children:e.jsxs(vi,{ref:w,children:[e.jsxs(Ti,{children:[e.jsx(Ai,{children:"Reactivate Channel"}),e.jsx(Bn,{onClick:O,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(ua,{size:"1.5rem",style:{color:o.modalIconColor}})})]}),e.jsxs(Ei,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(Mi,{src:p.icon}),e.jsxs(Et,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(zi,{children:[p.name,h&&e.jsx(ki,{src:"/verify.png"})]}),e.jsxs(Et,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[C&&m&&!g||!C&&!g?e.jsx(Di,{children:"Alias Network Setup Pending"}):e.jsxs(Si,{justifyContent:"flex-start",children:[e.jsxs(Ri,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(Ni,{children:p.subscriber_count})]}),e.jsx(Ii,{active:R,children:R?"Active":B?"Deactivated":"Blocked"})]}),x&&e.jsxs(Li,{children:["Created ",x]})]})]})]}),e.jsxs($i,{children:[e.jsx(Bi,{children:"Channel reactivation fee"}),e.jsxs(V,{flex:"0",children:[A?e.jsx(Oi,{src:Fa}):null,e.jsxs(Pi,{children:[50," PUSH"]})]})]}),e.jsx(on,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:F}),f?e.jsxs(Fi,{children:[e.jsx(Yt,{size:42,color:$.COLORS.PRIMARY_PINK,type:lt.PROCESSING}),e.jsx(_i,{children:"Verifying Transaction"})]}):e.jsx(Ui,{children:K>=50?e.jsx(kt,{onClick:N,children:"Reactivate"}):e.jsx(kt,{onClick:H,children:"Approve PUSH"})})]})})},vi=a.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${I.mobileL} {
    padding: 0.5rem;
  }
  @media (${I.laptop}) {
    width: 50vw;
  }
  @media (${I.mobileL}) {
    width: 95vw;
  }
`,Ti=a(V)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${I.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${I.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,Ai=a(ma)`
  color: ${t=>t.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${I.laptop} {
    font-size: 1.2rem;
  }
  @media ${I.mobileL} {
    width: 85%;
  }
`,Et=a(X)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Si=a(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Ei=a(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Mi=a.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${I.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${I.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,ki=a.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Ri=a.div`
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
  @media ${I.laptop} {
    width: 52px;
    height: 22px;
  }
`,Mt=a.div`
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
  @media ${I.laptop} {
    padding: 1px 8px;
  }
`,Ii=a(Mt)`
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
`,Di=a(Mt)`
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
`,Ni=a.span`
  font-weight: 400;
  font-size: 14px;
`,Li=a.div`
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
  @media ${I.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,zi=a.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${t=>t.theme.color};
  @media ${I.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,$i=a(V)`
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
  @media ${I.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,Bi=a.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${I.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Oi=a.img``,Pi=a.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${I.mobileL} {
    width: 100%;
    text-align: center;
  }
`,Ui=a(V)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,kt=a(he)`
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

  @media ${I.mobileL} {
    width: 80%;
  }
`,Fi=a(X)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,_i=a.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Gi=50,Vi=se.coreContractChain;function Ki({DropdownRef:t,isDropdownOpen:i,closeDropdown:n}){Me();const{account:o,chainId:s}=ue(),{epnsWriteProvider:r,epnsCommWriteProvider:b}=z(W=>W.contracts),{channelDetails:c}=z(W=>W.admin),{CHANNNEL_DEACTIVATED_STATE:p,CHANNEL_BLOCKED_STATE:h}=z(W=>W.channels);z(W=>W.user),G.useContext(dt);const g=te(),{channelState:m}=c,d=Vi===s,u=Re(425),{isModalOpen:x,showModal:T,ModalComponent:D}=Ie(),{isModalOpen:R,showModal:B,ModalComponent:f}=Ie(),{isModalOpen:M,showModal:A,ModalComponent:P}=Ie(),K=i&&!x&&!R&&!M;fe(t,()=>K&&n()),G.useState(!1),G.useState(Gi);const[U,O]=G.useState(0),w=m===p,C=m===h,F=C||w;G.useEffect(()=>{O(+fa.formatBigNumberToMetric(c.poolContribution,!0))},[o,c.poolContribution]),xe();const H=()=>{C||(w?B():T())},N=xe(),S=r.reactivateChannel,v=xe(),j=()=>r.deactivateChannel(),ge=xe(),re=async(W,le)=>{if(!(W==""||le=="")&&!(W<60))try{const oe=W+"+"+le,_=Qt(oe);return r.addSubGraph(_)}catch(oe){console.error(oe)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Hi,{background:g,children:e.jsxs(Wi,{children:[se.appEnv!=="prod"&&e.jsx(Rt,{disabled:F,onClick:()=>!F&&A(),children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx($e,{src:li,alt:"cube"}),e.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),d&&e.jsx(Rt,{isChannelDeactivated:w,onClick:H,children:e.jsx(Yi,{isChannelBlocked:C,isChannelDeactivated:w,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[C?e.jsx($e,{src:St,alt:"red-bell"}):w?e.jsx($e,{src:ci,alt:"green-bell"}):e.jsx($e,{src:St,alt:"red-bell"}),e.jsx("div",{style:{width:"10px"}}),C?"Channel Blocked":w?"Activate Channel":"Deactivate Channel"]})})})]})})}),e.jsx(D,{InnerComponent:gi,onConfirm:j,toastObject:v,modalPosition:De.ON_ROOT}),e.jsx(f,{InnerComponent:ji,onConfirm:S,toastObject:N,modalMargin:u?"10rem 1rem 0 1rem":"",modalPosition:De.ON_ROOT}),e.jsx(P,{InnerComponent:di,onConfirm:re,toastObject:ge,modalPosition:De.ON_ROOT})]})}const Hi=a.div`
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
`,Wi=a.div`
  flex-direction: column;
  gap: 20px;
  display: ${t=>t.inactive?"none":"flex"};
`;a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,a.div`
  margin: 0px 10px;
`,a.div`
  text-decoration: underline;
  color: ${t=>t.isChannelDeactivated?"#674C9F":"#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;const Rt=a.button`
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
`,Yi=a.div`
  color: ${t=>t.isChannelBlocked?"red":t.isChannelDeactivated?"#30CC8B":"red "};
`,$e=a.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function It(){const t=G.useRef(null),[i,n]=G.useState(!1);te();const o=()=>{n(r=>!r)},s=()=>{n(!1)};return e.jsxs(V,{flex:"0",ref:t,children:[e.jsx(Ji,{active:i,onClick:o}),i&&e.jsx(Ki,{DropdownRef:t,isDropdownOpen:i,closeDropdown:s})]})}a.div`
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
`;const Ji=a(ba)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${t=>t.active?"rotateZ(90deg)":"none"};
`;a(he)`
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
`;const Xi="DD MMM, YYYY";function qi({isChannelExpired:t,setIsChannelExpired:i,showEditChannel:n,destroyChannel:o}){var Ce,me,q;const{account:s,chainId:r}=ue(),{delegatees:b,channelDetails:c,canVerify:p,aliasDetails:{isAliasVerified:h,aliasAddrFromContract:g}}=z(k=>k.admin),{channelSettings:m}=z(k=>k.channels),{userPushSDKInstance:d}=z(k=>k.user),{handleConnectWallet:u}=l.useContext(dt),{CHANNEL_ACTIVE_STATE:x,CHANNNEL_DEACTIVATED_STATE:T}=z(k=>k.channels),{processingState:D}=z(k=>k.channelCreation),[R,B]=l.useState([]),[f,M]=l.useState("");let{channelState:A}=c;A||(A=c.activation_status);const P=A===x,K=A===T,U=se.coreContractChain===r,O=Re(600),[w,C]=l.useState([s]),[F,H]=l.useState(void 0);z(k=>k.contracts);const N=wa(),{isModalOpen:S,showModal:v,ModalComponent:j}=Ie(),ge=xe(),re=async()=>{d.signer||await u(),v()},W=async k=>d.channel.delegate.add(xt(k,r)),le=c.expiryTime?ya(((Ce=c.expiryTime)==null?void 0:Ce.toString())*1e3):"",oe=c.expiryTime?Ca(((me=c.expiryTime)==null?void 0:me.toString())*1e3):!0,_=c.expiryTime?ja(((q=c.expiryTime)==null?void 0:q.toString())*1e3,14):"";l.useEffect(()=>{c.channelType==pt.TIMEBOUND&&(oe||i(!0))},[oe]),l.useEffect(()=>{!c||!p||async function(){let k=await tn.getInstance().getChannelJsonAsync(c.verifiedBy);B(k)}()},[c,p]),l.useEffect(()=>{!c||!U||async function(){const k=c.channelStartBlock.toString(),Q=await new Jt(se.coreRPC).getBlock(+k),pe=Xt(Q.timestamp*1e3);M(pe.format(Xi))}()},[c]),l.useEffect(()=>{s&&(!b||!b.length?H(s):H(U?b[0].channel:b[0].alias_address))},[b,s]),l.useEffect(()=>{s&&(async()=>{try{const k=xt(s,r),Q=await d.channel.delegate.get({channel:k});if(Q){const pe=Q.map(E=>E);pe.unshift(s),C(pe)}}catch(k){console.error(k)}})()},[s,r]);const ce=async k=>{let Q=d;if(!(!Q.signer&&(Q=await u(),!Q)))return Q.channel.delegate.remove(xt(k,r))},de=()=>{N(Ta.ChannelSettings)};return e.jsxs(X,{children:[e.jsxs(eo,{justifyContent:"flex-start",alignSelf:"stretch",children:[e.jsx(to,{src:c.icon}),e.jsxs(qe,{alignItems:"flex-start",padding:"5px 0px",children:[e.jsxs(xo,{children:[c.name,p&&e.jsx(no,{src:"/verify.png"})]}),e.jsxs(qe,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[U&&g&&!h||!U&&!h?e.jsx(so,{children:"Alias Network Setup Pending"}):e.jsxs(Zi,{justifyContent:"flex-start",children:[e.jsxs(ao,{children:[e.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),e.jsx(lo,{children:c.subscriber_count})]}),e.jsxs(ro,{active:P,children:[K&&e.jsx(ht,{width:"12px",src:Oa,margin:"0 5px 2px 0px",height:"30px"}),P?"Active":K?"Deactivated":"Blocked"]}),c.channelType==pt.TIMEBOUND&&!t&&e.jsxs(V,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(ht,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(ve,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",le]})]}),c.channelType==pt.TIMEBOUND&&t&&e.jsxs(V,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[e.jsx(ht,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),e.jsxs(ve,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",le]})]})]}),f&&e.jsxs(co,{children:["Created ",f]})]})]})]}),O&&e.jsxs(V,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",children:[!t&&U&&e.jsx(go,{onClick:n,children:"Edit Channel"}),!t&&e.jsx(It,{}),t&&U&&e.jsx(Qi,{onClick:o,background:"#E93636",color:"#fff",height:"36px",width:"123px",borderRadius:"8px",fontSize:"14px",children:"Delete Channel"})]}),t&&e.jsx(X,{alignItems:"flex-start",children:e.jsxs(Nt,{margin:"25px 0 0 0",children:[e.jsx(ve,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",e.jsx(ve,{fontWeight:"600",children:_})]})}),e.jsx(X,{alignItems:"flex-start",children:e.jsx(Nt,{children:c.info})}),p&&e.jsx(qe,{alignItems:"flex-start",padding:"5px 0px",children:e.jsx(ho,{children:e.jsxs(po,{children:[e.jsx("span",{children:"verified by:"}),e.jsx(io,{src:R.icon}),e.jsx(oo,{children:R.name})]})})}),D===0&&e.jsxs(X,{children:[e.jsx(Ve,{children:e.jsxs(Lt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(an,{title:"Notification Settings",description:"Customize notification preferences for users",Button:e.jsx(Ha,{onClick:de})}),e.jsx(rn,{account:s,isAddress:!1,items:m[s],isLoading:!1,onClickEmptyListButton:de,emptyListButtonTitle:"Add Setting"})]})}),e.jsx(Ve,{children:e.jsxs(Lt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[e.jsx(an,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:e.jsx(Wa,{onClick:re})}),e.jsx(rn,{account:s,isAddress:!0,items:w,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:ce,icon:e.jsx(va,{})}]})]})})]}),e.jsx(j,{InnerComponent:ri,onConfirm:W,toastObject:ge,modalPosition:De.ON_ROOT})]})}const qe=a(X)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Qi=a(Zt)`
  height: ${t=>t.height||"100%"};
  width: ${t=>t.width||"100%"};
`,Zi=a(V)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,eo=a(V)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,to=a.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${I.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,no=a.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,io=a.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,oo=a.div``,ao=a.div`
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
`,Dt=a.div`
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
`,ro=a(Dt)`
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
`,so=a(Dt)`
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
`,lo=a.span`
  font-weight: 400;
  font-size: 14px;
`;a.div`
  display: flex;
  flex-direction: column;
  @media ${I.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const co=a.div`
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
`,po=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,xo=a.div`
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
`,ho=a.div`
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
`,Nt=a.div`
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
`,go=a(he)`
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
`,Lt=a(en)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${t=>t.theme.default.borderColor};
`,zt=(t,i,n)=>(n=n??1,t.length>=n&&t.length<=i),$t=t=>{var i=new RegExp("^((?:https|http):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!i.test(t)},mo=({channelName:t,setChannelName:i,channelInfo:n,setChannelInfo:o,channelURL:s,setChannelURL:r,editChannel:b,errorInfo:c,setErrorInfo:p})=>{const h=te(),g=({message:d})=>e.jsxs(J,{display:"flex",align:"center",self:"flex-start",direction:"row",margin:"7px 0px",children:[e.jsx(Ea,{color:"red",size:"20"}),e.jsx(ae,{size:"14px",weight:"400",margin:"0px 5px",color:"red",children:d})]}),m=d=>{const u=d.target.value;$t(u)?(p(""),r(u)):(p(x=>({...x,url:"Channel URL is invalid! Please enter a valid url!"})),r(u))};return e.jsx(uo,{children:e.jsx(fo,{onSubmit:b,children:e.jsxs(bo,{children:[e.jsxs(J,{margin:"5px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:h.editChannelPrimaryText},children:"Channel Name"}),e.jsx(J,{margin:"7px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",radius:"12px",children:e.jsx(st,{required:!0,maxlength:"40",flex:"1",padding:"13px 13px 14px 16px",weight:"400",size:"15px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",height:"25px",value:t,onChange:d=>{i(d.target.value)}})})]}),(c==null?void 0:c.name)&&e.jsx(g,{message:c==null?void 0:c.name}),e.jsxs(J,{margin:"22px 0px 0px 00px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(J,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(Qe,{style:{color:h.editChannelPrimaryText},children:"Channel Description"}),e.jsx(ae,{color:h.editChannelSecondaryText,size:"18px",margin:"0px 10px 0px 0px",weight:"500",children:250-n.length})]}),e.jsx(Sa,{required:!0,rows:"4",maxlength:"250",padding:"12px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"140%",margin:"10px 0px 0px 0px",border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,value:n,onChange:d=>{o(d.target.value.slice(0,250))},autocomplete:"off"})]}),(c==null?void 0:c.description)&&e.jsx(g,{message:c==null?void 0:c.description}),e.jsxs(J,{margin:"20px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsx(Qe,{style:{color:h.editChannelPrimaryText},children:"Channel Website URL"}),e.jsx(st,{required:!0,maxlength:"40",flex:"1",padding:"12px 16px",weight:"400",size:"15px",bg:h.editChannelInputbg,color:h.editChannelPrimaryText,height:"25px",margin:"7px 0px 0px 0px",border:h.textAreaBorderColor,focusBorder:h.textAreaFocusBorder,radius:"12px",value:s,onChange:d=>{m(d)}})]}),(c==null?void 0:c.url)&&e.jsx(g,{message:c==null?void 0:c.url})]})})})},uo=a(Ve)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`,fo=a(Aa)`
  height: inherit;
`,Qe=a.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`,bo=a(J)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`,wo="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e",yo=({onClose:t,InnerComponentProps:i})=>{const{setChannelLogo:n,croppedImage:o,setCroppedImage:s,imageSrc:r,setImageSrc:b,imageType:c,setImageType:p}=i,h=l.useRef(),g=l.useRef(null);fe(g,()=>{t()});const m=x=>{x.preventDefault()},d=x=>{x.preventDefault(),x.stopPropagation(),u(x.dataTransfer,"transfer",x)},u=async(x,T,D)=>{if(D.preventDefault(),s(void 0),x==null?void 0:x.files[0]){var R=new FileReader;R.readAsDataURL(x==null?void 0:x.files[0]),R.onloadend=function(B){var f;b(R.result),p((f=x==null?void 0:x.files[0])==null?void 0:f.type)}}};return e.jsxs(Co,{ref:g,children:[e.jsx(To,{children:e.jsx(Ao,{onClick:t})}),e.jsxs(jo,{children:[e.jsx(vo,{children:"Please upload a PNG, JPG. Crop the image to resize to 128px."}),e.jsx(Ro,{className:"",children:e.jsx("div",{onDragOver:x=>m(x),onDrop:x=>d(x),className:"bordered",children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"crop-div",children:o?e.jsx("div",{className:"crop-innderdiv",children:e.jsx("div",{children:e.jsx("img",{alt:"Cropped Img",src:o,className:"croppedImage"})})}):e.jsx("div",{className:"crop-innderdiv",children:e.jsx(Ja,{className:"cropper",imageSrc:r,imageType:c,onImageCropped:x=>s(x),width:"128px",height:"128px",ref:h})})}),e.jsxs(So,{children:[e.jsx("p",{className:"text-below",children:"Drag and Drop or"}),e.jsx("div",{className:"text-div",children:e.jsxs("label",{htmlFor:"file-upload",className:"labeled",children:[e.jsx("div",{children:"Browse to Choose"}),e.jsx("input",{id:"file-upload",accept:"image/*",name:"file-upload",hidden:!0,onChange:x=>u(x.target,"target",x),type:"file",className:"sr-only",readOnly:!0})]})})]})]})})}),e.jsx(Eo,{children:o?e.jsx(e.Fragment,{children:e.jsx(ko,{onClick:()=>{n(o),t()},children:"Upload Image"})}):e.jsx(e.Fragment,{children:e.jsx(Mo,{onClick:()=>{h.current.showCroppedImage()},children:"Crop Image"})})})]})]})},Co=a.div``,jo=a.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`,vo=a.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${t=>t.theme.modalTextColor};
`,To=a.div`
  text-align: end;
  width: 100%;
`,Ao=a(Ma)`
  cursor: pointer;
  font-size: 20px;
  color: ${t=>t.theme.modalTextColor};
`,So=a(en)`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Eo=a(X)``,Mo=a(he)`
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
`,ko=a(he)`
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
`,Ro=a.div`
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
`,ye=t=>t.trim().length==0;function Io({closeEditChannel:t,UploadLogoComponent:i,displayUplaodLogoModal:n}){const{account:o,provider:s}=ue(),{channelDetails:r,aliasDetails:{isAliasVerified:b,aliasAddrFromContract:c}}=z(E=>E.admin),{epnsReadProvider:p,epnsWriteProvider:h}=z(E=>E.contracts),g=50,[m,d]=l.useState(r==null?void 0:r.name),[u,x]=l.useState(r==null?void 0:r.info),[T,D]=l.useState(r==null?void 0:r.url),[R,B]=l.useState(r==null?void 0:r.icon),[f,M]=l.useState(r==null?void 0:r.icon),[A,P]=l.useState(r==null?void 0:r.icon),[K,U]=l.useState(A),[O,w]=l.useState(null),[C,F]=l.useState(!1),[H,N]=l.useState({name:"",description:"",address:"",url:""}),[S,v]=l.useState(!1),[j,ge]=l.useState(0),[re,W]=l.useState(0),[le,oe]=l.useState(!1),_=xe();l.useEffect(()=>{o&&async function(){const E=await p.channelUpdateCounter(o);ge(g*(Number(E)+1))}()},[o]),l.useEffect(()=>{!o||!s||async function(){const E=await sn({address:o,provider:s,contractAddress:He.epnscore});W(parseInt(E));const L=parseInt(E);L>=j&&L!=0?F(!0):F(!1)}()},[o,s]);const ce=async()=>{if(v(!0),!s)return;const E=s.getSigner(o);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const L=await cn({signer:E,contractAddress:He.epnscore,amount:j-re});console.debug("response",L),L&&(v(!1),W(j),F(!0),_.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:Z=>e.jsx(be,{size:Z,color:"green"})}))}catch(L){console.error(L),L.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:Z=>e.jsx(Y,{size:Z,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:Z=>e.jsx(Y,{size:Z,color:"red"})}),console.error("Error --> %o",L),console.error({err:L}))}v(!1)},de=()=>{oe(!1)},Ce=Re(600),me=l.useRef(null);fe(me,()=>{de()});const q=()=>(N(""),ye(m)||ye(u)||ye(T)?(ye(m)&&N(E=>({...E,name:"Please, enter the channel name."})),ye(u)&&N(E=>({...E,description:"Please, enter the channel description"})),ye(T)&&N(E=>({...E,url:"Please, enter the channel url"})),!1):zt(m,125)?zt(T,125)?$t(T)?!0:(N(E=>({...E,url:"Channel URL is invalid! Please enter a valid url!"})),!1):(N(E=>({...E,url:"Channel Url should not exceed 125 characters! Please retry!"})),!1):(N(E=>({...E,name:"Channel Name should not exceed 125 characters! Please retry!"})),!1)),k=()=>!(m!==(r==null?void 0:r.name)||u!==(r==null?void 0:r.info)||T!==(r==null?void 0:r.url)||f!==(r==null?void 0:r.icon)),Q=async E=>{try{if(!q())return;v(!0);const L=JSON.stringify({name:m,info:u,url:T,icon:f,aliasDetails:r.aliasDetails||ka({chainId:parseInt(r.chain_id),address:r.address})});console.debug(L);const Z=await Ra(L);console.debug("IPFS storagePointer:",Z);const et="1+"+Z,tt=Qt(et),nt=qt(j.toString(),18);_.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Be=await h.updateChannelMeta(o,tt,nt,{gasLimit:1e6});console.debug(Be),await Be.wait(),v(!1),_.showMessageToast({toastTitle:"Success",toastMessage:"Channel Updated Successfully",toastType:"SUCCESS",getToastIcon:Te=>e.jsx(be,{size:Te,color:"green"})}),setTimeout(()=>{window.location.reload()},2e3)}catch(L){v(!1),console.error(L.message),L.code=="ACTION_REJECTED"?_.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:Z=>e.jsx(Y,{size:Z,color:"red"})}):(_.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel Details",toastType:"ERROR",getToastIcon:Z=>e.jsx(Y,{size:Z,color:"red"})}),console.error("Error --> %o",L),console.error({err:L}))}},pe=async E=>{await ln({noOfTokens:E,provider:s,account:o})};return l.useEffect(()=>{A&&(console.debug("Image cropped",A),Xa(A,function(E){const L=qa(E);console.debug("response",L),L.success&&(console.debug("Cropped Image....",A),M(A))}))},[A]),e.jsxs(Do,{ref:me,children:[e.jsx(i,{InnerComponent:yo,InnerComponentProps:{setChannelLogo:B,channelLogo:R,croppedImage:A,setCroppedImage:P,setChannelFile:M,imageSrc:K,setImageSrc:U,imageType:O,setImageType:w,errorInfo:H,setErrorInfo:N},modalPosition:De.ON_PARENT}),e.jsxs(No,{children:[e.jsxs($o,{children:[e.jsx(Bo,{src:R}),e.jsx(Lo,{onClick:()=>{n(),oe(!0)},children:"Upload Logo"})]}),!Ce&&e.jsx(Oo,{}),e.jsx(mo,{channelName:m,setChannelName:d,channelInfo:u,setChannelInfo:x,channelURL:T,setChannelURL:D,editChannel:Q,errorInfo:H,setErrorInfo:N})]}),e.jsxs(Po,{children:[e.jsxs("div",{children:[e.jsx(Uo,{children:"Channel edit fee"}),e.jsx(Fo,{children:"Editing channel details requires fees to be deposited"})]}),e.jsxs(V,{flex:"0",children:[C?e.jsx(zo,{src:wo}):null,e.jsxs(_o,{children:[j," PUSH"]})]})]}),e.jsx(on,{noOfPushTokensToCheck:j,containerProps:{width:"100%"},onMintPushToken:pe}),S?e.jsx(e.Fragment,{children:e.jsxs(Go,{children:[e.jsx(Spinner,{size:42,color:$.COLORS.PRIMARY_PINK,type:lt.PROCESSING}),e.jsx(Vo,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs(Ko,{children:[e.jsx(Ho,{onClick:t,children:"Cancel"}),re>=j?e.jsx(Ze,{disabled:k(),style:{background:k()?" #F4DCEA":"#CF1C84"},onClick:Q,children:"Save Changes"}):e.jsx(Ze,{onClick:ce,children:"Approve PUSH"})]})})]})}const Do=a(X)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`,No=a(X)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`,Lo=a(he)`
  border-radius: 8px;
  background: ${t=>t.theme.logoBtnBg};
  color: ${t=>t.theme.logoBtnColor};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 12px;
`,zo=a.img``,$o=a(V)`
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
`,Bo=a.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${I.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,Oo=a.div`
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
`,Po=a(X)`
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
`,Uo=a.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Fo=a.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,_o=a.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Go=a(X)`
  flex-direction: row;
  margin-top: 33px;
`,Vo=a.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,Ko=a(V)`
  justify-content: end;
  margin-top: 35px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,Ze=a(he)`
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
`,Ho=a(Ze)`
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
`,Wo=10;let Bt=null;const Yo=()=>{te();const{account:t,chainId:i}=ue(),{channelDetails:n,delegatees:o,aliasDetails:{aliasAddr:s,aliasEthAddr:r,isAliasVerified:b,aliasAddrFromContract:c}}=z(w=>w.admin),{processingState:p}=z(w=>w.channelCreation),{epnsWriteProvider:h}=z(w=>w.contracts);z(w=>w.user),l.useContext(dt);const g=n&&n!=="unfetched",m=xe(),d=Me(),[u,x]=l.useState(!1);l.useState(!0);const[T,D]=l.useState(!1),R=se.coreContractChain===i,B=Re(600);l.useEffect(()=>{if(!R||!n||c||n==="unfetched")return;const{address:w,chainId:C}=Ia(n);w?(d(Da(w)),d(Na(C))):d(ke(0))},[n,c]);const f=async w=>{let{aliasAddress:C=null,isAliasVerified:F=null}=await tn.getInstance().getChannelDetailsFromAddress(w);return C=="NULL"&&(C=null),{aliasAddress:C,aliasVerified:F}};l.useEffect(()=>{!R||!c||p===0||(Bt=setInterval(async()=>{const{aliasAddress:w,aliasVerified:C}=await f(t);w?(d(La(w)),C?(d(gt(!0)),d(ke(0))):(d(ke(2)),d(gt(!1)))):p!=0&&p!=1&&d(ke(1))},Wo*1e3))},[c]),s!==null&&clearInterval(Bt);const M=async()=>{try{m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const w=await h.destroyTimeBoundChannel(t,{gasLimit:1e6});console.debug(w),console.debug("Check: "+t),await w.wait(),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:C=>e.jsx(Y,{size:C,color:"green"})}),d(ct(null))}catch(w){console.error(w),w.code=="ACTION_REJECTED"?m.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:C=>e.jsx(Y,{size:C,color:"red"})}):m.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:C=>e.jsx(Y,{size:C,color:"red"})})}},A=()=>{D(!0)},P=()=>{D(!1)},{isModalOpen:K,showModal:U,ModalComponent:O}=Ie();return e.jsxs(V,{children:[(n==="unfetched"||p===null)&&e.jsx(Tt,{}),n!=="unfetched"&&e.jsxs(X,{justifyContent:p===0&&"flex-start",height:"fit-content",children:[!n&&p===0&&e.jsx(Qa,{}),g&&p!==null&&e.jsx(Jo,{children:T?e.jsx(Io,{closeEditChannel:P,UploadLogoComponent:O,displayUplaodLogoModal:U,isUploadLogoModalOpen:K}):e.jsxs(e.Fragment,{children:[n&&!B&&e.jsxs(V,{zIndex:"1",justifyContent:"end",children:[!u&&R&&e.jsx(qo,{onClick:A,children:"Edit Channel"}),!u&&e.jsx(It,{}),u&&R&&e.jsx(Xo,{onClick:M,background:"#E93636",color:"#fff",height:"36px",width:"123px",borderRadius:"8px",fontSize:"14px",children:"Delete Channel"})]}),n?e.jsx(qi,{isChannelExpired:u,setIsChannelExpired:x,showEditChannel:A,destroyChannel:M}):""]})}),p!==0&&p!==null&&g&&!T&&e.jsx(e.Fragment,{children:e.jsx(qn,{aliasEthAccount:r,setAliasVerified:gt})})]})]})},Jo=a(X)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${$.ADJUSTMENTS.RADIUS.LARGE} ${$.ADJUSTMENTS.RADIUS.LARGE}
    ${$.ADJUSTMENTS.RADIUS.LARGE} ${$.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${we.MINI_MODULES.DESKTOP.RIGHT} - ${we.MINI_MODULES.DESKTOP.LEFT} -
      ${$.ADJUSTMENTS.PADDING.HUGE} - ${$.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${$.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${$.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${I.laptop} {
    margin: ${$.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${$.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${we.MINI_MODULES.TABLET.RIGHT} - ${we.MINI_MODULES.TABLET.LEFT} -
        ${$.ADJUSTMENTS.PADDING.BIG} - ${$.ADJUSTMENTS.PADDING.BIG}
    );
  }

  @media ${I.mobileL} {
    margin: ${$.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${$.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${we.MINI_MODULES.MOBILE.RIGHT} - ${we.MINI_MODULES.MOBILE.LEFT} -
        ${$.ADJUSTMENTS.PADDING.DEFAULT} - ${$.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${$.CONSTANTS.HEADER_HEIGHT}px - ${we.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${$.ADJUSTMENTS.RADIUS.LARGE} ${$.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Xo=a(Zt)`
  height: ${t=>t.height||"100%"};
  width: ${t=>t.width||"100%"};
`,qo=a(he)`
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
`;se.coreContractChain;function Qo(){za.pageview("/channel_dashboard");const[t,i]=G.useState(!0),[n,o]=G.useState(null),s=()=>o(null);return G.useEffect(()=>{n&&s()},[n]),e.jsxs(e.Fragment,{children:[t?e.jsx(Yo,{}):e.jsx(Tt,{}),n&&e.jsx(Pa,{notification:n,clearToast:s})]})}a.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let Ot;dn=()=>e.jsx(Ot,{children:e.jsx(Qo,{})}),Ot=a($a)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{sr as __tla,dn as default};
