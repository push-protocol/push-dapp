var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
import { e7 as u, jv as tr, i3 as nr, ic as ae, ea as p, eH as rr, fO as H, el as B, ee as Y, e5 as jt, eT as R, fp as F, fq as Je, ec as pe, ed as D, eX as T, fS as A, jw as lt, e_ as S, ej as C, j9 as zt, hO as ir, fg as or, ef as sr, jx as ar, fb as Q, eW as _, jy as cr, e6 as Bt, eQ as Nt, gk as lr, jz as dr, jA as hr, jB as pr, ib as ur, ie as fr, jC as Ft, jD as mr, eb as gr, ev as Fe, jE as Cr, jF as dt, jG as xr, jH as vr, fh as Ke, gl as qe, gd as re, gh as N, fP as Pe, en as yr, f1 as $e, jI as br, fo as Sr, fn as Er, eS as Rr, eJ as kr, fi as ht, ga as Pr, gn as wr, fj as Tr, eo as Mr, eZ as ee, go as Ir, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { U as pt, b as ut, __tla as __tla_1 } from "./UnlockProfileWrapper-B5-cCTKd.js";
import { R as oe } from "./RecommendedChatsList-C130J5vq.js";
import { d as Ar, g as Lr, u as Dr, s as _r, a as Or, k as ce, j as jr, C as zr, m as Br, n as Nr, i as Fr, e as Hr, h as Ur, o as Ht, __tla as __tla_2 } from "./DefaultPropsProvider-DL2f9Urg.js";
import { w as Vr, h as He, c as Gr, s as Wr, e as Yr, b as Qr, a as Xr, f as Zr, __tla as __tla_3 } from "./useIsFocusVisible-C7z_AP-w.js";
let Pa;
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
  })()
]).then(async () => {
  var _e2, _e3, _t2, _e4;
  function Jr(t, e) {
    for (var n = 0; n < e.length; n++) {
      const r = e[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r) if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(t, i, s.get ? s : {
            enumerable: true,
            get: () => r[i]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  function Kr(...t) {
    return t.reduce((e, n) => n == null ? e : function(...i) {
      e.apply(this, i), n.apply(this, i);
    }, () => {
    });
  }
  function qr(t, e = 166) {
    let n;
    function r(...i) {
      const s = () => {
        t.apply(this, i);
      };
      clearTimeout(n), n = setTimeout(s, e);
    }
    return r.clear = () => {
      clearTimeout(n);
    }, r;
  }
  function $r(t, e) {
    return () => null;
  }
  function ei(t, e) {
    var n, r;
    return u.isValidElement(t) && e.indexOf((n = t.type.muiName) != null ? n : (r = t.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName) !== -1;
  }
  function Ut(t) {
    return t && t.ownerDocument || document;
  }
  function ti(t) {
    return Ut(t).defaultView || window;
  }
  function ni(t, e) {
    return () => null;
  }
  let ft = 0;
  function ri(t) {
    const [e, n] = u.useState(t), r = t || e;
    return u.useEffect(() => {
      e == null && (ft += 1, n(`mui-${ft}`));
    }, [
      e
    ]), r;
  }
  const mt = tr.useId;
  function ii(t) {
    if (mt !== void 0) {
      const e = mt();
      return t ?? e;
    }
    return ri(t);
  }
  function oi(t, e, n, r, i) {
    return null;
  }
  function si({ controlled: t, default: e, name: n, state: r = "value" }) {
    const { current: i } = u.useRef(t !== void 0), [s, a] = u.useState(e), d = i ? t : s, o = u.useCallback((c) => {
      i || a(c);
    }, []);
    return [
      d,
      o
    ];
  }
  function ai(t) {
    return Ar("MuiSvgIcon", t);
  }
  Lr("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge"
  ]);
  const ci = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox"
  ], li = (t) => {
    const { color: e, fontSize: n, classes: r } = t, i = {
      root: [
        "root",
        e !== "inherit" && `color${ce(e)}`,
        `fontSize${ce(n)}`
      ]
    };
    return jr(i, ai, r);
  }, di = _r("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: n } = t;
      return [
        e.root,
        n.color !== "inherit" && e[`color${ce(n.color)}`],
        e[`fontSize${ce(n.fontSize)}`]
      ];
    }
  })(({ theme: t, ownerState: e }) => {
    var n, r, i, s, a, d, o, c, l, h, f, m, g;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: e.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition: (n = t.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
        duration: (i = t.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
      }),
      fontSize: {
        inherit: "inherit",
        small: ((s = t.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
        medium: ((d = t.typography) == null || (o = d.pxToRem) == null ? void 0 : o.call(d, 24)) || "1.5rem",
        large: ((c = t.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 35)) || "2.1875rem"
      }[e.fontSize],
      color: (h = (f = (t.vars || t).palette) == null || (f = f[e.color]) == null ? void 0 : f.main) != null ? h : {
        action: (m = (t.vars || t).palette) == null || (m = m.action) == null ? void 0 : m.active,
        disabled: (g = (t.vars || t).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
        inherit: void 0
      }[e.color]
    };
  }), Ue = u.forwardRef(function(e, n) {
    const r = Dr({
      props: e,
      name: "MuiSvgIcon"
    }), { children: i, className: s, color: a = "inherit", component: d = "svg", fontSize: o = "medium", htmlColor: c, inheritViewBox: l = false, titleAccess: h, viewBox: f = "0 0 24 24" } = r, m = nr(r, ci), g = u.isValidElement(i) && i.type === "svg", x = ae({}, r, {
      color: a,
      component: d,
      fontSize: o,
      instanceFontSize: e.fontSize,
      inheritViewBox: l,
      viewBox: f,
      hasSvgAsChild: g
    }), y = {};
    l || (y.viewBox = f);
    const E = li(x);
    return p.jsxs(di, ae({
      as: d,
      className: Or(E.root, s),
      focusable: "false",
      color: c,
      "aria-hidden": h ? void 0 : true,
      role: h ? "img" : void 0,
      ref: n
    }, y, m, g && i.props, {
      ownerState: x,
      children: [
        g ? i.props.children : i,
        h ? p.jsx("title", {
          children: h
        }) : null
      ]
    }));
  });
  Ue.muiName = "SvgIcon";
  function hi(t, e) {
    function n(r, i) {
      return p.jsx(Ue, ae({
        "data-testid": `${e}Icon`,
        ref: i
      }, r, {
        children: t
      }));
    }
    return n.muiName = Ue.muiName, u.memo(u.forwardRef(n));
  }
  const pi = {
    configure: (t) => {
      zr.configure(t);
    }
  }, ui = Object.freeze(Object.defineProperty({
    __proto__: null,
    capitalize: ce,
    createChainedFunction: Kr,
    createSvgIcon: hi,
    debounce: qr,
    deprecatedPropType: $r,
    isMuiElement: ei,
    ownerDocument: Ut,
    ownerWindow: ti,
    requirePropFactory: ni,
    setRef: Br,
    unstable_ClassNameGenerator: pi,
    unstable_useEnhancedEffect: Nr,
    unstable_useId: ii,
    unsupportedProp: oi,
    useControlled: si,
    useEventCallback: Fr,
    useForkRef: Hr,
    useIsFocusVisible: Ur
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  class fi {
    constructor() {
      this.encoder = new TextEncoder(), this._pieces = [], this._parts = [];
    }
    append_buffer(e) {
      this.flush(), this._parts.push(e);
    }
    append(e) {
      this._pieces.push(e);
    }
    flush() {
      if (this._pieces.length > 0) {
        const e = new Uint8Array(this._pieces);
        this._parts.push(e), this._pieces = [];
      }
    }
    toArrayBuffer() {
      const e = [];
      for (const n of this._parts) e.push(n);
      return mi(e).buffer;
    }
  }
  function mi(t) {
    let e = 0;
    for (const i of t) e += i.byteLength;
    const n = new Uint8Array(e);
    let r = 0;
    for (const i of t) {
      const s = new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
      n.set(s, r), r += i.byteLength;
    }
    return n;
  }
  function Vt(t) {
    return new gi(t).unpack();
  }
  function Gt(t) {
    const e = new Ci(), n = e.pack(t);
    return n instanceof Promise ? n.then(() => e.getBuffer()) : e.getBuffer();
  }
  class gi {
    constructor(e) {
      this.index = 0, this.dataBuffer = e, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
    }
    unpack() {
      const e = this.unpack_uint8();
      if (e < 128) return e;
      if ((e ^ 224) < 32) return (e ^ 224) - 32;
      let n;
      if ((n = e ^ 160) <= 15) return this.unpack_raw(n);
      if ((n = e ^ 176) <= 15) return this.unpack_string(n);
      if ((n = e ^ 144) <= 15) return this.unpack_array(n);
      if ((n = e ^ 128) <= 15) return this.unpack_map(n);
      switch (e) {
        case 192:
          return null;
        case 193:
          return;
        case 194:
          return false;
        case 195:
          return true;
        case 202:
          return this.unpack_float();
        case 203:
          return this.unpack_double();
        case 204:
          return this.unpack_uint8();
        case 205:
          return this.unpack_uint16();
        case 206:
          return this.unpack_uint32();
        case 207:
          return this.unpack_uint64();
        case 208:
          return this.unpack_int8();
        case 209:
          return this.unpack_int16();
        case 210:
          return this.unpack_int32();
        case 211:
          return this.unpack_int64();
        case 212:
          return;
        case 213:
          return;
        case 214:
          return;
        case 215:
          return;
        case 216:
          return n = this.unpack_uint16(), this.unpack_string(n);
        case 217:
          return n = this.unpack_uint32(), this.unpack_string(n);
        case 218:
          return n = this.unpack_uint16(), this.unpack_raw(n);
        case 219:
          return n = this.unpack_uint32(), this.unpack_raw(n);
        case 220:
          return n = this.unpack_uint16(), this.unpack_array(n);
        case 221:
          return n = this.unpack_uint32(), this.unpack_array(n);
        case 222:
          return n = this.unpack_uint16(), this.unpack_map(n);
        case 223:
          return n = this.unpack_uint32(), this.unpack_map(n);
      }
    }
    unpack_uint8() {
      const e = this.dataView[this.index] & 255;
      return this.index++, e;
    }
    unpack_uint16() {
      const e = this.read(2), n = (e[0] & 255) * 256 + (e[1] & 255);
      return this.index += 2, n;
    }
    unpack_uint32() {
      const e = this.read(4), n = ((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3];
      return this.index += 4, n;
    }
    unpack_uint64() {
      const e = this.read(8), n = ((((((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3]) * 256 + e[4]) * 256 + e[5]) * 256 + e[6]) * 256 + e[7];
      return this.index += 8, n;
    }
    unpack_int8() {
      const e = this.unpack_uint8();
      return e < 128 ? e : e - 256;
    }
    unpack_int16() {
      const e = this.unpack_uint16();
      return e < 32768 ? e : e - 65536;
    }
    unpack_int32() {
      const e = this.unpack_uint32();
      return e < 2 ** 31 ? e : e - 2 ** 32;
    }
    unpack_int64() {
      const e = this.unpack_uint64();
      return e < 2 ** 63 ? e : e - 2 ** 64;
    }
    unpack_raw(e) {
      if (this.length < this.index + e) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);
      const n = this.dataBuffer.slice(this.index, this.index + e);
      return this.index += e, n;
    }
    unpack_string(e) {
      const n = this.read(e);
      let r = 0, i = "", s, a;
      for (; r < e; ) s = n[r], s < 160 ? (a = s, r++) : (s ^ 192) < 32 ? (a = (s & 31) << 6 | n[r + 1] & 63, r += 2) : (s ^ 224) < 16 ? (a = (s & 15) << 12 | (n[r + 1] & 63) << 6 | n[r + 2] & 63, r += 3) : (a = (s & 7) << 18 | (n[r + 1] & 63) << 12 | (n[r + 2] & 63) << 6 | n[r + 3] & 63, r += 4), i += String.fromCodePoint(a);
      return this.index += e, i;
    }
    unpack_array(e) {
      const n = new Array(e);
      for (let r = 0; r < e; r++) n[r] = this.unpack();
      return n;
    }
    unpack_map(e) {
      const n = {};
      for (let r = 0; r < e; r++) {
        const i = this.unpack();
        n[i] = this.unpack();
      }
      return n;
    }
    unpack_float() {
      const e = this.unpack_uint32(), n = e >> 31, r = (e >> 23 & 255) - 127, i = e & 8388607 | 8388608;
      return (n === 0 ? 1 : -1) * i * 2 ** (r - 23);
    }
    unpack_double() {
      const e = this.unpack_uint32(), n = this.unpack_uint32(), r = e >> 31, i = (e >> 20 & 2047) - 1023, a = (e & 1048575 | 1048576) * 2 ** (i - 20) + n * 2 ** (i - 52);
      return (r === 0 ? 1 : -1) * a;
    }
    read(e) {
      const n = this.index;
      if (n + e <= this.length) return this.dataView.subarray(n, n + e);
      throw new Error("BinaryPackFailure: read index out of range");
    }
  }
  class Ci {
    getBuffer() {
      return this._bufferBuilder.toArrayBuffer();
    }
    pack(e) {
      if (typeof e == "string") this.pack_string(e);
      else if (typeof e == "number") Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
      else if (typeof e == "boolean") e === true ? this._bufferBuilder.append(195) : e === false && this._bufferBuilder.append(194);
      else if (e === void 0) this._bufferBuilder.append(192);
      else if (typeof e == "object") if (e === null) this._bufferBuilder.append(192);
      else {
        const n = e.constructor;
        if (e instanceof Array) {
          const r = this.pack_array(e);
          if (r instanceof Promise) return r.then(() => this._bufferBuilder.flush());
        } else if (e instanceof ArrayBuffer) this.pack_bin(new Uint8Array(e));
        else if ("BYTES_PER_ELEMENT" in e) {
          const r = e;
          this.pack_bin(new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
        } else if (e instanceof Date) this.pack_string(e.toString());
        else {
          if (e instanceof Blob) return e.arrayBuffer().then((r) => {
            this.pack_bin(new Uint8Array(r)), this._bufferBuilder.flush();
          });
          if (n == Object || n.toString().startsWith("class")) {
            const r = this.pack_object(e);
            if (r instanceof Promise) return r.then(() => this._bufferBuilder.flush());
          } else throw new Error(`Type "${n.toString()}" not yet supported`);
        }
      }
      else throw new Error(`Type "${typeof e}" not yet supported`);
      this._bufferBuilder.flush();
    }
    pack_bin(e) {
      const n = e.length;
      if (n <= 15) this.pack_uint8(160 + n);
      else if (n <= 65535) this._bufferBuilder.append(218), this.pack_uint16(n);
      else if (n <= 4294967295) this._bufferBuilder.append(219), this.pack_uint32(n);
      else throw new Error("Invalid length");
      this._bufferBuilder.append_buffer(e);
    }
    pack_string(e) {
      const n = this._textEncoder.encode(e), r = n.length;
      if (r <= 15) this.pack_uint8(176 + r);
      else if (r <= 65535) this._bufferBuilder.append(216), this.pack_uint16(r);
      else if (r <= 4294967295) this._bufferBuilder.append(217), this.pack_uint32(r);
      else throw new Error("Invalid length");
      this._bufferBuilder.append_buffer(n);
    }
    pack_array(e) {
      const n = e.length;
      if (n <= 15) this.pack_uint8(144 + n);
      else if (n <= 65535) this._bufferBuilder.append(220), this.pack_uint16(n);
      else if (n <= 4294967295) this._bufferBuilder.append(221), this.pack_uint32(n);
      else throw new Error("Invalid length");
      const r = (i) => {
        if (i < n) {
          const s = this.pack(e[i]);
          return s instanceof Promise ? s.then(() => r(i + 1)) : r(i + 1);
        }
      };
      return r(0);
    }
    pack_integer(e) {
      if (e >= -32 && e <= 127) this._bufferBuilder.append(e & 255);
      else if (e >= 0 && e <= 255) this._bufferBuilder.append(204), this.pack_uint8(e);
      else if (e >= -128 && e <= 127) this._bufferBuilder.append(208), this.pack_int8(e);
      else if (e >= 0 && e <= 65535) this._bufferBuilder.append(205), this.pack_uint16(e);
      else if (e >= -32768 && e <= 32767) this._bufferBuilder.append(209), this.pack_int16(e);
      else if (e >= 0 && e <= 4294967295) this._bufferBuilder.append(206), this.pack_uint32(e);
      else if (e >= -2147483648 && e <= 2147483647) this._bufferBuilder.append(210), this.pack_int32(e);
      else if (e >= -9223372036854776e3 && e <= 9223372036854776e3) this._bufferBuilder.append(211), this.pack_int64(e);
      else if (e >= 0 && e <= 18446744073709552e3) this._bufferBuilder.append(207), this.pack_uint64(e);
      else throw new Error("Invalid integer");
    }
    pack_double(e) {
      let n = 0;
      e < 0 && (n = 1, e = -e);
      const r = Math.floor(Math.log(e) / Math.LN2), i = e / 2 ** r - 1, s = Math.floor(i * 2 ** 52), a = 2 ** 32, d = n << 31 | r + 1023 << 20 | s / a & 1048575, o = s % a;
      this._bufferBuilder.append(203), this.pack_int32(d), this.pack_int32(o);
    }
    pack_object(e) {
      const n = Object.keys(e), r = n.length;
      if (r <= 15) this.pack_uint8(128 + r);
      else if (r <= 65535) this._bufferBuilder.append(222), this.pack_uint16(r);
      else if (r <= 4294967295) this._bufferBuilder.append(223), this.pack_uint32(r);
      else throw new Error("Invalid length");
      const i = (s) => {
        if (s < n.length) {
          const a = n[s];
          if (e.hasOwnProperty(a)) {
            this.pack(a);
            const d = this.pack(e[a]);
            if (d instanceof Promise) return d.then(() => i(s + 1));
          }
          return i(s + 1);
        }
      };
      return i(0);
    }
    pack_uint8(e) {
      this._bufferBuilder.append(e);
    }
    pack_uint16(e) {
      this._bufferBuilder.append(e >> 8), this._bufferBuilder.append(e & 255);
    }
    pack_uint32(e) {
      const n = e & 4294967295;
      this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255);
    }
    pack_uint64(e) {
      const n = e / 4294967296, r = e % 2 ** 32;
      this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255), this._bufferBuilder.append((r & 4278190080) >>> 24), this._bufferBuilder.append((r & 16711680) >>> 16), this._bufferBuilder.append((r & 65280) >>> 8), this._bufferBuilder.append(r & 255);
    }
    pack_int8(e) {
      this._bufferBuilder.append(e & 255);
    }
    pack_int16(e) {
      this._bufferBuilder.append((e & 65280) >> 8), this._bufferBuilder.append(e & 255);
    }
    pack_int32(e) {
      this._bufferBuilder.append(e >>> 24 & 255), this._bufferBuilder.append((e & 16711680) >>> 16), this._bufferBuilder.append((e & 65280) >>> 8), this._bufferBuilder.append(e & 255);
    }
    pack_int64(e) {
      const n = Math.floor(e / 4294967296), r = e % 2 ** 32;
      this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255), this._bufferBuilder.append((r & 4278190080) >>> 24), this._bufferBuilder.append((r & 16711680) >>> 16), this._bufferBuilder.append((r & 65280) >>> 8), this._bufferBuilder.append(r & 255);
    }
    constructor() {
      this._bufferBuilder = new fi(), this._textEncoder = new TextEncoder();
    }
  }
  let Wt = true, Yt = true;
  function ve(t, e, n) {
    const r = t.match(e);
    return r && r.length >= n && parseInt(r[n], 10);
  }
  function K(t, e, n) {
    if (!t.RTCPeerConnection) return;
    const r = t.RTCPeerConnection.prototype, i = r.addEventListener;
    r.addEventListener = function(a, d) {
      if (a !== e) return i.apply(this, arguments);
      const o = (c) => {
        const l = n(c);
        l && (d.handleEvent ? d.handleEvent(l) : d(l));
      };
      return this._eventMap = this._eventMap || {}, this._eventMap[e] || (this._eventMap[e] = /* @__PURE__ */ new Map()), this._eventMap[e].set(d, o), i.apply(this, [
        a,
        o
      ]);
    };
    const s = r.removeEventListener;
    r.removeEventListener = function(a, d) {
      if (a !== e || !this._eventMap || !this._eventMap[e]) return s.apply(this, arguments);
      if (!this._eventMap[e].has(d)) return s.apply(this, arguments);
      const o = this._eventMap[e].get(d);
      return this._eventMap[e].delete(d), this._eventMap[e].size === 0 && delete this._eventMap[e], Object.keys(this._eventMap).length === 0 && delete this._eventMap, s.apply(this, [
        a,
        o
      ]);
    }, Object.defineProperty(r, "on" + e, {
      get() {
        return this["_on" + e];
      },
      set(a) {
        this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), a && this.addEventListener(e, this["_on" + e] = a);
      },
      enumerable: true,
      configurable: true
    });
  }
  function xi(t) {
    return typeof t != "boolean" ? new Error("Argument type: " + typeof t + ". Please use a boolean.") : (Wt = t, t ? "adapter.js logging disabled" : "adapter.js logging enabled");
  }
  function vi(t) {
    return typeof t != "boolean" ? new Error("Argument type: " + typeof t + ". Please use a boolean.") : (Yt = !t, "adapter.js deprecation warnings " + (t ? "disabled" : "enabled"));
  }
  function Qt() {
    if (typeof window == "object") {
      if (Wt) return;
      typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
    }
  }
  function et(t, e) {
    Yt && console.warn(t + " is deprecated, please use " + e + " instead.");
  }
  function yi(t) {
    const e = {
      browser: null,
      version: null
    };
    if (typeof t > "u" || !t.navigator || !t.navigator.userAgent) return e.browser = "Not a browser.", e;
    const { navigator: n } = t;
    if (n.userAgentData && n.userAgentData.brands) {
      const r = n.userAgentData.brands.find((i) => i.brand === "Chromium");
      if (r) return {
        browser: "chrome",
        version: parseInt(r.version, 10)
      };
    }
    if (n.mozGetUserMedia) e.browser = "firefox", e.version = ve(n.userAgent, /Firefox\/(\d+)\./, 1);
    else if (n.webkitGetUserMedia || t.isSecureContext === false && t.webkitRTCPeerConnection) e.browser = "chrome", e.version = ve(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    else if (t.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./)) e.browser = "safari", e.version = ve(n.userAgent, /AppleWebKit\/(\d+)\./, 1), e.supportsUnifiedPlan = t.RTCRtpTransceiver && "currentDirection" in t.RTCRtpTransceiver.prototype;
    else return e.browser = "Not a supported browser.", e;
    return e;
  }
  function gt(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function Xt(t) {
    return gt(t) ? Object.keys(t).reduce(function(e, n) {
      const r = gt(t[n]), i = r ? Xt(t[n]) : t[n], s = r && !Object.keys(i).length;
      return i === void 0 || s ? e : Object.assign(e, {
        [n]: i
      });
    }, {}) : t;
  }
  function Ve(t, e, n) {
    !e || n.has(e.id) || (n.set(e.id, e), Object.keys(e).forEach((r) => {
      r.endsWith("Id") ? Ve(t, t.get(e[r]), n) : r.endsWith("Ids") && e[r].forEach((i) => {
        Ve(t, t.get(i), n);
      });
    }));
  }
  function Ct(t, e, n) {
    const r = n ? "outbound-rtp" : "inbound-rtp", i = /* @__PURE__ */ new Map();
    if (e === null) return i;
    const s = [];
    return t.forEach((a) => {
      a.type === "track" && a.trackIdentifier === e.id && s.push(a);
    }), s.forEach((a) => {
      t.forEach((d) => {
        d.type === r && d.trackId === a.id && Ve(t, d, i);
      });
    }), i;
  }
  const xt = Qt;
  function Zt(t, e) {
    const n = t && t.navigator;
    if (!n.mediaDevices) return;
    const r = function(d) {
      if (typeof d != "object" || d.mandatory || d.optional) return d;
      const o = {};
      return Object.keys(d).forEach((c) => {
        if (c === "require" || c === "advanced" || c === "mediaSource") return;
        const l = typeof d[c] == "object" ? d[c] : {
          ideal: d[c]
        };
        l.exact !== void 0 && typeof l.exact == "number" && (l.min = l.max = l.exact);
        const h = function(f, m) {
          return f ? f + m.charAt(0).toUpperCase() + m.slice(1) : m === "deviceId" ? "sourceId" : m;
        };
        if (l.ideal !== void 0) {
          o.optional = o.optional || [];
          let f = {};
          typeof l.ideal == "number" ? (f[h("min", c)] = l.ideal, o.optional.push(f), f = {}, f[h("max", c)] = l.ideal, o.optional.push(f)) : (f[h("", c)] = l.ideal, o.optional.push(f));
        }
        l.exact !== void 0 && typeof l.exact != "number" ? (o.mandatory = o.mandatory || {}, o.mandatory[h("", c)] = l.exact) : [
          "min",
          "max"
        ].forEach((f) => {
          l[f] !== void 0 && (o.mandatory = o.mandatory || {}, o.mandatory[h(f, c)] = l[f]);
        });
      }), d.advanced && (o.optional = (o.optional || []).concat(d.advanced)), o;
    }, i = function(d, o) {
      if (e.version >= 61) return o(d);
      if (d = JSON.parse(JSON.stringify(d)), d && typeof d.audio == "object") {
        const c = function(l, h, f) {
          h in l && !(f in l) && (l[f] = l[h], delete l[h]);
        };
        d = JSON.parse(JSON.stringify(d)), c(d.audio, "autoGainControl", "googAutoGainControl"), c(d.audio, "noiseSuppression", "googNoiseSuppression"), d.audio = r(d.audio);
      }
      if (d && typeof d.video == "object") {
        let c = d.video.facingMode;
        c = c && (typeof c == "object" ? c : {
          ideal: c
        });
        const l = e.version < 66;
        if (c && (c.exact === "user" || c.exact === "environment" || c.ideal === "user" || c.ideal === "environment") && !(n.mediaDevices.getSupportedConstraints && n.mediaDevices.getSupportedConstraints().facingMode && !l)) {
          delete d.video.facingMode;
          let h;
          if (c.exact === "environment" || c.ideal === "environment" ? h = [
            "back",
            "rear"
          ] : (c.exact === "user" || c.ideal === "user") && (h = [
            "front"
          ]), h) return n.mediaDevices.enumerateDevices().then((f) => {
            f = f.filter((g) => g.kind === "videoinput");
            let m = f.find((g) => h.some((x) => g.label.toLowerCase().includes(x)));
            return !m && f.length && h.includes("back") && (m = f[f.length - 1]), m && (d.video.deviceId = c.exact ? {
              exact: m.deviceId
            } : {
              ideal: m.deviceId
            }), d.video = r(d.video), xt("chrome: " + JSON.stringify(d)), o(d);
          });
        }
        d.video = r(d.video);
      }
      return xt("chrome: " + JSON.stringify(d)), o(d);
    }, s = function(d) {
      return e.version >= 64 ? d : {
        name: {
          PermissionDeniedError: "NotAllowedError",
          PermissionDismissedError: "NotAllowedError",
          InvalidStateError: "NotAllowedError",
          DevicesNotFoundError: "NotFoundError",
          ConstraintNotSatisfiedError: "OverconstrainedError",
          TrackStartError: "NotReadableError",
          MediaDeviceFailedDueToShutdown: "NotAllowedError",
          MediaDeviceKillSwitchOn: "NotAllowedError",
          TabCaptureError: "AbortError",
          ScreenCaptureError: "AbortError",
          DeviceCaptureError: "AbortError"
        }[d.name] || d.name,
        message: d.message,
        constraint: d.constraint || d.constraintName,
        toString() {
          return this.name + (this.message && ": ") + this.message;
        }
      };
    }, a = function(d, o, c) {
      i(d, (l) => {
        n.webkitGetUserMedia(l, o, (h) => {
          c && c(s(h));
        });
      });
    };
    if (n.getUserMedia = a.bind(n), n.mediaDevices.getUserMedia) {
      const d = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
      n.mediaDevices.getUserMedia = function(o) {
        return i(o, (c) => d(c).then((l) => {
          if (c.audio && !l.getAudioTracks().length || c.video && !l.getVideoTracks().length) throw l.getTracks().forEach((h) => {
            h.stop();
          }), new DOMException("", "NotFoundError");
          return l;
        }, (l) => Promise.reject(s(l))));
      };
    }
  }
  function Jt(t) {
    t.MediaStream = t.MediaStream || t.webkitMediaStream;
  }
  function Kt(t) {
    if (typeof t == "object" && t.RTCPeerConnection && !("ontrack" in t.RTCPeerConnection.prototype)) {
      Object.defineProperty(t.RTCPeerConnection.prototype, "ontrack", {
        get() {
          return this._ontrack;
        },
        set(n) {
          this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = n);
        },
        enumerable: true,
        configurable: true
      });
      const e = t.RTCPeerConnection.prototype.setRemoteDescription;
      t.RTCPeerConnection.prototype.setRemoteDescription = function() {
        return this._ontrackpoly || (this._ontrackpoly = (r) => {
          r.stream.addEventListener("addtrack", (i) => {
            let s;
            t.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find((d) => d.track && d.track.id === i.track.id) : s = {
              track: i.track
            };
            const a = new Event("track");
            a.track = i.track, a.receiver = s, a.transceiver = {
              receiver: s
            }, a.streams = [
              r.stream
            ], this.dispatchEvent(a);
          }), r.stream.getTracks().forEach((i) => {
            let s;
            t.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find((d) => d.track && d.track.id === i.id) : s = {
              track: i
            };
            const a = new Event("track");
            a.track = i, a.receiver = s, a.transceiver = {
              receiver: s
            }, a.streams = [
              r.stream
            ], this.dispatchEvent(a);
          });
        }, this.addEventListener("addstream", this._ontrackpoly)), e.apply(this, arguments);
      };
    } else K(t, "track", (e) => (e.transceiver || Object.defineProperty(e, "transceiver", {
      value: {
        receiver: e.receiver
      }
    }), e));
  }
  function qt(t) {
    if (typeof t == "object" && t.RTCPeerConnection && !("getSenders" in t.RTCPeerConnection.prototype) && "createDTMFSender" in t.RTCPeerConnection.prototype) {
      const e = function(i, s) {
        return {
          track: s,
          get dtmf() {
            return this._dtmf === void 0 && (s.kind === "audio" ? this._dtmf = i.createDTMFSender(s) : this._dtmf = null), this._dtmf;
          },
          _pc: i
        };
      };
      if (!t.RTCPeerConnection.prototype.getSenders) {
        t.RTCPeerConnection.prototype.getSenders = function() {
          return this._senders = this._senders || [], this._senders.slice();
        };
        const i = t.RTCPeerConnection.prototype.addTrack;
        t.RTCPeerConnection.prototype.addTrack = function(d, o) {
          let c = i.apply(this, arguments);
          return c || (c = e(this, d), this._senders.push(c)), c;
        };
        const s = t.RTCPeerConnection.prototype.removeTrack;
        t.RTCPeerConnection.prototype.removeTrack = function(d) {
          s.apply(this, arguments);
          const o = this._senders.indexOf(d);
          o !== -1 && this._senders.splice(o, 1);
        };
      }
      const n = t.RTCPeerConnection.prototype.addStream;
      t.RTCPeerConnection.prototype.addStream = function(s) {
        this._senders = this._senders || [], n.apply(this, [
          s
        ]), s.getTracks().forEach((a) => {
          this._senders.push(e(this, a));
        });
      };
      const r = t.RTCPeerConnection.prototype.removeStream;
      t.RTCPeerConnection.prototype.removeStream = function(s) {
        this._senders = this._senders || [], r.apply(this, [
          s
        ]), s.getTracks().forEach((a) => {
          const d = this._senders.find((o) => o.track === a);
          d && this._senders.splice(this._senders.indexOf(d), 1);
        });
      };
    } else if (typeof t == "object" && t.RTCPeerConnection && "getSenders" in t.RTCPeerConnection.prototype && "createDTMFSender" in t.RTCPeerConnection.prototype && t.RTCRtpSender && !("dtmf" in t.RTCRtpSender.prototype)) {
      const e = t.RTCPeerConnection.prototype.getSenders;
      t.RTCPeerConnection.prototype.getSenders = function() {
        const r = e.apply(this, []);
        return r.forEach((i) => i._pc = this), r;
      }, Object.defineProperty(t.RTCRtpSender.prototype, "dtmf", {
        get() {
          return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
        }
      });
    }
  }
  function $t(t) {
    if (!(typeof t == "object" && t.RTCPeerConnection && t.RTCRtpSender && t.RTCRtpReceiver)) return;
    if (!("getStats" in t.RTCRtpSender.prototype)) {
      const n = t.RTCPeerConnection.prototype.getSenders;
      n && (t.RTCPeerConnection.prototype.getSenders = function() {
        const s = n.apply(this, []);
        return s.forEach((a) => a._pc = this), s;
      });
      const r = t.RTCPeerConnection.prototype.addTrack;
      r && (t.RTCPeerConnection.prototype.addTrack = function() {
        const s = r.apply(this, arguments);
        return s._pc = this, s;
      }), t.RTCRtpSender.prototype.getStats = function() {
        const s = this;
        return this._pc.getStats().then((a) => Ct(a, s.track, true));
      };
    }
    if (!("getStats" in t.RTCRtpReceiver.prototype)) {
      const n = t.RTCPeerConnection.prototype.getReceivers;
      n && (t.RTCPeerConnection.prototype.getReceivers = function() {
        const i = n.apply(this, []);
        return i.forEach((s) => s._pc = this), i;
      }), K(t, "track", (r) => (r.receiver._pc = r.srcElement, r)), t.RTCRtpReceiver.prototype.getStats = function() {
        const i = this;
        return this._pc.getStats().then((s) => Ct(s, i.track, false));
      };
    }
    if (!("getStats" in t.RTCRtpSender.prototype && "getStats" in t.RTCRtpReceiver.prototype)) return;
    const e = t.RTCPeerConnection.prototype.getStats;
    t.RTCPeerConnection.prototype.getStats = function() {
      if (arguments.length > 0 && arguments[0] instanceof t.MediaStreamTrack) {
        const r = arguments[0];
        let i, s, a;
        return this.getSenders().forEach((d) => {
          d.track === r && (i ? a = true : i = d);
        }), this.getReceivers().forEach((d) => (d.track === r && (s ? a = true : s = d), d.track === r)), a || i && s ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : i ? i.getStats() : s ? s.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
      }
      return e.apply(this, arguments);
    };
  }
  function en(t) {
    t.RTCPeerConnection.prototype.getLocalStreams = function() {
      return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((a) => this._shimmedLocalStreams[a][0]);
    };
    const e = t.RTCPeerConnection.prototype.addTrack;
    t.RTCPeerConnection.prototype.addTrack = function(a, d) {
      if (!d) return e.apply(this, arguments);
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      const o = e.apply(this, arguments);
      return this._shimmedLocalStreams[d.id] ? this._shimmedLocalStreams[d.id].indexOf(o) === -1 && this._shimmedLocalStreams[d.id].push(o) : this._shimmedLocalStreams[d.id] = [
        d,
        o
      ], o;
    };
    const n = t.RTCPeerConnection.prototype.addStream;
    t.RTCPeerConnection.prototype.addStream = function(a) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach((c) => {
        if (this.getSenders().find((h) => h.track === c)) throw new DOMException("Track already exists.", "InvalidAccessError");
      });
      const d = this.getSenders();
      n.apply(this, arguments);
      const o = this.getSenders().filter((c) => d.indexOf(c) === -1);
      this._shimmedLocalStreams[a.id] = [
        a
      ].concat(o);
    };
    const r = t.RTCPeerConnection.prototype.removeStream;
    t.RTCPeerConnection.prototype.removeStream = function(a) {
      return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], r.apply(this, arguments);
    };
    const i = t.RTCPeerConnection.prototype.removeTrack;
    t.RTCPeerConnection.prototype.removeTrack = function(a) {
      return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach((d) => {
        const o = this._shimmedLocalStreams[d].indexOf(a);
        o !== -1 && this._shimmedLocalStreams[d].splice(o, 1), this._shimmedLocalStreams[d].length === 1 && delete this._shimmedLocalStreams[d];
      }), i.apply(this, arguments);
    };
  }
  function tn(t, e) {
    if (!t.RTCPeerConnection) return;
    if (t.RTCPeerConnection.prototype.addTrack && e.version >= 65) return en(t);
    const n = t.RTCPeerConnection.prototype.getLocalStreams;
    t.RTCPeerConnection.prototype.getLocalStreams = function() {
      const l = n.apply(this);
      return this._reverseStreams = this._reverseStreams || {}, l.map((h) => this._reverseStreams[h.id]);
    };
    const r = t.RTCPeerConnection.prototype.addStream;
    t.RTCPeerConnection.prototype.addStream = function(l) {
      if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, l.getTracks().forEach((h) => {
        if (this.getSenders().find((m) => m.track === h)) throw new DOMException("Track already exists.", "InvalidAccessError");
      }), !this._reverseStreams[l.id]) {
        const h = new t.MediaStream(l.getTracks());
        this._streams[l.id] = h, this._reverseStreams[h.id] = l, l = h;
      }
      r.apply(this, [
        l
      ]);
    };
    const i = t.RTCPeerConnection.prototype.removeStream;
    t.RTCPeerConnection.prototype.removeStream = function(l) {
      this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [
        this._streams[l.id] || l
      ]), delete this._reverseStreams[this._streams[l.id] ? this._streams[l.id].id : l.id], delete this._streams[l.id];
    }, t.RTCPeerConnection.prototype.addTrack = function(l, h) {
      if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
      const f = [].slice.call(arguments, 1);
      if (f.length !== 1 || !f[0].getTracks().find((x) => x === l)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
      if (this.getSenders().find((x) => x.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError");
      this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
      const g = this._streams[h.id];
      if (g) g.addTrack(l), Promise.resolve().then(() => {
        this.dispatchEvent(new Event("negotiationneeded"));
      });
      else {
        const x = new t.MediaStream([
          l
        ]);
        this._streams[h.id] = x, this._reverseStreams[x.id] = h, this.addStream(x);
      }
      return this.getSenders().find((x) => x.track === l);
    };
    function s(c, l) {
      let h = l.sdp;
      return Object.keys(c._reverseStreams || []).forEach((f) => {
        const m = c._reverseStreams[f], g = c._streams[m.id];
        h = h.replace(new RegExp(g.id, "g"), m.id);
      }), new RTCSessionDescription({
        type: l.type,
        sdp: h
      });
    }
    function a(c, l) {
      let h = l.sdp;
      return Object.keys(c._reverseStreams || []).forEach((f) => {
        const m = c._reverseStreams[f], g = c._streams[m.id];
        h = h.replace(new RegExp(m.id, "g"), g.id);
      }), new RTCSessionDescription({
        type: l.type,
        sdp: h
      });
    }
    [
      "createOffer",
      "createAnswer"
    ].forEach(function(c) {
      const l = t.RTCPeerConnection.prototype[c], h = {
        [c]() {
          const f = arguments;
          return arguments.length && typeof arguments[0] == "function" ? l.apply(this, [
            (g) => {
              const x = s(this, g);
              f[0].apply(null, [
                x
              ]);
            },
            (g) => {
              f[1] && f[1].apply(null, g);
            },
            arguments[2]
          ]) : l.apply(this, arguments).then((g) => s(this, g));
        }
      };
      t.RTCPeerConnection.prototype[c] = h[c];
    });
    const d = t.RTCPeerConnection.prototype.setLocalDescription;
    t.RTCPeerConnection.prototype.setLocalDescription = function() {
      return !arguments.length || !arguments[0].type ? d.apply(this, arguments) : (arguments[0] = a(this, arguments[0]), d.apply(this, arguments));
    };
    const o = Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(t.RTCPeerConnection.prototype, "localDescription", {
      get() {
        const c = o.get.apply(this);
        return c.type === "" ? c : s(this, c);
      }
    }), t.RTCPeerConnection.prototype.removeTrack = function(l) {
      if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
      if (!l._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
      if (!(l._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
      this._streams = this._streams || {};
      let f;
      Object.keys(this._streams).forEach((m) => {
        this._streams[m].getTracks().find((x) => l.track === x) && (f = this._streams[m]);
      }), f && (f.getTracks().length === 1 ? this.removeStream(this._reverseStreams[f.id]) : f.removeTrack(l.track), this.dispatchEvent(new Event("negotiationneeded")));
    };
  }
  function Ge(t, e) {
    !t.RTCPeerConnection && t.webkitRTCPeerConnection && (t.RTCPeerConnection = t.webkitRTCPeerConnection), t.RTCPeerConnection && e.version < 53 && [
      "setLocalDescription",
      "setRemoteDescription",
      "addIceCandidate"
    ].forEach(function(n) {
      const r = t.RTCPeerConnection.prototype[n], i = {
        [n]() {
          return arguments[0] = new (n === "addIceCandidate" ? t.RTCIceCandidate : t.RTCSessionDescription)(arguments[0]), r.apply(this, arguments);
        }
      };
      t.RTCPeerConnection.prototype[n] = i[n];
    });
  }
  function nn(t, e) {
    K(t, "negotiationneeded", (n) => {
      const r = n.target;
      if (!((e.version < 72 || r.getConfiguration && r.getConfiguration().sdpSemantics === "plan-b") && r.signalingState !== "stable")) return n;
    });
  }
  const vt = Object.freeze(Object.defineProperty({
    __proto__: null,
    fixNegotiationNeeded: nn,
    shimAddTrackRemoveTrack: tn,
    shimAddTrackRemoveTrackWithNative: en,
    shimGetSendersWithDtmf: qt,
    shimGetUserMedia: Zt,
    shimMediaStream: Jt,
    shimOnTrack: Kt,
    shimPeerConnection: Ge,
    shimSenderReceiverGetStats: $t
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function rn(t, e) {
    const n = t && t.navigator, r = t && t.MediaStreamTrack;
    if (n.getUserMedia = function(i, s, a) {
      et("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(i).then(s, a);
    }, !(e.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
      const i = function(a, d, o) {
        d in a && !(o in a) && (a[o] = a[d], delete a[d]);
      }, s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
      if (n.mediaDevices.getUserMedia = function(a) {
        return typeof a == "object" && typeof a.audio == "object" && (a = JSON.parse(JSON.stringify(a)), i(a.audio, "autoGainControl", "mozAutoGainControl"), i(a.audio, "noiseSuppression", "mozNoiseSuppression")), s(a);
      }, r && r.prototype.getSettings) {
        const a = r.prototype.getSettings;
        r.prototype.getSettings = function() {
          const d = a.apply(this, arguments);
          return i(d, "mozAutoGainControl", "autoGainControl"), i(d, "mozNoiseSuppression", "noiseSuppression"), d;
        };
      }
      if (r && r.prototype.applyConstraints) {
        const a = r.prototype.applyConstraints;
        r.prototype.applyConstraints = function(d) {
          return this.kind === "audio" && typeof d == "object" && (d = JSON.parse(JSON.stringify(d)), i(d, "autoGainControl", "mozAutoGainControl"), i(d, "noiseSuppression", "mozNoiseSuppression")), a.apply(this, [
            d
          ]);
        };
      }
    }
  }
  function bi(t, e) {
    t.navigator.mediaDevices && "getDisplayMedia" in t.navigator.mediaDevices || t.navigator.mediaDevices && (t.navigator.mediaDevices.getDisplayMedia = function(r) {
      if (!(r && r.video)) {
        const i = new DOMException("getDisplayMedia without video constraints is undefined");
        return i.name = "NotFoundError", i.code = 8, Promise.reject(i);
      }
      return r.video === true ? r.video = {
        mediaSource: e
      } : r.video.mediaSource = e, t.navigator.mediaDevices.getUserMedia(r);
    });
  }
  function on(t) {
    typeof t == "object" && t.RTCTrackEvent && "receiver" in t.RTCTrackEvent.prototype && !("transceiver" in t.RTCTrackEvent.prototype) && Object.defineProperty(t.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
  function We(t, e) {
    if (typeof t != "object" || !(t.RTCPeerConnection || t.mozRTCPeerConnection)) return;
    !t.RTCPeerConnection && t.mozRTCPeerConnection && (t.RTCPeerConnection = t.mozRTCPeerConnection), e.version < 53 && [
      "setLocalDescription",
      "setRemoteDescription",
      "addIceCandidate"
    ].forEach(function(i) {
      const s = t.RTCPeerConnection.prototype[i], a = {
        [i]() {
          return arguments[0] = new (i === "addIceCandidate" ? t.RTCIceCandidate : t.RTCSessionDescription)(arguments[0]), s.apply(this, arguments);
        }
      };
      t.RTCPeerConnection.prototype[i] = a[i];
    });
    const n = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate"
    }, r = t.RTCPeerConnection.prototype.getStats;
    t.RTCPeerConnection.prototype.getStats = function() {
      const [s, a, d] = arguments;
      return r.apply(this, [
        s || null
      ]).then((o) => {
        if (e.version < 53 && !a) try {
          o.forEach((c) => {
            c.type = n[c.type] || c.type;
          });
        } catch (c) {
          if (c.name !== "TypeError") throw c;
          o.forEach((l, h) => {
            o.set(h, Object.assign({}, l, {
              type: n[l.type] || l.type
            }));
          });
        }
        return o;
      }).then(a, d);
    };
  }
  function sn(t) {
    if (!(typeof t == "object" && t.RTCPeerConnection && t.RTCRtpSender) || t.RTCRtpSender && "getStats" in t.RTCRtpSender.prototype) return;
    const e = t.RTCPeerConnection.prototype.getSenders;
    e && (t.RTCPeerConnection.prototype.getSenders = function() {
      const i = e.apply(this, []);
      return i.forEach((s) => s._pc = this), i;
    });
    const n = t.RTCPeerConnection.prototype.addTrack;
    n && (t.RTCPeerConnection.prototype.addTrack = function() {
      const i = n.apply(this, arguments);
      return i._pc = this, i;
    }), t.RTCRtpSender.prototype.getStats = function() {
      return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
    };
  }
  function an(t) {
    if (!(typeof t == "object" && t.RTCPeerConnection && t.RTCRtpSender) || t.RTCRtpSender && "getStats" in t.RTCRtpReceiver.prototype) return;
    const e = t.RTCPeerConnection.prototype.getReceivers;
    e && (t.RTCPeerConnection.prototype.getReceivers = function() {
      const r = e.apply(this, []);
      return r.forEach((i) => i._pc = this), r;
    }), K(t, "track", (n) => (n.receiver._pc = n.srcElement, n)), t.RTCRtpReceiver.prototype.getStats = function() {
      return this._pc.getStats(this.track);
    };
  }
  function cn(t) {
    !t.RTCPeerConnection || "removeStream" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.removeStream = function(n) {
      et("removeStream", "removeTrack"), this.getSenders().forEach((r) => {
        r.track && n.getTracks().includes(r.track) && this.removeTrack(r);
      });
    });
  }
  function ln(t) {
    t.DataChannel && !t.RTCDataChannel && (t.RTCDataChannel = t.DataChannel);
  }
  function dn(t) {
    if (!(typeof t == "object" && t.RTCPeerConnection)) return;
    const e = t.RTCPeerConnection.prototype.addTransceiver;
    e && (t.RTCPeerConnection.prototype.addTransceiver = function() {
      this.setParametersPromises = [];
      let r = arguments[1] && arguments[1].sendEncodings;
      r === void 0 && (r = []), r = [
        ...r
      ];
      const i = r.length > 0;
      i && r.forEach((a) => {
        if ("rid" in a && !/^[a-z0-9]{0,16}$/i.test(a.rid)) throw new TypeError("Invalid RID value provided.");
        if ("scaleResolutionDownBy" in a && !(parseFloat(a.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
        if ("maxFramerate" in a && !(parseFloat(a.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
      });
      const s = e.apply(this, arguments);
      if (i) {
        const { sender: a } = s, d = a.getParameters();
        (!("encodings" in d) || d.encodings.length === 1 && Object.keys(d.encodings[0]).length === 0) && (d.encodings = r, a.sendEncodings = r, this.setParametersPromises.push(a.setParameters(d).then(() => {
          delete a.sendEncodings;
        }).catch(() => {
          delete a.sendEncodings;
        })));
      }
      return s;
    });
  }
  function hn(t) {
    if (!(typeof t == "object" && t.RTCRtpSender)) return;
    const e = t.RTCRtpSender.prototype.getParameters;
    e && (t.RTCRtpSender.prototype.getParameters = function() {
      const r = e.apply(this, arguments);
      return "encodings" in r || (r.encodings = [].concat(this.sendEncodings || [
        {}
      ])), r;
    });
  }
  function pn(t) {
    if (!(typeof t == "object" && t.RTCPeerConnection)) return;
    const e = t.RTCPeerConnection.prototype.createOffer;
    t.RTCPeerConnection.prototype.createOffer = function() {
      return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
        this.setParametersPromises = [];
      }) : e.apply(this, arguments);
    };
  }
  function un(t) {
    if (!(typeof t == "object" && t.RTCPeerConnection)) return;
    const e = t.RTCPeerConnection.prototype.createAnswer;
    t.RTCPeerConnection.prototype.createAnswer = function() {
      return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
        this.setParametersPromises = [];
      }) : e.apply(this, arguments);
    };
  }
  const yt = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimAddTransceiver: dn,
    shimCreateAnswer: un,
    shimCreateOffer: pn,
    shimGetDisplayMedia: bi,
    shimGetParameters: hn,
    shimGetUserMedia: rn,
    shimOnTrack: on,
    shimPeerConnection: We,
    shimRTCDataChannel: ln,
    shimReceiverGetStats: an,
    shimRemoveStream: cn,
    shimSenderGetStats: sn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function fn(t) {
    if (!(typeof t != "object" || !t.RTCPeerConnection)) {
      if ("getLocalStreams" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getLocalStreams = function() {
        return this._localStreams || (this._localStreams = []), this._localStreams;
      }), !("addStream" in t.RTCPeerConnection.prototype)) {
        const e = t.RTCPeerConnection.prototype.addTrack;
        t.RTCPeerConnection.prototype.addStream = function(r) {
          this._localStreams || (this._localStreams = []), this._localStreams.includes(r) || this._localStreams.push(r), r.getAudioTracks().forEach((i) => e.call(this, i, r)), r.getVideoTracks().forEach((i) => e.call(this, i, r));
        }, t.RTCPeerConnection.prototype.addTrack = function(r, ...i) {
          return i && i.forEach((s) => {
            this._localStreams ? this._localStreams.includes(s) || this._localStreams.push(s) : this._localStreams = [
              s
            ];
          }), e.apply(this, arguments);
        };
      }
      "removeStream" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.removeStream = function(n) {
        this._localStreams || (this._localStreams = []);
        const r = this._localStreams.indexOf(n);
        if (r === -1) return;
        this._localStreams.splice(r, 1);
        const i = n.getTracks();
        this.getSenders().forEach((s) => {
          i.includes(s.track) && this.removeTrack(s);
        });
      });
    }
  }
  function mn(t) {
    if (!(typeof t != "object" || !t.RTCPeerConnection) && ("getRemoteStreams" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getRemoteStreams = function() {
      return this._remoteStreams ? this._remoteStreams : [];
    }), !("onaddstream" in t.RTCPeerConnection.prototype))) {
      Object.defineProperty(t.RTCPeerConnection.prototype, "onaddstream", {
        get() {
          return this._onaddstream;
        },
        set(n) {
          this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = n), this.addEventListener("track", this._onaddstreampoly = (r) => {
            r.streams.forEach((i) => {
              if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(i)) return;
              this._remoteStreams.push(i);
              const s = new Event("addstream");
              s.stream = i, this.dispatchEvent(s);
            });
          });
        }
      });
      const e = t.RTCPeerConnection.prototype.setRemoteDescription;
      t.RTCPeerConnection.prototype.setRemoteDescription = function() {
        const r = this;
        return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(i) {
          i.streams.forEach((s) => {
            if (r._remoteStreams || (r._remoteStreams = []), r._remoteStreams.indexOf(s) >= 0) return;
            r._remoteStreams.push(s);
            const a = new Event("addstream");
            a.stream = s, r.dispatchEvent(a);
          });
        }), e.apply(r, arguments);
      };
    }
  }
  function gn(t) {
    if (typeof t != "object" || !t.RTCPeerConnection) return;
    const e = t.RTCPeerConnection.prototype, n = e.createOffer, r = e.createAnswer, i = e.setLocalDescription, s = e.setRemoteDescription, a = e.addIceCandidate;
    e.createOffer = function(c, l) {
      const h = arguments.length >= 2 ? arguments[2] : arguments[0], f = n.apply(this, [
        h
      ]);
      return l ? (f.then(c, l), Promise.resolve()) : f;
    }, e.createAnswer = function(c, l) {
      const h = arguments.length >= 2 ? arguments[2] : arguments[0], f = r.apply(this, [
        h
      ]);
      return l ? (f.then(c, l), Promise.resolve()) : f;
    };
    let d = function(o, c, l) {
      const h = i.apply(this, [
        o
      ]);
      return l ? (h.then(c, l), Promise.resolve()) : h;
    };
    e.setLocalDescription = d, d = function(o, c, l) {
      const h = s.apply(this, [
        o
      ]);
      return l ? (h.then(c, l), Promise.resolve()) : h;
    }, e.setRemoteDescription = d, d = function(o, c, l) {
      const h = a.apply(this, [
        o
      ]);
      return l ? (h.then(c, l), Promise.resolve()) : h;
    }, e.addIceCandidate = d;
  }
  function Cn(t) {
    const e = t && t.navigator;
    if (e.mediaDevices && e.mediaDevices.getUserMedia) {
      const n = e.mediaDevices, r = n.getUserMedia.bind(n);
      e.mediaDevices.getUserMedia = (i) => r(xn(i));
    }
    !e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = (function(r, i, s) {
      e.mediaDevices.getUserMedia(r).then(i, s);
    }).bind(e));
  }
  function xn(t) {
    return t && t.video !== void 0 ? Object.assign({}, t, {
      video: Xt(t.video)
    }) : t;
  }
  function vn(t) {
    if (!t.RTCPeerConnection) return;
    const e = t.RTCPeerConnection;
    t.RTCPeerConnection = function(r, i) {
      if (r && r.iceServers) {
        const s = [];
        for (let a = 0; a < r.iceServers.length; a++) {
          let d = r.iceServers[a];
          d.urls === void 0 && d.url ? (et("RTCIceServer.url", "RTCIceServer.urls"), d = JSON.parse(JSON.stringify(d)), d.urls = d.url, delete d.url, s.push(d)) : s.push(r.iceServers[a]);
        }
        r.iceServers = s;
      }
      return new e(r, i);
    }, t.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in e && Object.defineProperty(t.RTCPeerConnection, "generateCertificate", {
      get() {
        return e.generateCertificate;
      }
    });
  }
  function yn(t) {
    typeof t == "object" && t.RTCTrackEvent && "receiver" in t.RTCTrackEvent.prototype && !("transceiver" in t.RTCTrackEvent.prototype) && Object.defineProperty(t.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
  function bn(t) {
    const e = t.RTCPeerConnection.prototype.createOffer;
    t.RTCPeerConnection.prototype.createOffer = function(r) {
      if (r) {
        typeof r.offerToReceiveAudio < "u" && (r.offerToReceiveAudio = !!r.offerToReceiveAudio);
        const i = this.getTransceivers().find((a) => a.receiver.track.kind === "audio");
        r.offerToReceiveAudio === false && i ? i.direction === "sendrecv" ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : i.direction === "recvonly" && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : r.offerToReceiveAudio === true && !i && this.addTransceiver("audio", {
          direction: "recvonly"
        }), typeof r.offerToReceiveVideo < "u" && (r.offerToReceiveVideo = !!r.offerToReceiveVideo);
        const s = this.getTransceivers().find((a) => a.receiver.track.kind === "video");
        r.offerToReceiveVideo === false && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : r.offerToReceiveVideo === true && !s && this.addTransceiver("video", {
          direction: "recvonly"
        });
      }
      return e.apply(this, arguments);
    };
  }
  function Sn(t) {
    typeof t != "object" || t.AudioContext || (t.AudioContext = t.webkitAudioContext);
  }
  const bt = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimAudioContext: Sn,
    shimCallbacksAPI: gn,
    shimConstraints: xn,
    shimCreateOfferLegacy: bn,
    shimGetUserMedia: Cn,
    shimLocalStreamsAPI: fn,
    shimRTCIceServerUrls: vn,
    shimRemoteStreamsAPI: mn,
    shimTrackEventTransceiver: yn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var En = {
    exports: {}
  };
  (function(t) {
    const e = {};
    e.generateIdentifier = function() {
      return Math.random().toString(36).substring(2, 12);
    }, e.localCName = e.generateIdentifier(), e.splitLines = function(n) {
      return n.trim().split(`
`).map((r) => r.trim());
    }, e.splitSections = function(n) {
      return n.split(`
m=`).map((i, s) => (s > 0 ? "m=" + i : i).trim() + `\r
`);
    }, e.getDescription = function(n) {
      const r = e.splitSections(n);
      return r && r[0];
    }, e.getMediaSections = function(n) {
      const r = e.splitSections(n);
      return r.shift(), r;
    }, e.matchPrefix = function(n, r) {
      return e.splitLines(n).filter((i) => i.indexOf(r) === 0);
    }, e.parseCandidate = function(n) {
      let r;
      n.indexOf("a=candidate:") === 0 ? r = n.substring(12).split(" ") : r = n.substring(10).split(" ");
      const i = {
        foundation: r[0],
        component: {
          1: "rtp",
          2: "rtcp"
        }[r[1]] || r[1],
        protocol: r[2].toLowerCase(),
        priority: parseInt(r[3], 10),
        ip: r[4],
        address: r[4],
        port: parseInt(r[5], 10),
        type: r[7]
      };
      for (let s = 8; s < r.length; s += 2) switch (r[s]) {
        case "raddr":
          i.relatedAddress = r[s + 1];
          break;
        case "rport":
          i.relatedPort = parseInt(r[s + 1], 10);
          break;
        case "tcptype":
          i.tcpType = r[s + 1];
          break;
        case "ufrag":
          i.ufrag = r[s + 1], i.usernameFragment = r[s + 1];
          break;
        default:
          i[r[s]] === void 0 && (i[r[s]] = r[s + 1]);
          break;
      }
      return i;
    }, e.writeCandidate = function(n) {
      const r = [];
      r.push(n.foundation);
      const i = n.component;
      i === "rtp" ? r.push(1) : i === "rtcp" ? r.push(2) : r.push(i), r.push(n.protocol.toUpperCase()), r.push(n.priority), r.push(n.address || n.ip), r.push(n.port);
      const s = n.type;
      return r.push("typ"), r.push(s), s !== "host" && n.relatedAddress && n.relatedPort && (r.push("raddr"), r.push(n.relatedAddress), r.push("rport"), r.push(n.relatedPort)), n.tcpType && n.protocol.toLowerCase() === "tcp" && (r.push("tcptype"), r.push(n.tcpType)), (n.usernameFragment || n.ufrag) && (r.push("ufrag"), r.push(n.usernameFragment || n.ufrag)), "candidate:" + r.join(" ");
    }, e.parseIceOptions = function(n) {
      return n.substring(14).split(" ");
    }, e.parseRtpMap = function(n) {
      let r = n.substring(9).split(" ");
      const i = {
        payloadType: parseInt(r.shift(), 10)
      };
      return r = r[0].split("/"), i.name = r[0], i.clockRate = parseInt(r[1], 10), i.channels = r.length === 3 ? parseInt(r[2], 10) : 1, i.numChannels = i.channels, i;
    }, e.writeRtpMap = function(n) {
      let r = n.payloadType;
      n.preferredPayloadType !== void 0 && (r = n.preferredPayloadType);
      const i = n.channels || n.numChannels || 1;
      return "a=rtpmap:" + r + " " + n.name + "/" + n.clockRate + (i !== 1 ? "/" + i : "") + `\r
`;
    }, e.parseExtmap = function(n) {
      const r = n.substring(9).split(" ");
      return {
        id: parseInt(r[0], 10),
        direction: r[0].indexOf("/") > 0 ? r[0].split("/")[1] : "sendrecv",
        uri: r[1],
        attributes: r.slice(2).join(" ")
      };
    }, e.writeExtmap = function(n) {
      return "a=extmap:" + (n.id || n.preferredId) + (n.direction && n.direction !== "sendrecv" ? "/" + n.direction : "") + " " + n.uri + (n.attributes ? " " + n.attributes : "") + `\r
`;
    }, e.parseFmtp = function(n) {
      const r = {};
      let i;
      const s = n.substring(n.indexOf(" ") + 1).split(";");
      for (let a = 0; a < s.length; a++) i = s[a].trim().split("="), r[i[0].trim()] = i[1];
      return r;
    }, e.writeFmtp = function(n) {
      let r = "", i = n.payloadType;
      if (n.preferredPayloadType !== void 0 && (i = n.preferredPayloadType), n.parameters && Object.keys(n.parameters).length) {
        const s = [];
        Object.keys(n.parameters).forEach((a) => {
          n.parameters[a] !== void 0 ? s.push(a + "=" + n.parameters[a]) : s.push(a);
        }), r += "a=fmtp:" + i + " " + s.join(";") + `\r
`;
      }
      return r;
    }, e.parseRtcpFb = function(n) {
      const r = n.substring(n.indexOf(" ") + 1).split(" ");
      return {
        type: r.shift(),
        parameter: r.join(" ")
      };
    }, e.writeRtcpFb = function(n) {
      let r = "", i = n.payloadType;
      return n.preferredPayloadType !== void 0 && (i = n.preferredPayloadType), n.rtcpFeedback && n.rtcpFeedback.length && n.rtcpFeedback.forEach((s) => {
        r += "a=rtcp-fb:" + i + " " + s.type + (s.parameter && s.parameter.length ? " " + s.parameter : "") + `\r
`;
      }), r;
    }, e.parseSsrcMedia = function(n) {
      const r = n.indexOf(" "), i = {
        ssrc: parseInt(n.substring(7, r), 10)
      }, s = n.indexOf(":", r);
      return s > -1 ? (i.attribute = n.substring(r + 1, s), i.value = n.substring(s + 1)) : i.attribute = n.substring(r + 1), i;
    }, e.parseSsrcGroup = function(n) {
      const r = n.substring(13).split(" ");
      return {
        semantics: r.shift(),
        ssrcs: r.map((i) => parseInt(i, 10))
      };
    }, e.getMid = function(n) {
      const r = e.matchPrefix(n, "a=mid:")[0];
      if (r) return r.substring(6);
    }, e.parseFingerprint = function(n) {
      const r = n.substring(14).split(" ");
      return {
        algorithm: r[0].toLowerCase(),
        value: r[1].toUpperCase()
      };
    }, e.getDtlsParameters = function(n, r) {
      return {
        role: "auto",
        fingerprints: e.matchPrefix(n + r, "a=fingerprint:").map(e.parseFingerprint)
      };
    }, e.writeDtlsParameters = function(n, r) {
      let i = "a=setup:" + r + `\r
`;
      return n.fingerprints.forEach((s) => {
        i += "a=fingerprint:" + s.algorithm + " " + s.value + `\r
`;
      }), i;
    }, e.parseCryptoLine = function(n) {
      const r = n.substring(9).split(" ");
      return {
        tag: parseInt(r[0], 10),
        cryptoSuite: r[1],
        keyParams: r[2],
        sessionParams: r.slice(3)
      };
    }, e.writeCryptoLine = function(n) {
      return "a=crypto:" + n.tag + " " + n.cryptoSuite + " " + (typeof n.keyParams == "object" ? e.writeCryptoKeyParams(n.keyParams) : n.keyParams) + (n.sessionParams ? " " + n.sessionParams.join(" ") : "") + `\r
`;
    }, e.parseCryptoKeyParams = function(n) {
      if (n.indexOf("inline:") !== 0) return null;
      const r = n.substring(7).split("|");
      return {
        keyMethod: "inline",
        keySalt: r[0],
        lifeTime: r[1],
        mkiValue: r[2] ? r[2].split(":")[0] : void 0,
        mkiLength: r[2] ? r[2].split(":")[1] : void 0
      };
    }, e.writeCryptoKeyParams = function(n) {
      return n.keyMethod + ":" + n.keySalt + (n.lifeTime ? "|" + n.lifeTime : "") + (n.mkiValue && n.mkiLength ? "|" + n.mkiValue + ":" + n.mkiLength : "");
    }, e.getCryptoParameters = function(n, r) {
      return e.matchPrefix(n + r, "a=crypto:").map(e.parseCryptoLine);
    }, e.getIceParameters = function(n, r) {
      const i = e.matchPrefix(n + r, "a=ice-ufrag:")[0], s = e.matchPrefix(n + r, "a=ice-pwd:")[0];
      return i && s ? {
        usernameFragment: i.substring(12),
        password: s.substring(10)
      } : null;
    }, e.writeIceParameters = function(n) {
      let r = "a=ice-ufrag:" + n.usernameFragment + `\r
a=ice-pwd:` + n.password + `\r
`;
      return n.iceLite && (r += `a=ice-lite\r
`), r;
    }, e.parseRtpParameters = function(n) {
      const r = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      }, s = e.splitLines(n)[0].split(" ");
      r.profile = s[2];
      for (let d = 3; d < s.length; d++) {
        const o = s[d], c = e.matchPrefix(n, "a=rtpmap:" + o + " ")[0];
        if (c) {
          const l = e.parseRtpMap(c), h = e.matchPrefix(n, "a=fmtp:" + o + " ");
          switch (l.parameters = h.length ? e.parseFmtp(h[0]) : {}, l.rtcpFeedback = e.matchPrefix(n, "a=rtcp-fb:" + o + " ").map(e.parseRtcpFb), r.codecs.push(l), l.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              r.fecMechanisms.push(l.name.toUpperCase());
              break;
          }
        }
      }
      e.matchPrefix(n, "a=extmap:").forEach((d) => {
        r.headerExtensions.push(e.parseExtmap(d));
      });
      const a = e.matchPrefix(n, "a=rtcp-fb:* ").map(e.parseRtcpFb);
      return r.codecs.forEach((d) => {
        a.forEach((o) => {
          d.rtcpFeedback.find((l) => l.type === o.type && l.parameter === o.parameter) || d.rtcpFeedback.push(o);
        });
      }), r;
    }, e.writeRtpDescription = function(n, r) {
      let i = "";
      i += "m=" + n + " ", i += r.codecs.length > 0 ? "9" : "0", i += " " + (r.profile || "UDP/TLS/RTP/SAVPF") + " ", i += r.codecs.map((a) => a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType).join(" ") + `\r
`, i += `c=IN IP4 0.0.0.0\r
`, i += `a=rtcp:9 IN IP4 0.0.0.0\r
`, r.codecs.forEach((a) => {
        i += e.writeRtpMap(a), i += e.writeFmtp(a), i += e.writeRtcpFb(a);
      });
      let s = 0;
      return r.codecs.forEach((a) => {
        a.maxptime > s && (s = a.maxptime);
      }), s > 0 && (i += "a=maxptime:" + s + `\r
`), r.headerExtensions && r.headerExtensions.forEach((a) => {
        i += e.writeExtmap(a);
      }), i;
    }, e.parseRtpEncodingParameters = function(n) {
      const r = [], i = e.parseRtpParameters(n), s = i.fecMechanisms.indexOf("RED") !== -1, a = i.fecMechanisms.indexOf("ULPFEC") !== -1, d = e.matchPrefix(n, "a=ssrc:").map((f) => e.parseSsrcMedia(f)).filter((f) => f.attribute === "cname"), o = d.length > 0 && d[0].ssrc;
      let c;
      const l = e.matchPrefix(n, "a=ssrc-group:FID").map((f) => f.substring(17).split(" ").map((g) => parseInt(g, 10)));
      l.length > 0 && l[0].length > 1 && l[0][0] === o && (c = l[0][1]), i.codecs.forEach((f) => {
        if (f.name.toUpperCase() === "RTX" && f.parameters.apt) {
          let m = {
            ssrc: o,
            codecPayloadType: parseInt(f.parameters.apt, 10)
          };
          o && c && (m.rtx = {
            ssrc: c
          }), r.push(m), s && (m = JSON.parse(JSON.stringify(m)), m.fec = {
            ssrc: o,
            mechanism: a ? "red+ulpfec" : "red"
          }, r.push(m));
        }
      }), r.length === 0 && o && r.push({
        ssrc: o
      });
      let h = e.matchPrefix(n, "b=");
      return h.length && (h[0].indexOf("b=TIAS:") === 0 ? h = parseInt(h[0].substring(7), 10) : h[0].indexOf("b=AS:") === 0 ? h = parseInt(h[0].substring(5), 10) * 1e3 * 0.95 - 50 * 40 * 8 : h = void 0, r.forEach((f) => {
        f.maxBitrate = h;
      })), r;
    }, e.parseRtcpParameters = function(n) {
      const r = {}, i = e.matchPrefix(n, "a=ssrc:").map((d) => e.parseSsrcMedia(d)).filter((d) => d.attribute === "cname")[0];
      i && (r.cname = i.value, r.ssrc = i.ssrc);
      const s = e.matchPrefix(n, "a=rtcp-rsize");
      r.reducedSize = s.length > 0, r.compound = s.length === 0;
      const a = e.matchPrefix(n, "a=rtcp-mux");
      return r.mux = a.length > 0, r;
    }, e.writeRtcpParameters = function(n) {
      let r = "";
      return n.reducedSize && (r += `a=rtcp-rsize\r
`), n.mux && (r += `a=rtcp-mux\r
`), n.ssrc !== void 0 && n.cname && (r += "a=ssrc:" + n.ssrc + " cname:" + n.cname + `\r
`), r;
    }, e.parseMsid = function(n) {
      let r;
      const i = e.matchPrefix(n, "a=msid:");
      if (i.length === 1) return r = i[0].substring(7).split(" "), {
        stream: r[0],
        track: r[1]
      };
      const s = e.matchPrefix(n, "a=ssrc:").map((a) => e.parseSsrcMedia(a)).filter((a) => a.attribute === "msid");
      if (s.length > 0) return r = s[0].value.split(" "), {
        stream: r[0],
        track: r[1]
      };
    }, e.parseSctpDescription = function(n) {
      const r = e.parseMLine(n), i = e.matchPrefix(n, "a=max-message-size:");
      let s;
      i.length > 0 && (s = parseInt(i[0].substring(19), 10)), isNaN(s) && (s = 65536);
      const a = e.matchPrefix(n, "a=sctp-port:");
      if (a.length > 0) return {
        port: parseInt(a[0].substring(12), 10),
        protocol: r.fmt,
        maxMessageSize: s
      };
      const d = e.matchPrefix(n, "a=sctpmap:");
      if (d.length > 0) {
        const o = d[0].substring(10).split(" ");
        return {
          port: parseInt(o[0], 10),
          protocol: o[1],
          maxMessageSize: s
        };
      }
    }, e.writeSctpDescription = function(n, r) {
      let i = [];
      return n.protocol !== "DTLS/SCTP" ? i = [
        "m=" + n.kind + " 9 " + n.protocol + " " + r.protocol + `\r
`,
        `c=IN IP4 0.0.0.0\r
`,
        "a=sctp-port:" + r.port + `\r
`
      ] : i = [
        "m=" + n.kind + " 9 " + n.protocol + " " + r.port + `\r
`,
        `c=IN IP4 0.0.0.0\r
`,
        "a=sctpmap:" + r.port + " " + r.protocol + ` 65535\r
`
      ], r.maxMessageSize !== void 0 && i.push("a=max-message-size:" + r.maxMessageSize + `\r
`), i.join("");
    }, e.generateSessionId = function() {
      return Math.random().toString().substr(2, 22);
    }, e.writeSessionBoilerplate = function(n, r, i) {
      let s;
      const a = r !== void 0 ? r : 2;
      return n ? s = n : s = e.generateSessionId(), `v=0\r
o=` + (i || "thisisadapterortc") + " " + s + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
    }, e.getDirection = function(n, r) {
      const i = e.splitLines(n);
      for (let s = 0; s < i.length; s++) switch (i[s]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return i[s].substring(2);
      }
      return r ? e.getDirection(r) : "sendrecv";
    }, e.getKind = function(n) {
      return e.splitLines(n)[0].split(" ")[0].substring(2);
    }, e.isRejected = function(n) {
      return n.split(" ", 2)[1] === "0";
    }, e.parseMLine = function(n) {
      const i = e.splitLines(n)[0].substring(2).split(" ");
      return {
        kind: i[0],
        port: parseInt(i[1], 10),
        protocol: i[2],
        fmt: i.slice(3).join(" ")
      };
    }, e.parseOLine = function(n) {
      const i = e.matchPrefix(n, "o=")[0].substring(2).split(" ");
      return {
        username: i[0],
        sessionId: i[1],
        sessionVersion: parseInt(i[2], 10),
        netType: i[3],
        addressType: i[4],
        address: i[5]
      };
    }, e.isValidSDP = function(n) {
      if (typeof n != "string" || n.length === 0) return false;
      const r = e.splitLines(n);
      for (let i = 0; i < r.length; i++) if (r[i].length < 2 || r[i].charAt(1) !== "=") return false;
      return true;
    }, t.exports = e;
  })(En);
  var Rn = En.exports;
  const te = rr(Rn), Si = Jr({
    __proto__: null,
    default: te
  }, [
    Rn
  ]);
  function ye(t) {
    if (!t.RTCIceCandidate || t.RTCIceCandidate && "foundation" in t.RTCIceCandidate.prototype) return;
    const e = t.RTCIceCandidate;
    t.RTCIceCandidate = function(r) {
      if (typeof r == "object" && r.candidate && r.candidate.indexOf("a=") === 0 && (r = JSON.parse(JSON.stringify(r)), r.candidate = r.candidate.substring(2)), r.candidate && r.candidate.length) {
        const i = new e(r), s = te.parseCandidate(r.candidate);
        for (const a in s) a in i || Object.defineProperty(i, a, {
          value: s[a]
        });
        return i.toJSON = function() {
          return {
            candidate: i.candidate,
            sdpMid: i.sdpMid,
            sdpMLineIndex: i.sdpMLineIndex,
            usernameFragment: i.usernameFragment
          };
        }, i;
      }
      return new e(r);
    }, t.RTCIceCandidate.prototype = e.prototype, K(t, "icecandidate", (n) => (n.candidate && Object.defineProperty(n, "candidate", {
      value: new t.RTCIceCandidate(n.candidate),
      writable: "false"
    }), n));
  }
  function Ye(t) {
    !t.RTCIceCandidate || t.RTCIceCandidate && "relayProtocol" in t.RTCIceCandidate.prototype || K(t, "icecandidate", (e) => {
      if (e.candidate) {
        const n = te.parseCandidate(e.candidate.candidate);
        n.type === "relay" && (e.candidate.relayProtocol = {
          0: "tls",
          1: "tcp",
          2: "udp"
        }[n.priority >> 24]);
      }
      return e;
    });
  }
  function be(t, e) {
    if (!t.RTCPeerConnection) return;
    "sctp" in t.RTCPeerConnection.prototype || Object.defineProperty(t.RTCPeerConnection.prototype, "sctp", {
      get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      }
    });
    const n = function(d) {
      if (!d || !d.sdp) return false;
      const o = te.splitSections(d.sdp);
      return o.shift(), o.some((c) => {
        const l = te.parseMLine(c);
        return l && l.kind === "application" && l.protocol.indexOf("SCTP") !== -1;
      });
    }, r = function(d) {
      const o = d.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (o === null || o.length < 2) return -1;
      const c = parseInt(o[1], 10);
      return c !== c ? -1 : c;
    }, i = function(d) {
      let o = 65536;
      return e.browser === "firefox" && (e.version < 57 ? d === -1 ? o = 16384 : o = 2147483637 : e.version < 60 ? o = e.version === 57 ? 65535 : 65536 : o = 2147483637), o;
    }, s = function(d, o) {
      let c = 65536;
      e.browser === "firefox" && e.version === 57 && (c = 65535);
      const l = te.matchPrefix(d.sdp, "a=max-message-size:");
      return l.length > 0 ? c = parseInt(l[0].substring(19), 10) : e.browser === "firefox" && o !== -1 && (c = 2147483637), c;
    }, a = t.RTCPeerConnection.prototype.setRemoteDescription;
    t.RTCPeerConnection.prototype.setRemoteDescription = function() {
      if (this._sctp = null, e.browser === "chrome" && e.version >= 76) {
        const { sdpSemantics: o } = this.getConfiguration();
        o === "plan-b" && Object.defineProperty(this, "sctp", {
          get() {
            return typeof this._sctp > "u" ? null : this._sctp;
          },
          enumerable: true,
          configurable: true
        });
      }
      if (n(arguments[0])) {
        const o = r(arguments[0]), c = i(o), l = s(arguments[0], o);
        let h;
        c === 0 && l === 0 ? h = Number.POSITIVE_INFINITY : c === 0 || l === 0 ? h = Math.max(c, l) : h = Math.min(c, l);
        const f = {};
        Object.defineProperty(f, "maxMessageSize", {
          get() {
            return h;
          }
        }), this._sctp = f;
      }
      return a.apply(this, arguments);
    };
  }
  function Se(t) {
    if (!(t.RTCPeerConnection && "createDataChannel" in t.RTCPeerConnection.prototype)) return;
    function e(r, i) {
      const s = r.send;
      r.send = function() {
        const d = arguments[0], o = d.length || d.size || d.byteLength;
        if (r.readyState === "open" && i.sctp && o > i.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + i.sctp.maxMessageSize + " bytes)");
        return s.apply(r, arguments);
      };
    }
    const n = t.RTCPeerConnection.prototype.createDataChannel;
    t.RTCPeerConnection.prototype.createDataChannel = function() {
      const i = n.apply(this, arguments);
      return e(i, this), i;
    }, K(t, "datachannel", (r) => (e(r.channel, r.target), r));
  }
  function Qe(t) {
    if (!t.RTCPeerConnection || "connectionState" in t.RTCPeerConnection.prototype) return;
    const e = t.RTCPeerConnection.prototype;
    Object.defineProperty(e, "connectionState", {
      get() {
        return {
          completed: "connected",
          checking: "connecting"
        }[this.iceConnectionState] || this.iceConnectionState;
      },
      enumerable: true,
      configurable: true
    }), Object.defineProperty(e, "onconnectionstatechange", {
      get() {
        return this._onconnectionstatechange || null;
      },
      set(n) {
        this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), n && this.addEventListener("connectionstatechange", this._onconnectionstatechange = n);
      },
      enumerable: true,
      configurable: true
    }), [
      "setLocalDescription",
      "setRemoteDescription"
    ].forEach((n) => {
      const r = e[n];
      e[n] = function() {
        return this._connectionstatechangepoly || (this._connectionstatechangepoly = (i) => {
          const s = i.target;
          if (s._lastConnectionState !== s.connectionState) {
            s._lastConnectionState = s.connectionState;
            const a = new Event("connectionstatechange", i);
            s.dispatchEvent(a);
          }
          return i;
        }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments);
      };
    });
  }
  function Xe(t, e) {
    if (!t.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e.version >= 605) return;
    const n = t.RTCPeerConnection.prototype.setRemoteDescription;
    t.RTCPeerConnection.prototype.setRemoteDescription = function(i) {
      if (i && i.sdp && i.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
        const s = i.sdp.split(`
`).filter((a) => a.trim() !== "a=extmap-allow-mixed").join(`
`);
        t.RTCSessionDescription && i instanceof t.RTCSessionDescription ? arguments[0] = new t.RTCSessionDescription({
          type: i.type,
          sdp: s
        }) : i.sdp = s;
      }
      return n.apply(this, arguments);
    };
  }
  function Ee(t, e) {
    if (!(t.RTCPeerConnection && t.RTCPeerConnection.prototype)) return;
    const n = t.RTCPeerConnection.prototype.addIceCandidate;
    !n || n.length === 0 || (t.RTCPeerConnection.prototype.addIceCandidate = function() {
      return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    });
  }
  function Re(t, e) {
    if (!(t.RTCPeerConnection && t.RTCPeerConnection.prototype)) return;
    const n = t.RTCPeerConnection.prototype.setLocalDescription;
    !n || n.length === 0 || (t.RTCPeerConnection.prototype.setLocalDescription = function() {
      let i = arguments[0] || {};
      if (typeof i != "object" || i.type && i.sdp) return n.apply(this, arguments);
      if (i = {
        type: i.type,
        sdp: i.sdp
      }, !i.type) switch (this.signalingState) {
        case "stable":
        case "have-local-offer":
        case "have-remote-pranswer":
          i.type = "offer";
          break;
        default:
          i.type = "answer";
          break;
      }
      return i.sdp || i.type !== "offer" && i.type !== "answer" ? n.apply(this, [
        i
      ]) : (i.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((a) => n.apply(this, [
        a
      ]));
    });
  }
  const Ei = Object.freeze(Object.defineProperty({
    __proto__: null,
    removeExtmapAllowMixed: Xe,
    shimAddIceCandidateNullOrEmpty: Ee,
    shimConnectionState: Qe,
    shimMaxMessageSize: be,
    shimParameterlessSetLocalDescription: Re,
    shimRTCIceCandidate: ye,
    shimRTCIceCandidateRelayProtocol: Ye,
    shimSendThrowTypeError: Se
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Ri({ window: t } = {}, e = {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
  }) {
    const n = Qt, r = yi(t), i = {
      browserDetails: r,
      commonShim: Ei,
      extractVersion: ve,
      disableLog: xi,
      disableWarnings: vi,
      sdp: Si
    };
    switch (r.browser) {
      case "chrome":
        if (!vt || !Ge || !e.shimChrome) return n("Chrome shim is not included in this adapter release."), i;
        if (r.version === null) return n("Chrome shim can not determine version, not shimming."), i;
        n("adapter.js shimming chrome."), i.browserShim = vt, Ee(t, r), Re(t), Zt(t, r), Jt(t), Ge(t, r), Kt(t), tn(t, r), qt(t), $t(t), nn(t, r), ye(t), Ye(t), Qe(t), be(t, r), Se(t), Xe(t, r);
        break;
      case "firefox":
        if (!yt || !We || !e.shimFirefox) return n("Firefox shim is not included in this adapter release."), i;
        n("adapter.js shimming firefox."), i.browserShim = yt, Ee(t, r), Re(t), rn(t, r), We(t, r), on(t), cn(t), sn(t), an(t), ln(t), dn(t), hn(t), pn(t), un(t), ye(t), Qe(t), be(t, r), Se(t);
        break;
      case "safari":
        if (!bt || !e.shimSafari) return n("Safari shim is not included in this adapter release."), i;
        n("adapter.js shimming safari."), i.browserShim = bt, Ee(t, r), Re(t), vn(t), bn(t), gn(t), fn(t), mn(t), yn(t), Cn(t), Sn(t), ye(t), Ye(t), be(t, r), Se(t), Xe(t, r);
        break;
      default:
        n("Unsupported browser!");
        break;
    }
    return i;
  }
  const St = Ri({
    window: typeof window > "u" ? void 0 : window
  });
  function q(t, e, n, r) {
    Object.defineProperty(t, e, {
      get: n,
      set: r,
      enumerable: true,
      configurable: true
    });
  }
  class kn {
    constructor() {
      this.chunkedMTU = 16300, this._dataCount = 1, this.chunk = (e) => {
        const n = [], r = e.byteLength, i = Math.ceil(r / this.chunkedMTU);
        let s = 0, a = 0;
        for (; a < r; ) {
          const d = Math.min(r, a + this.chunkedMTU), o = e.slice(a, d), c = {
            __peerData: this._dataCount,
            n: s,
            data: o,
            total: i
          };
          n.push(c), a = d, s++;
        }
        return this._dataCount++, n;
      };
    }
  }
  function ki(t) {
    let e = 0;
    for (const i of t) e += i.byteLength;
    const n = new Uint8Array(e);
    let r = 0;
    for (const i of t) n.set(i, r), r += i.byteLength;
    return n;
  }
  const _e = St.default || St, ie = new class {
    isWebRTCSupported() {
      return typeof RTCPeerConnection < "u";
    }
    isBrowserSupported() {
      const t = this.getBrowser(), e = this.getVersion();
      return this.supportedBrowsers.includes(t) ? t === "chrome" ? e >= this.minChromeVersion : t === "firefox" ? e >= this.minFirefoxVersion : t === "safari" ? !this.isIOS && e >= this.minSafariVersion : false : false;
    }
    getBrowser() {
      return _e.browserDetails.browser;
    }
    getVersion() {
      return _e.browserDetails.version || 0;
    }
    isUnifiedPlanSupported() {
      const t = this.getBrowser(), e = _e.browserDetails.version || 0;
      if (t === "chrome" && e < this.minChromeVersion) return false;
      if (t === "firefox" && e >= this.minFirefoxVersion) return true;
      if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
      let n, r = false;
      try {
        n = new RTCPeerConnection(), n.addTransceiver("audio"), r = true;
      } catch {
      } finally {
        n && n.close();
      }
      return r;
    }
    toString() {
      return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
    }
    constructor() {
      this.isIOS = typeof navigator < "u" ? [
        "iPad",
        "iPhone",
        "iPod"
      ].includes(navigator.platform) : false, this.supportedBrowsers = [
        "firefox",
        "chrome",
        "safari"
      ], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
    }
  }(), Pi = (t) => !t || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(t), Pn = () => Math.random().toString(36).slice(2), Et = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302"
      },
      {
        urls: [
          "turn:eu-0.turn.peerjs.com:3478",
          "turn:us-0.turn.peerjs.com:3478"
        ],
        username: "peerjs",
        credential: "peerjsp"
      }
    ],
    sdpSemantics: "unified-plan"
  };
  class wi extends kn {
    noop() {
    }
    blobToArrayBuffer(e, n) {
      const r = new FileReader();
      return r.onload = function(i) {
        i.target && n(i.target.result);
      }, r.readAsArrayBuffer(e), r;
    }
    binaryStringToArrayBuffer(e) {
      const n = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r) & 255;
      return n.buffer;
    }
    isSecure() {
      return location.protocol === "https:";
    }
    constructor(...e) {
      super(...e), this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = {
        Chrome: 1,
        chrome: 1
      }, this.defaultConfig = Et, this.browser = ie.getBrowser(), this.browserVersion = ie.getVersion(), this.pack = Gt, this.unpack = Vt, this.supports = function() {
        const n = {
          browser: ie.isBrowserSupported(),
          webRTC: ie.isWebRTCSupported(),
          audioVideo: false,
          data: false,
          binaryBlob: false,
          reliable: false
        };
        if (!n.webRTC) return n;
        let r;
        try {
          r = new RTCPeerConnection(Et), n.audioVideo = true;
          let i;
          try {
            i = r.createDataChannel("_PEERJSTEST", {
              ordered: true
            }), n.data = true, n.reliable = !!i.ordered;
            try {
              i.binaryType = "blob", n.binaryBlob = !ie.isIOS;
            } catch {
            }
          } catch {
          } finally {
            i && i.close();
          }
        } catch {
        } finally {
          r && r.close();
        }
        return n;
      }(), this.validateId = Pi, this.randomToken = Pn;
    }
  }
  const z = new wi(), Ti = "PeerJS: ";
  var Rt;
  (function(t) {
    t[t.Disabled = 0] = "Disabled", t[t.Errors = 1] = "Errors", t[t.Warnings = 2] = "Warnings", t[t.All = 3] = "All";
  })(Rt || (Rt = {}));
  class Mi {
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      this._logLevel = e;
    }
    log(...e) {
      this._logLevel >= 3 && this._print(3, ...e);
    }
    warn(...e) {
      this._logLevel >= 2 && this._print(2, ...e);
    }
    error(...e) {
      this._logLevel >= 1 && this._print(1, ...e);
    }
    setLogFunction(e) {
      this._print = e;
    }
    _print(e, ...n) {
      const r = [
        Ti,
        ...n
      ];
      for (const i in r) r[i] instanceof Error && (r[i] = "(" + r[i].name + ") " + r[i].message);
      e >= 3 ? console.log(...r) : e >= 2 ? console.warn("WARNING", ...r) : e >= 1 && console.error("ERROR", ...r);
    }
    constructor() {
      this._logLevel = 0;
    }
  }
  var v = new Mi(), tt = {}, Ii = Object.prototype.hasOwnProperty, j = "~";
  function le() {
  }
  Object.create && (le.prototype = /* @__PURE__ */ Object.create(null), new le().__proto__ || (j = false));
  function Ai(t, e, n) {
    this.fn = t, this.context = e, this.once = n || false;
  }
  function wn(t, e, n, r, i) {
    if (typeof n != "function") throw new TypeError("The listener must be a function");
    var s = new Ai(n, r || t, i), a = j ? j + e : e;
    return t._events[a] ? t._events[a].fn ? t._events[a] = [
      t._events[a],
      s
    ] : t._events[a].push(s) : (t._events[a] = s, t._eventsCount++), t;
  }
  function ke(t, e) {
    --t._eventsCount === 0 ? t._events = new le() : delete t._events[e];
  }
  function O() {
    this._events = new le(), this._eventsCount = 0;
  }
  O.prototype.eventNames = function() {
    var e = [], n, r;
    if (this._eventsCount === 0) return e;
    for (r in n = this._events) Ii.call(n, r) && e.push(j ? r.slice(1) : r);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(n)) : e;
  };
  O.prototype.listeners = function(e) {
    var n = j ? j + e : e, r = this._events[n];
    if (!r) return [];
    if (r.fn) return [
      r.fn
    ];
    for (var i = 0, s = r.length, a = new Array(s); i < s; i++) a[i] = r[i].fn;
    return a;
  };
  O.prototype.listenerCount = function(e) {
    var n = j ? j + e : e, r = this._events[n];
    return r ? r.fn ? 1 : r.length : 0;
  };
  O.prototype.emit = function(e, n, r, i, s, a) {
    var d = j ? j + e : e;
    if (!this._events[d]) return false;
    var o = this._events[d], c = arguments.length, l, h;
    if (o.fn) {
      switch (o.once && this.removeListener(e, o.fn, void 0, true), c) {
        case 1:
          return o.fn.call(o.context), true;
        case 2:
          return o.fn.call(o.context, n), true;
        case 3:
          return o.fn.call(o.context, n, r), true;
        case 4:
          return o.fn.call(o.context, n, r, i), true;
        case 5:
          return o.fn.call(o.context, n, r, i, s), true;
        case 6:
          return o.fn.call(o.context, n, r, i, s, a), true;
      }
      for (h = 1, l = new Array(c - 1); h < c; h++) l[h - 1] = arguments[h];
      o.fn.apply(o.context, l);
    } else {
      var f = o.length, m;
      for (h = 0; h < f; h++) switch (o[h].once && this.removeListener(e, o[h].fn, void 0, true), c) {
        case 1:
          o[h].fn.call(o[h].context);
          break;
        case 2:
          o[h].fn.call(o[h].context, n);
          break;
        case 3:
          o[h].fn.call(o[h].context, n, r);
          break;
        case 4:
          o[h].fn.call(o[h].context, n, r, i);
          break;
        default:
          if (!l) for (m = 1, l = new Array(c - 1); m < c; m++) l[m - 1] = arguments[m];
          o[h].fn.apply(o[h].context, l);
      }
    }
    return true;
  };
  O.prototype.on = function(e, n, r) {
    return wn(this, e, n, r, false);
  };
  O.prototype.once = function(e, n, r) {
    return wn(this, e, n, r, true);
  };
  O.prototype.removeListener = function(e, n, r, i) {
    var s = j ? j + e : e;
    if (!this._events[s]) return this;
    if (!n) return ke(this, s), this;
    var a = this._events[s];
    if (a.fn) a.fn === n && (!i || a.once) && (!r || a.context === r) && ke(this, s);
    else {
      for (var d = 0, o = [], c = a.length; d < c; d++) (a[d].fn !== n || i && !a[d].once || r && a[d].context !== r) && o.push(a[d]);
      o.length ? this._events[s] = o.length === 1 ? o[0] : o : ke(this, s);
    }
    return this;
  };
  O.prototype.removeAllListeners = function(e) {
    var n;
    return e ? (n = j ? j + e : e, this._events[n] && ke(this, n)) : (this._events = new le(), this._eventsCount = 0), this;
  };
  O.prototype.off = O.prototype.removeListener;
  O.prototype.addListener = O.prototype.on;
  O.prefixed = j;
  O.EventEmitter = O;
  tt = O;
  var $ = {};
  q($, "ConnectionType", () => W);
  q($, "PeerErrorType", () => M);
  q($, "BaseConnectionErrorType", () => de);
  q($, "DataConnectionErrorType", () => he);
  q($, "SerializationType", () => ne);
  q($, "SocketEventType", () => G);
  q($, "ServerMessageType", () => L);
  var W;
  (function(t) {
    t.Data = "data", t.Media = "media";
  })(W || (W = {}));
  var M;
  (function(t) {
    t.BrowserIncompatible = "browser-incompatible", t.Disconnected = "disconnected", t.InvalidID = "invalid-id", t.InvalidKey = "invalid-key", t.Network = "network", t.PeerUnavailable = "peer-unavailable", t.SslUnavailable = "ssl-unavailable", t.ServerError = "server-error", t.SocketError = "socket-error", t.SocketClosed = "socket-closed", t.UnavailableID = "unavailable-id", t.WebRTC = "webrtc";
  })(M || (M = {}));
  var de;
  (function(t) {
    t.NegotiationFailed = "negotiation-failed", t.ConnectionClosed = "connection-closed";
  })(de || (de = {}));
  var he;
  (function(t) {
    t.NotOpenYet = "not-open-yet", t.MessageToBig = "message-too-big";
  })(he || (he = {}));
  var ne;
  (function(t) {
    t.Binary = "binary", t.BinaryUTF8 = "binary-utf8", t.JSON = "json", t.None = "raw";
  })(ne || (ne = {}));
  var G;
  (function(t) {
    t.Message = "message", t.Disconnected = "disconnected", t.Error = "error", t.Close = "close";
  })(G || (G = {}));
  var L;
  (function(t) {
    t.Heartbeat = "HEARTBEAT", t.Candidate = "CANDIDATE", t.Offer = "OFFER", t.Answer = "ANSWER", t.Open = "OPEN", t.Error = "ERROR", t.IdTaken = "ID-TAKEN", t.InvalidKey = "INVALID-KEY", t.Leave = "LEAVE", t.Expire = "EXPIRE";
  })(L || (L = {}));
  var nt = {};
  nt = JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xFCckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","So\u0308ren Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');
  class Li extends tt.EventEmitter {
    constructor(e, n, r, i, s, a = 5e3) {
      super(), this.pingInterval = a, this._disconnected = true, this._messagesQueue = [];
      const d = e ? "wss://" : "ws://";
      this._baseUrl = d + n + ":" + r + i + "peerjs?key=" + s;
    }
    start(e, n) {
      this._id = e;
      const r = `${this._baseUrl}&id=${e}&token=${n}`;
      this._socket || !this._disconnected || (this._socket = new WebSocket(r + "&version=" + nt.version), this._disconnected = false, this._socket.onmessage = (i) => {
        let s;
        try {
          s = JSON.parse(i.data), v.log("Server message received:", s);
        } catch {
          v.log("Invalid server message", i.data);
          return;
        }
        this.emit(G.Message, s);
      }, this._socket.onclose = (i) => {
        this._disconnected || (v.log("Socket closed.", i), this._cleanup(), this._disconnected = true, this.emit(G.Disconnected));
      }, this._socket.onopen = () => {
        this._disconnected || (this._sendQueuedMessages(), v.log("Socket open"), this._scheduleHeartbeat());
      });
    }
    _scheduleHeartbeat() {
      this._wsPingTimer = setTimeout(() => {
        this._sendHeartbeat();
      }, this.pingInterval);
    }
    _sendHeartbeat() {
      if (!this._wsOpen()) {
        v.log("Cannot send heartbeat, because socket closed");
        return;
      }
      const e = JSON.stringify({
        type: L.Heartbeat
      });
      this._socket.send(e), this._scheduleHeartbeat();
    }
    _wsOpen() {
      return !!this._socket && this._socket.readyState === 1;
    }
    _sendQueuedMessages() {
      const e = [
        ...this._messagesQueue
      ];
      this._messagesQueue = [];
      for (const n of e) this.send(n);
    }
    send(e) {
      if (this._disconnected) return;
      if (!this._id) {
        this._messagesQueue.push(e);
        return;
      }
      if (!e.type) {
        this.emit(G.Error, "Invalid message");
        return;
      }
      if (!this._wsOpen()) return;
      const n = JSON.stringify(e);
      this._socket.send(n);
    }
    close() {
      this._disconnected || (this._cleanup(), this._disconnected = true);
    }
    _cleanup() {
      this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
    }
  }
  class Tn {
    constructor(e) {
      this.connection = e;
    }
    startConnection(e) {
      const n = this._startPeerConnection();
      if (this.connection.peerConnection = n, this.connection.type === W.Media && e._stream && this._addTracksToConnection(e._stream, n), e.originator) {
        const r = this.connection, i = {
          ordered: !!e.reliable
        }, s = n.createDataChannel(r.label, i);
        r._initializeDataChannel(s), this._makeOffer();
      } else this.handleSDP("OFFER", e.sdp);
    }
    _startPeerConnection() {
      v.log("Creating RTCPeerConnection.");
      const e = new RTCPeerConnection(this.connection.provider.options.config);
      return this._setupListeners(e), e;
    }
    _setupListeners(e) {
      const n = this.connection.peer, r = this.connection.connectionId, i = this.connection.type, s = this.connection.provider;
      v.log("Listening for ICE candidates."), e.onicecandidate = (a) => {
        !a.candidate || !a.candidate.candidate || (v.log(`Received ICE candidates for ${n}:`, a.candidate), s.socket.send({
          type: L.Candidate,
          payload: {
            candidate: a.candidate,
            type: i,
            connectionId: r
          },
          dst: n
        }));
      }, e.oniceconnectionstatechange = () => {
        switch (e.iceConnectionState) {
          case "failed":
            v.log("iceConnectionState is failed, closing connections to " + n), this.connection.emitError(de.NegotiationFailed, "Negotiation of connection to " + n + " failed."), this.connection.close();
            break;
          case "closed":
            v.log("iceConnectionState is closed, closing connections to " + n), this.connection.emitError(de.ConnectionClosed, "Connection to " + n + " closed."), this.connection.close();
            break;
          case "disconnected":
            v.log("iceConnectionState changed to disconnected on the connection with " + n);
            break;
          case "completed":
            e.onicecandidate = () => {
            };
            break;
        }
        this.connection.emit("iceStateChanged", e.iceConnectionState);
      }, v.log("Listening for data channel"), e.ondatachannel = (a) => {
        v.log("Received data channel");
        const d = a.channel;
        s.getConnection(n, r)._initializeDataChannel(d);
      }, v.log("Listening for remote stream"), e.ontrack = (a) => {
        v.log("Received remote stream");
        const d = a.streams[0], o = s.getConnection(n, r);
        if (o.type === W.Media) {
          const c = o;
          this._addStreamToMediaConnection(d, c);
        }
      };
    }
    cleanup() {
      v.log("Cleaning up PeerConnection to " + this.connection.peer);
      const e = this.connection.peerConnection;
      if (!e) return;
      this.connection.peerConnection = null, e.onicecandidate = e.oniceconnectionstatechange = e.ondatachannel = e.ontrack = () => {
      };
      const n = e.signalingState !== "closed";
      let r = false;
      const i = this.connection.dataChannel;
      i && (r = !!i.readyState && i.readyState !== "closed"), (n || r) && e.close();
    }
    async _makeOffer() {
      const e = this.connection.peerConnection, n = this.connection.provider;
      try {
        const r = await e.createOffer(this.connection.options.constraints);
        v.log("Created offer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp);
        try {
          await e.setLocalDescription(r), v.log("Set localDescription:", r, `for:${this.connection.peer}`);
          let i = {
            sdp: r,
            type: this.connection.type,
            connectionId: this.connection.connectionId,
            metadata: this.connection.metadata
          };
          if (this.connection.type === W.Data) {
            const s = this.connection;
            i = {
              ...i,
              label: s.label,
              reliable: s.reliable,
              serialization: s.serialization
            };
          }
          n.socket.send({
            type: L.Offer,
            payload: i,
            dst: this.connection.peer
          });
        } catch (i) {
          i != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" && (n.emitError(M.WebRTC, i), v.log("Failed to setLocalDescription, ", i));
        }
      } catch (r) {
        n.emitError(M.WebRTC, r), v.log("Failed to createOffer, ", r);
      }
    }
    async _makeAnswer() {
      const e = this.connection.peerConnection, n = this.connection.provider;
      try {
        const r = await e.createAnswer();
        v.log("Created answer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp);
        try {
          await e.setLocalDescription(r), v.log("Set localDescription:", r, `for:${this.connection.peer}`), n.socket.send({
            type: L.Answer,
            payload: {
              sdp: r,
              type: this.connection.type,
              connectionId: this.connection.connectionId
            },
            dst: this.connection.peer
          });
        } catch (i) {
          n.emitError(M.WebRTC, i), v.log("Failed to setLocalDescription, ", i);
        }
      } catch (r) {
        n.emitError(M.WebRTC, r), v.log("Failed to create answer, ", r);
      }
    }
    async handleSDP(e, n) {
      n = new RTCSessionDescription(n);
      const r = this.connection.peerConnection, i = this.connection.provider;
      v.log("Setting remote description", n);
      const s = this;
      try {
        await r.setRemoteDescription(n), v.log(`Set remoteDescription:${e} for:${this.connection.peer}`), e === "OFFER" && await s._makeAnswer();
      } catch (a) {
        i.emitError(M.WebRTC, a), v.log("Failed to setRemoteDescription, ", a);
      }
    }
    async handleCandidate(e) {
      v.log("handleCandidate:", e);
      try {
        await this.connection.peerConnection.addIceCandidate(e), v.log(`Added ICE candidate for:${this.connection.peer}`);
      } catch (n) {
        this.connection.provider.emitError(M.WebRTC, n), v.log("Failed to handleCandidate, ", n);
      }
    }
    _addTracksToConnection(e, n) {
      if (v.log(`add tracks from stream ${e.id} to peer connection`), !n.addTrack) return v.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
      e.getTracks().forEach((r) => {
        n.addTrack(r, e);
      });
    }
    _addStreamToMediaConnection(e, n) {
      v.log(`add stream ${e.id} to media connection ${n.connectionId}`), n.addStream(e);
    }
  }
  class Mn extends tt.EventEmitter {
    emitError(e, n) {
      v.error("Error:", n), this.emit("error", new Di(`${e}`, n));
    }
  }
  class Di extends Error {
    constructor(e, n) {
      typeof n == "string" ? super(n) : (super(), Object.assign(this, n)), this.type = e;
    }
  }
  class In extends Mn {
    get open() {
      return this._open;
    }
    constructor(e, n, r) {
      super(), this.peer = e, this.provider = n, this.options = r, this._open = false, this.metadata = r.metadata;
    }
  }
  const _we = class _we extends In {
    get type() {
      return W.Media;
    }
    get localStream() {
      return this._localStream;
    }
    get remoteStream() {
      return this._remoteStream;
    }
    constructor(e, n, r) {
      super(e, n, r), this._localStream = this.options._stream, this.connectionId = this.options.connectionId || _we.ID_PREFIX + z.randomToken(), this._negotiator = new Tn(this), this._localStream && this._negotiator.startConnection({
        _stream: this._localStream,
        originator: true
      });
    }
    _initializeDataChannel(e) {
      this.dataChannel = e, this.dataChannel.onopen = () => {
        v.log(`DC#${this.connectionId} dc connection success`), this.emit("willCloseOnRemote");
      }, this.dataChannel.onclose = () => {
        v.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
      };
    }
    addStream(e) {
      v.log("Receiving stream", e), this._remoteStream = e, super.emit("stream", e);
    }
    handleMessage(e) {
      const n = e.type, r = e.payload;
      switch (e.type) {
        case L.Answer:
          this._negotiator.handleSDP(n, r.sdp), this._open = true;
          break;
        case L.Candidate:
          this._negotiator.handleCandidate(r.candidate);
          break;
        default:
          v.warn(`Unrecognized message type:${n} from peer:${this.peer}`);
          break;
      }
    }
    answer(e, n = {}) {
      if (this._localStream) {
        v.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
        return;
      }
      this._localStream = e, n && n.sdpTransform && (this.options.sdpTransform = n.sdpTransform), this._negotiator.startConnection({
        ...this.options._payload,
        _stream: e
      });
      const r = this.provider._getMessages(this.connectionId);
      for (const i of r) this.handleMessage(i);
      this._open = true;
    }
    close() {
      this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = false, super.emit("close"));
    }
  };
  _e2 = new WeakMap();
  __privateAdd(_we, _e2, _we.ID_PREFIX = "mc_");
  let we = _we;
  class _i {
    constructor(e) {
      this._options = e;
    }
    _buildRequest(e) {
      const n = this._options.secure ? "https" : "http", { host: r, port: i, path: s, key: a } = this._options, d = new URL(`${n}://${r}:${i}${s}${a}/${e}`);
      return d.searchParams.set("ts", `${Date.now()}${Math.random()}`), d.searchParams.set("version", nt.version), fetch(d.href, {
        referrerPolicy: this._options.referrerPolicy
      });
    }
    async retrieveId() {
      try {
        const e = await this._buildRequest("id");
        if (e.status !== 200) throw new Error(`Error. Status:${e.status}`);
        return e.text();
      } catch (e) {
        v.error("Error retrieving ID", e);
        let n = "";
        throw this._options.path === "/" && this._options.host !== z.CLOUD_HOST && (n = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + n);
      }
    }
    async listAllPeers() {
      try {
        const e = await this._buildRequest("peers");
        if (e.status !== 200) {
          if (e.status === 401) {
            let n = "";
            throw this._options.host === z.CLOUD_HOST ? n = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : n = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + n);
          }
          throw new Error(`Error. Status:${e.status}`);
        }
        return e.json();
      } catch (e) {
        throw v.error("Error retrieving list peers", e), new Error("Could not get list peers from the server." + e);
      }
    }
  }
  const _Te = class _Te extends In {
    get type() {
      return W.Data;
    }
    constructor(e, n, r) {
      super(e, n, r), this.connectionId = this.options.connectionId || _Te.ID_PREFIX + Pn(), this.label = this.options.label || this.connectionId, this.reliable = !!this.options.reliable, this._negotiator = new Tn(this), this._negotiator.startConnection(this.options._payload || {
        originator: true,
        reliable: this.reliable
      });
    }
    _initializeDataChannel(e) {
      this.dataChannel = e, this.dataChannel.onopen = () => {
        v.log(`DC#${this.connectionId} dc connection success`), this._open = true, this.emit("open");
      }, this.dataChannel.onmessage = (n) => {
        v.log(`DC#${this.connectionId} dc onmessage:`, n.data);
      }, this.dataChannel.onclose = () => {
        v.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
      };
    }
    close(e) {
      if (e == null ? void 0 : e.flush) {
        this.send({
          __peerData: {
            type: "close"
          }
        });
        return;
      }
      this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this.dataChannel = null), this.open && (this._open = false, super.emit("close"));
    }
    send(e, n = false) {
      if (!this.open) {
        this.emitError(he.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
        return;
      }
      return this._send(e, n);
    }
    async handleMessage(e) {
      const n = e.payload;
      switch (e.type) {
        case L.Answer:
          await this._negotiator.handleSDP(e.type, n.sdp);
          break;
        case L.Candidate:
          await this._negotiator.handleCandidate(n.candidate);
          break;
        default:
          v.warn("Unrecognized message type:", e.type, "from peer:", this.peer);
          break;
      }
    }
  };
  _e3 = new WeakMap();
  _t2 = new WeakMap();
  __privateAdd(_Te, _e3, _Te.ID_PREFIX = "dc_");
  __privateAdd(_Te, _t2, _Te.MAX_BUFFERED_AMOUNT = 8388608);
  let Te = _Te;
  class rt extends Te {
    get bufferSize() {
      return this._bufferSize;
    }
    _initializeDataChannel(e) {
      super._initializeDataChannel(e), this.dataChannel.binaryType = "arraybuffer", this.dataChannel.addEventListener("message", (n) => this._handleDataMessage(n));
    }
    _bufferedSend(e) {
      (this._buffering || !this._trySend(e)) && (this._buffer.push(e), this._bufferSize = this._buffer.length);
    }
    _trySend(e) {
      if (!this.open) return false;
      if (this.dataChannel.bufferedAmount > Te.MAX_BUFFERED_AMOUNT) return this._buffering = true, setTimeout(() => {
        this._buffering = false, this._tryBuffer();
      }, 50), false;
      try {
        this.dataChannel.send(e);
      } catch (n) {
        return v.error(`DC#:${this.connectionId} Error when sending:`, n), this._buffering = true, this.close(), false;
      }
      return true;
    }
    _tryBuffer() {
      if (!this.open || this._buffer.length === 0) return;
      const e = this._buffer[0];
      this._trySend(e) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
    }
    close(e) {
      if (e == null ? void 0 : e.flush) {
        this.send({
          __peerData: {
            type: "close"
          }
        });
        return;
      }
      this._buffer = [], this._bufferSize = 0, super.close();
    }
    constructor(...e) {
      super(...e), this._buffer = [], this._bufferSize = 0, this._buffering = false;
    }
  }
  class Oe extends rt {
    close(e) {
      super.close(e), this._chunkedData = {};
    }
    constructor(e, n, r) {
      super(e, n, r), this.chunker = new kn(), this.serialization = ne.Binary, this._chunkedData = {};
    }
    _handleDataMessage({ data: e }) {
      const n = Vt(e), r = n.__peerData;
      if (r) {
        if (r.type === "close") {
          this.close();
          return;
        }
        this._handleChunk(n);
        return;
      }
      this.emit("data", n);
    }
    _handleChunk(e) {
      const n = e.__peerData, r = this._chunkedData[n] || {
        data: [],
        count: 0,
        total: e.total
      };
      if (r.data[e.n] = new Uint8Array(e.data), r.count++, this._chunkedData[n] = r, r.total === r.count) {
        delete this._chunkedData[n];
        const i = ki(r.data);
        this._handleDataMessage({
          data: i
        });
      }
    }
    _send(e, n) {
      const r = Gt(e);
      if (r instanceof Promise) return this._send_blob(r);
      if (!n && r.byteLength > this.chunker.chunkedMTU) {
        this._sendChunks(r);
        return;
      }
      this._bufferedSend(r);
    }
    async _send_blob(e) {
      const n = await e;
      if (n.byteLength > this.chunker.chunkedMTU) {
        this._sendChunks(n);
        return;
      }
      this._bufferedSend(n);
    }
    _sendChunks(e) {
      const n = this.chunker.chunk(e);
      v.log(`DC#${this.connectionId} Try to send ${n.length} chunks...`);
      for (const r of n) this.send(r, true);
    }
  }
  class Oi extends rt {
    _handleDataMessage({ data: e }) {
      super.emit("data", e);
    }
    _send(e, n) {
      this._bufferedSend(e);
    }
    constructor(...e) {
      super(...e), this.serialization = ne.None;
    }
  }
  class ji extends rt {
    _handleDataMessage({ data: e }) {
      const n = this.parse(this.decoder.decode(e)), r = n.__peerData;
      if (r && r.type === "close") {
        this.close();
        return;
      }
      this.emit("data", n);
    }
    _send(e, n) {
      const r = this.encoder.encode(this.stringify(e));
      if (r.byteLength >= z.chunkedMTU) {
        this.emitError(he.MessageToBig, "Message too big for JSON channel");
        return;
      }
      this._bufferedSend(r);
    }
    constructor(...e) {
      super(...e), this.serialization = ne.JSON, this.encoder = new TextEncoder(), this.decoder = new TextDecoder(), this.stringify = JSON.stringify, this.parse = JSON.parse;
    }
  }
  const _it = class _it extends Mn {
    get id() {
      return this._id;
    }
    get options() {
      return this._options;
    }
    get open() {
      return this._open;
    }
    get socket() {
      return this._socket;
    }
    get connections() {
      const e = /* @__PURE__ */ Object.create(null);
      for (const [n, r] of this._connections) e[n] = r;
      return e;
    }
    get destroyed() {
      return this._destroyed;
    }
    get disconnected() {
      return this._disconnected;
    }
    constructor(e, n) {
      super(), this._serializers = {
        raw: Oi,
        json: ji,
        binary: Oe,
        "binary-utf8": Oe,
        default: Oe
      }, this._id = null, this._lastServerId = null, this._destroyed = false, this._disconnected = false, this._open = false, this._connections = /* @__PURE__ */ new Map(), this._lostMessages = /* @__PURE__ */ new Map();
      let r;
      if (e && e.constructor == Object ? n = e : e && (r = e.toString()), n = {
        debug: 0,
        host: z.CLOUD_HOST,
        port: z.CLOUD_PORT,
        path: "/",
        key: _it.DEFAULT_KEY,
        token: z.randomToken(),
        config: z.defaultConfig,
        referrerPolicy: "strict-origin-when-cross-origin",
        serializers: {},
        ...n
      }, this._options = n, this._serializers = {
        ...this._serializers,
        ...this.options.serializers
      }, this._options.host === "/" && (this._options.host = window.location.hostname), this._options.path && (this._options.path[0] !== "/" && (this._options.path = "/" + this._options.path), this._options.path[this._options.path.length - 1] !== "/" && (this._options.path += "/")), this._options.secure === void 0 && this._options.host !== z.CLOUD_HOST ? this._options.secure = z.isSecure() : this._options.host == z.CLOUD_HOST && (this._options.secure = true), this._options.logFunction && v.setLogFunction(this._options.logFunction), v.logLevel = this._options.debug || 0, this._api = new _i(n), this._socket = this._createServerConnection(), !z.supports.audioVideo && !z.supports.data) {
        this._delayedAbort(M.BrowserIncompatible, "The current browser does not support WebRTC");
        return;
      }
      if (r && !z.validateId(r)) {
        this._delayedAbort(M.InvalidID, `ID "${r}" is invalid`);
        return;
      }
      r ? this._initialize(r) : this._api.retrieveId().then((i) => this._initialize(i)).catch((i) => this._abort(M.ServerError, i));
    }
    _createServerConnection() {
      const e = new Li(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
      return e.on(G.Message, (n) => {
        this._handleMessage(n);
      }), e.on(G.Error, (n) => {
        this._abort(M.SocketError, n);
      }), e.on(G.Disconnected, () => {
        this.disconnected || (this.emitError(M.Network, "Lost connection to server."), this.disconnect());
      }), e.on(G.Close, () => {
        this.disconnected || this._abort(M.SocketClosed, "Underlying socket is already closed.");
      }), e;
    }
    _initialize(e) {
      this._id = e, this.socket.start(e, this._options.token);
    }
    _handleMessage(e) {
      const n = e.type, r = e.payload, i = e.src;
      switch (n) {
        case L.Open:
          this._lastServerId = this.id, this._open = true, this.emit("open", this.id);
          break;
        case L.Error:
          this._abort(M.ServerError, r.msg);
          break;
        case L.IdTaken:
          this._abort(M.UnavailableID, `ID "${this.id}" is taken`);
          break;
        case L.InvalidKey:
          this._abort(M.InvalidKey, `API KEY "${this._options.key}" is invalid`);
          break;
        case L.Leave:
          v.log(`Received leave message from ${i}`), this._cleanupPeer(i), this._connections.delete(i);
          break;
        case L.Expire:
          this.emitError(M.PeerUnavailable, `Could not connect to peer ${i}`);
          break;
        case L.Offer: {
          const s = r.connectionId;
          let a = this.getConnection(i, s);
          if (a && (a.close(), v.warn(`Offer received for existing Connection ID:${s}`)), r.type === W.Media) {
            const o = new we(i, this, {
              connectionId: s,
              _payload: r,
              metadata: r.metadata
            });
            a = o, this._addConnection(i, a), this.emit("call", o);
          } else if (r.type === W.Data) {
            const o = new this._serializers[r.serialization](i, this, {
              connectionId: s,
              _payload: r,
              metadata: r.metadata,
              label: r.label,
              serialization: r.serialization,
              reliable: r.reliable
            });
            a = o, this._addConnection(i, a), this.emit("connection", o);
          } else {
            v.warn(`Received malformed connection type:${r.type}`);
            return;
          }
          const d = this._getMessages(s);
          for (const o of d) a.handleMessage(o);
          break;
        }
        default: {
          if (!r) {
            v.warn(`You received a malformed message from ${i} of type ${n}`);
            return;
          }
          const s = r.connectionId, a = this.getConnection(i, s);
          a && a.peerConnection ? a.handleMessage(e) : s ? this._storeMessage(s, e) : v.warn("You received an unrecognized message:", e);
          break;
        }
      }
    }
    _storeMessage(e, n) {
      this._lostMessages.has(e) || this._lostMessages.set(e, []), this._lostMessages.get(e).push(n);
    }
    _getMessages(e) {
      const n = this._lostMessages.get(e);
      return n ? (this._lostMessages.delete(e), n) : [];
    }
    connect(e, n = {}) {
      if (n = {
        serialization: "default",
        ...n
      }, this.disconnected) {
        v.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), this.emitError(M.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
        return;
      }
      const r = new this._serializers[n.serialization](e, this, n);
      return this._addConnection(e, r), r;
    }
    call(e, n, r = {}) {
      if (this.disconnected) {
        v.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), this.emitError(M.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
        return;
      }
      if (!n) {
        v.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
        return;
      }
      const i = new we(e, this, {
        ...r,
        _stream: n
      });
      return this._addConnection(e, i), i;
    }
    _addConnection(e, n) {
      v.log(`add connection ${n.type}:${n.connectionId} to peerId:${e}`), this._connections.has(e) || this._connections.set(e, []), this._connections.get(e).push(n);
    }
    _removeConnection(e) {
      const n = this._connections.get(e.peer);
      if (n) {
        const r = n.indexOf(e);
        r !== -1 && n.splice(r, 1);
      }
      this._lostMessages.delete(e.connectionId);
    }
    getConnection(e, n) {
      const r = this._connections.get(e);
      if (!r) return null;
      for (const i of r) if (i.connectionId === n) return i;
      return null;
    }
    _delayedAbort(e, n) {
      setTimeout(() => {
        this._abort(e, n);
      }, 0);
    }
    _abort(e, n) {
      v.error("Aborting!"), this.emitError(e, n), this._lastServerId ? this.disconnect() : this.destroy();
    }
    destroy() {
      this.destroyed || (v.log(`Destroy peer with ID:${this.id}`), this.disconnect(), this._cleanup(), this._destroyed = true, this.emit("close"));
    }
    _cleanup() {
      for (const e of this._connections.keys()) this._cleanupPeer(e), this._connections.delete(e);
      this.socket.removeAllListeners();
    }
    _cleanupPeer(e) {
      const n = this._connections.get(e);
      if (n) for (const r of n) r.close();
    }
    disconnect() {
      if (this.disconnected) return;
      const e = this.id;
      v.log(`Disconnect peer with ID:${e}`), this._disconnected = true, this._open = false, this.socket.close(), this._lastServerId = e, this._id = null, this.emit("disconnected", e);
    }
    reconnect() {
      if (this.disconnected && !this.destroyed) v.log(`Attempting reconnection to server with ID ${this._lastServerId}`), this._disconnected = false, this._initialize(this._lastServerId);
      else {
        if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
        if (!this.disconnected && !this.open) v.error("In a hurry? We're still trying to make the initial connection!");
        else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
      }
    }
    listAllPeers(e = (n) => {
    }) {
      this._api.listAllPeers().then((n) => e(n)).catch((n) => this._abort(M.ServerError, n));
    }
  };
  _e4 = new WeakMap();
  __privateAdd(_it, _e4, _it.DEFAULT_KEY = "peerjs");
  let it = _it;
  const zi = () => {
    const { setLocalPeer: t, localPeer: e, setConnectedPeerID: n } = u.useContext(H), [r, i] = u.useState(e.peer), [s, a] = u.useState(e.peerID), d = () => {
      r && (r.disconnect(), r.destroy()), i(null), a(null), t({
        peer: "",
        peerID: ""
      }), n({
        peerID: ""
      });
    };
    return u.useEffect(() => {
      const o = r || new it();
      o.on("open", () => {
        i(o), a(o.id), t({
          peer: o,
          peerID: o.id
        });
      }), o.on("connection", (c) => {
        c.on("data", (l) => {
          n({
            peerID: l.peerID
          });
        });
      }), o.on("disconnected", () => {
        d();
      }), o.on("close", () => {
        d();
      }), o.on("error", (c) => {
        d();
      });
    }, []), [
      r,
      s
    ];
  };
  var Bi = Object.defineProperty, Me = Object.getOwnPropertySymbols, An = Object.prototype.hasOwnProperty, Ln = Object.prototype.propertyIsEnumerable, kt = (t, e, n) => e in t ? Bi(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Pt = (t, e) => {
    for (var n in e || (e = {})) An.call(e, n) && kt(t, n, e[n]);
    if (Me) for (var n of Me(e)) Ln.call(e, n) && kt(t, n, e[n]);
    return t;
  }, Ni = (t, e) => {
    var n = {};
    for (var r in t) An.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && Me) for (var r of Me(t)) e.indexOf(r) < 0 && Ln.call(t, r) && (n[r] = t[r]);
    return n;
  };
  var J;
  ((t) => {
    const e = class {
      constructor(o, c, l, h) {
        if (this.version = o, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], o < e.MIN_VERSION || o > e.MAX_VERSION) throw new RangeError("Version value out of range");
        if (h < -1 || h > 7) throw new RangeError("Mask value out of range");
        this.size = o * 4 + 17;
        let f = [];
        for (let g = 0; g < this.size; g++) f.push(false);
        for (let g = 0; g < this.size; g++) this.modules.push(f.slice()), this.isFunction.push(f.slice());
        this.drawFunctionPatterns();
        const m = this.addEccAndInterleave(l);
        if (this.drawCodewords(m), h == -1) {
          let g = 1e9;
          for (let x = 0; x < 8; x++) {
            this.applyMask(x), this.drawFormatBits(x);
            const y = this.getPenaltyScore();
            y < g && (h = x, g = y), this.applyMask(x);
          }
        }
        s(0 <= h && h <= 7), this.mask = h, this.applyMask(h), this.drawFormatBits(h), this.isFunction = [];
      }
      static encodeText(o, c) {
        const l = t.QrSegment.makeSegments(o);
        return e.encodeSegments(l, c);
      }
      static encodeBinary(o, c) {
        const l = t.QrSegment.makeBytes(o);
        return e.encodeSegments([
          l
        ], c);
      }
      static encodeSegments(o, c, l = 1, h = 40, f = -1, m = true) {
        if (!(e.MIN_VERSION <= l && l <= h && h <= e.MAX_VERSION) || f < -1 || f > 7) throw new RangeError("Invalid value");
        let g, x;
        for (g = l; ; g++) {
          const k = e.getNumDataCodewords(g, c) * 8, w = d.getTotalBits(o, g);
          if (w <= k) {
            x = w;
            break;
          }
          if (g >= h) throw new RangeError("Data too long");
        }
        for (const k of [
          e.Ecc.MEDIUM,
          e.Ecc.QUARTILE,
          e.Ecc.HIGH
        ]) m && x <= e.getNumDataCodewords(g, k) * 8 && (c = k);
        let y = [];
        for (const k of o) {
          r(k.mode.modeBits, 4, y), r(k.numChars, k.mode.numCharCountBits(g), y);
          for (const w of k.getData()) y.push(w);
        }
        s(y.length == x);
        const E = e.getNumDataCodewords(g, c) * 8;
        s(y.length <= E), r(0, Math.min(4, E - y.length), y), r(0, (8 - y.length % 8) % 8, y), s(y.length % 8 == 0);
        for (let k = 236; y.length < E; k ^= 253) r(k, 8, y);
        let I = [];
        for (; I.length * 8 < y.length; ) I.push(0);
        return y.forEach((k, w) => I[w >>> 3] |= k << 7 - (w & 7)), new e(g, c, I, f);
      }
      getModule(o, c) {
        return 0 <= o && o < this.size && 0 <= c && c < this.size && this.modules[c][o];
      }
      getModules() {
        return this.modules;
      }
      drawFunctionPatterns() {
        for (let l = 0; l < this.size; l++) this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
        this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
        const o = this.getAlignmentPatternPositions(), c = o.length;
        for (let l = 0; l < c; l++) for (let h = 0; h < c; h++) l == 0 && h == 0 || l == 0 && h == c - 1 || l == c - 1 && h == 0 || this.drawAlignmentPattern(o[l], o[h]);
        this.drawFormatBits(0), this.drawVersion();
      }
      drawFormatBits(o) {
        const c = this.errorCorrectionLevel.formatBits << 3 | o;
        let l = c;
        for (let f = 0; f < 10; f++) l = l << 1 ^ (l >>> 9) * 1335;
        const h = (c << 10 | l) ^ 21522;
        s(h >>> 15 == 0);
        for (let f = 0; f <= 5; f++) this.setFunctionModule(8, f, i(h, f));
        this.setFunctionModule(8, 7, i(h, 6)), this.setFunctionModule(8, 8, i(h, 7)), this.setFunctionModule(7, 8, i(h, 8));
        for (let f = 9; f < 15; f++) this.setFunctionModule(14 - f, 8, i(h, f));
        for (let f = 0; f < 8; f++) this.setFunctionModule(this.size - 1 - f, 8, i(h, f));
        for (let f = 8; f < 15; f++) this.setFunctionModule(8, this.size - 15 + f, i(h, f));
        this.setFunctionModule(8, this.size - 8, true);
      }
      drawVersion() {
        if (this.version < 7) return;
        let o = this.version;
        for (let l = 0; l < 12; l++) o = o << 1 ^ (o >>> 11) * 7973;
        const c = this.version << 12 | o;
        s(c >>> 18 == 0);
        for (let l = 0; l < 18; l++) {
          const h = i(c, l), f = this.size - 11 + l % 3, m = Math.floor(l / 3);
          this.setFunctionModule(f, m, h), this.setFunctionModule(m, f, h);
        }
      }
      drawFinderPattern(o, c) {
        for (let l = -4; l <= 4; l++) for (let h = -4; h <= 4; h++) {
          const f = Math.max(Math.abs(h), Math.abs(l)), m = o + h, g = c + l;
          0 <= m && m < this.size && 0 <= g && g < this.size && this.setFunctionModule(m, g, f != 2 && f != 4);
        }
      }
      drawAlignmentPattern(o, c) {
        for (let l = -2; l <= 2; l++) for (let h = -2; h <= 2; h++) this.setFunctionModule(o + h, c + l, Math.max(Math.abs(h), Math.abs(l)) != 1);
      }
      setFunctionModule(o, c, l) {
        this.modules[c][o] = l, this.isFunction[c][o] = true;
      }
      addEccAndInterleave(o) {
        const c = this.version, l = this.errorCorrectionLevel;
        if (o.length != e.getNumDataCodewords(c, l)) throw new RangeError("Invalid argument");
        const h = e.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][c], f = e.ECC_CODEWORDS_PER_BLOCK[l.ordinal][c], m = Math.floor(e.getNumRawDataModules(c) / 8), g = h - m % h, x = Math.floor(m / h);
        let y = [];
        const E = e.reedSolomonComputeDivisor(f);
        for (let k = 0, w = 0; k < h; k++) {
          let P = o.slice(w, w + x - f + (k < g ? 0 : 1));
          w += P.length;
          const U = e.reedSolomonComputeRemainder(P, E);
          k < g && P.push(0), y.push(P.concat(U));
        }
        let I = [];
        for (let k = 0; k < y[0].length; k++) y.forEach((w, P) => {
          (k != x - f || P >= g) && I.push(w[k]);
        });
        return s(I.length == m), I;
      }
      drawCodewords(o) {
        if (o.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
        let c = 0;
        for (let l = this.size - 1; l >= 1; l -= 2) {
          l == 6 && (l = 5);
          for (let h = 0; h < this.size; h++) for (let f = 0; f < 2; f++) {
            const m = l - f, x = (l + 1 & 2) == 0 ? this.size - 1 - h : h;
            !this.isFunction[x][m] && c < o.length * 8 && (this.modules[x][m] = i(o[c >>> 3], 7 - (c & 7)), c++);
          }
        }
        s(c == o.length * 8);
      }
      applyMask(o) {
        if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
        for (let c = 0; c < this.size; c++) for (let l = 0; l < this.size; l++) {
          let h;
          switch (o) {
            case 0:
              h = (l + c) % 2 == 0;
              break;
            case 1:
              h = c % 2 == 0;
              break;
            case 2:
              h = l % 3 == 0;
              break;
            case 3:
              h = (l + c) % 3 == 0;
              break;
            case 4:
              h = (Math.floor(l / 3) + Math.floor(c / 2)) % 2 == 0;
              break;
            case 5:
              h = l * c % 2 + l * c % 3 == 0;
              break;
            case 6:
              h = (l * c % 2 + l * c % 3) % 2 == 0;
              break;
            case 7:
              h = ((l + c) % 2 + l * c % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[c][l] && h && (this.modules[c][l] = !this.modules[c][l]);
        }
      }
      getPenaltyScore() {
        let o = 0;
        for (let f = 0; f < this.size; f++) {
          let m = false, g = 0, x = [
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let y = 0; y < this.size; y++) this.modules[f][y] == m ? (g++, g == 5 ? o += e.PENALTY_N1 : g > 5 && o++) : (this.finderPenaltyAddHistory(g, x), m || (o += this.finderPenaltyCountPatterns(x) * e.PENALTY_N3), m = this.modules[f][y], g = 1);
          o += this.finderPenaltyTerminateAndCount(m, g, x) * e.PENALTY_N3;
        }
        for (let f = 0; f < this.size; f++) {
          let m = false, g = 0, x = [
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let y = 0; y < this.size; y++) this.modules[y][f] == m ? (g++, g == 5 ? o += e.PENALTY_N1 : g > 5 && o++) : (this.finderPenaltyAddHistory(g, x), m || (o += this.finderPenaltyCountPatterns(x) * e.PENALTY_N3), m = this.modules[y][f], g = 1);
          o += this.finderPenaltyTerminateAndCount(m, g, x) * e.PENALTY_N3;
        }
        for (let f = 0; f < this.size - 1; f++) for (let m = 0; m < this.size - 1; m++) {
          const g = this.modules[f][m];
          g == this.modules[f][m + 1] && g == this.modules[f + 1][m] && g == this.modules[f + 1][m + 1] && (o += e.PENALTY_N2);
        }
        let c = 0;
        for (const f of this.modules) c = f.reduce((m, g) => m + (g ? 1 : 0), c);
        const l = this.size * this.size, h = Math.ceil(Math.abs(c * 20 - l * 10) / l) - 1;
        return s(0 <= h && h <= 9), o += h * e.PENALTY_N4, s(0 <= o && o <= 2568888), o;
      }
      getAlignmentPatternPositions() {
        if (this.version == 1) return [];
        {
          const o = Math.floor(this.version / 7) + 2, c = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (o * 2 - 2)) * 2;
          let l = [
            6
          ];
          for (let h = this.size - 7; l.length < o; h -= c) l.splice(1, 0, h);
          return l;
        }
      }
      static getNumRawDataModules(o) {
        if (o < e.MIN_VERSION || o > e.MAX_VERSION) throw new RangeError("Version number out of range");
        let c = (16 * o + 128) * o + 64;
        if (o >= 2) {
          const l = Math.floor(o / 7) + 2;
          c -= (25 * l - 10) * l - 55, o >= 7 && (c -= 36);
        }
        return s(208 <= c && c <= 29648), c;
      }
      static getNumDataCodewords(o, c) {
        return Math.floor(e.getNumRawDataModules(o) / 8) - e.ECC_CODEWORDS_PER_BLOCK[c.ordinal][o] * e.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][o];
      }
      static reedSolomonComputeDivisor(o) {
        if (o < 1 || o > 255) throw new RangeError("Degree out of range");
        let c = [];
        for (let h = 0; h < o - 1; h++) c.push(0);
        c.push(1);
        let l = 1;
        for (let h = 0; h < o; h++) {
          for (let f = 0; f < c.length; f++) c[f] = e.reedSolomonMultiply(c[f], l), f + 1 < c.length && (c[f] ^= c[f + 1]);
          l = e.reedSolomonMultiply(l, 2);
        }
        return c;
      }
      static reedSolomonComputeRemainder(o, c) {
        let l = c.map((h) => 0);
        for (const h of o) {
          const f = h ^ l.shift();
          l.push(0), c.forEach((m, g) => l[g] ^= e.reedSolomonMultiply(m, f));
        }
        return l;
      }
      static reedSolomonMultiply(o, c) {
        if (o >>> 8 || c >>> 8) throw new RangeError("Byte out of range");
        let l = 0;
        for (let h = 7; h >= 0; h--) l = l << 1 ^ (l >>> 7) * 285, l ^= (c >>> h & 1) * o;
        return s(l >>> 8 == 0), l;
      }
      finderPenaltyCountPatterns(o) {
        const c = o[1];
        s(c <= this.size * 3);
        const l = c > 0 && o[2] == c && o[3] == c * 3 && o[4] == c && o[5] == c;
        return (l && o[0] >= c * 4 && o[6] >= c ? 1 : 0) + (l && o[6] >= c * 4 && o[0] >= c ? 1 : 0);
      }
      finderPenaltyTerminateAndCount(o, c, l) {
        return o && (this.finderPenaltyAddHistory(c, l), c = 0), c += this.size, this.finderPenaltyAddHistory(c, l), this.finderPenaltyCountPatterns(l);
      }
      finderPenaltyAddHistory(o, c) {
        c[0] == 0 && (o += this.size), c.pop(), c.unshift(o);
      }
    };
    let n = e;
    n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
      [
        -1,
        7,
        10,
        15,
        20,
        26,
        18,
        20,
        24,
        30,
        18,
        20,
        24,
        26,
        30,
        22,
        24,
        28,
        30,
        28,
        28,
        28,
        28,
        30,
        30,
        26,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
      ],
      [
        -1,
        10,
        16,
        26,
        18,
        24,
        16,
        18,
        22,
        22,
        26,
        30,
        22,
        22,
        24,
        24,
        28,
        28,
        26,
        26,
        26,
        26,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28
      ],
      [
        -1,
        13,
        22,
        18,
        26,
        18,
        24,
        18,
        22,
        20,
        24,
        28,
        26,
        24,
        20,
        30,
        24,
        28,
        28,
        26,
        30,
        28,
        30,
        30,
        30,
        30,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
      ],
      [
        -1,
        17,
        28,
        22,
        16,
        22,
        28,
        26,
        26,
        24,
        28,
        24,
        28,
        22,
        24,
        24,
        30,
        28,
        28,
        26,
        28,
        30,
        24,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
      ]
    ], n.NUM_ERROR_CORRECTION_BLOCKS = [
      [
        -1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        4,
        4,
        4,
        4,
        4,
        6,
        6,
        6,
        6,
        7,
        8,
        8,
        9,
        9,
        10,
        12,
        12,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        19,
        20,
        21,
        22,
        24,
        25
      ],
      [
        -1,
        1,
        1,
        1,
        2,
        2,
        4,
        4,
        4,
        5,
        5,
        5,
        8,
        9,
        9,
        10,
        10,
        11,
        13,
        14,
        16,
        17,
        17,
        18,
        20,
        21,
        23,
        25,
        26,
        28,
        29,
        31,
        33,
        35,
        37,
        38,
        40,
        43,
        45,
        47,
        49
      ],
      [
        -1,
        1,
        1,
        2,
        2,
        4,
        4,
        6,
        6,
        8,
        8,
        8,
        10,
        12,
        16,
        12,
        17,
        16,
        18,
        21,
        20,
        23,
        23,
        25,
        27,
        29,
        34,
        34,
        35,
        38,
        40,
        43,
        45,
        48,
        51,
        53,
        56,
        59,
        62,
        65,
        68
      ],
      [
        -1,
        1,
        1,
        2,
        4,
        4,
        4,
        5,
        6,
        8,
        8,
        11,
        11,
        16,
        16,
        18,
        16,
        19,
        21,
        25,
        25,
        25,
        34,
        30,
        32,
        35,
        37,
        40,
        42,
        45,
        48,
        51,
        54,
        57,
        60,
        63,
        66,
        70,
        74,
        77,
        81
      ]
    ], t.QrCode = n;
    function r(o, c, l) {
      if (c < 0 || c > 31 || o >>> c) throw new RangeError("Value out of range");
      for (let h = c - 1; h >= 0; h--) l.push(o >>> h & 1);
    }
    function i(o, c) {
      return (o >>> c & 1) != 0;
    }
    function s(o) {
      if (!o) throw new Error("Assertion error");
    }
    const a = class {
      constructor(o, c, l) {
        if (this.mode = o, this.numChars = c, this.bitData = l, c < 0) throw new RangeError("Invalid argument");
        this.bitData = l.slice();
      }
      static makeBytes(o) {
        let c = [];
        for (const l of o) r(l, 8, c);
        return new a(a.Mode.BYTE, o.length, c);
      }
      static makeNumeric(o) {
        if (!a.isNumeric(o)) throw new RangeError("String contains non-numeric characters");
        let c = [];
        for (let l = 0; l < o.length; ) {
          const h = Math.min(o.length - l, 3);
          r(parseInt(o.substr(l, h), 10), h * 3 + 1, c), l += h;
        }
        return new a(a.Mode.NUMERIC, o.length, c);
      }
      static makeAlphanumeric(o) {
        if (!a.isAlphanumeric(o)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
        let c = [], l;
        for (l = 0; l + 2 <= o.length; l += 2) {
          let h = a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(l)) * 45;
          h += a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(l + 1)), r(h, 11, c);
        }
        return l < o.length && r(a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(l)), 6, c), new a(a.Mode.ALPHANUMERIC, o.length, c);
      }
      static makeSegments(o) {
        return o == "" ? [] : a.isNumeric(o) ? [
          a.makeNumeric(o)
        ] : a.isAlphanumeric(o) ? [
          a.makeAlphanumeric(o)
        ] : [
          a.makeBytes(a.toUtf8ByteArray(o))
        ];
      }
      static makeEci(o) {
        let c = [];
        if (o < 0) throw new RangeError("ECI assignment value out of range");
        if (o < 128) r(o, 8, c);
        else if (o < 16384) r(2, 2, c), r(o, 14, c);
        else if (o < 1e6) r(6, 3, c), r(o, 21, c);
        else throw new RangeError("ECI assignment value out of range");
        return new a(a.Mode.ECI, 0, c);
      }
      static isNumeric(o) {
        return a.NUMERIC_REGEX.test(o);
      }
      static isAlphanumeric(o) {
        return a.ALPHANUMERIC_REGEX.test(o);
      }
      getData() {
        return this.bitData.slice();
      }
      static getTotalBits(o, c) {
        let l = 0;
        for (const h of o) {
          const f = h.mode.numCharCountBits(c);
          if (h.numChars >= 1 << f) return 1 / 0;
          l += 4 + f + h.bitData.length;
        }
        return l;
      }
      static toUtf8ByteArray(o) {
        o = encodeURI(o);
        let c = [];
        for (let l = 0; l < o.length; l++) o.charAt(l) != "%" ? c.push(o.charCodeAt(l)) : (c.push(parseInt(o.substr(l + 1, 2), 16)), l += 2);
        return c;
      }
    };
    let d = a;
    d.NUMERIC_REGEX = /^[0-9]*$/, d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, d.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t.QrSegment = d;
  })(J || (J = {}));
  ((t) => {
    ((e) => {
      const n = class {
        constructor(i, s) {
          this.ordinal = i, this.formatBits = s;
        }
      };
      let r = n;
      r.LOW = new n(0, 1), r.MEDIUM = new n(1, 0), r.QUARTILE = new n(2, 3), r.HIGH = new n(3, 2), e.Ecc = r;
    })(t.QrCode || (t.QrCode = {}));
  })(J || (J = {}));
  ((t) => {
    ((e) => {
      const n = class {
        constructor(i, s) {
          this.modeBits = i, this.numBitsCharCount = s;
        }
        numCharCountBits(i) {
          return this.numBitsCharCount[Math.floor((i + 7) / 17)];
        }
      };
      let r = n;
      r.NUMERIC = new n(1, [
        10,
        12,
        14
      ]), r.ALPHANUMERIC = new n(2, [
        9,
        11,
        13
      ]), r.BYTE = new n(4, [
        8,
        16,
        16
      ]), r.KANJI = new n(8, [
        8,
        10,
        12
      ]), r.ECI = new n(7, [
        0,
        0,
        0
      ]), e.Mode = r;
    })(t.QrSegment || (t.QrSegment = {}));
  })(J || (J = {}));
  var se = J;
  var Fi = {
    L: se.QrCode.Ecc.LOW,
    M: se.QrCode.Ecc.MEDIUM,
    Q: se.QrCode.Ecc.QUARTILE,
    H: se.QrCode.Ecc.HIGH
  }, Hi = 128, Ui = "L", Vi = "#FFFFFF", Gi = "#000000", Wi = false, Dn = 4, Yi = 0.1;
  function Qi(t, e = 0) {
    const n = [];
    return t.forEach(function(r, i) {
      let s = null;
      r.forEach(function(a, d) {
        if (!a && s !== null) {
          n.push(`M${s + e} ${i + e}h${d - s}v1H${s + e}z`), s = null;
          return;
        }
        if (d === r.length - 1) {
          if (!a) return;
          s === null ? n.push(`M${d + e},${i + e} h1v1H${d + e}z`) : n.push(`M${s + e},${i + e} h${d + 1 - s}v1H${s + e}z`);
          return;
        }
        a && s === null && (s = d);
      });
    }), n.join("");
  }
  function Xi(t, e) {
    return t.slice().map((n, r) => r < e.y || r >= e.y + e.h ? n : n.map((i, s) => s < e.x || s >= e.x + e.w ? i : false));
  }
  function Zi(t, e, n, r) {
    if (r == null) return null;
    const i = n ? Dn : 0, s = t.length + i * 2, a = Math.floor(e * Yi), d = s / e, o = (r.width || a) * d, c = (r.height || a) * d, l = r.x == null ? t.length / 2 - o / 2 : r.x * d, h = r.y == null ? t.length / 2 - c / 2 : r.y * d;
    let f = null;
    if (r.excavate) {
      let m = Math.floor(l), g = Math.floor(h), x = Math.ceil(o + l - m), y = Math.ceil(c + h - g);
      f = {
        x: m,
        y: g,
        w: x,
        h: y
      };
    }
    return {
      x: l,
      y: h,
      h: c,
      w: o,
      excavation: f
    };
  }
  var Ji = function() {
    try {
      new Path2D().addPath(new Path2D());
    } catch {
      return false;
    }
    return true;
  }();
  function Ki(t) {
    const e = t, { value: n, size: r = Hi, level: i = Ui, bgColor: s = Vi, fgColor: a = Gi, includeMargin: d = Wi, style: o, imageSettings: c } = e, l = Ni(e, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "style",
      "imageSettings"
    ]), h = c == null ? void 0 : c.src, f = B.useRef(null), m = B.useRef(null), [g, x] = B.useState(false);
    B.useEffect(() => {
      if (f.current != null) {
        const I = f.current, k = I.getContext("2d");
        if (!k) return;
        let w = se.QrCode.encodeText(n, Fi[i]).getModules();
        const P = d ? Dn : 0, U = w.length + P * 2, V = Zi(w, r, d, c), X = m.current, fe = V != null && X !== null && X.complete && X.naturalHeight !== 0 && X.naturalWidth !== 0;
        fe && V.excavation != null && (w = Xi(w, V.excavation));
        const me = window.devicePixelRatio || 1;
        I.height = I.width = r * me;
        const ge = r / U * me;
        k.scale(ge, ge), k.fillStyle = s, k.fillRect(0, 0, U, U), k.fillStyle = a, Ji ? k.fill(new Path2D(Qi(w, P))) : w.forEach(function(Ie, Ae) {
          Ie.forEach(function(Le, De) {
            Le && k.fillRect(De + P, Ae + P, 1, 1);
          });
        }), fe && k.drawImage(X, V.x + P, V.y + P, V.w, V.h);
      }
    }), B.useEffect(() => {
      x(false);
    }, [
      h
    ]);
    const y = Pt({
      height: r,
      width: r
    }, o);
    let E = null;
    return h != null && (E = B.createElement("img", {
      src: h,
      key: h,
      style: {
        display: "none"
      },
      onLoad: () => {
        x(true);
      },
      ref: m
    })), B.createElement(B.Fragment, null, B.createElement("canvas", Pt({
      style: y,
      height: r,
      width: r,
      ref: f
    }, l)), E);
  }
  const qi = (t) => u.createElement("svg", {
    width: 23,
    height: 21,
    viewBox: "0 0 23 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M1.5 8V18.6918C1.5 19.5672 2.54527 20.0201 3.18394 19.4213L6.67303 16.1503C6.77602 16.0537 6.9119 16 7.05306 16H14C18.1421 16 21.5 12.6421 21.5 8.5C21.5 4.35786 18.1421 1 14 1H8.5C4.63401 1 1.5 4.13401 1.5 8Z",
    stroke: "#657795",
    strokeWidth: 1.6
  })), $i = ({ type: t = D.STANDALONE, overlay: e = F.NORMAL, blur: n = 0, width: r = "auto" }) => {
    const i = Y(), { account: s } = jt(), { pgpPvtKey: a, connectedPeerID: d, displayQR: o, setDisplayQR: c, createUserIfNecessary: l } = u.useContext(H), [h, f] = zi(), [m, g] = u.useState(""), [x, y] = u.useState(true), [E, I] = u.useState(""), k = () => {
      const P = lt.makeid(10), U = lt.encryptWithAES(a, P);
      g(JSON.stringify({
        aesSecret: P,
        peerId: f,
        account: s
      })), I(U), y(false);
    }, w = p.jsx(Ki, {
      id: "qrCode",
      value: m,
      style: {
        borderRadius: "19px"
      },
      size: 200,
      bgColor: "#fff",
      level: "H",
      includeMargin: true,
      imageSettings: {
        src: "./icon.jpg",
        height: 56,
        width: 56,
        excavate: false
      }
    });
    return u.useEffect(() => {
      f && (a || l(), k());
    }, [
      f
    ]), u.useEffect(() => {
      if (d.peerID) try {
        const P = h.connect(d.peerID);
        P.on("open", () => {
          P.send({
            encryptedPgpKey: E
          });
        });
      } catch (P) {
        console.error("got error", P);
      }
    }, [
      d.peerID
    ]), p.jsxs(R, {
      position: e == F.ONTOP ? "absolute" : "relative",
      alignSelf: e == F.ONTOP ? "stretch" : "center",
      flex: "initial",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "1000",
      padding: "15px",
      onClick: () => {
        c(!o);
      },
      children: [
        e === F.ONTOP && p.jsx(Je, {
          blur: n
        }),
        x ? p.jsx(pe, {
          type: D.SEAMLESS,
          spinnerSize: 60
        }) : p.jsx(p.Fragment, {
          children: a ? p.jsxs(eo, {
            flex: "initial",
            alignSelf: t == D.SEAMLESS ? "auto" : "center",
            padding: t == D.SEAMLESS ? "0px" : T.ADJUSTMENTS.PADDING.DEFAULT,
            borderRadius: t == D.SEAMLESS ? "0px" : T.ADJUSTMENTS.RADIUS.SMALL,
            border: t == D.SEAMLESS ? "transparent" : `1px solid ${i.default.border}`,
            background: i.chatQRbg,
            children: [
              p.jsx(oo, {
                children: p.jsx(so, {
                  onClick: () => {
                    c(!o);
                  },
                  style: {
                    color: i.default.secondaryColor
                  }
                })
              }),
              p.jsxs(co, {
                children: [
                  p.jsxs(to, {
                    children: [
                      p.jsx(no, {
                        children: "Set up Push Chat on your phone"
                      }),
                      p.jsxs(ro, {
                        children: [
                          p.jsx("p", {
                            children: "1. Open an app using Push protocol"
                          }),
                          p.jsxs("p", {
                            style: {
                              display: "flex"
                            },
                            children: [
                              "2. Tap Push Chat",
                              p.jsx(ao, {
                                src: qi
                              }),
                              "or Sign in with Push Chat"
                            ]
                          }),
                          p.jsx("p", {
                            children: "3. Tap Link Push Chat and point your phone to this code "
                          })
                        ]
                      }),
                      p.jsx("div", {
                        children: p.jsxs(io, {
                          children: [
                            p.jsx("span", {
                              style: {
                                color: "#E93636"
                              },
                              children: "Note: "
                            }),
                            "The QR code enables mobile app that supports Push Protocol to read and send messages. Only scan it with mobile apps you trust."
                          ]
                        })
                      })
                    ]
                  }),
                  p.jsx(A, {
                    children: w
                  })
                ]
              })
            ]
          }) : null
        })
      ]
    });
  }, eo = C(R)`
  width: 856px; //for larger sizes
  padding: 20px;

  //for smaller sizes < 768px
  @media ${S.tablet} {
    width: 95%;
  }

  //for critical sizes
  @media (min-width: 1200px) and (max-width: 1353px) {
    width: 87%;
  }

  // this one is for when chat and inbox are displayed and screen size is less
  @media (min-width: 769px) and (max-width: 992px) {
    width: 620px;
  }

  //this one is for when chat and sidebar are displayed together and screen size is very less for chat
  @media (min-width: 993px) and (max-width: 1199px) {
    width: 540px;
  }
`, to = C(A)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  width: 460px;

  @media (max-width: 1199px) {
    margin: 36px auto 0px auto;
  }

  @media (max-width: 1199px) {
    justify-content: center;
    align-items: center;
  }
