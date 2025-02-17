import { e7 as s, __tla as __tla_0 } from "./index-UiBHnyIz.js";
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
    const [t, e] = s.useState(false), o = s.useCallback(() => e(true), []), a = s.useCallback(() => e(false), []);
    return {
      isOpen: t,
      onClose: a,
      open: o
    };
  };
});
export {
  __tla,
  r as u
};
