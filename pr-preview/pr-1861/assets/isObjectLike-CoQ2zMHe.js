var v=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,n=v,j=n,g=typeof self=="object"&&self&&self.Object===Object&&self,p=j||g||Function("return this")(),a=p,y=a,d=y.Symbol,r=d,l=r,c=Object.prototype,O=c.hasOwnProperty,h=c.toString,o=l?l.toStringTag:void 0;function T(e){var t=O.call(e,o),u=e[o];try{e[o]=void 0;var s=!0}catch{}var f=h.call(e);return s&&(t?e[o]=u:delete e[o]),f}var S=T,m=Object.prototype,w=m.toString;function x(e){return w.call(e)}var F=x,i=r,P=S,U=F,_="[object Null]",k="[object Undefined]",b=i?i.toStringTag:void 0;function q(e){return e==null?e===void 0?k:_:b&&b in Object(e)?P(e):U(e)}var z=q;function G(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var L=G;function N(e){return e!=null&&typeof e=="object"}var R=N;export{a as _,z as a,L as b,n as c,r as d,R as i};