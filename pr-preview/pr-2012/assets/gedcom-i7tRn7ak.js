import { eH as d, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, o) {
    for (var a = 0; a < o.length; a++) {
      const t = o[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(e, r, n.get ? n : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, l;
  function u() {
    if (l) return i;
    l = 1, i = e, e.displayName = "gedcom", e.aliases = [];
    function e(o) {
      o.languages.gedcom = {
        "line-value": {
          pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
          lookbehind: true,
          inside: {
            pointer: {
              pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
              alias: "variable"
            }
          }
        },
        tag: {
          pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
          lookbehind: true,
          alias: "string"
        },
        level: {
          pattern: /(^[\t ]*)\d+/m,
          lookbehind: true,
          alias: "number"
        },
        pointer: {
          pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
          alias: "variable"
        }
      };
    }
    return i;
  }
  var s = u();
  let f;
  f = d(s);
  m = c({
    __proto__: null,
    default: f
  }, [
    s
  ]);
});
export {
  __tla,
  m as g
};
