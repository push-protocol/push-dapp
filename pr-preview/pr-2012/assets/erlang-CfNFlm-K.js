import { eH as b, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(e, n) {
    for (var a = 0; a < n.length; a++) {
      const r = n[a];
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
  function d() {
    if (l) return i;
    l = 1, i = e, e.displayName = "erlang", e.aliases = [];
    function e(n) {
      n.languages.erlang = {
        comment: /%.+/,
        string: {
          pattern: /"(?:\\.|[^\\"\r\n])*"/,
          greedy: true
        },
        "quoted-function": {
          pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
          alias: "function"
        },
        "quoted-atom": {
          pattern: /'(?:\\.|[^\\'\r\n])+'/,
          alias: "atom"
        },
        boolean: /\b(?:false|true)\b/,
        keyword: /\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,
        number: [
          /\$\\?./,
          /\b\d+#[a-z0-9]+/i,
          /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i
        ],
        function: /\b[a-z][\w@]*(?=\()/,
        variable: {
          pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
          lookbehind: true
        },
        operator: [
          /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,
          {
            pattern: /(^|[^<])<(?!<)/,
            lookbehind: true
          },
          {
            pattern: /(^|[^>])>(?!>)/,
            lookbehind: true
          }
        ],
        atom: /\b[a-z][\w@]*/,
        punctuation: /[()[\]{}:;,.#|]|<<|>>/
      };
    }
    return i;
  }
  var u = d();
  let f;
  f = b(u);
  g = s({
    __proto__: null,
    default: f
  }, [
    u
  ]);
});
export {
  __tla,
  g as e
};
