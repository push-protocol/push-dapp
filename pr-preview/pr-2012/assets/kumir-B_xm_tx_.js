import { eH as p, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(r, a) {
    for (var n = 0; n < a.length; n++) {
      const o = a[n];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const e in o) if (e !== "default" && !(e in r)) {
          const t = Object.getOwnPropertyDescriptor(o, e);
          t && Object.defineProperty(r, e, t.get ? t : {
            enumerable: true,
            get: () => o[e]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var u, d;
  function c() {
    if (d) return u;
    d = 1, u = r, r.displayName = "kumir", r.aliases = [
      "kum"
    ];
    function r(a) {
      (function(n) {
        var o = /\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;
        function e(t, s) {
          return RegExp(t.replace(/<nonId>/g, o), s);
        }
        n.languages.kumir = {
          comment: {
            pattern: /\|.*/
          },
          prolog: {
            pattern: /#.*/,
            greedy: true
          },
          string: {
            pattern: /"[^\n\r"]*"|'[^\n\r']*'/,
            greedy: true
          },
          boolean: {
            pattern: e(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source),
            lookbehind: true
          },
          "operator-word": {
            pattern: e(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source),
            lookbehind: true,
            alias: "keyword"
          },
          "system-variable": {
            pattern: e(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source),
            lookbehind: true,
            alias: "keyword"
          },
          type: [
            {
              pattern: e(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source),
              lookbehind: true,
              alias: "builtin"
            },
            {
              pattern: e(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source),
              lookbehind: true,
              alias: "important"
            }
          ],
          keyword: {
            pattern: e(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source),
            lookbehind: true
          },
          name: {
            pattern: e(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source),
            lookbehind: true
          },
          number: {
            pattern: e(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source, "i"),
            lookbehind: true
          },
          punctuation: /:=|[(),:;\[\]]/,
          "operator-char": {
            pattern: /\*\*?|<[=>]?|>=?|[-+/=]/,
            alias: "operator"
          }
        }, n.languages.kum = n.languages.kumir;
      })(a);
    }
    return u;
  }
  var i = c();
  let f;
  f = p(i);
  m = l({
    __proto__: null,
    default: f
  }, [
    i
  ]);
});
export {
  __tla,
  m as k
};
