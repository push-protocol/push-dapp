import { f_ as E, he as B, hf as L, en as k, ea as e, gW as W, eb as s, eP as S, gr as P, gs as Y, ev as I, e5 as N, e7 as v, ep as g, eQ as V, gK as F, ga as _, e6 as R, e9 as j, gc as K, gX as G, g_ as H, eq as z, gf as Q, g$ as X, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { S as J, __tla as __tla_1 } from "./Stepper-DGLwgC3e.js";
import { u as Z, F as ee, c as ae, b as se, a as M, __tla as __tla_2 } from "./index.esm-CTUGtbr2.js";
import { i as ne, __tla as __tla_3 } from "./ValidationHelper-DdnurEHo.js";
import { U as ie, a as te, __tla as __tla_4 } from "./UnlockProfileWrapper-DEw7XXiq.js";
import { C as re, __tla as __tla_5 } from "./ContentLayout-BGhKIoso.js";
let ke;
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
  })()
]).then(async () => {
  let oe, le, ce, de, he, ue, ge, $, pe, xe, D, me, fe, Ce, we;
  oe = (a) => a;
  le = (a) => a;
  ce = ({ userPushSDKInstance: a, alias: i }) => a.channel.alias.initiate(i).then(oe);
  de = ({ userPushSDKInstance: a, channelAddress: i }) => a.channel.alias.verify(i).then(le);
  he = () => E({
    mutationKey: [
      B
    ],
    mutationFn: ce
  });
  ue = () => E({
    mutationKey: [
      L
    ],
    mutationFn: de
  });
  ge = [
    {
      label: "New Address",
      value: "newaddress"
    },
    {
      label: "Change Network",
      value: "changenetwork"
    },
    {
      label: "Verify Alias Chain",
      value: "verifyalias"
    }
  ];
  $ = k.allowedNetworks.filter((a) => a != k.coreContractChain);
  pe = ae().shape({
    alias: M().required("Address is required").test("is-valid-address", "Invalid wallet address", ne),
    chainId: M().required("ChainId is required")
  });
  xe = ({ children: a, onSubmit: i }) => {
    const n = Z({
      initialValues: {
        alias: "",
        chainId: $[0].toString()
      },
      validationSchema: pe,
      onSubmit: i
    });
    return e.jsx(ee, {
      value: n,
      children: a
    });
  };
  D = () => {
    const a = se();
    if (!a) throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");
    return a;
  };
  me = ({ isLoading: a, channelDetails: i }) => {
    const n = W($), { values: t, handleSubmit: d, handleChange: h, errors: c, touched: u } = D(), p = i == null ? void 0 : i.aliases.find((r) => r.alias_blockchain_id === t.chainId && r.is_alias_verified), C = () => !(!p && t.alias);
    return e.jsxs(s, {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "spacing-lg",
      children: [
        p && e.jsx(S, {
          variant: "error",
          heading: "Channel already exists on this chain. Select a different chain to proceed.",
          showIcon: true
        }),
        e.jsx("form", {
          onSubmit: d,
          children: e.jsxs(s, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "spacing-xl",
            children: [
              e.jsxs(s, {
                display: "flex",
                flexDirection: {
                  ml: "column",
                  dp: "row"
                },
                gap: "spacing-xs",
                alignItems: "flex-start",
                width: "100%",
                children: [
                  e.jsx(s, {
                    width: {
                      dp: "60%",
                      ml: "100%"
                    },
                    children: e.jsx(P, {
                      label: "Your Address on New Chain",
                      description: "Make sure you own this alias as verification will take place.",
                      value: t.alias,
                      onChange: h("alias"),
                      error: (u == null ? void 0 : u.alias) && !!(c == null ? void 0 : c.alias),
                      errorMessage: (u == null ? void 0 : u.alias) ? c == null ? void 0 : c.alias : ""
                    })
                  }),
                  e.jsx(s, {
                    display: "flex",
                    alignSelf: "center",
                    width: {
                      dp: "auto",
                      ml: "100%"
                    },
                    margin: "spacing-none spacing-none spacing-xxxs spacing-none",
                    children: e.jsx(Y, {
                      options: n,
                      value: t.chainId,
                      onSelect: h("chainId"),
                      error: (u == null ? void 0 : u.chainId) && !!(c == null ? void 0 : c.chainId),
                      errorMessage: (u == null ? void 0 : u.chainId) ? c.chainId : ""
                    })
                  })
                ]
              }),
              e.jsx(I, {
                disabled: C(),
                variant: "primary",
                loading: a,
                children: a ? "Adding new chain" : "Add"
              })
            ]
          })
        })
      ]
    });
  };
  fe = ({ handleNextStep: a }) => {
    const { switchChain: i, chainId: n } = N(), { values: t } = D(), d = parseInt(t.chainId);
    return v.useEffect(() => {
      n === d && a("verifyalias");
    }, [
      n
    ]), e.jsxs(s, {
      display: "flex",
      flexDirection: "column",
      gap: "spacing-xl",
      alignItems: "center",
      children: [
        e.jsx(g, {
          variant: "bs-semibold",
          color: "text-primary",
          children: "Switch to the desired chain in your wallet to add it to your channel."
        }),
        e.jsx(I, {
          onClick: () => i(d),
          children: "Change Network"
        })
      ]
    });
  };
  Ce = ({ alaisDetails: a }) => {
    const { userPushSDKInstance: i } = V((o) => o.user), { account: n, chainId: t } = N(), { mutate: d, isPending: h } = ue(), { values: c } = D(), u = parseInt(c.chainId), { data: p, refetch: C } = F((a == null ? void 0 : a.channel) || ""), r = c.alias, x = _(), w = R(), m = p == null ? void 0 : p.aliases.find((o) => o.alias_blockchain_id === c.chainId && o.is_alias_verified), f = m ? "Channel already exists on this chain." : n !== r ? "Incorrect address. Connect using the correct address to proceed." : "", A = () => !(!m && t === u && n === r), y = () => {
      d({
        userPushSDKInstance: i,
        channelAddress: (a == null ? void 0 : a.channel) ?? ""
      }, {
        onSuccess: () => {
          x.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Verification Successful",
            toastType: "SUCCESS",
            getToastIcon: (o) => e.jsx(G, {
              size: o,
              color: "green"
            })
          }), C(), w(`${j.ChannelDashboard(n)}`);
        },
        onError: (o) => {
          o && x.showMessageToast({
            toastTitle: "Error",
            toastMessage: o.message,
            toastType: "ERROR",
            getToastIcon: (b) => e.jsx(K, {
              size: b,
              color: "red"
            })
          });
        }
      });
    };
    return e.jsxs(s, {
      display: "flex",
      flexDirection: "column",
      gap: "spacing-xl",
      width: "100%",
      alignItems: "center",
      children: [
        f && e.jsx(s, {
          width: "100%",
          children: e.jsx(S, {
            variant: "error",
            heading: f,
            showIcon: true,
            onAction: m ? () => w(`${j.ChannelDashboard(n)}`) : void 0,
            actionText: m ? "Back to Home" : void 0
          })
        }),
        e.jsxs(s, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-sm",
          children: [
            e.jsxs(g, {
              variant: "bs-semibold",
              textAlign: "center",
              color: "text-primary",
              children: [
                "You\u2019re almost there!",
                e.jsx("br", {}),
                " Verify the address on the new chain to send notifications."
              ]
            }),
            e.jsx(P, {
              disabled: true,
              value: r
            })
          ]
        }),
        e.jsx(I, {
          disabled: A(),
          onClick: y,
          loading: h,
          children: h ? "Verifying" : "Verify New Address"
        })
      ]
    });
  };
  we = () => {
    const [a, i] = v.useState("newaddress"), [n, t] = v.useState([
      "newaddress"
    ]), [d, h] = v.useState(true), c = _(), { mutate: u, isPending: p, isError: C } = he(), { userPushSDKInstance: r } = V((l) => l.user), { account: x, chainId: w, switchChain: m } = N(), { data: f } = F(x), { data: A } = H({
      alias: x,
      aliasChain: X[w]
    }), y = R();
    v.useEffect(() => {
      h(r && (r == null ? void 0 : r.readmode()));
    }, [
      r
    ]);
    const o = (l, U) => {
      t([
        "newaddress"
      ]), u({
        userPushSDKInstance: r,
        alias: Q(l, parseInt(U))
      }, {
        onSuccess: () => {
          b("changenetwork");
        },
        onError: (T) => {
          T && c.showMessageToast({
            toastTitle: "Error",
            toastMessage: T.message,
            toastType: "ERROR",
            getToastIcon: (q) => e.jsx(K, {
              size: q,
              color: "red"
            })
          });
        }
      });
    }, b = (l) => {
      t([
        .../* @__PURE__ */ new Set([
          ...n,
          l
        ])
      ]), i(l);
    }, O = () => {
      y(f ? `${j.ChannelDashboard(x)}}` : j.WelcomeDashboard), h(false);
    };
    return e.jsx(xe, {
      onSubmit: (l) => o(l.alias, l.chainId),
      children: e.jsxs(s, {
        display: "flex",
        flexDirection: "column",
        gap: "spacing-sm",
        alignItems: "center",
        children: [
          e.jsxs(s, {
            width: {
              dp: "648px",
              ml: "357px"
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: {
              ml: "spacing-lg spacing-md spacing-none spacing-md",
              dp: "spacing-lg spacing-none spacing-none spacing-none"
            },
            padding: {
              dp: "spacing-lg",
              ml: "spacing-sm"
            },
            gap: "spacing-lg",
            borderRadius: "radius-lg",
            backgroundColor: "surface-primary",
            children: [
              e.jsxs(s, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "spacing-xxxs",
                children: [
                  e.jsx(g, {
                    color: "text-primary",
                    variant: "h3-semibold",
                    display: {
                      ml: "none",
                      initial: "block"
                    },
                    children: "Add New Chain to Channel"
                  }),
                  e.jsx(g, {
                    color: "text-primary",
                    variant: "h4-semibold",
                    display: {
                      ml: "block",
                      initial: "none"
                    },
                    children: "Add New Chain to Channel"
                  }),
                  e.jsx(g, {
                    color: "text-tertiary",
                    variant: "bs-regular",
                    display: {
                      ml: "none",
                      initial: "block"
                    },
                    children: "Add an alias chain to your channel to enable notifications to that chain."
                  }),
                  e.jsx(g, {
                    display: {
                      ml: "block",
                      initial: "none"
                    },
                    color: "text-tertiary",
                    variant: "bes-regular",
                    children: "Add an alias chain to your channel to enable notifications to that chain."
                  })
                ]
              }),
              w !== k.coreContractChain && n.length === 1 ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(s, {
                    display: "flex",
                    padding: "spacing-md",
                    flexDirection: "column",
                    gap: "spacing-sm",
                    alignSelf: "stretch",
                    alignItems: "flex-start",
                    borderRadius: "radius-sm",
                    backgroundColor: "surface-secondary",
                    children: e.jsx(g, {
                      textAlign: "center",
                      color: "text-brand-medium",
                      variant: "h5-semibold",
                      children: "Please change your network to Ethereum to proceed."
                    })
                  }),
                  e.jsx(I, {
                    onClick: () => m(k.coreContractChain),
                    children: "Change Network"
                  })
                ]
              }) : f || A ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(s, {
                    width: "100%",
                    children: e.jsx(J, {
                      steps: ge,
                      completedSteps: n,
                      setActiveStepKey: (l) => i(l)
                    })
                  }),
                  a === "newaddress" && e.jsx(me, {
                    isLoading: p && !C,
                    channelDetails: f
                  }),
                  a === "changenetwork" && e.jsx(fe, {
                    handleNextStep: b
                  }),
                  a === "verifyalias" && e.jsx(Ce, {
                    alaisDetails: A
                  })
                ]
              }) : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(S, {
                    variant: "error",
                    showIcon: true,
                    heading: "User does not have a channel on Push. Create a channel to proceed."
                  }),
                  e.jsx(I, {
                    onClick: () => y(j.CreateChannel),
                    children: "Create Channel"
                  })
                ]
              }),
              d && e.jsx(s, {
                display: "flex",
                justifyContent: "center",
                width: "-webkit-fill-available",
                alignItems: "center",
                css: z`
                z-index: 99999;
              `,
                children: e.jsx(ie, {
                  type: te.MODAL,
                  showConnectModal: true,
                  onClose: O,
                  description: "Unlock your profile to proceed."
                })
              })
            ]
          }),
          e.jsx(s, {
            margin: "spacing-none spacing-md",
            children: e.jsx(g, {
              color: "text-tertiary",
              variant: "c-semibold",
              children: "Tip: Please do not exit the process before the address is verified. If you leave, you will need to start over."
            })
          })
        ]
      })
    });
  };
  ke = () => e.jsx(re, {
    children: e.jsx(we, {})
  });
});
export {
  __tla,
  ke as default
};
