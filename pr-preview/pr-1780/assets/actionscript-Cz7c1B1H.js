import{b8 as g,__tla as d}from"./index-BceMmvbP.js";let p,m=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function u(t,e){for(var i=0;i<e.length;i++){const a=e[i];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(a,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,l;function f(){if(l)return n;l=1,n=t,t.displayName="actionscript",t.aliases=[];function t(e){e.languages.actionscript=e.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),e.languages.actionscript["class-name"].alias="function",delete e.languages.actionscript.parameter,delete e.languages.actionscript["literal-property"],e.languages.markup&&e.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:e.languages.markup}})}return n}var o=f();let c;c=g(o),p=u({__proto__:null,default:c},[o])});export{m as __tla,p as a};
