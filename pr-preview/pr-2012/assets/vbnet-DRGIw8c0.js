import { eH as s, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { r as i } from "./vbnet-BhrUc4aD.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(r, a) {
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
  var f = i();
  let p;
  p = s(f);
  l = c({
    __proto__: null,
    default: p
  }, [
    f
  ]);
});
export {
  __tla,
  l as v
};
