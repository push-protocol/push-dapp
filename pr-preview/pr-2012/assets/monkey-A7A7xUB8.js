import { eH as u, __tla as __tla_0 } from "./index-AGa8OPve.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, n) {
    for (var o = 0; o < n.length; o++) {
      const t = n[o];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: true,
            get: () => t[r]
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
    l = 1, i = e, e.displayName = "monkey", e.aliases = [];
    function e(n) {
      n.languages.monkey = {
        comment: {
          pattern: /^#Rem\s[\s\S]*?^#End|'.+/im,
          greedy: true
        },
        string: {
          pattern: /"[^"\r\n]*"/,
          greedy: true
        },
        preprocessor: {
          pattern: /(^[ \t]*)#.+/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        },
        function: /\b\w+(?=\()/,
        "type-char": {
          pattern: /\b[?%#$]/,
          alias: "class-name"
        },
        number: {
          pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
          lookbehind: true
        },
        keyword: /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
        operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
        punctuation: /[.,:;()\[\]]/
      };
    }
    return i;
  }
  var s = p();
  let d;
  d = u(s);
  f = c({
    __proto__: null,
    default: d
  }, [
    s
  ]);
});
export {
  __tla,
  f as m
};
