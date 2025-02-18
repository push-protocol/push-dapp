import { eH as s, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(t, o) {
    for (var n = 0; n < o.length; n++) {
      const e = o[n];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, u;
  function f() {
    if (u) return a;
    u = 1, a = t, t.displayName = "solutionFile", t.aliases = [];
    function t(o) {
      (function(n) {
        var e = {
          pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,
          alias: "constant",
          inside: {
            punctuation: /[{}]/
          }
        };
        n.languages["solution-file"] = {
          comment: {
            pattern: /#.*/,
            greedy: true
          },
          string: {
            pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
            greedy: true,
            inside: {
              guid: e
            }
          },
          object: {
            pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,
            lookbehind: true,
            greedy: true,
            alias: "keyword"
          },
          property: {
            pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,
            lookbehind: true,
            inside: {
              guid: e
            }
          },
          guid: e,
          number: /\b\d+(?:\.\d+)*\b/,
          boolean: /\b(?:FALSE|TRUE)\b/,
          operator: /=/,
          punctuation: /[(),]/
        }, n.languages.sln = n.languages["solution-file"];
      })(o);
    }
    return a;
  }
  var l = f();
  let g;
  g = s(l);
  c = d({
    __proto__: null,
    default: g
  }, [
    l
  ]);
});
export {
  __tla,
  c as s
};
