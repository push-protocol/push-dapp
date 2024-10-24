import{ew as O,__tla as P}from"./index-CCSq7fiT.js";let w,j=Promise.all([(()=>{try{return P}catch{}})()]).then(async()=>{function $(s,b){for(var n=0;n<b.length;n++){const u=b[n];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in s)){const d=Object.getOwnPropertyDescriptor(u,o);d&&Object.defineProperty(s,o,d.get?d:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var h,_;function x(){if(_)return h;_=1,h=s,s.displayName="markdown",s.aliases=["md"];function s(b){(function(n){var u=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function o(e){return e=e.replace(/<inner>/g,function(){return u}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+e+")")}var d=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,f=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return d}),k=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;n.languages.markdown=n.languages.extend("markup",{}),n.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:n.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+f+k+"(?:"+f+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+f+k+")(?:"+f+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(d),inside:n.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+f+")"+k+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+f+"$"),inside:{"table-header":{pattern:RegExp(d),alias:"important",inside:n.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:o(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:o(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:o(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:o(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(e){["url","bold","italic","strike","code-snippet"].forEach(function(t){e!==t&&(n.languages.markdown[e].inside.content.inside[t]=n.languages.markdown[t])})}),n.hooks.add("after-tokenize",function(e){if(e.language!=="markdown"&&e.language!=="md")return;function t(i){if(!(!i||typeof i=="string"))for(var a=0,c=i.length;a<c;a++){var l=i[a];if(l.type!=="code"){t(l.content);continue}var p=l.content[1],r=l.content[3];if(p&&r&&p.type==="code-language"&&r.type==="code-block"&&typeof p.content=="string"){var g=p.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase();var m="language-"+g;r.alias?typeof r.alias=="string"?r.alias=[r.alias,m]:r.alias.push(m):r.alias=[m]}}}t(e.tokens)}),n.hooks.add("wrap",function(e){if(e.type==="code-block"){for(var t="",i=0,a=e.classes.length;i<a;i++){var c=e.classes[i],l=/language-(.+)/.exec(c);if(l){t=l[1];break}}var p=n.languages[t];if(p)e.content=n.highlight(C(e.content.value),p,t);else if(t&&t!=="none"&&n.plugins.autoloader){var r="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);e.attributes.id=r,n.plugins.autoloader.loadLanguages(t,function(){var g=document.getElementById(r);g&&(g.innerHTML=n.highlight(g.textContent,n.languages[t],t))})}}});var S=RegExp(n.languages.markup.tag.pattern.source,"gi"),E={amp:"&",lt:"<",gt:">",quot:'"'},R=String.fromCodePoint||String.fromCharCode;function C(e){var t=e.replace(S,"");return t=t.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(i,a){if(a=a.toLowerCase(),a[0]==="#"){var c;return a[1]==="x"?c=parseInt(a.slice(2),16):c=Number(a.slice(1)),R(c)}else{var l=E[a];return l||i}}),t}n.languages.md=n.languages.markdown})(b)}return h}var y=x();let v;v=O(y),w=$({__proto__:null,default:v},[y])});export{j as __tla,w as m};
