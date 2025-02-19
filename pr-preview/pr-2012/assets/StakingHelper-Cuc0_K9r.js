import { eG as t, __tla as __tla_0 } from "./index-AGa8OPve.js";
let a, u, s;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let o;
  u = (n) => n.div(t.from(10).pow(18)).toString();
  s = (n) => {
    var _a;
    return (_a = n == null ? void 0 : n.toString()) == null ? void 0 : _a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  o = function(n, r = null) {
    return t.from(n);
  };
  a = function(n) {
    return n.div(o(10).pow(18));
  };
});
export {
  __tla,
  a as b,
  u as f,
  s as n
};
