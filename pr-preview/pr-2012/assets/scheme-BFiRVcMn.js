import { eH as a, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { r as f } from "./scheme-Cscf027c.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function i(t, c) {
    for (var o = 0; o < c.length; o++) {
      const e = c[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(t, r, s.get ? s : {
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
  var n = f();
  let m;
  m = a(n);
  l = i({
    __proto__: null,
    default: m
  }, [
    n
  ]);
});
export {
  __tla,
  l as s
};
