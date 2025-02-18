import { e7 as s, gd as $, ge as i, gf as R, gg as D, gh as u, gi as P, e5 as v, gj as H, fO as N, ee as B, gk as y, e_ as m, e6 as G, ea as o, eT as L, fb as K, gl as W, gm as z, ej as a, gn as J, ed as Y, eX as E, eZ as T, en as F, go as Z, f1 as q, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { L as X, __tla as __tla_1 } from "./LoaderSpinner-I7nvbKwW.js";
import { s as Q, __tla as __tla_2 } from "./toastController-C-ZL5sEw.js";
let ue;
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
  })()
]).then(async () => {
  let ee, M, w, te, oe, se, ne, ie, ae, re, de, ce, le, pe, Ee, Se, he;
  ee = ({ account: e, env: r, chainId: S, socketType: d }) => {
    const [t, x] = s.useState(null), [c, h] = s.useState(t == null ? void 0 : t.connected), [g, f] = s.useState(""), [I, A] = s.useState(""), { videoCallData: C, incomingCall: O, connectWrapper: b, requestWrapper: j, acceptRequestWrapper: V, isVideoCallInitiator: k } = s.useContext($), _ = () => {
      t == null ? void 0 : t.on(i.EVENTS.CONNECT, () => {
        h(true);
      }), t == null ? void 0 : t.on(i.EVENTS.DISCONNECT, () => {
        h(false);
      }), t == null ? void 0 : t.on(i.EVENTS.USER_FEEDS, (l) => {
        var _a, _b, _c, _d, _e, _f;
        try {
          const { payload: p } = l || {};
          if (Object.keys(p).length > 0) if (((_b = (_a = p == null ? void 0 : p.data) == null ? void 0 : _a.additionalMeta) == null ? void 0 : _b.type) === `${D.ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`) {
            const n = JSON.parse(p.data.additionalMeta.data);
            console.debug("RECIEVED VIDEO DATA", n), n.status === u.VideoCallStatus.INITIALIZED ? O(n) : n.status === u.VideoCallStatus.RECEIVED || n.status === u.VideoCallStatus.RETRY_RECEIVED ? b(n) : n.status === u.VideoCallStatus.DISCONNECTED ? window.location.reload() : n.status === u.VideoCallStatus.RETRY_INITIALIZED && k() ? j({
              senderAddress: n.recipientAddress,
              recipientAddress: n.senderAddress,
              chatId: n.chatId,
              retry: true
            }) : n.status === u.VideoCallStatus.RETRY_INITIALIZED && !k() && V({
              signalData: n.signalData,
              senderAddress: n.recipientAddress,
              recipientAddress: n.senderAddress,
              chatId: n.chatId,
              retry: true
            });
          } else ((_d = (_c = p == null ? void 0 : p.data) == null ? void 0 : _c.additionalMeta) == null ? void 0 : _d.data) === "PUSH SPACE META MESSAGE" || ((_f = (_e = p == null ? void 0 : p.data) == null ? void 0 : _e.additionalMeta) == null ? void 0 : _f.type) === `${D.ADDITIONAL_META_TYPE.PUSH_SPACE}+1` || Q(p);
        } catch (p) {
          console.error("DAPP Error while diplaying received Notification: ", p);
        }
      }), t == null ? void 0 : t.on(i.EVENTS.CHAT_RECEIVED_MESSAGE, (l) => {
        f(l);
      }), t == null ? void 0 : t.on(i.EVENTS.CHAT_GROUPS, (l) => {
        console.info(l), A(l);
      });
    }, U = () => {
      t == null ? void 0 : t.off(i.EVENTS.CONNECT), t == null ? void 0 : t.off(i.EVENTS.DISCONNECT), t == null ? void 0 : t.off(i.EVENTS.USER_FEEDS), t == null ? void 0 : t.off(i.EVENTS.CHAT_GROUPS), t == null ? void 0 : t.off(i.EVENTS.CHAT_RECEIVED_MESSAGE);
    };
    return s.useEffect(() => (t && _(), () => {
      t && U();
    }), [
      t
    ]), s.useEffect(() => {
      if (e && S && r) {
        t && (t == null ? void 0 : t.disconnect());
        const l = i.createSocketConnection({
          user: d == "chat" ? e : R(e, S),
          socketType: d,
          env: r
        });
        x(l);
      }
    }, [
      e,
      S,
      r
    ]), {
      epnsSDKSocket: t,
      isSDKSocketConnected: c,
      messagesSinceLastConnection: g,
      groupInformationSinceLastConnection: I
    };
  };
  M = "data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58697%2010.5215V15.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.1957%203.91268V22.0868'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.21688L15.8047%2018.7822'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4132%2010.5215L22.4132%2015.478'%20stroke='black'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  w = "data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58594%2010.5215V15.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.19531%203.91309V22.0872'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8047%207.2168L15.8047%2018.7822'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.4141%2010.5215L22.4141%2015.4781'%20stroke='%23787E99'%20stroke-width='3.13045'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  te = (e) => s.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  }, s.createElement("path", {
    d: "M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",
    fill: "#D53A94"
  }), s.createElement("path", {
    d: "M15.75 23.999H32.2496",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), s.createElement("path", {
    d: "M24.0039 15.75V32.2496",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  oe = ({ spaceid: e }) => {
    const { SpaceFeedComponent: r, SpaceInvitesComponent: S, CreateSpaceComponent: d } = s.useContext(P), { account: t } = v(), { setSpaceId: x, spaceInvites: c } = s.useContext(H), { connectedUser: h } = s.useContext(N), g = B(), f = y(m.mobileL);
    s.useEffect(() => {
      e && x(e);
    }, [
      e
    ]);
    let I = G();
    const A = (C) => {
      x(C), I(`/spaces/${C}`);
    };
    return o.jsxs(se, {
      children: [
        o.jsxs(ne, {
          children: [
            o.jsx(L, {
              width: "48px",
              maxWidth: "48px",
              borderRadius: "100%",
              overflow: "hidden",
              margin: "0 5px 0 0",
              children: o.jsx(K, {
                alt: "Profile",
                src: h == null ? void 0 : h.profilePicture
              })
            }),
            o.jsx(ie, {
              children: W(t, 6)
            }),
            o.jsx(ae, {
              children: f ? o.jsx(d, {
                children: o.jsx(te, {})
              }) : o.jsx(d, {})
            }),
            o.jsx(S, {
              children: o.jsxs(de, {
                children: [
                  o.jsx(z, {
                    src: (g == null ? void 0 : g.scheme) == "light" ? M : w,
                    srcSet: (g == null ? void 0 : g.scheme) == "light" ? M : w,
                    width: "30px"
                  }),
                  c > 0 && o.jsx(re, {
                    children: c
                  })
                ]
              })
            })
          ]
        }),
        o.jsx(ce, {
          children: o.jsx(r, {
            showTabs: true,
            orientation: "vertical",
            width: f ? 360 : "100%",
            height: "100%",
            onBannerClickHandler: (C) => {
              A(C);
            }
          })
        })
      ]
    });
  };
  se = a.div`
  background: ${({ theme: e }) => e.default.bg};
  height: 100%;
  width: calc(100% - 440px);
  border-radius: 32px !important;
  padding: 20px !important;

  box-sizing: border-box !important;

  @media ${m.laptop} {
    width: 100%;
  }

  @media ${m.mobileL} {
    padding: 5px !important;
    border-radius: 15px !important;
  }
`;
  ne = a.div`
  border: 1px solid ${({ theme: e }) => e.default.borderColor};
  background: ${({ theme: e }) => e.chat.sendMesageBg};
  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
  ie = a.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: normal;
  margin-left: 10px;
  color: ${({ theme: e }) => e.spaceHostTextColor};
`;
  ae = a.div`
  margin: 0px 14px 0px auto;

  @media ${m.mobileL} {
    padding-top: 5px;
  }
`;
  re = a.div`
  position: absolute;
  top: 15px;
  left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 19px;
  width: 20px;
  border-radius: 8px;
  background: #d53a94;
  color: #ffffff;
`;
  de = a.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
`;
  ce = a.div`
  margin-top: 30px;
  overflow-y: scroll;
  max-height: 100%; //overflow for feed items itself
  // max-height: 500px; //overflow for feed items itself
  // margin-bottom: 70px;
  box-sizing: border-box !important;
`;
  le = ({ spaceid: e }) => {
    const { account: r, chainId: S } = v(), [d, t] = s.useState(true), { getUser: x, connectedUser: c, setConnectedUser: h } = s.useContext(N);
    ee({
      account: r,
      chainId: S,
      env: F.appEnv
    }), s.useEffect(() => {
      t(true), h(null);
    }, [
      r
    ]), s.useEffect(() => {
      d && (h(c), g());
    }, [
      c
    ]);
    const g = async () => {
      var _a;
      const f = J({
        account: r
      });
      ((_a = c == null ? void 0 : c.wallets) == null ? void 0 : _a.toLowerCase()) !== (f == null ? void 0 : f.toLowerCase()) && await x(), t(false);
    };
    return o.jsx(pe, {
      children: d ? o.jsx(Se, {
        children: o.jsx(L, {
          children: o.jsx(X, {
            type: Y.SEAMLESS,
            spinnerSize: 24
          })
        })
      }) : o.jsx(oe, {
        spaceid: e
      })
    });
  };
  pe = a.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  // background: ${(e) => e.theme.default.bg};
  // border-radius: ${E.ADJUSTMENTS.RADIUS.LARGE};
  // box-shadow: ${E.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  // flex: initial;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // padding: 13px 13px 13px 0px;
  margin: 0px 0px 17px 14px;

  // margin: ${E.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  max-height: calc(
    100vh - ${E.CONSTANTS.HEADER_HEIGHT}px - ${T.MINI_MODULES.DESKTOP.TOP} -
      ${T.MINI_MODULES.DESKTOP.BOTTOM}
  );

  @media ${m.laptop} {
    margin: ${E.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(
      100vh - ${E.CONSTANTS.HEADER_HEIGHT}px - ${T.MINI_MODULES.TABLET.TOP} -
        ${T.MINI_MODULES.TABLET.BOTTOM}
    );
  }

  @media ${m.mobileL} {
    margin: ${E.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${E.CONSTANTS.HEADER_HEIGHT}px - ${T.BIG_MODULES.MOBILE.TOP} -
        ${T.BIG_MODULES.MOBILE.BOTTOM}
    );
  }
`;
  Ee = a.div`
  padding: 20px;
`;
  Se = a(Ee)`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  ue = () => {
    let { spaceid: e } = Z();
    return o.jsx(he, {
      children: o.jsx(le, {
        spaceid: e
      })
    });
  };
  he = a(q)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;
});
export {
  __tla,
  ue as default
};
