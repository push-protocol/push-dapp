import{f3 as Et,f4 as ro,a$ as l,f5 as X,b1 as t,f6 as Ie,f7 as fe,f8 as be,f9 as Le,cQ as Ne,fa as so,cP as V,fb as Ye,fc as kt,fd as lo,fe as $e,ff as Je,fg as ce,fh as Rt,fi as Dt,b6 as a,b9 as K,d0 as P,b3 as co,b4 as po,b_ as N,bd as ne,bO as de,cZ as Xe,br as It,eP as ho,c_ as ie,aY as pe,b2 as xo,bX as he,bp as uo,bZ as we,bj as go,bl as mo,bS as xe,bi as ee,bL as R,bV as fo,fj as bo,fk as ye,fl as wo,bq as Be,bb as qe,ba as ze,bg as O,cf as yo,bN as E,cj as Ce,ds as je,d1 as q,bQ as Z,cp as Lt,cq as Nt,fm as Qe,dE as Co,fn as jo,dv as Oe,cY as $t,fo as Bt,bk as zt,dn as vo,bn as Ao,cl as ve,eC as To,cm as _e,fp as So,fq as Mo,dp as Eo,di as Ot,aZ as ko,fr as Ro,fs as Do,ft as Io,fu as Ze,ee as _t,dd as et,c1 as tt,fv as Lo,b0 as No,bM as oe,fw as $o,fx as Bo,fy as zo,fz as Oo,fA as nt,bP as _o,b7 as Po,__tla as Uo}from"./index-DM7ZIfOI.js";import{S as Fo,N as Go,__tla as Vo}from"./RedCircle-D4wTEfr_.js";import{M as Pt,S as Ho,F as Ko,C as Ut,a as Ft,__tla as Wo}from"./ChannelInfoList-D_yZrMZy.js";import{a as Yo,__tla as Jo}from"./Tag-yD0t-foj.js";import{g as Xo,m as qo,a as Qo,__tla as Zo}from"./PushTokenContractHelper-BCFi3VC4.js";import{M as ea,a as ta,__tla as na}from"./EmptyNotificationSettings-BkcLLJ8R.js";import{C as ia,__tla as oa}from"./CreateChannel-IiCB5pU0.js";import{__tla as aa}from"./TransitionGroupContext-DNXbNSWl.js";import{__tla as ra}from"./index.esm-BIQ1DEEi.js";import{__tla as sa}from"./ErrorFilled-DJsPB_xi.js";import{__tla as la}from"./Stepper-BgnDZO76.js";import{__tla as ca}from"./ImageClipper-BMCT1ZEo.js";import{__tla as da}from"./useMutation-bNQo4QqD.js";import{__tla as pa}from"./index.esm-Bs7nMujD.js";import"./Common.form-LPxQflxb.js";let Gt,ha=Promise.all([(()=>{try{return Uo}catch{}})(),(()=>{try{return Vo}catch{}})(),(()=>{try{return Wo}catch{}})(),(()=>{try{return Jo}catch{}})(),(()=>{try{return Zo}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return pa}catch{}})()]).then(async()=>{function Vt(e,o=0,n=1){return ro(e,o,n)}function Ht(e){e=e.slice(1);const o=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(o);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function it(e){if(e.type)return e;if(e.charAt(0)==="#")return it(Ht(e));const o=e.indexOf("("),n=e.substring(0,o);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Et(9,e));let i=e.substring(o+1,e.length-1),r;if(n==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error(Et(10,r))}else i=i.split(",");return i=i.map(c=>parseFloat(c)),{type:n,values:i,colorSpace:r}}function Kt(e){const{type:o,colorSpace:n}=e;let{values:i}=e;return o.indexOf("rgb")!==-1?i=i.map((r,c)=>c<3?parseInt(r,10):r):o.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),o.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${o}(${i})`}function Wt(e,o){return e=it(e),o=Vt(o),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${o}`:e.values[3]=o,Kt(e)}function Yt(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Jt(e){return parseFloat(e)}function Xt(e){const{className:o,classes:n,pulsate:i=!1,rippleX:r,rippleY:c,rippleSize:g,in:m,onExited:s,timeout:d}=e,[x,b]=l.useState(!1),p=X(o,n.ripple,n.rippleVisible,i&&n.ripplePulsate),h={width:g,height:g,top:-(g/2)+c,left:-(g/2)+r},y=X(n.child,x&&n.childLeaving,i&&n.childPulsate);return!m&&!x&&b(!0),l.useEffect(()=>{if(!m&&s!=null){const D=setTimeout(s,d);return()=>{clearTimeout(D)}}},[s,m,d]),t.jsx("span",{className:p,style:h,children:t.jsx("span",{className:y})})}const W=Ie("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),qt=["center","classes","className"];let Ae=e=>e,ot,at,rt,st;const Pe=550,Qt=80,Zt=fe(ot||(ot=Ae`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),en=fe(at||(at=Ae`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),tn=fe(rt||(rt=Ae`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),nn=be("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),on=be(Xt,{name:"MuiTouchRipple",slot:"Ripple"})(st||(st=Ae`
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
`),W.rippleVisible,Zt,Pe,({theme:e})=>e.transitions.easing.easeInOut,W.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,W.child,W.childLeaving,en,Pe,({theme:e})=>e.transitions.easing.easeInOut,W.childPulsate,tn,({theme:e})=>e.transitions.easing.easeInOut),an=l.forwardRef(function(e,o){const n=Le({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:c}=n,g=Ne(n,qt),[m,s]=l.useState([]),d=l.useRef(0),x=l.useRef(null);l.useEffect(()=>{x.current&&(x.current(),x.current=null)},[m]);const b=l.useRef(!1),p=so(),h=l.useRef(null),y=l.useRef(null),D=l.useCallback(u=>{const{pulsate:j,rippleX:z,rippleY:I,rippleSize:w,cb:v}=u;s(A=>[...A,t.jsx(on,{classes:{ripple:X(r.ripple,W.ripple),rippleVisible:X(r.rippleVisible,W.rippleVisible),ripplePulsate:X(r.ripplePulsate,W.ripplePulsate),child:X(r.child,W.child),childLeaving:X(r.childLeaving,W.childLeaving),childPulsate:X(r.childPulsate,W.childPulsate)},timeout:Pe,pulsate:j,rippleX:z,rippleY:I,rippleSize:w},d.current)]),d.current+=1,x.current=v},[r]),$=l.useCallback((u={},j={},z=()=>{})=>{const{pulsate:I=!1,center:w=i||j.pulsate,fakeElement:v=!1}=j;if((u==null?void 0:u.type)==="mousedown"&&b.current){b.current=!1;return}(u==null?void 0:u.type)==="touchstart"&&(b.current=!0);const A=v?null:y.current,B=A?A.getBoundingClientRect():{width:0,height:0,left:0,top:0};let L,U,H;if(w||u===void 0||u.clientX===0&&u.clientY===0||!u.clientX&&!u.touches)L=Math.round(B.width/2),U=Math.round(B.height/2);else{const{clientX:G,clientY:C}=u.touches&&u.touches.length>0?u.touches[0]:u;L=Math.round(G-B.left),U=Math.round(C-B.top)}if(w)H=Math.sqrt((2*B.width**2+B.height**2)/3),H%2===0&&(H+=1);else{const G=Math.max(Math.abs((A?A.clientWidth:0)-L),L)*2+2,C=Math.max(Math.abs((A?A.clientHeight:0)-U),U)*2+2;H=Math.sqrt(G**2+C**2)}u!=null&&u.touches?h.current===null&&(h.current=()=>{D({pulsate:I,rippleX:L,rippleY:U,rippleSize:H,cb:z})},p.start(Qt,()=>{h.current&&(h.current(),h.current=null)})):D({pulsate:I,rippleX:L,rippleY:U,rippleSize:H,cb:z})},[i,D,p]),_=l.useCallback(()=>{$({},{pulsate:!0})},[$]),k=l.useCallback((u,j)=>{if(p.clear(),(u==null?void 0:u.type)==="touchend"&&h.current){h.current(),h.current=null,p.start(0,()=>{k(u,j)});return}h.current=null,s(z=>z.length>0?z.slice(1):z),x.current=j},[p]);return l.useImperativeHandle(o,()=>({pulsate:_,start:$,stop:k}),[_,$,k]),t.jsx(nn,V({className:X(W.root,r.root,c),ref:y},g,{children:t.jsx(Yo,{component:null,exit:!0,children:m})}))});function rn(e){return Ye("MuiButtonBase",e)}const sn=Ie("MuiButtonBase",["root","disabled","focusVisible"]),ln=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],cn=e=>{const{disabled:o,focusVisible:n,focusVisibleClassName:i,classes:r}=e,c=Je({root:["root",o&&"disabled",n&&"focusVisible"]},rn,r);return n&&i&&(c.root+=` ${i}`),c},dn=be("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${sn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),pn=l.forwardRef(function(e,o){const n=Le({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:c,className:g,component:m="button",disabled:s=!1,disableRipple:d=!1,disableTouchRipple:x=!1,focusRipple:b=!1,LinkComponent:p="a",onBlur:h,onClick:y,onContextMenu:D,onDragLeave:$,onFocus:_,onFocusVisible:k,onKeyDown:u,onKeyUp:j,onMouseDown:z,onMouseLeave:I,onMouseUp:w,onTouchEnd:v,onTouchMove:A,onTouchStart:B,tabIndex:L=0,TouchRippleProps:U,touchRippleRef:H,type:G}=n,C=Ne(n,ln),S=l.useRef(null),T=l.useRef(null),ue=kt(T,H),{isFocusVisibleRef:ae,onFocus:F,onBlur:re,ref:te}=lo(),[Y,se]=l.useState(!1);s&&Y&&se(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{se(!0),S.current.focus()}}),[]);const[ge,Ee]=l.useState(!1);l.useEffect(()=>{Ee(!0)},[]);const ke=ge&&!d&&!s;l.useEffect(()=>{Y&&b&&!d&&ge&&T.current.pulsate()},[d,b,Y,ge]);function J(f,St,ao=x){return $e(Mt=>(St&&St(Mt),!ao&&T.current&&T.current[f](Mt),!0))}const Re=J("start",z),M=J("stop",D),Q=J("stop",$),le=J("stop",w),He=J("stop",f=>{Y&&f.preventDefault(),I&&I(f)}),Xi=J("start",B),qi=J("stop",v),Qi=J("stop",A),Zi=J("stop",f=>{re(f),ae.current===!1&&se(!1),h&&h(f)},!1),eo=$e(f=>{S.current||(S.current=f.currentTarget),F(f),ae.current===!0&&(se(!0),k&&k(f)),_&&_(f)}),Ke=()=>{const f=S.current;return m&&m!=="button"&&!(f.tagName==="A"&&f.href)},We=l.useRef(!1),to=$e(f=>{b&&!We.current&&Y&&T.current&&f.key===" "&&(We.current=!0,T.current.stop(f,()=>{T.current.start(f)})),f.target===f.currentTarget&&Ke()&&f.key===" "&&f.preventDefault(),u&&u(f),f.target===f.currentTarget&&Ke()&&f.key==="Enter"&&!s&&(f.preventDefault(),y&&y(f))}),no=$e(f=>{b&&f.key===" "&&T.current&&Y&&!f.defaultPrevented&&(We.current=!1,T.current.stop(f,()=>{T.current.pulsate(f)})),j&&j(f),y&&f.target===f.currentTarget&&Ke()&&f.key===" "&&!f.defaultPrevented&&y(f)});let De=m;De==="button"&&(C.href||C.to)&&(De=p);const me={};De==="button"?(me.type=G===void 0?"button":G,me.disabled=s):(!C.href&&!C.to&&(me.role="button"),s&&(me["aria-disabled"]=s));const io=kt(o,te,S),Tt=V({},n,{centerRipple:r,component:m,disabled:s,disableRipple:d,disableTouchRipple:x,focusRipple:b,tabIndex:L,focusVisible:Y}),oo=cn(Tt);return t.jsxs(dn,V({as:De,className:X(oo.root,g),ownerState:Tt,onBlur:Zi,onClick:y,onContextMenu:M,onFocus:eo,onKeyDown:to,onKeyUp:no,onMouseDown:Re,onMouseLeave:He,onMouseUp:le,onDragLeave:Q,onTouchEnd:qi,onTouchMove:Qi,onTouchStart:Xi,ref:io,tabIndex:s?-1:L,type:G},me,C,{children:[c,ke?t.jsx(an,V({ref:ue,center:r},U)):null]}))});function hn(e){return Ye("MuiIconButton",e)}const xn=Ie("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),un=["edge","children","className","color","disabled","disableFocusRipple","size"],gn=e=>{const{classes:o,disabled:n,color:i,edge:r,size:c}=e,g={root:["root",n&&"disabled",i!=="default"&&`color${ce(i)}`,r&&`edge${ce(r)}`,`size${ce(c)}`]};return Je(g,hn,o)},mn=be(pn,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.color!=="default"&&o[`color${ce(n.color)}`],n.edge&&o[`edge${ce(n.edge)}`],o[`size${ce(n.size)}`]]}})(({theme:e,ownerState:o})=>V({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Rt(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var n;const i=(n=(e.vars||e).palette)==null?void 0:n[o.color];return V({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&V({color:i==null?void 0:i.main},!o.disableRipple&&{"&:hover":V({},i&&{backgroundColor:e.vars?`rgba(${i.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Rt(i.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${xn.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),fn=l.forwardRef(function(e,o){const n=Le({props:e,name:"MuiIconButton"}),{edge:i=!1,children:r,className:c,color:g="default",disabled:m=!1,disableFocusRipple:s=!1,size:d="medium"}=n,x=Ne(n,un),b=V({},n,{edge:i,color:g,disabled:m,disableFocusRipple:s,size:d}),p=gn(b);return t.jsx(mn,V({className:X(p.root,c),centerRipple:!0,focusRipple:!s,disabled:m,ref:o},x,{ownerState:b,children:r}))});function bn(e){return Ye("MuiSkeleton",e)}Ie("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const wn=["animation","className","component","height","style","variant","width"];let Te=e=>e,lt,ct,dt,pt;const yn=e=>{const{classes:o,variant:n,animation:i,hasChildren:r,width:c,height:g}=e;return Je({root:["root",n,i,r&&"withChildren",r&&!c&&"fitContent",r&&!g&&"heightAuto"]},bn,o)},Cn=fe(lt||(lt=Te`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),jn=fe(ct||(ct=Te`
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
`)),vn=be("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],n.animation!==!1&&o[n.animation],n.hasChildren&&o.withChildren,n.hasChildren&&!n.width&&o.fitContent,n.hasChildren&&!n.height&&o.heightAuto]}})(({theme:e,ownerState:o})=>{const n=Yt(e.shape.borderRadius)||"px",i=Jt(e.shape.borderRadius);return V({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:Wt(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},o.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},o.variant==="circular"&&{borderRadius:"50%"},o.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},o.hasChildren&&{"& > *":{visibility:"hidden"}},o.hasChildren&&!o.width&&{maxWidth:"fit-content"},o.hasChildren&&!o.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&Dt(dt||(dt=Te`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Cn),({ownerState:e,theme:o})=>e.animation==="wave"&&Dt(pt||(pt=Te`
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
    `),jn,(o.vars||o).palette.action.hover)),Se=l.forwardRef(function(e,o){const n=Le({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:r,component:c="span",height:g,style:m,variant:s="text",width:d}=n,x=Ne(n,wn),b=V({},n,{animation:i,component:c,variant:s,hasChildren:!!x.children}),p=yn(b);return t.jsx(vn,V({as:c,ref:o,className:X(p.root,r),ownerState:b},x,{style:V({width:d,height:g},m)}))}),ht=()=>(K(),t.jsxs(P,{children:[t.jsxs(An,{children:[t.jsxs(Tn,{children:[t.jsx(Se,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"8rem",height:"8rem",borderRadius:"32px",marginRight:"2%"}}),t.jsxs(Sn,{children:[t.jsx(Se,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"40%",height:"2.2rem",borderRadius:"5px",marginTop:"3%"}}),t.jsx(Se,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"20%",height:"1.1rem",borderRadius:"5px",marginTop:"2%"}})]})]}),t.jsx(Se,{variant:"rectangular",sx:{bgcolor:"#F4F5FA"},style:{width:"100%",height:"2.7rem",borderRadius:"9px",marginTop:"4%"}})]}),t.jsx(P,{padding:"40px 0 40px 0",children:t.jsx(co,{type:po.SEAMLESS,title:"Loading Channel Details. Please wait..."})})]})),An=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Tn=a.div`
  width: 100%;
  height: fit-content;
  display: flex;
`,Sn=a.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Mn=()=>{var n,i;const e=K(),{aliasDetails:{aliasChainId:o}}=N(r=>r.admin);return t.jsxs(ne,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(de,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:["We\u2019re setting up your channel on the ",(i=(n=Xe[o])==null?void 0:n.label)==null?void 0:i.split(" ")[0]," Alias Network."]})," ",t.jsx(de,{textAlign:"center",margin:"5px 0px 60px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",children:"This usually takes around 5 minutes."}),t.jsxs(ne,{display:"flex",direction:"row",align:"center",margin:"50px 0px",children:[t.jsx(It,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(ho,{margin:"auto 15px",textTransform:"none",color:e.color,size:"16px",weight:"600",children:"Processing"})]})]})},En=()=>{var i;ie();const e=K(),{switchChain:o}=pe(),{aliasDetails:{aliasChainId:n}}=N(r=>r.admin);return t.jsxs(ne,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsxs(de,{textAlign:"center",margin:"30px 0px 0px 0px",color:e.color,size:"16px",textTransform:"none",weight:"500",line:"24px",children:["Change your wallet network to ",t.jsx(kn,{children:(i=Xe[n])==null?void 0:i.label})," to start ",t.jsx("br",{}),"verifying your Channel Alias."]}),t.jsx(xo,{display:"flex",alignSelf:"center",alignItems:"center",margin:"spacing-xxxl spacing-none spacing-xxl spacing-none",children:t.jsx(he,{variant:"primary",onClick:()=>o(n),size:"large",children:t.jsx(uo,{color:"white",children:"Change Network"})})})]})},kn=a.b`
  color: #cf1c84;
`,Rn=({aliasEthAccount:e,setAliasVerified:o})=>{const n=K(),{account:i,provider:r,chainId:c}=pe(),g=r.getSigner(i),m=we(),s=new go(Xe[c].commAddress,mo.epnsComm,g),[d,x]=l.useState(""),[b,p]=l.useState(!1),h=e,y={80002:{label:"Amoy MATIC",url:"https://faucet.polygon.technology/"},97:{label:"Testnet BNB",url:"https://testnet.bnbchain.org/faucet-smart"},11155420:{label:"Sepolia OpETH",url:"https://faucet.quicknode.com/optimism/sepolia"},2442:{label:"Polygon zkEVM ETH",url:"https://faucet.polygon.technology/"},421614:{label:"Sepolia ArbETH",url:"https://faucet.quicknode.com/arbitrum/sepolia"},123:{label:"Fuse SPARK",url:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},111557560:{label:"Cyber ETH",url:"https://cyber-testnet.testnets.rollbridge.app/"}},D=async()=>{h==e&&_()},$=async()=>{const{aliasVerified:k}=await wo({account:i,chainId:c}).then(u=>u?(m(o(u.is_alias_verified)),{aliasVerified:u.is_alias_verified}):{aliasVerified:null});return{aliasVerified:k}},_=()=>{x("Processing"),s.verifyChannelAlias(h).then(async k=>{console.debug(k),x("Transaction Sent! It usually takes 5mins to verify."),await k.wait(1),setTimeout(()=>{x("Transaction Mined!")},2e3),setTimeout(()=>{x("Loading...")},2e3);const u=setInterval(async()=>{const{aliasVerified:j}=await $();j&&(setTimeout(()=>{p(!0)},1e3),clearInterval(u),m(ye(0)))},5e3)}).catch(()=>{x("There was an error"),setTimeout(()=>{x("")},2e3)})};return t.jsxs(ne,{margin:"15px 20px 15px 20px",flex:"1",display:"flex",direction:"column",children:[t.jsx(xe,{textAlign:"center",margin:"60px 0px 0px 0px",color:n.color,fontSize:"16px",textTransform:"none",fontWeight:"500",lineHeight:"24px",maxWidth:"400px",children:"You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."}),d===""&&t.jsx(de,{textAlign:"center",margin:"60px 0px 0px 0px",color:"#CF1C84",size:"16px",textTransform:"none",weight:"500",line:"24px",children:i}),d===""&&ee.appEnv!=="prod"&&t.jsxs(xe,{padding:"10px",margin:"10px",borderRadius:R.ADJUSTMENTS.RADIUS.SMALL,background:n.default.secondaryBg,color:n.default.secondaryColor,children:["You will need"," ",t.jsx(fo,{href:y[c].url,target:"_blank",children:y[c].label})," ","to proceed."]}),!b&&(d?t.jsxs(ne,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(It,{color:"#cf1c84",loading:!0,height:13,width:4}),t.jsx(de,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:d})]}):t.jsx(ne,{width:"15em",self:"center",align:"center",margin:"60px auto 0px auto",children:t.jsx(he,{variant:"primary",size:"medium",onClick:D,children:"Verify Alias Address"})})),b&&t.jsxs(ne,{display:"flex",direction:"row",align:"center",margin:"60px 0px 0px 0px",children:[t.jsx(bo,{color:"#30CC8B",size:30}),t.jsx(de,{color:n.color,weight:"600",textTransform:"none",line:"22px",size:"16px",margin:"0px 10px",children:"Verification Complete"})]})]})},Dn=({aliasEthAccount:e,setAliasVerified:o})=>{const{processingState:n}=N(i=>i.channelCreation);return t.jsxs(qe,{children:[t.jsxs(In,{children:[t.jsxs(Fe,{type:n>=1?"active":"inactive",active:n==1?"active":"inactive",children:[t.jsx("div",{children:"Waiting for Setup"}),t.jsx(Ue,{type:n>=1?"active":"inactive"})]}),t.jsxs(Fe,{type:n>=2?"active":"inactive",active:n==2?"active":"inactive",children:[t.jsx("div",{children:"Change Network"}),t.jsx(Ue,{type:n>=2?"active":"inactive"})]}),t.jsxs(Fe,{type:n>=3?"active":"inactive",active:n==3?"active":"inactive",children:[t.jsx("div",{children:"Verify Alias Network"}),t.jsx(Ue,{type:n>=3?"active":"inactive"})]}),t.jsx(Ln,{})]}),n===1&&t.jsx(Mn,{}),n===2&&t.jsx(En,{}),n===3&&t.jsx(Rn,{aliasEthAccount:e,setAliasVerified:o})]})},In=a.div`
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
`,Ue=a.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({type:e})=>e==="active"&&Be`
      background: #e20880;
    `};
`,Ln=a.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`,Fe=a.div`
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

  ${({type:e})=>e==="active"&&Be`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({active:e})=>e==="active"&&Be`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({active:e})=>e==="inactive"&&Be`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`,xt=({heading:e,subHeading:o})=>{const n=K();return t.jsx(ze,{theme:n,children:t.jsxs(Nn,{children:[t.jsx($n,{style:{color:n.default.color},children:e}),t.jsx(Bn,{style:{color:n.modalMessageColor},children:o})]})})},Nn=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`,$n=a.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`,Bn=a.h4`
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
`,Ge=O.forwardRef(({title:e},o)=>{const n=K();return t.jsx(ze,{theme:n,children:t.jsxs(zn,{children:[t.jsx(On,{style:{color:n.modalMessageColor},children:e}),t.jsx(_n,{ref:o,radius:"12px",padding:"0.8rem",border:"1px solid #BAC4D6",style:{color:n.modalMessageColor}})]})})}),zn=a.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`,On=a.h4`
  font-family: FK Grotesk Neu;
  font-size: ${e=>e.fontSize||"0.95rem"};
  font-weight: ${e=>e.fontWeight||"600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${e=>e.marginBottom||"3%"};
`,_n=a(yo)`
  box-sizing: border-box;
  width: 100%;
`,Pn=({onConfirm:e,onClose:o,toastObject:n})=>{const i=O.useRef();K();const[r,c]=O.useState(!1),g=()=>!r&&o(),m=O.useRef(null);Ce(m,()=>g());const s=()=>{var x;c(!0);const d=(x=i==null?void 0:i.current)==null?void 0:x.value;e(d).then(async b=>{console.debug(b),n.showMessageToast({toastTitle:"Delegate Added",toastMessage:"Delegate has been added successfully",toastType:"SUCCESS",getToastIcon:p=>t.jsx(je,{size:p,color:"green"})}),o()}).catch(b=>{console.error({err:b}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a delegate failed.",toastType:"ERROR",getToastIcon:p=>t.jsx(q,{size:p,color:"red"})})}).finally(()=>{c(!1)})};return t.jsxs(Un,{ref:m,children:[t.jsx(xt,{heading:"Add Delegate",subHeading:"Add an account who can send notifications on behalf of the channel"}),t.jsx(Ge,{ref:i,title:"Delegate Address"}),t.jsx(Pt,{text:"Add Delegate",onClick:s,isLoading:r})]})},Un=a.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${E.laptop}){
    width:50vw;
  }
  @media(${E.mobileL}){
    width:95vw;
  }
`,Fn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC",Gn=e=>l.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M12 28H20",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",stroke:"#30CC8B",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Vn=({onClose:e,onConfirm:o,toastObject:n})=>{const i=O.useRef(),r=O.useRef(),[c,g]=O.useState(!1);K();const m=()=>!c&&e(),s=O.useRef(null);Ce(s,()=>m());const d=()=>{var p,h;const x=(p=r==null?void 0:r.current)==null?void 0:p.value,b=(h=i==null?void 0:i.current)==null?void 0:h.value;if(g(!0),x==""||b==""){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Fields are empty! Retry",toastType:"ERROR",getToastIcon:y=>t.jsx(q,{size:y,color:"red"})}),setTimeout(()=>{g(!1)},500);return}else if(parseInt(x)<60){n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Poll Time must be at least 60 sec",toastType:"ERROR",getToastIcon:y=>t.jsx(q,{size:y,color:"red"})}),setTimeout(()=>{g(!1)},500);return}o(x,b).then(async y=>{console.debug(y),n.showMessageToast({toastTitle:"Subgraph Added",toastMessage:"Subgraph has been added successfully",toastType:"SUCCESS",getToastIcon:D=>t.jsx(je,{size:D,color:"green"})}),e()}).catch(y=>{console.error(y),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Adding a subgraph failed.",toastType:"ERROR",getToastIcon:D=>t.jsx(q,{size:D,color:"red"})})}).finally(()=>{g(!1)})};return t.jsxs(Hn,{ref:s,children:[t.jsx(xt,{heading:"Add Subgraph",subHeading:"Enter subgraph ID and Poll time (at least 60 sec)"}),t.jsx(Ge,{ref:i,title:"Subgraph ID"}),t.jsx(Ge,{ref:r,title:"Poll Time (in seconds)"}),t.jsx(Pt,{text:"Add Subgraph",onClick:d,isLoading:c})]})},Hn=a.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${E.laptop}){
    width:50vw;
  }
  @media(${E.mobileL}){
    width:95vw;
  }
`,Kn=e=>l.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",stroke:"#657795",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M30 18L18 30",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M30 30L18 18",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Wn=e=>l.createElement("svg",{width:16,height:19,viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M1.58691 1.66772L14.9338 16.3492",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.58984 17.0166H10.9286",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Yn=({onConfirm:e,onClose:o,toastObject:n})=>{const i=K(),r=we(),{channelDetails:c}=N(p=>p.admin),{CHANNNEL_DEACTIVATED_STATE:g}=N(p=>p.channels),[m,s]=O.useState(!1),d=()=>!m&&o(),x=O.useRef(null);Ce(x,()=>d());const b=()=>{s(!0),e().then(async p=>{console.debug(p),console.info("Transaction Sent!"),n.showMessageToast({toastTitle:"Channel Deactivated",toastMessage:"Please Activate Channel to Send Notifications from it",toastType:"ERROR",getToastIcon:h=>t.jsx(q,{size:h,color:"red"})}),await p.wait(1),console.info("Transaction Mined!"),r(Qe({...c,channelState:g})),s(!1),o()}).catch(p=>{console.error("!!!Error deactivateChannel() --> %o",p),console.error({err:p}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel deactivation failed.",toastType:"ERROR",getToastIcon:h=>t.jsx(q,{size:h,color:"red"})}),s(!1)})};return t.jsx(ze,{theme:i,children:t.jsx(Jn,{ref:x,children:m?t.jsxs(Xn,{children:[t.jsx(Lt,{size:42,color:R.COLORS.PRIMARY_PINK,type:Nt.PROCESSING}),t.jsx(qn,{children:"Verifying"})]}):t.jsxs(t.Fragment,{children:[t.jsx(Qn,{style:{color:i.modalMessageColor},children:"Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."}),t.jsxs(Zn,{children:[t.jsx(Kn,{width:36,height:36,onClick:d}),t.jsx(ei,{onClick:b,children:t.jsx(Wn,{})})]})]})})})},Jn=a.div`
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
`,Xn=a(Z)`
  flex-direction: row;
  //   margin-top:33px;
`,qn=a.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,Qn=a.div`
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
`;const Zn=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`,ei=a.div`
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
`;const ti="DD MMM, YYYY",ni=({onConfirm:e,onClose:o,toastObject:n})=>{const i=K(),{chainId:r,account:c,provider:g}=pe(),m=we(),{channelDetails:s,canVerify:d,aliasDetails:{isAliasVerified:x,aliasAddrFromContract:b}}=N(C=>C.admin),{CHANNEL_ACTIVE_STATE:p,CHANNNEL_DEACTIVATED_STATE:h}=N(C=>C.channels),[y,D]=l.useState("");let{channelState:$}=s;$||($=s.activation_status);const _=$===p,k=$===h,[u,j]=l.useState(!1),[z,I]=l.useState(!1),[w,v]=l.useState(0),A=()=>!u&&o(),B=l.useRef(null);Ce(B,()=>A());const L=ee.coreContractChain===r;Oe(600),l.useEffect(()=>{!s||!L||async function(){const C=s.channelStartBlock.toString(),S=await new $t(ee.coreRPC).getBlock(+C),T=Bt(S.timestamp*1e3);D(T.format(ti))}()},[s]),l.useEffect(()=>{!c||!g||async function(){const C=await Xo({address:c,provider:g,contractAddress:zt.epnscore});v(parseInt(C));const S=parseInt(C);S>=50&&S!=0?I(!0):I(!1)}()},[c,g]);const U=async C=>{await qo({noOfTokens:C,provider:g,account:c})},H=async()=>{if(j(!0),!g)return;const C=g.getSigner(c);n.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const S=await Qo({signer:C,contractAddress:zt.epnscore,amount:50-w});console.debug("response",S),S&&(v(50),I(!0),n.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:T=>t.jsx(je,{size:T,color:"green"})}),j(!1))}catch(S){console.error(S),S.code=="ACTION_REJECTED"?n.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:T=>t.jsx(q,{size:T,color:"red"})}):(n.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:T=>t.jsx(q,{size:T,color:"red"})}),console.error("Error --> %o",S),console.error({err:S}))}j(!1)},G=async()=>{j(!0);try{const C=Ao("50",18),S=await e(C);n.showMessageToast({toastTitle:"Reactivating channel",toastMessage:"Reactivate channel.",toastType:"SUCCESS",getToastIcon:T=>t.jsx(je,{size:T,color:"green"})}),await S.wait(),console.info("Transaction Mined!"),n.showMessageToast({toastTitle:"Channel Reactivated",toastMessage:"Channel has been reactivated. You can now send notifications from it",toastType:"SUCCESS",getToastIcon:T=>t.jsx(je,{size:T,color:"green"})}),m(Qe({...s,channelState:p})),o(),j(!1)}catch(C){console.error("Error reactivateChannel",{err:C}),n.showMessageToast({toastTitle:"Transaction Failed",toastMessage:"Channel reactivation failed.",toastType:"ERROR",getToastIcon:S=>t.jsx(q,{size:S,color:"red"})}),j(!1)}};return t.jsx(ze,{theme:i,children:t.jsxs(ii,{ref:B,children:[t.jsxs(oi,{children:[t.jsx(ai,{children:"Reactivate Channel"}),t.jsx(fn,{onClick:A,style:{padding:"0",marginRight:"0.5rem"},sx:{"&:hover":{backgroundColor:"transparent"}},children:t.jsx(vo,{size:"1.5rem",style:{color:i.modalIconColor}})})]}),t.jsxs(si,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(li,{src:s.icon}),t.jsxs(gt,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(gi,{children:[s.name,d&&t.jsx(ci,{src:"/verify.png"})]}),t.jsxs(gt,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[L&&b&&!x||!L&&!x?t.jsx(hi,{children:"Alias Network Setup Pending"}):t.jsxs(ri,{justifyContent:"flex-start",children:[t.jsxs(di,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(xi,{children:s.subscriber_count})]}),t.jsx(pi,{active:_,children:_?"Active":k?"Deactivated":"Blocked"})]}),y&&t.jsxs(ui,{children:["Created ",y]})]})]})]}),t.jsxs(mi,{children:[t.jsx(fi,{children:"Channel reactivation fee"}),t.jsxs(P,{flex:"0",children:[z?t.jsx(bi,{src:Ho}):null,t.jsxs(wi,{children:[50," PUSH"]})]})]}),t.jsx(Ko,{noOfPushTokensToCheck:50,containerProps:{width:"100%"},onMintPushToken:U}),u?t.jsxs(Ci,{children:[t.jsx(Lt,{size:42,color:R.COLORS.PRIMARY_PINK,type:Nt.PROCESSING}),t.jsx(ji,{children:"Verifying Transaction"})]}):t.jsx(yi,{children:w>=50?t.jsx(ft,{onClick:G,children:"Reactivate"}):t.jsx(ft,{onClick:H,children:"Approve PUSH"})})]})})},ii=a.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${e=>e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${E.mobileL} {
    padding: 0.5rem;
  }
  @media (${E.laptop}) {
    width: 50vw;
  }
  @media (${E.mobileL}) {
    width: 95vw;
  }
`,oi=a(P)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${E.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${E.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`,ai=a(Co)`
  color: ${e=>e.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${E.laptop} {
    font-size: 1.2rem;
  }
  @media ${E.mobileL} {
    width: 85%;
  }
`,gt=a(Z)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,ri=a(P)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,si=a(P)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,li=a.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${E.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${E.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,ci=a.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,di=a.div`
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
  @media ${E.laptop} {
    width: 52px;
    height: 22px;
  }
`,mt=a.div`
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
  @media ${E.laptop} {
    padding: 1px 8px;
  }
`,pi=a(mt)`
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
`,hi=a(mt)`
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
`,xi=a.span`
  font-weight: 400;
  font-size: 14px;
`,ui=a.div`
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
  @media ${E.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,gi=a.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${e=>e.theme.color};
  @media ${E.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`,mi=a(P)`
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
  @media ${E.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`,fi=a.p`
  margin: 0px;
  color: ${e=>e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${E.mobileL} {
    width: 100%;
    text-align: center;
  }
`,bi=a.img``,wi=a.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${E.mobileL} {
    width: 100%;
    text-align: center;
  }
`,yi=a(P)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`,ft=a(jo)`
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

  @media ${E.mobileL} {
    width: 80%;
  }
`,Ci=a(Z)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`,ji=a.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${e=>e.theme.editChannelPrimaryText};
`,vi=50,Ai=ee.coreContractChain;function Ti({DropdownRef:e,isDropdownOpen:o,closeDropdown:n}){we();const{account:i,chainId:r}=pe(),{epnsWriteProvider:c,epnsCommWriteProvider:g}=N(F=>F.contracts),{channelDetails:m}=N(F=>F.admin),{CHANNNEL_DEACTIVATED_STATE:s,CHANNEL_BLOCKED_STATE:d}=N(F=>F.channels);N(F=>F.user);const x=K(),{channelState:b}=m,p=Ai===r,h=Oe(425),{isModalOpen:y,showModal:D,ModalComponent:$}=ve(),{isModalOpen:_,showModal:k,ModalComponent:u}=ve(),{isModalOpen:j,showModal:z,ModalComponent:I}=ve(),w=o&&!y&&!_&&!j;Ce(e,()=>w&&n()),O.useState(!1),O.useState(vi);const[v,A]=O.useState(0),B=b===s,L=b===d,U=L||B;O.useEffect(()=>{A(+To.formatBigNumberToMetric(m.poolContribution,!0))},[i,m.poolContribution]),ie();const H=()=>{L||(B?k():D())},G=ie(),C=c.reactivateChannel,S=ie(),T=()=>c.deactivateChannel(),ue=ie(),ae=async(F,re)=>{if(!(F==""||re=="")&&!(F<60))try{const te=F+"+"+re,Y=So(te);return c.addSubGraph(Y)}catch(te){console.error(te)}};return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:t.jsx(Si,{background:x,children:t.jsxs(Mi,{children:[ee.appEnv!=="prod"&&t.jsx(bt,{disabled:U,onClick:()=>!U&&z(),children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[t.jsx(Me,{src:Fn,alt:"cube"}),t.jsx("div",{style:{width:"10px"}}),"Add SubGraph Details"]})}),p&&t.jsx(bt,{isChannelDeactivated:B,onClick:H,children:t.jsx(Ei,{isChannelBlocked:L,isChannelDeactivated:B,children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[L?t.jsx(Me,{src:ut,alt:"red-bell"}):B?t.jsx(Me,{src:Gn,alt:"green-bell"}):t.jsx(Me,{src:ut,alt:"red-bell"}),t.jsx("div",{style:{width:"10px"}}),L?"Channel Blocked":B?"Activate Channel":"Deactivate Channel"]})})})]})})}),t.jsx($,{InnerComponent:Yn,onConfirm:T,toastObject:S,modalPosition:_e.ON_ROOT}),t.jsx(u,{InnerComponent:ni,onConfirm:C,toastObject:G,modalMargin:h?"10rem 1rem 0 1rem":"",modalPosition:_e.ON_ROOT}),t.jsx(I,{InnerComponent:Vn,onConfirm:ae,toastObject:ue,modalPosition:_e.ON_ROOT})]})}const Si=a.div`
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
`,Mi=a.div`
  flex-direction: column;
  gap: 20px;
  display: ${e=>e.inactive?"none":"flex"};
`;a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,a.div`
  margin: 0px 10px;
`,a.div`
  text-decoration: underline;
  color: ${e=>e.isChannelDeactivated?"#674C9F":"#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;const bt=a.button`
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
`,Ei=a.div`
  color: ${e=>e.isChannelBlocked?"red":e.isChannelDeactivated?"#30CC8B":"red "};
