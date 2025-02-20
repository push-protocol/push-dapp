import { e7 as n, ea as t, eb as a, ep as c, eq as b, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  g = ({ steps: l, setActiveStepKey: d, completedSteps: r }) => {
    const [u, x] = n.useState(0), s = n.useRef(null), o = l == null ? void 0 : l.length, h = (e) => {
      (r == null ? void 0 : r.includes(e)) && d(e);
    }, i = n.useCallback(() => {
      s.current && x((s.current.offsetWidth - 32 * (o - 1)) / o);
    }, []);
    return n.useEffect(() => (i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    }), [
      i
    ]), t.jsx(a, {
      display: "flex",
      gap: "spacing-lg",
      justifyContent: "space-between",
      ref: s,
      width: "inherit",
      css: b`
        box-sizing: content-box;
      `,
      children: l.map((e, p) => t.jsxs(a, {
        display: "flex",
        flexDirection: "column",
        gap: "spacing-xs",
        width: `${u}px`,
        cursor: "pointer",
        onClick: () => h(e.value),
        children: [
          t.jsx(c, {
            textAlign: "center",
            color: r.includes(e.value) ? "text-brand-medium" : "text-tertiary",
            variant: "h5-semibold",
            ellipsis: true,
            display: {
              ml: "none",
              initial: "block"
            },
            children: e.label
          }),
          t.jsx(c, {
            ellipsis: true,
            textAlign: "center",
            variant: "h6-semibold",
            display: {
              ml: "block",
              initial: "none"
            },
            children: e.label
          }),
          t.jsx(a, {
            height: "4px",
            borderRadius: "radius-xxs",
            backgroundColor: r.includes(e.value) ? "stroke-brand-medium" : "stroke-tertiary"
          })
        ]
      }, p))
    });
  };
});
export {
  g as S,
  __tla
};
