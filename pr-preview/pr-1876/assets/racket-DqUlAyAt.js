import{ef as m,__tla as p}from"./index-Pg68Md8O.js";import{r as d}from"./scheme-Cscf027c.js";let c,y=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function f(t,r){for(var e=0;e<r.length;e++){const a=r[e];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in t)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var l,s;function u(){if(s)return l;s=1;var t=d();l=r,r.displayName="racket",r.aliases=["rkt"];function r(e){e.register(t),e.languages.racket=e.languages.extend("scheme",{"lambda-parameter":{pattern:/([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,lookbehind:!0}}),e.languages.insertBefore("racket","string",{lang:{pattern:/^#lang.+/m,greedy:!0,alias:"keyword"}}),e.languages.rkt=e.languages.racket}return l}var i=u();let g;g=m(i),c=f({__proto__:null,default:g},[i])});export{y as __tla,c as r};
