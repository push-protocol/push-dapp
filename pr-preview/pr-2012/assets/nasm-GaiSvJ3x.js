import { eH as m, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, a) {
    for (var n = 0; n < a.length; n++) {
      const r = a[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const s = Object.getOwnPropertyDescriptor(r, t);
          s && Object.defineProperty(e, t, s.get ? s : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, d;
  function l() {
    if (d) return o;
    d = 1, o = e, e.displayName = "nasm", e.aliases = [];
    function e(a) {
      a.languages.nasm = {
        comment: /;.*$/m,
        string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        label: {
          pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
          lookbehind: true,
          alias: "function"
        },
        keyword: [
          /\[?BITS (?:16|32|64)\]?/,
          {
            pattern: /(^\s*)section\s*[a-z.]+:?/im,
            lookbehind: true
          },
          /(?:extern|global)[^;\r\n]*/i,
          /(?:CPU|DEFAULT|FLOAT).*$/m
        ],
        register: {
          pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,
          alias: "variable"
        },
        number: /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
        operator: /[\[\]*+\-\/%<>=&|$!]/
      };
    }
    return o;
  }
  var i = l();
  let b;
  b = m(i);
  u = f({
    __proto__: null,
    default: b
  }, [
    i
  ]);
});
export {
  __tla,
  u as n
};
