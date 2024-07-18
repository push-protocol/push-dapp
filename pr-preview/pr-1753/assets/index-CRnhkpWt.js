import{b7 as H,bW as J,b8 as K,__tla as X}from"./index-o7WFJZb0.js";let j,$=Promise.all([(()=>{try{return X}catch{}})()]).then(async()=>{var O={};(function(m){Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var i=M(H),p=S(J);function S(t){return t&&t.__esModule?t:{default:t}}function w(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return w=function(){return t},t}function M(t){if(t&&t.__esModule)return t;if(t===null||f(t)!=="object"&&typeof t!="function")return{default:t};var o=w();if(o&&o.has(t))return o.get(t);var e={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=n?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(e,a,s):e[a]=t[a]}return e.default=t,o&&o.set(t,e),e}function f(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(o){return typeof o}:f=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},f(t)}function l(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function V(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function x(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,o,e){return o&&x(t.prototype,o),t}function L(t,o){return o&&(f(o)==="object"||typeof o=="function")?o:y(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},v(t)}function y(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&b(t,o)}function b(t,o){return b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},b(t,o)}var g="Select...",k=function(t){W(o,t);function o(e){var n;return V(this,o),n=L(this,v(o).call(this,e)),n.state={selected:n.parseValue(e.value,e.options)||{label:typeof e.placeholder>"u"?g:e.placeholder,value:""},isOpen:!1},n.dropdownRef=(0,i.createRef)(),n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(y(n)),n.fireChangeEvent=n.fireChangeEvent.bind(y(n)),n}return R(o,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var n=this.parseValue(this.props.value,this.props.options);n!==this.state.selected&&this.setState({selected:n})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?g:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(e.type==="mousedown"&&e.button!==0)&&(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,n){var a;if(typeof e=="string")for(var s=0,u=n.length;s<u;s++)if(n[s].type==="group"){var r=n[s].items.filter(function(c){return c.value===e});r.length&&(a=r[0])}else typeof n[s].value<"u"&&n[s].value===e&&(a=n[s]);return a||e}},{key:"setValue",value:function(e,n){var a={selected:{value:e,label:n},isOpen:!1};this.fireChangeEvent(a),this.setState(a)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var n,a=e.value;typeof a>"u"&&(a=e.label||e);var s=e.label||e.value||e,u=a===this.state.selected.value||a===this.state.selected,r=(n={},l(n,"".concat(this.props.baseClassName,"-option"),!0),l(n,e.className,!!e.className),l(n,"is-selected",u),n),c=(0,p.default)(r);return i.default.createElement("div",{key:a,className:c,onMouseDown:this.setValue.bind(this,a,s),onClick:this.setValue.bind(this,a,s),role:"option","aria-selected":u?"true":"false"},s)}},{key:"buildMenu",value:function(){var e=this,n=this.props,a=n.options,s=n.baseClassName,u=a.map(function(r){if(r.type==="group"){var c=i.default.createElement("div",{className:"".concat(s,"-title")},r.name),d=r.items.map(function(h){return e.renderOption(h)});return i.default.createElement("div",{className:"".concat(s,"-group"),key:r.name,role:"listbox",tabIndex:"-1"},c,d)}else return e.renderOption(r)});return u.length?u:i.default.createElement("div",{className:"".concat(s,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var e,n,a,s,u,r=this.props,c=r.baseClassName,d=r.controlClassName,h=r.placeholderClassName,C=r.menuClassName,E=r.arrowClassName,N=r.arrowClosed,_=r.arrowOpen,D=r.className,P=this.props.disabled?"Dropdown-disabled":"",T=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,U=(0,p.default)((e={},l(e,"".concat(c,"-root"),!0),l(e,D,!!D),l(e,"is-open",this.state.isOpen),e)),I=(0,p.default)((n={},l(n,"".concat(c,"-control"),!0),l(n,d,!!d),l(n,P,!!P),n)),q=(0,p.default)((a={},l(a,"".concat(c,"-placeholder"),!0),l(a,h,!!h),l(a,"is-selected",this.isValueSelected()),a)),z=(0,p.default)((s={},l(s,"".concat(c,"-menu"),!0),l(s,C,!!C),s)),A=(0,p.default)((u={},l(u,"".concat(c,"-arrow"),!0),l(u,E,!!E),u)),B=i.default.createElement("div",{className:q},T),G=this.state.isOpen?i.default.createElement("div",{className:z,"aria-expanded":"true"},this.buildMenu()):null;return i.default.createElement("div",{ref:this.dropdownRef,className:U},i.default.createElement("div",{className:I,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},B,i.default.createElement("div",{className:"".concat(c,"-arrow-wrapper")},_&&N?this.state.isOpen?_:N:i.default.createElement("span",{className:A}))),G)}}]),o}(i.Component);k.defaultProps={baseClassName:"Dropdown"};var F=k;m.default=F})(O),j=K(O)});export{j as D,$ as __tla};
