import{cJ as f,__tla as p}from"./index-DC41svKB.js";let d,m=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function c(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function g(){if(i)return a;i=1,a=e,e.displayName="goModule",e.aliases=[];function e(t){t.languages["go-mod"]=t.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}return a}var s=g();let u;u=f(s),d=c({__proto__:null,default:u},[s])});export{m as __tla,d as g};
