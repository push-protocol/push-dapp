import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as u } from "./ruby-DYsn9XfW.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function i(t, a) {
    for (var o = 0; o < a.length; o++) {
      const e = a[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in t)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(t, r, n.get ? n : {
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
  var f = u();
  let c;
  c = s(f);
  b = i({
    __proto__: null,
    default: c
  }, [
    f
  ]);
});
export {
  __tla,
  b as r
};
