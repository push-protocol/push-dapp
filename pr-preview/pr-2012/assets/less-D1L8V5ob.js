import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      const s = t[n];
      if (typeof s != "string" && !Array.isArray(s)) {
        for (const r in s) if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(s, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: true,
            get: () => s[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, i;
  function c() {
    if (i) return o;
    i = 1, o = e, e.displayName = "less", e.aliases = [];
    function e(t) {
      t.languages.less = t.languages.extend("css", {
        comment: [
          /\/\*[\s\S]*?\*\//,
          {
            pattern: /(^|[^\\])\/\/.*/,
            lookbehind: true
          }
        ],
        atrule: {
          pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
          inside: {
            punctuation: /[:()]/
          }
        },
        selector: {
          pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
          inside: {
            variable: /@+[\w-]+/
          }
        },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
        operator: /[+\-*\/]/
      }), t.languages.insertBefore("less", "property", {
        variable: [
          {
            pattern: /@[\w-]+\s*:/,
            inside: {
              punctuation: /:/
            }
          },
          /@@?[\w-]+/
        ],
        "mixin-usage": {
          pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
          lookbehind: true,
          alias: "function"
        }
      });
    }
    return o;
  }
  var l = c();
  let f;
  f = u(l);
  d = p({
    __proto__: null,
    default: f
  }, [
    l
  ]);
});
export {
  __tla,
  d as l
};
