import{ev as d,__tla as m}from"./index-M6dEtZnK.js";let f,y=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function p(e,a){for(var i=0;i<a.length;i++){const t=a[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,l;function u(){if(l)return n;l=1,n=e,e.displayName="brainfuck",e.aliases=[];function e(a){a.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/}}return n}var c=u();let s;s=d(c),f=p({__proto__:null,default:s},[c])});export{y as __tla,f as b};
