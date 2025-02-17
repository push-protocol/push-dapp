import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let p;
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
  var i, d;
  function f() {
    if (d) return i;
    d = 1, i = e, e.displayName = "j", e.aliases = [];
    function e(a) {
      a.languages.j = {
        comment: {
          pattern: /\bNB\..*/,
          greedy: true
        },
        string: {
          pattern: /'(?:''|[^'\r\n])*'/,
          greedy: true
        },
        keyword: /\b(?:(?:CR|LF|adverb|conjunction|def|define|dyad|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
        verb: {
          pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
          alias: "keyword"
        },
        number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:ad|ar|[ejpx])_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,
        adverb: {
          pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
          alias: "builtin"
        },
        operator: /[=a][.:]|_\./,
        conjunction: {
          pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
          alias: "variable"
        },
        punctuation: /[()]/
      };
    }
    return i;
  }
  var s = f();
  let l;
  l = u(s);
  p = c({
    __proto__: null,
    default: l
  }, [
    s
  ]);
});
export {
  __tla,
  p as j
};
