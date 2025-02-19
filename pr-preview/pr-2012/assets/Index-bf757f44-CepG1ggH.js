import { cb as R, cc as N, cd as M, ce as O, cf as _, cg as T, ch as w, ci as A, cj as G, ck as C, cA as me, cB as J, cq as Z, cr as _e, cs as we, ct as H, cX as Ce, cp as m, cn as h, d3 as ze, cv as D, cL as Te, cM as je, cN as xe, cW as Le, dv as Pe, cy as I, dw as Se, dj as V, cw as F, cl as g, cm as S, cH as ye, cx as $, co as x, dx as Y, dy as W, cK as be, cZ as B, dz as Ee, cu as he, dA as U, dB as X, dC as Q, cJ as Ie, cO as q, cP as E, dD as ee, dE as te, dF as Re, dG as L, cR as K, dH as Ne, dI as ge, d4 as Me, dJ as Oe, du as ke, dK as He, d9 as De, c$ as Fe, __tla as __tla_0 } from "./index-AGa8OPve.js";
let ht;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function $e(i, { from: e, to: t }, n = {}) {
    const o = getComputedStyle(i), r = o.transform === "none" ? "" : o.transform, [d, l] = o.transformOrigin.split(" ").map(parseFloat), s = e.left + e.width * d / t.width - (t.left + d), a = e.top + e.height * l / t.height - (t.top + l), { delay: c = 0, duration: f = (u) => Math.sqrt(u) * 120, easing: v = ge } = n;
    return {
      delay: c,
      duration: Fe(f) ? f(Math.sqrt(s * s + a * a)) : f,
      easing: v,
      css: (u, b) => {
        const p = b * s, y = b * a, z = u + b * e.width / t.width, j = u + b * e.height / t.height;
        return `transform: ${r} translate(${p}px, ${y}px) scale(${z}, ${j});`;
      }
    };
  }
  function Ae(i) {
    O(i, "svelte-13cuwwo", "div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}");
  }
  function Ge(i) {
    let e, t;
    return {
      c() {
        e = h("div"), m(e, "class", "border svelte-13cuwwo"), m(e, "style", t = `
    width: ${i[2] - i[3] * 2}px; 
    height: ${i[2] - i[3] * 2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `);
      },
      m(n, o) {
        C(n, e, o), e.innerHTML = i[0];
      },
      p(n, [o]) {
        o & 1 && (e.innerHTML = n[0]), o & 30 && t !== (t = `
    width: ${n[2] - n[3] * 2}px; 
    height: ${n[2] - n[3] * 2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `) && m(e, "style", t);
      },
      i: I,
      o: I,
      d(n) {
        n && _(e);
      }
    };
  }
  function Be(i, e, t) {
    let { icon: n } = e, { borderColorVar: o } = e, { size: r } = e, { padding: d = 0 } = e, { background: l = "transparent" } = e;
    return i.$$set = (s) => {
      "icon" in s && t(0, n = s.icon), "borderColorVar" in s && t(1, o = s.borderColorVar), "size" in s && t(2, r = s.size), "padding" in s && t(3, d = s.padding), "background" in s && t(4, l = s.background);
    }, [
      n,
      o,
      r,
      d,
      l
    ];
  }
  class Ve extends R {
    constructor(e) {
      super(), N(this, e, Be, Ge, M, {
        icon: 0,
        borderColorVar: 1,
        size: 2,
        padding: 3,
        background: 4
      }, Ae);
    }
  }
  function We(i) {
    O(i, "svelte-jvic9v", "div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}");
  }
  function ne(i) {
    let e, t, n, o, r = L[i[1].type].eventIcon + "", d, l, s, a = !i[1].id.includes("customNotification") && !i[1].id.includes("preflight"), c, f = i[1].type === "pending" && ie(), v = a && oe(i);
    return {
      c() {
        e = h("div"), f && f.c(), t = x(), n = h("div"), o = h("div"), s = x(), v && v.c(), m(o, "class", d = V(`notification-icon flex items-center justify-center ${i[1].type === "pending" ? "pending-icon" : ""}`) + " svelte-jvic9v"), m(n, "class", "flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"), m(n, "style", l = `background:${L[i[1].type].backgroundColor}; color: ${L[i[1].type].iconColor || ""}; ${i[1].type === "pending" ? "height: 28px; width: 28px; margin: 2px;" : `border: 2px solid ${L[i[1].type].borderColor}`}; `), m(e, "class", "relative");
      },
      m(u, b) {
        C(u, e, b), f && f.m(e, null), g(e, t), g(e, n), g(n, o), o.innerHTML = r, g(e, s), v && v.m(e, null), c = true;
      },
      p(u, b) {
        u[1].type === "pending" ? f || (f = ie(), f.c(), f.m(e, t)) : f && (f.d(1), f = null), (!c || b & 2) && r !== (r = L[u[1].type].eventIcon + "") && (o.innerHTML = r), (!c || b & 2 && d !== (d = V(`notification-icon flex items-center justify-center ${u[1].type === "pending" ? "pending-icon" : ""}`) + " svelte-jvic9v")) && m(o, "class", d), (!c || b & 2 && l !== (l = `background:${L[u[1].type].backgroundColor}; color: ${L[u[1].type].iconColor || ""}; ${u[1].type === "pending" ? "height: 28px; width: 28px; margin: 2px;" : `border: 2px solid ${L[u[1].type].borderColor}`}; `)) && m(n, "style", l), b & 2 && (a = !u[1].id.includes("customNotification") && !u[1].id.includes("preflight")), a ? v ? (v.p(u, b), b & 2 && w(v, 1)) : (v = oe(u), v.c(), w(v, 1), v.m(e, null)) : v && (A(), T(v, 1, 1, () => {
          v = null;
        }), G());
      },
      i(u) {
        c || (w(v), c = true);
      },
      o(u) {
        T(v), c = false;
      },
      d(u) {
        u && _(e), f && f.d(), v && v.d();
      }
    };
  }
  function ie(i) {
    let e;
    return {
      c() {
        e = h("div"), m(e, "class", "border-action absolute svelte-jvic9v");
      },
      m(t, n) {
        C(t, e, n);
      },
      d(t) {
        t && _(e);
      }
    };
  }
  function oe(i) {
    let e, t, n;
    return t = new Ve({
      props: {
        icon: i[0].icon,
        size: 16,
        background: i[0].color,
        borderColorVar: "--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",
        padding: 3
      }
    }), {
      c() {
        e = h("div"), $(t.$$.fragment), m(e, "class", "absolute chain-icon-container svelte-jvic9v");
      },
      m(o, r) {
        C(o, e, r), F(t, e, null), n = true;
      },
      p(o, r) {
        const d = {};
        r & 1 && (d.icon = o[0].icon), r & 1 && (d.background = o[0].color), t.$set(d);
      },
      i(o) {
        n || (w(t.$$.fragment, o), n = true);
      },
      o(o) {
        T(t.$$.fragment, o), n = false;
      },
      d(o) {
        o && _(e), D(t);
      }
    };
  }
  function Ke(i) {
    let e, t, n = i[1].type && ne(i);
    return {
      c() {
        n && n.c(), e = me();
      },
      m(o, r) {
        n && n.m(o, r), C(o, e, r), t = true;
      },
      p(o, [r]) {
        o[1].type ? n ? (n.p(o, r), r & 2 && w(n, 1)) : (n = ne(o), n.c(), w(n, 1), n.m(e.parentNode, e)) : n && (A(), T(n, 1, 1, () => {
          n = null;
        }), G());
      },
      i(o) {
        t || (w(n), t = true);
      },
      o(o) {
        T(n), t = false;
      },
      d(o) {
        n && n.d(o), o && _(e);
      }
    };
  }
  function qe(i, e, t) {
    let { chainStyles: n = Ie } = e, { notification: o } = e;
    return i.$$set = (r) => {
      "chainStyles" in r && t(0, n = r.chainStyles), "notification" in r && t(1, o = r.notification);
    }, [
      n,
      o
    ];
  }
  class Ze extends R {
    constructor(e) {
      super(), N(this, e, qe, Ke, M, {
        chainStyles: 0,
        notification: 1
      }, We);
    }
  }
  function Je(i) {
    O(i, "svelte-pm7idu", `div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`);
  }
  function re(i) {
    let e, t, n = i[2](i[1] - i[0]) + "", o, r;
    return {
      c() {
        e = E(`-
    `), t = h("span"), o = E(n), r = E(`
    ago`), m(t, "class", "svelte-pm7idu");
      },
      m(d, l) {
        C(d, e, l), C(d, t, l), g(t, o), C(d, r, l);
      },
      p(d, l) {
        l & 3 && n !== (n = d[2](d[1] - d[0]) + "") && q(o, n);
      },
      d(d) {
        d && _(e), d && _(t), d && _(r);
      }
    };
  }
  function Ye(i) {
    let e, t = i[0] && re(i);
    return {
      c() {
        e = h("div"), t && t.c(), m(e, "class", "time svelte-pm7idu");
      },
      m(n, o) {
        C(n, e, o), t && t.m(e, null);
      },
      p(n, [o]) {
        n[0] ? t ? t.p(n, o) : (t = re(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null);
      },
      i: I,
      o: I,
      d(n) {
        n && _(e), t && t.d();
      }
    };
  }
  function Ue(i, e, t) {
    let n, o;
    H(i, ke, (a) => t(3, n = a)), H(i, He, (a) => t(4, o = a));
    let { startTime: r } = e;
    function d(a) {
      const c = Math.floor(a / 1e3), f = c < 0 ? 0 : c;
      return f >= 60 ? `${Math.floor(f / 60).toLocaleString(o)} ${n("notify.time.minutes")}` : `${f.toLocaleString(o)} ${n("notify.time.seconds")}`;
    }
    let l = Date.now();
    const s = setInterval(() => {
      t(1, l = Date.now());
    }, 1e3);
    return he(() => {
      clearInterval(s);
    }), i.$$set = (a) => {
      "startTime" in a && t(0, r = a.startTime);
    }, [
      r,
      l,
      d
    ];
  }
  class Xe extends R {
    constructor(e) {
      super(), N(this, e, Ue, Ye, M, {
        startTime: 0
      }, Je);
    }
  }
  function Qe(i) {
    O(i, "svelte-1otz6tt", `div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`);
  }
  function ae(i) {
    let e, t, n, o;
    function r(s, a) {
      return s[0].link ? tt : et;
    }
    let d = r(i), l = d(i);
    return n = new Xe({
      props: {
        startTime: i[0].startTime
      }
    }), {
      c() {
        e = h("span"), l.c(), t = x(), $(n.$$.fragment), m(e, "class", "hash-time svelte-1otz6tt");
      },
      m(s, a) {
        C(s, e, a), l.m(e, null), g(e, t), F(n, e, null), o = true;
      },
      p(s, a) {
        d === (d = r(s)) && l ? l.p(s, a) : (l.d(1), l = d(s), l && (l.c(), l.m(e, t)));
        const c = {};
        a & 1 && (c.startTime = s[0].startTime), n.$set(c);
      },
      i(s) {
        o || (w(n.$$.fragment, s), o = true);
      },
      o(s) {
        T(n.$$.fragment, s), o = false;
      },
      d(s) {
        s && _(e), l.d(), D(n);
      }
    };
  }
  function et(i) {
    let e, t = K(i[0].id) + "", n;
    return {
      c() {
        e = h("div"), n = E(t), m(e, "class", "address-hash svelte-1otz6tt");
      },
      m(o, r) {
        C(o, e, r), g(e, n);
      },
      p(o, r) {
        r & 1 && t !== (t = K(o[0].id) + "") && q(n, t);
      },
      d(o) {
        o && _(e);
      }
    };
  }
  function tt(i) {
    let e, t = K(i[0].id) + "", n, o;
    return {
      c() {
        e = h("a"), n = E(t), m(e, "class", "address-hash svelte-1otz6tt"), m(e, "href", o = i[0].link), m(e, "target", "_blank"), m(e, "rel", "noreferrer noopener");
      },
      m(r, d) {
        C(r, e, d), g(e, n);
      },
      p(r, d) {
        d & 1 && t !== (t = K(r[0].id) + "") && q(n, t), d & 1 && o !== (o = r[0].link) && m(e, "href", o);
      },
      d(r) {
        r && _(e);
      }
    };
  }
  function nt(i) {
    let e, t, n = i[0].message + "", o, r, d = i[0].id && !i[0].id.includes("customNotification") && !i[0].id.includes("preflight"), l, s = d && ae(i);
    return {
      c() {
        e = h("div"), t = h("span"), o = E(n), r = x(), s && s.c(), m(t, "class", "transaction-status svelte-1otz6tt"), m(e, "class", "flex flex-column notify-transaction-data svelte-1otz6tt");
      },
      m(a, c) {
        C(a, e, c), g(e, t), g(t, o), g(e, r), s && s.m(e, null), l = true;
      },
      p(a, [c]) {
        (!l || c & 1) && n !== (n = a[0].message + "") && q(o, n), c & 1 && (d = a[0].id && !a[0].id.includes("customNotification") && !a[0].id.includes("preflight")), d ? s ? (s.p(a, c), c & 1 && w(s, 1)) : (s = ae(a), s.c(), w(s, 1), s.m(e, null)) : s && (A(), T(s, 1, 1, () => {
          s = null;
        }), G());
      },
      i(a) {
        l || (w(s), l = true);
      },
      o(a) {
        T(s), l = false;
      },
      d(a) {
        a && _(e), s && s.d();
      }
    };
  }
  function it(i, e, t) {
    let { notification: n } = e;
    return i.$$set = (o) => {
      "notification" in o && t(0, n = o.notification);
    }, [
      n
    ];
  }
  class ot extends R {
    constructor(e) {
      super(), N(this, e, it, nt, M, {
        notification: 0
      }, Qe);
    }
  }
  var rt = `
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;
  const at = [
    "txPool"
  ], lt = [
    "main",
    "matic-main"
  ], st = [
    "Ledger",
    "Trezor",
    "Keystone",
    "KeepKey",
    "D'CENT"
  ], le = (i) => at.includes(i), se = (i) => lt.includes(i), ce = (i) => i && st.includes(i.label);
  async function de({ type: i, wallet: e, transaction: t }) {
    const { from: n, input: o, value: r, to: d, nonce: l, gas: s, network: a } = t, c = W[a], { gasPriceProbability: f } = Z.get().notify.replacement, { gas: v } = J;
    if (!v) return;
    const [u] = await v.get({
      chains: [
        W[a]
      ],
      endpoint: "blockPrices"
    }), { maxFeePerGas: b, maxPriorityFeePerGas: p } = u.blockPrices[0].estimatedPrices.find(({ confidence: k }) => k === (i === "speedup" ? f == null ? void 0 : f.speedup : f == null ? void 0 : f.cancel)) || {};
    if (!b || !p) return;
    const y = ee(b), z = ee(p), j = o === "0x" ? {} : {
      data: o
    };
    return e.provider.request({
      method: "eth_sendTransaction",
      params: [
        Object.assign({
          type: "0x2",
          from: n,
          to: i === "cancel" ? n : d,
          chainId: parseInt(c),
          value: Re(BigInt(r)),
          nonce: te(l),
          gasLimit: te(s),
          maxFeePerGas: y,
          maxPriorityFeePerGas: z
        }, j)
      ]
    });
  }
  function ct(i) {
    O(i, "svelte-ftkynd", `.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`);
  }
  function fe(i) {
    let e, t, n, o, r, d;
    return {
      c() {
        e = h("div"), t = h("button"), t.textContent = "Cancel", n = x(), o = h("button"), o.textContent = "Speed-up", m(t, "class", "dropdown-button svelte-ftkynd"), m(o, "class", "dropdown-button svelte-ftkynd"), m(e, "class", "dropdown-buttons flex items-center justify-end svelte-ftkynd");
      },
      m(l, s) {
        C(l, e, s), g(e, t), g(e, n), g(e, o), r || (d = [
          S(t, "click", i[10]),
          S(o, "click", i[11])
        ], r = true);
      },
      p: I,
      d(l) {
        l && _(e), r = false, be(d);
      }
    };
  }
  function dt(i) {
    let e, t, n, o, r, d, l, s, a, c, f, v, u, b;
    n = new Ze({
      props: {
        notification: i[0],
        chainStyles: Y[W[i[0].network]]
      }
    }), r = new ot({
      props: {
        notification: i[0]
      }
    });
    let p = i[0].eventCode === "txPool" && fe(i);
    return {
      c() {
        e = h("div"), t = h("div"), $(n.$$.fragment), o = x(), $(r.$$.fragment), d = x(), l = h("div"), s = h("div"), a = x(), c = h("div"), p && p.c(), m(s, "class", "flex items-center close-icon svelte-ftkynd"), m(l, "class", "notify-close-btn notify-close-btn-" + i[4].type + " pointer flex svelte-ftkynd"), m(t, "class", "flex bn-notify-notification-inner svelte-ftkynd"), m(c, "class", "dropdown svelte-ftkynd"), B(c, "dropdown-visible", i[2] && i[5] && le(i[0].eventCode) && se(i[0].network) && ce(i[7])), m(e, "class", f = "bn-notify-notification bn-notify-notification-" + i[0].type + "} svelte-ftkynd"), B(e, "bn-notify-clickable", i[0].onClick);
      },
      m(y, z) {
        C(y, e, z), g(e, t), F(n, t, null), g(t, o), F(r, t, null), g(t, d), g(t, l), g(l, s), s.innerHTML = rt, g(e, a), g(e, c), p && p.m(c, null), v = true, u || (b = [
          S(l, "click", ye(i[9])),
          S(e, "mouseenter", i[12]),
          S(e, "mouseleave", i[13]),
          S(e, "click", i[8])
        ], u = true);
      },
      p(y, [z]) {
        const j = {};
        z & 1 && (j.notification = y[0]), z & 1 && (j.chainStyles = Y[W[y[0].network]]), n.$set(j);
        const k = {};
        z & 1 && (k.notification = y[0]), r.$set(k), y[0].eventCode === "txPool" ? p ? p.p(y, z) : (p = fe(y), p.c(), p.m(c, null)) : p && (p.d(1), p = null), (!v || z & 165) && B(c, "dropdown-visible", y[2] && y[5] && le(y[0].eventCode) && se(y[0].network) && ce(y[7])), (!v || z & 1 && f !== (f = "bn-notify-notification bn-notify-notification-" + y[0].type + "} svelte-ftkynd")) && m(e, "class", f), (!v || z & 1) && B(e, "bn-notify-clickable", y[0].onClick);
      },
      i(y) {
        v || (w(n.$$.fragment, y), w(r.$$.fragment, y), v = true);
      },
      o(y) {
        T(n.$$.fragment, y), T(r.$$.fragment, y), v = false;
      },
      d(y) {
        y && _(e), D(n), D(r), p && p.d(), u = false, be(b);
      }
    };
  }
  function ft(i, e, t) {
    let n, o;
    H(i, De, (k) => t(15, n = k)), H(i, ke, (k) => t(3, o = k));
    const { device: r, gas: d } = J;
    let { notification: l } = e, { updateParentOnRemove: s } = e, a, c = false;
    const f = Ee.getValue().find(({ hash: k }) => k === l.id), v = f && n.find(({ accounts: k }) => !!k.find(({ address: P }) => P.toLowerCase() === f.from.toLowerCase()));
    function u(k) {
      (l == null ? void 0 : l.onClick) && l.onClick(k);
    }
    he(() => {
      clearTimeout(a);
    });
    const b = () => {
      U(l.id), X(l.id), s();
    }, p = async () => {
      try {
        await de({
          type: "cancel",
          wallet: v,
          transaction: f
        });
      } catch {
        const P = `${f.hash.slice(0, 9)}:txReplaceError${f.hash.slice(-5)}`;
        Q({
          id: P,
          type: "hint",
          eventCode: "txError",
          message: o("notify.transaction.txReplaceError"),
          key: P,
          autoDismiss: 4e3
        });
      }
    }, y = async () => {
      try {
        await de({
          type: "speedup",
          wallet: v,
          transaction: f
        });
      } catch {
        const P = `${f.hash.slice(0, 9)}:txReplaceError${f.hash.slice(-5)}`;
        Q({
          id: P,
          type: "hint",
          eventCode: "txError",
          message: o("notify.transaction.txReplaceError"),
          key: P,
          autoDismiss: 4e3
        });
      }
    }, z = () => t(2, c = true), j = () => t(2, c = false);
    return i.$$set = (k) => {
      "notification" in k && t(0, l = k.notification), "updateParentOnRemove" in k && t(1, s = k.updateParentOnRemove);
    }, i.$$.update = () => {
      i.$$.dirty & 1 && l.autoDismiss && (a = setTimeout(() => {
        U(l.id), X(l.id);
      }, l.autoDismiss));
    }, [
      l,
      s,
      c,
      o,
      r,
      d,
      f,
      v,
      u,
      b,
      p,
      y,
      z,
      j
    ];
  }
  class ut extends R {
    constructor(e) {
      super(), N(this, e, ft, dt, M, {
        notification: 0,
        updateParentOnRemove: 1
      }, ct);
    }
  }
  function vt(i) {
    O(i, "svelte-1h8mmo3", `ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`);
  }
  function ue(i, e, t) {
    const n = i.slice();
    return n[12] = e[t], n;
  }
  function ve(i) {
    let e, t = [], n = /* @__PURE__ */ new Map(), o, r, d, l = i[2];
    const s = (a) => a[12].key;
    for (let a = 0; a < l.length; a += 1) {
      let c = ue(i, l, a), f = s(c);
      n.set(f, t[a] = pe(f, c));
    }
    return {
      c() {
        e = h("ul");
        for (let a = 0; a < t.length; a += 1) t[a].c();
        m(e, "class", o = "bn-notify-" + i[0] + " " + i[5] + " svelte-1h8mmo3"), m(e, "style", r = `${i[0].includes("top") ? "justify-content:flex-start;" : ""}; max-height: calc(100vh - ${i[6].expanded ? "412px" : i[1] && i[7].type !== "mobile" ? "82px" : !i[1] && i[7].type === "mobile" ? "108px" : "24px"})`);
      },
      m(a, c) {
        C(a, e, c);
        for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(e, null);
        d = true;
      },
      p(a, c) {
        if (c & 517) {
          l = a[2], A();
          for (let f = 0; f < t.length; f += 1) t[f].r();
          t = Ce(t, c, s, 1, a, l, n, e, Ne, pe, null, ue);
          for (let f = 0; f < t.length; f += 1) t[f].a();
          G();
        }
        (!d || c & 33 && o !== (o = "bn-notify-" + a[0] + " " + a[5] + " svelte-1h8mmo3")) && m(e, "class", o), (!d || c & 67 && r !== (r = `${a[0].includes("top") ? "justify-content:flex-start;" : ""}; max-height: calc(100vh - ${a[6].expanded ? "412px" : a[1] && a[7].type !== "mobile" ? "82px" : !a[1] && a[7].type === "mobile" ? "108px" : "24px"})`)) && m(e, "style", r);
      },
      i(a) {
        if (!d) {
          for (let c = 0; c < l.length; c += 1) w(t[c]);
          d = true;
        }
      },
      o(a) {
        for (let c = 0; c < t.length; c += 1) T(t[c]);
        d = false;
      },
      d(a) {
        a && _(e);
        for (let c = 0; c < t.length; c += 1) t[c].d();
      }
    };
  }
  function pe(i, e) {
    let t, n, o, r, d, l, s, a = I, c, f, v;
    return n = new ut({
      props: {
        notification: e[12],
        updateParentOnRemove: e[9]
      }
    }), {
      key: i,
      first: null,
      c() {
        t = h("li"), $(n.$$.fragment), o = x(), m(t, "class", r = V(`bn-notify-li-${e[0]} ${e[0].includes("top") ? "notification-list-top" : "notification-list-bottom"}`) + " svelte-1h8mmo3"), this.first = t;
      },
      m(u, b) {
        C(u, t, b), F(n, t, null), g(t, o), c = true, f || (v = S(t, "click", ye(e[10])), f = true);
      },
      p(u, b) {
        e = u;
        const p = {};
        b & 4 && (p.notification = e[12]), n.$set(p), (!c || b & 1 && r !== (r = V(`bn-notify-li-${e[0]} ${e[0].includes("top") ? "notification-list-top" : "notification-list-bottom"}`) + " svelte-1h8mmo3")) && m(t, "class", r);
      },
      r() {
        s = t.getBoundingClientRect();
      },
      f() {
        Pe(t), a(), Se(t, s);
      },
      a() {
        a(), a = Oe(t, s, $e, {
          duration: 500
        });
      },
      i(u) {
        c || (w(n.$$.fragment, u), u && je(() => {
          c && (l && l.end(1), d = xe(t, Le, {
            duration: 1200,
            delay: 300,
            x: e[3],
            y: e[4],
            easing: mt
          }), d.start());
        }), c = true);
      },
      o(u) {
        T(n.$$.fragment, u), d && d.invalidate(), l = Te(t, Me, {
          duration: 300,
          easing: ge
        }), c = false;
      },
      d(u) {
        u && _(t), D(n), u && l && l.end(), f = false, v();
      }
    };
  }
  function pt(i) {
    let e, t, n = i[2].length && ve(i);
    return {
      c() {
        n && n.c(), e = me();
      },
      m(o, r) {
        n && n.m(o, r), C(o, e, r), t = true;
      },
      p(o, [r]) {
        o[2].length ? n ? (n.p(o, r), r & 4 && w(n, 1)) : (n = ve(o), n.c(), w(n, 1), n.m(e.parentNode, e)) : n && (A(), T(n, 1, 1, () => {
          n = null;
        }), G());
      },
      i(o) {
        t || (w(n), t = true);
      },
      o(o) {
        T(n), t = false;
      },
      d(o) {
        n && n.d(o), o && _(e);
      }
    };
  }
  function mt(i) {
    return Math.sin(-13 * (i + 1) * Math.PI / 2) * Math.pow(2, -35 * i) + 1;
  }
  function yt(i, e, t) {
    let n;
    const { device: o } = J, r = Z.select("accountCenter").pipe(_e(Z.get().accountCenter), we(1));
    H(i, r, (p) => t(6, n = p));
    let { position: d } = e, { sharedContainer: l } = e, { notifications: s } = e, a, c;
    a = 0, c = 0;
    let f = "y-scroll";
    const v = () => {
      f !== "y-visible" && t(5, f = "y-visible"), u(function() {
        t(5, f = "y-scroll");
      }, 1e3);
    }, u = /* @__PURE__ */ function() {
      let p = null;
      return (y, z) => {
        clearTimeout(p), p = setTimeout(y, z);
      };
    }();
    function b(p) {
      ze.call(this, i, p);
    }
    return i.$$set = (p) => {
      "position" in p && t(0, d = p.position), "sharedContainer" in p && t(1, l = p.sharedContainer), "notifications" in p && t(2, s = p.notifications);
    }, i.$$.update = () => {
      i.$$.dirty & 1 && (d.includes("top") ? t(4, c = -50) : t(4, c = 50));
    }, [
      d,
      l,
      s,
      a,
      c,
      f,
      n,
      o,
      r,
      v,
      b
    ];
  }
  ht = class extends R {
    constructor(e) {
      super(), N(this, e, yt, pt, M, {
        position: 0,
        sharedContainer: 1,
        notifications: 2
      }, vt);
    }
  };
});
export {
  __tla,
  ht as default
};
