import{b8 as b,__tla as f}from"./index-DPm9CLN0.js";let p,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function c(n,r){for(var t=0;t<r.length;t++){const e=r[t];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(e,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,s;function d(){if(s)return i;s=1,i=n,n.displayName="parser",n.aliases=[];function n(r){(function(t){var e=t.languages.parser=t.languages.extend("markup",{keyword:{pattern:/(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,lookbehind:!0},variable:{pattern:/(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{punctuation:/\.|:+/}},function:{pattern:/(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{keyword:{pattern:/(^@)(?:GET_|SET_)/,lookbehind:!0},punctuation:/\.|:+/}},escape:{pattern:/\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,alias:"builtin"},punctuation:/[\[\](){};]/});e=t.languages.insertBefore("parser","keyword",{"parser-comment":{pattern:/(\s)#.*/,lookbehind:!0,alias:"comment"},expression:{pattern:/(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,greedy:!0,lookbehind:!0,inside:{string:{pattern:/(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,lookbehind:!0},keyword:e.keyword,variable:e.variable,function:e.function,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,escape:e.escape,operator:/[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,punctuation:e.punctuation}}}),t.languages.insertBefore("inside","punctuation",{expression:e.expression,keyword:e.keyword,variable:e.variable,function:e.function,escape:e.escape,"parser-punctuation":{pattern:e.punctuation,alias:"punctuation"}},e.tag.inside["attr-value"])})(r)}return i}var u=d();let l;l=b(u),p=c({__proto__:null,default:l},[u])});export{g as __tla,p};
