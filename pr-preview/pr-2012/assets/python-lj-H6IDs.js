import { eH as p, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(t, e) {
    for (var a = 0; a < e.length; a++) {
      const r = e[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const n in r) if (n !== "default" && !(n in t)) {
          const o = Object.getOwnPropertyDescriptor(r, n);
          o && Object.defineProperty(t, n, o.get ? o : {
            enumerable: true,
            get: () => r[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, s;
  function d() {
    if (s) return i;
    s = 1, i = t, t.displayName = "python", t.aliases = [
      "py"
    ];
    function t(e) {
      e.languages.python = {
        comment: {
          pattern: /(^|[^\\])#.*/,
          lookbehind: true,
          greedy: true
        },
        "string-interpolation": {
          pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
              lookbehind: true,
              inside: {
                "format-spec": {
                  pattern: /(:)[^:(){}]+(?=\}$)/,
                  lookbehind: true
                },
                "conversion-option": {
                  pattern: /![sra](?=[:}]$)/,
                  alias: "punctuation"
                },
                rest: null
              }
            },
            string: /[\s\S]+/
          }
        },
        "triple-quoted-string": {
          pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
          greedy: true,
          alias: "string"
        },
        string: {
          pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
          greedy: true
        },
        function: {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
          lookbehind: true
        },
        "class-name": {
          pattern: /(\bclass\s+)\w+/i,
          lookbehind: true
        },
        decorator: {
          pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
          lookbehind: true,
          alias: [
            "annotation",
            "punctuation"
          ],
          inside: {
            punctuation: /\./
          }
        },
        keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:False|None|True)\b/,
        number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
        operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/
      }, e.languages.python["string-interpolation"].inside.interpolation.inside.rest = e.languages.python, e.languages.py = e.languages.python;
    }
    return i;
  }
  var l = d();
  let c;
  c = p(l);
  y = u({
    __proto__: null,
    default: c
  }, [
    l
  ]);
});
export {
  __tla,
  y as p
};
