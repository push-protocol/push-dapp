import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(e, o) {
    for (var n = 0; n < o.length; n++) {
      const r = o[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const u = Object.getOwnPropertyDescriptor(r, t);
          u && Object.defineProperty(e, t, u.get ? u : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, l;
  function i() {
    if (l) return a;
    l = 1, a = e, e.displayName = "goModule", e.aliases = [];
    function e(o) {
      o.languages["go-mod"] = o.languages["go-module"] = {
        comment: {
          pattern: /\/\/.*/,
          greedy: true
        },
        version: {
          pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
          lookbehind: true,
          alias: "number"
        },
        "go-version": {
          pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
          lookbehind: true,
          alias: "number"
        },
        keyword: {
          pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
          lookbehind: true
        },
        operator: /=>/,
        punctuation: /[()[\],]/
      };
    }
    return a;
  }
  var d = i();
  let c;
  c = s(d);
  f = g({
    __proto__: null,
    default: c
  }, [
    d
  ]);
});
export {
  __tla,
  f as g
};
