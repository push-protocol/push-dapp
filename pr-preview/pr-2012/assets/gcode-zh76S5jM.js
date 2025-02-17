import { eH as i, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(e, o) {
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
  var c, d;
  function g() {
    if (d) return c;
    d = 1, c = e, e.displayName = "gcode", e.aliases = [];
    function e(o) {
      o.languages.gcode = {
        comment: /;.*|\B\(.*?\)\B/,
        string: {
          pattern: /"(?:""|[^"])*"/,
          greedy: true
        },
        keyword: /\b[GM]\d+(?:\.\d+)?\b/,
        property: /\b[A-Z]/,
        checksum: {
          pattern: /(\*)\d+/,
          lookbehind: true,
          alias: "number"
        },
        punctuation: /[:*]/
      };
    }
    return c;
  }
  var u = g();
  let f;
  f = i(u);
  l = s({
    __proto__: null,
    default: f
  }, [
    u
  ]);
});
export {
  __tla,
  l as g
};
