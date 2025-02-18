import { eH as i, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as m } from "./markup-templating-BxAVv-bL.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(t, n) {
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
  var p = m();
  let s;
  s = i(p);
  g = f({
    __proto__: null,
    default: s
  }, [
    p
  ]);
});
export {
  __tla,
  g as m
};
