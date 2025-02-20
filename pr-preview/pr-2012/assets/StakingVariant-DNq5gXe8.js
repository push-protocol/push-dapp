import { ea as e, er as H, fD as h, fE as l, fC as m, f_ as U, f$ as M, f4 as j, g0 as P, fi as A, eb as c, es as p, ep as i, ev as L, g1 as E, g2 as I, fj as O, g3 as F, en as N, e5 as D, e7 as b, g4 as R, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let Q, B, Y, $, V, J, z, K;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let W, _, q;
  W = (n) => {
    const { svgProps: t, ...o } = n;
    return e.jsx(H, {
      componentName: "Swap",
      icon: e.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: [
          e.jsx("path", {
            d: "M13.25 5L5 13.25H27",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          e.jsx("path", {
            d: "M18.75 27L27 18.75H5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      }),
      ...o
    });
  };
  _ = async (n) => {
    const { noOfTokenToApprove: t, signer: o } = n;
    return (await new h(l.pushToken, m.pushToken, o).approve(l.epnscore, t)).wait();
  };
  K = () => U({
    mutationKey: [
      M
    ],
    mutationFn: _
  });
  V = async ({ address: n, provider: t, contractAddress: o }) => {
    try {
      const r = await new h(l.pushToken, m.pushToken, t).allowance(n, o);
      return j(r.toString());
    } catch (s) {
      console.error(s.message);
    }
  };
  Y = async ({ address: n, provider: t, noOfPushTokensToCheck: o }) => {
    try {
      const r = await new h(l.pushToken, m.pushToken, t).balanceOf(n);
      return +j(r.toString()) >= o;
    } catch (s) {
      console.error(s.message);
    }
  };
  B = async ({ address: n, provider: t }) => {
    try {
      const s = await new h(l.pushToken, m.pushToken, t).balanceOf(n);
      return +j(s.toString());
    } catch (o) {
      console.error(o.message);
    }
  };
  $ = async ({ signer: n, contractAddress: t, amount: o }) => {
    try {
      const s = new h(l.pushToken, m.pushToken, n), r = P(o.toString(), 18);
      return await (await s.approve(t, r)).wait(), true;
    } catch (s) {
      throw console.error(s), s;
    }
  };
  J = async () => {
    try {
      const n = "Ethereum Push Notification Service";
      return await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: l.pushToken,
            symbol: "PUSH",
            decimals: 18
          }
        }
      }), true;
    } catch (n) {
      throw console.error(n), n;
    }
  };
  z = async ({ noOfTokens: n, provider: t, account: o }) => {
    try {
      var s = t.getSigner(o);
      let a = new h(l.pushToken, m.pushToken, s);
      console.info({
        pushTokenContract: a
      }), console.info(1);
      const d = P(n.toString(), 18);
      console.info(d);
      var r = a.mint(d);
      console.info(3);
      const u = await r;
      return console.info(u), await t.waitForTransaction(u.hash), console.info(4), console.info("Transaction Completed"), n;
    } catch (a) {
      return console.error(a), 0;
    }
  };
  q = ({ noOfPushTokensToCheck: n, mintPushToken: t, mintingPush: o, loadingBalance: s }) => {
    const r = N.appEnv === "prod", { isModalOpen: a, showModal: g, ModalComponent: d } = A();
    return e.jsxs(c, {
      display: "flex",
      padding: "spacing-sm spacing-md",
      backgroundColor: "surface-brand-subtle",
      borderRadius: "radius-none radius-none radius-sm radius-sm",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: {
        ml: "column",
        initial: "row"
      },
      gap: "spacing-xs",
      children: [
        e.jsx(p, {
          isLoading: o || s,
          children: e.jsx(i, {
            variant: "c-regular",
            color: "text-primary",
            children: r ? "Your balance is low. Swap to get PUSH Tokens." : "Follow these steps to get Testnet PUSH."
          })
        }),
        r ? e.jsx(L, {
          size: "extraSmall",
          leadingIcon: e.jsx(W, {}),
          onClick: g,
          children: "Swap PUSH Token"
        }) : e.jsxs(c, {
          display: "flex",
          gap: "spacing-xs",
          children: [
            e.jsx(p, {
              isLoading: o || s,
              children: e.jsx(E, {
                to: I,
                target: "_blank",
                children: e.jsxs(c, {
                  display: "flex",
                  gap: "spacing-xxs",
                  alignItems: "baseline",
                  color: "text-brand-medium",
                  cursor: "pointer",
                  children: [
                    e.jsx(c, {
                      border: "border-sm solid stroke-brand-medium",
                      width: "16px",
                      height: "15px",
                      borderRadius: "radius-xl",
                      display: "flex",
                      justifyContent: "center",
                      color: "text-brand-medium",
                      children: e.jsx(i, {
                        variant: "c-regular",
                        color: "text-brand-medium",
                        children: "1"
                      })
                    }),
                    e.jsx(i, {
                      color: "text-brand-medium",
                      children: "Sepolia ETH Faucet"
                    })
                  ]
                })
              })
            }),
            e.jsx(p, {
              isLoading: o || s,
              children: e.jsxs(c, {
                display: "flex",
                gap: "spacing-xxs",
                alignItems: "baseline",
                color: "text-brand-medium",
                cursor: "pointer",
                onClick: () => t(1e3),
                children: [
                  e.jsx(c, {
                    border: "border-sm solid stroke-brand-medium",
                    width: "16px",
                    height: "15px",
                    borderRadius: "radius-xl",
                    display: "flex",
                    justifyContent: "center",
                    children: e.jsx(i, {
                      variant: "c-regular",
                      color: "text-brand-medium",
                      children: "2"
                    })
                  }),
                  e.jsx(i, {
                    color: "text-brand-medium",
                    children: "Get Testnet Push"
                  })
                ]
              })
            })
          ]
        }),
        a && e.jsx(d, {
          InnerComponent: F,
          InnerComponentProps: {
            defaultPushTokenAmount: n
          },
          modalPadding: "0px",
          modalPosition: O.ON_ROOT
        })
      ]
    });
  };
  Q = ({ fees: n, pushApprovalAmount: t, title: o, description: s, balance: r = 0, setBalance: a = () => {
  }, showFaucet: g = false, showBalance: d = false }) => {
    const { provider: u, account: k } = D(), [x, y] = b.useState(false), [S, w] = b.useState(false), C = async () => {
      y(true);
      const T = await B({
        address: k,
        provider: u
      });
      y(false), a(T);
    };
    b.useEffect(() => {
      !k || !u || C();
    }, [
      r,
      k
    ]);
    const v = async (T) => {
      w(true);
      try {
        const f = await z({
          noOfTokens: T,
          provider: u,
          account: k
        });
        w(false), a(f);
      } catch (f) {
        console.log("Error >>", f), w(false);
      }
    };
    return e.jsx(c, {
      display: "flex",
      flexDirection: "column",
      gap: "spacing-sm",
      width: "-webkit-fill-available",
      children: e.jsxs(c, {
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        children: [
          e.jsxs(c, {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "surface-secondary",
            borderRadius: r < n ? "radius-sm radius-sm radius-none radius-none" : "radius-sm",
            padding: "spacing-sm spacing-md",
            alignItems: "center",
            children: [
              e.jsx(p, {
                isLoading: x,
                children: e.jsxs(c, {
                  width: {
                    initial: "inherit",
                    ml: "200px"
                  },
                  children: [
                    e.jsx(i, {
                      variant: "h4-semibold",
                      color: "text-primary",
                      display: {
                        ml: "none",
                        initial: "block"
                      },
                      children: o
                    }),
                    e.jsx(i, {
                      variant: "h5-semibold",
                      color: "text-primary",
                      display: {
                        ml: "block",
                        initial: "none"
                      },
                      children: o
                    }),
                    e.jsx(i, {
                      variant: "c-regular",
                      color: "text-tertiary",
                      display: {
                        ml: "none",
                        initial: "block"
                      },
                      children: s
                    }),
                    e.jsx(i, {
                      variant: "c-regular",
                      color: "text-tertiary",
                      display: {
                        ml: "block",
                        initial: "none"
                      },
                      children: s
                    })
                  ]
                })
              }),
              e.jsxs(c, {
                display: "flex",
                children: [
                  !!t && t >= n && e.jsx(R, {
                    color: "icon-brand-medium",
                    size: 24
                  }),
                  e.jsxs(c, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "spacing-xxxs",
                    children: [
                      e.jsxs(p, {
                        isLoading: x,
                        children: [
                          e.jsxs(i, {
                            variant: "h4-semibold",
                            color: "text-brand-medium",
                            display: {
                              ml: "none",
                              initial: "block"
                            },
                            children: [
                              n,
                              " PUSH"
                            ]
                          }),
                          e.jsxs(i, {
                            variant: "h5-semibold",
                            color: "text-brand-medium",
                            display: {
                              ml: "block",
                              initial: "none"
                            },
                            children: [
                              n,
                              " PUSH"
                            ]
                          })
                        ]
                      }),
                      e.jsx(p, {
                        isLoading: x,
                        children: d && e.jsxs(i, {
                          variant: "bes-semibold",
                          color: "text-tertiary",
                          children: [
                            "Balance: ",
                            r == null ? void 0 : r.toLocaleString()
                          ]
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          !x && r < n && g && e.jsx(q, {
            mintPushToken: v,
            noOfPushTokensToCheck: 50,
            mintingPush: S,
            loadingBalance: x
          })
        ]
      })
    });
  };
});
export {
  Q as S,
  __tla,
  B as a,
  Y as b,
  $ as c,
  V as g,
  J as i,
  z as m,
  K as u
};
