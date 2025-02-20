import { ea as i, er as $e, fD as He, fE as xe, fC as ze, f_ as Xe, ji as Ze, jj as Qe, jk as et, jl as qe, fA as $, jm as _e, jn as tt, jo as nt, eH as rt, e5 as Q, eb as g, gr as Te, gs as it, gt as at, ev as R, ep as E, fk as st, fm as ot, jp as ct, en as ye, em as lt, e7 as S, f4 as dt, hK as ht, eq as ut, e6 as gt, gx as pt, hT as ft, hU as mt, eP as xt, gf as yt, iK as vt, g0 as Ct, iH as It, j4 as wt, e9 as St, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { S as Et, a as jt, u as Pt, __tla as __tla_1 } from "./StakingVariant-DNq5gXe8.js";
import { u as _t, __tla as __tla_2 } from "./useGetPaymentDetails-XEeanHXv.js";
import { S as Tt, __tla as __tla_3 } from "./Stepper-Cp08iENs.js";
import { I as kt, P as Ut, __tla as __tla_4 } from "./ImportPushTokenMessage-6wo1Sfjl.js";
import { u as Ft, __tla as __tla_5 } from "./useGetChannelCategories-CKhGXq_b.js";
import { u as Nt, F as Lt, b as Bt, c as bt, a as V, __tla as __tla_6 } from "./index.esm-CwzlWqAK.js";
import { g as Y, U as Dt, b as ke } from "./Common.form-B0yEfNXt.js";
import { I as At, __tla as __tla_7 } from "./ImageClipper-B4Tf8CLB.js";
let Cr, vr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  const Rt = (e) => {
    const { svgProps: t, ...n } = e;
    return i.jsx($e, {
      componentName: "CloudUpload",
      icon: i.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 53 52",
        fill: "none",
        ...t,
        children: [
          i.jsx("path", {
            d: "M16.1888 26.3978L26.7966 15.7901L37.4043 26.3978",
            stroke: "#C4CBD5",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          i.jsx("path", {
            d: "M27.0618 50.0001V16.8509",
            stroke: "#C4CBD5",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          i.jsx("path", {
            d: "M21.4927 35.4144H11.1502C8.05625 35.0608 1.86841 32.4972 1.86841 25.0718C1.86841 17.6464 8.05625 14.9061 11.1502 14.4641C11.769 10.3094 15.6585 2 26.2662 2C39.2607 2 41.0286 10.8398 41.9126 16.0553C45.0065 15.9669 51.4596 19.2906 51.4596 26.9282C51.2828 29.7569 49.6032 35.4144 44.2993 35.4144C38.9955 35.4144 34.1336 35.4144 32.3656 35.4144",
            stroke: "#C4CBD5",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      }),
      ...n
    });
  }, Mt = async (e) => {
    const { channelType: t, identityBytes: n, fees: r, signer: a } = e;
    return (await new He(xe.epnscore, ze.epnscore, a).createChannelWithPUSH(t, n, r, 0, {
      gasLimit: 6e5
    })).wait();
  }, Ot = () => Xe({
    mutationKey: [
      Ze
    ],
    mutationFn: Mt
  });
  var ve = {
    exports: {}
  }, Se = {
    exports: {}
  }, Gt = Qe(), Ve = et().EventEmitter;
  Se.exports = I;
  Se.exports.default = I;
  function I(e) {
    if (!(this instanceof I)) return new I(e);
    Ve.call(this), e = e || {}, this.concurrency = e.concurrency || 1 / 0, this.timeout = e.timeout || 0, this.autostart = e.autostart || false, this.results = e.results || null, this.pending = 0, this.session = 0, this.running = false, this.jobs = [], this.timers = {};
  }
  Gt(I, Ve);
  var Ht = [
    "pop",
    "shift",
    "indexOf",
    "lastIndexOf"
  ];
  Ht.forEach(function(e) {
    I.prototype[e] = function() {
      return Array.prototype[e].apply(this.jobs, arguments);
    };
  });
  I.prototype.slice = function(e, t) {
    return this.jobs = this.jobs.slice(e, t), this;
  };
  I.prototype.reverse = function() {
    return this.jobs.reverse(), this;
  };
  var zt = [
    "push",
    "unshift",
    "splice"
  ];
  zt.forEach(function(e) {
    I.prototype[e] = function() {
      var t = Array.prototype[e].apply(this.jobs, arguments);
      return this.autostart && this.start(), t;
    };
  });
  Object.defineProperty(I.prototype, "length", {
    get: function() {
      return this.pending + this.jobs.length;
    }
  });
  I.prototype.start = function(e) {
    if (e && Vt.call(this, e), this.running = true, this.pending >= this.concurrency) return;
    if (this.jobs.length === 0) {
      this.pending === 0 && Ce.call(this);
      return;
    }
    var t = this, n = this.jobs.shift(), r = true, a = this.session, s = null, o = false, f = null, y = n.timeout || this.timeout;
    function v(d, w) {
      r && t.session === a && (r = false, t.pending--, s !== null && (delete t.timers[s], clearTimeout(s)), d ? t.emit("error", d, n) : o === false && (f !== null && (t.results[f] = Array.prototype.slice.call(arguments, 1)), t.emit("success", w, n)), t.session === a && (t.pending === 0 && t.jobs.length === 0 ? Ce.call(t) : t.running && t.start()));
    }
    y && (s = setTimeout(function() {
      o = true, t.listeners("timeout").length > 0 ? t.emit("timeout", v, n) : v();
    }, y), this.timers[s] = s), this.results && (f = this.results.length, this.results[f] = null), this.pending++, t.emit("start", n);
    var l = n(v);
    l && l.then && typeof l.then == "function" && l.then(function(d) {
      return v(null, d);
    }).catch(function(d) {
      return v(d || true);
    }), this.running && this.jobs.length > 0 && this.start();
  };
  I.prototype.stop = function() {
    this.running = false;
  };
  I.prototype.end = function(e) {
    qt.call(this), this.jobs.length = 0, this.pending = 0, Ce.call(this, e);
  };
  function qt() {
    for (var e in this.timers) {
      var t = this.timers[e];
      delete this.timers[e], clearTimeout(t);
    }
  }
  function Vt(e) {
    var t = this;
    this.on("error", n), this.on("end", r);
    function n(a) {
      t.end(a);
    }
    function r(a) {
      t.removeListener("error", n), t.removeListener("end", r), e(a, this.results);
    }
  }
  function Ce(e) {
    this.session++, this.running = false, this.emit("end", e);
  }
  var Yt = Se.exports, M = {}, ee = {};
  Object.defineProperty(ee, "__esModule", {
    value: true
  });
  ee.BMP = void 0;
  ee.BMP = {
    validate(e) {
      return e.toString("ascii", 0, 2) === "BM";
    },
    calculate(e) {
      return {
        height: Math.abs(e.readInt32LE(22)),
        width: e.readUInt32LE(18)
      };
    }
  };
  var te = {}, O = {};
  Object.defineProperty(O, "__esModule", {
    value: true
  });
  O.ICO = void 0;
  const Jt = 1, Wt = 6, Kt = 16;
  function Ue(e, t) {
    const n = e.readUInt8(t);
    return n === 0 ? 256 : n;
  }
  function Fe(e, t) {
    const n = Wt + t * Kt;
    return {
      height: Ue(e, n + 1),
      width: Ue(e, n)
    };
  }
  O.ICO = {
    validate(e) {
      return e.readUInt16LE(0) !== 0 ? false : e.readUInt16LE(2) === Jt;
    },
    calculate(e) {
      const t = e.readUInt16LE(4), n = Fe(e, 0);
      if (t === 1) return n;
      const r = [
        n
      ];
      for (let s = 1; s < t; s += 1) r.push(Fe(e, s));
      return {
        height: n.height,
        images: r,
        width: n.width
      };
    }
  };
  Object.defineProperty(te, "__esModule", {
    value: true
  });
  te.CUR = void 0;
  const $t = O, Xt = 2;
  te.CUR = {
    validate(e) {
      return e.readUInt16LE(0) !== 0 ? false : e.readUInt16LE(2) === Xt;
    },
    calculate(e) {
      return $t.ICO.calculate(e);
    }
  };
  var ne = {};
  Object.defineProperty(ne, "__esModule", {
    value: true
  });
  ne.DDS = void 0;
  ne.DDS = {
    validate(e) {
      return e.readUInt32LE(0) === 542327876;
    },
    calculate(e) {
      return {
        height: e.readUInt32LE(12),
        width: e.readUInt32LE(16)
      };
    }
  };
  var re = {};
  Object.defineProperty(re, "__esModule", {
    value: true
  });
  re.GIF = void 0;
  const Zt = /^GIF8[79]a/;
  re.GIF = {
    validate(e) {
      const t = e.toString("ascii", 0, 6);
      return Zt.test(t);
    },
    calculate(e) {
      return {
        height: e.readUInt16LE(8),
        width: e.readUInt16LE(6)
      };
    }
  };
  var ie = {};
  Object.defineProperty(ie, "__esModule", {
    value: true
  });
  ie.ICNS = void 0;
  const Qt = 8, en = 4, tn = 4, nn = {
    ICON: 32,
    "ICN#": 32,
    "icm#": 16,
    icm4: 16,
    icm8: 16,
    "ics#": 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    icp6: 64,
    ic12: 32,
    it32: 128,
    t8mk: 128,
    ic07: 128,
    ic08: 256,
    ic13: 256,
    ic09: 512,
    ic14: 512,
    ic10: 1024
  };
  function Ne(e, t) {
    const n = t + tn;
    return [
      e.toString("ascii", t, n),
      e.readUInt32BE(n)
    ];
  }
  function Le(e) {
    const t = nn[e];
    return {
      width: t,
      height: t,
      type: e
    };
  }
  ie.ICNS = {
    validate(e) {
      return e.toString("ascii", 0, 4) === "icns";
    },
    calculate(e) {
      const t = e.length, n = e.readUInt32BE(en);
      let r = Qt, a = Ne(e, r), s = Le(a[0]);
      if (r += a[1], r === n) return s;
      const o = {
        height: s.height,
        images: [
          s
        ],
        width: s.width
      };
      for (; r < n && r < t; ) a = Ne(e, r), s = Le(a[0]), r += a[1], o.images.push(s);
      return o;
    }
  };
  var ae = {};
  Object.defineProperty(ae, "__esModule", {
    value: true
  });
  ae.J2C = void 0;
  ae.J2C = {
    validate(e) {
      return e.toString("hex", 0, 4) === "ff4fff51";
    },
    calculate(e) {
      return {
        height: e.readUInt32BE(12),
        width: e.readUInt32BE(8)
      };
    }
  };
  var se = {};
  Object.defineProperty(se, "__esModule", {
    value: true
  });
  se.JP2 = void 0;
  const J = {
    ftyp: "66747970",
    jp2h: "6a703268",
    jp__: "6a502020",
    rreq: "72726571"
  }, rn = (e) => {
    const t = e.readUInt8(0);
    let n = 1 + 2 * t;
    const a = e.readUInt16BE(n) * (2 + t);
    n = n + 2 + a;
    const o = e.readUInt16BE(n) * (16 + t);
    return n + 2 + o;
  }, Be = (e) => ({
    height: e.readUInt32BE(4),
    width: e.readUInt32BE(8)
  });
  se.JP2 = {
    validate(e) {
      const t = e.toString("hex", 4, 8), n = e.readUInt32BE(0);
      if (t !== J.jp__ || n < 1) return false;
      const r = n + 4, a = e.readUInt32BE(n);
      return e.slice(r, r + a).toString("hex", 0, 4) === J.ftyp;
    },
    calculate(e) {
      const t = e.readUInt32BE(0), n = e.readUInt16BE(t + 2);
      let r = t + 4 + n;
      switch (e.toString("hex", r, r + 4)) {
        case J.rreq:
          return r = r + 4 + 4 + rn(e.slice(r + 4)), Be(e.slice(r + 8, r + 24));
        case J.jp2h:
          return Be(e.slice(r + 8, r + 24));
        default:
          throw new TypeError("Unsupported header found: " + e.toString("ascii", r, r + 4));
      }
    }
  };
  var oe = {}, G = {};
  Object.defineProperty(G, "__esModule", {
    value: true
  });
  G.readUInt = void 0;
  function an(e, t, n, r) {
    n = n || 0;
    const a = r ? "BE" : "LE", s = "readUInt" + t + a;
    return e[s].call(e, n);
  }
  G.readUInt = an;
  Object.defineProperty(oe, "__esModule", {
    value: true
  });
  oe.JPG = void 0;
  const A = G, sn = "45786966", on = 2, Ie = 6, cn = 2, ln = "4d4d", dn = "4949", be = 12, hn = 2;
  function un(e) {
    return e.toString("hex", 2, 6) === sn;
  }
  function gn(e, t) {
    return {
      height: e.readUInt16BE(t),
      width: e.readUInt16BE(t + 2)
    };
  }
  function pn(e, t) {
    const r = Ie + 8, a = A.readUInt(e, 16, r, t);
    for (let s = 0; s < a; s++) {
      const o = r + hn + s * be, f = o + be;
      if (o > e.length) return;
      const y = e.slice(o, f);
      if (A.readUInt(y, 16, 0, t) === 274) return A.readUInt(y, 16, 2, t) !== 3 || A.readUInt(y, 32, 4, t) !== 1 ? void 0 : A.readUInt(y, 16, 8, t);
    }
  }
  function fn(e, t) {
    const n = e.slice(on, t), r = n.toString("hex", Ie, Ie + cn), a = r === ln;
    if (a || r === dn) return pn(n, a);
  }
  function mn(e, t) {
    if (t > e.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
    if (e[t] !== 255) throw new TypeError("Invalid JPG, marker table corrupted");
  }
  oe.JPG = {
    validate(e) {
      return e.toString("hex", 0, 2) === "ffd8";
    },
    calculate(e) {
      e = e.slice(4);
      let t, n;
      for (; e.length; ) {
        const r = e.readUInt16BE(0);
        if (un(e) && (t = fn(e, r)), mn(e, r), n = e[r + 1], n === 192 || n === 193 || n === 194) {
          const a = gn(e, r + 5);
          return t ? {
            height: a.height,
            orientation: t,
            width: a.width
          } : a;
        }
        e = e.slice(r + 2);
      }
      throw new TypeError("Invalid JPG, no size found");
    }
  };
  var ce = {};
  Object.defineProperty(ce, "__esModule", {
    value: true
  });
  ce.KTX = void 0;
  const xn = "KTX 11";
  ce.KTX = {
    validate(e) {
      return xn === e.toString("ascii", 1, 7);
    },
    calculate(e) {
      return {
        height: e.readUInt32LE(40),
        width: e.readUInt32LE(36)
      };
    }
  };
  var le = {};
  Object.defineProperty(le, "__esModule", {
    value: true
  });
  le.PNG = void 0;
  const yn = `PNG\r

`, vn = "IHDR", De = "CgBI";
  le.PNG = {
    validate(e) {
      if (yn === e.toString("ascii", 1, 8)) {
        let t = e.toString("ascii", 12, 16);
        if (t === De && (t = e.toString("ascii", 28, 32)), t !== vn) throw new TypeError("Invalid PNG");
        return true;
      }
      return false;
    },
    calculate(e) {
      return e.toString("ascii", 12, 16) === De ? {
        height: e.readUInt32BE(36),
        width: e.readUInt32BE(32)
      } : {
        height: e.readUInt32BE(20),
        width: e.readUInt32BE(16)
      };
    }
  };
  var de = {};
  Object.defineProperty(de, "__esModule", {
    value: true
  });
  de.PNM = void 0;
  const Ye = {
    P1: "pbm/ascii",
    P2: "pgm/ascii",
    P3: "ppm/ascii",
    P4: "pbm",
    P5: "pgm",
    P6: "ppm",
    P7: "pam",
    PF: "pfm"
  }, Cn = Object.keys(Ye), Ae = {
    default: (e) => {
      let t = [];
      for (; e.length > 0; ) {
        const n = e.shift();
        if (n[0] !== "#") {
          t = n.split(" ");
          break;
        }
      }
      if (t.length === 2) return {
        height: parseInt(t[1], 10),
        width: parseInt(t[0], 10)
      };
      throw new TypeError("Invalid PNM");
    },
    pam: (e) => {
      const t = {};
      for (; e.length > 0; ) {
        const n = e.shift();
        if (n.length > 16 || n.charCodeAt(0) > 128) continue;
        const [r, a] = n.split(" ");
        if (r && a && (t[r.toLowerCase()] = parseInt(a, 10)), t.height && t.width) break;
      }
      if (t.height && t.width) return {
        height: t.height,
        width: t.width
      };
      throw new TypeError("Invalid PAM");
    }
  };
  de.PNM = {
    validate(e) {
      const t = e.toString("ascii", 0, 2);
      return Cn.includes(t);
    },
    calculate(e) {
      const t = e.toString("ascii", 0, 2), n = Ye[t], r = e.toString("ascii", 3).split(/[\r\n]+/);
      return (Ae[n] || Ae.default)(r);
    }
  };
  var he = {};
  Object.defineProperty(he, "__esModule", {
    value: true
  });
  he.PSD = void 0;
  he.PSD = {
    validate(e) {
      return e.toString("ascii", 0, 4) === "8BPS";
    },
    calculate(e) {
      return {
        height: e.readUInt32BE(14),
        width: e.readUInt32BE(18)
      };
    }
  };
  var ue = {};
  Object.defineProperty(ue, "__esModule", {
    value: true
  });
  ue.SVG = void 0;
  const Je = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/, X = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: Je,
    viewbox: /\sviewBox=(['"])(.+?)\1/,
    width: /\swidth=(['"])([^%]+?)\1/
  }, me = 2.54, In = {
    cm: 96 / me,
    em: 16,
    ex: 8,
    m: 96 / me * 100,
    mm: 96 / me / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72
  };
  function Z(e) {
    const t = /([0-9.]+)([a-z]*)/.exec(e);
    if (t) return Math.round(parseFloat(t[1]) * (In[t[2]] || 1));
  }
  function wn(e) {
    const t = e.split(" ");
    return {
      height: Z(t[3]),
      width: Z(t[2])
    };
  }
  function Sn(e) {
    const t = e.match(X.width), n = e.match(X.height), r = e.match(X.viewbox);
    return {
      height: n && Z(n[2]),
      viewbox: r && wn(r[2]),
      width: t && Z(t[2])
    };
  }
  function En(e) {
    return {
      height: e.height,
      width: e.width
    };
  }
  function jn(e, t) {
    const n = t.width / t.height;
    return e.width ? {
      height: Math.floor(e.width / n),
      width: e.width
    } : e.height ? {
      height: e.height,
      width: Math.floor(e.height * n)
    } : {
      height: t.height,
      width: t.width
    };
  }
  ue.SVG = {
    validate(e) {
      const t = String(e);
      return Je.test(t);
    },
    calculate(e) {
      const t = e.toString("utf8").match(X.root);
      if (t) {
        const n = Sn(t[0]);
        if (n.width && n.height) return En(n);
        if (n.viewbox) return jn(n, n.viewbox);
      }
      throw new TypeError("Invalid SVG");
    }
  };
  var ge = {};
  Object.defineProperty(ge, "__esModule", {
    value: true
  });
  ge.TIFF = void 0;
  const W = qe, B = G;
  function Pn(e, t, n) {
    const r = B.readUInt(e, 32, 4, n);
    let a = 1024;
    const s = W.statSync(t).size;
    r + a > s && (a = s - r - 10);
    const o = $.alloc(a), f = W.openSync(t, "r");
    return W.readSync(f, o, 0, a, r), W.closeSync(f), o.slice(2);
  }
  function _n(e, t) {
    const n = B.readUInt(e, 16, 8, t);
    return (B.readUInt(e, 16, 10, t) << 16) + n;
  }
  function Tn(e) {
    if (e.length > 24) return e.slice(12);
  }
  function kn(e, t) {
    const n = {};
    let r = e;
    for (; r && r.length; ) {
      const a = B.readUInt(r, 16, 0, t), s = B.readUInt(r, 16, 2, t), o = B.readUInt(r, 32, 4, t);
      if (a === 0) break;
      o === 1 && (s === 3 || s === 4) && (n[a] = _n(r, t)), r = Tn(r);
    }
    return n;
  }
  function Un(e) {
    const t = e.toString("ascii", 0, 2);
    if (t === "II") return "LE";
    if (t === "MM") return "BE";
  }
  const Fn = [
    "49492a00",
    "4d4d002a"
  ];
  ge.TIFF = {
    validate(e) {
      return Fn.includes(e.toString("hex", 0, 4));
    },
    calculate(e, t) {
      if (!t) throw new TypeError("Tiff doesn't support buffer");
      const n = Un(e) === "BE", r = Pn(e, t, n), a = kn(r, n), s = a[256], o = a[257];
      if (!s || !o) throw new TypeError("Invalid Tiff. Missing tags");
      return {
        height: o,
        width: s
      };
    }
  };
  var pe = {};
  Object.defineProperty(pe, "__esModule", {
    value: true
  });
  pe.WEBP = void 0;
  function Nn(e) {
    return {
      height: 1 + e.readUIntLE(7, 3),
      width: 1 + e.readUIntLE(4, 3)
    };
  }
  function Ln(e) {
    return {
      height: 1 + ((e[4] & 15) << 10 | e[3] << 2 | (e[2] & 192) >> 6),
      width: 1 + ((e[2] & 63) << 8 | e[1])
    };
  }
  function Bn(e) {
    return {
      height: e.readInt16LE(8) & 16383,
      width: e.readInt16LE(6) & 16383
    };
  }
  pe.WEBP = {
    validate(e) {
      const t = e.toString("ascii", 0, 4) === "RIFF", n = e.toString("ascii", 8, 12) === "WEBP", r = e.toString("ascii", 12, 15) === "VP8";
      return t && n && r;
    },
    calculate(e) {
      const t = e.toString("ascii", 12, 16);
      if (e = e.slice(20, 30), t === "VP8X") {
        const r = e[0], a = (r & 192) === 0, s = (r & 1) === 0;
        if (a && s) return Nn(e);
        throw new TypeError("Invalid WebP");
      }
      if (t === "VP8 " && e[0] !== 47) return Bn(e);
      const n = e.toString("hex", 3, 6);
      if (t === "VP8L" && n !== "9d012a") return Ln(e);
      throw new TypeError("Invalid WebP");
    }
  };
  Object.defineProperty(M, "__esModule", {
    value: true
  });
  M.typeHandlers = void 0;
  const bn = ee, Dn = te, An = ne, Rn = re, Mn = ie, On = O, Gn = ae, Hn = se, zn = oe, qn = ce, Vn = le, Yn = de, Jn = he, Wn = ue, Kn = ge, $n = pe;
  M.typeHandlers = {
    bmp: bn.BMP,
    cur: Dn.CUR,
    dds: An.DDS,
    gif: Rn.GIF,
    icns: Mn.ICNS,
    ico: On.ICO,
    j2c: Gn.J2C,
    jp2: Hn.JP2,
    jpg: zn.JPG,
    ktx: qn.KTX,
    png: Vn.PNG,
    pnm: Yn.PNM,
    psd: Jn.PSD,
    svg: Wn.SVG,
    tiff: Kn.TIFF,
    webp: $n.WEBP
  };
  var fe = {};
  Object.defineProperty(fe, "__esModule", {
    value: true
  });
  fe.detector = void 0;
  const we = M, Xn = Object.keys(we.typeHandlers), Re = {
    56: "psd",
    66: "bmp",
    68: "dds",
    71: "gif",
    73: "tiff",
    77: "tiff",
    82: "webp",
    105: "icns",
    137: "png",
    255: "jpg"
  };
  function Zn(e) {
    const t = e[0];
    if (t in Re) {
      const r = Re[t];
      if (we.typeHandlers[r].validate(e)) return r;
    }
    const n = (r) => we.typeHandlers[r].validate(e);
    return Xn.find(n);
  }
  fe.detector = Zn;
  (function(e, t) {
    var n = _e && _e.__awaiter || function(h, c, u, x) {
      function j(U) {
        return U instanceof u ? U : new u(function(P) {
          P(U);
        });
      }
      return new (u || (u = Promise))(function(U, P) {
        function H(_) {
          try {
            b(x.next(_));
          } catch (L) {
            P(L);
          }
        }
        function z(_) {
          try {
            b(x.throw(_));
          } catch (L) {
            P(L);
          }
        }
        function b(_) {
          _.done ? U(_.value) : j(_.value).then(H, z);
        }
        b((x = x.apply(h, c || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", {
      value: true
    }), t.types = t.setConcurrency = t.imageSize = void 0;
    const r = qe, a = tt, s = Yt, o = M, f = fe, y = 512 * 1024, v = new s.default({
      concurrency: 100,
      autostart: true
    });
    function l(h, c) {
      const u = f.detector(h);
      if (u && u in o.typeHandlers) {
        const x = o.typeHandlers[u].calculate(h, c);
        if (x !== void 0) return x.type = u, x;
      }
      throw new TypeError("unsupported file type: " + u + " (file: " + c + ")");
    }
    function d(h) {
      return n(this, void 0, void 0, function* () {
        const c = yield r.promises.open(h, "r"), { size: u } = yield c.stat();
        if (u <= 0) throw yield c.close(), new Error("Empty file");
        const x = Math.min(u, y), j = $.alloc(x);
        return yield c.read(j, 0, x, 0), yield c.close(), j;
      });
    }
    function w(h) {
      const c = r.openSync(h, "r"), { size: u } = r.fstatSync(c);
      if (u <= 0) throw r.closeSync(c), new Error("Empty file");
      const x = Math.min(u, y), j = $.alloc(x);
      return r.readSync(c, j, 0, x, 0), r.closeSync(c), j;
    }
    e.exports = t = m, t.default = m;
    function m(h, c) {
      if ($.isBuffer(h)) return l(h);
      if (typeof h != "string") throw new TypeError("invalid invocation");
      const u = a.resolve(h);
      if (typeof c == "function") v.push(() => d(u).then((x) => nt.nextTick(c, null, l(x, u))).catch(c));
      else {
        const x = w(u);
        return l(x, u);
      }
    }
    t.imageSize = m, t.setConcurrency = (h) => {
      v.concurrency = h;
    }, t.types = Object.keys(o.typeHandlers);
  })(ve, ve.exports);
  var Qn = ve.exports;
  let er, tr, Ee, nr, je, rr, K, Me, ir, ar, sr, or, Oe, cr, lr, Ge;
  vr = rt(Qn);
  er = bt().shape({
    channelName: V().required(Y("Channel Name")).max(32, ke(32)),
    channelDesc: V().required(Y("Channel Description")).max(250, ke(250)),
    channelCategory: V().required(Y("Channel Category")),
    channelURL: V().required(Y("Channel URL")).test("url", "Please enter a valid channel url", (e) => Dt.test(e))
  });
  tr = ({ children: e, onSubmit: t }) => {
    const n = Nt({
      initialValues: {
        channelName: "",
        channelDesc: "",
        channelCategory: "",
        channelURL: "",
        image: null
      },
      validationSchema: er,
      onSubmit: t
    });
    return i.jsx(Lt, {
      value: n,
      children: e
    });
  };
  Ee = () => {
    const e = Bt();
    if (!e) throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");
    return e;
  };
  nr = ({ handleNextStep: e, setActiveStepKey: t }) => {
    const { values: n, touched: r, setFieldTouched: a, setFieldValue: s, errors: o, validateForm: f, setTouched: y } = Ee(), { isWalletConnected: v, connect: l } = Q(), { data: d } = Ft(), w = () => {
      f().then((m) => {
        y({
          channelName: true,
          channelDesc: true,
          channelCategory: true,
          channelURL: true
        }), Object.keys(m).length === 0 && (v || l(), e("uploadLogo"), t("uploadLogo"));
      });
    };
    return i.jsx(g, {
      display: "flex",
      flexDirection: "column",
      alignSelf: "stretch",
      children: i.jsxs(g, {
        display: "flex",
        flexDirection: "column",
        gap: "spacing-xl",
        alignSelf: "stretch",
        children: [
          i.jsxs(g, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-sm",
            alignSelf: "stretch",
            children: [
              i.jsx(Te, {
                required: true,
                label: "Channel Name",
                value: n.channelName,
                onChange: (m) => {
                  const h = m.target.value;
                  a("channelName", true), s("channelName", h);
                },
                totalCount: 32,
                error: r.channelName && !!(o == null ? void 0 : o.channelName),
                errorMessage: r.channelName ? o == null ? void 0 : o.channelName : ""
              }),
              i.jsx(it, {
                required: true,
                label: "Channel Category",
                options: (d == null ? void 0 : d.selectFieldTags) || [],
                value: n.channelCategory,
                error: r.channelCategory && !!(o == null ? void 0 : o.channelCategory),
                errorMessage: r.channelCategory ? o == null ? void 0 : o.channelCategory : "",
                onSelect: (m) => {
                  a("channelCategory", true), s("channelCategory", m);
                }
              }),
              i.jsx(at, {
                required: true,
                label: "Channel Description",
                placeholder: "Get notified about ...",
                description: "Enter a Brief description of the notifications the user will receive",
                value: n.channelDesc,
                onChange: (m) => {
                  const h = m.target.value;
                  a("channelDesc", true), s("channelDesc", h);
                },
                totalCount: 250,
                error: r.channelDesc && !!(o == null ? void 0 : o.channelDesc),
                errorMessage: r.channelURL ? o == null ? void 0 : o.channelDesc : ""
              }),
              i.jsx(Te, {
                required: true,
                label: "Channel Website URL",
                value: n.channelURL,
                onChange: (m) => {
                  const h = m.target.value;
                  a("channelURL", true), s("channelURL", h);
                },
                error: r.channelURL && !!(o == null ? void 0 : o.channelURL),
                errorMessage: r.channelURL ? o == null ? void 0 : o.channelURL : ""
              })
            ]
          }),
          i.jsx(g, {
            display: "flex",
            justifyContent: "center",
            children: i.jsx(R, {
              onClick: w,
              children: "Next"
            })
          })
        ]
      })
    });
  };
  je = 50;
  rr = [
    {
      label: "Channel Info",
      value: "channelInfo"
    },
    {
      label: "Upload Logo",
      value: "uploadLogo"
    },
    {
      label: "Stake Fees",
      value: "stakeFees"
    }
  ];
  K = {
    progress: null,
    progressInfo: "",
    processingInfo: ""
  };
  Me = {
    txErrorStatus: 0,
    txError: ""
  };
  ir = () => i.jsxs(g, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "spacing-xxs",
    alignSelf: "stretch",
    children: [
      i.jsx(E, {
        variant: "h3-semibold",
        color: "text-primary",
        display: {
          ml: "none",
          initial: "block"
        },
        children: "Create Your Channel"
      }),
      i.jsx(E, {
        variant: "bs-regular",
        color: "text-tertiary",
        display: {
          ml: "none",
          initial: "block"
        },
        children: "Creating your own notification channel to manage, send and notify users."
      }),
      i.jsx(E, {
        variant: "h4-semibold",
        color: "text-primary",
        display: {
          ml: "block",
          initial: "none"
        },
        children: "Create Your Channel"
      }),
      i.jsx(E, {
        variant: "bes-regular",
        color: "text-tertiary",
        display: {
          ml: "block",
          initial: "none"
        },
        textAlign: "center",
        children: "Creating your own notification channel to manage, send and notify users."
      })
    ]
  });
  ar = ({ progressState: e }) => i.jsxs(g, {
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    gap: "spacing-xl",
    alignItems: "center",
    children: [
      i.jsx(g, {
        padding: "spacing-md",
        backgroundColor: "surface-secondary",
        borderRadius: "radius-sm",
        width: "-webkit-fill-available",
        children: i.jsx(E, {
          textAlign: "center",
          variant: "h5-semibold",
          color: "text-brand-medium",
          children: e.progressInfo
        })
      }),
      i.jsx(g, {
        width: "400px",
        children: i.jsx(st, {
          percent: e.progress,
          color: "#D548EC",
          backgroundColor: "#F3AEFF",
          height: "4px"
        })
      }),
      i.jsxs(g, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "spacing-xxxs",
        children: [
          i.jsx(ot, {
            type: ct.PROCESSING,
            size: 16,
            color: "#D548EC"
          }),
          i.jsx(E, {
            variant: "bs-semibold",
            color: "text-secondary",
            children: e.processingInfo
          })
        ]
      })
    ]
  });
  sr = () => {
    const { switchChain: e } = Q(), t = ye.allowedNetworks[0], n = lt[t];
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(g, {
          display: "flex",
          flexDirection: "column",
          padding: "spacing-md",
          backgroundColor: "surface-secondary",
          borderRadius: "radius-sm",
          width: "-webkit-fill-available",
          children: i.jsxs(E, {
            textAlign: "center",
            variant: "h5-semibold",
            color: "text-brand-medium",
            children: [
              "Please select ",
              n,
              " Network in your Wallet to create a channel."
            ]
          })
        }),
        i.jsx(g, {
          display: "flex",
          justifyContent: "center",
          children: i.jsx(R, {
            onClick: () => e(ye.coreContractChain),
            children: "Change Network"
          })
        })
      ]
    });
  };
  or = ({ channelStakeFees: e, handleNextStep: t }) => {
    const n = je, { provider: r, account: a } = Q(), [s, o] = S.useState(0), [f, y] = S.useState(false), [v, l] = S.useState(false), d = async () => {
      l(true);
      const c = await jt({
        address: a,
        provider: r
      });
      l(false), o(c);
    };
    S.useEffect(() => {
      d();
    }, [
      s,
      a
    ]);
    const { handleSubmit: w, validateForm: m } = Ee(), h = () => {
      m().then((c) => {
        (c.channelName || c.channelDesc || c.channelURL || c.channelCategory) && t("channelInfo"), c.image && t("uploadLogo"), Object.keys(c).length || w();
      });
    };
    return i.jsxs(g, {
      display: "flex",
      flexDirection: "column",
      alignSelf: "stretch",
      justifyContent: "center",
      gap: "spacing-xl",
      children: [
        i.jsxs(g, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-sm",
          children: [
            i.jsx(Et, {
              fees: n,
              title: "Amount for Staking",
              balance: s,
              setBalance: o,
              showFaucet: true,
              showBalance: true
            }),
            i.jsx(kt, {
              title: "Don\u2019t see Push token in your wallet?"
            })
          ]
        }),
        i.jsx(g, {
          display: "flex",
          justifyContent: "center",
          children: i.jsx(R, {
            disabled: f || s < n,
            onClick: () => {
              h();
            },
            children: "Create Channel"
          })
        })
      ]
    });
  };
  Oe = (e) => e.type.startsWith("image/");
  cr = async ({ provider: e, account: t }) => {
    let r = await new He(xe.pushToken, ze.pushToken, e).allowance(t, xe.epnscore);
    r = r == null ? void 0 : r.toString();
    const a = dt(r);
    return Number(a);
  };
  lr = ({ view: e, setView: t, setActiveStepKey: n, handleNextStep: r }) => {
    const a = S.useRef(), { values: s, setFieldValue: o } = Ee(), f = async (l) => {
      var _a;
      const d = (_a = l.currentTarget.files) == null ? void 0 : _a[0];
      t(false), d && Oe(d) && await v(d);
    }, y = async (l) => {
      var _a;
      l.preventDefault(), l.stopPropagation(), t(false);
      const d = (_a = l.dataTransfer.files) == null ? void 0 : _a[0];
      d && Oe(d) && await v(d);
    }, v = async (l) => {
      o("image", l);
      const d = new FileReader();
      d.readAsDataURL(l), d.onloadend = () => {
        o("imageSrc", d.result), o("imageType", l.type);
      };
    };
    return i.jsxs(g, {
      display: "flex",
      flexDirection: "column",
      gap: "spacing-lg",
      alignItems: "center",
      alignSelf: "stretch",
      children: [
        i.jsxs(g, {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "spacing-lg",
          children: [
            i.jsx(E, {
              variant: "bes-regular",
              color: "text-tertiary",
              children: "Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px."
            }),
            i.jsx(ht, {
              id: "file-upload",
              onChange: f,
              onDrop: y,
              children: i.jsxs(g, {
                width: {
                  initial: "500px",
                  ml: "325px"
                },
                padding: "spacing-xxl spacing-none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "border-xs dashed stroke-tertiary",
                borderRadius: "radius-md",
                backgroundColor: "surface-secondary",
                gap: "spacing-md",
                children: [
                  (s == null ? void 0 : s.image) ? e ? i.jsx(g, {
                    width: "128px",
                    height: "128px",
                    borderRadius: "radius-md",
                    children: i.jsx("img", {
                      style: {
                        borderRadius: "inherit"
                      },
                      width: "100%",
                      height: "100%",
                      src: s.image,
                      alt: "Cropped Img"
                    })
                  }) : i.jsx(At, {
                    width: "200px",
                    height: "200px",
                    imageSrc: s.imageSrc,
                    imageType: s.imageType,
                    onImageCropped: (l) => {
                      t(true), o("image", l);
                    },
                    ref: a
                  }) : i.jsx(Rt, {
                    size: 50
                  }),
                  i.jsxs(g, {
                    display: "flex",
                    gap: "spacing-xxxs",
                    children: [
                      i.jsx(E, {
                        variant: "bs-semibold",
                        color: "text-tertiary",
                        children: " Drag and Drop or"
                      }),
                      i.jsx("label", {
                        htmlFor: "file-upload",
                        children: i.jsx(E, {
                          variant: "bs-semibold",
                          color: "text-brand-medium",
                          css: ut`cursor:pointer;`,
                          children: "Browse to Choose"
                        })
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (s == null ? void 0 : s.image) && (e ? i.jsx(i.Fragment, {
          children: i.jsx(R, {
            disabled: !e && !(s == null ? void 0 : s.image),
            onClick: () => {
              r("stakeFees"), n("stakeFees");
            },
            children: "Next"
          })
        }) : i.jsx(i.Fragment, {
          children: i.jsx(R, {
            onClick: () => {
              a.current.showCroppedImage();
            },
            children: "Crop Image"
          })
        }))
      ]
    });
  };
  Ge = Ct(je.toString(), 18);
  Cr = () => {
    const { account: e, provider: t, isWalletConnected: n, chainId: r, connect: a } = Q(), s = yt(e, r), o = gt(), [f] = pt(), y = f.get("paymentId"), v = ye.coreContractChain === r, { mutate: l } = Pt(), { mutate: d } = Ot(), [w, m] = S.useState("channelInfo"), [h, c] = S.useState([
      "channelInfo"
    ]), u = (p) => {
      c([
        .../* @__PURE__ */ new Set([
          ...h,
          p
        ])
      ]), m(p);
    }, [x, j] = S.useState(false), [U, P] = S.useState(K), [H, z] = S.useState(Me), { data: b } = ft({
      channelId: s
    }), { selectedPlan: _ } = mt(b), { data: L } = _t({
      paymentId: y
    }), T = (p, k, C) => {
      P((N) => ({
        ...N,
        progress: p,
        progressInfo: k,
        processingInfo: C
      }));
    }, q = (p, k) => {
      z((C) => ({
        ...C,
        txErrorStatus: p,
        txError: k
      }));
    }, We = (p, k) => {
      l({
        noOfTokenToApprove: Ge,
        signer: p
      }, {
        onSuccess: (C) => {
          C.status === 1 && (T(60, "Please complete the transaction in your wallet to continue.", "Approving PUSH"), Pe(p, k));
        },
        onError: (C) => (console.log("Error in approving PUSH Token", C), C.code === 4001 || C.code === "ACTION_REJECTED" ? (console.log("Signature error ", C), q(1, "User Rejected Signature. Please try again.")) : q(2, "Transaction failed due to one of the following reasons:"), P(K), false)
      });
    }, Pe = (p, k) => {
      let C = wt.GENERAL;
      const N = "1+" + k, D = It(N);
      T(70, "Please complete the transaction in your wallet to continue.", "Creating Channel..."), d({
        channelType: C,
        identityBytes: D,
        fees: Ge,
        signer: p
      }, {
        onSuccess: (F) => {
          F.status === 0 ? q(2, "Transaction failed due to one of the following reasons:") : (T(80, "Please wait while we confirm the transaction..", "Transaction Confirmed.."), setTimeout(() => {
            T(90, "Creating your channel, Aligning pixels, adjusting padding... This may take some time.", "Redirecting... Please do not refresh");
          }, 2e3), setTimeout(() => {
            T(100, "Creating your channel, Aligning pixels, adjusting padding... This may take some time.", "Redirecting... Please do not refresh"), o(`${St.ChannelDashboard(e)}`);
          }, 3e3));
        },
        onError: (F) => {
          console.log("Error in transaction from query >>>>", F), F.code === 4001 || F.code === "ACTION_REJECTED" ? (console.log("Signature error ", F), q(1, "User Rejected Signature. Please try again."), P(K)) : (console.error("Error in creating channel--> %o", F), console.error({
            error: F
          }), T(0, "There was an error in creating the Channel", "Kindly Contact support@epns.io to resolve the issue."));
        }
      });
    }, Ke = async (p) => {
      if (P(K), z(Me), !n) {
        a();
        return;
      }
      T(10, "Checking for PUSH Token Approval", "Loading...");
      const k = await cr({
        provider: t,
        account: e
      }), C = JSON.stringify({
        name: p.channelName,
        info: p.channelDesc,
        url: p.channelURL,
        icon: p.image,
        tags: [
          p.channelCategory
        ]
      });
      T(20, "Please wait, payload is getting uploaded to IPFS", "Loading...");
      let N = await vt(C);
      console.debug("IPFS storagePointer:", N), T(40, "Please complete the transaction in your wallet to continue.", "Uploading Payload...");
      var D = t.getSigner(e);
      console.debug(D), k < 50 ? We(D, N) : Pe(D, N);
    };
    return console.log(y), i.jsxs(tr, {
      onSubmit: (p) => Ke(p),
      children: [
        (L == null ? void 0 : L.payment_status) == "SUCCESS" && i.jsx(g, {
          width: {
            initial: "712px",
            ml: "389px"
          },
          children: i.jsx(Ut, {
            variant: "success",
            purchasedPlan: {
              planName: _ == null ? void 0 : _.name
            },
            onAction: () => {
              window.open(`https://sepolia.etherscan.io/tx/${L == null ? void 0 : L.transaction_hash}`, "_blank");
            }
          })
        }),
        i.jsxs(g, {
          padding: {
            initial: "spacing-lg",
            ml: "spacing-sm"
          },
          display: "flex",
          flexDirection: "column",
          gap: "spacing-xl",
          alignSelf: "center",
          width: {
            initial: "648px",
            ml: "357px"
          },
          borderRadius: "radius-md",
          alignItems: "center",
          backgroundColor: "surface-primary",
          margin: {
            initial: "spacing-lg",
            ml: "spacing-sm"
          },
          children: [
            i.jsx(ir, {}),
            !v && i.jsx(sr, {}),
            v && i.jsxs(i.Fragment, {
              children: [
                H.txErrorStatus !== 0 && i.jsx(g, {
                  width: "100%",
                  children: i.jsx(xt, {
                    variant: "error",
                    heading: H.txError,
                    showIcon: true
                  })
                }),
                U.progress ? i.jsx(ar, {
                  progressState: U
                }) : i.jsxs(g, {
                  display: "flex",
                  flexDirection: "column",
                  gap: "spacing-lg",
                  alignItems: "center",
                  alignSelf: "stretch",
                  children: [
                    i.jsx(g, {
                      width: "100%",
                      children: i.jsx(Tt, {
                        steps: rr,
                        completedSteps: h,
                        setActiveStepKey: (p) => m(p)
                      })
                    }),
                    w == "channelInfo" && i.jsx(nr, {
                      handleNextStep: u,
                      setActiveStepKey: m
                    }),
                    w === "uploadLogo" && i.jsx(lr, {
                      view: x,
                      setView: j,
                      setActiveStepKey: m,
                      handleNextStep: u
                    }),
                    w === "stakeFees" && i.jsx(or, {
                      channelStakeFees: je,
                      handleNextStep: u
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
});
export {
  Cr as C,
  __tla,
  vr as v
};
