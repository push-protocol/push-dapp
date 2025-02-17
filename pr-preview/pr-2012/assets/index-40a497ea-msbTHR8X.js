import { d as X, h as D, t as f, c as J, a as Y, i as F, I, b as be, e as P, f as Ae, g as Pe, j as R, F as ee, T as ve, k as we, l as ce, B as E, s as pe, m as De, n as S, w as ke, o as Se, p as Ue, H as Te, q as Q, r as le, u as Ge, v as ze, x as m } from "./index-021f6a62-KET0rcvC.js";
function b(e) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
}
const He = { gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" }, l1Block: { address: "0x4200000000000000000000000000000000000015" }, l2CrossDomainMessenger: { address: "0x4200000000000000000000000000000000000007" }, l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" }, l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" }, l2ToL1MessagePasser: { address: "0x4200000000000000000000000000000000000016" } }, he = { "0x0": "legacy", "0x1": "eip2930", "0x2": "eip1559", "0x3": "eip4844" };
function te(e) {
  const t = { ...e, blockHash: e.blockHash ? e.blockHash : null, blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null, chainId: e.chainId ? Y(e.chainId) : void 0, gas: e.gas ? BigInt(e.gas) : void 0, gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0, maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0, maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0, maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0, nonce: e.nonce ? Y(e.nonce) : void 0, to: e.to ? e.to : null, transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null, type: e.type ? he[e.type] : void 0, typeHex: e.type ? e.type : void 0, value: e.value ? BigInt(e.value) : void 0, v: e.v ? BigInt(e.v) : void 0 };
  return t.yParity = (() => {
    if (e.yParity) return Number(e.yParity);
    if (typeof t.v == "bigint") {
      if (t.v === 0n || t.v === 27n) return 0;
      if (t.v === 1n || t.v === 28n) return 1;
      if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
    }
  })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t.type === "eip1559" && delete t.maxFeePerBlobGas, t;
}
const Oe = X("transaction", te);
function Le(e) {
  var _a;
  const t = (_a = e.transactions) == null ? void 0 : _a.map((s) => typeof s == "string" ? s : te(s));
  return { ...e, baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null, blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0, difficulty: e.difficulty ? BigInt(e.difficulty) : void 0, excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0, gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0, gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0, hash: e.hash ? e.hash : null, logsBloom: e.logsBloom ? e.logsBloom : null, nonce: e.nonce ? e.nonce : null, number: e.number ? BigInt(e.number) : null, size: e.size ? BigInt(e.size) : void 0, timestamp: e.timestamp ? BigInt(e.timestamp) : void 0, transactions: t, totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null };
}
const _e = X("block", Le);
function $e(e, { args: t, eventName: s } = {}) {
  return { ...e, blockHash: e.blockHash ? e.blockHash : null, blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null, logIndex: e.logIndex ? Number(e.logIndex) : null, transactionHash: e.transactionHash ? e.transactionHash : null, transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null, ...s ? { args: t, eventName: s } : {} };
}
const Ve = { "0x0": "reverted", "0x1": "success" };
function Ne(e) {
  const t = { ...e, blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null, contractAddress: e.contractAddress ? e.contractAddress : null, cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null, effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null, gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null, logs: e.logs ? e.logs.map((s) => $e(s)) : null, to: e.to ? e.to : null, transactionIndex: e.transactionIndex ? Y(e.transactionIndex) : null, status: e.status ? Ve[e.status] : null, type: e.type ? he[e.type] || e.type : null };
  return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t;
}
const Me = X("transactionReceipt", Ne), je = { block: _e({ format(e) {
  var _a;
  return { transactions: (_a = e.transactions) == null ? void 0 : _a.map((s) => {
    if (typeof s == "string") return s;
    const a = te(s);
    return a.typeHex === "0x7e" && (a.isSystemTx = s.isSystemTx, a.mint = s.mint ? D(s.mint) : void 0, a.sourceHash = s.sourceHash, a.type = "deposit"), a;
  }), stateRoot: e.stateRoot };
} }), transaction: Oe({ format(e) {
  const t = {};
  return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? D(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
} }), transactionReceipt: Me({ format(e) {
  return { l1GasPrice: e.l1GasPrice ? D(e.l1GasPrice) : null, l1GasUsed: e.l1GasUsed ? D(e.l1GasUsed) : null, l1Fee: e.l1Fee ? D(e.l1Fee) : null, l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null };
} }) };
function A(e, t = "hex") {
  const s = xe(e), a = be(new Uint8Array(s.length));
  return s.encode(a), t === "hex" ? P(a.bytes) : a.bytes;
}
function xe(e) {
  return Array.isArray(e) ? Ke(e.map((t) => xe(t))) : Ze(e);
}
function Ke(e) {
  const t = e.reduce((r, n) => r + n.length, 0), s = me(t);
  return { length: t <= 55 ? 1 + t : 1 + s + t, encode(r) {
    t <= 55 ? r.pushByte(192 + t) : (r.pushByte(247 + s), s === 1 ? r.pushUint8(t) : s === 2 ? r.pushUint16(t) : s === 3 ? r.pushUint24(t) : r.pushUint32(t));
    for (const { encode: n } of e) n(r);
  } };
}
function Ze(e) {
  const t = typeof e == "string" ? S(e) : e, s = me(t.length);
  return { length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + s + t.length, encode(r) {
    t.length === 1 && t[0] < 128 ? r.pushBytes(t) : t.length <= 55 ? (r.pushByte(128 + t.length), r.pushBytes(t)) : (r.pushByte(183 + s), s === 1 ? r.pushUint8(t.length) : s === 2 ? r.pushUint16(t.length) : s === 3 ? r.pushUint24(t.length) : r.pushUint32(t.length), r.pushBytes(t));
  } };
}
function me(e) {
  if (e < 2 ** 8) return 1;
  if (e < 2 ** 16) return 2;
  if (e < 2 ** 24) return 3;
  if (e < 2 ** 32) return 4;
  throw new E("Length is too large.");
}
function ye(e) {
  const { kzg: t } = e, s = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), a = typeof e.blobs[0] == "string" ? e.blobs.map((n) => S(n)) : e.blobs, r = [];
  for (const n of a) r.push(Uint8Array.from(t.blobToKzgCommitment(n)));
  return s === "bytes" ? r : r.map((n) => P(n));
}
function ge(e) {
  const { kzg: t } = e, s = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), a = typeof e.blobs[0] == "string" ? e.blobs.map((o) => S(o)) : e.blobs, r = typeof e.commitments[0] == "string" ? e.commitments.map((o) => S(o)) : e.commitments, n = [];
  for (let o = 0; o < a.length; o++) {
    const i = a[o], c = r[o];
    n.push(Uint8Array.from(t.computeBlobKzgProof(i, c)));
  }
  return s === "bytes" ? n : n.map((o) => P(o));
}
function We(e, t, s, a) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, s, a);
  const r = BigInt(32), n = BigInt(4294967295), o = Number(s >> r & n), i = Number(s & n), c = a ? 4 : 0, u = a ? 0 : 4;
  e.setUint32(t + c, o, a), e.setUint32(t + u, i, a);
}
class qe extends Te {
  constructor(t, s, a, r) {
    super(), this.blockLen = t, this.outputLen = s, this.padOffset = a, this.isLE = r, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t), this.view = Q(this.buffer);
  }
  update(t) {
    le(this);
    const { view: s, buffer: a, blockLen: r } = this;
    t = Ge(t);
    const n = t.length;
    for (let o = 0; o < n; ) {
      const i = Math.min(r - this.pos, n - o);
      if (i === r) {
        const c = Q(t);
        for (; r <= n - o; o += r) this.process(c, o);
        continue;
      }
      a.set(t.subarray(o, o + i), this.pos), this.pos += i, o += i, this.pos === r && (this.process(s, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    le(this), ze(t, this), this.finished = true;
    const { buffer: s, view: a, blockLen: r, isLE: n } = this;
    let { pos: o } = this;
    s[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > r - o && (this.process(a, 0), o = 0);
    for (let d = o; d < r; d++) s[d] = 0;
    We(a, r - 8, BigInt(this.length * 8), n), this.process(a, 0);
    const i = Q(t), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, p = this.get();
    if (u > p.length) throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < u; d++) i.setUint32(4 * d, p[d], n);
  }
  digest() {
    const { buffer: t, outputLen: s } = this;
    this.digestInto(t);
    const a = t.slice(0, s);
    return this.destroy(), a;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: s, buffer: a, length: r, finished: n, destroyed: o, pos: i } = this;
    return t.length = r, t.pos = i, t.finished = n, t.destroyed = o, r % s && t.buffer.set(a), t;
  }
}
const Ye = (e, t, s) => e & t ^ ~e & s, Je = (e, t, s) => e & t ^ e & s ^ t & s, Qe = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), y = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), g = new Uint32Array(64);
class Xe extends qe {
  constructor() {
    super(64, 32, 8, false), this.A = y[0] | 0, this.B = y[1] | 0, this.C = y[2] | 0, this.D = y[3] | 0, this.E = y[4] | 0, this.F = y[5] | 0, this.G = y[6] | 0, this.H = y[7] | 0;
  }
  get() {
    const { A: t, B: s, C: a, D: r, E: n, F: o, G: i, H: c } = this;
    return [t, s, a, r, n, o, i, c];
  }
  set(t, s, a, r, n, o, i, c) {
    this.A = t | 0, this.B = s | 0, this.C = a | 0, this.D = r | 0, this.E = n | 0, this.F = o | 0, this.G = i | 0, this.H = c | 0;
  }
  process(t, s) {
    for (let d = 0; d < 16; d++, s += 4) g[d] = t.getUint32(s, false);
    for (let d = 16; d < 64; d++) {
      const x = g[d - 15], h = g[d - 2], U = m(x, 7) ^ m(x, 18) ^ x >>> 3, C = m(h, 17) ^ m(h, 19) ^ h >>> 10;
      g[d] = C + g[d - 7] + U + g[d - 16] | 0;
    }
    let { A: a, B: r, C: n, D: o, E: i, F: c, G: u, H: p } = this;
    for (let d = 0; d < 64; d++) {
      const x = m(i, 6) ^ m(i, 11) ^ m(i, 25), h = p + x + Ye(i, c, u) + Qe[d] + g[d] | 0, C = (m(a, 2) ^ m(a, 13) ^ m(a, 22)) + Je(a, r, n) | 0;
      p = u, u = c, c = i, i = o + h | 0, o = n, n = r, r = a, a = h + C | 0;
    }
    a = a + this.A | 0, r = r + this.B | 0, n = n + this.C | 0, o = o + this.D | 0, i = i + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, p = p + this.H | 0, this.set(a, r, n, o, i, c, u, p);
  }
  roundClean() {
    g.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Re = ke(() => new Xe());
function et(e, t) {
  return Re(Ue(e, { strict: false }) ? Se(e) : e);
}
function tt(e) {
  const { commitment: t, version: s = 1 } = e, a = e.to ?? (typeof t == "string" ? "hex" : "bytes"), r = et(t);
  return r.set([s], 0), a === "bytes" ? r : P(r);
}
function st(e) {
  const { commitments: t, version: s } = e, a = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes"), r = [];
  for (const n of t) r.push(tt({ commitment: n, to: a, version: s }));
  return r;
}
const de = 6, Ee = 32, se = 4096, Be = Ee * se, ue = Be * de - 1 - 1 * se * de, Ce = 1;
class rt extends E {
  constructor({ maxSize: t, size: s }) {
    super("Blob size is too large.", { metaMessages: [`Max: ${t} bytes`, `Given: ${s} bytes`] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "BlobSizeTooLargeError" });
  }
}
class Fe extends E {
  constructor() {
    super("Blob data must not be empty."), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "EmptyBlobError" });
  }
}
class at extends E {
  constructor({ hash: t, size: s }) {
    super(`Versioned hash "${t}" size is invalid.`, { metaMessages: ["Expected: 32", `Received: ${s}`] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidVersionedHashSizeError" });
  }
}
class nt extends E {
  constructor({ hash: t, version: s }) {
    super(`Versioned hash "${t}" version is invalid.`, { metaMessages: [`Expected: ${Ce}`, `Received: ${s}`] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "InvalidVersionedHashVersionError" });
  }
}
function ot(e) {
  const t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"), s = typeof e.data == "string" ? S(e.data) : e.data, a = pe(s);
  if (!a) throw new Fe();
  if (a > ue) throw new rt({ maxSize: ue, size: a });
  const r = [];
  let n = true, o = 0;
  for (; n; ) {
    const i = be(new Uint8Array(Be));
    let c = 0;
    for (; c < se; ) {
      const u = s.slice(o, o + (Ee - 1));
      if (i.pushByte(0), i.pushBytes(u), u.length < 31) {
        i.pushByte(128), n = false;
        break;
      }
      c++, o += 31;
    }
    r.push(i);
  }
  return t === "bytes" ? r.map((i) => i.bytes) : r.map((i) => P(i.bytes));
}
function it(e) {
  const { data: t, kzg: s, to: a } = e, r = e.blobs ?? ot({ data: t, to: a }), n = e.commitments ?? ye({ blobs: r, kzg: s, to: a }), o = e.proofs ?? ge({ blobs: r, commitments: n, kzg: s, to: a }), i = [];
  for (let c = 0; c < r.length; c++) i.push({ blob: r[c], commitment: n[c], proof: o[c] });
  return i;
}
function ct(e) {
  const { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0) throw new Fe();
    for (const s of t) {
      const a = pe(s), r = Y(De(s, 0, 1));
      if (a !== 32) throw new at({ hash: s, size: a });
      if (r !== Ce) throw new nt({ hash: s, version: r });
    }
  }
  Ie(e);
}
function Ie(e) {
  const { chainId: t, maxPriorityFeePerGas: s, maxFeePerGas: a, to: r } = e;
  if (t <= 0) throw new R({ chainId: t });
  if (r && !F(r)) throw new I({ address: r });
  if (a && a > 2n ** 256n - 1n) throw new ee({ maxFeePerGas: a });
  if (s && a && s > a) throw new ve({ maxFeePerGas: a, maxPriorityFeePerGas: s });
}
function lt(e) {
  const { chainId: t, maxPriorityFeePerGas: s, gasPrice: a, maxFeePerGas: r, to: n } = e;
  if (t <= 0) throw new R({ chainId: t });
  if (n && !F(n)) throw new I({ address: n });
  if (s || r) throw new E("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (a && a > 2n ** 256n - 1n) throw new ee({ maxFeePerGas: a });
}
function dt(e) {
  const { chainId: t, maxPriorityFeePerGas: s, gasPrice: a, maxFeePerGas: r, to: n, accessList: o } = e;
  if (n && !F(n)) throw new I({ address: n });
  if (typeof t < "u" && t <= 0) throw new R({ chainId: t });
  if (s || r) throw new E("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (a && a > 2n ** 256n - 1n) throw new ee({ maxFeePerGas: a });
  if (o) throw new E("`accessList` is not a valid Legacy Transaction attribute.");
}
function ut(e) {
  if (e.type) return e.type;
  if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u") return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u") return "eip1559";
  if (typeof e.gasPrice < "u") return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Ae({ transaction: e });
}
function re(e) {
  if (!e || e.length === 0) return [];
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const { address: a, storageKeys: r } = e[s];
    for (let n = 0; n < r.length; n++) if (r[n].length - 2 !== 64) throw new we({ storageKey: r[n] });
    if (!F(a, { strict: false })) throw new I({ address: a });
    t.push([a, r]);
  }
  return t;
}
function ft(e, t) {
  const s = ut(e);
  return s === "eip1559" ? pt(e, t) : s === "eip2930" ? ht(e, t) : s === "eip4844" ? bt(e, t) : xt(e, t);
}
function bt(e, t) {
  const { chainId: s, gas: a, nonce: r, to: n, value: o, maxFeePerBlobGas: i, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: p, data: d } = e;
  ct(e);
  let x = e.blobVersionedHashes, h = e.sidecars;
  if (e.blobs && (typeof x > "u" || typeof h > "u")) {
    const B = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((w) => P(w)), T = e.kzg, v = ye({ blobs: B, kzg: T });
    if (typeof x > "u" && (x = st({ commitments: v })), typeof h > "u") {
      const w = ge({ blobs: B, commitments: v, kzg: T });
      h = it({ blobs: B, commitments: v, proofs: w });
    }
  }
  const U = re(p), C = [f(s), r ? f(r) : "0x", u ? f(u) : "0x", c ? f(c) : "0x", a ? f(a) : "0x", n ?? "0x", o ? f(o) : "0x", d ?? "0x", U, i ? f(i) : "0x", x ?? [], ...ae(e, t)], ne = [], oe = [], ie = [];
  if (h) for (let B = 0; B < h.length; B++) {
    const { blob: T, commitment: v, proof: w } = h[B];
    ne.push(T), oe.push(v), ie.push(w);
  }
  return J(["0x03", A(h ? [C, ne, oe, ie] : C)]);
}
function pt(e, t) {
  const { chainId: s, gas: a, nonce: r, to: n, value: o, maxFeePerGas: i, maxPriorityFeePerGas: c, accessList: u, data: p } = e;
  Ie(e);
  const d = re(u), x = [f(s), r ? f(r) : "0x", c ? f(c) : "0x", i ? f(i) : "0x", a ? f(a) : "0x", n ?? "0x", o ? f(o) : "0x", p ?? "0x", d, ...ae(e, t)];
  return J(["0x02", A(x)]);
}
function ht(e, t) {
  const { chainId: s, gas: a, data: r, nonce: n, to: o, value: i, accessList: c, gasPrice: u } = e;
  lt(e);
  const p = re(c), d = [f(s), n ? f(n) : "0x", u ? f(u) : "0x", a ? f(a) : "0x", o ?? "0x", i ? f(i) : "0x", r ?? "0x", p, ...ae(e, t)];
  return J(["0x01", A(d)]);
}
function xt(e, t) {
  const { chainId: s = 0, gas: a, data: r, nonce: n, to: o, value: i, gasPrice: c } = e;
  dt(e);
  let u = [n ? f(n) : "0x", c ? f(c) : "0x", a ? f(a) : "0x", o ?? "0x", i ? f(i) : "0x", r ?? "0x"];
  if (t) {
    const p = (() => {
      if (t.v >= 35n) return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      if (s > 0) return BigInt(s * 2) + BigInt(35n + t.v - 27n);
      const d = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== d) throw new Pe({ v: t.v });
      return d;
    })();
    u = [...u, f(p), t.r, t.s];
  } else s > 0 && (u = [...u, f(s), "0x", "0x"]);
  return A(u);
}
function ae(e, t) {
  const { r: s, s: a, v: r, yParity: n } = t ?? e;
  return typeof s > "u" ? [] : typeof a > "u" ? [] : typeof r > "u" && typeof n > "u" ? [] : [typeof n == "number" ? n ? f(1) : "0x" : r === 0n ? "0x" : r === 1n ? f(1) : r === 27n ? "0x" : f(1), ce(s), ce(a)];
}
function mt(e, t) {
  return Et(e) ? gt(e) : ft(e, t);
}
const yt = { transaction: mt };
function gt(e) {
  Bt(e);
  const { sourceHash: t, data: s, from: a, gas: r, isSystemTx: n, mint: o, to: i, value: c } = e, u = [t, a, i ?? "0x", o ? f(o) : "0x", c ? f(c) : "0x", r ? f(r) : "0x", n ? "0x1" : "0x", s ?? "0x"];
  return J(["0x7e", A(u)]);
}
function Et(e) {
  return e.type === "deposit" || typeof e.sourceHash < "u";
}
function Bt(e) {
  const { from: t, to: s } = e;
  if (t && !F(t)) throw new I({ address: t });
  if (s && !F(s)) throw new I({ address: s });
}
const l = { contracts: He, formatters: je, serializers: yt }, G = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: G + "", portal: G + "", l1StandardBridge: G + "" } });
const z = 11155111;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: z + "", portal: z + "", l1StandardBridge: z + "" } });
const H = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: H + "", portal: H + "", l1StandardBridge: H + "" } });
const O = 5;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: O + "", portal: O + "", l1StandardBridge: O + "" } });
const L = 11155111;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: L + "", portal: L + "", l1StandardBridge: L + "" } });
b({ id: 60808, name: "BOB", nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" }, rpcUrls: { default: { http: ["https://rpc.gobob.xyz"], webSocket: ["wss://rpc.gobob.xyz"] } }, blockExplorers: { default: { name: "Blockscout", url: "https://explorer.gobob.xyz" } }, contracts: { multicall3: { address: "0x63f8279bccDb75c0F38e0CD6B6A0c72a0a760FF9", blockCreated: 457045 } }, testnet: false });
b({ id: 53457, name: "DODOchain Testnet", nativeCurrency: { decimals: 18, name: "DODO", symbol: "DODO" }, rpcUrls: { default: { http: ["https://dodochain-testnet.alt.technology"], webSocket: ["wss://dodochain-testnet.alt.technology/ws"] } }, blockExplorers: { default: { name: "DODOchain Testnet (Sepolia) Explorer", url: "https://testnet-scan.dodochain.com" } }, testnet: true });
const _ = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: _ + "", portal: _ + "", l1StandardBridge: _ + "" } });
const $ = 17e3;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: $ + "", portal: $ + "", l1StandardBridge: $ + "" } });
const Ct = 11155111;
b({ ...l, id: 3397901, network: "funkiSepolia", name: "Funki Sepolia Sandbox", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: ["https://funki-testnet.alt.technology"] } }, blockExplorers: { default: { name: "Funki Sepolia Sandbox Explorer", url: "https://sepolia-sandbox.funkichain.com/" } }, testnet: true, contracts: { ...l.contracts, multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 1620204 } }, sourceId: Ct });
const V = 11155111;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: V + "", portal: V + "", l1StandardBridge: V + "" } });
const It = b({ id: 1, name: "Ethereum", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } }, blockExplorers: { default: { name: "Etherscan", url: "https://etherscan.io", apiUrl: "https://api.etherscan.io/api" } }, contracts: { ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" }, ensUniversalResolver: { address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67", blockCreated: 19258213 }, multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 14353601 } } }), N = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: N + "", portal: N + "", l1StandardBridge: N + "" } });
const M = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: M + "", portal: M + "", l1StandardBridge: M + "" } });
const j = 5;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: j + "", portal: j + "", l1StandardBridge: j + "" } });
const k = 11155111;
({ ...l, contracts: { ...l.contracts, disputeGameFactory: k + "", l2OutputOracle: k + "", portal: k + "", l1StandardBridge: k + "" } });
const K = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: K + "", portal: K + "", l1StandardBridge: K + "" } });
const Z = 11155111;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: Z + "", portal: Z + "", l1StandardBridge: Z + "" } });
const At = b({ id: 11155111, name: "Sepolia", nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: ["https://rpc.sepolia.org"] } }, blockExplorers: { default: { name: "Etherscan", url: "https://sepolia.etherscan.io", apiUrl: "https://api-sepolia.etherscan.io/api" } }, contracts: { multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 751532 }, ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" }, ensUniversalResolver: { address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC", blockCreated: 5317080 } }, testnet: true }), W = 1;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: W + "", portal: W + "", l1StandardBridge: W + "" } });
const q = 11155111;
({ ...l, contracts: { ...l.contracts, l2OutputOracle: q + "", portal: q + "", l1StandardBridge: q + "" } });
const fe = 5;
({ ...l, contracts: { ...l.contracts, portal: fe + "" } });
export {
  It as mainnet,
  At as sepolia
};
