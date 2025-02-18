import { eH as p, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, t) {
    for (var i = 0; i < t.length; i++) {
      const r = t[i];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const n in r) if (n !== "default" && !(n in e)) {
          const o = Object.getOwnPropertyDescriptor(r, n);
          o && Object.defineProperty(e, n, o.get ? o : {
            enumerable: true,
            get: () => r[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, l;
  function d() {
    if (l) return a;
    l = 1, a = e, e.displayName = "livescript", e.aliases = [];
    function e(t) {
      t.languages.livescript = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: true
          },
          {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true
          }
        ],
        "interpolated-string": {
          pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
          lookbehind: true,
          greedy: true,
          inside: {
            variable: {
              pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
              lookbehind: true
            },
            interpolation: {
              pattern: /(^|[^\\])#\{[^}]+\}/m,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^#\{|\}$/,
                  alias: "variable"
                }
              }
            },
            string: /[\s\S]+/
          }
        },
        string: [
          {
            pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: true
          },
          {
            pattern: /<\[[\s\S]*?\]>/,
            greedy: true
          },
          /\\[^\s,;\])}]+/
        ],
        regex: [
          {
            pattern: /\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,
            greedy: true,
            inside: {
              comment: {
                pattern: /(^|[^\\])#.*/,
                lookbehind: true
              }
            }
          },
          {
            pattern: /\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,
            greedy: true
          }
        ],
        keyword: {
          pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
          lookbehind: true
        },
        "keyword-operator": {
          pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
          lookbehind: true,
          alias: "operator"
        },
        boolean: {
          pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
          lookbehind: true
        },
        argument: {
          pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
          lookbehind: true,
          alias: "variable"
        },
        number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
        identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
        operator: [
          {
            pattern: /( )\.(?= )/,
            lookbehind: true
          },
          /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
        ],
        punctuation: /[(){}\[\]|.,:;`]/
      }, t.languages.livescript["interpolated-string"].inside.interpolation.inside.rest = t.languages.livescript;
    }
    return a;
  }
  var s = d();
  let c;
  c = p(s);
  b = u({
    __proto__: null,
    default: c
  }, [
    s
  ]);
});
export {
  __tla,
  b as l
};
