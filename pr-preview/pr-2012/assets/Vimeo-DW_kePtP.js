import { eH as d, eL as f, eM as m, e7 as _, __tla as __tla_0 } from "./index-UiBHnyIz.js";
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
      const a = e[r];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const o in a) if (o !== "default" && !(o in t)) {
          const s = Object.getOwnPropertyDescriptor(a, o);
          s && Object.defineProperty(t, o, s.get ? s : {
            enumerable: true,
            get: () => a[o]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var g = Object.create, n = Object.defineProperty, b = Object.getOwnPropertyDescriptor, v = Object.getOwnPropertyNames, O = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty, M = (t, e, r) => e in t ? n(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, w = (t, e) => {
    for (var r in e) n(t, r, {
      get: e[r],
      enumerable: true
    });
  }, h = (t, e, r, a) => {
    if (e && typeof e == "object" || typeof e == "function") for (let o of v(e)) !D.call(t, o) && o !== r && n(t, o, {
      get: () => e[o],
      enumerable: !(a = b(e, o)) || a.enumerable
    });
    return t;
  }, j = (t, e, r) => (r = t != null ? g(O(t)) : {}, h(!t || !t.__esModule ? n(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), L = (t) => h(n({}, "__esModule", {
    value: true
  }), t), i = (t, e, r) => (M(t, typeof e != "symbol" ? e + "" : e, r), r), c = {};
  w(c, {
    default: () => l
  });
  var y = L(c), p = j(_), u = f, E = m;
  const S = "https://player.vimeo.com/api/player.js", V = "Vimeo", k = (t) => t.replace("/manage/videos", "");
  class l extends p.Component {
    constructor() {
      super(...arguments), i(this, "callPlayer", u.callPlayer), i(this, "duration", null), i(this, "currentTime", null), i(this, "secondsLoaded", null), i(this, "mute", () => {
        this.setMuted(true);
      }), i(this, "unmute", () => {
        this.setMuted(false);
      }), i(this, "ref", (e) => {
        this.container = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e) {
      this.duration = null, (0, u.getSDK)(S, V).then((r) => {
        if (!this.container) return;
        const { playerOptions: a, title: o } = this.props.config;
        this.player = new r.Player(this.container, {
          url: k(e),
          autoplay: this.props.playing,
          muted: this.props.muted,
          loop: this.props.loop,
          playsinline: this.props.playsinline,
          controls: this.props.controls,
          ...a
        }), this.player.ready().then(() => {
          const s = this.container.querySelector("iframe");
          s.style.width = "100%", s.style.height = "100%", o && (s.title = o);
        }).catch(this.props.onError), this.player.on("loaded", () => {
          this.props.onReady(), this.refreshDuration();
        }), this.player.on("play", () => {
          this.props.onPlay(), this.refreshDuration();
        }), this.player.on("pause", this.props.onPause), this.player.on("seeked", (s) => this.props.onSeek(s.seconds)), this.player.on("ended", this.props.onEnded), this.player.on("error", this.props.onError), this.player.on("timeupdate", ({ seconds: s }) => {
          this.currentTime = s;
        }), this.player.on("progress", ({ seconds: s }) => {
          this.secondsLoaded = s;
        }), this.player.on("bufferstart", this.props.onBuffer), this.player.on("bufferend", this.props.onBufferEnd), this.player.on("playbackratechange", (s) => this.props.onPlaybackRateChange(s.playbackRate));
      }, this.props.onError);
    }
    refreshDuration() {
      this.player.getDuration().then((e) => {
        this.duration = e;
      });
    }
    play() {
      const e = this.callPlayer("play");
      e && e.catch(this.props.onError);
    }
    pause() {
      this.callPlayer("pause");
    }
    stop() {
      this.callPlayer("unload");
    }
    seekTo(e, r = true) {
      this.callPlayer("setCurrentTime", e), r || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e);
    }
    setMuted(e) {
      this.callPlayer("setMuted", e);
    }
    setLoop(e) {
      this.callPlayer("setLoop", e);
    }
    setPlaybackRate(e) {
      this.callPlayer("setPlaybackRate", e);
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
      const { display: e } = this.props, r = {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: e
      };
      return p.default.createElement("div", {
        key: this.props.url,
        ref: this.ref,
        style: r
      });
    }
  }
  i(l, "displayName", "Vimeo");
  i(l, "canPlay", E.canPlay.vimeo);
  i(l, "forceLoad", true);
  let T;
  T = d(y);
  C = P({
    __proto__: null,
    default: T
  }, [
    y
  ]);
});
export {
  C as V,
  __tla
};
