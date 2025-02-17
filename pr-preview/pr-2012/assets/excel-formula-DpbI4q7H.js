import { eH as s, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(e, r) {
    for (var n = 0; n < r.length; n++) {
      const t = r[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const a in t) if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(t, a);
          o && Object.defineProperty(e, a, o.get ? o : {
            enumerable: true,
            get: () => t[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var l, u;
  function p() {
    if (u) return l;
    u = 1, l = e, e.displayName = "excelFormula", e.aliases = [];
    function e(r) {
      r.languages["excel-formula"] = {
        comment: {
          pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
          lookbehind: true,
          greedy: true
        },
        string: {
          pattern: /"(?:[^"]|"")*"(?!")/,
          greedy: true
        },
        reference: {
          pattern: /(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
          greedy: true,
          alias: "string",
          inside: {
            operator: /!$/,
            punctuation: /'/,
            sheet: {
              pattern: /[^[\]]+$/,
              alias: "function"
            },
            file: {
              pattern: /\[[^[\]]+\]$/,
              inside: {
                punctuation: /[[\]]/
              }
            },
            path: /[\s\S]+/
          }
        },
        "function-name": {
          pattern: /\b[A-Z]\w*(?=\()/i,
          alias: "keyword"
        },
        range: {
          pattern: /\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
          alias: "property",
          inside: {
            operator: /:/,
            cell: /\$?[A-Z]+\$?\d+/i,
            column: /\$?[A-Z]+/i,
            row: /\$?\d+/
          }
        },
        cell: {
          pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,
          alias: "property"
        },
        number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
        boolean: /\b(?:FALSE|TRUE)\b/i,
        operator: /[-+*/^%=&,]|<[=>]?|>=?/,
        punctuation: /[[\]();{}|]/
      }, r.languages.xlsx = r.languages.xls = r.languages["excel-formula"];
    }
    return l;
  }
  var i = p();
  let d;
  d = s(i);
  g = c({
    __proto__: null,
    default: d
  }, [
    i
  ]);
});
export {
  __tla,
  g as e
};
