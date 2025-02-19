import { fc as h, ee as S, eQ as f, ea as t, eT as a, eU as p, eV as n, eY as E, eX as e, eZ as s, e_ as l, ej as o, eg as g, ei as c, e$ as I, fd as A, f1 as M, __tla as __tla_0 } from "./index-AGa8OPve.js";
let j;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u() {
    const r = h(), i = S(), { run: x } = f((T) => T.userJourney), D = () => {
      x === false && r(A(true));
    };
    return t.jsx(m, {
      children: t.jsxs(a, {
        children: [
          t.jsxs(a, {
            align: "stretch",
            justify: "flex-start",
            margin: "0px 0px 40px 0px",
            children: [
              t.jsx(p, {
                children: t.jsx(n, {
                  weight: "400",
                  size: "32px",
                  color: i.color,
                  children: "Live Walkthrough"
                })
              }),
              t.jsx(n, {
                color: i.default.secondaryColor,
                weight: "400",
                size: "16px",
                textTransform: "none",
                textAlign: "center",
                spacing: "normal",
                margin: "0px 0px",
                children: "Let's walk you through the core functions of Push (EPNS), the communication protocol of Web3!"
              })
            ]
          }),
          t.jsx(a, {
            justify: "flex-start",
            children: t.jsx(U, {
              children: t.jsxs(d, {
                onClick: () => {
                  D();
                },
                hover: "#e20880",
                children: [
                  t.jsx(n, {
                    color: i.color,
                    children: "\u{1F449} Show me everything!"
                  }),
                  t.jsx(E, {
                    size: 20,
                    color: "#ddd"
                  })
                ]
              })
            })
          })
        ]
      })
    });
  }
  let m, d, N, U, $;
  m = o(g)`
  align-items: center;
  align-self: center;
  background: ${(r) => r.theme.default.bg};
  border-radius: ${e.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${e.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${s.MINI_MODULES.DESKTOP.RIGHT} - ${s.MINI_MODULES.DESKTOP.LEFT} -
      ${e.ADJUSTMENTS.PADDING.BIG} - ${e.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${e.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${l.laptop} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${s.MINI_MODULES.TABLET.RIGHT} - ${s.MINI_MODULES.TABLET.LEFT} -
        ${e.ADJUSTMENTS.PADDING.DEFAULT} - ${e.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${l.mobileM} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${s.MINI_MODULES.MOBILE.RIGHT} - ${s.MINI_MODULES.MOBILE.LEFT} -
        ${e.ADJUSTMENTS.PADDING.DEFAULT} - ${e.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;
  d = o(I)`
  align-items: stretch;
  align-self: stretch;
`;
  N = o(c)`
  align-items: stretch;
  align-self: stretch;
`;
  U = o(c)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${(r) => r.theme.qnaBgBorder};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;

  & ${d} {
    background: ${(r) => r.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;

    & ${n} {
      font-weight: 400;
      letter-spacing: normal;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${n} {
        color: #fff;
      }
    }
  }

  & ${N} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: #fff;

    & ${n} {
      line-height: 1.5em;
      margin: 10px;
      color: #000;
      font-size: 1.05em;
    }
  }
`;
  j = () => t.jsx($, {
    children: t.jsx(u, {})
  });
  $ = o(M)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`;
});
export {
  __tla,
  j as default
};
