import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(e, t) {
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
  var a, p;
  function b() {
    if (p) return a;
    p = 1, a = e, e.displayName = "bicep", e.aliases = [];
    function e(t) {
      t.languages.bicep = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        property: [
          {
            pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,
            lookbehind: true
          },
          {
            pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,
            lookbehind: true,
            greedy: true
          }
        ],
        string: [
          {
            pattern: /'''[^'][\s\S]*?'''/,
            greedy: true
          },
          {
            pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,
            lookbehind: true,
            greedy: true
          }
        ],
        "interpolated-string": {
          pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /\$\{[^{}\r\n]*\}/,
              inside: {
                expression: {
                  pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                  lookbehind: true
                },
                punctuation: /^\$\{|\}$/
              }
            },
            string: /[\s\S]+/
          }
        },
        datatype: {
          pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,
          lookbehind: true,
          alias: "class-name"
        },
        boolean: /\b(?:false|true)\b/,
        keyword: /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,
        decorator: /@\w+\b/,
        function: /\b[a-z_]\w*(?=[ \t]*\()/i,
        number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        punctuation: /[{}[\];(),.:]/
      }, t.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside = t.languages.bicep;
    }
    return a;
  }
  var u = b();
  let l;
  l = s(u);
  g = d({
    __proto__: null,
    default: l
  }, [
    u
  ]);
});
export {
  __tla,
  g as b
};
