import{eu as c,__tla as m}from"./index-BNFbPSez.js";import{r as y}from"./yaml-pHjxJgpq.js";let p,b=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function f(a,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in a)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(a,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i,l;function g(){if(l)return i;l=1;var a=y();i=e,e.displayName="tap",e.aliases=[];function e(t){t.register(a),t.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:t.languages.yaml,alias:"language-yaml"}}}return i}var s=g();let u;u=c(s),p=f({__proto__:null,default:u},[s])});export{b as __tla,p as t};
