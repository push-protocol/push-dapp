import { eH as w, eL as D, eM as C, e7 as N, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let G;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function M(t, e) {
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
  var I = Object.create, l = Object.defineProperty, S = Object.getOwnPropertyDescriptor, j = Object.getOwnPropertyNames, A = Object.getPrototypeOf, H = Object.prototype.hasOwnProperty, R = (t, e, r) => e in t ? l(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, x = (t, e) => {
    for (var r in e) l(t, r, {
      get: e[r],
      enumerable: true
    });
  }, _ = (t, e, r, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let a of j(e)) !H.call(t, a) && a !== r && l(t, a, {
      get: () => e[a],
      enumerable: !(s = S(e, a)) || s.enumerable
    });
    return t;
  }, F = (t, e, r) => (r = t != null ? I(A(t)) : {}, _(!t || !t.__esModule ? l(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), U = (t) => _(l({}, "__esModule", {
    value: true
  }), t), o = (t, e, r) => (R(t, typeof e != "symbol" ? e + "" : e, r), r), P = {};
  x(P, {
    default: () => h
  });
  var f = U(P), y = F(N), c = D, u = C;
  const K = "https://player.twitch.tv/js/embed/v1.js", V = "Twitch", $ = "twitch-player-";
  class h extends y.Component {
    constructor() {
      super(...arguments), o(this, "callPlayer", c.callPlayer), o(this, "playerID", this.props.config.playerId || `${$}${(0, c.randomString)()}`), o(this, "mute", () => {
        this.callPlayer("setMuted", true);
      }), o(this, "unmute", () => {
        this.callPlayer("setMuted", false);
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e, r) {
      const { playsinline: s, onError: a, config: n, controls: v } = this.props, i = u.MATCH_URL_TWITCH_CHANNEL.test(e), p = i ? e.match(u.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(u.MATCH_URL_TWITCH_VIDEO)[1];
      if (r) {
        i ? this.player.setChannel(p) : this.player.setVideo("v" + p);
        return;
      }
      (0, c.getSDK)(K, V).then((d) => {
        this.player = new d.Player(this.playerID, {
          video: i ? "" : p,
          channel: i ? p : "",
          height: "100%",
          width: "100%",
          playsinline: s,
          autoplay: this.props.playing,
          muted: this.props.muted,
          controls: i ? true : v,
          time: (0, c.parseStartTime)(e),
          ...n.options
        });
        const { READY: g, PLAYING: m, PAUSE: E, ENDED: O, ONLINE: L, OFFLINE: b, SEEK: T } = d.Player;
        this.player.addEventListener(g, this.props.onReady), this.player.addEventListener(m, this.props.onPlay), this.player.addEventListener(E, this.props.onPause), this.player.addEventListener(O, this.props.onEnded), this.player.addEventListener(T, this.props.onSeek), this.player.addEventListener(L, this.props.onLoaded), this.player.addEventListener(b, this.props.onLoaded);
      }, a);
    }
    play() {
      this.callPlayer("play");
    }
    pause() {
      this.callPlayer("pause");
    }
    stop() {
      this.callPlayer("pause");
    }
    seekTo(e, r = true) {
      this.callPlayer("seek", e), r || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e);
    }
    getDuration() {
      return this.callPlayer("getDuration");
    }
    getCurrentTime() {
      return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
      return null;
    }
    render() {
      const e = {
        width: "100%",
        height: "100%"
      };
      return y.default.createElement("div", {
        style: e,
        id: this.playerID
      });
    }
  }
  o(h, "displayName", "Twitch");
  o(h, "canPlay", u.canPlay.twitch);
  o(h, "loopOnEnded", true);
  let W;
  W = w(f);
  G = M({
    __proto__: null,
    default: W
  }, [
    f
  ]);
});
export {
  G as T,
  __tla
};
