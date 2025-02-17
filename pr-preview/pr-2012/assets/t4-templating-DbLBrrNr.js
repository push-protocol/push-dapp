import { eH as p, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as f } from "./t4-templating-B5EzSFYT.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(r, a) {
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
  var i = f();
  let l;
  l = p(i);
  m = s({
    __proto__: null,
    default: l
  }, [
    i
  ]);
});
export {
  __tla,
  m as t
};
