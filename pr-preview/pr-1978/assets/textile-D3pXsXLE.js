import{et as D,__tla as _}from"./index-DFdEUiMf.js";let f,y=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{function h(i,u){for(var o=0;o<u.length;o++){const r=u[o];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const e=Object.getOwnPropertyDescriptor(r,a);e&&Object.defineProperty(i,a,e.get?e:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var c,p;function O(){if(p)return c;p=1,c=i,i.displayName="textile",i.aliases=[];function i(u){(function(o){var r=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,a=/\)|\((?![^|()\n]+\))/.source;function e(g,M){return RegExp(g.replace(/<MOD>/g,function(){return"(?:"+r+")"}).replace(/<PAR>/g,function(){return"(?:"+a+")"}),M||"")}var s={css:{pattern:/\{[^{}]+\}/,inside:{rest:o.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},m=o.languages.textile=o.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:e(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:e(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:s},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:e(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:e(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:s},punctuation:/^[*#]+/}},table:{pattern:e(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:e(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:s},punctuation:/\||^\./}},inline:{pattern:e(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:e(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:e(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:e(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:e(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:e(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:e(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:e(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:e(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:s},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:e(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:e(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:e(/(^")<MOD>+/.source),lookbehind:!0,inside:s},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:e(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:e(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:e(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:s},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),t=m.phrase.inside,n={inline:t.inline,link:t.link,image:t.image,footnote:t.footnote,acronym:t.acronym,mark:t.mark};m.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var d=t.inline.inside;d.bold.inside=n,d.italic.inside=n,d.inserted.inside=n,d.deleted.inside=n,d.span.inside=n;var l=t.table.inside;l.inline=n.inline,l.link=n.link,l.image=n.image,l.footnote=n.footnote,l.acronym=n.acronym,l.mark=n.mark})(u)}return c}var b=O();let k;k=D(b),f=h({__proto__:null,default:k},[b])});export{y as __tla,f as t};
