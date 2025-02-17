import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, o) {
    for (var n = 0; n < o.length; n++) {
      const r = o[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const s = Object.getOwnPropertyDescriptor(r, t);
          s && Object.defineProperty(e, t, s.get ? s : {
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
  var p, a;
  function c() {
    if (a) return p;
    a = 1, p = e, e.displayName = "properties", e.aliases = [];
    function e(o) {
      o.languages.properties = {
        comment: /^[ \t]*[#!].*$/m,
        "attr-value": {
          pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
          lookbehind: true
        },
        "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
        punctuation: /[=:]/
      };
    }
    return p;
  }
  var i = c();
  let l;
  l = u(i);
  g = f({
    __proto__: null,
    default: l
  }, [
    i
  ]);
});
export {
  __tla,
  g as p
};
