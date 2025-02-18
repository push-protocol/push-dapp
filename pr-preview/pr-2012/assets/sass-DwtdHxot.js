import { eH as i, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(a, s) {
    for (var e = 0; e < s.length; e++) {
      const t = s[e];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in a)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(a, r, n.get ? n : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, u;
  function g() {
    if (u) return o;
    u = 1, o = a, a.displayName = "sass", a.aliases = [];
    function a(s) {
      (function(e) {
        e.languages.sass = e.languages.extend("css", {
          comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: true,
            greedy: true
          }
        }), e.languages.insertBefore("sass", "atrule", {
          "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            greedy: true,
            inside: {
              atrule: /(?:@[\w-]+|[+=])/
            }
          }
        }), delete e.languages.sass.atrule;
        var t = /\$[-\w]+|#\{\$[-\w]+\}/, r = [
          /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
          {
            pattern: /(\s)-(?=\s)/,
            lookbehind: true
          }
        ];
        e.languages.insertBefore("sass", "property", {
          "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: true,
            inside: {
              punctuation: /:/,
              variable: t,
              operator: r
            }
          },
          "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: true,
            inside: {
              property: [
                /[^:\s]+(?=\s*:)/,
                {
                  pattern: /(:)[^:\s]+/,
                  lookbehind: true
                }
              ],
              punctuation: /:/,
              variable: t,
              operator: r,
              important: e.languages.sass.important
            }
          }
        }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
          selector: {
            pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
            lookbehind: true,
            greedy: true
          }
        });
      })(s);
    }
    return o;
  }
  var l = g();
  let d;
  d = i(l);
  f = p({
    __proto__: null,
    default: d
  }, [
    l
  ]);
});
export {
  __tla,
  f as s
};
