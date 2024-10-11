import{d_ as d,fW as j,fX as k,fY as O,fZ as F,ek as f,e6 as P,e1 as C,__tla as D}from"./index-ClFky8uL.js";import{T as y,__tla as M}from"./TransitionGroupContext-DpKL_btO.js";let _,h,T=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{function m(e,r){var l=function(n){return r&&d.isValidElement(n)?r(n):n},i=Object.create(null);return e&&d.Children.map(e,function(n){return n}).forEach(function(n){i[n.key]=l(n)}),i}function b(e,r){e=e||{},r=r||{};function l(p){return p in r?r[p]:e[p]}var i=Object.create(null),n=[];for(var o in e)o in r?n.length&&(i[o]=n,n=[]):n.push(o);var t,a={};for(var c in r){if(i[c])for(t=0;t<i[c].length;t++){var s=i[c][t];a[i[c][t]]=l(s)}a[c]=l(c)}for(t=0;t<n.length;t++)a[n[t]]=l(n[t]);return a}function u(e,r,l){return l[r]!=null?l[r]:e.props[r]}function g(e,r){return m(e.children,function(l){return d.cloneElement(l,{onExited:r.bind(null,l),in:!0,appear:u(l,"appear",e),enter:u(l,"enter",e),exit:u(l,"exit",e)})})}function V(e,r,l){var i=m(e.children),n=b(r,i);return Object.keys(n).forEach(function(o){var t=n[o];if(d.isValidElement(t)){var a=o in r,c=o in i,s=r[o],p=d.isValidElement(s)&&!s.props.in;c&&(!a||p)?n[o]=d.cloneElement(t,{onExited:l.bind(null,t),in:!0,exit:u(t,"exit",e),enter:u(t,"enter",e)}):!c&&a&&!p?n[o]=d.cloneElement(t,{in:!1}):c&&a&&d.isValidElement(s)&&(n[o]=d.cloneElement(t,{onExited:l.bind(null,t),in:s.props.in,exit:u(t,"exit",e),enter:u(t,"enter",e)}))}}),n}let x,v;x=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},v={component:"div",childFactory:function(e){return e}},h=function(e){j(r,e);function r(i,n){var o;o=e.call(this,i,n)||this;var t=o.handleExited.bind(k(o));return o.state={contextValue:{isMounting:!0},handleExited:t,firstRender:!0},o}var l=r.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(i,n){var o=n.children,t=n.handleExited,a=n.firstRender;return{children:a?g(i,t):V(i,o,t),firstRender:!1}},l.handleExited=function(i,n){var o=m(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(n),this.mounted&&this.setState(function(t){var a=O({},t.children);return delete a[i.key],{children:a}}))},l.render=function(){var i=this.props,n=i.component,o=i.childFactory,t=F(i,["component","childFactory"]),a=this.state.contextValue,c=x(this.state.children).map(o);return delete t.appear,delete t.enter,delete t.exit,n===null?f.createElement(y.Provider,{value:a},c):f.createElement(y.Provider,{value:a},f.createElement(n,t,c))},r}(f.Component),h.propTypes={},h.defaultProps=v;let E;_=({children:e})=>C.jsx(E,{children:e}),E=P.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`});export{_ as T,T as __tla,h as a};
