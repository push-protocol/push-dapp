import { eH as p, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as l } from "./cpp-PR_WB-PF.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(r, t) {
    for (var e = 0; e < t.length; e++) {
      const a = t[e];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const i in a) if (i !== "default" && !(i in r)) {
          const n = Object.getOwnPropertyDescriptor(a, i);
          n && Object.defineProperty(r, i, n.get ? n : {
            enumerable: true,
            get: () => a[i]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, o;
  function f() {
    if (o) return s;
    o = 1;
    var r = l();
    s = t, t.displayName = "chaiscript", t.aliases = [];
    function t(e) {
      e.register(r), e.languages.chaiscript = e.languages.extend("clike", {
        string: {
          pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
          lookbehind: true,
          greedy: true
        },
        "class-name": [
          {
            pattern: /(\bclass\s+)\w+/,
            lookbehind: true
          },
          {
            pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
            lookbehind: true
          }
        ],
        keyword: /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
        number: [
          e.languages.cpp.number,
          /\b(?:Infinity|NaN)\b/
        ],
        operator: />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/
      }), e.languages.insertBefore("chaiscript", "operator", {
        "parameter-type": {
          pattern: /([,(]\s*)\w+(?=\s+\w)/,
          lookbehind: true,
          alias: "class-name"
        }
      }), e.languages.insertBefore("chaiscript", "string", {
        "string-interpolation": {
          pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
              lookbehind: true,
              inside: {
                "interpolation-expression": {
                  pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                  lookbehind: true,
                  inside: e.languages.chaiscript
                },
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                }
              }
            },
            string: /[\s\S]+/
          }
        }
      });
    }
    return s;
  }
  var c = f();
  let g;
  g = p(c);
  b = u({
    __proto__: null,
    default: g
  }, [
    c
  ]);
});
export {
  __tla,
  b as c
};
