import { eH as f, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, i) {
    for (var a = 0; a < i.length; a++) {
      const r = i[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n && Object.defineProperty(e, t, n.get ? n : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, s;
  function d() {
    if (s) return o;
    s = 1, o = e, e.displayName = "makefile", e.aliases = [];
    function e(i) {
      i.languages.makefile = {
        comment: {
          pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
          lookbehind: true
        },
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "builtin-target": {
          pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          alias: "builtin"
        },
        target: {
          pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
          alias: "symbol",
          inside: {
            variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
          }
        },
        variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
        keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
        function: {
          pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
          lookbehind: true
        },
        operator: /(?:::|[?:+!])?=|[|@]/,
        punctuation: /[:;(){}]/
      };
    }
    return o;
  }
  var l = d();
  let p;
  p = f(l);
  b = u({
    __proto__: null,
    default: p
  }, [
    l
  ]);
});
export {
  __tla,
  b as m
};