`,Me=a.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;function wt(){const e=O.useRef(null),[o,n]=O.useState(!1);K();const i=()=>{n(c=>!c)},r=()=>{n(!1)};return t.jsxs(P,{flex:"0",ref:e,children:[t.jsx(ki,{active:o,onClick:i}),o&&t.jsx(Ti,{DropdownRef:e,isDropdownOpen:o,closeDropdown:r})]})}a.div`
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
`;const ki=a(Mo)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${e=>e.active?"rotateZ(90deg)":"none"};
`,Ri="DD MMM, YYYY";function Di({isChannelExpired:e,setIsChannelExpired:o,showEditChannel:n,destroyChannel:i}){var ke,J,Re;const{account:r,chainId:c,wallet:g}=pe(),{delegatees:m,channelDetails:s,canVerify:d,aliasDetails:{isAliasVerified:x,aliasAddrFromContract:b}}=N(M=>M.admin),{channelSettings:p}=N(M=>M.channels),{userPushSDKInstance:h}=N(M=>M.user),{handleConnectWalletAndEnableProfile:y}=l.useContext(Ot),{CHANNEL_ACTIVE_STATE:D,CHANNNEL_DEACTIVATED_STATE:$}=N(M=>M.channels),{processingState:_}=N(M=>M.channelCreation),[k,u]=l.useState([]),[j,z]=l.useState("");let{channelState:I}=s;I||(I=s.activation_status);const w=I===D,v=I===$,A=ee.coreContractChain===c,B=Oe(600),[L,U]=l.useState([r]),[H,G]=l.useState(void 0);N(M=>M.contracts);const C=ko(),{isModalOpen:S,showModal:T,ModalComponent:ue}=ve(),ae=ie(),F=async()=>{h.signer||await y({wallet:g}),T()},re=async M=>h.channel.delegate.add(et(M,c)),te=s.expiryTime?Ro(((ke=s.expiryTime)==null?void 0:ke.toString())*1e3):"",Y=s.expiryTime?Do(((J=s.expiryTime)==null?void 0:J.toString())*1e3):!0,se=s.expiryTime?Io(((Re=s.expiryTime)==null?void 0:Re.toString())*1e3,14):"";l.useEffect(()=>{s.channelType==Ze.TIMEBOUND&&(Y||o(!0))},[Y]),l.useEffect(()=>{!s||!d||async function(){let M=await _t.getInstance().getChannelJsonAsync(s.verifiedBy);u(M)}()},[s,d]),l.useEffect(()=>{!s||!A||async function(){const M=s.channelStartBlock.toString(),Q=await new $t(ee.coreRPC).getBlock(+M),le=Bt(Q.timestamp*1e3);z(le.format(Ri))}()},[s]),l.useEffect(()=>{r&&(!m||!m.length?G(r):G(A?m[0].channel:m[0].alias_address))},[m,r]),l.useEffect(()=>{r&&(async()=>{try{const M=et(r,c),Q=await h.channel.delegate.get({channel:M});if(Q){const le=Q.map(He=>He);le.unshift(r),U(le)}}catch(M){console.error(M)}})()},[r,c]);const ge=async M=>{let Q=h;if(!(!Q.signer&&(Q=await y({wallet:g}),!Q)))return Q.channel.delegate.remove(et(M,c))},Ee=()=>{C(No.ChannelSettings)};return t.jsxs(Z,{children:[t.jsxs(Li,{justifyContent:"flex-start",alignSelf:"stretch",children:[t.jsx(Ni,{src:s.icon}),t.jsxs(Ve,{alignItems:"flex-start",padding:"5px 0px",children:[t.jsxs(Vi,{children:[s.name,d&&t.jsx($i,{src:"/verify.png"})]}),t.jsxs(Ve,{alignItems:"flex-start",flex:"initial",padding:"5px 0px",children:[A&&b&&!x||!A&&!x?t.jsx(Pi,{children:"Alias Network Setup Pending"}):t.jsxs(Ii,{justifyContent:"flex-start",children:[t.jsxs(Oi,{children:[t.jsx("img",{style:{width:"15px"},src:"/subcount.svg",alt:"subscount"}),t.jsx(Ui,{children:s.subscriber_count})]}),t.jsxs(_i,{active:w,children:[v&&t.jsx(tt,{width:"12px",src:Fo,margin:"0 5px 2px 0px",height:"30px"}),w?"Active":v?"Deactivated":"Blocked"]}),s.channelType==Ze.TIMEBOUND&&!e&&t.jsxs(P,{background:"#C5EFD1",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(tt,{width:"16px",src:"svg/ExpiresTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(xe,{color:"#30CC8B",fontWeight:"600",padding:"0 9px 0 0",children:["Expires on ",te]})]}),s.channelType==Ze.TIMEBOUND&&e&&t.jsxs(P,{background:"#FFD8D8",flex:"0",borderRadius:"25px",margin:"0 0 10px 10px",height:"30px",children:[t.jsx(tt,{width:"16px",src:"svg/ExpiredTimer.svg",alt:"expiryTimer",padding:"0 6px 0 9px"}),t.jsxs(xe,{color:"#E93636",fontWeight:"600",padding:"0 9px 0 0",children:["Expired on ",te]})]})]}),j&&t.jsxs(Fi,{children:["Created ",j]})]})]})]}),B&&t.jsxs(P,{zIndex:"1",padding:"0 0 15px 0",alignSelf:"center",display:"flex",gap:"8px",children:[!e&&A&&t.jsx(he,{onClick:n,size:"small",variant:"outline",children:"Edit Channel"}),!e&&t.jsx(wt,{}),e&&A&&t.jsx(he,{onClick:i,size:"small",variant:"danger",children:"Delete Channel"})]}),e&&t.jsx(Z,{alignItems:"flex-start",children:t.jsxs(Ct,{margin:"25px 0 0 0",children:[t.jsx(xe,{color:"#D53A94",children:"Note:"})," Channel will auto delete on"," ",t.jsx(xe,{fontWeight:"600",children:se})]})}),t.jsx(Z,{alignItems:"flex-start",children:t.jsx(Ct,{children:s.info})}),d&&t.jsx(Ve,{alignItems:"flex-start",padding:"5px 0px",children:t.jsx(Hi,{children:t.jsxs(Gi,{children:[t.jsx("span",{children:"verified by:"}),t.jsx(Bi,{src:k.icon}),t.jsx(zi,{children:k.name})]})})}),_===0&&t.jsxs(Z,{children:[t.jsx(qe,{children:t.jsxs(jt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(Ut,{title:"Notification Settings",description:"Customize notification preferences for users",Button:t.jsx(ea,{onClick:Ee})}),t.jsx(Ft,{account:r,isAddress:!1,items:p[r],isLoading:!1,onClickEmptyListButton:Ee,emptyListButtonTitle:"Add Setting"})]})}),t.jsx(qe,{children:t.jsxs(jt,{flex:"5",minWidth:"280px",self:"stretch",align:"stretch",margin:"10px 0px 30px 0px",radius:"20px",border:"1px solid #D4DCEA",children:[t.jsx(Ut,{title:"Channel Delegates",description:"Delegates can send notifications on behalf of the channel",Button:t.jsx(ta,{onClick:F})}),t.jsx(Ft,{account:r,isAddress:!0,items:L,isLoading:!1,addressDropdownOptions:[{text:"Remove",onClick:ge,icon:t.jsx(Lo,{})}]})]})})]}),t.jsx(ue,{InnerComponent:Pn,onConfirm:re,toastObject:ae,modalPosition:_e.ON_ROOT})]})}const Ve=a(Z)`
  @media (max-width: 767px) {
    align-items: center;
  }
`,Ii=a(P)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`,Li=a(P)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`,Ni=a.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${E.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`,$i=a.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`,Bi=a.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`,zi=a.div``,Oi=a.div`
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
`,yt=a.div`
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
`,_i=a(yt)`
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
`,Pi=a(yt)`
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
`,Ui=a.span`
  font-weight: 400;
  font-size: 14px;
`;a.div`
  display: flex;
  flex-direction: column;
  @media ${E.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;const Fi=a.div`
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
`,Gi=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`,Vi=a.div`
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
`,Hi=a.div`
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
`,Ct=a.div`
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
`,jt=a(Eo)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${e=>e.theme.default.borderColor};
`,Ki=10;let vt=null;const Wi=()=>{K();const{account:e,chainId:o,wallet:n}=pe(),{channelDetails:i,delegatees:r,aliasDetails:{aliasAddr:c,aliasEthAddr:g,isAliasVerified:m,aliasAddrFromContract:s}}=N(w=>w.admin),{processingState:d}=N(w=>w.channelCreation),{epnsWriteProvider:x}=N(w=>w.contracts);N(w=>w.user),l.useContext(Ot);const b=i&&i!=="unfetched",p=ie(),h=we(),[y,D]=l.useState(!1);l.useState(!0);const[$,_]=l.useState(!1),k=ee.coreContractChain===o,u=Oe(600);l.useEffect(()=>{if(!k||!i||s||i==="unfetched")return;const w=$o(i);if(w){const{address:v,chainId:A}=w;h(Bo(v)),h(zo(A))}else h(ye(0))},[i,s]);const j=async w=>{let{aliasAddress:v=null,isAliasVerified:A=null}=await _t.getInstance().getChannelDetailsFromAddress(w);return v=="NULL"&&(v=null),{aliasAddress:v,aliasVerified:A}};l.useEffect(()=>{!k||!s||d===0||(vt=setInterval(async()=>{const{aliasAddress:w,aliasVerified:v}=await j(e);w?(h(Oo(w)),v?(h(nt(!0)),h(ye(0))):(h(ye(2)),h(nt(!1)))):d!=0&&d!=1&&h(ye(1))},Ki*1e3))},[s]),c!==null&&clearInterval(vt);const z=async()=>{try{p.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const w=await x.destroyTimeBoundChannel(e,{gasLimit:1e6});console.debug(w),console.debug("Check: "+e),await w.wait(),p.showMessageToast({toastTitle:"Success",toastMessage:"Successfully deleted the channel",toastType:"SUCCESS",getToastIcon:v=>t.jsx(q,{size:v,color:"green"})}),h(Qe(null))}catch(w){console.error(w),w.code=="ACTION_REJECTED"?p.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:v=>t.jsx(q,{size:v,color:"red"})}):p.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in deleting the channel",toastType:"ERROR",getToastIcon:v=>t.jsx(q,{size:v,color:"red"})})}},I=()=>{_(!0)};return ve(),t.jsxs(P,{children:[(i==="unfetched"||d===null)&&t.jsx(ht,{}),i!=="unfetched"&&t.jsxs(Z,{justifyContent:d===0&&"flex-start",height:"fit-content",children:[!i&&d===0&&t.jsx(ia,{}),b&&d!==null&&t.jsx(Yi,{children:$?t.jsx("div",{children:"Edit Channel"}):t.jsxs(t.Fragment,{children:[i&&!u&&t.jsxs(P,{zIndex:"1",gap:"8px",children:[!y&&k&&t.jsx(he,{onClick:I,size:"small",variant:"outline",children:"Edit Channel"}),!y&&t.jsx(wt,{}),y&&k&&t.jsx(he,{onClick:z,size:"small",variant:"danger",children:"Delete Channel"})]}),i?t.jsx(Di,{isChannelExpired:y,setIsChannelExpired:D,showEditChannel:I,destroyChannel:z}):""]})}),d!==0&&d!==null&&b&&!$&&t.jsx(t.Fragment,{children:t.jsx(Dn,{aliasEthAccount:g,setAliasVerified:nt})})]})]})},Yi=a(Z)`
  align-items: center;
  align-self: center;
  background: ${e=>e.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${R.ADJUSTMENTS.RADIUS.LARGE} ${R.ADJUSTMENTS.RADIUS.LARGE}
    ${R.ADJUSTMENTS.RADIUS.LARGE} ${R.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${oe.MINI_MODULES.DESKTOP.RIGHT} - ${oe.MINI_MODULES.DESKTOP.LEFT} -
      ${R.ADJUSTMENTS.PADDING.HUGE} - ${R.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${R.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${R.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${E.laptop} {
    margin: ${R.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${R.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${oe.MINI_MODULES.TABLET.RIGHT} - ${oe.MINI_MODULES.TABLET.LEFT} -
        ${R.ADJUSTMENTS.PADDING.BIG} - ${R.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${E.mobileL} {
    margin: ${R.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${R.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${oe.MINI_MODULES.MOBILE.RIGHT} - ${oe.MINI_MODULES.MOBILE.LEFT} -
        ${R.ADJUSTMENTS.PADDING.DEFAULT} - ${R.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${R.CONSTANTS.HEADER_HEIGHT}px - ${oe.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${R.ADJUSTMENTS.RADIUS.LARGE} ${R.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;ee.coreContractChain;function Ji(){_o.pageview("/channel_dashboard");const[e,o]=O.useState(!0),[n,i]=O.useState(null),r=()=>i(null);return O.useEffect(()=>{n&&r()},[n]),t.jsxs(t.Fragment,{children:[e?t.jsx(Wi,{}):t.jsx(ht,{}),n&&t.jsx(Go,{notification:n,clearToast:r})]})}a.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;let At;Gt=()=>t.jsx(At,{children:t.jsx(Ji,{})}),At=a(Po)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{ha as __tla,Gt as default};
