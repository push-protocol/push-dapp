import{cr as f,__tla as d}from"./index-xu31DHN6.js";let g,y=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function u(r,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(r,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,s;function p(){if(s)return o;s=1,o=r,r.displayName="groovy",r.aliases=[];function r(t){t.languages.groovy=t.languages.extend("clike",{string:[{pattern:/("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0},{pattern:/(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],keyword:/\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),t.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),t.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),t.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),t.hooks.add("wrap",function(e){if(e.language==="groovy"&&e.type==="string"){var n=e.content.value[0];if(n!="'"){var a=/([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;n==="$"&&(a=/([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),e.content.value=e.content.value.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),e.content=t.highlight(e.content.value,{expression:{pattern:a,lookbehind:!0,inside:t.languages.groovy}}),e.classes.push(n==="/"?"regex":"gstring")}}})}return o}var l=p();let c;c=f(l),g=u({__proto__:null,default:c},[l])});export{y as __tla,g};
