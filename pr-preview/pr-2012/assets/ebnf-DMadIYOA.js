import { eH as u, __tla as __tla_0 } from "./index-D1Swtpz3.js";
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
  var i, f;
  function b() {
    if (f) return i;
    f = 1, i = e, e.displayName = "ebnf", e.aliases = [];
    function e(n) {
      n.languages.ebnf = {
        comment: /\(\*[\s\S]*?\*\)/,
        string: {
          pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
          greedy: true
        },
        special: {
          pattern: /\?[^?\r\n]*\?/,
          greedy: true,
          alias: "class-name"
        },
        definition: {
          pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
          lookbehind: true,
          alias: [
            "rule",
            "keyword"
          ]
        },
        rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
        punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
        operator: /[-=|*/!]/
      };
    }
    return i;
  }
  var s = b();
  let c;
  c = u(s);
  g = l({
    __proto__: null,
    default: c
  }, [
    s
  ]);
});
export {
  __tla,
  g as e
};
