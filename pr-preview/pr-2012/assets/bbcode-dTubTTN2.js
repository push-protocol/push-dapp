import { eH as b, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function i(e, t) {
    for (var a = 0; a < t.length; a++) {
      const r = t[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r) if (o !== "default" && !(o in e)) {
          const n = Object.getOwnPropertyDescriptor(r, o);
          n && Object.defineProperty(e, o, n.get ? n : {
            enumerable: true,
            get: () => r[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, c;
  function d() {
    if (c) return s;
    c = 1, s = e, e.displayName = "bbcode", e.aliases = [
      "shortcode"
    ];
    function e(t) {
      t.languages.bbcode = {
        tag: {
          pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
          inside: {
            tag: {
              pattern: /^\[\/?[^\s=\]]+/,
              inside: {
                punctuation: /^\[\/?/
              }
            },
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
              inside: {
                punctuation: [
                  /^=/,
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ]
              }
            },
            punctuation: /\]/,
            "attr-name": /[^\s=\]]+/
          }
        }
      }, t.languages.shortcode = t.languages.bbcode;
    }
    return s;
  }
  var u = d();
  let p;
  p = b(u);
  g = i({
    __proto__: null,
    default: p
  }, [
    u
  ]);
});
export {
  __tla,
  g as b
};
