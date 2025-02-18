import { eJ as a, e7 as c, __tla as __tla_0 } from "./index-C2jH2XEK.js";
let r;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  r = () => {
    const e = a();
    c.useEffect(() => {
      if (e.hash) {
        const s = new URLSearchParams(e.hash.substring(1)), t = s.get("access_token"), o = s.get("expires_in");
        t && o && (localStorage.setItem("access_token", t), localStorage.setItem("expires_in", o));
      }
    }, []);
  };
});
export {
  __tla,
  r as u
};
