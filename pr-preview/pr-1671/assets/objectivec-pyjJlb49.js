import{cr as p,__tla as d}from"./index-DwsVUmLy.js";import{r as b}from"./c-kgVuzdLE.js";let u,y=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function f(r,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in r)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a,s;function g(){if(s)return a;s=1;var r=b();a=t,t.displayName="objectivec",t.aliases=["objc"];function t(e){e.register(r),e.languages.objectivec=e.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete e.languages.objectivec["class-name"],e.languages.objc=e.languages.objectivec}return a}var c=g();let l;l=p(c),u=f({__proto__:null,default:l},[c])});export{y as __tla,u as o};
