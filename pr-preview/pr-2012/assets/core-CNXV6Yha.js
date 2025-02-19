import { iz as mn, eH as yn, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { a as xn, __tla as __tla_1 } from "./markup-DZFLPKQk.js";
import { a as bn, __tla as __tla_2 } from "./css-D9xBn8hj.js";
import { a as wn, __tla as __tla_3 } from "./clike-9AzabQkA.js";
import { a as Cn, __tla as __tla_4 } from "./javascript-yloARUAg.js";
let zl;
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
  })()
]).then(async () => {
  function Sn(e, n) {
    for (var r = 0; r < n.length; r++) {
      const t = n[r];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const f in t) if (f !== "default" && !(f in e)) {
          const v = Object.getOwnPropertyDescriptor(t, f);
          v && Object.defineProperty(e, f, v.get ? v : {
            enumerable: true,
            get: () => t[f]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var Ge = Ve, ye = Ve.prototype;
  ye.space = null;
  ye.normal = {};
  ye.property = {};
  function Ve(e, n, r) {
    this.property = e, this.normal = n, r && (this.space = r);
  }
  var Le = mn, An = Ge, En = Pn;
  function Pn(e) {
    for (var n = e.length, r = [], t = [], f = -1, v, m; ++f < n; ) v = e[f], r.push(v.property), t.push(v.normal), m = v.space;
    return new An(Le.apply(null, r), Le.apply(null, t), m);
  }
  var xe = Tn;
  function Tn(e) {
    return e.toLowerCase();
  }
  var Ke = Ye, U = Ye.prototype;
  U.space = null;
  U.attribute = null;
  U.property = null;
  U.boolean = false;
  U.booleanish = false;
  U.overloadedBoolean = false;
  U.number = false;
  U.commaSeparated = false;
  U.spaceSeparated = false;
  U.commaOrSpaceSeparated = false;
  U.mustUseProperty = false;
  U.defined = false;
  function Ye(e, n) {
    this.property = e, this.attribute = n;
  }
  var H = {}, $n = 0;
  H.boolean = X();
  H.booleanish = X();
  H.overloadedBoolean = X();
  H.number = X();
  H.spaceSeparated = X();
  H.commaSeparated = X();
  H.commaOrSpaceSeparated = X();
  function X() {
    return Math.pow(2, ++$n);
  }
  var Xe = Ke, Oe = H, Je = be;
  be.prototype = new Xe();
  be.prototype.defined = true;
  var Qe = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ], kn = Qe.length;
  function be(e, n, r, t) {
    var f = -1, v;
    for (Me(this, "space", t), Xe.call(this, e, n); ++f < kn; ) v = Qe[f], Me(this, v, (r & Oe[v]) === Oe[v]);
  }
  function Me(e, n, r) {
    r && (e[n] = r);
  }
  var Ie = xe, Ln = Ge, On = Je, le = Mn;
  function Mn(e) {
    var n = e.space, r = e.mustUseProperty || [], t = e.attributes || {}, f = e.properties, v = e.transform, m = {}, u = {}, g, E;
    for (g in f) E = new On(g, v(t, g), f[g], n), r.indexOf(g) !== -1 && (E.mustUseProperty = true), m[g] = E, u[Ie(g)] = g, u[Ie(E.attribute)] = g;
    return new Ln(m, u, n);
  }
  var In = le, Dn = In({
    space: "xlink",
    transform: Un,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  function Un(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  }
  var Nn = le, Rn = Nn({
    space: "xml",
    transform: jn,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function jn(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
  var qn = zn;
  function zn(e, n) {
    return n in e ? e[n] : n;
  }
  var Hn = qn, Ze = _n;
  function _n(e, n) {
    return Hn(e, n.toLowerCase());
  }
  var Bn = le, Wn = Ze, Fn = Bn({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: Wn,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  }), we = H, Gn = le, O = we.booleanish, D = we.number, Y = we.spaceSeparated, Vn = Gn({
    transform: Kn,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: O,
      ariaAutoComplete: null,
      ariaBusy: O,
      ariaChecked: O,
      ariaColCount: D,
      ariaColIndex: D,
      ariaColSpan: D,
      ariaControls: Y,
      ariaCurrent: null,
      ariaDescribedBy: Y,
      ariaDetails: null,
      ariaDisabled: O,
      ariaDropEffect: Y,
      ariaErrorMessage: null,
      ariaExpanded: O,
      ariaFlowTo: Y,
      ariaGrabbed: O,
      ariaHasPopup: null,
      ariaHidden: O,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Y,
      ariaLevel: D,
      ariaLive: null,
      ariaModal: O,
      ariaMultiLine: O,
      ariaMultiSelectable: O,
      ariaOrientation: null,
      ariaOwns: Y,
      ariaPlaceholder: null,
      ariaPosInSet: D,
      ariaPressed: O,
      ariaReadOnly: O,
      ariaRelevant: null,
      ariaRequired: O,
      ariaRoleDescription: Y,
      ariaRowCount: D,
      ariaRowIndex: D,
      ariaRowSpan: D,
      ariaSelected: O,
      ariaSetSize: D,
      ariaSort: null,
      ariaValueMax: D,
      ariaValueMin: D,
      ariaValueNow: D,
      ariaValueText: null,
      role: null
    }
  });
  function Kn(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
  var ee = H, Yn = le, Xn = Ze, h = ee.boolean, Jn = ee.overloadedBoolean, re = ee.booleanish, x = ee.number, L = ee.spaceSeparated, ue = ee.commaSeparated, Qn = Yn({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: Xn,
    mustUseProperty: [
      "checked",
      "multiple",
      "muted",
      "selected"
    ],
    properties: {
      abbr: null,
      accept: ue,
      acceptCharset: L,
      accessKey: L,
      action: null,
      allow: null,
      allowFullScreen: h,
      allowPaymentRequest: h,
      allowUserMedia: h,
      alt: null,
      as: null,
      async: h,
      autoCapitalize: null,
      autoComplete: L,
      autoFocus: h,
      autoPlay: h,
      capture: h,
      charSet: null,
      checked: h,
      cite: null,
      className: L,
      cols: x,
      colSpan: null,
      content: null,
      contentEditable: re,
      controls: h,
      controlsList: L,
      coords: x | ue,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: h,
      defer: h,
      dir: null,
      dirName: null,
      disabled: h,
      download: Jn,
      draggable: re,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: h,
      formTarget: null,
      headers: L,
      height: x,
      hidden: h,
      high: x,
      href: null,
      hrefLang: null,
      htmlFor: L,
      httpEquiv: L,
      id: null,
      imageSizes: null,
      imageSrcSet: ue,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: h,
      itemId: null,
      itemProp: L,
      itemRef: L,
      itemScope: h,
      itemType: L,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: h,
      low: x,
      manifest: null,
      max: null,
      maxLength: x,
      media: null,
      method: null,
      min: null,
      minLength: x,
      multiple: h,
      muted: h,
      name: null,
      nonce: null,
      noModule: h,
      noValidate: h,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: h,
      optimum: x,
      pattern: null,
      ping: L,
      placeholder: null,
      playsInline: h,
      poster: null,
      preload: null,
      readOnly: h,
      referrerPolicy: null,
      rel: L,
      required: h,
      reversed: h,
      rows: x,
      rowSpan: x,
      sandbox: L,
      scope: null,
      scoped: h,
      seamless: h,
      selected: h,
      shape: null,
      size: x,
      sizes: null,
      slot: null,
      span: x,
      spellCheck: re,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: ue,
      start: x,
      step: null,
      style: null,
      tabIndex: x,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: h,
      useMap: null,
      value: re,
      width: x,
      wrap: null,
      align: null,
      aLink: null,
      archive: L,
      axis: null,
      background: null,
      bgColor: null,
      border: x,
      borderColor: null,
      bottomMargin: x,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: h,
      declare: h,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: x,
      leftMargin: x,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: x,
      marginWidth: x,
      noResize: h,
      noHref: h,
      noShade: h,
      noWrap: h,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: x,
      rules: null,
      scheme: null,
      scrolling: re,
      standby: null,
      summary: null,
      text: null,
      topMargin: x,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: x,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: h,
      disableRemotePlayback: h,
      prefix: null,
      property: null,
      results: x,
      security: null,
      unselectable: null
    }
  }), Zn = En, er = Dn, nr = Rn, rr = Fn, ar = Vn, tr = Qn, lr = Zn([
    nr,
    er,
    rr,
    ar,
    tr
  ]), ir = xe, or = Je, sr = Ke, Ce = "data", ur = dr, cr = /^data[-\w.:]+$/i, en = /-[a-z]/g, fr = /[A-Z]/g;
  function dr(e, n) {
    var r = ir(n), t = n, f = sr;
    return r in e.normal ? e.property[e.normal[r]] : (r.length > 4 && r.slice(0, 4) === Ce && cr.test(n) && (n.charAt(4) === "-" ? t = vr(n) : n = pr(n), f = or), new f(t, n));
  }
  function vr(e) {
    var n = e.slice(5).replace(en, hr);
    return Ce + n.charAt(0).toUpperCase() + n.slice(1);
  }
  function pr(e) {
    var n = e.slice(4);
    return en.test(n) ? e : (n = n.replace(fr, gr), n.charAt(0) !== "-" && (n = "-" + n), Ce + n);
  }
  function gr(e) {
    return "-" + e.toLowerCase();
  }
  function hr(e) {
    return e.charAt(1).toUpperCase();
  }
  var mr = yr, De = /[#.]/g;
  function yr(e, n) {
    for (var r = e || "", t = n || "div", f = {}, v = 0, m, u, g; v < r.length; ) De.lastIndex = v, g = De.exec(r), m = r.slice(v, g ? g.index : r.length), m && (u ? u === "#" ? f.id = m : f.className ? f.className.push(m) : f.className = [
      m
    ] : t = m, v += m.length), g && (u = g[0], v++);
    return {
      type: "element",
      tagName: t,
      properties: f,
      children: []
    };
  }
  var Se = {};
  Se.parse = wr;
  Se.stringify = Cr;
  var Ue = "", xr = " ", br = /[ \t\n\r\f]+/g;
  function wr(e) {
    var n = String(e || Ue).trim();
    return n === Ue ? [] : n.split(br);
  }
  function Cr(e) {
    return e.join(xr).trim();
  }
  var Ae = {};
  Ae.parse = Sr;
  Ae.stringify = Ar;
  var he = ",", Ne = " ", ae = "";
  function Sr(e) {
    for (var n = [], r = String(e || ae), t = r.indexOf(he), f = 0, v = false, m; !v; ) t === -1 && (t = r.length, v = true), m = r.slice(f, t).trim(), (m || !v) && n.push(m), f = t + 1, t = r.indexOf(he, f);
    return n;
  }
  function Ar(e, n) {
    var r = n || {}, t = r.padLeft === false ? ae : Ne, f = r.padRight ? Ne : ae;
    return e[e.length - 1] === ae && (e = e.concat(ae)), e.join(f + he + t).trim();
  }
  var Er = ur, Re = xe, Pr = mr, je = Se.parse, qe = Ae.parse, Tr = kr, $r = {}.hasOwnProperty;
  function kr(e, n, r) {
    var t = r ? Dr(r) : null;
    return f;
    function f(m, u) {
      var g = Pr(m, n), E = Array.prototype.slice.call(arguments, 2), $ = g.tagName.toLowerCase(), C;
      if (g.tagName = t && $r.call(t, $) ? t[$] : $, u && Lr(u, g) && (E.unshift(u), u = null), u) for (C in u) v(g.properties, C, u[C]);
      return nn(g.children, E), g.tagName === "template" && (g.content = {
        type: "root",
        children: g.children
      }, g.children = []), g;
    }
    function v(m, u, g) {
      var E, $, C;
      g == null || g !== g || (E = Er(e, u), $ = E.property, C = g, typeof C == "string" && (E.spaceSeparated ? C = je(C) : E.commaSeparated ? C = qe(C) : E.commaOrSpaceSeparated && (C = je(qe(C).join(" ")))), $ === "style" && typeof g != "string" && (C = Ir(C)), $ === "className" && m.className && (C = m.className.concat(C)), m[$] = Mr(E, $, C));
    }
  }
  function Lr(e, n) {
    return typeof e == "string" || "length" in e || Or(n.tagName, e);
  }
  function Or(e, n) {
    var r = n.type;
    return e === "input" || !r || typeof r != "string" ? false : typeof n.children == "object" && "length" in n.children ? true : (r = r.toLowerCase(), e === "button" ? r !== "menu" && r !== "submit" && r !== "reset" && r !== "button" : "value" in n);
  }
  function nn(e, n) {
    var r, t;
    if (typeof n == "string" || typeof n == "number") {
      e.push({
        type: "text",
        value: String(n)
      });
      return;
    }
    if (typeof n == "object" && "length" in n) {
      for (r = -1, t = n.length; ++r < t; ) nn(e, n[r]);
      return;
    }
    if (typeof n != "object" || !("type" in n)) throw new Error("Expected node, nodes, or string, got `" + n + "`");
    e.push(n);
  }
  function Mr(e, n, r) {
    var t, f, v;
    if (typeof r != "object" || !("length" in r)) return ze(e, n, r);
    for (f = r.length, t = -1, v = []; ++t < f; ) v[t] = ze(e, n, r[t]);
    return v;
  }
  function ze(e, n, r) {
    var t = r;
    return e.number || e.positiveNumber ? !isNaN(t) && t !== "" && (t = Number(t)) : (e.boolean || e.overloadedBoolean) && typeof t == "string" && (t === "" || Re(r) === Re(n)) && (t = true), t;
  }
  function Ir(e) {
    var n = [], r;
    for (r in e) n.push([
      r,
      e[r]
    ].join(": "));
    return n.join("; ");
  }
  function Dr(e) {
    for (var n = e.length, r = -1, t = {}, f; ++r < n; ) f = e[r], t[f.toLowerCase()] = f;
    return t;
  }
  var Ur = lr, Nr = Tr, rn = Nr(Ur, "div");
  rn.displayName = "html";
  var Rr = rn, jr = Rr;
  const qr = "\xC6", zr = "&", Hr = "\xC1", _r = "\xC2", Br = "\xC0", Wr = "\xC5", Fr = "\xC3", Gr = "\xC4", Vr = "\xA9", Kr = "\xC7", Yr = "\xD0", Xr = "\xC9", Jr = "\xCA", Qr = "\xC8", Zr = "\xCB", ea = ">", na = "\xCD", ra = "\xCE", aa = "\xCC", ta = "\xCF", la = "<", ia = "\xD1", oa = "\xD3", sa = "\xD4", ua = "\xD2", ca = "\xD8", fa = "\xD5", da = "\xD6", va = '"', pa = "\xAE", ga = "\xDE", ha = "\xDA", ma = "\xDB", ya = "\xD9", xa = "\xDC", ba = "\xDD", wa = "\xE1", Ca = "\xE2", Sa = "\xB4", Aa = "\xE6", Ea = "\xE0", Pa = "&", Ta = "\xE5", $a = "\xE3", ka = "\xE4", La = "\xA6", Oa = "\xE7", Ma = "\xB8", Ia = "\xA2", Da = "\xA9", Ua = "\xA4", Na = "\xB0", Ra = "\xF7", ja = "\xE9", qa = "\xEA", za = "\xE8", Ha = "\xF0", _a = "\xEB", Ba = "\xBD", Wa = "\xBC", Fa = "\xBE", Ga = ">", Va = "\xED", Ka = "\xEE", Ya = "\xA1", Xa = "\xEC", Ja = "\xBF", Qa = "\xEF", Za = "\xAB", et = "<", nt = "\xAF", rt = "\xB5", at = "\xB7", tt = "\xA0", lt = "\xAC", it = "\xF1", ot = "\xF3", st = "\xF4", ut = "\xF2", ct = "\xAA", ft = "\xBA", dt = "\xF8", vt = "\xF5", pt = "\xF6", gt = "\xB6", ht = "\xB1", mt = "\xA3", yt = '"', xt = "\xBB", bt = "\xAE", wt = "\xA7", Ct = "\xAD", St = "\xB9", At = "\xB2", Et = "\xB3", Pt = "\xDF", Tt = "\xFE", $t = "\xD7", kt = "\xFA", Lt = "\xFB", Ot = "\xF9", Mt = "\xA8", It = "\xFC", Dt = "\xFD", Ut = "\xA5", Nt = "\xFF", Rt = {
    AElig: qr,
    AMP: zr,
    Aacute: Hr,
    Acirc: _r,
    Agrave: Br,
    Aring: Wr,
    Atilde: Fr,
    Auml: Gr,
    COPY: Vr,
    Ccedil: Kr,
    ETH: Yr,
    Eacute: Xr,
    Ecirc: Jr,
    Egrave: Qr,
    Euml: Zr,
    GT: ea,
    Iacute: na,
    Icirc: ra,
    Igrave: aa,
    Iuml: ta,
    LT: la,
    Ntilde: ia,
    Oacute: oa,
    Ocirc: sa,
    Ograve: ua,
    Oslash: ca,
    Otilde: fa,
    Ouml: da,
    QUOT: va,
    REG: pa,
    THORN: ga,
    Uacute: ha,
    Ucirc: ma,
    Ugrave: ya,
    Uuml: xa,
    Yacute: ba,
    aacute: wa,
    acirc: Ca,
    acute: Sa,
    aelig: Aa,
    agrave: Ea,
    amp: Pa,
    aring: Ta,
    atilde: $a,
    auml: ka,
    brvbar: La,
    ccedil: Oa,
    cedil: Ma,
    cent: Ia,
    copy: Da,
    curren: Ua,
    deg: Na,
    divide: Ra,
    eacute: ja,
    ecirc: qa,
    egrave: za,
    eth: Ha,
    euml: _a,
    frac12: Ba,
    frac14: Wa,
    frac34: Fa,
    gt: Ga,
    iacute: Va,
    icirc: Ka,
    iexcl: Ya,
    igrave: Xa,
    iquest: Ja,
    iuml: Qa,
    laquo: Za,
    lt: et,
    macr: nt,
    micro: rt,
    middot: at,
    nbsp: tt,
    not: lt,
    ntilde: it,
    oacute: ot,
    ocirc: st,
    ograve: ut,
    ordf: ct,
    ordm: ft,
    oslash: dt,
    otilde: vt,
    ouml: pt,
    para: gt,
    plusmn: ht,
    pound: mt,
    quot: yt,
    raquo: xt,
    reg: bt,
    sect: wt,
    shy: Ct,
    sup1: St,
    sup2: At,
    sup3: Et,
    szlig: Pt,
    thorn: Tt,
    times: $t,
    uacute: kt,
    ucirc: Lt,
    ugrave: Ot,
    uml: Mt,
    uuml: It,
    yacute: Dt,
    yen: Ut,
    yuml: Nt
  }, jt = {
    0: "\uFFFD",
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  };
  var an = qt;
  function qt(e) {
    var n = typeof e == "string" ? e.charCodeAt(0) : e;
    return n >= 48 && n <= 57;
  }
  var zt = Ht;
  function Ht(e) {
    var n = typeof e == "string" ? e.charCodeAt(0) : e;
    return n >= 97 && n <= 102 || n >= 65 && n <= 70 || n >= 48 && n <= 57;
  }
  var _t = Bt;
  function Bt(e) {
    var n = typeof e == "string" ? e.charCodeAt(0) : e;
    return n >= 97 && n <= 122 || n >= 65 && n <= 90;
  }
  var Wt = _t, Ft = an, Gt = Vt;
  function Vt(e) {
    return Wt(e) || Ft(e);
  }
  var ce, Kt = 59, Yt = Xt;
  function Xt(e) {
    var n = "&" + e + ";", r;
    return ce = ce || document.createElement("i"), ce.innerHTML = n, r = ce.textContent, r.charCodeAt(r.length - 1) === Kt && e !== "semi" || r === n ? false : r;
  }
  var He = Rt, _e = jt, Jt = an, Qt = zt, tn = Gt, Zt = Yt, el = vl, nl = {}.hasOwnProperty, Q = String.fromCharCode, rl = Function.prototype, Be = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: false,
    nonTerminated: true
  }, al = 9, We = 10, tl = 12, ll = 32, Fe = 38, il = 59, ol = 60, sl = 61, ul = 35, cl = 88, fl = 120, dl = 65533, Z = "named", Ee = "hexadecimal", Pe = "decimal", Te = {};
  Te[Ee] = 16;
  Te[Pe] = 10;
  var fe = {};
  fe[Z] = tn;
  fe[Pe] = Jt;
  fe[Ee] = Qt;
  var ln = 1, on = 2, sn = 3, un = 4, cn = 5, me = 6, fn = 7, V = {};
  V[ln] = "Named character references must be terminated by a semicolon";
  V[on] = "Numeric character references must be terminated by a semicolon";
  V[sn] = "Named character references cannot be empty";
  V[un] = "Numeric character references cannot be empty";
  V[cn] = "Named character references must be known";
  V[me] = "Numeric character references cannot be disallowed";
  V[fn] = "Numeric character references cannot be outside the permissible Unicode range";
  function vl(e, n) {
    var r = {}, t, f;
    n || (n = {});
    for (f in Be) t = n[f], r[f] = t ?? Be[f];
    return (r.position.indent || r.position.start) && (r.indent = r.position.indent || [], r.position = r.position.start), pl(e, r);
  }
  function pl(e, n) {
    var r = n.additional, t = n.nonTerminated, f = n.text, v = n.reference, m = n.warning, u = n.textContext, g = n.referenceContext, E = n.warningContext, $ = n.position, C = n.indent || [], B = e.length, j = 0, oe = -1, M = $.column || 1, J = $.line || 1, q = "", l = [], a, s, o, i, d, p, c, y, S, I, z, W, _, N, ne, w, k, P, b;
    for (typeof r == "string" && (r = r.charCodeAt(0)), w = T(), y = m ? de : rl, j--, B++; ++j < B; ) if (d === We && (M = C[oe] || 1), d = e.charCodeAt(j), d === Fe) {
      if (c = e.charCodeAt(j + 1), c === al || c === We || c === tl || c === ll || c === Fe || c === ol || c !== c || r && c === r) {
        q += Q(d), M++;
        continue;
      }
      for (_ = j + 1, W = _, b = _, c === ul ? (b = ++W, c = e.charCodeAt(b), c === cl || c === fl ? (N = Ee, b = ++W) : N = Pe) : N = Z, a = "", z = "", i = "", ne = fe[N], b--; ++b < B && (c = e.charCodeAt(b), !!ne(c)); ) i += Q(c), N === Z && nl.call(He, i) && (a = i, z = He[i]);
      o = e.charCodeAt(b) === il, o && (b++, s = N === Z ? Zt(i) : false, s && (a = i, z = s)), P = 1 + b - _, !o && !t || (i ? N === Z ? (o && !z ? y(cn, 1) : (a !== i && (b = W + a.length, P = 1 + b - W, o = false), o || (S = a ? ln : sn, n.attribute ? (c = e.charCodeAt(b), c === sl ? (y(S, P), z = null) : tn(c) ? z = null : y(S, P)) : y(S, P))), p = z) : (o || y(on, P), p = parseInt(i, Te[N]), gl(p) ? (y(fn, P), p = Q(dl)) : p in _e ? (y(me, P), p = _e[p]) : (I = "", hl(p) && y(me, P), p > 65535 && (p -= 65536, I += Q(p >>> 10 | 55296), p = 56320 | p & 1023), p = I + Q(p))) : N !== Z && y(un, P)), p ? (R(), w = T(), j = b - 1, M += b - _ + 1, l.push(p), k = T(), k.offset++, v && v.call(g, p, {
        start: w,
        end: k
      }, e.slice(_ - 1, b)), w = k) : (i = e.slice(_ - 1, b), q += i, M += i.length, j = b - 1);
    } else d === 10 && (J++, oe++, M = 0), d === d ? (q += Q(d), M++) : R();
    return l.join("");
    function T() {
      return {
        line: J,
        column: M,
        offset: j + ($.offset || 0)
      };
    }
    function de(F, K) {
      var G = T();
      G.column += K, G.offset += K, m.call(E, V[F], G, F);
    }
    function R() {
      q && (l.push(q), f && f.call(u, q, {
        start: w,
        end: T()
      }), q = "");
    }
  }
  function gl(e) {
    return e >= 55296 && e <= 57343 || e > 1114111;
  }
  function hl(e) {
    return e >= 1 && e <= 8 || e === 11 || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534;
  }
  var dn = {
    exports: {}
  };
  (function(e) {
    var n = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    var r = function(t) {
      var f = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, v = 0, m = {}, u = {
        manual: t.Prism && t.Prism.manual,
        disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
        util: {
          encode: function l(a) {
            return a instanceof g ? new g(a.type, l(a.content), a.alias) : Array.isArray(a) ? a.map(l) : a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function(l) {
            return Object.prototype.toString.call(l).slice(8, -1);
          },
          objId: function(l) {
            return l.__id || Object.defineProperty(l, "__id", {
              value: ++v
            }), l.__id;
          },
          clone: function l(a, s) {
            s = s || {};
            var o, i;
            switch (u.util.type(a)) {
              case "Object":
                if (i = u.util.objId(a), s[i]) return s[i];
                o = {}, s[i] = o;
                for (var d in a) a.hasOwnProperty(d) && (o[d] = l(a[d], s));
                return o;
              case "Array":
                return i = u.util.objId(a), s[i] ? s[i] : (o = [], s[i] = o, a.forEach(function(p, c) {
                  o[c] = l(p, s);
                }), o);
              default:
                return a;
            }
          },
          getLanguage: function(l) {
            for (; l; ) {
              var a = f.exec(l.className);
              if (a) return a[1].toLowerCase();
              l = l.parentElement;
            }
            return "none";
          },
          setLanguage: function(l, a) {
            l.className = l.className.replace(RegExp(f, "gi"), ""), l.classList.add("language-" + a);
          },
          currentScript: function() {
            if (typeof document > "u") return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (o) {
              var l = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack) || [])[1];
              if (l) {
                var a = document.getElementsByTagName("script");
                for (var s in a) if (a[s].src == l) return a[s];
              }
              return null;
            }
          },
          isActive: function(l, a, s) {
            for (var o = "no-" + a; l; ) {
              var i = l.classList;
              if (i.contains(a)) return true;
              if (i.contains(o)) return false;
              l = l.parentElement;
            }
            return !!s;
          }
        },
        languages: {
          plain: m,
          plaintext: m,
          text: m,
          txt: m,
          extend: function(l, a) {
            var s = u.util.clone(u.languages[l]);
            for (var o in a) s[o] = a[o];
            return s;
          },
          insertBefore: function(l, a, s, o) {
            o = o || u.languages;
            var i = o[l], d = {};
            for (var p in i) if (i.hasOwnProperty(p)) {
              if (p == a) for (var c in s) s.hasOwnProperty(c) && (d[c] = s[c]);
              s.hasOwnProperty(p) || (d[p] = i[p]);
            }
            var y = o[l];
            return o[l] = d, u.languages.DFS(u.languages, function(S, I) {
              I === y && S != l && (this[S] = d);
            }), d;
          },
          DFS: function l(a, s, o, i) {
            i = i || {};
            var d = u.util.objId;
            for (var p in a) if (a.hasOwnProperty(p)) {
              s.call(a, p, a[p], o || p);
              var c = a[p], y = u.util.type(c);
              y === "Object" && !i[d(c)] ? (i[d(c)] = true, l(c, s, null, i)) : y === "Array" && !i[d(c)] && (i[d(c)] = true, l(c, s, p, i));
            }
          }
        },
        plugins: {},
        highlightAll: function(l, a) {
          u.highlightAllUnder(document, l, a);
        },
        highlightAllUnder: function(l, a, s) {
          var o = {
            callback: s,
            container: l,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          u.hooks.run("before-highlightall", o), o.elements = Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)), u.hooks.run("before-all-elements-highlight", o);
          for (var i = 0, d; d = o.elements[i++]; ) u.highlightElement(d, a === true, o.callback);
        },
        highlightElement: function(l, a, s) {
          var o = u.util.getLanguage(l), i = u.languages[o];
          u.util.setLanguage(l, o);
          var d = l.parentElement;
          d && d.nodeName.toLowerCase() === "pre" && u.util.setLanguage(d, o);
          var p = l.textContent, c = {
            element: l,
            language: o,
            grammar: i,
            code: p
          };
          function y(I) {
            c.highlightedCode = I, u.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, u.hooks.run("after-highlight", c), u.hooks.run("complete", c), s && s.call(c.element);
          }
          if (u.hooks.run("before-sanity-check", c), d = c.element.parentElement, d && d.nodeName.toLowerCase() === "pre" && !d.hasAttribute("tabindex") && d.setAttribute("tabindex", "0"), !c.code) {
            u.hooks.run("complete", c), s && s.call(c.element);
            return;
          }
          if (u.hooks.run("before-highlight", c), !c.grammar) {
            y(u.util.encode(c.code));
            return;
          }
          if (a && t.Worker) {
            var S = new Worker(u.filename);
            S.onmessage = function(I) {
              y(I.data);
            }, S.postMessage(JSON.stringify({
              language: c.language,
              code: c.code,
              immediateClose: true
            }));
          } else y(u.highlight(c.code, c.grammar, c.language));
        },
        highlight: function(l, a, s) {
          var o = {
            code: l,
            grammar: a,
            language: s
          };
          if (u.hooks.run("before-tokenize", o), !o.grammar) throw new Error('The language "' + o.language + '" has no grammar.');
          return o.tokens = u.tokenize(o.code, o.grammar), u.hooks.run("after-tokenize", o), g.stringify(u.util.encode(o.tokens), o.language);
        },
        tokenize: function(l, a) {
          var s = a.rest;
          if (s) {
            for (var o in s) a[o] = s[o];
            delete a.rest;
          }
          var i = new C();
          return B(i, i.head, l), $(l, i, a, i.head, 0), oe(i);
        },
        hooks: {
          all: {},
          add: function(l, a) {
            var s = u.hooks.all;
            s[l] = s[l] || [], s[l].push(a);
          },
          run: function(l, a) {
            var s = u.hooks.all[l];
            if (!(!s || !s.length)) for (var o = 0, i; i = s[o++]; ) i(a);
          }
        },
        Token: g
      };
      t.Prism = u;
      function g(l, a, s, o) {
        this.type = l, this.content = a, this.alias = s, this.length = (o || "").length | 0;
      }
      g.stringify = function l(a, s) {
        if (typeof a == "string") return a;
        if (Array.isArray(a)) {
          var o = "";
          return a.forEach(function(y) {
            o += l(y, s);
          }), o;
        }
        var i = {
          type: a.type,
          content: l(a.content, s),
          tag: "span",
          classes: [
            "token",
            a.type
          ],
          attributes: {},
          language: s
        }, d = a.alias;
        d && (Array.isArray(d) ? Array.prototype.push.apply(i.classes, d) : i.classes.push(d)), u.hooks.run("wrap", i);
        var p = "";
        for (var c in i.attributes) p += " " + c + '="' + (i.attributes[c] || "").replace(/"/g, "&quot;") + '"';
        return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + p + ">" + i.content + "</" + i.tag + ">";
      };
      function E(l, a, s, o) {
        l.lastIndex = a;
        var i = l.exec(s);
        if (i && o && i[1]) {
          var d = i[1].length;
          i.index += d, i[0] = i[0].slice(d);
        }
        return i;
      }
      function $(l, a, s, o, i, d) {
        for (var p in s) if (!(!s.hasOwnProperty(p) || !s[p])) {
          var c = s[p];
          c = Array.isArray(c) ? c : [
            c
          ];
          for (var y = 0; y < c.length; ++y) {
            if (d && d.cause == p + "," + y) return;
            var S = c[y], I = S.inside, z = !!S.lookbehind, W = !!S.greedy, _ = S.alias;
            if (W && !S.pattern.global) {
              var N = S.pattern.toString().match(/[imsuy]*$/)[0];
              S.pattern = RegExp(S.pattern.source, N + "g");
            }
            for (var ne = S.pattern || S, w = o.next, k = i; w !== a.tail && !(d && k >= d.reach); k += w.value.length, w = w.next) {
              var P = w.value;
              if (a.length > l.length) return;
              if (!(P instanceof g)) {
                var b = 1, T;
                if (W) {
                  if (T = E(ne, k, l, z), !T || T.index >= l.length) break;
                  var K = T.index, de = T.index + T[0].length, R = k;
                  for (R += w.value.length; K >= R; ) w = w.next, R += w.value.length;
                  if (R -= w.value.length, k = R, w.value instanceof g) continue;
                  for (var F = w; F !== a.tail && (R < de || typeof F.value == "string"); F = F.next) b++, R += F.value.length;
                  b--, P = l.slice(k, R), T.index -= k;
                } else if (T = E(ne, 0, P, z), !T) continue;
                var K = T.index, G = T[0], ve = P.slice(0, K), ke = P.slice(K + G.length), pe = k + P.length;
                d && pe > d.reach && (d.reach = pe);
                var se = w.prev;
                ve && (se = B(a, se, ve), k += ve.length), j(a, se, b);
                var hn = new g(p, I ? u.tokenize(G, I) : G, _, G);
                if (w = B(a, se, hn), ke && B(a, w, ke), b > 1) {
                  var ge = {
                    cause: p + "," + y,
                    reach: pe
                  };
                  $(l, a, s, w.prev, k, ge), d && ge.reach > d.reach && (d.reach = ge.reach);
                }
              }
            }
          }
        }
      }
      function C() {
        var l = {
          value: null,
          prev: null,
          next: null
        }, a = {
          value: null,
          prev: l,
          next: null
        };
        l.next = a, this.head = l, this.tail = a, this.length = 0;
      }
      function B(l, a, s) {
        var o = a.next, i = {
          value: s,
          prev: a,
          next: o
        };
        return a.next = i, o.prev = i, l.length++, i;
      }
      function j(l, a, s) {
        for (var o = a.next, i = 0; i < s && o !== l.tail; i++) o = o.next;
        a.next = o, o.prev = a, l.length -= i;
      }
      function oe(l) {
        for (var a = [], s = l.head.next; s !== l.tail; ) a.push(s.value), s = s.next;
        return a;
      }
      if (!t.document) return t.addEventListener && (u.disableWorkerMessageHandler || t.addEventListener("message", function(l) {
        var a = JSON.parse(l.data), s = a.language, o = a.code, i = a.immediateClose;
        t.postMessage(u.highlight(o, u.languages[s], s)), i && t.close();
      }, false)), u;
      var M = u.util.currentScript();
      M && (u.filename = M.src, M.hasAttribute("data-manual") && (u.manual = true));
      function J() {
        u.manual || u.highlightAll();
      }
      if (!u.manual) {
        var q = document.readyState;
        q === "loading" || q === "interactive" && M && M.defer ? document.addEventListener("DOMContentLoaded", J) : window.requestAnimationFrame ? window.requestAnimationFrame(J) : window.setTimeout(J, 16);
      }
      return u;
    }(n);
    e.exports && (e.exports = r), typeof globalThis < "u" && (globalThis.Prism = r);
  })(dn);
  var ml = dn.exports, te = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof globalThis == "object" ? globalThis : {}, yl = Il();
  te.Prism = {
    manual: true,
    disableWorkerMessageHandler: true
  };
  var xl = jr, bl = el, vn = ml, wl = xn, Cl = bn, Sl = wn, Al = Cn;
  yl();
  var $e = {}.hasOwnProperty;
  function pn() {
  }
  pn.prototype = vn;
  var A = new pn(), gn = A;
  A.highlight = Pl;
  A.register = ie;
  A.alias = El;
  A.registered = Tl;
  A.listLanguages = $l;
  ie(wl);
  ie(Cl);
  ie(Sl);
  ie(Al);
  A.util.encode = Ol;
  A.Token.stringify = kl;
  function ie(e) {
    if (typeof e != "function" || !e.displayName) throw new Error("Expected `function` for `grammar`, got `" + e + "`");
    A.languages[e.displayName] === void 0 && e(A);
  }
  function El(e, n) {
    var r = A.languages, t = e, f, v, m, u;
    n && (t = {}, t[e] = n);
    for (f in t) for (v = t[f], v = typeof v == "string" ? [
      v
    ] : v, m = v.length, u = -1; ++u < m; ) r[v[u]] = r[f];
  }
  function Pl(e, n) {
    var r = vn.highlight, t;
    if (typeof e != "string") throw new Error("Expected `string` for `value`, got `" + e + "`");
    if (A.util.type(n) === "Object") t = n, n = null;
    else {
      if (typeof n != "string") throw new Error("Expected `string` for `name`, got `" + n + "`");
      if ($e.call(A.languages, n)) t = A.languages[n];
      else throw new Error("Unknown language: `" + n + "` is not registered");
    }
    return r.call(this, e, t, n);
  }
  function Tl(e) {
    if (typeof e != "string") throw new Error("Expected `string` for `language`, got `" + e + "`");
    return $e.call(A.languages, e);
  }
  function $l() {
    var e = A.languages, n = [], r;
    for (r in e) $e.call(e, r) && typeof e[r] == "object" && n.push(r);
    return n;
  }
  function kl(e, n, r) {
    var t;
    return typeof e == "string" ? {
      type: "text",
      value: e
    } : A.util.type(e) === "Array" ? Ll(e, n) : (t = {
      type: e.type,
      content: A.Token.stringify(e.content, n, r),
      tag: "span",
      classes: [
        "token",
        e.type
      ],
      attributes: {},
      language: n,
      parent: r
    }, e.alias && (t.classes = t.classes.concat(e.alias)), A.hooks.run("wrap", t), xl(t.tag + "." + t.classes.join("."), Ml(t.attributes), t.content));
  }
  function Ll(e, n) {
    for (var r = [], t = e.length, f = -1, v; ++f < t; ) v = e[f], v !== "" && v !== null && v !== void 0 && r.push(v);
    for (f = -1, t = r.length; ++f < t; ) v = r[f], r[f] = A.Token.stringify(v, n, r);
    return r;
  }
  function Ol(e) {
    return e;
  }
  function Ml(e) {
    var n;
    for (n in e) e[n] = bl(e[n]);
    return e;
  }
  function Il() {
    var e = "Prism" in te, n = e ? te.Prism : void 0;
    return r;
    function r() {
      e ? te.Prism = n : delete te.Prism, e = void 0, n = void 0;
    }
  }
  let Dl;
  Dl = yn(gn);
  zl = Sn({
    __proto__: null,
    default: Dl
  }, [
    gn
  ]);
});
export {
  __tla,
  zl as c
};
