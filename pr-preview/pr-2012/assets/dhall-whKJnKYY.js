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
  function d(e, t) {
    for (var r = 0; r < t.length; r++) {
      const a = t[r];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const n in a) if (n !== "default" && !(n in e)) {
          const l = Object.getOwnPropertyDescriptor(a, n);
          l && Object.defineProperty(e, n, l.get ? l : {
            enumerable: true,
            get: () => a[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, o;
  function b() {
    if (o) return i;
    o = 1, i = e, e.displayName = "dhall", e.aliases = [];
    function e(t) {
      t.languages.dhall = {
        comment: /--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,
        string: {
          pattern: /"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /\$\{[^{}]*\}/,
              inside: {
                expression: {
                  pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                  lookbehind: true,
                  alias: "language-dhall",
                  inside: null
                },
                punctuation: /\$\{|\}/
              }
            }
          }
        },
        label: {
          pattern: /`[^`]*`/,
          greedy: true
        },
        url: {
          pattern: /\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,
          greedy: true
        },
        env: {
          pattern: /\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,
          greedy: true,
          inside: {
            function: /^env/,
            operator: /^:/,
            variable: /[\s\S]+/
          }
        },
        hash: {
          pattern: /\bsha256:[\da-fA-F]{64}\b/,
          inside: {
            function: /sha256/,
            operator: /:/,
            number: /[\da-fA-F]{64}/
          }
        },
        keyword: /\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,
        builtin: /\b(?:None|Some)\b/,
        boolean: /\b(?:False|True)\b/,
        number: /\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,
        operator: /\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,
        punctuation: /\.\.|[{}\[\](),./]/,
        "class-name": /\b[A-Z]\w*\b/
      }, t.languages.dhall.string.inside.interpolation.inside.expression.inside = t.languages.dhall;
    }
    return i;
  }
  var s = b();
  let p;
  p = u(s);
  g = d({
    __proto__: null,
    default: p
  }, [
    s
  ]);
});
export {
  __tla,
  g as d
};
