import { eS as s, ea as t, eT as o, f6 as l, eX as e, e_ as i, ej as a, eg as r, f1 as c, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let M;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function S() {
    return s.pageview("/receive"), t.jsx(d, {
      children: t.jsx(o, {
        alignItems: "stretch",
        children: t.jsx(l, {
          onClose: () => {
          },
          closeEnabled: false
        })
      })
    });
  }
  let d, D;
  d = a(r)`
  align-items: center;
  align-self: center;
  background: ${(n) => n.theme.default.bg};
  border-radius: ${e.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${e.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: auto;
  padding: ${e.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${i.laptop} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
  }

  @media ${i.mobileL} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
  }
`;
  M = () => t.jsx(D, {
    children: t.jsx(S, {})
  });
  D = a(c)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`;
});
export {
  __tla,
  M as default
};
