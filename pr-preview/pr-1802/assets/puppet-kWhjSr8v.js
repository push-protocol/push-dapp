import{b8 as c,__tla as g}from"./index-CYKlReZ3.js";let d,f=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function p(n,i){for(var e=0;e<i.length;e++){const t=i[e];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(t,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var r,s;function b(){if(s)return r;s=1,r=n,n.displayName="puppet",n.aliases=[];function n(i){(function(e){e.languages.puppet={heredoc:[{pattern:/(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,lookbehind:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,lookbehind:!0,greedy:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,alias:"string",inside:{punctuation:{pattern:/(\().+?(?=\))/,lookbehind:!0}}}],"multiline-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,greedy:!0,alias:"comment"},regex:{pattern:/((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,lookbehind:!0,greedy:!0,inside:{"extended-regex":{pattern:/^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,inside:{comment:/#.*/}}}},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,greedy:!0,inside:{"double-quoted":{pattern:/^"[\s\S]*"$/,inside:{}}}},variable:{pattern:/\$(?:::)?\w+(?:::\w+)*/,inside:{punctuation:/::/}},"attr-name":/(?:\b\w+|\*)(?=\s*=>)/,function:[{pattern:/(\.)(?!\d)\w+/,lookbehind:!0},/\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],number:/\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,boolean:/\b(?:false|true)\b/,keyword:/\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,datatype:{pattern:/\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,alias:"symbol"},operator:/=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,punctuation:/[\[\]{}().,;]|:+/};var t=[{pattern:/(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,lookbehind:!0,inside:{"short-variable":{pattern:/(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}},delimiter:{pattern:/^\$/,alias:"variable"},rest:e.languages.puppet}},{pattern:/(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}}];e.languages.puppet.heredoc[0].inside.interpolation=t,e.languages.puppet.string.inside["double-quoted"].inside.interpolation=t})(i)}return r}var l=b();let u;u=c(l),d=p({__proto__:null,default:u},[l])});export{f as __tla,d as p};
