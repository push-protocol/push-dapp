import { eH as s, __tla as __tla_0 } from "./index-AGa8OPve.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(t, r) {
    for (var i = 0; i < r.length; i++) {
      const e = r[i];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const n in e) if (n !== "default" && !(n in t)) {
          const a = Object.getOwnPropertyDescriptor(e, n);
          a && Object.defineProperty(t, n, a.get ? a : {
            enumerable: true,
            get: () => e[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, f;
  function v() {
    if (f) return o;
    f = 1, o = t, t.displayName = "ini", t.aliases = [];
    function t(r) {
      r.languages.ini = {
        comment: {
          pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
          lookbehind: true
        },
        section: {
          pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
          lookbehind: true,
          inside: {
            "section-name": {
              pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
              lookbehind: true,
              alias: "selector"
            },
            punctuation: /\[|\]/
          }
        },
        key: {
          pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
          lookbehind: true,
          alias: "attr-name"
        },
        value: {
          pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
          lookbehind: true,
          alias: "attr-value",
          inside: {
            "inner-value": {
              pattern: /^("|').+(?=\1$)/,
              lookbehind: true
            }
          }
        },
        punctuation: /=/
      };
    }
    return o;
  }
  var u = v();
  let c;
  c = s(u);
  d = l({
    __proto__: null,
    default: c
  }, [
    u
  ]);
});
export {
  __tla,
  d as i
};
