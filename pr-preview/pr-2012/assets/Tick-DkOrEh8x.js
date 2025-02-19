import { ea as r, er as e, __tla as __tla_0 } from "./index-AGa8OPve.js";
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
    const { svgProps: s, ...t } = o;
    return r.jsx(e, {
      componentName: "Tick",
      icon: r.jsx("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s,
        children: r.jsx("path", {
          d: "M4 17.1316L11.5789 24.7105L28 8.28949",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        })
      }),
      ...t
    });
  };
});
export {
  i as T,
  __tla
};
