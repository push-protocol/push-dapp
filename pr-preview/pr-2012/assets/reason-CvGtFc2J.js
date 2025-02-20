import { eH as c, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, r) {
    for (var a = 0; a < r.length; a++) {
      const t = r[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const n in t) if (n !== "default" && !(n in e)) {
          const o = Object.getOwnPropertyDescriptor(t, n);
          o && Object.defineProperty(e, n, o.get ? o : {
            enumerable: true,
            get: () => t[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, l;
  function f() {
    if (l) return s;
    l = 1, s = e, e.displayName = "reason", e.aliases = [];
    function e(r) {
      r.languages.reason = r.languages.extend("clike", {
        string: {
          pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
          greedy: true
        },
        "class-name": /\b[A-Z]\w*/,
        keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
        operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
      }), r.languages.insertBefore("reason", "class-name", {
        char: {
          pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
          greedy: true
        },
        constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
        label: {
          pattern: /\b[a-z]\w*(?=::)/,
          alias: "symbol"
        }
      }), delete r.languages.reason.function;
    }
    return s;
  }
  var i = f();
  let d;
  d = c(i);
  p = u({
    __proto__: null,
    default: d
  }, [
    i
  ]);
});
export {
  __tla,
  p as r
};
