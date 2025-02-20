import { eH as u, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, p) {
    for (var o = 0; o < p.length; o++) {
      const r = p[o];
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
  var n, i;
  function f() {
    if (i) return n;
    i = 1, n = e, e.displayName = "hpkp", e.aliases = [];
    function e(p) {
      p.languages.hpkp = {
        directive: {
          pattern: /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
          alias: "property"
        },
        operator: /=/,
        punctuation: /;/
      };
    }
    return n;
  }
  var s = f();
  let l;
  l = u(s);
  d = c({
    __proto__: null,
    default: l
  }, [
    s
  ]);
});
export {
  __tla,
  d as h
};
