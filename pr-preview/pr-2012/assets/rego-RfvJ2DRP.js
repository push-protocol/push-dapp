import { eH as b, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(e, o) {
    for (var n = 0; n < o.length; n++) {
      const r = o[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a && Object.defineProperty(e, t, a.get ? a : {
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
  var s, i;
  function p() {
    if (i) return s;
    i = 1, s = e, e.displayName = "rego", e.aliases = [];
    function e(o) {
      o.languages.rego = {
        comment: /#.*/,
        property: {
          pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
          lookbehind: true,
          greedy: true
        },
        string: {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
          lookbehind: true,
          greedy: true
        },
        keyword: /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
        boolean: /\b(?:false|true)\b/,
        function: {
          pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
          inside: {
            namespace: /\b\w+\b(?=\s*\.)/,
            punctuation: /\./
          }
        },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
        punctuation: /[,;.\[\]{}()]/
      };
    }
    return s;
  }
  var u = p();
  let l;
  l = b(u);
  f = g({
    __proto__: null,
    default: l
  }, [
    u
  ]);
});
export {
  __tla,
  f as r
};
