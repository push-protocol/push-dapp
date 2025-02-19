import { eH as c, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as f } from "./ruby-DYsn9XfW.js";
let v;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function b(l, n) {
    for (var a = 0; a < n.length; a++) {
      const e = n[a];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in l)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(l, r, i.get ? i : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var u, g;
  function m() {
    if (g) return u;
    g = 1;
    var l = f();
    u = n, n.displayName = "haml", n.aliases = [];
    function n(a) {
      a.register(l), function(e) {
        e.languages.haml = {
          "multiline-comment": {
            pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,
            lookbehind: true,
            alias: "comment"
          },
          "multiline-code": [
            {
              pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,
              lookbehind: true,
              inside: e.languages.ruby
            },
            {
              pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,
              lookbehind: true,
              inside: e.languages.ruby
            }
          ],
          filter: {
            pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,
            lookbehind: true,
            inside: {
              "filter-name": {
                pattern: /^:[\w-]+/,
                alias: "symbol"
              }
            }
          },
          markup: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
            lookbehind: true,
            inside: e.languages.markup
          },
          doctype: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
            lookbehind: true
          },
          tag: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,
            lookbehind: true,
            inside: {
              attributes: [
                {
                  pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,
                  lookbehind: true,
                  inside: e.languages.ruby
                },
                {
                  pattern: /\([^)]+\)/,
                  inside: {
                    "attr-value": {
                      pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                      lookbehind: true
                    },
                    "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                    punctuation: /[=(),]/
                  }
                },
                {
                  pattern: /\[[^\]]+\]/,
                  inside: e.languages.ruby
                }
              ],
              punctuation: /[<>]/
            }
          },
          code: {
            pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
            lookbehind: true,
            inside: e.languages.ruby
          },
          interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
              },
              ruby: {
                pattern: /[\s\S]+/,
                inside: e.languages.ruby
              }
            }
          },
          punctuation: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
            lookbehind: true
          }
        };
        for (var r = "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+", i = [
          "css",
          {
            filter: "coffee",
            language: "coffeescript"
          },
          "erb",
          "javascript",
          "less",
          "markdown",
          "ruby",
          "scss",
          "textile"
        ], s = {}, o = 0, d = i.length; o < d; o++) {
          var t = i[o];
          t = typeof t == "string" ? {
            filter: t,
            language: t
          } : t, e.languages[t.language] && (s["filter-" + t.filter] = {
            pattern: RegExp(r.replace("{{filter_name}}", function() {
              return t.filter;
            })),
            lookbehind: true,
            inside: {
              "filter-name": {
                pattern: /^:[\w-]+/,
                alias: "symbol"
              },
              text: {
                pattern: /[\s\S]+/,
                alias: [
                  t.language,
                  "language-" + t.language
                ],
                inside: e.languages[t.language]
              }
            }
          });
        }
        e.languages.insertBefore("haml", "filter", s);
      }(a);
    }
    return u;
  }
  var p = m();
  let h;
  h = c(p);
  v = b({
    __proto__: null,
    default: h
  }, [
    p
  ]);
});
export {
  __tla,
  v as h
};
