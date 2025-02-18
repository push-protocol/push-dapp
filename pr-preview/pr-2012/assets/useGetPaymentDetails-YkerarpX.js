import { f3 as s, fs as a, fe as n, ft as m, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
let r;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let y, o;
  y = (e) => e;
  o = (e) => s({
    method: "GET",
    url: `${a()}/apis/v1/payments/${e == null ? void 0 : e.paymentId}`
  }).then((t) => y(t.data));
  r = (e) => n({
    queryKey: [
      m,
      e == null ? void 0 : e.paymentId
    ],
    queryFn: () => o(e)
  });
});
export {
  __tla,
  r as u
};
