import { eH as i, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as s } from "./php-E3TmF6re.js";
import { r as d } from "./javadoclike-myFApC35.js";
let y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(t, p) {
    for (var a = 0; a < p.length; a++) {
      const r = p[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const e in r) if (e !== "default" && !(e in t)) {
          const o = Object.getOwnPropertyDescriptor(r, e);
          o && Object.defineProperty(t, e, o.get ? o : {
            enumerable: true,
            get: () => r[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var n, c;
  function g() {
    if (c) return n;
    c = 1;
    var t = s(), p = d();
    n = a, a.displayName = "phpdoc", a.aliases = [];
    function a(r) {
      r.register(t), r.register(p), function(e) {
        var o = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
        e.languages.phpdoc = e.languages.extend("javadoclike", {
          parameter: {
            pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + o + "\\s+)?)\\$\\w+"),
            lookbehind: true
          }
        }), e.languages.insertBefore("phpdoc", "keyword", {
          "class-name": [
            {
              pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + o),
              lookbehind: true,
              inside: {
                keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
                punctuation: /[|\\[\]()]/
              }
            }
          ]
        }), e.languages.javadoclike.addSupport("php", e.languages.phpdoc);
      }(r);
    }
    return n;
  }
  var l = g();
  let f;
  f = i(l);
  y = u({
    __proto__: null,
    default: f
  }, [
    l
  ]);
});
export {
  __tla,
  y as p
};
