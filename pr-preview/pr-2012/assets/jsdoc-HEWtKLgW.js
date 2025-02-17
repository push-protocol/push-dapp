import { eH as d, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as l } from "./javadoclike-myFApC35.js";
import { r as g } from "./typescript-CVO-8GEc.js";
let k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(o, n) {
    for (var a = 0; a < n.length; a++) {
      const r = n[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const e in r) if (e !== "default" && !(e in o)) {
          const t = Object.getOwnPropertyDescriptor(r, e);
          t && Object.defineProperty(o, e, t.get ? t : {
            enumerable: true,
            get: () => r[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, p;
  function j() {
    if (p) return i;
    p = 1;
    var o = l(), n = g();
    i = a, a.displayName = "jsdoc", a.aliases = [];
    function a(r) {
      r.register(o), r.register(n), function(e) {
        var t = e.languages.javascript, s = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, u = "(@(?:arg|argument|param|property)\\s+(?:" + s + "\\s+)?)";
        e.languages.jsdoc = e.languages.extend("javadoclike", {
          parameter: {
            pattern: RegExp(u + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          }
        }), e.languages.insertBefore("jsdoc", "keyword", {
          "optional-parameter": {
            pattern: RegExp(u + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
            lookbehind: true,
            inside: {
              parameter: {
                pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                lookbehind: true,
                inside: {
                  punctuation: /\./
                }
              },
              code: {
                pattern: /(=)[\s\S]*(?=\]$)/,
                lookbehind: true,
                inside: t,
                alias: "language-javascript"
              },
              punctuation: /[=[\]]/
            }
          },
          "class-name": [
            {
              pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
                return s;
              })),
              lookbehind: true,
              inside: {
                punctuation: /\./
              }
            },
            {
              pattern: RegExp("(@[a-z]+\\s+)" + s),
              lookbehind: true,
              inside: {
                string: t.string,
                number: t.number,
                boolean: t.boolean,
                keyword: e.languages.typescript.keyword,
                operator: /=>|\.\.\.|[&|?:*]/,
                punctuation: /[.,;=<>{}()[\]]/
              }
            }
          ],
          example: {
            pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
            lookbehind: true,
            inside: {
              code: {
                pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                lookbehind: true,
                inside: t,
                alias: "language-javascript"
              }
            }
          }
        }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
      }(r);
    }
    return i;
  }
  var c = j();
  let b;
  b = d(c);
  k = f({
    __proto__: null,
    default: b
  }, [
    c
  ]);
});
export {
  __tla,
  k as j
};
