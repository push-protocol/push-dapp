import{s as c,__tla as g}from"./index-DLFlONIp.js";let u,b=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function d(r,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in r)){const a=Object.getOwnPropertyDescriptor(t,o);a&&Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,f;function s(){if(f)return i;f=1,i=r,r.displayName="parigp",r.aliases=[];function r(n){n.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"/,greedy:!0},keyword:function(){var e=["breakpoint","break","dbg_down","dbg_err","dbg_up","dbg_x","forcomposite","fordiv","forell","forpart","forprime","forstep","forsubgroup","forvec","for","iferr","if","local","my","next","return","until","while"];return e=e.map(function(t){return t.split("").join(" *")}).join("|"),RegExp("\\b(?:"+e+")\\b")}(),function:/\b\w(?:[\w ]*\w)?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/}}return i}var l=s();let p;p=c(l),u=d({__proto__:null,default:p},[l])});export{b as __tla,u as p};
