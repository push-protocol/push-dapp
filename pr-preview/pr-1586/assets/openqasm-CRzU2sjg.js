import{cr as g,__tla as p}from"./index-CkohXW8U.js";let u,d=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function f(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(r,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function b(){if(l)return a;l=1,a=e,e.displayName="openqasm",e.aliases=["qasm"];function e(t){t.languages.openqasm={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"[^"\r\n\t]*"|'[^'\r\n\t]*'/,greedy:!0},keyword:/\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,"class-name":/\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,function:/\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,constant:/\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,number:{pattern:/(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,lookbehind:!0},operator:/->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,punctuation:/[(){}\[\];,:.]/},t.languages.qasm=t.languages.openqasm}return a}var i=b();let c;c=g(i),u=f({__proto__:null,default:c},[i])});export{d as __tla,u as o};
