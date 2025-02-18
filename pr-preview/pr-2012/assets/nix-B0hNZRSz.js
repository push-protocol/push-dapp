import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(t, e) {
    for (var i = 0; i < e.length; i++) {
      const r = e[i];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const n in r) if (n !== "default" && !(n in t)) {
          const a = Object.getOwnPropertyDescriptor(r, n);
          a && Object.defineProperty(t, n, a.get ? a : {
            enumerable: true,
            get: () => r[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, o;
  function p() {
    if (o) return s;
    o = 1, s = t, t.displayName = "nix", t.aliases = [];
    function t(e) {
      e.languages.nix = {
        comment: {
          pattern: /\/\*[\s\S]*?\*\/|#.*/,
          greedy: true
        },
        string: {
          pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,
              lookbehind: true,
              inside: null
            }
          }
        },
        url: [
          /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
          {
            pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
            lookbehind: true
          }
        ],
        antiquotation: {
          pattern: /\$(?=\{)/,
          alias: "important"
        },
        number: /\b\d+\b/,
        keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
        function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
        boolean: /\b(?:false|true)\b/,
        operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
        punctuation: /[{}()[\].,:;]/
      }, e.languages.nix.string.inside.interpolation.inside = e.languages.nix;
    }
    return s;
  }
  var l = p();
  let c;
  c = u(l);
  f = g({
    __proto__: null,
    default: c
  }, [
    l
  ]);
});
export {
  __tla,
  f as n
};
