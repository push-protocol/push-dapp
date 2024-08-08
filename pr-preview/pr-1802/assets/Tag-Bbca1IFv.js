import{b7 as u,cW as j,cX as k,cY as O,cZ as F,ba as h,a_ as P,aZ as C,__tla as D}from"./index-CYKlReZ3.js";import{T as b,__tla as M}from"./TransitionGroupContext-BtEYAXbY.js";let f,y,T=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{function m(e,r){var a=function(n){return r&&u.isValidElement(n)?r(n):n},i=Object.create(null);return e&&u.Children.map(e,function(n){return n}).forEach(function(n){i[n.key]=a(n)}),i}function _(e,r){e=e||{},r=r||{};function a(p){return p in r?r[p]:e[p]}var i=Object.create(null),n=[];for(var o in e)o in r?n.length&&(i[o]=n,n=[]):n.push(o);var t,l={};for(var c in r){if(i[c])for(t=0;t<i[c].length;t++){var s=i[c][t];l[i[c][t]]=a(s)}l[c]=a(c)}for(t=0;t<n.length;t++)l[n[t]]=a(n[t]);return l}function d(e,r,a){return a[r]!=null?a[r]:e.props[r]}function g(e,r){return m(e.children,function(a){return u.cloneElement(a,{onExited:r.bind(null,a),in:!0,appear:d(a,"appear",e),enter:d(a,"enter",e),exit:d(a,"exit",e)})})}function V(e,r,a){var i=m(e.children),n=_(r,i);return Object.keys(n).forEach(function(o){var t=n[o];if(u.isValidElement(t)){var l=o in r,c=o in i,s=r[o],p=u.isValidElement(s)&&!s.props.in;c&&(!l||p)?n[o]=u.cloneElement(t,{onExited:a.bind(null,t),in:!0,exit:d(t,"exit",e),enter:d(t,"enter",e)}):!c&&l&&!p?n[o]=u.cloneElement(t,{in:!1}):c&&l&&u.isValidElement(s)&&(n[o]=u.cloneElement(t,{onExited:a.bind(null,t),in:s.props.in,exit:d(t,"exit",e),enter:d(t,"enter",e)}))}}),n}let x,v;x=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},v={component:"div",childFactory:function(e){return e}},f=function(e){j(r,e);function r(i,n){var o;o=e.call(this,i,n)||this;var t=o.handleExited.bind(k(o));return o.state={contextValue:{isMounting:!0},handleExited:t,firstRender:!0},o}var a=r.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(i,n){var o=n.children,t=n.handleExited,l=n.firstRender;return{children:l?g(i,t):V(i,o,t),firstRender:!1}},a.handleExited=function(i,n){var o=m(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(n),this.mounted&&this.setState(function(t){var l=O({},t.children);return delete l[i.key],{children:l}}))},a.render=function(){var i=this.props,n=i.component,o=i.childFactory,t=F(i,["component","childFactory"]),l=this.state.contextValue,c=x(this.state.children).map(o);return delete t.appear,delete t.enter,delete t.exit,n===null?h.createElement(b.Provider,{value:l},c):h.createElement(b.Provider,{value:l},h.createElement(n,t,c))},r}(h.Component),f.propTypes={},f.defaultProps=v;let E;y=({children:e})=>C.jsx(E,{children:e}),E=P.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.default.secondaryBg};
  color: ${e=>e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`});export{f as T,T as __tla,y as a};
