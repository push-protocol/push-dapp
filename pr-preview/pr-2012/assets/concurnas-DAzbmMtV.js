import { eH as u, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(n, e) {
    for (var a = 0; a < e.length; a++) {
      const t = e[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(n, r, o.get ? o : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, i;
  function d() {
    if (i) return s;
    i = 1, s = n, n.displayName = "concurnas", n.aliases = [
      "conc"
    ];
    function n(e) {
      e.languages.concurnas = {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*)/,
          lookbehind: true,
          greedy: true
        },
        langext: {
          pattern: /\b\w+\s*\|\|[\s\S]+?\|\|/,
          greedy: true,
          inside: {
            "class-name": /^\w+/,
            string: {
              pattern: /(^\s*\|\|)[\s\S]+(?=\|\|$)/,
              lookbehind: true
            },
            punctuation: /\|\|/
          }
        },
        function: {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,
          lookbehind: true
        },
        keyword: /\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,
        boolean: /\b(?:false|true)\b/,
        number: /\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,
        punctuation: /[{}[\];(),.:]/,
        operator: /<==|>==|=>|->|<-|<>|&==|&<>|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|[!^~]|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,
        annotation: {
          pattern: /@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,
          alias: "builtin"
        }
      }, e.languages.insertBefore("concurnas", "langext", {
        "regex-literal": {
          pattern: /\br("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: e.languages.concurnas
            },
            regex: /[\s\S]+/
          }
        },
        "string-literal": {
          pattern: /(?:\B|\bs)("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: e.languages.concurnas
            },
            string: /[\s\S]+/
          }
        }
      }), e.languages.conc = e.languages.concurnas;
    }
    return s;
  }
  var c = d();
  let p;
  p = u(c);
  g = l({
    __proto__: null,
    default: p
  }, [
    c
  ]);
});
export {
  __tla,
  g as c
};
