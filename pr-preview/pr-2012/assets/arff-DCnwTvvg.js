import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(r, a) {
    for (var f = 0; f < a.length; f++) {
      const e = a[f];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, i;
  function d() {
    if (i) return o;
    i = 1, o = r, r.displayName = "arff", r.aliases = [];
    function r(a) {
      a.languages.arff = {
        comment: /%.*/,
        string: {
          pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        keyword: /@(?:attribute|data|end|relation)\b/i,
        number: /\b\d+(?:\.\d+)?\b/,
        punctuation: /[{},]/
      };
    }
    return o;
  }
  var u = d();
  let l;
  l = s(u);
  g = c({
    __proto__: null,
    default: l
  }, [
    u
  ]);
});
export {
  __tla,
  g as a
};
