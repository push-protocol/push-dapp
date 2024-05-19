import{b0 as o,dd as Q,g2 as ge,d7 as fe,d5 as me,fR as _t,bt as se,dc as Ft,d2 as De,d4 as Pt,d8 as be,df as Te,da as At,b4 as t,aV as b,bg as Xe,bF as de,a$ as qe,a_ as Ke,b7 as I,aZ as ee,dq as Lt,g3 as Ot,bj as Vt,cD as He,cW as Ye,be as Wt,b$ as Ut,c4 as Xt,cl as Ge,bJ as qt,b6 as Kt,bd as Ht,cv as Yt,bS as te,cq as Gt,g4 as Jt,ba as Zt,bb as Qt,bV as pe,ci as _e,bU as Je,__tla as ea}from"./index-D72J8Wrt.js";import{D as ta,__tla as aa}from"./index-CAMJGRfu.js";import{T as oa,a as Ze,__tla as na}from"./Tag-CxxFfrbk.js";import{_ as ra,__tla as ia}from"./TransitionGroupContext-B5cYryck.js";let ye,Qe,sa=Promise.all([(()=>{try{return ea}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ia}catch{}})()]).then(async()=>{var et=typeof window>"u"?o.useEffect:o.useLayoutEffect;function tt(e){var n=e.classes,l=e.pulsate,C=l===void 0?!1:l,g=e.rippleX,p=e.rippleY,y=e.rippleSize,s=e.in,c=e.onExited,E=c===void 0?function(){}:c,R=e.timeout,h=o.useState(!1),w=h[0],k=h[1],u=Q(n.ripple,n.rippleVisible,C&&n.ripplePulsate),M={width:y,height:y,top:-(y/2)+p,left:-(y/2)+g},_=Q(n.child,w&&n.childLeaving,C&&n.childPulsate),F=ge(E);return et(function(){if(!s){k(!0);var j=setTimeout(F,R);return function(){clearTimeout(j)}}},[F,s,R]),o.createElement("span",{className:u,style:M},o.createElement("span",{className:_}))}var Ce=550,at=80,ot=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(Ce,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(Ce,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},nt=o.forwardRef(function(e,n){var l=e.center,C=l===void 0?!1:l,g=e.classes,p=e.className,y=me(e,["center","classes","className"]),s=o.useState([]),c=s[0],E=s[1],R=o.useRef(0),h=o.useRef(null);o.useEffect(function(){h.current&&(h.current(),h.current=null)},[c]);var w=o.useRef(!1),k=o.useRef(null),u=o.useRef(null),M=o.useRef(null);o.useEffect(function(){return function(){clearTimeout(k.current)}},[]);var _=o.useCallback(function(d){var f=d.pulsate,B=d.rippleX,i=d.rippleY,D=d.rippleSize,N=d.cb;E(function(V){return[].concat(_t(V),[o.createElement(tt,{key:R.current,classes:g,timeout:Ce,pulsate:f,rippleX:B,rippleY:i,rippleSize:D})])}),R.current+=1,h.current=N},[g]),F=o.useCallback(function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},B=arguments.length>2?arguments[2]:void 0,i=f.pulsate,D=i===void 0?!1:i,N=f.center,V=N===void 0?C||f.pulsate:N,S=f.fakeElement,Y=S===void 0?!1:S;if(d.type==="mousedown"&&w.current){w.current=!1;return}d.type==="touchstart"&&(w.current=!0);var $=Y?null:M.current,A=$?$.getBoundingClientRect():{width:0,height:0,left:0,top:0},v,L,x;if(V||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(A.width/2),L=Math.round(A.height/2);else{var X=d.touches?d.touches[0]:d,K=X.clientX,oe=X.clientY;v=Math.round(K-A.left),L=Math.round(oe-A.top)}if(V)x=Math.sqrt((2*Math.pow(A.width,2)+Math.pow(A.height,2))/3),x%2===0&&(x+=1);else{var G=Math.max(Math.abs(($?$.clientWidth:0)-v),v)*2+2,J=Math.max(Math.abs(($?$.clientHeight:0)-L),L)*2+2;x=Math.sqrt(Math.pow(G,2)+Math.pow(J,2))}d.touches?u.current===null&&(u.current=function(){_({pulsate:D,rippleX:v,rippleY:L,rippleSize:x,cb:B})},k.current=setTimeout(function(){u.current&&(u.current(),u.current=null)},at)):_({pulsate:D,rippleX:v,rippleY:L,rippleSize:x,cb:B})},[C,_]),j=o.useCallback(function(){F({},{pulsate:!0})},[F]),P=o.useCallback(function(d,f){if(clearTimeout(k.current),d.type==="touchend"&&u.current){d.persist(),u.current(),u.current=null,k.current=setTimeout(function(){P(d,f)});return}u.current=null,E(function(B){return B.length>0?B.slice(1):B}),h.current=f},[]);return o.useImperativeHandle(n,function(){return{pulsate:j,start:F,stop:P}},[j,F,P]),o.createElement("span",se({className:Q(g.root,p),ref:M},y),o.createElement(oa,{component:null,exit:!0},c))});const rt=fe(ot,{flip:!1,name:"MuiTouchRipple"})(o.memo(nt));var it={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},st=o.forwardRef(function(e,n){var l=e.action,C=e.buttonRef,g=e.centerRipple,p=g===void 0?!1:g,y=e.children,s=e.classes,c=e.className,E=e.component,R=E===void 0?"button":E,h=e.disabled,w=h===void 0?!1:h,k=e.disableRipple,u=k===void 0?!1:k,M=e.disableTouchRipple,_=M===void 0?!1:M,F=e.focusRipple,j=F===void 0?!1:F,P=e.focusVisibleClassName,d=e.onBlur,f=e.onClick,B=e.onFocus,i=e.onFocusVisible,D=e.onKeyDown,N=e.onKeyUp,V=e.onMouseDown,S=e.onMouseLeave,Y=e.onMouseUp,$=e.onTouchEnd,A=e.onTouchMove,v=e.onTouchStart,L=e.onDragLeave,x=e.tabIndex,X=x===void 0?0:x,K=e.TouchRippleProps,oe=e.type,G=oe===void 0?"button":oe,J=me(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Z=o.useRef(null);function H(){return Pt.findDOMNode(Z.current)}var O=o.useRef(null),ke=o.useState(!1),W=ke[0],le=ke[1];w&&W&&le(!1);var ne=Ft(),ue=ne.isFocusVisible,je=ne.onBlurVisible,ze=ne.ref;o.useImperativeHandle(l,function(){return{focusVisible:function(){le(!0),Z.current.focus()}}},[]),o.useEffect(function(){W&&j&&!u&&O.current.pulsate()},[u,j,W]);function q(r,We){var Bt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_;return ge(function(Ue){We&&We(Ue);var Dt=Bt;return!Dt&&O.current&&O.current[r](Ue),!0})}var he=q("start",V),Ee=q("stop",L),Me=q("stop",Y),U=q("stop",function(r){W&&r.preventDefault(),S&&S(r)}),Ne=q("start",v),$e=q("stop",$),ce=q("stop",A),Ie=q("stop",function(r){W&&(je(r),le(!1)),d&&d(r)},!1),a=ge(function(r){Z.current||(Z.current=r.currentTarget),ue(r)&&(le(!0),i&&i(r)),B&&B(r)}),T=function(){var r=H();return R&&R!=="button"&&!(r.tagName==="A"&&r.href)},z=o.useRef(!1),Se=ge(function(r){j&&!z.current&&W&&O.current&&r.key===" "&&(z.current=!0,r.persist(),O.current.stop(r,function(){O.current.start(r)})),r.target===r.currentTarget&&T()&&r.key===" "&&r.preventDefault(),D&&D(r),r.target===r.currentTarget&&T()&&r.key==="Enter"&&!w&&(r.preventDefault(),f&&f(r))}),Be=ge(function(r){j&&r.key===" "&&O.current&&W&&!r.defaultPrevented&&(z.current=!1,r.persist(),O.current.stop(r,function(){O.current.pulsate(r)})),N&&N(r),f&&r.target===r.currentTarget&&T()&&r.key===" "&&!r.defaultPrevented&&f(r)}),re=R;re==="button"&&J.href&&(re="a");var m={};re==="button"?(m.type=G,m.disabled=w):((re!=="a"||!J.href)&&(m.role="button"),m["aria-disabled"]=w);var xe=De(C,n),ie=De(ze,Z),Mt=De(xe,ie),Ve=o.useState(!1),Nt=Ve[0],$t=Ve[1];o.useEffect(function(){$t(!0)},[]);var It=Nt&&!u&&!w;return o.createElement(re,se({className:Q(s.root,c,W&&[s.focusVisible,P],w&&s.disabled),onBlur:Ie,onClick:f,onFocus:a,onKeyDown:Se,onKeyUp:Be,onMouseDown:he,onMouseLeave:U,onMouseUp:Me,onDragLeave:Ee,onTouchEnd:$e,onTouchMove:ce,onTouchStart:Ne,ref:Mt,tabIndex:w?-1:X},m,J),y,It?o.createElement(rt,se({ref:O,center:p},K)):null)});const lt=fe(it,{name:"MuiButtonBase"})(st);var ct=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:be(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:be(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:be(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},dt=o.forwardRef(function(e,n){var l=e.edge,C=l===void 0?!1:l,g=e.children,p=e.classes,y=e.className,s=e.color,c=s===void 0?"default":s,E=e.disabled,R=E===void 0?!1:E,h=e.disableFocusRipple,w=h===void 0?!1:h,k=e.size,u=k===void 0?"medium":k,M=me(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(lt,se({className:Q(p.root,y,c!=="default"&&p["color".concat(Te(c))],R&&p.disabled,u==="small"&&p["size".concat(Te(u))],{start:p.edgeStart,end:p.edgeEnd}[C]),centerRipple:!0,focusRipple:!w,disabled:R,ref:n},M),o.createElement("span",{className:p.label},g))});const pt=fe(ct,{name:"MuiIconButton"})(dt);var ut=o.createContext();function ht(){return o.useContext(ut)}var xt={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},gt=o.forwardRef(function(e,n){var l=e.autoFocus,C=e.checked,g=e.checkedIcon,p=e.classes,y=e.className,s=e.defaultChecked,c=e.disabled,E=e.icon,R=e.id,h=e.inputProps,w=e.inputRef,k=e.name,u=e.onBlur,M=e.onChange,_=e.onFocus,F=e.readOnly,j=e.required,P=e.tabIndex,d=e.type,f=e.value,B=me(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),i=At({controlled:C,default:!!s,name:"SwitchBase",state:"checked"}),D=ra(i,2),N=D[0],V=D[1],S=ht(),Y=function(x){_&&_(x),S&&S.onFocus&&S.onFocus(x)},$=function(x){u&&u(x),S&&S.onBlur&&S.onBlur(x)},A=function(x){var X=x.target.checked;V(X),M&&M(x,X)},v=c;S&&typeof v>"u"&&(v=S.disabled);var L=d==="checkbox"||d==="radio";return o.createElement(pt,se({component:"span",className:Q(p.root,y,N&&p.checked,v&&p.disabled),disabled:v,tabIndex:null,role:void 0,onFocus:Y,onBlur:$,ref:n},B),o.createElement("input",se({autoFocus:l,checked:C,defaultChecked:s,className:p.input,disabled:v,id:L&&R,name:k,onChange:A,readOnly:F,ref:w,required:j,tabIndex:P,type:d,value:f},h)),N?g:E)});const ft=fe(xt,{name:"PrivateSwitchBase"})(gt);var mt=function(e){return{root:{display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:e.palette.type==="light"?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:e.palette.type==="light"?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:be(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:be(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.type==="light"?.38:.3}}},bt=o.forwardRef(function(e,n){var l=e.classes,C=e.className,g=e.color,p=g===void 0?"secondary":g,y=e.edge,s=y===void 0?!1:y,c=e.size,E=c===void 0?"medium":c,R=me(e,["classes","className","color","edge","size"]),h=o.createElement("span",{className:l.thumb});return o.createElement("span",{className:Q(l.root,C,{start:l.edgeStart,end:l.edgeEnd}[s],E==="small"&&l["size".concat(Te(E))])},o.createElement(ft,se({type:"checkbox",icon:h,checkedIcon:h,classes:{root:Q(l.switchBase,l["color".concat(Te(p))]),input:l.input,checked:l.checked,disabled:l.disabled},ref:n},R)),o.createElement("span",{className:l.track}))});const yt=fe(mt,{name:"MuiSwitch"})(bt),vt=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.243",height:"10.243",viewBox:"0 0 16.243 16.243",children:t.jsx("g",{id:"Group_4723","data-name":"Group 4723",transform:"translate(2.121 2.121)",children:t.jsxs("g",{id:"Group_4716","data-name":"Group 4716",transform:"translate(0)",children:[t.jsx("line",{id:"Line_1079","data-name":"Line 1079",x2:"16.97",transform:"translate(0 12) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"}),t.jsx("line",{id:"Line_1080","data-name":"Line 1080",y2:"16.97",transform:"translate(0 0) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"})]})})}),wt=Xe.coreContractChain;function kt({details:e}){const{delegatees:n,channelDetails:l}=de(c=>c.admin),{chainId:C}=qe(),g=wt===C;let p;p=n.filter(c=>(g?c.channel:c.alias_address)==e.channelAddress)[0],p||(p=l);const y=Ke(),s=({test:c})=>p&&t.jsx(Lt,{notificationTitle:c==null?void 0:c.asub,notificationBody:c==null?void 0:c.amsg,cta:c==null?void 0:c.acta,app:p.name,icon:p.icon,image:c==null?void 0:c.aimg,chainName:Ot[C],theme:y.scheme});return t.jsxs(Fe,{children:[t.jsx(I,{align:"flex-start",margin:"30px 0px 10px 0px",children:t.jsx(ee,{weight:"700",size:"12px",spacing:"0.2em",color:"#575D73",children:"PREVIEW NOTIFICATION"})}),t.jsx(s,{test:e})]})}b.div`
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
`;let Fe,Pe,Ae,Le;Fe=b.div`
  margin: 0;
  width: 100%;
`,Pe=Xe.coreContractChain,ye=b(yt).attrs(()=>({classes:{root:"root",switchBase:"switchBase",thumb:"thumb",track:"track",checked:"checked"},disableRipple:!0,focusVisibleClassName:"focusVisible"}))`
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
`,Ae=[{value:"1",label:"Broadcast"},{value:"3",label:"Targeted"},{value:"4",label:"Subset"}],Le=["Enter",","],Qe=function(){const e=Ke(),n=Ut(425),{account:l,provider:C,chainId:g}=qe(),{userPushSDKInstance:p}=de(a=>a.user);de(a=>a.contracts);const{channelDetails:y,delegatees:s,aliasDetails:{aliasEthAddr:c}}=de(a=>a.admin),{CHANNNEL_DEACTIVATED_STATE:E}=de(a=>a.channels),{canSend:R}=de(a=>a.canSend),h=Pe===g,{handleConnectWallet:w}=o.useContext(Xt),[k,u]=o.useState(0),[M,_]=o.useState(""),[F,j]=o.useState(l),[P,d]=o.useState([]),[f,B]=o.useState(""),[i,D]=o.useState("1"),[N,V]=o.useState(""),[S,Y]=o.useState(!1),[$,A]=o.useState(""),[v,L]=o.useState(""),[x,X]=o.useState(!1),[K,oe]=o.useState(""),[G,J]=o.useState(!1),[Z,H]=o.useState(""),[O,ke]=o.useState(""),[W,le]=o.useState([]),ne=o.useMemo(()=>s?s.find(a=>a.channel===M):null,[s,M]),ue=o.useMemo(()=>{if(ne){const{channel_settings:a}=ne;if(a!==null)return JSON.parse(a)}return null},[ne]),je=o.useMemo(()=>{const a={label:"Default",value:"",isRange:!1};if(ue){const T=ue.map(z=>({label:z.type===3?t.jsxs(Oe,{children:[t.jsx("div",{children:z.description}),t.jsx(Ze,{children:"Multi-Range"})]}):z.type===2?t.jsxs(Oe,{children:[t.jsx("div",{children:z.description}),t.jsx(Ze,{children:"Range"})]}):z.description,value:z.index,isRange:z.type===2}));return[a,...T]}return[a]},[ue]),ze=()=>{const a=Ge.ChannelSettings;window.open(a,"_blank")};o.useEffect(()=>{if(R!==1){const a=window.location.origin;window.location.replace(`${a}${Ge.Channels}`)}});const q=y?y.channelState===E:!1;let he;h&&s?he=s.length===1&&s[0].address===l||!s.length:!h&&s&&(he=s.length===1&&s[0].alias_address===l||!s.length),o.useEffect(()=>{l&&(!s||!s.length?_(l):(le(s.map(a=>({value:h?a.channel:a.alias_address,label:t.jsxs(Ct,{children:[t.jsx("img",{src:a.icon,alt:""}),t.jsx("div",{style:{letterSpacing:"0"},children:a.name})]})}))),_(h?s[0].channel:s[0].alias_address)))},[s,l]);const Ee=a=>{if(Le.includes(a.key)){a.preventDefault(),d(z=>Array.from(new Set([...z,f])));const T=Array.from(new Set([...P,f]));j(T.join()),B("")}},Me=a=>{const T=P.filter(z=>z!==a);j(T.join()),d(T)};o.useEffect(()=>{const a=["1"];d([]),a.includes(i)?j(l):j("")},[i]);const U=qt(5e3),Ne=()=>{let a=!0;return i==="4"&&P.length<2&&(U.showMessageToast({toastTitle:"Error",toastMessage:"Please enter at least two recipients in order to use subset notifications type",toastType:"ERROR",getToastIcon:T=>t.jsx(pe,{size:T,color:"red"})}),a=!1),a},$e=async a=>{a.preventDefault();let T=p;if(!T.signer&&(T=await w(),!T)||(U.showLoaderToast({loaderMessage:"Preparing Notification"}),!Ne()))return;u(1);let z=N,Se=$,Be=v,re=K;if(i==="1"||i==="2"||i==="3"||i==="4"||i==="5"){if(S&&ce(N)){H("Please enter a valid notification subject"),u(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}if(G&&ce(K)){H("Please enter a valid media URL"),u(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}if(x&&ce(v)){H("Please enter a valid CTA link"),u(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}if(ce($)){H("Please enter a valid notification message"),u(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}}if(i==="1"||i==="2"||i==="3"||i==="4"||i==="5")try{let m;i==="4"?m=P.map(ie=>_e(ie,g)):m=[_e(F,g)],i==="1"&&(m=["*"]);const xe=_e(M,g);await T.channel.send(m,{notification:{title:z,body:Se},payload:{title:z,body:Se,cta:Be,embed:re,category:O},channel:xe}),U.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(Je,{size:ie,color:"green"})}),u(2),D("1"),H("Notification Sent"),U.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(Je,{size:ie,color:"green"})}),D("1"),A(""),Y(!1),V(""),X(!1),L(""),J(!1),oe(""),H("")}catch(m){H("Send Notification Failed, please try again"),U.showMessageToast({toastTitle:"Error",toastMessage:"Sending Notification Failed: "+m,toastType:"ERROR",getToastIcon:xe=>t.jsx(pe,{size:xe,color:"red"})}),u(0),console.error(m)}},ce=a=>a.trim().length==0;let Ie=N!==""||$!==""||v!==""||K!=="";return t.jsxs(jt,{children:[t.jsx(Rt,{children:t.jsx(He,{padding:n?"0px 0px 0px":"10px 20px 10px",children:t.jsxs(I,{align:"center",children:[t.jsx(Kt,{textTransform:"none",weight:n?"500":"400",size:n?"25px":"32px",color:e.color,textAlign:"center",margin:n?"0px 0px":"20px 0px",style:{width:"100%"},children:"Send Notification"}),t.jsx(ee,{color:e.default.secondaryColor,weight:n?"300":"400",size:"14px",textTransform:"none",spacing:"0.03em",margin:n?"10px 0px":"0px 0px",textAlign:"center",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]})})}),!q&&t.jsx(Ht,{children:t.jsx(Tt,{children:t.jsx(I,{align:"stretch",children:t.jsxs(Yt,{flex:"1",direction:"column",justify:"center",margin:"0px",size:"1.1rem",width:"100%",onSubmit:$e,children:[t.jsxs(I,{flex:"1",self:"stretch",align:"stretch",width:"100%",children:[!he&&t.jsx(I,{flex:"1",justify:"flex-start",align:"stretch",children:t.jsx(ve,{children:t.jsx(we,{options:W,onChange:a=>{a.value==c?(_(l),j(l)):(_(a.value),j(a.value))},placeholder:"Select a Channel",value:W[0]})})}),t.jsx(te,{display:"none",value:i,onChange:a=>{D(a.target.value)}}),t.jsx(I,{flex:"1",justify:"flex-start",align:"stretch",margin:"40px 0px 0px 0px",children:t.jsx(ve,{children:t.jsx(we,{options:Ae,onChange:a=>{D(a.value),console.debug(a)},value:i})})}),t.jsx(te,{display:"none",value:i,onChange:a=>{D(a.target.value)}}),i&&t.jsxs(zt,{children:[t.jsxs(Re,{children:[t.jsx(ee,{weight:n?"500":"600",textTransform:"none",size:n?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Title"}),t.jsx(ye,{checked:S,onChange:()=>Y(!S)})]}),t.jsxs(Re,{children:[t.jsx(ee,{weight:n?"500":"600",textTransform:"none",size:n?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Media URL"}),t.jsx(ye,{checked:G,onChange:()=>J(!G)})]}),t.jsxs(Re,{children:[t.jsx(ee,{weight:n?"500":"600",textTransform:"none",size:n?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"CTA Link"}),t.jsx(ye,{checked:x,onChange:()=>X(!x)})]})]}),(i==="2"||i==="3"||i==="5")&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Recipient Wallet Address"}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:F,onChange:a=>{j(a.target.value)}})]}),i==="4"&&t.jsxs(t.Fragment,{children:[t.jsx(St,{children:P.map(a=>t.jsxs("span",{children:[a,t.jsx("i",{onClick:()=>Me(a),children:t.jsx(vt,{})})]},a))}),t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Enter Recipients Wallet Addresses"}),t.jsx(te,{required:P.length===0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:f,onKeyPress:Ee,onChange:a=>{const T=a.target.value.trim();console.debug(T),console.debug(f),B(a.target.value)}}),t.jsx(ee,{size:"13px",margin:"7px 0px 0px 0px",color:e.default.secondaryColor,children:"Enter recipients wallet addresses separated by a comma or by pressing the enter key"})]})]}),i&&S&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Notification Title"}),t.jsx(ee,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:80-N.length})]}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:N,onChange:a=>{V(a.target.value.slice(0,80))}})]}),i&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Notification Message"}),t.jsx(ee,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:500-$.length})]}),t.jsx(Gt,{rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",color:e.default.color,bg:e.default.bg,overflow:"auto",value:$,onChange:a=>{A(a.target.value.slice(0,500))},autocomplete:"off"})]}),i&&t.jsx(t.Fragment,{children:t.jsxs(I,{flex:"1",justify:"flex-start",align:"stretch",margin:"30px 0px 15px 0px",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",margin:"0px 0px 7px 0px",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Notification Setting Type"}),t.jsx(Jt,{color:e.default.primaryPushThemeTextColor,fontSize:"13px",margin:"0px 10px 0px 0px",fontWeight:"600",onClick:ze,cursor:"pointer",children:"Manage Settings"})]}),t.jsx(ve,{children:t.jsx(we,{options:je,onChange:a=>{ke(String(a.value))},value:je[0]})})]})}),i&&G&&t.jsxs(I,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Media URL"}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:K,onChange:a=>{oe(a.target.value)}})]}),i&&x&&t.jsxs(I,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ae,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"CTA Link"}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,radius:"12px",focusBorder:"1px solid #657795",value:v,onChange:a=>{L(a.target.value)}})]}),Z&&k!=1&&t.jsx(I,{margin:"30px 0px 0px 0px",width:"100%",padding:"1.5rem 0",radius:"12px",bg:"#F5F5FA",children:t.jsx("div",{style:{color:"#CF1C84",fontSize:"0.875rem",textAlign:"center"},children:Z})})]}),Ie&&t.jsx(kt,{details:{channelAddress:M,acta:v,aimg:K,amsg:$,asub:N,type:i}}),i&&t.jsxs(Et,{disabled:k==1,children:[k==1&&t.jsx(Zt,{type:Qt.SEAMLESS,spinnerSize:24,spinnerColor:"#FFF"}),k!=1&&t.jsx(te,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",size:"16px",type:"submit",value:"Send Notification"})]})]})})})})]})};const jt=b(Vt)``;b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,b.div`
  // background:red;
  // width:50%;
`,b.div`
  margin: 0px 10px;
`;const ve=b.div`
  .is-open {
    // margin-bottom: 130px;
  }
`,St=b.div`
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
`,Tt=b(He)`
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
`;b.div`
  color: ${e=>e.theme.color||"#000"};
  padding: 10px;
  letter-spacing: 3px;
  font-size: 14px;
`;const ae=b.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`,we=b(ta)`
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
`;b(we)`
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
`,b(ve)`
  // margin-bottom: 20px;
  border: 1px solid rgba(169, 169, 169, 0.5);
`;const Ct=b.div`
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
    letter-spacing: 2px;
  }
`,Rt=b.div`
  margin: 40px auto 0px auto;
  width: 55%;
  @media (max-width: 1224px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0px auto 0px auto;
  }
`,zt=b(Ye)`
  margin: 40px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  }
`,Re=b(Ye)`
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
`,Et=b(Wt)`
  width: 15rem;
  margin: 70px auto 0px auto;
  padding: 20px 10px;
  border-radius: 15px;
  background: #cf1c84;
  color: #fff;
  @media (max-width: 640px) {
    width: 13rem;
    padding: 20px 20px;
  }
  @media (max-width: 380px) {
    width: 9.5rem;
  }
`,Oe=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`});export{ye as I,Qe as S,sa as __tla};
