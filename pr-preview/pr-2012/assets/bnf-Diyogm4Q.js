import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(e, n) {
    for (var a = 0; a < n.length; a++) {
      const r = n[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(e, t, o.get ? o : {
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
  var f, i;
  function p() {
    if (i) return f;
    i = 1, f = e, e.displayName = "bnf", e.aliases = [
      "rbnf"
    ];
    function e(n) {
      n.languages.bnf = {
        string: {
          pattern: /"[^\r\n"]*"|'[^\r\n']*'/
        },
        definition: {
          pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
          alias: [
            "rule",
            "keyword"
          ],
          inside: {
            punctuation: /^<|>$/
          }
        },
        rule: {
          pattern: /<[^<>\r\n\t]+>/,
          inside: {
            punctuation: /^<|>$/
          }
        },
        operator: /::=|[|()[\]{}*+?]|\.{3}/
      }, n.languages.rbnf = n.languages.bnf;
    }
    return f;
  }
  var u = p();
  let b;
  b = s(u);
  g = l({
    __proto__: null,
    default: b
  }, [
    u
  ]);
});
export {
  __tla,
  g as b
};
