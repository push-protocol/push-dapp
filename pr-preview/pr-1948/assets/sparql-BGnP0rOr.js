import{ew as I,__tla as l}from"./index-BTrhFIgs.js";import{r as i}from"./turtle-Ro1R6Je7.js";let N,D=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{function n(E,r){for(var e=0;e<r.length;e++){const t=r[e];if(typeof t!="string"&&!Array.isArray(t)){for(const S in t)if(S!=="default"&&!(S in E)){const R=Object.getOwnPropertyDescriptor(t,S);R&&Object.defineProperty(E,S,R.get?R:{enumerable:!0,get:()=>t[S]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var A,T;function s(){if(T)return A;T=1;var E=i();A=r,r.displayName="sparql",r.aliases=["rq"];function r(e){e.register(E),e.languages.sparql=e.languages.extend("turtle",{boolean:/\b(?:false|true)\b/i,variable:{pattern:/[?$]\w+/,greedy:!0}}),e.languages.insertBefore("sparql","punctuation",{keyword:[/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,/\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,/\b(?:BASE|GRAPH|PREFIX)\b/i]}),e.languages.rq=e.languages.sparql}return A}var a=s();let O;O=I(a),N=n({__proto__:null,default:O},[a])});export{D as __tla,N as s};
