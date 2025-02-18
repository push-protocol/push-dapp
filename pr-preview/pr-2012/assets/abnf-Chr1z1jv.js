import { eH as d, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(t, a) {
    for (var n = 0; n < a.length; n++) {
      const e = a[n];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const r in e) if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, u;
  function p() {
    if (u) return o;
    u = 1, o = t, t.displayName = "abnf", t.aliases = [];
    function t(a) {
      (function(n) {
        var e = "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
        n.languages.abnf = {
          comment: /;.*/,
          string: {
            pattern: /(?:%[is])?"[^"\n\r]*"/,
            greedy: true,
            inside: {
              punctuation: /^%[is]/
            }
          },
          range: {
            pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
            alias: "number"
          },
          terminal: {
            pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
            alias: "number"
          },
          repetition: {
            pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
            lookbehind: true,
            alias: "operator"
          },
          definition: {
            pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
            lookbehind: true,
            alias: "keyword",
            inside: {
              punctuation: /<|>/
            }
          },
          "core-rule": {
            pattern: RegExp("(?:(^|[^<\\w-])" + e + "|<" + e + ">)(?![\\w-])", "i"),
            lookbehind: true,
            alias: [
              "rule",
              "constant"
            ],
            inside: {
              punctuation: /<|>/
            }
          },
          rule: {
            pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
            lookbehind: true,
            inside: {
              punctuation: /<|>/
            }
          },
          operator: /=\/?|\//,
          punctuation: /[()\[\]]/
        };
      })(a);
    }
    return o;
  }
  var s = p();
  let l;
  l = d(s);
  b = f({
    __proto__: null,
    default: l
  }, [
    s
  ]);
});
export {
  __tla,
  b as a
};
