import{cJ as d,__tla as g}from"./index-CFQ4neVb.js";let u,m=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function f(t,a){for(var o=0;o<a.length;o++){const e=a[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,l;function p(){if(l)return n;l=1,n=t,t.displayName="editorconfig",t.aliases=[];function t(a){a.languages.editorconfig={comment:/[;#].*/,section:{pattern:/(^[ \t]*)\[.+\]/m,lookbehind:!0,alias:"selector",inside:{regex:/\\\\[\[\]{},!?.*]/,operator:/[!?]|\.\.|\*{1,2}/,punctuation:/[\[\]{},]/}},key:{pattern:/(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,lookbehind:!0,alias:"attr-name"},value:{pattern:/=.*/,alias:"attr-value",inside:{punctuation:/^=/}}}}return n}var s=p();let c;c=d(s),u=f({__proto__:null,default:c},[s])});export{m as __tla,u as e};
