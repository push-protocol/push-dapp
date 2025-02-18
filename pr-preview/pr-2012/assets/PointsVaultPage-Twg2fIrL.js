import { il as b, e7 as u, im as $, io as K, f3 as j, gE as v, f_ as S, ip as F, iq as z, ir as W, fe as B, is as Q, it as T, iu as G, iv as I, ga as J, ea as e, gc as H, eb as o, ep as x, gr as C, ev as E, es as P, iw as Y, g1 as N, eq as q, ec as L, ed as R, eo as X, ix as Z, gL as ee, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { c as te, a as A, u as se, __tla as __tla_1 } from "./index.esm-BAVu81oq.js";
import { P as re, __tla as __tla_2 } from "./PushLogo-DYIqM7Nx.js";
import { S as ae, __tla as __tla_3 } from "./Search-CfEOCQ4_.js";
import { u as V, I as M, __tla as __tla_4 } from "./InfiniteScroll-D3igTPHt.js";
import { L as k, __tla as __tla_5 } from "./LeaderboardNullState-15p9OVub.js";
import { C as ne, __tla as __tla_6 } from "./ContentLayout-CMvbJl9T.js";
let Ae;
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
  })()
]).then(async () => {
  function _(t, s) {
    return t.findAll(s.filters).map((r) => s.select ? s.select(r) : r.state);
  }
  function ie(t = {}, s) {
    const r = b().getMutationCache(), n = u.useRef(t), a = u.useRef(null);
    return a.current || (a.current = _(r, t)), u.useEffect(() => {
      n.current = t;
    }), u.useSyncExternalStore(u.useCallback((l) => r.subscribe(() => {
      const i = $(a.current, _(r, n.current));
      a.current !== i && (a.current = i, K.schedule(l));
    }), [
      r
    ]), () => a.current, () => a.current);
  }
  const oe = (t) => t, le = (t) => t, ce = (t) => ({
    id: t.data.id,
    followersCount: t.data.public_metrics.followers_count,
    followingCount: t.data.public_metrics.following_count,
    likeCount: t.data.public_metrics.like_count,
    listedCount: t.data.public_metrics.listed_count,
    name: t.data.name,
    tweetCount: t.data.public_metrics.tweet_count,
    username: t.data.username
  }), ue = (t) => j({
    method: "POST",
    url: `${v()}/auth/login`,
    data: {
      username: t.username,
      password: t.password
    },
    headers: {
      "Content-Type": "application/json"
    }
  }).then((s) => oe(s.data)), de = ({ activityId: t, token: s }) => j({
    method: "POST",
    url: `${v()}/activities/approved`,
    data: {
      activities: [
        {
          activityId: t
        }
      ]
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: s
    }
  }).then((r) => r.data), U = ({ page: t, status: s, pageSize: r, token: n, wallet: a, twitter: l, activityTypeId: i }) => j({
    method: "GET",
    url: `${v()}/activities/list`,
    params: {
      status: s,
      page: t,
      pageSize: r,
      wallet: a,
      twitter: l,
      activityTypeId: i
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: n
    }
  }).then((c) => le(c.data)), he = ({ twitterHandle: t, token: s }) => j({
    method: "GET",
    url: `${v()}/twitter/user/${t}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: s
    }
  }).then((r) => ce(r.data)), pe = ({ activityId: t, token: s }) => j({
    method: "POST",
    url: `${v()}/activities/rejected`,
    data: {
      activities: [
        {
          activityId: t
        }
      ]
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: s
    }
  }).then((r) => r.data), xe = () => S({
    mutationKey: [
      F
    ],
    mutationFn: ue
  }), fe = () => S({
    mutationFn: de,
    mutationKey: [
      z
    ]
  }), ge = () => S({
    mutationFn: pe,
    mutationKey: [
      W
    ]
  }), me = (t, s) => B({
    queryKey: [
      Q,
      t
    ],
    queryFn: () => he({
      twitterHandle: t,
      token: s
    }),
    staleTime: 1 / 0,
    retry: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
    enabled: !!s && !!t
  }), w = () => {
    var _a, _b;
    return (_b = (_a = ie({
      filters: {
        mutationKey: [
          F
        ]
      },
      select: (s) => s.state.data
    })) == null ? void 0 : _a[0]) == null ? void 0 : _b.token;
  }, ye = ({ status: t, pageSize: s = 20, token: r, twitter: n, wallet: a, activityTypeId: l }) => V({
    queryKey: [
      T,
      `${n}-${a}`
    ],
    initialPageParam: 1,
    queryFn: ({ pageParam: i }) => U({
      status: t,
      page: i,
      pageSize: s,
      token: r,
      twitter: n,
      wallet: a,
      activityTypeId: l
    }),
    getNextPageParam: ({ page: i, total: c }) => i >= c ? null : i + 1,
    enabled: !!r,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false
  }), je = ({ status: t, pageSize: s = 20, token: r, twitter: n, wallet: a, activityTypeId: l }) => V({
    queryKey: [
      G,
      `${n}-${a}`
    ],
    initialPageParam: 1,
    queryFn: ({ pageParam: i }) => U({
      status: t,
      page: i,
      pageSize: s,
      token: r,
      twitter: n,
      wallet: a,
      activityTypeId: l
    }),
    getNextPageParam: ({ page: i, total: c }) => i >= c ? null : i + 1,
    enabled: !!r,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false
  }), ve = ({ status: t, pageSize: s = 20, token: r, twitter: n, wallet: a, activityTypeId: l }) => V({
    queryKey: [
      I,
      `${n}-${a}`
    ],
    initialPageParam: 1,
    queryFn: ({ pageParam: i }) => U({
      status: t,
      page: i,
      pageSize: s,
      token: r,
      twitter: n,
      wallet: a,
      activityTypeId: l
    }),
    getNextPageParam: ({ page: i, total: c }) => i >= c ? null : i + 1,
    enabled: !!r,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false
  });
  function we(t, s) {
    var r = u.useRef(false), n = u.useRef(), a = u.useRef(t), l = u.useCallback(function() {
      return r.current;
    }, []), i = u.useCallback(function() {
      r.current = false, n.current && clearTimeout(n.current), n.current = setTimeout(function() {
        r.current = true, a.current();
      }, s);
    }, [
      s
    ]), c = u.useCallback(function() {
      r.current = null, n.current && clearTimeout(n.current);
    }, []);
    return u.useEffect(function() {
      a.current = t;
    }, [
      t
    ]), u.useEffect(function() {
      return i(), c;
    }, [
      s
    ]), [
      l,
      c,
      i
    ];
  }
  function Pe(t, s, r) {
    r === void 0 && (r = []);
    var n = we(t, s), a = n[0], l = n[1], i = n[2];
    return u.useEffect(i, r), [
      a,
      l
    ];
  }
  let be, D, Ce, O, Ee, Se, Te, Ie, Le;
  be = ({ handleSetActiveView: t }) => {
    const { mutate: s, isPending: r } = xe(), n = te().shape({
      username: A().required("Username is required"),
      password: A().required("Password is required")
    }), a = se({
      initialValues: {
        username: "",
        password: ""
      },
      validationSchema: n,
      onSubmit: (c) => {
        i({
          ...c
        });
      }
    }), l = J(), i = ({ username: c, password: d }) => {
      s({
        username: c,
        password: d
      }, {
        onSuccess: (p) => {
          t("list");
        },
        onError: (p) => {
          p.name && l.showMessageToast({
            toastTitle: "Error",
            toastMessage: p.response.data.error,
            toastType: "ERROR",
            getToastIcon: (m) => e.jsx(H, {
              size: m,
              color: "red"
            })
          });
        }
      });
    };
    return e.jsxs(o, {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: "spacing-xxl",
      children: [
        e.jsxs(o, {
          display: "flex",
          gap: "spacing-xxxs",
          alignItems: "center",
          children: [
            e.jsx(re, {}),
            e.jsx(x, {
              variant: "h2-semibold",
              color: "text-primary",
              children: "Push"
            })
          ]
        }),
        e.jsxs(o, {
          width: "374px",
          display: "flex",
          alignItems: "center",
          padding: "spacing-md",
          flexDirection: "column",
          gap: "spacing-md",
          backgroundColor: "surface-primary",
          borderRadius: "radius-md",
          children: [
            e.jsx(x, {
              variant: "h4-bold",
              color: "text-primary",
              children: "Points Vault Login"
            }),
            e.jsx(o, {
              width: "100%",
              children: e.jsx("form", {
                onSubmit: a.handleSubmit,
                children: e.jsxs(o, {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "spacing-xs",
                  width: "100%",
                  children: [
                    e.jsx(o, {
                      width: "100%",
                      children: e.jsx(C, {
                        placeholder: "User",
                        value: a.values.username,
                        disabled: r,
                        onChange: a.handleChange("username"),
                        error: a.touched.username && !!a.errors.username,
                        errorMessage: a.touched.username ? a.errors.username : ""
                      })
                    }),
                    e.jsx(o, {
                      width: "100%",
                      children: e.jsx(C, {
                        type: "password",
                        placeholder: "Password",
                        disabled: r,
                        value: a.values.password,
                        onChange: a.handleChange("password"),
                        error: a.touched.password && !!a.errors.password,
                        errorMessage: a.touched.password ? a.errors.password : ""
                      })
                    }),
                    e.jsx(o, {
                      margin: "spacing-md spacing-none spacing-none spacing-none",
                      children: e.jsx(E, {
                        disabled: r,
                        children: r ? "Authenticating" : "Login"
                      })
                    })
                  ]
                })
              })
            })
          ]
        })
      ]
    });
  };
  D = () => e.jsxs(o, {
    display: "flex",
    justifyContent: "space-between",
    children: [
      e.jsx(o, {
        width: "345px",
        children: e.jsx(x, {
          variant: "c-bold",
          color: "text-tertiary",
          children: "USER"
        })
      }),
      e.jsx(o, {
        width: "345px",
        children: e.jsx(x, {
          variant: "c-bold",
          color: "text-tertiary",
          children: "TWITTER LINK"
        })
      }),
      e.jsx(o, {
        width: "42px",
        justifyContent: "center",
        display: "flex",
        children: e.jsx(x, {
          variant: "c-bold",
          color: "text-tertiary",
          children: "FOLLOWERS"
        })
      }),
      e.jsx(o, {
        width: "245px",
        display: "flex",
        justifyContent: "center",
        children: e.jsx(x, {
          variant: "c-bold",
          color: "text-tertiary",
          children: "ACTION"
        })
      })
    ]
  });
  Ce = ({ status: t, item: s, refetch: r }) => {
    const n = w(), { mutate: a, isPending: l } = ge(), { mutate: i, isPending: c } = fe(), d = async () => {
      a({
        activityId: s.activityId,
        currentStatus: t,
        token: n
      }, {
        onSuccess: () => r("REJECTED")
      });
    }, p = async () => {
      i({
        activityId: s.activityId,
        currentStatus: t,
        token: n
      }, {
        onSuccess: () => r("COMPLETED")
      });
    };
    return e.jsxs(o, {
      width: "208px",
      minWidth: "208px",
      minHeight: "22px",
      display: "flex",
      justifyContent: "center",
      gap: "spacing-xxs",
      children: [
        t !== "COMPLETED" && e.jsx(E, {
          variant: "outline",
          size: "extraSmall",
          disabled: c || l,
          onClick: p,
          children: "Approve"
        }),
        t !== "REJECTED" && e.jsx(E, {
          variant: "dangerSecondary",
          size: "extraSmall",
          disabled: c || l,
          onClick: d,
          children: "Reject"
        })
      ]
    });
  };
  O = ({ isLoading: t, item: s, refetch: r }) => {
    var _a, _b, _c;
    const n = w(), { data: a } = me((_a = s.data) == null ? void 0 : _a.twitter, n);
    return e.jsxs(o, {
      height: "48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      css: q`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `,
      children: [
        e.jsx(P, {
          isLoading: t,
          children: e.jsx(o, {
            display: "flex",
            alignItems: "center",
            width: "345px",
            height: "22px",
            children: e.jsx(x, {
              variant: "bs-semibold",
              color: "text-secondary",
              children: Y(s.userWallet)
            })
          })
        }),
        e.jsx(P, {
          isLoading: t,
          children: e.jsx(o, {
            display: "flex",
            alignItems: "center",
            width: "345px",
            children: e.jsx(N, {
              to: `https://x.com/${(_b = s.data) == null ? void 0 : _b.twitter}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: e.jsxs(x, {
                color: "text-brand-medium",
                variant: "bs-semibold",
                children: [
                  "https://x.com/",
                  (_c = s.data) == null ? void 0 : _c.twitter
                ]
              })
            })
          })
        }),
        e.jsx(P, {
          isLoading: t,
          children: e.jsx(o, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            children: e.jsx(x, {
              variant: "bs-semibold",
              color: (a == null ? void 0 : a.followersCount) && a.followersCount < 50 ? "text-state-danger-bold" : "text-primary",
              children: (a == null ? void 0 : a.followersCount) ?? "-"
            })
          })
        }),
        e.jsx(P, {
          isLoading: t,
          children: e.jsx(o, {
            width: "245px",
            minHeight: "22px",
            display: "flex",
            justifyContent: "center",
            children: e.jsx(Ce, {
              refetch: r,
              status: s.status,
              item: s
            })
          })
        })
      ]
    });
  };
  Ee = ({ query: t }) => {
    const s = w(), r = b(), { data: n, fetchNextPage: a, hasNextPage: l, isFetchingNextPage: i, isLoading: c, isError: d, refetch: p } = ye({
      status: "COMPLETED",
      token: s,
      pageSize: 20,
      twitter: t.twitter,
      wallet: t.wallet,
      activityTypeId: "follow_push_on_twitter"
    }), m = !i && l, f = c ? Array(5).fill(0) : (n == null ? void 0 : n.pages.flatMap((h) => h.activities)) || [];
    if (!f.length) return e.jsx(k, {
      refetchLeaderboard: d ? p : void 0,
      heading: "No Users Found",
      error: d,
      subHeading: d ? "Please refresh to view the List" : ""
    });
    const y = () => {
      p(), r.invalidateQueries({
        queryKey: [
          I
        ]
      });
    };
    return e.jsx(o, {
      gap: "spacing-sm",
      display: "flex",
      flexDirection: "column",
      children: e.jsxs(o, {
        height: "calc(100vh - 356px)",
        overflow: "auto",
        children: [
          e.jsx(D, {}),
          e.jsx(M, {
            pageStart: 0,
            loadMore: () => a(),
            hasMore: m,
            loader: e.jsx(o, {
              margin: "spacing-xs",
              children: e.jsx(L, {
                spinnerSize: 24,
                type: R.SEAMLESS
              })
            }, "loader-spinner"),
            useWindow: false,
            threshold: 150,
            children: f.map((h, g) => e.jsx(O, {
              item: h,
              isLoading: c,
              refetch: y
            }, (h == null ? void 0 : h.activityId) || g))
          })
        ]
      })
    });
  };
  Se = ({ query: t }) => {
    const s = w(), r = b(), { data: n, fetchNextPage: a, hasNextPage: l, isFetchingNextPage: i, isLoading: c, isError: d, refetch: p } = je({
      status: "PENDING",
      token: s,
      pageSize: 20,
      twitter: t.twitter,
      wallet: t.wallet,
      activityTypeId: "follow_push_on_twitter"
    }), m = !i && l, f = c ? Array(5).fill(0) : (n == null ? void 0 : n.pages.flatMap((h) => h.activities)) || [];
    if (!f.length) return e.jsx(k, {
      refetchLeaderboard: d ? p : void 0,
      heading: "No Users Found",
      error: d,
      subHeading: d ? "Please refresh to view the List" : ""
    });
    const y = (h) => {
      p();
      const g = h === "COMPLETED" ? T : h === "REJECTED" ? I : void 0;
      g && r.invalidateQueries({
        queryKey: [
          g
        ]
      });
    };
    return e.jsx(o, {
      gap: "spacing-sm",
      display: "flex",
      flexDirection: "column",
      children: e.jsxs(o, {
        height: "calc(100vh - 356px)",
        overflow: "auto",
        children: [
          e.jsx(D, {}),
          e.jsx(M, {
            pageStart: 0,
            loadMore: () => a(),
            hasMore: m,
            loader: e.jsx(o, {
              margin: "spacing-xs",
              children: e.jsx(L, {
                spinnerSize: 24,
                type: R.SEAMLESS
              })
            }, "loader-spinner"),
            useWindow: false,
            threshold: 150,
            children: f.map((h, g) => e.jsx(O, {
              item: h,
              isLoading: c,
              refetch: y
            }, (h == null ? void 0 : h.activityId) || g))
          })
        ]
      })
    });
  };
  Te = ({ query: t }) => {
    const s = w(), r = b(), { data: n, fetchNextPage: a, hasNextPage: l, isFetchingNextPage: i, isLoading: c, isError: d, refetch: p } = ve({
      status: "REJECTED",
      token: s,
      pageSize: 20,
      twitter: t.twitter,
      wallet: t.wallet,
      activityTypeId: "follow_push_on_twitter"
    }), m = !i && l, f = c ? Array(5).fill(0) : (n == null ? void 0 : n.pages.flatMap((h) => h.activities)) || [];
    if (!f.length) return e.jsx(k, {
      refetchLeaderboard: d ? p : void 0,
      heading: "No Users Found",
      error: d,
      subHeading: d ? "Please refresh to view the List" : ""
    });
    const y = () => {
      p(), r.invalidateQueries({
        queryKey: [
          T
        ]
      });
    };
    return e.jsx(o, {
      gap: "spacing-sm",
      display: "flex",
      flexDirection: "column",
      children: e.jsxs(o, {
        height: "calc(100vh - 356px)",
        overflow: "auto",
        children: [
          e.jsx(D, {}),
          e.jsx(M, {
            pageStart: 0,
            loadMore: () => a(),
            hasMore: m,
            loader: e.jsx(o, {
              margin: "spacing-xs",
              children: e.jsx(L, {
                spinnerSize: 24,
                type: R.SEAMLESS
              })
            }, "loader-spinner"),
            useWindow: false,
            threshold: 150,
            children: f.map((h, g) => e.jsx(O, {
              item: h,
              isLoading: c,
              refetch: y
            }, (h == null ? void 0 : h.activityId) || g))
          })
        ]
      })
    });
  };
  Ie = () => {
    const [t, s] = u.useState(""), [r, n] = u.useState({}), a = u.useCallback((l) => {
      if (!l) return {};
      const i = X(l), c = i ? "wallet" : "twitter", d = i ? `eip155:${l}` : l;
      return {
        [c]: d
      };
    }, []);
    return Pe(() => n(a(t)), 500, [
      t
    ]), e.jsxs(o, {
      backgroundColor: "surface-primary",
      padding: "spacing-md",
      borderRadius: "radius-md",
      children: [
        e.jsx(x, {
          variant: "h4-bold",
          color: "text-primary",
          children: "Points Vault"
        }),
        e.jsxs(o, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "spacing-none spacing-none spacing-md spacing-none",
          children: [
            e.jsxs(o, {
              display: "flex",
              gap: "spacing-xxxs",
              children: [
                e.jsx(x, {
                  color: "text-tertiary",
                  variant: "bs-regular",
                  children: "Ensure the user has at-least 50 Followers and is following"
                }),
                e.jsx(N, {
                  to: "https://x.com/PushChain",
                  target: "_blank",
                  referrerPolicy: "no-referrer",
                  children: e.jsx(x, {
                    color: "text-brand-medium",
                    variant: "bs-regular",
                    children: "@pushprotocol"
                  })
                }),
                " ",
                e.jsx(x, {
                  color: "text-tertiary",
                  variant: "bs-regular",
                  children: "on Twitter"
                })
              ]
            }),
            e.jsx("img", {
              src: Z,
              alt: "Push Icon"
            })
          ]
        }),
        e.jsx(o, {
          position: "relative",
          width: "100%",
          children: e.jsx(o, {
            position: "absolute",
            width: "302px",
            css: q`
            right: 0px;
          `,
            children: e.jsx(C, {
              placeholder: "Search user or x handle or else",
              icon: e.jsx(ae, {}),
              value: t,
              onChange: (l) => s(l.target.value)
            })
          })
        }),
        e.jsx(ee, {
          variant: "fill",
          onChange: () => s(""),
          items: [
            {
              key: "PENDING",
              label: "Pending",
              children: e.jsx(Se, {
                query: r
              })
            },
            {
              key: "COMPLETED",
              label: "Approved",
              children: e.jsx(Ee, {
                query: r
              })
            },
            {
              key: "REJECTED",
              label: "Rejected",
              children: e.jsx(Te, {
                query: r
              })
            }
          ]
        })
      ]
    });
  };
  Le = () => {
    const [t, s] = u.useState("login");
    return e.jsxs(o, {
      height: "100%",
      width: "-webkit-fill-available",
      children: [
        t === "login" && e.jsx(be, {
          handleSetActiveView: s
        }),
        t === "list" && e.jsx(Ie, {})
      ]
    });
  };
  Ae = () => e.jsx(ne, {
    children: e.jsx(Le, {})
  });
});
export {
  __tla,
  Ae as default
};
