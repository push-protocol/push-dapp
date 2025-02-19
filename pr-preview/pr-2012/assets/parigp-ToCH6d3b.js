import { eH as f, __tla as __tla_0 } from "./index-AGa8OPve.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(r, n) {
    for (var e = 0; e < n.length; e++) {
      const t = n[e];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const o in t) if (o !== "default" && !(o in r)) {
          const i = Object.getOwnPropertyDescriptor(t, o);
          i && Object.defineProperty(r, o, i.get ? i : {
            enumerable: true,
            get: () => t[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var p, a;
  function s() {
    if (a) return p;
    a = 1, p = r, r.displayName = "parigp", r.aliases = [];
    function r(n) {
      n.languages.parigp = {
        comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
        string: {
          pattern: /"(?:[^"\\\r\n]|\\.)*"/,
          greedy: true
        },
        keyword: function() {
          var e = [
            "breakpoint",
            "break",
            "dbg_down",
            "dbg_err",
            "dbg_up",
            "dbg_x",
            "forcomposite",
            "fordiv",
            "forell",
            "forpart",
            "forprime",
            "forstep",
            "forsubgroup",
            "forvec",
            "for",
            "iferr",
            "if",
            "local",
            "my",
            "next",
            "return",
            "until",
            "while"
          ];
          return e = e.map(function(t) {
            return t.split("").join(" *");
          }).join("|"), RegExp("\\b(?:" + e + ")\\b");
        }(),
        function: /\b\w(?:[\w ]*\w)?(?= *\()/,
        number: {
          pattern: /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
          lookbehind: true
        },
        operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
        punctuation: /[\[\]{}().,:;|]/
      };
    }
    return p;
  }
  var u = s();
  let d;
  d = f(u);
  l = g({
    __proto__: null,
    default: d
  }, [
    u
  ]);
});
export {
  __tla,
  l as p
};
