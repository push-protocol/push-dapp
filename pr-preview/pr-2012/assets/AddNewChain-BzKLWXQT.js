import { f_ as E, he as L, hf as W, en as k, ea as e, gW as Y, eb as s, eP as N, gr as P, gs as G, ev as I, e5 as T, e7 as j, ep as g, eQ as V, gK as F, ga as _, e6 as R, e9 as v, gc as K, gX as H, g_ as z, eq as Q, gf as X, g$ as J, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { S as Z, __tla as __tla_1 } from "./Stepper-Cp08iENs.js";
import { u as ee, F as ae, c as se, b as ne, a as M, __tla as __tla_2 } from "./index.esm-CwzlWqAK.js";
import { i as ie, __tla as __tla_3 } from "./ValidationHelper-B6T4Nygh.js";
import { U as te, a as re, __tla as __tla_4 } from "./UnlockProfileWrapper-B5-cCTKd.js";
import { C as oe, __tla as __tla_5 } from "./ContentLayout-jbLa4puu.js";
let Se;
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
  let le, ce, de, he, ue, ge, pe, $, xe, me, D, fe, Ce, we, ye;
  le = (a) => a;
  ce = (a) => a;
  de = ({ userPushSDKInstance: a, alias: i }) => a.channel.alias.initiate(i).then(le);
  he = ({ userPushSDKInstance: a, channelAddress: i }) => a.channel.alias.verify(i).then(ce);
  ue = () => E({
    mutationKey: [
      L
    ],
    mutationFn: de
  });
  ge = () => E({
    mutationKey: [
      W
    ],
    mutationFn: he
  });
  pe = [
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
  xe = se().shape({
    alias: M().required("Address is required").test("is-valid-address", "Invalid wallet address", ie),
    chainId: M().required("ChainId is required")
  });
  me = ({ children: a, onSubmit: i }) => {
    const n = ee({
      initialValues: {
        alias: "",
        chainId: $[0].toString()
      },
      validationSchema: xe,
      onSubmit: i
    });
    return e.jsx(ae, {
      value: n,
      children: a
    });
  };
  D = () => {
    const a = ne();
    if (!a) throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");
    return a;
  };
  fe = ({ isLoading: a, channelDetails: i }) => {
    const n = Y($), { values: t, handleSubmit: d, handleChange: h, errors: c, touched: u } = D(), p = i == null ? void 0 : i.aliases.find((r) => r.alias_blockchain_id === t.chainId && r.is_alias_verified), C = () => !(!p && t.alias);
    return e.jsxs(s, {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "spacing-lg",
      children: [
        p && e.jsx(N, {
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
                    children: e.jsx(G, {
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
  Ce = ({ handleNextStep: a }) => {
    const { switchChain: i, chainId: n } = T(), { values: t } = D(), d = parseInt(t.chainId);
    return j.useEffect(() => {
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
  we = ({ alaisDetails: a }) => {
    const { userPushSDKInstance: i } = V((o) => o.user), { account: n, chainId: t } = T(), { mutate: d, isPending: h } = ge(), { values: c } = D(), u = parseInt(c.chainId), { data: p, refetch: C } = F((a == null ? void 0 : a.channel) || ""), r = c.alias, x = _(), w = R(), m = p == null ? void 0 : p.aliases.find((o) => o.alias_blockchain_id === c.chainId && o.is_alias_verified), f = m ? "Channel already exists on this chain." : n !== r ? "Incorrect address. Connect using the correct address to proceed." : "", b = () => !(!m && t === u && n === r), y = () => {
      d({
        userPushSDKInstance: i,
        channelAddress: (a == null ? void 0 : a.channel) ?? ""
      }, {
        onSuccess: () => {
          x.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Verification Successful",
            toastType: "SUCCESS",
            getToastIcon: (o) => e.jsx(H, {
              size: o,
              color: "green"
            })
          }), C(), w(`${v.ChannelDashboard(n)}`);
        },
        onError: (o) => {
          o && x.showMessageToast({
            toastTitle: "Error",
            toastMessage: o.message,
            toastType: "ERROR",
            getToastIcon: (A) => e.jsx(K, {
              size: A,
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
          children: e.jsx(N, {
            variant: "error",
            heading: f,
            showIcon: true,
            onAction: m ? () => w(`${v.ChannelDashboard(n)}`) : void 0,
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
          disabled: b(),
          onClick: y,
          loading: h,
          children: h ? "Verifying" : "Verify New Address"
        })
      ]
    });
  };
  ye = () => {
    const [a, i] = j.useState("newaddress"), [n, t] = j.useState([
      "newaddress"
    ]), [d, h] = j.useState(true), c = _(), { mutate: u, isPending: p, isError: C } = ue(), { userPushSDKInstance: r } = V((l) => l.user), { account: x, chainId: w, switchChain: m } = T(), { data: f } = F(x), { data: b } = z({
      alias: x,
      aliasChain: J[w]
    }), y = R();
    j.useEffect(() => {
      h(r && (r == null ? void 0 : r.readmode()));
    }, [
      r
    ]);
    const o = (l, B) => {
      t([
        "newaddress"
      ]), u({
        userPushSDKInstance: r,
        alias: X(l, parseInt(B))
      }, {
        onSuccess: () => {
          A("changenetwork");
        },
        onError: (S) => {
          if (S) {
            const O = /user rejected transaction/i.test(S.message);
            c.showMessageToast({
              toastTitle: "Error",
              toastMessage: O ? "Transaction rejected by user." : S.message,
              toastType: "ERROR",
              getToastIcon: (q) => e.jsx(K, {
                size: q,
                color: "red"
              })
            });
          }
        }
      });
    }, A = (l) => {
      t([
        .../* @__PURE__ */ new Set([
          ...n,
          l
        ])
      ]), i(l);
    }, U = () => {
      y(f ? `${v.ChannelDashboard(x)}}` : v.WelcomeDashboard), h(false);
    };
    return e.jsx(me, {
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
              }) : f || b ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(s, {
                    width: "100%",
                    children: e.jsx(Z, {
                      steps: pe,
                      completedSteps: n,
                      setActiveStepKey: (l) => i(l)
                    })
                  }),
                  a === "newaddress" && e.jsx(fe, {
                    isLoading: p && !C,
                    channelDetails: f
                  }),
                  a === "changenetwork" && e.jsx(Ce, {
                    handleNextStep: A
                  }),
                  a === "verifyalias" && e.jsx(we, {
                    alaisDetails: b
                  })
                ]
              }) : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(N, {
                    variant: "error",
                    showIcon: true,
                    heading: "User does not have a channel on Push. Create a channel to proceed."
                  }),
                  e.jsx(I, {
                    onClick: () => y(v.CreateChannel),
                    children: "Create Channel"
                  })
                ]
              }),
              d && e.jsx(s, {
                display: "flex",
                justifyContent: "center",
                width: "-webkit-fill-available",
                alignItems: "center",
                css: Q`
                z-index: 99999;
              `,
                children: e.jsx(te, {
                  type: re.MODAL,
                  showConnectModal: true,
                  onClose: U,
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
  Se = () => e.jsx(oe, {
    children: e.jsx(ye, {})
  });
});
export {
  __tla,
  Se as default
};
