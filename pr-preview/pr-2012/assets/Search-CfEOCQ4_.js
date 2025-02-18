import { ea as r, er as t, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  i = (e) => {
    const { svgProps: o, ...s } = e;
    return r.jsx(t, {
      componentName: "Search",
      icon: r.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...o,
        children: [
          r.jsx("circle", {
            cx: "15.12",
            cy: "14.25",
            r: "9",
            stroke: "currentColor",
            "stroke-width": "2"
          }),
          r.jsx("path", {
            d: "M21.62 20.75L27.62 26.75",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          })
        ]
      }),
      ...s
    });
  };
});
export {
  i as S,
  __tla
};
