import { lI as u, lg as p, lJ as y, lK as g, lL as A, lM as m, lN as w, lO as b, lw as f, lu as _, da as I, lv as S, lx as x, ly as k, la as O, lz as T, lA as C, lB as M, lC as E, cs as P, cr as U, lD as j, lE as q, lF as z, lG as F, lH as K, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let d, W, B, H, D;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let L, h, R, V;
  L = function(r) {
    u(n, r);
    function n(e, i) {
      return r.call(this) || this;
    }
    return n.prototype.schedule = function(e, i) {
      return this;
    }, n;
  }(p);
  h = {
    setInterval: function(r, n) {
      for (var e = [], i = 2; i < arguments.length; i++) e[i - 2] = arguments[i];
      return setInterval.apply(void 0, y([
        r,
        n
      ], g(e)));
    },
    clearInterval: function(r) {
      return clearInterval(r);
    },
    delegate: void 0
  };
  R = function(r) {
    u(n, r);
    function n(e, i) {
      var t = r.call(this, e, i) || this;
      return t.scheduler = e, t.work = i, t.pending = false, t;
    }
    return n.prototype.schedule = function(e, i) {
      var t;
      if (i === void 0 && (i = 0), this.closed) return this;
      this.state = e;
      var s = this.id, a = this.scheduler;
      return s != null && (this.id = this.recycleAsyncId(a, s, i)), this.pending = true, this.delay = i, this.id = (t = this.id) !== null && t !== void 0 ? t : this.requestAsyncId(a, this.id, i), this;
    }, n.prototype.requestAsyncId = function(e, i, t) {
      return t === void 0 && (t = 0), h.setInterval(e.flush.bind(e, this), t);
    }, n.prototype.recycleAsyncId = function(e, i, t) {
      if (t === void 0 && (t = 0), t != null && this.delay === t && this.pending === false) return i;
      i != null && h.clearInterval(i);
    }, n.prototype.execute = function(e, i) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var t = this._execute(e, i);
      if (t) return t;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, n.prototype._execute = function(e, i) {
      var t = false, s;
      try {
        this.work(e);
      } catch (a) {
        t = true, s = a || new Error("Scheduled action threw falsy error");
      }
      if (t) return this.unsubscribe(), s;
    }, n.prototype.unsubscribe = function() {
      if (!this.closed) {
        var e = this, i = e.id, t = e.scheduler, s = t.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, A(s, this), i != null && (this.id = this.recycleAsyncId(t, i, null)), this.delay = null, r.prototype.unsubscribe.call(this);
      }
    }, n;
  }(L);
  d = function() {
    function r(n, e) {
      e === void 0 && (e = r.now), this.schedulerActionCtor = n, this.now = e;
    }
    return r.prototype.schedule = function(n, e, i) {
      return e === void 0 && (e = 0), new this.schedulerActionCtor(this, n).schedule(i, e);
    }, r.now = m.now, r;
  }();
  V = function(r) {
    u(n, r);
    function n(e, i) {
      i === void 0 && (i = d.now);
      var t = r.call(this, e, i) || this;
      return t.actions = [], t._active = false, t;
    }
    return n.prototype.flush = function(e) {
      var i = this.actions;
      if (this._active) {
        i.push(e);
        return;
      }
      var t;
      this._active = true;
      do
        if (t = e.execute(e.state, e.delay)) break;
      while (e = i.shift());
      if (this._active = false, t) {
        for (; e = i.shift(); ) e.unsubscribe();
        throw t;
      }
    }, n;
  }(d);
  W = new V(R);
  B = function(r, n) {
    return n === void 0 && (n = W), w(function(e, i) {
      var t = null, s = null, a = null, c = function() {
        if (t) {
          t.unsubscribe(), t = null;
          var l = s;
          s = null, i.next(l);
        }
      };
      function v() {
        var l = a + r, o = n.now();
        if (o < l) {
          t = this.schedule(void 0, l - o), i.add(t);
          return;
        }
        c();
      }
      e.subscribe(b(i, function(l) {
        s = l, a = n.now(), t || (t = n.schedule(v, r), i.add(t));
      }, function() {
        c(), i.complete();
      }, void 0, function() {
        s = t = null;
      }));
    });
  };
  D = function(r) {
    return f(function(n, e) {
      return r <= e;
    });
  };
  H = Object.freeze(Object.defineProperty({
    __proto__: null,
    concatAll: _,
    debounceTime: B,
    distinctUntilChanged: I,
    distinctUntilKeyChanged: S,
    filter: f,
    map: x,
    mapTo: k,
    mergeAll: O,
    mergeMap: T,
    observeOn: C,
    pluck: M,
    share: E,
    shareReplay: P,
    skip: D,
    startWith: U,
    subscribeOn: j,
    switchMap: q,
    take: z,
    takeUntil: F,
    withLatestFrom: K
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  d as S,
  __tla,
  W as a,
  B as d,
  H as i,
  D as s
};
