import { eH as u, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as g } from "./t4-templating-B5EzSFYT.js";
import { r as p } from "./csharp-Cd5Udg29.js";
let T;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, s) {
    for (var r = 0; r < s.length; r++) {
      const e = s[r];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const a in e) if (a !== "default" && !(a in t)) {
          const o = Object.getOwnPropertyDescriptor(e, a);
          o && Object.defineProperty(t, a, o.get ? o : {
            enumerable: true,
            get: () => e[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var n, i;
  function l() {
    if (i) return n;
    i = 1;
    var t = g(), s = p();
    n = r, r.displayName = "t4Cs", r.aliases = [];
    function r(e) {
      e.register(t), e.register(s), e.languages.t4 = e.languages["t4-cs"] = e.languages["t4-templating"].createT4("csharp");
    }
    return n;
  }
  var f = l();
  let C;
  C = u(f);
  T = c({
    __proto__: null,
    default: C
  }, [
    f
  ]);
});
export {
  __tla,
  T as t
};
