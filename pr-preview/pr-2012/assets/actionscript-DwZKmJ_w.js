import { eH as l, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(t, e) {
    for (var n = 0; n < e.length; n++) {
      const a = e[n];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const r in a) if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(a, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: true,
            get: () => a[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var c, s;
  function u() {
    if (s) return c;
    s = 1, c = t, t.displayName = "actionscript", t.aliases = [];
    function t(e) {
      e.languages.actionscript = e.languages.extend("javascript", {
        keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
        operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
      }), e.languages.actionscript["class-name"].alias = "function", delete e.languages.actionscript.parameter, delete e.languages.actionscript["literal-property"], e.languages.markup && e.languages.insertBefore("actionscript", "string", {
        xml: {
          pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
          lookbehind: true,
          inside: e.languages.markup
        }
      });
    }
    return c;
  }
  var o = u();
  let f;
  f = l(o);
  d = p({
    __proto__: null,
    default: f
  }, [
    o
  ]);
});
export {
  __tla,
  d as a
};
