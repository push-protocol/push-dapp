import{ef as f,__tla as g}from"./index-ClHCzr3e.js";import{r as p}from"./markup-templating-BxAVv-bL.js";let b,h=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function d(n,t){for(var r=0;r<t.length;r++){const e=t[r];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(e,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o,l;function c(){if(l)return o;l=1;var n=p();o=t,t.displayName="handlebars",t.aliases=["hbs"];function t(r){r.register(n),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",function(a){var s=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;e.languages["markup-templating"].buildPlaceholders(a,"handlebars",s)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")}),e.languages.hbs=e.languages.handlebars}(r)}return o}var i=c();let u;u=f(i),b=d({__proto__:null,default:u},[i])});export{h as __tla,b as h};
