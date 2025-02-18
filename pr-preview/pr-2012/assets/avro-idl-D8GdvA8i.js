import { eH as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(e, r) {
    for (var a = 0; a < r.length; a++) {
      const t = r[a];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const o in t) if (o !== "default" && !(o in e)) {
          const n = Object.getOwnPropertyDescriptor(t, o);
          n && Object.defineProperty(e, o, n.get ? n : {
            enumerable: true,
            get: () => t[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var i, d;
  function f() {
    if (d) return i;
    d = 1, i = e, e.displayName = "avroIdl", e.aliases = [];
    function e(r) {
      r.languages["avro-idl"] = {
        comment: {
          pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
          greedy: true
        },
        string: {
          pattern: /(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,
          lookbehind: true,
          greedy: true
        },
        annotation: {
          pattern: /@(?:[$\w.-]|`[^\r\n`]+`)+/,
          greedy: true,
          alias: "function"
        },
        "function-identifier": {
          pattern: /`[^\r\n`]+`(?=\s*\()/,
          greedy: true,
          alias: "function"
        },
        identifier: {
          pattern: /`[^\r\n`]+`/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,
          lookbehind: true,
          greedy: true
        },
        keyword: /\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,
        function: /\b[a-z_]\w*(?=\s*\()/i,
        number: [
          {
            pattern: /(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,
            lookbehind: true
          },
          /-?\b(?:Infinity|NaN)\b/
        ],
        operator: /=/,
        punctuation: /[()\[\]{}<>.:,;-]/
      }, r.languages.avdl = r.languages["avro-idl"];
    }
    return i;
  }
  var l = f();
  let c;
  c = u(l);
  g = s({
    __proto__: null,
    default: c
  }, [
    l
  ]);
});
export {
  __tla,
  g as a
};
