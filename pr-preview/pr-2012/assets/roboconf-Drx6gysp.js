import { eH as l, __tla as __tla_0 } from "./index-AGa8OPve.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(o, r) {
    for (var n = 0; n < r.length; n++) {
      const t = r[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const e in t) if (e !== "default" && !(e in o)) {
          const a = Object.getOwnPropertyDescriptor(t, e);
          a && Object.defineProperty(o, e, a.get ? a : {
            enumerable: true,
            get: () => t[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, c;
  function s() {
    if (c) return i;
    c = 1, i = o, o.displayName = "roboconf", o.aliases = [];
    function o(r) {
      r.languages.roboconf = {
        comment: /#.*/,
        keyword: {
          pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
          lookbehind: true
        },
        component: {
          pattern: /[\w-]+(?=[ \t]*\{)/,
          alias: "variable"
        },
        property: /[\w.-]+(?=[ \t]*:)/,
        value: {
          pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
          lookbehind: true,
          alias: "attr-value"
        },
        optional: {
          pattern: /\(optional\)/,
          alias: "builtin"
        },
        wildcard: {
          pattern: /(\.)\*/,
          lookbehind: true,
          alias: "operator"
        },
        punctuation: /[{},.;:=]/
      };
    }
    return i;
  }
  var f = s();
  let u;
  u = l(f);
  d = p({
    __proto__: null,
    default: u
  }, [
    f
  ]);
});
export {
  __tla,
  d as r
};
