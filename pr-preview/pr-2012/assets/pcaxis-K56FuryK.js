import { eH as u, __tla as __tla_0 } from "./index-AGa8OPve.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const a in r) if (a !== "default" && !(a in e)) {
          const s = Object.getOwnPropertyDescriptor(r, a);
          s && Object.defineProperty(e, a, s.get ? s : {
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
  var o, i;
  function d() {
    if (i) return o;
    i = 1, o = e, e.displayName = "pcaxis", e.aliases = [
      "px"
    ];
    function e(t) {
      t.languages.pcaxis = {
        string: /"[^"]*"/,
        keyword: {
          pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
          lookbehind: true,
          greedy: true,
          inside: {
            keyword: /^[-A-Z\d]+/,
            language: {
              pattern: /^(\s*)\[[-\w]+\]/,
              lookbehind: true,
              inside: {
                punctuation: /^\[|\]$/,
                property: /[-\w]+/
              }
            },
            "sub-key": {
              pattern: /^(\s*)\S[\s\S]*/,
              lookbehind: true,
              inside: {
                parameter: {
                  pattern: /"[^"]*"/,
                  alias: "property"
                },
                punctuation: /^\(|\)$|,/
              }
            }
          }
        },
        operator: /=/,
        tlist: {
          pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
          greedy: true,
          inside: {
            function: /^TLIST/,
            property: {
              pattern: /^(\s*\(\s*)\w+/,
              lookbehind: true
            },
            string: /"[^"]*"/,
            punctuation: /[(),]/,
            operator: /-/
          }
        },
        punctuation: /[;,]/,
        number: {
          pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/,
          lookbehind: true
        },
        boolean: /NO|YES/
      }, t.languages.px = t.languages.pcaxis;
    }
    return o;
  }
  var p = d();
  let l;
  l = u(p);
  f = c({
    __proto__: null,
    default: l
  }, [
    p
  ]);
});
export {
  __tla,
  f as p
};
