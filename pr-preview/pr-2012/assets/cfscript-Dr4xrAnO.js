import { eH as u, __tla as __tla_0 } from "./index-AGa8OPve.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(t, e) {
    for (var n = 0; n < e.length; n++) {
      const r = e[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const a in r) if (a !== "default" && !(a in t)) {
          const i = Object.getOwnPropertyDescriptor(r, a);
          i && Object.defineProperty(t, a, i.get ? i : {
            enumerable: true,
            get: () => r[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, c;
  function p() {
    if (c) return o;
    c = 1, o = t, t.displayName = "cfscript", t.aliases = [];
    function t(e) {
      e.languages.cfscript = e.languages.extend("clike", {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            inside: {
              annotation: {
                pattern: /(?:^|[^.])@[\w\.]+/,
                alias: "punctuation"
              }
            }
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        keyword: /\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,
        operator: [
          /\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/,
          /\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/
        ],
        scope: {
          pattern: /\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,
          alias: "global"
        },
        type: {
          pattern: /\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,
          alias: "builtin"
        }
      }), e.languages.insertBefore("cfscript", "keyword", {
        "function-variable": {
          pattern: /[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        }
      }), delete e.languages.cfscript["class-name"], e.languages.cfc = e.languages.cfscript;
    }
    return o;
  }
  var s = p();
  let f;
  f = u(s);
  b = l({
    __proto__: null,
    default: f
  }, [
    s
  ]);
});
export {
  __tla,
  b as c
};
