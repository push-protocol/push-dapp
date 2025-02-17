import { ee as y, el as C, fg as D, ea as e, eW as l, fh as u, ej as h, e7 as g, fi as b, fj as j, fk as T, eX as S, fl as B, fm as m, ec as o, ed as s, fn as t, fo as c, fp as O, fq as E, e_ as A, f1 as w, eT as G, eC as L, fr as k, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { s as v, __tla as __tla_1 } from "./toastController-DJ-OPxTX.js";
let K;
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
  })()
]).then(async () => {
  let f, _, N, z, U, W, $, V, n, Y;
  f = ({ onClose: r, InnerComponentProps: i }) => {
    const { heading: p } = i, a = y(), d = C.useRef(), x = () => r();
    return D(d, () => x()), e.jsxs(_, {
      ref: d,
      children: [
        e.jsx(l, {
          color: a.default.color,
          fontSize: "32px",
          fontWeight: 600,
          children: p
        }),
        e.jsx(u, {
          background: "#e20880",
          color: "#fff",
          flex: "initial",
          borderRadius: "15px",
          padding: "10px 20px",
          onClick: () => x(),
          children: e.jsx(l, {
            children: "Close"
          })
        })
      ]
    });
  };
  _ = h.div`
  min-width: 25vw;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px;
  background: ${(r) => r.theme.default.secondaryBg};
`;
  N = (r, i) => {
    var p = "";
    const a = Math.floor(Math.random() * i + 1);
    for (var d = 0; d < a; d++) {
      d > 0 && (p += "<br/>");
      for (var x = 0; x < r; x++) p += z(r);
    }
    return p;
  };
  z = (r) => {
    for (var i = "", p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ", a = p.length, d = 0; d < r; d++) i += p.charAt(Math.floor(Math.random() * a));
    return i;
  };
  U = () => {
    L.dark(N(20, 1), {
      type: L.TYPE.INFO,
      position: L.POSITION.BOTTOM_RIGHT,
      autoClose: 1e4,
      hideProgressBar: false
    });
  };
  W = () => {
    const r = {
      data: {
        app: "Testing Channel",
        sid: "1372",
        url: "https://epns.io",
        acta: "",
        aimg: "",
        amsg: "Testing 3..2..1",
        asub: "",
        icon: "https://gateway.ipfs.io/ipfs/bafybeifvqzq7pgr547ridaxceikskfvuxxrfz2m5vlpk7uljikwd3ybesa/QmdKPEWYv1xR6A6pEPPUwfaWSTztjeMWLVaaMjjEMo8foU",
        type: 1,
        epoch: "1663058708",
        etime: null,
        hidden: "0",
        sectype: null
      },
      recipients: "0xb59cdc85cacd15097ece4c77ed9d225014b4d56d",
      notification: {
        body: N(5, 3),
        title: "Testing Channel - "
      }
    };
    v(r, true);
  };
  $ = () => {
    const r = y(), [i, p] = g.useState(0), [a, d] = g.useState(null);
    g.useEffect(() => {
      setTimeout(() => {
        i < 100 ? p(i + 1) : p(0);
      }, 100);
    }, [
      i
    ]), g.useEffect(() => {
      a || d(N(20, 5));
    }, [
      a
    ]);
    const { isModalOpen: x, showModal: M, ModalComponent: P } = b(), { showModal: R, ModalComponent: I } = b();
    return e.jsxs(V, {
      children: [
        e.jsxs(n, {
          caption: "hooks/useModalBlur  isFullScreen={true}",
          children: [
            e.jsx(u, {
              background: "#e20880",
              color: "#fff",
              flex: "initial",
              borderRadius: "15px",
              padding: "20px 20px",
              onClick: R,
              children: e.jsx(l, {
                children: "Show Full Screen Modal"
              })
            }),
            e.jsx(I, {
              InnerComponent: f,
              modalPadding: "0px",
              InnerComponentProps: {
                heading: "Full Screen Modal"
              },
              modalPosition: j.ON_ROOT
            })
          ]
        }),
        e.jsxs(n, {
          caption: "hooks/useModalBlur  isFullScreen={false}",
          children: [
            x && e.jsx(l, {
              color: r.default.color,
              children: a.slice(0, 70)
            }),
            e.jsx(u, {
              background: "#e20880",
              color: "#fff",
              flex: "initial",
              borderRadius: "15px",
              padding: "20px 20px",
              onClick: M,
              children: e.jsx(l, {
                children: "Show Local Modal"
              })
            }),
            e.jsx(P, {
              InnerComponent: f,
              modalPadding: "0px",
              InnerComponentProps: {
                heading: "Local Modal"
              },
              modalPosition: j.ON_PARENT
            })
          ]
        }),
        e.jsx(n, {
          caption: "components/reusables/progress/ProgressBarUnit",
          children: e.jsx(T, {
            percent: i,
            color: S.COLORS.PRIMARY_PINK
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/progress/ProgressBarUnit",
          children: e.jsx(T, {
            percent: i,
            color: S.COLORS.PRIMARY_PINK,
            notice: "This is notice on bottom"
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/progress/ProgressBarUnit noticePositioning=TOP",
          children: e.jsx(T, {
            percent: i,
            color: S.COLORS.PRIMARY_PINK,
            notice: "This is notice on top",
            noticePositioning: B.TOP
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/spinner/SpinnerUnit",
          children: e.jsx(m, {})
        }),
        e.jsx(n, {
          caption: 'components/reusables/spinner/SpinnerUnit - color="#529015"',
          children: e.jsx(m, {
            color: "#529015"
          })
        }),
        e.jsx(n, {
          caption: 'components/reusables/spinner/SpinnerUnit - completed=true"',
          children: e.jsx(m, {
            completed: true
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE title=null",
          children: e.jsx(o, {
            type: s.STANDALONE
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE_MINIMAL title=null",
          children: e.jsx(o, {
            type: s.STANDALONE_MINIMAL
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "This time it's done",
            spinnerType: t.COMPLETED
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "This time it's a warning",
            spinnerType: t.WARNING
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "This time it's an error",
            spinnerType: t.ERROR
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=seamless title=null spinnerSize=20",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            spinnerType: t.PROCESSING,
            spinnerSize: 20
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerSize=24",
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Randomized With Spinner Size",
            spinnerType: t.PROCESSING,
            spinnerSize: 24
          })
        }),
        e.jsx(n, {
          caption: 'components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerColor="#083c84"',
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Randomized With Spinner Color",
            spinnerType: t.PROCESSING,
            spinnerColor: "#083c84"
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerSize=24",
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "This time it's done",
            spinnerType: t.COMPLETED,
            spinnerSize: 24
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "Randomized With Long Text, Very Long",
            spinnerType: t.COMPLETED
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE progressEnabled=true",
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Loading Something Cool",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Step 1: Loading coolness",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerEnabled=false progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Step 2: No Spinner, Just Progress",
            spinnerEnabled: false,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE title=null width=50% spinnerEnabled=false progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.STANDALONE,
            width: "50%",
            title: null,
            spinnerEnabled: false,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: 'components/reusables/loaders/LoaderSpinner - type=STANDALONE progressEnabled=true progressPositioning=BOTTOM progressColor="#EREDDD"',
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Step 1: Loading color coolness",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progressColor: "#AA33EE",
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE width=80% progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.STANDALONE,
            width: "80%",
            title: "Step 1: Loading coolness with minimal",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE_MINIMAL width=80% progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.STANDALONE_MINIMAL,
            width: "80%",
            title: "Step 1: Loading coolness with minimal",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=SEAMLESS width=80% progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            width: "80%",
            title: "Step 1: Loading coolness with minimal",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=SEAMLESS progressEnabled=true progressPositioning=BOTTOM",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "Step 1: Loading minimal no width",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=SEAMLESS progressEnabled=true progressPositioning=BOTTOM progressNotice=Some_Notice",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "Step 1: Loading minimal no width",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.BOTTOM,
            progress: i,
            progressNotice: "This might take some time to load"
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=SEAMLESS progressEnabled=true progressPositioning=TOP progressNotice=Some_Notice",
          children: e.jsx(o, {
            type: s.SEAMLESS,
            title: "Step 1: Loading minimal no width",
            spinnerType: t.PROCESSING,
            progressEnabled: true,
            progressPositioning: c.TOP,
            progress: i,
            progressNotice: "This might take some time to load"
          })
        }),
        e.jsxs(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=seamless overlay=normal blur=0",
          children: [
            e.jsx(l, {
              color: r.default.color,
              children: a
            }),
            e.jsx(o, {
              type: s.SEAMLESS,
              title: "Randomized With Long Text, Very Long",
              spinnerType: t.PROCESSING
            })
          ]
        }),
        e.jsxs(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=seamless overlay=ontop blur=0",
          children: [
            e.jsx(l, {
              color: r.default.color,
              children: a
            }),
            e.jsx(o, {
              type: s.SEAMLESS,
              overlay: O.ONTOP,
              title: "Another Very Randomized Long Text",
              spinnerType: t.PROCESSING
            })
          ]
        }),
        e.jsxs(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=seamless overlay=ontop blur=5",
          children: [
            e.jsx(l, {
              color: r.default.color,
              children: a
            }),
            e.jsx(o, {
              type: s.SEAMLESS,
              overlay: O.ONTOP,
              blur: 5,
              title: "And Yet Another Randomined Loooong Text",
              spinnerType: t.PROCESSING
            })
          ]
        }),
        e.jsxs(n, {
          caption: "components/reusables/loaders/LoaderSpinner - type=STANDALONE overlay=ontop blur=5",
          children: [
            e.jsx(l, {
              color: r.default.color,
              children: a
            }),
            e.jsx(o, {
              type: s.STANDALONE,
              overlay: O.ONTOP,
              blur: 5,
              title: "Randomized With Long Text, Very Long",
              spinnerType: t.PROCESSING
            })
          ]
        }),
        e.jsx(n, {
          caption: "components/reusables/toasts/ToastController",
          children: e.jsx(u, {
            background: "#e20880",
            color: "#fff",
            flex: "initial",
            borderRadius: "15px",
            padding: "20px 20px",
            onClick: () => {
              W();
            },
            children: e.jsx(l, {
              children: "Trigger Random Notification"
            })
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/toasts/ToastController",
          children: e.jsx(u, {
            background: "#e20880",
            color: "#fff",
            flex: "initial",
            borderRadius: "15px",
            padding: "20px 20px",
            onClick: () => {
              U();
            },
            children: e.jsx(l, {
              children: "Trigger Random Toast"
            })
          })
        }),
        e.jsx(n, {
          caption: "components/reusables/loaders/LoaderSpinner",
          children: e.jsx(o, {
            type: s.STANDALONE,
            title: "Randomized",
            spinnerType: t.PROCESSING
          })
        }),
        e.jsxs(n, {
          caption: "components/reusables/blurs/BlurBG - Blur=10",
          children: [
            e.jsx(u, {
              background: "#e20880",
              color: "#fff",
              flex: "initial",
              borderRadius: "15px",
              padding: "20px 20px",
              onClick: () => {
                console.warn("Nothing Should Be Clickable");
              },
              children: e.jsx(l, {
                children: "Try to Trigger"
              })
            }),
            e.jsx(E, {
              blur: 10,
              zIndex: 99
            })
          ]
        }),
        e.jsxs(n, {
          caption: "components/reusables/blurs/BlurBG  - Blur=5",
          children: [
            e.jsx(T, {
              percent: i,
              color: S.COLORS.PRIMARY_PINK
            }),
            e.jsx(o, {
              type: s.SEAMLESS,
              title: "Randomized With Long Text, Very Long",
              spinnerType: t.PROCESSING
            }),
            e.jsx(E, {
              blur: 5
            })
          ]
        }),
        e.jsxs(n, {
          caption: "components/reusables/blurs/BlurBG  - Blur=5",
          children: [
            e.jsx(o, {
              type: s.SEAMLESS,
              title: "This time it's done",
              spinnerType: t.COMPLETED
            }),
            e.jsx(E, {
              blur: 5,
              zIndex: 99
            })
          ]
        }),
        e.jsxs(n, {
          caption: "components/reusables/blurs/BlurBG  - Disabled",
          children: [
            e.jsx(u, {
              background: "#e20880",
              color: "#fff",
              flex: "initial",
              borderRadius: "15px",
              padding: "20px 20px",
              onClick: () => {
                console.info("This should be clickable");
              },
              children: e.jsx(l, {
                children: "Try to Trigger"
              })
            }),
            e.jsx(E, {
              blur: 0
            })
          ]
        })
      ]
    });
  };
  V = h(w)`
  align-items: center;
  align-self: stretch;
  background: ${(r) => r.theme.default.bg};
  border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${S.ADJUSTMENTS.MODULE_BOX_SHADOW};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  position: relative;

  margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${A.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${A.mobileM} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
  }
`;
  n = h(G)`
  border-radius: 32px;
  border: 1px solid ${(r) => r.theme.default.secondaryBg};
  background: ${(r) => r.theme.default.secondaryBg};
  margin: 20px;
  min-height: 100px;
  min-width: 25%;
  overflow: hidden;
  padding: 20px;

  &:after {
    background: ${(r) => r.theme.nav.bg};
    bottom: 0;
    content: '${(r) => r.caption}';
    font-size: 10px;
    left: 0;
    padding: 2px;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 100;
  }
`;
  K = () => e.jsx(Y, {
    children: e.jsx($, {})
  });
  Y = h(k)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
`;
});
export {
  __tla,
  K as default
};
