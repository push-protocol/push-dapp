import { eH as i, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let u, g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(s, r) {
    for (var t = 0; t < r.length; t++) {
      const e = r[t];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const n in e) if (n !== "default" && !(n in s)) {
          const a = Object.getOwnPropertyDescriptor(e, n);
          a && Object.defineProperty(s, n, a.get ? a : {
            enumerable: true,
            get: () => e[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  u = o;
  o.displayName = "css";
  o.aliases = [];
  function o(s) {
    (function(r) {
      var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      r.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
          }
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + t.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        string: {
          pattern: t,
          greedy: true
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        punctuation: /[(){};:,]/
      }, r.languages.css.atrule.inside.rest = r.languages.css;
      var e = r.languages.markup;
      e && (e.tag.addInlined("style", "css"), e.tag.addAttribute("style", "css"));
    })(s);
  }
  let l;
  l = i(u);
  g = c({
    __proto__: null,
    default: l
  }, [
    u
  ]);
});
export {
  __tla,
  u as a,
  g as c
};
