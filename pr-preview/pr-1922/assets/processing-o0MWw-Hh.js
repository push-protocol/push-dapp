import{ei as b,__tla as g}from"./index-DXkSuLFr.js";let u,y=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function f(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,s;function p(){if(s)return n;s=1,n=e,e.displayName="processing",e.aliases=[];function e(t){t.languages.processing=t.languages.extend("clike",{keyword:/\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,function:/\b\w+(?=\s*\()/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),t.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,alias:"class-name"}})}return n}var l=p();let c;c=b(l),u=f({__proto__:null,default:c},[l])});export{y as __tla,u as p};
