import{s as f,__tla as b}from"./index-6oYpAvpx.js";let g,d=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function c(t,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in t)){const s=Object.getOwnPropertyDescriptor(r,n);s&&Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,o;function p(){if(o)return a;o=1,a=t,t.displayName="nix",t.aliases=[];function t(e){e.languages.nix={comment:{pattern:/\/\*[\s\S]*?\*\/|#.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,greedy:!0,inside:{interpolation:{pattern:/(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,lookbehind:!0,inside:null}}},url:[/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,{pattern:/([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,lookbehind:!0}],antiquotation:{pattern:/\$(?=\{)/,alias:"important"},number:/\b\d+\b/,keyword:/\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,function:/\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,punctuation:/[{}()[\].,:;]/},e.languages.nix.string.inside.interpolation.inside=e.languages.nix}return a}var l=p();let u;u=f(l),g=c({__proto__:null,default:u},[l])});export{d as __tla,g as n};
