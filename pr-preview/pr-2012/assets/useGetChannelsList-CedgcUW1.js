import { u as c, __tla as __tla_0 } from "./InfiniteScroll-8GAnRNnZ.js";
import { eQ as m, eR as y, __tla as __tla_1 } from "./index-D1Swtpz3.js";
let p;
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
  })()
]).then(async () => {
  let f;
  f = ({ userPushSDKInstance: l, page: n, pageSize: a, order: s, sort: u, chain: e, tag: r, subscribed: i }) => l.channel.list({
    page: n,
    limit: a,
    order: s,
    sort: u,
    ...i ? {
      user_subscribed: i
    } : {},
    ...e ? {
      filter: Number(e)
    } : {},
    ...r ? {
      tag: r
    } : {}
  });
  p = ({ order: l, pageSize: n, sort: a, chain: s, tag: u, subscribed: e }) => {
    const { userPushSDKInstance: r } = m((t) => t.user);
    return c({
      queryKey: [
        y,
        r == null ? void 0 : r.account,
        s,
        u,
        e
      ],
      initialPageParam: 1,
      queryFn: ({ pageParam: t }) => f({
        userPushSDKInstance: r,
        order: l,
        sort: a,
        pageSize: n,
        page: t,
        chain: s,
        tag: u,
        subscribed: e
      }),
      getNextPageParam: ({ itemcount: t }, P, o) => n * (o + 1) >= t ? null : o + 1
    });
  };
});
export {
  __tla,
  p as u
};
