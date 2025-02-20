import { eH as s, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { r as u } from "./turtle-Ro1R6Je7.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(r, a) {
    for (var o = 0; o < a.length; o++) {
      const e = a[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
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
  g as t
};
