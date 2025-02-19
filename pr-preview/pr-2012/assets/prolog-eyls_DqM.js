import { eH as g, __tla as __tla_0 } from "./index-AGa8OPve.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(r, t) {
    for (var n = 0; n < t.length; n++) {
      const e = t[n];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const o in e) if (o !== "default" && !(o in r)) {
          const a = Object.getOwnPropertyDescriptor(e, o);
          a && Object.defineProperty(r, o, a.get ? a : {
            enumerable: true,
            get: () => e[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, p;
  function s() {
    if (p) return i;
    p = 1, i = r, r.displayName = "prolog", r.aliases = [];
    function r(t) {
      t.languages.prolog = {
        comment: {
          pattern: /\/\*[\s\S]*?\*\/|%.*/,
          greedy: true
        },
        string: {
          pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
          greedy: true
        },
        builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
        function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
        number: /\b\d+(?:\.\d*)?/,
        operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
        punctuation: /[(){}\[\],]/
      };
    }
    return i;
  }
  var u = s();
  let f;
  f = g(u);
  b = l({
    __proto__: null,
    default: f
  }, [
    u
  ]);
});
export {
  __tla,
  b as p
};
