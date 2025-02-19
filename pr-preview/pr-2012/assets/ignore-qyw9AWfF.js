import { eH as s, __tla as __tla_0 } from "./index-AGa8OPve.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(n, t) {
    for (var e = 0; e < t.length; e++) {
      const r = t[e];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r) if (o !== "default" && !(o in n)) {
          const g = Object.getOwnPropertyDescriptor(r, o);
          g && Object.defineProperty(n, o, g.get ? g : {
            enumerable: true,
            get: () => r[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, i;
  function f() {
    if (i) return a;
    i = 1, a = n, n.displayName = "ignore", n.aliases = [
      "gitignore",
      "hgignore",
      "npmignore"
    ];
    function n(t) {
      (function(e) {
        e.languages.ignore = {
          comment: /^#.*/m,
          entry: {
            pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
            alias: "string",
            inside: {
              operator: /^!|\*\*?|\?/,
              regex: {
                pattern: /(^|[^\\])\[[^\[\]]*\]/,
                lookbehind: true
              },
              punctuation: /\//
            }
          }
        }, e.languages.gitignore = e.languages.ignore, e.languages.hgignore = e.languages.ignore, e.languages.npmignore = e.languages.ignore;
      })(t);
    }
    return a;
  }
  var u = f();
  let p;
  p = s(u);
  d = l({
    __proto__: null,
    default: p
  }, [
    u
  ]);
});
export {
  __tla,
  d as i
};
