import{cr as y,__tla as f}from"./index-CfOEoaNd.js";import{r as b}from"./scheme-Cscf027c.js";let u,_=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function g(a,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in a)){const i=Object.getOwnPropertyDescriptor(n,e);i&&Object.defineProperty(a,e,i.get?i:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s,l;function m(){if(l)return s;l=1;var a=b();s=r,r.displayName="lilypond",r.aliases=[];function r(t){t.register(a),function(n){for(var e=/\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source,i=5,c=0;c<i;c++)e=e.replace(/<expr>/g,function(){return e});e=e.replace(/<expr>/g,/[^\s\S]/.source);var o=n.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g,function(){return e}),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:n.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};o["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=o,n.languages.ly=o}(t)}return s}var d=m();let p;p=y(d),u=g({__proto__:null,default:p},[d])});export{_ as __tla,u as l};
