const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YouTube-DPdy6agA.js","assets/index-D1Swtpz3.js","assets/index-Dlk3sXhy.css","assets/SoundCloud-BSTyXIdL.js","assets/Vimeo--pUA2Ed5.js","assets/Mux-B6t6KVNd.js","assets/Facebook-DJzak2PQ.js","assets/Streamable-0Kntt7Bv.js","assets/Wistia-BxBhQzO0.js","assets/Twitch-CstNS4Vc.js","assets/DailyMotion-CzJCjKU-.js","assets/Mixcloud-ClP3qFwo.js","assets/Vidyard-BUt171s5.js","assets/Kaltura-BR96Ju9O.js","assets/FilePlayer-CLdtF9ca.js","assets/Preview-BhNucGaT.js"])))=>i.map(i=>d[i]);
import { e7 as H, hp as Ut, hq as qe, eN as F, hr as Vt, hs as Qe, ht as zt, eH as Ht, e5 as G, el as p, fD as O, fE as j, fC as E, ea as o, ei as $, hu as ue, hv as ie, ej as c, en as W, eq as Y, g8 as he, eg as B, eT as le, ec as te, ed as re, hw as Ze, eh as J, eU as se, eV as A, hx as et, hn as fe, e$ as Ce, eS as Bt, ee as Wt, eY as Le, fG as Fe, eX as M, eZ as q, e_ as Ue, f0 as Kt, f1 as Gt, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { I as tt, __tla as __tla_1 } from "./index.esm-BLoo0CKo.js";
let ba, Or, ye;
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
  var Jt = Object.create, ge = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Yt = Object.getOwnPropertyNames, qt = Object.getPrototypeOf, Qt = Object.prototype.hasOwnProperty, Zt = (e, t) => {
    for (var a in t) ge(e, a, {
      get: t[a],
      enumerable: true
    });
  }, rt = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of Yt(t)) !Qt.call(e, n) && n !== a && ge(e, n, {
      get: () => t[n],
      enumerable: !(r = Xt(t, n)) || r.enumerable
    });
    return e;
  }, Ae = (e, t, a) => (a = e != null ? Jt(qt(e)) : {}, rt(!e || !e.__esModule ? ge(a, "default", {
    value: e,
    enumerable: true
  }) : a, e)), er = (e) => rt(ge({}, "__esModule", {
    value: true
  }), e), nt = {};
  Zt(nt, {
    callPlayer: () => yr,
    getConfig: () => hr,
    getSDK: () => fr,
    isBlobUrl: () => mr,
    isMediaStream: () => xr,
    lazy: () => ar,
    omit: () => gr,
    parseEndTime: () => dr,
    parseStartTime: () => cr,
    queryString: () => ur,
    randomString: () => pr,
    supportsWebKitPresentationMode: () => _r
  });
  let tr, rr, nr;
  ye = er(nt);
  tr = Ae(H);
  rr = Ae(Ut);
  nr = Ae(qe);
  const ar = (e) => tr.default.lazy(async () => {
    const t = await e();
    return typeof t.default == "function" ? t : t.default;
  }), or = /[?&#](?:start|t)=([0-9hms]+)/, sr = /[?&#]end=([0-9hms]+)/, ve = /(\d+)(h|m|s)/g, ir = /^\d+$/;
  function at(e, t) {
    if (e instanceof Array) return;
    const a = e.match(t);
    if (a) {
      const r = a[1];
      if (r.match(ve)) return lr(r);
      if (ir.test(r)) return parseInt(r);
    }
  }
  function lr(e) {
    let t = 0, a = ve.exec(e);
    for (; a !== null; ) {
      const [, r, n] = a;
      n === "h" && (t += parseInt(r, 10) * 60 * 60), n === "m" && (t += parseInt(r, 10) * 60), n === "s" && (t += parseInt(r, 10)), a = ve.exec(e);
    }
    return t;
  }
  function cr(e) {
    return at(e, or);
  }
  function dr(e) {
    return at(e, sr);
  }
  function pr() {
    return Math.random().toString(36).substr(2, 5);
  }
  function ur(e) {
    return Object.keys(e).map((t) => `${t}=${e[t]}`).join("&");
  }
  function be(e) {
    return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
  }
  const Q = {}, fr = function(t, a, r = null, n = () => true, s = rr.default) {
    const i = be(a);
    return i && n(i) ? Promise.resolve(i) : new Promise((u, l) => {
      if (Q[t]) {
        Q[t].push({
          resolve: u,
          reject: l
        });
        return;
      }
      Q[t] = [
        {
          resolve: u,
          reject: l
        }
      ];
      const f = (d) => {
        Q[t].forEach((y) => y.resolve(d));
      };
      if (r) {
        const d = window[r];
        window[r] = function() {
          d && d(), f(be(a));
        };
      }
      s(t, (d) => {
        d ? (Q[t].forEach((y) => y.reject(d)), Q[t] = null) : r || f(be(a));
      });
    });
  };
  function hr(e, t) {
    return (0, nr.default)(t.config, e.config);
  }
  function gr(e, ...t) {
    const a = [].concat(...t), r = {}, n = Object.keys(e);
    for (const s of n) a.indexOf(s) === -1 && (r[s] = e[s]);
    return r;
  }
  function yr(e, ...t) {
    if (!this.player || !this.player[e]) {
      let a = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;
      return this.player ? this.player[e] || (a += "The method was not available") : a += "The player was not available", console.warn(a, "font-weight: bold", ""), null;
    }
    return this.player[e](...t);
  }
  function xr(e) {
    return typeof window < "u" && typeof window.MediaStream < "u" && e instanceof window.MediaStream;
  }
  function mr(e) {
    return /^blob:/.test(e);
  }
  function _r(e = document.createElement("video")) {
    const t = /iPhone|iPod/.test(navigator.userAgent) === false;
    return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t;
  }
  var Ie = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, br = Object.getOwnPropertyNames, Tr = Object.prototype.hasOwnProperty, Pr = (e, t) => {
    for (var a in t) Ie(e, a, {
      get: t[a],
      enumerable: true
    });
  }, vr = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of br(t)) !Tr.call(e, n) && n !== a && Ie(e, n, {
      get: () => t[n],
      enumerable: !(r = wr(t, n)) || r.enumerable
    });
    return e;
  }, Sr = (e) => vr(Ie({}, "__esModule", {
    value: true
  }), e), ot = {};
  Pr(ot, {
    AUDIO_EXTENSIONS: () => ke,
    DASH_EXTENSIONS: () => _t,
    FLV_EXTENSIONS: () => wt,
    HLS_EXTENSIONS: () => De,
    MATCH_URL_DAILYMOTION: () => gt,
    MATCH_URL_FACEBOOK: () => ct,
    MATCH_URL_FACEBOOK_WATCH: () => dt,
    MATCH_URL_KALTURA: () => mt,
    MATCH_URL_MIXCLOUD: () => yt,
    MATCH_URL_MUX: () => lt,
    MATCH_URL_SOUNDCLOUD: () => st,
    MATCH_URL_STREAMABLE: () => pt,
    MATCH_URL_TWITCH_CHANNEL: () => ht,
    MATCH_URL_TWITCH_VIDEO: () => ft,
    MATCH_URL_VIDYARD: () => xt,
    MATCH_URL_VIMEO: () => it,
    MATCH_URL_WISTIA: () => ut,
    MATCH_URL_YOUTUBE: () => Se,
    VIDEO_EXTENSIONS: () => Re,
    canPlay: () => jr
  });
  let Ve;
  Or = Sr(ot);
  Ve = ye;
  const Se = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//, st = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/, it = /vimeo\.com\/(?!progressive_redirect).+/, lt = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/, ct = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/, dt = /^https?:\/\/fb\.watch\/.+$/, pt = /streamable\.com\/([a-z0-9]+)$/, ut = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/, ft = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/, ht = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/, gt = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/, yt = /mixcloud\.com\/([^/]+\/[^/]+)/, xt = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/, mt = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/, ke = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, Re = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, De = /\.(m3u8)($|\?)/i, _t = /\.(mpd)($|\?)/i, wt = /\.(flv)($|\?)/i, Oe = (e) => {
    if (e instanceof Array) {
      for (const t of e) if (typeof t == "string" && Oe(t) || Oe(t.src)) return true;
      return false;
    }
    return (0, Ve.isMediaStream)(e) || (0, Ve.isBlobUrl)(e) ? true : ke.test(e) || Re.test(e) || De.test(e) || _t.test(e) || wt.test(e);
  }, jr = {
    youtube: (e) => e instanceof Array ? e.every((t) => Se.test(t)) : Se.test(e),
    soundcloud: (e) => st.test(e) && !ke.test(e),
    vimeo: (e) => it.test(e) && !Re.test(e) && !De.test(e),
    mux: (e) => lt.test(e),
    facebook: (e) => ct.test(e) || dt.test(e),
    streamable: (e) => pt.test(e),
    wistia: (e) => ut.test(e),
    twitch: (e) => ft.test(e) || ht.test(e),
    dailymotion: (e) => gt.test(e),
    mixcloud: (e) => yt.test(e),
    vidyard: (e) => xt.test(e),
    kaltura: (e) => mt.test(e),
    file: Oe
  };
  var $e = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, Nr = Object.getOwnPropertyNames, Cr = Object.prototype.hasOwnProperty, Ar = (e, t) => {
    for (var a in t) $e(e, a, {
      get: t[a],
      enumerable: true
    });
  }, Ir = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of Nr(t)) !Cr.call(e, n) && n !== a && $e(e, n, {
      get: () => t[n],
      enumerable: !(r = Er(t, n)) || r.enumerable
    });
    return e;
  }, kr = (e) => Ir($e({}, "__esModule", {
    value: true
  }), e), bt = {};
  Ar(bt, {
    default: () => Dr
  });
  var Rr = kr(bt), L = ye, R = Or, Dr = [
    {
      key: "youtube",
      name: "YouTube",
      canPlay: R.canPlay.youtube,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./YouTube-DPdy6agA.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.Y), __vite__mapDeps([0,1,2])))
    },
    {
      key: "soundcloud",
      name: "SoundCloud",
      canPlay: R.canPlay.soundcloud,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./SoundCloud-BSTyXIdL.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.S), __vite__mapDeps([3,1,2])))
    },
    {
      key: "vimeo",
      name: "Vimeo",
      canPlay: R.canPlay.vimeo,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Vimeo--pUA2Ed5.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.V), __vite__mapDeps([4,1,2])))
    },
    {
      key: "mux",
      name: "Mux",
      canPlay: R.canPlay.mux,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Mux-B6t6KVNd.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.M), __vite__mapDeps([5,1,2])))
    },
    {
      key: "facebook",
      name: "Facebook",
      canPlay: R.canPlay.facebook,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Facebook-DJzak2PQ.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.F), __vite__mapDeps([6,1,2])))
    },
    {
      key: "streamable",
      name: "Streamable",
      canPlay: R.canPlay.streamable,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Streamable-0Kntt7Bv.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.S), __vite__mapDeps([7,1,2])))
    },
    {
      key: "wistia",
      name: "Wistia",
      canPlay: R.canPlay.wistia,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Wistia-BxBhQzO0.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.W), __vite__mapDeps([8,1,2])))
    },
    {
      key: "twitch",
      name: "Twitch",
      canPlay: R.canPlay.twitch,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Twitch-CstNS4Vc.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.T), __vite__mapDeps([9,1,2])))
    },
    {
      key: "dailymotion",
      name: "DailyMotion",
      canPlay: R.canPlay.dailymotion,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./DailyMotion-CzJCjKU-.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.D), __vite__mapDeps([10,1,2])))
    },
    {
      key: "mixcloud",
      name: "Mixcloud",
      canPlay: R.canPlay.mixcloud,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Mixcloud-ClP3qFwo.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.M), __vite__mapDeps([11,1,2])))
    },
    {
      key: "vidyard",
      name: "Vidyard",
      canPlay: R.canPlay.vidyard,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Vidyard-BUt171s5.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.V), __vite__mapDeps([12,1,2])))
    },
    {
      key: "kaltura",
      name: "Kaltura",
      canPlay: R.canPlay.kaltura,
      lazyPlayer: (0, L.lazy)(() => F(() => import("./Kaltura-BR96Ju9O.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.K), __vite__mapDeps([13,1,2])))
    },
    {
      key: "file",
      name: "FilePlayer",
      canPlay: R.canPlay.file,
      canEnablePIP: (e) => R.canPlay.file(e) && (document.pictureInPictureEnabled || (0, L.supportsWebKitPresentationMode)()) && !R.AUDIO_EXTENSIONS.test(e),
      lazyPlayer: (0, L.lazy)(() => F(() => import("./FilePlayer-CLdtF9ca.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e) => e.F), __vite__mapDeps([14,1,2])))
    }
  ], $r = Object.create, xe = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Lr = Object.getOwnPropertyNames, Fr = Object.getPrototypeOf, Ur = Object.prototype.hasOwnProperty, Vr = (e, t) => {
    for (var a in t) xe(e, a, {
      get: t[a],
      enumerable: true
    });
  }, Tt = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of Lr(t)) !Ur.call(e, n) && n !== a && xe(e, n, {
      get: () => t[n],
      enumerable: !(r = Mr(t, n)) || r.enumerable
    });
    return e;
  }, zr = (e, t, a) => (a = e != null ? $r(Fr(e)) : {}, Tt(!e || !e.__esModule ? xe(a, "default", {
    value: e,
    enumerable: true
  }) : a, e)), Hr = (e) => Tt(xe({}, "__esModule", {
    value: true
  }), e), Pt = {};
  Vr(Pt, {
    defaultProps: () => Kr,
    propTypes: () => Wr
  });
  var vt = Hr(Pt), Br = zr(Vt);
  const { string: N, bool: D, number: Z, array: Te, oneOfType: ne, shape: V, object: I, func: S, node: ze } = Br.default, Wr = {
    url: ne([
      N,
      Te,
      I
    ]),
    playing: D,
    loop: D,
    controls: D,
    volume: Z,
    muted: D,
    playbackRate: Z,
    width: ne([
      N,
      Z
    ]),
    height: ne([
      N,
      Z
    ]),
    style: I,
    progressInterval: Z,
    playsinline: D,
    pip: D,
    stopOnUnmount: D,
    light: ne([
      D,
      N,
      I
    ]),
    playIcon: ze,
    previewTabIndex: Z,
    previewAriaLabel: N,
    fallback: ze,
    oEmbedUrl: N,
    wrapper: ne([
      N,
      S,
      V({
        render: S.isRequired
      })
    ]),
    config: V({
      soundcloud: V({
        options: I
      }),
      youtube: V({
        playerVars: I,
        embedOptions: I,
        onUnstarted: S
      }),
      facebook: V({
        appId: N,
        version: N,
        playerId: N,
        attributes: I
      }),
      dailymotion: V({
        params: I
      }),
      vimeo: V({
        playerOptions: I,
        title: N
      }),
      mux: V({
        attributes: I,
        version: N
      }),
      file: V({
        attributes: I,
        tracks: Te,
        forceVideo: D,
        forceAudio: D,
        forceHLS: D,
        forceSafariHLS: D,
        forceDisableHls: D,
        forceDASH: D,
        forceFLV: D,
        hlsOptions: I,
        hlsVersion: N,
        dashVersion: N,
        flvVersion: N
      }),
      wistia: V({
        options: I,
        playerId: N,
        customControls: Te
      }),
      mixcloud: V({
        options: I
      }),
      twitch: V({
        options: I,
        playerId: N
      }),
      vidyard: V({
        options: I
      })
    }),
    onReady: S,
    onStart: S,
    onPlay: S,
    onPause: S,
    onBuffer: S,
    onBufferEnd: S,
    onEnded: S,
    onError: S,
    onDuration: S,
    onSeek: S,
    onPlaybackRateChange: S,
    onPlaybackQualityChange: S,
    onProgress: S,
    onClickPreview: S,
    onEnablePIP: S,
    onDisablePIP: S
  }, C = () => {
  }, Kr = {
    playing: false,
    loop: false,
    controls: false,
    volume: null,
    muted: false,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: false,
    pip: false,
    stopOnUnmount: true,
    light: false,
    fallback: null,
    wrapper: "div",
    previewTabIndex: 0,
    previewAriaLabel: "",
    oEmbedUrl: "https://noembed.com/embed?url={url}",
    config: {
      soundcloud: {
        options: {
          visual: true,
          buying: false,
          liking: false,
          download: false,
          sharing: false,
          show_comments: false,
          show_playcount: false
        }
      },
      youtube: {
        playerVars: {
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1
        },
        embedOptions: {},
        onUnstarted: C
      },
      facebook: {
        appId: "1309697205772819",
        version: "v3.3",
        playerId: null,
        attributes: {}
      },
      dailymotion: {
        params: {
          api: 1,
          "endscreen-enable": false
        }
      },
      vimeo: {
        playerOptions: {
          autopause: false,
          byline: false,
          portrait: false,
          title: false
        },
        title: null
      },
      mux: {
        attributes: {},
        version: "2"
      },
      file: {
        attributes: {},
        tracks: [],
        forceVideo: false,
        forceAudio: false,
        forceHLS: false,
        forceDASH: false,
        forceFLV: false,
        hlsOptions: {},
        hlsVersion: "1.1.4",
        dashVersion: "3.1.3",
        flvVersion: "1.5.0",
        forceDisableHls: false
      },
      wistia: {
        options: {},
        playerId: null,
        customControls: null
      },
      mixcloud: {
        options: {
          hide_cover: 1
        }
      },
      twitch: {
        options: {},
        playerId: null
      },
      vidyard: {
        options: {}
      }
    },
    onReady: C,
    onStart: C,
    onPlay: C,
    onPause: C,
    onBuffer: C,
    onBufferEnd: C,
    onEnded: C,
    onError: C,
    onDuration: C,
    onSeek: C,
    onPlaybackRateChange: C,
    onPlaybackQualityChange: C,
    onProgress: C,
    onClickPreview: C,
    onEnablePIP: C,
    onDisablePIP: C
  };
  var Gr = Object.create, ce = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyNames, Yr = Object.getPrototypeOf, qr = Object.prototype.hasOwnProperty, Qr = (e, t, a) => t in e ? ce(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: a
  }) : e[t] = a, Zr = (e, t) => {
    for (var a in t) ce(e, a, {
      get: t[a],
      enumerable: true
    });
  }, St = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of Xr(t)) !qr.call(e, n) && n !== a && ce(e, n, {
      get: () => t[n],
      enumerable: !(r = Jr(t, n)) || r.enumerable
    });
    return e;
  }, Ot = (e, t, a) => (a = e != null ? Gr(Yr(e)) : {}, St(!e || !e.__esModule ? ce(a, "default", {
    value: e,
    enumerable: true
  }) : a, e)), en = (e) => St(ce({}, "__esModule", {
    value: true
  }), e), T = (e, t, a) => (Qr(e, typeof t != "symbol" ? t + "" : t, a), a), jt = {};
  Zr(jt, {
    default: () => me
  });
  var tn = en(jt), He = Ot(H), rn = Ot(Qe), Et = vt, nn = ye;
  const an = 5e3;
  class me extends He.Component {
    constructor() {
      super(...arguments), T(this, "mounted", false), T(this, "isReady", false), T(this, "isPlaying", false), T(this, "isLoading", true), T(this, "loadOnReady", null), T(this, "startOnPlay", true), T(this, "seekOnPlay", null), T(this, "onDurationCalled", false), T(this, "handlePlayerMount", (t) => {
        if (this.player) {
          this.progress();
          return;
        }
        this.player = t, this.player.load(this.props.url), this.progress();
      }), T(this, "getInternalPlayer", (t) => this.player ? this.player[t] : null), T(this, "progress", () => {
        if (this.props.url && this.player && this.isReady) {
          const t = this.getCurrentTime() || 0, a = this.getSecondsLoaded(), r = this.getDuration();
          if (r) {
            const n = {
              playedSeconds: t,
              played: t / r
            };
            a !== null && (n.loadedSeconds = a, n.loaded = a / r), (n.playedSeconds !== this.prevPlayed || n.loadedSeconds !== this.prevLoaded) && this.props.onProgress(n), this.prevPlayed = n.playedSeconds, this.prevLoaded = n.loadedSeconds;
          }
        }
        this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
      }), T(this, "handleReady", () => {
        if (!this.mounted) return;
        this.isReady = true, this.isLoading = false;
        const { onReady: t, playing: a, volume: r, muted: n } = this.props;
        t(), !n && r !== null && this.player.setVolume(r), this.loadOnReady ? (this.player.load(this.loadOnReady, true), this.loadOnReady = null) : a && this.player.play(), this.handleDurationCheck();
      }), T(this, "handlePlay", () => {
        this.isPlaying = true, this.isLoading = false;
        const { onStart: t, onPlay: a, playbackRate: r } = this.props;
        this.startOnPlay && (this.player.setPlaybackRate && r !== 1 && this.player.setPlaybackRate(r), t(), this.startOnPlay = false), a(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck();
      }), T(this, "handlePause", (t) => {
        this.isPlaying = false, this.isLoading || this.props.onPause(t);
      }), T(this, "handleEnded", () => {
        const { activePlayer: t, loop: a, onEnded: r } = this.props;
        t.loopOnEnded && a && this.seekTo(0), a || (this.isPlaying = false, r());
      }), T(this, "handleError", (...t) => {
        this.isLoading = false, this.props.onError(...t);
      }), T(this, "handleDurationCheck", () => {
        clearTimeout(this.durationCheckTimeout);
        const t = this.getDuration();
        t ? this.onDurationCalled || (this.props.onDuration(t), this.onDurationCalled = true) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
      }), T(this, "handleLoaded", () => {
        this.isLoading = false;
      });
    }
    componentDidMount() {
      this.mounted = true;
    }
    componentWillUnmount() {
      clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = false;
    }
    componentDidUpdate(t) {
      if (!this.player) return;
      const { url: a, playing: r, volume: n, muted: s, playbackRate: i, pip: u, loop: l, activePlayer: f, disableDeferredLoading: d } = this.props;
      if (!(0, rn.default)(t.url, a)) {
        if (this.isLoading && !f.forceLoad && !d && !(0, nn.isMediaStream)(a)) {
          console.warn(`ReactPlayer: the attempt to load ${a} is being deferred until the player has loaded`), this.loadOnReady = a;
          return;
        }
        this.isLoading = true, this.startOnPlay = true, this.onDurationCalled = false, this.player.load(a, this.isReady);
      }
      !t.playing && r && !this.isPlaying && this.player.play(), t.playing && !r && this.isPlaying && this.player.pause(), !t.pip && u && this.player.enablePIP && this.player.enablePIP(), t.pip && !u && this.player.disablePIP && this.player.disablePIP(), t.volume !== n && n !== null && this.player.setVolume(n), t.muted !== s && (s ? this.player.mute() : (this.player.unmute(), n !== null && setTimeout(() => this.player.setVolume(n)))), t.playbackRate !== i && this.player.setPlaybackRate && this.player.setPlaybackRate(i), t.loop !== l && this.player.setLoop && this.player.setLoop(l);
    }
    getDuration() {
      return this.isReady ? this.player.getDuration() : null;
    }
    getCurrentTime() {
      return this.isReady ? this.player.getCurrentTime() : null;
    }
    getSecondsLoaded() {
      return this.isReady ? this.player.getSecondsLoaded() : null;
    }
    seekTo(t, a, r) {
      if (!this.isReady) {
        t !== 0 && (this.seekOnPlay = t, setTimeout(() => {
          this.seekOnPlay = null;
        }, an));
        return;
      }
      if (a ? a === "fraction" : t > 0 && t < 1) {
        const s = this.player.getDuration();
        if (!s) {
          console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");
          return;
        }
        this.player.seekTo(s * t, r);
        return;
      }
      this.player.seekTo(t, r);
    }
    render() {
      const t = this.props.activePlayer;
      return t ? He.default.createElement(t, {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }) : null;
    }
  }
  T(me, "displayName", "Player");
  T(me, "propTypes", Et.propTypes);
  T(me, "defaultProps", Et.defaultProps);
  var on = Object.create, de = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, ln = Object.getOwnPropertyNames, cn = Object.getPrototypeOf, dn = Object.prototype.hasOwnProperty, pn = (e, t, a) => t in e ? de(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: a
  }) : e[t] = a, un = (e, t) => {
    for (var a in t) de(e, a, {
      get: t[a],
      enumerable: true
    });
  }, Nt = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of ln(t)) !dn.call(e, n) && n !== a && de(e, n, {
      get: () => t[n],
      enumerable: !(r = sn(t, n)) || r.enumerable
    });
    return e;
  }, pe = (e, t, a) => (a = e != null ? on(cn(e)) : {}, Nt(!e || !e.__esModule ? de(a, "default", {
    value: e,
    enumerable: true
  }) : a, e)), fn = (e) => Nt(de({}, "__esModule", {
    value: true
  }), e), b = (e, t, a) => (pn(e, typeof t != "symbol" ? t + "" : t, a), a), Ct = {};
  un(Ct, {
    createReactPlayer: () => Tn
  });
  var hn = fn(Ct), ee = pe(H), gn = pe(qe), Pe = pe(zt), Be = pe(Qe), oe = vt, At = ye, yn = pe(tn);
  const xn = (0, At.lazy)(() => F(() => import("./Preview-BhNucGaT.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((e) => e.P), __vite__mapDeps([15,1,2]))), mn = typeof window < "u" && window.document && typeof document < "u", _n = typeof globalThis < "u" && globalThis.window && globalThis.window.document, wn = Object.keys(oe.propTypes), bn = mn || _n ? ee.Suspense : () => null, ae = [], Tn = (e, t) => {
    var a;
    return a = class extends ee.Component {
      constructor() {
        super(...arguments), b(this, "state", {
          showPreview: !!this.props.light
        }), b(this, "references", {
          wrapper: (r) => {
            this.wrapper = r;
          },
          player: (r) => {
            this.player = r;
          }
        }), b(this, "handleClickPreview", (r) => {
          this.setState({
            showPreview: false
          }), this.props.onClickPreview(r);
        }), b(this, "showPreview", () => {
          this.setState({
            showPreview: true
          });
        }), b(this, "getDuration", () => this.player ? this.player.getDuration() : null), b(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), b(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), b(this, "getInternalPlayer", (r = "player") => this.player ? this.player.getInternalPlayer(r) : null), b(this, "seekTo", (r, n, s) => {
          if (!this.player) return null;
          this.player.seekTo(r, n, s);
        }), b(this, "handleReady", () => {
          this.props.onReady(this);
        }), b(this, "getActivePlayer", (0, Pe.default)((r) => {
          for (const n of [
            ...ae,
            ...e
          ]) if (n.canPlay(r)) return n;
          return t || null;
        })), b(this, "getConfig", (0, Pe.default)((r, n) => {
          const { config: s } = this.props;
          return gn.default.all([
            oe.defaultProps.config,
            oe.defaultProps.config[n] || {},
            s,
            s[n] || {}
          ]);
        })), b(this, "getAttributes", (0, Pe.default)((r) => (0, At.omit)(this.props, wn))), b(this, "renderActivePlayer", (r) => {
          if (!r) return null;
          const n = this.getActivePlayer(r);
          if (!n) return null;
          const s = this.getConfig(r, n.key);
          return ee.default.createElement(yn.default, {
            ...this.props,
            key: n.key,
            ref: this.references.player,
            config: s,
            activePlayer: n.lazyPlayer || n,
            onReady: this.handleReady
          });
        });
      }
      shouldComponentUpdate(r, n) {
        return !(0, Be.default)(this.props, r) || !(0, Be.default)(this.state, n);
      }
      componentDidUpdate(r) {
        const { light: n } = this.props;
        !r.light && n && this.setState({
          showPreview: true
        }), r.light && !n && this.setState({
          showPreview: false
        });
      }
      renderPreview(r) {
        if (!r) return null;
        const { light: n, playIcon: s, previewTabIndex: i, oEmbedUrl: u, previewAriaLabel: l } = this.props;
        return ee.default.createElement(xn, {
          url: r,
          light: n,
          playIcon: s,
          previewTabIndex: i,
          previewAriaLabel: l,
          oEmbedUrl: u,
          onClick: this.handleClickPreview
        });
      }
      render() {
        const { url: r, style: n, width: s, height: i, fallback: u, wrapper: l } = this.props, { showPreview: f } = this.state, d = this.getAttributes(r), y = typeof l == "string" ? this.references.wrapper : void 0;
        return ee.default.createElement(l, {
          ref: y,
          style: {
            ...n,
            width: s,
            height: i
          },
          ...d
        }, ee.default.createElement(bn, {
          fallback: u
        }, f ? this.renderPreview(r) : this.renderActivePlayer(r)));
      }
    }, b(a, "displayName", "ReactPlayer"), b(a, "propTypes", oe.propTypes), b(a, "defaultProps", oe.defaultProps), b(a, "addCustomPlayer", (r) => {
      ae.push(r);
    }), b(a, "removeCustomPlayers", () => {
      ae.length = 0;
    }), b(a, "canPlay", (r) => {
      for (const n of [
        ...ae,
        ...e
      ]) if (n.canPlay(r)) return true;
      return false;
    }), b(a, "canEnablePIP", (r) => {
      for (const n of [
        ...ae,
        ...e
      ]) if (n.canEnablePIP && n.canEnablePIP(r)) return true;
      return false;
    }), a;
  };
  var Pn = Object.create, _e = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, Sn = Object.getOwnPropertyNames, On = Object.getPrototypeOf, jn = Object.prototype.hasOwnProperty, En = (e, t) => {
    for (var a in t) _e(e, a, {
      get: t[a],
      enumerable: true
    });
  }, It = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let n of Sn(t)) !jn.call(e, n) && n !== a && _e(e, n, {
      get: () => t[n],
      enumerable: !(r = vn(t, n)) || r.enumerable
    });
    return e;
  }, Nn = (e, t, a) => (a = e != null ? Pn(On(e)) : {}, It(!e || !e.__esModule ? _e(a, "default", {
    value: e,
    enumerable: true
  }) : a, e)), Cn = (e) => It(_e({}, "__esModule", {
    value: true
  }), e), kt = {};
  En(kt, {
    default: () => Rn
  });
  var An = Cn(kt), je = Nn(Rr), In = hn;
  const kn = je.default[je.default.length - 1];
  var Rn = (0, In.createReactPlayer)(je.default, kn);
  const Rt = Ht(An);
  function Dt({ NFTObject: e, setControlAt: t, setTokenId: a }) {
    const { account: r, provider: n, chainId: s } = G(), [i, u] = p.useState(null), [l, f] = p.useState(true), [d, y] = p.useState(false), h = s === W.mainnetCoreContractChain;
    return p.useEffect(() => {
      if (n && r) {
        let g = n.getSigner(r);
        const x = new O(j.NFTRewards, E.NFTRewards, g);
        u(x);
      }
    }, [
      r,
      n
    ]), p.useEffect(() => {
      e && f(false);
    }, [
      r,
      e
    ]), o.jsx($, {
      children: o.jsxs(Fn, {
        theme: r && n && r == e.owner ? "#e20880" : r && n && e.owner != 14367003520353756e32 ? "#eee" : "#fff",
        children: [
          o.jsx(Un, {
            children: o.jsxs(Vn, {
              children: [
                l && o.jsx(ue, {
                  color: "#eee",
                  width: "100%",
                  height: "100%"
                }),
                !l && o.jsx(Rt, {
                  url: `https://ipfs.io/ipfs/${e.metadata}`,
                  controls: true,
                  playing: false,
                  loop: true
                }),
                !!r && !!n && e.owner != 14367003520353756e32 && o.jsxs(Dn, {
                  children: [
                    o.jsx(tt, {
                      size: 20,
                      color: "#fff"
                    }),
                    o.jsx($n, {
                      children: "Gifted"
                    })
                  ]
                }),
                !!r && !!n && e.claimable && o.jsx(Mn, {
                  children: o.jsx(Ln, {
                    children: "2400 $PUSH"
                  })
                })
              ]
            })
          }),
          !!r && !!n && o.jsx(ie, {
            children: o.jsxs(zn, {
              children: [
                l && o.jsx(Wn, {
                  children: o.jsx(ue, {})
                }),
                !!r && !!n && h && r == e.owner && !l && o.jsx(Kn, {
                  children: o.jsx(Bn, {
                    onClick: () => {
                      a(e.id), t(2);
                    },
                    children: "Transfer"
                  })
                })
              ]
            })
          })
        ]
      })
    }, e.id);
  }
  const $t = c.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`, Dn = c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`, $n = c($t)`
  background: #35c4f3;
`, Mn = c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  left: 10px;
`, Ln = c($t)`
  background: #e20880;
