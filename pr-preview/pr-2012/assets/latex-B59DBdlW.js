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
  function c(n, r) {
    for (var e = 0; e < r.length; e++) {
      const t = r[e];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const a in t) if (a !== "default" && !(a in n)) {
          const s = Object.getOwnPropertyDescriptor(t, a);
          s && Object.defineProperty(n, a, s.get ? s : {
            enumerable: true,
            get: () => t[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, o;
  function g() {
    if (o) return i;
    o = 1, i = n, n.displayName = "latex", n.aliases = [
      "tex",
      "context"
    ];
    function n(r) {
      (function(e) {
        var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, a = {
          "equation-command": {
            pattern: t,
            alias: "regex"
          }
        };
        e.languages.latex = {
          comment: /%.*/,
          cdata: {
            pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: true
          },
          equation: [
            {
              pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
              inside: a,
              alias: "string"
            },
            {
              pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
              lookbehind: true,
              inside: a,
              alias: "string"
            }
          ],
          keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: true
          },
          url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: true
          },
          headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: true,
            alias: "class-name"
          },
          function: {
            pattern: t,
            alias: "selector"
          },
          punctuation: /[[\]{}&]/
        }, e.languages.tex = e.languages.latex, e.languages.context = e.languages.latex;
      })(r);
    }
    return i;
  }
  var l = g();
  let p;
  p = u(l);
  d = c({
    __proto__: null,
    default: p
  }, [
    l
  ]);
});
export {
  __tla,
  d as l
};
