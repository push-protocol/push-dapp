import{et as f,__tla as d}from"./index-6Q99WsQ3.js";import{r as m}from"./csharp-Cd5Udg29.js";let o,v=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function c(a,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in a)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(a,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var n,p;function u(){if(p)return n;p=1;var a=m();n=t,t.displayName="aspnet",t.aliases=[];function t(e){e.register(a),e.languages.aspnet=e.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:e.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:e.languages.csharp}}}),e.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,e.languages.insertBefore("inside","punctuation",{directive:e.languages.aspnet.directive},e.languages.aspnet.tag.inside["attr-value"]),e.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),e.languages.insertBefore("aspnet",e.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:e.languages.csharp||{}}})}return n}var g=u();let l;l=f(g),o=c({__proto__:null,default:l},[g])});export{v as __tla,o as a};
