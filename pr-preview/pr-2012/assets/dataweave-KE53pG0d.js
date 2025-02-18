import { eH as s, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(e, n) {
    for (var t = 0; t < n.length; t++) {
      const r = n[t];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const a in r) if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(r, a);
          o && Object.defineProperty(e, a, o.get ? o : {
            enumerable: true,
            get: () => r[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var u, i;
  function l() {
    if (i) return u;
    i = 1, u = e, e.displayName = "dataweave", e.aliases = [];
    function e(n) {
      (function(t) {
        t.languages.dataweave = {
          url: /\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,
          property: {
            pattern: /(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,
            greedy: true
          },
          string: {
            pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: true
          },
          "mime-type": /\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,
          date: {
            pattern: /\|[\w:+-]+\|/,
            greedy: true
          },
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: true,
              greedy: true
            },
            {
              pattern: /(^|[^\\:])\/\/.*/,
              lookbehind: true,
              greedy: true
            }
          ],
          regex: {
            pattern: /\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,
            greedy: true
          },
          keyword: /\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,
          function: /\b[A-Z_]\w*(?=\s*\()/i,
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\];(),.:@]/,
          operator: /<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,
          boolean: /\b(?:false|true)\b/
        };
      })(n);
    }
    return u;
  }
  var d = l();
  let b;
  b = s(d);
  c = p({
    __proto__: null,
    default: b
  }, [
    d
  ]);
});
export {
  __tla,
  c as d
};
