import{eu as c,__tla as f}from"./index-BNFbPSez.js";let u,y=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(e,a){for(var i=0;i<a.length;i++){const t=a[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,s;function b(){if(s)return n;s=1,n=e,e.displayName="hcl",e.aliases=[];function e(a){a.languages.hcl={comment:/(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,heredoc:{pattern:/<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,greedy:!0,alias:"string"},keyword:[{pattern:/(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,inside:{type:{pattern:/(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,lookbehind:!0,alias:"variable"}}},{pattern:/(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,inside:{type:{pattern:/(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,lookbehind:!0,alias:"variable"}}},/[\w-]+(?=\s+\{)/],property:[/[-\w\.]+(?=\s*=(?!=))/,/"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],string:{pattern:/"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,greedy:!0,inside:{interpolation:{pattern:/(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,lookbehind:!0,inside:{type:{pattern:/(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i,lookbehind:!0,alias:"variable"},keyword:/\b(?:count|data|local|module|path|self|terraform|var)\b/i,function:/\w+(?=\()/,string:{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,punctuation:/[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/}}}},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,boolean:/\b(?:false|true)\b/i,punctuation:/[=\[\]{}]/}}return n}var l=b();let d;d=c(l),u=p({__proto__:null,default:d},[l])});export{y as __tla,u as h};
