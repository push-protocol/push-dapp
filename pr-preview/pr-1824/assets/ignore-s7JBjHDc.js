import{bf as p,__tla as m}from"./index-B2wAmwQg.js";let u,y=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function f(n,a){for(var e=0;e<a.length;e++){const r=a[e];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in n)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o,g;function c(){if(g)return o;g=1,o=n,n.displayName="ignore",n.aliases=["gitignore","hgignore","npmignore"];function n(a){(function(e){e.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},e.languages.gitignore=e.languages.ignore,e.languages.hgignore=e.languages.ignore,e.languages.npmignore=e.languages.ignore})(a)}return o}var l=c();let s;s=p(l),u=f({__proto__:null,default:s},[l])});export{y as __tla,u as i};
