import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(e, r) {
    for (var t = 0; t < r.length; t++) {
      const n = r[t];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const i in n) if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: true,
            get: () => n[i]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, s;
  function c() {
    if (s) return o;
    s = 1, o = e, e.displayName = "elixir", e.aliases = [];
    function e(r) {
      r.languages.elixir = {
        doc: {
          pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
          inside: {
            attribute: /^@\w+/,
            string: /['"][\s\S]+/
          }
        },
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        regex: {
          pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
          greedy: true
        },
        string: [
          {
            pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
            greedy: true,
            inside: {}
          },
          {
            pattern: /("""|''')[\s\S]*?\1/,
            greedy: true,
            inside: {}
          },
          {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true,
            inside: {}
          }
        ],
        atom: {
          pattern: /(^|[^:]):\w+/,
          lookbehind: true,
          alias: "symbol"
        },
        module: {
          pattern: /\b[A-Z]\w*\b/,
          alias: "class-name"
        },
        "attr-name": /\b\w+\??:(?!:)/,
        argument: {
          pattern: /(^|[^&])&\d+/,
          lookbehind: true,
          alias: "variable"
        },
        attribute: {
          pattern: /@\w+/,
          alias: "variable"
        },
        function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
        number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
        keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
        boolean: /\b(?:false|nil|true)\b/,
        operator: [
          /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
          {
            pattern: /([^<])<(?!<)/,
            lookbehind: true
          },
          {
            pattern: /([^>])>(?!>)/,
            lookbehind: true
          }
        ],
        punctuation: /<<|>>|[.,%\[\]{}()]/
      }, r.languages.elixir.string.forEach(function(t) {
        t.inside = {
          interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
              },
              rest: r.languages.elixir
            }
          }
        };
      });
    }
    return o;
  }
  var l = c();
  let p;
  p = u(l);
  f = d({
    __proto__: null,
    default: p
  }, [
    l
  ]);
});
export {
  __tla,
  f as e
};
