import { eH as l, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, n) {
    for (var a = 0; a < n.length; a++) {
      const t = n[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(e, r, o.get ? o : {
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
  var s, i;
  function f() {
    if (i) return s;
    i = 1, s = e, e.displayName = "nand2tetrisHdl", e.aliases = [];
    function e(n) {
      n.languages["nand2tetris-hdl"] = {
        comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        keyword: /\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b[A-Za-z][A-Za-z0-9]*(?=\()/,
        number: /\b\d+\b/,
        operator: /=|\.\./,
        punctuation: /[{}[\];(),:]/
      };
    }
    return s;
  }
  var d = f();
  let c;
  c = l(d);
  p = u({
    __proto__: null,
    default: c
  }, [
    d
  ]);
});
export {
  __tla,
  p as n
};
