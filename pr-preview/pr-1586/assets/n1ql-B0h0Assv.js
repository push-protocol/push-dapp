import{cr as U,__tla as n}from"./index-CkohXW8U.js";let t,D=Promise.all([(()=>{try{return n}catch{}})()]).then(async()=>{function C(E,R){for(var A=0;A<R.length;A++){const T=R[A];if(typeof T!="string"&&!Array.isArray(T)){for(const N in T)if(N!=="default"&&!(N in E)){const S=Object.getOwnPropertyDescriptor(T,N);S&&Object.defineProperty(E,N,S.get?S:{enumerable:!0,get:()=>T[N]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var I,O;function r(){if(O)return I;O=1,I=E,E.displayName="n1ql",E.aliases=[];function E(R){R.languages.n1ql={comment:{pattern:/\/\*[\s\S]*?(?:$|\*\/)|--.*/,greedy:!0},string:{pattern:/(["'])(?:\\[\s\S]|(?!\1)[^\\]|\1\1)*\1/,greedy:!0},identifier:{pattern:/`(?:\\[\s\S]|[^\\`]|``)*`/,greedy:!0},parameter:/\$[\w.]+/,keyword:/\b(?:ADVISE|ALL|ALTER|ANALYZE|AS|ASC|AT|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|COMMITTED|CONNECT|CONTINUE|CORRELATE|CORRELATED|COVER|CREATE|CURRENT|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FILTER|FLATTEN|FLUSH|FOLLOWING|FOR|FORCE|FROM|FTS|FUNCTION|GOLANG|GRANT|GROUP|GROUPS|GSI|HASH|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|ISOLATION|JAVASCRIPT|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LANGUAGE|LAST|LEFT|LET|LETTING|LEVEL|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NL|NO|NTH_VALUE|NULL|NULLS|NUMBER|OBJECT|OFFSET|ON|OPTION|OPTIONS|ORDER|OTHERS|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PRECEDING|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROBE|PROCEDURE|PUBLIC|RANGE|RAW|REALM|REDUCE|RENAME|RESPECT|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|ROW|ROWS|SATISFIES|SAVEPOINT|SCHEMA|SCOPE|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TIES|TO|TRAN|TRANSACTION|TRIGGER|TRUNCATE|UNBOUNDED|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WINDOW|WITH|WORK|XOR)\b/i,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:FALSE|TRUE)\b/i,number:/(?:\b\d+\.|\B\.)\d+e[+\-]?\d+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/%]|!=|==?|\|\||<[>=]?|>=?|\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\b/i,punctuation:/[;[\](),.{}:]/}}return I}var L=r();let e;e=U(L),t=C({__proto__:null,default:e},[L])});export{D as __tla,t as n};
