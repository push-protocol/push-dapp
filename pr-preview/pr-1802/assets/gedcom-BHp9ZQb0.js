import{b8 as p,__tla as g}from"./index-CYKlReZ3.js";let c,b=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function u(e,a){for(var i=0;i<a.length;i++){const t=a[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(t,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,o;function d(){if(o)return n;o=1,n=e,e.displayName="gedcom",e.aliases=[];function e(a){a.languages.gedcom={"line-value":{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,lookbehind:!0,inside:{pointer:{pattern:/^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,alias:"variable"}}},tag:{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,lookbehind:!0,alias:"string"},level:{pattern:/(^[\t ]*)\d+/m,lookbehind:!0,alias:"number"},pointer:{pattern:/@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,alias:"variable"}}}return n}var s=d();let f;f=p(s),c=u({__proto__:null,default:f},[s])});export{b as __tla,c as g};
