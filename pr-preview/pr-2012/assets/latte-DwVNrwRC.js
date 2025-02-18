import { eH as g, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as f } from "./markup-templating-BxAVv-bL.js";
import { r as c } from "./php-E3TmF6re.js";
let v;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(n, l) {
    for (var a = 0; a < l.length; a++) {
      const e = l[a];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in n)) {
          const r = Object.getOwnPropertyDescriptor(e, t);
          r && Object.defineProperty(n, t, r.get ? r : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, p;
  function m() {
    if (p) return i;
    p = 1;
    var n = f(), l = c();
    i = a, a.displayName = "latte", a.aliases = [];
    function a(e) {
      e.register(n), e.register(l), function(t) {
        t.languages.latte = {
          comment: /^\{\*[\s\S]*/,
          "latte-tag": {
            pattern: /(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,
            lookbehind: true,
            alias: "important"
          },
          delimiter: {
            pattern: /^\{\/?|\}$/,
            alias: "punctuation"
          },
          php: {
            pattern: /\S(?:[\s\S]*\S)?/,
            alias: "language-php",
            inside: t.languages.php
          }
        };
        var r = t.languages.extend("markup", {});
        t.languages.insertBefore("inside", "attr-value", {
          "n-attr": {
            pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
            inside: {
              "attr-name": {
                pattern: /^[^\s=]+/,
                alias: "important"
              },
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  punctuation: [
                    /^=/,
                    {
                      pattern: /^(\s*)["']|["']$/,
                      lookbehind: true
                    }
                  ],
                  php: {
                    pattern: /\S(?:[\s\S]*\S)?/,
                    inside: t.languages.php
                  }
                }
              }
            }
          }
        }, r.tag), t.hooks.add("before-tokenize", function(o) {
          if (o.language === "latte") {
            var s = /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;
            t.languages["markup-templating"].buildPlaceholders(o, "latte", s), o.grammar = r;
          }
        }), t.hooks.add("after-tokenize", function(o) {
          t.languages["markup-templating"].tokenizePlaceholders(o, "latte");
        });
      }(e);
    }
    return i;
  }
  var u = m();
  let h;
  h = g(u);
  v = d({
    __proto__: null,
    default: h
  }, [
    u
  ]);
});
export {
  __tla,
  v as l
};
