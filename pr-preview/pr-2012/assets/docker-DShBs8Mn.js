import { eH as f, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let E;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function P(e, u) {
    for (var r = 0; r < u.length; r++) {
      const t = u[r];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const n in t) if (n !== "default" && !(n in e)) {
          const o = Object.getOwnPropertyDescriptor(t, n);
          o && Object.defineProperty(e, n, o.get ? o : {
            enumerable: true,
            get: () => t[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var c, p;
  function O() {
    if (p) return c;
    p = 1, c = e, e.displayName = "docker", e.aliases = [
      "dockerfile"
    ];
    function e(u) {
      (function(r) {
        var t = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source, n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function() {
          return t;
        }), o = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source, l = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function() {
          return o;
        }), s = {
          pattern: RegExp(o),
          greedy: true
        }, d = {
          pattern: /(^[ \t]*)#.*/m,
          lookbehind: true,
          greedy: true
        };
        function a(i, S) {
          return i = i.replace(/<OPT>/g, function() {
            return l;
          }).replace(/<SP>/g, function() {
            return n;
          }), RegExp(i, S);
        }
        r.languages.docker = {
          instruction: {
            pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: true,
            greedy: true,
            inside: {
              options: {
                pattern: a(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
                lookbehind: true,
                greedy: true,
                inside: {
                  property: {
                    pattern: /(^|\s)--[\w-]+/,
                    lookbehind: true
                  },
                  string: [
                    s,
                    {
                      pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                      lookbehind: true
                    }
                  ],
                  operator: /\\$/m,
                  punctuation: /=/
                }
              },
              keyword: [
                {
                  pattern: a(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
                  lookbehind: true,
                  greedy: true
                },
                {
                  pattern: a(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
                  lookbehind: true,
                  greedy: true
                },
                {
                  pattern: a(/(^ONBUILD<SP>)\w+/.source, "i"),
                  lookbehind: true,
                  greedy: true
                },
                {
                  pattern: /^\w+/,
                  greedy: true
                }
              ],
              comment: d,
              string: s,
              variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
              operator: /\\$/m
            }
          },
          comment: d
        }, r.languages.dockerfile = r.languages.docker;
      })(u);
    }
    return c;
  }
  var g = O();
  let k;
  k = f(g);
  E = P({
    __proto__: null,
    default: k
  }, [
    g
  ]);
});
export {
  __tla,
  E as d
};
