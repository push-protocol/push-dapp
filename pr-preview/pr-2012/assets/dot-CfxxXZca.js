import { eH as p, __tla as __tla_0 } from "./index-AGa8OPve.js";
let h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(n, o) {
    for (var r = 0; r < o.length; r++) {
      const a = o[r];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const e in a) if (e !== "default" && !(e in n)) {
          const t = Object.getOwnPropertyDescriptor(a, e);
          t && Object.defineProperty(n, e, t.get ? t : {
            enumerable: true,
            get: () => a[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var u, i;
  function c() {
    if (i) return u;
    i = 1, u = n, n.displayName = "dot", n.aliases = [
      "gv"
    ];
    function n(o) {
      (function(r) {
        var a = "(?:" + [
          /[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,
          /-?(?:\.\d+|\d+(?:\.\d*)?)/.source,
          /"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,
          /<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source
        ].join("|") + ")", e = {
          markup: {
            pattern: /(^<)[\s\S]+(?=>$)/,
            lookbehind: true,
            alias: [
              "language-markup",
              "language-html",
              "language-xml"
            ],
            inside: r.languages.markup
          }
        };
        function t(d, g) {
          return RegExp(d.replace(/<ID>/g, function() {
            return a;
          }), g);
        }
        r.languages.dot = {
          comment: {
            pattern: /\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,
            greedy: true
          },
          "graph-name": {
            pattern: t(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source, "i"),
            lookbehind: true,
            greedy: true,
            alias: "class-name",
            inside: e
          },
          "attr-value": {
            pattern: t(/(=[ \t\r\n]*)<ID>/.source),
            lookbehind: true,
            greedy: true,
            inside: e
          },
          "attr-name": {
            pattern: t(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),
            lookbehind: true,
            greedy: true,
            inside: e
          },
          keyword: /\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,
          "compass-point": {
            pattern: /(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,
            lookbehind: true,
            alias: "builtin"
          },
          node: {
            pattern: t(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),
            lookbehind: true,
            greedy: true,
            inside: e
          },
          operator: /[=:]|-[->]/,
          punctuation: /[\[\]{};,]/
        }, r.languages.gv = r.languages.dot;
      })(o);
    }
    return u;
  }
  var s = c();
  let f;
  f = p(s);
  h = l({
    __proto__: null,
    default: f
  }, [
    s
  ]);
});
export {
  __tla,
  h as d
};
