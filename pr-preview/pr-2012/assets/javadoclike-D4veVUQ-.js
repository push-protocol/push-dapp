import { eH as n, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as f } from "./javadoclike-myFApC35.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(t, i) {
    for (var o = 0; o < i.length; o++) {
      const e = i[o];
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
  var c = f();
  let l;
  l = n(c);
  d = s({
    __proto__: null,
    default: l
  }, [
    c
  ]);
});
export {
  __tla,
  d as j
};
