import { eH as _, e7 as P, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { u as g, p as m, __tla as __tla_1 } from "./NFTPage-BCA8R3tp.js";
let N;
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
      const a = e[r];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const s in a) if (s !== "default" && !(s in t)) {
          const p = Object.getOwnPropertyDescriptor(a, s);
          p && Object.defineProperty(t, s, p.get ? p : {
            enumerable: true,
            get: () => a[s]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var O = Object.create, i = Object.defineProperty, D = Object.getOwnPropertyDescriptor, E = Object.getOwnPropertyNames, S = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty, I = (t, e, r) => e in t ? i(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : t[e] = r, k = (t, e) => {
    for (var r in e) i(t, r, {
      get: e[r],
      enumerable: true
    });
  }, h = (t, e, r, a) => {
    if (e && typeof e == "object" || typeof e == "function") for (let s of E(e)) !j.call(t, s) && s !== r && i(t, s, {
      get: () => e[s],
      enumerable: !(a = D(e, s)) || a.enumerable
    });
    return t;
  }, w = (t, e, r) => (r = t != null ? O(S(t)) : {}, h(!t || !t.__esModule ? i(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), F = (t) => h(i({}, "__esModule", {
    value: true
  }), t), o = (t, e, r) => (I(t, typeof e != "symbol" ? e + "" : e, r), r), b = {};
  k(b, {
    default: () => l
  });
  var d = F(b), u = w(P), n = g, x = m;
  const c = "https://connect.facebook.net/en_US/sdk.js", f = "FB", y = "fbAsyncInit", L = "facebook-player-";
  class l extends u.Component {
    constructor() {
      super(...arguments), o(this, "callPlayer", n.callPlayer), o(this, "playerID", this.props.config.playerId || `${L}${(0, n.randomString)()}`), o(this, "mute", () => {
        this.callPlayer("mute");
      }), o(this, "unmute", () => {
        this.callPlayer("unmute");
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e, r) {
      if (r) {
        (0, n.getSDK)(c, f, y).then((a) => a.XFBML.parse());
        return;
      }
      (0, n.getSDK)(c, f, y).then((a) => {
        a.init({
          appId: this.props.config.appId,
          xfbml: true,
          version: this.props.config.version
        }), a.Event.subscribe("xfbml.render", (s) => {
          this.props.onLoaded();
        }), a.Event.subscribe("xfbml.ready", (s) => {
          s.type === "video" && s.id === this.playerID && (this.player = s.instance, this.player.subscribe("startedPlaying", this.props.onPlay), this.player.subscribe("paused", this.props.onPause), this.player.subscribe("finishedPlaying", this.props.onEnded), this.player.subscribe("startedBuffering", this.props.onBuffer), this.player.subscribe("finishedBuffering", this.props.onBufferEnd), this.player.subscribe("error", this.props.onError), this.props.muted ? this.callPlayer("mute") : this.callPlayer("unmute"), this.props.onReady(), document.getElementById(this.playerID).querySelector("iframe").style.visibility = "visible");
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
      this.callPlayer("seek", e), r || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e);
    }
    getDuration() {
      return this.callPlayer("getDuration");
    }
    getCurrentTime() {
      return this.callPlayer("getCurrentPosition");
    }
    getSecondsLoaded() {
      return null;
    }
    render() {
      const { attributes: e } = this.props.config, r = {
        width: "100%",
        height: "100%"
      };
      return u.default.createElement("div", {
        style: r,
        id: this.playerID,
        className: "fb-video",
        "data-href": this.props.url,
        "data-autoplay": this.props.playing ? "true" : "false",
        "data-allowfullscreen": "true",
        "data-controls": this.props.controls ? "true" : "false",
        ...e
      });
    }
  }
  o(l, "displayName", "Facebook");
  o(l, "canPlay", x.canPlay.facebook);
  o(l, "loopOnEnded", true);
  let M;
  M = _(d);
  N = v({
    __proto__: null,
    default: M
  }, [
    d
  ]);
});
export {
  N as F,
  __tla
};
