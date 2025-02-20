import { cb as pe, cc as ve, cd as me, ce as ge, cf as M, cg as T, ch as y, ci as ae, cj as ie, ck as S, cl as c, cm as J, cn as g, co as z, cp as p, cq as ne, cr as ye, cs as Ce, ct as ee, cu as Hn, cv as E, cw as O, cx as Z, cy as G, cz as Ie, cA as ue, cB as Vn, cC as Cn, cD as In, cE as he, cF as ze, cG as je, cH as fe, cI as de, cJ as be, cK as ke, cL as Bn, cM as Te, cN as Pe, cO as V, cP as q, cQ as _e, cR as Ve, cS as Be, cT as L, cU as De, cV as We, cW as Ne, cX as zn, cY as Dn, cZ as ce, c_ as Wn, c$ as we, d0 as $n, d1 as Nn, d2 as Fn, d3 as Tn, d4 as $e, d5 as An, d6 as En, d7 as On, d8 as Zn, d9 as Me, da as Gn, db as Mn, dc as Rn, dd as Sn, de as Fe, df as Un, dg as Ee, dh as Xn, di as Jn, dj as Le, dk as Oe, dl as Kn, dm as Ze, dn as qe, dp as Ge, dq as Qn, dr as Yn, ds as xn, dt as Re, du as He, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { merge as et, __tla as __tla_1 } from "./index-CcqLKoub.js";
import { s as nt, d as tt, __tla as __tla_2 } from "./index-T24kFbge.js";
let oo;
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
  })()
]).then(async () => {
  var Pn = '<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>', Se = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
  </svg>
`;
  function ot(e) {
    ge(e, "svelte-1uqued6", "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}");
  }
  function Ue(e, n, t) {
    const o = e.slice();
    return o[15] = n[t], o;
  }
  function Xe(e) {
    let n;
    function t(r, i) {
      return r[7] ? rt : lt;
    }
    let o = t(e), l = o(e);
    return {
      c() {
        l.c(), n = ue();
      },
      m(r, i) {
        l.m(r, i), S(r, n, i);
      },
      p(r, i) {
        o === (o = t(r)) && l ? l.p(r, i) : (l.d(1), l = o(r), l && (l.c(), l.m(n.parentNode, n)));
      },
      d(r) {
        l.d(r), r && M(n);
      }
    };
  }
  function lt(e) {
    let n, t = !Oe(e[6].chains[0], e[2]), o, l = [], r = /* @__PURE__ */ new Map(), i, s, a, f, u, v = t && Je(e), k = e[2];
    const h = (b) => b[15].id;
    for (let b = 0; b < k.length; b += 1) {
      let m = Ue(e, k, b), d = h(m);
      r.set(d, l[b] = Ke(d, m));
    }
    return {
      c() {
        n = g("select"), v && v.c(), o = ue();
        for (let b = 0; b < l.length; b += 1) l[b].c();
        p(n, "class", i = Le(`flex justify-center items-center pointer ${e[4]}`) + " svelte-1uqued6"), p(n, "style", a = `
        color: var(${e[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${e[0]}'); ${e[3] ? "font-weight: 600;" : ""}`);
      },
      m(b, m) {
        S(b, n, m), v && v.m(n, null), c(n, o);
        for (let d = 0; d < l.length; d += 1) l[d] && l[d].m(n, null);
        Ze(n, e[6].chains[0].id), e[13](n), f || (u = J(n, "change", e[10]), f = true);
      },
      p(b, m) {
        m & 68 && (t = !Oe(b[6].chains[0], b[2])), t ? v ? v.p(b, m) : (v = Je(b), v.c(), v.m(n, o)) : v && (v.d(1), v = null), m & 4 && (k = b[2], l = zn(l, m, h, 1, b, k, r, n, Kn, Ke, null, Ue)), m & 16 && i !== (i = Le(`flex justify-center items-center pointer ${b[4]}`) + " svelte-1uqued6") && p(n, "class", i), m & 64 && s !== (s = b[6].chains[0].id) && Ze(n, b[6].chains[0].id), m & 11 && a !== (a = `
        color: var(${b[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${b[0]}'); ${b[3] ? "font-weight: 600;" : ""}`) && p(n, "style", a);
      },
      d(b) {
        b && M(n), v && v.d();
        for (let m = 0; m < l.length; m += 1) l[m].d();
        e[13](null), f = false, u();
      }
    };
  }
  function rt(e) {
    let n, t, o, l;
    return {
      c() {
        n = g("span"), t = q("switching..."), p(n, "class", o = Le(`switching-placeholder ${e[4]}`) + " svelte-1uqued6"), p(n, "style", l = `
        color: var(${e[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `);
      },
      m(r, i) {
        S(r, n, i), c(n, t);
      },
      p(r, i) {
        i & 16 && o !== (o = Le(`switching-placeholder ${r[4]}`) + " svelte-1uqued6") && p(n, "class", o), i & 2 && l !== (l = `
        color: var(${r[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `) && p(n, "style", l);
      },
      d(r) {
        r && M(n);
      }
    };
  }
  function Je(e) {
    let n, t = (qe[e[6].chains[0].id] || "unrecognized") + "", o, l;
    return {
      c() {
        n = g("option"), o = q(t), n.__value = l = e[6].chains[0].id, n.value = n.__value;
      },
      m(r, i) {
        S(r, n, i), c(n, o);
      },
      p(r, i) {
        i & 64 && t !== (t = (qe[r[6].chains[0].id] || "unrecognized") + "") && V(o, t), i & 64 && l !== (l = r[6].chains[0].id) && (n.__value = l, n.value = n.__value);
      },
      d(r) {
        r && M(n);
      }
    };
  }
  function Ke(e, n) {
    let t, o = (n[15].label || qe[n[15].id] || n[15].id) + "", l, r;
    return {
      key: e,
      first: null,
      c() {
        t = g("option"), l = q(o), t.__value = r = n[15].id, t.value = t.__value, this.first = t;
      },
      m(i, s) {
        S(i, t, s), c(t, l);
      },
      p(i, s) {
        n = i, s & 4 && o !== (o = (n[15].label || qe[n[15].id] || n[15].id) + "") && V(l, o), s & 4 && r !== (r = n[15].id) && (t.__value = r, t.value = t.__value);
      },
      d(i) {
        i && M(t);
      }
    };
  }
  function at(e) {
    let n, t = e[6] && Xe(e);
    return {
      c() {
        t && t.c(), n = ue();
      },
      m(o, l) {
        t && t.m(o, l), S(o, n, l);
      },
      p(o, [l]) {
        o[6] ? t ? t.p(o, l) : (t = Xe(o), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
      },
      i: G,
      o: G,
      d(o) {
        t && t.d(o), o && M(n);
      }
    };
  }
  function it(e, n, t) {
    let o, l, r, i;
    ee(e, Me, (w) => t(12, r = w));
    let { selectIcon: s = Pn } = n, { colorVar: a } = n, { chains: f } = n, { bold: u = false } = n, { parentCSSId: v = "" } = n;
    const k = new Zn(false);
    ee(e, k, (w) => t(7, i = w));
    let h;
    const b = et(Me, k.pipe(nt(1))).pipe(tt(50), Gn((w, C) => typeof w == "boolean" || typeof C == "boolean" ? false : w[0] && C[0] && w[0].chains[0].id === C[0].chains[0].id));
    ee(e, b, (w) => t(11, l = w));
    async function m() {
      const w = h.selectedOptions[0].value;
      w !== o.chains[0].id && (k.next(true), await Rn({
        chainId: w,
        chainNamespace: "evm",
        wallet: o.label
      }), k.next(false));
    }
    function d() {
      if (!h) return;
      let w = document.createElement("option");
      w.textContent = h.selectedOptions[0].textContent;
      let C = document.createElement("select");
      C.style.visibility = "hidden", C.style.position = "fixed", C.appendChild(w), h.after(C), t(5, h.style.width = `${C.clientWidth - 22}px`, h), C.remove();
    }
    function _(w) {
      An[w ? "unshift" : "push"](() => {
        h = w, t(5, h), t(2, f), t(6, o), t(12, r);
      });
    }
    return e.$$set = (w) => {
      "selectIcon" in w && t(0, s = w.selectIcon), "colorVar" in w && t(1, a = w.colorVar), "chains" in w && t(2, f = w.chains), "bold" in w && t(3, u = w.bold), "parentCSSId" in w && t(4, v = w.parentCSSId);
    }, e.$$.update = () => {
      e.$$.dirty & 4096 && t(6, [o] = r, o), e.$$.dirty & 2048 && l && d();
    }, [
      s,
      a,
      f,
      u,
      v,
      h,
      o,
      i,
      k,
      b,
      m,
      l,
      r,
      _
    ];
  }
  class Ln extends pe {
    constructor(n) {
      super(), ve(this, n, it, at, me, {
        selectIcon: 0,
        colorVar: 1,
        chains: 2,
        bold: 3,
        parentCSSId: 4
      }, ot);
    }
  }
  var st = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
  </svg>
`;
  function ct(e) {
    ge(e, "svelte-hb2n95", `.container.svelte-hb2n95.svelte-hb2n95{display:flex;align-items:center;gap:0.5rem;cursor:pointer;position:relative;z-index:0;width:100%;padding:0.25rem;margin-bottom:0.25rem;border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-hb2n95.svelte-hb2n95::before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;background:var(--action-color);border-radius:12px;z-index:-1;opacity:0}.container.svelte-hb2n95.svelte-hb2n95:hover::before{opacity:0.2}.container.svelte-hb2n95:hover .balance.svelte-hb2n95,.container.svelte-hb2n95:hover .elipsis-container.svelte-hb2n95{opacity:1}.container.svelte-hb2n95:hover .balance.svelte-hb2n95{color:var(--account-center-maximized-balance-color, inherit)}.container.primary.svelte-hb2n95.svelte-hb2n95:hover{background-color:var(
      --account-center-maximized-account-section-background-hover
    )}.account-details.svelte-hb2n95.svelte-hb2n95{flex:1 1;display:flex;gap:inherit;overflow:hidden}.address-domain.svelte-hb2n95.svelte-hb2n95{flex:1 0 auto;max-width:70%;white-space:nowrap;font-weight:600;color:var(--account-center-maximized-address-color, inherit);overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.address-domain.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.balance.svelte-hb2n95.svelte-hb2n95{flex:1 1 auto;max-width:70%;white-space:nowrap;text-align:end;opacity:0.4;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.balance.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.elipsis-container.svelte-hb2n95.svelte-hb2n95{flex:0;padding:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;opacity:0.4}.elipsis-container.svelte-hb2n95.svelte-hb2n95:hover{color:var(--text-color)}.elipsis-container.active.svelte-hb2n95.svelte-hb2n95{color:var(--text-color)}.elipsis.svelte-hb2n95.svelte-hb2n95{width:24px}.menu.svelte-hb2n95.svelte-hb2n95{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-hb2n95 li.svelte-hb2n95{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-hb2n95 li.svelte-hb2n95:hover{background:var(--onboard-primary-200, var(--primary-200))}`);
  }
  function Qe(e, n, t) {
    const o = e.slice();
    return o[14] = n[t].address, o[15] = n[t].ens, o[16] = n[t].uns, o[17] = n[t].balance, o[19] = t, o;
  }
  function Ye(e) {
    let n, t, o;
    return t = new je({
      props: {
        size: 14
      }
    }), {
      c() {
        n = g("div"), Z(t.$$.fragment), _e(n, "right", "-5px"), _e(n, "bottom", "-5px"), p(n, "class", "drop-shadow absolute");
      },
      m(l, r) {
        S(l, n, r), O(t, n, null), o = true;
      },
      i(l) {
        o || (y(t.$$.fragment, l), o = true);
      },
      o(l) {
        T(t.$$.fragment, l), o = false;
      },
      d(l) {
        l && M(n), E(t);
      }
    };
  }
  function xe(e) {
    let n, t = on(e[17]) + "", o, l;
    return {
      c() {
        n = g("div"), o = q(t), p(n, "class", "balance svelte-hb2n95");
      },
      m(r, i) {
        S(r, n, i), c(n, o);
      },
      p(r, i) {
        i & 1 && t !== (t = on(r[17]) + "") && V(o, t);
      },
      i(r) {
        r && (l || Te(() => {
          l = Pe(n, $e, {}), l.start();
        }));
      },
      o: G,
      d(r) {
        r && M(n);
      }
    };
  }
  function en(e) {
    let n, t, o = e[4]("accountCenter.addAccount", {
      default: e[2].accountCenter.addAccount
    }) + "", l, r, i, s, a = e[4]("accountCenter.disconnectWallet", {
      default: e[2].accountCenter.disconnectWallet
    }) + "", f, u, v, k = e[2].accountCenter.copyAddress + "", h, b, m, d, _ = !(e[1] && e[19] === 0) && nn(e);
    function w() {
      return e[13](e[15], e[16], e[14]);
    }
    return {
      c() {
        n = g("ul"), t = g("li"), l = q(o), r = z(), _ && _.c(), i = z(), s = g("li"), f = q(a), u = z(), v = g("li"), h = q(k), p(t, "class", "svelte-hb2n95"), p(s, "class", "svelte-hb2n95"), p(v, "class", "svelte-hb2n95"), p(n, "class", "menu absolute svelte-hb2n95");
      },
      m(C, $) {
        S(C, n, $), c(n, t), c(t, l), c(n, r), _ && _.m(n, null), c(n, i), c(n, s), c(s, f), c(n, u), c(n, v), c(v, h), m || (d = [
          J(t, "click", fe(e[10])),
          J(s, "click", fe(e[12])),
          J(v, "click", fe(w))
        ], m = true);
      },
      p(C, $) {
        e = C, $ & 20 && o !== (o = e[4]("accountCenter.addAccount", {
          default: e[2].accountCenter.addAccount
        }) + "") && V(l, o), e[1] && e[19] === 0 ? _ && (_.d(1), _ = null) : _ ? _.p(e, $) : (_ = nn(e), _.c(), _.m(n, i)), $ & 20 && a !== (a = e[4]("accountCenter.disconnectWallet", {
          default: e[2].accountCenter.disconnectWallet
        }) + "") && V(f, a), $ & 4 && k !== (k = e[2].accountCenter.copyAddress + "") && V(h, k);
      },
      i(C) {
        C && (b || Te(() => {
          b = Pe(n, $e, {}), b.start();
        }));
      },
      o: G,
      d(C) {
        C && M(n), _ && _.d(), m = false, ke(d);
      }
    };
  }
  function nn(e) {
    let n, t = e[4]("accountCenter.setPrimaryAccount", {
      default: e[2].accountCenter.setPrimaryAccount
    }) + "", o, l, r;
    function i() {
      return e[11](e[14]);
    }
    return {
      c() {
        n = g("li"), o = q(t), p(n, "class", "svelte-hb2n95");
      },
      m(s, a) {
        S(s, n, a), c(n, o), l || (r = J(n, "click", fe(i)), l = true);
      },
      p(s, a) {
        e = s, a & 20 && t !== (t = e[4]("accountCenter.setPrimaryAccount", {
          default: e[2].accountCenter.setPrimaryAccount
        }) + "") && V(o, t);
      },
      d(s) {
        s && M(n), l = false, r();
      }
    };
  }
  function tn(e) {
    let n, t, o, l, r, i, s, a, f = (e[15] ? de(e[15].name) : e[16] ? de(e[16].name) : Ve(e[14])) + "", u, v, k, h, b, m, d, _, w, C;
    l = new he({
      props: {
        size: 32,
        padding: 4,
        background: "custom",
        color: "#EFF1FC",
        customBackgroundColor: e[1] && e[19] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)",
        border: e[1] && e[19] === 0 ? "green" : "gray",
        radius: 8,
        icon: e[0].icon
      }
    });
    let $ = e[1] && e[19] === 0 && Ye(), P = e[17] && xe(e);
    function B() {
      return e[8](e[14]);
    }
    function D() {
      return e[9](e[14]);
    }
    let I = e[3] === e[14] && en(e);
    return {
      c() {
        n = g("div"), t = g("div"), o = g("div"), Z(l.$$.fragment), r = z(), $ && $.c(), i = z(), s = g("div"), a = g("div"), u = q(f), v = z(), P && P.c(), k = z(), h = g("div"), b = g("div"), m = z(), I && I.c(), d = z(), p(o, "class", "flex items-center relative"), p(a, "class", "address-domain svelte-hb2n95"), p(s, "class", "account-details svelte-hb2n95"), p(b, "class", "elipsis pointer flex items-center justify-center relative svelte-hb2n95"), p(h, "class", "elipsis-container svelte-hb2n95"), ce(h, "active", e[3] === e[14]), p(t, "class", "container svelte-hb2n95"), ce(t, "primary", e[1] && e[19] === 0), p(n, "class", "relative");
      },
      m(j, W) {
        S(j, n, W), c(n, t), c(t, o), O(l, o, null), c(o, r), $ && $.m(o, null), c(t, i), c(t, s), c(s, a), c(a, u), c(s, v), P && P.m(s, null), c(t, k), c(t, h), c(h, b), b.innerHTML = st, c(n, m), I && I.m(n, null), c(n, d), _ = true, w || (C = [
          J(b, "click", fe(B)),
          J(t, "click", D)
        ], w = true);
      },
      p(j, W) {
        e = j;
        const U = {};
        W & 2 && (U.customBackgroundColor = e[1] && e[19] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)"), W & 2 && (U.border = e[1] && e[19] === 0 ? "green" : "gray"), W & 1 && (U.icon = e[0].icon), l.$set(U), e[1] && e[19] === 0 ? $ ? W & 2 && y($, 1) : ($ = Ye(), $.c(), y($, 1), $.m(o, null)) : $ && (ae(), T($, 1, 1, () => {
          $ = null;
        }), ie()), (!_ || W & 1) && f !== (f = (e[15] ? de(e[15].name) : e[16] ? de(e[16].name) : Ve(e[14])) + "") && V(u, f), e[17] ? P ? (P.p(e, W), W & 1 && y(P, 1)) : (P = xe(e), P.c(), y(P, 1), P.m(s, null)) : P && (P.d(1), P = null), (!_ || W & 9) && ce(h, "active", e[3] === e[14]), (!_ || W & 2) && ce(t, "primary", e[1] && e[19] === 0), e[3] === e[14] ? I ? (I.p(e, W), W & 9 && y(I, 1)) : (I = en(e), I.c(), y(I, 1), I.m(n, d)) : I && (I.d(1), I = null);
      },
      i(j) {
        _ || (y(l.$$.fragment, j), y($), y(P), y(I), _ = true);
      },
      o(j) {
        T(l.$$.fragment, j), T($), _ = false;
      },
      d(j) {
        j && M(n), E(l), $ && $.d(), P && P.d(), I && I.d(), w = false, ke(C);
      }
    };
  }
  function dt(e) {
    let n, t, o = e[0].accounts, l = [];
    for (let i = 0; i < o.length; i += 1) l[i] = tn(Qe(e, o, i));
    const r = (i) => T(l[i], 1, 1, () => {
      l[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < l.length; i += 1) l[i].c();
        n = ue();
      },
      m(i, s) {
        for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(i, s);
        S(i, n, s), t = true;
      },
      p(i, [s]) {
        if (s & 127) {
          o = i[0].accounts;
          let a;
          for (a = 0; a < o.length; a += 1) {
            const f = Qe(i, o, a);
            l[a] ? (l[a].p(f, s), y(l[a], 1)) : (l[a] = tn(f), l[a].c(), y(l[a], 1), l[a].m(n.parentNode, n));
          }
          for (ae(), a = o.length; a < l.length; a += 1) r(a);
          ie();
        }
      },
      i(i) {
        if (!t) {
          for (let s = 0; s < o.length; s += 1) y(l[s]);
          t = true;
        }
      },
      o(i) {
        l = l.filter(Boolean);
        for (let s = 0; s < l.length; s += 1) T(l[s]);
        t = false;
      },
      d(i) {
        Sn(l, i), i && M(n);
      }
    };
  }
  function on(e) {
    const [n] = Object.keys(e);
    return `${e[n].length > 7 ? e[n].slice(0, 7) : e[n]} ${n}`;
  }
  function ut(e, n, t) {
    let o;
    ee(e, He, (d) => t(4, o = d));
    let { wallet: l } = n, { primary: r } = n;
    function i() {
      t(3, s = "");
    }
    let s = "";
    async function a(d) {
      try {
        await Un(d.provider);
      } catch (_) {
        const { code: w } = _;
        (w === Ee.UNSUPPORTED_METHOD || w === Ee.DOES_NOT_EXIST) && Xn.next({
          inProgress: false,
          actionRequired: d.label
        });
      }
    }
    function f() {
      t(2, L.accountCenter.copyAddress = "Copied Successfully", L), setTimeout(i, 500), setTimeout(() => {
        t(2, L.accountCenter.copyAddress = "Copy Wallet address", L);
      }, 700);
    }
    const u = (d) => t(3, s = s === d ? "" : d), v = (d) => Fe(l, d), k = () => {
      t(3, s = ""), a(l);
    }, h = (d) => {
      t(3, s = ""), Fe(l, d);
    }, b = () => {
      t(3, s = ""), $n({
        label: l.label
      });
    }, m = (d, _, w) => {
      Jn(d ? d.name : _ ? _.name : w).then(() => {
        f();
      });
    };
    return e.$$set = (d) => {
      "wallet" in d && t(0, l = d.wallet), "primary" in d && t(1, r = d.primary);
    }, [
      l,
      r,
      L,
      s,
      o,
      a,
      f,
      i,
      u,
      v,
      k,
      h,
      b,
      m
    ];
  }
  class ft extends pe {
    constructor(n) {
      super(), ve(this, n, ut, dt, me, {
        wallet: 0,
        primary: 1,
        hideMenu: 7
      }, ct);
    }
    get hideMenu() {
      return this.$$.ctx[7];
    }
  }
  var pt = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
  </svg>
`, vt = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
  </svg>
`, mt = '<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="grey"/></svg>', qn = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99998 17.3125C5.05553 16.8264 3.45831 15.6979 2.20831 13.9271C0.958313 12.1562 0.333313 10.2153 0.333313 8.10417V3.14583L6.99998 0.645833L13.6666 3.14583V8.10417C13.6666 10.2153 13.0416 12.1562 11.7916 13.9271C10.5416 15.6979 8.94442 16.8264 6.99998 17.3125ZM5.12498 12.3333H8.87498C9.05553 12.3333 9.20484 12.2743 9.3229 12.1562C9.44095 12.0382 9.49998 11.8889 9.49998 11.7083V8.79167C9.49998 8.61111 9.44095 8.46181 9.3229 8.34375C9.20484 8.22569 9.05553 8.16667 8.87498 8.16667H8.66665V7.33333C8.66665 6.875 8.50345 6.48264 8.17706 6.15625C7.85067 5.82986 7.45831 5.66667 6.99998 5.66667C6.54165 5.66667 6.14928 5.82986 5.8229 6.15625C5.49651 6.48264 5.33331 6.875 5.33331 7.33333V8.16667H5.12498C4.94442 8.16667 4.79512 8.22569 4.67706 8.34375C4.55901 8.46181 4.49998 8.61111 4.49998 8.79167V11.7083C4.49998 11.8889 4.55901 12.0382 4.67706 12.1562C4.79512 12.2743 4.94442 12.3333 5.12498 12.3333ZM5.95831 8.16667V7.33333C5.95831 7.05556 6.06248 6.82292 6.27081 6.63542C6.47915 6.44792 6.7222 6.35417 6.99998 6.35417C7.27776 6.35417 7.52081 6.44792 7.72915 6.63542C7.93748 6.82292 8.04165 7.05556 8.04165 7.33333V8.16667H5.95831Z" fill="#929BED"/>
</svg>
`;
  function gt(e) {
    ge(e, "svelte-1ubxcdp", ".content.svelte-1ubxcdp{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-1ubxcdp{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-1ubxcdp{margin:1.5rem 0 0.5rem 0;font-weight:600}p.svelte-1ubxcdp{margin:0;font-weight:400}button.svelte-1ubxcdp{margin-top:1.5rem;width:50%;font-weight:600}.right.svelte-1ubxcdp{margin-left:0.5rem;width:60%}");
  }
  function bt(e) {
    let n, t, o, l, r = e[2]("modals.confirmDisconnectAll.heading", {
      default: L.modals.confirmDisconnectAll.heading
    }) + "", i, s, a, f = e[2]("modals.confirmDisconnectAll.description") + "", u, v, k, h, b = e[2]("modals.confirmDisconnectAll.cancel", {
      default: L.modals.confirmDisconnectAll.cancel
    }) + "", m, d, _, w = e[2]("modals.confirmDisconnectAll.confirm", {
      default: L.modals.confirmDisconnectAll.confirm
    }) + "", C, $, P;
    return {
      c() {
        n = g("div"), t = g("div"), o = z(), l = g("h4"), i = q(r), s = z(), a = g("p"), u = q(f), v = z(), k = g("div"), h = g("button"), m = q(b), d = z(), _ = g("button"), C = q(w), p(t, "class", "icon-container flex justify-center items-center svelte-1ubxcdp"), p(l, "class", "svelte-1ubxcdp"), p(a, "class", "svelte-1ubxcdp"), p(h, "class", "button-neutral-solid-b rounded svelte-1ubxcdp"), p(_, "class", "right button-neutral-solid rounded svelte-1ubxcdp"), p(k, "class", "flex justify-between items-center w-100"), p(n, "class", "content svelte-1ubxcdp");
      },
      m(B, D) {
        S(B, n, D), c(n, t), t.innerHTML = Se, c(n, o), c(n, l), c(l, i), c(n, s), c(n, a), c(a, u), c(n, v), c(n, k), c(k, h), c(h, m), c(k, d), c(k, _), c(_, C), $ || (P = [
          J(h, "click", function() {
            we(e[1]) && e[1].apply(this, arguments);
          }),
          J(_, "click", function() {
            we(e[0]) && e[0].apply(this, arguments);
          })
        ], $ = true);
      },
      p(B, D) {
        e = B, D & 4 && r !== (r = e[2]("modals.confirmDisconnectAll.heading", {
          default: L.modals.confirmDisconnectAll.heading
        }) + "") && V(i, r), D & 4 && f !== (f = e[2]("modals.confirmDisconnectAll.description") + "") && V(u, f), D & 4 && b !== (b = e[2]("modals.confirmDisconnectAll.cancel", {
          default: L.modals.confirmDisconnectAll.cancel
        }) + "") && V(m, b), D & 4 && w !== (w = e[2]("modals.confirmDisconnectAll.confirm", {
          default: L.modals.confirmDisconnectAll.confirm
        }) + "") && V(C, w);
      },
      d(B) {
        B && M(n), $ = false, ke(P);
      }
    };
  }
  function ht(e) {
    let n, t;
    return n = new Mn({
      props: {
        close: e[1],
        $$slots: {
          default: [
            bt
          ]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, [l]) {
        const r = {};
        l & 2 && (r.close = o[1]), l & 15 && (r.$$scope = {
          dirty: l,
          ctx: o
        }), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function _t(e, n, t) {
    let o;
    ee(e, He, (i) => t(2, o = i));
    let { onConfirm: l } = n, { onClose: r } = n;
    return e.$$set = (i) => {
      "onConfirm" in i && t(0, l = i.onConfirm), "onClose" in i && t(1, r = i.onClose);
    }, [
      l,
      r,
      o
    ];
  }
  class wt extends pe {
    constructor(n) {
      super(), ve(this, n, _t, ht, me, {
        onConfirm: 0,
        onClose: 1
      }, gt);
    }
  }
  function kt(e) {
    ge(e, "svelte-ruodf3", ".content.svelte-ruodf3{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--action-color:var(--w3o-action-color, var(--primary-500));font-size:1rem;line-height:1.5rem;display:flex;flex-flow:column;gap:1.5rem;padding:1rem;max-width:320px;background:var(--background-color);color:var(--text-color)}.icon-container.svelte-ruodf3{position:relative;overflow:hidden;width:3rem;height:3rem;border-radius:24px;padding:0.75rem;background:none}.icon-container.svelte-ruodf3::before{content:'';position:absolute;height:100%;width:100%;opacity:0.2;background:var(--action-color)}.text-container.svelte-ruodf3{display:flex;flex-flow:column;gap:0.5rem;padding:0 0.5rem}.actions-container.svelte-ruodf3{display:flex;flex-flow:row nowrap;gap:1rem}.heading.svelte-ruodf3{font-weight:600}button.svelte-ruodf3{font-weight:600}button.primary.svelte-ruodf3{background:var(--action-color)}");
  }
  function yt(e) {
    let n, t, o, l, r, i = e[3]("modals.confirmTransactionProtection.heading", {
      default: L.modals.confirmTransactionProtection.heading
    }) + "", s, a, f, u = e[3]("modals.confirmTransactionProtection.description") + "", v, k, h, b = e[3]("modals.confirmTransactionProtection.link", {
      default: L.modals.confirmTransactionProtection.link
    }) + "", m, d, _, w, C = e[3]("modals.confirmTransactionProtection.dismiss", {
      default: L.modals.confirmTransactionProtection.dismiss
    }) + "", $, P, B, D = e[3]("modals.confirmTransactionProtection.enable", {
      default: L.modals.confirmTransactionProtection.enable
    }) + "", I, j, W;
    return {
      c() {
        n = g("div"), t = g("div"), o = z(), l = g("div"), r = g("div"), s = q(i), a = z(), f = g("div"), v = q(u), k = z(), h = g("a"), m = q(b), d = z(), _ = g("div"), w = g("button"), $ = q(C), P = z(), B = g("button"), I = q(D), p(t, "class", "icon-container flex justify-center items-center svelte-ruodf3"), p(r, "class", "heading svelte-ruodf3"), p(h, "href", e[2]), p(h, "target", "_blank"), p(h, "rel", "noreferrer noopener"), p(h, "class", "no-link"), p(l, "class", "text-container svelte-ruodf3"), p(w, "class", "button-neutral-solid-b svelte-ruodf3"), p(B, "class", "button-neutral-solid rounded primary svelte-ruodf3"), p(_, "class", "actions-container svelte-ruodf3"), p(n, "class", "content svelte-ruodf3");
      },
      m(U, X) {
        S(U, n, X), c(n, t), t.innerHTML = qn, c(n, o), c(n, l), c(l, r), c(r, s), c(l, a), c(l, f), c(f, v), c(l, k), c(l, h), c(h, m), c(n, d), c(n, _), c(_, w), c(w, $), c(_, P), c(_, B), c(B, I), j || (W = [
          J(w, "click", function() {
            we(e[1]) && e[1].apply(this, arguments);
          }),
          J(B, "click", function() {
            we(e[0]) && e[0].apply(this, arguments);
          })
        ], j = true);
      },
      p(U, X) {
        e = U, X & 8 && i !== (i = e[3]("modals.confirmTransactionProtection.heading", {
          default: L.modals.confirmTransactionProtection.heading
        }) + "") && V(s, i), X & 8 && u !== (u = e[3]("modals.confirmTransactionProtection.description") + "") && V(v, u), X & 8 && b !== (b = e[3]("modals.confirmTransactionProtection.link", {
          default: L.modals.confirmTransactionProtection.link
        }) + "") && V(m, b), X & 4 && p(h, "href", e[2]), X & 8 && C !== (C = e[3]("modals.confirmTransactionProtection.dismiss", {
          default: L.modals.confirmTransactionProtection.dismiss
        }) + "") && V($, C), X & 8 && D !== (D = e[3]("modals.confirmTransactionProtection.enable", {
          default: L.modals.confirmTransactionProtection.enable
        }) + "") && V(I, D);
      },
      d(U) {
        U && M(n), j = false, ke(W);
      }
    };
  }
  function Ct(e) {
    let n, t;
    return n = new Mn({
      props: {
        close: e[1],
        $$slots: {
          default: [
            yt
          ]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, [l]) {
        const r = {};
        l & 2 && (r.close = o[1]), l & 31 && (r.$$scope = {
          dirty: l,
          ctx: o
        }), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function zt(e, n, t) {
    let o;
    ee(e, He, (s) => t(3, o = s));
    let { onEnable: l } = n, { onDismiss: r } = n, { infoLink: i } = n;
    return e.$$set = (s) => {
      "onEnable" in s && t(0, l = s.onEnable), "onDismiss" in s && t(1, r = s.onDismiss), "infoLink" in s && t(2, i = s.infoLink);
    }, [
      l,
      r,
      i,
      o
    ];
  }
  class $t extends pe {
    constructor(n) {
      super(), ve(this, n, zt, Ct, me, {
        onEnable: 0,
        onDismiss: 1,
        infoLink: 2
      }, kt);
    }
  }
  function Tt(e) {
    ge(e, "svelte-b848yl", ".secondary-token-container.svelte-b848yl.svelte-b848yl{width:100%}table.svelte-b848yl.svelte-b848yl{width:100%}tr.svelte-b848yl.svelte-b848yl{padding:0.25rem 1rem;line-height:1rem;border-bottom:1px solid var(--border-color);display:flex;flex-direction:row;align-items:flex-start;gap:1rem}thead.svelte-b848yl .secondary-token-table-header.svelte-b848yl{text-align:inherit;font-size:var(--onboard-font-size-7, var(--font-size-7))}.token-icon.svelte-b848yl.svelte-b848yl{width:30%;font-weight:700;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}.icon-name-container.svelte-b848yl.svelte-b848yl{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:0.5rem}.icon.svelte-b848yl.svelte-b848yl{width:1rem;height:1rem}img.svelte-b848yl.svelte-b848yl{height:100%;width:100%}.token-balance.svelte-b848yl.svelte-b848yl{width:70%;font-weight:200;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}");
  }
  function ln(e, n, t) {
    const o = e.slice();
    return o[1] = n[t], o;
  }
  function rn(e) {
    let n, t, o, l, r = e[1].name.toUpperCase() + "", i, s, a, f = (e[1].balance.length > 7 ? e[1].balance.slice(0, 7) : e[1].balance) + "", u, v;
    function k(m, d) {
      return m[1].icon ? Mt : At;
    }
    let h = k(e), b = h(e);
    return {
      c() {
        n = g("tr"), t = g("td"), o = g("div"), b.c(), l = z(), i = q(r), s = z(), a = g("td"), u = q(f), v = z(), p(o, "class", "icon-name-container svelte-b848yl"), p(t, "class", "token-icon svelte-b848yl"), p(a, "class", "token-balance svelte-b848yl"), p(n, "class", "token-row svelte-b848yl");
      },
      m(m, d) {
        S(m, n, d), c(n, t), c(t, o), b.m(o, null), c(o, l), c(o, i), c(n, s), c(n, a), c(a, u), c(n, v);
      },
      p(m, d) {
        h === (h = k(m)) && b ? b.p(m, d) : (b.d(1), b = h(m), b && (b.c(), b.m(o, l))), d & 1 && r !== (r = m[1].name.toUpperCase() + "") && V(i, r), d & 1 && f !== (f = (m[1].balance.length > 7 ? m[1].balance.slice(0, 7) : m[1].balance) + "") && V(u, f);
      },
      d(m) {
        m && M(n), b.d();
      }
    };
  }
  function At(e) {
    let n;
    return {
      c() {
        n = g("div"), p(n, "class", "icon svelte-b848yl");
      },
      m(t, o) {
        S(t, n, o);
      },
      p: G,
      d(t) {
        t && M(n);
      }
    };
  }
  function Mt(e) {
    let n, t, o = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: false,
      pending: jt,
      then: Pt,
      catch: St,
      value: 4
    };
    return Ge(t = e[1].icon, o), {
      c() {
        n = ue(), o.block.c();
      },
      m(l, r) {
        S(l, n, r), o.block.m(l, o.anchor = r), o.mount = () => n.parentNode, o.anchor = n;
      },
      p(l, r) {
        e = l, o.ctx = e, r & 1 && t !== (t = e[1].icon) && Ge(t, o) || Qn(o, e, r);
      },
      d(l) {
        l && M(n), o.block.d(l), o.token = null, o = null;
      }
    };
  }
  function St(e) {
    return {
      c: G,
      m: G,
      p: G,
      i: G,
      o: G,
      d: G
    };
  }
  function Pt(e) {
    let n, t, o;
    function l(s, a) {
      return a & 1 && (t = null), t == null && (t = !!Yn(s[4])), t ? qt : Lt;
    }
    let r = l(e, -1), i = r(e);
    return {
      c() {
        n = g("div"), i.c(), p(n, "class", "icon svelte-b848yl");
      },
      m(s, a) {
        S(s, n, a), i.m(n, null);
      },
      p(s, a) {
        r === (r = l(s, a)) && i ? i.p(s, a) : (i.d(1), i = r(s), i && (i.c(), i.m(n, null)));
      },
      i(s) {
        s && (o || Te(() => {
          o = Pe(n, $e, {}), o.start();
        }));
      },
      o: G,
      d(s) {
        s && M(n), i.d();
      }
    };
  }
  function Lt(e) {
    let n, t;
    return {
      c() {
        n = g("img"), Re(n.src, t = e[4]) || p(n, "src", t), p(n, "alt", "logo"), p(n, "class", "svelte-b848yl");
      },
      m(o, l) {
        S(o, n, l);
      },
      p(o, l) {
        l & 1 && !Re(n.src, t = o[4]) && p(n, "src", t);
      },
      d(o) {
        o && M(n);
      }
    };
  }
  function qt(e) {
    let n, t = e[4] + "", o;
    return {
      c() {
        n = new xn(false), o = ue(), n.a = o;
      },
      m(l, r) {
        n.m(t, l, r), S(l, o, r);
      },
      p(l, r) {
        r & 1 && t !== (t = l[4] + "") && n.p(t);
      },
      d(l) {
        l && M(o), l && n.d();
      }
    };
  }
  function jt(e) {
    return {
      c: G,
      m: G,
      p: G,
      i: G,
      o: G,
      d: G
    };
  }
  function an(e) {
    let n, t = e[1] && e[1].name && e[1].balance && rn(e);
    return {
      c() {
        t && t.c(), n = ue();
      },
      m(o, l) {
        t && t.m(o, l), S(o, n, l);
      },
      p(o, l) {
        o[1] && o[1].name && o[1].balance ? t ? t.p(o, l) : (t = rn(o), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
      },
      d(o) {
        t && t.d(o), o && M(n);
      }
    };
  }
  function Ht(e) {
    let n, t, o, l, r, i = e[0], s = [];
    for (let a = 0; a < i.length; a += 1) s[a] = an(ln(e, i, a));
    return {
      c() {
        n = g("div"), t = g("table"), o = g("thead"), o.innerHTML = '<tr class="svelte-b848yl"><th colspan="3" class="secondary-token-table-header svelte-b848yl">Token Balances:</th></tr>', l = z(), r = g("tbody");
        for (let a = 0; a < s.length; a += 1) s[a].c();
        p(o, "class", "svelte-b848yl"), p(t, "class", "balance-change-table table-radius svelte-b848yl"), p(n, "class", "secondary-token-container svelte-b848yl");
      },
      m(a, f) {
        S(a, n, f), c(n, t), c(t, o), c(t, l), c(t, r);
        for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(r, null);
      },
      p(a, [f]) {
        if (f & 1) {
          i = a[0];
          let u;
          for (u = 0; u < i.length; u += 1) {
            const v = ln(a, i, u);
            s[u] ? s[u].p(v, f) : (s[u] = an(v), s[u].c(), s[u].m(r, null));
          }
          for (; u < s.length; u += 1) s[u].d(1);
          s.length = i.length;
        }
      },
      i: G,
      o: G,
      d(a) {
        a && M(n), Sn(s, a);
      }
    };
  }
  function Vt(e, n, t) {
    let { secondaryTokens: o } = n;
    return e.$$set = (l) => {
      "secondaryTokens" in l && t(0, o = l.secondaryTokens);
    }, [
      o
    ];
  }
  class It extends pe {
    constructor(n) {
      super(), ve(this, n, Vt, Ht, me, {
        secondaryTokens: 0
      }, Tt);
    }
  }
  function Bt(e) {
    ge(e, "svelte-177u10y", `.outer-container.svelte-177u10y{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--border-color:var(--w3o-border-color, var(--gray-500));--action-color:var(--w3o-action-color, var(--primary-500));--border-radius:var(--w3o-border-radius, 1rem);--account-center-network-selector-color:var(--text-color, white);width:100%;overflow:hidden;pointer-events:auto;border:1px solid transparent;background:var(
      --account-center-maximized-upper-background,
      var(--background-color)
    );border-color:var(--border-color);border-radius:var(--account-center-border-radius, var(--border-radius))}.wallets-section.svelte-177u10y{width:100%;color:var(--text-color, var(--gray-100));background:var(--background-color, var(--gray-700))}.p5.svelte-177u10y{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-177u10y{width:100%;margin-bottom:0.5rem}.actions.svelte-177u10y{color:var(
      --account-center-maximized-upper-action-color,
      var(--action-color)
    );padding-left:2px}.action-container.svelte-177u10y{padding:0.25rem 12px 0.25rem 0.5rem;border-radius:0.5rem;transition:background-color 150ms ease-in-out}.action-container.svelte-177u10y:hover{background-color:var(
      --account-center-maximized-upper-action-background-hover,
      rgba(146, 155, 237, 0.2)
    )}.plus-icon.svelte-177u10y{width:20px}.arrow-forward.svelte-177u10y{width:20px}.mt.svelte-177u10y{margin-top:0.25rem}.action-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-177u10y{background:var(
      --account-center-maximized-network-section-background,
      var(--onboard-primary-100, var(--primary-100))
    )}.background-gray.svelte-177u10y{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-177u10y{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-177u10y{background:var(--background-color);border-top:1px solid var(--border-color);width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    );color:var(
      --account-center-maximized-network-text-color,
      var(--account-center-maximized-network-section, inherit)
    )}.network-section.svelte-177u10y{flex-direction:row;align-items:flex-start;padding:0px;gap:16px}.network-selector-container.svelte-177u10y{width:100%}.protect.svelte-177u10y{flex-direction:row;padding:0.25rem 0.375rem 0;gap:0.375rem;width:100%}.shield.svelte-177u10y{width:20px;height:20px;display:flex;justify-content:center}.protect-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(
      --account-center-maximized-upper-action-color,
      var(--action-color)
    );line-height:1.75rem;display:flex;align-items:center}.network-selector-container.svelte-177u10y{margin-left:1rem;width:100%}.network-selector-label.svelte-177u10y{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-177u10y{color:var(--text-color, var(--gray-700));background:var(
      --account-center-maximized-info-section-background-color,
      var(
        --account-center-maximized-info-section,
        var(--background-color, #fff)
      )
    );border-top:1px solid var(--border-color);border-radius:var(--account-center-border-radius, inherit);display:flex;flex-direction:column;align-items:flex-start;padding:0px}.app-info-header.svelte-177u10y{width:100%;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-bottom:1px solid var(--border-color)}.app-icon-name.svelte-177u10y{display:flex;align-items:center;flex-direction:row;gap:0.75rem}.app-name.svelte-177u10y{font-size:1rem;font-weight:600;line-height:1rem;margin-bottom:0.25rem;color:var(--account-center-maximized-app-name-color, inherit)}.app-description.svelte-177u10y{margin:0;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);display:flex;flex-direction:row;align-items:flex-start;padding:0px 0.25rem;gap:1rem}.app-info.svelte-177u10y{width:100%;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);border-bottom:1px solid var(--border-color);display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 1rem;gap:0.25rem}.app-info-heading.svelte-177u10y{font-weight:700;color:var(--account-center-maximized-app-info-color, inherit)}.w100.svelte-177u10y{width:100%}a.svelte-177u10y{font-weight:700}.powered-by-container.svelte-177u10y{color:var(--text-color);padding:0.75rem}`);
  }
  function sn(e, n, t) {
    const o = e.slice();
    return o[29] = n[t], o[31] = t, o;
  }
  function cn(e) {
    let n, t;
    return n = new wt({
      props: {
        onClose: e[22],
        onConfirm: e[13]
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, l) {
        const r = {};
        l[0] & 4 && (r.onClose = o[22]), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function dn(e) {
    let n, t;
    return n = new $t({
      props: {
        onDismiss: e[23],
        onEnable: e[24],
        infoLink: e[9].transactionProtectionInfoLink || Be
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, l) {
        const r = {};
        l[0] & 16 && (r.onDismiss = o[23]), l[0] & 512 && (r.infoLink = o[9].transactionProtectionInfoLink || Be), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function un(e) {
    let n, t, o, l, r = [], i = /* @__PURE__ */ new Map(), s, a, f, u, v, k, h, b, m, d, _, w = e[10]("accountCenter.currentNetwork", {
      default: L.accountCenter.currentNetwork
    }) + "", C, $, P, B, D, I, j, W, U, X, Y, te, oe, A, N, x = e[1];
    const Ae = (F) => F[29].label;
    for (let F = 0; F < x.length; F += 1) {
      let H = sn(e, x, F), re = Ae(H);
      i.set(re, r[F] = fn(re, H));
    }
    let se = e[17].type === "desktop" && Dt(e);
    h = new he({
      props: {
        size: 32,
        padding: 4,
        background: "custom",
        color: e[5] ? e[5].icon ? void 0 : "#EFF1FC" : "#FFAF00",
        customBackgroundColor: e[5] ? e[5].color || e[7] && e[7].color || be.color : "#FFE7B3",
        border: "transparent",
        radius: 8,
        icon: e[5] ? e[5].icon || e[7] && e[7].icon || be.icon : Se
      }
    });
    let R = e[5] && pn();
    B = new Ln({
      props: {
        chains: e[14],
        colorVar: "--account-center-maximized-network-selector-color",
        bold: true,
        selectIcon: mt,
        parentCSSId: "maximized_ac"
      }
    });
    let le = !e[9].hideTransactionProtectionBtn && (e[6] || e[5] && e[5].protectedRpcUrl) && vn(e), K = e[11] && mn(e), Q = e[8] && e[8].length && _n(e);
    return {
      c() {
        n = g("div"), t = g("div"), o = g("div"), l = g("div");
        for (let F = 0; F < r.length; F += 1) r[F].c();
        s = z(), a = g("div"), se && se.c(), f = z(), u = g("div"), v = g("div"), k = g("div"), Z(h.$$.fragment), b = z(), R && R.c(), m = z(), d = g("div"), _ = g("div"), C = q(w), $ = z(), P = g("div"), Z(B.$$.fragment), D = z(), le && le.c(), I = z(), j = g("div"), K && K.c(), W = z(), Q && Q.c(), U = z(), X = g("div"), Y = g("a"), p(l, "class", "wallets svelte-177u10y"), p(a, "class", "actions flex flex-column items-start svelte-177u10y"), p(o, "class", "p5 svelte-177u10y"), p(k, "class", "relative flex"), p(_, "class", "network-selector-label svelte-177u10y"), p(P, "class", "flex items-center"), _e(P, "width", "100%"), p(d, "class", "network-selector-container svelte-177u10y"), p(v, "class", "network-section flex items-center svelte-177u10y"), p(u, "class", "network-container svelte-177u10y"), ce(u, "background-blue", e[5] && e[5].icon || e[7]), ce(u, "background-yellow", !e[5]), ce(u, "background-gray", e[5] && !e[7]), p(Y, "href", "https://thirdweb.com"), p(Y, "target", "_blank"), p(Y, "rel", "noopener noreferrer"), p(Y, "class", "flex justify-center items-center powered-by-container svelte-177u10y"), p(X, "class", "w100 svelte-177u10y"), p(j, "class", "app-info-container svelte-177u10y"), p(t, "class", "wallets-section svelte-177u10y"), p(n, "class", "outer-container svelte-177u10y");
      },
      m(F, H) {
        S(F, n, H), c(n, t), c(t, o), c(o, l);
        for (let re = 0; re < r.length; re += 1) r[re] && r[re].m(l, null);
        c(o, s), c(o, a), se && se.m(a, null), c(t, f), c(t, u), c(u, v), c(v, k), O(h, k, null), c(k, b), R && R.m(k, null), c(v, m), c(v, d), c(d, _), c(_, C), c(d, $), c(d, P), O(B, P, null), c(u, D), le && le.m(u, null), c(t, I), c(t, j), K && K.m(j, null), c(j, W), Q && Q.m(j, null), c(j, U), c(j, X), c(X, Y), Y.innerHTML = Wn, oe = true, A || (N = [
          J(P, "click", e[21]),
          J(n, "click", fe(function() {
            we(e[3]) && e[3].apply(this, arguments);
          }))
        ], A = true);
      },
      p(F, H) {
        e = F, H[0] & 10 && (x = e[1], ae(), r = zn(r, H, Ae, 1, e, x, i, l, Dn, fn, null, sn), ie()), e[17].type === "desktop" && se.p(e, H);
        const re = {};
        H[0] & 32 && (re.color = e[5] ? e[5].icon ? void 0 : "#EFF1FC" : "#FFAF00"), H[0] & 160 && (re.customBackgroundColor = e[5] ? e[5].color || e[7] && e[7].color || be.color : "#FFE7B3"), H[0] & 160 && (re.icon = e[5] ? e[5].icon || e[7] && e[7].icon || be.icon : Se), h.$set(re), e[5] ? R ? H[0] & 32 && y(R, 1) : (R = pn(), R.c(), y(R, 1), R.m(k, null)) : R && (ae(), T(R, 1, 1, () => {
          R = null;
        }), ie()), (!oe || H[0] & 1024) && w !== (w = e[10]("accountCenter.currentNetwork", {
          default: L.accountCenter.currentNetwork
        }) + "") && V(C, w), !e[9].hideTransactionProtectionBtn && (e[6] || e[5] && e[5].protectedRpcUrl) ? le ? le.p(e, H) : (le = vn(e), le.c(), le.m(u, null)) : le && (le.d(1), le = null), (!oe || H[0] & 160) && ce(u, "background-blue", e[5] && e[5].icon || e[7]), (!oe || H[0] & 32) && ce(u, "background-yellow", !e[5]), (!oe || H[0] & 160) && ce(u, "background-gray", e[5] && !e[7]), e[11] ? K ? (K.p(e, H), H[0] & 2048 && y(K, 1)) : (K = mn(e), K.c(), y(K, 1), K.m(j, W)) : K && (ae(), T(K, 1, 1, () => {
          K = null;
        }), ie()), e[8] && e[8].length ? Q ? (Q.p(e, H), H[0] & 256 && y(Q, 1)) : (Q = _n(e), Q.c(), y(Q, 1), Q.m(j, U)) : Q && (ae(), T(Q, 1, 1, () => {
          Q = null;
        }), ie());
      },
      i(F) {
        if (!oe) {
          for (let H = 0; H < x.length; H += 1) y(r[H]);
          y(h.$$.fragment, F), y(R), y(B.$$.fragment, F), y(K), y(Q), F && Te(() => {
            oe && (te || (te = De(n, Ne, {
              duration: 600,
              y: e[16].includes("bottom") ? 56 : -76,
              easing: We,
              opacity: 0
            }, true)), te.run(1));
          }), oe = true;
        }
      },
      o(F) {
        for (let H = 0; H < r.length; H += 1) T(r[H]);
        T(h.$$.fragment, F), T(R), T(B.$$.fragment, F), T(K), T(Q), F && (te || (te = De(n, Ne, {
          duration: 600,
          y: e[16].includes("bottom") ? 56 : -76,
          easing: We,
          opacity: 0
        }, false)), te.run(0)), oe = false;
      },
      d(F) {
        F && M(n);
        for (let H = 0; H < r.length; H += 1) r[H].d();
        se && se.d(), E(h), R && R.d(), E(B), le && le.d(), K && K.d(), Q && Q.d(), F && te && te.end(), A = false, ke(N);
      }
    };
  }
  function fn(e, n) {
    let t, o, l, r;
    function i(a) {
      n[25](a);
    }
    let s = {
      wallet: n[29],
      primary: n[31] === 0
    };
    return n[3] !== void 0 && (s.hideMenu = n[3]), o = new ft({
      props: s
    }), An.push(() => En(o, "hideMenu", i)), {
      key: e,
      first: null,
      c() {
        t = ue(), Z(o.$$.fragment), this.first = t;
      },
      m(a, f) {
        S(a, t, f), O(o, a, f), r = true;
      },
      p(a, f) {
        n = a;
        const u = {};
        f[0] & 2 && (u.wallet = n[29]), f[0] & 2 && (u.primary = n[31] === 0), !l && f[0] & 8 && (l = true, u.hideMenu = n[3], On(() => l = false)), o.$set(u);
      },
      i(a) {
        r || (y(o.$$.fragment, a), r = true);
      },
      o(a) {
        T(o.$$.fragment, a), r = false;
      },
      d(a) {
        a && M(t), E(o, a);
      }
    };
  }
  function Dt(e) {
    let n, t, o, l, r = e[10]("accountCenter.connectAnotherWallet", {
      default: L.accountCenter.connectAnotherWallet
    }) + "", i, s, a, f, u, v, k = e[10]("accountCenter.disconnectAllWallets", {
      default: L.accountCenter.disconnectAllWallets
    }) + "", h, b, m;
    return {
      c() {
        n = g("div"), t = g("div"), o = z(), l = g("span"), i = q(r), s = z(), a = g("div"), f = g("div"), u = z(), v = g("span"), h = q(k), p(t, "class", "plus-icon flex items-center justify-center svelte-177u10y"), p(l, "class", "action-text svelte-177u10y"), p(n, "class", "action-container flex items-center pointer svelte-177u10y"), p(f, "class", "arrow-forward flex items-center justify-center svelte-177u10y"), p(v, "class", "action-text svelte-177u10y"), p(a, "class", "action-container flex items-center mt pointer svelte-177u10y");
      },
      m(d, _) {
        S(d, n, _), c(n, t), t.innerHTML = pt, c(n, o), c(n, l), c(l, i), S(d, s, _), S(d, a, _), c(a, f), f.innerHTML = vt, c(a, u), c(a, v), c(v, h), b || (m = [
          J(n, "click", e[26]),
          J(a, "click", e[27])
        ], b = true);
      },
      p(d, _) {
        _[0] & 1024 && r !== (r = d[10]("accountCenter.connectAnotherWallet", {
          default: L.accountCenter.connectAnotherWallet
        }) + "") && V(i, r), _[0] & 1024 && k !== (k = d[10]("accountCenter.disconnectAllWallets", {
          default: L.accountCenter.disconnectAllWallets
        }) + "") && V(h, k);
      },
      d(d) {
        d && M(n), d && M(s), d && M(a), b = false, ke(m);
      }
    };
  }
  function pn(e) {
    let n, t, o;
    return t = new je({
      props: {
        size: 14
      }
    }), {
      c() {
        n = g("div"), Z(t.$$.fragment), _e(n, "right", "-5px"), _e(n, "bottom", "-5px"), p(n, "class", "drop-shadow absolute");
      },
      m(l, r) {
        S(l, n, r), O(t, n, null), o = true;
      },
      i(l) {
        o || (y(t.$$.fragment, l), o = true);
      },
      o(l) {
        T(t.$$.fragment, l), o = false;
      },
      d(l) {
        l && M(n), E(t);
      }
    };
  }
  function vn(e) {
    let n, t, o, l, r = e[10]("accountCenter.enableTransactionProtection", {
      default: L.accountCenter.enableTransactionProtection
    }) + "", i, s, a;
    return {
      c() {
        n = g("div"), t = g("div"), o = z(), l = g("span"), i = q(r), p(t, "class", "shield svelte-177u10y"), p(l, "class", "protect-text svelte-177u10y"), p(n, "class", "protect action-container flex items-center pointer svelte-177u10y");
      },
      m(f, u) {
        S(f, n, u), c(n, t), t.innerHTML = qn, c(n, o), c(n, l), c(l, i), s || (a = J(n, "click", e[28]), s = true);
      },
      p(f, u) {
        u[0] & 1024 && r !== (r = f[10]("accountCenter.enableTransactionProtection", {
          default: L.accountCenter.enableTransactionProtection
        }) + "") && V(i, r);
      },
      d(f) {
        f && M(n), s = false, a();
      }
    };
  }
  function mn(e) {
    let n, t, o, l, r, i = (e[11] && e[11].name || "App Name") + "", s, a, f, u = (e[11] && e[11].description || "This app has not added a description.") + "", v, k, h, b;
    o = new he({
      props: {
        size: 32,
        padding: 4,
        background: "white",
        border: "black",
        radius: 8,
        icon: e[11] && e[11].icon || ze
      }
    });
    let m = (e[11].gettingStartedGuide || e[11].explore) && gn(e);
    return {
      c() {
        n = g("div"), t = g("div"), Z(o.$$.fragment), l = z(), r = g("div"), s = q(i), a = z(), f = g("div"), v = q(u), k = z(), m && m.c(), h = ue(), p(r, "class", "app-name svelte-177u10y"), p(t, "class", "relative flex app-icon-name svelte-177u10y"), p(f, "class", "app-description svelte-177u10y"), p(n, "class", "flex items-start app-info-header svelte-177u10y");
      },
      m(d, _) {
        S(d, n, _), c(n, t), O(o, t, null), c(t, l), c(t, r), c(r, s), c(n, a), c(n, f), c(f, v), S(d, k, _), m && m.m(d, _), S(d, h, _), b = true;
      },
      p(d, _) {
        const w = {};
        _[0] & 2048 && (w.icon = d[11] && d[11].icon || ze), o.$set(w), (!b || _[0] & 2048) && i !== (i = (d[11] && d[11].name || "App Name") + "") && V(s, i), (!b || _[0] & 2048) && u !== (u = (d[11] && d[11].description || "This app has not added a description.") + "") && V(v, u), d[11].gettingStartedGuide || d[11].explore ? m ? m.p(d, _) : (m = gn(d), m.c(), m.m(h.parentNode, h)) : m && (m.d(1), m = null);
      },
      i(d) {
        b || (y(o.$$.fragment, d), b = true);
      },
      o(d) {
        T(o.$$.fragment, d), b = false;
      },
      d(d) {
        d && M(n), E(o), d && M(k), m && m.d(d), d && M(h);
      }
    };
  }
  function gn(e) {
    let n, t, o = e[10]("accountCenter.appInfo", {
      default: L.accountCenter.appInfo
    }) + "", l, r, i, s = e[11].gettingStartedGuide && bn(e), a = e[11].explore && hn(e);
    return {
      c() {
        n = g("div"), t = g("div"), l = q(o), r = z(), s && s.c(), i = z(), a && a.c(), p(t, "class", "app-info-heading svelte-177u10y"), p(n, "class", "app-info svelte-177u10y");
      },
      m(f, u) {
        S(f, n, u), c(n, t), c(t, l), c(n, r), s && s.m(n, null), c(n, i), a && a.m(n, null);
      },
      p(f, u) {
        u[0] & 1024 && o !== (o = f[10]("accountCenter.appInfo", {
          default: L.accountCenter.appInfo
        }) + "") && V(l, o), f[11].gettingStartedGuide ? s ? s.p(f, u) : (s = bn(f), s.c(), s.m(n, i)) : s && (s.d(1), s = null), f[11].explore ? a ? a.p(f, u) : (a = hn(f), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
      },
      d(f) {
        f && M(n), s && s.d(), a && a.d();
      }
    };
  }
  function bn(e) {
    let n, t, o = e[10]("accountCenter.learnMore", {
      default: L.accountCenter.learnMore
    }) + "", l, r, i, s = e[10]("accountCenter.gettingStartedGuide", {
      default: L.accountCenter.gettingStartedGuide
    }) + "", a, f;
    return {
      c() {
        n = g("div"), t = g("div"), l = q(o), r = z(), i = g("a"), a = q(s), p(i, "href", f = e[11].gettingStartedGuide), p(i, "target", "_blank"), p(i, "rel", "noreferrer noopener"), p(i, "class", "svelte-177u10y"), p(n, "class", "flex justify-between items-center w100 svelte-177u10y");
      },
      m(u, v) {
        S(u, n, v), c(n, t), c(t, l), c(n, r), c(n, i), c(i, a);
      },
      p(u, v) {
        v[0] & 1024 && o !== (o = u[10]("accountCenter.learnMore", {
          default: L.accountCenter.learnMore
        }) + "") && V(l, o), v[0] & 1024 && s !== (s = u[10]("accountCenter.gettingStartedGuide", {
          default: L.accountCenter.gettingStartedGuide
        }) + "") && V(a, s), v[0] & 2048 && f !== (f = u[11].gettingStartedGuide) && p(i, "href", f);
      },
      d(u) {
        u && M(n);
      }
    };
  }
  function hn(e) {
    let n, t, o = e[10]("accountCenter.smartContracts", {
      default: L.accountCenter.smartContracts
    }) + "", l, r, i, s = e[10]("accountCenter.explore", {
      default: L.accountCenter.explore
    }) + "", a, f;
    return {
      c() {
        n = g("div"), t = g("div"), l = q(o), r = z(), i = g("a"), a = q(s), p(i, "href", f = e[11].explore), p(i, "target", "_blank"), p(i, "rel", "noreferrer noopener"), p(i, "class", "svelte-177u10y"), p(n, "class", "flex justify-between items-center w100 svelte-177u10y");
      },
      m(u, v) {
        S(u, n, v), c(n, t), c(t, l), c(n, r), c(n, i), c(i, a);
      },
      p(u, v) {
        v[0] & 1024 && o !== (o = u[10]("accountCenter.smartContracts", {
          default: L.accountCenter.smartContracts
        }) + "") && V(l, o), v[0] & 1024 && s !== (s = u[10]("accountCenter.explore", {
          default: L.accountCenter.explore
        }) + "") && V(a, s), v[0] & 2048 && f !== (f = u[11].explore) && p(i, "href", f);
      },
      d(u) {
        u && M(n);
      }
    };
  }
  function _n(e) {
    let n, t;
    return n = new It({
      props: {
        secondaryTokens: e[8]
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, l) {
        const r = {};
        l[0] & 256 && (r.secondaryTokens = o[8]), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function Wt(e) {
    let n, t, o, l, r = e[2] && cn(e), i = e[4] && dn(e), s = e[0] && un(e);
    return {
      c() {
        r && r.c(), n = z(), i && i.c(), t = z(), s && s.c(), o = ue();
      },
      m(a, f) {
        r && r.m(a, f), S(a, n, f), i && i.m(a, f), S(a, t, f), s && s.m(a, f), S(a, o, f), l = true;
      },
      p(a, f) {
        a[2] ? r ? (r.p(a, f), f[0] & 4 && y(r, 1)) : (r = cn(a), r.c(), y(r, 1), r.m(n.parentNode, n)) : r && (ae(), T(r, 1, 1, () => {
          r = null;
        }), ie()), a[4] ? i ? (i.p(a, f), f[0] & 16 && y(i, 1)) : (i = dn(a), i.c(), y(i, 1), i.m(t.parentNode, t)) : i && (ae(), T(i, 1, 1, () => {
          i = null;
        }), ie()), a[0] ? s ? (s.p(a, f), f[0] & 1 && y(s, 1)) : (s = un(a), s.c(), y(s, 1), s.m(o.parentNode, o)) : s && (ae(), T(s, 1, 1, () => {
          s = null;
        }), ie());
      },
      i(a) {
        l || (y(r), y(i), y(s), l = true);
      },
      o(a) {
        T(r), T(i), T(s), l = false;
      },
      d(a) {
        r && r.d(a), a && M(n), i && i.d(a), a && M(t), s && s.d(a), a && M(o);
      }
    };
  }
  function Nt(e, n, t) {
    let o, l, r, i, s, a, f, u, v, k;
    ee(e, Me, (A) => t(1, f = A)), ee(e, He, (A) => t(10, v = A));
    let { expanded: h } = n;
    const b = ne.select("accountCenter").pipe(ye(ne.get().accountCenter), Ce(1));
    ee(e, b, (A) => t(9, u = A));
    function m() {
      f.forEach(({ label: A }) => $n({
        label: A
      }));
    }
    const { chains: d } = ne.get();
    let _ = false, w, C = false;
    const $ = ne.select("appMetadata").pipe(ye(ne.get().appMetadata), Ce(1));
    ee(e, $, (A) => t(11, k = A));
    const { position: P } = ne.get().accountCenter, { device: B } = Vn, D = async () => {
      if (i) try {
        await Nn(o.provider, i, i.protectedRpcUrl || Fn), t(4, C = false);
      } catch (A) {
        const { code: N } = A;
        console.log(A, N);
      }
    };
    function I(A) {
      Tn.call(this, e, A);
    }
    const j = () => t(2, _ = false), W = () => t(4, C = false), U = () => D();
    function X(A) {
      w = A, t(3, w);
    }
    const Y = () => In(), te = () => t(2, _ = true), oe = () => t(4, C = true);
    return e.$$set = (A) => {
      "expanded" in A && t(0, h = A.expanded);
    }, e.$$.update = () => {
      e.$$.dirty[0] & 2 && t(19, [o] = f, o), e.$$.dirty[0] & 524288 && t(20, [l] = o ? o.chains : [], l), e.$$.dirty[0] & 524288 && t(8, r = o && o.accounts.length && o.accounts[0].secondaryTokens), e.$$.dirty[0] & 1048576 && t(5, i = d.find(({ id: A, namespace: N }) => l ? A === l.id && N === l.namespace : false)), e.$$.dirty[0] & 1048576 && t(7, s = Cn(l && l.id)), e.$$.dirty[0] & 1048576 && t(6, a = l && l.id === "0x1");
    }, [
      h,
      f,
      _,
      w,
      C,
      i,
      a,
      s,
      r,
      u,
      v,
      k,
      b,
      m,
      d,
      $,
      P,
      B,
      D,
      o,
      l,
      I,
      j,
      W,
      U,
      X,
      Y,
      te,
      oe
    ];
  }
  class jn extends pe {
    constructor(n) {
      super(), ve(this, n, Nt, Wt, me, {
        expanded: 0
      }, Bt, [
        -1,
        -1
      ]);
    }
  }
  function Ft(e) {
    ge(e, "svelte-1xsvwqj", `.ac-trigger.svelte-1xsvwqj{--background-color:var(
      --account-center-minimized-background,
      var(--w3o-background-color, white)
    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(
      --account-center-border,
      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))
    );--border-radius:var(
      --account-center-border-radius,
      var(--w3o-border-radius, 1rem)
    );cursor:pointer;pointer-events:auto;width:100%;padding:0.5rem;border:1px solid;background:var(--background-color);color:var(--text-color);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );z-index:var(--account-center-z-index, 1)}.inner-row.svelte-1xsvwqj{display:flex;flex-flow:row nowrap;align-items:center;gap:0.5rem;padding:0 0.25rem}.wallet-info.svelte-1xsvwqj{display:flex;flex:1;flex-flow:column;height:2.5rem;overflow:hidden}.address.svelte-1xsvwqj{font-weight:600;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--account-center-minimized-address-color, inherit)}.balance.svelte-1xsvwqj{font-weight:400;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:0.6;color:var(--account-center-minimized-balance-color, inherit)}.chain-icon-container.svelte-1xsvwqj{margin-right:4px}.container.svelte-1xsvwqj{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.drop-shadow.svelte-1xsvwqj{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}`);
  }
  function wn(e) {
    let n, t = (e[5].length > 7 ? e[5].slice(0, 7) : e[5]) + "", o, l, r, i;
    return {
      c() {
        n = g("div"), o = q(t), l = z(), r = q(e[2]), p(n, "class", "balance svelte-1xsvwqj");
      },
      m(s, a) {
        S(s, n, a), c(n, o), c(n, l), c(n, r);
      },
      p(s, a) {
        a & 32 && t !== (t = (s[5].length > 7 ? s[5].slice(0, 7) : s[5]) + "") && V(o, t), a & 4 && V(r, s[2]);
      },
      i(s) {
        s && (i || Te(() => {
          i = Pe(n, $e, {}), i.start();
        }));
      },
      o: G,
      d(s) {
        s && M(n);
      }
    };
  }
  function Et(e) {
    let n, t, o, l, r, i, s, a, f, u, v, k, h, b, m = (e[8] ? de(e[8]) : e[7] ? de(e[7]) : e[6]) + "", d, _, w, C, $, P, B, D, I, j, W, U, X, Y, te, oe;
    r = new he({
      props: {
        size: 32,
        padding: 4,
        background: "white",
        border: "darkGreen",
        radius: 8,
        icon: e[9] && e[9].icon || ze
      }
    }), a = new he({
      props: {
        size: 32,
        padding: 4,
        background: "green",
        border: "darkGreen",
        radius: 8,
        icon: e[1] ? e[1].icon : ""
      }
    }), v = new je({
      props: {
        size: 14
      }
    });
    let A = e[5] && wn(e);
    return D = new he({
      props: {
        size: 22,
        padding: 4,
        background: "custom",
        color: e[4] ? e[4].icon ? void 0 : "var(--onboard-primary-100, var(--primary-100))" : `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`,
        customBackgroundColor: e[4] ? e[4].color || e[3] && e[3].color || be.color : "var(--onboard-warning-200, var(--warning-200))",
        border: "transparent",
        radius: 25,
        icon: e[4] ? e[4].icon || e[3] && e[3].icon || be.icon : Se
      }
    }), j = new Ln({
      props: {
        chains: e[11],
        colorVar: "--account-center-minimized-network-selector-color",
        selectIcon: Pn,
        parentCSSId: "minimized_ac"
      }
    }), {
      c() {
        n = g("div"), t = g("div"), o = g("div"), l = g("div"), Z(r.$$.fragment), i = z(), s = g("div"), Z(a.$$.fragment), f = z(), u = g("div"), Z(v.$$.fragment), k = z(), h = g("div"), b = g("div"), d = q(m), _ = z(), A && A.c(), w = z(), C = g("div"), $ = g("div"), P = g("div"), B = g("div"), Z(D.$$.fragment), I = z(), Z(j.$$.fragment), p(l, "class", "drop-shadow svelte-1xsvwqj"), _e(s, "margin-left", "-0.5rem"), p(s, "class", "drop-shadow svelte-1xsvwqj"), _e(u, "right", "-4px"), _e(u, "bottom", "-4px"), p(u, "class", "drop-shadow absolute svelte-1xsvwqj"), p(o, "class", "flex relative"), p(b, "class", "address svelte-1xsvwqj"), p(h, "class", "wallet-info svelte-1xsvwqj"), p(B, "class", "chain-icon-container svelte-1xsvwqj"), p(P, "class", "flex items-center"), p($, "class", "container shadow-1 flex items-center svelte-1xsvwqj"), p($, "style", W = `border-color: var(${e[4] ? "--onboard-primary-200, var(--primary-200)" : "--onboard-warning-500, var(--warning-500)"}); background-color: var(${e[4] ? "--account-center-minimized-chain-select-background, var(--primary-100)" : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`), p(C, "class", "network"), p(t, "class", "inner-row svelte-1xsvwqj"), p(n, "class", "ac-trigger svelte-1xsvwqj");
      },
      m(N, x) {
        S(N, n, x), c(n, t), c(t, o), c(o, l), O(r, l, null), c(o, i), c(o, s), O(a, s, null), c(o, f), c(o, u), O(v, u, null), c(t, k), c(t, h), c(h, b), c(b, d), c(h, _), A && A.m(h, null), c(t, w), c(t, C), c(C, $), c($, P), c(P, B), O(D, B, null), c(P, I), O(j, P, null), Y = true, te || (oe = [
          J($, "click", fe(e[15])),
          J(n, "click", fe(function() {
            we(e[0]) && e[0].apply(this, arguments);
          }))
        ], te = true);
      },
      p(N, [x]) {
        e = N;
        const Ae = {};
        x & 512 && (Ae.icon = e[9] && e[9].icon || ze), r.$set(Ae);
        const se = {};
        x & 2 && (se.icon = e[1] ? e[1].icon : ""), a.$set(se), (!Y || x & 448) && m !== (m = (e[8] ? de(e[8]) : e[7] ? de(e[7]) : e[6]) + "") && V(d, m), e[5] ? A ? (A.p(e, x), x & 32 && y(A, 1)) : (A = wn(e), A.c(), y(A, 1), A.m(h, null)) : A && (A.d(1), A = null);
        const R = {};
        x & 16 && (R.color = e[4] ? e[4].icon ? void 0 : "var(--onboard-primary-100, var(--primary-100))" : `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`), x & 24 && (R.customBackgroundColor = e[4] ? e[4].color || e[3] && e[3].color || be.color : "var(--onboard-warning-200, var(--warning-200))"), x & 24 && (R.icon = e[4] ? e[4].icon || e[3] && e[3].icon || be.icon : Se), D.$set(R), (!Y || x & 16 && W !== (W = `border-color: var(${e[4] ? "--onboard-primary-200, var(--primary-200)" : "--onboard-warning-500, var(--warning-500)"}); background-color: var(${e[4] ? "--account-center-minimized-chain-select-background, var(--primary-100)" : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`)) && p($, "style", W);
      },
      i(N) {
        Y || (y(r.$$.fragment, N), y(a.$$.fragment, N), y(v.$$.fragment, N), y(A), y(D.$$.fragment, N), y(j.$$.fragment, N), N && Te(() => {
          Y && (X && X.end(1), U = Pe(n, $e, {
            duration: 250
          }), U.start());
        }), Y = true);
      },
      o(N) {
        T(r.$$.fragment, N), T(a.$$.fragment, N), T(v.$$.fragment, N), T(D.$$.fragment, N), T(j.$$.fragment, N), U && U.invalidate(), X = Bn(n, $e, {
          duration: 100
        }), Y = false;
      },
      d(N) {
        N && M(n), E(r), E(a), E(v), A && A.d(), E(D), E(j), N && X && X.end(), te = false, ke(oe);
      }
    };
  }
  function Ot(e, n, t) {
    let o, l, r, i, s, a, f, u, v, k, h, b;
    ee(e, Me, (C) => t(14, h = C));
    let { toggle: m } = n;
    const d = ne.select("appMetadata").pipe(ye(ne.get().appMetadata), Ce(1));
    ee(e, d, (C) => t(9, b = C));
    const _ = ne.get().chains;
    function w(C) {
      Tn.call(this, e, C);
    }
    return e.$$set = (C) => {
      "toggle" in C && t(0, m = C.toggle);
    }, e.$$.update = () => {
      e.$$.dirty & 16384 && t(1, [o] = h, o), e.$$.dirty & 2 && t(13, [l] = o ? o.accounts : [], l), e.$$.dirty & 8192 && t(8, r = l && l.ens && de(l.ens.name)), e.$$.dirty & 8192 && t(7, i = l && l.uns && de(l.uns.name)), e.$$.dirty & 8192 && t(6, s = l ? Ve(l.address) : ""), e.$$.dirty & 8192 && t(2, [a] = l && l.balance ? Object.keys(l.balance) : [], a), e.$$.dirty & 8196 && t(5, f = l && l.balance ? l.balance[a] : null), e.$$.dirty & 2 && t(12, u = o && o.chains[0]), e.$$.dirty & 4096 && t(4, v = _.find(({ id: C, namespace: $ }) => u ? C === u.id && $ === u.namespace : false)), e.$$.dirty & 4096 && t(3, k = Cn(u && u.id));
    }, [
      m,
      o,
      a,
      k,
      v,
      f,
      s,
      i,
      r,
      b,
      d,
      _,
      u,
      l,
      h,
      w
    ];
  }
  class Zt extends pe {
    constructor(n) {
      super(), ve(this, n, Ot, Et, me, {
        toggle: 0
      }, Ft);
    }
  }
  function Gt(e) {
    ge(e, "svelte-1o9vinu", `.ac-trigger.svelte-1o9vinu{--background-color:var(
      --account-center-minimized-background,
      var(--w3o-background-color, white)
    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(
      --account-center-border,
      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))
    );--border-radius:var(
      --account-center-border-radius,
      var(--w3o-border-radius, 1rem)
    );position:relative;cursor:pointer;pointer-events:auto;min-width:80px;background:var(--background-color);color:var(--text-color);border:1px solid var(--border-color);border-radius:var(--border-radius);box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );z-index:var(--account-center-z-index, 1)}.wallet-square-wrapper.svelte-1o9vinu{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-1o9vinu{position:absolute;right:-4px;bottom:-4px}.inner-row.svelte-1o9vinu{display:flex;flex-flow:row nowrap;width:80px;padding:0.75rem}.drop-shadow.svelte-1o9vinu{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}`);
  }
  function Rt(e) {
    let n, t, o, l, r, i, s, a, f, u, v, k, h, b, m;
    return l = new he({
      props: {
        size: 32,
        padding: 4,
        background: "white",
        border: "darkGreen",
        radius: 8,
        icon: e[3] && e[3].icon || ze
      }
    }), a = new he({
      props: {
        size: 32,
        padding: 4,
        background: "green",
        border: "darkGreen",
        radius: 8,
        icon: e[1] ? e[1].icon : ""
      }
    }), v = new je({
      props: {
        size: 14
      }
    }), {
      c() {
        n = g("div"), t = g("div"), o = g("div"), Z(l.$$.fragment), r = z(), i = g("div"), s = g("div"), Z(a.$$.fragment), f = z(), u = g("div"), Z(v.$$.fragment), p(o, "class", "drop-shadow svelte-1o9vinu"), p(s, "class", "drop-shadow svelte-1o9vinu"), p(u, "class", "check-icon-wrapper drop-shadow svelte-1o9vinu"), p(i, "class", "wallet-square-wrapper svelte-1o9vinu"), p(t, "class", "inner-row svelte-1o9vinu"), p(n, "class", "ac-trigger svelte-1o9vinu"), p(n, "style", k = e[2].position.includes("Left") ? "align-self: flex-start" : null);
      },
      m(d, _) {
        S(d, n, _), c(n, t), c(t, o), O(l, o, null), c(t, r), c(t, i), c(i, s), O(a, s, null), c(i, f), c(i, u), O(v, u, null), h = true, b || (m = J(n, "click", fe(function() {
          we(e[0]) && e[0].apply(this, arguments);
        })), b = true);
      },
      p(d, [_]) {
        e = d;
        const w = {};
        _ & 8 && (w.icon = e[3] && e[3].icon || ze), l.$set(w);
        const C = {};
        _ & 2 && (C.icon = e[1] ? e[1].icon : ""), a.$set(C), (!h || _ & 4 && k !== (k = e[2].position.includes("Left") ? "align-self: flex-start" : null)) && p(n, "style", k);
      },
      i(d) {
        h || (y(l.$$.fragment, d), y(a.$$.fragment, d), y(v.$$.fragment, d), h = true);
      },
      o(d) {
        T(l.$$.fragment, d), T(a.$$.fragment, d), T(v.$$.fragment, d), h = false;
      },
      d(d) {
        d && M(n), E(l), E(a), E(v), b = false, m();
      }
    };
  }
  function Ut(e, n, t) {
    let o, l, r, i;
    ee(e, Me, (u) => t(6, l = u));
    let { toggle: s } = n;
    const a = ne.select("appMetadata").pipe(ye(ne.get().appMetadata), Ce(1));
    ee(e, a, (u) => t(3, i = u));
    const f = ne.select("accountCenter").pipe(ye(ne.get().accountCenter), Ce(1));
    return ee(e, f, (u) => t(2, r = u)), e.$$set = (u) => {
      "toggle" in u && t(0, s = u.toggle);
    }, e.$$.update = () => {
      e.$$.dirty & 64 && t(1, [o] = l, o);
    }, [
      s,
      o,
      r,
      i,
      a,
      f,
      l
    ];
  }
  class Xt extends pe {
    constructor(n) {
      super(), ve(this, n, Ut, Rt, me, {
        toggle: 0
      }, Gt);
    }
  }
  function Jt(e) {
    ge(e, "svelte-1nua59o", ".ac-container.svelte-1nua59o{display:flex;flex-flow:column;align-items:flex-end;gap:0.5rem}");
  }
  function kn(e) {
    let n, t;
    return n = new jn({
      props: {
        expanded: e[0]
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, l) {
        const r = {};
        l & 1 && (r.expanded = o[0]), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function Kt(e) {
    let n, t;
    return n = new Zt({
      props: {
        toggle: e[4]
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p: G,
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function Qt(e) {
    let n, t;
    return n = new Xt({
      props: {
        toggle: e[4]
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p: G,
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function yn(e) {
    let n, t;
    return n = new jn({
      props: {
        expanded: e[0]
      }
    }), {
      c() {
        Z(n.$$.fragment);
      },
      m(o, l) {
        O(n, o, l), t = true;
      },
      p(o, l) {
        const r = {};
        l & 1 && (r.expanded = o[0]), n.$set(r);
      },
      i(o) {
        t || (y(n.$$.fragment, o), t = true);
      },
      o(o) {
        T(n.$$.fragment, o), t = false;
      },
      d(o) {
        E(n, o);
      }
    };
  }
  function Yt(e) {
    let n, t = e[1].position.includes("bottom"), o, l, r, i, s = e[1].position.includes("top"), a, f, u, v = t && kn(e);
    const k = [
      Qt,
      Kt
    ], h = [];
    function b(d, _) {
      return d[1].minimal ? 0 : 1;
    }
    l = b(e), r = h[l] = k[l](e);
    let m = s && yn(e);
    return {
      c() {
        n = g("div"), v && v.c(), o = z(), r.c(), i = z(), m && m.c(), p(n, "class", "ac-container svelte-1nua59o");
      },
      m(d, _) {
        S(d, n, _), v && v.m(n, null), c(n, o), h[l].m(n, null), c(n, i), m && m.m(n, null), a = true, f || (u = J(window, "click", e[3]), f = true);
      },
      p(d, [_]) {
        _ & 2 && (t = d[1].position.includes("bottom")), t ? v ? (v.p(d, _), _ & 2 && y(v, 1)) : (v = kn(d), v.c(), y(v, 1), v.m(n, o)) : v && (ae(), T(v, 1, 1, () => {
          v = null;
        }), ie());
        let w = l;
        l = b(d), l === w ? h[l].p(d, _) : (ae(), T(h[w], 1, 1, () => {
          h[w] = null;
        }), ie(), r = h[l], r ? r.p(d, _) : (r = h[l] = k[l](d), r.c()), y(r, 1), r.m(n, i)), _ & 2 && (s = d[1].position.includes("top")), s ? m ? (m.p(d, _), _ & 2 && y(m, 1)) : (m = yn(d), m.c(), y(m, 1), m.m(n, null)) : m && (ae(), T(m, 1, 1, () => {
          m = null;
        }), ie());
      },
      i(d) {
        a || (y(v), y(r), y(m), a = true);
      },
      o(d) {
        T(v), T(r), T(m), a = false;
      },
      d(d) {
        d && M(n), v && v.d(), h[l].d(), m && m.d(), f = false, u();
      }
    };
  }
  function xt(e, n, t) {
    let o, l = false;
    const r = ne.select("accountCenter").pipe(ye(ne.get().accountCenter), Ce(1));
    ee(e, r, (a) => t(1, o = a)), Hn(i);
    function i() {
      o.expanded && (Ie({
        expanded: false
      }), t(0, l = false));
    }
    function s() {
      Ie({
        expanded: !o.expanded
      }), t(0, l = !l);
    }
    return [
      l,
      o,
      r,
      i,
      s
    ];
  }
  oo = class extends pe {
    constructor(n) {
      super(), ve(this, n, xt, Yt, me, {}, Jt);
    }
  };
});
export {
  __tla,
  oo as default
};
