import { fJ as N, bl as C, bg as _, C as w, ab as T, bX as P, aA as v, al as z, at as k, fK as j, c3 as J, bN as M, c4 as O, fL as R, fM as X, fN as Y, aE as q, ba as D, bo as o, bB as I, bt as Q, bv as W, bw as Z, bx as $, aC as ee, c8 as U, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let S, ie, re, le, F, de, E, g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  g = function(n, e = "hex") {
    const s = H(n), i = N(new Uint8Array(s.length));
    return s.encode(i), e === "hex" ? C(i.bytes) : i.bytes;
  };
  function H(n) {
    return Array.isArray(n) ? ne(n.map((e) => H(e))) : te(n);
  }
  function ne(n) {
    const e = n.reduce((t, r) => t + r.length, 0), s = V(e);
    return {
      length: e <= 55 ? 1 + e : 1 + s + e,
      encode(t) {
        e <= 55 ? t.pushByte(192 + e) : (t.pushByte(247 + s), s === 1 ? t.pushUint8(e) : s === 2 ? t.pushUint16(e) : s === 3 ? t.pushUint24(e) : t.pushUint32(e));
        for (const { encode: r } of n) r(t);
      }
    };
  }
  function te(n) {
    const e = typeof n == "string" ? _(n) : n, s = V(e.length);
    return {
      length: e.length === 1 && e[0] < 128 ? 1 : e.length <= 55 ? 1 + e.length : 1 + s + e.length,
      encode(t) {
        e.length === 1 && e[0] < 128 ? t.pushBytes(e) : e.length <= 55 ? (t.pushByte(128 + e.length), t.pushBytes(e)) : (t.pushByte(183 + s), s === 1 ? t.pushUint8(e.length) : s === 2 ? t.pushUint16(e.length) : s === 3 ? t.pushUint24(e.length) : t.pushUint32(e.length), t.pushBytes(e));
      }
    };
  }
  function V(n) {
    if (n < 2 ** 8) return 1;
    if (n < 2 ** 16) return 2;
    if (n < 2 ** 24) return 3;
    if (n < 2 ** 32) return 4;
    throw new w("Length is too large.");
  }
  function se(n) {
    const { blobVersionedHashes: e } = n;
    if (e) {
      if (e.length === 0) throw new j();
      for (const s of e) {
        const i = J(s), t = M(O(s, 0, 1));
        if (i !== 32) throw new R({
          hash: s,
          size: i
        });
        if (t !== X) throw new Y({
          hash: s,
          version: t
        });
      }
    }
    S(n);
  }
  S = function(n) {
    const { chainId: e, maxPriorityFeePerGas: s, maxFeePerGas: i, to: t } = n;
    if (e <= 0) throw new T({
      chainId: e
    });
    if (t && !P(t)) throw new v({
      address: t
    });
    if (i && i > 2n ** 256n - 1n) throw new z({
      maxFeePerGas: i
    });
    if (s && i && s > i) throw new k({
      maxFeePerGas: i,
      maxPriorityFeePerGas: s
    });
  };
  ie = function(n) {
    const { chainId: e, maxPriorityFeePerGas: s, gasPrice: i, maxFeePerGas: t, to: r } = n;
    if (e <= 0) throw new T({
      chainId: e
    });
    if (r && !P(r)) throw new v({
      address: r
    });
    if (s || t) throw new w("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
    if (i && i > 2n ** 256n - 1n) throw new z({
      maxFeePerGas: i
    });
  };
  re = function(n) {
    const { chainId: e, maxPriorityFeePerGas: s, gasPrice: i, maxFeePerGas: t, to: r, accessList: f } = n;
    if (r && !P(r)) throw new v({
      address: r
    });
    if (typeof e < "u" && e <= 0) throw new T({
      chainId: e
    });
    if (s || t) throw new w("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
    if (i && i > 2n ** 256n - 1n) throw new z({
      maxFeePerGas: i
    });
    if (f) throw new w("`accessList` is not a valid Legacy Transaction attribute.");
  };
  E = function(n) {
    if (!n || n.length === 0) return [];
    const e = [];
    for (let s = 0; s < n.length; s++) {
      const { address: i, storageKeys: t } = n[s];
      for (let r = 0; r < t.length; r++) if (t[r].length - 2 !== 64) throw new q({
        storageKey: t[r]
      });
      if (!P(i, {
        strict: false
      })) throw new v({
        address: i
      });
      e.push([
        i,
        t
      ]);
    }
    return e;
  };
  le = function(n, e) {
    const s = D(n);
    return s === "eip1559" ? ae(n, e) : s === "eip2930" ? fe(n, e) : s === "eip4844" ? oe(n, e) : ce(n, e);
  };
  function oe(n, e) {
    const { chainId: s, gas: i, nonce: t, to: r, value: f, maxFeePerBlobGas: c, maxFeePerGas: h, maxPriorityFeePerGas: a, accessList: d, data: l } = n;
    se(n);
    let u = n.blobVersionedHashes, x = n.sidecars;
    if (n.blobs && (typeof u > "u" || typeof x > "u")) {
      const y = typeof n.blobs[0] == "string" ? n.blobs : n.blobs.map((p) => C(p)), m = n.kzg, b = Q({
        blobs: y,
        kzg: m
      });
      if (typeof u > "u" && (u = W({
        commitments: b
      })), typeof x > "u") {
        const p = Z({
          blobs: y,
          commitments: b,
          kzg: m
        });
        x = $({
          blobs: y,
          commitments: b,
          proofs: p
        });
      }
    }
    const K = E(d), L = [
      o(s),
      t ? o(t) : "0x",
      a ? o(a) : "0x",
      h ? o(h) : "0x",
      i ? o(i) : "0x",
      r ?? "0x",
      f ? o(f) : "0x",
      l ?? "0x",
      K,
      c ? o(c) : "0x",
      u ?? [],
      ...F(n, e)
    ], B = [], G = [], A = [];
    if (x) for (let y = 0; y < x.length; y++) {
      const { blob: m, commitment: b, proof: p } = x[y];
      B.push(m), G.push(b), A.push(p);
    }
    return I([
      "0x03",
      g(x ? [
        L,
        B,
        G,
        A
      ] : L)
    ]);
  }
  function ae(n, e) {
    const { chainId: s, gas: i, nonce: t, to: r, value: f, maxFeePerGas: c, maxPriorityFeePerGas: h, accessList: a, data: d } = n;
    S(n);
    const l = E(a), u = [
      o(s),
      t ? o(t) : "0x",
      h ? o(h) : "0x",
      c ? o(c) : "0x",
      i ? o(i) : "0x",
      r ?? "0x",
      f ? o(f) : "0x",
      d ?? "0x",
      l,
      ...F(n, e)
    ];
    return I([
      "0x02",
      g(u)
    ]);
  }
  function fe(n, e) {
    const { chainId: s, gas: i, data: t, nonce: r, to: f, value: c, accessList: h, gasPrice: a } = n;
    ie(n);
    const d = E(h), l = [
      o(s),
      r ? o(r) : "0x",
      a ? o(a) : "0x",
      i ? o(i) : "0x",
      f ?? "0x",
      c ? o(c) : "0x",
      t ?? "0x",
      d,
      ...F(n, e)
    ];
    return I([
      "0x01",
      g(l)
    ]);
  }
  function ce(n, e) {
    const { chainId: s = 0, gas: i, data: t, nonce: r, to: f, value: c, gasPrice: h } = n;
    re(n);
    let a = [
      r ? o(r) : "0x",
      h ? o(h) : "0x",
      i ? o(i) : "0x",
      f ?? "0x",
      c ? o(c) : "0x",
      t ?? "0x"
    ];
    if (e) {
      const d = (() => {
        if (e.v >= 35n) return (e.v - 35n) / 2n > 0 ? e.v : 27n + (e.v === 35n ? 0n : 1n);
        if (s > 0) return BigInt(s * 2) + BigInt(35n + e.v - 27n);
        const l = 27n + (e.v === 27n ? 0n : 1n);
        if (e.v !== l) throw new ee({
          v: e.v
        });
        return l;
      })();
      a = [
        ...a,
        o(d),
        e.r,
        e.s
      ];
    } else s > 0 && (a = [
      ...a,
      o(s),
      "0x",
      "0x"
    ]);
    return g(a);
  }
  F = function(n, e) {
    const { r: s, s: i, v: t, yParity: r } = e ?? n;
    return typeof s > "u" ? [] : typeof i > "u" ? [] : typeof t > "u" && typeof r > "u" ? [] : [
      typeof r == "number" ? r ? o(1) : "0x" : t === 0n ? "0x" : t === 1n ? o(1) : t === 27n ? "0x" : o(1),
      U(s),
      U(i)
    ];
  };
  de = 2n ** 16n - 1n;
});
export {
  __tla,
  S as a,
  ie as b,
  re as c,
  le as d,
  F as e,
  de as m,
  E as s,
  g as t
};
