import { e6 as o, ea as e, ev as a, eX as n, ej as t, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let r, s, c, p, d, g, x;
  r = "/push-dapp/pr-preview/pr-2012/assets/404Graphic-BY-vXDBY.svg";
  h = () => {
    const i = o();
    return e.jsx(s, {
      children: e.jsxs(p, {
        children: [
          e.jsx(d, {
            src: r,
            alt: "Page not found"
          }),
          e.jsxs(x, {
            children: [
              e.jsx(c, {
                children: "Oops..."
              }),
              e.jsx(g, {
                children: "The page you're trying to reach doesn't exist."
              })
            ]
          }),
          e.jsx(a, {
            variant: "primary",
            size: "large",
            onClick: () => i("/channels"),
            children: "Go to Home"
          })
        ]
      })
    });
  };
  s = t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${n.CONSTANTS.HEADER_HEIGHT}px);
  width: 80%;
  border-radius: ${n.ADJUSTMENTS.RADIUS.LARGE};
  padding: 20px;
  box-sizing: border-box;
  // margin: ${n.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  margin: auto;
`;
  c = t.p`
  font-size: 48px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: black;
`;
  p = t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
  d = t.img`
  width: 355.7px;
  height: 205.79px;
  border-radius: 16px;
  margin: 0 auto;
`;
  g = t.p`
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;
  x = t.div`
  gap: 16px;
`;
});
export {
  __tla,
  h as default
};
