import{s as c,__tla as m}from"./index-DLFlONIp.js";import{r as y}from"./yaml-pHjxJgpq.js";let p,b=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function f(e,a){for(var t=0;t<a.length;t++){const r=a[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,l;function g(){if(l)return i;l=1;var e=y();i=a,a.displayName="tap",a.aliases=[];function a(t){t.register(e),t.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:t.languages.yaml,alias:"language-yaml"}}}return i}var s=g();let u;u=c(s),p=f({__proto__:null,default:u},[s])});export{b as __tla,p as t};
