import{ev as h,__tla as _}from"./index-C29vdlfD.js";let g,w=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{function y(n,i){for(var a=0;a<i.length;a++){const r=i[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s,d;function k(){if(d)return s;d=1,s=n,n.displayName="robotframework",n.aliases=[];function n(i){(function(a){var r={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},t={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function e(v,f){var o={};o["section-header"]={pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"};for(var b in f)o[b]=f[b];return o.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},o.variable=t,o.comment=r,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,function(){return v}),"im"),alias:"section",inside:o}}var l={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},c={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:t}},u={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:t}};a.languages.robotframework={settings:e("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:e("Variables"),"test-cases":e("Test Cases",{"test-name":c,documentation:l,property:u}),keywords:e("Keywords",{"keyword-name":c,documentation:l,property:u}),tasks:e("Tasks",{"task-name":c,documentation:l,property:u}),comment:r},a.languages.robot=a.languages.robotframework})(i)}return s}var p=k();let m;m=h(p),g=y({__proto__:null,default:m},[p])});export{w as __tla,g as r};
