import{ei as u,__tla as b}from"./index-CCAoOb7F.js";import{r as g}from"./php-E3TmF6re.js";let c,y=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function f(t,e){for(var r=0;r<e.length;r++){const a=e[r];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in t)){const i=Object.getOwnPropertyDescriptor(a,n);i&&Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,s;function _(){if(s)return o;s=1;var t=g();o=e,e.displayName="phpExtras",e.aliases=[];function e(r){r.register(t),r.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}})}return o}var l=_();let p;p=u(l),c=f({__proto__:null,default:p},[l])});export{y as __tla,c as p};
