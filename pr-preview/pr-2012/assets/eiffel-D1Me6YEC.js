import { eH as l, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let p;
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
      const r = n[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(e, t, o.get ? o : {
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
  var i, s;
  function u() {
    if (s) return i;
    s = 1, i = e, e.displayName = "eiffel", e.aliases = [];
    function e(n) {
      n.languages.eiffel = {
        comment: /--.*/,
        string: [
          {
            pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
            greedy: true
          },
          {
            pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
            greedy: true
          },
          {
            pattern: /"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,
            greedy: true
          }
        ],
        char: /'(?:%.|[^%'\r\n])+'/,
        keyword: /\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
        boolean: /\b(?:False|True)\b/i,
        "class-name": /\b[A-Z][\dA-Z_]*\b/,
        number: [
          /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
          /(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i
        ],
        punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
        operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
      };
    }
    return i;
  }
  var f = u();
  let c;
  c = l(f);
  p = d({
    __proto__: null,
    default: c
  }, [
    f
  ]);
});
export {
  __tla,
  p as e
};
