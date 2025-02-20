import { ea as e, ep as i, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let l, o;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  o = (s) => {
    try {
      return s.replace(/[\[\]`]/g, "").split(",").map((t) => t.trim());
    } catch (t) {
      return console.error("Failed to parse the stringified list:", t), [];
    }
  };
  l = (s) => {
    const t = s.split(/(\s+|\W+)/);
    return e.jsx(i, {
      color: "text-primary",
      variant: "bs-regular",
      children: t.map((r, a) => /\d+/.test(r) && Number(r) > 100 ? e.jsx(i, {
        variant: "bs-bold",
        color: "text-primary",
        as: "span",
        children: r
      }, a) : /unlimited/i.test(r) ? e.jsx(i, {
        variant: "bs-bold",
        color: "text-primary",
        as: "span",
        children: r
      }, a) : e.jsx("span", {
        children: r
      }, a))
    });
  };
});
export {
  __tla,
  l as f,
  o as p
};
