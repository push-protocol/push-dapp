import{cr as d,__tla as m}from"./index-D38AO6N0.js";import{r as y}from"./lua-DER4jxlW.js";import{r as _}from"./markup-templating-BxAVv-bL.js";let f,b=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function g(n,o){for(var r=0;r<o.length;r++){const t=o[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const a=Object.getOwnPropertyDescriptor(t,e);a&&Object.defineProperty(n,e,a.get?a:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l,i;function c(){if(i)return l;i=1;var n=y(),o=_();l=r,r.displayName="etlua",r.aliases=[];function r(t){t.register(n),t.register(o),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",function(a){var p=/<%[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"etlua",p)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"etlua")})}(t)}return l}var s=c();let u;u=d(s),f=g({__proto__:null,default:u},[s])});export{b as __tla,f as e};
