import { eO as i, ea as t, eP as c, eb as l, ep as r, eq as x, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { i as p, __tla as __tla_1 } from "./StakingVariant-yZjGbtoa.js";
let h, u;
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
  u = ({ variant: n, onClose: s, purchasedPlan: o, onAction: a }) => {
    const e = i[n](o == null ? void 0 : o.planName, o == null ? void 0 : o.daysRemaining);
    return t.jsx(c, {
      variant: e.variant,
      description: e.description,
      onClose: e.variant !== "warning" ? () => s == null ? void 0 : s() : void 0,
      onAction: () => a == null ? void 0 : a(),
      actionText: e.actionText
    });
  };
  h = ({ title: n }) => {
    const s = async () => {
      await p();
    };
    return t.jsxs(l, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "spacing-xxxs",
      children: [
        t.jsx(r, {
          variant: "bes-semibold",
          color: "text-tertiary",
          children: n
        }),
        t.jsx(r, {
          css: x`
          cursor: pointer;
        `,
          variant: "bes-semibold",
          color: "text-brand-medium",
          onClick: s,
          children: "Import Token"
        })
      ]
    });
  };
});
export {
  h as I,
  u as P,
  __tla
};
