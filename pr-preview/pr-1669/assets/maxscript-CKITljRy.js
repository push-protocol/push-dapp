import{cr as f,__tla as p}from"./index-CIefef-6.js";let u,m=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function d(t,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,l;function b(){if(l)return a;l=1,a=t,t.displayName="maxscript",t.aliases=[];function t(o){(function(n){var e=/\b(?:about|and|animate|as|at|attributes|by|case|catch|collect|continue|coordsys|do|else|exit|fn|for|from|function|global|if|in|local|macroscript|mapped|max|not|of|off|on|or|parameters|persistent|plugin|rcmenu|return|rollout|set|struct|then|throw|to|tool|try|undo|utility|when|where|while|with)\b/i;n.languages.maxscript={comment:{pattern:/\/\*[\s\S]*?(?:\*\/|$)|--.*/,greedy:!0},string:{pattern:/(^|[^"\\@])(?:"(?:[^"\\]|\\[\s\S])*"|@"[^"]*")/,lookbehind:!0,greedy:!0},path:{pattern:/\$(?:[\w/\\.*?]|'[^']*')*/,greedy:!0,alias:"string"},"function-call":{pattern:RegExp("((?:"+(/^/.source+"|"+/[;=<>+\-*/^({\[]/.source+"|"+/\b(?:and|by|case|catch|collect|do|else|if|in|not|or|return|then|to|try|where|while|with)\b/.source)+")[ 	]*)(?!"+e.source+")"+/[a-z_]\w*\b/.source+"(?=[ 	]*(?:"+("(?!"+e.source+")"+/[a-z_]/.source+"|"+/\d|-\.?\d/.source+"|"+/[({'"$@#?]/.source)+"))","im"),lookbehind:!0,greedy:!0,alias:"function"},"function-definition":{pattern:/(\b(?:fn|function)\s+)\w+\b/i,lookbehind:!0,alias:"function"},argument:{pattern:/\b[a-z_]\w*(?=:)/i,alias:"attr-name"},keyword:e,boolean:/\b(?:false|true)\b/,time:{pattern:/(^|[^\w.])(?:(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?[msft])+|\d+:\d+(?:\.\d*)?)(?![\w.:])/,lookbehind:!0,alias:"number"},number:[{pattern:/(^|[^\w.])(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?|0x[a-fA-F0-9]+)(?![\w.:])/,lookbehind:!0},/\b(?:e|pi)\b/],constant:/\b(?:dontcollect|ok|silentValue|undefined|unsupplied)\b/,color:{pattern:/\b(?:black|blue|brown|gray|green|orange|red|white|yellow)\b/i,alias:"constant"},operator:/[-+*/<>=!]=?|[&^?]|#(?!\()/,punctuation:/[()\[\]{}.:,;]|#(?=\()|\\$/m}})(o)}return a}var c=b();let s;s=f(c),u=d({__proto__:null,default:s},[c])});export{m as __tla,u as m};
