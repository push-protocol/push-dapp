import{s as p,__tla as c}from"./index-snufgcSC.js";let l,g=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{function s(e,u){for(var a=0;a<u.length;a++){const t=u[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const f=Object.getOwnPropertyDescriptor(t,r);f&&Object.defineProperty(e,r,f.get?f:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,d;function b(){if(d)return n;d=1,n=e,e.displayName="bsl",e.aliases=[];function e(u){u.languages.bsl={comment:/\/\/.*/,string:[{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},{pattern:/'(?:[^'\r\n\\]|\\.)*'/}],keyword:[{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i}],number:{pattern:/(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,lookbehind:!0},operator:[/[<>+\-*/]=?|[%=]/,{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:and|not|or)\b/i}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/,directive:[{pattern:/^([ \t]*)&.*/m,lookbehind:!0,greedy:!0,alias:"important"},{pattern:/^([ \t]*)#.*/gm,lookbehind:!0,greedy:!0,alias:"important"}]},u.languages.oscript=u.languages.bsl}return n}var o=b();let i;i=p(o),l=s({__proto__:null,default:i},[o])});export{g as __tla,l as b};
