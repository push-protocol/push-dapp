import { eH as u, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, e) {
    for (var r = 0; r < e.length; r++) {
      const n = e[r];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const a in n) if (a !== "default" && !(a in t)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(t, a, o.get ? o : {
            enumerable: true,
            get: () => n[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, i;
  function p() {
    if (i) return s;
    i = 1, s = t, t.displayName = "antlr4", t.aliases = [
      "g4"
    ];
    function t(e) {
      e.languages.antlr4 = {
        comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        string: {
          pattern: /'(?:\\.|[^\\'\r\n])*'/,
          greedy: true
        },
        "character-class": {
          pattern: /\[(?:\\.|[^\\\]\r\n])*\]/,
          greedy: true,
          alias: "regex",
          inside: {
            range: {
              pattern: /([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,
              lookbehind: true,
              alias: "punctuation"
            },
            escape: /\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,
            punctuation: /[\[\]]/
          }
        },
        action: {
          pattern: /\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,
          greedy: true,
          inside: {
            content: {
              pattern: /(\{)[\s\S]+(?=\})/,
              lookbehind: true
            },
            punctuation: /[{}]/
          }
        },
        command: {
          pattern: /(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,
          lookbehind: true,
          inside: {
            function: /\b\w+(?=\s*(?:[,(]|$))/,
            punctuation: /[,()]/
          }
        },
        annotation: {
          pattern: /@\w+(?:::\w+)*/,
          alias: "keyword"
        },
        label: {
          pattern: /#[ \t]*\w+/,
          alias: "punctuation"
        },
        keyword: /\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,
        definition: [
          {
            pattern: /\b[a-z]\w*(?=\s*:)/,
            alias: [
              "rule",
              "class-name"
            ]
          },
          {
            pattern: /\b[A-Z]\w*(?=\s*:)/,
            alias: [
              "token",
              "constant"
            ]
          }
        ],
        constant: /\b[A-Z][A-Z_]*\b/,
        operator: /\.\.|->|[|~]|[*+?]\??/,
        punctuation: /[;:()=]/
      }, e.languages.g4 = e.languages.antlr4;
    }
    return s;
  }
  var l = p();
  let g;
  g = u(l);
  f = c({
    __proto__: null,
    default: g
  }, [
    l
  ]);
});
export {
  __tla,
  f as a
};
