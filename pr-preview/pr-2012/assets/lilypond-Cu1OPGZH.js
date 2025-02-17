import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { r as c } from "./scheme-Cscf027c.js";
let h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(o, n) {
    for (var t = 0; t < n.length; t++) {
      const r = n[t];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const e in r) if (e !== "default" && !(e in o)) {
          const i = Object.getOwnPropertyDescriptor(r, e);
          i && Object.defineProperty(o, e, i.get ? i : {
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
  var s, d;
  function y() {
    if (d) return s;
    d = 1;
    var o = c();
    s = n, n.displayName = "lilypond", n.aliases = [];
    function n(t) {
      t.register(o), function(r) {
        for (var e = /\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source, i = 5, l = 0; l < i; l++) e = e.replace(/<expr>/g, function() {
          return e;
        });
        e = e.replace(/<expr>/g, /[^\s\S]/.source);
        var a = r.languages.lilypond = {
          comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/,
          "embedded-scheme": {
            pattern: RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g, function() {
              return e;
            }), "m"),
            lookbehind: true,
            greedy: true,
            inside: {
              scheme: {
                pattern: /^(#)[\s\S]+$/,
                lookbehind: true,
                alias: "language-scheme",
                inside: {
                  "embedded-lilypond": {
                    pattern: /#\{[\s\S]*?#\}/,
                    greedy: true,
                    inside: {
                      punctuation: /^#\{|#\}$/,
                      lilypond: {
                        pattern: /[\s\S]+/,
                        alias: "language-lilypond",
                        inside: null
                      }
                    }
                  },
                  rest: r.languages.scheme
                }
              },
              punctuation: /#/
            }
          },
          string: {
            pattern: /"(?:[^"\\]|\\.)*"/,
            greedy: true
          },
          "class-name": {
            pattern: /(\\new\s+)[\w-]+/,
            lookbehind: true
          },
          keyword: {
            pattern: /\\[a-z][-\w]*/i,
            inside: {
              punctuation: /^\\/
            }
          },
          operator: /[=|]|<<|>>/,
          punctuation: {
            pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
            lookbehind: true
          },
          number: /\b\d+(?:\/\d+)?\b/
        };
        a["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside = a, r.languages.ly = a;
      }(t);
    }
    return s;
  }
  var p = y();
  let m;
  m = u(p);
  h = g({
    __proto__: null,
    default: m
  }, [
    p
  ]);
});
export {
  __tla,
  h as l
};
