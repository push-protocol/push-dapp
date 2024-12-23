import{dX as de,fK as fe,eu as he,e9 as O,eN as f,eO as w,eP as ee,eR as me,eb as v,e4 as xe,d_ as r,eS as G,eT as ge,eQ as S,fL as be,e8 as x,fM as te,fN as ye,eW as ve,e0 as Se,e1 as De,fO as ne,e6 as Ee,fP as je,eY as Ne,__tla as we}from"./index-BSQmVLhw.js";let ae,Me=Promise.all([(()=>{try{return we}catch{}})()]).then(async()=>{var z={};(function(p){Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var i=E(de),u=D(fe);function D(t){return t&&t.__esModule?t:{default:t}}function k(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return k=function(){return t},t}function E(t){if(t&&t.__esModule)return t;if(t===null||g(t)!=="object"&&typeof t!="function")return{default:t};var a=k();if(a&&a.has(t))return a.get(t);var e={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(e,o,s):e[o]=t[o]}return e.default=t,a&&a.set(t,e),e}function g(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?g=function(a){return typeof a}:g=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g(t)}function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function _(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function j(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function P(t,a,e){return a&&j(t.prototype,a),t}function M(t,a){return a&&(g(a)==="object"||typeof a=="function")?a:N(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},T(t)}function N(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),a&&y(t,a)}function y(t,a){return y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},y(t,a)}var C="Select...",d=function(t){b(a,t);function a(e){var n;return _(this,a),n=M(this,T(a).call(this,e)),n.state={selected:n.parseValue(e.value,e.options)||{label:typeof e.placeholder>"u"?C:e.placeholder,value:""},isOpen:!1},n.dropdownRef=(0,i.createRef)(),n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(N(n)),n.fireChangeEvent=n.fireChangeEvent.bind(N(n)),n}return P(a,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var n=this.parseValue(this.props.value,this.props.options);n!==this.state.selected&&this.setState({selected:n})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?C:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(e.type==="mousedown"&&e.button!==0)&&(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,n){var o;if(typeof e=="string")for(var s=0,h=n.length;s<h;s++)if(n[s].type==="group"){var c=n[s].items.filter(function(m){return m.value===e});c.length&&(o=c[0])}else typeof n[s].value<"u"&&n[s].value===e&&(o=n[s]);return o||e}},{key:"setValue",value:function(e,n){var o={selected:{value:e,label:n},isOpen:!1};this.fireChangeEvent(o),this.setState(o)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var n,o=e.value;typeof o>"u"&&(o=e.label||e);var s=e.label||e.value||e,h=o===this.state.selected.value||o===this.state.selected,c=(n={},l(n,"".concat(this.props.baseClassName,"-option"),!0),l(n,e.className,!!e.className),l(n,"is-selected",h),n),m=(0,u.default)(c);return i.default.createElement("div",{key:o,className:m,onMouseDown:this.setValue.bind(this,o,s),onClick:this.setValue.bind(this,o,s),role:"option","aria-selected":h?"true":"false"},s)}},{key:"buildMenu",value:function(){var e=this,n=this.props,o=n.options,s=n.baseClassName,h=o.map(function(c){if(c.type==="group"){var m=i.default.createElement("div",{className:"".concat(s,"-title")},c.name),L=c.items.map(function(U){return e.renderOption(U)});return i.default.createElement("div",{className:"".concat(s,"-group"),key:c.name,role:"listbox",tabIndex:"-1"},m,L)}else return e.renderOption(c)});return h.length?h:i.default.createElement("div",{className:"".concat(s,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var e,n,o,s,h,c=this.props,m=c.baseClassName,L=c.controlClassName,U=c.placeholderClassName,H=c.menuClassName,K=c.arrowClassName,X=c.arrowClosed,Z=c.arrowOpen,Q=c.className,Y=this.props.disabled?"Dropdown-disabled":"",re=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,oe=(0,u.default)((e={},l(e,"".concat(m,"-root"),!0),l(e,Q,!!Q),l(e,"is-open",this.state.isOpen),e)),se=(0,u.default)((n={},l(n,"".concat(m,"-control"),!0),l(n,L,!!L),l(n,Y,!!Y),n)),ie=(0,u.default)((o={},l(o,"".concat(m,"-placeholder"),!0),l(o,U,!!U),l(o,"is-selected",this.isValueSelected()),o)),le=(0,u.default)((s={},l(s,"".concat(m,"-menu"),!0),l(s,H,!!H),s)),ce=(0,u.default)((h={},l(h,"".concat(m,"-arrow"),!0),l(h,K,!!K),h)),pe=i.default.createElement("div",{className:ie},re),ue=this.state.isOpen?i.default.createElement("div",{className:le,"aria-expanded":"true"},this.buildMenu()):null;return i.default.createElement("div",{ref:this.dropdownRef,className:oe},i.default.createElement("div",{className:se,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},pe,i.default.createElement("div",{className:"".concat(m,"-arrow-wrapper")},Z&&X?this.state.isOpen?Z:X:i.default.createElement("span",{className:ce}))),ue)}}]),a}(i.Component);d.defaultProps={baseClassName:"Dropdown"};var $=d;p.default=$})(z);let J,R,I,F,W,B,A,V,q;J=he(z),R=p=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(p).toLowerCase()),I=p=>p.trim().length===0,F=()=>{me.pageview("/support");const p=["Support","Integrate","Others"],[i,u]=v.useState(0),[D,k]=v.useState(""),[E,g]=v.useState(""),[l,_]=v.useState(p[0]),[j,P]=v.useState(""),[M,T]=v.useState(""),[N,b]=v.useState(""),y=xe(),C=d=>{if(d.preventDefault(),R(E))if(I(D))b("Name can't be empty"),u(0);else if(I(j))b("Subject can't be empty"),u(0);else if(I(M))b("Message can't be empty"),u(0);else{u(1);const $={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:E,name:D,topic:l,sub:j,msg:M})};fetch("https://backend-kovan.epns.io/apis/mailing/sendMail",$).then(t=>t.json()).then(t=>{u(2)}).catch(t=>{b("Mayday! Mayday! something went wrong. Please retry..."),u(0)})}else b("Incorrect e-mail, please check and retry!"),u(0)};return r.jsx(W,{children:r.jsxs(G,{alignSelf:"stretch",justifyContent:"flex-start",children:[r.jsxs(G,{alignSelf:"stretch",justifyContent:"flex-start",children:[r.jsx(ge,{children:r.jsx(S,{weight:"400",size:"32px",color:y.color,children:"Support"})}),r.jsx(S,{color:y.default.secondaryColor,weight:"400",size:"16px",textTransform:"none",textAlign:"center",spacing:"normal",margin:"0px 0px",children:"Let's get in touch!"})]}),r.jsx(G,{alignSelf:"stretch",children:r.jsx(be,{flex:"1",direction:"row",self:"stretch",margin:"0px",size:"1.1rem",onSubmit:C,children:r.jsxs(x,{self:"stretch",align:"stretch",justify:"stretch",margin:"10px -15px",children:[i===0&&r.jsxs(r.Fragment,{children:[r.jsxs(te,{align:"stretch",children:[r.jsxs(x,{flex:"1",margin:"15px",justify:"flex-start",align:"stretch",minWidth:"280px",children:[r.jsx(A,{required:!0,radius:"4px",padding:"12px",bg:"#fff",border:"12px",placeholder:"John Wick",value:D,onChange:d=>{k(d.target.value)},autocomplete:"name",style:{}}),D.trim().length===0&&r.jsx(S,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Name"})]}),r.jsxs(x,{flex:"5",margin:"15px",justify:"flex-start",align:"stretch",minWidth:"280px",children:[r.jsx(A,{required:!0,placeholder:"john@wick.com",radius:"4px",padding:"12px",bg:"#fff",value:E,onChange:d=>{g(d.target.value)},autocomplete:"email"}),E.trim().length===0&&r.jsx(S,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"E-mail"})]})]}),r.jsx(x,{flex:"5",justify:"flex-start",align:"stretch",minWidth:"280px",margin:"15px",children:r.jsx(B,{options:p,onChange:d=>_(d.value),value:l,placeholder:"Select an option"})}),r.jsxs(x,{justify:"center",align:"stretch",minWidth:"280px",margin:"15px",children:[r.jsx(A,{required:!0,placeholder:"I want to tell you guys a secret!",radius:"4px",padding:"12px",bg:"#fff",value:j,onChange:d=>{P(d.target.value)},autocomplete:"on"}),j.trim().length===0&&r.jsx(S,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Subject"})]}),r.jsx(x,{justify:"center",align:"stretch",minWidth:"280px",margin:"15px",children:r.jsx(V,{required:!0,placeholder:"This is where you will tell us that secret, or a bug or whatever is on your mind.",rows:"6",radius:"4px",padding:"12px",bg:"#fff",value:M,onChange:d=>{T(d.target.value)},autocomplete:"off"})})]}),i===2&&r.jsx(x,{align:"center",margin:"0px 10px",children:r.jsxs(te,{color:"#e20880",bg:"#000",padding:"10px 15px",columnGap:"0px",rowGap:"0px",children:[r.jsx(ye,{size:24,color:"#fff"}),r.jsx(S,{padding:"0px 0px 0px 8px",color:"#fff",textTransform:"uppercase",spacing:"normal",children:"Message Sent! We will be in Touch :)"})]})}),N&&i===0&&r.jsx(x,{align:"center",margin:"0px 10px",children:r.jsx(x,{color:"#e20880",bg:"#000",padding:"10px 15px",margin:"15px",children:r.jsx(S,{color:"#fff",textTransform:"uppercase",spacing:"normal",children:N})})}),r.jsx(x,{justify:"stretch",self:"stretch",align:"stretch",minWidth:"280px",children:i!==2&&r.jsxs(ve,{bg:"#000",color:"#fff",border:y.buttonBd,flex:"1",radius:"4px",disabled:i,margin:"15px",padding:"12px 15px",children:[i===1&&r.jsx(Se,{type:De.SEAMLESS,spinnerColor:"#fff",spinnerSize:24}),i===0&&r.jsx(ne,{cursor:"hand",color:"#fff",weight:"400",size:".9em",spacing:"normal",type:"submit",value:"Submit"})]})})]})})})]})})},W=O(Ee)`
  align-items: center;
  align-self: center;
  background: ${p=>p.theme.default.bg};
  border-radius: ${f.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${f.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${w.MINI_MODULES.DESKTOP.RIGHT} - ${w.MINI_MODULES.DESKTOP.LEFT} -
      ${f.ADJUSTMENTS.PADDING.BIG} - ${f.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${f.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${ee.laptop} {
    margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${f.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${w.MINI_MODULES.TABLET.RIGHT} - ${w.MINI_MODULES.TABLET.LEFT} -
        ${f.ADJUSTMENTS.PADDING.DEFAULT} - ${f.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${ee.mobileM} {
    margin: ${f.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${f.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${w.MINI_MODULES.MOBILE.RIGHT} - ${w.MINI_MODULES.MOBILE.LEFT} -
        ${f.ADJUSTMENTS.PADDING.DEFAULT} - ${f.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`,B=O(J)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid ${p=>p.theme.buttonBd};
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: normal;
    font-size: 0.8em;
    padding-left: 6px;
  }

  .Dropdown-arrow {
    top: 18px;
    bottom: 0;
    border-color: #fff transparent transparent;
  }

  .Dropdown-menu {
    border: 1px solid #000;
    box-shadow: none;
    background-color: #000;
    border-radius: 0px;
    margin-top: -3px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Dropdown-option {
    background-color: rgb(35 35 35);
    color: #ffffff99;

    text-transform: uppercase;
    letter-spacing: normal;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`,A=O(ne)`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
`,V=O(je)`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
`,ae=()=>r.jsx(q,{children:r.jsx(F,{})}),q=O(Ne)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Me as __tla,ae as default};
