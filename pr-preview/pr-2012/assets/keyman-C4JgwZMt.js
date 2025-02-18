import { eH as u, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(e, r) {
    for (var n = 0; n < r.length; n++) {
      const a = r[n];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const t in a) if (t !== "default" && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(a, t);
          o && Object.defineProperty(e, t, o.get ? o : {
            enumerable: true,
            get: () => a[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, i;
  function p() {
    if (i) return s;
    i = 1, s = e, e.displayName = "keyman", e.aliases = [];
    function e(r) {
      r.languages.keyman = {
        comment: {
          pattern: /\bc .*/i,
          greedy: true
        },
        string: {
          pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
          greedy: true
        },
        "virtual-key": {
          pattern: /\[\s*(?:(?:ALT|CAPS|CTRL|LALT|LCTRL|NCAPS|RALT|RCTRL|SHIFT)\s+)*(?:[TKU]_[\w?]+|[A-E]\d\d?|"[^"\r\n]*"|'[^'\r\n]*')\s*\]/i,
          greedy: true,
          alias: "function"
        },
        "header-keyword": {
          pattern: /&\w+/,
          alias: "bold"
        },
        "header-statement": {
          pattern: /\b(?:bitmap|bitmaps|caps always off|caps on only|copyright|hotkey|language|layout|message|name|shift frees caps|version)\b/i,
          alias: "bold"
        },
        "rule-keyword": {
          pattern: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|reset|return|save|set|store|use)\b/i,
          alias: "keyword"
        },
        "structural-keyword": {
          pattern: /\b(?:ansi|begin|group|match|nomatch|unicode|using keys)\b/i,
          alias: "keyword"
        },
        "compile-target": {
          pattern: /\$(?:keyman|keymanonly|keymanweb|kmfl|weaver):/i,
          alias: "property"
        },
        number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
        operator: /[+>\\$]|\.\./,
        punctuation: /[()=,]/
      };
    }
    return s;
  }
  var y = p();
  let d;
  d = u(y);
  c = l({
    __proto__: null,
    default: d
  }, [
    y
  ]);
});
export {
  __tla,
  c as k
};
