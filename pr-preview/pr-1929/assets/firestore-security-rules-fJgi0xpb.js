import{ei as p,__tla as y}from"./index-BDd7Mz03.js";let c,d=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function f(e,t){for(var i=0;i<t.length;i++){const r=t[i];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,s;function F(){if(s)return a;s=1,a=e,e.displayName="firestoreSecurityRules",e.aliases=[];function e(t){t.languages["firestore-security-rules"]=t.languages.extend("clike",{comment:/\/\/.*/,keyword:/\b(?:allow|function|if|match|null|return|rules_version|service)\b/,operator:/&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/}),delete t.languages["firestore-security-rules"]["class-name"],t.languages.insertBefore("firestore-security-rules","keyword",{path:{pattern:/(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,inside:{operator:/=/,keyword:/\*\*/,punctuation:/[.$(){}]/}},punctuation:/\//}},method:{pattern:/(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,lookbehind:!0,alias:"builtin",inside:{punctuation:/,/}}})}return a}var l=F();let u;u=p(l),c=f({__proto__:null,default:u},[l])});export{d as __tla,c as f};
