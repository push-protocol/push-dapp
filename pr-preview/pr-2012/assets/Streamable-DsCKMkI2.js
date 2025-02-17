import { eH as m, eL as f, eM as _, e7 as b, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let C;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function P(t, e) {
    for (var r = 0; r < e.length; r++) {
      const s = e[r];
      if (typeof s != "string" && !Array.isArray(s)) {
        for (const a in s) if (a !== "default" && !(a in t)) {
          const n = Object.getOwnPropertyDescriptor(s, a);
          n && Object.defineProperty(t, a, n.get ? n : {
            enumerable: true,
            get: () => s[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var g = Object.create, l = Object.defineProperty, v = Object.getOwnPropertyDescriptor, O = Object.getOwnPropertyNames, S = Object.getPrototypeOf, L = Object.prototype.hasOwnProperty, j = (t, e, r) => e in t ? l(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, w = (t, e) => {
    for (var r in e) l(t, r, {
      get: e[r],
      enumerable: true
    });
  }, c = (t, e, r, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let a of O(e)) !L.call(t, a) && a !== r && l(t, a, {
      get: () => e[a],
      enumerable: !(s = v(e, a)) || s.enumerable
    });
    return t;
  }, M = (t, e, r) => (r = t != null ? g(S(t)) : {}, c(!t || !t.__esModule ? l(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), D = (t) => c(l({}, "__esModule", {
    value: true
  }), t), o = (t, e, r) => (j(t, typeof e != "symbol" ? e + "" : e, r), r), h = {};
  w(h, {
    default: () => i
  });
  var y = D(h), p = M(b), u = f, d = _;
  const E = "https://cdn.embed.ly/player-0.1.0.min.js", T = "playerjs";
  class i extends p.Component {
    constructor() {
      super(...arguments), o(this, "callPlayer", u.callPlayer), o(this, "duration", null), o(this, "currentTime", null), o(this, "secondsLoaded", null), o(this, "mute", () => {
        this.callPlayer("mute");
      }), o(this, "unmute", () => {
        this.callPlayer("unmute");
      }), o(this, "ref", (e) => {
        this.iframe = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e) {
      (0, u.getSDK)(E, T).then((r) => {
        this.iframe && (this.player = new r.Player(this.iframe), this.player.setLoop(this.props.loop), this.player.on("ready", this.props.onReady), this.player.on("play", this.props.onPlay), this.player.on("pause", this.props.onPause), this.player.on("seeked", this.props.onSeek), this.player.on("ended", this.props.onEnded), this.player.on("error", this.props.onError), this.player.on("timeupdate", ({ duration: s, seconds: a }) => {
          this.duration = s, this.currentTime = a;
        }), this.player.on("buffered", ({ percent: s }) => {
          this.duration && (this.secondsLoaded = this.duration * s);
        }), this.props.muted && this.player.mute());
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
      this.callPlayer("setCurrentTime", e), r || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e * 100);
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
      const e = this.props.url.match(d.MATCH_URL_STREAMABLE)[1], r = {
        width: "100%",
        height: "100%"
      };
      return p.default.createElement("iframe", {
        ref: this.ref,
        src: `https://streamable.com/o/${e}`,
        frameBorder: "0",
        scrolling: "no",
        style: r,
        allow: "encrypted-media; autoplay; fullscreen;"
      });
    }
  }
  o(i, "displayName", "Streamable");
  o(i, "canPlay", d.canPlay.streamable);
  let x;
  x = m(y);
  C = P({
    __proto__: null,
    default: x
  }, [
    y
  ]);
});
export {
  C as S,
  __tla
};
