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
  function c(t, n) {
    for (var r = 0; r < n.length; r++) {
      const e = n[r];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const a in e) if (a !== "default" && !(a in t)) {
          const o = Object.getOwnPropertyDescriptor(e, a);
          o && Object.defineProperty(t, a, o.get ? o : {
            enumerable: true,
            get: () => e[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, s;
  function l() {
    if (s) return i;
    s = 1, i = t, t.displayName = "parser", t.aliases = [];
    function t(n) {
      (function(r) {
        var e = r.languages.parser = r.languages.extend("markup", {
          keyword: {
            pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
            lookbehind: true
          },
          variable: {
            pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: true,
            inside: {
              punctuation: /\.|:+/
            }
          },
          function: {
            pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: true,
            inside: {
              keyword: {
                pattern: /(^@)(?:GET_|SET_)/,
                lookbehind: true
              },
              punctuation: /\.|:+/
            }
          },
          escape: {
            pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
            alias: "builtin"
          },
          punctuation: /[\[\](){};]/
        });
        e = r.languages.insertBefore("parser", "keyword", {
          "parser-comment": {
            pattern: /(\s)#.*/,
            lookbehind: true,
            alias: "comment"
          },
          expression: {
            pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
            greedy: true,
            lookbehind: true,
            inside: {
              string: {
                pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
                lookbehind: true
              },
              keyword: e.keyword,
              variable: e.variable,
              function: e.function,
              boolean: /\b(?:false|true)\b/,
              number: /\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,
              escape: e.escape,
              operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
              punctuation: e.punctuation
            }
          }
        }), r.languages.insertBefore("inside", "punctuation", {
          expression: e.expression,
          keyword: e.keyword,
          variable: e.variable,
          function: e.function,
          escape: e.escape,
          "parser-punctuation": {
            pattern: e.punctuation,
            alias: "punctuation"
          }
        }, e.tag.inside["attr-value"]);
      })(n);
    }
    return i;
  }
  var u = l();
  let d;
  d = p(u);
  b = c({
    __proto__: null,
    default: d
  }, [
    u
  ]);
});
export {
  __tla,
  b as p
};
