import { eH as g, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(t, i) {
    for (var r = 0; r < i.length; r++) {
      const e = i[r];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const n in e) if (n !== "default" && !(n in t)) {
          const o = Object.getOwnPropertyDescriptor(e, n);
          o && Object.defineProperty(t, n, o.get ? o : {
            enumerable: true,
            get: () => e[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, s;
  function l() {
    if (s) return a;
    s = 1, a = t, t.displayName = "nginx", t.aliases = [];
    function t(i) {
      (function(r) {
        var e = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
        r.languages.nginx = {
          comment: {
            pattern: /(^|[\s{};])#.*/,
            lookbehind: true,
            greedy: true
          },
          directive: {
            pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
            lookbehind: true,
            greedy: true,
            inside: {
              string: {
                pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
                lookbehind: true,
                greedy: true,
                inside: {
                  escape: {
                    pattern: /\\["'\\nrt]/,
                    alias: "entity"
                  },
                  variable: e
                }
              },
              comment: {
                pattern: /(\s)#.*/,
                lookbehind: true,
                greedy: true
              },
              keyword: {
                pattern: /^\S+/,
                greedy: true
              },
              boolean: {
                pattern: /(\s)(?:off|on)(?!\S)/,
                lookbehind: true
              },
              number: {
                pattern: /(\s)\d+[a-z]*(?!\S)/i,
                lookbehind: true
              },
              variable: e
            }
          },
          punctuation: /[{};]/
        };
      })(i);
    }
    return a;
  }
  var u = l();
  let p;
  p = g(u);
  f = d({
    __proto__: null,
    default: p
  }, [
    u
  ]);
});
export {
  __tla,
  f as n
};
