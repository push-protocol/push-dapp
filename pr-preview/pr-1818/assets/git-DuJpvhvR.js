import{ef as u,__tla as d}from"./index-Dw0HuXW7.js";let c,p=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function f(t,n){for(var i=0;i<n.length;i++){const e=n[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,l;function g(){if(l)return a;l=1,a=t,t.displayName="git",t.aliases=[];function t(n){n.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m}}return a}var m=g();let s;s=u(m),c=f({__proto__:null,default:s},[m])});export{p as __tla,c as g};
