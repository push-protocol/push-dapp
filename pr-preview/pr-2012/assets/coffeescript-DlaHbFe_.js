import { eH as f, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(n, a) {
    for (var e = 0; e < a.length; e++) {
      const r = a[e];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in n)) {
          const i = Object.getOwnPropertyDescriptor(r, t);
          i && Object.defineProperty(n, t, i.get ? i : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, o;
  function p() {
    if (o) return s;
    o = 1, s = n, n.displayName = "coffeescript", n.aliases = [
      "coffee"
    ];
    function n(a) {
      (function(e) {
        var r = /#(?!\{).+/, t = {
          pattern: /#\{[^}]+\}/,
          alias: "variable"
        };
        e.languages.coffeescript = e.languages.extend("javascript", {
          comment: r,
          string: [
            {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: true
            },
            {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: true,
              inside: {
                interpolation: t
              }
            }
          ],
          keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
          "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
          }
        }), e.languages.insertBefore("coffeescript", "comment", {
          "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
          },
          "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
              comment: r,
              interpolation: t
            }
          }
        }), e.languages.insertBefore("coffeescript", "string", {
          "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
              delimiter: {
                pattern: /^`|`$/,
                alias: "punctuation"
              },
              script: {
                pattern: /[\s\S]+/,
                alias: "language-javascript",
                inside: e.languages.javascript
              }
            }
          },
          "multiline-string": [
            {
              pattern: /'''[\s\S]*?'''/,
              greedy: true,
              alias: "string"
            },
            {
              pattern: /"""[\s\S]*?"""/,
              greedy: true,
              alias: "string",
              inside: {
                interpolation: t
              }
            }
          ]
        }), e.languages.insertBefore("coffeescript", "keyword", {
          property: /(?!\d)\w+(?=\s*:(?!:))/
        }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
      })(a);
    }
    return s;
  }
  var c = p();
  let u;
  u = f(c);
  d = l({
    __proto__: null,
    default: u
  }, [
    c
  ]);
});
export {
  __tla,
  d as c
};
