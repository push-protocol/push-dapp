import { eS as I, ee as A, el as E, ea as e, eT as h, eU as u, eV as o, eW as m, eX as a, eY as c, eZ as p, e_ as S, ej as x, eg as T, ei as D, e$ as w, f0 as k, f1 as N, __tla as __tla_0 } from "./index-UiBHnyIz.js";
let U;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function y() {
    I.pageview("/faq");
    const s = A(), [n, b] = E.useState([]), t = (f) => {
      let j = [
        ...n
      ];
      j[f] = !j[f], b(j);
    };
    return e.jsx($, {
      children: e.jsxs(h, {
        alignItems: "stretch",
        children: [
          e.jsx(h, {
            margin: "0px 0px 0px 0px",
            children: e.jsxs(u, {
              children: [
                e.jsxs(o, {
                  weight: "400",
                  size: "32px",
                  color: s.color,
                  children: [
                    "Frequently Asked",
                    " "
                  ]
                }),
                e.jsx(o, {
                  bg: s.default.color,
                  color: s.default.bg,
                  weight: "600",
                  padding: "0px 8px",
                  children: "Questions"
                })
              ]
            })
          }),
          e.jsx(h, {
            margin: "0px 0px 0px 0px",
            alignItems: "flex-start",
            children: e.jsx(u, {
              textTransform: "uppercase",
              spacing: "normal",
              margin: "20px 0px 20px 0px",
              size: "1.6rem",
              children: e.jsx(m, {
                weight: "600",
                padding: "8px 20px",
                background: s.default.secondaryBg,
                color: s.default.color,
                borderRadius: `${a.ADJUSTMENTS.RADIUS.SMALL}`,
                children: "For Users"
              })
            })
          }),
          e.jsx(h, {
            children: e.jsxs(h, {
              margin: "0px 0px 20px 0px",
              children: [
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(1);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "What are Channels?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[1] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: "If you're a protocol or company seeking to share updates with your users, you can use this service. Users have the option to opt in to receive these updates."
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(2);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "Is Channel Creation a compulsory process?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[2] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: "Channel creation is not mandatory. It's primarily essential for protocols or services aiming to send notifications to their users. As a user focused solely on staying updated with the Web3 world and receiving notifications, creating a channel is unnecessary for you."
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(3);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "How do I opt into a Channel?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[3] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: "To join a Channel, head to the Channels section on the left. There, you'll find various protocols or dapps listed. Simply click 'Opt-In' next to the one you're interested in, and by signing a transaction, you'll start receiving the latest updates and notifications."
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(4);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "Does Opting-in to a Channel require gas fees?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[4] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: "Opting into a Channel doesn't involve gas fees. Subscribing to a channel is gasless\u2014all you need to do is sign a transaction to be opted in."
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(5);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "Do I need ETHER to interact with the DAPP?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[5] && e.jsxs(i, {
                      children: [
                        e.jsx(o, {
                          children: "You don't need Ether to engage with the DApp. Our gasless mechanisms enable most operations without requiring Ether. For everyday users, there's no need for Ether to use our DApp."
                        }),
                        e.jsx(o, {
                          children: "Ether or funds become necessary only when creating a Channel.."
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(6);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "How do I receive notifications?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[6] && e.jsxs(i, {
                      children: [
                        e.jsx(o, {
                          children: "In order to receive notifications seamlessly, Push (EPNS) provides 3 different crypto front-ends"
                        }),
                        e.jsx(g, {
                          children: e.jsx(d, {
                            href: "https://app.push.org/",
                            target: "_blank",
                            children: "Push (EPNS) Dapp"
                          })
                        }),
                        e.jsx(g, {
                          mtop: "0.2rem",
                          children: e.jsx(d, {
                            href: "https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg",
                            target: "_blank",
                            children: "Browser Extension"
                          })
                        }),
                        e.jsxs(g, {
                          mtop: "0.2rem",
                          children: [
                            e.jsx(d, {
                              href: "https://play.google.com/store/apps/details?id=io.epns.epns",
                              target: "_blank",
                              children: e.jsx("span", {
                                style: {
                                  marginRight: "0.3rem"
                                },
                                children: "Android"
                              })
                            }),
                            " ",
                            e.jsx("span", {
                              style: {
                                marginRight: "0.3rem"
                              },
                              children: "and"
                            }),
                            " ",
                            e.jsx(d, {
                              href: "https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",
                              target: "_blank",
                              children: "IOS Apps"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(7);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "What are Spaces?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[7] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: "Spaces are live audio chat rooms on our Dapp, enabling real-time conversations among users."
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(8);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: " How do I create a space? "
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[8] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: 'To create a space, click on Spaces on the left side and select "Create Your Space." From there, you can add the users you wish to invite to join the space.'
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(9);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: " Does creating a Space require gas fees? "
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[9] && e.jsx(i, {
                      children: e.jsx(o, {
                        children: "Creating or joining a Space does not require any gas fees. Users can seamlessly create or join Spaces without any gas fees."
                      })
                    })
                  ]
                })
              ]
            })
          }),
          e.jsx(h, {
            margin: "0px 0px 0px 0px",
            alignItems: "flex-start",
            children: e.jsx(u, {
              textTransform: "uppercase",
              spacing: "normal",
              margin: "30px 0px 20px 0px",
              size: "1.6rem",
              children: e.jsx(m, {
                weight: "600",
                padding: "8px 20px",
                background: s.default.secondaryBg,
                color: s.default.color,
                borderRadius: `${a.ADJUSTMENTS.RADIUS.SMALL}`,
                children: "For Developers"
              })
            })
          }),
          e.jsx(h, {
            children: e.jsxs(h, {
              margin: "0px 0px 20px 0px",
              children: [
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(10);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "How do I create a Channel?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[10] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "Easiest way to create a channel is from our",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://app.push.org/dashboard",
                            children: "Push (EPNS) Dapp"
                          }),
                          " ",
                          "itself. Find the entire channel creation process",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/notifications/build/create-channel/",
                            children: "here"
                          }),
                          "."
                        ]
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(11);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "What are the different types of Notifications?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[11] && e.jsxs(i, {
                      children: [
                        e.jsx(o, {
                          children: "The 3 main types of notifications right now:"
                        }),
                        e.jsxs(o, {
                          children: [
                            e.jsx("b", {
                              children: "Broadcast Notification"
                            }),
                            ": ",
                            e.jsx("i", {
                              children: "Sent out to all Subscribers of a Channel"
                            })
                          ]
                        }),
                        e.jsxs(o, {
                          children: [
                            e.jsx("b", {
                              children: "Subset Notification"
                            }),
                            ": ",
                            e.jsx("i", {
                              children: "Sent out to a group of all the subscribers"
                            })
                          ]
                        }),
                        e.jsxs(o, {
                          children: [
                            e.jsx("b", {
                              children: "Targeted Notification"
                            }),
                            ": ",
                            e.jsx("i", {
                              children: "Sent out to a specific subscriber of your channel"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(12);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "How do I send notifications?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[12] && e.jsxs(i, {
                      children: [
                        e.jsx(o, {
                          children: "You can send a notification through various methods: "
                        }),
                        e.jsxs("ul", {
                          children: [
                            e.jsx("li", {
                              children: "Using the DAPP"
                            }),
                            e.jsx("li", {
                              children: "Via the Back-end"
                            }),
                            e.jsx("li", {
                              children: "Utilizing Smart Contracts"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(13);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "How do I use Backend-Sdk and Showrunners?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[13] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "Push (EPNS) Documentation hub contains in-depth details on how to use our",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/hackers/push-sdk/",
                            children: "Backend SDKs"
                          }),
                          " ",
                          "and",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/notifications/showrunners-scaffold/",
                            children: "Showrunners"
                          }),
                          ". Check them out."
                        ]
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(14);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "How do I use the Frontend-SDK?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[14] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "Push (EPNS) Documentation hub contains in-depth details on how to use our",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/hackers/push-sdk/",
                            children: "Frontend SDK"
                          }),
                          "."
                        ]
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(15);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: "Where can I find Developer Documentations?"
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[15] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "All of our documentation can be found in our",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/#techdocs",
                            children: "Push (EPNS) Documentation HUB"
                          }),
                          "."
                        ]
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(16);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: " How do I integrate Chat? "
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[16] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "You can integrate chat functionality by following the instructions outlined in this documentation:",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/chat",
                            children: "Push (EPNS) Documentation for Chat"
                          }),
                          "."
                        ]
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(17);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: " How do I integrate Video? "
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[17] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "You can integrate chat functionality by following the instructions outlined in this documentation:",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/docs/video",
                            children: "Push (EPNS) Documentation for Video"
                          }),
                          "."
                        ]
                      })
                    })
                  ]
                }),
                e.jsxs(l, {
                  children: [
                    e.jsxs(r, {
                      onClick: () => {
                        t(18);
                      },
                      hover: "#e20880",
                      children: [
                        e.jsx(o, {
                          color: s.color,
                          children: " How do I integrate Spaces? "
                        }),
                        e.jsx(c, {
                          size: 20,
                          color: "#ddd"
                        })
                      ]
                    }),
                    n[18] && e.jsx(i, {
                      children: e.jsxs(o, {
                        children: [
                          "You can integrate chat functionality by following the instructions outlined in this documentation:",
                          " ",
                          e.jsx(d, {
                            target: "_blank",
                            href: "https://push.org/spaces",
                            children: "Push (EPNS) Documentation for Spaces"
                          }),
                          "."
                        ]
                      })
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    });
  }
  const $ = x(T)`
  align-items: center;
  align-self: center;
  background: ${(s) => s.theme.default.bg};
  border-radius: ${a.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${a.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${p.MINI_MODULES.DESKTOP.RIGHT} - ${p.MINI_MODULES.DESKTOP.LEFT} -
      ${a.ADJUSTMENTS.PADDING.BIG} - ${a.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${a.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${a.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${S.laptop} {
    margin: ${a.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${a.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${p.MINI_MODULES.TABLET.RIGHT} - ${p.MINI_MODULES.TABLET.LEFT} -
        ${a.ADJUSTMENTS.PADDING.DEFAULT} - ${a.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${S.mobileM} {
    margin: ${a.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${a.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${p.MINI_MODULES.MOBILE.RIGHT} - ${p.MINI_MODULES.MOBILE.LEFT} -
        ${a.ADJUSTMENTS.PADDING.DEFAULT} - ${a.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`, g = x.span`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  color: black;
  font-weight: 300;
  margin-top: ${(s) => s.mtop || "0px"};
`;
  x.h2`
  color: ${(s) => s.theme.scheme === "dark" ? s.theme.color : s.color || "#000"};
  text-shadow: 2px 0 ${(s) => s.theme.scheme === "dark" ? s.theme.color : s.color || "#000"};
  font-weight: ${(s) => s.weight || 600};
  font-size: ${(s) => s.size || "2rem"};
  text-transform: ${(s) => s.textTransform || "inherit"};
  margin: ${(s) => s.margin || "20px 0px"};
  padding: ${(s) => s.padding || "0px"};
  letter-spacing: ${(s) => s.spacing || "normal"};
  font-family: ${(s) => s.family || "'FK Grotesk Neu', 'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${(s) => s.textAlign || "inherit"};
  margin-left: 20px;
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
  let r, i, l, d, M;
  r = x(w)`
  align-items: stretch;
  align-self: stretch;
`;
  i = x(D)`
  align-items: stretch;
  align-self: stretch;
`;
  l = x(D)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${(s) => s.theme.default.border};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  & ${r} {
    background: ${(s) => s.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;
    & ${o} {
      font-weight: 400;
      letter-spacing: normal;
      margin-left: 10px;
      flex: 1;
    }
    &:hover {
      & ${o} {
        color: #fff;
      }
    }
  }
  & ${i} {
    border: 1px solid ${(s) => s.theme.default.border};
    border-top: 1px solid ${(s) => s.theme.default.border};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin: -1px;
    margin-top: 0px;
    align-items: flex-start;
    background: ${(s) => s.theme.qnaBg};
    & ${o} {
      line-height: 1.5em;
      margin: 10px;
      color: ${(s) => s.theme.default.color};
      font-size: 1.05em;
    }
  }
`;
  d = x(k)`
  color: #e20880;
  font-weight: 500;
`;
  U = () => e.jsx(M, {
    children: e.jsx(y, {})
  });
  M = x(N)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;
});
export {
  __tla,
  U as default
};
