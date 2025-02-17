import { eH as n, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as p } from "./csharp-Cd5Udg29.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(t, s) {
    for (var o = 0; o < s.length; o++) {
      const e = s[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in t)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(t, r, a.get ? a : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var c = p();
  let i;
  i = n(c);
  g = f({
    __proto__: null,
    default: i
  }, [
    c
  ]);
});
export {
  __tla,
  g as c
};
