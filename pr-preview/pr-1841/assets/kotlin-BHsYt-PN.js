import{ef as d,__tla as f}from"./index-BES3EOhx.js";let g,b=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function c(e,i){for(var t=0;t<i.length;t++){const n=i[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(n,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,o;function p(){if(o)return r;o=1,r=e,e.displayName="kotlin",e.aliases=["kt","kts"];function e(i){(function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var n={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:n},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:n},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin})(i)}return r}var s=p();let u;u=d(s),g=c({__proto__:null,default:u},[s])});export{b as __tla,g as k};
