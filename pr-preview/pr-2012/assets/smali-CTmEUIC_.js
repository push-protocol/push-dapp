import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(e, n) {
    for (var a = 0; a < n.length; a++) {
      const t = n[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const i = Object.getOwnPropertyDescriptor(t, r);
          i && Object.defineProperty(e, r, i.get ? i : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, l;
  function p() {
    if (l) return o;
    l = 1, o = e, e.displayName = "smali", e.aliases = [];
    function e(n) {
      n.languages.smali = {
        comment: /#.*/,
        string: {
          pattern: /"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,
          greedy: true
        },
        "class-name": {
          pattern: /(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,
          lookbehind: true,
          inside: {
            "class-name": {
              pattern: /(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,
              lookbehind: true
            },
            namespace: {
              pattern: /^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,
              lookbehind: true,
              inside: {
                punctuation: /\//
              }
            },
            builtin: /^L/
          }
        },
        builtin: [
          {
            pattern: /([();\[])[BCDFIJSVZ]+/,
            lookbehind: true
          },
          {
            pattern: /([\w$>]:)[BCDFIJSVZ]/,
            lookbehind: true
          }
        ],
        keyword: [
          {
            pattern: /(\.end\s+)[\w-]+/,
            lookbehind: true
          },
          {
            pattern: /(^|[^\w.-])\.(?!\d)[\w-]+/,
            lookbehind: true
          },
          {
            pattern: /(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,
            lookbehind: true
          }
        ],
        function: {
          pattern: /(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,
          lookbehind: true
        },
        field: {
          pattern: /[\w$]+(?=:)/,
          alias: "variable"
        },
        register: {
          pattern: /(^|[^\w.-])[vp]\d(?![\w.-])/,
          lookbehind: true,
          alias: "variable"
        },
        boolean: {
          pattern: /(^|[^\w.-])(?:false|true)(?![\w.-])/,
          lookbehind: true
        },
        number: {
          pattern: /(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,
          lookbehind: true
        },
        label: {
          pattern: /(:)\w+/,
          lookbehind: true,
          alias: "property"
        },
        operator: /->|\.\.|[\[=]/,
        punctuation: /[{}(),;:]/
      };
    }
    return o;
  }
  var s = p();
  let b;
  b = u(s);
  m = d({
    __proto__: null,
    default: b
  }, [
    s
  ]);
});
export {
  __tla,
  m as s
};
