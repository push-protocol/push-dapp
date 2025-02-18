import { eH as R, eL as U, eM as I, e7 as M, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Y(a, e) {
    for (var t = 0; t < e.length; t++) {
      const s = e[t];
      if (typeof s != "string" && !Array.isArray(s)) {
        for (const r in s) if (r !== "default" && !(r in a)) {
          const n = Object.getOwnPropertyDescriptor(s, r);
          n && Object.defineProperty(a, r, n.get ? n : {
            enumerable: true,
            get: () => s[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var k = Object.create, u = Object.defineProperty, N = Object.getOwnPropertyDescriptor, j = Object.getOwnPropertyNames, V = Object.getPrototypeOf, B = Object.prototype.hasOwnProperty, x = (a, e, t) => e in a ? u(a, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : a[e] = t, H = (a, e) => {
    for (var t in e) u(a, t, {
      get: e[t],
      enumerable: true
    });
  }, v = (a, e, t, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let r of j(e)) !B.call(a, r) && r !== t && u(a, r, {
      get: () => e[r],
      enumerable: !(s = N(e, r)) || s.enumerable
    });
    return a;
  }, K = (a, e, t) => (t = a != null ? k(V(a)) : {}, v(!a || !a.__esModule ? u(t, "default", {
    value: a,
    enumerable: true
  }) : t, a)), F = (a) => v(u({}, "__esModule", {
    value: true
  }), a), o = (a, e, t) => (x(a, typeof e != "symbol" ? e + "" : e, t), t), w = {};
  H(w, {
    default: () => O
  });
  var S = F(w), b = K(M), c = U, D = I;
  const G = "https://www.youtube.com/iframe_api", T = "YT", z = "onYouTubeIframeAPIReady", f = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/, m = /user\/([a-zA-Z0-9_-]+)\/?/, Q = /youtube-nocookie\.com/, Z = "https://www.youtube-nocookie.com";
  class O extends b.Component {
    constructor() {
      super(...arguments), o(this, "callPlayer", c.callPlayer), o(this, "parsePlaylist", (e) => {
        if (e instanceof Array) return {
          listType: "playlist",
          playlist: e.map(this.getID).join(",")
        };
        if (f.test(e)) {
          const [, t] = e.match(f);
          return {
            listType: "playlist",
            list: t.replace(/^UC/, "UU")
          };
        }
        if (m.test(e)) {
          const [, t] = e.match(m);
          return {
            listType: "user_uploads",
            list: t
          };
        }
        return {};
      }), o(this, "onStateChange", (e) => {
        const { data: t } = e, { onPlay: s, onPause: r, onBuffer: n, onBufferEnd: P, onEnded: _, onReady: g, loop: y, config: { playerVars: l, onUnstarted: h } } = this.props, { UNSTARTED: d, PLAYING: p, PAUSED: i, BUFFERING: E, ENDED: A, CUED: C } = window[T].PlayerState;
        if (t === d && h(), t === p && (s(), P()), t === i && r(), t === E && n(), t === A) {
          const L = !!this.callPlayer("getPlaylist");
          y && !L && (l.start ? this.seekTo(l.start) : this.play()), _();
        }
        t === C && g();
      }), o(this, "mute", () => {
        this.callPlayer("mute");
      }), o(this, "unmute", () => {
        this.callPlayer("unMute");
      }), o(this, "ref", (e) => {
        this.container = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    getID(e) {
      return !e || e instanceof Array || f.test(e) ? null : e.match(D.MATCH_URL_YOUTUBE)[1];
    }
    load(e, t) {
      const { playing: s, muted: r, playsinline: n, controls: P, loop: _, config: g, onError: y } = this.props, { playerVars: l, embedOptions: h } = g, d = this.getID(e);
      if (t) {
        if (f.test(e) || m.test(e) || e instanceof Array) {
          this.player.loadPlaylist(this.parsePlaylist(e));
          return;
        }
        this.player.cueVideoById({
          videoId: d,
          startSeconds: (0, c.parseStartTime)(e) || l.start,
          endSeconds: (0, c.parseEndTime)(e) || l.end
        });
        return;
      }
      (0, c.getSDK)(G, T, z, (p) => p.loaded).then((p) => {
        this.container && (this.player = new p.Player(this.container, {
          width: "100%",
          height: "100%",
          videoId: d,
          playerVars: {
            autoplay: s ? 1 : 0,
            mute: r ? 1 : 0,
            controls: P ? 1 : 0,
            start: (0, c.parseStartTime)(e),
            end: (0, c.parseEndTime)(e),
            origin: window.location.origin,
            playsinline: n ? 1 : 0,
            ...this.parsePlaylist(e),
            ...l
          },
          events: {
            onReady: () => {
              _ && this.player.setLoop(true), this.props.onReady();
            },
            onPlaybackRateChange: (i) => this.props.onPlaybackRateChange(i.data),
            onPlaybackQualityChange: (i) => this.props.onPlaybackQualityChange(i),
            onStateChange: this.onStateChange,
            onError: (i) => y(i.data)
          },
          host: Q.test(e) ? Z : void 0,
          ...h
        }));
      }, y), h.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause");
    }
    play() {
      this.callPlayer("playVideo");
    }
    pause() {
      this.callPlayer("pauseVideo");
    }
    stop() {
      document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
    }
    seekTo(e, t = false) {
      this.callPlayer("seekTo", e), !t && !this.props.playing && this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e * 100);
    }
    setPlaybackRate(e) {
      this.callPlayer("setPlaybackRate", e);
    }
    setLoop(e) {
      this.callPlayer("setLoop", e);
    }
    getDuration() {
      return this.callPlayer("getDuration");
    }
    getCurrentTime() {
      return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
      return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
    }
    render() {
      const { display: e } = this.props, t = {
        width: "100%",
        height: "100%",
        display: e
      };
      return b.default.createElement("div", {
        style: t
      }, b.default.createElement("div", {
        ref: this.ref
      }));
    }
  }
  o(O, "displayName", "YouTube");
  o(O, "canPlay", D.canPlay.youtube);
  let $;
  $ = R(S);
  q = Y({
    __proto__: null,
    default: $
  }, [
    S
  ]);
});
export {
  q as Y,
  __tla
};
