import { ea as t, er as B, eQ as K, hy as q, gX as H, eJ as J, e7 as p, hz as X, hA as Y, hB as Z, hC as $, eH as ee, eb as d, gr as ne, gs as te, gQ as W, en as N, ev as T, eq as w, hD as A, es as se, gC as ie, gB as ae, fV as O, gz as F, hE as re, gh as _, ep as oe, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { S as z, __tla as __tla_1 } from "./Search-CfEOCQ4_.js";
import { u as ce, __tla as __tla_2 } from "./useGetChannelsList-CTudPoyr.js";
import { u as le, I as he, __tla as __tla_3 } from "./InfiniteScroll-D3igTPHt.js";
import { u as de, __tla as __tla_4 } from "./useGetChannelCategories-CjTKHO4P.js";
import { u as ue, __tla as __tla_5 } from "./VerifiedChannelTooltipContent-mmw9SpsD.js";
import { C as ge, __tla as __tla_6 } from "./ChannelDetailsCard-DJJUrpfw.js";
import { U as fe, b as pe, __tla as __tla_7 } from "./UnlockProfileWrapper-DJ8_s0pY.js";
import { C as me, __tla as __tla_8 } from "./ContentLayout-CMvbJl9T.js";
import { __tla as __tla_9 } from "./PushLogo-DYIqM7Nx.js";
let xn;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })()
]).then(async () => {
  const xe = (e) => {
    const { svgProps: n, ...s } = e;
    return t.jsx(B, {
      componentName: "CaretLeft",
      icon: t.jsx("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...n,
        children: t.jsx("path", {
          d: "M14.8389 17.5875L9.25137 12L14.8389 6.41248",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })
      }),
      ...s
    });
  }, ye = (e) => {
    const { svgProps: n, ...s } = e;
    return t.jsx(B, {
      componentName: "CaretRight",
      icon: t.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...n,
        children: [
          t.jsx("g", {
            "clip-path": "url(#clip0_4239_16009)",
            children: t.jsx("path", {
              d: "M9.25146 6.41254L14.8389 12L9.25146 17.5875",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          }),
          t.jsx("defs", {
            children: t.jsx("clipPath", {
              id: "clip0_4239_16009",
              children: t.jsx("rect", {
                width: "15.9553",
                height: "8.72765",
                fill: "white",
                transform: "translate(16.4089 4.02235) rotate(90)"
              })
            })
          })
        ]
      }),
      ...s
    });
  }, Ce = ({ userPushSDKInstance: e, page: n, pageSize: s, query: r, chain: i, tag: c }) => e.channel.search(r, {
    limit: s,
    page: n,
    ...i ? {
      filter: Number(i)
    } : {},
    ...c ? {
      tag: c
    } : {}
  }), be = ({ pageSize: e, query: n, chain: s, tag: r }) => {
    const { userPushSDKInstance: i } = K((o) => o.user);
    return le({
      queryKey: [
        q,
        n,
        s,
        r
      ],
      initialPageParam: 1,
      enabled: !!n,
      queryFn: ({ pageParam: o }) => Ce({
        userPushSDKInstance: i,
        pageSize: e,
        page: o,
        query: n,
        chain: s,
        tag: r
      }),
      getNextPageParam: ({}, o, a) => o[a - 1].length < e ? null : a + 1
    });
  }, je = ({ initialChain: e, initialCategory: n }) => {
    const [, s] = H(), { search: r } = J(), i = p.useMemo(() => Object.fromEntries(new URLSearchParams(r).entries()), [
      r
    ]), c = (o) => {
      const a = Object.entries({
        ...i,
        ...o
      }).reduce((l, [u, g]) => g ? {
        ...l,
        [u]: g
      } : l, {});
      s(a);
    };
    return p.useEffect(() => {
      const o = {};
      (!i.chain || !i.category) && (o.chain = i.chain || e, o.category = i.category || n), (i.chain !== e || i.search) && i.category !== n && (o.category = n), Object.keys(o).length && c(o);
    }, []), {
      filters: {
        chain: (i == null ? void 0 : i.chain) || e,
        category: (i == null ? void 0 : i.category) || "",
        search: (i == null ? void 0 : i.search) || ""
      },
      setFilter: c
    };
  };
  var Se = X, ve = function() {
    return Se.Date.now();
  }, we = ve, Le = /\s/;
  function ke(e) {
    for (var n = e.length; n-- && Le.test(e.charAt(n)); ) ;
    return n;
  }
  var Ie = ke, Pe = Ie, Ne = /^\s+/;
  function Ee(e) {
    return e && e.slice(0, Pe(e) + 1).replace(Ne, "");
  }
  var Te = Ee, Ae = Z, Oe = Y, Fe = "[object Symbol]";
  function _e(e) {
    return typeof e == "symbol" || Oe(e) && Ae(e) == Fe;
  }
  var Me = _e, Re = Te, M = $, De = Me, R = NaN, Be = /^[-+]0x[0-9a-f]+$/i, $e = /^0b[01]+$/i, We = /^0o[0-7]+$/i, ze = parseInt;
  function Qe(e) {
    if (typeof e == "number") return e;
    if (De(e)) return R;
    if (M(e)) {
      var n = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = M(n) ? n + "" : n;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = Re(e);
    var s = $e.test(e);
    return s || We.test(e) ? ze(e.slice(2), s ? 2 : 8) : Be.test(e) ? R : +e;
  }
  var Ue = Qe, Ve = $, P = we, D = Ue, Ge = "Expected a function", Ke = Math.max, qe = Math.min;
  function He(e, n, s) {
    var r, i, c, o, a, l, u = 0, g = false, y = false, b = true;
    if (typeof e != "function") throw new TypeError(Ge);
    n = D(n) || 0, Ve(s) && (g = !!s.leading, y = "maxWait" in s, c = y ? Ke(D(s.maxWait) || 0, n) : c, b = "trailing" in s ? !!s.trailing : b);
    function j(h) {
      var x = r, v = i;
      return r = i = void 0, u = h, o = e.apply(v, x), o;
    }
    function S(h) {
      return u = h, a = setTimeout(C, n), g ? j(h) : o;
    }
    function L(h) {
      var x = h - l, v = h - u, E = n - x;
      return y ? qe(E, c - v) : E;
    }
    function k(h) {
      var x = h - l, v = h - u;
      return l === void 0 || x >= n || x < 0 || y && v >= c;
    }
    function C() {
      var h = P();
      if (k(h)) return f(h);
      a = setTimeout(C, L(h));
    }
    function f(h) {
      return a = void 0, b && r ? j(h) : (r = i = void 0, o);
    }
    function V() {
      a !== void 0 && clearTimeout(a), u = 0, r = l = i = a = void 0;
    }
    function G() {
      return a === void 0 ? o : f(P());
    }
    function I() {
      var h = P(), x = k(h);
      if (r = arguments, i = this, l = h, x) {
        if (a === void 0) return S(l);
        if (y) return clearTimeout(a), a = setTimeout(C, n), j(l);
      }
      return a === void 0 && (a = setTimeout(C, n)), o;
    }
    return I.cancel = V, I.flush = G, I;
  }
  var Je = He;
  let Xe, m, Q, Ye, Ze, en, U, nn, tn, sn, an, rn;
  Xe = ee(Je);
  m = "All";
  Q = [
    "0x8AAAa9c3a06a4A9FE7C5cCe17d8B5db1E225Eadf"
  ];
  Ye = ({ filters: e, setFilter: n }) => {
    const [s, r] = p.useState(e.search), [i, c] = p.useState(true), o = p.useCallback(Xe((a) => {
      a !== "" && n({
        search: a,
        category: m
      });
    }, 800), [
      n
    ]);
    return p.useEffect(() => {
      e.search || r("");
    }, [
      e.search
    ]), p.useEffect(() => {
      !i && o(s);
    }, [
      s
    ]), p.useEffect(() => {
      c(false);
    }, []), t.jsxs(d, {
      display: "flex",
      gap: "spacing-xs",
      flexDirection: {
        initial: "row",
        ml: "column"
      },
      width: "100%",
      children: [
        t.jsx(d, {
          width: "100%",
          children: t.jsx(ne, {
            icon: t.jsx(z, {}),
            onChange: (a) => r(a.target.value),
            placeholder: "Search Web3 domain or 0x123",
            value: s
          })
        }),
        t.jsx(d, {
          width: {
            initial: "300px",
            ml: "100%"
          },
          children: t.jsx(te, {
            options: W(N.allowedNetworks),
            value: e.chain,
            onSelect: (a) => n({
              chain: a,
              category: m
            })
          })
        })
      ]
    });
  };
  Ze = 150;
  en = ({ filters: e, setFilter: n }) => {
    const s = p.useRef(null), { data: r, isLoading: i } = de(), c = i ? Array(15).fill(0) : (r == null ? void 0 : r.tags) || [];
    return t.jsxs(d, {
      display: "flex",
      alignItems: "center",
      css: w`
        flex-shrink: 0;
      `,
      gap: "spacing-xs",
      maxWidth: {
        mm: "346px",
        ml: "392px"
      },
      position: "relative",
      children: [
        t.jsx(d, {
          backgroundColor: "surface-primary",
          css: w`
          position: absolute;
        `,
          borderRadius: "radius-round",
          children: t.jsx(T, {
            iconOnly: t.jsx(xe, {}),
            circular: true,
            variant: "outline",
            size: "small",
            onClick: () => {
              var _a;
              (_a = s == null ? void 0 : s.current) == null ? void 0 : _a.scrollBy({
                left: -150,
                behavior: "smooth"
              });
            }
          })
        }),
        t.jsxs(d, {
          display: "flex",
          overflow: "hidden",
          gap: "spacing-xs",
          width: "100%",
          ref: s,
          padding: "spacing-none spacing-xxl",
          children: [
            !i && t.jsx(A, {
              isActive: e.category === m,
              onClick: () => n({
                category: m
              }),
              children: m
            }),
            c.map((o, a) => t.jsx(se, {
              isLoading: i,
              width: "200px",
              borderRadius: "radius-round",
              children: t.jsx(A, {
                isActive: o === e.category,
                onClick: () => n({
                  category: o,
                  search: "",
                  chain: N.coreContractChain.toString()
                }),
                children: o
              }, `${a}`)
            }))
          ]
        }),
        t.jsx(d, {
          backgroundColor: "surface-primary",
          css: w`
          position: absolute;
          right: 0;
        `,
          borderRadius: "radius-round",
          children: t.jsx(T, {
            iconOnly: t.jsx(ye, {}),
            circular: true,
            variant: "outline",
            size: "small",
            onClick: () => {
              var _a;
              (_a = s == null ? void 0 : s.current) == null ? void 0 : _a.scrollBy({
                left: Ze,
                behavior: "smooth"
              });
            }
          })
        })
      ]
    });
  };
  U = ({ channelDetails: e, isLoading: n, onChangeProfileModalVisibility: s, profileModalVisibility: r }) => {
    const { data: i, refetch: c, isLoading: o } = ue(void 0, {
      refetchOnWindowFocus: false,
      staleTime: 1 / 0,
      refetchInterval: 9e5
    }), a = () => {
      c();
    }, l = i == null ? void 0 : i.find((g) => g.channel === (e == null ? void 0 : e.channel)), u = JSON.parse((l == null ? void 0 : l.user_settings) || "[]") || [];
    return t.jsx(ge, {
      onChangeProfileModalVisibility: s,
      profileModalVisibility: r,
      channelDetails: e,
      isLoading: n,
      isSubscribed: !!l,
      isSubscriptionLoading: o,
      handleRefetch: a,
      subscribeButtonVariant: "outline",
      userSettings: u,
      width: {
        initial: "inherit",
        tb: "auto",
        lp: "auto",
        mm: "auto"
      }
    });
  };
  nn = ({ channelAddress: e, onChangeProfileModalVisibility: n, profileModalVisibility: s }) => {
    const { data: r, isLoading: i } = ie(e);
    return t.jsx(U, {
      channelDetails: r,
      isLoading: i,
      onChangeProfileModalVisibility: n,
      profileModalVisibility: s
    });
  };
  tn = ({ channels: e, hasMoreData: n, isLoading: s, isLoadingNextPage: r, loadMore: i, suggestedChannels: c }) => {
    const [o, a] = p.useState({
      isVisible: false,
      channel_id: null
    });
    return t.jsxs(d, {
      height: "100%",
      overflow: "auto",
      customScrollbar: true,
      padding: "spacing-none spacing-xxs",
      margin: {
        initial: "spacing-none spacing-sm",
        ml: "spacing-none spacing-xxs"
      },
      css: w`
        .channel-scroll {
          display: grid;
          gap: var(--spacing-md);
          grid-template-columns: repeat(3, minmax(0px, 1fr));

          @media${O.tablet} {
            grid-template-columns: repeat(2, minmax(0px, 1fr));
          }
          @media${O.mobileL} {
            grid-template-columns: repeat(1, minmax(0px, 1fr));
          }
        }
      `,
      children: [
        t.jsxs(he, {
          pageStart: 1,
          loadMore: i,
          hasMore: n,
          useWindow: false,
          threshold: 150,
          className: "channel-scroll",
          children: [
            c.map((l) => t.jsx(nn, {
              channelAddress: l
            }, `${l}`)),
            e.map((l, u) => t.jsx(U, {
              onChangeProfileModalVisibility: (g) => a(g),
              profileModalVisibility: o,
              channelDetails: l,
              isLoading: s
            }, `${u}`))
          ]
        }),
        r && t.jsx(d, {
          justifyContent: "center",
          display: "flex",
          padding: "spacing-sm",
          children: t.jsx(ae, {
            size: "medium",
            variant: "primary"
          })
        }),
        (o == null ? void 0 : o.isVisible) && t.jsx(d, {
          display: "flex",
          justifyContent: "center",
          width: "-webkit-fill-available",
          alignItems: "center",
          css: w`
            z-index: 99999;
          `,
          children: t.jsx(fe, {
            type: pe.MODAL,
            showConnectModal: true,
            onClose: () => a({
              isVisible: false,
              channel_id: null
            }),
            description: "Unlock your profile to proceed."
          })
        })
      ]
    });
  };
  sn = (e) => re() === "prod" && (e == null ? void 0 : e.category) && (e == null ? void 0 : e.category) != m;
  an = (e, n) => {
    if (sn(n)) {
      const s = e.map((r) => r.channel);
      return Object.keys(F).filter((r) => !s.includes(r) && !Q.includes(r) && F[r] === n.category);
    }
    return [];
  };
  rn = () => {
    var _a, _b;
    const e = W(N.allowedNetworks), { filters: n, setFilter: s } = je({
      initialChain: e[0].value,
      initialCategory: m
    }), r = (_a = e.find((f) => f.value === n.chain)) == null ? void 0 : _a.label.includes("Ethereum"), { data: i, isLoading: c, fetchNextPage: o, isFetchingNextPage: a, hasNextPage: l } = ce({
      pageSize: 21,
      order: _.ChannelListOrderType.DESCENDING,
      sort: _.ChannelListSortType.SUBSCRIBER,
      chain: r ? "" : n.chain,
      tag: n.category === m ? "" : n.category
    }), { data: u, isLoading: g, fetchNextPage: y, isFetchingNextPage: b, hasNextPage: j } = be({
      pageSize: 21,
      query: n.search,
      chain: r ? "" : n.chain,
      tag: n.category === m ? "" : n.category
    }), S = c || g ? Array(9).fill(0) : ((_b = n.search ? u == null ? void 0 : u.pages.flatMap((f) => f) : i == null ? void 0 : i.pages.flatMap((f) => f.channels)) == null ? void 0 : _b.filter((f) => !Q.includes(f.channel))) || [], L = an(S, n), k = n.search ? !b && j : !a && l, C = c || g;
    return t.jsx(d, {
      display: "flex",
      width: "-webkit-fill-available",
      overflow: "scroll",
      height: "100%",
      children: t.jsxs(d, {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: {
          initial: "spacing-md",
          ml: "spacing-lg"
        },
        children: [
          t.jsxs(d, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-sm",
            padding: {
              initial: "spacing-md spacing-md spacing-none spacing-md",
              ml: "spacing-sm spacing-sm spacing-none spacing-sm"
            },
            children: [
              t.jsx(Ye, {
                filters: n,
                setFilter: s
              }),
              t.jsx(en, {
                filters: n,
                setFilter: s
              })
            ]
          }),
          !S.length && !L.length && !C ? t.jsxs(d, {
            display: "flex",
            gap: "spacing-xs",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            children: [
              t.jsx(z, {
                size: 48,
                color: "icon-tertiary"
              }),
              t.jsx(oe, {
                variant: "h5-bold",
                children: "No channels to display"
              })
            ]
          }) : t.jsx(tn, {
            channels: S,
            hasMoreData: k,
            suggestedChannels: L,
            isLoading: C,
            isLoadingNextPage: a || b,
            loadMore: n.search ? y : o
          })
        ]
      })
    });
  };
  xn = () => t.jsx(me, {
    variant: "verticalStretch",
    children: t.jsx(rn, {})
  });
});
export {
  __tla,
  xn as default
};
