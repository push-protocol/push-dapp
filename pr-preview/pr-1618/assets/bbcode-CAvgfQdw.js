import{cr as g,__tla as b}from"./index-CEzu3UPJ.js";let u,f=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function p(t,e){for(var s=0;s<e.length;s++){const r=e[s];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in t)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,i;function d(){if(i)return a;i=1,a=t,t.displayName="bbcode",t.aliases=["shortcode"];function t(e){e.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},e.languages.shortcode=e.languages.bbcode}return a}var c=d();let l;l=g(c),u=p({__proto__:null,default:l},[c])});export{f as __tla,u as b};
