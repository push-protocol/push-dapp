import{ew as F,__tla as I}from"./index--PMTm4P8.js";let B,J=Promise.all([(()=>{try{return I}catch{}})()]).then(async()=>{function C(u,k){for(var t=0;t<k.length;t++){const l=k[t];if(typeof l!="string"&&!Array.isArray(l)){for(const g in l)if(g!=="default"&&!(g in u)){const f=Object.getOwnPropertyDescriptor(l,g);f&&Object.defineProperty(u,g,f.get?f:{enumerable:!0,get:()=>l[g]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var j,T;function D(){if(T)return j;T=1,j=u,u.displayName="jsTemplates",u.aliases=[];function u(k){(function(t){var l=t.languages.javascript["template-string"],g=l.pattern.source,f=l.inside.interpolation,G=f.inside["interpolation-punctuation"],H=f.pattern.source;function b(e,a){if(t.languages[e])return{pattern:RegExp("((?:"+a+")\\s*)"+g),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}t.languages.javascript["template-string"]=[b("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),b("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),b("svg",/\bsvg/.source),b("markdown",/\b(?:markdown|md)/.source),b("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),b("sql",/\bsql/.source),l].filter(Boolean);function L(e,a){return"___"+a.toUpperCase()+"_"+e+"___"}function q(e,a,r){var n={code:e,grammar:a,language:r};return t.hooks.run("before-tokenize",n),n.tokens=t.tokenize(n.code,n.grammar),t.hooks.run("after-tokenize",n),n.tokens}function N(e){var a={};a["interpolation-punctuation"]=G;var r=t.tokenize(e,a);if(r.length===3){var n=[1,1];n.push.apply(n,q(r[1],t.languages.javascript,"javascript")),r.splice.apply(r,n)}return new t.Token("interpolation",r,f.alias,e)}function U(e,a,r){var n=t.tokenize(e,{interpolation:{pattern:RegExp(H),lookbehind:!0}}),y=0,v={},p=n.map(function(i){if(typeof i=="string")return i;for(var s=i.content,o;e.indexOf(o=L(y++,r))!==-1;);return v[o]=s,o}).join(""),d=q(p,a,r),h=Object.keys(v);y=0;function c(i){for(var s=0;s<i.length;s++){if(y>=h.length)return;var o=i[s];if(typeof o=="string"||typeof o.content=="string"){var O=h[y],w=typeof o=="string"?o:o.content,A=w.indexOf(O);if(A!==-1){++y;var P=w.substring(0,A),E=N(v[O]),M=w.substring(A+O.length),m=[];if(P&&m.push(P),m.push(E),M){var R=[M];c(R),m.push.apply(m,R)}typeof o=="string"?(i.splice.apply(i,[s,1].concat(m)),s+=m.length-1):o.content=m}}else{var x=o.content;Array.isArray(x)?c(x):c([x])}}}return c(d),new t.Token(r,d,"language-"+r,e)}var $={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(e){if(!(e.language in $))return;function a(r){for(var n=0,y=r.length;n<y;n++){var v=r[n];if(typeof v!="string"){var p=v.content;if(!Array.isArray(p)){typeof p!="string"&&a([p]);continue}if(v.type==="template-string"){var d=p[1];if(p.length===3&&typeof d!="string"&&d.type==="embedded-code"){var h=_(d),c=d.alias,i=Array.isArray(c)?c[0]:c,s=t.languages[i];if(!s)continue;p[1]=U(h,s,i)}}else a(p)}}}a(e.tokens)});function _(e){return typeof e=="string"?e:Array.isArray(e)?e.map(_).join(""):_(e.content)}})(k)}return j}var z=D();let S;S=F(z),B=C({__proto__:null,default:S},[z])});export{J as __tla,B as j};
