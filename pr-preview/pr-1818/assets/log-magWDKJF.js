import{ef as c,__tla as f}from"./index-l_j2la3t.js";let d,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(a,t){for(var o=0;o<t.length;o++){const e=t[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(a,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var n,s;function u(){if(s)return n;s=1,n=a,a.displayName="log",a.aliases=[];function a(t){t.languages.log={string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,greedy:!0},exception:{pattern:/(^|[^\w.])[a-z][\w.]*(?:Error|Exception):.*(?:(?:\r\n?|\n)[ \t]*(?:at[ \t].+|\.{3}.*|Caused by:.*))+(?:(?:\r\n?|\n)[ \t]*\.\.\. .*)?/,lookbehind:!0,greedy:!0,alias:["javastacktrace","language-javastacktrace"],inside:t.languages.javastacktrace||{keyword:/\bat\b/,function:/[a-z_][\w$]*(?=\()/,punctuation:/[.:()]/}},level:[{pattern:/\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,alias:["error","important"]},{pattern:/\b(?:WARN|WARNING|WRN)\b/,alias:["warning","important"]},{pattern:/\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,alias:["info","keyword"]},{pattern:/\b(?:DBG|DEBUG|FINE)\b/,alias:["debug","keyword"]},{pattern:/\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,alias:["trace","comment"]}],property:{pattern:/((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,lookbehind:!0},separator:{pattern:/(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,lookbehind:!0,alias:"comment"},url:/\b(?:file|ftp|https?):\/\/[^\s|,;'"]*[^\s|,;'">.]/,email:{pattern:/(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,lookbehind:!0,alias:"url"},"ip-address":{pattern:/\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/,alias:"constant"},"mac-address":{pattern:/\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,alias:"constant"},domain:{pattern:/(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,lookbehind:!0,alias:"constant"},uuid:{pattern:/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,alias:"constant"},hash:{pattern:/\b(?:[a-f0-9]{32}){1,2}\b/i,alias:"constant"},"file-path":{pattern:/\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,lookbehind:!0,greedy:!0,alias:"string"},date:{pattern:RegExp(/\b\d{4}[-/]\d{2}[-/]\d{2}(?:T(?=\d{1,2}:)|(?=\s\d{1,2}:))/.source+"|"+/\b\d{1,4}[-/ ](?:\d{1,2}|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)[-/ ]\d{2,4}T?\b/.source+"|"+/\b(?:(?:Fri|Mon|Sat|Sun|Thu|Tue|Wed)(?:\s{1,2}(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep))?|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)\s{1,2}\d{1,2}\b/.source,"i"),alias:"number"},time:{pattern:/\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,alias:"number"},boolean:/\b(?:false|null|true)\b/i,number:{pattern:/(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,lookbehind:!0},operator:/[;:?<=>~/@!$%&+\-|^(){}*#]/,punctuation:/[\[\].,]/}}return n}var l=u();let b;b=c(l),d=p({__proto__:null,default:b},[l])});export{g as __tla,d as l};
