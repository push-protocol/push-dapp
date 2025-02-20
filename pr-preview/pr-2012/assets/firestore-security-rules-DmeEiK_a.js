import { eH as l, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, r) {
    for (var i = 0; i < r.length; i++) {
      const t = r[i];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const u in t) if (u !== "default" && !(u in e)) {
          const s = Object.getOwnPropertyDescriptor(t, u);
          s && Object.defineProperty(e, u, s.get ? s : {
            enumerable: true,
            get: () => t[u]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, n;
  function f() {
    if (n) return o;
    n = 1, o = e, e.displayName = "firestoreSecurityRules", e.aliases = [];
    function e(r) {
      r.languages["firestore-security-rules"] = r.languages.extend("clike", {
        comment: /\/\/.*/,
        keyword: /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
        operator: /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/
      }), delete r.languages["firestore-security-rules"]["class-name"], r.languages.insertBefore("firestore-security-rules", "keyword", {
        path: {
          pattern: /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
          lookbehind: true,
          greedy: true,
          inside: {
            variable: {
              pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
              inside: {
                operator: /=/,
                keyword: /\*\*/,
                punctuation: /[.$(){}]/
              }
            },
            punctuation: /\//
          }
        },
        method: {
          pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
          lookbehind: true,
          alias: "builtin",
          inside: {
            punctuation: /,/
          }
        }
      });
    }
    return o;
  }
  var a = f();
  let y;
  y = l(a);
  p = c({
    __proto__: null,
    default: y
  }, [
    a
  ]);
});
export {
  __tla,
  p as f
};
