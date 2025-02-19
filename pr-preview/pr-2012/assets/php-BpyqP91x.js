import { eH as f, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as s } from "./php-E3TmF6re.js";
let g;
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
          const p = Object.getOwnPropertyDescriptor(e, r);
          p && Object.defineProperty(t, r, p.get ? p : {
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
  var a = s();
  let c;
  c = f(a);
  g = i({
    __proto__: null,
    default: c
  }, [
    a
  ]);
});
export {
  __tla,
  g as p
};
