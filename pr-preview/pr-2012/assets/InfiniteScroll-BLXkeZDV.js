var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { fu as L, fv as m, fw as w, fx as b, fy as E, e7 as S, fz as r, el as C, __tla as __tla_0 } from "./index-AGa8OPve.js";
let N, x;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  var M = class extends L {
    constructor(s, e) {
      super(s, e);
    }
    bindMethods() {
      super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    setOptions(s, e) {
      super.setOptions({
        ...s,
        behavior: m()
      }, e);
    }
    getOptimisticResult(s) {
      return s.behavior = m(), super.getOptimisticResult(s);
    }
    fetchNextPage(s) {
      return this.fetch({
        ...s,
        meta: {
          fetchMore: {
            direction: "forward"
          }
        }
      });
    }
    fetchPreviousPage(s) {
      return this.fetch({
        ...s,
        meta: {
          fetchMore: {
            direction: "backward"
          }
        }
      });
    }
    createResult(s, e) {
      var _a2, _b;
      const { state: t } = s, i = super.createResult(s, e), { isFetching: o, isRefetching: p, isError: n, isRefetchError: l } = i, a = (_b = (_a2 = t.fetchMeta) == null ? void 0 : _a2.fetchMore) == null ? void 0 : _b.direction, u = n && a === "forward", h = o && a === "forward", d = n && a === "backward", f = o && a === "backward";
      return {
        ...i,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: b(e, t.data),
        hasPreviousPage: w(e, t.data),
        isFetchNextPageError: u,
        isFetchingNextPage: h,
        isFetchPreviousPageError: d,
        isFetchingPreviousPage: f,
        isRefetchError: l && !u && !d,
        isRefetching: p && !h && !f
      };
    }
  };
  x = function(s, e) {
    return E(s, M);
  };
  N = (_a = class extends S.Component {
    constructor(e) {
      super(e), this.scrollListener = this.scrollListener.bind(this), this.eventListenerOptions = this.eventListenerOptions.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this);
    }
    componentDidMount() {
      this.pageLoaded = this.props.pageStart, this.options = this.eventListenerOptions(), this.attachScrollListener();
    }
    componentDidUpdate() {
      if (this.props.isReverse && this.loadMore) {
        const e = this.getParentElement(this.scrollComponent);
        e.scrollTop = e.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop, this.loadMore = false;
      }
      this.attachScrollListener();
    }
    componentWillUnmount() {
      this.detachScrollListener(), this.detachMousewheelListener();
    }
    isPassiveSupported() {
      let e = false;
      const t = {
        get passive() {
          e = true;
        }
      };
      try {
        document.addEventListener("test", null, t), document.removeEventListener("test", null, t);
      } catch {
      }
      return e;
    }
    eventListenerOptions() {
      let e = this.props.useCapture;
      return this.isPassiveSupported() ? e = {
        useCapture: this.props.useCapture,
        passive: true
      } : e = {
        passive: false
      }, e;
    }
    setDefaultLoader(e) {
      this.defaultLoader = e;
    }
    detachMousewheelListener() {
      let e = window;
      this.props.useWindow === false && (e = this.scrollComponent.parentNode), e.removeEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture);
    }
    detachScrollListener() {
      let e = window;
      this.props.useWindow === false && (e = this.getParentElement(this.scrollComponent)), e.removeEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), e.removeEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture);
    }
    getParentElement(e) {
      const t = this.props.getScrollParent && this.props.getScrollParent();
      return t ?? (e && e.parentNode);
    }
    filterProps(e) {
      return e;
    }
    attachScrollListener() {
      const e = this.getParentElement(this.scrollComponent);
      if (!this.props.hasMore || !e) return;
      let t = window;
      this.props.useWindow === false && (t = e), t.addEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture), t.addEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), t.addEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture), this.props.initialLoad && this.scrollListener();
    }
    mousewheelListener(e) {
      e.deltaY === 1 && !this.isPassiveSupported() && e.preventDefault();
    }
    scrollListener() {
      const e = this.scrollComponent, t = window, i = this.getParentElement(e);
      let o;
      if (this.props.useWindow) {
        const p = document.documentElement || document.body.parentNode || document.body, n = t.pageYOffset !== void 0 ? t.pageYOffset : p.scrollTop;
        this.props.isReverse ? o = n : o = this.calculateOffset(e, n);
      } else this.props.isReverse ? o = i.scrollTop : o = e.scrollHeight - i.scrollTop - i.clientHeight;
      o < Number(this.props.threshold) && e && e.offsetParent !== null && (this.detachScrollListener(), this.beforeScrollHeight = i.scrollHeight, this.beforeScrollTop = i.scrollTop, typeof this.props.loadMore == "function" && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = true));
    }
    calculateOffset(e, t) {
      return e ? this.calculateTopPosition(e) + (e.offsetHeight - t - window.innerHeight) : 0;
    }
    calculateTopPosition(e) {
      return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0;
    }
    render() {
      const e = this.filterProps(this.props), { children: t, element: i, hasMore: o, initialLoad: p, isReverse: n, loader: l, loadMore: a, pageStart: u, ref: h, threshold: d, useCapture: f, useWindow: v, getScrollParent: R, ...g } = e;
      g.ref = (P) => {
        this.scrollComponent = P, h && h(P);
      };
      const c = [
        t
      ];
      return o && (l ? n ? c.unshift(l) : c.push(l) : this.defaultLoader && (n ? c.unshift(this.defaultLoader) : c.push(this.defaultLoader))), C.createElement(i, g, c);
    }
  }, __publicField(_a, "propTypes", {
    children: r.node.isRequired,
    element: r.node,
    hasMore: r.bool,
    initialLoad: r.bool,
    isReverse: r.bool,
    loader: r.node,
    loadMore: r.func.isRequired,
    pageStart: r.number,
    ref: r.func,
    getScrollParent: r.func,
    threshold: r.number,
    useCapture: r.bool,
    useWindow: r.bool
  }), __publicField(_a, "defaultProps", {
    element: "div",
    hasMore: false,
    initialLoad: true,
    pageStart: 0,
    ref: null,
    threshold: 250,
    useWindow: true,
    isReverse: false,
    useCapture: false,
    loader: null,
    getScrollParent: null
  }), _a);
});
export {
  N as I,
  __tla,
  x as u
};
