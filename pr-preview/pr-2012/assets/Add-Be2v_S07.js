import { ea as r, er as s, __tla as __tla_0 } from "./index-AGa8OPve.js";
let i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  i = (o) => {
    const { svgProps: e, ...t } = o;
    return r.jsx(s, {
      componentName: "Add",
      icon: r.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          r.jsx("path", {
            d: "M16.87 4L16.87 28",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          r.jsx("path", {
            d: "M28.87 16L4.87 16",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      }),
      ...t
    });
  };
});
export {
  i as A,
  __tla
};
