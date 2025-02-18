import { eH as f, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as g } from "./markup-templating-BxAVv-bL.js";
let $;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(o, r) {
    for (var n = 0; n < r.length; n++) {
      const t = r[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const e in t) if (e !== "default" && !(e in o)) {
          const a = Object.getOwnPropertyDescriptor(t, e);
          a && Object.defineProperty(o, e, a.get ? a : {
            enumerable: true,
            get: () => t[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var u, p;
  function b() {
    if (p) return u;
    p = 1;
    var o = g();
    u = r, r.displayName = "ftl", r.aliases = [];
    function r(n) {
      n.register(o), function(t) {
        for (var e = /[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source, a = 0; a < 2; a++) e = e.replace(/<expr>/g, function() {
          return e;
        });
        e = e.replace(/<expr>/g, /[^\s\S]/.source);
        var i = {
          comment: /<#--[\s\S]*?-->/,
          string: [
            {
              pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
              greedy: true
            },
            {
              pattern: RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g, function() {
                return e;
              })),
              greedy: true,
              inside: {
                interpolation: {
                  pattern: RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g, function() {
                    return e;
                  })),
                  lookbehind: true,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation"
                    },
                    rest: null
                  }
                }
              }
            }
          ],
          keyword: /\b(?:as)\b/,
          boolean: /\b(?:false|true)\b/,
          "builtin-function": {
            pattern: /((?:^|[^?])\?\s*)\w+/,
            lookbehind: true,
            alias: "function"
          },
          function: /\b\w+(?=\s*\()/,
          number: /\b\d+(?:\.\d+)?\b/,
          operator: /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
          punctuation: /[,;.:()[\]{}]/
        };
        i.string[1].inside.interpolation.inside.rest = i, t.languages.ftl = {
          "ftl-comment": {
            pattern: /^<#--[\s\S]*/,
            alias: "comment"
          },
          "ftl-directive": {
            pattern: /^<[\s\S]+>$/,
            inside: {
              directive: {
                pattern: /(^<\/?)[#@][a-z]\w*/i,
                lookbehind: true,
                alias: "keyword"
              },
              punctuation: /^<\/?|\/?>$/,
              content: {
                pattern: /\s*\S[\s\S]*/,
                alias: "ftl",
                inside: i
              }
            }
          },
          "ftl-interpolation": {
            pattern: /^\$\{[\s\S]*\}$/,
            inside: {
              punctuation: /^\$\{|\}$/,
              content: {
                pattern: /\s*\S[\s\S]*/,
                alias: "ftl",
                inside: i
              }
            }
          }
        }, t.hooks.add("before-tokenize", function(l) {
          var c = RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g, function() {
            return e;
          }), "gi");
          t.languages["markup-templating"].buildPlaceholders(l, "ftl", c);
        }), t.hooks.add("after-tokenize", function(l) {
          t.languages["markup-templating"].tokenizePlaceholders(l, "ftl");
        });
      }(n);
    }
    return u;
  }
  var s = b();
  let m;
  m = f(s);
  $ = d({
    __proto__: null,
    default: m
  }, [
    s
  ]);
});
export {
  __tla,
  $ as f
};
