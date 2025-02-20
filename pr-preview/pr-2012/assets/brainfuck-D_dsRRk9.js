import { eH as u, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(e, a) {
    for (var n = 0; n < a.length; n++) {
      const r = a[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const i = Object.getOwnPropertyDescriptor(r, t);
          i && Object.defineProperty(e, t, i.get ? i : {
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
  var o, c;
  function p() {
    if (c) return o;
    c = 1, o = e, e.displayName = "brainfuck", e.aliases = [];
    function e(a) {
      a.languages.brainfuck = {
        pointer: {
          pattern: /<|>/,
          alias: "keyword"
        },
        increment: {
          pattern: /\+/,
          alias: "inserted"
        },
        decrement: {
          pattern: /-/,
          alias: "deleted"
        },
        branching: {
          pattern: /\[|\]/,
          alias: "important"
        },
        operator: /[.,]/,
        comment: /\S+/
      };
    }
    return o;
  }
  var f = p();
  let l;
  l = u(f);
  d = s({
    __proto__: null,
    default: l
  }, [
    f
  ]);
});
export {
  __tla,
  d as b
};
