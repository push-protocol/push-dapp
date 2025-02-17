import { eH as P, e7 as v, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { u as D, p as O, __tla as __tla_1 } from "./NFTPage-CIrMmamu.js";
let k;
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
  function b(t, e) {
    for (var r = 0; r < e.length; r++) {
      const o = e[r];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const a in o) if (a !== "default" && !(a in t)) {
          const i = Object.getOwnPropertyDescriptor(o, a);
          i && Object.defineProperty(t, a, i.get ? i : {
            enumerable: true,
            get: () => o[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var M = Object.create, s = Object.defineProperty, w = Object.getOwnPropertyDescriptor, S = Object.getOwnPropertyNames, j = Object.getPrototypeOf, T = Object.prototype.hasOwnProperty, E = (t, e, r) => e in t ? s(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, A = (t, e) => {
    for (var r in e) s(t, r, {
      get: e[r],
      enumerable: true
    });
  }, h = (t, e, r, o) => {
    if (e && typeof e == "object" || typeof e == "function") for (let a of S(e)) !T.call(t, a) && a !== r && s(t, a, {
      get: () => e[a],
      enumerable: !(o = w(e, a)) || o.enumerable
    });
    return t;
  }, L = (t, e, r) => (r = t != null ? M(j(t)) : {}, h(!t || !t.__esModule ? s(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), C = (t) => h(s({}, "__esModule", {
    value: true
  }), t), n = (t, e, r) => (E(t, typeof e != "symbol" ? e + "" : e, r), r), d = {};
  A(d, {
    default: () => p
  });
  var _ = C(d), c = L(v), l = D, f = O;
  const N = "https://api.dmcdn.net/all.js", x = "DM", K = "dmAsyncInit";
  class p extends c.Component {
    constructor() {
      super(...arguments), n(this, "callPlayer", l.callPlayer), n(this, "onDurationChange", () => {
        const e = this.getDuration();
        this.props.onDuration(e);
      }), n(this, "mute", () => {
        this.callPlayer("setMuted", true);
      }), n(this, "unmute", () => {
        this.callPlayer("setMuted", false);
      }), n(this, "ref", (e) => {
        this.container = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e) {
      const { controls: r, config: o, onError: a, playing: i } = this.props, [, y] = e.match(f.MATCH_URL_DAILYMOTION);
      if (this.player) {
        this.player.load(y, {
          start: (0, l.parseStartTime)(e),
          autoplay: i
        });
        return;
      }
      (0, l.getSDK)(N, x, K, (u) => u.player).then((u) => {
        if (!this.container) return;
        const m = u.player;
        this.player = new m(this.container, {
          width: "100%",
          height: "100%",
          video: y,
          params: {
            controls: r,
            autoplay: this.props.playing,
            mute: this.props.muted,
            start: (0, l.parseStartTime)(e),
            origin: window.location.origin,
            ...o.params
          },
          events: {
            apiready: this.props.onReady,
            seeked: () => this.props.onSeek(this.player.currentTime),
            video_end: this.props.onEnded,
            durationchange: this.onDurationChange,
            pause: this.props.onPause,
            playing: this.props.onPlay,
            waiting: this.props.onBuffer,
            error: (g) => a(g)
          }
        });
      }, a);
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
      this.callPlayer("setVolume", e);
    }
    getDuration() {
      return this.player.duration || null;
    }
    getCurrentTime() {
      return this.player.currentTime;
    }
    getSecondsLoaded() {
      return this.player.bufferedTime;
    }
    render() {
      const { display: e } = this.props, r = {
        width: "100%",
        height: "100%",
        display: e
      };
      return c.default.createElement("div", {
        style: r
      }, c.default.createElement("div", {
        ref: this.ref
      }));
    }
  }
  n(p, "displayName", "DailyMotion");
  n(p, "canPlay", f.canPlay.dailymotion);
  n(p, "loopOnEnded", true);
  let R;
  R = P(_);
  k = b({
    __proto__: null,
    default: R
  }, [
    _
  ]);
});
export {
  k as D,
  __tla
};
