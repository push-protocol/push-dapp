import { e7 as l, i0 as vn, iR as Tn, ib as Q, i2 as ke, el as B, ea as t, iS as De, iT as vt, ee as X, fS as _, ec as pt, ed as ht, ej as s, eQ as P, ei as K, eV as ge, g9 as xt, eF as Jt, ii as An, ga as xe, e5 as fe, eb as Sn, ev as ie, ep as Mn, fc as Re, fD as En, fC as In, eW as ue, en as le, eX as N, f0 as kn, iU as Dn, iV as Ie, iW as Rn, eg as Ve, eq as Ue, ef as Le, hn as lt, fg as me, e_ as v, gR as ye, gc as J, fm as Xt, fn as ut, eT as ee, iX as gt, fi as Te, fb as ze, fj as Ae, g3 as Ln, fP as Ce, g8 as qt, iY as Zt, fE as He, iZ as $n, hj as Nn, i_ as Pn, g0 as Qt, iG as en, i$ as Bn, fr as Fn, ek as tn, gl as nn, hN as On, fO as on, e6 as Un, j0 as zn, j1 as Vn, j2 as Hn, j3 as et, gf as tt, j4 as _n, e9 as Gn, j5 as sn, j6 as Wn, hx as Kn, j7 as Yn, j8 as Jn, fA as Xn, j9 as qn, iJ as Zn, ja as Qn, jb as ei, jc as ti, jd as ni, je as nt, jf as ii, eZ as be, eS as oi, jg as si, f1 as ai, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { f as Tt, c as ri, a as oe, g as Ge, u as We, b as li, s as $e, d as ft, e as At, h as ci, i as Be, j as mt, k as Se, l as St, __tla as __tla_1 } from "./DefaultPropsProvider-CqVd9wmm.js";
import { T as Mt, E as di, __tla as __tla_2 } from "./EPNSCoreHelper-CF8oy0Qc.js";
import { b as pi, g as an, m as rn, c as ln, __tla as __tla_3 } from "./StakingVariant-DhW8W7sL.js";
import { E as hi, M as xi, A as ui, __tla as __tla_4 } from "./EmptyNotificationSettings-B-bZPmWH.js";
import { a as cn, b as Et, __tla as __tla_5 } from "./ValidationHelper-fik1mGJg.js";
import { I as gi, __tla as __tla_6 } from "./ImageClipper-jVAMwSyJ.js";
import { v as fi, C as mi, __tla as __tla_7 } from "./CreateChannel-Cp1eNcQc.js";
import { __tla as __tla_8 } from "./index.esm-BdEK4ITe.js";
import { __tla as __tla_9 } from "./useGetPaymentDetails-BGjqsVRD.js";
import { __tla as __tla_10 } from "./Stepper-n0dM99Ny.js";
import { __tla as __tla_11 } from "./ImportPushTokenMessage-DhEjzXbZ.js";
import { __tla as __tla_12 } from "./useGetChannelCategories-CjTKHO4P.js";
import { __tla as __tla_13 } from "./index.esm-BAVu81oq.js";
import "./Common.form-NbJ1DVkQ.js";
let er;
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
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })()
]).then(async () => {
  const Ci = (e) => l.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  }, l.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 8,
    fill: "#E93636"
  }));
  function bi(e, i = 0, n = 1) {
    return ri(e, i, n);
  }
  function wi(e) {
    e = e.slice(1);
    const i = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(i);
    return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, a) => a < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function dn(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return dn(wi(e));
    const i = e.indexOf("("), n = e.substring(0, i);
    if ([
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].indexOf(n) === -1) throw new Error(Tt(9, e));
    let o = e.substring(i + 1, e.length - 1), a;
    if (n === "color") {
      if (o = o.split(" "), a = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), [
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].indexOf(a) === -1) throw new Error(Tt(10, a));
    } else o = o.split(",");
    return o = o.map((r) => parseFloat(r)), {
      type: n,
      values: o,
      colorSpace: a
    };
  }
  function yi(e) {
    const { type: i, colorSpace: n } = e;
    let { values: o } = e;
    return i.indexOf("rgb") !== -1 ? o = o.map((a, r) => r < 3 ? parseInt(a, 10) : a) : i.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), i.indexOf("color") !== -1 ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${i}(${o})`;
  }
  function ji(e, i) {
    return e = dn(e), i = bi(i), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${i}` : e.values[3] = i, yi(e);
  }
  function vi(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
  }
  function Ti(e) {
    return parseFloat(e);
  }
  function Ct(e, i) {
    var n = function(r) {
      return i && l.isValidElement(r) ? i(r) : r;
    }, o = /* @__PURE__ */ Object.create(null);
    return e && l.Children.map(e, function(a) {
      return a;
    }).forEach(function(a) {
      o[a.key] = n(a);
    }), o;
  }
  function Ai(e, i) {
    e = e || {}, i = i || {};
    function n(g) {
      return g in i ? i[g] : e[g];
    }
    var o = /* @__PURE__ */ Object.create(null), a = [];
    for (var r in e) r in i ? a.length && (o[r] = a, a = []) : a.push(r);
    var d, h = {};
    for (var c in i) {
      if (o[c]) for (d = 0; d < o[c].length; d++) {
        var p = o[c][d];
        h[o[c][d]] = n(p);
      }
      h[c] = n(c);
    }
    for (d = 0; d < a.length; d++) h[a[d]] = n(a[d]);
    return h;
  }
  function we(e, i, n) {
    return n[i] != null ? n[i] : e.props[i];
  }
  function Si(e, i) {
    return Ct(e.children, function(n) {
      return l.cloneElement(n, {
        onExited: i.bind(null, n),
        in: true,
        appear: we(n, "appear", e),
        enter: we(n, "enter", e),
        exit: we(n, "exit", e)
      });
    });
  }
  function Mi(e, i, n) {
    var o = Ct(e.children), a = Ai(i, o);
    return Object.keys(a).forEach(function(r) {
      var d = a[r];
      if (l.isValidElement(d)) {
        var h = r in i, c = r in o, p = i[r], g = l.isValidElement(p) && !p.props.in;
        c && (!h || g) ? a[r] = l.cloneElement(d, {
          onExited: n.bind(null, d),
          in: true,
          exit: we(d, "exit", e),
          enter: we(d, "enter", e)
        }) : !c && h && !g ? a[r] = l.cloneElement(d, {
          in: false
        }) : c && h && l.isValidElement(p) && (a[r] = l.cloneElement(d, {
          onExited: n.bind(null, d),
          in: p.props.in,
          exit: we(d, "exit", e),
          enter: we(d, "enter", e)
        }));
      }
    }), a;
  }
  var Ei = Object.values || function(e) {
    return Object.keys(e).map(function(i) {
      return e[i];
    });
  }, Ii = {
    component: "div",
    childFactory: function(i) {
      return i;
    }
  }, bt = function(e) {
    vn(i, e);
    function i(o, a) {
      var r;
      r = e.call(this, o, a) || this;
      var d = r.handleExited.bind(Tn(r));
      return r.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: d,
        firstRender: true
      }, r;
    }
    var n = i.prototype;
    return n.componentDidMount = function() {
      this.mounted = true, this.setState({
        contextValue: {
          isMounting: false
        }
      });
    }, n.componentWillUnmount = function() {
      this.mounted = false;
    }, i.getDerivedStateFromProps = function(a, r) {
      var d = r.children, h = r.handleExited, c = r.firstRender;
      return {
        children: c ? Si(a, h) : Mi(a, d, h),
        firstRender: false
      };
    }, n.handleExited = function(a, r) {
      var d = Ct(this.props.children);
      a.key in d || (a.props.onExited && a.props.onExited(r), this.mounted && this.setState(function(h) {
        var c = Q({}, h.children);
        return delete c[a.key], {
          children: c
        };
      }));
    }, n.render = function() {
      var a = this.props, r = a.component, d = a.childFactory, h = ke(a, [
        "component",
        "childFactory"
      ]), c = this.state.contextValue, p = Ei(this.state.children).map(d);
      return delete h.appear, delete h.enter, delete h.exit, r === null ? B.createElement(Mt.Provider, {
        value: c
      }, p) : B.createElement(Mt.Provider, {
        value: c
      }, B.createElement(r, h, p));
    }, i;
  }(B.Component);
  bt.propTypes = {};
  bt.defaultProps = Ii;
  function ki(e) {
    const { className: i, classes: n, pulsate: o = false, rippleX: a, rippleY: r, rippleSize: d, in: h, onExited: c, timeout: p } = e, [g, C] = l.useState(false), x = oe(i, n.ripple, n.rippleVisible, o && n.ripplePulsate), m = {
      width: d,
      height: d,
      top: -(d / 2) + r,
      left: -(d / 2) + a
    }, u = oe(n.child, g && n.childLeaving, o && n.childPulsate);
    return !h && !g && C(true), l.useEffect(() => {
      if (!h && c != null) {
        const T = setTimeout(c, p);
        return () => {
          clearTimeout(T);
        };
      }
    }, [
      c,
      h,
      p
    ]), t.jsx("span", {
      className: x,
      style: m,
      children: t.jsx("span", {
        className: u
      })
    });
  }
  const se = Ge("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), Di = [
    "center",
    "classes",
    "className"
  ];
  let Ke = (e) => e, It, kt, Dt, Rt;
  const ct = 550, Ri = 80, Li = De(It || (It = Ke`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), $i = De(kt || (kt = Ke`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ni = De(Dt || (Dt = Ke`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Pi = $e("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  }), Bi = $e(ki, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })(Rt || (Rt = Ke`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), se.rippleVisible, Li, ct, ({ theme: e }) => e.transitions.easing.easeInOut, se.ripplePulsate, ({ theme: e }) => e.transitions.duration.shorter, se.child, se.childLeaving, $i, ct, ({ theme: e }) => e.transitions.easing.easeInOut, se.childPulsate, Ni, ({ theme: e }) => e.transitions.easing.easeInOut), Fi = l.forwardRef(function(i, n) {
    const o = We({
      props: i,
      name: "MuiTouchRipple"
    }), { center: a = false, classes: r = {}, className: d } = o, h = ke(o, Di), [c, p] = l.useState([]), g = l.useRef(0), C = l.useRef(null);
    l.useEffect(() => {
      C.current && (C.current(), C.current = null);
    }, [
      c
    ]);
    const x = l.useRef(false), m = li(), u = l.useRef(null), T = l.useRef(null), F = l.useCallback((b) => {
      const { pulsate: M, rippleX: E, rippleY: H, rippleSize: G, cb: q } = b;
      p((k) => [
        ...k,
        t.jsx(Bi, {
          classes: {
            ripple: oe(r.ripple, se.ripple),
            rippleVisible: oe(r.rippleVisible, se.rippleVisible),
            ripplePulsate: oe(r.ripplePulsate, se.ripplePulsate),
            child: oe(r.child, se.child),
            childLeaving: oe(r.childLeaving, se.childLeaving),
            childPulsate: oe(r.childPulsate, se.childPulsate)
          },
          timeout: ct,
          pulsate: M,
          rippleX: E,
          rippleY: H,
          rippleSize: G
        }, g.current)
      ]), g.current += 1, C.current = q;
    }, [
      r
    ]), L = l.useCallback((b = {}, M = {}, E = () => {
    }) => {
      const { pulsate: H = false, center: G = a || M.pulsate, fakeElement: q = false } = M;
      if ((b == null ? void 0 : b.type) === "mousedown" && x.current) {
        x.current = false;
        return;
      }
      (b == null ? void 0 : b.type) === "touchstart" && (x.current = true);
      const k = q ? null : T.current, Y = k ? k.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let O, W, R;
      if (G || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches) O = Math.round(Y.width / 2), W = Math.round(Y.height / 2);
      else {
        const { clientX: w, clientY: f } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
        O = Math.round(w - Y.left), W = Math.round(f - Y.top);
      }
      if (G) R = Math.sqrt((2 * Y.width ** 2 + Y.height ** 2) / 3), R % 2 === 0 && (R += 1);
      else {
        const w = Math.max(Math.abs((k ? k.clientWidth : 0) - O), O) * 2 + 2, f = Math.max(Math.abs((k ? k.clientHeight : 0) - W), W) * 2 + 2;
        R = Math.sqrt(w ** 2 + f ** 2);
      }
      b != null && b.touches ? u.current === null && (u.current = () => {
        F({
          pulsate: H,
          rippleX: O,
          rippleY: W,
          rippleSize: R,
          cb: E
        });
      }, m.start(Ri, () => {
        u.current && (u.current(), u.current = null);
      })) : F({
        pulsate: H,
        rippleX: O,
        rippleY: W,
        rippleSize: R,
        cb: E
      });
    }, [
      a,
      F,
      m
    ]), V = l.useCallback(() => {
      L({}, {
        pulsate: true
      });
    }, [
      L
    ]), D = l.useCallback((b, M) => {
      if (m.clear(), (b == null ? void 0 : b.type) === "touchend" && u.current) {
        u.current(), u.current = null, m.start(0, () => {
          D(b, M);
        });
        return;
      }
      u.current = null, p((E) => E.length > 0 ? E.slice(1) : E), C.current = M;
    }, [
      m
    ]);
    return l.useImperativeHandle(n, () => ({
      pulsate: V,
      start: L,
      stop: D
    }), [
      V,
      L,
      D
    ]), t.jsx(Pi, Q({
      className: oe(se.root, r.root, d),
      ref: T
    }, h, {
      children: t.jsx(bt, {
        component: null,
        exit: true,
        children: c
      })
    }));
  });
  function Oi(e) {
    return ft("MuiButtonBase", e);
  }
  const Ui = Ge("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]), zi = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type"
  ], Vi = (e) => {
    const { disabled: i, focusVisible: n, focusVisibleClassName: o, classes: a } = e, d = mt({
      root: [
        "root",
        i && "disabled",
        n && "focusVisible"
      ]
    }, Oi, a);
    return n && o && (d.root += ` ${o}`), d;
  }, Hi = $e("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, i) => i.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${Ui.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  }), _i = l.forwardRef(function(i, n) {
    const o = We({
      props: i,
      name: "MuiButtonBase"
    }), { action: a, centerRipple: r = false, children: d, className: h, component: c = "button", disabled: p = false, disableRipple: g = false, disableTouchRipple: C = false, focusRipple: x = false, LinkComponent: m = "a", onBlur: u, onClick: T, onContextMenu: F, onDragLeave: L, onFocus: V, onFocusVisible: D, onKeyDown: b, onKeyUp: M, onMouseDown: E, onMouseLeave: H, onMouseUp: G, onTouchEnd: q, onTouchMove: k, onTouchStart: Y, tabIndex: O = 0, TouchRippleProps: W, touchRippleRef: R, type: w } = o, f = ke(o, zi), j = l.useRef(null), A = l.useRef(null), pe = At(A, R), { isFocusVisibleRef: ce, onFocus: je, onBlur: he, ref: Z } = ci(), [te, z] = l.useState(false);
    p && te && z(false), l.useImperativeHandle(a, () => ({
      focusVisible: () => {
        z(true), j.current.focus();
      }
    }), []);
    const [re, ae] = l.useState(false);
    l.useEffect(() => {
      ae(true);
    }, []);
    const I = re && !g && !p;
    l.useEffect(() => {
      te && x && !g && re && A.current.pulsate();
    }, [
      g,
      x,
      te,
      re
    ]);
    function U(y, yt, jn = C) {
      return Be((jt) => (yt && yt(jt), !jn && A.current && A.current[y](jt), true));
    }
    const de = U("start", E), Me = U("stop", F), S = U("stop", L), $ = U("stop", G), ne = U("stop", (y) => {
      te && y.preventDefault(), H && H(y);
    }), Ye = U("start", Y), Je = U("stop", q), Xe = U("stop", k), Ne = U("stop", (y) => {
      he(y), ce.current === false && z(false), u && u(y);
    }, false), qe = Be((y) => {
      j.current || (j.current = y.currentTarget), je(y), ce.current === true && (z(true), D && D(y)), V && V(y);
    }), Ze = () => {
      const y = j.current;
      return c && c !== "button" && !(y.tagName === "A" && y.href);
    }, Qe = l.useRef(false), Cn = Be((y) => {
      x && !Qe.current && te && A.current && y.key === " " && (Qe.current = true, A.current.stop(y, () => {
        A.current.start(y);
      })), y.target === y.currentTarget && Ze() && y.key === " " && y.preventDefault(), b && b(y), y.target === y.currentTarget && Ze() && y.key === "Enter" && !p && (y.preventDefault(), T && T(y));
    }), bn = Be((y) => {
      x && y.key === " " && A.current && te && !y.defaultPrevented && (Qe.current = false, A.current.stop(y, () => {
        A.current.pulsate(y);
      })), M && M(y), T && y.target === y.currentTarget && Ze() && y.key === " " && !y.defaultPrevented && T(y);
    });
    let Pe = c;
    Pe === "button" && (f.href || f.to) && (Pe = m);
    const Ee = {};
    Pe === "button" ? (Ee.type = w === void 0 ? "button" : w, Ee.disabled = p) : (!f.href && !f.to && (Ee.role = "button"), p && (Ee["aria-disabled"] = p));
    const wn = At(n, Z, j), wt = Q({}, o, {
      centerRipple: r,
      component: c,
      disabled: p,
      disableRipple: g,
      disableTouchRipple: C,
      focusRipple: x,
      tabIndex: O,
      focusVisible: te
    }), yn = Vi(wt);
    return t.jsxs(Hi, Q({
      as: Pe,
      className: oe(yn.root, h),
      ownerState: wt,
      onBlur: Ne,
      onClick: T,
      onContextMenu: Me,
      onFocus: qe,
      onKeyDown: Cn,
      onKeyUp: bn,
      onMouseDown: de,
      onMouseLeave: ne,
      onMouseUp: $,
      onDragLeave: S,
      onTouchEnd: Je,
      onTouchMove: Xe,
      onTouchStart: Ye,
      ref: wn,
      tabIndex: p ? -1 : O,
      type: w
    }, Ee, f, {
      children: [
        d,
        I ? t.jsx(Fi, Q({
          ref: pe,
          center: r
        }, W)) : null
      ]
    }));
  });
  function Gi(e) {
    return ft("MuiIconButton", e);
  }
  const Wi = Ge("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge"
  ]), Ki = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size"
  ], Yi = (e) => {
    const { classes: i, disabled: n, color: o, edge: a, size: r } = e, d = {
      root: [
        "root",
        n && "disabled",
        o !== "default" && `color${Se(o)}`,
        a && `edge${Se(a)}`,
        `size${Se(r)}`
      ]
    };
    return mt(d, Gi, i);
  }, Ji = $e(_i, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, i) => {
      const { ownerState: n } = e;
      return [
        i.root,
        n.color !== "default" && i[`color${Se(n.color)}`],
        n.edge && i[`edge${Se(n.edge)}`],
        i[`size${Se(n.size)}`]
      ];
    }
  })(({ theme: e, ownerState: i }) => Q({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: e.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    overflow: "visible",
    color: (e.vars || e).palette.action.active,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shortest
    })
  }, !i.disableRipple && {
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : St(e.palette.action.active, e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  }, i.edge === "start" && {
    marginLeft: i.size === "small" ? -3 : -12
  }, i.edge === "end" && {
    marginRight: i.size === "small" ? -3 : -12
  }), ({ theme: e, ownerState: i }) => {
    var n;
    const o = (n = (e.vars || e).palette) == null ? void 0 : n[i.color];
    return Q({}, i.color === "inherit" && {
      color: "inherit"
    }, i.color !== "inherit" && i.color !== "default" && Q({
      color: o == null ? void 0 : o.main
    }, !i.disableRipple && {
      "&:hover": Q({}, o && {
        backgroundColor: e.vars ? `rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : St(o.main, e.palette.action.hoverOpacity)
      }, {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      })
    }), i.size === "small" && {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }, i.size === "large" && {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }, {
      [`&.${Wi.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled
      }
    });
  }), Xi = l.forwardRef(function(i, n) {
    const o = We({
      props: i,
      name: "MuiIconButton"
    }), { edge: a = false, children: r, className: d, color: h = "default", disabled: c = false, disableFocusRipple: p = false, size: g = "medium" } = o, C = ke(o, Ki), x = Q({}, o, {
      edge: a,
      color: h,
      disabled: c,
      disableFocusRipple: p,
      size: g
    }), m = Yi(x);
    return t.jsx(Ji, Q({
      className: oe(m.root, d),
      centerRipple: true,
      focusRipple: !p,
      disabled: c,
      ref: n
    }, C, {
      ownerState: x,
      children: r
    }));
  });
  function qi(e) {
    return ft("MuiSkeleton", e);
  }
  Ge("MuiSkeleton", [
    "root",
    "text",
    "rectangular",
    "rounded",
    "circular",
    "pulse",
    "wave",
    "withChildren",
    "fitContent",
    "heightAuto"
  ]);
  const Zi = [
    "animation",
    "className",
    "component",
    "height",
    "style",
    "variant",
    "width"
  ];
  let _e = (e) => e, Lt, $t, Nt, Pt;
  const Qi = (e) => {
    const { classes: i, variant: n, animation: o, hasChildren: a, width: r, height: d } = e;
    return mt({
      root: [
        "root",
        n,
        o,
        a && "withChildren",
        a && !r && "fitContent",
        a && !d && "heightAuto"
      ]
    }, qi, i);
  }, eo = De(Lt || (Lt = _e`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), to = De($t || ($t = _e`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)), no = $e("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, i) => {
      const { ownerState: n } = e;
      return [
        i.root,
        i[n.variant],
        n.animation !== false && i[n.animation],
        n.hasChildren && i.withChildren,
        n.hasChildren && !n.width && i.fitContent,
        n.hasChildren && !n.height && i.heightAuto
      ];
    }
  })(({ theme: e, ownerState: i }) => {
    const n = vi(e.shape.borderRadius) || "px", o = Ti(e.shape.borderRadius);
    return Q({
      display: "block",
      backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : ji(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
      height: "1.2em"
    }, i.variant === "text" && {
      marginTop: 0,
      marginBottom: 0,
      height: "auto",
      transformOrigin: "0 55%",
      transform: "scale(1, 0.60)",
      borderRadius: `${o}${n}/${Math.round(o / 0.6 * 10) / 10}${n}`,
      "&:empty:before": {
        content: '"\\00a0"'
      }
    }, i.variant === "circular" && {
      borderRadius: "50%"
    }, i.variant === "rounded" && {
      borderRadius: (e.vars || e).shape.borderRadius
    }, i.hasChildren && {
      "& > *": {
        visibility: "hidden"
      }
    }, i.hasChildren && !i.width && {
      maxWidth: "fit-content"
    }, i.hasChildren && !i.height && {
      height: "auto"
    });
  }, ({ ownerState: e }) => e.animation === "pulse" && vt(Nt || (Nt = _e`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), eo), ({ ownerState: e, theme: i }) => e.animation === "wave" && vt(Pt || (Pt = _e`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), to, (i.vars || i).palette.action.hover)), Fe = l.forwardRef(function(i, n) {
    const o = We({
      props: i,
      name: "MuiSkeleton"
    }), { animation: a = "pulse", className: r, component: d = "span", height: h, style: c, variant: p = "text", width: g } = o, C = ke(o, Zi), x = Q({}, o, {
      animation: a,
      component: d,
      variant: p,
      hasChildren: !!C.children
    }), m = Qi(x);
    return t.jsx(no, Q({
      as: d,
      ref: n,
      className: oe(m.root, r),
      ownerState: x
    }, C, {
      style: Q({
        width: g,
        height: h
      }, c)
    }));
  }), pn = () => (X(), t.jsxs(_, {
    children: [
      t.jsxs(io, {
        children: [
          t.jsxs(oo, {
            children: [
              t.jsx(Fe, {
                variant: "rectangular",
                sx: {
                  bgcolor: "#F4F5FA"
                },
                style: {
                  width: "8rem",
                  height: "8rem",
                  borderRadius: "32px",
                  marginRight: "2%"
                }
              }),
              t.jsxs(so, {
                children: [
                  t.jsx(Fe, {
                    variant: "rectangular",
                    sx: {
                      bgcolor: "#F4F5FA"
                    },
                    style: {
                      width: "40%",
                      height: "2.2rem",
                      borderRadius: "5px",
                      marginTop: "3%"
                    }
                  }),
                  t.jsx(Fe, {
                    variant: "rectangular",
                    sx: {
                      bgcolor: "#F4F5FA"
                    },
                    style: {
                      width: "20%",
                      height: "1.1rem",
                      borderRadius: "5px",
                      marginTop: "2%"
                    }
                  })
                ]
              })
            ]
          }),
          t.jsx(Fe, {
            variant: "rectangular",
            sx: {
              bgcolor: "#F4F5FA"
            },
            style: {
              width: "100%",
              height: "2.7rem",
              borderRadius: "9px",
              marginTop: "4%"
            }
          })
        ]
      }),
      t.jsx(_, {
        padding: "40px 0 40px 0",
        children: t.jsx(pt, {
          type: ht.SEAMLESS,
          title: "Loading Channel Details. Please wait..."
        })
      })
    ]
  })), io = s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`, oo = s.div`
  width: 100%;
  height: fit-content;
  display: flex;
`, so = s.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`, ao = () => {
    var _a, _b;
    const e = X(), { aliasDetails: { aliasChainId: i } } = P((n) => n.admin);
    return t.jsxs(K, {
      margin: "15px 20px 15px 20px",
      flex: "1",
      display: "flex",
      direction: "column",
      children: [
        t.jsxs(ge, {
          textAlign: "center",
          margin: "30px 0px 0px 0px",
          color: e.color,
          size: "16px",
          textTransform: "none",
          weight: "500",
          children: [
            "We\u2019re setting up your channel on the ",
            (_b = (_a = xt[i]) == null ? void 0 : _a.label) == null ? void 0 : _b.split(" ")[0],
            " Alias Network."
          ]
        }),
        " ",
        t.jsx(ge, {
          textAlign: "center",
          margin: "5px 0px 60px 0px",
          color: e.color,
          size: "16px",
          textTransform: "none",
          weight: "500",
          children: "This usually takes around 5 minutes."
        }),
        t.jsxs(K, {
          display: "flex",
          direction: "row",
          align: "center",
          margin: "50px 0px",
          children: [
            t.jsx(Jt, {
              color: "#cf1c84",
              loading: true,
              height: 13,
              width: 4
            }),
            t.jsx(An, {
              margin: "auto 15px",
              textTransform: "none",
              color: e.color,
              size: "16px",
              weight: "600",
              children: "Processing"
            })
          ]
        })
      ]
    });
  }, ro = () => {
    var _a;
    xe();
    const e = X(), { switchChain: i } = fe(), { aliasDetails: { aliasChainId: n } } = P((o) => o.admin);
    return t.jsxs(K, {
      margin: "15px 20px 15px 20px",
      flex: "1",
      display: "flex",
      direction: "column",
      children: [
        t.jsxs(ge, {
          textAlign: "center",
          margin: "30px 0px 0px 0px",
          color: e.color,
          size: "16px",
          textTransform: "none",
          weight: "500",
          line: "24px",
          children: [
            "Change your wallet network to ",
            t.jsx(lo, {
              children: (_a = xt[n]) == null ? void 0 : _a.label
            }),
            " to start ",
            t.jsx("br", {}),
            "verifying your Channel Alias."
          ]
        }),
        t.jsx(Sn, {
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
          margin: "spacing-xxxl spacing-none spacing-xxl spacing-none",
          children: t.jsx(ie, {
            variant: "primary",
            onClick: () => i(n),
            size: "large",
            children: t.jsx(Mn, {
              color: "white",
              children: "Change Network"
            })
          })
        })
      ]
    });
  }, lo = s.b`
  color: #cf1c84;
`, co = ({ aliasEthAccount: e, setAliasVerified: i }) => {
    var _a, _b;
    const n = X(), { account: o, provider: a, chainId: r } = fe(), d = a.getSigner(o), h = Re(), c = new En(xt[r].commAddress, In.epnsComm, d), [p, g] = l.useState(""), [C, x] = l.useState(false), m = e, u = {
      80002: {
        label: "Amoy MATIC",
        url: "https://faucet.polygon.technology/"
      },
      97: {
        label: "Testnet BNB",
        url: "https://testnet.bnbchain.org/faucet-smart"
      },
      11155420: {
        label: "Sepolia OpETH",
        url: "https://faucet.quicknode.com/optimism/sepolia"
      },
      2442: {
        label: "Polygon zkEVM ETH",
        url: "https://faucet.polygon.technology/"
      },
      421614: {
        label: "Sepolia ArbETH",
        url: "https://faucet.quicknode.com/arbitrum/sepolia"
      },
      123: {
        label: "Fuse SPARK",
        url: "https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      },
      111557560: {
        label: "Cyber ETH",
        url: "https://cyber-testnet.testnets.rollbridge.app/"
      },
      84532: {
        label: "Base Sepolia",
        url: "https://www.alchemy.com/faucets/base-sepolia"
      },
      59141: {
        label: "Linea Sepolia",
        url: "https://www.infura.io/faucet/linea"
      }
    }, T = async () => {
      m == e && L();
    }, F = async () => {
      const { aliasVerified: V } = await Rn({
        account: o,
        chainId: r
      }).then((D) => D ? (h(i(D.is_alias_verified)), {
        aliasVerified: D.is_alias_verified
      }) : {
        aliasVerified: null
      });
      return {
        aliasVerified: V
      };
    }, L = () => {
      g("Processing"), c.verifyChannelAlias(m).then(async (D) => {
        console.debug(D), g("Transaction Sent! It usually takes 5mins to verify."), await D.wait(1), setTimeout(() => {
          g("Transaction Mined!");
        }, 2e3), setTimeout(() => {
          g("Loading...");
        }, 2e3);
        const b = setInterval(async () => {
          const { aliasVerified: M } = await F();
          M && (setTimeout(() => {
            x(true);
          }, 1e3), clearInterval(b), h(Ie(0)));
        }, 5e3);
      }).catch(() => {
        g("There was an error"), setTimeout(() => {
          g("");
        }, 2e3);
      });
    };
    return t.jsxs(K, {
      margin: "15px 20px 15px 20px",
      flex: "1",
      display: "flex",
      direction: "column",
      children: [
        t.jsx(ue, {
          textAlign: "center",
          margin: "60px 0px 0px 0px",
          color: n.color,
          fontSize: "16px",
          textTransform: "none",
          fontWeight: "500",
          lineHeight: "24px",
          maxWidth: "400px",
          children: "You\u2019re almost there! Verify the Channel Alias to enable sending notifications from it."
        }),
        p === "" && t.jsx(ge, {
          textAlign: "center",
          margin: "60px 0px 0px 0px",
          color: "#CF1C84",
          size: "16px",
          textTransform: "none",
          weight: "500",
          line: "24px",
          children: o
        }),
        p === "" && le.appEnv !== "prod" && t.jsxs(ue, {
          padding: "10px",
          margin: "10px",
          borderRadius: N.ADJUSTMENTS.RADIUS.SMALL,
          background: n.default.secondaryBg,
          color: n.default.secondaryColor,
          children: [
            "You will need",
            " ",
            t.jsx(kn, {
              href: (_a = u[r]) == null ? void 0 : _a.url,
              target: "_blank",
              children: (_b = u[r]) == null ? void 0 : _b.label
            }),
            " ",
            "to proceed."
          ]
        }),
        !C && (p ? t.jsxs(K, {
          display: "flex",
          direction: "row",
          align: "center",
          margin: "60px 0px 0px 0px",
          children: [
            t.jsx(Jt, {
              color: "#cf1c84",
              loading: true,
              height: 13,
              width: 4
            }),
            t.jsx(ge, {
              color: n.color,
              weight: "600",
              textTransform: "none",
              line: "22px",
              size: "16px",
              margin: "0px 10px",
              children: p
            })
          ]
        }) : t.jsx(K, {
          width: "15em",
          self: "center",
          align: "center",
          margin: "60px auto 0px auto",
          children: t.jsx(ie, {
            variant: "primary",
            size: "medium",
            onClick: T,
            children: "Verify Alias Address"
          })
        })),
        C && t.jsxs(K, {
          display: "flex",
          direction: "row",
          align: "center",
          margin: "60px 0px 0px 0px",
          children: [
            t.jsx(Dn, {
              color: "#30CC8B",
              size: 30
            }),
            t.jsx(ge, {
              color: n.color,
              weight: "600",
              textTransform: "none",
              line: "22px",
              size: "16px",
              margin: "0px 10px",
              children: "Verification Complete"
            })
          ]
        })
      ]
    });
  }, po = ({ aliasEthAccount: e, setAliasVerified: i }) => {
    const { processingState: n } = P((o) => o.channelCreation);
    return t.jsxs(Ve, {
      children: [
        t.jsxs(ho, {
          children: [
            t.jsxs(ot, {
              type: n >= 1 ? "active" : "inactive",
              active: n == 1 ? "active" : "inactive",
              children: [
                t.jsx("div", {
                  children: "Waiting for Setup"
                }),
                t.jsx(it, {
                  type: n >= 1 ? "active" : "inactive"
                })
              ]
            }),
            t.jsxs(ot, {
              type: n >= 2 ? "active" : "inactive",
              active: n == 2 ? "active" : "inactive",
              children: [
                t.jsx("div", {
                  children: "Change Network"
                }),
                t.jsx(it, {
                  type: n >= 2 ? "active" : "inactive"
                })
              ]
            }),
            t.jsxs(ot, {
              type: n >= 3 ? "active" : "inactive",
              active: n == 3 ? "active" : "inactive",
              children: [
                t.jsx("div", {
                  children: "Verify Alias Network"
                }),
                t.jsx(it, {
                  type: n >= 3 ? "active" : "inactive"
                })
              ]
            }),
            t.jsx(xo, {})
          ]
        }),
        n === 1 && t.jsx(ao, {}),
        n === 2 && t.jsx(ro, {}),
        n === 3 && t.jsx(co, {
          aliasEthAccount: e,
          setAliasVerified: i
        })
      ]
    });
  }, ho = s.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 50px 0px 0px 0px;
  @media (max-width: 768px) {
    display: flex;
    margin: 0px 0px 0px 0px;
  }
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`, it = s.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({ type: e }) => e === "active" && Ue`
      background: #e20880;
    `};
`, xo = s.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`, ot = s.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px;
  color: #657795;
  div {
    margin: 5px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 4px;
    div {
      font-weight: 500;
      font-size: 15px;
    }
  }

  ${({ type: e }) => e === "active" && Ue`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({ active: e }) => e === "active" && Ue`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({ active: e }) => e === "inactive" && Ue`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`, hn = ({ heading: e, subHeading: i }) => {
    const n = X();
    return t.jsx(Le, {
      theme: n,
      children: t.jsxs(uo, {
        children: [
          t.jsx(go, {
            style: {
              color: n.default.color
            },
            children: e
          }),
          t.jsx(fo, {
            style: {
              color: n.modalMessageColor
            },
            children: i
          })
        ]
      })
    });
  }, uo = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4%;
`, go = s.h1`
  font-family: FK Grotesk Neu;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5%;
  text-shadow: none;
`, fo = s.h4`
  text-shadow: none;
  width: 90%;
  color: ${(e) => e.modalMessageColor || "#657795"};
  font-family: FK Grotesk Neu;
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  padding: 0;
`, dt = B.forwardRef(({ title: e }, i) => {
    const n = X();
    return t.jsx(Le, {
      theme: n,
      children: t.jsxs(mo, {
        children: [
          t.jsx(Co, {
            style: {
              color: n.modalMessageColor
            },
            children: e
          }),
          t.jsx(bo, {
            ref: i,
            radius: "12px",
            padding: "0.8rem",
            border: "1px solid #BAC4D6",
            style: {
              color: n.modalMessageColor
            }
          })
        ]
      })
    });
  }), mo = s.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0%;
`, Co = s.h4`
  font-family: FK Grotesk Neu;
  font-size: ${(e) => e.fontSize || "0.95rem"};
  font-weight: ${(e) => e.fontWeight || "600"};
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${(e) => e.marginBottom || "3%"};
`, bo = s(lt)`
  box-sizing: border-box;
  width: 100%;
`, xn = ({ text: e, onClick: i, isLoading: n, topMargin: o, loaderTitle: a }) => {
    const r = X();
    return t.jsx(Le, {
      theme: r,
      children: t.jsx(wo, {
        style: {
          marginTop: o || "55px"
        },
        children: n ? t.jsx(yo, {
          children: t.jsx(pt, {
            type: ht.SEAMLESS,
            spinnerSize: 26,
            spinnerColor: "#FFF",
            title: a ?? "",
            titleColor: "#fff"
          })
        }) : t.jsx(ie, {
          onClick: i,
          variant: "primary",
          size: "large",
          children: e
        })
      })
    });
  }, wo = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 55px;
`, yo = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  color: #fff;
  box-sizing: border-box;
  background-color: #cf1c84;
  border-radius: 15px;
  // padding: 3% 8%;
  padding: 8px 16px;
`, jo = ({ onConfirm: e, onClose: i, toastObject: n }) => {
    const o = B.useRef();
    X();
    const [a, r] = B.useState(false), d = () => !a && i(), h = B.useRef(null);
    me(h, () => d());
    const c = () => {
      var _a;
      r(true);
      const p = (_a = o == null ? void 0 : o.current) == null ? void 0 : _a.value;
      e(p).then(async (g) => {
        console.debug(g), n.showMessageToast({
          toastTitle: "Delegate Added",
          toastMessage: "Delegate has been added successfully",
          toastType: "SUCCESS",
          getToastIcon: (C) => t.jsx(ye, {
            size: C,
            color: "green"
          })
        }), i();
      }).catch((g) => {
        console.error({
          err: g
        }), n.showMessageToast({
          toastTitle: "Transaction Failed",
          toastMessage: "Adding a delegate failed.",
          toastType: "ERROR",
          getToastIcon: (C) => t.jsx(J, {
            size: C,
            color: "red"
          })
        });
      }).finally(() => {
        r(false);
      });
    };
    return t.jsxs(vo, {
      ref: h,
      children: [
        t.jsx(hn, {
          heading: "Add Delegate",
          subHeading: "Add an account who can send notifications on behalf of the channel"
        }),
        t.jsx(dt, {
          ref: o,
          title: "Delegate Address"
        }),
        t.jsx(xn, {
          text: "Add Delegate",
          onClick: c,
          isLoading: a
        })
      ]
    });
  }, vo = s.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${(e) => e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${v.laptop}){
    width:50vw;
  }
  @media(${v.mobileL}){
    width:95vw;
  }
`, To = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7VfBbtpAEJ2xuaRSJT4BpDSVcqjCrUd6KkFA+YGC8wXAqUfMMaeQL2BpP6AWpMWHSqFfkBxbqRL0D7hU4ZB4OrvYYAzExiBFlfokYFnWM29nZ2YfAP8ycgUjK1+wAxBiQDpFpCYPs+7UmAjP7CsxhC2xFYFc2UjhA3X8jt3PlGtMODq2bEuMI5oEPcqibNlIHh+9+gAOWK6zCe/4fJrAs2+97vnhUQYR4YTnXyNB/cXLk+Thcebnrx+3kzDboRE4LVVqQGjyMCm/E+9yqmNjaIkl4zI6cO+YzKTqTo0JybR7H7uxCLjnLMOdUo4Jhry8FXbOMyLU4YhkoxDBDY53TrBc0TAQlJ2UOzUkne0E8mOJQL5QaRKqcEtMwMHW4Itoww5YJeI0Bv1Pc5uafzE7r/u+irs/IGBHTHVOXKLvixmt6f9dC6xP+sb1g+d0kytVqhATueJ74+CBbmCRmEEfKwQUUMcMzGo8hYTitFgdvS1W3kFUx5xH/Mw1gqaSWCYw59GbdWsT6ya/WuKWP9L+89MArXyx+mijUY2KSxGQvB1PCLW63e+oCmBSK8+sjYAHuy/EoN9NM/sWyGoAMLgTjphIR5WbC9mo8qVKExfhlo2qdadj2u51Hu0DCYgALkGTHQqv0bhEyuy07RD95vEFAXpna3G5NaK240gEFImZQYOJmHMi3CHRreSojSo2gRUiBUNww/oMKqt5x1fx+oUGMeHuVN0HpKtLKhZiE9gX/hN4cgLBKpBJleSOdcG1fBmhllPyLWydbFTPHKfGper5mCMQAdXxJOrcXK53uYg8SEXFF9KIZqpK3riXSx6DD2yjaDhSak/crjcJm1BFtVmSRVA06whsq6hCRWmQiF96+wnIcz64d9q+uz+Soor0v8C9ZutsvOYZ5122vXPlscljqaZmyplvwmkC2kHlHJuAn0hAei9BnXNiVXjujcCcSEzJvnfs48/pk+MvrsOCp5uEilcAAAAASUVORK5CYII=", Bt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ZZNctMwFMef5DrD1Juw4CMMC/sG7kyddkdyAtoTpJyAcALCCSgnaDhBcoNk2cadqXuCmg2Z0gXZ0GESLPGekWkm9YfUCUMX/c9oJFvP8s/S018GeNB/FjMJvvD9+iPb3uOMvcZLH4uruiIsMZbhs8nkMxgoF+Cy2byg+no+3/KiaEbtqe+7lm2fScbqUK4YS08XhJf0uZu12oi+Og20LJ9eLqUcMym7gnMPX8Ko4PWWkPKNermLpX/VbL6Hu2q6u+vSLGCR34LgaPl+1bNfd3a69BwVHQhWBsGFGGHT5VIePgnDd6ApfPkeVgNqCyHajdPTcVFs4RI0jo/jrC0Y65pMKS7LMGEsBeacH5XFFgJMg+AAKxfXN01CgYllAvHi5OQQVE5Mt7dbYAqgthpg4nVVgqUQOL0d0BTGpzuBWVbHGACkdNOHpTxvhGEfB/ugevplX7SsRMqhGqNlDsAYGQ08DUMyGWhMJr0MAtd1gLvDhwo5i0WsmnVzgBwRBPrAJxoQl2ZA5lQW/1iZ2NoASM/DsIvLQ2vrcjSqKogqGQOQaosFQUQZROaWawP4fjPgLK+fphYh2qC22WY5BMUUumguwM+NjTTBMHtjKBBB4HmQQfiObX/MDVQ+YiVJXRsAd4BLFTrgFygRuWUGgUl5cBUEtyBwjHOqkz/Htx4A3mwpkDFUiCBwpvbxUJnlWTZjLN3GjHN9AHzqVdopxBg0RF6RCLFP7VXL/qXGQMiOFkB2BmCJMxPSEZ14eZb9ksbAHYMAkJeoPOfGW9XsgaGKLPvacdo/HMfzbozpr279D6DFjjChWrAezfDL22UzmZcDdI7HsB5VWrbRX7GpLoOgjwlNuRCL+bzdiKJ4NeZOVqyrVcvOizGaAfW77laExfhL5mUXZOvzWu2M2sv3M23AP5Y6kj140H3VbwTNOdSVfMb/AAAAAElFTkSuQmCC", Ao = (e) => l.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  }, l.createElement("path", {
    d: "M12 28H20",
    stroke: "#30CC8B",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M7.02538 13.9999C7.02538 12.8213 7.25753 11.6542 7.70857 10.5653C8.1596 9.47642 8.8207 8.48702 9.6541 7.65362C10.4875 6.82021 11.4769 6.15912 12.5658 5.70808C13.6547 5.25705 14.8218 5.0249 16.0004 5.0249C17.179 5.0249 18.3461 5.25705 19.435 5.70808C20.5239 6.15912 21.5133 6.82021 22.3467 7.65362C23.1801 8.48702 23.8412 9.47642 24.2922 10.5653C24.7432 11.6542 24.9754 12.8213 24.9754 13.9999C24.9754 18.4749 25.9129 21.0749 26.7379 22.4999C26.8255 22.6517 26.8717 22.8238 26.8719 22.999C26.872 23.1743 26.8261 23.3465 26.7388 23.4984C26.6514 23.6503 26.5257 23.7766 26.3741 23.8646C26.2226 23.9526 26.0506 23.9993 25.8754 23.9999H6.12538C5.95015 23.9993 5.77815 23.9526 5.62662 23.8646C5.47509 23.7766 5.34935 23.6503 5.262 23.4984C5.17465 23.3465 5.12875 23.1743 5.12891 22.999C5.12906 22.8238 5.17526 22.6517 5.26288 22.4999C6.08788 21.0749 7.02538 18.4749 7.02538 13.9999Z",
    stroke: "#30CC8B",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M22.9248 3C24.9609 4.28526 26.6041 6.10584 27.6748 8.2625",
    stroke: "#30CC8B",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M4.3252 8.2625C5.39585 6.10584 7.03913 4.28526 9.0752 3",
    stroke: "#30CC8B",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), So = ({ onClose: e, onConfirm: i, toastObject: n }) => {
    const o = B.useRef(), a = B.useRef(), [r, d] = B.useState(false);
    X();
    const h = () => !r && e(), c = B.useRef(null);
    me(c, () => h());
    const p = () => {
      var _a, _b;
      const g = (_a = a == null ? void 0 : a.current) == null ? void 0 : _a.value, C = (_b = o == null ? void 0 : o.current) == null ? void 0 : _b.value;
      if (d(true), g == "" || C == "") {
        n.showMessageToast({
          toastTitle: "Transaction Failed",
          toastMessage: "Fields are empty! Retry",
          toastType: "ERROR",
          getToastIcon: (x) => t.jsx(J, {
            size: x,
            color: "red"
          })
        }), setTimeout(() => {
          d(false);
        }, 500);
        return;
      } else if (parseInt(g) < 60) {
        n.showMessageToast({
          toastTitle: "Transaction Failed",
          toastMessage: "Poll Time must be at least 60 sec",
          toastType: "ERROR",
          getToastIcon: (x) => t.jsx(J, {
            size: x,
            color: "red"
          })
        }), setTimeout(() => {
          d(false);
        }, 500);
        return;
      }
      i(g, C).then(async (x) => {
        console.debug(x), n.showMessageToast({
          toastTitle: "Subgraph Added",
          toastMessage: "Subgraph has been added successfully",
          toastType: "SUCCESS",
          getToastIcon: (m) => t.jsx(ye, {
            size: m,
            color: "green"
          })
        }), e();
      }).catch((x) => {
        console.error(x), n.showMessageToast({
          toastTitle: "Transaction Failed",
          toastMessage: "Adding a subgraph failed.",
          toastType: "ERROR",
          getToastIcon: (m) => t.jsx(J, {
            size: m,
            color: "red"
          })
        });
      }).finally(() => {
        d(false);
      });
    };
    return t.jsxs(Mo, {
      ref: c,
      children: [
        t.jsx(hn, {
          heading: "Add Subgraph",
          subHeading: "Enter subgraph ID and Poll time (at least 60 sec)"
        }),
        t.jsx(dt, {
          ref: o,
          title: "Subgraph ID"
        }),
        t.jsx(dt, {
          ref: a,
          title: "Poll Time (in seconds)"
        }),
        t.jsx(xn, {
          text: "Add Subgraph",
          onClick: p,
          isLoading: r
        })
      ]
    });
  }, Mo = s.div`
  min-width: 32vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${(e) => e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${v.laptop}){
    width:50vw;
  }
  @media(${v.mobileL}){
    width:95vw;
  }
`, Eo = (e) => l.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  }, l.createElement("path", {
    d: "M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z",
    stroke: "#657795",
    strokeWidth: 2,
    strokeMiterlimit: 10
  }), l.createElement("path", {
    d: "M30 18L18 30",
    stroke: "#657795",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M30 30L18 18",
    stroke: "#657795",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Io = (e) => l.createElement("svg", {
    width: 16,
    height: 19,
    viewBox: "0 0 16 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  }, l.createElement("path", {
    d: "M1.58691 1.66772L14.9338 16.3492",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M5.58984 17.0166H10.9286",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M5.29883 1.78445C6.21203 1.26002 7.24885 0.989294 8.30187 1.00032C11.6052 1.02535 14.2496 3.76979 14.2496 7.08148V7.67374C14.2496 9.901 14.5999 11.4275 15.0003 12.4536",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), l.createElement("path", {
    d: "M13.1148 14.3471H1.66989C1.55171 14.3475 1.43553 14.3166 1.33323 14.2574C1.23093 14.1982 1.14617 14.113 1.08763 14.0103C1.02909 13.9077 0.99886 13.7913 1.00003 13.6731C1.00121 13.5549 1.03374 13.4392 1.09431 13.3377C1.64486 12.3951 2.2705 10.66 2.2705 7.67365V7.00631C2.26981 5.78539 2.63918 4.59293 3.3299 3.58618",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), ko = ({ onConfirm: e, onClose: i, toastObject: n }) => {
    const o = X(), a = Re(), { channelDetails: r } = P((x) => x.admin), { CHANNNEL_DEACTIVATED_STATE: d } = P((x) => x.channels), [h, c] = B.useState(false), p = () => !h && i(), g = B.useRef(null);
    me(g, () => p());
    const C = () => {
      c(true), e().then(async (x) => {
        console.debug(x), console.info("Transaction Sent!"), n.showMessageToast({
          toastTitle: "Channel Deactivated",
          toastMessage: "Please Activate Channel to Send Notifications from it",
          toastType: "ERROR",
          getToastIcon: (m) => t.jsx(J, {
            size: m,
            color: "red"
          })
        }), await x.wait(1), console.info("Transaction Mined!"), a(gt({
          ...r,
          channelState: d
        })), c(false), i();
      }).catch((x) => {
        console.error("!!!Error deactivateChannel() --> %o", x), console.error({
          err: x
        }), n.showMessageToast({
          toastTitle: "Transaction Failed",
          toastMessage: "Channel deactivation failed.",
          toastType: "ERROR",
          getToastIcon: (m) => t.jsx(J, {
            size: m,
            color: "red"
          })
        }), c(false);
      });
    };
    return t.jsx(Le, {
      theme: o,
      children: t.jsx(Do, {
        ref: g,
        children: h ? t.jsxs(Ro, {
          children: [
            t.jsx(Xt, {
              size: 42,
              color: N.COLORS.PRIMARY_PINK,
              type: ut.PROCESSING
            }),
            t.jsx(Lo, {
              children: "Verifying"
            })
          ]
        }) : t.jsxs(t.Fragment, {
          children: [
            t.jsx($o, {
              style: {
                color: o.modalMessageColor
              },
              children: "Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it."
            }),
            t.jsxs(No, {
              children: [
                t.jsx(Eo, {
                  width: 36,
                  height: 36,
                  onClick: p
                }),
                t.jsx(Po, {
                  onClick: C,
                  children: t.jsx(Io, {})
                })
              ]
            })
          ]
        })
      })
    });
  }, Do = s.div`
  width: 446px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${(e) => e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;

  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
    flex-direction: column;
  }
`, Ro = s(ee)`
  flex-direction: row;
  //   margin-top:33px;
`, Lo = s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${(e) => e.theme.editChannelPrimaryText};
`, $o = s.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  margin-right: 40px;
  @media (max-width: 500px) {
    margin-right: 20px;
  }
  @media (max-width: 400px) {
    margin: 14px 6px 24px 6px;
  }
`;
  s.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;
  const No = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`, Po = s.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;
  s.img`
  height: 36px;
  width: 17px;
`;
  const Bo = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.8312%2012.3465L12.8975%208.28027L0.99987%208.28027'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.06626%201.00014L1%205.06641L12.8976%205.06641'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", un = ({ onMintPushToken: e, noOfPushTokensToCheck: i, containerProps: n }) => {
    const { account: o, provider: a } = fe(), r = le.appEnv === "prod", [d, h] = l.useState(false), c = async () => {
      const C = await pi({
        address: o,
        provider: a,
        noOfPushTokensToCheck: i
      });
      h(!C);
    }, { isModalOpen: p, ModalComponent: g } = Te();
    return l.useEffect(() => {
      (async () => await c())();
    }, [
      i
    ]), t.jsxs(t.Fragment, {
      children: [
        t.jsx(Fo, {
          children: d ? t.jsxs(Oo, {
            style: n,
            children: [
              t.jsx(Uo, {
                children: r ? "You do not have sufficient PUSH Tokens. Swap to add more PUSH." : "Follow these steps to ensure you have enough Testnet Push to proceed."
              }),
              r ? t.jsx(ie, {
                leadingIcon: t.jsx(ze, {
                  width: "12px",
                  height: "12px",
                  margin: "0 0.5rem 0 0",
                  src: Bo
                }),
                size: "extraSmall",
                children: "Swap Tokens for PUSH"
              }) : t.jsxs(zo, {
                children: [
                  t.jsxs(Vo, {
                    href: "https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    target: "_blank",
                    children: [
                      t.jsx(Ft, {
                        children: "1"
                      }),
                      t.jsx(Ot, {
                        children: "Sepolia ETH Faucet"
                      })
                    ]
                  }),
                  t.jsxs(Ho, {
                    onClick: async () => {
                      await e(1e3), await c();
                    },
                    children: [
                      t.jsx(Ft, {
                        children: "2"
                      }),
                      t.jsx(Ot, {
                        children: "Get Testnet PUSH"
                      })
                    ]
                  })
                ]
              })
            ]
          }) : ""
        }),
        p && t.jsx(g, {
          InnerComponent: Ln,
          InnerComponentProps: {
            defaultPushTokenAmount: i
          },
          modalPadding: "0px",
          modalPosition: Ae.ON_ROOT
        })
      ]
    });
  }, Fo = s.div`
  width: 100%;
  transform: translateY(-40px);
`, Oo = s.div`
  box-sizing: border-box;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #f4dcea;
  border-radius: 0px 0px 28px 28px;
  padding: 32px 32px 20px 32px;
  margin-top: 24px;
  margin-bottom: -40px;

  @media ${v.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 24px 16px 24px;
  }
`, Uo = s(ue)`
    color:#D53A94;
    font-size:15px
    font-weight:400;
    line-height:21px;
    text-align: left;
    margin:0 2rem 0 0;
    max-width: 45%;
    @media ${v.laptop} {
        max-width: 55%;
    }
    @media ${v.tablet} {
        max-width: 100%;
        margin: 0;
        margin-bottom: 0.8rem;
    }
`, zo = s.div`
  display: flex;
  flex-direction: row;
`, Vo = s.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 1rem;
  @media ${v.laptop} {
    margin: 0 1.5rem 0 0;
  }
`, Ft = s(ue)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border: 1.5px solid #d53a94;
  color: #cf1c84;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  max-width: 18px;
  max-height: 18px;
  margin-right: 0.6rem;
`, Ho = s.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  @media ${v.laptop} {
    margin: 0;
  }
`, Ot = s.label`
  color: #fff;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`, _o = (e) => l.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  }, l.createElement("path", {
    d: "M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1209 6.84638 16.2635 4.78216 14.7407 3.25932C13.2178 1.73648 11.1536 0.87913 9 0.875ZM12.8672 7.57812L8.28907 11.9531C8.17071 12.0645 8.01406 12.126 7.85157 12.125C7.77214 12.1261 7.69328 12.1115 7.61953 12.082C7.54578 12.0525 7.47861 12.0087 7.42188 11.9531L5.13282 9.76562C5.06933 9.71023 5.01769 9.64257 4.98102 9.56672C4.94434 9.49086 4.92338 9.40837 4.9194 9.32421C4.91542 9.24004 4.92849 9.15594 4.95784 9.07696C4.98719 8.99798 5.03221 8.92575 5.09019 8.86461C5.14816 8.80347 5.2179 8.75469 5.29522 8.72119C5.37253 8.68769 5.45582 8.67017 5.54007 8.66968C5.62433 8.66919 5.70781 8.68574 5.78551 8.71834C5.86321 8.75094 5.93351 8.79891 5.99219 8.85938L7.85157 10.6328L12.0078 6.67188C12.1293 6.56585 12.2871 6.51091 12.4482 6.51853C12.6093 6.52615 12.7612 6.59575 12.8722 6.71277C12.9832 6.8298 13.0446 6.98519 13.0437 7.14646C13.0428 7.30773 12.9795 7.4624 12.8672 7.57812Z",
    fill: "#D53893"
  })), Go = "DD MMM, YYYY", Wo = ({ onConfirm: e, onClose: i, toastObject: n }) => {
    const o = X(), { chainId: a, account: r, provider: d } = fe(), h = Re(), { channelDetails: c, canVerify: p, aliasDetails: { isAliasVerified: g, aliasAddrFromContract: C } } = P((f) => f.admin), { CHANNEL_ACTIVE_STATE: x, CHANNNEL_DEACTIVATED_STATE: m } = P((f) => f.channels), [u, T] = l.useState("");
    let { channelState: F } = c;
    F || (F = c.activation_status);
    const L = F === x, V = F === m, [D, b] = l.useState(false), [M, E] = l.useState(false), [H, G] = l.useState(0), q = () => !D && i(), k = l.useRef(null);
    me(k, () => q());
    const O = le.coreContractChain === a;
    Ce(600), l.useEffect(() => {
      !c || !O || async function() {
        const f = c.channelStartBlock.toString(), j = await new qt(le.coreRPC).getBlock(+f), A = Zt(j.timestamp * 1e3);
        T(A.format(Go));
      }();
    }, [
      c
    ]), l.useEffect(() => {
      !r || !d || async function() {
        const f = await an({
          address: r,
          provider: d,
          contractAddress: He.epnscore
        });
        G(parseInt(f));
        const j = parseInt(f);
        j >= 50 && j != 0 ? E(true) : E(false);
      }();
    }, [
      r,
      d
    ]);
    const W = async (f) => {
      await rn({
        noOfTokens: f,
        provider: d,
        account: r
      });
    }, R = async () => {
      if (b(true), !d) return;
      const f = d.getSigner(r);
      n.showLoaderToast({
        loaderMessage: "Waiting for Confirmation..."
      });
      try {
        const j = await ln({
          signer: f,
          contractAddress: He.epnscore,
          amount: 50 - H
        });
        console.debug("response", j), j && (G(50), E(true), n.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Successfully approved Push!",
          toastType: "SUCCESS",
          getToastIcon: (A) => t.jsx(ye, {
            size: A,
            color: "green"
          })
        }), b(false));
      } catch (j) {
        console.error(j), j.code == "ACTION_REJECTED" ? n.showMessageToast({
          toastTitle: "Error",
          toastMessage: "User denied message signature.",
          toastType: "ERROR",
          getToastIcon: (A) => t.jsx(J, {
            size: A,
            color: "red"
          })
        }) : (n.showMessageToast({
          toastTitle: "Error",
          toastMessage: "There was an error in approving PUSH Token",
          toastType: "ERROR",
          getToastIcon: (A) => t.jsx(J, {
            size: A,
            color: "red"
          })
        }), console.error("Error --> %o", j), console.error({
          err: j
        }));
      }
      b(false);
    }, w = async () => {
      b(true);
      try {
        const f = Qt("50", 18), j = await e(f);
        n.showMessageToast({
          toastTitle: "Reactivating channel",
          toastMessage: "Reactivate channel.",
          toastType: "SUCCESS",
          getToastIcon: (A) => t.jsx(ye, {
            size: A,
            color: "green"
          })
        }), await j.wait(), console.info("Transaction Mined!"), n.showMessageToast({
          toastTitle: "Channel Reactivated",
          toastMessage: "Channel has been reactivated. You can now send notifications from it",
          toastType: "SUCCESS",
          getToastIcon: (A) => t.jsx(ye, {
            size: A,
            color: "green"
          })
        }), h(gt({
          ...c,
          channelState: x
        })), i(), b(false);
      } catch (f) {
        console.error("Error reactivateChannel", {
          err: f
        }), n.showMessageToast({
          toastTitle: "Transaction Failed",
          toastMessage: "Channel reactivation failed.",
          toastType: "ERROR",
          getToastIcon: (j) => t.jsx(J, {
            size: j,
            color: "red"
          })
        }), b(false);
      }
    };
    return t.jsx(Le, {
      theme: o,
      children: t.jsxs(Ko, {
        ref: k,
        children: [
          t.jsxs(Yo, {
            children: [
              t.jsx(Jo, {
                children: "Reactivate Channel"
              }),
              t.jsx(Xi, {
                onClick: q,
                style: {
                  padding: "0",
                  marginRight: "0.5rem"
                },
                sx: {
                  "&:hover": {
                    backgroundColor: "transparent"
                  }
                },
                children: t.jsx($n, {
                  size: "1.5rem",
                  style: {
                    color: o.modalIconColor
                  }
                })
              })
            ]
          }),
          t.jsxs(qo, {
            justifyContent: "flex-start",
            alignSelf: "stretch",
            children: [
              t.jsx(Zo, {
                src: c.icon
              }),
              t.jsxs(Ut, {
                alignItems: "flex-start",
                padding: "5px 0px",
                children: [
                  t.jsxs(ss, {
                    children: [
                      c.name,
                      p && t.jsx(Qo, {
                        src: "/verify.png"
                      })
                    ]
                  }),
                  t.jsxs(Ut, {
                    alignItems: "flex-start",
                    flex: "initial",
                    padding: "5px 0px",
                    children: [
                      O && C && !g || !O && !g ? t.jsx(ns, {
                        children: "Alias Network Setup Pending"
                      }) : t.jsxs(Xo, {
                        justifyContent: "flex-start",
                        children: [
                          t.jsxs(es, {
                            children: [
                              t.jsx("img", {
                                style: {
                                  width: "15px"
                                },
                                src: "/subcount.svg",
                                alt: "subscount"
                              }),
                              t.jsx(is, {
                                children: c.subscriber_count
                              })
                            ]
                          }),
                          t.jsx(ts, {
                            active: L,
                            children: L ? "Active" : V ? "Deactivated" : "Blocked"
                          })
                        ]
                      }),
                      u && t.jsxs(os, {
                        children: [
                          "Created ",
                          u
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          t.jsxs(as, {
            children: [
              t.jsx(rs, {
                children: "Channel reactivation fee"
              }),
              t.jsxs(_, {
                flex: "0",
                children: [
                  M ? t.jsx(ls, {
                    src: _o
                  }) : null,
                  t.jsxs(cs, {
                    children: [
                      50,
                      " PUSH"
                    ]
                  })
                ]
              })
            ]
          }),
          t.jsx(un, {
            noOfPushTokensToCheck: 50,
            containerProps: {
              width: "100%"
            },
            onMintPushToken: W
          }),
          D ? t.jsxs(ps, {
            children: [
              t.jsx(Xt, {
                size: 42,
                color: N.COLORS.PRIMARY_PINK,
                type: ut.PROCESSING
              }),
              t.jsx(hs, {
                children: "Verifying Transaction"
              })
            ]
          }) : t.jsx(ds, {
            children: H >= 50 ? t.jsx(zt, {
              onClick: w,
              children: "Reactivate"
            }) : t.jsx(zt, {
              onClick: R,
              children: "Approve PUSH"
            })
          })
        ]
      })
    });
  }, Ko = s.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${(e) => e.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${v.mobileL} {
    padding: 0.5rem;
  }
  @media (${v.laptop}) {
    width: 50vw;
  }
  @media (${v.mobileL}) {
    width: 95vw;
  }
`, Yo = s(_)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${v.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${v.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`, Jo = s(Nn)`
  color: ${(e) => e.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${v.laptop} {
    font-size: 1.2rem;
  }
  @media ${v.mobileL} {
    width: 85%;
  }
`, Ut = s(ee)`
  @media (max-width: 767px) {
    align-items: center;
  }
`, Xo = s(_)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`, qo = s(_)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`, Zo = s.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${v.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${v.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`, Qo = s.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`, es = s.div`
  width: 58px;
  height: 26px;
  margin-bottom: 10px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
  @media ${v.laptop} {
    width: 52px;
    height: 22px;
  }
`, gn = s.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: FK Grotesk Neu, Source Sans Pro;
  @media ${v.laptop} {
    padding: 1px 8px;
  }
`, ts = s(gn)`
  color: #2dbd81;
  color: ${(e) => e.active ? "#2DBD81" : "red"};
  background-color: #c6efd1;
  margin-left: 10px;
  margin-bottom: 10px;
  ${(e) => e.active && `
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`, ns = s(gn)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`, is = s.span`
  font-weight: 400;
  font-size: 14px;
`, os = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  color: #657795;
  margin: 10px 0;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media ${v.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`, ss = s.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${(e) => e.theme.color};
  @media ${v.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`, as = s(_)`
  background: ${(e) => e.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 16px;
  }
  @media ${v.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`, rs = s.p`
  margin: 0px;
  color: ${(e) => e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${v.mobileL} {
    width: 100%;
    text-align: center;
  }
`, ls = s.img``, cs = s.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${v.mobileL} {
    width: 100%;
    text-align: center;
  }
`, ds = s(_)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`, zt = s(Pn)`
  margin: 0 auto;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  background: #cf1c84;
  color: #fff;
  padding: 16px 27px;
  width: 12rem;

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${v.mobileL} {
    width: 80%;
  }
`, ps = s(ee)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
`, hs = s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${(e) => e.theme.editChannelPrimaryText};
`, xs = 50, us = le.coreContractChain;
  function gs({ DropdownRef: e, isDropdownOpen: i, closeDropdown: n }) {
    Re();
    const { account: o, chainId: a } = fe(), { epnsWriteProvider: r, epnsCommWriteProvider: d } = P((z) => z.contracts), { channelDetails: h } = P((z) => z.admin), { CHANNNEL_DEACTIVATED_STATE: c, CHANNEL_BLOCKED_STATE: p } = P((z) => z.channels), { userPushSDKInstance: g } = P((z) => z.user), C = X(), { channelState: x } = h, m = us === a, u = Ce(425), { isModalOpen: T, showModal: F, ModalComponent: L } = Te(), { isModalOpen: V, showModal: D, ModalComponent: b } = Te(), { isModalOpen: M, showModal: E, ModalComponent: H } = Te(), G = i && !T && !V && !M;
    me(e, () => G && n());
    const [q, k] = B.useState(false), [Y, O] = B.useState(xs), [W, R] = B.useState(0), w = x === c, f = x === p, j = f || w;
    B.useEffect(() => {
      R(+di.formatBigNumberToMetric(h.poolContribution, true));
    }, [
      o,
      h.poolContribution
    ]), xe();
    const A = () => {
      f || (w ? D() : F());
    }, pe = xe(), ce = r.reactivateChannel, je = xe(), he = () => r.deactivateChannel(), Z = xe(), te = async (z, re) => {
      if (!(z == "" || re == "") && !(z < 60)) try {
        const ae = z + "+" + re, I = en(ae);
        return r.addSubGraph(I);
      } catch (ae) {
        console.error(ae);
      }
    };
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx("div", {
          children: t.jsx(fs, {
            background: C,
            children: t.jsxs(ms, {
              children: [
                le.appEnv !== "prod" && t.jsx(Vt, {
                  disabled: j,
                  onClick: () => !j && E(),
                  children: t.jsxs("div", {
                    style: {
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center"
                    },
                    children: [
                      t.jsx(Oe, {
                        src: To,
                        alt: "cube"
                      }),
                      t.jsx("div", {
                        style: {
                          width: "10px"
                        }
                      }),
                      "Add SubGraph Details"
                    ]
                  })
                }),
                m && t.jsx(Vt, {
                  isChannelDeactivated: w,
                  onClick: A,
                  children: t.jsx(Cs, {
                    isChannelBlocked: f,
                    isChannelDeactivated: w,
                    children: t.jsxs("div", {
                      style: {
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center"
                      },
                      children: [
                        f ? t.jsx(Oe, {
                          src: Bt,
                          alt: "red-bell"
                        }) : w ? t.jsx(Oe, {
                          src: Ao,
                          alt: "green-bell"
                        }) : t.jsx(Oe, {
                          src: Bt,
                          alt: "red-bell"
                        }),
                        t.jsx("div", {
                          style: {
                            width: "10px"
                          }
                        }),
                        f ? "Channel Blocked" : w ? "Activate Channel" : "Deactivate Channel"
                      ]
                    })
                  })
                })
              ]
            })
          })
        }),
        t.jsx(L, {
          InnerComponent: ko,
          onConfirm: he,
          toastObject: je,
          modalPosition: Ae.ON_ROOT
        }),
        t.jsx(b, {
          InnerComponent: Wo,
          onConfirm: ce,
          toastObject: pe,
          modalMargin: u ? "10rem 1rem 0 1rem" : "",
          modalPosition: Ae.ON_ROOT
        }),
        t.jsx(H, {
          InnerComponent: So,
          onConfirm: te,
          toastObject: Z,
          modalPosition: Ae.ON_ROOT
        })
      ]
    });
  }
  const fs = s.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 240px;
  padding: 16px 4px 24px 4px;
  background: ${(e) => e.background.backgroundBG};
  box-sizing: border-box;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e8f7;
  border: 1px solid;
  border-color: ${(e) => e.theme.default.borderColor};
  border-radius: 16px;
  justify-content: space-between;

  @media (max-width: 600px) {
    left: -90px;
    top: 24px;
  }
`, ms = s.div`
  flex-direction: column;
  gap: 20px;
  display: ${(e) => e.inactive ? "none" : "flex"};
`;
  s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;
  s.div`
  margin: 0px 10px;
`;
  s.div`
  text-decoration: underline;
  color: ${(e) => e.isChannelDeactivated ? "#674C9F" : "#e20880"};
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;
  const Vt = s.button`
  border: 0;
  outline: 0;
  padding: 8px 15px;
  border-radius: 5px;
  position: relative;
  background: ${(e) => e.theme.backgroundBG};
  color: ${(e) => e.theme.dropdownTextColor};
  height: 23px;
  font-family: 'monospace, monospace';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 141%;
  align-items: center;
  &:hover {
    opacity: ${(e) => e.disabled ? 0.5 : 0.9};
    cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
    pointer: hand;
  }
  &:active {
    opacity: ${(e) => e.disabled ? 0.5 : 0.75};
    cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
    pointer: hand;
  }
  opacity: ${(e) => e.disabled ? 0.5 : 1};
`, Cs = s.div`
  color: ${(e) => e.isChannelBlocked ? "red" : e.isChannelDeactivated ? "#30CC8B" : "red "};
`, Oe = s.img`
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
`;
  function fn() {
    const e = B.useRef(null), [i, n] = B.useState(false);
    X();
    const o = () => {
      n((r) => !r);
    }, a = () => {
      n(false);
    };
    return t.jsxs(_, {
      flex: "0",
      ref: e,
      children: [
        t.jsx(bs, {
          active: i,
          onClick: o
        }),
        i && t.jsx(gs, {
          DropdownRef: e,
          isDropdownOpen: i,
          closeDropdown: a
        })
      ]
    });
  }
  s.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 70px;
  left: -50px;
  @media (max-width: 600px) {
    position: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
  const bs = s(Bn)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${(e) => e.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${(e) => e.active ? "rotateZ(90deg)" : "none"};
`, Ht = ({ title: e, description: i, Button: n, style: o }) => {
    const a = X(), r = Ce(700);
    return t.jsxs(js, {
      style: o,
      children: [
        t.jsxs(K, {
          align: "flex-start",
          children: [
            t.jsx(ws, {
              style: {
                color: a.color
              },
              children: e
            }),
            !r && t.jsxs(t.Fragment, {
              children: [
                t.jsx("div", {
                  style: {
                    height: "4px"
                  }
                }),
                t.jsx(ys, {
                  children: i
                })
              ]
            })
          ]
        }),
        n
      ]
    });
  }, ws = s.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${(e) => e.theme.color};
`, ys = s.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${(e) => e.theme.default.secondaryColor};
`, js = s(Fn)`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 20px 24px;

  @media ${v.tablet} {
    padding: 20px 12px;
    flex: 0;
  }
`;
  function vs(e) {
    return tn({
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
          }
        }
      ]
    })(e);
  }
  function Ts(e) {
    return tn({
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
          }
        }
      ]
    })(e);
  }
  const As = ({ delegateAddress: e, maxWidth: i }) => {
    const [n, o] = l.useState(e), [a, r] = l.useState(false), d = Ce(1200);
    return l.useEffect(() => {
      if (!d) o(e);
      else {
        const h = nn(e, 5);
        o(h);
      }
    }, [
      d
    ]), t.jsx(Is, {
      onMouseLeave: () => r(false),
      minWidth: d ? "120px" : "350px",
      children: t.jsx(Ss, {
        addressText: n,
        isCopied: a,
        setIsCopied: r,
        delegateAddress: e
      })
    });
  }, Ss = ({ addressText: e, isCopied: i, setIsCopied: n, delegateAddress: o }) => {
    const a = Ce(1e3), [r, d] = l.useState(false), h = (p) => {
      d(false);
    }, c = (p) => {
      d(true);
    };
    return t.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
      },
      onMouseEnter: c,
      onMouseLeave: h,
      children: [
        t.jsx(ks, {
          children: nn(e, 7, 7)
        }),
        r && t.jsx(Ms, {
          isMobile: a ? "10px" : "50px",
          onClick: () => {
            navigator.clipboard.writeText(o), n(true);
          },
          children: i ? t.jsx(vs, {
            size: 18,
            color: "white",
            style: {
              paddingTop: 6
            }
          }) : t.jsx(Ts, {
            size: 18,
            color: "white",
            style: {
              paddingTop: 6
            }
          })
        })
      ]
    });
  }, Ms = s.div`
  cursor: pointer;
  margin-left: ${(e) => e.isMobile || ""};
`, Es = s.span`
  flex: 3;
  // margin-right: 30px;
  // margin-left: 10px;
  padding: 0px 15px;
  max-height: 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: ${(e) => e.maxWidth || "fit-content"};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 164%;
  border-radius: 13px;

  &:active {
    opacity: 0.75;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 4px 8px;
  }
`, Is = s(Es)`
  color: ${(e) => e.theme.color};

  &:hover {
    background: rgb(226, 8, 128);
    background: linear-gradient(
      107deg,
      rgba(226, 8, 128, 1) 30%,
      rgba(103, 76, 159, 1) 70%,
      rgba(53, 197, 243, 1) 100%
    );
    opacity: 0.9;
    color: #fff;
    cursor: pointer;
    pointer: hand;
  }
`, ks = s.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`, _t = ({ options: e, item: i }) => {
    const [n, o] = l.useState(false), a = l.useRef();
    return me(a, () => o(false)), t.jsxs("div", {
      children: [
        t.jsx(Ds, {
          onClick: () => o(true)
        }),
        n && t.jsx(Rs, {
          onMouseLeave: () => o(false),
          ref: a,
          children: e.map(({ icon: r, onClick: d, text: h }, c) => t.jsxs(Ls, {
            onClick: () => d(i),
            index: c,
            children: [
              r,
              t.jsx($s, {
                children: h
              })
            ]
          }, c))
        })
      ]
    });
  }, Ds = s(On)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${(e) => e.theme.default.color};
`, Rs = s.div`
  padding: 10px 6px;
  width: 119px;
  border-radius: 8px;
  border: 1px solid ${(e) => e.theme.default.border};
  position: absolute;
  top: 3px;
  right: 0px;
  background-color: ${(e) => e.theme.default.bg};
  z-index: 2;
`, Ls = s.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: ${(e) => e.index === 0 ? "0px" : "16px"};
`, $s = s.span`
  margin-left: 8px;
`, st = ({ children: e }) => t.jsx(Ns, {
    children: e
  }), Ns = s.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(e) => e.theme.default.secondaryBg};
  color: ${(e) => e.theme.tooltipContentDesc};
  font-size: 10px;
  margin-left: 8px;
  max-height: 20px;
`, Gt = (e) => {
    const i = (n, o) => n.toLowerCase() === o.toLowerCase();
    return t.jsx(Ps, {
      style: e.style,
      isLoading: e.isLoading,
      children: t.jsx(K, {
        flex: "5",
        justify: "flex-start",
        align: "stretch",
        children: e.isLoading ? t.jsx(Os, {
          children: t.jsx(pt, {
            type: ht.SEAMLESS
          })
        }) : t.jsxs(t.Fragment, {
          children: [
            e.items && e.items.length > 0 && e.items.map((n) => {
              var _a, _b;
              return t.jsxs("div", {
                children: [
                  t.jsx(Fs, {}),
                  t.jsxs(K, {
                    direction: "row",
                    justify: "space-between",
                    padding: "9.5px 0px",
                    children: [
                      t.jsxs(K, {
                        direction: "row",
                        justify: "flex-start",
                        margin: "0px 0px 0px -15px",
                        children: [
                          e.isAddress ? t.jsx(Us, {
                            children: t.jsx(As, {
                              delegateAddress: n,
                              maxWidth: "200px"
                            })
                          }) : t.jsxs(t.Fragment, {
                            children: [
                              t.jsx(Bs, {
                                children: n.description
                              }),
                              n.type === 2 && t.jsx(st, {
                                children: "Range"
                              }),
                              n.type === 3 && t.jsx(st, {
                                children: "Multi-Range"
                              })
                            ]
                          }),
                          e.isAddress && i(e.account, n) && t.jsx(st, {
                            children: "Creator"
                          })
                        ]
                      }),
                      e.isAddress === true && ((_a = e.addressDropdownOptions) == null ? void 0 : _a.length) > 0 && !i(e.account, n) && t.jsx(_t, {
                        options: e.addressDropdownOptions,
                        item: n
                      }),
                      e.isAddress === false && ((_b = e.settingsDropdownOptions) == null ? void 0 : _b.length) > 0 && t.jsx(_t, {
                        options: e.settingsDropdownOptions,
                        item: n
                      })
                    ]
                  })
                ]
              }, e.isAddress ? n : n.description || n.index);
            }),
            e.items && e.items.length === 0 && e.isAddress === false && t.jsx(hi, {
              title: "No settings added",
              description: "Add settings for users to customize their notification preferences.",
              onClick: e.onClickEmptyListButton,
              buttonTitle: e.emptyListButtonTitle
            })
          ]
        })
      })
    });
  }, Ps = s.div`
  padding: ${(e) => e.isLoading ? "0px" : "0px 24px 16px"};
  flex: 1;

  @media ${v.tablet} {
    flex: 0;
    padding: ${(e) => e.isLoading ? "0px" : "0px 0px 10px"};
  }
`, Bs = s.span`
  margin-left: 15px;
  color: ${(e) => e.theme.scheme === "light" ? e.theme.default.color : e.theme.default.secondaryColor};
`, Fs = s.div`
  background-color: ${(e) => e.theme.default.border};
  height: 1px;
`, Os = s.div`
  height: 100px;
`, Us = s.div`
  @media ${v.tablet} {
    margin: 0px 0px 0px 5px;
  }
`, zs = "DD MMM, YYYY";
  function Vs({ isChannelExpired: e, setIsChannelExpired: i, showEditChannel: n, destroyChannel: o }) {
    var _a, _b, _c;
    const { account: a, chainId: r, wallet: d } = fe(), { delegatees: h, channelDetails: c, canVerify: p, aliasDetails: { isAliasVerified: g, aliasAddrFromContract: C } } = P((I) => I.admin), { channelSettings: x } = P((I) => I.channels), { userPushSDKInstance: m } = P((I) => I.user), { handleConnectWalletAndEnableProfile: u } = l.useContext(on), { CHANNEL_ACTIVE_STATE: T, CHANNNEL_DEACTIVATED_STATE: F } = P((I) => I.channels), { processingState: L } = P((I) => I.channelCreation), [V, D] = l.useState([]), [b, M] = l.useState("");
    let { channelState: E } = c;
    E || (E = c.activation_status);
    const H = E === T, G = E === F, k = le.coreContractChain === r, Y = Ce(600), [O, W] = l.useState([
      a
    ]), [R, w] = l.useState(void 0), { epnsCommWriteProvider: f } = P((I) => I.contracts), j = Un(), { showModal: A, ModalComponent: pe } = Te(), ce = xe(), je = async () => {
      m.signer || await u({
        wallet: d
      }), A();
    }, he = async (I) => m.channel.delegate.add(tt(I, r)), Z = c.expiryTime ? zn(((_a = c.expiryTime) == null ? void 0 : _a.toString()) * 1e3) : "", te = c.expiryTime ? Vn(((_b = c.expiryTime) == null ? void 0 : _b.toString()) * 1e3) : true, z = c.expiryTime ? Hn(((_c = c.expiryTime) == null ? void 0 : _c.toString()) * 1e3, 14) : "";
    l.useEffect(() => {
      c.channelType == et.TIMEBOUND && (te || i(true));
    }, [
      te
    ]), l.useEffect(() => {
    }, [
      c,
      p
    ]), l.useEffect(() => {
      !c || !k || async function() {
        const I = c.channelStartBlock.toString(), U = await new qt(le.coreRPC).getBlock(+I), de = Zt(U.timestamp * 1e3);
        M(de.format(zs));
      }();
    }, [
      c
    ]), l.useEffect(() => {
      a && (!h || !h.length ? w(a) : w(k ? h[0].channel : h[0].alias_address));
    }, [
      h,
      a
    ]), l.useEffect(() => {
      a && (async () => {
        try {
          const I = tt(a, r), U = await m.channel.delegate.get({
            channel: I
          });
          if (U) {
            const de = U.map((Me) => Me);
            de.unshift(a), W(de);
          }
        } catch (I) {
          console.error(I);
        }
      })();
    }, [
      a,
      r
    ]);
    const re = async (I) => {
      let U = m;
      if (!(!U.signer && (U = await u({
        wallet: d
      }), !U))) return U.channel.delegate.remove(tt(I, r));
    }, ae = () => {
      j(Gn.ChannelSettings);
    };
    return t.jsxs(ee, {
      children: [
        t.jsxs(_s, {
          justifyContent: "flex-start",
          alignSelf: "stretch",
          children: [
            t.jsx(Gs, {
              src: c.icon
            }),
            t.jsxs(at, {
              alignItems: "flex-start",
              padding: "5px 0px",
              children: [
                t.jsxs(ta, {
                  children: [
                    c.name,
                    p && t.jsx(Ws, {
                      src: "/verify.png"
                    })
                  ]
                }),
                t.jsxs(at, {
                  alignItems: "flex-start",
                  flex: "initial",
                  padding: "5px 0px",
                  children: [
                    k && C && !g || !k && !g ? t.jsx(qs, {
                      children: "Alias Network Setup Pending"
                    }) : t.jsxs(Hs, {
                      justifyContent: "flex-start",
                      children: [
                        t.jsxs(Js, {
                          children: [
                            t.jsx("img", {
                              style: {
                                width: "15px"
                              },
                              src: "/subcount.svg",
                              alt: "subscount"
                            }),
                            t.jsx(Zs, {
                              children: c.subscriber_count
                            })
                          ]
                        }),
                        t.jsxs(Xs, {
                          active: H,
                          children: [
                            G && t.jsx(ze, {
                              width: "12px",
                              src: Ci,
                              margin: "0 5px 2px 0px",
                              height: "30px"
                            }),
                            H ? "Active" : G ? "Deactivated" : "Blocked"
                          ]
                        }),
                        c.channelType == et.TIMEBOUND && !e && t.jsxs(_, {
                          background: "#C5EFD1",
                          flex: "0",
                          borderRadius: "25px",
                          margin: "0 0 10px 10px",
                          height: "30px",
                          children: [
                            t.jsx(ze, {
                              width: "16px",
                              src: "svg/ExpiresTimer.svg",
                              alt: "expiryTimer",
                              padding: "0 6px 0 9px"
                            }),
                            t.jsxs(ue, {
                              color: "#30CC8B",
                              fontWeight: "600",
                              padding: "0 9px 0 0",
                              children: [
                                "Expires on ",
                                Z
                              ]
                            })
                          ]
                        }),
                        c.channelType == et.TIMEBOUND && e && t.jsxs(_, {
                          background: "#FFD8D8",
                          flex: "0",
                          borderRadius: "25px",
                          margin: "0 0 10px 10px",
                          height: "30px",
                          children: [
                            t.jsx(ze, {
                              width: "16px",
                              src: "svg/ExpiredTimer.svg",
                              alt: "expiryTimer",
                              padding: "0 6px 0 9px"
                            }),
                            t.jsxs(ue, {
                              color: "#E93636",
                              fontWeight: "600",
                              padding: "0 9px 0 0",
                              children: [
                                "Expired on ",
                                Z
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    b && t.jsxs(Qs, {
                      children: [
                        "Created ",
                        b
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        Y && t.jsxs(_, {
          zIndex: "1",
          padding: "0 0 15px 0",
          alignSelf: "center",
          display: "flex",
          gap: "8px",
          children: [
            !e && k && t.jsx(ie, {
              onClick: n,
              size: "small",
              variant: "outline",
              children: "Edit Channel"
            }),
            !e && t.jsx(fn, {}),
            e && k && t.jsx(ie, {
              onClick: o,
              size: "small",
              variant: "danger",
              children: "Delete Channel"
            })
          ]
        }),
        e && t.jsx(ee, {
          alignItems: "flex-start",
          children: t.jsxs(Wt, {
            margin: "25px 0 0 0",
            children: [
              t.jsx(ue, {
                color: "#D53A94",
                children: "Note:"
              }),
              " Channel will auto delete on",
              " ",
              t.jsx(ue, {
                fontWeight: "600",
                children: z
              })
            ]
          })
        }),
        t.jsx(ee, {
          alignItems: "flex-start",
          children: t.jsx(Wt, {
            children: c.info
          })
        }),
        p && t.jsx(at, {
          alignItems: "flex-start",
          padding: "5px 0px",
          children: t.jsx(na, {
            children: t.jsxs(ea, {
              children: [
                t.jsx("span", {
                  children: "verified by:"
                }),
                t.jsx(Ks, {
                  src: V.icon
                }),
                t.jsx(Ys, {
                  children: V.name
                })
              ]
            })
          })
        }),
        L === 0 && t.jsxs(ee, {
          children: [
            t.jsx(Ve, {
              children: t.jsxs(Kt, {
                flex: "5",
                minWidth: "280px",
                self: "stretch",
                align: "stretch",
                margin: "10px 0px 30px 0px",
                radius: "20px",
                border: "1px solid #D4DCEA",
                children: [
                  t.jsx(Ht, {
                    title: "Notification Settings",
                    description: "Customize notification preferences for users",
                    Button: t.jsx(xi, {
                      onClick: ae
                    })
                  }),
                  t.jsx(Gt, {
                    account: a,
                    isAddress: false,
                    items: x[a],
                    isLoading: false,
                    onClickEmptyListButton: ae,
                    emptyListButtonTitle: "Add Setting"
                  })
                ]
              })
            }),
            t.jsx(Ve, {
              children: t.jsxs(Kt, {
                flex: "5",
                minWidth: "280px",
                self: "stretch",
                align: "stretch",
                margin: "10px 0px 30px 0px",
                radius: "20px",
                border: "1px solid #D4DCEA",
                children: [
                  t.jsx(Ht, {
                    title: "Channel Delegates",
                    description: "Delegates can send notifications on behalf of the channel",
                    Button: t.jsx(ui, {
                      onClick: je
                    })
                  }),
                  t.jsx(Gt, {
                    account: a,
                    isAddress: true,
                    items: O,
                    isLoading: false,
                    addressDropdownOptions: [
                      {
                        text: "Remove",
                        onClick: re,
                        icon: t.jsx(_n, {})
                      }
                    ]
                  })
                ]
              })
            })
          ]
        }),
        t.jsx(pe, {
          InnerComponent: jo,
          onConfirm: he,
          toastObject: ce,
          modalPosition: Ae.ON_ROOT
        })
      ]
    });
  }
  const at = s(ee)`
  @media (max-width: 767px) {
    align-items: center;
  }
`, Hs = s(_)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`, _s = s(_)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`, Gs = s.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${v.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`, Ws = s.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`, Ks = s.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`, Ys = s.div``, Js = s.div`
  width: 58px;
  height: 26px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
`, mn = s.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: FK Grotesk Neu, Source Sans Pro;
`, Xs = s(mn)`
  color: #2dbd81;
  color: ${(e) => e.active ? "#2DBD81" : "#E93636"};
  background-color: ${(e) => e.active ? "#c6efd1" : "#FFD8D8"};
  margin-left: 10px;
  ${(e) => e.active && `
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`, qs = s(mn)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`, Zs = s.span`
  font-weight: 400;
  font-size: 14px;
`;
  s.div`
  display: flex;
  flex-direction: column;
  @media ${v.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;
  const Qs = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  // color: #657795;
  color: ${(e) => e.theme.default.secondaryColor};
  margin-top: 10px;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`, ea = s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`, ta = s.div`
  display: flex;
  font-family: FK Grotesk Neu, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  text-align: center;
  color: ${(e) => e.theme.color};
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
  }
`, na = s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: normal;
  text-transform: uppercase;
  margin-bottom: 18px;
`, Wt = s.div`
  text-transform: none;
  font-family: FK Grotesk Neu, Source Sans Pro;
  // color: #657795;
  color: ${(e) => e.theme.default.secondaryColor};
  margin: ${(e) => e.margin ? e.margin : "24px 0px"};
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
    font-weight: 300;
    margin-top: 10px;
    width: 100%;
    margin: 10px 0px 10px 0px;
    padding: 0 0 0 0;
  }
`, Kt = s(sn)`
  flex: 5;
  min-width: 280px;
  align-self: stretch;
  align-items: stretch;
  margin: 10px 0px 30px 0px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${(e) => e.theme.default.borderColor};
`, ia = ({ channelName: e, setChannelName: i, channelInfo: n, setChannelInfo: o, channelURL: a, setChannelURL: r, editChannel: d, errorInfo: h, setErrorInfo: c }) => {
    const p = X(), g = ({ message: x }) => t.jsxs(K, {
      display: "flex",
      align: "center",
      self: "flex-start",
      direction: "row",
      margin: "7px 0px",
      children: [
        t.jsx(Yn, {
          color: "red",
          size: "20"
        }),
        t.jsx(ge, {
          size: "14px",
          weight: "400",
          margin: "0px 5px",
          color: "red",
          children: x
        })
      ]
    }), C = (x) => {
      const m = x.target.value;
      cn(m) ? (c(""), r(m)) : (c((u) => ({
        ...u,
        url: "Channel URL is invalid! Please enter a valid url!"
      })), r(m));
    };
    return t.jsx(oa, {
      children: t.jsx(sa, {
        onSubmit: d,
        children: t.jsxs(aa, {
          children: [
            t.jsxs(K, {
              margin: "5px 0px 0px 0px",
              flex: "1",
              self: "stretch",
              align: "stretch",
              children: [
                t.jsx(rt, {
                  style: {
                    color: p.editChannelPrimaryText
                  },
                  children: "Channel Name"
                }),
                t.jsx(K, {
                  margin: "7px 0px 0px 0px",
                  flex: "1",
                  self: "stretch",
                  align: "stretch",
                  radius: "12px",
                  children: t.jsx(lt, {
                    required: true,
                    maxlength: "40",
                    flex: "1",
                    padding: "13px 13px 14px 16px",
                    weight: "400",
                    size: "15px",
                    bg: p.editChannelInputbg,
                    color: p.editChannelPrimaryText,
                    border: p.textAreaBorderColor,
                    focusBorder: p.textAreaFocusBorder,
                    radius: "12px",
                    height: "25px",
                    value: e,
                    onChange: (x) => {
                      i(x.target.value);
                    }
                  })
                })
              ]
            }),
            (h == null ? void 0 : h.name) && t.jsx(g, {
              message: h == null ? void 0 : h.name
            }),
            t.jsxs(K, {
              margin: "22px 0px 0px 00px",
              flex: "1",
              self: "stretch",
              align: "stretch",
              children: [
                t.jsxs(K, {
                  display: "flex",
                  direction: "row",
                  align: "center",
                  flex: "1",
                  self: "stretch",
                  justify: "space-between",
                  children: [
                    t.jsx(rt, {
                      style: {
                        color: p.editChannelPrimaryText
                      },
                      children: "Channel Description"
                    }),
                    t.jsx(ge, {
                      color: p.editChannelSecondaryText,
                      size: "18px",
                      margin: "0px 10px 0px 0px",
                      weight: "500",
                      children: 250 - n.length
                    })
                  ]
                }),
                t.jsx(Wn, {
                  required: true,
                  rows: "4",
                  maxlength: "250",
                  padding: "12px 16px",
                  weight: "400",
                  size: "15px",
                  resize: "none",
                  overflow: "hidden",
                  "line-height": "140%",
                  margin: "10px 0px 0px 0px",
                  border: p.textAreaBorderColor,
                  focusBorder: p.textAreaFocusBorder,
                  radius: "12px",
                  bg: p.editChannelInputbg,
                  color: p.editChannelPrimaryText,
                  value: n,
                  onChange: (x) => {
                    o(x.target.value.slice(0, 250));
                  },
                  autocomplete: "off"
                })
              ]
            }),
            (h == null ? void 0 : h.description) && t.jsx(g, {
              message: h == null ? void 0 : h.description
            }),
            t.jsxs(K, {
              margin: "20px 0px 0px 0px",
              flex: "1",
              self: "stretch",
              align: "stretch",
              children: [
                t.jsx(rt, {
                  style: {
                    color: p.editChannelPrimaryText
                  },
                  children: "Channel Website URL"
                }),
                t.jsx(lt, {
                  required: true,
                  maxlength: "40",
                  flex: "1",
                  padding: "12px 16px",
                  weight: "400",
                  size: "15px",
                  bg: p.editChannelInputbg,
                  color: p.editChannelPrimaryText,
                  height: "25px",
                  margin: "7px 0px 0px 0px",
                  border: p.textAreaBorderColor,
                  focusBorder: p.textAreaFocusBorder,
                  radius: "12px",
                  value: a,
                  onChange: (x) => {
                    C(x);
                  }
                })
              ]
            }),
            (h == null ? void 0 : h.url) && t.jsx(g, {
              message: h == null ? void 0 : h.url
            })
          ]
        })
      })
    });
  }, oa = s(Ve)`
  display: block;

  @media (max-width: 425px) {
    margin: 28px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    margin: 18px 0px 0px 0px;
  }
`, sa = s(Kn)`
  height: inherit;
`, rt = s.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: normal;
  color: #1e1e1e;
`, aa = s(K)`
  width: 100%;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`, ra = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200.875C7.39303%200.875%205.82214%201.35152%204.486%202.24431C3.14985%203.1371%202.10844%204.40605%201.49348%205.8907C0.87852%207.37535%200.717618%209.00901%201.03112%2010.5851C1.34463%2012.1612%202.11846%2013.6089%203.25476%2014.7452C4.39106%2015.8815%205.8388%2016.6554%207.4149%2016.9689C8.99099%2017.2824%2010.6247%2017.1215%2012.1093%2016.5065C13.594%2015.8916%2014.8629%2014.8502%2015.7557%2013.514C16.6485%2012.1779%2017.125%2010.607%2017.125%209C17.1209%206.84638%2016.2635%204.78216%2014.7407%203.25932C13.2178%201.73648%2011.1536%200.87913%209%200.875ZM12.8672%207.57812L8.28907%2011.9531C8.17071%2012.0645%208.01406%2012.126%207.85157%2012.125C7.77214%2012.1261%207.69328%2012.1115%207.61953%2012.082C7.54578%2012.0525%207.47861%2012.0087%207.42188%2011.9531L5.13282%209.76562C5.06933%209.71023%205.01769%209.64257%204.98102%209.56672C4.94434%209.49086%204.92338%209.40837%204.9194%209.32421C4.91542%209.24004%204.92849%209.15594%204.95784%209.07696C4.98719%208.99798%205.03221%208.92575%205.09019%208.86461C5.14816%208.80347%205.2179%208.75469%205.29522%208.72119C5.37253%208.68769%205.45582%208.67017%205.54007%208.66968C5.62433%208.66919%205.70781%208.68574%205.78551%208.71834C5.86321%208.75094%205.93351%208.79891%205.99219%208.85938L7.85157%2010.6328L12.0078%206.67188C12.1293%206.56585%2012.2871%206.51091%2012.4482%206.51853C12.6093%206.52615%2012.7612%206.59575%2012.8722%206.71277C12.9832%206.8298%2013.0446%206.98519%2013.0437%207.14646C13.0428%207.30773%2012.9795%207.4624%2012.8672%207.57812Z'%20fill='%23D53893'/%3e%3c/svg%3e", la = ({ onClose: e, InnerComponentProps: i }) => {
    const { setChannelLogo: n, croppedImage: o, setCroppedImage: a, imageSrc: r, setImageSrc: d, imageType: h, setImageType: c } = i, p = l.useRef(), g = l.useRef(null);
    me(g, () => {
      e();
    });
    const C = (u) => {
      u.preventDefault();
    }, x = (u) => {
      u.preventDefault(), u.stopPropagation(), m(u.dataTransfer, "transfer", u);
    }, m = async (u, T, F) => {
      if (F.preventDefault(), a(void 0), u == null ? void 0 : u.files[0]) {
        var L = new FileReader();
        L.readAsDataURL(u == null ? void 0 : u.files[0]), L.onloadend = function(V) {
          var _a;
          d(L.result), c((_a = u == null ? void 0 : u.files[0]) == null ? void 0 : _a.type);
        };
      }
    };
    return t.jsxs(ca, {
      ref: g,
      children: [
        t.jsx(ha, {
          children: t.jsx(xa, {
            onClick: e
          })
        }),
        t.jsxs(da, {
          children: [
            t.jsx(pa, {
              children: "Please upload a PNG, JPG. Crop the image to resize to 128px."
            }),
            t.jsx(fa, {
              className: "",
              children: t.jsx("div", {
                onDragOver: (u) => C(u),
                onDrop: (u) => x(u),
                className: "bordered",
                children: t.jsxs("div", {
                  className: "inner",
                  children: [
                    t.jsx("div", {
                      className: "crop-div",
                      children: o ? t.jsx("div", {
                        className: "crop-innderdiv",
                        children: t.jsx("div", {
                          children: t.jsx("img", {
                            alt: "Cropped Img",
                            src: o,
                            className: "croppedImage"
                          })
                        })
                      }) : t.jsx("div", {
                        className: "crop-innderdiv",
                        children: t.jsx(gi, {
                          className: "cropper",
                          imageSrc: r,
                          imageType: h,
                          onImageCropped: (u) => a(u),
                          width: "128px",
                          height: "128px",
                          ref: p
                        })
                      })
                    }),
                    t.jsxs(ua, {
                      children: [
                        t.jsx("p", {
                          className: "text-below",
                          children: "Drag and Drop or"
                        }),
                        t.jsx("div", {
                          className: "text-div",
                          children: t.jsxs("label", {
                            htmlFor: "file-upload",
                            className: "labeled",
                            children: [
                              t.jsx("div", {
                                children: "Browse to Choose"
                              }),
                              t.jsx("input", {
                                id: "file-upload",
                                accept: "image/*",
                                name: "file-upload",
                                hidden: true,
                                onChange: (u) => m(u.target, "target", u),
                                type: "file",
                                className: "sr-only",
                                readOnly: true
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            }),
            t.jsx(ga, {
              children: o ? t.jsx(t.Fragment, {
                children: t.jsx(ie, {
                  variant: "primary",
                  size: "medium",
                  onClick: () => {
                    n(o), e();
                  },
                  children: "Upload Image"
                })
              }) : t.jsx(t.Fragment, {
                children: t.jsx(ie, {
                  variant: "primary",
                  size: "medium",
                  onClick: () => {
                    p.current.showCroppedImage();
                  },
                  children: "Crop Image"
                })
              })
            })
          ]
        })
      ]
    });
  }, ca = s.div``, da = s.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 32px 10px;
`, pa = s.p`
  margin: 0px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: ${(e) => e.theme.modalTextColor};
`, ha = s.div`
  text-align: end;
  width: 100%;
`, xa = s(Jn)`
  cursor: pointer;
  font-size: 20px;
  color: ${(e) => e.theme.modalTextColor};
`, ua = s(sn)`
  display: flex;
  flex-direction: row;
  align-items: center;
`, ga = s(ee)``, fa = s.div`
  width: 100%;
  margin: 24px 0px 44px 0px;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  .bordered {
    display: flex;
    justify-content: center;
    border: 1px dashed #8c99b0;
    align-items: flex-end;
    border-radius: 12px;
    padding: 0px 50px 0px 50px;
    background: ${(e) => e.theme.modalbackgroundColor};
    .inner {
      margin-top: 0.25rem;
      text-align: center;
      padding: 23px 15px 23px 15px;
      width: 100%;
      .crop-div {
        width: 100%;
        display: flex;
        flex-direction: row;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        justify-content: space-evenly;
        align-items: center;
        margin-right: auto;
        .crop-innderdiv {
          width: 100%;
          background: ${(e) => e.theme.modalImageBgColor};
          border-radius: 20px;
          padding: 17px 100px 17px 100px;
          @media (max-width: 768px) {
            padding: 17px 2px 17px;
          }

          margin-bottom: 12px;
        }

        div {
          height: 128px;
          // width:128px;
          .croppedImage {
            border-radius: 20px;
            // @media (max-width: 768px) {
            //   margin-top: 1rem;
            // }
          }
        }
        .cropper {
          border-radius: 20px;
          width: 128px;
          height: 128px;
        }
      }
      .check-space {
        .croppedImage {
          width: auto;
          height: auto;
          border-radius: 5px;
        }
        .button-space {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      .crop-button {
        display: flex;
        justify-content: center;
        width: 100%;
        @media (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      .svg {
        margin: 0px auto;
        height: 3rem;
        width: 3rem;
        color: #ccc;
      }
      .text-div {
        display: flex;
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: #ccc;
        justify-content: center;
        .labeled {
          position: relative;
          cursor: pointer;
          border-radius: 4px;
          color: #cf1c84;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .text-below {
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: ${(e) => e.theme.modalTextColor};
        margin: 0px 0.3rem 0px 0px;
      }
    }
  }
  .image-error {
    font-size: 1rem;
    line-height: 1rem;
    color: red;
    margin-top: 0.5rem;
  }
  .image {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    .item {
      width: 4rem;
      height: auto;
      border-radius: 4px;
    }
    .image-border {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 2rem;
      .text {
        font-size: 1rem;
        line-height: 1rem;
        color: #ccc;
        margin-top: 1rem;
      }
    }
  }
`, ve = (e) => e.trim().length == 0;
  function ma(e, i) {
    var n = new XMLHttpRequest();
    n.onload = function() {
      var o = new FileReader();
      o.onloadend = function() {
        i(o.result);
      }, o.readAsDataURL(n.response);
    }, n.open("GET", e), n.responseType = "blob", n.send();
  }
  const Ca = (e) => {
    var i = fi, n = e.split(";base64,").pop(), o = Xn.from(n, "base64"), a = i(o);
    return a.width > 128 || a.height > 128 ? (console.error("Image size check failed... returning"), {
      success: 0,
      info: "Image size check failed, Image should be 128X128PX"
    }) : (console.debug("Image verification", n.charAt(0)), n.charAt(0) === "/" ? {
      success: 1,
      info: "Image checks passed"
    } : n.charAt(0) === "i" ? {
      success: 1,
      info: "Image checks passed"
    } : {
      success: 0,
      info: "Image extension should be jpg or png"
    });
  };
  function ba({ closeEditChannel: e, UploadLogoComponent: i, displayUplaodLogoModal: n }) {
    const { account: o, provider: a } = fe(), { channelDetails: r, aliasDetails: { isAliasVerified: d, aliasAddrFromContract: h } } = P((S) => S.admin), { epnsReadProvider: c, epnsWriteProvider: p } = P((S) => S.contracts), g = 50, [C, x] = l.useState(r == null ? void 0 : r.name), [m, u] = l.useState(r == null ? void 0 : r.info), [T, F] = l.useState(r == null ? void 0 : r.url), [L, V] = l.useState(r == null ? void 0 : r.icon), [D, b] = l.useState(r == null ? void 0 : r.icon), [M, E] = l.useState(r == null ? void 0 : r.icon), [H, G] = l.useState(M), [q, k] = l.useState(null), [Y, O] = l.useState(false), [W, R] = l.useState({
      name: "",
      description: "",
      address: "",
      url: ""
    }), [w, f] = l.useState(false), [j, A] = l.useState(0), [pe, ce] = l.useState(0), [je, he] = l.useState(false), Z = xe();
    l.useEffect(() => {
      o && async function() {
        const S = await c.channelUpdateCounter(o);
        A(g * (Number(S) + 1));
      }();
    }, [
      o
    ]), l.useEffect(() => {
      !o || !a || async function() {
        const S = await an({
          address: o,
          provider: a,
          contractAddress: He.epnscore
        });
        ce(parseInt(S));
        const $ = parseInt(S);
        $ >= j && $ != 0 ? O(true) : O(false);
      }();
    }, [
      o,
      a
    ]);
    const te = async () => {
      if (f(true), !a) return;
      const S = a.getSigner(o);
      Z.showLoaderToast({
        loaderMessage: "Waiting for Confirmation..."
      });
      try {
        const $ = await ln({
          signer: S,
          contractAddress: He.epnscore,
          amount: j - pe
        });
        console.debug("response", $), $ && (f(false), ce(j), O(true), Z.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Successfully approved Push!",
          toastType: "SUCCESS",
          getToastIcon: (ne) => t.jsx(ye, {
            size: ne,
            color: "green"
          })
        }));
      } catch ($) {
        console.error($), $.code == "ACTION_REJECTED" ? Z.showMessageToast({
          toastTitle: "Error",
          toastMessage: "User denied message signature.",
          toastType: "ERROR",
          getToastIcon: (ne) => t.jsx(J, {
            size: ne,
            color: "red"
          })
        }) : (Z.showMessageToast({
          toastTitle: "Error",
          toastMessage: "There was an error in approving PUSH Token",
          toastType: "ERROR",
          getToastIcon: (ne) => t.jsx(J, {
            size: ne,
            color: "red"
          })
        }), console.error("Error --> %o", $), console.error({
          err: $
        }));
      }
      f(false);
    }, z = () => {
      he(false);
    }, re = Ce(600), ae = l.useRef(null);
    me(ae, () => {
      z();
    });
    const I = () => (R(""), ve(C) || ve(m) || ve(T) ? (ve(C) && R((S) => ({
      ...S,
      name: "Please, enter the channel name."
    })), ve(m) && R((S) => ({
      ...S,
      description: "Please, enter the channel description"
    })), ve(T) && R((S) => ({
      ...S,
      url: "Please, enter the channel url"
    })), false) : Et(C, 125) ? Et(T, 125) ? cn(T) ? true : (R((S) => ({
      ...S,
      url: "Channel URL is invalid! Please enter a valid url!"
    })), false) : (R((S) => ({
      ...S,
      url: "Channel Url should not exceed 125 characters! Please retry!"
    })), false) : (R((S) => ({
      ...S,
      name: "Channel Name should not exceed 125 characters! Please retry!"
    })), false)), U = () => !(C !== (r == null ? void 0 : r.name) || m !== (r == null ? void 0 : r.info) || T !== (r == null ? void 0 : r.url) || D !== (r == null ? void 0 : r.icon)), de = async (S) => {
      try {
        if (!I()) return;
        f(true);
        const $ = JSON.stringify({
          name: C,
          info: m,
          url: T,
          icon: D,
          aliasDetails: r.aliasDetails || qn({
            chainId: parseInt(r.chain_id),
            address: r.address
          })
        });
        console.debug($);
        const ne = await Zn($);
        console.debug("IPFS storagePointer:", ne);
        const Ye = "1+" + ne, Je = en(Ye), Xe = Qt(j.toString(), 18);
        Z.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        const Ne = await p.updateChannelMeta(o, Je, Xe, {
          gasLimit: 1e6
        });
        console.debug(Ne), await Ne.wait(), f(false), Z.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Channel Updated Successfully",
          toastType: "SUCCESS",
          getToastIcon: (qe) => t.jsx(ye, {
            size: qe,
            color: "green"
          })
        }), setTimeout(() => {
          window.location.reload();
        }, 2e3);
      } catch ($) {
        f(false), console.error($.message), $.code == "ACTION_REJECTED" ? Z.showMessageToast({
          toastTitle: "Error",
          toastMessage: "User denied message signature.",
          toastType: "ERROR",
          getToastIcon: (ne) => t.jsx(J, {
            size: ne,
            color: "red"
          })
        }) : (Z.showMessageToast({
          toastTitle: "Error",
          toastMessage: "There was an error in updating channel Details",
          toastType: "ERROR",
          getToastIcon: (ne) => t.jsx(J, {
            size: ne,
            color: "red"
          })
        }), console.error("Error --> %o", $), console.error({
          err: $
        }));
      }
    }, Me = async (S) => {
      await rn({
        noOfTokens: S,
        provider: a,
        account: o
      });
    };
    return l.useEffect(() => {
      M && (console.debug("Image cropped", M), ma(M, function(S) {
        const $ = Ca(S);
        console.debug("response", $), $.success && (console.debug("Cropped Image....", M), b(M));
      }));
    }, [
      M
    ]), t.jsxs(wa, {
      ref: ae,
      children: [
        t.jsx(i, {
          InnerComponent: la,
          InnerComponentProps: {
            setChannelLogo: V,
            channelLogo: L,
            croppedImage: M,
            setCroppedImage: E,
            setChannelFile: b,
            imageSrc: H,
            setImageSrc: G,
            imageType: q,
            setImageType: k,
            errorInfo: W,
            setErrorInfo: R
          },
          modalPosition: Ae.ON_PARENT
        }),
        t.jsxs(ya, {
          children: [
            t.jsxs(va, {
              children: [
                t.jsx(Ta, {
                  src: L
                }),
                t.jsx(ie, {
                  variant: "secondary",
                  onClick: () => {
                    n(), he(true);
                  },
                  children: "Upload Logo"
                })
              ]
            }),
            !re && t.jsx(Aa, {}),
            t.jsx(ia, {
              channelName: C,
              setChannelName: x,
              channelInfo: m,
              setChannelInfo: u,
              channelURL: T,
              setChannelURL: F,
              editChannel: de,
              errorInfo: W,
              setErrorInfo: R
            })
          ]
        }),
        t.jsxs(Sa, {
          children: [
            t.jsxs("div", {
              children: [
                t.jsx(Ma, {
                  children: "Channel edit fee"
                }),
                t.jsx(Ea, {
                  children: "Editing channel details requires fees to be deposited"
                })
              ]
            }),
            t.jsxs(_, {
              flex: "0",
              children: [
                Y ? t.jsx(ja, {
                  src: ra
                }) : null,
                t.jsxs(Ia, {
                  children: [
                    j,
                    " PUSH"
                  ]
                })
              ]
            })
          ]
        }),
        t.jsx(un, {
          noOfPushTokensToCheck: j,
          containerProps: {
            width: "100%"
          },
          onMintPushToken: Me
        }),
        w ? t.jsx(t.Fragment, {
          children: t.jsxs(ka, {
            children: [
              t.jsx(Spinner, {
                size: 42,
                color: N.COLORS.PRIMARY_PINK,
                type: ut.PROCESSING
              }),
              t.jsx(Da, {
                children: "Verifying Transaction"
              })
            ]
          })
        }) : t.jsx(t.Fragment, {
          children: t.jsxs(Ra, {
            children: [
              t.jsx(ie, {
                onClick: e,
                variant: "outline",
                size: "large",
                children: "Cancel"
              }),
              pe >= j ? t.jsx(ie, {
                disabled: U(),
                onClick: de,
                size: "large",
                children: "Save Changes"
              }) : t.jsx(ie, {
                onClick: te,
                size: "large",
                children: "Approve PUSH"
              })
            ]
          })
        })
      ]
    });
  }
  const wa = s(ee)`
  padding: 0px;
  @media (min-width: 1140px) {
    padding: 15px 50px 0px 50px;
  }
`, ya = s(ee)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    margin-bottom: 40px;
  }
`, ja = s.img``, va = s(_)`
  flex: 0;
  align-items: center;
  align-self: baseline;
  justify-content: center;

  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`, Ta = s.img`
  width: 128px;
  height: 128px;
  margin-bottom: 20px;
  border-radius: 32px;
  @media ${v.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`, Aa = s.div`
  height: 21.5rem;
  width: 2px;
  background: ${(e) => e.theme.verticalLineColor};
  margin: 0px 68px;
  @media (min-width: 993px) and (max-width: 1240px) {
    margin: 0px 68px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    margin: 0px 68px;
  }
`, Sa = s(ee)`
  background: ${(e) => e.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  margin-top: 35px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 16px;
  }

  @media (max-width: 425px) {
    margin: 0px;
  }
`, Ma = s.p`
  margin: 0px;
  color: ${(e) => e.theme.editChannelPrimaryText};
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`, Ea = s.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${(e) => e.theme.editChannelSecondaryText};
`, Ia = s.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`, ka = s(ee)`
  flex-direction: row;
  margin-top: 33px;
`, Da = s.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${(e) => e.theme.editChannelPrimaryText};
`, Ra = s(_)`
  justify-content: end;
  margin-top: 35px;
  gap: 14px;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`, La = 10;
  let Yt = null;
  const $a = () => {
    X();
    const { account: e, chainId: i } = fe(), { channelDetails: n, delegatees: o, aliasDetails: { aliasAddr: a, aliasEthAddr: r, isAliasVerified: d, aliasAddrFromContract: h } } = P((w) => w.admin), { processingState: c } = P((w) => w.channelCreation), { epnsWriteProvider: p } = P((w) => w.contracts), { userPushSDKInstance: g } = P((w) => w.user), { handleConnectWalletAndEnableProfile: C } = l.useContext(on), x = n && n !== "unfetched", m = xe(), u = Re(), [T, F] = l.useState(false), [L, V] = l.useState(true), [D, b] = l.useState(false), E = le.coreContractChain === i, H = Ce(600);
    l.useEffect(() => {
      if (!E || !n || h || n === "unfetched") return;
      const w = Qn(n);
      if (w) {
        const { address: f, chainId: j } = w;
        u(ei(f)), u(ti(j));
      } else u(Ie(0));
    }, [
      n,
      h
    ]);
    const G = async (w) => {
      let { alias_address: f = null, is_alias_verified: j = null } = await ii({
        userPushSDKInstance: g,
        address: w
      }).then((A) => A);
      return f == "NULL" && (f = null), {
        aliasAddress: f,
        aliasVerified: j
      };
    };
    l.useEffect(() => {
      !E || !h || c === 0 || (Yt = setInterval(async () => {
        const { aliasAddress: w, aliasVerified: f } = await G(e);
        w ? (u(ni(w)), f ? (u(nt(true)), u(Ie(0))) : (u(Ie(2)), u(nt(false)))) : c != 0 && c != 1 && u(Ie(1));
      }, La * 1e3));
    }, [
      h
    ]), a !== null && clearInterval(Yt);
    const q = async () => {
      try {
        m.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        const w = await p.destroyTimeBoundChannel(e, {
          gasLimit: 1e6
        });
        console.debug(w), console.debug("Check: " + e), await w.wait(), m.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Successfully deleted the channel",
          toastType: "SUCCESS",
          getToastIcon: (f) => t.jsx(J, {
            size: f,
            color: "green"
          })
        }), u(gt(null));
      } catch (w) {
        console.error(w), w.code == "ACTION_REJECTED" ? m.showMessageToast({
          toastTitle: "Error",
          toastMessage: "User denied message signature.",
          toastType: "ERROR",
          getToastIcon: (f) => t.jsx(J, {
            size: f,
            color: "red"
          })
        }) : m.showMessageToast({
          toastTitle: "Error",
          toastMessage: "There was an error in deleting the channel",
          toastType: "ERROR",
          getToastIcon: (f) => t.jsx(J, {
            size: f,
            color: "red"
          })
        });
      }
    }, k = () => {
      b(true);
    }, Y = () => {
      b(false);
    }, { isModalOpen: O, showModal: W, ModalComponent: R } = Te();
    return t.jsxs(_, {
      children: [
        (n === "unfetched" || c === null) && t.jsx(pn, {}),
        n !== "unfetched" && t.jsxs(ee, {
          justifyContent: c === 0 && "flex-start",
          height: "fit-content",
          children: [
            !n && c === 0 && t.jsx(mi, {}),
            x && c !== null && t.jsx(Na, {
              children: D ? t.jsx(ba, {
                closeEditChannel: Y,
                UploadLogoComponent: R,
                displayUplaodLogoModal: W,
                isUploadLogoModalOpen: O
              }) : t.jsxs(t.Fragment, {
                children: [
                  n && !H && t.jsxs(_, {
                    zIndex: "1",
                    gap: "8px",
                    children: [
                      !T && E && t.jsx(ie, {
                        onClick: k,
                        size: "small",
                        variant: "outline",
                        children: "Edit Channel"
                      }),
                      !T && t.jsx(fn, {}),
                      T && E && t.jsx(ie, {
                        onClick: q,
                        size: "small",
                        variant: "danger",
                        children: "Delete Channel"
                      })
                    ]
                  }),
                  n ? t.jsx(Vs, {
                    isChannelExpired: T,
                    setIsChannelExpired: F,
                    showEditChannel: k,
                    destroyChannel: q
                  }) : ""
                ]
              })
            }),
            c !== 0 && c !== null && x && !D && t.jsx(t.Fragment, {
              children: t.jsx(po, {
                aliasEthAccount: r,
                setAliasVerified: nt
              })
            })
          ]
        })
      ]
    });
  }, Na = s(ee)`
  align-items: center;
  align-self: center;
  background: ${(e) => e.theme.default.bg};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  border-radius: ${N.ADJUSTMENTS.RADIUS.LARGE} ${N.ADJUSTMENTS.RADIUS.LARGE}
    ${N.ADJUSTMENTS.RADIUS.LARGE} ${N.ADJUSTMENTS.RADIUS.LARGE};
  width: calc(
    100% - ${be.MINI_MODULES.DESKTOP.RIGHT} - ${be.MINI_MODULES.DESKTOP.LEFT} -
      ${N.ADJUSTMENTS.PADDING.HUGE} - ${N.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${N.ADJUSTMENTS.PADDING.DEFAULT};
  position: relative;
  margin: ${N.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  <<<<<<< HEAD =======>>>>>>>60e48167be7f381c8f5afa2fbd509fe526a74b71 @media ${v.laptop} {
    margin: ${N.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${N.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${be.MINI_MODULES.TABLET.RIGHT} - ${be.MINI_MODULES.TABLET.LEFT} -
        ${N.ADJUSTMENTS.PADDING.BIG} - ${N.ADJUSTMENTS.PADDING.BIG}
    );
  }
  @media ${v.mobileL} {
    margin: ${N.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${N.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${be.MINI_MODULES.MOBILE.RIGHT} - ${be.MINI_MODULES.MOBILE.LEFT} -
        ${N.ADJUSTMENTS.PADDING.DEFAULT} - ${N.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${N.CONSTANTS.HEADER_HEIGHT}px - ${be.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${N.ADJUSTMENTS.RADIUS.LARGE} ${N.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;
  le.coreContractChain;
  function Pa() {
    oi.pageview("/channel_dashboard");
    const [e, i] = B.useState(true), [n, o] = B.useState(null), a = () => o(null);
    return B.useEffect(() => {
      n && a();
    }, [
      n
    ]), t.jsxs(t.Fragment, {
      children: [
        e ? t.jsx($a, {}) : t.jsx(pn, {}),
        n && t.jsx(si, {
          notification: n,
          clearToast: a
        })
      ]
    });
  }
  s.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;
  let Ba;
  er = () => t.jsx(Ba, {
    children: t.jsx(Pa, {})
  });
  Ba = s(ai)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`;
});
export {
  __tla,
  er as default
};
