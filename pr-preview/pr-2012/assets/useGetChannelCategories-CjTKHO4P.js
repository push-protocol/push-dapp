import { f3 as t, en as s, fe as n, ff as r, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let l, o;
  l = (e) => {
    var _a, _b, _c;
    return {
      tags: ((_a = e == null ? void 0 : e.tags) == null ? void 0 : _a.tags) || [],
      selectFieldTags: ((_c = (_b = e == null ? void 0 : e.tags) == null ? void 0 : _b.tags) == null ? void 0 : _c.map((a) => ({
        label: a,
        value: a
      }))) || []
    };
  };
  o = () => t({
    method: "GET",
    url: `${s.apiUrl}/v1/channels/tags/all`
  }).then((e) => l(e.data));
  u = () => n({
    queryKey: [
      r
    ],
    queryFn: () => o()
  });
});
export {
  __tla,
  u
};
