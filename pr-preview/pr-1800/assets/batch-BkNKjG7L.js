import{b8 as c,__tla as f}from"./index-T0nhP3Wr.js";let p,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function m(n,i){for(var a=0;a<i.length;a++){const e=i[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const t=Object.getOwnPropertyDescriptor(e,r);t&&Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l,s;function u(){if(s)return l;s=1,l=n,n.displayName="batch",n.aliases=[];function n(i){(function(a){var e=/%%?[~:\w]+%?|!\S+!/,r={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},t=/"(?:[\\"]"|[^"])*"(?!")/,o=/(?:\b|-)\d+\b/;a.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:t,parameter:r,variable:e,number:o,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:t,parameter:r,variable:e,number:o,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:t,parameter:r,variable:[e,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:o,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:t,parameter:r,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:e,number:o,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(i)}return l}var b=u();let d;d=c(b),p=m({__proto__:null,default:d},[b])});export{g as __tla,p as b};