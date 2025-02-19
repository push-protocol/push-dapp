import { ee as i, ea as t, ef as o, eg as a, eh as s, ei as r, ej as m, __tla as __tla_0 } from "./index-AGa8OPve.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  l = function(e) {
    const n = i();
    return t.jsx(o, {
      theme: n,
      children: t.jsx(a, {
        style: {
          minHeight: "60vh"
        },
        children: t.jsx(s, {
          padding: "0px 20px 0px",
          children: t.jsxs(r, {
            align: "center",
            children: [
              console.info(e.theme),
              t.jsx(h, {
                color: "#333",
                spacing: "normal",
                size: "4rem",
                weight: 700,
                children: "Coming soon."
              })
            ]
          })
        })
      })
    });
  };
  const h = m.h2`
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
    font-size: 2.8rem;
  }
`;
});
export {
  __tla,
  l as default
};
