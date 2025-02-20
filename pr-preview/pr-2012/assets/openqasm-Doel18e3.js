import { eH as l, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(e, t) {
    for (var a = 0; a < t.length; a++) {
      const r = t[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const n in r) if (n !== "default" && !(n in e)) {
          const o = Object.getOwnPropertyDescriptor(r, n);
          o && Object.defineProperty(e, n, o.get ? o : {
            enumerable: true,
            get: () => r[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, i;
  function c() {
    if (i) return s;
    i = 1, s = e, e.displayName = "openqasm", e.aliases = [
      "qasm"
    ];
    function e(t) {
      t.languages.openqasm = {
        comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
        string: {
          pattern: /"[^"\r\n\t]*"|'[^'\r\n\t]*'/,
          greedy: true
        },
        keyword: /\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,
        "class-name": /\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,
        function: /\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,
        constant: /\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,
        number: {
          pattern: /(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,
          lookbehind: true
        },
        operator: /->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,
        punctuation: /[(){}\[\];,:.]/
      }, t.languages.qasm = t.languages.openqasm;
    }
    return s;
  }
  var u = c();
  let f;
  f = l(u);
  m = p({
    __proto__: null,
    default: f
  }, [
    u
  ]);
});
export {
  __tla,
  m as o
};
