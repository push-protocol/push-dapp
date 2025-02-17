import { en as v, ea as e, eb as i, es as a, et as j, e9 as u, eu as _, ev as b, ew as w, eq as t, ep as c, ex as S, ey as A, ez as I, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { U as k, N as z, T, V as D, __tla as __tla_1 } from "./VerifiedChannelTooltipContent-gr8PCoLa.js";
let O;
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
  O = ({ channelDetails: s, isLoading: r, isSubscribed: l, isSubscriptionLoading: o, handleRefetch: x, userSettings: f, width: d, subscribeButtonVariant: y = "tertiary", onChangeProfileModalVisibility: p, profileModalVisibility: h }) => {
    var _a;
    let m = [
      v.coreContractChain,
      ...((_a = s == null ? void 0 : s.aliases) == null ? void 0 : _a.filter((n) => n.is_alias_verified).map((n) => parseInt(n.alias_blockchain_id))) || []
    ];
    return e.jsxs(i, {
      display: "flex",
      flexDirection: "column",
      border: "border-sm solid stroke-secondary",
      padding: {
        initial: "spacing-md",
        ml: "spacing-md spacing-sm",
        tb: "spacing-sm",
        lp: "spacing-sm"
      },
      borderRadius: "radius-md",
      gap: "spacing-xs",
      width: {
        initial: "290px",
        mm: "258px",
        ml: "auto",
        tb: "278px",
        lp: "278px",
        ...typeof d != "string" && d
      },
      css: t`
        flex-shrink: 0;
      `,
      minHeight: {
        initial: "auto",
        tb: "180px"
      },
      children: [
        e.jsxs(i, {
          display: "flex",
          justifyContent: "space-between",
          css: t`
          .channel-card-icon {
            border: var(--border-sm) solid rgba(0, 0, 0, 0.05);
            border-radius: var(--radius-sm);
            height: 52px;
            width: 52px;
          }
        `,
          children: [
            e.jsx(a, {
              isLoading: r,
              children: e.jsx(j, {
                to: u.ChannelDetails(s == null ? void 0 : s.channel),
                style: {
                  textDecoration: "none"
                },
                children: e.jsx("img", {
                  className: "channel-card-icon",
                  src: s == null ? void 0 : s.iconV2,
                  alt: s == null ? void 0 : s.name
                })
              })
            }),
            !l && e.jsx(a, {
              isLoading: o || r,
              height: "40px",
              children: e.jsx(_, {
                onChangeProfileModalVisibility: p,
                profileModalVisibility: h,
                channelDetails: s,
                onSuccess: x,
                children: e.jsx(b, {
                  id: "basic-button",
                  disabled: r,
                  variant: y,
                  size: "small",
                  children: "Subscribe"
                })
              })
            }),
            !!l && e.jsx(a, {
              isLoading: o || r,
              height: "40px",
              children: e.jsx(k, {
                onChangeProfileModalVisibility: p,
                profileModalVisibility: h,
                channelDetail: s,
                onSuccess: x,
                userSetting: f,
                children: e.jsx(b, {
                  variant: "secondary",
                  size: "small",
                  leadingIcon: e.jsx(z, {
                    size: 20
                  }),
                  trailingIcon: e.jsx(w, {
                    size: 20
                  }),
                  children: "Subscribed"
                })
              })
            })
          ]
        }),
        e.jsxs(i, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-xxs",
          children: [
            e.jsxs(i, {
              display: "flex",
              flexDirection: "column",
              gap: "spacing-xxxs",
              children: [
                e.jsx(a, {
                  isLoading: r,
                  height: "20px",
                  children: e.jsxs(i, {
                    display: "flex",
                    flexDirection: "row",
                    gap: "spacing-xxxs",
                    alignItems: "center",
                    children: [
                      e.jsx(j, {
                        to: u.ChannelDetails(s == null ? void 0 : s.channel),
                        style: {
                          textDecoration: "none"
                        },
                        children: e.jsx(c, {
                          variant: "h5-semibold",
                          color: "text-primary",
                          children: s == null ? void 0 : s.name
                        })
                      }),
                      !!(s == null ? void 0 : s.verified_status) && e.jsx(S, {
                        overlay: e.jsx(D, {}),
                        children: e.jsx(i, {
                          cursor: "pointer",
                          display: "flex",
                          children: e.jsx(T, {
                            color: "icon-tertiary",
                            size: 16
                          })
                        })
                      }),
                      (m == null ? void 0 : m.length) > 0 && e.jsx(i, {
                        display: "flex",
                        alignItems: "center",
                        margin: "spacing-none spacing-none spacing-none spacing-xxxs",
                        children: m.map((n, C) => {
                          const g = A[n];
                          return g ? e.jsx(i, {
                            display: "flex",
                            css: t`
                          margin-left: -5px;
                        `,
                            children: e.jsx(g, {
                              width: 16,
                              height: 16
                            }, n)
                          }, `${C}`) : null;
                        })
                      })
                    ]
                  })
                }),
                e.jsx(a, {
                  isLoading: r,
                  height: "20px",
                  children: e.jsxs(c, {
                    variant: "c-regular",
                    color: "text-tertiary-inverse",
                    children: [
                      I(s == null ? void 0 : s.subscriber_count),
                      " subscribers"
                    ]
                  })
                })
              ]
            }),
            e.jsx(i, {
              children: e.jsx(a, {
                isLoading: r,
                height: "40px",
                children: e.jsx(c, {
                  variant: "bs-regular",
                  color: "text-tertiary-inverse",
                  numberOfLines: 2,
                  children: s == null ? void 0 : s.info
                })
              })
            })
          ]
        })
      ]
    });
  };
});
export {
  O as C,
  __tla
};
