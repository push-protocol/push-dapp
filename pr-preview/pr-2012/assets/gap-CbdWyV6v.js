import { eH as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(e, t) {
    for (var a = 0; a < t.length; a++) {
      const n = t[a];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const r in n) if (r !== "default" && !(r in e)) {
          const o = Object.getOwnPropertyDescriptor(n, r);
          o && Object.defineProperty(e, r, o.get ? o : {
            enumerable: true,
            get: () => n[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, u;
  function d() {
    if (u) return i;
    u = 1, i = e, e.displayName = "gap", e.aliases = [];
    function e(t) {
      t.languages.gap = {
        shell: {
          pattern: /^gap>[\s\S]*?(?=^gap>|$(?![\s\S]))/m,
          greedy: true,
          inside: {
            gap: {
              pattern: /^(gap>).+(?:(?:\r(?:\n|(?!\n))|\n)>.*)*/,
              lookbehind: true,
              inside: null
            },
            punctuation: /^gap>/
          }
        },
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        string: {
          pattern: /(^|[^\\'"])(?:'(?:[^\r\n\\']|\\.){1,10}'|"(?:[^\r\n\\"]|\\.)*"(?!")|"""[\s\S]*?""")/,
          lookbehind: true,
          greedy: true,
          inside: {
            continuation: {
              pattern: /([\r\n])>/,
              lookbehind: true,
              alias: "punctuation"
            }
          }
        },
        keyword: /\b(?:Assert|Info|IsBound|QUIT|TryNextMethod|Unbind|and|atomic|break|continue|do|elif|else|end|fi|for|function|if|in|local|mod|not|od|or|quit|readonly|readwrite|rec|repeat|return|then|until|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b[a-z_]\w*(?=\s*\()/i,
        number: {
          pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,
          lookbehind: true
        },
        continuation: {
          pattern: /([\r\n])>/,
          lookbehind: true,
          alias: "punctuation"
        },
        operator: /->|[-+*/^~=!]|<>|[<>]=?|:=|\.\./,
        punctuation: /[()[\]{},;.:]/
      }, t.languages.gap.shell.inside.gap.inside = t.languages.gap;
    }
    return i;
  }
  var p = d();
  let g;
  g = s(p);
  f = l({
    __proto__: null,
    default: g
  }, [
    p
  ]);
});
export {
  __tla,
  f as g
};
