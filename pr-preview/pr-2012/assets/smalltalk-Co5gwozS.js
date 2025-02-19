import { eH as u, __tla as __tla_0 } from "./index-AGa8OPve.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(e, a) {
    for (var l = 0; l < a.length; l++) {
      const t = a[l];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(e, r, n.get ? n : {
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
  var o, s;
  function p() {
    if (s) return o;
    s = 1, o = e, e.displayName = "smalltalk", e.aliases = [];
    function e(a) {
      a.languages.smalltalk = {
        comment: {
          pattern: /"(?:""|[^"])*"/,
          greedy: true
        },
        char: {
          pattern: /\$./,
          greedy: true
        },
        string: {
          pattern: /'(?:''|[^'])*'/,
          greedy: true
        },
        symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
        "block-arguments": {
          pattern: /(\[\s*):[^\[|]*\|/,
          lookbehind: true,
          inside: {
            variable: /:[\da-z]+/i,
            punctuation: /\|/
          }
        },
        "temporary-variables": {
          pattern: /\|[^|]+\|/,
          inside: {
            variable: /[\da-z]+/i,
            punctuation: /\|/
          }
        },
        keyword: /\b(?:new|nil|self|super)\b/,
        boolean: /\b(?:false|true)\b/,
        number: [
          /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
          /\b\d+(?:\.\d+)?(?:e-?\d+)?/
        ],
        operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
        punctuation: /[.;:?\[\](){}]/
      };
    }
    return o;
  }
  var i = p();
  let m;
  m = u(i);
  b = d({
    __proto__: null,
    default: m
  }, [
    i
  ]);
});
export {
  __tla,
  b as s
};
