import { eH as s, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { r as u } from "./lua-DER4jxlW.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(t, n) {
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
  var f = u();
  let i;
  i = s(f);
  g = l({
    __proto__: null,
    default: i
  }, [
    f
  ]);
});
export {
  __tla,
  g as l
};
