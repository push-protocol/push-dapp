import{b8 as _,__tla as d}from"./index-DdDnrJWK.js";let g,b=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function c(e,t){for(var a=0;a<t.length;a++){const n=t[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,l;function p(){if(l)return i;l=1,i=e,e.displayName="gn",e.aliases=["gni"];function e(t){t.languages.gn={comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,lookbehind:!0,inside:{number:/^\$0x[\s\S]{2}$/,variable:/^\$\w+$/,"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:/\b(?:else|if)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,alias:"keyword"},function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,number:/-?\b\d+\b/,operator:/[-+!=<>]=?|&&|\|\|/,punctuation:/[(){}[\],.]/},t.languages.gn["string-literal"].inside.interpolation.inside.expression.inside=t.languages.gn,t.languages.gni=t.languages.gn}return i}var s=p();let u;u=_(s),g=c({__proto__:null,default:u},[s])});export{b as __tla,g};
