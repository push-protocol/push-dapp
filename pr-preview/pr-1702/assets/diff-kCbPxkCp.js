import{s as g,__tla as y}from"./index-snufgcSC.js";let c,b=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function u(r,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const a=Object.getOwnPropertyDescriptor(t,e);a&&Object.defineProperty(r,e,a.get?a:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,l;function p(){if(l)return o;l=1,o=r,r.displayName="diff",r.aliases=[];function r(i){(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var t={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(t).forEach(function(e){var a=t[e],s=[];/^\w+$/.test(e)||s.push(/\w+/.exec(e)[0]),e==="diff"&&s.push("bold"),n.languages.diff[e]={pattern:RegExp("^(?:["+a+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:s,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(n.languages.diff,"PREFIXES",{value:t})})(i)}return o}var f=p();let d;d=g(f),c=u({__proto__:null,default:d},[f])});export{b as __tla,c as d};
