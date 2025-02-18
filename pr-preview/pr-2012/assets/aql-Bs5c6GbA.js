import { eH as s, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let O;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(e, a) {
    for (var n = 0; n < a.length; n++) {
      const r = a[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(e, t, o.get ? o : {
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
  var i, l;
  function b() {
    if (l) return i;
    l = 1, i = e, e.displayName = "aql", e.aliases = [];
    function e(a) {
      a.languages.aql = {
        comment: /\/\/.*|\/\*[\s\S]*?\*\//,
        property: {
          pattern: /([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,
          lookbehind: true,
          greedy: true
        },
        string: {
          pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
          greedy: true
        },
        identifier: {
          pattern: /([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
          greedy: true
        },
        variable: /@@?\w+/,
        keyword: [
          {
            pattern: /(\bWITH\s+)COUNT(?=\s+INTO\b)/i,
            lookbehind: true
          },
          /\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,
          {
            pattern: /(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,
            lookbehind: true
          },
          {
            pattern: /(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,
            lookbehind: true
          },
          {
            pattern: /\bOPTIONS(?=\s*\{)/i
          }
        ],
        function: /\b(?!\d)\w+(?=\s*\()/,
        boolean: /\b(?:false|true)\b/i,
        range: {
          pattern: /\.\./,
          alias: "operator"
        },
        number: [
          /\b0b[01]+/i,
          /\b0x[0-9a-f]+/i,
          /(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i
        ],
        operator: /\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,
        punctuation: /::|[?.:,;()[\]{}]/
      };
    }
    return i;
  }
  var T = b();
  let E;
  E = s(T);
  O = u({
    __proto__: null,
    default: E
  }, [
    T
  ]);
});
export {
  __tla,
  O as a
};
