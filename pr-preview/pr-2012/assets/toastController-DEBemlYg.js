import { eC as e, ea as a, eD as r, eE as i, __tla as __tla_0 } from "./index-D1Swtpz3.js";
let l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  l = (s, o = false) => {
    const t = {
      position: "bottom-right",
      autoClose: o ? 5e5 : 4e3,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: void 0,
      transition: i,
      rtl: false,
      closeButton: false,
      className: "NotifToastOverride",
      onClick: () => {
      }
    };
    e(a.jsx(r, {
      payload: s
    }), t);
  };
});
export {
  __tla,
  l as s
};
