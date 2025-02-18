import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as b } from "./t4-templating-B5EzSFYT.js";
import { r as g } from "./vbnet-BhrUc4aD.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, o) {
    for (var r = 0; r < o.length; r++) {
      const e = o[r];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const a in e) if (a !== "default" && !(a in t)) {
          const n = Object.getOwnPropertyDescriptor(e, a);
          n && Object.defineProperty(t, a, n.get ? n : {
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
  var i, f;
  function l() {
    if (f) return i;
    f = 1;
    var t = b(), o = g();
    i = r, r.displayName = "t4Vb", r.aliases = [];
    function r(e) {
      e.register(t), e.register(o), e.languages["t4-vb"] = e.languages["t4-templating"].createT4("vbnet");
    }
    return i;
  }
  var s = l();
  let p;
  p = u(s);
  d = c({
    __proto__: null,
    default: p
  }, [
    s
  ]);
});
export {
  __tla,
  d as t
};
