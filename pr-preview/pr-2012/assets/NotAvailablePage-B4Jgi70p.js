import { ee as r, e5 as c, el as l, e9 as h, ea as t, ef as m, eg as d, eh as x, ei as g, em as f, en as n, ej as p, __tla as __tla_0 } from "./index-AGa8OPve.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  u = function(e) {
    const i = r(), { chainId: a } = c(), o = a === n.coreContractChain;
    return l.useEffect(() => {
      if (o) {
        const s = window.location.origin;
        window.location.replace(`${s}${h.Channels}`);
      }
    }), t.jsx(m, {
      theme: i,
      children: t.jsx(d, {
        style: {
          minHeight: "60vh"
        },
        children: t.jsx(x, {
          padding: "0px 20px 0px",
          children: t.jsx(g, {
            align: "center",
            children: t.jsxs(w, {
              color: "#333",
              spacing: "normal",
              size: "2rem",
              weight: 700,
              children: [
                "Kindly switch to ",
                f[n.coreContractChain],
                " Network to view this page."
              ]
            })
          })
        })
      })
    });
  };
  const w = p.h2`
  color: ${(e) => e.theme.scheme === "dark" ? e.theme.color : e.color || "#000"};
  text-shadow: 2px 0 ${(e) => e.theme.scheme === "dark" ? e.theme.color : e.color || "#000"};
  font-weight: ${(e) => e.weight || 600};
  font-size: ${(e) => e.size || "2rem"};
  text-transform: ${(e) => e.textTransform || "inherit"};
  margin: ${(e) => e.margin || "20px 0px"};
  padding: ${(e) => e.padding || "0px"};
  letter-spacing: ${(e) => e.spacing || "normal"};
  font-family: ${(e) => e.family || "'FK Grotesk Neu', 'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${(e) => e.textAlign || "inherit"};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
});
export {
  __tla,
  u as default
};
