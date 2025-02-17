import { eH as f, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as i } from "./bash-CefCgV5_.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, s) {
    for (var o = 0; o < s.length; o++) {
      const e = s[o];
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
  var n = i();
  let p;
  p = f(n);
  l = c({
    __proto__: null,
    default: p
  }, [
    n
  ]);
});
export {
  __tla,
  l as b
};
