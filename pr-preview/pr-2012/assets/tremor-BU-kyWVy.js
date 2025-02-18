import { eH as c, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(r, o) {
    for (var e = 0; e < o.length; e++) {
      const t = o[e];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const n in t) if (n !== "default" && !(n in r)) {
          const a = Object.getOwnPropertyDescriptor(t, n);
          a && Object.defineProperty(r, n, a.get ? a : {
            enumerable: true,
            get: () => t[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, s;
  function p() {
    if (s) return i;
    s = 1, i = r, r.displayName = "tremor", r.aliases = [];
    function r(o) {
      (function(e) {
        e.languages.tremor = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: true
          },
          "interpolated-string": null,
          extractor: {
            pattern: /\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,
            greedy: true,
            inside: {
              regex: {
                pattern: /(^re)\|[\s\S]+/,
                lookbehind: true
              },
              function: /^\w+/,
              value: /\|[\s\S]+/
            }
          },
          identifier: {
            pattern: /`[^`]*`/,
            greedy: true
          },
          function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,
          keyword: /\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,
          boolean: /\b(?:false|null|true)\b/i,
          number: /\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,
          "pattern-punctuation": {
            pattern: /%(?=[({[])/,
            alias: "punctuation"
          },
          operator: /[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,
          punctuation: /::|[;\[\]()\{\},.:]/
        };
        var t = /#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;
        e.languages.tremor["interpolated-string"] = {
          pattern: RegExp(/(^|[^\\])/.source + '(?:"""(?:' + /[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source + "|" + t + ')*"""|"(?:' + /[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source + "|" + t + ')*")'),
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: {
              pattern: RegExp(t),
              inside: {
                punctuation: /^#\{|\}$/,
                expression: {
                  pattern: /[\s\S]+/,
                  inside: e.languages.tremor
                }
              }
            },
            string: /[\s\S]+/
          }
        }, e.languages.troy = e.languages.tremor, e.languages.trickle = e.languages.tremor;
      })(o);
    }
    return i;
  }
  var u = p();
  let g;
  g = c(u);
  f = l({
    __proto__: null,
    default: g
  }, [
    u
  ]);
});
export {
  __tla,
  f as t
};
