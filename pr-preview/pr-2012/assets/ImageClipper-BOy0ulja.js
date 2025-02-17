import { eH as Ee, fH as V, e7 as z, ea as ae, fI as _e, ej as ye, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let Ve;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Be = {
    exports: {}
  };
  (function(Q, l) {
    (function(A) {
      Q.exports = A();
    })(function() {
      return (/* @__PURE__ */ function() {
        function A(n, _, u) {
          function v(r, s) {
            if (!_[r]) {
              if (!n[r]) {
                var e = typeof V == "function" && V;
                if (!s && e) return e(r, true);
                if (i) return i(r, true);
                var o = new Error("Cannot find module '" + r + "'");
                throw o.code = "MODULE_NOT_FOUND", o;
              }
              var m = _[r] = {
                exports: {}
              };
              n[r][0].call(m.exports, function(a) {
                var c = n[r][1][a];
                return v(c || a);
              }, m, m.exports, A, n, _, u);
            }
            return _[r].exports;
          }
          for (var i = typeof V == "function" && V, t = 0; t < u.length; t++) v(u[t]);
          return v;
        }
        return A;
      }())({
        1: [
          function(A, n, _) {
            var u = A("multimath"), v = A("./mm_unsharp_mask"), i = A("./mm_resize");
            function t(r) {
              var s = r || [], e = {
                js: s.indexOf("js") >= 0,
                wasm: s.indexOf("wasm") >= 0
              };
              u.call(this, e), this.features = {
                js: e.js,
                wasm: e.wasm && this.has_wasm()
              }, this.use(v), this.use(i);
            }
            t.prototype = Object.create(u.prototype), t.prototype.constructor = t, t.prototype.resizeAndUnsharp = function(s, e) {
              var o = this.resize(s, e);
              return s.unsharpAmount && this.unsharp_mask(o, s.toWidth, s.toHeight, s.unsharpAmount, s.unsharpRadius, s.unsharpThreshold), o;
            }, n.exports = t;
          },
          {
            "./mm_resize": 4,
            "./mm_unsharp_mask": 9,
            multimath: 19
          }
        ],
        2: [
          function(A, n, _) {
            function u(e) {
              return e < 0 ? 0 : e > 255 ? 255 : e;
            }
            function v(e) {
              return e >= 0 ? e : 0;
            }
            function i(e, o, m, a, c, h) {
              var d, B, b, C, R, U, M, g, E, D, x, O = 0, k = 0;
              for (E = 0; E < a; E++) {
                for (R = 0, D = 0; D < c; D++) {
                  for (U = h[R++], M = h[R++], g = O + U * 4 | 0, d = B = b = C = 0; M > 0; M--) x = h[R++], C = C + x * e[g + 3] | 0, b = b + x * e[g + 2] | 0, B = B + x * e[g + 1] | 0, d = d + x * e[g] | 0, g = g + 4 | 0;
                  o[k + 3] = v(C >> 7), o[k + 2] = v(b >> 7), o[k + 1] = v(B >> 7), o[k] = v(d >> 7), k = k + a * 4 | 0;
                }
                k = (E + 1) * 4 | 0, O = (E + 1) * m * 4 | 0;
              }
            }
            function t(e, o, m, a, c, h) {
              var d, B, b, C, R, U, M, g, E, D, x, O = 0, k = 0;
              for (E = 0; E < a; E++) {
                for (R = 0, D = 0; D < c; D++) {
                  for (U = h[R++], M = h[R++], g = O + U * 4 | 0, d = B = b = C = 0; M > 0; M--) x = h[R++], C = C + x * e[g + 3] | 0, b = b + x * e[g + 2] | 0, B = B + x * e[g + 1] | 0, d = d + x * e[g] | 0, g = g + 4 | 0;
                  d >>= 7, B >>= 7, b >>= 7, C >>= 7, o[k + 3] = u(C + 8192 >> 14), o[k + 2] = u(b + 8192 >> 14), o[k + 1] = u(B + 8192 >> 14), o[k] = u(d + 8192 >> 14), k = k + a * 4 | 0;
                }
                k = (E + 1) * 4 | 0, O = (E + 1) * m * 4 | 0;
              }
            }
            function r(e, o, m, a, c, h) {
              var d, B, b, C, R, U, M, g, E, D, x, O, k = 0, j = 0;
              for (D = 0; D < a; D++) {
                for (U = 0, x = 0; x < c; x++) {
                  for (M = h[U++], g = h[U++], E = k + M * 4 | 0, d = B = b = C = 0; g > 0; g--) O = h[U++], R = e[E + 3], C = C + O * R | 0, b = b + O * e[E + 2] * R | 0, B = B + O * e[E + 1] * R | 0, d = d + O * e[E] * R | 0, E = E + 4 | 0;
                  b = b / 255 | 0, B = B / 255 | 0, d = d / 255 | 0, o[j + 3] = v(C >> 7), o[j + 2] = v(b >> 7), o[j + 1] = v(B >> 7), o[j] = v(d >> 7), j = j + a * 4 | 0;
                }
                j = (D + 1) * 4 | 0, k = (D + 1) * m * 4 | 0;
              }
            }
            function s(e, o, m, a, c, h) {
              var d, B, b, C, R, U, M, g, E, D, x, O = 0, k = 0;
              for (E = 0; E < a; E++) {
                for (R = 0, D = 0; D < c; D++) {
                  for (U = h[R++], M = h[R++], g = O + U * 4 | 0, d = B = b = C = 0; M > 0; M--) x = h[R++], C = C + x * e[g + 3] | 0, b = b + x * e[g + 2] | 0, B = B + x * e[g + 1] | 0, d = d + x * e[g] | 0, g = g + 4 | 0;
                  d >>= 7, B >>= 7, b >>= 7, C >>= 7, C = u(C + 8192 >> 14), C > 0 && (d = d * 255 / C | 0, B = B * 255 / C | 0, b = b * 255 / C | 0), o[k + 3] = C, o[k + 2] = u(b + 8192 >> 14), o[k + 1] = u(B + 8192 >> 14), o[k] = u(d + 8192 >> 14), k = k + a * 4 | 0;
                }
                k = (E + 1) * 4 | 0, O = (E + 1) * m * 4 | 0;
              }
            }
            n.exports = {
              convolveHor: i,
              convolveVert: t,
              convolveHorWithPre: r,
              convolveVertWithPre: s
            };
          },
          {}
        ],
        3: [
          function(A, n, _) {
            n.exports = "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";
          },
          {}
        ],
        4: [
          function(A, n, _) {
            n.exports = {
              name: "resize",
              fn: A("./resize"),
              wasm_fn: A("./resize_wasm"),
              wasm_src: A("./convolve_wasm_base64")
            };
          },
          {
            "./convolve_wasm_base64": 3,
            "./resize": 5,
            "./resize_wasm": 8
          }
        ],
        5: [
          function(A, n, _) {
            var u = A("./resize_filter_gen"), v = A("./convolve"), i = v.convolveHor, t = v.convolveVert, r = v.convolveHorWithPre, s = v.convolveVertWithPre;
            function e(m, a, c) {
              for (var h = 3, d = a * c * 4 | 0; h < d; ) {
                if (m[h] !== 255) return true;
                h = h + 4 | 0;
              }
              return false;
            }
            function o(m, a, c) {
              for (var h = 3, d = a * c * 4 | 0; h < d; ) m[h] = 255, h = h + 4 | 0;
            }
            n.exports = function(a) {
              var c = a.src, h = a.width, d = a.height, B = a.toWidth, b = a.toHeight, C = a.scaleX || a.toWidth / a.width, R = a.scaleY || a.toHeight / a.height, U = a.offsetX || 0, M = a.offsetY || 0, g = a.dest || new Uint8Array(B * b * 4), E = typeof a.filter > "u" ? "mks2013" : a.filter, D = u(E, h, B, C, U), x = u(E, d, b, R, M), O = new Uint16Array(B * d * 4);
              return e(c, h, d) ? (r(c, O, h, d, B, D), s(O, g, d, B, b, x)) : (i(c, O, h, d, B, D), t(O, g, d, B, b, x), o(g, B, b)), g;
            };
          },
          {
            "./convolve": 2,
            "./resize_filter_gen": 6
          }
        ],
        6: [
          function(A, n, _) {
            var u = A("./resize_filter_info"), v = 14;
            function i(t) {
              return Math.round(t * ((1 << v) - 1));
            }
            n.exports = function(r, s, e, o, m) {
              var a = u.filter[r].fn, c = 1 / o, h = Math.min(1, o), d = u.filter[r].win / h, B, b, C, R, U, M, g, E, D, x, O, k, j, P, f, p, I, y = Math.floor((d + 1) * 2), w = new Int16Array((y + 2) * e), S = 0, F = !w.subarray || !w.set;
              for (B = 0; B < e; B++) {
                for (b = (B + 0.5) * c + m, C = Math.max(0, Math.floor(b - d)), R = Math.min(s - 1, Math.ceil(b + d)), U = R - C + 1, M = new Float32Array(U), g = new Int16Array(U), E = 0, D = C, x = 0; D <= R; D++, x++) O = a((D + 0.5 - b) * h), E += O, M[x] = O;
                for (k = 0, x = 0; x < M.length; x++) j = M[x] / E, k += j, g[x] = i(j);
                for (g[e >> 1] += i(1 - k), P = 0; P < g.length && g[P] === 0; ) P++;
                if (P < g.length) {
                  for (f = g.length - 1; f > 0 && g[f] === 0; ) f--;
                  if (p = C + P, I = f - P + 1, w[S++] = p, w[S++] = I, !F) w.set(g.subarray(P, f + 1), S), S += I;
                  else for (x = P; x <= f; x++) w[S++] = g[x];
                } else w[S++] = 0, w[S++] = 0;
              }
              return w;
            };
          },
          {
            "./resize_filter_info": 7
          }
        ],
        7: [
          function(A, n, _) {
            var u = {
              box: {
                win: 0.5,
                fn: function(i) {
                  return i < 0 && (i = -i), i < 0.5 ? 1 : 0;
                }
              },
              hamming: {
                win: 1,
                fn: function(i) {
                  if (i < 0 && (i = -i), i >= 1) return 0;
                  if (i < 11920929e-14) return 1;
                  var t = i * Math.PI;
                  return Math.sin(t) / t * (0.54 + 0.46 * Math.cos(t / 1));
                }
              },
              lanczos2: {
                win: 2,
                fn: function(i) {
                  if (i < 0 && (i = -i), i >= 2) return 0;
                  if (i < 11920929e-14) return 1;
                  var t = i * Math.PI;
                  return Math.sin(t) / t * Math.sin(t / 2) / (t / 2);
                }
              },
              lanczos3: {
                win: 3,
                fn: function(i) {
                  if (i < 0 && (i = -i), i >= 3) return 0;
                  if (i < 11920929e-14) return 1;
                  var t = i * Math.PI;
                  return Math.sin(t) / t * Math.sin(t / 3) / (t / 3);
                }
              },
              mks2013: {
                win: 2.5,
                fn: function(i) {
                  return i < 0 && (i = -i), i >= 2.5 ? 0 : i >= 1.5 ? -0.125 * (i - 2.5) * (i - 2.5) : i >= 0.5 ? 0.25 * (4 * i * i - 11 * i + 7) : 1.0625 - 1.75 * i * i;
                }
              }
            };
            n.exports = {
              filter: u,
              f2q: {
                box: 0,
                hamming: 1,
                lanczos2: 2,
                lanczos3: 3
              },
              q2f: [
                "box",
                "hamming",
                "lanczos2",
                "lanczos3"
              ]
            };
          },
          {}
        ],
        8: [
          function(A, n, _) {
            var u = A("./resize_filter_gen");
            function v(e, o, m) {
              for (var a = 3, c = o * m * 4 | 0; a < c; ) {
                if (e[a] !== 255) return true;
                a = a + 4 | 0;
              }
              return false;
            }
            function i(e, o, m) {
              for (var a = 3, c = o * m * 4 | 0; a < c; ) e[a] = 255, a = a + 4 | 0;
            }
            function t(e) {
              return new Uint8Array(e.buffer, 0, e.byteLength);
            }
            var r = true;
            try {
              r = new Uint32Array(new Uint8Array([
                1,
                0,
                0,
                0
              ]).buffer)[0] === 1;
            } catch {
            }
            function s(e, o, m) {
              if (r) {
                o.set(t(e), m);
                return;
              }
              for (var a = m, c = 0; c < e.length; c++) {
                var h = e[c];
                o[a++] = h & 255, o[a++] = h >> 8 & 255;
              }
            }
            n.exports = function(o) {
              var m = o.src, a = o.width, c = o.height, h = o.toWidth, d = o.toHeight, B = o.scaleX || o.toWidth / o.width, b = o.scaleY || o.toHeight / o.height, C = o.offsetX || 0, R = o.offsetY || 0, U = o.dest || new Uint8Array(h * d * 4), M = typeof o.filter > "u" ? "mks2013" : o.filter, g = u(M, a, h, B, C), E = u(M, c, d, b, R), D = 0, x = Math.max(m.byteLength, U.byteLength), O = this.__align(D + x), k = c * h * 4 * 2, j = this.__align(O + k), P = this.__align(j + g.byteLength), f = P + E.byteLength, p = this.__instance("resize", f), I = new Uint8Array(this.__memory.buffer), y = new Uint32Array(this.__memory.buffer), w = new Uint32Array(m.buffer);
              y.set(w), s(g, I, j), s(E, I, P);
              var S = p.exports.convolveHV || p.exports._convolveHV;
              v(m, a, c) ? S(j, P, O, a, c, h, d, 1) : (S(j, P, O, a, c, h, d, 0), i(U, h, d));
              var F = new Uint32Array(U.buffer);
              return F.set(new Uint32Array(this.__memory.buffer, 0, d * h)), U;
            };
          },
          {
            "./resize_filter_gen": 6
          }
        ],
        9: [
          function(A, n, _) {
            n.exports = {
              name: "unsharp_mask",
              fn: A("./unsharp_mask"),
              wasm_fn: A("./unsharp_mask_wasm"),
              wasm_src: A("./unsharp_mask_wasm_base64")
            };
          },
          {
            "./unsharp_mask": 10,
            "./unsharp_mask_wasm": 11,
            "./unsharp_mask_wasm_base64": 12
          }
        ],
        10: [
          function(A, n, _) {
            var u = A("glur/mono16");
            function v(i, t, r) {
              for (var s = t * r, e = new Uint16Array(s), o, m, a, c, h = 0; h < s; h++) o = i[4 * h], m = i[4 * h + 1], a = i[4 * h + 2], c = o >= m && o >= a ? o : m >= a && m >= o ? m : a, e[h] = c << 8;
              return e;
            }
            n.exports = function(t, r, s, e, o, m) {
              var a, c, h, d, B;
              if (!(e === 0 || o < 0.5)) {
                o > 2 && (o = 2);
                var b = v(t, r, s), C = new Uint16Array(b);
                u(C, r, s, o);
                for (var R = e / 100 * 4096 + 0.5 | 0, U = m << 8, M = r * s, g = 0; g < M; g++) a = b[g], d = a - C[g], Math.abs(d) >= U && (c = a + (R * d + 2048 >> 12), c = c > 65280 ? 65280 : c, c = c < 0 ? 0 : c, a = a !== 0 ? a : 1, h = (c << 12) / a | 0, B = g * 4, t[B] = t[B] * h + 2048 >> 12, t[B + 1] = t[B + 1] * h + 2048 >> 12, t[B + 2] = t[B + 2] * h + 2048 >> 12);
              }
            };
          },
          {
            "glur/mono16": 18
          }
        ],
        11: [
          function(A, n, _) {
            n.exports = function(v, i, t, r, s, e) {
              if (!(r === 0 || s < 0.5)) {
                s > 2 && (s = 2);
                var o = i * t, m = o * 4, a = o * 2, c = o * 2, h = Math.max(i, t) * 4, d = 8 * 4, B = 0, b = m, C = b + a, R = C + c, U = R + c, M = U + h, g = this.__instance("unsharp_mask", m + a + c * 2 + h + d, {
                  exp: Math.exp
                }), E = new Uint32Array(v.buffer), D = new Uint32Array(this.__memory.buffer);
                D.set(E);
                var x = g.exports.hsv_v16 || g.exports._hsv_v16;
                x(B, b, i, t), x = g.exports.blurMono16 || g.exports._blurMono16, x(b, C, R, U, M, i, t, s), x = g.exports.unsharp || g.exports._unsharp, x(B, B, b, C, i, t, r, e), E.set(new Uint32Array(this.__memory.buffer, 0, o));
              }
            };
          },
          {}
        ],
        12: [
          function(A, n, _) {
            n.exports = "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";
          },
          {}
        ],
        13: [
          function(A, n, _) {
            var u = 100;
            function v(i, t) {
              this.create = i, this.available = [], this.acquired = {}, this.lastId = 1, this.timeoutId = 0, this.idle = t || 2e3;
            }
            v.prototype.acquire = function() {
              var i = this, t;
              return this.available.length !== 0 ? t = this.available.pop() : (t = this.create(), t.id = this.lastId++, t.release = function() {
                return i.release(t);
              }), this.acquired[t.id] = t, t;
            }, v.prototype.release = function(i) {
              var t = this;
              delete this.acquired[i.id], i.lastUsed = Date.now(), this.available.push(i), this.timeoutId === 0 && (this.timeoutId = setTimeout(function() {
                return t.gc();
              }, u));
            }, v.prototype.gc = function() {
              var i = this, t = Date.now();
              this.available = this.available.filter(function(r) {
                return t - r.lastUsed > i.idle ? (r.destroy(), false) : true;
              }), this.available.length !== 0 ? this.timeoutId = setTimeout(function() {
                return i.gc();
              }, u) : this.timeoutId = 0;
            }, n.exports = v;
          },
          {}
        ],
        14: [
          function(A, n, _) {
            var u = 2;
            n.exports = function(i, t, r, s, e, o) {
              var m = r / i, a = s / t, c = (2 * o + u + 1) / e;
              if (c > 0.5) return [
                [
                  r,
                  s
                ]
              ];
              var h = Math.ceil(Math.log(Math.min(m, a)) / Math.log(c));
              if (h <= 1) return [
                [
                  r,
                  s
                ]
              ];
              for (var d = [], B = 0; B < h; B++) {
                var b = Math.round(Math.pow(Math.pow(i, h - B - 1) * Math.pow(r, B + 1), 1 / h)), C = Math.round(Math.pow(Math.pow(t, h - B - 1) * Math.pow(s, B + 1), 1 / h));
                d.push([
                  b,
                  C
                ]);
              }
              return d;
            };
          },
          {}
        ],
        15: [
          function(A, n, _) {
            var u = 1e-5;
            function v(t) {
              var r = Math.round(t);
              return Math.abs(t - r) < u ? r : Math.floor(t);
            }
            function i(t) {
              var r = Math.round(t);
              return Math.abs(t - r) < u ? r : Math.ceil(t);
            }
            n.exports = function(r) {
              var s = r.toWidth / r.width, e = r.toHeight / r.height, o = v(r.srcTileSize * s) - 2 * r.destTileBorder, m = v(r.srcTileSize * e) - 2 * r.destTileBorder;
              if (o < 1 || m < 1) throw new Error("Internal error in pica: target tile width/height is too small.");
              var a, c, h, d, B, b, C = [], R;
              for (d = 0; d < r.toHeight; d += m) for (h = 0; h < r.toWidth; h += o) a = h - r.destTileBorder, a < 0 && (a = 0), B = h + o + r.destTileBorder - a, a + B >= r.toWidth && (B = r.toWidth - a), c = d - r.destTileBorder, c < 0 && (c = 0), b = d + m + r.destTileBorder - c, c + b >= r.toHeight && (b = r.toHeight - c), R = {
                toX: a,
                toY: c,
                toWidth: B,
                toHeight: b,
                toInnerX: h,
                toInnerY: d,
                toInnerWidth: o,
                toInnerHeight: m,
                offsetX: a / s - v(a / s),
                offsetY: c / e - v(c / e),
                scaleX: s,
                scaleY: e,
                x: v(a / s),
                y: v(c / e),
                width: i(B / s),
                height: i(b / e)
              }, C.push(R);
              return C;
            };
          },
          {}
        ],
        16: [
          function(A, n, _) {
            function u(v) {
              return Object.prototype.toString.call(v);
            }
            n.exports.isCanvas = function(i) {
              var t = u(i);
              return t === "[object HTMLCanvasElement]" || t === "[object OffscreenCanvas]" || t === "[object Canvas]";
            }, n.exports.isImage = function(i) {
              return u(i) === "[object HTMLImageElement]";
            }, n.exports.isImageBitmap = function(i) {
              return u(i) === "[object ImageBitmap]";
            }, n.exports.limiter = function(i) {
              var t = 0, r = [];
              function s() {
                t < i && r.length && (t++, r.shift()());
              }
              return function(o) {
                return new Promise(function(m, a) {
                  r.push(function() {
                    o().then(function(c) {
                      m(c), t--, s();
                    }, function(c) {
                      a(c), t--, s();
                    });
                  }), s();
                });
              };
            }, n.exports.cib_quality_name = function(i) {
              switch (i) {
                case 0:
                  return "pixelated";
                case 1:
                  return "low";
                case 2:
                  return "medium";
              }
              return "high";
            }, n.exports.cib_support = function(i) {
              return Promise.resolve().then(function() {
                if (typeof createImageBitmap > "u") return false;
                var t = i(100, 100);
                return createImageBitmap(t, 0, 0, 100, 100, {
                  resizeWidth: 10,
                  resizeHeight: 10,
                  resizeQuality: "high"
                }).then(function(r) {
                  var s = r.width === 10;
                  return r.close(), t = null, s;
                });
              }).catch(function() {
                return false;
              });
            }, n.exports.worker_offscreen_canvas_support = function() {
              return new Promise(function(i, t) {
                if (typeof OffscreenCanvas > "u") {
                  i(false);
                  return;
                }
                function r(o) {
                  if (typeof createImageBitmap > "u") {
                    o.postMessage(false);
                    return;
                  }
                  Promise.resolve().then(function() {
                    var m = new OffscreenCanvas(10, 10), a = m.getContext("2d");
                    return a.rect(0, 0, 1, 1), createImageBitmap(m, 0, 0, 1, 1);
                  }).then(function() {
                    return o.postMessage(true);
                  }, function() {
                    return o.postMessage(false);
                  });
                }
                var s = btoa("(".concat(r.toString(), ")(self);")), e = new Worker("data:text/javascript;base64,".concat(s));
                e.onmessage = function(o) {
                  return i(o.data);
                }, e.onerror = t;
              }).then(function(i) {
                return i;
              }, function() {
                return false;
              });
            }, n.exports.can_use_canvas = function(i) {
              var t = false;
              try {
                var r = i(2, 1), s = r.getContext("2d"), e = s.createImageData(2, 1);
                e.data[0] = 12, e.data[1] = 23, e.data[2] = 34, e.data[3] = 255, e.data[4] = 45, e.data[5] = 56, e.data[6] = 67, e.data[7] = 255, s.putImageData(e, 0, 0), e = null, e = s.getImageData(0, 0, 2, 1), e.data[0] === 12 && e.data[1] === 23 && e.data[2] === 34 && e.data[3] === 255 && e.data[4] === 45 && e.data[5] === 56 && e.data[6] === 67 && e.data[7] === 255 && (t = true);
              } catch {
              }
              return t;
            }, n.exports.cib_can_use_region = function() {
              return new Promise(function(i) {
                if (typeof Image > "u" || typeof createImageBitmap > "u") {
                  i(false);
                  return;
                }
                var t = new Image();
                t.src = "data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z", t.onload = function() {
                  createImageBitmap(t, 0, 0, t.width, t.height).then(function(r) {
                    r.width === t.width && r.height === t.height ? i(true) : i(false);
                  }, function() {
                    return i(false);
                  });
                }, t.onerror = function() {
                  return i(false);
                };
              });
            };
          },
          {}
        ],
        17: [
          function(A, n, _) {
            n.exports = function() {
              var u = A("./mathlib"), v;
              onmessage = function(t) {
                var r = t.data.opts;
                if (!r.src && r.srcBitmap) {
                  var s = new OffscreenCanvas(r.width, r.height), e = s.getContext("2d");
                  e.drawImage(r.srcBitmap, 0, 0), r.src = e.getImageData(0, 0, r.width, r.height).data, s.width = s.height = 0, s = null, r.srcBitmap.close(), r.srcBitmap = null;
                }
                v || (v = new u(t.data.features));
                var o = v.resizeAndUnsharp(r);
                postMessage({
                  data: o
                }, [
                  o.buffer
                ]);
              };
            };
          },
          {
            "./mathlib": 1
          }
        ],
        18: [
          function(A, n, _) {
            var u, v, i, t, r, s, e, o;
            function m(h) {
              h < 0.5 && (h = 0.5);
              var d = Math.exp(0.726 * 0.726) / h, B = Math.exp(-d), b = Math.exp(-2 * d), C = (1 - B) * (1 - B) / (1 + 2 * d * B - b);
              return u = C, v = C * (d - 1) * B, i = C * (d + 1) * B, t = -C * b, r = 2 * B, s = -b, e = (u + v) / (1 - r - s), o = (i + t) / (1 - r - s), new Float32Array([
                u,
                v,
                i,
                t,
                r,
                s,
                e,
                o
              ]);
            }
            function a(h, d, B, b, C, R) {
              var U, M, g, E, D, x, O, k, j, P, f, p, I, y;
              for (j = 0; j < R; j++) {
                for (x = j * C, O = j, k = 0, U = h[x], D = U * b[6], E = D, f = b[0], p = b[1], I = b[4], y = b[5], P = 0; P < C; P++) M = h[x], g = M * f + U * p + E * I + D * y, D = E, E = g, U = M, B[k] = E, k++, x++;
                for (x--, k--, O += R * (C - 1), U = h[x], D = U * b[7], E = D, M = U, f = b[2], p = b[3], P = C - 1; P >= 0; P--) g = M * f + U * p + E * I + D * y, D = E, E = g, U = M, M = h[x], d[O] = B[k] + E, x--, k--, O -= R;
              }
            }
            function c(h, d, B, b) {
              if (b) {
                var C = new Uint16Array(h.length), R = new Float32Array(Math.max(d, B)), U = m(b);
                a(h, C, R, U, d, B), a(C, h, R, U, B, d);
              }
            }
            n.exports = c;
          },
          {}
        ],
        19: [
          function(A, n, _) {
            var u = A("object-assign"), v = A("./lib/base64decode"), i = A("./lib/wa_detect"), t = {
              js: true,
              wasm: true
            };
            function r(s) {
              if (!(this instanceof r)) return new r(s);
              var e = u({}, t, s || {});
              if (this.options = e, this.__cache = {}, this.__init_promise = null, this.__modules = e.modules || {}, this.__memory = null, this.__wasm = {}, this.__isLE = new Uint32Array(new Uint8Array([
                1,
                0,
                0,
                0
              ]).buffer)[0] === 1, !this.options.js && !this.options.wasm) throw new Error('mathlib: at least "js" or "wasm" should be enabled');
            }
            r.prototype.has_wasm = i, r.prototype.use = function(s) {
              return this.__modules[s.name] = s, this.options.wasm && this.has_wasm() && s.wasm_fn ? this[s.name] = s.wasm_fn : this[s.name] = s.fn, this;
            }, r.prototype.init = function() {
              if (this.__init_promise) return this.__init_promise;
              if (!this.options.js && this.options.wasm && !this.has_wasm()) return Promise.reject(new Error(`mathlib: only "wasm" was enabled, but it's not supported`));
              var s = this;
              return this.__init_promise = Promise.all(Object.keys(s.__modules).map(function(e) {
                var o = s.__modules[e];
                return !s.options.wasm || !s.has_wasm() || !o.wasm_fn || s.__wasm[e] ? null : WebAssembly.compile(s.__base64decode(o.wasm_src)).then(function(m) {
                  s.__wasm[e] = m;
                });
              })).then(function() {
                return s;
              }), this.__init_promise;
            }, r.prototype.__base64decode = v, r.prototype.__reallocate = function(e) {
              if (!this.__memory) return this.__memory = new WebAssembly.Memory({
                initial: Math.ceil(e / (64 * 1024))
              }), this.__memory;
              var o = this.__memory.buffer.byteLength;
              return o < e && this.__memory.grow(Math.ceil((e - o) / (64 * 1024))), this.__memory;
            }, r.prototype.__instance = function(e, o, m) {
              if (o && this.__reallocate(o), !this.__wasm[e]) {
                var a = this.__modules[e];
                this.__wasm[e] = new WebAssembly.Module(this.__base64decode(a.wasm_src));
              }
              if (!this.__cache[e]) {
                var c = {
                  memoryBase: 0,
                  memory: this.__memory,
                  tableBase: 0,
                  table: new WebAssembly.Table({
                    initial: 0,
                    element: "anyfunc"
                  })
                };
                this.__cache[e] = new WebAssembly.Instance(this.__wasm[e], {
                  env: u(c, m || {})
                });
              }
              return this.__cache[e];
            }, r.prototype.__align = function(e, o) {
              o = o || 8;
              var m = e % o;
              return e + (m ? o - m : 0);
            }, n.exports = r;
          },
          {
            "./lib/base64decode": 20,
            "./lib/wa_detect": 21,
            "object-assign": 22
          }
        ],
        20: [
          function(A, n, _) {
            var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            n.exports = function(i) {
              for (var t = i.replace(/[\r\n=]/g, ""), r = t.length, s = new Uint8Array(r * 3 >> 2), e = 0, o = 0, m = 0; m < r; m++) m % 4 === 0 && m && (s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255), e = e << 6 | u.indexOf(t.charAt(m));
              var a = r % 4 * 6;
              return a === 0 ? (s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255) : a === 18 ? (s[o++] = e >> 10 & 255, s[o++] = e >> 2 & 255) : a === 12 && (s[o++] = e >> 4 & 255), s;
            };
          },
          {}
        ],
        21: [
          function(A, n, _) {
            var u;
            n.exports = function() {
              if (typeof u < "u" || (u = false, typeof WebAssembly > "u")) return u;
              try {
                var i = new Uint8Array([
                  0,
                  97,
                  115,
                  109,
                  1,
                  0,
                  0,
                  0,
                  1,
                  6,
                  1,
                  96,
                  1,
                  127,
                  1,
                  127,
                  3,
                  2,
                  1,
                  0,
                  5,
                  3,
                  1,
                  0,
                  1,
                  7,
                  8,
                  1,
                  4,
                  116,
                  101,
                  115,
                  116,
                  0,
                  0,
                  10,
                  16,
                  1,
                  14,
                  0,
                  32,
                  0,
                  65,
                  1,
                  54,
                  2,
                  0,
                  32,
                  0,
                  40,
                  2,
                  0,
                  11
                ]), t = new WebAssembly.Module(i), r = new WebAssembly.Instance(t, {});
                return r.exports.test(4) !== 0 && (u = true), u;
              } catch {
              }
              return u;
            };
          },
          {}
        ],
        22: [
          function(A, n, _) {
            var u = Object.getOwnPropertySymbols, v = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
            function t(s) {
              if (s == null) throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(s);
            }
            function r() {
              try {
                if (!Object.assign) return false;
                var s = new String("abc");
                if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5") return false;
                for (var e = {}, o = 0; o < 10; o++) e["_" + String.fromCharCode(o)] = o;
                var m = Object.getOwnPropertyNames(e).map(function(c) {
                  return e[c];
                });
                if (m.join("") !== "0123456789") return false;
                var a = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(c) {
                  a[c] = c;
                }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return false;
              }
            }
            n.exports = r() ? Object.assign : function(s, e) {
              for (var o, m = t(s), a, c = 1; c < arguments.length; c++) {
                o = Object(arguments[c]);
                for (var h in o) v.call(o, h) && (m[h] = o[h]);
                if (u) {
                  a = u(o);
                  for (var d = 0; d < a.length; d++) i.call(o, a[d]) && (m[a[d]] = o[a[d]]);
                }
              }
              return m;
            };
          },
          {}
        ],
        23: [
          function(A, n, _) {
            var u = arguments[3], v = arguments[4], i = arguments[5], t = JSON.stringify;
            n.exports = function(r, s) {
              for (var e, o = Object.keys(i), m = 0, a = o.length; m < a; m++) {
                var c = o[m], h = i[c].exports;
                if (h === r || h && h.default === r) {
                  e = c;
                  break;
                }
              }
              if (!e) {
                e = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                for (var d = {}, m = 0, a = o.length; m < a; m++) {
                  var c = o[m];
                  d[c] = c;
                }
                v[e] = [
                  "function(require,module,exports){" + r + "(self); }",
                  d
                ];
              }
              var B = Math.floor(Math.pow(16, 8) * Math.random()).toString(16), b = {};
              b[e] = e, v[B] = [
                "function(require,module,exports){var f = require(" + t(e) + ");(f.default ? f.default : f)(self);}",
                b
              ];
              var C = {};
              R(B);
              function R(x) {
                C[x] = true;
                for (var O in v[x][1]) {
                  var k = v[x][1][O];
                  C[k] || R(k);
                }
              }
              var U = "(" + u + ")({" + Object.keys(C).map(function(x) {
                return t(x) + ":[" + v[x][0] + "," + t(v[x][1]) + "]";
              }).join(",") + "},{},[" + t(B) + "])", M = window.URL || window.webkitURL || window.mozURL || window.msURL, g = new Blob([
                U
              ], {
                type: "text/javascript"
              });
              if (s && s.bare) return g;
              var E = M.createObjectURL(g), D = new Worker(E);
              return D.objectURL = E, D;
            };
          },
          {}
        ],
        "/index.js": [
          function(A, n, _) {
            function u(f, p) {
              return s(f) || r(f, p) || i(f, p) || v();
            }
            function v() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            function i(f, p) {
              if (f) {
                if (typeof f == "string") return t(f, p);
                var I = Object.prototype.toString.call(f).slice(8, -1);
                if (I === "Object" && f.constructor && (I = f.constructor.name), I === "Map" || I === "Set") return Array.from(f);
                if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)) return t(f, p);
              }
            }
            function t(f, p) {
              (p == null || p > f.length) && (p = f.length);
              for (var I = 0, y = new Array(p); I < p; I++) y[I] = f[I];
              return y;
            }
            function r(f, p) {
              var I = f == null ? null : typeof Symbol < "u" && f[Symbol.iterator] || f["@@iterator"];
              if (I != null) {
                var y = [], w = true, S = false, F, G;
                try {
                  for (I = I.call(f); !(w = (F = I.next()).done) && (y.push(F.value), !(p && y.length === p)); w = true) ;
                } catch (H) {
                  S = true, G = H;
                } finally {
                  try {
                    !w && I.return != null && I.return();
                  } finally {
                    if (S) throw G;
                  }
                }
                return y;
              }
            }
            function s(f) {
              if (Array.isArray(f)) return f;
            }
            var e = A("object-assign"), o = A("webworkify"), m = A("./lib/mathlib"), a = A("./lib/pool"), c = A("./lib/utils"), h = A("./lib/worker"), d = A("./lib/stepper"), B = A("./lib/tiler"), b = A("./lib/mm_resize/resize_filter_info"), C = {}, R = false;
            try {
              typeof navigator < "u" && navigator.userAgent && (R = navigator.userAgent.indexOf("Safari") >= 0);
            } catch {
            }
            var U = 1;
            typeof navigator < "u" && (U = Math.min(navigator.hardwareConcurrency || 1, 4));
            var M = {
              tile: 1024,
              concurrency: U,
              features: [
                "js",
                "wasm",
                "ww"
              ],
              idle: 2e3,
              createCanvas: function(p, I) {
                var y = document.createElement("canvas");
                return y.width = p, y.height = I, y;
              }
            }, g = {
              filter: "mks2013",
              unsharpAmount: 0,
              unsharpRadius: 0,
              unsharpThreshold: 0
            }, E = false, D = false, x = false, O = false, k = false;
            function j() {
              return {
                value: o(h),
                destroy: function() {
                  if (this.value.terminate(), typeof window < "u") {
                    var p = window.URL || window.webkitURL || window.mozURL || window.msURL;
                    p && p.revokeObjectURL && this.value.objectURL && p.revokeObjectURL(this.value.objectURL);
                  }
                }
              };
            }
            function P(f) {
              if (!(this instanceof P)) return new P(f);
              this.options = e({}, M, f || {});
              var p = "lk_".concat(this.options.concurrency);
              this.__limit = C[p] || c.limiter(this.options.concurrency), C[p] || (C[p] = this.__limit), this.features = {
                js: false,
                wasm: false,
                cib: false,
                ww: false
              }, this.__workersPool = null, this.__requested_features = [], this.__mathlib = null;
            }
            P.prototype.init = function() {
              var f = this;
              if (this.__initPromise) return this.__initPromise;
              if (typeof ImageData < "u" && typeof Uint8ClampedArray < "u") try {
                new ImageData(new Uint8ClampedArray(400), 10, 10), E = true;
              } catch {
              }
              typeof ImageBitmap < "u" && (ImageBitmap.prototype && ImageBitmap.prototype.close ? D = true : this.debug("ImageBitmap does not support .close(), disabled"));
              var p = this.options.features.slice();
              if (p.indexOf("all") >= 0 && (p = [
                "cib",
                "wasm",
                "js",
                "ww"
              ]), this.__requested_features = p, this.__mathlib = new m(p), p.indexOf("ww") >= 0 && typeof window < "u" && "Worker" in window) try {
                var I = A("webworkify")(function() {
                });
                I.terminate(), this.features.ww = true;
                var y = "wp_".concat(JSON.stringify(this.options));
                C[y] ? this.__workersPool = C[y] : (this.__workersPool = new a(j, this.options.idle), C[y] = this.__workersPool);
              } catch {
              }
              var w = this.__mathlib.init().then(function(H) {
                e(f.features, H.features);
              }), S;
              D ? S = c.cib_support(this.options.createCanvas).then(function(H) {
                if (f.features.cib && p.indexOf("cib") < 0) {
                  f.debug("createImageBitmap() resize supported, but disabled by config");
                  return;
                }
                p.indexOf("cib") >= 0 && (f.features.cib = H);
              }) : S = Promise.resolve(false), x = c.can_use_canvas(this.options.createCanvas);
              var F;
              D && E && p.indexOf("ww") !== -1 ? F = c.worker_offscreen_canvas_support() : F = Promise.resolve(false), F = F.then(function(H) {
                O = H;
              });
              var G = c.cib_can_use_region().then(function(H) {
                k = H;
              });
              return this.__initPromise = Promise.all([
                w,
                S,
                F,
                G
              ]).then(function() {
                return f;
              }), this.__initPromise;
            }, P.prototype.__invokeResize = function(f, p) {
              var I = this;
              return p.__mathCache = p.__mathCache || {}, Promise.resolve().then(function() {
                return I.features.ww ? new Promise(function(y, w) {
                  var S = I.__workersPool.acquire();
                  p.cancelToken && p.cancelToken.catch(function(G) {
                    return w(G);
                  }), S.value.onmessage = function(G) {
                    S.release(), G.data.err ? w(G.data.err) : y(G.data);
                  };
                  var F = [];
                  f.src && F.push(f.src.buffer), f.srcBitmap && F.push(f.srcBitmap), S.value.postMessage({
                    opts: f,
                    features: I.__requested_features,
                    preload: {
                      wasm_nodule: I.__mathlib.__
                    }
                  }, F);
                }) : {
                  data: I.__mathlib.resizeAndUnsharp(f, p.__mathCache)
                };
              });
            }, P.prototype.__extractTileData = function(f, p, I, y, w) {
              if (this.features.ww && O && (c.isCanvas(p) || k)) return this.debug("Create tile for OffscreenCanvas"), createImageBitmap(y.srcImageBitmap || p, f.x, f.y, f.width, f.height).then(function(G) {
                return w.srcBitmap = G, w;
              });
              if (c.isCanvas(p)) return y.srcCtx || (y.srcCtx = p.getContext("2d")), this.debug("Get tile pixel data"), w.src = y.srcCtx.getImageData(f.x, f.y, f.width, f.height).data, w;
              this.debug("Draw tile imageBitmap/image to temporary canvas");
              var S = this.options.createCanvas(f.width, f.height), F = S.getContext("2d");
              return F.globalCompositeOperation = "copy", F.drawImage(y.srcImageBitmap || p, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height), this.debug("Get tile pixel data"), w.src = F.getImageData(0, 0, f.width, f.height).data, S.width = S.height = 0, w;
            }, P.prototype.__landTileData = function(f, p, I) {
              var y;
              if (this.debug("Convert raw rgba tile result to ImageData"), p.bitmap) return I.toCtx.drawImage(p.bitmap, f.toX, f.toY), null;
              if (E) y = new ImageData(new Uint8ClampedArray(p.data), f.toWidth, f.toHeight);
              else if (y = I.toCtx.createImageData(f.toWidth, f.toHeight), y.data.set) y.data.set(p.data);
              else for (var w = y.data.length - 1; w >= 0; w--) y.data[w] = p.data[w];
              return this.debug("Draw tile"), R ? I.toCtx.putImageData(y, f.toX, f.toY, f.toInnerX - f.toX, f.toInnerY - f.toY, f.toInnerWidth + 1e-5, f.toInnerHeight + 1e-5) : I.toCtx.putImageData(y, f.toX, f.toY, f.toInnerX - f.toX, f.toInnerY - f.toY, f.toInnerWidth, f.toInnerHeight), null;
            }, P.prototype.__tileAndResize = function(f, p, I) {
              var y = this, w = {
                srcCtx: null,
                srcImageBitmap: null,
                isImageBitmapReused: false,
                toCtx: null
              }, S = function(G) {
                return y.__limit(function() {
                  if (I.canceled) return I.cancelToken;
                  var H = {
                    width: G.width,
                    height: G.height,
                    toWidth: G.toWidth,
                    toHeight: G.toHeight,
                    scaleX: G.scaleX,
                    scaleY: G.scaleY,
                    offsetX: G.offsetX,
                    offsetY: G.offsetY,
                    filter: I.filter,
                    unsharpAmount: I.unsharpAmount,
                    unsharpRadius: I.unsharpRadius,
                    unsharpThreshold: I.unsharpThreshold
                  };
                  return y.debug("Invoke resize math"), Promise.resolve(H).then(function(T) {
                    return y.__extractTileData(G, f, I, w, T);
                  }).then(function(T) {
                    return y.debug("Invoke resize math"), y.__invokeResize(T, I);
                  }).then(function(T) {
                    return I.canceled ? I.cancelToken : (w.srcImageData = null, y.__landTileData(G, T, w));
                  });
                });
              };
              return Promise.resolve().then(function() {
                if (w.toCtx = p.getContext("2d"), c.isCanvas(f)) return null;
                if (c.isImageBitmap(f)) return w.srcImageBitmap = f, w.isImageBitmapReused = true, null;
                if (c.isImage(f)) return D ? (y.debug("Decode image via createImageBitmap"), createImageBitmap(f).then(function(F) {
                  w.srcImageBitmap = F;
                }).catch(function(F) {
                  return null;
                })) : null;
                throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap');
              }).then(function() {
                if (I.canceled) return I.cancelToken;
                y.debug("Calculate tiles");
                var F = B({
                  width: I.width,
                  height: I.height,
                  srcTileSize: y.options.tile,
                  toWidth: I.toWidth,
                  toHeight: I.toHeight,
                  destTileBorder: I.__destTileBorder
                }), G = F.map(function(T) {
                  return S(T);
                });
                function H(T) {
                  T.srcImageBitmap && (T.isImageBitmapReused || T.srcImageBitmap.close(), T.srcImageBitmap = null);
                }
                return y.debug("Process tiles"), Promise.all(G).then(function() {
                  return y.debug("Finished!"), H(w), p;
                }, function(T) {
                  throw H(w), T;
                });
              });
            }, P.prototype.__processStages = function(f, p, I, y) {
              var w = this;
              if (y.canceled) return y.cancelToken;
              var S = f.shift(), F = u(S, 2), G = F[0], H = F[1], T = f.length === 0, W;
              T || b.q2f.indexOf(y.filter) < 0 ? W = y.filter : y.filter === "box" ? W = "box" : W = "hamming", y = e({}, y, {
                toWidth: G,
                toHeight: H,
                filter: W
              });
              var L;
              return T || (L = this.options.createCanvas(G, H)), this.__tileAndResize(p, T ? I : L, y).then(function() {
                return T ? I : (y.width = G, y.height = H, w.__processStages(f, L, I, y));
              }).then(function(K) {
                return L && (L.width = L.height = 0), K;
              });
            }, P.prototype.__resizeViaCreateImageBitmap = function(f, p, I) {
              var y = this, w = p.getContext("2d");
              return this.debug("Resize via createImageBitmap()"), createImageBitmap(f, {
                resizeWidth: I.toWidth,
                resizeHeight: I.toHeight,
                resizeQuality: c.cib_quality_name(b.f2q[I.filter])
              }).then(function(S) {
                if (I.canceled) return I.cancelToken;
                if (!I.unsharpAmount) return w.drawImage(S, 0, 0), S.close(), w = null, y.debug("Finished!"), p;
                y.debug("Unsharp result");
                var F = y.options.createCanvas(I.toWidth, I.toHeight), G = F.getContext("2d");
                G.drawImage(S, 0, 0), S.close();
                var H = G.getImageData(0, 0, I.toWidth, I.toHeight);
                return y.__mathlib.unsharp_mask(H.data, I.toWidth, I.toHeight, I.unsharpAmount, I.unsharpRadius, I.unsharpThreshold), w.putImageData(H, 0, 0), F.width = F.height = 0, H = G = F = w = null, y.debug("Finished!"), p;
              });
            }, P.prototype.resize = function(f, p, I) {
              var y = this;
              this.debug("Start resize...");
              var w = e({}, g);
              if (isNaN(I) ? I && (w = e(w, I)) : w = e(w, {
                quality: I
              }), w.toWidth = p.width, w.toHeight = p.height, w.width = f.naturalWidth || f.width, w.height = f.naturalHeight || f.height, Object.prototype.hasOwnProperty.call(w, "quality")) {
                if (w.quality < 0 || w.quality > 3) throw new Error("Pica: .quality should be [0..3], got ".concat(w.quality));
                w.filter = b.q2f[w.quality];
              }
              if (p.width === 0 || p.height === 0) return Promise.reject(new Error("Invalid output size: ".concat(p.width, "x").concat(p.height)));
              w.unsharpRadius > 2 && (w.unsharpRadius = 2), w.canceled = false, w.cancelToken && (w.cancelToken = w.cancelToken.then(function(F) {
                throw w.canceled = true, F;
              }, function(F) {
                throw w.canceled = true, F;
              }));
              var S = 3;
              return w.__destTileBorder = Math.ceil(Math.max(S, 2.5 * w.unsharpRadius | 0)), this.init().then(function() {
                if (w.canceled) return w.cancelToken;
                if (y.features.cib) {
                  if (b.q2f.indexOf(w.filter) >= 0) return y.__resizeViaCreateImageBitmap(f, p, w);
                  y.debug("cib is enabled, but not supports provided filter, fallback to manual math");
                }
                if (!x) {
                  var F = new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");
                  throw F.code = "ERR_GET_IMAGE_DATA", F;
                }
                var G = d(w.width, w.height, w.toWidth, w.toHeight, y.options.tile, w.__destTileBorder);
                return y.__processStages(G, f, p, w);
              });
            }, P.prototype.resizeBuffer = function(f) {
              var p = this, I = e({}, g, f);
              if (Object.prototype.hasOwnProperty.call(I, "quality")) {
                if (I.quality < 0 || I.quality > 3) throw new Error("Pica: .quality should be [0..3], got ".concat(I.quality));
                I.filter = b.q2f[I.quality];
              }
              return this.init().then(function() {
                return p.__mathlib.resizeAndUnsharp(I);
              });
            }, P.prototype.toBlob = function(f, p, I) {
              return p = p || "image/png", new Promise(function(y) {
                if (f.toBlob) {
                  f.toBlob(function(H) {
                    return y(H);
                  }, p, I);
                  return;
                }
                if (f.convertToBlob) {
                  y(f.convertToBlob({
                    type: p,
                    quality: I
                  }));
                  return;
                }
                for (var w = atob(f.toDataURL(p, I).split(",")[1]), S = w.length, F = new Uint8Array(S), G = 0; G < S; G++) F[G] = w.charCodeAt(G);
                y(new Blob([
                  F
                ], {
                  type: p
                }));
              });
            }, P.prototype.debug = function() {
            }, n.exports = P;
          },
          {
            "./lib/mathlib": 1,
            "./lib/mm_resize/resize_filter_info": 7,
            "./lib/pool": 13,
            "./lib/stepper": 14,
            "./lib/tiler": 15,
            "./lib/utils": 16,
            "./lib/worker": 17,
            "object-assign": 22,
            webworkify: 23
          }
        ]
      }, {}, [])("/index.js");
    });
  })(Be);
  var Ce = Be.exports;
  const Qe = Ee(Ce);
  function le(Q, l) {
    var A = Object.keys(Q);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(Q);
      l && (n = n.filter(function(_) {
        return Object.getOwnPropertyDescriptor(Q, _).enumerable;
      })), A.push.apply(A, n);
    }
    return A;
  }
  function $(Q) {
    for (var l = 1; l < arguments.length; l++) {
      var A = arguments[l] != null ? arguments[l] : {};
      l % 2 ? le(Object(A), true).forEach(function(n) {
        Me(Q, n, A[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(A)) : le(Object(A)).forEach(function(n) {
        Object.defineProperty(Q, n, Object.getOwnPropertyDescriptor(A, n));
      });
    }
    return Q;
  }
  function xe(Q, l) {
    if (!(Q instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function ge(Q, l) {
    for (var A = 0; A < l.length; A++) {
      var n = l[A];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(Q, pe(n.key), n);
    }
  }
  function De(Q, l, A) {
    return l && ge(Q.prototype, l), A && ge(Q, A), Object.defineProperty(Q, "prototype", {
      writable: false
    }), Q;
  }
  function Me(Q, l, A) {
    return l = pe(l), l in Q ? Object.defineProperty(Q, l, {
      value: A,
      enumerable: true,
      configurable: true,
      writable: true
    }) : Q[l] = A, Q;
  }
  function ee() {
    return ee = Object.assign ? Object.assign.bind() : function(Q) {
      for (var l = 1; l < arguments.length; l++) {
        var A = arguments[l];
        for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (Q[n] = A[n]);
      }
      return Q;
    }, ee.apply(this, arguments);
  }
  function Re(Q, l) {
    if (typeof Q != "object" || Q === null) return Q;
    var A = Q[Symbol.toPrimitive];
    if (A !== void 0) {
      var n = A.call(Q, l);
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(Q);
  }
  function pe(Q) {
    var l = Re(Q, "string");
    return typeof l == "symbol" ? l : String(l);
  }
  var we = {
    exports: {}
  };
  (function(Q) {
    typeof window > "u" || function(l) {
      var A = l.HTMLCanvasElement && l.HTMLCanvasElement.prototype, n = l.Blob && function() {
        try {
          return !!new Blob();
        } catch {
          return false;
        }
      }(), _ = n && l.Uint8Array && function() {
        try {
          return new Blob([
            new Uint8Array(100)
          ]).size === 100;
        } catch {
          return false;
        }
      }(), u = l.BlobBuilder || l.WebKitBlobBuilder || l.MozBlobBuilder || l.MSBlobBuilder, v = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, i = (n || u) && l.atob && l.ArrayBuffer && l.Uint8Array && function(t) {
        var r, s, e, o, m, a, c, h, d;
        if (r = t.match(v), !r) throw new Error("invalid data URI");
        for (s = r[2] ? r[1] : "text/plain" + (r[3] || ";charset=US-ASCII"), e = !!r[4], o = t.slice(r[0].length), e ? m = atob(o) : m = decodeURIComponent(o), a = new ArrayBuffer(m.length), c = new Uint8Array(a), h = 0; h < m.length; h += 1) c[h] = m.charCodeAt(h);
        return n ? new Blob([
          _ ? c : a
        ], {
          type: s
        }) : (d = new u(), d.append(a), d.getBlob(s));
      };
      l.HTMLCanvasElement && !A.toBlob && (A.mozGetAsFile ? A.toBlob = function(t, r, s) {
        var e = this;
        setTimeout(function() {
          s && A.toDataURL && i ? t(i(e.toDataURL(r, s))) : t(e.mozGetAsFile("blob", r));
        });
      } : A.toDataURL && i && (A.msToBlob ? A.toBlob = function(t, r, s) {
        var e = this;
        setTimeout(function() {
          (r && r !== "image/png" || s) && A.toDataURL && i ? t(i(e.toDataURL(r, s))) : t(e.msToBlob(r));
        });
      } : A.toBlob = function(t, r, s) {
        var e = this;
        setTimeout(function() {
          t(i(e.toDataURL(r, s)));
        });
      })), Q.exports ? Q.exports = i : l.dataURLtoBlob = i;
    }(window);
  })(we);
  var ve = we.exports, Ue = function(l) {
    return typeof Blob > "u" ? false : l instanceof Blob || Object.prototype.toString.call(l) === "[object Blob]";
  }, me = {
    strict: true,
    checkOrientation: true,
    retainExif: false,
    maxWidth: 1 / 0,
    maxHeight: 1 / 0,
    minWidth: 0,
    minHeight: 0,
    width: void 0,
    height: void 0,
    resize: "none",
    quality: 0.8,
    mimeType: "auto",
    convertTypes: [
      "image/png"
    ],
    convertSize: 5e6,
    beforeDraw: null,
    drew: null,
    success: null,
    error: null
  }, ke = typeof window < "u" && typeof window.document < "u", Y = ke ? window : {}, te = function(l) {
    return l > 0 && l < 1 / 0;
  }, Fe = Array.prototype.slice;
  function Ae(Q) {
    return Array.from ? Array.from(Q) : Fe.call(Q);
  }
  var Oe = /^image\/.+$/;
  function ne(Q) {
    return Oe.test(Q);
  }
  function Ge(Q) {
    var l = ne(Q) ? Q.substr(6) : "";
    return l === "jpeg" && (l = "jpg"), ".".concat(l);
  }
  var be = String.fromCharCode;
  function Pe(Q, l, A) {
    var n = "", _;
    for (A += l, _ = l; _ < A; _ += 1) n += be(Q.getUint8(_));
    return n;
  }
  var Se = Y.btoa;
  function Ie(Q, l) {
    for (var A = [], n = 8192, _ = new Uint8Array(Q); _.length > 0; ) A.push(be.apply(null, Ae(_.subarray(0, n)))), _ = _.subarray(n);
    return "data:".concat(l, ";base64,").concat(Se(A.join("")));
  }
  function He(Q) {
    var l = new DataView(Q), A;
    try {
      var n, _, u;
      if (l.getUint8(0) === 255 && l.getUint8(1) === 216) for (var v = l.byteLength, i = 2; i + 1 < v; ) {
        if (l.getUint8(i) === 255 && l.getUint8(i + 1) === 225) {
          _ = i;
          break;
        }
        i += 1;
      }
      if (_) {
        var t = _ + 4, r = _ + 10;
        if (Pe(l, t, 4) === "Exif") {
          var s = l.getUint16(r);
          if (n = s === 18761, (n || s === 19789) && l.getUint16(r + 2, n) === 42) {
            var e = l.getUint32(r + 4, n);
            e >= 8 && (u = r + e);
          }
        }
      }
      if (u) {
        var o = l.getUint16(u, n), m, a;
        for (a = 0; a < o; a += 1) if (m = u + a * 12 + 2, l.getUint16(m, n) === 274) {
          m += 8, A = l.getUint16(m, n), l.setUint16(m, 1, n);
          break;
        }
      }
    } catch {
      A = 1;
    }
    return A;
  }
  function je(Q) {
    var l = 0, A = 1, n = 1;
    switch (Q) {
      case 2:
        A = -1;
        break;
      case 3:
        l = -180;
        break;
      case 4:
        n = -1;
        break;
      case 5:
        l = 90, n = -1;
        break;
      case 6:
        l = 90;
        break;
      case 7:
        l = 90, A = -1;
        break;
      case 8:
        l = -90;
        break;
    }
    return {
      rotate: l,
      scaleX: A,
      scaleY: n
    };
  }
  var Te = /\.\d*(?:0|9){12}\d*$/;
  function de(Q) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
    return Te.test(Q) ? Math.round(Q * l) / l : Q;
  }
  function Z(Q) {
    var l = Q.aspectRatio, A = Q.height, n = Q.width, _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", u = te(n), v = te(A);
    if (u && v) {
      var i = A * l;
      (_ === "contain" || _ === "none") && i > n || _ === "cover" && i < n ? A = n / l : n = A * l;
    } else u ? A = n / l : v && (n = A * l);
    return {
      width: n,
      height: A
    };
  }
  function Le(Q) {
    for (var l = Ae(new Uint8Array(Q)), A = l.length, n = [], _ = 0; _ + 3 < A; ) {
      var u = l[_], v = l[_ + 1];
      if (u === 255 && v === 218) break;
      if (u === 255 && v === 216) _ += 2;
      else {
        var i = l[_ + 2] * 256 + l[_ + 3], t = _ + i + 2, r = l.slice(_, t);
        n.push(r), _ = t;
      }
    }
    return n.reduce(function(s, e) {
      return e[0] === 255 && e[1] === 225 ? s.concat(e) : s;
    }, []);
  }
  function We(Q, l) {
    var A = Ae(new Uint8Array(Q));
    if (A[2] !== 255 || A[3] !== 224) return Q;
    var n = A[4] * 256 + A[5], _ = [
      255,
      216
    ].concat(l, A.slice(4 + n));
    return new Uint8Array(_);
  }
  var ze = Y.ArrayBuffer, ie = Y.FileReader, N = Y.URL || Y.webkitURL, Ye = /\.\w+$/, Ne = Y.Compressor, qe = function() {
    function Q(l, A) {
      xe(this, Q), this.file = l, this.exif = [], this.image = new Image(), this.options = $($({}, me), A), this.aborted = false, this.result = null, this.init();
    }
    return De(Q, [
      {
        key: "init",
        value: function() {
          var A = this, n = this.file, _ = this.options;
          if (!Ue(n)) {
            this.fail(new Error("The first argument must be a File or Blob object."));
            return;
          }
          var u = n.type;
          if (!ne(u)) {
            this.fail(new Error("The first argument must be an image File or Blob object."));
            return;
          }
          if (!N || !ie) {
            this.fail(new Error("The current browser does not support image compression."));
            return;
          }
          ze || (_.checkOrientation = false, _.retainExif = false);
          var v = u === "image/jpeg", i = v && _.checkOrientation, t = v && _.retainExif;
          if (N && !i && !t) this.load({
            url: N.createObjectURL(n)
          });
          else {
            var r = new ie();
            this.reader = r, r.onload = function(s) {
              var e = s.target, o = e.result, m = {}, a = 1;
              i && (a = He(o), a > 1 && ee(m, je(a))), t && (A.exif = Le(o)), i || t ? !N || a > 1 ? m.url = Ie(o, u) : m.url = N.createObjectURL(n) : m.url = o, A.load(m);
            }, r.onabort = function() {
              A.fail(new Error("Aborted to read the image with FileReader."));
            }, r.onerror = function() {
              A.fail(new Error("Failed to read the image with FileReader."));
            }, r.onloadend = function() {
              A.reader = null;
            }, i || t ? r.readAsArrayBuffer(n) : r.readAsDataURL(n);
          }
        }
      },
      {
        key: "load",
        value: function(A) {
          var n = this, _ = this.file, u = this.image;
          u.onload = function() {
            n.draw($($({}, A), {}, {
              naturalWidth: u.naturalWidth,
              naturalHeight: u.naturalHeight
            }));
          }, u.onabort = function() {
            n.fail(new Error("Aborted to load the image."));
          }, u.onerror = function() {
            n.fail(new Error("Failed to load the image."));
          }, Y.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Y.navigator.userAgent) && (u.crossOrigin = "anonymous"), u.alt = _.name, u.src = A.url;
        }
      },
      {
        key: "draw",
        value: function(A) {
          var n = this, _ = A.naturalWidth, u = A.naturalHeight, v = A.rotate, i = v === void 0 ? 0 : v, t = A.scaleX, r = t === void 0 ? 1 : t, s = A.scaleY, e = s === void 0 ? 1 : s, o = this.file, m = this.image, a = this.options, c = document.createElement("canvas"), h = c.getContext("2d"), d = Math.abs(i) % 180 === 90, B = (a.resize === "contain" || a.resize === "cover") && te(a.width) && te(a.height), b = Math.max(a.maxWidth, 0) || 1 / 0, C = Math.max(a.maxHeight, 0) || 1 / 0, R = Math.max(a.minWidth, 0) || 0, U = Math.max(a.minHeight, 0) || 0, M = _ / u, g = a.width, E = a.height;
          if (d) {
            var D = [
              C,
              b
            ];
            b = D[0], C = D[1];
            var x = [
              U,
              R
            ];
            R = x[0], U = x[1];
            var O = [
              E,
              g
            ];
            g = O[0], E = O[1];
          }
          B && (M = g / E);
          var k = Z({
            aspectRatio: M,
            width: b,
            height: C
          }, "contain");
          b = k.width, C = k.height;
          var j = Z({
            aspectRatio: M,
            width: R,
            height: U
          }, "cover");
          if (R = j.width, U = j.height, B) {
            var P = Z({
              aspectRatio: M,
              width: g,
              height: E
            }, a.resize);
            g = P.width, E = P.height;
          } else {
            var f = Z({
              aspectRatio: M,
              width: g,
              height: E
            }), p = f.width;
            g = p === void 0 ? _ : p;
            var I = f.height;
            E = I === void 0 ? u : I;
          }
          g = Math.floor(de(Math.min(Math.max(g, R), b))), E = Math.floor(de(Math.min(Math.max(E, U), C)));
          var y = -g / 2, w = -E / 2, S = g, F = E, G = [];
          if (B) {
            var H = 0, T = 0, W = _, L = u, K = Z({
              aspectRatio: M,
              width: _,
              height: u
            }, {
              contain: "cover",
              cover: "contain"
            }[a.resize]);
            W = K.width, L = K.height, H = (_ - W) / 2, T = (u - L) / 2, G.push(H, T, W, L);
          }
          if (G.push(y, w, S, F), d) {
            var oe = [
              E,
              g
            ];
            g = oe[0], E = oe[1];
          }
          c.width = g, c.height = E, ne(a.mimeType) || (a.mimeType = o.type);
          var se = "transparent";
          o.size > a.convertSize && a.convertTypes.indexOf(a.mimeType) >= 0 && (a.mimeType = "image/jpeg");
          var fe = a.mimeType === "image/jpeg";
          if (fe && (se = "#fff"), h.fillStyle = se, h.fillRect(0, 0, g, E), a.beforeDraw && a.beforeDraw.call(this, h, c), !this.aborted && (h.save(), h.translate(g / 2, E / 2), h.rotate(i * Math.PI / 180), h.scale(r, e), h.drawImage.apply(h, [
            m
          ].concat(G)), h.restore(), a.drew && a.drew.call(this, h, c), !this.aborted)) {
            var ue = function(X) {
              if (!n.aborted) {
                var he = function(J) {
                  return n.done({
                    naturalWidth: _,
                    naturalHeight: u,
                    result: J
                  });
                };
                if (X && fe && a.retainExif && n.exif && n.exif.length > 0) {
                  var ce = function(J) {
                    return he(ve(Ie(We(J, n.exif), a.mimeType)));
                  };
                  if (X.arrayBuffer) X.arrayBuffer().then(ce).catch(function() {
                    n.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                  });
                  else {
                    var q = new ie();
                    n.reader = q, q.onload = function(re) {
                      var J = re.target;
                      ce(J.result);
                    }, q.onabort = function() {
                      n.fail(new Error("Aborted to read the compressed image with FileReader."));
                    }, q.onerror = function() {
                      n.fail(new Error("Failed to read the compressed image with FileReader."));
                    }, q.onloadend = function() {
                      n.reader = null;
                    }, q.readAsArrayBuffer(X);
                  }
                } else he(X);
              }
            };
            c.toBlob ? c.toBlob(ue, a.mimeType, a.quality) : ue(ve(c.toDataURL(a.mimeType, a.quality)));
          }
        }
      },
      {
        key: "done",
        value: function(A) {
          var n = A.naturalWidth, _ = A.naturalHeight, u = A.result, v = this.file, i = this.image, t = this.options;
          if (N && i.src.indexOf("blob:") === 0 && N.revokeObjectURL(i.src), u) if (t.strict && !t.retainExif && u.size > v.size && t.mimeType === v.type && !(t.width > n || t.height > _ || t.minWidth > n || t.minHeight > _ || t.maxWidth < n || t.maxHeight < _)) u = v;
          else {
            var r = /* @__PURE__ */ new Date();
            u.lastModified = r.getTime(), u.lastModifiedDate = r, u.name = v.name, u.name && u.type !== v.type && (u.name = u.name.replace(Ye, Ge(u.type)));
          }
          else u = v;
          this.result = u, t.success && t.success.call(this, u);
        }
      },
      {
        key: "fail",
        value: function(A) {
          var n = this.options;
          if (n.error) n.error.call(this, A);
          else throw A;
        }
      },
      {
        key: "abort",
        value: function() {
          this.aborted || (this.aborted = true, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()));
        }
      }
    ], [
      {
        key: "noConflict",
        value: function() {
          return window.Compressor = Ne, Q;
        }
      },
      {
        key: "setDefaults",
        value: function(A) {
          ee(me, A);
        }
      }
    ]), Q;
  }();
  function Xe() {
    return window.navigator.brave != null ? window.navigator.brave.isBrave.name == "isBrave" : false;
  }
  let Je;
  Ve = z.forwardRef((Q, l) => {
    const { imageSrc: A, imageType: n, onImageCropped: _, width: u, height: v } = Q, [i, t] = z.useState({
      x: 0,
      y: 0
    }), [r, s] = z.useState(1), [e, o] = z.useState(null), [m, a] = z.useState(null), c = z.useCallback((M, g) => {
      o(g);
    }, []);
    z.useImperativeHandle(l, () => ({
      async showCroppedImage() {
        try {
          if (A) {
            const M = await C(A, e), g = await B(M), E = Xe() ? await d(M) : await h(g), D = await B(E);
            _(D);
          } else return "Nothing";
        } catch (M) {
          console.error(M);
        }
      }
    }));
    async function h(M) {
      const g = Qe();
      let E = await R(M);
      const D = document.createElement("canvas");
      return D.height = 128, D.width = 128, new Promise((x) => {
        x(g.resize(E, D, {
          unsharpAmount: 100,
          unsharpRadius: 0.7,
          unsharpThreshold: 2
        }).then((O) => g.toBlob(O, n, 1)));
      });
    }
    async function d(M) {
      return new Promise((g, E) => {
        new qe(M, {
          quality: 1,
          strict: true,
          maxWidth: 128,
          maxHeight: 128,
          checkOrientation: false,
          success: g,
          error: E
        });
      });
    }
    const B = async (M) => await b(M), b = (M) => new Promise((g, E) => {
      const D = new FileReader();
      D.readAsDataURL(M), D.onload = () => g(D.result), D.onerror = (x) => E(x);
    });
    async function C(M, g) {
      const E = await R(M), D = document.createElement("canvas");
      D.width = g.width, D.height = g.height;
      const x = D.getContext("2d"), O = "none.jpg";
      return x.drawImage(E, g.x, g.y, g.width, g.height, 0, 0, g.width, g.height), new Promise((k, j) => {
        D.toBlob((P) => {
          k(new File([
            P
          ], O, {
            type: n,
            lastModified: Date.now()
          }));
        }, n, 1);
      });
    }
    const R = (M) => new Promise((g, E) => {
      const D = new Image();
      D.addEventListener("load", () => g(D)), D.addEventListener("error", (x) => E(x)), D.setAttribute("crossOrigin", "anonymous"), D.src = M;
    }), U = (M) => {
      s(M);
    };
    return ae.jsx(z.Fragment, {
      children: ae.jsx(Je, {
        children: ae.jsx(_e, {
          image: A,
          crop: i,
          zoom: r,
          aspect: 1,
          onCropChange: t,
          onCropComplete: c,
          onZoomChange: U,
          style: {
            containerStyle: {
              width: u || "250px",
              height: v || "250px",
              position: "relative",
              borderRadius: "20px"
            }
          }
        })
      })
    });
  });
  Je = ye.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
});
export {
  Ve as I,
  __tla
};
