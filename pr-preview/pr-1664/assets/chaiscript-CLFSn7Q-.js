import{s as f,__tla as b}from"./index-RsqjUNNk.js";import{r as d}from"./cpp-PR_WB-PF.js";let p,h=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function u(r,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in r)){const s=Object.getOwnPropertyDescriptor(a,n);s&&Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,o;function g(){if(o)return i;o=1;var r=d();i=e,e.displayName="chaiscript",e.aliases=[];function e(t){t.register(r),t.languages.chaiscript=t.languages.extend("clike",{string:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,lookbehind:!0,greedy:!0},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},{pattern:/(\b(?:attr|def)\s+)\w+(?=\s*::)/,lookbehind:!0}],keyword:/\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,number:[t.languages.cpp.number,/\b(?:Infinity|NaN)\b/],operator:/>>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/}),t.languages.insertBefore("chaiscript","operator",{"parameter-type":{pattern:/([,(]\s*)\w+(?=\s+\w)/,lookbehind:!0,alias:"class-name"}}),t.languages.insertBefore("chaiscript","string",{"string-interpolation":{pattern:/(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,lookbehind:!0,inside:{"interpolation-expression":{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:t.languages.chaiscript},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"}}},string:/[\s\S]+/}}})}return i}var l=g();let c;c=f(l),p=u({__proto__:null,default:c},[l])});export{h as __tla,p as c};