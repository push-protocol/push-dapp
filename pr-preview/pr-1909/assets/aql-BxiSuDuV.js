import{cJ as p,__tla as N}from"./index-B424_a1o.js";let s,d=Promise.all([(()=>{try{return N}catch{}})()]).then(async()=>{function O(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function E(){if(l)return a;l=1,a=e,e.displayName="aql",e.aliases=[];function e(n){n.languages.aql={comment:/\/\/.*|\/\*[\s\S]*?\*\//,property:{pattern:/([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},identifier:{pattern:/([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},variable:/@@?\w+/,keyword:[{pattern:/(\bWITH\s+)COUNT(?=\s+INTO\b)/i,lookbehind:!0},/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,{pattern:/(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,lookbehind:!0},{pattern:/(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,lookbehind:!0},{pattern:/\bOPTIONS(?=\s*\{)/i}],function:/\b(?!\d)\w+(?=\s*\()/,boolean:/\b(?:false|true)\b/i,range:{pattern:/\.\./,alias:"operator"},number:[/\b0b[01]+/i,/\b0x[0-9a-f]+/i,/(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i],operator:/\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,punctuation:/::|[?.:,;()[\]{}]/}}return a}var T=E();let b;b=p(T),s=O({__proto__:null,default:b},[T])});export{d as __tla,s as a};
