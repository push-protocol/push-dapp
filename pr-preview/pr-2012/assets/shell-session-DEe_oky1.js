import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { r as c } from "./bash-CefCgV5_.js";
let S;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function g(t, r) {
    for (var n = 0; n < r.length; n++) {
      const e = r[n];
      if (typeof e != "string" && !Array.isArray(e)) {
        for (const s in e) if (s !== "default" && !(s in t)) {
          const o = Object.getOwnPropertyDescriptor(e, s);
          o && Object.defineProperty(t, s, o.get ? o : {
            enumerable: true,
            get: () => e[s]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, l;
  function p() {
    if (l) return a;
    l = 1;
    var t = c();
    a = r, r.displayName = "shellSession", r.aliases = [];
    function r(n) {
      n.register(t), function(e) {
        var s = [
          /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,
          /'[^']*'/.source,
          /\$'(?:[^'\\]|\\[\s\S])*'/.source,
          /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source
        ].join("|");
        e.languages["shell-session"] = {
          command: {
            pattern: RegExp(/^/.source + "(?:" + (/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source + "|" + /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source) + ")?" + /[$#%](?=\s)/.source + /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g, function() {
              return s;
            }), "m"),
            greedy: true,
            inside: {
              info: {
                pattern: /^[^#$%]+/,
                alias: "punctuation",
                inside: {
                  user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
                  punctuation: /:/,
                  path: /[\s\S]+/
                }
              },
              bash: {
                pattern: /(^[$#%]\s*)\S[\s\S]*/,
                lookbehind: true,
                alias: "language-bash",
                inside: e.languages.bash
              },
              "shell-symbol": {
                pattern: /^[$#%]/,
                alias: "important"
              }
            }
          },
          output: /.(?:.*(?:[\r\n]|.$))*/
        }, e.languages["sh-session"] = e.languages.shellsession = e.languages["shell-session"];
      }(n);
    }
    return a;
  }
  var i = p();
  let f;
  f = u(i);
  S = g({
    __proto__: null,
    default: f
  }, [
    i
  ]);
});
export {
  __tla,
  S as s
};
