import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, a) {
    for (var n = 0; n < a.length; n++) {
      const r = a[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(e, t, o.get ? o : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, l;
  function p() {
    if (l) return i;
    l = 1, i = e, e.displayName = "julia", e.aliases = [];
    function e(a) {
      a.languages.julia = {
        comment: {
          pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
          lookbehind: true
        },
        regex: {
          pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
          greedy: true
        },
        string: {
          pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,
          greedy: true
        },
        char: {
          pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,
          lookbehind: true,
          greedy: true
        },
        keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
        boolean: /\b(?:false|true)\b/,
        number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
        operator: /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
        punctuation: /::?|[{}[\]();,.?]/,
        constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/
      };
    }
    return i;
  }
  var u = p();
  let d;
  d = s(u);
  b = c({
    __proto__: null,
    default: d
  }, [
    u
  ]);
});
export {
  __tla,
  b as j
};
