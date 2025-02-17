import { eH as c, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as n } from "./basic-DBS9NaGG.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(t, s) {
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
  var i = n();
  let p;
  p = c(i);
  l = f({
    __proto__: null,
    default: p
  }, [
    i
  ]);
});
export {
  __tla,
  l as b
};
