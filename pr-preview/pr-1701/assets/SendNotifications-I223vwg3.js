import{r as a,fd as Z,fe as ge,ff as fe,fg as me,fh as _t,e1 as se,fi as Pt,fj as De,dG as Ft,fk as be,fl as Te,fm as At,m as t,q as b,z as Ue,dd as de,x as Ke,X as qe,I,d1 as ee,ev as Lt,fn as Ot,S as Vt,o as He,dg as Ye,d7 as Wt,fo as Xt,eb as Ut,A as Ge,eo as Kt,d4 as qt,n as Ht,df as Yt,dk as te,dl as Gt,fp as Jt,di as Qt,dj as Zt,er as pe,e6 as _e,eF as Je,__tla as eo}from"./index-BMkQNpkW.js";import{D as to,__tla as oo}from"./index-DJGE1_mC.js";import{T as ao,a as Qe,__tla as no}from"./Tag-ClXKHoH7.js";import{_ as ro,__tla as io}from"./TransitionGroupContext-BwBFkeST.js";let ye,Ze,so=Promise.all([(()=>{try{return eo}catch{}})(),(()=>{try{return oo}catch{}})(),(()=>{try{return no}catch{}})(),(()=>{try{return io}catch{}})()]).then(async()=>{var et=typeof window>"u"?a.useEffect:a.useLayoutEffect;function tt(e){var n=e.classes,l=e.pulsate,C=l===void 0?!1:l,g=e.rippleX,p=e.rippleY,y=e.rippleSize,s=e.in,c=e.onExited,E=c===void 0?function(){}:c,R=e.timeout,h=a.useState(!1),w=h[0],k=h[1],u=Z(n.ripple,n.rippleVisible,C&&n.ripplePulsate),M={width:y,height:y,top:-(y/2)+p,left:-(y/2)+g},_=Z(n.child,w&&n.childLeaving,C&&n.childPulsate),P=ge(E);return et(function(){if(!s){k(!0);var j=setTimeout(P,R);return function(){clearTimeout(j)}}},[P,s,R]),a.createElement("span",{className:u,style:M},a.createElement("span",{className:_}))}var Ce=550,ot=80,at=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(Ce,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(Ce,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},nt=a.forwardRef(function(e,n){var l=e.center,C=l===void 0?!1:l,g=e.classes,p=e.className,y=me(e,["center","classes","className"]),s=a.useState([]),c=s[0],E=s[1],R=a.useRef(0),h=a.useRef(null);a.useEffect(function(){h.current&&(h.current(),h.current=null)},[c]);var w=a.useRef(!1),k=a.useRef(null),u=a.useRef(null),M=a.useRef(null);a.useEffect(function(){return function(){clearTimeout(k.current)}},[]);var _=a.useCallback(function(d){var f=d.pulsate,B=d.rippleX,i=d.rippleY,D=d.rippleSize,$=d.cb;E(function(V){return[].concat(_t(V),[a.createElement(tt,{key:R.current,classes:g,timeout:Ce,pulsate:f,rippleX:B,rippleY:i,rippleSize:D})])}),R.current+=1,h.current=$},[g]),P=a.useCallback(function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},B=arguments.length>2?arguments[2]:void 0,i=f.pulsate,D=i===void 0?!1:i,$=f.center,V=$===void 0?C||f.pulsate:$,S=f.fakeElement,Y=S===void 0?!1:S;if(d.type==="mousedown"&&w.current){w.current=!1;return}d.type==="touchstart"&&(w.current=!0);var N=Y?null:M.current,A=N?N.getBoundingClientRect():{width:0,height:0,left:0,top:0},v,L,x;if(V||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(A.width/2),L=Math.round(A.height/2);else{var U=d.touches?d.touches[0]:d,q=U.clientX,ae=U.clientY;v=Math.round(q-A.left),L=Math.round(ae-A.top)}if(V)x=Math.sqrt((2*Math.pow(A.width,2)+Math.pow(A.height,2))/3),x%2===0&&(x+=1);else{var G=Math.max(Math.abs((N?N.clientWidth:0)-v),v)*2+2,J=Math.max(Math.abs((N?N.clientHeight:0)-L),L)*2+2;x=Math.sqrt(Math.pow(G,2)+Math.pow(J,2))}d.touches?u.current===null&&(u.current=function(){_({pulsate:D,rippleX:v,rippleY:L,rippleSize:x,cb:B})},k.current=setTimeout(function(){u.current&&(u.current(),u.current=null)},ot)):_({pulsate:D,rippleX:v,rippleY:L,rippleSize:x,cb:B})},[C,_]),j=a.useCallback(function(){P({},{pulsate:!0})},[P]),F=a.useCallback(function(d,f){if(clearTimeout(k.current),d.type==="touchend"&&u.current){d.persist(),u.current(),u.current=null,k.current=setTimeout(function(){F(d,f)});return}u.current=null,E(function(B){return B.length>0?B.slice(1):B}),h.current=f},[]);return a.useImperativeHandle(n,function(){return{pulsate:j,start:P,stop:F}},[j,P,F]),a.createElement("span",se({className:Z(g.root,p),ref:M},y),a.createElement(ao,{component:null,exit:!0},c))});const rt=fe(at,{flip:!1,name:"MuiTouchRipple"})(a.memo(nt));var it={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},st=a.forwardRef(function(e,n){var l=e.action,C=e.buttonRef,g=e.centerRipple,p=g===void 0?!1:g,y=e.children,s=e.classes,c=e.className,E=e.component,R=E===void 0?"button":E,h=e.disabled,w=h===void 0?!1:h,k=e.disableRipple,u=k===void 0?!1:k,M=e.disableTouchRipple,_=M===void 0?!1:M,P=e.focusRipple,j=P===void 0?!1:P,F=e.focusVisibleClassName,d=e.onBlur,f=e.onClick,B=e.onFocus,i=e.onFocusVisible,D=e.onKeyDown,$=e.onKeyUp,V=e.onMouseDown,S=e.onMouseLeave,Y=e.onMouseUp,N=e.onTouchEnd,A=e.onTouchMove,v=e.onTouchStart,L=e.onDragLeave,x=e.tabIndex,U=x===void 0?0:x,q=e.TouchRippleProps,ae=e.type,G=ae===void 0?"button":ae,J=me(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Q=a.useRef(null);function H(){return Ft.findDOMNode(Q.current)}var O=a.useRef(null),ke=a.useState(!1),W=ke[0],le=ke[1];w&&W&&le(!1);var ne=Pt(),ue=ne.isFocusVisible,je=ne.onBlurVisible,ze=ne.ref;a.useImperativeHandle(l,function(){return{focusVisible:function(){le(!0),Q.current.focus()}}},[]),a.useEffect(function(){W&&j&&!u&&O.current.pulsate()},[u,j,W]);function K(r,We){var Bt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_;return ge(function(Xe){We&&We(Xe);var Dt=Bt;return!Dt&&O.current&&O.current[r](Xe),!0})}var he=K("start",V),Ee=K("stop",L),Me=K("stop",Y),X=K("stop",function(r){W&&r.preventDefault(),S&&S(r)}),$e=K("start",v),Ne=K("stop",N),ce=K("stop",A),Ie=K("stop",function(r){W&&(je(r),le(!1)),d&&d(r)},!1),o=ge(function(r){Q.current||(Q.current=r.currentTarget),ue(r)&&(le(!0),i&&i(r)),B&&B(r)}),T=function(){var r=H();return R&&R!=="button"&&!(r.tagName==="A"&&r.href)},z=a.useRef(!1),Se=ge(function(r){j&&!z.current&&W&&O.current&&r.key===" "&&(z.current=!0,r.persist(),O.current.stop(r,function(){O.current.start(r)})),r.target===r.currentTarget&&T()&&r.key===" "&&r.preventDefault(),D&&D(r),r.target===r.currentTarget&&T()&&r.key==="Enter"&&!w&&(r.preventDefault(),f&&f(r))}),Be=ge(function(r){j&&r.key===" "&&O.current&&W&&!r.defaultPrevented&&(z.current=!1,r.persist(),O.current.stop(r,function(){O.current.pulsate(r)})),$&&$(r),f&&r.target===r.currentTarget&&T()&&r.key===" "&&!r.defaultPrevented&&f(r)}),re=R;re==="button"&&J.href&&(re="a");var m={};re==="button"?(m.type=G,m.disabled=w):((re!=="a"||!J.href)&&(m.role="button"),m["aria-disabled"]=w);var xe=De(C,n),ie=De(ze,Q),Mt=De(xe,ie),Ve=a.useState(!1),$t=Ve[0],Nt=Ve[1];a.useEffect(function(){Nt(!0)},[]);var It=$t&&!u&&!w;return a.createElement(re,se({className:Z(s.root,c,W&&[s.focusVisible,F],w&&s.disabled),onBlur:Ie,onClick:f,onFocus:o,onKeyDown:Se,onKeyUp:Be,onMouseDown:he,onMouseLeave:X,onMouseUp:Me,onDragLeave:Ee,onTouchEnd:Ne,onTouchMove:ce,onTouchStart:$e,ref:Mt,tabIndex:w?-1:U},m,J),y,It?a.createElement(rt,se({ref:O,center:p},q)):null)});const lt=fe(it,{name:"MuiButtonBase"})(st);var ct=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:be(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:be(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:be(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},dt=a.forwardRef(function(e,n){var l=e.edge,C=l===void 0?!1:l,g=e.children,p=e.classes,y=e.className,s=e.color,c=s===void 0?"default":s,E=e.disabled,R=E===void 0?!1:E,h=e.disableFocusRipple,w=h===void 0?!1:h,k=e.size,u=k===void 0?"medium":k,M=me(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(lt,se({className:Z(p.root,y,c!=="default"&&p["color".concat(Te(c))],R&&p.disabled,u==="small"&&p["size".concat(Te(u))],{start:p.edgeStart,end:p.edgeEnd}[C]),centerRipple:!0,focusRipple:!w,disabled:R,ref:n},M),a.createElement("span",{className:p.label},g))});const pt=fe(ct,{name:"MuiIconButton"})(dt);var ut=a.createContext();function ht(){return a.useContext(ut)}var xt={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},gt=a.forwardRef(function(e,n){var l=e.autoFocus,C=e.checked,g=e.checkedIcon,p=e.classes,y=e.className,s=e.defaultChecked,c=e.disabled,E=e.icon,R=e.id,h=e.inputProps,w=e.inputRef,k=e.name,u=e.onBlur,M=e.onChange,_=e.onFocus,P=e.readOnly,j=e.required,F=e.tabIndex,d=e.type,f=e.value,B=me(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),i=At({controlled:C,default:!!s,name:"SwitchBase",state:"checked"}),D=ro(i,2),$=D[0],V=D[1],S=ht(),Y=function(x){_&&_(x),S&&S.onFocus&&S.onFocus(x)},N=function(x){u&&u(x),S&&S.onBlur&&S.onBlur(x)},A=function(x){var U=x.target.checked;V(U),M&&M(x,U)},v=c;S&&typeof v>"u"&&(v=S.disabled);var L=d==="checkbox"||d==="radio";return a.createElement(pt,se({component:"span",className:Z(p.root,y,$&&p.checked,v&&p.disabled),disabled:v,tabIndex:null,role:void 0,onFocus:Y,onBlur:N,ref:n},B),a.createElement("input",se({autoFocus:l,checked:C,defaultChecked:s,className:p.input,disabled:v,id:L&&R,name:k,onChange:A,readOnly:P,ref:w,required:j,tabIndex:F,type:d,value:f},h)),$?g:E)});const ft=fe(xt,{name:"PrivateSwitchBase"})(gt);var mt=function(e){return{root:{display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:e.palette.type==="light"?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:e.palette.type==="light"?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:be(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:be(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.type==="light"?.38:.3}}},bt=a.forwardRef(function(e,n){var l=e.classes,C=e.className,g=e.color,p=g===void 0?"secondary":g,y=e.edge,s=y===void 0?!1:y,c=e.size,E=c===void 0?"medium":c,R=me(e,["classes","className","color","edge","size"]),h=a.createElement("span",{className:l.thumb});return a.createElement("span",{className:Z(l.root,C,{start:l.edgeStart,end:l.edgeEnd}[s],E==="small"&&l["size".concat(Te(E))])},a.createElement(ft,se({type:"checkbox",icon:h,checkedIcon:h,classes:{root:Z(l.switchBase,l["color".concat(Te(p))]),input:l.input,checked:l.checked,disabled:l.disabled},ref:n},R)),a.createElement("span",{className:l.track}))});const yt=fe(mt,{name:"MuiSwitch"})(bt),vt=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.243",height:"10.243",viewBox:"0 0 16.243 16.243",children:t.jsx("g",{id:"Group_4723","data-name":"Group 4723",transform:"translate(2.121 2.121)",children:t.jsxs("g",{id:"Group_4716","data-name":"Group 4716",transform:"translate(0)",children:[t.jsx("line",{id:"Line_1079","data-name":"Line 1079",x2:"16.97",transform:"translate(0 12) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"}),t.jsx("line",{id:"Line_1080","data-name":"Line 1080",y2:"16.97",transform:"translate(0 0) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"})]})})}),wt=Ue.coreContractChain;function kt({details:e}){const{delegatees:n,channelDetails:l}=de(c=>c.admin),{chainId:C}=Ke(),g=wt===C;let p;p=n.filter(c=>(g?c.channel:c.alias_address)==e.channelAddress)[0],p||(p=l);const y=qe(),s=({test:c})=>p&&t.jsx(Lt,{notificationTitle:c==null?void 0:c.asub,notificationBody:c==null?void 0:c.amsg,cta:c==null?void 0:c.acta,app:p.name,icon:p.icon,image:c==null?void 0:c.aimg,chainName:Ot[C],theme:y.scheme});return t.jsxs(Pe,{children:[t.jsx(I,{align:"flex-start",margin:"30px 0px 10px 0px",children:t.jsx(ee,{weight:"700",size:"12px",spacing:"0.2em",color:"#575D73",children:"PREVIEW NOTIFICATION"})}),t.jsx(s,{test:e})]})}b.div`
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
`;let Pe,Fe,Ae,Le;Pe=b.div`
  margin: 0;
  width: 100%;
`,Fe=Ue.coreContractChain,ye=b(yt).attrs(()=>({classes:{root:"root",switchBase:"switchBase",thumb:"thumb",track:"track",checked:"checked"},disableRipple:!0,focusVisibleClassName:"focusVisible"}))`
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
`,Ae=[{value:"1",label:"Broadcast"},{value:"3",label:"Targeted"},{value:"4",label:"Subset"}],Le=["Enter",","],Ze=function(){const e=qe(),n=Xt(425),{account:l,provider:C,chainId:g}=Ke(),{userPushSDKInstance:p}=de(o=>o.user);de(o=>o.contracts);const{channelDetails:y,delegatees:s,aliasDetails:{aliasEthAddr:c}}=de(o=>o.admin),{CHANNNEL_DEACTIVATED_STATE:E}=de(o=>o.channels),{canSend:R}=de(o=>o.canSend),h=Fe===g,{handleConnectWallet:w}=a.useContext(Ut),[k,u]=a.useState(0),[M,_]=a.useState(""),[P,j]=a.useState(l),[F,d]=a.useState([]),[f,B]=a.useState(""),[i,D]=a.useState("1"),[$,V]=a.useState(""),[S,Y]=a.useState(!1),[N,A]=a.useState(""),[v,L]=a.useState(""),[x,U]=a.useState(!1),[q,ae]=a.useState(""),[G,J]=a.useState(!1),[Q,H]=a.useState(""),[O,ke]=a.useState(""),[W,le]=a.useState([]),ne=a.useMemo(()=>s?s.find(o=>o.channel===M):null,[s,M]),ue=a.useMemo(()=>{if(ne){const{channel_settings:o}=ne;if(o!==null)return JSON.parse(o)}return null},[ne]),je=a.useMemo(()=>{const o={label:"Default",value:"",isRange:!1};if(ue){const T=ue.map(z=>({label:z.type===3?t.jsxs(Oe,{children:[t.jsx("div",{children:z.description}),t.jsx(Qe,{children:"Multi-Range"})]}):z.type===2?t.jsxs(Oe,{children:[t.jsx("div",{children:z.description}),t.jsx(Qe,{children:"Range"})]}):z.description,value:z.index,isRange:z.type===2}));return[o,...T]}return[o]},[ue]),ze=()=>{const o=Ge.ChannelSettings;window.open(o,"_blank")};a.useEffect(()=>{if(R!==1){const o=window.location.origin;window.location.replace(`${o}${Ge.Channels}`)}});const K=y?y.channelState===E:!1;let he;h&&s?he=s.length===1&&s[0].address===l||!s.length:!h&&s&&(he=s.length===1&&s[0].alias_address===l||!s.length),a.useEffect(()=>{l&&(!s||!s.length?_(l):(le(s.map(o=>({value:h?o.channel:o.alias_address,label:t.jsxs(Ct,{children:[t.jsx("img",{src:o.icon,alt:""}),t.jsx("div",{style:{letterSpacing:"0"},children:o.name})]})}))),_(h?s[0].channel:s[0].alias_address)))},[s,l]);const Ee=o=>{if(Le.includes(o.key)){o.preventDefault(),d(z=>Array.from(new Set([...z,f])));const T=Array.from(new Set([...F,f]));j(T.join()),B("")}},Me=o=>{const T=F.filter(z=>z!==o);j(T.join()),d(T)};a.useEffect(()=>{const o=["1"];d([]),o.includes(i)?j(l):j("")},[i]);const X=Kt(5e3),$e=()=>{let o=!0;return i==="4"&&F.length<2&&(X.showMessageToast({toastTitle:"Error",toastMessage:"Please enter at least two recipients in order to use subset notifications type",toastType:"ERROR",getToastIcon:T=>t.jsx(pe,{size:T,color:"red"})}),o=!1),o},Ne=async o=>{o.preventDefault();let T=p;if(!T.signer&&(T=await w(),!T)||(X.showLoaderToast({loaderMessage:"Preparing Notification"}),!$e()))return;u(1);let z=$,Se=N,Be=v,re=q;if(i==="1"||i==="2"||i==="3"||i==="4"||i==="5"){if(S&&ce($)){H("Please enter a valid notification subject"),u(2),X.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}if(G&&ce(q)){H("Please enter a valid media URL"),u(2),X.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}if(x&&ce(v)){H("Please enter a valid CTA link"),u(2),X.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}if(ce(N)){H("Please enter a valid notification message"),u(2),X.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:m=>t.jsx(pe,{size:m,color:"red"})});return}}if(i==="1"||i==="2"||i==="3"||i==="4"||i==="5")try{let m;i==="4"?m=F.map(ie=>_e(ie,g)):m=[_e(P,g)],i==="1"&&(m=["*"]);const xe=_e(M,g);await T.channel.send(m,{notification:{title:z,body:Se},payload:{title:z,body:Se,cta:Be,embed:re,category:O},channel:xe}),X.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(Je,{size:ie,color:"green"})}),u(2),D("1"),H("Notification Sent"),X.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(Je,{size:ie,color:"green"})}),D("1"),A(""),Y(!1),V(""),U(!1),L(""),J(!1),ae(""),H("")}catch(m){H("Send Notification Failed, please try again"),X.showMessageToast({toastTitle:"Error",toastMessage:"Sending Notification Failed: "+m,toastType:"ERROR",getToastIcon:xe=>t.jsx(pe,{size:xe,color:"red"})}),u(0),console.error(m)}},ce=o=>o.trim().length==0;let Ie=$!==""||N!==""||v!==""||q!=="";return t.jsxs(jt,{children:[t.jsx(Rt,{children:t.jsx(He,{padding:n?"0px 0px 0px":"10px 20px 10px",children:t.jsxs(I,{align:"center",children:[t.jsx(qt,{textTransform:"none",weight:n?"500":"400",size:n?"25px":"32px",color:e.color,textAlign:"center",margin:n?"0px 0px":"20px 0px",style:{width:"100%"},children:"Send Notification"}),t.jsx(ee,{color:e.default.secondaryColor,weight:n?"300":"400",size:"14px",textTransform:"none",spacing:"0.03em",margin:n?"10px 0px":"0px 0px",textAlign:"center",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]})})}),!K&&t.jsx(Ht,{children:t.jsx(Tt,{children:t.jsx(I,{align:"stretch",children:t.jsxs(Yt,{flex:"1",direction:"column",justify:"center",margin:"0px",size:"1.1rem",width:"100%",onSubmit:Ne,children:[t.jsxs(I,{flex:"1",self:"stretch",align:"stretch",width:"100%",children:[!he&&t.jsx(I,{flex:"1",justify:"flex-start",align:"stretch",children:t.jsx(ve,{children:t.jsx(we,{options:W,onChange:o=>{o.value==c?(_(l),j(l)):(_(o.value),j(o.value))},placeholder:"Select a Channel",value:W[0]})})}),t.jsx(te,{display:"none",value:i,onChange:o=>{D(o.target.value)}}),t.jsx(I,{flex:"1",justify:"flex-start",align:"stretch",margin:"40px 0px 0px 0px",children:t.jsx(ve,{children:t.jsx(we,{options:Ae,onChange:o=>{D(o.value),console.debug(o)},value:i})})}),t.jsx(te,{display:"none",value:i,onChange:o=>{D(o.target.value)}}),i&&t.jsxs(zt,{children:[t.jsxs(Re,{children:[t.jsx(ee,{weight:n?"500":"600",textTransform:"none",size:n?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Title"}),t.jsx(ye,{checked:S,onChange:()=>Y(!S)})]}),t.jsxs(Re,{children:[t.jsx(ee,{weight:n?"500":"600",textTransform:"none",size:n?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Media URL"}),t.jsx(ye,{checked:G,onChange:()=>J(!G)})]}),t.jsxs(Re,{children:[t.jsx(ee,{weight:n?"500":"600",textTransform:"none",size:n?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"CTA Link"}),t.jsx(ye,{checked:x,onChange:()=>U(!x)})]})]}),(i==="2"||i==="3"||i==="5")&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Recipient Wallet Address"}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:P,onChange:o=>{j(o.target.value)}})]}),i==="4"&&t.jsxs(t.Fragment,{children:[t.jsx(St,{children:F.map(o=>t.jsxs("span",{children:[o,t.jsx("i",{onClick:()=>Me(o),children:t.jsx(vt,{})})]},o))}),t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Enter Recipients Wallet Addresses"}),t.jsx(te,{required:F.length===0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:f,onKeyPress:Ee,onChange:o=>{const T=o.target.value.trim();console.debug(T),console.debug(f),B(o.target.value)}}),t.jsx(ee,{size:"13px",margin:"7px 0px 0px 0px",color:e.default.secondaryColor,children:"Enter recipients wallet addresses separated by a comma or by pressing the enter key"})]})]}),i&&S&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Notification Title"}),t.jsx(ee,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:80-$.length})]}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:$,onChange:o=>{V(o.target.value.slice(0,80))}})]}),i&&t.jsxs(I,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Notification Message"}),t.jsx(ee,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:500-N.length})]}),t.jsx(Gt,{rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",color:e.default.color,bg:e.default.bg,overflow:"auto",value:N,onChange:o=>{A(o.target.value.slice(0,500))},autocomplete:"off"})]}),i&&t.jsx(t.Fragment,{children:t.jsxs(I,{flex:"1",justify:"flex-start",align:"stretch",margin:"30px 0px 15px 0px",children:[t.jsxs(I,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",margin:"0px 0px 7px 0px",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Notification Setting Type"}),t.jsx(Jt,{color:e.default.primaryPushThemeTextColor,fontSize:"13px",margin:"0px 10px 0px 0px",fontWeight:"600",onClick:ze,cursor:"pointer",children:"Manage Settings"})]}),t.jsx(ve,{children:t.jsx(we,{options:je,onChange:o=>{ke(String(o.value))},value:je[0]})})]})}),i&&G&&t.jsxs(I,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"Media URL"}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:q,onChange:o=>{ae(o.target.value)}})]}),i&&x&&t.jsxs(I,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(oe,{style:{color:e.color,fontWeight:n?"500":"600",fontSize:n?"15px":"14px"},children:"CTA Link"}),t.jsx(te,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,radius:"12px",focusBorder:"1px solid #657795",value:v,onChange:o=>{L(o.target.value)}})]}),Q&&k!=1&&t.jsx(I,{margin:"30px 0px 0px 0px",width:"100%",padding:"1.5rem 0",radius:"12px",bg:"#F5F5FA",children:t.jsx("div",{style:{color:"#CF1C84",fontSize:"0.875rem",textAlign:"center"},children:Q})})]}),Ie&&t.jsx(kt,{details:{channelAddress:M,acta:v,aimg:q,amsg:N,asub:$,type:i}}),i&&t.jsxs(Et,{disabled:k==1,children:[k==1&&t.jsx(Qt,{type:Zt.SEAMLESS,spinnerSize:24,spinnerColor:"#FFF"}),k!=1&&t.jsx(te,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",size:"16px",type:"submit",value:"Send Notification"})]})]})})})})]})};const jt=b(Vt)``;b.div`
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
`;const oe=b.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`,we=b(to)`
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
`});export{ye as I,Ze as S,so as __tla};
