import{cr as p,__tla as m}from"./index-CkohXW8U.js";let u,g=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function c(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(r,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function f(){if(l)return a;l=1,a=e,e.displayName="avroIdl",e.aliases=[];function e(t){t.languages["avro-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0},annotation:{pattern:/@(?:[$\w.-]|`[^\r\n`]+`)+/,greedy:!0,alias:"function"},"function-identifier":{pattern:/`[^\r\n`]+`(?=\s*\()/,greedy:!0,alias:"function"},identifier:{pattern:/`[^\r\n`]+`/,greedy:!0},"class-name":{pattern:/(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,lookbehind:!0,greedy:!0},keyword:/\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:[{pattern:/(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,lookbehind:!0},/-?\b(?:Infinity|NaN)\b/],operator:/=/,punctuation:/[()\[\]{}<>.:,;-]/},t.languages.avdl=t.languages["avro-idl"]}return a}var d=f();let s;s=p(d),u=c({__proto__:null,default:s},[d])});export{g as __tla,u as a};
