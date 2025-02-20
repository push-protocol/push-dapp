import { eH as p, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function b(t, s) {
    for (var r = 0; r < s.length; r++) {
      const e = s[r];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const o in e) if (o !== "default" && !(o in t)) {
          const a = Object.getOwnPropertyDescriptor(e, o);
          a && Object.defineProperty(t, o, a.get ? a : {
            enumerable: true,
            get: () => e[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var n, i;
  function l() {
    if (i) return n;
    i = 1, n = t, t.displayName = "protobuf", t.aliases = [];
    function t(s) {
      (function(r) {
        var e = /\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;
        r.languages.protobuf = r.languages.extend("clike", {
          "class-name": [
            {
              pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
              lookbehind: true
            },
            {
              pattern: /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
              lookbehind: true
            }
          ],
          keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
          function: /\b[a-z_]\w*(?=\s*\()/i
        }), r.languages.insertBefore("protobuf", "operator", {
          map: {
            pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
            alias: "class-name",
            inside: {
              punctuation: /[<>.,]/,
              builtin: e
            }
          },
          builtin: e,
          "positional-class-name": {
            pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
            alias: "class-name",
            inside: {
              punctuation: /\./
            }
          },
          annotation: {
            pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
            lookbehind: true
          }
        });
      })(s);
    }
    return n;
  }
  var u = l();
  let f;
  f = p(u);
  d = b({
    __proto__: null,
    default: f
  }, [
    u
  ]);
});
export {
  __tla,
  d as p
};
