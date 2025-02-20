import { eH as k, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let w;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function x(s, i) {
    for (var r = 0; r < i.length; r++) {
      const a = i[r];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const n in a) if (n !== "default" && !(n in s)) {
          const e = Object.getOwnPropertyDescriptor(a, n);
          e && Object.defineProperty(s, n, e.get ? e : {
            enumerable: true,
            get: () => a[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var g, m;
  function E() {
    if (m) return g;
    m = 1, g = s, s.displayName = "lisp", s.aliases = [];
    function s(i) {
      (function(r) {
        function a(c) {
          return RegExp(/(\()/.source + "(?:" + c + ")" + /(?=[\s\)])/.source);
        }
        function n(c) {
          return RegExp(/([\s([])/.source + "(?:" + c + ")" + /(?=[\s)])/.source);
        }
        var e = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source, y = "&" + e, o = "(\\()", v = "(?=\\))", b = "(?=\\s)", l = /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source, t = {
          heading: {
            pattern: /;;;.*/,
            alias: [
              "comment",
              "title"
            ]
          },
          comment: /;.*/,
          string: {
            pattern: /"(?:[^"\\]|\\.)*"/,
            greedy: true,
            inside: {
              argument: /[-A-Z]+(?=[.,\s])/,
              symbol: RegExp("`" + e + "'")
            }
          },
          "quoted-symbol": {
            pattern: RegExp("#?'" + e),
            alias: [
              "variable",
              "symbol"
            ]
          },
          "lisp-property": {
            pattern: RegExp(":" + e),
            alias: "property"
          },
          splice: {
            pattern: RegExp(",@?" + e),
            alias: [
              "symbol",
              "variable"
            ]
          },
          keyword: [
            {
              pattern: RegExp(o + "(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)" + b),
              lookbehind: true
            },
            {
              pattern: RegExp(o + "(?:append|by|collect|concat|do|finally|for|in|return)" + b),
              lookbehind: true
            }
          ],
          declare: {
            pattern: a(/declare/.source),
            lookbehind: true,
            alias: "keyword"
          },
          interactive: {
            pattern: a(/interactive/.source),
            lookbehind: true,
            alias: "keyword"
          },
          boolean: {
            pattern: n(/nil|t/.source),
            lookbehind: true
          },
          number: {
            pattern: n(/[-+]?\d+(?:\.\d*)?/.source),
            lookbehind: true
          },
          defvar: {
            pattern: RegExp(o + "def(?:const|custom|group|var)\\s+" + e),
            lookbehind: true,
            inside: {
              keyword: /^def[a-z]+/,
              variable: RegExp(e)
            }
          },
          defun: {
            pattern: RegExp(o + /(?:cl-)?(?:defmacro|defun\*?)\s+/.source + e + /\s+\(/.source + l + /\)/.source),
            lookbehind: true,
            greedy: true,
            inside: {
              keyword: /^(?:cl-)?def\S+/,
              arguments: null,
              function: {
                pattern: RegExp("(^\\s)" + e),
                lookbehind: true
              },
              punctuation: /[()]/
            }
          },
          lambda: {
            pattern: RegExp(o + "lambda\\s+\\(\\s*(?:&?" + e + "(?:\\s+&?" + e + ")*\\s*)?\\)"),
            lookbehind: true,
            greedy: true,
            inside: {
              keyword: /^lambda/,
              arguments: null,
              punctuation: /[()]/
            }
          },
          car: {
            pattern: RegExp(o + e),
            lookbehind: true
          },
          punctuation: [
            /(?:['`,]?\(|[)\[\]])/,
            {
              pattern: /(\s)\.(?=\s)/,
              lookbehind: true
            }
          ]
        }, u = {
          "lisp-marker": RegExp(y),
          varform: {
            pattern: RegExp(/\(/.source + e + /\s+(?=\S)/.source + l + /\)/.source),
            inside: t
          },
          argument: {
            pattern: RegExp(/(^|[\s(])/.source + e),
            lookbehind: true,
            alias: "variable"
          },
          rest: t
        }, p = "\\S+(?:\\s+\\S+)*", d = {
          pattern: RegExp(o + l + v),
          lookbehind: true,
          inside: {
            "rest-vars": {
              pattern: RegExp("&(?:body|rest)\\s+" + p),
              inside: u
            },
            "other-marker-vars": {
              pattern: RegExp("&(?:aux|optional)\\s+" + p),
              inside: u
            },
            keys: {
              pattern: RegExp("&key\\s+" + p + "(?:\\s+&allow-other-keys)?"),
              inside: u
            },
            argument: {
              pattern: RegExp(e),
              alias: "variable"
            },
            punctuation: /[()]/
          }
        };
        t.lambda.inside.arguments = d, t.defun.inside.arguments = r.util.clone(d), t.defun.inside.arguments.inside.sublist = d, r.languages.lisp = t, r.languages.elisp = t, r.languages.emacs = t, r.languages["emacs-lisp"] = t;
      })(i);
    }
    return g;
  }
  var f = E();
  let R;
  R = k(f);
  w = x({
    __proto__: null,
    default: R
  }, [
    f
  ]);
});
export {
  __tla,
  w as l
};
