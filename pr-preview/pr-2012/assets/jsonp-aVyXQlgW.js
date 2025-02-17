import { eH as i, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as f } from "./json-BESjz4hO.js";
let F;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, r) {
    for (var e = 0; e < r.length; e++) {
      const n = r[e];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const o in n) if (o !== "default" && !(o in t)) {
          const s = Object.getOwnPropertyDescriptor(n, o);
          s && Object.defineProperty(t, o, s.get ? s : {
            enumerable: true,
            get: () => n[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, u;
  function g() {
    if (u) return a;
    u = 1;
    var t = f();
    a = r, r.displayName = "jsonp", r.aliases = [];
    function r(e) {
      e.register(t), e.languages.jsonp = e.languages.extend("json", {
        punctuation: /[{}[\]();,.]/
      }), e.languages.insertBefore("jsonp", "punctuation", {
        function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
      });
    }
    return a;
  }
  var p = g();
  let j;
  j = i(p);
  F = c({
    __proto__: null,
    default: j
  }, [
    p
  ]);
});
export {
  __tla,
  F as j
};
