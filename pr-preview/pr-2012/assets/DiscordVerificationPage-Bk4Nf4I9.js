import { f3 as c, fe as d, fZ as l, ea as e, eb as t, ep as i, ev as u, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { C as m, __tla as __tla_1 } from "./ContentLayout-BGhKIoso.js";
import { D as h, __tla as __tla_2 } from "./Discord-BvmoibNr.js";
import { u as p, __tla as __tla_3 } from "./useDiscordSession-gEKzQ6dv.js";
let w;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  let x, f, g, D;
  x = (s) => s;
  f = (s) => c({
    method: "GET",
    url: "https://discord.com/api/users/@me",
    headers: {
      Authorization: `Bearer ${s}`
    }
  }).then((r) => x(r.data));
  g = (s) => d({
    queryKey: [
      l,
      s
    ],
    queryFn: () => f(s),
    enabled: !!s
  });
  D = () => {
    const r = new URLSearchParams(location.hash.substring(1)).get("access_token");
    p();
    const a = localStorage.getItem("access_token"), { data: o } = g(a), n = () => {
      o && (localStorage.setItem("username", o.username), window.close());
    };
    return r || window.close(), e.jsx(t, {
      display: "flex",
      alignItems: "center",
      height: "calc(100vh - 140px)",
      children: e.jsxs(t, {
        display: "flex",
        padding: "spacing-md",
        flexDirection: "column",
        alignItems: "center",
        width: "360px",
        gap: "spacing-xs",
        backgroundColor: "surface-primary",
        borderRadius: "radius-md",
        border: "border-sm solid stroke-secondary",
        children: [
          e.jsx(h, {
            width: 48,
            height: 48
          }),
          e.jsxs(t, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
              e.jsx(i, {
                variant: "h4-semibold",
                color: "text-primary",
                children: "Complete Verification"
              }),
              e.jsx(i, {
                variant: "bs-regular",
                color: "text-tertiary",
                children: "Continue to complete the verification process."
              })
            ]
          }),
          e.jsx(u, {
            onClick: n,
            children: "Continue"
          })
        ]
      })
    });
  };
  w = () => e.jsx(m, {
    children: e.jsx(D, {})
  });
});
export {
  __tla,
  w as default
};
