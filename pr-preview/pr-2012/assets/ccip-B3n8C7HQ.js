import { C as d, f7 as m, c7 as y, aU as g, bY as k, f8 as O, bz as x, aX as E, ax as h, bZ as L, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let q, v, S, j;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  class R extends d {
    constructor({ callbackSelector: a, cause: e, data: n, extraData: o, sender: c, urls: r }) {
      var _a;
      super(e.shortMessage || "An error occurred while fetching for an offchain result.", {
        cause: e,
        metaMessages: [
          ...e.metaMessages || [],
          ((_a = e.metaMessages) == null ? void 0 : _a.length) ? "" : [],
          "Offchain Gateway Call:",
          r && [
            "  Gateway URL(s):",
            ...r.map((u) => `    ${m(u)}`)
          ],
          `  Sender: ${c}`,
          `  Data: ${n}`,
          `  Callback selector: ${a}`,
          `  Extra data: ${o}`
        ].flat()
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "OffchainLookupError"
      });
    }
  }
  class M extends d {
    constructor({ result: a, url: e }) {
      super("Offchain gateway response is malformed. Response data must be a hex value.", {
        metaMessages: [
          `Gateway URL: ${m(e)}`,
          `Response: ${y(a)}`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "OffchainLookupResponseMalformedError"
      });
    }
  }
  class $ extends d {
    constructor({ sender: a, to: e }) {
      super("Reverted sender address does not match target contract address (`to`).", {
        metaMessages: [
          `Contract address: ${e}`,
          `OffchainLookup sender address: ${a}`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "OffchainLookupSenderMismatchError"
      });
    }
  }
  j = "0x556f1830";
  S = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "urls",
        type: "string[]"
      },
      {
        name: "callData",
        type: "bytes"
      },
      {
        name: "callbackFunction",
        type: "bytes4"
      },
      {
        name: "extraData",
        type: "bytes"
      }
    ]
  };
  v = async function(i, { blockNumber: a, blockTag: e, data: n, to: o }) {
    const { args: c } = g({
      data: n,
      abi: [
        S
      ]
    }), [r, u, t, s, p] = c, { ccipRead: f } = i, b = f && typeof (f == null ? void 0 : f.request) == "function" ? f.request : q;
    try {
      if (!k(o, r)) throw new $({
        sender: r,
        to: o
      });
      const l = await b({
        data: t,
        sender: r,
        urls: u
      }), { data: w } = await O(i, {
        blockNumber: a,
        blockTag: e,
        data: x([
          s,
          E([
            {
              type: "bytes"
            },
            {
              type: "bytes"
            }
          ], [
            l,
            p
          ])
        ]),
        to: o
      });
      return w;
    } catch (l) {
      throw new R({
        callbackSelector: s,
        cause: l,
        data: n,
        extraData: p,
        sender: r,
        urls: u
      });
    }
  };
  q = async function({ data: i, sender: a, urls: e }) {
    var _a;
    let n = new Error("An unknown error occurred.");
    for (let o = 0; o < e.length; o++) {
      const c = e[o], r = c.includes("{data}") ? "GET" : "POST", u = r === "POST" ? {
        data: i,
        sender: a
      } : void 0;
      try {
        const t = await fetch(c.replace("{sender}", a).replace("{data}", i), {
          body: JSON.stringify(u),
          method: r
        });
        let s;
        if (((_a = t.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json")) ? s = (await t.json()).data : s = await t.text(), !t.ok) {
          n = new h({
            body: u,
            details: (s == null ? void 0 : s.error) ? y(s.error) : t.statusText,
            headers: t.headers,
            status: t.status,
            url: c
          });
          continue;
        }
        if (!L(s)) {
          n = new M({
            result: s,
            url: c
          });
          continue;
        }
        return s;
      } catch (t) {
        n = new h({
          body: u,
          details: t.message,
          url: c
        });
      }
    }
    throw n;
  };
});
export {
  __tla,
  q as ccipRequest,
  v as offchainLookup,
  S as offchainLookupAbiItem,
  j as offchainLookupSignature
};
