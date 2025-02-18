import { eQ as I, fe as N, gu as A, gv as L, e5 as M, ea as e, es as p, eu as T, ev as b, ew as _, gw as P, eb as i, ep as x, gx as R, eq as g, e7 as m, e6 as j, en as z, gy as B, e9 as y, ex as C, ey as G, gl as q, gz as w, ez as V, gA as S, gB as U, go as E, gC as F, gD as H, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { u as O, __tla as __tla_1 } from "./useGetChannelsList-CTudPoyr.js";
import { u as W, U as K, N as Q, T as $, V as J, __tla as __tla_2 } from "./VerifiedChannelTooltipContent-mmw9SpsD.js";
import { C as X, __tla as __tla_3 } from "./CopyButton-CYVHncGx.js";
import { I as Y, __tla as __tla_4 } from "./InfiniteScroll-D3igTPHt.js";
import { C as Z, __tla as __tla_5 } from "./ContentLayout-CMvbJl9T.js";
import { __tla as __tla_6 } from "./PushLogo-DYIqM7Nx.js";
import { __tla as __tla_7 } from "./Copy-CB60wX7c.js";
let ue;
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
  })()
]).then(async () => {
  let ee, se, ie, v, ne, ae, te, re;
  ee = (s) => s == null ? void 0 : s.notifications;
  se = ({ userPushSDKInstance: s, address: t, limit: r, page: n }) => s.channel.notifications(t, {
    page: n,
    limit: r
  }).then(ee);
  ie = (s, t, r) => {
    const { userPushSDKInstance: n } = I((c) => c.user);
    return N({
      queryKey: [
        A,
        s
      ],
      queryFn: () => se({
        userPushSDKInstance: n,
        address: s,
        page: t,
        limit: r
      }),
      enabled: s !== L
    });
  };
  v = ({ channel: s }) => {
    var _a;
    const { wallet: t } = M(), r = !!((_a = t == null ? void 0 : t.accounts) == null ? void 0 : _a.length), { data: n, refetch: d, isLoading: c } = W(s == null ? void 0 : s.channel, {
      enabled: r
    }), l = n && (n == null ? void 0 : n.length), o = () => {
      d();
    };
    return e.jsxs(p, {
      isLoading: c,
      children: [
        s && !l && e.jsx(T, {
          channelDetails: s,
          onSuccess: o,
          children: e.jsx(b, {
            variant: "tertiary",
            size: "small",
            block: true,
            children: "Subscribe"
          })
        }),
        s && !!l && e.jsx(K, {
          channelDetail: s,
          onSuccess: o,
          userSetting: JSON.parse(n[0].user_settings),
          children: e.jsx(b, {
            variant: "secondary",
            size: "small",
            block: true,
            leadingIcon: e.jsx(Q, {}),
            trailingIcon: e.jsx(_, {}),
            children: "Subscribed"
          })
        })
      ]
    });
  };
  ne = ({ channelAddress: s }) => {
    const { mode: t } = P(), { data: r, isLoading: n, isSuccess: d } = ie(s, 1, 20), c = n ? Array(10).fill(0) : r;
    return e.jsxs(i, {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      overflow: "scroll",
      customScrollbar: true,
      gap: "spacing-sm",
      children: [
        e.jsx(i, {
          padding: {
            ml: "spacing-none spacing-sm"
          },
          children: e.jsx(x, {
            color: "text-primary",
            variant: "h4-semibold",
            children: "Recent Notifications"
          })
        }),
        e.jsxs(i, {
          display: "flex",
          width: "-webkit-fill-available",
          height: "100%",
          flexDirection: "column",
          gap: "spacing-sm",
          padding: {
            ml: "spacing-none spacing-xxs",
            initial: "spacing-none spacing-xxs spacing-none spacing-none"
          },
          margin: {
            ml: "spacing-none spacing-xxs",
            initial: "spacing-none spacing-sm spacing-none spacing-none"
          },
          overflow: "scroll",
          justifyContent: "flex-start",
          customScrollbar: true,
          children: [
            d && !n && !(c == null ? void 0 : c.length) && e.jsx(i, {
              display: "flex",
              alignSelf: "center",
              width: "fit-content",
              borderRadius: "radius-xl",
              backgroundColor: "surface-secondary",
              padding: "spacing-xxs spacing-sm",
              children: e.jsxs(x, {
                color: "text-primary",
                variant: "bs-regular",
                children: [
                  " ",
                  "No notifications to show yet"
                ]
              })
            }),
            c == null ? void 0 : c.map((l) => {
              var _a, _b, _c, _d;
              const o = (_a = l == null ? void 0 : l.message) == null ? void 0 : _a.payload;
              return e.jsx(p, {
                isLoading: n,
                children: e.jsx(i, {
                  css: g`
                  & > div {
                    margin: 0;
                  }
                `,
                  children: e.jsx(R, {
                    notificationTitle: o == null ? void 0 : o.title,
                    notificationBody: o == null ? void 0 : o.body,
                    cta: o == null ? void 0 : o.cta,
                    image: o == null ? void 0 : o.embed,
                    app: (_b = l == null ? void 0 : l.channel) == null ? void 0 : _b.name,
                    icon: (_c = l == null ? void 0 : l.channel) == null ? void 0 : _c.icon,
                    url: (_d = l == null ? void 0 : l.channel) == null ? void 0 : _d.url,
                    chainName: l == null ? void 0 : l.source,
                    theme: t
                  })
                }, l.payload_id)
              });
            })
          ]
        })
      ]
    });
  };
  ae = ({ channel: s, isLoading: t }) => {
    var _a, _b, _c, _d;
    const [r, n] = m.useState(false), d = j(), c = ((s == null ? void 0 : s.info) || "").length > 250, l = c ? r ? (s == null ? void 0 : s.info) || "" : ((s == null ? void 0 : s.info) || "").substring(0, 250) : (s == null ? void 0 : s.info) || "";
    let o = [
      z.coreContractChain,
      ...((_a = s == null ? void 0 : s.aliases) == null ? void 0 : _a.filter((a) => a.is_alias_verified).map((a) => parseInt(a.alias_blockchain_id))) || []
    ];
    return e.jsxs(i, {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      gap: "spacing-xl",
      children: [
        e.jsxs(i, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-sm",
          width: "-webkit-fill-available",
          padding: {
            initial: "spacing-none spacing-md spacing-none spacing-none",
            ml: "spacing-sm"
          },
          children: [
            e.jsxs(i, {
              display: "flex",
              flexDirection: "column",
              gap: "spacing-xs",
              width: "100%",
              children: [
                e.jsx(i, {
                  onClick: () => d(y.Channels),
                  cursor: "pointer",
                  children: e.jsx(B, {
                    size: 24,
                    color: "icon-primary"
                  })
                }),
                e.jsxs(i, {
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  children: [
                    e.jsxs(i, {
                      display: "flex",
                      gap: {
                        initial: "spacing-sm",
                        ml: "spacing-xs"
                      },
                      alignItems: {
                        initial: "center",
                        ml: "flex-start"
                      },
                      children: [
                        e.jsxs(p, {
                          isLoading: t,
                          children: [
                            e.jsx(i, {
                              width: "90px",
                              height: "90px",
                              borderRadius: "radius-md",
                              overflow: "hidden",
                              border: "border-sm solid stroke-secondary",
                              display: {
                                initial: "flex",
                                ml: "none"
                              },
                              css: g`
                    flex-shrink: 0;
                  `,
                              children: e.jsx("img", {
                                width: "100%",
                                height: "100%",
                                src: (s == null ? void 0 : s.iconV2) || "",
                                alt: (s == null ? void 0 : s.name) || ""
                              })
                            }),
                            e.jsx(i, {
                              width: "52px",
                              height: "52px",
                              borderRadius: "radius-sm",
                              border: "border-sm solid stroke-secondary",
                              display: {
                                initial: "none",
                                ml: "flex"
                              },
                              overflow: "hidden",
                              children: e.jsx("img", {
                                width: "100%",
                                height: "100%",
                                src: (s == null ? void 0 : s.iconV2) || "",
                                alt: (s == null ? void 0 : s.name) || ""
                              })
                            })
                          ]
                        }),
                        e.jsxs(i, {
                          display: "flex",
                          flexDirection: "column",
                          gap: "spacing-xs",
                          children: [
                            e.jsx(p, {
                              isLoading: t,
                              children: e.jsxs(i, {
                                display: "flex",
                                flexDirection: "column",
                                children: [
                                  e.jsxs(i, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "spacing-xxxs",
                                    children: [
                                      e.jsx(x, {
                                        color: "text-primary",
                                        variant: "h4-semibold",
                                        children: (s == null ? void 0 : s.name) || ""
                                      }),
                                      !!(s == null ? void 0 : s.verified_status) && e.jsx(C, {
                                        overlay: e.jsx(J, {}),
                                        children: e.jsx(i, {
                                          cursor: "pointer",
                                          display: "flex",
                                          children: e.jsx($, {
                                            color: "icon-tertiary",
                                            size: 18
                                          })
                                        })
                                      }),
                                      o.length > 0 && e.jsx(i, {
                                        display: "flex",
                                        alignItems: "center",
                                        margin: "spacing-none spacing-none spacing-none spacing-xxxs",
                                        children: o.map((a) => {
                                          const h = G[a];
                                          return h ? e.jsx(i, {
                                            display: "flex",
                                            css: g`
                                  margin-left: -4px;
                                `,
                                            children: e.jsx(h, {
                                              width: 18,
                                              height: 18
                                            }, a)
                                          }) : null;
                                        })
                                      })
                                    ]
                                  }),
                                  e.jsxs(i, {
                                    display: "flex",
                                    gap: "spacing-xxxs",
                                    alignItems: "center",
                                    children: [
                                      e.jsx(x, {
                                        color: "text-tertiary",
                                        variant: "bs-regular",
                                        children: q((s == null ? void 0 : s.channel) || "", 10, 10) || ""
                                      }),
                                      e.jsx(X, {
                                        tooltipTitle: "Copy Address",
                                        content: (s == null ? void 0 : s.channel) || ""
                                      })
                                    ]
                                  })
                                ]
                              })
                            }),
                            e.jsx(p, {
                              isLoading: t,
                              children: e.jsxs(i, {
                                display: "flex",
                                gap: "spacing-xs",
                                css: g`
                      flex-wrap: wrap;
                    `,
                                alignItems: "center",
                                children: [
                                  e.jsxs(x, {
                                    color: "text-tertiary-inverse",
                                    variant: "c-regular",
                                    children: [
                                      V(s == null ? void 0 : s.subscriber_count),
                                      " subscribers"
                                    ]
                                  }),
                                  ((_b = s == null ? void 0 : s.tags) == null ? void 0 : _b[0]) && e.jsx(S, {
                                    label: s.tags[0],
                                    variant: "info"
                                  }),
                                  !((_c = s == null ? void 0 : s.tags) == null ? void 0 : _c[0]) && ((_d = w) == null ? void 0 : _d[s == null ? void 0 : s.channel]) && e.jsx(C, {
                                    title: "Suggested by Push",
                                    children: e.jsx(i, {
                                      cursor: "pointer",
                                      children: e.jsx(S, {
                                        label: w[s.channel]
                                      })
                                    })
                                  })
                                ]
                              })
                            })
                          ]
                        })
                      ]
                    }),
                    e.jsx(i, {
                      display: {
                        initial: "inline",
                        ml: "none"
                      },
                      children: e.jsx(v, {
                        channel: s
                      })
                    })
                  ]
                })
              ]
            }),
            e.jsx(p, {
              isLoading: t,
              children: e.jsxs(i, {
                children: [
                  e.jsx(x, {
                    display: {
                      initial: "inline",
                      ml: "none"
                    },
                    variant: "bs-regular",
                    color: "text-tertiary",
                    as: "span",
                    children: l
                  }),
                  e.jsx(x, {
                    display: {
                      initial: "none",
                      ml: "inline"
                    },
                    variant: "bs-regular",
                    color: "text-tertiary",
                    as: "span",
                    children: l
                  }),
                  c && e.jsxs(i, {
                    as: "span",
                    cursor: "pointer",
                    onClick: () => n(!r),
                    children: [
                      e.jsxs(x, {
                        display: {
                          initial: "inline",
                          ml: "none"
                        },
                        color: "text-brand-medium",
                        as: "span",
                        children: [
                          " ",
                          `Show ${r ? "Less" : "More"}`
                        ]
                      }),
                      e.jsxs(x, {
                        display: {
                          initial: "none",
                          ml: "inline"
                        },
                        color: "text-brand-medium",
                        as: "span",
                        children: [
                          " ",
                          `Show ${r ? "Less" : "More"}`
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            e.jsx(i, {
              display: {
                initial: "none",
                ml: "block"
              },
              children: e.jsx(v, {
                channel: s
              })
            })
          ]
        }),
        e.jsx(ne, {
          channelAddress: s == null ? void 0 : s.channel
        })
      ]
    });
  };
  te = ({ channels: s, fetchNextPage: t, setSelectedChannelId: r, isLoading: n, hasMoreData: d, isFetchingNextPage: c }) => {
    const l = j(), o = (a) => {
      r(a == null ? void 0 : a.channel), l(y.ChannelDetails(a == null ? void 0 : a.channel));
    };
    return e.jsxs(i, {
      display: {
        initial: "flex",
        ml: "none"
      },
      width: "fit-content",
      justifyContent: "flex-start",
      overflow: "scroll",
      customScrollbar: true,
      height: "100%",
      maxHeight: "100%",
      padding: "spacing-none spacing-sm spacing-none spacing-none",
      flexDirection: "column",
      children: [
        e.jsx(Y, {
          pageStart: 1,
          loadMore: () => {
            t();
          },
          hasMore: d,
          useWindow: false,
          threshold: 150,
          children: e.jsx(i, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-md",
            children: s == null ? void 0 : s.map((a) => e.jsx(p, {
              isLoading: n,
              children: e.jsx(i, {
                width: "46px",
                height: "46px",
                overflow: "hidden",
                borderRadius: "radius-sm",
                cursor: "pointer",
                onClick: () => o(a),
                css: g`
                  flex-shrink: 0;
                `,
                children: e.jsx("img", {
                  width: "100%",
                  height: "100%",
                  src: a == null ? void 0 : a.iconV2,
                  alt: a == null ? void 0 : a.name
                })
              }, a == null ? void 0 : a.channel)
            }))
          })
        }),
        c && e.jsx(i, {
          justifyContent: "center",
          display: "flex",
          padding: "spacing-sm",
          children: e.jsx(U, {
            size: "small",
            variant: "primary"
          })
        })
      ]
    });
  };
  re = () => {
    const { id: s } = E(), t = j(), [r, n] = m.useState(s || ""), { data: d, fetchNextPage: c, hasNextPage: l, isLoading: o, isFetchingNextPage: a } = O({
      pageSize: 15
    }), { data: h } = F(s || ""), u = o ? Array(10).fill(0) : (d == null ? void 0 : d.pages.flatMap((f) => f.channels)) || [], D = !a && l, k = (u == null ? void 0 : u.find((f) => (f == null ? void 0 : f.channel) === r)) || h;
    return m.useEffect(() => {
      H.isAddress(s || "") || t(y.Channels);
    }, [
      s
    ]), (u == null ? void 0 : u.length) && e.jsxs(i, {
      width: "-webkit-fill-available",
      padding: {
        initial: "spacing-md spacing-none spacing-none spacing-sm",
        ml: "spacing-none"
      },
      display: "flex",
      height: "100%",
      justifyContent: "flex-start",
      borderRadius: "radius-md radius-md radius-none radius-none",
      gap: "spacing-md",
      border: "border-sm solid stroke-secondary",
      backgroundColor: "surface-primary",
      children: [
        e.jsx(te, {
          channels: u,
          fetchNextPage: c,
          hasMoreData: D,
          isLoading: o,
          setSelectedChannelId: n,
          isFetchingNextPage: a
        }),
        e.jsx(ae, {
          channel: k,
          isLoading: o
        })
      ]
    });
  };
  ue = () => e.jsx(Z, {
    variant: "verticalStretch",
    children: e.jsx(re, {})
  });
});
export {
  __tla,
  ue as default
};
