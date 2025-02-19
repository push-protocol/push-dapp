import { e5 as l, e6 as c, e7 as s, e8 as p, e9 as m, ea as e, eb as f, ec as h, ed as u, __tla as __tla_0 } from "./index-AGa8OPve.js";
import { C, __tla as __tla_1 } from "./ContentLayout-DrIneMyi.js";
import { C as d, __tla as __tla_2 } from "./CreateChannel-XyZpjU5t.js";
import { __tla as __tla_3 } from "./StakingVariant-C__XZ4lS.js";
import { __tla as __tla_4 } from "./useGetPaymentDetails-Bvhdr89l.js";
import { __tla as __tla_5 } from "./Stepper-B_xIUEnx.js";
import { __tla as __tla_6 } from "./ImportPushTokenMessage-CR0dBMpD.js";
import { __tla as __tla_7 } from "./useGetChannelCategories-CMCkL1sF.js";
import { __tla as __tla_8 } from "./index.esm-DSACWjwa.js";
import "./Common.form-B0yEfNXt.js";
import { __tla as __tla_9 } from "./ImageClipper-CZzBVJiP.js";
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
