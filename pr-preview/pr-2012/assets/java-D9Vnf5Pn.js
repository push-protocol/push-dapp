import { eH as s, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { r as i } from "./java-BxMbkJZ_.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, n) {
    for (var o = 0; o < n.length; o++) {
      const e = n[o];
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
  var f = i();
  let p;
  p = s(f);
  g = c({
    __proto__: null,
    default: p
  }, [
    f
  ]);
});
export {
  __tla,
  g as j
};
