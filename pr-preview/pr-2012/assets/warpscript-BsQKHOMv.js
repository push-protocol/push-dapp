import { eH as c, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(r, a) {
    for (var p = 0; p < a.length; p++) {
      const e = a[p];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, i;
  function f() {
    if (i) return o;
    i = 1, o = r, r.displayName = "warpscript", r.aliases = [];
    function r(a) {
      a.languages.warpscript = {
        comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
        string: {
          pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
          greedy: true
        },
        variable: /\$\S+/,
        macro: {
          pattern: /@\S+/,
          alias: "property"
        },
        keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
        number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
        boolean: /\b(?:F|T|false|true)\b/,
        punctuation: /<%|%>|[{}[\]()]/,
        operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
      };
    }
    return o;
  }
  var s = f();
  let b;
  b = c(s);
  l = u({
    __proto__: null,
    default: b
  }, [
    s
  ]);
});
export {
  __tla,
  l as w
};
