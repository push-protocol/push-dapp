import { eH as c, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function b(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r) if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: true,
            get: () => r[i]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, a;
  function d() {
    if (a) return s;
    a = 1, s = e, e.displayName = "brightscript", e.aliases = [];
    function e(t) {
      t.languages.brightscript = {
        comment: /(?:\brem|').*/i,
        "directive-statement": {
          pattern: /(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,
          lookbehind: true,
          alias: "property",
          inside: {
            "error-message": {
              pattern: /(^#error).+/,
              lookbehind: true
            },
            directive: {
              pattern: /^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,
              alias: "keyword"
            },
            expression: {
              pattern: /[\s\S]+/,
              inside: null
            }
          }
        },
        property: {
          pattern: /([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,
          lookbehind: true,
          greedy: true
        },
        string: {
          pattern: /"(?:[^"\r\n]|"")*"(?!")/,
          greedy: true
        },
        "class-name": {
          pattern: /(\bAs[\t ]+)\w+/i,
          lookbehind: true
        },
        keyword: /\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,
        boolean: /\b(?:false|true)\b/i,
        function: /\b(?!\d)\w+(?=[\t ]*\()/,
        number: /(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,
        operator: /--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,
        punctuation: /[.,;()[\]{}]/,
        constant: /\b(?:LINE_NUM)\b/i
      }, t.languages.brightscript["directive-statement"].inside.expression.inside = t.languages.brightscript;
    }
    return s;
  }
  var p = d();
  let u;
  u = c(p);
  g = b({
    __proto__: null,
    default: u
  }, [
    p
  ]);
});
export {
  __tla,
  g as b
};
