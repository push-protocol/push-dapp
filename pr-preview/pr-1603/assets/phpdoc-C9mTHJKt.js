import{cr as d,__tla as f}from"./index-OHFN2ukP.js";import{r as b}from"./php-E3TmF6re.js";import{r as y}from"./javadoclike-myFApC35.js";let c,m=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function u(o,n){for(var a=0;a<n.length;a++){const r=n[a];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in o)){const t=Object.getOwnPropertyDescriptor(r,e);t&&Object.defineProperty(o,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var l,i;function g(){if(i)return l;i=1;var o=b(),n=y();l=a,a.displayName="phpdoc",a.aliases=[];function a(r){r.register(o),r.register(n),function(e){var t=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+t+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+t),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)}(r)}return l}var p=g();let s;s=d(p),c=u({__proto__:null,default:s},[p])});export{m as __tla,c as p};