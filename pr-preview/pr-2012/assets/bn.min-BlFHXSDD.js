import { dV as ei, e4 as si, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let ui;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  ui = ei(function(ii) {
    (function(qt, ri) {
      function m(t, h) {
        if (!t) throw Error(h || "Assertion failed");
      }
      function et(t, h) {
        t.super_ = h;
        var e = function() {
        };
        e.prototype = h.prototype, t.prototype = new e(), t.prototype.constructor = t;
      }
      function s(t, h, e) {
        if (s.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, t !== null && (h !== "le" && h !== "be" || (e = h, h = 10), this._init(t || 0, h || 10, e || "be"));
      }
      var ot;
      typeof qt == "object" ? qt.exports = s : ri.BN = s, s.BN = s, s.wordSize = 26;
      try {
        ot = void 0;
      } catch {
      }
      function Bt(t, h, e) {
        for (var r = 0, i = Math.min(t.length, e), n = h; n < i; n++) {
          var o = t.charCodeAt(n) - 48;
          r <<= 4, r |= o >= 49 && o <= 54 ? o - 49 + 10 : o >= 17 && o <= 22 ? o - 17 + 10 : 15 & o;
        }
        return r;
      }
      function Nt(t, h, e, r) {
        for (var i = 0, n = Math.min(t.length, e), o = h; o < n; o++) {
          var l = t.charCodeAt(o) - 48;
          i *= r, i += l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l;
        }
        return i;
      }
      s.isBN = function(t) {
        return t instanceof s || t !== null && typeof t == "object" && t.constructor.wordSize === s.wordSize && Array.isArray(t.words);
      }, s.max = function(t, h) {
        return t.cmp(h) > 0 ? t : h;
      }, s.min = function(t, h) {
        return t.cmp(h) < 0 ? t : h;
      }, s.prototype._init = function(t, h, e) {
        if (typeof t == "number") return this._initNumber(t, h, e);
        if (typeof t == "object") return this._initArray(t, h, e);
        h === "hex" && (h = 16), m(h === (0 | h) && h >= 2 && h <= 36);
        var r = 0;
        (t = t.toString().replace(/\s+/g, ""))[0] === "-" && r++, h === 16 ? this._parseHex(t, r) : this._parseBase(t, h, r), t[0] === "-" && (this.negative = 1), this.strip(), e === "le" && this._initArray(this.toArray(), h, e);
      }, s.prototype._initNumber = function(t, h, e) {
        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [
          67108863 & t
        ], this.length = 1) : t < 4503599627370496 ? (this.words = [
          67108863 & t,
          t / 67108864 & 67108863
        ], this.length = 2) : (m(t < 9007199254740992), this.words = [
          67108863 & t,
          t / 67108864 & 67108863,
          1
        ], this.length = 3), e === "le" && this._initArray(this.toArray(), h, e);
      }, s.prototype._initArray = function(t, h, e) {
        if (m(typeof t.length == "number"), t.length <= 0) return this.words = [
          0
        ], this.length = 1, this;
        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
        for (var r = 0; r < this.length; r++) this.words[r] = 0;
        var i, n, o = 0;
        if (e === "be") for (r = t.length - 1, i = 0; r >= 0; r -= 3) n = t[r] | t[r - 1] << 8 | t[r - 2] << 16, this.words[i] |= n << o & 67108863, this.words[i + 1] = n >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, i++);
        else if (e === "le") for (r = 0, i = 0; r < t.length; r += 3) n = t[r] | t[r + 1] << 8 | t[r + 2] << 16, this.words[i] |= n << o & 67108863, this.words[i + 1] = n >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, i++);
        return this.strip();
      }, s.prototype._parseHex = function(t, h) {
        this.length = Math.ceil((t.length - h) / 6), this.words = Array(this.length);
        for (var e = 0; e < this.length; e++) this.words[e] = 0;
        var r, i, n = 0;
        for (e = t.length - 6, r = 0; e >= h; e -= 6) i = Bt(t, e, e + 6), this.words[r] |= i << n & 67108863, this.words[r + 1] |= i >>> 26 - n & 4194303, (n += 24) >= 26 && (n -= 26, r++);
        e + 6 !== h && (i = Bt(t, h, e + 6), this.words[r] |= i << n & 67108863, this.words[r + 1] |= i >>> 26 - n & 4194303), this.strip();
      }, s.prototype._parseBase = function(t, h, e) {
        this.words = [
          0
        ], this.length = 1;
        for (var r = 0, i = 1; i <= 67108863; i *= h) r++;
        r--, i = i / h | 0;
        for (var n = t.length - e, o = n % r, l = Math.min(n, n - o) + e, a = 0, u = e; u < l; u += r) a = Nt(t, u, u + r, h), this.imuln(i), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
        if (o !== 0) {
          var f = 1;
          for (a = Nt(t, u, t.length, h), u = 0; u < o; u++) f *= h;
          this.imuln(f), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
        }
      }, s.prototype.copy = function(t) {
        t.words = Array(this.length);
        for (var h = 0; h < this.length; h++) t.words[h] = this.words[h];
        t.length = this.length, t.negative = this.negative, t.red = this.red;
      }, s.prototype.clone = function() {
        var t = new s(null);
        return this.copy(t), t;
      }, s.prototype._expand = function(t) {
        for (; this.length < t; ) this.words[this.length++] = 0;
        return this;
      }, s.prototype.strip = function() {
        for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
        return this._normSign();
      }, s.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, s.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var Lt = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ], hi = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ], ni = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      function It(t, h, e) {
        e.negative = h.negative ^ t.negative;
        var r = t.length + h.length | 0;
        e.length = r, r = r - 1 | 0;
        var i = 0 | t.words[0], n = 0 | h.words[0], o = i * n, l = 67108863 & o, a = o / 67108864 | 0;
        e.words[0] = l;
        for (var u = 1; u < r; u++) {
          for (var f = a >>> 26, d = 67108863 & a, p = Math.min(u, h.length - 1), M = Math.max(0, u - t.length + 1); M <= p; M++) {
            var v = u - M | 0;
            f += (o = (i = 0 | t.words[v]) * (n = 0 | h.words[M]) + d) / 67108864 | 0, d = 67108863 & o;
          }
          e.words[u] = 0 | d, a = 0 | f;
        }
        return a !== 0 ? e.words[u] = 0 | a : e.length--, e.strip();
      }
      s.prototype.toString = function(t, h) {
        var e;
        if (h = 0 | h || 1, (t = t || 10) === 16 || t === "hex") {
          e = "";
          for (var r = 0, i = 0, n = 0; n < this.length; n++) {
            var o = this.words[n], l = (16777215 & (o << r | i)).toString(16);
            e = (i = o >>> 24 - r & 16777215) !== 0 || n !== this.length - 1 ? Lt[6 - l.length] + l + e : l + e, (r += 2) >= 26 && (r -= 26, n--);
          }
          for (i !== 0 && (e = i.toString(16) + e); e.length % h != 0; ) e = "0" + e;
          return this.negative !== 0 && (e = "-" + e), e;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var a = hi[t], u = ni[t];
          e = "";
          var f = this.clone();
          for (f.negative = 0; !f.isZero(); ) {
            var d = f.modn(u).toString(t);
            e = (f = f.idivn(u)).isZero() ? d + e : Lt[a - d.length] + d + e;
          }
          for (this.isZero() && (e = "0" + e); e.length % h != 0; ) e = "0" + e;
          return this.negative !== 0 && (e = "-" + e), e;
        }
        m(false, "Base should be between 2 and 36");
      }, s.prototype.toNumber = function() {
        var t = this.words[0];
        return this.length === 2 ? t += 67108864 * this.words[1] : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && m(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
      }, s.prototype.toJSON = function() {
        return this.toString(16);
      }, s.prototype.toBuffer = function(t, h) {
        return m(ot !== void 0), this.toArrayLike(ot, t, h);
      }, s.prototype.toArray = function(t, h) {
        return this.toArrayLike(Array, t, h);
      }, s.prototype.toArrayLike = function(t, h, e) {
        var r = this.byteLength(), i = e || Math.max(1, r);
        m(r <= i, "byte array longer than desired length"), m(i > 0, "Requested array length <= 0"), this.strip();
        var n, o, l = h === "le", a = new t(i), u = this.clone();
        if (l) {
          for (o = 0; !u.isZero(); o++) n = u.andln(255), u.iushrn(8), a[o] = n;
          for (; o < i; o++) a[o] = 0;
        } else {
          for (o = 0; o < i - r; o++) a[o] = 0;
          for (o = 0; !u.isZero(); o++) n = u.andln(255), u.iushrn(8), a[i - o - 1] = n;
        }
        return a;
      }, s.prototype._countBits = Math.clz32 ? function(t) {
        return 32 - Math.clz32(t);
      } : function(t) {
        var h = t, e = 0;
        return h >= 4096 && (e += 13, h >>>= 13), h >= 64 && (e += 7, h >>>= 7), h >= 8 && (e += 4, h >>>= 4), h >= 2 && (e += 2, h >>>= 2), e + h;
      }, s.prototype._zeroBits = function(t) {
        if (t === 0) return 26;
        var h = t, e = 0;
        return !(8191 & h) && (e += 13, h >>>= 13), !(127 & h) && (e += 7, h >>>= 7), !(15 & h) && (e += 4, h >>>= 4), !(3 & h) && (e += 2, h >>>= 2), !(1 & h) && e++, e;
      }, s.prototype.bitLength = function() {
        var t = this.words[this.length - 1], h = this._countBits(t);
        return 26 * (this.length - 1) + h;
      }, s.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var t = 0, h = 0; h < this.length; h++) {
          var e = this._zeroBits(this.words[h]);
          if (t += e, e !== 26) break;
        }
        return t;
      }, s.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, s.prototype.toTwos = function(t) {
        return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
      }, s.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }, s.prototype.isNeg = function() {
        return this.negative !== 0;
      }, s.prototype.neg = function() {
        return this.clone().ineg();
      }, s.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, s.prototype.iuor = function(t) {
        for (; this.length < t.length; ) this.words[this.length++] = 0;
        for (var h = 0; h < t.length; h++) this.words[h] = this.words[h] | t.words[h];
        return this.strip();
      }, s.prototype.ior = function(t) {
        return m((this.negative | t.negative) == 0), this.iuor(t);
      }, s.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
      }, s.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
      }, s.prototype.iuand = function(t) {
        var h;
        h = this.length > t.length ? t : this;
        for (var e = 0; e < h.length; e++) this.words[e] = this.words[e] & t.words[e];
        return this.length = h.length, this.strip();
      }, s.prototype.iand = function(t) {
        return m((this.negative | t.negative) == 0), this.iuand(t);
      }, s.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
      }, s.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
      }, s.prototype.iuxor = function(t) {
        var h, e;
        this.length > t.length ? (h = this, e = t) : (h = t, e = this);
        for (var r = 0; r < e.length; r++) this.words[r] = h.words[r] ^ e.words[r];
        if (this !== h) for (; r < h.length; r++) this.words[r] = h.words[r];
        return this.length = h.length, this.strip();
      }, s.prototype.ixor = function(t) {
        return m((this.negative | t.negative) == 0), this.iuxor(t);
      }, s.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
      }, s.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
      }, s.prototype.inotn = function(t) {
        m(typeof t == "number" && t >= 0);
        var h = 0 | Math.ceil(t / 26), e = t % 26;
        this._expand(h), e > 0 && h--;
        for (var r = 0; r < h; r++) this.words[r] = 67108863 & ~this.words[r];
        return e > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - e), this.strip();
      }, s.prototype.notn = function(t) {
        return this.clone().inotn(t);
      }, s.prototype.setn = function(t, h) {
        m(typeof t == "number" && t >= 0);
        var e = t / 26 | 0, r = t % 26;
        return this._expand(e + 1), this.words[e] = h ? this.words[e] | 1 << r : this.words[e] & ~(1 << r), this.strip();
      }, s.prototype.iadd = function(t) {
        var h, e, r;
        if (this.negative !== 0 && t.negative === 0) return this.negative = 0, h = this.isub(t), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && t.negative !== 0) return t.negative = 0, h = this.isub(t), t.negative = 1, h._normSign();
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var i = 0, n = 0; n < r.length; n++) h = (0 | e.words[n]) + (0 | r.words[n]) + i, this.words[n] = 67108863 & h, i = h >>> 26;
        for (; i !== 0 && n < e.length; n++) h = (0 | e.words[n]) + i, this.words[n] = 67108863 & h, i = h >>> 26;
        if (this.length = e.length, i !== 0) this.words[this.length] = i, this.length++;
        else if (e !== this) for (; n < e.length; n++) this.words[n] = e.words[n];
        return this;
      }, s.prototype.add = function(t) {
        var h;
        return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, h = this.sub(t), t.negative ^= 1, h) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = t.sub(this), this.negative = 1, h) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
      }, s.prototype.isub = function(t) {
        if (t.negative !== 0) {
          t.negative = 0;
          var h = this.iadd(t);
          return t.negative = 1, h._normSign();
        }
        if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var e, r, i = this.cmp(t);
        if (i === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        i > 0 ? (e = this, r = t) : (e = t, r = this);
        for (var n = 0, o = 0; o < r.length; o++) n = (h = (0 | e.words[o]) - (0 | r.words[o]) + n) >> 26, this.words[o] = 67108863 & h;
        for (; n !== 0 && o < e.length; o++) n = (h = (0 | e.words[o]) + n) >> 26, this.words[o] = 67108863 & h;
        if (n === 0 && o < e.length && e !== this) for (; o < e.length; o++) this.words[o] = e.words[o];
        return this.length = Math.max(this.length, o), e !== this && (this.negative = 1), this.strip();
      }, s.prototype.sub = function(t) {
        return this.clone().isub(t);
      };
      var zt = function(t, h, e) {
        var r, i, n, o = t.words, l = h.words, a = e.words, u = 0, f = 0 | o[0], d = 8191 & f, p = f >>> 13, M = 0 | o[1], v = 8191 & M, g = M >>> 13, rt = 0 | o[2], c = 8191 & rt, w = rt >>> 13, jt = 0 | o[3], b = 8191 & jt, _ = jt >>> 13, Kt = 0 | o[4], k = 8191 & Kt, A = Kt >>> 13, Pt = 0 | o[5], x = 8191 & Pt, S = Pt >>> 13, Ft = 0 | o[6], Z = 8191 & Ft, R = Ft >>> 13, Ct = 0 | o[7], q = 8191 & Ct, B = Ct >>> 13, Dt = 0 | o[8], N = 8191 & Dt, L = Dt >>> 13, Ht = 0 | o[9], I = 8191 & Ht, z = Ht >>> 13, Jt = 0 | l[0], E = 8191 & Jt, T = Jt >>> 13, Ut = 0 | l[1], O = 8191 & Ut, j = Ut >>> 13, Vt = 0 | l[2], K = 8191 & Vt, P = Vt >>> 13, Gt = 0 | l[3], F = 8191 & Gt, C = Gt >>> 13, Qt = 0 | l[4], D = 8191 & Qt, H = Qt >>> 13, Wt = 0 | l[5], J = 8191 & Wt, U = Wt >>> 13, Xt = 0 | l[6], V = 8191 & Xt, G = Xt >>> 13, Yt = 0 | l[7], Q = 8191 & Yt, W = Yt >>> 13, $t = 0 | l[8], X = 8191 & $t, Y = $t >>> 13, ti = 0 | l[9], $ = 8191 & ti, tt = ti >>> 13;
        e.negative = t.negative ^ h.negative, e.length = 19;
        var lt = (u + (r = Math.imul(d, E)) | 0) + ((8191 & (i = (i = Math.imul(d, T)) + Math.imul(p, E) | 0)) << 13) | 0;
        u = ((n = Math.imul(p, T)) + (i >>> 13) | 0) + (lt >>> 26) | 0, lt &= 67108863, r = Math.imul(v, E), i = (i = Math.imul(v, T)) + Math.imul(g, E) | 0, n = Math.imul(g, T);
        var mt = (u + (r = r + Math.imul(d, O) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, j) | 0) + Math.imul(p, O) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, j) | 0) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, r = Math.imul(c, E), i = (i = Math.imul(c, T)) + Math.imul(w, E) | 0, n = Math.imul(w, T), r = r + Math.imul(v, O) | 0, i = (i = i + Math.imul(v, j) | 0) + Math.imul(g, O) | 0, n = n + Math.imul(g, j) | 0;
        var ft = (u + (r = r + Math.imul(d, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, P) | 0) + Math.imul(p, K) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, P) | 0) + (i >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, r = Math.imul(b, E), i = (i = Math.imul(b, T)) + Math.imul(_, E) | 0, n = Math.imul(_, T), r = r + Math.imul(c, O) | 0, i = (i = i + Math.imul(c, j) | 0) + Math.imul(w, O) | 0, n = n + Math.imul(w, j) | 0, r = r + Math.imul(v, K) | 0, i = (i = i + Math.imul(v, P) | 0) + Math.imul(g, K) | 0, n = n + Math.imul(g, P) | 0;
        var dt = (u + (r = r + Math.imul(d, F) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, C) | 0) + Math.imul(p, F) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, C) | 0) + (i >>> 13) | 0) + (dt >>> 26) | 0, dt &= 67108863, r = Math.imul(k, E), i = (i = Math.imul(k, T)) + Math.imul(A, E) | 0, n = Math.imul(A, T), r = r + Math.imul(b, O) | 0, i = (i = i + Math.imul(b, j) | 0) + Math.imul(_, O) | 0, n = n + Math.imul(_, j) | 0, r = r + Math.imul(c, K) | 0, i = (i = i + Math.imul(c, P) | 0) + Math.imul(w, K) | 0, n = n + Math.imul(w, P) | 0, r = r + Math.imul(v, F) | 0, i = (i = i + Math.imul(v, C) | 0) + Math.imul(g, F) | 0, n = n + Math.imul(g, C) | 0;
        var pt = (u + (r = r + Math.imul(d, D) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, H) | 0) + Math.imul(p, D) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, H) | 0) + (i >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, r = Math.imul(x, E), i = (i = Math.imul(x, T)) + Math.imul(S, E) | 0, n = Math.imul(S, T), r = r + Math.imul(k, O) | 0, i = (i = i + Math.imul(k, j) | 0) + Math.imul(A, O) | 0, n = n + Math.imul(A, j) | 0, r = r + Math.imul(b, K) | 0, i = (i = i + Math.imul(b, P) | 0) + Math.imul(_, K) | 0, n = n + Math.imul(_, P) | 0, r = r + Math.imul(c, F) | 0, i = (i = i + Math.imul(c, C) | 0) + Math.imul(w, F) | 0, n = n + Math.imul(w, C) | 0, r = r + Math.imul(v, D) | 0, i = (i = i + Math.imul(v, H) | 0) + Math.imul(g, D) | 0, n = n + Math.imul(g, H) | 0;
        var Mt = (u + (r = r + Math.imul(d, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, U) | 0) + Math.imul(p, J) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, U) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(Z, E), i = (i = Math.imul(Z, T)) + Math.imul(R, E) | 0, n = Math.imul(R, T), r = r + Math.imul(x, O) | 0, i = (i = i + Math.imul(x, j) | 0) + Math.imul(S, O) | 0, n = n + Math.imul(S, j) | 0, r = r + Math.imul(k, K) | 0, i = (i = i + Math.imul(k, P) | 0) + Math.imul(A, K) | 0, n = n + Math.imul(A, P) | 0, r = r + Math.imul(b, F) | 0, i = (i = i + Math.imul(b, C) | 0) + Math.imul(_, F) | 0, n = n + Math.imul(_, C) | 0, r = r + Math.imul(c, D) | 0, i = (i = i + Math.imul(c, H) | 0) + Math.imul(w, D) | 0, n = n + Math.imul(w, H) | 0, r = r + Math.imul(v, J) | 0, i = (i = i + Math.imul(v, U) | 0) + Math.imul(g, J) | 0, n = n + Math.imul(g, U) | 0;
        var vt = (u + (r = r + Math.imul(d, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, G) | 0) + Math.imul(p, V) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, G) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(q, E), i = (i = Math.imul(q, T)) + Math.imul(B, E) | 0, n = Math.imul(B, T), r = r + Math.imul(Z, O) | 0, i = (i = i + Math.imul(Z, j) | 0) + Math.imul(R, O) | 0, n = n + Math.imul(R, j) | 0, r = r + Math.imul(x, K) | 0, i = (i = i + Math.imul(x, P) | 0) + Math.imul(S, K) | 0, n = n + Math.imul(S, P) | 0, r = r + Math.imul(k, F) | 0, i = (i = i + Math.imul(k, C) | 0) + Math.imul(A, F) | 0, n = n + Math.imul(A, C) | 0, r = r + Math.imul(b, D) | 0, i = (i = i + Math.imul(b, H) | 0) + Math.imul(_, D) | 0, n = n + Math.imul(_, H) | 0, r = r + Math.imul(c, J) | 0, i = (i = i + Math.imul(c, U) | 0) + Math.imul(w, J) | 0, n = n + Math.imul(w, U) | 0, r = r + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, G) | 0) + Math.imul(g, V) | 0, n = n + Math.imul(g, G) | 0;
        var gt = (u + (r = r + Math.imul(d, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, W) | 0) + Math.imul(p, Q) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, W) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(N, E), i = (i = Math.imul(N, T)) + Math.imul(L, E) | 0, n = Math.imul(L, T), r = r + Math.imul(q, O) | 0, i = (i = i + Math.imul(q, j) | 0) + Math.imul(B, O) | 0, n = n + Math.imul(B, j) | 0, r = r + Math.imul(Z, K) | 0, i = (i = i + Math.imul(Z, P) | 0) + Math.imul(R, K) | 0, n = n + Math.imul(R, P) | 0, r = r + Math.imul(x, F) | 0, i = (i = i + Math.imul(x, C) | 0) + Math.imul(S, F) | 0, n = n + Math.imul(S, C) | 0, r = r + Math.imul(k, D) | 0, i = (i = i + Math.imul(k, H) | 0) + Math.imul(A, D) | 0, n = n + Math.imul(A, H) | 0, r = r + Math.imul(b, J) | 0, i = (i = i + Math.imul(b, U) | 0) + Math.imul(_, J) | 0, n = n + Math.imul(_, U) | 0, r = r + Math.imul(c, V) | 0, i = (i = i + Math.imul(c, G) | 0) + Math.imul(w, V) | 0, n = n + Math.imul(w, G) | 0, r = r + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, W) | 0) + Math.imul(g, Q) | 0, n = n + Math.imul(g, W) | 0;
        var ct = (u + (r = r + Math.imul(d, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, Y) | 0) + Math.imul(p, X) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, Y) | 0) + (i >>> 13) | 0) + (ct >>> 26) | 0, ct &= 67108863, r = Math.imul(I, E), i = (i = Math.imul(I, T)) + Math.imul(z, E) | 0, n = Math.imul(z, T), r = r + Math.imul(N, O) | 0, i = (i = i + Math.imul(N, j) | 0) + Math.imul(L, O) | 0, n = n + Math.imul(L, j) | 0, r = r + Math.imul(q, K) | 0, i = (i = i + Math.imul(q, P) | 0) + Math.imul(B, K) | 0, n = n + Math.imul(B, P) | 0, r = r + Math.imul(Z, F) | 0, i = (i = i + Math.imul(Z, C) | 0) + Math.imul(R, F) | 0, n = n + Math.imul(R, C) | 0, r = r + Math.imul(x, D) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(S, D) | 0, n = n + Math.imul(S, H) | 0, r = r + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, U) | 0) + Math.imul(A, J) | 0, n = n + Math.imul(A, U) | 0, r = r + Math.imul(b, V) | 0, i = (i = i + Math.imul(b, G) | 0) + Math.imul(_, V) | 0, n = n + Math.imul(_, G) | 0, r = r + Math.imul(c, Q) | 0, i = (i = i + Math.imul(c, W) | 0) + Math.imul(w, Q) | 0, n = n + Math.imul(w, W) | 0, r = r + Math.imul(v, X) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(g, X) | 0, n = n + Math.imul(g, Y) | 0;
        var wt = (u + (r = r + Math.imul(d, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, tt) | 0) + Math.imul(p, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(p, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(I, O), i = (i = Math.imul(I, j)) + Math.imul(z, O) | 0, n = Math.imul(z, j), r = r + Math.imul(N, K) | 0, i = (i = i + Math.imul(N, P) | 0) + Math.imul(L, K) | 0, n = n + Math.imul(L, P) | 0, r = r + Math.imul(q, F) | 0, i = (i = i + Math.imul(q, C) | 0) + Math.imul(B, F) | 0, n = n + Math.imul(B, C) | 0, r = r + Math.imul(Z, D) | 0, i = (i = i + Math.imul(Z, H) | 0) + Math.imul(R, D) | 0, n = n + Math.imul(R, H) | 0, r = r + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, U) | 0) + Math.imul(S, J) | 0, n = n + Math.imul(S, U) | 0, r = r + Math.imul(k, V) | 0, i = (i = i + Math.imul(k, G) | 0) + Math.imul(A, V) | 0, n = n + Math.imul(A, G) | 0, r = r + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, W) | 0) + Math.imul(_, Q) | 0, n = n + Math.imul(_, W) | 0, r = r + Math.imul(c, X) | 0, i = (i = i + Math.imul(c, Y) | 0) + Math.imul(w, X) | 0, n = n + Math.imul(w, Y) | 0;
        var yt = (u + (r = r + Math.imul(v, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, tt) | 0) + Math.imul(g, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(g, tt) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(I, K), i = (i = Math.imul(I, P)) + Math.imul(z, K) | 0, n = Math.imul(z, P), r = r + Math.imul(N, F) | 0, i = (i = i + Math.imul(N, C) | 0) + Math.imul(L, F) | 0, n = n + Math.imul(L, C) | 0, r = r + Math.imul(q, D) | 0, i = (i = i + Math.imul(q, H) | 0) + Math.imul(B, D) | 0, n = n + Math.imul(B, H) | 0, r = r + Math.imul(Z, J) | 0, i = (i = i + Math.imul(Z, U) | 0) + Math.imul(R, J) | 0, n = n + Math.imul(R, U) | 0, r = r + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, G) | 0) + Math.imul(S, V) | 0, n = n + Math.imul(S, G) | 0, r = r + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, W) | 0) + Math.imul(A, Q) | 0, n = n + Math.imul(A, W) | 0, r = r + Math.imul(b, X) | 0, i = (i = i + Math.imul(b, Y) | 0) + Math.imul(_, X) | 0, n = n + Math.imul(_, Y) | 0;
        var bt = (u + (r = r + Math.imul(c, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(w, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(w, tt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(I, F), i = (i = Math.imul(I, C)) + Math.imul(z, F) | 0, n = Math.imul(z, C), r = r + Math.imul(N, D) | 0, i = (i = i + Math.imul(N, H) | 0) + Math.imul(L, D) | 0, n = n + Math.imul(L, H) | 0, r = r + Math.imul(q, J) | 0, i = (i = i + Math.imul(q, U) | 0) + Math.imul(B, J) | 0, n = n + Math.imul(B, U) | 0, r = r + Math.imul(Z, V) | 0, i = (i = i + Math.imul(Z, G) | 0) + Math.imul(R, V) | 0, n = n + Math.imul(R, G) | 0, r = r + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, W) | 0) + Math.imul(S, Q) | 0, n = n + Math.imul(S, W) | 0, r = r + Math.imul(k, X) | 0, i = (i = i + Math.imul(k, Y) | 0) + Math.imul(A, X) | 0, n = n + Math.imul(A, Y) | 0;
        var _t = (u + (r = r + Math.imul(b, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, tt) | 0) + Math.imul(_, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(_, tt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(I, D), i = (i = Math.imul(I, H)) + Math.imul(z, D) | 0, n = Math.imul(z, H), r = r + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, U) | 0) + Math.imul(L, J) | 0, n = n + Math.imul(L, U) | 0, r = r + Math.imul(q, V) | 0, i = (i = i + Math.imul(q, G) | 0) + Math.imul(B, V) | 0, n = n + Math.imul(B, G) | 0, r = r + Math.imul(Z, Q) | 0, i = (i = i + Math.imul(Z, W) | 0) + Math.imul(R, Q) | 0, n = n + Math.imul(R, W) | 0, r = r + Math.imul(x, X) | 0, i = (i = i + Math.imul(x, Y) | 0) + Math.imul(S, X) | 0, n = n + Math.imul(S, Y) | 0;
        var kt = (u + (r = r + Math.imul(k, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, tt) | 0) + Math.imul(A, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(A, tt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(I, J), i = (i = Math.imul(I, U)) + Math.imul(z, J) | 0, n = Math.imul(z, U), r = r + Math.imul(N, V) | 0, i = (i = i + Math.imul(N, G) | 0) + Math.imul(L, V) | 0, n = n + Math.imul(L, G) | 0, r = r + Math.imul(q, Q) | 0, i = (i = i + Math.imul(q, W) | 0) + Math.imul(B, Q) | 0, n = n + Math.imul(B, W) | 0, r = r + Math.imul(Z, X) | 0, i = (i = i + Math.imul(Z, Y) | 0) + Math.imul(R, X) | 0, n = n + Math.imul(R, Y) | 0;
        var At = (u + (r = r + Math.imul(x, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, tt) | 0) + Math.imul(S, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(S, tt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(I, V), i = (i = Math.imul(I, G)) + Math.imul(z, V) | 0, n = Math.imul(z, G), r = r + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, W) | 0) + Math.imul(L, Q) | 0, n = n + Math.imul(L, W) | 0, r = r + Math.imul(q, X) | 0, i = (i = i + Math.imul(q, Y) | 0) + Math.imul(B, X) | 0, n = n + Math.imul(B, Y) | 0;
        var xt = (u + (r = r + Math.imul(Z, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(Z, tt) | 0) + Math.imul(R, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(R, tt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(I, Q), i = (i = Math.imul(I, W)) + Math.imul(z, Q) | 0, n = Math.imul(z, W), r = r + Math.imul(N, X) | 0, i = (i = i + Math.imul(N, Y) | 0) + Math.imul(L, X) | 0, n = n + Math.imul(L, Y) | 0;
        var St = (u + (r = r + Math.imul(q, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(q, tt) | 0) + Math.imul(B, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(B, tt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(I, X), i = (i = Math.imul(I, Y)) + Math.imul(z, X) | 0, n = Math.imul(z, Y);
        var Zt = (u + (r = r + Math.imul(N, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, tt) | 0) + Math.imul(L, $) | 0)) << 13) | 0;
        u = ((n = n + Math.imul(L, tt) | 0) + (i >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863;
        var Rt = (u + (r = Math.imul(I, $)) | 0) + ((8191 & (i = (i = Math.imul(I, tt)) + Math.imul(z, $) | 0)) << 13) | 0;
        return u = ((n = Math.imul(z, tt)) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, a[0] = lt, a[1] = mt, a[2] = ft, a[3] = dt, a[4] = pt, a[5] = Mt, a[6] = vt, a[7] = gt, a[8] = ct, a[9] = wt, a[10] = yt, a[11] = bt, a[12] = _t, a[13] = kt, a[14] = At, a[15] = xt, a[16] = St, a[17] = Zt, a[18] = Rt, u !== 0 && (a[19] = u, e.length++), e;
      };
      function Et(t, h, e) {
        return new ht().mulp(t, h, e);
      }
      function ht(t, h) {
        this.x = t, this.y = h;
      }
      Math.imul || (zt = It), s.prototype.mulTo = function(t, h) {
        var e, r = this.length + t.length;
        return e = this.length === 10 && t.length === 10 ? zt(this, t, h) : r < 63 ? It(this, t, h) : r < 1024 ? function(i, n, o) {
          o.negative = n.negative ^ i.negative, o.length = i.length + n.length;
          for (var l = 0, a = 0, u = 0; u < o.length - 1; u++) {
            var f = a;
            a = 0;
            for (var d = 67108863 & l, p = Math.min(u, n.length - 1), M = Math.max(0, u - i.length + 1); M <= p; M++) {
              var v = u - M, g = (0 | i.words[v]) * (0 | n.words[M]), rt = 67108863 & g;
              d = 67108863 & (rt = rt + d | 0), a += (f = (f = f + (g / 67108864 | 0) | 0) + (rt >>> 26) | 0) >>> 26, f &= 67108863;
            }
            o.words[u] = d, l = f, f = a;
          }
          return l !== 0 ? o.words[u] = l : o.length--, o.strip();
        }(this, t, h) : Et(this, t, h), e;
      }, ht.prototype.makeRBT = function(t) {
        for (var h = Array(t), e = s.prototype._countBits(t) - 1, r = 0; r < t; r++) h[r] = this.revBin(r, e, t);
        return h;
      }, ht.prototype.revBin = function(t, h, e) {
        if (t === 0 || t === e - 1) return t;
        for (var r = 0, i = 0; i < h; i++) r |= (1 & t) << h - i - 1, t >>= 1;
        return r;
      }, ht.prototype.permute = function(t, h, e, r, i, n) {
        for (var o = 0; o < n; o++) r[o] = h[t[o]], i[o] = e[t[o]];
      }, ht.prototype.transform = function(t, h, e, r, i, n) {
        this.permute(n, t, h, e, r, i);
        for (var o = 1; o < i; o <<= 1) for (var l = o << 1, a = Math.cos(2 * Math.PI / l), u = Math.sin(2 * Math.PI / l), f = 0; f < i; f += l) for (var d = a, p = u, M = 0; M < o; M++) {
          var v = e[f + M], g = r[f + M], rt = e[f + M + o], c = r[f + M + o], w = d * rt - p * c;
          c = d * c + p * rt, rt = w, e[f + M] = v + rt, r[f + M] = g + c, e[f + M + o] = v - rt, r[f + M + o] = g - c, M !== l && (w = a * d - u * p, p = a * p + u * d, d = w);
        }
      }, ht.prototype.guessLen13b = function(t, h) {
        var e = 1 | Math.max(h, t), r = 1 & e, i = 0;
        for (e = e / 2 | 0; e; e >>>= 1) i++;
        return 1 << i + 1 + r;
      }, ht.prototype.conjugate = function(t, h, e) {
        if (!(e <= 1)) for (var r = 0; r < e / 2; r++) {
          var i = t[r];
          t[r] = t[e - r - 1], t[e - r - 1] = i, i = h[r], h[r] = -h[e - r - 1], h[e - r - 1] = -i;
        }
      }, ht.prototype.normalize13b = function(t, h) {
        for (var e = 0, r = 0; r < h / 2; r++) {
          var i = 8192 * Math.round(t[2 * r + 1] / h) + Math.round(t[2 * r] / h) + e;
          t[r] = 67108863 & i, e = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return t;
      }, ht.prototype.convert13b = function(t, h, e, r) {
        for (var i = 0, n = 0; n < h; n++) i += 0 | t[n], e[2 * n] = 8191 & i, i >>>= 13, e[2 * n + 1] = 8191 & i, i >>>= 13;
        for (n = 2 * h; n < r; ++n) e[n] = 0;
        m(i === 0), m((-8192 & i) == 0);
      }, ht.prototype.stub = function(t) {
        for (var h = Array(t), e = 0; e < t; e++) h[e] = 0;
        return h;
      }, ht.prototype.mulp = function(t, h, e) {
        var r = 2 * this.guessLen13b(t.length, h.length), i = this.makeRBT(r), n = this.stub(r), o = Array(r), l = Array(r), a = Array(r), u = Array(r), f = Array(r), d = Array(r), p = e.words;
        p.length = r, this.convert13b(t.words, t.length, o, r), this.convert13b(h.words, h.length, u, r), this.transform(o, n, l, a, r, i), this.transform(u, n, f, d, r, i);
        for (var M = 0; M < r; M++) {
          var v = l[M] * f[M] - a[M] * d[M];
          a[M] = l[M] * d[M] + a[M] * f[M], l[M] = v;
        }
        return this.conjugate(l, a, r), this.transform(l, a, p, n, r, i), this.conjugate(p, n, r), this.normalize13b(p, r), e.negative = t.negative ^ h.negative, e.length = t.length + h.length, e.strip();
      }, s.prototype.mul = function(t) {
        var h = new s(null);
        return h.words = Array(this.length + t.length), this.mulTo(t, h);
      }, s.prototype.mulf = function(t) {
        var h = new s(null);
        return h.words = Array(this.length + t.length), Et(this, t, h);
      }, s.prototype.imul = function(t) {
        return this.clone().mulTo(t, this);
      }, s.prototype.imuln = function(t) {
        m(typeof t == "number"), m(t < 67108864);
        for (var h = 0, e = 0; e < this.length; e++) {
          var r = (0 | this.words[e]) * t, i = (67108863 & r) + (67108863 & h);
          h >>= 26, h += r / 67108864 | 0, h += i >>> 26, this.words[e] = 67108863 & i;
        }
        return h !== 0 && (this.words[e] = h, this.length++), this;
      }, s.prototype.muln = function(t) {
        return this.clone().imuln(t);
      }, s.prototype.sqr = function() {
        return this.mul(this);
      }, s.prototype.isqr = function() {
        return this.imul(this.clone());
      }, s.prototype.pow = function(t) {
        var h = function(n) {
          for (var o = Array(n.bitLength()), l = 0; l < o.length; l++) {
            var a = l / 26 | 0, u = l % 26;
            o[l] = (n.words[a] & 1 << u) >>> u;
          }
          return o;
        }(t);
        if (h.length === 0) return new s(1);
        for (var e = this, r = 0; r < h.length && h[r] === 0; r++, e = e.sqr()) ;
        if (++r < h.length) for (var i = e.sqr(); r < h.length; r++, i = i.sqr()) h[r] !== 0 && (e = e.mul(i));
        return e;
      }, s.prototype.iushln = function(t) {
        m(typeof t == "number" && t >= 0);
        var h, e = t % 26, r = (t - e) / 26, i = 67108863 >>> 26 - e << 26 - e;
        if (e !== 0) {
          var n = 0;
          for (h = 0; h < this.length; h++) {
            var o = this.words[h] & i, l = (0 | this.words[h]) - o << e;
            this.words[h] = l | n, n = o >>> 26 - e;
          }
          n && (this.words[h] = n, this.length++);
        }
        if (r !== 0) {
          for (h = this.length - 1; h >= 0; h--) this.words[h + r] = this.words[h];
          for (h = 0; h < r; h++) this.words[h] = 0;
          this.length += r;
        }
        return this.strip();
      }, s.prototype.ishln = function(t) {
        return m(this.negative === 0), this.iushln(t);
      }, s.prototype.iushrn = function(t, h, e) {
        var r;
        m(typeof t == "number" && t >= 0), r = h ? (h - h % 26) / 26 : 0;
        var i = t % 26, n = Math.min((t - i) / 26, this.length), o = 67108863 ^ 67108863 >>> i << i, l = e;
        if (r = Math.max(0, r -= n), l) {
          for (var a = 0; a < n; a++) l.words[a] = this.words[a];
          l.length = n;
        }
        if (n !== 0) if (this.length > n) for (this.length -= n, a = 0; a < this.length; a++) this.words[a] = this.words[a + n];
        else this.words[0] = 0, this.length = 1;
        var u = 0;
        for (a = this.length - 1; a >= 0 && (u !== 0 || a >= r); a--) {
          var f = 0 | this.words[a];
          this.words[a] = u << 26 - i | f >>> i, u = f & o;
        }
        return l && u !== 0 && (l.words[l.length++] = u), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, s.prototype.ishrn = function(t, h, e) {
        return m(this.negative === 0), this.iushrn(t, h, e);
      }, s.prototype.shln = function(t) {
        return this.clone().ishln(t);
      }, s.prototype.ushln = function(t) {
        return this.clone().iushln(t);
      }, s.prototype.shrn = function(t) {
        return this.clone().ishrn(t);
      }, s.prototype.ushrn = function(t) {
        return this.clone().iushrn(t);
      }, s.prototype.testn = function(t) {
        m(typeof t == "number" && t >= 0);
        var h = t % 26, e = (t - h) / 26, r = 1 << h;
        return !(this.length <= e) && !!(this.words[e] & r);
      }, s.prototype.imaskn = function(t) {
        m(typeof t == "number" && t >= 0);
        var h = t % 26, e = (t - h) / 26;
        if (m(this.negative === 0, "imaskn works only with positive numbers"), this.length <= e) return this;
        if (h !== 0 && e++, this.length = Math.min(e, this.length), h !== 0) {
          var r = 67108863 ^ 67108863 >>> h << h;
          this.words[this.length - 1] &= r;
        }
        return this.strip();
      }, s.prototype.maskn = function(t) {
        return this.clone().imaskn(t);
      }, s.prototype.iaddn = function(t) {
        return m(typeof t == "number"), m(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
      }, s.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var h = 0; h < this.length && this.words[h] >= 67108864; h++) this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
        return this.length = Math.max(this.length, h + 1), this;
      }, s.prototype.isubn = function(t) {
        if (m(typeof t == "number"), m(t < 67108864), t < 0) return this.iaddn(-t);
        if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
        else for (var h = 0; h < this.length && this.words[h] < 0; h++) this.words[h] += 67108864, this.words[h + 1] -= 1;
        return this.strip();
      }, s.prototype.addn = function(t) {
        return this.clone().iaddn(t);
      }, s.prototype.subn = function(t) {
        return this.clone().isubn(t);
      }, s.prototype.iabs = function() {
        return this.negative = 0, this;
      }, s.prototype.abs = function() {
        return this.clone().iabs();
      }, s.prototype._ishlnsubmul = function(t, h, e) {
        var r, i, n = t.length + e;
        this._expand(n);
        var o = 0;
        for (r = 0; r < t.length; r++) {
          i = (0 | this.words[r + e]) + o;
          var l = (0 | t.words[r]) * h;
          o = ((i -= 67108863 & l) >> 26) - (l / 67108864 | 0), this.words[r + e] = 67108863 & i;
        }
        for (; r < this.length - e; r++) o = (i = (0 | this.words[r + e]) + o) >> 26, this.words[r + e] = 67108863 & i;
        if (o === 0) return this.strip();
        for (m(o === -1), o = 0, r = 0; r < this.length; r++) o = (i = -(0 | this.words[r]) + o) >> 26, this.words[r] = 67108863 & i;
        return this.negative = 1, this.strip();
      }, s.prototype._wordDiv = function(t, h) {
        var e = (this.length, t.length), r = this.clone(), i = t, n = 0 | i.words[i.length - 1];
        (e = 26 - this._countBits(n)) !== 0 && (i = i.ushln(e), r.iushln(e), n = 0 | i.words[i.length - 1]);
        var o, l = r.length - i.length;
        if (h !== "mod") {
          (o = new s(null)).length = l + 1, o.words = Array(o.length);
          for (var a = 0; a < o.length; a++) o.words[a] = 0;
        }
        var u = r.clone()._ishlnsubmul(i, 1, l);
        u.negative === 0 && (r = u, o && (o.words[l] = 1));
        for (var f = l - 1; f >= 0; f--) {
          var d = 67108864 * (0 | r.words[i.length + f]) + (0 | r.words[i.length + f - 1]);
          for (d = Math.min(d / n | 0, 67108863), r._ishlnsubmul(i, d, f); r.negative !== 0; ) d--, r.negative = 0, r._ishlnsubmul(i, 1, f), r.isZero() || (r.negative ^= 1);
          o && (o.words[f] = d);
        }
        return o && o.strip(), r.strip(), h !== "div" && e !== 0 && r.iushrn(e), {
          div: o || null,
          mod: r
        };
      }, s.prototype.divmod = function(t, h, e) {
        return m(!t.isZero()), this.isZero() ? {
          div: new s(0),
          mod: new s(0)
        } : this.negative !== 0 && t.negative === 0 ? (n = this.neg().divmod(t, h), h !== "mod" && (r = n.div.neg()), h !== "div" && (i = n.mod.neg(), e && i.negative !== 0 && i.iadd(t)), {
          div: r,
          mod: i
        }) : this.negative === 0 && t.negative !== 0 ? (n = this.divmod(t.neg(), h), h !== "mod" && (r = n.div.neg()), {
          div: r,
          mod: n.mod
        }) : this.negative & t.negative ? (n = this.neg().divmod(t.neg(), h), h !== "div" && (i = n.mod.neg(), e && i.negative !== 0 && i.isub(t)), {
          div: n.div,
          mod: i
        }) : t.length > this.length || this.cmp(t) < 0 ? {
          div: new s(0),
          mod: this
        } : t.length === 1 ? h === "div" ? {
          div: this.divn(t.words[0]),
          mod: null
        } : h === "mod" ? {
          div: null,
          mod: new s(this.modn(t.words[0]))
        } : {
          div: this.divn(t.words[0]),
          mod: new s(this.modn(t.words[0]))
        } : this._wordDiv(t, h);
        var r, i, n;
      }, s.prototype.div = function(t) {
        return this.divmod(t, "div", false).div;
      }, s.prototype.mod = function(t) {
        return this.divmod(t, "mod", false).mod;
      }, s.prototype.umod = function(t) {
        return this.divmod(t, "mod", true).mod;
      }, s.prototype.divRound = function(t) {
        var h = this.divmod(t);
        if (h.mod.isZero()) return h.div;
        var e = h.div.negative !== 0 ? h.mod.isub(t) : h.mod, r = t.ushrn(1), i = t.andln(1), n = e.cmp(r);
        return n < 0 || i === 1 && n === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1);
      }, s.prototype.modn = function(t) {
        m(t <= 67108863);
        for (var h = (1 << 26) % t, e = 0, r = this.length - 1; r >= 0; r--) e = (h * e + (0 | this.words[r])) % t;
        return e;
      }, s.prototype.idivn = function(t) {
        m(t <= 67108863);
        for (var h = 0, e = this.length - 1; e >= 0; e--) {
          var r = (0 | this.words[e]) + 67108864 * h;
          this.words[e] = r / t | 0, h = r % t;
        }
        return this.strip();
      }, s.prototype.divn = function(t) {
        return this.clone().idivn(t);
      }, s.prototype.egcd = function(t) {
        m(t.negative === 0), m(!t.isZero());
        var h = this, e = t.clone();
        h = h.negative !== 0 ? h.umod(t) : h.clone();
        for (var r = new s(1), i = new s(0), n = new s(0), o = new s(1), l = 0; h.isEven() && e.isEven(); ) h.iushrn(1), e.iushrn(1), ++l;
        for (var a = e.clone(), u = h.clone(); !h.isZero(); ) {
          for (var f = 0, d = 1; !(h.words[0] & d) && f < 26; ++f, d <<= 1) ;
          if (f > 0) for (h.iushrn(f); f-- > 0; ) (r.isOdd() || i.isOdd()) && (r.iadd(a), i.isub(u)), r.iushrn(1), i.iushrn(1);
          for (var p = 0, M = 1; !(e.words[0] & M) && p < 26; ++p, M <<= 1) ;
          if (p > 0) for (e.iushrn(p); p-- > 0; ) (n.isOdd() || o.isOdd()) && (n.iadd(a), o.isub(u)), n.iushrn(1), o.iushrn(1);
          h.cmp(e) >= 0 ? (h.isub(e), r.isub(n), i.isub(o)) : (e.isub(h), n.isub(r), o.isub(i));
        }
        return {
          a: n,
          b: o,
          gcd: e.iushln(l)
        };
      }, s.prototype._invmp = function(t) {
        m(t.negative === 0), m(!t.isZero());
        var h = this, e = t.clone();
        h = h.negative !== 0 ? h.umod(t) : h.clone();
        for (var r, i = new s(1), n = new s(0), o = e.clone(); h.cmpn(1) > 0 && e.cmpn(1) > 0; ) {
          for (var l = 0, a = 1; !(h.words[0] & a) && l < 26; ++l, a <<= 1) ;
          if (l > 0) for (h.iushrn(l); l-- > 0; ) i.isOdd() && i.iadd(o), i.iushrn(1);
          for (var u = 0, f = 1; !(e.words[0] & f) && u < 26; ++u, f <<= 1) ;
          if (u > 0) for (e.iushrn(u); u-- > 0; ) n.isOdd() && n.iadd(o), n.iushrn(1);
          h.cmp(e) >= 0 ? (h.isub(e), i.isub(n)) : (e.isub(h), n.isub(i));
        }
        return (r = h.cmpn(1) === 0 ? i : n).cmpn(0) < 0 && r.iadd(t), r;
      }, s.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var h = this.clone(), e = t.clone();
        h.negative = 0, e.negative = 0;
        for (var r = 0; h.isEven() && e.isEven(); r++) h.iushrn(1), e.iushrn(1);
        for (; ; ) {
          for (; h.isEven(); ) h.iushrn(1);
          for (; e.isEven(); ) e.iushrn(1);
          var i = h.cmp(e);
          if (i < 0) {
            var n = h;
            h = e, e = n;
          } else if (i === 0 || e.cmpn(1) === 0) break;
          h.isub(e);
        }
        return e.iushln(r);
      }, s.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t);
      }, s.prototype.isEven = function() {
        return (1 & this.words[0]) == 0;
      }, s.prototype.isOdd = function() {
        return (1 & this.words[0]) == 1;
      }, s.prototype.andln = function(t) {
        return this.words[0] & t;
      }, s.prototype.bincn = function(t) {
        m(typeof t == "number");
        var h = t % 26, e = (t - h) / 26, r = 1 << h;
        if (this.length <= e) return this._expand(e + 1), this.words[e] |= r, this;
        for (var i = r, n = e; i !== 0 && n < this.length; n++) {
          var o = 0 | this.words[n];
          i = (o += i) >>> 26, o &= 67108863, this.words[n] = o;
        }
        return i !== 0 && (this.words[n] = i, this.length++), this;
      }, s.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, s.prototype.cmpn = function(t) {
        var h, e = t < 0;
        if (this.negative !== 0 && !e) return -1;
        if (this.negative === 0 && e) return 1;
        if (this.strip(), this.length > 1) h = 1;
        else {
          e && (t = -t), m(t <= 67108863, "Number is too big");
          var r = 0 | this.words[0];
          h = r === t ? 0 : r < t ? -1 : 1;
        }
        return this.negative !== 0 ? 0 | -h : h;
      }, s.prototype.cmp = function(t) {
        if (this.negative !== 0 && t.negative === 0) return -1;
        if (this.negative === 0 && t.negative !== 0) return 1;
        var h = this.ucmp(t);
        return this.negative !== 0 ? 0 | -h : h;
      }, s.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        for (var h = 0, e = this.length - 1; e >= 0; e--) {
          var r = 0 | this.words[e], i = 0 | t.words[e];
          if (r !== i) {
            r < i ? h = -1 : r > i && (h = 1);
            break;
          }
        }
        return h;
      }, s.prototype.gtn = function(t) {
        return this.cmpn(t) === 1;
      }, s.prototype.gt = function(t) {
        return this.cmp(t) === 1;
      }, s.prototype.gten = function(t) {
        return this.cmpn(t) >= 0;
      }, s.prototype.gte = function(t) {
        return this.cmp(t) >= 0;
      }, s.prototype.ltn = function(t) {
        return this.cmpn(t) === -1;
      }, s.prototype.lt = function(t) {
        return this.cmp(t) === -1;
      }, s.prototype.lten = function(t) {
        return this.cmpn(t) <= 0;
      }, s.prototype.lte = function(t) {
        return this.cmp(t) <= 0;
      }, s.prototype.eqn = function(t) {
        return this.cmpn(t) === 0;
      }, s.prototype.eq = function(t) {
        return this.cmp(t) === 0;
      }, s.red = function(t) {
        return new y(t);
      }, s.prototype.toRed = function(t) {
        return m(!this.red, "Already a number in reduction context"), m(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
      }, s.prototype.fromRed = function() {
        return m(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, s.prototype._forceRed = function(t) {
        return this.red = t, this;
      }, s.prototype.forceRed = function(t) {
        return m(!this.red, "Already a number in reduction context"), this._forceRed(t);
      }, s.prototype.redAdd = function(t) {
        return m(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
      }, s.prototype.redIAdd = function(t) {
        return m(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
      }, s.prototype.redSub = function(t) {
        return m(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
      }, s.prototype.redISub = function(t) {
        return m(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
      }, s.prototype.redShl = function(t) {
        return m(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
      }, s.prototype.redMul = function(t) {
        return m(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
      }, s.prototype.redIMul = function(t) {
        return m(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
      }, s.prototype.redSqr = function() {
        return m(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, s.prototype.redISqr = function() {
        return m(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, s.prototype.redSqrt = function() {
        return m(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, s.prototype.redInvm = function() {
        return m(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, s.prototype.redNeg = function() {
        return m(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, s.prototype.redPow = function(t) {
        return m(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
      };
      var ut = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function it(t, h) {
        this.name = t, this.p = new s(h, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function st() {
        it.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      function Tt() {
        it.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      function Ot() {
        it.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      function at() {
        it.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      function y(t) {
        if (typeof t == "string") {
          var h = s._prime(t);
          this.m = h.p, this.prime = h;
        } else m(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
      }
      function nt(t) {
        y.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      it.prototype._tmp = function() {
        var t = new s(null);
        return t.words = Array(Math.ceil(this.n / 13)), t;
      }, it.prototype.ireduce = function(t) {
        var h, e = t;
        do
          this.split(e, this.tmp), h = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
        while (h > this.n);
        var r = h < this.n ? -1 : e.ucmp(this.p);
        return r === 0 ? (e.words[0] = 0, e.length = 1) : r > 0 ? e.isub(this.p) : e.strip(), e;
      }, it.prototype.split = function(t, h) {
        t.iushrn(this.n, 0, h);
      }, it.prototype.imulK = function(t) {
        return t.imul(this.k);
      }, et(st, it), st.prototype.split = function(t, h) {
        for (var e = 4194303, r = Math.min(t.length, 9), i = 0; i < r; i++) h.words[i] = t.words[i];
        if (h.length = r, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
        var n = t.words[9];
        for (h.words[h.length++] = n & e, i = 10; i < t.length; i++) {
          var o = 0 | t.words[i];
          t.words[i - 10] = (o & e) << 4 | n >>> 22, n = o;
        }
        n >>>= 22, t.words[i - 10] = n, n === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
      }, st.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        for (var h = 0, e = 0; e < t.length; e++) {
          var r = 0 | t.words[e];
          h += 977 * r, t.words[e] = 67108863 & h, h = 64 * r + (h / 67108864 | 0);
        }
        return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
      }, et(Tt, it), et(Ot, it), et(at, it), at.prototype.imulK = function(t) {
        for (var h = 0, e = 0; e < t.length; e++) {
          var r = 19 * (0 | t.words[e]) + h, i = 67108863 & r;
          r >>>= 26, t.words[e] = i, h = r;
        }
        return h !== 0 && (t.words[t.length++] = h), t;
      }, s._prime = function(t) {
        if (ut[t]) return ut[t];
        var h;
        if (t === "k256") h = new st();
        else if (t === "p224") h = new Tt();
        else if (t === "p192") h = new Ot();
        else {
          if (t !== "p25519") throw Error("Unknown prime " + t);
          h = new at();
        }
        return ut[t] = h, h;
      }, y.prototype._verify1 = function(t) {
        m(t.negative === 0, "red works only with positives"), m(t.red, "red works only with red numbers");
      }, y.prototype._verify2 = function(t, h) {
        m((t.negative | h.negative) == 0, "red works only with positives"), m(t.red && t.red === h.red, "red works only with red numbers");
      }, y.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
      }, y.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }, y.prototype.add = function(t, h) {
        this._verify2(t, h);
        var e = t.add(h);
        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
      }, y.prototype.iadd = function(t, h) {
        this._verify2(t, h);
        var e = t.iadd(h);
        return e.cmp(this.m) >= 0 && e.isub(this.m), e;
      }, y.prototype.sub = function(t, h) {
        this._verify2(t, h);
        var e = t.sub(h);
        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this);
      }, y.prototype.isub = function(t, h) {
        this._verify2(t, h);
        var e = t.isub(h);
        return e.cmpn(0) < 0 && e.iadd(this.m), e;
      }, y.prototype.shl = function(t, h) {
        return this._verify1(t), this.imod(t.ushln(h));
      }, y.prototype.imul = function(t, h) {
        return this._verify2(t, h), this.imod(t.imul(h));
      }, y.prototype.mul = function(t, h) {
        return this._verify2(t, h), this.imod(t.mul(h));
      }, y.prototype.isqr = function(t) {
        return this.imul(t, t.clone());
      }, y.prototype.sqr = function(t) {
        return this.mul(t, t);
      }, y.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var h = this.m.andln(3);
        if (m(h % 2 == 1), h === 3) {
          var e = this.m.add(new s(1)).iushrn(2);
          return this.pow(t, e);
        }
        for (var r = this.m.subn(1), i = 0; !r.isZero() && r.andln(1) === 0; ) i++, r.iushrn(1);
        m(!r.isZero());
        var n = new s(1).toRed(this), o = n.redNeg(), l = this.m.subn(1).iushrn(1), a = this.m.bitLength();
        for (a = new s(2 * a * a).toRed(this); this.pow(a, l).cmp(o) !== 0; ) a.redIAdd(o);
        for (var u = this.pow(a, r), f = this.pow(t, r.addn(1).iushrn(1)), d = this.pow(t, r), p = i; d.cmp(n) !== 0; ) {
          for (var M = d, v = 0; M.cmp(n) !== 0; v++) M = M.redSqr();
          m(v < p);
          var g = this.pow(u, new s(1).iushln(p - v - 1));
          f = f.redMul(g), u = g.redSqr(), d = d.redMul(u), p = v;
        }
        return f;
      }, y.prototype.invm = function(t) {
        var h = t._invmp(this.m);
        return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h);
      }, y.prototype.pow = function(t, h) {
        if (h.isZero()) return new s(1).toRed(this);
        if (h.cmpn(1) === 0) return t.clone();
        var e = Array(16);
        e[0] = new s(1).toRed(this), e[1] = t;
        for (var r = 2; r < e.length; r++) e[r] = this.mul(e[r - 1], t);
        var i = e[0], n = 0, o = 0, l = h.bitLength() % 26;
        for (l === 0 && (l = 26), r = h.length - 1; r >= 0; r--) {
          for (var a = h.words[r], u = l - 1; u >= 0; u--) {
            var f = a >> u & 1;
            i !== e[0] && (i = this.sqr(i)), f !== 0 || n !== 0 ? (n <<= 1, n |= f, (++o === 4 || r === 0 && u === 0) && (i = this.mul(i, e[n]), o = 0, n = 0)) : o = 0;
          }
          l = 26;
        }
        return i;
      }, y.prototype.convertTo = function(t) {
        var h = t.umod(this.m);
        return h === t ? h.clone() : h;
      }, y.prototype.convertFrom = function(t) {
        var h = t.clone();
        return h.red = null, h;
      }, s.mont = function(t) {
        return new nt(t);
      }, et(nt, y), nt.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift));
      }, nt.prototype.convertFrom = function(t) {
        var h = this.imod(t.mul(this.rinv));
        return h.red = null, h;
      }, nt.prototype.imul = function(t, h) {
        if (t.isZero() || h.isZero()) return t.words[0] = 0, t.length = 1, t;
        var e = t.imul(h), r = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = e.isub(r).iushrn(this.shift), n = i;
        return i.cmp(this.m) >= 0 ? n = i.isub(this.m) : i.cmpn(0) < 0 && (n = i.iadd(this.m)), n._forceRed(this);
      }, nt.prototype.mul = function(t, h) {
        if (t.isZero() || h.isZero()) return new s(0)._forceRed(this);
        var e = t.mul(h), r = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = e.isub(r).iushrn(this.shift), n = i;
        return i.cmp(this.m) >= 0 ? n = i.isub(this.m) : i.cmpn(0) < 0 && (n = i.iadd(this.m)), n._forceRed(this);
      }, nt.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    })(ii, si);
  });
});
export {
  ui as __moduleExports,
  __tla,
  ui as default
};
