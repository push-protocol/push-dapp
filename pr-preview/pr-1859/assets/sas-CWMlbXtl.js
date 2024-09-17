import{ef as O,__tla as L}from"./index-BKxGL_4D.js";let v,U=Promise.all([(()=>{try{return L}catch{}})()]).then(async()=>{function N(i,c){for(var n=0;n<c.length;n++){const t=c[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in i)){const a=Object.getOwnPropertyDescriptor(t,e);a&&Object.defineProperty(i,e,a.get?a:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var m,g;function x(){if(g)return m;g=1,m=i,i.displayName="sas",i.aliases=[];function i(c){(function(n){var t=/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))/.source,e=/\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,a={pattern:RegExp(t+"[bx]"),alias:"number"},b={pattern:/&[a-z_]\w*/i},k={pattern:/((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMEXIST|SYMGLOBL|SYMLOCAL|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,lookbehind:!0,alias:"keyword"},S={pattern:/(^|\s)(?:proc\s+\w+|data(?!=)|quit|run)\b/i,alias:"keyword",lookbehind:!0},l=[/\/\*[\s\S]*?\*\//,{pattern:/(^[ \t]*|;\s*)\*[^;]*;/m,lookbehind:!0}],s={pattern:RegExp(t),greedy:!0},r=/[$%@.(){}\[\];,\\]/,u={pattern:/%?\b\w+(?=\()/,alias:"keyword"},o={function:u,"arg-value":{pattern:/(=\s*)[A-Z\.]+/i,lookbehind:!0},operator:/=/,"macro-variable":b,arg:{pattern:/[A-Z]+/i,alias:"keyword"},number:e,"numeric-constant":a,punctuation:r,string:s},w={pattern:/\b(?:format|put)\b=?[\w'$.]+/i,inside:{keyword:/^(?:format|put)(?==)/i,equals:/=/,format:{pattern:/(?:\w|\$\d)+\.\d?/,alias:"number"}}},h={pattern:/\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,inside:{keyword:/^(?:format|put)/i,format:{pattern:/[\w$]+\.\d?/,alias:"number"}}},d={pattern:/((?:^|\s)=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,lookbehind:!0,alias:"keyword"},T={pattern:/(^|\s)(?:submit(?:\s+(?:load|norun|parseonly))?|endsubmit)\b/i,lookbehind:!0,alias:"keyword"},E=/aStore|accessControl|aggregation|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|cdm|clustering|conditionalRandomFields|configuration|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deduplication|deepLearn|deepNeural|deepRnn|ds2|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gVarCluster|gam|gleam|graphSemiSupLearn|hiddenMarkovModel|hyperGroup|ica|image|iml|kernalPca|langModel|ldaTopic|loadStreams|mbc|mixed|mlTools|modelPublishing|network|neuralNet|nmf|nonParametricBayes|nonlinear|optNetwork|optimization|panel|pca|percentile|phreg|pls|qkb|qlim|quantreg|recommend|regression|reinforcementLearn|robustPca|ruleMining|sampling|sandwich|sccasl|search(?:Analytics)?|sentimentAnalysis|sequence|session(?:Prop)?|severity|simSystem|simple|smartData|sparkEmbeddedProcess|sparseML|spatialreg|spc|stabilityMonitoring|svDataDescription|svm|table|text(?:Filters|Frequency|Mining|Parse|Rule(?:Develop|Score)|Topic|Util)|timeData|transpose|tsInfo|tsReconcile|uniTimeSeries|varReduce/.source,R={pattern:RegExp(/(^|\s)(?:action\s+)?(?:<act>)\.[a-z]+\b[^;]+/.source.replace(/<act>/g,function(){return E}),"i"),lookbehind:!0,inside:{keyword:RegExp(/(?:<act>)\.[a-z]+\b/.source.replace(/<act>/g,function(){return E}),"i"),action:{pattern:/(?:action)/i,alias:"keyword"},comment:l,function:u,"arg-value":o["arg-value"],operator:o.operator,argument:o.arg,number:e,"numeric-constant":a,punctuation:r,string:s}},p={pattern:/((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?==)|define|delete|describe|document|do\s+over|do|dol|drop|dul|else|end(?:comp|source)?|entryTitle|eval(?:uate)?|exec(?:ute)?|exit|file(?:name)?|fill(?:attrs)?|flist|fnc|function(?:list)?|global|goto|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|_?null_|name|noobs|nowd|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|print|put|raise|ranexp|rannor|rbreak|retain|return|select|session|sessref|set|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|y2axisopts|yaxisopts)\b/i,lookbehind:!0};n.languages.sas={datalines:{pattern:/^([ \t]*)(?:cards|(?:data)?lines);[\s\S]+?^[ \t]*;/im,lookbehind:!0,alias:"string",inside:{keyword:{pattern:/^(?:cards|(?:data)?lines)/i},punctuation:/;/}},"proc-sql":{pattern:/(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{sql:{pattern:RegExp(/^[ \t]*(?:select|alter\s+table|(?:create|describe|drop)\s+(?:index|table(?:\s+constraints)?|view)|create\s+unique\s+index|insert\s+into|update)(?:<str>|[^;"'])+;/.source.replace(/<str>/g,function(){return t}),"im"),alias:"language-sql",inside:n.languages.sql},"global-statements":d,"sql-statements":{pattern:/(^|\s)(?:disconnect\s+from|begin|commit|exec(?:ute)?|reset|rollback|validate)\b/i,lookbehind:!0,alias:"keyword"},number:e,"numeric-constant":a,punctuation:r,string:s}},"proc-groovy":{pattern:/(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:l,groovy:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,function(){return t}),"im"),lookbehind:!0,alias:"language-groovy",inside:n.languages.groovy},keyword:p,"submit-statement":T,"global-statements":d,number:e,"numeric-constant":a,punctuation:r,string:s}},"proc-lua":{pattern:/(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:l,lua:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,function(){return t}),"im"),lookbehind:!0,alias:"language-lua",inside:n.languages.lua},keyword:p,"submit-statement":T,"global-statements":d,number:e,"numeric-constant":a,punctuation:r,string:s}},"proc-cas":{pattern:/(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:l,"statement-var":{pattern:/((?:^|\s)=?)saveresult\s[^;]+/im,lookbehind:!0,inside:{statement:{pattern:/^saveresult\s+\S+/i,inside:{keyword:/^(?:saveresult)/i}},rest:o}},"cas-actions":R,statement:{pattern:/((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,lookbehind:!0,inside:o},step:S,keyword:p,function:u,format:w,altformat:h,"global-statements":d,number:e,"numeric-constant":a,punctuation:r,string:s}},"proc-args":{pattern:RegExp(/(^proc\s+\w+\s+)(?!\s)(?:[^;"']|<str>)+;/.source.replace(/<str>/g,function(){return t}),"im"),lookbehind:!0,inside:o},"macro-keyword":k,"macro-variable":b,"macro-string-functions":{pattern:/((?:^|\s|=))%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)\(.*?(?:[^%]\))/i,lookbehind:!0,inside:{function:{pattern:/%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)/i,alias:"keyword"},"macro-keyword":k,"macro-variable":b,"escaped-char":{pattern:/%['"()<>=¬^~;,#]/},punctuation:r}},"macro-declaration":{pattern:/^%macro[^;]+(?=;)/im,inside:{keyword:/%macro/i}},"macro-end":{pattern:/^%mend[^;]+(?=;)/im,inside:{keyword:/%mend/i}},macro:{pattern:/%_\w+(?=\()/,alias:"keyword"},input:{pattern:/\binput\s[-\w\s/*.$&]+;/i,inside:{input:{alias:"keyword",pattern:/^input/i},comment:l,number:e,"numeric-constant":a}},"options-args":{pattern:/(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,lookbehind:!0,inside:o},"cas-actions":R,comment:l,function:u,format:w,altformat:h,"numeric-constant":a,datetime:{pattern:RegExp(t+"(?:dt?|t)"),alias:"number"},string:s,step:S,keyword:p,"operator-keyword":{pattern:/\b(?:eq|ge|gt|in|le|lt|ne|not)\b/i,alias:"operator"},number:e,operator:/\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?/,punctuation:r}})(c)}return m}var y=x();let f;f=O(y),v=N({__proto__:null,default:f},[y])});export{U as __tla,v as s};
