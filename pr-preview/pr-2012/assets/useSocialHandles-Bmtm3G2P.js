import { f3 as Z, fs as O, f_ as U, hX as se, hY as ae, hZ as re, ea as e, eA as M, h_ as oe, h$ as le, i0 as ce, e5 as $, h7 as W, e7 as h, gn as L, eQ as q, fY as z, eb as s, ep as a, gr as B, eq as Q, gw as de, gl as X, g1 as ee, en as V, ev as ge, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { u as _, c as R, a as H, __tla as __tla_1 } from "./index.esm-DSACWjwa.js";
import { g as ne } from "./Common.form-B0yEfNXt.js";
import { C as ie, __tla as __tla_2 } from "./CopyButton-C0-mC2Gi.js";
import { D as G, __tla as __tla_3 } from "./Discord-CgE2-Cfy.js";
import { u as N, __tla as __tla_4 } from "./useDisclosure--XpPaGPh.js";
let Be, Me, $e, D, Le;
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
  })()
]).then(async () => {
  let ue, me, he, pe, fe, xe, Y, te, Ce, ve, je, J, ye, we, Se, be, Pe, Ae, Ee;
  ue = (n) => n;
  me = (n) => n;
  he = (n) => n;
  pe = async (n) => {
    const i = await Z({
      method: "POST",
      url: `${O()}/apis/v1/users/verify/init/${n == null ? void 0 : n.caipAddress}/${n.social_platform}`,
      data: {
        value: n == null ? void 0 : n.value,
        verificationProof: n == null ? void 0 : n.verificationProof
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    return ue(i.data);
  };
  fe = async (n) => {
    const i = await Z({
      method: "POST",
      url: `${O()}/apis/v1/users/verify/${n == null ? void 0 : n.caipAddress}/${n == null ? void 0 : n.social_platform}`,
      data: {
        value: n == null ? void 0 : n.value,
        verificationCode: n == null ? void 0 : n.verificationCode
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    return me(i.data);
  };
  xe = async (n) => {
    const i = await Z({
      method: "POST",
      url: `${O()}/apis/v1/users/${n == null ? void 0 : n.channelAddress}`,
      data: {
        verificationProof: n == null ? void 0 : n.verificationProof
      }
    });
    return he(i.data);
  };
  Y = () => U({
    mutationKey: [
      se
    ],
    mutationFn: pe
  });
  te = () => U({
    mutationKey: [
      ae
    ],
    mutationFn: fe
  });
  Ce = () => U({
    mutationKey: [
      re
    ],
    mutationFn: xe
  });
  ve = (n) => {
    const { svgProps: i, ...t } = n;
    return e.jsx(M, {
      componentName: "DiscordProfile",
      illustration: e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: (t == null ? void 0 : t.width) ?? "28",
        height: (t == null ? void 0 : t.height) ?? "22",
        viewBox: "0 0 28 22",
        fill: "none",
        ...i,
        children: e.jsx("path", {
          d: "M23.176 2.24798C21.4552 1.45838 19.6098 0.876619 17.6803 0.54339C17.6452 0.536957 17.61 0.553041 17.5919 0.585156C17.3546 1.00729 17.0917 1.55795 16.9076 1.99079C14.8324 1.68008 12.7677 1.68008 10.735 1.99079C10.5508 1.54835 10.2784 1.00729 10.04 0.585156C10.0219 0.554095 9.9868 0.538011 9.95168 0.54339C8.02329 0.875511 6.1779 1.45728 4.45591 2.24798C4.44099 2.25441 4.42823 2.26511 4.41974 2.27904C0.91944 7.50844 -0.0394818 12.6093 0.430909 17.6469C0.433018 17.6716 0.446887 17.6951 0.46603 17.7102C2.77543 19.4062 5.01252 20.4357 7.20801 21.1182C7.24314 21.1289 7.28037 21.1161 7.30273 21.0872C7.82205 20.378 8.28501 19.6301 8.68194 18.8437C8.70535 18.7977 8.68299 18.743 8.63511 18.7248C7.90079 18.4462 7.20158 18.1066 6.52895 17.7209C6.47575 17.6899 6.47147 17.6138 6.52046 17.5773C6.662 17.4713 6.8036 17.3609 6.93875 17.2495C6.96322 17.2291 6.99729 17.2249 7.02603 17.2377C11.4447 19.2551 16.2285 19.2551 20.5951 17.2377C20.6239 17.2237 20.6579 17.2281 20.6834 17.2484C20.8187 17.3598 20.9602 17.4712 21.1028 17.5773C21.1517 17.6137 21.1485 17.6898 21.0954 17.7209C20.4227 18.1141 19.7235 18.4462 18.9881 18.7237C18.9403 18.7419 18.919 18.7976 18.9424 18.8436C19.3479 19.629 19.8108 20.3768 20.3206 21.0861C20.3419 21.1161 20.3802 21.1289 20.4153 21.1182C22.6214 20.4357 24.8585 19.4061 27.1679 17.7101C27.1882 17.6951 27.2009 17.6726 27.203 17.648C27.766 11.824 26.2601 6.76489 23.2111 2.28009C23.2037 2.26512 23.1909 2.25441 23.176 2.24798ZM9.34191 14.5795C8.01158 14.5795 6.91539 13.3582 6.91539 11.8582C6.91539 10.3583 7.99028 9.13693 9.34191 9.13693C10.7041 9.13693 11.7897 10.369 11.7684 11.8582C11.7684 13.3582 10.6934 14.5795 9.34191 14.5795ZM18.3135 14.5795C16.9832 14.5795 15.887 13.3582 15.887 11.8582C15.887 10.3583 16.9619 9.13693 18.3135 9.13693C19.6757 9.13693 20.7612 10.369 20.74 11.8582C20.74 13.3582 19.6757 14.5795 18.3135 14.5795Z",
          fill: "#5865F2"
        })
      }),
      ...t
    });
  };
  je = (n) => {
    const { svgProps: i, ...t } = n;
    return e.jsx(M, {
      componentName: "EmailProfile",
      illustration: e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: (t == null ? void 0 : t.width) ?? "23",
        height: (t == null ? void 0 : t.height) ?? "17",
        viewBox: "0 0 23 17",
        fill: "none",
        ...i,
        children: e.jsx("path", {
          d: "M19.8248 0.854492H3.81389C2.16087 0.856473 0.821316 2.19602 0.819336 3.84905V13.8149C0.821316 15.468 2.16087 16.8075 3.81389 16.8095H19.8248C21.4778 16.8075 22.8174 15.468 22.8193 13.8149V3.84905C22.8174 2.19602 21.4778 0.856473 19.8248 0.854492ZM20.3039 5.35431L12.1348 10.453C11.9423 10.5755 11.6964 10.5755 11.5039 10.453L3.33476 5.35431C3.05361 5.179 2.9678 4.80897 3.14311 4.52781C3.31842 4.24666 3.68845 4.16085 3.96961 4.33616L11.8193 9.23925L19.6691 4.33616C19.9502 4.16085 20.3203 4.24666 20.4956 4.52781C20.6709 4.80897 20.5851 5.179 20.3039 5.35431Z",
          fill: "#EF9CFF"
        })
      }),
      ...t
    });
  };
  J = (n) => {
    const { svgProps: i, ...t } = n;
    return e.jsx(M, {
      componentName: "Telegram",
      illustration: e.jsxs("svg", {
        width: (t == null ? void 0 : t.width) ?? "48",
        height: (t == null ? void 0 : t.height) ?? "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...i,
        children: [
          e.jsx("path", {
            d: "M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",
            fill: "#25A2E0"
          }),
          e.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M9.13931 23.5154C16.9132 20.1285 22.097 17.8956 24.6907 16.8168C32.0963 13.7366 33.6352 13.2015 34.6381 13.1838C34.8587 13.1799 35.3519 13.2346 35.6714 13.4939C36.1454 13.8785 36.1481 14.7133 36.0955 15.2658C35.6941 19.4824 33.9577 29.715 33.0742 34.4377C32.7004 36.4361 31.9643 37.1062 31.2518 37.1717C29.7033 37.3142 28.5273 36.1483 27.0274 35.1651C24.6805 33.6266 23.3545 32.6689 21.0763 31.1676C18.4435 29.4326 20.1503 28.4791 21.6507 26.9207C22.0434 26.5128 28.8664 20.3067 28.9985 19.7437C29.0151 19.6733 29.0304 19.4108 28.8744 19.2722C28.7185 19.1337 28.4884 19.181 28.3223 19.2187C28.0869 19.2721 24.3375 21.7503 17.0742 26.6533C16.0099 27.3841 15.046 27.7401 14.1823 27.7215C13.2301 27.701 11.3987 27.1832 10.0371 26.7406C8.36713 26.1977 7.03983 25.9107 7.15546 24.9888C7.21567 24.5085 7.87692 24.0174 9.13931 23.5154Z",
            fill: "white"
          })
        ]
      }),
      ...t
    });
  };
  ye = (n) => {
    const { svgProps: i, ...t } = n;
    return e.jsx(M, {
      componentName: "TelegramProfile",
      illustration: e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: (t == null ? void 0 : t.width) ?? "25",
        height: (t == null ? void 0 : t.height) ?? "21",
        viewBox: "0 0 25 21",
        fill: "none",
        ...i,
        children: e.jsx("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2.40809 9.44191C8.8863 6.61943 13.2062 4.75866 15.3676 3.8597C21.5389 1.29286 22.8213 0.846943 23.657 0.832186C23.8409 0.828974 24.2519 0.874547 24.5182 1.09061C24.9131 1.41109 24.9154 2.10675 24.8715 2.56717C24.5371 6.08106 23.09 14.6082 22.3538 18.5438C22.0423 20.2091 21.4289 20.7675 20.8352 20.8221C19.5447 20.9409 18.5648 19.9693 17.3149 19.15C15.359 17.8679 14.2541 17.0698 12.3556 15.8187C10.1616 14.3729 11.5839 13.5783 12.8342 12.2796C13.1615 11.9397 18.8473 6.76795 18.9574 6.29877C18.9712 6.24009 18.984 6.02134 18.854 5.90588C18.7241 5.79043 18.5323 5.82984 18.3939 5.86127C18.1978 5.9058 15.0733 7.97099 9.0205 12.0568C8.13361 12.6658 7.33031 12.9625 6.6106 12.9469C5.81711 12.9298 4.2909 12.4983 3.15626 12.1295C1.7646 11.6772 0.65852 11.4379 0.754875 10.6697C0.805048 10.2694 1.35609 9.86023 2.40809 9.44191Z",
          fill: "#29A9EB"
        })
      }),
      ...t
    });
  };
  we = R({
    email: H().email("Invalid email address").required(ne("Email"))
  });
  Se = R({
    code: H().length(6, "Code should be 6 digits").required("Required")
  });
  be = (n) => _({
    initialValues: {
      email: ""
    },
    validationSchema: we,
    onSubmit: n
  });
  Pe = (n) => _({
    initialValues: {
      code: ""
    },
    validationSchema: Se,
    onSubmit: n
  });
  D = async (n, i) => {
    if (i && !(i == null ? void 0 : i.readmode())) {
      const t = JSON.stringify(n), C = await oe({
        text: t
      }), v = await le({
        armoredKey: i.decryptedPgpPvtKey
      });
      return await ce({
        message: C,
        signingKeys: v,
        detached: true
      });
    }
  };
  Be = ({ modalControl: n, refetchSocialHandleStatus: i, setErrorMessage: t, setSuccessMessage: C }) => {
    const { isOpen: v, onClose: p } = n, { account: b, wallet: u } = $(), { handleConnectWalletAndEnableProfile: f } = W(), [c, m] = h.useState(false), j = L({
      account: b
    }), [g, k] = h.useState(1), { userPushSDKInstance: y } = q((l) => l.user), { mutate: x, isPending: d } = Y(), { mutate: F } = te(), T = h.useCallback(async () => (y == null ? void 0 : y.signer) ? y : await f({
      wallet: u
    }), [
      y,
      f,
      u
    ]), P = async () => {
      m(true);
      const l = await T(), S = {
        wallet: j,
        value: o.values.email,
        valueType: "email"
      }, E = await D(S, l);
      E && x({
        caipAddress: j,
        verificationProof: E,
        value: o.values.email,
        social_platform: "email"
      }, {
        onSuccess: (w) => {
          (w == null ? void 0 : w.success) ? k(2) : o == null ? void 0 : o.setFieldError("email", "Error sending code. Please try again"), m(false);
        },
        onError: (w) => {
          console.log("Error sending code", w), m(false);
        }
      });
    }, I = async () => {
      const l = await T(), S = {
        wallet: j,
        value: o.values.email,
        valueType: "email",
        verificationCode: r.values.code
      };
      await D(S, l) && F({
        caipAddress: j,
        verificationCode: r.values.code,
        value: o.values.email,
        social_platform: "email"
      }, {
        onSuccess: (w) => {
          (w == null ? void 0 : w.success) ? (p(), i(), C("Email Account was linked successfully")) : r == null ? void 0 : r.setFieldError("code", "Error verifying code. Please try again");
        },
        onError: (w) => {
          console.log("Error verifying code", w), t("Error verifying code");
        }
      });
    }, o = be(P), r = Pe(I);
    h.useEffect(() => {
      r.values.code.length === 6 && !r.errors.code && r.submitForm();
    }, [
      r.values.code,
      r.errors.code
    ]);
    const K = () => {
      P();
    };
    return e.jsxs(z, {
      size: "small",
      isOpen: v,
      onClose: p,
      acceptButtonProps: g === 1 ? {
        children: "Next",
        loading: d || c,
        onClick: () => {
          o.handleSubmit();
        }
      } : null,
      cancelButtonProps: null,
      children: [
        g === 1 && e.jsxs(s, {
          width: "100%",
          children: [
            e.jsx(a, {
              textAlign: "center",
              variant: "h4-semibold",
              children: "Enter your email"
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              children: "Confirm your email and verify to connect"
            }),
            e.jsx("form", {
              onSubmit: o.handleSubmit,
              children: e.jsx(s, {
                margin: "spacing-md spacing-none spacing-none spacing-none",
                width: "100%",
                children: e.jsx(B, {
                  label: "Email Address",
                  value: o.values.email,
                  onChange: o.handleChange("email"),
                  error: o.touched.email && !!o.errors.email,
                  errorMessage: o.touched.email ? o.errors.email : ""
                })
              })
            })
          ]
        }),
        g === 2 && e.jsxs(s, {
          width: "100%",
          children: [
            e.jsx(a, {
              textAlign: "center",
              variant: "h4-semibold",
              children: "Verify Email"
            }),
            e.jsxs(a, {
              textAlign: "center",
              variant: "bs-regular",
              children: [
                "We sent you a 6 digit confirmation code to ",
                o.values.email,
                " Please enter it below to confirm your email address."
              ]
            }),
            e.jsx(s, {
              margin: "spacing-md spacing-none",
              width: "100%",
              children: e.jsx(B, {
                placeholder: "Enter 6-digit code",
                value: r.values.code,
                onChange: r.handleChange("code"),
                error: r.touched.code && !!r.errors.code,
                errorMessage: r.touched.code ? r.errors.code : ""
              })
            }),
            e.jsxs(s, {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "spacing-xxxs",
              children: [
                e.jsx(a, {
                  textAlign: "center",
                  children: "Didn't receive a code?"
                }),
                e.jsx(a, {
                  textAlign: "center",
                  onClick: K,
                  css: Q`
                text-decoration: underline;
                cursor: pointer;
              `,
                  children: "Send code again"
                }),
                (d || c) && e.jsx(de, {
                  variant: "secondary"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  Ae = R({
    telegram: H().required(ne("Telegram"))
  });
  Ee = (n) => _({
    initialValues: {
      telegram: ""
    },
    validationSchema: Ae,
    onSubmit: () => {
      n();
    }
  });
  Me = ({ modalControl: n, refetchSocialHandleStatus: i, setErrorMessage: t, setSuccessMessage: C }) => {
    var _a, _b;
    const { isOpen: v, onClose: p } = n, { account: b, wallet: u } = $(), { handleConnectWalletAndEnableProfile: f } = W(), c = L({
      account: b
    }), [m, j] = h.useState(1), [g, k] = h.useState(""), [y, x] = h.useState(false), { userPushSDKInstance: d } = q((S) => S.user), { mutate: F, isPending: T } = Y(), { mutate: P, isPending: I } = te(), o = h.useCallback(async () => (d == null ? void 0 : d.signer) ? d : await f({
      wallet: u
    }), [
      d,
      f,
      u
    ]), r = async () => {
      x(true);
      const S = await o(), E = {
        wallet: c,
        value: {
          telegram_username: l.values.telegram
        },
        valueType: "telegram"
      }, w = await D(E, S);
      w && F({
        caipAddress: c,
        verificationProof: w,
        value: {
          telegram_username: l.values.telegram
        },
        social_platform: "telegram"
      }, {
        onSuccess: (A) => {
          (A == null ? void 0 : A.success) ? (k(A.verificationCode), j(2)) : l == null ? void 0 : l.setFieldError("telegram", "Error sending code. Please try again"), x(false);
        },
        onError: (A) => {
          console.log("Error sending code", A), x(false);
        }
      });
    }, K = async () => {
      const S = await o(), E = {
        wallet: c,
        value: {
          telegram_username: l.values.telegram
        },
        valueType: "telegram",
        verificationCode: g
      };
      await D(E, S) && P({
        caipAddress: c,
        verificationCode: g,
        value: {
          telegram_username: l.values.telegram
        },
        social_platform: "telegram"
      }, {
        onSuccess: (A) => {
          (A == null ? void 0 : A.success) ? (p(), i(), C("Telegram Account was linked successfully")) : l == null ? void 0 : l.setFieldError("telegram", "Error verifying code. Please try again");
        },
        onError: (A) => {
          console.log("Error verifying code", A), t("Error verifying code");
        }
      });
    }, l = Ee(r);
    return e.jsxs(z, {
      size: m === 1 ? "small" : "medium",
      isOpen: v,
      onClose: () => {
        C(""), i(), p();
      },
      ...m === 2 && {
        onBack: () => j(1)
      },
      acceptButtonProps: m === 1 ? {
        children: "Next",
        loading: T || y,
        onClick: () => {
          l == null ? void 0 : l.handleSubmit();
        }
      } : null,
      cancelButtonProps: null,
      children: [
        m === 1 && e.jsxs(s, {
          width: "100%",
          children: [
            e.jsx(s, {
              width: "100%",
              display: "flex",
              margin: "spacing-none spacing-none spacing-sm spacing-none",
              justifyContent: "center",
              children: e.jsx(J, {})
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "h4-semibold",
              children: "Enter your Telegram ID"
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              children: "Proceed to the next step after entering your Telegram chat ID"
            }),
            e.jsx("form", {
              onSubmit: l.handleSubmit,
              children: e.jsx(s, {
                margin: "spacing-md spacing-none spacing-none spacing-none",
                width: "100%",
                children: e.jsx(B, {
                  label: "Telegram ID",
                  value: l.values.telegram,
                  onChange: l.handleChange("telegram"),
                  error: l.touched.telegram && !!l.errors.telegram,
                  errorMessage: l.touched.telegram ? l.errors.telegram : ""
                })
              })
            })
          ]
        }),
        m === 2 && g && e.jsxs(s, {
          width: "100%",
          children: [
            e.jsx(s, {
              width: "100%",
              display: "flex",
              margin: "spacing-none spacing-none spacing-sm spacing-none",
              justifyContent: "center",
              children: e.jsx(J, {})
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "h3-semibold",
              children: "Connect your Telegram"
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              color: "text-tertiary",
              children: "Follow the steps to link your Telegram to Push and receive notifications"
            }),
            e.jsxs(s, {
              margin: "spacing-sm spacing-none",
              gap: "spacing-xxs",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [
                e.jsx(a, {
                  textAlign: "center",
                  variant: "bl-regular",
                  children: "Step 1: Copy the verification code"
                }),
                e.jsxs(s, {
                  display: "flex",
                  padding: "spacing-xs",
                  gap: "spacing-xxs",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "surface-tertiary",
                  width: "fit-content",
                  borderRadius: "radius-sm",
                  children: [
                    e.jsx(a, {
                      color: "text-brand-medium",
                      variant: "bl-semibold",
                      textAlign: "center",
                      children: X(`/verify ${c}-${g}`, 10)
                    }),
                    v && e.jsx(ie, {
                      tooltipTitle: "Copy Address",
                      content: `/verify ${c}-${g}`,
                      size: 24
                    })
                  ]
                })
              ]
            }),
            e.jsxs(s, {
              margin: "spacing-lg spacing-none spacing-none spacing-none",
              children: [
                e.jsx(a, {
                  textAlign: "center",
                  variant: "bl-regular",
                  children: "Step 2: Visit the link and paste the code"
                }),
                e.jsx(s, {
                  margin: "spacing-xs spacing-none",
                  width: "100%",
                  children: e.jsx(ee, {
                    to: (_a = V) == null ? void 0 : _a.telegramExternalURL,
                    target: "_blank",
                    isText: true,
                    textProps: {
                      variant: "bl-semibold",
                      textAlign: "center",
                      color: "text-brand-medium"
                    },
                    css: Q`
                  overflow: auto;
                  word-wrap: break-word;
                  width: 100%;
                `,
                    children: (_b = V) == null ? void 0 : _b.telegramExternalURL
                  })
                })
              ]
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              color: "text-tertiary",
              children: "Please ensure you\u2019re logged into your Telegram account."
            }),
            e.jsxs(s, {
              margin: "spacing-lg spacing-none spacing-none spacing-none",
              children: [
                e.jsx(a, {
                  textAlign: "center",
                  variant: "bl-regular",
                  children: "Step 3: Click on the Complete Verification button once the above steps are completed"
                }),
                e.jsx(s, {
                  margin: "spacing-xs spacing-none",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  children: e.jsx(ge, {
                    loading: I,
                    onClick: K,
                    children: "Complete Verification"
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  };
  $e = ({ modalControl: n, refetchSocialHandleStatus: i }) => {
    var _a, _b;
    const { isOpen: t, onClose: C } = n, { account: v, wallet: p } = $(), { handleConnectWalletAndEnableProfile: b } = W(), u = L({
      account: v
    }), [f, c] = h.useState(1), [m, j] = h.useState(""), { userPushSDKInstance: g } = q((P) => P.user), { mutate: k, isPending: y } = Y(), x = R({
      discord: H().required("Required")
    }), d = _({
      initialValues: {
        discord: ""
      },
      validationSchema: x,
      onSubmit: () => {
        T();
      }
    }), F = h.useCallback(async () => (g == null ? void 0 : g.signer) ? g : await b({
      wallet: p
    }), [
      g,
      b,
      p
    ]), T = async () => {
      const P = await F(), I = {
        wallet: u,
        value: {
          discord_username: d.values.discord
        },
        valueType: "telegram"
      }, o = await D(I, P);
      o && k({
        caipAddress: u,
        verificationProof: o,
        value: {
          discord_username: d.values.discord
        },
        social_platform: "discord"
      }, {
        onSuccess: (r) => {
          (r == null ? void 0 : r.success) ? (j(r.verificationCode), c(2)) : d == null ? void 0 : d.setFieldError("discord", "Error sending code. Please try again");
        },
        onError: (r) => {
          console.log("Error sending code", r);
        }
      });
    };
    return e.jsxs(z, {
      size: "small",
      isOpen: t,
      onClose: () => {
        i(), C();
      },
      ...f === 2 && {
        onBack: () => c(1)
      },
      acceptButtonProps: f === 1 ? {
        children: "Next",
        loading: y,
        onClick: () => {
          d == null ? void 0 : d.handleSubmit();
        }
      } : null,
      cancelButtonProps: null,
      children: [
        f === 1 && e.jsxs(s, {
          width: "100%",
          children: [
            e.jsx(s, {
              width: "100%",
              display: "flex",
              margin: "spacing-none spacing-none spacing-sm spacing-none",
              justifyContent: "center",
              children: e.jsx(G, {
                width: 48,
                height: 48
              })
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "h4-semibold",
              children: "Enter your Discord ID"
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              children: "Follow the steps to link your Discord to Push and receive notifications"
            }),
            e.jsx("form", {
              onSubmit: d.handleSubmit,
              children: e.jsx(s, {
                margin: "spacing-md spacing-none spacing-none spacing-none",
                width: "100%",
                children: e.jsx(B, {
                  label: "Discord ID",
                  value: d.values.discord,
                  onChange: d.handleChange("discord"),
                  error: d.touched.discord && !!d.errors.discord,
                  errorMessage: d.touched.discord ? d.errors.discord : ""
                })
              })
            })
          ]
        }),
        f === 2 && m && e.jsxs(s, {
          width: "100%",
          children: [
            e.jsx(s, {
              width: "100%",
              display: "flex",
              margin: "spacing-none spacing-none spacing-sm spacing-none",
              justifyContent: "center",
              children: e.jsx(G, {
                width: 48,
                height: 48
              })
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "h3-semibold",
              children: "Connect your Discord"
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              color: "text-tertiary",
              children: "Follow the steps to link your Discord to Push and receive notifications"
            }),
            e.jsxs(s, {
              margin: "spacing-sm spacing-none",
              gap: "spacing-xxs",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [
                e.jsx(a, {
                  textAlign: "center",
                  variant: "bl-regular",
                  children: "Step 1: Copy the verification code"
                }),
                e.jsxs(s, {
                  display: "flex",
                  padding: "spacing-xs",
                  gap: "spacing-xxs",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "surface-tertiary",
                  width: "fit-content",
                  borderRadius: "radius-sm",
                  children: [
                    e.jsx(a, {
                      color: "text-brand-subtle",
                      variant: "bl-semibold",
                      textAlign: "center",
                      children: X(`${u}-${m}`, 10)
                    }),
                    e.jsx(ie, {
                      tooltipTitle: "Copy Address",
                      content: `${u}-${m}`,
                      size: 24
                    })
                  ]
                })
              ]
            }),
            e.jsxs(s, {
              margin: "spacing-lg spacing-none spacing-none spacing-none",
              children: [
                e.jsx(a, {
                  textAlign: "center",
                  variant: "bl-regular",
                  children: "Step 2: Visit the link and paste the code"
                }),
                e.jsx(s, {
                  margin: "spacing-xs spacing-none",
                  children: e.jsx(ee, {
                    to: (_a = V) == null ? void 0 : _a.discordExternalURL,
                    isText: true,
                    textProps: {
                      variant: "bl-semibold",
                      textAlign: "center",
                      color: "text-brand-medium"
                    },
                    children: (_b = V) == null ? void 0 : _b.discordExternalURL
                  })
                })
              ]
            }),
            e.jsx(a, {
              textAlign: "center",
              variant: "bs-regular",
              color: "text-tertiary",
              children: "Please ensure you\u2019re logged into your Discord account. Click on Complete Verification below once complete."
            })
          ]
        })
      ]
    });
  };
  Le = (n, i, t) => {
    var _a, _b;
    const C = N(), v = N(), p = N(), { account: b } = $(), [u, f] = h.useState(null), c = L({
      account: b
    }), { mutate: m, isPending: j } = Ce(), g = async () => {
      if (!c) return;
      let y;
      i && (y = await D({
        wallet: c
      }, t), !y) || m({
        channelAddress: c,
        ...i && {
          verificationProof: y
        }
      }, {
        onError: (x) => {
          n("Failed to fetch social status."), console.error("Error fetching social status:", x);
        },
        onSuccess: (x) => {
          f(x);
        }
      });
    };
    return h.useEffect(() => {
      c && !i && g();
    }, [
      c
    ]), {
      socialHandlesList: [
        {
          icon: () => e.jsx(je, {
            height: 23
          }),
          itemTitle: "Email",
          itemDescription: "Receive notifications in your email inbox",
          onClick: () => C.open(),
          userStatus: (u == null ? void 0 : u.email) || null
        },
        ((_a = V) == null ? void 0 : _a.telegramExternalURL) && {
          icon: () => e.jsx(ye, {
            height: 23
          }),
          itemTitle: "Telegram",
          itemDescription: "Receive notifications as Telegram messages",
          onClick: () => v.open(),
          userStatus: (u == null ? void 0 : u.telegram_username) || null
        },
        ((_b = V) == null ? void 0 : _b.discordExternalURL) && {
          icon: () => e.jsx(ve, {
            height: 23
          }),
          itemTitle: "Discord",
          itemDescription: "Receive notifications as Discord messages",
          onClick: () => p.open(),
          userStatus: (u == null ? void 0 : u.discord_username) || null
        }
      ].filter(Boolean),
      socialHandleStatus: u,
      modalControl: C,
      telegramModalControl: v,
      discordModalControl: p,
      isPending: j,
      fetchStatus: g,
      channelAddress: c
    };
  };
});
export {
  Be as A,
  __tla,
  Me as a,
  $e as b,
  D as g,
  Le as u
};
