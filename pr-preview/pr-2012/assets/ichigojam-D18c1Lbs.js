import { eH as c, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let L;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function R(e, E) {
    for (var i = 0; i < E.length; i++) {
      const r = E[i];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in e)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(e, t, o.get ? o : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var a, n;
  function T() {
    if (n) return a;
    n = 1, a = e, e.displayName = "ichigojam", e.aliases = [];
    function e(E) {
      E.languages.ichigojam = {
        comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
        string: {
          pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,
          greedy: true
        },
        number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
        keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GOTO|GSB|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RIGHT|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
        function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
        label: /(?:\B@\S+)/,
        operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
        punctuation: /[\[,;:()\]]/
      };
    }
    return a;
  }
  var N = T();
  let S;
  S = c(N);
  L = R({
    __proto__: null,
    default: S
  }, [
    N
  ]);
});
export {
  __tla,
  L as i
};
