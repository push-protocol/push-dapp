import{dg as g,__tla as m}from"./index-DxXVDKDy.js";let c,b=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function d(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,s;function u(){if(s)return o;s=1,o=t,t.displayName="moonscript",t.aliases=["moon"];function t(e){e.languages.moonscript={comment:/--.*/,string:[{pattern:/'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/,greedy:!0},{pattern:/"[^"]*"/,greedy:!0,inside:{interpolation:{pattern:/#\{[^{}]*\}/,inside:{moonscript:{pattern:/(^#\{)[\s\S]+(?=\})/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/#\{|\}/,alias:"punctuation"}}}}}],"class-name":[{pattern:/(\b(?:class|extends)[ \t]+)\w+/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,variable:/@@?\w*/,property:{pattern:/\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/,lookbehind:!0},function:{pattern:/\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:create|resume|running|status|wrap|yield)|debug\.(?:debug|getfenv|gethook|getinfo|getlocal|getmetatable|getregistry|getupvalue|setfenv|sethook|setlocal|setmetatable|setupvalue|traceback)|dofile|error|getfenv|getmetatable|io\.(?:close|flush|input|lines|open|output|popen|read|stderr|stdin|stdout|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pi|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\.(?:concat|insert|maxn|remove|sort)|tonumber|tostring|type|unpack|xpcall)\b/,inside:{punctuation:/\./}},boolean:/\b(?:false|true)\b/,number:/(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,operator:/\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,punctuation:/[.,()[\]{}\\]/},e.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside=e.languages.moonscript,e.languages.moon=e.languages.moonscript}return o}var l=u();let p;p=g(l),c=d({__proto__:null,default:p},[l])});export{b as __tla,c as m};