import{b8 as n,dF as Kt,dG as Yt,dH as J,dI as qt,bb as Ee,dJ as Z,dK as me,dL as be,dM as ve,dN as Gt,dO as Ht,dP as Ve,cu as Jt,dQ as ye,dR as ze,dS as Zt,dT as Qt,aZ as t,a_ as k,be as Ze,bW as de,ba as Qe,b1 as et,b5 as N,bK as Q,dq as en,dr as tn,a$ as nn,b4 as tt,bZ as nt,dU as on,d9 as an,bc as ot,cU as rn,bN as sn,b3 as ln,bY as cn,c1 as ee,c2 as dn,dV as pn,bk as un,bT as hn,b$ as xn,c0 as gn,cX as pe,d4 as _e,ds as at,__tla as fn}from"./index-BVCZN7ZR.js";import{D as mn,__tla as bn}from"./index-Dn8Sn__p.js";import{T as rt,__tla as vn}from"./TransitionGroupContext-DEoMvch_.js";let we,it,Me,yn=Promise.all([(()=>{try{return fn}catch{}})(),(()=>{try{return bn}catch{}})(),(()=>{try{return vn}catch{}})()]).then(async()=>{function $e(e,a){var i=function(s){return a&&n.isValidElement(s)?a(s):s},d=Object.create(null);return e&&n.Children.map(e,function(s){return s}).forEach(function(s){d[s.key]=i(s)}),d}function st(e,a){e=e||{},a=a||{};function i(f){return f in a?a[f]:e[f]}var d=Object.create(null),s=[];for(var l in e)l in a?s.length&&(d[l]=s,s=[]):s.push(l);var c,h={};for(var r in a){if(d[r])for(c=0;c<d[r].length;c++){var m=d[r][c];h[d[r][c]]=i(m)}h[r]=i(r)}for(c=0;c<s.length;c++)h[s[c]]=i(s[c]);return h}function te(e,a,i){return i[a]!=null?i[a]:e.props[a]}function lt(e,a){return $e(e.children,function(i){return n.cloneElement(i,{onExited:a.bind(null,i),in:!0,appear:te(i,"appear",e),enter:te(i,"enter",e),exit:te(i,"exit",e)})})}function ct(e,a,i){var d=$e(e.children),s=st(a,d);return Object.keys(s).forEach(function(l){var c=s[l];if(n.isValidElement(c)){var h=l in a,r=l in d,m=a[l],f=n.isValidElement(m)&&!m.props.in;r&&(!h||f)?s[l]=n.cloneElement(c,{onExited:i.bind(null,c),in:!0,exit:te(c,"exit",e),enter:te(c,"enter",e)}):!r&&h&&!f?s[l]=n.cloneElement(c,{in:!1}):r&&h&&n.isValidElement(m)&&(s[l]=n.cloneElement(c,{onExited:i.bind(null,c),in:m.props.in,exit:te(c,"exit",e),enter:te(c,"enter",e)}))}}),s}var dt=Object.values||function(e){return Object.keys(e).map(function(a){return e[a]})},pt={component:"div",childFactory:function(e){return e}},Ne=function(e){Kt(a,e);function a(d,s){var l;l=e.call(this,d,s)||this;var c=l.handleExited.bind(Yt(l));return l.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},l}var i=a.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(d,s){var l=s.children,c=s.handleExited,h=s.firstRender;return{children:h?lt(d,c):ct(d,l,c),firstRender:!1}},i.handleExited=function(d,s){var l=$e(this.props.children);d.key in l||(d.props.onExited&&d.props.onExited(s),this.mounted&&this.setState(function(c){var h=J({},c.children);return delete h[d.key],{children:h}}))},i.render=function(){var d=this.props,s=d.component,l=d.childFactory,c=qt(d,["component","childFactory"]),h=this.state.contextValue,r=dt(this.state.children).map(l);return delete c.appear,delete c.enter,delete c.exit,s===null?Ee.createElement(rt.Provider,{value:h},r):Ee.createElement(rt.Provider,{value:h},Ee.createElement(s,c,r))},a}(Ee.Component);Ne.propTypes={},Ne.defaultProps=pt;var ut=typeof window>"u"?n.useEffect:n.useLayoutEffect;function ht(e){var a=e.classes,i=e.pulsate,d=i===void 0?!1:i,s=e.rippleX,l=e.rippleY,c=e.rippleSize,h=e.in,r=e.onExited,m=r===void 0?function(){}:r,f=e.timeout,v=n.useState(!1),b=v[0],I=v[1],g=Z(a.ripple,a.rippleVisible,d&&a.ripplePulsate),j={width:c,height:c,top:-(c/2)+l,left:-(c/2)+s},F=Z(a.child,b&&a.childLeaving,d&&a.childPulsate),R=me(m);return ut(function(){if(!h){I(!0);var L=setTimeout(R,f);return function(){clearTimeout(L)}}},[R,h,f]),n.createElement("span",{className:g,style:j},n.createElement("span",{className:F}))}var Ie=550,xt=80,gt=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(Ie,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(Ie,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},ft=n.forwardRef(function(e,a){var i=e.center,d=i===void 0?!1:i,s=e.classes,l=e.className,c=ve(e,["center","classes","className"]),h=n.useState([]),r=h[0],m=h[1],f=n.useRef(0),v=n.useRef(null);n.useEffect(function(){v.current&&(v.current(),v.current=null)},[r]);var b=n.useRef(!1),I=n.useRef(null),g=n.useRef(null),j=n.useRef(null);n.useEffect(function(){return function(){clearTimeout(I.current)}},[]);var F=n.useCallback(function(x){var y=x.pulsate,C=x.rippleX,_=x.rippleY,u=x.rippleSize,D=x.cb;m(function(O){return[].concat(Gt(O),[n.createElement(ht,{key:f.current,classes:s,timeout:Ie,pulsate:y,rippleX:C,rippleY:_,rippleSize:u})])}),f.current+=1,v.current=D},[s]),R=n.useCallback(function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=arguments.length>2?arguments[2]:void 0,_=y.pulsate,u=_===void 0?!1:_,D=y.center,O=D===void 0?d||y.pulsate:D,E=y.fakeElement,X=E===void 0?!1:E;if(x.type==="mousedown"&&b.current){b.current=!1;return}x.type==="touchstart"&&(b.current=!0);var V=X?null:j.current,z=V?V.getBoundingClientRect():{width:0,height:0,left:0,top:0},M,B,w;if(O||x.clientX===0&&x.clientY===0||!x.clientX&&!x.touches)M=Math.round(z.width/2),B=Math.round(z.height/2);else{var U=x.touches?x.touches[0]:x,se=U.clientX,K=U.clientY;M=Math.round(se-z.left),B=Math.round(K-z.top)}if(O)w=Math.sqrt((2*Math.pow(z.width,2)+Math.pow(z.height,2))/3),w%2===0&&(w+=1);else{var le=Math.max(Math.abs((V?V.clientWidth:0)-M),M)*2+2,Y=Math.max(Math.abs((V?V.clientHeight:0)-B),B)*2+2;w=Math.sqrt(Math.pow(le,2)+Math.pow(Y,2))}x.touches?g.current===null&&(g.current=function(){F({pulsate:u,rippleX:M,rippleY:B,rippleSize:w,cb:C})},I.current=setTimeout(function(){g.current&&(g.current(),g.current=null)},xt)):F({pulsate:u,rippleX:M,rippleY:B,rippleSize:w,cb:C})},[d,F]),L=n.useCallback(function(){R({},{pulsate:!0})},[R]),A=n.useCallback(function(x,y){if(clearTimeout(I.current),x.type==="touchend"&&g.current){x.persist(),g.current(),g.current=null,I.current=setTimeout(function(){A(x,y)});return}g.current=null,m(function(C){return C.length>0?C.slice(1):C}),v.current=y},[]);return n.useImperativeHandle(a,function(){return{pulsate:L,start:R,stop:A}},[L,R,A]),n.createElement("span",J({className:Z(s.root,l),ref:j},c),n.createElement(Ne,{component:null,exit:!0},r))});const mt=be(gt,{flip:!1,name:"MuiTouchRipple"})(n.memo(ft));var bt={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},vt=n.forwardRef(function(e,a){var i=e.action,d=e.buttonRef,s=e.centerRipple,l=s===void 0?!1:s,c=e.children,h=e.classes,r=e.className,m=e.component,f=m===void 0?"button":m,v=e.disabled,b=v===void 0?!1:v,I=e.disableRipple,g=I===void 0?!1:I,j=e.disableTouchRipple,F=j===void 0?!1:j,R=e.focusRipple,L=R===void 0?!1:R,A=e.focusVisibleClassName,x=e.onBlur,y=e.onClick,C=e.onFocus,_=e.onFocusVisible,u=e.onKeyDown,D=e.onKeyUp,O=e.onMouseDown,E=e.onMouseLeave,X=e.onMouseUp,V=e.onTouchEnd,z=e.onTouchMove,M=e.onTouchStart,B=e.onDragLeave,w=e.tabIndex,U=w===void 0?0:w,se=e.TouchRippleProps,K=e.type,le=K===void 0?"button":K,Y=ve(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),H=n.useRef(null);function Se(){return Jt.findDOMNode(H.current)}var T=n.useRef(null),Ce=n.useState(!1),q=Ce[0],oe=Ce[1];b&&q&&oe(!1);var ue=Ht(),he=ue.isFocusVisible,xe=ue.onBlurVisible,Te=ue.ref;n.useImperativeHandle(i,function(){return{focusVisible:function(){oe(!0),H.current.focus()}}},[]),n.useEffect(function(){q&&L&&!g&&T.current.pulsate()},[g,L,q]);function G(p,He){var Wt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:F;return me(function(Je){He&&He(Je);var Xt=Wt;return!Xt&&T.current&&T.current[p](Je),!0})}var Be=G("start",O),ge=G("stop",B),Pe=G("stop",X),Fe=G("stop",function(p){q&&p.preventDefault(),E&&E(p)}),W=G("start",M),Ae=G("stop",V),Oe=G("stop",z),ce=G("stop",function(p){q&&(xe(p),oe(!1)),x&&x(p)},!1),Le=me(function(p){H.current||(H.current=p.currentTarget),he(p)&&(oe(!0),_&&_(p)),C&&C(p)}),o=function(){var p=Se();return f&&f!=="button"&&!(p.tagName==="A"&&p.href)},S=n.useRef(!1),P=me(function(p){L&&!S.current&&q&&T.current&&p.key===" "&&(S.current=!0,p.persist(),T.current.stop(p,function(){T.current.start(p)})),p.target===p.currentTarget&&o()&&p.key===" "&&p.preventDefault(),u&&u(p),p.target===p.currentTarget&&o()&&p.key==="Enter"&&!b&&(p.preventDefault(),y&&y(p))}),Re=me(function(p){L&&p.key===" "&&T.current&&q&&!p.defaultPrevented&&(S.current=!1,p.persist(),T.current.stop(p,function(){T.current.pulsate(p)})),D&&D(p),y&&p.target===p.currentTarget&&o()&&p.key===" "&&!p.defaultPrevented&&y(p)}),ae=f;ae==="button"&&Y.href&&(ae="a");var re={};ae==="button"?(re.type=le,re.disabled=b):((ae!=="a"||!Y.href)&&(re.role="button"),re["aria-disabled"]=b);var $=Ve(d,a),fe=Ve(Te,H),ie=Ve($,fe),Ge=n.useState(!1),Vt=Ge[0],_t=Ge[1];n.useEffect(function(){_t(!0)},[]);var Ut=Vt&&!g&&!b;return n.createElement(ae,J({className:Z(h.root,r,q&&[h.focusVisible,A],b&&h.disabled),onBlur:ce,onClick:y,onFocus:Le,onKeyDown:P,onKeyUp:Re,onMouseDown:Be,onMouseLeave:Fe,onMouseUp:Pe,onDragLeave:ge,onTouchEnd:Ae,onTouchMove:Oe,onTouchStart:W,ref:ie,tabIndex:b?-1:U},re,Y),c,Ut?n.createElement(mt,J({ref:T,center:l},se)):null)});const yt=be(bt,{name:"MuiButtonBase"})(vt);var wt=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:ye(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:ye(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:ye(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},kt=n.forwardRef(function(e,a){var i=e.edge,d=i===void 0?!1:i,s=e.children,l=e.classes,c=e.className,h=e.color,r=h===void 0?"default":h,m=e.disabled,f=m===void 0?!1:m,v=e.disableFocusRipple,b=v===void 0?!1:v,I=e.size,g=I===void 0?"medium":I,j=ve(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(yt,J({className:Z(l.root,c,r!=="default"&&l["color".concat(ze(r))],f&&l.disabled,g==="small"&&l["size".concat(ze(g))],{start:l.edgeStart,end:l.edgeEnd}[d]),centerRipple:!0,focusRipple:!b,disabled:f,ref:a},j),n.createElement("span",{className:l.label},s))});const jt=be(wt,{name:"MuiIconButton"})(kt);var St=n.createContext();function Ct(){return n.useContext(St)}var Tt={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},Rt=n.forwardRef(function(e,a){var i=e.autoFocus,d=e.checked,s=e.checkedIcon,l=e.classes,c=e.className,h=e.defaultChecked,r=e.disabled,m=e.icon,f=e.id,v=e.inputProps,b=e.inputRef,I=e.name,g=e.onBlur,j=e.onChange,F=e.onFocus,R=e.readOnly,L=e.required,A=e.tabIndex,x=e.type,y=e.value,C=ve(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=Zt({controlled:d,default:!!h,name:"SwitchBase",state:"checked"}),u=Qt(_,2),D=u[0],O=u[1],E=Ct(),X=function(w){F&&F(w),E&&E.onFocus&&E.onFocus(w)},V=function(w){g&&g(w),E&&E.onBlur&&E.onBlur(w)},z=function(w){var U=w.target.checked;O(U),j&&j(w,U)},M=r;E&&typeof M>"u"&&(M=E.disabled);var B=x==="checkbox"||x==="radio";return n.createElement(jt,J({component:"span",className:Z(l.root,c,D&&l.checked,M&&l.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:X,onBlur:V,ref:a},C),n.createElement("input",J({autoFocus:i,checked:d,defaultChecked:h,className:l.input,disabled:M,id:B&&f,name:I,onChange:z,readOnly:R,ref:b,required:L,tabIndex:A,type:x,value:y},v)),D?s:m)});const Et=be(Tt,{name:"PrivateSwitchBase"})(Rt);var zt=function(e){return{root:{display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:e.palette.type==="light"?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:e.palette.type==="light"?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:ye(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:ye(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.type==="light"?.38:.3}}},Mt=n.forwardRef(function(e,a){var i=e.classes,d=e.className,s=e.color,l=s===void 0?"secondary":s,c=e.edge,h=c===void 0?!1:c,r=e.size,m=r===void 0?"medium":r,f=ve(e,["classes","className","color","edge","size"]),v=n.createElement("span",{className:i.thumb});return n.createElement("span",{className:Z(i.root,d,{start:i.edgeStart,end:i.edgeEnd}[h],m==="small"&&i["size".concat(ze(m))])},n.createElement(Et,J({type:"checkbox",icon:v,checkedIcon:v,classes:{root:Z(i.switchBase,i["color".concat(ze(l))]),input:i.input,checked:i.checked,disabled:i.disabled},ref:a},f)),n.createElement("span",{className:i.track}))});const $t=be(zt,{name:"MuiSwitch"})(Mt),Nt=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.243",height:"10.243",viewBox:"0 0 16.243 16.243",children:t.jsx("g",{id:"Group_4723","data-name":"Group 4723",transform:"translate(2.121 2.121)",children:t.jsxs("g",{id:"Group_4716","data-name":"Group 4716",transform:"translate(0)",children:[t.jsx("line",{id:"Line_1079","data-name":"Line 1079",x2:"16.97",transform:"translate(0 12) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"}),t.jsx("line",{id:"Line_1080","data-name":"Line 1080",y2:"16.97",transform:"translate(0 0) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"})]})})}),It=Ze.coreContractChain;function Dt({details:e}){const{delegatees:a,channelDetails:i}=de(r=>r.admin),{chainId:d}=Qe(),s=It===d;let l;l=a.filter(r=>(s?r.channel:r.alias_address)==e.channelAddress)[0],l||(l=i);const c=et(),h=({test:r})=>l&&t.jsx(en,{notificationTitle:r==null?void 0:r.asub,notificationBody:r==null?void 0:r.amsg,cta:r==null?void 0:r.acta,app:l.name,icon:l.icon,image:r==null?void 0:r.aimg,chainName:tn[d],theme:c.scheme});return t.jsxs(Ue,{children:[t.jsx(N,{align:"flex-start",margin:"30px 0px 10px 0px",children:t.jsx(Q,{weight:"700",size:"12px",spacing:"normal",color:"#575D73",children:"PREVIEW NOTIFICATION"})}),t.jsx(h,{test:e})]})}k.div`
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
`;let Ue,We,Xe,Ke,Ye;Ue=k.div`
  margin: 0;
  width: 100%;
`,Me=({children:e})=>t.jsx(We,{children:e}),We=k.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`,Xe=Ze.coreContractChain,we=k($t).attrs(()=>({classes:{root:"root",switchBase:"switchBase",thumb:"thumb",track:"track",checked:"checked"},disableRipple:!0,focusVisibleClassName:"focusVisible"}))`
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
`,Ke=[{value:"1",label:"Broadcast"},{value:"3",label:"Targeted"},{value:"4",label:"Subset"}],Ye=["Enter",","],it=function(){const e=et(),a=on(425),{account:i,provider:d,chainId:s,wallet:l}=Qe(),{userPushSDKInstance:c}=de(o=>o.user);de(o=>o.contracts);const{channelDetails:h,delegatees:r,aliasDetails:{aliasEthAddr:m}}=de(o=>o.admin),{CHANNNEL_DEACTIVATED_STATE:f}=de(o=>o.channels),{canSend:v}=de(o=>o.canSend),b=Xe===s,{handleConnectWalletAndEnableProfile:I}=n.useContext(an),[g,j]=n.useState(0),[F,R]=n.useState(""),[L,A]=n.useState(i),[x,y]=n.useState([]),[C,_]=n.useState(""),[u,D]=n.useState("1"),[O,E]=n.useState(""),[X,V]=n.useState(!1),[z,M]=n.useState(""),[B,w]=n.useState(""),[U,se]=n.useState(!1),[K,le]=n.useState(""),[Y,H]=n.useState(!1),[Se,T]=n.useState(""),[Ce,q]=n.useState(""),[oe,ue]=n.useState([]),he=n.useMemo(()=>r?r.find(o=>o.channel===F):null,[r,F]),xe=n.useMemo(()=>{if(he){const{channel_settings:o}=he;if(o!==null)return JSON.parse(o)}return null},[he]),Te=n.useMemo(()=>{const o={label:"Default",value:"",isRange:!1};if(xe){const S=xe.map(P=>({label:P.type===3?t.jsxs(qe,{children:[t.jsx("div",{children:P.description}),t.jsx(Me,{children:"Multi-Range"})]}):P.type===2?t.jsxs(qe,{children:[t.jsx("div",{children:P.description}),t.jsx(Me,{children:"Range"})]}):P.description,value:P.index,isRange:P.type===2}));return[o,...S]}return[o]},[xe]),G=()=>{const o=ot.ChannelSettings;window.open(o,"_blank")};n.useEffect(()=>{if(v!==1){const o=window.location.origin;window.location.replace(`${o}${ot.Channels}`)}});const Be=h?h.channelState===f:!1;let ge;b&&r?ge=r.length===1&&r[0].address===i||!r.length:!b&&r&&(ge=r.length===1&&r[0].alias_address===i||!r.length),n.useEffect(()=>{i&&(!r||!r.length?R(i):(ue(r.map(o=>({value:b?o.channel:o.alias_address,label:t.jsxs(At,{children:[t.jsx("img",{src:o.icon,alt:""}),t.jsx("div",{style:{letterSpacing:"0"},children:o.name})]})}))),R(b?r[0].channel:r[0].alias_address)))},[r,i]);const Pe=o=>{if(Ye.includes(o.key)){o.preventDefault(),y(P=>Array.from(new Set([...P,C])));const S=Array.from(new Set([...x,C]));A(S.join()),_("")}},Fe=o=>{const S=x.filter(P=>P!==o);A(S.join()),y(S)};n.useEffect(()=>{const o=["1"];y([]),o.includes(u)?A(i):A("")},[u]);const W=rn(5e3),Ae=()=>{let o=!0;return u==="4"&&x.length<2&&(W.showMessageToast({toastTitle:"Error",toastMessage:"Please enter at least two recipients in order to use subset notifications type",toastType:"ERROR",getToastIcon:S=>t.jsx(pe,{size:S,color:"red"})}),o=!1),o},Oe=async o=>{o.preventDefault();let S=c;if(!S.signer&&(S=await I({wallet:l}),!S)||(W.showLoaderToast({loaderMessage:"Preparing Notification"}),!Ae()))return;j(1);let P=O,Re=z,ae=B,re=K;if(u==="1"||u==="2"||u==="3"||u==="4"||u==="5"){if(X&&ce(O)){T("Please enter a valid notification subject"),j(2),W.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(pe,{size:$,color:"red"})});return}if(Y&&ce(K)){T("Please enter a valid media URL"),j(2),W.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(pe,{size:$,color:"red"})});return}if(U&&ce(B)){T("Please enter a valid CTA link"),j(2),W.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(pe,{size:$,color:"red"})});return}if(ce(z)){T("Please enter a valid notification message"),j(2),W.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:$=>t.jsx(pe,{size:$,color:"red"})});return}}if(u==="1"||u==="2"||u==="3"||u==="4"||u==="5")try{let $;u==="4"?$=x.map(ie=>_e(ie,s)):$=[_e(L,s)],u==="1"&&($=["*"]);const fe=_e(F,s);await S.channel.send($,{notification:{title:P,body:Re},payload:{title:P,body:Re,cta:ae,embed:re,category:Ce},channel:fe}),W.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(at,{size:ie,color:"green"})}),j(2),D("1"),T("Notification Sent"),W.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(at,{size:ie,color:"green"})}),D("1"),M(""),V(!1),E(""),se(!1),w(""),H(!1),le(""),T("")}catch($){T("Send Notification Failed, please try again"),W.showMessageToast({toastTitle:"Error",toastMessage:"Sending Notification Failed: "+$,toastType:"ERROR",getToastIcon:fe=>t.jsx(pe,{size:fe,color:"red"})}),j(0),console.error($)}},ce=o=>o.trim().length==0;let Le=O!==""||z!==""||B!==""||K!=="";return t.jsxs(Bt,{children:[t.jsx(Ot,{children:t.jsx(tt,{padding:a?"0px 0px 0px":"10px 20px 10px",children:t.jsxs(N,{align:"center",children:[t.jsx(sn,{textTransform:"none",weight:a?"500":"400",size:a?"25px":"32px",color:e.color,textAlign:"center",margin:a?"0px 0px":"20px 0px",style:{width:"100%"},children:"Send Notification"}),t.jsx(Q,{color:e.default.secondaryColor,weight:a?"300":"400",size:"14px",textTransform:"none",spacing:"normal",margin:a?"10px 0px":"0px 0px",textAlign:"center",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]})})}),!Be&&t.jsx(ln,{children:t.jsx(Ft,{children:t.jsx(N,{align:"stretch",children:t.jsxs(cn,{flex:"1",direction:"column",justify:"center",margin:"0px",size:"1.1rem",width:"100%",onSubmit:Oe,children:[t.jsxs(N,{flex:"1",self:"stretch",align:"stretch",width:"100%",children:[!ge&&t.jsx(N,{flex:"1",justify:"flex-start",align:"stretch",children:t.jsx(ke,{children:t.jsx(je,{options:oe,onChange:o=>{o.value==m?(R(i),A(i)):(R(o.value),A(o.value))},placeholder:"Select a Channel",value:oe[0]})})}),t.jsx(ee,{display:"none",value:u,onChange:o=>{D(o.target.value)}}),t.jsx(N,{flex:"1",justify:"flex-start",align:"stretch",margin:"40px 0px 0px 0px",children:t.jsx(ke,{children:t.jsx(je,{options:Ke,onChange:o=>{D(o.value),console.debug(o)},value:u})})}),t.jsx(ee,{display:"none",value:u,onChange:o=>{D(o.target.value)}}),u&&t.jsxs(Lt,{children:[t.jsxs(De,{children:[t.jsx(Q,{weight:a?"500":"600",textTransform:"none",size:a?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Title"}),t.jsx(we,{checked:X,onChange:()=>V(!X)})]}),t.jsxs(De,{children:[t.jsx(Q,{weight:a?"500":"600",textTransform:"none",size:a?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Media URL"}),t.jsx(we,{checked:Y,onChange:()=>H(!Y)})]}),t.jsxs(De,{children:[t.jsx(Q,{weight:a?"500":"600",textTransform:"none",size:a?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"CTA Link"}),t.jsx(we,{checked:U,onChange:()=>se(!U)})]})]}),(u==="2"||u==="3"||u==="5")&&t.jsxs(N,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"Recipient Wallet Address"}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:L,onChange:o=>{A(o.target.value)}})]}),u==="4"&&t.jsxs(t.Fragment,{children:[t.jsx(Pt,{children:x.map(o=>t.jsxs("span",{children:[o,t.jsx("i",{onClick:()=>Fe(o),children:t.jsx(Nt,{})})]},o))}),t.jsxs(N,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"Enter Recipients Wallet Addresses"}),t.jsx(ee,{required:x.length===0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:C,onKeyPress:Pe,onChange:o=>{const S=o.target.value.trim();console.debug(S),console.debug(C),_(o.target.value)}}),t.jsx(Q,{size:"13px",margin:"7px 0px 0px 0px",color:e.default.secondaryColor,children:"Enter recipients wallet addresses separated by a comma or by pressing the enter key"})]})]}),u&&X&&t.jsxs(N,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(N,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"Notification Title"}),t.jsx(Q,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:80-O.length})]}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:O,onChange:o=>{E(o.target.value.slice(0,80))}})]}),u&&t.jsxs(N,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs(N,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"Notification Message"}),t.jsx(Q,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:500-z.length})]}),t.jsx(dn,{rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",color:e.default.color,bg:e.default.bg,overflow:"auto",value:z,onChange:o=>{M(o.target.value.slice(0,500))},autocomplete:"off"})]}),u&&t.jsx(t.Fragment,{children:t.jsxs(N,{flex:"1",justify:"flex-start",align:"stretch",margin:"30px 0px 15px 0px",children:[t.jsxs(N,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",margin:"0px 0px 7px 0px",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"Notification Setting Type"}),t.jsx(pn,{color:e.default.primaryPushThemeTextColor,fontSize:"13px",margin:"0px 10px 0px 0px",fontWeight:"600",onClick:G,cursor:"pointer",children:"Manage Settings"})]}),t.jsx(ke,{children:t.jsx(je,{options:Te,onChange:o=>{q(String(o.value))},value:Te[0]})})]})}),u&&Y&&t.jsxs(N,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"Media URL"}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:K,onChange:o=>{le(o.target.value)}})]}),u&&U&&t.jsxs(N,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:a?"500":"600",fontSize:a?"15px":"14px"},children:"CTA Link"}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,radius:"12px",focusBorder:"1px solid #657795",value:B,onChange:o=>{w(o.target.value)}})]}),Se&&g!=1&&t.jsx(N,{margin:"30px 0px 0px 0px",width:"100%",padding:"1.5rem 0",radius:"12px",bg:"#F5F5FA",children:t.jsx("div",{style:{color:"#CF1C84",fontSize:"0.875rem",textAlign:"center"},children:Se})})]}),Le&&t.jsx(Dt,{details:{channelAddress:F,acta:B,aimg:K,amsg:z,asub:O,type:u}}),u&&t.jsx(un,{margin:"spacing-xxxl spacing-none spacing-none spacing-none",children:t.jsxs(hn,{disabled:g==1,variant:"primary",size:"large",children:[g==1&&t.jsx(xn,{type:gn.SEAMLESS,spinnerSize:24,spinnerColor:"#FFF"}),g!=1&&t.jsx(ee,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",size:"16px",type:"submit",value:"Send Notification"})]})})]})})})})]})};const Bt=k(nn)``;k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,k.div`
  // background:red;
  // width:50%;
`,k.div`
  margin: 0px 10px;
`;const ke=k.div`
  .is-open {
    // margin-bottom: 130px;
  }
`,Pt=k.div`
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
`,Ft=k(tt)`
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
`;k.div`
  color: ${e=>e.theme.color||"#000"};
  padding: 10px;
  letter-spacing: normal;
  font-size: 14px;
`;const ne=k.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: normal;
  color: #1e1e1e;
`,je=k(mn)`
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
`;k(je)`
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
`,k(ke)`
  // margin-bottom: 20px;
  border: 1px solid rgba(169, 169, 169, 0.5);
`;const At=k.div`
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
`,Ot=k.div`
  margin: 40px auto 0px auto;
  width: 55%;
  @media (max-width: 1224px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0px auto 0px auto;
  }
`,Lt=k(nt)`
  margin: 40px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  }
`,De=k(nt)`
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
`,qe=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`});export{we as I,it as S,Me as T,yn as __tla};
