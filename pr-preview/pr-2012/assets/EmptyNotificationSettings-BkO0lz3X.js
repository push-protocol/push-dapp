import { ea as e, ev as n, f9 as l, fa as c, ej as o, fb as d, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { F as m, __tla as __tla_1 } from "./index.esm-BoXK_j3g.js";
let y, v, S;
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
  let g, x, f, p, u;
  y = ({ onClick: t }) => e.jsx(n, {
    leadingIcon: e.jsx(l, {}),
    onClick: t,
    size: "small",
    variant: "tertiary",
    children: "Add Delegate"
  });
  S = ({ onClick: t }) => e.jsx(n, {
    leadingIcon: e.jsx(m, {}),
    onClick: t,
    size: "small",
    variant: "tertiary",
    children: "Manage Settings"
  });
  g = ({ onClick: t, title: i }) => e.jsx(n, {
    variant: "outline",
    size: "small",
    onClick: t,
    children: i || "Modify Settings"
  });
  v = ({ description: t, onClick: i, title: s, buttonTitle: a, showTopBorder: r = true }) => e.jsxs(x, {
    showTopBorder: r,
    children: [
      e.jsx(u, {
        src: c,
        alt: "No Settings",
        width: "24px",
        height: "24px"
      }),
      e.jsx(f, {
        children: s
      }),
      e.jsx(p, {
        children: t
      }),
      e.jsx(g, {
        onClick: i,
        title: a
      })
    ]
  });
  x = o.div`
  border-top: ${(t) => t.showTopBorder && `1px solid ${t.theme.default.borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;
  f = o.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: normal;
  text-align: left;
  color: ${(t) => t.theme.default.color};
`;
  p = o.div`
  margin-top: 1px;
  margin-bottom: 16px;
  color: ${(t) => t.theme.default.secondaryColor};
`;
  u = o(d)`
  color: ${(t) => t.theme.default.color};
  margin-top: 32px;
  margin-bottom: 12px;
`;
});
export {
  y as A,
  v as E,
  S as M,
  __tla
};
