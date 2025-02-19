import { eH as f, __tla as __tla_0 } from "./index-AGa8OPve.js";
let x;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(r, n) {
    for (var o = 0; o < n.length; o++) {
      const e = n[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in r)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(r, t, a.get ? a : {
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
  var c, i;
  function p() {
    if (i) return c;
    i = 1, c = r, r.displayName = "xmlDoc", r.aliases = [];
    function r(n) {
      (function(o) {
        function e(s, u) {
          o.languages[s] && o.languages.insertBefore(s, "comment", {
            "doc-comment": u
          });
        }
        var t = o.languages.markup.tag, a = {
          pattern: /\/\/\/.*/,
          greedy: true,
          alias: "comment",
          inside: {
            tag: t
          }
        }, l = {
          pattern: /'''.*/,
          greedy: true,
          alias: "comment",
          inside: {
            tag: t
          }
        };
        e("csharp", a), e("fsharp", a), e("vbnet", l);
      })(n);
    }
    return c;
  }
  var m = p();
  let d;
  d = f(m);
  x = g({
    __proto__: null,
    default: d
  }, [
    m
  ]);
});
export {
  __tla,
  x
};
