import{cJ as f,__tla as I}from"./index-Cef5YdNv.js";let s,g=Promise.all([(()=>{try{return I}catch{}})()]).then(async()=>{function c(e,a){for(var o=0;o<a.length;o++){const r=a[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const t=Object.getOwnPropertyDescriptor(r,n);t&&Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var d,i;function p(){if(i)return d;i=1,d=e,e.displayName="kumir",e.aliases=["kum"];function e(a){(function(o){var r=/\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;function n(t,b){return RegExp(t.replace(/<nonId>/g,r),b)}o.languages.kumir={comment:{pattern:/\|.*/},prolog:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^\n\r"]*"|'[^\n\r']*'/,greedy:!0},boolean:{pattern:n(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source),lookbehind:!0},"operator-word":{pattern:n(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},"system-variable":{pattern:n(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},type:[{pattern:n(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"builtin"},{pattern:n(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"important"}],keyword:{pattern:n(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source),lookbehind:!0},name:{pattern:n(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source),lookbehind:!0},number:{pattern:n(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source,"i"),lookbehind:!0},punctuation:/:=|[(),:;\[\]]/,"operator-char":{pattern:/\*\*?|<[=>]?|>=?|[-+/=]/,alias:"operator"}},o.languages.kum=o.languages.kumir})(a)}return d}var l=p();let u;u=f(l),s=c({__proto__:null,default:u},[l])});export{g as __tla,s as k};
