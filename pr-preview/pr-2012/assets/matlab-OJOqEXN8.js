import { eH as l, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, a) {
    for (var n = 0; n < a.length; n++) {
      const t = a[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(e, r, o.get ? o : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, s;
  function b() {
    if (s) return i;
    s = 1, i = e, e.displayName = "matlab", e.aliases = [];
    function e(a) {
      a.languages.matlab = {
        comment: [
          /%\{[\s\S]*?\}%/,
          /%.+/
        ],
        string: {
          pattern: /\B'(?:''|[^'\r\n])*'/,
          greedy: true
        },
        number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
        keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
        function: /\b(?!\d)\w+(?=\s*\()/,
        operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
        punctuation: /\.{3}|[.,;\[\](){}!]/
      };
    }
    return i;
  }
  var u = b();
  let c;
  c = l(u);
  p = f({
    __proto__: null,
    default: c
  }, [
    u
  ]);
});
export {
  __tla,
  p as m
};
