import { eH as g, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, n) {
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
  var i, s;
  function p() {
    if (s) return i;
    s = 1, i = e, e.displayName = "yang", e.aliases = [];
    function e(n) {
      n.languages.yang = {
        comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
        string: {
          pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
          greedy: true
        },
        keyword: {
          pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
          lookbehind: true
        },
        namespace: {
          pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
          lookbehind: true
        },
        boolean: /\b(?:false|true)\b/,
        operator: /\+/,
        punctuation: /[{};:]/
      };
    }
    return i;
  }
  var u = p();
  let y;
  y = g(u);
  l = f({
    __proto__: null,
    default: y
  }, [
    u
  ]);
});
export {
  __tla,
  l as y
};
