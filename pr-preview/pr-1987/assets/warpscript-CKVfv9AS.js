import{eu as p,__tla as E}from"./index-cMtIxPwU.js";let u,y=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{function b(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,l;function f(){if(l)return n;l=1,n=e,e.displayName="warpscript",e.aliases=[];function e(a){a.languages.warpscript={comment:/#.*|\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,greedy:!0},variable:/\$\S+/,macro:{pattern:/@\S+/,alias:"property"},keyword:/\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,number:/[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,boolean:/\b(?:F|T|false|true)\b/,punctuation:/<%|%>|[{}[\]()]/,operator:/==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/}}return n}var s=f();let c;c=p(s),u=b({__proto__:null,default:c},[s])});export{y as __tla,u as w};
