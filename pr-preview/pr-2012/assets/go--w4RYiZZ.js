import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, r) {
    for (var a = 0; a < r.length; a++) {
      const t = r[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const o in t) if (o !== "default" && !(o in e)) {
          const n = Object.getOwnPropertyDescriptor(t, o);
          n && Object.defineProperty(e, o, n.get ? n : {
            enumerable: true,
            get: () => t[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, l;
  function s() {
    if (l) return i;
    l = 1, i = e, e.displayName = "go", e.aliases = [];
    function e(r) {
      r.languages.go = r.languages.extend("clike", {
        string: {
          pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
          lookbehind: true,
          greedy: true
        },
        keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
        boolean: /\b(?:_|false|iota|nil|true)\b/,
        number: [
          /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
          /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
          /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
        ],
        operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
        builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
      }), r.languages.insertBefore("go", "string", {
        char: {
          pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
          greedy: true
        }
      }), delete r.languages.go["class-name"];
    }
    return i;
  }
  var g = s();
  let f;
  f = u(g);
  p = c({
    __proto__: null,
    default: f
  }, [
    g
  ]);
});
export {
  __tla,
  p as g
};
