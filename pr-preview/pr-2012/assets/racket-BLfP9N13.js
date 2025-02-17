import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as l } from "./scheme-Cscf027c.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(t, r) {
    for (var e = 0; e < r.length; e++) {
      const a = r[e];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const n in a) if (n !== "default" && !(n in t)) {
          const o = Object.getOwnPropertyDescriptor(a, n);
          o && Object.defineProperty(t, n, o.get ? o : {
            enumerable: true,
            get: () => a[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var c, s;
  function i() {
    if (s) return c;
    s = 1;
    var t = l();
    c = r, r.displayName = "racket", r.aliases = [
      "rkt"
    ];
    function r(e) {
      e.register(t), e.languages.racket = e.languages.extend("scheme", {
        "lambda-parameter": {
          pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
          lookbehind: true
        }
      }), e.languages.insertBefore("racket", "string", {
        lang: {
          pattern: /^#lang.+/m,
          greedy: true,
          alias: "keyword"
        }
      }), e.languages.rkt = e.languages.racket;
    }
    return c;
  }
  var g = i();
  let k;
  k = u(g);
  m = f({
    __proto__: null,
    default: k
  }, [
    g
  ]);
});
export {
  __tla,
  m as r
};
