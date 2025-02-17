import { eH as y, e7 as f, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { u as _, p as m, __tla as __tla_1 } from "./NFTPage-CIrMmamu.js";
let C;
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
  function P(r, e) {
    for (var t = 0; t < e.length; t++) {
      const o = e[t];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const a in o) if (a !== "default" && !(a in r)) {
          const l = Object.getOwnPropertyDescriptor(o, a);
          l && Object.defineProperty(r, a, l.get ? l : {
            enumerable: true,
            get: () => o[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var g = Object.create, n = Object.defineProperty, b = Object.getOwnPropertyDescriptor, v = Object.getOwnPropertyNames, O = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty, j = (r, e, t) => e in r ? n(r, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : r[e] = t, L = (r, e) => {
    for (var t in e) n(r, t, {
      get: e[t],
      enumerable: true
    });
  }, c = (r, e, t, o) => {
    if (e && typeof e == "object" || typeof e == "function") for (let a of v(e)) !w.call(r, a) && a !== t && n(r, a, {
      get: () => e[a],
      enumerable: !(o = b(e, a)) || o.enumerable
    });
    return r;
  }, K = (r, e, t) => (t = r != null ? g(O(r)) : {}, c(!r || !r.__esModule ? n(t, "default", {
    value: r,
    enumerable: true
  }) : t, r)), D = (r) => c(n({}, "__esModule", {
    value: true
  }), r), s = (r, e, t) => (j(r, typeof e != "symbol" ? e + "" : e, t), t), d = {};
  L(d, {
    default: () => i
  });
  var h = D(d), u = K(f), p = _, M = m;
  const S = "https://cdn.embed.ly/player-0.1.0.min.js", T = "playerjs";
  class i extends u.Component {
    constructor() {
      super(...arguments), s(this, "callPlayer", p.callPlayer), s(this, "duration", null), s(this, "currentTime", null), s(this, "secondsLoaded", null), s(this, "mute", () => {
        this.callPlayer("mute");
      }), s(this, "unmute", () => {
        this.callPlayer("unmute");
      }), s(this, "ref", (e) => {
        this.iframe = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e) {
      (0, p.getSDK)(S, T).then((t) => {
        this.iframe && (this.player = new t.Player(this.iframe), this.player.on("ready", () => {
          setTimeout(() => {
            this.player.isReady = true, this.player.setLoop(this.props.loop), this.props.muted && this.player.mute(), this.addListeners(this.player, this.props), this.props.onReady();
          }, 500);
        }));
      }, this.props.onError);
    }
    addListeners(e, t) {
      e.on("play", t.onPlay), e.on("pause", t.onPause), e.on("ended", t.onEnded), e.on("error", t.onError), e.on("timeupdate", ({ duration: o, seconds: a }) => {
        this.duration = o, this.currentTime = a;
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
    seekTo(e, t = true) {
      this.callPlayer("setCurrentTime", e), t || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e);
    }
    setLoop(e) {
      this.callPlayer("setLoop", e);
    }
    getDuration() {
      return this.duration;
    }
    getCurrentTime() {
      return this.currentTime;
    }
    getSecondsLoaded() {
      return this.secondsLoaded;
    }
    render() {
      const e = {
        width: "100%",
        height: "100%"
      };
      return u.default.createElement("iframe", {
        ref: this.ref,
        src: this.props.url,
        frameBorder: "0",
        scrolling: "no",
        style: e,
        allow: "encrypted-media; autoplay; fullscreen;",
        referrerPolicy: "no-referrer-when-downgrade"
      });
    }
  }
  s(i, "displayName", "Kaltura");
  s(i, "canPlay", M.canPlay.kaltura);
  let E;
  E = y(h);
  C = P({
    __proto__: null,
    default: E
  }, [
    h
  ]);
});
export {
  C as K,
  __tla
};
