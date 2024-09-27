import{d_ as a,ho as J,hp as fe,hq as me,hr as be,hs as Bt,g3 as re,ht as Pt,hu as Pe,fy as Ft,hv as ye,hw as Re,hx as At,hy as _t,e1 as t,e6 as y,ei as Ke,e_ as ce,dY as Ye,e9 as qe,ed as I,eO as Q,go as Lt,hc as Ot,e7 as Vt,ec as Ge,ff as He,h1 as Wt,fC as Ut,e0 as Je,fD as Xt,eR as Kt,eb as Yt,fe as qt,fh as Z,fi as Gt,hz as Ht,e2 as Jt,eX as Qt,e3 as Zt,e4 as eo,fK as de,fH as Fe,fJ as Qe,__tla as to}from"./index-BNEMcso2.js";import{D as oo,__tla as ao}from"./index-Du52qrm6.js";import{a as no,T as Ze,__tla as ro}from"./Tag-DBDNDu9V.js";let ve,et,io=Promise.all([(()=>{try{return to}catch{}})(),(()=>{try{return ao}catch{}})(),(()=>{try{return ro}catch{}})()]).then(async()=>{var tt=typeof window>"u"?a.useEffect:a.useLayoutEffect;function ot(e){var r=e.classes,l=e.pulsate,k=l===void 0?!1:l,u=e.rippleX,d=e.rippleY,v=e.rippleSize,h=e.in,n=e.onExited,T=n===void 0?function(){}:n,j=e.timeout,g=a.useState(!1),x=g[0],N=g[1],p=J(r.ripple,r.rippleVisible,k&&r.ripplePulsate),b={width:v,height:v,top:-(v/2)+d,left:-(v/2)+u},F=J(r.child,x&&r.childLeaving,k&&r.childPulsate),R=fe(T);return tt(function(){if(!h){N(!0);var L=setTimeout(R,j);return function(){clearTimeout(L)}}},[R,h,j]),a.createElement("span",{className:p,style:b},a.createElement("span",{className:F}))}var ze=550,at=80,nt=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(ze,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(ze,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},rt=a.forwardRef(function(e,r){var l=e.center,k=l===void 0?!1:l,u=e.classes,d=e.className,v=be(e,["center","classes","className"]),h=a.useState([]),n=h[0],T=h[1],j=a.useRef(0),g=a.useRef(null);a.useEffect(function(){g.current&&(g.current(),g.current=null)},[n]);var x=a.useRef(!1),N=a.useRef(null),p=a.useRef(null),b=a.useRef(null);a.useEffect(function(){return function(){clearTimeout(N.current)}},[]);var F=a.useCallback(function(c){var f=c.pulsate,S=c.rippleX,V=c.rippleY,s=c.rippleSize,D=c.cb;T(function(_){return[].concat(Bt(_),[a.createElement(ot,{key:j.current,classes:u,timeout:ze,pulsate:f,rippleX:S,rippleY:V,rippleSize:s})])}),j.current+=1,g.current=D},[u]),R=a.useCallback(function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S=arguments.length>2?arguments[2]:void 0,V=f.pulsate,s=V===void 0?!1:V,D=f.center,_=D===void 0?k||f.pulsate:D,z=f.fakeElement,X=z===void 0?!1:z;if(c.type==="mousedown"&&x.current){x.current=!1;return}c.type==="touchstart"&&(x.current=!0);var O=X?null:b.current,E=O?O.getBoundingClientRect():{width:0,height:0,left:0,top:0},M,B,m;if(_||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)M=Math.round(E.width/2),B=Math.round(E.height/2);else{var W=c.touches?c.touches[0]:c,ie=W.clientX,K=W.clientY;M=Math.round(ie-E.left),B=Math.round(K-E.top)}if(_)m=Math.sqrt((2*Math.pow(E.width,2)+Math.pow(E.height,2))/3),m%2===0&&(m+=1);else{var se=Math.max(Math.abs((O?O.clientWidth:0)-M),M)*2+2,Y=Math.max(Math.abs((O?O.clientHeight:0)-B),B)*2+2;m=Math.sqrt(Math.pow(se,2)+Math.pow(Y,2))}c.touches?p.current===null&&(p.current=function(){F({pulsate:s,rippleX:M,rippleY:B,rippleSize:m,cb:S})},N.current=setTimeout(function(){p.current&&(p.current(),p.current=null)},at)):F({pulsate:s,rippleX:M,rippleY:B,rippleSize:m,cb:S})},[k,F]),L=a.useCallback(function(){R({},{pulsate:!0})},[R]),A=a.useCallback(function(c,f){if(clearTimeout(N.current),c.type==="touchend"&&p.current){c.persist(),p.current(),p.current=null,N.current=setTimeout(function(){A(c,f)});return}p.current=null,T(function(S){return S.length>0?S.slice(1):S}),g.current=f},[]);return a.useImperativeHandle(r,function(){return{pulsate:L,start:R,stop:A}},[L,R,A]),a.createElement("span",re({className:J(u.root,d),ref:b},v),a.createElement(no,{component:null,exit:!0},n))});const it=me(nt,{flip:!1,name:"MuiTouchRipple"})(a.memo(rt));var st={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},lt=a.forwardRef(function(e,r){var l=e.action,k=e.buttonRef,u=e.centerRipple,d=u===void 0?!1:u,v=e.children,h=e.classes,n=e.className,T=e.component,j=T===void 0?"button":T,g=e.disabled,x=g===void 0?!1:g,N=e.disableRipple,p=N===void 0?!1:N,b=e.disableTouchRipple,F=b===void 0?!1:b,R=e.focusRipple,L=R===void 0?!1:R,A=e.focusVisibleClassName,c=e.onBlur,f=e.onClick,S=e.onFocus,V=e.onFocusVisible,s=e.onKeyDown,D=e.onKeyUp,_=e.onMouseDown,z=e.onMouseLeave,X=e.onMouseUp,O=e.onTouchEnd,E=e.onTouchMove,M=e.onTouchStart,B=e.onDragLeave,m=e.tabIndex,W=m===void 0?0:m,ie=e.TouchRippleProps,K=e.type,se=K===void 0?"button":K,Y=be(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),H=a.useRef(null);function je(){return Ft.findDOMNode(H.current)}var C=a.useRef(null),Se=a.useState(!1),q=Se[0],te=Se[1];x&&q&&te(!1);var pe=Pt(),ue=pe.isFocusVisible,he=pe.onBlurVisible,Ce=pe.ref;a.useImperativeHandle(l,function(){return{focusVisible:function(){te(!0),H.current.focus()}}},[]),a.useEffect(function(){q&&L&&!p&&C.current.pulsate()},[p,L,q]);function G(i,Ue){var Nt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:F;return fe(function(Xe){Ue&&Ue(Xe);var Dt=Nt;return!Dt&&C.current&&C.current[i](Xe),!0})}var Me=G("start",_),xe=G("stop",B),$e=G("stop",X),Ie=G("stop",function(i){q&&i.preventDefault(),z&&z(i)}),U=G("start",M),Ne=G("stop",O),De=G("stop",E),le=G("stop",function(i){q&&(he(i),te(!1)),c&&c(i)},!1),Be=fe(function(i){H.current||(H.current=i.currentTarget),ue(i)&&(te(!0),V&&V(i)),S&&S(i)}),o=function(){var i=je();return j&&j!=="button"&&!(i.tagName==="A"&&i.href)},w=a.useRef(!1),P=fe(function(i){L&&!w.current&&q&&C.current&&i.key===" "&&(w.current=!0,i.persist(),C.current.stop(i,function(){C.current.start(i)})),i.target===i.currentTarget&&o()&&i.key===" "&&i.preventDefault(),s&&s(i),i.target===i.currentTarget&&o()&&i.key==="Enter"&&!x&&(i.preventDefault(),f&&f(i))}),Te=fe(function(i){L&&i.key===" "&&C.current&&q&&!i.defaultPrevented&&(w.current=!1,i.persist(),C.current.stop(i,function(){C.current.pulsate(i)})),D&&D(i),f&&i.target===i.currentTarget&&o()&&i.key===" "&&!i.defaultPrevented&&f(i)}),oe=j;oe==="button"&&Y.href&&(oe="a");var ae={};oe==="button"?(ae.type=se,ae.disabled=x):((oe!=="a"||!Y.href)&&(ae.role="button"),ae["aria-disabled"]=x);var $=Pe(k,r),ge=Pe(Ce,H),ne=Pe($,ge),We=a.useState(!1),Mt=We[0],$t=We[1];a.useEffect(function(){$t(!0)},[]);var It=Mt&&!p&&!x;return a.createElement(oe,re({className:J(h.root,n,q&&[h.focusVisible,A],x&&h.disabled),onBlur:le,onClick:f,onFocus:Be,onKeyDown:P,onKeyUp:Te,onMouseDown:Me,onMouseLeave:Ie,onMouseUp:$e,onDragLeave:xe,onTouchEnd:Ne,onTouchMove:De,onTouchStart:U,ref:ne,tabIndex:x?-1:W},ae,Y),v,It?a.createElement(it,re({ref:C,center:d},ie)):null)});const ct=me(st,{name:"MuiButtonBase"})(lt);var dt=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:ye(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:ye(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:ye(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},pt=a.forwardRef(function(e,r){var l=e.edge,k=l===void 0?!1:l,u=e.children,d=e.classes,v=e.className,h=e.color,n=h===void 0?"default":h,T=e.disabled,j=T===void 0?!1:T,g=e.disableFocusRipple,x=g===void 0?!1:g,N=e.size,p=N===void 0?"medium":N,b=be(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(ct,re({className:J(d.root,v,n!=="default"&&d["color".concat(Re(n))],j&&d.disabled,p==="small"&&d["size".concat(Re(p))],{start:d.edgeStart,end:d.edgeEnd}[k]),centerRipple:!0,focusRipple:!x,disabled:j,ref:r},b),a.createElement("span",{className:d.label},u))});const ut=me(dt,{name:"MuiIconButton"})(pt);var ht=a.createContext();function xt(){return a.useContext(ht)}var gt={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},ft=a.forwardRef(function(e,r){var l=e.autoFocus,k=e.checked,u=e.checkedIcon,d=e.classes,v=e.className,h=e.defaultChecked,n=e.disabled,T=e.icon,j=e.id,g=e.inputProps,x=e.inputRef,N=e.name,p=e.onBlur,b=e.onChange,F=e.onFocus,R=e.readOnly,L=e.required,A=e.tabIndex,c=e.type,f=e.value,S=be(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),V=At({controlled:k,default:!!h,name:"SwitchBase",state:"checked"}),s=_t(V,2),D=s[0],_=s[1],z=xt(),X=function(m){F&&F(m),z&&z.onFocus&&z.onFocus(m)},O=function(m){p&&p(m),z&&z.onBlur&&z.onBlur(m)},E=function(m){var W=m.target.checked;_(W),b&&b(m,W)},M=n;z&&typeof M>"u"&&(M=z.disabled);var B=c==="checkbox"||c==="radio";return a.createElement(ut,re({component:"span",className:J(d.root,v,D&&d.checked,M&&d.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:X,onBlur:O,ref:r},S),a.createElement("input",re({autoFocus:l,checked:k,defaultChecked:h,className:d.input,disabled:M,id:B&&j,name:N,onChange:E,readOnly:R,ref:x,required:L,tabIndex:A,type:c,value:f},g)),D?u:T)});const mt=me(gt,{name:"PrivateSwitchBase"})(ft);var bt=function(e){return{root:{display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:e.palette.type==="light"?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:e.palette.type==="light"?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:ye(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:ye(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.type==="light"?.38:.3}}},yt=a.forwardRef(function(e,r){var l=e.classes,k=e.className,u=e.color,d=u===void 0?"secondary":u,v=e.edge,h=v===void 0?!1:v,n=e.size,T=n===void 0?"medium":n,j=be(e,["classes","className","color","edge","size"]),g=a.createElement("span",{className:l.thumb});return a.createElement("span",{className:J(l.root,k,{start:l.edgeStart,end:l.edgeEnd}[h],T==="small"&&l["size".concat(Re(T))])},a.createElement(mt,re({type:"checkbox",icon:g,checkedIcon:g,classes:{root:J(l.switchBase,l["color".concat(Re(d))]),input:l.input,checked:l.checked,disabled:l.disabled},ref:r},j)),a.createElement("span",{className:l.track}))});const vt=me(bt,{name:"MuiSwitch"})(yt),wt=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.243",height:"10.243",viewBox:"0 0 16.243 16.243",children:t.jsx("g",{id:"Group_4723","data-name":"Group 4723",transform:"translate(2.121 2.121)",children:t.jsxs("g",{id:"Group_4716","data-name":"Group 4716",transform:"translate(0)",children:[t.jsx("line",{id:"Line_1079","data-name":"Line 1079",x2:"16.97",transform:"translate(0 12) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"}),t.jsx("line",{id:"Line_1080","data-name":"Line 1080",y2:"16.97",transform:"translate(0 0) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"})]})})}),kt=Ke.coreContractChain;function jt({details:e}){const{delegatees:r,channelDetails:l}=ce(n=>n.admin),{chainId:k}=Ye(),u=kt===k;let d;d=r.filter(n=>(u?n.channel:n.alias_address)==e.channelAddress)[0],d||(d=l);const v=qe(),h=({test:n})=>d&&t.jsx(Lt,{notificationTitle:n==null?void 0:n.asub,notificationBody:n==null?void 0:n.amsg,cta:n==null?void 0:n.acta,app:d.name,icon:d.icon,image:n==null?void 0:n.aimg,chainName:Ot[k],theme:v.scheme});return t.jsxs(Ae,{children:[t.jsx(I,{align:"flex-start",margin:"30px 0px 10px 0px",children:t.jsx(Q,{weight:"700",size:"12px",spacing:"normal",color:"#575D73",children:"PREVIEW NOTIFICATION"})}),t.jsx(h,{test:e})]})}y.div`
  top: 0;
  left: 0;
  right: 0;
  background: ${e=>e.theme.scrollBg};
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;let Ae,_e,Le,Oe;Ae=y.div`
  margin: 0;
  width: 100%;
`,_e=Ke.coreContractChain,ve=y(vt).attrs(()=>({classes:{root:"root",switchBase:"switchBase",thumb:"thumb",track:"track",checked:"checked"},disableRipple:!0,focusVisibleClassName:"focusVisible"}))`
  &.root {
    width: 42px;
    height: 20px;
    padding: 0px;
  }

  .switchBase {
    padding: 0px;
    margin: 4px;
    transition-duration: 300ms;

    &.checked {
      transform: translateX(22px);
      color: white;
      & + .track {
        background-color: #cf1c84;
        opacity: 1;
        border: none;
      }
    }

    &.thumb {
      color: #52d869;
    }
  }

  .thumb {
    box-sizing: border-box;
    width: 12px;
    height: 12px;
  }

  & .track {
    border-radius: 13px;
    background-color: #a0a3b1;
    opacity: 1;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .checked {
  }
  .focusVisible {
  }
`,Le=[{value:"1",label:"Broadcast"},{value:"3",label:"Targeted"},{value:"4",label:"Subset"}],Oe=["Enter",","],et=function(){const e=qe(),r=Wt(425),{account:l,provider:k,chainId:u,wallet:d}=Ye(),{userPushSDKInstance:v}=ce(o=>o.user);ce(o=>o.contracts);const{channelDetails:h,delegatees:n,aliasDetails:{aliasEthAddr:T}}=ce(o=>o.admin),{CHANNNEL_DEACTIVATED_STATE:j}=ce(o=>o.channels),{canSend:g}=ce(o=>o.canSend),x=_e===u,{handleConnectWalletAndEnableProfile:N}=a.useContext(Ut),[p,b]=a.useState(0),[F,R]=a.useState(""),[L,A]=a.useState(l),[c,f]=a.useState([]),[S,V]=a.useState(""),[s,D]=a.useState("1"),[_,z]=a.useState(""),[X,O]=a.useState(!1),[E,M]=a.useState(""),[B,m]=a.useState(""),[W,ie]=a.useState(!1),[K,se]=a.useState(""),[Y,H]=a.useState(!1),[je,C]=a.useState(""),[Se,q]=a.useState(""),[te,pe]=a.useState([]),ue=a.useMemo(()=>n?n.find(o=>o.channel===F):null,[n,F]),he=a.useMemo(()=>{if(ue){const{channel_settings:o}=ue;if(o!==null)return JSON.parse(o)}return null},[ue]),Ce=a.useMemo(()=>{const o={label:"Default",value:"",isRange:!1};if(he){const w=he.map(P=>({label:P.type===3?t.jsxs(Ve,{children:[t.jsx("div",{children:P.description}),t.jsx(Ze,{children:"Multi-Range"})]}):P.type===2?t.jsxs(Ve,{children:[t.jsx("div",{children:P.description}),t.jsx(Ze,{children:"Range"})]}):P.description,value:P.index,isRange:P.type===2}));return[o,...w]}return[o]},[he]),G=()=>{const o=Je.ChannelSettings;window.open(o,"_blank")};a.useEffect(()=>{if(g!==1){const o=window.location.origin;window.location.replace(`${o}${Je.Channels}`)}});const Me=h?h.channelState===j:!1;let xe;x&&n?xe=n.length===1&&n[0].address===l||!n.length:!x&&n&&(xe=n.length===1&&n[0].alias_address===l||!n.length),a.useEffect(()=>{l&&(!n||!n.length?R(l):(pe(n.map(o=>({value:x?o.channel:o.alias_address,label:t.jsxs(Rt,{children:[t.jsx("img",{src:o.icon,alt:""}),t.jsx("div",{style:{letterSpacing:"0"},children:o.name})]})}))),R(x?n[0].channel:n[0].alias_address)))},[n,l]);const $e=o=>{if(Oe.includes(o.key)){o.preventDefault(),f(P=>Array.from(new Set([...P,S])));const w=Array.from(new Set([...c,S]));A(w.join()),V("")}},Ie=o=>{const w=c.filter(P=>P!==o);A(w.join()),f(w)};a.useEffect(()=>{const o=["1"];f([]),o.includes(s)?A(l):A("")},[s]);const U=Xt(5e3),Ne=()=>{let o=!0;return s==="4"&&c.length<2&&(U.showMessageToast({toastTitle:"Error",toastMessage:"Please enter at least two recipients in order to use subset notifications type",toastType:"ERROR",getToastIcon:w=>t.jsx(de,{size:w,color:"red"})}),o=!1),o},De=async o=>{o.preventDefault();let w=v;if(!w.signer&&(w=await N({wallet:d}),!w)||(U.showLoaderToast({loaderMessage:"Preparing Notification"}),!Ne()))return;b(1);let P=_,Te=E,oe=B,ae=K;if(s==="1"||s==="2"||s==="3"||s==="4"||s==="5"){if(X&&le(_)){C("Please enter a valid notification subject"),b(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(de,{size:$,color:"red"})});return}if(Y&&le(K)){C("Please enter a valid media URL"),b(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(de,{size:$,color:"red"})});return}if(W&&le(B)){C("Please enter a valid CTA link"),b(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(de,{size:$,color:"red"})});return}if(le(E)){C("Please enter a valid notification message"),b(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(de,{size:$,color:"red"})});return}}if(s==="1"||s==="2"||s==="3"||s==="4"||s==="5")try{let $;s==="4"?$=c.map(ne=>Fe(ne,u)):$=[Fe(L,u)],s==="1"&&($=["*"]);const ge=Fe(F,u);await w.channel.send($,{notification:{title:P,body:Te},payload:{title:P,body:Te,cta:oe,embed:ae,category:Se},channel:ge}),U.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ne=>t.jsx(Qe,{size:ne,color:"green"})}),b(2),D("1"),C("Notification Sent"),U.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ne=>t.jsx(Qe,{size:ne,color:"green"})}),D("1"),M(""),O(!1),z(""),ie(!1),m(""),H(!1),se(""),C("")}catch($){C("Send Notification Failed, please try again"),U.showMessageToast({toastTitle:"Error",toastMessage:"Sending Notification Failed: "+$,toastType:"ERROR",getToastIcon:ge=>t.jsx(de,{size:ge,color:"red"})}),b(0),console.error($)}},le=o=>o.trim().length==0;let Be=_!==""||E!==""||B!==""||K!=="";return t.jsxs(St,{children:[t.jsx(zt,{children:t.jsx(Ge,{padding:r?"0px 0px 0px":"10px 20px 10px",children:t.jsxs(I,{align:"center",children:[t.jsx(Kt,{textTransform:"none",weight:r?"500":"400",size:r?"25px":"32px",color:e.color,textAlign:"center",margin:r?"0px 0px":"20px 0px",style:{width:"100%"},children:"Send Notification"}),t.jsx(Q,{color:e.default.secondaryColor,weight:r?"300":"400",size:"14px",textTransform:"none",spacing:"normal",margin:r?"10px 0px":"0px 0px",textAlign:"center",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]})})}),!Me&&t.jsx(Yt,{children:t.jsx(Tt,{children:t.jsx(I,{align:"stretch",children:t.jsxs(qt,{flex:"1",direction:"column",justify:"center",margin:"0px",size:"1.1rem",width:"100%",onSubmit:De,children:[t.jsxs(I,{flex:"1",self:"stretch",align:"stretch",width:"100%",children:[!xe&&t.jsx(I,{flex:"1",justify:"flex-start",align:"stretch",children:t.jsx(we,{children:t.jsx(ke,{options:te,onChange:o=>{o.value==T?(R(l),A(l)):(R(o.value),A(o.value))},placeholder:"Select a Channel",value:te[0]})})}),t.jsx(Z,{display:"none",value:s,onChange:o=>{D(o.target.value)}}),t.jsx(I,{flex:"1",justify:"flex-start",align:"stretch",margin:"40px 0px 0px 0px",children:t.jsx(we,{children:t.jsx(ke,{options:Le,onChange:o=>{D(o.value),console.debug(o)},value:s})})}),t.jsx(Z,{display:"none",value:s,onChange:o=>{D(o.target.value)}}),s&&t.jsxs(Et,{children:[t.jsxs(Ee,{children:[t.jsx(Q,{weight:r?"500":"600",textTransform:"none",size:r?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Title"}),t.jsx(ve,{checked:X,onChange:()=>O(!X)})]}),t.jsxs(Ee,{children:[t.jsx(Q,{weight:r?"500":"600",textTransform:"none",size:r?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Media URL"}),t.jsx(ve,{checked:Y,onChange:()=>H(!Y)})]}),t.jsxs(Ee,{children:[t.jsx(Q,{weight:r?"500":"600",textTransform:"none",size:r?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"CTA Link"}),t.jsx(ve,{checked:W,onChange:()=>ie(!W)})]})]}),(s==="2"||s==="3"||s==="5")&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"Recipient Wallet Address"}),t.jsx(Z,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:L,onChange:o=>{A(o.target.value)}})]}),s==="4"&&t.jsxs(t.Fragment,{children:[t.jsx(Ct,{children:c.map(o=>t.jsxs("span",{children:[o,t.jsx("i",{onClick:()=>Ie(o),children:t.jsx(wt,{})})]},o))}),t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"Enter Recipients Wallet Addresses"}),t.jsx(Z,{required:c.length===0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:S,onKeyPress:$e,onChange:o=>{const w=o.target.value.trim();console.debug(w),console.debug(S),V(o.target.value)}}),t.jsx(Q,{size:"13px",margin:"7px 0px 0px 0px",color:e.default.secondaryColor,children:"Enter recipients wallet addresses separated by a comma or by pressing the enter key"})]})]}),s&&X&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"Notification Title"}),t.jsx(Q,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:80-_.length})]}),t.jsx(Z,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:_,onChange:o=>{z(o.target.value.slice(0,80))}})]}),s&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"Notification Message"}),t.jsx(Q,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:500-E.length})]}),t.jsx(Gt,{rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",color:e.default.color,bg:e.default.bg,overflow:"auto",value:E,onChange:o=>{M(o.target.value.slice(0,500))},autocomplete:"off"})]}),s&&t.jsx(t.Fragment,{children:t.jsxs(I,{flex:"1",justify:"flex-start",align:"stretch",margin:"30px 0px 15px 0px",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",margin:"0px 0px 7px 0px",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"Notification Setting Type"}),t.jsx(Ht,{color:e.default.primaryPushThemeTextColor,fontSize:"13px",margin:"0px 10px 0px 0px",fontWeight:"600",onClick:G,cursor:"pointer",children:"Manage Settings"})]}),t.jsx(we,{children:t.jsx(ke,{options:Ce,onChange:o=>{q(String(o.value))},value:Ce[0]})})]})}),s&&Y&&t.jsxs(I,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"Media URL"}),t.jsx(Z,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:K,onChange:o=>{se(o.target.value)}})]}),s&&W&&t.jsxs(I,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ee,{style:{color:e.color,fontWeight:r?"500":"600",fontSize:r?"15px":"14px"},children:"CTA Link"}),t.jsx(Z,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,radius:"12px",focusBorder:"1px solid #657795",value:B,onChange:o=>{m(o.target.value)}})]}),je&&p!=1&&t.jsx(I,{margin:"30px 0px 0px 0px",width:"100%",padding:"1.5rem 0",radius:"12px",bg:"#F5F5FA",children:t.jsx("div",{style:{color:"#CF1C84",fontSize:"0.875rem",textAlign:"center"},children:je})})]}),Be&&t.jsx(jt,{details:{channelAddress:F,acta:B,aimg:K,amsg:E,asub:_,type:s}}),s&&t.jsx(Jt,{margin:"spacing-xxxl spacing-none spacing-none spacing-none",children:t.jsxs(Qt,{disabled:p==1,variant:"primary",size:"large",children:[p==1&&t.jsx(Zt,{type:eo.SEAMLESS,spinnerSize:24,spinnerColor:"#FFF"}),p!=1&&t.jsx(Z,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",size:"16px",type:"submit",value:"Send Notification"})]})})]})})})})]})};const St=y(Vt)``;y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,y.div`
  // background:red;
  // width:50%;
`,y.div`
  margin: 0px 10px;
`;const we=y.div`
  .is-open {
    // margin-bottom: 130px;
  }
`,Ct=y.div`
  width: 100%;
  padding: 0px 20px;
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 7px 15px;
  span {
    color: white;
    background: #e20880;
    padding: 6px 10px;
    border-radius: 5px;
    i {
      cursor: pointer;
      margin-left: 25px;
    }
  }
`,Tt=y(Ge)`
  padding-top: 20px;
  font-weight: 400;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    padding-top: 0px;
    width: 100%;
  }
`;y.div`
  color: ${e=>e.theme.color||"#000"};
  padding: 10px;
  letter-spacing: normal;
  font-size: 14px;
`;const ee=y.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: normal;
  color: #1e1e1e;
`,ke=y(oo)`
  .Dropdown-control {
    background-color: ${e=>e.theme.default.bg};
    color: ${e=>e.theme.default.color};
    border: 1px solid ${e=>e.theme.snfBorder};
    border-radius: 12px;
    flex: 1;
    outline: none;
    height: 50px;
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    line-height: 150%;
    align-items: center;
    padding: 0.75rem 1.18rem;
    @media (max-width: 425px) {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .Dropdown-arrow {
    top: 20px;
    bottom: 0;
    border-color: #f #000 #000;
  }
  .Dropdown-menu {
    border-color: #bac4d6;
    border-radius: 12px;
    .is-selected {
      background-color: #d00775;
      color: #fff;
    }
  }

  .Dropdown-option {
    background-color: ${e=>e.theme.default.bg};
    color: ${e=>e.theme.default.color};
    font-size: 16px;
    padding: 20px 20px;
  }
  .Dropdown-option:hover {
    background-color: #d00775;
    color: white;
  }
`;y(ke)`
  .Dropdown-control {
    color: #000;
    background: #fafafa;
    border: 0px;
    padding: 15px 52px 15px 10px;
  }
  .Dropdown-arrow {
    border-color: #000 transparent transparent;
    top: 30px;
  }
  .Dropdown-menu {
    border: 0px;
    background-color: #fafafa;
  }
  .Dropdown-option {
    background-color: #fafafa;
    color: black;
    transition: 300ms;
  }
  .Dropdown-option:hover {
    background-color: #e7e6e6;
  }
  .Dropdown-option.is-selected {
    background-color: #f1efef;
  }
`,y(we)`
  // margin-bottom: 20px;
  border: 1px solid rgba(169, 169, 169, 0.5);
`;const Rt=y.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    color: ${e=>e.theme.default.color};
    font-size: 16px;
    letter-spacing: normal;
  }
`,zt=y.div`
  margin: 40px auto 0px auto;
  width: 55%;
  @media (max-width: 1224px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0px auto 0px auto;
  }
`,Et=y(He)`
  margin: 40px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  }
`,Ee=y(He)`
  box-sizing: border-box;
  margin: 15px 0px;
  width: 10em;
  background: ${e=>e.theme.snfToggleBg};
  flex: none;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  direction: row;
  justify-content: space-between;
  @media (max-width: 640px) {
    width: 100%;
    margin: 5px 0px;
  }
`,Ve=y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`});export{ve as I,et as S,io as __tla};
