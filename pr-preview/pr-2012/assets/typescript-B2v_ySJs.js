import { eH as c, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { r as n } from "./typescript-CVO-8GEc.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function a(r, s) {
    for (var o = 0; o < s.length; o++) {
      const e = s[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in r)) {
          const p = Object.getOwnPropertyDescriptor(e, t);
          p && Object.defineProperty(r, t, p.get ? p : {
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
  var i = n();
  let f;
  f = c(i);
  l = a({
    __proto__: null,
    default: f
  }, [
    i
  ]);
});
export {
  __tla,
  l as t
};
