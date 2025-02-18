import { eH as b, e7 as _, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { u as O, p as A, __tla as __tla_1 } from "./NFTPage-CCH1ctkK.js";
let Q;
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
  function R(s, e) {
    for (var t = 0; t < e.length; t++) {
      const i = e[t];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const n in i) if (n !== "default" && !(n in s)) {
          const l = Object.getOwnPropertyDescriptor(i, n);
          l && Object.defineProperty(s, n, l.get ? l : {
            enumerable: true,
            get: () => i[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var I = Object.create, u = Object.defineProperty, D = Object.getOwnPropertyDescriptor, w = Object.getOwnPropertyNames, M = Object.getPrototypeOf, k = Object.prototype.hasOwnProperty, U = (s, e, t) => e in s ? u(s, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : s[e] = t, N = (s, e) => {
    for (var t in e) u(s, t, {
      get: e[t],
      enumerable: true
    });
  }, E = (s, e, t, i) => {
    if (e && typeof e == "object" || typeof e == "function") for (let n of w(e)) !k.call(s, n) && n !== t && u(s, n, {
      get: () => e[n],
      enumerable: !(i = D(e, n)) || i.enumerable
    });
    return s;
  }, H = (s, e, t) => (t = s != null ? I(M(s)) : {}, E(!s || !s.__esModule ? u(t, "default", {
    value: s,
    enumerable: true
  }) : t, s)), j = (s) => E(u({}, "__esModule", {
    value: true
  }), s), r = (s, e, t) => (U(s, typeof e != "symbol" ? e + "" : e, t), t), m = {};
  N(m, {
    default: () => P
  });
  var g = j(m), d = H(_), a = O, c = A;
  const y = typeof navigator < "u", F = y && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, v = y && (/iPad|iPhone|iPod/.test(navigator.userAgent) || F) && !window.MSStream, V = y && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream, T = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js", C = "Hls", B = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js", x = "dashjs", K = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js", G = "flvjs", X = /www\.dropbox\.com\/.+/, f = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/, W = "https://videodelivery.net/{id}/manifest/video.m3u8";
  class P extends d.Component {
    constructor() {
      super(...arguments), r(this, "onReady", (...e) => this.props.onReady(...e)), r(this, "onPlay", (...e) => this.props.onPlay(...e)), r(this, "onBuffer", (...e) => this.props.onBuffer(...e)), r(this, "onBufferEnd", (...e) => this.props.onBufferEnd(...e)), r(this, "onPause", (...e) => this.props.onPause(...e)), r(this, "onEnded", (...e) => this.props.onEnded(...e)), r(this, "onError", (...e) => this.props.onError(...e)), r(this, "onPlayBackRateChange", (e) => this.props.onPlaybackRateChange(e.target.playbackRate)), r(this, "onEnablePIP", (...e) => this.props.onEnablePIP(...e)), r(this, "onDisablePIP", (e) => {
        const { onDisablePIP: t, playing: i } = this.props;
        t(e), i && this.play();
      }), r(this, "onPresentationModeChange", (e) => {
        if (this.player && (0, a.supportsWebKitPresentationMode)(this.player)) {
          const { webkitPresentationMode: t } = this.player;
          t === "picture-in-picture" ? this.onEnablePIP(e) : t === "inline" && this.onDisablePIP(e);
        }
      }), r(this, "onSeek", (e) => {
        this.props.onSeek(e.target.currentTime);
      }), r(this, "mute", () => {
        this.player.muted = true;
      }), r(this, "unmute", () => {
        this.player.muted = false;
      }), r(this, "renderSourceElement", (e, t) => typeof e == "string" ? d.default.createElement("source", {
        key: t,
        src: e
      }) : d.default.createElement("source", {
        key: t,
        ...e
      })), r(this, "renderTrack", (e, t) => d.default.createElement("track", {
        key: t,
        ...e
      })), r(this, "ref", (e) => {
        this.player && (this.prevPlayer = this.player), this.player = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
      const e = this.getSource(this.props.url);
      e && (this.player.src = e), (v || this.props.config.forceDisableHls) && this.player.load();
    }
    componentDidUpdate(e) {
      this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url), this.addListeners(this.player)), this.props.url !== e.url && !(0, a.isMediaStream)(this.props.url) && !(this.props.url instanceof Array) && (this.player.srcObject = null);
    }
    componentWillUnmount() {
      this.player.removeAttribute("src"), this.removeListeners(this.player), this.hls && this.hls.destroy();
    }
    addListeners(e) {
      const { url: t, playsinline: i } = this.props;
      e.addEventListener("play", this.onPlay), e.addEventListener("waiting", this.onBuffer), e.addEventListener("playing", this.onBufferEnd), e.addEventListener("pause", this.onPause), e.addEventListener("seeked", this.onSeek), e.addEventListener("ended", this.onEnded), e.addEventListener("error", this.onError), e.addEventListener("ratechange", this.onPlayBackRateChange), e.addEventListener("enterpictureinpicture", this.onEnablePIP), e.addEventListener("leavepictureinpicture", this.onDisablePIP), e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e.addEventListener("canplay", this.onReady), i && (e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("x5-playsinline", ""));
    }
    removeListeners(e, t) {
      e.removeEventListener("canplay", this.onReady), e.removeEventListener("play", this.onPlay), e.removeEventListener("waiting", this.onBuffer), e.removeEventListener("playing", this.onBufferEnd), e.removeEventListener("pause", this.onPause), e.removeEventListener("seeked", this.onSeek), e.removeEventListener("ended", this.onEnded), e.removeEventListener("error", this.onError), e.removeEventListener("ratechange", this.onPlayBackRateChange), e.removeEventListener("enterpictureinpicture", this.onEnablePIP), e.removeEventListener("leavepictureinpicture", this.onDisablePIP), e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady);
    }
    shouldUseAudio(e) {
      return e.config.forceVideo || e.config.attributes.poster ? false : c.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio;
    }
    shouldUseHLS(e) {
      return V && this.props.config.forceSafariHLS || this.props.config.forceHLS ? true : v || this.props.config.forceDisableHls ? false : c.HLS_EXTENSIONS.test(e) || f.test(e);
    }
    shouldUseDASH(e) {
      return c.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH;
    }
    shouldUseFLV(e) {
      return c.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV;
    }
    load(e) {
      const { hlsVersion: t, hlsOptions: i, dashVersion: n, flvVersion: l } = this.props.config;
      if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(e) && (0, a.getSDK)(T.replace("VERSION", t), C).then((o) => {
        if (this.hls = new o(i), this.hls.on(o.Events.MANIFEST_PARSED, () => {
          this.props.onReady();
        }), this.hls.on(o.Events.ERROR, (h, p) => {
          this.props.onError(h, p, this.hls, o);
        }), f.test(e)) {
          const h = e.match(f)[1];
          this.hls.loadSource(W.replace("{id}", h));
        } else this.hls.loadSource(e);
        this.hls.attachMedia(this.player), this.props.onLoaded();
      }), this.shouldUseDASH(e) && (0, a.getSDK)(B.replace("VERSION", n), x).then((o) => {
        this.dash = o.MediaPlayer().create(), this.dash.initialize(this.player, e, this.props.playing), this.dash.on("error", this.props.onError), parseInt(n) < 3 ? this.dash.getDebug().setLogToBrowserConsole(false) : this.dash.updateSettings({
          debug: {
            logLevel: o.Debug.LOG_LEVEL_NONE
          }
        }), this.props.onLoaded();
      }), this.shouldUseFLV(e) && (0, a.getSDK)(K.replace("VERSION", l), G).then((o) => {
        this.flv = o.createPlayer({
          type: "flv",
          url: e
        }), this.flv.attachMediaElement(this.player), this.flv.on(o.Events.ERROR, (h, p) => {
          this.props.onError(h, p, this.flv, o);
        }), this.flv.load(), this.props.onLoaded();
      }), e instanceof Array) this.player.load();
      else if ((0, a.isMediaStream)(e)) try {
        this.player.srcObject = e;
      } catch {
        this.player.src = window.URL.createObjectURL(e);
      }
    }
    play() {
      const e = this.player.play();
      e && e.catch(this.props.onError);
    }
    pause() {
      this.player.pause();
    }
    stop() {
      this.player.removeAttribute("src"), this.dash && this.dash.reset();
    }
    seekTo(e, t = true) {
      this.player.currentTime = e, t || this.pause();
    }
    setVolume(e) {
      this.player.volume = e;
    }
    enablePIP() {
      this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture" && this.player.webkitSetPresentationMode("picture-in-picture");
    }
    disablePIP() {
      document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline" && this.player.webkitSetPresentationMode("inline");
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
    getSource(e) {
      const t = this.shouldUseHLS(e), i = this.shouldUseDASH(e), n = this.shouldUseFLV(e);
      if (!(e instanceof Array || (0, a.isMediaStream)(e) || t || i || n)) return X.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e;
    }
    render() {
      const { url: e, playing: t, loop: i, controls: n, muted: l, config: o, width: h, height: p } = this.props, L = this.shouldUseAudio(this.props) ? "audio" : "video", S = {
        width: h === "auto" ? h : "100%",
        height: p === "auto" ? p : "100%"
      };
      return d.default.createElement(L, {
        ref: this.ref,
        src: this.getSource(e),
        style: S,
        preload: "auto",
        autoPlay: t || void 0,
        controls: n,
        muted: l,
        loop: i,
        ...o.attributes
      }, e instanceof Array && e.map(this.renderSourceElement), o.tracks.map(this.renderTrack));
    }
  }
  r(P, "displayName", "FilePlayer");
  r(P, "canPlay", c.canPlay.file);
  let z;
  z = b(g);
  Q = R({
    __proto__: null,
    default: z
  }, [
    g
  ]);
});
export {
  Q as F,
  __tla
};
