import { eH as m, eN as E, eM as g, e7 as _, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let B;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function b(r, e) {
    for (var t = 0; t < e.length; t++) {
      const i = e[t];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const s in i) if (s !== "default" && !(s in r)) {
          const o = Object.getOwnPropertyDescriptor(i, s);
          o && Object.defineProperty(r, s, o.get ? o : {
            enumerable: true,
            get: () => i[s]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var L = Object.create, u = Object.defineProperty, I = Object.getOwnPropertyDescriptor, k = Object.getOwnPropertyNames, O = Object.getPrototypeOf, M = Object.prototype.hasOwnProperty, x = (r, e, t) => e in r ? u(r, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : r[e] = t, R = (r, e) => {
    for (var t in e) u(r, t, {
      get: e[t],
      enumerable: true
    });
  }, f = (r, e, t, i) => {
    if (e && typeof e == "object" || typeof e == "function") for (let s of k(e)) !M.call(r, s) && s !== t && u(r, s, {
      get: () => e[s],
      enumerable: !(i = I(e, s)) || i.enumerable
    });
    return r;
  }, w = (r, e, t) => (t = r != null ? L(O(r)) : {}, f(!r || !r.__esModule ? u(t, "default", {
    value: r,
    enumerable: true
  }) : t, r)), D = (r) => f(u({}, "__esModule", {
    value: true
  }), r), n = (r, e, t) => (x(r, typeof e != "symbol" ? e + "" : e, t), t), y = {};
  R(y, {
    default: () => l
  });
  var P = D(y), v = w(_), p = g;
  const j = "https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs";
  class l extends v.Component {
    constructor() {
      super(...arguments), n(this, "onReady", (...e) => this.props.onReady(...e)), n(this, "onPlay", (...e) => this.props.onPlay(...e)), n(this, "onBuffer", (...e) => this.props.onBuffer(...e)), n(this, "onBufferEnd", (...e) => this.props.onBufferEnd(...e)), n(this, "onPause", (...e) => this.props.onPause(...e)), n(this, "onEnded", (...e) => this.props.onEnded(...e)), n(this, "onError", (...e) => this.props.onError(...e)), n(this, "onPlayBackRateChange", (e) => this.props.onPlaybackRateChange(e.target.playbackRate)), n(this, "onEnablePIP", (...e) => this.props.onEnablePIP(...e)), n(this, "onSeek", (e) => {
        this.props.onSeek(e.target.currentTime);
      }), n(this, "onDurationChange", () => {
        const e = this.getDuration();
        this.props.onDuration(e);
      }), n(this, "mute", () => {
        this.player.muted = true;
      }), n(this, "unmute", () => {
        this.player.muted = false;
      }), n(this, "ref", (e) => {
        this.player = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
      const e = this.getPlaybackId(this.props.url);
      e && (this.player.playbackId = e);
    }
    componentWillUnmount() {
      this.player.playbackId = null, this.removeListeners(this.player);
    }
    addListeners(e) {
      const { playsinline: t } = this.props;
      e.addEventListener("play", this.onPlay), e.addEventListener("waiting", this.onBuffer), e.addEventListener("playing", this.onBufferEnd), e.addEventListener("pause", this.onPause), e.addEventListener("seeked", this.onSeek), e.addEventListener("ended", this.onEnded), e.addEventListener("error", this.onError), e.addEventListener("ratechange", this.onPlayBackRateChange), e.addEventListener("enterpictureinpicture", this.onEnablePIP), e.addEventListener("leavepictureinpicture", this.onDisablePIP), e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), e.addEventListener("canplay", this.onReady), t && e.setAttribute("playsinline", "");
    }
    removeListeners(e) {
      e.removeEventListener("canplay", this.onReady), e.removeEventListener("play", this.onPlay), e.removeEventListener("waiting", this.onBuffer), e.removeEventListener("playing", this.onBufferEnd), e.removeEventListener("pause", this.onPause), e.removeEventListener("seeked", this.onSeek), e.removeEventListener("ended", this.onEnded), e.removeEventListener("error", this.onError), e.removeEventListener("ratechange", this.onPlayBackRateChange), e.removeEventListener("enterpictureinpicture", this.onEnablePIP), e.removeEventListener("leavepictureinpicture", this.onDisablePIP), e.removeEventListener("canplay", this.onReady);
    }
    async load(e) {
      var t;
      const { onError: i, config: s } = this.props;
      if (!((t = globalThis.customElements) != null && t.get("mux-player"))) try {
        const a = j.replace("VERSION", s.version);
        await E(() => import(`${a}`).then(async (m2) => {
          await m2.__tla;
          return m2;
        }), []), this.props.onLoaded();
      } catch (a) {
        i(a);
      }
      const [, o] = e.match(p.MATCH_URL_MUX);
      this.player.playbackId = o;
    }
    play() {
      const e = this.player.play();
      e && e.catch(this.props.onError);
    }
    pause() {
      this.player.pause();
    }
    stop() {
      this.player.playbackId = null;
    }
    seekTo(e, t = true) {
      this.player.currentTime = e, t || this.pause();
    }
    setVolume(e) {
      this.player.volume = e;
    }
    enablePIP() {
      this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player && this.player.requestPictureInPicture();
    }
    disablePIP() {
      document.exitPictureInPicture && document.pictureInPictureElement === this.player && document.exitPictureInPicture();
    }
    setPlaybackRate(e) {
      try {
        this.player.playbackRate = e;
      } catch (t) {
        this.props.onError(t);
      }
    }
    getDuration() {
      if (!this.player) return null;
      const { duration: e, seekable: t } = this.player;
      return e === 1 / 0 && t.length > 0 ? t.end(t.length - 1) : e;
    }
    getCurrentTime() {
      return this.player ? this.player.currentTime : null;
    }
    getSecondsLoaded() {
      if (!this.player) return null;
      const { buffered: e } = this.player;
      if (e.length === 0) return 0;
      const t = e.end(e.length - 1), i = this.getDuration();
      return t > i ? i : t;
    }
    getPlaybackId(e) {
      const [, t] = e.match(p.MATCH_URL_MUX);
      return t;
    }
    render() {
      const { url: e, playing: t, loop: i, controls: s, muted: o, config: a, width: h, height: c } = this.props, d = {
        width: h === "auto" ? h : "100%",
        height: c === "auto" ? c : "100%"
      };
      return s === false && (d["--controls"] = "none"), v.default.createElement("mux-player", {
        ref: this.ref,
        "playback-id": this.getPlaybackId(e),
        style: d,
        preload: "auto",
        autoPlay: t || void 0,
        muted: o ? "" : void 0,
        loop: i ? "" : void 0,
        ...a.attributes
      });
    }
  }
  n(l, "displayName", "Mux");
  n(l, "canPlay", p.canPlay.mux);
  let C;
  C = m(P);
  B = b({
    __proto__: null,
    default: C
  }, [
    P
  ]);
});
export {
  B as M,
  __tla
};
