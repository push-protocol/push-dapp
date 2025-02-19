import { eH as l, __tla as __tla_0 } from "./index-AGa8OPve.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, a) {
    for (var n = 0; n < a.length; n++) {
      const t = a[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(e, r, o.get ? o : {
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
  var i, p;
  function c() {
    if (p) return i;
    p = 1, i = e, e.displayName = "apl", e.aliases = [];
    function e(a) {
      a.languages.apl = {
        comment: /(?:⍝|#[! ]).*$/m,
        string: {
          pattern: /'(?:[^'\r\n]|'')*'/,
          greedy: true
        },
        number: /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,
        statement: /:[A-Z][a-z][A-Za-z]*\b/,
        "system-function": {
          pattern: /⎕[A-Z]+/i,
          alias: "function"
        },
        constant: /[⍬⌾#⎕⍞]/,
        function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
        "monadic-operator": {
          pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
          alias: "operator"
        },
        "dyadic-operator": {
          pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
          alias: "operator"
        },
        assignment: {
          pattern: /←/,
          alias: "keyword"
        },
        punctuation: /[\[;\]()◇⋄]/,
        dfn: {
          pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
          alias: "builtin"
        }
      };
    }
    return i;
  }
  var s = c();
  let d;
  d = l(s);
  m = u({
    __proto__: null,
    default: d
  }, [
    s
  ]);
});
export {
  __tla,
  m as a
};
