import { eH as d, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function p(e, r) {
    for (var a = 0; a < r.length; a++) {
      const t = r[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const i in t) if (i !== "default" && !(i in e)) {
          const n = Object.getOwnPropertyDescriptor(t, i);
          n && Object.defineProperty(e, i, n.get ? n : {
            enumerable: true,
            get: () => t[i]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, u;
  function l() {
    if (u) return s;
    u = 1, s = e, e.displayName = "uri", e.aliases = [
      "url"
    ];
    function e(r) {
      r.languages.uri = {
        scheme: {
          pattern: /^[a-z][a-z0-9+.-]*:/im,
          greedy: true,
          inside: {
            "scheme-delimiter": /:$/
          }
        },
        fragment: {
          pattern: /#[\w\-.~!$&'()*+,;=%:@/?]*/,
          inside: {
            "fragment-delimiter": /^#/
          }
        },
        query: {
          pattern: /\?[\w\-.~!$&'()*+,;=%:@/?]*/,
          inside: {
            "query-delimiter": {
              pattern: /^\?/,
              greedy: true
            },
            "pair-delimiter": /[&;]/,
            pair: {
              pattern: /^[^=][\s\S]*/,
              inside: {
                key: /^[^=]+/,
                value: {
                  pattern: /(^=)[\s\S]+/,
                  lookbehind: true
                }
              }
            }
          }
        },
        authority: {
          pattern: RegExp(/^\/\//.source + /(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source + ("(?:" + /\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source + "|" + /[\w\-.~!$&'()*+,;=%]*/.source + ")") + /(?::\d*)?/.source, "m"),
          inside: {
            "authority-delimiter": /^\/\//,
            "user-info-segment": {
              pattern: /^[\w\-.~!$&'()*+,;=%:]*@/,
              inside: {
                "user-info-delimiter": /@$/,
                "user-info": /^[\w\-.~!$&'()*+,;=%:]+/
              }
            },
            "port-segment": {
              pattern: /:\d*$/,
              inside: {
                "port-delimiter": /^:/,
                port: /^\d+/
              }
            },
            host: {
              pattern: /[\s\S]+/,
              inside: {
                "ip-literal": {
                  pattern: /^\[[\s\S]+\]$/,
                  inside: {
                    "ip-literal-delimiter": /^\[|\]$/,
                    "ipv-future": /^v[\s\S]+/,
                    "ipv6-address": /^[\s\S]+/
                  }
                },
                "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/
              }
            }
          }
        },
        path: {
          pattern: /^[\w\-.~!$&'()*+,;=%:@/]+/m,
          inside: {
            "path-separator": /\//
          }
        }
      }, r.languages.url = r.languages.uri;
    }
    return s;
  }
  var o = l();
  let f;
  f = d(o);
  m = p({
    __proto__: null,
    default: f
  }, [
    o
  ]);
});
export {
  __tla,
  m as u
};
