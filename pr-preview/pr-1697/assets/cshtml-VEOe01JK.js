import{s as z,__tla as O}from"./index-DyljMqMI.js";import{r as P}from"./csharp-Cd5Udg29.js";let b,A=Promise.all([(()=>{try{return O}catch{}})()]).then(async()=>{function v(c,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in c)){const n=Object.getOwnPropertyDescriptor(e,o);n&&Object.defineProperty(c,o,n.get?n:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var l,m;function w(){if(m)return l;m=1;var c=P();l=t,t.displayName="cshtml",t.aliases=["razor"];function t(a){a.register(c),function(e){var o=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,n=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function u(i,j){for(var y=0;y<j;y++)i=i.replace(/<self>/g,function(){return"(?:"+i+")"});return i.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+n+")").replace(/<comment>/g,"(?:"+o+")")}var s=u(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),_=u(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),r=u(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),k=u(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),g=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,p=/(?!\d)[^\s>\/=$<%]+/.source+g+/\s*\/?>/.source,x=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+g+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+p+"|"+u(/<\1/.source+g+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+p+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+p+")";e.languages.cshtml=e.languages.extend("markup",{});var S=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(x),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),f={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:S};e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[r,/(?:code|functions)\s*/.source+r,/(?:for|foreach|lock|switch|using|while)\s*/.source+s+/\s*/.source+r,/do\s*/.source+r+/\s*while\s*/.source+s+/(?:\s*;)?/.source,/try\s*/.source+r+/\s*catch\s*/.source+s+/\s*/.source+r+/\s*finally\s*/.source+r,/if\s*/.source+s+/\s*/.source+r+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+s+")?"+/\s*/.source+r+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:f}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:f}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+s+")(?:"+/[?!]?\.\w+\b/.source+"|"+s+"|"+_+"|"+k+s+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:f}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(a)}return l}var d=w();let h;h=z(d),b=v({__proto__:null,default:h},[d])});export{A as __tla,b as c};
