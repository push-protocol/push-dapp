var f,d;function v(){if(d)return f;d=1,f=o,o.displayName="javadoclike",o.aliases=[];function o(u){(function(s){var p=s.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function l(t,r){var e="doc-comment",n=s.languages[t];if(n){var a=n[e];if(!a){var c={};c[e]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},n=s.languages.insertBefore(t,"comment",c),a=n[e]}if(a instanceof RegExp&&(a=n[e]={pattern:a}),Array.isArray(a))for(var i=0,g=a.length;i<g;i++)a[i]instanceof RegExp&&(a[i]={pattern:a[i]}),r(a[i]);else r(a)}}function m(t,r){typeof t=="string"&&(t=[t]),t.forEach(function(e){l(e,function(n){n.inside||(n.inside={}),n.inside.rest=r})})}Object.defineProperty(p,"addSupport",{value:m}),p.addSupport(["java","javascript","php"],p)})(u)}return f}export{v as r};