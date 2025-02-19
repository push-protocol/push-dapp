import { eH as _, e7 as f, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { u as m, p as g, __tla as __tla_1 } from "./NFTPage-BCA8R3tp.js";
let A;
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
  function v(t, e) {
    for (var r = 0; r < e.length; r++) {
      const s = e[r];
      if (typeof s != "string" && !Array.isArray(s)) {
        for (const o in s) if (o !== "default" && !(o in t)) {
          const n = Object.getOwnPropertyDescriptor(s, o);
          n && Object.defineProperty(t, o, n.get ? n : {
            enumerable: true,
            get: () => s[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var P = Object.create, i = Object.defineProperty, O = Object.getOwnPropertyDescriptor, b = Object.getOwnPropertyNames, M = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty, x = (t, e, r) => e in t ? i(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, j = (t, e) => {
    for (var r in e) i(t, r, {
      get: e[r],
      enumerable: true
    });
  }, c = (t, e, r, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let o of b(e)) !w.call(t, o) && o !== r && i(t, o, {
      get: () => e[o],
      enumerable: !(s = O(e, o)) || s.enumerable
    });
    return t;
  }, D = (t, e, r) => (r = t != null ? P(M(t)) : {}, c(!t || !t.__esModule ? i(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), S = (t) => c(i({}, "__esModule", {
    value: true
  }), t), a = (t, e, r) => (x(t, typeof e != "symbol" ? e + "" : e, r), r), d = {};
  j(d, {
    default: () => l
  });
  var h = S(d), u = D(f), p = m, y = g;
  const E = "https://widget.mixcloud.com/media/js/widgetApi.js", L = "Mixcloud";
  class l extends u.Component {
    constructor() {
      super(...arguments), a(this, "callPlayer", p.callPlayer), a(this, "duration", null), a(this, "currentTime", null), a(this, "secondsLoaded", null), a(this, "mute", () => {
      }), a(this, "unmute", () => {
      }), a(this, "ref", (e) => {
        this.iframe = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e) {
      (0, p.getSDK)(E, L).then((r) => {
        this.player = r.PlayerWidget(this.iframe), this.player.ready.then(() => {
          this.player.events.play.on(this.props.onPlay), this.player.events.pause.on(this.props.onPause), this.player.events.ended.on(this.props.onEnded), this.player.events.error.on(this.props.error), this.player.events.progress.on((s, o) => {
            this.currentTime = s, this.duration = o;
          }), this.props.onReady();
        });
      }, this.props.onError);
    }
    play() {
      this.callPlayer("play");
    }
    pause() {
      this.callPlayer("pause");
    }
    stop() {
    }
    seekTo(e, r = true) {
      this.callPlayer("seek", e), r || this.pause();
    }
    setVolume(e) {
    }
    getDuration() {
      return this.duration;
    }
    getCurrentTime() {
      return this.currentTime;
    }
    getSecondsLoaded() {
      return null;
    }
    render() {
      const { url: e, config: r } = this.props, s = e.match(y.MATCH_URL_MIXCLOUD)[1], o = {
        width: "100%",
        height: "100%"
      }, n = (0, p.queryString)({
        ...r.options,
        feed: `/${s}/`
      });
      return u.default.createElement("iframe", {
        key: s,
        ref: this.ref,
        style: o,
        src: `https://www.mixcloud.com/widget/iframe/?${n}`,
        frameBorder: "0",
        allow: "autoplay"
      });
    }
  }
  a(l, "displayName", "Mixcloud");
  a(l, "canPlay", y.canPlay.mixcloud);
  a(l, "loopOnEnded", true);
  let T;
  T = _(h);
  A = v({
    __proto__: null,
    default: T
  }, [
    h
  ]);
});
export {
  A as M,
  __tla
};
