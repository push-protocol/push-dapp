import { eH as l, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, n) {
    for (var t = 0; t < n.length; t++) {
      const r = n[t];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const a in r) if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(r, a);
          o && Object.defineProperty(e, a, o.get ? o : {
            enumerable: true,
            get: () => r[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, u;
  function d() {
    if (u) return i;
    u = 1, i = e, e.displayName = "agda", e.aliases = [];
    function e(n) {
      (function(t) {
        t.languages.agda = {
          comment: /\{-[\s\S]*?(?:-\}|$)|--.*/,
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: true
          },
          punctuation: /[(){}⦃⦄.;@]/,
          "class-name": {
            pattern: /((?:data|record) +)\S+/,
            lookbehind: true
          },
          function: {
            pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,
            lookbehind: true
          },
          operator: {
            pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,
            lookbehind: true
          },
          keyword: /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/
        };
      })(n);
    }
    return i;
  }
  var s = d();
  let p;
  p = l(s);
  g = c({
    __proto__: null,
    default: p
  }, [
    s
  ]);
});
export {
  __tla,
  g as a
};
