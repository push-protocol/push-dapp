import{ew as b,__tla as p}from"./index-BF3Dixa5.js";import{r as j}from"./markup-templating-BxAVv-bL.js";let f,k=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function c(i,a){for(var r=0;r<a.length;r++){const e=a[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in i)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var l,s;function g(){if(s)return l;s=1;var i=j();l=a,a.displayName="django",a.aliases=["jinja2"];function a(r){r.register(i),function(e){e.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var t=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,n=e.languages["markup-templating"];e.hooks.add("before-tokenize",function(o){n.buildPlaceholders(o,"django",t)}),e.hooks.add("after-tokenize",function(o){n.tokenizePlaceholders(o,"django")}),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",function(o){n.buildPlaceholders(o,"jinja2",t)}),e.hooks.add("after-tokenize",function(o){n.tokenizePlaceholders(o,"jinja2")})}(r)}return l}var d=g();let u;u=b(d),f=c({__proto__:null,default:u},[d])});export{k as __tla,f as d};
