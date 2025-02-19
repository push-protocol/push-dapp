import { ea as e, er as Q, eb as s, ep as t, g1 as _, eq as B, e7 as m, gu as X, e6 as Z, eQ as ee, fY as N, fD as O, gv as ne, fE as E, g0 as se, gw as F, e5 as ae, gx as re, gy as te, gz as ie, gr as oe, en as le, eP as ce, ev as de, gA as T, gf as ue, gB as ge, gC as pe, gD as he, go as me, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { p as R, f as W, __tla as __tla_1 } from "./index-B8YUIZhd.js";
import { T as $, __tla as __tla_2 } from "./Tick-DkOrEh8x.js";
import { u as xe, c as fe, a as ye, __tla as __tla_3 } from "./index.esm-DSACWjwa.js";
import { u as z, __tla as __tla_4 } from "./useDisclosure--XpPaGPh.js";
import { g as je } from "./Common.form-B0yEfNXt.js";
import { u as be, __tla as __tla_5 } from "./useGetPaymentDetails-Bvhdr89l.js";
import { P as we, a as ve, __tla as __tla_6 } from "./PushLogoWithNameDark-DqeWBzTV.js";
import { C as Ce, __tla as __tla_7 } from "./ContentLayout-DrIneMyi.js";
let qe;
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
  let Se, Pe, De, Ie, ke, Ae, Te, Ee, Be, Ue, Le, Me;
  Se = (n) => {
    const { svgProps: i, ...a } = n;
    return e.jsx(Q, {
      componentName: "ExternalLink",
      icon: e.jsx("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...i,
        children: e.jsx("path", {
          d: "M13 7H7C6.20435 7 5.44129 7.31607 4.87868 7.87868C4.31607 8.44129 4 9.20435 4 10V25C4 25.7956 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H22C22.7956 28 23.5587 27.6839 24.1213 27.1213C24.6839 26.5587 25 25.7956 25 25V19M19 4H28M28 4V13M28 4L13 19",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })
      }),
      ...a
    });
  };
  Pe = ({ selectedPlan: n }) => {
    var _a;
    return e.jsxs(s, {
      display: "flex",
      flexDirection: "column",
      padding: "spacing-none",
      width: "50%",
      children: [
        e.jsxs(t, {
          variant: "h3-semibold",
          children: [
            "Push ",
            n == null ? void 0 : n.name
          ]
        }),
        e.jsx(_, {
          to: "/pricing",
          isText: true,
          textProps: {
            color: "text-secondary",
            variant: "bs-regular",
            css: B`
            text-decoration-line: underline;
          `
          },
          children: "change plan"
        }),
        e.jsxs(s, {
          padding: "spacing-md spacing-none spacing-none spacing-none",
          children: [
            e.jsx(t, {
              variant: "h2-semibold",
              children: n == null ? void 0 : n.value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })
            }),
            (n == null ? void 0 : n.value) > 0 && e.jsx(t, {
              color: "text-tertiary",
              variant: "bs-semibold",
              children: "per month billed yearly"
            })
          ]
        }),
        e.jsx(s, {
          flexDirection: "column",
          display: "flex",
          gap: "spacing-sm",
          padding: "spacing-lg spacing-none spacing-none spacing-none",
          children: (_a = R(n == null ? void 0 : n.description)) == null ? void 0 : _a.map((i, a) => e.jsxs(s, {
            flexDirection: "row",
            display: "flex",
            gap: "spacing-xxs",
            children: [
              e.jsx($, {
                color: "icon-primary",
                size: 17
              }),
              e.jsx(s, {
                flexDirection: "row",
                display: "flex",
                gap: "spacing-xxxs",
                children: e.jsx(t, {
                  color: "text-primary",
                  variant: "bs-regular",
                  children: W(i)
                })
              })
            ]
          }, `${a}-plan-benefits-item-keys`))
        })
      ]
    });
  };
  De = ({ plan: n, modalControl: i, paymentId: a, account: r }) => {
    var _a;
    const [o, c] = m.useState(false), { mode: p } = X(), { isOpen: x, onClose: f } = i, w = Z(), { userPushSDKInstance: v } = ee((d) => d.user), A = async () => {
      c(true);
      try {
        return await v.channel.info(r) || null;
      } catch (d) {
        return console.error("Error fetching channel details:", d), null;
      }
    }, y = async () => {
      const d = await A();
      c(false), w(d ? `/channel/${r}?paymentId=${a}` : `/channel/create?paymentId=${a}`);
    };
    return e.jsx(N, {
      size: "medium",
      isOpen: x,
      onClose: f,
      acceptButtonProps: {
        children: "Get Started",
        onClick: () => y(),
        loading: o,
        disabled: o
      },
      cancelButtonProps: null,
      children: e.jsxs(s, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: [
          e.jsxs(s, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-md",
            alignItems: "center",
            children: [
              p === "light" ? e.jsx(we, {}) : e.jsx(ve, {}),
              e.jsxs(t, {
                textAlign: "center",
                variant: "h3-semibold",
                children: [
                  "Your ",
                  n == null ? void 0 : n.name,
                  " plan is now active"
                ]
              })
            ]
          }),
          e.jsxs(s, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-md",
            padding: "spacing-none spacing-none spacing-md spacing-none",
            alignItems: "center",
            children: [
              e.jsx(t, {
                color: "text-tertiary",
                variant: "bs-regular",
                children: "You now have access to the following features:"
              }),
              e.jsx(s, {
                display: "flex",
                flexDirection: "column",
                gap: "spacing-sm",
                children: (_a = R(n == null ? void 0 : n.description)) == null ? void 0 : _a.map((d, C) => e.jsxs(s, {
                  flexDirection: "row",
                  display: "flex",
                  gap: "spacing-xxs",
                  children: [
                    e.jsx($, {
                      color: "icon-tertiary",
                      size: 17
                    }),
                    e.jsx(s, {
                      flexDirection: "row",
                      display: "flex",
                      gap: "spacing-xxxs",
                      children: e.jsx(t, {
                        color: "text-primary",
                        variant: "bs-regular",
                        children: W(d)
                      })
                    })
                  ]
                }, `${C}-plan-benefits-item-keys`))
              })
            ]
          })
        ]
      })
    });
  };
  Ie = "0x0000000000000000000000000000000000000001";
  ke = [
    "function balanceOf(address owner) view returns (uint256)"
  ];
  Ae = [
    "function transfer(address to, uint256 amount) public returns (bool)"
  ];
  Te = async (n, i, a, r, o) => {
    if (o || r(), n !== Ie) try {
      const p = await new O(i, ke, a).balanceOf(n);
      return ne(p, 6);
    } catch (c) {
      throw console.error("Error fetching USDC balance:", c), c;
    }
  };
  Ee = async (n, i, a) => {
    var _a;
    try {
      const r = a.getSigner(), o = (_a = E) == null ? void 0 : _a.usdcTokenAddress, c = new O(o, Ae, r), p = se(n.toString(), 6), x = await c.transfer(i, p);
      console.log("Transaction sent:", x.hash);
      const f = await x.wait();
      return console.log("Transaction confirmed:", f), f;
    } catch (r) {
      throw console.error("Error sending USDC:", r), r;
    }
  };
  Be = async (n, i, a) => await a.getSigner(i).signMessage(n);
  Ue = ({ modalControl: n, plan: i, selectedPlanType: a }) => {
    const { isOpen: r, onClose: o } = n;
    return e.jsx(N, {
      size: "small",
      isOpen: r,
      onClose: o,
      acceptButtonProps: null,
      cancelButtonProps: null,
      children: e.jsxs(s, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "spacing-xxxs",
        children: [
          e.jsxs(s, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-sm",
            alignItems: "center",
            children: [
              e.jsx(F, {
                size: "large",
                variant: "primary"
              }),
              e.jsx(t, {
                textAlign: "center",
                variant: "h4-semibold",
                children: "Confirm purchase"
              })
            ]
          }),
          e.jsxs(s, {
            display: "flex",
            flexDirection: "column",
            gap: "spacing-md",
            alignItems: "center",
            children: [
              e.jsxs(t, {
                color: "text-tertiary",
                variant: "bs-regular",
                children: [
                  "Purchase Push Pro plan for ",
                  a === "12" ? ((i == null ? void 0 : i.value) * 12 * 0.85).toFixed(2) : i == null ? void 0 : i.value,
                  " ",
                  "USDC"
                ]
              }),
              e.jsx(t, {
                color: "text-tertiary",
                variant: "bs-regular",
                children: "Confirm the transaction in your wallet"
              })
            ]
          })
        ]
      })
    });
  };
  Le = ({ selectedPlan: n }) => {
    var _a;
    const i = [
      {
        label: "Yearly",
        key: "yearly",
        children: null
      },
      {
        label: "Monthly",
        key: "monthly",
        children: null
      }
    ], a = z(), r = z(), { account: o, isWalletConnected: c, connect: p, chainId: x } = ae(), f = ue(o, x), [w] = re(), v = w.get("type"), A = (l) => l === "yearly" || l === "monthly", [y, d] = m.useState(A(v) ? v : "monthly"), [C, j] = m.useState(false), [S, V] = m.useState(null), [U, b] = m.useState(null), [P, D] = m.useState(null), L = (n == null ? void 0 : n.value) ? (n == null ? void 0 : n.value) * (y === "yearly" ? 12 * 0.85 : 1) : 0, { mutate: q } = te(), { data: I, refetch: G } = be({
      paymentId: P
    });
    m.useEffect(() => {
      D(null), b(null), (async () => {
        var _a2;
        if (window.ethereum && o) {
          const g = new T(window.ethereum), u = await Te(o, (_a2 = E) == null ? void 0 : _a2.usdcTokenAddress, g, p, c);
          V(u);
        }
      })();
    }, [
      o,
      c
    ]), m.useEffect(() => {
      if (!P) return;
      const l = setInterval(() => {
        G(), console.log("retry fetching details");
      }, 5e3), g = setTimeout(() => {
        clearInterval(l), console.log("Stopped polling after 1 minute"), j(false);
      }, 6e4);
      return ((I == null ? void 0 : I.payment_status) === "SUCCESS" || (I == null ? void 0 : I.payment_status) === "FAILED") && (clearInterval(l), clearTimeout(g), (I == null ? void 0 : I.payment_status) === "SUCCESS" && (a.onClose(), r.open(), j(false))), () => {
        clearInterval(l), clearTimeout(g);
      };
    }, [
      P,
      I == null ? void 0 : I.payment_status
    ]);
    const H = () => {
      window.open("https://faucet.circle.com/", "_blank");
    }, Y = async () => {
      var _a2;
      c || await p(), j(true), a.open();
      const l = y === "yearly" ? (n == null ? void 0 : n.value) * 12 * 0.85 : n == null ? void 0 : n.value, g = new T(window.ethereum);
      try {
        const u = await K();
        if (!(u == null ? void 0 : u.success)) {
          console.error("Purchase failed:", u == null ? void 0 : u.error), b("Something went wrong while processing the purchase"), D(null), j(false), a.onClose();
          return;
        }
        await g.send("eth_requestAccounts", []), await Ee(l, (_a2 = E) == null ? void 0 : _a2.usdcRecipient, g);
      } catch (u) {
        D(null), console.error("Transaction failed:", u), (u == null ? void 0 : u.message.includes("User denied transaction")) ? (console.log("User rejected the transaction"), b("Something went wrong while processing the payment")) : (u == null ? void 0 : u.message.includes("transfer amount exceeds balance")) ? (console.log("Insufficient balance"), b("Insufficient balance")) : (console.log("Something went wrong while processing the payment"), b("Something went wrong while processing the payment")), j(false), a.onClose();
      }
    }, K = async () => {
      var _a2;
      try {
        const l = {
          body: {
            channel: f,
            pricingPlanId: (_a2 = n == null ? void 0 : n.id) == null ? void 0 : _a2.toString()
          }
        }, g = ge(JSON.stringify({
          channel: l.body.channel,
          content: l.body.pricingPlanId
        })), u = new T(window.ethereum), J = await Be(g, o, u);
        return new Promise((M) => {
          var _a3;
          q({
            channel: f,
            pricingPlanId: (_a3 = n == null ? void 0 : n.id) == null ? void 0 : _a3.toString(),
            currency: "USDC",
            network: x,
            verificationProof: J,
            email: h.values.email,
            duration: y === "yearly" ? "12" : "1"
          }, {
            onSuccess: (k) => {
              D(k == null ? void 0 : k.paymentId), M({
                success: true,
                data: k
              });
            },
            onError: (k) => {
              j(false), M({
                success: false,
                error: k
              });
            }
          });
        });
      } catch (l) {
        return console.error("Error in handlePurchase:", l), {
          success: false,
          error: l
        };
      }
    }, h = xe({
      initialValues: {
        email: ""
      },
      validationSchema: fe({
        email: ye().email("Invalid email address").required(je("Email"))
      }),
      onSubmit: Y
    });
    return e.jsxs(s, {
      display: "flex",
      flexDirection: "column",
      width: {
        initial: "50%",
        ml: "100%"
      },
      gap: "spacing-md",
      margin: {
        ml: "spacing-none spacing-none spacing-sm spacing-none"
      },
      css: B`
        box-sizing: border-box;
      `,
      children: [
        a.isOpen && e.jsx(Ue, {
          modalControl: a,
          plan: n,
          selectedPlanType: y === "yearly" ? "12" : "1"
        }),
        r.isOpen && e.jsx(De, {
          modalControl: r,
          plan: n,
          paymentId: P,
          account: o
        }),
        e.jsxs(s, {
          children: [
            e.jsx(t, {
              variant: "h3-semibold",
              children: "Summary"
            }),
            e.jsx(t, {
              color: "text-tertiary",
              variant: "bs-regular",
              children: "Each wallet can purchase a limited allocation of Nodes."
            })
          ]
        }),
        e.jsx("form", {
          onSubmit: h.handleSubmit,
          children: e.jsxs(s, {
            display: "flex",
            flexDirection: "column",
            padding: "spacing-lg spacing-md",
            borderRadius: "radius-lg",
            border: "border-sm solid stroke-secondary",
            backgroundColor: "surface-primary",
            gap: "spacing-lg",
            children: [
              e.jsxs(s, {
                display: "flex",
                flexDirection: "column",
                gap: "spacing-md",
                children: [
                  e.jsxs(s, {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    children: [
                      e.jsx(t, {
                        variant: "bl-semibold",
                        children: "Plan"
                      }),
                      e.jsxs(t, {
                        color: "text-secondary",
                        variant: "bl-bold",
                        children: [
                          "Push ",
                          n == null ? void 0 : n.name
                        ]
                      })
                    ]
                  }),
                  e.jsxs(s, {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    children: [
                      e.jsx(t, {
                        variant: "bl-semibold",
                        children: "Duration"
                      }),
                      e.jsx(ie, {
                        items: i,
                        activeKey: y,
                        variant: "fill",
                        onChange: (l) => d(l),
                        alignTabs: "center"
                      })
                    ]
                  })
                ]
              }),
              e.jsx(oe, {
                label: "Email Address",
                value: h.values.email,
                onChange: h.handleChange("email"),
                error: h.touched.email && !!h.errors.email,
                errorMessage: h.touched.email ? h.errors.email : ""
              }),
              e.jsxs(s, {
                display: "flex",
                flexDirection: "column",
                gap: "spacing-lg",
                children: [
                  e.jsxs(s, {
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "radius-sm",
                    backgroundColor: "surface-tertiary",
                    padding: "spacing-xs spacing-sm",
                    children: [
                      e.jsx(t, {
                        variant: "h5-semibold",
                        children: "Total Price"
                      }),
                      e.jsxs(t, {
                        variant: "h3-bold",
                        children: [
                          L.toFixed(2),
                          " USDC"
                        ]
                      }),
                      S && c && e.jsxs(t, {
                        color: "text-tertiary",
                        variant: "bs-regular",
                        textAlign: "right",
                        children: [
                          "Balance: ",
                          S
                        ]
                      })
                    ]
                  }),
                  S && parseInt(S) < L && ((_a = le) == null ? void 0 : _a.appEnv) != "prod" && e.jsx(_, {
                    style: {
                      alignSelf: "center"
                    },
                    to: "#",
                    children: e.jsxs(s, {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "spacing-xxxs",
                      onClick: H,
                      children: [
                        e.jsx(t, {
                          color: "text-brand-medium",
                          variant: "bm-semibold",
                          children: "Get more USDC"
                        }),
                        e.jsx(Se, {
                          size: 16,
                          color: "icon-brand-medium"
                        })
                      ]
                    })
                  })
                ]
              }),
              e.jsxs(s, {
                display: "flex",
                flexDirection: "column",
                gap: "spacing-md",
                children: [
                  U && e.jsx(ce, {
                    variant: "error",
                    heading: U
                  }),
                  e.jsx(s, {
                    width: "100%",
                    children: e.jsx(de, {
                      loading: C,
                      disabled: C,
                      type: "submit",
                      block: true,
                      children: "Purchase"
                    })
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  };
  Me = ({ index: n }) => {
    const { data: i, isLoading: a } = pe(), r = i == null ? void 0 : i.find((o) => (o == null ? void 0 : o.id) == he.toNumber(n));
    return a ? e.jsx(s, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      children: e.jsx(F, {
        size: "large",
        variant: "primary"
      })
    }) : r ? e.jsxs(s, {
      flexDirection: {
        initial: "row",
        ml: "column"
      },
      display: "flex",
      gap: {
        ml: "spacing-md",
        initial: "spacing-xxxl"
      },
      width: "100%",
      css: B`
        padding: 45px 0px 0px 0px;
        box-sizing: border-box;
      `,
      children: [
        e.jsx(Pe, {
          selectedPlan: r
        }),
        e.jsx(Le, {
          selectedPlan: r
        })
      ]
    }) : e.jsx(s, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      children: e.jsx(t, {
        color: "text-primary",
        variant: "h3-semibold",
        children: "Plan not found"
      })
    });
  };
  qe = () => {
    let { id: n } = me();
    return e.jsx(Ce, {
      children: e.jsx(Me, {
        index: n
      })
    });
  };
});
export {
  __tla,
  qe as default
};
