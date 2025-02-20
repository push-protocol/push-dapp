import { eH as p, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(r, a) {
    for (var o = 0; o < a.length; o++) {
      const e = a[o];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, s;
  function d() {
    if (s) return i;
    s = 1, i = r, r.displayName = "jq", r.aliases = [];
    function r(a) {
      (function(o) {
        var e = /\\\((?:[^()]|\([^()]*\))*\)/.source, t = RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, function() {
          return e;
        })), n = {
          interpolation: {
            pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + e),
            lookbehind: true,
            inside: {
              content: {
                pattern: /^(\\\()[\s\S]+(?=\)$)/,
                lookbehind: true,
                inside: null
              },
              punctuation: /^\\\(|\)$/
            }
          }
        }, l = o.languages.jq = {
          comment: /#.*/,
          property: {
            pattern: RegExp(t.source + /(?=\s*:(?!:))/.source),
            lookbehind: true,
            greedy: true,
            inside: n
          },
          string: {
            pattern: t,
            lookbehind: true,
            greedy: true,
            inside: n
          },
          function: {
            pattern: /(\bdef\s+)[a-z_]\w+/i,
            lookbehind: true
          },
          variable: /\B\$\w+/,
          "property-literal": {
            pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
            alias: "property"
          },
          keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,
          operator: [
            {
              pattern: /\|=?/,
              alias: "pipe"
            },
            /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/
          ],
          "c-style-function": {
            pattern: /\b[a-z_]\w*(?=\s*\()/i,
            alias: "function"
          },
          punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
          dot: {
            pattern: /\./,
            alias: "important"
          }
        };
        n.interpolation.inside.content.inside = l;
      })(a);
    }
    return i;
  }
  var u = d();
  let b;
  b = p(u);
  g = c({
    __proto__: null,
    default: b
  }, [
    u
  ]);
});
export {
  __tla,
  g as j
};
