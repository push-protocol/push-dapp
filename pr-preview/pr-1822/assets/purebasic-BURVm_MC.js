import{bf as p,__tla as f}from"./index-DyD3sd27.js";let c,m=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function u(r,e){for(var l=0;l<e.length;l++){const a=e[l];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in r)){const d=Object.getOwnPropertyDescriptor(a,t);d&&Object.defineProperty(r,t,d.get?d:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var n,i;function b(){if(i)return n;i=1,n=r,r.displayName="purebasic",r.aliases=[];function r(e){e.languages.purebasic=e.languages.extend("clike",{comment:/;.*/,keyword:/\b(?:align|and|as|break|calldebugger|case|compilercase|compilerdefault|compilerelse|compilerelseif|compilerendif|compilerendselect|compilererror|compilerif|compilerselect|continue|data|datasection|debug|debuglevel|declare|declarec|declarecdll|declaredll|declaremodule|default|define|dim|disableasm|disabledebugger|disableexplicit|else|elseif|enableasm|enabledebugger|enableexplicit|end|enddatasection|enddeclaremodule|endenumeration|endif|endimport|endinterface|endmacro|endmodule|endprocedure|endselect|endstructure|endstructureunion|endwith|enumeration|extends|fakereturn|for|foreach|forever|global|gosub|goto|if|import|importc|includebinary|includefile|includepath|interface|macro|module|newlist|newmap|next|not|or|procedure|procedurec|procedurecdll|proceduredll|procedurereturn|protected|prototype|prototypec|read|redim|repeat|restore|return|runtime|select|shared|static|step|structure|structureunion|swap|threaded|to|until|wend|while|with|xincludefile|xor)\b/i,function:/\b\w+(?:\.\w+)?\s*(?=\()/,number:/(?:\$[\da-f]+|\b-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\b/i,operator:/(?:@\*?|\?|\*)\w+|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/}),e.languages.insertBefore("purebasic","keyword",{tag:/#\w+\$?/,asm:{pattern:/(^[\t ]*)!.*/m,lookbehind:!0,alias:"tag",inside:{comment:/;.*/,string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"label-reference-anonymous":{pattern:/(!\s*j[a-z]+\s+)@[fb]/i,lookbehind:!0,alias:"fasm-label"},"label-reference-addressed":{pattern:/(!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,lookbehind:!0,alias:"fasm-label"},keyword:[/\b(?:extern|global)\b[^;\r\n]*/i,/\b(?:CPU|DEFAULT|FLOAT)\b.*/],function:{pattern:/^([\t ]*!\s*)[\da-z]+(?=\s|$)/im,lookbehind:!0},"function-inline":{pattern:/(:\s*)[\da-z]+(?=\s)/i,lookbehind:!0,alias:"function"},label:{pattern:/^([\t ]*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,lookbehind:!0,alias:"fasm-label"},register:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s|mm\d+)\b/i,number:/(?:\b|-|(?=\$))(?:0[hx](?:[\da-f]*\.)?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-/%<>=&|$!,.:]/}}}),delete e.languages.purebasic["class-name"],delete e.languages.purebasic.boolean,e.languages.pbfasm=e.languages.purebasic}return n}var o=b();let s;s=p(o),c=u({__proto__:null,default:s},[o])});export{m as __tla,c as p};
