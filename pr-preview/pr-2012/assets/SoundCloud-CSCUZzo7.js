import { eH as P, e7 as g, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { u as b, p as v, __tla as __tla_1 } from "./NFTPage-CIrMmamu.js";
let I;
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
  function O(t, e) {
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
  var S = Object.create, l = Object.defineProperty, w = Object.getOwnPropertyDescriptor, j = Object.getOwnPropertyNames, C = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty, D = (t, e, r) => e in t ? l(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, L = (t, e) => {
    for (var r in e) l(t, r, {
      get: e[r],
      enumerable: true
    });
  }, d = (t, e, r, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let o of j(e)) !E.call(t, o) && o !== r && l(t, o, {
      get: () => e[o],
      enumerable: !(s = w(e, o)) || s.enumerable
    });
    return t;
  }, M = (t, e, r) => (r = t != null ? S(C(t)) : {}, d(!t || !t.__esModule ? l(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), R = (t) => d(l({}, "__esModule", {
    value: true
  }), t), a = (t, e, r) => (D(t, typeof e != "symbol" ? e + "" : e, r), r), h = {};
  L(h, {
    default: () => u
  });
  var f = R(h), p = M(g), c = b, T = v;
  const N = "https://w.soundcloud.com/player/api.js", x = "SC";
  class u extends p.Component {
    constructor() {
      super(...arguments), a(this, "callPlayer", c.callPlayer), a(this, "duration", null), a(this, "currentTime", null), a(this, "fractionLoaded", null), a(this, "mute", () => {
        this.setVolume(0);
      }), a(this, "unmute", () => {
        this.props.volume !== null && this.setVolume(this.props.volume);
      }), a(this, "ref", (e) => {
        this.iframe = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e, r) {
      (0, c.getSDK)(N, x).then((s) => {
        if (!this.iframe) return;
        const { PLAY: o, PLAY_PROGRESS: n, PAUSE: y, FINISH: _, ERROR: m } = s.Widget.Events;
        r || (this.player = s.Widget(this.iframe), this.player.bind(o, this.props.onPlay), this.player.bind(y, () => {
          this.duration - this.currentTime < 0.05 || this.props.onPause();
        }), this.player.bind(n, (i) => {
          this.currentTime = i.currentPosition / 1e3, this.fractionLoaded = i.loadedProgress;
        }), this.player.bind(_, () => this.props.onEnded()), this.player.bind(m, (i) => this.props.onError(i))), this.player.load(e, {
          ...this.props.config.options,
          callback: () => {
            this.player.getDuration((i) => {
              this.duration = i / 1e3, this.props.onReady();
            });
          }
        });
      });
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
      this.callPlayer("seekTo", e * 1e3), r || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e * 100);
    }
    getDuration() {
      return this.duration;
    }
    getCurrentTime() {
      return this.currentTime;
    }
    getSecondsLoaded() {
      return this.fractionLoaded * this.duration;
    }
    render() {
      const { display: e } = this.props, r = {
        width: "100%",
        height: "100%",
        display: e
      };
      return p.default.createElement("iframe", {
        ref: this.ref,
        src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,
        style: r,
        frameBorder: 0,
        allow: "autoplay"
      });
    }
  }
  a(u, "displayName", "SoundCloud");
  a(u, "canPlay", T.canPlay.soundcloud);
  a(u, "loopOnEnded", true);
  let A;
  A = P(f);
  I = O({
    __proto__: null,
    default: A
  }, [
    f
  ]);
});
export {
  I as S,
  __tla
};
