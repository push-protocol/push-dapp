import{ew as v,__tla as w}from"./index-p3SKM_mK.js";let y,_=Promise.all([(()=>{try{return w}catch{}})()]).then(async()=>{function h(i,l){for(var a=0;a<l.length;a++){const e=l[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var c,f;function b(){if(f)return c;f=1,c=i,i.displayName="naniscript",i.aliases=[];function i(l){(function(a){var e=/\{[^\r\n\[\]{}]*\}/,r={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:e,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};a.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:e,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:r}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:e,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:r},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},a.languages.nani=a.languages.naniscript,a.hooks.add("after-tokenize",function(t){var m=t.tokens;m.forEach(function(n){if(typeof n!="string"&&n.type==="generic-text"){var o=d(n);s(o)||(n.type="bad-line",n.content=o)}})});function s(t){for(var m="[]{}",n=[],o=0;o<t.length;o++){var k=t[o],p=m.indexOf(k);if(p!==-1){if(p%2===0)n.push(p+1);else if(n.pop()!==p)return!1}}return n.length===0}function d(t){return typeof t=="string"?t:Array.isArray(t)?t.map(d).join(""):d(t.content)}})(l)}return c}var u=b();let g;g=v(u),y=h({__proto__:null,default:g},[u])});export{_ as __tla,y as n};
