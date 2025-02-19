import { eH as f, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as i } from "./jsx-CWP8P1mH.js";
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
  var a = i();
  let p;
  p = f(a);
  g = c({
    __proto__: null,
    default: p
  }, [
    a
  ]);
});
export {
  __tla,
  g as j
};
