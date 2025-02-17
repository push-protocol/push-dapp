import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, o) {
    for (var a = 0; a < o.length; a++) {
      const r = o[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n && Object.defineProperty(e, t, n.get ? n : {
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
  var i, s;
  function l() {
    if (s) return i;
    s = 1, i = e, e.displayName = "oz", e.aliases = [];
    function e(o) {
      o.languages.oz = {
        comment: {
          pattern: /\/\*[\s\S]*?\*\/|%.*/,
          greedy: true
        },
        string: {
          pattern: /"(?:[^"\\]|\\[\s\S])*"/,
          greedy: true
        },
        atom: {
          pattern: /'(?:[^'\\]|\\[\s\S])*'/,
          greedy: true,
          alias: "builtin"
        },
        keyword: /\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
        function: [
          /\b[a-z][A-Za-z\d]*(?=\()/,
          {
            pattern: /(\{)[A-Z][A-Za-z\d]*\b/,
            lookbehind: true
          }
        ],
        number: /\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,
        variable: /`(?:[^`\\]|\\.)+`/,
        "attr-name": /\b\w+(?=[ \t]*:(?![:=]))/,
        operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
        punctuation: /[\[\](){}.:;?]/
      };
    }
    return i;
  }
  var f = l();
  let d;
  d = u(f);
  b = c({
    __proto__: null,
    default: d
  }, [
    f
  ]);
});
export {
  __tla,
  b as o
};