`, Fn = c.div`
  background: ${(e) => e.theme || "#fff"};
  max-width: 25%;
  min-width: 200px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 2px solid #fafafa;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`, Un = c.div`
  padding-top: 100%;
  position: relative;
`, Vn = c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  c.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`;
  const zn = c.div`
  margin: 5px;
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Hn = c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${(e) => e.disabled && Y`
      background: #e20880;
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`, Bn = c.span`
  font-size: 12px;
  ${(e) => e.hideit && Y`
      visibility: hidden;
    `};
`;
  c.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  const Wn = c.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`, Kn = c(Hn)`
  background: #000;
`;
  c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;
  c.div`
  margin: 0px 10px;
`;
  const w = {
    getNFTBalance: async (e, t) => new Promise((a, r) => {
      t && t.balanceOf(e).then((n) => {
        a(n.toNumber());
      }).catch((n) => {
        console.error("!!!Error, getNFTBalance() --> %o", n), r(n);
      });
    }),
    getTotalSupply: async (e) => new Promise((t, a) => {
      e.totalSupply().then((r) => {
        t(r.toNumber());
      }).catch((r) => {
        console.error("!!!Error, getNFTBalance() --> %o", r), a(r);
      });
    }),
    getOwnerOfTokenId: async ({ tokenId: e, contract: t }) => new Promise((a, r) => {
      t.ownerOf(e).then((n) => {
        a(n);
      }).catch((n) => {
        console.error("!!!Error, getOwnerOfTokenId() --> %o", n), r(n);
      });
    }),
    getTokenOfOwnerByIndex: async (e, t, a) => new Promise((r, n) => {
      a.tokenOfOwnerByIndex(e, t).then((s) => {
        r(s.toNumber());
      }).catch((s) => {
        console.error("!!!Error, getTokenOfOwnerByIndex() --> %o", s), n(s);
      });
    }),
    getTokenByIndex: async (e, t) => new Promise((a, r) => {
      t.tokenByIndex(e).then((n) => {
        a(n.toNumber());
      }).catch((n) => {
        console.error("!!!Error, getTokenByIndex() --> %o", n), r(n);
      });
    }),
    getTokenMetadata: async ({ tokenId: e, contract: t }) => new Promise((a, r) => {
      t.tokenURI(e).then((n) => {
        a(n);
      }).catch((n) => {
        console.error("!!!Error, getTokenMetadata() --> %o", n), r(n);
      });
    }),
    getTokenMetadatasOfOwner: async (e, t, a) => new Promise((r, n) => {
      w.getNFTBalance(e, t).then(async (s) => {
        let i = [], u = [];
        for (let l = 0; l < s; l++) u.push(w.getTokenOfOwnerByIndex(e, l, t).then(async (f) => {
          await w.getClaimable({
            tokenId: f,
            contract: a
          }).then(async (d) => {
            console.debug("\u{1F680} ~ file: NFTHelper.js ~ line 102 ~ .then ~ claimable", d), await w.getTokenMetadata({
              tokenId: f,
              contract: t
            }).then(async (y) => {
              f != null && y != null && d != null && i.push({
                id: f,
                metadata: y,
                claimable: d
              });
            });
          }).catch((d) => {
            console.error("!!!Error, getClaimable() --> %o", d), n(d);
          });
        }));
        await Promise.all(u), console.debug("\u{1F680} ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails", i), r(i);
      }).catch((s) => {
        console.error("!!!Error, getTokenMetadatasOfOwner() --> %o", s), n(s);
      });
    }),
    getAllTokenDatas: async (e, t) => new Promise((a, r) => {
      w.getNFTBalance(e).then(async (n) => {
        let s = [], i = [];
        for (let u = 0; u < n; u++) i.push(w.getTokenByIndex(u, e).then(async (l) => {
          await w.getClaimable({
            tokenId: l,
            contract: t
          }).then(async (f) => {
            await w.getTokenMetadata({
              tokenId: l,
              contract: e
            }).then(async (d) => {
              await w.getOwnerOfTokenId({
                tokenId: l,
                contract: e
              }).then(async (y) => {
                l != null && d != null && f != null && y != null && s.push({
                  id: l,
                  metadata: d,
                  owner: y,
                  claimable: f
                });
              }).catch((y) => {
                console.error("!!!Error, getAllTokenDatas::getOwnerOfTokenId() --> %o", y), r(y);
              });
            }).catch((d) => {
              console.error("!!!Error, getAllTokenDatas::getTokenMetadata() --> %o", d), r(d);
            });
          }).catch((f) => {
            console.error("!!!Error, getAllTokenDatas::getClaimable() --> %o", f), r(f);
          });
        }).catch((l) => {
          console.error("!!!Error, getAllTokenDatas::getTokenByIndex() --> %o", l), r(l);
        }));
        await Promise.all(i), console.debug("\u{1F680} ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails", s), a(s);
      }).catch((n) => {
        console.error("!!!Error, getAllTokenDatas() --> %o", n), r(n);
      });
    }),
    getTokenData: async (e, t, a) => new Promise((r, n) => {
      w.getTokenMetadata({
        tokenId: e,
        contract: t
      }).then(async (s) => {
        await w.getOwnerOfTokenId({
          tokenId: e,
          contract: t
        }).then(async (i) => {
          e != null && s != null && i != null && r({
            id: e,
            metadata: s,
            owner: i
          });
        });
      }).catch((s) => {
        console.error("!!!Error, getTokenData() --> %o", s), n(s);
      });
    }),
    transferNFT: async (e, t, a, r) => new Promise((n, s) => {
      r.safeTransferFrom(e, t, a).then((i) => {
        console.debug("transferNFT() --> %o", i), n(i);
      }).catch((i) => {
        console.error("!!!Error, transferNFT() --> %o", i), s(i);
      });
    }),
    getClaimable: async ({ tokenId: e, contract: t }) => (console.debug(e, t), new Promise((a, r) => {
      t && t.getClaimRewardStatus(e).then((n) => {
        a(n);
      }).catch((n) => {
        console.error("!!!Error, getClaimable() --> %o", n), r(n);
      });
    }))
  };
  function Gn({ controlAt: e, setControlAt: t, setTokenId: a }) {
    const { account: r, chainId: n, provider: s } = G(), [i, u] = p.useState(null), [l, f] = p.useState(null), [d, y] = p.useState(null), [h, g] = p.useState([]), [x, U] = p.useState(true), k = n === W.mainnetCoreContractChain ? s : new he(W.mainnetCoreRPC);
    p.useEffect(() => {
      if (k && r) {
        const _ = new O(j.rockstar, E.rockstar, k);
        u(_);
        let m = k.getSigner(r);
        const P = new O(j.rockstar, E.rockstar, m);
        f(P);
        const v = new O(j.NFTRewards, E.NFTRewards, m);
        y(v);
      }
    }, [
      r
    ]), p.useEffect(() => {
      i && d && X();
    }, [
      r,
      i,
      l,
      d
    ]);
    const X = async () => {
      let _ = await w.getTotalSupply(i);
      U(false);
      for (let m = 0; m < _; m++) {
        let P = await w.getTokenByIndex(m, i), v = await w.getTokenData(P, i, d);
        await g((z) => [
          ...z,
          v
        ]);
      }
    };
    return o.jsxs(B, {
      align: "center",
      children: [
        x && o.jsx(le, {
          padding: "50px 20px 20px 20px",
          children: o.jsx(te, {
            type: re.SEAMLESS
          })
        }),
        !x && h.length != 0 && o.jsx(ie, {
          id: "scrollstyle-secondary",
          margin: "20px 0 0 0",
          children: Object.keys(h).map((_) => {
            if (h) return o.jsx(o.Fragment, {
              children: o.jsx(Dt, {
                NFTObject: h[_],
                nftReadProvider: i,
                nftWriteProvider: l,
                controlAt: e,
                setControlAt: t,
                setTokenId: a
              }, h[_].id)
            });
          })
        })
      ]
    });
  }
  c.div`
  padding: 20px;
`;
  function Mt({ NFTObject: e, setControlAt: t, setTokenId: a }) {
    const { account: r, provider: n, chainId: s } = G(), [i, u] = p.useState(null), [l, f] = p.useState(true), [d, y] = p.useState(false), h = s === W.mainnetCoreContractChain;
    p.useEffect(() => {
      if (n && r) {
        let x = n.getSigner(r);
        const U = new O(j.NFTRewardsV2, E.NFTRewardsV2, x);
        u(U);
      }
    }, [
      r,
      n
    ]), p.useEffect(() => {
      e && f(false);
    }, [
      r,
      e
    ]);
    let g = e.nftInfo.animation_url.replace("https://epns.mypinata.cloud/ipfs/", "https://ipfs.io/ipfs/");
    return o.jsx($, {
      children: o.jsxs(Qn, {
        theme: r && n && r == e.owner ? "#e20880" : r && n && e.owner != 1178191227273143e33 ? "#eee" : "#fff",
        children: [
          o.jsx(Zn, {
            children: o.jsxs(ea, {
              children: [
                l && o.jsx(ue, {
                  color: "#eee",
                  width: "100%",
                  height: "100%"
                }),
                !l && o.jsx(Rt, {
                  url: `${g}`,
                  controls: true,
                  playing: false,
                  loop: true
                }),
                !!r && !!n && e.owner != 1178191227273143e33 && o.jsxs(Jn, {
                  children: [
                    o.jsx(tt, {
                      size: 20,
                      color: "#fff"
                    }),
                    o.jsx(Xn, {
                      children: "Gifted"
                    })
                  ]
                }),
                !!r && !!n && e.claimable && o.jsx(Yn, {
                  children: o.jsx(qn, {
                    children: "900 $PUSH"
                  })
                })
              ]
            })
          }),
          !!r && !!n && o.jsx(ie, {
            children: o.jsxs(ta, {
              children: [
                l && o.jsx(aa, {
                  children: o.jsx(ue, {})
                }),
                !!r && !!n && h && r == e.owner && !l && o.jsx(oa, {
                  children: o.jsx(na, {
                    onClick: () => {
                      a(e.id), t(3);
                    },
                    children: "Transfer"
                  })
                })
              ]
            })
          })
        ]
      })
    }, e.id);
  }
  const Lt = c.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`, Jn = c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`, Xn = c(Lt)`
  background: #35c4f3;
`, Yn = c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  left: 10px;
`, qn = c(Lt)`
  background: #e20880;
