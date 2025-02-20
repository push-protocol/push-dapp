import { e5 as l, e6 as c, e7 as s, e8 as p, e9 as m, ea as e, eb as f, ec as h, ed as u, __tla as __tla_0 } from "./index-D1Swtpz3.js";
import { C, __tla as __tla_1 } from "./ContentLayout-jbLa4puu.js";
import { C as d, __tla as __tla_2 } from "./CreateChannel-CuMF8kh9.js";
import { __tla as __tla_3 } from "./StakingVariant-DNq5gXe8.js";
import { __tla as __tla_4 } from "./useGetPaymentDetails-XEeanHXv.js";
import { __tla as __tla_5 } from "./Stepper-Cp08iENs.js";
import { __tla as __tla_6 } from "./ImportPushTokenMessage-6wo1Sfjl.js";
import { __tla as __tla_7 } from "./useGetChannelCategories-CKhGXq_b.js";
import { __tla as __tla_8 } from "./index.esm-CwzlWqAK.js";
import "./Common.form-B0yEfNXt.js";
import { __tla as __tla_9 } from "./ImageClipper-B4Tf8CLB.js";
let v;
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
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })()
]).then(async () => {
  v = () => {
    const { account: t, isWalletConnected: i, connect: o } = l(), r = c();
    s.useEffect(() => {
      i || o();
    }, [
      t
    ]);
    const { channelDetails: a, loadingChannelDetails: n } = p();
    return s.useEffect(() => {
      a && !n && r(`${m.ChannelDashboard(t)}`);
    }, [
      a
    ]), n ? e.jsx(f, {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      children: e.jsx(h, {
        type: u.SEAMLESS,
        title: "Loading Channel Details. Please wait..."
      })
    }) : e.jsx(C, {
      children: e.jsx(d, {})
    });
  };
});
export {
  __tla,
  v as default
};
