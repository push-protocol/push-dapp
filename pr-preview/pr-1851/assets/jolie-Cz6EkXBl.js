import{ef as b,__tla as f}from"./index-DWdYShLP.js";let u,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function d(e,t){for(var o=0;o<t.length;o++){const n=t[o];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,a;function p(){if(a)return i;a=1,i=e,e.displayName="jolie",e.aliases=[];function e(t){t.languages.jolie=t.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\[\s\S]|[^"\\])*"/,lookbehind:!0,greedy:!0},"class-name":{pattern:/((?:\b(?:as|courier|embed|in|inputPort|outputPort|service)\b|@)[ \t]*)\w+/,lookbehind:!0},keyword:/\b(?:as|cH|comp|concurrent|constants|courier|cset|csets|default|define|else|embed|embedded|execution|exit|extender|for|foreach|forward|from|global|if|import|in|include|init|inputPort|install|instanceof|interface|is_defined|linkIn|linkOut|main|new|nullProcess|outputPort|over|private|provide|public|scope|sequential|service|single|spawn|synchronized|this|throw|throws|type|undef|until|while|with)\b/,function:/\b[a-z_]\w*(?=[ \t]*[@(])/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,operator:/-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[?\/%^@|]/,punctuation:/[()[\]{},;.:]/,builtin:/\b(?:Byte|any|bool|char|double|enum|float|int|length|long|ranges|regex|string|undefined|void)\b/}),t.languages.insertBefore("jolie","keyword",{aggregates:{pattern:/(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,lookbehind:!0,inside:{keyword:/\bwith\b/,"class-name":/\w+/,punctuation:/,/}},redirects:{pattern:/(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,lookbehind:!0,inside:{punctuation:/,/,"class-name":/\w+/,operator:/=>/}},property:{pattern:/\b(?:Aggregates|[Ii]nterfaces|Java|Javascript|Jolie|[Ll]ocation|OneWay|[Pp]rotocol|Redirects|RequestResponse)\b(?=[ \t]*:)/}})}return i}var l=p();let c;c=b(l),u=d({__proto__:null,default:c},[l])});export{g as __tla,u as j};
