import { ea as r, er as s, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  n = (t) => {
    const { svgProps: e, ...o } = t;
    return r.jsx(s, {
      componentName: "Copy",
      icon: r.jsxs("svg", {
        width: "inherit",
        height: "inherit",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          r.jsxs("g", {
            "clip-path": "url(#clip0_3114_35098)",
            children: [
              r.jsx("path", {
                d: "M21 21H24C25.6569 21 27 19.6569 27 18V8C27 6.34315 25.6569 5 24 5H14C12.3431 5 11 6.34315 11 8V11",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              r.jsx("path", {
                d: "M18 11H8C6.34315 11 5 12.3431 5 14V24C5 25.6569 6.34315 27 8 27H18C19.6569 27 21 25.6569 21 24V14C21 12.3431 19.6569 11 18 11Z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]
          }),
          r.jsx("defs", {
            children: r.jsx("clipPath", {
              id: "clip0_3114_35098",
              children: r.jsx("rect", {
                width: "24",
                height: "24",
                fill: "white",
                transform: "translate(4 4)"
              })
            })
          })
        ]
      }),
      ...o
    });
  };
});
export {
  n as C,
  __tla
};
