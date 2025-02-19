import { eH as n, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as f } from "./haskell-Ds42Eazu.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function i(t, s) {
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
  var l = f();
  let c;
  c = n(l);
  g = i({
    __proto__: null,
    default: c
  }, [
    l
  ]);
});
export {
  __tla,
  g as h
};
