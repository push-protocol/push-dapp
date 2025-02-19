import { ea as r, er as e, __tla as __tla_0 } from "./index-AGa8OPve.js";
let n, h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  n = (t) => {
    const { svgProps: s, ...o } = t;
    return r.jsx(e, {
      componentName: "ArrowUpRight",
      icon: r.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s,
        children: [
          r.jsxs("g", {
            "clip-path": "url(#clip0_1868_1867)",
            children: [
              r.jsx("path", {
                d: "M4.34952 13.3443L13.6505 4.65573",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              r.jsx("path", {
                d: "M6.34229 4.40686L13.6506 4.65568L13.4017 11.9639",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]
          }),
          r.jsx("defs", {
            children: r.jsx("clipPath", {
              id: "clip0_1868_1867",
              children: r.jsx("rect", {
                width: "18",
                height: "18",
                fill: "white"
              })
            })
          })
        ]
      }),
      ...o
    });
  };
  h = (t) => {
    const { svgProps: s, ...o } = t;
    return r.jsx(e, {
      componentName: "Dash",
      icon: r.jsx("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: r.jsx("path", {
          d: "M4 16H28",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        })
      }),
      ...o
    });
  };
});
export {
  n as A,
  h as D,
  __tla
};
