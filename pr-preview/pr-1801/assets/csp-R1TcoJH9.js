import{b8 as d,__tla as b}from"./index-BlLvdkFL.js";let u,h=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function p(r,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const s=Object.getOwnPropertyDescriptor(e,t);s&&Object.defineProperty(r,t,s.get?s:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a,i;function f(){if(i)return a;i=1,a=r,r.displayName="csp",r.aliases=[];function r(o){(function(n){function e(t){return RegExp(/([ \t])/.source+"(?:"+t+")"+/(?=[\s;]|$)/.source,"i")}n.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:e(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:e(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:e(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:e(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:e(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:e(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:e(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(o)}return a}var c=f();let l;l=d(c),u=p({__proto__:null,default:l},[c])});export{h as __tla,u as c};
