import { eH as f, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as i } from "./json-BESjz4hO.js";
let g;
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
