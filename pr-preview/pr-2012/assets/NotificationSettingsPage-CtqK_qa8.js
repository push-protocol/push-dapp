import { ea as t, er as Z, f_ as X, hg as ee, e5 as E, eb as s, ep as f, ev as A, es as te, gG as W, h9 as re, hh as ie, hb as ne, hc as $, hd as ae, h6 as se, e6 as K, eQ as le, h7 as oe, e8 as ue, e7 as w, eP as ce, e9 as U, fE as de, g0 as pe, ej as ge, gr as M, h4 as me, h5 as he, gS as z, eq as fe, fY as xe, gC as be, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { C as we, __tla as __tla_1 } from "./ContentLayout-CMvbJl9T.js";
import { u as je, __tla as __tla_2 } from "./useDisclosure-ODhnk-X-.js";
import { C as Se, __tla as __tla_3 } from "./ChannelDashboardNullState-3Zsl6sOP.js";
import { A as ye, __tla as __tla_4 } from "./Add-DZK1B-7Z.js";
import { u as Ne, S as ve, g as Ce, a as ke, __tla as __tla_5 } from "./StakingVariant-DhW8W7sL.js";
import { u as Me, c as Re, F as Ve, d as g, e as B, a as Pe, f as _, b as De, __tla as __tla_6 } from "./index.esm-BAVu81oq.js";
import { c as V, a as C, d as H } from "./Common.form-NbJ1DVkQ.js";
let nt;
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
  const Ae = (e) => {
    const { svgProps: r, ...n } = e;
    return t.jsx(Z, {
      componentName: "Pencil",
      icon: t.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...r,
        children: [
          t.jsx("path", {
            d: "M8.47489 20.25H4.46739C4.27712 20.25 4.09465 20.1744 3.96012 20.0399C3.82558 19.9053 3.75 19.7229 3.75 19.5326V15.5251C3.75009 15.3351 3.82555 15.1529 3.95984 15.0185L15.0183 3.95995C15.1529 3.82552 15.3353 3.75 15.5254 3.75C15.7156 3.75 15.898 3.82552 16.0325 3.95995L20.04 7.96476C20.1745 8.09928 20.25 8.28168 20.25 8.47186C20.25 8.66204 20.1745 8.84444 20.04 8.97896L8.98154 20.0402C8.84711 20.1744 8.66489 20.2499 8.47489 20.25Z",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          t.jsx("path", {
            d: "M12.3589 6.61963L17.3806 11.6413",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      }),
      ...n
    });
  }, Ee = async ({ userPushSDKInstance: e, settings: r }) => await e.channel.setting(r), Le = () => X({
    mutationKey: [
      ee
    ],
    mutationFn: Ee
  }), G = {
    type: 1,
    default: 0,
    description: "",
    index: 0
  };
  function J(e, r) {
    if (e === r) return true;
    if (typeof e != "object" || typeof r != "object") return false;
    const n = Object.keys(e), i = Object.keys(r);
    return n.length !== i.length ? false : n.every((a) => J(e[a], r[a]));
  }
  let Ie, Fe, Te, q, Be, He, qe, Ue, O, Oe, We, $e, ze, _e, Ke, Ge, Je;
  Ie = ({ modalControl: e, setSettingsToEdit: r }) => {
    const { open: n } = e, { isWalletConnected: i, connect: a } = E(), c = () => i ? n() : a();
    return t.jsxs(s, {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "100%",
      children: [
        t.jsxs(s, {
          children: [
            t.jsx(f, {
              variant: "h4-semibold",
              color: "text-primary",
              children: "Notification Settings"
            }),
            t.jsx(f, {
              variant: "bs-regular",
              color: "text-tertiary",
              children: "Add, Edit or Remove Notification Settings"
            })
          ]
        }),
        t.jsx(A, {
          size: "extraSmall",
          variant: "tertiary",
          leadingIcon: t.jsx(ye, {}),
          onClick: () => {
            r(G), c();
          },
          children: "Add Setting"
        })
      ]
    });
  };
  Fe = ({ setting: e, modalControl: r, loadingSettings: n, setSettingsToEdit: i, handleDeleteSetting: a }) => {
    const { open: c } = r;
    return t.jsxs(s, {
      display: "flex",
      width: "100%",
      padding: "spacing-sm spacing-none",
      justifyContent: "space-between",
      children: [
        t.jsx(te, {
          isLoading: n,
          height: "20px",
          width: "100px",
          children: t.jsxs(s, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            gap: "spacing-xxs",
            children: [
              t.jsx(f, {
                variant: "bs-regular",
                color: "text-primary",
                children: e.description
              }),
              e.type == 2 && t.jsx(W, {
                children: "Range"
              }),
              e.type == 3 && t.jsx(W, {
                children: "Multi-Range"
              })
            ]
          })
        }),
        t.jsx(re, {
          overlay: t.jsxs(ne, {
            children: [
              t.jsx($, {
                label: "Edit",
                icon: t.jsx(Ae, {
                  size: 24
                }),
                onClick: () => {
                  i(e), c();
                }
              }),
              t.jsx($, {
                label: "Remove",
                icon: t.jsx(ae, {
                  size: 24
                }),
                onClick: () => {
                  a(e);
                }
              })
            ]
          }),
          children: t.jsx(s, {
            cursor: "pointer",
            children: t.jsx(ie, {})
          })
        })
      ]
    });
  };
  Te = ({ newSettings: e, loadingSettings: r, modalControl: n, setSettingsToEdit: i, handleDeleteSetting: a, handleSettingsChange: c }) => t.jsx(s, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    children: e.map((y, N) => t.jsxs(s, {
      children: [
        t.jsx(Fe, {
          loadingSettings: r,
          setting: y,
          modalControl: n,
          setSettingsToEdit: i,
          handleDeleteSetting: a,
          handleSettingsChange: c
        }),
        t.jsx(se, {})
      ]
    }, N))
  });
  q = 50;
  Be = ({ newSettings: e, channelSettings: r }) => {
    const n = K(), { account: i, provider: a, wallet: c, isWalletConnected: y, connect: N } = E(), { userPushSDKInstance: j } = le((p) => p.user), { handleConnectWalletAndEnableProfile: S } = oe(), { refetchChannelDetails: o } = ue(), [x, l] = w.useState(0), [m, b] = w.useState(""), [v, k] = w.useState(0), R = async () => {
      const p = await ke({
        address: i,
        provider: a
      });
      k(p);
    }, P = async () => {
      const p = await Ce({
        address: i,
        provider: a,
        contractAddress: de.epnscore
      });
      l(parseInt(p));
    };
    w.useEffect(() => {
      !i || !a || (P(), R());
    }, [
      i,
      a
    ]);
    const { mutate: L, isPending: D } = Ne(), I = async () => {
      if (!a) return;
      if (!y) {
        N();
        return;
      }
      b("");
      const p = a.getSigner(i), u = pe((q - x).toString(), 18);
      L({
        noOfTokenToApprove: u,
        signer: p
      }, {
        onSuccess: () => {
          P();
        },
        onError: (d) => {
          console.log("Error in Approving PUSH", d), d.code == "ACTION_REJECTED" ? b("User rejected signature. Please try again.") : b("Error in approving PUSH Tokens");
        }
      });
    }, { mutate: F, isPending: T } = Le(), Q = async () => {
      let p = j;
      if (!p.signer && (p = await S({
        wallet: c
      }), !p)) return;
      b("");
      const u = e.map((d) => d.type === 1 ? {
        type: d.type,
        description: d.description,
        default: d.default ? 1 : 0
      } : {
        type: d.type,
        description: d.description,
        default: d.default,
        data: {
          lower: d.lowerLimit,
          upper: d.upperLimit,
          ticker: d.ticker,
          enabled: d.enabled
        }
      });
      F({
        userPushSDKInstance: p,
        settings: u
      }, {
        onSuccess: (d) => {
          d.transactionHash && (o(), n(`${U.ChannelDashboard(i)}`));
        },
        onError: (d) => {
          console.log("Error in adding setting", d), b("Error in saving settings. Please try again later");
        }
      });
    }, Y = w.useMemo(() => {
      if (!r) return false;
      if (e.length !== r.length) return true;
      let p = false;
      return e.forEach((u, d) => {
        const h = r[d];
        if (u.type !== h.type) {
          p = true;
          return;
        }
        if (u.type === 1 && (u.description !== h.description || u.default !== h.default)) {
          p = true;
          return;
        }
        if (u.type === 2 && (u.description !== h.description || u.default !== h.default || u.enabled !== h.enabled || u.lowerLimit !== h.lowerLimit || u.upperLimit !== h.upperLimit || u.ticker !== h.ticker)) {
          p = true;
          return;
        }
        if (u.type === 3 && (u.description !== h.description || !J(u.default, h.default) || u.enabled !== h.enabled || u.lowerLimit !== h.lowerLimit || u.upperLimit !== h.upperLimit || u.ticker !== h.ticker)) {
          p = true;
          return;
        }
      }), p;
    }, [
      e,
      r
    ]);
    return t.jsxs(s, {
      width: "100%",
      gap: "spacing-md",
      display: "flex",
      flexDirection: "column",
      children: [
        m && t.jsx(ce, {
          heading: m,
          variant: "error"
        }),
        t.jsx(ve, {
          title: "Modify Setting Fee",
          description: "Make sure all settings are ready before proceeding to the next step",
          fees: q,
          pushApprovalAmount: x,
          showBalance: true,
          balance: v,
          setBalance: k
        }),
        t.jsxs(s, {
          display: "flex",
          justifyContent: {
            initial: "end",
            ml: "center"
          },
          gap: "spacing-xs",
          children: [
            t.jsx(A, {
              variant: "outline",
              onClick: () => n(`${U.ChannelDashboard(i)}`),
              children: "Cancel"
            }),
            x >= q ? t.jsx(A, {
              onClick: Q,
              disabled: T || !Y,
              loading: T,
              children: T ? "Saving" : "Save Settings"
            }) : t.jsx(A, {
              onClick: I,
              disabled: D,
              loading: D,
              children: D ? "Approving" : "Approve PUSH"
            })
          ]
        })
      ]
    });
  };
  He = (e) => ({
    settingName: e.description,
    isDefault: e.type === 1 ? typeof e.default == "boolean" ? e.default : true : e.enabled,
    enableRange: e.type !== 1,
    rangelowerlimit: e.lowerLimit ? e.lowerLimit : 0,
    rangeupperlimit: e.upperLimit ? e.upperLimit : 0,
    enableMultiRange: e.type === 3,
    defaultValue: typeof e.default == "number" ? e.default : 0,
    multirangelowerlimit: typeof e.default == "object" ? e.default.lower : 0,
    multirangeupperlimit: typeof e.default == "object" ? e.default.upper : 0,
    sliderStepValue: e.ticker ? e.ticker : 0
  });
  qe = Re().shape({
    settingName: Pe().required(C("Setting Name")),
    isDefault: B(),
    enableRange: B(),
    rangelowerlimit: g().when("enableRange", {
      is: true,
      then: () => g().min(1, V(1)).required(C("Range")),
      otherwise: () => g()
    }),
    rangeupperlimit: g().when("enableRange", {
      is: true,
      then: () => g().min(_("rangelowerlimit"), V("Lower limit")).required(C("Range")),
      otherwise: () => g()
    }),
    enableMultiRange: B().required(C("")),
    multirangelowerlimit: g().when([
      "enableMultiRange",
      "enableRange"
    ], {
      is: (e, r) => e && r,
      then: () => g().min(1, V(1)).required(C("Range")).test("is-multi-range-within-range", H("Multi-range lower limit"), (e, r) => {
        const { rangelowerlimit: n, rangeupperlimit: i } = r.parent;
        return e >= n && e < i;
      }),
      otherwise: () => g()
    }),
    multirangeupperlimit: g().when([
      "enableMultiRange",
      "enableRange"
    ], {
      is: (e, r) => e && r,
      then: () => g().min(_("multirangelowerlimit"), V("Lower limit")).required(C("Range")).test("is-multi-range-upper-within-range", H("Multi-range upper limit"), (e, r) => {
        const { rangelowerlimit: n, rangeupperlimit: i } = r.parent;
        return e > n && e <= i;
      }),
      otherwise: () => g()
    }),
    defaultValue: g().when([
      "enableMultiRange",
      "enableRange"
    ], {
      is: (e, r) => !e && r,
      then: () => g().min(0, V(0)).required(C("Default Value")).test("is-within-range", H("Default value"), (e, r) => {
        const { rangelowerlimit: n, rangeupperlimit: i } = r.parent;
        return e >= n && e <= i;
      }),
      otherwise: () => g()
    }),
    sliderStepValue: g().when("enableRange", {
      is: true,
      then: () => g().min(1, V(1)).required(C("Slider Step")).test("is-step-value-valid", "Slider step value must not exceed the range limits.", (e, r) => {
        const { rangeupperlimit: n } = r.parent;
        return e < n;
      }),
      otherwise: () => g()
    })
  });
  Ue = ({ children: e, initialValue: r, onSubmit: n }) => {
    const i = He(r), a = Me({
      initialValues: i,
      enableReinitialize: true,
      validationSchema: qe,
      onSubmit: n
    });
    return t.jsx(Ve, {
      value: a,
      children: e
    });
  };
  O = () => {
    const e = De();
    if (!e) throw new Error("useEditNotificationSettingsForm must be used within a EditNotificationSettingsFormProvider");
    return e;
  };
  Oe = ({ checked: e, onChange: r }) => t.jsx(We, {
    id: "Checkbox-switch",
    type: "checkbox",
    checked: e,
    onChange: r
  });
  We = ge.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #C742DD;
  }
`;
  $e = () => {
    const { values: e, handleChange: r, setFieldValue: n, errors: i, touched: a } = O(), c = w.useMemo(() => {
      const { rangelowerlimit: l, rangeupperlimit: m, enableMultiRange: b, multirangelowerlimit: v, multirangeupperlimit: k, defaultValue: R, sliderStepValue: P } = e, L = Number(l) > 0 && Number(m) > 0, D = Number(P) > 0 && Number(P) <= Number(m) - Number(l), I = !b && Number(R) >= Number(l) && Number(R) <= Number(m), F = b && Number(v) >= Number(l) && Number(k) <= Number(m) && Number(k) > Number(v);
      return L && D && (F || I);
    }, [
      e
    ]), [y, N] = w.useState(e.defaultValue), [j, S] = w.useState(e.multirangelowerlimit), [o, x] = w.useState(e.multirangeupperlimit);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsxs(s, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-xxs",
          children: [
            t.jsx(f, {
              variant: "h6-bold",
              children: "Range Values"
            }),
            t.jsxs(s, {
              display: "flex",
              gap: "spacing-xxs",
              width: "100%",
              alignItems: "baseline",
              children: [
                t.jsx(M, {
                  placeholder: "e.g.0",
                  type: "number",
                  value: e.rangelowerlimit,
                  onChange: r("rangelowerlimit"),
                  error: a.rangelowerlimit && !!i.rangelowerlimit,
                  errorMessage: a.rangelowerlimit ? i.rangelowerlimit : ""
                }),
                t.jsx(f, {
                  variant: "bm-regular",
                  children: "to"
                }),
                t.jsx(M, {
                  placeholder: "e.g.10",
                  type: "number",
                  value: e.rangeupperlimit,
                  onChange: (l) => {
                    n("rangeupperlimit", l.target.value);
                  },
                  error: a.rangeupperlimit && !!i.rangeupperlimit,
                  errorMessage: a.rangeupperlimit ? i.rangeupperlimit : ""
                })
              ]
            })
          ]
        }),
        t.jsxs(s, {
          display: "flex",
          gap: "spacing-xxs",
          children: [
            t.jsx(Oe, {
              checked: e.enableMultiRange,
              onChange: () => n("enableMultiRange", !e.enableMultiRange)
            }),
            t.jsxs(s, {
              children: [
                t.jsx(f, {
                  ellipsis: true,
                  variant: "h6-bold",
                  children: "Enable Multi Range"
                }),
                t.jsx(f, {
                  variant: "bes-regular",
                  children: "User can select a range of values in the slider"
                })
              ]
            })
          ]
        }),
        !e.enableMultiRange && t.jsx(M, {
          placeholder: "e.g.0",
          type: "number",
          value: e.defaultValue,
          onChange: (l) => {
            N(Number(l.target.value)), n("defaultValue", l.target.value);
          },
          label: "Default Value",
          error: a.defaultValue && !!i.defaultValue,
          errorMessage: a.defaultValue ? i.defaultValue : ""
        }),
        e.enableMultiRange && t.jsxs(s, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-xxs",
          children: [
            t.jsx(f, {
              variant: "h6-bold",
              children: "Range Values"
            }),
            t.jsxs(s, {
              display: "flex",
              gap: "spacing-xxs",
              width: "100%",
              alignItems: "baseline",
              children: [
                t.jsx(M, {
                  placeholder: "e.g.0",
                  type: "number",
                  value: e.multirangelowerlimit,
                  onChange: (l) => {
                    n("multirangelowerlimit", l.target.value), S(Number(l.target.value));
                  },
                  error: a.multirangelowerlimit && !!i.multirangelowerlimit,
                  errorMessage: a.multirangelowerlimit ? i.multirangelowerlimit : ""
                }),
                t.jsx(f, {
                  variant: "bm-regular",
                  children: "to"
                }),
                t.jsx(M, {
                  placeholder: "e.g.10",
                  type: "number",
                  value: e.multirangeupperlimit,
                  onChange: (l) => {
                    n("multirangeupperlimit", l.target.value), x(Number(l.target.value));
                  },
                  error: a.multirangeupperlimit && !!i.multirangeupperlimit,
                  errorMessage: a.multirangeupperlimit ? i.multirangeupperlimit : ""
                })
              ]
            })
          ]
        }),
        t.jsx(s, {
          children: t.jsx(M, {
            placeholder: "e.g.0",
            type: "number",
            value: e.sliderStepValue,
            onChange: r("sliderStepValue"),
            label: "Slider Step Value",
            error: a.sliderStepValue && !!i.sliderStepValue,
            errorMessage: a.sliderStepValue ? i.sliderStepValue : ""
          })
        }),
        c && t.jsxs(s, {
          display: "flex",
          flexDirection: "column",
          gap: "spacing-xxs",
          children: [
            t.jsx(s, {
              children: "Preview"
            }),
            !e.enableMultiRange && t.jsxs(s, {
              display: "flex",
              gap: "spacing-xxs",
              alignItems: "center",
              children: [
                t.jsx(s, {
                  children: e.rangelowerlimit
                }),
                t.jsx(s, {
                  width: "100%",
                  children: t.jsx(me, {
                    val: y,
                    min: Number(e.rangelowerlimit),
                    max: Number(e.rangeupperlimit),
                    step: Number(e.sliderStepValue),
                    defaultVal: Number(e.defaultValue),
                    onChange: ({ x: l }) => {
                      N(l);
                    },
                    preview: true
                  })
                }),
                t.jsx(s, {
                  children: e.rangeupperlimit
                })
              ]
            }),
            e.enableMultiRange && t.jsxs(s, {
              display: "flex",
              gap: "spacing-xxs",
              alignItems: "center",
              backgroundColor: "surface-secondary",
              padding: "spacing-xs",
              borderRadius: "radius-xxs",
              children: [
                t.jsx(s, {
                  children: e.rangelowerlimit
                }),
                t.jsx(s, {
                  width: "100%",
                  children: t.jsx(he, {
                    startVal: j,
                    endVal: o,
                    min: Number(e.rangelowerlimit),
                    max: Number(e.rangeupperlimit),
                    step: Number(e.sliderStepValue),
                    defaultStartVal: Number(e.multirangelowerlimit),
                    defaultEndVal: Number(e.multirangeupperlimit),
                    onChange: ({ startVal: l, endVal: m }) => {
                      S(l), x(m);
                    },
                    preview: true
                  })
                }),
                t.jsx(s, {
                  children: e.rangeupperlimit
                })
              ]
            })
          ]
        })
      ]
    });
  };
  ze = () => {
    const { values: e, handleChange: r, touched: n, errors: i, setFieldValue: a } = O();
    return t.jsx(s, {
      width: "100%",
      children: t.jsx("form", {
        onSubmit: () => {
        },
        children: t.jsxs(s, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "spacing-md",
          children: [
            t.jsx(f, {
              textAlign: "center",
              variant: "h4-semibold",
              children: "Add a Setting"
            }),
            t.jsxs(s, {
              display: "flex",
              flexDirection: "column",
              gap: "spacing-md",
              padding: "spacing-xxs spacing-xs",
              width: "-webkit-fill-available",
              maxHeight: {
                initial: "60vh",
                ml: "45vh"
              },
              css: fe`
              overflow-y: scroll;
            `,
              customScrollbar: true,
              children: [
                t.jsx(M, {
                  placeholder: "e.g. Announcements",
                  label: "Setting Name",
                  totalCount: 50,
                  value: e.settingName,
                  onChange: r("settingName"),
                  error: n.settingName && !!i.settingName,
                  errorMessage: n.settingName ? i.settingName : ""
                }),
                t.jsxs(s, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    t.jsxs(s, {
                      children: [
                        t.jsx(f, {
                          ellipsis: true,
                          variant: "h6-bold",
                          children: "Set as Default"
                        }),
                        t.jsx(f, {
                          variant: "bes-regular",
                          children: "Setting on for users by default"
                        })
                      ]
                    }),
                    t.jsx(z, {
                      leadingToggle: false,
                      checked: e.isDefault,
                      onCheckedChange: (c) => a("isDefault", c)
                    })
                  ]
                }),
                t.jsxs(s, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    t.jsxs(s, {
                      children: [
                        t.jsx(f, {
                          ellipsis: true,
                          variant: "h6-bold",
                          children: "Range"
                        }),
                        t.jsx(f, {
                          variant: "bes-regular",
                          children: "Set a range for this setting e.g. 1-10"
                        })
                      ]
                    }),
                    t.jsx(z, {
                      leadingToggle: false,
                      checked: e.enableRange,
                      onCheckedChange: (c) => a("enableRange", c)
                    })
                  ]
                }),
                e.enableRange && t.jsx($e, {})
              ]
            })
          ]
        })
      })
    });
  };
  _e = ({ isOpen: e, onClose: r, settingsToEdit: n, handleSettingsChange: i }) => {
    const { values: a, validateForm: c, setTouched: y, dirty: N, resetForm: j } = O(), S = async (o) => {
      if (y({
        settingName: true,
        defaultValue: true,
        rangelowerlimit: true,
        rangeupperlimit: true,
        multirangelowerlimit: true,
        multirangeupperlimit: true,
        sliderStepValue: true,
        enableRange: true,
        enableMultiRange: true,
        isDefault: true
      }), N) {
        const m = await c();
        if (Object.keys(m).length > 0) return;
      }
      const x = n.index !== 0 ? n.index : Math.floor(Math.random() * 1e6), l = o.enableRange ? o.enableMultiRange ? {
        type: 3,
        default: {
          lower: Number(o.multirangelowerlimit),
          upper: Number(o.multirangeupperlimit)
        },
        enabled: o.isDefault,
        description: o.settingName,
        lowerLimit: Number(o.rangelowerlimit),
        upperLimit: Number(o.rangeupperlimit),
        ticker: Number(o.sliderStepValue),
        index: x
      } : {
        type: 2,
        default: Number(o.defaultValue),
        enabled: o.isDefault,
        description: o.settingName,
        lowerLimit: Number(o.rangelowerlimit),
        upperLimit: Number(o.rangeupperlimit),
        ticker: Number(o.sliderStepValue),
        index: x
      } : {
        type: 1,
        default: o.isDefault,
        description: o.settingName,
        index: x
      };
      i(l), j(), r();
    };
    return t.jsx(xe, {
      isOpen: e,
      onClose: r,
      acceptButtonProps: {
        children: "Save Settings",
        onClick: () => {
          S(a);
        }
      },
      cancelButtonProps: {
        children: "Cancel"
      },
      children: t.jsx(ze, {
        onClose: r
      })
    });
  };
  Ke = ({ modalControl: e, settingsToEdit: r, handleSettingsChange: n }) => {
    const { isOpen: i, onClose: a } = e;
    return t.jsx(Ue, {
      initialValue: r,
      onSubmit: (c) => {
      },
      children: t.jsx(_e, {
        isOpen: i,
        onClose: a,
        settingsToEdit: r,
        handleSettingsChange: n
      })
    });
  };
  Ge = ({ modalControl: e, channelSettings: r, loadingSettings: n }) => {
    const { open: i } = e, { isWalletConnected: a, connect: c } = E(), [y, N] = w.useState(G), [j, S] = w.useState([]);
    w.useEffect(() => {
      r && !n && S(r);
    }, [
      n
    ]);
    const o = (m) => {
      S((b) => b.filter((v) => v.index !== m.index));
    }, x = (m) => {
      const b = j.findIndex((v) => v.index === m.index);
      if (b === -1) S([
        ...j,
        m
      ]);
      else {
        const v = j.map((k, R) => R === b ? {
          ...m
        } : k);
        S(v);
      }
    }, l = () => a ? i() : c();
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(Ie, {
          modalControl: e,
          setSettingsToEdit: N
        }),
        j.length > 0 ? t.jsx(Te, {
          newSettings: j,
          modalControl: e,
          setSettingsToEdit: N,
          loadingSettings: n,
          handleDeleteSetting: o,
          handleSettingsChange: x
        }) : t.jsx(Se, {
          state: "notificationSettings",
          title: "No settings yet",
          subTitle: "Add options for users to customize notifications.",
          onClick: l
        }),
        t.jsx(Ke, {
          modalControl: e,
          settingsToEdit: y,
          setNewSettings: S,
          handleSettingsChange: x
        }),
        t.jsx(Be, {
          newSettings: j,
          channelSettings: r
        })
      ]
    });
  };
  Je = () => {
    const { account: e } = E(), r = je(), n = K(), { data: i, isLoading: a } = be(e), c = (i == null ? void 0 : i.channel_settings) ?? "", y = a ? Array(3).fill(0) : c ? JSON.parse(c) : [];
    return w.useEffect(() => {
      !i && !a && n(`${U.Channels}`);
    }, [
      i
    ]), t.jsx(s, {
      display: "flex",
      padding: {
        initial: "spacing-lg",
        ml: "spacing-md"
      },
      flexDirection: "column",
      gap: "spacing-md",
      width: {
        ml: "357px",
        initial: "800px"
      },
      alignItems: "center",
      borderRadius: "radius-md",
      backgroundColor: "surface-primary",
      children: t.jsx(Ge, {
        modalControl: r,
        channelSettings: y,
        loadingSettings: a
      })
    });
  };
  nt = () => t.jsx(we, {
    children: t.jsx(Je, {})
  });
});
export {
  __tla,
  nt as default
};
