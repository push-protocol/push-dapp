import{cr as b,__tla as f}from"./index-C4A4mSsE.js";import{r as m}from"./c-kgVuzdLE.js";let u,d=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function g(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,s;function p(){if(s)return i;s=1;var n=m();i=e,e.displayName="bison",e.aliases=[];function e(t){t.register(n),t.languages.bison=t.languages.extend("c",{}),t.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:t.languages.c}},comment:t.languages.c.comment,string:t.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}return i}var l=p();let c;c=b(l),u=g({__proto__:null,default:c},[l])});export{d as __tla,u as b};
