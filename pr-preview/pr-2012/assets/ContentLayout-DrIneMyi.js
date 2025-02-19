import { ea as e, eb as r, eq as t, __tla as __tla_0 } from "./index-AGa8OPve.js";
let o;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  o = ({ children: a, variant: i }) => i === "verticalStretch" ? e.jsx(r, {
    alignSelf: "center",
    backgroundColor: "surface-primary",
    borderRadius: "radius-lg",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 76px)",
    overflow: "hidden",
    maxWidth: "1200px",
    width: {
      initial: "calc(100% - (var(--spacing-sm) * 2))",
      ml: "-webkit-fill-available"
    },
    css: t`
          border-bottom-right-radius: var(--radius-none);
          border-bottom-left-radius: var(--radius-none);
        `,
    children: a
  }) : e.jsx(r, {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "surface-transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1200px",
    width: "calc(100% - (var(--spacing-sm) * 2))",
    css: t`
        flex: initial;
        margin: 0 0 auto 0;
      `,
    children: a
  });
});
export {
  o as C,
  __tla
};
