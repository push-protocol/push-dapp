import { eH as s, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function d(n, i) {
    for (var a = 0; a < i.length; a++) {
      const r = i[a];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in n)) {
          const e = Object.getOwnPropertyDescriptor(r, t);
          e && Object.defineProperty(n, t, e.get ? e : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var o, l;
  function p() {
    if (l) return o;
    l = 1, o = n, n.displayName = "stylus", n.aliases = [];
    function n(i) {
      (function(a) {
        var r = {
          pattern: /(\b\d+)(?:%|[a-z]+)/,
          lookbehind: true
        }, t = {
          pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
          lookbehind: true
        }, e = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: true
          },
          url: {
            pattern: /\burl\((["']?).*?\1\)/i,
            greedy: true
          },
          string: {
            pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
            greedy: true
          },
          interpolation: null,
          func: null,
          important: /\B!(?:important|optional)\b/i,
          keyword: {
            pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
            lookbehind: true
          },
          hexcode: /#[\da-f]{3,6}/i,
          color: [
            /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
            {
              pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
              inside: {
                unit: r,
                number: t,
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
              }
            }
          ],
          entity: /\\[\da-f]{1,8}/i,
          unit: r,
          boolean: /\b(?:false|true)\b/,
          operator: [
            /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
          ],
          number: t,
          punctuation: /[{}()\[\];:,]/
        };
        e.interpolation = {
          pattern: /\{[^\r\n}:]+\}/,
          alias: "variable",
          inside: {
            delimiter: {
              pattern: /^\{|\}$/,
              alias: "punctuation"
            },
            rest: e
          }
        }, e.func = {
          pattern: /[\w-]+\([^)]*\).*/,
          inside: {
            function: /^[^(]+/,
            rest: e
          }
        }, a.languages.stylus = {
          "atrule-declaration": {
            pattern: /(^[ \t]*)@.+/m,
            lookbehind: true,
            inside: {
              atrule: /^@[\w-]+/,
              rest: e
            }
          },
          "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
            lookbehind: true,
            inside: {
              variable: /^\S+/,
              rest: e
            }
          },
          statement: {
            pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
            lookbehind: true,
            inside: {
              keyword: /^\S+/,
              rest: e
            }
          },
          "property-declaration": {
            pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
            lookbehind: true,
            inside: {
              property: {
                pattern: /^[^\s:]+/,
                inside: {
                  interpolation: e.interpolation
                }
              },
              rest: e
            }
          },
          selector: {
            pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
            lookbehind: true,
            inside: {
              interpolation: e.interpolation,
              comment: e.comment,
              punctuation: /[{},]/
            }
          },
          func: e.func,
          string: e.string,
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: true,
            greedy: true
          },
          interpolation: e.interpolation,
          punctuation: /[{}()\[\];:.]/
        };
      })(i);
    }
    return o;
  }
  var u = p();
  let h;
  h = s(u);
  c = d({
    __proto__: null,
    default: h
  }, [
    u
  ]);
});
export {
  __tla,
  c as s
};
