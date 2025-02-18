const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Bu4496J_.js","assets/index-C2jH2XEK.js","assets/index-Dlk3sXhy.css"])))=>i.map(i=>d[i]);
import { fA as pe, eN as me, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let m, Re, J, b, de, ce, $, Ve, _e, xe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const he = Symbol(), ee = Object.getPrototypeOf, Y = /* @__PURE__ */ new WeakMap(), ge = (e) => e && (Y.has(e) ? Y.get(e) : ee(e) === Object.prototype || ee(e) === Array.prototype), ye = (e) => ge(e) && e[he] || null, te = (e, t = true) => {
    Y.set(e, t);
  }, z = {}, F = (e) => typeof e == "object" && e !== null, L = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakSet(), ve = (e = Object.is, t = (o, g) => new Proxy(o, g), s = (o) => F(o) && !x.has(o) && (Array.isArray(o) || !(Symbol.iterator in o)) && !(o instanceof WeakMap) && !(o instanceof WeakSet) && !(o instanceof Error) && !(o instanceof Number) && !(o instanceof Date) && !(o instanceof String) && !(o instanceof RegExp) && !(o instanceof ArrayBuffer), n = (o) => {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        throw o;
    }
  }, l = /* @__PURE__ */ new WeakMap(), c = (o, g, I = n) => {
    const v = l.get(o);
    if ((v == null ? void 0 : v[0]) === g) return v[1];
    const w = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o));
    return te(w, true), l.set(o, [
      g,
      w
    ]), Reflect.ownKeys(o).forEach((D) => {
      if (Object.getOwnPropertyDescriptor(w, D)) return;
      const E = Reflect.get(o, D), A = {
        value: E,
        enumerable: true,
        configurable: true
      };
      if (x.has(E)) te(E, false);
      else if (E instanceof Promise) delete A.value, A.get = () => I(E);
      else if (L.has(E)) {
        const [y, H] = L.get(E);
        A.value = c(y, H(), I);
      }
      Object.defineProperty(w, D, A);
    }), Object.preventExtensions(w);
  }, d = /* @__PURE__ */ new WeakMap(), f = [
    1,
    1
  ], W = (o) => {
    if (!F(o)) throw new Error("object required");
    const g = d.get(o);
    if (g) return g;
    let I = f[0];
    const v = /* @__PURE__ */ new Set(), w = (i, a = ++f[0]) => {
      I !== a && (I = a, v.forEach((r) => r(i, a)));
    };
    let D = f[1];
    const E = (i = ++f[1]) => (D !== i && !v.size && (D = i, y.forEach(([a]) => {
      const r = a[1](i);
      r > I && (I = r);
    })), I), A = (i) => (a, r) => {
      const h = [
        ...a
      ];
      h[1] = [
        i,
        ...h[1]
      ], w(h, r);
    }, y = /* @__PURE__ */ new Map(), H = (i, a) => {
      if ((z ? "production" : void 0) !== "production" && y.has(i)) throw new Error("prop listener already exists");
      if (v.size) {
        const r = a[3](A(i));
        y.set(i, [
          a,
          r
        ]);
      } else y.set(i, [
        a
      ]);
    }, Z = (i) => {
      var a;
      const r = y.get(i);
      r && (y.delete(i), (a = r[1]) == null || a.call(r));
    }, ue = (i) => (v.add(i), v.size === 1 && y.forEach(([r, h], U) => {
      if ((z ? "production" : void 0) !== "production" && h) throw new Error("remove already exists");
      const N = r[3](A(U));
      y.set(U, [
        r,
        N
      ]);
    }), () => {
      v.delete(i), v.size === 0 && y.forEach(([r, h], U) => {
        h && (h(), y.set(U, [
          r
        ]));
      });
    }), q = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o)), R = t(q, {
      deleteProperty(i, a) {
        const r = Reflect.get(i, a);
        Z(a);
        const h = Reflect.deleteProperty(i, a);
        return h && w([
          "delete",
          [
            a
          ],
          r
        ]), h;
      },
      set(i, a, r, h) {
        const U = Reflect.has(i, a), N = Reflect.get(i, a, h);
        if (U && (e(N, r) || d.has(r) && e(N, d.get(r)))) return true;
        Z(a), F(r) && (r = ye(r) || r);
        let V = r;
        if (r instanceof Promise) r.then((C) => {
          r.status = "fulfilled", r.value = C, w([
            "resolve",
            [
              a
            ],
            C
          ]);
        }).catch((C) => {
          r.status = "rejected", r.reason = C, w([
            "reject",
            [
              a
            ],
            C
          ]);
        });
        else {
          !L.has(r) && s(r) && (V = W(r));
          const C = !x.has(V) && L.get(V);
          C && H(a, C);
        }
        return Reflect.set(i, a, V, h), w([
          "set",
          [
            a
          ],
          r,
          N
        ]), true;
      }
    });
    d.set(o, R);
    const fe = [
      q,
      E,
      c,
      ue
    ];
    return L.set(R, fe), Reflect.ownKeys(o).forEach((i) => {
      const a = Object.getOwnPropertyDescriptor(o, i);
      "value" in a && (R[i] = o[i], delete a.value, delete a.writable), Object.defineProperty(q, i, a);
    }), R;
  }) => [
    W,
    L,
    x,
    e,
    t,
    s,
    n,
    l,
    c,
    d,
    f
  ], [we] = ve();
  function P(e = {}) {
    return we(e);
  }
  function j(e, t, s) {
    const n = L.get(e);
    (z ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
    let l;
    const c = [], d = n[3];
    let f = false;
    const o = d((g) => {
      c.push(g), l || (l = Promise.resolve().then(() => {
        l = void 0, f && t(c.splice(0));
      }));
    });
    return f = true, () => {
      f = false, o();
    };
  }
  function be(e, t) {
    const s = L.get(e);
    (z ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
    const [n, l, c] = s;
    return c(n, l(), t);
  }
  let u, Ie, p, _, B;
  u = P({
    history: [
      "ConnectWallet"
    ],
    view: "ConnectWallet",
    data: void 0
  });
  de = {
    state: u,
    subscribe(e) {
      return j(u, () => e(u));
    },
    push(e, t) {
      e !== u.view && (u.view = e, t && (u.data = t), u.history.push(e));
    },
    reset(e) {
      u.view = e, u.history = [
        e
      ];
    },
    replace(e) {
      u.history.length > 1 && (u.history[u.history.length - 1] = e, u.view = e);
    },
    goBack() {
      if (u.history.length > 1) {
        u.history.pop();
        const [e] = u.history.slice(-1);
        u.view = e;
      }
    },
    setData(e) {
      u.data = e;
    }
  };
  m = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
    },
    isAndroid() {
      return m.isMobile() && navigator.userAgent.toLowerCase().includes("android");
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return m.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    isTelegram() {
      return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
    },
    formatNativeUrl(e, t, s) {
      if (m.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      let n = e;
      n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
      const l = encodeURIComponent(t);
      return `${n}wc?uri=${l}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!m.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let n = e;
      if (n.startsWith("https://t.me")) {
        const c = pe.from(t).toString("base64").replace(/[=]/g, "");
        n.endsWith("/") && (n = n.slice(0, -1)), this.setWalletConnectDeepLink(n, s);
        const d = new URL(n);
        return d.searchParams.set("startapp", c), d.toString();
      }
      n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
      const l = encodeURIComponent(t);
      return `${n}wc?uri=${l}`;
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    openHref(e, t) {
      const s = this.isTelegram() ? "_blank" : t;
      window.open(e, s, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
          href: e,
          name: t
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
          href: t,
          name: "Android"
        }));
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" && localStorage.setItem(m.WCM_VERSION, "2.7.0");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = de.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    }
  };
  Ie = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https"));
  p = P({
    enabled: Ie,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0
  });
  _e = {
    state: p,
    subscribe(e) {
      return j(p.events, () => e(be(p.events[p.events.length - 1])));
    },
    initialize() {
      p.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (p.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      p.connectedWalletId = e;
    },
    click(e) {
      if (p.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: p.userSessionId,
          timestamp: Date.now(),
          data: e
        };
        p.events.push(t);
      }
    },
    track(e) {
      if (p.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: p.userSessionId,
          timestamp: Date.now(),
          data: e
        };
        p.events.push(t);
      }
    },
    view(e) {
      if (p.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: p.userSessionId,
          timestamp: Date.now(),
          data: e
        };
        p.events.push(t);
      }
    }
  };
  _ = P({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: false,
    isCustomDesktop: false,
    isCustomMobile: false,
    isDataLoaded: false,
    isUiLoaded: false
  });
  b = {
    state: _,
    subscribe(e) {
      return j(_, () => e(_));
    },
    setChains(e) {
      _.chains = e;
    },
    setWalletConnectUri(e) {
      _.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      _.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      _.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      _.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      _.isUiLoaded = e;
    },
    setIsAuth(e) {
      _.isAuth = e;
    }
  };
  B = P({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: false,
    enableExplorer: true,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0
  });
  $ = {
    state: B,
    subscribe(e) {
      return j(B, () => e(B));
    },
    setConfig(e) {
      var t, s;
      _e.initialize(), b.setChains(e.chains), b.setIsAuth(!!e.enableAuthMode), b.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), b.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)), m.setModalVersionInStorage(), Object.assign(B, e);
    }
  };
  var Oe = Object.defineProperty, se = Object.getOwnPropertySymbols, Ee = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable, ne = (e, t, s) => t in e ? Oe(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : e[t] = s, Ce = (e, t) => {
    for (var s in t || (t = {})) Ee.call(t, s) && ne(e, s, t[s]);
    if (se) for (var s of se(t)) We.call(t, s) && ne(e, s, t[s]);
    return e;
  };
  const G = "https://explorer-api.walletconnect.com", Q = "wcm", X = "js-2.7.0";
  async function K(e, t) {
    const s = Ce({
      sdkType: Q,
      sdkVersion: X
    }, t), n = new URL(e, G);
    return n.searchParams.append("projectId", $.state.projectId), Object.entries(s).forEach(([c, d]) => {
      d && n.searchParams.append(c, String(d));
    }), (await fetch(n)).json();
  }
  const M = {
    async getDesktopListings(e) {
      return K("/w3m/v1/getDesktopListings", e);
    },
    async getMobileListings(e) {
      return K("/w3m/v1/getMobileListings", e);
    },
    async getInjectedListings(e) {
      return K("/w3m/v1/getInjectedListings", e);
    },
    async getAllListings(e) {
      return K("/w3m/v1/getAllListings", e);
    },
    getWalletImageUrl(e) {
      return `${G}/w3m/v1/getWalletImage/${e}?projectId=${$.state.projectId}&sdkType=${Q}&sdkVersion=${X}`;
    },
    getAssetImageUrl(e) {
      return `${G}/w3m/v1/getAssetImage/${e}?projectId=${$.state.projectId}&sdkType=${Q}&sdkVersion=${X}`;
    }
  };
  var Le = Object.defineProperty, oe = Object.getOwnPropertySymbols, Pe = Object.prototype.hasOwnProperty, Ae = Object.prototype.propertyIsEnumerable, re = (e, t, s) => t in e ? Le(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : e[t] = s, Me = (e, t) => {
    for (var s in t || (t = {})) Pe.call(t, s) && re(e, s, t[s]);
    if (oe) for (var s of oe(t)) Ae.call(t, s) && re(e, s, t[s]);
    return e;
  };
  let ae, O, T;
  ae = m.isMobile();
  O = P({
    wallets: {
      listings: [],
      total: 0,
      page: 1
    },
    search: {
      listings: [],
      total: 0,
      page: 1
    },
    recomendedWallets: []
  });
  Re = {
    state: O,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = $.state;
      if (e === "NONE" || t === "ALL" && !e) return O.recomendedWallets;
      if (m.isArray(e)) {
        const n = {
          recommendedIds: e.join(",")
        }, { listings: l } = await M.getAllListings(n), c = Object.values(l);
        c.sort((d, f) => {
          const W = e.indexOf(d.id), o = e.indexOf(f.id);
          return W - o;
        }), O.recomendedWallets = c;
      } else {
        const { chains: s, isAuth: n } = b.state, l = s == null ? void 0 : s.join(","), c = m.isArray(t), d = {
          page: 1,
          sdks: n ? "auth_v1" : void 0,
          entries: m.RECOMMENDED_WALLET_AMOUNT,
          chains: l,
          version: 2,
          excludedIds: c ? t.join(",") : void 0
        }, { listings: f } = ae ? await M.getMobileListings(d) : await M.getDesktopListings(d);
        O.recomendedWallets = Object.values(f);
      }
      return O.recomendedWallets;
    },
    async getWallets(e) {
      const t = Me({}, e), { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: n } = $.state, { recomendedWallets: l } = O;
      if (n === "ALL") return O.wallets;
      l.length ? t.excludedIds = l.map((I) => I.id).join(",") : m.isArray(s) && (t.excludedIds = s.join(",")), m.isArray(n) && (t.excludedIds = [
        t.excludedIds,
        n
      ].filter(Boolean).join(",")), b.state.isAuth && (t.sdks = "auth_v1");
      const { page: c, search: d } = e, { listings: f, total: W } = ae ? await M.getMobileListings(t) : await M.getDesktopListings(t), o = Object.values(f), g = d ? "search" : "wallets";
      return O[g] = {
        listings: [
          ...O[g].listings,
          ...o
        ],
        total: W,
        page: c ?? 1
      }, {
        listings: o,
        total: W
      };
    },
    getWalletImageUrl(e) {
      return M.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return M.getAssetImageUrl(e);
    },
    resetSearch() {
      O.search = {
        listings: [],
        total: 0,
        page: 1
      };
    }
  };
  T = P({
    open: false
  });
  J = {
    state: T,
    subscribe(e) {
      return j(T, () => e(T));
    },
    async open(e) {
      return new Promise((t) => {
        const { isUiLoaded: s, isDataLoaded: n } = b.state;
        if (m.removeWalletConnectDeepLink(), b.setWalletConnectUri(e == null ? void 0 : e.uri), b.setChains(e == null ? void 0 : e.chains), de.reset("ConnectWallet"), s && n) T.open = true, t();
        else {
          const l = setInterval(() => {
            const c = b.state;
            c.isUiLoaded && c.isDataLoaded && (clearInterval(l), T.open = true, t());
          }, 200);
        }
      });
    },
    close() {
      T.open = false;
    }
  };
  var Se = Object.defineProperty, ie = Object.getOwnPropertySymbols, je = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, le = (e, t, s) => t in e ? Se(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : e[t] = s, Ue = (e, t) => {
    for (var s in t || (t = {})) je.call(t, s) && le(e, s, t[s]);
    if (ie) for (var s of ie(t)) De.call(t, s) && le(e, s, t[s]);
    return e;
  };
  function Te() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
  }
  let k, S;
  k = P({
    themeMode: Te() ? "dark" : "light"
  });
  ce = {
    state: k,
    subscribe(e) {
      return j(k, () => e(k));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: s } = e;
      t && (k.themeMode = t), s && (k.themeVariables = Ue({}, s));
    }
  };
  S = P({
    open: false,
    message: "",
    variant: "success"
  });
  Ve = {
    state: S,
    subscribe(e) {
      return j(S, () => e(S));
    },
    openToast(e, t) {
      S.open = true, S.message = e, S.variant = t;
    },
    closeToast() {
      S.open = false;
    }
  };
  class $e {
    constructor(t) {
      this.openModal = J.open, this.closeModal = J.close, this.subscribeModal = J.subscribe, this.setTheme = ce.setThemeConfig, ce.setThemeConfig(t), $.setConfig(t), this.initUi();
    }
    async initUi() {
      if (typeof window < "u") {
        await me(() => import("./index-Bu4496J_.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0,1,2]));
        const t = document.createElement("wcm-modal");
        document.body.insertAdjacentElement("beforeend", t), b.setIsUiLoaded(true);
      }
    }
  }
  xe = Object.freeze(Object.defineProperty({
    __proto__: null,
    WalletConnectModal: $e
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  m as C,
  Re as E,
  J as M,
  b as O,
  de as R,
  ce as T,
  __tla,
  $ as a,
  Ve as b,
  _e as c,
  xe as i
};
