import{cs as u,ht as j,hu as k,hv as O,hw as F,cK as p,cA as P,cv as C,__tla as D}from"./index-pBFRSMp3.js";import{T as y,__tla as M}from"./TransitionGroupContext-B7AYODSj.js";let b,f,T=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{function m(e,r){var l=function(t){return r&&u.isValidElement(t)?r(t):t},i=Object.create(null);return e&&u.Children.map(e,function(t){return t}).forEach(function(t){i[t.key]=l(t)}),i}function g(e,r){e=e||{},r=r||{};function l(h){return h in r?r[h]:e[h]}var i=Object.create(null),t=[];for(var o in e)o in r?t.length&&(i[o]=t,t=[]):t.push(o);var n,a={};for(var c in r){if(i[c])for(n=0;n<i[c].length;n++){var s=i[c][n];a[i[c][n]]=l(s)}a[c]=l(c)}for(n=0;n<t.length;n++)a[t[n]]=l(t[n]);return a}function d(e,r,l){return l[r]!=null?l[r]:e.props[r]}function _(e,r){return m(e.children,function(l){return u.cloneElement(l,{onExited:r.bind(null,l),in:!0,appear:d(l,"appear",e),enter:d(l,"enter",e),exit:d(l,"exit",e)})})}function V(e,r,l){var i=m(e.children),t=g(r,i);return Object.keys(t).forEach(function(o){var n=t[o];if(u.isValidElement(n)){var a=o in r,c=o in i,s=r[o],h=u.isValidElement(s)&&!s.props.in;c&&(!a||h)?t[o]=u.cloneElement(n,{onExited:l.bind(null,n),in:!0,exit:d(n,"exit",e),enter:d(n,"enter",e)}):!c&&a&&!h?t[o]=u.cloneElement(n,{in:!1}):c&&a&&u.isValidElement(s)&&(t[o]=u.cloneElement(n,{onExited:l.bind(null,n),in:s.props.in,exit:d(n,"exit",e),enter:d(n,"enter",e)}))}}),t}let x,v;x=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},v={component:"div",childFactory:function(e){return e}},f=function(e){j(r,e);function r(i,t){var o;o=e.call(this,i,t)||this;var n=o.handleExited.bind(k(o));return o.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},o}var l=r.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(i,t){var o=t.children,n=t.handleExited,a=t.firstRender;return{children:a?_(i,n):V(i,o,n),firstRender:!1}},l.handleExited=function(i,t){var o=m(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(t),this.mounted&&this.setState(function(n){var a=O({},n.children);return delete a[i.key],{children:a}}))},l.render=function(){var i=this.props,t=i.component,o=i.childFactory,n=F(i,["component","childFactory"]),a=this.state.contextValue,c=x(this.state.children).map(o);return delete n.appear,delete n.enter,delete n.exit,t===null?p.createElement(y.Provider,{value:a},c):p.createElement(y.Provider,{value:a},p.createElement(t,n,c))},r}(p.Component),f.propTypes={},f.defaultProps=v;let E;b=({children:e})=>C.jsx(E,{children:e}),E=P.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`});export{b as T,T as __tla,f as a};
