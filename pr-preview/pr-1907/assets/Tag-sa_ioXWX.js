import{cs as u,hv as j,hw as O,hx as k,hy as F,cO as p,cA as P,cv as C,__tla as D}from"./index-D9kGLRwp.js";import{T as y,__tla as M}from"./TransitionGroupContext-DSLw4RKt.js";let b,f,T=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{function m(e,r){var l=function(n){return r&&u.isValidElement(n)?r(n):n},i=Object.create(null);return e&&u.Children.map(e,function(n){return n}).forEach(function(n){i[n.key]=l(n)}),i}function g(e,r){e=e||{},r=r||{};function l(h){return h in r?r[h]:e[h]}var i=Object.create(null),n=[];for(var o in e)o in r?n.length&&(i[o]=n,n=[]):n.push(o);var t,a={};for(var c in r){if(i[c])for(t=0;t<i[c].length;t++){var s=i[c][t];a[i[c][t]]=l(s)}a[c]=l(c)}for(t=0;t<n.length;t++)a[n[t]]=l(n[t]);return a}function d(e,r,l){return l[r]!=null?l[r]:e.props[r]}function _(e,r){return m(e.children,function(l){return u.cloneElement(l,{onExited:r.bind(null,l),in:!0,appear:d(l,"appear",e),enter:d(l,"enter",e),exit:d(l,"exit",e)})})}function V(e,r,l){var i=m(e.children),n=g(r,i);return Object.keys(n).forEach(function(o){var t=n[o];if(u.isValidElement(t)){var a=o in r,c=o in i,s=r[o],h=u.isValidElement(s)&&!s.props.in;c&&(!a||h)?n[o]=u.cloneElement(t,{onExited:l.bind(null,t),in:!0,exit:d(t,"exit",e),enter:d(t,"enter",e)}):!c&&a&&!h?n[o]=u.cloneElement(t,{in:!1}):c&&a&&u.isValidElement(s)&&(n[o]=u.cloneElement(t,{onExited:l.bind(null,t),in:s.props.in,exit:d(t,"exit",e),enter:d(t,"enter",e)}))}}),n}let x,v;x=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},v={component:"div",childFactory:function(e){return e}},f=function(e){j(r,e);function r(i,n){var o;o=e.call(this,i,n)||this;var t=o.handleExited.bind(O(o));return o.state={contextValue:{isMounting:!0},handleExited:t,firstRender:!0},o}var l=r.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(i,n){var o=n.children,t=n.handleExited,a=n.firstRender;return{children:a?_(i,t):V(i,o,t),firstRender:!1}},l.handleExited=function(i,n){var o=m(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(n),this.mounted&&this.setState(function(t){var a=k({},t.children);return delete a[i.key],{children:a}}))},l.render=function(){var i=this.props,n=i.component,o=i.childFactory,t=F(i,["component","childFactory"]),a=this.state.contextValue,c=x(this.state.children).map(o);return delete t.appear,delete t.enter,delete t.exit,n===null?p.createElement(y.Provider,{value:a},c):p.createElement(y.Provider,{value:a},p.createElement(n,t,c))},r}(p.Component),f.propTypes={},f.defaultProps=v;let E;b=({children:e})=>C.jsx(E,{children:e}),E=P.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`});export{b as T,T as __tla,f as a};
