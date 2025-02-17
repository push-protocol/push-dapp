import { eH as u, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(e, n) {
    for (var o = 0; o < n.length; o++) {
      const t = n[o];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const s = Object.getOwnPropertyDescriptor(t, r);
          s && Object.defineProperty(e, r, s.get ? s : {
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
  var a, d;
  function p() {
    if (d) return a;
    d = 1, a = e, e.displayName = "neon", e.aliases = [];
    function e(n) {
      n.languages.neon = {
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        datetime: {
          pattern: /(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,
          lookbehind: true,
          alias: "number"
        },
        key: {
          pattern: /(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,
          lookbehind: true,
          alias: "atrule"
        },
        number: {
          pattern: /(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,
          lookbehind: true
        },
        boolean: {
          pattern: /(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,
          lookbehind: true
        },
        null: {
          pattern: /(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,
          lookbehind: true,
          alias: "keyword"
        },
        string: {
          pattern: /(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,
          lookbehind: true,
          greedy: true
        },
        literal: {
          pattern: /(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,
          lookbehind: true,
          alias: "string"
        },
        punctuation: /[,:=[\]{}()-]/
      };
    }
    return a;
  }
  var i = p();
  let f;
  f = u(i);
  c = l({
    __proto__: null,
    default: f
  }, [
    i
  ]);
});
export {
  __tla,
  c as n
};
