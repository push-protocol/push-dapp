import{cJ as g,__tla as y}from"./index-DC41svKB.js";let s,f=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function u(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,b;function c(){if(b)return a;b=1,a=t,t.displayName="powerquery",t.aliases=[];function t(e){e.languages.powerquery={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},"quoted-identifier":{pattern:/#"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},string:{pattern:/(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},constant:[/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,/\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,/\bOccurrence\.(?:All|First|Last)\b/,/\bOrder\.(?:Ascending|Descending)\b/,/\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,/\bMissingField\.(?:Error|Ignore|UseNull)\b/,/\bQuoteStyle\.(?:Csv|None)\b/,/\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,/\bGroupKind\.(?:Global|Local)\b/,/\bExtraValues\.(?:Error|Ignore|List)\b/,/\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,/\bJoinSide\.(?:Left|Right)\b/,/\bPrecision\.(?:Decimal|Double)\b/,/\bRelativePosition\.From(?:End|Start)\b/,/\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,/\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,/\bnull\b/],boolean:/\b(?:false|true)\b/,keyword:/\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,function:{pattern:/(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,lookbehind:!0},"data-type":{pattern:/\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,alias:"class-name"},number:{pattern:/\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,lookbehind:!0},operator:/[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,punctuation:/[,;\[\](){}]/},e.languages.pq=e.languages.powerquery,e.languages.mscript=e.languages.powerquery}return a}var l=c();let d;d=g(l),s=u({__proto__:null,default:d},[l])});export{f as __tla,s as p};
