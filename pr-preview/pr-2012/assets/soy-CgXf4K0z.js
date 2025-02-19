import { eH as g, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { r as m } from "./markup-templating-BxAVv-bL.js";
let S;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function y(o, r) {
    for (var a = 0; a < r.length; a++) {
      const e = r[a];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const t in e) if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, p;
  function k() {
    if (p) return i;
    p = 1;
    var o = m();
    i = r, r.displayName = "soy", r.aliases = [];
    function r(a) {
      a.register(o), function(e) {
        var t = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
        e.languages.soy = {
          comment: [
            /\/\*[\s\S]*?\*\//,
            {
              pattern: /(\s)\/\/.*/,
              lookbehind: true,
              greedy: true
            }
          ],
          "command-arg": {
            pattern: /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
            lookbehind: true,
            alias: "string",
            inside: {
              punctuation: /\./
            }
          },
          parameter: {
            pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,
            lookbehind: true,
            alias: "variable"
          },
          keyword: [
            {
              pattern: /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
              lookbehind: true
            },
            /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/
          ],
          delimiter: {
            pattern: /^\{+\/?|\/?\}+$/,
            alias: "punctuation"
          },
          property: /\w+(?==)/,
          variable: {
            pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,
            inside: {
              string: {
                pattern: t,
                greedy: true
              },
              number: n,
              punctuation: /[\[\].?]/
            }
          },
          string: {
            pattern: t,
            greedy: true
          },
          function: [
            /\w+(?=\()/,
            {
              pattern: /(\|[^\S\r\n]*)\w+/,
              lookbehind: true
            }
          ],
          boolean: /\b(?:false|true)\b/,
          number: n,
          operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
          punctuation: /[{}()\[\]|.,:]/
        }, e.hooks.add("before-tokenize", function(l) {
          var c = /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g, f = "{literal}", b = "{/literal}", s = false;
          e.languages["markup-templating"].buildPlaceholders(l, "soy", c, function(u) {
            return u === b && (s = false), s ? false : (u === f && (s = true), true);
          });
        }), e.hooks.add("after-tokenize", function(l) {
          e.languages["markup-templating"].tokenizePlaceholders(l, "soy");
        });
      }(a);
    }
    return i;
  }
  var d = k();
  let v;
  v = g(d);
  S = y({
    __proto__: null,
    default: v
  }, [
    d
  ]);
});
export {
  __tla,
  S as s
};
