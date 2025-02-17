import { eH as s, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(e, a) {
    for (var n = 0; n < a.length; n++) {
      const t = a[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(e, r, o.get ? o : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var l, i;
  function u() {
    if (i) return l;
    i = 1, l = e, e.displayName = "tcl", e.aliases = [];
    function e(a) {
      a.languages.tcl = {
        comment: {
          pattern: /(^|[^\\])#.*/,
          lookbehind: true
        },
        string: {
          pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
          greedy: true
        },
        variable: [
          {
            pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
            lookbehind: true
          },
          {
            pattern: /(\$)\{[^}]+\}/,
            lookbehind: true
          },
          {
            pattern: /(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
            lookbehind: true
          }
        ],
        function: {
          pattern: /(^[\t ]*proc[ \t]+)\S+/m,
          lookbehind: true
        },
        builtin: [
          {
            pattern: /(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,
            lookbehind: true
          },
          /\b(?:else|elseif)\b/
        ],
        scope: {
          pattern: /(^[\t ]*)(?:global|upvar|variable)\b/m,
          lookbehind: true,
          alias: "constant"
        },
        keyword: {
          pattern: /(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
          lookbehind: true
        },
        operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,
        punctuation: /[{}()\[\]]/
      };
    }
    return l;
  }
  var c = u();
  let d;
  d = s(c);
  b = p({
    __proto__: null,
    default: d
  }, [
    c
  ]);
});
export {
  __tla,
  b as t
};
