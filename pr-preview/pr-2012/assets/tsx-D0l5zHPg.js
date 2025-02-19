import { eH as l, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as c } from "./jsx-CWP8P1mH.js";
import { r as i } from "./typescript-CVO-8GEc.js";
let j;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(a, o) {
    for (var r = 0; r < o.length; r++) {
      const t = o[r];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const e in t) if (e !== "default" && !(e in a)) {
          const s = Object.getOwnPropertyDescriptor(t, e);
          s && Object.defineProperty(a, e, s.get ? s : {
            enumerable: true,
            get: () => t[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var p, u;
  function x() {
    if (u) return p;
    u = 1;
    var a = c(), o = i();
    p = r, r.displayName = "tsx", r.aliases = [];
    function r(t) {
      t.register(a), t.register(o), function(e) {
        var s = e.util.clone(e.languages.typescript);
        e.languages.tsx = e.languages.extend("jsx", s), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
        var n = e.languages.tsx.tag;
        n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = true;
      }(t);
    }
    return p;
  }
  var g = x();
  let y;
  y = l(g);
  j = f({
    __proto__: null,
    default: y
  }, [
    g
  ]);
});
export {
  __tla,
  j as t
};
