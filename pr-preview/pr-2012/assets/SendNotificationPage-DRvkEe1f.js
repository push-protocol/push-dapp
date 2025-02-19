import { f_ as W, gS as Y, gu as $, ea as s, eb as o, ep as x, gG as z, gT as H, gU as J, en as N, gf as Q, gV as X, e7 as w, e5 as V, ga as Z, eQ as S, gW as ee, gc as se, gX as ae, gs as j, gY as R, eq as b, gr as v, g7 as te, gt as ne, g1 as ie, ev as re, gZ as oe, g_ as le, gK as ce, e6 as de, g$ as ue, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { c as pe, a as c, u as he, __tla as __tla_1 } from "./index.esm-DSACWjwa.js";
import { a as ge, g as d, b as E } from "./Common.form-B0yEfNXt.js";
import { U as xe, a as me, __tla as __tla_2 } from "./UnlockProfileWrapper-Og9ULE2j.js";
import { C as fe, __tla as __tla_3 } from "./ContentLayout-DrIneMyi.js";
let De;
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
  })()
]).then(async () => {
  let Ce, be, ye, ve, ke, je, Se, Te, Ie, Ae, Re, we, Le, Me;
  Ce = (n) => n;
  be = ({ userPushSDKInstance: n, channel: a, recipients: r, payload: i, notification: l }) => n.channel.send(r, {
    notification: l,
    payload: i,
    channel: a
  }).then(Ce);
  ye = () => W({
    mutationKey: [
      Y
    ],
    mutationFn: be
  });
  ve = (n) => {
    const a = $(), r = ({ title: i, body: l, cta: m, channelName: u, icon: f, image: C, chainId: p }) => s.jsx(z, {
      notificationTitle: i,
      notificationBody: l,
      cta: m,
      app: u,
      icon: f,
      image: C,
      chainName: H[p],
      theme: a.mode,
      url: ""
    });
    return s.jsxs(o, {
      display: "flex",
      flexDirection: "column",
      gap: "spacing-none",
      children: [
        s.jsx(x, {
          variant: "h6-semibold",
          color: "text-primary",
          textTransform: "uppercase",
          children: "Preview Notification"
        }),
        s.jsx(r, {
          ...n
        })
      ]
    });
  };
  ke = (n, a) => {
    var _a, _b;
    return [
      ...((_b = (_a = n == null ? void 0 : n.aliases) == null ? void 0 : _a.filter((i) => i.is_alias_verified && J(i.alias_address) === a)) == null ? void 0 : _b.map((i) => parseInt(i.alias_blockchain_id))) || [],
      N.coreContractChain
    ];
  };
  je = (n, a) => {
    const r = [
      ...n || [],
      ...a ? [
        a
      ] : []
    ];
    return r && r.length ? r == null ? void 0 : r.map((i) => ({
      icon: s.jsx(o, {
        width: "24px",
        height: "24px",
        borderRadius: "radius-xxs",
        overflow: "hidden",
        children: s.jsx("img", {
          width: "100%",
          height: "100%",
          src: i == null ? void 0 : i.iconV2,
          alt: i == null ? void 0 : i.name
        })
      }),
      label: i == null ? void 0 : i.name,
      value: i == null ? void 0 : i.channel
    })) : [];
  };
  Se = (n) => {
    var _a;
    let a = [];
    const r = {
      label: "Default",
      value: "0"
    };
    return n && (a = ((_a = JSON.parse(n == null ? void 0 : n.channel_settings)) == null ? void 0 : _a.map((i, l) => ({
      label: i == null ? void 0 : i.description,
      value: (l + 1).toString()
    }))) || []), [
      ...a,
      r
    ];
  };
  Te = (n, a) => {
    if (a) {
      if (n === "SUBSET") return a.split(",");
      if (n === "TARGETTED") return [
        a
      ];
    }
    return [
      "*"
    ];
  };
  Ie = (n, a, r) => {
    var _a;
    return r ? Q(n.channel, parseInt(a)) : ((_a = n.aliases.find((l) => l.alias_blockchain_id === a)) == null ? void 0 : _a.alias_address) || n.channel;
  };
  Ae = [
    {
      label: "Broadcast",
      value: "BROADCAST"
    },
    {
      label: "Targeted",
      value: "TARGETTED"
    },
    {
      label: "Subset",
      value: "SUBSET"
    }
  ];
  Re = (n) => pe().shape({
    channelAddress: c().required(d("Delegate")),
    chainId: c().required(d("Chain")),
    type: c().required(d("Type")),
    body: c().required(d("Description")).max(500, E(500)),
    setting: c().required(d("Setting")),
    recipient: c().test("recipient", d("Recipient"), function(a) {
      return (this.parent.type !== "SUBSET" || n) && (this.parent.type !== "TARGETTED" || !!a);
    }),
    title: c().test("title", d("Title"), function(a) {
      return !this.parent.titleChecked || !!a;
    }).max(80, E(80)),
    mediaUrl: c().test("mediaUrl", d("Media URL"), function(a) {
      return !this.parent.mediaUrlChecked || !!a;
    }),
    ctaLink: c().test("ctaLink", ge("CTA Link"), function(a) {
      return this.parent.ctaLinkChecked ? !!a && X(a) : true;
    })
  });
  we = (n, a) => {
    var _a, _b;
    return {
      channelAddress: ((_a = n[0]) == null ? void 0 : _a.value) || "",
      chainId: ((_b = a[0]) == null ? void 0 : _b.value) || N.coreContractChain.toString(),
      type: "BROADCAST",
      recipient: "",
      titleChecked: false,
      mediaUrlChecked: false,
      ctaLinkChecked: false,
      title: "",
      body: "",
      setting: "0",
      mediaUrl: "",
      ctaLink: ""
    };
  };
  Le = ({ channelDetails: n }) => {
    const [a, r] = w.useState([]), { chainId: i, switchChain: l, account: m } = V(), { mutate: u, isPending: f } = ye(), C = Z(), { userPushSDKInstance: p } = S((t) => t.user), { delegatees: L } = S((t) => t.admin), B = oe === i, T = je(L, n), y = (L == null ? void 0 : L.find((t) => {
      var _a;
      return t.channel === ((_a = T[0]) == null ? void 0 : _a.value);
    })) || n, M = ee(ke(y, m)), e = he({
      initialValues: we(T, M),
      validationSchema: Re(!!a.length),
      onSubmit: (t) => {
        _(t);
      }
    }), D = e.values.body || e.values.title || e.values.ctaLink || e.values.mediaUrl, _ = ({ chainId: t, title: h, type: k, recipient: g, ctaLink: I, mediaUrl: q, body: U, setting: K }) => {
      u({
        channel: Ie(y, t, B),
        recipients: Te(k, g || a.join()),
        notification: {
          title: h,
          body: U
        },
        userPushSDKInstance: p,
        payload: {
          title: h,
          body: U,
          cta: I,
          embed: q,
          category: parseInt(K) ?? void 0
        }
      }, {
        onSuccess: () => {
          C.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Successfully sent notification",
            toastType: "SUCCESS",
            getToastIcon: (A) => s.jsx(ae, {
              size: A,
              color: "green"
            })
          }), e.resetForm();
        },
        onError: (A) => {
          A && C.showMessageToast({
            toastTitle: "Error",
            toastMessage: "Unable to send notification",
            toastType: "ERROR",
            getToastIcon: (G) => s.jsx(se, {
              size: G,
              color: "red"
            })
          });
        }
      });
    }, F = (t) => {
      if (t.key === "Enter" && t.preventDefault(), [
        "Enter",
        ","
      ].includes(t.key)) {
        const k = e.values.recipient.split(" ").filter((g) => g);
        r((g) => {
          const I = /* @__PURE__ */ new Set([
            ...g,
            ...k
          ]);
          return Array.from(I);
        }), e.setFieldValue("recipient", "");
      }
    }, O = (t) => {
      r((h) => h.filter((k, g) => g !== t));
    }, P = (t) => {
      e.setFieldValue("type", t), e.setFieldValue("recipient", ""), r([]);
    };
    return s.jsx("form", {
      onSubmit: e.handleSubmit,
      children: s.jsxs(o, {
        display: "flex",
        flexDirection: "column",
        gap: "spacing-xl",
        alignItems: "center",
        children: [
          s.jsxs(o, {
            display: "flex",
            gap: {
              dp: "spacing-md",
              ml: "spacing-sm"
            },
            width: "100%",
            flexDirection: "column",
            children: [
              s.jsxs(o, {
                display: "flex",
                gap: "spacing-sm",
                flexDirection: {
                  dp: "row",
                  ml: "column"
                },
                children: [
                  s.jsx(o, {
                    width: {
                      dp: "65%",
                      ml: "auto"
                    },
                    children: s.jsx(j, {
                      options: T,
                      value: e.values.channelAddress,
                      onSelect: e.handleChange("channelAddress"),
                      error: e.touched.channelAddress && !!e.errors.channelAddress,
                      errorMessage: e.touched.channelAddress ? e.errors.channelAddress : ""
                    })
                  }),
                  s.jsx(j, {
                    options: M,
                    value: e.values.chainId,
                    onSelect: (t) => {
                      e.setFieldValue("chainId", t), l(parseInt(t));
                    },
                    error: e.touched.chainId && !!e.errors.chainId,
                    errorMessage: e.touched.chainId ? e.errors.chainId : ""
                  })
                ]
              }),
              s.jsx(j, {
                options: Ae,
                value: e.values.type,
                onSelect: (t) => P(t),
                error: e.touched.type && !!e.errors.type,
                errorMessage: e.touched.type ? e.errors.type : ""
              }),
              s.jsxs(o, {
                display: "flex",
                gap: "spacing-sm",
                justifyContent: "space-between",
                css: b`
              flex-wrap: wrap;
            `,
                children: [
                  s.jsxs(o, {
                    css: b`
                flex: 1;
              `,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "surface-secondary",
                    borderRadius: "radius-xs",
                    justifyContent: "space-between",
                    padding: "spacing-xs",
                    children: [
                      s.jsx(x, {
                        ellipsis: true,
                        variant: "bs-semibold",
                        children: "Title"
                      }),
                      s.jsx(R, {
                        leadingToggle: false,
                        checked: e.values.titleChecked,
                        onCheckedChange: (t) => e.setFieldValue("titleChecked", t)
                      })
                    ]
                  }),
                  s.jsxs(o, {
                    css: b`
                flex: 1;
              `,
                    display: "flex",
                    backgroundColor: "surface-secondary",
                    borderRadius: "radius-xs",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "spacing-xs",
                    children: [
                      s.jsx(x, {
                        ellipsis: true,
                        variant: "bs-semibold",
                        children: "Media URL"
                      }),
                      s.jsx(R, {
                        leadingToggle: false,
                        checked: e.values.mediaUrlChecked,
                        onCheckedChange: (t) => e.setFieldValue("mediaUrlChecked", t)
                      })
                    ]
                  }),
                  s.jsxs(o, {
                    css: b`
                flex: 1;
              `,
                    display: "flex",
                    backgroundColor: "surface-secondary",
                    borderRadius: "radius-xs",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "spacing-xs",
                    children: [
                      s.jsx(x, {
                        ellipsis: true,
                        variant: "bs-semibold",
                        children: "CTA Link"
                      }),
                      s.jsx(R, {
                        leadingToggle: false,
                        checked: e.values.ctaLinkChecked,
                        onCheckedChange: (t) => e.setFieldValue("ctaLinkChecked", t)
                      })
                    ]
                  })
                ]
              }),
              e.values.type === "TARGETTED" && s.jsx(v, {
                placeholder: "Input Value",
                label: "Recipient Wallet Address",
                onChange: e.handleChange("recipient"),
                value: e.values.recipient,
                error: e.touched.recipient && !!e.errors.recipient,
                errorMessage: e.touched.recipient ? e.errors.recipient : ""
              }),
              e.values.type === "SUBSET" && s.jsxs(o, {
                display: "flex",
                flexDirection: "column",
                gap: "spacing-xs",
                onKeyDown: (t) => F(t),
                children: [
                  s.jsx(o, {
                    display: "flex",
                    gap: "spacing-xxs",
                    css: b`
                  flex-wrap: wrap;
                `,
                    children: !!a.length && a.map((t, h) => s.jsxs(o, {
                      display: "flex",
                      gap: "spacing-xxs",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "spacing-xxxs spacing-xxs",
                      borderRadius: "radius-xxxs",
                      backgroundColor: "surface-brand-medium",
                      children: [
                        s.jsx(x, {
                          color: "text-brand-subtle",
                          children: t.slice(0, -1)
                        }),
                        s.jsx(o, {
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          onClick: () => O(h),
                          children: s.jsx(te, {
                            size: 14,
                            color: "icon-secondary"
                          })
                        })
                      ]
                    }))
                  }),
                  s.jsx(v, {
                    placeholder: "Input Value",
                    label: "Enter Recipients Wallet Addresses",
                    description: "Enter recipients wallet addresses separated by a comma or by pressing the enter key",
                    onChange: (t) => e.setFieldValue("recipient", t.target.value),
                    value: e.values.recipient,
                    error: e.touched.recipient && !!e.errors.recipient,
                    errorMessage: e.touched.recipient ? e.errors.recipient : ""
                  })
                ]
              }),
              e.values.titleChecked && s.jsx(v, {
                totalCount: 80,
                placeholder: "Input Value",
                label: "Notification Title",
                onChange: e.handleChange("title"),
                value: e.values.title,
                error: e.touched.title && !!e.errors.title,
                errorMessage: e.touched.title ? e.errors.title : ""
              }),
              s.jsx(ne, {
                label: "Notification Message",
                placeholder: "Input Value",
                totalCount: 500,
                onChange: e.handleChange("body"),
                value: e.values.body,
                error: e.touched.body && !!e.errors.body,
                errorMessage: e.touched.body ? e.errors.body : ""
              }),
              s.jsx(j, {
                action: s.jsx(ie, {
                  textProps: {
                    color: "text-brand-medium"
                  },
                  to: "/channel/settings",
                  children: "Manage Setting"
                }),
                label: "Notification Setting Type",
                options: Se(y),
                value: e.values.setting,
                onSelect: e.handleChange("setting"),
                error: e.touched.setting && !!e.errors.setting,
                errorMessage: e.touched.setting ? e.errors.setting : ""
              }),
              e.values.mediaUrlChecked && s.jsx(v, {
                placeholder: "Input Value",
                label: "Media URL",
                onChange: e.handleChange("mediaUrl"),
                value: e.values.mediaUrl,
                error: e.touched.mediaUrl && !!e.errors.mediaUrl,
                errorMessage: e.touched.mediaUrl ? e.errors.mediaUrl : ""
              }),
              e.values.ctaLinkChecked && s.jsx(v, {
                placeholder: "Input Value",
                label: "CTA Link",
                onChange: e.handleChange("ctaLink"),
                value: e.values.ctaLink,
                error: e.touched.ctaLink && !!e.errors.ctaLink,
                errorMessage: e.touched.ctaLink ? e.errors.ctaLink : ""
              }),
              D && s.jsx(ve, {
                title: e.values.title,
                body: e.values.body,
                cta: e.values.ctaLink,
                channelName: (y == null ? void 0 : y.name) || "",
                icon: (y == null ? void 0 : y.iconV2) || "",
                image: e.values.mediaUrl,
                chainId: parseInt(e.values.chainId)
              })
            ]
          }),
          s.jsx(re, {
            disabled: f,
            children: f ? "Sending" : " Send Notification"
          })
        ]
      })
    });
  };
  Me = () => {
    const [n, a] = w.useState(true), { userPushSDKInstance: r } = S((p) => p.user), { account: i, chainId: l } = V(), { data: m } = le({
      alias: i,
      aliasChain: ue[l]
    }), { data: u } = ce((m == null ? void 0 : m.channel) || i), { delegatees: f } = S((p) => p.admin), C = de();
    return w.useEffect(() => {
      !u && !(f == null ? void 0 : f.length) && !m && C("/channels");
    }, [
      u
    ]), s.jsxs(o, {
      padding: {
        dp: "spacing-lg",
        ml: "spacing-sm"
      },
      display: "flex",
      flexDirection: "column",
      gap: {
        dp: "spacing-xl",
        ml: "spacing-md"
      },
      alignSelf: "center",
      width: {
        dp: "648px",
        ml: "357px"
      },
      borderRadius: "radius-lg",
      alignItems: "center",
      backgroundColor: "surface-primary",
      margin: {
        dp: "spacing-lg",
        ml: "spacing-sm"
      },
      children: [
        s.jsx(x, {
          color: "text-primary",
          variant: "h3-semibold",
          display: {
            initial: "block",
            ml: "none"
          },
          children: "Send Notification"
        }),
        s.jsx(x, {
          color: "text-primary",
          variant: "h5-semibold",
          display: {
            initial: "none",
            ml: "block"
          },
          children: "Send Notification"
        }),
        s.jsx(o, {
          width: "100%",
          children: s.jsx(Le, {
            channelDetails: u
          })
        }),
        n && r && (r == null ? void 0 : r.readmode()) && s.jsx(o, {
          display: "flex",
          justifyContent: "center",
          width: "-webkit-fill-available",
          alignItems: "center",
          css: b`
            z-index: 99999;
          `,
          children: s.jsx(xe, {
            type: me.MODAL,
            showConnectModal: true,
            onClose: () => a(false),
            description: "Unlock your profile to proceed."
          })
        })
      ]
    });
  };
  De = () => s.jsx(fe, {
    children: s.jsx(Me, {})
  });
});
export {
  __tla,
  De as default
};
