import { eH as f, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { r as u } from "./php-E3TmF6re.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function c(t, r) {
    for (var e = 0; e < r.length; e++) {
      const a = r[e];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const p in a) if (p !== "default" && !(p in t)) {
          const s = Object.getOwnPropertyDescriptor(a, p);
          s && Object.defineProperty(t, p, s.get ? s : {
            enumerable: true,
            get: () => a[p]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, n;
  function E() {
    if (n) return o;
    n = 1;
    var t = u();
    o = r, r.displayName = "phpExtras", r.aliases = [];
    function r(e) {
      e.register(t), e.languages.insertBefore("php", "variable", {
        this: {
          pattern: /\$this\b/,
          alias: "keyword"
        },
        global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
        scope: {
          pattern: /\b[\w\\]+::/,
          inside: {
            keyword: /\b(?:parent|self|static)\b/,
            punctuation: /::|\\/
          }
        }
      });
    }
    return o;
  }
  var i = E();
  let h;
  h = f(i);
  b = c({
    __proto__: null,
    default: h
  }, [
    i
  ]);
});
export {
  __tla,
  b as p
};
