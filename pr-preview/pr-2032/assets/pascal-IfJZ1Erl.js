import{ey as b,__tla as f}from"./index-SVBZTWc1.js";let d,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in t)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(t,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i,l;function u(){if(l)return i;l=1,i=t,t.displayName="pascal",t.aliases=["objectpascal"];function t(e){e.languages.pascal={directive:{pattern:/\{\$[\s\S]*?\}/,greedy:!0,alias:["marco","property"]},comment:{pattern:/\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/,greedy:!0},string:{pattern:/(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,greedy:!0},asm:{pattern:/(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,lookbehind:!0,greedy:!0,inside:null},keyword:[{pattern:/(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,lookbehind:!0}],number:[/(?:[&%]\d+|\$[a-f\d]+)/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],operator:[/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/,{pattern:/(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,lookbehind:!0}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/},e.languages.pascal.asm.inside=e.languages.extend("pascal",{asm:void 0,keyword:void 0,operator:void 0}),e.languages.objectpascal=e.languages.pascal}return i}var s=u();let c;c=b(s),d=p({__proto__:null,default:c},[s])});export{g as __tla,d as p};
