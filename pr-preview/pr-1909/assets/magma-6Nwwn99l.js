import{cJ as p,__tla as m}from"./index-B424_a1o.js";let f,g=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function u(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function c(){if(l)return a;l=1,a=e,e.displayName="magma",e.aliases=[];function e(n){n.languages.magma={output:{pattern:/^(>.*(?:\r(?:\n|(?!\n))|\n))(?!>)(?:.+|(?:\r(?:\n|(?!\n))|\n)(?!>).*)(?:(?:\r(?:\n|(?!\n))|\n)(?!>).*)*/m,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\"])"(?:[^\r\n\\"]|\\.)*"/,lookbehind:!0,greedy:!0},keyword:/\b(?:_|adj|and|assert|assert2|assert3|assigned|break|by|case|cat|catch|clear|cmpeq|cmpne|continue|declare|default|delete|diff|div|do|elif|else|end|eq|error|eval|exists|exit|for|forall|forward|fprintf|freeze|function|ge|gt|if|iload|import|in|intrinsic|is|join|le|load|local|lt|meet|mod|ne|not|notadj|notin|notsubset|or|print|printf|procedure|quit|random|read|readi|repeat|require|requirege|requirerange|restore|return|save|sdiff|select|subset|then|time|to|try|until|vprint|vprintf|vtime|when|where|while|xor)\b/,boolean:/\b(?:false|true)\b/,generator:{pattern:/\b[a-z_]\w*(?=\s*<)/i,alias:"class-name"},function:/\b[a-z_]\w*(?=\s*\()/i,number:{pattern:/(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,lookbehind:!0},operator:/->|[-+*/^~!|#=]|:=|\.\./,punctuation:/[()[\]{}<>,;.:]/}}return a}var s=c();let d;d=p(s),f=u({__proto__:null,default:d},[s])});export{g as __tla,f as m};
