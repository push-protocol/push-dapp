import{ev as c,__tla as p}from"./index-CQ-PzbkJ.js";let u,g=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function d(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function f(){if(l)return a;l=1,a=e,e.displayName="erlang",e.aliases=[];function e(n){n.languages.erlang={comment:/%.+/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},"quoted-function":{pattern:/'(?:\\.|[^\\'\r\n])+'(?=\()/,alias:"function"},"quoted-atom":{pattern:/'(?:\\.|[^\\'\r\n])+'/,alias:"atom"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,number:[/\$\\?./,/\b\d+#[a-z0-9]+/i,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i],function:/\b[a-z][\w@]*(?=\()/,variable:{pattern:/(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,lookbehind:!0},operator:[/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],atom:/\b[a-z][\w@]*/,punctuation:/[()[\]{}:;,.#|]|<<|>>/}}return a}var b=f();let s;s=c(b),u=d({__proto__:null,default:s},[b])});export{g as __tla,u as e};
