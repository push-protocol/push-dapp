import { e7 as r, ea as e, ex as l, eb as u, eB as x, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { C as d, __tla as __tla_1 } from "./Copy-BaAp0b7W.js";
let m;
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
  m = ({ tooltipTitle: a, content: i, size: n }) => {
    const [o, s] = r.useState(false), [p, t] = r.useState(false), c = () => {
      x(i), t(true), setTimeout(() => t(false), 2e3);
    };
    return e.jsx(l, {
      title: o ? p ? "Copied!" : a : void 0,
      children: e.jsx(u, {
        cursor: "pointer",
        display: "flex",
        onClick: c,
        onMouseEnter: () => s(true),
        onMouseLeave: () => s(false),
        children: e.jsx(d, {
          color: o ? "icon-primary" : "icon-tertiary",
          size: n || 12
        })
      })
    });
  };
});
export {
  m as C,
  __tla
};
