import{b8 as O,__tla as x}from"./index-BMHBB8f5.js";let Z,I=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{function $(i,u){for(var s=0;s<u.length;s++){const a=u[s];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in i)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var p,v;function j(){if(v)return p;v=1,p=i,i.displayName="graphql",i.aliases=[];function i(u){u.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:u.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},u.hooks.add("after-tokenize",function(s){if(s.language!=="graphql")return;var a=s.tokens.filter(function(e){return typeof e!="string"&&e.type!=="comment"&&e.type!=="scalar"}),t=0;function r(e){return a[t+e]}function w(e,o){o=o||0;for(var n=0;n<e.length;n++){var l=r(n+o);if(!l||l.type!==e[n])return!1}return!0}function k(e,o){for(var n=1,l=t;l<a.length;l++){var q=a[l],m=q.content;if(q.type==="punctuation"&&typeof m=="string"){if(e.test(m))n++;else if(o.test(m)&&(n--,n===0))return l}}return-1}function f(e,o){var n=e.alias;n?Array.isArray(n)||(e.alias=n=[n]):e.alias=n=[],n.push(o)}for(;t<a.length;){var z=a[t++];if(z.type==="keyword"&&z.content==="mutation"){var c=[];if(w(["definition-mutation","punctuation"])&&r(1).content==="("){t+=2;var b=k(/^\($/,/^\)$/);if(b===-1)continue;for(;t<b;t++){var y=r(0);y.type==="variable"&&(f(y,"variable-input"),c.push(y.content))}t=b+1}if(w(["punctuation","property-query"])&&r(0).content==="{"&&(t++,f(r(0),"property-mutation"),c.length>0)){var A=k(/^\{$/,/^\}$/);if(A===-1)continue;for(var d=t;d<A;d++){var g=a[d];g.type==="variable"&&c.indexOf(g.content)>=0&&f(g,"variable-input")}}}}})}return p}var h=j();let _;_=O(h),Z=$({__proto__:null,default:_},[h])});export{I as __tla,Z as g};
