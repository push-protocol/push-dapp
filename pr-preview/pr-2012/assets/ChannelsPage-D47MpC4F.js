import { ea as t, er as G, eQ as q, hy as H, hz as J, hA as X, hB as Y, hC as U, eH as Z, e7 as f, eb as u, gr as ee, gs as ne, gW as V, en as O, ev as _, eq as L, hD as A, es as te, gK as se, gw as ae, fV as M, gx as ie, eJ as re, gI as R, hE as oe, hF as ce, e5 as le, gh as D, ep as he, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { S as z, __tla as __tla_1 } from "./Search-BXywnX_K.js";
import { u as de, __tla as __tla_2 } from "./useGetChannelsList-CedgcUW1.js";
import { u as ue, I as ge, __tla as __tla_3 } from "./InfiniteScroll-8GAnRNnZ.js";
import { u as pe, __tla as __tla_4 } from "./useGetChannelCategories-CKhGXq_b.js";
import { u as fe, __tla as __tla_5 } from "./VerifiedChannelTooltipContent-u8p6dBWZ.js";
import { C as me, __tla as __tla_6 } from "./ChannelDetailsCard-CdlQV5H3.js";
import { U as xe, b as ye, __tla as __tla_7 } from "./UnlockProfileWrapper-B5-cCTKd.js";
import { C as Ce, __tla as __tla_8 } from "./ContentLayout-jbLa4puu.js";
import { __tla as __tla_9 } from "./PushLogo-DhyMjQJb.js";
let bn;
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
  const be = (e) => {
    const { svgProps: n, ...i } = e;
    return t.jsx(G, {
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
      ...i
    });
  }, je = (e) => {
    const { svgProps: n, ...i } = e;
    return t.jsx(G, {
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
      ...i
    });
  }, Se = ({ userPushSDKInstance: e, page: n, pageSize: i, query: r, chain: s, tag: c, subscribed: o }) => e.channel.search(r, {
    limit: i,
    page: n,
    ...o ? {
      user_subscribed: o
    } : {},
    ...s ? {
      filter: Number(s)
    } : {},
    ...c ? {
      tag: c
    } : {}
  }), ve = ({ pageSize: e, query: n, chain: i, tag: r, subscribed: s }) => {
    const { userPushSDKInstance: c } = q((a) => a.user);
    return ue({
      queryKey: [
        H,
        c == null ? void 0 : c.account,
        n,
        i,
        r,
        s
      ],
      initialPageParam: 1,
      enabled: !!n,
      queryFn: ({ pageParam: a }) => Se({
        userPushSDKInstance: c,
        pageSize: e,
        page: a,
        query: n,
        chain: i,
        tag: r,
        subscribed: s
      }),
      getNextPageParam: ({}, a, l) => a[l - 1].length < e ? null : l + 1
    });
  };
  var we = J, Le = function() {
    return we.Date.now();
  }, ke = Le, Ie = /\s/;
  function Pe(e) {
    for (var n = e.length; n-- && Ie.test(e.charAt(n)); ) ;
    return n;
  }
  var Ee = Pe, Ne = Ee, Ae = /^\s+/;
  function Te(e) {
    return e && e.slice(0, Ne(e) + 1).replace(Ae, "");
  }
  var Oe = Te, Fe = Y, _e = X, Me = "[object Symbol]";
  function Re(e) {
    return typeof e == "symbol" || _e(e) && Fe(e) == Me;
  }
  var De = Re, $e = Oe, $ = U, Be = De, B = NaN, We = /^[-+]0x[0-9a-f]+$/i, Ge = /^0b[01]+$/i, Ue = /^0o[0-7]+$/i, Ve = parseInt;
  function ze(e) {
    if (typeof e == "number") return e;
    if (Be(e)) return B;
    if ($(e)) {
      var n = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = $(n) ? n + "" : n;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = $e(e);
    var i = Ge.test(e);
    return i || Ue.test(e) ? Ve(e.slice(2), i ? 2 : 8) : We.test(e) ? B : +e;
  }
  var Qe = ze, Ke = U, T = ke, W = Qe, qe = "Expected a function", He = Math.max, Je = Math.min;
  function Xe(e, n, i) {
    var r, s, c, o, a, l, g = 0, p = false, y = false, b = true;
    if (typeof e != "function") throw new TypeError(qe);
    n = W(n) || 0, Ke(i) && (p = !!i.leading, y = "maxWait" in i, c = y ? He(W(i.maxWait) || 0, n) : c, b = "trailing" in i ? !!i.trailing : b);
    function j(h) {
      var d = r, w = s;
      return r = s = void 0, g = h, o = e.apply(w, d), o;
    }
    function N(h) {
      return g = h, a = setTimeout(C, n), p ? j(h) : o;
    }
    function k(h) {
      var d = h - l, w = h - g, F = n - d;
      return y ? Je(F, c - w) : F;
    }
    function I(h) {
      var d = h - l, w = h - g;
      return l === void 0 || d >= n || d < 0 || y && w >= c;
    }
    function C() {
      var h = T();
      if (I(h)) return P(h);
      a = setTimeout(C, k(h));
    }
    function P(h) {
      return a = void 0, b && r ? j(h) : (r = s = void 0, o);
    }
    function S() {
      a !== void 0 && clearTimeout(a), g = 0, r = l = s = a = void 0;
    }
    function E() {
      return a === void 0 ? o : P(T());
    }
    function v() {
      var h = T(), d = I(h);
      if (r = arguments, s = this, l = h, d) {
        if (a === void 0) return N(l);
        if (y) return clearTimeout(a), a = setTimeout(C, n), j(l);
      }
      return a === void 0 && (a = setTimeout(C, n)), o;
    }
    return v.cancel = S, v.flush = E, v;
  }
  var Ye = Xe;
  let Ze, m, x, Q, en, nn, tn, K, sn, an, rn, on, cn, ln;
  Ze = Z(Ye);
  m = "All";
  x = "Subscribed";
  Q = [
    "0x8AAAa9c3a06a4A9FE7C5cCe17d8B5db1E225Eadf"
  ];
  en = ({ filters: e, setFilter: n }) => {
    const [i, r] = f.useState(e.search), [s, c] = f.useState(true), o = f.useCallback(Ze((a) => {
      a !== "" && n({
        search: a,
        category: e.category === x ? e.category : m
      });
    }, 800), [
      n
    ]);
    return f.useEffect(() => {
      e.search || r("");
    }, [
      e.search
    ]), f.useEffect(() => {
      !s && o(i);
    }, [
      i
    ]), f.useEffect(() => {
      c(false);
    }, []), t.jsxs(u, {
      display: "flex",
      gap: "spacing-xs",
      flexDirection: {
        initial: "row",
        ml: "column"
      },
      width: "100%",
      children: [
        t.jsx(u, {
          width: "100%",
          children: t.jsx(ee, {
            icon: t.jsx(z, {}),
            onChange: (a) => r(a.target.value),
            placeholder: "Search Web3 domain or 0x123",
            value: i
          })
        }),
        t.jsx(u, {
          width: {
            initial: "300px",
            ml: "100%"
          },
          children: t.jsx(ne, {
            options: V(O.allowedNetworks),
            value: e.chain,
            onSelect: (a) => n({
              chain: a,
              category: e.category === x ? e.category : m
            })
          })
        })
      ]
    });
  };
  nn = 150;
  tn = ({ filters: e, setFilter: n, walletAddress: i }) => {
    const r = f.useRef(null), { data: s, isLoading: c } = pe(), o = c ? Array(15).fill(0) : (s == null ? void 0 : s.tags) || [];
    return t.jsxs(u, {
      display: "flex",
      alignItems: "center",
      css: L`
        flex-shrink: 0;
      `,
      gap: "spacing-xs",
      maxWidth: {
        mm: "346px",
        ml: "392px"
      },
      position: "relative",
      children: [
        t.jsx(u, {
          backgroundColor: "surface-primary",
          css: L`
          position: absolute;
        `,
          borderRadius: "radius-round",
          children: t.jsx(_, {
            iconOnly: t.jsx(be, {}),
            circular: true,
            variant: "outline",
            size: "small",
            onClick: () => {
              var _a;
              (_a = r == null ? void 0 : r.current) == null ? void 0 : _a.scrollBy({
                left: -150,
                behavior: "smooth"
              });
            }
          })
        }),
        t.jsxs(u, {
          display: "flex",
          overflow: "hidden",
          gap: "spacing-xs",
          width: "100%",
          ref: r,
          padding: "spacing-none spacing-xxl",
          children: [
            !c && t.jsxs(t.Fragment, {
              children: [
                t.jsx(A, {
                  isActive: e.category === m,
                  onClick: () => n({
                    category: m
                  }),
                  children: m
                }),
                i && t.jsx(A, {
                  isActive: e.category === x,
                  onClick: () => n({
                    category: x
                  }),
                  children: x
                })
              ]
            }),
            o.map((a, l) => t.jsx(te, {
              isLoading: c,
              width: "200px",
              borderRadius: "radius-round",
              children: t.jsx(A, {
                isActive: a === e.category,
                onClick: () => n({
                  category: a,
                  search: "",
                  chain: O.coreContractChain.toString()
                }),
                children: a
              }, `${l}`)
            }))
          ]
        }),
        t.jsx(u, {
          backgroundColor: "surface-primary",
          css: L`
          position: absolute;
          right: 0;
        `,
          borderRadius: "radius-round",
          children: t.jsx(_, {
            iconOnly: t.jsx(je, {}),
            circular: true,
            variant: "outline",
            size: "small",
            onClick: () => {
              var _a;
              (_a = r == null ? void 0 : r.current) == null ? void 0 : _a.scrollBy({
                left: nn,
                behavior: "smooth"
              });
            }
          })
        })
      ]
    });
  };
  K = ({ channelDetails: e, isLoading: n, onChangeProfileModalVisibility: i, profileModalVisibility: r }) => {
    const { data: s, refetch: c, isLoading: o } = fe(void 0, {
      refetchOnWindowFocus: false,
      staleTime: 1 / 0,
      refetchInterval: 9e5
    }), a = () => {
      c();
    }, l = s == null ? void 0 : s.find((p) => p.channel === (e == null ? void 0 : e.channel)), g = JSON.parse((l == null ? void 0 : l.user_settings) || "[]") || [];
    return t.jsx(me, {
      onChangeProfileModalVisibility: i,
      profileModalVisibility: r,
      channelDetails: e,
      isLoading: n,
      isSubscribed: !!l,
      isSubscriptionLoading: o,
      handleRefetch: a,
      subscribeButtonVariant: "outline",
      userSettings: g,
      width: {
        initial: "inherit",
        tb: "auto",
        lp: "auto",
        mm: "auto"
      }
    });
  };
  sn = ({ channelAddress: e, onChangeProfileModalVisibility: n, profileModalVisibility: i }) => {
    const { data: r, isLoading: s } = se(e);
    return t.jsx(K, {
      channelDetails: r,
      isLoading: s,
      onChangeProfileModalVisibility: n,
      profileModalVisibility: i
    });
  };
  an = ({ channels: e, hasMoreData: n, isLoading: i, isLoadingNextPage: r, loadMore: s, suggestedChannels: c }) => {
    const [o, a] = f.useState({
      isVisible: false,
      channel_id: null
    });
    return t.jsxs(u, {
      height: "100%",
      overflow: "auto",
      customScrollbar: true,
      padding: "spacing-none spacing-xxs",
      margin: {
        initial: "spacing-none spacing-sm",
        ml: "spacing-none spacing-xxs"
      },
      css: L`
        .channel-scroll {
          display: grid;
          gap: var(--spacing-md);
          grid-template-columns: repeat(3, minmax(0px, 1fr));

          @media${M.tablet} {
            grid-template-columns: repeat(2, minmax(0px, 1fr));
          }
          @media${M.mobileL} {
            grid-template-columns: repeat(1, minmax(0px, 1fr));
          }
        }
      `,
      children: [
        t.jsxs(ge, {
          pageStart: 1,
          loadMore: s,
          hasMore: n,
          useWindow: false,
          threshold: 150,
          className: "channel-scroll",
          children: [
            c.map((l) => t.jsx(sn, {
              channelAddress: l
            }, `${l}`)),
            e.map((l, g) => t.jsx(K, {
              onChangeProfileModalVisibility: (p) => a(p),
              profileModalVisibility: o,
              channelDetails: l,
              isLoading: i
            }, `${g}`))
          ]
        }),
        r && t.jsx(u, {
          justifyContent: "center",
          display: "flex",
          padding: "spacing-sm",
          children: t.jsx(ae, {
            size: "medium",
            variant: "primary"
          })
        }),
        (o == null ? void 0 : o.isVisible) && t.jsx(u, {
          display: "flex",
          justifyContent: "center",
          width: "-webkit-fill-available",
          alignItems: "center",
          css: L`
            z-index: 99999;
          `,
          children: t.jsx(xe, {
            type: ye.MODAL,
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
  rn = ({ initialChain: e, initialCategory: n }) => {
    const [, i] = ie(), { search: r } = re(), s = f.useMemo(() => Object.fromEntries(new URLSearchParams(r).entries()), [
      r
    ]), c = (o) => {
      const a = Object.entries({
        ...s,
        ...o
      }).reduce((l, [g, p]) => p ? {
        ...l,
        [g]: p
      } : l, {});
      i(a);
    };
    return f.useEffect(() => {
      const o = {};
      (!s.chain || !s.category) && (o.chain = s.chain || e, o.category = s.category || n), (s.chain !== e || s.search) && s.category !== n && (o.category = n), Object.keys(o).length && c(o);
    }, []), {
      filters: {
        chain: (s == null ? void 0 : s.chain) || e,
        category: (s == null ? void 0 : s.category) || "",
        search: (s == null ? void 0 : s.search) || ""
      },
      setFilter: c
    };
  };
  on = (e) => oe() === "prod" && (e == null ? void 0 : e.category) && (e == null ? void 0 : e.category) != m;
  cn = (e, n) => {
    if (on(n)) {
      const i = e.map((r) => r.channel);
      return Object.keys(R).filter((r) => !i.includes(r) && !Q.includes(r) && R[r] === n.category);
    }
    return [];
  };
  ln = () => {
    var _a, _b;
    const { readOnlyWallet: e } = f.useContext(ce), { account: n } = le(), i = n !== e ? n : null, r = V(O.allowedNetworks), { filters: s, setFilter: c } = rn({
      initialChain: r[0].value,
      initialCategory: m
    }), o = (_a = r.find((d) => d.value === s.chain)) == null ? void 0 : _a.label.includes("Ethereum"), a = s.category === m || s.category === x ? "" : s.category, l = s.category === x ? `eip155:${i}` : "", { data: g, isLoading: p, fetchNextPage: y, isFetchingNextPage: b, hasNextPage: j } = de({
      pageSize: 21,
      order: D.ChannelListOrderType.DESCENDING,
      sort: D.ChannelListSortType.SUBSCRIBER,
      chain: o ? "" : s.chain,
      tag: a,
      subscribed: l
    }), { data: N, isLoading: k, fetchNextPage: I, isFetchingNextPage: C, hasNextPage: P } = ve({
      pageSize: 21,
      query: s.search,
      chain: o ? "" : s.chain,
      tag: a,
      subscribed: l
    });
    f.useEffect(() => {
      n === e && s.category === x && c({
        category: m
      });
    }, [
      n,
      s
    ]);
    const S = p || k ? Array(9).fill(0) : ((_b = s.search ? N == null ? void 0 : N.pages.flatMap((d) => d) : g == null ? void 0 : g.pages.flatMap((d) => d.channels)) == null ? void 0 : _b.filter((d) => !Q.includes(d.channel))) || [], E = cn(S, s), v = s.search ? !C && P : !b && j, h = p || k;
    return t.jsx(u, {
      display: "flex",
      width: "-webkit-fill-available",
      overflow: "scroll",
      height: "100%",
      children: t.jsxs(u, {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: {
          initial: "spacing-md",
          ml: "spacing-lg"
        },
        children: [
          t.jsxs(u, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-sm",
            padding: {
              initial: "spacing-md spacing-md spacing-none spacing-md",
              ml: "spacing-sm spacing-sm spacing-none spacing-sm"
            },
            children: [
              t.jsx(en, {
                filters: s,
                setFilter: c
              }),
              t.jsx(tn, {
                filters: s,
                setFilter: c,
                walletAddress: i
              })
            ]
          }),
          !S.length && !E.length && !h ? t.jsxs(u, {
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
              t.jsx(he, {
                variant: "h5-bold",
                children: "No channels to display"
              })
            ]
          }) : t.jsx(an, {
            channels: S,
            hasMoreData: v,
            suggestedChannels: E,
            isLoading: h,
            isLoadingNextPage: b || C,
            loadMore: s.search ? I : y
          })
        ]
      })
    });
  };
  bn = () => t.jsx(Ce, {
    variant: "verticalStretch",
    children: t.jsx(ln, {})
  });
});
export {
  __tla,
  bn as default
};
