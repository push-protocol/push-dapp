import{ef as p,__tla as d}from"./index-8TAbY26M.js";import{r as y}from"./json-BESjz4hO.js";let f,_=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function c(a,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(a,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o,i;function g(){if(i)return o;i=1;var a=y();o=t,t.displayName="json5",t.aliases=[];function t(n){n.register(a),function(e){var r=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;e.languages.json5=e.languages.extend("json",{property:[{pattern:RegExp(r.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:r,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})}(n)}return o}var u=g();let l;l=p(u),f=c({__proto__:null,default:l},[u])});export{_ as __tla,f as j};
