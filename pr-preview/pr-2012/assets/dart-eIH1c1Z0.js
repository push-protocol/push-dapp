import { eH as c, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(a, s) {
    for (var e = 0; e < s.length; e++) {
      const t = s[e];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in a)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(a, r, n.get ? n : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, o;
  function u() {
    if (o) return i;
    o = 1, i = a, a.displayName = "dart", a.aliases = [];
    function a(s) {
      (function(e) {
        var t = [
          /\b(?:async|sync|yield)\*/,
          /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/
        ], r = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, n = {
          pattern: RegExp(r + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
          lookbehind: true,
          inside: {
            namespace: {
              pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
              inside: {
                punctuation: /\./
              }
            }
          }
        };
        e.languages.dart = e.languages.extend("clike", {
          "class-name": [
            n,
            {
              pattern: RegExp(r + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
              lookbehind: true,
              inside: n.inside
            }
          ],
          keyword: t,
          operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
        }), e.languages.insertBefore("dart", "string", {
          "string-literal": {
            pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
            greedy: true,
            inside: {
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
                lookbehind: true,
                inside: {
                  punctuation: /^\$\{?|\}$/,
                  expression: {
                    pattern: /[\s\S]+/,
                    inside: e.languages.dart
                  }
                }
              },
              string: /[\s\S]+/
            }
          },
          string: void 0
        }), e.languages.insertBefore("dart", "class-name", {
          metadata: {
            pattern: /@\w+/,
            alias: "function"
          }
        }), e.languages.insertBefore("dart", "class-name", {
          generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
              "class-name": n,
              keyword: t,
              punctuation: /[<>(),.:]/,
              operator: /[?&|]/
            }
          }
        });
      })(s);
    }
    return i;
  }
  var d = u();
  let p;
  p = c(d);
  g = l({
    __proto__: null,
    default: p
  }, [
    d
  ]);
});
export {
  __tla,
  g as d
};