`, Qn = c.div`
  background: ${(e) => e.theme || "#fff"};
  max-width: 25%;
  min-width: 200px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 2px solid #fafafa;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`, Zn = c.div`
  padding-top: 100%;
  position: relative;
`, ea = c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ta = c.div`
  margin: 5px;
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ra = c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${(e) => e.disabled && Y`
      background: #e20880;
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`, na = c.span`
  font-size: 12px;
  ${(e) => e.hideit && Y`
      visibility: hidden;
    `};
`;
  c.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  const aa = c.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`, oa = c(ra)`
  background: #000;
`;
  c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;
  c.div`
  margin: 0px 10px;
`;
  function sa({ controlAt: e, setControlAt: t, setTokenId: a }) {
    const { account: r, chainId: n, provider: s } = G(), [i, u] = p.useState(null), [l, f] = p.useState(null), [d, y] = p.useState(null), [h, g] = p.useState([]), [x, U] = p.useState(true), k = n === W.mainnetCoreContractChain ? s : new he(W.mainnetCoreRPC);
    p.useEffect(() => {
      if (k && r) {
        const _ = new O(j.rockstarV2, E.rockstarV2, k);
        u(_);
        let m = k.getSigner(r);
        const P = new O(j.rockstarV2, E.rockstarV2, m);
        f(P);
        const v = new O(j.NFTRewardsV2, E.NFTRewardsV2, m);
        y(v);
      }
      return () => {
        u(null), f(null), y(null);
      };
    }, [
      r
    ]), p.useEffect(() => {
      i && X();
    }, [
      r,
      i
    ]);
    const X = async () => {
      let _ = await w.getTotalSupply(i);
      U(false);
      for (let m = 0; m < _; m++) {
        let P = await w.getTokenByIndex(m, i), v = await w.getTokenData(P, i, d), z = v.metadata.replace("ipfs://", "https://ipfs.io/ipfs/"), we = await (await fetch(`${z}`)).json();
        v.nftInfo = we, await g((Ft) => [
          ...Ft,
          v
        ]);
      }
    };
    return o.jsxs(B, {
      align: "center",
      children: [
        x && o.jsx(le, {
          padding: "50px 20px 20px 20px",
          children: o.jsx(te, {
            type: re.SEAMLESS
          })
        }),
        !x && h.length != 0 && o.jsx(ie, {
          id: "scrollstyle-secondary",
          margin: "20px 0 0 0",
          children: Object.keys(h).map((_) => {
            var _a;
            if (h) return o.jsx(Mt, {
              NFTObject: h[_],
              nftReadProvider: i,
              nftWriteProvider: l,
              controlAt: e,
              setControlAt: t,
              setTokenId: a
            }, (_a = h[_]) == null ? void 0 : _a.id);
          })
        })
      ]
    });
  }
  c.div`
  padding: 20px;
`;
  function ia({ controlAt: e, setControlAt: t, setTokenId: a }) {
    const { account: r, provider: n, chainId: s } = G(), [i, u] = p.useState(null), [l, f] = p.useState(null), [d, y] = p.useState(null), [h, g] = p.useState([]), [x, U] = p.useState(true), k = s === W.mainnetCoreContractChain ? n : new he(W.mainnetCoreRPC);
    p.useEffect(() => {
      if (k && r) {
        const _ = new O(j.rockstar, E.rockstar, k);
        u(_);
        let m = k.getSigner(r);
        const P = new O(j.rockstar, E.rockstar, m);
        f(P);
        const v = new O(j.NFTRewards, E.NFTRewards, m);
        y(v);
      }
    }, [
      r
    ]), p.useEffect(() => {
      i && d && X();
    }, [
      r,
      i,
      l,
      d
    ]);
    const X = async () => {
      let _ = await w.getNFTBalance(r, i);
      U(false);
      for (let m = 0; m < _; m++) {
        let P = await w.getTokenOfOwnerByIndex(r, m, i), v = await w.getTokenData(P, i, d);
        await g((z) => [
          ...z,
          v
        ]);
      }
    };
    return o.jsxs(le, {
      margin: "32px 0 0 0",
      children: [
        x && o.jsx(We, {
          children: o.jsx(te, {
            type: re.SEAMLESS,
            spinnerSize: 40
          })
        }),
        !x && h.length == 0 && o.jsx(We, {
          children: o.jsx(Ze, {
            title: "No ROCKSTAR tokens are available in your account"
          })
        }),
        !x && h.length != 0 && o.jsx(la, {
          id: "scrollstyle-secondary",
          margin: "20px 0 0 0",
          children: Object.keys(h).map((_) => {
            if (h[_].id) return o.jsx(Dt, {
              NFTObject: h[_],
              nftReadProvider: i,
              nftWriteProvider: l,
              controlAt: e,
              setControlAt: t,
              setTokenId: a
            }, h[_].id);
          })
        })
      ]
    });
  }
  const We = c.div`
  padding: 20px;
`, la = c.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
`;
  function ca({ controlAt: e, setControlAt: t, setTokenId: a }) {
    const { account: r, provider: n, chainId: s } = G(), [i, u] = H.useState(null), [l, f] = H.useState(null), [d, y] = H.useState(null), [h, g] = H.useState([]), [x, U] = H.useState(true), k = s === W.mainnetCoreContractChain ? n : new he(W.mainnetCoreRPC);
    H.useEffect(() => {
      if (k && r) {
        const m = new O(j.rockstarV2, E.rockstarV2, k);
        u(m);
        let P = k.getSigner(r);
        const v = new O(j.rockstarV2, E.rockstarV2, P);
        f(v);
        const z = new O(j.NFTRewardsV2, E.NFTRewardsV2, P);
        y(z);
      }
    }, [
      r
    ]), H.useEffect(() => {
      i && X();
    }, [
      r,
      i
    ]);
    const X = async () => {
      let m = await w.getNFTBalance(r, i);
      U(false);
      for (let P = 0; P < m; P++) {
        let v = await w.getTokenOfOwnerByIndex(r, P, i);
        if (v < 1 || v > 100) return;
        let z = await w.getTokenData(v, i, d), Me = await _(z.metadata);
        z.nftInfo = Me, g((we) => [
          ...we,
          z
        ]);
      }
    }, _ = async (m) => {
      let P = m.replace("ipfs://", "https://ipfs.io/ipfs/");
      return await (await fetch(`${P}`)).json();
    };
    return o.jsxs(le, {
      margin: "32px 0 0 0",
      children: [
        x && o.jsx(Ke, {
          children: o.jsx(te, {
            type: re.SEAMLESS,
            spinnerSize: 40
          })
        }),
        !x && h.length == 0 && o.jsx(Ke, {
          children: o.jsx(Ze, {
            title: "No ROCKSTAR NFTs are available in your account"
          })
        }),
        !x && h.length != 0 && o.jsx(ie, {
          margin: "20px 0 0 0",
          children: Object.keys(h).map((m) => {
            if (h) return o.jsx(Mt, {
              NFTObject: h[m],
              nftReadProvider: i,
              nftWriteProvider: l,
              controlAt: e,
              setControlAt: t,
              setTokenId: a
            }, h[m].id);
          })
        })
      ]
    });
  }
  const Ke = c.div`
  padding: 20px;
`;
  function da({ tokenId: e }) {
    const { account: t, provider: a } = G(), [r, n] = p.useState(null), [s, i] = p.useState(""), [u, l] = p.useState(0), [f, d] = p.useState("");
    p.useEffect(() => {
      if (a && t) {
        let g = a.getSigner(t);
        const x = new O(j.rockstar, E.rockstar, g);
        n(x);
      }
    }, [
      t
    ]);
    const y = async (g) => {
      if (r) {
        if (console.info("\u{1F680} ~ file: TransferNFT.js ~ line 64 ~ handleTransferNFT ~ nftWriteProvider", r), g.preventDefault(), h(s)) return l(3), d("Recipient address field is empty! Please retry!"), false;
        l(1), d("Transferring NFT...");
        let U = a.getSigner(t);
        new O(j.rockstar, E.rockstar, U);
        var x = r["safeTransferFrom(address,address,uint256)"](t, s, e);
        const K = await x;
        console.debug(K), console.info("waiting for tx to finish"), d("Waiting for Transfer tx to finish..."), await a.waitForTransaction(K.hash), d("Transfer successfull! "), l(3);
      }
    }, h = (g) => g.trim().length == 0;
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx(B, {
          children: o.jsx(J, {
            padding: "10px 20px 20px",
            children: o.jsxs($, {
              align: "flex-start",
              children: [
                o.jsx(se, {
                  textTransform: "uppercase",
                  spacing: "normal",
                  children: o.jsx(A, {
                    weight: "200",
                    children: "Transfer Your NFT!"
                  })
                }),
                o.jsx(se, {
                  textTransform: "uppercase",
                  spacing: "normal",
                  children: o.jsxs(A, {
                    bg: "#674c9f",
                    color: "#fff",
                    weight: "600",
                    padding: "0px 8px",
                    children: [
                      "Token #",
                      e
                    ]
                  })
                })
              ]
            })
          })
        }),
        o.jsx(B, {
          children: o.jsx(J, {
            padding: "50px 0px 0px 0px",
            children: o.jsxs(et, {
              flex: "1",
              direction: "column",
              margin: "0px",
              justify: "center",
              size: "1.1rem",
              onSubmit: y,
              children: [
                o.jsxs($, {
                  margin: "-10px 20px 15px 20px",
                  flex: "1",
                  self: "stretch",
                  align: "stretch",
                  children: [
                    o.jsx(fe, {
                      required: true,
                      placeholder: "Recipient Address",
                      maxlength: "40",
                      padding: "12px",
                      borderBottom: "1px solid #000",
                      weight: "400",
                      size: "1.2em",
                      bg: "#fff",
                      value: s,
                      onChange: (g) => {
                        i(g.target.value);
                      }
                    }),
                    s.trim().length == 0 && o.jsx(A, {
                      padding: "4px 10px",
                      right: "0px",
                      top: "0px",
                      pos: "absolute",
                      color: "#fff",
                      bg: "#000",
                      size: "0.7rem",
                      z: "1",
                      children: "Recipient Address"
                    })
                  ]
                }),
                o.jsx($, {
                  margin: "15px 0px 0px 0px",
                  flex: "1",
                  self: "stretch",
                  align: "stretch",
                  children: o.jsxs(Ce, {
                    bg: "#674c9f",
                    color: "#fff",
                    flex: "1",
                    radius: "0px",
                    padding: "20px 10px",
                    disabled: u == 1,
                    children: [
                      u == 1 && o.jsx(te, {
                        type: re.SEAMLESS,
                        spinnerSize: 24,
                        spinnerColor: "#fff"
                      }),
                      u != 1 && o.jsx(fe, {
                        cursor: "hand",
                        textTransform: "uppercase",
                        color: "#fff",
                        weight: "400",
                        size: "0.8em",
                        spacing: "normal",
                        type: "submit",
                        value: "Transfer"
                      })
                    ]
                  })
                })
              ]
            })
          })
        }),
        (u == 1 || u == 3) && o.jsx(B, {
          children: o.jsx(J, {
            padding: "0px 0px 0px 0px",
            children: o.jsx($, {
              color: "#fff",
              bg: u == 1 ? "#e1087f" : "#000",
              padding: "10px 15px",
              margin: "15px 0px",
              children: o.jsx(A, {
                color: "#fff",
                textTransform: "uppercase",
                spacing: "normal",
                weight: "400",
                size: "1em",
                children: f
              })
            })
          })
        })
      ]
    });
  }
  function pa({ tokenId: e }) {
    const { account: t, provider: a } = G(), [r, n] = p.useState(null), [s, i] = p.useState(""), [u, l] = p.useState(0), [f, d] = p.useState("");
    p.useEffect(() => {
      if (a && t) {
        let g = a.getSigner(t);
        const x = new O(j.rockstarV2, E.rockstarV2, g);
        n(x);
      }
    }, [
      t
    ]);
    const y = async (g) => {
      if (r) {
        if (g.preventDefault(), h(s)) return l(3), d("Recipient address field is empty! Please retry!"), false;
        l(1), d("Transferring NFT...");
        let U = a.getSigner(t);
        new O(j.rockstarV2, E.rockstarV2, U);
        var x = r["safeTransferFrom(address,address,uint256)"](t, s, e);
        const K = await x;
        console.debug(K), console.info("waiting for tx to finish"), d("Waiting for Transfer tx to finish..."), await a.waitForTransaction(K.hash), d("Transfer successfull! "), l(3);
      }
    }, h = (g) => g.trim().length == 0;
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx(B, {
          children: o.jsx(J, {
            padding: "10px 20px 20px",
            children: o.jsxs($, {
              align: "flex-start",
              children: [
                o.jsx(se, {
                  textTransform: "uppercase",
                  spacing: "normal",
                  children: o.jsx(A, {
                    weight: "200",
                    children: "Transfer Your NFT!"
                  })
                }),
                o.jsx(se, {
                  textTransform: "uppercase",
                  spacing: "normal",
                  children: o.jsxs(A, {
                    bg: "#674c9f",
                    color: "#fff",
                    weight: "600",
                    padding: "0px 8px",
                    children: [
                      "Token #",
                      e
                    ]
                  })
                })
              ]
            })
          })
        }),
        o.jsx(B, {
          children: o.jsx(J, {
            padding: "50px 0px 0px 0px",
            children: o.jsxs(et, {
              flex: "1",
              direction: "column",
              margin: "0px",
              justify: "center",
              size: "1.1rem",
              onSubmit: y,
              children: [
                o.jsxs($, {
                  margin: "-10px 20px 15px 20px",
                  flex: "1",
                  self: "stretch",
                  align: "stretch",
                  children: [
                    o.jsx(fe, {
                      required: true,
                      placeholder: "Recipient Address",
                      maxlength: "40",
                      padding: "12px",
                      borderBottom: "1px solid #000",
                      weight: "400",
                      size: "1.2em",
                      bg: "#fff",
                      value: s,
                      onChange: (g) => {
                        i(g.target.value);
                      }
                    }),
                    s.trim().length == 0 && o.jsx(A, {
                      padding: "4px 10px",
                      right: "0px",
                      top: "0px",
                      pos: "absolute",
                      color: "#fff",
                      bg: "#000",
                      size: "0.7rem",
                      z: "1",
                      children: "Recipient Address"
                    })
                  ]
                }),
                o.jsx($, {
                  margin: "15px 0px 0px 0px",
                  flex: "1",
                  self: "stretch",
                  align: "stretch",
                  children: o.jsxs(Ce, {
                    bg: "#674c9f",
                    color: "#fff",
                    flex: "1",
                    radius: "0px",
                    padding: "20px 10px",
                    disabled: u == 1,
                    children: [
                      u == 1 && o.jsx(te, {
                        type: re.SEAMLESS,
                        spinnerSize: 24,
                        spinnerColor: "#FFF"
                      }),
                      u != 1 && o.jsx(fe, {
                        cursor: "hand",
                        textTransform: "uppercase",
                        color: "#fff",
                        weight: "400",
                        size: "0.8em",
                        spacing: "normal",
                        type: "submit",
                        value: "Transfer"
                      })
                    ]
                  })
                })
              ]
            })
          })
        }),
        (u == 1 || u == 3) && o.jsx(B, {
          children: o.jsx(J, {
            padding: "0px 0px 0px 0px",
            children: o.jsx($, {
              color: "#fff",
              bg: u == 1 ? "#e1087f" : "#000",
              padding: "10px 15px",
              margin: "15px 0px",
              children: o.jsx(A, {
                color: "#fff",
                textTransform: "uppercase",
                spacing: "normal",
                weight: "400",
                size: "1em",
                children: f
              })
            })
          })
        })
      ]
    });
  }
  function ua() {
    Bt.pageview("/rockstars");
    const { account: e } = G(), t = Wt(), [a, r] = p.useState(null), [n, s] = p.useState(1), [i, u] = p.useState(2), [l, f] = p.useState([]), d = (g) => {
      let x = [
        ...l
      ];
      x[g] = !x[g], f(x);
    };
    p.useEffect(() => {
      y(2);
    }, [
      e
    ]);
    const y = (g) => {
      u(g);
    }, h = (g) => {
      g.target.checked ? s(0) : s(1);
    };
    return o.jsx(fa, {
      children: o.jsxs(B, {
        children: [
          o.jsxs(J, {
            padding: "20px 0px",
            children: [
              o.jsxs(le, {
                alignSelf: "stretch",
                justifyContent: "flex-start",
                margin: "0 0 40px 0",
                children: [
                  o.jsx(se, {
                    children: o.jsx(A, {
                      weight: "400",
                      size: "32px",
                      color: t.color,
                      children: "Rockstar of Push (EPNS)"
                    })
                  }),
                  o.jsx(A, {
                    color: t.default.secondaryColor,
                    weight: "400",
                    size: "16px",
                    textTransform: "none",
                    textAlign: "center",
                    spacing: "normal",
                    margin: "0px 0px",
                    children: "Thank you community for all your support. Over the next year, we are excited to continue returning our gratitude!"
                  })
                ]
              }),
              o.jsx($, {
                align: "stretch",
                justify: "flex-start",
                margin: "0px 20px 0px 20px",
                children: o.jsxs($, {
                  align: "stretch",
                  margin: "0px 0px 20px 0px",
                  children: [
                    o.jsxs(Xe, {
                      children: [
                        o.jsxs(Ee, {
                          onClick: () => {
                            d(1);
                          },
                          hover: "#e20880",
                          children: [
                            o.jsx(A, {
                              color: t.color,
                              children: "Does $ROCKSTAR of Push (EPNS) Vol 2 NFTs carry something along with NFTs?"
                            }),
                            o.jsx(Le, {
                              size: 20,
                              color: "#ddd"
                            })
                          ]
                        }),
                        l[1] && o.jsx(Ne, {
                          children: o.jsxs(A, {
                            children: [
                              "Yes, Each ",
                              o.jsx(Fe, {
                                children: "$ROCKSTAR_V2"
                              }),
                              " contains ",
                              o.jsx(Fe, {
                                children: "900 $PUSH"
                              }),
                              " tokens that can be claimed instantly!!!",
                              " ",
                              o.jsx(Ye, {
                                href: "https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a",
                                target: "_blank",
                                title: "Read more about $PUSH tokeneconomics",
                                children: "Learn about $PUSH Token Economics."
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    o.jsxs(Xe, {
                      children: [
                        o.jsxs(Ee, {
                          onClick: () => {
                            d(2);
                          },
                          hover: "#e20880",
                          children: [
                            o.jsx(A, {
                              color: t.color,
                              children: "How to get $ROCKSTAR of Push (EPNS)?"
                            }),
                            o.jsx(Le, {
                              size: 20,
                              color: "#ddd"
                            })
                          ]
                        }),
                        l[2] && o.jsx(Ne, {
                          children: o.jsxs(A, {
                            children: [
                              "We\u2019ll be distributing one NFT a week (every Monday) to one community member who does something to help us push the envelope forward.",
                              " ",
                              o.jsx(Ye, {
                                href: "https://medium.com/push-protocol/announcing-volume-2-of-epns-rockstars-64f0b3246604",
                                target: "_blank",
                                title: "Read how to get $ROCKSTAR of Push (EPNS)",
                                children: "Here are some ways by which you can get one!"
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          o.jsx(J, {
            padding: "20px 0px",
            bg: "#eee",
            children: o.jsxs($, {
              align: "flex-start",
              margin: "0px 20px 0px 20px",
              children: [
                o.jsxs(ha, {
                  children: [
                    o.jsx(Ge, {
                      className: i === 2 ? "v2" : "v1",
                      onClick: () => {
                        y(2);
                      },
                      children: o.jsx(Je, {
                        children: "ROCKSTAR V2"
                      })
                    }),
                    o.jsx(Ge, {
                      className: i === 1 ? "v2" : "v1",
                      onClick: () => {
                        y(1);
                      },
                      children: o.jsx(Je, {
                        children: "ROCKSTAR V1"
                      })
                    }),
                    o.jsxs(ga, {
                      children: [
                        o.jsx("input", {
                          type: "checkbox",
                          className: "checkbox",
                          onChange: h
                        }),
                        "Show mine"
                      ]
                    })
                  ]
                }),
                n === 0 && i === 1 && o.jsx(ia, {
                  controlAt: n,
                  setControlAt: s,
                  setTokenId: r
                }),
                n === 0 && i === 2 && o.jsx(ca, {
                  controlAt: n,
                  setControlAt: s,
                  setTokenId: r
                }),
                n === 1 && i === 1 && o.jsx(Gn, {
                  controlAt: n,
                  setControlAt: s,
                  setTokenId: r
                }),
                n === 1 && i === 2 && o.jsx(sa, {
                  controlAt: n,
                  setControlAt: s,
                  setTokenId: r
                }),
                n === 2 && a && o.jsx(da, {
                  tokenId: a
                }),
                n === 3 && a && o.jsx(pa, {
                  tokenId: a
                })
              ]
            })
          })
        ]
      })
    });
  }
  const fa = c(B)`
  align-items: center;
  align-self: center;
  background: ${(e) => e.theme.default.bg};
  border-radius: ${M.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${M.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${q.MINI_MODULES.DESKTOP.RIGHT} - ${q.MINI_MODULES.DESKTOP.LEFT} -
      ${M.ADJUSTMENTS.PADDING.BIG} - ${M.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${M.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${M.ADJUSTMENTS.PADDING.BIG};

  @media ${Ue.laptop} {
    margin: ${M.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${M.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${q.MINI_MODULES.TABLET.RIGHT} - ${q.MINI_MODULES.TABLET.LEFT} -
        ${M.ADJUSTMENTS.PADDING.DEFAULT} - ${M.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${Ue.mobileM} {
    margin: ${M.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${M.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${q.MINI_MODULES.MOBILE.RIGHT} - ${q.MINI_MODULES.MOBILE.LEFT} -
        ${M.ADJUSTMENTS.PADDING.DEFAULT} - ${M.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`, ha = c.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`, ga = c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  background-color: #adb5bd;
  height: 20px;
  padding: 0px 5px;
  color: white;
  input.checkbox {
    width: 11px;
    height: 11px;
    margin-right: 5px;
    border: 1px solid transparent;
    // -webkit-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: white;
    &:checked {
      background-color: #e10780;
      border: 1px solid transparent;
    }
  }
`;
  c.div`
  padding: 20px;
`;
  c.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`;
  const ya = c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: left;
  // align-items: center;
  justify-content: flex-end;
  // justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${(e) => e.disabled && Y`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`;
  c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: left;
  // align-items: center;
  justify-content: flex-end;
  // justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  // border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${(e) => e.disabled && Y`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`;
  let Ge, Je, Ee, Ne, Xe, Ye, xa, ma;
  Ge = c(ya)`
  &.v1 {
    background-color: #adb5bd;
  }
  &.v2 {
    background-color: #35c5f3;
  }
  border-radius: 0px;
  font-size: 1rem;
  letter-spacing: normal;
`;
  Je = c.span`
  ${(e) => e.hideit && Y`
      visibility: hidden;
    `};
`;
  Ee = c(Ce)`
  align-items: stretch;
  align-self: stretch;
`;
  Ne = c($)`
  align-items: stretch;
  align-self: stretch;
`;
  Xe = c($)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${(e) => e.theme.default.border};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  & ${Ee} {
    background: ${(e) => e.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;
    & ${A} {
      font-weight: 400;
      letter-spacing: normal;
      margin-left: 10px;
      flex: 1;
    }
    &:hover {
      & ${A} {
        color: #fff;
      }
    }
  }
  & ${Ne} {
    border: 1px solid ${(e) => e.theme.default.border};
    border-top: 1px solid ${(e) => e.theme.default.border};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin: -1px;
    margin-top: 0px;
    align-items: flex-start;
    background: ${(e) => e.theme.qnaBg};
    & ${A} {
      line-height: 1.5em;
      margin: 10px;
      color: ${(e) => e.theme.default.color};
      font-size: 1.05em;
    }
  }
`;
  Ye = c(Kt)`
  color: #e20880;
  font-weight: 500;
`;
  xa = () => o.jsx(ma, {
    children: o.jsx(ua, {})
  });
  ma = c(Gt)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`;
  ba = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xa
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  ba as N,
  __tla,
  Or as p,
  ye as u
};
