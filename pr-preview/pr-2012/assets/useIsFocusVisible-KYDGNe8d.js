import { ib as m, eK as Nt, i0 as pt, iR as Ue, jp as mt, i2 as _t, jq as Vt, el as C, ia as M, jr as Wt, ie as ue, e7 as $, i9 as zt, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let xi, bi, pi, si, Ri, Si, G, gi, mi, vt, Et, yi;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function fe(n) {
    return n && Nt(n) === "object" && n.constructor === Object;
  }
  G = function(n, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      clone: true
    }, e = r.clone ? m({}, n) : n;
    return fe(n) && fe(t) && Object.keys(t).forEach(function(i) {
      i !== "__proto__" && (fe(t[i]) && i in n ? e[i] = G(n[i], t[i], r) : e[i] = t[i]);
    }), e;
  };
  function Y(n) {
    for (var t = "https://mui.com/production-error/?code=" + n, r = 1; r < arguments.length; r += 1) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified Material-UI error #" + n + "; visit " + t + " for the full message.";
  }
  gi = function(n) {
    if (typeof n != "string") throw new Error(Y(7));
    return n.charAt(0).toUpperCase() + n.slice(1);
  };
  pi = function() {
    for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
    return t.reduce(function(e, i) {
      return i == null ? e : function() {
        for (var s = arguments.length, o = new Array(s), f = 0; f < s; f++) o[f] = arguments[f];
        e.apply(this, o), i.apply(this, o);
      };
    }, function() {
    });
  };
  var Ft = typeof Symbol == "function" && Symbol.for;
  const Gt = Ft ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  var Kt = [
    "checked",
    "disabled",
    "error",
    "focused",
    "focusVisible",
    "required",
    "expanded",
    "selected"
  ];
  function Lt() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.disableGlobal, r = t === void 0 ? false : t, e = n.productionPrefix, i = e === void 0 ? "jss" : e, a = n.seed, s = a === void 0 ? "" : a, o = s === "" ? "" : "".concat(s, "-"), f = 0, l = function() {
      return f += 1, f;
    };
    return function(c, d) {
      var v = d.options.name;
      if (v && v.indexOf("Mui") === 0 && !d.options.link && !r) {
        if (Kt.indexOf(c.key) !== -1) return "Mui-".concat(c.key);
        var h = "".concat(o).concat(v, "-").concat(c.key);
        return !d.options.theme[Gt] || s !== "" ? h : "".concat(h, "-").concat(l());
      }
      return "".concat(o).concat(i).concat(l());
    };
  }
  function Ut(n) {
    var t = n.theme, r = n.name, e = n.props;
    if (!t || !t.props || !t.props[r]) return e;
    var i = t.props[r], a;
    for (a in i) e[a] === void 0 && (e[a] = i[a]);
    return e;
  }
  var De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, X = (typeof window > "u" ? "undefined" : De(window)) === "object" && (typeof document > "u" ? "undefined" : De(document)) === "object" && document.nodeType === 9, Dt = {}.constructor;
  function je(n) {
    if (n == null || typeof n != "object") return n;
    if (Array.isArray(n)) return n.map(je);
    if (n.constructor !== Dt) return n;
    var t = {};
    for (var r in n) t[r] = je(n[r]);
    return t;
  }
  function We(n, t, r) {
    n === void 0 && (n = "unnamed");
    var e = r.jss, i = je(t), a = e.plugins.onCreateRule(n, i, r);
    return a || (n[0], null);
  }
  var qe = function(t, r) {
    for (var e = "", i = 0; i < t.length && t[i] !== "!important"; i++) e && (e += r), e += t[i];
    return e;
  }, N = function(t) {
    if (!Array.isArray(t)) return t;
    var r = "";
    if (Array.isArray(t[0])) for (var e = 0; e < t.length && t[e] !== "!important"; e++) r && (r += ", "), r += qe(t[e], " ");
    else r = qe(t, ", ");
    return t[t.length - 1] === "!important" && (r += " !important"), r;
  };
  function K(n) {
    return n && n.format === false ? {
      linebreak: "",
      space: ""
    } : {
      linebreak: `
`,
      space: " "
    };
  }
  function U(n, t) {
    for (var r = "", e = 0; e < t; e++) r += "  ";
    return r + n;
  }
  function J(n, t, r) {
    r === void 0 && (r = {});
    var e = "";
    if (!t) return e;
    var i = r, a = i.indent, s = a === void 0 ? 0 : a, o = t.fallbacks;
    r.format === false && (s = -1 / 0);
    var f = K(r), l = f.linebreak, c = f.space;
    if (n && s++, o) if (Array.isArray(o)) for (var d = 0; d < o.length; d++) {
      var v = o[d];
      for (var h in v) {
        var p = v[h];
        p != null && (e && (e += l), e += U(h + ":" + c + N(p) + ";", s));
      }
    }
    else for (var y in o) {
      var x = o[y];
      x != null && (e && (e += l), e += U(y + ":" + c + N(x) + ";", s));
    }
    for (var w in t) {
      var S = t[w];
      S != null && w !== "fallbacks" && (e && (e += l), e += U(w + ":" + c + N(S) + ";", s));
    }
    return !e && !r.allowEmpty || !n ? e : (s--, e && (e = "" + l + e + l), U("" + n + c + "{" + e, s) + U("}", s));
  }
  var qt = /([[\].#*$><+~=|^:(),"'`\s])/g, Be = typeof CSS < "u" && CSS.escape, ze = function(n) {
    return Be ? Be(n) : n.replace(qt, "\\$1");
  }, yt = function() {
    function n(r, e, i) {
      this.type = "style", this.isProcessed = false;
      var a = i.sheet, s = i.Renderer;
      this.key = r, this.options = i, this.style = e, a ? this.renderer = a.renderer : s && (this.renderer = new s());
    }
    var t = n.prototype;
    return t.prop = function(e, i, a) {
      if (i === void 0) return this.style[e];
      var s = a ? a.force : false;
      if (!s && this.style[e] === i) return this;
      var o = i;
      (!a || a.process !== false) && (o = this.options.jss.plugins.onChangeValue(i, e, this));
      var f = o == null || o === false, l = e in this.style;
      if (f && !l && !s) return this;
      var c = f && l;
      if (c ? delete this.style[e] : this.style[e] = o, this.renderable && this.renderer) return c ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, o), this;
      var d = this.options.sheet;
      return d && d.attached, this;
    }, n;
  }(), Te = function(n) {
    pt(t, n);
    function t(e, i, a) {
      var s;
      s = n.call(this, e, i, a) || this;
      var o = a.selector, f = a.scoped, l = a.sheet, c = a.generateId;
      return o ? s.selectorText = o : f !== false && (s.id = c(Ue(Ue(s)), l), s.selectorText = "." + ze(s.id)), s;
    }
    var r = t.prototype;
    return r.applyTo = function(i) {
      var a = this.renderer;
      if (a) {
        var s = this.toJSON();
        for (var o in s) a.setProperty(i, o, s[o]);
      }
      return this;
    }, r.toJSON = function() {
      var i = {};
      for (var a in this.style) {
        var s = this.style[a];
        typeof s != "object" ? i[a] = s : Array.isArray(s) && (i[a] = N(s));
      }
      return i;
    }, r.toString = function(i) {
      var a = this.options.sheet, s = a ? a.options.link : false, o = s ? m({}, i, {
        allowEmpty: true
      }) : i;
      return J(this.selectorText, this.style, o);
    }, mt(t, [
      {
        key: "selector",
        set: function(i) {
          if (i !== this.selectorText) {
            this.selectorText = i;
            var a = this.renderer, s = this.renderable;
            if (!(!s || !a)) {
              var o = a.setSelector(s, i);
              o || a.replaceRule(s, this);
            }
          }
        },
        get: function() {
          return this.selectorText;
        }
      }
    ]), t;
  }(yt), Bt = {
    onCreateRule: function(t, r, e) {
      return t[0] === "@" || e.parent && e.parent.type === "keyframes" ? null : new Te(t, r, e);
    }
  }, le = {
    indent: 1,
    children: true
  }, Ht = /@([\w-]+)/, Jt = function() {
    function n(r, e, i) {
      this.type = "conditional", this.isProcessed = false, this.key = r;
      var a = r.match(Ht);
      this.at = a ? a[1] : "unknown", this.query = i.name || "@" + this.at, this.options = i, this.rules = new re(m({}, i, {
        parent: this
      }));
      for (var s in e) this.rules.add(s, e[s]);
      this.rules.process();
    }
    var t = n.prototype;
    return t.getRule = function(e) {
      return this.rules.get(e);
    }, t.indexOf = function(e) {
      return this.rules.indexOf(e);
    }, t.addRule = function(e, i, a) {
      var s = this.rules.add(e, i, a);
      return s ? (this.options.jss.plugins.onProcessRule(s), s) : null;
    }, t.replaceRule = function(e, i, a) {
      var s = this.rules.replace(e, i, a);
      return s && this.options.jss.plugins.onProcessRule(s), s;
    }, t.toString = function(e) {
      e === void 0 && (e = le);
      var i = K(e), a = i.linebreak;
      if (e.indent == null && (e.indent = le.indent), e.children == null && (e.children = le.children), e.children === false) return this.query + " {}";
      var s = this.rules.toString(e);
      return s ? this.query + " {" + a + s + a + "}" : "";
    }, n;
  }(), Xt = /@container|@media|@supports\s+/, Zt = {
    onCreateRule: function(t, r, e) {
      return Xt.test(t) ? new Jt(t, r, e) : null;
    }
  }, ce = {
    indent: 1,
    children: true
  }, Qt = /@keyframes\s+([\w-]+)/, Ae = function() {
    function n(r, e, i) {
      this.type = "keyframes", this.at = "@keyframes", this.isProcessed = false;
      var a = r.match(Qt);
      a && a[1] ? this.name = a[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = i;
      var s = i.scoped, o = i.sheet, f = i.generateId;
      this.id = s === false ? this.name : ze(f(this, o)), this.rules = new re(m({}, i, {
        parent: this
      }));
      for (var l in e) this.rules.add(l, e[l], m({}, i, {
        parent: this
      }));
      this.rules.process();
    }
    var t = n.prototype;
    return t.toString = function(e) {
      e === void 0 && (e = ce);
      var i = K(e), a = i.linebreak;
      if (e.indent == null && (e.indent = ce.indent), e.children == null && (e.children = ce.children), e.children === false) return this.at + " " + this.id + " {}";
      var s = this.rules.toString(e);
      return s && (s = "" + a + s + a), this.at + " " + this.id + " {" + s + "}";
    }, n;
  }(), Yt = /@keyframes\s+/, er = /\$([\w-]+)/g, Me = function(t, r) {
    return typeof t == "string" ? t.replace(er, function(e, i) {
      return i in r ? r[i] : e;
    }) : t;
  }, He = function(t, r, e) {
    var i = t[r], a = Me(i, e);
    a !== i && (t[r] = a);
  }, tr = {
    onCreateRule: function(t, r, e) {
      return typeof t == "string" && Yt.test(t) ? new Ae(t, r, e) : null;
    },
    onProcessStyle: function(t, r, e) {
      return r.type !== "style" || !e || ("animation-name" in t && He(t, "animation-name", e.keyframes), "animation" in t && He(t, "animation", e.keyframes)), t;
    },
    onChangeValue: function(t, r, e) {
      var i = e.options.sheet;
      if (!i) return t;
      switch (r) {
        case "animation":
          return Me(t, i.keyframes);
        case "animation-name":
          return Me(t, i.keyframes);
        default:
          return t;
      }
    }
  }, rr = function(n) {
    pt(t, n);
    function t() {
      return n.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return r.toString = function(i) {
      var a = this.options.sheet, s = a ? a.options.link : false, o = s ? m({}, i, {
        allowEmpty: true
      }) : i;
      return J(this.key, this.style, o);
    }, t;
  }(yt), nr = {
    onCreateRule: function(t, r, e) {
      return e.parent && e.parent.type === "keyframes" ? new rr(t, r, e) : null;
    }
  }, ir = function() {
    function n(r, e, i) {
      this.type = "font-face", this.at = "@font-face", this.isProcessed = false, this.key = r, this.style = e, this.options = i;
    }
    var t = n.prototype;
    return t.toString = function(e) {
      var i = K(e), a = i.linebreak;
      if (Array.isArray(this.style)) {
        for (var s = "", o = 0; o < this.style.length; o++) s += J(this.at, this.style[o]), this.style[o + 1] && (s += a);
        return s;
      }
      return J(this.at, this.style, e);
    }, n;
  }(), ar = /@font-face/, sr = {
    onCreateRule: function(t, r, e) {
      return ar.test(t) ? new ir(t, r, e) : null;
    }
  }, or = function() {
    function n(r, e, i) {
      this.type = "viewport", this.at = "@viewport", this.isProcessed = false, this.key = r, this.style = e, this.options = i;
    }
    var t = n.prototype;
    return t.toString = function(e) {
      return J(this.key, this.style, e);
    }, n;
  }(), ur = {
    onCreateRule: function(t, r, e) {
      return t === "@viewport" || t === "@-ms-viewport" ? new or(t, r, e) : null;
    }
  }, fr = function() {
    function n(r, e, i) {
      this.type = "simple", this.isProcessed = false, this.key = r, this.value = e, this.options = i;
    }
    var t = n.prototype;
    return t.toString = function(e) {
      if (Array.isArray(this.value)) {
        for (var i = "", a = 0; a < this.value.length; a++) i += this.key + " " + this.value[a] + ";", this.value[a + 1] && (i += `
`);
        return i;
      }
      return this.key + " " + this.value + ";";
    }, n;
  }(), lr = {
    "@charset": true,
    "@import": true,
    "@namespace": true
  }, cr = {
    onCreateRule: function(t, r, e) {
      return t in lr ? new fr(t, r, e) : null;
    }
  }, Je = [
    Bt,
    Zt,
    tr,
    nr,
    sr,
    ur,
    cr
  ], dr = {
    process: true
  }, Xe = {
    force: true,
    process: true
  }, re = function() {
    function n(r) {
      this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = r, this.classes = r.classes, this.keyframes = r.keyframes;
    }
    var t = n.prototype;
    return t.add = function(e, i, a) {
      var s = this.options, o = s.parent, f = s.sheet, l = s.jss, c = s.Renderer, d = s.generateId, v = s.scoped, h = m({
        classes: this.classes,
        parent: o,
        sheet: f,
        jss: l,
        Renderer: c,
        generateId: d,
        scoped: v,
        name: e,
        keyframes: this.keyframes,
        selector: void 0
      }, a), p = e;
      e in this.raw && (p = e + "-d" + this.counter++), this.raw[p] = i, p in this.classes && (h.selector = "." + ze(this.classes[p]));
      var y = We(p, i, h);
      if (!y) return null;
      this.register(y);
      var x = h.index === void 0 ? this.index.length : h.index;
      return this.index.splice(x, 0, y), y;
    }, t.replace = function(e, i, a) {
      var s = this.get(e), o = this.index.indexOf(s);
      s && this.remove(s);
      var f = a;
      return o !== -1 && (f = m({}, a, {
        index: o
      })), this.add(e, i, f);
    }, t.get = function(e) {
      return this.map[e];
    }, t.remove = function(e) {
      this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
    }, t.indexOf = function(e) {
      return this.index.indexOf(e);
    }, t.process = function() {
      var e = this.options.jss.plugins;
      this.index.slice(0).forEach(e.onProcessRule, e);
    }, t.register = function(e) {
      this.map[e.key] = e, e instanceof Te ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof Ae && this.keyframes && (this.keyframes[e.name] = e.id);
    }, t.unregister = function(e) {
      delete this.map[e.key], e instanceof Te ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof Ae && delete this.keyframes[e.name];
    }, t.update = function() {
      var e, i, a;
      if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], a = arguments.length <= 2 ? void 0 : arguments[2]) : (i = arguments.length <= 0 ? void 0 : arguments[0], a = arguments.length <= 1 ? void 0 : arguments[1], e = null), e) this.updateOne(this.get(e), i, a);
      else for (var s = 0; s < this.index.length; s++) this.updateOne(this.index[s], i, a);
    }, t.updateOne = function(e, i, a) {
      a === void 0 && (a = dr);
      var s = this.options, o = s.jss.plugins, f = s.sheet;
      if (e.rules instanceof n) {
        e.rules.update(i, a);
        return;
      }
      var l = e.style;
      if (o.onUpdate(i, e, f, a), a.process && l && l !== e.style) {
        o.onProcessStyle(e.style, e, f);
        for (var c in e.style) {
          var d = e.style[c], v = l[c];
          d !== v && e.prop(c, d, Xe);
        }
        for (var h in l) {
          var p = e.style[h], y = l[h];
          p == null && p !== y && e.prop(h, null, Xe);
        }
      }
    }, t.toString = function(e) {
      for (var i = "", a = this.options.sheet, s = a ? a.options.link : false, o = K(e), f = o.linebreak, l = 0; l < this.index.length; l++) {
        var c = this.index[l], d = c.toString(e);
        !d && !s || (i && (i += f), i += d);
      }
      return i;
    }, n;
  }(), bt = function() {
    function n(r, e) {
      this.attached = false, this.deployed = false, this.classes = {}, this.keyframes = {}, this.options = m({}, e, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new re(this.options);
      for (var i in r) this.rules.add(i, r[i]);
      this.rules.process();
    }
    var t = n.prototype;
    return t.attach = function() {
      return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = true, this.deployed || this.deploy(), this);
    }, t.detach = function() {
      return this.attached ? (this.renderer && this.renderer.detach(), this.attached = false, this) : this;
    }, t.addRule = function(e, i, a) {
      var s = this.queue;
      this.attached && !s && (this.queue = []);
      var o = this.rules.add(e, i, a);
      return o ? (this.options.jss.plugins.onProcessRule(o), this.attached ? (this.deployed && (s ? s.push(o) : (this.insertRule(o), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), o) : (this.deployed = false, o)) : null;
    }, t.replaceRule = function(e, i, a) {
      var s = this.rules.get(e);
      if (!s) return this.addRule(e, i, a);
      var o = this.rules.replace(e, i, a);
      return o && this.options.jss.plugins.onProcessRule(o), this.attached ? (this.deployed && this.renderer && (o ? s.renderable && this.renderer.replaceRule(s.renderable, o) : this.renderer.deleteRule(s)), o) : (this.deployed = false, o);
    }, t.insertRule = function(e) {
      this.renderer && this.renderer.insertRule(e);
    }, t.addRules = function(e, i) {
      var a = [];
      for (var s in e) {
        var o = this.addRule(s, e[s], i);
        o && a.push(o);
      }
      return a;
    }, t.getRule = function(e) {
      return this.rules.get(e);
    }, t.deleteRule = function(e) {
      var i = typeof e == "object" ? e : this.rules.get(e);
      return !i || this.attached && !i.renderable ? false : (this.rules.remove(i), this.attached && i.renderable && this.renderer ? this.renderer.deleteRule(i.renderable) : true);
    }, t.indexOf = function(e) {
      return this.rules.indexOf(e);
    }, t.deploy = function() {
      return this.renderer && this.renderer.deploy(), this.deployed = true, this;
    }, t.update = function() {
      var e;
      return (e = this.rules).update.apply(e, arguments), this;
    }, t.updateOne = function(e, i, a) {
      return this.rules.updateOne(e, i, a), this;
    }, t.toString = function(e) {
      return this.rules.toString(e);
    }, n;
  }(), hr = function() {
    function n() {
      this.plugins = {
        internal: [],
        external: []
      }, this.registry = {};
    }
    var t = n.prototype;
    return t.onCreateRule = function(e, i, a) {
      for (var s = 0; s < this.registry.onCreateRule.length; s++) {
        var o = this.registry.onCreateRule[s](e, i, a);
        if (o) return o;
      }
      return null;
    }, t.onProcessRule = function(e) {
      if (!e.isProcessed) {
        for (var i = e.options.sheet, a = 0; a < this.registry.onProcessRule.length; a++) this.registry.onProcessRule[a](e, i);
        e.style && this.onProcessStyle(e.style, e, i), e.isProcessed = true;
      }
    }, t.onProcessStyle = function(e, i, a) {
      for (var s = 0; s < this.registry.onProcessStyle.length; s++) i.style = this.registry.onProcessStyle[s](i.style, i, a);
    }, t.onProcessSheet = function(e) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) this.registry.onProcessSheet[i](e);
    }, t.onUpdate = function(e, i, a, s) {
      for (var o = 0; o < this.registry.onUpdate.length; o++) this.registry.onUpdate[o](e, i, a, s);
    }, t.onChangeValue = function(e, i, a) {
      for (var s = e, o = 0; o < this.registry.onChangeValue.length; o++) s = this.registry.onChangeValue[o](s, i, a);
      return s;
    }, t.use = function(e, i) {
      i === void 0 && (i = {
        queue: "external"
      });
      var a = this.plugins[i.queue];
      a.indexOf(e) === -1 && (a.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(s, o) {
        for (var f in o) f in s && s[f].push(o[f]);
        return s;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      }));
    }, n;
  }(), vr = function() {
    function n() {
      this.registry = [];
    }
    var t = n.prototype;
    return t.add = function(e) {
      var i = this.registry, a = e.options.index;
      if (i.indexOf(e) === -1) {
        if (i.length === 0 || a >= this.index) {
          i.push(e);
          return;
        }
        for (var s = 0; s < i.length; s++) if (i[s].options.index > a) {
          i.splice(s, 0, e);
          return;
        }
      }
    }, t.reset = function() {
      this.registry = [];
    }, t.remove = function(e) {
      var i = this.registry.indexOf(e);
      this.registry.splice(i, 1);
    }, t.toString = function(e) {
      for (var i = e === void 0 ? {} : e, a = i.attached, s = _t(i, [
        "attached"
      ]), o = K(s), f = o.linebreak, l = "", c = 0; c < this.registry.length; c++) {
        var d = this.registry[c];
        a != null && d.attached !== a || (l && (l += f), l += d.toString(s));
      }
      return l;
    }, mt(n, [
      {
        key: "index",
        get: function() {
          return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
        }
      }
    ]), n;
  }(), B = new vr(), Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), Ee = "2f1acc6c3a606b082e5eef5e54414ffb";
  Ie[Ee] == null && (Ie[Ee] = 0);
  var Ze = Ie[Ee]++, Qe = function(t) {
    t === void 0 && (t = {});
    var r = 0, e = function(a, s) {
      r += 1;
      var o = "", f = "";
      return s && (s.options.classNamePrefix && (f = s.options.classNamePrefix), s.options.jss.id != null && (o = String(s.options.jss.id))), t.minify ? "" + (f || "c") + Ze + o + r : f + a.key + "-" + Ze + (o ? "-" + o : "") + "-" + r;
    };
    return e;
  }, xt = function(t) {
    var r;
    return function() {
      return r || (r = t()), r;
    };
  }, gr = function(t, r) {
    try {
      return t.attributeStyleMap ? t.attributeStyleMap.get(r) : t.style.getPropertyValue(r);
    } catch {
      return "";
    }
  }, pr = function(t, r, e) {
    try {
      var i = e;
      if (Array.isArray(e) && (i = N(e)), t.attributeStyleMap) t.attributeStyleMap.set(r, i);
      else {
        var a = i ? i.indexOf("!important") : -1, s = a > -1 ? i.substr(0, a - 1) : i;
        t.style.setProperty(r, s, a > -1 ? "important" : "");
      }
    } catch {
      return false;
    }
    return true;
  }, mr = function(t, r) {
    try {
      t.attributeStyleMap ? t.attributeStyleMap.delete(r) : t.style.removeProperty(r);
    } catch {
    }
  }, yr = function(t, r) {
    return t.selectorText = r, t.selectorText === r;
  }, Rt = xt(function() {
    return document.querySelector("head");
  });
  function br(n, t) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      if (e.attached && e.options.index > t.index && e.options.insertionPoint === t.insertionPoint) return e;
    }
    return null;
  }
  function xr(n, t) {
    for (var r = n.length - 1; r >= 0; r--) {
      var e = n[r];
      if (e.attached && e.options.insertionPoint === t.insertionPoint) return e;
    }
    return null;
  }
  function Rr(n) {
    for (var t = Rt(), r = 0; r < t.childNodes.length; r++) {
      var e = t.childNodes[r];
      if (e.nodeType === 8 && e.nodeValue.trim() === n) return e;
    }
    return null;
  }
  function Sr(n) {
    var t = B.registry;
    if (t.length > 0) {
      var r = br(t, n);
      if (r && r.renderer) return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element
      };
      if (r = xr(t, n), r && r.renderer) return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element.nextSibling
      };
    }
    var e = n.insertionPoint;
    if (e && typeof e == "string") {
      var i = Rr(e);
      if (i) return {
        parent: i.parentNode,
        node: i.nextSibling
      };
    }
    return false;
  }
  function wr(n, t) {
    var r = t.insertionPoint, e = Sr(t);
    if (e !== false && e.parent) {
      e.parent.insertBefore(n, e.node);
      return;
    }
    if (r && typeof r.nodeType == "number") {
      var i = r, a = i.parentNode;
      a && a.insertBefore(n, i.nextSibling);
      return;
    }
    Rt().appendChild(n);
  }
  var Pr = xt(function() {
    var n = document.querySelector('meta[property="csp-nonce"]');
    return n ? n.getAttribute("content") : null;
  }), Ye = function(t, r, e) {
    try {
      "insertRule" in t ? t.insertRule(r, e) : "appendRule" in t && t.appendRule(r);
    } catch {
      return false;
    }
    return t.cssRules[e];
  }, et = function(t, r) {
    var e = t.cssRules.length;
    return r === void 0 || r > e ? e : r;
  }, Cr = function() {
    var t = document.createElement("style");
    return t.textContent = `
`, t;
  }, kr = function() {
    function n(r) {
      this.getPropertyValue = gr, this.setProperty = pr, this.removeProperty = mr, this.setSelector = yr, this.hasInsertedRules = false, this.cssRules = [], r && B.add(r), this.sheet = r;
      var e = this.sheet ? this.sheet.options : {}, i = e.media, a = e.meta, s = e.element;
      this.element = s || Cr(), this.element.setAttribute("data-jss", ""), i && this.element.setAttribute("media", i), a && this.element.setAttribute("data-meta", a);
      var o = Pr();
      o && this.element.setAttribute("nonce", o);
    }
    var t = n.prototype;
    return t.attach = function() {
      if (!(this.element.parentNode || !this.sheet)) {
        wr(this.element, this.sheet.options);
        var e = !!(this.sheet && this.sheet.deployed);
        this.hasInsertedRules && e && (this.hasInsertedRules = false, this.deploy());
      }
    }, t.detach = function() {
      if (this.sheet) {
        var e = this.element.parentNode;
        e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
      }
    }, t.deploy = function() {
      var e = this.sheet;
      if (e) {
        if (e.options.link) {
          this.insertRules(e.rules);
          return;
        }
        this.element.textContent = `
` + e.toString() + `
`;
      }
    }, t.insertRules = function(e, i) {
      for (var a = 0; a < e.index.length; a++) this.insertRule(e.index[a], a, i);
    }, t.insertRule = function(e, i, a) {
      if (a === void 0 && (a = this.element.sheet), e.rules) {
        var s = e, o = a;
        if (e.type === "conditional" || e.type === "keyframes") {
          var f = et(a, i);
          if (o = Ye(a, s.toString({
            children: false
          }), f), o === false) return false;
          this.refCssRule(e, f, o);
        }
        return this.insertRules(s.rules, o), o;
      }
      var l = e.toString();
      if (!l) return false;
      var c = et(a, i), d = Ye(a, l, c);
      return d === false ? false : (this.hasInsertedRules = true, this.refCssRule(e, c, d), d);
    }, t.refCssRule = function(e, i, a) {
      e.renderable = a, e.options.parent instanceof bt && this.cssRules.splice(i, 0, a);
    }, t.deleteRule = function(e) {
      var i = this.element.sheet, a = this.indexOf(e);
      return a === -1 ? false : (i.deleteRule(a), this.cssRules.splice(a, 1), true);
    }, t.indexOf = function(e) {
      return this.cssRules.indexOf(e);
    }, t.replaceRule = function(e, i) {
      var a = this.indexOf(e);
      return a === -1 ? false : (this.element.sheet.deleteRule(a), this.cssRules.splice(a, 1), this.insertRule(i, a));
    }, t.getRules = function() {
      return this.element.sheet.cssRules;
    }, n;
  }(), Or = 0, jr = function() {
    function n(r) {
      this.id = Or++, this.version = "10.10.0", this.plugins = new hr(), this.options = {
        id: {
          minify: false
        },
        createGenerateId: Qe,
        Renderer: X ? kr : null,
        plugins: []
      }, this.generateId = Qe({
        minify: false
      });
      for (var e = 0; e < Je.length; e++) this.plugins.use(Je[e], {
        queue: "internal"
      });
      this.setup(r);
    }
    var t = n.prototype;
    return t.setup = function(e) {
      return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = m({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
    }, t.createStyleSheet = function(e, i) {
      i === void 0 && (i = {});
      var a = i, s = a.index;
      typeof s != "number" && (s = B.index === 0 ? 0 : B.index + 1);
      var o = new bt(e, m({}, i, {
        jss: this,
        generateId: i.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: s
      }));
      return this.plugins.onProcessSheet(o), o;
    }, t.removeStyleSheet = function(e) {
      return e.detach(), B.remove(e), this;
    }, t.createRule = function(e, i, a) {
      if (i === void 0 && (i = {}), a === void 0 && (a = {}), typeof e == "object") return this.createRule(void 0, e, i);
      var s = m({}, a, {
        name: e,
        jss: this,
        Renderer: this.options.Renderer
      });
      s.generateId || (s.generateId = this.generateId), s.classes || (s.classes = {}), s.keyframes || (s.keyframes = {});
      var o = We(e, i, s);
      return o && this.plugins.onProcessRule(o), o;
    }, t.use = function() {
      for (var e = this, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
      return a.forEach(function(o) {
        e.plugins.use(o);
      }), this;
    }, n;
  }(), St = function(t) {
    return new jr(t);
  }, Fe = typeof CSS == "object" && CSS != null && "number" in CSS;
  function wt(n) {
    var t = null;
    for (var r in n) {
      var e = n[r], i = typeof e;
      if (i === "function") t || (t = {}), t[r] = e;
      else if (i === "object" && e !== null && !Array.isArray(e)) {
        var a = wt(e);
        a && (t || (t = {}), t[r] = a);
      }
    }
    return t;
  }
  St();
  var Pt = Date.now(), de = "fnValues" + Pt, he = "fnStyle" + ++Pt, Tr = function() {
    return {
      onCreateRule: function(r, e, i) {
        if (typeof e != "function") return null;
        var a = We(r, {}, i);
        return a[he] = e, a;
      },
      onProcessStyle: function(r, e) {
        if (de in e || he in e) return r;
        var i = {};
        for (var a in r) {
          var s = r[a];
          typeof s == "function" && (delete r[a], i[a] = s);
        }
        return e[de] = i, r;
      },
      onUpdate: function(r, e, i, a) {
        var s = e, o = s[he];
        o && (s.style = o(r) || {});
        var f = s[de];
        if (f) for (var l in f) s.prop(l, f[l](r), a);
      }
    };
  }, A = "@global", $e = "@global ", Ar = function() {
    function n(r, e, i) {
      this.type = "global", this.at = A, this.isProcessed = false, this.key = r, this.options = i, this.rules = new re(m({}, i, {
        parent: this
      }));
      for (var a in e) this.rules.add(a, e[a]);
      this.rules.process();
    }
    var t = n.prototype;
    return t.getRule = function(e) {
      return this.rules.get(e);
    }, t.addRule = function(e, i, a) {
      var s = this.rules.add(e, i, a);
      return s && this.options.jss.plugins.onProcessRule(s), s;
    }, t.replaceRule = function(e, i, a) {
      var s = this.rules.replace(e, i, a);
      return s && this.options.jss.plugins.onProcessRule(s), s;
    }, t.indexOf = function(e) {
      return this.rules.indexOf(e);
    }, t.toString = function(e) {
      return this.rules.toString(e);
    }, n;
  }(), Mr = function() {
    function n(r, e, i) {
      this.type = "global", this.at = A, this.isProcessed = false, this.key = r, this.options = i;
      var a = r.substr($e.length);
      this.rule = i.jss.createRule(a, e, m({}, i, {
        parent: this
      }));
    }
    var t = n.prototype;
    return t.toString = function(e) {
      return this.rule ? this.rule.toString(e) : "";
    }, n;
  }(), Ir = /\s*,\s*/g;
  function Ct(n, t) {
    for (var r = n.split(Ir), e = "", i = 0; i < r.length; i++) e += t + " " + r[i].trim(), r[i + 1] && (e += ", ");
    return e;
  }
  function Er(n, t) {
    var r = n.options, e = n.style, i = e ? e[A] : null;
    if (i) {
      for (var a in i) t.addRule(a, i[a], m({}, r, {
        selector: Ct(a, n.selector)
      }));
      delete e[A];
    }
  }
  function $r(n, t) {
    var r = n.options, e = n.style;
    for (var i in e) if (!(i[0] !== "@" || i.substr(0, A.length) !== A)) {
      var a = Ct(i.substr(A.length), n.selector);
      t.addRule(a, e[i], m({}, r, {
        selector: a
      })), delete e[i];
    }
  }
  function Nr() {
    function n(r, e, i) {
      if (!r) return null;
      if (r === A) return new Ar(r, e, i);
      if (r[0] === "@" && r.substr(0, $e.length) === $e) return new Mr(r, e, i);
      var a = i.parent;
      return a && (a.type === "global" || a.options.parent && a.options.parent.type === "global") && (i.scoped = false), !i.selector && i.scoped === false && (i.selector = r), null;
    }
    function t(r, e) {
      r.type !== "style" || !e || (Er(r, e), $r(r, e));
    }
    return {
      onCreateRule: n,
      onProcessRule: t
    };
  }
  var tt = /\s*,\s*/g, _r = /&/g, Vr = /\$([\w-]+)/g;
  function Wr() {
    function n(i, a) {
      return function(s, o) {
        var f = i.getRule(o) || a && a.getRule(o);
        return f ? f.selector : o;
      };
    }
    function t(i, a) {
      for (var s = a.split(tt), o = i.split(tt), f = "", l = 0; l < s.length; l++) for (var c = s[l], d = 0; d < o.length; d++) {
        var v = o[d];
        f && (f += ", "), f += v.indexOf("&") !== -1 ? v.replace(_r, c) : c + " " + v;
      }
      return f;
    }
    function r(i, a, s) {
      if (s) return m({}, s, {
        index: s.index + 1
      });
      var o = i.options.nestingLevel;
      o = o === void 0 ? 1 : o + 1;
      var f = m({}, i.options, {
        nestingLevel: o,
        index: a.indexOf(i) + 1
      });
      return delete f.name, f;
    }
    function e(i, a, s) {
      if (a.type !== "style") return i;
      var o = a, f = o.options.parent, l, c;
      for (var d in i) {
        var v = d.indexOf("&") !== -1, h = d[0] === "@";
        if (!(!v && !h)) {
          if (l = r(o, f, l), v) {
            var p = t(d, o.selector);
            c || (c = n(f, s)), p = p.replace(Vr, c);
            var y = o.key + "-" + d;
            "replaceRule" in f ? f.replaceRule(y, i[d], m({}, l, {
              selector: p
            })) : f.addRule(y, i[d], m({}, l, {
              selector: p
            }));
          } else h && f.addRule(d, {}, l).addRule(o.key, i[d], {
            selector: o.selector
          });
          delete i[d];
        }
      }
      return i;
    }
    return {
      onProcessStyle: e
    };
  }
  var zr = /[A-Z]/g, Fr = /^ms-/, ve = {};
  function Gr(n) {
    return "-" + n.toLowerCase();
  }
  function kt(n) {
    if (ve.hasOwnProperty(n)) return ve[n];
    var t = n.replace(zr, Gr);
    return ve[n] = Fr.test(t) ? "-" + t : t;
  }
  function ee(n) {
    var t = {};
    for (var r in n) {
      var e = r.indexOf("--") === 0 ? r : kt(r);
      t[e] = n[r];
    }
    return n.fallbacks && (Array.isArray(n.fallbacks) ? t.fallbacks = n.fallbacks.map(ee) : t.fallbacks = ee(n.fallbacks)), t;
  }
  function Kr() {
    function n(r) {
      if (Array.isArray(r)) {
        for (var e = 0; e < r.length; e++) r[e] = ee(r[e]);
        return r;
      }
      return ee(r);
    }
    function t(r, e, i) {
      if (e.indexOf("--") === 0) return r;
      var a = kt(e);
      return e === a ? r : (i.prop(a, r), null);
    }
    return {
      onProcessStyle: n,
      onChangeValue: t
    };
  }
  var u = Fe && CSS ? CSS.px : "px", Q = Fe && CSS ? CSS.ms : "ms", W = Fe && CSS ? CSS.percent : "%", Lr = {
    "animation-delay": Q,
    "animation-duration": Q,
    "background-position": u,
    "background-position-x": u,
    "background-position-y": u,
    "background-size": u,
    border: u,
    "border-bottom": u,
    "border-bottom-left-radius": u,
    "border-bottom-right-radius": u,
    "border-bottom-width": u,
    "border-left": u,
    "border-left-width": u,
    "border-radius": u,
    "border-right": u,
    "border-right-width": u,
    "border-top": u,
    "border-top-left-radius": u,
    "border-top-right-radius": u,
    "border-top-width": u,
    "border-width": u,
    "border-block": u,
    "border-block-end": u,
    "border-block-end-width": u,
    "border-block-start": u,
    "border-block-start-width": u,
    "border-block-width": u,
    "border-inline": u,
    "border-inline-end": u,
    "border-inline-end-width": u,
    "border-inline-start": u,
    "border-inline-start-width": u,
    "border-inline-width": u,
    "border-start-start-radius": u,
    "border-start-end-radius": u,
    "border-end-start-radius": u,
    "border-end-end-radius": u,
    margin: u,
    "margin-bottom": u,
    "margin-left": u,
    "margin-right": u,
    "margin-top": u,
    "margin-block": u,
    "margin-block-end": u,
    "margin-block-start": u,
    "margin-inline": u,
    "margin-inline-end": u,
    "margin-inline-start": u,
    padding: u,
    "padding-bottom": u,
    "padding-left": u,
    "padding-right": u,
    "padding-top": u,
    "padding-block": u,
    "padding-block-end": u,
    "padding-block-start": u,
    "padding-inline": u,
    "padding-inline-end": u,
    "padding-inline-start": u,
    "mask-position-x": u,
    "mask-position-y": u,
    "mask-size": u,
    height: u,
    width: u,
    "min-height": u,
    "max-height": u,
    "min-width": u,
    "max-width": u,
    bottom: u,
    left: u,
    top: u,
    right: u,
    inset: u,
    "inset-block": u,
    "inset-block-end": u,
    "inset-block-start": u,
    "inset-inline": u,
    "inset-inline-end": u,
    "inset-inline-start": u,
    "box-shadow": u,
    "text-shadow": u,
    "column-gap": u,
    "column-rule": u,
    "column-rule-width": u,
    "column-width": u,
    "font-size": u,
    "font-size-delta": u,
    "letter-spacing": u,
    "text-decoration-thickness": u,
    "text-indent": u,
    "text-stroke": u,
    "text-stroke-width": u,
    "word-spacing": u,
    motion: u,
    "motion-offset": u,
    outline: u,
    "outline-offset": u,
    "outline-width": u,
    perspective: u,
    "perspective-origin-x": W,
    "perspective-origin-y": W,
    "transform-origin": W,
    "transform-origin-x": W,
    "transform-origin-y": W,
    "transform-origin-z": W,
    "transition-delay": Q,
    "transition-duration": Q,
    "vertical-align": u,
    "flex-basis": u,
    "shape-margin": u,
    size: u,
    gap: u,
    grid: u,
    "grid-gap": u,
    "row-gap": u,
    "grid-row-gap": u,
    "grid-column-gap": u,
    "grid-template-rows": u,
    "grid-template-columns": u,
    "grid-auto-rows": u,
    "grid-auto-columns": u,
    "box-shadow-x": u,
    "box-shadow-y": u,
    "box-shadow-blur": u,
    "box-shadow-spread": u,
    "font-line-height": u,
    "text-shadow-x": u,
    "text-shadow-y": u,
    "text-shadow-blur": u
  };
  function Ot(n) {
    var t = /(-[a-z])/g, r = function(s) {
      return s[1].toUpperCase();
    }, e = {};
    for (var i in n) e[i] = n[i], e[i.replace(t, r)] = n[i];
    return e;
  }
  var Ur = Ot(Lr);
  function H(n, t, r) {
    if (t == null) return t;
    if (Array.isArray(t)) for (var e = 0; e < t.length; e++) t[e] = H(n, t[e], r);
    else if (typeof t == "object") if (n === "fallbacks") for (var i in t) t[i] = H(i, t[i], r);
    else for (var a in t) t[a] = H(n + "-" + a, t[a], r);
    else if (typeof t == "number" && isNaN(t) === false) {
      var s = r[n] || Ur[n];
      return s && !(t === 0 && s === u) ? typeof s == "function" ? s(t).toString() : "" + t + s : t.toString();
    }
    return t;
  }
  function Dr(n) {
    n === void 0 && (n = {});
    var t = Ot(n);
    function r(i, a) {
      if (a.type !== "style") return i;
      for (var s in i) i[s] = H(s, i[s], t);
      return i;
    }
    function e(i, a) {
      return H(a, i, t);
    }
    return {
      onProcessStyle: r,
      onChangeValue: e
    };
  }
  var D = "", Ne = "", jt = "", Tt = "", qr = X && "ontouchstart" in document.documentElement;
  if (X) {
    var ge = {
      Moz: "-moz-",
      ms: "-ms-",
      O: "-o-",
      Webkit: "-webkit-"
    }, Br = document.createElement("p"), pe = Br.style, Hr = "Transform";
    for (var me in ge) if (me + Hr in pe) {
      D = me, Ne = ge[me];
      break;
    }
    D === "Webkit" && "msHyphens" in pe && (D = "ms", Ne = ge.ms, Tt = "edge"), D === "Webkit" && "-apple-trailing-word" in pe && (jt = "apple");
  }
  var g = {
    js: D,
    css: Ne,
    vendor: jt,
    browser: Tt,
    isTouch: qr
  };
  function Jr(n) {
    return n[1] === "-" || g.js === "ms" ? n : "@" + g.css + "keyframes" + n.substr(10);
  }
  var Xr = {
    noPrefill: [
      "appearance"
    ],
    supportedProperty: function(t) {
      return t !== "appearance" ? false : g.js === "ms" ? "-webkit-" + t : g.css + t;
    }
  }, Zr = {
    noPrefill: [
      "color-adjust"
    ],
    supportedProperty: function(t) {
      return t !== "color-adjust" ? false : g.js === "Webkit" ? g.css + "print-" + t : t;
    }
  }, Qr = /[-\s]+(.)?/g;
  function Yr(n, t) {
    return t ? t.toUpperCase() : "";
  }
  function Ge(n) {
    return n.replace(Qr, Yr);
  }
  function I(n) {
    return Ge("-" + n);
  }
  var en = {
    noPrefill: [
      "mask"
    ],
    supportedProperty: function(t, r) {
      if (!/^mask/.test(t)) return false;
      if (g.js === "Webkit") {
        var e = "mask-image";
        if (Ge(e) in r) return t;
        if (g.js + I(e) in r) return g.css + t;
      }
      return t;
    }
  }, tn = {
    noPrefill: [
      "text-orientation"
    ],
    supportedProperty: function(t) {
      return t !== "text-orientation" ? false : g.vendor === "apple" && !g.isTouch ? g.css + t : t;
    }
  }, rn = {
    noPrefill: [
      "transform"
    ],
    supportedProperty: function(t, r, e) {
      return t !== "transform" ? false : e.transform ? t : g.css + t;
    }
  }, nn = {
    noPrefill: [
      "transition"
    ],
    supportedProperty: function(t, r, e) {
      return t !== "transition" ? false : e.transition ? t : g.css + t;
    }
  }, an = {
    noPrefill: [
      "writing-mode"
    ],
    supportedProperty: function(t) {
      return t !== "writing-mode" ? false : g.js === "Webkit" || g.js === "ms" && g.browser !== "edge" ? g.css + t : t;
    }
  }, sn = {
    noPrefill: [
      "user-select"
    ],
    supportedProperty: function(t) {
      return t !== "user-select" ? false : g.js === "Moz" || g.js === "ms" || g.vendor === "apple" ? g.css + t : t;
    }
  }, on = {
    supportedProperty: function(t, r) {
      if (!/^break-/.test(t)) return false;
      if (g.js === "Webkit") {
        var e = "WebkitColumn" + I(t);
        return e in r ? g.css + "column-" + t : false;
      }
      if (g.js === "Moz") {
        var i = "page" + I(t);
        return i in r ? "page-" + t : false;
      }
      return false;
    }
  }, un = {
    supportedProperty: function(t, r) {
      if (!/^(border|margin|padding)-inline/.test(t)) return false;
      if (g.js === "Moz") return t;
      var e = t.replace("-inline", "");
      return g.js + I(e) in r ? g.css + e : false;
    }
  }, fn = {
    supportedProperty: function(t, r) {
      return Ge(t) in r ? t : false;
    }
  }, ln = {
    supportedProperty: function(t, r) {
      var e = I(t);
      return t[0] === "-" || t[0] === "-" && t[1] === "-" ? t : g.js + e in r ? g.css + t : g.js !== "Webkit" && "Webkit" + e in r ? "-webkit-" + t : false;
    }
  }, cn = {
    supportedProperty: function(t) {
      return t.substring(0, 11) !== "scroll-snap" ? false : g.js === "ms" ? "" + g.css + t : t;
    }
  }, dn = {
    supportedProperty: function(t) {
      return t !== "overscroll-behavior" ? false : g.js === "ms" ? g.css + "scroll-chaining" : t;
    }
  }, hn = {
    "flex-grow": "flex-positive",
    "flex-shrink": "flex-negative",
    "flex-basis": "flex-preferred-size",
    "justify-content": "flex-pack",
    order: "flex-order",
    "align-items": "flex-align",
    "align-content": "flex-line-pack"
  }, vn = {
    supportedProperty: function(t, r) {
      var e = hn[t];
      return e && g.js + I(e) in r ? g.css + e : false;
    }
  }, At = {
    flex: "box-flex",
    "flex-grow": "box-flex",
    "flex-direction": [
      "box-orient",
      "box-direction"
    ],
    order: "box-ordinal-group",
    "align-items": "box-align",
    "flex-flow": [
      "box-orient",
      "box-direction"
    ],
    "justify-content": "box-pack"
  }, gn = Object.keys(At), pn = function(t) {
    return g.css + t;
  }, mn = {
    supportedProperty: function(t, r, e) {
      var i = e.multiple;
      if (gn.indexOf(t) > -1) {
        var a = At[t];
        if (!Array.isArray(a)) return g.js + I(a) in r ? g.css + a : false;
        if (!i) return false;
        for (var s = 0; s < a.length; s++) if (!(g.js + I(a[0]) in r)) return false;
        return a.map(pn);
      }
      return false;
    }
  }, Mt = [
    Xr,
    Zr,
    en,
    tn,
    rn,
    nn,
    an,
    sn,
    on,
    un,
    fn,
    ln,
    cn,
    dn,
    vn,
    mn
  ], rt = Mt.filter(function(n) {
    return n.supportedProperty;
  }).map(function(n) {
    return n.supportedProperty;
  }), yn = Mt.filter(function(n) {
    return n.noPrefill;
  }).reduce(function(n, t) {
    return n.push.apply(n, Vt(t.noPrefill)), n;
  }, []), q, E = {};
  if (X) {
    q = document.createElement("p");
    var ye = window.getComputedStyle(document.documentElement, "");
    for (var be in ye) isNaN(be) || (E[ye[be]] = ye[be]);
    yn.forEach(function(n) {
      return delete E[n];
    });
  }
  function _e(n, t) {
    if (t === void 0 && (t = {}), !q) return n;
    if (E[n] != null) return E[n];
    (n === "transition" || n === "transform") && (t[n] = n in q.style);
    for (var r = 0; r < rt.length && (E[n] = rt[r](n, q.style, t), !E[n]); r++) ;
    try {
      q.style[n] = "";
    } catch {
      return false;
    }
    return E[n];
  }
  var z = {}, bn = {
    transition: 1,
    "transition-property": 1,
    "-webkit-transition": 1,
    "-webkit-transition-property": 1
  }, xn = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g, T;
  function Rn(n, t, r) {
    if (t === "var") return "var";
    if (t === "all") return "all";
    if (r === "all") return ", all";
    var e = t ? _e(t) : ", " + _e(r);
    return e || t || r;
  }
  X && (T = document.createElement("p"));
  function nt(n, t) {
    var r = t;
    if (!T || n === "content") return t;
    if (typeof r != "string" || !isNaN(parseInt(r, 10))) return r;
    var e = n + r;
    if (z[e] != null) return z[e];
    try {
      T.style[n] = r;
    } catch {
      return z[e] = false, false;
    }
    if (bn[n]) r = r.replace(xn, Rn);
    else if (T.style[n] === "" && (r = g.css + r, r === "-ms-flex" && (T.style[n] = "-ms-flexbox"), T.style[n] = r, T.style[n] === "")) return z[e] = false, false;
    return T.style[n] = "", z[e] = r, z[e];
  }
  function Sn() {
    function n(i) {
      if (i.type === "keyframes") {
        var a = i;
        a.at = Jr(a.at);
      }
    }
    function t(i) {
      for (var a in i) {
        var s = i[a];
        if (a === "fallbacks" && Array.isArray(s)) {
          i[a] = s.map(t);
          continue;
        }
        var o = false, f = _e(a);
        f && f !== a && (o = true);
        var l = false, c = nt(f, N(s));
        c && c !== s && (l = true), (o || l) && (o && delete i[a], i[f || a] = c || s);
      }
      return i;
    }
    function r(i, a) {
      return a.type !== "style" ? i : t(i);
    }
    function e(i, a) {
      return nt(a, N(i)) || i;
    }
    return {
      onProcessRule: n,
      onProcessStyle: r,
      onChangeValue: e
    };
  }
  function wn() {
    var n = function(r, e) {
      return r.length === e.length ? r > e ? 1 : -1 : r.length - e.length;
    };
    return {
      onProcessStyle: function(r, e) {
        if (e.type !== "style") return r;
        for (var i = {}, a = Object.keys(r).sort(n), s = 0; s < a.length; s++) i[a[s]] = r[a[s]];
        return i;
      }
    };
  }
  function Pn() {
    return {
      plugins: [
        Tr(),
        Nr(),
        Wr(),
        Kr(),
        Dr(),
        typeof window > "u" ? null : Sn(),
        wn()
      ]
    };
  }
  function It() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.baseClasses, r = n.newClasses;
    if (n.Component, !r) return t;
    var e = m({}, t);
    return Object.keys(r).forEach(function(i) {
      r[i] && (e[i] = "".concat(t[i], " ").concat(r[i]));
    }), e;
  }
  var F = {
    set: function(t, r, e, i) {
      var a = t.get(r);
      a || (a = /* @__PURE__ */ new Map(), t.set(r, a)), a.set(e, i);
    },
    get: function(t, r, e) {
      var i = t.get(r);
      return i ? i.get(e) : void 0;
    },
    delete: function(t, r, e) {
      var i = t.get(r);
      i.delete(e);
    }
  }, Cn = C.createContext(null);
  Et = function() {
    var n = C.useContext(Cn);
    return n;
  };
  var kn = St(Pn()), On = Lt(), jn = /* @__PURE__ */ new Map(), Tn = {
    disableGeneration: false,
    generateClassName: On,
    jss: kn,
    sheetsCache: null,
    sheetsManager: jn,
    sheetsRegistry: null
  }, An = C.createContext(Tn), it = -1e9;
  function Mn() {
    return it += 1, it;
  }
  var In = {};
  function En(n) {
    var t = typeof n == "function";
    return {
      create: function(e, i) {
        var a;
        try {
          a = t ? n(e) : n;
        } catch (f) {
          throw f;
        }
        if (!i || !e.overrides || !e.overrides[i]) return a;
        var s = e.overrides[i], o = m({}, a);
        return Object.keys(s).forEach(function(f) {
          o[f] = G(o[f], s[f]);
        }), o;
      },
      options: {}
    };
  }
  function $n(n, t, r) {
    var e = n.state, i = n.stylesOptions;
    if (i.disableGeneration) return t || {};
    e.cacheClasses || (e.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    });
    var a = false;
    return e.classes !== e.cacheClasses.lastJSS && (e.cacheClasses.lastJSS = e.classes, a = true), t !== e.cacheClasses.lastProp && (e.cacheClasses.lastProp = t, a = true), a && (e.cacheClasses.value = It({
      baseClasses: e.cacheClasses.lastJSS,
      newClasses: t,
      Component: r
    })), e.cacheClasses.value;
  }
  function Nn(n, t) {
    var r = n.state, e = n.theme, i = n.stylesOptions, a = n.stylesCreator, s = n.name;
    if (!i.disableGeneration) {
      var o = F.get(i.sheetsManager, a, e);
      o || (o = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null
      }, F.set(i.sheetsManager, a, e, o));
      var f = m({}, a.options, i, {
        theme: e,
        flip: typeof i.flip == "boolean" ? i.flip : e.direction === "rtl"
      });
      f.generateId = f.serverGenerateClassName || f.generateClassName;
      var l = i.sheetsRegistry;
      if (o.refs === 0) {
        var c;
        i.sheetsCache && (c = F.get(i.sheetsCache, a, e));
        var d = a.create(e, s);
        c || (c = i.jss.createStyleSheet(d, m({
          link: false
        }, f)), c.attach(), i.sheetsCache && F.set(i.sheetsCache, a, e, c)), l && l.add(c), o.staticSheet = c, o.dynamicStyles = wt(d);
      }
      if (o.dynamicStyles) {
        var v = i.jss.createStyleSheet(o.dynamicStyles, m({
          link: true
        }, f));
        v.update(t), v.attach(), r.dynamicSheet = v, r.classes = It({
          baseClasses: o.staticSheet.classes,
          newClasses: v.classes
        }), l && l.add(v);
      } else r.classes = o.staticSheet.classes;
      o.refs += 1;
    }
  }
  function _n(n, t) {
    var r = n.state;
    r.dynamicSheet && r.dynamicSheet.update(t);
  }
  function Vn(n) {
    var t = n.state, r = n.theme, e = n.stylesOptions, i = n.stylesCreator;
    if (!e.disableGeneration) {
      var a = F.get(e.sheetsManager, i, r);
      a.refs -= 1;
      var s = e.sheetsRegistry;
      a.refs === 0 && (F.delete(e.sheetsManager, i, r), e.jss.removeStyleSheet(a.staticSheet), s && s.remove(a.staticSheet)), t.dynamicSheet && (e.jss.removeStyleSheet(t.dynamicSheet), s && s.remove(t.dynamicSheet));
    }
  }
  function Wn(n, t) {
    var r = C.useRef([]), e, i = C.useMemo(function() {
      return {};
    }, t);
    r.current !== i && (r.current = i, e = n()), C.useEffect(function() {
      return function() {
        e && e();
      };
    }, [
      i
    ]);
  }
  function zn(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.name, e = t.classNamePrefix, i = t.Component, a = t.defaultTheme, s = a === void 0 ? In : a, o = M(t, [
      "name",
      "classNamePrefix",
      "Component",
      "defaultTheme"
    ]), f = En(n), l = r || e || "makeStyles";
    f.options = {
      index: Mn(),
      name: r,
      meta: l,
      classNamePrefix: l
    };
    var c = function() {
      var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = Et() || s, p = m({}, C.useContext(An), o), y = C.useRef(), x = C.useRef();
      Wn(function() {
        var S = {
          name: r,
          state: {},
          stylesCreator: f,
          stylesOptions: p,
          theme: h
        };
        return Nn(S, v), x.current = false, y.current = S, function() {
          Vn(S);
        };
      }, [
        h,
        f
      ]), C.useEffect(function() {
        x.current && _n(y.current, v), x.current = true;
      });
      var w = $n(y.current, v.classes, i);
      return w;
    };
    return c;
  }
  var Fn = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function(e) {
      var i = r.defaultTheme, a = r.withTheme, s = a === void 0 ? false : a, o = r.name, f = M(r, [
        "defaultTheme",
        "withTheme",
        "name"
      ]), l = o, c = zn(t, m({
        defaultTheme: i,
        Component: e,
        name: o || e.displayName,
        classNamePrefix: l
      }, f)), d = C.forwardRef(function(h, p) {
        h.classes;
        var y = h.innerRef, x = M(h, [
          "classes",
          "innerRef"
        ]), w = c(m({}, e.defaultProps, h)), S, k = x;
        return (typeof o == "string" || s) && (S = Et() || i, o && (k = Ut({
          theme: S,
          name: o,
          props: x
        })), s && !k.theme && (k.theme = S)), C.createElement(e, m({
          ref: y || p,
          classes: w
        }, k));
      });
      return Wt(d, e), d;
    };
  }, j = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ];
  function Gn(n) {
    var t = n.values, r = t === void 0 ? {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    } : t, e = n.unit, i = e === void 0 ? "px" : e, a = n.step, s = a === void 0 ? 5 : a, o = M(n, [
      "values",
      "unit",
      "step"
    ]);
    function f(h) {
      var p = typeof r[h] == "number" ? r[h] : h;
      return "@media (min-width:".concat(p).concat(i, ")");
    }
    function l(h) {
      var p = j.indexOf(h) + 1, y = r[j[p]];
      if (p === j.length) return f("xs");
      var x = typeof y == "number" && p > 0 ? y : h;
      return "@media (max-width:".concat(x - s / 100).concat(i, ")");
    }
    function c(h, p) {
      var y = j.indexOf(p);
      return y === j.length - 1 ? f(h) : "@media (min-width:".concat(typeof r[h] == "number" ? r[h] : h).concat(i, ") and ") + "(max-width:".concat((y !== -1 && typeof r[j[y + 1]] == "number" ? r[j[y + 1]] : p) - s / 100).concat(i, ")");
    }
    function d(h) {
      return c(h, h);
    }
    function v(h) {
      return r[h];
    }
    return m({
      keys: j,
      values: r,
      up: f,
      down: l,
      between: c,
      only: d,
      width: v
    }, o);
  }
  function Kn(n, t, r) {
    var e;
    return m({
      gutters: function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return m({
          paddingLeft: t(2),
          paddingRight: t(2)
        }, a, ue({}, n.up("sm"), m({
          paddingLeft: t(3),
          paddingRight: t(3)
        }, a[n.up("sm")])));
      },
      toolbar: (e = {
        minHeight: 56
      }, ue(e, "".concat(n.up("xs"), " and (orientation: landscape)"), {
        minHeight: 48
      }), ue(e, n.up("sm"), {
        minHeight: 64
      }), e)
    }, r);
  }
  var te = {
    black: "#000",
    white: "#fff"
  }, Ke = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161"
  }, xe = {
    300: "#7986cb",
    500: "#3f51b5",
    700: "#303f9f"
  }, Re = {
    A200: "#ff4081",
    A400: "#f50057",
    A700: "#c51162"
  }, Se = {
    300: "#e57373",
    500: "#f44336",
    700: "#d32f2f"
  }, we = {
    300: "#ffb74d",
    500: "#ff9800",
    700: "#f57c00"
  }, Pe = {
    300: "#64b5f6",
    500: "#2196f3",
    700: "#1976d2"
  }, Ce = {
    300: "#81c784",
    500: "#4caf50",
    700: "#388e3c"
  };
  function Le(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Math.min(Math.max(t, n), r);
  }
  function Ln(n) {
    n = n.substr(1);
    var t = new RegExp(".{1,".concat(n.length >= 6 ? 2 : 1, "}"), "g"), r = n.match(t);
    return r && r[0].length === 1 && (r = r.map(function(e) {
      return e + e;
    })), r ? "rgb".concat(r.length === 4 ? "a" : "", "(").concat(r.map(function(e, i) {
      return i < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3;
    }).join(", "), ")") : "";
  }
  function Un(n) {
    n = _(n);
    var t = n, r = t.values, e = r[0], i = r[1] / 100, a = r[2] / 100, s = i * Math.min(a, 1 - a), o = function(d) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (d + e / 30) % 12;
      return a - s * Math.max(Math.min(v - 3, 9 - v, 1), -1);
    }, f = "rgb", l = [
      Math.round(o(0) * 255),
      Math.round(o(8) * 255),
      Math.round(o(4) * 255)
    ];
    return n.type === "hsla" && (f += "a", l.push(r[3])), ne({
      type: f,
      values: l
    });
  }
  function _(n) {
    if (n.type) return n;
    if (n.charAt(0) === "#") return _(Ln(n));
    var t = n.indexOf("("), r = n.substring(0, t);
    if ([
      "rgb",
      "rgba",
      "hsl",
      "hsla"
    ].indexOf(r) === -1) throw new Error(Y(3, n));
    var e = n.substring(t + 1, n.length - 1).split(",");
    return e = e.map(function(i) {
      return parseFloat(i);
    }), {
      type: r,
      values: e
    };
  }
  function ne(n) {
    var t = n.type, r = n.values;
    return t.indexOf("rgb") !== -1 ? r = r.map(function(e, i) {
      return i < 3 ? parseInt(e, 10) : e;
    }) : t.indexOf("hsl") !== -1 && (r[1] = "".concat(r[1], "%"), r[2] = "".concat(r[2], "%")), "".concat(t, "(").concat(r.join(", "), ")");
  }
  function Dn(n, t) {
    var r = at(n), e = at(t);
    return (Math.max(r, e) + 0.05) / (Math.min(r, e) + 0.05);
  }
  function at(n) {
    n = _(n);
    var t = n.type === "hsl" ? _(Un(n)).values : n.values;
    return t = t.map(function(r) {
      return r /= 255, r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    }), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  }
  mi = function(n, t) {
    return n = _(n), t = Le(t), (n.type === "rgb" || n.type === "hsl") && (n.type += "a"), n.values[3] = t, ne(n);
  };
  function qn(n, t) {
    if (n = _(n), t = Le(t), n.type.indexOf("hsl") !== -1) n.values[2] *= 1 - t;
    else if (n.type.indexOf("rgb") !== -1) for (var r = 0; r < 3; r += 1) n.values[r] *= 1 - t;
    return ne(n);
  }
  function Bn(n, t) {
    if (n = _(n), t = Le(t), n.type.indexOf("hsl") !== -1) n.values[2] += (100 - n.values[2]) * t;
    else if (n.type.indexOf("rgb") !== -1) for (var r = 0; r < 3; r += 1) n.values[r] += (255 - n.values[r]) * t;
    return ne(n);
  }
  var st = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: te.white,
      default: Ke[50]
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  }, ke = {
    text: {
      primary: te.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: Ke[800],
      default: "#303030"
    },
    action: {
      active: te.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
  function ot(n, t, r, e) {
    var i = e.light || e, a = e.dark || e * 1.5;
    n[t] || (n.hasOwnProperty(r) ? n[t] = n[r] : t === "light" ? n.light = Bn(n.main, i) : t === "dark" && (n.dark = qn(n.main, a)));
  }
  function Hn(n) {
    var t = n.primary, r = t === void 0 ? {
      light: xe[300],
      main: xe[500],
      dark: xe[700]
    } : t, e = n.secondary, i = e === void 0 ? {
      light: Re.A200,
      main: Re.A400,
      dark: Re.A700
    } : e, a = n.error, s = a === void 0 ? {
      light: Se[300],
      main: Se[500],
      dark: Se[700]
    } : a, o = n.warning, f = o === void 0 ? {
      light: we[300],
      main: we[500],
      dark: we[700]
    } : o, l = n.info, c = l === void 0 ? {
      light: Pe[300],
      main: Pe[500],
      dark: Pe[700]
    } : l, d = n.success, v = d === void 0 ? {
      light: Ce[300],
      main: Ce[500],
      dark: Ce[700]
    } : d, h = n.type, p = h === void 0 ? "light" : h, y = n.contrastThreshold, x = y === void 0 ? 3 : y, w = n.tonalOffset, S = w === void 0 ? 0.2 : w, k = M(n, [
      "primary",
      "secondary",
      "error",
      "warning",
      "info",
      "success",
      "type",
      "contrastThreshold",
      "tonalOffset"
    ]);
    function Z(L) {
      var R = Dn(L, ke.text.primary) >= x ? ke.text.primary : st.text.primary;
      return R;
    }
    var O = function(R) {
      var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500, se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300, oe = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
      if (R = m({}, R), !R.main && R[V] && (R.main = R[V]), !R.main) throw new Error(Y(4, V));
      if (typeof R.main != "string") throw new Error(Y(5, JSON.stringify(R.main)));
      return ot(R, "light", se, S), ot(R, "dark", oe, S), R.contrastText || (R.contrastText = Z(R.main)), R;
    }, P = {
      dark: ke,
      light: st
    }, ae = G(m({
      common: te,
      type: p,
      primary: O(r),
      secondary: O(i, "A400", "A200", "A700"),
      error: O(s),
      warning: O(f),
      info: O(c),
      success: O(v),
      grey: Ke,
      contrastThreshold: x,
      getContrastText: Z,
      augmentColor: O,
      tonalOffset: S
    }, P[p]), k);
    return ae;
  }
  function ut(n) {
    return Math.round(n * 1e5) / 1e5;
  }
  var ft = {
    textTransform: "uppercase"
  }, lt = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Jn(n, t) {
    var r = typeof t == "function" ? t(n) : t, e = r.fontFamily, i = e === void 0 ? lt : e, a = r.fontSize, s = a === void 0 ? 14 : a, o = r.fontWeightLight, f = o === void 0 ? 300 : o, l = r.fontWeightRegular, c = l === void 0 ? 400 : l, d = r.fontWeightMedium, v = d === void 0 ? 500 : d, h = r.fontWeightBold, p = h === void 0 ? 700 : h, y = r.htmlFontSize, x = y === void 0 ? 16 : y, w = r.allVariants, S = r.pxToRem, k = M(r, [
      "fontFamily",
      "fontSize",
      "fontWeightLight",
      "fontWeightRegular",
      "fontWeightMedium",
      "fontWeightBold",
      "htmlFontSize",
      "allVariants",
      "pxToRem"
    ]), Z = s / 14, O = S || function(L) {
      return "".concat(L / x * Z, "rem");
    }, P = function(R, V, se, oe, $t) {
      return m({
        fontFamily: i,
        fontWeight: R,
        fontSize: O(V),
        lineHeight: se
      }, i === lt ? {
        letterSpacing: "".concat(ut(oe / V), "em")
      } : {}, $t, w);
    }, ae = {
      h1: P(f, 96, 1.167, -1.5),
      h2: P(f, 60, 1.2, -0.5),
      h3: P(c, 48, 1.167, 0),
      h4: P(c, 34, 1.235, 0.25),
      h5: P(c, 24, 1.334, 0),
      h6: P(v, 20, 1.6, 0.15),
      subtitle1: P(c, 16, 1.75, 0.15),
      subtitle2: P(v, 14, 1.57, 0.1),
      body1: P(c, 16, 1.5, 0.15),
      body2: P(c, 14, 1.43, 0.15),
      button: P(v, 14, 1.75, 0.4, ft),
      caption: P(c, 12, 1.66, 0.4),
      overline: P(c, 12, 2.66, 1, ft)
    };
    return G(m({
      htmlFontSize: x,
      pxToRem: O,
      round: ut,
      fontFamily: i,
      fontSize: s,
      fontWeightLight: f,
      fontWeightRegular: c,
      fontWeightMedium: v,
      fontWeightBold: p
    }, ae), k, {
      clone: false
    });
  }
  var Xn = 0.2, Zn = 0.14, Qn = 0.12;
  function b() {
    return [
      "".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(Xn, ")"),
      "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(Zn, ")"),
      "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(Qn, ")")
    ].join(",");
  }
  var Yn = [
    "none",
    b(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    b(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    b(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    b(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    b(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    b(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    b(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    b(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    b(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    b(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    b(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    b(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    b(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    b(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    b(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    b(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    b(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    b(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    b(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    b(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    b(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    b(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    b(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    b(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ], ei = {
    borderRadius: 4
  };
  function ti(n) {
    var t = n.spacing || 8;
    return typeof t == "number" ? function(r) {
      return t * r;
    } : Array.isArray(t) ? function(r) {
      return t[r];
    } : typeof t == "function" ? t : function() {
    };
  }
  function ri() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
    if (n.mui) return n;
    var t = ti({
      spacing: n
    }), r = function() {
      for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
      return a.length === 0 ? t(1) : a.length === 1 ? t(a[0]) : a.map(function(o) {
        if (typeof o == "string") return o;
        var f = t(o);
        return typeof f == "number" ? "".concat(f, "px") : f;
      }).join(" ");
    };
    return Object.defineProperty(r, "unit", {
      get: function() {
        return n;
      }
    }), r.mui = true, r;
  }
  var ct = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, dt = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function ht(n) {
    return "".concat(Math.round(n), "ms");
  }
  const ni = {
    easing: ct,
    duration: dt,
    create: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
        "all"
      ], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = r.duration, i = e === void 0 ? dt.standard : e, a = r.easing, s = a === void 0 ? ct.easeInOut : a, o = r.delay, f = o === void 0 ? 0 : o;
      return M(r, [
        "duration",
        "easing",
        "delay"
      ]), (Array.isArray(t) ? t : [
        t
      ]).map(function(l) {
        return "".concat(l, " ").concat(typeof i == "string" ? i : ht(i), " ").concat(s, " ").concat(typeof f == "string" ? f : ht(f));
      }).join(",");
    },
    getAutoHeightDuration: function(t) {
      if (!t) return 0;
      var r = t / 36;
      return Math.round((4 + 15 * Math.pow(r, 0.25) + r / 5) * 10);
    }
  };
  var ii = {
    mobileStepper: 1e3,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function ai() {
    for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.breakpoints, r = t === void 0 ? {} : t, e = n.mixins, i = e === void 0 ? {} : e, a = n.palette, s = a === void 0 ? {} : a, o = n.spacing, f = n.typography, l = f === void 0 ? {} : f, c = M(n, [
      "breakpoints",
      "mixins",
      "palette",
      "spacing",
      "typography"
    ]), d = Hn(s), v = Gn(r), h = ri(o), p = G({
      breakpoints: v,
      direction: "ltr",
      mixins: Kn(v, h, i),
      overrides: {},
      palette: d,
      props: {},
      shadows: Yn,
      typography: Jn(d, l),
      spacing: h,
      shape: ei,
      transitions: ni,
      zIndex: ii
    }, c), y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++) x[w - 1] = arguments[w];
    return p = x.reduce(function(S, k) {
      return G(S, k);
    }, p), p;
  }
  si = ai();
  yi = function(n, t) {
    return Fn(n, m({
      defaultTheme: si
    }, t));
  };
  vt = function(n, t) {
    typeof n == "function" ? n(t) : n && (n.current = t);
  };
  bi = function(n) {
    var t = n.controlled, r = n.default;
    n.name, n.state;
    var e = $.useRef(t !== void 0), i = e.current, a = $.useState(r), s = a[0], o = a[1], f = i ? t : s, l = $.useCallback(function(c) {
      i || o(c);
    }, []);
    return [
      f,
      l
    ];
  };
  xi = function(n, t) {
    return $.useMemo(function() {
      return n == null && t == null ? null : function(r) {
        vt(n, r), vt(t, r);
      };
    }, [
      n,
      t
    ]);
  };
  Ri = function(n) {
    var t = $.useState(n), r = t[0], e = t[1], i = n || r;
    return $.useEffect(function() {
      r == null && e("mui-".concat(Math.round(Math.random() * 1e5)));
    }, [
      r
    ]), i;
  };
  var ie = true, Ve = false, gt = null, oi = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    "datetime-local": true
  };
  function ui(n) {
    var t = n.type, r = n.tagName;
    return !!(r === "INPUT" && oi[t] && !n.readOnly || r === "TEXTAREA" && !n.readOnly || n.isContentEditable);
  }
  function fi(n) {
    n.metaKey || n.altKey || n.ctrlKey || (ie = true);
  }
  function Oe() {
    ie = false;
  }
  function li() {
    this.visibilityState === "hidden" && Ve && (ie = true);
  }
  function ci(n) {
    n.addEventListener("keydown", fi, true), n.addEventListener("mousedown", Oe, true), n.addEventListener("pointerdown", Oe, true), n.addEventListener("touchstart", Oe, true), n.addEventListener("visibilitychange", li, true);
  }
  function di(n) {
    var t = n.target;
    try {
      return t.matches(":focus-visible");
    } catch {
    }
    return ie || ui(t);
  }
  function hi() {
    Ve = true, window.clearTimeout(gt), gt = window.setTimeout(function() {
      Ve = false;
    }, 100);
  }
  Si = function() {
    var n = $.useCallback(function(t) {
      var r = zt.findDOMNode(t);
      r != null && ci(r.ownerDocument);
    }, []);
    return {
      isFocusVisible: di,
      onBlurVisible: hi,
      ref: n
    };
  };
});
export {
  __tla,
  xi as a,
  bi as b,
  pi as c,
  si as d,
  Ri as e,
  Si as f,
  G as g,
  gi as h,
  mi as i,
  vt as s,
  Et as u,
  yi as w
};
