import { eH as i, __tla as __tla_0 } from "./index-AGa8OPve.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function l(e, u) {
    for (var n = 0; n < u.length; n++) {
      const t = u[n];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var f, d;
  function s() {
    if (d) return f;
    d = 1, f = e, e.displayName = "bsl", e.aliases = [];
    function e(u) {
      u.languages.bsl = {
        comment: /\/\/.*/,
        string: [
          {
            pattern: /"(?:[^"]|"")*"(?!")/,
            greedy: true
          },
          {
            pattern: /'(?:[^'\r\n\\]|\\.)*'/
          }
        ],
        keyword: [
          {
            pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
            lookbehind: true
          },
          {
            pattern: /\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i
          }
        ],
        number: {
          pattern: /(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,
          lookbehind: true
        },
        operator: [
          /[<>+\-*/]=?|[%=]/,
          {
            pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
            lookbehind: true
          },
          {
            pattern: /\b(?:and|not|or)\b/i
          }
        ],
        punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
        directive: [
          {
            pattern: /^([ \t]*)&.*/m,
            lookbehind: true,
            greedy: true,
            alias: "important"
          },
          {
            pattern: /^([ \t]*)#.*/gm,
            lookbehind: true,
            greedy: true,
            alias: "important"
          }
        ]
      }, u.languages.oscript = u.languages.bsl;
    }
    return f;
  }
  var o = s();
  let b;
  b = i(o);
  c = l({
    __proto__: null,
    default: b
  }, [
    o
  ]);
});
export {
  __tla,
  c as b
};