`, no = C.div`
  font-size: 28px;
  text-align: left;
  color: ${(t) => t.theme.default.color};
  @media (max-width: 1199px) {
    padding-right: 40px;
  }
`, ro = C.div`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #657795;
  margin: 10px 0px 0px 0px;
  padding-left: 7px;
`, io = C.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #657795;
`, oo = C.div`
  width: 100%;
  text-align: end;
  text-align: end;

  @media (max-width: 1199px) {
    margin-bottom: 30px;
  }
`, so = C(zt)`
  cursor: pointer;
  font-size: 20px;
`, ao = C.img`
  height: 18px;
  margin: 0px 5px;
`, co = C(R)`
  flex-direction: column-reverse;
  padding: 0px;

  @media (min-width: 1200px) and (max-width: 1300px) {
    flex-direction: row;
    padding: 35px 20px 50px 10px;
  }

  @media (min-width: 1300px) {
    flex-direction: row;
    padding: 35px 30px 50px 30px;
  }

  @media (max-width: 964px) {
    flex-direction: column-reverse;
  }
`, lo = (t) => u.createElement("svg", {
    width: 252,
    height: 252,
    viewBox: "0 0 252 252",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M0 126C0 56.4121 56.4121 0 126 0C195.588 0 252 56.4121 252 126V252H0V126Z",
    fill: "url(#paint0_linear_6814_10102)"
  }), u.createElement("g", {
    filter: "url(#filter0_b_6814_10102)"
  }, u.createElement("rect", {
    x: 25.2095,
    y: 74,
    width: 206.647,
    height: 137.186,
    rx: 12.1557,
    fill: "white",
    fillOpacity: 0.2
  }), u.createElement("rect", {
    x: 25.7095,
    y: 74.5,
    width: 205.647,
    height: 136.186,
    rx: 11.6557,
    stroke: "#EAA7D7"
  })), u.createElement("rect", {
    x: 66.8862,
    y: 79.2096,
    width: 159.76,
    height: 127.635,
    rx: 8.68263,
    fill: "white"
  }), u.createElement("rect", {
    x: 75.2007,
    y: 155.249,
    width: 91.0359,
    height: 22.4431,
    rx: 5.36078,
    fill: "white"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M83.4918 163.051C83.7615 163.051 83.9802 163.269 83.9802 163.537V163.542C83.9802 163.81 83.7615 164.028 83.4918 164.028C83.2221 164.028 83.0034 163.81 83.0034 163.542V163.537C83.0034 163.269 83.2221 163.051 83.4918 163.051Z",
    fill: "#494D5F"
  }), u.createElement("rect", {
    x: 81.5382,
    y: 161.586,
    width: 3.90719,
    height: 3.90719,
    rx: 0.488398,
    stroke: "#494D5F",
    strokeWidth: 0.976796
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M89.3527 163.051C89.6224 163.051 89.8411 163.269 89.8411 163.537V163.542C89.8411 163.81 89.6224 164.028 89.3527 164.028C89.0829 164.028 88.8643 163.81 88.8643 163.542V163.537C88.8643 163.269 89.0829 163.051 89.3527 163.051Z",
    fill: "#494D5F"
  }), u.createElement("rect", {
    x: 87.399,
    y: 161.586,
    width: 3.90719,
    height: 3.90719,
    rx: 0.488398,
    stroke: "#494D5F",
    strokeWidth: 0.976796
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M83.4918 168.912C83.7615 168.912 83.9802 169.13 83.9802 169.398V169.403C83.9802 169.671 83.7615 169.889 83.4918 169.889C83.2221 169.889 83.0034 169.671 83.0034 169.403V169.398C83.0034 169.13 83.2221 168.912 83.4918 168.912Z",
    fill: "#494D5F"
  }), u.createElement("rect", {
    x: 81.5382,
    y: 167.447,
    width: 3.90719,
    height: 3.90719,
    rx: 0.488398,
    stroke: "#494D5F",
    strokeWidth: 0.976796
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M86.9106 171.354C86.9106 171.084 87.173 170.866 87.4967 170.866H89.255C89.5786 170.866 89.841 171.084 89.841 171.354C89.841 171.624 89.5786 171.843 89.255 171.843H87.4967C87.173 171.843 86.9106 171.624 86.9106 171.354Z",
    fill: "#494D5F"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M86.9106 167.447C86.9106 167.177 87.173 166.958 87.4967 166.958H89.255C89.5786 166.958 89.841 167.177 89.841 167.447C89.841 167.717 89.5786 167.935 89.255 167.935H87.4967C87.173 167.935 86.9106 167.717 86.9106 167.447Z",
    fill: "#494D5F"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M87.3988 169.889C87.6686 169.889 87.8872 169.627 87.8872 169.303V167.545C87.8872 167.221 87.6686 166.959 87.3988 166.959C87.1291 166.959 86.9104 167.221 86.9104 167.545V169.303C86.9104 169.627 87.1291 169.889 87.3988 169.889Z",
    fill: "#494D5F"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M91.7944 169.401C91.7944 169.131 91.532 168.912 91.2084 168.912H89.4501C89.1264 168.912 88.864 169.131 88.864 169.401C88.864 169.67 89.1264 169.889 89.4501 169.889H91.2084C91.532 169.889 91.7944 169.67 91.7944 169.401Z",
    fill: "#494D5F"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M91.3063 171.843C91.0365 171.843 90.8179 171.58 90.8179 171.256V169.498C90.8179 169.175 91.0365 168.912 91.3063 168.912C91.576 168.912 91.7947 169.175 91.7947 169.498V171.256C91.7947 171.58 91.576 171.843 91.3063 171.843Z",
    fill: "#494D5F"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M91.3063 166.958C91.576 166.958 91.7947 167.176 91.7947 167.444V167.449C91.7947 167.718 91.576 167.935 91.3063 167.935C91.0365 167.935 90.8179 167.718 90.8179 167.449V167.444C90.8179 167.176 91.0365 166.958 91.3063 166.958Z",
    fill: "#494D5F"
  }), u.createElement("path", {
    d: "M102.798 168.97V168.407H100.242V163.5H99.6564V168.97H102.798ZM103.932 164.524C104.166 164.524 104.354 164.344 104.354 164.109C104.354 163.875 104.166 163.687 103.932 163.687C103.705 163.687 103.518 163.875 103.518 164.109C103.518 164.344 103.705 164.524 103.932 164.524ZM104.205 168.97V165.454H103.658V168.97H104.205ZM106.014 168.97V166.993C106.014 166.329 106.444 165.899 107.014 165.899C107.577 165.899 107.952 166.282 107.952 166.884V168.97H108.499V166.766C108.499 165.977 107.96 165.368 107.108 165.368C106.483 165.368 106.092 165.719 105.967 165.969V165.454H105.467V168.97H106.014ZM110.89 166.993L112.625 165.454H111.827L110.257 166.876V163.5H109.71V168.97H110.257V167.134L112.015 168.97H112.796L110.89 166.993ZM118.678 169.087L120.881 164.711V168.97H121.452V163.5H120.881L118.67 167.899L116.458 163.5H115.888V168.97H116.458V164.711L118.67 169.087H118.678ZM124.522 169.056C125.553 169.056 126.382 168.29 126.382 167.22C126.382 166.141 125.553 165.368 124.522 165.368C123.498 165.368 122.662 166.141 122.662 167.22C122.662 168.29 123.498 169.056 124.522 169.056ZM124.522 168.509C123.803 168.509 123.248 167.97 123.248 167.22C123.248 166.462 123.803 165.915 124.522 165.915C125.233 165.915 125.796 166.462 125.796 167.22C125.796 167.97 125.233 168.509 124.522 168.509ZM129.22 165.368C128.72 165.368 128.266 165.579 127.946 165.938V163.5H127.399V168.97H127.946V168.493C128.266 168.845 128.72 169.056 129.22 169.056C130.243 169.056 131.08 168.29 131.08 167.22C131.08 166.141 130.243 165.368 129.22 165.368ZM129.22 168.509C128.509 168.509 127.946 167.97 127.946 167.22C127.946 166.462 128.509 165.915 129.22 165.915C129.939 165.915 130.493 166.462 130.493 167.22C130.493 167.97 129.939 168.509 129.22 168.509ZM132.366 164.524C132.6 164.524 132.788 164.344 132.788 164.109C132.788 163.875 132.6 163.687 132.366 163.687C132.139 163.687 131.952 163.875 131.952 164.109C131.952 164.344 132.139 164.524 132.366 164.524ZM132.639 168.97V165.454H132.092V168.97H132.639ZM135.081 169.025V168.493C134.659 168.493 134.409 168.251 134.409 167.806V163.5H133.862V167.806C133.862 168.611 134.299 169.025 135.034 169.025H135.081ZM137.541 169.056C138.221 169.056 138.823 168.712 139.143 168.157L138.698 167.868C138.463 168.267 138.018 168.509 137.541 168.509C136.971 168.509 136.361 168.11 136.267 167.391H139.284C139.424 166.258 138.588 165.368 137.502 165.368C136.408 165.368 135.673 166.219 135.673 167.212C135.673 168.212 136.478 169.056 137.541 169.056ZM136.291 166.884C136.416 166.329 136.845 165.907 137.502 165.907C138.182 165.907 138.643 166.399 138.682 166.884H136.291ZM146.925 168.97L144.706 163.5H144.205L141.963 168.97H142.596L143.088 167.743H145.8L146.292 168.97H146.925ZM144.448 164.367L145.581 167.196H143.307L144.448 164.367ZM149.488 165.368C148.988 165.368 148.535 165.579 148.214 165.938V165.454H147.667V170.775H148.214V168.493C148.535 168.845 148.988 169.056 149.488 169.056C150.512 169.056 151.348 168.29 151.348 167.22C151.348 166.141 150.512 165.368 149.488 165.368ZM149.488 168.509C148.777 168.509 148.214 167.97 148.214 167.22C148.214 166.462 148.777 165.915 149.488 165.915C150.207 165.915 150.762 166.462 150.762 167.22C150.762 167.97 150.207 168.509 149.488 168.509ZM154.181 165.368C153.681 165.368 153.228 165.579 152.908 165.938V165.454H152.361V170.775H152.908V168.493C153.228 168.845 153.681 169.056 154.181 169.056C155.205 169.056 156.041 168.29 156.041 167.22C156.041 166.141 155.205 165.368 154.181 165.368ZM154.181 168.509C153.47 168.509 152.908 167.97 152.908 167.22C152.908 166.462 153.47 165.915 154.181 165.915C154.9 165.915 155.455 166.462 155.455 167.22C155.455 167.97 154.9 168.509 154.181 168.509Z",
    fill: "#657795"
  }), u.createElement("rect", {
    x: 75.2007,
    y: 155.249,
    width: 91.0359,
    height: 22.4431,
    rx: 5.36078,
    stroke: "#D53893"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 91.3652,
    width: 18.2335,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 75,
    y: 91,
    width: 34,
    height: 3,
    rx: 1.5,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 128,
    y: 91,
    width: 86,
    height: 3,
    rx: 1.5,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 102.653,
    width: 25.1796,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 177.323,
    width: 17.3653,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 187.742,
    width: 17.3653,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 156.485,
    width: 25.1796,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 88.5928,
    y: 191.216,
    width: 19.1018,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 166.904,
    width: 22.5749,
    height: 2.60479,
    rx: 1.3024,
    fill: "#D1D2DD"
  }), u.createElement("rect", {
    x: 34.7603,
    y: 113.94,
    width: 25.1796,
    height: 2.60479,
    rx: 1.3024,
    fill: "#DD44B9"
  }), u.createElement("circle", {
    cx: 79.4761,
    cy: 192.518,
    r: 4.77545,
    fill: "#D1D1DD"
  }), u.createElement("path", {
    d: "M115.825 187.634C116.446 187.634 116.949 187.1 116.949 186.44C116.949 185.781 116.446 185.246 115.825 185.246C115.203 185.246 114.7 185.781 114.7 186.44C114.7 187.1 115.203 187.634 115.825 187.634Z",
    fill: "#DD44B9"
  }), u.createElement("path", {
    d: "M115.825 192.409C116.446 192.409 116.949 191.875 116.949 191.216C116.949 190.556 116.446 190.022 115.825 190.022C115.203 190.022 114.7 190.556 114.7 191.216C114.7 191.875 115.203 192.409 115.825 192.409Z",
    fill: "#DD44B9"
  }), u.createElement("path", {
    d: "M115.825 197.185C116.446 197.185 116.949 196.65 116.949 195.991C116.949 195.332 116.446 194.797 115.825 194.797C115.203 194.797 114.7 195.332 114.7 195.991C114.7 196.65 115.203 197.185 115.825 197.185Z",
    fill: "#DD44B9"
  }), u.createElement("path", {
    d: "M138.434 102C138.434 101.687 138.687 101.434 139 101.434H167.599C170.673 101.434 173.165 103.926 173.165 107C173.165 110.074 170.673 112.566 167.599 112.566H145C141.374 112.566 138.434 109.626 138.434 106V102Z",
    stroke: "#D1D1DD",
    strokeWidth: 0.868263
  }), u.createElement("path", {
    d: "M212.566 114C212.566 113.687 212.313 113.434 212 113.434H188C184.926 113.434 182.434 115.926 182.434 119C182.434 122.074 184.926 124.566 188 124.566H206C209.626 124.566 212.566 121.626 212.566 118V114Z",
    stroke: "#D1D1DD",
    strokeWidth: 0.868263
  }), u.createElement("path", {
    d: "M138.434 140C138.434 136.926 140.926 134.434 144 134.434H156C156.313 134.434 156.566 134.687 156.566 135V139C156.566 142.626 153.626 145.566 150 145.566H144C140.926 145.566 138.434 143.074 138.434 140Z",
    stroke: "#D1D1DD",
    strokeWidth: 0.868263
  }), u.createElement("path", {
    d: "M172.434 134C172.434 130.926 174.926 128.434 178 128.434H212.491C212.804 128.434 213.057 128.687 213.057 129V133C213.057 136.626 210.117 139.566 206.491 139.566H178C174.926 139.566 172.434 137.074 172.434 134Z",
    stroke: "#D1D1DD",
    strokeWidth: 0.868263
  }), u.createElement("path", {
    d: "M20.5 214.659C20.5 212.537 22.2198 210.817 24.3413 210.817H233.593C235.714 210.817 237.434 212.537 237.434 214.659C237.434 216.78 235.714 218.5 233.593 218.5H24.3413C22.2198 218.5 20.5 216.78 20.5 214.659Z",
    fill: "white",
    stroke: "#EAA7D7"
  }), u.createElement("path", {
    d: "M147.102 210.817C146.857 212.703 145.245 214.159 143.293 214.159H114.641C112.689 214.159 111.077 212.703 110.832 210.817H147.102Z",
    fill: "white",
    stroke: "#EAA7D7"
  }), u.createElement("defs", null, u.createElement("filter", {
    id: "filter0_b_6814_10102",
    x: 10.2095,
    y: 59,
    width: 236.646,
    height: 167.186,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, u.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), u.createElement("feGaussianBlur", {
    in: "BackgroundImageFix",
    stdDeviation: 7.5
  }), u.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_6814_10102"
  }), u.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_6814_10102",
    result: "shape"
  })), u.createElement("linearGradient", {
    id: "paint0_linear_6814_10102",
    x1: 150.521,
    y1: 24.251,
    x2: 150.964,
    y2: 178.999,
    gradientUnits: "userSpaceOnUse"
  }, u.createElement("stop", {
    stopColor: "#F4A8E4"
  }), u.createElement("stop", {
    offset: 1,
    stopColor: "#F4A8E4",
    stopOpacity: 0
  })))), ho = ({ type: t = D.STANDALONE, overlay: e = F.NORMAL, blur: n = 0 }) => {
    const { displayQR: r, setDisplayQR: i } = u.useContext(H), s = Y();
    return p.jsxs(R, {
      position: e == F.ONTOP ? "absolute" : "relative",
      alignSelf: e == F.ONTOP ? "stretch" : "center",
      flex: "initial",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "1000",
      padding: "15px",
      onClick: () => {
        i(!r);
      },
      children: [
        e === F.ONTOP && p.jsx(Je, {
          blur: n
        }),
        p.jsxs(po, {
          flex: "initial",
          alignSelf: t == D.SEAMLESS ? "auto" : "center",
          padding: t == D.SEAMLESS ? "0px" : T.ADJUSTMENTS.PADDING.DEFAULT,
          borderRadius: t == D.SEAMLESS ? "0px" : T.ADJUSTMENTS.RADIUS.SMALL,
          border: t == D.SEAMLESS ? "transparent" : `1px solid ${s.default.border}`,
          background: s.chatQRbg,
          children: [
            p.jsx(uo, {
              children: p.jsx(fo, {
                onClick: () => {
                  i(!r);
                },
                style: {
                  color: s.default.color
                }
              })
            }),
            p.jsx(mo, {
              src: lo
            }),
            p.jsxs(go, {
              children: [
                p.jsx(Co, {
                  children: "Open Push Chat on your Computer"
                }),
                p.jsxs(xo, {
                  children: [
                    p.jsx(je, {
                      children: "Go to app.push.org on your computer"
                    }),
                    p.jsxs(je, {
                      children: [
                        "Open Push Chat and click on",
                        p.jsx(vo, {
                          style: {
                            color: s.default.color
                          }
                        }),
                        "next to your user profile"
                      ]
                    }),
                    p.jsx(je, {
                      style: {
                        marginTop: "5px"
                      },
                      children: "Click on Link Mobile App and scan the code"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }, po = C(R)`
  width: 75%;
  padding: 10px 7px 20px 20px;
  @media ${S.tablet} {
    width: 95%;
  }

  @media (min-width: 1200px) and (max-width: 1353px) {
    width: 87%;
  }

  @media (min-width: 866px) and (max-width: 992px) {
    width: 65%;
  }
`, uo = C.div`
  width: 100%;
  text-align: end;
  text-align: end;
  padding-right: 10px;

  @media (max-width: 1199px) {
    margin-bottom: 20px;
  }
`, fo = C(zt)`
  cursor: pointer;
  font-size: 20px;
`, mo = C.img``, go = C(R)`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  line-height: 140%;
`, Co = C.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(t) => t.theme.default.color};
`, xo = C.ol``, je = C.li`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: #657795;
`, vo = C(ir)`
  position: relative;
  width: 20.73px;
  height: 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  position: relative;
  top: 7px;
`, yo = ({ onClose: t }) => {
    const e = Y(), n = () => t(), r = u.useRef(null);
    return or(r, () => n()), p.jsx(sr, {
      theme: e,
      children: p.jsx(bo, {
        children: p.jsx(ar, {
          onClose: () => n()
        })
      })
    });
  }, bo = C.div`
  max-height: 78vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${(t) => t.background};
  padding: ${(t) => t.createGroupState == 2 ? "32px 36px" : "32px 17px"};
  margin: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  & > div::-webkit-scrollbar {
    width: 4px;
  }
  & > div::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
  @media ${S.mobileL} {
    max-height: 80vh;
    min-width: 93vw;
    max-width: 95vw;
    padding: ${(t) => t.createGroupState == 2 ? "32px 24px" : "32px 0px"};
  }
`, So = [
    {
      id: 1,
      image: "IntroChat",
      heading: "Message any wallet",
      subHeading: "Chat, react, share and connect with your web3 friends."
    },
    {
      id: 2,
      image: "CommunityGroup",
      heading: "Discover Communities",
      subHeading: "Explore your favorite communities and chat with other members."
    },
    {
      id: 3,
      image: "TokenGated",
      heading: "Create Token Gated Groups",
      subHeading: "Create your own gated groups and kickstart vibrant communities."
    }
  ], Eo = (t) => u.createElement("svg", {
    width: 33,
    height: 33,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ...t
  }, u.createElement("rect", {
    x: 0.5,
    y: 0.167969,
    width: 32,
    height: 32,
    fill: "url(#pattern0_24189_2924)"
  }), u.createElement("defs", null, u.createElement("pattern", {
    id: "pattern0_24189_2924",
    patternContentUnits: "objectBoundingBox",
    width: 1,
    height: 1
  }, u.createElement("use", {
    xlinkHref: "#image0_24189_2924",
    transform: "scale(0.00625)"
  })), u.createElement("image", {
    id: "image0_24189_2924",
    width: 160,
    height: 160,
    xlinkHref: "data:image/png;base64,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"
  }))), Ro = "/push-dapp/pr-preview/pr-2012/assets/CommunityGroup-DqTT_rU_.svg", ko = "data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='chat%201'%20clip-path='url(%23clip0_23910_28340)'%3e%3cg%20id='Group'%3e%3cg%20id='Group_2'%3e%3cpath%20id='Vector'%20d='M17.0714%206.09595H6.78494C6.31176%206.09595%205.92773%206.47998%205.92773%206.95315C5.92773%207.42633%206.31176%207.81036%206.78494%207.81036H17.0714C17.5446%207.81036%2017.9286%207.42633%2017.9286%206.95315C17.9286%206.47998%2017.5446%206.09595%2017.0714%206.09595Z'%20fill='%23D53A94'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Group_3'%3e%3cg%20id='Group_4'%3e%3cpath%20id='Vector_2'%20d='M13.6426%209.52478H6.78494C6.31176%209.52478%205.92773%209.90881%205.92773%2010.382C5.92773%2010.8552%206.31176%2011.2392%206.78494%2011.2392H13.6426C14.1158%2011.2392%2014.4998%2010.8552%2014.4998%2010.382C14.4998%209.90881%2014.1158%209.52478%2013.6426%209.52478Z'%20fill='%23D53A94'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Group_5'%3e%3cg%20id='Group_6'%3e%3cpath%20id='Vector_3'%20d='M19.6398%200.952759H4.21008C2.31908%200.952759%200.78125%202.49059%200.78125%204.38158V21.5257C0.78125%2021.8583%200.973264%2022.1618%201.275%2022.3023C1.38987%2022.3555%201.51502%2022.3829%201.63846%2022.3829C1.83561%2022.3829%202.03106%2022.3143%202.18707%2022.184L7.092%2018.0969H19.6398C21.5308%2018.0969%2023.0686%2016.5591%2023.0686%2014.6681V4.38158C23.0686%202.49059%2021.5308%200.952759%2019.6398%200.952759ZM21.3542%2014.6681C21.3542%2015.6127%2020.5861%2016.3825%2019.6398%2016.3825H6.78169C6.58111%2016.3825%206.38738%2016.4528%206.23308%2016.5813L2.49566%2019.6964V4.38158C2.49566%203.43694%203.26372%202.66717%204.21008%202.66717H19.6398C20.5861%202.66717%2021.3542%203.43694%2021.3542%204.38158V14.6681Z'%20fill='%23D53A94'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Group_7'%3e%3cg%20id='Group_8'%3e%3cpath%20id='Vector_4'%20d='M24.7848%207.81055C24.3116%207.81055%2023.9275%208.19458%2023.9275%208.66775C23.9275%209.14093%2024.3116%209.52496%2024.7848%209.52496C25.7311%209.52496%2026.4992%2010.2947%2026.4992%2011.2394V25.7416L23.6052%2023.4271C23.4544%2023.3071%2023.2641%2023.2403%2023.0703%2023.2403H11.0695C10.1231%2023.2403%209.35504%2022.4705%209.35504%2021.5258V20.6686C9.35504%2020.1955%208.97101%2019.8114%208.49783%2019.8114C8.02465%2019.8114%207.64062%2020.1955%207.64062%2020.6686V21.5258C7.64062%2023.4168%209.17845%2024.9547%2011.0695%2024.9547H22.7686L26.8198%2028.1966C26.9758%2028.3201%2027.1661%2028.3835%2027.3564%2028.3835C27.4815%2028.3835%2027.6084%2028.3561%2027.7284%2028.2995C28.025%2028.1555%2028.2136%2027.8555%2028.2136%2027.5263V11.2394C28.2136%209.34837%2026.6757%207.81055%2024.7848%207.81055Z'%20fill='%23D53A94'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_23910_28340'%3e%3crect%20width='27.4306'%20height='27.4306'%20fill='white'%20transform='translate(0.785156%200.952759)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Po = "data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='token-gated'%3e%3cpath%20id='Vector'%20d='M7.30762%207.05693C5.48953%208.87501%204.25141%2011.1914%203.7498%2013.7131C3.24819%2016.2349%203.50563%2018.8488%204.48957%2021.2242C5.47351%2023.5996%207.13975%2025.63%209.27759%2027.0584C11.4154%2028.4869%2013.9288%2029.2493%2016.5%2029.2493C19.0712%2029.2493%2021.5846%2028.4869%2023.7224%2027.0584C25.8603%2025.63%2027.5265%2023.5996%2028.5104%2021.2242C29.4944%2018.8488%2029.7518%2016.2349%2029.2502%2013.7131C28.7486%2011.1914%2027.5105%208.87501%2025.6924%207.05693C23.2526%204.62232%2019.9467%203.255%2016.5%203.255C13.0533%203.255%209.74737%204.62232%207.30762%207.05693ZM24.2782%2024.0275C22.7398%2025.5659%2020.7798%2026.6135%2018.646%2027.038C16.5122%2027.4624%2014.3005%2027.2446%2012.2905%2026.412C10.2805%2025.5794%208.56254%2024.1695%207.35384%2022.3606C6.14514%2020.5517%205.50001%2018.4249%205.50001%2016.2493C5.50001%2014.0737%206.14514%2011.947%207.35384%2010.138C8.56254%208.32911%2010.2805%206.91921%2012.2905%206.08664C14.3005%205.25408%2016.5122%205.03624%2018.646%205.46068C20.7798%205.88512%2022.7398%206.93277%2024.2782%208.47115C26.338%2010.5357%2027.4948%2013.333%2027.4948%2016.2493C27.4948%2019.1657%2026.338%2021.963%2024.2782%2024.0275ZM15.7929%2011.2996L11.5503%2015.5422C11.3627%2015.7297%2011.2574%2015.9841%2011.2574%2016.2493C11.2574%2016.5145%2011.3627%2016.7689%2011.5503%2016.9564L15.7929%2021.1991C15.9804%2021.3866%2016.2348%2021.492%2016.5%2021.492C16.7652%2021.492%2017.0196%2021.3866%2017.2071%2021.1991L21.4498%2016.9564C21.6373%2016.7689%2021.7426%2016.5145%2021.7426%2016.2493C21.7426%2015.9841%2021.6373%2015.7297%2021.4498%2015.5422L17.2071%2011.2996C17.0196%2011.112%2016.7652%2011.0067%2016.5%2011.0067C16.2348%2011.0067%2015.9804%2011.112%2015.7929%2011.2996ZM19.3284%2016.2493L16.5%2019.0777L13.6716%2016.2493L16.5%2013.4209L19.3284%2016.2493Z'%20fill='%23D53A94'/%3e%3c/g%3e%3c/svg%3e", wo = {
    CommunityGroup: Ro,
    IntroChat: ko,
    TokenGated: Po
  }, To = () => {
    const t = Y();
    return p.jsxs(Mo, {
      children: [
        p.jsxs(A, {
          gap: "5px",
          children: [
            p.jsx(wt, {
              children: "Say"
            }),
            p.jsx(Eo, {
              size: "32px"
            }),
            p.jsx(wt, {
              children: "to Push Chat!"
            })
          ]
        }),
        p.jsx(R, {
          gap: "24px",
          children: So.map((e) => p.jsxs(A, {
            gap: "12px",
            children: [
              p.jsx(Q, {
                src: wo[e.image],
                alt: "wave",
                display: "inline",
                width: "auto",
                verticalAlign: "middle"
              }),
              p.jsxs(R, {
                alignItems: "baseline",
                children: [
                  p.jsx(_, {
                    fontSize: "17px",
                    color: t.default.color,
                    fontWeight: "500",
                    lineHeight: "22px",
                    children: e.heading
                  }),
                  p.jsx(_, {
                    fontSize: "15px",
                    color: t.default.secondaryColor,
                    fontWeight: "400",
                    lineHeight: "19px",
                    textAlign: "left",
                    children: e.subHeading
                  })
                ]
              })
            ]
          }, e.id))
        })
      ]
    });
  }, Mo = C(R)`
  background: ${(t) => t.theme.chat.modulesBg || "transparent"};
  padding: 24px;
  gap: 24px;
  flex: none;
  border-radius: 4px 24px 24px 24px;
`, wt = C(_)`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${(t) => t.theme.default.color};
  letter-spacing: normal;
  line-height: 141%;
`, Io = ({ bg: t, onChatSelected: e }) => {
    const [n, r] = u.useState(""), i = (s) => {
      let a;
      for (let d = 0; d < oe.length; d++) oe[d].payload.chatParticipant === s && (a = oe[d].chatParticipantAlias);
      return a;
    };
    return p.jsx(Ao, {
      bg: t,
      children: oe.map((s, a) => p.jsx(cr, {
        chatPreviewPayload: s.payload,
        selected: s.payload.chatId === n,
        setSelected: (d, o) => {
          const c = i(o);
          r(d), e(d, c);
        }
      }, a))
    });
  }, Ao = C(R)`
  flex: initial;
  flex-wrap: nowrap;
  background: ${(t) => t.bg || "transparent"};
  border-radius: 24px;
  padding: 10px;

  &:before {
    content: 'RECOMMENDED';
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: normal;
    color: #657795;
    display: flex;
    align-self: flex-start;
    padding: 5px 10px 0px 10px;
  }
`, Lo = ({ recommendedBg: t, onChatSelected: e }) => {
    const [n, r] = u.useState(false), i = u.useRef(null);
    return u.useEffect(() => {
      const s = () => {
        const a = i.current;
        a && r(a.scrollHeight > a.clientHeight);
      };
      return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
    }, []), p.jsxs(Do, {
      ref: i,
      style: {
        justifyContent: n ? "flex-start" : "center"
      },
      children: [
        p.jsx(_o, {
          children: p.jsx(To, {})
        }),
        p.jsx(Io, {
          bg: t,
          onChatSelected: e
        })
      ]
    });
  }, Do = C(R)`
  padding: 24px;
  gap: 24px;
  height: inherit;
  width: 100%;

  flex-flow: column;

  overflow: auto;
  max-width: 400px;
  align-self: center;
  align-items: center;
`, _o = C(R)`
  flex: initial;

  @media ${S.tablet} {
    display: none;
  }
`, Oo = (t) => u.createElement("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    style: {
      enableBackground: "new 0 0 32 32"
    },
    xmlSpace: "preserve",
    ...t
  }, u.createElement("style", {
    type: "text/css"
  }, `
	.st0{fill:none;stroke:#657795;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
`), u.createElement("path", {
    className: "st0",
    d: "M20.5,7l-9,9l9,9"
  })), jo = ({ chatId: t, setChatId: e, loggedIn: n }) => {
    const r = Bt(), { userPushSDKInstance: i } = Nt((h) => h.user), { setNewChatsCount: s, newChatsCount: a } = u.useContext(H), d = Y(), o = lr(S.tablet), [c, l] = u.useState(true);
    return u.useEffect(() => {
      s(0);
    }, [
      a
    ]), p.jsx(R, {
      alignItems: "stretch",
      alignSelf: "stretch",
      height: "100%",
      width: "100%",
      children: p.jsxs(A, {
        alignItems: "stretch",
        alignSelf: "stretch",
        height: "100%",
        width: "100%",
        children: [
          t && p.jsxs(zo, {
            children: [
              p.jsx(dr, {
                chatId: t,
                limit: 10,
                isConnected: false,
                handleReply: true,
                autoConnect: false,
                messageInput: !!n,
                verificationFailModalPosition: hr.RELATIVE,
                chatProfileLeftHelperComponent: o ? p.jsx(No, {
                  flex: "initial",
                  alignItems: "flex-start",
                  padding: "0px",
                  children: p.jsx(Oo, {
                    onClick: () => {
                      r("/chat");
                    }
                  })
                }) : null
              }),
              i && (i == null ? void 0 : i.readmode()) && t && p.jsx(pt, {
                type: ut.MODAL,
                showConnectModal: c,
                onClose: () => l(false),
                modalType: "container",
                description: "Unlock your profile to proceed."
              })
            ]
          }, t),
          (i && (i == null ? void 0 : i.readmode()) || !t) && p.jsxs(Bo, {
            bg: t ? "transparent" : d.chat.chatBg,
            sidelined: !!t,
            children: [
              p.jsx(Lo, {
                recommendedBg: d.chat.modulesBg,
                onChatSelected: (h) => {
                  e(h);
                }
              }),
              i && (i == null ? void 0 : i.readmode()) && !t && p.jsx(pt, {
                type: ut.BOTTOM_BAR
              })
            ]
          })
        ]
      })
    });
  }, zo = C(R)`
  flex: 4;
  height: inherit;
  max-width: 100%;
  width: auto;
  overflow: hidden;
`, Bo = C(R)`
  flex: 1;
  height: inherit;
  background: ${(t) => t.bg || "transparent"};
  border-radius: 24px;
  width: 100%;

  @media ${S.laptopL} {
    display: ${(t) => t.sidelined ? "none" : "flex"};
  }
`, No = C(R)`
  display: none;

  @media ${S.tablet} {
    width: 25px;
    display: flex;
  }
`, Fo = (t) => u.createElement("svg", {
    width: 56,
    height: 50,
    viewBox: "0 0 56 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("g", {
    id: "Group 4363"
  }, u.createElement("g", {
    id: "Group 4327"
  }, u.createElement("path", {
    id: "Vector 2",
    d: "M55.5598 9.63382C55.7179 10.2266 55.8319 10.8376 55.8981 11.4629L55.4008 11.5154C55.4472 11.9542 55.4691 12.4005 55.4649 12.8529L55.4503 14.4173L55.9502 14.422L55.9308 16.5079L55.4308 16.5032L55.4016 19.632L55.9016 19.6367L55.8822 21.7225L55.3822 21.7178L55.353 24.8466L55.853 24.8513L55.8335 26.9371L55.3336 26.9324L55.3044 30.0612L55.8044 30.0659L55.7849 32.1518L55.2849 32.1471L55.2704 33.7115C55.2665 34.1273 55.1221 34.4733 54.8998 34.7357L55.2813 35.059C54.8565 35.5603 54.2088 35.8385 53.5573 35.8001L53.5867 35.3009C53.2455 35.2808 52.8992 35.1453 52.6013 34.8575L51.6635 33.9514L51.3161 34.311L50.0657 33.1029L50.4131 32.7433L48.5374 30.9312L48.19 31.2907L46.9396 30.0826L47.287 29.7231L46.3492 28.817C46.1857 28.6591 45.9678 28.5691 45.7396 28.5669L44.4217 28.5543L44.4169 29.0543L42.6597 29.0375L42.6644 28.5376L40.0286 28.5124L40.0239 29.0124L38.2666 28.9956L38.2714 28.4957L35.6355 28.4705L35.6308 28.9705L33.8736 28.9538L33.8783 28.4538L32.5604 28.4412C32.0218 28.4361 31.4911 28.399 30.9701 28.3319L30.9062 28.8278C30.1682 28.7327 29.4484 28.5794 28.7514 28.3727L28.8936 27.8933C27.8643 27.588 26.8864 27.1616 25.9758 26.6303L25.7238 27.0622C25.0874 26.6909 24.4828 26.2703 23.915 25.8056L24.2317 25.4187C23.4093 24.7457 22.667 23.9767 22.0214 23.1286L21.6236 23.4315C21.1799 22.8487 20.7803 22.23 20.4298 21.5805L20.8698 21.343C20.3698 20.4166 19.9732 19.4253 19.6957 18.385L19.2126 18.5138C19.0253 17.8119 18.8903 17.0884 18.812 16.3481L19.3093 16.2955C19.2539 15.7725 19.2279 15.2405 19.233 14.7013C19.238 14.1621 19.2739 13.6308 19.339 13.1089L18.8428 13.047C18.9349 12.3083 19.0833 11.5876 19.2836 10.8893L19.7643 11.0273C20.0611 9.99244 20.4761 9.00883 20.9932 8.09211L20.5577 7.8464C20.9204 7.20366 21.3314 6.59265 21.7859 6.01843L22.178 6.32874C22.8393 5.49314 23.5958 4.73836 24.4306 4.08112L24.1213 3.68826C24.6977 3.23448 25.31 2.82548 25.9533 2.46638L26.1971 2.90297C27.1174 2.3892 28.1031 1.98152 29.1379 1.69588L29.0049 1.21391C29.7056 1.0205 30.4281 0.880987 31.1677 0.800008L31.2221 1.29704C31.7443 1.23986 32.2756 1.21294 32.8141 1.21808L34.5349 1.23449L34.5397 0.73451L36.8341 0.75639L36.8294 1.25637L40.271 1.28919L40.2758 0.789211L42.5702 0.811091L42.5655 1.31107L44.2863 1.32748C44.7381 1.33179 45.1832 1.36287 45.6202 1.41917L45.684 0.923269C46.3073 1.00357 46.9152 1.13302 47.5038 1.30763L47.3617 1.78698C48.2249 2.04305 49.0451 2.40068 49.8088 2.84625L50.0608 2.41438C50.5983 2.72795 51.1089 3.08316 51.5884 3.47559L51.2717 3.86252C51.9615 4.42706 52.5842 5.07215 53.1258 5.78353L53.5236 5.48067C53.8983 5.97284 54.2358 6.49536 54.5318 7.0439L54.0918 7.28135C54.5112 8.05847 54.8439 8.89004 55.0767 9.76267L55.5598 9.63382Z",
    fill: "white",
    fillOpacity: 0.1,
    stroke: "#CCCCCC",
    strokeDasharray: "3 2"
  })), u.createElement("g", {
    id: "Group 4326"
  }, u.createElement("path", {
    id: "Vector 2_2",
    d: "M0.0371248 26.321L0.231625 47.1795C0.248791 49.0207 2.43152 49.9524 3.74802 48.6805L10.0002 42.6399C10.0722 42.5704 10.1676 42.5312 10.2671 42.5302L23.4463 42.4046C31.153 42.3311 37.3417 35.9535 37.269 28.16C37.1963 20.3664 30.8899 14.108 23.1831 14.1815L11.7109 14.2909C5.20229 14.3529 -0.0242523 19.739 0.0371248 26.321Z",
    fill: "#B1B2B6"
  })), u.createElement("path", {
    id: "Vector 15",
    d: "M8.20312 25.6499H28.1484",
    stroke: "white",
    strokeWidth: 1.74999,
    strokeLinecap: "round"
  }), u.createElement("path", {
    id: "Vector 16",
    d: "M8.20312 31.7451H20.9102",
    stroke: "white",
    strokeWidth: 1.74999,
    strokeLinecap: "round"
  }), u.createElement("path", {
    id: "Vector",
    d: "M11.3364 6.78235L10.3243 9.56566C10.2995 9.63245 10.2548 9.69005 10.1963 9.73073C10.1379 9.77141 10.0683 9.79321 9.99707 9.79321C9.92583 9.79321 9.85629 9.77141 9.7978 9.73073C9.73931 9.69005 9.69467 9.63245 9.66988 9.56566L8.65777 6.78235C8.64009 6.73437 8.61221 6.69081 8.57606 6.65465C8.53991 6.6185 8.49634 6.59062 8.44836 6.57295L5.66506 5.56083C5.59826 5.53604 5.54066 5.4914 5.49998 5.43291C5.4593 5.37442 5.4375 5.30489 5.4375 5.23364C5.4375 5.1624 5.4593 5.09286 5.49998 5.03437C5.54066 4.97588 5.59826 4.93124 5.66506 4.90645L8.44836 3.89434C8.49634 3.87666 8.53991 3.84879 8.57606 3.81263C8.61221 3.77648 8.64009 3.73291 8.65777 3.68494L9.66988 0.901628C9.69467 0.834837 9.73931 0.777233 9.7978 0.736554C9.85629 0.695876 9.92583 0.674072 9.99707 0.674072C10.0683 0.674072 10.1379 0.695876 10.1963 0.736554C10.2548 0.777233 10.2995 0.834837 10.3243 0.901628L11.3364 3.68494C11.3541 3.73291 11.3819 3.77648 11.4181 3.81263C11.4542 3.84879 11.4978 3.87666 11.5458 3.89434L14.3291 4.90645C14.3959 4.93124 14.4535 4.97588 14.4942 5.03437C14.5348 5.09286 14.5566 5.1624 14.5566 5.23364C14.5566 5.30489 14.5348 5.37442 14.4942 5.43291C14.4535 5.4914 14.3959 5.53604 14.3291 5.56083L11.5458 6.57295C11.4978 6.59062 11.4542 6.6185 11.4181 6.65465C11.3819 6.69081 11.3541 6.73437 11.3364 6.78235V6.78235Z",
    stroke: "#CCCCCC",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), Ho = (t) => u.createElement("svg", {
    width: 30,
    height: 23,
    viewBox: "0 0 30 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M21.6649 12.1638C23.9193 12.1638 25.7468 10.3363 25.7468 8.08189C25.7468 5.82753 23.9193 4 21.6649 4C21.2383 4 20.8269 4.06545 20.4403 4.18687C18.7843 4.70701 17.583 6.25417 17.583 8.08189C17.583 9.90962 18.7843 11.4568 20.4403 11.9769C20.8269 12.0983 21.2383 12.1638 21.6649 12.1638Z",
    stroke: "#D53A94",
    strokeWidth: 2,
    strokeMiterlimit: 10
  }), u.createElement("path", {
    d: "M17.0344 13.8613C18.3665 13.1421 19.8456 12.7666 21.3468 12.7666C22.8479 12.7666 24.327 13.1421 25.6591 13.8613C26.0917 14.0949 26.5047 14.3625 26.8947 14.6611C28.4917 15.8838 29.0003 17.9739 29.0003 19.9851V19.9851C29.0003 21.0979 28.0982 22 26.9855 22H16.5",
    stroke: "#D53A94",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.createElement("path", {
    d: "M9.96125 11.2047C12.7792 11.2047 15.0636 8.92033 15.0636 6.10237C15.0636 3.28441 12.7792 1 9.96125 1C7.14329 1 4.85889 3.28441 4.85889 6.10237C4.85889 8.92033 7.14329 11.2047 9.96125 11.2047Z",
    stroke: "#D53A94",
    strokeWidth: 2,
    strokeMiterlimit: 10
  }), u.createElement("path", {
    d: "M1 19.2727C1 15.2561 4.25611 12 8.27273 12H10.185H11.9479C16.0019 12 19.2455 15.3658 19.0956 19.417V19.417C19.0422 20.8587 17.858 22 16.4152 22H10H3.72727C2.22104 22 1 20.779 1 19.2727V19.2727Z",
    stroke: "#D53A94",
    strokeWidth: 2
  })), Uo = (t) => u.createElement("svg", {
    width: 30,
    height: 23,
    viewBox: "0 0 28 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    display: "none",
    ...t
  }, u.createElement("path", {
    d: "M20.6649 11.1638C22.9193 11.1638 24.7468 9.33626 24.7468 7.08189C24.7468 4.82753 22.9193 3 20.6649 3C20.2383 3 19.8269 3.06545 19.4403 3.18687C17.7843 3.70701 16.583 5.25417 16.583 7.08189C16.583 8.90962 17.7843 10.4568 19.4403 10.9769C19.8269 11.0983 20.2383 11.1638 20.6649 11.1638Z",
    fill: "#D53A94"
  }), u.createElement("path", {
    d: "M8.96125 10.2047C11.7792 10.2047 14.0636 7.92033 14.0636 5.10237C14.0636 2.28441 11.7792 0 8.96125 0C6.14329 0 3.85889 2.28441 3.85889 5.10237C3.85889 7.92033 6.14329 10.2047 8.96125 10.2047Z",
    fill: "#D53A94"
  }), u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5301 21.1418C19.0503 20.5824 19.3685 19.8326 19.3685 19.0085C19.3685 16.7847 18.8007 14.2565 16.9336 12.6278C18.0184 12.186 19.1759 11.9575 20.3467 11.9575C21.8479 11.9575 23.327 12.333 24.6591 13.0523C25.1004 13.2905 25.5213 13.5642 25.9183 13.8701C27.496 15.086 28.0003 17.1544 28.0003 19.1463C28.0003 20.2484 27.1069 21.1418 26.0049 21.1418H18.5301Z",
    fill: "#D53A94"
  }), u.createElement("path", {
    d: "M0 19.0085C0 16.7472 0.625821 14.4099 2.46111 13.0889C2.94837 12.7382 3.466 12.4251 4.00945 12.1534C5.60798 11.3542 7.38289 10.937 9.18426 10.937C10.9856 10.937 12.7605 11.3542 14.3591 12.1534C14.9025 12.4251 15.4201 12.7382 15.9074 13.0889",
    fill: "#D53A94"
  }), u.createElement("path", {
    d: "M2.46111 13.0889C2.94837 12.7382 3.466 12.4251 4.00945 12.1534C5.60798 11.3542 7.38289 10.937 9.18426 10.937C10.9856 10.937 12.7605 11.3542 14.3591 12.1534C14.9025 12.4251 15.4201 12.7382 15.9074 13.0889C17.7427 14.4099 18.3685 16.7472 18.3685 19.0085C18.3685 20.1866 17.4134 21.1417 16.2352 21.1417H2.13328C0.955103 21.1417 0 20.1866 0 19.0085C0 16.7472 0.625821 14.4099 2.46111 13.0889Z",
    fill: "#D53A94"
  })), Vo = () => p.jsx(Go, {
    children: "New"
  }), Go = C(_)`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  color: #d53893;
  background: #ffdbf0;
  border-radius: 6px;
  padding: 2px 6px;
  margin-left: 5px;
`;
  var ot = {}, _n = {
    exports: {}
  };
  (function(t) {
    var e = pr.default;
    function n(i) {
      if (typeof WeakMap != "function") return null;
      var s = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
      return (n = function(o) {
        return o ? a : s;
      })(i);
    }
    function r(i, s) {
      if (!s && i && i.__esModule) return i;
      if (i === null || e(i) != "object" && typeof i != "function") return {
        default: i
      };
      var a = n(s);
      if (a && a.has(i)) return a.get(i);
      var d = {
        __proto__: null
      }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var c in i) if (c !== "default" && {}.hasOwnProperty.call(i, c)) {
        var l = o ? Object.getOwnPropertyDescriptor(i, c) : null;
        l && (l.get || l.set) ? Object.defineProperty(d, c, l) : d[c] = i[c];
      }
      return d.default = i, a && a.set(i, d), d;
    }
    t.exports = r, t.exports.__esModule = true, t.exports.default = t.exports;
  })(_n);
  var Wo = _n.exports, ze = {}, Yo = function(e) {
    return {
      root: {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        fontSize: e.typography.pxToRem(24),
        transition: e.transitions.create("fill", {
          duration: e.transitions.duration.shorter
        })
      },
      colorPrimary: {
        color: e.palette.primary.main
      },
      colorSecondary: {
        color: e.palette.secondary.main
      },
      colorAction: {
        color: e.palette.action.active
      },
      colorError: {
        color: e.palette.error.main
      },
      colorDisabled: {
        color: e.palette.action.disabled
      },
      fontSizeInherit: {
        fontSize: "inherit"
      },
      fontSizeSmall: {
        fontSize: e.typography.pxToRem(20)
      },
      fontSizeLarge: {
        fontSize: e.typography.pxToRem(35)
      }
    };
  }, On = u.forwardRef(function(e, n) {
    var r = e.children, i = e.classes, s = e.className, a = e.color, d = a === void 0 ? "inherit" : a, o = e.component, c = o === void 0 ? "svg" : o, l = e.fontSize, h = l === void 0 ? "default" : l, f = e.htmlColor, m = e.titleAccess, g = e.viewBox, x = g === void 0 ? "0 0 24 24" : g, y = ur(e, [
      "children",
      "classes",
      "className",
      "color",
      "component",
      "fontSize",
      "htmlColor",
      "titleAccess",
      "viewBox"
    ]);
    return u.createElement(c, ae({
      className: fr(i.root, s, d !== "inherit" && i["color".concat(He(d))], h !== "default" && i["fontSize".concat(He(h))]),
      focusable: "false",
      viewBox: x,
      color: f,
      "aria-hidden": m ? void 0 : true,
      role: m ? "img" : void 0,
      ref: n
    }, y), r, m ? u.createElement("title", null, m) : null);
  });
  On.muiName = "SvgIcon";
  const Tt = Vr(Yo, {
    name: "MuiSvgIcon"
  })(On);
  function Qo(t, e) {
    var n = function(i, s) {
      return B.createElement(Tt, ae({
        ref: s
      }, i), t);
    };
    return n.muiName = Tt.muiName, B.memo(B.forwardRef(n));
  }
  function Xo(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 166, n;
    function r() {
      for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
      var d = this, o = function() {
        t.apply(d, s);
      };
      clearTimeout(n), n = setTimeout(o, e);
    }
    return r.clear = function() {
      clearTimeout(n);
    }, r;
  }
  function Zo(t, e) {
    return function() {
      return null;
    };
  }
  function Jo(t, e) {
    return u.isValidElement(t) && e.indexOf(t.type.muiName) !== -1;
  }
  function jn(t) {
    return t && t.ownerDocument || document;
  }
  function Ko(t) {
    var e = jn(t);
    return e.defaultView || window;
  }
  function qo(t) {
    return function() {
      return null;
    };
  }
  function $o(t, e, n, r, i) {
    return null;
  }
  var es = typeof window < "u" ? u.useLayoutEffect : u.useEffect;
  function ts(t) {
    var e = u.useRef(t);
    return es(function() {
      e.current = t;
    }), u.useCallback(function() {
      return e.current.apply(void 0, arguments);
    }, []);
  }
  const ns = Object.freeze(Object.defineProperty({
    __proto__: null,
    capitalize: He,
    createChainedFunction: Gr,
    createSvgIcon: Qo,
    debounce: Xo,
    deprecatedPropType: Zo,
    isMuiElement: Jo,
    ownerDocument: jn,
    ownerWindow: Ko,
    requirePropFactory: qo,
    setRef: Wr,
    unstable_useId: Yr,
    unsupportedProp: $o,
    useControlled: Qr,
    useEventCallback: ts,
    useForkRef: Xr,
    useIsFocusVisible: Zr
  }, Symbol.toStringTag, {
    value: "Module"
  })), rs = Ft(ns);
  var Mt;
  function is() {
    return Mt || (Mt = 1, function(t) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), Object.defineProperty(t, "default", {
        enumerable: true,
        get: function() {
          return e.createSvgIcon;
        }
      });
      var e = rs;
    }(ze)), ze;
  }
  var os = Ht, ss = Wo;
  Object.defineProperty(ot, "__esModule", {
    value: true
  });
  var zn = ot.default = void 0, as = ss(u), cs = os(is()), ls = (0, cs.default)(as.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  zn = ot.default = ls;
  var st = {}, Be = {};
  const ds = Ft(ui);
  var It;
  function hs() {
    return It || (It = 1, function(t) {
      "use client";
      Object.defineProperty(t, "__esModule", {
        value: true
      }), Object.defineProperty(t, "default", {
        enumerable: true,
        get: function() {
          return e.createSvgIcon;
        }
      });
      var e = ds;
    }(Be)), Be;
  }
  var ps = Ht;
  Object.defineProperty(st, "__esModule", {
    value: true
  });
  var Bn = st.default = void 0, us = ps(hs()), fs = p;
  Bn = st.default = (0, us.default)((0, fs.jsx)("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add");
  const ms = (t) => u.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z",
    stroke: "#657795",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.createElement("path", {
    d: "M16.4438 16.4436L21.0001 20.9999",
    stroke: "#657795",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), At = ({ autofilled: t, searchedUser: e, setSearchedUser: n }) => {
    const r = Y(), { setHasUserBeenSearched: i, activeTab: s, setActiveTab: a, userShouldBeSearched: d, setUserShouldBeSearched: o } = u.useContext(ue), [c, l] = u.useState(false);
    u.useEffect(() => (e !== "" && d && (n(e), o(false)), () => o(false)), []), u.useEffect(() => {
      t && !d && (t.includes("chatid") ? n(t.split(":")[1]) : n(t), f());
    }, [
      d,
      t
    ]);
    const h = async (g) => {
      let x = g.target.value;
      x === "" ? m() : n(x);
    }, f = () => {
      a(3);
    }, m = () => {
      n(""), i(false), l(false);
    };
    return p.jsxs(R, {
      alignItems: "stretch",
      justifyContent: "flex-start",
      flex: "0",
      children: [
        (s === 3 || s === 4) && p.jsxs(A, {
          justifyContent: "flex-start",
          width: "100%",
          flex: "initial",
          margin: "20px 0px 12px 0px",
          padding: "0px 0px 14px 0px",
          style: {
            borderBottom: "2px solid #D53893"
          },
          children: [
            p.jsx(Q, {
              src: mr,
              height: "18px",
              width: "22px",
              style: {
                cursor: "pointer"
              },
              onClick: () => {
                a(0), m();
              }
            }),
            p.jsx(_, {
              color: "#D53893",
              margin: "0px 0px 0px 7px",
              children: "Back"
            })
          ]
        }),
        p.jsxs(A, {
          justifyContent: "space-between",
          width: "100%",
          flex: "initial",
          children: [
            p.jsxs(R, {
              alignItems: "stretch",
              display: s == 4 ? "none" : "flex",
              children: [
                p.jsx(gs, {
                  type: "text",
                  onKeyUp: (g) => g.key === "Enter" ? f() : null,
                  value: e,
                  typed: !!e,
                  onChange: h,
                  placeholder: "Search Web3 domain or 0x123..."
                }),
                e.length > 0 && p.jsx(Cs, {
                  theme: r,
                  width: "24px",
                  height: "24px",
                  onClick: m
                }),
                p.jsxs(R, {
                  position: "absolute",
                  alignItems: "flex-end",
                  width: "24px",
                  height: "24px",
                  top: "22px",
                  right: "16px",
                  children: [
                    c && p.jsx(pe, {
                      type: D.SEAMLESS,
                      width: "auto",
                      spinnerSize: 24,
                      spinnerColor: r.default.secondaryColor
                    }),
                    !e && p.jsx(R, {
                      alignItems: "center",
                      justifyContent: "center",
                      background: r.chat.snapFocusBg,
                      padding: "4px",
                      children: p.jsx(ms, {
                        style: {
                          cursor: "pointer"
                        },
                        onClick: f
                      })
                    })
                  ]
                })
              ]
            }),
            s !== 3 && s !== 4 && p.jsx(gr, {
              margin: "spacing-none spacing-none spacing-none spacing-xs",
              children: p.jsx(Fe, {
                iconOnly: true,
                leadingIcon: p.jsx(xs, {}),
                circular: true,
                size: "small",
                onClick: () => a(3)
              })
            })
          ]
        })
      ]
    });
  }, gs = C.input`
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  flex: 1;
  width: 100%;
  height: 48px;
  padding: ${(t) => t.typed ? "13px 42px 13px 21px" : "13px 21px 13px 21px"};
  margin: 10px 0px 10px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: ${(t) => t.theme.chat.snapFocusBg};
  color: ${(t) => t.theme.default.color || "#000"};
  &:focus {
    outline: none;
    background-image: linear-gradient(
        ${(t) => t.theme.chat.snapFocusBg},
        ${(t) => t.theme.chat.snapFocusBg}
      ),
      linear-gradient(
        to right,
        rgba(182, 160, 245, 1),
        rgba(244, 110, 246, 1),
        rgba(255, 222, 211, 1),
        rgba(255, 207, 197, 1)
      );
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
  &::placeholder {
    color: #657795;
  }
`, Cs = C(zn)`
  color: ${(t) => t.theme.default.color || "#000"};
  position: absolute;
  cursor: pointer;
  background: transparent;
  top: 22px;
  right: 14px;
  z-index: 1;
`, xs = C(Bn)`
  color: #ffffff;
  font-size: 24px;
`, vs = ({ showCreateGroupModal: t, chatId: e, selectedChatId: n, setSelectedChatId: r }) => {
    const i = Y(), s = Cr(/* @__PURE__ */ new Date("2023-02-22T00:00:00.000"), 90), [a, d] = u.useState(""), { activeTab: o, setActiveTab: c } = u.useContext(ue), [l, h] = u.useState(-1), [f, m] = u.useState(null), g = u.useRef(null), [x, y] = u.useState({
      showConvoPrompt: false,
      showRefreshPrompt: true,
      chatRenderKey: [
        ...Array(24)
      ].map(() => (Math.random() * 36 | 0).toString(36)).join("")
    });
    return p.jsxs(R, {
      ref: g,
      justifyContent: "flex-start",
      width: "100%",
      children: [
        p.jsxs(R, {
          justifyContent: "flex-start",
          padding: "20px 10px 0px 20px",
          width: "100%",
          flex: "0",
          zIndex: "1",
          children: [
            o !== 3 && p.jsx(R, {
              flex: "initial",
              width: "100%",
              padding: "0px 0px 10px 0px",
              minHeight: "72px",
              children: p.jsxs(A, {
                children: [
                  p.jsx(Lt, {
                    active: o == 0,
                    background: "transparent",
                    hoverBackground: "transparent",
                    color: i.default.color,
                    flex: "1",
                    zIndex: "1",
                    padding: "10px 10px 20px 10px",
                    onClick: () => {
                      c(0);
                    },
                    children: p.jsx(_, {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: o === 0 ? T.COLORS.PRIMARY_PINK : "inherit",
                      minHeight: "20px",
                      children: "Chats"
                    })
                  }),
                  p.jsx(Lt, {
                    active: o == 1,
                    background: "transparent",
                    hoverBackground: "transparent",
                    color: i.default.color,
                    zIndex: "1",
                    flex: "1",
                    padding: "10px 10px 20px 10px",
                    onClick: () => {
                      c(1);
                    },
                    children: p.jsxs(A, {
                      alignItems: "center",
                      children: [
                        p.jsx(_, {
                          flex: "initial",
                          fontSize: "16px",
                          fontWeight: "400",
                          color: o === 1 ? T.COLORS.PRIMARY_PINK : "inherit",
                          margin: "0px 4px",
                          minHeight: "20px",
                          children: "Requests"
                        }),
                        l < 0 || (f == null ? void 0 : f.loading) ? p.jsx(pe, {
                          type: D.SEAMLESS,
                          width: "auto",
                          spinnerSize: 20,
                          spinnerColor: T.COLORS.PRIMARY_PINK
                        }) : l > 0 ? p.jsx(_, {
                          background: T.COLORS.PRIMARY_PINK,
                          color: T.COLORS.WHITE,
                          padding: "2px 8px",
                          margin: "0px 4px",
                          fontSize: "12px",
                          borderRadius: T.ADJUSTMENTS.RADIUS.SMALL,
                          children: l
                        }) : null
                      ]
                    })
                  })
                ]
              })
            }),
            o == 0 && p.jsx(At, {
              autofilled: void 0,
              searchedUser: a,
              setSearchedUser: d
            }),
            o == 3 && p.jsxs(p.Fragment, {
              children: [
                p.jsx(At, {
                  autofilled: null,
                  searchedUser: a,
                  setSearchedUser: d
                }),
                !a && p.jsxs(Fe, {
                  block: true,
                  variant: "secondary",
                  onClick: () => {
                    t();
                  },
                  children: [
                    p.jsx(Ho, {
                      id: "create-group-icon"
                    }),
                    p.jsx(Uo, {
                      id: "create-group-fill-icon"
                    }),
                    p.jsx(_, {
                      margin: "0 8px",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: "normal",
                      color: i.default.secondaryColor,
                      children: "Create Group"
                    }),
                    s && p.jsx(Vo, {})
                  ]
                })
              ]
            })
          ]
        }),
        p.jsxs(bs, {
          justifyContent: "flex-start",
          alignItems: "stretch",
          children: [
            p.jsxs(R, {
              flexWrap: "nowrap",
              width: "100%",
              height: "100%",
              flex: "1 1 1px",
              style: {
                display: o == 0 ? "flex" : "none"
              },
              overflow: "hidden auto",
              justifyContent: "center",
              children: [
                x.showConvoPrompt && p.jsxs(R, {
                  flex: "initial",
                  gap: "10px",
                  children: [
                    p.jsx(Fo, {}),
                    p.jsxs(A, {
                      children: [
                        p.jsx(_, {
                          fontSize: "17px",
                          color: i.default.color,
                          fontWeight: "500",
                          lineHeight: "150%",
                          children: "No conversations, yet."
                        }),
                        p.jsx(_, {
                          fontSize: "15px",
                          color: i.default.secondaryColor,
                          fontWeight: "400",
                          lineHeight: "130%",
                          padding: "0px 25px 10px 25px",
                          children: "Get started by searching for an address or group name."
                        }),
                        x.showRefreshPrompt && p.jsx(Fe, {
                          variant: "primary",
                          size: "extraSmall",
                          onClick: () => {
                            y({
                              ...x,
                              showConvoPrompt: false,
                              chatRenderKey: [
                                ...Array(24)
                              ].map(() => (Math.random() * 36 | 0).toString(36)).join("")
                            });
                          },
                          children: "Refresh"
                        })
                      ]
                    })
                  ]
                }),
                p.jsx(Ne, {
                  justifyContent: "flex-start",
                  style: {
                    display: x.showConvoPrompt ? "none" : "flex"
                  },
                  height: "100%",
                  overflow: "hidden auto",
                  children: p.jsx(dt, {
                    listType: "CHATS",
                    onChatSelected: (E) => r(E),
                    onUnreadCountChange: (E) => {
                    },
                    onLoading: (E) => {
                      console.debug(`src::sections::chat::ChatSidebarSection::onLoading::chats: loading ${(/* @__PURE__ */ new Date()).toISOString()}`, E), E.loading && !E.paging && y({
                        ...x,
                        showConvoPrompt: false
                      });
                    },
                    onPreload: (E) => {
                      E.length > 0 ? y({
                        ...x,
                        showConvoPrompt: false
                      }) : E.length === 0 && y({
                        ...x,
                        showConvoPrompt: true
                      });
                    }
                  }, x.chatRenderKey)
                })
              ]
            }),
            p.jsx(Ne, {
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              width: "100%",
              height: "100%",
              overflow: "hidden auto",
              style: {
                display: o == 1 ? "flex" : "none"
              },
              children: p.jsx(dt, {
                listType: "REQUESTS",
                onChatSelected: (E) => r(E),
                onUnreadCountChange: (E) => {
                },
                onChatsCountChange: (E) => {
                  var _a, _b;
                  console.debug("src::sections::chat::ChatSidebarSection::onChatsCountChage::requests: count is: ", E), e == ((_b = (_a = oe[0]) == null ? void 0 : _a.payload) == null ? void 0 : _b.chatId) || (e == null ? void 0 : e.split("chatid:")[1]) == n ? h(null) : h(E);
                },
                onLoading: (E) => {
                  console.debug(`src::sections::chat::ChatSidebarSection::onLoading::requests: loading ${(/* @__PURE__ */ new Date()).toISOString()}`, E), m(E);
                }
              })
            }),
            a && o == 3 && p.jsx(Ne, {
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              width: "100%",
              overflow: "hidden auto",
              style: {
                display: o == 3 ? "flex" : "none"
              },
              children: p.jsx(xr, {
                searchParamter: a || "",
                onChatSelected: (E) => r(E)
              })
            })
          ]
        }),
        p.jsx(ys, {
          padding: "0px 0px 0px 10px",
          zIndex: "1",
          borderTop: `1px solid ${i.default.secondaryBg}`,
          children: p.jsx(vr, {
            onUserProfileUpdateModalOpen: (E) => {
              console.log("src::sections::chat::ChatSidebarSection::onUserProfileUpdateModalOpen::profile: open is: ", E);
            }
          })
        })
      ]
    });
  }, Lt = C(Ke)`
  border-bottom: 2px solid ${(t) => t.active ? T.COLORS.PRIMARY_PINK : t.theme.default.secondaryBg};
  overflow: hidden;
  height: 52px;
  pointer: hand;
`, ys = C(A)`
  flex: initial;
  justify-content: space-between;
  // padding: 14px 10px 0px 10px;
  border-top: ${(t) => t.borderTop};
`, bs = C(R)`
  width: 100%;
  padding: 0px 0px 0px 10px;
  margin: 0px 0px 0px 10px;
  flex: 1;

  @media ${S.tablet} {
    margin: 0px;
  }
`, Ne = C(R)`
  > div:first-child {
    padding-right: 20px;
  }
`, Nn = (t) => u.createElement("svg", {
    width: 23,
    height: 15,
    viewBox: "0 0 23 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M20.9276 4.05322C15.8184 -1.0542 7.18502 -1.0542 2.07578 4.05322C0.25593 5.87307 0.081224 8.55645 1.64903 10.5783C1.7853 10.753 1.95966 10.8943 2.15882 10.9915C2.35798 11.0886 2.57668 11.139 2.79826 11.1388C2.97726 11.1389 3.15471 11.1056 3.32147 11.0405L7.78011 9.46L7.8065 9.44999C8.03153 9.35999 8.23054 9.21523 8.38546 9.02884C8.54039 8.84246 8.64633 8.62035 8.69368 8.38265L9.23053 5.69655C10.6943 5.19054 12.285 5.18701 13.751 5.68654L14.3161 8.39357C14.3651 8.62866 14.4715 8.84798 14.6258 9.03199C14.7802 9.21599 14.9776 9.35897 15.2006 9.44817L15.2269 9.45818L19.6856 11.0405C19.9769 11.1534 20.2967 11.1695 20.5979 11.0866C20.899 11.0037 21.1655 10.8261 21.358 10.5801C22.9222 8.55645 22.7466 5.87307 20.9276 4.05322ZM20.207 9.68293L20.1797 9.67202L15.7374 8.09511L15.1724 5.38899C15.1211 5.14412 15.0076 4.9166 14.8428 4.72837C14.678 4.54014 14.4674 4.39756 14.2315 4.31437C12.4514 3.70491 10.5185 3.70907 8.74099 4.3262C8.50322 4.41115 8.29164 4.55648 8.127 4.74791C7.96237 4.93934 7.85035 5.1703 7.80195 5.41811L7.26509 8.1033L2.82374 9.6702C2.81464 9.6702 2.80827 9.68202 2.79917 9.68566C1.67724 8.23797 1.79826 6.389 3.10491 5.08326C5.37973 2.80844 8.44163 1.6683 11.5017 1.6683C14.5618 1.6683 17.6228 2.80662 19.8985 5.08326C21.2024 6.389 21.3289 8.23797 20.207 9.68293ZM20.2361 14.0506C20.2361 14.2436 20.1594 14.4288 20.0229 14.5653C19.8864 14.7018 19.7012 14.7785 19.5082 14.7785H3.49436C3.3013 14.7785 3.11614 14.7018 2.97963 14.5653C2.84311 14.4288 2.76642 14.2436 2.76642 14.0506C2.76642 13.8575 2.84311 13.6724 2.97963 13.5358C3.11614 13.3993 3.3013 13.3226 3.49436 13.3226H19.5091C19.7021 13.3226 19.8873 13.3993 20.0238 13.5358C20.1603 13.6724 20.237 13.8575 20.237 14.0506H20.2361Z",
    fill: "white"
  })), Ss = (t) => u.createElement("svg", {
    width: 23,
    height: 15,
    viewBox: "0 0 23 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M22.5946 2.01801C22.4724 1.95153 22.3346 1.91995 22.1961 1.92663C22.0575 1.9333 21.9233 1.97799 21.8078 2.05593L18.4 4.35621V1.92079C18.4 1.50823 18.2385 1.11257 17.9509 0.820846C17.6633 0.529123 17.2733 0.365234 16.8667 0.365234H1.53333C1.12667 0.365234 0.736659 0.529123 0.449103 0.820846C0.161547 1.11257 0 1.50823 0 1.92079V12.8097C0 13.2222 0.161547 13.6179 0.449103 13.9096C0.736659 14.2013 1.12667 14.3652 1.53333 14.3652H16.8667C17.2733 14.3652 17.6633 14.2013 17.9509 13.9096C18.2385 13.6179 18.4 13.2222 18.4 12.8097V10.3791L21.8078 12.6843C21.9344 12.7676 22.0824 12.8113 22.2333 12.8097C22.4367 12.8097 22.6317 12.7277 22.7754 12.5819C22.9192 12.436 23 12.2382 23 12.0319V2.69857C22.999 2.55862 22.9609 2.42154 22.8895 2.30176C22.8182 2.18199 22.7163 2.08396 22.5946 2.01801ZM16.8667 12.8097H9.2H1.53333V1.92079H16.8667V12.8097ZM21.4667 10.5784L18.4 8.50468V6.22579L21.4667 4.1569V10.5784Z",
    fill: "white"
  })), Ze = ({ buttonStyles: t, iconSrc: e, onClick: n }) => p.jsx(Es, {
    onClick: n,
    style: t,
    children: p.jsx(Rs, {
      src: e
    })
  }), Es = C(Ke)`
  width: 4.56rem;
  max-width: 4.56rem;
  height: 2.75rem;
  hover-background: transparent;
  border-radius: 10px;
  margin: 0 0.35rem;

  @media ${S.mobileL} {
    width: 5rem;
    max-width: 5rem;
    height: 2.75rem;
    border-radius: 0.75rem;
  }

  @media ${S.mobileM} {
    margin: 0 0.2rem;
  }
`, Rs = C(Q)`
  width: 22px;
  cursor: pointer;
  @media ${S.mobileL} {
    width: 22px;
  }
`, ks = ({ isIncomingCallMinimized: t, children: e }) => p.jsxs(Ps, {
    isIncomingCallMinimized: t,
    children: [
      p.jsx(Je, {
        blur: 5,
        zIndex: 2,
        additionalStyles: {
          borderRadius: "1.5rem"
        }
      }),
      p.jsx(ws, {
        isIncomingCallMinimized: t,
        children: e
      })
    ]
  }), Ps = C(A)`
  position: absolute;
  right: ${(t) => t.isIncomingCallMinimized ? "2%" : "25%"};
  bottom: ${(t) => t.isIncomingCallMinimized ? "10%" : "unset"};
  border-radius: 1.5rem;
  width: ${(t) => t.isIncomingCallMinimized ? "28vw" : "24vw"};

  @media (max-width: 2560px){
    bottom: ${(t) => t.isIncomingCallMinimized ? "8%" : "unset"};
    width: ${(t) => t.isIncomingCallMinimized ? "21vw" : "24vw"};
  }

  @media (max-width: 2040px){
    bottom: ${(t) => t.isIncomingCallMinimized ? "10%" : "unset"};
    width: ${(t) => t.isIncomingCallMinimized ? "29vw" : "24vw"};
  }
   
  @media ${S.laptopL} {
    right: ${(t) => t.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "11%" : "17%"};
    width: ${(t) => t.isIncomingCallMinimized ? "33vw" : "24vw"};
  }

  @media (min-width: 768px) and (max-height: 700px){
    right: ${(t) => t.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "10%" : "12%"};
    width: ${(t) => t.isIncomingCallMinimized ? "33vw" : "24vw"};
  }

  @media (max-width: 1364px) {
    width : ${(t) => t.isIncomingCallMinimized ? "36vw" : "24vw"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "11%" : "12%"};
  }

  @media (max-width: 1240px) {
    width : ${(t) => t.isIncomingCallMinimized ? "40vw" : "24vw"};
  }

  @media (max-width: 1130px) {
    width : ${(t) => t.isIncomingCallMinimized ? "44vw" : "24vw"};
  }

  @media ${S.laptop} {
    right: ${(t) => t.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "15%" : "20%"};
    width: ${(t) => t.isIncomingCallMinimized ? "45vw" : "24vw"};

  @media (max-width: 996px) {
    width: ${(t) => t.isIncomingCallMinimized ? "49vw" : "24vw"};
  }

  @media (max-width: 932px) {
    width: ${(t) => t.isIncomingCallMinimized ? "55vw" : "34vw"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "8%" : "25%"};
  }

  @media ${S.tablet} {
    right: ${(t) => t.isIncomingCallMinimized ? "5%" : "30%"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "10%" : "25%"};
    width: ${(t) => t.isIncomingCallMinimized ? "60vw" : "37vw"};
  }

  @media (max-width:550px){
    right: ${(t) => t.isIncomingCallMinimized ? "3%" : "30%"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "12%" : "25%"};
    width: ${(t) => t.isIncomingCallMinimized ? "77vw" : "49vw"};
  }

  @media ${S.mobileL} {
    // right: 4%;
    right: ${(t) => t.isIncomingCallMinimized ? "1.5%" : "11%"};
    bottom: ${(t) => t.isIncomingCallMinimized ? "12.5%" : "25%"};
    width: ${(t) => t.isIncomingCallMinimized ? "94vw" : "77vw"};
  }
`, ws = C(R)`
  // display: flex;
  background: ${(t) => t.theme.vcModalBGColor};
  border: ${(t) => `2px solid ${t.theme.vcBorderColor}`};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 1.5rem;
  width: ${(t) => t.isIncomingCallMinimized ? "auto" : "25vw"};
  flex-direction: ${(t) => t.isIncomingCallMinimized ? "row" : "column"};
  justify-content: ${(t) => (t.isIncomingCallMinimized, "center")};
  height: fit-content;
  z-index: 10;

  @media ${S.laptop} {
    // width: 31vw;
  }

  @media ${S.tablet} {
    width: 45vw;
  }

  @media ${S.mobileL} {
    width: 100%;
  }
`, Fn = ({ pfp: t, username: e, address: n, status: r, containerStyles: i, fontColor: s, source: a }) => {
    const { web3NameList: d } = B.useContext(H), o = d[n], c = qe(n, 5);
    return p.jsxs(Ts, {
      style: i,
      children: [
        p.jsx(Ms, {
          source: a,
          children: p.jsx(Q, {
            height: "100%",
            alt: `Profile pic of ${e}`,
            src: t,
            objectFit: "cover"
          })
        }),
        p.jsxs(Is, {
          source: a,
          children: [
            p.jsx(As, {
              color: s,
              children: o || c
            }),
            p.jsx(Ls, {
              color: s,
              children: r
            })
          ]
        })
      ]
    });
  }, Ts = C(A)`
  width: fit-content;
  max-width: fit-content;
  height: 5.1rem;
  max-height: 5.1rem;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto 1rem auto;
  // background: red !important;

  @media ${S.mobileL} {
    height: 2.95rem;
    max-height: 2.95rem;
    min-height: 2.95rem;
    justify-content: flex-start;
    margin: 3% 0;
  }
`, Ms = C(R)`
  width: ${(t) => t.source === "minimized" ? "4rem" : "5rem"};
  height: ${(t) => t.source === "minimized" ? "4rem" : "5rem"};
  max-width: ${(t) => t.source === "minimized" ? "4rem" : "5rem"};
  margin: 0 1rem 0 0;
  border-radius: 100%;
  overflow: hidden;
  align-self: center;

  @media ${S.mobileL} {
    width: 2.875rem;
    height: 2.875rem;
    max-width: 2.875rem;
    margin: ${(t) => t.source === "minimized" ? "0.8rem 1rem auto 0.2rem" : "1.5rem 1rem auto 0.2rem"};
  }

  @media ${S.mobileS} {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    margin: 1.5rem 0.5rem auto 0rem;
  }
`, Is = C(R)`
  align-items: flex-start;
  width: fit-content;
  max-width: fit-content;
  @media ${S.mobileL} {
    margin-top: ${(t) => t.source === "minimized" ? "0.8rem" : "1.5rem"};
  }
`, As = C(_)`
  color: ${(t) => t.color || t.theme.vcUserInfoText};
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: left;

  @media ${S.mobileL} {
    font-size: 1rem;
    font-weight: 600;
  }

  @media ${S.mobileS} {
    font-size: 0.8rem;
  }
`, Ls = C(_)`
  color: ${(t) => t.color || t.theme.vcUserInfoText};
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  text-align: left;

  @media ${S.mobileL} {
    font-size: 0.8rem;
  }
`, Hn = (t) => u.createElement("svg", {
    width: 15,
    height: 20,
    viewBox: "0 0 15 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M13.8317 8.28369H13.0153V5.44596C13.0153 2.44303 10.541 0 7.5 0C4.45904 0 1.98431 2.44303 1.98431 5.44596V8.28369H1.16833C0.522968 8.28369 0 8.80005 0 9.43726V18.8464C0 19.4836 0.522968 20 1.16833 20H13.8317C14.477 20 15 19.4836 15 18.8464V9.43726C15 8.80005 14.477 8.28369 13.8317 8.28369ZM11.0474 8.28369H3.95255V5.44596C3.95255 3.5144 5.54371 1.94336 7.5 1.94336C9.45629 1.94336 11.0474 3.5144 11.0474 5.44596V8.28369Z",
    fill: "#787E99"
  })), Un = ({ localVideoStyles: t, incoming: e }) => {
    const n = u.useRef(null), r = u.useRef(null), { videoCallData: i, isCallAccepted: s } = u.useContext(re), { connectedUser: a } = u.useContext(H), { currentChat: d } = u.useContext(ue), { web3NameList: o } = u.useContext(H), c = o[i.incoming[0].address], l = Y();
    return u.useEffect(() => {
      if (n.current) {
        let h = n.current;
        h.srcObject = i.local.stream, h.play();
      }
    }, [
      n,
      i.local.stream
    ]), u.useEffect(() => {
      if (r.current) {
        let h = r.current;
        h.srcObject = i.incoming[0].stream, h.play();
      }
    }, [
      r,
      i.incoming[0].stream
    ]), i.incoming[0].address.substring(0, 6) + "" + i.incoming[0].address.substring(i.incoming[0].address.length - 6), p.jsxs(Ds, {
      children: [
        i.incoming[0].status === N.VideoCallStatus.CONNECTED && p.jsxs(Gs, {
          children: [
            p.jsx(Vs, {
              src: Hn
            }),
            "End-to-end encrypted"
          ]
        }),
        i.local.stream && p.jsxs(_s, {
          incomingStyle: e,
          className: i.incoming[0].status === N.VideoCallStatus.CONNECTED ? i.local.stream.getVideoTracks()[0].enabled ? "connectionAccepted videoOn" : "connectionAccepted videoOff" : "connectionNotAccepted",
          style: t,
          children: [
            p.jsx(Os, {
              ref: n,
              muted: true,
              className: i.incoming[0].status === N.VideoCallStatus.CONNECTED ? "connectionAccepted" : "connectionNotAccepted"
            }),
            i.local.stream.getVideoTracks()[0].enabled ? null : p.jsx(Dt, {
              children: p.jsx(Hs, {
                children: p.jsx(Q, {
                  height: "100%",
                  width: "100%",
                  alt: "Profile pic",
                  src: a == null ? void 0 : a.profilePicture,
                  objectFit: "cover"
                })
              })
            })
          ]
        }),
        i.incoming[0].status === N.VideoCallStatus.CONNECTED && p.jsx(zs, {
          background: i.incoming[0].video ? "transparent" : l.chat.snapFocusBg,
          children: p.jsxs(Bs, {
            width: i.incoming[0].video ? "auto" : "100%",
            minHeight: i.incoming[0].video ? "auto" : "100%",
            children: [
              p.jsx(js, {
                ref: r,
                display: i.incoming[0].video ? "block" : "none"
              }),
              !i.incoming[0].video && p.jsx(Dt, {
                className: "incomingCallvideoOff",
                children: p.jsx(Ns, {
                  children: p.jsx(Q, {
                    height: "100%",
                    width: "100%",
                    alt: "Profile pic",
                    src: d == null ? void 0 : d.profilePicture,
                    objectFit: "cover"
                  })
                })
              }),
              p.jsx(Fs, {
                position: "absolute",
                children: p.jsx(Us, {
                  children: c || qe(i.incoming[0].address, 5)
                })
              })
            ]
          })
        })
      ]
    });
  }, Ds = C(R)`
  overflow: hidden;
  margin: 2% auto 1% auto;
  width: 100%;
`, _s = C(R)`
  overflow: hidden;
  height: 100%;
  border-radius: 34px;
  z-index: 2;
  // aspect-ratio: ${(t) => t.incomingStyle || "16/9"};

  // @media ${S.laptopL} {
  //   aspect-ratio: ${(t) => t.incomingStyle || "16/9"};
  // }

  // @media (max-width: 1239px) {
  //   aspect-ratio: ${(t) => t.incomingStyle || "4/3"};
  // }

  // @media ${S.laptop} {
  //   aspect-ratio: ${(t) => t.incomingStyle || "4/3"};
  // }

  // @media (max-width: 820px) {
  //   aspect-ratio: ${(t) => t.incomingStyle || "3/4"};
  // }

  // @media (max-width: 768px) {
  //   aspect-ratio: ${(t) => t.incomingStyle || "3/4"};
  // }
  // @media ${S.mobileL} {
  //   height: 60%;
  //   aspect-ratio: ${(t) => t.incomingStyle || "9/20"};
  // }
  // @media ${S.mobileM} {
  //   aspect-ratio: ${(t) => t.incomingStyle || "9/23"};
  // }
  // @media ${S.mobileS} {
  //   aspect-ratio: ${(t) => t.incomingStyle || "9/27"};
  // }

  &.connectionNotAccepted {
    @media (min-width: 1024px) {
      aspect-ratio: 16/9;
    }
  }

  &.connectionAccepted {
    border-radius: 24px;
    height: 18vh;
    max-height: 18vh;
    position: absolute;
    width: auto;
    right: 8px;
    bottom: 8px;

    @media ${S.laptop} {
      right: 8px;
    }
    @media ${S.tablet} {
      bottom: 8px;
      right: 8px;
    }
    @media ${S.mobileL} {
      border-radius: 16px;
      aspect-ratio: ${(t) => t.incomingStyle || "4/3"};
    }

    &.videoOff {
      background: #eeeeeeee;
    }

    &.videoOff > video {
      visibility: hidden;
    }
  }
`, Os = C.video`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  object-fit: cover;

  &.connectionAccepted {
    z-index: 2;
    width: auto;
    @media (max-width: 768px) {
      height: 16vh;
      width: auto;
    }
  }
  &.connectionNotAccepted {
    @media (min-width: 1024px) {
      aspect-ratio: 16/9;
      height: 100%;
      width: auto;
    }
  }
`, js = C.video`
  border-radius: 34px;
  width: auto;
  height: 100%;
  display: ${(t) => t.display};

  @media (max-width: 820px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 425px) {
    border-radius: 20px;
  }
`, zs = C(R)`
  overflow: hidden;
  /* height: 20vh;
  max-height: 62vh;
  width: 95%; */
  background-color: ${(t) => t.background};
  /* left: 2.5%; */
  border-radius: 34px;
  z-index: 1;
  width: auto;

  /* @media (max-height: 800px) {
    max-height: 50vh;
  }
  @media (max-width: 425px) {
    border-radius: 20px;
  } */
`, Bs = C.div`
  width: ${(t) => t.width};
  min-height: 100%;
  max-height: 100%;
  border-radius: 34px;
  position: relative;
  @media (max-width: 820px) {
    width: 100%;
    min-height: ${(t) => t.minHeight};
    max-height: 100%;
  }
`;
  C(R)`
  position: absolute;
  height: 10px;
  width: fit-content;
  padding: 10px;
  border-radius: 24px;
  background-color: #ffffff;
  opacity: 0.8;
  z-index: 3;
  left: 1.5%;
  bottom: 3.5%;
`;
  const Dt = C(R)`
  position: absolute;
  width: fit-content;
  text-align: center;
  color: white;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;

  &.connectionAccepted {
    visibility: hidden;
  }

  }
`, Ns = C(R)`
  width: 5rem;
  height: 5rem;
  max-width: 5rem;
  border-radius: 100%;
  overflow: hidden;

  @media ${S.mobileL} {
    width: 3.5rem;
    height: 3.5rem;
    max-width: 2.875rem;
  }

  // @media ${S.mobileS} {
  //   width: 2.5rem;
  //   height: 2.5rem;
  //   max-width: 2.5rem;
  // }
`, Fs = C(A)`
  left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 18px;
`, Hs = C(R)`
  width: 3.5rem;
  height: 3.5rem;
  max-width: 5rem;
  border-radius: 100%;
  overflow: hidden;

  @media ${S.mobileL} {
    width: 3.5rem;
    height: 3.5rem;
    max-width: 3rem;
  }

  // @media ${S.mobileS} {
  //   width: 2.5rem;
  //   height: 2.5rem;
  //   max-width: 2.5rem;
  // }
`, Us = C(_)`
  padding: 3px 8px;
  border-radius: 8px;
  background: rgba(46, 49, 59, 0.75);
  color: #fff;
  z-index: 3;
`, Vs = C.img`
  width: 10px;
  margin-right: 12px;
  position: relative;
  bottom: -1px;
`, Gs = C.div`
  box-sizing: border-box;
  color: ${(t) => t.theme.default.secondaryColor};
  max-width: 556px;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  background-color: ${(t) => t.theme.default.bg};
  padding: 10px 15px;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 10px;
  max-height: 37px;
`, Ws = () => {
    const { connectedUser: t, createUserIfNecessary: e } = u.useContext(H), { videoCallData: n, acceptRequestWrapper: r, disconnectWrapper: i, setIsCallAccepted: s, isCallAccepted: a, setIncomingCallUserData: d, incomingCallUserData: o } = u.useContext(re), [c, l] = u.useState(false), h = Pe(425), f = Pe(1025) && !h;
    u.useEffect(() => {
      (async () => {
        const x = await N.user.get({
          account: n.incoming[0].address,
          env: yr.appEnv
        });
        d(x);
      })();
    }, []);
    const m = () => {
      l(true);
    }, g = async () => {
      s(true);
      let x;
      t.publicKey || (x = await e()), r({
        senderAddress: n.local.address,
        recipientAddress: n.incoming[0].address,
        chatId: n.meta.chatId,
        pgpPrivateKey: t.privateKey || (x == null ? void 0 : x.privateKey)
      });
    };
    return p.jsx(p.Fragment, {
      children: !a && p.jsx(Ys, {
        children: p.jsxs(ks, {
          isIncomingCallMinimized: c,
          children: [
            !c && p.jsx(Qs, {
              children: p.jsx(Xs, {
                onClick: m
              })
            }),
            n.incoming[0].status !== N.VideoCallStatus.CONNECTED && p.jsx(Fn, {
              pfp: o == null ? void 0 : o.profilePicture,
              username: "",
              address: `${n.incoming[0].address}`,
              status: "Incoming Video Call",
              containerStyles: {
                margin: h ? "2.5% 0 4% 2%" : "2.5% auto"
              },
              source: "minimized"
            }),
            !c && p.jsx(Un, {
              incoming: true,
              localVideoStyles: {
                height: "35vh",
                maxHeight: "35vh",
                borderRadius: "24px",
                width: "90%",
                margin: "2% auto"
              }
            }),
            p.jsxs(Zs, {
              style: {
                margin: `5% ${c && !f ? "2%" : "auto"}`
              },
              children: [
                p.jsx(Ze, {
                  buttonStyles: {
                    background: "#08e673"
                  },
                  iconSrc: Ss,
                  onClick: g
                }),
                p.jsx(Ze, {
                  buttonStyles: {
                    background: "#e60808",
                    width: h ? "34px" : "46px",
                    maxWidth: h ? "34px" : "46px"
                  },
                  iconSrc: Nn,
                  onClick: i
                })
              ]
            })
          ]
        })
      })
    });
  }, Ys = C($e)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: 'none';
  border: ${(t) => `5px solid ${t.theme.vcBorderColor}`};
  border-radius: 24px;
`, Qs = C(A)`
  justify-content: flex-end;
  padding: 1rem 1rem 0 1rem;
`, Xs = C(br)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${(t) => t.theme.vcCrossIconColor};
  @media ${S.mobileL} {
    width: 20px;
    height: 20px;
  }
`, Zs = C(A)`
  width: fit-content;
  max-width: fit-content;
`, Js = (t) => u.createElement("svg", {
    width: 16,
    height: 21,
    viewBox: "0 0 16 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M8.00011 14.8674C9.15812 14.8662 10.2683 14.4057 11.0872 13.5868C11.906 12.768 12.3666 11.6578 12.3678 10.4998V4.67624C12.3678 3.51787 11.9076 2.40694 11.0885 1.58785C10.2694 0.768755 9.15849 0.308594 8.00011 0.308594C6.84174 0.308594 5.73081 0.768755 4.91172 1.58785C4.09263 2.40694 3.63247 3.51787 3.63247 4.67624V10.4998C3.63367 11.6578 4.09422 12.768 4.91305 13.5868C5.73188 14.4057 6.84211 14.8662 8.00011 14.8674ZM5.08835 4.67624C5.08835 3.90399 5.39512 3.16337 5.94119 2.61731C6.48725 2.07125 7.22787 1.76448 8.00011 1.76448C8.77236 1.76448 9.51298 2.07125 10.059 2.61731C10.6051 3.16337 10.9119 3.90399 10.9119 4.67624V10.4998C10.9119 11.272 10.6051 12.0126 10.059 12.5587C9.51298 13.1048 8.77236 13.4115 8.00011 13.4115C7.22787 13.4115 6.48725 13.1048 5.94119 12.5587C5.39512 12.0126 5.08835 11.272 5.08835 10.4998V4.67624ZM8.72806 17.7428V19.963C8.72806 20.1561 8.65136 20.3412 8.51485 20.4777C8.37833 20.6143 8.19318 20.6909 8.00011 20.6909C7.80705 20.6909 7.6219 20.6143 7.48538 20.4777C7.34887 20.3412 7.27217 20.1561 7.27217 19.963V17.7428C5.47747 17.5602 3.81424 16.7185 2.60411 15.3807C1.39398 14.0428 0.72292 12.3037 0.720703 10.4998C0.720703 10.3067 0.797397 10.1216 0.933912 9.98504C1.07043 9.84852 1.25558 9.77183 1.44864 9.77183C1.64171 9.77183 1.82686 9.84852 1.96338 9.98504C2.09989 10.1216 2.17659 10.3067 2.17659 10.4998C2.17659 12.0443 2.79013 13.5255 3.88226 14.6176C4.97438 15.7097 6.45562 16.3233 8.00011 16.3233C9.54461 16.3233 11.0258 15.7097 12.118 14.6176C13.2101 13.5255 13.8236 12.0443 13.8236 10.4998C13.8236 10.3067 13.9003 10.1216 14.0369 9.98504C14.1734 9.84852 14.3585 9.77183 14.5516 9.77183C14.7446 9.77183 14.9298 9.84852 15.0663 9.98504C15.2028 10.1216 15.2795 10.3067 15.2795 10.4998C15.2773 12.3037 14.6063 14.0428 13.3961 15.3807C12.186 16.7185 10.5228 17.5602 8.72806 17.7428Z",
    fill: "#404650"
  })), Ks = (t) => u.createElement("svg", {
    width: 14,
    height: 16,
    viewBox: "0 0 14 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M13.0419 13.8092L1.79188 1.43416C1.74248 1.37847 1.68252 1.33315 1.61548 1.30081C1.54844 1.26847 1.47564 1.24976 1.40131 1.24576C1.32698 1.24176 1.2526 1.25255 1.18247 1.27751C1.11235 1.30247 1.04787 1.3411 0.992785 1.39117C0.937699 1.44123 0.893096 1.50172 0.861563 1.56915C0.830029 1.63658 0.812191 1.70959 0.809084 1.78396C0.805977 1.85834 0.817662 1.93258 0.843461 2.00241C0.86926 2.07223 0.908661 2.13624 0.95938 2.19072L3.62563 5.12345V7.99994C3.62571 8.60567 3.78881 9.20022 4.09782 9.72121C4.40683 10.2422 4.85035 10.6704 5.38187 10.9609C5.91338 11.2515 6.51329 11.3936 7.11865 11.3724C7.72401 11.3512 8.31252 11.1675 8.82243 10.8406L9.58743 11.6843C8.91317 12.158 8.1218 12.4374 7.29961 12.4922C6.47742 12.5469 5.65599 12.3749 4.92488 11.9948C4.19377 11.6147 3.58107 11.0411 3.15358 10.3367C2.72609 9.63225 2.50023 8.82395 2.50063 7.99994C2.50063 7.85075 2.44137 7.70768 2.33588 7.60219C2.23039 7.4967 2.08731 7.43744 1.93813 7.43744C1.78895 7.43744 1.64587 7.4967 1.54038 7.60219C1.43489 7.70768 1.37563 7.85075 1.37563 7.99994C1.37734 9.39391 1.89589 10.7377 2.83099 11.7715C3.76609 12.8053 5.05132 13.4557 6.43813 13.5968V15.3124C6.43813 15.4616 6.49739 15.6047 6.60288 15.7102C6.70837 15.8157 6.85145 15.8749 7.00063 15.8749C7.14981 15.8749 7.29289 15.8157 7.39838 15.7102C7.50387 15.6047 7.56313 15.4616 7.56313 15.3124V13.5961C8.57197 13.4957 9.53472 13.1237 10.3489 12.5196L12.2094 14.5657C12.2588 14.6214 12.3187 14.6667 12.3858 14.6991C12.4528 14.7314 12.5256 14.7501 12.5999 14.7541C12.6743 14.7581 12.7487 14.7473 12.8188 14.7224C12.8889 14.6974 12.9534 14.6588 13.0085 14.6087C13.0636 14.5586 13.1082 14.4981 13.1397 14.4307C13.1712 14.3633 13.1891 14.2903 13.1922 14.2159C13.1953 14.1415 13.1836 14.0673 13.1578 13.9975C13.132 13.9276 13.0926 13.8636 13.0419 13.8092ZM7.00063 10.2499C6.40389 10.2499 5.8316 10.0129 5.40964 9.59093C4.98768 9.16897 4.75063 8.59667 4.75063 7.99994V6.36095L8.04969 9.99048C7.72627 10.1609 7.3662 10.25 7.00063 10.2499ZM4.12907 1.72666C4.51494 1.10181 5.0941 0.619882 5.77866 0.353985C6.46322 0.088088 7.21584 0.052735 7.92231 0.25329C8.62878 0.453845 9.25056 0.879362 9.69331 1.46528C10.1361 2.0512 10.3756 2.76555 10.3756 3.49994V7.74892C10.3756 7.89811 10.3164 8.04118 10.2109 8.14667C10.1054 8.25216 9.96231 8.31142 9.81313 8.31142C9.66395 8.31142 9.52087 8.25216 9.41538 8.14667C9.30989 8.04118 9.25063 7.89811 9.25063 7.74892V3.49994C9.2509 3.01008 9.0913 2.53352 8.79606 2.14263C8.50083 1.75174 8.08609 1.46787 7.61484 1.33415C7.14359 1.20043 6.64157 1.22415 6.18503 1.40172C5.72849 1.57929 5.34237 1.90099 5.08532 2.31798C5.04786 2.38356 4.99759 2.44093 4.93749 2.48666C4.87739 2.53239 4.80869 2.56555 4.7355 2.58417C4.66231 2.60278 4.58612 2.60646 4.51147 2.595C4.43683 2.58353 4.36525 2.55716 4.30102 2.51743C4.23679 2.47771 4.18121 2.42547 4.13761 2.36381C4.094 2.30215 4.06326 2.23234 4.04721 2.15854C4.03116 2.08474 4.03014 2.00847 4.0442 1.93427C4.05827 1.86007 4.08713 1.78946 4.12907 1.72666ZM11.1941 9.63611C11.3976 9.11466 11.5016 8.55969 11.5006 7.99994C11.5006 7.85075 11.5599 7.70768 11.6654 7.60219C11.7709 7.4967 11.9139 7.43744 12.0631 7.43744C12.2123 7.43744 12.3554 7.4967 12.4609 7.60219C12.5664 7.70768 12.6256 7.85075 12.6256 7.99994C12.6266 8.69974 12.4964 9.39352 12.2417 10.0453C12.216 10.1156 12.1765 10.1801 12.1255 10.235C12.0745 10.2898 12.0131 10.3339 11.9448 10.3647C11.8765 10.3955 11.8028 10.4123 11.728 10.4143C11.6531 10.4162 11.5786 10.4031 11.5089 10.3759C11.4391 10.3487 11.3755 10.3078 11.3218 10.2556C11.268 10.2034 11.2252 10.1411 11.1959 10.0722C11.1666 10.0033 11.1513 9.92922 11.151 9.85433C11.1507 9.77945 11.1653 9.70526 11.1941 9.63611Z",
    fill: "white"
  })), qs = (t) => u.createElement("svg", {
    width: 24,
    height: 13,
    viewBox: "0 0 24 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M23.2371 1.55707C23.1133 1.49562 22.9737 1.46643 22.8334 1.4726C22.6931 1.47877 22.5572 1.52008 22.4402 1.59212L18.9888 3.71843V1.46721C18.9888 1.08585 18.8252 0.720111 18.534 0.45045C18.2427 0.18079 17.8477 0.0292969 17.4359 0.0292969H1.90646C1.49459 0.0292969 1.09959 0.18079 0.808361 0.45045C0.517129 0.720111 0.353516 1.08585 0.353516 1.46721V11.5326C0.353516 11.9139 0.517129 12.2797 0.808361 12.5493C1.09959 12.819 1.49459 12.9705 1.90646 12.9705H17.4359C17.8477 12.9705 18.2427 12.819 18.534 12.5493C18.8252 12.2797 18.9888 11.9139 18.9888 11.5326V9.28583L22.4402 11.4166C22.5684 11.4937 22.7183 11.534 22.8712 11.5326C23.0771 11.5326 23.2746 11.4568 23.4202 11.322C23.5658 11.1872 23.6476 11.0043 23.6476 10.8136V2.18616C23.6467 2.0568 23.608 1.93008 23.5357 1.81937C23.4635 1.70865 23.3603 1.61803 23.2371 1.55707ZM17.4359 11.5326H9.67116H1.90646V1.46721H17.4359V11.5326ZM22.0947 9.47006L18.9888 7.55315V5.44662L22.0947 3.5342V9.47006Z",
    fill: "#404650"
  })), $s = (t) => u.createElement("svg", {
    width: 25,
    height: 19,
    viewBox: "0 0 25 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, u.createElement("path", {
    d: "M23.7371 4.31411C23.6133 4.24964 23.4737 4.219 23.3334 4.22548C23.1931 4.23196 23.0572 4.2753 22.9402 4.35089L19.4888 6.58186V4.21982C19.4888 3.81969 19.3252 3.43595 19.034 3.15302C18.7427 2.87008 18.3477 2.71113 17.9359 2.71113H10.274C10.0681 2.71113 9.87061 2.79061 9.725 2.93207C9.57938 3.07354 9.49757 3.26541 9.49757 3.46548C9.49757 3.66554 9.57938 3.85741 9.725 3.99888C9.87061 4.14034 10.0681 4.21982 10.274 4.21982H17.9359V12.4827C17.9359 12.6828 18.0177 12.8747 18.1633 13.0161C18.3089 13.1576 18.5064 13.2371 18.7123 13.2371C18.9183 13.2371 19.1158 13.1576 19.2614 13.0161C19.407 12.8747 19.4888 12.6828 19.4888 12.4827V12.4233L22.9402 14.659C23.0684 14.7399 23.2183 14.7822 23.3712 14.7806C23.5771 14.7806 23.7746 14.7012 23.9202 14.5597C24.0658 14.4182 24.1476 14.2264 24.1476 14.0263V4.97416C24.1467 4.83844 24.108 4.70548 24.0357 4.58931C23.9635 4.47315 23.8603 4.37807 23.7371 4.31411ZM22.5947 12.6166L19.4888 10.6053V8.39511L22.5947 6.38856V12.6166ZM4.53399 0.695147C4.4658 0.620473 4.38303 0.55969 4.29048 0.516321C4.19794 0.472951 4.09745 0.447858 3.99485 0.442496C3.89225 0.437133 3.78957 0.451608 3.69277 0.485081C3.59596 0.518554 3.50696 0.57036 3.43092 0.637496C3.35488 0.704631 3.29331 0.785762 3.24978 0.876185C3.20625 0.966608 3.18163 1.06452 3.17734 1.16426C3.17305 1.264 3.18918 1.36357 3.2248 1.4572C3.26041 1.55084 3.3148 1.63668 3.38481 1.70974L4.32143 2.71113H2.40646C1.99459 2.71113 1.59959 2.87008 1.30836 3.15302C1.01713 3.43595 0.853516 3.81969 0.853516 4.21982V14.7806C0.853516 15.1808 1.01713 15.5645 1.30836 15.8474C1.59959 16.1304 1.99459 16.2893 2.40646 16.2893H17.0274L18.9142 18.3053C18.9824 18.38 19.0652 18.4408 19.1577 18.4841C19.2503 18.5275 19.3508 18.5526 19.4534 18.558C19.556 18.5633 19.6586 18.5489 19.7554 18.5154C19.8522 18.4819 19.9412 18.4301 20.0173 18.363C20.0933 18.2958 20.1549 18.2147 20.1984 18.1243C20.242 18.0338 20.2666 17.9359 20.2709 17.8362C20.2752 17.7365 20.259 17.6369 20.2234 17.5433C20.1878 17.4496 20.1334 17.3638 20.0634 17.2907L4.53399 0.695147ZM2.40646 14.7806V4.21982H5.73363L15.6162 14.7806H2.40646Z",
    fill: "white"
  })), _t = ({ iconSrc: t, iconWidth: e, onClick: n, backgroundColor: r }) => p.jsx(ea, {
    onClick: () => n(),
    bgColor: r,
    children: p.jsx(ta, {
      src: t,
      width: e
    })
  }), ea = C(Ke)`
  width: 3rem;
  max-width: 3rem;
  height: 2.75rem;
  background: ${(t) => t.bgColor || "white"};
  hover-background: transparent;
  border-radius: 10px;
  margin: 0 0.35rem;
`, ta = C(Q)`
  width: ${(t) => t.width};
  cursor: pointer;
`, na = () => {
    const { videoCallData: t, incomingCallUserData: e } = u.useContext(re), { web3NameList: n } = u.useContext(H), r = n[t.incoming[0].address], i = qe(t.incoming[0].address, 5), s = Y();
    return p.jsxs(ra, {
      children: [
        p.jsxs(aa, {
          children: [
            p.jsx(sa, {
              src: Hn
            }),
            "End-to-end encrypted"
          ]
        }),
        p.jsx(ia, {
          children: p.jsx(Q, {
            height: "100%",
            alt: `Profile pic of ${r || i}`,
            src: e == null ? void 0 : e.profilePicture,
            objectFit: "cover"
          })
        }),
        p.jsx(_, {
          fontSize: "16px",
          fontWeight: "500",
          color: s.default.secondaryColor,
          margin: "8px 0px 0px",
          children: "Connecting..."
        }),
        p.jsx(oa, {
          children: p.jsx(ca, {
            children: r || i
          })
        })
      ]
    });
  }, ra = C(R)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background: ${(t) => t.theme.chat.snapFocusBg};
  position: relative;
`, ia = C.div`
  width: 107px;
  height: 107px;
  max-width: 107px;
  border-radius: 100%;
  overflow: hidden;
  align-self: center;
`, oa = C(A)`
  position: absolute;
  left: 20px;
  bottom: 20px;
`, sa = C.img`
  width: 10px;
  margin-right: 12px;
  position: relative;
  bottom: -1px;
`, aa = C.div`
  box-sizing: border-box;
  color: ${(t) => t.theme.default.secondaryColor};
  max-width: 556px;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  background-color: ${(t) => t.theme.default.bg};
  padding: 10px 15px;
  border-radius: 14px;
  text-align: center;
  max-height: 37px;
  position: absolute;
  top: 24px;
  @media ${S.mobileL} {
    font-size: 12px;
  }
`, ca = C(_)`
  padding: 3px 8px;
  border-radius: 8px;
  background: rgba(46, 49, 59, 0.75);
  color: #fff;
  z-index: 3;
`, la = {
    position: "absolute",
    top: "2%",
    left: "0",
    zIndex: "3",
    width: "100vw",
    maxWidth: "100vw",
    justifyContent: "center"
  }, da = {
    height: "100vh",
    maxHeight: "100vh"
  }, ha = {
    position: "absolute",
    bottom: "4%",
    left: "0",
    width: "100vw",
    maxWidth: "100vw",
    justifyContent: "center"
  }, Ot = ({ blockedLoading: t }) => {
    const { videoCallData: e, disconnectWrapper: n, toggleVideoWrapper: r, toggleAudioWrapper: i, isCallAccepted: s } = u.useContext(re), a = Pe(425) && e.incoming[0].status === N.VideoCallStatus.INITIALIZED, { currentChat: d } = u.useContext(ue);
    return p.jsxs(pa, {
      children: [
        s ? p.jsx(na, {}) : p.jsxs(p.Fragment, {
          children: [
            e.incoming[0].status !== N.VideoCallStatus.CONNECTED && p.jsx(Fn, {
              pfp: d == null ? void 0 : d.profilePicture,
              username: "",
              address: `${e.incoming[0].address}`,
              status: "Calling",
              containerStyles: a ? la : {},
              fontColor: a ? "white" : null
            }),
            p.jsx(Un, {
              localVideoStyles: a ? da : {}
            })
          ]
        }),
        p.jsxs(ua, {
          style: a ? ha : {},
          children: [
            p.jsx(_t, {
              iconSrc: e.local.video ? qs : $s,
              iconWidth: "23px",
              backgroundColor: e.local.video ? "white" : "#e60808",
              onClick: r
            }),
            p.jsx(_t, {
              iconSrc: e.local.audio ? Js : Ks,
              iconWidth: "14.5px",
              backgroundColor: e.local.audio ? "white" : "#e60808",
              onClick: i
            }),
            p.jsx(Ze, {
              buttonStyles: {
                background: "#e60808"
              },
              iconSrc: Nn,
              onClick: n
            })
          ]
        }),
        t.enabled && p.jsx(pe, {
          type: D.STANDALONE,
          overlay: F.ONTOP,
          blur: T.ADJUSTMENTS.BLUR.DEFAULT,
          title: t.title,
          width: "50%",
          spinnerEnabled: t.spinnerEnabled,
          spinnerSize: t.spinnerSize,
          spinnerType: t.spinnerType,
          progressEnabled: t.progressEnabled,
          progressPositioning: Sr.BOTTOM,
          progress: t.progress,
          progressNotice: t.progressNotice
        })
      ]
    });
  }, pa = C($e)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: ${(t) => t.theme.vcBGColor};
  border: ${(t) => `5px solid ${t.theme.vcBorderColor}`};
  border-radius: 24px;
  padding: 10px;
`, ua = C(A)`
  width: fit-content;
  max-width: fit-content;
  margin: 2% auto 0 auto;
  padding: 0 0 1% 0;
  flex: 0;
`, fa = () => {
    const { videoCallData: t, createWrapper: e, requestWrapper: n, isCallAccepted: r } = u.useContext(re), { connectedUser: i, createUserIfNecessary: s } = u.useContext(H), [a] = u.useState(true), [d, o] = u.useState({
      enabled: false,
      title: null
    });
    return u.useEffect(() => {
      window.addEventListener("error", function(c) {
        if (c.message === "ResizeObserver loop limit exceeded") {
          const l = document.getElementById("webpack-dev-server-client-overlay-div"), h = document.getElementById("webpack-dev-server-client-overlay");
          h && h.setAttribute("style", "display: none"), l && l.setAttribute("style", "display: none");
        }
      });
    }, []), u.useEffect(() => {
      (async () => {
        o({
          enabled: true,
          title: "Setting up Video...",
          progressEnabled: false
        });
        try {
          if (t.local.stream === null) await e();
          else if (t.incoming[0].status === N.VideoCallStatus.INITIALIZED) {
            let l;
            i.publicKey || (l = await s()), n({
              senderAddress: t.local.address,
              recipientAddress: t.incoming[0].address,
              chatId: t.meta.chatId,
              pgpPrivateKey: i.privateKey || (l == null ? void 0 : l.privateKey)
            });
          }
          o({
            enabled: false,
            title: "Setting up Video...",
            progressEnabled: false
          }), a(false);
        } catch (l) {
          o({
            enabled: true,
            title: `Error: ${l}`,
            spinnerType: Er.ERROR,
            progressEnabled: false
          });
        }
      })();
    }, [
      t.local.stream
    ]), t.incoming[0].status === N.VideoCallStatus.RECEIVED ? r ? p.jsx(Ot, {
      blockedLoading: d
    }) : p.jsx(Ws, {}) : p.jsx(Ot, {
      blockedLoading: d
    });
  }, ue = u.createContext(null);
  function ma({ chatid: t }) {
    var _a, _b;
    u.useEffect(() => {
      Rr.pageview("/chat");
    }, []);
    const n = kr().pathname, r = n.endsWith("/chat") && !n.includes("::chatid"), { account: i, provider: s } = jt(), { videoCallData: a } = u.useContext(re), { setBlockedLoading: d, getUser: o, connectedUser: c, setConnectedUser: l, displayQR: h } = u.useContext(H), { userPushSDKInstance: f } = Nt((b) => b.user), m = Y(), [g, x] = u.useState(false), [y] = u.useState(), [E, I] = u.useState(), [k, w] = u.useState([]), [P, U] = u.useState(true), [V, X] = u.useState(""), [fe, me] = u.useState([]), [ge, Ie] = u.useState([]), [Ae, Le] = u.useState(false), [De, Ce] = u.useState(0), [Vn, Gn] = u.useState(false), [Wn, Yn] = u.useState([]), [ya, Qn] = u.useState(), at = Pe(600), Xn = u.useRef(null);
    u.useEffect(() => {
      xe(0), U(true), l(null);
    }, [
      i
    ]), u.useEffect(() => {
      P && (l(c), $n());
    }, [
      c,
      f
    ]);
    const { showModal: Zn } = ht(), Jn = Pr(), { showModal: Kn, ModalComponent: qn } = ht(), $n = async () => {
      var _a2;
      const b = wr({
        account: i
      }), Z = await s.getSigner();
      Qn(Z), ((_a2 = c == null ? void 0 : c.wallets) == null ? void 0 : _a2.toLowerCase()) !== (b == null ? void 0 : b.toLowerCase()) && await o(), U(false);
    }, xe = (b) => {
      (b === 1 || b === 0 || b === 3 || b === 4) && Ce(b);
    }, er = (b) => {
      let Z = false;
      return b.startsWith("chatid:") || b.endsWith(".eth") || b.endsWith(".wallet") || (b.startsWith("eip155:") && !b.includes(":nft") && (b = b.replace("eip155:", ""), Z = true), b.includes(":nft") && (b = b.replace(/eip155:\d+:/, "eip155:").split(":nft")[0]), b.startsWith("eip155:") && (b = b.replace("eip155:", ""), Z = true), !Z && Mr(b) && (Z = true), Z || (b = `chatid:${b}`)), b;
    };
    let ct = Bt();
    return u.useEffect(() => {
      (f == null ? void 0 : f.readmode()) && Zn();
    }, [
      f
    ]), u.useEffect(() => {
      I("");
    }, [
      n
    ]), u.useEffect(() => {
      let b = E || t;
      b ? (b = er(b), ct(`/chat/${b}`)) : ct("/chat");
    }, [
      E
    ]), f && !f.readmode() && f.stream && ((_a = f.stream) == null ? void 0 : _a.on(N.CONSTANTS.STREAM.CHAT, (b) => {
      b.event === "chat.accept" && xe(0);
    }), (_b = f.stream) == null ? void 0 : _b.on(N.CONSTANTS.STREAM.CHAT_OPS, (b) => {
      b.event === "chat.group.create" && (xe(0), I(b.chatId));
    })), p.jsx(ga, {
      children: p.jsxs(A, {
        ref: Xn,
        height: "inherit",
        children: [
          P && p.jsx(pe, {
            type: D.SEAMLESS
          }),
          !P && p.jsxs(ue.Provider, {
            value: {
              currentChat: y,
              selectedChatId: E,
              setSelectedChatId: I,
              receivedIntents: k,
              setReceivedIntents: w,
              viewChatBox: g,
              setViewChatBox: x,
              intents: fe,
              setIntents: me,
              inbox: ge,
              setInbox: Ie,
              hasUserBeenSearched: Ae,
              setHasUserBeenSearched: Le,
              loadingMessage: V,
              setLoadingMessage: X,
              setBlockedLoading: d,
              activeTab: De,
              setActiveTab: xe,
              userShouldBeSearched: Vn,
              setUserShouldBeSearched: Gn,
              filteredUserData: Wn,
              setFilteredUserData: Yn
            },
            children: [
              f && !(f == null ? void 0 : f.readmode()) && p.jsx(Ca, {
                flex: "1",
                maxWidth: "310px",
                minWidth: "280px",
                padding: "0px",
                boxSizing: "border-box",
                background: m.default.bg,
                chatActive: r && f && !(f == null ? void 0 : f.readmode()),
                zIndex: "0",
                children: p.jsx(vs, {
                  showCreateGroupModal: Kn,
                  chatId: t,
                  selectedChatId: E,
                  setSelectedChatId: I
                }, f.uid)
              }),
              p.jsx(xa, {
                padding: "10px 10px 10px 10px",
                chatActive: r && f && !(f == null ? void 0 : f.readmode()),
                height: "inherit",
                children: p.jsx(jo, {
                  chatId: t,
                  setChatId: I,
                  loggedIn: f && !(f == null ? void 0 : f.readmode())
                })
              }),
              p.jsx(qn, {
                InnerComponent: yo,
                toastObject: Jn,
                modalPadding: "0px",
                modalPosition: Tr.ON_PARENT
              }),
              a.incoming[0].status > 0 && p.jsx(fa, {}),
              h && !at && p.jsx(p.Fragment, {
                children: p.jsx($i, {
                  type: D.STANDALONE,
                  overlay: F.ONTOP,
                  blur: T.ADJUSTMENTS.BLUR.DEFAULT,
                  width: "75%"
                })
              }),
              h && at && p.jsx(p.Fragment, {
                children: p.jsx(ho, {
                  type: D.STANDALONE,
                  overlay: F.ONTOP,
                  blur: T.ADJUSTMENTS.BLUR.DEFAULT,
                  width: "75%"
                })
              })
            ]
          })
        ]
      })
    });
  }
  let ga, Ca, xa, va;
  ga = C.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(t) => t.theme.default.bg};
	border-radius: ${T.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${T.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${T.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${ee.MINI_MODULES.DESKTOP.TOP} - ${ee.MINI_MODULES.DESKTOP.BOTTOM});
  
  @media ${S.laptop} {
    margin: ${T.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${ee.MINI_MODULES.TABLET.TOP} - ${ee.MINI_MODULES.TABLET.BOTTOM});
  }

  @media ${S.mobileL} {
    margin: ${T.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100dvh - ${T.CONSTANTS.HEADER_HEIGHT}px - ${ee.MINI_MODULES.MOBILE.TOP} - ${ee.MINI_MODULES.MOBILE.BOTTOM});
    border: ${T.ADJUSTMENTS.RADIUS.LARGE};
`;
  Ca = C(R)`
  @media ${S.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-right: ${(t) => t.chatActive ? "0%" : "100%"};
    opacity: ${(t) => t.chatActive ? "1" : "0"};
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }
`;
  xa = C(R)`
  @media ${S.tablet} {
    position: absolute;
    background: ${(t) => t.theme.default.bg || "transparent"};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: ${(t) => t.chatActive ? "100%" : "0%"};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;
  Pa = () => {
    let { chatid: t } = Ir();
    return p.jsx(va, {
      children: p.jsx(ma, {
        chatid: t
      })
    });
  };
  va = C($e)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;
});
export {
  __tla,
  Pa as default
};
