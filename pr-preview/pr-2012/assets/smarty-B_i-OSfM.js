import { eH as f, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { r as m } from "./markup-templating-BxAVv-bL.js";
let w;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(n, r) {
    for (var a = 0; a < r.length; a++) {
      const e = r[a];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in n)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(n, t, s.get ? s : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var p, l;
  function b() {
    if (l) return p;
    l = 1;
    var n = m();
    p = r, r.displayName = "smarty", r.aliases = [];
    function r(a) {
      a.register(n), function(e) {
        e.languages.smarty = {
          comment: {
            pattern: /^\{\*[\s\S]*?\*\}/,
            greedy: true
          },
          "embedded-php": {
            pattern: /^\{php\}[\s\S]*?\{\/php\}/,
            greedy: true,
            inside: {
              smarty: {
                pattern: /^\{php\}|\{\/php\}$/,
                inside: null
              },
              php: {
                pattern: /[\s\S]+/,
                alias: "language-php",
                inside: e.languages.php
              }
            }
          },
          string: [
            {
              pattern: /"(?:\\.|[^"\\\r\n])*"/,
              greedy: true,
              inside: {
                interpolation: {
                  pattern: /\{[^{}]*\}|`[^`]*`/,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^[{`]|[`}]$/,
                      alias: "punctuation"
                    },
                    expression: {
                      pattern: /[\s\S]+/,
                      inside: null
                    }
                  }
                },
                variable: /\$\w+/
              }
            },
            {
              pattern: /'(?:\\.|[^'\\\r\n])*'/,
              greedy: true
            }
          ],
          keyword: {
            pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i,
            lookbehind: true,
            greedy: true
          },
          delimiter: {
            pattern: /^\{\/?|\}$/,
            greedy: true,
            alias: "punctuation"
          },
          number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
          variable: [
            /\$(?!\d)\w+/,
            /#(?!\d)\w+#/,
            {
              pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,
              lookbehind: true
            },
            {
              pattern: /(\[)(?!\d)\w+(?=\])/,
              lookbehind: true
            }
          ],
          function: {
            pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,
            lookbehind: true
          },
          "attr-name": /\b[a-z_]\w*(?=\s*=)/i,
          boolean: /\b(?:false|no|off|on|true|yes)\b/,
          punctuation: /[\[\](){}.,:`]|->/,
          operator: [
            /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
            /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
            /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/
          ]
        }, e.languages.smarty["embedded-php"].inside.smarty.inside = e.languages.smarty, e.languages.smarty.string[0].inside.interpolation.inside.expression.inside = e.languages.smarty;
        var t = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/, s = RegExp(/\{\*[\s\S]*?\*\}/.source + "|" + /\{php\}[\s\S]*?\{\/php\}/.source + "|" + /\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(/<str>/g, function() {
          return t.source;
        }), "g");
        e.hooks.add("before-tokenize", function(i) {
          var g = "{literal}", y = "{/literal}", o = false;
          e.languages["markup-templating"].buildPlaceholders(i, "smarty", s, function(u) {
            return u === y && (o = false), o ? false : (u === g && (o = true), true);
          });
        }), e.hooks.add("after-tokenize", function(i) {
          e.languages["markup-templating"].tokenizePlaceholders(i, "smarty");
        });
      }(a);
    }
    return p;
  }
  var d = b();
  let h;
  h = f(d);
  w = c({
    __proto__: null,
    default: h
  }, [
    d
  ]);
});
export {
  __tla,
  w as s
};
