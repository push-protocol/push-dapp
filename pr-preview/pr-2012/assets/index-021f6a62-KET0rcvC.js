const G = "2.12.0", W = () => `viem@${G}`;
class u extends Error {
  constructor(t, i = {}) {
    var _a;
    super(), Object.defineProperty(this, "details", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "docsPath", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "metaMessages", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shortMessage", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "ViemError" }), Object.defineProperty(this, "version", { enumerable: true, configurable: true, writable: true, value: W() });
    const n = i.cause instanceof u ? i.cause.details : ((_a = i.cause) == null ? void 0 : _a.message) ? i.cause.message : i.details, r = i.cause instanceof u && i.cause.docsPath || i.docsPath;
    this.message = [t || "An error occurred.", "", ...i.metaMessages ? [...i.metaMessages, ""] : [], ...r ? [`Docs: https://viem.sh${r}${i.docsSlug ? `#${i.docsSlug}` : ""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join(`
`), i.cause && (this.cause = i.cause), this.details = n, this.docsPath = r, this.metaMessages = i.metaMessages, this.shortMessage = t;
  }
  walk(t) {
    return U(this, t);
  }
}
function U(e, t) {
  return (t == null ? void 0 : t(e)) ? e : e && typeof e == "object" && "cause" in e ? U(e.cause, t) : t ? null : e;
}
class q extends u {
  constructor({ max: t, min: i, signed: n, size: r, value: o }) {
    super(`Number "${o}" is not in safe ${r ? `${r * 8}-bit ${n ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${i} to ${t})` : `(above ${i})`}`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "IntegerOutOfRangeError" });
  }
}
class K extends u {
  constructor({ givenSize: t, maxSize: i }) {
    super(`Size cannot exceed ${i} bytes. Given size: ${t} bytes.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "SizeOverflowError" });
  }
}
function w(e, { strict: t = true } = {}) {
  return !e || typeof e != "string" ? false : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function m(e) {
  return w(e, { strict: false }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function De(e, { dir: t = "left" } = {}) {
  let i = typeof e == "string" ? e.replace("0x", "") : e, n = 0;
  for (let r = 0; r < i.length - 1 && i[t === "left" ? r : i.length - r - 1].toString() === "0"; r++) n++;
  return i = t === "left" ? i.slice(n) : i.slice(0, i.length - n), typeof e == "string" ? (i.length === 1 && t === "right" && (i = `${i}0`), `0x${i.length % 2 === 1 ? `0${i}` : i}`) : i;
}
class Y extends u {
  constructor({ offset: t, position: i, size: n }) {
    super(`Slice ${i === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${n}).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "SliceOffsetOutOfBoundsError" });
  }
}
class T extends u {
  constructor({ size: t, targetSize: i, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${t}) exceeds padding size (${i}).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "SizeExceedsPaddingSizeError" });
  }
}
function d(e, { dir: t, size: i = 32 } = {}) {
  return typeof e == "string" ? J(e, { dir: t, size: i }) : Q(e, { dir: t, size: i });
}
function J(e, { dir: t, size: i = 32 } = {}) {
  if (i === null) return e;
  const n = e.replace("0x", "");
  if (n.length > i * 2) throw new T({ size: Math.ceil(n.length / 2), targetSize: i, type: "hex" });
  return `0x${n[t === "right" ? "padEnd" : "padStart"](i * 2, "0")}`;
}
function Q(e, { dir: t, size: i = 32 } = {}) {
  if (i === null) return e;
  if (e.length > i) throw new T({ size: e.length, targetSize: i, type: "bytes" });
  const n = new Uint8Array(i);
  for (let r = 0; r < i; r++) {
    const o = t === "right";
    n[o ? r : i - r - 1] = e[o ? r : e.length - r - 1];
  }
  return n;
}
const Z = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Xe(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? k(e, t) : typeof e == "string" ? ie(e, t) : typeof e == "boolean" ? ee(e, t) : B(e, t);
}
function ee(e, t = {}) {
  const i = `0x${Number(e)}`;
  return typeof t.size == "number" ? (p(i, { size: t.size }), d(i, { size: t.size })) : i;
}
function B(e, t = {}) {
  let i = "";
  for (let r = 0; r < e.length; r++) i += Z[e[r]];
  const n = `0x${i}`;
  return typeof t.size == "number" ? (p(n, { size: t.size }), d(n, { dir: "right", size: t.size })) : n;
}
function k(e, t = {}) {
  const { signed: i, size: n } = t, r = BigInt(e);
  let o;
  n ? i ? o = (1n << BigInt(n) * 8n - 1n) - 1n : o = 2n ** (BigInt(n) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const s = typeof o == "bigint" && i ? -o - 1n : 0;
  if (o && r > o || r < s) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new q({ max: o ? `${o}${c}` : void 0, min: `${s}${c}`, signed: i, size: n, value: `${e}${c}` });
  }
  const a = `0x${(i && r < 0 ? (1n << BigInt(n * 8)) + BigInt(r) : r).toString(16)}`;
  return n ? d(a, { size: n }) : a;
}
const te = new TextEncoder();
function ie(e, t = {}) {
  const i = te.encode(e);
  return B(i, t);
}
const ne = new TextEncoder();
function re(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? oe(e, t) : typeof e == "boolean" ? se(e, t) : w(e) ? j(e, t) : R(e, t);
}
function se(e, t = {}) {
  const i = new Uint8Array(1);
  return i[0] = Number(e), typeof t.size == "number" ? (p(i, { size: t.size }), d(i, { size: t.size })) : i;
}
const h = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function I(e) {
  if (e >= h.zero && e <= h.nine) return e - h.zero;
  if (e >= h.A && e <= h.F) return e - (h.A - 10);
  if (e >= h.a && e <= h.f) return e - (h.a - 10);
}
function j(e, t = {}) {
  let i = e;
  t.size && (p(i, { size: t.size }), i = d(i, { dir: "right", size: t.size }));
  let n = i.slice(2);
  n.length % 2 && (n = `0${n}`);
  const r = n.length / 2, o = new Uint8Array(r);
  for (let s = 0, a = 0; s < r; s++) {
    const c = I(n.charCodeAt(a++)), f = I(n.charCodeAt(a++));
    if (c === void 0 || f === void 0) throw new u(`Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`);
    o[s] = c * 16 + f;
  }
  return o;
}
function oe(e, t) {
  const i = k(e, t);
  return j(i);
}
function R(e, t = {}) {
  const i = ne.encode(e);
  return typeof t.size == "number" ? (p(i, { size: t.size }), d(i, { dir: "right", size: t.size })) : i;
}
function p(e, { size: t }) {
  if (m(e) > t) throw new K({ givenSize: m(e), maxSize: t });
}
function ae(e, t = {}) {
  const { signed: i } = t;
  t.size && p(e, { size: t.size });
  const n = BigInt(e);
  if (!i) return n;
  const r = (e.length - 2) / 2, o = (1n << BigInt(r) * 8n - 1n) - 1n;
  return n <= o ? n : n - BigInt(`0x${"f".padStart(r * 2, "f")}`) - 1n;
}
function Ge(e, t = {}) {
  return Number(ae(e, t));
}
function We(e, t) {
  return ({ exclude: i, format: n }) => ({ exclude: i, format: (r) => {
    const o = t(r);
    if (i) for (const s of i) delete o[s];
    return { ...o, ...n(r) };
  }, type: e });
}
class qe extends u {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, { metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidAddressError" });
  }
}
class C extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.maxSize = t;
  }
  set(t, i) {
    return super.set(t, i), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this;
  }
}
function O(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function _(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length)) throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function E(e, t = true) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function ue(e, t) {
  _(e);
  const i = t.outputLen;
  if (e.length < i) throw new Error(`digestInto() expects output buffer of length at least ${i}`);
}
const y = BigInt(2 ** 32 - 1), A = BigInt(32);
function ce(e, t = false) {
  return t ? { h: Number(e & y), l: Number(e >> A & y) } : { h: Number(e >> A & y) | 0, l: Number(e & y) | 0 };
}
function he(e, t = false) {
  let i = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let r = 0; r < e.length; r++) {
    const { h: o, l: s } = ce(e[r], t);
    [i[r], n[r]] = [o, s];
  }
  return [i, n];
}
const fe = (e, t, i) => e << i | t >>> 32 - i, le = (e, t, i) => t << i | e >>> 32 - i, de = (e, t, i) => t << i - 32 | e >>> 64 - i, pe = (e, t, i) => e << i - 32 | t >>> 64 - i;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const be = (e) => e instanceof Uint8Array, ge = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), Ke = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), Ye = (e, t) => e << 32 - t | e >>> t, ye = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ye) throw new Error("Non little-endian hardware is not supported");
function me(e) {
  if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function H(e) {
  if (typeof e == "string" && (e = me(e)), !be(e)) throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
class we {
  clone() {
    return this._cloneInto();
  }
}
function xe(e) {
  const t = (n) => e().update(H(n)).digest(), i = e();
  return t.outputLen = i.outputLen, t.blockLen = i.blockLen, t.create = () => e(), t;
}
const [M, V, N] = [[], [], []], $e = BigInt(0), b = BigInt(1), Pe = BigInt(2), ve = BigInt(7), Ie = BigInt(256), Oe = BigInt(113);
for (let e = 0, t = b, i = 1, n = 0; e < 24; e++) {
  [i, n] = [n, (2 * i + 3 * n) % 5], M.push(2 * (5 * n + i)), V.push((e + 1) * (e + 2) / 2 % 64);
  let r = $e;
  for (let o = 0; o < 7; o++) t = (t << b ^ (t >> ve) * Oe) % Ie, t & Pe && (r ^= b << (b << BigInt(o)) - b);
  N.push(r);
}
const [Ee, Ae] = he(N, true), z = (e, t, i) => i > 32 ? de(e, t, i) : fe(e, t, i), S = (e, t, i) => i > 32 ? pe(e, t, i) : le(e, t, i);
function ze(e, t = 24) {
  const i = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let s = 0; s < 10; s++) i[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const a = (s + 8) % 10, c = (s + 2) % 10, f = i[c], l = i[c + 1], D = z(f, l, 1) ^ i[a], X = S(f, l, 1) ^ i[a + 1];
      for (let g = 0; g < 50; g += 10) e[s + g] ^= D, e[s + g + 1] ^= X;
    }
    let r = e[2], o = e[3];
    for (let s = 0; s < 24; s++) {
      const a = V[s], c = z(r, o, a), f = S(r, o, a), l = M[s];
      r = e[l], o = e[l + 1], e[l] = c, e[l + 1] = f;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let a = 0; a < 10; a++) i[a] = e[s + a];
      for (let a = 0; a < 10; a++) e[s + a] ^= ~i[(a + 2) % 10] & i[(a + 4) % 10];
    }
    e[0] ^= Ee[n], e[1] ^= Ae[n];
  }
  i.fill(0);
}
class v extends we {
  constructor(t, i, n, r = false, o = 24) {
    if (super(), this.blockLen = t, this.suffix = i, this.outputLen = n, this.enableXOF = r, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, O(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = ge(this.state);
  }
  keccak() {
    ze(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    E(this);
    const { blockLen: i, state: n } = this;
    t = H(t);
    const r = t.length;
    for (let o = 0; o < r; ) {
      const s = Math.min(i - this.pos, r - o);
      for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
      this.pos === i && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: t, suffix: i, pos: n, blockLen: r } = this;
    t[n] ^= i, i & 128 && n === r - 1 && this.keccak(), t[r - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    E(this, false), _(t), this.finish();
    const i = this.state, { blockLen: n } = this;
    for (let r = 0, o = t.length; r < o; ) {
      this.posOut >= n && this.keccak();
      const s = Math.min(n - this.posOut, o - r);
      t.set(i.subarray(this.posOut, this.posOut + s), r), this.posOut += s, r += s;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return O(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (ue(t, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: i, suffix: n, outputLen: r, rounds: o, enableXOF: s } = this;
    return t || (t = new v(i, n, r, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = r, t.enableXOF = s, t.destroyed = this.destroyed, t;
  }
}
const Se = (e, t, i) => xe(() => new v(t, e, i)), Le = Se(1, 136, 256 / 8);
function Ue(e, t) {
  return Le(w(e, { strict: false }) ? re(e) : e);
}
const x = new C(8192);
function Te(e, t) {
  if (x.has(`${e}.${t}`)) return x.get(`${e}.${t}`);
  const i = e.substring(2).toLowerCase(), n = Ue(R(i)), r = i.split("");
  for (let s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && r[s] && (r[s] = r[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && r[s + 1] && (r[s + 1] = r[s + 1].toUpperCase());
  const o = `0x${r.join("")}`;
  return x.set(`${e}.${t}`, o), o;
}
const Be = /^0x[a-fA-F0-9]{40}$/, $ = new C(8192);
function Je(e, t) {
  const { strict: i = true } = t ?? {};
  if ($.has(e)) return $.get(e);
  const n = Be.test(e) ? e.toLowerCase() === e ? true : i ? Te(e) === e : true : false;
  return $.set(e, n), n;
}
function Qe(e) {
  return `0x${e.reduce((t, i) => t + i.replace("0x", ""), "")}`;
}
class L extends u {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "NegativeOffsetError" });
  }
}
class ke extends u {
  constructor({ length: t, position: i }) {
    super(`Position \`${i}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "PositionOutOfBoundsError" });
  }
}
class je extends u {
  constructor({ count: t, limit: i }) {
    super(`Recursive read limit of \`${i}\` exceeded (recursive read count: \`${t}\`).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "RecursiveReadLimitExceededError" });
  }
}
const Re = { bytes: new Uint8Array(), dataView: new DataView(new ArrayBuffer(0)), position: 0, positionReadCount: /* @__PURE__ */ new Map(), recursiveReadCount: 0, recursiveReadLimit: Number.POSITIVE_INFINITY, assertReadLimit() {
  if (this.recursiveReadCount >= this.recursiveReadLimit) throw new je({ count: this.recursiveReadCount + 1, limit: this.recursiveReadLimit });
}, assertPosition(e) {
  if (e < 0 || e > this.bytes.length - 1) throw new ke({ length: this.bytes.length, position: e });
}, decrementPosition(e) {
  if (e < 0) throw new L({ offset: e });
  const t = this.position - e;
  this.assertPosition(t), this.position = t;
}, getReadCount(e) {
  return this.positionReadCount.get(e || this.position) || 0;
}, incrementPosition(e) {
  if (e < 0) throw new L({ offset: e });
  const t = this.position + e;
  this.assertPosition(t), this.position = t;
}, inspectByte(e) {
  const t = e ?? this.position;
  return this.assertPosition(t), this.bytes[t];
}, inspectBytes(e, t) {
  const i = t ?? this.position;
  return this.assertPosition(i + e - 1), this.bytes.subarray(i, i + e);
}, inspectUint8(e) {
  const t = e ?? this.position;
  return this.assertPosition(t), this.bytes[t];
}, inspectUint16(e) {
  const t = e ?? this.position;
  return this.assertPosition(t + 1), this.dataView.getUint16(t);
}, inspectUint24(e) {
  const t = e ?? this.position;
  return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
}, inspectUint32(e) {
  const t = e ?? this.position;
  return this.assertPosition(t + 3), this.dataView.getUint32(t);
}, pushByte(e) {
  this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
}, pushBytes(e) {
  this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
}, pushUint8(e) {
  this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
}, pushUint16(e) {
  this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
}, pushUint24(e) {
  this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
}, pushUint32(e) {
  this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
}, readByte() {
  this.assertReadLimit(), this._touch();
  const e = this.inspectByte();
  return this.position++, e;
}, readBytes(e, t) {
  this.assertReadLimit(), this._touch();
  const i = this.inspectBytes(e);
  return this.position += t ?? e, i;
}, readUint8() {
  this.assertReadLimit(), this._touch();
  const e = this.inspectUint8();
  return this.position += 1, e;
}, readUint16() {
  this.assertReadLimit(), this._touch();
  const e = this.inspectUint16();
  return this.position += 2, e;
}, readUint24() {
  this.assertReadLimit(), this._touch();
  const e = this.inspectUint24();
  return this.position += 3, e;
}, readUint32() {
  this.assertReadLimit(), this._touch();
  const e = this.inspectUint32();
  return this.position += 4, e;
}, get remaining() {
  return this.bytes.length - this.position;
}, setPosition(e) {
  const t = this.position;
  return this.assertPosition(e), this.position = e, () => this.position = t;
}, _touch() {
  if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
  const e = this.getReadCount();
  this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
} };
function Ze(e, { recursiveReadLimit: t = 8192 } = {}) {
  const i = Object.create(Re);
  return i.bytes = e, i.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), i.positionReadCount = /* @__PURE__ */ new Map(), i.recursiveReadLimit = t, i;
}
const Ce = { ether: -9, wei: 9 };
function _e(e, t) {
  let i = e.toString();
  const n = i.startsWith("-");
  n && (i = i.slice(1)), i = i.padStart(t, "0");
  let [r, o] = [i.slice(0, i.length - t), i.slice(i.length - t)];
  return o = o.replace(/(0+)$/, ""), `${n ? "-" : ""}${r || "0"}${o ? `.${o}` : ""}`;
}
function P(e, t = "wei") {
  return _e(e, Ce[t]);
}
function He(e) {
  const t = Object.entries(e).map(([n, r]) => r === void 0 || r === false ? null : [n, r]).filter(Boolean), i = t.reduce((n, [r]) => Math.max(n, r.length), 0);
  return t.map(([n, r]) => `  ${`${n}:`.padEnd(i + 1)}  ${r}`).join(`
`);
}
class et extends u {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidLegacyVError" });
  }
}
class tt extends u {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", { metaMessages: ["Provided Transaction:", "{", He(t), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- a Legacy Transaction with `gasPrice`"] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidSerializableTransactionError" });
  }
}
class it extends u {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidStorageKeySizeError" });
  }
}
class nt extends u {
  constructor({ chainId: t }) {
    super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid."), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidChainIdError" });
  }
}
class Me extends u {
  constructor({ cause: t, maxFeePerGas: i } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${i ? ` = ${P(i)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, { cause: t }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "FeeCapTooHigh" });
  }
}
Object.defineProperty(Me, "nodeMessage", { enumerable: true, configurable: true, writable: true, value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/ });
class Ve extends u {
  constructor({ cause: t, maxPriorityFeePerGas: i, maxFeePerGas: n } = {}) {
    super([`The provided tip (\`maxPriorityFeePerGas\`${i ? ` = ${P(i)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n ? ` = ${P(n)} gwei` : ""}).`].join(`
`), { cause: t }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "TipAboveFeeCapError" });
  }
}
Object.defineProperty(Ve, "nodeMessage", { enumerable: true, configurable: true, writable: true, value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/ });
function rt(e, t, i, { strict: n } = {}) {
  return w(e, { strict: false }) ? Fe(e, t, i, { strict: n }) : Ne(e, t, i, { strict: n });
}
function F(e, t, i) {
  if (m(e) !== i - t) throw new Y({ offset: i, position: "end", size: m(e) });
}
function Ne(e, t, i, { strict: n } = {}) {
  const r = e.slice(t, i);
  return n && F(r, t, i), r;
}
function Fe(e, t, i, { strict: n } = {}) {
  const r = `0x${e.replace("0x", "").slice(t * 2, i * 2)}`;
  return n && F(r, t, i), r;
}
const st = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
export {
  u as B,
  Me as F,
  we as H,
  qe as I,
  Ve as T,
  Ge as a,
  Ze as b,
  Qe as c,
  We as d,
  B as e,
  tt as f,
  et as g,
  ae as h,
  Je as i,
  nt as j,
  it as k,
  De as l,
  rt as m,
  j as n,
  re as o,
  w as p,
  Ke as q,
  E as r,
  m as s,
  Xe as t,
  H as u,
  ue as v,
  xe as w,
  Ye as x,
  st as y
};
