import { e5 as l, e6 as c, e7 as s, e8 as p, e9 as m, ea as e, eb as f, ec as h, ed as u, __tla as __tla_0 } from "./index-C2jH2XEK.js";
import { C, __tla as __tla_1 } from "./ContentLayout-CMvbJl9T.js";
import { C as d, __tla as __tla_2 } from "./CreateChannel-Cp1eNcQc.js";
import { __tla as __tla_3 } from "./StakingVariant-DhW8W7sL.js";
import { __tla as __tla_4 } from "./useGetPaymentDetails-BGjqsVRD.js";
import { __tla as __tla_5 } from "./Stepper-n0dM99Ny.js";
import { __tla as __tla_6 } from "./ImportPushTokenMessage-DhEjzXbZ.js";
import { __tla as __tla_7 } from "./useGetChannelCategories-CjTKHO4P.js";
import { __tla as __tla_8 } from "./index.esm-BAVu81oq.js";
import "./Common.form-NbJ1DVkQ.js";
import { __tla as __tla_9 } from "./ImageClipper-jVAMwSyJ.js";
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
