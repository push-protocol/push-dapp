import{b0 as n,ea as Kt,eb as Yt,dl as Z,dp as qt,bh as Re,ec as J,ed as me,ee as be,ef as ve,eg as Gt,eh as Ht,ei as Ve,cv as Zt,ej as ye,ek as ze,el as Jt,em as Qt,b2 as t,b6 as k,bj as Je,bZ as de,aZ as Qe,b9 as et,bd as $,bO as Q,dL as en,dM as tn,b7 as nn,bc as tt,cc as nt,ds as rn,da as on,b1 as rt,cV as an,bR as sn,bb as ln,cb as cn,ce as ee,cf as dn,en as pn,b3 as un,bW as hn,b4 as xn,b5 as gn,cY as pe,d5 as _e,dN as ot,__tla as fn}from"./index-pmR1DyNh.js";import{D as mn,__tla as bn}from"./index-uzAz6uKC.js";import{T as at,__tla as vn}from"./TransitionGroupContext-DioLaQ2F.js";let we,it,Me,yn=Promise.all([(()=>{try{return fn}catch{}})(),(()=>{try{return bn}catch{}})(),(()=>{try{return vn}catch{}})()]).then(async()=>{function Ne(e,o){var i=function(s){return o&&n.isValidElement(s)?o(s):s},d=Object.create(null);return e&&n.Children.map(e,function(s){return s}).forEach(function(s){d[s.key]=i(s)}),d}function st(e,o){e=e||{},o=o||{};function i(f){return f in o?o[f]:e[f]}var d=Object.create(null),s=[];for(var l in e)l in o?s.length&&(d[l]=s,s=[]):s.push(l);var c,h={};for(var a in o){if(d[a])for(c=0;c<d[a].length;c++){var m=d[a][c];h[d[a][c]]=i(m)}h[a]=i(a)}for(c=0;c<s.length;c++)h[s[c]]=i(s[c]);return h}function te(e,o,i){return i[o]!=null?i[o]:e.props[o]}function lt(e,o){return Ne(e.children,function(i){return n.cloneElement(i,{onExited:o.bind(null,i),in:!0,appear:te(i,"appear",e),enter:te(i,"enter",e),exit:te(i,"exit",e)})})}function ct(e,o,i){var d=Ne(e.children),s=st(o,d);return Object.keys(s).forEach(function(l){var c=s[l];if(n.isValidElement(c)){var h=l in o,a=l in d,m=o[l],f=n.isValidElement(m)&&!m.props.in;a&&(!h||f)?s[l]=n.cloneElement(c,{onExited:i.bind(null,c),in:!0,exit:te(c,"exit",e),enter:te(c,"enter",e)}):!a&&h&&!f?s[l]=n.cloneElement(c,{in:!1}):a&&h&&n.isValidElement(m)&&(s[l]=n.cloneElement(c,{onExited:i.bind(null,c),in:m.props.in,exit:te(c,"exit",e),enter:te(c,"enter",e)}))}}),s}var dt=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},pt={component:"div",childFactory:function(e){return e}},$e=function(e){Kt(o,e);function o(d,s){var l;l=e.call(this,d,s)||this;var c=l.handleExited.bind(Yt(l));return l.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},l}var i=o.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(d,s){var l=s.children,c=s.handleExited,h=s.firstRender;return{children:h?lt(d,c):ct(d,l,c),firstRender:!1}},i.handleExited=function(d,s){var l=Ne(this.props.children);d.key in l||(d.props.onExited&&d.props.onExited(s),this.mounted&&this.setState(function(c){var h=Z({},c.children);return delete h[d.key],{children:h}}))},i.render=function(){var d=this.props,s=d.component,l=d.childFactory,c=qt(d,["component","childFactory"]),h=this.state.contextValue,a=dt(this.state.children).map(l);return delete c.appear,delete c.enter,delete c.exit,s===null?Re.createElement(at.Provider,{value:h},a):Re.createElement(at.Provider,{value:h},Re.createElement(s,c,a))},o}(Re.Component);$e.propTypes={},$e.defaultProps=pt;var ut=typeof window>"u"?n.useEffect:n.useLayoutEffect;function ht(e){var o=e.classes,i=e.pulsate,d=i===void 0?!1:i,s=e.rippleX,l=e.rippleY,c=e.rippleSize,h=e.in,a=e.onExited,m=a===void 0?function(){}:a,f=e.timeout,v=n.useState(!1),b=v[0],I=v[1],g=J(o.ripple,o.rippleVisible,d&&o.ripplePulsate),j={width:c,height:c,top:-(c/2)+l,left:-(c/2)+s},F=J(o.child,b&&o.childLeaving,d&&o.childPulsate),E=me(m);return ut(function(){if(!h){I(!0);var L=setTimeout(E,f);return function(){clearTimeout(L)}}},[E,h,f]),n.createElement("span",{className:g,style:j},n.createElement("span",{className:F}))}var Ie=550,xt=80,gt=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(Ie,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(Ie,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},ft=n.forwardRef(function(e,o){var i=e.center,d=i===void 0?!1:i,s=e.classes,l=e.className,c=ve(e,["center","classes","className"]),h=n.useState([]),a=h[0],m=h[1],f=n.useRef(0),v=n.useRef(null);n.useEffect(function(){v.current&&(v.current(),v.current=null)},[a]);var b=n.useRef(!1),I=n.useRef(null),g=n.useRef(null),j=n.useRef(null);n.useEffect(function(){return function(){clearTimeout(I.current)}},[]);var F=n.useCallback(function(x){var y=x.pulsate,C=x.rippleX,_=x.rippleY,u=x.rippleSize,D=x.cb;m(function(O){return[].concat(Gt(O),[n.createElement(ht,{key:f.current,classes:s,timeout:Ie,pulsate:y,rippleX:C,rippleY:_,rippleSize:u})])}),f.current+=1,v.current=D},[s]),E=n.useCallback(function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=arguments.length>2?arguments[2]:void 0,_=y.pulsate,u=_===void 0?!1:_,D=y.center,O=D===void 0?d||y.pulsate:D,R=y.fakeElement,X=R===void 0?!1:R;if(x.type==="mousedown"&&b.current){b.current=!1;return}x.type==="touchstart"&&(b.current=!0);var V=X?null:j.current,z=V?V.getBoundingClientRect():{width:0,height:0,left:0,top:0},M,B,w;if(O||x.clientX===0&&x.clientY===0||!x.clientX&&!x.touches)M=Math.round(z.width/2),B=Math.round(z.height/2);else{var W=x.touches?x.touches[0]:x,se=W.clientX,K=W.clientY;M=Math.round(se-z.left),B=Math.round(K-z.top)}if(O)w=Math.sqrt((2*Math.pow(z.width,2)+Math.pow(z.height,2))/3),w%2===0&&(w+=1);else{var le=Math.max(Math.abs((V?V.clientWidth:0)-M),M)*2+2,Y=Math.max(Math.abs((V?V.clientHeight:0)-B),B)*2+2;w=Math.sqrt(Math.pow(le,2)+Math.pow(Y,2))}x.touches?g.current===null&&(g.current=function(){F({pulsate:u,rippleX:M,rippleY:B,rippleSize:w,cb:C})},I.current=setTimeout(function(){g.current&&(g.current(),g.current=null)},xt)):F({pulsate:u,rippleX:M,rippleY:B,rippleSize:w,cb:C})},[d,F]),L=n.useCallback(function(){E({},{pulsate:!0})},[E]),A=n.useCallback(function(x,y){if(clearTimeout(I.current),x.type==="touchend"&&g.current){x.persist(),g.current(),g.current=null,I.current=setTimeout(function(){A(x,y)});return}g.current=null,m(function(C){return C.length>0?C.slice(1):C}),v.current=y},[]);return n.useImperativeHandle(o,function(){return{pulsate:L,start:E,stop:A}},[L,E,A]),n.createElement("span",Z({className:J(s.root,l),ref:j},c),n.createElement($e,{component:null,exit:!0},a))});const mt=be(gt,{flip:!1,name:"MuiTouchRipple"})(n.memo(ft));var bt={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},vt=n.forwardRef(function(e,o){var i=e.action,d=e.buttonRef,s=e.centerRipple,l=s===void 0?!1:s,c=e.children,h=e.classes,a=e.className,m=e.component,f=m===void 0?"button":m,v=e.disabled,b=v===void 0?!1:v,I=e.disableRipple,g=I===void 0?!1:I,j=e.disableTouchRipple,F=j===void 0?!1:j,E=e.focusRipple,L=E===void 0?!1:E,A=e.focusVisibleClassName,x=e.onBlur,y=e.onClick,C=e.onFocus,_=e.onFocusVisible,u=e.onKeyDown,D=e.onKeyUp,O=e.onMouseDown,R=e.onMouseLeave,X=e.onMouseUp,V=e.onTouchEnd,z=e.onTouchMove,M=e.onTouchStart,B=e.onDragLeave,w=e.tabIndex,W=w===void 0?0:w,se=e.TouchRippleProps,K=e.type,le=K===void 0?"button":K,Y=ve(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),H=n.useRef(null);function Se(){return Zt.findDOMNode(H.current)}var T=n.useRef(null),Ce=n.useState(!1),q=Ce[0],re=Ce[1];b&&q&&re(!1);var ue=Ht(),he=ue.isFocusVisible,xe=ue.onBlurVisible,Te=ue.ref;n.useImperativeHandle(i,function(){return{focusVisible:function(){re(!0),H.current.focus()}}},[]),n.useEffect(function(){q&&L&&!g&&T.current.pulsate()},[g,L,q]);function G(p,He){var Ut=arguments.length>2&&arguments[2]!==void 0?arguments[2]:F;return me(function(Ze){He&&He(Ze);var Xt=Ut;return!Xt&&T.current&&T.current[p](Ze),!0})}var Be=G("start",O),ge=G("stop",B),Pe=G("stop",X),Fe=G("stop",function(p){q&&p.preventDefault(),R&&R(p)}),U=G("start",M),Ae=G("stop",V),Oe=G("stop",z),ce=G("stop",function(p){q&&(xe(p),re(!1)),x&&x(p)},!1),Le=me(function(p){H.current||(H.current=p.currentTarget),he(p)&&(re(!0),_&&_(p)),C&&C(p)}),r=function(){var p=Se();return f&&f!=="button"&&!(p.tagName==="A"&&p.href)},S=n.useRef(!1),P=me(function(p){L&&!S.current&&q&&T.current&&p.key===" "&&(S.current=!0,p.persist(),T.current.stop(p,function(){T.current.start(p)})),p.target===p.currentTarget&&r()&&p.key===" "&&p.preventDefault(),u&&u(p),p.target===p.currentTarget&&r()&&p.key==="Enter"&&!b&&(p.preventDefault(),y&&y(p))}),Ee=me(function(p){L&&p.key===" "&&T.current&&q&&!p.defaultPrevented&&(S.current=!1,p.persist(),T.current.stop(p,function(){T.current.pulsate(p)})),D&&D(p),y&&p.target===p.currentTarget&&r()&&p.key===" "&&!p.defaultPrevented&&y(p)}),oe=f;oe==="button"&&Y.href&&(oe="a");var ae={};oe==="button"?(ae.type=le,ae.disabled=b):((oe!=="a"||!Y.href)&&(ae.role="button"),ae["aria-disabled"]=b);var N=Ve(d,o),fe=Ve(Te,H),ie=Ve(N,fe),Ge=n.useState(!1),Vt=Ge[0],_t=Ge[1];n.useEffect(function(){_t(!0)},[]);var Wt=Vt&&!g&&!b;return n.createElement(oe,Z({className:J(h.root,a,q&&[h.focusVisible,A],b&&h.disabled),onBlur:ce,onClick:y,onFocus:Le,onKeyDown:P,onKeyUp:Ee,onMouseDown:Be,onMouseLeave:Fe,onMouseUp:Pe,onDragLeave:ge,onTouchEnd:Ae,onTouchMove:Oe,onTouchStart:U,ref:ie,tabIndex:b?-1:W},ae,Y),c,Wt?n.createElement(mt,Z({ref:T,center:l},se)):null)});const yt=be(bt,{name:"MuiButtonBase"})(vt);var wt=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:ye(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:ye(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:ye(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},kt=n.forwardRef(function(e,o){var i=e.edge,d=i===void 0?!1:i,s=e.children,l=e.classes,c=e.className,h=e.color,a=h===void 0?"default":h,m=e.disabled,f=m===void 0?!1:m,v=e.disableFocusRipple,b=v===void 0?!1:v,I=e.size,g=I===void 0?"medium":I,j=ve(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(yt,Z({className:J(l.root,c,a!=="default"&&l["color".concat(ze(a))],f&&l.disabled,g==="small"&&l["size".concat(ze(g))],{start:l.edgeStart,end:l.edgeEnd}[d]),centerRipple:!0,focusRipple:!b,disabled:f,ref:o},j),n.createElement("span",{className:l.label},s))});const jt=be(wt,{name:"MuiIconButton"})(kt);var St=n.createContext();function Ct(){return n.useContext(St)}var Tt={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},Et=n.forwardRef(function(e,o){var i=e.autoFocus,d=e.checked,s=e.checkedIcon,l=e.classes,c=e.className,h=e.defaultChecked,a=e.disabled,m=e.icon,f=e.id,v=e.inputProps,b=e.inputRef,I=e.name,g=e.onBlur,j=e.onChange,F=e.onFocus,E=e.readOnly,L=e.required,A=e.tabIndex,x=e.type,y=e.value,C=ve(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=Jt({controlled:d,default:!!h,name:"SwitchBase",state:"checked"}),u=Qt(_,2),D=u[0],O=u[1],R=Ct(),X=function(w){F&&F(w),R&&R.onFocus&&R.onFocus(w)},V=function(w){g&&g(w),R&&R.onBlur&&R.onBlur(w)},z=function(w){var W=w.target.checked;O(W),j&&j(w,W)},M=a;R&&typeof M>"u"&&(M=R.disabled);var B=x==="checkbox"||x==="radio";return n.createElement(jt,Z({component:"span",className:J(l.root,c,D&&l.checked,M&&l.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:X,onBlur:V,ref:o},C),n.createElement("input",Z({autoFocus:i,checked:d,defaultChecked:h,className:l.input,disabled:M,id:B&&f,name:I,onChange:z,readOnly:E,ref:b,required:L,tabIndex:A,type:x,value:y},v)),D?s:m)});const Rt=be(Tt,{name:"PrivateSwitchBase"})(Et);var zt=function(e){return{root:{display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:e.palette.type==="light"?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:e.palette.type==="light"?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:ye(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:ye(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.type==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.type==="light"?.38:.3}}},Mt=n.forwardRef(function(e,o){var i=e.classes,d=e.className,s=e.color,l=s===void 0?"secondary":s,c=e.edge,h=c===void 0?!1:c,a=e.size,m=a===void 0?"medium":a,f=ve(e,["classes","className","color","edge","size"]),v=n.createElement("span",{className:i.thumb});return n.createElement("span",{className:J(i.root,d,{start:i.edgeStart,end:i.edgeEnd}[h],m==="small"&&i["size".concat(ze(m))])},n.createElement(Rt,Z({type:"checkbox",icon:v,checkedIcon:v,classes:{root:J(i.switchBase,i["color".concat(ze(l))]),input:i.input,checked:i.checked,disabled:i.disabled},ref:o},f)),n.createElement("span",{className:i.track}))});const Nt=be(zt,{name:"MuiSwitch"})(Mt),$t=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.243",height:"10.243",viewBox:"0 0 16.243 16.243",children:t.jsx("g",{id:"Group_4723","data-name":"Group 4723",transform:"translate(2.121 2.121)",children:t.jsxs("g",{id:"Group_4716","data-name":"Group 4716",transform:"translate(0)",children:[t.jsx("line",{id:"Line_1079","data-name":"Line 1079",x2:"16.97",transform:"translate(0 12) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"}),t.jsx("line",{id:"Line_1080","data-name":"Line 1080",y2:"16.97",transform:"translate(0 0) rotate(-45)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"3"})]})})}),It=Je.coreContractChain;function Dt({details:e}){const{delegatees:o,channelDetails:i}=de(a=>a.admin),{chainId:d}=Qe(),s=It===d;let l;l=o.filter(a=>(s?a.channel:a.alias_address)==e.channelAddress)[0],l||(l=i);const c=et(),h=({test:a})=>l&&t.jsx(en,{notificationTitle:a==null?void 0:a.asub,notificationBody:a==null?void 0:a.amsg,cta:a==null?void 0:a.acta,app:l.name,icon:l.icon,image:a==null?void 0:a.aimg,chainName:tn[d],theme:c.scheme});return t.jsxs(We,{children:[t.jsx($,{align:"flex-start",margin:"30px 0px 10px 0px",children:t.jsx(Q,{weight:"700",size:"12px",spacing:"normal",color:"#575D73",children:"PREVIEW NOTIFICATION"})}),t.jsx(h,{test:e})]})}k.div`
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
`;let We,Ue,Xe,Ke,Ye;We=k.div`
  margin: 0;
  width: 100%;
`,Me=({children:e})=>t.jsx(Ue,{children:e}),Ue=k.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`,Xe=Je.coreContractChain,we=k(Nt).attrs(()=>({classes:{root:"root",switchBase:"switchBase",thumb:"thumb",track:"track",checked:"checked"},disableRipple:!0,focusVisibleClassName:"focusVisible"}))`
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
`,Ke=[{value:"1",label:"Broadcast"},{value:"3",label:"Targeted"},{value:"4",label:"Subset"}],Ye=["Enter",","],it=function(){const e=et(),o=rn(425),{account:i,provider:d,chainId:s,wallet:l}=Qe(),{userPushSDKInstance:c}=de(r=>r.user);de(r=>r.contracts);const{channelDetails:h,delegatees:a,aliasDetails:{aliasEthAddr:m}}=de(r=>r.admin),{CHANNNEL_DEACTIVATED_STATE:f}=de(r=>r.channels),{canSend:v}=de(r=>r.canSend),b=Xe===s,{handleConnectWalletAndEnableProfile:I}=n.useContext(on),[g,j]=n.useState(0),[F,E]=n.useState(""),[L,A]=n.useState(i),[x,y]=n.useState([]),[C,_]=n.useState(""),[u,D]=n.useState("1"),[O,R]=n.useState(""),[X,V]=n.useState(!1),[z,M]=n.useState(""),[B,w]=n.useState(""),[W,se]=n.useState(!1),[K,le]=n.useState(""),[Y,H]=n.useState(!1),[Se,T]=n.useState(""),[Ce,q]=n.useState(""),[re,ue]=n.useState([]),he=n.useMemo(()=>a?a.find(r=>r.channel===F):null,[a,F]),xe=n.useMemo(()=>{if(he){const{channel_settings:r}=he;if(r!==null)return JSON.parse(r)}return null},[he]),Te=n.useMemo(()=>{const r={label:"Default",value:"",isRange:!1};if(xe){const S=xe.map(P=>({label:P.type===3?t.jsxs(qe,{children:[t.jsx("div",{children:P.description}),t.jsx(Me,{children:"Multi-Range"})]}):P.type===2?t.jsxs(qe,{children:[t.jsx("div",{children:P.description}),t.jsx(Me,{children:"Range"})]}):P.description,value:P.index,isRange:P.type===2}));return[r,...S]}return[r]},[xe]),G=()=>{const r=rt.ChannelSettings;window.open(r,"_blank")};n.useEffect(()=>{if(v!==1){const r=window.location.origin;window.location.replace(`${r}${rt.Channels}`)}});const Be=h?h.channelState===f:!1;let ge;b&&a?ge=a.length===1&&a[0].address===i||!a.length:!b&&a&&(ge=a.length===1&&a[0].alias_address===i||!a.length),n.useEffect(()=>{i&&(!a||!a.length?E(i):(ue(a.map(r=>({value:b?r.channel:r.alias_address,label:t.jsxs(At,{children:[t.jsx("img",{src:r.icon,alt:""}),t.jsx("div",{style:{letterSpacing:"0"},children:r.name})]})}))),E(b?a[0].channel:a[0].alias_address)))},[a,i]);const Pe=r=>{if(Ye.includes(r.key)){r.preventDefault(),y(P=>Array.from(new Set([...P,C])));const S=Array.from(new Set([...x,C]));A(S.join()),_("")}},Fe=r=>{const S=x.filter(P=>P!==r);A(S.join()),y(S)};n.useEffect(()=>{const r=["1"];y([]),r.includes(u)?A(i):A("")},[u]);const U=an(5e3),Ae=()=>{let r=!0;return u==="4"&&x.length<2&&(U.showMessageToast({toastTitle:"Error",toastMessage:"Please enter at least two recipients in order to use subset notifications type",toastType:"ERROR",getToastIcon:S=>t.jsx(pe,{size:S,color:"red"})}),r=!1),r},Oe=async r=>{r.preventDefault();let S=c;if(!S.signer&&(S=await I({wallet:l}),!S)||(U.showLoaderToast({loaderMessage:"Preparing Notification"}),!Ae()))return;j(1);let P=O,Ee=z,oe=B,ae=K;if(u==="1"||u==="2"||u==="3"||u==="4"||u==="5"){if(X&&ce(O)){T("Please enter a valid notification subject"),j(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:N=>t.jsx(pe,{size:N,color:"red"})});return}if(Y&&ce(K)){T("Please enter a valid media URL"),j(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:N=>t.jsx(pe,{size:N,color:"red"})});return}if(W&&ce(B)){T("Please enter a valid CTA link"),j(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:N=>t.jsx(pe,{size:N,color:"red"})});return}if(ce(z)){T("Please enter a valid notification message"),j(2),U.showMessageToast({toastTitle:"Error",toastMessage:"Incorrect Payload",toastType:"ERROR",getToastIcon:N=>t.jsx(pe,{size:N,color:"red"})});return}}if(u==="1"||u==="2"||u==="3"||u==="4"||u==="5")try{let N;u==="4"?N=x.map(ie=>_e(ie,s)):N=[_e(L,s)],u==="1"&&(N=["*"]);const fe=_e(F,s);await S.channel.send(N,{notification:{title:P,body:Ee},payload:{title:P,body:Ee,cta:oe,embed:ae,category:Ce},channel:fe}),U.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(ot,{size:ie,color:"green"})}),j(2),D("1"),T("Notification Sent"),U.showMessageToast({toastTitle:"Success",toastMessage:"Notification Sent",toastType:"SUCCESS",getToastIcon:ie=>t.jsx(ot,{size:ie,color:"green"})}),D("1"),M(""),V(!1),R(""),se(!1),w(""),H(!1),le(""),T("")}catch(N){T("Send Notification Failed, please try again"),U.showMessageToast({toastTitle:"Error",toastMessage:"Sending Notification Failed: "+N,toastType:"ERROR",getToastIcon:fe=>t.jsx(pe,{size:fe,color:"red"})}),j(0),console.error(N)}},ce=r=>r.trim().length==0;let Le=O!==""||z!==""||B!==""||K!=="";return t.jsxs(Bt,{children:[t.jsx(Ot,{children:t.jsx(tt,{padding:o?"0px 0px 0px":"10px 20px 10px",children:t.jsxs($,{align:"center",children:[t.jsx(sn,{textTransform:"none",weight:o?"500":"400",size:o?"25px":"32px",color:e.color,textAlign:"center",margin:o?"0px 0px":"20px 0px",style:{width:"100%"},children:"Send Notification"}),t.jsx(Q,{color:e.default.secondaryColor,weight:o?"300":"400",size:"14px",textTransform:"none",spacing:"normal",margin:o?"10px 0px":"0px 0px",textAlign:"center",children:"Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users."})]})})}),!Be&&t.jsx(ln,{children:t.jsx(Ft,{children:t.jsx($,{align:"stretch",children:t.jsxs(cn,{flex:"1",direction:"column",justify:"center",margin:"0px",size:"1.1rem",width:"100%",onSubmit:Oe,children:[t.jsxs($,{flex:"1",self:"stretch",align:"stretch",width:"100%",children:[!ge&&t.jsx($,{flex:"1",justify:"flex-start",align:"stretch",children:t.jsx(ke,{children:t.jsx(je,{options:re,onChange:r=>{r.value==m?(E(i),A(i)):(E(r.value),A(r.value))},placeholder:"Select a Channel",value:re[0]})})}),t.jsx(ee,{display:"none",value:u,onChange:r=>{D(r.target.value)}}),t.jsx($,{flex:"1",justify:"flex-start",align:"stretch",margin:"40px 0px 0px 0px",children:t.jsx(ke,{children:t.jsx(je,{options:Ke,onChange:r=>{D(r.value),console.debug(r)},value:u})})}),t.jsx(ee,{display:"none",value:u,onChange:r=>{D(r.target.value)}}),u&&t.jsxs(Lt,{children:[t.jsxs(De,{children:[t.jsx(Q,{weight:o?"500":"600",textTransform:"none",size:o?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Title"}),t.jsx(we,{checked:X,onChange:()=>V(!X)})]}),t.jsxs(De,{children:[t.jsx(Q,{weight:o?"500":"600",textTransform:"none",size:o?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"Media URL"}),t.jsx(we,{checked:Y,onChange:()=>H(!Y)})]}),t.jsxs(De,{children:[t.jsx(Q,{weight:o?"500":"600",textTransform:"none",size:o?"15px":"14px",color:e.default.color,padding:"5px 15px",radius:"30px",children:"CTA Link"}),t.jsx(we,{checked:W,onChange:()=>se(!W)})]})]}),(u==="2"||u==="3"||u==="5")&&t.jsxs($,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"Recipient Wallet Address"}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:L,onChange:r=>{A(r.target.value)}})]}),u==="4"&&t.jsxs(t.Fragment,{children:[t.jsx(Pt,{children:x.map(r=>t.jsxs("span",{children:[r,t.jsx("i",{onClick:()=>Fe(r),children:t.jsx($t,{})})]},r))}),t.jsxs($,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"Enter Recipients Wallet Addresses"}),t.jsx(ee,{required:x.length===0,maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:C,onKeyPress:Pe,onChange:r=>{const S=r.target.value.trim();console.debug(S),console.debug(C),_(r.target.value)}}),t.jsx(Q,{size:"13px",margin:"7px 0px 0px 0px",color:e.default.secondaryColor,children:"Enter recipients wallet addresses separated by a comma or by pressing the enter key"})]})]}),u&&X&&t.jsxs($,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs($,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"Notification Title"}),t.jsx(Q,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:80-O.length})]}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:O,onChange:r=>{R(r.target.value.slice(0,80))}})]}),u&&t.jsxs($,{margin:"15px 0px",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsxs($,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"Notification Message"}),t.jsx(Q,{color:e.default.secondaryColor,size:"13px",margin:"0px 10px 0px 0px",weight:"700",children:500-z.length})]}),t.jsx(dn,{rows:"4",maxlength:"250",padding:"12px",weight:"400",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",color:e.default.color,bg:e.default.bg,overflow:"auto",value:z,onChange:r=>{M(r.target.value.slice(0,500))},autocomplete:"off"})]}),u&&t.jsx(t.Fragment,{children:t.jsxs($,{flex:"1",justify:"flex-start",align:"stretch",margin:"30px 0px 15px 0px",children:[t.jsxs($,{display:"flex",direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",margin:"0px 0px 7px 0px",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"Notification Setting Type"}),t.jsx(pn,{color:e.default.primaryPushThemeTextColor,fontSize:"13px",margin:"0px 10px 0px 0px",fontWeight:"600",onClick:G,cursor:"pointer",children:"Manage Settings"})]}),t.jsx(ke,{children:t.jsx(je,{options:Te,onChange:r=>{q(String(r.value))},value:Te[0]})})]})}),u&&Y&&t.jsxs($,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"Media URL"}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,focusBorder:"1px solid #657795",radius:"12px",value:K,onChange:r=>{le(r.target.value)}})]}),u&&W&&t.jsxs($,{margin:"15px 0",flex:"1",self:"stretch",align:"stretch",width:"100%",children:[t.jsx(ne,{style:{color:e.color,fontWeight:o?"500":"600",fontSize:o?"15px":"14px"},children:"CTA Link"}),t.jsx(ee,{maxlength:"40",flex:"1",padding:"12px",weight:"400",size:"16px",color:e.default.color,bg:e.default.bg,height:"25px",margin:"7px 0px 0px 0px",border:`1px solid ${e.snfBorder}`,radius:"12px",focusBorder:"1px solid #657795",value:B,onChange:r=>{w(r.target.value)}})]}),Se&&g!=1&&t.jsx($,{margin:"30px 0px 0px 0px",width:"100%",padding:"1.5rem 0",radius:"12px",bg:"#F5F5FA",children:t.jsx("div",{style:{color:"#CF1C84",fontSize:"0.875rem",textAlign:"center"},children:Se})})]}),Le&&t.jsx(Dt,{details:{channelAddress:F,acta:B,aimg:K,amsg:z,asub:O,type:u}}),u&&t.jsx(un,{margin:"spacing-xxxl spacing-none spacing-none spacing-none",children:t.jsxs(hn,{disabled:g==1,variant:"primary",size:"large",children:[g==1&&t.jsx(xn,{type:gn.SEAMLESS,spinnerSize:24,spinnerColor:"#FFF"}),g!=1&&t.jsx(ee,{cursor:"hand",textTransform:"none",color:"#fff",weight:"600",size:"16px",type:"submit",value:"Send Notification"})]})})]})})})})]})};const Bt=k(nn)``;k.div`
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
