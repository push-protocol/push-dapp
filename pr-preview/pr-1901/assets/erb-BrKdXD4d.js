import{cJ as d,__tla as p}from"./index-QF3il865.js";import{r as m}from"./ruby-DYsn9XfW.js";import{r as y}from"./markup-templating-BxAVv-bL.js";let g,_=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function f(a,i){for(var t=0;t<i.length;t++){const r=i[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in a)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(a,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o,l;function c(){if(l)return o;l=1;var a=m(),i=y();o=t,t.displayName="erb",t.aliases=[];function t(r){r.register(a),r.register(i),function(e){e.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:e.languages.ruby}},e.hooks.add("before-tokenize",function(n){var b=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;e.languages["markup-templating"].buildPlaceholders(n,"erb",b)}),e.hooks.add("after-tokenize",function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"erb")})}(r)}return o}var s=c();let u;u=d(s),g=f({__proto__:null,default:u},[s])});export{_ as __tla,g as e};
