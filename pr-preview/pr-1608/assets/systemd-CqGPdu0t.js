import{cr as d,__tla as f}from"./index-DdnqAqZK.js";let c,m=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(r,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const s=Object.getOwnPropertyDescriptor(t,e);s&&Object.defineProperty(r,e,s.get?s:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,i;function y(){if(i)return o;i=1,o=r,r.displayName="systemd",r.aliases=[];function r(a){(function(n){var t={pattern:/^[;#].*/m,greedy:!0},e=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;n.languages.systemd={comment:t,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+e+`|(?=[^"\r
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+e+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:t,quoted:{pattern:RegExp(/(^|\s)/.source+e),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(a)}return o}var l=y();let u;u=d(l),c=p({__proto__:null,default:u},[l])});export{m as __tla,c as s};
