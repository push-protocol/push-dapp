import{cr as b,__tla as d}from"./index-DwsVUmLy.js";let s,y=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function f(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const l=Object.getOwnPropertyDescriptor(e,r);l&&Object.defineProperty(t,r,l.get?l:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,i;function u(){if(i)return o;i=1,o=t,t.displayName="roboconf",t.aliases=[];function t(a){a.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*(?![ \t]))[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/}}return o}var c=u();let p;p=b(c),s=f({__proto__:null,default:p},[c])});export{y as __tla,s as r};
