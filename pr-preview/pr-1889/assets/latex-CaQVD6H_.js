import{cJ as b,__tla as d}from"./index-DC41svKB.js";let c,f=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function g(n,r){for(var a=0;a<r.length;a++){const e=r[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const s=Object.getOwnPropertyDescriptor(e,t);s&&Object.defineProperty(n,t,s.get?s:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,l;function p(){if(l)return i;l=1,i=n,n.displayName="latex",n.aliases=["tex","context"];function n(r){(function(a){var e=/\\(?:[^a-z()[\]]|[a-z*]+)/i,t={"equation-command":{pattern:e,alias:"regex"}};a.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:t,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:t,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:e,alias:"selector"},punctuation:/[[\]{}&]/},a.languages.tex=a.languages.latex,a.languages.context=a.languages.latex})(r)}return i}var o=p();let u;u=b(o),c=g({__proto__:null,default:u},[o])});export{f as __tla,c as l};
