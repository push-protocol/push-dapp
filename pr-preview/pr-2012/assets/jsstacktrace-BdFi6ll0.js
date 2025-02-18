import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(e, r) {
    for (var n = 0; n < r.length; n++) {
      const t = r[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const a in t) if (a !== "default" && !(a in e)) {
          const s = Object.getOwnPropertyDescriptor(t, a);
          s && Object.defineProperty(e, a, s.get ? s : {
            enumerable: true,
            get: () => t[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, i;
  function d() {
    if (i) return o;
    i = 1, o = e, e.displayName = "jsstacktrace", e.aliases = [];
    function e(r) {
      r.languages.jsstacktrace = {
        "error-message": {
          pattern: /^\S.*/m,
          alias: "string"
        },
        "stack-frame": {
          pattern: /(^[ \t]+)at[ \t].*/m,
          lookbehind: true,
          inside: {
            "not-my-code": {
              pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
              alias: "comment"
            },
            filename: {
              pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
              lookbehind: true,
              alias: "url"
            },
            function: {
              pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
              lookbehind: true,
              inside: {
                punctuation: /\./
              }
            },
            punctuation: /[()]/,
            keyword: /\b(?:at|new)\b/,
            alias: {
              pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
              alias: "variable"
            },
            "line-number": {
              pattern: /:\d+(?::\d+)?\b/,
              alias: "number",
              inside: {
                punctuation: /:/
              }
            }
          }
        }
      };
    }
    return o;
  }
  var c = d();
  let p;
  p = u(c);
  f = l({
    __proto__: null,
    default: p
  }, [
    c
  ]);
});
export {
  __tla,
  f as j
};
