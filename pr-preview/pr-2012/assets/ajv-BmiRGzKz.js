import { eH as ms, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { u as ps } from "./ucs2length-xALg2LS9.js";
let du;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function ys(e, t) {
    for (var r = 0; r < t.length; r++) {
      const n = t[r];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const s in n) if (s !== "default" && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(n, s);
          a && Object.defineProperty(e, s, a.get ? a : {
            enumerable: true,
            get: () => n[s]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var Ht = {
    exports: {}
  }, $n = {}, re = {}, Te = {}, Qe = {}, D = {}, Xe = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(_) {
        if (super(), !e.IDENTIFIER.test(_)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = _;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return {
          [this.str]: 1
        };
      }
    }
    e.Name = r;
    class n extends t {
      constructor(_) {
        super(), this._items = typeof _ == "string" ? [
          _
        ] : _;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return false;
        const _ = this._items[0];
        return _ === "" || _ === '""';
      }
      get str() {
        var _;
        return (_ = this._str) !== null && _ !== void 0 ? _ : this._str = this._items.reduce((P, j) => `${P}${j}`, "");
      }
      get names() {
        var _;
        return (_ = this._names) !== null && _ !== void 0 ? _ : this._names = this._items.reduce((P, j) => (j instanceof r && (P[j.str] = (P[j.str] || 0) + 1), P), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function s(d, ..._) {
      const P = [
        d[0]
      ];
      let j = 0;
      for (; j < _.length; ) c(P, _[j]), P.push(d[++j]);
      return new n(P);
    }
    e._ = s;
    const a = new n("+");
    function i(d, ..._) {
      const P = [
        b(d[0])
      ];
      let j = 0;
      for (; j < _.length; ) P.push(a), c(P, _[j]), P.push(a, b(d[++j]));
      return f(P), new n(P);
    }
    e.str = i;
    function c(d, _) {
      _ instanceof n ? d.push(..._._items) : _ instanceof r ? d.push(_) : d.push(p(_));
    }
    e.addCodeArg = c;
    function f(d) {
      let _ = 1;
      for (; _ < d.length - 1; ) {
        if (d[_] === a) {
          const P = l(d[_ - 1], d[_ + 1]);
          if (P !== void 0) {
            d.splice(_ - 1, 3, P);
            continue;
          }
          d[_++] = "+";
        }
        _++;
      }
    }
    function l(d, _) {
      if (_ === '""') return d;
      if (d === '""') return _;
      if (typeof d == "string") return _ instanceof r || d[d.length - 1] !== '"' ? void 0 : typeof _ != "string" ? `${d.slice(0, -1)}${_}"` : _[0] === '"' ? d.slice(0, -1) + _.slice(1) : void 0;
      if (typeof _ == "string" && _[0] === '"' && !(d instanceof r)) return `"${d}${_.slice(1)}`;
    }
    function h(d, _) {
      return _.emptyStr() ? d : d.emptyStr() ? _ : i`${d}${_}`;
    }
    e.strConcat = h;
    function p(d) {
      return typeof d == "number" || typeof d == "boolean" || d === null ? d : b(Array.isArray(d) ? d.join(",") : d);
    }
    function S(d) {
      return new n(b(d));
    }
    e.stringify = S;
    function b(d) {
      return JSON.stringify(d).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function g(d) {
      return typeof d == "string" && e.IDENTIFIER.test(d) ? new n(`.${d}`) : s`[${d}]`;
    }
    e.getProperty = g;
    function w(d) {
      if (typeof d == "string" && e.IDENTIFIER.test(d)) return new n(`${d}`);
      throw new Error(`CodeGen: invalid export name: ${d}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function y(d) {
      return new n(d.toString());
    }
    e.regexpCode = y;
  })(Xe);
  var Gt = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = Xe;
    class r extends Error {
      constructor(l) {
        super(`CodeGen: "code" for ${l} not defined`), this.value = l.value;
      }
    }
    var n;
    (function(f) {
      f[f.Started = 0] = "Started", f[f.Completed = 1] = "Completed";
    })(n || (e.UsedValueState = n = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class s {
      constructor({ prefixes: l, parent: h } = {}) {
        this._names = {}, this._prefixes = l, this._parent = h;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const h = this._names[l] || this._nameGroup(l);
        return `${l}${h.index++}`;
      }
      _nameGroup(l) {
        var h, p;
        if (!((p = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || p === void 0) && p.has(l) || this._prefixes && !this._prefixes.has(l)) throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = {
          prefix: l,
          index: 0
        };
      }
    }
    e.Scope = s;
    class a extends t.Name {
      constructor(l, h) {
        super(h), this.prefix = l;
      }
      setValue(l, { property: h, itemIndex: p }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(h)}[${p}]`;
      }
    }
    e.ValueScopeName = a;
    const i = (0, t._)`\n`;
    class c extends s {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = {
          ...l,
          _n: l.lines ? i : t.nil
        };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new a(l, this._newName(l));
      }
      value(l, h) {
        var p;
        if (h.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
        const S = this.toName(l), { prefix: b } = S, g = (p = h.key) !== null && p !== void 0 ? p : h.ref;
        let w = this._values[b];
        if (w) {
          const _ = w.get(g);
          if (_) return _;
        } else w = this._values[b] = /* @__PURE__ */ new Map();
        w.set(g, S);
        const y = this._scope[b] || (this._scope[b] = []), d = y.length;
        return y[d] = h.ref, S.setValue(h, {
          property: b,
          itemIndex: d
        }), S;
      }
      getValue(l, h) {
        const p = this._values[l];
        if (p) return p.get(h);
      }
      scopeRefs(l, h = this._values) {
        return this._reduceValues(h, (p) => {
          if (p.scopePath === void 0) throw new Error(`CodeGen: name "${p}" has no value`);
          return (0, t._)`${l}${p.scopePath}`;
        });
      }
      scopeCode(l = this._values, h, p) {
        return this._reduceValues(l, (S) => {
          if (S.value === void 0) throw new Error(`CodeGen: name "${S}" has no value`);
          return S.value.code;
        }, h, p);
      }
      _reduceValues(l, h, p = {}, S) {
        let b = t.nil;
        for (const g in l) {
          const w = l[g];
          if (!w) continue;
          const y = p[g] = p[g] || /* @__PURE__ */ new Map();
          w.forEach((d) => {
            if (y.has(d)) return;
            y.set(d, n.Started);
            let _ = h(d);
            if (_) {
              const P = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${P} ${d} = ${_};${this.opts._n}`;
            } else if (_ = S == null ? void 0 : S(d)) b = (0, t._)`${b}${_}${this.opts._n}`;
            else throw new r(d);
            y.set(d, n.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = c;
  })(Gt);
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = Xe, r = Gt;
    var n = Xe;
    Object.defineProperty(e, "_", {
      enumerable: true,
      get: function() {
        return n._;
      }
    }), Object.defineProperty(e, "str", {
      enumerable: true,
      get: function() {
        return n.str;
      }
    }), Object.defineProperty(e, "strConcat", {
      enumerable: true,
      get: function() {
        return n.strConcat;
      }
    }), Object.defineProperty(e, "nil", {
      enumerable: true,
      get: function() {
        return n.nil;
      }
    }), Object.defineProperty(e, "getProperty", {
      enumerable: true,
      get: function() {
        return n.getProperty;
      }
    }), Object.defineProperty(e, "stringify", {
      enumerable: true,
      get: function() {
        return n.stringify;
      }
    }), Object.defineProperty(e, "regexpCode", {
      enumerable: true,
      get: function() {
        return n.regexpCode;
      }
    }), Object.defineProperty(e, "Name", {
      enumerable: true,
      get: function() {
        return n.Name;
      }
    });
    var s = Gt;
    Object.defineProperty(e, "Scope", {
      enumerable: true,
      get: function() {
        return s.Scope;
      }
    }), Object.defineProperty(e, "ValueScope", {
      enumerable: true,
      get: function() {
        return s.ValueScope;
      }
    }), Object.defineProperty(e, "ValueScopeName", {
      enumerable: true,
      get: function() {
        return s.ValueScopeName;
      }
    }), Object.defineProperty(e, "varKinds", {
      enumerable: true,
      get: function() {
        return s.varKinds;
      }
    }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class a {
      optimizeNodes() {
        return this;
      }
      optimizeNames(o, u) {
        return this;
      }
    }
    class i extends a {
      constructor(o, u, v) {
        super(), this.varKind = o, this.name = u, this.rhs = v;
      }
      render({ es5: o, _n: u }) {
        const v = o ? r.varKinds.var : this.varKind, R = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${v} ${this.name}${R};` + u;
      }
      optimizeNames(o, u) {
        if (o[this.name.str]) return this.rhs && (this.rhs = he(this.rhs, o, u)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class c extends a {
      constructor(o, u, v) {
        super(), this.lhs = o, this.rhs = u, this.sideEffects = v;
      }
      render({ _n: o }) {
        return `${this.lhs} = ${this.rhs};` + o;
      }
      optimizeNames(o, u) {
        if (!(this.lhs instanceof t.Name && !o[this.lhs.str] && !this.sideEffects)) return this.rhs = he(this.rhs, o, u), this;
      }
      get names() {
        const o = this.lhs instanceof t.Name ? {} : {
          ...this.lhs.names
        };
        return Pe(o, this.rhs);
      }
    }
    class f extends c {
      constructor(o, u, v, R) {
        super(o, v, R), this.op = u;
      }
      render({ _n: o }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + o;
      }
    }
    class l extends a {
      constructor(o) {
        super(), this.label = o, this.names = {};
      }
      render({ _n: o }) {
        return `${this.label}:` + o;
      }
    }
    class h extends a {
      constructor(o) {
        super(), this.label = o, this.names = {};
      }
      render({ _n: o }) {
        return `break${this.label ? ` ${this.label}` : ""};` + o;
      }
    }
    class p extends a {
      constructor(o) {
        super(), this.error = o;
      }
      render({ _n: o }) {
        return `throw ${this.error};` + o;
      }
      get names() {
        return this.error.names;
      }
    }
    class S extends a {
      constructor(o) {
        super(), this.code = o;
      }
      render({ _n: o }) {
        return `${this.code};` + o;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(o, u) {
        return this.code = he(this.code, o, u), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class b extends a {
      constructor(o = []) {
        super(), this.nodes = o;
      }
      render(o) {
        return this.nodes.reduce((u, v) => u + v.render(o), "");
      }
      optimizeNodes() {
        const { nodes: o } = this;
        let u = o.length;
        for (; u--; ) {
          const v = o[u].optimizeNodes();
          Array.isArray(v) ? o.splice(u, 1, ...v) : v ? o[u] = v : o.splice(u, 1);
        }
        return o.length > 0 ? this : void 0;
      }
      optimizeNames(o, u) {
        const { nodes: v } = this;
        let R = v.length;
        for (; R--; ) {
          const T = v[R];
          T.optimizeNames(o, u) || (qe(o, T.names), v.splice(R, 1));
        }
        return v.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((o, u) => ce(o, u.names), {});
      }
    }
    class g extends b {
      render(o) {
        return "{" + o._n + super.render(o) + "}" + o._n;
      }
    }
    class w extends b {
    }
    class y extends g {
    }
    y.kind = "else";
    class d extends g {
      constructor(o, u) {
        super(u), this.condition = o;
      }
      render(o) {
        let u = `if(${this.condition})` + super.render(o);
        return this.else && (u += "else " + this.else.render(o)), u;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const o = this.condition;
        if (o === true) return this.nodes;
        let u = this.else;
        if (u) {
          const v = u.optimizeNodes();
          u = this.else = Array.isArray(v) ? new y(v) : v;
        }
        if (u) return o === false ? u instanceof d ? u : u.nodes : this.nodes.length ? this : new d(xe(o), u instanceof d ? [
          u
        ] : u.nodes);
        if (!(o === false || !this.nodes.length)) return this;
      }
      optimizeNames(o, u) {
        var v;
        if (this.else = (v = this.else) === null || v === void 0 ? void 0 : v.optimizeNames(o, u), !!(super.optimizeNames(o, u) || this.else)) return this.condition = he(this.condition, o, u), this;
      }
      get names() {
        const o = super.names;
        return Pe(o, this.condition), this.else && ce(o, this.else.names), o;
      }
    }
    d.kind = "if";
    class _ extends g {
    }
    _.kind = "for";
    class P extends _ {
      constructor(o) {
        super(), this.iteration = o;
      }
      render(o) {
        return `for(${this.iteration})` + super.render(o);
      }
      optimizeNames(o, u) {
        if (super.optimizeNames(o, u)) return this.iteration = he(this.iteration, o, u), this;
      }
      get names() {
        return ce(super.names, this.iteration.names);
      }
    }
    class j extends _ {
      constructor(o, u, v, R) {
        super(), this.varKind = o, this.name = u, this.from = v, this.to = R;
      }
      render(o) {
        const u = o.es5 ? r.varKinds.var : this.varKind, { name: v, from: R, to: T } = this;
        return `for(${u} ${v}=${R}; ${v}<${T}; ${v}++)` + super.render(o);
      }
      get names() {
        const o = Pe(super.names, this.from);
        return Pe(o, this.to);
      }
    }
    class O extends _ {
      constructor(o, u, v, R) {
        super(), this.loop = o, this.varKind = u, this.name = v, this.iterable = R;
      }
      render(o) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(o);
      }
      optimizeNames(o, u) {
        if (super.optimizeNames(o, u)) return this.iterable = he(this.iterable, o, u), this;
      }
      get names() {
        return ce(super.names, this.iterable.names);
      }
    }
    class U extends g {
      constructor(o, u, v) {
        super(), this.name = o, this.args = u, this.async = v;
      }
      render(o) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(o);
      }
    }
    U.kind = "func";
    class L extends b {
      render(o) {
        return "return " + super.render(o);
      }
    }
    L.kind = "return";
    class ie extends g {
      render(o) {
        let u = "try" + super.render(o);
        return this.catch && (u += this.catch.render(o)), this.finally && (u += this.finally.render(o)), u;
      }
      optimizeNodes() {
        var o, u;
        return super.optimizeNodes(), (o = this.catch) === null || o === void 0 || o.optimizeNodes(), (u = this.finally) === null || u === void 0 || u.optimizeNodes(), this;
      }
      optimizeNames(o, u) {
        var v, R;
        return super.optimizeNames(o, u), (v = this.catch) === null || v === void 0 || v.optimizeNames(o, u), (R = this.finally) === null || R === void 0 || R.optimizeNames(o, u), this;
      }
      get names() {
        const o = super.names;
        return this.catch && ce(o, this.catch.names), this.finally && ce(o, this.finally.names), o;
      }
    }
    class fe extends g {
      constructor(o) {
        super(), this.error = o;
      }
      render(o) {
        return `catch(${this.error})` + super.render(o);
      }
    }
    fe.kind = "catch";
    class _e extends g {
      render(o) {
        return "finally" + super.render(o);
      }
    }
    _e.kind = "finally";
    class Ve {
      constructor(o, u = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
          ...u,
          _n: u.lines ? `
` : ""
        }, this._extScope = o, this._scope = new r.Scope({
          parent: o
        }), this._nodes = [
          new w()
        ];
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(o) {
        return this._scope.name(o);
      }
      scopeName(o) {
        return this._extScope.name(o);
      }
      scopeValue(o, u) {
        const v = this._extScope.value(o, u);
        return (this._values[v.prefix] || (this._values[v.prefix] = /* @__PURE__ */ new Set())).add(v), v;
      }
      getScopeValue(o, u) {
        return this._extScope.getValue(o, u);
      }
      scopeRefs(o) {
        return this._extScope.scopeRefs(o, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(o, u, v, R) {
        const T = this._scope.toName(u);
        return v !== void 0 && R && (this._constants[T.str] = v), this._leafNode(new i(o, T, v)), T;
      }
      const(o, u, v) {
        return this._def(r.varKinds.const, o, u, v);
      }
      let(o, u, v) {
        return this._def(r.varKinds.let, o, u, v);
      }
      var(o, u, v) {
        return this._def(r.varKinds.var, o, u, v);
      }
      assign(o, u, v) {
        return this._leafNode(new c(o, u, v));
      }
      add(o, u) {
        return this._leafNode(new f(o, e.operators.ADD, u));
      }
      code(o) {
        return typeof o == "function" ? o() : o !== t.nil && this._leafNode(new S(o)), this;
      }
      object(...o) {
        const u = [
          "{"
        ];
        for (const [v, R] of o) u.length > 1 && u.push(","), u.push(v), (v !== R || this.opts.es5) && (u.push(":"), (0, t.addCodeArg)(u, R));
        return u.push("}"), new t._Code(u);
      }
      if(o, u, v) {
        if (this._blockNode(new d(o)), u && v) this.code(u).else().code(v).endIf();
        else if (u) this.code(u).endIf();
        else if (v) throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(o) {
        return this._elseNode(new d(o));
      }
      else() {
        return this._elseNode(new y());
      }
      endIf() {
        return this._endBlockNode(d, y);
      }
      _for(o, u) {
        return this._blockNode(o), u && this.code(u).endFor(), this;
      }
      for(o, u) {
        return this._for(new P(o), u);
      }
      forRange(o, u, v, R, T = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const q = this._scope.toName(o);
        return this._for(new j(T, q, u, v), () => R(q));
      }
      forOf(o, u, v, R = r.varKinds.const) {
        const T = this._scope.toName(o);
        if (this.opts.es5) {
          const q = u instanceof t.Name ? u : this.var("_arr", u);
          return this.forRange("_i", 0, (0, t._)`${q}.length`, (V) => {
            this.var(T, (0, t._)`${q}[${V}]`), v(T);
          });
        }
        return this._for(new O("of", R, T, u), () => v(T));
      }
      forIn(o, u, v, R = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(o, (0, t._)`Object.keys(${u})`, v);
        const T = this._scope.toName(o);
        return this._for(new O("in", R, T, u), () => v(T));
      }
      endFor() {
        return this._endBlockNode(_);
      }
      label(o) {
        return this._leafNode(new l(o));
      }
      break(o) {
        return this._leafNode(new h(o));
      }
      return(o) {
        const u = new L();
        if (this._blockNode(u), this.code(o), u.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(L);
      }
      try(o, u, v) {
        if (!u && !v) throw new Error('CodeGen: "try" without "catch" and "finally"');
        const R = new ie();
        if (this._blockNode(R), this.code(o), u) {
          const T = this.name("e");
          this._currNode = R.catch = new fe(T), u(T);
        }
        return v && (this._currNode = R.finally = new _e(), this.code(v)), this._endBlockNode(fe, _e);
      }
      throw(o) {
        return this._leafNode(new p(o));
      }
      block(o, u) {
        return this._blockStarts.push(this._nodes.length), o && this.code(o).endBlock(u), this;
      }
      endBlock(o) {
        const u = this._blockStarts.pop();
        if (u === void 0) throw new Error("CodeGen: not in self-balancing block");
        const v = this._nodes.length - u;
        if (v < 0 || o !== void 0 && v !== o) throw new Error(`CodeGen: wrong number of nodes: ${v} vs ${o} expected`);
        return this._nodes.length = u, this;
      }
      func(o, u = t.nil, v, R) {
        return this._blockNode(new U(o, u, v)), R && this.code(R).endFunc(), this;
      }
      endFunc() {
        return this._endBlockNode(U);
      }
      optimize(o = 1) {
        for (; o-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(o) {
        return this._currNode.nodes.push(o), this;
      }
      _blockNode(o) {
        this._currNode.nodes.push(o), this._nodes.push(o);
      }
      _endBlockNode(o, u) {
        const v = this._currNode;
        if (v instanceof o || u && v instanceof u) return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${u ? `${o.kind}/${u.kind}` : o.kind}"`);
      }
      _elseNode(o) {
        const u = this._currNode;
        if (!(u instanceof d)) throw new Error('CodeGen: "else" without "if"');
        return this._currNode = u.else = o, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const o = this._nodes;
        return o[o.length - 1];
      }
      set _currNode(o) {
        const u = this._nodes;
        u[u.length - 1] = o;
      }
    }
    e.CodeGen = Ve;
    function ce($, o) {
      for (const u in o) $[u] = ($[u] || 0) + (o[u] || 0);
      return $;
    }
    function Pe($, o) {
      return o instanceof t._CodeOrName ? ce($, o.names) : $;
    }
    function he($, o, u) {
      if ($ instanceof t.Name) return v($);
      if (!R($)) return $;
      return new t._Code($._items.reduce((T, q) => (q instanceof t.Name && (q = v(q)), q instanceof t._Code ? T.push(...q._items) : T.push(q), T), []));
      function v(T) {
        const q = u[T.str];
        return q === void 0 || o[T.str] !== 1 ? T : (delete o[T.str], q);
      }
      function R(T) {
        return T instanceof t._Code && T._items.some((q) => q instanceof t.Name && o[q.str] === 1 && u[q.str] !== void 0);
      }
    }
    function qe($, o) {
      for (const u in o) $[u] = ($[u] || 0) - (o[u] || 0);
    }
    function xe($) {
      return typeof $ == "boolean" || typeof $ == "number" || $ === null ? !$ : (0, t._)`!${E($)}`;
    }
    e.not = xe;
    const Et = m(e.operators.AND);
    function St(...$) {
      return $.reduce(Et);
    }
    e.and = St;
    const et = m(e.operators.OR);
    function N(...$) {
      return $.reduce(et);
    }
    e.or = N;
    function m($) {
      return (o, u) => o === t.nil ? u : u === t.nil ? o : (0, t._)`${E(o)} ${$} ${E(u)}`;
    }
    function E($) {
      return $ instanceof t.Name ? $ : (0, t._)`(${$})`;
    }
  })(D);
  var k = {};
  Object.defineProperty(k, "__esModule", {
    value: true
  });
  k.checkStrictMode = k.getErrorPath = k.Type = k.useFunc = k.setEvaluated = k.evaluatedPropsToName = k.mergeEvaluated = k.eachItem = k.unescapeJsonPointer = k.escapeJsonPointer = k.escapeFragment = k.unescapeFragment = k.schemaRefOrVal = k.schemaHasRulesButRef = k.schemaHasRules = k.checkUnknownRules = k.alwaysValidSchema = k.toHash = void 0;
  const z = D, $s = Xe;
  function _s(e) {
    const t = {};
    for (const r of e) t[r] = true;
    return t;
  }
  k.toHash = _s;
  function gs(e, t) {
    return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? true : (_n(e, t), !gn(t, e.self.RULES.all));
  }
  k.alwaysValidSchema = gs;
  function _n(e, t = e.schema) {
    const { opts: r, self: n } = e;
    if (!r.strictSchema || typeof t == "boolean") return;
    const s = n.RULES.keywords;
    for (const a in t) s[a] || bn(e, `unknown keyword: "${a}"`);
  }
  k.checkUnknownRules = _n;
  function gn(e, t) {
    if (typeof e == "boolean") return !e;
    for (const r in e) if (t[r]) return true;
    return false;
  }
  k.schemaHasRules = gn;
  function vs(e, t) {
    if (typeof e == "boolean") return !e;
    for (const r in e) if (r !== "$ref" && t.all[r]) return true;
    return false;
  }
  k.schemaHasRulesButRef = vs;
  function ws({ topSchemaRef: e, schemaPath: t }, r, n, s) {
    if (!s) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return (0, z._)`${r}`;
    }
    return (0, z._)`${e}${t}${(0, z.getProperty)(n)}`;
  }
  k.schemaRefOrVal = ws;
  function bs(e) {
    return vn(decodeURIComponent(e));
  }
  k.unescapeFragment = bs;
  function Es(e) {
    return encodeURIComponent(Zt(e));
  }
  k.escapeFragment = Es;
  function Zt(e) {
    return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  k.escapeJsonPointer = Zt;
  function vn(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  k.unescapeJsonPointer = vn;
  function Ss(e, t) {
    if (Array.isArray(e)) for (const r of e) t(r);
    else t(e);
  }
  k.eachItem = Ss;
  function Hr({ mergeNames: e, mergeToName: t, mergeValues: r, resultToName: n }) {
    return (s, a, i, c) => {
      const f = i === void 0 ? a : i instanceof z.Name ? (a instanceof z.Name ? e(s, a, i) : t(s, a, i), i) : a instanceof z.Name ? (t(s, i, a), a) : r(a, i);
      return c === z.Name && !(f instanceof z.Name) ? n(s, f) : f;
    };
  }
  k.mergeEvaluated = {
    props: Hr({
      mergeNames: (e, t, r) => e.if((0, z._)`${r} !== true && ${t} !== undefined`, () => {
        e.if((0, z._)`${t} === true`, () => e.assign(r, true), () => e.assign(r, (0, z._)`${r} || {}`).code((0, z._)`Object.assign(${r}, ${t})`));
      }),
      mergeToName: (e, t, r) => e.if((0, z._)`${r} !== true`, () => {
        t === true ? e.assign(r, true) : (e.assign(r, (0, z._)`${r} || {}`), xt(e, r, t));
      }),
      mergeValues: (e, t) => e === true ? true : {
        ...e,
        ...t
      },
      resultToName: wn
    }),
    items: Hr({
      mergeNames: (e, t, r) => e.if((0, z._)`${r} !== true && ${t} !== undefined`, () => e.assign(r, (0, z._)`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
      mergeToName: (e, t, r) => e.if((0, z._)`${r} !== true`, () => e.assign(r, t === true ? true : (0, z._)`${r} > ${t} ? ${r} : ${t}`)),
      mergeValues: (e, t) => e === true ? true : Math.max(e, t),
      resultToName: (e, t) => e.var("items", t)
    })
  };
  function wn(e, t) {
    if (t === true) return e.var("props", true);
    const r = e.var("props", (0, z._)`{}`);
    return t !== void 0 && xt(e, r, t), r;
  }
  k.evaluatedPropsToName = wn;
  function xt(e, t, r) {
    Object.keys(r).forEach((n) => e.assign((0, z._)`${t}${(0, z.getProperty)(n)}`, true));
  }
  k.setEvaluated = xt;
  const Gr = {};
  function Ps(e, t) {
    return e.scopeValue("func", {
      ref: t,
      code: Gr[t.code] || (Gr[t.code] = new $s._Code(t.code))
    });
  }
  k.useFunc = Ps;
  var Jt;
  (function(e) {
    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
  })(Jt || (k.Type = Jt = {}));
  function Ns(e, t, r) {
    if (e instanceof z.Name) {
      const n = t === Jt.Num;
      return r ? n ? (0, z._)`"[" + ${e} + "]"` : (0, z._)`"['" + ${e} + "']"` : n ? (0, z._)`"/" + ${e}` : (0, z._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? (0, z.getProperty)(e).toString() : "/" + Zt(e);
  }
  k.getErrorPath = Ns;
  function bn(e, t, r = e.opts.strictSchema) {
    if (r) {
      if (t = `strict mode: ${t}`, r === true) throw new Error(t);
      e.self.logger.warn(t);
    }
  }
  k.checkStrictMode = bn;
  var oe = {};
  Object.defineProperty(oe, "__esModule", {
    value: true
  });
  const B = D, ks = {
    data: new B.Name("data"),
    valCxt: new B.Name("valCxt"),
    instancePath: new B.Name("instancePath"),
    parentData: new B.Name("parentData"),
    parentDataProperty: new B.Name("parentDataProperty"),
    rootData: new B.Name("rootData"),
    dynamicAnchors: new B.Name("dynamicAnchors"),
    vErrors: new B.Name("vErrors"),
    errors: new B.Name("errors"),
    this: new B.Name("this"),
    self: new B.Name("self"),
    scope: new B.Name("scope"),
    json: new B.Name("json"),
    jsonPos: new B.Name("jsonPos"),
    jsonLen: new B.Name("jsonLen"),
    jsonPart: new B.Name("jsonPart")
  };
  oe.default = ks;
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = D, r = k, n = oe;
    e.keywordError = {
      message: ({ keyword: y }) => (0, t.str)`must pass "${y}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: y, schemaType: d }) => d ? (0, t.str)`"${y}" keyword must be ${d} ($data)` : (0, t.str)`"${y}" keyword is invalid ($data)`
    };
    function s(y, d = e.keywordError, _, P) {
      const { it: j } = y, { gen: O, compositeRule: U, allErrors: L } = j, ie = p(y, d, _);
      P ?? (U || L) ? f(O, ie) : l(j, (0, t._)`[${ie}]`);
    }
    e.reportError = s;
    function a(y, d = e.keywordError, _) {
      const { it: P } = y, { gen: j, compositeRule: O, allErrors: U } = P, L = p(y, d, _);
      f(j, L), O || U || l(P, n.default.vErrors);
    }
    e.reportExtraError = a;
    function i(y, d) {
      y.assign(n.default.errors, d), y.if((0, t._)`${n.default.vErrors} !== null`, () => y.if(d, () => y.assign((0, t._)`${n.default.vErrors}.length`, d), () => y.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function c({ gen: y, keyword: d, schemaValue: _, data: P, errsCount: j, it: O }) {
      if (j === void 0) throw new Error("ajv implementation error");
      const U = y.name("err");
      y.forRange("i", j, n.default.errors, (L) => {
        y.const(U, (0, t._)`${n.default.vErrors}[${L}]`), y.if((0, t._)`${U}.instancePath === undefined`, () => y.assign((0, t._)`${U}.instancePath`, (0, t.strConcat)(n.default.instancePath, O.errorPath))), y.assign((0, t._)`${U}.schemaPath`, (0, t.str)`${O.errSchemaPath}/${d}`), O.opts.verbose && (y.assign((0, t._)`${U}.schema`, _), y.assign((0, t._)`${U}.data`, P));
      });
    }
    e.extendErrors = c;
    function f(y, d) {
      const _ = y.const("err", d);
      y.if((0, t._)`${n.default.vErrors} === null`, () => y.assign(n.default.vErrors, (0, t._)`[${_}]`), (0, t._)`${n.default.vErrors}.push(${_})`), y.code((0, t._)`${n.default.errors}++`);
    }
    function l(y, d) {
      const { gen: _, validateName: P, schemaEnv: j } = y;
      j.$async ? _.throw((0, t._)`new ${y.ValidationError}(${d})`) : (_.assign((0, t._)`${P}.errors`, d), _.return(false));
    }
    const h = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function p(y, d, _) {
      const { createErrors: P } = y.it;
      return P === false ? (0, t._)`{}` : S(y, d, _);
    }
    function S(y, d, _ = {}) {
      const { gen: P, it: j } = y, O = [
        b(j, _),
        g(y, _)
      ];
      return w(y, d, O), P.object(...O);
    }
    function b({ errorPath: y }, { instancePath: d }) {
      const _ = d ? (0, t.str)`${y}${(0, r.getErrorPath)(d, r.Type.Str)}` : y;
      return [
        n.default.instancePath,
        (0, t.strConcat)(n.default.instancePath, _)
      ];
    }
    function g({ keyword: y, it: { errSchemaPath: d } }, { schemaPath: _, parentSchema: P }) {
      let j = P ? d : (0, t.str)`${d}/${y}`;
      return _ && (j = (0, t.str)`${j}${(0, r.getErrorPath)(_, r.Type.Str)}`), [
        h.schemaPath,
        j
      ];
    }
    function w(y, { params: d, message: _ }, P) {
      const { keyword: j, data: O, schemaValue: U, it: L } = y, { opts: ie, propertyName: fe, topSchemaRef: _e, schemaPath: Ve } = L;
      P.push([
        h.keyword,
        j
      ], [
        h.params,
        typeof d == "function" ? d(y) : d || (0, t._)`{}`
      ]), ie.messages && P.push([
        h.message,
        typeof _ == "function" ? _(y) : _
      ]), ie.verbose && P.push([
        h.schema,
        U
      ], [
        h.parentSchema,
        (0, t._)`${_e}${Ve}`
      ], [
        n.default.data,
        O
      ]), fe && P.push([
        h.propertyName,
        fe
      ]);
    }
  })(Qe);
  Object.defineProperty(Te, "__esModule", {
    value: true
  });
  Te.boolOrEmptySchema = Te.topBoolOrEmptySchema = void 0;
  const js = Qe, Os = D, Is = oe, Rs = {
    message: "boolean schema is false"
  };
  function Ts(e) {
    const { gen: t, schema: r, validateName: n } = e;
    r === false ? En(e, false) : typeof r == "object" && r.$async === true ? t.return(Is.default.data) : (t.assign((0, Os._)`${n}.errors`, null), t.return(true));
  }
  Te.topBoolOrEmptySchema = Ts;
  function Cs(e, t) {
    const { gen: r, schema: n } = e;
    n === false ? (r.var(t, false), En(e)) : r.var(t, true);
  }
  Te.boolOrEmptySchema = Cs;
  function En(e, t) {
    const { gen: r, data: n } = e, s = {
      gen: r,
      keyword: "false schema",
      data: n,
      schema: false,
      schemaCode: false,
      schemaValue: false,
      params: {},
      it: e
    };
    (0, js.reportError)(s, Rs, void 0, t);
  }
  var H = {}, Ee = {};
  Object.defineProperty(Ee, "__esModule", {
    value: true
  });
  Ee.getRules = Ee.isJSONType = void 0;
  const Ms = [
    "string",
    "number",
    "integer",
    "boolean",
    "null",
    "object",
    "array"
  ], As = new Set(Ms);
  function Ds(e) {
    return typeof e == "string" && As.has(e);
  }
  Ee.isJSONType = Ds;
  function Vs() {
    const e = {
      number: {
        type: "number",
        rules: []
      },
      string: {
        type: "string",
        rules: []
      },
      array: {
        type: "array",
        rules: []
      },
      object: {
        type: "object",
        rules: []
      }
    };
    return {
      types: {
        ...e,
        integer: true,
        boolean: true,
        null: true
      },
      rules: [
        {
          rules: []
        },
        e.number,
        e.string,
        e.array,
        e.object
      ],
      post: {
        rules: []
      },
      all: {},
      keywords: {}
    };
  }
  Ee.getRules = Vs;
  var ue = {};
  Object.defineProperty(ue, "__esModule", {
    value: true
  });
  ue.shouldUseRule = ue.shouldUseGroup = ue.schemaHasRulesForType = void 0;
  function qs({ schema: e, self: t }, r) {
    const n = t.RULES.types[r];
    return n && n !== true && Sn(e, n);
  }
  ue.schemaHasRulesForType = qs;
  function Sn(e, t) {
    return t.rules.some((r) => Pn(e, r));
  }
  ue.shouldUseGroup = Sn;
  function Pn(e, t) {
    var r;
    return e[t.keyword] !== void 0 || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => e[n] !== void 0));
  }
  ue.shouldUseRule = Pn;
  Object.defineProperty(H, "__esModule", {
    value: true
  });
  H.reportTypeError = H.checkDataTypes = H.checkDataType = H.coerceAndCheckDataType = H.getJSONTypes = H.getSchemaTypes = H.DataType = void 0;
  const zs = Ee, Us = ue, Ks = Qe, M = D, Nn = k;
  var Ie;
  (function(e) {
    e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
  })(Ie || (H.DataType = Ie = {}));
  function Fs(e) {
    const t = kn(e.type);
    if (t.includes("null")) {
      if (e.nullable === false) throw new Error("type: null contradicts nullable: false");
    } else {
      if (!t.length && e.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
      e.nullable === true && t.push("null");
    }
    return t;
  }
  H.getSchemaTypes = Fs;
  function kn(e) {
    const t = Array.isArray(e) ? e : e ? [
      e
    ] : [];
    if (t.every(zs.isJSONType)) return t;
    throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
  }
  H.getJSONTypes = kn;
  function Ls(e, t) {
    const { gen: r, data: n, opts: s } = e, a = Hs(t, s.coerceTypes), i = t.length > 0 && !(a.length === 0 && t.length === 1 && (0, Us.schemaHasRulesForType)(e, t[0]));
    if (i) {
      const c = er(t, n, s.strictNumbers, Ie.Wrong);
      r.if(c, () => {
        a.length ? Gs(e, t, a) : tr(e);
      });
    }
    return i;
  }
  H.coerceAndCheckDataType = Ls;
  const jn = /* @__PURE__ */ new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "null"
  ]);
  function Hs(e, t) {
    return t ? e.filter((r) => jn.has(r) || t === "array" && r === "array") : [];
  }
  function Gs(e, t, r) {
    const { gen: n, data: s, opts: a } = e, i = n.let("dataType", (0, M._)`typeof ${s}`), c = n.let("coerced", (0, M._)`undefined`);
    a.coerceTypes === "array" && n.if((0, M._)`${i} == 'object' && Array.isArray(${s}) && ${s}.length == 1`, () => n.assign(s, (0, M._)`${s}[0]`).assign(i, (0, M._)`typeof ${s}`).if(er(t, s, a.strictNumbers), () => n.assign(c, s))), n.if((0, M._)`${c} !== undefined`);
    for (const l of r) (jn.has(l) || l === "array" && a.coerceTypes === "array") && f(l);
    n.else(), tr(e), n.endIf(), n.if((0, M._)`${c} !== undefined`, () => {
      n.assign(s, c), Js(e, c);
    });
    function f(l) {
      switch (l) {
        case "string":
          n.elseIf((0, M._)`${i} == "number" || ${i} == "boolean"`).assign(c, (0, M._)`"" + ${s}`).elseIf((0, M._)`${s} === null`).assign(c, (0, M._)`""`);
          return;
        case "number":
          n.elseIf((0, M._)`${i} == "boolean" || ${s} === null
              || (${i} == "string" && ${s} && ${s} == +${s})`).assign(c, (0, M._)`+${s}`);
          return;
        case "integer":
          n.elseIf((0, M._)`${i} === "boolean" || ${s} === null
              || (${i} === "string" && ${s} && ${s} == +${s} && !(${s} % 1))`).assign(c, (0, M._)`+${s}`);
          return;
        case "boolean":
          n.elseIf((0, M._)`${s} === "false" || ${s} === 0 || ${s} === null`).assign(c, false).elseIf((0, M._)`${s} === "true" || ${s} === 1`).assign(c, true);
          return;
        case "null":
          n.elseIf((0, M._)`${s} === "" || ${s} === 0 || ${s} === false`), n.assign(c, null);
          return;
        case "array":
          n.elseIf((0, M._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${s} === null`).assign(c, (0, M._)`[${s}]`);
      }
    }
  }
  function Js({ gen: e, parentData: t, parentDataProperty: r }, n) {
    e.if((0, M._)`${t} !== undefined`, () => e.assign((0, M._)`${t}[${r}]`, n));
  }
  function Wt(e, t, r, n = Ie.Correct) {
    const s = n === Ie.Correct ? M.operators.EQ : M.operators.NEQ;
    let a;
    switch (e) {
      case "null":
        return (0, M._)`${t} ${s} null`;
      case "array":
        a = (0, M._)`Array.isArray(${t})`;
        break;
      case "object":
        a = (0, M._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
        break;
      case "integer":
        a = i((0, M._)`!(${t} % 1) && !isNaN(${t})`);
        break;
      case "number":
        a = i();
        break;
      default:
        return (0, M._)`typeof ${t} ${s} ${e}`;
    }
    return n === Ie.Correct ? a : (0, M.not)(a);
    function i(c = M.nil) {
      return (0, M.and)((0, M._)`typeof ${t} == "number"`, c, r ? (0, M._)`isFinite(${t})` : M.nil);
    }
  }
  H.checkDataType = Wt;
  function er(e, t, r, n) {
    if (e.length === 1) return Wt(e[0], t, r, n);
    let s;
    const a = (0, Nn.toHash)(e);
    if (a.array && a.object) {
      const i = (0, M._)`typeof ${t} != "object"`;
      s = a.null ? i : (0, M._)`!${t} || ${i}`, delete a.null, delete a.array, delete a.object;
    } else s = M.nil;
    a.number && delete a.integer;
    for (const i in a) s = (0, M.and)(s, Wt(i, t, r, n));
    return s;
  }
  H.checkDataTypes = er;
  const Ws = {
    message: ({ schema: e }) => `must be ${e}`,
    params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, M._)`{type: ${e}}` : (0, M._)`{type: ${t}}`
  };
  function tr(e) {
    const t = Bs(e);
    (0, Ks.reportError)(t, Ws);
  }
  H.reportTypeError = tr;
  function Bs(e) {
    const { gen: t, data: r, schema: n } = e, s = (0, Nn.schemaRefOrVal)(e, n, "type");
    return {
      gen: t,
      keyword: "type",
      data: r,
      schema: n.type,
      schemaCode: s,
      schemaValue: s,
      parentSchema: n,
      params: {},
      it: e
    };
  }
  var $t = {};
  Object.defineProperty($t, "__esModule", {
    value: true
  });
  $t.assignDefaults = void 0;
  const ke = D, Xs = k;
  function Qs(e, t) {
    const { properties: r, items: n } = e.schema;
    if (t === "object" && r) for (const s in r) Jr(e, s, r[s].default);
    else t === "array" && Array.isArray(n) && n.forEach((s, a) => Jr(e, a, s.default));
  }
  $t.assignDefaults = Qs;
  function Jr(e, t, r) {
    const { gen: n, compositeRule: s, data: a, opts: i } = e;
    if (r === void 0) return;
    const c = (0, ke._)`${a}${(0, ke.getProperty)(t)}`;
    if (s) {
      (0, Xs.checkStrictMode)(e, `default is ignored for: ${c}`);
      return;
    }
    let f = (0, ke._)`${c} === undefined`;
    i.useDefaults === "empty" && (f = (0, ke._)`${f} || ${c} === null || ${c} === ""`), n.if(f, (0, ke._)`${c} = ${(0, ke.stringify)(r)}`);
  }
  var se = {}, A = {};
  Object.defineProperty(A, "__esModule", {
    value: true
  });
  A.validateUnion = A.validateArray = A.usePattern = A.callValidateCode = A.schemaProperties = A.allSchemaProperties = A.noPropertyInData = A.propertyInData = A.isOwnProperty = A.hasPropFunc = A.reportMissingProp = A.checkMissingProp = A.checkReportMissingProp = void 0;
  const K = D, rr = k, me = oe, Ys = k;
  function Zs(e, t) {
    const { gen: r, data: n, it: s } = e;
    r.if(sr(r, n, t, s.opts.ownProperties), () => {
      e.setParams({
        missingProperty: (0, K._)`${t}`
      }, true), e.error();
    });
  }
  A.checkReportMissingProp = Zs;
  function xs({ gen: e, data: t, it: { opts: r } }, n, s) {
    return (0, K.or)(...n.map((a) => (0, K.and)(sr(e, t, a, r.ownProperties), (0, K._)`${s} = ${a}`)));
  }
  A.checkMissingProp = xs;
  function ea(e, t) {
    e.setParams({
      missingProperty: t
    }, true), e.error();
  }
  A.reportMissingProp = ea;
  function On(e) {
    return e.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, K._)`Object.prototype.hasOwnProperty`
    });
  }
  A.hasPropFunc = On;
  function nr(e, t, r) {
    return (0, K._)`${On(e)}.call(${t}, ${r})`;
  }
  A.isOwnProperty = nr;
  function ta(e, t, r, n) {
    const s = (0, K._)`${t}${(0, K.getProperty)(r)} !== undefined`;
    return n ? (0, K._)`${s} && ${nr(e, t, r)}` : s;
  }
  A.propertyInData = ta;
  function sr(e, t, r, n) {
    const s = (0, K._)`${t}${(0, K.getProperty)(r)} === undefined`;
    return n ? (0, K.or)(s, (0, K.not)(nr(e, t, r))) : s;
  }
  A.noPropertyInData = sr;
  function In(e) {
    return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
  }
  A.allSchemaProperties = In;
  function ra(e, t) {
    return In(t).filter((r) => !(0, rr.alwaysValidSchema)(e, t[r]));
  }
  A.schemaProperties = ra;
  function na({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: n, schemaPath: s, errorPath: a }, it: i }, c, f, l) {
    const h = l ? (0, K._)`${e}, ${t}, ${n}${s}` : t, p = [
      [
        me.default.instancePath,
        (0, K.strConcat)(me.default.instancePath, a)
      ],
      [
        me.default.parentData,
        i.parentData
      ],
      [
        me.default.parentDataProperty,
        i.parentDataProperty
      ],
      [
        me.default.rootData,
        me.default.rootData
      ]
    ];
    i.opts.dynamicRef && p.push([
      me.default.dynamicAnchors,
      me.default.dynamicAnchors
    ]);
    const S = (0, K._)`${h}, ${r.object(...p)}`;
    return f !== K.nil ? (0, K._)`${c}.call(${f}, ${S})` : (0, K._)`${c}(${S})`;
  }
  A.callValidateCode = na;
  const sa = (0, K._)`new RegExp`;
  function aa({ gen: e, it: { opts: t } }, r) {
    const n = t.unicodeRegExp ? "u" : "", { regExp: s } = t.code, a = s(r, n);
    return e.scopeValue("pattern", {
      key: a.toString(),
      ref: a,
      code: (0, K._)`${s.code === "new RegExp" ? sa : (0, Ys.useFunc)(e, s)}(${r}, ${n})`
    });
  }
  A.usePattern = aa;
  function oa(e) {
    const { gen: t, data: r, keyword: n, it: s } = e, a = t.name("valid");
    if (s.allErrors) {
      const c = t.let("valid", true);
      return i(() => t.assign(c, false)), c;
    }
    return t.var(a, true), i(() => t.break()), a;
    function i(c) {
      const f = t.const("len", (0, K._)`${r}.length`);
      t.forRange("i", 0, f, (l) => {
        e.subschema({
          keyword: n,
          dataProp: l,
          dataPropType: rr.Type.Num
        }, a), t.if((0, K.not)(a), c);
      });
    }
  }
  A.validateArray = oa;
  function ia(e) {
    const { gen: t, schema: r, keyword: n, it: s } = e;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((f) => (0, rr.alwaysValidSchema)(s, f)) && !s.opts.unevaluated) return;
    const i = t.let("valid", false), c = t.name("_valid");
    t.block(() => r.forEach((f, l) => {
      const h = e.subschema({
        keyword: n,
        schemaProp: l,
        compositeRule: true
      }, c);
      t.assign(i, (0, K._)`${i} || ${c}`), e.mergeValidEvaluated(h, c) || t.if((0, K.not)(i));
    })), e.result(i, () => e.reset(), () => e.error(true));
  }
  A.validateUnion = ia;
  Object.defineProperty(se, "__esModule", {
    value: true
  });
  se.validateKeywordUsage = se.validSchemaType = se.funcKeywordCode = se.macroKeywordCode = void 0;
  const X = D, ve = oe, ca = A, ua = Qe;
  function la(e, t) {
    const { gen: r, keyword: n, schema: s, parentSchema: a, it: i } = e, c = t.macro.call(i.self, s, a, i), f = Rn(r, n, c);
    i.opts.validateSchema !== false && i.self.validateSchema(c, true);
    const l = r.name("valid");
    e.subschema({
      schema: c,
      schemaPath: X.nil,
      errSchemaPath: `${i.errSchemaPath}/${n}`,
      topSchemaRef: f,
      compositeRule: true
    }, l), e.pass(l, () => e.error(true));
  }
  se.macroKeywordCode = la;
  function da(e, t) {
    var r;
    const { gen: n, keyword: s, schema: a, parentSchema: i, $data: c, it: f } = e;
    ha(f, t);
    const l = !c && t.compile ? t.compile.call(f.self, a, i, f) : t.validate, h = Rn(n, s, l), p = n.let("valid");
    e.block$data(p, S), e.ok((r = t.valid) !== null && r !== void 0 ? r : p);
    function S() {
      if (t.errors === false) w(), t.modifying && Wr(e), y(() => e.error());
      else {
        const d = t.async ? b() : g();
        t.modifying && Wr(e), y(() => fa(e, d));
      }
    }
    function b() {
      const d = n.let("ruleErrs", null);
      return n.try(() => w((0, X._)`await `), (_) => n.assign(p, false).if((0, X._)`${_} instanceof ${f.ValidationError}`, () => n.assign(d, (0, X._)`${_}.errors`), () => n.throw(_))), d;
    }
    function g() {
      const d = (0, X._)`${h}.errors`;
      return n.assign(d, null), w(X.nil), d;
    }
    function w(d = t.async ? (0, X._)`await ` : X.nil) {
      const _ = f.opts.passContext ? ve.default.this : ve.default.self, P = !("compile" in t && !c || t.schema === false);
      n.assign(p, (0, X._)`${d}${(0, ca.callValidateCode)(e, h, _, P)}`, t.modifying);
    }
    function y(d) {
      var _;
      n.if((0, X.not)((_ = t.valid) !== null && _ !== void 0 ? _ : p), d);
    }
  }
  se.funcKeywordCode = da;
  function Wr(e) {
    const { gen: t, data: r, it: n } = e;
    t.if(n.parentData, () => t.assign(r, (0, X._)`${n.parentData}[${n.parentDataProperty}]`));
  }
  function fa(e, t) {
    const { gen: r } = e;
    r.if((0, X._)`Array.isArray(${t})`, () => {
      r.assign(ve.default.vErrors, (0, X._)`${ve.default.vErrors} === null ? ${t} : ${ve.default.vErrors}.concat(${t})`).assign(ve.default.errors, (0, X._)`${ve.default.vErrors}.length`), (0, ua.extendErrors)(e);
    }, () => e.error());
  }
  function ha({ schemaEnv: e }, t) {
    if (t.async && !e.$async) throw new Error("async keyword in sync schema");
  }
  function Rn(e, t, r) {
    if (r === void 0) throw new Error(`keyword "${t}" failed to compile`);
    return e.scopeValue("keyword", typeof r == "function" ? {
      ref: r
    } : {
      ref: r,
      code: (0, X.stringify)(r)
    });
  }
  function ma(e, t, r = false) {
    return !t.length || t.some((n) => n === "array" ? Array.isArray(e) : n === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == n || r && typeof e > "u");
  }
  se.validSchemaType = ma;
  function pa({ schema: e, opts: t, self: r, errSchemaPath: n }, s, a) {
    if (Array.isArray(s.keyword) ? !s.keyword.includes(a) : s.keyword !== a) throw new Error("ajv implementation error");
    const i = s.dependencies;
    if (i == null ? void 0 : i.some((c) => !Object.prototype.hasOwnProperty.call(e, c))) throw new Error(`parent schema must have dependencies of ${a}: ${i.join(",")}`);
    if (s.validateSchema && !s.validateSchema(e[a])) {
      const f = `keyword "${a}" value is invalid at path "${n}": ` + r.errorsText(s.validateSchema.errors);
      if (t.validateSchema === "log") r.logger.error(f);
      else throw new Error(f);
    }
  }
  se.validateKeywordUsage = pa;
  var $e = {};
  Object.defineProperty($e, "__esModule", {
    value: true
  });
  $e.extendSubschemaMode = $e.extendSubschemaData = $e.getSubschema = void 0;
  const ne = D, Tn = k;
  function ya(e, { keyword: t, schemaProp: r, schema: n, schemaPath: s, errSchemaPath: a, topSchemaRef: i }) {
    if (t !== void 0 && n !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (t !== void 0) {
      const c = e.schema[t];
      return r === void 0 ? {
        schema: c,
        schemaPath: (0, ne._)`${e.schemaPath}${(0, ne.getProperty)(t)}`,
        errSchemaPath: `${e.errSchemaPath}/${t}`
      } : {
        schema: c[r],
        schemaPath: (0, ne._)`${e.schemaPath}${(0, ne.getProperty)(t)}${(0, ne.getProperty)(r)}`,
        errSchemaPath: `${e.errSchemaPath}/${t}/${(0, Tn.escapeFragment)(r)}`
      };
    }
    if (n !== void 0) {
      if (s === void 0 || a === void 0 || i === void 0) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: n,
        schemaPath: s,
        topSchemaRef: i,
        errSchemaPath: a
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  $e.getSubschema = ya;
  function $a(e, t, { dataProp: r, dataPropType: n, data: s, dataTypes: a, propertyName: i }) {
    if (s !== void 0 && r !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: c } = t;
    if (r !== void 0) {
      const { errorPath: l, dataPathArr: h, opts: p } = t, S = c.let("data", (0, ne._)`${t.data}${(0, ne.getProperty)(r)}`, true);
      f(S), e.errorPath = (0, ne.str)`${l}${(0, Tn.getErrorPath)(r, n, p.jsPropertySyntax)}`, e.parentDataProperty = (0, ne._)`${r}`, e.dataPathArr = [
        ...h,
        e.parentDataProperty
      ];
    }
    if (s !== void 0) {
      const l = s instanceof ne.Name ? s : c.let("data", s, true);
      f(l), i !== void 0 && (e.propertyName = i);
    }
    a && (e.dataTypes = a);
    function f(l) {
      e.data = l, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [
        ...t.dataNames,
        l
      ];
    }
  }
  $e.extendSubschemaData = $a;
  function _a(e, { jtdDiscriminator: t, jtdMetadata: r, compositeRule: n, createErrors: s, allErrors: a }) {
    n !== void 0 && (e.compositeRule = n), s !== void 0 && (e.createErrors = s), a !== void 0 && (e.allErrors = a), e.jtdDiscriminator = t, e.jtdMetadata = r;
  }
  $e.extendSubschemaMode = _a;
  var W = {}, Cn = function e(t, r) {
    if (t === r) return true;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return false;
      var n, s, a;
      if (Array.isArray(t)) {
        if (n = t.length, n != r.length) return false;
        for (s = n; s-- !== 0; ) if (!e(t[s], r[s])) return false;
        return true;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (a = Object.keys(t), n = a.length, n !== Object.keys(r).length) return false;
      for (s = n; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, a[s])) return false;
      for (s = n; s-- !== 0; ) {
        var i = a[s];
        if (!e(t[i], r[i])) return false;
      }
      return true;
    }
    return t !== t && r !== r;
  }, Mn = {
    exports: {}
  }, ye = Mn.exports = function(e, t, r) {
    typeof t == "function" && (r = t, t = {}), r = t.cb || r;
    var n = typeof r == "function" ? r : r.pre || function() {
    }, s = r.post || function() {
    };
    it(t, n, s, e, "", e);
  };
  ye.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
  };
  ye.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };
  ye.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
  };
  ye.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };
  function it(e, t, r, n, s, a, i, c, f, l) {
    if (n && typeof n == "object" && !Array.isArray(n)) {
      t(n, s, a, i, c, f, l);
      for (var h in n) {
        var p = n[h];
        if (Array.isArray(p)) {
          if (h in ye.arrayKeywords) for (var S = 0; S < p.length; S++) it(e, t, r, p[S], s + "/" + h + "/" + S, a, s, h, n, S);
        } else if (h in ye.propsKeywords) {
          if (p && typeof p == "object") for (var b in p) it(e, t, r, p[b], s + "/" + h + "/" + ga(b), a, s, h, n, b);
        } else (h in ye.keywords || e.allKeys && !(h in ye.skipKeywords)) && it(e, t, r, p, s + "/" + h, a, s, h, n);
      }
      r(n, s, a, i, c, f, l);
    }
  }
  function ga(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  var va = Mn.exports;
  Object.defineProperty(W, "__esModule", {
    value: true
  });
  W.getSchemaRefs = W.resolveUrl = W.normalizeId = W._getFullPath = W.getFullPath = W.inlineRef = void 0;
  const wa = k, ba = Cn, Ea = va, Sa = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function Pa(e, t = true) {
    return typeof e == "boolean" ? true : t === true ? !Bt(e) : t ? An(e) <= t : false;
  }
  W.inlineRef = Pa;
  const Na = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function Bt(e) {
    for (const t in e) {
      if (Na.has(t)) return true;
      const r = e[t];
      if (Array.isArray(r) && r.some(Bt) || typeof r == "object" && Bt(r)) return true;
    }
    return false;
  }
  function An(e) {
    let t = 0;
    for (const r in e) {
      if (r === "$ref") return 1 / 0;
      if (t++, !Sa.has(r) && (typeof e[r] == "object" && (0, wa.eachItem)(e[r], (n) => t += An(n)), t === 1 / 0)) return 1 / 0;
    }
    return t;
  }
  function Dn(e, t = "", r) {
    r !== false && (t = Re(t));
    const n = e.parse(t);
    return Vn(e, n);
  }
  W.getFullPath = Dn;
  function Vn(e, t) {
    return e.serialize(t).split("#")[0] + "#";
  }
  W._getFullPath = Vn;
  const ka = /#\/?$/;
  function Re(e) {
    return e ? e.replace(ka, "") : "";
  }
  W.normalizeId = Re;
  function ja(e, t, r) {
    return r = Re(r), e.resolve(t, r);
  }
  W.resolveUrl = ja;
  const Oa = /^[a-z_][-a-z0-9._]*$/i;
  function Ia(e, t) {
    if (typeof e == "boolean") return {};
    const { schemaId: r, uriResolver: n } = this.opts, s = Re(e[r] || t), a = {
      "": s
    }, i = Dn(n, s, false), c = {}, f = /* @__PURE__ */ new Set();
    return Ea(e, {
      allKeys: true
    }, (p, S, b, g) => {
      if (g === void 0) return;
      const w = i + S;
      let y = a[g];
      typeof p[r] == "string" && (y = d.call(this, p[r])), _.call(this, p.$anchor), _.call(this, p.$dynamicAnchor), a[S] = y;
      function d(P) {
        const j = this.opts.uriResolver.resolve;
        if (P = Re(y ? j(y, P) : P), f.has(P)) throw h(P);
        f.add(P);
        let O = this.refs[P];
        return typeof O == "string" && (O = this.refs[O]), typeof O == "object" ? l(p, O.schema, P) : P !== Re(w) && (P[0] === "#" ? (l(p, c[P], P), c[P] = p) : this.refs[P] = w), P;
      }
      function _(P) {
        if (typeof P == "string") {
          if (!Oa.test(P)) throw new Error(`invalid anchor "${P}"`);
          d.call(this, `#${P}`);
        }
      }
    }), c;
    function l(p, S, b) {
      if (S !== void 0 && !ba(p, S)) throw h(b);
    }
    function h(p) {
      return new Error(`reference "${p}" resolves to more than one schema`);
    }
  }
  W.getSchemaRefs = Ia;
  Object.defineProperty(re, "__esModule", {
    value: true
  });
  re.getData = re.KeywordCxt = re.validateFunctionCode = void 0;
  const qn = Te, Br = H, ar = ue, ft = H, Ra = $t, He = se, zt = $e, I = D, C = oe, Ta = W, le = k, Ue = Qe;
  function Ca(e) {
    if (Kn(e) && (Fn(e), Un(e))) {
      Da(e);
      return;
    }
    zn(e, () => (0, qn.topBoolOrEmptySchema)(e));
  }
  re.validateFunctionCode = Ca;
  function zn({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: s }, a) {
    s.code.es5 ? e.func(t, (0, I._)`${C.default.data}, ${C.default.valCxt}`, n.$async, () => {
      e.code((0, I._)`"use strict"; ${Xr(r, s)}`), Aa(e, s), e.code(a);
    }) : e.func(t, (0, I._)`${C.default.data}, ${Ma(s)}`, n.$async, () => e.code(Xr(r, s)).code(a));
  }
  function Ma(e) {
    return (0, I._)`{${C.default.instancePath}="", ${C.default.parentData}, ${C.default.parentDataProperty}, ${C.default.rootData}=${C.default.data}${e.dynamicRef ? (0, I._)`, ${C.default.dynamicAnchors}={}` : I.nil}}={}`;
  }
  function Aa(e, t) {
    e.if(C.default.valCxt, () => {
      e.var(C.default.instancePath, (0, I._)`${C.default.valCxt}.${C.default.instancePath}`), e.var(C.default.parentData, (0, I._)`${C.default.valCxt}.${C.default.parentData}`), e.var(C.default.parentDataProperty, (0, I._)`${C.default.valCxt}.${C.default.parentDataProperty}`), e.var(C.default.rootData, (0, I._)`${C.default.valCxt}.${C.default.rootData}`), t.dynamicRef && e.var(C.default.dynamicAnchors, (0, I._)`${C.default.valCxt}.${C.default.dynamicAnchors}`);
    }, () => {
      e.var(C.default.instancePath, (0, I._)`""`), e.var(C.default.parentData, (0, I._)`undefined`), e.var(C.default.parentDataProperty, (0, I._)`undefined`), e.var(C.default.rootData, C.default.data), t.dynamicRef && e.var(C.default.dynamicAnchors, (0, I._)`{}`);
    });
  }
  function Da(e) {
    const { schema: t, opts: r, gen: n } = e;
    zn(e, () => {
      r.$comment && t.$comment && Hn(e), Ka(e), n.let(C.default.vErrors, null), n.let(C.default.errors, 0), r.unevaluated && Va(e), Ln(e), Ha(e);
    });
  }
  function Va(e) {
    const { gen: t, validateName: r } = e;
    e.evaluated = t.const("evaluated", (0, I._)`${r}.evaluated`), t.if((0, I._)`${e.evaluated}.dynamicProps`, () => t.assign((0, I._)`${e.evaluated}.props`, (0, I._)`undefined`)), t.if((0, I._)`${e.evaluated}.dynamicItems`, () => t.assign((0, I._)`${e.evaluated}.items`, (0, I._)`undefined`));
  }
  function Xr(e, t) {
    const r = typeof e == "object" && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? (0, I._)`/*# sourceURL=${r} */` : I.nil;
  }
  function qa(e, t) {
    if (Kn(e) && (Fn(e), Un(e))) {
      za(e, t);
      return;
    }
    (0, qn.boolOrEmptySchema)(e, t);
  }
  function Un({ schema: e, self: t }) {
    if (typeof e == "boolean") return !e;
    for (const r in e) if (t.RULES.all[r]) return true;
    return false;
  }
  function Kn(e) {
    return typeof e.schema != "boolean";
  }
  function za(e, t) {
    const { schema: r, gen: n, opts: s } = e;
    s.$comment && r.$comment && Hn(e), Fa(e), La(e);
    const a = n.const("_errs", C.default.errors);
    Ln(e, a), n.var(t, (0, I._)`${a} === ${C.default.errors}`);
  }
  function Fn(e) {
    (0, le.checkUnknownRules)(e), Ua(e);
  }
  function Ln(e, t) {
    if (e.opts.jtd) return Qr(e, [], false, t);
    const r = (0, Br.getSchemaTypes)(e.schema), n = (0, Br.coerceAndCheckDataType)(e, r);
    Qr(e, r, !n, t);
  }
  function Ua(e) {
    const { schema: t, errSchemaPath: r, opts: n, self: s } = e;
    t.$ref && n.ignoreKeywordsWithRef && (0, le.schemaHasRulesButRef)(t, s.RULES) && s.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
  }
  function Ka(e) {
    const { schema: t, opts: r } = e;
    t.default !== void 0 && r.useDefaults && r.strictSchema && (0, le.checkStrictMode)(e, "default is ignored in the schema root");
  }
  function Fa(e) {
    const t = e.schema[e.opts.schemaId];
    t && (e.baseId = (0, Ta.resolveUrl)(e.opts.uriResolver, e.baseId, t));
  }
  function La(e) {
    if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
  }
  function Hn({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: s }) {
    const a = r.$comment;
    if (s.$comment === true) e.code((0, I._)`${C.default.self}.logger.log(${a})`);
    else if (typeof s.$comment == "function") {
      const i = (0, I.str)`${n}/$comment`, c = e.scopeValue("root", {
        ref: t.root
      });
      e.code((0, I._)`${C.default.self}.opts.$comment(${a}, ${i}, ${c}.schema)`);
    }
  }
  function Ha(e) {
    const { gen: t, schemaEnv: r, validateName: n, ValidationError: s, opts: a } = e;
    r.$async ? t.if((0, I._)`${C.default.errors} === 0`, () => t.return(C.default.data), () => t.throw((0, I._)`new ${s}(${C.default.vErrors})`)) : (t.assign((0, I._)`${n}.errors`, C.default.vErrors), a.unevaluated && Ga(e), t.return((0, I._)`${C.default.errors} === 0`));
  }
  function Ga({ gen: e, evaluated: t, props: r, items: n }) {
    r instanceof I.Name && e.assign((0, I._)`${t}.props`, r), n instanceof I.Name && e.assign((0, I._)`${t}.items`, n);
  }
  function Qr(e, t, r, n) {
    const { gen: s, schema: a, data: i, allErrors: c, opts: f, self: l } = e, { RULES: h } = l;
    if (a.$ref && (f.ignoreKeywordsWithRef || !(0, le.schemaHasRulesButRef)(a, h))) {
      s.block(() => Wn(e, "$ref", h.all.$ref.definition));
      return;
    }
    f.jtd || Ja(e, t), s.block(() => {
      for (const S of h.rules) p(S);
      p(h.post);
    });
    function p(S) {
      (0, ar.shouldUseGroup)(a, S) && (S.type ? (s.if((0, ft.checkDataType)(S.type, i, f.strictNumbers)), Yr(e, S), t.length === 1 && t[0] === S.type && r && (s.else(), (0, ft.reportTypeError)(e)), s.endIf()) : Yr(e, S), c || s.if((0, I._)`${C.default.errors} === ${n || 0}`));
    }
  }
  function Yr(e, t) {
    const { gen: r, schema: n, opts: { useDefaults: s } } = e;
    s && (0, Ra.assignDefaults)(e, t.type), r.block(() => {
      for (const a of t.rules) (0, ar.shouldUseRule)(n, a) && Wn(e, a.keyword, a.definition, t.type);
    });
  }
  function Ja(e, t) {
    e.schemaEnv.meta || !e.opts.strictTypes || (Wa(e, t), e.opts.allowUnionTypes || Ba(e, t), Xa(e, e.dataTypes));
  }
  function Wa(e, t) {
    if (t.length) {
      if (!e.dataTypes.length) {
        e.dataTypes = t;
        return;
      }
      t.forEach((r) => {
        Gn(e.dataTypes, r) || or(e, `type "${r}" not allowed by context "${e.dataTypes.join(",")}"`);
      }), Ya(e, t);
    }
  }
  function Ba(e, t) {
    t.length > 1 && !(t.length === 2 && t.includes("null")) && or(e, "use allowUnionTypes to allow union type keyword");
  }
  function Xa(e, t) {
    const r = e.self.RULES.all;
    for (const n in r) {
      const s = r[n];
      if (typeof s == "object" && (0, ar.shouldUseRule)(e.schema, s)) {
        const { type: a } = s.definition;
        a.length && !a.some((i) => Qa(t, i)) && or(e, `missing type "${a.join(",")}" for keyword "${n}"`);
      }
    }
  }
  function Qa(e, t) {
    return e.includes(t) || t === "number" && e.includes("integer");
  }
  function Gn(e, t) {
    return e.includes(t) || t === "integer" && e.includes("number");
  }
  function Ya(e, t) {
    const r = [];
    for (const n of e.dataTypes) Gn(t, n) ? r.push(n) : t.includes("integer") && n === "number" && r.push("integer");
    e.dataTypes = r;
  }
  function or(e, t) {
    const r = e.schemaEnv.baseId + e.errSchemaPath;
    t += ` at "${r}" (strictTypes)`, (0, le.checkStrictMode)(e, t, e.opts.strictTypes);
  }
  class Jn {
    constructor(t, r, n) {
      if ((0, He.validateKeywordUsage)(t, r, n), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = n, this.data = t.data, this.schema = t.schema[n], this.$data = r.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, le.schemaRefOrVal)(t, this.schema, n, this.$data), this.schemaType = r.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = r, this.$data) this.schemaCode = t.gen.const("vSchema", Bn(this.$data, t));
      else if (this.schemaCode = this.schemaValue, !(0, He.validSchemaType)(this.schema, r.schemaType, r.allowUndefined)) throw new Error(`${n} value must be ${JSON.stringify(r.schemaType)}`);
      ("code" in r ? r.trackErrors : r.errors !== false) && (this.errsCount = t.gen.const("_errs", C.default.errors));
    }
    result(t, r, n) {
      this.failResult((0, I.not)(t), r, n);
    }
    failResult(t, r, n) {
      this.gen.if(t), n ? n() : this.error(), r ? (this.gen.else(), r(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(t, r) {
      this.failResult((0, I.not)(t), void 0, r);
    }
    fail(t) {
      if (t === void 0) {
        this.error(), this.allErrors || this.gen.if(false);
        return;
      }
      this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(t) {
      if (!this.$data) return this.fail(t);
      const { schemaCode: r } = this;
      this.fail((0, I._)`${r} !== undefined && (${(0, I.or)(this.invalid$data(), t)})`);
    }
    error(t, r, n) {
      if (r) {
        this.setParams(r), this._error(t, n), this.setParams({});
        return;
      }
      this._error(t, n);
    }
    _error(t, r) {
      (t ? Ue.reportExtraError : Ue.reportError)(this, this.def.error, r);
    }
    $dataError() {
      (0, Ue.reportError)(this, this.def.$dataError || Ue.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
      (0, Ue.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(t) {
      this.allErrors || this.gen.if(t);
    }
    setParams(t, r) {
      r ? Object.assign(this.params, t) : this.params = t;
    }
    block$data(t, r, n = I.nil) {
      this.gen.block(() => {
        this.check$data(t, n), r();
      });
    }
    check$data(t = I.nil, r = I.nil) {
      if (!this.$data) return;
      const { gen: n, schemaCode: s, schemaType: a, def: i } = this;
      n.if((0, I.or)((0, I._)`${s} === undefined`, r)), t !== I.nil && n.assign(t, true), (a.length || i.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), t !== I.nil && n.assign(t, false)), n.else();
    }
    invalid$data() {
      const { gen: t, schemaCode: r, schemaType: n, def: s, it: a } = this;
      return (0, I.or)(i(), c());
      function i() {
        if (n.length) {
          if (!(r instanceof I.Name)) throw new Error("ajv implementation error");
          const f = Array.isArray(n) ? n : [
            n
          ];
          return (0, I._)`${(0, ft.checkDataTypes)(f, r, a.opts.strictNumbers, ft.DataType.Wrong)}`;
        }
        return I.nil;
      }
      function c() {
        if (s.validateSchema) {
          const f = t.scopeValue("validate$data", {
            ref: s.validateSchema
          });
          return (0, I._)`!${f}(${r})`;
        }
        return I.nil;
      }
    }
    subschema(t, r) {
      const n = (0, zt.getSubschema)(this.it, t);
      (0, zt.extendSubschemaData)(n, this.it, t), (0, zt.extendSubschemaMode)(n, t);
      const s = {
        ...this.it,
        ...n,
        items: void 0,
        props: void 0
      };
      return qa(s, r), s;
    }
    mergeEvaluated(t, r) {
      const { it: n, gen: s } = this;
      n.opts.unevaluated && (n.props !== true && t.props !== void 0 && (n.props = le.mergeEvaluated.props(s, t.props, n.props, r)), n.items !== true && t.items !== void 0 && (n.items = le.mergeEvaluated.items(s, t.items, n.items, r)));
    }
    mergeValidEvaluated(t, r) {
      const { it: n, gen: s } = this;
      if (n.opts.unevaluated && (n.props !== true || n.items !== true)) return s.if(r, () => this.mergeEvaluated(t, I.Name)), true;
    }
  }
  re.KeywordCxt = Jn;
  function Wn(e, t, r, n) {
    const s = new Jn(e, r, t);
    "code" in r ? r.code(s, n) : s.$data && r.validate ? (0, He.funcKeywordCode)(s, r) : "macro" in r ? (0, He.macroKeywordCode)(s, r) : (r.compile || r.validate) && (0, He.funcKeywordCode)(s, r);
  }
  const Za = /^\/(?:[^~]|~0|~1)*$/, xa = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Bn(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
    let s, a;
    if (e === "") return C.default.rootData;
    if (e[0] === "/") {
      if (!Za.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
      s = e, a = C.default.rootData;
    } else {
      const l = xa.exec(e);
      if (!l) throw new Error(`Invalid JSON-pointer: ${e}`);
      const h = +l[1];
      if (s = l[2], s === "#") {
        if (h >= t) throw new Error(f("property/index", h));
        return n[t - h];
      }
      if (h > t) throw new Error(f("data", h));
      if (a = r[t - h], !s) return a;
    }
    let i = a;
    const c = s.split("/");
    for (const l of c) l && (a = (0, I._)`${a}${(0, I.getProperty)((0, le.unescapeJsonPointer)(l))}`, i = (0, I._)`${i} && ${a}`);
    return i;
    function f(l, h) {
      return `Cannot access ${l} ${h} levels up, current level is ${t}`;
    }
  }
  re.getData = Bn;
  var Ye = {};
  Object.defineProperty(Ye, "__esModule", {
    value: true
  });
  class eo extends Error {
    constructor(t) {
      super("validation failed"), this.errors = t, this.ajv = this.validation = true;
    }
  }
  Ye.default = eo;
  var Me = {};
  Object.defineProperty(Me, "__esModule", {
    value: true
  });
  const Ut = W;
  class to extends Error {
    constructor(t, r, n, s) {
      super(s || `can't resolve reference ${n} from id ${r}`), this.missingRef = (0, Ut.resolveUrl)(t, r, n), this.missingSchema = (0, Ut.normalizeId)((0, Ut.getFullPath)(t, this.missingRef));
    }
  }
  Me.default = to;
  var Y = {};
  Object.defineProperty(Y, "__esModule", {
    value: true
  });
  Y.resolveSchema = Y.getCompilingSchema = Y.resolveRef = Y.compileSchema = Y.SchemaEnv = void 0;
  const x = D, ro = Ye, ge = oe, te = W, Zr = k, no = re;
  class _t {
    constructor(t) {
      var r;
      this.refs = {}, this.dynamicAnchors = {};
      let n;
      typeof t.schema == "object" && (n = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (r = t.baseId) !== null && r !== void 0 ? r : (0, te.normalizeId)(n == null ? void 0 : n[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = n == null ? void 0 : n.$async, this.refs = {};
    }
  }
  Y.SchemaEnv = _t;
  function ir(e) {
    const t = Xn.call(this, e);
    if (t) return t;
    const r = (0, te.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: n, lines: s } = this.opts.code, { ownProperties: a } = this.opts, i = new x.CodeGen(this.scope, {
      es5: n,
      lines: s,
      ownProperties: a
    });
    let c;
    e.$async && (c = i.scopeValue("Error", {
      ref: ro.default,
      code: (0, x._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const f = i.scopeName("validate");
    e.validateName = f;
    const l = {
      gen: i,
      allErrors: this.opts.allErrors,
      data: ge.default.data,
      parentData: ge.default.parentData,
      parentDataProperty: ge.default.parentDataProperty,
      dataNames: [
        ge.default.data
      ],
      dataPathArr: [
        x.nil
      ],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: i.scopeValue("schema", this.opts.code.source === true ? {
        ref: e.schema,
        code: (0, x.stringify)(e.schema)
      } : {
        ref: e.schema
      }),
      validateName: f,
      ValidationError: c,
      schema: e.schema,
      schemaEnv: e,
      rootId: r,
      baseId: e.baseId || r,
      schemaPath: x.nil,
      errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, x._)`""`,
      opts: this.opts,
      self: this
    };
    let h;
    try {
      this._compilations.add(e), (0, no.validateFunctionCode)(l), i.optimize(this.opts.code.optimize);
      const p = i.toString();
      h = `${i.scopeRefs(ge.default.scope)}return ${p}`, this.opts.code.process && (h = this.opts.code.process(h, e));
      const b = new Function(`${ge.default.self}`, `${ge.default.scope}`, h)(this, this.scope.get());
      if (this.scope.value(f, {
        ref: b
      }), b.errors = null, b.schema = e.schema, b.schemaEnv = e, e.$async && (b.$async = true), this.opts.code.source === true && (b.source = {
        validateName: f,
        validateCode: p,
        scopeValues: i._values
      }), this.opts.unevaluated) {
        const { props: g, items: w } = l;
        b.evaluated = {
          props: g instanceof x.Name ? void 0 : g,
          items: w instanceof x.Name ? void 0 : w,
          dynamicProps: g instanceof x.Name,
          dynamicItems: w instanceof x.Name
        }, b.source && (b.source.evaluated = (0, x.stringify)(b.evaluated));
      }
      return e.validate = b, e;
    } catch (p) {
      throw delete e.validate, delete e.validateName, h && this.logger.error("Error compiling schema, function code:", h), p;
    } finally {
      this._compilations.delete(e);
    }
  }
  Y.compileSchema = ir;
  function so(e, t, r) {
    var n;
    r = (0, te.resolveUrl)(this.opts.uriResolver, t, r);
    const s = e.refs[r];
    if (s) return s;
    let a = io.call(this, e, r);
    if (a === void 0) {
      const i = (n = e.localRefs) === null || n === void 0 ? void 0 : n[r], { schemaId: c } = this.opts;
      i && (a = new _t({
        schema: i,
        schemaId: c,
        root: e,
        baseId: t
      }));
    }
    if (a !== void 0) return e.refs[r] = ao.call(this, a);
  }
  Y.resolveRef = so;
  function ao(e) {
    return (0, te.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : ir.call(this, e);
  }
  function Xn(e) {
    for (const t of this._compilations) if (oo(t, e)) return t;
  }
  Y.getCompilingSchema = Xn;
  function oo(e, t) {
    return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
  }
  function io(e, t) {
    let r;
    for (; typeof (r = this.refs[t]) == "string"; ) t = r;
    return r || this.schemas[t] || gt.call(this, e, t);
  }
  function gt(e, t) {
    const r = this.opts.uriResolver.parse(t), n = (0, te._getFullPath)(this.opts.uriResolver, r);
    let s = (0, te.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
    if (Object.keys(e.schema).length > 0 && n === s) return Kt.call(this, r, e);
    const a = (0, te.normalizeId)(n), i = this.refs[a] || this.schemas[a];
    if (typeof i == "string") {
      const c = gt.call(this, e, i);
      return typeof (c == null ? void 0 : c.schema) != "object" ? void 0 : Kt.call(this, r, c);
    }
    if (typeof (i == null ? void 0 : i.schema) == "object") {
      if (i.validate || ir.call(this, i), a === (0, te.normalizeId)(t)) {
        const { schema: c } = i, { schemaId: f } = this.opts, l = c[f];
        return l && (s = (0, te.resolveUrl)(this.opts.uriResolver, s, l)), new _t({
          schema: c,
          schemaId: f,
          root: e,
          baseId: s
        });
      }
      return Kt.call(this, r, i);
    }
  }
  Y.resolveSchema = gt;
  const co = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function Kt(e, { baseId: t, schema: r, root: n }) {
    var s;
    if (((s = e.fragment) === null || s === void 0 ? void 0 : s[0]) !== "/") return;
    for (const c of e.fragment.slice(1).split("/")) {
      if (typeof r == "boolean") return;
      const f = r[(0, Zr.unescapeFragment)(c)];
      if (f === void 0) return;
      r = f;
      const l = typeof r == "object" && r[this.opts.schemaId];
      !co.has(c) && l && (t = (0, te.resolveUrl)(this.opts.uriResolver, t, l));
    }
    let a;
    if (typeof r != "boolean" && r.$ref && !(0, Zr.schemaHasRulesButRef)(r, this.RULES)) {
      const c = (0, te.resolveUrl)(this.opts.uriResolver, t, r.$ref);
      a = gt.call(this, n, c);
    }
    const { schemaId: i } = this.opts;
    if (a = a || new _t({
      schema: r,
      schemaId: i,
      root: n,
      baseId: t
    }), a.schema !== a.root.schema) return a;
  }
  const uo = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", lo = "Meta-schema for $data reference (JSON AnySchema extension proposal)", fo = "object", ho = [
    "$data"
  ], mo = {
    $data: {
      type: "string",
      anyOf: [
        {
          format: "relative-json-pointer"
        },
        {
          format: "json-pointer"
        }
      ]
    }
  }, po = false, yo = {
    $id: uo,
    description: lo,
    type: fo,
    required: ho,
    properties: mo,
    additionalProperties: po
  };
  var cr = {}, vt = {
    exports: {}
  };
  const $o = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  var _o = {
    HEX: $o
  };
  const { HEX: go } = _o, vo = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function Qn(e) {
    if (Zn(e, ".") < 3) return {
      host: e,
      isIPV4: false
    };
    const t = e.match(vo) || [], [r] = t;
    return r ? {
      host: bo(r, "."),
      isIPV4: true
    } : {
      host: e,
      isIPV4: false
    };
  }
  function xr(e, t = false) {
    let r = "", n = true;
    for (const s of e) {
      if (go[s] === void 0) return;
      s !== "0" && n === true && (n = false), n || (r += s);
    }
    return t && r.length === 0 && (r = "0"), r;
  }
  function wo(e) {
    let t = 0;
    const r = {
      error: false,
      address: "",
      zone: ""
    }, n = [], s = [];
    let a = false, i = false, c = false;
    function f() {
      if (s.length) {
        if (a === false) {
          const l = xr(s);
          if (l !== void 0) n.push(l);
          else return r.error = true, false;
        }
        s.length = 0;
      }
      return true;
    }
    for (let l = 0; l < e.length; l++) {
      const h = e[l];
      if (!(h === "[" || h === "]")) if (h === ":") {
        if (i === true && (c = true), !f()) break;
        if (t++, n.push(":"), t > 7) {
          r.error = true;
          break;
        }
        l - 1 >= 0 && e[l - 1] === ":" && (i = true);
        continue;
      } else if (h === "%") {
        if (!f()) break;
        a = true;
      } else {
        s.push(h);
        continue;
      }
    }
    return s.length && (a ? r.zone = s.join("") : c ? n.push(s.join("")) : n.push(xr(s))), r.address = n.join(""), r;
  }
  function Yn(e) {
    if (Zn(e, ":") < 2) return {
      host: e,
      isIPV6: false
    };
    const t = wo(e);
    if (t.error) return {
      host: e,
      isIPV6: false
    };
    {
      let r = t.address, n = t.address;
      return t.zone && (r += "%" + t.zone, n += "%25" + t.zone), {
        host: r,
        escapedHost: n,
        isIPV6: true
      };
    }
  }
  function bo(e, t) {
    let r = "", n = true;
    const s = e.length;
    for (let a = 0; a < s; a++) {
      const i = e[a];
      i === "0" && n ? (a + 1 <= s && e[a + 1] === t || a + 1 === s) && (r += i, n = false) : (i === t ? n = true : n = false, r += i);
    }
    return r;
  }
  function Zn(e, t) {
    let r = 0;
    for (let n = 0; n < e.length; n++) e[n] === t && r++;
    return r;
  }
  const en = /^\.\.?\//u, tn = /^\/\.(?:\/|$)/u, rn = /^\/\.\.(?:\/|$)/u, Eo = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function So(e) {
    const t = [];
    for (; e.length; ) if (e.match(en)) e = e.replace(en, "");
    else if (e.match(tn)) e = e.replace(tn, "/");
    else if (e.match(rn)) e = e.replace(rn, "/"), t.pop();
    else if (e === "." || e === "..") e = "";
    else {
      const r = e.match(Eo);
      if (r) {
        const n = r[0];
        e = e.slice(n.length), t.push(n);
      } else throw new Error("Unexpected dot segment condition");
    }
    return t.join("");
  }
  function Po(e, t) {
    const r = t !== true ? escape : unescape;
    return e.scheme !== void 0 && (e.scheme = r(e.scheme)), e.userinfo !== void 0 && (e.userinfo = r(e.userinfo)), e.host !== void 0 && (e.host = r(e.host)), e.path !== void 0 && (e.path = r(e.path)), e.query !== void 0 && (e.query = r(e.query)), e.fragment !== void 0 && (e.fragment = r(e.fragment)), e;
  }
  function No(e) {
    const t = [];
    if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
      let r = unescape(e.host);
      const n = Qn(r);
      if (n.isIPV4) r = n.host;
      else {
        const s = Yn(n.host);
        s.isIPV6 === true ? r = `[${s.escapedHost}]` : r = e.host;
      }
      t.push(r);
    }
    return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
  }
  var ko = {
    recomposeAuthority: No,
    normalizeComponentEncoding: Po,
    removeDotSegments: So,
    normalizeIPv4: Qn,
    normalizeIPv6: Yn
  };
  const jo = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, Oo = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function xn(e) {
    return typeof e.secure == "boolean" ? e.secure : String(e.scheme).toLowerCase() === "wss";
  }
  function es(e) {
    return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
  }
  function ts(e) {
    const t = String(e.scheme).toLowerCase() === "https";
    return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
  }
  function Io(e) {
    return e.secure = xn(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
  }
  function Ro(e) {
    if ((e.port === (xn(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
      const [t, r] = e.resourceName.split("?");
      e.path = t && t !== "/" ? t : void 0, e.query = r, e.resourceName = void 0;
    }
    return e.fragment = void 0, e;
  }
  function To(e, t) {
    if (!e.path) return e.error = "URN can not be parsed", e;
    const r = e.path.match(Oo);
    if (r) {
      const n = t.scheme || e.scheme || "urn";
      e.nid = r[1].toLowerCase(), e.nss = r[2];
      const s = `${n}:${t.nid || e.nid}`, a = ur[s];
      e.path = void 0, a && (e = a.parse(e, t));
    } else e.error = e.error || "URN can not be parsed.";
    return e;
  }
  function Co(e, t) {
    const r = t.scheme || e.scheme || "urn", n = e.nid.toLowerCase(), s = `${r}:${t.nid || n}`, a = ur[s];
    a && (e = a.serialize(e, t));
    const i = e, c = e.nss;
    return i.path = `${n || t.nid}:${c}`, t.skipEscape = true, i;
  }
  function Mo(e, t) {
    const r = e;
    return r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !jo.test(r.uuid)) && (r.error = r.error || "UUID is not valid."), r;
  }
  function Ao(e) {
    const t = e;
    return t.nss = (e.uuid || "").toLowerCase(), t;
  }
  const rs = {
    scheme: "http",
    domainHost: true,
    parse: es,
    serialize: ts
  }, Do = {
    scheme: "https",
    domainHost: rs.domainHost,
    parse: es,
    serialize: ts
  }, ct = {
    scheme: "ws",
    domainHost: true,
    parse: Io,
    serialize: Ro
  }, Vo = {
    scheme: "wss",
    domainHost: ct.domainHost,
    parse: ct.parse,
    serialize: ct.serialize
  }, qo = {
    scheme: "urn",
    parse: To,
    serialize: Co,
    skipNormalize: true
  }, zo = {
    scheme: "urn:uuid",
    parse: Mo,
    serialize: Ao,
    skipNormalize: true
  }, ur = {
    http: rs,
    https: Do,
    ws: ct,
    wss: Vo,
    urn: qo,
    "urn:uuid": zo
  };
  var Uo = ur;
  const { normalizeIPv6: Ko, normalizeIPv4: Fo, removeDotSegments: Fe, recomposeAuthority: Lo, normalizeComponentEncoding: tt } = ko, lr = Uo;
  function Ho(e, t) {
    return typeof e == "string" ? e = ae(de(e, t), t) : typeof e == "object" && (e = de(ae(e, t), t)), e;
  }
  function Go(e, t, r) {
    const n = Object.assign({
      scheme: "null"
    }, r), s = ns(de(e, n), de(t, n), n, true);
    return ae(s, {
      ...n,
      skipEscape: true
    });
  }
  function ns(e, t, r, n) {
    const s = {};
    return n || (e = de(ae(e, r), r), t = de(ae(t, r), r)), r = r || {}, !r.tolerant && t.scheme ? (s.scheme = t.scheme, s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = Fe(t.path || ""), s.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = Fe(t.path || ""), s.query = t.query) : (t.path ? (t.path.charAt(0) === "/" ? s.path = Fe(t.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? s.path = "/" + t.path : e.path ? s.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : s.path = t.path, s.path = Fe(s.path)), s.query = t.query) : (s.path = e.path, t.query !== void 0 ? s.query = t.query : s.query = e.query), s.userinfo = e.userinfo, s.host = e.host, s.port = e.port), s.scheme = e.scheme), s.fragment = t.fragment, s;
  }
  function Jo(e, t, r) {
    return typeof e == "string" ? (e = unescape(e), e = ae(tt(de(e, r), true), {
      ...r,
      skipEscape: true
    })) : typeof e == "object" && (e = ae(tt(e, true), {
      ...r,
      skipEscape: true
    })), typeof t == "string" ? (t = unescape(t), t = ae(tt(de(t, r), true), {
      ...r,
      skipEscape: true
    })) : typeof t == "object" && (t = ae(tt(t, true), {
      ...r,
      skipEscape: true
    })), e.toLowerCase() === t.toLowerCase();
  }
  function ae(e, t) {
    const r = {
      host: e.host,
      scheme: e.scheme,
      userinfo: e.userinfo,
      port: e.port,
      path: e.path,
      query: e.query,
      nid: e.nid,
      nss: e.nss,
      uuid: e.uuid,
      fragment: e.fragment,
      reference: e.reference,
      resourceName: e.resourceName,
      secure: e.secure,
      error: ""
    }, n = Object.assign({}, t), s = [], a = lr[(n.scheme || r.scheme || "").toLowerCase()];
    a && a.serialize && a.serialize(r, n), r.path !== void 0 && (n.skipEscape ? r.path = unescape(r.path) : (r.path = escape(r.path), r.scheme !== void 0 && (r.path = r.path.split("%3A").join(":")))), n.reference !== "suffix" && r.scheme && s.push(r.scheme, ":");
    const i = Lo(r);
    if (i !== void 0 && (n.reference !== "suffix" && s.push("//"), s.push(i), r.path && r.path.charAt(0) !== "/" && s.push("/")), r.path !== void 0) {
      let c = r.path;
      !n.absolutePath && (!a || !a.absolutePath) && (c = Fe(c)), i === void 0 && (c = c.replace(/^\/\//u, "/%2F")), s.push(c);
    }
    return r.query !== void 0 && s.push("?", r.query), r.fragment !== void 0 && s.push("#", r.fragment), s.join("");
  }
  const Wo = Array.from({
    length: 127
  }, (e, t) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(t)));
  function Bo(e) {
    let t = 0;
    for (let r = 0, n = e.length; r < n; ++r) if (t = e.charCodeAt(r), t > 126 || Wo[t]) return true;
    return false;
  }
  const Xo = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function de(e, t) {
    const r = Object.assign({}, t), n = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    }, s = e.indexOf("%") !== -1;
    let a = false;
    r.reference === "suffix" && (e = (r.scheme ? r.scheme + ":" : "") + "//" + e);
    const i = e.match(Xo);
    if (i) {
      if (n.scheme = i[1], n.userinfo = i[3], n.host = i[4], n.port = parseInt(i[5], 10), n.path = i[6] || "", n.query = i[7], n.fragment = i[8], isNaN(n.port) && (n.port = i[5]), n.host) {
        const f = Fo(n.host);
        if (f.isIPV4 === false) {
          const l = Ko(f.host);
          n.host = l.host.toLowerCase(), a = l.isIPV6;
        } else n.host = f.host, a = true;
      }
      n.scheme === void 0 && n.userinfo === void 0 && n.host === void 0 && n.port === void 0 && n.query === void 0 && !n.path ? n.reference = "same-document" : n.scheme === void 0 ? n.reference = "relative" : n.fragment === void 0 ? n.reference = "absolute" : n.reference = "uri", r.reference && r.reference !== "suffix" && r.reference !== n.reference && (n.error = n.error || "URI is not a " + r.reference + " reference.");
      const c = lr[(r.scheme || n.scheme || "").toLowerCase()];
      if (!r.unicodeSupport && (!c || !c.unicodeSupport) && n.host && (r.domainHost || c && c.domainHost) && a === false && Bo(n.host)) try {
        n.host = URL.domainToASCII(n.host.toLowerCase());
      } catch (f) {
        n.error = n.error || "Host's domain name can not be converted to ASCII: " + f;
      }
      (!c || c && !c.skipNormalize) && (s && n.scheme !== void 0 && (n.scheme = unescape(n.scheme)), s && n.host !== void 0 && (n.host = unescape(n.host)), n.path && (n.path = escape(unescape(n.path))), n.fragment && (n.fragment = encodeURI(decodeURIComponent(n.fragment)))), c && c.parse && c.parse(n, r);
    } else n.error = n.error || "URI can not be parsed.";
    return n;
  }
  const dr = {
    SCHEMES: lr,
    normalize: Ho,
    resolve: Go,
    resolveComponents: ns,
    equal: Jo,
    serialize: ae,
    parse: de
  };
  vt.exports = dr;
  vt.exports.default = dr;
  vt.exports.fastUri = dr;
  var Qo = vt.exports;
  Object.defineProperty(cr, "__esModule", {
    value: true
  });
  const ss = Qo;
  ss.code = 'require("ajv/dist/runtime/uri").default';
  cr.default = ss;
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = re;
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: true,
      get: function() {
        return t.KeywordCxt;
      }
    });
    var r = D;
    Object.defineProperty(e, "_", {
      enumerable: true,
      get: function() {
        return r._;
      }
    }), Object.defineProperty(e, "str", {
      enumerable: true,
      get: function() {
        return r.str;
      }
    }), Object.defineProperty(e, "stringify", {
      enumerable: true,
      get: function() {
        return r.stringify;
      }
    }), Object.defineProperty(e, "nil", {
      enumerable: true,
      get: function() {
        return r.nil;
      }
    }), Object.defineProperty(e, "Name", {
      enumerable: true,
      get: function() {
        return r.Name;
      }
    }), Object.defineProperty(e, "CodeGen", {
      enumerable: true,
      get: function() {
        return r.CodeGen;
      }
    });
    const n = Ye, s = Me, a = Ee, i = Y, c = D, f = W, l = H, h = k, p = yo, S = cr, b = (N, m) => new RegExp(N, m);
    b.code = "new RegExp";
    const g = [
      "removeAdditional",
      "useDefaults",
      "coerceTypes"
    ], w = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), y = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, d = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, _ = 200;
    function P(N) {
      var m, E, $, o, u, v, R, T, q, V, G, Ne, Pt, Nt, kt, jt, Ot, It, Rt, Tt, Ct, Mt, At, Dt, Vt;
      const ze = N.strict, qt = (m = N.code) === null || m === void 0 ? void 0 : m.optimize, Fr = qt === true || qt === void 0 ? 1 : qt || 0, Lr = ($ = (E = N.code) === null || E === void 0 ? void 0 : E.regExp) !== null && $ !== void 0 ? $ : b, hs = (o = N.uriResolver) !== null && o !== void 0 ? o : S.default;
      return {
        strictSchema: (v = (u = N.strictSchema) !== null && u !== void 0 ? u : ze) !== null && v !== void 0 ? v : true,
        strictNumbers: (T = (R = N.strictNumbers) !== null && R !== void 0 ? R : ze) !== null && T !== void 0 ? T : true,
        strictTypes: (V = (q = N.strictTypes) !== null && q !== void 0 ? q : ze) !== null && V !== void 0 ? V : "log",
        strictTuples: (Ne = (G = N.strictTuples) !== null && G !== void 0 ? G : ze) !== null && Ne !== void 0 ? Ne : "log",
        strictRequired: (Nt = (Pt = N.strictRequired) !== null && Pt !== void 0 ? Pt : ze) !== null && Nt !== void 0 ? Nt : false,
        code: N.code ? {
          ...N.code,
          optimize: Fr,
          regExp: Lr
        } : {
          optimize: Fr,
          regExp: Lr
        },
        loopRequired: (kt = N.loopRequired) !== null && kt !== void 0 ? kt : _,
        loopEnum: (jt = N.loopEnum) !== null && jt !== void 0 ? jt : _,
        meta: (Ot = N.meta) !== null && Ot !== void 0 ? Ot : true,
        messages: (It = N.messages) !== null && It !== void 0 ? It : true,
        inlineRefs: (Rt = N.inlineRefs) !== null && Rt !== void 0 ? Rt : true,
        schemaId: (Tt = N.schemaId) !== null && Tt !== void 0 ? Tt : "$id",
        addUsedSchema: (Ct = N.addUsedSchema) !== null && Ct !== void 0 ? Ct : true,
        validateSchema: (Mt = N.validateSchema) !== null && Mt !== void 0 ? Mt : true,
        validateFormats: (At = N.validateFormats) !== null && At !== void 0 ? At : true,
        unicodeRegExp: (Dt = N.unicodeRegExp) !== null && Dt !== void 0 ? Dt : true,
        int32range: (Vt = N.int32range) !== null && Vt !== void 0 ? Vt : true,
        uriResolver: hs
      };
    }
    class j {
      constructor(m = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), m = this.opts = {
          ...m,
          ...P(m)
        };
        const { es5: E, lines: $ } = this.opts.code;
        this.scope = new c.ValueScope({
          scope: {},
          prefixes: w,
          es5: E,
          lines: $
        }), this.logger = ce(m.logger);
        const o = m.validateFormats;
        m.validateFormats = false, this.RULES = (0, a.getRules)(), O.call(this, y, m, "NOT SUPPORTED"), O.call(this, d, m, "DEPRECATED", "warn"), this._metaOpts = _e.call(this), m.formats && ie.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), m.keywords && fe.call(this, m.keywords), typeof m.meta == "object" && this.addMetaSchema(m.meta), L.call(this), m.validateFormats = o;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: m, meta: E, schemaId: $ } = this.opts;
        let o = p;
        $ === "id" && (o = {
          ...p
        }, o.id = o.$id, delete o.$id), E && m && this.addMetaSchema(o, o[$], false);
      }
      defaultMeta() {
        const { meta: m, schemaId: E } = this.opts;
        return this.opts.defaultMeta = typeof m == "object" ? m[E] || m : void 0;
      }
      validate(m, E) {
        let $;
        if (typeof m == "string") {
          if ($ = this.getSchema(m), !$) throw new Error(`no schema with key or ref "${m}"`);
        } else $ = this.compile(m);
        const o = $(E);
        return "$async" in $ || (this.errors = $.errors), o;
      }
      compile(m, E) {
        const $ = this._addSchema(m, E);
        return $.validate || this._compileSchemaEnv($);
      }
      compileAsync(m, E) {
        if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
        const { loadSchema: $ } = this.opts;
        return o.call(this, m, E);
        async function o(V, G) {
          await u.call(this, V.$schema);
          const Ne = this._addSchema(V, G);
          return Ne.validate || v.call(this, Ne);
        }
        async function u(V) {
          V && !this.getSchema(V) && await o.call(this, {
            $ref: V
          }, true);
        }
        async function v(V) {
          try {
            return this._compileSchemaEnv(V);
          } catch (G) {
            if (!(G instanceof s.default)) throw G;
            return R.call(this, G), await T.call(this, G.missingSchema), v.call(this, V);
          }
        }
        function R({ missingSchema: V, missingRef: G }) {
          if (this.refs[V]) throw new Error(`AnySchema ${V} is loaded but ${G} cannot be resolved`);
        }
        async function T(V) {
          const G = await q.call(this, V);
          this.refs[V] || await u.call(this, G.$schema), this.refs[V] || this.addSchema(G, V, E);
        }
        async function q(V) {
          const G = this._loading[V];
          if (G) return G;
          try {
            return await (this._loading[V] = $(V));
          } finally {
            delete this._loading[V];
          }
        }
      }
      addSchema(m, E, $, o = this.opts.validateSchema) {
        if (Array.isArray(m)) {
          for (const v of m) this.addSchema(v, void 0, $, o);
          return this;
        }
        let u;
        if (typeof m == "object") {
          const { schemaId: v } = this.opts;
          if (u = m[v], u !== void 0 && typeof u != "string") throw new Error(`schema ${v} must be string`);
        }
        return E = (0, f.normalizeId)(E || u), this._checkUnique(E), this.schemas[E] = this._addSchema(m, $, E, o, true), this;
      }
      addMetaSchema(m, E, $ = this.opts.validateSchema) {
        return this.addSchema(m, E, true, $), this;
      }
      validateSchema(m, E) {
        if (typeof m == "boolean") return true;
        let $;
        if ($ = m.$schema, $ !== void 0 && typeof $ != "string") throw new Error("$schema must be a string");
        if ($ = $ || this.opts.defaultMeta || this.defaultMeta(), !$) return this.logger.warn("meta-schema not available"), this.errors = null, true;
        const o = this.validate($, m);
        if (!o && E) {
          const u = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(u);
          else throw new Error(u);
        }
        return o;
      }
      getSchema(m) {
        let E;
        for (; typeof (E = U.call(this, m)) == "string"; ) m = E;
        if (E === void 0) {
          const { schemaId: $ } = this.opts, o = new i.SchemaEnv({
            schema: {},
            schemaId: $
          });
          if (E = i.resolveSchema.call(this, o, m), !E) return;
          this.refs[m] = E;
        }
        return E.validate || this._compileSchemaEnv(E);
      }
      removeSchema(m) {
        if (m instanceof RegExp) return this._removeAllSchemas(this.schemas, m), this._removeAllSchemas(this.refs, m), this;
        switch (typeof m) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const E = U.call(this, m);
            return typeof E == "object" && this._cache.delete(E.schema), delete this.schemas[m], delete this.refs[m], this;
          }
          case "object": {
            const E = m;
            this._cache.delete(E);
            let $ = m[this.opts.schemaId];
            return $ && ($ = (0, f.normalizeId)($), delete this.schemas[$], delete this.refs[$]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(m) {
        for (const E of m) this.addKeyword(E);
        return this;
      }
      addKeyword(m, E) {
        let $;
        if (typeof m == "string") $ = m, typeof E == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), E.keyword = $);
        else if (typeof m == "object" && E === void 0) {
          if (E = m, $ = E.keyword, Array.isArray($) && !$.length) throw new Error("addKeywords: keyword must be string or non-empty array");
        } else throw new Error("invalid addKeywords parameters");
        if (he.call(this, $, E), !E) return (0, h.eachItem)($, (u) => qe.call(this, u)), this;
        Et.call(this, E);
        const o = {
          ...E,
          type: (0, l.getJSONTypes)(E.type),
          schemaType: (0, l.getJSONTypes)(E.schemaType)
        };
        return (0, h.eachItem)($, o.type.length === 0 ? (u) => qe.call(this, u, o) : (u) => o.type.forEach((v) => qe.call(this, u, o, v))), this;
      }
      getKeyword(m) {
        const E = this.RULES.all[m];
        return typeof E == "object" ? E.definition : !!E;
      }
      removeKeyword(m) {
        const { RULES: E } = this;
        delete E.keywords[m], delete E.all[m];
        for (const $ of E.rules) {
          const o = $.rules.findIndex((u) => u.keyword === m);
          o >= 0 && $.rules.splice(o, 1);
        }
        return this;
      }
      addFormat(m, E) {
        return typeof E == "string" && (E = new RegExp(E)), this.formats[m] = E, this;
      }
      errorsText(m = this.errors, { separator: E = ", ", dataVar: $ = "data" } = {}) {
        return !m || m.length === 0 ? "No errors" : m.map((o) => `${$}${o.instancePath} ${o.message}`).reduce((o, u) => o + E + u);
      }
      $dataMetaSchema(m, E) {
        const $ = this.RULES.all;
        m = JSON.parse(JSON.stringify(m));
        for (const o of E) {
          const u = o.split("/").slice(1);
          let v = m;
          for (const R of u) v = v[R];
          for (const R in $) {
            const T = $[R];
            if (typeof T != "object") continue;
            const { $data: q } = T.definition, V = v[R];
            q && V && (v[R] = et(V));
          }
        }
        return m;
      }
      _removeAllSchemas(m, E) {
        for (const $ in m) {
          const o = m[$];
          (!E || E.test($)) && (typeof o == "string" ? delete m[$] : o && !o.meta && (this._cache.delete(o.schema), delete m[$]));
        }
      }
      _addSchema(m, E, $, o = this.opts.validateSchema, u = this.opts.addUsedSchema) {
        let v;
        const { schemaId: R } = this.opts;
        if (typeof m == "object") v = m[R];
        else {
          if (this.opts.jtd) throw new Error("schema must be object");
          if (typeof m != "boolean") throw new Error("schema must be object or boolean");
        }
        let T = this._cache.get(m);
        if (T !== void 0) return T;
        $ = (0, f.normalizeId)(v || $);
        const q = f.getSchemaRefs.call(this, m, $);
        return T = new i.SchemaEnv({
          schema: m,
          schemaId: R,
          meta: E,
          baseId: $,
          localRefs: q
        }), this._cache.set(T.schema, T), u && !$.startsWith("#") && ($ && this._checkUnique($), this.refs[$] = T), o && this.validateSchema(m, true), T;
      }
      _checkUnique(m) {
        if (this.schemas[m] || this.refs[m]) throw new Error(`schema with key or id "${m}" already exists`);
      }
      _compileSchemaEnv(m) {
        if (m.meta ? this._compileMetaSchema(m) : i.compileSchema.call(this, m), !m.validate) throw new Error("ajv implementation error");
        return m.validate;
      }
      _compileMetaSchema(m) {
        const E = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, m);
        } finally {
          this.opts = E;
        }
      }
    }
    j.ValidationError = n.default, j.MissingRefError = s.default, e.default = j;
    function O(N, m, E, $ = "error") {
      for (const o in N) {
        const u = o;
        u in m && this.logger[$](`${E}: option ${o}. ${N[u]}`);
      }
    }
    function U(N) {
      return N = (0, f.normalizeId)(N), this.schemas[N] || this.refs[N];
    }
    function L() {
      const N = this.opts.schemas;
      if (N) if (Array.isArray(N)) this.addSchema(N);
      else for (const m in N) this.addSchema(N[m], m);
    }
    function ie() {
      for (const N in this.opts.formats) {
        const m = this.opts.formats[N];
        m && this.addFormat(N, m);
      }
    }
    function fe(N) {
      if (Array.isArray(N)) {
        this.addVocabulary(N);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const m in N) {
        const E = N[m];
        E.keyword || (E.keyword = m), this.addKeyword(E);
      }
    }
    function _e() {
      const N = {
        ...this.opts
      };
      for (const m of g) delete N[m];
      return N;
    }
    const Ve = {
      log() {
      },
      warn() {
      },
      error() {
      }
    };
    function ce(N) {
      if (N === false) return Ve;
      if (N === void 0) return console;
      if (N.log && N.warn && N.error) return N;
      throw new Error("logger must implement log, warn and error methods");
    }
    const Pe = /^[a-z_$][a-z0-9_$:-]*$/i;
    function he(N, m) {
      const { RULES: E } = this;
      if ((0, h.eachItem)(N, ($) => {
        if (E.keywords[$]) throw new Error(`Keyword ${$} is already defined`);
        if (!Pe.test($)) throw new Error(`Keyword ${$} has invalid name`);
      }), !!m && m.$data && !("code" in m || "validate" in m)) throw new Error('$data keyword must have "code" or "validate" function');
    }
    function qe(N, m, E) {
      var $;
      const o = m == null ? void 0 : m.post;
      if (E && o) throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: u } = this;
      let v = o ? u.post : u.rules.find(({ type: T }) => T === E);
      if (v || (v = {
        type: E,
        rules: []
      }, u.rules.push(v)), u.keywords[N] = true, !m) return;
      const R = {
        keyword: N,
        definition: {
          ...m,
          type: (0, l.getJSONTypes)(m.type),
          schemaType: (0, l.getJSONTypes)(m.schemaType)
        }
      };
      m.before ? xe.call(this, v, R, m.before) : v.rules.push(R), u.all[N] = R, ($ = m.implements) === null || $ === void 0 || $.forEach((T) => this.addKeyword(T));
    }
    function xe(N, m, E) {
      const $ = N.rules.findIndex((o) => o.keyword === E);
      $ >= 0 ? N.rules.splice($, 0, m) : (N.rules.push(m), this.logger.warn(`rule ${E} is not defined`));
    }
    function Et(N) {
      let { metaSchema: m } = N;
      m !== void 0 && (N.$data && this.opts.$data && (m = et(m)), N.validateSchema = this.compile(m, true));
    }
    const St = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function et(N) {
      return {
        anyOf: [
          N,
          St
        ]
      };
    }
  })($n);
  var fr = {}, hr = {}, mr = {};
  Object.defineProperty(mr, "__esModule", {
    value: true
  });
  const Yo = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  mr.default = Yo;
  var Se = {};
  Object.defineProperty(Se, "__esModule", {
    value: true
  });
  Se.callRef = Se.getValidate = void 0;
  const Zo = Me, nn = A, Q = D, je = oe, sn = Y, rt = k, xo = {
    keyword: "$ref",
    schemaType: "string",
    code(e) {
      const { gen: t, schema: r, it: n } = e, { baseId: s, schemaEnv: a, validateName: i, opts: c, self: f } = n, { root: l } = a;
      if ((r === "#" || r === "#/") && s === l.baseId) return p();
      const h = sn.resolveRef.call(f, l, s, r);
      if (h === void 0) throw new Zo.default(n.opts.uriResolver, s, r);
      if (h instanceof sn.SchemaEnv) return S(h);
      return b(h);
      function p() {
        if (a === l) return ut(e, i, a, a.$async);
        const g = t.scopeValue("root", {
          ref: l
        });
        return ut(e, (0, Q._)`${g}.validate`, l, l.$async);
      }
      function S(g) {
        const w = as(e, g);
        ut(e, w, g, g.$async);
      }
      function b(g) {
        const w = t.scopeValue("schema", c.code.source === true ? {
          ref: g,
          code: (0, Q.stringify)(g)
        } : {
          ref: g
        }), y = t.name("valid"), d = e.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: Q.nil,
          topSchemaRef: w,
          errSchemaPath: r
        }, y);
        e.mergeEvaluated(d), e.ok(y);
      }
    }
  };
  function as(e, t) {
    const { gen: r } = e;
    return t.validate ? r.scopeValue("validate", {
      ref: t.validate
    }) : (0, Q._)`${r.scopeValue("wrapper", {
      ref: t
    })}.validate`;
  }
  Se.getValidate = as;
  function ut(e, t, r, n) {
    const { gen: s, it: a } = e, { allErrors: i, schemaEnv: c, opts: f } = a, l = f.passContext ? je.default.this : Q.nil;
    n ? h() : p();
    function h() {
      if (!c.$async) throw new Error("async schema referenced by sync schema");
      const g = s.let("valid");
      s.try(() => {
        s.code((0, Q._)`await ${(0, nn.callValidateCode)(e, t, l)}`), b(t), i || s.assign(g, true);
      }, (w) => {
        s.if((0, Q._)`!(${w} instanceof ${a.ValidationError})`, () => s.throw(w)), S(w), i || s.assign(g, false);
      }), e.ok(g);
    }
    function p() {
      e.result((0, nn.callValidateCode)(e, t, l), () => b(t), () => S(t));
    }
    function S(g) {
      const w = (0, Q._)`${g}.errors`;
      s.assign(je.default.vErrors, (0, Q._)`${je.default.vErrors} === null ? ${w} : ${je.default.vErrors}.concat(${w})`), s.assign(je.default.errors, (0, Q._)`${je.default.vErrors}.length`);
    }
    function b(g) {
      var w;
      if (!a.opts.unevaluated) return;
      const y = (w = r == null ? void 0 : r.validate) === null || w === void 0 ? void 0 : w.evaluated;
      if (a.props !== true) if (y && !y.dynamicProps) y.props !== void 0 && (a.props = rt.mergeEvaluated.props(s, y.props, a.props));
      else {
        const d = s.var("props", (0, Q._)`${g}.evaluated.props`);
        a.props = rt.mergeEvaluated.props(s, d, a.props, Q.Name);
      }
      if (a.items !== true) if (y && !y.dynamicItems) y.items !== void 0 && (a.items = rt.mergeEvaluated.items(s, y.items, a.items));
      else {
        const d = s.var("items", (0, Q._)`${g}.evaluated.items`);
        a.items = rt.mergeEvaluated.items(s, d, a.items, Q.Name);
      }
    }
  }
  Se.callRef = ut;
  Se.default = xo;
  Object.defineProperty(hr, "__esModule", {
    value: true
  });
  const ei = mr, ti = Se, ri = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    {
      keyword: "$comment"
    },
    "definitions",
    ei.default,
    ti.default
  ];
  hr.default = ri;
  var pr = {}, yr = {};
  Object.defineProperty(yr, "__esModule", {
    value: true
  });
  const ht = D, pe = ht.operators, mt = {
    maximum: {
      okStr: "<=",
      ok: pe.LTE,
      fail: pe.GT
    },
    minimum: {
      okStr: ">=",
      ok: pe.GTE,
      fail: pe.LT
    },
    exclusiveMaximum: {
      okStr: "<",
      ok: pe.LT,
      fail: pe.GTE
    },
    exclusiveMinimum: {
      okStr: ">",
      ok: pe.GT,
      fail: pe.LTE
    }
  }, ni = {
    message: ({ keyword: e, schemaCode: t }) => (0, ht.str)`must be ${mt[e].okStr} ${t}`,
    params: ({ keyword: e, schemaCode: t }) => (0, ht._)`{comparison: ${mt[e].okStr}, limit: ${t}}`
  }, si = {
    keyword: Object.keys(mt),
    type: "number",
    schemaType: "number",
    $data: true,
    error: ni,
    code(e) {
      const { keyword: t, data: r, schemaCode: n } = e;
      e.fail$data((0, ht._)`${r} ${mt[t].fail} ${n} || isNaN(${r})`);
    }
  };
  yr.default = si;
  var $r = {};
  Object.defineProperty($r, "__esModule", {
    value: true
  });
  const Ge = D, ai = {
    message: ({ schemaCode: e }) => (0, Ge.str)`must be multiple of ${e}`,
    params: ({ schemaCode: e }) => (0, Ge._)`{multipleOf: ${e}}`
  }, oi = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: ai,
    code(e) {
      const { gen: t, data: r, schemaCode: n, it: s } = e, a = s.opts.multipleOfPrecision, i = t.let("res"), c = a ? (0, Ge._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${a}` : (0, Ge._)`${i} !== parseInt(${i})`;
      e.fail$data((0, Ge._)`(${n} === 0 || (${i} = ${r}/${n}, ${c}))`);
    }
  };
  $r.default = oi;
  var _r = {};
  Object.defineProperty(_r, "__esModule", {
    value: true
  });
  const we = D, ii = k, ci = ps, ui = {
    message({ keyword: e, schemaCode: t }) {
      const r = e === "maxLength" ? "more" : "fewer";
      return (0, we.str)`must NOT have ${r} than ${t} characters`;
    },
    params: ({ schemaCode: e }) => (0, we._)`{limit: ${e}}`
  }, li = {
    keyword: [
      "maxLength",
      "minLength"
    ],
    type: "string",
    schemaType: "number",
    $data: true,
    error: ui,
    code(e) {
      const { keyword: t, data: r, schemaCode: n, it: s } = e, a = t === "maxLength" ? we.operators.GT : we.operators.LT, i = s.opts.unicode === false ? (0, we._)`${r}.length` : (0, we._)`${(0, ii.useFunc)(e.gen, ci.default)}(${r})`;
      e.fail$data((0, we._)`${i} ${a} ${n}`);
    }
  };
  _r.default = li;
  var gr = {};
  Object.defineProperty(gr, "__esModule", {
    value: true
  });
  const di = A, pt = D, fi = {
    message: ({ schemaCode: e }) => (0, pt.str)`must match pattern "${e}"`,
    params: ({ schemaCode: e }) => (0, pt._)`{pattern: ${e}}`
  }, hi = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: fi,
    code(e) {
      const { data: t, $data: r, schema: n, schemaCode: s, it: a } = e, i = a.opts.unicodeRegExp ? "u" : "", c = r ? (0, pt._)`(new RegExp(${s}, ${i}))` : (0, di.usePattern)(e, n);
      e.fail$data((0, pt._)`!${c}.test(${t})`);
    }
  };
  gr.default = hi;
  var vr = {};
  Object.defineProperty(vr, "__esModule", {
    value: true
  });
  const Je = D, mi = {
    message({ keyword: e, schemaCode: t }) {
      const r = e === "maxProperties" ? "more" : "fewer";
      return (0, Je.str)`must NOT have ${r} than ${t} properties`;
    },
    params: ({ schemaCode: e }) => (0, Je._)`{limit: ${e}}`
  }, pi = {
    keyword: [
      "maxProperties",
      "minProperties"
    ],
    type: "object",
    schemaType: "number",
    $data: true,
    error: mi,
    code(e) {
      const { keyword: t, data: r, schemaCode: n } = e, s = t === "maxProperties" ? Je.operators.GT : Je.operators.LT;
      e.fail$data((0, Je._)`Object.keys(${r}).length ${s} ${n}`);
    }
  };
  vr.default = pi;
  var wr = {};
  Object.defineProperty(wr, "__esModule", {
    value: true
  });
  const Ke = A, We = D, yi = k, $i = {
    message: ({ params: { missingProperty: e } }) => (0, We.str)`must have required property '${e}'`,
    params: ({ params: { missingProperty: e } }) => (0, We._)`{missingProperty: ${e}}`
  }, _i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: $i,
    code(e) {
      const { gen: t, schema: r, schemaCode: n, data: s, $data: a, it: i } = e, { opts: c } = i;
      if (!a && r.length === 0) return;
      const f = r.length >= c.loopRequired;
      if (i.allErrors ? l() : h(), c.strictRequired) {
        const b = e.parentSchema.properties, { definedProperties: g } = e.it;
        for (const w of r) if ((b == null ? void 0 : b[w]) === void 0 && !g.has(w)) {
          const y = i.schemaEnv.baseId + i.errSchemaPath, d = `required property "${w}" is not defined at "${y}" (strictRequired)`;
          (0, yi.checkStrictMode)(i, d, i.opts.strictRequired);
        }
      }
      function l() {
        if (f || a) e.block$data(We.nil, p);
        else for (const b of r) (0, Ke.checkReportMissingProp)(e, b);
      }
      function h() {
        const b = t.let("missing");
        if (f || a) {
          const g = t.let("valid", true);
          e.block$data(g, () => S(b, g)), e.ok(g);
        } else t.if((0, Ke.checkMissingProp)(e, r, b)), (0, Ke.reportMissingProp)(e, b), t.else();
      }
      function p() {
        t.forOf("prop", n, (b) => {
          e.setParams({
            missingProperty: b
          }), t.if((0, Ke.noPropertyInData)(t, s, b, c.ownProperties), () => e.error());
        });
      }
      function S(b, g) {
        e.setParams({
          missingProperty: b
        }), t.forOf(b, n, () => {
          t.assign(g, (0, Ke.propertyInData)(t, s, b, c.ownProperties)), t.if((0, We.not)(g), () => {
            e.error(), t.break();
          });
        }, We.nil);
      }
    }
  };
  wr.default = _i;
  var br = {};
  Object.defineProperty(br, "__esModule", {
    value: true
  });
  const Be = D, gi = {
    message({ keyword: e, schemaCode: t }) {
      const r = e === "maxItems" ? "more" : "fewer";
      return (0, Be.str)`must NOT have ${r} than ${t} items`;
    },
    params: ({ schemaCode: e }) => (0, Be._)`{limit: ${e}}`
  }, vi = {
    keyword: [
      "maxItems",
      "minItems"
    ],
    type: "array",
    schemaType: "number",
    $data: true,
    error: gi,
    code(e) {
      const { keyword: t, data: r, schemaCode: n } = e, s = t === "maxItems" ? Be.operators.GT : Be.operators.LT;
      e.fail$data((0, Be._)`${r}.length ${s} ${n}`);
    }
  };
  br.default = vi;
  var Er = {}, Ze = {};
  Object.defineProperty(Ze, "__esModule", {
    value: true
  });
  const os = Cn;
  os.code = 'require("ajv/dist/runtime/equal").default';
  Ze.default = os;
  Object.defineProperty(Er, "__esModule", {
    value: true
  });
  const Ft = H, J = D, wi = k, bi = Ze, Ei = {
    message: ({ params: { i: e, j: t } }) => (0, J.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
    params: ({ params: { i: e, j: t } }) => (0, J._)`{i: ${e}, j: ${t}}`
  }, Si = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: Ei,
    code(e) {
      const { gen: t, data: r, $data: n, schema: s, parentSchema: a, schemaCode: i, it: c } = e;
      if (!n && !s) return;
      const f = t.let("valid"), l = a.items ? (0, Ft.getSchemaTypes)(a.items) : [];
      e.block$data(f, h, (0, J._)`${i} === false`), e.ok(f);
      function h() {
        const g = t.let("i", (0, J._)`${r}.length`), w = t.let("j");
        e.setParams({
          i: g,
          j: w
        }), t.assign(f, true), t.if((0, J._)`${g} > 1`, () => (p() ? S : b)(g, w));
      }
      function p() {
        return l.length > 0 && !l.some((g) => g === "object" || g === "array");
      }
      function S(g, w) {
        const y = t.name("item"), d = (0, Ft.checkDataTypes)(l, y, c.opts.strictNumbers, Ft.DataType.Wrong), _ = t.const("indices", (0, J._)`{}`);
        t.for((0, J._)`;${g}--;`, () => {
          t.let(y, (0, J._)`${r}[${g}]`), t.if(d, (0, J._)`continue`), l.length > 1 && t.if((0, J._)`typeof ${y} == "string"`, (0, J._)`${y} += "_"`), t.if((0, J._)`typeof ${_}[${y}] == "number"`, () => {
            t.assign(w, (0, J._)`${_}[${y}]`), e.error(), t.assign(f, false).break();
          }).code((0, J._)`${_}[${y}] = ${g}`);
        });
      }
      function b(g, w) {
        const y = (0, wi.useFunc)(t, bi.default), d = t.name("outer");
        t.label(d).for((0, J._)`;${g}--;`, () => t.for((0, J._)`${w} = ${g}; ${w}--;`, () => t.if((0, J._)`${y}(${r}[${g}], ${r}[${w}])`, () => {
          e.error(), t.assign(f, false).break(d);
        })));
      }
    }
  };
  Er.default = Si;
  var Sr = {};
  Object.defineProperty(Sr, "__esModule", {
    value: true
  });
  const Xt = D, Pi = k, Ni = Ze, ki = {
    message: "must be equal to constant",
    params: ({ schemaCode: e }) => (0, Xt._)`{allowedValue: ${e}}`
  }, ji = {
    keyword: "const",
    $data: true,
    error: ki,
    code(e) {
      const { gen: t, data: r, $data: n, schemaCode: s, schema: a } = e;
      n || a && typeof a == "object" ? e.fail$data((0, Xt._)`!${(0, Pi.useFunc)(t, Ni.default)}(${r}, ${s})`) : e.fail((0, Xt._)`${a} !== ${r}`);
    }
  };
  Sr.default = ji;
  var Pr = {};
  Object.defineProperty(Pr, "__esModule", {
    value: true
  });
  const Le = D, Oi = k, Ii = Ze, Ri = {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode: e }) => (0, Le._)`{allowedValues: ${e}}`
  }, Ti = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: Ri,
    code(e) {
      const { gen: t, data: r, $data: n, schema: s, schemaCode: a, it: i } = e;
      if (!n && s.length === 0) throw new Error("enum must have non-empty array");
      const c = s.length >= i.opts.loopEnum;
      let f;
      const l = () => f ?? (f = (0, Oi.useFunc)(t, Ii.default));
      let h;
      if (c || n) h = t.let("valid"), e.block$data(h, p);
      else {
        if (!Array.isArray(s)) throw new Error("ajv implementation error");
        const b = t.const("vSchema", a);
        h = (0, Le.or)(...s.map((g, w) => S(b, w)));
      }
      e.pass(h);
      function p() {
        t.assign(h, false), t.forOf("v", a, (b) => t.if((0, Le._)`${l()}(${r}, ${b})`, () => t.assign(h, true).break()));
      }
      function S(b, g) {
        const w = s[g];
        return typeof w == "object" && w !== null ? (0, Le._)`${l()}(${r}, ${b}[${g}])` : (0, Le._)`${r} === ${w}`;
      }
    }
  };
  Pr.default = Ti;
  Object.defineProperty(pr, "__esModule", {
    value: true
  });
  const Ci = yr, Mi = $r, Ai = _r, Di = gr, Vi = vr, qi = wr, zi = br, Ui = Er, Ki = Sr, Fi = Pr, Li = [
    Ci.default,
    Mi.default,
    Ai.default,
    Di.default,
    Vi.default,
    qi.default,
    zi.default,
    Ui.default,
    {
      keyword: "type",
      schemaType: [
        "string",
        "array"
      ]
    },
    {
      keyword: "nullable",
      schemaType: "boolean"
    },
    Ki.default,
    Fi.default
  ];
  pr.default = Li;
  var Nr = {}, Ae = {};
  Object.defineProperty(Ae, "__esModule", {
    value: true
  });
  Ae.validateAdditionalItems = void 0;
  const be = D, Qt = k, Hi = {
    message: ({ params: { len: e } }) => (0, be.str)`must NOT have more than ${e} items`,
    params: ({ params: { len: e } }) => (0, be._)`{limit: ${e}}`
  }, Gi = {
    keyword: "additionalItems",
    type: "array",
    schemaType: [
      "boolean",
      "object"
    ],
    before: "uniqueItems",
    error: Hi,
    code(e) {
      const { parentSchema: t, it: r } = e, { items: n } = t;
      if (!Array.isArray(n)) {
        (0, Qt.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      is(e, n);
    }
  };
  function is(e, t) {
    const { gen: r, schema: n, data: s, keyword: a, it: i } = e;
    i.items = true;
    const c = r.const("len", (0, be._)`${s}.length`);
    if (n === false) e.setParams({
      len: t.length
    }), e.pass((0, be._)`${c} <= ${t.length}`);
    else if (typeof n == "object" && !(0, Qt.alwaysValidSchema)(i, n)) {
      const l = r.var("valid", (0, be._)`${c} <= ${t.length}`);
      r.if((0, be.not)(l), () => f(l)), e.ok(l);
    }
    function f(l) {
      r.forRange("i", t.length, c, (h) => {
        e.subschema({
          keyword: a,
          dataProp: h,
          dataPropType: Qt.Type.Num
        }, l), i.allErrors || r.if((0, be.not)(l), () => r.break());
      });
    }
  }
  Ae.validateAdditionalItems = is;
  Ae.default = Gi;
  var kr = {}, De = {};
  Object.defineProperty(De, "__esModule", {
    value: true
  });
  De.validateTuple = void 0;
  const an = D, lt = k, Ji = A, Wi = {
    keyword: "items",
    type: "array",
    schemaType: [
      "object",
      "array",
      "boolean"
    ],
    before: "uniqueItems",
    code(e) {
      const { schema: t, it: r } = e;
      if (Array.isArray(t)) return cs(e, "additionalItems", t);
      r.items = true, !(0, lt.alwaysValidSchema)(r, t) && e.ok((0, Ji.validateArray)(e));
    }
  };
  function cs(e, t, r = e.schema) {
    const { gen: n, parentSchema: s, data: a, keyword: i, it: c } = e;
    h(s), c.opts.unevaluated && r.length && c.items !== true && (c.items = lt.mergeEvaluated.items(n, r.length, c.items));
    const f = n.name("valid"), l = n.const("len", (0, an._)`${a}.length`);
    r.forEach((p, S) => {
      (0, lt.alwaysValidSchema)(c, p) || (n.if((0, an._)`${l} > ${S}`, () => e.subschema({
        keyword: i,
        schemaProp: S,
        dataProp: S
      }, f)), e.ok(f));
    });
    function h(p) {
      const { opts: S, errSchemaPath: b } = c, g = r.length, w = g === p.minItems && (g === p.maxItems || p[t] === false);
      if (S.strictTuples && !w) {
        const y = `"${i}" is ${g}-tuple, but minItems or maxItems/${t} are not specified or different at path "${b}"`;
        (0, lt.checkStrictMode)(c, y, S.strictTuples);
      }
    }
  }
  De.validateTuple = cs;
  De.default = Wi;
  Object.defineProperty(kr, "__esModule", {
    value: true
  });
  const Bi = De, Xi = {
    keyword: "prefixItems",
    type: "array",
    schemaType: [
      "array"
    ],
    before: "uniqueItems",
    code: (e) => (0, Bi.validateTuple)(e, "items")
  };
  kr.default = Xi;
  var jr = {};
  Object.defineProperty(jr, "__esModule", {
    value: true
  });
  const on = D, Qi = k, Yi = A, Zi = Ae, xi = {
    message: ({ params: { len: e } }) => (0, on.str)`must NOT have more than ${e} items`,
    params: ({ params: { len: e } }) => (0, on._)`{limit: ${e}}`
  }, ec = {
    keyword: "items",
    type: "array",
    schemaType: [
      "object",
      "boolean"
    ],
    before: "uniqueItems",
    error: xi,
    code(e) {
      const { schema: t, parentSchema: r, it: n } = e, { prefixItems: s } = r;
      n.items = true, !(0, Qi.alwaysValidSchema)(n, t) && (s ? (0, Zi.validateAdditionalItems)(e, s) : e.ok((0, Yi.validateArray)(e)));
    }
  };
  jr.default = ec;
  var Or = {};
  Object.defineProperty(Or, "__esModule", {
    value: true
  });
  const Z = D, nt = k, tc = {
    message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Z.str)`must contain at least ${e} valid item(s)` : (0, Z.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
    params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Z._)`{minContains: ${e}}` : (0, Z._)`{minContains: ${e}, maxContains: ${t}}`
  }, rc = {
    keyword: "contains",
    type: "array",
    schemaType: [
      "object",
      "boolean"
    ],
    before: "uniqueItems",
    trackErrors: true,
    error: tc,
    code(e) {
      const { gen: t, schema: r, parentSchema: n, data: s, it: a } = e;
      let i, c;
      const { minContains: f, maxContains: l } = n;
      a.opts.next ? (i = f === void 0 ? 1 : f, c = l) : i = 1;
      const h = t.const("len", (0, Z._)`${s}.length`);
      if (e.setParams({
        min: i,
        max: c
      }), c === void 0 && i === 0) {
        (0, nt.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (c !== void 0 && i > c) {
        (0, nt.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), e.fail();
        return;
      }
      if ((0, nt.alwaysValidSchema)(a, r)) {
        let w = (0, Z._)`${h} >= ${i}`;
        c !== void 0 && (w = (0, Z._)`${w} && ${h} <= ${c}`), e.pass(w);
        return;
      }
      a.items = true;
      const p = t.name("valid");
      c === void 0 && i === 1 ? b(p, () => t.if(p, () => t.break())) : i === 0 ? (t.let(p, true), c !== void 0 && t.if((0, Z._)`${s}.length > 0`, S)) : (t.let(p, false), S()), e.result(p, () => e.reset());
      function S() {
        const w = t.name("_valid"), y = t.let("count", 0);
        b(w, () => t.if(w, () => g(y)));
      }
      function b(w, y) {
        t.forRange("i", 0, h, (d) => {
          e.subschema({
            keyword: "contains",
            dataProp: d,
            dataPropType: nt.Type.Num,
            compositeRule: true
          }, w), y();
        });
      }
      function g(w) {
        t.code((0, Z._)`${w}++`), c === void 0 ? t.if((0, Z._)`${w} >= ${i}`, () => t.assign(p, true).break()) : (t.if((0, Z._)`${w} > ${c}`, () => t.assign(p, false).break()), i === 1 ? t.assign(p, true) : t.if((0, Z._)`${w} >= ${i}`, () => t.assign(p, true)));
      }
    }
  };
  Or.default = rc;
  var us = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = D, r = k, n = A;
    e.error = {
      message: ({ params: { property: f, depsCount: l, deps: h } }) => {
        const p = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${p} ${h} when property ${f} is present`;
      },
      params: ({ params: { property: f, depsCount: l, deps: h, missingProperty: p } }) => (0, t._)`{property: ${f},
    missingProperty: ${p},
    depsCount: ${l},
    deps: ${h}}`
    };
    const s = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(f) {
        const [l, h] = a(f);
        i(f, l), c(f, h);
      }
    };
    function a({ schema: f }) {
      const l = {}, h = {};
      for (const p in f) {
        if (p === "__proto__") continue;
        const S = Array.isArray(f[p]) ? l : h;
        S[p] = f[p];
      }
      return [
        l,
        h
      ];
    }
    function i(f, l = f.schema) {
      const { gen: h, data: p, it: S } = f;
      if (Object.keys(l).length === 0) return;
      const b = h.let("missing");
      for (const g in l) {
        const w = l[g];
        if (w.length === 0) continue;
        const y = (0, n.propertyInData)(h, p, g, S.opts.ownProperties);
        f.setParams({
          property: g,
          depsCount: w.length,
          deps: w.join(", ")
        }), S.allErrors ? h.if(y, () => {
          for (const d of w) (0, n.checkReportMissingProp)(f, d);
        }) : (h.if((0, t._)`${y} && (${(0, n.checkMissingProp)(f, w, b)})`), (0, n.reportMissingProp)(f, b), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function c(f, l = f.schema) {
      const { gen: h, data: p, keyword: S, it: b } = f, g = h.name("valid");
      for (const w in l) (0, r.alwaysValidSchema)(b, l[w]) || (h.if((0, n.propertyInData)(h, p, w, b.opts.ownProperties), () => {
        const y = f.subschema({
          keyword: S,
          schemaProp: w
        }, g);
        f.mergeValidEvaluated(y, g);
      }, () => h.var(g, true)), f.ok(g));
    }
    e.validateSchemaDeps = c, e.default = s;
  })(us);
  var Ir = {};
  Object.defineProperty(Ir, "__esModule", {
    value: true
  });
  const ls = D, nc = k, sc = {
    message: "property name must be valid",
    params: ({ params: e }) => (0, ls._)`{propertyName: ${e.propertyName}}`
  }, ac = {
    keyword: "propertyNames",
    type: "object",
    schemaType: [
      "object",
      "boolean"
    ],
    error: sc,
    code(e) {
      const { gen: t, schema: r, data: n, it: s } = e;
      if ((0, nc.alwaysValidSchema)(s, r)) return;
      const a = t.name("valid");
      t.forIn("key", n, (i) => {
        e.setParams({
          propertyName: i
        }), e.subschema({
          keyword: "propertyNames",
          data: i,
          dataTypes: [
            "string"
          ],
          propertyName: i,
          compositeRule: true
        }, a), t.if((0, ls.not)(a), () => {
          e.error(true), s.allErrors || t.break();
        });
      }), e.ok(a);
    }
  };
  Ir.default = ac;
  var wt = {};
  Object.defineProperty(wt, "__esModule", {
    value: true
  });
  const st = A, ee = D, oc = oe, at = k, ic = {
    message: "must NOT have additional properties",
    params: ({ params: e }) => (0, ee._)`{additionalProperty: ${e.additionalProperty}}`
  }, cc = {
    keyword: "additionalProperties",
    type: [
      "object"
    ],
    schemaType: [
      "boolean",
      "object"
    ],
    allowUndefined: true,
    trackErrors: true,
    error: ic,
    code(e) {
      const { gen: t, schema: r, parentSchema: n, data: s, errsCount: a, it: i } = e;
      if (!a) throw new Error("ajv implementation error");
      const { allErrors: c, opts: f } = i;
      if (i.props = true, f.removeAdditional !== "all" && (0, at.alwaysValidSchema)(i, r)) return;
      const l = (0, st.allSchemaProperties)(n.properties), h = (0, st.allSchemaProperties)(n.patternProperties);
      p(), e.ok((0, ee._)`${a} === ${oc.default.errors}`);
      function p() {
        t.forIn("key", s, (y) => {
          !l.length && !h.length ? g(y) : t.if(S(y), () => g(y));
        });
      }
      function S(y) {
        let d;
        if (l.length > 8) {
          const _ = (0, at.schemaRefOrVal)(i, n.properties, "properties");
          d = (0, st.isOwnProperty)(t, _, y);
        } else l.length ? d = (0, ee.or)(...l.map((_) => (0, ee._)`${y} === ${_}`)) : d = ee.nil;
        return h.length && (d = (0, ee.or)(d, ...h.map((_) => (0, ee._)`${(0, st.usePattern)(e, _)}.test(${y})`))), (0, ee.not)(d);
      }
      function b(y) {
        t.code((0, ee._)`delete ${s}[${y}]`);
      }
      function g(y) {
        if (f.removeAdditional === "all" || f.removeAdditional && r === false) {
          b(y);
          return;
        }
        if (r === false) {
          e.setParams({
            additionalProperty: y
          }), e.error(), c || t.break();
          return;
        }
        if (typeof r == "object" && !(0, at.alwaysValidSchema)(i, r)) {
          const d = t.name("valid");
          f.removeAdditional === "failing" ? (w(y, d, false), t.if((0, ee.not)(d), () => {
            e.reset(), b(y);
          })) : (w(y, d), c || t.if((0, ee.not)(d), () => t.break()));
        }
      }
      function w(y, d, _) {
        const P = {
          keyword: "additionalProperties",
          dataProp: y,
          dataPropType: at.Type.Str
        };
        _ === false && Object.assign(P, {
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }), e.subschema(P, d);
      }
    }
  };
  wt.default = cc;
  var Rr = {};
  Object.defineProperty(Rr, "__esModule", {
    value: true
  });
  const uc = re, cn = A, Lt = k, un = wt, lc = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(e) {
      const { gen: t, schema: r, parentSchema: n, data: s, it: a } = e;
      a.opts.removeAdditional === "all" && n.additionalProperties === void 0 && un.default.code(new uc.KeywordCxt(a, un.default, "additionalProperties"));
      const i = (0, cn.allSchemaProperties)(r);
      for (const p of i) a.definedProperties.add(p);
      a.opts.unevaluated && i.length && a.props !== true && (a.props = Lt.mergeEvaluated.props(t, (0, Lt.toHash)(i), a.props));
      const c = i.filter((p) => !(0, Lt.alwaysValidSchema)(a, r[p]));
      if (c.length === 0) return;
      const f = t.name("valid");
      for (const p of c) l(p) ? h(p) : (t.if((0, cn.propertyInData)(t, s, p, a.opts.ownProperties)), h(p), a.allErrors || t.else().var(f, true), t.endIf()), e.it.definedProperties.add(p), e.ok(f);
      function l(p) {
        return a.opts.useDefaults && !a.compositeRule && r[p].default !== void 0;
      }
      function h(p) {
        e.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, f);
      }
    }
  };
  Rr.default = lc;
  var Tr = {};
  Object.defineProperty(Tr, "__esModule", {
    value: true
  });
  const ln = A, ot = D, dn = k, fn = k, dc = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(e) {
      const { gen: t, schema: r, data: n, parentSchema: s, it: a } = e, { opts: i } = a, c = (0, ln.allSchemaProperties)(r), f = c.filter((w) => (0, dn.alwaysValidSchema)(a, r[w]));
      if (c.length === 0 || f.length === c.length && (!a.opts.unevaluated || a.props === true)) return;
      const l = i.strictSchema && !i.allowMatchingProperties && s.properties, h = t.name("valid");
      a.props !== true && !(a.props instanceof ot.Name) && (a.props = (0, fn.evaluatedPropsToName)(t, a.props));
      const { props: p } = a;
      S();
      function S() {
        for (const w of c) l && b(w), a.allErrors ? g(w) : (t.var(h, true), g(w), t.if(h));
      }
      function b(w) {
        for (const y in l) new RegExp(w).test(y) && (0, dn.checkStrictMode)(a, `property ${y} matches pattern ${w} (use allowMatchingProperties)`);
      }
      function g(w) {
        t.forIn("key", n, (y) => {
          t.if((0, ot._)`${(0, ln.usePattern)(e, w)}.test(${y})`, () => {
            const d = f.includes(w);
            d || e.subschema({
              keyword: "patternProperties",
              schemaProp: w,
              dataProp: y,
              dataPropType: fn.Type.Str
            }, h), a.opts.unevaluated && p !== true ? t.assign((0, ot._)`${p}[${y}]`, true) : !d && !a.allErrors && t.if((0, ot.not)(h), () => t.break());
          });
        });
      }
    }
  };
  Tr.default = dc;
  var Cr = {};
  Object.defineProperty(Cr, "__esModule", {
    value: true
  });
  const fc = k, hc = {
    keyword: "not",
    schemaType: [
      "object",
      "boolean"
    ],
    trackErrors: true,
    code(e) {
      const { gen: t, schema: r, it: n } = e;
      if ((0, fc.alwaysValidSchema)(n, r)) {
        e.fail();
        return;
      }
      const s = t.name("valid");
      e.subschema({
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false
      }, s), e.failResult(s, () => e.reset(), () => e.error());
    },
    error: {
      message: "must NOT be valid"
    }
  };
  Cr.default = hc;
  var Mr = {};
  Object.defineProperty(Mr, "__esModule", {
    value: true
  });
  const mc = A, pc = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: mc.validateUnion,
    error: {
      message: "must match a schema in anyOf"
    }
  };
  Mr.default = pc;
  var Ar = {};
  Object.defineProperty(Ar, "__esModule", {
    value: true
  });
  const dt = D, yc = k, $c = {
    message: "must match exactly one schema in oneOf",
    params: ({ params: e }) => (0, dt._)`{passingSchemas: ${e.passing}}`
  }, _c = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: $c,
    code(e) {
      const { gen: t, schema: r, parentSchema: n, it: s } = e;
      if (!Array.isArray(r)) throw new Error("ajv implementation error");
      if (s.opts.discriminator && n.discriminator) return;
      const a = r, i = t.let("valid", false), c = t.let("passing", null), f = t.name("_valid");
      e.setParams({
        passing: c
      }), t.block(l), e.result(i, () => e.reset(), () => e.error(true));
      function l() {
        a.forEach((h, p) => {
          let S;
          (0, yc.alwaysValidSchema)(s, h) ? t.var(f, true) : S = e.subschema({
            keyword: "oneOf",
            schemaProp: p,
            compositeRule: true
          }, f), p > 0 && t.if((0, dt._)`${f} && ${i}`).assign(i, false).assign(c, (0, dt._)`[${c}, ${p}]`).else(), t.if(f, () => {
            t.assign(i, true), t.assign(c, p), S && e.mergeEvaluated(S, dt.Name);
          });
        });
      }
    }
  };
  Ar.default = _c;
  var Dr = {};
  Object.defineProperty(Dr, "__esModule", {
    value: true
  });
  const gc = k, vc = {
    keyword: "allOf",
    schemaType: "array",
    code(e) {
      const { gen: t, schema: r, it: n } = e;
      if (!Array.isArray(r)) throw new Error("ajv implementation error");
      const s = t.name("valid");
      r.forEach((a, i) => {
        if ((0, gc.alwaysValidSchema)(n, a)) return;
        const c = e.subschema({
          keyword: "allOf",
          schemaProp: i
        }, s);
        e.ok(s), e.mergeEvaluated(c);
      });
    }
  };
  Dr.default = vc;
  var Vr = {};
  Object.defineProperty(Vr, "__esModule", {
    value: true
  });
  const yt = D, ds = k, wc = {
    message: ({ params: e }) => (0, yt.str)`must match "${e.ifClause}" schema`,
    params: ({ params: e }) => (0, yt._)`{failingKeyword: ${e.ifClause}}`
  }, bc = {
    keyword: "if",
    schemaType: [
      "object",
      "boolean"
    ],
    trackErrors: true,
    error: wc,
    code(e) {
      const { gen: t, parentSchema: r, it: n } = e;
      r.then === void 0 && r.else === void 0 && (0, ds.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
      const s = hn(n, "then"), a = hn(n, "else");
      if (!s && !a) return;
      const i = t.let("valid", true), c = t.name("_valid");
      if (f(), e.reset(), s && a) {
        const h = t.let("ifClause");
        e.setParams({
          ifClause: h
        }), t.if(c, l("then", h), l("else", h));
      } else s ? t.if(c, l("then")) : t.if((0, yt.not)(c), l("else"));
      e.pass(i, () => e.error(true));
      function f() {
        const h = e.subschema({
          keyword: "if",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, c);
        e.mergeEvaluated(h);
      }
      function l(h, p) {
        return () => {
          const S = e.subschema({
            keyword: h
          }, c);
          t.assign(i, c), e.mergeValidEvaluated(S, i), p ? t.assign(p, (0, yt._)`${h}`) : e.setParams({
            ifClause: h
          });
        };
      }
    }
  };
  function hn(e, t) {
    const r = e.schema[t];
    return r !== void 0 && !(0, ds.alwaysValidSchema)(e, r);
  }
  Vr.default = bc;
  var qr = {};
  Object.defineProperty(qr, "__esModule", {
    value: true
  });
  const Ec = k, Sc = {
    keyword: [
      "then",
      "else"
    ],
    schemaType: [
      "object",
      "boolean"
    ],
    code({ keyword: e, parentSchema: t, it: r }) {
      t.if === void 0 && (0, Ec.checkStrictMode)(r, `"${e}" without "if" is ignored`);
    }
  };
  qr.default = Sc;
  Object.defineProperty(Nr, "__esModule", {
    value: true
  });
  const Pc = Ae, Nc = kr, kc = De, jc = jr, Oc = Or, Ic = us, Rc = Ir, Tc = wt, Cc = Rr, Mc = Tr, Ac = Cr, Dc = Mr, Vc = Ar, qc = Dr, zc = Vr, Uc = qr;
  function Kc(e = false) {
    const t = [
      Ac.default,
      Dc.default,
      Vc.default,
      qc.default,
      zc.default,
      Uc.default,
      Rc.default,
      Tc.default,
      Ic.default,
      Cc.default,
      Mc.default
    ];
    return e ? t.push(Nc.default, jc.default) : t.push(Pc.default, kc.default), t.push(Oc.default), t;
  }
  Nr.default = Kc;
  var zr = {}, Ur = {};
  Object.defineProperty(Ur, "__esModule", {
    value: true
  });
  const F = D, Fc = {
    message: ({ schemaCode: e }) => (0, F.str)`must match format "${e}"`,
    params: ({ schemaCode: e }) => (0, F._)`{format: ${e}}`
  }, Lc = {
    keyword: "format",
    type: [
      "number",
      "string"
    ],
    schemaType: "string",
    $data: true,
    error: Fc,
    code(e, t) {
      const { gen: r, data: n, $data: s, schema: a, schemaCode: i, it: c } = e, { opts: f, errSchemaPath: l, schemaEnv: h, self: p } = c;
      if (!f.validateFormats) return;
      s ? S() : b();
      function S() {
        const g = r.scopeValue("formats", {
          ref: p.formats,
          code: f.code.formats
        }), w = r.const("fDef", (0, F._)`${g}[${i}]`), y = r.let("fType"), d = r.let("format");
        r.if((0, F._)`typeof ${w} == "object" && !(${w} instanceof RegExp)`, () => r.assign(y, (0, F._)`${w}.type || "string"`).assign(d, (0, F._)`${w}.validate`), () => r.assign(y, (0, F._)`"string"`).assign(d, w)), e.fail$data((0, F.or)(_(), P()));
        function _() {
          return f.strictSchema === false ? F.nil : (0, F._)`${i} && !${d}`;
        }
        function P() {
          const j = h.$async ? (0, F._)`(${w}.async ? await ${d}(${n}) : ${d}(${n}))` : (0, F._)`${d}(${n})`, O = (0, F._)`(typeof ${d} == "function" ? ${j} : ${d}.test(${n}))`;
          return (0, F._)`${d} && ${d} !== true && ${y} === ${t} && !${O}`;
        }
      }
      function b() {
        const g = p.formats[a];
        if (!g) {
          _();
          return;
        }
        if (g === true) return;
        const [w, y, d] = P(g);
        w === t && e.pass(j());
        function _() {
          if (f.strictSchema === false) {
            p.logger.warn(O());
            return;
          }
          throw new Error(O());
          function O() {
            return `unknown format "${a}" ignored in schema at path "${l}"`;
          }
        }
        function P(O) {
          const U = O instanceof RegExp ? (0, F.regexpCode)(O) : f.code.formats ? (0, F._)`${f.code.formats}${(0, F.getProperty)(a)}` : void 0, L = r.scopeValue("formats", {
            key: a,
            ref: O,
            code: U
          });
          return typeof O == "object" && !(O instanceof RegExp) ? [
            O.type || "string",
            O.validate,
            (0, F._)`${L}.validate`
          ] : [
            "string",
            O,
            L
          ];
        }
        function j() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!h.$async) throw new Error("async format in sync schema");
            return (0, F._)`await ${d}(${n})`;
          }
          return typeof y == "function" ? (0, F._)`${d}(${n})` : (0, F._)`${d}.test(${n})`;
        }
      }
    }
  };
  Ur.default = Lc;
  Object.defineProperty(zr, "__esModule", {
    value: true
  });
  const Hc = Ur, Gc = [
    Hc.default
  ];
  zr.default = Gc;
  var Ce = {};
  Object.defineProperty(Ce, "__esModule", {
    value: true
  });
  Ce.contentVocabulary = Ce.metadataVocabulary = void 0;
  Ce.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ];
  Ce.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ];
  Object.defineProperty(fr, "__esModule", {
    value: true
  });
  const Jc = hr, Wc = pr, Bc = Nr, Xc = zr, mn = Ce, Qc = [
    Jc.default,
    Wc.default,
    (0, Bc.default)(),
    Xc.default,
    mn.metadataVocabulary,
    mn.contentVocabulary
  ];
  fr.default = Qc;
  var Kr = {}, bt = {};
  Object.defineProperty(bt, "__esModule", {
    value: true
  });
  bt.DiscrError = void 0;
  var pn;
  (function(e) {
    e.Tag = "tag", e.Mapping = "mapping";
  })(pn || (bt.DiscrError = pn = {}));
  Object.defineProperty(Kr, "__esModule", {
    value: true
  });
  const Oe = D, Yt = bt, yn = Y, Yc = Me, Zc = k, xc = {
    message: ({ params: { discrError: e, tagName: t } }) => e === Yt.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
    params: ({ params: { discrError: e, tag: t, tagName: r } }) => (0, Oe._)`{error: ${e}, tag: ${r}, tagValue: ${t}}`
  }, eu = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: xc,
    code(e) {
      const { gen: t, data: r, schema: n, parentSchema: s, it: a } = e, { oneOf: i } = s;
      if (!a.opts.discriminator) throw new Error("discriminator: requires discriminator option");
      const c = n.propertyName;
      if (typeof c != "string") throw new Error("discriminator: requires propertyName");
      if (n.mapping) throw new Error("discriminator: mapping is not supported");
      if (!i) throw new Error("discriminator: requires oneOf keyword");
      const f = t.let("valid", false), l = t.const("tag", (0, Oe._)`${r}${(0, Oe.getProperty)(c)}`);
      t.if((0, Oe._)`typeof ${l} == "string"`, () => h(), () => e.error(false, {
        discrError: Yt.DiscrError.Tag,
        tag: l,
        tagName: c
      })), e.ok(f);
      function h() {
        const b = S();
        t.if(false);
        for (const g in b) t.elseIf((0, Oe._)`${l} === ${g}`), t.assign(f, p(b[g]));
        t.else(), e.error(false, {
          discrError: Yt.DiscrError.Mapping,
          tag: l,
          tagName: c
        }), t.endIf();
      }
      function p(b) {
        const g = t.name("valid"), w = e.subschema({
          keyword: "oneOf",
          schemaProp: b
        }, g);
        return e.mergeEvaluated(w, Oe.Name), g;
      }
      function S() {
        var b;
        const g = {}, w = d(s);
        let y = true;
        for (let j = 0; j < i.length; j++) {
          let O = i[j];
          if ((O == null ? void 0 : O.$ref) && !(0, Zc.schemaHasRulesButRef)(O, a.self.RULES)) {
            const L = O.$ref;
            if (O = yn.resolveRef.call(a.self, a.schemaEnv.root, a.baseId, L), O instanceof yn.SchemaEnv && (O = O.schema), O === void 0) throw new Yc.default(a.opts.uriResolver, a.baseId, L);
          }
          const U = (b = O == null ? void 0 : O.properties) === null || b === void 0 ? void 0 : b[c];
          if (typeof U != "object") throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${c}"`);
          y = y && (w || d(O)), _(U, j);
        }
        if (!y) throw new Error(`discriminator: "${c}" must be required`);
        return g;
        function d({ required: j }) {
          return Array.isArray(j) && j.includes(c);
        }
        function _(j, O) {
          if (j.const) P(j.const, O);
          else if (j.enum) for (const U of j.enum) P(U, O);
          else throw new Error(`discriminator: "properties/${c}" must have "const" or "enum"`);
        }
        function P(j, O) {
          if (typeof j != "string" || j in g) throw new Error(`discriminator: "${c}" values must be unique strings`);
          g[j] = O;
        }
      }
    }
  };
  Kr.default = eu;
  const tu = "http://json-schema.org/draft-07/schema#", ru = "http://json-schema.org/draft-07/schema#", nu = "Core schema meta-schema", su = {
    schemaArray: {
      type: "array",
      minItems: 1,
      items: {
        $ref: "#"
      }
    },
    nonNegativeInteger: {
      type: "integer",
      minimum: 0
    },
    nonNegativeIntegerDefault0: {
      allOf: [
        {
          $ref: "#/definitions/nonNegativeInteger"
        },
        {
          default: 0
        }
      ]
    },
    simpleTypes: {
      enum: [
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string"
      ]
    },
    stringArray: {
      type: "array",
      items: {
        type: "string"
      },
      uniqueItems: true,
      default: []
    }
  }, au = [
    "object",
    "boolean"
  ], ou = {
    $id: {
      type: "string",
      format: "uri-reference"
    },
    $schema: {
      type: "string",
      format: "uri"
    },
    $ref: {
      type: "string",
      format: "uri-reference"
    },
    $comment: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    default: true,
    readOnly: {
      type: "boolean",
      default: false
    },
    examples: {
      type: "array",
      items: true
    },
    multipleOf: {
      type: "number",
      exclusiveMinimum: 0
    },
    maximum: {
      type: "number"
    },
    exclusiveMaximum: {
      type: "number"
    },
    minimum: {
      type: "number"
    },
    exclusiveMinimum: {
      type: "number"
    },
    maxLength: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minLength: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    pattern: {
      type: "string",
      format: "regex"
    },
    additionalItems: {
      $ref: "#"
    },
    items: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/schemaArray"
        }
      ],
      default: true
    },
    maxItems: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minItems: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    uniqueItems: {
      type: "boolean",
      default: false
    },
    contains: {
      $ref: "#"
    },
    maxProperties: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minProperties: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    required: {
      $ref: "#/definitions/stringArray"
    },
    additionalProperties: {
      $ref: "#"
    },
    definitions: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      default: {}
    },
    properties: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      default: {}
    },
    patternProperties: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      propertyNames: {
        format: "regex"
      },
      default: {}
    },
    dependencies: {
      type: "object",
      additionalProperties: {
        anyOf: [
          {
            $ref: "#"
          },
          {
            $ref: "#/definitions/stringArray"
          }
        ]
      }
    },
    propertyNames: {
      $ref: "#"
    },
    const: true,
    enum: {
      type: "array",
      items: true,
      minItems: 1,
      uniqueItems: true
    },
    type: {
      anyOf: [
        {
          $ref: "#/definitions/simpleTypes"
        },
        {
          type: "array",
          items: {
            $ref: "#/definitions/simpleTypes"
          },
          minItems: 1,
          uniqueItems: true
        }
      ]
    },
    format: {
      type: "string"
    },
    contentMediaType: {
      type: "string"
    },
    contentEncoding: {
      type: "string"
    },
    if: {
      $ref: "#"
    },
    then: {
      $ref: "#"
    },
    else: {
      $ref: "#"
    },
    allOf: {
      $ref: "#/definitions/schemaArray"
    },
    anyOf: {
      $ref: "#/definitions/schemaArray"
    },
    oneOf: {
      $ref: "#/definitions/schemaArray"
    },
    not: {
      $ref: "#"
    }
  }, iu = {
    $schema: tu,
    $id: ru,
    title: nu,
    definitions: su,
    type: au,
    properties: ou,
    default: true
  };
  (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: true
    }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = $n, n = fr, s = Kr, a = iu, i = [
      "/properties"
    ], c = "http://json-schema.org/draft-07/schema";
    class f extends r.default {
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((g) => this.addVocabulary(g)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        const g = this.opts.$data ? this.$dataMetaSchema(a, i) : a;
        this.addMetaSchema(g, c, false), this.refs["http://json-schema.org/schema"] = c;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0);
      }
    }
    t.Ajv = f, e.exports = t = f, e.exports.Ajv = f, Object.defineProperty(t, "__esModule", {
      value: true
    }), t.default = f;
    var l = re;
    Object.defineProperty(t, "KeywordCxt", {
      enumerable: true,
      get: function() {
        return l.KeywordCxt;
      }
    });
    var h = D;
    Object.defineProperty(t, "_", {
      enumerable: true,
      get: function() {
        return h._;
      }
    }), Object.defineProperty(t, "str", {
      enumerable: true,
      get: function() {
        return h.str;
      }
    }), Object.defineProperty(t, "stringify", {
      enumerable: true,
      get: function() {
        return h.stringify;
      }
    }), Object.defineProperty(t, "nil", {
      enumerable: true,
      get: function() {
        return h.nil;
      }
    }), Object.defineProperty(t, "Name", {
      enumerable: true,
      get: function() {
        return h.Name;
      }
    }), Object.defineProperty(t, "CodeGen", {
      enumerable: true,
      get: function() {
        return h.CodeGen;
      }
    });
    var p = Ye;
    Object.defineProperty(t, "ValidationError", {
      enumerable: true,
      get: function() {
        return p.default;
      }
    });
    var S = Me;
    Object.defineProperty(t, "MissingRefError", {
      enumerable: true,
      get: function() {
        return S.default;
      }
    });
  })(Ht, Ht.exports);
  var fs = Ht.exports;
  let cu;
  cu = ms(fs);
  du = ys({
    __proto__: null,
    default: cu
  }, [
    fs
  ]);
});
export {
  __tla,
  du as a
};
