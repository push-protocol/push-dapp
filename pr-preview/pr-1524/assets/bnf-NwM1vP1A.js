import{cr as g,__tla as b}from"./index-EM4OPpGL.js";let f,y=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function c(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,l;function p(){if(l)return a;l=1,a=t,t.displayName="bnf",t.aliases=["rbnf"];function t(e){e.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/},e.languages.rbnf=e.languages.bnf}return a}var s=p();let u;u=g(s),f=c({__proto__:null,default:u},[s])});export{y as __tla,f as b};
