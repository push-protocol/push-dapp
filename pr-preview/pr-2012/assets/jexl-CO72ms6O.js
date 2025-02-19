import { eH as i, __tla as __tla_0 } from "./index-AGa8OPve.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, u) {
    for (var o = 0; o < u.length; o++) {
      const r = u[o];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n && Object.defineProperty(e, t, n.get ? n : {
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
  var a, l;
  function c() {
    if (l) return a;
    l = 1, a = e, e.displayName = "jexl", e.aliases = [];
    function e(u) {
      u.languages.jexl = {
        string: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        transform: {
          pattern: /(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
          alias: "function",
          lookbehind: true
        },
        function: /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
        number: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
        operator: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
        boolean: /\b(?:false|true)\b/,
        keyword: /\bin\b/,
        punctuation: /[{}[\](),.]/
      };
    }
    return a;
  }
  var s = c();
  let F;
  F = i(s);
  p = f({
    __proto__: null,
    default: F
  }, [
    s
  ]);
});
export {
  __tla,
  p as j
};
