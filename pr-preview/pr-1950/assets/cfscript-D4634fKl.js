import{ew as b,__tla as g}from"./index-XKMZyveT.js";let u,d=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function p(t,e){for(var i=0;i<e.length;i++){const a=e[i];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,s;function f(){if(s)return n;s=1,n=t,t.displayName="cfscript",t.aliases=[];function t(e){e.languages.cfscript=e.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,inside:{annotation:{pattern:/(?:^|[^.])@[\w\.]+/,alias:"punctuation"}}},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],keyword:/\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,operator:[/\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/,/\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],scope:{pattern:/\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,alias:"global"},type:{pattern:/\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,alias:"builtin"}}),e.languages.insertBefore("cfscript","keyword",{"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"}}),delete e.languages.cfscript["class-name"],e.languages.cfc=e.languages.cfscript}return n}var l=f();let c;c=b(l),u=p({__proto__:null,default:c},[l])});export{d as __tla,u as c};
