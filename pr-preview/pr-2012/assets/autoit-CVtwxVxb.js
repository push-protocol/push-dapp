import { eH as s, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, o) {
    for (var n = 0; n < o.length; n++) {
      const e = o[n];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, u;
  function d() {
    if (u) return a;
    u = 1, a = t, t.displayName = "autoit", t.aliases = [];
    function t(o) {
      o.languages.autoit = {
        comment: [
          /;.*/,
          {
            pattern: /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,
            lookbehind: true
          }
        ],
        url: {
          pattern: /(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
          lookbehind: true
        },
        string: {
          pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
          greedy: true,
          inside: {
            variable: /([%$@])\w+\1/
          }
        },
        directive: {
          pattern: /(^[\t ]*)#[\w-]+/m,
          lookbehind: true,
          alias: "keyword"
        },
        function: /\b\w+(?=\()/,
        variable: /[$@]\w+/,
        keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
        number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
        boolean: /\b(?:False|True)\b/i,
        operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,
        punctuation: /[\[\]().,:]/
      };
    }
    return a;
  }
  var l = d();
  let b;
  b = s(l);
  p = c({
    __proto__: null,
    default: b
  }, [
    l
  ]);
});
export {
  __tla,
  p as a
};
