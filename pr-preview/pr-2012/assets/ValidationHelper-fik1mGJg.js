import { eo as d, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let i, e, n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  e = (t, s, a) => (a = a ?? 1, t.length >= a && t.length <= s);
  i = (t) => {
    var s = new RegExp("^((?:https|http):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
    return !!s.test(t);
  };
  n = (t) => d(t);
});
export {
  __tla,
  i as a,
  e as b,
  n as i
};
