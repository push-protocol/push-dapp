import{ei as b,__tla as g}from"./index-BE23U5pg.js";let p,m=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function c(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,l;function d(){if(l)return n;l=1,n=e,e.displayName="wiki",e.aliases=[];function e(t){t.languages.wiki=t.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+)[^=\r\n].*?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold-italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0,alias:["bold","italic"]},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?\}\}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:t.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),t.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,inside:t.languages.markup.tag.inside}}}})}return n}var s=d();let u;u=b(s),p=c({__proto__:null,default:u},[s])});export{m as __tla,p as w};
