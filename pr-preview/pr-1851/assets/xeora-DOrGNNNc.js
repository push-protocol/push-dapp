import{ef as d,__tla as f}from"./index-DWdYShLP.js";let s,$=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function l(n,i){for(var t=0;t<i.length;t++){const e=i[t];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(e,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var r,u;function w(){if(u)return r;u=1,r=n,n.displayName="xeora",n.aliases=["xeoracube"];function n(i){(function(t){t.languages.xeora=t.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),t.languages.insertBefore("inside","punctuation",{variable:t.languages.xeora["function-inline"].inside.variable},t.languages.xeora["function-block"]),t.languages.xeoracube=t.languages.xeora})(i)}return r}var c=w();let p;p=d(c),s=l({__proto__:null,default:p},[c])});export{$ as __tla,s as x};
