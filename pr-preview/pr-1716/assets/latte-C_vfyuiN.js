import{s as d,__tla as h}from"./index-CYKsqjkL.js";import{r as S}from"./markup-templating-BxAVv-bL.js";import{r as _}from"./php-E3TmF6re.js";let g,b=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{function f(n,s){for(var a=0;a<s.length;a++){const t=s[a];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l,o;function m(){if(o)return l;o=1;var n=S(),s=_();l=a,a.displayName="latte",a.aliases=[];function a(t){t.register(n),t.register(s),function(e){e.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:e.languages.php}};var r=e.languages.extend("markup",{});e.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:e.languages.php}}}}}},r.tag),e.hooks.add("before-tokenize",function(i){if(i.language==="latte"){var c=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;e.languages["markup-templating"].buildPlaceholders(i,"latte",c),i.grammar=r}}),e.hooks.add("after-tokenize",function(i){e.languages["markup-templating"].tokenizePlaceholders(i,"latte")})}(t)}return l}var p=m();let u;u=d(p),g=f({__proto__:null,default:u},[p])});export{b as __tla,g as l};
