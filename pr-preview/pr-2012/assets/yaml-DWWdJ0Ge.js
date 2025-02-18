import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as l } from "./yaml-pHjxJgpq.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function i(t, n) {
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
  var f = l();
  let c;
  c = s(f);
  u = i({
    __proto__: null,
    default: c
  }, [
    f
  ]);
});
export {
  __tla,
  u as y
};
