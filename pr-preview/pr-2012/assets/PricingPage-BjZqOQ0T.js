import { ea as i, er as p, e7 as g, eb as e, ep as s, g1 as c, ev as h, gR as y, eq as l, gC as f, es as b, gJ as w, gz as v, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { A as k, __tla as __tla_1 } from "./Add-BZFGAjnm.js";
import { A as C, D as P, __tla as __tla_2 } from "./Dash-Dmm3Y5zP.js";
import { T as D, __tla as __tla_3 } from "./Tick-DYSjbmUh.js";
import { p as L, f as A, __tla as __tla_4 } from "./index-GZSO-HA3.js";
import { C as S, __tla as __tla_5 } from "./ContentLayout-BGhKIoso.js";
let N;
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
  let T, M, z, F, x, _, B, Q;
  T = (n) => {
    const { svgProps: o, ...t } = n;
    return i.jsx(p, {
      componentName: "Front",
      icon: i.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...o,
        children: [
          i.jsx("path", {
            d: "M19.0518 25.8182L28.87 16L19.0518 6.18181",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          i.jsx("path", {
            d: "M4.87004 16L28.3246 16",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      }),
      ...t
    });
  };
  M = (n) => {
    const { svgProps: o, ...t } = n;
    return i.jsx(p, {
      componentName: "Meteor",
      icon: i.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 16 16",
        fill: "none",
        ...o,
        children: [
          i.jsxs("g", {
            "clip-path": "url(#clip0_10640_33711)",
            children: [
              i.jsx("path", {
                d: "M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              i.jsx("path", {
                d: "M10.5 11L13.5 8",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              i.jsx("path", {
                d: "M10 8L11.5 6.5",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              i.jsx("path", {
                d: "M13 5L14 4",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              i.jsx("path", {
                d: "M8 6L12.5 1.5",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              i.jsx("path", {
                d: "M8.82845 12.8281C8.45906 13.2085 8.01773 13.5116 7.53014 13.7199C7.04254 13.9281 6.51841 14.0374 5.98822 14.0412C5.45802 14.0451 4.93235 13.9435 4.44176 13.7424C3.95118 13.5413 3.50547 13.2447 3.13056 12.8698C2.75564 12.4949 2.45901 12.0491 2.2579 11.5586C2.05679 11.068 1.95522 10.5423 1.95909 10.0121C1.96297 9.48191 2.07221 8.95778 2.28047 8.47019C2.48873 7.98259 2.79185 7.54127 3.1722 7.17188L8.34345 2",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]
          }),
          i.jsx("defs", {
            children: i.jsx("clipPath", {
              id: "clip0_10640_33711",
              children: i.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white"
              })
            })
          })
        ]
      }),
      ...t
    });
  };
  z = ({}) => {
    const [n, o] = g.useState(null);
    return i.jsxs(e, {
      flexDirection: {
        tb: "column",
        initial: "row",
        ml: "column"
      },
      display: "flex",
      width: "100%",
      gap: {
        ml: "spacing-lg",
        initial: "spacing-md"
      },
      children: [
        i.jsxs(e, {
          flexDirection: "column",
          display: "flex",
          gap: "spacing-md",
          alignItems: {
            initial: "flex-start",
            tb: "center",
            ml: "center"
          },
          width: {
            initial: "30%",
            tb: "100%",
            ml: "100%"
          },
          textAlign: {
            ml: "center"
          },
          children: [
            i.jsx(s, {
              color: "text-primary",
              variant: "h2-semibold",
              children: "Frequently Asked Questions"
            }),
            i.jsx(c, {
              target: "_blank",
              to: "https://discord.com/invite/pushprotocol",
              children: i.jsx(h, {
                size: "large",
                trailingIcon: i.jsx(C, {
                  size: 24
                }),
                children: "Ask us on Discord"
              })
            })
          ]
        }),
        i.jsxs(e, {
          display: "flex",
          flexDirection: "column",
          width: {
            initial: "70%",
            tb: "100%"
          },
          gap: "spacing-md",
          children: [
            i.jsx(e, {
              children: y.map((t, a) => i.jsxs(e, {
                display: "flex",
                flexDirection: "column",
                padding: a === 0 ? "spacing-none spacing-none spacing-md spacing-none" : "spacing-md spacing-none",
                width: "auto",
                gap: "spacing-sm",
                css: l`
                border-bottom: var(--border-sm) solid var(--stroke-tertiary);
              `,
                children: [
                  i.jsxs(e, {
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                    justifyContent: "space-between",
                    children: [
                      i.jsx(s, {
                        color: "text-primary",
                        variant: "h4-regular",
                        children: t == null ? void 0 : t.question
                      }),
                      i.jsx(e, {
                        css: l`
                    cursor: pointer;
                  `,
                        children: n === (t == null ? void 0 : t.id) ? i.jsx(P, {
                          color: "icon-primary",
                          onClick: () => o(null),
                          size: 28
                        }) : i.jsx(k, {
                          color: "icon-primary",
                          onClick: () => o(t == null ? void 0 : t.id),
                          size: 28
                        })
                      })
                    ]
                  }),
                  n && n === (t == null ? void 0 : t.id) && t.answer
                ]
              }, `${a}-faq-item-keys`))
            }),
            i.jsx(e, {
              alignSelf: "flex-end",
              display: "flex",
              flexDirection: "column",
              children: i.jsx(c, {
                target: "_blank",
                to: "https://push.org/faq/",
                children: i.jsxs(e, {
                  display: "flex",
                  flexDirection: "row",
                  gap: "spacing-xxs",
                  alignItems: "center",
                  children: [
                    i.jsx(s, {
                      color: "text-primary",
                      variant: "bm-semibold",
                      children: "Explore FAQs"
                    }),
                    i.jsx(T, {
                      color: "icon-primary",
                      size: 16
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
  F = ({ type: n }) => {
    const { data: o, isLoading: t } = f(), a = t ? Array(4).fill(0) : o, u = [
      {
        id: 1,
        description: "For casual degens"
      },
      {
        id: 2,
        description: "For individuals"
      },
      {
        id: 3,
        description: "For growing apps"
      },
      {
        id: 4,
        description: "For advanced solutions"
      }
    ];
    return i.jsx(e, {
      flexDirection: {
        initial: "row",
        ml: "column"
      },
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      gap: "spacing-xs",
      css: l`
        @media (max-width: 1220px) {
          display: grid;
          gap: var(--spacing-xs);
          grid-template-columns: repeat(3, minmax(0px, 1fr));
        }

        @media (max-width: 768px) {
          display: grid;
          gap: var(--spacing-xs);
          grid-template-columns: repeat(2, minmax(0px, 1fr));
        }

        @media (max-width: 425px) {
          grid-template-columns: repeat(1, minmax(0px, 1fr));
        }
      `,
      children: a == null ? void 0 : a.map((r, m) => {
        var _a, _b;
        return i.jsx(b, {
          isLoading: t,
          borderRadius: "radius-lg",
          height: "542px",
          children: i.jsxs(e, {
            display: "flex",
            flexDirection: "column",
            padding: "spacing-md",
            gap: "spacing-md",
            border: "border-sm solid stroke-tertiary",
            borderRadius: "radius-lg",
            width: {
              initial: "296px",
              ml: "100%"
            },
            backgroundColor: (r == null ? void 0 : r.name) === "Pro" ? "surface-primary" : "surface-transparent",
            css: l`
              box-sizing: border-box;
              @media (max-width: 1220px) {
                width: 100%;
              }
            `,
            children: [
              i.jsxs(e, {
                display: "flex",
                flexDirection: "column",
                children: [
                  i.jsxs(e, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "spacing-xxs",
                    children: [
                      i.jsx(s, {
                        color: "text-primary",
                        variant: "h3-semibold",
                        children: r == null ? void 0 : r.name
                      }),
                      (r == null ? void 0 : r.name) === "Pro" && i.jsx(w, {
                        icon: i.jsx(M, {
                          size: 16
                        }),
                        label: "Popular",
                        variant: "brand",
                        size: "medium"
                      })
                    ]
                  }),
                  i.jsx(s, {
                    color: "text-secondary",
                    variant: "bm-regular",
                    children: (_a = u == null ? void 0 : u.find((d) => d.id === (r == null ? void 0 : r.id))) == null ? void 0 : _a.description
                  })
                ]
              }),
              i.jsxs(e, {
                flexDirection: "column",
                display: "flex",
                width: "auto",
                gap: "spacing-lg",
                children: [
                  i.jsxs(e, {
                    children: [
                      i.jsx(s, {
                        color: "text-primary",
                        variant: "h2-semibold",
                        children: (r == null ? void 0 : r.value) >= 0 ? (r == null ? void 0 : r.value) > 0 ? (_b = n == "monthly" ? r == null ? void 0 : r.value : (r == null ? void 0 : r.value) * 0.85) == null ? void 0 : _b.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD"
                        }) : "Free" : "Talk to us!"
                      }),
                      (r == null ? void 0 : r.value) > 0 && i.jsxs(s, {
                        color: "text-tertiary",
                        variant: "bs-semibold",
                        children: [
                          (r.id == "2" || r.id == "3") && "per month",
                          " ",
                          n == "yearly" && "billed yearly"
                        ]
                      }),
                      (r == null ? void 0 : r.id) == "4" && i.jsx(s, {
                        color: "text-tertiary",
                        variant: "bs-semibold",
                        children: "Custom pricing available"
                      })
                    ]
                  }),
                  i.jsx(c, {
                    to: (r == null ? void 0 : r.value) && (r == null ? void 0 : r.value) > 0 ? `/pricing/${r == null ? void 0 : r.id}?type=${n}` : "#",
                    children: i.jsx(h, {
                      block: true,
                      variant: (r == null ? void 0 : r.value) === 0 ? "outline" : (r == null ? void 0 : r.name) === "Pro" ? "primary" : "tertiary",
                      children: r.id == "4" ? "Contact Sales" : "Get Started"
                    })
                  })
                ]
              }),
              i.jsx(e, {
                flexDirection: "column",
                display: "flex",
                gap: "spacing-sm",
                padding: "spacing-none spacing-none spacing-md spacing-none",
                children: L(r == null ? void 0 : r.description).map((d, j) => i.jsxs(e, {
                  flexDirection: "row",
                  display: "flex",
                  gap: "spacing-xxs",
                  children: [
                    i.jsx(D, {
                      color: "icon-primary",
                      size: 17
                    }),
                    i.jsx(e, {
                      flexDirection: "row",
                      display: "flex",
                      gap: "spacing-xxxs",
                      children: i.jsx(s, {
                        color: "text-primary",
                        variant: "bs-regular",
                        children: A(d)
                      })
                    })
                  ]
                }, `${j}-plan-benefits-item-keys`))
              })
            ]
          }, `${m}-pricing-plan-key`)
        });
      })
    });
  };
  x = ({ type: n }) => i.jsxs(e, {
    flexDirection: "column",
    display: "flex",
    width: "auto",
    gap: "spacing-xl",
    children: [
      i.jsxs(e, {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        gap: "spacing-xxs",
        children: [
          i.jsx(s, {
            color: "text-primary",
            variant: "bm-semibold",
            children: "Save"
          }),
          i.jsx(s, {
            color: "text-brand-medium",
            variant: "bm-semibold",
            children: "15%"
          }),
          i.jsx(s, {
            color: "text-primary",
            variant: "bm-semibold",
            children: "on selecting a yearly plan"
          })
        ]
      }),
      i.jsx(F, {
        type: n
      })
    ]
  });
  _ = () => {
    const n = [
      {
        label: "Yearly",
        key: "yearly",
        children: i.jsx(x, {
          type: "yearly"
        })
      },
      {
        label: "Monthly",
        key: "monthly",
        children: i.jsx(x, {
          type: "monthly"
        })
      }
    ], [o, t] = g.useState(n[1].key);
    return i.jsx(e, {
      width: "",
      children: i.jsx(v, {
        items: n,
        activeKey: o,
        variant: "fill",
        onChange: (a) => t(a),
        alignTabs: "center"
      })
    });
  };
  B = () => i.jsxs(e, {
    flexDirection: "column",
    display: "flex",
    width: {
      initial: "auto",
      ml: "357px"
    },
    gap: {
      initial: "spacing-xl"
    },
    children: [
      i.jsxs(e, {
        children: [
          i.jsx(s, {
            color: "text-primary",
            variant: "h1-semibold",
            textAlign: "center",
            children: "Built to scale with your app."
          }),
          i.jsx(s, {
            color: "text-primary",
            variant: "h1-semibold",
            textAlign: "center",
            children: "Unlock the power of web3 notifications."
          }),
          i.jsx(s, {
            color: "text-primary",
            variant: "h4-regular",
            textAlign: "center",
            children: "Choose a plan that fits your needs."
          })
        ]
      }),
      i.jsx(e, {
        children: i.jsx(_, {})
      }),
      i.jsxs(e, {
        display: "inline",
        flexDirection: "row",
        alignSelf: "center",
        gap: "spacing-xxxs",
        padding: "spacing-lg spacing-none spacing-none spacing-none",
        children: [
          i.jsx(s, {
            color: "text-primary",
            variant: "bl-regular",
            as: "span",
            children: "Have more questions? Get in touch with our"
          }),
          i.jsxs(c, {
            target: "_blank",
            to: "#",
            textProps: {
              variant: "bl-bold",
              as: "span",
              css: l`
              text-decoration-line: underline;
            `
            },
            children: [
              " ",
              "sales team."
            ]
          })
        ]
      })
    ]
  });
  Q = () => i.jsxs(e, {
    flexDirection: "column",
    display: "flex",
    width: {
      initial: "auto",
      ml: "357px"
    },
    height: "100%",
    css: l`
        gap: 232px;
        padding: 120px var(--spacing-none);
      `,
    children: [
      i.jsx(B, {}),
      i.jsx(z, {})
    ]
  });
  N = () => i.jsx(S, {
    children: i.jsx(Q, {})
  });
});
export {
  __tla,
  N as default
};
