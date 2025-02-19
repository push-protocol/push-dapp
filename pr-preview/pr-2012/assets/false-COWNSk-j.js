import { eH as i, __tla as __tla_0 } from "./index-AGa8OPve.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, n) {
    for (var r = 0; r < n.length; r++) {
      const t = n[r];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const a in t) if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(t, a);
          o && Object.defineProperty(e, a, o.get ? o : {
            enumerable: true,
            get: () => t[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, l;
  function c() {
    if (l) return s;
    l = 1, s = e, e.displayName = "$false", e.aliases = [];
    function e(n) {
      (function(r) {
        r.languages.false = {
          comment: {
            pattern: /\{[^}]*\}/
          },
          string: {
            pattern: /"[^"]*"/,
            greedy: true
          },
          "character-code": {
            pattern: /'(?:[^\r]|\r\n?)/,
            alias: "number"
          },
          "assembler-code": {
            pattern: /\d+`/,
            alias: "important"
          },
          number: /\d+/,
          operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
          punctuation: /\[|\]/,
          variable: /[a-z]/,
          "non-standard": {
            pattern: /[()<BDO®]/,
            alias: "bold"
          }
        };
      })(n);
    }
    return s;
  }
  var f = c();
  let p;
  p = i(f);
  g = u({
    __proto__: null,
    default: p
  }, [
    f
  ]);
});
export {
  g as _,
  __tla
};
