import{b8 as p,__tla as b}from"./index-b0RxfPz9.js";let f,y=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function d(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,l;function u(){if(l)return n;l=1,n=e,e.displayName="oz",e.aliases=[];function e(a){a.languages.oz={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},atom:{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,alias:"builtin"},keyword:/\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,function:[/\b[a-z][A-Za-z\d]*(?=\()/,{pattern:/(\{)[A-Z][A-Za-z\d]*\b/,lookbehind:!0}],number:/\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,variable:/`(?:[^`\\]|\\.)+`/,"attr-name":/\b\w+(?=[ \t]*:(?![:=]))/,operator:/:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,punctuation:/[\[\](){}.:;?]/}}return n}var s=u();let c;c=p(s),f=d({__proto__:null,default:c},[s])});export{y as __tla,f as o};
