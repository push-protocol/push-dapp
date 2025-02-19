import { eH as l, __tla as __tla_0 } from "./index-AGa8OPve.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(e, t) {
    for (var a = 0; a < t.length; a++) {
      const r = t[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const n in r) if (n !== "default" && !(n in e)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i && Object.defineProperty(e, n, i.get ? i : {
            enumerable: true,
            get: () => r[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, s;
  function d() {
    if (s) return o;
    s = 1, o = e, e.displayName = "wren", e.aliases = [];
    function e(t) {
      t.languages.wren = {
        comment: [
          {
            pattern: /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "triple-quoted-string": {
          pattern: /"""[\s\S]*?"""/,
          greedy: true,
          alias: "string"
        },
        "string-literal": null,
        hashbang: {
          pattern: /^#!\/.+/,
          greedy: true,
          alias: "comment"
        },
        attribute: {
          pattern: /#!?[ \t\u3000]*\w+/,
          alias: "keyword"
        },
        "class-name": [
          {
            pattern: /(\bclass\s+)\w+/,
            lookbehind: true
          },
          /\b[A-Z][a-z\d_]*\b/
        ],
        constant: /\b[A-Z][A-Z\d_]*\b/,
        null: {
          pattern: /\bnull\b/,
          alias: "keyword"
        },
        keyword: /\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,
        boolean: /\b(?:false|true)\b/,
        number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
        function: /\b[a-z_]\w*(?=\s*[({])/i,
        operator: /<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,
        punctuation: /[\[\](){}.,;]/
      }, t.languages.wren["string-literal"] = {
        pattern: /(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,
            lookbehind: true,
            inside: {
              expression: {
                pattern: /^(%\()[\s\S]+(?=\)$)/,
                lookbehind: true,
                inside: t.languages.wren
              },
              "interpolation-punctuation": {
                pattern: /^%\(|\)$/,
                alias: "punctuation"
              }
            }
          },
          string: /[\s\S]+/
        }
      };
    }
    return o;
  }
  var u = d();
  let b;
  b = l(u);
  g = p({
    __proto__: null,
    default: b
  }, [
    u
  ]);
});
export {
  __tla,
  g as w
};
