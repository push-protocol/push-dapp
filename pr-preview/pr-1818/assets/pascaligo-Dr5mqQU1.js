import{ef as y,__tla as m}from"./index-Dw0HuXW7.js";let b,h=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function f(t,o){for(var i=0;i<o.length;i++){const n=o[i];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in t)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,l;function d(){if(l)return s;l=1,s=t,t.displayName="pascaligo",t.aliases=[];function t(o){(function(i){var n=/\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,e=/(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g,function(){return n}),r=i.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g,function(){return e}),"i"),lookbehind:!0,inside:null},{pattern:RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g,function(){return e}),"i"),inside:null},{pattern:RegExp(/(:\s*)<type>/.source.replace(/<type>/g,function(){return e})),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:False|True)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\b\w+(?=\s*\()/,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},g=["comment","keyword","builtin","operator","punctuation"].reduce(function(a,p){return a[p]=r[p],a},{});r["class-name"].forEach(function(a){a.inside=g})})(o)}return s}var c=d();let u;u=y(c),b=f({__proto__:null,default:u},[c])});export{h as __tla,b as p};
