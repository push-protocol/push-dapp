import{ew as f,__tla as b}from"./index-SaELevsK.js";let p,y=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function u(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(t,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function d(){if(i)return a;i=1,a=e,e.displayName="monkey",e.aliases=[];function e(n){n.languages.monkey={comment:{pattern:/^#Rem\s[\s\S]*?^#End|'.+/im,greedy:!0},string:{pattern:/"[^"\r\n]*"/,greedy:!0},preprocessor:{pattern:/(^[ \t]*)#.+/m,lookbehind:!0,greedy:!0,alias:"property"},function:/\b\w+(?=\()/,"type-char":{pattern:/\b[?%#$]/,alias:"class-name"},number:{pattern:/((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,lookbehind:!0},keyword:/\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,operator:/\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,punctuation:/[.,:;()\[\]]/}}return a}var s=d();let c;c=f(s),p=u({__proto__:null,default:c},[s])});export{y as __tla,p as m};
