import { eH as c, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(e, n) {
    for (var r = 0; r < n.length; r++) {
      const t = n[r];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const a in t) if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(t, a);
          i && Object.defineProperty(e, a, i.get ? i : {
            enumerable: true,
            get: () => t[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, s;
  function p() {
    if (s) return o;
    s = 1, o = e, e.displayName = "javastacktrace", e.aliases = [];
    function e(n) {
      n.languages.javastacktrace = {
        summary: {
          pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
          lookbehind: true,
          inside: {
            keyword: {
              pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
              lookbehind: true
            },
            string: {
              pattern: /^(\s*)"[^"]*"/,
              lookbehind: true
            },
            exceptions: {
              pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
              lookbehind: true,
              inside: {
                "class-name": /[\w$]+$/,
                namespace: /\b[a-z]\w*\b/,
                punctuation: /\./
              }
            },
            message: {
              pattern: /(:\s*)\S.*/,
              lookbehind: true,
              alias: "string"
            },
            punctuation: /:/
          }
        },
        "stack-frame": {
          pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
          lookbehind: true,
          inside: {
            keyword: {
              pattern: /^(\s*)at(?= )/,
              lookbehind: true
            },
            source: [
              {
                pattern: /(\()\w+\.\w+:\d+(?=\))/,
                lookbehind: true,
                inside: {
                  file: /^\w+\.\w+/,
                  punctuation: /:/,
                  "line-number": {
                    pattern: /\b\d+\b/,
                    alias: "number"
                  }
                }
              },
              {
                pattern: /(\()[^()]*(?=\))/,
                lookbehind: true,
                inside: {
                  keyword: /^(?:Native Method|Unknown Source)$/
                }
              }
            ],
            "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
            function: /(?:<init>|[\w$]+)(?=\()/,
            "class-loader": {
              pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
              lookbehind: true,
              alias: "namespace",
              inside: {
                punctuation: /\./
              }
            },
            module: {
              pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
              lookbehind: true,
              inside: {
                version: {
                  pattern: /(@)[\s\S]+/,
                  lookbehind: true,
                  alias: "number"
                },
                punctuation: /[@.]/
              }
            },
            namespace: {
              pattern: /(?:\b[a-z]\w*\.)+/,
              inside: {
                punctuation: /\./
              }
            },
            punctuation: /[()/.]/
          }
        },
        more: {
          pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
          lookbehind: true,
          inside: {
            punctuation: /\.{3}/,
            number: /\d+/,
            keyword: /\b[a-z]+(?: [a-z]+)*\b/
          }
        }
      };
    }
    return o;
  }
  var u = p();
  let l;
  l = c(u);
  k = d({
    __proto__: null,
    default: l
  }, [
    u
  ]);
});
export {
  __tla,
  k as j
};
