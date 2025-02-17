import { eH as a, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as f } from "./cpp-PR_WB-PF.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(t, c) {
    for (var o = 0; o < c.length; o++) {
      const e = c[o];
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
  var n = f();
  let i;
  i = a(n);
  g = s({
    __proto__: null,
    default: i
  }, [
    n
  ]);
});
export {
  __tla,
  g as c
};
