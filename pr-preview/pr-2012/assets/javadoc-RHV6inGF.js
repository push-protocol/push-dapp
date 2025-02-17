import { eH as l, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as g } from "./java-BxMbkJZ_.js";
import { r as p } from "./javadoclike-myFApC35.js";
let y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function v(n, o) {
    for (var t = 0; t < o.length; t++) {
      const a = o[t];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const e in a) if (e !== "default" && !(e in n)) {
          const r = Object.getOwnPropertyDescriptor(a, e);
          r && Object.defineProperty(n, e, r.get ? r : {
            enumerable: true,
            get: () => a[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, i;
  function f() {
    if (i) return s;
    i = 1;
    var n = g(), o = p();
    s = t, t.displayName = "javadoc", t.aliases = [];
    function t(a) {
      a.register(n), a.register(o), function(e) {
        var r = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m, c = /#\s*\w+(?:\s*\([^()]*\))?/.source, d = /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g, function() {
          return c;
        });
        e.languages.javadoc = e.languages.extend("javadoclike", {}), e.languages.insertBefore("javadoc", "keyword", {
          reference: {
            pattern: RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source + "(?:" + d + ")"),
            lookbehind: true,
            inside: {
              function: {
                pattern: /(#\s*)\w+(?=\s*\()/,
                lookbehind: true
              },
              field: {
                pattern: /(#\s*)\w+/,
                lookbehind: true
              },
              namespace: {
                pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
                inside: {
                  punctuation: /\./
                }
              },
              "class-name": /\b[A-Z]\w*/,
              keyword: e.languages.java.keyword,
              punctuation: /[#()[\],.]/
            }
          },
          "class-name": {
            pattern: /(@param\s+)<[A-Z]\w*>/,
            lookbehind: true,
            inside: {
              punctuation: /[.<>]/
            }
          },
          "code-section": [
            {
              pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
              lookbehind: true,
              inside: {
                code: {
                  pattern: r,
                  lookbehind: true,
                  inside: e.languages.java,
                  alias: "language-java"
                }
              }
            },
            {
              pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
              lookbehind: true,
              inside: {
                line: {
                  pattern: r,
                  lookbehind: true,
                  inside: {
                    tag: e.languages.markup.tag,
                    entity: e.languages.markup.entity,
                    code: {
                      pattern: /.+/,
                      inside: e.languages.java,
                      alias: "language-java"
                    }
                  }
                }
              }
            }
          ],
          tag: e.languages.markup.tag,
          entity: e.languages.markup.entity
        }), e.languages.javadoclike.addSupport("java", e.languages.javadoc);
      }(a);
    }
    return s;
  }
  var u = f();
  let j;
  j = l(u);
  y = v({
    __proto__: null,
    default: j
  }, [
    u
  ]);
});
export {
  __tla,
  y as j
};
