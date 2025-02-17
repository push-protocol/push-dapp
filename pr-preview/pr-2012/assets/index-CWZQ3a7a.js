import { M as re, T as xt, R as N, C as x, a as ht, O as Z, b as X, E as j, c as Bo, __tla as __tla_0 } from "./index-CuaR4JZ9.js";
import { jR as Wo, __tla as __tla_1 } from "./index-UiBHnyIz.js";
let Zt, nt;
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
  })()
]).then(async () => {
  const oe = window, ur = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, mr = Symbol(), Er = /* @__PURE__ */ new WeakMap();
  let Gr = class {
    constructor(t, r, n) {
      if (this._$cssResult$ = true, n !== mr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = r;
    }
    get styleSheet() {
      let t = this.o;
      const r = this.t;
      if (ur && t === void 0) {
        const n = r !== void 0 && r.length === 1;
        n && (t = Er.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Er.set(r, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const ko = (e) => new Gr(typeof e == "string" ? e : e + "", void 0, mr), P = (e, ...t) => {
    const r = e.length === 1 ? e[0] : t.reduce((n, o, i) => n + ((s) => {
      if (s._$cssResult$ === true) return s.cssText;
      if (typeof s == "number") return s;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(o) + e[i + 1], e[0]);
    return new Gr(r, e, mr);
  }, Uo = (e, t) => {
    ur ? e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet) : t.forEach((r) => {
      const n = document.createElement("style"), o = oe.litNonce;
      o !== void 0 && n.setAttribute("nonce", o), n.textContent = r.cssText, e.appendChild(n);
    });
  }, Ar = ur ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
    let r = "";
    for (const n of t.cssRules) r += n.cssText;
    return ko(r);
  })(e) : e;
  var Ce;
  const ne = window, Or = ne.trustedTypes, jo = Or ? Or.emptyScript : "", Ir = ne.reactiveElementPolyfillSupport, je = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? jo : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let r = e;
      switch (t) {
        case Boolean:
          r = e !== null;
          break;
        case Number:
          r = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(e);
          } catch {
            r = null;
          }
      }
      return r;
    }
  }, Jr = (e, t) => t !== e && (t == t || e == e), _e = {
    attribute: true,
    type: String,
    converter: je,
    reflect: false,
    hasChanged: Jr
  }, He = "finalized";
  let wt = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
      var r;
      this.finalize(), ((r = this.h) !== null && r !== void 0 ? r : this.h = []).push(t);
    }
    static get observedAttributes() {
      this.finalize();
      const t = [];
      return this.elementProperties.forEach((r, n) => {
        const o = this._$Ep(n, r);
        o !== void 0 && (this._$Ev.set(o, n), t.push(o));
      }), t;
    }
    static createProperty(t, r = _e) {
      if (r.state && (r.attribute = false), this.finalize(), this.elementProperties.set(t, r), !r.noAccessor && !this.prototype.hasOwnProperty(t)) {
        const n = typeof t == "symbol" ? Symbol() : "__" + t, o = this.getPropertyDescriptor(t, n, r);
        o !== void 0 && Object.defineProperty(this.prototype, t, o);
      }
    }
    static getPropertyDescriptor(t, r, n) {
      return {
        get() {
          return this[r];
        },
        set(o) {
          const i = this[t];
          this[r] = o, this.requestUpdate(t, i, n);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) || _e;
    }
    static finalize() {
      if (this.hasOwnProperty(He)) return false;
      this[He] = true;
      const t = Object.getPrototypeOf(this);
      if (t.finalize(), t.h !== void 0 && (this.h = [
        ...t.h
      ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const r = this.properties, n = [
          ...Object.getOwnPropertyNames(r),
          ...Object.getOwnPropertySymbols(r)
        ];
        for (const o of n) this.createProperty(o, r[o]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(t) {
      const r = [];
      if (Array.isArray(t)) {
        const n = new Set(t.flat(1 / 0).reverse());
        for (const o of n) r.unshift(Ar(o));
      } else t !== void 0 && r.push(Ar(t));
      return r;
    }
    static _$Ep(t, r) {
      const n = r.attribute;
      return n === false ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    _$Eu() {
      var t;
      this._$E_ = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((r) => r(this));
    }
    addController(t) {
      var r, n;
      ((r = this._$ES) !== null && r !== void 0 ? r : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((n = t.hostConnected) === null || n === void 0 || n.call(t));
    }
    removeController(t) {
      var r;
      (r = this._$ES) === null || r === void 0 || r.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t, r) => {
        this.hasOwnProperty(r) && (this._$Ei.set(r, this[r]), delete this[r]);
      });
    }
    createRenderRoot() {
      var t;
      const r = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return Uo(r, this.constructor.elementStyles), r;
    }
    connectedCallback() {
      var t;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t = this._$ES) === null || t === void 0 || t.forEach((r) => {
        var n;
        return (n = r.hostConnected) === null || n === void 0 ? void 0 : n.call(r);
      });
    }
    enableUpdating(t) {
    }
    disconnectedCallback() {
      var t;
      (t = this._$ES) === null || t === void 0 || t.forEach((r) => {
        var n;
        return (n = r.hostDisconnected) === null || n === void 0 ? void 0 : n.call(r);
      });
    }
    attributeChangedCallback(t, r, n) {
      this._$AK(t, n);
    }
    _$EO(t, r, n = _e) {
      var o;
      const i = this.constructor._$Ep(t, n);
      if (i !== void 0 && n.reflect === true) {
        const s = (((o = n.converter) === null || o === void 0 ? void 0 : o.toAttribute) !== void 0 ? n.converter : je).toAttribute(r, n.type);
        this._$El = t, s == null ? this.removeAttribute(i) : this.setAttribute(i, s), this._$El = null;
      }
    }
    _$AK(t, r) {
      var n;
      const o = this.constructor, i = o._$Ev.get(t);
      if (i !== void 0 && this._$El !== i) {
        const s = o.getPropertyOptions(i), l = typeof s.converter == "function" ? {
          fromAttribute: s.converter
        } : ((n = s.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? s.converter : je;
        this._$El = i, this[i] = l.fromAttribute(r, s.type), this._$El = null;
      }
    }
    requestUpdate(t, r, n) {
      let o = true;
      t !== void 0 && (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || Jr)(this[t], r) ? (this._$AL.has(t) || this._$AL.set(t, r), n.reflect === true && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, n))) : o = false), !this.isUpdatePending && o && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (r) {
        Promise.reject(r);
      }
      const t = this.scheduleUpdate();
      return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((o, i) => this[i] = o), this._$Ei = void 0);
      let r = false;
      const n = this._$AL;
      try {
        r = this.shouldUpdate(n), r ? (this.willUpdate(n), (t = this._$ES) === null || t === void 0 || t.forEach((o) => {
          var i;
          return (i = o.hostUpdate) === null || i === void 0 ? void 0 : i.call(o);
        }), this.update(n)) : this._$Ek();
      } catch (o) {
        throw r = false, this._$Ek(), o;
      }
      r && this._$AE(n);
    }
    willUpdate(t) {
    }
    _$AE(t) {
      var r;
      (r = this._$ES) === null || r === void 0 || r.forEach((n) => {
        var o;
        return (o = n.hostUpdated) === null || o === void 0 ? void 0 : o.call(n);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t) {
      return true;
    }
    update(t) {
      this._$EC !== void 0 && (this._$EC.forEach((r, n) => this._$EO(n, this[n], r)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {
    }
    firstUpdated(t) {
    }
  };
  wt[He] = true, wt.elementProperties = /* @__PURE__ */ new Map(), wt.elementStyles = [], wt.shadowRootOptions = {
    mode: "open"
  }, Ir == null ? void 0 : Ir({
    ReactiveElement: wt
  }), ((Ce = ne.reactiveElementVersions) !== null && Ce !== void 0 ? Ce : ne.reactiveElementVersions = []).push("1.6.3");
  var Ee;
  const ie = window, $t = ie.trustedTypes, Pr = $t ? $t.createPolicy("lit-html", {
    createHTML: (e) => e
  }) : void 0, ze = "$lit$", Q = `lit$${(Math.random() + "").slice(9)}$`, Qr = "?" + Q, Ho = `<${Qr}>`, ut = document, Wt = () => ut.createComment(""), kt = (e) => e === null || typeof e != "object" && typeof e != "function", Xr = Array.isArray, zo = (e) => Xr(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Ae = `[ 	
\f\r]`, Dt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Tr = /-->/g, Mr = />/g, at = RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Sr = /'/g, Rr = /"/g, to = /^(?:script|style|textarea|title)$/i, eo = (e) => (t, ...r) => ({
    _$litType$: e,
    strings: t,
    values: r
  }), u = eo(1), L = eo(2), mt = Symbol.for("lit-noChange"), B = Symbol.for("lit-nothing"), Dr = /* @__PURE__ */ new WeakMap(), ct = ut.createTreeWalker(ut, 129, null, false);
  function ro(e, t) {
    if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Pr !== void 0 ? Pr.createHTML(t) : t;
  }
  const Fo = (e, t) => {
    const r = e.length - 1, n = [];
    let o, i = t === 2 ? "<svg>" : "", s = Dt;
    for (let l = 0; l < r; l++) {
      const a = e[l];
      let c, d, y = -1, h = 0;
      for (; h < a.length && (s.lastIndex = h, d = s.exec(a), d !== null); ) h = s.lastIndex, s === Dt ? d[1] === "!--" ? s = Tr : d[1] !== void 0 ? s = Mr : d[2] !== void 0 ? (to.test(d[2]) && (o = RegExp("</" + d[2], "g")), s = at) : d[3] !== void 0 && (s = at) : s === at ? d[0] === ">" ? (s = o ?? Dt, y = -1) : d[1] === void 0 ? y = -2 : (y = s.lastIndex - d[2].length, c = d[1], s = d[3] === void 0 ? at : d[3] === '"' ? Rr : Sr) : s === Rr || s === Sr ? s = at : s === Tr || s === Mr ? s = Dt : (s = at, o = void 0);
      const g = s === at && e[l + 1].startsWith("/>") ? " " : "";
      i += s === Dt ? a + Ho : y >= 0 ? (n.push(c), a.slice(0, y) + ze + a.slice(y) + Q + g) : a + Q + (y === -2 ? (n.push(void 0), l) : g);
    }
    return [
      ro(e, i + (e[r] || "<?>") + (t === 2 ? "</svg>" : "")),
      n
    ];
  };
  class Ut {
    constructor({ strings: t, _$litType$: r }, n) {
      let o;
      this.parts = [];
      let i = 0, s = 0;
      const l = t.length - 1, a = this.parts, [c, d] = Fo(t, r);
      if (this.el = Ut.createElement(c, n), ct.currentNode = this.el.content, r === 2) {
        const y = this.el.content, h = y.firstChild;
        h.remove(), y.append(...h.childNodes);
      }
      for (; (o = ct.nextNode()) !== null && a.length < l; ) {
        if (o.nodeType === 1) {
          if (o.hasAttributes()) {
            const y = [];
            for (const h of o.getAttributeNames()) if (h.endsWith(ze) || h.startsWith(Q)) {
              const g = d[s++];
              if (y.push(h), g !== void 0) {
                const p = o.getAttribute(g.toLowerCase() + ze).split(Q), f = /([.?@])?(.*)/.exec(g);
                a.push({
                  type: 1,
                  index: i,
                  name: f[2],
                  strings: p,
                  ctor: f[1] === "." ? Zo : f[1] === "?" ? qo : f[1] === "@" ? Yo : pe
                });
              } else a.push({
                type: 6,
                index: i
              });
            }
            for (const h of y) o.removeAttribute(h);
          }
          if (to.test(o.tagName)) {
            const y = o.textContent.split(Q), h = y.length - 1;
            if (h > 0) {
              o.textContent = $t ? $t.emptyScript : "";
              for (let g = 0; g < h; g++) o.append(y[g], Wt()), ct.nextNode(), a.push({
                type: 2,
                index: ++i
              });
              o.append(y[h], Wt());
            }
          }
        } else if (o.nodeType === 8) if (o.data === Qr) a.push({
          type: 2,
          index: i
        });
        else {
          let y = -1;
          for (; (y = o.data.indexOf(Q, y + 1)) !== -1; ) a.push({
            type: 7,
            index: i
          }), y += Q.length - 1;
        }
        i++;
      }
    }
    static createElement(t, r) {
      const n = ut.createElement("template");
      return n.innerHTML = t, n;
    }
  }
  function Ct(e, t, r = e, n) {
    var o, i, s, l;
    if (t === mt) return t;
    let a = n !== void 0 ? (o = r._$Co) === null || o === void 0 ? void 0 : o[n] : r._$Cl;
    const c = kt(t) ? void 0 : t._$litDirective$;
    return (a == null ? void 0 : a.constructor) !== c && ((i = a == null ? void 0 : a._$AO) === null || i === void 0 || i.call(a, false), c === void 0 ? a = void 0 : (a = new c(e), a._$AT(e, r, n)), n !== void 0 ? ((s = (l = r)._$Co) !== null && s !== void 0 ? s : l._$Co = [])[n] = a : r._$Cl = a), a !== void 0 && (t = Ct(e, a._$AS(e, t.values), a, n)), t;
  }
  class Vo {
    constructor(t, r) {
      this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      var r;
      const { el: { content: n }, parts: o } = this._$AD, i = ((r = t == null ? void 0 : t.creationScope) !== null && r !== void 0 ? r : ut).importNode(n, true);
      ct.currentNode = i;
      let s = ct.nextNode(), l = 0, a = 0, c = o[0];
      for (; c !== void 0; ) {
        if (l === c.index) {
          let d;
          c.type === 2 ? d = new Kt(s, s.nextSibling, this, t) : c.type === 1 ? d = new c.ctor(s, c.name, c.strings, this, t) : c.type === 6 && (d = new Go(s, this, t)), this._$AV.push(d), c = o[++a];
        }
        l !== (c == null ? void 0 : c.index) && (s = ct.nextNode(), l++);
      }
      return ct.currentNode = ut, i;
    }
    v(t) {
      let r = 0;
      for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, r), r += n.strings.length - 2) : n._$AI(t[r])), r++;
    }
  }
  class Kt {
    constructor(t, r, n, o) {
      var i;
      this.type = 2, this._$AH = B, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = n, this.options = o, this._$Cp = (i = o == null ? void 0 : o.isConnected) === null || i === void 0 || i;
    }
    get _$AU() {
      var t, r;
      return (r = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && r !== void 0 ? r : this._$Cp;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const r = this._$AM;
      return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, r = this) {
      t = Ct(this, t, r), kt(t) ? t === B || t == null || t === "" ? (this._$AH !== B && this._$AR(), this._$AH = B) : t !== this._$AH && t !== mt && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : zo(t) ? this.T(t) : this._(t);
    }
    k(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
      this._$AH !== B && kt(this._$AH) ? this._$AA.nextSibling.data = t : this.$(ut.createTextNode(t)), this._$AH = t;
    }
    g(t) {
      var r;
      const { values: n, _$litType$: o } = t, i = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Ut.createElement(ro(o.h, o.h[0]), this.options)), o);
      if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === i) this._$AH.v(n);
      else {
        const s = new Vo(i, this), l = s.u(this.options);
        s.v(n), this.$(l), this._$AH = s;
      }
    }
    _$AC(t) {
      let r = Dr.get(t.strings);
      return r === void 0 && Dr.set(t.strings, r = new Ut(t)), r;
    }
    T(t) {
      Xr(this._$AH) || (this._$AH = [], this._$AR());
      const r = this._$AH;
      let n, o = 0;
      for (const i of t) o === r.length ? r.push(n = new Kt(this.k(Wt()), this.k(Wt()), this, this.options)) : n = r[o], n._$AI(i), o++;
      o < r.length && (this._$AR(n && n._$AB.nextSibling, o), r.length = o);
    }
    _$AR(t = this._$AA.nextSibling, r) {
      var n;
      for ((n = this._$AP) === null || n === void 0 || n.call(this, false, true, r); t && t !== this._$AB; ) {
        const o = t.nextSibling;
        t.remove(), t = o;
      }
    }
    setConnected(t) {
      var r;
      this._$AM === void 0 && (this._$Cp = t, (r = this._$AP) === null || r === void 0 || r.call(this, t));
    }
  }
  class pe {
    constructor(t, r, n, o, i) {
      this.type = 1, this._$AH = B, this._$AN = void 0, this.element = t, this.name = r, this._$AM = o, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = B;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t, r = this, n, o) {
      const i = this.strings;
      let s = false;
      if (i === void 0) t = Ct(this, t, r, 0), s = !kt(t) || t !== this._$AH && t !== mt, s && (this._$AH = t);
      else {
        const l = t;
        let a, c;
        for (t = i[0], a = 0; a < i.length - 1; a++) c = Ct(this, l[n + a], r, a), c === mt && (c = this._$AH[a]), s || (s = !kt(c) || c !== this._$AH[a]), c === B ? t = B : t !== B && (t += (c ?? "") + i[a + 1]), this._$AH[a] = c;
      }
      s && !o && this.j(t);
    }
    j(t) {
      t === B ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
  }
  class Zo extends pe {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t) {
      this.element[this.name] = t === B ? void 0 : t;
    }
  }
  const Ko = $t ? $t.emptyScript : "";
  class qo extends pe {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t) {
      t && t !== B ? this.element.setAttribute(this.name, Ko) : this.element.removeAttribute(this.name);
    }
  }
  class Yo extends pe {
    constructor(t, r, n, o, i) {
      super(t, r, n, o, i), this.type = 5;
    }
    _$AI(t, r = this) {
      var n;
      if ((t = (n = Ct(this, t, r, 0)) !== null && n !== void 0 ? n : B) === mt) return;
      const o = this._$AH, i = t === B && o !== B || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, s = t !== B && (o === B || i);
      i && this.element.removeEventListener(this.name, this, o), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
      var r, n;
      typeof this._$AH == "function" ? this._$AH.call((n = (r = this.options) === null || r === void 0 ? void 0 : r.host) !== null && n !== void 0 ? n : this.element, t) : this._$AH.handleEvent(t);
    }
  }
  class Go {
    constructor(t, r, n) {
      this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      Ct(this, t);
    }
  }
  const Lr = ie.litHtmlPolyfillSupport;
  Lr == null ? void 0 : Lr(Ut, Kt), ((Ee = ie.litHtmlVersions) !== null && Ee !== void 0 ? Ee : ie.litHtmlVersions = []).push("2.8.0");
  const Jo = (e, t, r) => {
    var n, o;
    const i = (n = r == null ? void 0 : r.renderBefore) !== null && n !== void 0 ? n : t;
    let s = i._$litPart$;
    if (s === void 0) {
      const l = (o = r == null ? void 0 : r.renderBefore) !== null && o !== void 0 ? o : null;
      i._$litPart$ = s = new Kt(t.insertBefore(Wt(), l), l, void 0, r ?? {});
    }
    return s._$AI(e), s;
  };
  var Oe, Ie;
  class E extends wt {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t, r;
      const n = super.createRenderRoot();
      return (t = (r = this.renderOptions).renderBefore) !== null && t !== void 0 || (r.renderBefore = n.firstChild), n;
    }
    update(t) {
      const r = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Jo(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t;
      super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(true);
    }
    disconnectedCallback() {
      var t;
      super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(false);
    }
    render() {
      return mt;
    }
  }
  E.finalized = true, E._$litElement$ = true, (Oe = globalThis.litElementHydrateSupport) === null || Oe === void 0 || Oe.call(globalThis, {
    LitElement: E
  });
  const Nr = globalThis.litElementPolyfillSupport;
  Nr == null ? void 0 : Nr({
    LitElement: E
  });
  ((Ie = globalThis.litElementVersions) !== null && Ie !== void 0 ? Ie : globalThis.litElementVersions = []).push("3.3.3");
  const I = (e) => (t) => typeof t == "function" ? ((r, n) => (customElements.define(r, n), n))(e, t) : ((r, n) => {
    const { kind: o, elements: i } = n;
    return {
      kind: o,
      elements: i,
      finisher(s) {
        customElements.define(r, s);
      }
    };
  })(e, t);
  const Qo = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? {
    ...t,
    finisher(r) {
      r.createProperty(t.key, e);
    }
  } : {
    kind: "field",
    key: Symbol(),
    placement: "own",
    descriptor: {},
    originalKey: t.key,
    initializer() {
      typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
    },
    finisher(r) {
      r.createProperty(t.key, e);
    }
  }, Xo = (e, t, r) => {
    t.constructor.createProperty(r, e);
  };
  function C(e) {
    return (t, r) => r !== void 0 ? Xo(e, t, r) : Qo(e, t);
  }
  function H(e) {
    return C({
      ...e,
      state: true
    });
  }
  var Pe;
  ((Pe = window.HTMLSlotElement) === null || Pe === void 0 ? void 0 : Pe.prototype.assignedElements) != null;
  const tn = {
    ATTRIBUTE: 1
  }, en = (e) => (...t) => ({
    _$litDirective$: e,
    values: t
  });
  class rn {
    constructor(t) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t, r, n) {
      this._$Ct = t, this._$AM = r, this._$Ci = n;
    }
    _$AS(t, r) {
      return this.update(t, r);
    }
    update(t, r) {
      return this.render(...r);
    }
  }
  const J = en(class extends rn {
    constructor(e) {
      var t;
      if (super(e), e.type !== tn.ATTRIBUTE || e.name !== "class" || ((t = e.strings) === null || t === void 0 ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(e) {
      return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
    }
    update(e, [t]) {
      var r, n;
      if (this.it === void 0) {
        this.it = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((i) => i !== "")));
        for (const i in t) t[i] && !(!((r = this.nt) === null || r === void 0) && r.has(i)) && this.it.add(i);
        return this.render(t);
      }
      const o = e.element.classList;
      this.it.forEach((i) => {
        i in t || (o.remove(i), this.it.delete(i));
      });
      for (const i in t) {
        const s = !!t[i];
        s === this.it.has(i) || !((n = this.nt) === null || n === void 0) && n.has(i) || (s ? (o.add(i), this.it.add(i)) : (o.remove(i), this.it.delete(i)));
      }
      return mt;
    }
  });
  function on(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  const oo = (e, t, r) => Math.min(Math.max(r, e), t), V = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
  }, se = (e) => typeof e == "number", bt = (e) => Array.isArray(e) && !se(e[0]), nn = (e, t, r) => {
    const n = t - e;
    return ((r - e) % n + n) % n + e;
  };
  function sn(e, t) {
    return bt(e) ? e[nn(0, e.length, t)] : e;
  }
  const no = (e, t, r) => -r * e + r * t + e, io = () => {
  }, et = (e) => e, fr = (e, t, r) => t - e === 0 ? 1 : (r - e) / (t - e);
  function so(e, t) {
    const r = e[e.length - 1];
    for (let n = 1; n <= t; n++) {
      const o = fr(0, t, n);
      e.push(no(r, 1, o));
    }
  }
  function ln(e) {
    const t = [
      0
    ];
    return so(t, e - 1), t;
  }
  function an(e, t = ln(e.length), r = et) {
    const n = e.length, o = n - t.length;
    return o > 0 && so(t, o), (i) => {
      let s = 0;
      for (; s < n - 2 && !(i < t[s + 1]); s++) ;
      let l = oo(0, 1, fr(t[s], t[s + 1], i));
      return l = sn(r, s)(l), no(e[s], e[s + 1], l);
    };
  }
  const lo = (e) => Array.isArray(e) && se(e[0]), Fe = (e) => typeof e == "object" && !!e.createAnimation, _t = (e) => typeof e == "function", cn = (e) => typeof e == "string", Nt = {
    ms: (e) => e * 1e3,
    s: (e) => e / 1e3
  }, ao = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, dn = 1e-7, hn = 12;
  function un(e, t, r, n, o) {
    let i, s, l = 0;
    do
      s = t + (r - t) / 2, i = ao(s, n, o) - e, i > 0 ? r = s : t = s;
    while (Math.abs(i) > dn && ++l < hn);
    return s;
  }
  function Lt(e, t, r, n) {
    if (e === t && r === n) return et;
    const o = (i) => un(i, 0, 1, e, r);
    return (i) => i === 0 || i === 1 ? i : ao(o(i), t, n);
  }
  const mn = (e, t = "end") => (r) => {
    r = t === "end" ? Math.min(r, 0.999) : Math.max(r, 1e-3);
    const n = r * e, o = t === "end" ? Math.floor(n) : Math.ceil(n);
    return oo(0, 1, o / e);
  }, fn = {
    ease: Lt(0.25, 0.1, 0.25, 1),
    "ease-in": Lt(0.42, 0, 1, 1),
    "ease-in-out": Lt(0.42, 0, 0.58, 1),
    "ease-out": Lt(0, 0, 0.58, 1)
  }, gn = /\((.*?)\)/;
  function Br(e) {
    if (_t(e)) return e;
    if (lo(e)) return Lt(...e);
    const t = fn[e];
    if (t) return t;
    if (e.startsWith("steps")) {
      const r = gn.exec(e);
      if (r) {
        const n = r[1].split(",");
        return mn(parseFloat(n[0]), n[1].trim());
      }
    }
    return et;
  }
  class co {
    constructor(t, r = [
      0,
      1
    ], { easing: n, duration: o = V.duration, delay: i = V.delay, endDelay: s = V.endDelay, repeat: l = V.repeat, offset: a, direction: c = "normal", autoplay: d = true } = {}) {
      if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = et, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((h, g) => {
        this.resolve = h, this.reject = g;
      }), n = n || V.easing, Fe(n)) {
        const h = n.createAnimation(r);
        n = h.easing, r = h.keyframes || r, o = h.duration || o;
      }
      this.repeat = l, this.easing = bt(n) ? et : Br(n), this.updateDuration(o);
      const y = an(r, a, bt(n) ? n.map(Br) : et);
      this.tick = (h) => {
        var g;
        i = i;
        let p = 0;
        this.pauseTime !== void 0 ? p = this.pauseTime : p = (h - this.startTime) * this.rate, this.t = p, p /= 1e3, p = Math.max(p - i, 0), this.playState === "finished" && this.pauseTime === void 0 && (p = this.totalDuration);
        const f = p / this.duration;
        let O = Math.floor(f), m = f % 1;
        !m && f >= 1 && (m = 1), m === 1 && O--;
        const b = O % 2;
        (c === "reverse" || c === "alternate" && b || c === "alternate-reverse" && !b) && (m = 1 - m);
        const w = p >= this.totalDuration ? 1 : Math.min(m, 1), v = y(this.easing(w));
        t(v), this.pauseTime === void 0 && (this.playState === "finished" || p >= this.totalDuration + s) ? (this.playState = "finished", (g = this.resolve) === null || g === void 0 || g.call(this, v)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
      }, d && this.play();
    }
    play() {
      const t = performance.now();
      this.playState = "running", this.pauseTime !== void 0 ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
      this.playState = "paused", this.pauseTime = this.t;
    }
    finish() {
      this.playState = "finished", this.tick(0);
    }
    stop() {
      var t;
      this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (t = this.reject) === null || t === void 0 || t.call(this, false);
    }
    cancel() {
      this.stop(), this.tick(this.cancelTimestamp);
    }
    reverse() {
      this.rate *= -1;
    }
    commitStyles() {
    }
    updateDuration(t) {
      this.duration = t, this.totalDuration = t * (this.repeat + 1);
    }
    get currentTime() {
      return this.t;
    }
    set currentTime(t) {
      this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate;
    }
    get playbackRate() {
      return this.rate;
    }
    set playbackRate(t) {
      this.rate = t;
    }
  }
  class pn {
    setAnimation(t) {
      this.animation = t, t == null ? void 0 : t.finished.then(() => this.clearAnimation()).catch(() => {
      });
    }
    clearAnimation() {
      this.animation = this.generator = void 0;
    }
  }
  const Te = /* @__PURE__ */ new WeakMap();
  function ho(e) {
    return Te.has(e) || Te.set(e, {
      transforms: [],
      values: /* @__PURE__ */ new Map()
    }), Te.get(e);
  }
  function wn(e, t) {
    return e.has(t) || e.set(t, new pn()), e.get(t);
  }
  const vn = [
    "",
    "X",
    "Y",
    "Z"
  ], bn = [
    "translate",
    "scale",
    "rotate",
    "skew"
  ], le = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
  }, Wr = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg"
  }, yn = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px"
    },
    rotate: Wr,
    scale: {
      syntax: "<number>",
      initialValue: 1,
      toDefaultUnit: et
    },
    skew: Wr
  }, jt = /* @__PURE__ */ new Map(), gr = (e) => `--motion-${e}`, ae = [
    "x",
    "y",
    "z"
  ];
  bn.forEach((e) => {
    vn.forEach((t) => {
      ae.push(e + t), jt.set(gr(e + t), yn[e]);
    });
  });
  const xn = (e, t) => ae.indexOf(e) - ae.indexOf(t), $n = new Set(ae), uo = (e) => $n.has(e), Cn = (e, t) => {
    le[t] && (t = le[t]);
    const { transforms: r } = ho(e);
    on(r, t), e.style.transform = _n(r);
  }, _n = (e) => e.sort(xn).reduce(En, "").trim(), En = (e, t) => `${e} ${t}(var(${gr(t)}))`, Ve = (e) => e.startsWith("--"), kr = /* @__PURE__ */ new Set();
  function An(e) {
    if (!kr.has(e)) {
      kr.add(e);
      try {
        const { syntax: t, initialValue: r } = jt.has(e) ? jt.get(e) : {};
        CSS.registerProperty({
          name: e,
          inherits: false,
          syntax: t,
          initialValue: r
        });
      } catch {
      }
    }
  }
  const Me = (e, t) => document.createElement("div").animate(e, t), Ur = {
    cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Me({
          opacity: [
            1
          ]
        });
      } catch {
        return false;
      }
      return true;
    },
    finished: () => !!Me({
      opacity: [
        0,
        1
      ]
    }, {
      duration: 1e-3
    }).finished,
    linearEasing: () => {
      try {
        Me({
          opacity: 0
        }, {
          easing: "linear(0, 1)"
        });
      } catch {
        return false;
      }
      return true;
    }
  }, Se = {}, vt = {};
  for (const e in Ur) vt[e] = () => (Se[e] === void 0 && (Se[e] = Ur[e]()), Se[e]);
  const On = 0.015, In = (e, t) => {
    let r = "";
    const n = Math.round(t / On);
    for (let o = 0; o < n; o++) r += e(fr(0, n - 1, o)) + ", ";
    return r.substring(0, r.length - 2);
  }, jr = (e, t) => _t(e) ? vt.linearEasing() ? `linear(${In(e, t)})` : V.easing : lo(e) ? Pn(e) : e, Pn = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`;
  function Tn(e, t) {
    for (let r = 0; r < e.length; r++) e[r] === null && (e[r] = r ? e[r - 1] : t());
    return e;
  }
  const Mn = (e) => Array.isArray(e) ? e : [
    e
  ];
  function Ze(e) {
    return le[e] && (e = le[e]), uo(e) ? gr(e) : e;
  }
  const Xt = {
    get: (e, t) => {
      t = Ze(t);
      let r = Ve(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
      if (!r && r !== 0) {
        const n = jt.get(t);
        n && (r = n.initialValue);
      }
      return r;
    },
    set: (e, t, r) => {
      t = Ze(t), Ve(t) ? e.style.setProperty(t, r) : e.style[t] = r;
    }
  };
  function mo(e, t = true) {
    if (!(!e || e.playState === "finished")) try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {
    }
  }
  function Sn(e, t) {
    var r;
    let n = (t == null ? void 0 : t.toDefaultUnit) || et;
    const o = e[e.length - 1];
    if (cn(o)) {
      const i = ((r = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0 ? void 0 : r[2]) || "";
      i && (n = (s) => s + i);
    }
    return n;
  }
  function Rn() {
    return window.__MOTION_DEV_TOOLS_RECORD;
  }
  function Dn(e, t, r, n = {}, o) {
    const i = Rn(), s = n.record !== false && i;
    let l, { duration: a = V.duration, delay: c = V.delay, endDelay: d = V.endDelay, repeat: y = V.repeat, easing: h = V.easing, persist: g = false, direction: p, offset: f, allowWebkitAcceleration: O = false, autoplay: m = true } = n;
    const b = ho(e), w = uo(t);
    let v = vt.waapi();
    w && Cn(e, t);
    const _ = Ze(t), S = wn(b.values, _), R = jt.get(_);
    return mo(S.animation, !(Fe(h) && S.generator) && n.record !== false), () => {
      const k = () => {
        var D, Y;
        return (Y = (D = Xt.get(e, _)) !== null && D !== void 0 ? D : R == null ? void 0 : R.initialValue) !== null && Y !== void 0 ? Y : 0;
      };
      let M = Tn(Mn(r), k);
      const z = Sn(M, R);
      if (Fe(h)) {
        const D = h.createAnimation(M, t !== "opacity", k, _, S);
        h = D.easing, M = D.keyframes || M, a = D.duration || a;
      }
      if (Ve(_) && (vt.cssRegisterProperty() ? An(_) : v = false), w && !vt.linearEasing() && (_t(h) || bt(h) && h.some(_t)) && (v = false), v) {
        R && (M = M.map((W) => se(W) ? R.toDefaultUnit(W) : W)), M.length === 1 && (!vt.partialKeyframes() || s) && M.unshift(k());
        const D = {
          delay: Nt.ms(c),
          duration: Nt.ms(a),
          endDelay: Nt.ms(d),
          easing: bt(h) ? void 0 : jr(h, a),
          direction: p,
          iterations: y + 1,
          fill: "both"
        };
        l = e.animate({
          [_]: M,
          offset: f,
          easing: bt(h) ? h.map((W) => jr(W, a)) : void 0
        }, D), l.finished || (l.finished = new Promise((W, No) => {
          l.onfinish = W, l.oncancel = No;
        }));
        const Y = M[M.length - 1];
        l.finished.then(() => {
          g || (Xt.set(e, _, Y), l.cancel());
        }).catch(io), O || (l.playbackRate = 1.000001);
      } else if (o && w) M = M.map((D) => typeof D == "string" ? parseFloat(D) : D), M.length === 1 && M.unshift(parseFloat(k())), l = new o((D) => {
        Xt.set(e, _, z ? z(D) : D);
      }, M, Object.assign(Object.assign({}, n), {
        duration: a,
        easing: h
      }));
      else {
        const D = M[M.length - 1];
        Xt.set(e, _, R && se(D) ? R.toDefaultUnit(D) : D);
      }
      return s && i(e, t, M, {
        duration: a,
        delay: c,
        easing: h,
        repeat: y,
        offset: f
      }, "motion-one"), S.setAnimation(l), l && !m && l.pause(), l;
    };
  }
  const Ln = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
  function Nn(e, t) {
    return typeof e == "string" ? e = document.querySelectorAll(e) : e instanceof Element && (e = [
      e
    ]), Array.from(e || []);
  }
  const Bn = (e) => e(), fo = (e, t, r = V.duration) => new Proxy({
    animations: e.map(Bn).filter(Boolean),
    duration: r,
    options: t
  }, kn), Wn = (e) => e.animations[0], kn = {
    get: (e, t) => {
      const r = Wn(e);
      switch (t) {
        case "duration":
          return e.duration;
        case "currentTime":
          return Nt.s((r == null ? void 0 : r[t]) || 0);
        case "playbackRate":
        case "playState":
          return r == null ? void 0 : r[t];
        case "finished":
          return e.finished || (e.finished = Promise.all(e.animations.map(Un)).catch(io)), e.finished;
        case "stop":
          return () => {
            e.animations.forEach((n) => mo(n));
          };
        case "forEachNative":
          return (n) => {
            e.animations.forEach((o) => n(o, e));
          };
        default:
          return typeof (r == null ? void 0 : r[t]) > "u" ? void 0 : () => e.animations.forEach((n) => n[t]());
      }
    },
    set: (e, t, r) => {
      switch (t) {
        case "currentTime":
          r = Nt.ms(r);
        case "playbackRate":
          for (let n = 0; n < e.animations.length; n++) e.animations[n][t] = r;
          return true;
      }
      return false;
    }
  }, Un = (e) => e.finished;
  function jn(e, t, r) {
    return _t(e) ? e(t, r) : e;
  }
  function Hn(e) {
    return function(r, n, o = {}) {
      r = Nn(r);
      const i = r.length, s = [];
      for (let l = 0; l < i; l++) {
        const a = r[l];
        for (const c in n) {
          const d = Ln(o, c);
          d.delay = jn(d.delay, l, i);
          const y = Dn(a, c, n[c], d, e);
          s.push(y);
        }
      }
      return fo(s, o, o.duration);
    };
  }
  const zn = Hn(co);
  function Fn(e, t = {}) {
    return fo([
      () => {
        const r = new co(e, [
          0,
          1
        ], t);
        return r.finished.catch(() => {
        }), r;
      }
    ], t, t.duration);
  }
  function dt(e, t, r) {
    return (_t(e) ? Fn : zn)(e, t, r);
  }
  const U = (e) => e ?? B;
  var qt = {}, Vn = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }, go = {}, F = {};
  let pr;
  const Zn = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  F.getSymbolSize = function(t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return t * 4 + 17;
  };
  F.getSymbolTotalCodewords = function(t) {
    return Zn[t];
  };
  F.getBCHDigit = function(e) {
    let t = 0;
    for (; e !== 0; ) t++, e >>>= 1;
    return t;
  };
  F.setToSJISFunction = function(t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    pr = t;
  };
  F.isKanjiModeEnabled = function() {
    return typeof pr < "u";
  };
  F.toSJIS = function(t) {
    return pr(t);
  };
  var we = {};
  (function(e) {
    e.L = {
      bit: 1
    }, e.M = {
      bit: 0
    }, e.Q = {
      bit: 3
    }, e.H = {
      bit: 2
    };
    function t(r) {
      if (typeof r != "string") throw new Error("Param is not a string");
      switch (r.toLowerCase()) {
        case "l":
        case "low":
          return e.L;
        case "m":
        case "medium":
          return e.M;
        case "q":
        case "quartile":
          return e.Q;
        case "h":
        case "high":
          return e.H;
        default:
          throw new Error("Unknown EC Level: " + r);
      }
    }
    e.isValid = function(n) {
      return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
    }, e.from = function(n, o) {
      if (e.isValid(n)) return n;
      try {
        return t(n);
      } catch {
        return o;
      }
    };
  })(we);
  function po() {
    this.buffer = [], this.length = 0;
  }
  po.prototype = {
    get: function(e) {
      const t = Math.floor(e / 8);
      return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
    },
    put: function(e, t) {
      for (let r = 0; r < t; r++) this.putBit((e >>> t - r - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(e) {
      const t = Math.floor(this.length / 8);
      this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
    }
  };
  var Kn = po;
  function Yt(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  Yt.prototype.set = function(e, t, r, n) {
    const o = e * this.size + t;
    this.data[o] = r, n && (this.reservedBit[o] = true);
  };
  Yt.prototype.get = function(e, t) {
    return this.data[e * this.size + t];
  };
  Yt.prototype.xor = function(e, t, r) {
    this.data[e * this.size + t] ^= r;
  };
  Yt.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t];
  };
  var qn = Yt, wo = {};
  (function(e) {
    const t = F.getSymbolSize;
    e.getRowColCoords = function(n) {
      if (n === 1) return [];
      const o = Math.floor(n / 7) + 2, i = t(n), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, l = [
        i - 7
      ];
      for (let a = 1; a < o - 1; a++) l[a] = l[a - 1] - s;
      return l.push(6), l.reverse();
    }, e.getPositions = function(n) {
      const o = [], i = e.getRowColCoords(n), s = i.length;
      for (let l = 0; l < s; l++) for (let a = 0; a < s; a++) l === 0 && a === 0 || l === 0 && a === s - 1 || l === s - 1 && a === 0 || o.push([
        i[l],
        i[a]
      ]);
      return o;
    };
  })(wo);
  var vo = {};
  const Yn = F.getSymbolSize, Hr = 7;
  vo.getPositions = function(t) {
    const r = Yn(t);
    return [
      [
        0,
        0
      ],
      [
        r - Hr,
        0
      ],
      [
        0,
        r - Hr
      ]
    ];
  };
  var bo = {};
  (function(e) {
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const t = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    e.isValid = function(o) {
      return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
    }, e.from = function(o) {
      return e.isValid(o) ? parseInt(o, 10) : void 0;
    }, e.getPenaltyN1 = function(o) {
      const i = o.size;
      let s = 0, l = 0, a = 0, c = null, d = null;
      for (let y = 0; y < i; y++) {
        l = a = 0, c = d = null;
        for (let h = 0; h < i; h++) {
          let g = o.get(y, h);
          g === c ? l++ : (l >= 5 && (s += t.N1 + (l - 5)), c = g, l = 1), g = o.get(h, y), g === d ? a++ : (a >= 5 && (s += t.N1 + (a - 5)), d = g, a = 1);
        }
        l >= 5 && (s += t.N1 + (l - 5)), a >= 5 && (s += t.N1 + (a - 5));
      }
      return s;
    }, e.getPenaltyN2 = function(o) {
      const i = o.size;
      let s = 0;
      for (let l = 0; l < i - 1; l++) for (let a = 0; a < i - 1; a++) {
        const c = o.get(l, a) + o.get(l, a + 1) + o.get(l + 1, a) + o.get(l + 1, a + 1);
        (c === 4 || c === 0) && s++;
      }
      return s * t.N2;
    }, e.getPenaltyN3 = function(o) {
      const i = o.size;
      let s = 0, l = 0, a = 0;
      for (let c = 0; c < i; c++) {
        l = a = 0;
        for (let d = 0; d < i; d++) l = l << 1 & 2047 | o.get(c, d), d >= 10 && (l === 1488 || l === 93) && s++, a = a << 1 & 2047 | o.get(d, c), d >= 10 && (a === 1488 || a === 93) && s++;
      }
      return s * t.N3;
    }, e.getPenaltyN4 = function(o) {
      let i = 0;
      const s = o.data.length;
      for (let a = 0; a < s; a++) i += o.data[a];
      return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * t.N4;
    };
    function r(n, o, i) {
      switch (n) {
        case e.Patterns.PATTERN000:
          return (o + i) % 2 === 0;
        case e.Patterns.PATTERN001:
          return o % 2 === 0;
        case e.Patterns.PATTERN010:
          return i % 3 === 0;
        case e.Patterns.PATTERN011:
          return (o + i) % 3 === 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
        case e.Patterns.PATTERN101:
          return o * i % 2 + o * i % 3 === 0;
        case e.Patterns.PATTERN110:
          return (o * i % 2 + o * i % 3) % 2 === 0;
        case e.Patterns.PATTERN111:
          return (o * i % 3 + (o + i) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + n);
      }
    }
    e.applyMask = function(o, i) {
      const s = i.size;
      for (let l = 0; l < s; l++) for (let a = 0; a < s; a++) i.isReserved(a, l) || i.xor(a, l, r(o, a, l));
    }, e.getBestMask = function(o, i) {
      const s = Object.keys(e.Patterns).length;
      let l = 0, a = 1 / 0;
      for (let c = 0; c < s; c++) {
        i(c), e.applyMask(c, o);
        const d = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
        e.applyMask(c, o), d < a && (a = d, l = c);
      }
      return l;
    };
  })(bo);
  var ve = {};
  const tt = we, te = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ], ee = [
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  ve.getBlocksCount = function(t, r) {
    switch (r) {
      case tt.L:
        return te[(t - 1) * 4 + 0];
      case tt.M:
        return te[(t - 1) * 4 + 1];
      case tt.Q:
        return te[(t - 1) * 4 + 2];
      case tt.H:
        return te[(t - 1) * 4 + 3];
      default:
        return;
    }
  };
  ve.getTotalCodewordsCount = function(t, r) {
    switch (r) {
      case tt.L:
        return ee[(t - 1) * 4 + 0];
      case tt.M:
        return ee[(t - 1) * 4 + 1];
      case tt.Q:
        return ee[(t - 1) * 4 + 2];
      case tt.H:
        return ee[(t - 1) * 4 + 3];
      default:
        return;
    }
  };
  var yo = {}, be = {};
  const Bt = new Uint8Array(512), ce = new Uint8Array(256);
  (function() {
    let t = 1;
    for (let r = 0; r < 255; r++) Bt[r] = t, ce[t] = r, t <<= 1, t & 256 && (t ^= 285);
    for (let r = 255; r < 512; r++) Bt[r] = Bt[r - 255];
  })();
  be.log = function(t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return ce[t];
  };
  be.exp = function(t) {
    return Bt[t];
  };
  be.mul = function(t, r) {
    return t === 0 || r === 0 ? 0 : Bt[ce[t] + ce[r]];
  };
  (function(e) {
    const t = be;
    e.mul = function(n, o) {
      const i = new Uint8Array(n.length + o.length - 1);
      for (let s = 0; s < n.length; s++) for (let l = 0; l < o.length; l++) i[s + l] ^= t.mul(n[s], o[l]);
      return i;
    }, e.mod = function(n, o) {
      let i = new Uint8Array(n);
      for (; i.length - o.length >= 0; ) {
        const s = i[0];
        for (let a = 0; a < o.length; a++) i[a] ^= t.mul(o[a], s);
        let l = 0;
        for (; l < i.length && i[l] === 0; ) l++;
        i = i.slice(l);
      }
      return i;
    }, e.generateECPolynomial = function(n) {
      let o = new Uint8Array([
        1
      ]);
      for (let i = 0; i < n; i++) o = e.mul(o, new Uint8Array([
        1,
        t.exp(i)
      ]));
      return o;
    };
  })(yo);
  const xo = yo;
  function wr(e) {
    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
  }
  wr.prototype.initialize = function(t) {
    this.degree = t, this.genPoly = xo.generateECPolynomial(this.degree);
  };
  wr.prototype.encode = function(t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const r = new Uint8Array(t.length + this.degree);
    r.set(t);
    const n = xo.mod(r, this.genPoly), o = this.degree - n.length;
    if (o > 0) {
      const i = new Uint8Array(this.degree);
      return i.set(n, o), i;
    }
    return n;
  };
  var Gn = wr, $o = {}, st = {}, vr = {};
  vr.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40;
  };
  var q = {};
  const Co = "[0-9]+", Jn = "[A-Z $%*+\\-./:]+";
  let Ht = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  Ht = Ht.replace(/u/g, "\\u");
  const Qn = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ht + `)(?:.|[\r
]))+`;
  q.KANJI = new RegExp(Ht, "g");
  q.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  q.BYTE = new RegExp(Qn, "g");
  q.NUMERIC = new RegExp(Co, "g");
  q.ALPHANUMERIC = new RegExp(Jn, "g");
  const Xn = new RegExp("^" + Ht + "$"), ti = new RegExp("^" + Co + "$"), ei = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  q.testKanji = function(t) {
    return Xn.test(t);
  };
  q.testNumeric = function(t) {
    return ti.test(t);
  };
  q.testAlphanumeric = function(t) {
    return ei.test(t);
  };
  (function(e) {
    const t = vr, r = q;
    e.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [
        10,
        12,
        14
      ]
    }, e.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [
        9,
        11,
        13
      ]
    }, e.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [
        8,
        16,
        16
      ]
    }, e.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [
        8,
        10,
        12
      ]
    }, e.MIXED = {
      bit: -1
    }, e.getCharCountIndicator = function(i, s) {
      if (!i.ccBits) throw new Error("Invalid mode: " + i);
      if (!t.isValid(s)) throw new Error("Invalid version: " + s);
      return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
    }, e.getBestModeForData = function(i) {
      return r.testNumeric(i) ? e.NUMERIC : r.testAlphanumeric(i) ? e.ALPHANUMERIC : r.testKanji(i) ? e.KANJI : e.BYTE;
    }, e.toString = function(i) {
      if (i && i.id) return i.id;
      throw new Error("Invalid mode");
    }, e.isValid = function(i) {
      return i && i.bit && i.ccBits;
    };
    function n(o) {
      if (typeof o != "string") throw new Error("Param is not a string");
      switch (o.toLowerCase()) {
        case "numeric":
          return e.NUMERIC;
        case "alphanumeric":
          return e.ALPHANUMERIC;
        case "kanji":
          return e.KANJI;
        case "byte":
          return e.BYTE;
        default:
          throw new Error("Unknown mode: " + o);
      }
    }
    e.from = function(i, s) {
      if (e.isValid(i)) return i;
      try {
        return n(i);
      } catch {
        return s;
      }
    };
  })(st);
  (function(e) {
    const t = F, r = ve, n = we, o = st, i = vr, s = 7973, l = t.getBCHDigit(s);
    function a(h, g, p) {
      for (let f = 1; f <= 40; f++) if (g <= e.getCapacity(f, p, h)) return f;
    }
    function c(h, g) {
      return o.getCharCountIndicator(h, g) + 4;
    }
    function d(h, g) {
      let p = 0;
      return h.forEach(function(f) {
        const O = c(f.mode, g);
        p += O + f.getBitsLength();
      }), p;
    }
    function y(h, g) {
      for (let p = 1; p <= 40; p++) if (d(h, p) <= e.getCapacity(p, g, o.MIXED)) return p;
    }
    e.from = function(g, p) {
      return i.isValid(g) ? parseInt(g, 10) : p;
    }, e.getCapacity = function(g, p, f) {
      if (!i.isValid(g)) throw new Error("Invalid QR Code version");
      typeof f > "u" && (f = o.BYTE);
      const O = t.getSymbolTotalCodewords(g), m = r.getTotalCodewordsCount(g, p), b = (O - m) * 8;
      if (f === o.MIXED) return b;
      const w = b - c(f, g);
      switch (f) {
        case o.NUMERIC:
          return Math.floor(w / 10 * 3);
        case o.ALPHANUMERIC:
          return Math.floor(w / 11 * 2);
        case o.KANJI:
          return Math.floor(w / 13);
        case o.BYTE:
        default:
          return Math.floor(w / 8);
      }
    }, e.getBestVersionForData = function(g, p) {
      let f;
      const O = n.from(p, n.M);
      if (Array.isArray(g)) {
        if (g.length > 1) return y(g, O);
        if (g.length === 0) return 1;
        f = g[0];
      } else f = g;
      return a(f.mode, f.getLength(), O);
    }, e.getEncodedBits = function(g) {
      if (!i.isValid(g) || g < 7) throw new Error("Invalid QR Code version");
      let p = g << 12;
      for (; t.getBCHDigit(p) - l >= 0; ) p ^= s << t.getBCHDigit(p) - l;
      return g << 12 | p;
    };
  })($o);
  var _o = {};
  const Ke = F, Eo = 1335, ri = 21522, zr = Ke.getBCHDigit(Eo);
  _o.getEncodedBits = function(t, r) {
    const n = t.bit << 3 | r;
    let o = n << 10;
    for (; Ke.getBCHDigit(o) - zr >= 0; ) o ^= Eo << Ke.getBCHDigit(o) - zr;
    return (n << 10 | o) ^ ri;
  };
  var Ao = {};
  const oi = st;
  function Et(e) {
    this.mode = oi.NUMERIC, this.data = e.toString();
  }
  Et.getBitsLength = function(t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
  };
  Et.prototype.getLength = function() {
    return this.data.length;
  };
  Et.prototype.getBitsLength = function() {
    return Et.getBitsLength(this.data.length);
  };
  Et.prototype.write = function(t) {
    let r, n, o;
    for (r = 0; r + 3 <= this.data.length; r += 3) n = this.data.substr(r, 3), o = parseInt(n, 10), t.put(o, 10);
    const i = this.data.length - r;
    i > 0 && (n = this.data.substr(r), o = parseInt(n, 10), t.put(o, i * 3 + 1));
  };
  var ni = Et;
  const ii = st, Re = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function At(e) {
    this.mode = ii.ALPHANUMERIC, this.data = e;
  }
  At.getBitsLength = function(t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2);
  };
  At.prototype.getLength = function() {
    return this.data.length;
  };
  At.prototype.getBitsLength = function() {
    return At.getBitsLength(this.data.length);
  };
  At.prototype.write = function(t) {
    let r;
    for (r = 0; r + 2 <= this.data.length; r += 2) {
      let n = Re.indexOf(this.data[r]) * 45;
      n += Re.indexOf(this.data[r + 1]), t.put(n, 11);
    }
    this.data.length % 2 && t.put(Re.indexOf(this.data[r]), 6);
  };
  var si = At, li = function(t) {
    for (var r = [], n = t.length, o = 0; o < n; o++) {
      var i = t.charCodeAt(o);
      if (i >= 55296 && i <= 56319 && n > o + 1) {
        var s = t.charCodeAt(o + 1);
        s >= 56320 && s <= 57343 && (i = (i - 55296) * 1024 + s - 56320 + 65536, o += 1);
      }
      if (i < 128) {
        r.push(i);
        continue;
      }
      if (i < 2048) {
        r.push(i >> 6 | 192), r.push(i & 63 | 128);
        continue;
      }
      if (i < 55296 || i >= 57344 && i < 65536) {
        r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
        continue;
      }
      if (i >= 65536 && i <= 1114111) {
        r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
        continue;
      }
      r.push(239, 191, 189);
    }
    return new Uint8Array(r).buffer;
  };
  const ai = li, ci = st;
  function Ot(e) {
    this.mode = ci.BYTE, typeof e == "string" && (e = ai(e)), this.data = new Uint8Array(e);
  }
  Ot.getBitsLength = function(t) {
    return t * 8;
  };
  Ot.prototype.getLength = function() {
    return this.data.length;
  };
  Ot.prototype.getBitsLength = function() {
    return Ot.getBitsLength(this.data.length);
  };
  Ot.prototype.write = function(e) {
    for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8);
  };
  var di = Ot;
  const hi = st, ui = F;
  function It(e) {
    this.mode = hi.KANJI, this.data = e;
  }
  It.getBitsLength = function(t) {
    return t * 13;
  };
  It.prototype.getLength = function() {
    return this.data.length;
  };
  It.prototype.getBitsLength = function() {
    return It.getBitsLength(this.data.length);
  };
  It.prototype.write = function(e) {
    let t;
    for (t = 0; t < this.data.length; t++) {
      let r = ui.toSJIS(this.data[t]);
      if (r >= 33088 && r <= 40956) r -= 33088;
      else if (r >= 57408 && r <= 60351) r -= 49472;
      else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
      r = (r >>> 8 & 255) * 192 + (r & 255), e.put(r, 13);
    }
  };
  var mi = It;
  (function(e) {
    const t = st, r = ni, n = si, o = di, i = mi, s = q, l = F, a = Wo;
    function c(m) {
      return unescape(encodeURIComponent(m)).length;
    }
    function d(m, b, w) {
      const v = [];
      let _;
      for (; (_ = m.exec(w)) !== null; ) v.push({
        data: _[0],
        index: _.index,
        mode: b,
        length: _[0].length
      });
      return v;
    }
    function y(m) {
      const b = d(s.NUMERIC, t.NUMERIC, m), w = d(s.ALPHANUMERIC, t.ALPHANUMERIC, m);
      let v, _;
      return l.isKanjiModeEnabled() ? (v = d(s.BYTE, t.BYTE, m), _ = d(s.KANJI, t.KANJI, m)) : (v = d(s.BYTE_KANJI, t.BYTE, m), _ = []), b.concat(w, v, _).sort(function(R, k) {
        return R.index - k.index;
      }).map(function(R) {
        return {
          data: R.data,
          mode: R.mode,
          length: R.length
        };
      });
    }
    function h(m, b) {
      switch (b) {
        case t.NUMERIC:
          return r.getBitsLength(m);
        case t.ALPHANUMERIC:
          return n.getBitsLength(m);
        case t.KANJI:
          return i.getBitsLength(m);
        case t.BYTE:
          return o.getBitsLength(m);
      }
    }
    function g(m) {
      return m.reduce(function(b, w) {
        const v = b.length - 1 >= 0 ? b[b.length - 1] : null;
        return v && v.mode === w.mode ? (b[b.length - 1].data += w.data, b) : (b.push(w), b);
      }, []);
    }
    function p(m) {
      const b = [];
      for (let w = 0; w < m.length; w++) {
        const v = m[w];
        switch (v.mode) {
          case t.NUMERIC:
            b.push([
              v,
              {
                data: v.data,
                mode: t.ALPHANUMERIC,
                length: v.length
              },
              {
                data: v.data,
                mode: t.BYTE,
                length: v.length
              }
            ]);
            break;
          case t.ALPHANUMERIC:
            b.push([
              v,
              {
                data: v.data,
                mode: t.BYTE,
                length: v.length
              }
            ]);
            break;
          case t.KANJI:
            b.push([
              v,
              {
                data: v.data,
                mode: t.BYTE,
                length: c(v.data)
              }
            ]);
            break;
          case t.BYTE:
            b.push([
              {
                data: v.data,
                mode: t.BYTE,
                length: c(v.data)
              }
            ]);
        }
      }
      return b;
    }
    function f(m, b) {
      const w = {}, v = {
        start: {}
      };
      let _ = [
        "start"
      ];
      for (let S = 0; S < m.length; S++) {
        const R = m[S], k = [];
        for (let M = 0; M < R.length; M++) {
          const z = R[M], D = "" + S + M;
          k.push(D), w[D] = {
            node: z,
            lastCount: 0
          }, v[D] = {};
          for (let Y = 0; Y < _.length; Y++) {
            const W = _[Y];
            w[W] && w[W].node.mode === z.mode ? (v[W][D] = h(w[W].lastCount + z.length, z.mode) - h(w[W].lastCount, z.mode), w[W].lastCount += z.length) : (w[W] && (w[W].lastCount = z.length), v[W][D] = h(z.length, z.mode) + 4 + t.getCharCountIndicator(z.mode, b));
          }
        }
        _ = k;
      }
      for (let S = 0; S < _.length; S++) v[_[S]].end = 0;
      return {
        map: v,
        table: w
      };
    }
    function O(m, b) {
      let w;
      const v = t.getBestModeForData(m);
      if (w = t.from(b, v), w !== t.BYTE && w.bit < v.bit) throw new Error('"' + m + '" cannot be encoded with mode ' + t.toString(w) + `.
 Suggested mode is: ` + t.toString(v));
      switch (w === t.KANJI && !l.isKanjiModeEnabled() && (w = t.BYTE), w) {
        case t.NUMERIC:
          return new r(m);
        case t.ALPHANUMERIC:
          return new n(m);
        case t.KANJI:
          return new i(m);
        case t.BYTE:
          return new o(m);
      }
    }
    e.fromArray = function(b) {
      return b.reduce(function(w, v) {
        return typeof v == "string" ? w.push(O(v, null)) : v.data && w.push(O(v.data, v.mode)), w;
      }, []);
    }, e.fromString = function(b, w) {
      const v = y(b, l.isKanjiModeEnabled()), _ = p(v), S = f(_, w), R = a.find_path(S.map, "start", "end"), k = [];
      for (let M = 1; M < R.length - 1; M++) k.push(S.table[R[M]].node);
      return e.fromArray(g(k));
    }, e.rawSplit = function(b) {
      return e.fromArray(y(b, l.isKanjiModeEnabled()));
    };
  })(Ao);
  const ye = F, De = we, fi = Kn, gi = qn, pi = wo, wi = vo, qe = bo, Ye = ve, vi = Gn, de = $o, bi = _o, yi = st, Le = Ao;
  function xi(e, t) {
    const r = e.size, n = wi.getPositions(t);
    for (let o = 0; o < n.length; o++) {
      const i = n[o][0], s = n[o][1];
      for (let l = -1; l <= 7; l++) if (!(i + l <= -1 || r <= i + l)) for (let a = -1; a <= 7; a++) s + a <= -1 || r <= s + a || (l >= 0 && l <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && a >= 2 && a <= 4 ? e.set(i + l, s + a, true, true) : e.set(i + l, s + a, false, true));
    }
  }
  function $i(e) {
    const t = e.size;
    for (let r = 8; r < t - 8; r++) {
      const n = r % 2 === 0;
      e.set(r, 6, n, true), e.set(6, r, n, true);
    }
  }
  function Ci(e, t) {
    const r = pi.getPositions(t);
    for (let n = 0; n < r.length; n++) {
      const o = r[n][0], i = r[n][1];
      for (let s = -2; s <= 2; s++) for (let l = -2; l <= 2; l++) s === -2 || s === 2 || l === -2 || l === 2 || s === 0 && l === 0 ? e.set(o + s, i + l, true, true) : e.set(o + s, i + l, false, true);
    }
  }
  function _i(e, t) {
    const r = e.size, n = de.getEncodedBits(t);
    let o, i, s;
    for (let l = 0; l < 18; l++) o = Math.floor(l / 3), i = l % 3 + r - 8 - 3, s = (n >> l & 1) === 1, e.set(o, i, s, true), e.set(i, o, s, true);
  }
  function Ne(e, t, r) {
    const n = e.size, o = bi.getEncodedBits(t, r);
    let i, s;
    for (i = 0; i < 15; i++) s = (o >> i & 1) === 1, i < 6 ? e.set(i, 8, s, true) : i < 8 ? e.set(i + 1, 8, s, true) : e.set(n - 15 + i, 8, s, true), i < 8 ? e.set(8, n - i - 1, s, true) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, true) : e.set(8, 15 - i - 1, s, true);
    e.set(n - 8, 8, 1, true);
  }
  function Ei(e, t) {
    const r = e.size;
    let n = -1, o = r - 1, i = 7, s = 0;
    for (let l = r - 1; l > 0; l -= 2) for (l === 6 && l--; ; ) {
      for (let a = 0; a < 2; a++) if (!e.isReserved(o, l - a)) {
        let c = false;
        s < t.length && (c = (t[s] >>> i & 1) === 1), e.set(o, l - a, c), i--, i === -1 && (s++, i = 7);
      }
      if (o += n, o < 0 || r <= o) {
        o -= n, n = -n;
        break;
      }
    }
  }
  function Ai(e, t, r) {
    const n = new fi();
    r.forEach(function(a) {
      n.put(a.mode.bit, 4), n.put(a.getLength(), yi.getCharCountIndicator(a.mode, e)), a.write(n);
    });
    const o = ye.getSymbolTotalCodewords(e), i = Ye.getTotalCodewordsCount(e, t), s = (o - i) * 8;
    for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
    const l = (s - n.getLengthInBits()) / 8;
    for (let a = 0; a < l; a++) n.put(a % 2 ? 17 : 236, 8);
    return Oi(n, e, t);
  }
  function Oi(e, t, r) {
    const n = ye.getSymbolTotalCodewords(t), o = Ye.getTotalCodewordsCount(t, r), i = n - o, s = Ye.getBlocksCount(t, r), l = n % s, a = s - l, c = Math.floor(n / s), d = Math.floor(i / s), y = d + 1, h = c - d, g = new vi(h);
    let p = 0;
    const f = new Array(s), O = new Array(s);
    let m = 0;
    const b = new Uint8Array(e.buffer);
    for (let R = 0; R < s; R++) {
      const k = R < a ? d : y;
      f[R] = b.slice(p, p + k), O[R] = g.encode(f[R]), p += k, m = Math.max(m, k);
    }
    const w = new Uint8Array(n);
    let v = 0, _, S;
    for (_ = 0; _ < m; _++) for (S = 0; S < s; S++) _ < f[S].length && (w[v++] = f[S][_]);
    for (_ = 0; _ < h; _++) for (S = 0; S < s; S++) w[v++] = O[S][_];
    return w;
  }
  function Ii(e, t, r, n) {
    let o;
    if (Array.isArray(e)) o = Le.fromArray(e);
    else if (typeof e == "string") {
      let c = t;
      if (!c) {
        const d = Le.rawSplit(e);
        c = de.getBestVersionForData(d, r);
      }
      o = Le.fromString(e, c || 40);
    } else throw new Error("Invalid data");
    const i = de.getBestVersionForData(o, r);
    if (!i) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = i;
    else if (t < i) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`);
    const s = Ai(t, r, o), l = ye.getSymbolSize(t), a = new gi(l);
    return xi(a, t), $i(a), Ci(a, t), Ne(a, r, 0), t >= 7 && _i(a, t), Ei(a, s), isNaN(n) && (n = qe.getBestMask(a, Ne.bind(null, a, r))), qe.applyMask(n, a), Ne(a, r, n), {
      modules: a,
      version: t,
      errorCorrectionLevel: r,
      maskPattern: n,
      segments: o
    };
  }
  go.create = function(t, r) {
    if (typeof t > "u" || t === "") throw new Error("No input text");
    let n = De.M, o, i;
    return typeof r < "u" && (n = De.from(r.errorCorrectionLevel, De.M), o = de.from(r.version), i = qe.from(r.maskPattern), r.toSJISFunc && ye.setToSJISFunction(r.toSJISFunc)), Ii(t, o, n, i);
  };
  var Oo = {}, br = {};
  (function(e) {
    function t(r) {
      if (typeof r == "number" && (r = r.toString()), typeof r != "string") throw new Error("Color should be defined as hex string");
      let n = r.slice().replace("#", "").split("");
      if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + r);
      (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
        return [
          i,
          i
        ];
      }))), n.length === 6 && n.push("F", "F");
      const o = parseInt(n.join(""), 16);
      return {
        r: o >> 24 & 255,
        g: o >> 16 & 255,
        b: o >> 8 & 255,
        a: o & 255,
        hex: "#" + n.slice(0, 6).join("")
      };
    }
    e.getOptions = function(n) {
      n || (n = {}), n.color || (n.color = {});
      const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
      return {
        width: i,
        scale: i ? 4 : s,
        margin: o,
        color: {
          dark: t(n.color.dark || "#000000ff"),
          light: t(n.color.light || "#ffffffff")
        },
        type: n.type,
        rendererOpts: n.rendererOpts || {}
      };
    }, e.getScale = function(n, o) {
      return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
    }, e.getImageWidth = function(n, o) {
      const i = e.getScale(n, o);
      return Math.floor((n + o.margin * 2) * i);
    }, e.qrToImageData = function(n, o, i) {
      const s = o.modules.size, l = o.modules.data, a = e.getScale(s, i), c = Math.floor((s + i.margin * 2) * a), d = i.margin * a, y = [
        i.color.light,
        i.color.dark
      ];
      for (let h = 0; h < c; h++) for (let g = 0; g < c; g++) {
        let p = (h * c + g) * 4, f = i.color.light;
        if (h >= d && g >= d && h < c - d && g < c - d) {
          const O = Math.floor((h - d) / a), m = Math.floor((g - d) / a);
          f = y[l[O * s + m] ? 1 : 0];
        }
        n[p++] = f.r, n[p++] = f.g, n[p++] = f.b, n[p] = f.a;
      }
    };
  })(br);
  (function(e) {
    const t = br;
    function r(o, i, s) {
      o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
    }
    function n() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    e.render = function(i, s, l) {
      let a = l, c = s;
      typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), s || (c = n()), a = t.getOptions(a);
      const d = t.getImageWidth(i.modules.size, a), y = c.getContext("2d"), h = y.createImageData(d, d);
      return t.qrToImageData(h.data, i, a), r(y, c, d), y.putImageData(h, 0, 0), c;
    }, e.renderToDataURL = function(i, s, l) {
      let a = l;
      typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {});
      const c = e.render(i, s, a), d = a.type || "image/png", y = a.rendererOpts || {};
      return c.toDataURL(d, y.quality);
    };
  })(Oo);
  var Io = {};
  const Pi = br;
  function Fr(e, t) {
    const r = e.a / 255, n = t + '="' + e.hex + '"';
    return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
  }
  function Be(e, t, r) {
    let n = e + t;
    return typeof r < "u" && (n += " " + r), n;
  }
  function Ti(e, t, r) {
    let n = "", o = 0, i = false, s = 0;
    for (let l = 0; l < e.length; l++) {
      const a = Math.floor(l % t), c = Math.floor(l / t);
      !a && !i && (i = true), e[l] ? (s++, l > 0 && a > 0 && e[l - 1] || (n += i ? Be("M", a + r, 0.5 + c + r) : Be("m", o, 0), o = 0, i = false), a + 1 < t && e[l + 1] || (n += Be("h", s), s = 0)) : o++;
    }
    return n;
  }
  Io.render = function(t, r, n) {
    const o = Pi.getOptions(r), i = t.modules.size, s = t.modules.data, l = i + o.margin * 2, a = o.color.light.a ? "<path " + Fr(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "", c = "<path " + Fr(o.color.dark, "stroke") + ' d="' + Ti(s, i, o.margin) + '"/>', d = 'viewBox="0 0 ' + l + " " + l + '"', h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + a + c + `</svg>
`;
    return typeof n == "function" && n(null, h), h;
  };
  const Mi = Vn, Ge = go, Po = Oo, Si = Io;
  function yr(e, t, r, n, o) {
    const i = [].slice.call(arguments, 1), s = i.length, l = typeof i[s - 1] == "function";
    if (!l && !Mi()) throw new Error("Callback required as last argument");
    if (l) {
      if (s < 2) throw new Error("Too few arguments provided");
      s === 2 ? (o = r, r = t, t = n = void 0) : s === 3 && (t.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = r, r = t, t = void 0));
    } else {
      if (s < 1) throw new Error("Too few arguments provided");
      return s === 1 ? (r = t, t = n = void 0) : s === 2 && !t.getContext && (n = r, r = t, t = void 0), new Promise(function(a, c) {
        try {
          const d = Ge.create(r, n);
          a(e(d, t, n));
        } catch (d) {
          c(d);
        }
      });
    }
    try {
      const a = Ge.create(r, n);
      o(null, e(a, t, n));
    } catch (a) {
      o(a);
    }
  }
  qt.create = Ge.create;
  qt.toCanvas = yr.bind(null, Po.render);
  qt.toDataURL = yr.bind(null, Po.renderToDataURL);
  qt.toString = yr.bind(null, function(e, t, r) {
    return Si.render(e, r);
  });
  var Ri = Object.defineProperty, Vr = Object.getOwnPropertySymbols, Di = Object.prototype.hasOwnProperty, Li = Object.prototype.propertyIsEnumerable, Zr = (e, t, r) => t in e ? Ri(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r, We = (e, t) => {
    for (var r in t || (t = {})) Di.call(t, r) && Zr(e, r, t[r]);
    if (Vr) for (var r of Vr(t)) Li.call(t, r) && Zr(e, r, t[r]);
    return e;
  };
  function Ni() {
    var e;
    const t = (e = xt.state.themeMode) != null ? e : "dark", n = {
      light: {
        foreground: {
          1: "rgb(20,20,20)",
          2: "rgb(121,134,134)",
          3: "rgb(158,169,169)"
        },
        background: {
          1: "rgb(255,255,255)",
          2: "rgb(241,243,243)",
          3: "rgb(228,231,231)"
        },
        overlay: "rgba(0,0,0,0.1)"
      },
      dark: {
        foreground: {
          1: "rgb(228,231,231)",
          2: "rgb(148,158,158)",
          3: "rgb(110,119,119)"
        },
        background: {
          1: "rgb(20,20,20)",
          2: "rgb(39,42,42)",
          3: "rgb(59,64,64)"
        },
        overlay: "rgba(255,255,255,0.1)"
      }
    }[t];
    return {
      "--wcm-color-fg-1": n.foreground[1],
      "--wcm-color-fg-2": n.foreground[2],
      "--wcm-color-fg-3": n.foreground[3],
      "--wcm-color-bg-1": n.background[1],
      "--wcm-color-bg-2": n.background[2],
      "--wcm-color-bg-3": n.background[3],
      "--wcm-color-overlay": n.overlay
    };
  }
  function Kr() {
    return {
      "--wcm-accent-color": "#3396FF",
      "--wcm-accent-fill-color": "#FFFFFF",
      "--wcm-z-index": "89",
      "--wcm-background-color": "#3396FF",
      "--wcm-background-border-radius": "8px",
      "--wcm-container-border-radius": "30px",
      "--wcm-wallet-icon-border-radius": "15px",
      "--wcm-wallet-icon-large-border-radius": "30px",
      "--wcm-wallet-icon-small-border-radius": "7px",
      "--wcm-input-border-radius": "28px",
      "--wcm-button-border-radius": "10px",
      "--wcm-notification-border-radius": "36px",
      "--wcm-secondary-button-border-radius": "28px",
      "--wcm-icon-button-border-radius": "50%",
      "--wcm-button-hover-highlight-border-radius": "10px",
      "--wcm-text-big-bold-size": "20px",
      "--wcm-text-big-bold-weight": "600",
      "--wcm-text-big-bold-line-height": "24px",
      "--wcm-text-big-bold-letter-spacing": "-0.03em",
      "--wcm-text-big-bold-text-transform": "none",
      "--wcm-text-xsmall-bold-size": "10px",
      "--wcm-text-xsmall-bold-weight": "700",
      "--wcm-text-xsmall-bold-line-height": "12px",
      "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
      "--wcm-text-xsmall-bold-text-transform": "uppercase",
      "--wcm-text-xsmall-regular-size": "12px",
      "--wcm-text-xsmall-regular-weight": "600",
      "--wcm-text-xsmall-regular-line-height": "14px",
      "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
      "--wcm-text-xsmall-regular-text-transform": "none",
      "--wcm-text-small-thin-size": "14px",
      "--wcm-text-small-thin-weight": "500",
      "--wcm-text-small-thin-line-height": "16px",
      "--wcm-text-small-thin-letter-spacing": "-0.03em",
      "--wcm-text-small-thin-text-transform": "none",
      "--wcm-text-small-regular-size": "14px",
      "--wcm-text-small-regular-weight": "600",
      "--wcm-text-small-regular-line-height": "16px",
      "--wcm-text-small-regular-letter-spacing": "-0.03em",
      "--wcm-text-small-regular-text-transform": "none",
      "--wcm-text-medium-regular-size": "16px",
      "--wcm-text-medium-regular-weight": "600",
      "--wcm-text-medium-regular-line-height": "20px",
      "--wcm-text-medium-regular-letter-spacing": "-0.03em",
      "--wcm-text-medium-regular-text-transform": "none",
      "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
      "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
      "--wcm-success-color": "rgb(38,181,98)",
      "--wcm-error-color": "rgb(242, 90, 103)",
      "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
      "--wcm-overlay-backdrop-filter": "none"
    };
  }
  const A = {
    getPreset(e) {
      return Kr()[e];
    },
    setTheme() {
      const e = document.querySelector(":root"), { themeVariables: t } = xt.state;
      if (e) {
        const r = We(We(We({}, Ni()), Kr()), t);
        Object.entries(r).forEach(([n, o]) => e.style.setProperty(n, o));
      }
    },
    globalCss: P`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
  }, Bi = P`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
  var Wi = Object.defineProperty, ki = Object.getOwnPropertyDescriptor, Mt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ki(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && Wi(t, r, o), o;
  };
  let ot = class extends E {
    constructor() {
      super(...arguments), this.disabled = false, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
    }
    render() {
      const e = {
        "wcm-icon-left": this.iconLeft !== void 0,
        "wcm-icon-right": this.iconRight !== void 0,
        "wcm-ghost": this.variant === "ghost",
        "wcm-outline": this.variant === "outline"
      };
      let t = "inverse";
      return this.variant === "ghost" && (t = "secondary"), this.variant === "outline" && (t = "accent"), u`<button class="${J(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${this.iconRight}</button>`;
    }
  };
  ot.styles = [
    A.globalCss,
    Bi
  ];
  Mt([
    C({
      type: Boolean
    })
  ], ot.prototype, "disabled", 2);
  Mt([
    C()
  ], ot.prototype, "iconLeft", 2);
  Mt([
    C()
  ], ot.prototype, "iconRight", 2);
  Mt([
    C()
  ], ot.prototype, "onClick", 2);
  Mt([
    C()
  ], ot.prototype, "variant", 2);
  ot = Mt([
    I("wcm-button")
  ], ot);
  const Ui = P`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
  var ji = Object.defineProperty, Hi = Object.getOwnPropertyDescriptor, xr = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Hi(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && ji(t, r, o), o;
  };
  let zt = class extends E {
    constructor() {
      super(...arguments), this.disabled = false, this.variant = "primary";
    }
    render() {
      const e = {
        "wcm-secondary": this.variant === "secondary"
      };
      return u`<button ?disabled="${this.disabled}" class="${J(e)}"><slot></slot></button>`;
    }
  };
  zt.styles = [
    A.globalCss,
    Ui
  ];
  xr([
    C({
      type: Boolean
    })
  ], zt.prototype, "disabled", 2);
  xr([
    C()
  ], zt.prototype, "variant", 2);
  zt = xr([
    I("wcm-button-big")
  ], zt);
  const zi = P`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
  var Fi = Object.getOwnPropertyDescriptor, Vi = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Fi(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let Je = class extends E {
    render() {
      return u`<div><slot></slot></div>`;
    }
  };
  Je.styles = [
    A.globalCss,
    zi
  ];
  Je = Vi([
    I("wcm-info-footer")
  ], Je);
  const T = {
    CROSS_ICON: L`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: L`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: L`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: L`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: L`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: L`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: L`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: L`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: L`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: L`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: L`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: L`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: L`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: L`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: L`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    SEARCH_ICON: L`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    WALLET_PLACEHOLDER: L`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    GLOBE_ICON: L`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
  }, Zi = P`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
  var Ki = Object.getOwnPropertyDescriptor, qi = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Ki(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let Qe = class extends E {
    render() {
      return u`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${T.WALLET_CONNECT_LOGO} <button @click="${re.close}">${T.CROSS_ICON}</button></div>`;
    }
  };
  Qe.styles = [
    A.globalCss,
    Zi
  ];
  Qe = qi([
    I("wcm-modal-backcard")
  ], Qe);
  const Yi = P`main{padding:20px;padding-top:0;width:100%}`;
  var Gi = Object.getOwnPropertyDescriptor, Ji = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Gi(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let Xe = class extends E {
    render() {
      return u`<main><slot></slot></main>`;
    }
  };
  Xe.styles = [
    A.globalCss,
    Yi
  ];
  Xe = Ji([
    I("wcm-modal-content")
  ], Xe);
  const Qi = P`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
  var Xi = Object.getOwnPropertyDescriptor, ts = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Xi(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let tr = class extends E {
    render() {
      return u`<footer><slot></slot></footer>`;
    }
  };
  tr.styles = [
    A.globalCss,
    Qi
  ];
  tr = ts([
    I("wcm-modal-footer")
  ], tr);
  const es = P`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
  var rs = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Gt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? os(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && rs(t, r, o), o;
  };
  let ft = class extends E {
    constructor() {
      super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = false;
    }
    backBtnTemplate() {
      return u`<button class="wcm-back-btn" @click="${N.goBack}">${T.BACK_ICON}</button>`;
    }
    actionBtnTemplate() {
      return u`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
    }
    render() {
      const e = {
        "wcm-border": this.border
      }, t = N.state.history.length > 1, r = this.title ? u`<wcm-text variant="big-bold">${this.title}</wcm-text>` : u`<slot></slot>`;
      return u`<header class="${J(e)}">${t ? this.backBtnTemplate() : null} ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
    }
  };
  ft.styles = [
    A.globalCss,
    es
  ];
  Gt([
    C()
  ], ft.prototype, "title", 2);
  Gt([
    C()
  ], ft.prototype, "onAction", 2);
  Gt([
    C()
  ], ft.prototype, "actionIcon", 2);
  Gt([
    C({
      type: Boolean
    })
  ], ft.prototype, "border", 2);
  ft = Gt([
    I("wcm-modal-header")
  ], ft);
  const $ = {
    MOBILE_BREAKPOINT: 600,
    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    getShadowRootElement(e, t) {
      const r = e.renderRoot.querySelector(t);
      if (!r) throw new Error(`${t} not found`);
      return r;
    },
    getWalletIcon({ id: e, image_id: t }) {
      const { walletImages: r } = ht.state;
      return (r == null ? void 0 : r[e]) ? r[e] : t ? j.getWalletImageUrl(t) : "";
    },
    getWalletName(e, t = false) {
      return t && e.length > 8 ? `${e.substring(0, 8)}..` : e;
    },
    isMobileAnimation() {
      return window.innerWidth <= $.MOBILE_BREAKPOINT;
    },
    async preloadImage(e) {
      const t = new Promise((r, n) => {
        const o = new Image();
        o.onload = r, o.onerror = n, o.crossOrigin = "anonymous", o.src = e;
      });
      return Promise.race([
        t,
        x.wait(3e3)
      ]);
    },
    getErrorMessage(e) {
      return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce(e, t = 500) {
      let r;
      return (...n) => {
        function o() {
          e(...n);
        }
        r && clearTimeout(r), r = setTimeout(o, t);
      };
    },
    handleMobileLinking(e, t = "_self") {
      const { walletConnectUri: r } = Z.state, { mobile: n, name: o } = e, i = n == null ? void 0 : n.native, s = n == null ? void 0 : n.universal;
      $.setRecentWallet(e);
      function l(a) {
        if (i) {
          const c = x.formatNativeUrl(i, a, o);
          x.openHref(c, t);
        } else if (s) {
          const c = x.formatUniversalUrl(s, a, o);
          x.openHref(c, t);
        }
      }
      r && l(r);
    },
    handleAndroidLinking() {
      const { walletConnectUri: e } = Z.state;
      e && (x.setWalletConnectAndroidDeepLink(e), x.openHref(e, x.isTelegram() ? "_blank" : "_self"));
    },
    async handleUriCopy() {
      const { walletConnectUri: e } = Z.state;
      if (e) try {
        await navigator.clipboard.writeText(e), X.openToast("Link copied", "success");
      } catch {
        X.openToast("Failed to copy", "error");
      }
    },
    getCustomImageUrls() {
      const { walletImages: e } = ht.state, t = Object.values(e ?? {});
      return Object.values(t);
    },
    truncate(e, t = 8) {
      return e.length <= t ? e : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    setRecentWallet(e) {
      try {
        localStorage.setItem($.WCM_RECENT_WALLET_DATA, JSON.stringify(e));
      } catch {
        console.info("Unable to set recent wallet");
      }
    },
    getRecentWallet() {
      try {
        const e = localStorage.getItem($.WCM_RECENT_WALLET_DATA);
        return e ? JSON.parse(e) : void 0;
      } catch {
        console.info("Unable to get recent wallet");
      }
    },
    caseSafeIncludes(e, t) {
      return e.toUpperCase().includes(t.toUpperCase());
    },
    openWalletExplorerUrl() {
      x.openHref($.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms() {
      const { desktop: e, mobile: t } = x.getWalletRouterData(), r = !!(e == null ? void 0 : e.native), n = !!(e == null ? void 0 : e.universal), o = !!(t == null ? void 0 : t.native) || !!(t == null ? void 0 : t.universal);
      return {
        isDesktop: r,
        isMobile: o,
        isWeb: n
      };
    },
    goToConnectingView(e) {
      N.setData({
        Wallet: e
      });
      const t = x.isMobile(), { isDesktop: r, isWeb: n, isMobile: o } = $.getCachedRouterWalletPlatforms();
      t ? o ? (N.push("MobileConnecting"), !x.isAndroid() && x.isTelegram() && this.handleMobileLinking(e, "_blank")) : n ? N.push("WebConnecting") : N.push("InstallWallet") : r ? N.push("DesktopConnecting") : n ? N.push("WebConnecting") : o ? N.push("MobileQrcodeConnecting") : N.push("InstallWallet");
    }
  }, ns = P`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
  var is = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, $r = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ss(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && is(t, r, o), o;
  };
  let Ft = class extends E {
    constructor() {
      super(), this.view = N.state.view, this.prevView = N.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = N.subscribe((e) => {
        this.view !== e.view && this.onChangeRoute();
      });
    }
    firstUpdated() {
      this.resizeObserver = new ResizeObserver(([e]) => {
        const t = `${e.contentRect.height}px`;
        this.oldHeight !== "0px" && dt(this.routerEl, {
          height: [
            this.oldHeight,
            t
          ]
        }, {
          duration: 0.2
        }), this.oldHeight = t;
      }), this.resizeObserver.observe(this.contentEl);
    }
    disconnectedCallback() {
      var e, t;
      (e = this.unsubscribe) == null || e.call(this), (t = this.resizeObserver) == null || t.disconnect();
    }
    get routerEl() {
      return $.getShadowRootElement(this, ".wcm-router");
    }
    get contentEl() {
      return $.getShadowRootElement(this, ".wcm-content");
    }
    viewTemplate() {
      switch (this.view) {
        case "ConnectWallet":
          return u`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
        case "DesktopConnecting":
          return u`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
        case "MobileConnecting":
          return u`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
        case "WebConnecting":
          return u`<wcm-web-connecting-view></wcm-web-connecting-view>`;
        case "MobileQrcodeConnecting":
          return u`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
        case "WalletExplorer":
          return u`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
        case "Qrcode":
          return u`<wcm-qrcode-view></wcm-qrcode-view>`;
        case "InstallWallet":
          return u`<wcm-install-wallet-view></wcm-install-wallet-view>`;
        default:
          return u`<div>Not Found</div>`;
      }
    }
    async onChangeRoute() {
      await dt(this.routerEl, {
        opacity: [
          1,
          0
        ],
        scale: [
          1,
          1.02
        ]
      }, {
        duration: 0.15,
        delay: 0.1
      }).finished, this.view = N.state.view, dt(this.routerEl, {
        opacity: [
          0,
          1
        ],
        scale: [
          0.99,
          1
        ]
      }, {
        duration: 0.37,
        delay: 0.05
      });
    }
    render() {
      return u`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
    }
  };
  Ft.styles = [
    A.globalCss,
    ns
  ];
  $r([
    H()
  ], Ft.prototype, "view", 2);
  $r([
    H()
  ], Ft.prototype, "prevView", 2);
  Ft = $r([
    I("wcm-modal-router")
  ], Ft);
  const ls = P`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
  var as = Object.defineProperty, cs = Object.getOwnPropertyDescriptor, To = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? cs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && as(t, r, o), o;
  };
  let he = class extends E {
    constructor() {
      super(), this.open = false, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = X.subscribe((e) => {
        e.open ? (this.open = true, this.timeout = setTimeout(() => X.closeToast(), 2200)) : (this.open = false, clearTimeout(this.timeout));
      });
    }
    disconnectedCallback() {
      var e;
      (e = this.unsubscribe) == null || e.call(this), clearTimeout(this.timeout), X.closeToast();
    }
    render() {
      const { message: e, variant: t } = X.state, r = {
        "wcm-success": t === "success",
        "wcm-error": t === "error"
      };
      return this.open ? u`<div class="${J(r)}">${t === "success" ? T.CHECKMARK_ICON : null} ${t === "error" ? T.CROSS_ICON : null}<wcm-text variant="small-regular">${e}</wcm-text></div>` : null;
    }
  };
  he.styles = [
    A.globalCss,
    ls
  ];
  To([
    H()
  ], he.prototype, "open", 2);
  he = To([
    I("wcm-modal-toast")
  ], he);
  const ds = 0.1, qr = 2.5, G = 7;
  function ke(e, t, r) {
    return e === t ? false : (e - t < 0 ? t - e : e - t) <= r + ds;
  }
  function hs(e, t) {
    const r = Array.prototype.slice.call(qt.create(e, {
      errorCorrectionLevel: t
    }).modules.data, 0), n = Math.sqrt(r.length);
    return r.reduce((o, i, s) => (s % n === 0 ? o.push([
      i
    ]) : o[o.length - 1].push(i)) && o, []);
  }
  const us = {
    generate(e, t, r) {
      const n = "#141414", o = "#ffffff", i = [], s = hs(e, "Q"), l = t / s.length, a = [
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 0
        },
        {
          x: 0,
          y: 1
        }
      ];
      a.forEach(({ x: p, y: f }) => {
        const O = (s.length - G) * l * p, m = (s.length - G) * l * f, b = 0.45;
        for (let w = 0; w < a.length; w += 1) {
          const v = l * (G - w * 2);
          i.push(L`<rect fill="${w % 2 === 0 ? n : o}" height="${v}" rx="${v * b}" ry="${v * b}" width="${v}" x="${O + l * w}" y="${m + l * w}">`);
        }
      });
      const c = Math.floor((r + 25) / l), d = s.length / 2 - c / 2, y = s.length / 2 + c / 2 - 1, h = [];
      s.forEach((p, f) => {
        p.forEach((O, m) => {
          if (s[f][m] && !(f < G && m < G || f > s.length - (G + 1) && m < G || f < G && m > s.length - (G + 1)) && !(f > d && f < y && m > d && m < y)) {
            const b = f * l + l / 2, w = m * l + l / 2;
            h.push([
              b,
              w
            ]);
          }
        });
      });
      const g = {};
      return h.forEach(([p, f]) => {
        g[p] ? g[p].push(f) : g[p] = [
          f
        ];
      }), Object.entries(g).map(([p, f]) => {
        const O = f.filter((m) => f.every((b) => !ke(m, b, l)));
        return [
          Number(p),
          O
        ];
      }).forEach(([p, f]) => {
        f.forEach((O) => {
          i.push(L`<circle cx="${p}" cy="${O}" fill="${n}" r="${l / qr}">`);
        });
      }), Object.entries(g).filter(([p, f]) => f.length > 1).map(([p, f]) => {
        const O = f.filter((m) => f.some((b) => ke(m, b, l)));
        return [
          Number(p),
          O
        ];
      }).map(([p, f]) => {
        f.sort((m, b) => m < b ? -1 : 1);
        const O = [];
        for (const m of f) {
          const b = O.find((w) => w.some((v) => ke(m, v, l)));
          b ? b.push(m) : O.push([
            m
          ]);
        }
        return [
          p,
          O.map((m) => [
            m[0],
            m[m.length - 1]
          ])
        ];
      }).forEach(([p, f]) => {
        f.forEach(([O, m]) => {
          i.push(L`<line x1="${p}" x2="${p}" y1="${O}" y2="${m}" stroke="${n}" stroke-width="${l / (qr / 2)}" stroke-linecap="round">`);
        });
      }), i;
    }
  }, ms = P`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
  var fs = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, St = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? gs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && fs(t, r, o), o;
  };
  nt = class extends E {
    constructor() {
      super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
    }
    svgTemplate() {
      const t = xt.state.themeMode === "light" ? this.size : this.size - 18 * 2;
      return L`<svg height="${t}" width="${t}">${us.generate(this.uri, t, t / 4)}</svg>`;
    }
    render() {
      const e = {
        "wcm-dark": xt.state.themeMode === "dark"
      };
      return u`<div style="${`width: ${this.size}px`}" class="${J(e)}">${this.walletId || this.imageUrl ? u`<wcm-wallet-image walletId="${U(this.walletId)}" imageId="${U(this.imageId)}" imageUrl="${U(this.imageUrl)}"></wcm-wallet-image>` : T.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
    }
  };
  nt.styles = [
    A.globalCss,
    ms
  ];
  St([
    C()
  ], nt.prototype, "uri", 2);
  St([
    C({
      type: Number
    })
  ], nt.prototype, "size", 2);
  St([
    C()
  ], nt.prototype, "imageId", 2);
  St([
    C()
  ], nt.prototype, "walletId", 2);
  St([
    C()
  ], nt.prototype, "imageUrl", 2);
  nt = St([
    I("wcm-qrcode")
  ], nt);
  const ps = P`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
  var ws = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, Mo = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? vs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && ws(t, r, o), o;
  };
  let ue = class extends E {
    constructor() {
      super(...arguments), this.onChange = () => null;
    }
    render() {
      return u`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${T.SEARCH_ICON}`;
    }
  };
  ue.styles = [
    A.globalCss,
    ps
  ];
  Mo([
    C()
  ], ue.prototype, "onChange", 2);
  ue = Mo([
    I("wcm-search-input")
  ], ue);
  const bs = P`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
  var ys = Object.getOwnPropertyDescriptor, xs = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ys(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let er = class extends E {
    render() {
      return u`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
    }
  };
  er.styles = [
    A.globalCss,
    bs
  ];
  er = xs([
    I("wcm-spinner")
  ], er);
  const $s = P`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
  var Cs = Object.defineProperty, _s = Object.getOwnPropertyDescriptor, Cr = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? _s(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && Cs(t, r, o), o;
  };
  let Vt = class extends E {
    constructor() {
      super(...arguments), this.variant = "medium-regular", this.color = "primary";
    }
    render() {
      const e = {
        "wcm-big-bold": this.variant === "big-bold",
        "wcm-medium-regular": this.variant === "medium-regular",
        "wcm-small-regular": this.variant === "small-regular",
        "wcm-small-thin": this.variant === "small-thin",
        "wcm-xsmall-regular": this.variant === "xsmall-regular",
        "wcm-xsmall-bold": this.variant === "xsmall-bold",
        "wcm-color-primary": this.color === "primary",
        "wcm-color-secondary": this.color === "secondary",
        "wcm-color-tertiary": this.color === "tertiary",
        "wcm-color-inverse": this.color === "inverse",
        "wcm-color-accnt": this.color === "accent",
        "wcm-color-error": this.color === "error"
      };
      return u`<span><slot class="${J(e)}"></slot></span>`;
    }
  };
  Vt.styles = [
    A.globalCss,
    $s
  ];
  Cr([
    C()
  ], Vt.prototype, "variant", 2);
  Cr([
    C()
  ], Vt.prototype, "color", 2);
  Vt = Cr([
    I("wcm-text")
  ], Vt);
  const Es = P`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
  var As = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, lt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Os(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && As(t, r, o), o;
  };
  let K = class extends E {
    constructor() {
      super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = false, this.recent = false;
    }
    sublabelTemplate() {
      return this.recent ? u`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? u`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
    }
    handleClick() {
      Bo.click({
        name: "WALLET_BUTTON",
        walletId: this.walletId
      }), this.onClick();
    }
    render() {
      var e;
      return u`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${U(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(e = this.label) != null ? e : $.getWalletName(this.name, true)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
    }
  };
  K.styles = [
    A.globalCss,
    Es
  ];
  lt([
    C()
  ], K.prototype, "onClick", 2);
  lt([
    C()
  ], K.prototype, "name", 2);
  lt([
    C()
  ], K.prototype, "walletId", 2);
  lt([
    C()
  ], K.prototype, "label", 2);
  lt([
    C()
  ], K.prototype, "imageId", 2);
  lt([
    C({
      type: Boolean
    })
  ], K.prototype, "installed", 2);
  lt([
    C({
      type: Boolean
    })
  ], K.prototype, "recent", 2);
  K = lt([
    I("wcm-wallet-button")
  ], K);
  const Is = P`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
  var Ps = Object.defineProperty, Ts = Object.getOwnPropertyDescriptor, xe = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Ts(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && Ps(t, r, o), o;
  };
  let Pt = class extends E {
    constructor() {
      super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
    }
    render() {
      var e;
      const t = (e = this.imageUrl) != null && e.length ? this.imageUrl : $.getWalletIcon({
        id: this.walletId,
        image_id: this.imageId
      });
      return u`${t.length ? u`<div><img crossorigin="anonymous" src="${t}" alt="${this.id}"></div>` : T.WALLET_PLACEHOLDER}`;
    }
  };
  Pt.styles = [
    A.globalCss,
    Is
  ];
  xe([
    C()
  ], Pt.prototype, "walletId", 2);
  xe([
    C()
  ], Pt.prototype, "imageId", 2);
  xe([
    C()
  ], Pt.prototype, "imageUrl", 2);
  Pt = xe([
    I("wcm-wallet-image")
  ], Pt);
  var Ms = Object.defineProperty, Ss = Object.getOwnPropertyDescriptor, So = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Ss(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && Ms(t, r, o), o;
  };
  let rr = class extends E {
    constructor() {
      super(), this.preload = true, this.preloadData();
    }
    async loadImages(e) {
      try {
        (e == null ? void 0 : e.length) && await Promise.all(e.map(async (t) => $.preloadImage(t)));
      } catch {
        console.info("Unsuccessful attempt at preloading some images", e);
      }
    }
    async preloadListings() {
      if (ht.state.enableExplorer) {
        await j.getRecomendedWallets(), Z.setIsDataLoaded(true);
        const { recomendedWallets: e } = j.state, t = e.map((r) => $.getWalletIcon(r));
        await this.loadImages(t);
      } else Z.setIsDataLoaded(true);
    }
    async preloadCustomImages() {
      const e = $.getCustomImageUrls();
      await this.loadImages(e);
    }
    async preloadData() {
      try {
        this.preload && (this.preload = false, await Promise.all([
          this.preloadListings(),
          this.preloadCustomImages()
        ]));
      } catch (e) {
        console.error(e), X.openToast("Failed preloading", "error");
      }
    }
  };
  So([
    H()
  ], rr.prototype, "preload", 2);
  rr = So([
    I("wcm-explorer-context")
  ], rr);
  var Rs = Object.getOwnPropertyDescriptor, Ds = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Rs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let Yr = class extends E {
    constructor() {
      super(), this.unsubscribeTheme = void 0, A.setTheme(), this.unsubscribeTheme = xt.subscribe(A.setTheme);
    }
    disconnectedCallback() {
      var e;
      (e = this.unsubscribeTheme) == null || e.call(this);
    }
  };
  Yr = Ds([
    I("wcm-theme-context")
  ], Yr);
  const Ls = P`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
  var Ns = Object.getOwnPropertyDescriptor, Bs = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Ns(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let or = class extends E {
    onGoToQrcode() {
      N.push("Qrcode");
    }
    render() {
      const { recomendedWallets: e } = j.state, t = [
        ...e,
        ...e
      ], r = x.RECOMMENDED_WALLET_AMOUNT * 2;
      return u`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${T.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${T.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
        ...Array(r)
      ].map((n, o) => {
        const i = t[o % t.length];
        return i ? u`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>` : T.WALLET_PLACEHOLDER;
      })}</div><wcm-button-big @click="${$.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
    }
  };
  or.styles = [
    A.globalCss,
    Ls
  ];
  or = Bs([
    I("wcm-android-wallet-selection")
  ], or);
  const Ws = P`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
  var ks = Object.defineProperty, Us = Object.getOwnPropertyDescriptor, Rt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Us(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && ks(t, r, o), o;
  };
  let it = class extends E {
    constructor() {
      super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = false, this.isStale = false, this.label = "";
    }
    svgLoaderTemplate() {
      var e, t;
      const i = (t = (e = xt.state.themeVariables) == null ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) != null ? t : A.getPreset("--wcm-wallet-icon-large-border-radius");
      let s = 0;
      i.includes("%") ? s = 88 / 100 * parseInt(i, 10) : s = parseInt(i, 10), s *= 1.17;
      const l = 317 - s * 1.57, a = 425 - s * 1.8;
      return u`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${s}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${l}" stroke-dashoffset="${a}"></use></svg>`;
    }
    render() {
      const e = {
        "wcm-error": this.isError,
        "wcm-stale": this.isStale
      };
      return u`<div class="${J(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${U(this.walletId)}" imageId="${U(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
    }
  };
  it.styles = [
    A.globalCss,
    Ws
  ];
  Rt([
    C()
  ], it.prototype, "walletId", 2);
  Rt([
    C()
  ], it.prototype, "imageId", 2);
  Rt([
    C({
      type: Boolean
    })
  ], it.prototype, "isError", 2);
  Rt([
    C({
      type: Boolean
    })
  ], it.prototype, "isStale", 2);
  Rt([
    C()
  ], it.prototype, "label", 2);
  it = Rt([
    I("wcm-connector-waiting")
  ], it);
  const yt = {
    manualWallets() {
      var e, t;
      const { mobileWallets: r, desktopWallets: n } = ht.state, o = (e = yt.recentWallet()) == null ? void 0 : e.id, i = x.isMobile() ? r : n, s = i == null ? void 0 : i.filter((l) => o !== l.id);
      return (t = x.isMobile() ? s == null ? void 0 : s.map(({ id: l, name: a, links: c }) => ({
        id: l,
        name: a,
        mobile: c,
        links: c
      })) : s == null ? void 0 : s.map(({ id: l, name: a, links: c }) => ({
        id: l,
        name: a,
        desktop: c,
        links: c
      }))) != null ? t : [];
    },
    recentWallet() {
      return $.getRecentWallet();
    },
    recomendedWallets(e = false) {
      var t;
      const r = e || (t = yt.recentWallet()) == null ? void 0 : t.id, { recomendedWallets: n } = j.state;
      return n.filter((i) => r !== i.id);
    }
  }, rt = {
    onConnecting(e) {
      $.goToConnectingView(e);
    },
    manualWalletsTemplate() {
      return yt.manualWallets().map((t) => u`<wcm-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`);
    },
    recomendedWalletsTemplate(e = false) {
      return yt.recomendedWallets(e).map((r) => u`<wcm-wallet-button name="${r.name}" walletId="${r.id}" imageId="${r.image_id}" .onClick="${() => this.onConnecting(r)}"></wcm-wallet-button>`);
    },
    recentWalletTemplate() {
      const e = yt.recentWallet();
      if (e) return u`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${U(e.image_id)}" .recent="${true}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`;
    }
  }, js = P`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
  var Hs = Object.getOwnPropertyDescriptor, zs = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Hs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let nr = class extends E {
    render() {
      const { explorerExcludedWalletIds: e, enableExplorer: t } = ht.state, r = e !== "ALL" && t, n = rt.manualWalletsTemplate(), o = rt.recomendedWalletsTemplate();
      let s = [
        rt.recentWalletTemplate(),
        ...n,
        ...o
      ];
      s = s.filter(Boolean);
      const l = s.length > 4 || r;
      let a = [];
      l ? a = s.slice(0, 3) : a = s;
      const c = !!a.length;
      return u`<wcm-modal-header .border="${true}" title="Connect your wallet" .onAction="${$.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${T.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${T.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${c ? u`<wcm-modal-footer><div class="wcm-desktop-title">${T.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${l ? u`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
    }
  };
  nr.styles = [
    A.globalCss,
    js
  ];
  nr = zs([
    I("wcm-desktop-wallet-selection")
  ], nr);
  const Fs = P`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
  var Vs = Object.getOwnPropertyDescriptor, Zs = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Vs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let ir = class extends E {
    render() {
      const { termsOfServiceUrl: e, privacyPolicyUrl: t } = ht.state;
      return e ?? t ? u`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e ? u`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && t ? "and" : null} ${t ? u`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
    }
  };
  ir.styles = [
    A.globalCss,
    Fs
  ];
  ir = Zs([
    I("wcm-legal-notice")
  ], ir);
  const Ks = P`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
  var qs = Object.getOwnPropertyDescriptor, Ys = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? qs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let sr = class extends E {
    onQrcode() {
      N.push("Qrcode");
    }
    render() {
      const { explorerExcludedWalletIds: e, enableExplorer: t } = ht.state, r = e !== "ALL" && t, n = rt.manualWalletsTemplate(), o = rt.recomendedWalletsTemplate();
      let s = [
        rt.recentWalletTemplate(),
        ...n,
        ...o
      ];
      s = s.filter(Boolean);
      const l = s.length > 8 || r;
      let a = [];
      l ? a = s.slice(0, 7) : a = s;
      const c = !!a.length;
      return u`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${T.QRCODE_ICON}"></wcm-modal-header>${c ? u`<wcm-modal-content><div>${a} ${l ? u`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
    }
  };
  sr.styles = [
    A.globalCss,
    Ks
  ];
  sr = Ys([
    I("wcm-mobile-wallet-selection")
  ], sr);
  const Gs = P`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
  var Js = Object.defineProperty, Qs = Object.getOwnPropertyDescriptor, _r = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Qs(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && Js(t, r, o), o;
  };
  Zt = class extends E {
    constructor() {
      super(), this.open = false, this.active = false, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = re.subscribe((e) => {
        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
      });
    }
    disconnectedCallback() {
      var e;
      (e = this.unsubscribeModal) == null || e.call(this);
    }
    get overlayEl() {
      return $.getShadowRootElement(this, ".wcm-overlay");
    }
    get containerEl() {
      return $.getShadowRootElement(this, ".wcm-container");
    }
    toggleBodyScroll(e) {
      if (document.querySelector("body")) if (e) {
        const r = document.getElementById("wcm-styles");
        r == null ? void 0 : r.remove();
      } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
    }
    onCloseModal(e) {
      e.target === e.currentTarget && re.close();
    }
    onOpenModalEvent() {
      this.toggleBodyScroll(false), this.addKeyboardEvents(), this.open = true, setTimeout(async () => {
        const e = $.isMobileAnimation() ? {
          y: [
            "50vh",
            "0vh"
          ]
        } : {
          scale: [
            0.98,
            1
          ]
        }, t = 0.1, r = 0.2;
        await Promise.all([
          dt(this.overlayEl, {
            opacity: [
              0,
              1
            ]
          }, {
            delay: t,
            duration: r
          }).finished,
          dt(this.containerEl, e, {
            delay: t,
            duration: r
          }).finished
        ]), this.active = true;
      }, 0);
    }
    async onCloseModalEvent() {
      this.toggleBodyScroll(true), this.removeKeyboardEvents();
      const e = $.isMobileAnimation() ? {
        y: [
          "0vh",
          "50vh"
        ]
      } : {
        scale: [
          1,
          0.98
        ]
      }, t = 0.2;
      await Promise.all([
        dt(this.overlayEl, {
          opacity: [
            1,
            0
          ]
        }, {
          duration: t
        }).finished,
        dt(this.containerEl, e, {
          duration: t
        }).finished
      ]), this.containerEl.removeAttribute("style"), this.active = false, this.open = false;
    }
    addKeyboardEvents() {
      this.abortController = new AbortController(), window.addEventListener("keydown", (e) => {
        var t;
        e.key === "Escape" ? re.close() : e.key === "Tab" && ((t = e.target) != null && t.tagName.includes("wcm-") || this.containerEl.focus());
      }, this.abortController), this.containerEl.focus();
    }
    removeKeyboardEvents() {
      var e;
      (e = this.abortController) == null || e.abort(), this.abortController = void 0;
    }
    render() {
      const e = {
        "wcm-overlay": true,
        "wcm-active": this.active
      };
      return u`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${J(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? u`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
    }
  };
  Zt.styles = [
    A.globalCss,
    Gs
  ];
  _r([
    H()
  ], Zt.prototype, "open", 2);
  _r([
    H()
  ], Zt.prototype, "active", 2);
  Zt = _r([
    I("wcm-modal")
  ], Zt);
  const Xs = P`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
  var tl = Object.defineProperty, el = Object.getOwnPropertyDescriptor, Jt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? el(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && tl(t, r, o), o;
  };
  let gt = class extends E {
    constructor() {
      super(...arguments), this.isMobile = false, this.isDesktop = false, this.isWeb = false, this.isRetry = false;
    }
    onMobile() {
      x.isMobile() ? N.replace("MobileConnecting") : N.replace("MobileQrcodeConnecting");
    }
    onDesktop() {
      N.replace("DesktopConnecting");
    }
    onWeb() {
      N.replace("WebConnecting");
    }
    render() {
      return u`<div>${this.isRetry ? u`<slot></slot>` : null} ${this.isMobile ? u`<wcm-button .onClick="${this.onMobile}" .iconLeft="${T.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? u`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${T.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? u`<wcm-button .onClick="${this.onWeb}" .iconLeft="${T.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
    }
  };
  gt.styles = [
    A.globalCss,
    Xs
  ];
  Jt([
    C({
      type: Boolean
    })
  ], gt.prototype, "isMobile", 2);
  Jt([
    C({
      type: Boolean
    })
  ], gt.prototype, "isDesktop", 2);
  Jt([
    C({
      type: Boolean
    })
  ], gt.prototype, "isWeb", 2);
  Jt([
    C({
      type: Boolean
    })
  ], gt.prototype, "isRetry", 2);
  gt = Jt([
    I("wcm-platform-selection")
  ], gt);
  const rl = P`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
  var ol = Object.getOwnPropertyDescriptor, nl = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ol(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let lr = class extends E {
    onClick() {
      N.push("WalletExplorer");
    }
    render() {
      const { recomendedWallets: e } = j.state, t = yt.manualWallets(), r = [
        ...e,
        ...t
      ].reverse().slice(0, 4);
      return u`<button @click="${this.onClick}"><div class="wcm-icons">${r.map((n) => {
        const o = $.getWalletIcon(n);
        if (o) return u`<img crossorigin="anonymous" src="${o}">`;
        const i = $.getWalletIcon({
          id: n.id
        });
        return i ? u`<img crossorigin="anonymous" src="${i}">` : T.WALLET_PLACEHOLDER;
      })} ${[
        ...Array(4 - r.length)
      ].map(() => T.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
    }
  };
  lr.styles = [
    A.globalCss,
    rl
  ];
  lr = nl([
    I("wcm-view-all-wallets-button")
  ], lr);
  const il = P`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
  var sl = Object.defineProperty, ll = Object.getOwnPropertyDescriptor, $e = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ll(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && sl(t, r, o), o;
  };
  let Tt = class extends E {
    constructor() {
      super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
        const { walletConnectUri: e } = Z.state;
        this.uri = e;
      }, 0);
    }
    get overlayEl() {
      return $.getShadowRootElement(this, ".wcm-qr-container");
    }
    render() {
      return u`<div class="wcm-qr-container">${this.uri ? u`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${U(this.walletId)}" imageId="${U(this.imageId)}"></wcm-qrcode>` : u`<wcm-spinner></wcm-spinner>`}</div>`;
    }
  };
  Tt.styles = [
    A.globalCss,
    il
  ];
  $e([
    C()
  ], Tt.prototype, "walletId", 2);
  $e([
    C()
  ], Tt.prototype, "imageId", 2);
  $e([
    H()
  ], Tt.prototype, "uri", 2);
  Tt = $e([
    I("wcm-walletconnect-qr")
  ], Tt);
  var al = Object.getOwnPropertyDescriptor, cl = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? al(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let ar = class extends E {
    viewTemplate() {
      return x.isAndroid() && !x.isTelegram() ? u`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : x.isMobile() ? u`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : u`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
    }
    render() {
      return u`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
    }
  };
  ar.styles = [
    A.globalCss
  ];
  ar = cl([
    I("wcm-connect-wallet-view")
  ], ar);
  const dl = P`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
  var hl = Object.defineProperty, ul = Object.getOwnPropertyDescriptor, Ro = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ul(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && hl(t, r, o), o;
  };
  let me = class extends E {
    constructor() {
      super(), this.isError = false, this.openDesktopApp();
    }
    onFormatAndRedirect(e) {
      const { desktop: t, name: r } = x.getWalletRouterData(), n = t == null ? void 0 : t.native, o = t == null ? void 0 : t.universal;
      if (n) {
        const i = x.formatNativeUrl(n, e, r);
        x.openHref(i, "_self");
      } else if (o) {
        const i = x.formatUniversalUrl(o, e, r);
        x.openHref(i, "_blank");
      }
    }
    openDesktopApp() {
      const { walletConnectUri: e } = Z.state, t = x.getWalletRouterData();
      $.setRecentWallet(t), e && this.onFormatAndRedirect(e);
    }
    render() {
      const { name: e, id: t, image_id: r } = x.getWalletRouterData(), { isMobile: n, isWeb: o } = $.getCachedRouterWalletPlatforms();
      return u`<wcm-modal-header title="${e}" .onAction="${$.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${U(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${n}" .isWeb="${o}" .isRetry="${true}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${T.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
    }
  };
  me.styles = [
    A.globalCss,
    dl
  ];
  Ro([
    H()
  ], me.prototype, "isError", 2);
  me = Ro([
    I("wcm-desktop-connecting-view")
  ], me);
  const ml = P`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
  var fl = Object.getOwnPropertyDescriptor, gl = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? fl(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let cr = class extends E {
    onInstall(e) {
      e && x.openHref(e, "_blank");
    }
    render() {
      const { name: e, id: t, image_id: r, homepage: n } = x.getWalletRouterData();
      return u`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${U(r)}" label="Not Detected" .isStale="${true}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(n)}" .iconLeft="${T.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
    }
  };
  cr.styles = [
    A.globalCss,
    ml
  ];
  cr = gl([
    I("wcm-install-wallet-view")
  ], cr);
  const pl = P`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
  var wl = Object.defineProperty, vl = Object.getOwnPropertyDescriptor, Do = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? vl(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && wl(t, r, o), o;
  };
  let fe = class extends E {
    constructor() {
      super(), this.isError = false, this.openMobileApp();
    }
    onFormatAndRedirect(e, t = false) {
      const { mobile: r, name: n } = x.getWalletRouterData(), o = r == null ? void 0 : r.native, i = r == null ? void 0 : r.universal, s = x.isTelegram() ? "_blank" : "_self";
      if (e = x.isTelegram() && x.isAndroid() ? encodeURIComponent(e) : e, o && !t) {
        const l = x.formatNativeUrl(o, e, n);
        x.openHref(l, s);
      } else if (i) {
        const l = x.formatUniversalUrl(i, e, n);
        x.openHref(l, s);
      }
    }
    openMobileApp(e = false) {
      const { walletConnectUri: t } = Z.state, r = x.getWalletRouterData();
      t && this.onFormatAndRedirect(t, e), $.setRecentWallet(r);
    }
    onGoToAppStore(e) {
      e && x.openHref(e, "_blank");
    }
    render() {
      const { name: e, id: t, image_id: r, app: n, mobile: o } = x.getWalletRouterData(), { isWeb: i } = $.getCachedRouterWalletPlatforms(), s = n == null ? void 0 : n.ios, l = o == null ? void 0 : o.universal;
      return u`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${U(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${true}"><wcm-button .onClick="${() => this.openMobileApp(false)}" .iconRight="${T.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${l ? u`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(true)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${U(r)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${T.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(s)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
    }
  };
  fe.styles = [
    A.globalCss,
    pl
  ];
  Do([
    H()
  ], fe.prototype, "isError", 2);
  fe = Do([
    I("wcm-mobile-connecting-view")
  ], fe);
  const bl = P`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
  var yl = Object.getOwnPropertyDescriptor, xl = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? yl(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let dr = class extends E {
    render() {
      const { name: e, id: t, image_id: r } = x.getWalletRouterData(), { isDesktop: n, isWeb: o } = $.getCachedRouterWalletPlatforms();
      return u`<wcm-modal-header title="${e}" .onAction="${$.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${U(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${n}" .isWeb="${o}"></wcm-platform-selection></wcm-info-footer>`;
    }
  };
  dr.styles = [
    A.globalCss,
    bl
  ];
  dr = xl([
    I("wcm-mobile-qr-connecting-view")
  ], dr);
  var $l = Object.getOwnPropertyDescriptor, Cl = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? $l(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = s(o) || o);
    return o;
  };
  let hr = class extends E {
    render() {
      return u`<wcm-modal-header title="Scan the code" .onAction="${$.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
    }
  };
  hr.styles = [
    A.globalCss
  ];
  hr = Cl([
    I("wcm-qrcode-view")
  ], hr);
  const _l = P`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
  var El = Object.defineProperty, Al = Object.getOwnPropertyDescriptor, Qt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Al(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && El(t, r, o), o;
  };
  const Ue = 40;
  let pt = class extends E {
    constructor() {
      super(...arguments), this.loading = !j.state.wallets.listings.length, this.firstFetch = !j.state.wallets.listings.length, this.search = "", this.endReached = false, this.intersectionObserver = void 0, this.searchDebounce = $.debounce((e) => {
        e.length >= 1 ? (this.firstFetch = true, this.endReached = false, this.search = e, j.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), j.resetSearch());
      });
    }
    firstUpdated() {
      this.createPaginationObserver();
    }
    disconnectedCallback() {
      var e;
      (e = this.intersectionObserver) == null || e.disconnect();
    }
    get placeholderEl() {
      return $.getShadowRootElement(this, ".wcm-placeholder-block");
    }
    createPaginationObserver() {
      this.intersectionObserver = new IntersectionObserver(([e]) => {
        e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
      }), this.intersectionObserver.observe(this.placeholderEl);
    }
    isLastPage() {
      const { wallets: e, search: t } = j.state, { listings: r, total: n } = this.search ? t : e;
      return n <= Ue || r.length >= n;
    }
    async fetchWallets() {
      var e;
      const { wallets: t, search: r } = j.state, { listings: n, total: o, page: i } = this.search ? r : t;
      if (!this.endReached && (this.firstFetch || o > Ue && n.length < o)) try {
        this.loading = true;
        const s = (e = Z.state.chains) == null ? void 0 : e.join(","), { listings: l } = await j.getWallets({
          page: this.firstFetch ? 1 : i + 1,
          entries: Ue,
          search: this.search,
          version: 2,
          chains: s
        }), a = l.map((c) => $.getWalletIcon(c));
        await Promise.all([
          ...a.map(async (c) => $.preloadImage(c)),
          x.wait(300)
        ]), this.endReached = this.isLastPage();
      } catch (s) {
        console.error(s), X.openToast($.getErrorMessage(s), "error");
      } finally {
        this.loading = false, this.firstFetch = false;
      }
    }
    onConnect(e) {
      x.isAndroid() ? $.handleMobileLinking(e) : $.goToConnectingView(e);
    }
    onSearchChange(e) {
      const { value: t } = e.target;
      this.searchDebounce(t);
    }
    render() {
      const { wallets: e, search: t } = j.state, { listings: r } = this.search ? t : e, n = this.loading && !r.length, o = this.search.length >= 3;
      let i = rt.manualWalletsTemplate(), s = rt.recomendedWalletsTemplate(true);
      o && (i = i.filter(({ values: c }) => $.caseSafeIncludes(c[0], this.search)), s = s.filter(({ values: c }) => $.caseSafeIncludes(c[0], this.search)));
      const l = !this.loading && !r.length && !s.length, a = {
        "wcm-loading": n,
        "wcm-end-reached": this.endReached || !this.loading,
        "wcm-empty": l
      };
      return u`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${J(a)}"><div class="wcm-grid">${n ? null : i} ${n ? null : s} ${n ? null : r.map((c) => u`${c ? u`<wcm-wallet-button imageId="${c.image_id}" name="${c.name}" walletId="${c.id}" .onClick="${() => this.onConnect(c)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${l ? u`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!l && this.loading ? u`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
    }
  };
  pt.styles = [
    A.globalCss,
    _l
  ];
  Qt([
    H()
  ], pt.prototype, "loading", 2);
  Qt([
    H()
  ], pt.prototype, "firstFetch", 2);
  Qt([
    H()
  ], pt.prototype, "search", 2);
  Qt([
    H()
  ], pt.prototype, "endReached", 2);
  pt = Qt([
    I("wcm-wallet-explorer-view")
  ], pt);
  const Ol = P`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
  var Il = Object.defineProperty, Pl = Object.getOwnPropertyDescriptor, Lo = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? Pl(t, r) : t, i = e.length - 1, s; i >= 0; i--) (s = e[i]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && Il(t, r, o), o;
  };
  let ge = class extends E {
    constructor() {
      super(), this.isError = false, this.openWebWallet();
    }
    onFormatAndRedirect(e) {
      const { desktop: t, name: r } = x.getWalletRouterData(), n = t == null ? void 0 : t.universal;
      if (n) {
        const o = x.formatUniversalUrl(n, e, r);
        x.openHref(o, "_blank");
      }
    }
    openWebWallet() {
      const { walletConnectUri: e } = Z.state, t = x.getWalletRouterData();
      $.setRecentWallet(t), e && this.onFormatAndRedirect(e);
    }
    render() {
      const { name: e, id: t, image_id: r } = x.getWalletRouterData(), { isMobile: n, isDesktop: o } = $.getCachedRouterWalletPlatforms(), i = x.isMobile();
      return u`<wcm-modal-header title="${e}" .onAction="${$.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${U(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${n}" .isDesktop="${i ? false : o}" .isRetry="${true}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${T.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
    }
  };
  ge.styles = [
    A.globalCss,
    Ol
  ];
  Lo([
    H()
  ], ge.prototype, "isError", 2);
  ge = Lo([
    I("wcm-web-connecting-view")
  ], ge);
});
export {
  Zt as WcmModal,
  nt as WcmQrCode,
  __tla
};
