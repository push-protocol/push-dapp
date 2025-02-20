import { eH as c, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(r, s) {
    for (var n = 0; n < s.length; n++) {
      const t = s[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const e in t) if (e !== "default" && !(e in r)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(r, e, o.get ? o : {
            enumerable: true,
            get: () => t[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, u;
  function m() {
    if (u) return a;
    u = 1, a = r, r.displayName = "systemd", r.aliases = [];
    function r(s) {
      (function(n) {
        var t = {
          pattern: /^[;#].*/m,
          greedy: true
        }, e = /"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;
        n.languages.systemd = {
          comment: t,
          section: {
            pattern: /^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,
            greedy: true,
            inside: {
              punctuation: /^\[|\]$/,
              "section-name": {
                pattern: /[\s\S]+/,
                alias: "selector"
              }
            }
          },
          key: {
            pattern: /^[^\s=]+(?=[ \t]*=)/m,
            greedy: true,
            alias: "attr-name"
          },
          value: {
            pattern: RegExp(/(=[ \t]*(?!\s))/.source + "(?:" + e + `|(?=[^"\r
]))(?:` + (/[^\s\\]/.source + '|[ 	]+(?:(?![ 	"])|' + e + ")|" + /\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source) + ")*"),
            lookbehind: true,
            greedy: true,
            alias: "attr-value",
            inside: {
              comment: t,
              quoted: {
                pattern: RegExp(/(^|\s)/.source + e),
                lookbehind: true,
                greedy: true
              },
              punctuation: /\\$/m,
              boolean: {
                pattern: /^(?:false|no|off|on|true|yes)$/,
                greedy: true
              }
            }
          },
          punctuation: /=/
        };
      })(s);
    }
    return a;
  }
  var i = m();
  let y;
  y = c(i);
  l = d({
    __proto__: null,
    default: y
  }, [
    i
  ]);
});
export {
  __tla,
  l as s
};
