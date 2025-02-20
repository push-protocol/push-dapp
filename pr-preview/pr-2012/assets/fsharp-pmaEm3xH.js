import { eH as u, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(t, e) {
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
  var s, i;
  function d() {
    if (i) return s;
    i = 1, s = t, t.displayName = "fsharp", t.aliases = [];
    function t(e) {
      e.languages.fsharp = e.languages.extend("clike", {
        comment: [
          {
            pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        string: {
          pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
          lookbehind: true,
          inside: {
            operator: /->|\*/,
            punctuation: /\./
          }
        },
        keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,
        number: [
          /\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,
          /\b0b[01]+(?:uy|y)?\b/,
          /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
          /\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/
        ],
        operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
      }), e.languages.insertBefore("fsharp", "keyword", {
        preprocessor: {
          pattern: /(^[\t ]*)#.*/m,
          lookbehind: true,
          alias: "property",
          inside: {
            directive: {
              pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/,
              lookbehind: true,
              alias: "keyword"
            }
          }
        }
      }), e.languages.insertBefore("fsharp", "punctuation", {
        "computation-expression": {
          pattern: /\b[_a-z]\w*(?=\s*\{)/i,
          alias: "keyword"
        }
      }), e.languages.insertBefore("fsharp", "string", {
        annotation: {
          pattern: /\[<.+?>\]/,
          greedy: true,
          inside: {
            punctuation: /^\[<|>\]$/,
            "class-name": {
              pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
              lookbehind: true
            },
            "annotation-content": {
              pattern: /[\s\S]+/,
              inside: e.languages.fsharp
            }
          }
        },
        char: {
          pattern: /'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
          greedy: true
        }
      });
    }
    return s;
  }
  var l = d();
  let c;
  c = u(l);
  b = p({
    __proto__: null,
    default: c
  }, [
    l
  ]);
});
export {
  __tla,
  b as f
};
